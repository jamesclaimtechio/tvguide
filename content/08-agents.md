---
title: "Agents"
description: "Managing agent profiles, performance tracking, and the agent portal"
slug: "agents"
order: 8
---

## What is an Agent?

An agent in TotalView represents a call center operative. Agent profiles exist independently of user accounts — you can track and analyze an agent's calls without giving them platform access.

When you do grant platform access, agents get a self-service portal showing their personal performance, pending tasks, and coaching materials.

**Key distinction:**
- **Agent profile** — A record in the system linked to calls for performance tracking
- **User account** — Login credentials for accessing TotalView
- **Agent linking** — Connecting an agent profile to a user account, giving them their own dashboard

[SCREENSHOT: Agents list page showing agent cards with sparklines and scores]

---

## Managing Agents (Manager View)

### All Agents Page

Navigate to **Agents** in the sidebar to see the organization-wide agent list.

Each agent card shows:
- Agent name and status (Active, Invited, Archived)
- 6-week quality score sparkline
- Total calls in the selected period
- Average quality score

**Use the controls:**
- **Time Period Picker** — Change the date range for stats
- **Search** — Find agents by name
- **Campaign Filter** — Show only agents assigned to a specific campaign

### Creating an Agent

1. **Click Create Agent.**

2. **Enter agent details:**
   - **Name** (required)
   - **Agent Code** (required) — A unique identifier within your organization (e.g., employee ID)
   - **Email** (optional) — Required if you want to invite them to the platform later

3. **Assign to campaigns** — Select which campaigns this agent works on.

4. **Click Create.**

The agent profile is now active. Calls can be linked to this agent for performance tracking.

### Agent Statuses

| Status | Meaning |
|--------|---------|
| **Active** | Agent is active and calls can be linked to them |
| **Invited** | Agent has been invited to the platform but hasn't accepted yet |
| **Archived** | Agent is no longer active; historical data is preserved |

---

## Agent Detail Page

Click an agent's name to open their detail page. This is the manager's view of an individual agent.

### Stats Cards

| Stat | Description |
|------|-------------|
| **Total Calls** | Number of calls linked to this agent in the selected period |
| **Avg Score** | Average quality score (color-coded: green ≥80, amber ≥60, red <60) |
| **Flagged Count** | Calls flagged for review |
| **Pending Scorecards** | Scorecards waiting for the agent's response |

### Profile Tab

- **Peer Comparison Chart** — Agent's score trend vs team average over 6 weeks
- **Weak Checks** — Bottom 10 quality checks by pass rate (30-day window). Shows where the agent struggles most.
- **Recent Calls** — Last 10 calls linked to this agent with score badges
- **Pending Scorecards** — List of scorecards awaiting completion
- **Goals** — Active performance goals with target/current values and progress
- **Coaching Notes** — Recent notes from managers with timestamps
- **Campaign Assignments** — Which campaigns the agent is assigned to

### Coaching Tab

Shows the agent's coaching history:
- Active and completed coaching bundles
- Bundle statuses and responses
- Historical coaching engagement

### Actions

| Action | What It Does |
|--------|--------------|
| **Edit Agent** | Update name, code, email, or status |
| **Invite to Platform** | Send a platform access invitation (requires email) |
| **Add Note** | Create a coaching note visible to the agent |
| **View All Calls** | Navigate to campaign calls filtered to this agent |

---

## Inviting Agents to the Platform

By default, agents are tracked in TotalView without their own login. To give an agent self-service access:

1. **Ensure the agent has an email address** set in their profile.

2. **Click Invite to Platform** on the agent's detail page.

3. **The agent receives a magic link email** to create their account.

4. **Once accepted**, the agent profile is linked to their user account, and they see the Agent Dashboard.

> **Note:** Agents sign in through the dedicated **Agent Portal** login, not the main login page.

---

## Agent Campaign Assignment

Agents are assigned to specific campaigns. This controls:
- Which campaigns' calls can be linked to the agent
- Which campaign analytics include the agent's data
- Which campaign's checks are evaluated on the agent's calls

To assign an agent to a campaign:
1. Open the agent's detail page.
2. View the **Campaign Assignments** section.
3. Add or remove campaign assignments.

---

## Agent Dashboard

When an agent signs in, they see a personalized dashboard focused on their own performance.

### Welcome Section

- Greeting with the agent's name
- Pending tasks badge (if there are items needing attention)
- Quick actions: "Complete Scorecards" button

### Coaching Pack Banner

If there are coaching packs waiting for the agent's response, a prominent banner appears with:
- Count of packs needing response
- Details of the oldest unreplied pack
- **Respond Now** button to jump directly to coaching

### Performance Stats

- **Monthly statistics** — Calls, average score, flagged calls
- **Overall stats** — Average score, total calls, highest and lowest scores
- **Trend indicators** — Score and call trends month-over-month
- **Period selector** — Switch between 3, 6, and 12 month views

### Goals Widget

- Active performance goals with progress bars
- Target vs current values
- Days remaining and at-risk indicators
- Campaign or check association for each goal

### Coaching Stats

- Active coaching packs count
- Unreplied packs count
- Completed packs count
- Age of oldest unreplied pack

### Pending Scorecards

- Up to 4 pending scorecards with template name, call reference, and due date
- Overdue indicators
- **View All** button to see all pending scorecards

### Coaching Packs Section

List of coaching bundles with status badges:
- **Needs Response** — Requires the agent's input
- **Acknowledge** — Waiting for agent to confirm in-person coaching
- **Submitted** — Response sent, awaiting manager review
- **Acknowledged** — In-person coaching confirmed
- **Concluded** — Bundle completed

---

## Agent Flag Rules

You can set custom flagging rules per agent to catch performance issues proactively:

1. **Navigate to the campaign's flagging rules** (in campaign settings).

2. **Add an agent flag rule:**
   - Select the agent
   - Set the condition (e.g., "Score below 60%")
   - The agent's calls matching the condition are automatically flagged for review

Agent flag rules supplement the campaign-wide flagging threshold, letting you set stricter monitoring for agents who need more oversight.

---

## Troubleshooting

### Agent's calls aren't showing on their profile

**Symptoms:** Agent has calls in the campaign but their profile shows zero.
**Cause:** Calls aren't linked to the agent profile.
**Solution:**
1. Open individual calls and use **Link Agent** to connect them.
2. For SFTP uploads, check the file naming pattern or CSV metadata for agent matching.
3. For bulk uploads, verify agent matching rules are configured.

### Agent can't sign in

**Symptoms:** Agent receives an invite but can't access the platform.
**Cause:** They may be using the wrong login page, or the invite has expired.
**Solution:**
1. Ensure the agent uses the **Agent Portal** login (not the main login page).
2. Resend the invitation if it has expired.
3. Verify the email address matches what's in the agent profile.

### Agent dashboard shows "No agent profile linked"

**Symptoms:** Agent signs in but sees an error instead of their dashboard.
**Cause:** The agent's user account isn't linked to an agent profile.
**Solution:** A manager needs to link the agent's user account to their agent profile from the agent detail page.

---

## FAQ

### Can an agent belong to multiple campaigns?

Yes. Agents can be assigned to multiple campaigns simultaneously. Their performance is tracked per-campaign and also aggregated across all campaigns.

### What's the difference between an agent and a user?

An **agent** is a call center operative whose calls are analyzed. A **user** is someone with a login to TotalView. Agents can exist without user accounts (for tracking only), or they can be linked to user accounts for self-service access.

### Can agents see other agents' data?

No. Agents can only view their own calls, scores, coaching, and scorecards. They have no access to other agents' data or the review queue.

### What happens when I archive an agent?

The agent's historical data (calls, scores, coaching) is preserved. No new calls can be linked to an archived agent. You can reactivate them later.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View own dashboard | Yes | — | — | — | — |
| View all agents | — | Yes | Yes | Yes | Yes |
| Create agents | — | Yes | Yes | Yes | Yes |
| Edit agents | — | Yes | Yes | Yes | Yes |
| Invite to platform | — | Yes | Yes | Yes | Yes |
| Archive agents | — | Yes | Yes | Yes | Yes |
| Add coaching notes | — | Yes | Yes | Yes | Yes |
| View agent performance | Own only | Assigned campaigns | All campaigns | All campaigns | All campaigns |

---

## Related Documentation

- [Coaching Pipeline](/coaching) — creating coaching bundles and tracking agent development
- [Scorecards](/scorecards) — sending and reviewing structured evaluations
- [Campaigns](/campaigns) — assigning agents to campaigns
- [Review Queue](/review-queue) — escalating issues to agents
- [Reviewing Calls](/call-review) — linking calls to agents
