---
title: Scorecards & Coaching
description: Structured feedback forms for agent coaching
slug: scorecards-coaching
order: 52
---

# Scorecards & Coaching

## What are Scorecards?

**Scorecards** are structured feedback forms you send to agents about specific calls. Unlike AI-generated check results, scorecards involve direct human feedback and can include agent self-reflection.

Use scorecards to:
- Provide formal coaching feedback
- Gather agent self-assessment
- Document coaching conversations
- Track coaching completion

---

## Scorecard Workflow

```
Create Template → Send to Agent → Agent Completes → Manager Reviews
```

### Status Flow

| Status | Meaning |
|--------|---------|
| **PENDING** | Sent to agent, awaiting completion |
| **COMPLETED** | Agent submitted responses |
| **REVIEWED** | Manager reviewed the responses |

---

## Scorecard Templates

Templates define the questions asked on scorecards. Create templates once, use them many times.

### Creating a Template

1. Navigate to your campaign
2. Go to **Settings → Scorecards** (or **Checks → Scorecard Templates**)
3. Click **Create Template**
4. Fill in the template details:

| Field | Description |
|-------|-------------|
| **Name** | Template name (e.g., "Weekly Coaching Review") |
| **Description** | What this template is for |

5. Add questions (see below)
6. Click **Save Template**

[SCREENSHOT: Scorecard template builder with questions]

### Question Types

| Type | Description | Example |
|------|-------------|---------|
| **Text** | Free-form written response | "What challenges did you face on this call?" |
| **Rating 1-5** | 5-point scale | "How confident were you in your handling?" |
| **Rating 1-10** | 10-point scale | "Rate your overall performance" |

### Adding Questions

For each question:

1. Click **Add Question**
2. Enter the question text
3. Select the question type
4. Toggle **Required** if needed
5. Drag to reorder if desired

### Example Template

**Template Name:** "Call Review - Self Assessment"

| # | Question | Type | Required |
|---|----------|------|----------|
| 1 | How would you rate your overall handling of this call? | Rating 1-10 | Yes |
| 2 | What did you do well on this call? | Text | Yes |
| 3 | What could you have done differently? | Text | Yes |
| 4 | Did you encounter any challenges? If so, what were they? | Text | No |
| 5 | How confident did you feel during this call? | Rating 1-5 | Yes |

---

## Sending a Scorecard

### From a Call

1. Open the call detail page
2. Click **Send Scorecard** (in the actions area)
3. Select the template to use
4. Confirm the agent (auto-filled if call is linked)
5. Optionally set a due date
6. Click **Send**

[SCREENSHOT: Send scorecard dialog with template selection]

### From Agent Profile

1. Open the agent's profile
2. Go to the **Scorecards** tab
3. Click **Send Scorecard**
4. Select a call to associate (optional)
5. Select the template
6. Set due date (optional)
7. Click **Send**

### What Happens

1. Scorecard is created with **PENDING** status
2. If the agent has platform access, they see it in their dashboard
3. If not, you can print or share manually
4. Questions are "frozen" — changes to the template don't affect sent scorecards

---

## Agent Experience

### With Platform Access

Agents with platform access can complete scorecards online:

1. Agent logs into TotalView AI
2. Dashboard shows pending scorecards
3. Agent clicks to open the scorecard
4. They see:
   - The linked call (can play audio, view transcript)
   - The questions to answer
5. Agent fills in responses
6. Agent clicks **Submit**
7. Status changes to **COMPLETED**

[SCREENSHOT: Agent view of scorecard with call context]

### Without Platform Access

If the agent doesn't have platform access:
- Print the scorecard for a face-to-face session
- Enter responses on their behalf after discussion
- Or invite them to the platform

---

## Reviewing Completed Scorecards

### Finding Completed Scorecards

1. Go to **Campaign → Settings → Scorecards** or the agent's profile
2. Filter by **Status: Completed**
3. Click to open

### The Review Page

When reviewing a completed scorecard:

| Section | Content |
|---------|---------|
| **Call Context** | Link to the call (if associated) |
| **Questions & Responses** | Each question with the agent's answer |
| **Ratings Summary** | Average of numerical ratings |
| **Review Actions** | Add notes, mark as reviewed |

### Marking as Reviewed

1. Read through the agent's responses
2. Add review notes (optional)
3. Click **Mark as Reviewed**
4. Status changes to **REVIEWED**

---

## Managing Templates

### Editing a Template

1. Go to **Settings → Scorecards**
2. Find the template
3. Click **Edit**
4. Make changes
5. Save

> **Note**: Changes don't affect already-sent scorecards. Existing scorecards keep the original questions.

### Deactivating a Template

If you no longer need a template:

1. Edit the template
2. Toggle **Active** off
3. Save

Inactive templates can't be used for new scorecards but remain for reference.

### Deleting a Template

1. Ensure no pending scorecards use this template
2. Click **Delete**
3. Confirm

> **Warning**: Deletion is permanent. Consider deactivating instead.

---

## Coaching Notes vs. Scorecards

| Feature | Coaching Notes | Scorecards |
|---------|----------------|------------|
| Format | Free-form text | Structured questions |
| Agent involvement | No | Yes (responses) |
| Linked to call | Optional | Optional |
| Visible to agent | No | Yes (with platform access) |
| Tracking | Note history | Status workflow |

**Use coaching notes when:**
- Quick observation to document
- Internal-only information
- No agent input needed

**Use scorecards when:**
- Formal coaching session
- Agent self-reflection desired
- Structured feedback needed
- Tracking completion is important

---

## Due Dates

You can set due dates when sending scorecards:

### Setting a Due Date

1. When sending a scorecard, find **Due Date**
2. Select a date
3. Send the scorecard

### Overdue Tracking

Scorecards past their due date appear with warnings:
- In the agent's dashboard
- In the campaign's scorecard list
- Enables follow-up on incomplete scorecards

### No Due Date

If you don't set a due date, the scorecard stays pending indefinitely until completed.

---

## Scorecard Reports

View scorecard activity in aggregate:

### Campaign View

**Campaign → Settings → Scorecards** shows:
- Total scorecards sent
- Pending vs. completed
- Average completion time
- Templates used

### Agent View

**Agent Profile → Scorecards** shows:
- All scorecards for this agent
- Status history
- Response patterns

---

## Best Practices

### Template Design

- Keep scorecards focused (5-10 questions max)
- Mix rating and text questions
- Start with broader questions, then specific
- Include at least one self-reflection question

### When to Send

| Situation | Recommendation |
|-----------|----------------|
| Low-scoring call | Scorecard + coaching session |
| Flagged call | Consider scorecard for self-reflection |
| Regular check-in | Weekly or bi-weekly scorecards |
| New agent | More frequent scorecards initially |

### Follow-Through

- Review completed scorecards promptly
- Discuss responses with the agent
- Document key takeaways in coaching notes
- Track improvement over time

---

## FAQ

### Can I edit a scorecard after sending?

No. Once sent, the scorecard questions are frozen. You can cancel a pending scorecard and send a new one if needed.

### Can agents edit their responses after submitting?

No. Once submitted, responses are final. This preserves the integrity of the coaching record.

### Are scorecard responses visible to other agents?

No. Each agent only sees their own scorecards.

### Can I send the same scorecard to multiple agents?

Not simultaneously. Send scorecards individually — each scorecard is tied to one agent and optionally one call.

### What happens to scorecards if I delete an agent?

Scorecard assignments are deleted. If you need the history, export or document it first.

### Can I require scorecards for certain calls?

Not automatically. Scorecards are sent manually. Consider using the Review Queue to identify calls that should receive scorecards.

### Do scorecard responses affect the call score?

No. Scorecard responses are separate from AI-generated check results and scores. They're for coaching purposes only.

---

## Related Documentation

- [Agents](/agents) - Agent profiles and platform access
- [Reviewing Calls](/reviewing-calls) - Call context for scorecards
- [Review Queue](/review-queue) - Identifying calls for coaching
