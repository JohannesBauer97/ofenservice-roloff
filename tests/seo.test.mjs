import { readFileSync, existsSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

const index = read("index.html");
const body = index.match(/<body>([\s\S]*?)<\/body>/i)?.[1] ?? "";

function getTagContent(name) {
  const match = index.match(
    new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]+)"`, "i"),
  );
  return match?.[1] ?? "";
}

function getPropertyContent(property) {
  const match = index.match(
    new RegExp(`<meta\\s+property="${property}"\\s+content="([^"]+)"`, "i"),
  );
  return match?.[1] ?? "";
}

function getJsonLdGraph() {
  const match = index.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i,
  );
  assert.ok(match, "JSON-LD script is present");

  const data = JSON.parse(match[1]);
  return data["@graph"] ?? [data];
}

test("home page exposes a focused local search snippet", () => {
  assert.match(index, /<html lang="de">/);
  assert.match(
    index,
    /<title>Ofenservice Roloff in Tangermünde \| Website im Aufbau<\/title>/,
  );

  const description = getTagContent("description");
  assert.match(description, /Tangermünde und Umgebung/);
  assert.match(description, /Ofenservice Roloff/);
  assert.match(description, /Website/);
  assert.ok(description.length >= 120, "description is specific enough");
  assert.ok(description.length <= 170, "description stays snippet-friendly");
});

test("home page declares crawl and sharing metadata", () => {
  assert.match(
    index,
    /<link rel="canonical" href="https:\/\/ofenservice-roloff\.de\/">/,
  );
  assert.equal(getTagContent("robots"), "index, follow, max-image-preview:large");
  assert.equal(getPropertyContent("og:type"), "website");
  assert.equal(getPropertyContent("og:url"), "https://ofenservice-roloff.de/");
  assert.match(getPropertyContent("og:title"), /Tangermünde/);
  assert.match(getPropertyContent("og:description"), /Tangermünde und Umgebung/);
});

test("visible body keeps the compact construction page", () => {
  assert.match(body, /<main>/);
  assert.match(body, /<p class="eyebrow">Website im Aufbau<\/p>/);
  assert.match(body, /<h1 id="page-title">Ofenservice Roloff<\/h1>/);
  assert.match(body, /<p class="tagline">Wärme\. Sicherheit\. Handwerk\.<\/p>/);
  assert.match(body, /<section class="visual" aria-label="Illustration eines Ofens">/);
  assert.doesNotMatch(body, /Tangermünde/);
  assert.doesNotMatch(body, /Kaminöfen/);
  assert.doesNotMatch(body, /Kontaktinformationen folgen/);
});

test("structured data is accurate for current known business facts", () => {
  const graph = getJsonLdGraph();
  const business = graph.find((node) => node["@type"] === "LocalBusiness");
  const website = graph.find((node) => node["@type"] === "WebSite");
  const webpage = graph.find((node) => node["@type"] === "WebPage");

  assert.ok(business, "LocalBusiness node is present");
  assert.equal(business.name, "Ofenservice Roloff");
  assert.equal(business.url, "https://ofenservice-roloff.de/");
  assert.deepEqual(business.areaServed, {
    "@type": "Place",
    name: "Tangermünde und Umgebung",
  });
  assert.ok(!("telephone" in business), "telephone is omitted until confirmed");
  assert.ok(!("address" in business), "address is omitted until confirmed");

  assert.equal(website.url, "https://ofenservice-roloff.de/");
  assert.equal(webpage.inLanguage, "de-DE");
});

test("robots and sitemap expose the canonical URL", () => {
  const robots = read("robots.txt");
  const sitemap = read("sitemap.xml");

  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/ofenservice-roloff\.de\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/ofenservice-roloff\.de\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-05-16<\/lastmod>/);
});

test("local static assets referenced from HTML exist", () => {
  const assetRefs = [...index.matchAll(/\s(?:href|src)="([^"]+)"/g)]
    .map(([, value]) => value)
    .filter((value) => !value.startsWith("http"))
    .filter((value) => !value.startsWith("#"))
    .filter((value) => value !== "/");

  for (const ref of assetRefs) {
    assert.ok(existsSync(new URL(ref, root)), `${ref} exists`);
  }
});
