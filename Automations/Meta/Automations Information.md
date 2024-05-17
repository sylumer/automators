---
status: "complete"
---
# Automations Information
Details for the following automations referenced on the podcast can be found in this vault.
```dataview
TABLE WITHOUT ID
	file.link as "Automation",
	"[[" + author + "]]" as "Author"
WHERE notetype = "automation"
	AND contains(file.path, "Automations")
SORT file.name ASC
```
