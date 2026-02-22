---
title: "Coaching Pipeline"
description: "Training queue, coaching bundles, and agent development workflows"
slug: "coaching"
order: 9
---

## What is the Coaching Pipeline?

The coaching pipeline is TotalView's end-to-end workflow for turning call quality findings into actionable agent development:

1. **Training Queue** — Surfaces agents and calls needing coaching attention
2. **Coaching Bundles** — Curated packages of calls, checks, and goals sent to agents
3. **Agent Responses** — Agents review materials and submit their responses
4. **Conclusion** — Managers review responses and close out the coaching cycle

This replaces ad-hoc "listen to this call" coaching with a structured, trackable process.

[SCREENSHOT: Coaching pipeline flow — training queue to bundles to responses]

---

## Training Queue

The training queue is where coaching needs are identified. It aggregates calls and check failures that have been marked as "Pass with Training" during the review process.

### Accessing the Training Queue

1. **Click Training Queue** in the sidebar. The badge shows pending items.

2. **Review the stats cards:**

| Stat | Color | Meaning |
|------|-------|---------|
| **Pending** | Amber | Training items waiting to be actioned |
| **In Progress** | Blue | Items currently being addressed in coaching |
| **Total Items** | Green | All-time training items |

### How Items Enter the Queue

Training items are created when a reviewer sets a check disposition to **Pass with Training** on the [call detail page](/call-review#per-check-review) or in the [review queue](/review-queue#review-dispositions).

This means the reviewer acknowledges the issue but believes coaching (not discipline) is the right response.

### Attention Pool

The training queue highlights an **Attention Pool** — agents who have accumulated calls or check failures that need coaching. This helps you prioritize which agents to create coaching bundles for.

For each agent in the pool, you see:
- Agent name
- Number of calls needing coaching
- Specific checks that failed
- Recent coaching history

---

## Creating a Coaching Bundle

A coaching bundle is a curated package of materials you send to an agent for their development.

### Step-by-Step

1. **From the training queue**, select an agent or navigate to the coaching section.

2. **Click Create Coaching Bundle.**

3. **Fill in the details:**
   - **Title** — A descriptive name (e.g., "Compliance Improvement — March 2026")
   - **Manager Notes** — Your guidance and context for the agent

4. **Select calls** — Choose specific calls for the agent to review. These are typically calls with failed checks that illustrate the coaching points.

5. **Add goals** (optional) — Set measurable performance targets:
   - **Goal type**: Overall Score, Check Pass Rate, Calls Completed, Training Completed, Scorecard Average
   - **Target value**: The number or percentage to achieve
   - **Time period**: Daily, weekly, monthly, quarterly, or custom

6. **Click Create** to save as a draft, or **Release** to send immediately.

### Bundle Statuses

| Status | Meaning |
|--------|---------|
| **Draft** | Created but not yet sent to the agent |
| **Released** | Sent to the agent — they can now view and respond |
| **Completed In Person** | In-person coaching session was held (agent acknowledges) |
| **Agent Reviewed** | Agent has submitted their written response |
| **Agent Acknowledged** | Agent confirmed the in-person coaching |
| **Concluded** | Manager has closed out the bundle |
| **Cancelled** | Bundle was cancelled before completion |

### The Lifecycle

```
Draft → Released → Agent Reviewed or Completed In Person →
Agent Acknowledged → Concluded
```

---

## Managing Coaching Packs

### Coaching Packs Page

Navigate to **Coaching Packs** in the sidebar. The badge shows packs needing attention.

**Stats cards:**

| Stat | Color | Meaning |
|------|-------|---------|
| **Total Packs** | Blue | All coaching bundles created |
| **Active Packs** | Amber | Bundles currently in progress (not concluded or cancelled) |
| **Concluded Packs** | Green | Successfully completed bundles |
| **Awaiting Response** | Purple | Released bundles waiting for agent response |

The page shows two sections:
- **Active packs** — Bundles in progress that need management attention
- **Completed packs** — Historical bundles for reference

### Releasing a Bundle

1. **Open a draft bundle** from the Coaching Packs page.
2. **Review the contents** — calls, notes, goals.
3. **Click Release** to send it to the agent.

The agent immediately sees the bundle on their dashboard with a notification.

### Concluding a Bundle

After the agent has responded and you're satisfied:

1. **Open the bundle.**
2. **Review the agent's response.**
3. **Click Conclude** to close the coaching cycle.

The bundle moves to the completed section for historical reference.

---

## Responding to a Coaching Pack (Agent View)

When a coaching bundle is released, the agent sees it on their dashboard.

### Step-by-Step

1. **Open your Agent Dashboard.** A banner alerts you to pending coaching packs.

2. **Click Respond Now** (or navigate to the coaching pack from the list).

3. **Review the materials:**
   - Read the manager's notes and guidance
   - Listen to the selected calls
   - Review the specific check failures highlighted

4. **Submit your response:**
   - Write your reflection, action plan, or acknowledgement
   - Click **Submit Response**

5. **If in-person coaching occurred**, click **Acknowledge** to confirm the session happened.

6. The bundle status updates and the manager is notified.

### Agent Coaching Pack Statuses

| Badge | Meaning | Action Needed |
|-------|---------|---------------|
| **Needs Response** | Bundle released, waiting for your input | Review and respond |
| **Acknowledge** | In-person session held, confirm it | Click Acknowledge |
| **Submitted** | You've responded, waiting for manager | No action needed |
| **Acknowledged** | In-person coaching confirmed | No action needed |
| **Concluded** | Manager closed the bundle | Review if desired |

---

## Agent Responses Page

Managers use the **Agent Responses** page to track and review responses:

1. **Navigate to Agent Responses** in the sidebar. The badge shows pending responses.

2. **Review each response:**
   - Read the agent's written response
   - See the associated escalation or coaching context

3. **Close the escalation** once you're satisfied with the response.

---

## Performance Goals

Goals are set within coaching bundles to give agents measurable targets.

### Goal Types

| Type | Measures | Example |
|------|----------|---------|
| **Overall Score** | Average quality score | "Achieve 80% average score" |
| **Check Pass Rate** | Percentage of a specific check passing | "Pass 'Opening Greeting' on 90% of calls" |
| **Calls Completed** | Number of calls processed | "Handle 50 calls this month" |
| **Training Completed** | Coaching items resolved | "Complete all training items" |
| **Scorecard Average** | Average scorecard score | "Maintain 4.0/5.0 scorecard average" |

### Goal Time Periods

- Daily, Weekly, Monthly, Quarterly, or Custom date range

### Tracking Progress

Agents see their goals on the dashboard with:
- Progress bar showing current vs target
- Days remaining
- At-risk indicator if falling behind

Managers see goal progress on the agent detail page and in coaching bundle reports.

---

## Troubleshooting

### Training queue is empty but I know there are issues

**Symptoms:** No items in the training queue despite reviewing calls.
**Cause:** Training items are only created when checks are given the **Pass with Training** disposition during review.
**Solution:**
1. Go to the review queue and review flagged calls.
2. Set the disposition to **Pass with Training** on checks that need coaching.
3. Those checks will appear in the training queue.

### Agent says they can't see a coaching pack

**Symptoms:** Manager released a bundle, but the agent doesn't see it.
**Cause:** The bundle may still be in Draft status, or the agent isn't linked to a user account.
**Solution:**
1. Check the bundle status — it must be **Released** for the agent to see it.
2. Verify the agent has platform access (user account linked to their agent profile).
3. The agent may need to refresh their dashboard.

### Can't conclude a bundle

**Symptoms:** The "Conclude" button is not available.
**Cause:** The bundle may not have progressed far enough in the lifecycle.
**Solution:** The agent must respond or acknowledge before you can conclude. Check the bundle's current status.

---

## FAQ

### Can I include calls from multiple campaigns in one coaching bundle?

Coaching bundles are typically scoped to a specific campaign's agent assignment. The calls you select should be from campaigns the agent is assigned to.

### How many goals can I set per bundle?

There is no strict limit. Set as many goals as are relevant, but 2-3 focused goals are typically more effective than many broad ones.

### Can I edit a released coaching bundle?

Once released, the bundle's core content is locked to maintain integrity. Create a new bundle if additional materials are needed.

### How long do agents have to respond?

There is no system-enforced deadline. Use the manager notes to communicate your expected timeline. The "Awaiting Response" stat on the Coaching Packs page helps you track overdue responses.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View training queue | — | Yes | Yes | Yes | Yes |
| Create coaching bundles | — | Yes | Yes | Yes | Yes |
| Release bundles | — | Yes | Yes | Yes | Yes |
| Conclude bundles | — | Yes | Yes | Yes | Yes |
| Respond to bundles | Yes (exclusive) | — | — | — | — |
| View agent responses | — | Yes | Yes | Yes | Yes |
| Set performance goals | — | Yes | Yes | Yes | Yes |
| View own coaching history | Yes | — | — | — | — |

---

## Related Documentation

- [Review Queue](/review-queue) — where "Pass with Training" creates coaching items
- [Agents](/agents) — agent profiles and the agent dashboard
- [Scorecards](/scorecards) — structured evaluations as part of coaching
- [Reviewing Calls](/call-review) — setting review dispositions
- [Quality Checks](/quality-checks) — the checks that drive coaching needs
