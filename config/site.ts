/**
 * TotalView Knowledge Base Configuration
 */

export const siteConfig = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SITE IDENTITY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  name: "TotalView",
  title: "TotalView Knowledge Base",
  titleTemplate: "%s | TotalView Docs",
  description: "User guides and documentation for TotalView — the AI-powered Call Quality Assurance platform.",
  keywords: ["totalview", "call qa", "quality assurance", "call center", "ai analysis", "coaching", "compliance", "knowledge base"],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LOGO CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  logo: {
    light: "/totalview-logo.svg",
    dark: "/totalview-logo-dark.svg",
    alt: "TotalView Logo",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // THEME CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  theme: {
    default: "light" as const,
    storageKey: "totalview-docs-theme",
    enableSystem: false,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NAVIGATION CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  navigation: {
    homeSlug: "getting-started",
    sidebarLabel: "Documentation",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SIDEBAR CATEGORY CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  sidebar: {
    categories: [
      { name: "Getting Started", orderRange: [1, 2] as const },
      { name: "Core Features", orderRange: [3, 7] as const },
      { name: "Team & Coaching", orderRange: [8, 10] as const },
      { name: "Analytics & Admin", orderRange: [11, 12] as const },
      { name: "Reference", orderRange: [13, 20] as const },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
