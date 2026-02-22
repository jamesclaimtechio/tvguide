---
title: "Glossary"
description: "Quick-reference definitions for every key term in the platform"
slug: "glossary"
order: 13
---

## A

### Agent
A call center operative whose calls are evaluated by TotalView. Agent profiles exist independently of user accounts — you can track performance without giving the agent platform access. When linked to a user account, agents get a self-service dashboard.
See: [Agents](/agents)

### Agent Code
A unique identifier for an agent within an organization (e.g., an employee ID). Used for agent matching during call ingestion.
See: [Agents](/agents#creating-an-agent)

### Agent Dashboard
The personalized view agents see when they sign in. Shows personal performance stats, pending scorecards, coaching packs, and goals.
See: [Agents — Agent Dashboard](/agents#agent-dashboard)

### Agent Flag Rule
A custom flagging rule applied to a specific agent. For example, "flag all calls from this agent scoring below 60%." Configured in campaign settings.
See: [Campaigns — Flagging Rules](/campaigns#flagging-rules)

### Agent Linking
The process of connecting an agent profile to a user account, enabling the agent to access the platform and see their own dashboard.
See: [Agents — Inviting Agents](/agents#inviting-agents-to-the-platform)

### Agent Portal
A separate login page for agents. Agents use this instead of the main login page.
See: [Getting Started — Signing In](/getting-started#signing-in)

### AI Copilot
An in-app AI assistant (also called Scout) that answers natural-language questions about your call data. Access via Cmd+K or the sidebar button.
See: [Reports, Segments & AI Copilot — AI Copilot](/reports-segments-copilot#ai-copilot)

### Attention Cards
Dashboard cards highlighting the campaigns and agents that deserve focus — best/worst performing, most improved, and at-risk.
See: [Dashboard — Attention Cards](/dashboard#attention-cards)

### Audit Log
A record of all significant user actions in the organization, maintained for compliance and security.
See: [Organization Settings — Audit Log](/org-settings#audit-log)

---

## B

### Bulk Job
An asynchronous batch operation (upload, transcribe, or analyze) applied to multiple calls. Statuses: Queued, Processing, Completed, Failed, Cancelled.
See: [Uploading Calls — Bulk Upload](/uploading-calls#bulk-upload)

### Bulk Upload
Uploading multiple call recordings at once for batch processing.
See: [Uploading Calls — Bulk Upload](/uploading-calls#bulk-upload)

---

## C

### Call Recording
An audio file of a phone call uploaded to TotalView for analysis. Each call is associated with one campaign and optionally linked to an agent.
See: [Uploading Calls](/uploading-calls)

### Call Status
The current processing state of a call: Pending, Transcribing, Analyzing, Completed, or Failed.
See: [Uploading Calls — Call Statuses](/uploading-calls#call-statuses)

### Campaign
The central organizing unit in TotalView. A campaign groups calls with shared quality checks, scoring rules, team access, and configuration. Think of it as a QA program.
See: [Campaigns](/campaigns)

### Campaign Member
A user explicitly granted access to a specific campaign. Managers and agents need campaign membership to view its data.
See: [Campaigns — Campaign Members](/campaigns#campaign-members)

### Category (Check Category)
A grouping label for quality checks within a campaign (e.g., "Compliance," "Sales Quality"). Used for organizing check results on the call detail page.
See: [Quality Checks — Check Categories](/quality-checks#check-categories)

### Check Result
The outcome of a quality check on a specific call: Pass, Fail, or N/A. Includes the AI's reasoning.
See: [Quality Checks — Understanding Check Results](/quality-checks#understanding-check-results)

### Coaching Bundle
A curated package of calls, notes, and goals sent to an agent for development. Part of the coaching pipeline.
See: [Coaching Pipeline — Creating a Coaching Bundle](/coaching#creating-a-coaching-bundle)

### Coaching Pack
See: [Coaching Bundle](#coaching-bundle). The terms are used interchangeably in the platform.

### Completion Rate
The percentage of uploaded calls that successfully completed the full analysis pipeline (transcription + AI evaluation).
See: [Dashboard — KPI Cards](/dashboard#kpi-cards)

### Compliance Officer
Organization role (tier 3). Can view all campaigns and review all calls. Focused on compliance oversight.
See: [Organization Settings — Role Hierarchy](/org-settings#role-hierarchy)

### Critical Check
A quality check with Critical severity. When a critical check fails, the call may be automatically flagged for review.
See: [Quality Checks](/quality-checks)

### Custom Report
An AI-generated report based on a natural-language prompt you provide, analyzing call data for specific patterns or insights.
See: [Reports, Segments & AI Copilot — Generating a Report](/reports-segments-copilot#generating-a-report)

---

## D

### Dismiss
A review action indicating a flagged call doesn't require further attention. Removes the call from the review queue.
See: [Review Queue — Review Dispositions](/review-queue#review-dispositions)

### Dual Channel
Audio recording mode where each speaker (agent, customer) is on a separate channel. Produces better speaker identification.
See: [Campaigns — Audio Configuration](/campaigns#audio-configuration)

---

## E

### Escalation
The process of raising a call issue to a higher authority — either to the agent for response or to senior managers for attention.
See: [Review Queue — Escalated Issues](/review-queue#escalated-issues)

### Evaluation Prompt
The natural-language instruction used by the AI to evaluate a quality check. This is the core of each check definition.
See: [Quality Checks — Writing Effective Prompts](/quality-checks#writing-effective-prompts)

---

## F

### Flagging
The automatic or manual process of marking calls for human review. Calls can be flagged by score thresholds, critical check failures, agent rules, or manual action.
See: [Campaigns — Flagging Rules](/campaigns#flagging-rules)

---

## G

### Goal
A measurable performance target set for an agent, typically within a coaching bundle. Types include Overall Score, Check Pass Rate, Calls Completed, Training Completed, and Scorecard Average.
See: [Coaching Pipeline — Performance Goals](/coaching#performance-goals)

---

## I

### Inline Review
A quick review mode in the review queue where you can examine check results in a side panel without navigating to the full call detail page.
See: [Review Queue — Inline Review](/review-queue#inline-review)

---

## M

### Magic Link
A passwordless authentication method. TotalView sends you a time-limited link via email to sign in without a password.
See: [Getting Started — Signing In](/getting-started#signing-in)

### Manager
Organization role (tier 2). Can view assigned campaigns, upload and review calls, create coaching bundles, and send scorecards.
See: [Organization Settings — Role Hierarchy](/org-settings#role-hierarchy)

---

## N

### Notification Rule
A campaign-level configuration that triggers alerts when specific events occur (e.g., call flagged, analysis complete). Recipients are defined by user or role.
See: [Campaigns — Notification Rules](/campaigns#notification-rules)

---

## O

### Onboarding Wizard
A multi-step setup process for new organizations, guiding you through creating your organization and first campaign.
See: [Getting Started — The Onboarding Wizard](/getting-started#the-onboarding-wizard)

### Organization
Your company workspace in TotalView. All campaigns, agents, users, and data are scoped to an organization. Each organization is completely isolated from others.
See: [Getting Started](/getting-started), [Organization Settings](/org-settings)

### Owner
Organization role (tier 5). Full control over the organization including settings, member management, and archiving.
See: [Organization Settings — Role Hierarchy](/org-settings#role-hierarchy)

---

## P

### Pass with Training
A review disposition indicating the check failure is real but should be addressed through coaching rather than discipline. Creates a training queue item.
See: [Review Queue — Review Dispositions](/review-queue#review-dispositions)

### Processing Pipeline
The automated sequence every call goes through: Upload → Transcription → AI Analysis → Scoring → Flagging.
See: [Uploading Calls — What is the Processing Pipeline?](/uploading-calls#what-is-the-processing-pipeline)

---

## Q

### Quality Check
A specific evaluation criterion the AI applies to every call in a campaign. Defined by a name, type, evaluation prompt, and severity. Results in Pass, Fail, or N/A.
See: [Quality Checks](/quality-checks)

### Quality Score
The overall score (0-100) calculated from all active check results on a call. Color-coded: green (≥80), amber (≥60), red (<60).
See: [Dashboard — KPI Cards](/dashboard#kpi-cards)

---

## R

### Reseller
Organization role (tier 6). Can create and manage child organizations with white-label branding. Special cross-org permissions.
See: [Organization Settings — Role Hierarchy](/org-settings#role-hierarchy)

### Review Backlog
The count of calls flagged for review that haven't been actioned yet. Shown on the dashboard and campaign detail page.
See: [Dashboard](/dashboard), [Campaigns](/campaigns)

### Review Disposition
The outcome assigned to a check result during review: Pass, Pass with Training, or Fail.
See: [Review Queue — Review Dispositions](/review-queue#review-dispositions)

### Review Queue
A centralized list of all calls flagged for human review. Accessible to Managers and above.
See: [Review Queue & Escalations](/review-queue)

### Review Status
The review state of a call: No Action Needed, Needs Review, Reviewed, or Dismissed.
See: [Reviewing Calls](/call-review)

---

## S

### Scorecard
A structured evaluation form sent to an agent for a specific call. Contains weighted questions (ratings, text, multiple choice, etc.) that produce a scored assessment.
See: [Scorecards](/scorecards)

### Scorecard Template
A reusable set of questions with scoring weights. Templates define the structure; scorecards are instances sent to agents.
See: [Scorecards — Creating a Scorecard Template](/scorecards#creating-a-scorecard-template)

### Scout
See: [AI Copilot](#ai-copilot). The internal name for the TotalView AI assistant.

### Segment
A saved set of call filters for reusable queries. Apply a segment to filter campaign analytics or call lists.
See: [Reports, Segments & AI Copilot — Segments](/reports-segments-copilot#segments)

### Senior Manager
Organization role (tier 4). Can manage users, receive escalations, and configure campaign settings and notifications.
See: [Organization Settings — Role Hierarchy](/org-settings#role-hierarchy)

### Severity
The impact level of a quality check: Info (informational), Warning (moderate), or Critical (high impact, may auto-flag).
See: [Quality Checks](/quality-checks)

### SFTP Ingestion
Automated call recording import via SFTP. Your recording system drops files into an SFTP folder, and TotalView processes them automatically.
See: [Uploading Calls — SFTP Ingestion](/uploading-calls#sftp-ingestion)

### Speaker Diarization
The process of identifying which speaker (agent, customer) said what in a transcript. Improved with dual-channel audio.
See: [Reviewing Calls](/call-review)

### Sparkline
A small inline trend chart showing 6-week history. Used on dashboard KPIs, campaign cards, and agent cards.
See: [Dashboard — KPI Cards](/dashboard#kpi-cards)

---

## T

### Time Period Picker
A control for selecting the date range that scopes dashboard and campaign analytics. Options: This Week, Last Week, This Month, Last Month, Custom.
See: [Dashboard — Time Period Picker](/dashboard#time-period-picker)

### Training Queue
The list of calls and check failures marked "Pass with Training" during review. Entry point for creating coaching bundles.
See: [Coaching Pipeline — Training Queue](/coaching#training-queue)

### Transcription
The process of converting audio to text with speaker identification. TotalView supports AssemblyAI and Deepgram as transcription providers.
See: [Uploading Calls](/uploading-calls)

---

## V

### Version History
A record of all transcriptions and analyses run on a call. Each reprocessing creates a new version while preserving previous results.
See: [Reviewing Calls — Version History](/call-review#version-history)

---

## W

### Weighted Average
The scorecard scoring method that calculates a weighted mean across scored questions. Each question's weight determines its contribution to the final score.
See: [Scorecards — Weighted Scoring](/scorecards#weighted-scoring)

### White-Label
Branding customization for Reseller/Enterprise organizations. Includes custom domain, logo, colors, and email sender name.
See: [Organization Settings — White-Label Branding](/org-settings#white-label-branding)
