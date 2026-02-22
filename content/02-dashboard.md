---
title: "Understanding the Dashboard"
description: "KPIs, attention cards, and performance trends at a glance"
slug: "dashboard"
order: 2
---

## What is the Dashboard?

The dashboard is the first page you see after signing in. It provides a real-time overview of your organization's call quality performance. At a glance, you can see how many calls have been processed, your average quality score, and which campaigns or agents need attention.

[SCREENSHOT: Main dashboard showing KPI cards, sparklines, and attention cards]

---

## KPI Cards

The top of the dashboard shows four key performance indicators, each with a 6-week sparkline trend:

| KPI | What It Shows | Why It Matters |
|-----|---------------|----------------|
| **Total Calls** | Number of calls uploaded in the selected period | Track your QA coverage volume |
| **Completed Calls** | Calls that finished the analysis pipeline | Confirms processing is working |
| **Avg Quality Score** | Mean score (0-100) across all analyzed calls | Your headline quality metric |
| **Completion Rate** | Percentage of uploaded calls that completed analysis | Monitors pipeline health |

Each card includes a small sparkline chart showing the trend over the past 6 weeks, so you can spot improvements or declines at a glance.

A **Needs Review** badge also appears, showing the count of calls flagged for manual review. Click it to go directly to the [Review Queue](/review-queue).

---

## Time Period Picker

All dashboard data is scoped to a time period. Use the picker in the top-right to change it:

| Period | What It Covers |
|--------|----------------|
| This Week | Monday to today |
| Last Week | Previous Monday to Sunday |
| This Month | 1st of the month to today |
| Last Month | Full previous month |
| Custom | Any date range you choose |

When you change the period, all KPIs, attention cards, and trends update to reflect that window.

---

## Attention Cards

Below the KPIs, six attention cards highlight the campaigns and agents that deserve your focus:

### Campaign Attention Cards

| Card | Shows | Action |
|------|-------|--------|
| **Worst Performing Campaign** | Campaign with the lowest average quality score this period | Investigate checks, review calls |
| **Best Performing Campaign** | Campaign with the highest average quality score | Identify what's working well |
| **Most Improved Campaign** | Campaign with the biggest positive score change | Recognize successful coaching |

### Agent Attention Cards

| Card | Shows | Action |
|------|-------|--------|
| **At-Risk Agent** | Agent with the lowest performance this period | Prioritize for coaching |
| **Top Performing Agent** | Agent with the highest scores | Recognize excellence |
| **Most Improved Agent** | Agent with the biggest positive change | Validate coaching effectiveness |

Each card shows the entity name, score, and trend direction. Click a card to drill into that campaign or agent's detail page.

---

## Agent Dashboard

If you are signed in as an **agent**, you see a different dashboard tailored to your personal performance:

- **Welcome banner** with your name and pending task count
- **Coaching pack banner** (if you have unreplied coaching packs)
- **Quick actions** for completing pending scorecards
- **Monthly stats** — your calls, average score, flagged calls
- **Overall stats** — average score, total calls, highest and lowest scores
- **Trend charts** — your performance over 3, 6, or 12 months
- **Goals widget** — active performance goals with progress bars
- **Pending scorecards** — list of scorecards waiting for your response
- **Coaching stats** — active packs, unreplied count, completed packs

See [Agents — Agent Dashboard](/agents#agent-dashboard) for full details.

---

## Empty States

If your organization has no campaigns yet, the dashboard shows a welcome message with a prompt to create your first campaign. Follow the [Getting Started](/getting-started#creating-your-first-campaign) guide to set one up.

---

## Troubleshooting

### My KPIs show zero even though I've uploaded calls

**Symptoms:** All numbers are 0 despite having calls in the system.
**Cause:** The selected time period may not include your calls, or calls haven't finished processing yet.
**Solution:**
1. Check the time period picker — make sure it covers your upload dates.
2. Go to your campaign and check call statuses. If they show Pending or Transcribing, they haven't completed analysis yet.

### Attention cards are empty

**Symptoms:** "No data for this period" on attention cards.
**Cause:** Not enough completed calls in the selected period to calculate rankings.
**Solution:** Upload and analyze more calls, or expand the time period.

---

## FAQ

### How often does the dashboard refresh?

Dashboard data refreshes every 30 seconds automatically. You can also change the time period to trigger an immediate refresh.

### What score range is considered "good"?

Scores are 0-100. Generally:
- **80-100** (green) — Excellent quality
- **60-79** (amber) — Acceptable, room for improvement
- **Below 60** (red) — Needs attention

These thresholds are consistent across the platform.

### Can I customize which KPIs appear?

Not currently. The dashboard shows a fixed set of organization-wide KPIs. For custom analysis, use the [AI Copilot](/reports-segments-copilot#ai-copilot) or [Reports](/reports-segments-copilot#generating-a-report).

---

## Related Documentation

- [Getting Started](/getting-started) — if this is your first time on the dashboard
- [Campaigns](/campaigns) — drill into individual campaign analytics
- [Review Queue](/review-queue) — work through the calls flagged for review
- [Agents](/agents) — view individual agent performance
- [Reports, Segments & AI Copilot](/reports-segments-copilot) — deeper analysis tools
