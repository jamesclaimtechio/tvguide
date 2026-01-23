# Getting Started

## What is TotalView AI?

TotalView AI is a call center quality assurance platform that uses artificial intelligence to analyze call recordings. Instead of manually reviewing every call, you define quality checks (evaluation criteria), upload recordings, and let AI do the heavy lifting.

**Key Benefits:**

- **Automated QA**: Process hundreds of calls without manual review
- **Consistent Scoring**: AI applies the same criteria to every call, eliminating reviewer bias
- **Actionable Insights**: Get AI-generated summaries, sentiment analysis, and recommendations
- **Time Savings**: Focus on calls that need attention, not routine reviews

Think of it as having a tireless QA analyst who listens to every call and evaluates it against your exact criteria.

---

## Account Setup

### Signing Up

1. Visit the TotalView AI signup page
2. Enter your email address and create a password
3. Verify your email by clicking the confirmation link
4. Complete the onboarding wizard (see below)

After signup, you become the **Admin** of a new organization.

### Signing In

1. Go to the login page
2. Enter your email and password
3. Click **Sign In**

If your organization uses single sign-on (SSO), click the SSO option instead.

### Password Reset

If you've forgotten your password:

1. Click **Forgot Password?** on the login page
2. Enter your email address
3. Check your inbox for a reset link (valid for 1 hour)
4. Click the link and create a new password
5. Sign in with your new credentials

### Session Management

- Sessions remain active for 7 days of inactivity
- You can be signed in on multiple devices simultaneously
- To sign out, click your avatar in the top-right corner and select **Sign Out**

---

## Onboarding Wizard

When you first create an account, TotalView AI guides you through a 5-step onboarding wizard to get your first campaign running.

[SCREENSHOT: Onboarding wizard showing step progress indicator]

### Step 1: Create Your Organization

Enter your organization name. This creates your workspace where all your campaigns, calls, and team members will live.

### Step 2: Choose a Template

Select a campaign template that matches your industry or use case:

| Template | Best For |
|----------|----------|
| Sales Calls | Outbound sales teams |
| Customer Support | Inbound support centers |
| Collections | Debt collection calls |
| Healthcare | HIPAA-compliant medical calls |
| Financial Services | Regulated financial conversations |
| Blank | Custom setup from scratch |

Templates come with pre-configured quality checks that you can customize.

### Step 3: Review Quality Checks

Review and customize the quality checks from your template. Each check evaluates a specific aspect of the call:

- **Compliance checks**: Did the agent follow required procedures?
- **Quality checks**: How well did the agent handle the conversation?
- **Business intelligence**: What insights can we extract?

You can add, edit, or remove checks. Don't worry — you can always modify these later.

### Step 4: Upload a Test Call

Upload a sample call recording to see TotalView AI in action. Drag and drop an audio file (MP3, WAV, M4A) or click to browse.

The system will:
1. Transcribe the audio (1-3 minutes)
2. Analyze against your quality checks (1-2 minutes)
3. Generate a quality score

### Step 5: Invite Your Team

Add team members by entering their email addresses. They'll receive invitations to join your organization.

> **Tip**: You can skip this step and invite team members later from Settings.

---

## Core Concepts

Understanding these concepts will help you get the most from TotalView AI.

### Organizations

An **organization** is your top-level workspace. It contains:

- All your campaigns
- Your team members
- Organization-wide settings and branding

Most users belong to one organization. Enterprise customers may have multiple organizations (e.g., one per department or client).

> **Learn More**: [Organizations & Teams](./02-organizations-teams.md)

### Campaigns

A **campaign** is a project that groups related calls together. Each campaign has:

- Its own set of quality checks
- Its own calls and agents
- Configurable scoring thresholds
- Optional auto-flagging rules

**Example campaigns:**
- "Q1 2026 Sales Calls"
- "Customer Support - Billing"
- "New Agent Training"

> **Learn More**: [Campaigns](./03-campaigns.md)

### Quality Checks

**Quality checks** are the evaluation criteria that AI uses to analyze calls. Each check has:

| Component | Description |
|-----------|-------------|
| **Name** | What the check evaluates (e.g., "Opening Greeting") |
| **Type** | `compliance`, `quality`, or `business_intel` |
| **Evaluation Prompt** | Instructions for the AI on what to look for |
| **Severity** | `info`, `warning`, or `critical` if the check fails |
| **Weight** | How much this check affects the overall score |

> **Learn More**: [Quality Checks](./04-quality-checks.md)

### Call Recordings

Audio files you upload for analysis. Each call goes through a processing pipeline:

```
Upload → Transcribe → Analyze → Score
```

| Status | Meaning |
|--------|---------|
| PENDING | Uploaded, waiting to process |
| TRANSCRIBING | Converting audio to text |
| ANALYZING | AI evaluating against checks |
| COMPLETED | Ready for review |
| FAILED | Error occurred (can retry) |

> **Learn More**: [Analysis & Scoring](./06-analysis-scoring.md)

### Scores

TotalView AI generates scores at two levels:

- **Check Score**: 0-100 for each individual quality check
- **Overall Score**: Weighted average of all check scores

By default:
- Score ≥ 70 = **Pass**
- Score < 70 = **Fail**

These thresholds are configurable per campaign.

### Agents

**Agents** are profiles for your call center representatives. Creating agent profiles allows you to:

- Track individual performance over time
- Compare agents against each other
- Send coaching scorecards
- Optionally give agents platform access

> **Learn More**: [Agents](./09-agents.md)

---

## Dashboard Overview

The dashboard is your command center for call quality analytics.

[SCREENSHOT: Main dashboard showing stats cards, campaign performance, and recent activity]

### Quick Stats Cards

Four cards at the top summarize your organization:

| Card | Description |
|------|-------------|
| **Total Calls** | All calls across all campaigns |
| **Active Campaigns** | Number of active (not archived) campaigns |
| **Needs Review** | Calls flagged for manual review |
| **Average Score** | Organization-wide average quality score |

### Campaign Performance

Cards showing each campaign with:

- Average quality score (color-coded: green ≥70, yellow 50-69, red <50)
- Completed calls count
- Total calls
- Number of checks configured

Click any campaign card to view that campaign's detail page.

### Recent Activity

A table of the 10 most recent calls showing:

- File name (click to view details)
- Campaign name
- Agent name
- Processing status
- Quality score
- Upload time

---

## Your First 30 Minutes

Follow this quick-start tutorial to get up and running.

### Minutes 1-5: Create Your First Campaign

If you completed onboarding, you already have a campaign. Otherwise:

1. From the dashboard, click **Create Campaign**
2. Enter a descriptive name (e.g., "Sales Calls - January 2026")
3. Add an optional description
4. Choose a template or start blank
5. Click **Create Campaign**

### Minutes 5-15: Set Up Quality Checks

Navigate to your campaign and click **Checks** in the navigation.

If you used a template, review the pre-configured checks. Otherwise, create 3-5 essential checks to start:

| Check Name | Type | Example Prompt |
|------------|------|----------------|
| Opening Greeting | quality | Did the agent introduce themselves and the company within the first 30 seconds? |
| Customer Verification | compliance | Did the agent verify the customer's identity by asking for name and account number? |
| Issue Resolution | quality | Did the agent clearly summarize the customer's issue and provide a resolution? |
| Closing | quality | Did the agent thank the customer and confirm no further questions before ending the call? |

For each check:

1. Click **Add Check**
2. Fill in the name and evaluation prompt
3. Optionally use **Improve with AI** to enhance your prompt
4. Set the check type and severity
5. Click **Create Check**

### Minutes 15-20: Upload Test Calls

1. Go to **Upload** in the sidebar (or campaign navigation)
2. Select your campaign from the dropdown
3. Drag and drop 2-3 test audio files
4. Click **Upload Files**

Supported formats: MP3, WAV, M4A, MP4 (audio track)

### Minutes 20-30: Review Your Results

1. Wait 2-5 minutes for processing to complete
2. On the dashboard, click a call in **Recent Activity**
3. Explore the call detail page:
   - **Transcript**: Full conversation with speaker labels
   - **Check Results**: Pass/fail for each quality check with evidence
   - **AI Summary**: Quick overview of the call
   - **Sentiment**: Customer mood analysis

4. Play the audio and follow along with the transcript

---

## Navigation

### Sidebar Menu

| Menu Item | Description |
|-----------|-------------|
| **Dashboard** | Overview with stats and recent activity |
| **Campaigns** | List of all your campaigns |
| **Upload** | Upload new call recordings |
| **Review Queue** | Calls flagged for review |
| **Agents** | Agent profiles and performance |
| **AI Copilot** | Natural language analytics assistant |
| **Settings** | Organization and personal settings |

### Campaign Navigation

When viewing a campaign, a secondary navigation appears:

| Tab | Description |
|-----|-------------|
| **Overview** | Campaign stats and performance |
| **Calls** | All calls in this campaign |
| **Checks** | Quality checks configuration |
| **Agents** | Agents assigned to this campaign |
| **Reports** | AI-generated reports |
| **Settings** | Campaign-specific settings |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Open AI Copilot |
| `⌘/` / `Ctrl+/` | View keyboard shortcuts |

---

## FAQ

### How long does processing take?

| File Length | Transcription | Analysis | Total |
|-------------|---------------|----------|-------|
| < 5 minutes | ~1 minute | ~1 minute | 2-3 minutes |
| 5-15 minutes | ~2 minutes | ~1 minute | 3-4 minutes |
| 15-30 minutes | ~3 minutes | ~2 minutes | 5-6 minutes |

Processing time can vary based on system load.

### What happens when I first create an account?

TotalView AI automatically:
1. Creates a new organization with you as Admin
2. Guides you through the onboarding wizard
3. Sets up your first campaign with quality checks
4. Prompts you to upload a test call

### Can I use TotalView AI on mobile?

TotalView AI is optimized for desktop browsers. While the interface is responsive, we recommend using a laptop or desktop for the best experience, especially when reviewing calls.

### What if my invite link expired?

Invite links expire after 7 days. Ask your organization admin to resend the invitation from **Settings → Members**.

### Where can I get help?

- **This Knowledge Base**: Comprehensive documentation
- **AI Copilot**: Ask questions in natural language ([Learn more](./13-ai-copilot.md))
- **Troubleshooting Guide**: Common issues and solutions ([View guide](./15-troubleshooting.md))
- **Support**: Contact your organization admin or TotalView support

---

## Next Steps

Now that you understand the basics:

1. **Invite Your Team** → [Organizations & Teams](./02-organizations-teams.md)
2. **Create More Campaigns** → [Campaigns](./03-campaigns.md)
3. **Master Quality Checks** → [Quality Checks](./04-quality-checks.md)
4. **Set Up Agents** → [Agents](./09-agents.md)
5. **Explore AI Copilot** → [AI Copilot](./13-ai-copilot.md)
