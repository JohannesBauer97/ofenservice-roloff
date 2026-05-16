# AGENTS.md

## Project Context

This repository contains the static website for Ofenservice Roloff. The site is intended to be hosted with GitHub Pages, so all changes must remain compatible with static hosting and must not require a custom backend, server runtime, build service, or private infrastructure unless explicitly requested.

## Development Principles

- Keep the site deployable through GitHub Pages.
- Optimize every user-facing change for both mobile and desktop.
- Optimize every user-facing change for SEO.
- Prefer simple, static, accessible HTML/CSS/JavaScript over unnecessary tooling.
- Avoid dependencies or build steps unless they provide clear value for this small static site.

## Responsive Design Requirements

Mobile and desktop optimization are mandatory quality gates. Implement them to the highest practical standard for every visual or layout change.

- Test layouts across small mobile, large mobile, tablet, and desktop viewport widths.
- Prevent horizontal scrolling, clipped content, accidental overflow, and visual overlap.
- Use responsive sizing, spacing, and layout primitives rather than fixed desktop-only dimensions.
- Ensure text remains readable and does not collide with illustrations, cards, controls, or viewport edges.
- Treat mobile as a first-class experience, not as a reduced fallback.
- Verify important changes visually before considering the work complete.

## SEO Requirements

SEO optimization is a mandatory quality gate. Implement it to the highest practical standard for every content or page-structure change.

- Use a clear, accurate document title.
- Maintain a useful meta description.
- Use semantic HTML landmarks and a logical heading structure.
- Keep visible content meaningful, concise, and relevant to Ofenservice Roloff.
- Preserve crawlability by avoiding unnecessary client-side rendering for essential content.
- Keep assets lightweight and performant.
- Add structured metadata only when it is accurate and useful.

## GitHub Pages Constraints

- The published site must work as static files.
- Use relative paths unless an absolute URL is required.
- Keep the root `index.html` suitable as the main entry point.
- Preserve the custom domain setup when `CNAME` is present.
- Do not introduce deployment assumptions that conflict with GitHub Pages.

## Definition of Done

Before finishing a change, confirm that:

- The page works from a static GitHub Pages-style environment.
- Mobile and desktop layouts have been checked.
- There is no unintended horizontal scrolling.
- SEO-relevant metadata and semantic structure remain correct.
- Unrelated local changes are left untouched.
