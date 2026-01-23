---
title: Agents
description: Agent profiles and performance tracking in TotalView AI
slug: agents
order: 51
---

# Agents

## What are Agents?

**Agents** are profiles for your call center representatives. They're separate from platform users — an agent is a person whose calls are being analyzed, not necessarily someone who logs into TotalView AI.

Creating agent profiles allows you to:
- Track individual performance over time
- Compare agents against each other
- Link calls to specific people
- Send coaching scorecards
- Optionally give agents platform access to view their own data

---

## Agents vs. Users

Understanding this distinction is important:

| Concept | Description | Example |
|---------|-------------|---------|
| **User** | Someone who logs into TotalView AI | QA Manager, Supervisor |
| **Agent** | Someone whose calls are analyzed | Call center representative |

An agent can become a user (if invited to the platform), but most agents remain profiles only.

---

## Agent Statuses

| Status | Meaning |
|--------|---------|
| **ACTIVE** | Profile exists, can be linked to calls |
| **INVITED** | Platform invite sent, awaiting signup |
| **ARCHIVED** | Soft-deleted, hidden from active lists |

---

## Managing Agents

### Organization-Wide View

Access via: **Dashboard → Agents** (sidebar)

Shows all agents across your organization with:
- Total agent count
- Organization-wide average score
- Total calls analyzed
- Agents needing attention

### Campaign-Specific View

Access via: **Campaign → Agents**

Shows agents assigned to that specific campaign:
- Campaign-specific performance stats
- Assignment management
- Agent creation for that campaign

---

## Creating an Agent

### Single Agent

1. Go to **Dashboard → Agents** or **Campaign → Agents**
2. Click **Add Agent**
3. Fill in the form:

| Field | Required | Description |
|-------|----------|-------------|
| Name | Yes | Agent's full name |
| Agent Code | Yes | Unique identifier |
| Email | No | Required for platform access |

4. Click **Create Agent**

[SCREENSHOT: Add agent form with name, code, and email fields]

### Bulk Import

Import many agents at once via CSV:

1. Click **Import Agents** or **Import CSV**
2. Download the template (or prepare your own)
3. Fill in the CSV:

```csv
name,agent_code,email
John Smith,JS001,jsmith@company.com
Jane Doe,JD002,jdoe@company.com
Mike Johnson,MJ003,
```

4. Upload the file
5. Review the preview
6. Click **Import**

---

## Agent Codes

The **Agent Code** is a unique identifier used to:
- Match call recordings to agents automatically
- Link the same agent across multiple campaigns
- Integrate with your telephony or CRM system

### Choosing a Code Format

Pick a consistent format that matches your existing systems:

| Format | Example | Best For |
|--------|---------|----------|
| Initials + Number | `JS001` | Small teams (<100) |
| Employee ID | `EMP12345` | HR system integration |
| Email prefix | `jsmith` | Easy to remember |
| Phone extension | `EXT4521` | Telephony integration |
| Department + ID | `SALES-042` | Multi-department orgs |

### Important Rules

- Agent codes are **case-insensitive** (`JS001` = `js001`)
- Codes must be **unique** across your organization
- Codes are used for **automatic call linking**

---

## Automatic Call Linking

When you upload calls with agent codes, TotalView AI automatically links them to agent profiles.

### How It Works

1. Call upload includes agent_code in metadata
2. System searches for matching agent profile
3. If found, call is linked to that agent
4. Agent's performance metrics update

### Ways to Include Agent Code

| Method | How |
|--------|-----|
| **UI Upload** | Fill in the Agent Code field |
| **Bulk Upload** | Include `agent_code` column in CSV |
| **API Upload** | Include `agent_code` in request body |
| **Filename** | Embed code in filename (e.g., `call_JS001_date.mp3`) |

### Filename Pattern Detection

TotalView AI can detect agent codes in filenames:

```
Pattern: anything_AGENTCODE_anything.extension

Examples:
call_JS001_20260115.mp3     → Links to JS001
recording-ABC123-morning.wav → Links to ABC123
```

> **Learn More**: [Uploading Calls](/uploading-calls) for all upload methods.

---

## Agent Performance

### Individual Stats

Each agent profile shows:

| Metric | Description |
|--------|-------------|
| **Total Calls** | Number of analyzed calls |
| **Average Score** | Mean quality score |
| **Pass Rate** | Percentage of checks passed |
| **Calls This Week** | Recent activity |
| **Trend** | Performance direction |

[SCREENSHOT: Agent profile page with performance dashboard]

### How Metrics Are Calculated

**Average Score:**
```
Average = Sum of all call scores ÷ Number of calls
```

**Pass Rate:**
```
Pass Rate = Passed checks ÷ Total checks × 100
```

**Trend:**

| Trend | Meaning | Calculation |
|-------|---------|-------------|
| ↑ Improving | Score going up | This week > Last week + 2 points |
| → Stable | Consistent | Within ±2 points |
| ↓ Declining | Score going down | This week < Last week - 2 points |

### Agent Leaderboard

Compare agents by performance:

1. Go to **Dashboard → Agents** or **Campaign → Agents**
2. Click **Leaderboard** tab
3. View ranking by average score

[SCREENSHOT: Agent leaderboard showing top performers]

The leaderboard helps identify:
- Top performers (for recognition)
- Struggling agents (for coaching)
- Performance distribution

---

## Agent Detail Page

Clicking an agent opens their detail page:

### Overview Tab

- Performance stats summary
- Score trend chart
- Recent calls

### Calls Tab

All calls linked to this agent with:
- Filtering by date, score, status
- Quick access to call details

### Notes Tab

Coaching notes for this agent:
- Add new notes
- View note history
- Link notes to specific calls

### Scorecards Tab

Scorecards assigned to this agent:
- Pending scorecards
- Completed scorecards
- Review history

---

## Agent Notes

Document coaching conversations and observations:

### Adding a Note

1. Open the agent's profile
2. Go to the **Notes** tab
3. Click **Add Note**
4. Enter your observation
5. Optionally link to a specific call
6. Click **Save**

### Note Uses

- Document coaching sessions
- Track improvement goals
- Record performance issues
- Note achievements

### Note Visibility

Notes are visible to all Admins and Members in your organization. They are not visible to agents (even with platform access).

---

## Platform Access (Optional)

By default, agents don't have login access. You can optionally invite them to view their own data.

### What Agents Can See

When invited to the platform:

| Data | Access |
|------|--------|
| Their own calls | ✓ View |
| Their own scores | ✓ View |
| Their own trends | ✓ View |
| Scorecards assigned to them | ✓ View and complete |
| Their leaderboard position | ✓ View |
| Other agents' data | ✗ Hidden |
| Campaign settings | ✗ Hidden |
| Organization data | ✗ Hidden |

### Inviting an Agent

1. Open the agent's profile
2. Ensure **Email** is set
3. Click **Invite to Platform**
4. Agent receives an email with signup link
5. Status changes to **INVITED**

### Agent Signup

When the agent clicks the invite link:
1. They create a TotalView AI account
2. Their account is linked to their agent profile
3. They see only their own data

### Agent Dashboard

Agents with platform access see a simplified dashboard:
- Their performance stats
- Recent calls
- Pending scorecards
- Their review queue (if flagged)

---

## Assigning Agents to Campaigns

Agents can be assigned to specific campaigns for organization:

### From Campaign

1. Navigate to the campaign
2. Click **Agents**
3. Click **Assign Agent**
4. Search and select agents
5. Click **Assign**

### From Agent Profile

1. Open the agent's profile
2. Click **Assign to Campaign**
3. Select campaigns
4. Click **Assign**

### Why Assign?

Assignment helps with:
- Filtering calls by agent within a campaign
- Campaign-specific performance tracking
- Organizing agents by project/team

Agents can be assigned to multiple campaigns.

---

## Archiving and Deleting

### Archiving an Agent

Archive when an agent leaves or is no longer active:

1. Open the agent's profile
2. Click **⋮** menu → **Archive**
3. Confirm

**What happens:**
- Agent hidden from active lists
- Historical calls remain linked
- Performance data preserved
- Can be unarchived later

### Unarchiving

1. Go to **Agents** page
2. Toggle **Show Archived**
3. Find the agent
4. Click **Unarchive**

### Deleting (Permanent)

> **Warning**: Deletion is permanent.

1. Archive the agent first
2. In archived view, click **⋮** → **Delete Permanently**
3. Confirm by typing the agent's name

**What gets deleted:**
- Agent profile
- Notes attached to the agent
- Scorecard assignments

**What's preserved:**
- Call recordings (become unlinked)
- Call analysis results
- Call notes

---

## Handling Unlinked Calls

Calls without an agent profile linked show alerts:

### Identifying Unlinked Calls

On the Calls page, filter by **Agent: None** to find unlinked calls.

### Linking Manually

1. Open the call detail page
2. Click **Edit** in the metadata section
3. Search and select an agent
4. Save

### Auto-Linking Existing Calls

If you add agent profiles after uploading calls:

1. Go to **Agents** page
2. Click **Auto-Link Calls**
3. System matches calls by agent_code in metadata
4. View the results

---

## Best Practices

### Consistent Agent Codes

- Use the same code format everywhere
- Document the format for your team
- Match your existing systems (HR, CRM, telephony)

### Regular Reviews

- Check the leaderboard weekly
- Review agents with declining trends
- Celebrate top performers

### Coaching Notes

- Document every coaching conversation
- Link notes to specific calls
- Track improvement over time

### Archive, Don't Delete

- Preserve historical data when agents leave
- Only delete if truly necessary
- Archived agents don't clutter active views

---

## FAQ

### Can an agent be in multiple campaigns?

Yes. Agent profiles are organization-wide. The same agent can have calls in multiple campaigns, and their metrics are calculated per-campaign and overall.

### How do I merge duplicate agent profiles?

There's no automatic merge. To consolidate:
1. Choose the profile to keep (usually the one with more calls)
2. Manually reassign calls from the duplicate
3. Archive or delete the duplicate

### What if an agent's code changes?

Update the code in their profile. Future uploads use the new code. Historical calls retain their original link.

### Can agents see each other's performance?

No. Agents with platform access can only see:
- Their own calls and scores
- Their own leaderboard position
- Scorecards assigned to them

They cannot see other agents' data.

### How is the organization-wide average calculated?

It's a weighted average based on call count:
```
Org Avg = Σ(Agent Avg × Agent Calls) ÷ Σ(Agent Calls)
```
Agents with more calls have more influence.

### Do I need to create agents before uploading calls?

No. You can upload calls first and create agents later. Use **Auto-Link Calls** to match them by agent_code.

---

## Related Documentation

- [Uploading Calls](/uploading-calls) - Auto-linking via agent codes
- [Reviewing Calls](/reviewing-calls) - Linking calls to agents
- [Scorecards & Coaching](/scorecards-coaching) - Sending feedback
- [Review Queue](/review-queue) - Agent self-review queue
- [Organizations & Teams](/organizations-teams) - Inviting agents to platform
