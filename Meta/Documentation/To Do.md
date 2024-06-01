---
status: "complete"
---
# Publish
- [x] Finish the GitHub Docs
- [x] Set up Git Ignore file

# Episodes
- [x] Spell check each episode.
- [ ] Add internal links to each episode out to technology and automations.
	- This is the really big one....
- [ ] Check for verbally expressed URLs - particularly in ad-reads: "` slash `".
	- [ ] Consideration for slash occurring at end or start of a line of content.

# People
- [ ] Update Twitter to include references to "X".

# Technology
- None.

# Automations
- [ ] Build [[Automations List - By App]] output.
	- [ ] Update automation content with array of reference systems.
	- [ ] Create automation template.
		- [ ] Include section to link out to systems.

# Dashboard
## Vault Stats
- [x] Rework Notes to Create so it isn't counting notes multiple times.

## Episode Stats
- [x] Add number of sponsors stat.
- [ ] Remove templates from incomplete links count.
- [ ] Add longest episode length.
- [ ] Add average episode length.
	- Needs to exclude episode 0.
- [x] Add total episode length.
- [ ] Modify the total episode duration so that hours and minutes are always exactly two digits.

## Charts
- [ ] Add a chart of recent episode lengths

## Sponsors
- [ ] Build a DataView count of number of episodes a sponsor has sponsored.
	- Would be useful to be able to sort a listing by this number too.

# Build Process
- [ ] Improve use of existing Data Jar content by helper shortcuts rather than rebuilding existing content - e.g. padded/unpadded episode number.
- [X] Automate the download and transcription.

# Style
- [/] Restyle the graph so links and dark nodes show up better in dark mode.
	- [X] Nodes
	- [x] Node Links
	- [ ] Tweak style so podcast calendar navigation chevrons show up clearly rather than faintly
- [ ] Figure out why the editor syntax highlighting plugin is not working for code blocks, but is for code blocks within other blocks - e.g. code in comment blocks.

# Known Issues Yet to Resolve
## DataView Display
> `dataviewjs` blocks are not rendering consistently. They appear, then can disappear. Navigating the cursor through them will cause them to appear once again. It is some sort of rendering/timing issue. It could be cause by a conflict with something else or be a bug - bit I have not been able to find anyone that definitively has this issue, but I have the same behaviour now in two separate Obsidian vaults.

- [x] Check if any plugins are conflicting with dataview.
	- Behaviour inconsistent on first round of testing. Not yet able to identify an action that will make the content disappear - that would be ideal to make the testing rigorous and quicker.