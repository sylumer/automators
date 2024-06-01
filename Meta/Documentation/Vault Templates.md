---
status: "complete"
---
# Overview
The templates used in this vault are applied through the use of the [[Obsidian Templater]] plugin. This allows for more sophisticated plugins than Obsidian's core template plugin.

When the templates are inserted into a note, they may prompt for or read in from file additional input that is then used to either modify the file in some way (e.g., inserting text), or to trigger some sort of action.

Templates are held in the `Meta/Templates` folder structure within this vault.

# Template Categories
Templates have been categorised and placed in sub-folders based on their functionality.

## Callouts
Callouts are nicely formatted quotation blocks. They are intended to impart particular types of information to the reader such as tips or warnings.

| Template File                          | Description                                                                                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------- |
| [[C.Callout - Information (Template)]] | Insert the code for an information callout, using prompts to enter the title and the details. |
| [[C.Callout - Note (Template)]]        | Insert the code for a general note callout, using prompts to enter the title and the details. |
| [[C.Callout - Todo (Template)]]        | Insert the code for a todo callout, using prompts to enter the title and the details.         |

## Dataview
[[Obsidian Dataview]] templates insert code blocks for running Dataview queries. Typically, these queries will be centralised into Dataview script files to make them easier to centrally maintain.

| Template File                | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| [[D.Insert Dataview Script]] | This template inserts the Dataview code block for a Dataview script selected by the user. |

## Notes
These templates create the basic content structure for particular types of notes.

| Template File     | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| [[N.Automation]]  | This template inserts the default structure/content for an automation.                 |
| [[N.Concept]]     | This template inserts the default structure/content for a (technical) concept.         |
| [[N.Episode]]     | This template inserts the default structure/content for an Automators podcast episode. |
| [[N.Methodology]] | This template inserts the default structure/content for a method of doing something.   |
| [[N.Person]]      | This template inserts the default structure/content for a person.                      |
| [[N.Podcast]]     | This template inserts the default structure/content for a podcast.                     |
| [[N.Sponsor]]     | This template inserts the default structure/content for an episode sponsor.            |
| [[N.Technology]]  | This template inserts the default structure/content for some technology.               |

## System
These templates produce some sort of system interaction external to Obsidian.

| Template File             | Description                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [[S.Copy Episode Number]] | Triggering this template on an episode page will copy the numeric portion of the episode number (including leading zeros) to the clipboard. |
| [[S.Copy Full File Path]] | Triggering this template will copy the full (not relative) file path for the current note to the clipboard.                                 |
| [[S.Copy Line Content]]   | Triggering this template will copy the content of the line the cursor is currently on to the clipboard.                                     |
| [[S.Open in TableFlip]]   | Triggering this template will open the current note file in the [[TableFlip]] app if it is installed.                                       |


## Text
These templates produce some sort of text manipulation functionality.

| Template File                     | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| [[T.Reverse Line Selection]]      | Reverses the order of the selected lines.        |
| [[T.Reverse Sort Line Selection]] | Sorts the selected lines reverse alphabetically. |
| [[T.Sort Line Selection]]         | Sorts the selected lines alphabetically.         |