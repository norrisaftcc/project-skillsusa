# Review: Claude material, 30 October 2026

Reviewed: 6 November 2026, by Claude and the GitHub Copilot reviewer on pull request #2.

## Status labels

These files use three labels. They map to the repo labels in README.md as follows.

| Label in these files | Repo label |
|---|---|
| Documented (official source, linked) | confirmed. The check date is 30 October 2026 unless the line gives another date. |
| Baseline (2024–26 standard) | unverified. The 2026–28 standard is in force but member-only, so each baseline fact still needs a check in Pathful. |
| Open | unverified |
| Recommendation, local format, practice rubric | local practice rule |

## Status of each file

| File | Status | Use it for |
|---|---|---|
| `verified-baseline.md` | Reviewed. Working reference. | Contest facts and the open-question list. Start here. |
| `baseline-research-report.md` | Superseded by `verified-baseline.md`. Kept as the audit trail of the ChatGPT corpus check. | Seeing why a corpus claim was rejected. |
| `web-design-curriculum.md` | Draft v1. Not yet reviewed by a coach. | Planning. Do not publish to the site until a coach reviews it. |
| `season-outline.xlsx` | Draft v1. Matches the curriculum. | Tracking the gaps (Owner, Status columns). |
| `slides/` | Draft for review. | Finding Phase 1 gaps. Not student-ready. |
| `wpg-requirements-email-draft.md` | Draft. Not sent. | Update its status line when someone sends it. |
| `chatgpt-drive-doc-corrections.md` | Record. | Seeing what changed in the Drive docs. |

## Known errors

1. `baseline-research-report.md` says NC state dues were not found. It calls the $14 figure a Tennessee number. This is wrong. The [SkillsUSA NC join page](https://skillsusanc.org/join) gives $14 for students ($8 national, $6 state) and $26 for professionals ($20 national, $6 state). The file has a note at the top. `verified-baseline.md` has the correct figures.
2. The 10-point resume penalty. **Corrected 6 November 2026: this item was itself wrong.** It said the 10-point figure in `baseline-research-report.md` and `chatgpt-drive-doc-corrections.md` was an error, because the [competition updates page](https://www.skillsusa.org/competitions/skillsusa-championships/competition-updates/) gives 10 points only for a missing Safety Training Verification Letter. But the event standard sets its own penalty. The public copy of the [2023–24 WDD standard](https://resources.finalsite.net/images/v1700063899/gcitorg/xarycrundehj64ktd4ef/WebDesignandDevelopment2023-24.pdf) sets a 10-point penalty for a missing resume. So the 10-point figure is correct for 2023–24. Check it in the 2026–28 standard. The resume row in `verified-baseline.md` ("the 2027 page gives no point value") is true for the updates page but misses the event standard. Fix that row in the live doc. The imported file stays as it is.
3. The 2026 postsecondary contest hours. `baseline-research-report.md` and `chatgpt-drive-doc-corrections.md` say the 2026 postsecondary day ran from 8 a.m. to 3 p.m. This is wrong. The [WPG 2026 recap](https://webprofessionalsglobal.org/2026-skillsusa-national-web-design-and-development-competition-recap/) (checked 6 November 2026) gives 8 a.m. to 3 p.m. for the secondary day. For the postsecondary day it gives only the 3 p.m. end.

`verified-baseline.md` and `web-design-curriculum.md` are corrected for errors 2 and 3, here and in the live docs. The other two files keep the errors as a record.

4. The source of the no-templates rule. `chatgpt-drive-doc-corrections.md` says the WPG 2026 recap bans templates. The recap does not mention templates. The ban comes from the 2023–24 Web Design standard. `verified-baseline.md` cites both sources for its rules list, so it is not affected.

## Live and Drive docs updated, 6 November 2026

The live docs and the Drive docs changed after this import. The imported files keep their text as a record.

| Where | Change |
|---|---|
| Live `verified-baseline` Claude Doc, resume row | Now says: a missing upload incurs a penalty; the public event standards (2023–24 Web Design, 2024–26 Computer Programming) set it at 10 points; confirm in the 2026–28 standards; the 2027 competition updates page gives no figure for resumes. This replaces the over-correction that item 2 describes. |
| Three Drive docs (charter, Web Development training track, Computer Programming training track), Claude correction section | Same resume wording as above. The Web Development doc also has the corrected 2026 contest hours (error 3) and the corrected no-templates source (error 4). The charter has the corrected no-templates source. |
| Three Drive docs, end of the Claude correction section | New line: the reviewed public material is in this repository, folder `source/claude-2026-10-30`; instructor-only material stays in Drive. New line: the date and list of corrections. |

## Fixed before import (pull request #2 review)

The Copilot reviewer found six errors. All six were real, and all six were fixed in the files and in the live versions.

| File | Error | Fix |
|---|---|---|
| `web-design-curriculum.md` | Phase 4 called weeks 16, 18 and 20 "odd weeks". | Weeks are now named by number. |
| `web-design-curriculum.md` | An open item said the WPG email was sent. | Now says drafted, not sent. |
| `web-design-curriculum.md` | It said both WPG exams use "the contest exam format". The contest format is still an open question. | Now gives the WPG format and says the contest format is open. |
| `slides/phase1-html-css/slides/cover.html` | Cover said support L4 to L3. The HTML and CSS strand runs L3 to L2. | Now L3 to L2. |
| `slides/phase1-html-css/slides/flexbox.html` | Alignment rule described a row only. | Now uses main axis and cross axis. |
| `slides/phase1-javascript/slides/hof.html` | It said every array method returns a new array. `reduce` and `sort` do not. | Now names only `filter`, `map` and `toSorted`. |

## Gaps found by the material itself

The two decks end with coverage slides. These gaps have no plan yet:

- HTML and CSS exam topics with no Phase 1 build: specificity and the cascade, data tables, iFrames and entities, relative file paths, CSS units, positioning with transitions and transforms, what LESS and Sass are.
- JavaScript skills that Phase 2 needs and Phase 1 does not teach: string methods for search, converting form input to numbers, JSON, template literals in real output.
- `toSorted` (2023) appears in the curriculum and the JavaScript deck. Confirm the contest browser supports it, or teach `[...xs].sort()`.

## Overlap with `source/chatgpt-2026-10-30/`

- `source/chatgpt-2026-10-30/REVIEW.md` (section 2) says no dates are published for the 2027 NC state conference. The [NC state conference page](https://www.skillsusanc.org/copy-of-state-conference) (checked 6 November 2026) lists "2027 - April 21-23 - Greensboro". The dates in these files are correct.
- Both imports hold a Web Design training plan. The ChatGPT plan runs 12 weeks. The Claude plan runs 23 weeks with six phases. A coach must choose one plan, or merge them, before the site uses either.
- `source/chatgpt-2026-10-30/training-track-v0.1.md` already holds the Claude correction section ("Corrections and additions, 30 October 2026"), because the import came after the Drive edit. `chatgpt-drive-doc-corrections.md` is the same text for all three Drive docs. Errors 2 and 3 above apply to that section too.
