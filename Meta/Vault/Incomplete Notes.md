---
status: "complete"
---
# Incomplete Notes

The following `$= dv.pages().where(page => page.status == "incomplete").length` notes are only partially complete and need expanding on.
```dataview
LIST
FROM -"Meta/Templates"
WHERE status = "incomplete"
SORT file.name
```
