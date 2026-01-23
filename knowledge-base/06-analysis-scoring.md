# Analysis & Scoring

## Overview

After you upload a call, TotalView AI processes it through a multi-stage pipeline that converts audio to actionable insights. This document explains how that pipeline works and how scores are calculated.

---

## Processing Pipeline

Every call goes through these stages:

```
Upload → PENDING → TRANSCRIBING → ANALYZING → COMPLETED
              ↓           ↓            ↓
           FAILED      FAILED       FAILED
```

### Stage 1: Pending

**What happens:** The call is queued for processing.

**Duration:** Seconds to minutes (depends on queue size)

**Status:** `PENDING`

The call waits in a processing queue. During busy periods, there may be a short delay before transcription begins.

### Stage 2: Transcribing

**What happens:** Audio is converted to text using AI speech recognition.

**Duration:** Typically 1-5 minutes (proportional to call length)

**Status:** `TRANSCRIBING`

The transcription service:
1. Analyzes the audio stream
2. Identifies individual speakers (diarization)
3. Converts speech to text
4. Assigns speaker labels (Speaker A, Speaker B)
5. Timestamps each segment

### Stage 3: Analyzing

**What happens:** AI evaluates the transcript against each quality check.

**Duration:** Typically 1-3 minutes

**Status:** `ANALYZING`

For each quality check, the AI:
1. Reads the transcript
2. Applies the evaluation prompt
3. Determines pass/fail/N/A
4. Assigns a score (0-100)
5. Extracts evidence quotes
6. Records reasoning

Additional analysis includes:
- Overall sentiment detection
- Executive summary generation
- Key topic extraction

### Stage 4: Complete

**What happens:** All processing finished successfully.

**Status:** `COMPLETED`

The call is now ready for review with:
- Full transcript with speaker labels
- Check results with scores
- AI-generated summary
- Sentiment analysis
- Overall quality score

### Failed Status

If any stage encounters an error:

**Status:** `FAILED`

Common failure reasons:
- Audio quality too poor for transcription
- Transcription service timeout
- AI analysis error
- Rate limit exceeded

Failed calls can be retried from the call detail page.

---

## Transcription

### How It Works

TotalView AI uses two transcription providers:

| Provider | Style | Speed | Cost | Best For |
|----------|-------|-------|------|----------|
| **AssemblyAI** | Async (webhook) | Moderate | Higher | Maximum accuracy |
| **Deepgram** | Sync | Faster | Lower | High volume |

Your campaign settings determine which provider is used.

### Speaker Diarization

The transcription identifies different speakers:

- **Speaker A**: First speaker detected
- **Speaker B**: Second speaker detected
- Additional speakers: Speaker C, D, etc.

### Agent Detection

TotalView AI automatically detects which speaker is the agent:

1. Analyzes speaking patterns
2. Looks for introduction phrases ("Hi, this is John from...")
3. Assigns the `agent_speaker_label` field

This helps quality checks focus on agent behavior.

### Transcript Structure

Each transcript contains segments:

| Field | Description |
|-------|-------------|
| Speaker Label | Who is speaking (A, B, etc.) |
| Text | What was said |
| Start Time | When segment begins (milliseconds) |
| End Time | When segment ends (milliseconds) |
| Confidence | Transcription confidence (0-1) |

---

## Quality Check Analysis

### How Checks Are Evaluated

For each check in the campaign:

1. **Context Provided**: The AI receives:
   - Full transcript
   - Check name and type
   - Evaluation prompt
   - Speaker information

2. **Evaluation**: The AI determines:
   - Does this check apply? (Yes/No/N/A)
   - If yes, was the criteria met?
   - What evidence supports this conclusion?

3. **Scoring**: Based on how well criteria were met:
   - 100: Perfectly met
   - 70-99: Met with minor issues
   - 40-69: Partially met
   - 1-39: Mostly not met
   - 0: Completely failed

4. **Result**: The check produces:
   - Result type (pass/fail/na)
   - Score (0-100)
   - Reasoning (explanation)
   - Evidence (transcript quotes)

### Check Priority

Checks are evaluated in priority order (highest first). This allows:
- Critical compliance checks to run first
- Context from early checks to inform later ones

---

## Score Calculation

### Individual Check Scores

Each check receives a score from 0 to 100:

| Score Range | Interpretation | Result |
|-------------|----------------|--------|
| 70-100 | Criteria met | Pass |
| 0-69 | Criteria not met | Fail |
| N/A | Not applicable | Excluded |

### Overall Quality Score

The overall score is a **weighted average** of all check scores:

```
Overall Score = Σ(Check Score × Weight) ÷ Σ(Weights)
```

#### Example Calculation

| Check | Score | Weight | Contribution |
|-------|-------|--------|--------------|
| Opening Greeting | 95 | 1.0 | 95 |
| Customer Verification | 100 | 2.0 | 200 |
| Issue Resolution | 75 | 1.5 | 112.5 |
| Closing | 80 | 1.0 | 80 |
| **Totals** | | **5.5** | **487.5** |

**Overall Score** = 487.5 ÷ 5.5 = **88.6**

### N/A Checks

Checks marked as N/A are **excluded** from the overall score calculation:
- They don't add to the numerator
- They don't add to the denominator (weight total)

This prevents irrelevant checks from affecting the score.

### Score Thresholds

Default thresholds (configurable per campaign):

| Threshold | Default | Meaning |
|-----------|---------|---------|
| Pass/Fail | 70 | Checks ≥70 pass |
| Flag for Review | Configurable | Calls below this are flagged |

---

## Additional AI Analysis

Beyond quality checks, each call receives:

### Executive Summary

A 2-3 sentence overview of the call:
- What was the call about?
- What was the outcome?
- Any notable issues?

### Sentiment Analysis

Overall emotional tone of the call:

| Sentiment | Meaning |
|-----------|---------|
| **POSITIVE** | Customer expressed satisfaction |
| **NEUTRAL** | No strong positive or negative |
| **NEGATIVE** | Customer expressed frustration |

Sentiment includes reasoning explaining the classification.

### Key Topics

Main subjects discussed in the call:
- Product/service names
- Issue categories
- Customer concerns

---

## Processing Times

Typical end-to-end processing times:

| Call Duration | Transcription | Analysis | Total |
|---------------|---------------|----------|-------|
| < 5 minutes | 1-2 min | 1 min | 2-3 min |
| 5-15 minutes | 2-3 min | 1-2 min | 3-5 min |
| 15-30 minutes | 3-5 min | 2-3 min | 5-8 min |
| 30-60 minutes | 5-10 min | 3-5 min | 8-15 min |

Factors affecting processing time:
- Audio quality (poor quality = slower)
- Number of checks (more checks = longer analysis)
- System load (peak times may be slower)
- Provider (Deepgram faster than AssemblyAI)

---

## Re-Running Analysis

You can re-run analysis on previously processed calls:

### When to Re-Run

- Added or modified quality checks
- Want to apply new checks to old calls
- Previous analysis had issues

### How to Re-Run

**Single Call:**
1. Open the call detail page
2. Click **Re-analyze**
3. Confirm the action
4. Wait for processing to complete

**Bulk Re-Analysis:**
1. Navigate to campaign **Calls** page
2. Select multiple calls using checkboxes
3. Click **Bulk Actions → Re-analyze**
4. Monitor progress in the Jobs page

### What Happens

- New analysis replaces the previous one
- Old check results are preserved with version numbers
- Score history is maintained
- Transcript remains unchanged

---

## Version History

TotalView AI tracks analysis versions:

| Version | Created When |
|---------|--------------|
| v1 | Original analysis |
| v2 | First re-analysis |
| v3+ | Subsequent re-analyses |

You can view historical check results to see how scores changed.

---

## Processing Costs

Processing calls consumes API credits for:

### Transcription

| Provider | Billing |
|----------|---------|
| AssemblyAI | Per audio minute |
| Deepgram | Per audio second (cheaper) |

### AI Analysis

| Component | Billing |
|-----------|---------|
| Check evaluation | Per token (input + output) |
| Summary generation | Per token |
| Sentiment analysis | Included in analysis |

### Viewing Usage

1. Go to **Settings → Usage** (or dashboard sidebar)
2. View usage by:
   - Service (transcription, analysis)
   - Time period
   - Campaign

---

## Troubleshooting

### Call Stuck on Pending

**Possible causes:**
- Processing queue backlog
- Auto-processing disabled

**Solutions:**
1. Wait a few minutes
2. Check if auto-processing is enabled in campaign settings
3. Manually trigger from call detail page

### Call Stuck on Transcribing

**Possible causes:**
- Long audio file
- Transcription service issues

**Solutions:**
1. Wait longer for long files (30+ min = 10+ min processing)
2. Check Jobs page for status
3. If stuck >30 min, retry

### Analysis Failed

**Possible causes:**
- Rate limit exceeded
- AI service error
- Invalid transcript

**Solutions:**
1. Click **Retry** on the call detail page
2. Check error message for details
3. Contact support if persistent

> **Learn More**: [Troubleshooting](./15-troubleshooting.md) for detailed solutions.

---

## FAQ

### How is the overall score calculated?

It's a weighted average of all check scores. Checks with higher weights have more influence. N/A checks are excluded from the calculation.

### Can I change how the score is calculated?

You can adjust individual check weights to change their influence. The weighted average formula itself is fixed.

### What if all checks are N/A?

If every check returns N/A, the call will have no overall score (null). This typically indicates the transcript was too short or the checks didn't match the call content.

### Does re-analysis change the transcript?

No. Re-analysis only re-runs the quality check evaluation. To get a new transcript, delete and re-upload the call.

### Why did my check score 50 instead of 0 or 100?

The AI uses a 0-100 scale to indicate degree of compliance. A score of 50 might mean the criteria was partially met — the agent did some but not all of what was expected.

### How do I know which speaker is the agent?

The system auto-detects the agent based on introduction patterns. You can see the assigned speaker label in the transcript view. If incorrect, quality checks still evaluate based on the full conversation.

---

## Related Documentation

- [Quality Checks](./04-quality-checks.md) - Configuring checks and weights
- [Uploading Calls](./05-uploading-calls.md) - Getting calls into the system
- [Reviewing Calls](./07-reviewing-calls.md) - Viewing analysis results
- [Troubleshooting](./15-troubleshooting.md) - Processing issues
