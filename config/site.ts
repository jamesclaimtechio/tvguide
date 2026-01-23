/**
 * 🎨 CENTRAL SITE CONFIGURATION
 * 
 * This is the main configuration hub for your documentation site.
 * The AI assistant will help you customize these values for your project.
 * 
 * ⚠️ IMPORTANT: Replace all "TODO:" values with your actual content
 */

export const siteConfig = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SITE IDENTITY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  /**
   * Site/product name (used in header and meta tags)
   */
  name: "TotalView AI",
  
  /**
   * Main title for the documentation site
   * This appears in the browser tab and meta tags
   */
  title: "TotalView AI Documentation",
  
  /**
   * Template for page titles
   * %s will be replaced with the page title
   */
  titleTemplate: "%s | TotalView AI",
  
  /**
   * Short description of your documentation (for SEO)
   */
  description: "Comprehensive guides for the TotalView AI call center quality assurance platform",
  
  /**
   * Keywords for SEO (helps search engines understand your content)
   */
  keywords: ["call center", "quality assurance", "QA", "AI", "transcription", "analytics", "agent coaching"],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LOGO CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  logo: {
    /**
     * Logo for light mode (dark text on light background)
     */
    light: "/totalview-logo-light.svg",
    
    /**
     * Logo for dark mode (white text on dark background)
     */
    dark: "/totalview-logo-dark.svg",
    
    /**
     * Alt text for logo (accessibility)
     */
    alt: "TotalView AI Logo",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // THEME CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  theme: {
    /**
     * Default theme when user first visits
     * Options: "light" or "dark"
     */
    default: "light" as const,
    
    /**
     * Local storage key for persisting theme preference
     * You can keep this as-is unless you have multiple apps sharing storage
     */
    storageKey: "docs-theme",
    
    /**
     * Enable system theme preference detection
     * When true, uses user's OS theme preference by default
     */
    enableSystem: false,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NAVIGATION CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  navigation: {
    /**
     * TODO: The slug of the page to show when visiting the root (/)
     * This should match the "slug" field in one of your markdown files
     * Example: "introduction" or "welcome"
     */
    homeSlug: "getting-started",
    
    /**
     * Label for the sidebar section
     * Usually "Documentation", "Docs", or "Guides"
     */
    sidebarLabel: "Docs",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SIDEBAR CATEGORY CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  /**
   * Documents are grouped into categories based on their "order" value
   * 
   * TotalView AI Documentation Structure:
   * - Getting Started (1-10): Introduction, core concepts
   * - Core Features (11-30): Organizations, campaigns, quality checks, uploads
   * - Analysis & Review (31-50): Scoring, reviewing calls, review queue
   * - Team Management (51-70): Agents, scorecards, coaching
   * - Advanced Features (71-90): Reports, keywords, AI copilot
   * - Reference (91-100): API, troubleshooting
   */
  sidebar: {
    categories: [
      { name: "Getting Started", orderRange: [1, 10] as const },
      { name: "Core Features", orderRange: [11, 30] as const },
      { name: "Analysis & Review", orderRange: [31, 50] as const },
      { name: "Team Management", orderRange: [51, 70] as const },
      { name: "Advanced Features", orderRange: [71, 90] as const },
      { name: "Reference", orderRange: [91, 100] as const },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
