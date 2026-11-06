# Notes for agents

Read README.md first. It gives the layout and the content rules.

- More than one agent works on this repo. Work on your own branch and open a pull request. Do not push to `main`.
- Keep each change in one area (one `source/` folder, or one part of `docs/`) so that pull requests do not conflict.
- New import: make a new folder `source/<origin>-<YYYY-MM-DD>/` with the verbatim files, a `MANIFEST.md` and a `REVIEW.md`. Follow `source/chatgpt-2026-10-30/` as the pattern.
- Do not edit the imported files in an existing `source/` folder. You can edit its `REVIEW.md` and `MANIFEST.md`.
- This repo is public. Never commit SkillsUSA Technical Standards text, answer keys, change cards, reference solutions or other instructor-only material anywhere in it. Instructor-only material stays in Google Drive. In the import's `MANIFEST.md`, list each file you leave in Drive and give the reason.
- Check a contest rule against a public official source before you call it confirmed. Record the URL and the date.
- Writing style: short sentences, active voice, one instruction per sentence (Simplified Technical English).

## Updating the site

The site is at https://norrisaftcc.github.io/project-skillsusa/. GitHub Pages builds it with Jekyll from `docs/` on `main` (Settings → Pages → Deploy from a branch → `main`, `/docs`). There is no build workflow. A merge to `main` that changes `docs/` goes live in a few minutes. `docs/README.md` maps each page to its source.

**Common updates**

- **A watched page was checked.** In `docs/_data/watch.yml`, change `checked` and `status` for that entry. The home banner and the Sources page read this file.
- **A date changed or was confirmed.** Edit `docs/_data/dates.yml`. Keep `status` and the source URL. The home page and the Dates page read this file.
- **A rule changed status.** Edit the page. Use the status include: `{% include status.html s="confirmed" %}`, `s="unverified"` or `s="local"`. Give the source URL and the check date. A fact from an older standard or season is Unverified for the current season.
- **The whole site was rechecked.** Change `checked` in `docs/_config.yml`. The footer shows it.
- **The NC 2027 Web Design or Computer Programming document is posted.** Update the matching entry in `watch.yml`. Then update every rule it changes on the contest page, with the NC document as the source.
- **An `nc-watch` issue opens.** The workflow `.github/workflows/nc-watch.yml` checks the [NC competition guidelines page](https://www.skillsusanc.org/competition-guidelines) every day at 11:23 UTC. It watches four lines: Web Design, Computer Programming, the 2027 Conference and Competition Packet, and the 2027 Contest Spreadsheet. When one changes, it opens an issue labelled `nc-watch` (or updates the open one). Do the update above. In the same pull request, run `python3 .github/scripts/nc_watch.py update .github/nc-watch/baseline.json` and commit the new baseline. Close the issue when the pull request merges. To watch another line, add it to `WATCHED` in `.github/scripts/nc_watch.py` and update the baseline. If the workflow fails, the page is down or its layout changed; run `python3 .github/scripts/nc_watch.py show` to see what the script finds.
- **GitHub disables scheduled workflows** after 60 days with no commits to the repo. If the watch stops, re-enable it in the Actions tab.

**Rules for site content**

- Publish only reviewed content from `source/`. No Technical Standards text, no official rubric weights, no change cards or answer keys.
- Do not publish the curriculum or the slide decks until a coach reviews them.
- Use US spelling.
- Plain HTML, CSS and JavaScript. No frameworks and no external scripts or fonts. Every page must work without JavaScript.
- Use `relative_url` for internal links. The site lives under `/project-skillsusa/`. If the repo is renamed, change `baseurl` in `docs/_config.yml`.

**Before you open a pull request**

1. Build the site with the same gem versions GitHub uses:

   ```bash
   gem install github-pages
   jekyll build --source docs --destination _site --baseurl /project-skillsusa
   ```

   The build must show no errors or warnings. A colon in an unquoted front-matter value breaks the page.
2. Serve `_site` under `/project-skillsusa/` and open every changed page at 1280 px and at 320 px, in light and dark mode. Check for console errors, broken internal links and sideways scrolling. Tables with three or more columns scroll inside their own box on narrow screens; the page itself must not.
3. Do not commit `_site/`.

**After you open a pull request**

The Copilot reviewer reviews each pull request, sometimes after the merge. Read its findings. Fix the real ones in a follow-up pull request, and reply on each thread with what changed or why not.
