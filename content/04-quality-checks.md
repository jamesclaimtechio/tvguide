---
title: "Quality Checks"
description: "Writing AI evaluation criteria for compliance, quality, and insights"
slug: "quality-checks"
order: 4
---

## What is a Quality Check?

A quality check is a single evaluation criterion that the AI applies to every call in a campaign. When a call is analyzed, the AI reads the transcript and evaluates each check independently, producing a Pass, Fail, or N/A result with a written explanation.

**Example:** A check named "Opening Greeting" with the prompt *"Did the agent greet the caller by name and state the company name within the first 30 seconds?"* — the AI reads the transcript and determines whether this happened.

Quality checks are organized by type and severity:

| Check Type | Purpose | Example |
|------------|---------|---------|
| **Compliance** | Regulatory or policy requirements | "Did the agent read the required disclaimer?" |
| **Quality** | Service and performance standards | "Did the agent summarize the resolution before ending the call?" |
| **Business Intelligence** | Insights and patterns | "Did the caller mention a competitor by name?" |

| Severity | Meaning | Impact |
|----------|---------|--------|
| **Info** | Informational — no scoring impact | Tracked but doesn't affect quality score |
| **Warning** | Notable — moderate impact | Affects quality score |
| **Critical** | Serious — high impact | Significantly affects score; may auto-flag for review |

[SCREENSHOT: Quality checks list showing checks with type, severity, and pass rate]

---

## Creating a Check

1. **Navigate to your campaign** and open the **Checks** section.

2. **Click Add Check** (or **Create Check**).

3. **Fill in the form:**

   - **Check Name** (required) — A short, descriptive name. Max 255 characters.
     - Good: "Opening Greeting Compliance"
     - Bad: "Check 1"

   - **Check Type** (required) — Choose Compliance, Quality, or Business Intelligence.

   - **Category** (optional) — Assign to an existing category (e.g., "Compliance," "Sales") to group related checks.

   - **Evaluation Prompt** (required) — The instruction the AI uses to evaluate the call. Max 5,000 characters. This is the most important field — see [Writing Effective Prompts](#writing-effective-prompts) below.

   - **Severity** (optional) — Choose Info, Warning, or Critical. Defaults to Warning.

   - **Active** (toggle) — Whether to include this check in future analyses. Disabled checks are skipped.

4. **Click Create** (or **Save**).

The check is now active and will be evaluated on all future call analyses in this campaign.

> **Tip:** Click the **Improve with AI** button after writing your prompt. TotalView's AI refines your prompt for clarity and specificity.

---

## Writing Effective Prompts

The evaluation prompt is what the AI reads to decide if a call passes or fails. Good prompts are specific and unambiguous.

### Best Practices

1. **Be specific about what to look for.** Don't write "Was the call good?" — instead write "Did the agent confirm the caller's account number before making any changes?"

2. **Include time constraints when relevant.** "Within the first 30 seconds" or "Before ending the call" gives the AI a clear window.

3. **Define success clearly.** State what a passing call looks like. "The agent must use the caller's name at least twice during the call."

4. **Use plain language.** Write as if you're explaining to a new team member what to listen for.

5. **Keep it focused.** One check should evaluate one thing. If you're checking multiple behaviors, split them into separate checks.

### Examples by Type

**Compliance:**
> "Did the agent clearly state the call recording disclaimer at the beginning of the call? The agent must explicitly mention that the call is being recorded for quality and training purposes."

**Quality:**
> "Did the agent summarize the key discussion points and agreed next steps before ending the call? Look for a clear recap that confirms both parties are aligned."

**Business Intelligence:**
> "Did the caller express dissatisfaction with a specific product or service? If yes, identify the product/service mentioned and the nature of the complaint."

### Common Mistakes

| Mistake | Why It's Bad | Fix |
|---------|-------------|-----|
| Too vague ("Was the agent professional?") | "Professional" means different things to different people | Define specific behaviors: "Did the agent avoid interrupting the caller?" |
| Too long (500+ words) | Confuses the AI with contradictory instructions | Keep to 1-3 clear sentences |
| Multiple criteria in one check | Hard to know which part passed/failed | Split into separate checks |
| No success criteria | AI has to guess what "good" means | State what passing looks like |

---

## Editing a Check

1. **Navigate to your campaign's Checks section.**

2. **Click the check** you want to edit.

3. **Modify any fields** — name, type, prompt, severity, category, active status.

4. **Click Save.**

> **Important:** Editing a check affects future analyses only. Calls already analyzed with the old version retain their original results. To re-evaluate existing calls, rerun analysis from the call detail page.

---

## Check Templates

Templates let you reuse proven check configurations across campaigns.

### Importing from Templates

1. In your campaign's Checks section, click **Import from Template**.
2. Browse available templates or templates from other campaigns.
3. Select the checks you want to import.
4. Click **Import**. The checks are copied into your campaign and can be customized.

### Importing from Other Campaigns

You can also import checks directly from another campaign you have access to. This copies the check configuration (name, prompt, severity, etc.) into your current campaign.

---

## Check Categories

Categories group related checks for easier organization and reporting.

1. **Create a category** from the campaign settings (e.g., "Opening & Closing," "Compliance," "Sales Technique").

2. **Assign checks to categories** when creating or editing them.

3. On the call detail page, check results are grouped by category for easier scanning.

---

## Understanding Check Results

After a call is analyzed, each check produces a result:

| Result | Meaning | Scoring Impact |
|--------|---------|----------------|
| **Pass** | The call met the check criteria | Positive contribution to quality score |
| **Fail** | The call did not meet the criteria | Negative impact based on severity |
| **N/A** | The check wasn't applicable (e.g., no relevant conversation) | No impact on score |

Each result includes the AI's **reasoning** — a brief explanation of why it passed or failed. This is visible on the [Call Detail Page](/call-review).

### How Checks Affect the Quality Score

The overall quality score (0-100) is calculated from all active check results:
- Each check contributes based on its **scoring weight** (configurable per check)
- **Critical** failures have the highest impact
- **N/A** checks are excluded from the calculation
- The score represents the weighted percentage of checks that passed

---

## Check Limits

Each campaign supports up to **50 quality checks**. This is typically more than sufficient — most organizations use 10-25 checks per campaign.

If you need more granular evaluation, consider splitting into multiple campaigns with focused check sets.

---

## Troubleshooting

### My check always returns N/A

**Symptoms:** A check consistently shows N/A across all calls.
**Cause:** The prompt may be too specific for the calls being analyzed, or it references something that doesn't appear in the transcripts.
**Solution:**
1. Review the check prompt — is it relevant to the calls in this campaign?
2. Listen to a few calls and confirm the topic comes up in conversation.
3. Broaden the prompt slightly if it's too narrow.

### Check results seem inconsistent

**Symptoms:** Similar calls get different pass/fail results for the same check.
**Cause:** The prompt may be ambiguous, leaving room for interpretation.
**Solution:**
1. Make the prompt more specific — add concrete criteria.
2. Use the **Improve with AI** button to refine the wording.
3. Test the check against several calls to calibrate.

---

## FAQ

### Can I reorder checks?

Checks are displayed in the order they were created. Category grouping helps organize them visually on the call detail page.

### Do inactive checks count against the 50-check limit?

Yes, inactive checks still count toward the limit. Delete checks you no longer need to free up space.

### Can I test a check before enabling it?

Yes. Use the check testing feature to evaluate a check against sample calls before making it active for all future analyses.

### What happens if I delete a check?

Existing check results for that check are retained on previously analyzed calls. Future analyses will not include the deleted check.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View check results | Own calls | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Create/edit checks | — | Yes | Yes | Yes | Yes |
| Delete checks | — | Yes | Yes | Yes | Yes |
| Import templates | — | Yes | Yes | Yes | Yes |

---

## Related Documentation

- [Campaigns](/campaigns) — the workspace where checks live
- [Reviewing Calls](/call-review) — see check results on individual calls
- [Review Queue](/review-queue) — calls flagged by check failures
- [Coaching Pipeline](/coaching) — use failed checks to drive coaching
- [Glossary](/glossary) — definitions of check-related terms
