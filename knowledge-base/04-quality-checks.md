# Quality Checks

## What are Quality Checks?

**Quality checks** are the evaluation criteria that AI uses to analyze your calls. Each check defines something specific to look for in a conversation and how to score it.

Think of quality checks as the questions you'd ask a human QA reviewer:
- "Did the agent introduce themselves?"
- "Was the customer's identity verified?"
- "Did the agent resolve the issue?"

The AI reads the transcript and answers each question, providing a score and evidence.

---

## Anatomy of a Quality Check

Each quality check has these components:

| Component | Description | Example |
|-----------|-------------|---------|
| **Name** | What the check evaluates | "Opening Greeting" |
| **Type** | Category of the check | `compliance` |
| **Evaluation Prompt** | Instructions for the AI | "Did the agent introduce themselves by name and company within the first 30 seconds?" |
| **Severity** | Impact if the check fails | `critical` |
| **Weight** | Influence on overall score | 1.5 |
| **Priority** | Order of evaluation | 75 |

### Check Types

| Type | Purpose | Example Checks |
|------|---------|----------------|
| **compliance** | Required procedures and regulations | Identity verification, disclosures, consent |
| **quality** | Customer experience and soft skills | Greeting, empathy, problem resolution |
| **business_intel** | Insights for business decisions | Competitor mentions, upsell opportunities |

### Severity Levels

Severity determines what happens when a check fails:

| Severity | Meaning | Effect |
|----------|---------|--------|
| **info** | Minor observation | No special flagging |
| **warning** | Notable issue | Appears highlighted in results |
| **critical** | Serious failure | Can trigger auto-flagging for review |

### Weight

Weight determines how much a check affects the overall score:

| Weight | Interpretation |
|--------|----------------|
| 0.5 | Less important than average |
| 1.0 | Standard importance |
| 2.0 | Twice as important |
| 5.0 | Maximum importance |

Higher weights mean the check has more influence on the final score.

### Priority

Priority controls the order in which checks are evaluated (0-100, higher = earlier). This matters because:
- Earlier checks can provide context
- You may want critical compliance checks first

---

## Creating a Quality Check

### Step-by-Step

1. Navigate to your campaign
2. Click **Checks** in the navigation
3. Click **Add Check**
4. Fill in the form:

[SCREENSHOT: Check creation form with all fields]

#### Required Fields

| Field | What to Enter |
|-------|---------------|
| **Name** | Short, descriptive name (e.g., "Opening Greeting") |
| **Evaluation Prompt** | Detailed instructions for the AI |

#### Optional Fields

| Field | Default | Description |
|-------|---------|-------------|
| Type | `quality` | Check category |
| Severity | `warning` | What happens if it fails |
| Weight | 1.0 | Scoring influence |
| Priority | 50 | Evaluation order |
| Category | None | Custom grouping (see Categories below) |

5. Click **Create Check**

### Using "Improve with AI"

Not sure how to phrase your prompt? Use the AI assistant:

1. Write a basic prompt describing what you want to check
2. Click **Improve with AI**
3. The AI suggests an enhanced, more specific prompt
4. Review and edit as needed
5. Accept or discard the suggestion

[SCREENSHOT: Improve with AI button and suggestion preview]

---

## Writing Effective Prompts

The evaluation prompt is the most important part of a quality check. Here's how to write prompts that get consistent, accurate results.

### Prompt Structure

A good prompt answers these questions:
1. **What** should the agent have done?
2. **When** should it have happened?
3. **How** can you tell if it happened?

### Good vs. Bad Prompts

| Bad Prompt | Problem | Good Prompt |
|------------|---------|-------------|
| "Was the greeting good?" | Too vague | "Did the agent greet the customer by name, introduce themselves, and state the company name within the first 30 seconds?" |
| "Check compliance" | No specific criteria | "Did the agent read the required mini-Miranda disclosure before discussing debt collection?" |
| "Agent should be nice" | Subjective | "Did the agent use the customer's name at least twice and express empathy when the customer mentioned a problem?" |

### Prompt Templates

Use these patterns as starting points:

**Yes/No Verification:**
```
Did the agent [specific action] [when/where]?
```

**Multi-Part Check:**
```
Did the agent complete all of the following:
1. [Action 1]
2. [Action 2]
3. [Action 3]
All three must be present for a pass.
```

**Timing-Based:**
```
Within the first [X] seconds/minutes, did the agent [action]?
```

**Contextual:**
```
If the customer [situation], did the agent [expected response]?
If [situation] did not occur, mark as N/A.
```

### Example Prompts by Type

#### Compliance Checks

```
Identity Verification:
"Did the agent verify the customer's identity by asking for at least 
two of the following: full name, account number, date of birth, 
or last four digits of SSN?"

Disclosure Statement:
"Did the agent read the required disclosure statement verbatim: 
'This call may be recorded for quality assurance purposes'? 
The exact wording must be used."
```

#### Quality Checks

```
Opening Greeting:
"Did the agent greet the customer warmly, introduce themselves 
by first name, and state they are calling from [Company Name]?"

Empathy:
"When the customer expressed frustration or dissatisfaction, 
did the agent acknowledge their feelings using phrases like 
'I understand' or 'I'm sorry to hear that'?"

Issue Resolution:
"Did the agent clearly summarize the customer's issue and 
confirm the solution before ending the call?"
```

#### Business Intelligence Checks

```
Competitor Mention:
"Did the customer mention any competitor by name (e.g., 
CompetitorA, CompetitorB)? If so, what was said?"

Upsell Opportunity:
"Did the agent identify and mention at least one additional 
product or service that could benefit the customer?"
```

---

## Check Results

When a call is analyzed, each check produces a result:

[SCREENSHOT: Check result card showing pass/fail, score, and evidence]

### Result Types

| Result | Meaning |
|--------|---------|
| **Pass** | Check criteria were met (score ≥ 70) |
| **Fail** | Check criteria were not met (score < 70) |
| **N/A** | Check was not applicable to this call |

### Result Components

| Component | Description |
|-----------|-------------|
| **Score** | 0-100 rating for this check |
| **Reasoning** | AI's explanation of the score |
| **Evidence** | Relevant quotes from the transcript |
| **Timestamp** | Where in the call the evidence appears |

### Disputing Results

If you disagree with an AI finding:

1. Open the call detail page
2. Find the check result
3. Click the **Dispute** button
4. Select a reason (e.g., "AI misinterpreted")
5. Add optional notes
6. Submit

Disputed results are tracked but don't automatically change the score.

---

## Organizing Checks with Categories

For campaigns with many checks, use categories to group related checks.

### Creating a Category

1. Go to **Checks** in your campaign
2. Click **Manage Categories**
3. Click **Add Category**
4. Enter a name (e.g., "Opening Sequence", "Compliance", "Closing")
5. Choose a color
6. Click **Save**

### Assigning Checks to Categories

When creating or editing a check:
1. Find the **Category** dropdown
2. Select the appropriate category
3. Save the check

### Category View

In the Checks list, you can:
- View checks grouped by category
- Collapse/expand category sections
- Drag checks between categories
- Reorder categories

---

## Testing Checks

Before using a check on real calls, test it with the Testing Console.

### Using the Testing Console

1. Navigate to your campaign
2. Click **Testing** in the navigation (or **Checks → Test**)
3. Paste a sample transcript
4. Select the check(s) to test
5. Click **Run Test**
6. Review the results

[SCREENSHOT: Testing console with transcript input and results]

### What to Look For

- Does the check pass/fail as expected?
- Is the reasoning accurate?
- Is the evidence correctly identified?
- Does the score make sense?

### Iterating on Prompts

If results aren't accurate:
1. Adjust the evaluation prompt
2. Run the test again
3. Repeat until results match expectations
4. Save the updated check

> **Tip**: Test with edge cases — calls where the behavior is borderline.

---

## Importing Checks

You can import checks from templates or other campaigns.

### From a Template

1. Go to **Checks** in your campaign
2. Click **Import**
3. Select **From Template**
4. Choose a template
5. Select which checks to import
6. Click **Import Selected**

### Bulk Import

For advanced users, import checks via CSV:

| Column | Required | Description |
|--------|----------|-------------|
| name | Yes | Check name |
| type | No | compliance, quality, business_intel |
| evaluation_prompt | Yes | The AI instructions |
| severity | No | info, warning, critical |
| weight | No | 0.5 to 5.0 |
| priority | No | 0 to 100 |

---

## Check Limits

Each campaign can have up to **50 active checks**. This limit ensures:
- Reasonable analysis time
- Focused evaluation criteria
- Manageable results

If you need more than 50 checks:
- Consolidate related checks
- Archive rarely-used checks
- Consider multiple campaigns for different purposes

---

## Check Versioning

When you edit a check, previous analysis results are preserved:

- Old calls keep their original check results
- New calls use the updated check
- You can re-run analysis to apply new checks to old calls

This ensures historical data remains accurate to how it was originally evaluated.

---

## Best Practices

### Start Simple

- Begin with 5-10 essential checks
- Add more as you understand patterns
- Quality over quantity

### Be Specific

- Avoid vague terms ("good", "appropriate")
- Include specific criteria
- Define what success looks like

### Use Severity Wisely

- Reserve `critical` for compliance failures
- Use `warning` for quality issues
- Use `info` for observations only

### Test Before Deploying

- Always test with real transcripts
- Check edge cases
- Iterate until accurate

### Review Regularly

- Monitor check performance (pass rates)
- Adjust prompts if accuracy drops
- Remove checks that don't add value

---

## FAQ

### How many checks should I have?

Start with 5-10 focused checks. You can have up to 50 per campaign, but more isn't always better. Focus on checks that drive meaningful insights.

### Can I use the same check in multiple campaigns?

Not directly — checks belong to a campaign. However, you can:
1. Import from templates (shared across campaigns)
2. Create a template with your common checks
3. Manually recreate checks in each campaign

### What happens if I edit a check?

Editing a check affects future analyses only. Historical results remain unchanged. To apply the updated check to old calls, re-run analysis.

### Why did a check return N/A?

N/A means the check wasn't applicable. This happens when:
- The situation described in the prompt didn't occur
- The transcript was too short
- The AI couldn't find relevant content

Consider adjusting your prompt to handle edge cases.

### How do weights affect scoring?

The overall score is a weighted average. Example:

| Check | Score | Weight | Contribution |
|-------|-------|--------|--------------|
| Check A | 100 | 2.0 | 200 |
| Check B | 80 | 1.0 | 80 |
| Check C | 60 | 0.5 | 30 |
| **Total** | | **3.5** | **310** |

Overall Score = 310 / 3.5 = **88.6**

### Can I disable a check without deleting it?

Yes. Edit the check and toggle **Active** off. Inactive checks are preserved but not used in analysis.

---

## Related Documentation

- [Getting Started](./01-getting-started.md) - Creating your first checks
- [Campaigns](./03-campaigns.md) - Campaign configuration
- [Analysis & Scoring](./06-analysis-scoring.md) - How scores are calculated
- [Reviewing Calls](./07-reviewing-calls.md) - Viewing check results
- [Review Queue](./08-review-queue.md) - Auto-flagging based on check failures
