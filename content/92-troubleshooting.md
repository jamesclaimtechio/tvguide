---
title: Troubleshooting
description: Common issues and solutions for TotalView AI
slug: troubleshooting
order: 92
---

# Troubleshooting

This guide covers common issues and their solutions. Use the navigation below to jump to your specific problem.

**Quick Navigation:**

- [Processing Issues](#processing-issues)
- [Upload Issues](#upload-issues)
- [Audio and Playback Issues](#audio-and-playback-issues)
- [Quality Check Issues](#quality-check-issues)
- [API Issues](#api-issues)
- [Account and Access Issues](#account-and-access-issues)
- [Performance Issues](#performance-issues)
- [Getting Help](#getting-help)

---

## Processing Issues

### Call Stuck on "Pending"

**Symptoms:** Call status remains PENDING for more than 5 minutes.

**Possible Causes:**
- Processing queue backlog
- Auto-processing disabled for the campaign
- System maintenance

**Solutions:**

1. **Wait a few more minutes** — During peak times, there may be delays
2. **Check auto-processing setting:**
   - Go to campaign **Settings**
   - Verify **Auto-Process** is enabled
3. **Manually trigger processing:**
   - Open the call detail page
   - Click **Start Processing** or **Transcribe**
4. **Check for system status** — Look for any service announcements

---

### Call Stuck on "Transcribing"

**Symptoms:** Call shows TRANSCRIBING for more than 15-20 minutes.

**Possible Causes:**
- Long audio file (30+ minutes)
- Transcription provider issues
- Network timeout

**Solutions:**

1. **Wait longer for long files:**

| Call Duration | Expected Transcription Time |
|---------------|----------------------------|
| < 10 min | 2-5 min |
| 10-30 min | 5-10 min |
| 30-60 min | 10-20 min |
| 60+ min | 20-40 min |

2. **Check the Jobs page** for status updates
3. **If stuck >30 minutes**, click **Retry Transcription** on the call detail page

---

### Call Stuck on "Analyzing"

**Symptoms:** Call shows ANALYZING for more than 10 minutes.

**Possible Causes:**
- Many quality checks (40+)
- AI service latency
- Rate limiting

**Solutions:**

1. **Wait a bit longer** — Analysis with many checks takes time
2. **Check the number of active checks** — Consider reducing if >40
3. **Retry analysis** from the call detail page

---

### Call Shows "Failed"

**Symptoms:** Red FAILED badge with error message.

**Common Errors and Solutions:**

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "Transcription failed" | Audio quality issues | Re-upload with better audio |
| "No transcript text received" | Silent or empty audio | Verify file has audio content |
| "Analysis failed" | AI processing error | Click **Retry Analysis** |
| "Rate limit exceeded" | Too many API requests | Wait 5 minutes, then retry |
| "File processing error" | Corrupted audio file | Re-export and re-upload |

**How to Retry:**

1. Open the call detail page
2. Look for the **Retry** button
3. Choose what to retry:
   - **Retry Transcription** — Re-transcribe the audio
   - **Retry Analysis** — Re-run quality checks
4. Wait for processing to complete

---

### All Calls Suddenly Failing

**Symptoms:** Multiple calls failing around the same time.

**Possible Causes:**
- Service outage
- API key issues (for API uploads)
- Account-level problem

**Solutions:**

1. **Check for service announcements**
2. **Try a different browser or device**
3. **Wait 15-30 minutes and retry**
4. **Contact support** if the issue persists

---

## Upload Issues

### File Not Accepted

**Symptoms:** Error when selecting or dropping file.

**Common Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| "Unsupported format" | File type not supported | Convert to MP3 or WAV |
| "File too large" | Over 500 MB limit | Compress or split the file |
| "Invalid file" | Corrupted file | Re-export from source |

**Supported Formats:**
- MP3, WAV, M4A, MP4, WebM, OGG

---

### Upload Stuck at 0%

**Symptoms:** Progress bar doesn't move after starting upload.

**Possible Causes:**
- Network connectivity issues
- Browser blocking the upload
- Server timeout

**Solutions:**

1. **Check your internet connection**
2. **Try a different browser** (Chrome, Firefox, Safari)
3. **Disable ad blockers** temporarily
4. **Reduce file size** if very large
5. **Clear browser cache** and retry

---

### Upload Fails Midway

**Symptoms:** Upload starts but fails before completing.

**Possible Causes:**
- Network interruption
- Browser timeout
- Server issue

**Solutions:**

1. **Try again** — Uploads are atomic (all or nothing)
2. **Use a wired connection** instead of WiFi if possible
3. **Upload during off-peak hours**
4. **For large files**, consider using the API with retry logic

---

### Duplicate Detected

**Symptoms:** Call created with DUPLICATE status.

**Cause:** The system detected this call was already uploaded based on:
- Same `client_reference`
- Same filename + agent + date combination

**Solutions:**

- If it's truly a duplicate: No action needed
- If it's a unique call: Use a different `client_reference` or metadata

---

## Audio and Playback Issues

### Audio Won't Play

**Symptoms:** Player shows error or no sound.

**Possible Causes:**
- Audio URL expired
- Browser compatibility issue
- Corrupted source file

**Solutions:**

1. **Refresh the page** — Generates a new playback URL
2. **Try a different browser**
3. **Check browser audio settings** — Ensure site isn't muted
4. **Verify original file plays locally**

---

### Audio Quality Issues

**Symptoms:** Playback is distorted, choppy, or unclear.

**Possible Causes:**
- Source recording quality
- Network streaming issues

**Solutions:**

1. **Check the original file** locally for quality issues
2. **Try a different network connection**
3. **For source quality issues**, improve recording equipment

---

### Transcript Doesn't Match Audio

**Symptoms:** Text doesn't accurately reflect what was said.

**Possible Causes:**
- Poor audio quality
- Background noise
- Multiple overlapping speakers
- Accent or technical terminology

**Solutions:**

1. **Accept some inaccuracy** — Transcription is ~90-95% accurate
2. **Improve source audio quality** for future recordings
3. **Critical calls** — Manually verify against audio

---

### Wrong Timestamps

**Symptoms:** Clicking transcript doesn't sync with audio correctly.

**Possible Causes:**
- Offset in original audio file
- Processing calibration issue

**Solutions:**

- **Manual workaround**: Adjust playback position manually
- **Future uploads**: Ensure audio files don't have silent leading sections

---

## Quality Check Issues

### All Checks Show N/A

**Symptoms:** Every check returns "Not Applicable."

**Possible Causes:**
- Transcript too short
- Checks don't apply to call content
- AI couldn't extract relevant content

**Solutions:**

1. **Review the transcript** — Is it complete?
2. **Check audio length** — Very short calls may lack content
3. **Adjust check prompts** to be more general or handle edge cases

---

### Unexpected Results (Wrong Pass/Fail)

**Symptoms:** Check passes when it should fail (or vice versa).

**Possible Causes:**
- Ambiguous evaluation prompt
- Edge case not covered
- AI interpretation differs from intent

**Solutions:**

1. **Make prompts more specific:**
   - Bad: "Was the greeting good?"
   - Good: "Did the agent say their name and company in the first 30 seconds?"
2. **Add examples** to your prompt of what should pass/fail
3. **Use "Improve with AI"** to refine the prompt
4. **Dispute the finding** if it's an AI error
5. **Test with the Testing Console** before deploying

---

### Check Scores Too Low/High

**Symptoms:** Scores don't match expectations.

**Solutions:**

1. **Review check weights** — Adjust if needed
2. **Check severity settings**
3. **Review prompt clarity**
4. **Calibrate on sample calls** using the Testing Console

---

### Check Limit Reached

**Symptoms:** Cannot add more checks.

**Cause:** Maximum is 50 checks per campaign.

**Solutions:**

- Remove or deactivate unused checks
- Consolidate related checks
- Consider multiple campaigns for different purposes

---

## API Issues

### 401 Unauthorized

**Symptoms:** API returns 401 error.

**Causes:**
- Missing `X-API-Key` header
- Invalid API key
- Key was regenerated

**Solutions:**

1. **Include the header:** `X-API-Key: your-key`
2. **Verify the key** — Copy it exactly from campaign settings
3. **Check if key was regenerated** — Get the new key

---

### 403 Forbidden

**Symptoms:** API returns 403 error.

**Causes:**
- Campaign is archived
- Key is for a different campaign

**Solutions:**

1. **Unarchive the campaign** if it's archived
2. **Use the correct API key** for the target campaign

---

### 409 Conflict (Duplicate)

**Symptoms:** API returns 409 error.

**Cause:** A call with the same `client_reference` already exists.

**Solutions:**

1. **Check if it's truly a duplicate**
2. **Use a unique `client_reference`** for new uploads
3. **Remove the duplicate check** if not needed

---

### 429 Rate Limited

**Symptoms:** API returns 429 error.

**Cause:** Too many requests in a short period.

**Solutions:**

1. **Check `Retry-After` header** for wait time
2. **Implement exponential backoff:**

```python
wait_time = base_delay * (2 ** retry_count)
```

3. **Reduce concurrent requests**
4. **Spread uploads over time**

---

### 413 Payload Too Large

**Symptoms:** API returns 413 error.

**Cause:** File exceeds 500 MB limit.

**Solutions:**

- Compress the audio file
- Use lower bitrate encoding
- Split very long recordings

---

## Account and Access Issues

### Can't Log In

**Symptoms:** Login fails or shows error.

**Possible Causes:**
- Wrong credentials
- Account locked
- Session issues

**Solutions:**

1. **Check email and password** carefully
2. **Use "Forgot Password"** to reset
3. **Clear browser cookies** and try again
4. **Try a different browser**

---

### Can't Access Campaign

**Symptoms:** Campaign not visible or access denied.

**Possible Causes:**
- Not a member of the organization
- Campaign was archived
- Permission was changed

**Solutions:**

1. **Contact your organization admin**
2. **Check if campaign was archived** (toggle "Show Archived")
3. **Verify your organization membership**

---

### Invite Link Expired

**Symptoms:** Error when clicking invite link.

**Cause:** Invite links expire after 7 days.

**Solutions:**

- Ask the admin to **resend the invitation** from Settings → Members

---

### Wrong Organization

**Symptoms:** See wrong data after logging in.

**Cause:** You're viewing a different organization.

**Solutions:**

- Use the **organization switcher** (top-left) to change organizations

---

## Performance Issues

### Dashboard Loading Slowly

**Symptoms:** Dashboard takes a long time to load.

**Possible Causes:**
- Large number of campaigns/calls
- Network latency
- Browser cache issues

**Solutions:**

1. **Clear browser cache** (Cmd/Ctrl + Shift + R)
2. **Use filters** to reduce data displayed
3. **Check internet connection**
4. **Try a different browser**

---

### Analysis Taking Too Long

**Symptoms:** ANALYZING status for extended time.

**Possible Causes:**
- Many quality checks (40+)
- Long transcript
- AI provider latency

**Solutions:**

1. **Reduce active checks** if near the 50 limit
2. **Wait for completion** — Long transcripts take longer
3. **Check the Jobs page** for status

---

## Common Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Page not loading | Refresh (Cmd/Ctrl + R) |
| Stale data | Hard refresh (Cmd/Ctrl + Shift + R) |
| Upload stuck | Clear cache, try different browser |
| Audio issues | Refresh page for new playback URL |
| API errors | Check headers and payload format |
| Session expired | Log out and log back in |
| Slow performance | Clear cache, reduce date range |

---

## Browser Compatibility

TotalView AI works best on modern browsers:

| Browser | Support |
|---------|---------|
| Chrome (latest) | ✓ Full support |
| Firefox (latest) | ✓ Full support |
| Safari (latest) | ✓ Full support |
| Edge (latest) | ✓ Full support |
| Internet Explorer | ✗ Not supported |
| Mobile browsers | Limited (use desktop for full features) |

---

## Getting Help

If issues persist after trying these solutions:

### Before Contacting Support

Gather this information:
- **What you were doing** when the issue occurred
- **Error messages** (exact text or screenshots)
- **Call IDs** or campaign names affected
- **Browser and device** you're using
- **Time** when the issue occurred

### Contact Methods

1. **AI Copilot** — Ask about features and workflows
2. **This Documentation** — Search for specific topics
3. **Organization Admin** — For access and permission issues
4. **TotalView Support** — For technical issues

### Providing Screenshots

When contacting support:
- Include the full page (not cropped)
- Show error messages clearly
- Include the URL if possible

---

## Related Documentation

- [Getting Started](/getting-started) - Basic setup
- [Uploading Calls](/uploading-calls) - Upload methods
- [Analysis & Scoring](/analysis-scoring) - Processing details
- [API Reference](/api-reference) - API errors
- [Quality Checks](/quality-checks) - Check configuration
