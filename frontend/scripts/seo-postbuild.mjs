// Runs automatically after "npm run build" (npm "postbuild" hook).
// Adds what search and AI crawlers need into the built index.html, because they often do not run JavaScript:
// a correct title and description, canonical and social tags, JSON-LD (Organization, WebSite,
// SoftwareApplication, FAQPage) and a plain-HTML copy of the key content. All text comes from src/data/content.js.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const SITE = "https://www.vsmecap.com";
const TITLE = "VSMECAP — Structured VSME Reporting for UK SMEs";
const DESC = "Prepare structured VSME sustainability reports from your utility bills. Basic B1-B11 and optional C1-C9 modules for UK SMEs. Not audited; not endorsed by EFRAG.";
const MARK = "<!-- seo-postbuild -->";

try {
  const outDir = ["dist", "build"].map((d) => path.join(root, d)).find((d) => fs.existsSync(path.join(d, "index.html")));
  if (!outDir) { console.warn("[seo] no build output found, skipping"); process.exit(0); }
  const file = path.join(outDir, "index.html");
  let html = fs.readFileSync(file, "utf8");
  if (html.includes(MARK)) { console.log("[seo] already applied"); process.exit(0); }

  const src = fs.readFileSync(path.join(root, "src/data/content.js"), "utf8");
  const D = new Function(src.replace(/export const/g, "const") + "\nreturn { FAQS, BASIC_MODULES, COMPREHENSIVE_MODULES, RISKS, LEGAL_BASIS, PRODUCT_STEPS };")();

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`;

  // remove old tags we replace
  html = html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+(property|name)=["'](og:|twitter:)[^>]*>/gi, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "")
    .replace(/<html([^>]*?)\slang=["'][^"']*["']/i, "<html$1")
    .replace(/<html/i, '<html lang="en-GB"');

  const head = [
    MARK,
    `<title>${esc(TITLE)}</title>`,
    `<meta name="description" content="${esc(DESC)}">`,
    `<link rel="canonical" href="${SITE}/">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="VSMECAP">`,
    `<meta property="og:title" content="${esc(TITLE)}">`,
    `<meta property="og:description" content="${esc(DESC)}">`,
    `<meta property="og:url" content="${SITE}/">`,
    `<meta property="og:image" content="${SITE}/vsmecap_logo_transparent_800.png">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${esc(TITLE)}">`,
    `<meta name="twitter:description" content="${esc(DESC)}">`,
    ld({ "@context": "https://schema.org", "@type": "Organization", "@id": SITE + "/#org", name: "VSMECAP", url: SITE + "/", logo: SITE + "/vsmecap_logo_transparent_800.png", email: "info@vsmecap.com", description: "Early-stage UK software for preparing structured VSME sustainability reports." }),
    ld({ "@context": "https://schema.org", "@type": "WebSite", "@id": SITE + "/#website", name: "VSMECAP", url: SITE + "/", inLanguage: "en-GB", publisher: { "@id": SITE + "/#org" } }),
    ld({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "VSMECAP", url: SITE + "/", applicationCategory: "BusinessApplication", operatingSystem: "Web browser", description: DESC, featureList: ["Extract readings from utility bills", "Draft Basic module (B1-B11) energy and Scope 1 and 2 figures", "Export JSON, CSV and draft PDF"], publisher: { "@id": SITE + "/#org" }, dateModified: new Date().toISOString().slice(0, 10) }),
    ld({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: D.FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }),
  ].join("\n");
  html = html.replace(/<\/head>/i, head + "\n</head>");

  const li = (arr) => arr.map((m) => `<li><strong>${esc(m.code)} ${esc(m.title)}.</strong> ${esc(m.desc)}</li>`).join("");
  const body = `<main style="max-width:760px;margin:40px auto;padding:0 16px;font-family:system-ui,sans-serif;color:#0F172A;line-height:1.55">
<h1>VSMECAP: structured VSME reporting for UK SMEs</h1>
<p>VSMECAP helps businesses turn utility data into a structured sustainability report based on the EFRAG VSME standard (the Voluntary Sustainability Reporting Standard for non-listed SMEs): the Basic module (B1-B11) and the optional Comprehensive module (C1-C9). Reports are structured for review and are not audited. VSMECAP is not certified or endorsed by EFRAG. VSME is voluntary and is not UK law.</p>
<h2>How it works</h2><ol>${D.PRODUCT_STEPS.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.desc)}</li>`).join("")}</ol>
<h2>Basic module (B1-B11)</h2><ul>${li(D.BASIC_MODULES)}</ul>
<h2>Comprehensive module (C1-C9, optional)</h2><ul>${li(D.COMPREHENSIVE_MODULES)}</ul>
<h2>Legal basis</h2><ul>${D.LEGAL_BASIS.map((l) => `<li><strong>${esc(l.title)}.</strong> ${esc(l.desc)}</li>`).join("")}</ul>
<h2>Frequently asked questions</h2>${D.FAQS.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}
<h2>Risks and limitations</h2><ul>${D.RISKS.map((r) => `<li><strong>${esc(r.title)}.</strong> ${esc(r.desc)}</li>`).join("")}</ul>
<h2>Sources</h2><ul>
<li><a href="https://eur-lex.europa.eu/eli/reco/2025/1710/oj/eng">Commission Recommendation (EU) 2025/1710</a></li>
<li><a href="https://www.efrag.org/en/smes-and-sustainability-reporting">EFRAG: SMEs and sustainability reporting</a></li>
<li><a href="https://www.procurementpathway.civilservice.gov.uk/documents/ppn/ppn-006-taking-account-of-carbon-reduction-plans-in-the-procurement-of-major-government-contracts">UK PPN 006: Carbon Reduction Plans</a></li>
<li><a href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026">UK Government GHG conversion factors 2026</a></li></ul>
<p>Contact: <a href="mailto:info@vsmecap.com">info@vsmecap.com</a></p>
</main>`;
  const before = html;
  html = html.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${body}</div>`);
  if (html === before) console.warn('[seo] <div id="root"></div> not found: head tags added, static content skipped');

  fs.writeFileSync(file, html);
  console.log("[seo] applied to " + path.relative(root, file));
} catch (e) {
  console.warn("[seo] skipped because of an error:", e.message);
  process.exit(0); // never fail the site build because of SEO extras
}
