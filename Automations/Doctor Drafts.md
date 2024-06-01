---
notetype: "automation"
status: "complete"
author: "Stephen Millard"
list: Alfred
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
Doctor Drafts is an [[Alfred]] workflow for [[Drafts]] that allows you to interact with that application. The range of functionality is extensive covering areas of functionality such as:

- Creating drafts (text-based and verbal).
- Opening drafts.
- Searching for drafts.
- Copying the content of drafts.
- Modifying draft content.
- Switching [[Drafts]] workspaces.
- Accessing information about [[Drafts]].

# Notes
- Requires [[Keyboard Maestro]], [[Alfred|Alfred 5]] (or higher), and a Alfred Power Pack licence.
- Some of the functionality relies on [[Python|Python 3]] being installed.
- The workflow makes heavy use of external triggers making it extensible for users to utilise in their own custom [[Alfred]] workflows.
- Doctor Drafts supports [[Alfred]] file actions and universal actions.
- Doctor Drafts provides support for fallback searches.
- Doctor Drafts contains over 400 Alfred workflow steps!
- Doctor Drafts is so extensive [it has its own website](https://doctordrafts.thoughtasylum.com) covering installation, functionality, building your own workflows utilising the core functionality of Doctor Drafts, and technical documentation for each of the external triggers.
- The name "*Doctor Drafts*" came about from the keyword `dr` being used as a primary trigger for [[Drafts]], and "Dr" being a common abbreviation for "Doctor".
- The icon for Doctor Drafts is based on utilising elements of the Drafts app logo to form a cross shape a symbol used to represent medical aid, like that provided by a medical doctor, in many parts of the world.

# Links
- [Doctor Drafts](https://doctordrafts.thoughtasylum.com)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
