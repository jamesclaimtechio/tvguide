---
title: "Reports, Segments & AI Copilot"
description: "Analytics tools — generated reports, saved filters, and the AI assistant"
slug: "reports-segments-copilot"
order: 11
---

## Reports

### What is a Report?

A report is a generated analysis of your call data. TotalView can produce standard pre-built reports or custom AI-generated reports based on your specific questions.

### Generating a Report

1. **Navigate to a campaign** and click **Generate Report** (or access from the Reports section).

2. **Choose the report type:**

| Type | Description |
|------|-------------|
| **Standard** | Pre-defined report template with common metrics and findings |
| **Custom** | AI-generated report based on a custom prompt you provide |

3. **For custom reports**, enter your analysis prompt. For example:
   - "What are the top 3 compliance issues this month?"
   - "Compare agent performance trends over the last 6 weeks"
   - "Identify calls where customers expressed frustration about billing"

4. **Click Generate.**

5. The report is processed and appears when ready. Reports show a status:

| Status | Meaning |
|--------|---------|
| **Generating** | Report is being created |
| **Completed** | Report is ready to view |
| **Failed** | Generation encountered an error — try again |

### Viewing Reports

Open a completed report to see:
- **Findings** — Key observations and data points
- **Recommendations** — Suggested actions based on the analysis
- **Supporting data** — Charts, tables, and call references

Reports are scoped to a specific campaign and time period.

---

## Segments

### What is a Segment?

A segment is a saved set of call filters. Instead of re-applying the same filter combination every time, you save it as a named segment and apply it with one click. Segments can also filter campaign analytics on the detail page.

[SCREENSHOT: Segments page showing saved segments with filter badges]

### Creating a Segment

There are two ways to create segments:

#### Method 1: Natural Language

1. **Navigate to your campaign's Segments section.**

2. **Type a description** in the natural language input. For example:
   - "Calls with a score below 50 from the last 7 days"
   - "Calls with negative sentiment reviewed by compliance"
   - "Agent John's calls that failed the opening greeting check"

3. **Click Parse.** TotalView interprets your query and shows a preview:
   - Segment name (auto-generated)
   - Confidence badge (High, Medium, Low)
   - Parsed filter badges showing the interpreted criteria

4. **Review the filters** to make sure they match your intent.

5. **Click Create Segment** to save.

#### Method 2: Manual Filters

1. **From the campaign call list**, apply filters using the [filter bar](/call-review#call-filtering):
   - Score range, date range, agent, sentiment, review status

2. **Click Save Current Filters as Segment.**

3. **Name your segment** and add a description.

4. **Click Save.**

### Using a Segment

- **Campaign analytics**: Select a segment from the dropdown on the campaign detail page. All KPIs and charts filter to matching calls.
- **Call list**: Select a segment from the filter bar to view matching calls.
- **Reports**: Segments can scope reports to a subset of calls.

### Segment Filters

Segments can filter on:

| Filter | Description |
|--------|-------------|
| **Score range** | Minimum and/or maximum quality score |
| **Date range** | Start and end dates |
| **Sentiment** | Positive, Neutral, Negative |
| **Review status** | No Action Needed, Needs Review, Reviewed, Dismissed |
| **Agents** | Specific agents |

### Managing Segments

- **View calls**: Click **View Calls** on any segment to see matching calls.
- **Delete**: Click the trash icon to remove a segment (with confirmation).
- Segments show an **AI Generated** badge if created via natural language.

---

## AI Copilot

### What is the AI Copilot?

The AI Copilot (also called **Scout**) is a built-in AI assistant that answers natural-language questions about your call data. Instead of building reports or applying filters manually, you can ask questions like "Which agent has the most critical failures this week?" and get an instant answer.

[SCREENSHOT: AI Copilot panel showing a conversation about agent performance]

### Accessing the Copilot

- **Keyboard shortcut**: Press **Cmd+K** (Mac) or **Ctrl+K** (Windows) from anywhere in TotalView.
- **Sidebar button**: Click the AI Copilot trigger button in the bottom-right corner.
- **Full page**: Navigate to the Copilot page from the sidebar.

### Asking Questions

1. **Open the Copilot** using any method above.

2. **Type your question** in the input field. Examples:
   - "What's the average quality score for Sales Inbound this week?"
   - "Which checks fail most often across all campaigns?"
   - "Show me agents who scored below 60% on compliance checks"
   - "What are the trending issues in customer complaints?"

3. **Select a campaign context** (optional) — Use the campaign dropdown to scope your question to a specific campaign. Select "All campaigns" for organization-wide queries.

4. **Use @ mentions** — Type `@` to mention specific campaigns or agents in your question. For example: "Compare @John Smith to @Jane Doe on the opening greeting check."

5. **Press Enter** or click **Send.**

6. The Copilot streams its response in real-time, often including tables, lists, and data references.

### Quick Actions

When the Copilot is empty, four preset queries are available:
- Quality score analysis
- Coaching recommendations
- Compliance check failures
- Performance trends

Click any to start a conversation with that focus.

### Copilot Capabilities

The Copilot can:

| Capability | Description |
|------------|-------------|
| **Search calls** | Find calls matching specific criteria |
| **Analyze check results** | Summarize pass/fail patterns and trends |
| **Compare agents** | Side-by-side agent performance comparison |
| **Identify trends** | Spot improving or declining metrics |
| **Get campaign summaries** | Overview of campaign health and key metrics |
| **Flag calls** | Mark calls for review based on analysis |
| **Add notes** | Create call notes from the conversation |
| **Bulk actions** | Flag multiple calls at once based on criteria |

### Conversation History

- The Copilot remembers your conversation within a session.
- **View history**: Click the history button to see past conversations (up to 50).
- **Load a conversation**: Click any past conversation to continue it.
- **Delete conversations**: Remove conversations you no longer need.
- **New chat**: Click the clear button to start fresh.

### Tips for Better Results

1. **Be specific** — "Show agents with <70% score on compliance checks in Sales Inbound" is better than "Who's bad?"
2. **Use campaign context** — Select a campaign or use @ mentions for focused answers.
3. **Ask follow-up questions** — The Copilot remembers context within a conversation.
4. **Check the tools used** — The Copilot shows which data tools it consulted (e.g., "get_calls_data," "get_check_results") so you can verify it looked at the right data.

---

## Troubleshooting

### Report generation fails

**Symptoms:** Report status shows "Failed."
**Cause:** Complex queries may time out, or there's insufficient data.
**Solution:**
1. Try a simpler or more focused prompt.
2. Ensure there are completed calls in the selected time period.
3. Generate again — transient errors sometimes resolve on retry.

### Segment natural language parsing is wrong

**Symptoms:** Parsed filters don't match your intent.
**Cause:** Ambiguous natural language or unsupported filter combinations.
**Solution:**
1. Check the confidence badge — "Low" confidence means the parser wasn't sure.
2. Rephrase with more specific terms (use exact agent names, explicit date ranges).
3. Fall back to manual filter creation.

### Copilot gives incorrect data

**Symptoms:** Numbers or findings don't match the dashboard.
**Cause:** Campaign context may not be set, or the Copilot queried a different time period.
**Solution:**
1. Select the correct campaign from the dropdown.
2. Be explicit about the time period in your question: "...this week" or "...in January 2026."
3. Check which tools the Copilot used — this shows what data it consulted.

---

## FAQ

### Can I schedule reports to generate automatically?

Yes. Scheduled reports can be configured to generate on a regular cadence (daily, weekly, monthly) and delivered to specified recipients.

### Can I export reports?

Reports can be viewed within TotalView. Export options depend on the report format.

### Is the Copilot available to agents?

No. The AI Copilot requires Manager or higher access. Agents see their own dashboard with personal stats.

### Does the Copilot have access to all my data?

The Copilot respects role-based access. It only queries data you have permission to view. Managers see assigned campaign data; Compliance Officers and above see all campaigns.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| Generate reports | — | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| View reports | — | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Create segments | — | Assigned campaigns | All campaigns | All campaigns | All campaigns |
| Use AI Copilot | — | Yes | Yes | Yes | Yes |

---

## Related Documentation

- [Understanding the Dashboard](/dashboard) — the main analytics overview
- [Campaigns](/campaigns) — campaign-level analytics and segment filtering
- [Reviewing Calls](/call-review) — the filter bar that powers segments
- [Quality Checks](/quality-checks) — the checks that Copilot can analyze
