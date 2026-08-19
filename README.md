# Saksham Learn - Student Dashboard

Saksham Learn is a premium, accessible e-learning platform tailored specifically for the Indian K-10 educational landscape. It balances institutional trust with a warm, encouraging classroom environment to reduce cognitive load and enhance digital literacy.

This repository contains the interactive prototype and design guidelines for the Saksham Learn student dashboard.

---

## 🚀 Key Features

*   **Bilingual Accessibility (EN/HI):** Built-in support for switching between English and Hindi, utilizing the **Plus Jakarta Sans** and **Mukta** fonts for balanced typography.
*   **Offline First design:** A visible offline badge to denote sync status, ensuring usability in low-connectivity regions.
*   **Pulsing Voice Search:** A prominent voice assistant/search bar designed to assist students who prefer speaking over typing.
*   **Progressive Learning Hero:** A dedicated "Continue Learning" section displaying current topic progression (Fractions & Decimals for Grade 8 Math) with a tactile progress bar.
*   **Gamified Streaks:** A daily streak counter (e.g., "5 Day Streak!") to encourage daily engagement.
*   **Bento Grid Navigation:** Visually distinct, asymmetric cards for subject selection:
    *   **Mathematics** (showing pending items)
    *   **Science** (showing current focus)
    *   **English Language** (incorporating rich illustrative media)
*   **Mobile-First Bottom Navigation:** Easy access to Home, Ask Doubt, Practice, Scholarships, and Profile, optimized for touch-target standards (min 48px height).

---

## 🎨 Design System & Aesthetics

Following the guidelines in [DESIGN.md](DESIGN.md), the user interface is optimized for modern mobile devices:

*   **Colors:**
    *   **Primary (Deep Blue):** `#00426d` — Instills trust and reliability.
    *   **Secondary (Warm Amber):** `#8e4e14` / `#ffab69` — Highlighting progress and rewards.
    *   **Background (Off-White):** `#f8f9ff` — Soft base to prevent eye strain during long study sessions.
*   **Tactile Elevation:** Tonal layers with soft shadows that clearly signal interactive zones to first-time smartphone users.
*   **Friendly Shapes:** Pill-shaped search inputs (24px radius) and standard rounded cards (8px-16px radius) to keep the app clean and approachable.

---

## 📁 Repository Structure

*   [code.html](code.html): The core dashboard implementation with responsive Tailwind styling and embedded custom styles.
*   [DESIGN.md](DESIGN.md): Detailed specifications for brand, color palette, typography, layout, spacing, elevation, and component behaviors.
*   [README.md](README.md): This documentation file.

---

## 🛠️ Tech Stack

*   **Core:** HTML5, CSS3, JavaScript
*   **Styling:** Tailwind CSS (loaded via CDN)
*   **Icons & Web Fonts:** Google Material Symbols, Plus Jakarta Sans, Mukta (Devanagari fallback)

---

## 📖 How to Run

Simply open [code.html](code.html) in any modern web browser to view the interactive student dashboard prototype.
