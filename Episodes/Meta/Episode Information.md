---
status: "complete"
---
# Episode Information

```dataview
TABLE WITHOUT ID
	file.link as "Episode",
	published as "Published",
	"[[" + join(hosts, "]], [[") + "]]" as "Hosts",
	choice(length(guests) = 0, "\-", "[[" + join(guests, "]], [[") + "]]") AS "Guests",
	"<span style='font-family:monospace'>" + formattedduration + "</span>" as "Duration",
	"<progress max='7200' value='" + duration + "'></progress>" as ""
WHERE podcast = "Automators"
	AND contains(file.path, "Episodes")
SORT published ASC
```
