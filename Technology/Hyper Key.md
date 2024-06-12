---
status: complete
creator: Guy Steele
notetype: technology
---

# Overview
A Hyper Key is a modifier key, similar to `SHIFT` or `CTRL` that can be sent to a computer in combination with other keypresses. The intention is that it then acts as a modifier, and the computer's operating system or a particular application can then take action on that.

# History
Originally, the Hyper Key idea was conceived by computer scientist Guy Steele in the 1970s. It was actually a physical key on keyboards such as [the space-cadet keyboard](https://en.wikipedia.org/wiki/Space-cadet_keyboard).

The Hyper Key is not typically found on standard keyboards these days, and instead, is often implemented by repurposing existing keys like Caps Lock or using advanced keyboard mapping software, with the the Hyper Key serving as a combination of other modifier keys.

The most utilised combinations are  `CTRL + ALT + WIN + SHIFT` or `CTRL + OPT + COMMAND + SHIFT` as these are difficult to easily press and when implementing a Hyper Key set up this gives easiest access to a range users would typically not opt to use.

# Benefits
- **Increased Productivity:** A Hyper Key can streamline workflows by providing an easily accessible range of additional keyboard shortcuts.
- **Simplification:** Instead of performing intricate key combinations involving multiple modifier keys, a single Hyper Key can achieve the same result with less effort.

# Challenges
- **Compatibility:** Not all applications or operating systems support the use of a Hyper Key. Users may need to rely on third-party software for implementation, which adds complexity.
- **Configuration:** Setting up a Hyper Key can be complicated based on the tooling available.
- **Learning Curve:** A large volume of additional keyboard shortcuts can create a cognitive load that can make it difficult for users to recall what they have configured.

# Creating a Hyper Key
Several applications and tools support defining a Hyper Key, as well as many custom keyboard configuration and key mapping utilities.

Please note that this list is not intended to be exhaustive:

- Linux
	- [[xmodmap]]
- macOS
	- [[BetterTouchTool]]
	- [[Hammerspoon]]
	- [[Karabiner-Elements]]
- Windows
	- [[AutoHotKey]]

# Episodes
```dataviewjs
await dv.view("/Meta/Scripts/Dataview/dv_ListedInEpisodesTable");
```
