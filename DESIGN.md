---
name: Saksham Learn
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#41474f'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#727780'
  outline-variant: '#c1c7d0'
  surface-tint: '#296292'
  primary: '#00426d'
  on-primary: '#ffffff'
  primary-container: '#1e5a8a'
  on-primary-container: '#a6d0ff'
  inverse-primary: '#9acbff'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#5b3700'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b4c00'
  on-tertiary-container: '#ffc075'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#9acbff'
  on-primary-fixed: '#001d34'
  on-primary-fixed-variant: '#004a79'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#fbba6a'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#663e00'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 20px
  gutter: 16px
  touch-target-min: 48px
  card-padding: 16px
---

## Brand & Style

The design system is built for accessibility and trust, specifically tailored for the Indian K-10 educational landscape. The brand personality is **Encouraging, Reliable, and Accessible**. It balances the formal authority of a government institution with the warmth of a supportive classroom.

The design style is **Modern Professional with Soft-Tactile influences**. It avoids over-abstraction in favor of clear, literal metaphors. By using high-contrast elements, generous whitespace, and friendly rounded shapes, the UI reduces cognitive load for first-time smartphone users and students in low-resource environments. The aesthetic remains "Clean-Corporate" to instill a sense of serious purpose, while using vibrant accents to maintain student engagement.

## Colors

The palette is rooted in the "Deep Blue" of institutional trust, paired with a "Warm Amber" that signifies progress and energy. 

- **Primary (Deep Blue):** Used for navigation, primary actions, and headers to establish authority.
- **Secondary (Warm Amber):** Reserved for highlights, progress indicators, and "aha" moments.
- **Background (Off-White):** A soft, neutral base that reduces eye strain during long study sessions and provides better legibility than pure white.
- **Semantic Colors:** Green and Red are used with high saturation to ensure clarity in status (Pass/Fail, Correct/Incorrect), even on lower-quality mobile displays.
- **Low-Bandwidth Accents:** Subtle gray tones (#E5E7EB) are used to indicate offline or loading states without creating visual clutter.

## Typography

This design system utilizes **Plus Jakarta Sans** as a modern, highly legible substitute for Poppins, offering better clarity at smaller scales. For Hindi implementation, the system must fallback to **Mukta**, ensuring vertical metrics are balanced so that Devanagari script does not appear smaller than English text.

**Rules for Legibility:**
- **Hierarchy:** Use Headline-LG sparingly for page titles. Most instructional text should reside in Body-LG to ensure readability for students with varying visual acuity.
- **Bilingual Support:** When displaying Hindi and English together, increase the line-height of the Hindi text by 10% to accommodate matras (diacritics).
- **Instructional Labels:** All icons must be accompanied by a Label-MD or Label-LG to assist users with lower digital literacy.

## Layout & Spacing

The layout follows a **Mobile-First Fluid Grid** model. Since the primary users are students on a variety of Android devices, the system prioritizes vertical scrolling and clear, full-width touch zones.

- **Grid:** A 4-column fluid grid for mobile, expanding to 8 columns for tablets.
- **Touch Targets:** No interactive element (buttons, links, chips) should be smaller than 48px in height.
- **Safe Zones:** Maintain a 20px margin on the left and right edges of the screen to prevent accidental touches while holding the device.
- **Vertical Rhythm:** Use increments of 8px (8, 16, 24, 32, 40) for all padding and margins to maintain a consistent visual beat.

## Elevation & Depth

This design system uses **Tonal Layers** and **Soft Shadows** to indicate interactivity. Because the audience includes first-time smartphone users, "depth" must clearly signal that something can be pressed.

- **Level 0 (Base):** Off-White background (#F9FAFB).
- **Level 1 (Cards):** White surface with a very soft, diffused shadow (Blur: 8px, Y: 2px, Opacity: 5%). Used for content blocks.
- **Level 2 (Interactive/Buttons):** Saturated Primary Blue or White surfaces with a more pronounced shadow (Blur: 12px, Y: 4px, Opacity: 10%).
- **Interactive States:** When pressed, elements should visually "sink" (remove shadow or add a subtle inner glow) to provide tactile feedback.

## Shapes

The shape language is **Rounded and Friendly**. 

- **Small Components:** Checkboxes and small tags use a 4px (Soft) radius.
- **Standard Components:** Buttons, Input fields, and Cards use an 8px (Rounded) radius.
- **Special Components:** The Voice Input Bar and Search bars use a 24px (Pill-shaped) radius to distinguish them from content cards.

This curvature makes the interface feel safe and approachable, moving away from the harshness of traditional bureaucratic forms.

## Components

### Core Interactions
- **Buttons:** Large, full-width buttons for primary actions. Primary buttons use Deep Blue with white text. Secondary buttons use a thick Deep Blue border with no fill.
- **Adaptive Question Card:** A white card with a subtle border. Correct answers flash Success Green; incorrect ones show Alert Red with an immediate "Review Hint" button.
- **Voice Input Bar:** A fixed or prominent pill-shaped bar with a microphone icon. It uses a pulsing animation when active to guide students who prefer speaking over typing.

### Educational Specialties
- **Citation Block:** A light-blue tinted container with a "Book" icon, used to show references or textbook page numbers.
- **Teacher Risk Flag Card:** Used in the teacher view, these cards use Alert Red for the header to highlight students who are falling behind or need intervention.
- **Scholarship Eligibility Card:** Uses the Secondary Warm Amber color as a background to denote high value and "reward."
- **Offline Badge:** A small, low-contrast gray chip located at the top right of content. It changes to a green "Synced" checkmark when a connection is restored.

### Navigation
- **Student Bottom Nav:** 4 icons (Home, My Classes, Rewards, Profile) with large labels.
- **Teacher Top Tabs:** Segmented controls with high-contrast active states to switch between "Student List," "Assignments," and "Reports."