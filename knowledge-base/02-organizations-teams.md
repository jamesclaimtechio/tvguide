# Organizations & Teams

## What is an Organization?

An **organization** is your workspace in TotalView AI. It's the top-level container that holds everything: campaigns, calls, agents, team members, and settings.

Think of an organization like a company account. Everyone in your organization shares access to the same data, with permissions controlled by roles.

**Key characteristics:**

- Each organization is completely isolated from others
- Data never crosses organization boundaries
- Users can belong to multiple organizations (switching between them)
- Organizations can have custom branding (logo, colors)

---

## Understanding Roles

TotalView AI uses a simple two-role system within organizations.

### Role Comparison

| Permission | Admin | Member |
|------------|:-----:|:------:|
| View all campaigns and calls | ✓ | ✓ |
| Upload calls | ✓ | ✓ |
| Create and edit campaigns | ✓ | ✓ |
| Create and edit quality checks | ✓ | ✓ |
| Review flagged calls | ✓ | ✓ |
| Manage agents | ✓ | ✓ |
| Use AI Copilot | ✓ | ✓ |
| Generate reports | ✓ | ✓ |
| **Invite team members** | ✓ | ✗ |
| **Remove team members** | ✓ | ✗ |
| **Change member roles** | ✓ | ✗ |
| **Edit organization settings** | ✓ | ✗ |
| **Configure branding** | ✓ | ✗ |
| **Archive organization** | ✓ | ✗ |

### Admin

Admins have full access to everything in the organization, including:

- All data and features that Members have
- Member management (invite, remove, change roles)
- Organization settings (name, branding)
- Data management and privacy settings

The user who creates an organization automatically becomes its first Admin.

### Member

Members have full access to data and features but cannot manage the organization itself:

- Upload and analyze calls
- Create and configure campaigns
- Review calls and manage the review queue
- Use AI Copilot for analytics
- Manage agent profiles

Members cannot invite or remove team members, change roles, or modify organization settings.

---

## Viewing Team Members

To see who's in your organization:

1. Click **Settings** in the sidebar
2. Select **Members** from the settings navigation

[SCREENSHOT: Members list showing name, email, role, and actions]

The members list shows:

| Column | Description |
|--------|-------------|
| Name | Member's display name |
| Email | Email address |
| Role | Admin or Member |
| Joined | When they joined the organization |
| Actions | Role change, remove (Admin only) |

---

## Inviting Members

> **Note**: Only Admins can invite new members.

### Sending an Invitation

1. Go to **Settings → Members**
2. Click **Invite Member**
3. Enter the person's email address
4. Select their role (Admin or Member)
5. Click **Send Invite**

[SCREENSHOT: Invite member dialog with email and role fields]

The invitee receives an email with a link to join your organization. The link expires after **7 days**.

### Pending Invites

Pending invitations appear in a separate section on the Members page. For each pending invite, you can:

- **Resend**: Send the invitation email again
- **Cancel**: Revoke the invitation

### What the Invitee Sees

When someone receives an invitation:

1. They get an email with an invitation link
2. Clicking the link takes them to TotalView AI
3. If they don't have an account, they create one
4. If they already have an account, they sign in
5. They're automatically added to your organization

### Invite Expiration

Invitations expire after 7 days for security. If an invite expires:

1. Go to **Settings → Members**
2. Find the expired invite in the Pending section
3. Click **Resend** to send a fresh invitation

---

## Changing Member Roles

> **Note**: Only Admins can change roles.

To change a member's role:

1. Go to **Settings → Members**
2. Find the member in the list
3. Click the role dropdown next to their name
4. Select the new role (Admin or Member)

The change takes effect immediately.

> **Warning**: Be careful when demoting Admins. Ensure at least one Admin remains to manage the organization.

---

## Removing Members

> **Note**: Only Admins can remove members.

To remove a member from your organization:

1. Go to **Settings → Members**
2. Find the member in the list
3. Click the **Remove** button (trash icon)
4. Confirm the removal

### What Happens When You Remove a Member

- They lose access to the organization immediately
- Their session is invalidated
- Data they created (campaigns, checks, notes) remains
- They can be re-invited later if needed

> **Tip**: If someone leaves your company, remove them promptly to maintain security.

---

## Switching Organizations

If you belong to multiple organizations, you can switch between them:

1. Click the organization name in the top-left corner
2. A dropdown shows all your organizations
3. Click the organization you want to switch to

[SCREENSHOT: Organization switcher dropdown]

Each organization is completely separate — you'll see different campaigns, calls, and members.

---

## Organization Settings

> **Note**: Only Admins can modify organization settings.

Access settings via **Settings** in the sidebar.

### General Settings

| Setting | Description |
|---------|-------------|
| Organization Name | Display name shown throughout the app |
| Support Email | Contact email for your team |

### Branding

Customize the look of TotalView AI for your organization:

| Setting | Description |
|---------|-------------|
| Logo | Your organization's logo (displayed in header) |
| Favicon | Browser tab icon |
| Primary Color | Main accent color for buttons and links |

[SCREENSHOT: Branding settings with logo upload and color picker]

### Data & Privacy

Control how your data is handled:

| Setting | Description |
|---------|-------------|
| Data Export | Download all organization data |
| Data Deletion | Request complete data removal |

> **Warning**: Data deletion is permanent and cannot be undone.

---

## Creating Additional Organizations

In some cases, you may need multiple organizations:

- Different departments with separate data
- Multiple clients (for agencies)
- Testing vs. production environments

To create a new organization:

1. Click the organization switcher (top-left)
2. Click **Create Organization**
3. Enter the new organization name
4. Complete the setup wizard

You'll be the Admin of the new organization. You can then invite team members as needed.

---

## Agents vs. Users

It's important to understand the difference between **team members** (users) and **agents**:

| Concept | Description |
|---------|-------------|
| **Team Members** | People who use TotalView AI to manage QA (Admins and Members) |
| **Agents** | Call center representatives whose calls are being analyzed |

Agents are typically **not** users of the platform. They're profiles used to track performance. However, you can optionally invite agents to access a limited view of their own data.

> **Learn More**: [Agents](./09-agents.md) for details on agent management and platform access.

---

## FAQ

### Can someone be in multiple organizations?

Yes. A single email address can belong to multiple organizations. Use the organization switcher to move between them. Each organization's data is completely separate.

### What happens if I'm the only Admin and I leave?

If the last Admin leaves, Members cannot manage the organization (invite users, change settings). Before leaving, promote at least one Member to Admin.

### Can I transfer ownership of an organization?

There's no specific "owner" — just Admins. To transfer control:
1. Make the new person an Admin
2. Have them remove your Admin access (or demote you to Member)

### What happens to a removed member's data?

Data they created remains in the organization:
- Campaigns they created
- Calls they uploaded
- Notes they added
- Reports they generated

Only their access is revoked, not their contributions.

### Can I rename my organization?

Yes. Go to **Settings → General** and update the organization name. This change is visible immediately throughout the app.

### How do I delete an organization?

Contact TotalView AI support for organization deletion. This is not self-service due to the permanent nature of the action. All data (campaigns, calls, members) will be permanently removed.

---

## Related Documentation

- [Getting Started](./01-getting-started.md) - First login and setup
- [Campaigns](./03-campaigns.md) - Creating and managing campaigns
- [Agents](./09-agents.md) - Agent profiles and platform access
- [Troubleshooting](./15-troubleshooting.md) - Account access issues
