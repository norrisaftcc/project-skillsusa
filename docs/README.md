# The Pages site

This folder is the GitHub Pages site. GitHub builds it with Jekyll. There is no build step in the repo. This file is not published (see `exclude` in `_config.yml`).

## Preview

```bash
gem install github-pages
```

```bash
jekyll serve --source docs --baseurl /project-skillsusa
```

## Files

| Path | Contents |
|---|---|
| `_config.yml` | Site title, `baseurl` (the repo name) and `checked`, the site-wide source check date. |
| `_data/dates.yml` | Key dates. The home page and the Dates page both read it. |
| `_data/watch.yml` | Official pages we watch, with the last check date and status. The home page and the Sources page read it. |
| `_includes/status.html` | The status label. Use `{% raw %}{% include status.html s="confirmed" %}{% endraw %}`, `s="unverified"` or `s="local"`. |
| `_layouts/default.html` | The one page layout. |
| `assets/site.css`, `assets/site.js` | Plain CSS and JavaScript. No framework, no external files. Every page works without the script. |

## Where the content comes from

| Page | Source in the repo |
|---|---|
| `web-design.md`, `computer-programming.md`, `dates.md`, `checklist.html` | `source/claude-2026-10-30/verified-baseline.md`, with the corrections in each `source/*/REVIEW.md`. |
| `practice/index.md` | `source/chatgpt-2026-10-30/10-student-training/field-manual-and-lab-catalog.md` and `source/chatgpt-guide-2026-10-09/practice-lab.md`. |
| `practice/baseline-01.md`, `mock-a.md`, `mock-b.md`, `mock-c.md` | The matching files in `source/chatgpt-2026-10-30/`. Changes: blank starter files instead of the missing ZIP starters; one evidence file name, `EVIDENCE.md`; a note on running each brief as a team of two. |
| `practice/scorecard.html` | The local rubric in `source/chatgpt-2026-10-30/baseline-01-coach-guide.md`. Not the official rubric. |

## Rules

- Follow the content rules in the repo `README.md`.
- Every contest rule on the site carries a status label and a source.
- When you check a watched page, update `checked` and `status` in `_data/watch.yml`. When you recheck the whole site, update `checked` in `_config.yml`.
- Do not publish the curriculum or the slide decks until a coach reviews them.
