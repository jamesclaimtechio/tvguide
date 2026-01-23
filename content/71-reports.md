---
title: Reports
description: AI-generated performance reports and analytics
slug: reports
order: 71
---

# Reports

## What are Reports?

**Reports** are AI-generated performance summaries that analyze your call data and provide actionable insights. Instead of manually reviewing metrics, reports synthesize patterns and highlight what matters.

Use reports to:
- Understand overall performance trends
- Identify common issues
- Find coaching opportunities
- Share insights with stakeholders

---

## Report Types

TotalView AI can generate reports at different scopes:

| Scope | Analyzes | Best For |
|-------|----------|----------|
| **Campaign** | All calls in a campaign | Overall performance review |
| **Segment** | Calls matching saved filters | Focused analysis |
| **Check** | Performance of a specific check | Check effectiveness review |
| **Calls** | A selected set of calls | Ad-hoc analysis |

---

## Generating a Report

### Campaign Report

Analyze overall campaign performance:

1. Navigate to your campaign
2. Click **Reports** in the navigation
3. Click **Generate Report**
4. Select **Campaign Report**
5. Optionally adjust the date range
6. Click **Generate**

[SCREENSHOT: Generate report dialog with scope and date options]

### Segment Report

Analyze a subset of calls:

1. Go to campaign **Reports**
2. Click **Generate Report**
3. Select **Segment Report**
4. Choose a saved segment (or create filters)
5. Click **Generate**

> **Learn More**: Segments are saved filter combinations. Create them from the Calls page.

### Check Report

Analyze a specific quality check:

1. Go to **Checks** in your campaign
2. Click a check to view details
3. Click **Generate Report**
4. Set the date range
5. Click **Generate**

---

## Report Contents

Each report includes several sections:

### Executive Summary

A brief overview (2-3 paragraphs) covering:
- Overall performance assessment
- Key achievements
- Primary concerns
- Top recommendations

### Performance Metrics

Quantitative data:

| Metric | Description |
|--------|-------------|
| Total Calls | Number of calls analyzed |
| Average Score | Mean quality score |
| Pass Rate | Percentage of checks passed |
| Score Distribution | Breakdown by score ranges |
| Trend | Comparison to previous period |

### Check Performance

Analysis of each quality check:

| Check | Pass Rate | Avg Score | Trend |
|-------|-----------|-----------|-------|
| Opening Greeting | 92% | 87.5 | ↑ |
| Customer Verification | 78% | 72.1 | ↓ |
| Issue Resolution | 85% | 81.3 | → |

### Common Issues

The AI identifies recurring problems:

- Pattern description
- Frequency
- Example calls
- Suggested remediation

### Agent Performance

If agents are linked:

| Agent | Calls | Avg Score | Top/Bottom Performer |
|-------|-------|-----------|---------------------|
| John S. | 45 | 88.2 | Top |
| Jane D. | 38 | 71.5 | — |
| Mike J. | 52 | 65.4 | Bottom |

### Recommendations

Actionable suggestions based on findings:

1. **Immediate actions** — Address critical issues now
2. **Short-term improvements** — Focus areas for next week/month
3. **Long-term strategies** — Structural changes to consider

---

## Viewing Reports

### Report List

Access all generated reports:

1. Go to campaign **Reports**
2. View the list of reports with:
   - Report name/type
   - Generated date
   - Scope
   - Actions

### Report Detail

Click a report to view:

- Full report content
- Interactive sections
- Export options
- Delete option

[SCREENSHOT: Report viewer showing executive summary and metrics]

---

## Interpreting Results

### Score Trends

| Trend | Meaning | Action |
|-------|---------|--------|
| ↑ Improving | Scores going up | Recognize what's working |
| → Stable | Consistent performance | Maintain current efforts |
| ↓ Declining | Scores going down | Investigate and intervene |

### Pass Rate Thresholds

| Pass Rate | Interpretation |
|-----------|----------------|
| 90%+ | Excellent — check is being followed consistently |
| 70-89% | Good — room for improvement |
| 50-69% | Concerning — needs attention |
| <50% | Critical — immediate action required |

### Confidence in Findings

Reports indicate confidence based on:
- Sample size (more calls = higher confidence)
- Consistency of patterns
- Statistical significance

> **Tip**: Be cautious with reports on small samples (<20 calls).

---

## Exporting Reports

### Available Formats

| Format | Best For |
|--------|----------|
| PDF | Sharing, printing, presentations |
| JSON | Integration, data analysis |

### How to Export

1. Open the report
2. Click **Export**
3. Select format
4. Download the file

---

## Report History

All generated reports are saved:

- View past reports any time
- Compare reports across time periods
- Track improvement over time

### Retention

Reports are retained indefinitely unless manually deleted.

### Deleting Reports

1. Open the report
2. Click **Delete**
3. Confirm

> **Note**: Deleting a report doesn't affect the underlying call data.

---

## Scheduled Reports (If Available)

Some organizations can schedule automatic reports:

### Setting Up a Schedule

1. Go to **Reports**
2. Click **Scheduled Reports**
3. Click **Create Schedule**
4. Configure:
   - Report type
   - Frequency (daily, weekly, monthly)
   - Recipients (email addresses)
5. Save

### Managing Schedules

View and edit scheduled reports from the Reports page.

---

## Report Costs

Reports consume AI tokens:

| Component | Tokens Used |
|-----------|-------------|
| Data analysis | Based on call count |
| Narrative generation | Based on report length |

View token usage in **Settings → Usage**.

---

## Best Practices

### When to Generate Reports

| Frequency | Report Type | Purpose |
|-----------|-------------|---------|
| Weekly | Campaign Report | Track progress, identify emerging issues |
| Monthly | Campaign + Segment | Comprehensive review, stakeholder updates |
| Quarterly | Campaign | Long-term trends, strategic planning |
| As needed | Check Report | Investigate specific issues |

### Sample Size

- **Minimum**: 20 calls for meaningful patterns
- **Recommended**: 50+ calls for reliable insights
- **Ideal**: 100+ calls for high confidence

### Acting on Insights

1. **Read the executive summary** — Get the big picture
2. **Review recommendations** — Prioritize actions
3. **Check agent data** — Identify who needs support
4. **Plan interventions** — Schedule coaching, update training
5. **Track progress** — Compare future reports

---

## FAQ

### How long does report generation take?

Typically 1-3 minutes, depending on the number of calls analyzed.

### Can I regenerate a report?

Yes. Generate a new report with the same scope. Old reports remain for comparison.

### Can I customize what's in a report?

Not currently. Reports use a standard template. You can generate different scopes (campaign, segment, check) for different focuses.

### Are reports updated automatically?

No. Reports are snapshots at generation time. Generate new reports to see updated data.

### Who can see reports?

All Admins and Members in your organization can view reports. Reports are not visible to agents.

### Can I share reports externally?

Yes. Export as PDF and share the file. Be mindful of sensitive data.

### What if I have no calls in the date range?

The report will indicate insufficient data. Expand the date range or wait for more calls.

### Do reports include audio or transcripts?

No. Reports include metrics, summaries, and insights. For specific call details, use the call detail page.

---

## Related Documentation

- [Campaigns](/campaigns) - Campaign-level reporting
- [Quality Checks](/quality-checks) - Check performance analysis
- [Agents](/agents) - Agent performance in reports
- [AI Copilot](/ai-copilot) - Interactive analytics alternative
