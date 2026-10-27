# Jeffery Sealing Website

## Current design: "The Case Files" (October 27, 2026)

The site is presented as an author's case file. His Daniel Marcos books are titled *From the Case Files of Attorney Daniel Marcos*, and his own background (Navy, criminal justice, private investigation, corrections) reads like a service record, so every section is an official document:

| Section | Treatment |
| --- | --- |
| `#top` Cover sheet | Author name in the red small caps from his covers, form fields (also known as, background, based in), *Phantom Bullet* rising out of a manila "Exhibit A" folder with a START HERE stamp |
| `#mysteries` Exhibits A–F | Daniel Marcos case board; red string joins B → C (one case, two books); D–F as evidence tags; honest "in production" note for the trailer |
| `#thrillers` Girad Clacy files | Code Name Pigeon as a personnel file whose redaction bars lift; NCX as a green-bar ship's log; *Operation: Mount McKinley* as an operation file |
| `#books` Records index | All 25 titles with filter tabs and verified US store links |
| `#about` Service record | Career fields plus the Coast to Coast AM appearance as a clipping |

- **Palette** comes from his covers: paper white, the *Phantom Bullet* title blue and red rule, the NCX green.
- **Type** (self-hosted in `fonts/`, OFL licenses in `fonts/LICENSES.txt`): Cinzel (name), Saira Condensed (titles), Public Sans (text, designed for U.S. government forms), Courier Prime (typed entries).
- **Files:** `index.html`, `css/site.css`, `js/site.js`. The old `theme.css`, `noir-act-two.css` and `clarity.css` were removed; history is in Git.
- **Motion:** opening rule/folder/stamp sequence, connected-case string, Pigeon redactions, and ship's log cursor. The dedicated upcoming-film feature never suggests a video is available. All motion is off for reduced-motion visitors, and the page remains complete with scripts disabled.
- **Covers:** Only Stopped Clock and Missing Coffee Pot retain Jeffery's publisher-supplied published artwork. Five retailer-sourced image files have been removed from the publishable V3 version pending permission. Their places use clearly labeled editorial title studies, not fictitious published covers. The social-sharing image uses only the two publisher-supplied covers.
- **Icons:** `favicon.svg/.ico`, 16/32 px, `apple-touch-icon.png`, 192/512 px, `site.webmanifest`, new `social-preview.png`.
- **No contact section:** no authorized public contact for Jeffery was found. Add one when he provides it.
- Keep `noindex, nofollow` until official-domain approval.

---

## Earlier history (superseded designs)

Client-facing author website for Jeffery Sealing / Girad Clacy.

## Current build
- Responsive single-page website with reader-first navigation
- Daniel Marcos case files and known reading relationships
- Girad Clacy catalogue, Code Name Pigeon, NCX Universe
- Operation: Mount McKinley and author biography
- Mobile menu, accessible focus states and catalogue filters
- New featured-hardcover section and edition links (October 14, 2026)
- Social preview metadata and schema.org Person identity (provisional hardcover ISBNs are not asserted in structured data)
- Reader-first guide: Phantom Bullet is Daniel's entry case; Stopped Clock precedes Missing Coffee Pot
- Author guidance: Code Name Pigeon may be read in any order; read Captain's Final Log Entry last in NCX
- Direct verified retailer links for Phantom Bullet (Bol), Stopped Clock (Apple Books), Missing Coffee Pot (Barnes & Noble)
- Filtered catalogue item counts with polite accessible announcements
- Desktop (1440px) and mobile (390px) interactive browser checks passed October 14, 2026 (no horizontal overflow, functioning menu/filters, 0 JavaScript exceptions)

## Cinematic Literary Noir design system (October 15, 2026)
- **Display typeface:** Newsreader (headlines, series and book titles, editorial numerals)
- **Interface and reading typeface:** Manrope (body, navigation, buttons, small metadata)
- Google Fonts loaded with `display=swap`, preconnect hints, and local fallback stacks; fonts are linked, not bundled
- Style layer in `theme.css` intentionally overrides the legacy inline base styles in `index.html`, keeping the functional content and JS intact
- Color story: midnight/navy for legal mysteries, warm ivory and copper for the literary author identity, steel blue for espionage, antique gold for case files, gentle futuristic details for NCX
- Refined hero case-file collage, genre navigation cards, Daniel Marcos catalogue, Girad Clacy series, hardcover features, about panel, and CTAs
- Responsive adjustments at 1100px, 980px, 760px, and 380px; respects reduced-motion preferences
- Responsive browser QA passed at 360px, 390px, 768px, 1024px, and 1440px with both real webfonts loaded, no horizontal overflow, functioning catalogue filters/mobile menu, and zero uncaught JS exceptions
- This is a **preview design**, not final approval; publisher-supplied covers for Stopped Clock and Missing Coffee Pot are now inserted, while the remaining books still need approved cover artwork

## Cinematic Literary Noir — Act II (October 15, 2026)
- `noir-act-two.css` is the bold editorial redesign layer, loaded after `theme.css`; HTML content and functional JS are preserved
- Midnight-blue, copper-lit full-height opening with dramatic serif headline, archival dossier collage, and coordinated dark credentials bar
- Three **visibly distinct** genre cards: oxblood archival legal mystery, blue-steel espionage, and indigo/star-field speculative fiction
- Superseded locally in `#books` by the bespoke reading room described below; the rest of Act II is retained.
- Strengthened Daniel Marcos book gallery styling and reading guidance without pretending CSS placeholders are approved book covers
- Girad Clacy zone has a pale-steel backdrop plus separate dark intelligence-dossier and cosmic NCX cards
- Hardcover features retain retailer details in a warm paper-gallery layout; submarine sonar, catalogue, author biography, and final action remain visually coordinated
- Newsreader display type, Manrope reading type, accessible focus and reduced-motion behavior are retained
- Work is deployed to the **existing Cloudflare Pages preview**, not treated as final client approval. Authentic cover artwork, ISBN clarification, and author sign-off are still pending

## Featured hardcovers (retailer-verified)
| Title | ISBN-13 | Listing |
|---|---|---|
| Los Angeles: 2020 | 9781663271488 | https://www.bol.com/nl/nl/p/los-angeles/9300000227602979/ |
| Heart of Stone | 9781663279071 | https://www.walmart.com/ip/20031451885 |
| The Kindred | 9781663279064 | https://www.walmart.com/ip/20053521333 |

**Needs client confirmation:** Jeffery's message assigns 1-6632-7906-4 to *Heart of Stone* and 1-6632-7907-1 to *The Kindred*, but independent retailer records assign 9781663279064 to *The Kindred* and 9781663279071 to *Heart of Stone*. The user-supplied 1-6632-7906-4 also has an invalid ISBN-10 check digit (correct: 1-6632-7906-3). The table retains the retailer-supported ISBN-13 mappings for documentation. Both disputed ISBNs are withheld from the reader-facing HTML and structured data pending direct verification with Jeffery; the existing retailer links remain unchanged. Do not assign or swap these numbers before confirmation.

## Direct Daniel Marcos listing links
- The Case of the Phantom Bullet: https://www.bol.com/be/nl/p/the-case-of-the-phantom-bullet/9200000009946385/
- The Case of the Stopped Clock: https://books.apple.com/us/book/the-case-of-the-stopped-clock/id665146871
- The Case of the Missing Coffee Pot: https://www.barnesandnoble.com/w/the-case-of-the-missing-coffee-pot-jeffery-sealing/1117495646

These destinations are independently identified book pages, but pricing, availability and retailer geography vary. Remaining catalogue retailer links need verification.

## Remaining before final production
- Approved high-resolution book covers and author portrait (if desired)
- Confirmed retailer links for the entire catalogue, not just three hardcovers
- Jeffery's preferred full Daniel Marcos reading order
- Jeffery-approved description and verified purchase URL for *The Case of the Reverend's Son* (the card currently shows only its confirmed title and series/author identifier)
- Complete book-format and current availability review
- Verified official author contact and social destinations
- Any missing newer or unpublished titles
- Client approval of copy, edition details and final URLs
- Full visual review again after insertion of approved book covers and final trailer
- Approved connected two-book trailer and author-approved script; integrate into the Daniel Marcos section after production
- Final launch/domain approval

## Preview publishing note
The preview is deployed at https://jeffery-sealing-website.pages.dev/ via the GitHub repository. Publication to this preview is authorized for review, but final client sign-off and any eventual public-facing domain launch remain separate. High-resolution covers, remaining retailer and contact details, and Jeffery's confirmation of ISBN assignments are still pending. Earlier design is preserved in `_archive/index-before-polish.html`.

## Reader journey preview (local review, October 15, 2026)
- Compact opening guide introduces Daniel Marcos through the existing Phantom Bullet synopsis, with on-site browsing first and a secondary link explicitly labelled as a bol.com book listing.
- NCX and Code Name Pigeon have distinct section anchors, reviewed entry-book links, and catalogue routes (`#catalogue-ncx` and `#catalogue-pigeon`). Mount McKinley has a separate route and the supplied eCampus listing; no availability claim is made.
- All six Daniel Marcos cards and eighteen numbered Girad Clacy cards are semantic HTML in the initial source. HTML is the sole runtime catalogue data source. Filters hide/show those same nodes, update pressed states/counts, and retain button focus. Series routes move focus into the filtered catalogue.
- Without JavaScript, all titles, metadata and listing links remain readable; enhancement-only filter/menu buttons stay hidden, and mobile navigation remains visible. Series catalogue anchors fall back to the full catalogue.
- Only supplied reviewed book URLs and the three existing hardcover destinations are used. Listings open in a new tab with accessible labels. Stock, prices, regions and remaining book destinations were not checked during this offline task.
- Hardcover cards have individual detail anchors. Existing retailer ISBN assignments remain provisional pending Jeffery's confirmation, including the discrepancy above. Book entities asserting those assignments have been removed from structured data; the Person identity remains.

### Bespoke reading room (local review, October 16, 2026)
- Only `#books` is redesigned: an asymmetric editorial introduction and a roughly 58/42 desktop composition, with a dominant Daniel Marcos paper dossier beside stacked blue-steel intelligence and indigo NCX portals. Tablet preserves the hierarchy; phones read legal, espionage, then science fiction without fixed tile heights.
- Offset document sheets, an ornamental case-file stamp, fine intelligence grids and orbital cartography are CSS decorations hidden from assistive technology. They are navigation art direction, not published covers or claims of real security clearance.
- Existing source-backed descriptions and internal routes are retained. Daniel has a first-case path; Pigeon has a six-book catalogue route; Operation: Mount McKinley is explicitly a separate military thriller from NCX.
- All new selectors are scoped to `.choose` in `noir-act-two.css`; new portal classes avoid inherited `.path` rules. Other section markup, `theme.css` and site JavaScript are unchanged. No dependencies, scripts, fonts or image assets were added.
- Offline headless Chrome QA passed at 360, 390, 768, 1024 and 1440px: no horizontal overflow, expected asymmetric/mobile order, resolved hash links, unique IDs, correct headings, 44px minimum portal links and visible keyboard focus. Existing filters, catalogue routes, mobile menu/Escape, reduced motion and JavaScript-disabled navigation/content passed; no uncaught JavaScript exceptions. Screenshots were inspected locally, with a final contrast correction to the paper-panel secondary link.
- External HTTP/HTTPS was blocked; existing font references used fallback fonts. Real Newsreader/Manrope rendering remains for supervisor QA. Approved book cover assets remain pending and unchanged; no generated, scraped or substitute covers were introduced. This revision is local, uncommitted, unpushed and undeployed.

### Authentic artwork integration
Four Daniel Marcos titles still use editorial typographic case-file panels, not published cover art. Stopped Clock and Missing Coffee Pot now display their publisher-supplied front covers. The remaining panels use a neutral Daniel Marcos / Case File series label; approved author/publisher cover art is still required for those titles. Do not substitute scraped, generated or unapproved artwork. After approval, add local author/publisher-supplied assets with documented rights and exact title/edition matching. Use a 2:3 image with explicit intrinsic width/height, an appropriate resolution (e.g. 800 × 1200), optimized file size, and no cropping of title/author text. The `.cover img` rule supports contained 2:3 artwork. Retain the semantic title, author, reading guidance and metadata in `.info` outside the image; use empty alt text for a redundant adjacent cover, or concise meaningful alt text if it conveys unique approved information. Replace the typographic case-file panel only when the matching artwork is approved. Use lazy loading below the fold. Recheck responsiveness, layout shift, image failures, contrast and keyboard access after insertion.

### Preview indexing and release boundary
`pages.dev` is the review preview, not the agreed official author domain. This local review adds `noindex, nofollow` and deliberately leaves canonical unset. This directive applies to any deployment of this HTML, so the supervisor must review indexing and add the agreed canonical/domain metadata before an official launch. No Cloudflare account settings were changed. Historical deployment notes above do not authorize this revision: this work remains local, uncommitted and unpublished until supervisor review. Existing Google Fonts references remain; offline QA blocks external requests and uses the configured fallback fonts.

### Local validation for this revision
- Node syntax check and source comparison passed: all 6 + 18 cards, original book descriptions, ISBN metadata, ordering, numbering and author labels preserved. All 16 external listing controls use exactly the 10 supplied/existing reviewed book URLs; labels are nonempty and internal targets resolve.
- Headless Chrome checks passed at 360, 390, 768, 1024 and 1440px: no horizontal overflow, all filter counts and pressed states correct, keyboard focus retained and visible, both series catalogue routes working (including repeated NCX visits), original DOM nodes preserved, mobile menu and Escape focus return working, reduced motion respected, zero uncaught JavaScript exceptions.
- JavaScript-disabled reload at 360px passed: 24 readable cards, enhancement controls hidden, mobile navigation visible, no horizontal overflow. Desktop/mobile screenshots inspected locally.
- The pre-existing Edge DevTools harness timed out in this restricted environment; Chrome required local headless sandbox flags to run. This does not change website configuration. No dependencies were installed and external HTTP/HTTPS requests were blocked. Real Google Fonts rendering and current retailer availability remain outside this offline validation.

### Step 1 preview cleanup (October 16, 2026)
- Removed reader-facing production notes and the unsupported Reverend's Son summary; no plot or purchase destination was invented.
- Retained the styled reading guide: Phantom Bullet first; Stopped Clock before Missing Coffee Pot. Removed the duplicate pathway.
- Hero explains Girad Clacy once as a pen name, prioritizes `#danielBooks` and the unchanged `#books` Reading Room, and identifies the secondary bol.com destination. Closing links browse `#catalogue` and `#danielBooks`.
- Heart of Stone and The Kindred display only “Hardcover edition”; disputed numbers remain documented above pending Jeffery's verification. Los Angeles: 2020 retains ISBN 9781663271488.
- Source inspection found no hero content hiding, entrance animation or intersection observer. Existing hidden states control progressive enhancement, mobile navigation and catalogue filters.
- No assets, dependencies, new external destinations, official domain/social/contact details or trailer added. Preview `noindex, nofollow` remains. Publication to the existing pages.dev review preview is permitted after QA; final public-domain launch still requires Jeffery's approval.
- Validation: Node source assertions passed for the exact 6 + 18 title inventory/order, unchanged Reading Room and functional JavaScript, preserved external URLs and IDs, resolved hash targets, balanced HTML, six neutral case-file labels, ISBN withholding and preview robots.
- Existing Temp headless Chrome QA passed at 360, 390, 768, 1024 and 1440px: no horizontal overflow, correct filters/counts/focus, series routes and repeated visits, mobile menu/Escape, reduced motion, and zero uncaught exceptions. JavaScript-disabled content/navigation passed at 360px.
- Additional computed-style checks confirmed visible hero content without entrance animations at all five widths; hero screenshots at all five widths plus Daniel, hardcover and closing CTA screenshots were reviewed locally. No CSS adjustment was needed. External HTTP/HTTPS was blocked; fallback fonts were used, so live webfont rendering and retailer availability were not verified. `git diff --check` passed.


## Original publisher covers — two-book feature (October 22, 2026)

Jeffery supplied original front-cover JPEGs for **The Case of the Stopped Clock** and **The Case of the Missing Coffee Pot**. They are original published designs, not generated/recreated artwork, and must retain the publisher's text, imagery and proportions.

- Local source files (not committed): `C:\Users\user\Downloads\Stopped Clock.jpg` (3720 × 6992, 600 DPI) and `C:\Users\user\Downloads\Missing Coffee Pot.jpg` (3864 × 6992, 600 DPI). **Do not overwrite these**; retain original files for the approved cinematic trailer.
- The publisher JPEGs include gray scan/background areas to the right and below the front covers. Cropped only these margins to an approximately 2:3 front-cover rectangle, without changing artwork or text: Stopped Clock source rectangle x=0,y=0,width=3570,height=5355; Missing Coffee Pot x=0,y=0,width=3550,height=5325.
- Website derivatives in `assets/books/`: `the-case-of-the-stopped-clock.jpg` (1000 × 1500, ~211 KB) and `the-case-of-the-missing-coffee-pot.jpg` (1000 × 1500, ~343 KB), JPEG quality 88.
- Replaced only the corresponding Daniel Marcos editorial case-file placeholders in `index.html`. Responsive `.cover-published` styles in `noir-act-two.css` show the complete images with `object-fit:contain`; screen-reader titles and description remain in adjacent HTML, so image alt is intentionally empty within decorative media.
- Preview remains `noindex, nofollow`. No other cover images or trailer footage were fabricated or added. **Other titles still require approved front-cover assets.**
- Local Edge checks at 360, 390, 768, 1024, 1440px passed: both images loaded after scrolling into the lazy-loaded gallery, all 6 Daniel and 18 Girad entries remain, no broken hash targets or horizontal overflow, no uncaught JS errors. Desktop and each published-cover mobile screenshot were visually checked. JavaScript-disabled page also shows both original covers.
- Trailer production should use the high-resolution source files, not these lightweight website derivatives. Do not alter Jeffery's actual published cover designs.


## October 24, 2026 — Pre-handover final QA and release boundary

**Current state:** The Cloudflare Pages URL is a working, publicly accessible **review preview**. Do not call the site an approved final launch or remove `noindex, nofollow` until Jeffery approves the actual domain and finished content. The full website's custom Reading Room, 6 Daniel Marcos cards, 18 Girad Clacy catalogue cards, and the two publisher-supplied front covers remain in place.

**Completed in this audit:**
- Added a bespoke `favicon.svg` (JS monogram) and 1200 × 630 `social-preview.png` using the two approved covers and original editorial design. `og:image` and Twitter image refer to the current Pages review URL. **Update both image URLs to Jeffery's approved canonical domain when launching**; neither a production domain nor canonical is assumed today.
- Keyboard refinement: mobile menu Escape now closes from the focused Menu toggle itself as well as from its navigation links, and returns focus correctly.
- Keyboard refinement: focused links inside the Reading Room's light paper dossier have a dark, high-contrast outline and light halo. Dark panel focus styling stays readable.
- No book details, edition assignments, retailer links, images, actual trailer content, official domain or contact information were fabricated or replaced.

**Still requiring Jeffery's input before final launch:**
1. Approved actual covers for all other books (the site contains only `Stopped Clock` and `Missing Coffee Pot` artwork).
2. Preferred purchase URLs for remaining entries; do not claim unconfirmed titles are for sale.
3. Confirmed reading order, synopsis for `The Case of the Reverend's Son`, and the conflicting ISBN assignments of `Heart of Stone` and `The Kindred`.
4. Public contact/social preferences and optional author photograph; domain choice; approval of final copy/design and image-use permissions.
5. When completed and approved, the connected two-book cinematic trailer can be embedded in a dedicated on-site section.

**Astra technical release checklist:** Verify browser widths 320/360/390/768/1024/1440, keyboard controls, images, links, page load, and social preview. After client sign-off, configure the agreed domain + HTTPS + canonical/og:url + production-specific OG image URLs, remove HTML `noindex,nofollow` only for the approved public domain, then reverify search indexing and final website delivery. Do not publish historical `_archive` or production notes; it is Git-ignored.

**Independent review:** October 24 read-only Codex audit found no confirmed critical defect. Previously missing social assets and a mobile Escape keyboard edge case were actionable without Jeffery's approval. Potential Google Fonts stylesheet latency was noted but no blank-hero or entrance-animation defect was reproduced. Historic sections above describe earlier stages and may reference superseded work; this section and the actual deployed source are the current authoritative status.


## October 24, 2026 — Dedicated book trailer feature

- Added `#trailer` between the six Daniel Marcos books and the Girad Clacy sections, plus a `Book Trailer` primary navigation link.
- The custom editorial film presentation uses only Jeffery's **publisher-supplied, original front covers** for `The Case of the Stopped Clock` and `The Case of the Missing Coffee Pot` and follows the approved *single connected trailer* brief. It does not reveal or alter the essential Silverton cliffhanger.
- Reader-facing status is **Film coming soon**. There is deliberately **no fake Play button, embedded preview, stock footage posing as a finished film, or production-only notes**. Visitors can follow the active CTA to `#danielBooks` and explore the connected books.
- The film is a separate, unfinished deliverable. After Jeffery approves the completed video, replace or extend the `.trailer-art` presentation with a real accessible player (captions, usable controls, downloadable or inline transcript as appropriate), preserve the original cover art, and retest keyboard, mobile, loading, and poster handling. Do not deploy unfinished video or alter the approved trailer script without approval.
- The new nav item makes menu mode appropriate for 761–1050px widths. The enhanced JavaScript mobile menu operates at these widths; without JS, navigation remains exposed. All existing page sections and anchor destinations are preserved.
- Local Chrome/Edge tests passed at 320/390/768/1024/1440px: no horizontal overflow, publisher imagery loads, true section label and anchor, nav includes Trailer, 768/1024px menu opens, and zero JS exceptions. Full previous page regression checks across 320–1440px also passed.
- This is a **preview-only improvement**. `noindex, nofollow` remains until official-domain approval. The Astra Productions company website was not touched.

## October 27, 2026 — Daniel Marcos bespoke case board

- Replaced the repetitive Daniel Marcos `#daniel` introduction, prose reading guide and uniform six-book grid with a bespoke responsive **exhibit case board**. The section retains `id="daniel"`, `id="danielBooks"`, the original six semantic book articles and their existing book descriptions; no invented publisher covers or unverified plots are introduced.
- **Exhibit A** spotlights the confirmed starting book, `The Case of the Phantom Bullet`, using decorative archival case-paper artwork (not a fictional published book cover). The visible listing uses a verified **US Apple Books eBook page**, `https://books.apple.com/us/book/the-case-of-the-phantom-bullet/id579569301`, instead of the Belgian bol.com listing. The paperback ISBN 9781475957532 and eBook ISBN 9781475957549 remain visible.
- **Exhibits B and C** clearly connect `The Case of the Stopped Clock` → `The Case of the Missing Coffee Pot` with Jeffery's original published front covers, a decorative red thread, readable synopsis, and existing Apple Books and Barnes & Noble destination links. The original edition ISBNs remain available via native `<details>` controls.
- **Exhibits D, E and F** are smaller supporting entries using decorative text only, not presented as approved front-cover artwork. Case 04 `Three Arrests` retains its existing paperback/eBook ISBNs, Case 05 retains its paperback number, and `Reverend's Son` has no invented synopsis or purchase URL.
- Removed the redundant hero `Your first case` spotlight and old long reading-order guide, while keeping the custom Reading Room and dedicated upcoming trailer section. The hero explicitly identifies Girad Clacy as Jeffery's other publishing identity, and the small genre labels use clear, newcomer-friendly terms.
- Corrected the upcoming-trailer caption numbers from 01/02 to **Case 02/Case 03** matching the site-wide series sequence. The trailer is still **Film coming soon**; no video was falsely embedded.
- Visual QA: local Edge at 320/360/390/768/1024/1440px, no horizontal overflow, two published covers load, all six Daniel Marcos titles and eighteen Girad Clacy titles remain, deep links resolve, catalogue filters remain functional, case sequence numbering is consistent, no uncaught JavaScript exceptions, and readable desktop/mobile case-board screenshots were inspected.
- **Not a final public launch.** Keep `noindex, nofollow`, official domain, other approved covers, extra verified purchase destinations, disputed hardcover ISBNs, contact information and completed film pending author approval.

## October 27, 2026 — Reader clarity pass

Applied six fixes from a first-time-visitor review. New styles live in `clarity.css`, loaded after `noir-act-two.css`; no earlier stylesheet was rewritten.

- **Plain menu.** Primary navigation is now `Books · About · Contact · All titles` (was seven items mixing a character, a pen name, a format and a trailer that does not exist yet). Four items fit inline again at 761–1050px, so the small-laptop menu-button rule is overridden there.
- **Five-second test.** The hero names the featured book (*The Case of the Phantom Bullet*) under a "Start here" label, with two US purchase buttons: paperback at Walmart and eBook on Apple Books. The pen-name sentence sits directly under the intro. Verified visible without scrolling at 1440, 900 and 390px widths (below the fold only at 320×640).
- **Jargon removed or explained.** "Reading Room / Three worlds" → "Books / Three series to start with"; "STARCORE" removed (now "far-future space saga"); SPOT is spelled out where it first appears.
- **Fewer repeated sections (12 → 8).** Removed the credentials strip (repeated in About), the `#girad` series cards (merged into the Books portals, including the reading-order notes), the `#editions` hardcover section (descriptions moved into catalogue cards 01, 02 and 04), the separate Coast to Coast block (now inside About) and the final call-to-action (replaced by Contact). *Operation: Mount McKinley* now sits under the three series instead of inside the sci-fi card. Page height: about 10,700 → 8,300px on desktop and 19,000 → 14,300px on a phone.
- **Reader action.** Every catalogue title now has a US store link. The bol.com (Netherlands), Apple Books GB and eCampus links were replaced. All 17 Walmart links, 3 Apple Books links and the Barnes & Noble link were opened in a browser on October 27 and confirmed to show the correct title and author. A new `#contact` section has a clearly marked `[Jeffery's contact email or form]` space plus a link to every Girad Clacy title at Walmart.
- **Cinematic moment.** The trailer stage gets a slow push-in on the two published covers, a projector-light sweep and a pulsing "Film coming soon" dot. All motion is off under `prefers-reduced-motion`. "Book Trailer" is out of the menu until the film is delivered. The trailer button arrow now points up (↑), since it scrolls to the books above.
- Tablet (761–980px) hero cards no longer cover each other's subtitles.
- QA (local Chromium, 320/390/900/1440px): no horizontal overflow, no broken in-page anchors, no JavaScript errors, mobile menu opens and closes with Escape, catalogue filter routes return 6 (Pigeon) and 2 (NCX) titles, and reduced-motion disables the trailer animation.
- **Still needed from Jeffery:** contact method; covers for Phantom Bullet, Three Arrests, Sleepy Security Guard and Reverend's Son; a synopsis, case type and store link for Reverend's Son; store links for Three Arrests and Sleepy Security Guard; the official domain; the finished trailer; final sign-off. Keep `noindex, nofollow` until then.


## October 27, 2026 — V3 visual corrections awaiting user review

This is an **unpublished local review branch** (`v3-fixes-review-20261027`). The existing Cloudflare Pages website and GitHub `main` are unchanged.

Five focused fixes:
1. The first-screen case-file title panel now sits in front of the manila pocket, showing its full footer and Jeffery's name; the START HERE stamp uses a solid ivory backing and normal blending.
2. Editorial title panels use natural word boundaries rather than breaking punctuation; NCX and Mount McKinley titles have tailored, legible display sizes.
3. The trailer headline has a balanced desktop measure, keeping “One cinematic” together rather than leaving “ONE” by itself.
4. Exhibit A's small catalogue panel says “FILE NO. 01” rather than duplicating the visible book title beneath it.
5. The trailer's same-page “Explore the connected mysteries” link displays an upward arrow instead of an external-link arrow.

**Live-site safety:** The trailer is still accurately marked as in production. Only the two publisher-supplied mystery front covers are used. The other five editorial panels are placeholders pending Jeffery's authorization of published cover artwork; no unauthorized images were introduced. `noindex, nofollow` remains intact.

**QA:** Local Edge regression test passed at 320, 360, 390, 768, 1024 and 1440 pixels: all 25 title records and two published trailer images present, no broken internal anchors, no horizontal overflow, no uncaught JavaScript exceptions. Dedicated visual screenshots for full cover sheet, Exhibit A, NCX, Operation: Mount McKinley and trailer at phone/desktop sizes were inspected. Do not publish until user reviews the changes.
