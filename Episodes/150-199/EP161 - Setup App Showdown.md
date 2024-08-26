---
status: "incomplete"
fc-date:
  year: 2024
  month: 08
  day: 09
fc-category: "podcast"
podcast: "Automators"
published: 2024-08-09
duration: 4021
formattedduration: "01:07:01"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/161"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators161.mp3"
episode: 161
title: "161: Setup App Showdown"
---
![Automators Logo.jpg|200x200](Logo.jpg)

# Synopsis
Rose and David are both fans of setups, automations that set your computer up to dive into doing your work. In this episode, the Automators discuss multiple ways to set up a setup.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 161 Discussion](https://talk.automators.fm/t/161-setup-app-showdown/17910)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post your job for free today.

# Show Notes
- [Intro to Shortcuts on Mac – Apple Support](https://support.apple.com/en-us/guide/shortcuts-mac/apdf22b0444c/mac)
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [Moom - Bunch.app](https://bunchapp.co/docs/integration/moom/)
- [How to: Use Moom in macOS Shortcuts](https://manytricks.com/blog/?p=5662)
- [Introducing Bunch - Bunch.app](https://bunchapp.co/docs/)
- [Sample Bunches - Bunch.app](https://bunchapp.co/docs/bunch-files/samplebunch/)
- [Shortcut - Bunch.app](https://bunchapp.co/docs/bunch-files/commands/shortcut/)
- [Stream Deck - Bunch.app](https://bunchapp.co/docs/integration/stream-deck/)
- [Awake - Bunch.app](https://bunchapp.co/docs/bunch-files/commands/awake/)
- [Scheduling Bunches - Bunch.app](https://bunchapp.co/docs/bunch-files/scheduling-bunches/)
	- [close after](https://bunchapp.co/docs/bunch-files/scheduling-bunches/#close-after-an-interval) is the syntax Rose uses to close Bunches after X period of time.
- [Run On Close - Bunch.app](https://bunchapp.co/docs/bunch-files/run-on-close/)
- [Frontmatter - Bunch.app](https://bunchapp.co/docs/bunch-files/frontmatter/#keys)
- [Delayed Launch - Bunch.app](https://bunchapp.co/docs/bunch-files/delay/)
- [Snippets - Bunch.app](https://bunchapp.co/docs/bunch-files/snippets/)
- [Commands - Bunch.app](https://bunchapp.co/docs/bunch-files/commands//)
- [ttscoff/bunch · Discussions · GitHub](https://github.com/ttscoff/bunch/discussions)
- [Keyboard Maestro 11.0.3: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [action:Hide All Applications (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Hide_All_Applications)
- [action:Manipulate a Window (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Manipulate_a_Window?redirect=1)
- [action:Find Image on Screen (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Find_Image_on_Screen)
- [function:SCREENCOUNT (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/function/SCREENCOUNT)
- [condition:USB Device (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/condition/USB_Device)
- [manual:Calculations (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/manual/Calculations#Screen_Coordinates_and_Dot_Notation)
- [Controlling The Position of User-Prompt Windows on The Screen - Questions & Suggestions - Keyboard Maestro Discourse](https://forum.keyboardmaestro.com/t/controlling-the-position-of-user-prompt-windows-on-the-screen/16796)
- [FocusCuts | Focus on your Shortcuts](https://focuscuts.com/)
- [manual:Palettes (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/manual/Palettes#Conflict_Palette)
- [Conflict Palette (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/Conflict_Palette)
- [Hiding Bunches from the Menu - Bunch.app](https://bunchapp.co/docs/bunch-files/frontmatter/#ignore)
- [Alfred - Bypass for Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/alfred/alfred_bypass_for_shortcuts/)
- [Sparky's Journaling Setup Shortcut](https://www.icloud.com/shortcuts/fcac7eb189c74a07b760acbdea6f591e)

# Transcription
  
| Time Index | Transcription                                                    |
| :--------- | :--------------------------------------------------------------- |
| 00:00      | Hello, and welcome to The Automators.                            |
| 00:03      | I'm David Sparks, and joined by my co-host, Rosemary Orchard.    |
| 00:07      | Hello, Rosemary.                                                 |
| 00:08      | How are you today?                                               |
| 00:10      | I'm excited, David.                                              |
| 00:11      | We're doing a showdown episode.                                  |
| 00:12      | We don't do these very often, because there's                    |
| 00:14      | too many good apps out there.                                    |
| 00:16      | But it felt like it was time.                                    |
| 00:18      | Yeah, we've been talking about setup apps for a long time.       |
| 00:22      | Both of us are big fans of it.                                   |
| 00:23      | We're going to explain why in a minute.                          |
| 00:24      | But there's more than one way to skin this cat.                  |
| 00:28      | Oh, boy, I'm going to get an email for that one.                 |
| 00:30      | But there's a lot of ways to deal with this.                     |
| 00:32      | So we have several options planned.                              |
| 00:34      | Rosemary and I have been doing experiments                       |
| 00:36      | and prepping for the show for a while.                           |
| 00:38      | So I'm really happy that we get to share it with you.            |
| 00:42      | Before we start, if you are an Automators Mac subscriber,        |
| 00:45      | that's the folks helping support us with a membership that       |
| 00:49      | get an ad-free extended version of the show today.               |
| 00:52      | In Automators Max, we're going to be talking about [[Apple Intelligence\|Apple Intelligences's]]       |
| 00:54      | first look.                                        |
| 00:56      | It's out there.                                                  |
| 00:57      | Rose and I have done the thing where we installed the betas.     |
| 01:00      | I'm not going to admit publicly that I have where all I          |
| 01:04      | have installed it.                                               |
| 01:06      | But let's just say it's on many places.                          |
| 01:09      | And I'm now using [[Apple Intelligence]].                           |
| 01:10      | We're going to talk about what we're doing with it.              |
| 01:12      | So that will be fun.                                             |
| 01:13      | Yes, yes, it will.                                               |
| 01:15      | And yeah, before we get there, we're                             |
| 01:18      | going to talk about setup apps and why they're awesome.          |
| 01:20      | But I think even before we get to that,                          |
| 01:23      | we probably need to talk about what a setup app is,              |
| 01:26      | don't we, David?                                                 |
| 01:27      | Yeah, I mean, a setup, to me, is a simple method                 |
| 01:32      | to switch contexts on your computer.                             |
| 01:34      | I mean, we all have different things                             |
| 01:36      | we do on our computers, maybe.                                   |
| 01:38      | Maybe you like to journal in [[Day One]],                            |
| 01:39      | and you've got a time when you have your [[Apple Photos\|Photos]] app and [[Day One]]     |
| 01:42      | one open, and you're sitting there doing your journaling.        |
| 01:45      | Or maybe you make podcasts like we're doing right now.           |
| 01:48      | Or maybe you write sales proposals.                              |
| 01:52      | Or maybe whatever it is you do on your computer,                 |
| 01:56      | there's different things we all have.                            |
| 01:58      | And the point from idea to execution takes too long.             |
| 02:03      | When you decide, oh, I want to edit photos right now.            |
| 02:05      | So you've got to get your [[Photoshop]] open.                        |
| 02:07      | You've got to get your photos file open.                         |
| 02:09      | You've got to get all the pieces in place.                       |
| 02:12      | A setup allows you to push a button virtually or physically      |
| 02:18      | and have your computer just go blah blah blah                    |
| 02:20      | and put all that together for you.                               |
| 02:22      | And that's why we're big fans of it.                             |
| 02:24      | You push a button and you're off to work.                        |
| 02:27      | Yes.                                                             |
| 02:28      | And for me, there's a couple of things                           |
| 02:30      | I'd like to add to that.                                         |
| 02:32      | It's also to an extent, not entirely,                            |
| 02:35      | but to an extent about getting rid of the things that            |
| 02:38      | aren't going to be relevant for the thing that I'm now doing.    |
| 02:41      | So this is especially important when, for example,               |
| 02:45      | I get a call at work, somebody wants to talk to me,              |
| 02:47      | and then I need to share a screen.                               |
| 02:49      | I can easily flip things around and set things up                |
| 02:52      | in a way that's going to be easy for me to share my screen       |
| 02:55      | because I have an ultra-wide monitor.                            |
| 02:57      | So if I try and share a 32-inch ultra-wide monitor               |
| 03:00      | onto somebody who's got, say, a 24-inch monitor,                 |
| 03:03      | they've got black bars at the top and the bottom                 |
| 03:04      | and everything's super small.                                    |
| 03:06      | So I have to move the applications                               |
| 03:08      | that I'm most likely to want to share over to my laptop screen,  |
| 03:11      | which is 15 inches.                                              |
| 03:12      | That's a nice size for sharing and so on.                        |
| 03:14      | So it's about putting things in the right place.                 |
| 03:18      | And another thing that I have found over time is subcontexts.    |
| 03:24      | So for example, that screen sharing.                             |
| 03:26      | Screen sharing doesn't mean that I'm done with work              |
| 03:28      | and I want to get rid of all of the applications                 |
| 03:31      | that I usually use day-to-day for programming and so on.         |
| 03:34      | No, it just means that I need a few extra things                 |
| 03:36      | and things to move around a little bit.                          |
| 03:38      | And I found this to be incredibly useful for a lot of things     |
| 03:42      | because I don't necessarily need to completely step out          |
| 03:46      | of the realm or the zone or the area                             |
| 03:49      | that I'm currently working in.                                   |
| 03:50      | Sometimes I just need to add a layer to it.                      |
| 03:53      | You know, it's like if you draw a curtain over a thing           |
| 03:57      | so you can't see it anymore, you know,                           |
| 03:58      | that's what I'm doing right now.                                 |
| 03:59      | I'm just drawing a curtain, I'm gonna do this for a bit          |
| 04:01      | and then I'm done with that, get rid of those things             |
| 04:03      | and back to what I'm doing.                                      |
| 04:04      | And the advantage of all of these automations for me             |
| 04:08      | is I'm not there with [[InDesign\|Adobe InDesign]] open,                       |
| 04:13      | but I don't have access to the assets that I need.               |
| 04:16      | Or vice versa, I haven't found the assets                        |
| 04:18      | and then they're going,                                          |
| 04:19      | I need to sit and wait for [[InDesign\|Adobe InDesign]] to open                |
| 04:21      | because even with an M1 Pro, it takes a moment.                  |
| 04:26      | So it is just about getting everything together,                 |
| 04:29      | bringing all of those different elements                         |
| 04:31      | and things that you might want to use together                   |
| 04:34      | in a way that means that you don't ever have to go off digging   |
| 04:39      | in a particular folder for a thing.                              |
| 04:40      | You know, when you click on [[OmniFocus]],                           |
| 04:42      | it's already in the right project                                |
| 04:44      | or you click on [[Obsidian]],                                        |
| 04:45      | it's already in the right vault or folder                        |
| 04:47      | and things like that,                                            |
| 04:48      | just because then the information is already at hand.            |
| 04:51      | So at least for me, I don't end up going,                        |
| 04:53      | ooh, squirrel, quite so much.                                    |
| 04:55      | Yeah, it's just a hugely useful focus tool for me                |
| 05:00      | where when I change work modes,                                  |
| 05:03      | I don't have any excuse,                                         |
| 05:04      | but to get on with the new work                                  |
| 05:06      | because the computer is sitting there waiting for me             |
| 05:09      | with everything I need open.                                     |
| 05:11      | The automation skills required to do this are not exhaustive.    |
| 05:15      | We're gonna go through various platforms today                   |
| 05:17      | and I suggest you try some of them                               |
| 05:20      | and figure out which one works for you.                          |
| 05:21      | But to begin with, this can be as simple as saying,              |
| 05:25      | like I said at the beginning,                                    |
| 05:26      | put [[Apple Photos\|Photos]] on the left side                                      |
| 05:27      | and put [[Day One]] on the right side, you know,                     |
| 05:30      | or put my [[Microsoft Word\|Word]] document on the right side                        |
| 05:33      | and put [[Safari]] on the left side.                                 |
| 05:35      | It can be that simple,                                           |
| 05:36      | but you can go really down the rabbit hole on this stuff         |
| 05:39      | but even the rabbit hole is not that deep                        |
| 05:41      | because it's things like open this URL                           |
| 05:45      | or open this specific document,                                  |
| 05:47      | you know, that kind of stuff is not really hard                  |
| 05:50      | with automation and we're hoping that people                     |
| 05:53      | who don't have setups by the end of the show                     |
| 05:55      | will be inspired this weekend to go make a few.                  |
| 05:58      | Yeah, yeah, and there's so many great apps                       |
| 06:01      | that you can use for this as well.                               |
| 06:03      | And it is one of those things where I feel like                  |
| 06:06      | it's worth taking a minute or two                                |
| 06:08      | before you just dive in and pick one app                         |
| 06:10      | and go, I'm gonna do this with [[Alfred]],                           |
| 06:12      | just to think what actually do I need?                           |
| 06:14      | And therefore what tools are available to me                     |
| 06:17      | and what do I need to have available?                            |
| 06:20      | Because for example,                                             |
| 06:21      | if you potentially need to be able to add calendar events,       |
| 06:24      | then you're probably going to be wanting to look at using        |
| 06:27      | [[Shortcuts]] or [[Keyboard Maestro]]                                    |
| 06:28      | because those have tools built into them for that.               |
| 06:31      | Whereas, you know, if you're looking to run various scripts      |
| 06:36      | and so on, then, you know, maybe, you know,                      |
| 06:38      | [[Shortcuts]] might be the right tool,                               |
| 06:39      | might not be the right tool,                                     |
| 06:41      | depending on, you know, how you prefer to do things.             |
| 06:44      | So it's worth having a little minute, I'm gonna say,             |
| 06:49      | of thinking time, no spending hours of preparation on this,      |
| 06:51      | but have a little minute of thinking time of, you know,          |
| 06:53      | what do I think I need here                                      |
| 06:55      | before you just dive into it?                                    |
| 06:57      | But at the same time, you know, you can migrate these things.    |
| 07:00      | It's not that difficult.                                         |
| 07:01      | All of the, you know, tools and so on                            |
| 07:05      | tend to exist across most of the apps                            |
| 07:07      | that we're gonna talk about.                                     |
| 07:09      | And, you know, there are some apps                               |
| 07:10      | that we're not necessarily gonna dive deep into today            |
| 07:13      | for this particular, you know, episode,                          |
| 07:18      | but you can use things like [[Raycast]] or [[Alfred]]                    |
| 07:21      | to do this with, you know,                                       |
| 07:22      | [[Alfred\|Alfred's]] workflows in particular,                                |
| 07:24      | but, you know, you have choices.                                 |
| 07:26      | And I think that that is one of the things                       |
| 07:28      | that makes, you know, this sort of automation great              |
| 07:31      | because it's so easy to personalise to you, the individual.      |
| 07:33      | But also, anybody who's there going,                             |
| 07:35      | ooh, I'm a little bit worried.                                   |
| 07:37      | This sounds like it's gonna be complex.                          |
| 07:39      | Don't worry, these are gonna be very simple actions              |
| 07:42      | for the most part.                                               |
| 07:43      | Yeah, in fact, I wanna start with                                |
| 07:45      | one of the simplest ways to do this.                             |
| 07:47      | I didn't really believe in setups with [[Shortcuts]]                 |
| 07:51      | until a labs member challenged me to say,                        |
| 07:53      | hey, I don't wanna get one of these fancy tools                  |
| 07:56      | or learn them.                                                   |
| 07:57      | Can you just show me how to do this with [[Shortcuts]]?              |
| 08:00      | And over the last few years,                                     |
| 08:02      | as shortcuts for the Mac got more powerful,                      |
| 08:05      | it really has become absolutely possible                         |
| 08:08      | to do something like this.                                       |
| 08:09      | And I'm gonna share a link in the show notes                     |
| 08:12      | for a very simple shortcut setup that I have.                    |
| 08:15      | And this is kind of picking up on the theme.                     |
| 08:18      | You catch up with me here of journaling                          |
| 08:20      | with [[Day One]] and [[Apple Photos\|Photos]]                                          |
| 08:22      | because I keep talking about that today.                         |
| 08:24      | So I made one and it's really not that hard                      |
| 08:27      | with the Mac tools and shortcuts.                                |
| 08:30      | And these are largely exclusive to Mac in [[Shortcuts]].             |
| 08:33      | It's one of those things.                                        |
| 08:35      | But it's a, I think it's a total of six steps.                   |
| 08:39      | And the first one is hide all apps.                              |
| 08:42      | Okay, so you create a shortcut called journaling.                |
| 08:45      | The first step is hide all applications.                         |
| 08:47      | So that's easy enough.                                           |
| 08:49      | You don't want anything on your screen.                          |
| 08:50      | Like Rose said earlier, you wanna clear the screen               |
| 08:53      | before you start filling it with your work.                      |
| 08:55      | So there's a command for that, hides all the apps.               |
| 08:58      | It's not closing the apps.                                       |
| 08:59      | It's hiding them, which means                                    |
| 09:01      | you're not gonna lose data or anything.                          |
| 09:02      | Your screen will just clear for you.                             |
| 09:04      | Everything will be down in the dock.                             |
| 09:05      | The next one for me is I turn on a personal [[Focus Mode\|focus mode]].          |
| 09:11      | Now, this is an option,                                          |
| 09:12      | but I put it on here because I like it.                          |
| 09:14      | When I'm journaling, I'm in personal mode.                       |
| 09:16      | I'm not in work mode.                                            |
| 09:17      | So I use the personal focus                                      |
| 09:19      | and I turn it on until it's turned off.                          |
| 09:21      | All day long, my [[Focus Mode\|focus modes]] are jumping around                  |
| 09:24      | and that's, we've done episodes on that already.                 |
| 09:26      | So all I've done so far is hide all apps,                        |
| 09:28      | turn on the personal mode.                                       |
| 09:30      | Next thing I do is I open the [[Day One]] application.               |
| 09:33      | Surprise, right?                                                 |
| 09:34      | There's two apps I'm using, [[Day One]] and [[Apple Photos\|Photos]].                  |
| 09:36      | But first you open [[Day One]], then the step after that,            |
| 09:39      | this is important, you get it in the right order,                |
| 09:41      | is you use the move window command.                              |
| 09:43      | There is a move app to, and I put it in the left side.           |
| 09:47      | So I say move app to middle left.                                |
| 09:49      | You wanna put that right after you open the application.         |
| 09:51      | It's important that you have these in the right order.           |
| 09:54      | And then the last two steps are the exact same,                  |
| 09:56      | but for [[Apple Photos\|Photos]].                                                  |
| 09:58      | I open [[Apple Photos\|Photos]] and I move it to the middle right.                 |
| 10:01      | And we'll put a link in the notes                                |
| 10:02      | where you can just download                                      |
| 10:04      | and add the shortcut to your shortcuts                           |
| 10:06      | and then you can start changing it.                              |
| 10:07      | So like, let's say you wanted to do                              |
| 10:09      | the left and right screen thing,                                 |
| 10:10      | but instead of with [[Apple Photos\|Photos]] and [[Day One]],                          |
| 10:13      | you wanna do it with [[OmniFocus]] and email.                        |
| 10:16      | You could do that.                                               |
| 10:16      | Just change the app names                                        |
| 10:18      | and you've got a fully working script here.                      |
| 10:21      | You can duplicate it, run it as many times as you want.          |
| 10:24      | I do recommend if you do something like this                     |
| 10:26      | with shortcuts that you give it an easily recallable name.       |
| 10:30      | For me, I set them all up as setup dash and then the task.       |
| 10:35      | So then if I'm using like [[Alfred]]                                 |
| 10:38      | or any of the other many ways you can launch shortcuts,          |
| 10:42      | I have an easy way to remember what they are.                    |
| 10:44      | And so I have a folder and I filled it with them.                |
| 10:47      | This is all done, done with [[Shortcuts]].                           |
| 10:49      | I can talk in a minute                                           |
| 10:50      | about a little bit more complex methodology for this             |
| 10:54      | and how to use shortcuts to go a little bit deeper,              |
| 10:56      | but honestly, this is enough.                                    |
| 10:57      | If you just take this one shortcut,                              |
| 11:00      | you're off to the races.                                         |
| 11:01      | Yes, and I think that's one of the things                        |
| 11:04      | that is really great about this sort of thing.                   |
| 11:07      | You can go super deep                                            |
| 11:08      | and you can have like custom [[AppleScript\|AppleScripts]] running things        |
| 11:10      | and you can have, popping up a dialog or a menu                |
| 11:14      | and saying, hey, what do you wanna do?                           |
| 11:15      | Do you wanna do this?                                            |
| 11:16      | Do you wanna do that?                                            |
| 11:17      | But you can also just have a button that does the thing.         |
| 11:21      | And of course, thanks to a variety                               |
| 11:24      | of different [[Stream Deck]] plugins,                                |
| 11:25      | you can even then add that shortcut                              |
| 11:27      | straight into your [[Stream Deck]]                                   |
| 11:28      | and have that as an icon on your [[Stream Deck]] screen.             |
| 11:32      | Personally, any shortcuts that I have                            |
| 11:34      | related to my setup stuff,                                       |
| 11:36      | I also, as well as prefixing it with that name                   |
| 11:39      | because if you just search,                                      |
| 11:41      | then you don't always necessarily see the folder name,           |
| 11:43      | but I also put them in a folder called 'setup'                     |
| 11:46      | because then I know that these are Mac shortcuts.                |
| 11:50      | Tends nowadays not to be so much                              |
| 11:52      | that if you open a word, the Mac shortcuts on iPhone             |
| 11:54      | and accidentally do something that gets broken                   |
| 11:56      | that tends not to happen anymore.                                |
| 11:58      | But just this way, then I know it's a Mac thing.                 |
| 12:01      | If I find it while I'm searching all my iPhone                   |
| 12:04      | for a shortcut, that's not the shortcut I am looking for.        |
| 12:07      | Yeah, one of the challenges with doing it in [[Shortcuts]],          |
| 12:10      | and I don't want this to come off wrong                          |
| 12:12      | because like I said earlier,                                     |
| 12:14      | you can absolutely do this with [[Shortcuts]].                       |
| 12:16      | I'm sometimes really tempted                                     |
| 12:18      | just to move all them into shortcuts                             |
| 12:20      | because the advantages are that it just works                    |
| 12:24      | with built-in software.                                          |
| 12:25      | And like the window moves always seem to follow                  |
| 12:29      | the app opening in some of the other apps,                       |
| 12:31      | like the commands come too quickly and it gets confused.         |
| 12:35      | [[Shortcuts]], it does a better job                                  |
| 12:37      | because it's at system level, I think,                           |
| 12:39      | it does a better job with some of this execution.                |
| 12:42      | But one of the challenges of doing it with [[Shortcuts]],            |
| 12:45      | I think is window management.                                    |
| 12:46      | The built-in window management tools are limited.                |
| 12:49      | Like it's, you know, you get the quadrants basically             |
| 12:53      | and the middles and the left and the right.                      |
| 12:55      | But if you want to do something more exotic                      |
| 12:57      | with window management, it's more difficult.                     |
| 13:00      | The workaround that I have kind of landed on for this            |
| 13:03      | is the application [[Moom]], M-O-O-M,                                |
| 13:06      | and they have [[AppleScript]] support.                              |
| 13:09      | So you can create a window arrangement move,                     |
| 13:12      | save it as a preset, and then call it                            |
| 13:15      | as an [[AppleScript]] in [[Shortcuts]].                                 |
| 13:17      | So that's like a way to kind of fix that.                        |
| 13:19      | It is a little bit of a hack, right here.                        |
| 13:22      | Anytime you put [[AppleScript]] into shortcut, you know,            |
| 13:25      | it's always feels a little hacky to me,                          |
| 13:26      | but that's a good way to solve the problem                       |
| 13:30      | if you're willing to buy one third-party application.            |
| 13:33      | Yes, and what I will do for folks who are there going,           |
| 13:36      | oh, [[Moom]], that sounds interesting.                               |
| 13:37      | I'll put a link to [[Moom]] in the show notes,                       |
| 13:40      | but I will also put a link,                                      |
| 13:41      | and this is a little bit of a spoiler,                           |
| 13:42      | to the [[Bunch]] documentation,                                      |
| 13:44      | because the [[Bunch]] documentation shows how easy it is             |
| 13:47      | to write the [[AppleScript]] for [[Moom]],                              |
| 13:49      | so that you can just, it's one line people,                      |
| 13:51      | you can copy and paste it, I promise.                            |
| 13:53      | You will figure it out.                                          |
| 13:54      | You do not need to be a scripting genius,                        |
| 13:56      | you just need to be able to copy and paste,                      |
| 13:58      | and type the name of your [[Moom]] setup as well.                    |
| 14:02      | What I like about [[Moom]] in particular,                            |
| 14:03      | is I can resize things,                                          |
| 14:06      | it works across multiple monitors, and so on as well,            |
| 14:08      | and then I can reuse that if I do put a setup                    |
| 14:11      | into a different application,                                    |
| 14:13      | then I can easily continue to use my [[Moom]] layout                 |
| 14:18      | for windows instead of having to figure out,                     |
| 14:22      | how do I do this now?                                            |
| 14:24      | I had this setup in [[Keyboard Maestro]]                             |
| 14:26      | with it's window positioning,                                    |
| 14:27      | and now I have to figure out how to do that                      |
| 14:31      | with [[Shortcuts]] and so on,                                        |
| 14:32      | it's splitting it up,                                            |
| 14:35      | turning it into like miniature functions,                        |
| 14:37      | which sometimes works very well,                                 |
| 14:39      | and sometimes maybe isn't exactly what you want,                 |
| 14:43      | but for me that works nicely.                                    |
| 14:45      | So getting ready for this show,                                  |
| 14:48      | I wanted to really kick the tyres on [[Shortcuts]].                  |
| 14:52      | So like I said,                                                  |
| 14:53      | we've been talking about this show for a long time.              |
| 14:55      | So over the course of a month,                                   |
| 14:57      | I built 20 different shortcuts,                                  |
| 15:00      | that are all setup-based shortcuts                               |
| 15:02      | that I can run from [[Shortcuts]] on my Mac.                         |
| 15:05      | Like they started with this simple journaling one,               |
| 15:07      | that's the first one I made,                                     |
| 15:09      | but just to give you a list,                                     |
| 15:10      | I have one for downtime,                                         |
| 15:12      | comms, email processing,                                         |
| 15:14      | journaling, news feeds, daily planning,                          |
| 15:16      | monthly planning, automators ad recording,                       |
| 15:19      | automators recording,                                            |
| 15:21      | lab report recording,                                            |
| 15:22      | which is the podcast I do in the labs,                           |
| 15:25      | new labs posts, sponsor work, a blog,                            |
| 15:28      | focused recording, focused ad recording, 'Obsidian' work.          |
| 15:32      | So I just went through                                           |
| 15:33      | and all the various kind of setups I used during the day,        |
| 15:37      | I built these out over the course of about a month.              |
| 15:41      | And all of this was done in [[Shortcuts]].                           |
| 15:44      | It's not quite as powerful as [[Keyboard Maestro]].                  |
| 15:47      | And ultimately I still run them out of [[Keyboard Maestro]]          |
| 15:50      | because I have [[Keyboard Maestro]],                                 |
| 15:52      | I have finely tuned them.                                        |
| 15:54      | But if I was just doing this from scratch,                       |
| 15:56      | I'm not sure I would be all that inclined                        |
| 15:58      | to go that extra step.                                           |
| 15:59      | I think if you were starting this from scratch,                  |
| 16:01      | building these in shortcuts is probably the endpoint for you.    |
| 16:05      | And if [[Keyboard Maestro]] blew up                                  |
| 16:08      | and fell off the face of the earth,                              |
| 16:10      | I think my setups would be just as good,                         |
| 16:13      | almost running them out of [[Shortcuts]].                            |
| 16:16      | So the challenge was accepted in the labs                        |
| 16:18      | and I'll tell you,                                               |
| 16:19      | you absolutely can build these setups                            |
| 16:21      | right in your [[Shortcuts]] app.                                     |
| 16:24      | And again, I just can't tell you how useful it is                |
| 16:27      | as you go through the day.                                       |
| 16:28      | This is something that is particularly good                      |
| 16:30      | with a [[Stream Deck]], I think,                                     |
| 16:32      | because I have a bunch of buttons on my stream deck.             |
| 16:34      | I push a button and it sets up,                                  |
| 16:35      | but you don't need to do it that way.                            |
| 16:37      | You can trigger it from the keyboard as well.                    |
| 16:39      | Yeah, the thing that's also important to remember                |
| 16:42      | about [[Shortcuts]] is if you want to do things                      |
| 16:43      | like control your focus mode and so on,                          |
| 16:46      | you're going to have to tie into shortcuts anyway to do that.    |
| 16:51      | So even though I don't necessarily use [[Shortcuts]]                 |
| 16:55      | for a lot of my setups and so on,                                |
| 16:57      | what I do have is I have [[Shortcuts]] actions                       |
| 17:00      | for turning on particular [[Focus Mode\|focus modes]]                            |
| 17:02      | because that's something that I can then run through [[Bunch]]       |
| 17:04      | or [[Keyboard Maestro]] or the command line                          |
| 17:06      | or [[AppleScript]] if I want to.                                    |
| 17:09      | I have a lot of ways of running those shortcuts,                 |
| 17:11      | which is great.                                                  |
| 17:12      | And that then means that I can, you know,                        |
| 17:15      | turn on and off [[Focus Mode\|focus modes]] and do things like that as well      |
| 17:18      | because those things are not necessarily                         |
| 17:20      | available to other apps.                                         |
| 17:22      | So it is, you know, at some point,                               |
| 17:25      | if you want to use all of the things, you know,                  |
| 17:27      | or have all the features, you may end up realising               |
| 17:30      | that you are using multiple apps.                                |
| 17:31      | And personally, I'm okay with that.                              |
| 17:33      | I like that.                                                     |
| 17:34      | But yeah, if you want to just keep it down to one app,           |
| 17:38      | then maybe you're going to have to use shortcuts                 |
| 17:40      | if you want things like focus modes involved.                    |
| 17:45      | This episode of The Automators is brought to you                 |
| 17:47      | by ExpressVPN.                                                   |
| 17:49      | High speed, secure and anonymous VPN services.                   |
| 17:53      | Get an extra three months for free.                              |
| 17:54      | Just go to expressvpn.com/automators.                      |
| 17:59      | If I'm just browsing online for work                             |
| 18:01      | or just my own downtime,                                         |
| 18:03      | I don't like the idea of every little thing                      |
| 18:05      | I'm searching for being recorded.                                |
| 18:07      | I know a lot of people feel that way too.                        |
| 18:09      | And so they might turn to incognito mode,                        |
| 18:12      | but did you know incognito mode is not enough                    |
| 18:15      | to hide your browsing history?                                   |
| 18:17      | Check the fine print.                                            |
| 18:18      | All your online activity is still visible                        |
| 18:21      | unless you use ExpressVPN.                                       |
| 18:24      | Without ExpressVPN, third parties can still see                  |
| 18:27      | every website you visit, even in incognito mode.                 |
| 18:31      | That could be your internet service provider,                    |
| 18:33      | your mobile network provider,                                    |
| 18:35      | the admins of your Wi-Fi network.                                |
| 18:38      | And the good news is ExpressVPN reroutes 100% of your traffic    |
| 18:42      | through secure encrypted servers,                                |
| 18:44      | so third parties can't see your browsing history.                |
| 18:47      | It's easy to use, just fire up the app                           |
| 18:50      | and click one button to get protected.                           |
| 18:52      | Plus it works on all devices,                                    |
| 18:53      | including phones, laptops, tablets and more,                     |
| 18:56      | so you can stay private and on the go.                           |
| 18:59      | It's easy to see why ExpressVPN was rated number one             |
| 19:03      | by top tech reviewers like CNET and The Verge.                   |
| 19:08      | I just got back from London                                      |
| 19:09      | and I was using other people's Wi-Fi the whole trip,             |
| 19:12      | and you can bet I was on ExpressVPN the entire time.             |
| 19:16      | I don't like people tracking what I'm doing                      |
| 19:18      | and I don't want to become the product.                          |
| 19:20      | That's why ExpressVPN is there.                                  |
| 19:22      | It protects me.                                                  |
| 19:23      | You install the app, you click one button                        |
| 19:25      | and you're protected.                                            |
| 19:26      | So protect yourself online today                                 |
| 19:29      | by visiting expressvpn.com/automators.                     |
| 19:33      | That's E-X-P-R-E-S-S-V-P-N dot com/automators              |
| 19:38      | and you can get an extra three months for free.                  |
| 19:40      | So just go to expressvpn.com/automators to learn more.     |
| 19:44      | And our thanks to ExpressVPN                                     |
| 19:46      | for their support of the automators and all of Relay FM.         |
| 19:52      | Rose, you are a particular fan of [[Brett Terpstra\|Brett Terpstra's]] app [[Bunch]],    |
| 19:58      | which is really at its barest description                        |
| 20:03      | of a setup application.                                          |
| 20:05      | Tell us about [[Bunch]].                                             |
| 20:07      | So Bunch is very simple.                                         |
| 20:10      | So if folks are familiar with [[Markdown]]                           |
| 20:13      | and how simple [[Markdown]] is,                                      |
| 20:15      | you put underscores or stars around a word to make it italic     |
| 20:18      | and two underscores or two stars around a word                   |
| 20:20      | to make it bold, things like that.                               |
| 20:22      | You'll already be more than capable enough                       |
| 20:24      | of writing [[Bunch]] files because,                                  |
| 20:26      | and this is one of the things I love about Bunch,                |
| 20:29      | all of your setups in [[Bunch]] are files                            |
| 20:32      | with the word `.bunch`, yay.                                    |
| 20:34      | And so it's a little application.                                |
| 20:37      | It lives in your menu bar and it has a folder that it reads      |
| 20:41      | and there can be subfolders in there.                            |
| 20:43      | And these are the setups that then appear in the menu.           |
| 20:47      | And if you use subfolders, you can organise them                 |
| 20:49      | and things like that.                                            |
| 20:50      | There's [[Front Matter]], which goes at the top of the file          |
| 20:53      | that says, hey, I wanna like prefix this with like,              |
| 20:56      | this emoji or everything with these tags comes,                  |
| 21:00      | you should have this other thing or whatever.                    |
| 21:04      | And you can get very, very nerdy with it.                        |
| 21:06      | But one of the things that I absolutely love                     |
| 21:09      | is being able to just open all of my [[Bunch]] files.                |
| 21:11      | And I tend to do this either in [[BBEdit]]                          |
| 21:15      | or [[Visual Studio Code]], you can open a folder                     |
| 21:17      | in either of those applications, but then I can search.          |
| 21:20      | And so I can find everything that says anything                  |
| 21:22      | about automators by just searching that whole folder.            |
| 21:25      | And that is something that I struggle to do                      |
| 21:27      | with [[Shortcuts]] in particular,                                    |
| 21:29      | because I have to open every single shortcut                     |
| 21:31      | and scroll up and down until I find everywhere                   |
| 21:34      | where I've mentioned [[Firefox]] or [[Safari]]                           |
| 21:37      | or something like that.                                          |
| 21:38      | And that's where that gets a little bit tricky                   |
| 21:41      | and frustrating.                                                 |
| 21:42      | And sometimes if I wanna make a bigger change,                   |
| 21:44      | maybe I'm switching to using [[Safari Technology Preview]]           |
| 21:47      | for the time being.                                              |
| 21:48      | Well, actually what I can do in [[Bunch]] is I can say,              |
| 21:51      | hey, my default browser is a [[Safari Technology Preview]],          |
| 21:55      | open everything in that,                                         |
| 21:56      | unless I have specifically said,                                 |
| 21:58      | this thing should open in [[Google Chrome\|Chrome]],                                |
| 22:00      | this thing should open in [[Microsoft Edge\|Edge]], etc.,                       |
| 22:02      | because I can do that too.                                       |
| 22:04      | And yeah, you just write some text and tell it what to do.       |
| 22:09      | It's pretty simple.                                              |
| 22:11      | So like a sample `bunch` file could just have basically            |
| 22:17      | almost just a list of app names in it.                           |
| 22:19      | And that would that pretty much be it.                           |
| 22:22      | There are a whole bunch of sample bunches on the website,        |
| 22:24      | which I will link to as well,                                    |
| 22:26      | just because that will probably be quite helpful                 |
| 22:29      | for people who are there going,                                  |
| 22:31      | ooh, I like the sound of this.                                   |
| 22:33      | Okay, let me interrupt there.                                    |
| 22:34      | Okay, so, Rose, let me interrupt there for a second.             |
| 22:36      | Just walk us through some basics                                 |
| 22:39      | before we get into the details.                                  |
| 22:40      | So just tell us if you were gonna use [[Bunch]]                      |
| 22:42      | and you wanted to, let's do my journaling thing.                 |
| 22:46      | D[[ay One]] on one side, [[Apple Photos\|Photos]] on the other side,                   |
| 22:50      | how would you do that with [[Bunch]]?                                |
| 22:52      | Well, to start with in [[Bunch]],                                    |
| 22:54      | you would write [[Day One]] on a line,                               |
| 22:56      | "Day" and "One", both having capitals at the start.                 |
| 23:00      | And then you would type on another line, "Photos" underneath it.   |
| 23:03      | And that will start by opening your two apps, okay?              |
| 23:06      | So that's very simple.                                           |
| 23:08      | And then when it comes to moving windows around,                 |
| 23:12      | I use [[Bunch]] for this.                                            |
| 23:15      | But there are some other options.                                |
| 23:18      | So actually going back to the start                              |
| 23:19      | of your sample shortcut,                                         |
| 23:20      | you can actually hide all of your open applications in [[Bunch]].    |
| 23:26      | And you do that by typing,                                       |
| 23:29      | I'm just double checking what it is at at.                       |
| 23:32      | So the at symbol or the as at symbol twice on a line.            |
| 23:37      | And that hides everything.                                       |
| 23:39      | Okay.                                                            |
| 23:40      | And then I would run a shortcut to turn on the [[Focus Mode\|focus mode]]     |
| 23:43      | because that's something that you can't really do                |
| 23:46      | in apps that aren't shortcuts.                                   |
| 23:48      | And then [[Day One]] on a line, [[Apple Photos\|Photos]] on a line.                    |
| 23:52      | And then for moving windows around,                              |
| 23:56      | I always use [[Moom]] for this.                                      |
| 23:59      | And I'm just trying to double check.                             |
| 24:00      | I don't believe that [[Bunch]] has,                                  |
| 24:06      | yeah, it does not have window management features                |
| 24:09      | where it moves windows around.                                   |
| 24:10      | So they recommend either using [[Moom]]                              |
| 24:13      | or something like [[Keyboard Maestro]] for that.                     |
| 24:15      | So after that, then I'd have a star on a line                    |
| 24:18      | and tell application [[Moom]] to set journaling.                     |
| 24:23      | So start my journaling setup and that would be it basically.     |
| 24:26      | How would you call the [[Focus Mode\|focus mode]] shortcut from [[Bunch]]?           |
| 24:31      | So you put in brackets.                                          |
| 24:33      | So you start open bracket                                        |
| 24:35      | and then `sc` lowercase for shortcut.                              |
| 24:38      | And then you put the name of your shortcut                       |
| 24:40      | and then you close the bracket and that's it.                    |
| 24:42      | Just one single line.                                            |
| 24:43      | And then I can see everywhere                                    |
| 24:44      | that I'm calling the same shortcut as well                       |
| 24:46      | because I can search for a shortcut name                         |
| 24:48      | and I'll find everywhere that calls it,                          |
| 24:50      | which is also nice if I go in a little renaming kick             |
| 24:53      | and change all of my shortcuts.                                  |
| 24:55      | I mean, that's one of the big advantages of [[Bunch]]                |
| 24:57      | is that it's just a block of text.                               |
| 24:59      | When you're done, what Rose just described                       |
| 25:01      | is like six lines of text.                                       |
| 25:04      | And it's so easy to copy and paste it.                           |
| 25:06      | Like if you build it successfully                                |
| 25:08      | and you want to make a different one,                            |
| 25:10      | you can duplicate it or copy that text,                          |
| 25:12      | paste it somewhere else                                          |
| 25:13      | and just make a few little changes and you're going.             |
| 25:17      | And so I spent time with [[Bunch]] too.                              |
| 25:19      | And I feel like it really is additive                            |
| 25:23      | as you learn to build them.                                      |
| 25:24      | It gets very quickly,                                            |
| 25:26      | you get the ability to make many of them                         |
| 25:27      | because it's the same tricks over and over again.                |
| 25:31      | Yes, yeah.                                                       |
| 25:32      | And also, with the beauty that is the Internet,                  |
| 25:36      | a little bit of copy and paste goes a very long way.             |
| 25:39      | So you can either duplicate a bunch that you've already made     |
| 25:42      | or you can copy where the sample ones                            |
| 25:44      | or some people have published theirs online.                     |
| 25:46      | [[Brett Terpstra]] obviously has shared a whole bunch                |
| 25:49      | as they are, as this is his app.                                 |
| 25:52      | And it's very easy to just copy something, paste it              |
| 25:57      | and ta-da, you have a bunch ready to use.                        |
| 26:00      | And then, so you can click in the menu bar                       |
| 26:03      | and then activate a bunch there.                                 |
| 26:06      | Or [[Bunch]] also has integrations with [[Stream Deck]][^1]                  |
| 26:10      | and it's got [[AppleScript]] support as well,                       |
| 26:12      | which means that then you can call it                            |
| 26:13      | through [[Keyboard Maestro]] or [[AppleScript]] itself                   |
| 26:16      | or [[Shortcuts]] and yeah,                                           |
| 26:18      | there's all of the options to run a bunch as well.               |
| 26:22      | Yeah, and so I think [[Bunch]] easily matches                        |
| 26:25      | the [[Shortcuts]] capabilities,                                      |
| 26:28      | although sometimes it feels a little awkward, right?             |
| 26:30      | Because you do have to call a shortcut out of a bunch            |
| 26:34      | or it's like, it's a little weird                                |
| 26:35      | where [[Shortcuts]] is self-contained.                               |
| 26:38      | But to me, the advantage of [[Bunch]]                                |
| 26:40      | is when you get all those additional features                    |
| 26:43      | because there's a lot you can do with [[Bunch]]                      |
| 26:46      | that you just honestly can't do with [[Shortcuts]]                   |
| 26:48      | short of writing some pretty exotic [[AppleScripts]].               |
| 26:52      | Yes, yeah.                                                       |
| 26:53      | And there's things like, for example,                            |
| 26:56      | being able to keep your machine awake.                           |
| 26:58      | So obviously if you've got an app                                |
| 26:59      | like [[Amphetamine]] installed or something                          |
| 27:01      | that has [[AppleScript]] support, you can use that.                 |
| 27:03      | But [[Bunch]] also just has a native feature                         |
| 27:05      | for keeping your machine awake.                                  |
| 27:07      | It also has native features for turning on dark mode             |
| 27:10      | or quitting everything.                                          |
| 27:12      | So if you do wanna go full in and say,                           |
| 27:15      | no, I'm quitting every single application                        |
| 27:17      | and starting over in this particular [[Focus Mode\|focus mode]],                 |
| 27:19      | that's what's happening, you can do that.                        |
| 27:21      | It's got actions for wallpaper,                                  |
| 27:24      | changing audio inputs and outputs.                               |
| 27:27      | That's pretty special.                                           |
| 27:30      | I personally absolutely in love with [[Soundsource]]                 |
| 27:34      | from [[Audio Hijack]][^2].                                               |
| 27:36      | We did have [[Paul Kafasis\|Paul]] on the show a little while ago                  |
| 27:38      | talking about this.                                              |
| 27:39      | But if I wasn't using [[Audio Hijack]][^3] for this,                     |
| 27:42      | which again, I have those in a shortcut                          |
| 27:45      | which I run through [[Bunch]].                                       |
| 27:47      | And that predates actually the audio controls within [[Bunch]].      |
| 27:51      | But if I didn't have that,                                       |
| 27:53      | then I could just do that directly in [[Bunch]]                      |
| 27:54      | if I wanted to.                                                  |
| 27:55      | Yeah, another one you can do that I use                          |
| 27:57      | because I do a lot of screen casting.                            |
| 28:00      | I need to hide the dock when I record                            |
| 28:02      | because I only went dock there.                                  |
| 28:04      | So you just say open parenthesis, lowercase,                     |
| 28:07      | `hide`dock`, close parenthesis.                            |
| 28:10      | And that's a command to hide the dock.                           |
| 28:12      | It's got a whole series of commands you can drop in              |
| 28:15      | which is really clever and again, it's just plain text.          |
| 28:19      | You're looking at it, it's obvious what you're doing.            |
| 28:22      | Yeah, another thing that I like about [[Bunch]]                      |
| 28:24      | is I can schedule bunches.                                       |
| 28:27      | So you can say that this should open at the same times           |
| 28:30      | every day or when it should close.                               |
| 28:34      | So if you want to turn off a bunch                               |
| 28:36      | because every bunch that turns on can also turn off.             |
| 28:40      | Now you don't have to have it able to turn on and off.           |
| 28:43      | You can turn off toggling, which is what it's called             |
| 28:45      | because you run it to turn it on.                                |
| 28:47      | But when you run it to turn it off,                              |
| 28:48      | it will then close the applications that it's opened             |
| 28:51      | or the folders that it's shown in [[Finder]]                         |
| 28:54      | and things like that,                                            |
| 28:55      | which I find is incredibly helpful.                              |
| 28:58      | You can also actually even say,                                  |
| 29:00      | hey, so if this is running and it's starting,                    |
| 29:02      | so it's turning on, do this.                                     |
| 29:04      | And if it's turning off, do that,                                |
| 29:06      | which for me is very useful for my shortcut                      |
| 29:08      | to turn on my [[Focus Mode\|focus modes]].                                       |
| 29:10      | When it's turning on, I run one shortcut.                        |
| 29:12      | When it's turning off, I use another shortcut.                   |
| 29:16      | And that sort of thing becomes very handy                        |
| 29:19      | once you spend a little time playing with it.                    |
| 29:23      | For a while, I wasn't using the toggles                          |
| 29:25      | and being able to turn off bunches.                              |
| 29:27      | I was just trying to wrap my head around it for a little bit.    |
| 29:30      | But then I figured out, okay, no, yeah,                          |
| 29:32      | I really want to be able to just say, I'm done with this,        |
| 29:35      | undo what I did to get set up basically,                         |
| 29:37      | and I'm back to how I was, which is really nice.                 |
| 29:41      | Yeah, you know, I played with the idea                           |
| 29:42      | of using [[Focus Mode\|focus modes]] to trigger setups,                          |
| 29:46      | but it just didn't really work for me                            |
| 29:48      | because I have a lot more setups than f[[Focus Mode\|focus modes]].               |
| 29:52      | And it makes more sense for me to trigger a setup                |
| 29:56      | and then have the focus mode triggered by that.                  |
| 29:58      | But you can go either way with this                              |
| 30:00      | and you can do that with any of these applications.              |
| 30:03      | When I was testing [[Bunch]], one of the things,                     |
| 30:05      | I just never found really a good excuse to schedule a setup.     |
| 30:10      | To me, it really is kind of like the act of sitting down         |
| 30:15      | and pushing the button and kind of feeling                       |
| 30:17      | like it's "[on like Donkey Kong](https://en.wiktionary.org/wiki/on_like_Donkey_Kong)" and having the screen set up       |
| 30:21      | and like, okay, let's go, it's set up, let's go.                 |
| 30:24      | So I never really did really take advantage                      |
| 30:28      | of the scheduling features in Bunch.                             |
| 30:31      | Yeah, I don't necessarily go full in on the scheduling,          |
| 30:35      | but what I do do is close after.                                 |
| 30:38      | So I can say for a [[Bunch]], hey, so when I start this,             |
| 30:42      | so for example, I started our automators podcasting Bunch,       |
| 30:47      | I started it about 32 minutes ago.                               |
| 30:50      | In another two hours, it's gonna automatically stop              |
| 30:53      | and it will do things like close [[Audio Hijack]],                          |
| 30:54      | close [[Zoom]], and so on.                                 |
| 30:56      | Now we don't record for two and a half hours.                    |
| 30:58      | So that two and a half hours, I've built a safety in there.      |
| 31:01      | And also when [[Bunch]] closes apps,                                 |
| 31:04      | it's doing like the close menu,                                  |
| 31:06      | it's not going force quit this application.                      |
| 31:08      | So [[Audio Hijack]] pops up and it's like,                           |
| 31:10      | hey, you're still recording.                                     |
| 31:11      | Do you really want to quit if, for some reason,                  |
| 31:14      | maybe I turn the bunch on a couple of hours in advance           |
| 31:19      | instead of when I should have.                                   |
| 31:21      | But yeah, I really like the fact that I can say,                 |
| 31:25      | hey, so if this is still open after a couple of hours,           |
| 31:28      | turn it off, I'm done.                                           |
| 31:29      | Like, just assume that I finished and I had to run               |
| 31:32      | and I forgot to turn it off or something.                        |
| 31:35      | And that is very nice.                                           |
| 31:37      | Yeah, and I would probably argue that [[Bunch]]                      |
| 31:40      | of all the tools we're talking about today                       |
| 31:42      | is the most powerful for creating setups                         |
| 31:44      | because number one, it comes from the mind of [[Brett Terpstra]].    |
| 31:48      | And number two, it's really made for this exact purpose.         |
| 31:51      | It's made to create setups.                                      |
| 31:54      | And when you start going through the documentation,              |
| 31:56      | we're gonna put a link in the notes to the documentation.        |
| 31:59      | And if you're [[Bunch]] curious,                                     |
| 32:01      | I recommend kind of clicking through this.                       |
| 32:03      | I mean, he's added so many options.                              |
| 32:06      | Like you can force keystrokes,                                   |
| 32:08      | you can add [[Front Matter]] to your document,                       |
| 32:10      | which is a kind of metadata.                                     |
| 32:13      | You can use snippets, tags, variables.                           |
| 32:16      | I mean, the only really downside of [[Bunch]]                        |
| 32:20      | that I discovered was window management.                         |
| 32:23      | It doesn't really have a built-in                                |
| 32:25      | window management system as Rose was saying earlier.             |
| 32:28      | There is a limited window management feature                     |
| 32:32      | out of [[Shortcuts]].                                                |
| 32:33      | There is better window management out of [[Keyboard Maestro]].       |
| 32:36      | But [[Brett Terpstra\|Brett]] kind of solves it                                      |
| 32:37      | if you're willing to get an app like [[Moom]].                       |
| 32:40      | And honestly, if you're gonna buy [[Bunch]], buy [[Moom]] too.           |
| 32:43      | [[Moom]] is under $10 and it's great.                                |
| 32:45      | And [[Bunch]] is free.                                               |
| 32:47      | So there are donations optionally available,                     |
| 32:52      | but you don't actually have to pay for [[Bunch]],                    |
| 32:53      | which is very generous of [[Brett Terpstra\|Brett]].                                 |
| 32:56      | And there's a lot of nice features                               |
| 33:00      | that are available here.                                         |
| 33:01      | And there's all sorts like,                                      |
| 33:04      | when this application opens as part of this,                     |
| 33:07      | I wanna focus it.                                                |
| 33:08      | So you could be opening seven different applications,            |
| 33:10      | but this one's the one I want focused.                           |
| 33:13      | And you don't have to put it at the end of your list.            |
| 33:15      | And you can also say,                                            |
| 33:16      | hey, I've got 10 things here, do them all at the same time,      |
| 33:20      | execute them in parallel or no, it's very important.             |
| 33:23      | I want these to go one, two, three, four, five.                  |
| 33:26      | And so you can do it sequentially.                               |
| 33:27      | And you do have the option of that really fine-grained control,  |
| 33:33      | but you also don't have to.                                      |
| 33:35      | And also for any applications that are a little bit finicky,     |
| 33:39      | maybe they don't necessarily have great Mac support.             |
| 33:42      | And I say Mac support deliberately                               |
| 33:44      | because apps don't come with [[Bunch]] support.                      |
| 33:47      | If they're good Mac apps,                                        |
| 33:49      | then [[Bunch]] can do a whole bunch with them, you know?             |
| 33:52      | But yeah, as it is,                                              |
| 33:55      | like there is the option of delaying things in [[Bunch]] as well.    |
| 33:58      | So you can say, hey, do this five seconds later,                 |
| 34:02      | like give me five seconds or pause for 15 seconds                |
| 34:05      | and then go and do the next part.                                |
| 34:07      | So for example, if you're launching [[Affinity Publisher]],          |
| 34:10      | you can wait 15 seconds                                          |
| 34:12      | and then you can execute our workflow                            |
| 34:16      | or whatever it is that you want.                                 |
| 34:18      | Because some applications do need a little bit of time           |
| 34:22      | to get started and get ready.                                    |
| 34:24      | And [[Bunch]] has got a fairly nice way of handling that,            |
| 34:27      | I have to say.                                                   |
| 34:27      | It's not as powerful as [[Keyboard Maestro\|Keyboard Maestro's]],                       |
| 34:30      | wait until the app window title is this                          |
| 34:34      | or this image appears on screen.                                 |
| 34:36      | But this gets around,                                            |
| 34:38      | I've found like 95% of any issues with applications              |
| 34:42      | that maybe don't quite have everything                           |
| 34:45      | that you might want in a Mac app,                                |
| 34:46      | but you still need to use anyway.                                |
| 34:49      | It runs conditional logic.                                       |
| 34:51      | So it really is powerful.                                        |
| 34:53      | Another thing that it does really well,                          |
| 34:55      | what you can do with [[Shortcuts]],                                  |
| 34:57      | but not as elegantly or as easily is                             |
| 35:00      | you can have it not just open [[Safari]],                            |
| 35:02      | but open specific websites or [[URL Schemes\|URL schemes]].                       |
| 35:05      | You can have it open specific documents                          |
| 35:07      | and whatever document-based application you're running.          |
| 35:12      | I feel like the logic I would use here,                          |
| 35:15      | if you're curious about this stuff,                              |
| 35:17      | if you just want to go to the nerdy level,                       |
| 35:19      | check out [[Bunch]] and [[Keyboard Maestro]].                            |
| 35:21      | If you want to start easy, start with [[AppleScript]],              |
| 35:23      | but if you find yourself banging into the ceiling of it          |
| 35:26      | and it's not giving you quite what you want,                     |
| 35:28      | that's where these apps step up.                                 |
| 35:31      | Yes, yeah.                                                       |
| 35:32      | So one of the things that I'm doing                              |
| 35:34      | with all of my podcast recording bunches                         |
| 35:37      | is I have them open an [[OmniFocus]] [[URL Schemes\|URL scheme]].                     |
| 35:42      | And so it's `omnifocus:///`                    |
| 35:46      | and then `folder/`, the folder.                                |
| 35:49      | So when I started recording automators,                          |
| 35:52      | it opened [[OmniFocus]] to my own Automators folder.                 |
| 35:55      | So I have [[OmniFocus]],                                             |
| 35:56      | but then I click on [[OmniFocus]] and my doc is like,                |
| 35:58      | oh yeah, that's automators, great, perfect.                      |
| 36:00      | Now I see the automators things and I can check off              |
| 36:03      | that I've recorded the ads for this episode                      |
| 36:05      | and so on and so forth.                                          |
| 36:06      | And that to me is where this becomes very powerful.              |
| 36:09      | Now you can run [[URL Schemes\|URL schemes]] with [[Shortcuts]] as well.              |
| 36:12      | That's available there and it's available                        |
| 36:14      | to the [[Keyboard Maestro]].                                           |
| 36:16      | But also if I search for [[OmniFocus]] in my bunch folder,           |
| 36:19      | I'm gonna find all of the [[OmniFocus]] app opens                    |
| 36:23      | as well as calling [[URL Schemes\|URL schemes]] and so on.                        |
| 36:25      | And to me, that's where this gets very nice in a,                |
| 36:31      | hmm, I did something a little bit ambitious somewhere.           |
| 36:35      | Maybe it was a little too ambitious, you could say.              |
| 36:38      | Because this happens, we're automators,                          |
| 36:39      | maybe sometimes we go out on a bit of a limb                     |
| 36:41      | and sometimes that limb is not necessarily great                 |
| 36:43      | for supporting our weight                                        |
| 36:44      | or we forgot the safety tether, whatever it is.                  |
| 36:47      | Being able to just search your whole folder                      |
| 36:49      | and be able to go, aha, that's where I messed up                 |
| 36:52      | with calling this [[OmniFocus]] URL or something.                    |
| 36:58      | And that works really well for me.                               |
| 36:59      | And also the fact that I can have snippets in [[Bunch]],             |
| 37:04      | which are essentially functions                                  |
| 37:06      | that you can reuse across multiple bunches.                      |
| 37:08      | So for podcasting, all of my podcasting has                      |
| 37:13      | some similar core steps that I would like to happen.             |
| 37:17      | And so I have a podcasting bunch snippet,                        |
| 37:19      | which when, what that does is it does the same thing             |
| 37:24      | for all of the podcasting,                                       |
| 37:26      | but then I don't have to write the same logic three times.       |
| 37:29      | And that's really nice.                                          |
| 37:31      | You could do that with scripts as well,                          |
| 37:32      | but I like the [[Bunch]] snippets because they're just               |
| 37:35      | the exact same syntax, so that works very well.                  |
| 37:38      | Yeah, yeah, a bunch is a real option.                            |
| 37:41      | And as you've heard from us here,                                |
| 37:43      | there's just so, it really runs deep                             |
| 37:47      | and there's a lot of things you can do with it.                  |
| 37:49      | One of the things I spent time when I first started              |
| 37:52      | familiarizing myself with the app                                |
| 37:53      | is looking at the sample scripts                                 |
| 37:55      | that [[Brett Terpstra\|Brett]] gives you on the website.                             |
| 37:57      | And those have almost everything I needed, right,                |
| 38:01      | to build it.                                                     |
| 38:02      | So don't be intimidated by,                                      |
| 38:04      | just look through the sample ones                                |
| 38:05      | and look at that in combination with the documentation.          |
| 38:08      | And this is a little nerdy, granted,                             |
| 38:10      | like there will be some people that don't want to do this,       |
| 38:13      | but if you go down that rabbit hole,                             |
| 38:15      | you will be rewarded with a lot of power                         |
| 38:18      | and that's kind of fun.                                          |
| 38:19      | But listening to this, you kind of know, right?                  |
| 38:21      | If you're listening like,                                        |
| 38:22      | do I just want to make it simple with [[Shortcuts]],                 |
| 38:25      | which does like 90% of this stuff,                               |
| 38:27      | or do I want to go all the way to something like [[Bunch]] or          |
| 38:31      | [[Keyboard Maestro]], which goes 110%.                               |
| 38:33      | Yes.                                                             |
| 38:34      | Every time I say that,                                           |
| 38:36      | every time I say 110%, somebody writes me about that.            |
| 38:38      | They're like, why do you say that?                               |
| 38:40      | That's not even possible.                                        |
| 38:42      | Well, you know, because we're having fun                         |
| 38:44      | and that's kind of the point of what we're doing here.           |
| 38:46      | Speaking of having fun,                                          |
| 38:47      | if you do want to talk to other people about [[Bunch]],             |
| 38:49      | obviously the [Automators Forum](https://talk.automators.fm) is always very happy              |
| 38:52      | to have people talk about all the automation options,            |
| 38:54      | but [[Bunch]] does have its own discussion forums on [[GitHub]]         |
| 38:57      | and I'll put a link to those in the show notes as well,          |
| 39:00      | because there's some really good things                          |
| 39:02      | that you can find there through search.                          |
| 39:04      | And sometimes, you know, people have had, you know,              |
| 39:08      | feature requests and so on, which have ended up,                 |
| 39:10      | you know, making it in.                                          |
| 39:10      | I've had a few of those before.                                  |
| 39:12      | And sometimes you're there going,                                |
| 39:14      | hmm, like, did I do something wrong?                             |
| 39:17      | Did I do something right?                                        |
| 39:18      | And you can just have a search and have a look                   |
| 39:20      | or you can open a new discussion,                                |
| 39:22      | which is like a new thread post.                                 |
| 39:25      | And yeah, and ask and [[Brett Terpstra\|Brett]] and other users                      |
| 39:29      | will pop around and give you a hand,                             |
| 39:31      | which is always nice when there's a community                    |
| 39:33      | around automation tools.                                         |
| 39:38      | This episode of Automated is brought to you by LinkedIn Jobs.    |
| 39:41      | When you're hiring for your small business,                      |
| 39:43      | you want to find quality professionals                           |
| 39:44      | that are right for the role.                                     |
| 39:45      | That's why you have to check out LinkedIn Jobs.                  |
| 39:48      | LinkedIn Jobs has the tools to help you find                     |
| 39:49      | the right professionals for your team faster and for free.       |
| 39:52      | Whenever I've been looking for a job                             |
| 39:54      | or I've been looking at people,                                  |
| 39:55      | I've always wanted to know all of those details                  |
| 39:58      | that maybe don't necessarily make it into an official CV,        |
| 40:01      | that make that person interesting                                |
| 40:02      | or that job right for me.                                        |
| 40:04      | And using the right hiring tool is really important              |
| 40:06      | because it allows you to see things like that                    |
| 40:08      | as well as the other information.                                |
| 40:11      | LinkedIn isn't just a job board.                                 |
| 40:12      | It helps you for higher professionals                            |
| 40:14      | you can't find anywhere else,                                    |
| 40:15      | even those who aren't actively searching for a new job,          |
| 40:17      | but might be open to the perfect role.                           |
| 40:19      | In a given month, over 70% of LinkedIn users                     |
| 40:22      | don't visit other leading job sites.                             |
| 40:24      | So if you're not looking at LinkedIn,                            |
| 40:25      | you're looking in the wrong place.                               |
| 40:27      | On LinkedIn, 86% of small businesses                             |
| 40:29      | get a qualified candidate within 24 hours.                       |
| 40:32      | Hire professionals like a professional on LinkedIn.              |
| 40:35      | LinkedIn also knows that small businesses                        |
| 40:37      | are wearing so many hats                                         |
| 40:38      | and might not have the time or resources to hire.                |
| 40:40      | That's why they're constantly finding ways                       |
| 40:42      | to make the process easier.                                      |
| 40:44      | They even just launch a feature                                  |
| 40:45      | that helps you write job descriptions,                           |
| 40:46      | making the process even easier and quicker.                      |
| 40:48      | It's easy to see why 2.5 million small businesses                |
| 40:51      | use LinkedIn for hiring.                                         |
| 40:53      | Post your job free at linkedin.com/automators.             |
| 40:57      | That's linkedin.com/automators                             |
| 41:00      | to post your job for free.                                       |
| 41:01      | Terms and conditions apply.                                      |
| 41:05      | All right, I want to talk for a minute                           |
| 41:06      | about [[Keyboard Maestro]]                                           |
| 41:07      | because [[Keyboard Maestro]] is where                                |
| 41:09      | I originally stumbled into the idea of setups.                   |
| 41:13      | And this goes back many years,                                   |
| 41:15      | but I always want this idea of contextual computing              |
| 41:19      | where, like I said, my computer just sets itself up,             |
| 41:22      | makes everything necessary                                       |
| 41:24      | so I can really focus on the work.                               |
| 41:25      | And before there was [[Shortcuts]] for the Mac                       |
| 41:28      | and before there was [[Bunch]], [[Keyboard Maestro]] existed.            |
| 41:32      | And it is a very powerful tool.                                  |
| 41:34      | You can do almost any kind of automation on your Mac             |
| 41:38      | with [[Keyboard Maestro]].                                           |
| 41:39      | And that was the original place                                  |
| 41:41      | that I built the setups in.                                      |
| 41:43      | I have like 30 of them in a [[Keyboard Maestro]] folder.             |
| 41:46      | And it is, I will say,                                           |
| 41:50      | somewhere in between [[Shortcuts]] and [[Bunch]],                        |
| 41:54      | I think, generally.                                              |
| 41:56      | It definitely gives you more power than [[Shortcuts]],               |
| 41:59      | but it is not a custom built tool for making setups.             |
| 42:03      | And it is perfectly adequate                                     |
| 42:06      | to build out your setups with it.                                |
| 42:08      | If you're already a [[Keyboard Maestro]] user,                       |
| 42:10      | I think this is a good place to consider doing it.               |
| 42:14      | And honestly, momentum is what kept me doing it                  |
| 42:17      | with [[Keyboard Maestro]] for so long.                               |
| 42:20      | I want to talk more about what I'm going to be doing             |
| 42:22      | going forward towards the end of the show,                       |
| 42:23      | but [[Keyboard Maestro]] is the first place I started.               |
| 42:26      | And it has all the necessary commands,                           |
| 42:29      | like hide all applications,                                      |
| 42:31      | just like we talked about in [[Shortcuts]]                           |
| 42:32      | or the two add symbols in [[Bunch]],                                 |
| 42:34      | they've got a command in keyboard shortcuts.                     |
| 42:36      | So that's so often for me,                                       |
| 42:38      | the starting point of any setup automation,                      |
| 42:43      | no matter what platform I'm building it in,                      |
| 42:45      | is hide everything, give me a blank screen.                      |
| 42:48      | But in [[Shortcuts]], then you can do things.                        |
| 42:50      | You can activate applications like [[Safari]]                        |
| 42:54      | and you can point it at specific websites,                       |
| 42:57      | or you can open specific files,                                  |
| 42:59      | like if you have a [[Keynote]] file you work on every Monday,        |
| 43:02      | you can have it open that [[Keynote]] file                           |
| 43:04      | or a sales document or whatever.                                 |
| 43:07      | It does have window management tools.                            |
| 43:09      | They are not, I think, ideal, honestly, you know,                |
| 43:14      | it's very hard coded,                                            |
| 43:15      | like you're saying start at this pixel                           |
| 43:17      | and end at this pixel.                                           |
| 43:19      | They also have built-in ones,                                    |
| 43:20      | like the left side of the screen kind of stuff.                  |
| 43:23      | But I have found that sometimes                                  |
| 43:25      | when you change display resolution,                              |
| 43:28      | it gets confused and I'm frequently changing                     |
| 43:30      | display resolution because of podcasting and screencasting.      |
| 43:34      | But if you keep the same display all the time,                   |
| 43:35      | it'll work fine.                                                 |
| 43:37      | But it also can use the backdoor into [[Moom]], right?               |
| 43:40      | You use the [[Shortcuts]],                                           |
| 43:42      | you can call an [[AppleScript]] in there and have it use            |
| 43:45      | the [[Moom]] trick to set them up in any way you want.               |
| 43:48      | Some stuff that it does that is really cool                      |
| 43:50      | is you can put the mouse in a specific application               |
| 43:54      | or even [[UI Scripting\|UI script]] and make it do specific things.                |
| 43:58      | Like I built one for [[Grammarly]]                                   |
| 44:00      | and [[Grammarly\|Grammarly's]] web interface                                    |
| 44:01      | for the longest time was really, really rough.                   |
| 44:05      | But they had a button that looked like a certain image           |
| 44:08      | and if you clicked it you could create a new                     |
| 44:10      | and there was no other way to script that.                       |
| 44:12      | They have subsequently fixed it.                                 |
| 44:14      | But in the early days,                                           |
| 44:15      | [[Grammarly]] was just not very automation friendly.                 |
| 44:18      | So I would have it look for that icon on the screen              |
| 44:20      | and push the button with the mouse.                              |
| 44:22      | That's something that I think you could only do                  |
| 44:24      | with [[Keyboard Maestro]].                                            |
| 44:26      | And then it would paste the contents of the clipboard in.        |
| 44:30      | So it was very clever the way I did it,                          |
| 44:32      | but it was also very, what's the word for it?                    |
| 44:36      | A little bit rough.                                              |
| 44:37      | Anytime you're UI scripting,                                     |
| 44:40      | you never know if it may fail to trigger or something.           |
| 44:44      | But you can absolutely build these setups                        |
| 44:48      | right in [[Keyboard Maestro]].                                        |
| 44:51      | Yes, yeah, you can.                                              |
| 44:52      | And one of the things I'm gonna recommend for folks              |
| 44:54      | who perhaps like David deal with different screen resolutions    |
| 44:58      | or maybe it's as simple as sometimes you are in an office        |
| 45:02      | and sometimes you're working from home                           |
| 45:03      | and you have a different number of monitors attached             |
| 45:07      | or different screen resolutions.                                 |
| 45:09      | Now, [[Keyboard Maestro]] has a nice function built in                |
| 45:13      | for screen count.                                                |
| 45:15      | And this will tell you the number of screens                     |
| 45:17      | that are attached.                                               |
| 45:19      | And that sounds very simple, very basic,                         |
| 45:21      | but it's very useful.                                            |
| 45:22      | There's also another function for USB devices                    |
| 45:26      | where you can check if a particular USB device is connected.     |
| 45:30      | So for example, if you have a different mouse                    |
| 45:32      | or something like that at home versus at the office,             |
| 45:35      | then you can check whether or not the mouse is plugged in        |
| 45:38      | and then use that to position windows                            |
| 45:40      | and do things slightly differently.                              |
| 45:42      | And this is where [[Keyboard Maestro]] is really                      |
| 45:44      | so incredibly powerful because it's for scripting                |
| 45:47      | and it can script setups as part of that,                        |
| 45:51      | but it is a scripting application.                               |
| 45:53      | So it has all of those amazing, powerful automation functions    |
| 45:56      | that David and I know and love                                   |
| 45:58      | and you can use them in your setups.                             |
| 46:00      | And I regularly use the screen count                             |
| 46:02      | or USB devices functions as conditions to check,                 |
| 46:08      | okay, should I be doing this or should I be doing that?          |
| 46:11      | And there's a whole bunch of things that you can do              |
| 46:16      | because you can check if a screen is visible                     |
| 46:20      | and get the actual dimensions of it and so on.                   |
| 46:23      | So you can figure out based on that,                             |
| 46:26      | if you're at home or if you're at work                           |
| 46:27      | or if you've got your monitor set up on the left side            |
| 46:31      | or the right side at the moment or whatever it is,               |
| 46:33      | you can go very nerdy, but you also don't have to                |
| 46:36      | because there are simple things like open this URL,              |
| 46:39      | which could be a URL to a web page                                |
| 46:41      | or it could be a URL to an [[OmniFocus]] folder                      |
| 46:43      | or an [[Obsidian]] vault with [[URL Schemes\|URL schemes]].                           |
| 46:47      | And you can show files and finder                                |
| 46:49      | and all of those good things,                                    |
| 46:51      | which you can do with [[Bunch]] or [[Keyboard Maestro]],                       |
| 46:54      | or [[Shortcuts]] as well.                                            |
| 46:56      | So you can go very crazy and nerdy                               |
| 46:58      | or you can just have fun and keep it simple.                     |
| 47:02      | Yeah, I think one thing [[Keyboard Maestro]] does better             |
| 47:05      | than the other applications that we've discussed                 |
| 47:08      | is multiple monitor support.                                     |
| 47:10      | With [[Keyboard Maestro]],                                           |
| 47:11      | you can point it at any one of many monitors.                    |
| 47:15      | At one point I had three monitors                                |
| 47:17      | and I could [[Keyboard Maestro]] and point a window at say,          |
| 47:20      | put this on the bottom half of window of screen three,           |
| 47:23      | and it would do that.                                            |
| 47:25      | And these other apps aren't as stable in my experience           |
| 47:29      | addressing multiple monitors.                                    |
| 47:30      | So if you're somebody with a bunch of screens,                   |
| 47:33      | [[Keyboard Maestro]] is probably the end point for you on this       |
| 47:36      | because you can really put these setups to work,                 |
| 47:40      | putting the dials you need on the right screen                   |
| 47:43      | and the text on the left or whatever it is you need to do.       |
| 47:46      | It makes multiple window or multiple monitor very simple.        |
| 47:53      | Yeah, the advantage of something like [[Moom]]                       |
| 47:55      | is if it's just like, oh, move this                              |
| 47:57      | to the right half of my monitor,                                 |
| 47:58      | it doesn't care what monitor you're on,                          |
| 48:00      | it doesn't care about the size of the monitor and so on.         |
| 48:02      | But if you're saying,                                            |
| 48:03      | I position these 17 applications across my four monitors         |
| 48:06      | and you currently only have two,                                 |
| 48:08      | it's gonna run into a difficulty                                 |
| 48:09      | because what's it do with the other two monitors?                |
| 48:11      | Which two monitors do you have?                                  |
| 48:14      | And so for that, you'll want to save multiple [[Moom]] setups        |
| 48:19      | so that you can say this with four monitors,                     |
| 48:23      | this with two monitors,                                          |
| 48:24      | if that's something that you do regularly.                       |
| 48:26      | But yeah, [[Keyboard Maestro]] has the advantage                     |
| 48:29      | of being able to do maths.                                       |
| 48:31      | So it can calculate things.                                      |
| 48:33      | And that means that you can say, okay,                           |
| 48:35      | so if I have three screens attached,                             |
| 48:38      | then calculate the midpoint.                                     |
| 48:40      | So what is the centre of X and Y on my centre monitor?           |
| 48:44      | And then put that right there.                                   |
| 48:46      | And this is actually something I use                             |
| 48:48      | as a little hack that I found                                    |
| 48:50      | on the [[Keyboard Maestro]] forums ages ago                          |
| 48:52      | to always make sure that the [[Keyboard Maestro]] dialogs          |
| 48:56      | appear in the centre of my screen.                               |
| 48:59      | And that was something that I really like                        |
| 49:03      | and I will find a link to that actually                          |
| 49:05      | and pop that in because that's just something                    |
| 49:07      | that's perhaps useful to know                                    |
| 49:08      | that you can do with [[Keyboard Maestro]]                            |
| 49:10      | because you don't have to do it                                  |
| 49:11      | to just [[Keyboard Maestro]] windows.                                |
| 49:12      | Of course, you can do this to any windows,                       |
| 49:14      | make sure that they appear front and centre.                     |
| 49:16      | But it's quite a nice little exercise in figuring out,           |
| 49:19      | how do you handle window management                              |
| 49:24      | a little bit better with [[Keyboard Maestro]], perhaps.              |
| 49:27      | Yeah, I really feel like [[Keyboard Maestro]]                        |
| 49:31      | is perfectly adequate for this.                                  |
| 49:33      | There is one caveat and that is the pause command.               |
| 49:38      | When doing this in [[Keyboard Maestro]],                             |
| 49:40      | you have to tune the setup to adjust for the load time           |
| 49:45      | and I know [[Keyboard Maestro]] has a command                        |
| 49:48      | that says wait until this is done before you do that.            |
| 49:50      | But I don't find that 100% reliable                              |
| 49:53      | and what you don't want is to have a setup trigger               |
| 49:57      | and that give you what you need                                  |
| 49:58      | and then you're frustrated                                       |
| 49:59      | and feel like you wasted your time.                              |
| 50:00      | So when I do these setups in [[Keyboard Maestro]],                   |
| 50:04      | I generously use pauses, sometimes a 0.5 second                  |
| 50:09      | or maybe a two second                                            |
| 50:11      | or it just depends on what I'm asking it to do.                  |
| 50:14      | But often I find that giving it a little time                    |
| 50:17      | between each command guarantees success.                         |
| 50:22      | And we're talking like a total of five seconds                   |
| 50:26      | between all the commands                                         |
| 50:27      | if they're just a little 0.5 second pauses.                      |
| 50:29      | But so it really doesn't slow you down enough to matter          |
| 50:34      | but it makes it more stable.                                     |
| 50:36      | Whereas with [[Shortcuts]], everything works                         |
| 50:39      | without those pause commands, which is a real advantage.         |
| 50:44      | Yes, yeah, it certainly can be if you're okay                    |
| 50:47      | with the other limitations                                       |
| 50:48      | that you may have through [[Shortcuts]].                             |
| 50:50      | The pausing in general with [[Keyboard Maestro]]                     |
| 50:52      | is something I really like.                                      |
| 50:53      | So when we record Automators,                                    |
| 50:56      | we use [[Zoom]] to talk to each other.                               |
| 50:58      | We could use [[FaceTime]]                                            |
| 50:59      | or we've previously used [[Skype]] way back.                         |
| 51:03      | And there's plenty of options                                    |
| 51:04      | but [[Zoom]] has a great feature for keep on top                     |
| 51:07      | which means that I can see the little audio button in [[Zoom]]       |
| 51:12      | that I could use to meet myself                                  |
| 51:13      | but I can also actually see                                      |
| 51:14      | that the input levels are going up and down.                     |
| 51:16      | Now I can see it's an [[Audio Hijack]] as well                       |
| 51:18      | but every so often maybe Mac OS changes my input                 |
| 51:21      | or something and it's nice to be able to see                     |
| 51:23      | that you're still able to hear me.                               |
| 51:24      | And so one of the things that I have,                            |
| 51:27      | and this isn't necessarily a setup,                              |
| 51:28      | it's actually just waiting.                                      |
| 51:30      | [[Keyboard Maestro]] is watching for whenever [[Zoom]] activates         |
| 51:33      | or the [[Zoom]] window title changes.                                |
| 51:36      | And if it's a [[Zoom]] meeting, that's the window title,             |
| 51:39      | then it checks whether or not                                    |
| 51:40      | the keep on top menu item is marked.                             |
| 51:43      | And if it is not marked, then it clicks it.                      |
| 51:46      | And marked is when it's got a check next to it                   |
| 51:48      | because keep on top is just a menu item that gets a check        |
| 51:51      | or doesn't have a check depending on what you do.                |
| 51:55      | And that's something I can do with [[Keyboard Maestro]] very easily. |
| 51:58      | It's nice to be able to just say,                                |
| 52:00      | hey, like do this series of menu commands                        |
| 52:03      | in this application.                                             |
| 52:05      | And you can do that with other apps                              |
| 52:07      | but it gets a little bit tricky.                                 |
| 52:09      | And so the fact that [[Keyboard Maestro]] is able to do that         |
| 52:13      | is great.                                                        |
| 52:14      | And I have to say, I kind of feel like I'm cheating, David,      |
| 52:18      | because I am using [[Bunch]],                                        |
| 52:21      | but [[Bunch]] is running [[Shortcuts]] and [[Keyboard Maestro]].             |
| 52:24      | So I'm gonna use that to claim myself as the victor              |
| 52:29      | or a victor in today's episode                                   |
| 52:30      | because we don't actually win.                                   |
| 52:31      | We're not seriously competing against each other.                |
| 52:34      | But I think that is the thing                                    |
| 52:36      | that I would like everybody to take away from this               |
| 52:40      | of anybody can use setup apps                                    |
| 52:42      | and you should definitely have a little play with it.            |
| 52:45      | Maybe you always need to be able to display                      |
| 52:48      | this [[Microsoft PowerPoint\|PowerPoint]], this [[Microsoft Excel\|Excel]] sheet                                |
| 52:51      | and you want the [[Microsoft Teams]] window                          |
| 52:56      | to be on the left-hand side of your screen                       |
| 52:58      | while you are doing a monthly meeting or something.              |
| 53:00      | That's a great use case to have a little play with this.         |
| 53:03      | You don't have to use the setup every single day.                |
| 53:06      | You could use it once a month or once every six months           |
| 53:08      | as long as it works for you when you need it.                    |
| 53:11      | But have a little play and give it a try                         |
| 53:13      | with the apps that you already have.                             |
| 53:15      | [[Alfred]] can do some of this as well                               |
| 53:16      | with the workflow engines.                                       |
| 53:17      | I'm sure Raycast can.                                            |
| 53:19      | I need to spend more time playing with [[Raycast]] again.            |
| 53:22      | But all of these apps can do so many things                      |
| 53:25      | but also unlike Ghostbusters,                                    |
| 53:27      | don't be afraid to cross the streams.                            |
| 53:28      | If you know [[Shortcuts]] can do this step,                          |
| 53:31      | create a shortcut that does that step                            |
| 53:33      | and then just call that from [[Keyboard Maestro]] or [[Bunch]]           |
| 53:35      | or an [[Alfred]] command, an [[Alfred]] workflow                         |
| 53:39      | or whatever it is that you want.                                 |
| 53:41      | And yeah, it's nice to be able to just have a little play        |
| 53:46      | figure out what it is that you want                              |
| 53:48      | or need to do with these things and go from there.               |
| 53:52      | Because one of my bunches,                                       |
| 53:53      | actually most of my bunches for recording podcasts,              |
| 53:56      | they open a new [[Safari]] window.                                   |
| 53:59      | And then they go through                                         |
| 54:02      | and they open a series of URLs.                                  |
| 54:05      | But sometimes I need certain URLs                                |
| 54:07      | open in certain applications.                                    |
| 54:09      | Like when I'm recording iOS today, we use [[Google Sheets]]          |
| 54:12      | and I open that in [[Microsoft Edge\|Edge]]                                          |
| 54:14      | because [[Google Chrome\|Chrome-based]] browsers tend to work better                |
| 54:17      | and I'm playing with [[Microsoft Edge]] at the moment.               |
| 54:20      | So I can do that.                                                |
| 54:21      | And that's something that I can easily do                        |
| 54:23      | and that I don't have to remember of,                            |
| 54:24      | oh yeah, I was gonna open that in [[Microsoft Edge\|Edge]].                          |
| 54:26      | It's in [[Safari]] now, it's fine.                                   |
| 54:29      | But it's nice, it's simple, it's easy                            |
| 54:32      | and it works very well for me.                                   |
| 54:35      | Yeah, this stuff is really forgiving.                            |
| 54:37      | And like we've been saying throughout the show,                  |
| 54:39      | it's just really easy to build up a set of these                 |
| 54:44      | and have them, you can duplicate them                            |
| 54:49      | and suddenly you make one or two good ones                       |
| 54:52      | and before you know it, you do have 20.                          |
| 54:54      | And once you have 20, that just means that's 20 things           |
| 54:56      | you can get started on automatically                             |
| 54:59      | without a bunch of work.                                         |
| 55:01      | So it really is worth doing,                                     |
| 55:04      | setting up these setups.                                         |
| 55:07      | I strongly recommend it                                          |
| 55:09      | and I feel like people don't do this enough.                     |
| 55:12      | Occasionally I hear from someone's like,                         |
| 55:13      | oh, I finally tried it and now I get it.                         |
| 55:16      | And that's the reason we made this show today.                   |
| 55:18      | I just want people to try this                                   |
| 55:19      | because when you go through your day                             |
| 55:21      | and your computer sets itself up for you,                        |
| 55:23      | it just means you get your work done faster                      |
| 55:25      | and you stay on target better                                    |
| 55:27      | and all of those benefits are just waiting for you.              |
| 55:32      | And I'm gonna just preempt some potential feedback of,           |
| 55:35      | well, you could use login items on your Mac                      |
| 55:37      | to automatically have these applications open                    |
| 55:40      | when you start your Mac.                                         |
| 55:41      | Absolutely, 100% you can.                                        |
| 55:43      | But have you ever restarted your Mac                             |
| 55:45      | and just needed to do something really quickly                   |
| 55:47      | and then like six different applications                         |
| 55:49      | start bouncing in your doc                                       |
| 55:50      | because Mac OS just installed an update                          |
| 55:53      | and things are there going                                       |
| 55:54      | and trying to check whether or not they need to update.          |
| 55:56      | Can they run on this new version of Mac OS and so on?            |
| 55:58      | And you're there and it's like three minutes,                    |
| 56:00      | five minutes, sometimes even longer                              |
| 56:02      | before you can use your Mac.                                     |
| 56:03      | I try to avoid using login items for that reason                 |
| 56:07      | because I can have Bunch run at startup.                         |
| 56:09      | But anything actually that I do with [[Bunch]]                       |
| 56:12      | where I say, hey, run this at startup,                           |
| 56:13      | I actually have it ask me.                                       |
| 56:15      | So pop up and go, hey,                                           |
| 56:17      | do you wanna do your standard work setup                         |
| 56:20      | because you're on this machine?                                  |
| 56:21      | So I'm asking if you wanna do your standard work setup?          |
| 56:23      | And I can say yes or I can say no.                               |
| 56:24      | And sometimes it's nice to not have had                          |
| 56:29      | to pre-decide everything for your login items                    |
| 56:32      | and also some apps just automatically add themselves             |
| 56:35      | to that list, which is really annoying.                          |
| 56:36      | And then they're going, okay,                                    |
| 56:37      | well, I didn't need numbers opening on startup.                  |
| 56:40      | Numbers has never done that to me,                               |
| 56:41      | but sometimes you'll install a new app                           |
| 56:43      | and it's giving you 20 dialogs                                 |
| 56:46      | and it looks like it's the same dialogue six times,              |
| 56:49      | but it turns out one of them in the middle.                      |
| 56:51      | Yeah, that was adding it to the startup menu items list.         |
| 56:53      | And then you've got another thing opening on startup.            |
| 56:55      | So I try to avoid those                                          |
| 56:57      | because that way I can really tailor it for what I want.         |
| 56:59      | Even if I'm working every day                                    |
| 57:01      | when I open my Mac,                                              |
| 57:03      | sometimes I'm gonna go straight into a meeting.                  |
| 57:05      | Sometimes I will be, you know,                                   |
| 57:08      | actually just sitting down doing coding.                         |
| 57:10      | Sometimes I just need to review some stuff                       |
| 57:12      | that other people have written                                   |
| 57:14      | and I am not gonna be doing my own stuff for a little bit.       |
| 57:16      | So I don't need all those applications open                      |
| 57:19      | and I can wait until I'm ready for it.                           |
| 57:21      | And that is, you know, the advantage of having setup apps.       |
| 57:24      | Maybe you do exactly the same thing at the same time every day.  |
| 57:26      | Great, go ahead, schedule those,                                 |
| 57:28      | those automations if you want                                    |
| 57:30      | or maybe you just want                                           |
| 57:32      | to have a little bit more freedom in your life.                  |
| 57:34      | But yeah, combined with something like a stream deck             |
| 57:36      | for any of these options, it can be really nice.                 |
| 57:40      | But even if you're not using that,                               |
| 57:42      | if you're gonna use [[Shortcuts]],                                   |
| 57:44      | actually I would recommend putting a little,                     |
| 57:47      | use the shortcuts 'Add to Dock' option for the setups               |
| 57:54      | and then drag all of those into a folder                         |
| 57:56      | and then put that folder in your doc instead.                    |
| 57:58      | So you can actually remove the individual items                  |
| 58:00      | from your doc and then have a little folder                      |
| 58:03      | so that you can have, you know, click on the folder              |
| 58:05      | and then ta-da, I'm gonna click this one, click that one         |
| 58:07      | and then you don't have 20 shortcuts                             |
| 58:09      | across the bottom of your doc,                                   |
| 58:11      | but it's nice and fast to open                                   |
| 58:12      | or, you know, a little bit of self promotion,                    |
| 58:15      | use [[FocusCuts]].                                                  |
| 58:16      | Yeah, [[FocusCuts]].                                                |
| 58:17      | Okay, so triggering them,                                        |
| 58:19      | I wanna talk about that for a minute                             |
| 58:21      | because we've been jumping amongst the apps                      |
| 58:24      | but the actual process of doing a setup.                         |
| 58:29      | To me, so I've tried, like I said earlier,                       |
| 58:31      | I used to do it on a conflict palette                            |
| 58:33      | and [[Keyboard Maestro]].                                            |
| 58:34      | You know, I had the hyper key plus S                             |
| 58:37      | would open up a list of all of them                              |
| 58:39      | and I could just, you know, pick the one I want                  |
| 58:41      | and off to the races.                                            |
| 58:42      | At some point along the way,                                     |
| 58:44      | as I continued to accumulate [[Stream Deck\|Stream Decks]],                       |
| 58:46      | I had the extra button real estate                               |
| 58:49      | to set up some [[Stream Deck]] buttons for it.                       |
| 58:51      | But even then I have too many,                                   |
| 58:53      | like I have 20 of them.                                          |
| 58:55      | So I can't like take 20 buttons on my [[Stream Deck]]                |
| 58:58      | for all of them.                                                 |
| 58:59      | So I have them kind of topically arranged                        |
| 59:01      | where, you know, like the MacSparky ones                        |
| 59:03      | that might take two button clicks to do.                         |
| 59:05      | I've been looking at this [[Stream Deck#Stream Deck Neo\|Stream Deck Neo]] thinking               |
| 59:07      | maybe this could just be a setup machine                         |
| 59:09      | and I'm definitely thinking about that.                          |
| 59:12      | But I do like putting them on the buttons                        |
| 59:14      | and it doesn't really make sense.                                |
| 59:16      | You could absolutely tie these to a keyboard shortcut            |
| 59:19      | but I find it extremely satisfying pushing a button              |
| 59:23      | and having my computer say,                                      |
| 59:24      | yes, sir, I will set myself up for you                           |
| 59:27      | to do this important work and things,                            |
| 59:30      | windows fly around and things set up                             |
| 59:32      | and then I can take a sip of tea and get to work.                |
| 59:35      | How about you?                                                   |
| 59:37      | Yeah.                                                            |
| 59:38      | I mean, I predominantly use a combination of,                    |
| 59:41      | I mean, I'm using [[Bunch]].                                         |
| 59:42      | So I have the menu bar application up there,                     |
| 59:46      | which even though I'm using,                                     |
| 59:48      | I've been playing actually with a variety                        |
| 59:50      | of different apps recently,                                      |
| 59:52      | seeing if I can replace [[Bartender]],                               |
| 59:54      | but it's never hidden.                                           |
| 59:55      | It's always visible in my menu bar.                              |
| 59:58      | It's up, you know, sort of near my focus mode in the time.       |
| 01:00:02   | And so I have that there                                         |
| 01:00:04   | and I also have certain ones available on the [[Stream Deck]]        |
| 01:00:08   | and the [[Stream Deck]], you know, it changes.                       |
| 01:00:10   | The buttons are available to me                                  |
| 01:00:11   | depending on what I'm doing and various other things.            |
| 01:00:15   | So, you know, I do have different ones appear                    |
| 01:00:19   | and disappear there, which is pretty nice.                       |
| 01:00:23   | I forgot to mention, I've just realised, David,                  |
| 01:00:25   | I feel very bad because this is a key thing                      |
| 01:00:28   | that I use all the time in [[Bunch]].                                |
| 01:00:29   | You can choose to hide certain bunches.                          |
| 01:00:32   | So you can sync your whole [[Bunch]] folder,                         |
| 01:00:33   | but you can hide certain bunches on certain machines             |
| 01:00:36   | based on like the idea of the machine                            |
| 01:00:38   | or various other things.                                         |
| 01:00:40   | And it's a really useful thing                                   |
| 01:00:41   | because for example, during my standard working day,             |
| 01:00:44   | I don't want my podcasting stuff showing up.                     |
| 01:00:46   | So I hide it from the menu,                                      |
| 01:00:48   | but that's only the podcast recording,                           |
| 01:00:49   | podcast prep stuff, I still have that visible.                   |
| 01:00:52   | And while I'm doing podcast recording,                           |
| 01:00:54   | podcast prep is hidden and so on and so forth.                   |
| 01:00:56   | So that's, you know, that's quite useful for me.                 |
| 01:00:59   | All right, big question.                                         |
| 01:01:00   | I know your answer to this,                                      |
| 01:01:02   | but the question is what tools are we using to do setups?        |
| 01:01:05   | So your answer, I assume is [[Bunch]], right?                        |
| 01:01:09   | That's the one.                                                  |
| 01:01:10   | Yeah, it's [[Bunch]], but it also calls [[AppleScript\|AppleScripts]],               |
| 01:01:15   | which some of the scripts actually I keep in [[FastScripts]],       |
| 01:01:18   | which we haven't really talked about using [[AppleScript]]          |
| 01:01:21   | as a way to do all of your setups, you can do that.              |
| 01:01:24   | And if you're going to do that,                                  |
| 01:01:25   | I highly recommend [[FastScripts]]                                  |
| 01:01:27   | as a great little menu bar application                           |
| 01:01:29   | where you can just click it, go a little script,                 |
| 01:01:30   | and then it goes, ta-da, here's the list of your scripts.        |
| 01:01:33   | And yeah, that's great.                                          |
| 01:01:36   | So yeah, I primarily use [[Bunch]],                                  |
| 01:01:38   | but it calls out to [[AppleScript]] and [[Shortcuts]]                   |
| 01:01:40   | and [[Keyboard Maestro]], and so on as well.                         |
| 01:01:42   | Because honestly, it's the great combination                     |
| 01:01:45   | of everything together that works super well for me.             |
| 01:01:47   | Not any, there's no one app that can do everything,              |
| 01:01:51   | but [[Bunch]] is the place where I kick off all of my setups.        |
| 01:01:55   | It's kind of the glue, right?                                    |
| 01:01:56   | It just kind of holds it all together for you.                   |
| 01:01:58   | Yes.                                                             |
| 01:01:59   | So I came into this experiment                                   |
| 01:02:01   | with [[Keyboard Maestro]] as my primary.                             |
| 01:02:04   | And I have, one thing I have definitely decided                  |
| 01:02:06   | in this experience is that I'm moving out of [[Keyboard Maestro]].   |
| 01:02:09   | And this isn't any knock against [[Keyboard Maestro]].               |
| 01:02:12   | I use it that up for all sorts of stuff,                         |
| 01:02:14   | but I do feel like [[Bunch]] clearly is made for this.               |
| 01:02:19   | And as a result, it's a little better                            |
| 01:02:20   | and I think a little easier                                      |
| 01:02:22   | and a little bit more understandable and reliable.               |
| 01:02:26   | So I think [[Bunch]] is probably superior                            |
| 01:02:28   | to [[Keyboard Maestro]] for this task.                               |
| 01:02:30   | Now, granted, [[Bunch]] doesn't do a lot of things                   |
| 01:02:33   | that [[Keyboard Maestro]] does otherwise.                            |
| 01:02:35   | So, you know, I choose to use all the tools,                     |
| 01:02:37   | but for setups, [[Bunch]] is very attractive to me,                  |
| 01:02:40   | but also [[Shortcuts]] is so easy.                                   |
| 01:02:44   | And like I said, I built like, you know,                         |
| 01:02:47   | 20 of these things over the course of a month.                   |
| 01:02:50   | And I wasn't really feeling hamstrung by it.                     |
| 01:02:53   | I felt like, yeah, just running it out of [[Shortcuts]]                  |
| 01:02:55   | is the easiest.                                                  |
| 01:02:56   | It's so consistent.                                              |
| 01:02:58   | You don't have to call out to [[Shortcuts]].                         |
| 01:02:59   | Everything is right there.                                       |
| 01:03:02   | So I am a little torn.                                           |
| 01:03:04   | I know I'm not going to use [[Keyboard Maestro]]                     |
| 01:03:06   | and for now I'm building them                                    |
| 01:03:09   | in [[Keyboard Maestro]] and [[Bunch]].                                   |
| 01:03:10   | I'm experimenting and I'm trying to figure out                   |
| 01:03:13   | if the extra work of Bunch is worth it for me or not.            |
| 01:03:17   | And I haven't settled on the answers to that question yet,       |
| 01:03:20   | but I think I'll get there pretty soon.                          |
| 01:03:22   | I'm going to say because you take challenge,                     |
| 01:03:25   | I think because you take challenges                              |
| 01:03:26   | from your labs members of like,                                  |
| 01:03:29   | hey, swap this application for that.                             |
| 01:03:31   | I feel like [[Bunch]] is better for you in that respect              |
| 01:03:33   | because then you can search for everywhere                       |
| 01:03:35   | where you're using, I don't know, [[Safari]]                         |
| 01:03:37   | and replace it with [[Google Chrome\|Chrome]] or [[Microsoft Edge\|Edge]]                               |
| 01:03:39   | or something like that so that you can open                      |
| 01:03:43   | all of those URLs in those particular applications.              |
| 01:03:45   | You can also set your default browser there.                     |
| 01:03:47   | But if you were trying things as an experiment                   |
| 01:03:50   | for those awesome MacSparky fans,                                |
| 01:03:52   | then you could switch out [[OmniFocus]] for [[Things]]                   |
| 01:03:55   | in one place and you'd be able to find it.                       |
| 01:03:57   | And it's also, you can comment outlines in a bunch.              |
| 01:04:00   | And the fact that you can do that means                          |
| 01:04:02   | that you can keep all of the [[OmniFocus]] things there              |
| 01:04:04   | and then add like a [[Things]] line instead.                         |
| 01:04:06   | And then if you decide to switch back,                           |
| 01:04:08   | you just need to go and remove the [[Things]] lines                  |
| 01:04:10   | and go to and uncomment the [[OmniFocus]] lines                      |
| 01:04:13   | and you're done and you're back to how you were.                 |
| 01:04:16   | And that for me is incredibly powerful.                          |
| 01:04:19   | Where are all the places I'm using [[Audio Hijack]].                     |
| 01:04:21   | There's a whole bunch of them.                                   |
| 01:04:23   | I can find them.                                                 |
| 01:04:24   | I can't so easily do that with [[Shortcuts]].                        |
| 01:04:26   | It's a lot easier with [[Keyboard Maestro]],                         |
| 01:04:29   | but yeah, I just find the fact that it's text files in [[Bunch]]     |
| 01:04:33   | makes it a lot easier for me.                                    |
| 01:04:34   | I also find in [[Bunch]] working with URLs                           |
| 01:04:37   | and specific documents as much easier in files.                  |
| 01:04:40   | So I'll probably end up just with everything in [[Bunch]],           |
| 01:04:43   | but it's not an obvious answer.                                  |
| 01:04:46   | I mean, I think that for a lot of people,                        |
| 01:04:49   | [[Shortcuts]] is just fine.                                          |
| 01:04:51   | Yes, it really is.                                               |
| 01:04:53   | And honestly, if you are there going,                            |
| 01:04:55   | ooh, it feels like this, you know,                               |
| 01:04:57   | this is something that's appealing to me.                        |
| 01:04:59   | I'm intrigued, but I don't know if I'm ready                     |
| 01:05:01   | to do more than stick a toe in, stick a toe in with [[Shortcuts]].   |
| 01:05:04   | It's a great choice.                                             |
| 01:05:06   | It's very simple, very easy to see what you're doing.            |
| 01:05:09   | And yeah, the only recommendation I'd make                       |
| 01:05:12   | if you're gonna do this in [[Shortcuts]],                            |
| 01:05:13   | create a folder for setups,                                      |
| 01:05:15   | and then prefix everything with `setup`                            |
| 01:05:17   | so that you know all of those shortcuts                          |
| 01:05:20   | are related to doing setups.                                     |
| 01:05:22   | And that also means that you can then, if you want to,           |
| 01:05:25   | pull those into [[Alfred]], say,                                     |
| 01:05:28   | with one of [[Stephen Millard\|Stephen Millard's]] fabulous creations.                 |
| 01:05:33   | Is [[Bypass\|Bypass for Shortcuts]], that's the one.                         |
| 01:05:36   | And then you'll be able to see all of those really quickly.      |
| 01:05:40   | I think that this is, you know,                                  |
| 01:05:42   | [[Shortcuts]] is a really great place to get started for that.       |
| 01:05:45   | I agree, I agree.                                                |
| 01:05:46   | Either way, I believe in the religion of setups,                 |
| 01:05:50   | if you have not tried them,                                      |
| 01:05:52   | we released the show on Friday for a reason.                     |
| 01:05:55   | You got some time this weekend.                                  |
| 01:05:57   | Make a simple one, download the shortcut I shared                |
| 01:06:00   | and just start running it.                                       |
| 01:06:01   | And, you know, modify it a little bit.                           |
| 01:06:03   | And start down the path.                                         |
| 01:06:04   | I guarantee if you try this stuff,                               |
| 01:06:06   | you'll quickly realise, number one, it's not that hard.          |
| 01:06:09   | Number two, it's very easy to duplicate                          |
| 01:06:11   | and make a bunch of these things.                                |
| 01:06:12   | And before you know it,                                          |
| 01:06:13   | you are using setups every day and your life is easier.          |
| 01:06:17   | So please check it out.                                          |
| 01:06:19   | Yes, definitely.                                                 |
| 01:06:21   | All right, we are the Automators.                                |
| 01:06:22   | You can find us over at relay.fm/automators.               |
| 01:06:26   | Want to thank our sponsors this week,                            |
| 01:06:27   | ExpressVPN and LinkedIn.                                         |
| 01:06:29   | Thanks for helping us keep the lights on.                        |
| 01:06:31   | And you know who else is helping us keep the lights on?                    |
| 01:06:32   | That's the Automators Max supporters.                            |
| 01:06:35   | You can learn about that over at relay.fm/automators.      |
| 01:06:38   | You can sign up there for the ad-free                            |
| 01:06:41   | extended version of the show.                                    |
| 01:06:42   | I will tell you that the Max supporters are a huge reason        |
| 01:06:46   | we're able to keep the lights on around here.                    |
| 01:06:47   | So please check it out if you're interested.                     |
| 01:06:50   | And for Automators Max,                                          |
| 01:06:51   | we're gonna be talking about [[Apple Intelligence]] first looks.     |
| 01:06:54   | Otherwise, we'll see you next time.                              |
| 01:06:57   | Goodbye folks.                                                   |

[^1]: [[Bunch]] does **not** actually have an integration with the [[Stream Deck]], but [the documentation does list several ways](https://bunchapp.co/docs/integration/stream-deck/) including a direct URL scheme call in which you can use to trigger a [[Bunch]] action  from a [[Stream Deck]] button.
[^2]: [[SoundSource]] is actually created by [[Rogue Amoeba]], who have another product called [[Audio Hijack]].
[^3]: This should actually have referenced the [[SoundSource]] app, not [[Audio Hijack]].