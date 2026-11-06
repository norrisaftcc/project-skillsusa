---
title: Practice
kicker: Web Design and Development
lede: Short skill labs, timed client briefs and a team drill. Everything here is our own practice material, not an official contest task.
description: "Web Design practice for FTCC SkillsUSA teams: labs, timed briefs, a team drill, an evidence file and a practice scorecard."
---

<div class="callout" markdown="1">
<p class="callout-title">Practice rules</p>

Plain HTML, CSS and JavaScript. Start from blank files. No AI, no frameworks, no libraries, no templates. {% include status.html s="local" %} Use a browser-based editor when you can: the national contest uses an online coding environment, not your own computer's files.
</div>

## How to run any practice

1. Read the client request. Write down the user, the required facts and the limits.
2. Sketch the small-screen layout on paper first.
3. Build semantic HTML before any decoration.
4. Add responsive CSS, then only the JavaScript the brief asks for.
5. Test at 320 px, 768 px and desktop width. Do the main visitor task with the keyboard only.
6. Record one defect, the repair and the retest.
7. Explain one requirement: point to its code and to a test that passed.

## Practice as a team of two

The contest is for a team of two, and teamwork is one of the three judging areas. The briefs below were written for one student. Run them as a team:

- **Roles.** One design and UX lead, one front-end developer. Swap roles at the next session. Both must be able to explain the whole site.
- **Client interview.** A coach plays the client and holds back some facts until the team asks.
- **Paper hour.** Before any code, plan on paper: wireframes, a site map and a mood board. The 2026 contest gave one hour for this.
- **Handoff.** Agree on file structure, class names and color values before you split the work.
- **Interview while coding.** The coach calls the team away for a short interview while the build continues.
- **Client change.** After a break, the coach gives a change. Keep what works, add the change, and retest the old features.

## A four-hour team drill

| Time | Step | Work |
|---|---|---|
| 0:00–0:20 | Read the client brief | Find the audience, the required content and the most important visitor task. Turn the brief into an acceptance checklist. |
| 0:20–0:50 | Plan the experience | Sketch the page structure and navigation on paper, with a narrow-screen view. Agree on type, colors, file structure and handoffs. |
| 0:50–2:50 | Build a first complete version | Semantic HTML, responsive CSS, purposeful JavaScript. Build the main visitor journey first. Keep an asset-source log and short decision notes. |
| 2:50–3:30 | Test and refine | Keyboard, focus, form labels, contrast, narrow screens, broken paths, core interactions. Validate the markup. Fix the defects that matter most. Record what you checked. |
| 3:30–4:00 | Explain and debrief | Both partners demonstrate the site and explain a design choice, a technical decision and a tradeoff. Score it on the [practice scorecard](scorecard/). Pick one improvement for next time. |

## Client briefs

All names, facts and `.example` email addresses are fictional. The times are local practice targets.

| Brief | Target time | What it practices |
|---|---|---|
| [Baseline 01: Community Resource Desk](baseline-01/) | 90 min | A first independent build: three services, a category filter, a 320 px layout. |
| [Mock A: Riverbend Neighborhood Festival](mock-a/) | 180 min | Four activities, an accessible filter with an announced result count. |
| [Mock B: Cedar Lab Workshop Directory](mock-b/) | 240 min | Six workshops, a topic filter combined with a text search, an empty state, a reset. |
| [Mock C: Pinewood Housing Resource Navigator](mock-c/) | 300 min | Open-ended planning, discovery questions, privacy-aware informational design. |

Coaches hold the change cards for each brief. They are not on this site.

## Skill labs

Short clinics for one skill. The full lab prompts are not on the site yet.

| Lab | Skill | Time | Task |
|---|---|---|---|
| LAB-01 | Client questions and wireframes | 25 min | Five discovery questions, three acceptance criteria and a mobile layout sketch. |
| LAB-02 | Semantic structure | 35 min | Page landmarks, headings, anchor navigation and unique IDs. |
| LAB-03 | Accessible contact form | 40 min | Labels, validation text and keyboard submission. |
| LAB-04 | Responsive card layout | 40 min | Grid or Flexbox cards at three widths with no overflow. |
| LAB-05 | CSS cascade and focus | 35 min | Fix competing selectors; prove keyboard focus stays visible. |
| LAB-06 | Category filter | 45 min | Filter six records with a native select; update the visible count and restore All. |
| LAB-07 | Accessible disclosure | 45 min | An FAQ with native details and summary, or a correct stateful button. |
| LAB-08 | Images and alternatives | 35 min | Keep the aspect ratio, check local paths, write proper alternative text. |
| LAB-09 | Search and data accuracy | 35 min | Data-driven search, case-insensitive matching and a helpful empty state. |
| LAB-10 | Repair and regression | 50 min | Find five common defects and prove each fix. |

## The evidence file

Every build ends with a file named `EVIDENCE.md` next to your code. It holds:

1. **Audience and main task.** Who visits, and what they must be able to do.
2. **Requirements.** Each requirement from the brief, with pass or fail.
3. **Tests.** At least one passed test and one failed test, with what you did.
4. **Repair.** The failed test, the cause, the fix and the retest.
5. **Keyboard and narrow-screen checks.** What you tried and what happened.
6. **Asset-source log.** Where each image, icon or font came from, and its license.
7. **Known limitations and next steps.**

## Quality check

**Can a visitor use it?**

- Move through the page with Tab, Shift+Tab and Enter. Focus stays visible.
- Every image has a suitable text alternative. Every form field has a label.
- At 320 px and at 200% zoom, nothing is lost and nothing scrolls sideways.
- Every required link, button and form path works. The browser console shows no errors.

**Can the team explain it?**

- Connect the layout to the visitor's main task.
- Explain a CSS or JavaScript decision in your own words.
- Show a bug you found and how you proved the fix.
- Explain a tradeoff you made to finish on time.

## Reference while you practice

- [MDN: Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) (train to level AA)
- [W3C HTML checker](https://validator.w3.org/nu/) and [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
- [WPG CWDSA exam topics](https://webprofessionals.org/certification/cwdsa/)

Using a reference in practice does not mean the contest allows it.

## Words to know

| Term | Meaning |
|---|---|
| UX / UI | User experience / user interface: how the site works for people, and how they interact with it. |
| Wireframe | A simple plan of content, navigation and layout, before visual design. |
| Semantic HTML | Elements chosen for their meaning, such as a button for an action and a heading for a section title. |
| Regression test | A retest of features that worked before a change, to prove they still work. |
| PDT | The SkillsUSA Professional Development Test. It is separate from the technical exam. |
| SLSC / NLSC | State / National Leadership and Skills Conference. |
