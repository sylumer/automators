---
notetype: automation
status: complete
author: Rosemary Orchard
---

**Author:** `$="[[" + dv.current().author + "]]"`


# Overview
Rosemary created a set of automations to help her build packing lists for travelling. The automation begins with a shortcut that checks her calendar for all day events and then creates a new draft (in [[Drafts]]), and an [[OmniFocus]] task to actually do the requisite packing. The task is dated based on the trip and links to the draft via a URL.

The draft is used as. checklist for the packing, and there is an accompanying action group of actions to make the process of building and managing the list of items easier.


# Drafts Actions
The following Drafts actions are available in the Action Group.

- Manage Template List
- Tag Packing List
- Add Packing Items to List
- Sort Packing items
- Uncheck All
- What should I charge?
- Charge
- Delete Item

# Notes
- Emoji are used to do things like mark items for charging and to help sort related items - i.e. it is a way of applying visual tags - in the original post they are indicated as being categories.

# Links
- [Automators 33: Packing List Extravaganza in Drafts | Rosemary Orchard](https://rosemaryorchard.com/blog/automators-33/)
- [Packing Action Group](https://actions.getdrafts.com/g/1ZC)
- [Shortcuts - Create Packing List (Drafts & OF)](https://www.icloud.com/shortcuts/fdd67dbb01c14d749566441a07cfd1e9)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
