## Design Context

### Users
Portfolio visitors are potential clients, collaborators, and hiring managers evaluating Igor's design and development skills. They arrive with intent — scanning for evidence of craft, taste, and competence. They want to quickly understand what Igor does, see the quality of his work, and decide whether to reach out.

### Brand Personality
**Warm, Crafted, Modern.** The voice is confident but approachable — not corporate, not casual. It communicates care and intentionality without being precious. There's a sense that every detail was considered, not generated.

**Emotional goals:** Visitors should feel trust and competence ("this person knows what they're doing"), curiosity and intrigue ("I want to explore more"), and moments of delight and surprise ("this is different and memorable").

### Aesthetic Direction
- **Theme:** Dark mode only. Black backgrounds (#000) with white text and bright yellow (#FFE11B) accents. A subtle background image (`/images/background.webp`) sits behind the page and fades in on load
- **Typography:** Space Grotesk (variable, 300-700) for display and body; Space Mono (400) for technical/label accents. Uppercase transforms on headings and labels
- **Palette:** High-contrast monochromatic base with a single vibrant accent color (yellow). White overlays at 21% (borders) and 50% (muted text) provide depth and hierarchy. A translucent charcoal `rgba(46, 46, 46, 0.5)` is used for button surfaces
- **Spacing:** 8px-based scale with half/quarter steps as needed (2, 4, 8, 12, 16, 20, 24, 40, 48). Container padding is 48px vertical; sections and hero are padded 24px; gaps typically 8/16/20px
- **Borders:** Subtle (white at 21% opacity), 8px and 16px radii. Yellow (#FFE11C) borders on hover/active states
- **Transitions:** 200ms ease is the default on interactive elements; longer 300-400ms ease on transforms (image scale, book cover open effect)
- **Motion:** Page content fades in on load; background image scales down subtly from 1.03 → 1. All motion respects `prefers-reduced-motion`
- **Feel:** Minimalist but warm. Technical precision (monospace accents, grid layouts) balanced with generous whitespace and smooth interactions. Not sterile — crafted

### Design Principles

1. **Craft over flash.** Every detail should feel intentional. Subtle interactions, precise spacing, and considered typography signal quality more than loud effects ever could.

2. **Show, don't tell.** The portfolio itself is the proof of skill. The design quality of the site should match or exceed the work it showcases. Let project work speak through clear presentation.

3. **Warmth through restraint.** A dark, minimal palette doesn't have to feel cold. Generous spacing, smooth transitions, and the occasional yellow accent create warmth without clutter.

4. **Invite exploration.** Guide visitors naturally through the content with clear hierarchy and subtle cues. Reward attention with small moments of delight — a hover effect, a well-placed detail.

5. **Respect the visitor's time.** Clear structure, fast loading, scannable layout. No friction between landing and understanding what Igor does and whether to work with him.
