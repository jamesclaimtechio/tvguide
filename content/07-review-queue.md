---
title: "Review Queue & Escalations"
description: "Working through flagged calls and managing escalation workflows"
slug: "review-queue"
order: 7
---

## What is the Review Queue?

The review queue collects all calls that need human attention. Instead of manually scanning every call, you focus on the ones that the AI flagged as problematic. Calls enter the queue when they:

- Score below the campaign's flagging threshold (e.g., below 70%)
- Have one or more critical-severity check failures
- Match a custom agent flag rule
- Are manually flagged by a reviewer

[SCREENSHOT: Review queue showing stats cards, filters, and flagged calls list]

---

## Review Queue Stats

Four metric cards at the top summarize your current workload:

| Stat | Color | Meaning |
|------|-------|---------|
| **Needs Review** | Amber | Calls waiting for someone to review them |
| **Escalated Issues** | Orange | Issues that have been escalated to agents or senior staff |
| **Reviewed Today** | Green | Calls reviewed during today's session |
| **Dismissed Today** | Slate | Calls dismissed (no action needed) today |

Click the **Escalated Issues** card to jump to the Escalated tab.

---

## Working Through the Queue

### Step-by-Step

1. **Navigate to Review Queue** in the sidebar. The badge shows how many calls are waiting.

2. **Scan the queue table.** Each row shows:
   - Call file name and campaign
   - Agent name (if linked)
   - Overall quality score
   - Primary issue (the most significant check failure)
   - Critical failure count and total failure count
   - Flagged date

3. **Click a call** to open its detail page and review it thoroughly. Or use the **inline review** (see below).

4. **Review each check result** on the Quality tab:
   - Read the AI's reasoning
   - Decide on a disposition: **Pass**, **Pass with Training**, or **Fail**

5. **Take action:**
   - **Mark as Reviewed** — done with this call, action has been taken
   - **Dismiss** — no action needed (e.g., false flag)
   - **Escalate** — raise to agent or senior staff

6. The call is removed from the queue. Move to the next call.

### Inline Review

For faster triage, you can review calls without leaving the queue:

1. **Click the expand arrow** on a call row to open the inline review sheet.
2. **Review check results** directly in the side panel.
3. **Set dispositions** and take action without navigating to the full detail page.

This is useful when you need to quickly process many similar calls.

---

## Filters and Search

### Search

Use the search box to find specific calls by file name or metadata.

### Filters

| Filter | Options |
|--------|---------|
| **Campaign** | Filter to a specific campaign |
| **Agent** | Filter to a specific agent |

Active filters help you focus on one area at a time — for example, reviewing all flagged calls for a specific campaign before moving to the next.

---

## Review Dispositions

When reviewing individual check results on a flagged call, you set a disposition for each issue:

| Disposition | When to Use | Result |
|-------------|-------------|--------|
| **Pass** | The failure is acceptable or a false positive | Issue resolved, removed from review |
| **Pass with Training** | Failure is real but the agent needs coaching, not discipline | Creates a [training queue item](/coaching#training-queue) |
| **Fail** | Confirmed failure requiring follow-up | Issue remains flagged for action |

Setting dispositions on all issues in a call lets you either mark the entire call as reviewed or escalate specific issues.

---

## Escalated Issues

The **Escalated Issues** tab shows all issues that have been raised for attention.

### How Escalation Works

1. **A reviewer escalates an issue** from the call detail page (see [Reviewing Calls — Escalate](/call-review#escalate)).

2. **Choose the escalation type:**
   - **Raise to Agent** — The linked agent is notified and asked to respond
   - **Notify Seniors** — Senior managers and compliance officers are alerted

3. **The issue appears in the Escalated Issues tab** with its status.

4. **Recipients review and resolve:**
   - **Agents** respond to escalations from their dashboard
   - **Senior managers** review from the Escalated Issues tab

### Escalation Statuses

| Status | Meaning |
|--------|---------|
| **Unresolved** | Escalation is open and waiting for action |
| **Resolved** | Escalation has been reviewed and closed |

### Resolving Escalations

1. **Open the Escalated Issues tab.**
2. **Click an escalation** to see the context (call, check, reasoning).
3. **Review the issue** and any agent responses.
4. **Click Resolve** to close the escalation.

---

## How Calls Enter the Queue

Calls are flagged automatically based on your [campaign flagging rules](/campaigns#flagging-rules):

| Rule | How It Works |
|------|-------------|
| **Score threshold** | Any call scoring below the set percentage enters the queue |
| **Critical check failure** | Any call with a failed critical-severity check enters the queue |
| **Agent flag rules** | Custom per-agent rules (e.g., flag if agent's score below 60%) |
| **Manual flagging** | A reviewer manually flags a call from the call detail page |

### Tuning Your Queue

If the queue is overwhelmed:
- **Raise the score threshold** — flag fewer calls (only the worst ones)
- **Reduce critical checks** — fewer checks marked as critical means fewer auto-flags
- **Narrow agent rules** — target specific agents rather than all

If the queue is too empty:
- **Lower the score threshold** — catch more borderline calls
- **Add critical checks** — flag calls failing important compliance criteria

---

## Troubleshooting

### The review queue count doesn't match what I see

**Symptoms:** Badge shows 15 but you see fewer calls in the queue.
**Cause:** You may be filtered to a specific campaign, or some calls are only visible to certain roles.
**Solution:**
1. Clear all filters to see the full queue.
2. Remember: Managers only see calls from their assigned campaigns. Compliance Officers and above see all calls.

### I accidentally dismissed a call

**Symptoms:** Dismissed a call that actually needs review.
**Cause:** Clicked Dismiss instead of Mark as Reviewed.
**Solution:** Open the call detail page and click **Reset Status**. This clears the review status and the call returns to the queue.

### Escalated issues aren't being received

**Symptoms:** You escalated to seniors but they didn't get a notification.
**Cause:** Notification rules may not be configured for escalations.
**Solution:** Check the campaign's [notification rules](/campaigns#notification-rules) to ensure escalation alerts are set up for the right recipients.

---

## FAQ

### Who can see the review queue?

Managers and above. Agents cannot access the review queue directly — they respond to escalations from their own dashboard.

### Can I assign a specific call to a specific reviewer?

Not directly. All calls in the queue are available to anyone with review access. Escalating to a specific role (e.g., compliance officer) narrows who is expected to act.

### How do dismissed calls differ from reviewed calls?

**Reviewed** means you looked at the call and took action (coaching, escalation, etc.). **Dismissed** means the flag was a false positive or no action is needed. Both remove the call from the active queue, but the status is tracked differently in reporting.

### Do calls stay in the queue forever if not reviewed?

Yes. Flagged calls remain in the queue until someone reviews or dismisses them. The "Needs Review" count persists on the dashboard as a reminder.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View review queue | — | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Review/dismiss calls | — | Yes | Yes | Yes | Yes |
| Escalate issues | Yes | Yes | Yes | Yes | Yes |
| Receive escalations | — | — | — | Yes | Yes |
| Resolve escalations | — | — | — | Yes | Yes |
| View escalated issues tab | — | Yes | Yes | Yes | Yes |

---

## Related Documentation

- [Reviewing Calls](/call-review) — the full call detail review workflow
- [Campaigns](/campaigns) — configure flagging rules that populate the queue
- [Coaching Pipeline](/coaching) — "Pass with Training" creates coaching items
- [Agents](/agents) — agent escalation responses
- [Quality Checks](/quality-checks) — understanding check severities
