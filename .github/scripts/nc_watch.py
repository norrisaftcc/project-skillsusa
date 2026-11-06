#!/usr/bin/env python3
"""Watch the SkillsUSA NC competition guidelines page for changes that matter to FTCC.

The script fetches the page, finds the watched lines (each is one text block on
the page), and records each line's text and links. It compares the result with
the baseline file. Standard library only.

Usage:
  nc_watch.py check   BASELINE   Print a Markdown report. Exit 3 if a watched line changed.
                                 Any other non-zero exit is an error (for example, a failed fetch).
  nc_watch.py update  BASELINE   Write the current state to the baseline file.
  nc_watch.py show               Print the current state as JSON.
"""
import json
import re
import sys
import urllib.request
from html.parser import HTMLParser

URL = "https://www.skillsusanc.org/competition-guidelines"
USER_AGENT = "project-skillsusa-nc-watch (+https://github.com/norrisaftcc/project-skillsusa)"

# name -> rule for picking the text block. "starts" matches the start of the
# element's text; "contains" matches anywhere in it.
WATCHED = {
    "Web Design": ("starts", "Web Design"),
    "Computer Programming": ("starts", "Computer Programming"),
    "2027 Conference and Competition Packet": ("contains", "2027 Conference & Competition Packet"),
    "2027 Contest Spreadsheet": ("contains", "2027 Contest Spreadsheet"),
}


class Paragraphs(HTMLParser):
    """Collect the text and links of each text block (<p>, <h1>-<h6>, <li>).

    The page uses <p> for most contest lines but <h4> for some, so all are blocks."""

    BLOCKS = {"p", "h1", "h2", "h3", "h4", "h5", "h6", "li"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.items = []
        self.depth = 0
        self.text = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag in self.BLOCKS:
            if self.depth == 0:
                self.text, self.links = [], []
            self.depth += 1
        elif tag == "a" and self.depth:
            href = dict(attrs).get("href")
            if href:
                self.links.append(href)

    def handle_endtag(self, tag):
        if tag in self.BLOCKS and self.depth:
            self.depth -= 1
            if self.depth == 0:
                text = re.sub(r"\s+", " ", "".join(self.text).replace("​", "")).strip()
                if text:
                    self.items.append({"text": text, "links": self.links})

    def handle_data(self, data):
        if self.depth:
            self.text.append(data)


def fetch(url=URL):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", errors="replace")


def current_state(html):
    parser = Paragraphs()
    parser.feed(html)
    state = {}
    for name, (mode, needle) in WATCHED.items():
        hit = None
        for item in parser.items:
            text = item["text"]
            if (mode == "starts" and text.startswith(needle)) or (mode == "contains" and needle in text):
                hit = item
                break
        if hit is None:
            state[name] = {"found": False, "text": "", "links": []}
        else:
            # Keep link order, drop duplicates.
            links = list(dict.fromkeys(hit["links"]))
            state[name] = {"found": True, "text": hit["text"], "links": links}
    return state


def report(old, new):
    lines = []
    changed = []
    for name in WATCHED:
        a, b = old.get(name), new.get(name)
        if a == b:
            continue
        changed.append(name)
        lines.append(f"### {name}")
        if not b or not b["found"]:
            lines.append("The watched line is **no longer on the page** (or its wording changed).")
        if a:
            lines.append(f"- Before: {a['text'] or '(not found)'}")
        if b:
            lines.append(f"- Now: {b['text'] or '(not found)'}")
        added = [l for l in (b or {}).get("links", []) if l not in (a or {}).get("links", [])]
        removed = [l for l in (a or {}).get("links", []) if l not in (b or {}).get("links", [])]
        for l in added:
            lines.append(f"- New link: {l}")
        for l in removed:
            lines.append(f"- Removed link: {l}")
        lines.append("")
    return changed, "\n".join(lines)


def main(argv):
    if len(argv) < 2 or argv[1] not in {"check", "update", "show"}:
        print(__doc__)
        return 2
    state = current_state(fetch())
    if argv[1] == "show":
        print(json.dumps(state, indent=2))
        return 0
    if len(argv) < 3:
        print(__doc__)
        return 2
    path = argv[2]
    if argv[1] == "update":
        with open(path, "w", encoding="utf-8") as f:
            json.dump({"url": URL, "items": state}, f, indent=2)
            f.write("\n")
        print(f"Baseline written to {path}")
        return 0
    with open(path, encoding="utf-8") as f:
        baseline = json.load(f)["items"]
    changed, text = report(baseline, state)
    if not changed:
        print("No change in the watched lines.")
        return 0
    print(f"Watched lines changed on {URL}: {', '.join(changed)}\n")
    print(text)
    return 3


if __name__ == "__main__":
    sys.exit(main(sys.argv))
