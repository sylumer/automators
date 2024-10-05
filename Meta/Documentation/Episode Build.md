---
status: "complete"
---
# Overall Build Process
The build process for an episode consists of three distinct stages.

```mermaid
flowchart LR
	A["Download and<br>Transcribe Episode"]
	B["Generate Content<br>for Episode"]
	C["Episode Content<br>Editing"]

	A ==> B ==> C
```
1. The episode is downloaded and transcription occurs.
2. The episode details are generated.
3. The details and manually edited. 

## Future Improvements
> [!INFO] Efficiency
> Many of the bits and pieces of the automations were put together piecemeal over the course of pockets of time over the course of several months. As a result, the overall flow could be smoother and better use of stored data (e.g. in [[Data Jar]]) could be made in order to streamline processing. This is a known activity and will be done at some point, but for now just having a working solution and building out the content has been the focus.

# Download and Transcribe Episode

## Scheduled Check and Download/Transcription Trigger
**Automation Tools:** [[Keyboard Maestro]], [[Shortcuts]], [[Data Jar]], [[Shell Scripting|Shell Script]].

### Schedule
[[Keyboard Maestro]] is running on a headless Mac mini. It is scheduled to run a macro every 30 minutes between 17:00 GMT on Friday to 12:00 GMT on Saturday. The macro confirms that it is running on the Mac mini (because the macros are synced across multiple devices). Once  confirmed, it then runs the shortcut "Process Outstanding Automators Episodes"

**Macro Name:** Process Outstanding Automators Podcasts
**cron triggers:**
- `30 17-23 * * 5`
- `30 0-12 * * 6`
### Shortcut: Process Outstanding Automators Episodes
The shortcut determines if there are any podcast episodes to process and then triggers a separate process to process each of them is there are.

```mermaid
flowchart TB
    A((Start))

    B[Get Last<br>Processed Episode<br>Number from<br>Data Jar]
    C[Call Shortcut<br>to Get<brLatest Automators<br>Episode Number]
    D[Calculate Number<br>of Episodes<brLeft to Process]
    E{One Or More<br>Episodes to<br>Process?}

    F[Get Last<br>Processed Episode<br>Number from<br>Data Jar]
    G[Increment Last<br>Processed Episode<br>Number In<br>Data Jar]
    H[Call `autopod_tmux.sh`<br>To Download<br.And Transcribe<br>Episode]
    I{Last Episode<br>Processed?}

    Z((End))

    A ==> B ==> C ==> D ==> E

    E ==>|Yes| F
    E ==>|No| Z

    F ==> G ==> H ==> I
    
    I ==>|Yes| Z
    I ==>|No| F
```
### Shortcut: Latest Automators Episode Number
This shortcut retrieves the last item from the RSS feed for the Automators podcast and parses the episode number from the feed.

```mermaid
flowchart LR
	A((Start))
	B[Specify the<br>RSS Feed]
	C[Fetch the<br>last item in<br>the RSS feed]
	D[Grab the<br>title of<br>the episode]
	E[Split the<br>episode title<br>into tokens by<br>splitting on colons]
	F[Get the<br>first item<br>from the<br>split title]
	Z((End))

	A ==> B ==> C ==> D ==> E ==> F ==> Z
```

**RSS Feed:** `https://www.relay.fm/automators/feed`

### Shell Script: autopod_tmux.sh
The shell script is used to trigger the [[#Automated Transcription]] script detailed below. In order to not have the shortcut time out and to be able to deal with small numbers of concurrent processing of episodes if necessary, a shell script is used to trigger the download and transcribe for a specific episode using a dedicated auto-closing [[tmux]] session.

The episode number is passed to the script as the first (and only) argument.

```zsh
#!/bin/zsh

# Define a name of a TMUX session based on the episode number so we do not get any clashes
tmuxsession="ep$1"

# Open a TMUX session with the name
tmux new-session -d -s "$tmuxsession"

# Run the autopod.sh script with the episode number ($1), and set it to exit the TMUX session when it completes
tmux send-keys -t "$tmuxsession" "/Users/stephen/podcast/autopod.sh $1 && exit" Enter

# Detach from the TMUX session to leave it running
tmux detach -s "$tmuxsession"
```

## Automated Transcription
**Automation Tools:** Shell Script.

For the episode transcription Open AI's [Whisper](https://github.com/openai/whisper) speech recognition is being used. This is managed via a script that downloads an episode and runs it through the Whisper's base level language model.

Currently I have a shell script named `autopod.sh` that does this, and also includes sending notifications to me via [Pushover](https://pushover.net). Please note that the tokens below are just random text strings and not actual valid API tokens. The podcast episode is downloaded to a `podcast` folder in my home directory on my old, headless, Mac mini. The transcription is then triggered and this generates SRT (SubRip Subtitle), TXT (plain text) and VTT (Video Text Tracks) files. The VTT file is the one that is ultimately used for the Markdown files for each episode.

```sh
#!/bin/zsh

function pushover
{
	# Set tokens
	PO_APP_TOKEN=yVI14u0gF4yPihjcR7w9umY9lxkz4i;
	PO_USER_TOKEN=RdnW5YmlU0OrjicpCQ4xOQp5TcPgqg;
	
	curl -s \
	--form-string "token=$PO_APP_TOKEN" \
	--form-string "user=$PO_USER_TOKEN" \
	--form-string "message=$1" \
	https://api.pushover.net/1/messages.json
}

function procAutomators
{
	cd $HOME/podcast
	filename="automators$1.mp3"
	pushover "Downloading Automators Episode $1"
	curl "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/${filename}" -o "${filename}" -L
	pushover "Transcribing Automators Episode $1"
	echo "*** EP $1 START ***"
	whisper "automators$1.mp3" --language en
	echo "*** EP $1 END ***"
	pushover "Transcription of Automators Episode $1 Complete"
	rm "automators$1.mp3"
}

procAutomators "$1"
```

From the same folder as the script, Automators episode 123 can therefore be downloaded just by the terminal instruction `./autopod.sh 123`.

> [!INFO] Standalone Execution
> If this script is run standalone the [[Data Jar]] entry for the last processed episode should be updated if it is for a new episode. If not, the next time the scheduled job that utilises this script will end up doing the work again. Sine the scheduling was put in place, the idea is to only run this script manually to address prior erroneous runs.

# Generate Content for Episode
**Automation Tools:** [[Keyboard Maestro]], [[Python]] Script, [[Shell Scripting|Shell Script]], [[Shortcuts]], [[TextSoap]].

```mermaid
flowchart LR
	A["Get Episode<br>Number for<br>VTT File"]
	B["Build<br>Automators<br>Episode Content"]
	C["Add Transcription<br>to Episode<br>Content"]
	D["Open<br>Relay FM<br>Show Page"]
	E["Create<br>Episode<br>Page"]

	A ==> B ==> C ==> D ==> E
```

> [!Info] ⏰  Reminder
>This process is triggered within Path Finder on my local Mac via a [[Stream Deck]] button. Select the file, push the button, let the magic happen.

## Get Episode Number for VTT File
**Automation Tools:** [[Keyboard Maestro]], Shell Script.

This is based on the use of Path Finder for file management, and typically I would be remotely connecting using an SMB share to the Mac mini where the VTT files are generated and stored. Selecting an episode's VTT file, the name of the VTT file is available and includes the episode number.

To get the episode number, a regular expression is used.

| Find                           | Replace |
| ------------------------------ | ------- |
| `automators(\d\d\d)\.mp3\.vtt` | `$1`        |

This provides a three digit text string. What we want is the numeric value. For example if we start with "`001`", we really want just "`1`" for some things to come.

The quickest way I knew to force this was to do a quick calculation at the command line.

```sh
#!/bin/zsh
let "output = 0+ $(pbpaste)"
echo $output
```

The episode number is placed on the clipboard for the next step.

## Build Automators Episode Content
**Automation Tools:** [[Keyboard Maestro]], [[Shortcuts]].

The episode content build macro in [[Keyboard Maestro]] does a lot of the work and all of the orchestration to build the [[Obsidian]] file containing the base information for the episode. It relies on the VTT file discussed in the previous step having been generated and being selected in [[Path Finder]].  With the transcription file available, the macro will then set about gathering the additional information for the episode, and put the content into a file in the [[Obsidian]] vault.

```mermaid
flowchart TD
	START([Start])
	STOP1([Notify and Stop])
	STOP2([Stop])
	
	subgraph STEP1["Get Episode Number From VTT File Name"]
		direction LR
		1A["Copy Path of<br>Selected<br>Path Finder File"]
		1B("Path Finder File<br>a VTT File?")
		1C["Reduce Clipboard<br>to Episode<br>Number in<br>File Name"]
		1D["Save Zero Padded<br>Episode Number<br>to Keyboard<br>Maestro Variable"]
		1E["Strip Leading<br>Zeros From<br>Episode Number"]
		1F["Save Numeric<br>Episode Number<br>to Keyboard<br>Maestro Variable"]

		1A --> 1B
		1B -->|No| STOP1
		1B -->|Yes| 1C
		1C --> 1D
		1C --> 1E --> 1F
	end

	subgraph STEP2["Generate Primary Content for Episode Page"]
		direction LR
		2A["Run Apple Shortcut<br><code>Automators Episode Info</code>"]
		2B["Store Generated<br>Content in<br>Keyboard Maestro Variable"]

		2A --> 2B
	end

	subgraph STEP3["Append Transcription to Clipboard"]
		direction LR
		3A["Run Keyboard Maestro Macro<br><code>VTT - Format to Markdown Table</code>"]
		3B["Prepend Episode<br>Content From<br>Keyboard Maestro<br>Variable to Clipboard"]

		3A --> 3B
	end

	STEP4["Update Clipboard with Revised Credits Format"]

	subgraph STEP5["Write Episode Note to File"]
		direction LR
		5A["Run Apple Shortcut<br><code>Automators Episode Path</code>"]
		5B["Store Result in<br>Keyboard Maestro Variable"]
		5C["Write File in<br>Obsidian Vault  With<br>Content From Clipboard"]
		
		5A --> 5B --> 5C
	end

	subgraph STEP6["Clean Content"]
		direction LR
		6A["Run TextSoap (Sub) Cleaner<br><code>Correct Transcription Errors</code>"]
		6B["Run TextSoap (Sub) Cleaner<br><code>Anglicise</code>"]
		
		6A --> 6B
	end

	subgraph STEP7["Open URLs"]
		direction LR
		7A["Open New File/Note in Obsidian"]
		7B["Run Apple Shortcut<br><code>Automators Open Show Notes</code>"]
		
		7A --> 7B
	end

	START ==> STEP1 ==> STEP2 ==> STEP3 ==> STEP4 ==> STEP5 ==> STEP6 ==> STEP7 ==>|Play Completion Sound| STOP2

	%% ===== Style Definitions ===== %%
	classDef STEPS fill:#484848,stroke:#5FA89C,stroke-width:4px,color:#D7A453;
	class STEP1,STEP2,STEP3,STEP5,STEP6 STEPS

	classDef KMMACRO stroke:#A85F9C,stroke-width:4px,color:#A85F9C;
	class 3A KMMACRO
	
	classDef SHORTCUT stroke:#FF6961,stroke-width:4px,color:#FF6961;
	class 2A,4A,5B SHORTCUT
```

Details about other [[Shortcuts|Apple Shortcuts]] and [[Keyboard Maestro]] macros that this macro uses can be found below.

- [[Shortcuts|Apple Shortcuts]]
	- `Automators Episode Info`
	- `Automators Episode Path`
	- `Automators Open Show Notes`
- [[Keyboard Maestro]]
	- `VTT - Format to Markdown Table` - see [[#Format Transcription]]

## Retrieve Episode Information
**Automation Tools**: [[Shortcuts]], [[Data Jar]]
**Shortcut:** `Automators Episode Info`  

This Apple Shortcut gathers and formats a base level of information about a particular episode. For testing, it can be passed an episode number directly, but in practice, it is passed the episode number via the clipboard.

Most of the data is retrieved directly from the RSS feed for the Automators podcast, but because the podcast starts at episode 0, we need to offset by one to generate a positional index of where to find an episode in the feed. In addition the [RSS2JSON API](https://rss2json.com) is also used to make it much easier to work with the feed.

The shortcut makes use of [[Data Jar]] to store some of the data. Primarily this is because there are other shortcuts that can benefit from accessing this data after it has been determined. But in addition, it  using [[Data Jar]] does help when breaking down the automation to test in stages, and it is useful to see the output stored, though a tool like [[Logger]] could be used in its place for that.

One of the data items retrieved is for the episode topic link. This is retrieved based on the episode number and title, but the podcast has not always generated topic pages, and not necessarily to the, what is now, standard naming. Therefore the shortcut also includes some logic to try and help deal with that, the results being saved in [[Data Jar]].

The Real FM show notes page is used to get some additional information not included in the feed, and to do this, a separate shortcut is used - see [[#Fetch Episode Show Notes]] for details.

The content this shortcut produces can require further editing as there may be data (such as topic links) that cannot easily be automatically accommodated. But overall, in just a matter of seconds, the shortcut retrieves and coerces a lot of disparate data into a useful format that would take a lot of manual effort to accomplish otherwise.

## Fetch Episode Show Notes
**Automation Tools**: [[Shortcuts]], [[Data Jar]]  
**Shortcut:** `Automators Fetch Show Notes`  

The Shortcuts to fetch the show notes queries the Relay FM site for the episode page, gets the HTML of the page, trims it to the show notes section, converts it to Markdown, and then simplifies the results to a Markdown list. This gets passed back to the calling shortcut for inclusion in the 

```mermaid
flowchart TD
	START([Start])
	STOP([Stop])
	
	subgraph STEP1["Get Show Page Content"]
	direction LR
		1A["Get Episode<br>Number from<br>Data Jar"]
		1B["Fetch Content<br>of Episode<br>Page"]
		1C["Convert Page<br>Content to<br>HTML"]

		1A --> 1B --> 1C
	end

	subgraph STEP2["Prepare Basic Markdown Table on Clipboard"]
		direction LR
		2A["Extract<br>Show<br>Notes<br>Section"]
		2B["Convert<br>HTML to<br>Markdown"]
		2C["Remove Links<br>and Show<br>Notes Heading"]
		2D["Convert Level<br>5 Headings to<br>Bulleted List<br>Items"]
		2E["Collapse<br>Sequential<br>Lines of<br>Content"]
		2F["Remove<br>Empty<br>Lines"]
		2G["Collapse<br>Double<br>Hyphens"]
		2A --> 2B --> 2C --> 2D --> 2E --> 2F --> 2G
	end

	START ==> STEP1 ==> STEP2 ==>|Show Notes as<br>Markdown List| STOP

	%% ===== Style Definitions ===== %%
	classDef STEPS fill:#484848,stroke:#5FA89C,stroke-width:4px,color:#D7A453;
	class STEP1,STEP2 STEPS
```


## Format Transcription
**Automation Tools:** [[Keyboard Maestro]], [[Python]] Script.

### Keyboard Maestro Macro
The process of transforming the output of the transcription into a prettier format for [[Obsidian]] is accomplished through the use of a [[Keyboard Maestro]] macro. Selecting the VTT file in Path Finder and running the macro places a reformatted Markdown table version of the transcription on the clipboard. Note that this relates back to the earlier selection of the VTT file to determine the episode number.
```mermaid
flowchart TD
	START([Start])
	STOP1([Notify and Stop])
	STOP2([Stop])
	
	subgraph STEP1["Get VTT File Content"]
	direction LR
		1A{"Path Finder<br>File a<br>VTT File?"}
		1C["Set Clipboard to<br>VTT File Content"]
		
		1A -->|No| STOP1
		1A -->|Yes| 1C
	end

	subgraph STEP2["Prepare Basic Markdown Table on Clipboard"]
		direction LR
		2A["Remove Unnecessary<br>Lines"]
		2B["Simplify<br>Timestamps"]
		2C["Add Row<br>Markdown"]
		2D["Add Table<br>Headers"]

		2A --> 2B --> 2C --> 2D

	end

	subgraph STEP3["Prettify Markdown Table"]
		3A["Python Script to Prettify<br>Markdown on Clipboard"]
	end

	START ==> STEP1 ==> STEP2 ==> STEP3 ==>|Notification| STOP2

	%% ===== Style Definitions ===== %%
	classDef STEPS fill:#484848,stroke:#5FA89C,stroke-width:4px,color:#D7A453;
	class STEP1,STEP2,STEP3 STEPS
```
### Table Prettification Script
Table formatting is carried out using [`mdformat`](https://mdformat.readthedocs.io/en/stable/) and the [`mdformat-tables`](https://github.com/executablebooks/mdformat-tables) plugin.

To use these, you need to install them via `pip`.

```sh
pip install mdformat
pip install mdformat-tables
```

To utilise the plugin, it seems you have to write the code in Python. To that end a small script that will process content fed to it on standard input and format the tables is as follows.

```python
#!/usr/bin/env python3

import sys
import mdformat

# Prettify Markdown passed via standard in
print(mdformat.text(sys.stdin.read(), extensions={"tables"}))
```

However, the way I'm actually using this is on the clipboard, so to make things easier, we can install [`pyperclip`](https://pyperclip.readthedocs.io/en/latest/)

```sh
pip install pyperclip
```

Now a clipboard conversion script can be put together like this.

```python
#!/usr/bin/env python3

import pyperclip
import mdformat

# Prettify Markdown in place on the clipboard
pyperclip.copy(mdformat.text(pyperclip.paste(), extensions={"tables"}))
```

> [!INFO] Path Considerations in Keyboard Maestro
> Because I use this Python script inside a [[Keyboard Maestro]] macro with an [*Execute a Shell Script*](https://wiki.keyboardmaestro.com/action/Execute_a_Shell_Script) action, therefore I also needed to ensure that the [[Keyboard Maestro]] path variable (`ENV_PATH`) was also set up so that the imported modules could be found; [[Keyboard Maestro]] not picking up user profiles for command line shells.


## Generate Episode Note File Path
**Automation Tools**:[[Shortcuts]], [[Data Jar]]
**Shortcut:** `Automators Episode Path`  

This shortcut generates a full file path to the episode Markdown file. This includes the sub-folder the episode should be written to.

The sub-folders are split into blocks of 50: `000-049`, `050-099`, `100-149`, ....
```mermaid
flowchart TD
	START([Start])
	STOP([Stop])
	
	subgraph STEP1["Get Episode and Building Blocks For Sub Folder Name"]
	direction LR
		1A["Get Episode<br>Number from<br>Data Jar"]
		1B["Calculate Episode<br>Sub Folder<br>First Episode"]
		1C["Calculate Episode<br>Sub Folder<br>Last Episode"]

		1A --> 1B --> 1C
	end

	subgraph STEP2["Get Formatted Episode Number"]
		direction LR
		2A["Pre Pad Episode<br>Numbers with Zeros"]
		2B["Build Episode<br>Sub Folder Name"]
		2C["Extract Pre<br>Padded Episode Name"]

		2A --> 2B --> 2C
	end

	subgraph STEP3["Get Episode Name"]
		direction LR
		3A["Get Episode<br>Title From<br>Data Jar"]
		3B["Get Name<br>Only From Title"]

		3A --> 3B
	end

	subgraph STEP4["Build Episode Local File Path"]
		direction LR
		4A["Build Full Local File Path to Episode<br>Markdown File Including Sub-Folder"]
	end

	START ==> STEP1 ==> STEP2 ==> STEP3 ==> STEP4 ==> STOP

	%% ===== Style Definitions ===== %%
	classDef STEPS fill:#484848,stroke:#5FA89C,stroke-width:4px,color:#D7A453;
	class STEP1,STEP2,STEP3,STEP4 STEPS
```
## Open Relay FM Show Page
**Automation Tools**:[[Shortcuts]]
**Shortcut:** `Automators Episode Open Show Notes`  

This shortcut always opens the show page for the episode being processed. The page location can always be derived from the episode number.

If a single topic on the Automators forum could **not** be identified, then the shortcut will also open a search page for the episode. This will hopefully list the relevant episode topics for manual inclusion in the episode note.

```mermaid
flowchart TD
	START([Start])
	STOP([Stop])
	
	subgraph STEP1["Open Show Page on Relay FM Website"]
	direction LR
		1A["Get Show<br>Page URL from<br>Data Jar"]
		1B["Open the<br>Show Page URL"]

		1A --> 1B
	end

	subgraph STEP2["Optionally Open ForumTopic Search"]
		direction LR
		2A["Get Forum Topic<br>Search URL<br>from Data Jar"]
		2B{"Is Topic<br>Search URL<br>'`NONE`'?"}
		2C["Open the Topic<br>Search URL"]
		2D{{"Do Nothing"}}

		2A --> 2B
		2B -->|Yes| 2C
		2B -->|No| 2D
	end

	START ==> STEP1 ==> STEP2 ==> STOP

	%% ===== Style Definitions ===== %%
	classDef STEPS fill:#484848,stroke:#5FA89C,stroke-width:4px,color:#D7A453;
	class STEP1,STEP2 STEPS

	classDef NULL stroke:#008833,stroke-width:2px,color:#888888,stroke-dasharray:5 2;
	class 2D NULL
```
# Episode Content Editing
## Edit Sponsors
The sponsors section needs to be manually edited each time as new sponsors come in or information about them can change, including the name of a sponsor.

## Cross Referencing
While a lot of the cross referencing is automatic, there is a need to manually go through and identify key terms, such as names of software or people, to cross reference to other pages in the vault. Many such pages are created as part of this process, and not all occurrences of a term are linked (purposefully). This has elements of research, creativity, and opinion to it, and so is currently not well suited to automation.

## Transcription and Show Note Corrections
I suspect that larger Whisper language models might give slightly better results, but transcriptions take a long time to run on old (Mac mini) hardware, and a quick spell check combined with some standard find and replace tasks produces something generally fit for purpose. Updating for mis-transcriptions as transcriptions are used is also not overly onerous, and occasionally typos can also creep into show notes, etc.