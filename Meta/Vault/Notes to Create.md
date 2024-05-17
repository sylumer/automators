---
status: "complete"
---
# Notes to be Created

```dataviewjs
const result = await dv.query("TABLE FLATTEN file.outlinks as out WHERE !(out.file) AND !contains(meta(out).path, \"/\") GROUP BY out")
dv.paragraph("The following " + result.value.values.length + " links are to notes that have not yet been created.")
```

```dataviewjs
let results = Object.entries(dv.app.metadataCache.unresolvedLinks).filter(([k,v]) => Object.keys(v).length).flatMap(([k,v]) => Object.keys(v).map(x => dv.fileLink(x)));

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
dv.list(results.sort().filter(onlyUnique));
```

The orphan links can be found in the following notes.

```dataview
TABLE without id 
	link(meta(out).path, meta(out).path) AS "Referenced Note", 
	out as "Linked As",
	file.link as "Linked From"
FLATTEN file.outlinks as out
WHERE !(out.file) AND !contains(meta(out).path, "/")
SORT out ASC
```
