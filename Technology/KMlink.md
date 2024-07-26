---
status: complete
creator: Corcules
notetype: technology
---

# Overview
KMlink is a [[Stream Deck ]]plugin for the [[Stream Deck|Elgato Stream Deck]]software. It provides a user interface when creating new [[Stream Deck]] button actions that allow you to select from a list of available [[Keyboard Maestro]] macros and link the action to the macro. This allows you to easily launch [[Keyboard Maestro]] macros using a single step action for a [[Stream Deck]] button.

- [GitHub Repo: KMlink](https://github.com/Corcules/KMlink)

# Notes
## BetterTouchTool
[[BetterTouchTool]] does not support the plugins for the [[Stream Deck|Elgato Stream Deck]]. To launch [[Keyboard Maestro]] macros from [[BetterTouchTool]], the simplest way is probably to open the URL for triggering the macro. Using the ID-based URL will ensure that if you rename your macro, the trigger will still work.

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
