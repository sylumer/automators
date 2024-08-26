---
status: "incomplete"
fc-date:
  year: 2022
  month: 07
  day: 15
fc-category: "podcast"
podcast: "Automators"
published: 2022-07-15
duration: 4532
formattedduration: "01:15:32"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/106"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators106.mp3"
episode: 106
title: "106: Automation Interoperation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Combinations! Lately, a lot of the best Mac automation tools have become conversant with each other. In this episode, Rose and David discuss the best ways to make automation apps work together.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links  
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 106 Discussion](https://talk.automators.fm/t/106-automation-interoperation/14054)

# Sponsors
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[Doppler (Sponsor)|Doppler]] - Sync environment variables at scale.
- [[Hunter Douglas (Sponsor)|Hunter Douglas]] - Take advantage of Hunter Douglas' '*Season of Style*' rebate savings event.

# Show Notes
- [Noodlesoft – Noodlesoft – Simply Useful Software](https://www.noodlesoft.com/)
- [FastScripts 3](https://redsweater.com/fastscripts/)
- [Automators #101: Red Sweaters and AppleScript Fun with Daniel Jalkut - Relay FM](https://www.relay.fm/automators/101)
- [Using macOS Shortcuts with an Alfred workflow - Alfred Blog](https://www.alfredapp.com/blog/guides-and-tutorials/macos-shortcuts-with-alfred-workflow/)
- [Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/shortcuts/)
- [Alfred - Bypass for Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/alfred/alfred_bypass_for_shortcuts/)
- [folivora.ai - Great Tools for your Mac!](https://folivora.ai/)
- [Stream Deck · GitBook](https://docs.folivora.ai/docs/1300_stream_deck.html)
- [Home Automation - Bunch.app](https://bunchapp.co/docs/integration/other-automation/#homekit-and-shortcuts)
- [Kaleidoscope Release Notes](https://kaleidoscope.app/release-notes)
- [Rogue Amoeba | Audio Hijack Manual — Scripting and Automation](https://rogueamoeba.com/support/manuals/audiohijack/?page=scripting#shortcuts.app-actions)
- [Rogue Amoeba | SoundSource Manual — Using Shortcuts with SoundSource](https://rogueamoeba.com/support/manuals/soundsource/?page=shortcuts)
- [Shortcut Actions (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/Shortcut_Actions)
- [action:Execute Shortcut (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Execute_Shortcut)
- [action:Execute or Edit Shortcut (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Execute_or_Edit_Shortcut)
- [action:Edit Shortcut (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Edit_Shortcut)

# Transcription
  
| Time Index | Transcription                                                     |
| :--------- | :---------------------------------------------------------------- |
| 00:00      | Welcome, the Automators. I'm David Sparks,                        |
| 00:04      | and joined by my co-host, Rosemary Orchard.                       |
| 00:06      | Hello, Rose. How are you today?                                   |
| 00:07      | Oh, I'm excited, David.                                           |
| 00:09      | I have been having fun automating things.                         |
| 00:11      | I mean, what more is there in life?                               |
| 00:12      | Yeah, exactly. What more is there than automation?                |
| 00:16      | Today, we've got a really fun show planned for you.               |
| 00:19      | There's just been this coordination,                              |
| 00:24      | conglomeration of automation on the Mac recently,                 |
| 00:27      | where it seems like all of the tools are releasing updates        |
| 00:31      | so they can work with all the other tools.                        |
| 00:34      | And while we've spent a lot of time historically on the show      |
| 00:37      | talking about, you know, [[Keyboard Maestro]] and shortcuts           |
| 00:40      | and [[Hazel]] and the like,                                           |
| 00:42      | we haven't spent enough time talking about the interaction        |
| 00:45      | between them, and all of that is happening now.                   |
| 00:48      | So today, we're going to spend a significant portion              |
| 00:51      | of the show talking about that, like which tool to use            |
| 00:54      | and what doesn't even matter anymore,                             |
| 00:56      | as they all seem to run each other's specific tools.              |
| 00:59      | But it's going to be fun today.                                   |
| 01:00      | We're going to be talking about that today                        |
| 01:02      | in the bonus section for members.                                 |
| 01:05      | Both Rose and I are running the Alfred 5 first look,              |
| 01:09      | which is also another cool automation tool,                       |
| 01:11      | and we're going to be talking about that as well.                 |
| 01:13      | But I guess we should just dig in and start talking               |
| 01:16      | about what's going on with all of this automation collaboration.  |
| 01:22      | It's like automation suit.                                        |
| 01:24      | That's what I was going to name the episode, automation soup,     |
| 01:26      | because it's like a big bowl of soup.                             |
| 01:27      | I kind of think automation interoperation is cool,               |
| 01:31      | because then both of them were "-tions".                             |
| 01:32      | You know, you've got the "sh"-s in there,                         |
| 01:33      | but it is just amazing.                                           |
| 01:35      | That's very techy too, yeah.                                      |
| 01:36      | Oh, wow.                                                          |
| 01:37      | I mean, that's me, isn't it?                                      |
| 01:39      | But I just love seeing like the release notes                     |
| 01:43      | from developers right now of,                                     |
| 01:44      | hey, we've added support for shortcuts,                           |
| 01:46      | which means that you have everything in the world                 |
| 01:49      | available to you right now.                                       |
| 01:51      | And it's just so cool to see that sort of thing coming            |
| 01:54      | because it really means that                                      |
| 01:57      | I know how to do this a little bit in this thing over here,       |
| 01:59      | and I know how to do that a little bit                            |
| 02:00      | in that thing over there,                                         |
| 02:01      | and we've now got the glue to stick everything together with.     |
| 02:04      | So you don't have to do an entire automation in one app,          |
| 02:10      | because that's where you started,                                 |
| 02:12      | or that's the only thing that does this particular action.        |
| 02:15      | You really have that possibility now                              |
| 02:17      | to build a relay system,                                          |
| 02:19      | which sounds incredibly fragile,                                  |
| 02:22      | but it means that it's actually reusable components.              |
| 02:25      | So everything is broken down into a small bit,                    |
| 02:27      | which maybe you can use this bit here and this,                   |
| 02:29      | and then you can use it again                                     |
| 02:31      | in these three other automations                                  |
| 02:32      | that you're building as well,                                     |
| 02:33      | because they're all very similar.                                 |
| 02:35      | And I just love that that is a thing                              |
| 02:40      | that we have available to us.                                     |
| 02:41      | Yeah, and the other reason that I think this is awesome,          |
| 02:43      | just to start out with our statement of intent here,              |
| 02:47      | is that different of these tools are better                       |
| 02:50      | at some things than others.                                       |
| 02:52      | And once you learn the tools and you know,                        |
| 02:55      | like this hammer is really good for this kind of nail,            |
| 02:58      | and the screwdriver is this really good                           |
| 02:59      | for this kind of screw,                                           |
| 03:00      | suddenly then the fact that they all interoperate,                |
| 03:04      | as Rose would say.                                                |
| 03:05      | Yeah.                                                             |
| 03:06      | You can build an automation                                       |
| 03:08      | that takes advantage of the best pieces of each of them           |
| 03:11      | and combines them,                                                |
| 03:12      | and no longer do you have to make the choice of saying,           |
| 03:14      | well, I'll use this automation platform.                          |
| 03:16      | It's not perfect for the whole thing,                             |
| 03:18      | but I'm gonna use it anyway.                                      |
| 03:20      | Now you can just say,                                             |
| 03:21      | well, I'll use the best parts of this automation platform         |
| 03:23      | with that automation platform.                                    |
| 03:25      | And one of the questions that we'll put a pin in this,            |
| 03:27      | I wanna come back to it later,                                    |
| 03:28      | does this remove the need for any automation platform?            |
| 03:31      | And I'll tell you right now,                                      |
| 03:32      | I think the answer is no, if anything,                            |
| 03:34      | it just makes you wanna get better at all of them,                |
| 03:36      | because then you can take advantage of it.                        |
| 03:38      | But as we go through this, keep that in mind,                     |
| 03:40      | because I think this really is a,                                 |
| 03:43      | just like we're going under this kind of renaissance              |
| 03:46      | of hardware on the Apple's ecosystem                              |
| 03:48      | with the Macintosh right now,                                     |
| 03:51      | I feel like we're in a renaissance of automation on the Mac       |
| 03:54      | because of all this interoperability.                             |
| 03:57      | Yeah, yeah, exactly.                                              |
| 03:58      | And it is just one of those things                                |
| 04:01      | that if you're not looking for it,                                |
| 04:03      | then you might miss it completely,                                |
| 04:04      | but then when you look back in a couple of months                 |
| 04:07      | and you're like, oh, right, well,                                 |
| 04:08      | I actually have this thing where I always start by,               |
| 04:11      | I don't know, doing this in [[Alfred]].                               |
| 04:13      | And the end result is that I actually need a file                 |
| 04:15      | to end up in this folder over here,                               |
| 04:17      | so that it's available to that person,                            |
| 04:18      | whatever it is.                                                   |
| 04:19      | You'll realise that suddenly you have the ability                 |
| 04:22      | to just chain everything together so easily                       |
| 04:26      | because all of these apps have just been secretly,                |
| 04:29      | or not secretly, but they're just getting on                      |
| 04:31      | with adding all this amazing support,                             |
| 04:33      | which really tells us that the developers see the value           |
| 04:38      | in adding this support as well,                                   |
| 04:39      | because hopefully a developer is not gonna waste their time       |
| 04:42      | on doing something unless they either want it for themselves      |
| 04:44      | or they think that people are gonna use it.                       |
| 04:47      | And clearly people are using these things                         |
| 04:50      | because they're awesome and it's great                            |
| 04:51      | that there's so many options there for us.                        |
| 04:54      | Okay, I'm gonna start with one that is not super complicated,     |
| 04:57      | but I think is quite useful.                                      |
| 04:59      | And it's our old friend [[Hazel]].                                    |
| 05:02      | Like, [[Hazel]] is the application that,                              |
| 05:05      | it's super power, in my opinion,                                  |
| 05:07      | is document organisation and sorting.                             |
| 05:09      | I mean, it's so good at looking at the contents                   |
| 05:12      | and renaming files and creating subfolders.                       |
| 05:16      | It does that in ways that you could pull off                      |
| 05:18      | with an [[AppleScript]] and some of the other animation tools        |
| 05:21      | we talk about, but none of them are as easy as [[Hazel]]              |
| 05:23      | for doing that.                                                   |
| 05:25      | And historically, [[Hazel]] has had the ability                       |
| 05:29      | when it triggers to run an AppleScript.                          |
| 05:33      | And in terminal, it can do some basic automation stuff            |
| 05:37      | when it is triggered.                                             |
| 05:38      | So in the way [[Hazel]], like all automation is,                      |
| 05:40      | there's a trigger and then there's an action.                     |
| 05:42      | So let's say I scan a document that has the word                  |
| 05:47      | Southern California Electric in it,                               |
| 05:48      | which is my electric company.                                     |
| 05:50      | [[Hazel]], historically, would rename it,                             |
| 05:54      | file it into the electric bill file,                              |
| 05:56      | and then trigger an AppleScript I wrote                          |
| 06:00      | that would create an OmniFocus task.                              |
| 06:02      | And the reason I did that was because                             |
| 06:05      | when I first ran the script, when I first built it,               |
| 06:08      | it was so efficient because it was looking at the contents.       |
| 06:11      | I would scan the document and then the bill would get filed       |
| 06:16      | and I'd forget that we had a bill, right?                         |
| 06:18      | It just got put into the file                                     |
| 06:20      | and then I didn't pay the electric bill.                          |
| 06:22      | And so I'm like, well, that's not good.                           |
| 06:24      | So I wrote an AppleScript.                                       |
| 06:26      | In fact, I published it at some point in MacSparky               |
| 06:29      | that said, okay, this is an AppleScript                          |
| 06:31      | and open OmniFocus and create a task                              |
| 06:33      | that says pay the electric bill, blah, blah, blah.                |
| 06:36      | Well, fast forward to today.                                      |
| 06:40      | Writing an AppleScript is a pain.                                |
| 06:41      | In fact, at one point that script broke                           |
| 06:43      | and I had to rewrite it                                           |
| 06:44      | and I think the script broke again.                               |
| 06:47      | Now all you do, if they've had got a new action,                  |
| 06:50      | run shortcut.                                                     |
| 06:51      | So now we have officially glued                                   |
| 06:54      | all of the tools of shortcuts onto [[Hazel]].                         |
| 06:57      | And that is amazing, right?                                       |
| 07:01      | It really is, yeah.                                               |
| 07:02      | Because I mean, we already had the option to say,                 |
| 07:05      | run an automated workflow or a shell script                       |
| 07:07      | or a JavaScript or AppleScript before.                           |
| 07:10      | And through that, you could say,                                  |
| 07:12      | until they added support for the run shortcut action,             |
| 07:15      | you could say, run AppleScript or run shell script               |
| 07:18      | and then use the AppleScript or the shell script                 |
| 07:20      | to run the shortcut.                                              |
| 07:21      | But it obviously wasn't as smooth                                 |
| 07:24      | and you would need to know the right syntax                       |
| 07:25      | and everything, especially if you wanted                          |
| 07:27      | to give your shortcut the file.                                   |
| 07:29      | And that's the trickier bit.                                      |
| 07:31      | But now, it is just a run shortcut action.                        |
| 07:34      | Be warned, if you like me have a stupid number of shortcuts,      |
| 07:37      | you click on the run shortcut action                              |
| 07:38      | and [[Hazel]] will, the first time you do it                          |
| 07:40      | at the very least or if you've not done it                        |
| 07:41      | in quite a while, sort of beach ball for a bit.                   |
| 07:44      | And that's for me purely                                          |
| 07:46      | because I have a stupid number of shortcuts                       |
| 07:49      | and reading all of those in is a little bit tricky.               |
| 07:53      | I don't blame [[Hazel]] for that,                                     |
| 07:54      | having tried to get all of the shortcuts                          |
| 07:56      | from the shortcuts that myself for another application,           |
| 07:59      | it is actually quite tricky to do.                                |
| 08:02      | There is no particularly efficient way of doing it,               |
| 08:04      | not even on a Mac Studio.                                         |
| 08:06      | But once it's done that,                                          |
| 08:07      | you've got every single shortcut.                                 |
| 08:09      | So you can take a shortcut and give it the file                   |
| 08:12      | or you can have it ignore the file and not care.                  |
| 08:14      | So in the case of you're adding a reminder                        |
| 08:17      | to pay the electric bill,                                         |
| 08:20      | well, you actually don't even need                                |
| 08:21      | to necessarily give it the file, you could do,                    |
| 08:24      | but that would be optional I presume                              |
| 08:25      | because it will just figure out the date                          |
| 08:28      | based on when now is and go from there.                           |
| 08:32      | But if you wanted to do something like give it the file           |
| 08:35      | so it can, I don't know, upload it to [[Dropbox]] or convert          |
| 08:38      | an image to various different types                               |
| 08:40      | and save them into different places,                              |
| 08:42      | then you can have that run too, which is great.                   |
| 08:44      | Yeah, so you can pass it the file                                 |
| 08:46      | or you can just, if you want, just go ahead and say,              |
| 08:51      | you don't even need to pass it the file.                          |
| 08:52      | Like you could say, run a single action,                          |
| 08:55      | create a task and army focus, pay the electric bill.              |
| 08:58      | But because it's shortcuts                                        |
| 09:00      | and it's just so much more flexible                               |
| 09:01      | than Automator ever got to be,                                    |
| 09:05      | you could also just say,                                          |
| 09:06      | send a text message to Daisy and say,                             |
| 09:08      | hey, the electric bill came in, could you pay it?                 |
| 09:11      | Just automate that, right?                                        |
| 09:13      | Yeah, yeah.                                                       |
| 09:14      | Or just automate paying the electric bill                         |
| 09:15      | if that were possible,                                            |
| 09:16      | that it would obviously depend on your bank                       |
| 09:18      | or similar having shortcut sections.                              |
| 09:20      | Yeah, but I mean, just the entire tool set of Automator,          |
| 09:25      | I'm sorry, the entire tool set of shortcuts                       |
| 09:27      | now becomes at your disposal,                                     |
| 09:29      | which is triggered by [[Hazel]] finding a bill.                       |
| 09:33      | Have you done any of these actions yet, Rose?                     |
| 09:36      | So I have played with them a bit                                  |
| 09:39      | and I have yet to find a case                                     |
| 09:43      | that I need to solve using shortcut through [[Hazel]]                 |
| 09:45      | that I didn't previously have some kind of setup for anyway,      |
| 09:49      | because the few things that I'd wanted to run a shortcut for,     |
| 09:51      | I ended up finding other ways to do that.                         |
| 09:53      | So passing it off through AppleScript                             |
| 09:56      | and just doing whatever it is                                     |
| 09:57      | that I need to do through AppleScript.                            |
| 10:00      | But I'm looking forward to the next time                          |
| 10:03      | that I want to do something with this,                            |
| 10:06      | because there are so many times                                   |
| 10:08      | where I look at something with [[Hazel]] and go,                      |
| 10:10      | [[Hazel]] can get me like 95% of the way there                        |
| 10:14      | and I just wish I could do the rest of it in shortcuts            |
| 10:16      | because I end up doing sort of ephemeral [[Hazel]] actions.           |
| 10:20      | I know that's not really what it's for,                           |
| 10:21      | but I'll just create a new folder in Finder                       |
| 10:25      | and then add it [[Hazel]] with a bunch of files in                    |
| 10:27      | that I need processed in a particular way                         |
| 10:29      | and just have [[Hazel]] run all over it and fix that for me           |
| 10:32      | because it makes it so much easier to just go,                    |
| 10:35      | okay, I've started with this                                      |
| 10:37      | and I need to end up with that go.                                |
| 10:39      | But yeah, I'm looking forward to the future when I do that.       |
| 10:43      | But for the time being,                                           |
| 10:45      | I haven't got many use cases, but I'm looking for them.           |
| 10:48      | What about you, David?                                            |
| 10:49      | So I'm using it for scenarios like the one I described,           |
| 10:52      | but I would recommend at this point                               |
| 10:54      | building shortcuts actions in lieu of AppleScripts                |
| 10:58      | because I've been doing the AppleScript thing                     |
| 10:59      | for like 10 years and I can tell you                              |
| 11:02      | they just stop working sometimes.                                 |
| 11:04      | Maybe the app updates                                             |
| 11:06      | and the underlying AppleScript support changes.                   |
| 11:08      | Maybe Apple makes some change                                     |
| 11:09      | to the operating system where the AppleScript breaks,             |
| 11:12      | but I've had multiple AppleScripts where I spent the time         |
| 11:15      | to figure out the syntax and get it working just right.           |
| 11:18      | And then two years later,                                         |
| 11:19      | it stops working without me realising it.                         |
| 11:21      | So I definitely think shortcuts is the easier                     |
| 11:25      | and probably more stable result care.                             |
| 11:27      | One of the things that I wanted to note was                       |
| 11:30      | there are some cases where I find                                 |
| 11:32      | AppleScript is probably still the better approach.                |
| 11:34      | Like I have a specific use case                                   |
| 11:36      | where I needed to replace text inside of an ICS file              |
| 11:41      | that's been downloaded.                                           |
| 11:42      | So the holiday that I like book in at work                        |
| 11:45      | whenever it downloads, it's got my name in front of it,           |
| 11:47      | which when I've added it to my calendar, it does not make sense.  |
| 11:50      | Like why do I need my own name                                    |
| 11:51      | before the word holiday in my calendar?                           |
| 11:53      | It does not make sense.                                           |
| 11:55      | And so there's a couple of ways I could fix that,                 |
| 11:57      | but I was like, well, obviously,                                  |
| 11:59      | as I have [[Hazel]] automatically open this                           |
| 12:01      | in Fantastic Health for me,                                       |
| 12:03      | I'm gonna have [[Hazel]] replace the summary,                         |
| 12:06      | which is the line in the ICS file                                 |
| 12:08      | that tells you what the title is                                  |
| 12:10      | with the title that I want, simple.                               |
| 12:13      | Of course, [[Hazel]] doesn't have a native replace text               |
| 12:15      | inside of an ICS file action.                                     |
| 12:17      | It, you know, and so I actually went to AppleScript               |
| 12:21      | and [[FastScripts]] for this                                          |
| 12:22      | because of their regular expression support.                      |
| 12:24      | So I'm just replacing that line using that.                       |
| 12:27      | But that's basically, I'm relying on [[Hazel]]                        |
| 12:29      | and to an extent FastScript's not changing.                       |
| 12:32      | And as [[FastScripts]] has just added that support,                   |
| 12:34      | I doubt that's gonna change any time soon.                        |
| 12:35      | And I'm pretty confident that [[Hazel]] will flag                     |
| 12:37      | if they make a change there.                                      |
| 12:39      | But other than that, I would definitely stick with Shortcuts      |
| 12:41      | because even Shortcuts can run AppleScript                        |
| 12:44      | if there's like a little bit of it                                |
| 12:45      | where you can't do everything inside of Shortcuts,                |
| 12:48      | where you can hand out to AppleScript for that step               |
| 12:50      | or those subset of steps and then come back,                      |
| 12:53      | which is gonna be less wonky than everything breaking.            |
| 12:57      | And you had mentioned earlier that, you know,                     |
| 12:59      | you can also pass a file, explain how you would do that.          |
| 13:02      | I mean, it's, as far as I can tell,                               |
| 13:05      | may [[Hazel]] on the machine that I'm using for testing this          |
| 13:08      | is of course loading all of the Shortcuts                         |
| 13:10      | because I haven't pulled up that testing machine in a while,      |
| 13:12      | but it just gets the file automatically.                          |
| 13:15      | So if your Shortcut has input accepted,                           |
| 13:19      | then the Shortcut input will be the file                          |
| 13:21      | that is being processed by [[Hazel]],                                 |
| 13:23      | which or folder, which should just give you                       |
| 13:26      | everything that you need.                                         |
| 13:27      | So the only thing you need to do is turn on, you know,            |
| 13:30      | the input options inside of the Shortcut.                         |
| 13:34      | It is worth noting, of course,                                    |
| 13:35      | that the input options inside of Shortcuts                        |
| 13:37      | are Share Sheet and QuickAction slash Workflow input options.      |
| 13:43      | And I've always made sure that I've got both turned on.           |
| 13:45      | I've not tried it with just Share Sheet stuff turned on.           |
| 13:48      | I have no idea how Shortcuts would handle that.                   |
| 13:50      | Obviously Hazel's gonna be passing at the file                    |
| 13:52      | the way Mac OS, you know, passes files around                     |
| 13:55      | for this sort of thing,                                           |
| 13:56      | but I'm not quite sure exactly                                    |
| 13:58      | what is going on on the Shortcuts end.                            |
| 14:02      | But it is pretty great.                                           |
| 14:05      | You know, I've had it do various different things,                |
| 14:07      | some of which I could have done directly in [[Hazel]]                 |
| 14:09      | or in some other way, but you know,                               |
| 14:12      | when I was playing with it, it worked pretty well for me.         |
| 14:15      | Yeah, and I really think that's one thing to think about here.    |
| 14:17      | Like, do you want to do the file management in Shortcuts          |
| 14:20      | when [[Hazel]] can already handle it all for you?                     |
| 14:23      | Yeah, yeah.                                                       |
| 14:24      | I mean, it's one of those things where it is more like,           |
| 14:26      | you know, I want to save this off to various places               |
| 14:29      | and like send people emails with this stuff attached to it.       |
| 14:33      | You know, and depending on the day of the week,                   |
| 14:35      | it goes to this person or that person and stuff.                  |
| 14:36      | And you could do that logic                                       |
| 14:38      | in a number of different applications.                            |
| 14:39      | There is nothing stopping you.                                    |
| 14:40      | [[Keyboard Maestro]] is an excellent one                              |
| 14:42      | for that sort of thing too.                                       |
| 14:44      | But, you know, I think that sort of thing                         |
| 14:47      | is probably easier to do in Shortcuts,                            |
| 14:49      | especially considering the fact that then,                        |
| 14:51      | if you are on the go for one of these, you know,                  |
| 14:55      | events when you receive the file,                                 |
| 14:56      | you know, maybe on your Mac,                                      |
| 14:58      | usually that file automatically gets downloaded                   |
| 15:01      | or you just click on it and it downloads                          |
| 15:02      | and it appears in your downloads folder                           |
| 15:04      | and [[Hazel]] does the magic.                                         |
| 15:05      | Well, if you're not going to be around to do that,                |
| 15:07      | you know, maybe you're traveling or something,                    |
| 15:08      | but the thing still needs to happen.                              |
| 15:10      | You could then download that file on your mobile                  |
| 15:13      | and share it to the shortcut                                      |
| 15:14      | and have, you know, that part of it happen.                       |
| 15:16      | So it depends on, you know,                                       |
| 15:18      | your setup as to what the best solution for anything is.          |
| 15:22      | But I really like the fact that it means that, you know,          |
| 15:25      | the parts of this that I can potentially, you know,               |
| 15:28      | take on the go with me and reuse                                  |
| 15:31      | can be, you know, compartmentalised in that sort of way.          |
| 15:35      | And, you know, as I said at the beginning,                        |
| 15:37      | this is also, you know, breaking things down                      |
| 15:39      | into small reusable components                                    |
| 15:41      | and using them in multiple places.                                |
| 15:44      | This is something that, you know,                                 |
| 15:46      | as a programmer I'm very familiar with,                           |
| 15:47      | but every time I look at my shortcuts,                            |
| 15:49      | I end up seeing something where it's like,                        |
| 15:53      | oh, actually, you know what?                                      |
| 15:54      | This little bit here,                                             |
| 15:55      | this is something that I should put into its own shortcut         |
| 15:58      | so I can reuse it because it turned out                           |
| 16:00      | I had four different ways, David,                                 |
| 16:01      | of checking whether or not today was a bank holiday.              |
| 16:04      | And so I actually combine those into one thing                    |
| 16:07      | that says, hey, is today a holiday day?                           |
| 16:09      | Yes or no.                                                        |
| 16:10      | And it literally returns the text yes,                            |
| 16:13      | if it's a bank holiday day,                                       |
| 16:14      | but it now means that I have one kind of logic                    |
| 16:17      | that tells me if today is a bank holiday.                         |
| 16:20      | So that is considerably less prone to error paths                 |
| 16:25      | is the wrong expression,                                          |
| 16:28      | but less prone to returning inconsistent results.                 |
| 16:32      | There we go.                                                      |
| 16:34      | Because of course, if you have four different ways                |
| 16:35      | of doing the same thing,                                          |
| 16:36      | are they actually all doing the same thing                        |
| 16:38      | or are they doing slightly different things?                      |
| 16:40      | And that's where breaking stuff down into reusable parts          |
| 16:43      | can be really useful                                              |
| 16:44      | and being able to pass things off                                 |
| 16:45      | from the best application for this bit                            |
| 16:48      | to the best application for that bit                              |
| 16:50      | is where all of this inter-operation                              |
| 16:53      | between automation solution excels.                               |
| 16:57      | This episode of the Automators podcast                            |
| 16:59      | is brought to you by Electric.                                    |
| 17:01      | Go to electric.ai/automators                                |
| 17:04      | and unbury yourself from IT tasks.                              |
| 17:06      | Also get a free pair of beat solo three wireless headphones       |
| 17:09      | when you schedule a meeting.                                      |
| 17:11      | Turning a small business into an empire takes work                |
| 17:13      | and you have to keep your ear to the ground                       |
| 17:16      | for things that will help you take it to the next level.          |
| 17:18      | But this can be hard                                              |
| 17:20      | when your attention is pulled towards different tasks             |
| 17:23      | because that's the reality of being a boss.                       |
| 17:25      | The team over at Electric knows small businesses                  |
| 17:28      | maybe like yours face these challenges.                           |
| 17:30      | That's why they've solved this problem for you                    |
| 17:32      | by operating as your IT department.                               |
| 17:35      | Instead of spending your time sorting through                     |
| 17:37      | unused application licenses,                                      |
| 17:39      | setting up employee laptops                                       |
| 17:41      | and answering never-ending IT questions from your team,           |
| 17:45      | you can build that empire.                                        |
| 17:46      | With Electric acting as your IT department,                       |
| 17:49      | you can get back to what you're good at.                          |
| 17:51      | Plus you get a really cool IT platform                            |
| 17:53      | to see and manage everything.                                     |
| 17:55      | If you're going to succeed,                                       |
| 17:56      | you need to learn how to delegate.                                |
| 17:57      | That's something I struggle with as well.                         |
| 18:00      | And just because you know how to reset somebody's laptop          |
| 18:02      | or fix an iPhone doesn't mean you should be doing that            |
| 18:05      | when you're trying to grow your business.                         |
| 18:07      | When you're running the business,                                 |
| 18:08      | your job is to spend your time on those important decisions       |
| 18:12      | that keep the business running.                                   |
| 18:14      | IT is not something you have time for.                            |
| 18:16      | And that's why you should go check out Electric.                  |
| 18:19      | For automators, listeners,                                        |
| 18:20      | Electric is offering a free pair of Beat Solo 3 wireless          |
| 18:23      | headphones for taking a qualified meeting.                        |
| 18:26      | So get Electric on board,                                         |
| 18:27      | let them handle the IT drudgery for you                           |
| 18:29      | so you can focus on the business                                  |
| 18:31      | and get a free pair of cool headphones.                           |
| 18:33      | In fact, you can put those headphones on                          |
| 18:34      | so people know you're busy                                        |
| 18:36      | and they'll go to Electric to solve their IT problems.            |
| 18:39      | So just go to electric.ai/automators,                       |
| 18:41      | that's all you need to do.                                        |
| 18:43      | Electric.ai/automators,                                     |
| 18:45      | go there now and get your free pair                               |
| 18:47      | of Beat Solo 3 headphones today                                   |
| 18:49      | for scheduling the qualified meeting.                             |
| 18:51      | And our thanks to Electric                                        |
| 18:52      | for their support of the automators.                              |
| 18:55      | So one of the things I think would be nice                        |
| 18:58      | to just look at again briefly, David.                             |
| 19:00      | I know we had Daniel Jalkut on the show recently                  |
| 19:02      | is at [[FastScripts]] because of course,                                 |
| 19:04      | [[FastScripts]] is helping us stick more and more things together now,   |
| 19:08      | you know, not only with their regular expression support,         |
| 19:10      | which has certainly made my life easier                           |
| 19:13      | in a number of places, but with everything else too.              |
| 19:16      | Well, what's an example of a use                                  |
| 19:19      | that you're doing with [[FastScripts]]?                                  |
| 19:21      | Well, this is kind of crazy,                                      |
| 19:23      | but Daniel mentioned when he was on the show                      |
| 19:26      | and it hadn't occurred to me before then                          |
| 19:27      | that [[FastScripts]] can run any file that's,                            |
| 19:31      | or any kind of script file that's in the folder.                  |
| 19:33      | So you know that the function                                     |
| 19:36      | that you have inside of shortcuts,                                |
| 19:37      | where if you go to the file menu on the Mac,                      |
| 19:39      | then you can add it to your doc?                                  |
| 19:42      | Well, that puts that shortcut in your applications folder.        |
| 19:45      | So I did that with a bunch of shortcuts                           |
| 19:48      | and moved them into the [[FastScripts]] folder                           |
| 19:49      | and had them appear in various places.                            |
| 19:52      | So now my [[FastScripts]] folder                                         |
| 19:54      | can be a application contextual shortcuts launcher.               |
| 19:59      | So the shortcuts menu bar                                         |
| 20:01      | always shows the same shortcuts,                                  |
| 20:04      | but I thought I'd give it a go                                    |
| 20:05      | and I thought, well, what's the worst that can happen?            |
| 20:07      | I have to file a bug report that says, by the way, Daniel,        |
| 20:09      | I'm really sorry I massively crashed [[FastScripts]].                    |
| 20:13      | It turns out it can just run shortcuts that way,                  |
| 20:15      | which is great.                                                   |
| 20:16      | So I've ditched my old shortcuts wrappers,                        |
| 20:19      | which was, you know,                                              |
| 20:20      | TAL application shortcuts to run X, Y, Z.                         |
| 20:24      | And now I just actually have shortcuts in there.                  |
| 20:27      | So that works.                                                    |
| 20:29      | Let's go down that rabbit hole for just a second.                 |
| 20:31      | So you're primarily using [[FastScripts]]                                |
| 20:33      | to run shortcuts at this point?                                   |
| 20:35      | Well, no, not primarily.                                          |
| 20:37      | It really depends on what application it is that I'm in,          |
| 20:40      | because for example, if I'm doing my day job                      |
| 20:43      | and I have, you know,                                             |
| 20:46      | I've got, I'd say the database query application open,            |
| 20:49      | then it's gonna show me a bunch of database specific,             |
| 20:52      | you know, automation scripts that I've got.                       |
| 20:55      | And I've created those                                            |
| 20:56      | and there's a variety of different things there.                  |
| 20:58      | And the same if I've opened PHP Store,                            |
| 21:00      | which I used to, you know, edit PHP files.                        |
| 21:04      | But in other places,                                              |
| 21:06      | it will show me different actions                                 |
| 21:09      | based on the app that I have open.                                |
| 21:12      | So, you know, when I have, for example,                           |
| 21:15      | if I've got Tweetbot open,                                        |
| 21:19      | then if I click on the [[FastScripts]] menu,                              |
| 21:21      | then some of the actions that I get there                         |
| 21:23      | are actually, you know, Tweetbot specific                         |
| 21:26      | because it's like, you know, like,                                |
| 21:28      | hey, send, you know, this kind of tweet,                          |
| 21:30      | which is that I'm live for iOS today or similar.                  |
| 21:32      | And, you know, that one was just a test one                       |
| 21:34      | that I quickly threw together                                     |
| 21:36      | because I was already doing something similar on [[Stream Deck]],     |
| 21:39      | which I want to get to, by the way, David,                        |
| 21:41      | because [[BetterTouchTool]] is bringing it's A game here.           |
| 21:43      | It's on the list, it's on the list, yeah.                         |
| 21:45      | Oh yeah, it's on the list.                                        |
| 21:48      | But, you know, I just put that one in as a quick trial            |
| 21:51      | because I thought, well, this is, you know,                       |
| 21:52      | a relatively simple one.                                          |
| 21:53      | There's no input.                                                 |
| 21:54      | It just does the thing in the background and that's it.           |
| 21:57      | But it works, it works really well.                               |
| 21:59      | So, you know, I'm very pleasantly pleased by this,                |
| 22:04      | unsurprisingly.                                                   |
| 22:05      | It's like the, right under the automation landscape               |
| 22:08      | of the Mac is like one of those,                                  |
| 22:10      | those movies where you've got the crazy man                       |
| 22:12      | with all the yarn and the string                                  |
| 22:13      | and all the things connecting.                                    |
| 22:15      | It's like that right now.                                         |
| 22:16      | I mean, everything talks to everything else.                      |
| 22:18      | I mean, I'm launching,                                            |
| 22:20      | I'm not doing things as complex as you are,                       |
| 22:22      | but I'm launching shortcuts almost exclusively                    |
| 22:24      | through [[Alfred]], which we're going to talk about                   |
| 22:26      | in the after show, but I really like that [[Alfred]],                 |
| 22:30      | that [[Alfred]] plugin, and I just type SC space                      |
| 22:33      | and then I can search my shortcuts.                               |
| 22:35      | I can pass variables to them.                                     |
| 22:36      | There's a whole bunch of stuff you can do with them.              |
| 22:38      | So, yeah, it's really.                                            |
| 22:39      | Which [[Alfred]] plugin are you using for that?                       |
| 22:40      | There's a number of different ones.                               |
| 22:42      | I'm using the one that they initially had on their website.       |
| 22:47      | The, I don't know who made it.                                    |
| 22:49      | It's not, yeah, it's just because it's the first one              |
| 22:52      | I installed and it worked, but like the syntax,                   |
| 22:54      | if you pass a variable is command enter.                          |
| 22:57      | So like if you've got a script that needs a,                      |
| 23:01      | like a text input to run, you just hit command enter              |
| 23:04      | and then you type in the text after you type the name.            |
| 23:06      | So let me back up, I went too fast.                               |
| 23:08      | Okay, so you would hit command space for [[Alfred]], then SC,         |
| 23:12      | and that shows you all your scripts,                              |
| 23:14      | but maybe you've got a script that's gonna, you know,             |
| 23:16      | do something to a number.                                         |
| 23:18      | So you hit command enter instead of enter,                        |
| 23:21      | and then it runs a script, but it asks in [[Alfred]],                 |
| 23:24      | you know, what's your input?                                      |
| 23:25      | So if I write the number 42 and then hit enter,                   |
| 23:27      | it's gonna pass the 42 to [[Alfred]]                                  |
| 23:30      | and run the whole script for me.                                  |
| 23:31      | And I just find it really handy.                                  |
| 23:34      | And I've got that under my fingers now.                           |
| 23:36      | I know there are others out there,                                |
| 23:38      | but since I've got that one working and I'm happy with it,        |
| 23:40      | I just haven't even looked at the other options.                  |
| 23:42      | Yes, yeah, no, I have installed a few different ones.             |
| 23:46      | And the one, the one that stuck with me                           |
| 23:48      | is Stephen Millard's one from Thought Asylum.                     |
| 23:50      | And I'll put a link to both the,                                  |
| 23:52      | the one on the [[Alfred]] blog and Stephen's one in the show notes    |
| 23:55      | so that people can try both of them.                              |
| 23:58      | I think I found Stephen's first and just started using it         |
| 24:01      | because I was like, okay, this is, you know.                      |
| 24:02      | Yeah, if Stephen makes it, it's good, right?                      |
| 24:05      | You know, if Stephen makes it, you know, like,                    |
| 24:06      | all right, that's the word I should probably use in that one.     |
| 24:09      | Like, barrier to entry, like, barrier to acceptance passed.       |
| 24:12      | But yeah, and that one's really great                             |
| 24:14      | because it gives you options for, you know,                       |
| 24:16      | file input and all sorts of great things.                         |
| 24:20      | But yeah, I was, you know, I was curious                          |
| 24:23      | because I've seen lots of different ones out there                |
| 24:27      | for doing exactly the same                                        |
| 24:29      | because I think that's the great thing about the Mac              |
| 24:31      | and automation as it expands, right?                              |
| 24:35      | That it's not just that there is one solution                     |
| 24:39      | for all of these things.                                          |
| 24:41      | No, there's, there's links to,                                    |
| 24:43      | there's everybody's doing their own version of it.                |
| 24:46      | And that truly is, you know, why we can tell                      |
| 24:51      | the automation is massively growing                               |
| 24:52      | and people's interest in it is                                    |
| 24:54      | because so many people are creating their own solutions           |
| 24:56      | to the same problem.                                              |
| 24:58      | And it's not that they're wasting their time,                     |
| 25:00      | everybody's coming up with a different solution                   |
| 25:02      | and learning new things as we do it, which, you know,             |
| 25:06      | I really like.                                                    |
| 25:07      | Well, I think now I'm looking at his documentation                |
| 25:10      | and I'm realising now I have to run Stephen's, so.                |
| 25:14      | Oh yeah, I mean, I'm not surprised.                               |
| 25:16      | The second that I told you that that was there,                   |
| 25:18      | I was like, okay, Stephen is going to be miss,                    |
| 25:20      | like going missing mid-show                                       |
| 25:22      | because he's going to be switching versions of this,              |
| 25:26      | you know, or shortcut launchers.                                  |
| 25:28      | In certain URL to run shortcut from a specific folder,            |
| 25:31      | he's got an action for that.                                      |
| 25:32      | Okay, okay, I see.                                                |
| 25:34      | I see what you've done to me, Rose.                               |
| 25:37      | All right, I'm going to.                                          |
| 25:38      | I'm sorry, but I'm really not sorry.                              |
| 25:40      | Yeah, okay, so I'm going to set this aside,                       |
| 25:41      | I'll come back to it, but I guess the point is,                   |
| 25:44      | and this is true for all of the launchers,                        |
| 25:45      | [[LaunchBar]], [[Alfred]], you know,                                      |
| 25:48      | you know, all the common ones                                     |
| 25:50      | that people are checking out right now,                           |
| 25:53      | they've got great shortcuts implementation.                       |
| 25:55      | Like for instance, with [[Raycast]], it's just built-in.              |
| 26:00      | You don't even have to run a plugin,                              |
| 26:02      | you just type the name of the shortcut                            |
| 26:04      | with [[Spotlight]] after Ventura ships,                               |
| 26:08      | it'll be the same way.                                            |
| 26:10      | I actually kind of prefer the method of [[Alfred]]                    |
| 26:15      | and [[LaunchBar]] where you run a plugin                              |
| 26:17      | because then by having a qualifier,                               |
| 26:19      | like in my current version, it's a type SC,                       |
| 26:22      | then it just gives you a list of all your shortcuts,              |
| 26:24      | you don't get it mixed in with your contacts                      |
| 26:26      | and all your other database stuff.                                |
| 26:28      | So I kind of like that.                                           |
| 26:29      | Agreed.                                                           |
| 26:30      | I also found that having it all mixed together on iOS,            |
| 26:33      | which it is going to be actually                                  |
| 26:34      | in the next version of Mac OS Ventura when it launches,           |
| 26:38      | and the problem for me with that,                                 |
| 26:40      | and for iOS is I find that the shortcuts,                         |
| 26:43      | they don't seem to be kept in memory super well.                  |
| 26:46      | And so I'll search for something.                                 |
| 26:47      | And I know that I'm typing the exact name of the shortcut         |
| 26:50      | and takes a while to appear, if it appears,                       |
| 26:54      | or I have to type its full, complete name,                        |
| 26:57      | including any punctuation at the end,                             |
| 26:59      | and then it'll show up as the final options.                      |
| 27:01      | Like, well, I could have literally opened shortcuts               |
| 27:03      | and started searching and found it like within this timeframe.    |
| 27:06      | So yeah, I'm, yeah, I wish it was slightly better.                |
| 27:11      | And I prefer the fact that it's with a qualifier                  |
| 27:13      | because it's like when I open [[Alfred]]                              |
| 27:15      | with command space and the type IMDB space,                       |
| 27:17      | like I know I'm searching for a particular thing on IMDB,         |
| 27:20      | I know that I'm running a shortcut.                               |
| 27:22      | So, you know, I like having that just as an option.               |
| 27:26      | Though I recently discovered, David,                              |
| 27:28      | oh my gosh, I can't believe I missed this feature in [[Alfred]].      |
| 27:31      | You can enable your bookmarks to appear in [[Alfred]].                |
| 27:33      | And I did not realise that.                                       |
| 27:35      | And that's, you can either just have that show up,                |
| 27:38      | like in the default results or via a specific keyword,            |
| 27:41      | so that you can, you know, like type a keyword first,             |
| 27:45      | like, I don't know, BM for bookmark.                              |
| 27:48      | And then you would find all of your bookmarks like that,          |
| 27:52      | or just have them appear in the search results by default.        |
| 27:57      | And I'm so glad that that feature exists                          |
| 27:59      | because it shows up with a tiny little icon                       |
| 28:01      | of like a globe with a bookmark on it.                            |
| 28:03      | And so I know that that is a bookmark when that appears,          |
| 28:08      | but it's nice to see that more and more things                    |
| 28:11      | are just kind of like feeding into the other automation           |
| 28:14      | and general productivity apps that we all use every day.          |
| 28:18      | Yeah, and I just have those bookmarks show up                     |
| 28:20      | in general search because, I mean, what better way                |
| 28:22      | to get to a website than just start typing the name               |
| 28:25      | and have it jump there.                                           |
| 28:27      | All right, now you mentioned earlier,                             |
| 28:28      | [[BetterTouchTool]] and [[Stream Deck]].                                |
| 28:30      | Here's another ball of yarn that we've got                        |
| 28:33      | two pins connected suddenly.                                      |
| 28:35      | What are you doing with [[BetterTouchTool]]?                        |
| 28:38      | Well, I mean, first of all, shout out to [[BetterTouchTool]]        |
| 28:42      | and its keyboard shortcut action for shortcuts,                   |
| 28:47      | which you can use in shortcuts                                    |
| 28:48      | because I've used that a couple of places now,                    |
| 28:50      | and I love it, absolutely love it.                                |
| 28:53      | Yeah, I just, as a side, I've had it replace the hyper key.       |
| 28:56      | You know, I was using, I forget what's the name of the app,       |
| 28:59      | but I was using it for the hyper key.                             |
| 29:01      | Karabiner?                                                        |
| 29:02      | Yeah, carabiner elements, but, you know,                          |
| 29:04      | and they did get, it sorted out,                                  |
| 29:06      | but I feel like it's a running battle with Apple                  |
| 29:09      | in terms of, you know, that keyboard interrupt stuff,             |
| 29:12      | whereas this is just a text,                                      |
| 29:14      | this is just a keyboard shortcut,                                 |
| 29:17      | like more traditional means,                                      |
| 29:19      | and so I'm running hyper key through [[BetterTouchTool]] though.    |
| 29:22      | Anyway.                                                           |
| 29:23      | Nice, yeah, yeah, it is one of those apps                         |
| 29:25      | where it's just, it's continually adding these features           |
| 29:28      | and I feel like a lot of people end up missing                    |
| 29:31      | that some of these features exist                                 |
| 29:33      | because, I don't know, maybe the developer                        |
| 29:38      | behind [[BetterTouchTool]] ought to tutor their own whore more,     |
| 29:40      | he's doing a great job,                                           |
| 29:42      | or maybe we should just do a better job                           |
| 29:44      | telling everybody about them, probably both.                      |
| 29:47      | Let's blame us mostly because he's busy developing the app,       |
| 29:50      | but it's one of those things that I feel like                     |
| 29:52      | every time I go to look at [[BetterTouchTool]],                     |
| 29:55      | it has more cool new features                                     |
| 29:58      | and I'm really liking all of them                                 |
| 30:01      | and I'm especially liking the fact that right now                 |
| 30:04      | they've just added support.                                       |
| 30:06      | It's still in beta for [[Stream Deck]],                               |
| 30:09      | so you will no longer need the [[Stream Deck]] application            |
| 30:12      | on macOS, you would just be able to do everything                 |
| 30:15      | by a [[BetterTouchTool]].                                           |
| 30:17      | That is amazing as far as I'm concerned.                          |
| 30:20      | Yeah, [[Stream Deck]] plus [[BetterTouchTool]].                         |
| 30:25      | Yeah, exactly.                                                    |
| 30:27      | It is great.                                                      |
| 30:29      | The only problem I've got right now                               |
| 30:31      | is I've yet to sit down and spend a proper amount of time         |
| 30:34      | switching everything over from the [[Stream Deck]] app                |
| 30:37      | to the [[BetterTouchTool]] app,                                     |
| 30:39      | and so I have to quit [[BetterTouchTool]]                           |
| 30:42      | to be able to use my [[Stream Deck]]                                  |
| 30:44      | for the show notes and everything                                 |
| 30:46      | because I use the foot pedal                                      |
| 30:48      | and it switches to our show notes                                 |
| 30:51      | and appends a line right at the end                               |
| 30:53      | with the current timestamp                                        |
| 30:55      | so that I have that saved                                         |
| 30:57      | and then I can go back and add a note to it.                      |
| 30:59      | That was one of the ones                                          |
| 31:01      | that I went to make sure was working today                        |
| 31:04      | and went, oh no, actually,                                        |
| 31:06      | I need to quit [[BetterTouchTool]]                                  |
| 31:08      | and reopen the [[Stream Deck]] app                                    |
| 31:10      | so that everything works because otherwise                        |
| 31:12      | I'm going to be stuck and not adding notes to the show notes      |
| 31:14      | and that might get us in trouble with Jim                         |
| 31:16      | and we don't want to do that.                                     |
| 31:18      | I have to sit down and migrate everything over                    |
| 31:20      | but I think once I'm done with that                               |
| 31:22      | I'm going to install in the [[Stream Deck]] application.              |
| 31:24      | It's okay, but [[BetterTouchTool]]                                  |
| 31:26      | is going to allow me to do way more things                        |
| 31:29      | much more efficiently                                             |
| 31:31      | through my preferred means of doing things.                       |
| 31:34      | I mentioned earlier the shortcut action                           |
| 31:36      | that I have for tweeting a tweet with Tweetbot.                   |
| 31:39      | Well, if the native tweet action                                  |
| 31:42      | in the [[Stream Deck]] uses the Twitter API,                          |
| 31:45      | which is okay, but                                                |
| 31:47      | I like to have things                                             |
| 31:49      | actually go out using the apps that I prefer to use               |
| 31:52      | that I've configured for that                                     |
| 31:54      | so that I don't have to look into various things                  |
| 31:57      | and store credentials in lots of places.                          |
| 31:59      | I'd much prefer to just have an action                            |
| 32:02      | which goes, hey, shortcuts, go do the shortcut.                   |
| 32:05      | If I decide that I want to change the text                        |
| 32:07      | in that tweet at some point                                       |
| 32:09      | I'll be able to do that wherever I am                             |
| 32:11      | regardless of whether I'm on my Mac                               |
| 32:13      | or on my iPhone out and about in the park                         |
| 32:15      | or something.                                                     |
| 32:17      | It'll just be one thing everywhere                                |
| 32:19      | giving me the option to tweak                                     |
| 32:21      | all of the little components on the go.                           |
| 32:23      | Yeah, but once again,                                             |
| 32:25      | we're running automation from one place to the next.              |
| 32:28      | Yeah, exactly, because                                            |
| 32:30      | [[BetterTouchTool]] can just do                                     |
| 32:32      | a whole number of things                                          |
| 32:34      | all by itself, which is great.                                    |
| 32:36      | And I have to say one of the features                             |
| 32:38      | I'm really glad the developer added                               |
| 32:40      | for this is...                                                    |
| 32:43      | It's a two-way system                                             |
| 32:45      | so you can either replace the [[Stream Deck]]                         |
| 32:47      | with [[BetterTouchTool]]                                            |
| 32:49      | or you can add [[BetterTouchTool]] actions                          |
| 32:51      | to your [[Stream Deck]].                                              |
| 32:53      | So if your [[Stream Deck]] setup is perfect                           |
| 32:55      | pretty much on you just wanted to add a few more actions          |
| 32:57      | you can just use the [[BetterTouchTool]] action                     |
| 32:59      | to add [[BetterTouchTool]] actions,                                 |
| 33:01      | whatever they might be.                                           |
| 33:03      | Or you can just replace the whole thing                           |
| 33:06      | which is my intention to do.                                      |
| 33:08      | I should probably start it the other way round, right?            |
| 33:10      | But I'll survive.                                                 |
| 33:14      | This episode of Automators is brought to you by Doppler.          |
| 33:16      | In software development,                                          |
| 33:18      | secrets are a private piece of information that act as keys       |
| 33:20      | and those keys unlock protective resources                        |
| 33:22      | or sensitive data.                                                |
| 33:24      | This can be stressful to configure and manage                     |
| 33:26      | especially when sharing secrets                                   |
| 33:28      | across different teams and clouds.                                |
| 33:30      | Thankfully, those days are over.                                  |
| 33:32      | Introducing Doppler, the first universal secrets platform.        |
| 33:34      | It enables developers to automate                                 |
| 33:36      | the pain away of managing secrets                                 |
| 33:38      | along with the hidden files used to merge them                    |
| 33:40      | known as M-Files.                                                 |
| 33:42      | Doppler is your team's central source of truth                    |
| 33:44      | for secrets and app configuration                                 |
| 33:46      | across all environments and clouds                                |
| 33:48      | whether they're in Docker, AWS, Vercel,                           |
| 33:50      | or anywhere else.                                                 |
| 33:52      | Doppler works where you work and as your stack evolves            |
| 33:54      | Doppler remains simple.                                           |
| 33:56      | From startups to enterprises                                      |
| 33:58      | more than 11,000 customers big and small                          |
| 34:00      | are using Doppler so they can keep their secrets                  |
| 34:02      | and app configuration in sync across devices,                     |
| 34:04      | environments, and team members.                                   |
| 34:06      | Say goodbye to M-Files.                                           |
| 34:08      | Set up Doppler for your team in less than four minutes.           |
| 34:10      | Sign up at Doppler.com                                            |
| 34:12      | slash L slash Automators.                                         |
| 34:14      | That's all lowercase.                                             |
| 34:16      | That's Doppler.com                                                |
| 34:18      | slash L slash Automators                                          |
| 34:20      | all lowercase. Go there now.                                      |
| 34:22      | Our thanks to Doppler for their support of this show              |
| 34:24      | and Relay FM.                                                     |
| 34:26      | So there are                                                      |
| 34:28      | additional apps that are now supporting                           |
| 34:30      | fire enough shortcuts.                                            |
| 34:32      | I guess we should have expected this                              |
| 34:34      | because you can run them via terminal,                            |
| 34:36      | you can run them via AppleScript, of course.                     |
| 34:38      | All these third-party apps are going to let you start             |
| 34:40      | fire enough shortcuts and                                         |
| 34:42      | [[Brett Terpstra]] and                                                |
| 34:44      | his supporters over a bunch                                       |
| 34:46      | have now got it running as part of the [[Bunch]] app.                 |
| 34:48      | Yeah, yeah.                                                       |
| 34:50      | I mean, it was kind of already there                              |
| 34:52      | in many ways. They just added the documentation                   |
| 34:54      | for it but equally, you know,                                     |
| 34:56      | that's what a lot of people probably                              |
| 34:58      | just wanted to be able to go,                                     |
| 35:00      | yeah, I can do this now.                                          |
| 35:02      | I have to say, whenever I'm tweaking Bunch stuff,                 |
| 35:04      | I have a bunch to tweak my bunches.                               |
| 35:06      | David, this is how meta I get.                                    |
| 35:08      | And what it does is it opens the                                  |
| 35:10      | Bunch folder in [[Visual Studio Code]]                                |
| 35:12      | and it opens the Bunch website                                    |
| 35:14      | so I can check, you know, my front-matter keys                    |
| 35:16      | and everything and search for stuff.                              |
| 35:18      | I mean, it's amazing how many times I find                        |
| 35:20      | a new feature that I didn't realise existed                       |
| 35:22      | as well as part of that.                                          |
| 35:24      | But yeah, they've added official                                  |
| 35:26      | shortcuts documentation, which is great.                          |
| 35:28      | So I'm glad that that's there as options.                         |
| 35:30      | I need to go in                                                   |
| 35:32      | and really give Bunch a legitimate                                |
| 35:34      | shot, you know, because                                           |
| 35:36      | the problem is, I mean, this is a setup                           |
| 35:38      | app. It's to set up your Mac                                      |
| 35:40      | during work. And I have built                                     |
| 35:42      | so many scripts into                                              |
| 35:44      | [[Keyboard Maestro]] to do that already for me.                       |
| 35:46      | And, you know, with [[Keyboard Maestro]],                             |
| 35:48      | you can do just about anything.                                   |
| 35:50      | But Bunch can too.                                                |
| 35:52      | It can.                                                           |
| 35:54      | And Bunch does window positioning too, right?                     |
| 35:56      | You can set the window positions.                                 |
| 35:58      | No, Bunch doesn't do window positioning,                          |
| 36:00      | but you can just run an AppleScript                              |
| 36:02      | to tell [[Moom]] to do your window positioning,                       |
| 36:04      | which is what I do.                                               |
| 36:06      | One of my favourite Bunch features, to be honest, though,          |
| 36:08      | is the new Bunch with open apps.                                  |
| 36:10      | So I realise, hey, I've got a bunch of apps open                  |
| 36:12      | and it doesn't matter if this is like a temporary                 |
| 36:14      | thing that I'm going to be doing for like a few days              |
| 36:16      | or if it's a permanent thing I'm going to be doing                |
| 36:18      | for a few months. I can just say, you know,                       |
| 36:20      | Bunch menu bar icon,                                              |
| 36:22      | new Bunch with open apps                                          |
| 36:24      | and I can arrange things to my heart's content                    |
| 36:26      | because that's what I end up doing                                |
| 36:28      | on a frequent basis.                                              |
| 36:30      | And I really like that feature.                                   |
| 36:32      | To me, it's                                                       |
| 36:34      | it is, first of all,                                              |
| 36:36      | the setup app                                                     |
| 36:38      | that actually clicked in my head.                                 |
| 36:40      | And secondly, I find it                                           |
| 36:42      | is more                                                           |
| 36:44      | it feels like it's kind of like                                   |
| 36:46      | a lightweight alternative to doing                                |
| 36:48      | this sort of thing in [[Keyboard Maestro]],                           |
| 36:50      | but that's underselling it because it really is                   |
| 36:52      | powerful. It's incredibly powerful                                |
| 36:54      | with all of the things                                            |
| 36:56      | that it can do.                                                   |
| 36:58      | And it's text-based, which is, of course,                         |
| 37:00      | you know, I love text-based things                                |
| 37:02      | because I'm that kind of weirdo.                                  |
| 37:04      | But it's got tagging and things so I can have                     |
| 37:06      | this particular Bunch hidden                                      |
| 37:08      | at these times of day or,                                         |
| 37:10      | you know, actually hidden because I'm on                          |
| 37:12      | this Mac even though all of the things                            |
| 37:14      | sync to all the Macs. And I think that's one                      |
| 37:16      | of the problems that I occasionally run                           |
| 37:18      | into with [[Keyboard Maestro]],                                       |
| 37:20      | is [[Keyboard Maestro]]                                               |
| 37:22      | is, like, disable this group on this                              |
| 37:24      | Mac rather than                                                   |
| 37:26      | enable this group on this Mac.                                    |
| 37:28      | And I do sometimes wish                                           |
| 37:30      | that I could flip that and have it                                |
| 37:32      | disabled by default and only enabled on                           |
| 37:34      | certain Macs because I have run into                              |
| 37:36      | trouble a couple of times now where                               |
| 37:38      | my, one of my personal Macs                                       |
| 37:40      | is trying to run a bunch of work scripts and it's                 |
| 37:42      | like, hey,                                                        |
| 37:44      | I can't find any of these files.                                  |
| 37:46      | What's going on? And I'm like, you're not my                      |
| 37:48      | work Mac. That's what's going on. So                              |
| 37:50      | I actually have a sub Mac                                         |
| 37:52      | inside of [[Keyboard Maestro]] to handle                              |
| 37:54      | that now where it's just say, this                                |
| 37:56      | has, hey, are you this Mac? No,                                   |
| 37:58      | quit. And I just, I have                                          |
| 38:00      | a check if work Mac                                               |
| 38:02      | Mac were run as a sub routine                                     |
| 38:04      | at the start of every one of those                                |
| 38:06      | automated work Macs, work Macs.                                   |
| 38:08      | So that solves that problem                                       |
| 38:10      | quite neatly, you know, just in case                              |
| 38:12      | I forget to disable                                               |
| 38:14      | that group.                                                       |
| 38:16      | But I just really like                                            |
| 38:18      | the fact that all of these                                        |
| 38:20      | you know, these scripts are just right                            |
| 38:22      | there and I can find every single one of                          |
| 38:24      | them that I have, you know, run                                   |
| 38:26      | this sort of sub routine in super easily                          |
| 38:28      | or, you know, tag                                                 |
| 38:30      | them with this or organised into folders                          |
| 38:32      | or whatever.                                                      |
| 38:34      | And that to me ends up working                                    |
| 38:36      | very well for                                                     |
| 38:38      | just setting up my, my everyday                                   |
| 38:40      | routines.                                                         |
| 38:42      | Did I tell you I check and out on                                 |
| 38:44      | my own into                                                       |
| 38:46      | MacBook Air?                                                      |
| 38:48      | I mean, I'm both surprised and not surprised                      |
| 38:50      | because what, you've got this super                               |
| 38:52      | ultra powered 14 inch, right?                                     |
| 38:54      | 16 inch. Yeah, I got the big one.                                 |
| 38:56      | 16 inch, yeah.                                                    |
| 38:58      | Yeah, I have a, I have a 14 inch                                  |
| 39:00      | which I sort of impulse purchase                                  |
| 39:02      | before my trip to New York and the thing                          |
| 39:04      | is amazing. The battery lasted the entire                         |
| 39:06      | like journey there.                                               |
| 39:08      | So I was here until                                               |
| 39:10      | late in the evening the day before I went                         |
| 39:12      | to my place and I went and stayed at my parents                   |
| 39:14      | so that we could all go to the airport together.                  |
| 39:16      | And from the time that I left here to                             |
| 39:18      | when I got to the hotel in New York I did                         |
| 39:20      | not charge the battery. I used it                                 |
| 39:22      | a chunk at the airport and then                                   |
| 39:24      | a, the entire flight there                                        |
| 39:26      | running a couple of different                                     |
| 39:28      | websites to just do some                                          |
| 39:30      | some fun stuff for me, which yes                                  |
| 39:32      | I know a lot of people go, oh my gosh                             |
| 39:34      | sounds like work and it was, it was good                          |
| 39:36      | fun as far as I was concerned. And I was                          |
| 39:38      | doing that the entire flight there                                |
| 39:40      | and I got there and I still had like 20%                          |
| 39:42      | battery left. It was great.                                       |
| 39:44      | Yeah, I know. These MacBook Pros                                  |
| 39:46      | are amazing but it would be nice                                  |
| 39:48      | to have one that's really thin and light                          |
| 39:50      | but I, right now I'm just enjoying                                |
| 39:52      | having one computer so much where                                 |
| 39:54      | I don't have to worry about                                       |
| 39:56      | is the file on this computer. The file is always                  |
| 39:58      | on this computer, you know, and                                   |
| 40:00      | and that is a, that is a very                                     |
| 40:02      | nice thing. So I don't know, maybe eventually                     |
| 40:04      | I'll get one but, but I, with the launch                          |
| 40:06      | you know, as things are heading up to launch                      |
| 40:08      | I was all excited about what I'm like, you know what              |
| 40:10      | I think I'm just going to take a step back                        |
| 40:12      | and see how things go. Yeah, that's                               |
| 40:14      | certainly a feature where you may not                             |
| 40:16      | want to ignore certain things on certain                          |
| 40:18      | devices but for me that's also                                    |
| 40:20      | you know, you switch                                              |
| 40:22      | contexts, right? So you                                           |
| 40:24      | have, you know, your podcasting context                           |
| 40:26      | and things like that. Well, how                                   |
| 40:28      | you know, imagine that you were doing                             |
| 40:30      | you, like                                                         |
| 40:32      | whenever you context switch                                       |
| 40:34      | you're, you would                                                 |
| 40:36      | use a bunch perhaps or something else too                         |
| 40:38      | to change context and it would                                    |
| 40:40      | set a variable to tell you what context you're in                 |
| 40:42      | and now imagine that all of your                                  |
| 40:44      | other bunches read that variable and                              |
| 40:46      | hide or show themselves contextually                              |
| 40:48      | based on that, if that were                                       |
| 40:50      | appropriate. Yeah, I have                                         |
| 40:52      | got to do this. I've just got to get in                           |
| 40:54      | there and try. I do think                                         |
| 40:56      | that like the fact that it's just a text file makes               |
| 40:58      | it super easy to fix                                              |
| 41:00      | whereas as much as I love keyboard                                |
| 41:02      | Maestro, they're pretty tedious                                   |
| 41:04      | the way I've got these things set up and like                     |
| 41:06      | getting changes and everything                                    |
| 41:08      | it's just not that easy. It's not                                 |
| 41:10      | certainly as easy as just writing a lot of text.                  |
| 41:12      | So I                                                              |
| 41:14      | I've just got to do it. The problem                               |
| 41:16      | is that I spent so much time building them                        |
| 41:18      | in keyboard Maestro that like                                     |
| 41:20      | I have that sunk cost fallacy, you know.                          |
| 41:22      | Yes, well                                                         |
| 41:24      | don't forget you can always run your keyboard                     |
| 41:26      | Maestro macro                                                     |
| 41:28      | to open your                                                      |
| 41:30      | setup and then just use the bunch menu                            |
| 41:32      | to                                                                |
| 41:34      | create a new bunch from the currently open                        |
| 41:36      | apps, which of course                                             |
| 41:38      | will save you a whole chunk                                       |
| 41:40      | of time off the bat. And then don't delete the                    |
| 41:42      | original keyboard Maestro macro, just put it in                   |
| 41:44      | a group                                                           |
| 41:46      | or disable it or something                                        |
| 41:48      | so that you can come back to it later if you                      |
| 41:50      | want or need something or you miss something                      |
| 41:52      | or similar. But it's also I find                                  |
| 41:54      | sometimes switching the systems like this is a good               |
| 41:56      | opportunity to go, I never                                        |
| 41:58      | use these. Like these ones are just ones                          |
| 42:00      | that I never use or                                               |
| 42:02      | that's why that app is always opening. I hate                     |
| 42:04      | that. You know, especially                                        |
| 42:06      | for me, I periodically                                            |
| 42:08      | switch between using [[Safari]] and [[Safari Technology Preview]].                 |
| 42:12      | And to start with in                                                  |
| 42:14      | in Bunch actually said, hey, open this                            |
| 42:16      | in [[Safari]]. You know, open                                         |
| 42:18      | this URL in [[Safari]] or I had                                       |
| 42:20      | I have an AppleScript, which I use frequently                    |
| 42:22      | tell application [[Safari]] to open new                               |
| 42:24      | window. Because whenever I'm recording                            |
| 42:26      | a podcast, I hide everything and then I                           |
| 42:28      | have [[Safari]] open a new window                                     |
| 42:30      | where all of the URLs                                             |
| 42:32      | for the episode get opened.                                       |
| 42:34      | So that I'll, you know, make sure that                            |
| 42:36      | I actually have the things that I need                            |
| 42:38      | available, but it's not mixed in with everything                  |
| 42:40      | else, right?                                                      |
| 42:42      | And I realised                                                    |
| 42:44      | that it was telling [[Safari]] to open                                |
| 42:46      | and then [[Safari Technology Preview]] was getting                    |
| 42:48      | the URLs. That was partially a me problem                         |
| 42:50      | because I had not done things quite right.                        |
| 42:52      | I'm partially, hey, Rose                                          |
| 42:54      | doesn't have a variable setup here                                |
| 42:56      | so that she knows what her current favourite browser is.           |
| 42:58      | Well, I just set one global                                       |
| 43:00      | variable and that's it done.                                      |
| 43:02      | So, so yeah, I                                                    |
| 43:04      | have to say it's really nice just being able to search            |
| 43:06      | all of those files. You could open them all                       |
| 43:08      | in [[BBEdit]]. I use visual studio                                   |
| 43:10      | code because there is a bunch extension                           |
| 43:12      | for [[Visual Studio Code]], which                                     |
| 43:14      | helps you with autocomplete and things like that                  |
| 43:16      | for                                                               |
| 43:18      | you know, like all of the                                         |
| 43:20      | front matter variables and things like that,                      |
| 43:22      | but it's really nice just being able to                           |
| 43:24      | search for everywhere that I have used                            |
| 43:26      | this word or that word,                                           |
| 43:28      | you know, like where did I, you know                              |
| 43:30      | try and do [[Audio Hijack]] stuff? Cool.                              |
| 43:32      | I've decided that everything in [[Audio Hijack]]-wise                             |
| 43:34      | is going to be done through a snippet                 |
| 43:36      | now so that it's all going to be done the same                    |
| 43:38      | way across every                                                  |
| 43:40      | podcast. Great. So now                                            |
| 43:42      | I just find everywhere if you used [[Audio Hijack]]                   |
| 43:44      | replace that all with a sub macro very, very                      |
| 43:46      | quickly and done.                                                 |
| 43:48      | So yeah, that certainly has saved                                 |
| 43:50      | me a bunch of time.                                               |
| 43:52      | There's been several applications that have                       |
| 43:54      | been adding shortcuts actions.                                    |
| 43:56      | It's not just all of our favourite animation                       |
| 43:58      | tools.                                                            |
| 44:00      | We're going to talk about [[Keyboard Maestro]] in a minute, but       |
| 44:02      | let's talk about some of the others that have                     |
| 44:04      | suddenly shown up with shortcut support.                          |
| 44:06      | Yeah, so one that                                                 |
| 44:08      | came to mind today is Kaleidoscope,                               |
| 44:10      | which is a tool that I use                                        |
| 44:12      | for comparing versions of the same                                |
| 44:14      | file or, you know, versions of the                                |
| 44:16      | folders. A lot                                                    |
| 44:18      | as a developer tool that's added support                          |
| 44:20      | most recently for the folders                                     |
| 44:22      | comparison option,                                                |
| 44:24      | but it already had text                                           |
| 44:26      | comparison. I didn't realise that it                              |
| 44:28      | snuck in there. Imagine, David, that you have                     |
| 44:30      | two versions of a bunch file or                                   |
| 44:32      | two different bunch files and you just want to compare            |
| 44:34      | what's the same or what's different between them.                 |
| 44:36      | You could do that with Kaleidoscope.                              |
| 44:38      | But of course, [[Rogue Amoeba]]                                       |
| 44:40      | has also been bringing their A-game.                              |
| 44:42      | Audio hijack has full                                             |
| 44:44      | shortcut support now, including their own JavaScript              |
| 44:46      | engine. Woo!                                                      |
| 44:48      | And then they did the same thing with [[SoundSource]],                |
| 44:50      | which is great.                                                   |
| 44:52      | And [[Taskheat]] is another one that                                   |
| 44:54      | I saw sneak in there recently                                     |
| 44:56      | with [[Shortcuts]] support. It's an                                    |
| 44:58      | app I use when I'm trying to figure out                           |
| 45:00      | dependencies                                                      |
| 45:02      | between tasks or projects that need                               |
| 45:04      | doing. So, you know, there are these                              |
| 45:06      | things I need to do and I'm going to use                          |
| 45:08      | an example that everybody will hopefully understand.              |
| 45:10      | Like changing the sheets on the                                   |
| 45:12      | bed, right? So, like, step one,                                   |
| 45:14      | you've got to take the sheets off the bed. You can't              |
| 45:16      | do step two, wash the sheets until you've                         |
| 45:18      | done step one. And you can put clean                              |
| 45:20      | sheets on the bed after you've done step one,                     |
| 45:22      | but you could do that in parallel with step two                   |
| 45:24      | unless you only have one set of clean sheets,                     |
| 45:26      | in which case you have to do one, two, and three.                 |
| 45:28      | Well, imagine you've got hundreds of those                        |
| 45:30      | and you have to figure everything out on when can you do          |
| 45:32      | different things and which, you know, which ones                  |
| 45:34      | can you actually start with right now and                         |
| 45:36      | which ones need other things first.                               |
| 45:38      | Well, that's what I use [[Taskheat]] for.                              |
| 45:40      | So, I'm glad that that has [[Shortcuts]] support                       |
| 45:42      | just because that                                                 |
| 45:44      | for certain projects will be really useful.                       |
| 45:46      | Yeah, and I want to call out [[SoundSource]] because                  |
| 45:48      | this is, you know, we talk about                                  |
| 45:50      | the [[Rogue Amoeba]] apps a lot. We're podcasters.                     |
| 45:52      | These are really important tools                                  |
| 45:54      | for us. But [[SoundSource]]                                           |
| 45:56      | allows you to easily control                                      |
| 45:58      | the inputs and outputs on your Mac.                               |
| 46:00      | There's a lot of people who need                                  |
| 46:02      | this stuff for a lot of reasons. Like                             |
| 46:04      | let's say that we're going through a                              |
| 46:06      | pandemic and you suddenly have to do a lot                        |
| 46:08      | of video calls and you just want to automate                      |
| 46:10      | making sure that you go to your good mic                          |
| 46:12      | when you get on a zoom call.                                      |
| 46:14      | Now all that is totally                                           |
| 46:16      | done through shortcuts                                            |
| 46:18      | with this great little [[SoundSource]] app.                           |
| 46:20      | I just think it's                                                 |
| 46:22      | them getting shortcut support for [[SoundSource]]                     |
| 46:24      | to me was almost more exciting to me                              |
| 46:26      | than them getting it for [[Audio Hijack]].                            |
| 46:28      | Yeah, I understand                                                |
| 46:30      | why they released,                                                |
| 46:32      | you know, the                                                     |
| 46:34      | [[Audio Hijack]] on first podcasters                                  |
| 46:36      | as a group tend to be                                             |
| 46:38      | more familiar with                                                |
| 46:40      | techiness and creating                                            |
| 46:42      | shortcuts and automations                                         |
| 46:44      | and so on. But I'm                                                |
| 46:46      | very glad that they brought it to [[SoundSource]]                     |
| 46:48      | because I have                                                    |
| 46:50      | used that in a bunch of places. It's actually                     |
| 46:52      | replacing                                                         |
| 46:54      | my brew install of                                                |
| 46:56      | Switch Audio OS X                                                 |
| 46:58      | is what the name of                                               |
| 47:00      | the brew bundle that I had installed                              |
| 47:02      | was, which would also                                             |
| 47:04      | let me do the same thing.                                         |
| 47:06      | And I much prefer using                                           |
| 47:08      | [[SoundSource]] for this. It's                                        |
| 47:10      | much simpler                                                      |
| 47:12      | and much easier to fix as well.                                   |
| 47:14      | Yeah, exactly.                                                    |
| 47:16      | Do we miss any                                                    |
| 47:18      | Drop Zone? Yeah, Drop Zone has an added                           |
| 47:20      | actions inside of shortcuts. It's added                           |
| 47:22      | inside                                                            |
| 47:24      | of Drop Zone itself.                                              |
| 47:26      | So Drop Zone is an app that lives in your                         |
| 47:28      | menu bar where you can drag files                                 |
| 47:30      | onto the Drop Zone                                                |
| 47:32      | and you have different actions that                               |
| 47:34      | show up. So one that I use all the time                           |
| 47:36      | is to install application                                         |
| 47:38      | just because it allows me to install                              |
| 47:40      | applications really easily, but they've added                     |
| 47:42      | support for running a shortcut                                    |
| 47:44      | through dropping a file onto it.                                  |
| 47:46      | So you can just drop a file                                       |
| 47:48      | onto a particular shortcut                                        |
| 47:50      | and it has a list                                                 |
| 47:52      | of all of your shortcuts right there and                          |
| 47:54      | then you can just, you know,                                      |
| 47:56      | drag something onto it, which is                                  |
| 47:58      | pretty nice. Yeah, rename                                         |
| 48:00      | actions, filing actions,                                          |
| 48:02      | like forwarding actions.                                          |
| 48:04      | Yeah, yeah, all sorts of things.                                  |
| 48:06      | Yeah, receipts go to the account and you                          |
| 48:08      | drop it on there. You create a shortcut                           |
| 48:10      | to rename it and put it in                                        |
| 48:12      | a shared [[Dropbox]] or something.                                    |
| 48:14      | You do that as simply just dragging                               |
| 48:16      | it onto your menu bar with Drop Zone.                             |
| 48:18      | I feel like Drop Zone doesn't get enough credit.                  |
| 48:20      | I use that app a lot too. Maybe                                   |
| 48:22      | one day we'll come back to that because                           |
| 48:24      | there's actually quite a bit                                      |
| 48:26      | you can do with that application.                                 |
| 48:28      | There is and                                                      |
| 48:30      | it's a very useful tool. It's also                                |
| 48:32      | part of Setup for anybody who is a Setup                          |
| 48:34      | subscriber. So,                                                   |
| 48:36      | yeah, enjoy the                                                   |
| 48:38      | extra features. It took a little while for                        |
| 48:40      | it to come out of the just                                        |
| 48:42      | purchase directly version and be available in the App Store       |
| 48:44      | and through Setup.                                                |
| 48:46      | And, yeah, but                                                    |
| 48:48      | now it's available everywhere. So                                 |
| 48:50      | it's really great. You know, something I don't                    |
| 48:52      | really stop to appreciate often enough                            |
| 48:54      | is just shortcuts                                                 |
| 48:56      | on the Mac and all the                                            |
| 48:58      | goodness that brings. We                                          |
| 49:00      | know when it first launched                                       |
| 49:02      | it was a troubled start.                                          |
| 49:04      | The app had a lot of issues                                       |
| 49:06      | just running basic things                                         |
| 49:08      | and some of the initial actions                                   |
| 49:10      | weren't fully baked when they launched                            |
| 49:12      | it and they were                                                  |
| 49:14      | working with [[SwiftUI]]. There's a whole bunch of reasons            |
| 49:16      | behind why it had a tough                                         |
| 49:18      | launch. But over the course                                       |
| 49:20      | of the year they really got it together and now                   |
| 49:22      | all of a sudden you start to see                                  |
| 49:24      | the payoff of this. I mean, we've been talking                    |
| 49:26      | this whole show about all these third party                       |
| 49:28      | apps that are like, oh, yeah, by the way                          |
| 49:30      | we're going to add the entire                                     |
| 49:32      | feature set of shortcuts to our automation                        |
| 49:34      | tools, you know, with this one action.                            |
| 49:36      | And also                                                          |
| 49:38      | all these apps like                                               |
| 49:40      | [[Rogue Amoeba]] or these companies like [[Rogue Amoeba]]                 |
| 49:42      | and Omni Group and all these companies                            |
| 49:44      | all of a sudden are just showing up with these                    |
| 49:46      | rich, powerful                                                    |
| 49:48      | shortcuts actions that never                                      |
| 49:50      | would have existed any other way.                                 |
| 49:52      | Like they were never going to write                               |
| 49:54      | a collection of AppleScripts to do all this                      |
| 49:56      | stuff and                                                         |
| 49:58      | the way Automator was engineered                                  |
| 50:00      | they were never really given                                      |
| 50:02      | the hooks they needed to go in and do the                         |
| 50:04      | stuff that they can do with shortcuts.                            |
| 50:06      | It's like all of a sudden                                         |
| 50:08      | applications that didn't really                                   |
| 50:10      | have an automation story now                                      |
| 50:12      | do because of this thing                                          |
| 50:14      | showing up on the Mac. It's just, it's really                     |
| 50:16      | great and I don't know, I'm just                                  |
| 50:18      | going to stop and gloat for a minute about                        |
| 50:20      | how awesome that is.                                              |
| 50:22      | It is, yeah, it is truly awesome                                  |
| 50:24      | and it's just lovely to see                                       |
| 50:26      | all of these developers                                           |
| 50:28      | going, well, yeah                                                 |
| 50:30      | clearly this is                                                   |
| 50:32      | worth it. They                                                    |
| 50:34      | already wanted many cases                                         |
| 50:36      | to re-add this stuff or                                           |
| 50:38      | to add it but there just                                          |
| 50:40      | wasn't demand for it and more and more people                     |
| 50:42      | are finding that automation                                       |
| 50:44      | is a thing and it's                                               |
| 50:46      | perhaps less difficult than they expected.                        |
| 50:48      | So I'm                                                            |
| 50:50      | very glad that that's happening.                                  |
| 50:54      | This episode of The Automators is brought                         |
| 50:56      | to you by Hunter Douglas.                                         |
| 50:58      | Go to hunterdouglas.com                                           |
| 51:00      |/automators and take advantage                               |
| 51:02      | of the generous rebate savings opportunities                      |
| 51:04      | on select styles.                                                 |
| 51:06      | We all want to live well and ease                                 |
| 51:08      | in comfort and style and Hunter Douglas                           |
| 51:10      | can help you do just that with their                              |
| 51:12      | innovative window shade designs                                   |
| 51:14      | gorgeous fabrics and control systems                              |
| 51:16      | so advanced they can be scheduled                                 |
| 51:18      | to automatically adjust to their optimal                          |
| 51:20      | position throughout the day.                                      |
| 51:22      | We're automators. Our window                                      |
| 51:24      | covering should be to Hunter Douglas                              |
| 51:26      | shades diffuse harsh sunlight                                     |
| 51:28      | instead casting a beautiful glow across                           |
| 51:30      | the room with their adaptability                                  |
| 51:32      | you can enjoy the view outside a window                           |
| 51:34      | without needing to give up your privacy                           |
| 51:36      | and you can bring all of this together                            |
| 51:38      | with Hunter Douglas's power view technology.                      |
| 51:40      | This ensures that your                                            |
| 51:42      | shades will automatically reposition                              |
| 51:44      | for the perfect balance of light                                  |
| 51:46      | privacy and insulation morning                                    |
| 51:48      | noon and night. So if you've got a room                           |
| 51:50      | where the afternoon sun always starts                             |
| 51:52      | to over bear your Hunter Douglas                                  |
| 51:54      | shades can solve that problem for you                             |
| 51:56      | there's no human interaction needed                               |
| 51:58      | you can just keep working or relaxing                             |
| 52:00      | or doing anything other than worrying                             |
| 52:02      | about that blinding sun coming through                            |
| 52:04      | your window. Hunter Douglas makes                                 |
| 52:06      | some of the finest window treatments                              |
| 52:08      | and then when you add that automation element                     |
| 52:10      | to it you just can't beat it.                                     |
| 52:12      | Of course they're compatible with Apple Home Kit                  |
| 52:14      | but they also work with Amazon Alexa                              |
| 52:16      | Google Assistant, IFTTT                                           |
| 52:18      | and more. I know that                                             |
| 52:20      | listeners of this show would really love to be able               |
| 52:22      | to automate this stuff themselves too                             |
| 52:24      | helping them integrate their shades                               |
| 52:26      | with other products in their homes and you can                    |
| 52:28      | do that with Hunter Douglas.                                      |
| 52:30      | So with Hunter Douglas you can live beautifully                   |
| 52:32      | enjoying greater convenience and hand                             |
| 52:34      | style and increase comfort in your home                           |
| 52:36      | throughout the day while putting on your                          |
| 52:38      | geek hat and making everything happen                             |
| 52:40      | automatically. I love it. Visit                                   |
| 52:42      | hunterdouglas.com                                                 |
| 52:44      | today for your free style gets                                    |
| 52:46      | smarter design guide                                              |
| 52:48      | with fresh takes, creative ideas and smart                        |
| 52:50      | solutions for dressing your windows.                              |
| 52:52      | Once again that's hunterdouglas.com/automators                    |
| 52:54      | for your                                         |
| 52:56      | free design guide and our thanks to Hunter                        |
| 52:58      | Douglas for their support of the Automators                       |
| 53:00      | podcast and all of Relay FM.                                      |
| 53:04      | So David we've been dancing around                                |
| 53:06      | all episode.                                                      |
| 53:08      | [[Keyboard Maestro]]. [[Keyboard Maestro]]                                  |
| 53:10      | like everything else and like it always                           |
| 53:12      | does has brought it's a game.                                     |
| 53:14      | Jewel Way Shortcut Support.                                       |
| 53:16      | Shortcut support inside of [[Keyboard Maestro]].                       |
| 53:18      | [[Keyboard Maestro]] support inside of Shortcuts.                      |
| 53:20      | That's it. We're done right?                                      |
| 53:22      | We can just walk out of here. Mic drop.                           |
| 53:24      | Yeah well I mean what he did was                                  |
| 53:26      | he attacked the problem                                           |
| 53:28      | from both sides. So                                               |
| 53:30      | keyboard when you open Shortcuts                                  |
| 53:32      | and you look at the app list now there's a                         |
| 53:34      | listening for [[Keyboard Maestro]] and                                |
| 53:36      | there are a bunch of actions in there                             |
| 53:38      | where you can run [[Keyboard Maestro]]                                |
| 53:40      | scripts out                                                       |
| 53:42      | of Shortcuts now.                                                 |
| 53:44      | And you can pass information                                      |
| 53:46      | to it. So you can actually turn it                                |
| 53:48      | into basically a [[Keyboard Maestro]] variable                        |
| 53:50      | and                                                               |
| 53:52      | the first half of this is okay I'm writing Shortcuts              |
| 53:54      | but [[Keyboard Maestro]] does a couple things                         |
| 53:56      | that Shortcuts doesn't do very well                               |
| 53:58      | actually does a lot of things                                     |
| 54:00      | Shortcuts doesn't do very well                                    |
| 54:02      | but you could say well okay                                       |
| 54:04      | as I finish up running the Shortcuts                              |
| 54:06      | but I just want to run an action                                  |
| 54:08      | in Shortcuts that's going to open the Keyboard                    |
| 54:10      | Maestro engine and run a [[Keyboard Maestro]] script                  |
| 54:12      | and you can do that now.                                          |
| 54:14      | Yeah yeah and I have to say                                       |
| 54:16      | I really like                                                     |
| 54:18      | something that sounds so                                          |
| 54:20      | very simple just like execute                                     |
| 54:22      | macro. That's of course it                                        |
| 54:24      | but I really like that                                            |
| 54:26      | there are more things                                             |
| 54:28      | than that available to us.                                        |
| 54:30      | You mentioned set variable and I think                            |
| 54:32      | this one is very                                                  |
| 54:34      | underrated because                                                |
| 54:36      | it is an incredibly useful variable                               |
| 54:38      | so variables inside of Keyboard                                   |
| 54:40      | Maestro for people                                                |
| 54:42      | who aren't aware are by default global.                           |
| 54:44      | So you can prefix them                                            |
| 54:46      | with for example the word instance                                |
| 54:48      | which will then scope it to your particular                       |
| 54:50      | macro. So inside                                                  |
| 54:52      | of a macro I might have something                                 |
| 54:54      | that's called instance file                                       |
| 54:56      | and instance file name                                            |
| 54:58      | and that means the outside of that macro                          |
| 55:00      | when I'm running another macro those variables                    |
| 55:02      | will be completely empty and they will not have anything          |
| 55:04      | in them but by default                                            |
| 55:06      | the variables are global                                          |
| 55:08      | and they're persistent so they will just stay                     |
| 55:10      | and they'll sync to an extent                                     |
| 55:12      | as well. So they'll be                                            |
| 55:14      | everywhere and                                                    |
| 55:16      | that's really useful so one of the things                         |
| 55:18      | that I use this for is I have a variable                          |
| 55:20      | it's a permanent variable and it's called                         |
| 55:22      | automators episode no                                             |
| 55:24      | no standing for number                                            |
| 55:26      | and that is something that I set                                  |
| 55:28      | every time we go to record an episode                             |
| 55:30      | so the bunch that I have that starts                              |
| 55:32      | my automators recording session                                   |
| 55:34      | will run                                                          |
| 55:36      | the [[Keyboard Maestro]] macro                                        |
| 55:38      | to say hey what's the episode number                              |
| 55:40      | and I usually                                                     |
| 55:42      | just click OK to confirm it because                               |
| 55:44      | one of the things that I do in advance is I prepare               |
| 55:46      | for the show and I do that                                        |
| 55:48      | and one of the things I do is I run a short cut                   |
| 55:50      | which asks me hey what's the episode                              |
| 55:52      | number for this blah blah blah blah blah so I can                 |
| 55:54      | have this noted so                                                |
| 55:56      | I know what I was doing and all the other things                  |
| 55:58      | and it sets that variable                                         |
| 56:00      | so now when it comes to the actual                                |
| 56:02      | I'm clicking like I'm running the bunch to start recording        |
| 56:04      | the episode it's a verify                                         |
| 56:06      | that I have not you know missed                                   |
| 56:08      | an episode of some kind or whatever                               |
| 56:10      | and just click OK and go                                          |
| 56:12      | and I don't have to you know type in                              |
| 56:14      | an extra number anymore that would that that was a whole          |
| 56:16      | thing before where I would have to increment                      |
| 56:18      | from 105 to 106                                                   |
| 56:20      | and so I really like that that's there                            |
| 56:22      | because that means that when I'm done with the show and I'm doing |
| 56:24      | my wrap up short cut I can use the get variable                   |
| 56:26      | action and of course                                              |
| 56:28      | you know that that that's going to give me                        |
| 56:30      | you know which episode am I working on because I've just          |
| 56:32      | finished it so I'm                                                |
| 56:34      | really pleased with that so in short cuts                         |
| 56:36      | you can get a variable                                            |
| 56:38      | from keyboard                                                     |
| 56:40      | Maestro because they're global it's already                       |
| 56:42      | in memory or it's already in the system                           |
| 56:44      | you can just grab that                                            |
| 56:46      | and so you're getting the episode number out of a keyboard        |
| 56:48      | Maestro script you may have ran a week ago                        |
| 56:50      | yeah yeah exactly                                                 |
| 56:52      | and and that's one of the things                                  |
| 56:54      | you know we record every two weeks                                |
| 56:56      | and so that that variable sits around                             |
| 56:58      | for those two weeks and that                                      |
| 57:00      | that that variable number gets used                               |
| 57:02      | in a whole bunch of places which keyboard                         |
| 57:04      | Maestro is just doing you know for me                             |
| 57:06      | so when we finish recording the episode it's                      |
| 57:08      | going to automatically tidy the episodes                          |
| 57:10      | into the right folder for me because                              |
| 57:12      | you know that that's what I programmed                            |
| 57:14      | keyboard Maestro to do but that's                                 |
| 57:16      | starting with something that I set through                        |
| 57:18      | shortcuts now and I really                                        |
| 57:20      | appreciate that that is an option                                 |
| 57:22      | I also love David get active Macars                              |
| 57:24      | I can see which Macars are actually active                       |
| 57:26      | right now that that's                                             |
| 57:28      | such a cool feature yeah and                                      |
| 57:30      | also just you know just to kind of                                |
| 57:32      | like step back on that last idea                                  |
| 57:34      | is you've got a database                                          |
| 57:36      | of global variables now available                                 |
| 57:38      | to you at any time on your Mac                                    |
| 57:40      | of course it's not going to be available                          |
| 57:42      | on your iOS devices                                               |
| 57:44      | but on your Mac it can go pull any                                |
| 57:46      | variable at once out of keyboard Maestro                          |
| 57:48      | and I don't know I just                                           |
| 57:50      | find that very comforting                                         |
| 57:52      | for whatever reason you know it's                                 |
| 57:54      | kind of nice you know so                                          |
| 57:56      | and that's all from                                               |
| 57:58      | the shortcut side and                                             |
| 58:00      | I'm already writing scripts that are                              |
| 58:02      | taking advantages of this and we're going to talk                 |
| 58:04      | at some point about sub-routining                                 |
| 58:06      | automation because I think that's                                 |
| 58:08      | the other half of this conversation but                           |
| 58:10      | but you know as I've said                                         |
| 58:12      | frequently                                                        |
| 58:14      | shortcuts is good at some things                                  |
| 58:16      | keyboard Maestro is good at other things                          |
| 58:18      | you know I can like I can                                         |
| 58:20      | kick it off on shortcuts                                          |
| 58:22      | but at the end take whatever information                          |
| 58:24      | I have in shortcuts send it over to                               |
| 58:26      | keyboard Maestro and run a script in                              |
| 58:28      | keyboard Maestro or run multiple                                  |
| 58:30      | scripts in keyboard Maestro that                                  |
| 58:32      | finish off whatever automation I'm doing                          |
| 58:34      | for me and it's just really great                                 |
| 58:36      | yeah it truly is and                                              |
| 58:38      | I really you know                                                 |
| 58:40      | appreciate that you know this is                                  |
| 58:42      | this is proper support                                            |
| 58:44      | for shortcuts and that doesn't mean                               |
| 58:46      | other developers not doing this right                             |
| 58:48      | it's just that the fact that                                      |
| 58:50      | keyboard Maestro is such a powerful automation tool               |
| 58:52      | and inside of keyboard Maestro I can run a                        |
| 58:54      | shortcut and that as part                                         |
| 58:56      | of that can say hey you know I'm taking                           |
| 58:58      | this input oh in this particular case I need                      |
| 59:00      | to update this keyboard Maestro                                   |
| 59:02      | variable                                                          |
| 59:04      | it doesn't have to hand off to shortcut                           |
| 59:06      | hand off to AppleScript or something                             |
| 59:08      | can just stay in the shortcut it can do that bit                  |
| 59:10      | and then keep going and then it'll pass back                      |
| 59:12      | whatever it's done to keyboard Maestro that can                   |
| 59:14      | you know finish it off or whatever                                |
| 59:16      | needs doing and I really like                                     |
| 59:18      | that it's proper two-way support                                  |
| 59:20      | because there are many cases                                      |
| 59:22      | where I have wanted to do something in                            |
| 59:24      | shortcuts and I've got most of the way there and then             |
| 59:26      | no I just need keyboard Maestro to finish this                    |
| 59:28      | off well I would really like to have this                         |
| 59:30      | this and this data available in keyboard Maestro                  |
| 59:32      | well I can just set variables for it                              |
| 59:34      | now yeah and now let's talk about the flip                        |
| 59:36      | side of that so if you're working                                 |
| 59:38      | in keyboard Maestro so in                                         |
| 59:40      | addition to Peter adding a fully                                  |
| 59:42      | baked set of actions to shortcuts                                 |
| 59:44      | he added a fully baked                                            |
| 59:46      | set of actions to keyboard Maestro                                |
| 59:48      | that address shortcuts                                            |
| 59:50      | so like one of                                                    |
| 59:52      | my things I find                                                  |
| 59:54      | keyboard Maestro like working with contacts                       |
| 59:56      | and keyboard Maestro is not easy you know                         |
| 59:58      | you've got a generally writing AppleScript to make               |
| 01:00:00   | it work and and I                                                 |
| 01:00:02   | just don't want to deal with that whereas                         |
| 01:00:04   | dealing with contacts in shortcuts                                |
| 01:00:06   | is trivial                                                        |
| 01:00:08   | so like if I've got                                               |
| 01:00:10   | a keyboard Maestro script that largely                            |
| 01:00:12   | is dealing with a bunch of stuff at the end that needs            |
| 01:00:14   | to reset a phone number or something                              |
| 01:00:16   | now in keyboard                                                   |
| 01:00:18   | Maestro I can just execute a shortcut                             |
| 01:00:20   | and I can pass that phone number over                             |
| 01:00:22   | to shortcuts and do                                               |
| 01:00:24   | all the contact related                                           |
| 01:00:26   | shortcuts actions I need and be                                   |
| 01:00:28   | done so I can I'm                                                 |
| 01:00:30   | bilingual you know and we all are now because                     |
| 01:00:32   | these applications                                                |
| 01:00:34   | trade data back and forth and they                                |
| 01:00:36   | trade actions back and forth so                                   |
| 01:00:38   | all the cool stuff you can do                                     |
| 01:00:40   | in shortcuts you can now do                                       |
| 01:00:42   | out of keyboard Maestro                                           |
| 01:00:44   | and all the cool stuff you can do in keyboard Maestro             |
| 01:00:46   | you can now do out of shortcuts it's                              |
| 01:00:48   | it's a it's a it's wonderful                                      |
| 01:00:50   | it really is                                                      |
| 01:00:52   | and you know I                                                    |
| 01:00:54   | yet to you know                                                   |
| 01:00:56   | figure out exactly how I'm going                                  |
| 01:00:58   | to do this is probably going to be through a                      |
| 01:01:00   | variable or maybe I should just                                   |
| 01:01:02   | message Peter and ask for                                         |
| 01:01:04   | the action that I mentioned thinking of which is                  |
| 01:01:06   | enabling and disabling keyboard Maestro                           |
| 01:01:08   | macros as part of a shortcut because                              |
| 01:01:10   | I have I know that [[Hazel]]                                          |
| 01:01:12   | is obviously you know that the standard                           |
| 01:01:14   | app that most people use for processing                           |
| 01:01:16   | files automatically inside                                        |
| 01:01:18   | of certain folders but I use keyboard Maestro                     |
| 01:01:20   | for this in certain cases for example                             |
| 01:01:22   | podcast recordings because I set the variable                     |
| 01:01:24   | for the episode number at the start of the                        |
| 01:01:26   | episode and then when I'm done                                    |
| 01:01:28   | it's ignored the partial files that                               |
| 01:01:30   | were changing as we recorded I                                    |
| 01:01:32   | finished and it just does it it just moves                        |
| 01:01:34   | the files for me                                                  |
| 01:01:36   | but when when when I'm not                                        |
| 01:01:38   | recording I don't necessarily want that running because I do      |
| 01:01:40   | occasionally put other things in there                            |
| 01:01:42   | and then I have not                                               |
| 01:01:44   | you know I've not added the proper                                |
| 01:01:46   | requirements inside of my                                         |
| 01:01:48   | macro so it will just it won't just                               |
| 01:01:50   | you know move                                                     |
| 01:01:52   | audio files for example it will move any                          |
| 01:01:54   | file that I put in that folder                                    |
| 01:01:56   | and so I should probably fix                                      |
| 01:01:58   | that inside the macro but also disabling                          |
| 01:02:00   | that at certain times when I'm                                    |
| 01:02:02   | playing around with other things would be very                    |
| 01:02:04   | nice so                                                           |
| 01:02:06   | I'm hoping that maybe                                             |
| 01:02:08   | we can have that but I'll probably do that by setting a macro     |
| 01:02:10   | but I really like that I can just be like                         |
| 01:02:12   | hey keyboard Maestro wake up and do this thing for                |
| 01:02:14   | me or keyboard Maestro                                            |
| 01:02:16   | can just be used to trigger a shortcut                            |
| 01:02:18   | you know because it's got all those great triggers right          |
| 01:02:20   | so you can just add a trigger for                                 |
| 01:02:22   | hey whenever I focus on this window                               |
| 01:02:24   | or this folder gets a file                                        |
| 01:02:26   | run the shortcut you know if you don't have                       |
| 01:02:28   | [[Hazel]] for example and you just want to be                         |
| 01:02:30   | able to use shortcuts to                                          |
| 01:02:32   | manage some files well keyboard Maestro can                       |
| 01:02:34   | be the trigger on that there are                                  |
| 01:02:36   | folder actions baked all the way down into                        |
| 01:02:38   | finder somewhere but they in my                                   |
| 01:02:40   | experience they would have been                                   |
| 01:02:42   | slightly tricky tricky                                            |
| 01:02:44   | yeah especially over the                                          |
| 01:02:46   | last year or so yeah they                                         |
| 01:02:48   | don't trigger immediately and they will trigger                   |
| 01:02:50   | on things like a file that is changing so as                      |
| 01:02:52   | I record the episode and that file                                |
| 01:02:54   | will trigger the the folder action                                |
| 01:02:56   | and try to move it and that                                       |
| 01:02:58   | that ends up breaking all sorts of things                         |
| 01:03:00   | yeah so for the listeners when you're                             |
| 01:03:02   | using these                                                       |
| 01:03:04   | you know these [[Rogue Amoeba]] tools                                 |
| 01:03:06   | as a safety precaution they save                                  |
| 01:03:08   | the file actively while we're recording                           |
| 01:03:10   | and yeah that's                                                   |
| 01:03:12   | one way to make sure that we don't lose the recording             |
| 01:03:14   | what's one of the reasons why podcasters                          |
| 01:03:16   | love you know these at these tools                                |
| 01:03:18   | but that creates                                                  |
| 01:03:20   | its own automation problem if you've got                          |
| 01:03:22   | an automation triggered by the existence of a file                |
| 01:03:24   | because there's a file being written                              |
| 01:03:26   | while we record and you don't want                                |
| 01:03:28   | automation to like interfere with that                            |
| 01:03:30   | yeah and you know there's                                         |
| 01:03:32   | there's all sorts of things that you can do to                    |
| 01:03:34   | work around that you can just like run                            |
| 01:03:36   | the macro manually when you're finished recording                 |
| 01:03:38   | or whatever it is that you like                                   |
| 01:03:40   | and I should note that a [[Rogue Amoeba]]                             |
| 01:03:42   | of course with their new scripting support                        |
| 01:03:44   | probably has a way to just move it                                |
| 01:03:46   | automatically at the                                              |
| 01:03:48   | the end of the episode I've not                                   |
| 01:03:50   | actually looked for                                               |
| 01:03:52   | a way to do that yet but                                          |
| 01:03:54   | it doesn't really matter because I can just                       |
| 01:03:56   | avoid the problem entirely thanks to                              |
| 01:03:58   | a [[Keyboard Maestro]] in this case                                   |
| 01:04:00   | but it is just                                                    |
| 01:04:02   | nice that there are options                                       |
| 01:04:04   | to be able to do a                                                |
| 01:04:06   | number of different things                                        |
| 01:04:08   | based on things happening like before you go to sleep             |
| 01:04:10   | or when you wake up                                               |
| 01:04:12   | the Mac                                                           |
| 01:04:14   | or whatever it is that you want                                   |
| 01:04:16   | or need to do you can then                                        |
| 01:04:18   | you know have                                                     |
| 01:04:20   | something run and it will just                                    |
| 01:04:22   | span all of the automation                                        |
| 01:04:24   | platforms because of course                                       |
| 01:04:26   | [[Keyboard Maestro]] could put a file into a folder                   |
| 01:04:28   | that triggers hazel to run a thing it can also                    |
| 01:04:30   | run an apple script or shell script                               |
| 01:04:32   | and run shortcuts                                                 |
| 01:04:34   | things and better touch                                           |
| 01:04:36   | tool can run a [[Keyboard Maestro]]                                   |
| 01:04:38   | macro which will then do all of those things and                  |
| 01:04:40   | so on and so forth you can build up                               |
| 01:04:42   | you know a                                                        |
| 01:04:44   | truly amazing automation machine                                  |
| 01:04:46   | using all of these tools together                                 |
| 01:04:48   | and you know you can                                              |
| 01:04:50   | do it without even being at your Mac                              |
| 01:04:52   | if you want to if you leave your Mac running and you just         |
| 01:04:54   | you know use a remote trigger                                     |
| 01:04:56   | somewhere you know that                                           |
| 01:04:58   | that will just send everything running                            |
| 01:05:00   | and you come back to your machine and everything's done           |
| 01:05:02   | except moving your standing desk to the right                     |
| 01:05:04   | height which is going to have to be on my next                    |
| 01:05:06   | my next automation hit list David                                 |
| 01:05:08   | automatically moving my desk up and down                          |
| 01:05:10   | or maybe not maybe not that sounds                                |
| 01:05:12   | like it could go wrong right                                      |
| 01:05:14   | well I I want to                                                  |
| 01:05:16   | just like step back from all this for a minute                    |
| 01:05:18   | and you're like why is this important                             |
| 01:05:20   | I mean it's important because it allows you to combine            |
| 01:05:22   | the best of each tool but                                         |
| 01:05:24   | it's also I think important because                               |
| 01:05:26   | it allows you to kind of grow your automation skill               |
| 01:05:28   | set                                                               |
| 01:05:30   | let's say you're somebody who did a lot of automation             |
| 01:05:32   | on the iPhone and now that Shortcuts is on                        |
| 01:05:34   | the Mac you're like okay I'm gonna like                           |
| 01:05:36   | really do that like I was thinking about                          |
| 01:05:38   | [[Myke Hurley]] that that's his                                       |
| 01:05:40   | that's his jam right he's really good at Shortcuts                |
| 01:05:42   | he doesn't really want to learn all the other                     |
| 01:05:44   | stuff on the Mac so he wants to kind of make Shortcuts            |
| 01:05:46   | his tool but                                                      |
| 01:05:48   | if he runs into a problem that Shortcuts                          |
| 01:05:50   | can't do with                                                     |
| 01:05:52   | a trivial investment to some of these third party                 |
| 01:05:54   | apps he could add                                                 |
| 01:05:56   | that piece if he wanted and he doesn't have                       |
| 01:05:58   | to become an expert at that tool he just has to                   |
| 01:06:00   | learn that tool good enough to run that one little                |
| 01:06:02   | bit but then once you've got                                      |
| 01:06:04   | you know your toe in the                                          |
| 01:06:06   | door suddenly start finding other ways                            |
| 01:06:08   | to use it I think this is a really good way                       |
| 01:06:10   | for people to kind of grow                                        |
| 01:06:12   | laterally with their automation skills across                     |
| 01:06:14   | other other platforms                                             |
| 01:06:16   | automation platforms on the Mac                                   |
| 01:06:18   | and the inverse is true as well if you've been a long             |
| 01:06:20   | time [[Keyboard Maestro]] automator                                   |
| 01:06:22   | but you know you haven't really gotten                            |
| 01:06:24   | with Shortcuts well you know you can pick                         |
| 01:06:26   | up just the bits of Shortcuts you need and                        |
| 01:06:28   | still trigger them from your keyboard                             |
| 01:06:30   | maestro scripts and I think this is really                        |
| 01:06:32   | it's really quite                                                 |
| 01:06:34   | wonderful for for people that want to                             |
| 01:06:36   | get better at this stuff                                          |
| 01:06:38   | it really is and I think                                          |
| 01:06:40   | it's just one of those things where                               |
| 01:06:42   | there's there's a lot to be said for sticking                     |
| 01:06:44   | with the tools that you're comfortable with right and             |
| 01:06:46   | I you know if you can solve the                                   |
| 01:06:48   | problems that you have with the tools that you                    |
| 01:06:50   | already know and are familiar with                                |
| 01:06:52   | then there's nothing wrong with that                              |
| 01:06:54   | but if you find that solving                                      |
| 01:06:56   | that problem is becoming a bit tricky or you                      |
| 01:06:58   | actually can't do it then it's                                    |
| 01:07:00   | nice that you can you know                                        |
| 01:07:02   | stay where you're comfortable for a good chunk of it              |
| 01:07:04   | and then pass off                                                 |
| 01:07:06   | the baton relay style to                                          |
| 01:07:08   | the next application and do the                                   |
| 01:07:10   | first bit in it that you can figure out and then                  |
| 01:07:12   | you know and then you've made you've made                         |
| 01:07:14   | progress right and even if all you do                             |
| 01:07:16   | is go hey I can't do                                              |
| 01:07:18   | you know there there are no fantastic                             |
| 01:07:20   | elections inside of                                               |
| 01:07:22   | [[Keyboard Maestro]] and I don't like Apple                           |
| 01:07:24   | script so I'll just run a Shortcut that                           |
| 01:07:26   | does the fantastic election                                       |
| 01:07:28   | I say that without having checked the                             |
| 01:07:30   | Fantastical on the Mac has Shortcuts                              |
| 01:07:32   | Actions                                                           |
| 01:07:34   | they do they do                                                   |
| 01:07:36   | yeah I was gonna say I'm sure I used them earlier                 |
| 01:07:38   | now I'm saying I'm no longer 100%                                 |
| 01:07:40   | certain but you know so you do that                               |
| 01:07:42   | and then and then you know and then you just pass it back         |
| 01:07:44   | when Fantastical was in beta                                      |
| 01:07:46   | I sent them an email with like a list and they did                |
| 01:07:48   | all of them it's like you can set                                 |
| 01:07:50   | the calendar modes you can set views                              |
| 01:07:52   | it's great yeah                                                   |
| 01:07:54   | I really think that                                               |
| 01:07:56   | this is really all for the best for people                        |
| 01:07:58   | and I hope that if you're listening                               |
| 01:08:00   | and you're good at one platform versus                            |
| 01:08:02   | the other and you want to like try and expand                     |
| 01:08:04   | well now you've got every excuse to do it                         |
| 01:08:06   | but I have to ask you Rose at this point                          |
| 01:08:08   | in the game                                                       |
| 01:08:10   | where is most of your Mac automation                              |
| 01:08:12   | happening you know between all                                    |
| 01:08:14   | of these tools I mean do you generally go                         |
| 01:08:16   | to [[Keyboard Maestro]] first or                                      |
| 01:08:18   | shortcuts or you know where                                       |
| 01:08:20   | where is your time spent                                          |
| 01:08:22   | automating these days                                             |
| 01:08:24   | it really depends David it really depends                         |
| 01:08:26   | there is no one answer                                            |
| 01:08:28   | which I think is honestly a great thing because                   |
| 01:08:30   | it really depends on what I want to do if it's                    |
| 01:08:32   | you know I want to launch a bunch of applications                 |
| 01:08:34   | to open certain documents and stuff                               |
| 01:08:36   | then it's going to be bunch                                       |
| 01:08:38   | if it's the I need to                                             |
| 01:08:40   | be able to open a particular file                                 |
| 01:08:42   | that's got a consistently changing name                           |
| 01:08:44   | like it's always got today's date in it or something              |
| 01:08:46   | [[Keyboard Maestro]]                                                  |
| 01:08:48   | and then you know                                                 |
| 01:08:50   | if I want it to run on                                            |
| 01:08:52   | the Mac and on iOS it's definitely                                |
| 01:08:54   | happening in shortcuts                                            |
| 01:08:56   | because that is a very simple cross                               |
| 01:08:58   | platform way                                                      |
| 01:09:00   | but other than that it really is                                  |
| 01:09:02   | you know it varies you know obviously                             |
| 01:09:04   | if I'm manipulating files I usually                               |
| 01:09:06   | but not always look at [[Hazel]] first                                |
| 01:09:08   | but sometimes it's                                                |
| 01:09:10   | [[Keyboard Maestro]] but it does                                      |
| 01:09:12   | very massively depending on what                                  |
| 01:09:14   | the problem is that I want to solve and I feel                    |
| 01:09:16   | so privileged that we have all of these                           |
| 01:09:18   | options available to us because                                   |
| 01:09:20   | you know go back a couple years ago                               |
| 01:09:22   | and you had [[Hazel]]                                                 |
| 01:09:24   | and you had [[Keyboard Maestro]]                                      |
| 01:09:26   | and you had AppleScript as kind of                               |
| 01:09:28   | the bridge between them but it was a bit                          |
| 01:09:30   | easier at times                                                   |
| 01:09:32   | and not always great and now                                      |
| 01:09:34   | shortcuts is on the Mac                                           |
| 01:09:36   | it's provided a second bridge                                     |
| 01:09:38   | and it turns out that that is actually                            |
| 01:09:40   | improving the foundations of the Apple                            |
| 01:09:42   | script bridge as well because all of these                        |
| 01:09:44   | apps are just adding more support                                 |
| 01:09:46   | for everything which                                              |
| 01:09:48   | is truly great what about you                                     |
| 01:09:50   | where is all your information stuff happening                     |
| 01:09:52   | I would agree with you I mean I use                               |
| 01:09:54   | whatever makes sense                                              |
| 01:09:56   | I once took a class from a                                        |
| 01:09:58   | famous woodworker's name was Sam Maloof                           |
| 01:10:00   | years ago Sam's gone now but                                      |
| 01:10:02   | I was asking him because I was young                              |
| 01:10:04   | and like into woodworking                                         |
| 01:10:06   | and I was really into the tools you know                          |
| 01:10:08   | which tool do you use for this or that                            |
| 01:10:10   | Sam said I use whatever tool works                                |
| 01:10:12   | if I have to use my teeth I use my teeth                          |
| 01:10:14   | and that always stuck with me                                     |
| 01:10:16   | and that's kind of where automation is now                        |
| 01:10:18   | use whatever works I mean I                                       |
| 01:10:20   | came into this maybe a year or two ago                            |
| 01:10:22   | I would have definitely said I was a keyboard                     |
| 01:10:24   | maestro automator that                                            |
| 01:10:26   | was my primary platform                                           |
| 01:10:28   | for automation on the Mac but at this point                       |
| 01:10:30   | that's not true anymore I use keyboard                            |
| 01:10:32   | maestro a lot I use shortcuts a lot                               |
| 01:10:34   | I use you know I'm going to start using                           |
| 01:10:36   | Bunch but you know I just I use                                   |
| 01:10:38   | whatever works and I just don't even think                        |
| 01:10:40   | twice about it and I love that they can go                        |
| 01:10:42   | back and forth I've got a couple automations                      |
| 01:10:44   | I've written in both places like                                  |
| 01:10:46   | I have all these scripts I've written                             |
| 01:10:48   | when I take on a new project for the                              |
| 01:10:50   | MacSparky Labs well I wrote them                                 |
| 01:10:52   | originally in [[Keyboard Maestro]] but now                            |
| 01:10:54   | I've also written them in                                         |
| 01:10:56   | shortcuts so if I'm on my                                         |
| 01:10:58   | phone and I want to set up a new project                          |
| 01:11:00   | I can do it from my phone and                                     |
| 01:11:02   | it's just it's not a big deal for me now                          |
| 01:11:04   | and I think that's where I'd like                                 |
| 01:11:06   | the listeners to get to a point where                             |
| 01:11:08   | they pick up you know like I said                                 |
| 01:11:10   | the hammer the screwdriver the                                    |
| 01:11:12   | jack plane whatever that they need                                |
| 01:11:14   | to get the job done                                               |
| 01:11:16   | and I really think that we're at a                                |
| 01:11:18   | spot where everybody can do this                                  |
| 01:11:20   | Yeah and I think you know going back                              |
| 01:11:22   | to the right tool for the job                                     |
| 01:11:24   | there's a couple of criteria for what the                         |
| 01:11:26   | right tool for the job is number one is                           |
| 01:11:28   | that you have the tool well if you're                             |
| 01:11:30   | running macOS Monterey or when we                                 |
| 01:11:32   | get to Ventura then you will have                                 |
| 01:11:34   | shortcuts and if you have a keyboard                              |
| 01:11:36   | maestro license or you're in the free                             |
| 01:11:38   | trial then you've got that same with                              |
| 01:11:40   | [[Hazel]] and so on and so forth but                                  |
| 01:11:42   | it's not just                                                     |
| 01:11:44   | you know what tool you have it's also                             |
| 01:11:46   | what you feel comfortable with because                            |
| 01:11:48   | there's something to be said about taking                         |
| 01:11:50   | your way where you know how to do something                       |
| 01:11:52   | when it's important that you get something                        |
| 01:11:54   | right versus if you have the time for                             |
| 01:11:56   | experimentation and the mental capacity                           |
| 01:11:58   | to learn you know a new automation method                         |
| 01:12:00   | you know then maybe the time is                                   |
| 01:12:02   | to switch from [[Keyboard Maestro]] to bunch                          |
| 01:12:04   | for your setup scripts because you know                           |
| 01:12:06   | it's not like you're not going to use                             |
| 01:12:08   | [[Keyboard Maestro]] anymore there's                                  |
| 01:12:10   | thousands of uses for that app                                    |
| 01:12:12   | and you know you mentioned the                                    |
| 01:12:14   | song cost fallacy earlier                                         |
| 01:12:16   | but you know there you know                                       |
| 01:12:18   | if you spend all your time setting something                      |
| 01:12:20   | up in one application how easy is it                              |
| 01:12:22   | to move to other applications well                                |
| 01:12:24   | it varies but also you can                                        |
| 01:12:26   | probably learn a bunch of new things by                           |
| 01:12:28   | recreating your automations so I would                            |
| 01:12:30   | not consider it a waste of time                                   |
| 01:12:32   | or a loss of time in doing so                                     |
| 01:12:34   | it's adding to your skill set                                     |
| 01:12:36   | it's another feather in your bow                                  |
| 01:12:38   | yep well                                                          |
| 01:12:40   | speaking of adding to your skill set where                        |
| 01:12:42   | the automators podcast our goal is to add                         |
| 01:12:44   | a bunch of feathers and get you                                   |
| 01:12:46   | better at automating today was focused on                         |
| 01:12:48   | the Mac but that's not going to be a re-episode                   |
| 01:12:50   | but both Rose and I are                                           |
| 01:12:52   | just smitten with all of these                                    |
| 01:12:54   | ways that we can mix our automation tools                         |
| 01:12:56   | we wanted to share the story with you guys                        |
| 01:12:58   | today so we did we hope you got                                   |
| 01:13:00   | something out of this let us know what you think                  |
| 01:13:02   | we have the automators forums                                     |
| 01:13:04   | over at talk.automators.fm                                        |
| 01:13:06   | one of my favourite places on the internet                         |
| 01:13:08   | to get better at automating so many smart                         |
| 01:13:10   | people there you can go check                                     |
| 01:13:12   | that out Rose anything exciting going on                          |
| 01:13:14   | if you want to share lately                                       |
| 01:13:16   | well very soon                                                    |
| 01:13:18   | possibly not quite by the time this episode                       |
| 01:13:20   | really says but soon after there will be                          |
| 01:13:22   | an update to take control of shortcuts version                    |
| 01:13:24   | 2.0 is in the final stages                                        |
| 01:13:26   | right now and also                                                |
| 01:13:28   | as this episode comes out the                                     |
| 01:13:30   | next week I will be on the                                        |
| 01:13:32   | [[Home Assistant]] podcast talking about my                           |
| 01:13:34   | [[Home Assistant]] setup with Rohan and Phil                          |
| 01:13:36   | the host of the                                                   |
| 01:13:38   | [[Home Assistant]] podcast so yeah if anybody                         |
| 01:13:40   | is excited about [[Home Assistant]]                                   |
| 01:13:42   | you can't wait until David                                        |
| 01:13:44   | is ready to dive in I know                                        |
| 01:13:46   | you've got yours on the way David so don't                        |
| 01:13:48   | give him too much flack for that people                           |
| 01:13:50   | hardware is very difficult to get right now                       |
| 01:13:52   | thanks to the whole global pandemic                               |
| 01:13:54   | and shipping supplies                                             |
| 01:13:56   | but yeah so if anybody wants                                      |
| 01:13:58   | some extra home automation goodness in their life                 |
| 01:14:00   | I've been a guest over there                                      |
| 01:14:02   | and yeah so that'll be good fun                                   |
| 01:14:04   | that's one of those things I've just kind of like                 |
| 01:14:06   | forgot about I bought it like six months                          |
| 01:14:08   | ago and I feel like one day                                       |
| 01:14:10   | yeah one day it's just gonna show up                              |
| 01:14:12   | it was a couple of months                                         |
| 01:14:14   | it was definitely more than a couple                              |
| 01:14:16   | months ago it was a yellow one right so                           |
| 01:14:18   | I don't remember whenever that went on sales                      |
| 01:14:20   | when I bought it I think that was sort of                         |
| 01:14:22   | March April that you ordered it                                   |
| 01:14:24   | and they did say they were shipping in October                    |
| 01:14:26   | at that point so you know                                         |
| 01:14:28   | we'll have to have to wait and see                                |
| 01:14:30   | one day it'll show up like a Christmas present                    |
| 01:14:32   | and then I'm gonna be bugging you                                 |
| 01:14:34   | to get it all figured out oh yeah                                 |
| 01:14:36   | oh I can't wait David it is gonna be                              |
| 01:14:38   | so much fun we're gonna be able to do                             |
| 01:14:40   | all sorts of things like one of my favourite little                |
| 01:14:42   | things that I recently did is                                     |
| 01:14:44   | I flip off the power                                              |
| 01:14:46   | to my microwave and flip it back on again at one o'clock          |
| 01:14:48   | in the morning if there was a power outage                        |
| 01:14:50   | so that I never have to reset my microwave clock                  |
| 01:14:52   | but knowing that there                                            |
| 01:14:54   | was a power outage I don't think I could do that in [[HomeKit]]       |
| 01:14:56   | so I can't wait                                                   |
| 01:14:58   | to drag you down this rabbit hole                                 |
| 01:15:00   | can you see why I bought one                                      |
| 01:15:02   | when Rose tells me things like that it's like                     |
| 01:15:04   | okay you're pushing all my buttons Rose                           |
| 01:15:06   | but either way                                                    |
| 01:15:08   | so it sounds like you got a lot going on Rose                     |
| 01:15:10   | and good for you                                                  |
| 01:15:12   | once again like I said we're the Automators                       |
| 01:15:14   | podcast you can find us at relay.com                              |
| 01:15:16   | slash Automators                                                  |
| 01:15:18   | thank you to our sponsors today Electric                          |
| 01:15:20   | Doppler, Hunter Douglas                                           |
| 01:15:22   | Automators Max subscribers                                        |
| 01:15:24   | stick around we're gonna be talking about Alfred 5                |
| 01:15:26   | otherwise thanks for listening and we'll see you next time        |
