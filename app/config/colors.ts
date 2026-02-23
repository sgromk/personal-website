/**
 * Portfolio Color Scheme Configuration
 * 
 * 🎨 SINGLE SOURCE OF TRUTH for all website colors
 * 
 * HOW TO CHANGE THE COLOR SCHEME:
 * 1. Modify any color value below (e.g., change blue.500 from #3b82f6 to #ef4444)
 * 2. Save this file - changes apply immediately via hot reload
 * 3. All 100+ color references across the site update automatically
 * 
 * SYSTEM ARCHITECTURE:
 * colors.ts → app/globals.css (--portfolio-* CSS vars) → Tailwind classes
 * 
 * When you use bg-zinc-900 or text-blue-400 in components, Tailwind 
 * automatically references the custom values defined here.
 */

export const colors = {
  // Primary Background
  background: {
    main: '#0d1117',      // Main page background
  },

  // Blue Accent Colors
  blue: {
    400: '#60a5fa',       // Lighter blue for text/hover states
    500: '#3b82f6',       // Primary blue for accents/links
    600: '#2563eb',       // Darker blue for buttons/hover
    700: '#1d4ed8',       // Darkest blue
    '500-30': '#3b82f64d', // Blue with 30% opacity (for logo background)
  },

  // Zinc Grayscale
  zinc: {
    100: '#f4f4f5',       // Lightest gray - primary text
    200: '#e4e4e7',       // Very light gray - headings
    300: '#d4d4d8',       // Light gray - hover states
    400: '#a1a1aa',       // Medium-light gray - body text
    500: '#71717a',       // Medium gray - muted text/icons
    600: '#52525b',       // Medium-dark gray - disabled text
    700: '#3f3f46',       // Dark gray - borders/dividers
    800: '#27272a',       // Darker gray - cards/sections
    900: '#18181b',       // Darkest gray - deep backgrounds
    '900-50': '#18181b80', // Zinc-900 with 50% opacity
    '900-70': '#18181bb3', // Zinc-900 with 70% opacity
  },
} as const;

/**
 * CSS Variable Names
 * 
 * These map to the CSS custom properties defined in globals.css.
 * Use these when you need to reference colors in className strings.
 */
export const cssVars = {
  background: {
    main: 'var(--portfolio-bg-main)',
  },
  blue: {
    400: 'var(--portfolio-blue-400)',
    500: 'var(--portfolio-blue-500)',
    600: 'var(--portfolio-blue-600)',
    700: 'var(--portfolio-blue-700)',
    '500-30': 'var(--portfolio-blue-500-30)',
  },
  zinc: {
    100: 'var(--portfolio-zinc-100)',
    200: 'var(--portfolio-zinc-200)',
    300: 'var(--portfolio-zinc-300)',
    400: 'var(--portfolio-zinc-400)',
    500: 'var(--portfolio-zinc-500)',
    600: 'var(--portfolio-zinc-600)',
    700: 'var(--portfolio-zinc-700)',
    800: 'var(--portfolio-zinc-800)',
    900: 'var(--portfolio-zinc-900)',
    '900-50': 'var(--portfolio-zinc-900-50)',
    '900-70': 'var(--portfolio-zinc-900-70)',
  },
} as const;

/**
 * 🧪 TESTING DIFFERENT COLOR SCHEMES
 * 
 * To test a new theme, try these example changes:
 * 
 * Purple Theme:
 *   blue.500: '#8b5cf6'  (purple)
 *   blue.400: '#a78bfa'  (light purple)
 *   blue.600: '#7c3aed'  (dark purple)
 * 
 * Green Theme:
 *   blue.500: '#10b981'  (emerald green)
 *   blue.400: '#34d399'  (light green)
 *   blue.600: '#059669'  (dark green)
 * 
 * Warmer Dark Background:
 *   background.main: '#1a1614'  (warm dark)
 *   zinc.900: '#2c2826'          (warm gray)
 * 
 * After changing colors above, save and check:
 * ✓ Section dividers (horizontal lines)
 * ✓ Card hover effects
 * ✓ Text colors across Hero, Projects, Experience sections
 * ✓ Scrollbar in Recent Activities
 */

export default colors;
