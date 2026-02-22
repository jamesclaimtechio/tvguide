---
title: "Scorecards"
description: "Structured agent evaluations — templates, sending, and review"
slug: "scorecards"
order: 10
---

## What is a Scorecard?

A scorecard is a questionnaire sent to an agent (or completed by a manager) to evaluate a specific call. While quality checks are automated AI evaluations, scorecards capture human assessment — things like tone, empathy, and nuanced judgment that benefit from a human reviewer.

**Key terms:**
- **Scorecard Template** — A reusable set of questions with scoring weights
- **Scorecard** — An instance of a template, sent to an agent for a specific call
- **Scorecard Response** — The agent's completed answers

[SCREENSHOT: Scorecard template editor showing questions with types and weights]

---

## Creating a Scorecard Template

Templates define the questions and scoring structure. Create them at the campaign level.

### Step-by-Step

1. **Navigate to Scorecards** in the sidebar, or go to your campaign's scorecard section.

2. **Click Create Template.**

3. **Add questions** to your template. Each question has:

   - **Question text** — What you're asking (e.g., "Rate the agent's empathy during the call")
   - **Question type** — How the answer is collected (see below)
   - **Scoring weight** — How much this question contributes to the overall score

4. **Click Save** when your template is complete.

### Question Types

| Type | How It Works | Scoring |
|------|-------------|---------|
| **Text** | Free-text response | Not scored (qualitative) |
| **Rating (1-5)** | 5-star scale | Scored 1-5, weighted |
| **Rating (1-10)** | 10-point scale | Scored 1-10, weighted |
| **Yes/No** | Binary choice | Yes = full points, No = 0 |
| **Multiple Choice** | Select one from options | Predefined point values |
| **Checkbox** | Select multiple from options | Points per selection |
| **NPS** | Net Promoter Score (0-10) | Standard NPS scoring |
| **Percentage** | Slider from 0-100% | Scored proportionally |

### Weighted Scoring

Each question has a weight that determines its contribution to the overall scorecard score:
- The **weighted average** is calculated across all scored questions.
- Text questions are excluded from scoring (they're for qualitative feedback).
- Higher weights mean more influence on the final score.

**Example:** A template with 3 questions weighted 40%, 35%, and 25%. If the agent scores 4/5, 3/5, and 5/5, the weighted average is: (4×0.4 + 3×0.35 + 5×0.25) / 5 = 0.77 = 77%.

---

## Sending a Scorecard

You can send a scorecard from multiple places:

### From the Call Detail Page

1. **Open a call** and click **Send Scorecard**.
2. **Select a template** from the dropdown.
3. **Click Send.**

The scorecard is now pending, waiting for the agent to complete it.

### From the Agent Detail Page

1. **Open an agent's profile.**
2. **Click Send Scorecard** and select the call and template.

### From a Coaching Bundle

Scorecards can be included as part of a [coaching bundle](/coaching#creating-a-coaching-bundle) for a more structured development workflow.

---

## Completing a Scorecard (Agent View)

Agents see pending scorecards on their dashboard.

### Step-by-Step

1. **Open your Agent Dashboard.** Pending scorecards appear in the sidebar widget and quick actions.

2. **Click a pending scorecard** to open it.

3. **Answer each question:**
   - Rate items on the appropriate scale
   - Write text responses for open-ended questions
   - Select options for multiple choice questions

4. **Click Submit** to complete the scorecard.

Your responses are now visible to your manager and contribute to your scorecard metrics.

### Due Dates

Scorecards may have due dates set by the manager. The dashboard shows:
- **Time remaining** for upcoming scorecards
- **Overdue** badge for scorecards past their due date

---

## Reviewing Scorecards

### Scorecards Page

Navigate to **Scorecards** in the sidebar for an organization-wide view.

**You can filter by:**
- **Campaign** — Show scorecards from a specific campaign
- **Agent** — Show scorecards for a specific agent
- **Status** — Pending, Completed, Reviewed

**Each scorecard entry shows:**
- Template name
- Agent name and email
- Associated call
- Campaign name
- Sent date, due date, completion date
- Status badge
- Scores (total, max possible, weighted average)

### Viewing Responses

Click a completed scorecard to see:
- Each question with the agent's response
- Ratings and selections
- Text responses in full
- The calculated weighted average
- Link to the associated call for context

### Scorecard Stats

The scorecards page shows aggregate metrics:
- **Pending** — Scorecards awaiting completion
- **Completed** — Submitted scorecards
- **Overdue** — Past due date
- **Average scores** — Trends across agents and templates

---

## Troubleshooting

### Agent says they can't find their scorecard

**Symptoms:** Scorecard was sent but agent doesn't see it.
**Cause:** Agent may not have platform access, or the scorecard isn't linked to their agent profile.
**Solution:**
1. Verify the agent has a user account linked to their agent profile.
2. Check the scorecards page to confirm the scorecard status is "Pending."
3. The agent should look in the "Pending Scorecards" section of their dashboard.

### Scorecard scores seem wrong

**Symptoms:** The weighted average doesn't match manual calculation.
**Cause:** Question weights may not add up as expected, or text questions are being mentally included.
**Solution:**
1. Review the template's question weights.
2. Remember: text questions are not included in scoring.
3. The weighted average is calculated only across scored question types.

---

## FAQ

### Can I edit a template after scorecards have been sent?

Editing a template affects only future scorecards. Scorecards already sent use the template version from when they were created.

### Can agents see who sent the scorecard?

Yes. The agent can see the scorecard template name and the associated call. The sending manager's context is visible.

### How many scorecards can I send to one agent?

There is no limit. However, be mindful of agent workload — too many simultaneous scorecards can reduce response quality.

### Can I delete a pending scorecard?

Yes. You can cancel a pending scorecard before the agent completes it.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| Complete scorecards | Yes (own) | — | — | — | — |
| View own scorecard results | Yes | — | — | — | — |
| Create templates | — | Yes | Yes | Yes | Yes |
| Send scorecards | — | Yes | Yes | Yes | Yes |
| Review completed scorecards | — | Yes | Yes | Yes | Yes |
| View all scorecards | — | Assigned campaigns | All campaigns | All campaigns | All campaigns |

---

## Related Documentation

- [Agents](/agents) — agent profiles and the agent dashboard where scorecards appear
- [Coaching Pipeline](/coaching) — scorecards as part of coaching bundles
- [Reviewing Calls](/call-review) — sending scorecards from the call detail page
- [Campaigns](/campaigns) — scorecard templates live within campaigns
