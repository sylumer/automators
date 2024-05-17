---
status: "complete"
cssClasses: cards, cards-cover, cards-2-3, table-max
---
Welcome to the Automators rogues gallery where you can see the faces in front of many of the voices you have heard on the podcast.

```dataview
table without id 
	image,
	file.link as Title,
	choice(host, "🎙 Host", choice(guest,"🎧 Guest", "") ) as Role
from "People"
where notetype = "person"
    and file.name != "N.Person"
sort file.name Asc
```
