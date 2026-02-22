---
title: "Getting Started"
description: "Your first 30 minutes on TotalView — from login to your first analyzed call"
slug: "getting-started"
order: 1
---

## What is TotalView?

TotalView is an AI-powered Call Quality Assurance platform. You upload call recordings, and TotalView automatically transcribes them and evaluates every call against your custom quality checks. Instead of manually listening to a sample of calls, you get AI-driven analysis of 100% of your calls — with quality scores, flagged issues, and coaching insights.

**Key concepts you will encounter:**

- **Organization** — Your company workspace in TotalView. All campaigns, agents, and data live within your organization.
- **Campaign** — A grouping of calls with shared quality checks. Think of it as a QA program — for example, "Sales Inbound" or "Customer Support Q1."
- **Quality Check** — A specific criterion the AI evaluates on every call. For example, "Did the agent verify the caller's identity?" or "Was the closing statement professional?"

---

## Signing In

TotalView uses passwordless authentication. You sign in with your email and a one-time verification code.

1. **Open TotalView** in your browser.

2. **Enter your email address** and click **Continue with email**.
   - TotalView sends you an 8-character verification code.

3. **Check your email** for the code. Enter it in the verification field and click **Verify and sign in**.
   - The code is alphanumeric (letters and numbers), uppercase only.
   - Codes expire after 10 minutes.

4. **If you don't receive the code**, wait 60 seconds, then click **Resend code**.

> **Tip:** If you are an agent, use the **Login as Agent** link on the sign-in page instead. This takes you to the agent-specific portal.

### First-Time vs Returning Users

- **New users** (invited by an organization): You are taken to the dashboard for your organization.
- **New users** (no organization yet): You are directed to the onboarding wizard.
- **Returning users**: You land on the dashboard. If you belong to multiple organizations, you may see an organization selector first.

---

## The Onboarding Wizard

If you are setting up a new organization, TotalView guides you through a multi-step onboarding wizard.

### Step 1: Create Your Organization

1. **Enter your organization name** — this is the name your team will see (e.g., "Acme Insurance QA").

2. **Complete the setup** and proceed to the next step.

### Step 2: Create Your First Campaign

1. **Choose a campaign template** or start from scratch. Templates come with pre-built quality checks for common use cases (e.g., compliance, sales quality).

2. **Name your campaign** — pick something descriptive (e.g., "Inbound Claims Calls").

3. **Review the quality checks** included with your template. You can add, edit, or remove checks later.

### Remaining Steps

The wizard continues with additional configuration (transcription settings, team invitations). You can complete these now or skip and return to settings later.

Once onboarding is complete, you land on the main dashboard.

---

## Creating Your First Campaign

If you skipped the onboarding wizard or want to add another campaign:

1. **Navigate to Campaigns** in the sidebar.

2. **Click Create Campaign**.

3. **Enter a name and description** for your campaign.

4. **Optionally select a template** to start with pre-configured quality checks.

5. **Click Create**.

You now have a campaign ready for call uploads. See [Campaigns](/campaigns) for full configuration options including quality checks, transcription settings, and flagging rules.

---

## Uploading Your First Call

1. **Navigate to Upload** in the sidebar, or click the **Upload** button on your campaign page.

2. **Select the campaign** you want to upload to (pre-selected if you came from a campaign page).

3. **Drag and drop your audio file(s)** onto the upload area, or click to browse.
   - Supported formats: MP3, WAV, M4A, and other common audio formats.
   - You can upload multiple files at once.

4. **Click Upload** to start the process.

### What Happens Next

After you upload, TotalView processes each call through a pipeline:

1. **Upload** — The file is stored securely.
2. **Transcription** — The audio is transcribed with speaker identification (who said what).
3. **AI Analysis** — Each quality check is evaluated against the transcript.
4. **Scoring** — An overall quality score is calculated and flagging rules are applied.

You can track progress on the dashboard. Each call shows its current status:

| Status | Meaning |
|--------|---------|
| Pending | Uploaded, waiting to be processed |
| Transcribing | Audio is being converted to text |
| Analyzing | AI is evaluating quality checks |
| Completed | Analysis is done — results are ready |
| Failed | Something went wrong (you can retry) |

> **Tip:** Processing typically takes 1-3 minutes per call depending on length. You don't need to wait — results appear automatically when ready.

See [Uploading & Processing Calls](/uploading-calls) for bulk upload, SFTP automation, and troubleshooting.

---

## Reading Your First Results

Once a call shows **Completed** status:

1. **Click the call** from your dashboard or campaign page.

2. **Review the Overview tab** for a quick summary:
   - **Quality Score** (0-100) — the overall rating based on your checks
   - **Executive Summary** — AI-generated highlights
   - **Pass/Fail counts** — how many checks passed vs failed
   - **Key Topics** — main subjects discussed

3. **Listen to the audio** using the built-in player. The transcript scrolls in sync.

4. **Check the Quality tab** to see individual check results:
   - Each check shows **Pass**, **Fail**, or **N/A** with the AI's reasoning.
   - Critical failures are highlighted in red.

5. **Take action** if needed:
   - **Flag for review** if you want a colleague to look at it
   - **Send a scorecard** to the agent for self-assessment
   - **Add a coaching note** for the agent's development

See [Reviewing Calls](/call-review) for the complete review workflow.

---

## What to Do Next

Now that you have your first results, here are the recommended next steps:

| Task | When to Do It | Guide |
|------|---------------|-------|
| Add more quality checks | Before uploading more calls | [Quality Checks](/quality-checks) |
| Invite team members | When you want others reviewing calls | [Organization Settings](/org-settings#inviting-members) |
| Set up agents | To track individual performance | [Agents](/agents) |
| Configure flagging rules | To auto-flag calls needing review | [Campaigns](/campaigns#flagging-rules) |
| Upload more calls | To build your analysis dataset | [Uploading Calls](/uploading-calls) |
| Set up SFTP | For automated call ingestion | [Uploading Calls](/uploading-calls#sftp-ingestion) |

---

## Troubleshooting

### I didn't receive my verification code

**Symptoms:** No email after clicking "Continue with email."
**Cause:** Email may be in spam, or you've been rate-limited.
**Solution:**
1. Check your spam/junk folder.
2. Wait 60 seconds, then click **Resend code**.
3. If the problem persists, contact your administrator — your email may not be registered.

### I see "No account found"

**Symptoms:** Error message after entering your email.
**Cause:** Your email hasn't been invited to any organization.
**Solution:** Ask your organization administrator to send you an invite. New users need an invitation before they can sign in.

### My call is stuck on "Pending" or "Failed"

**Symptoms:** Call doesn't progress through the pipeline.
**Cause:** Various — file format issues, service interruptions, or configuration problems.
**Solution:**
1. Check that the audio file is a supported format.
2. Wait a few minutes — processing queues may be busy.
3. If the call shows **Failed**, click into it and try **Retry**.
4. If retries fail, check the campaign's transcription settings.

---

## FAQ

### How long does it take to analyze a call?

Processing typically takes 1-3 minutes per call. Longer calls or busy periods may take slightly longer. You can upload multiple calls and TotalView processes them in parallel.

### Can I use TotalView on mobile?

Yes. TotalView has a responsive design that works on mobile browsers. The sidebar becomes a drawer menu, and all core features are accessible.

### What audio formats are supported?

TotalView supports common audio formats including MP3, WAV, and M4A. For best results, use clear recordings with minimal background noise.

### How many quality checks can I have per campaign?

Each campaign supports up to 50 quality checks. This is typically more than enough — most organizations use 10-25 checks per campaign.

---

## Related Documentation

- [Understanding the Dashboard](/dashboard) — learn what all the numbers and charts mean
- [Campaigns](/campaigns) — deep dive into campaign configuration
- [Quality Checks](/quality-checks) — how to write effective evaluation criteria
- [Organization Settings](/org-settings) — invite team members and configure roles
