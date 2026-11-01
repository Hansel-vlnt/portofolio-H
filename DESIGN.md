# DESIGN.md: Daylight Intelligence (Frutiger Aero x AI Engineering)

## Identity & Character
- **Owner:** Hansel Valent Evanthe (`@Hansel-vlnt`), AI Engineer at Universitas Negeri Medan (UNIMED).
- **Visual Language:** Web 2.0 Optical Gloss & Frutiger Aero (2006 to 2011 Daylight Techno-Naturalism), translated into crisp 2D vector light physics without 3D WebGL overhead.
- **Core Philosophy:** Optimistic human-nature-machine harmony with disciplined engineering brevity. Intelligent systems are framed through sunlit skies, optical glass bevels, crisp acrylic plates, water refraction, and botanical horizon lines, aligned to a clean `max-w-5xl` spine.
- **Design Read:** Personal AI Engineering Portfolio Landing Page for technical recruiters, AI leads, and engineering peers, in a CARI-inspired Frutiger Aero / Web 2.0 Optical Gloss style, dial `ENERGY 3 / RHYTHM 3 / MOTION 3`.

## Liveliness Dials
- `Dial: ENERGY 3 / RHYTHM 3 / MOTION 3`
- **ENERGY 3 (Bold Artistic Presence):** Sweeping SVG aurora silk ribbons, 2D optical water orbs, bespoke Frutiger Aero vector system illustrations per AI project, split-horizon specular Aqua/Eco chrome, and a botanical horizon panorama at the footer.
- **RHYTHM 3 (Varied Asymmetric Compositions):** Every section uses a distinct architectural form tailored to its content:
  1. Docked Edge-to-Edge Aqua Glass Top Bar (`.aero-dock-header` with scroll-linked sheen and ambient motion pause toggle).
  2. Asymmetric 7/5 Daylight Sculpture Hero + Single-Surface `profile.aero` Bezel.
  3. Alternating 6/6 Split Showcase Plates (`Bludai` & `ag-mcp-local-llm`) paired with a 2-Column Computer Vision Gallery (`mata-mata` & `face-recog-Huggingface`) and native `<dialog>` technical notes.
  4. 3-Row Specification Ledger (`TechStack` styled after classic Aqua system sheets).
  5. Frutiger Eco Botanical Horizon & Direct GitHub/Clipboard Callout.
- **MOTION 3 (Ambient Frutiger Aero Choreography):** Full-viewport GPU-composited undulating aurora silk ribbons, rising effervescent Aqua water bubbles, gentle footer water-band ripples, scroll-linked depth glide, smooth inertia scrolling via Lenis, and an explicit `Jeda Latar / Putar Latar` pause control alongside `prefers-reduced-motion` opt-in.

## Color System (3 Core + 1 Deliberate Accent, WCAG AA Verified)
1. **Core 1 - Aero Cobalt & Sky Chrome:**
   - Deep Cobalt Ink/Chrome: `#035388` / `#0768A6` (Contrast with `#FFFFFF` >= `5.93:1`)
   - Sky Horizon Tint: `#BAE6FD` to `#E6F4FE`
2. **Core 2 - Daylight Pearl Base:**
   - Pure Acrylic Surface: `#FFFFFF`
   - Ice Canvas Base: `#F2F9FF`
3. **Core 3 - Deep Aero Slate (Typography):**
   - Primary Ink: `#091E36` (`16.79:1` on `#FFFFFF`, `14.98:1` on `#E6F4FE`)
   - Secondary Ink: `#23415F` (`9.40:1` on `#E6F4FE`)
4. **Deliberate Accent (1) - Frutiger Eco Botanical Emerald:**
   - Reserved exclusively for the Primary Action Gel CTA, active optical fiber accents, and Eco horizon meadow (`#157A3C` mid-crown to `#116932` base; contrast with `#FFFFFF` >= `5.41:1`).

## Typography & Written Reasons
- **Display & Interface Sans:** `'Plus Jakarta Sans', 'Segoe UI', Frutiger, Calibri, sans-serif`
  - *Reason:* Captures the open humanist geometry of Adrian Frutiger's typefaces and Windows Aero's `Segoe UI` while delivering crisp editorial weight at display sizes.
- **Technical Specification Mono:** `'JetBrains Mono', Consolas, monospace`
  - *Reason:* Used strictly for repository paths, Python/MCP package specs, and technical categories to separate machine metadata from concise human prose.

## Material Dose Caps & Hierarchy Rules
- **Backdrop Blur Cap (Max 2 Elements):** Applied only to `.aero-dock-header` and `.aero-hero-bezel` to preserve foreground hierarchy and 60fps scroll performance. All other panels use opaque layered acrylic gradients.
- **Glow Cap (Max 2 Focal Accents):** Reserved for the Hero optical water-orb caustic aura and the Primary Eco Gel CTA shadow.
- **Border Radius Scale:**
  - `18px` outer / `12px` inner inset: Hero Showcase Bezel
  - `14px` / `16px`: Acrylic Content Plates & Dialogs
  - `10px`: Illustrated Art Stages
  - `9999px`: Tactile Web 2.0 Gel Action Buttons
  - `6px`: Read-Only Technical Spec Chips
