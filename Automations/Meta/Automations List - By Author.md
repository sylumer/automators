---
status: "complete"
---
# Author Listings of Automations
Details for the following automations referenced on the podcast can be found in this vault.
```dataview
LIST rows.file.link
WHERE notetype = "automation"
	AND contains(file.path, "Automations")
GROUP BY "<span style='font-size:1.2em; color:#E47F30'>Automations by [[" + author + "]]</span>"
SORT file.name ASC
```
