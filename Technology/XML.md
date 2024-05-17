---
status: "complete"
alias: ["Extensible Markup Language"]
notetype: "technology"
---

# Overview
XML is the acronym for *e**X**tensible **M**arkup **L**anguage*, and is a way of defining structured data. It is a plain text format file type that utilises a tag-based approach (like [[HTML]]) to associate types and attributes with a string of text.

XML files should be defined to meet the requirements specified in an XML schema file. The schema helps provide additional logical definitions around what makes sense in terms of the data structures. These schema are defined in a *Definition Type Document* (DTD).

## Valid and Well Formed
When an XML file is free from syntactic errors, it is said to be **well formed**. If it also meets the requirements of the DTD it is associated with, then the XML file is also said to be **valid**.

# Notes
- XML is user defined, but must be parsed to be used.
- XML tags are case sensitive. `<abc />` is different to `<Abc />`, which is different to `<ABC />`, etc.
- XML is a a subset of [[SGML]].

# Useful Links
- [Extensible Markup Language (XML) 1.0 (Fifth Edition)](http://www.w3.org/TR/REC-xml/)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
