---
notetype: "automation"
status: "complete"
author: "Stephen Millard"
list: Alfred
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
Bypass is an [[Alfred]] workflow for [[Shortcuts]] that allows you to interact with that application in a variety of ways. As well as being able to list and trigger shortcuts, you can also edit shortcuts and get trigger links ([[URL Schemes|URL scheme]], [[Shell Scripting|shell script]], [[AppleScript]]).

# Notes
- Requires [[Shortcuts]], [[Alfred|Alfred 5]] (or higher), and a Alfred Power Pack licence.
- The name "*Bypass*" came from the interpretation that a 'shortcut' is a quicker way from getting from A to B, and a bypass is often a way to do this.
- Bypass not only supports text input to shortcuts, but also file input through file action functionality.
- Bypass allows reuse of some of its core functionality via external triggers.
- Bypass has snippet support for trigger generation.
- Bypass includes supporting functionality for [[PopClip]], and the [[Stream Deck|Elgato Stream Deck]].

# Links
- [Alfred - Bypass for Shortcuts](https://www.thoughtasylum.com/alfred/alfred_bypass_for_shortcuts/)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
