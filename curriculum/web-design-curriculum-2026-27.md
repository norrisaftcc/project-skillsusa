# FTCC Web Design Training Curriculum 2026–27

As of 30 October 2026. Live, editable version: [Claude Doc](https://claude.ai/artifact/FAHGyetSdpsWWhACq7Mhv4). The season map diagram lives in the Claude Doc; the same data is in `season-outline-2026-27.xlsx`.

## Design basis

This plan takes a two-person team from basic HTML and CSS plus Python to contest conditions by the NC state conference on 21 April 2027. Coach support falls in five steps, and AI support ends before students work under contest rules.

**What the contest asks, as we understand it** (details and sources in [the verified baseline](../docs/02-verified-baseline.md)):

- A one-hour written exam aligned to the WPG CWDSA-apprentice certification. HTML and CSS are 50% of it. JavaScript is not a named exam domain.
- A one-day live client project for a team of two, about 8 a.m. to 3 p.m.: client interview, one hour of paper wireframes, coding in a WPG browser-based environment, a scope change after lunch, and interviews while coding continues.
- No templates, no front-end frameworks, no AI assistance. All code is written during the contest.
- Public judging areas (2026): UX and UI layout and responsiveness; semantic and accessible code; teamwork and agency professionalism.

**What this means for JavaScript.** Judges score the site and the team, not JavaScript as such. We set the JavaScript scope from the JavaScript topics of the [WPG Certified Web Developer Apprentice exam](https://webprofessionals.org/certification/cwdva/): variables and naming, data types, operators, comparisons, loops, functions, form interactions, and sanitizing input. Phases 1 and 2 cover that list. Anything beyond it is optional.

**Starting point (assumed).** Students have basic exposure to HTML and CSS. They can program in Python. They have no JavaScript.

**Suggested share of training time** (recommendation, not a rule):

| Strand | Share |
| --- | --- |
| HTML, CSS, responsive layout, accessibility | 40% |
| JavaScript (language, then browser) | 25% |
| Agency workflow: client interview, wireframes, teamwork, interviews | 20% |
| Written exam, including the non-code domains | 15% |

## Scaffolding ladder

Each topic starts high on the ladder and moves down as students show skill. By the last six weeks, all work runs at L1 or L0.

| Level | Coach gives | Students do | AI rule |
| --- | --- | --- | --- |
| L4 Model | A worked example, coded live or on paper, with each step explained | Predict output, annotate, then change one part and explain the result | Chat AI allowed as an explainer only: "why does this do X?" Never "write this." |
| L3 Complete | Starter code with gaps, a checklist or tests, the target screenshot | Fill the gaps, pass the checklist, explain each filled part | Explainer only, and only after 10 minutes stuck. Log each question. |
| L2 Guide | A written spec, an acceptance checklist, hint cards on request | Build from an empty file; ask for a hint card when stuck | None during the build. After the build, AI may critique the finished code; log what it found. |
| L1 Brief | A client brief and a time box only | Plan, build, test and explain without help; reference docs allowed | None |
| L0 Contest | Full contest day: role-play client, paper hour, scope change, interviews | Work as a team under contest rules and times | None |

**Hint cards.** At L2, each task has three hint cards. Card 1 is a nudge ("Which element holds a list of links?"). Card 2 points to a reference section. Card 3 shows a partial solution. Record the cards used. Fewer cards over time is the clearest sign of growth.

**When to move down a level.** Move a topic down one level when a student passes its exit check twice in a row with no hint card above card 1.

**Editor rule from week 1.** Turn off AI code completion in every practice editor (for example, Copilot in VS Code or Codespaces). Students must not learn to depend on autocomplete that the contest does not provide. Chat AI, where allowed above, runs in a separate window.

## How we build materials

We write every training material ourselves. Published WPG and SkillsUSA documents give us requirements; they are not a source of content.

| Requirement (source) | Material we build |
| --- | --- |
| Exam format and the ten topic areas with their topic lists ([CWDSA-apprentice](https://webprofessionals.org/certification/cwdsa/)) | A quiz bank of our own items, at least one per topic line, tagged by domain and weighted to the blueprint |
| JavaScript topics of the Web Developer Apprentice exam ([CWDVA-apprentice](https://webprofessionals.org/certification/cwdva/)) | JavaScript exercises for each topic, at every support level |
| Contest-day flow described in the [WPG 2026 recap](https://webprofessionalsglobal.org/2026-skillsusa-national-web-design-and-development-competition-recap/) | Our own fictional clients, briefs, scope changes and the four-hour sprint format (Phase 3) |
| Interview topics named in the 2026 recap | Our own interview question sets |
| Official rubric and 2026–28 standard, when received through SkillsUSA | Practice rubric weights and simulation rules |

**One task, five versions.** Each exercise is written once as a spec, then produced at L4 (worked example), L3 (starter code with gaps), L2 (spec, checklist, three hint cards), L1 (brief only) and, for builds, L0 (contest day). Students meet the same skill at falling support.

**External checkpoints, not materials.** The WPG certification exams are tests students sit; we do not train from them. The official rubric and rules come only through SkillsUSA.

**Rule for authors.** Do not copy text, questions or projects from vendor courses, prep guides or past contests. Each item names the requirement it covers in its header.

## Season map

Six phases run from 2 November to the state conference on 21 April. Each phase lowers the support level by about one step. Week 1 starts on 2 November 2026.

| Phase | Weeks | Dates | Support | AI rule |
| --- | --- | --- | --- | --- |
| 0 Diagnostic | 1 | 2–6 Nov 2026 | L1 | No AI |
| 1 JavaScript as a language | 2–6 | 9 Nov – 11 Dec 2026 | L4 to L3 | Chat AI explains only |
| 2 JavaScript in the browser | 7–11 | 14 Dec 2026 – 29 Jan 2027 | L3 to L2 | AI leaves the build |
| 3 Agency workflow | 12–15 | 1–26 Feb 2027 | L2 to L1 | No AI |
| 4 Contest simulation | 16–21 | 1 Mar – 9 Apr 2027 | L1 to L0 | No AI |
| 5 Taper | 22–23 | 12–20 Apr 2027 | L0 | No AI |

Fixed dates: planning gate target 1 Feb; regional rally at FTCC 19 Feb; membership deadline 1 Mar; NC state conference 21–23 Apr. Winter break (about 21 Dec – 3 Jan) is assumed and not counted as a week.

The planning gate should open before Phase 3, because Phase 3 and 4 builds copy contest rules and times.

## Phase 0: Diagnostic (week 1, 2–6 Nov)

Phase 0 measures where each student starts, so later gains are visible. All of it runs at L1 with no AI.

- [ ] Set up a browser-based practice editor for each student. Turn off AI completion.
- [ ] Start a practice log for each student (format in the Evidence section).
- [ ] Run the Community Resource Desk baseline from the Web Development training track: 75 minutes to build, 15 to test and explain.
- [ ] Run a 20-question diagnostic quiz across the ten exam domains. Record the score per domain.
- [ ] Name provisional roles: one design and UX lead, one front-end lead. Both still learn every skill.

## Phase 1: JavaScript as a language (weeks 2–6, 9 Nov to 11 Dec)

Students learn JavaScript as a second language by mapping it to Python, and they consolidate semantic HTML and CSS layout in parallel. Support moves from L4 to L3.

**JavaScript strand** (readings in *Eloquent JavaScript*, 4th edition):

| Week | Reading | Focus | Practice |
| --- | --- | --- | --- |
| 2 | Ch. 1–2 | Values, types, `let` and `const`, `===`, control flow | Port five short Python exercises to JavaScript; run them in the browser console |
| 3 | Ch. 3 | Functions, scope, closures, arrow functions | Rewrite the week 2 ports as functions; predict output of closure examples before running them |
| 4 (short week) | Ch. 4 | Objects and arrays as content data | Model a list of services as an array of objects; read and update fields |
| 5 | Ch. 5 | `filter`, `map`, `reduce`, `some`, `find` | Filter and sort the services array by category and name |
| 6 | Ch. 8, ch. 6 lightly | Errors, strict mode, `console`, testing by hand; read class syntax only | Find and fix five planted bugs; write three test calls per function |

**HTML and CSS strand** (MDN and the HTML/CSS reference set):

- Weeks 2–3: document outline and landmarks (`header`, `nav`, `main`, `footer`), heading order, lists for navigation, forms with labels. Validate every page with the W3C HTML checker.
- Weeks 4–5: box model, Flexbox for one-direction components, CSS custom properties for color and spacing.
- Week 6: CSS Grid for page layout; mobile-first media queries with `min-width`.
- Each week: rebuild one small page from a screenshot. Start at L3 (starter HTML given), end at L2 (empty file).

**Exit check (L2, no AI, 60 minutes):**

1. Given an array of 10 service objects, write functions that filter by category, sort by name and count per category. Explain each function in two sentences.
2. Build a two-section page with correct landmarks from a screenshot. It must pass the W3C HTML checker with zero errors.

## Phase 2: JavaScript in the browser (weeks 7–11, 14 Dec to 29 Jan)

Students use JavaScript to drive a page: read data, change the DOM and respond to events, always with accessible markup first. Support moves from L3 to L2, and AI leaves the build.

| Week | Reading | Build | Accessibility focus |
| --- | --- | --- | --- |
| 7 | EJ ch. 13–14 | Render the services array into cards with `createElement` and `textContent` | Why `innerHTML` with user input is a security risk (exam domain: security) |
| Winter break | None required | Optional: exam-domain reading | None |
| 8 | EJ ch. 15 | A mobile menu: a `button` that opens and closes the nav | `aria-expanded`, keyboard use, visible focus with `:focus-visible` |
| 9 | EJ ch. 18 (forms), ch. 9 lightly | A contact form: built-in HTML validation first, JavaScript checks second | Labels, error text linked with `aria-describedby` |
| 10 | MDN on `aria-live` | A filter: buttons or a search box filter the cards; show the result count | Announce the count politely; no layout jump |
| 11 | MDN on responsive images | Combine weeks 7–10 into one mobile-first page with a Grid card layout | Full audit: keyboard-only pass, contrast check, alt text, heading order, image size and format |

**Habits to lock in during this phase:**

- Build the HTML so it works and reads well before any JavaScript runs.
- Keep colors, spacing and type sizes in CSS custom properties. A scope change then means changing a few values, not rewriting rules.
- Run the W3C HTML checker and a keyboard-only test before calling any build done.

**Exit check (L2, no AI, 2 hours, pairs):** From a written spec, build a one-page site with a menu toggle, a filter and a contact form. It must pass the HTML checker, a keyboard-only test and a contrast check. Each student explains one component to the coach.

## Phase 3: Agency workflow (weeks 12–15, 1 Feb to 26 Feb)

The team learns to work as a two-person agency against a client and a clock. Support moves from L2 to L1. The 19 February regional rally at FTCC is a checkpoint if NC offers Web Design there.

**Skills drilled each week:**

1. **Client interview.** Students ask about audience, the main goal and call to action, brand and tone, content they must show, and what can wait for a later phase. Keep a one-page question sheet; retire it by week 15.
2. **Paper hour.** Sixty minutes on paper before any code: site map, mobile and desktop wireframes, content list. After the build, compare the site to the wireframes.
3. **Team protocol.** Agree who owns which files, when to hand off, and how to merge work. Practice talking through decisions out loud.
4. **Scope change.** Halfway through each build, the coach gives a client change. The team has 10 minutes to plan, then builds it without breaking what works.
5. **Interview while building.** One student leaves for a 5-minute interview while the other keeps coding. Questions follow the 2026 topics: design decisions, wireframe process, and why the client should hire the team.

**Our four-hour sprint** (local format built from the documented contest flow; not official timing). The deliverable is a responsive three-page site for one of our own fictional clients.

| Time | Step |
| --- | --- |
| 0:00–0:15 | Client interview |
| 0:15–1:15 | Paper hour: site map, mobile and desktop wireframes, content list |
| 1:15–1:30 | Handoff spec: the design lead writes colors, type scale, spacing and layout notes for the front-end lead |
| 1:30–3:45 | Build three pages; scope change at about 2:30; interviews during the build |
| 3:45–4:00 | Test: HTML checker, keyboard pass, contrast check, broken links |

UX methods from the exam blueprint (personas, user stories, journey maps, task analysis) are practiced on the same fictional clients during the interview and paper hour.

**Build schedule:**

| Week | Build | Level |
| --- | --- | --- |
| 12 | Our sprint cut to 3 hours, no scope change | L2 (hint cards available) |
| 13 | Full four-hour sprint with scope change | L2, cards 1–2 only |
| 14 | Regional rally on 19 Feb, or a four-hour sprint if Web Design is not offered | L1 |
| 15 | Four-hour sprint with scope change; interviews by a local business owner | L1 |

**Exit check (L1, no AI):** The week 15 build, scored with the practice rubric mapped to the three judging areas. The coach records points lost and the cause of each.

## Phase 4: Contest simulation (weeks 16–21, 1 Mar to 9 Apr)

The team rehearses full contest days under contest rules, with repair weeks in between. All work is L1 or L0.

- Odd weeks (16, 18, 20): a full L0 contest day, about 8 a.m. to 3 p.m. Use a client the students have not met. Invite an outside judge for at least one day.
- Even weeks (17, 19, 21): repair the three largest point losses from the last simulation; one short timed build.
- From week 18: one full 70-question, 60-minute practice exam each week.
- By 1 March: every competitor is a paid member.
- By about 2 April: confirm the team roster before the NC drop and substitution deadline.
- Week 21: dress rehearsal in contest attire, with printed resumes and the contest equipment list.

## Phase 5: Taper (weeks 22–23, 12 Apr to 20 Apr)

The team keeps skills sharp and arrives rested. No new topics.

- [ ] One half-day L0 build early in week 22.
- [ ] Fix the top two items from the practice logs.
- [ ] Pack: attire, printed resumes, two surge protectors, sketch pad, approved computers (2023–24 equipment list; confirm against 2026–28).
- [ ] Confirm contest day, time and room for 21–23 April.

If the team wins at state, a separate national plan covers the resume upload (3 June), the online PDT (17 June) and NLSC (21–25 June).

## Written exam strand

We write our own quiz items from the CWDSA-apprentice topic lists and teach each domain in the phase where students already use it, with a 10-question quiz each week. Two WPG certification exams serve as external checkpoints, and our own full 70-question, 60-minute practice exams start in week 18.

| Domain | Weight | Taught in | Topics to write items for (from the blueprint) |
| --- | --- | --- | --- |
| HTML | 25% | Phase 1 | Semantic markup, forms (GET versus POST, validation), data tables, iFrames, entities, file paths |
| CSS | 25% | Phase 1 | Cascade, specificity, box model, Flexbox, Grid, media queries, units, transitions and transforms; what LESS and Sass are |
| Accessibility and WCAG | 10% | Phase 2 | WCAG, ARIA, focus and DOM order, contrast, alt text, accessible tables and PDFs, screen readers |
| Web graphics | 10% | Phase 2 | Image formats and optimization, resolution and file size, SVG versus canvas, color theory, design principles |
| Internet basics | 6% | Phase 2 | DNS, hosting, HTTP and HTTPS, TCP/IP, IPv4 and IPv6, FTP and SFTP, absolute versus relative URLs, SEO, sitemaps, validation, CAPTCHA |
| Security basics | 3% | Phase 2 | Anti-malware, firewalls, DoS and DDoS, spam; `textContent` versus `innerHTML` |
| UX and UI design | 10% | Phase 3 | User interviews, personas, user stories, journey maps, task analysis, wireframes, usability and A/B testing, Hick's and Fitts's laws, visual hierarchy |
| Project management | 3% | Phase 3 | Scope and scope creep, Git and version control, backups, local, test and remote servers, releases, post-mortems |
| Web audio and video | 5% | Phase 3 | Streaming concepts, creating and optimizing media, podcasting |
| Legal and business issues | 3% | Phase 3 | Contracts, copyright, fair use, trademarks, Creative Commons, licenses, attribution, ROI |

**Certification checkpoints.** In week 11, students sit the [WPG Certified Web Designer Novice exam](https://webprofessionals.org/certification/certified-web-designer-novice-cwdsa-novice/). In week 17, they sit the [Apprentice exam](https://webprofessionals.org/certification/cwdsa/). Both use the contest exam format: 70 questions, 60 minutes, online. Track the score per domain, and spend Phase 4 repair time on the two weakest domains.

**Open:** Registration, cost and passing score for both exams, and whether Novice is easier than Apprentice. These are asked in the email to WPG. If the exams are not available in time, run our own 70-question exams in weeks 11 and 17 instead.

## Python to JavaScript bridge

Python students learn JavaScript fastest by mapping each idea to what they know, then drilling the places where the two languages differ. Give this table out in week 2 and test the traps in weekly quizzes.

| Python | JavaScript | Trap to drill |
| --- | --- | --- |
| `x = 5` | `let x = 5;` or `const x = 5;` | `const` stops reassignment, not changes inside an object or array. Do not use `var`. |
| `==` | `===` | `==` converts types: `"1" == 1` is `true`. Always use `===`. |
| Empty list or dict is falsy | Empty array `[]` and object `{}` are truthy | `if (items)` is true for an empty array. Test `items.length`. |
| `None` | `null` and `undefined` | A missing key gives `undefined`, not a `KeyError`. Errors appear later and far from the cause. |
| `int` and `float`; `7 // 2` | One `Number` type; `Math.floor(7 / 2)` | `7 / 2` is `3.5`. There is no `//`. |
| `f"Hi {name}"` | `` `Hi ${name}` `` | Backticks, not quotes. |
| `len(xs)`, `xs.append(v)`, `xs[-1]` | `xs.length`, `xs.push(v)`, `xs.at(-1)` | `xs[-1]` gives `undefined`, not the last item. |
| `for x in xs:` | `for (const x of xs) { }` | `for...in` on an array gives indexes as strings. Use `for...of`. |
| `dict` | Object `{}` or `Map` | Object keys are strings. Use `Object.keys` or `Object.entries` to loop. |
| `sorted(nums)` | `nums.toSorted((a, b) => a - b)` | `nums.sort()` with no function sorts as text: `[10, 9, 1]` becomes `[1, 10, 9]`. `sort` also changes the array in place. |
| List comprehension | `xs.filter(...).map(...)` | Chain left to right; each step returns a new array. |
| `def f(a, b):` | `function f(a, b) { }` or `const f = (a, b) => { }` | A missing argument becomes `undefined` with no error. |
| `try` / `except` / `raise` | `try` / `catch` / `throw` | Many mistakes give `undefined` or `NaN` instead of an error. Check values in the console. |
| Indentation | Braces and semicolons | Write the semicolons; do not rely on automatic insertion. |
| `print(x)` | `console.log(x)` | Output goes to the browser console, not the page. |
| Code runs top to bottom | Event handlers run later, when the user acts | The page code finishes before any click. State lives outside the handler. |

## Reference map

*Eloquent JavaScript* 4e is the core JavaScript text, but only about half of it serves the contest. *SICP JavaScript Edition* is optional depth, not contest preparation.

**Eloquent JavaScript, 4th edition:**

| Use | Chapters |
| --- | --- |
| Core | 1 Values, Types, and Operators; 2 Program Structure; 3 Functions; 4 Data Structures: Objects and Arrays; 5 Higher-Order Functions; 8 Bugs and Errors; 13 JavaScript and the Browser; 14 The Document Object Model; 15 Handling Events |
| Read in part | 6 The Secret Life of Objects (class syntax only); 9 Regular Expressions (form patterns); 18 HTTP and Forms (the forms part) |
| Optional for strong students | 7 Project: A Robot; 10 Modules; 11 Asynchronous Programming; 17 Drawing on Canvas |
| Skip for the contest | 12 Project: A Programming Language; 16 Project: A Platform Game; 19 Project: A Pixel Art Editor; 20 Node.js; 21 Project: Skill-Sharing Website |

**SICP, JavaScript Edition.** Use sections 1.1 to 1.3 (elements of programming, processes, higher-order functions) only for a student who finishes Phase 1 early and wants depth. It strengthens the week 3 and week 5 ideas. It does not cover the DOM, CSS or accessibility, so it adds little to contest scores.

**HTML and CSS documents.** Sort the stack by publication year before you assign anything.

- Material older than CSS Grid support in browsers (about 2017) may teach floats or tables for layout. Use it for history only.
- Use MDN Web Docs as the current reference for each element and property. Check the print material against it.
- Assign by topic, in the order of Phases 1 and 2: landmarks and forms, box model, Flexbox, Grid, responsive images, accessibility.

**Tools to use from week 2:** W3C HTML checker, W3C CSS validator, the browser's developer tools, a contrast checker, and keyboard-only testing. During the contest, judges run validation; students who check their own work first lose fewer points.

## Evidence and checkpoints

Each student keeps a dated practice log, and each phase ends with an exit check. Growth shows as fewer hint cards, fewer checker errors and smaller point losses on the same rubric.

**Practice log, one row per session:** date; task; support level; time allowed and time used; hint cards used; AI questions asked (L4 and L3 only); HTML checker errors; keyboard test pass or fail; contrast check pass or fail; defects found and fixed; coach note.

**Practice rubric for builds (internal, not official):** score each build on the three public 2026 judging areas, with equal weight until the official rubric arrives.

| Area | What the coach checks |
| --- | --- |
| UX and UI layout and responsiveness | Matches the brief and wireframes; clear hierarchy; works from narrow mobile to desktop |
| Semantic and accessible code | Landmarks and heading order; labels; keyboard use; visible focus; contrast; alt text; checker errors |
| Teamwork and agency professionalism | Client questions; handoffs; scope change handled; interview answers |

**Checkpoints:**

| Week | Checkpoint |
| --- | --- |
| 1 | Diagnostic build and quiz recorded |
| 6 | Phase 1 exit check |
| 11 | Phase 2 exit check; WPG Novice exam |
| 14 | Regional rally, if Web Design is offered |
| 15 | Phase 3 exit check |
| 16, 18, 20 | Full contest simulations |
| 17 | WPG Apprentice exam |
| 23 | NC state conference, 21–23 April |

**When the planning gate opens.** The gate opens when the advisor has the 2026–28 standard and written answers from SkillsUSA NC. Target: before Phase 3 starts on 1 February. Then update these items:

- [ ] Team size and roles, if NC changes them.
- [ ] The practice editor, to match the contest environment as closely as possible.
- [ ] Library, Internet and reference rules for every simulation.
- [ ] Phase timings in the Phase 3 and 4 builds.
- [ ] The practice rubric, replaced by the official rubric and weights.

If the gate is not open by 1 February, run Phase 3 on the 2026 public pattern and mark each simulation as provisional.

## Assumptions and open items

The plan rests on five assumptions about time and people. Change the week plan if any of them is wrong.

| Assumption | Effect if wrong |
| --- | --- |
| About 5 to 6 hours per week per student, including practice outside sessions | Fewer hours: cut the optional readings first, then shorten Phase 1 |
| Winter break runs about 21 December to 3 January, with no sessions | Shift Phase 2 weeks 8–11 to match the FTCC calendar |
| Thanksgiving week (23 November) is a short week | Move week 4 reading into week 5 |
| One team of two, both new to JavaScript | Two teams: run them side by side and swap clients in simulations |
| A coach or volunteer can role-play the client from week 12 | Without one, students write briefs for each other's team |

**Open:**

- [ ] How many hours per week can students give? Ask the students.
- [ ] Which browser-based editor will the team use for practice, and how close is it to the WPG contest environment? Ask the contest chair what the environment allows (for example, live editing by two people at once).
- [ ] Is Web Design offered at the 19 February regional rally? Ask SkillsUSA NC.
- [ ] WPG exam registration and cost, rubric access, and whether NC uses the WPG state contest package. Sent to WPG as one email.
- [ ] Who can act as an outside judge for one Phase 4 simulation? Ask local web agencies or the FTCC advisory board.
