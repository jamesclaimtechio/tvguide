# Campaigns

## What is a Campaign?

A **campaign** is a project container that groups related calls together. Think of it as a folder for organizing your QA work by purpose, time period, or team.

Each campaign has its own:

- **Quality checks** — The criteria used to evaluate calls
- **Calls** — Audio recordings uploaded for analysis
- **Agents** — Team members assigned to this campaign
- **Settings** — Flagging rules, providers, keywords
- **Reports** — AI-generated performance insights

**Example campaigns:**

| Campaign Name | Purpose |
|---------------|---------|
| Q1 2026 Sales | Track sales call quality for Q1 |
| Customer Support - Billing | Billing-related support calls |
| New Agent Training | Calls from agents in training |
| Compliance Audit | Calls selected for compliance review |

---

## Creating a Campaign

### From the Dashboard

1. Click **Campaigns** in the sidebar
2. Click **Create Campaign**
3. Fill in the campaign details:
   - **Name** (required): A descriptive name
   - **Description** (optional): Purpose or context
4. Choose a starting point:
   - **Use Template**: Start with pre-configured quality checks
   - **Blank Campaign**: Start from scratch
5. Click **Create Campaign**

[SCREENSHOT: Create campaign modal with name, description, and template selection]

### Using a Template

Templates provide pre-configured quality checks for common use cases:

| Template | Checks Included |
|----------|-----------------|
| Sales Calls | Opening, needs assessment, objection handling, closing |
| Customer Support | Greeting, problem identification, resolution, satisfaction |
| Collections | Compliance disclosures, payment arrangements, tone |
| Healthcare | HIPAA compliance, patient verification, documentation |
| Financial Services | Regulatory disclosures, suitability, risk warnings |

When you select a template:
1. A new campaign is created
2. Template checks are copied to your campaign
3. You can customize, add, or remove checks as needed

> **Tip**: Templates are a starting point. Customize checks to match your specific requirements.

---

## Campaign Overview

After creating a campaign, you'll land on the campaign overview page.

[SCREENSHOT: Campaign overview showing stats cards, recent calls, and check performance]

### Stats Cards

| Metric | Description |
|--------|-------------|
| **Total Calls** | All calls in this campaign |
| **Completed** | Successfully analyzed calls |
| **Average Score** | Mean quality score across calls |
| **Needs Review** | Calls flagged for attention |

### Recent Calls

A table showing the latest calls with:
- File name
- Agent
- Status
- Score
- Upload date

Click any row to view the call detail page.

### Check Performance

A summary of how each quality check is performing:
- Pass rate percentage
- Number of passes vs. fails
- Average score

---

## Campaign Navigation

When viewing a campaign, use the navigation tabs:

| Tab | Purpose |
|-----|---------|
| **Overview** | Stats and recent activity |
| **Calls** | All calls with filtering and sorting |
| **Checks** | Quality check configuration |
| **Agents** | Agents assigned to this campaign |
| **Reports** | AI-generated performance reports |
| **Settings** | Campaign configuration |

---

## Campaign Settings

Access settings via the **Settings** tab in campaign navigation.

### General Settings

| Setting | Description |
|---------|-------------|
| Campaign Name | Display name for the campaign |
| Description | Optional context about the campaign |

### Flagging Rules

Configure automatic flagging for calls that need review:

| Rule | Description |
|------|-------------|
| **Score Threshold** | Flag calls scoring below X (e.g., 70) |
| **Critical Fail** | Flag if any critical-severity check fails |

When a call matches these rules, it appears in the [Review Queue](./08-review-queue.md).

> **Learn More**: [Review Queue](./08-review-queue.md) for managing flagged calls.

### Provider Settings

Choose which AI services to use:

| Provider | Options |
|----------|---------|
| **Transcription** | AssemblyAI (async, more accurate) or Deepgram (faster, cheaper) |
| **Analysis** | Claude (default) |

> **Note**: Provider changes only affect new calls. Existing calls keep their original analysis.

### Keywords

Track specific words or phrases in call transcripts:

1. Click **Add Keyword**
2. Enter the word or phrase
3. Optionally assign a category
4. Click **Save**

Keywords are matched in transcripts without AI — simple text matching.

> **Learn More**: [Keywords](./12-keywords.md) for detailed keyword configuration.

### API Key

Generate an API key for programmatic call uploads:

1. Click **Generate API Key**
2. Copy the key (shown only once)
3. Store it securely

> **Learn More**: [API Reference](./14-api-reference.md) for API integration.

---

## Editing a Campaign

To edit campaign details:

1. Navigate to the campaign
2. Go to **Settings**
3. Update the fields you want to change
4. Click **Save Changes**

You can edit:
- Campaign name and description
- Flagging rules
- Keywords
- Provider settings

---

## Archiving a Campaign

Archiving hides a campaign from active views while preserving all data.

### When to Archive

- Campaign is complete (e.g., end of quarter)
- No longer actively adding calls
- Want to reduce clutter without losing data

### How to Archive

1. Navigate to the campaign
2. Go to **Settings**
3. Scroll to the bottom
4. Click **Archive Campaign**
5. Confirm the action

### What Happens When You Archive

| What | Behavior |
|------|----------|
| Campaign visibility | Hidden from main list (unless showing archived) |
| Calls | Preserved, still viewable if you access the campaign |
| Quality checks | Preserved |
| Reports | Preserved |
| New uploads | Blocked (must unarchive first) |
| API uploads | Rejected with 403 error |

### Viewing Archived Campaigns

1. Go to **Campaigns** in the sidebar
2. Toggle **Show Archived** at the top
3. Archived campaigns appear with an "Archived" badge

### Unarchiving a Campaign

1. View archived campaigns (toggle **Show Archived**)
2. Click the archived campaign
3. Go to **Settings**
4. Click **Unarchive Campaign**

The campaign returns to active status and accepts new uploads.

---

## Deleting a Campaign

> **Warning**: Campaign deletion is **permanent** and cannot be undone.

### Before Deleting

Consider archiving instead — it preserves data while hiding the campaign.

### How to Delete

1. Archive the campaign first (required)
2. View archived campaigns
3. Click the campaign
4. Go to **Settings**
5. Click **Delete Campaign**
6. Type the campaign name to confirm
7. Click **Delete Permanently**

### What Gets Deleted

Everything associated with the campaign:

- All call recordings
- All transcripts
- All check results and scores
- All reports
- Campaign settings
- Agent assignments (agents themselves remain)

---

## Campaign Best Practices

### Naming Conventions

Use consistent, descriptive names:

| Pattern | Example |
|---------|---------|
| Department + Period | "Sales - Q1 2026" |
| Team + Type | "Support Team A - Billing" |
| Project Name | "New Product Launch Calls" |

### Campaign Scope

Keep campaigns focused:

- **Too broad**: "All Calls 2026" — hard to analyze
- **Too narrow**: "Monday Calls" — too granular
- **Just right**: "Sales Calls - Enterprise Accounts" — focused context

### Regular Reviews

- Review campaign performance weekly
- Generate reports monthly
- Archive completed campaigns quarterly

---

## FAQ

### Can I move calls between campaigns?

No. Calls belong to the campaign where they were uploaded. If you need to re-categorize calls:
1. Download the audio files
2. Upload to the correct campaign
3. Delete from the original campaign

### How many campaigns can I create?

There's no hard limit. Create as many as you need to organize your work effectively.

### Can I duplicate a campaign?

Not directly, but you can:
1. Create a new campaign using the same template
2. Or create a blank campaign and manually recreate checks

### What happens to agents when I archive a campaign?

Agent profiles remain in your organization. Only their assignment to this specific campaign is affected — they won't appear in this campaign's agent list, but their data is preserved.

### Can I bulk-archive multiple campaigns?

Not currently. Archive campaigns one at a time from their Settings page.

### Who can create campaigns?

Both Admins and Members can create campaigns. Campaign creation is not restricted to Admins.

### How do templates work?

Templates are organization-wide starting points. When you create a campaign from a template:
1. A new campaign is created
2. All template checks are copied
3. Changes to the template don't affect existing campaigns
4. Changes to campaign checks don't affect the template

---

## Related Documentation

- [Getting Started](./01-getting-started.md) - Creating your first campaign
- [Quality Checks](./04-quality-checks.md) - Configuring evaluation criteria
- [Uploading Calls](./05-uploading-calls.md) - Adding calls to campaigns
- [Review Queue](./08-review-queue.md) - Managing flagged calls
- [Agents](./09-agents.md) - Assigning agents to campaigns
- [Reports](./11-reports.md) - Generating campaign reports
