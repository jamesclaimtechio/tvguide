---
title: Review Queue
description: Managing flagged calls that need human attention
slug: review-queue
order: 33
---

# Review Queue

## What is the Review Queue?

The **Review Queue** is a focused list of calls that need human attention. Instead of reviewing every call manually, TotalView AI flags problematic calls automatically, so you can focus your time where it matters most.

Access the Review Queue via: **Dashboard → Review Queue** (sidebar)

[SCREENSHOT: Review Queue showing list of flagged calls with status badges]

---

## Review Statuses

Each call has a review status:

| Status | Meaning | Color |
|--------|---------|-------|
| **NEEDS_REVIEW** | Flagged and awaiting review | Yellow |
| **REVIEWED** | Reviewed and action taken | Green |
| **DISMISSED** | Reviewed but no action needed | Gray |
| **NO_ACTION_NEEDED** | Not flagged (default) | — |

### Status Flow

```
Upload → Analysis → Score Check
                        ↓
              Below threshold? ──Yes──→ NEEDS_REVIEW
                        ↓                     ↓
                       No              Manager reviews
                        ↓                     ↓
              NO_ACTION_NEEDED      REVIEWED or DISMISSED
```

---

## Why Calls Get Flagged

Calls enter the review queue for two reasons:

### 1. Automatic Flagging

The system flags calls based on rules you configure:

| Rule Type | Triggers When |
|-----------|---------------|
| **Score Threshold** | Overall score below X (e.g., 70) |
| **Critical Check Failure** | Any check with `critical` severity fails |

### 2. Manual Flagging

Team members can flag any call:
- From the call detail page
- Via AI Copilot
- Through bulk actions

---

## Configuring Auto-Flagging Rules

Auto-flagging is configured per campaign.

### Accessing Settings

1. Navigate to your campaign
2. Click **Settings** in the navigation
3. Find the **Flagging Rules** section

### Score Threshold

Flag calls scoring below a certain threshold:

1. Enable **Flag Low-Scoring Calls**
2. Set the threshold (e.g., 70)
3. Click **Save**

Any call with an overall score below 70 will be automatically flagged.

### Critical Check Failures

Flag calls where critical checks fail:

1. Enable **Flag Critical Failures**
2. Save the setting

Any call where a check with `critical` severity fails will be flagged.

> **Tip**: Mark your most important compliance checks as `critical` severity to ensure failures are always reviewed.

---

## Viewing the Review Queue

### Organization-Wide Queue

**Dashboard → Review Queue** shows all flagged calls across all campaigns:

| Column | Description |
|--------|-------------|
| Call | File name (click to open) |
| Campaign | Which campaign |
| Agent | Linked agent |
| Score | Overall quality score |
| Flagged | When it was flagged |
| Reason | Why it was flagged |
| Status | Current review status |

### Campaign-Specific Queue

**Campaign → Review** shows flagged calls for just that campaign.

### Filtering

Filter the queue by:

| Filter | Options |
|--------|---------|
| Status | Needs Review, Reviewed, Dismissed |
| Campaign | Any campaign or specific one |
| Agent | Any agent or specific one |
| Date Range | When flagged |
| Score Range | Min and max score |

---

## Reviewing Flagged Calls

### The Review Workflow

1. **Open the Review Queue**
2. **Click a call** to open its detail page
3. **Review the call**:
   - Read the summary
   - Check failed checks
   - Listen to relevant sections
   - Verify AI findings
4. **Take action**:
   - Add notes for coaching
   - Dispute incorrect findings
   - Send a scorecard to the agent
5. **Complete the review**:
   - Click **Mark as Reviewed** (action was taken)
   - Or click **Dismiss** (no action needed)

### Review Actions

On a flagged call's detail page, you'll see additional buttons:

| Action | When to Use |
|--------|-------------|
| **Mark as Reviewed** | You took action (added note, sent scorecard, etc.) |
| **Dismiss** | The flag was incorrect or no action needed |

Both actions remove the call from the active queue.

### Adding Review Notes

When completing a review:

1. Click **Mark as Reviewed**
2. Optionally add a review note
3. Click **Complete**

Review notes are separate from coaching notes and document your review decision.

---

## Bulk Actions

Handle multiple calls at once:

### Bulk Dismiss

1. In the Review Queue, select multiple calls using checkboxes
2. Click **Bulk Actions → Dismiss Selected**
3. Confirm the action

All selected calls are marked as DISMISSED.

### Bulk Mark as Reviewed

1. Select multiple calls
2. Click **Bulk Actions → Mark as Reviewed**
3. Add an optional note (applies to all)
4. Confirm

---

## Agent Self-Review Queue

Separate from the manager review queue, agents can have their own review queue:

### How It Works

1. Configure agent flag rules in campaign settings
2. When rules trigger, calls are flagged specifically for agent self-review
3. Agents see these calls in their portal
4. Agents can acknowledge or respond

### Agent Flag Rules

| Rule Type | Description |
|-----------|-------------|
| **Score Below** | Flag if score < X for the agent to self-review |
| **Critical Fail** | Flag if critical check fails |
| **Specific Check Fail** | Flag if a particular check fails |

This is separate from manager flagging and appears in the agent's personal view.

> **Learn More**: [Agents](/agents) for agent platform access.

---

## Tracking Review Metrics

### Review Stats

The Review Queue shows summary statistics:

| Metric | Description |
|--------|-------------|
| **Pending** | Calls awaiting review |
| **Reviewed Today** | Reviews completed today |
| **Average Review Time** | Time from flag to review |
| **Dismissal Rate** | Percentage dismissed vs. actioned |

### Review History

View completed reviews:

1. In the Review Queue, toggle **Show Completed**
2. See reviewed and dismissed calls
3. Filter by reviewer, date, or outcome

---

## Escalation

For calls requiring manager or leadership attention:

### Escalating a Call

1. Open the call detail page
2. On a check result, click **Escalate**
3. Add an escalation note
4. Select the escalation level or recipient (if configured)
5. Submit

Escalated calls are tracked separately and may trigger notifications.

### Escalation Tracking

Escalated issues appear:
- In the Review Queue with an escalation badge
- In reports and analytics
- In the agent's record (if linked)

---

## Best Practices

### Setting Thresholds

- Start with a moderate threshold (e.g., 70)
- Adjust based on queue volume
- Too low = too many flags, review fatigue
- Too high = missing important issues

### Review Cadence

| Team Size | Recommended Cadence |
|-----------|---------------------|
| 1-2 reviewers | Daily |
| 3-5 reviewers | Multiple times per day |
| 5+ reviewers | Continuous |

### Calibration

Periodically review:
- Dismissal rate (high rate = threshold too low or checks too strict)
- Flagged check patterns (same check always failing = check needs adjustment)
- Agent patterns (same agent always flagged = coaching needed)

---

## FAQ

### What's the difference between Reviewed and Dismissed?

| Status | Meaning | Use When |
|--------|---------|----------|
| **Reviewed** | You took action | You added notes, sent feedback, escalated |
| **Dismissed** | No action needed | False positive, minor issue, already addressed |

Both complete the review, but they're tracked differently for reporting.

### Do dismissed calls still count against the agent?

Yes. Dismissing a review doesn't change the call's score or check results. It only indicates you've acknowledged the flag.

### Can I unflag a call?

Dismissing or marking as reviewed effectively "un-flags" the call — it no longer appears in the active queue. The call's history shows it was flagged and then reviewed.

### How do I see why a call was flagged?

The Review Queue shows the flag reason:
- "Score below threshold (68 < 70)"
- "Critical check failed: Customer Verification"
- "Manually flagged by [User]"

### Can I customize who sees the review queue?

All Admins and Members can access the Review Queue. There's no role-based filtering of the queue itself.

### How long do calls stay in the queue?

Indefinitely until reviewed. Set up regular review cadences to prevent backlog.

### Can I get notified when calls are flagged?

Notification features may vary. Check your organization settings for email or in-app notification options.

---

## Related Documentation

- [Quality Checks](/quality-checks) - Setting check severity
- [Reviewing Calls](/reviewing-calls) - Detailed call review process
- [Agents](/agents) - Agent self-review queue
- [Campaigns](/campaigns) - Configuring flagging rules
