---
notetype: automation
status: complete
author: Stephen Millard
aliases:
  - TAAG
  - TAAGS
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
The ThoughtAsylum Action Groups are a set of over 600 actions for use with the [[Drafts]] app. The group consists of one core library and six additional libraries providing specific sets of functionality. The action groups are some of the most popular actions for Drafts as they cover so many of the typical requirements for processing text.

# Action Groups
## ThoughtAsylum
- [Download Action Group: ThoughtAsylum]](https://actions.getdrafts.com/g/1aM)

> The core action group contains the all importance set-up action as well as a number of information and helper actions utilised by other actions in other ThoughtAsylum action groups. You must install and run the set-up action for this action group to use any of the other action groups.

## ThoughtAsylum - Writing
- [Download Action Group: ThoughtAsylum - Writing](https://actions.getdrafts.com/g/1cu)

> The writing action group contains actions that are designed to help you with writing content in Drafts. They allow you to insert, modify and remove content in a wide variety of ways. This action group should be useful to everyone who uses Drafts.

##  ThoughtAsylum - Management
- [Download Action Group: ThoughtAsylum - Management](https://actions.getdrafts.com/g/1cv)

> The management action group contains actions for working with drafts at the level above the content. Working with meta data, navigating drafts, working with workspaces. This action group should be useful to everyone who uses Drafts.

## ThoughtAsylum - Export/Import/Share
- [Download Action Group: ThoughtAsylum - Export/Import/Share](https://actions.getdrafts.com/g/1cw)

> The export/import/share action group is the next level along from draft management. It deals with getting draft related data into and out of Drafts. This can be via the clipboard, share sheet, files, etc. This action group should be useful to everyone who uses Drafts.

## ThoughtAsylum - Tasks & Lists
- [Download Action Group: ThoughtAsylum - Tasks & Lists](https://actions.getdrafts.com/g/1cy)

> The tasks and lists action group contains actions for working with lists including tasks in check lists. It can be thought of as a list specific extension to the writing action group. This action group should be useful to drafts users who use lists.

## ThoughtAsylum - Power User
- [Download Action Group: ThoughtAsylum - Power User](https://actions.getdrafts.com/g/1ct)

> The power user action group contains actions that are of use to Drafts users who are interested in writing their own scripting actions, and those who are interested in working with more advanced add-on features like custom meta data, or examining statistical information about the content and actions they have in drafts.

## ThoughtAsylum - Trove
- [Download Action Group: ThoughtAsylum - Trove](https://actions.getdrafts.com/g/1cx)

> The trove action group is a place to find a variety of other useful actions. These include actions for managing and working with the Drafts user interface for example. This action group is likely to be useful to everyone who uses Drafts.

# Notes
- The action groups should not be modified - you can create your own actions to include them. That way when an action group is updated, you don't lose any of your own work, and you can benefit from the changes.
- The action groups are based on the "TADpoLe" (ThoughtAsylum Drafts Library) library of [[JavaScript]] code for Drafts.
- The core action group can auto update the TADpoLe library in the background.
- The documentation linked below for the TAAGS actions is self-generated.

# Useful Links
- [ThoughtAsylum Action Group](https://www.thoughtasylum.com/taagd/) - documentation for all action groups and actions.
- [ThoughtAsylum Drafts Library](https://tadpole.thoughtasylum.com)
- [Drafts Script Reference](https://scripting.getdrafts.com)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
