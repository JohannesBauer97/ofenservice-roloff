# Ofenservice Roloff Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete static "Visitenkarten-Website" for Ofenservice Roloff, deployable on GitHub Pages under ofenservice-roloff.de, with full SEO, Impressum, and Datenschutz pages.

**Architecture:** Plain HTML + CSS, no build pipeline, no frameworks, no external dependencies. Three HTML pages (index, impressum, datenschutz) share a single stylesheet. SEO files (robots.txt, sitemap.xml) complete the set. All assets (portrait.png) are already in the repo root.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), inline SVG icons, Schema.org JSON-LD

---

## File Structure

| File | Purpose |
|------|---------|
| `style.css` | All styles — reset, typography, header, hero, leistungen, kontakt, footer, subpages, responsive |
| `index.html` | Main page: hero with portrait, services, contact section |
| `impressum.html` | Legal notice (Impressum) per §5 TMG |
| `datenschutz.html` | Privacy policy — content sourced verbatim from `datenschutz-erecht24.txt` |
| `robots.txt` | Allow indexing, point to sitemap |
| `sitemap.xml` | All three pages with priorities |

---

## Task 1: Create style.css

**Files:**
- Create: `style.css`

- [ ] **Step 1: Create style.css with complete styles**

```css
/* ── Reset & Base ──────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Arial, sans-serif;
  background-color: #f8f5f0;
  color: #1a1a1a;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Typography ────────────────────────────────────────────── */
h1, h2, h3, h4 {
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1.25;
  color: #1a1a1a;
}

h1 { font-size: clamp(1.75rem, 5vw, 2.5rem); }
h2 { font-size: clamp(1.3rem, 3.5vw, 1.9rem); margin-bottom: 1rem; }
h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
h4 { font-size: 1rem; margin-bottom: 0.4rem; }

p { margin-bottom: 1rem; }
p:last-child { margin-bottom: 0; }

a {
  color: #8b3a3a;
  text-decoration: underline;
}
a:hover,
a:focus {
  color: #6a2c2c;
  text-decoration: none;
  outline: 2px solid #8b3a3a;
  outline-offset: 2px;
}

/* ── Layout ────────────────────────────────────────────────── */
.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

main {
  flex: 1;
}

section {
  padding: 3rem 0;
}

/* ── Header ────────────────────────────────────────────────── */
header {
  background-color: #1a1a1a;
  color: #f8f5f0;
  padding: 1rem 0;
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.site-name {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f8f5f0;
  text-decoration: none;
}

.site-name:hover,
.site-name:focus {
  color: #d4c8b8;
  outline: 2px solid #d4c8b8;
  outline-offset: 2px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

nav a {
  color: #d4c8b8;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
}

nav a:hover,
nav a:focus {
  color: #f8f5f0;
  outline: 2px solid #d4c8b8;
  outline-offset: 2px;
}

nav a[aria-current="page"] {
  color: #f8f5f0;
  text-decoration: underline;
}

/* ── Hero ──────────────────────────────────────────────────── */
#hero {
  background-color: #f8f5f0;
  padding: 3.5rem 0;
}

.hero-inner {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.hero-portrait {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e0d8cc;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}

.hero-text {
  flex: 1;
  min-width: 240px;
}

.hero-text h1 {
  margin-bottom: 0.4rem;
}

.hero-tagline {
  font-size: 1.05rem;
  color: #666;
  margin-bottom: 1rem;
}

.hero-text > p {
  margin-bottom: 1.5rem;
}

.btn-primary {
  display: inline-block;
  background-color: #8b3a3a;
  color: #fff;
  text-decoration: none;
  padding: 0.7rem 1.6rem;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #6a2c2c;
  color: #fff;
  outline: 2px solid #6a2c2c;
  outline-offset: 2px;
}

/* ── Leistungen ─────────────────────────────────────────────── */
#leistungen {
  background-color: #fff;
}

.leistungen-list {
  list-style: none;
  margin: 1.25rem 0 1.5rem;
  padding: 0;
}

.leistungen-list li {
  padding: 0.7rem 0;
  border-bottom: 1px solid #e0d8cc;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
}

.leistungen-list li:last-child {
  border-bottom: none;
}

.leistungen-list li::before {
  content: "▸";
  color: #8b3a3a;
  font-size: 1rem;
  flex-shrink: 0;
}

.leistungen-hinweis {
  font-style: italic;
  color: #555;
  border-left: 3px solid #8b3a3a;
  padding-left: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 0;
}

/* ── Kontakt ─────────────────────────────────────────────────── */
#kontakt {
  background-color: #f8f5f0;
}

.kontakt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.kontakt-card {
  background-color: #fff;
  border: 1px solid #e0d8cc;
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.kontakt-card svg {
  width: 32px;
  height: 32px;
  fill: #8b3a3a;
  margin-bottom: 0.25rem;
}

.kontakt-label {
  display: block;
  font-size: 0.78rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.kontakt-wert {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  word-break: break-all;
}

a.kontakt-wert {
  color: #8b3a3a;
}

a.kontakt-wert:hover,
a.kontakt-wert:focus {
  color: #6a2c2c;
  outline: 2px solid #8b3a3a;
  outline-offset: 2px;
}

.kontakt-placeholder {
  color: #aaa;
  font-style: italic;
  font-weight: normal;
}

/* ── Footer ──────────────────────────────────────────────────── */
footer {
  background-color: #1a1a1a;
  color: #a09488;
  padding: 1.5rem 0;
  font-size: 0.875rem;
}

footer .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 1.75rem;
}

footer a {
  color: #d4c8b8;
  text-decoration: none;
}

footer a:hover,
footer a:focus {
  color: #f8f5f0;
  text-decoration: underline;
  outline: 2px solid #d4c8b8;
  outline-offset: 2px;
}

/* ── Subpages (Impressum, Datenschutz) ───────────────────────── */
.page-content {
  padding: 3rem 0 4rem;
  max-width: 760px;
}

.page-content h1 {
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e0d8cc;
}

.page-content h2 {
  margin-top: 2.25rem;
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
}

.page-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}

.page-content h4 {
  margin-top: 1.25rem;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.page-content p {
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 0.85rem;
}

.page-content ul {
  margin: 0.5rem 0 1rem 1.5rem;
}

.page-content li {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.35rem;
}

.page-content a {
  color: #8b3a3a;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 600px) {
  .hero-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-portrait {
    width: 160px;
    height: 160px;
  }

  .hero-text {
    min-width: unset;
  }

  header .container {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    gap: 0.75rem;
  }

  footer .container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .kontakt-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Commit style.css**

```bash
git add style.css
git commit -m "feat: add base stylesheet for Ofenservice Roloff"
```

---

## Task 2: Create index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ofenservice Roloff – Ofen- und Luftheizungsbauer in Tangermünde</title>
  <meta name="description" content="Ofenservice Roloff in Tangermünde: Reparaturen, Edelstahl-Schornsteinbau, Reinigungsarbeiten, Anschluss und Montage von Öfen. Jetzt Kontakt aufnehmen.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://ofenservice-roloff.de/">

  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ofenservice-roloff.de/">
  <meta property="og:title" content="Ofenservice Roloff – Ofen- und Luftheizungsbauer in Tangermünde">
  <meta property="og:description" content="Ofenservice Roloff in Tangermünde: Reparaturen, Edelstahl-Schornsteinbau, Reinigungsarbeiten, Anschluss und Montage von Öfen.">
  <meta property="og:locale" content="de_DE">
  <meta property="og:image" content="https://ofenservice-roloff.de/portrait.png">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Ofenservice Roloff – Ofen- und Luftheizungsbauer in Tangermünde">
  <meta name="twitter:description" content="Reparaturen, Edelstahl-Schornsteinbau, Reinigungsarbeiten, Anschluss und Montage von Öfen in Tangermünde.">

  <link rel="stylesheet" href="style.css">

  <!-- Schema.org structured data (LocalBusiness) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ofenservice Roloff",
    "description": "Reparaturarbeiten an Öfen und Luftheizungen, Edelstahl-Schornsteinbau, Reinigungsarbeiten, Reinigungsklappen einmauern sowie Anschluss und Montage von Öfen in Tangermünde.",
    "url": "https://ofenservice-roloff.de/",
    "email": "mail@ofenservice-roloff.de",
    "image": "https://ofenservice-roloff.de/portrait.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Goethestr. 50",
      "addressLocality": "Tangermünde",
      "postalCode": "39590",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.5433",
      "longitude": "11.9726"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Sachsen-Anhalt"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Leistungen",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Reparaturarbeiten an Öfen und Luftheizungen"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Edelstahl-Schornsteinbau"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Reinigungsarbeiten"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Reinigungsklappen einmauern"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Anschluss und Montage von Öfen"}}
      ]
    }
  }
  </script>
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="site-name">Ofenservice Roloff</a>
      <nav aria-label="Hauptnavigation">
        <ul>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="/impressum.html">Impressum</a></li>
          <li><a href="/datenschutz.html">Datenschutz</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero" aria-label="Willkommen">
      <div class="container">
        <div class="hero-inner">
          <img
            src="portrait.png"
            alt="Jan Roloff, Inhaber von Ofenservice Roloff"
            class="hero-portrait"
            width="200"
            height="200"
            fetchpriority="high"
          >
          <div class="hero-text">
            <h1>Ofenservice Roloff</h1>
            <p class="hero-tagline">Ofen- und Luftheizungsbauer aus Tangermünde</p>
            <p>Professionelle Reparaturen, Schornsteinbau und Montage von Öfen – persönlich, zuverlässig und aus der Region.</p>
            <a href="#kontakt" class="btn-primary">Jetzt Kontakt aufnehmen</a>
          </div>
        </div>
      </div>
    </section>

    <section id="leistungen" aria-labelledby="leistungen-heading">
      <div class="container">
        <h2 id="leistungen-heading">Leistungen</h2>
        <p>Ofenservice Roloff bietet Reparaturarbeiten an Öfen und Luftheizungen, Edelstahl-Schornsteinbau, Reinigungsarbeiten, das Einmauern von Reinigungsklappen sowie den Anschluss und die Montage von Öfen an.</p>
        <ul class="leistungen-list">
          <li>Reparaturarbeiten an Öfen und Luftheizungen</li>
          <li>Schornsteinbau, insbesondere Edelstahl-Schornsteinbau</li>
          <li>Reinigungsarbeiten</li>
          <li>Reinigungsklappen einmauern</li>
          <li>Anschluss und Montage von Öfen</li>
        </ul>
        <p class="leistungen-hinweis">Ihre gewünschte Leistung ist nicht aufgeführt? Nehmen Sie einfach Kontakt auf und schildern Sie Ihr Anliegen.</p>
      </div>
    </section>

    <section id="kontakt" aria-labelledby="kontakt-heading">
      <div class="container">
        <h2 id="kontakt-heading">Kontakt</h2>
        <p>Sprechen Sie mich direkt an – per Telefon, WhatsApp oder E-Mail.</p>
        <div class="kontakt-grid">
          <div class="kontakt-card">
            <!-- Phone icon -->
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.03l-2.2 2.19z"/>
            </svg>
            <span class="kontakt-label">Telefon</span>
            <span class="kontakt-wert kontakt-placeholder">[Telefonnummer folgt]</span>
          </div>
          <div class="kontakt-card">
            <!-- WhatsApp icon -->
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.526 5.855L.057 23.491a.5.5 0 00.614.596l5.788-1.517A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 01-5.065-1.379l-.363-.215-3.763.987.988-3.671-.236-.375A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            <span class="kontakt-label">WhatsApp</span>
            <span class="kontakt-wert kontakt-placeholder">[WhatsApp-Nummer folgt]</span>
          </div>
          <div class="kontakt-card">
            <!-- Email icon -->
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span class="kontakt-label">E-Mail</span>
            <a href="mailto:mail@ofenservice-roloff.de" class="kontakt-wert">mail@ofenservice-roloff.de</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <span>&copy; 2025 Ofenservice Roloff</span>
      <a href="/impressum.html">Impressum</a>
      <a href="/datenschutz.html">Datenschutz</a>
    </div>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Open index.html in browser and verify**

Open file in browser: `open index.html` (macOS) or drag file into browser.

Expected:
- Dark header with "Ofenservice Roloff" and navigation links
- Hero section: portrait (circular), name, tagline, intro text, red CTA button
- Leistungen section: white background, 5 items with ▸ prefix, italic note at bottom
- Kontakt section: 3 cards (Telefon, WhatsApp, E-Mail) — first two show placeholder text in grey italic, third shows clickable email link
- Dark footer with copyright, Impressum, Datenschutz links
- No errors in browser console

- [ ] **Step 3: Verify mobile layout**

Open browser DevTools → Toggle device toolbar → Set to iPhone SE (375px wide).

Expected:
- Portrait centered above text
- Text left-aligned (centered when portrait is above)
- Nav links wrap to second row under site name
- Contact cards stack vertically

- [ ] **Step 4: Commit index.html**

```bash
git add index.html
git commit -m "feat: add homepage with hero, leistungen and kontakt sections"
```

---

## Task 3: Create impressum.html

**Files:**
- Create: `impressum.html`

- [ ] **Step 1: Create impressum.html**

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Impressum – Ofenservice Roloff</title>
  <meta name="description" content="Impressum von Ofenservice Roloff, Jan Roloff, Tangermünde.">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://ofenservice-roloff.de/impressum.html">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="site-name">Ofenservice Roloff</a>
      <nav aria-label="Hauptnavigation">
        <ul>
          <li><a href="/#leistungen">Leistungen</a></li>
          <li><a href="/#kontakt">Kontakt</a></li>
          <li><a href="/impressum.html" aria-current="page">Impressum</a></li>
          <li><a href="/datenschutz.html">Datenschutz</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="page-content">
        <h1>Impressum</h1>

        <h2>Anbieter</h2>
        <p>
          Ofenservice Roloff<br>
          Jan Roloff<br>
          Goethestr. 50<br>
          39590 Tangermünde<br>
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <span style="color:#aaa;font-style:italic">[Telefonnummer folgt]</span><br>
          E-Mail: <a href="mailto:mail@ofenservice-roloff.de">mail@ofenservice-roloff.de</a>
        </p>

        <h2>Umsatzsteuer</h2>
        <p><span style="color:#aaa;font-style:italic">[Umsatzsteuer-Identifikationsnummer folgt, sofern vorhanden]</span></p>

        <h2>Berufs- und Handwerksbezeichnung</h2>
        <p>
          Berufsbezeichnung: Ofen- und Luftheizungsbauer<br>
          Eingetragenes zulassungspflichtiges Handwerk<br>
          Berufsrechtliche Regelung: Handwerksordnung (HwO)
        </p>

        <h2>Handwerkskammer</h2>
        <p>
          Handwerkskammer Magdeburg<br>
          Gareisstr. 10<br>
          39106 Magdeburg<br>
          Deutschland<br>
          E-Mail: <a href="mailto:info@hwk-magdeburg.de">info@hwk-magdeburg.de</a><br>
          Website: <a href="https://www.hwk-magdeburg.de" target="_blank" rel="noopener noreferrer">www.hwk-magdeburg.de</a>
        </p>

        <h2>Eintragung in die Handwerksrolle</h2>
        <p>
          Eingetragen in die Handwerksrolle der Handwerkskammer Magdeburg<br>
          Betriebs-Nr.: 52714
        </p>

        <h2>Teiltätigkeiten laut Handwerkskarte</h2>
        <p>Reparaturarbeiten, Schornsteinbau (Edelstahl), Reinigungsarbeiten, Reinigungsklappen einmauern, Anschluss und Montage von Öfen</p>
      </div>
    </div>
  </main>

  <footer>
    <div class="container">
      <span>&copy; 2025 Ofenservice Roloff</span>
      <a href="/impressum.html" aria-current="page">Impressum</a>
      <a href="/datenschutz.html">Datenschutz</a>
    </div>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Verify impressum.html in browser**

Open in browser. Expected:
- Same header and footer as index.html
- "Impressum" nav link underlined (aria-current="page")
- All sections present: Anbieter, Kontakt, Umsatzsteuer, Berufsbezeichnung, Handwerkskammer, Eintragung, Teiltätigkeiten
- Phone and Umsatzsteuer show grey italic placeholder text
- Email links are clickable
- HWK website opens in new tab

- [ ] **Step 3: Commit impressum.html**

```bash
git add impressum.html
git commit -m "feat: add impressum page"
```

---

## Task 4: Create datenschutz.html

**Files:**
- Create: `datenschutz.html`
- Reference: `datenschutz-erecht24.txt` (content to embed verbatim)

The `datenschutz-erecht24.txt` file contains complete HTML markup (h1–h4, p, ul, li elements) generated by eRecht24. This content is embedded directly inside `.page-content` — no modification needed.

- [ ] **Step 1: Create datenschutz.html**

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datenschutzerklärung – Ofenservice Roloff</title>
  <meta name="description" content="Datenschutzerklärung von Ofenservice Roloff nach DSGVO.">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://ofenservice-roloff.de/datenschutz.html">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="site-name">Ofenservice Roloff</a>
      <nav aria-label="Hauptnavigation">
        <ul>
          <li><a href="/#leistungen">Leistungen</a></li>
          <li><a href="/#kontakt">Kontakt</a></li>
          <li><a href="/impressum.html">Impressum</a></li>
          <li><a href="/datenschutz.html" aria-current="page">Datenschutz</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="page-content">
        [INSERT FULL CONTENT OF datenschutz-erecht24.txt HERE — copy the file contents verbatim]
      </div>
    </div>
  </main>

  <footer>
    <div class="container">
      <span>&copy; 2025 Ofenservice Roloff</span>
      <a href="/impressum.html">Impressum</a>
      <a href="/datenschutz.html" aria-current="page">Datenschutz</a>
    </div>
  </footer>
</body>
</html>
```

**Important:** Replace the `[INSERT FULL CONTENT...]` placeholder by reading `datenschutz-erecht24.txt` and inserting all its lines verbatim between the `<div class="page-content">` tags. The file starts with `<h1>Datenschutz&shy;erkl&auml;rung</h1>` and ends with the eRecht24 source link.

- [ ] **Step 2: Verify datenschutz.html in browser**

Open in browser. Expected:
- Same header and footer as other pages
- "Datenschutz" nav link underlined
- Full privacy policy text renders correctly: all sections 1–3 visible, proper heading hierarchy (h1→h2→h3→h4)
- No raw HTML entities visible (they should render as proper German characters)
- eRecht24 source link at bottom is clickable

- [ ] **Step 3: Commit datenschutz.html**

```bash
git add datenschutz.html
git commit -m "feat: add datenschutz page with eRecht24 content"
```

---

## Task 5: Create robots.txt and sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create robots.txt**

```
User-agent: *
Allow: /
Disallow: 

Sitemap: https://ofenservice-roloff.de/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ofenservice-roloff.de/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ofenservice-roloff.de/impressum.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://ofenservice-roloff.de/datenschutz.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Commit SEO files**

```bash
git add robots.txt sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml for SEO"
```

---

## Task 6: Final quality check

**Files:** All files (read-only verification)

Run this checklist and fix any issues found before marking complete.

- [ ] **Step 1: Verify no external resources are loaded**

```bash
grep -rn "http[s]\?://" index.html impressum.html datenschutz.html style.css \
  | grep -v "schema.org\|og:url\|canonical\|sitemap\|og:image\|twitter\|application/ld+json\|e-recht24.de\|hwk-magdeburg.de\|ofenservice-roloff.de"
```

Expected: no output. Any match for a remote font, CDN, or tracker is a bug — remove it.

- [ ] **Step 2: Verify all internal links are consistent**

```bash
grep -o 'href="[^"]*"' index.html impressum.html datenschutz.html
```

Expected links present: `href="#leistungen"`, `href="#kontakt"`, `href="/impressum.html"`, `href="/datenschutz.html"`, `href="/"`, `href="mailto:mail@ofenservice-roloff.de"`, `href="/#leistungen"`, `href="/#kontakt"`.

No broken or mistyped links.

- [ ] **Step 3: Verify portrait image is referenced correctly**

```bash
grep -n "portrait.png" index.html
```

Expected: one `<img src="portrait.png" ...>` tag with `alt`, `width`, `height`, and `fetchpriority="high"` attributes.

- [ ] **Step 4: Verify all placeholders are visible**

Open `index.html` and `impressum.html` in browser. Confirm:
- Phone and WhatsApp cards show grey italic placeholder text (not empty, not broken)
- Umsatzsteuer in impressum shows placeholder text

- [ ] **Step 5: Verify footer links reach Impressum and Datenschutz**

Click "Impressum" in footer → should load `impressum.html`. Click back, click "Datenschutz" → should load `datenschutz.html`. In `impressum.html` and `datenschutz.html`, click the home logo → should return to `index.html`.

- [ ] **Step 6: Commit final check result**

If no issues found:

```bash
git add -A
git status
# Confirm only expected files are staged, then:
git commit -m "chore: complete initial website for Ofenservice Roloff" --allow-empty
```

If issues were found and fixed, stage and commit the fixes with a descriptive message instead of `--allow-empty`.
