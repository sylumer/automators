---
status: "complete"
fc-date:
  year: 2018
  month: 10
  day: 12
fc-category: "podcast"
podcast: "Automators"
published: 2018-10-12
duration: 3144
formattedduration: "00:52:24"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/8"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators008.mp3"
episode: 8
title: "8: File Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Putting files in the right places is a pain in the neck. It's tedious and way too easy to make a mistake. Our intrepid automators are here to save the day on the Mac and iOS.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 008 Discussion](https://talk.automators.fm/t/automators-8-file-automation/2625)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile Software]] - Multiply your team’s productivity.

# Show Notes
What do you do with all of the files on your devices? David and Rose try to solve the problem of document filing. Since it's something you can easily automate, Rose and David share their tips and tricks. Keeping them all on the desktop would be madness (or marital strife if you're David). 

File location and file saving is busywork and inaccurate. It's dumb work and none of us want to do it, says David. You could spend your time organising your documents but wouldn't you rather spend your precious time doing something else? Yeah! So let automation do the work for you. It's easy. David teaches one of his favourite moves (pun intended): Command + C and then Option + Command + V. 

Rose reminds us to take a look at what we've got and to ask ourselves where we're going with this. We need a good foundation so everything doesn't fall down around us and save us from angst down the line. 

Rose and David agree that nested folders and a good naming system are key.

When automating files on the Mac, Smart Folders, Hazel, and [[Keyboard Maestro]] will become your best friends. How? You gotta listen to find out. 
* * *
- [The Episode Blog Post](https://www.macsparky.com/blob/2018/10/automators-8-file-automation)
- [Home | Automators](https://automators.fm/)
- [Automators Talk](https://talk.automators.fm/)
- [Automators Screencast: Keyboard Maestro to Rename Files with Patterns - YouTube](https://www.youtube.com/watch?v=oAUBY5EEra8&feature=youtu.be)
- [Automators Screencast - File Automation with Siri Shortcuts and Hazel - YouTube](https://www.youtube.com/watch?v=hk4h4tXV7OY&feature=youtu.be) - David screencasts his Siri Shortcut/Hazel automation to save and file PDFs from iPhone and iPad.
- [Shortcut](https://www.icloud.com/shortcuts/2effdda89606456f92cb837909ce4e31) - David's File Automation Siri Shortcut
- [Best Note Taking App | Organise Your Notes with Evernote](https://evernote.com/)
- [DEVONthink - Smart document management for Mac - DEVONtechnologies](https://www.devontechnologies.com/products/devonthink/overview.html)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/) - The holy grail of file automation tools
- [Hazel Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/hazel) - David's Field Guide on the holy grail of file automation. There is a discount at the end of this episode.
- [Keyboard Maestro 8.2.4: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Scanner App for iPhone and iPad | Best Scanning App | Scanner Pro](https://readdle.com/scannerpro)
- [Scanbot | The PDF Scanner App for iPhone and Android](https://scanbot.io/en/index.html)
- [Airmail - Lightning Fast Mail Client for Mac and iPhone](http://airmailapp.com/)
- [Drafts. Where Text Starts. | Drafts](https://getdrafts.com/)
- [Editorial for iOS](http://omz-software.com/editorial/)
- [Home | Zapier](https://zapier.com/app/home)
- [Discover IFTTT and Applets - IFTTT](https://IFTTTtt.com/discover)
- [GoodReader](https://www.goodreader.com/)
- [MacStadium | Apple Mac Infrastructure & Private Clouds](https://www.macstadium.com/)
- [MacinCloud - Rent a Mac in the Cloud! - Mac in Cloud](https://www.macincloud.com/)
- [Mr. Belvedere Full Opening](https://www.youtube.com/watch?v=0IUSSrldd0U)
- [Hazel Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/hazel)

# Transcription

| Time Index | Transcription                                                                                                           |
|:---------- |:----------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hey, Rose, how are you doing?                                                                                           |
| 00:03      | I am very well. How are you?                                                                                            |
| 00:05      | Good. Today we have a problem to solve.                                                                                 |
| 00:08      | Like so often.                                                                                                          |
| 00:09      | Yes.                                                                                                                    |
| 00:10      | Document filing.                                                                                                        |
| 00:12      | Document filing.                                                                                                        |
| 00:13      | Yeah, that's a big one.                                                                                                 |
| 00:14      | Yeah, it's something that you can easily automate                                                                       |
| 00:17      | and we want to get into nitty gritty.                                                                                   |
| 00:20      | We're going to cover primarily the Mac and iOS,                                                                         |
| 00:22      | but we've all got a bunch of files on our devices                                                                       |
| 00:26      | and the files need to go somewhere.                                                                                     |
| 00:28      | You can't put them on the desktop.                                                                                      |
| 00:30      | I don't know if you notice in the Mac power users                                                                       |
| 00:31      | that Katie is very strict about that.                                                                                   |
| 00:35      | So I'm afraid now to put stuff on my desktop.                                                                           |
| 00:38      | Well, I have been experimenting with the stacks in Mojave                                                               |
| 00:41      | and I can report back that I do not like them.                                                                          |
| 00:44      | So I'm going back to Katie's method.                                                                                    |
| 00:45      | I'm afraid of not storing files on my desktop.                                                                          |
| 00:48      | Well, I don't either.                                                                                                   |
| 00:50      | I guess I sound like some flagrant violator                                                                             |
| 00:54      | when he was in the show,                                                                                                |
| 00:55      | but I mean, I use the desktop on a daily basis,                                                                         |
| 00:58      | but it's a workspace.                                                                                                   |
| 01:00      | And by the end of the day, it's empty.                                                                                  |
| 01:02      | But I think the problem stack solved,                                                                                   |
| 01:05      | which is the feature in Mac OS Mojave,                                                                                  |
| 01:08      | where it will take collections of documents                                                                             |
| 01:10      | in your desktop and automatically sort them                                                                             |
| 01:12      | into folders or stacks for you.                                                                                         |
| 01:15      | It's not a problem that people listening to this show                                                                   |
| 01:17      | probably have.                                                                                                          |
| 01:18      | It's more of a problem that people                                                                                      |
| 01:21      | who aren't necessarily power users                                                                                      |
| 01:23      | just collect a lot of stuff on their desktop                                                                            |
| 01:25      | and then they can't find it.                                                                                            |
| 01:26      | So I get what it solves.                                                                                                |
| 01:29      | It is weird from the nerd perspective                                                                                   |
| 01:31      | how we get upset about some of these things sometimes                                                                   |
| 01:34      | or we think it's ridiculous,                                                                                            |
| 01:35      | but there's like 90% of the users out there                                                                             |
| 01:39      | need the feature.                                                                                                       |
| 01:40      | But it's none of us, you know.                                                                                          |
| 01:42      | Well, I don't know.                                                                                                     |
| 01:43      | For some people who I know,                                                                                             |
| 01:44      | especially if they share a computer                                                                                     |
| 01:46      | and they have somebody who stores files on the desktop,                                                                 |
| 01:49      | the stacks might be a great solution for that,                                                                          |
| 01:51      | just to still let you see your pretty wallpaper,                                                                        |
| 01:53      | whatever it is, maybe friends or family,                                                                                |
| 01:56      | children, that place where you went on holiday last year,                                                               |
| 01:59      | you know, whatever it is that you've got set                                                                            |
| 02:01      | as your desktop wallpaper.                                                                                              |
| 02:02      | You know, it's a nice way to just clean everything up                                                                   |
| 02:04      | a little bit without getting everything off the desktop,                                                                |
| 02:07      | because I think I remember a bit at one point                                                                           |
| 02:09      | you said that you reorganised Daisy's desktop for her                                                                   |
| 02:12      | and she was not impressed with you.                                                                                     |
| 02:14      | Yeah, no, what I did was I put all of them in a folder.                                                                 |
| 02:17      | Oh, yes.                                                                                                                |
| 02:19      | And I put the folder on her desktop                                                                                     |
| 02:21      | that said Daisy's desktop.                                                                                              |
| 02:23      | And she woke me from sleep at like two in the morning                                                                   |
| 02:27      | to tell me, upset, what did you do to my computer?                                                                      |
| 02:32      | You know, she was used to it being in a place.                                                                          |
| 02:35      | But anyway, actually though,                                                                                            |
| 02:37      | so stacks is a form of automation.                                                                                      |
| 02:39      | It automatically collects your files on your desktop                                                                    |
| 02:43      | and it puts them into stacks for you.                                                                                   |
| 02:45      | It wasn't really what we came on the microphone                                                                         |
| 02:47      | to talk about today, but I guess that is a simple form.                                                                 |
| 02:50      | And honestly, once I install Mojave on my wife's computer,                                                              |
| 02:54      | because, you know, I know I'm covering old ground here                                                                  |
| 02:57      | because we discussed this on Mac Power Users,                                                                           |
| 02:59      | but my wife has so many icons on her desk                                                                               |
| 03:02      | that they overlap each other.                                                                                           |
| 03:03      | She has stacks of icons because they've...                                                                              |
| 03:07      | It's like when you go around the track                                                                                  |
| 03:10      | and then you start going to get...                                                                                      |
| 03:11      | It's like she's on a second lap around her desktop right now.                                                           |
| 03:14      | So she's been feeding her files.                                                                                        |
| 03:16      | They are actually secretly tribbles.                                                                                    |
| 03:18      | Yeah, exactly.                                                                                                          |
| 03:19      | So I think this would be really useful.                                                                                 |
| 03:22      | So once we install Mojave,                                                                                              |
| 03:23      | I'm going to show her how it works                                                                                      |
| 03:24      | and hopefully it will help her organise                                                                                 |
| 03:27      | and it'll be automatic, which is what we want.                                                                          |
| 03:29      | Well, the good news is if you turn the feature off,                                                                     |
| 03:32      | so for anybody who's listening,                                                                                         |
| 03:33      | who hasn't experimented with it yet,                                                                                    |
| 03:34      | you just right click on the desktop                                                                                     |
| 03:36      | and you click on use stacks and then it does this thing                                                                 |
| 03:39      | and it looks like all of your documents have disappeared,                                                               |
| 03:41      | but they haven't.                                                                                                       |
| 03:42      | And if you don't like it,                                                                                               |
| 03:44      | you can just right click again and untick use stacks                                                                    |
| 03:47      | and then everything will be back where it was before.                                                                   |
| 03:49      | So feel free to experiment with that if you haven't yet                                                                 |
| 03:53      | because it is a very simple built-in solution                                                                           |
| 03:55      | and especially if you're trying to educate people                                                                       |
| 03:59      | who are not into automation about the possibilities,                                                                    |
| 04:01      | it's a nice place to get started.                                                                                       |
| 04:03      | Yeah, but let's talk bigger about the problem                                                                           |
| 04:07      | of file location and file saving                                                                                        |
| 04:10      | because I mean, the first is it's busy work.                                                                            |
| 04:14      | Yeah, yeah.                                                                                                             |
| 04:14      | It's so easy to accidentally spend 45 minutes                                                                           |
| 04:18      | reorganising your downloads folder                                                                                      |
| 04:20      | and you don't want to spend 45 minutes                                                                                  |
| 04:23      | reorganising your download folder.                                                                                      |
| 04:24      | You probably have better things to do,                                                                                  |
| 04:26      | like you could go and watch an episode of Star Trek                                                                     |
| 04:28      | or go out for a walk, spend some time with your family,                                                                 |
| 04:31      | sleep, do anything, but organise your documents                                                                         |
| 04:35      | but a lot of people end up                                                                                              |
| 04:36      | or consistently reorganising their documents                                                                            |
| 04:38      | because something, they couldn't find it                                                                                |
| 04:40      | and then they found it and it's like,                                                                                   |
| 04:41      | okay, I need to reorganise everything                                                                                   |
| 04:43      | and then they still can't find anything.                                                                                |
| 04:45      | Yeah, and another good reason to automate it                                                                            |
| 04:49      | is that it's inaccurate.                                                                                                |
| 04:50      | I mean, dragging and dropping has a degree of risk to it                                                                |
| 04:54      | and you just never know.                                                                                                |
| 04:56      | I was working in the files app on my iPad the other day                                                                 |
| 05:00      | and I meant to scroll                                                                                                   |
| 05:02      | but I somehow, I think I left my finger                                                                                 |
| 05:05      | just an instant too long over a folder                                                                                  |
| 05:08      | on a long list of folders                                                                                               |
| 05:10      | and what I ended up doing is dragging                                                                                   |
| 05:12      | and dropping it into another folder, okay?                                                                              |
| 05:16      | And then I scrolled, because it happened so fast,                                                                       |
| 05:19      | it's like you saw it but the motors didn't stop, you know?                                                              |
| 05:22      | So I saw myself drop a folder into another folder.                                                                      |
| 05:25      | I don't know what the folder I got                                                                                      |
| 05:27      | or what the folder I dropped or where I dropped it                                                                      |
| 05:29      | and then I scrolled and so it took me-                                                                                  |
| 05:32      | And you have no chance of ever finding that file ever again.                                                            |
| 05:35      | No, I did, I found it, I found it, but I mean,                                                                          |
| 05:38      | but that's just the problem with this                                                                                   |
| 05:40      | and the same thing, like if you're in a business                                                                        |
| 05:44      | and you've got multiple people doing it,                                                                                |
| 05:46      | it exponentially grows, you know,                                                                                       |
| 05:48      | the possibility of error exponentially grows.                                                                           |
| 05:52      | And it's just something that humans                                                                                     |
| 05:55      | are not necessarily good at                                                                                             |
| 05:56      | and I know there's other ways to do it.                                                                                 |
| 05:58      | In fact, when I do manual copies and pastes on my Mac,                                                                  |
| 06:02      | the way I almost always do it is I hit Command C                                                                        |
| 06:05      | and then something I think a lot of people don't know                                                                   |
| 06:06      | is if you hold down the Option and Command key                                                                          |
| 06:09      | with the V key, it doesn't move instead of a paste.                                                                     |
| 06:13      | So like if you're on the files,                                                                                         |
| 06:16      | if you've got a bunch of files in the Finder,                                                                           |
| 06:19      | hit Command C, then go to wherever you want to put it                                                                   |
| 06:21      | and then hit Option, Command V and it paste,                                                                            |
| 06:23      | I'm sorry, it moves the files.                                                                                          |
| 06:25      | Okay, so this would, the Windows equivalent to this                                                                     |
| 06:28      | would be Control X and Control V                                                                                        |
| 06:30      | because it's like cutting and pasting only                                                                              |
| 06:32      | and in this area, you're copying it.                                                                                    |
| 06:34      | So if you decide actually that you just want a copy of that here,                                                       |
| 06:38      | you can do that. That is a really good tip                                                                              |
| 06:40      | that I did not know, so thank you for sharing that.                                                                     |
| 06:43      | No worries, the only, there's,                                                                                          |
| 06:44      | but there's always like a little caveat                                                                                 |
| 06:46      | and in this case, it is when you're moving between volumes,                                                             |
| 06:51      | you may get a, because when you move between volumes,                                                                   |
| 06:54      | the default behaviour is to move.                                                                                       |
| 06:56      | Yeah.                                                                                                                   |
| 06:57      | So sometimes that will, it'll copy, you know, like,                                                                     |
| 07:02      | okay, well, you want to do the opposite here.                                                                           |
| 07:04      | I wish it was consistent, but I understand why it's not.                                                                |
| 07:08      | Anyway, so the problem is that                                                                                          |
| 07:10      | we've got all these files we need to move.                                                                              |
| 07:12      | It's dumb work, none of us want to do it.                                                                               |
| 07:15      | We're not good at it and it is easy to automate this.                                                                   |
| 07:20      | So that's something we want to talk about today.                                                                        |
| 07:24      | Definitely, yeah, and it's one of those things,                                                                         |
| 07:26      | you might think, oh my gosh,                                                                                            |
| 07:27      | this is going to be complicated and scary                                                                               |
| 07:29      | and requires [[AppleScript]], spoiler,                                                                                  |
| 07:31      | no [[AppleScript]] is required, you can add it                                                                          |
| 07:34      | to make your automatic filing even more important.                                                                      |
| 07:37      | But to start with, you really need to sit back                                                                          |
| 07:41      | and take a look at it and see, what have I got                                                                          |
| 07:43      | and where am I going with this, don't you?                                                                              |
| 07:46      | Yeah, yeah, I mean, I think you need to think                                                                           |
| 07:48      | about what you have, you know, what is your current system?                                                             |
| 07:52      | Yeah.                                                                                                                   |
| 07:52      | You know, how are you filing things?                                                                                    |
| 07:53      | I mean, you can't have an effective automation system                                                                   |
| 07:56      | to file things unless you know where things belong.                                                                     |
| 07:59      | Yeah, and I mean, it might be, I mean,                                                                                  |
| 08:02      | at one point I was just storing everything                                                                              |
| 08:04      | in my documents folder and searching.                                                                                   |
| 08:06      | If that's the system you're using, that's okay,                                                                         |
| 08:08      | you just need to acknowledge what you're using.                                                                         |
| 08:10      | And if you currently don't have a system,                                                                               |
| 08:13      | then I would suggest like sitting down,                                                                                 |
| 08:14      | maybe even like pen and paper away from your Mac                                                                        |
| 08:17      | and going like, I think ideally I would do this.                                                                        |
| 08:19      | I actually like to use my maps                                                                                          |
| 08:21      | for planning out document structures.                                                                                   |
| 08:23      | But yeah, you know, it's like a house.                                                                                  |
| 08:26      | If you don't have a good foundation,                                                                                    |
| 08:27      | then everything's just going to fall down around you                                                                    |
| 08:29      | at some point because you didn't think                                                                                  |
| 08:31      | what would happen in this case                                                                                          |
| 08:32      | because that case never even came up.                                                                                   |
| 08:34      | So if you take a few minutes to think about it in advance,                                                              |
| 08:37      | you can save yourself a lot of angst down the line.                                                                     |
| 08:40      | Traditionally, the way people do this                                                                                   |
| 08:41      | is a nested folder structure.                                                                                           |
| 08:43      | And there's a lot, there's a lot of reasons                                                                             |
| 08:45      | they want to continue to do that                                                                                        |
| 08:47      | because a nested folder structure                                                                                       |
| 08:49      | is something that is transportable.                                                                                     |
| 08:52      | Like if you decide to go from [[iCloud]] to [[Dropbox]]                                                                 |
| 08:54      | or the opposite or what, you know,                                                                                      |
| 08:57      | a [[Microsoft OneDrive]] or whatever you want to do,                                                                    |
| 08:59      | get a nested group of folders, you can move them where                                                                  |
| 09:02      | if they want and your structure, your data structure,                                                                   |
| 09:04      | follows you.                                                                                                            |
| 09:06      | The downside is that if you go too deep with it,                                                                        |
| 09:09      | it becomes a lot of work.                                                                                               |
| 09:10      | I mean, the automation works best, in my opinion,                                                                       |
| 09:14      | in a relatively shallow group of nested folders.                                                                        |
| 09:18      | You don't want to go super deep.                                                                                        |
| 09:19      | You shouldn't have folders with one or two files in them                                                                |
| 09:22      | for automation because you're adding,                                                                                   |
| 09:24      | the automation work becomes too extensive.                                                                              |
| 09:26      | Yeah.                                                                                                                   |
| 09:27      | And I think.                                                                                                            |
| 09:28      | Yeah.                                                                                                                   |
| 09:28      | I mean, the thing is, if you find yourself going,                                                                       |
| 09:30      | oh, I need a folder for this because it's just one or two files,                                                        |
| 09:32      | then it might be worth taking a step back and going,                                                                    |
| 09:35      | how about file names?                                                                                                   |
| 09:37      | Because file names are part of automatic filing.                                                                        |
| 09:39      | And it would probably be better                                                                                         |
| 09:42      | to create a consistent naming structure                                                                                 |
| 09:44      | than to have a folder with just two files in it.                                                                        |
| 09:47      | Yeah.                                                                                                                   |
| 09:47      | And now that Mac OS and iOS both support tags                                                                           |
| 09:51      | and the tags go across both systems,                                                                                    |
| 09:53      | tags are a great way to use a shallow,                                                                                  |
| 09:56      | a relatively shallow folder system.                                                                                     |
| 09:59      | But with the addition of tags,                                                                                          |
| 10:01      | it allows you to dig in very deeply if you want.                                                                        |
| 10:05      | So you want to give some thought                                                                                        |
| 10:07      | to what your system's going to be.                                                                                      |
| 10:09      | I think both Rose and I, though, would recommend.                                                                       |
| 10:11      | Don't go super deep, but do use some kind of nested folders.                                                            |
| 10:13      | Yeah.                                                                                                                   |
| 10:14      | I mean, the other alternative is use an app like [[Evernote]]                                                           |
| 10:18      | or one of these apps that does all this for you.                                                                        |
| 10:22      | Yeah.                                                                                                                   |
| 10:23      | I store a lot in [[DEVONthink]],                                                                                        |
| 10:25      | which can automatically file things for you.                                                                            |
| 10:27      | It doesn't have to, but it's a very similar system                                                                      |
| 10:30      | where you've got databases and groups,                                                                                  |
| 10:31      | which essentially reflect a folder structure.                                                                           |
| 10:34      | Yeah.                                                                                                                   |
| 10:35      | [[DEVONthink]] is probably the most popular solution.                                                                   |
| 10:38      | And for the longest time, they were just on the Mac,                                                                    |
| 10:40      | but now they're very successfully moved to iOS as well.                                                                 |
| 10:44      | So that's a good solution that does some of the automation for you.                                                     |
| 10:49      | And then the other thing you want to think about                                                                        |
| 10:50      | as you go into this is file naming.                                                                                     |
| 10:53      | You know, how are you going to name files?                                                                              |
| 10:54      | Yeah.                                                                                                                   |
| 10:55      | Yeah.                                                                                                                   |
| 10:55      | Like I try, I have a system for all of my receipts                                                                      |
| 10:59      | that I need to store because that's the other thing.                                                                    |
| 11:01      | Think about what you actually need to store                                                                             |
| 11:03      | versus what can you just get rid of?                                                                                    |
| 11:05      | Because I pay, I think it's 79 pence a month                                                                            |
| 11:08      | for [[iCloud]] Drive Storage.                                                                                           |
| 11:10      | That's UK pennies.                                                                                                      |
| 11:12      | But I don't need that receipt every single month.                                                                       |
| 11:15      | I have a personal rule that if it's worth less                                                                          |
| 11:18      | than approximately $10,                                                                                                 |
| 11:19      | I will not keep the receipt full stop.                                                                                  |
| 11:22      | It is just going to be too much effort                                                                                  |
| 11:23      | to keep the receipt and track it to, you know,                                                                          |
| 11:27      | versus the payoff from having it.                                                                                       |
| 11:30      | So I try and name all of my receipts consistently.                                                                      |
| 11:34      | I put the date in it.                                                                                                   |
| 11:36      | I go year, month, day, so that then if I'm sorting it,                                                                  |
| 11:38      | then 2016 comes before 2018 and January comes before December.                                                          |
| 11:44      | And I do store name this numerically.                                                                                   |
| 11:47      | And, you know, then I put the name of the place                                                                         |
| 11:50      | and then I try and have the name of the product                                                                         |
| 11:51      | if it's like, you know, MacBook Pro.                                                                                    |
| 11:53      | So it might be 2018, 06, something or other Apple MacBook Pro.                                                          |
| 12:00      | Because I bought my MacBook Pro in June of this year                                                                    |
| 12:02      | and six weeks later they announced new ones.                                                                            |
| 12:06      | As always.                                                                                                              |
| 12:06      | That's okay.                                                                                                            |
| 12:08      | If it makes you feel any better,                                                                                        |
| 12:09      | they'll probably announce new ones again.                                                                               |
| 12:10      | So it'll be fine.                                                                                                       |
| 12:11      | Yeah, it's fine.                                                                                                        |
| 12:12      | Like it's always going to happen.                                                                                       |
| 12:13      | There's never a perfect time.                                                                                           |
| 12:15      | So yeah, file naming is definitely very important.                                                                      |
| 12:20      | The other thing is when you build a system,                                                                             |
| 12:22      | you want to have a place to do your automation from.                                                                    |
| 12:26      | A lot of the tools we're going to talk about                                                                            |
| 12:28      | are tools that look at files automatically for you                                                                      |
| 12:30      | and you need to tell them where to look.                                                                                |
| 12:32      | So like I have a full, for whatever reason years ago,                                                                   |
| 12:37      | I made this folder and I called it action                                                                               |
| 12:39      | where I was going to take action from it.                                                                               |
| 12:41      | In hindsight, I should have named it the inbox                                                                          |
| 12:43      | if I was starting over again.                                                                                           |
| 12:45      | Because that's truly what it is.                                                                                        |
| 12:47      | It's an inbox.                                                                                                          |
| 12:47      | It's where all this stuff goes in.                                                                                      |
| 12:49      | And then my digital automation stuff looks at that folder                                                               |
| 12:55      | and does a whole bunch of things to the files that are in it.                                                           |
| 12:57      | So give yourself some time.                                                                                             |
| 12:59      | Think of a structure, a naming convention,                                                                              |
| 13:03      | and the Roses has a good one.                                                                                           |
| 13:05      | That's the one I recommended in [the paperless book](https://learn.macsparky.com/p/paperless)                           |
| 13:07      | so many years ago.                                                                                                      |
| 13:08      | It's just a year month date with a description.                                                                         |
| 13:11      | And then some of these systems that I use                                                                               |
| 13:14      | also require me to add things to the name                                                                               |
| 13:16      | because I use the name as a basis for automation.                                                                       |
| 13:19      | And we'll talk about that later.                                                                                        |
| 13:21      | So I think we've danced around this thing enough.                                                                       |
| 13:24      | Let's talk about automating files on the Mac.                                                                           |
| 13:27      | Yeah.                                                                                                                   |
| 13:28      | I mean, there's a lot of ways to start with.                                                                            |
| 13:30      | So let's start with the simplest one, right?                                                                            |
| 13:32      | Which is use the built-in thing.                                                                                        |
| 13:34      | So Finder has smart folders and you've got tags                                                                         |
| 13:38      | and you have a keyboard shortcut to apply tags                                                                          |
| 13:40      | which I think I'm going to need to experiment with.                                                                     |
| 13:42      | So can you tell us about what you do with Finder                                                                        |
| 13:46      | and smart folders?                                                                                                      |
| 13:48      | Yeah, I just use a keyboard shortcut,                                                                                   |
| 13:50      | control option command semicolon.                                                                                       |
| 13:53      | And I just attach that in the settings,                                                                                 |
| 13:56      | keyboard settings and this tags with an ellipses after it.                                                              |
| 13:59      | And as we record this, it has broken on me                                                                              |
| 14:02      | because I put Mojave in this computer.                                                                                  |
| 14:04      | So I will try and figure that out.                                                                                      |
| 14:06      | So I outlined this show before we installed Mojave.                                                                     |
| 14:11      | But the, and I can't stop to fix it now,                                                                                |
| 14:14      | but there's something wrong with it now.                                                                                |
| 14:15      | But for the longest time it worked.                                                                                     |
| 14:17      | So it was great before.                                                                                                 |
| 14:19      | So option command, was it control option command semicolon?                                                             |
| 14:23      | And then it just opens the selected file to the tags                                                                    |
| 14:28      | and you can just type in tags.                                                                                          |
| 14:29      | And if I can sort that out before we publish,                                                                           |
| 14:32      | I'll put a note in the show notes                                                                                       |
| 14:34      | or maybe I'll even do a post-mx work on it.                                                                             |
| 14:36      | But it's a very simple way.                                                                                             |
| 14:38      | Another nice thing though with the updates                                                                              |
| 14:42      | to the Finder with that Mac OS Mojave,                                                                                  |
| 14:44      | [[Apple]] take it away and [[Apple]] give it.                                                                                   |
| 14:47      | They've made applying tags very easy from the [[Finder]] now.                                                           |
| 14:52      | Most of the Finder views, like even that new fit,                                                                       |
| 14:55      | the one that replaced the album view, what's it called again,                                                           |
| 14:59      | you know, the one that gives you metadata.                                                                              |
| 15:01      | Oh, right. They've got the inspector built in.                                                                          |
| 15:03      | Yeah, it's got, exactly.                                                                                                |
| 15:05      | And the top thing is tags.                                                                                              |
| 15:06      | So you can just go in and type tags.                                                                                    |
| 15:08      | And it's a very useful method.                                                                                          |
| 15:12      | And so tags aren't necessarily an automation,                                                                           |
| 15:16      | but they're an avenue to automation.                                                                                    |
| 15:18      | I guess they are automation in the sense                                                                                |
| 15:19      | that they let you find things easier.                                                                                   |
| 15:21      | Like let's say you're going to take our advice                                                                          |
| 15:23      | and put up a relatively shallow,                                                                                        |
| 15:27      | relatively shallow nested group of nested folders.                                                                      |
| 15:30      | And then inside those, you routinely apply tags appropriately,                                                          |
| 15:34      | you know, letters, bills, whatever.                                                                                     |
| 15:37      | And then you just go up into [[Finder]]                                                                                 |
| 15:39      | and you use those tags to dig it out                                                                                    |
| 15:41      | and you're going to find it very quickly.                                                                               |
| 15:44      | Yeah, definitely.                                                                                                       |
| 15:45      | It works very well.                                                                                                     |
| 15:46      | And I have to say,                                                                                                      |
| 15:48      | I've been experimenting more with tags recently.                                                                        |
| 15:51      | It's been working out really well for me                                                                                |
| 15:53      | just because then I tend to have a very flat document structure.                                                        |
| 15:57      | I'm actually still, in some cases,                                                                                      |
| 15:58      | living with what was originally set up by iOS,                                                                          |
| 16:01      | where you store things in pages,                                                                                        |
| 16:05      | documents go into the pages folder and so on.                                                                           |
| 16:07      | And so I've been using tags                                                                                             |
| 16:08      | to sort of group items together for that.                                                                               |
| 16:11      | And that's been working really well                                                                                     |
| 16:12      | to separate the very least work from personal.                                                                          |
| 16:15      | Okay, so let's take a minute                                                                                            |
| 16:16      | to talk about the application of tags.                                                                                  |
| 16:19      | The application of tags on the Mac is easy, relatively easy.                                                            |
| 16:24      | You just start typing and it auto fills in the tag name for you.                                                        |
| 16:28      | And like I said, you can get to it in a [[Finder]],                                                                     |
| 16:31      | you can get it to the inspector on individual Files.                                                                    |
| 16:34      | By the time the show publishes,                                                                                         |
| 16:35      | hopefully I'll have a post sorting out                                                                                  |
| 16:36      | a way to do it via keyboard shortcut.                                                                                   |
| 16:39      | On the Mac, you can also do it.                                                                                         |
| 16:41      | We're going to talk in a minute about [[Hazel]],                                                                        |
| 16:42      | but one of the great things you can do with [[Hazel]]                                                                   |
| 16:44      | is not only read tags, but you can apply tags.                                                                          |
| 16:47      | So I use [[Hazel]] all the time to auto tag files.                                                                      |
| 16:51      | So I don't even have to...                                                                                              |
| 16:52      | Because the question about tags is always,                                                                              |
| 16:54      | is the payoff worth the work?                                                                                           |
| 16:57      | Is the work of creating tags                                                                                            |
| 16:58      | going to pay off later by you searching them?                                                                           |
| 17:01      | If you never search for them or never use them,                                                                         |
| 17:03      | then it's not worth doing tags.                                                                                         |
| 17:04      | But if you do get benefit on the backside                                                                               |
| 17:08      | that's less, that's more valuable                                                                                       |
| 17:10      | than the time you put into creating them,                                                                               |
| 17:12      | then that's worth doing it.                                                                                             |
| 17:13      | If you can automate creation of tags with [[Hazel]],                                                                    |
| 17:16      | then it's an easy equation, because it's zero.                                                                          |
| 17:21      | You have zero investment in creating tags.                                                                              |
| 17:23      | So it's all gravy at that point.                                                                                        |
| 17:25      | But anyway, on the Mac, there's a lot of ways to create tags.                                                           |
| 17:29      | On iOS, I think it's still kind of a dumpster fire.                                                                     |
| 17:32      | Yeah, it is.                                                                                                            |
| 17:33      | It's one of those things.                                                                                               |
| 17:34      | I look at tags on iOS, and they're pretty.                                                                              |
| 17:36      | They are very pretty, and that's pretty much it.                                                                        |
| 17:40      | You can look at them,                                                                                                   |
| 17:41      | but you can't really do a lot with them.                                                                                |
| 17:43      | It's very, very unintuitive, I would say.                                                                               |
| 17:48      | And I'm sure that's something that the files team on iOS                                                                |
| 17:50      | are working on.                                                                                                         |
| 17:51      | I'm sure that they're probably unhappy with it, too.                                                                    |
| 17:54      | Oh, it's because there's a guy on the files team                                                                        |
| 17:57      | that sees me every year at [[WWDC]], and he always corners me.                                                          |
| 18:00      | Because I'm critical of the files,                                                                                      |
| 18:03      | because I want the iPad to be a device that can                                                                         |
| 18:06      | truly replace a laptop.                                                                                                 |
| 18:08      | And that's up until iOS 11.                                                                                             |
| 18:11      | It was really terrible.                                                                                                 |
| 18:13      | And so I had written stuff, and then every year,                                                                        |
| 18:16      | he comes to me and says, hey, a thing you wrote about,                                                                  |
| 18:19      | we got it fixed.                                                                                                        |
| 18:19      | What do you think?                                                                                                      |
| 18:20      | And every year, I can't think of anything                                                                               |
| 18:24      | that crushes soul, because I say that's great, but, you know.                                                           |
| 18:28      | And this year, he cornered me.                                                                                          |
| 18:29      | On the other hand, he must be so happy to have somebody                                                                 |
| 18:32      | who's willing to give him feedback,                                                                                     |
| 18:34      | because developers do struggle to get feedback.                                                                         |
| 18:37      | This year, he cornered me.                                                                                              |
| 18:38      | And he's like, look, you wanted multiple files in Finder.                                                               |
| 18:41      | You wanted the ability to move things.                                                                                  |
| 18:43      | You wanted to be able to grab things.                                                                                   |
| 18:45      | He says, we gave you the whole thing.                                                                                   |
| 18:46      | You're good, right?                                                                                                     |
| 18:47      | And I'm like, yeah, but what about tags?                                                                                |
| 18:49      | Because anybody listening to the show,                                                                                  |
| 18:51      | just open up an iOS device.                                                                                             |
| 18:53      | iPad, iPhone, whatever, and try and apply a tag.                                                                        |
| 18:56      | It's just the way they do it.                                                                                           |
| 18:57      | They give you this long list.                                                                                           |
| 18:59      | You got to scroll through.                                                                                              |
| 19:00      | It's crazy.                                                                                                             |
| 19:01      | Yeah.                                                                                                                   |
| 19:02      | And there's no way to search it.                                                                                        |
| 19:03      | You can't just start typing and have it auto fill.                                                                      |
| 19:05      | Yeah.                                                                                                                   |
| 19:06      | I mean, it's a very basic thing.                                                                                        |
| 19:07      | But I said, you know, it feels like the people at [[Apple]]                                                                 |
| 19:12      | think that everyone has 10 tags.                                                                                        |
| 19:13      | Yeah.                                                                                                                   |
| 19:14      | And if you're really going to use tags,                                                                                 |
| 19:16      | like I would like to use a separate tag                                                                                 |
| 19:18      | for every client matter.                                                                                                |
| 19:19      | I would like to, you know, I would like to have like 300 tags.                                                          |
| 19:22      | Mm-hmm.                                                                                                                 |
| 19:23      | And using the power of [[Hazel]], I could do that very easily.                                                          |
| 19:26      | Yeah.                                                                                                                   |
| 19:27      | But adding tags, you know, like this action file                                                                        |
| 19:30      | I was talking about earlier.                                                                                            |
| 19:32      | I have created [[Hazel]] rules that look at tags.                                                                       |
| 19:35      | So I could theoretically sit on my iPad,                                                                                |
| 19:37      | apply a few tags to some documents that got scanned in,                                                                 |
| 19:40      | and have my Mac process them for me.                                                                                    |
| 19:42      | Yeah.                                                                                                                   |
| 19:43      | Yeah.                                                                                                                   |
| 19:44      | I have a similar folder in [[Dropbox]]                                                                                      |
| 19:46      | that is also watched by [[Hazel]] that does stuff based on                                                              |
| 19:50      | either the folder I put it in or the name I give it,                                                                    |
| 19:52      | just because tags weren't a thing when I set up this folder.                                                            |
| 19:57      | And I think I think I'm getting ahead of myself.                                                                        |
| 19:59      | We'll talk about iOS later.                                                                                             |
| 20:00      | So let's let's get back to, you know,                                                                                   |
| 20:03      | the power move with file management.                                                                                    |
| 20:05      | And that's getting yourself a copy of the [[Hazel]].                                                                    |
| 20:07      | Oh, yeah.                                                                                                               |
| 20:08      | [[Hazel]] is amazing.                                                                                                   |
| 20:10      | It's possibly the most useful application                                                                               |
| 20:13      | I've ever purchased ever.                                                                                               |
| 20:15      | Yeah.                                                                                                                   |
| 20:16      | I don't know.                                                                                                           |
| 20:16      | That one in [[Keyboard Maestro]] on the Mac                                                                             |
| 20:18      | are the two amazing apps.                                                                                               |
| 20:20      | Yeah.                                                                                                                   |
| 20:21      | So [[Hazel]], what [[Hazel]] is, it's people used to write                                                              |
| 20:24      | [[AppleScript\|AppleScripts]] to move files around.                                                                                  |
| 20:26      | And now we don't because of [[Hazel]].                                                                                  |
| 20:28      | And it's an app that like so many of these automation tools,                                                            |
| 20:31      | it looks at triggers and actions.                                                                                       |
| 20:33      | So it says, you know, point me at a folder                                                                              |
| 20:36      | and then give me the rules.                                                                                             |
| 20:38      | And so one of the rules like in my action folder                                                                        |
| 20:41      | is if there is a document that has the tag insurance,                                                                   |
| 20:44      | or yeah, insurance and invoice,                                                                                         |
| 20:49      | then [[Hazel]] says, oh, that's an insurance invoice.                                                                   |
| 20:53      | I'm going to rename it with the date that it was scanned on.                                                            |
| 20:57      | I'm going to change the name to, you know,                                                                              |
| 21:00      | date code slash insurance invoice and.pdf.                                                                              |
| 21:04      | And then I'm going to move it to David's                                                                                |
| 21:07      | insurance invoice folder.                                                                                               |
| 21:09      | And that's that's what it does.                                                                                         |
| 21:11      | It just looks for those two tags.                                                                                       |
| 21:12      | So I could, all I do when the scans come in,                                                                            |
| 21:18      | when I do the scans is I just flip through the action folder.                                                           |
| 21:22      | I add those tags, which takes almost no time at all.                                                                    |
| 21:25      | And then [[Hazel]] in the background moves the file.                                                                    |
| 21:28      | That's one of the most basic uses of [[Hazel]].                                                                         |
| 21:31      | I have an even more basic one for you.                                                                                  |
| 21:33      | All right.                                                                                                              |
| 21:34      | I have [[Hazel]] watch my downloads folder.                                                                             |
| 21:36      | And you don't need to create a rule for this.                                                                           |
| 21:38      | So you just add the downloads folder to [[Hazel]].                                                                      |
| 21:42      | And then you tick the box that says throw away duplicate files.                                                         |
| 21:46      | So if I ever accidentally download something twice,                                                                     |
| 21:48      | [[Hazel]] goes, get rid of the second copy.                                                                             |
| 21:50      | Just it helps keep my download folder a little bit clearer.                                                             |
| 21:54      | And oh my gosh, that alone was worth the price to Andrea.                                                               |
| 21:57      | I swear I halved my downloads folder the very first time I ran that                                                     |
| 22:00      | because I had no idea what I was doing back then.                                                                       |
| 22:03      | But it's very easy to use or it can be very easy to use.                                                                |
| 22:07      | Of course, you can get extremely complex with it if you want,                                                           |
| 22:10      | but you don't have to.                                                                                                  |
| 22:11      | And another one people commonly do with the downloads folders,                                                          |
| 22:14      | they say if something has been in here two weeks, just trash it.                                                        |
| 22:19      | If you haven't bothered with it in two weeks, just get rid of it.                                                       |
| 22:22      | So I mean, [[Hazel]] has an seemingly infinite number of triggers                                                       |
| 22:27      | and a seemingly infinite number of rules.                                                                               |
| 22:29      | I mean, one of the things it can do is apply tags.                                                                      |
| 22:31      | Like I talked earlier about insurance.                                                                                  |
| 22:35      | The reason I hesitated because it's my property insurance,                                                              |
| 22:38      | it's my life insurance, they send me an electronic PDF every month in the email.                                        |
| 22:44      | And it's a very well-generated PDF, searchable.                                                                         |
| 22:49      | The text is all perfect, whereas with the property insurance,                                                           |
| 22:52      | I have to scan it in and the scans are not as reliable.                                                                 |
| 22:54      | So I know that it's going to have certain words in it                                                                   |
| 22:58      | in my account number every month.                                                                                       |
| 22:59      | So with [[Hazel]], I have it look for any files that contain                                                            |
| 23:04      | the word life insurance in my account number.                                                                           |
| 23:06      | And because it's a PDF that I've received from the vendor,                                                              |
| 23:11      | it always finds those files.                                                                                            |
| 23:13      | It's 100% accurate.                                                                                                     |
| 23:15      | And in that case, I don't even, what I do is I apply a tag called life insurance                                        |
| 23:20      | and I apply a tag called invoice.                                                                                       |
| 23:23      | And then I rename it and move it.                                                                                       |
| 23:25      | But I actually don't manually type in the tag                                                                           |
| 23:28      | because [[Hazel]] can do that automatically                                                                             |
| 23:30      | because it sees the data in the file.                                                                                   |
| 23:32      | So on those, there's zero input by me.                                                                                  |
| 23:35      | And the other thing I do with that one that's pretty cool                                                               |
| 23:38      | is I run an [[AppleScript]] that creates                                                                                |
| 23:41      | an OmniFocus task for me to pay it.                                                                                     |
| 23:45      | So I don't forget to pay it.                                                                                            |
| 23:47      | Because one of the problems with automation is                                                                          |
| 23:49      | if you process a bill where it gets immediately filed,                                                                  |
| 23:52      | where's the part where you pay the bill?                                                                                |
| 23:55      | Yeah, exactly.                                                                                                          |
| 23:56      | But that's the great thing,                                                                                             |
| 23:58      | using something like [[Hazel]] or we'll come to it later,                                                               |
| 24:00      | [[Keyboard Maestro]], what you can do is you can say,                                                                       |
| 24:03      | hey, don't just move this file or delete this file, copy this file.                                                     |
| 24:06      | You can also then do another action, like run an [[AppleScript]]                                                        |
| 24:10      | or add it to iTunes, run an automated workflow.                                                                         |
| 24:14      | So even if you don't want to touch [[AppleScript\|AppleScripts]]                                                                     |
| 24:17      | either yet or at all ever,                                                                                              |
| 24:19      | then you can actually have automated to do something,                                                                   |
| 24:23      | which is quite nice as well.                                                                                            |
| 24:24      | There's a lot of possibilities to do here.                                                                              |
| 24:26      | And of course, you can also do these things,                                                                            |
| 24:28      | whether or not you move the file,                                                                                       |
| 24:29      | you can just say, hey, when you find a file,                                                                            |
| 24:31      | like this, do this for me,                                                                                              |
| 24:33      | which gives you other possibilities as well.                                                                            |
| 24:35      | Yeah.                                                                                                                   |
| 24:36      | If only somebody would make a field guide about [[Hazel]].                                                              |
| 24:40      | Hey, it didn't this guy called MacSparky do that?                                                                       |
| 24:43      | Wait, that's you.                                                                                                       |
| 24:45      | Yeah, I did.                                                                                                            |
| 24:46      | It's a long one and a lot of people like it.                                                                            |
| 24:48      | So if you'd like to get really good at [[Hazel]],                                                                       |
| 24:50      | this is the shameless self-promotion part of it.                                                                        |
| 24:53      | By the way, I'm going to raise the price of that                                                                        |
| 24:56      | to match the other big field guides because this is a big one.                                                          |
| 24:59      | So I'll do that like within the month.                                                                                  |
| 25:01      | So do it and get it now if you want it.                                                                                 |
| 25:04      | Yeah, I have to say.                                                                                                    |
| 25:05      | That didn't sound nice.                                                                                                 |
| 25:06      | That sounded like pressure sales,                                                                                       |
| 25:07      | but it just happens to be.                                                                                              |
| 25:09      | If you want to get a discount, buy it before the end of the month.                                                      |
| 25:12      | That's a nice way of saying it.                                                                                         |
| 25:13      | But I have to say, it was really great watching you                                                                     |
| 25:15      | because it's one of those things.                                                                                       |
| 25:16      | I had [[Hazel]] and I was using it,                                                                                     |
| 25:18      | but I definitely wasn't using it to his full potential.                                                                 |
| 25:20      | I probably still am not,                                                                                                |
| 25:22      | but I am doing a lot more with it since I followed your field                                                           |
| 25:25      | or since I watched your field guide                                                                                     |
| 25:27      | just because of the amount of ideas you gave me.                                                                        |
| 25:29      | I set up an almost entirely automated accounting system                                                                 |
| 25:34      | from my mom because of your field guide.                                                                                |
| 25:37      | So she downloads all of her receipts as PDF forms                                                                       |
| 25:40      | into a specific folder.                                                                                                 |
| 25:41      | I have one rule for every different kind of receipts,                                                                   |
| 25:43      | [[Amazon]] receipts and different online stores,                                                                            |
| 25:46      | train station or train company receipts, all of that.                                                                   |
| 25:50      | And automatically when she runs a script once,                                                                          |
| 25:53      | just dumps everything into a seat.                                                                                      |
| 25:55      | She dumps everything into a CSV file                                                                                    |
| 25:57      | and opens it in numbers for her.                                                                                        |
| 25:59      | Or it might even just put it into numbers.                                                                              |
| 26:01      | I don't remember exactly how I did do it,                                                                               |
| 26:03      | but I saved her hours every month because of your field guide.                                                          |
| 26:06      | So I was very impressed with it.                                                                                        |
| 26:08      | Thank you for the excellent content.                                                                                    |
| 26:10      | And [[Hazel]] goes a lot deeper.                                                                                        |
| 26:12      | Like I got really crazy in the field guide at one point.                                                                |
| 26:14      | I think I used [[Launch Center Pro ]]to create a script                                                                 |
| 26:17      | that when you arrive home,                                                                                              |
| 26:19      | creates a text file that [[Hazel]] sees                                                                                 |
| 26:21      | and then starts playing music.                                                                                          |
| 26:22      | So you can go really deep down the stack,                                                                               |
| 26:25      | but the real bread and butter of [[Hazel]] in my mind                                                                   |
| 26:28      | is getting yourself going with document automation.                                                                     |
| 26:31      | And there is no tool better.                                                                                            |
| 26:33      | And the thing, you know, when I hear about folks                                                                        |
| 26:36      | who give up the Mac entirely and go all iOS,                                                                            |
| 26:39      | I can appreciate that.                                                                                                  |
| 26:40      | I think that's kind of cool that somebody wants to try and do that.                                                     |
| 26:43      | But I'll tell you, one of the reasons I could never do it                                                               |
| 26:46      | is because of [[Hazel]],                                                                                                |
| 26:47      | because it does so much of my automation for me at the back end.                                                        |
| 26:50      | Even though a lot of times I'm doing the work on iOS,                                                                   |
| 26:53      | the [[Hazel]] running on my home Mac is filing for me.                                                                  |
| 26:59      | Yeah. I have to say, I was only for a brief period of time,                                                             |
| 27:03      | because unfortunately it worked out very quickly again                                                                  |
| 27:06      | that I need a Mac, you know, podcasting.                                                                                |
| 27:09      | One of those things, you need a Mac for that.                                                                           |
| 27:11      | But even then, when I went all in on iOS,                                                                               |
| 27:14      | I had my Mac mini sitting there in the background                                                                       |
| 27:16      | basically to run [[Hazel]] and several other automations                                                                |
| 27:20      | with like [[Keyboard Maestro]], things like that.                                                                       |
| 27:22      | But, you know, it's amazing what just having a Mac there,                                                               |
| 27:25      | even if it's in the background doing the stuff for you                                                                  |
| 27:28      | can really help with.                                                                                                   |
| 27:29      | All right. So let's talk about [[Keyboard Maestro]].                                                                    |
| 27:32      | So I think that's the next level up.                                                                                    |
| 27:35      | Or [[Hazel]] manages on triggers and actions.                                                                           |
| 27:40      | I guess when I said they're unlimited, they are limited.                                                                |
| 27:43      | Whereas [[Keyboard Maestro]] is much closer to unlimited than [[Hazel]].                                                |
| 27:49      | And so people are using [[Keyboard Maestro]]                                                                            |
| 27:52      | to automate filing and naming and doing all sorts of things as well.                                                    |
| 27:56      | Before we got on mic, Rose and I were just talking between us                                                           |
| 27:59      | about some stuff we're doing with [[Keyboard Maestro]] lately.                                                          |
| 28:01      | Why don't you go first?                                                                                                 |
| 28:03      | Yes. Well, I should just mention, you know,                                                                             |
| 28:05      | theoretically you could replace [[Hazel]] with [[Keyboard Maestro]]                                                     |
| 28:08      | because it can detect when a file lines a specific folder.                                                              |
| 28:11      | Personally, I like to use both just because it keeps things separate                                                    |
| 28:15      | and it's nice to have [[Hazel]] doing a bunch of things.                                                                |
| 28:19      | And then when I go and poke around with my [[Keyboard Maestro]] macros,                                                 |
| 28:22      | and in my case, frequently breaks them                                                                                  |
| 28:24      | because I'm not quite sure what I'm doing at the time,                                                                  |
| 28:26      | then it doesn't matter.                                                                                                 |
| 28:29      | But I have a great one.                                                                                                 |
| 28:30      | So work, just to give you a little bit of background,                                                                   |
| 28:33      | we have project slides.                                                                                                 |
| 28:35      | And these project slides have to be updated every two weeks.                                                            |
| 28:37      | They have to be named a specific format,                                                                                |
| 28:39      | stored at a specific place,                                                                                             |
| 28:40      | and it has to be a new document based on the old document.                                                              |
| 28:44      | So I have a [[Keyboard Maestro]] macro,                                                                                 |
| 28:47      | which I can run theoretically on any document.                                                                          |
| 28:51      | And I do only run it on [[Microsoft PowerPoint\|PowerPoint]] slides.                                                    |
| 28:54      | And what it does is if it's already named in the format that it needs,                                                  |
| 28:57      | then it parses out.                                                                                                     |
| 28:58      | So the project number, the project name,                                                                                |
| 29:01      | and the meeting number for me,                                                                                          |
| 29:04      | it increments the meeting number,                                                                                       |
| 29:05      | and it just displays that in an input box.                                                                              |
| 29:09      | So I can just check it.                                                                                                 |
| 29:10      | If I was on holiday, for example, missed a meeting,                                                                     |
| 29:13      | then I could just manually add an extra number.                                                                         |
| 29:16      | If the file, however, isn't named in the correct manner,                                                                |
| 29:20      | then it prompts me to add the project number                                                                            |
| 29:22      | and the meeting number and everything                                                                                   |
| 29:24      | so that it can then rename it.                                                                                          |
| 29:26      | And then it can.                                                                                                        |
| 29:27      | I don't need it to,                                                                                                     |
| 29:28      | because we store all of our files on our central server,                                                                |
| 29:31      | but it could also move it for me.                                                                                       |
| 29:33      | And this is so useful.                                                                                                  |
| 29:36      | I don't need to think anymore about the file formatting                                                                 |
| 29:38      | and that I have to replace spaces with underscores                                                                      |
| 29:40      | for some unknown reason.                                                                                                |
| 29:43      | I don't do any of that.                                                                                                 |
| 29:45      | It does it all for me.                                                                                                  |
| 29:46      | And it's just there living in my menu,                                                                                  |
| 29:48      | but waiting for me to click on it, which is so useful.                                                                  |
| 29:52      | Yeah.                                                                                                                   |
| 29:52      | And I was talking about how I have to often create                                                                      |
| 29:56      | like multiple documents as part of something                                                                            |
| 29:58      | to do for legally, for the legal practice.                                                                              |
| 30:00      | And so I've got all these template documents.                                                                           |
| 30:03      | And rather than go through and open each one                                                                            |
| 30:06      | and do a million search and replaces and everything,                                                                    |
| 30:08      | I use a keyboard and my script that creates them,                                                                       |
| 30:11      | creates copies of the files,                                                                                            |
| 30:13      | runs the search and replace commands,                                                                                   |
| 30:15      | saves them to the destination of my choice,                                                                             |
| 30:19      | and basically does something that I would normally pay                                                                  |
| 30:22      | an assistant to do.                                                                                                     |
| 30:24      | But it happens in,                                                                                                      |
| 30:27      | you know, it's all done with like eight documents                                                                       |
| 30:30      | in under five minutes.                                                                                                  |
| 30:31      | And I just sit there and watch my computer jump around.                                                                 |
| 30:35      | As you were talking about it,                                                                                           |
| 30:36      | I was thinking, I think [[Keyboard Maestro]] that the different,                                                        |
| 30:39      | the tipping point for me between [[Keyboard Maestro]] and [[Hazel]] is,                                                 |
| 30:43      | [[Hazel]] is much more efficient at document filing.                                                                    |
| 30:45      | I think if there was one app that was the star of this episode,                                                         |
| 30:49      | it would be [[Hazel]] because it's so good at that,                                                                     |
| 30:51      | you know, the renaming, the searching, the contents.                                                                    |
| 30:54      | It's just, it's built around this whole principle                                                                       |
| 30:57      | of automatically filing documents and files.                                                                            |
| 31:01      | Whereas [[Keyboard Maestro]] is a bit of a heavier tool.                                                                |
| 31:04      | It's harder to wield, it's harder to set up,                                                                            |
| 31:08      | and it gives you a little more power,                                                                                   |
| 31:10      | particularly when passing data, like Rose's example,                                                                    |
| 31:13      | and both of mine involve passing data into files.                                                                       |
| 31:16      | And keyboard mice, I'm sorry, [[Hazel]] can do some of that,                                                            |
| 31:19      | but [[Keyboard Maestro]],                                                                                               |
| 31:21      | that's what [[Keyboard Maestro]] really excels at.                                                                          |
| 31:23      | So with those tools,                                                                                                    |
| 31:25      | I think if you just wanted to file your documents,                                                                      |
| 31:27      | you could probably get away without [[Keyboard Maestro]],                                                                   |
| 31:30      | but [[Hazel]] is such a game changer.                                                                                   |
| 31:33      | I just cannot understate it.                                                                                            |
| 31:35      | Yeah, yeah, it is really wonderful.                                                                                     |
| 31:37      | And also, if you can't find something that you wanted to do in [[Hazel]],                                               |
| 31:44      | then you could actually write an [[AppleScript]]                                                                        |
| 31:47      | and have [[Hazel]] execute it for you.                                                                                  |
| 31:48      | Of course, you could do that with, you know, [[Automator]],                                                             |
| 31:52      | or [[Keyboard Maestro]] as well,                                                                                            |
| 31:53      | but [[Hazel]] has got loads of examples out there.                                                                      |
| 31:56      | There are entire examples for setting up,                                                                               |
| 31:59      | like I think a [[Plex]] server with [[Hazel]],                                                                          |
| 32:01      | and having it do everything and rename everything automatically,                                                        |
| 32:04      | and I'm like, this is black magic, and it's amazing,                                                                    |
| 32:08      | because there are so many great examples out there,                                                                     |
| 32:10      | whereas [[Keyboard Maestro]] is a fabulous tool                                                                         |
| 32:12      | with lots of great examples,                                                                                            |
| 32:13      | but less so for document automation in my experience.                                                                   |
| 32:16      | It's...                                                                                                                 |
| 32:17      | Yeah, also on keyboard, I'm sorry, on [[Hazel]],                                                                        |
| 32:19      | one of my favourite things is running an [[AppleScript]]                                                                |
| 32:21      | and use the say command,                                                                                                |
| 32:23      | and you can have it verbally tell you,                                                                                  |
| 32:26      | you know, whatever you just filed.                                                                                      |
| 32:28      | Hello, David, I just filed your file for you.                                                                           |
| 32:30      | Are you happy?                                                                                                          |
| 32:31      | Yes.                                                                                                                    |
| 32:32      | Or you got 2001, Dave, what are you doing, Dave?                                                                        |
| 32:38      | Yes, so you can make it as creepy, as helpful,                                                                          |
| 32:41      | or as annoying as you like, if you want to,                                                                             |
| 32:43      | or you can just have it silently show you a push notification                                                           |
| 32:46      | that is also an option with [[Hazel]].                                                                                  |
| 32:48      | Yeah.                                                                                                                   |
| 32:49      | Yes.                                                                                                                    |
| 32:50      | Hey, before we talk about iOS,                                                                                          |
| 32:52      | let's take a minute to talk about our sponsor,                                                                          |
| 32:54      | and this episode is sponsored by our friends                                                                            |
| 32:56      | over at Smile Software,                                                                                                 |
| 32:58      | particularly their application called TextExpander,                                                                     |
| 33:02      | which, by the way, is another excellent tool                                                                            |
| 33:04      | to automate document filing.                                                                                            |
| 33:06      | We were talking in the episode about using [[Hazel]],                                                                   |
| 33:11      | and I made mention at one point that I use naming                                                                       |
| 33:14      | to file documents, like when I have a invoice                                                                           |
| 33:19      | for a MacSparky expense,                                                                                                |
| 33:20      | and I want to make sure I get the receipt saved.                                                                        |
| 33:22      | I just go into the name field of the file,                                                                              |
| 33:26      | you know, you select the file, hit return,                                                                              |
| 33:28      | then I type .mse                                                                                                        |
| 33:30      | and that is the expansion for MacSparky expense,                                                                        |
| 33:33      | and it's TextExpander doing this for me.                                                                                |
| 33:35      | It gets today's current date, it puts a dash in,                                                                        |
| 33:38      | it puts another dash, then at the end,                                                                                  |
| 33:40      | it adds the word MacSparky and expense,                                                                                 |
| 33:42      | and then it moves the cursor,                                                                                           |
| 33:44      | because TextExpander is crazy powerful,                                                                                 |
| 33:46      | it moves the cursor to the middle of that sentence,                                                                     |
| 33:48      | and lets me just type in the name                                                                                       |
| 33:50      | of whatever the expense category is,                                                                                    |
| 33:52      | like so if I buy a floppy disk,                                                                                         |
| 33:55      | because I need a lot of those, right,                                                                                   |
| 33:56      | and it'll say date slash floppy expense,                                                                                |
| 34:00      | floppy disk slash MacSparky expense,                                                                                    |
| 34:03      | and then I hit return, and it's done,                                                                                   |
| 34:04      | and then [[Hazel]] sees a file with the name                                                                            |
| 34:07      | MacSparky expense in it,                                                                                                |
| 34:08      | and it does all the tagging, and sorting,                                                                               |
| 34:10      | and filing, and everything for me,                                                                                      |
| 34:12      | even since a copy to my accountant.                                                                                     |
| 34:13      | So that's all possible because of the power of TextExpander.                                                            |
| 34:18      | So if you want to do automation,                                                                                        |
| 34:20      | another excellent tool for you is TextExpander.                                                                         |
| 34:23      | It works both on the Mac and iOS,                                                                                       |
| 34:25      | so you can use it on your iPad and iPhone.                                                                              |
| 34:27      | They even have a Windows version now,                                                                                   |
| 34:29      | so if you have to go over to work,                                                                                      |
| 34:31      | and you want to automate your filing on Windows,                                                                        |
| 34:33      | you can use it for that as well.                                                                                        |
| 34:34      | It's a great company run by great people,                                                                               |
| 34:36      | and a very powerful tool.                                                                                               |
| 34:38      | So go over to TextExpander.com/podcasts,                                                                                |
| 34:43      | and make sure you tell them you heard about it on Automators,                                                           |
| 34:46      | and put TextExpander to work for you,                                                                                   |
| 34:49      | helping you get yourself fully automated.                                                                               |
| 34:52      | Thank you, Smile Software and TextExpander                                                                              |
| 34:55      | for supporting the Automators.                                                                                          |
| 34:57      | Well, let's take a look at iOS then,                                                                                    |
| 35:00      | because as you mentioned earlier before iOS 11,                                                                         |
| 35:03      | file management on iOS was not a thing at all.                                                                          |
| 35:07      | So it's good that we're on iOS 12 now,                                                                                  |
| 35:10      | and we've seen some improvements there.                                                                                 |
| 35:12      | Yeah, well, you know what?                                                                                              |
| 35:14      | It has been a thing for me ever since [[Workflow]] showed up.                                                           |
| 35:17      | Like, talking about, during that ad spot,                                                                               |
| 35:20      | I was mentioning about, you know, saving of receipts for expenses.                                                      |
| 35:25      | Before Workflow, that was just not possible on iOS.                                                                     |
| 35:31      | I mean, if I got a receipt attached to an email,                                                                        |
| 35:34      | I could save it somewhere,                                                                                              |
| 35:36      | but renaming it required me often to enter a completely different app.                                                  |
| 35:40      | Like, I'd have to go into the [[Dropbox]] app.                                                                          |
| 35:43      | This is before the Files app even existed.                                                                              |
| 35:45      | So something that I can do with typing four characters                                                                  |
| 35:49      | using [[TextExpander]] on my Mac would take me like 30 seconds                                                          |
| 35:53      | on an iOS device.                                                                                                       |
| 35:55      | That's not automation, you know?                                                                                        |
| 35:57      | Yeah, if it takes you longer to do it on anything                                                                       |
| 36:01      | that you want to do it on, then that's just not, no,                                                                    |
| 36:05      | that's not gonna work.                                                                                                  |
| 36:06      | And it's like, it took me longer to do it even manually on the Mac                                                      |
| 36:10      | if I were to type the name in rather than use [[TextExpander]].                                                         |
| 36:13      | It was completely bananas, and I just gave up on it,                                                                    |
| 36:16      | but then [[Workflow]] showed up.                                                                                        |
| 36:18      | I created a [[Workflow]] script,                                                                                        |
| 36:20      | and I'll go ahead and put this one,                                                                                     |
| 36:22      | I'll screencast this one into the show,                                                                                 |
| 36:25      | where I get, I do some workflow stuff.                                                                                  |
| 36:29      | Now it's [[Shortcuts\|Siri Shortcuts]].                                                                                 |
| 36:30      | So what you do is you grab the current date,                                                                            |
| 36:33      | you save that as a variable,                                                                                            |
| 36:35      | you ask the user for a description,                                                                                     |
| 36:38      | and you, so you put that in as a variable,                                                                              |
| 36:42      | and then in my case, I add the word MacSparky                                                                           |
| 36:44      | expense to the end,                                                                                                     |
| 36:45      | because that allows [[Hazel]] to do its magic.                                                                          |
| 36:47      | And then you take the file,                                                                                             |
| 36:49      | and I use this as an extension.                                                                                         |
| 36:51      | So anytime I have a PDF file,                                                                                           |
| 36:53      | I have this available to me under the sharing button as an extension.                                                   |
| 36:56      | So I trigger that, it collects that information from me,                                                                |
| 36:59      | then it applies a new name,                                                                                             |
| 37:01      | it renames the file based on the information I've given it,                                                             |
| 37:04      | and then it saves it to a file on [[iCloud]],                                                                           |
| 37:08      | but you could do it to [[Dropbox]] too,                                                                                 |
| 37:10      | but I'm using, I happen to be using [[iCloud]].                                                                         |
| 37:12      | And this is a system that is super fast,                                                                                |
| 37:16      | and still not really possible to do manually,                                                                           |
| 37:19      | because if you hit this share to [[iCloud]] button,                                                                     |
| 37:22      | it doesn't give you an option to rename the file.                                                                       |
| 37:24      | So you would stick the,                                                                                                 |
| 37:26      | whatever the files named as it comes to you would go into [[iCloud]],                                                   |
| 37:30      | but that doesn't give [[Hazel]] enough to work with.                                                                    |
| 37:32      | So it's a really nice system.                                                                                           |
| 37:34      | And then once I created that,                                                                                           |
| 37:36      | and of course I iterated it,                                                                                            |
| 37:38      | I made a version for the law practice expenses,                                                                         |
| 37:41      | then I made a version that just allows me to name a file to [[iCloud]],                                                 |
| 37:45      | because you can't do that otherwise.                                                                                    |
| 37:47      | So, you know, you can use automation to do this stuff.                                                                  |
| 37:51      | Now, what I really love, Rose,                                                                                          |
| 37:53      | I would really love the ability to run an automation extension                                                          |
| 37:57      | that applies tags to these files,                                                                                       |
| 37:59      | and then just let Mac do all the work for me.                                                                           |
| 38:02      | I believe that we need to go to                                                                                         |
| 38:04      | apple.com/feedback and request that,                                                                                    |
| 38:06      | but I have already done so,                                                                                             |
| 38:08      | so everybody else please request it too, so they know.                                                                  |
| 38:10      | Yeah, if you want that.                                                                                                 |
| 38:12      | Yeah.                                                                                                                   |
| 38:14      | Yeah, we need a way to add tags,                                                                                        |
| 38:17      | because, I mean, the other thing is, as you said,                                                                       |
| 38:19      | if you share it to the files that you don't get a chance to rename it,                                                  |
| 38:22      | but if I try and share something to the [[Dropbox]] app,                                                                    |
| 38:24      | guess what [[Dropbox]] asked me to do?                                                                                  |
| 38:26      | It gives me the option to rename the file.                                                                              |
| 38:28      | Exactly.                                                                                                                |
| 38:29      | And it's extremely useful, but yeah, I love to use [[Shortcuts]] too.                                                   |
| 38:32      | I have several shortcuts which save things to specific folders.                                                         |
| 38:35      | So if I get, like, for example, an ebook,                                                                               |
| 38:37      | I have very similar to you,                                                                                             |
| 38:39      | I have a folder which is watched by [[Hazel]],                                                                          |
| 38:41      | which does many, many things.                                                                                           |
| 38:43      | But I have several subfolders which are very cleverly named.                                                            |
| 38:46      | I'm extremely clever with naming.                                                                                       |
| 38:48      | I've got Add to [[Calibre]], which is my ebook management software,                                                     |
| 38:51      | Add to [[iTunes]], Add to [[Zotero]].                                                                                   |
| 38:53      | And so I can save things with, like, one or two tabs on iOS                                                             |
| 38:57      | to these folders.                                                                                                       |
| 38:59      | And then [[Hazel]] will just go in and be like,                                                                         |
| 39:01      | oh, right, this PDF needs to go to [[Zotero]],                                                                          |
| 39:03      | because I'm going to use that to reference something in my essay,                                                       |
| 39:06      | for example.                                                                                                            |
| 39:07      | Yeah.                                                                                                                   |
| 39:08      | And, you know, then it just gets added to [[Zotero]].                                                                   |
| 39:12      | I think that one's actually triggering [[Keyboard Maestro]],                                                            |
| 39:15      | funnily enough.                                                                                                         |
| 39:16      | But, you know, it then puts things in the right place                                                                   |
| 39:18      | for things to get automatically managed.                                                                                |
| 39:20      | And that's something we didn't mention.                                                                                 |
| 39:22      | Of course, there are some applications that will just                                                                   |
| 39:24      | watch a folder and slurp things up.                                                                                     |
| 39:26      | So there's a folder for [[iTunes]] that can do that.                                                                    |
| 39:30      | There's, if you've heard of [[Calibre]],                                                                                |
| 39:32      | the ebook management software,                                                                                          |
| 39:33      | it can watch a specific folder, things like that.                                                                       |
| 39:36      | Or you can have [[Hazel]] tell an application                                                                           |
| 39:39      | to do certain things with these,                                                                                        |
| 39:41      | which is really nice.                                                                                                   |
| 39:42      | And it's easy to trigger that on iOS,                                                                                   |
| 39:44      | though in some cases,                                                                                                   |
| 39:45      | actually doing the automation is a little trickier.                                                                     |
| 39:48      | Yeah.                                                                                                                   |
| 39:49      | And one of the things you can do with [[Hazel]]                                                                         |
| 39:50      | is you can just have any file in this folder                                                                            |
| 39:53      | do this thing too.                                                                                                      |
| 39:54      | Yeah.                                                                                                                   |
| 39:55      | Like the one where all the tax-related stuff,                                                                           |
| 39:58      | I don't understand that stuff.                                                                                          |
| 39:59      | I have an accountant.                                                                                                   |
| 40:01      | I don't get it.                                                                                                         |
| 40:02      | So anything that I put in that tax folder                                                                               |
| 40:05      | gets copied to a shared [[Dropbox]] with her.                                                                           |
| 40:09      | And she gets to see it all and do whatever                                                                              |
| 40:11      | she needs to do with it.                                                                                                |
| 40:12      | And so you can make this as broad or as narrow as you like.                                                             |
| 40:16      | It is interesting, however, as we talk about iOS,                                                                       |
| 40:19      | that we still can't get off the subject of [[Hazel]]                                                                    |
| 40:21      | because it is a backbone for both of us                                                                                 |
| 40:24      | in doing this.                                                                                                          |
| 40:26      | I mean, because you could do a lot of stuff on iOS,                                                                     |
| 40:28      | but all I'm talking about on iOS really                                                                                 |
| 40:30      | is using automation to get things in a place                                                                            |
| 40:33      | where [[Hazel]] can do the real work.                                                                                   |
| 40:35      | Yeah.                                                                                                                   |
| 40:36      | I mean, it depends.                                                                                                     |
| 40:39      | Especially if you're storing all of your documents in [[Dropbox]],                                                      |
| 40:41      | it's much easier with something like shortcuts                                                                          |
| 40:43      | to then specify that you want to save it to, I don't know,                                                              |
| 40:47      | [[Dropbox]] shared folders, automators, recordings.                                                                     |
| 40:51      | That's one of my folders that I'm thinking of.                                                                          |
| 40:54      | And I actually, as part of my project template                                                                          |
| 40:58      | to set up an automators podcast project,                                                                                |
| 41:01      | I actually create the folder in [[Dropbox]] for us.                                                                     |
| 41:04      | I stick a little note in there so that we know                                                                          |
| 41:06      | when that episode is supposed to be going live,                                                                         |
| 41:08      | which we can then save one of our costs                                                                                 |
| 41:11      | and we could save the notes into there,                                                                                 |
| 41:13      | which it's really easy to be able to do that.                                                                           |
| 41:17      | It's a little trickier with [[iCloud]],                                                                                 |
| 41:19      | just because [[Workflow]], as it was,                                                                                   |
| 41:22      | [[Shortcuts]], as it now is, is like every other application                                                            |
| 41:25      | limited to its own folder,                                                                                              |
| 41:27      | which is why [[Pages]] originally could only save                                                                       |
| 41:29      | into the [[Pages]] folder.                                                                                              |
| 41:31      | Of course, now you can save things into other folders,                                                                  |
| 41:33      | but even in [[Shortcuts]], you then have to manually                                                                    |
| 41:36      | navigate through the folder tree,                                                                                       |
| 41:38      | which, depending on how deep your folder structure is,                                                                  |
| 41:40      | is probably going to be less automated                                                                                  |
| 41:43      | than you were hoping for at any rate.                                                                                   |
| 41:45      | Yeah, but you know, it was worse,                                                                                       |
| 41:47      | I don't know if you remember,                                                                                           |
| 41:49      | for about a year and a half,                                                                                            |
| 41:51      | when you opened the view on iOS into [[iCloud]],                                                                        |
| 41:54      | it showed you every folder expanded                                                                                     |
| 41:57      | to as far down the stack as it went.                                                                                    |
| 42:00      | No, no, no, no, no, no, no, that was so horrible.                                                                       |
| 42:03      | There's a reason why I store a lot of things in [[Dropbox]].                                                            |
| 42:06      | I couldn't believe they even shipped that,                                                                              |
| 42:08      | but anyway, it's like, can you imagine,                                                                                 |
| 42:10      | it's like, let's just show them all the folders.                                                                        |
| 42:13      | Let's put them all out there.                                                                                           |
| 42:15      | Want to put a search bar?                                                                                               |
| 42:17      | Nah, I'm hungry, I gotta go to lunch.                                                                                   |
| 42:19      | Forget the search bar.                                                                                                  |
| 42:21      | Yes.                                                                                                                    |
| 42:23      | Well, we do have a search bar now,                                                                                      |
| 42:25      | but we also have another iOS app,                                                                                       |
| 42:27      | which definitely deserves a shout-out,                                                                                  |
| 42:29      | and I'm pretty certain that there's another one                                                                         |
| 42:31      | that works very similarly.                                                                                              |
| 42:32      | I use [[Scanner Pro]] from [[Readdle]],                                                                                 |
| 42:35      | which you can, funnily enough, scan documents with it                                                                   |
| 42:38      | with your iPhone or iPad camera.                                                                                        |
| 42:40      | iPad cameras are definitely good enough to do this with,                                                                |
| 42:42      | and I have to say it's basically the only time                                                                          |
| 42:44      | I use my iPad camera,                                                                                                   |
| 42:46      | but you can actually, as part of [[Scanner Pro]],                                                                       |
| 42:49      | build mini workflows, they are called workflows,                                                                        |
| 42:52      | where you can, for example, rename the file, upload it,                                                                 |
| 42:55      | so [[Dropbox]], [[WebDAV]], [[Google Drive]] or something,                                                              |
| 42:58      | and you can email it to people.                                                                                         |
| 43:00      | So this is really useful.                                                                                               |
| 43:02      | If I have to go to the doctor if I'm sick,                                                                              |
| 43:04      | then I have to email a scan of the paperwork to work.                                                                   |
| 43:07      | Well, I don't know about you, but when I'm feeling sick,                                                                |
| 43:09      | the last thing I want to do is get out the printer,                                                                     |
| 43:12      | put the piece of paper on the glass,                                                                                    |
| 43:15      | find the right app on my iPad or my iPhone,                                                                             |
| 43:18      | or open up my Mac and scan it in,                                                                                       |
| 43:21      | rename it and email it to the secretary at work.                                                                        |
| 43:23      | That's the last thing I feel like doing if I'm sick.                                                                    |
| 43:26      | So I have a scan bot workflow,                                                                                          |
| 43:28      | which thankfully I very rarely need to use,                                                                             |
| 43:30      | where I can just scan it, press a button,                                                                               |
| 43:32      | and it sends it off to the secretarial position at work,                                                                |
| 43:36      | and they then do the monitoring,                                                                                        |
| 43:38      | and they figure out what they need to do with it,                                                                       |
| 43:40      | but it's one button, and that makes me feel so much better,                                                             |
| 43:43      | knowing that if I'm sick, that's there.                                                                                 |
| 43:46      | It's one button, take photo, one button, and I'm done.                                                                  |
| 43:49      | Yeah, [[Scanner Pro]] is the best app for that, I think.                                                                |
| 43:53      | The other one that's in the ballpark is [[Scan Bot]],                                                                   |
| 43:56      | and Scan Bot does a thing where it gives you                                                                            |
| 43:59      | a series of tokens for the names.                                                                                       |
| 44:02      | So a token will be your location,                                                                                       |
| 44:04      | because it knows where you're at.                                                                                       |
| 44:06      | Another token will be the date and the format that Rose and I love.                                                     |
| 44:09      | Another token will be tokens you've created.                                                                            |
| 44:11      | I jump between [[Scanner Pro]] and [[Scan Bot]].                                                                        |
| 44:14      | Right now I'm using [[Scanner Pro]],                                                                                    |
| 44:16      | because I feel like it's more automation-friendly than [[Scan Bot]],                                                    |
| 44:19      | but I like the design of [[Scan Bot]] better                                                                            |
| 44:22      | if that makes sense.                                                                                                    |
| 44:23      | So I'm using [[Scanner Pro]] because the automation is better,                                                          |
| 44:26      | but one of the things I did with Scan Bot                                                                               |
| 44:28      | is I made tokens for the word MacSparky expense                                                                         |
| 44:31      | going back to this running theme about filing these expenses.                                                           |
| 44:35      | So I would tap that token solely for the sake of my Mac back at home,                                                   |
| 44:39      | seeing that in the name and doing the [[Hazel]] magic.                                                                  |
| 44:42      | So those are both very good applications for this.                                                                      |
| 44:46      | It is interesting how on iOS occasion                                                                                   |
| 44:48      | you will find a little bucket of automation somewhere.                                                                  |
| 44:51      | Like [[Scanner Pro]] is a good example.                                                                                 |
| 44:53      | [[Airmail]] is another one.                                                                                             |
| 44:55      | It's an app that I can't make my mind up about,                                                                         |
| 44:57      | but it is the most automation-friendly email application I've ever seen.                                                |
| 45:01      | And it's just the developers who are wise to this can cater to us nerds.                                                |
| 45:09      | Definitely.                                                                                                             |
| 45:10      | I mean, it's amazing what you can do.                                                                                   |
| 45:12      | For example, I'm just looking at [[Scanner Pro]]                                                                        |
| 45:14      | because you're mentioning the variables or the tokens in [[Scan Bot]].                                                  |
| 45:17      | And they have tokens as well for parts of the date,                                                                     |
| 45:21      | so year, month, day, which is our preferred format and all of that.                                                     |
| 45:24      | It's really nice to be able to use that                                                                                 |
| 45:27      | just because it does make life much easier.                                                                             |
| 45:29      | And I'm very happy that all of these developers out there                                                               |
| 45:32      | are making an effort.                                                                                                   |
| 45:34      | Another one that we should give a shout out to, of course, is [[Drafts]]                                                |
| 45:37      | because they recently built in the entire [[Dropbox]] API.                                                                  |
| 45:41      | So you can literally save a file anywhere in any format you like.                                                       |
| 45:44      | I added a button the other day where if I'm writing a blog post,                                                        |
| 45:48      | I can save it as a markdown and as [[HTML]] into a specific [[Dropbox]] folder.                                         |
| 45:53      | And that [[Dropbox]] folder is then synced with [[Editorial]]                                                           |
| 45:55      | so I can then, if I want to, preview it with inline images                                                              |
| 45:59      | because that's the only thing that I'm still working on previewing inline images                                        |
| 46:02      | which are not yet uploaded to a server.                                                                                 |
| 46:05      | That's something I'm struggling with.                                                                                   |
| 46:07      | But that, you know, being able to do that, that's very useful.                                                          |
| 46:11      | Yeah, the [[Drafts]] always, when you talk automation,                                                                  |
| 46:14      | iOS [[Drafts]] always comes up.                                                                                         |
| 46:17      | Yeah.                                                                                                                   |
| 46:19      | Agile tortures, they are apparently one of us.                                                                          |
| 46:22      | They're one of our people and they're very happy to add more automation.                                                |
| 46:24      | They're definitely one of us. They're definitely.                                                                       |
| 46:27      | Yes, considering the fact that they created the [[URL Schemes]],                                                            |
| 46:30      | it's one of us.                                                                                                         |
| 46:33      | So I guess to put a report card on it, I'd say                                                                          |
| 46:36      | automation on the Mac gets an A plus. It's very easy.                                                                   |
| 46:40      | If you spend the money on [[Hazel]] to fully automate the process,                                                      |
| 46:45      | I think that I'm going to give iOS something like a B minus.                                                            |
| 46:49      | You know, it's made steps, but it's not nearly as powerful                                                              |
| 46:53      | as the Mac is for that right now, do you think?                                                                         |
| 46:56      | No. No, it's not there yet.                                                                                             |
| 46:58      | And I mean, we haven't even touched on the web-based possibilities                                                      |
| 47:01      | for automatically filing things based on stuff happening.                                                               |
| 47:04      | You know, there's a lot of options out there.                                                                           |
| 47:06      | But again, I think this is an area where the Mac,                                                                       |
| 47:10      | especially if you have something like a Mac mini server                                                                 |
| 47:12      | sitting around really wins.                                                                                             |
| 47:14      | So it's one of those things.                                                                                            |
| 47:16      | I won't be running away from the Mac just yet, just because of [[Hazel]].                                               |
| 47:19      | Well, let's talk about web automation for a second,                                                                     |
| 47:22      | because to me, like I have now officially signed up                                                                     |
| 47:26      | for a Zapier account.                                                                                                   |
| 47:28      | I've been putting it into place with some of the different web                                                          |
| 47:32      | services I use, but for access to my file system,                                                                       |
| 47:36      | I don't really see any web automation that's going to help me                                                           |
| 47:40      | much with that.                                                                                                         |
| 47:42      | I mean, it depends on what you want.                                                                                    |
| 47:44      | So for example, I haven't if this and that automation,                                                                  |
| 47:47      | which downloads any attachments sent to my Gmail account                                                                |
| 47:50      | to a specific folder in [[Dropbox]],                                                                                    |
| 47:52      | which then means, I mean, this was originally set up                                                                    |
| 47:55      | way back in the day when I was regularly traveling                                                                      |
| 47:58      | and I could not guarantee I would have an Internet connection.                                                          |
| 48:01      | So I would synchronise that file with,                                                                                  |
| 48:03      | I think it was [[GoodReader]], so that I would have it                                                                  |
| 48:05      | offline on my iPad.                                                                                                     |
| 48:07      | And then that meant that anytime I needed to reference                                                                  |
| 48:10      | any of the attachments that I've received,                                                                              |
| 48:12      | I knew I would have a local copy of it,                                                                                 |
| 48:14      | just because you couldn't guarantee back then                                                                           |
| 48:16      | that I would always have Internet.                                                                                      |
| 48:18      | So that, you know, I've left that one there                                                                             |
| 48:20      | because actually [[Hazel]] still watches that folder                                                                    |
| 48:22      | and it still does things.                                                                                               |
| 48:24      | It's probably doing less nowadays than it used to,                                                                      |
| 48:27      | but it is still running rules for me.                                                                                   |
| 48:29      | I had a similar rule based out of [[SaneBox]]                                                                           |
| 48:31      | that would download attachments to a [[Dropbox]] folder,                                                                |
| 48:34      | but then I realised I didn't want that.                                                                                 |
| 48:36      | I didn't want anybody that sent me an attachment                                                                        |
| 48:38      | to become some part of my [[Dropbox]] corpus,                                                                           |
| 48:41      | so I eventually turned it off.                                                                                          |
| 48:43      | Well, one of the things that I've done is,                                                                              |
| 48:45      | [[Hazel]] will delete any attachment that's in there                                                                    |
| 48:47      | for more than, I want to say, 28 days,                                                                                  |
| 48:49      | because I've only got things about four weeks in advance.                                                               |
| 48:52      | And I mean, you could specify it so that you could say,                                                                 |
| 48:54      | like, only attachments from these people                                                                                |
| 48:56      | get downloaded or something that I'm very sure of, but yeah.                                                            |
| 49:01      | Well, either way, file automation is a thing.                                                                           |
| 49:04      | If you're not doing it, this is one that is, you should do, you know?                                                   |
| 49:08      | Definitely, yeah.                                                                                                       |
| 49:09      | We released a show on Friday for a reason.                                                                              |
| 49:11      | Spend some time this weekend and automate your file management.                                                         |
| 49:14      | Yes, at the very least, do you duplicate your files?                                                                    |
| 49:17      | You will thank us for it later.                                                                                         |
| 49:19      | Damn.                                                                                                                   |
| 49:21      | Another very common [[Hazel]] rule is just to say, sort the files.                                                      |
| 49:25      | Oh, yeah.                                                                                                               |
| 49:26      | Put the movies together, put the pictures together,                                                                     |
| 49:28      | put the documents together.                                                                                             |
| 49:29      | But spend some time on that.                                                                                            |
| 49:31      | Head over to the [talk.automators.fm](https://talk.automators.fm) forum so you can weigh in.                            |
| 49:36      | I'm sure there's some other ideas for file automation                                                                   |
| 49:39      | that we haven't covered yet.                                                                                            |
| 49:40      | I'd love to see what they are and hear how other people are doing it.                                                   |
| 49:43      | Yes, especially if you have a windows-based                                                                             |
| 49:45      | automation for file management, I need something.                                                                       |
| 49:47      | So please hook us up.                                                                                                   |
| 49:48      | Let us know what it is.                                                                                                 |
| 49:50      | The most common question I got after publishing the [Paperless Field Guide](https://learn.macsparky.com/p/paperless)    |
| 49:52      | was where is [[Hazel]] for PC?                                                                                          |
| 49:57      | And the answer, I have a TextExpander snippet for that.                                                                 |
| 50:01      | The answer is really there isn't one.                                                                                   |
| 50:03      | Somebody tried to just completely rip it off at one point                                                               |
| 50:06      | and they made an app called [[Belvedere]],                                                                              |
| 50:08      | which was another television, you know, a butler.                                                                       |
| 50:11      | Yeah.                                                                                                                   |
| 50:12      | And it was, you know, it's just the problem is the way                                                                  |
| 50:16      | Apple events work and [[AppleScript]] work                                                                              |
| 50:19      | and the automation friendly stuff built into the Mac OS                                                                 |
| 50:22      | just doesn't really exist in Windows.                                                                                   |
| 50:24      | So I don't think a developer even with the right intentions                                                             |
| 50:27      | could match it.                                                                                                         |
| 50:29      | But if somebody has, please do let us know                                                                              |
| 50:32      | because we and everything else, everybody else listening                                                                |
| 50:36      | definitely would like to know about it.                                                                                 |
| 50:38      | Yeah.                                                                                                                   |
| 50:39      | That's for sure.                                                                                                        |
| 50:40      | Yeah.                                                                                                                   |
| 50:41      | I'm surprised somebody hasn't tried to figure that out, but yeah.                                                       |
| 50:44      | Maybe they're all secretly running a Mac in the background.                                                             |
| 50:46      | Yeah, exactly.                                                                                                          |
| 50:48      | All right.                                                                                                              |
| 50:49      | That would be one reason for me.                                                                                        |
| 50:51      | I mean, someone said, you know, you have to use a PC starting tomorrow.                                                 |
| 50:56      | One of the first things that would come to my mind is                                                                   |
| 50:58      | what am I going to do without [[Hazel]]?                                                                                |
| 51:00      | Yeah.                                                                                                                   |
| 51:01      | Mac Stadium, $40 a month, I believe.                                                                                    |
| 51:04      | Yeah.                                                                                                                   |
| 51:05      | Something like that.                                                                                                    |
| 51:06      | You can rent Macs in the cloud and so I know some people                                                                |
| 51:08      | that do do that mostly just to have [[Hazel]].                                                                          |
| 51:10      | But that's such a stupid hypothetical anyway.                                                                           |
| 51:12      | I'd be like, no, that's okay.                                                                                           |
| 51:14      | I'm just going to use a Mac.                                                                                            |
| 51:16      | Yeah.                                                                                                                   |
| 51:18      | All righty.                                                                                                             |
| 51:19      | All right.                                                                                                              |
| 51:20      | We'll see you.                                                                                                          |
| 51:21      | We will be back in two weeks.                                                                                           |
| 51:22      | Yes.                                                                                                                    |
| 51:23      | Thanks to our sponsors, Smile and TextExpander.                                                                         |
| 51:25      | Remember that's TextExpander.com/podcast.                                                                               |
| 51:27      | Let them know you heard about it here.                                                                                  |
| 51:29      | Don't miss us in the forums.                                                                                            |
| 51:31      | Rose, where should people go to see you on the internet?                                                                |
| 51:34      | [RosemaryOrchard.com](https://RosemaryOrchard.com) and RosemaryOrchard is my handle                                   |
| 51:38      | on Micro.blog, Twitter, Mastodon, everywhere basically.                                                                 |
| 51:42      | Yes, where can people find you?                                                                                         |
| 51:44      | I am over at [macsparky.com](https://macsparky.com) and I'm also at [learn.macsparky.com](https://learn.macsparky.com). |
| 51:49      | I'm going to put a free, I'm going to put a $5 discount                                                                 |
| 51:54      | on the [[Hazel]] field guide.                                                                                           |
| 51:56      | This is just an audible.                                                                                                |
| 51:57      | I just thought of this really.                                                                                          |
| 51:59      | All right.                                                                                                              |
| 52:00      | Just type automate me with no space and you get $5 off.                                                                 |
| 52:04      | Nice.                                                                                                                   |
| 52:05      | I'm not going to write that down anywhere.                                                                              |
| 52:07      | So if you listen to the end of the show, you're getting that $5 off.                                                    |
| 52:10      | Excellent.                                                                                                              |
| 52:11      | Well, I would highly recommend that if people are interested                                                            |
| 52:14      | in learning more about [[Hazel]], that they do that.                                                                    |
| 52:16      | It is a great field guide.                                                                                              |
| 52:18      | See you in two weeks.                                                                                                   |
| 52:19      | All right.                                                                                                              |
| 52:20      | Bye.                                                                                                                    |
