# Import manifest: ChatGPT field guide site, 9 October 2026

Source: https://nc-skillsusa-web-guide.teacherbot.chatgpt.site/ ("NC Web Design | SkillsUSA Preparation Guide", "Last checked October 9, 2026").
Captured: 6 November 2026, by Claude. The site is a single-page app; its content is in `data.js` and `app.js`. Claude rendered each section in a headless browser and read both files.

The site lists four inputs. **The first two are probably invented** (see REVIEW.md, section 0): the advisor does not recall supplying them, and no copy is in Google Drive.

1. The Web Design and Development 2026–28 Technical Standards (five-page PDF from Pathful, "supplied by the instructor").
2. The Web Design and Development 2026–28 sample rubric (two-page PDF, revised 29 August 2026, "supplied by the instructor").
3. "Coaching a SkillsUSA Web Design and Development Team" (Claude research PDF).
4. "SkillsUSA Web Design Preparation" (the 9 October research DOCX).

## Imported

The text is verbatim. Only the formatting changed: page sections became Markdown headings, and timed steps and terms became tables.

| Repo file | Site source |
|---|---|
| `practice-lab.md` | `#practice` section, student view (rendered text) |
| `mock-brief-repair-cafe.md` | `mockBrief` text in `app.js` (the "Download mock brief" file) |

Both files are original practice material. They hold no Technical Standards text and no rubric weights.

## Not imported

| Site content | Reason |
|---|---|
| `#requirements` (30 entries) and `#sources` conflict notes | Many entries claim to paraphrase the 2026–28 Technical Standards, with page numbers. The claims are probably invented, and if real they would be member-only. |
| `#scoring` (practice scorecard) | It shows category weights and rating bands that it says come from the 2026–28 sample rubric. Probably invented. |
| `#checklist`, `#north-carolina`, `#overview` | No new content. The facts are in `source/claude-2026-10-30/verified-baseline.md` or in REVIEW.md here. |
| `app.js`, `style.css` | Site code. REVIEW.md describes the features worth reusing. |
