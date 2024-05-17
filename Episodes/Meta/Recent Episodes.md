---
status: "complete"
---
```dataview
TABLE
	formattedduration as "Duration"
WHERE podcast = "Automators"
AND contains(file.path, "Episodes")
SORT published DESC
LIMIT 7
```

