---
status: "complete"
---
This note lists episodes, and their status. It is just an aid while the backlog of episodes are processed to quickly check on what episodes are complete and which ones are still to process.

```dataview
TABLE
	choice(status = "complete", "🟢", "🟠") as "Status"
WHERE podcast = "Automators"
AND contains(file.path, "Episodes")
SORT published ASC
```



