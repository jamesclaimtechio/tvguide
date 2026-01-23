---
title: Reviewing Calls
description: Call detail page and review workflow in TotalView AI
slug: reviewing-calls
order: 32
---

# Reviewing Calls

## Overview

The call detail page is where you review AI analysis results, listen to recordings, and take action on findings. This is the heart of the QA workflow.

---

## Navigating to a Call

There are several ways to open a call:

| From | How |
|------|-----|
| Dashboard | Click a call in Recent Activity table |
| Campaign Calls | Click any row in the calls list |
| Review Queue | Click a flagged call |
| AI Copilot | Click a call link in Copilot response |
| Direct URL | `/dashboard/campaigns/[id]/calls/[callId]` |

---

## Call Detail Page Layout

The call detail page has several sections:

[SCREENSHOT: Full call detail page showing all major sections]

### Header

At the top of the page:

| Element | Description |
|---------|-------------|
| File name | Original filename |
| Campaign | Which campaign this call belongs to |
| Status badge | Processing status (COMPLETED, FAILED, etc.) |
| Score badge | Overall quality score (color-coded) |
| Actions | Re-analyze, Delete, Flag for Review |

### Left Column

#### Audio Player

Controls for playing the recording:

| Control | Function |
|---------|----------|
| Play/Pause | Start or stop playback |
| Progress bar | Seek to any position |
| Time display | Current position / Total duration |
| Speed | Adjust playback speed (0.5x to 2x) |
| Volume | Adjust audio volume |

> **Tip**: Click any transcript segment to jump to that point in the audio.

#### Metadata

Call information:

| Field | Description |
|-------|-------------|
| Duration | Call length |
| Call Type | Inbound or Outbound |
| Call Date | When the call occurred |
| Agent | Linked agent name |
| Uploaded | When the file was uploaded |
| Processed | When analysis completed |

### Right Column

#### Quick Summary

AI-generated overview:

- **Executive Summary**: 2-3 sentence call overview
- **Sentiment**: POSITIVE, NEUTRAL, or NEGATIVE with reasoning
- **Key Topics**: Main subjects discussed

#### Check Results

List of all quality checks with results:

- Check name
- Result badge (Pass/Fail/N/A)
- Score
- Expand to see reasoning and evidence

---

## The Transcript

The transcript section shows the full conversation with speaker labels.

### Transcript View

[SCREENSHOT: Transcript panel showing speaker segments]

| Element | Description |
|---------|-------------|
| Speaker label | Who is speaking (Agent, Customer, or Speaker A/B) |
| Timestamp | When this segment occurs |
| Text | What was said |
| Highlight | Evidence highlighted for check results |

### Interacting with the Transcript

**Click a segment:** Jump to that point in the audio

**Highlighted text:** Indicates evidence for a check result

**Search:** Use Ctrl/Cmd+F to search within the transcript

### Speaker Labels

The system detects speakers:

| Label | Meaning |
|-------|---------|
| Agent | Detected as the agent |
| Customer | Detected as the customer |
| Speaker A | First speaker (if detection uncertain) |
| Speaker B | Second speaker |

---

## Check Results

Each quality check shows its result in an expandable card.

### Result Overview

[SCREENSHOT: Check result card showing pass status with score]

| Element | Description |
|---------|-------------|
| Check name | What was evaluated |
| Result badge | Pass (green), Fail (red), N/A (gray) |
| Score | 0-100 score |
| Check type | compliance, quality, business_intel |
| Severity | info, warning, critical |

### Expanded Details

Click a check to expand and see:

| Section | Content |
|---------|---------|
| **Reasoning** | AI's explanation for the score |
| **Evidence** | Quotes from the transcript |
| **Timestamp** | Where in the call the evidence appears |

### Evidence Linking

When you click evidence:
1. The audio jumps to that timestamp
2. The transcript scrolls to that segment
3. The text is highlighted

This makes it easy to verify AI findings.

---

## Taking Action

### Flagging for Review

If a call needs manager attention:

1. Click **Flag for Review** in the header
2. Optionally add a reason
3. Click **Flag**

The call appears in the [Review Queue](/review-queue).

### Adding Notes

Document observations or coaching points:

1. Scroll to the **Notes** section
2. Click **Add Note**
3. Enter your note text
4. Click **Save**

Notes are visible to all team members and are associated with this call.

### Disputing a Finding

If you believe an AI finding is incorrect:

1. Find the check result
2. Click the **Dispute** button (or flag icon)
3. Select a reason:
   - AI misinterpreted the transcript
   - Context not available to AI
   - Other (explain)
4. Add optional comments
5. Submit

Disputed findings are tracked for review but don't automatically change scores.

### Re-Analyzing

To apply updated checks or retry after failure:

1. Click **Re-analyze** in the header
2. Confirm the action
3. Wait for processing to complete

The call goes through the analysis pipeline again.

### Deleting

To permanently remove a call:

1. Click **Delete** in the header
2. Confirm by typing the filename
3. Click **Delete Permanently**

> **Warning**: Deletion removes the audio file, transcript, and all analysis data. This cannot be undone.

---

## Review Workflow Example

Here's a typical workflow for reviewing a flagged call:

### 1. Open the Call

From the Review Queue, click the flagged call.

### 2. Read the Summary

Start with the AI-generated summary to understand what happened.

### 3. Check the Score

Look at the overall score and which checks passed/failed.

### 4. Review Failed Checks

For each failed check:
1. Expand to see reasoning
2. Click the evidence to jump to that moment
3. Listen to the audio
4. Verify the AI's assessment

### 5. Document Findings

Based on your review:
- Add a note with coaching feedback
- Or dispute if the AI was wrong

### 6. Complete the Review

1. Click **Mark as Reviewed** (in Review Queue context)
2. Or **Dismiss** if no action needed

---

## Comparing Calls

To compare multiple calls side-by-side:

1. Go to the campaign's **Calls** page
2. Select 2 calls using checkboxes
3. Click **Compare**
4. View calls in split-screen with synchronized playback

This is useful for:
- Training new agents (good vs. bad examples)
- Investigating performance changes
- Comparing different agents

---

## Keyboard Shortcuts

On the call detail page:

| Shortcut | Action |
|----------|--------|
| `Space` | Play/Pause audio |
| `←` / `→` | Seek backward/forward 5 seconds |
| `↑` / `↓` | Previous/Next transcript segment |
| `R` | Re-analyze |
| `F` | Flag for review |
| `N` | Add note |

---

## Mobile Viewing

The call detail page is responsive but optimized for desktop:

| Feature | Mobile Support |
|---------|----------------|
| Audio playback | ✓ Works |
| Transcript view | ✓ Works (scrollable) |
| Check results | ✓ Works |
| Click-to-seek | Limited (harder to tap) |

For detailed review work, we recommend using a desktop browser.

---

## FAQ

### How do I jump to a specific part of the call?

Three ways:
1. Click any transcript segment
2. Click evidence in a check result
3. Drag the audio progress bar

### Can I download the audio file?

Not directly from the UI. Audio files are stored securely in cloud storage. Contact your admin if you need file exports.

### Can I download the transcript?

Yes. Look for the **Download** or **Export** option in the transcript section. Transcripts export as text or JSON.

### Why can't I see the transcript?

Possible reasons:
- Call is still processing (TRANSCRIBING status)
- Transcription failed (check for FAILED status)
- Audio had no speech content

### What does N/A mean for a check?

N/A (Not Applicable) means the check's criteria weren't relevant to this call. For example, an "upsell opportunity" check on a complaint call.

### Can I edit the transcript?

No. Transcripts are generated by AI and stored as-is. If there are transcription errors, they're typically due to audio quality issues.

### How do I see who added a note?

Each note shows:
- Author name
- Timestamp
- Note content

Notes are attributed to the user who created them.

### Can I delete a note?

Yes, if you're the author or an Admin. Click the delete icon on the note.

---

## Related Documentation

- [Analysis & Scoring](/analysis-scoring) - How results are generated
- [Review Queue](/review-queue) - Managing flagged calls
- [Agents](/agents) - Agent-specific call views
- [Scorecards & Coaching](/scorecards-coaching) - Sending feedback to agents
