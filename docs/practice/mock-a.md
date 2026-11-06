---
title: "Mock A: Riverbend Neighborhood Festival"
kicker: Practice brief · 180 minutes
lede: A festival schedule with an accessible category filter. Practice exercise only, not an official SkillsUSA prompt.
---

## Client

Residents need to choose activities at the fictional Riverbend Neighborhood Festival on Saturday, 15 May 2027. All event information is fictional. **Main visitor task:** find an activity by category and see its start time and location.

## Client-approved facts

- Event location: Riverbend Park, 100 Park Lane, Riverbend.
- Information: info@riverbend.example

| Activity | Category | Start | Location |
|---|---|---|---|
| Pondside Yoga | Wellness | 9:00 a.m. | Meadow Lawn |
| Neighborhood Makers | Arts | 10:30 a.m. | Craft Hall |
| Code Discovery Lab | Learning | 11:15 a.m. | Innovation Tent |
| Community Concert | Arts | 2:00 p.m. | Main Stage |

## Acceptance criteria

1. A clear page title, the event date and location, a skip link, landmarks and navigation.
2. Four activity cards with the exact names, categories, times and places.
3. An accessible native select filter with All, Wellness, Arts and Learning.
4. An accurate result count that screen readers announce. Choosing All shows all four again.
5. No overflow at 320 px, 768 px or desktop width. Readable content and visible keyboard focus.
6. A contact email link. No broken files and no console errors.
7. Written client questions, one mobile wireframe, and `EVIDENCE.md` with pass and fail tests and one repaired defect.

## Hand in

Hand in `index.html`, `styles.css`, `app.js` and any assets, with relative paths. Explain how your layout helps a visitor find a suitable event.

The coach may give a timed change after the first code freeze. Do not assume the facts will stay the same.

Target time: 180 minutes. {% include status.html s="local" %}
