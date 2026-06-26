# AGENTS.md

## Projektkontext

Dieses Repository enthält die statische Website für **Ofenservice Roloff**, den Handwerksbetrieb von **Jan Roloff** in Tangermünde.

Ziel ist eine schlanke, seriöse und mobiloptimierte Visitenkarten-Website, die auf **GitHub Pages** unter folgender Domain veröffentlicht wird:

* Repository: `https://github.com/JohannesBauer97/ofenservice-roloff`
* Produktivdomain: `https://ofenservice-roloff.de/`

Die Website soll ohne Backend, ohne Datenbank und ohne externe Laufzeitabhängigkeiten funktionieren.

## Grundsätzliche Anforderungen

* Statische Website für GitHub Pages.
* Keine Backend-Abhängigkeiten.
* Keine Frontend-Frameworks.
* Keine extern eingebundenen Assets von Remoteservern.
* Alle Bilder, Fonts, Icons und sonstigen Assets müssen lokal im Repository liegen.
* Keine Cookies und kein Tracking.
* Keine Cookiemeldung einbauen.
* Desktop- und Mobile-First-Optimierung sicherstellen.
* SEO vollständig und bestmöglich innerhalb eines statischen GitHub-Pages-Setups optimieren. Dazu gehören insbesondere: saubere semantische HTML-Struktur, korrekte Heading-Hierarchie, optimierte Meta-Titel und Meta-Descriptions, strukturierte Daten (Schema.org/LocalBusiness bzw. Handwerksbetrieb), Open-Graph- und Social-Media-Metadaten, Canonical-URLs, robots.txt, sitemap.xml, sprechende URLs, optimierte interne Verlinkung, lokale SEO-Signale (Tangermünde, Region, Leistungen), performante Ladezeiten (Core Web Vitals), optimierte Bildgrößen und Alt-Texte, sinnvolle Keyword-Abdeckung ohne Keyword-Stuffing, korrekte Sprach- und Regionstags, saubere Indexierbarkeit sowie technisch valide HTML-Strukturen. SEO soll als Priorität betrachtet werden, soweit dies ohne Tracking, externe Dienste oder Backend möglich ist.
* Gute Performance, geringe Dateigrößen und klare HTML-Struktur priorisieren.
* Barrierearme Umsetzung mit semantischem HTML, sinnvollen Alt-Texten und ausreichenden Kontrasten.
* Vorerst kein Favicon einplanen, sofern nicht explizit nachgereicht.

## Gewünschter Charakter der Website

Die Website soll wie eine kurze, vertrauenswürdige digitale Visitenkarten-Website wirken.

Wichtig sind:

* Persönlicher Eindruck durch ein Porträt von Jan Roloff.
* Kurze, verständliche Beschreibung der angebotenen Dienstleistungen.
* Sehr einfache Kontaktaufnahme per Telefon, WhatsApp und E-Mail.
* Hinweis, dass auch bei nicht explizit beschriebenen Leistungen einfach Kontakt aufgenommen werden kann.
* Handwerklicher, bodenständiger und seriöser Stil.

## Dienstleistungen

Aus der Handwerkskarte extrahierte Leistungen:

* Reparaturarbeiten
* Schornsteinbau, insbesondere Edelstahl-Schornsteinbau
* Reinigungsarbeiten
* Reinigungsklappen einmauern
* Anschluss und Montage von Öfen

Empfohlene Website-Formulierung:

```text
Ofenservice Roloff bietet Reparaturarbeiten an Öfen und Luftheizungen, Edelstahl-Schornsteinbau, Reinigungsarbeiten, das Einmauern von Reinigungsklappen sowie den Anschluss und die Montage von Öfen an.
```

Zusätzlicher Hinweis:

```text
Ihre gewünschte Leistung ist nicht aufgeführt? Nehmen Sie einfach Kontakt auf und schildern Sie Ihr Anliegen.
```

## Kontaktangaben

Für Kontaktbereiche und Impressum verwenden:

```text
Telefon: <PLATZHALTER>
E-Mail: mail@ofenservice-roloff.de
WhatsApp: <PLATZHALTER>
```

## Rechtliche Angaben für das Impressum

### Anbieter

```text
Ofenservice Roloff
Jan Roloff
Goethestr. 50
39590 Tangermünde
Deutschland
```

### Kontakt

```text
Telefon: <PLATZHALTER>
E-Mail: mail@ofenservice-roloff.de
```

### Umsatzsteuer-ID

```text
Umsatzsteuer-Identifikationsnummer: <PLATZHALTER>
```

Falls keine Umsatzsteuer-ID vorhanden ist, diesen Abschnitt nicht mit einer Steuernummer ersetzen. Keine private Steuernummer veröffentlichen.

### Handwerkskammer

```text
Handwerkskammer Magdeburg
Gareisstr. 10
39106 Magdeburg
Deutschland

E-Mail: info@hwk-magdeburg.de
Website: www.hwk-magdeburg.de
```

### Eintragung

```text
Eingetragen in die Handwerksrolle der Handwerkskammer Magdeburg
Betriebs-Nr.: 52714
```

### Berufs- / Handwerksbezeichnung

```text
Ofen- und Luftheizungsbauer
Eingetragenes zulassungspflichtiges Handwerk
```

### Teiltätigkeiten laut Handwerkskarte

```text
Reparaturarbeiten, Schornsteinbau (Edelstahl), Reinigungsarbeiten, Reinigungsklappen einmauern, Anschluss und Montage von Öfen
```

### Berufsrechtliche Regelung

```text
Handwerksordnung (HwO)
```

## Datenschutz

Die Datenschutzerklärung soll **nicht KI-generiert** werden.

Stattdessen gilt:

* Datenschutzerklärung durch den eRecht24-Generator erstellen lassen.
* Der fertige Text muss vom Nutzer bereitgestellt werden.
* Bis dahin nur eine Platzhalterseite oder einen klar markierten Platzhalter verwenden.
* Keine Tracking-, Analytics-, Cookie- oder externen CDN-Dienste einbauen.

## Technische Vorgaben

* Plain HTML, CSS und optional Vanilla JavaScript.
* Keine Build-Pipeline voraussetzen.
* Keine npm-Abhängigkeiten einführen, außer ausdrücklich gewünscht.
* Keine Frameworks wie React, Vue, Angular, Svelte, Astro oder Next.js verwenden.
* Keine Remote-CDNs für CSS, JS, Fonts oder Icons verwenden.
* Bilder lokal ablegen und optimieren.
* Kontaktlinks dürfen Platzhalter enthalten, solange echte Telefonnummern noch fehlen.

## Qualitätskriterien

Vor Abschluss einer Änderung prüfen:

* Funktioniert die Seite lokal als statische Datei oder über einen einfachen lokalen Server?
* Sind alle Links korrekt?
* Sind Platzhalter klar sichtbar?
* Ist die mobile Darstellung sauber?
* Sind Impressum und Datenschutz im Footer erreichbar?
* Werden keine externen Ressourcen geladen?
* Sind HTML und CSS sauber strukturiert?
* Sind die Texte kurz, verständlich und seriös?
* Sind sensible Daten nur enthalten, wenn sie ausdrücklich freigegeben wurden?
