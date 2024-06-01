---
notetype: "automation"
status: "complete"
author: "Stephen Millard"
---

**Author:** `$="[[" + dv.current().author + "]]"`

# Overview
Cluster is an [[Alfred]] workflow for [[Bunch]] that allows you to manage your bunches (open, close, toggle, create, edit, delete, backup, archive/unarchive), the bunch app (a variety of settings, including being able to switch bunch folders), and access documentation relating to [[Bunch]] (and Cluster).

# Notes
- Requires [[Bunch]], [[Alfred|Alfred 5]] (or higher), and a Alfred Power Pack licence.
- The workflow makes heavy use of external triggers making it extensible for users to utilise in their own custom [[Alfred]] workflows.
- Cluster supports both the standard [[Bunch]] app and the beta, independently.
- You can specify your own triggers for Cluster commands in the configuration.
- Cluster is the first [[Alfred]] workflow released that utilises  [the pseudo function approach for Alfred workflows](https://www.thoughtasylum.com/2024/02/29/pseudo-functions-in-alfred-workflows/).
- Cluster contains almost 250 Alfred workflow steps.
- Cluster is so extensive [it has its own website](https://cluster.thoughtasylum.com).
- Collective nouns for collections of grapes include both "bunch", and "cluster".

# Links
- [Cluster (for Bunch)](https://cluster.thoughtasylum.com)

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
