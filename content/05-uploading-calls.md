---
title: "Uploading & Processing Calls"
description: "Getting call recordings into the platform and understanding the pipeline"
slug: "uploading-calls"
order: 5
---

## What is the Processing Pipeline?

When you upload a call recording, TotalView processes it through a series of automated steps:

1. **Upload** — The audio file is stored securely in cloud storage (AWS S3).
2. **Transcription** — The audio is converted to text with speaker identification (who said what).
3. **AI Analysis** — Each quality check is evaluated against the transcript using Claude AI.
4. **Scoring** — An overall quality score is calculated based on check results and weights.
5. **Flagging** — If the score is below thresholds or critical checks fail, the call is flagged for review.

You can track each call's progress through these stages via its status indicator.

### Call Statuses

| Status | Icon Color | Meaning |
|--------|------------|---------|
| **Pending** | Slate | Uploaded, waiting in queue |
| **Transcribing** | Blue | Audio is being converted to text |
| **Analyzing** | Purple | AI is evaluating quality checks |
| **Completed** | Green | Processing finished — results are ready |
| **Failed** | Red | Something went wrong (you can retry) |

[SCREENSHOT: Call list showing calls in various processing states]

---

## Manual Upload

The simplest way to get calls into the platform.

### Step-by-Step

1. **Click Upload** in the sidebar. Alternatively, click the **Upload** button on any campaign page.

2. **Select a campaign** from the dropdown.
   - If you navigated from a campaign page, it's pre-selected.
   - You must select a campaign before uploading.

3. **Drag and drop files** onto the upload area, or click to browse your computer.
   - Supported formats: MP3, WAV, M4A, and other common audio formats.
   - You can upload multiple files at once for batch processing.

4. **Click Upload** to begin.

Each file is uploaded to cloud storage and queued for processing. You can leave the page — processing continues in the background.

> **Tip:** Processing typically takes 1-3 minutes per call. You don't need to wait — results appear automatically when ready.

---

## Bulk Upload

For large batches of calls:

1. **Use the manual upload** and select multiple files at once. TotalView processes them in parallel.

2. **Track progress** from the dashboard or campaign page. A bulk job tracker shows overall progress, processing counts, and any failures.

3. **Bulk jobs** show these statuses:
   - **Queued** — Waiting to start
   - **Processing** — Files being worked through
   - **Completed** — All files processed
   - **Failed** — Some or all files encountered errors
   - **Cancelled** — Job was stopped by the user

---

## SFTP Ingestion

For organizations that generate call recordings automatically, SFTP provides hands-off call ingestion. Your recording system drops files into an SFTP folder, and TotalView picks them up automatically.

### How It Works

1. Your call recording system uploads audio files to a designated SFTP server.
2. TotalView periodically sweeps the SFTP folder for new files.
3. New files are matched to campaigns based on folder structure.
4. Optionally, a CSV metadata file provides agent names, call dates, and other data.
5. Matched files are ingested and processed through the normal pipeline.

### Setting Up SFTP

> **Note:** SFTP setup requires Owner or Senior Manager access.

1. **Navigate to your campaign's Settings** and open the **SFTP** section.

2. **Enable SFTP ingestion** for this campaign.

3. **Configure the folder slug** — this is the directory path where files should be uploaded for this campaign.

4. **Set the CSV requirement:**
   - **Required** — A CSV metadata file must accompany each batch of audio files.
   - **Optional** — Audio files are processed with or without a CSV.

5. **Set the batch window** — how long TotalView waits for associated files (CSV + audio) before processing an incomplete batch.

6. **Save your settings.**

Your administrator provides the SFTP server credentials separately.

### SFTP Batch Statuses

| Status | Meaning |
|--------|---------|
| **Detecting** | New files found, scanning for completeness |
| **Waiting for CSV** | Audio files found but CSV is required and missing |
| **Waiting for Files** | CSV found but referenced audio files are missing |
| **Processing** | Files matched and being ingested |
| **Completed** | All files in the batch processed successfully |
| **Incomplete** | Batch processed but some files were missing or failed |
| **Failed** | Batch could not be processed |

### SFTP File Statuses

| Status | Meaning |
|--------|---------|
| **Detected** | File found on SFTP server |
| **Matched** | File matched to a campaign and agent |
| **Processing** | File being ingested |
| **Completed** | File successfully imported |
| **Failed** | File import failed |
| **Duplicate** | File already exists in the system |
| **Skipped** | File excluded by rules or filters |

---

## API Upload

For programmatic integration with your systems.

### Endpoint

Upload calls via the public API at `/api/v1/calls/upload`. Authentication uses API keys with a `tv_` prefix.

### How to Use

1. **Get an API key** from your campaign's API Settings section.

2. **Make a POST request** with the audio file and campaign ID.

3. **Check the response** for the call ID and initial status.

API keys are campaign-scoped and hashed for security. See [Organization Settings — API Access](/org-settings#api-access) for key management.

---

## Upload Sources

Each call tracks how it entered the platform:

| Source | Badge | Meaning |
|--------|-------|---------|
| **UI** | Blue | Manually uploaded through the web interface |
| **API** | Purple | Uploaded via the public API |
| **Bulk Job** | Amber | Part of a bulk upload batch |
| **SFTP** | Green | Automatically ingested via SFTP |

You can filter calls by upload source in the call list.

---

## Agent Matching

When calls are uploaded, TotalView can automatically link them to agents:

- **SFTP uploads**: Agent matching uses file naming patterns or CSV metadata columns.
- **Manual/API uploads**: You can manually link calls to agents after upload from the call detail page.
- **Unlinked calls**: Calls without an agent link still get analyzed but don't appear in agent performance tracking.

See [Agents](/agents) for more on agent profiles and assignment.

---

## Reprocessing Calls

If a call fails or you want to re-evaluate it (e.g., after changing checks):

1. **Open the call detail page.**

2. **Click Rerun Transcription** to regenerate the transcript, or **Run Analysis** to re-evaluate checks against the existing transcript.

3. The call re-enters the pipeline. Previous results are preserved as a version in the history.

---

## Troubleshooting

### My upload fails immediately

**Symptoms:** Error message when trying to upload files.
**Cause:** File format not supported, file too large, or no campaign selected.
**Solution:**
1. Verify the file is a supported audio format (MP3, WAV, M4A).
2. Make sure you've selected a campaign.
3. Try uploading a single file to isolate the issue.

### Calls are stuck on "Pending"

**Symptoms:** Calls remain in Pending status for more than 10 minutes.
**Cause:** Processing queue congestion or service interruption.
**Solution:**
1. Wait a few more minutes — large batches take longer.
2. If the call remains stuck, try reprocessing from the call detail page.

### Calls fail during transcription

**Symptoms:** Status shows "Failed" after the transcription step.
**Cause:** Audio quality issues, unsupported codec, or empty audio file.
**Solution:**
1. Verify the audio file plays correctly on your computer.
2. Check that the file isn't empty (zero duration).
3. Try a different transcription provider in campaign settings (AssemblyAI vs Deepgram).
4. If the issue persists, retry the transcription from the call detail page.

### SFTP files show "Duplicate"

**Symptoms:** Files are marked as Duplicate and not processed.
**Cause:** A file with the same name was already imported.
**Solution:** This is expected behavior — TotalView prevents processing the same file twice. If you need to reprocess, rename the file or use the reprocessing feature from the call detail page.

---

## FAQ

### How long does processing take?

Typically 1-3 minutes per call. Factors that affect processing time:
- Call length (longer calls take more time)
- Number of quality checks (more checks = more evaluation time)
- Queue volume (busy periods may add wait time)

### What's the maximum file size for uploads?

There is no strict file size limit, but very large files (over 2 hours) may take significantly longer to process.

### Can I cancel a processing job?

For individual calls, you can't cancel mid-processing. For bulk jobs, you can cancel the remaining unprocessed items.

### Does reprocessing a call overwrite the original results?

No. Reprocessing creates a new version. The original results are preserved in the version history, accessible from the call detail page.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| Upload calls | — | Yes | Yes | Yes | Yes |
| View upload status | Own calls | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Reprocess calls | — | Yes | Yes | Yes | Yes |
| Configure SFTP | — | — | — | Yes | Yes |
| Manage API keys | — | — | — | Yes | Yes |

---

## Related Documentation

- [Getting Started](/getting-started) — upload your first call
- [Campaigns](/campaigns) — campaign settings including transcription and SFTP
- [Reviewing Calls](/call-review) — what to do after calls are processed
- [Agents](/agents) — linking calls to agent profiles
- [Organization Settings](/org-settings) — API key management
