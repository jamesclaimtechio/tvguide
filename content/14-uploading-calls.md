---
title: Uploading Calls
description: UI, bulk, and API upload methods for call recordings
slug: uploading-calls
order: 14
---

# Uploading Calls

## Overview

Before TotalView AI can analyze calls, you need to upload audio recordings. There are three ways to upload:

| Method | Best For | Processing |
|--------|----------|------------|
| **Single/Multi-File Upload** | Manual uploads of a few files | Automatic |
| **Bulk Upload** | Large batches with metadata CSV | Automatic |
| **API Upload** | Integration with other systems | Configurable |

All uploaded calls are stored securely in cloud storage (AWS S3) and processed automatically unless you disable auto-processing.

---

## Supported Formats

TotalView AI accepts common audio and video formats:

| Format | Extension | Notes |
|--------|-----------|-------|
| MP3 | `.mp3` | Most common, good compression |
| WAV | `.wav` | Uncompressed, larger files |
| M4A | `.m4a` | Apple format, good quality |
| MP4 | `.mp4` | Video file (audio track extracted) |
| WebM | `.webm` | Web format |
| OGG | `.ogg` | Open format |

### File Requirements

| Requirement | Limit |
|-------------|-------|
| Maximum file size | 500 MB |
| Minimum duration | 10 seconds |
| Maximum duration | 3 hours |
| Audio channels | Mono or stereo |
| Sample rate | Any (recommended: 16kHz+) |

> **Tip**: For best transcription quality, use clear audio with minimal background noise and a sample rate of 16kHz or higher.

---

## Single File Upload

### Step-by-Step

1. Click **Upload** in the sidebar
2. Select a campaign from the dropdown
3. Drag and drop your file onto the upload zone, or click to browse
4. Wait for the upload to complete
5. Optionally add metadata (see below)
6. The file automatically enters the processing queue

[SCREENSHOT: Upload page with drag-and-drop zone and campaign selector]

### Upload Progress

During upload, you'll see:
- Upload percentage
- File name
- Upload speed

After upload completes, the call appears in the campaign's call list with status **PENDING**.

---

## Multi-File Upload

You can upload multiple files at once:

1. Go to the **Upload** page
2. Select your campaign
3. Drag multiple files onto the upload zone, or select multiple files when browsing
4. Files upload in parallel
5. Progress shows for each file

### Limits

- Maximum 20 files at once via UI
- Each file still limited to 500 MB
- Total batch size: practical limit ~2 GB

For larger batches, use **Bulk Upload** or the **API**.

---

## Adding Metadata

Metadata helps you organize and filter calls. You can add metadata during or after upload.

### Available Metadata Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Agent Name** | Display name for the agent | "John Smith" |
| **Agent Code** | Unique identifier for auto-linking | "JS001" |
| **Call Type** | Inbound or Outbound | `OUTBOUND` |
| **Call Date** | When the call occurred | 2026-01-15 |
| **Customer ID** | Your internal customer reference | "CUST-12345" |
| **Disposition** | Call outcome | "Sale Completed" |
| **Client Reference** | External system ID | "CRM-98765" |

### During Upload

1. After selecting files, click **Add Metadata** (or expand the metadata section)
2. Fill in the fields
3. Metadata applies to all files in the current upload

### After Upload

1. Go to the call detail page
2. Click **Edit** in the metadata section
3. Update the fields
4. Click **Save**

---

## Automatic Agent Linking

If you've set up [Agent profiles](/agents), TotalView AI can automatically link calls to agents.

### How It Works

1. Upload includes an **Agent Code** (via metadata or API)
2. System looks for an agent with that code
3. If found, the call is linked to that agent
4. Agent's performance metrics are updated

### Agent Code in Filenames

You can embed agent codes in filenames for automatic detection:

```
Pattern: anything_AGENTCODE_anything.mp3

Examples:
call_JS001_20260115.mp3     → Links to agent JS001
recording-ABC123-morning.mp3 → Links to agent ABC123
```

### Setting Up Auto-Linking

1. Create agent profiles with consistent codes
2. Include agent codes in upload metadata or filenames
3. Calls automatically link on upload

> **Learn More**: [Agents](/agents) for setting up agent profiles.

---

## Bulk Upload

For large batches with structured metadata, use bulk upload.

### Preparing Your Upload

1. **Organize your audio files** in a folder
2. **Create a CSV file** with metadata

### CSV Format

| Column | Required | Description |
|--------|----------|-------------|
| file_name | Yes | Exact filename (including extension) |
| agent_name | No | Agent display name |
| agent_code | No | Agent identifier for linking |
| call_type | No | INBOUND or OUTBOUND |
| call_date | No | YYYY-MM-DD format |
| customer_id | No | Your customer reference |
| disposition | No | Call outcome |

**Example CSV:**
```csv
file_name,agent_name,agent_code,call_type,call_date,disposition
call001.mp3,John Smith,JS001,OUTBOUND,2026-01-15,Sale Completed
call002.mp3,Jane Doe,JD002,INBOUND,2026-01-15,Issue Resolved
call003.mp3,John Smith,JS001,OUTBOUND,2026-01-16,No Answer
```

### Uploading

1. Go to **Upload** page
2. Select your campaign
3. Click **Bulk Upload**
4. Upload your CSV file
5. Upload your audio files (drag all at once)
6. System matches files to CSV rows by filename
7. Click **Start Upload**

[SCREENSHOT: Bulk upload modal showing CSV preview and file matching]

### Monitoring Bulk Jobs

1. Navigate to your campaign
2. Click **Jobs** in the navigation
3. View job progress:
   - Total files
   - Processed files
   - Failed files
   - Status (QUEUED, PROCESSING, COMPLETED)

---

## API Upload

For automated integrations, use the API endpoint.

### Quick Start

```bash
curl -X POST https://app.totalview.ai/api/v1/calls/upload \
  -H "X-API-Key: your-api-key" \
  -F "file=@recording.mp3" \
  -F "agent_code=JS001" \
  -F "call_type=OUTBOUND" \
  -F "call_date=2026-01-15"
```

### API Key Setup

1. Navigate to your campaign
2. Go to **Settings**
3. Find the **API Key** section
4. Click **Generate API Key**
5. Copy and store the key securely

> **Warning**: The API key is shown only once. Store it securely.

> **Learn More**: [API Reference](/api-reference) for complete API documentation.

---

## Processing Pipeline

After upload, calls go through automatic processing:

```
PENDING → TRANSCRIBING → ANALYZING → COMPLETED
                 ↓              ↓
               FAILED        FAILED
```

### Status Meanings

| Status | Description | Duration |
|--------|-------------|----------|
| **PENDING** | Uploaded, waiting in queue | Seconds to minutes |
| **TRANSCRIBING** | Converting audio to text | 1-5 minutes |
| **ANALYZING** | AI evaluating against checks | 1-3 minutes |
| **COMPLETED** | Ready for review | — |
| **FAILED** | Error occurred | — |

### Disabling Auto-Processing

If you want to manually control when calls are processed:

1. Go to campaign **Settings**
2. Find **Auto-Processing**
3. Toggle off
4. Uploaded calls will stay in PENDING until you manually trigger processing

---

## Duplicate Detection

TotalView AI can detect duplicate uploads to prevent reprocessing:

### How It Works

Duplicates are detected based on:
1. **Client Reference**: If the same reference exists in the campaign
2. **File signature**: Same filename + agent + date combination

### Duplicate Behavior

When a duplicate is detected:
- The call is created with status **DUPLICATE**
- No transcription or analysis runs
- Original call remains unchanged
- API returns a specific duplicate response

### Preventing Duplicates

- Use unique client references
- Check for existing calls before uploading
- API users: handle 409 Conflict responses

---

## Upload Troubleshooting

### File Not Accepted

| Issue | Solution |
|-------|----------|
| Unsupported format | Convert to MP3 or WAV |
| File too large | Compress or split the file |
| File corrupted | Re-export from source |

### Upload Stuck at 0%

| Issue | Solution |
|-------|----------|
| Network issue | Check internet connection |
| Browser blocking | Try a different browser |
| Ad blocker | Disable for this site |

### Upload Succeeds but Processing Fails

| Issue | Solution |
|-------|----------|
| Poor audio quality | Re-record or enhance audio |
| Silent file | Verify audio content |
| Corrupted audio | Re-export from source |

> **Learn More**: [Troubleshooting](/troubleshooting) for detailed solutions.

---

## Best Practices

### File Naming

Use consistent, informative filenames:

```
Good: 20260115_JS001_outbound_sale.mp3
Bad:  recording.mp3
```

Include:
- Date (YYYYMMDD)
- Agent code
- Call type
- Outcome (optional)

### Batch Organization

For regular uploads:
- Create a folder per day or week
- Use consistent metadata
- Upload at off-peak times for faster processing

### Quality Control

Before uploading:
- Verify audio is audible
- Check file isn't corrupted
- Confirm correct campaign selected

---

## FAQ

### How long until my call is analyzed?

Typical processing time:

| Call Duration | Total Time |
|---------------|------------|
| < 5 minutes | 2-3 minutes |
| 5-15 minutes | 3-5 minutes |
| 15-30 minutes | 5-8 minutes |
| 30+ minutes | 10+ minutes |

Times vary based on system load.

### Can I cancel an upload?

Yes. Click the **X** next to the uploading file. Partially uploaded files are discarded.

### What happens if upload fails midway?

The partial upload is discarded. Try again — uploads are atomic (all or nothing).

### Can I upload the same file twice?

Yes, but it may be detected as a duplicate if the metadata matches. Use different client references for intentional re-uploads.

### How do I upload to multiple campaigns?

Upload to each campaign separately. A single file can only belong to one campaign.

### Is there a daily upload limit?

No hard limit, but very large volumes may be rate-limited. Contact support for high-volume needs.

### Can I delete uploaded files?

Yes. Go to the call detail page and click **Delete**. This removes the file and all associated data (transcript, analysis results).

---

## Related Documentation

- [Analysis & Scoring](/analysis-scoring) - Processing pipeline details
- [Agents](/agents) - Setting up auto-linking
- [API Reference](/api-reference) - Programmatic uploads
- [Troubleshooting](/troubleshooting) - Upload issues
