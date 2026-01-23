---
title: Keywords
description: Word and phrase tracking in call transcripts
slug: keywords
order: 72
---

# Keywords

## What are Keywords?

**Keywords** are specific words or phrases that TotalView AI tracks in call transcripts. Unlike AI-powered quality checks, keyword detection uses simple text matching — if the word appears, it's counted.

Use keywords to:
- Track competitor mentions
- Monitor compliance phrases
- Identify sales opportunities
- Detect sensitive topics
- Count specific terminology

---

## Keywords vs. Quality Checks

| Feature | Keywords | Quality Checks |
|---------|----------|----------------|
| Detection method | Exact text match | AI interpretation |
| Scoring | Count only (no pass/fail) | 0-100 score |
| Context understanding | No | Yes |
| Setup complexity | Simple | Requires prompts |
| Best for | Specific words/phrases | Behaviors and concepts |

**Use keywords when:**
- You need exact phrase detection
- Context doesn't matter
- You want simple counting

**Use quality checks when:**
- Behavior matters more than words
- Context affects interpretation
- You need pass/fail evaluation

---

## Configuring Keywords

### Accessing Keyword Settings

1. Navigate to your campaign
2. Go to **Settings**
3. Find the **Keywords** section

Or: **Campaign → Keywords** (if available as a tab)

### Adding a Keyword

1. Click **Add Keyword**
2. Enter the word or phrase
3. Optionally assign a category
4. Click **Add**

[SCREENSHOT: Keywords configuration with list and add form]

### Keyword Options

| Field | Description | Example |
|-------|-------------|---------|
| **Word/Phrase** | Text to detect | "competitor" or "money-back guarantee" |
| **Category** | Optional grouping | "Competitors", "Promotions" |

### Bulk Add

Add multiple keywords at once:

1. Click **Bulk Add**
2. Enter keywords, one per line
3. Optionally select a category
4. Click **Add All**

---

## Keyword Categories

Categories help organize keywords and enable filtered reporting.

### Creating Categories

Categories are created implicitly when you assign keywords:

1. When adding a keyword, type a new category name
2. The category is created automatically
3. Future keywords can use the same category

### Common Category Examples

| Category | Example Keywords |
|----------|------------------|
| **Competitors** | CompanyX, BrandY, RivalZ |
| **Promotions** | discount, free trial, money-back |
| **Compliance** | terms and conditions, recorded, consent |
| **Sentiment** | frustrated, angry, happy, thank you |
| **Products** | ProductA, ServiceB, PlanC |

---

## How Keywords Are Matched

### Matching Rules

- **Case-insensitive**: "Discount" matches "discount", "DISCOUNT", "DiScOuNt"
- **Exact phrase**: "money back" matches only that exact phrase
- **Word boundaries**: "care" doesn't match "healthcare" (optional, depending on configuration)

### What Gets Scanned

Keywords are matched against:
- Full transcript text
- All speakers (agent and customer)

---

## Viewing Keyword Matches

### On Individual Calls

When viewing a call detail page:

1. Look for the **Keywords** section
2. See which keywords were detected
3. View count per keyword
4. Click to see where in the transcript

### Keyword Highlights

In the transcript view:
- Matched keywords are highlighted
- Click to jump to that position
- Multiple matches show count

[SCREENSHOT: Transcript with highlighted keyword matches]

### In Call Lists

Filter calls by keyword presence:

1. Go to campaign **Calls**
2. Find the **Keywords** filter
3. Select keywords to filter by
4. View matching calls

---

## Keyword Analytics

### Campaign-Level Stats

In campaign overview or reports, see:

| Metric | Description |
|--------|-------------|
| **Total Matches** | Sum of all keyword occurrences |
| **Top Keywords** | Most frequently detected |
| **Keyword by Category** | Matches grouped by category |

### Trends

Track keyword frequency over time:
- Increasing competitor mentions?
- Declining compliance phrase usage?
- Seasonal product interest?

---

## Editing and Deleting Keywords

### Editing a Keyword

1. In the Keywords list, find the keyword
2. Click **Edit**
3. Modify the word or category
4. Save

> **Note**: Editing doesn't retroactively change existing matches. New matches use the updated keyword.

### Deleting a Keyword

1. Find the keyword in the list
2. Click **Delete**
3. Confirm

> **Note**: Deleting removes the keyword from configuration. Historical matches in calls remain visible.

---

## Use Cases

### Competitor Tracking

Track when competitors are mentioned:

```
Keywords:
- CompetitorA
- CompetitorB
- "their service"
- "other provider"

Category: Competitors
```

**Insight**: Calls with competitor mentions may indicate price shopping or dissatisfaction.

### Compliance Monitoring

Ensure required phrases are used:

```
Keywords:
- "this call may be recorded"
- "terms and conditions"
- "do you consent"

Category: Compliance
```

**Insight**: Low occurrence may indicate compliance gaps (pair with quality checks for verification).

### Sales Opportunities

Identify upsell potential:

```
Keywords:
- "upgrade"
- "additional features"
- "premium"
- "interested in"

Category: Sales Signals
```

**Insight**: Calls with these keywords may have upsell opportunities.

### Sentiment Indicators

Track emotional language:

```
Keywords:
- "frustrated"
- "angry"
- "disappointed"
- "excellent"
- "thank you so much"

Category: Sentiment
```

**Insight**: Complements AI sentiment analysis with specific phrase tracking.

---

## Keywords and Scoring

**Keywords do not affect quality scores.** They're purely informational.

If you need a keyword presence to affect scoring:
1. Create a quality check instead
2. Use a prompt like: "Did the agent mention the phrase '[keyword]'?"

---

## Best Practices

### Be Specific

- "free trial" is better than just "free"
- Reduces false positives
- More actionable insights

### Use Categories

- Organize keywords by purpose
- Enable filtered reporting
- Easier to manage large lists

### Review Regularly

- Remove unused keywords
- Add emerging terms
- Adjust based on findings

### Combine with Quality Checks

Keywords tell you *what* was said. Quality checks tell you *how* it was said.

**Example:**
- Keyword: "competitor" (detects mention)
- Quality Check: "Did the agent handle competitor mentions professionally?" (evaluates behavior)

---

## Limits

| Limit | Value |
|-------|-------|
| Keywords per campaign | 100 |
| Characters per keyword | 100 |
| Categories per campaign | No limit |

---

## FAQ

### Are keywords case-sensitive?

No. Keywords match regardless of case. "Discount" matches "discount", "DISCOUNT", etc.

### Can I track phrases, not just words?

Yes. Enter multi-word phrases like "money-back guarantee". The exact phrase must appear.

### Do keywords work with partial matches?

It depends on configuration. By default, most systems match whole words to avoid false positives (e.g., "care" not matching "healthcare").

### Can I see which speaker said the keyword?

In the transcript view, you can see the context of each match, including which speaker said it.

### Do keywords affect the call score?

No. Keywords are informational only. Use quality checks if you need scoring based on word presence.

### Can I export keyword data?

Keyword matches are included in call data exports and reports. Filter by keyword, then export.

### How many keywords can I add?

Up to 100 per campaign. If you need more, consider consolidating or prioritizing.

### What's the difference between keywords and key topics?

- **Keywords**: Exact phrases you configure; simple matching
- **Key Topics**: AI-extracted themes; automatic, no configuration

---

## Related Documentation

- [Campaigns](/campaigns) - Campaign settings including keywords
- [Quality Checks](/quality-checks) - AI-powered evaluation (alternative)
- [Reviewing Calls](/reviewing-calls) - Viewing keyword matches
- [Reports](/reports) - Keyword analytics in reports
