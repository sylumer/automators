---
notetype: "automation"
status: "complete"
author: "Stephen Millard"
list: Alfred
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
Conductor is an [[Alfred]] workflow for [[Keyboard Maestro]] that allows you to interact with that application in a variety of ways. As well as being able to list and trigger macros, you can also run macros delayed, and enable/disable macros and groups. Conductor also provides additional support that allows you to copy information from [[Keyboard Maestro]], such as a list of enabled macros, and to open any of the log files associated with [[Keyboard Maestro]].

# Notes
- Requires [[Keyboard Maestro]], [[Alfred|Alfred 5]] (or higher), and a Alfred Power Pack licence.
- Some of the functionality relies on [[Python|Python 3]] being installed.
- [[Keyboard Maestro]] plays upon a pianist being a maestro and this application enables you to be a maestro of a different keyboard. The name "*Conductor*" is taken from a similar musical theme being someone who might guide and support a maestro.
- The workflow makes heavy use of external triggers making it extensible for users to utilise in their own custom [[Alfred]] workflows.
- The list of logs available to a user is built dynamically to account for variations in available log files.

# Links
- [Conductor for Keyboard Maestro](https://www.thoughtasylum.com/alfred/alfred_conductor_for_keyboard_maestro)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
