## What assumptions did you make?
- The dashboard is used by internal users and not public traffic.
- Data size is small and static (JSON-based mock data).
- Backend APIs return clean and predictable data.
- Authentication and role-based access are out of scope for this assignment.

---

## What data issues did you find?
- JSON data did not always match chart requirements directly.
- Some values needed transformation (grouping by month, totals).
- Missing or zero values required safe handling to avoid chart breakage.
- Date labels needed formatting for proper X-axis display.

---

## What tradeoffs did you choose?
- Focused more on UI clarity and chart readability than advanced analytics.
- Kept backend lightweight rather than adding validation layers.
- Chose simple REST APIs instead of real-time updates.

---

## What would break at 10× scale?
- JSON-based data loading would not scale well.
- Backend would need pagination, caching, and a database.
- Charts may become slow with large datasets.
- API response time could degrade without optimization.

---

## What did AI help with vs what you decided?
**AI helped with:**
- Structuring the project and folder organization.
- Improving chart configuration and layout ideas.
- Refining README and documentation wording.

**I decided:**
- Component structure and dashboard layout.
- Data transformations for charts.
- UI styling and visual hierarchy.
- Which features to include or exclude based on scope.
