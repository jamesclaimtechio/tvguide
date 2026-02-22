---
title: "Organization Settings"
description: "User management, roles, permissions, branding, and API access"
slug: "org-settings"
order: 12
---

## What are Organization Settings?

Your organization is the top-level workspace in TotalView. Everything — campaigns, agents, calls, and users — lives within it. Organization settings let you configure how the workspace operates and who has access.

Navigate to **Settings** in the sidebar (visible to Owners only).

---

## Organization Profile

### Name and Logo

1. **Open Settings > Organization.**

2. **Update the organization name** — this appears in the navigation, emails, and reports.

3. **Upload a logo** — click the logo uploader to add your company branding. The logo appears in the sidebar and reports.

4. **Click Save** to apply changes.

---

## Inviting Members

Add team members to your organization.

### Step-by-Step

1. **Navigate to the Members section** in settings.

2. **Click Invite Member.**

3. **Enter the email address** of the person you're inviting.

4. **Select their role** (see [Role Hierarchy](#role-hierarchy) below).

5. **Click Send Invite.**

The invitee receives an email with a magic link to join your organization. Once they accept, they appear in the members list with their assigned role.

### Re-Inviting

If you re-invite an existing member with a different role, their role is updated to the new one.

### Removing Members

1. **Find the member** in the members list.
2. **Click Remove** (requires Owner role).
3. Confirm the removal.

Removed members lose access immediately. Their historical actions (reviews, notes, coaching) are preserved.

---

## Role Hierarchy

TotalView uses a 6-tier role hierarchy. Higher roles inherit all permissions of lower roles.

| Level | Role | Description |
|-------|------|-------------|
| 1 | **Agent** | View own calls only. Respond to coaching, complete scorecards, escalate issues. |
| 2 | **Manager** | View assigned campaigns. Upload and review calls. Create coaching, send scorecards. |
| 3 | **Compliance Officer** | View all campaigns. Review all calls. Focused on compliance oversight. |
| 4 | **Senior Manager** | Manage users. Receive escalations. Configure campaign settings and notifications. |
| 5 | **Owner** | Full org control. Manage settings, remove users, archive organization. |
| 6 | **Reseller** | Cross-org management. Create and manage child organizations. White-label branding. |

### Permission Matrix

| Permission | Agent | Manager | Compliance | Senior Mgr | Owner | Reseller |
|------------|-------|---------|------------|------------|-------|----------|
| View own calls | Yes | Yes | Yes | Yes | Yes | Yes |
| View assigned campaigns | — | Yes | Yes | Yes | Yes | Yes |
| Upload calls | — | Yes | Yes | Yes | Yes | Yes |
| Review calls | — | Yes | Yes | Yes | Yes | Yes |
| Flag calls | — | Yes | Yes | Yes | Yes | Yes |
| Manage scorecard templates | — | Yes | Yes | Yes | Yes | Yes |
| Send scorecards | — | Yes | Yes | Yes | Yes | Yes |
| Escalate issues | Yes | Yes | Yes | Yes | Yes | Yes |
| View all campaigns | — | — | Yes | Yes | Yes | Yes |
| Review all calls | — | — | Yes | Yes | Yes | Yes |
| Invite users | — | — | — | Yes | Yes | Yes |
| Manage users | — | — | — | Yes | Yes | Yes |
| Receive escalations | — | — | — | Yes | Yes | Yes |
| Manage notifications | — | — | — | Yes | Yes | Yes |
| Manage campaign settings | — | — | — | Yes | Yes | Yes |
| Manage org settings | — | — | — | — | Yes | Yes |
| Remove users | — | — | — | — | Yes | Yes |
| Archive organization | — | — | — | — | Yes | Yes |
| Create child orgs | — | — | — | — | — | Yes |
| Manage child orgs | — | — | — | — | — | Yes |

### Special Permission: Agent Coaching Response

The **respond to coaching bundle** permission is unique — it belongs to the Agent role only and is not inherited upward. This ensures managers create coaching but only agents respond to it.

### Who Can Assign Roles?

Users can assign roles at or below their own level:
- Owners can assign any role (except Reseller, unless they are a Reseller)
- Senior Managers can assign Agent, Manager, Compliance Officer, and Senior Manager
- Managers and below cannot assign roles

---

## Feature Flags

Toggle experimental or optional features for your organization.

### Coaching Pipeline

- **Toggle**: Enable or disable the coaching pipeline feature
- **Description**: Unified workflow for call review, training queue, and coaching bundles
- When disabled, coaching-related sidebar items and features are hidden

---

## Usage Tracking

Monitor your organization's consumption of AI and transcription services.

### What's Tracked

| Service | What It Measures |
|---------|-----------------|
| **Anthropic (Claude)** | AI analysis tokens used |
| **AssemblyAI** | Transcription minutes |
| **Deepgram** | Transcription minutes |

### Viewing Usage

Navigate to the Usage section to see:
- **By service** — Breakdown per provider
- **By campaign** — Which campaigns consume the most resources
- **Daily trends** — Usage patterns over time

This helps you understand costs and optimize campaign configurations (e.g., switching transcription providers for cost savings).

---

## API Access

Manage API keys for programmatic integration.

### API Keys

API keys allow external systems to upload calls and retrieve data programmatically.

- Keys use a `tv_` prefix for identification
- Keys are hashed for security — the full key is shown only once at creation
- Keys are scoped to campaigns

### Managing Keys

1. **Navigate to the API section** in settings.
2. **Create a new key** — give it a name and select the campaign scope.
3. **Copy the key immediately** — it won't be shown again.
4. **Revoke keys** when they're no longer needed.

See [Uploading Calls — API Upload](/uploading-calls#api-upload) for how to use API keys.

---

## White-Label Branding

For Reseller and Enterprise tier organizations, customize the platform's appearance.

### Available Customizations

| Setting | Description |
|---------|-------------|
| **Custom domain** | Use your own domain (e.g., qa.yourcompany.com) instead of app.total-view.co.uk |
| **Subdomain** | Use a custom subdomain (e.g., yourcompany.app.total-view.co.uk) |
| **Logo** | Replace the TotalView logo with your own |
| **Favicon** | Custom browser tab icon |
| **Primary color** | Change the brand accent color throughout the platform |
| **Email sender name** | Custom "from" name on notification emails |
| **Support email** | Custom support contact in the footer |

White-label settings apply to everyone in the organization — all members see the customized branding.

---

## Data Management

### GDPR Compliance

TotalView provides endpoints for GDPR data management:
- **Data export** — Export all data associated with a user or organization
- **Data deletion** — Delete user data on request

Contact your administrator for GDPR requests.

### Audit Log

All significant user actions are logged for compliance:
- Member additions and role changes
- Organization setting modifications
- Campaign configuration changes
- Data access events

The audit log is accessible to Owners and helps satisfy compliance and security requirements.

---

## Multi-Organization Support

If you belong to multiple organizations, you can switch between them:

1. **Click the organization name** in the sidebar or top navigation.
2. **Select a different organization** from the list.
3. The platform reloads with the selected organization's data.

Each organization is completely isolated — data, users, campaigns, and settings are not shared between organizations.

---

## Troubleshooting

### I can't access settings

**Symptoms:** Settings option is not visible in the sidebar.
**Cause:** Your role doesn't have permission. Only Owners (and Resellers) can access organization settings.
**Solution:** Ask your organization Owner to make changes, or request a role upgrade.

### Invited user didn't receive the email

**Symptoms:** Invitation was sent but the user didn't get it.
**Cause:** Email may be in spam, or the email address has a typo.
**Solution:**
1. Have the invitee check spam/junk folders.
2. Verify the email address is correct in the members list.
3. Resend the invitation.

### API key not working

**Symptoms:** API calls return authentication errors.
**Cause:** Key may be revoked, expired, or used with the wrong campaign.
**Solution:**
1. Verify the key is still active in the API settings.
2. Check that the key matches the campaign you're uploading to.
3. Create a new key if the original is compromised.

---

## FAQ

### Can I have multiple Owners?

Yes. An organization can have multiple users with the Owner role. All Owners have equal permissions.

### What happens when I remove a member?

They lose access immediately. Their historical data (reviews, coaching notes, actions) is preserved and attributed to their account.

### Can I change my organization name?

Yes. Go to Settings > Organization and update the name. The change takes effect immediately across the platform.

### How do I transfer ownership?

Assign the Owner role to the new owner, then (optionally) downgrade your own role. Both users need to be members of the organization.

---

## Role Access

| Action | Agent | Manager | Compliance Officer | Senior Manager | Owner |
|--------|-------|---------|--------------------|----------------|-------|
| View settings | — | — | — | — | Yes |
| Edit org profile | — | — | — | — | Yes |
| Invite members | — | — | — | Yes | Yes |
| Manage user roles | — | — | — | Yes | Yes |
| Remove members | — | — | — | — | Yes |
| View usage | — | — | — | — | Yes |
| Manage API keys | — | — | — | Yes | Yes |
| Toggle feature flags | — | — | — | — | Yes |
| White-label branding | — | — | — | — | Reseller |

---

## Related Documentation

- [Getting Started](/getting-started) — initial organization setup
- [Campaigns](/campaigns) — campaign-level settings and team access
- [Agents](/agents) — inviting agents to the platform
- [Uploading Calls](/uploading-calls) — API keys for programmatic upload
- [Glossary](/glossary) — role and permission definitions
