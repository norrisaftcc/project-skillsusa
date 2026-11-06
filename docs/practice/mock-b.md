---
title: "Mock B: Cedar Lab Workshop Directory"
kicker: Practice brief · 240 minutes
lede: A directory with a topic filter and a text search that work together. Practice exercise only, not an official SkillsUSA prompt.
---

## Client

Students and residents need to compare skill workshops with a topic selector and a text search. The site must show exact workshop facts and a reliable empty state. All data and addresses are fictional.

## Approved workshop facts

- Organization: Cedar Lab Workshop Directory.
- Contact: classes@cedarlab.example

| Workshop | Topic | Date | Time | Room |
|---|---|---|---|---|
| HTML Basics | Web | 2 June 2027 | 9:00 a.m. | Lab A |
| Portfolio Clinic | Career | 2 June 2027 | 1:00 p.m. | Room 12 |
| Intro to Python | Coding | 3 June 2027 | 10:00 a.m. | Lab B |
| Resume Design | Career | 3 June 2027 | 2:00 p.m. | Room 12 |
| Accessible Pages | Web | 4 June 2027 | 11:00 a.m. | Lab A |
| Debugging Workshop | Coding | 4 June 2027 | 3:00 p.m. | Lab B |

## Acceptance criteria

1. Semantic page structure, primary navigation, the exact six workshop records and accessible controls.
2. A topic selector with All, Web, Coding and Career.
3. A text search that matches workshop titles, not case-sensitive.
4. Both controls work together. The visible count is always correct.
5. An empty-state message when no workshop matches.
6. A reset control that clears both controls and shows all six workshops.
7. Works at 320 px, 768 px and desktop, with keyboard focus, no sideways overflow and no JavaScript errors.
8. `EVIDENCE.md` with six or more tests, one repaired defect and a short explanation of how you handle the data.

## Hand in

Hand in the source files, a small-screen wireframe and your test notes. The coach will give any change after the first code freeze. Do not invent workshop information that the client did not give.

Target time: 240 minutes. {% include status.html s="local" %}
