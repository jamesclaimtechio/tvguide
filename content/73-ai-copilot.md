---
title: AI Copilot
description: Natural language analytics assistant for call center insights
slug: ai-copilot
order: 73
---

# AI Copilot

## What is AI Copilot?

**AI Copilot** is your intelligent assistant for call center analytics. Ask questions in natural language and get instant answers about your data. Copilot can also take actions like flagging calls or adding notes.

Think of it as having a data analyst available 24/7 who knows everything about your calls.

**Access:** Dashboard → **AI Copilot** (sidebar) or press **⌘K** / **Ctrl+K** anywhere

[SCREENSHOT: AI Copilot interface with chat window and campaign selector]

---

## Capabilities

### Data Queries

Ask questions and get instant answers:

| Question Type | Examples |
|---------------|----------|
| **Metrics** | "What's our average score this week?" |
| **Comparisons** | "Compare this week to last week" |
| **Filtering** | "Show me calls with score below 60" |
| **Aggregations** | "How many calls did we process yesterday?" |

### Agent Analysis

Get insights about your team:

- "Who are our top 5 performers?"
- "Which agent has the most failed compliance checks?"
- "Show me John Smith's recent calls"
- "Who needs coaching?"

### Trend Analysis

Understand patterns over time:

- "How has our score changed over the last month?"
- "Which checks are failing most often?"
- "Is our compliance rate improving?"

### Taking Actions

Copilot can make changes on your behalf:

| Action | Example |
|--------|---------|
| Flag for review | "Flag this call for review" |
| Add notes | "Add a note: needs follow-up training" |
| Bulk flag | "Flag all calls from John with score below 60" |
| Dismiss reviews | "Dismiss the review on call [ID]" |

---

## How to Use

### Opening Copilot

Three ways:
1. Click **AI Copilot** in the sidebar
2. Press **⌘K** (Mac) or **Ctrl+K** (Windows)
3. Click the Copilot icon in the top navigation

### Basic Conversation

1. Type your question in plain English
2. Press Enter or click Send
3. Copilot responds with data and insights
4. Ask follow-up questions to drill down

### Campaign Context

You can scope questions to a specific campaign:

1. Select a campaign from the dropdown (top of Copilot)
2. Questions automatically focus on that campaign
3. Or ask about "all campaigns" explicitly

### Conversation History

Copilot remembers context within your session:

- Ask follow-ups like "Show me more details on the first one"
- Reference previous answers: "What about for Jane instead?"
- Context is maintained as you continue the conversation

| Scenario | Context Saved? |
|----------|----------------|
| Same session | ✓ Yes |
| Page refresh | ✗ No, conversation resets |
| Next day | ✗ No, starts fresh |
| Different device | ✗ No, sessions are independent |

> **Tip**: Copy important insights before leaving Copilot if you need to preserve them.

---

## Asking Questions

### Effective Queries

| Less Effective | More Effective |
|----------------|----------------|
| "How are we doing?" | "What's our average score this week compared to last?" |
| "Show agents" | "Show me agents with declining scores" |
| "Calls" | "Show me calls from yesterday with negative sentiment" |

### Query Patterns

**Simple metrics:**
```
"What's our average score?"
"How many calls did we process today?"
"What's our pass rate for compliance checks?"
```

**Filtered queries:**
```
"Show me calls with score below 70"
"Find calls from agent John Smith"
"List calls from last week with negative sentiment"
```

**Comparative:**
```
"Compare this week's scores to last week"
"Which campaign is performing best?"
"How does John compare to the team average?"
```

**Trend-based:**
```
"How has our score changed over the past month?"
"Is our compliance rate improving?"
"Show me the weekly trend for customer verification failures"
```

---

## Taking Actions

Copilot can perform actions when you ask:

### Flagging Calls

```
You: "Flag call cmj7abc123 for review because of compliance issues"

Copilot: "I've flagged call cmj7abc123 for review with the reason: 
         compliance issues"
```

### Adding Notes

```
You: "Add a note to call cmj7abc123: Agent needs training on verification"

Copilot: "Done! I've added the note to call cmj7abc123"
```

### Bulk Actions

```
You: "Flag all calls from today with score below 65"

Copilot: "I found 3 calls matching that criteria:
         - call_001.mp3 (score: 62)
         - call_042.mp3 (score: 58)
         - call_089.mp3 (score: 64)
         
         Should I flag them for review?"

You: "Yes"

Copilot: "Done! I've flagged 3 calls for review with the reason: 
         Low score (below 65)"
```

### Safety Confirmations

Copilot asks for confirmation before:
- Bulk actions (affecting multiple items)
- Destructive actions (if any)

This prevents accidental changes.

---

## What Copilot Can Access

### Data Access

| Data Type | Access Level |
|-----------|--------------|
| Call recordings metadata | ✓ Full access |
| Transcriptions | ✓ Full access |
| Check results | ✓ Full access |
| Agent profiles | ✓ Full access |
| Campaign settings | ✓ Read-only |
| Reports | ✓ Can summarize |
| Keyword matches | ✓ Full access |

### What Copilot Cannot Access

- Other organizations' data
- Billing information
- User passwords or credentials
- Audio files directly (works with text only)

---

## Example Conversations

### Simple Query

```
You: "What's our average score this month?"

Copilot: "Based on 234 completed calls this month, your average 
         quality score is 82.4. This is up 3.2 points from last 
         month (79.2)."
```

### Agent Analysis

```
You: "Which agent has the most calls needing review?"

Copilot: "Sarah Johnson has 8 calls in the review queue, followed 
         by Mike Chen with 5. Most of Sarah's flagged calls are 
         due to verification check failures."
```

### Multi-Step Investigation

```
You: "Our scores dropped this week. What's happening?"

Copilot: "I can see average scores dropped from 81.2 last week to 
         74.8 this week (-6.4 points). Let me analyze...
         
         Key findings:
         1. 'Customer Verification' pass rate dropped from 89% to 67%
         2. Most failures are from agents: Sarah J. (12), Mike C. (8)
         3. The drop started on Tuesday
         
         Would you like me to look deeper into any of these areas?"

You: "Tell me more about Sarah's calls"

Copilot: "Analyzing Sarah Johnson's calls from this week...
         
         Compared to last week:
         - Total calls: 24 (up from 18)
         - Average score: 68.2 (down from 84.1)
         - Verification check: 58% pass rate (was 92%)
         - Call duration: 4.2 min avg (was 6.1 min)
         
         Pattern: Her calls are shorter this week and she's 
         frequently skipping the verification step.
         
         Would you like me to:
         1. Flag her low-scoring calls for review?
         2. Show specific examples?
         3. Add a coaching note to her profile?"

You: "Flag her calls below 70 and add a coaching note"

Copilot: "Done! I've:
         ✓ Flagged 9 calls for review (score < 70)
         ✓ Added note to Sarah's profile: 'Week of Jan 15: 
           Verification compliance dropped. Review flagged calls 
           and schedule coaching session.'"
```

---

## Available Tools

Copilot uses these internal tools to answer questions:

### get_calls_data

Retrieves call information with filters:
- Campaign
- Agent
- Date range
- Status
- Score range
- Call type

### get_check_results

Gets quality check results:
- Check name
- Check type
- Result (pass/fail/na)
- Agent
- Date range

### get_call_insights

Retrieves AI-generated insights:
- Executive summaries
- Sentiment analysis
- Key topics

### get_campaigns_summary

Overview of all campaigns with stats.

### get_available_checks

List of quality checks configured per campaign.

---

## Limitations

Copilot has some boundaries:

| Cannot Do | Alternative |
|-----------|-------------|
| Create or modify quality checks | Use the Quality Checks UI |
| Delete calls or campaigns | Use the respective detail pages |
| Access other organizations | Not possible |
| Modify beyond your permissions | Respects your role |
| Access real-time data | Data may be 1-5 minutes delayed |
| Play audio | Use the call detail page |

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Open Copilot from anywhere |
| `Enter` | Send message |
| `Shift+Enter` | New line in message |
| `Escape` | Close Copilot |
| `↑` | Recall previous message |

---

## Best Practices

### Be Specific

- Include time ranges: "this week", "yesterday", "last 30 days"
- Name specific agents, campaigns, or checks
- Clarify what you're looking for

### Use Follow-Ups

- Start broad, then narrow down
- Reference previous answers
- Let Copilot guide the investigation

### Confirm Actions

- Review Copilot's understanding before confirming bulk actions
- Check the list of affected items
- Add context when flagging

### Combine with Other Tools

- Use Copilot for quick questions
- Use Reports for formal documentation
- Use Call Detail pages for deep review

---

## FAQ

### Does Copilot use my data to train AI?

No. Your data is used only to answer your questions in real-time. It is not used to train AI models.

### Can Copilot access audio files?

No. Copilot works with text data only (transcripts, metadata, scores). To listen to audio, open the call detail page.

### Why does Copilot say "I don't have access to that"?

Copilot respects your permission level. It also cannot access:
- Other organizations
- Deleted data
- Billing information

### Are conversations saved?

No. Conversations reset when you leave Copilot or refresh the page. Copy important insights before closing.

### Can I ask about specific call IDs?

Yes. Use patterns like:
- "Tell me about call cmj7abc123"
- "What was the score for call ID [paste ID]?"
- "Show check results for [call ID]"

### Is there a limit to questions?

No hard limit, but:
- Very complex queries may take longer
- Bulk actions have reasonable limits
- Extreme usage may be rate-limited

### Can Copilot write quality checks for me?

Copilot can suggest check prompts and help refine wording, but cannot directly create or modify checks. Use the Quality Checks UI for that.

### How current is Copilot's data?

Copilot queries live data with potential delay of 1-5 minutes. Very recent uploads may not appear immediately.

---

## Related Documentation

- [Review Queue](/review-queue) - Where flagged calls appear
- [Agents](/agents) - Agent performance data
- [Reports](/reports) - Automated alternative to Copilot
- [Quality Checks](/quality-checks) - Understanding check results
