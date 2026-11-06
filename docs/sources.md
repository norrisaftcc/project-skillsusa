---
title: Sources
kicker: How we check
lede: Where each fact on this site comes from, what we are waiting for, and how we keep the site current.
description: Sources, watch list and checking process for the FTCC SkillsUSA preparation site.
---

## What we watch

We check these official pages for new information. The table shows the last check.

| Waiting for | Page | Last checked | Status |
|---|---|---|---|
{%- for w in site.data.watch %}
| {{ w.name }} | [{{ w.page }}]({{ w.url }}) | {{ w.checked | date: "%-d %b %Y" }} | {{ w.status }} |
{%- endfor %}

When NC posts its 2027 Web Design document, we will update the [Web Design page]({{ '/web-design/' | relative_url }}) and mark each changed rule with its source and date.

## Labels

| Label | Meaning |
|---|---|
| {% include status.html s="confirmed" %} | A public official source states it. The page names the source. The check date is next to the source, or it is the site check date below. |
| {% include status.html s="unverified" %} | No current official source confirms it yet. It comes from an older standard, from the 2026 contest, or it is an open question. |
| {% include status.html s="local" %} | Our own practice rule or advice. It is not a contest rule. |

Site check date: {{ site.checked | date: "%-d %B %Y" }}.

## Official sources

**SkillsUSA (national)**

- [Technical Standards: member access through Pathful](https://www.skillsusa.org/competitions/skillsusa-championships/technical-standards/)
- [Competition updates](https://www.skillsusa.org/competitions/skillsusa-championships/competition-updates/)
- [National Leadership and Skills Conference](https://www.skillsusa.org/events/national-leadership-skills-conference/)

**SkillsUSA North Carolina**

- [Competition guidelines](https://www.skillsusanc.org/competition-guidelines), including the [2027 contest spreadsheet](https://www.skillsusanc.org/_files/ugd/6b19e9_efad3706b29c4f399bbf880372bda92e.xlsx?dn=Contest+Spreadsheet+27.xlsx)
- [State conference](https://www.skillsusanc.org/copy-of-state-conference) and [state conference information (2026)](https://www.skillsusanc.org/state-conference-information)
- [Regional rallies](https://www.skillsusanc.org/regional-rallies)
- [Membership deadline](https://www.skillsusanc.org/skillsusa-membership-deadline) and [join and dues](https://skillsusanc.org/join)

**Web Professionals Global (runs the Web Design contest)**

- [2026 national contest recap](https://webprofessionalsglobal.org/2026-skillsusa-national-web-design-and-development-competition-recap/)
- [CWDSA exam topics](https://webprofessionals.org/certification/cwdsa/)
- [Contest FAQ](https://webprocontests.org/faq)

**Older national standards (public copies posted by schools)**

These are the previous editions. We use them only where the current standard is not public, and we mark those facts {% include status.html s="unverified" %}.

- [Web Design and Development, 2023–24](https://resources.finalsite.net/images/v1700063899/gcitorg/xarycrundehj64ktd4ef/WebDesignandDevelopment2023-24.pdf)
- [Computer Programming, 2024–26](https://resources.finalsite.net/images/v1731606870/mntechnologycom/zuf7qkvhzy47udu1mk51/ComputerProgramming2024-26.pdf)

## What this site does not include

- **Technical Standards text.** SkillsUSA says the standards "may not be posted or shared in any publicly accessible location". Members read them in Pathful.
- **The official rubric.** It is member material.
- **Instructor-only material.** Change cards, answer keys and reference solutions stay with the coaches, so that practice stays fair.

## Found a mistake?

Tell your coach, or [open an issue on GitHub](https://github.com/norrisaftcc/project-skillsusa/issues). Include the page, the statement and the source that disagrees with it.
