---
title: "Campaigns"
description: "Creating and configuring campaign workspaces for your QA programs"
slug: "campaigns"
order: 3
---

## What is a Campaign?

A campaign is the central organizing unit in TotalView. It defines:

- **What to evaluate** — the quality checks the AI runs on every call
- **Who has access** — which team members can view and manage calls
- **How to score** — severity levels, flagging thresholds, and scoring weights
- **Where calls come from** — manual upload, API, or SFTP

Think of a campaign as a QA program with its own rules and team.

[SCREENSHOT: Campaign detail page showing KPI cards and analytics]

---

## Viewing Your Campaigns

1. **Click Campaigns** in the sidebar.

2. You see a list of all campaigns you have access to. Each campaign card shows:
   - Campaign name
   - Call count and completion rate for the selected period
   - Average quality score with a 6-week sparkline trend

3. **Use the time period picker** to change the date range for stats.

4. **Click a campaign** to open its detail page.

> **Note:** Managers see only campaigns they are assigned to. Compliance Officers and above see all campaigns. See [Role Access](#role-access) below.

---

## Creating a Campaign

1. **Navigate to Campaigns** and click **Create Campaign**.

2. **Enter a name** — something descriptive (e.g., "Inbound Claims Calls").

3. **Enter a description** (optional) — helps your team understand the campaign's purpose.

4. **Choose a template** (optional) — templates come with pre-configured quality checks for common use cases. You can modify them after creation.

5. **Click Create**.

Your new campaign is empty and ready for configuration. The next steps are:
1. [Add quality checks](/quality-checks#creating-a-check) to define what the AI evaluates
2. [Upload calls](/uploading-calls) to start analysis
3. Optionally, configure advanced settings (see below)

---

## Campaign Detail Page

The campaign detail page is your analytics hub for a single campaign.

### KPI Cards

Four metrics appear at the top:

| KPI | What It Shows |
|-----|---------------|
| **Avg Quality Score** | Mean score across completed calls (color-coded: green ≥80, amber ≥60, red <60) |
| **Calls** | Total call count in the period. Links to the call list or upload page if zero. |
| **Review Backlog** | Number of calls awaiting review (amber if >0, green if all reviewed) |
| **Completion Rate** | Percentage of calls that completed the full analysis pipeline |

### Analytics Charts

When you have completed calls, the detail page shows:

- **Score Distribution** — Breakdown of calls by quality tier (Excellent, Good, Fair, Poor)
- **Agent Comparison** — Leaderboard of agents by average score within this campaign
- **Top Failing Checks** — The quality checks that fail most often (up to 10)
- **Agents at Risk** — Agents scoring below the 70% threshold
- **Recent Calls Matrix** — Last 5 calls showing pass/fail status per quality check

### Recent Calls

The bottom section lists the 5 most recent calls with:
- File name (clickable to open the call detail)
- File size
- Processing status badge
- Upload date
- View button

Click **View all calls** to see the full call list with filtering.

---

## Campaign Settings

Access campaign settings from the campaign detail page by clicking **Settings** (or the gear icon).

### General Settings

- **Campaign name** — rename your campaign
- **Description** — update the purpose description

### AI and Transcription

| Setting | Options | Default |
|---------|---------|---------|
| Transcription Provider | AssemblyAI, Deepgram | AssemblyAI |
| LLM Provider | Claude (Anthropic) | Claude |

- **AssemblyAI** — Higher accuracy, asynchronous processing via webhooks
- **Deepgram** — Faster processing, approximately 65% lower cost, synchronous

### Audio Configuration

| Setting | Options | Default |
|---------|---------|---------|
| Audio Channel Mode | Mono (single channel), Dual (separate channels per speaker) | Mono |

Dual-channel audio produces better speaker diarization (identifying who said what) when your recordings have separate channels for the agent and customer.

### Flagging Rules

Flagging rules determine which calls automatically enter the [Review Queue](/review-queue).

| Rule Type | Description |
|-----------|-------------|
| **Score threshold** | Flag calls scoring below a set percentage (e.g., below 70%) |
| **Critical check failure** | Flag calls where any critical-severity check fails |
| **Agent flag rules** | Custom rules per agent (e.g., flag if agent scores below 60%) |

Configure these to ensure the most important calls get human review without overwhelming your team with false positives.

### Check Categories

Organize your quality checks into categories (e.g., "Compliance," "Sales Quality," "Customer Service"). Categories help group check results on the call detail page and in reports.

### Campaign Scripts

Attach call scripts or guidelines to your campaign. Agents and reviewers can reference these while reviewing calls.

### Notification Rules

Set up alerts for specific events:

1. **Click Add Rule** in the Notifications section.
2. **Choose the trigger** — e.g., "When a call is flagged," "When analysis completes."
3. **Select recipients** — individual users or by role (all managers, all compliance officers, etc.).
4. **Save the rule.**

Recipients receive in-app notifications and optionally email alerts.

### SFTP Configuration

Enable automated call ingestion via SFTP. See [Uploading Calls — SFTP Ingestion](/uploading-calls#sftp-ingestion) for setup details.

- **Folder slug** — the SFTP directory path for this campaign
- **CSV requirement** — whether metadata CSV files are required
- **Batch window** — how long to wait for associated files before processing

### API Settings

View and manage API keys for programmatic call upload to this campaign. See [Organization Settings — API Access](/org-settings#api-access) for details.

---

## Campaign Members

Control who can access a campaign:

1. **Navigate to the campaign's Members section.**

2. **Add members** by selecting users from your organization.

3. **Members with the Manager role** see only campaigns they are explicitly assigned to.

4. **Compliance Officers and above** see all campaigns regardless of assignment.

To remove a member, click the remove icon next to their name.

---

## Segment Filtering

You can filter campaign analytics by a saved segment:

1. **Open a campaign detail page.**
2. **Select a segment** from the segment dropdown (if any exist).
3. All KPIs and charts update to show only calls matching that segment's filters.

See [Reports, Segments & AI Copilot — Segments](/reports-segments-copilot#segments) for how to create segments.

---

## Archiving a Campaign

When a QA program is complete, you can archive the campaign instead of deleting it. Archived campaigns retain all data but are hidden from the default view.

---

## Troubleshooting

### My campaign shows no analytics even though I have calls

**Symptoms:** Charts and attention cards are empty.
**Cause:** Analytics require completed calls. If calls are still processing, analytics won't appear yet.
**Solution:**
1. Check individual call statuses — look for Completed status.
2. If calls show Failed, investigate and retry them.
3. Analytics data is cached for 10 minutes, so new results may take a moment to appear.

### I can't see a campaign that exists

**Symptoms:** A campaign doesn't appear in your sidebar or campaigns list.
**Cause:** You don't have access. Managers only see assigned campaigns.
**Solution:** Ask your organization owner or senior manager to add you as a campaign member.

---

## FAQ

### How many campaigns can I have?

There is no hard limit on campaigns per organization. Create as many as needed for your QA programs.

### Can I move calls between campaigns?

No. Calls are permanently associated with the campaign they were uploaded to. Upload new copies to a different campaign if needed.

### What happens when I archive a campaign?

The campaign and all its data (calls, checks, results) are preserved but hidden from the default view. You can unarchive later.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View assigned campaigns | — | Yes | Yes | Yes | Yes |
| View all campaigns | — | — | Yes | Yes | Yes |
| Create campaigns | — | Yes | Yes | Yes | Yes |
| Edit campaign settings | — | — | — | Yes | Yes |
| Manage campaign members | — | — | — | Yes | Yes |
| Archive campaigns | — | — | — | — | Yes |

---

## Related Documentation

- [Quality Checks](/quality-checks) — add evaluation criteria to your campaign
- [Uploading & Processing Calls](/uploading-calls) — get calls into your campaign
- [Reviewing Calls](/call-review) — review analyzed calls in detail
- [Review Queue](/review-queue) — work through flagged calls
- [Agents](/agents) — assign agents to campaigns
- [Reports, Segments & AI Copilot](/reports-segments-copilot) — deeper campaign analytics
