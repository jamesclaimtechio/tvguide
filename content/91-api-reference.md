---
title: API Reference
description: Programmatic call uploads and data retrieval via REST API
slug: api-reference
order: 91
---

# API Reference

## Overview

The TotalView AI API allows you to programmatically upload call recordings and retrieve call data. This is useful for:

- Automating call ingestion from your telephony system
- Integrating with CRM or other business systems
- Building custom workflows

**Base URL:** `https://app.totalview.ai/api/v1`

---

## Authentication

All API requests require authentication via an API key.

### Getting an API Key

API keys are campaign-specific:

1. Navigate to your campaign
2. Go to **Settings**
3. Find the **API Key** section
4. Click **Generate API Key**
5. Copy the key immediately

> **Warning**: The API key is shown only once. Store it securely. If lost, generate a new key (which invalidates the old one).

[SCREENSHOT: API key section in campaign settings]

### Using the API Key

Include the key in the `X-API-Key` header:

```bash
curl -X POST https://app.totalview.ai/api/v1/calls/upload \
  -H "X-API-Key: your-api-key-here" \
  -F "file=@recording.mp3"
```

---

## Endpoints

### Upload Call

Upload a new call recording for processing.

**Endpoint:** `POST /calls/upload`

**Content-Type:** `multipart/form-data`

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | File | Yes | Audio file (MP3, WAV, M4A, MP4) |
| `agent_name` | String | No | Agent display name |
| `agent_code` | String | No | Agent identifier for auto-linking |
| `call_type` | String | No | `INBOUND` or `OUTBOUND` |
| `call_date` | String | No | ISO 8601 date (e.g., `2026-01-15`) |
| `customer_id` | String | No | Your customer reference |
| `disposition` | String | No | Call outcome |
| `client_reference` | String | No | External system ID (for deduplication) |

#### Example Request

```bash
curl -X POST https://app.totalview.ai/api/v1/calls/upload \
  -H "X-API-Key: your-api-key" \
  -F "file=@/path/to/recording.mp3" \
  -F "agent_code=JS001" \
  -F "agent_name=John Smith" \
  -F "call_type=OUTBOUND" \
  -F "call_date=2026-01-15" \
  -F "customer_id=CUST-12345" \
  -F "disposition=Sale Completed" \
  -F "client_reference=CRM-98765"
```

#### Success Response

**Status:** `201 Created`

```json
{
  "success": true,
  "data": {
    "call_id": "cmj7abc123def456",
    "file_name": "recording.mp3",
    "status": "PENDING",
    "campaign_id": "cmp_xyz789",
    "created_at": "2026-01-15T10:30:00Z"
  }
}
```

#### Error Responses

**401 Unauthorized**

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

**403 Forbidden**

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Campaign is archived"
  }
}
```

**409 Conflict (Duplicate)**

```json
{
  "success": false,
  "error": {
    "code": "DUPLICATE",
    "message": "Call with this client_reference already exists",
    "existing_call_id": "cmj7existing123"
  }
}
```

**413 Payload Too Large**

```json
{
  "success": false,
  "error": {
    "code": "FILE_TOO_LARGE",
    "message": "File exceeds maximum size of 500MB"
  }
}
```

**415 Unsupported Media Type**

```json
{
  "success": false,
  "error": {
    "code": "UNSUPPORTED_FORMAT",
    "message": "File format not supported. Use MP3, WAV, M4A, or MP4"
  }
}
```

**429 Too Many Requests**

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Retry after 60 seconds"
  },
  "retry_after": 60
}
```

---

### Get Call IDs

Retrieve call IDs for a campaign (for integration purposes).

**Endpoint:** `GET /campaigns/{campaign_id}/calls/ids`

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | String | No | Filter by status (COMPLETED, PENDING, etc.) |
| `from_date` | String | No | Start date (ISO 8601) |
| `to_date` | String | No | End date (ISO 8601) |
| `limit` | Number | No | Max results (default 100, max 1000) |
| `offset` | Number | No | Pagination offset |

#### Example Request

```bash
curl -X GET "https://app.totalview.ai/api/v1/campaigns/cmp_xyz789/calls/ids?status=COMPLETED&limit=50" \
  -H "X-API-Key: your-api-key"
```

#### Success Response

```json
{
  "success": true,
  "data": {
    "call_ids": [
      "cmj7abc123",
      "cmj7def456",
      "cmj7ghi789"
    ],
    "total": 150,
    "limit": 50,
    "offset": 0,
    "has_more": true
  }
}
```

---

## Rate Limits

To ensure fair usage, the API has rate limits:

| Limit | Value |
|-------|-------|
| Requests per minute | 60 |
| Concurrent uploads | 10 |
| Daily uploads | No hard limit (contact support for high volume) |

### Handling Rate Limits

When rate limited:

1. Check the `Retry-After` header or `retry_after` field
2. Wait the specified seconds
3. Retry the request

**Example with exponential backoff:**

```python
import time
import requests

def upload_with_retry(file_path, api_key, max_retries=3):
    url = "https://app.totalview.ai/api/v1/calls/upload"
    headers = {"X-API-Key": api_key}
    
    for attempt in range(max_retries):
        with open(file_path, 'rb') as f:
            response = requests.post(url, headers=headers, files={"file": f})
        
        if response.status_code == 429:
            retry_after = response.json().get('retry_after', 60)
            wait_time = retry_after * (2 ** attempt)  # Exponential backoff
            time.sleep(wait_time)
            continue
        
        return response.json()
    
    raise Exception("Max retries exceeded")
```

---

## Processing Flow

After uploading via API:

```
Upload (201) → PENDING → TRANSCRIBING → ANALYZING → COMPLETED
```

The API returns immediately with `PENDING` status. Processing happens asynchronously.

### Auto-Processing

By default, uploaded calls are processed automatically.

To disable auto-processing:
1. Go to campaign **Settings**
2. Toggle off **Auto-Process API Uploads**
3. Calls will stay in PENDING until manually triggered

---

## Deduplication

Use `client_reference` to prevent duplicate uploads:

```bash
-F "client_reference=CRM-98765"
```

If a call with the same `client_reference` already exists in the campaign:
- API returns `409 Conflict`
- No duplicate is created
- Response includes the existing call ID

### Best Practice

Always include a unique `client_reference` from your source system:
- CRM record ID
- Telephony system call ID
- Unique timestamp + agent combination

---

## Webhooks (Coming Soon)

Webhook support for receiving notifications when calls complete processing is planned for a future release.

In the meantime, poll the API or check the UI for call status updates.

---

## Code Examples

### Python

```python
import requests

API_KEY = "your-api-key"
BASE_URL = "https://app.totalview.ai/api/v1"

def upload_call(file_path, agent_code=None, call_type=None):
    """Upload a call recording."""
    headers = {"X-API-Key": API_KEY}
    
    with open(file_path, 'rb') as f:
        files = {"file": f}
        data = {}
        
        if agent_code:
            data["agent_code"] = agent_code
        if call_type:
            data["call_type"] = call_type
        
        response = requests.post(
            f"{BASE_URL}/calls/upload",
            headers=headers,
            files=files,
            data=data
        )
    
    return response.json()

# Example usage
result = upload_call(
    "/path/to/call.mp3",
    agent_code="JS001",
    call_type="OUTBOUND"
)
print(result)
```

### Node.js

```javascript
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

const API_KEY = 'your-api-key';
const BASE_URL = 'https://app.totalview.ai/api/v1';

async function uploadCall(filePath, metadata = {}) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));
  
  Object.entries(metadata).forEach(([key, value]) => {
    if (value) form.append(key, value);
  });
  
  const response = await axios.post(`${BASE_URL}/calls/upload`, form, {
    headers: {
      'X-API-Key': API_KEY,
      ...form.getHeaders()
    }
  });
  
  return response.data;
}

// Example usage
uploadCall('./call.mp3', {
  agent_code: 'JS001',
  call_type: 'OUTBOUND'
}).then(console.log);
```

### cURL (Bash Script)

```bash
#!/bin/bash

API_KEY="your-api-key"
FILE_PATH="$1"
AGENT_CODE="$2"

curl -X POST "https://app.totalview.ai/api/v1/calls/upload" \
  -H "X-API-Key: $API_KEY" \
  -F "file=@$FILE_PATH" \
  -F "agent_code=$AGENT_CODE" \
  -F "call_type=OUTBOUND"
```

Usage: `./upload.sh /path/to/call.mp3 JS001`

---

## API Key Management

### Key Security

- Store keys in environment variables, not in code
- Use secrets management for production
- Never commit keys to version control
- Rotate keys periodically

### Rotating Keys

To rotate an API key:

1. Go to campaign **Settings → API Key**
2. Click **Regenerate Key**
3. Copy the new key
4. Update your integration
5. The old key is immediately invalidated

### Key Scope

Each API key is scoped to a single campaign:
- Can only upload to that campaign
- Cannot access other campaigns
- Different campaigns need different keys

---

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | Missing or invalid key | Check X-API-Key header |
| 403 Forbidden | Campaign archived | Unarchive the campaign |
| 409 Conflict | Duplicate client_reference | Check for existing call |
| 413 Too Large | File over 500MB | Compress or split the file |
| 415 Unsupported | Wrong file format | Use MP3, WAV, M4A, MP4 |
| 429 Rate Limited | Too many requests | Wait and retry with backoff |

### Testing Your Integration

1. Start with a single test file
2. Verify the response
3. Check the call appears in the UI
4. Confirm processing completes
5. Then scale up uploads

---

## FAQ

### How do I get the call results via API?

Currently, the API is upload-focused. To get call results:
- Use the web interface
- Use AI Copilot for queries
- Generate reports

A results API is planned for future releases.

### Can I update call metadata after upload?

Not via API. Use the web interface to edit call metadata.

### What happens if upload is interrupted?

Partial uploads are discarded. The upload is atomic — it either succeeds completely or fails.

### Can I delete calls via API?

Not currently. Use the web interface for deletion.

### How do I know when a call is processed?

Polling: Check the call status via the UI or a future status endpoint.

The call moves from PENDING → TRANSCRIBING → ANALYZING → COMPLETED.

### Is there a sandbox environment?

Contact support for sandbox access for integration testing.

### Can I upload to multiple campaigns?

Yes, but you need separate API keys for each campaign. Include the correct key for the target campaign.

---

## Related Documentation

- [Uploading Calls](/uploading-calls) - All upload methods
- [Analysis & Scoring](/analysis-scoring) - Processing pipeline
- [Troubleshooting](/troubleshooting) - API error solutions
