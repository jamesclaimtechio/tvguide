---
title: "Reviewing Calls"
description: "The call detail page — audio, transcripts, check results, and scoring"
slug: "call-review"
order: 6
---

## What is the Call Detail Page?

When you click on a call from the dashboard, campaign, or review queue, you open the call detail page. This is your primary workspace for reviewing call quality. It contains:

- An audio player with waveform visualization
- The full transcript with speaker identification
- Quality check results with AI reasoning
- Scoring and metadata
- Action buttons for review, coaching, and escalation

[SCREENSHOT: Call detail page showing audio player, transcript, and check results]

---

## Call Header

At the top of every call detail page, you see:

| Field | Description |
|-------|-------------|
| **File name** | The original file name of the recording |
| **Agent** | The linked agent (if any), with name and link to their profile |
| **Date** | When the call was uploaded |
| **Quality Score** | Overall score (0-100), color-coded: green ≥80, amber ≥60, red <60 |
| **Pass/Fail counts** | Number of checks that passed vs failed |
| **Critical failures** | Count of critical-severity check failures (highlighted in red) |
| **Upload source** | Badge showing how the call was ingested (UI, API, Bulk, SFTP) |

If the call was ingested via SFTP with customer metadata, a customer name badge also appears.

---

## Audio Player

The built-in audio player lets you listen to the call while reviewing.

### Controls

| Control | What It Does |
|---------|--------------|
| **Play/Pause** | Start or stop playback (also: press spacebar) |
| **Skip ±10s** | Jump forward or backward 10 seconds |
| **Seek** | Click anywhere on the waveform to jump to that point |
| **Playback speed** | Adjust speed (0.5x, 1x, 1.5x, 2x) |

The transcript scrolls in sync with the audio, so you can follow along as you listen.

### Speaker Timeline

Below the waveform, speaker segments show who was talking when. Each speaker (agent, customer) is color-coded, making it easy to see conversation dynamics.

---

## Tabs

The call detail page is organized into tabs:

### Overview Tab

A quick summary of the call:
- **Executive Summary** — AI-generated overview of the conversation
- **Key Topics** — Main subjects discussed
- **Sentiment** — Overall call sentiment (Positive, Neutral, Negative) with reasoning
- **Duration** — Length of the call

### Transcript Tab

The full conversation transcript with speaker labels:

- Each speaker turn is labeled (e.g., "Agent," "Customer")
- Timestamps are clickable — click to jump the audio to that point
- **Edit mode**: Toggle to edit the transcript if the AI transcription made errors

### Quality Tab

Individual check results:

- Each quality check shows **Pass**, **Fail**, or **N/A** with a colored indicator
- Expand a check to read the AI's **reasoning** — the specific explanation for the result
- Critical failures are highlighted prominently
- Checks are grouped by category if categories are configured

This tab is where most of the review workflow happens. See [Review Actions](#review-actions) below.

### Coaching Tab

Coaching tools for the linked agent:

- **Coaching notes** — add notes visible to the agent
- **Scorecards** — send or view scorecards for this call
- **Training queue items** — items flagged for coaching from this call

### Insights Tab

Additional AI-generated analysis:

- Deeper conversation patterns
- Compliance observations
- Suggestions for improvement

---

## Review Actions

From the call detail page, you can take several actions:

### Run Analysis

If the call hasn't been analyzed yet (or you want to re-evaluate):

1. **Click Run Analysis**.
2. The call re-enters the pipeline for AI evaluation.
3. Results appear when processing completes.

### Rerun Transcription

If the transcript quality is poor:

1. **Click Rerun Transcription**.
2. A fresh transcript is generated from the audio.
3. Previous transcripts are preserved in version history.

### Link an Agent

If the call isn't linked to an agent:

1. **Click Link Agent**.
2. Select the agent from the dropdown.
3. The call now appears in that agent's performance history.

### Flag for Agent Review

Escalate the call to the linked agent for their self-review:

1. **Click Flag for Agent Review**.
2. The agent sees this call in their review queue with a notification.

### Send a Scorecard

Send a structured evaluation form to the agent:

1. **Click Send Scorecard**.
2. Select a scorecard template.
3. The agent receives the scorecard and can complete it.

See [Scorecards](/scorecards) for details.

### Mark as Reviewed / Dismiss

After reviewing a flagged call:

- **Mark as Reviewed** — Confirms you've reviewed and actioned the call.
- **Dismiss** — Indicates no action is needed for this call.

Both actions remove the call from the review queue.

### Reset Status

Clears the review status, returning the call to its default state. Use this if a call was incorrectly reviewed or dismissed.

### Escalate

For calls with serious issues:

1. **Click Escalate** on a specific check result.
2. Choose the escalation type:
   - **Raise to Agent** — Send to the agent for their response
   - **Notify Seniors** — Alert senior managers and compliance officers
3. The escalation appears in the [Review Queue — Escalated Issues](/review-queue#escalated-issues) tab.

---

## Per-Check Review

On the Quality tab, each individual check result can be reviewed:

| Disposition | Meaning | What Happens |
|-------------|---------|--------------|
| **Pass** | The check failure has been reviewed and is acceptable | Removes from review backlog |
| **Pass with Training** | Acceptable, but agent needs coaching on this area | Creates a training queue item |
| **Fail** | Confirmed failure requiring action | Remains flagged for follow-up |

This per-check review lets you triage individual issues rather than reviewing the entire call as a single unit.

---

## Version History

Each time a call is reprocessed (new transcription or new analysis), TotalView creates a new version:

1. **Click the version selector** in the header area.
2. **Select a previous version** to view its transcript and check results.
3. The current (latest) version is always shown by default.

Version history lets you compare results before and after check changes or transcription improvements.

---

## Call Filtering

From the campaign call list, use the filter bar to find specific calls:

| Filter | Options |
|--------|---------|
| **Search** | Text search by file name |
| **Status** | Pending, Transcribing, Analyzing, Completed, Failed |
| **Score range** | Slider from 0-100 with presets (0-50, 50-70, 70-100) |
| **Date range** | Today, Last 7 days, Last 30 days, This month, Last month, or custom |
| **Agent** | Filter by specific agent |
| **Review status** | No Action Needed, Needs Review, Reviewed, Dismissed |
| **Sentiment** | Positive, Neutral, Negative |
| **Segment** | Apply a saved segment filter |

Active filters appear as colored pills below the filter bar. Click the X on any pill to clear that filter. Click **Clear** to reset all filters.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Space** | Play/pause audio |
| **Arrow keys** | Navigate between check results |
| **Escape** | Close dialogs |

---

## Troubleshooting

### The audio player isn't working

**Symptoms:** Play button doesn't respond, or no sound.
**Cause:** Audio file may still be loading, or browser audio permissions are blocked.
**Solution:**
1. Wait a moment for the audio to load (especially for large files).
2. Check your browser's audio permissions.
3. Try refreshing the page.

### The transcript doesn't match the audio

**Symptoms:** Speaker labels are wrong, or text has significant errors.
**Cause:** Audio quality issues, background noise, or overlapping speakers.
**Solution:**
1. Try **Rerun Transcription** to generate a fresh transcript.
2. Consider switching the transcription provider in campaign settings (AssemblyAI vs Deepgram).
3. Use the **Edit** mode on the Transcript tab to correct specific errors manually.

### I can't see certain action buttons

**Symptoms:** Missing buttons like "Run Analysis" or "Send Scorecard."
**Cause:** Your role doesn't have permission for that action, or the call isn't in the right state.
**Solution:** Check the [Role Access](#role-access) table below. Some actions also require the call to be in Completed status.

---

## FAQ

### Can I download the audio file?

The audio player streams from cloud storage. Direct download is not currently available through the UI.

### How accurate is the transcription?

Transcription accuracy depends on audio quality. Clear recordings with minimal background noise typically achieve 90%+ accuracy. You can edit the transcript manually for corrections.

### Can I compare two calls side by side?

TotalView has a call comparison feature that lets you view two calls together. Select two calls from the call list to compare their transcripts, check results, and scores side by side. This is useful for calibration exercises or understanding why similar calls received different scores.

### What does "N/A" mean for a check result?

**Not Applicable.** The AI determined the check's criteria wasn't relevant to this call (e.g., a "complaint handling" check on a call where no complaint was raised). N/A results don't affect the quality score.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View call details | Own calls | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Play audio | Own calls | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Run analysis | — | Yes | Yes | Yes | Yes |
| Rerun transcription | — | Yes | Yes | Yes | Yes |
| Edit transcript | — | Yes | Yes | Yes | Yes |
| Link agent | — | Yes | Yes | Yes | Yes |
| Mark as reviewed | — | Yes | Yes | Yes | Yes |
| Send scorecard | — | Yes | Yes | Yes | Yes |
| Escalate issues | Yes | Yes | Yes | Yes | Yes |
| Flag for agent review | — | Yes | Yes | Yes | Yes |

---

## Related Documentation

- [Uploading & Processing Calls](/uploading-calls) — how calls get into the system
- [Quality Checks](/quality-checks) — what the AI evaluates
- [Review Queue](/review-queue) — batch processing of flagged calls
- [Agents](/agents) — agent profiles and performance
- [Coaching Pipeline](/coaching) — coaching actions from call review
- [Scorecards](/scorecards) — sending evaluations from calls
