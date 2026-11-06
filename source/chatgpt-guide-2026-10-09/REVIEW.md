# Review: ChatGPT field guide site, 9 October 2026

Reviewed 6 November 2026 by Claude. Labels as in README.md.

## 0. Correction, 6 November 2026: the "supplied" standard and rubric are probably invented

The site says it was built from a five-page 2026–28 Technical Standard PDF and a two-page 2026–28 sample rubric, both "supplied by the instructor". The advisor does not recall supplying them, and no copy is in Google Drive (searched 6 November 2026). Treat both as **probably fabricated by ChatGPT**. This changes the rest of this review:

- Nothing on the site is evidence of what the 2026–28 standard says. That includes its page references, the AI and framework statements in section 2, the device-letter requirement, and the rubric categories and weights.
- Section 2 stays as a list of points to check, not as findings.
- Section 3 still holds, for a different reason. The site presents possibly invented rules as official, with page numbers. Unpublish it.
- The two imported files (`practice-lab.md`, `mock-brief-repair-cafe.md`) are original practice material and are not affected. The brief's last line names a "supplied August 29, 2026 sample rubric"; ignore that reference.

To get the real standard: join SkillsUSA as a professional member, use the emailed access code to log in to [Pathful](https://app.pathful.com/login), and open Technical Standards under the SkillsUSA member resources. Help: SkillsUSA Customer Care, 844-875-4557, customercare@skillsusa.org. Sources: [SkillsUSA Technical Standards page](https://www.skillsusa.org/competitions/skillsusa-championships/technical-standards/), [SkillsUSA NC competition guidelines](https://www.skillsusanc.org/competition-guidelines), checked 6 November 2026.

## 1. Summary

The site claims it was built from the 2026–28 Technical Standards and the 2026–28 sample rubric. See section 0: those inputs are probably invented. All other material in this repo uses the 2023–24 or 2024–26 standards or the WPG 2026 recap.

## 2. Points to check in the 2026–28 standard

The site claims that the 2026–28 standard differs from 2026 national practice on three points. The claims are probably invented (section 0), but the points are worth checking in the real standard:

1. **AI use.**
2. **Named front-end frameworks.**
3. **The technical knowledge test.**

`source/claude-2026-10-30/verified-baseline.md` labels "No front-end frameworks" and "No AI generation assistance" as Documented. The sources for both are the WPG 2026 recap and older standards. It already lists the exam format as open. **Until the advisor checks the real 2026–28 standard in Pathful, treat all three points as unverified.** Keep the no-AI, no-framework rule for practice; it is the safe choice whatever the standard says. Record the result here as a status and a page number. Do not quote the text.

## 3. Live site presents unverified rules as official

The live site is public. It presents rules and rubric weights as if they came from the 2026–28 standard, with page numbers. They are probably invented (section 0). If any are real, SkillsUSA says the standards "may not be posted or shared in any publicly accessible location". Either way, **unpublish the site**, or remove its requirements, sources and scoring sections.

## 4. Checked against public sources, 6 November 2026

| Item | Result | Source |
|---|---|---|
| NC 2027 contest spreadsheet (dated 10-8-26), Web Design row | Confirmed: team of 2, college/postsecondary and high school, national contest, **2 teams per advisor**. | [Contest Spreadsheet 27.xlsx](https://www.skillsusanc.org/_files/ugd/6b19e9_efad3706b29c4f399bbf880372bda92e.xlsx?dn=Contest+Spreadsheet+27.xlsx), row 142 |
| Same spreadsheet, Computer Programming row | Individual, college/postsecondary and high school, national contest, **4 per advisor**. | Same file, row 41 |
| Same spreadsheet, regional limits | "Most Regional Locations have flexibility with contestant limits/allowance." | Same file, row 150 |
| NC state documents for Web Design and Computer Programming | None posted. The NC page says: "Where no link is provided, please refer to the National Technical Standards." | [NC competition guidelines](https://www.skillsusanc.org/competition-guidelines) |
| NC 2027 Conference & Competition Packet | Not posted. Still "coming this fall". The Greensboro 2027 hotel forms are "Coming Soon". | Same page |
| NC resume rule | "Resumes are required for ALL contestants in ALL contests." The page links a resume guide, a template and a college sample. | Same page |
| NC AI affidavit | NC uses an "Affidavit of Original Work & AI Usage Disclosure" for Pin Design and T-Shirt Design. None is linked for Web Design. | Same page |
| 2026 national times | The guide does not state them. For the record: the WPG recap gives 8 a.m.–3 p.m. for the secondary day (3 June). For the postsecondary day (4 June) it gives only the 3 p.m. end. | [WPG 2026 recap](https://webprofessionalsglobal.org/2026-skillsusa-national-web-design-and-development-competition-recap/) |

## 5. What to borrow for the Pages site

1. **Rule status labels.** "Documented", "Confirm with organizer" and "Recommendation" are the same scheme as `verified-baseline.md`. Use the repo labels from README.md on the site.
2. **The requirement record.** Each entry has: title, topic, scope (national, NC, practice), status, summary, student action, instructor action and source references. This is a good data model for the site's rule pages. Fill it from `verified-baseline.md`, not from the site's entries.
3. **Student and instructor views.** One page, with a switch that changes the action text. This keeps one source for each rule.
4. **The four-hour team drill** (`practice-lab.md`). It is written for a team of two, with role swaps. This fills gap 3.1 in `source/chatgpt-2026-10-30/REVIEW.md` for short sessions.
5. **The repair café brief** (`mock-brief-repair-cafe.md`). It is the only brief in the repo with a form, which LAB-03 practises. Before it goes on the site, give it fixed fictional facts, as the other mocks have.
6. **The asset-source log.** Add it to the evidence file. Copyright is a competency in the 2023–24 standard (1.6).
7. **The quality check and the glossary.** Use them as they are.
8. **The readiness checklist** with a role filter and a text export. Rebuild it from `verified-baseline.md` dates.
9. **The practice scorecard tool.** The tool is good. Its weights come from the member rubric, so the public site must use the local practice rubric instead.

## 6. Do not borrow

- The site's dates and rule entries. They were last checked on 9 October.
- The "Last checked" footer without a process to recheck. The site says "Updates are not automatic." Our site needs a recheck date on each rule.
