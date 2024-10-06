---
status: "incomplete"
fc-date:
  year: 2022
  month: 02
  day: 11
fc-category: "podcast"
podcast: "Automators"
published: 2022-02-11
duration: 5939
formattedduration: "01:38:59"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/95"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators095.mp3"
episode: 95
title: "95: Keyboard Maestro Takes It Up to 10"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
There's a new version of Keyboard Maestro with plenty of new automation tools. David and Rose have some great ideas of how to take advantage of the new features.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 095 Discussion](https://talk.automators.fm/t/95-keyboard-maestro-takes-it-up-to-10/13255)

# Sponsors
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.
- [[Hover (Sponsor)|Hover]] - Make a name for yourself.

# Show Notes
- [Keyboard Maestro 10.0.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Whats New In Version 10?](https://wiki.keyboardmaestro.com/manual/Whats_New)
- [The Keyboard Maestro Field Guide](https://learn.macsparky.com/p/km)
- [Select or Show a Menu Item (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Select_or_Show_a_Menu_Item)
- [Find Image on Screen (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Find_Image_on_Screen)
- [Triggers (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/Triggers)
- [Corcules/KMLink: Stream Deck plugin to drive Keyboard Maestro](https://github.com/Corcules/KMLink)
- [tjluoma/icalbuddy-km-and-stream-deck: Use icalBuddy and Keyboard Maestro to show calendar events on Stream Deck](https://github.com/tjluoma/icalbuddy-km-and-stream-deck)
- [PopClip for Mac](https://pilotmoon.com/popclip/)
- [RosemaryOrchard/PopClip-Extensions](https://github.com/RosemaryOrchard/PopClip-Extensions)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the automation podcast where we try and make all of the magic          |
| 00:07      | happen through our computers, so they can accept ourselves.                                              |
| 00:11      | My name is Rosemary Orchard, and I'm joined as always by David Sparks.                                   |
| 00:14      | Hey David, how are you today?                                                                            |
| 00:15      | I'm great, Rose, and we've got one of my favourite topics, automation topics, today,                      |
| 00:20      | so I'm very excited about today's show.                                                                  |
| 00:22      | Yeah, me too.                                                                                            |
| 00:24      | It's really been fun having that extra focus because this is an application that's just                  |
| 00:30      | always there just doing stuff for me, and now I really, really get the benefit of, you                   |
| 00:36      | know, being able to dive in because I've had a couple of weeks to really focus on this.                  |
| 00:40      | Yeah, and of course we're talking about [[Keyboard Maestro]].                                                |
| 00:42      | It recently got updated to version 10, and it added a bunch of really nice new features,                 |
| 00:50      | and so we wanted to give [[Keyboard Maestro]] a show.                                                        |
| 00:52      | We've talked about it a lot on the show, I feel like with every guest show there's almost                |
| 00:55      | a [[Keyboard Maestro]] segment for anybody that is Mac-based, but it really is an amazing,                   |
| 01:02      | amazing, you know, tool for doing automation on your Mac, and I thought maybe even before                |
| 01:07      | we get into the new features, a common question I keep getting from people is, with the emergence        |
| 01:14      | of shortcuts for Mac, and it is getting better and more stable, is there still a need for                |
| 01:20      | [[Keyboard Maestro]]? That's a question people ask me a lot.                                                 |
| 01:23      | What do you think about that, Rose?                                                                      |
| 01:25      | I mean, I think it's a great question for people to ask because, you know, it is another                 |
| 01:29      | tool, but I personally feel like if you really want to automate stuff, you're going to want              |
| 01:35      | to have every tool available to you.                                                                     |
| 01:37      | If you're trying to make a chair and you're a carpenter, you're not just going to have                   |
| 01:42      | one hammer, you're probably also going to have, you know, a pin hammer and, you know,                    |
| 01:46      | maybe a mallet and so on, as well as a regular hammer, and it's one of these things where                |
| 01:51      | having all the tools really makes life much easier, and [[Keyboard Maestro]] is so powerful,                 |
| 01:58      | and it takes a lot of those things that we just can't do in shortcuts and makes them                     |
| 02:02      | much more easily accessible, and of course, it syncs between your Macs, and you can choose               |
| 02:07      | how you sync it, which means that I can sync it to my work machine as well and have the                  |
| 02:12      | things there, even though I don't actually sync shortcuts to my work machine.                            |
| 02:18      | So it's quite useful being able to do that.                                                              |
| 02:21      | Yeah, and, you know, shortcuts has done a lot, you know, they allow scripting and [[AppleScript]]                  |
| 02:27      | and a lot of very powerful automation to be embedded in a shortcut, but there's                   |
| 02:32      | a lot it's still not very good at, you know, like one very basic feature is just select                  |
| 02:38      | an item from the menu, you know, I mean, that is something that people want to do in                     |
| 02:42      | automation and [[Apple Mail]], for a long time, that was one of the ways I was filing messages               |
| 02:47      | because you can go through the menu system to move a message to, you know, a mailbox                     |
| 02:54      | that's deep in your mail system, and I was using the menu command for that, it's just                    |
| 02:59      | something you can't do in shortcuts, and [[Keyboard Maestro]] has that they have that some of the            |
| 03:04      | basic stuff like that, but they also have some of the deeper stuff like, you know, look                  |
| 03:08      | at the screen and find a certain image and click on it.                                                  |
| 03:12      | Yeah, yeah, and I have to say, you know, the fact that we have things like that available                |
| 03:18      | to us, I mean, Automator does have Watch Me Do, but I find [[Keyboard Maestro]] is much                      |
| 03:22      | better at breaking things down when you're trying to do something where you're not quite                 |
| 03:26      | sure how to program it because you can add those extra little pauses in very easily and                  |
| 03:31      | so on and so forth, and instead of saying, you know, click over here on this page, you                   |
| 03:35      | click at the specific image and things like that, which means that even if you don't necessarily         |
| 03:40      | know what you're doing, you've still got a lot of options to make sure everything works.                 |
| 03:45      | Another piece of this is just kind of the status of the software, [[Keyboard Maestro]] is                    |
| 03:49      | remarkably stable, and shortcuts is early in its life.                                                   |
| 03:54      | So where shortcuts right now is at the point where they're still shaping it on the band                  |
| 03:59      | saw to use the carpenter analogy, [[Keyboard Maestro]] is at the 300 grit sandpaper level,                   |
| 04:05      | you know, I mean, they're doing fine adjustments and making little changes to make things easier.        |
| 04:11      | And you know, they're able to deal with details that the shortcuts team, it's probably on                |
| 04:16      | their whiteboard somewhere, but it's not near, you know, the top of their list right now.                |
| 04:20      | So you've got a very nice stable experience with [[Keyboard Maestro]] and a different set                    |
| 04:27      | of tools.                                                                                                |
| 04:28      | In fact, really, when people ask me this question, I kind of flip it on its head.                        |
| 04:31      | I want to ask them, wouldn't it be nice if we had [[Keyboard Maestro]] on our iPhones and                    |
| 04:36      | iPads in addition to shortcuts, because, you know, there are features that just don't,                   |
| 04:41      | you know, automation things you just can't do on mobile that you can do on a Mac very                    |
| 04:45      | easily.                                                                                                  |
| 04:46      | Yes.                                                                                                     |
| 04:47      | Though I have to say, one of the things that I have found to be really great with shortcuts              |
| 04:52      | and [[Keyboard Maestro]] is the ability to call a [[Keyboard Maestro]] micro from a shortcut.                    |
| 04:58      | Because [[Keyboard Maestro]] has one of the trigger options that you can add to a macro is a public          |
| 05:05      | web URL, which means that even if you're not at home, you can have it call that URL.                     |
| 05:09      | And if your Mac at home is running, then it will just do the thing, which is that that's                 |
| 05:14      | really great.                                                                                            |
| 05:15      | And I really like the fact that we do have so many ways to do things.                                    |
| 05:21      | And [[Keyboard Maestro]] can do some things that other tools can do like [[Hazel]], it could watch               |
| 05:25      | a folder, same sort of way, but I love the fact that I have the option to have all the                   |
| 05:31      | tools and also to just really use whatever is most powerful.                                             |
| 05:35      | And so I've been doing a lot of playing recently, David, a lot of playing and it's been very             |
| 05:41      | nice to just take a moment and look back at the 253 macros I currently have in Keyboard                  |
| 05:46      | Maestro and go, I don't feel like I've even got started yet.                                             |
| 05:50      | Well, I mean, and they're already able to talk to each other.                                            |
| 05:56      | You talked about public URLs, so the way you do that is you just call it in a shortcut                   |
| 06:01      | and then it triggers a [[Keyboard Maestro]] script.                                                          |
| 06:05      | So not only can you trigger it with your [[Stream Deck]] or some keyboard shortcut, or you can               |
| 06:10      | trigger it with a keyboard and attach and a keyboard and a [[MIDI]] note.                                    |
| 06:14      | You can also trigger it with your phone or iPad or [[Apple Watch]].                                          |
| 06:19      | And that is kind of awesome.                                                                             |
| 06:21      | But people are already going the other direction now to where they're allowing [[Keyboard Maestro]]          |
| 06:27      | to trigger shortcuts.                                                                                    |
| 06:29      | Yeah, yeah, because of course, you can do that now.                                                      |
| 06:36      | This is something that people have been playing with a little bit because if you look for actions        |
| 06:40      | in [[Keyboard Maestro]] for shortcuts, you actually don't find one.                                          |
| 06:44      | But there is a really great action called script or execute a script, specifically execute               |
| 06:51      | a shell script, because then you can type run shortcuts space quotation mark the name                    |
| 06:58      | of your shortcut quotation mark.                                                                         |
| 07:00      | That's it.                                                                                               |
| 07:01      | That's the entirety of the script.                                                                       |
| 07:02      | It's incredibly easy to do, which makes it really, really great that you can just run                    |
| 07:07      | a shortcut from anywhere.                                                                                |
| 07:09      | Yeah.                                                                                                    |
| 07:10      | Yeah.                                                                                                    |
| 07:11      | I really think that, and this is only the beginning, honestly.                                           |
| 07:16      | I think we're going to have a real rich environment with this done.                                      |
| 07:20      | There are some things in [[Keyboard Maestro]] that it's not good at that shortcuts is better                 |
| 07:24      | at.                                                                                                      |
| 07:25      | Two examples that come to my mind are calendars and contacts.                                            |
| 07:29      | I feel like they're difficult to script in [[Keyboard Maestro]].                                             |
| 07:33      | I mean, you can do it.                                                                                   |
| 07:34      | You can write an [[AppleScript]] to do anything with contacts, but I don't want to have to                  |
| 07:38      | break out the [[AppleScript]].                                                                              |
| 07:40      | I don't have to break glass and break out [[AppleScript]] just to change a contact detail                   |
| 07:45      | where with shortcuts, they make that very easy.                                                          |
| 07:50      | These are not, neither one replaces the other.                                                           |
| 07:54      | They both have things they're good at and bad at.                                                        |
| 07:57      | I think if you want to get into automation, you honestly need to embrace the both.                       |
| 08:02      | Yes.                                                                                                     |
| 08:03      | Yes.                                                                                                     |
| 08:04      | It's where we get to really enjoy all of this because we get to do all of these things.                  |
| 08:13      | It's extra fun to be able to do that.                                                                    |
| 08:15      | I know that I've been having quite a bit of fun recently, David, because of Dave Hamilton.               |
| 08:20      | So Kelly Guimont brought up his great podcasting script, and then he also brought it up.                 |
| 08:28      | I figured out a couple of tiny tweaks to it that make it work perfectly for me.                          |
| 08:34      | I've been really enjoying the fact that I now have this, so whenever I add a note to                     |
| 08:39      | the show dock, it's got the exact time stamp in of when we start because it makes it easier              |
| 08:46      | for our editor, Jim, who does a wonderful job of making us sound amazingly smart.                        |
| 08:52      | It's nice to be able to use the automation powers for good here.                                         |
| 08:56      | Yes.                                                                                                     |
| 08:57      | So you want to start digging in on some of the version 10 features?                                      |
| 09:02      | Yes.                                                                                                     |
| 09:03      | Yes, I think that's a great place to get started because [[Keyboard Maestro]] has been around for              |
| 09:07      | long enough that it already has version 10, and it only does a new major release about                   |
| 09:11      | every two years, and so the fact that we've just had one is pretty nice.                                 |
| 09:19      | But I have been having a lot of fun with the subroutines, David, and I know that's a pretty              |
| 09:25      | nerdy thing to get started with, so I don't know if there's anything else that you want                  |
| 09:28      | to call out before we get to the subroutines.                                                            |
| 09:30      | No.                                                                                                      |
| 09:31      | The subroutines are the banner feature.                                                                  |
| 09:33      | I mean, there's a whole bunch.                                                                           |
| 09:34      | There's triggers and actions, a lot of stuff that they got added, and we're going to talk                |
| 09:37      | about that.                                                                                              |
| 09:38      | But let's just start with the big one, subroutines.                                                      |
| 09:41      | Yeah.                                                                                                    |
| 09:42      | Yeah.                                                                                                    |
| 09:43      | So subroutines are a macro that is run inside of a [[Keyboard Maestro]] macro, and you might                 |
| 09:49      | be thinking, well, can you do that before?                                                               |
| 09:51      | And yes, yes, you could.                                                                                 |
| 09:52      | It's not something that is entirely new with version 10, but version 10 explicitly adds                  |
| 09:57      | the ability to have a macro that is just a subroutine.                                                   |
| 10:04      | And then it gets included, and you can pass data directly to it instead of setting it                    |
| 10:08      | as a variable and then grabbing it as a variable in the other script or passing things through           |
| 10:13      | with your clipboard and things like that, which makes it really, really powerful.                        |
| 10:18      | And I am impressed with this, like really impressed with this, because it's amazing                      |
| 10:23      | how many of my macros I could convert very, very quickly and improve.                                    |
| 10:27      | Yeah.                                                                                                    |
| 10:28      | And the advantage of the subroutines is if you've got something that you do in five                      |
| 10:31      | different macros, you can have a subroutine that it calls, and that way, if you ever need                |
| 10:37      | to change any bit of that, you don't have to change it five times.                                       |
| 10:40      | You just change it once and the subroutine calls that, and then it just makes everything                 |
| 10:46      | simpler.                                                                                                 |
| 10:47      | It's much more of a programming concept, but if you're doing [[Keyboard Maestro]], you're                    |
| 10:51      | programming, so that's okay.                                                                             |
| 10:53      | You should embrace that.                                                                                 |
| 10:55      | Where are you using the subroutines?                                                                     |
| 10:57      | Well, I'm using them in all sorts of places.                                                             |
| 11:00      | And one example, which I think people will be quite interested in is some of the automators              |
| 11:05      | actions that I have.                                                                                     |
| 11:07      | So I have a folder in [[Keyboard Maestro]] for all of my automators, macros.                                 |
| 11:13      | And I have a folder in [[Dropbox]], which is where all of the audio for the show gets saved automatically.   |
| 11:19      | I've got [[Audio Hijack]] set up when I'm using my Automators session in [[Audio Hijack]], then                 |
| 11:25      | it saves it into this folder.                                                                            |
| 11:28      | And [[Keyboard Maestro]] watches that folder, and it waits.                                                  |
| 11:31      | And then it pops up and says, hey, so what's the episode number for this?                                |
| 11:36      | And then if it's a regular show audio, then it just moves it into the folder with the                    |
| 11:42      | right name and everything that it's got.                                                                 |
| 11:45      | But if it's an ad, then it also asks me what ad is this for, so that we can make sure that               |
| 11:49      | the right name is in there.                                                                              |
| 11:51      | And then it renames the files and moves them.                                                            |
| 11:53      | But I specifically wanted to be prompted for this so that I actually get asked, you know,                |
| 11:57      | so what ad is this?                                                                                      |
| 11:58      | And there's also the option to delete because of course, every so often when I'm recording               |
| 12:04      | something, then I will have a full start and I'll start it and then stop and we kill off                 |
| 12:08      | the audio and start again.                                                                               |
| 12:10      | And it's really great to have some of the things for that because I have a mini macro,                   |
| 12:17      | which actually when I use my bunch to set things up at the start of recording, it asks                   |
| 12:23      | me what episode number we're going to record.                                                            |
| 12:26      | But that information is then reused inside of these subroutines or it is a subroutine,                   |
| 12:33      | but it means that it can pop it up again and ask me for it.                                              |
| 12:36      | But because I'm saving that into a variable, then it already knows it.                                   |
| 12:41      | So it's just a case of allowing me to modify it.                                                         |
| 12:43      | And so the fact that I have the ability to just tweak something in one place, like I've                  |
| 12:49      | got all the folders and everything in there as subroutines, that really, really helps.                   |
| 12:54      | Yeah.                                                                                                    |
| 12:55      | And if there's things you do repeatedly, you find yourself building the same bit of script               |
| 13:01      | or macro.                                                                                                |
| 13:02      | What do they call it, macros or scripting keyboard, my show?                                             |
| 13:05      | Macros.                                                                                                  |
| 13:06      | It's keyboard, my show, macros, KMM.                                                                     |
| 13:08      | Yeah.                                                                                                    |
| 13:09      | I always forget that.                                                                                    |
| 13:10      | Anyway, so as you're building your macros, if you find yourself doing repeated bits,                     |
| 13:15      | it could be anything like what Rose was just explaining with file management or maybe                    |
| 13:19      | it's just sizing a window or whatever, you can save them as a subroutine.                                |
| 13:24      | It calls them and like Rose said, the nice bit about this is historically, in order to                   |
| 13:29      | do this, you had to pass a variable which added a bunch of extra work and really made                    |
| 13:33      | it impractical to do.                                                                                    |
| 13:36      | Now they've solved that problem and subroutines are kind of awesome.                                     |
| 13:40      | Yeah, they are because you can explicitly say what information your subroutine wants                     |
| 13:46      | or needs to run.                                                                                         |
| 13:49      | And so I was just having a look at one and of course I might click away from it.                         |
| 13:54      | There we go.                                                                                             |
| 13:55      | It says, executed as a subroutine with parameters, okay?                                                 |
| 13:59      | So that is one of the triggers that you can have.                                                        |
| 14:01      | So when you set up a keyboard, my show, macro to start with, you need a trigger.                         |
| 14:04      | What tells it to run?                                                                                    |
| 14:05      | There's all sorts of things and we're going to have to get to sleep and wake later, David,               |
| 14:10      | because I've been using those a lot recently.                                                            |
| 14:14      | But there is a subroutine trigger option and then you can have specific parameters that                  |
| 14:20      | it will want or need and you can say whether or not this returns a value.                                |
| 14:25      | And then once you've done that, then you can also see all of your macros that are calling                |
| 14:29      | it and that is so great.                                                                                 |
| 14:30      | I really like that.                                                                                      |
| 14:31      | But I can explicitly say that I need ask as part of this and the file needs to come into                 |
| 14:39      | this so that it knows what to do and then I have another subroutine that actually moves                  |
| 14:44      | the files to the right folder for automators.                                                            |
| 14:46      | So there's only one macro which specifies where all the files are going, which means                     |
| 14:51      | if I ever change that folder, it'll be really easy to do.                                                |
| 14:55      | Yeah.                                                                                                    |
| 14:56      | Subroutines, I'm really happy to have them.                                                              |
| 14:58      | I'm not using them a lot, but I am using them and it's like this is a skill.                             |
| 15:04      | Once you have it, you'll find additional uses for going forward.                                         |
| 15:08      | Yes.                                                                                                     |
| 15:09      | Yeah.                                                                                                    |
| 15:10      | Maybe we should just talk for a minute about all of the new triggers because they've got                 |
| 15:15      | some really good ones and one of the new triggers that I really appreciate is the unlock trigger.        |
| 15:21      | So you've got your Mac and it's shut down or locked up and you sit down and you unlock                   |
| 15:28      | your mac.                                                                                                |
| 15:29      | Well, now that is a [[Keyboard Maestro]] trigger.                                                            |
| 15:31      | Yeah.                                                                                                    |
| 15:32      | And just think about that, right?                                                                        |
| 15:34      | As soon as you unlock your mac, then a macro can be triggered.                                           |
| 15:39      | There's lots of great ways to use that.                                                                  |
| 15:42      | You could have it put on the screen the name of your next appointment or you could have                  |
| 15:48      | it set up windows for you.                                                                               |
| 15:51      | When you sit down to work, isn't it great to have your computer automatically start                      |
| 15:54      | to work for you?                                                                                         |
| 15:55      | Yes.                                                                                                     |
| 15:56      | Yes, it really is.                                                                                       |
| 15:59      | I have to say, I've been using the wake trigger quite a bit, but the unlock trigger is also              |
| 16:06      | even better in some ways because when your computer wakes up, it's still locked and there                |
| 16:12      | are certain things that it may or may not be able to do, but the unlock trigger does                     |
| 16:16      | allow you to go through and figure some other things out.                                                |
| 16:21      | And so while I have mine, check what time of day it is when it unlocks and it executes                   |
| 16:25      | different actions on my machine, depending on what time of day it is.                                    |
| 16:32      | Because for example, in my day job, I have a stand up in the morning every day where                     |
| 16:36      | all of us, my entire team, you know, spends 15 minutes talking to each other saying what                 |
| 16:41      | we've been up to, what we're going to be doing and, you know, hi, and how are you.                       |
| 16:47      | It doesn't take very long, it's only 15 minutes, but usually what happens is I do just run               |
| 16:51      | to the bathroom before that.                                                                             |
| 16:52      | And so my computer locks, of course, because, you know, security, it has to lock pretty                  |
| 16:56      | quickly and I'm not going to go around leaving that sort of thing unlocked.                              |
| 17:00      | And so when I come back, it checks if it's after 9.40 and before 10.15 in the morning,                   |
| 17:07      | then it makes sure that it pops up teams as the first application for me, which means                    |
| 17:13      | that then, you know, I'm ready to hop in to stand up as soon as I come back.                             |
| 17:18      | And that is really useful.                                                                               |
| 17:21      | And I have to say it's really great because now, on my personal machine, I am working                    |
| 17:26      | on a similar macro that I am doing for podcasting, where it's good to check which podcasting             |
| 17:30      | calendar or which podcast I'm recording next if I'm recording a podcast.                                 |
| 17:36      | And it's going to help me set some things up there, which is even better.                                |
| 17:40      | Yeah, I think there's a lot to that.                                                                     |
| 17:43      | So I'm assuming you're using the if command and just a time check to pull.                               |
| 17:47      | I'm actually using the switch command.                                                                   |
| 17:50      | So for people not so familiar with programming, a switch command is kind of like an if except            |
| 17:57      | that you have multiple potential cases.                                                                  |
| 18:00      | And so you instead of saying, you know, if this thing is this, do this, if this thing                    |
| 18:05      | is this, do this, if this thing is this, do this, else do that thing.                                    |
| 18:10      | It is that it's just, it's a switch case.                                                                |
| 18:12      | So you have the multiple cases directly, which is really nice.                                           |
| 18:16      | I love the fact that [[Keyboard Maestro]] has this.                                                          |
| 18:17      | I wish the shortcuts had this, but there is a great switch case.                                         |
| 18:23      | And you can say, you know, if your text contains this or a calculation contains that and the             |
| 18:31      | calculations are pretty powerful and [[Keyboard Maestro]] too.                                               |
| 18:35      | And so it's really nice to do that.                                                                      |
| 18:37      | So normally I use the switch command if I've got multiple options.                                       |
| 18:41      | Yes, that's what I'm doing with this.                                                                    |
| 18:43      | So what are the other options?                                                                           |
| 18:45      | What else are you doing?                                                                                 |
| 18:46      | Whatever time?                                                                                           |
| 18:47      | So between 9.40 and 10.15 in the morning, it does my, the thing for stand up and this                    |
| 18:54      | is executing a subroutine again, where it minimises all of my windows and then opens                     |
| 19:00      | teams and runs a [[Moom]] setup for me.                                                                      |
| 19:04      | And this gets reused if in my calendar there's a monthly meeting.                                        |
| 19:09      | And because we have monthly meetings at work.                                                            |
| 19:12      | And then I also have a couple of other ones for different kinds of work that I do at different           |
| 19:18      | times of the day where it'll go, oh, hey, like, you know, you're unlocking your computer                 |
| 19:22      | for the first time today.                                                                                |
| 19:24      | And so I am storing that at the moment.                                                                  |
| 19:27      | I'm doing a timestamp of every time my computer unlocks, it just gets saved into a variable              |
| 19:34      | so that I can check whether or not it was today.                                                         |
| 19:38      | But if it was today, if it's the first time for today, then it opens up a couple of different            |
| 19:42      | tabs for me of things that I need to do first thing in the morning and so on and so forth,               |
| 19:45      | which is really nice.                                                                                    |
| 19:48      | And I haven't really enhanced that one that much yet.                                                    |
| 19:51      | I've just got those three different options because most of the time if I go away for                    |
| 19:56      | lunch and come back, I want everything exactly as it was before I went away for lunch rather             |
| 20:01      | than anything else, but I need to play with this more in my personal machine.                            |
| 20:07      | This episode of Automated is brought to you by Electric.                                                 |
| 20:10      | When meeting your small business, it's not all glamour.                                                  |
| 20:12      | In fact, sometimes spending hours trying to find a laptop lost in the mail for a new hire                |
| 20:16      | or dealing with some other technical emergency is what happens.                                          |
| 20:20      | The team over at Electric knows small businesses, maybe like yours, face these challenges.               |
| 20:25      | That's why they've solved this problem for you by operating as your IT department.                       |
| 20:29      | Instead of spending your time sorting through unused application licenses, setting up employee           |
| 20:33      | laptops and answering never ending IT questions for your team, you can build that empire.                |
| 20:39      | With Electric acting as your IT department, you can get back to what you're good at.                     |
| 20:43      | Plus, you get a really cool IT platform to see and manage everything.                                    |
| 20:46      | A service like Electric is great for small businesses because, quite frankly, most people                |
| 20:51      | don't want to be wasting their time dealing with what is, frankly, mostly administrative                 |
| 20:55      | work from their perspective when they've got all of these other things to deal about.                    |
| 21:00      | And if you're going to get it right, it can be quite a bit of a time sink.                               |
| 21:03      | I would have loved to outsource pretty much my entire job at my last place to Electric                   |
| 21:08      | because there were so many things I ended up doing instead of my actual job.                             |
| 21:12      | And it would have been really great to have some help.                                                   |
| 21:15      | For Automators listeners, Electric are offering a free pair of Beats Solo 3 headphones for               |
| 21:18      | taking a qualified meeting.                                                                              |
| 21:20      | Just go to electric.ai.automators to set it up.                                                          |
| 21:24      | That's electric.ai.automators to get your free pair of Beats Solo 3 headphones today                     |
| 21:28      | for scheduling a meeting.                                                                                |
| 21:30      | Our thanks to Electric for their support of this show.                                                   |
| 21:33      | Okay, before the break, you were talking about the Unlock trigger, but you also said you're              |
| 21:40      | using sleep and wake a lot.                                                                                   |
| 21:42      | Where are you doing that?                                                                                |
| 21:43      | Well, I'm going to start with Sleep because I use a couple of different applications all                 |
| 21:49      | day every day at work.                                                                                   |
| 21:51      | But when my computer goes to sleep at the end of the day, I want those to be closed.                     |
| 21:58      | Because I found, I'm using PHPStorm, it's a JetBrains IDE.                                               |
| 22:04      | So it's what I use to actually write code in at work.                                                    |
| 22:07      | And it's not super important, but it's written in Java.                                                  |
| 22:10      | And unfortunately, there's a little bit of a memory leak at the moment, where if you                     |
| 22:13      | leave it running, for example, all week long, then it'll use a really, really large amount               |
| 22:19      | of CPU.                                                                                                  |
| 22:20      | And also teams and so on do the same sort of thing.                                                      |
| 22:24      | So when my computer goes to sleep, and you don't have very long with this macro, so you                  |
| 22:31      | have to be kind of smart about how you do this with the Sleep one.                                       |
| 22:35      | But what I'm doing is actually just running a subroutine so I can also call this macro                   |
| 22:40      | directly.                                                                                                |
| 22:43      | And the Sleep will be deferred up to 30 seconds.                                                         |
| 22:47      | It just quits a bunch of applications if it's after 4.45 p.m. in the day.                                |
| 22:53      | So I just check if it's after 4.45 in the afternoon, then it'll quit these applications                  |
| 22:58      | before it goes to sleep.                                                                                 |
| 23:00      | And it's really simple.                                                                                  |
| 23:02      | And then the wake one, I should probably switch it to an unlock and just hide into the first             |
| 23:07      | one in the day and just say, and I'm going to open up these applications for you in the                  |
| 23:11      | format that you prefer.                                                                                  |
| 23:14      | Because then I've got all the great things available to me, but the sleep one is really                  |
| 23:19      | good.                                                                                                    |
| 23:20      | And I have been using the wake one again, I should probably change this to unlock for                    |
| 23:24      | when I'm in the office.                                                                                  |
| 23:25      | So we have an office at my job, which we go to every once in a while.                                    |
| 23:29      | It's just a meeting room that we book.                                                                   |
| 23:31      | But of course, I want things to be set up slightly differently if I'm in the office.                     |
| 23:35      | And I can tell this based on a number of different factors, such as the Wi-Fi that my device is          |
| 23:39      | connected to, whether or not there is an external display plugged in and so on.                          |
| 23:44      | And so it makes sure that it opens slightly different applications and it uses a different               |
| 23:50      | window layout for me, which is really nice.                                                              |
| 23:52      | And I think you could probably repurpose that, David, for your machine because you're a one              |
| 23:56      | machine person now with your fancy setup at your desk and then your recording studio,                    |
| 24:03      | which moves around depending on what's available.                                                        |
| 24:05      | Yeah.                                                                                                    |
| 24:06      | It sounds to me like you've set up several automations that are like setups based on                     |
| 24:11      | time.                                                                                                    |
| 24:12      | Yes.                                                                                                     |
| 24:13      | Yeah.                                                                                                    |
| 24:14      | And so using sleep and unlock is a great way to occasionally just check in.                              |
| 24:21      | It's like my first meditation teacher said, hey, whenever the phone rings, ask yourself                  |
| 24:25      | if you're being mindful.                                                                                 |
| 24:27      | Well, you're kind of doing the same thing.                                                               |
| 24:28      | Like whenever your computer goes to sleep or wakes up, it's just like an opportune time                  |
| 24:33      | to say, well, what time of day is it and what's on the screen right now and what should be               |
| 24:37      | on the screen?                                                                                           |
| 24:39      | And you could also do that with a script that just every 15 minutes ran a check.                         |
| 24:44      | As well.                                                                                                 |
| 24:45      | There's lots of ways to do it.                                                                           |
| 24:46      | But I like the way you're doing it because it feels like it's not too heavy.                             |
| 24:51      | And using subroutines, you can just plug these subroutines into these various time check                 |
| 24:57      | opportunities.                                                                                           |
| 24:58      | Yes.                                                                                                     |
| 24:59      | Yes.                                                                                                     |
| 25:00      | Exactly.                                                                                                 |
| 25:01      | And that's the great thing, because then if I end up doing something at a different                      |
| 25:04      | time or similar, then it's really easy to just pull that bit out and run it separately.                  |
| 25:10      | Because I don't know about you, David, but I personally find the menu bar option for                     |
| 25:18      | or the status menu trigger option for [[Keyboard Maestro]] is a really great way to run a whole              |
| 25:24      | bunch of different macros because it's right there in my menu bar.                                       |
| 25:28      | It doesn't take up a lot of space, but I can click on it and see all of the different                    |
| 25:33      | options that I have available.                                                                           |
| 25:35      | And this combined with folders, which are disabled on certain machines or only enabled                   |
| 25:40      | on certain machines, makes it very easy for me to just have the right ones available to                  |
| 25:46      | me.                                                                                                      |
| 25:47      | Yeah.                                                                                                    |
| 25:48      | That does help.                                                                                          |
| 25:49      | And to be honest, for the setup type of stuff you're doing, I just use buttons on the stream             |
| 25:53      | deck.                                                                                                    |
| 25:54      | I just manually push them.                                                                               |
| 25:55      | But I do like the idea of the computer doing time checks and setting it up for me.                       |
| 26:00      | The problem is my time isn't consistent enough.                                                          |
| 26:04      | Like I don't have a stand-up meeting at 10 o'clock every day.                                            |
| 26:08      | So the time...                                                                                           |
| 26:09      | But you could read from the calendar for that.                                                           |
| 26:11      | Yeah.                                                                                                    |
| 26:12      | That I was about to say.                                                                                 |
| 26:13      | I think maybe going to the calendar would be a nice way to do it because I block schedule                |
| 26:16      | so much that it would be interesting.                                                                    |
| 26:18      | Like if I said, okay, I'm going to edit, you know, podcast ads at 10 o'clock and it sees                 |
| 26:24      | that and the calendar that it suddenly sets up my finder and my audio editing tools and                  |
| 26:30      | everything to kind of do that for me off the play with that some, but I've been doing that               |
| 26:34      | largely with a set of buttons on [[Stream Deck]] to so far.                                                  |
| 26:41      | Some more triggers that they've added is they've added one for appearance changed.                       |
| 26:47      | And that's kind of nutty, right?                                                                         |
| 26:49      | But whenever your Mac changes its system appearance, that can be a trigger.                              |
| 26:53      | So like going into dark mode and suddenly other things start to happen on your Mac.                      |
| 27:00      | Mm-hmm.                                                                                                  |
| 27:01      | Yeah.                                                                                                    |
| 27:02      | So that is pretty useful to have because as well in version nine, they added the ability                 |
| 27:09      | to set the system to dark mode and also set keyboard, my share specifically to dark mode,                |
| 27:15      | which is quite nice.                                                                                     |
| 27:17      | And so I have definitely used this before because most of the time I'm perfectly fine                    |
| 27:24      | with my computer auto switching to light or dark mode, but sometimes I need to just toggle               |
| 27:30      | it manually as part of something else because I definitely want it to be in light mode for               |
| 27:34      | this or dark mode for that.                                                                              |
| 27:36      | And I really like being able to just sneak that one in there.                                            |
| 27:39      | Yeah.                                                                                                    |
| 27:40      | The trigger, I think that I'm most excited about, although I haven't used as much as                     |
| 27:45      | I thought I would, is the long press trigger.                                                            |
| 27:48      | So now you can have it where if you long press a trigger because there's different ways to               |
| 27:55      | use a keyboard shortcut trigger, but it's never recognised a long press as a separate                    |
| 28:00      | trigger, but now it does.                                                                                |
| 28:02      | So if you've got like, you know, I don't know, control option command Q and historically                 |
| 28:08      | it would put your system to sleep.                                                                       |
| 28:09      | But if you long press it, it could do something different, right?                                        |
| 28:13      | And that is, that's cool.                                                                                |
| 28:15      | I love that addition.                                                                                    |
| 28:17      | Yes.                                                                                                     |
| 28:18      | Yes.                                                                                                     |
| 28:19      | So it is very useful to have things like that because there are a limited number of buttons              |
| 28:25      | on most people's keyboards.                                                                              |
| 28:27      | And even if you have a keyboard with a number pattern extended keyboard, you still don't                 |
| 28:31      | have that many buttons.                                                                                  |
| 28:32      | So being able to add all of the modified keys as well as long press and so on, comes                     |
| 28:39      | in very handy just because if I long press on something and I'm doing it deliberately                    |
| 28:44      | and I usually try to pick, I don't know about you David, I usually try to pick buttons on                |
| 28:49      | opposite sides of my keyboard for this.                                                                  |
| 28:52      | Because otherwise it's really easy to accidentally drop a notebook or something down on your             |
| 28:55      | desk and have it depress a key on your keyboard.                                                         |
| 28:58      | And so if it's just pressing like the control key and then [[Keyboard Maestro]] magic, so it's               |
| 29:02      | happening, that's not necessarily what was intended.                                                     |
| 29:07      | But the ability to do this, so I do do like diagonal opposites on my keyboard usually.                   |
| 29:15      | That's my combination for that, and that makes it quite easy.                                            |
| 29:20      | Well, and just kind of related since we have invoked the name [[Stream Deck]] is people are                  |
| 29:25      | writing us about the [[Stream Deck#Stream Deck Pedal\|Stream Deck Pedal]].                                                                  |
| 29:28      | Oh yeah, I've ordered one, David, I've ordered one.                                                      |
| 29:31      | It should be coming in about a week or so as this episode releases, fingers crossed.                     |
| 29:39      | But it's not here yet.                                                                                   |
| 29:40      | Yeah, I was busy when that dropped and it's out of stock.                                                |
| 29:44      | So you'll have to be the first one to tell us about it.                                                  |
| 29:47      | Well I can give you a tip for it if you like, which is Camel, Camel, Camel.                              |
| 29:51      | So I Camel, Camel, Camel did and I put in a price that I knew was over the price that                    |
| 29:56      | it was being retailed at and then Camel, Camel, Camel said, hey, this is dropped in                      |
| 30:01      | price to the recommended retail price.                                                                   |
| 30:04      | And that's the point when I went and bought it and it said it would come at the end of                   |
| 30:08      | February and then I had an email from [[Amazon]] just yesterday actually to say that it should               |
| 30:12      | be coming earlier.                                                                                       |
| 30:14      | Okay, well, you're ahead of me.                                                                          |
| 30:17      | Yeah, well, I'm going to be seeing what [[Keyboard Maestro]] can do with this because, of course,            |
| 30:24      | there's plenty of different things that we can do with [[Keyboard Maestro]], but it can                      |
| 30:27      | be triggered by specific key presses on devices.                                                         |
| 30:32      | And the other thing, which I think we should probably talk about a little bit, is folders                |
| 30:36      | in [[Keyboard Maestro]] because for people who haven't really played with [[Keyboard Maestro]]                   |
| 30:41      | before, they have groups, which look like folders.                                                       |
| 30:46      | So I usually call them folders, but they are called groups.                                              |
| 30:49      | And these are very powerful, not just for organising your macros.                                        |
| 30:52      | Of course, they're great for that, but also because I can have, and I have a section or                  |
| 31:00      | a group of folders or a group of groups called group colon and then it's got device in there.            |
| 31:07      | And so it'll have like iMac or MacBook Pro or Work Mac.                                                  |
| 31:12      | And these are then disabled on all of my other devices, and they are only enabled on that                |
| 31:18      | device.                                                                                                  |
| 31:19      | But because I think all of my macros across all of my devices, this means that I can easily              |
| 31:24      | change something that would happen on another machine from any other machine if I want or                |
| 31:29      | need to.                                                                                                 |
| 31:30      | And I also have a Mac mini just sitting here running magic for me.                                       |
| 31:34      | And of course, it has its own folder, which means that I can really easily sync a macro                  |
| 31:39      | over there and just have it do a whole bunch of stuff for me.                                            |
| 31:43      | And it does.                                                                                             |
| 31:45      | That's it.                                                                                               |
| 31:46      | Yeah.                                                                                                    |
| 31:47      | Another way to use those groups is app-specific groups.                                                  |
| 31:50      | So like, for instance, [[Obsidian]] is one I've been doing a lot of [[Keyboard Maestro]] working                |
| 31:55      | lately and I have a group and I prefaced all app ones.                                                   |
| 32:00      | It's an app colon and then the name of the app.                                                          |
| 32:03      | And then you can click when you select that group.                                                       |
| 32:08      | And this is not part of the new update.                                                                  |
| 32:10      | This has been there for a long time, but when you select that group, then you can select                 |
| 32:15      | that this is only available in certain applications.                                                     |
| 32:19      | So the [[Obsidian]] group macros are only available in the [[Obsidian]] application.                             |
| 32:25      | And what that does is it allows me to use very simple keyboard shortcuts that would normally,            |
| 32:32      | you don't want to use up, like Ctrl L to me gets a copy of the [[Obsidian]] URL when I'm                     |
| 32:39      | in [[Obsidian]] because it's only going to work.                                                             |
| 32:42      | That Ctrl L is only going to work to run that command when I'm in [[Obsidian]].                              |
| 32:47      | When I go over to OmniFocus or Fantastical or whatever or [[Apple Mail]], it's going to use                   |
| 32:53      | it.                                                                                                      |
| 32:54      | Ctrl L maybe do something entirely different.                                                            |
| 32:56      | And it, in effect, allows you to make app-specific shortcuts or triggers that, you know, once            |
| 33:03      | again, kind of help solve the problem of not enough keys, too many triggers.                             |
| 33:08      | Exactly.                                                                                                 |
| 33:09      | And I use this as well.                                                                                  |
| 33:11      | So OmniFocus is great.                                                                                   |
| 33:14      | And I actually have two macro groups for OmniFocus.                                                      |
| 33:18      | One's called OmniFocus and one's called Not OmniFocus because I don't know about you,                    |
| 33:22      | but if I try and hit, what is it, Option Control Space to add something to OmniFocus,                    |
| 33:31      | and OmniFocus isn't running, nothing happens.                                                            |
| 33:35      | And I know Katie talked about this on my power usage ages ago, Sean Blanc had a great script             |
| 33:40      | called Oopsy Focus.                                                                                       |
| 33:41      | I have just created a single group in [[Keyboard Maestro]] called Not OmniFocus.                             |
| 33:48      | And it uses the same hotkey that happens when OmniFocus is running or the OmniFocus uses.                |
| 33:55      | And what happens is it activates OmniFocus, waits, gives it a second or two, then activates              |
| 34:02      | the previous application, and then it types the keystroke for me, which means that I end                 |
| 34:07      | up exactly where I was with OmniFocus running, except it works.                                          |
| 34:13      | But when OmniFocus is running, one of the things I end up doing is, as I'm processing                    |
| 34:17      | my inbox, I find a lot of things I want to convert to projects.                                          |
| 34:20      | And the command for command, and then it's the left square bracket, outdents things usually.             |
| 34:27      | And I keep trying to outdents stuff in the inbox.                                                        |
| 34:31      | And there are various ways to fix this problem.                                                          |
| 34:35      | But what I've just done is I've said, hey, if I press this command and a menu item with                  |
| 34:45      | the name Outdent exists, but is not enabled, use Edit Convert to Project instead.                        |
| 34:51      | Otherwise, use Organise Outdent.                                                                         |
| 34:55      | So yeah, that that that fixed that problem for me very quickly, because now I can just                   |
| 35:00      | outdent things in my inbox and they get converted to be a project.                                       |
| 35:04      | Another use for these app-specific groups is to create individual conflict pellets inside                |
| 35:10      | the app.                                                                                                 |
| 35:11      | Like I have a bunch of scripts over it in [[Apple Mail]], they're [[AppleScript\|AppleScripts]] to move                      |
| 35:16      | a message to a specific mailbox and do other things with messages.                                       |
| 35:20      | But one of them is move, like I like to move messages, like maybe I want to move it to                   |
| 35:25      | the same box black hole or to the priority folder or whatever.                                           |
| 35:30      | And I've just done a conflict pallet for MacSparky stuff, I hit Control M. And this is                  |
| 35:38      | a feature that used to be in some of the third-party mail plugins where you could do this, but           |
| 35:43      | I just wrote them as [[AppleScript\|AppleScripts]] and embedded them in [[Keyboard Maestro}], so I don't have to              |
| 35:48      | worry about losing the plug-in support.                                                                  |
| 35:53      | But I've got a bunch of those, and they do have specific keyboard shortcuts, like I can                  |
| 35:57      | hit Control 1 for a certain folder, Control 2, whatever.                                                 |
| 36:01      | But if I just hit Control M, it's a conflict pallet for all of them, and it shows me the                 |
| 36:06      | whole list, and then I can just type for black hole, if I type BL, it goes to the black hole.            |
| 36:11      | And I find very fast in that way if I'm using my laptop and I don't have a [[Stream Deck]] attached,         |
| 36:19      | I don't have to rely on the [[Stream Deck]] button pallet, I can just hit Control M, and as long             |
| 36:24      | as I'm in the mail app, that conflict pallet gets triggered.                                             |
| 36:28      | So there's a whole lot of clever ways to use those groupings, those app-specific groups                  |
| 36:35      | to make using your app a lot easier.                                                                     |
| 36:38      | You can, in essence, create any sort of in-app automation you want with a very simple keyboard           |
| 36:43      | trigger because it's only going to work in that app.                                                     |
| 36:46      | Yes, and that is really great.                                                                           |
| 36:49      | There's also an action, which I feel we should mention, which is called Show Pallet of Macros,           |
| 36:58      | so you were using specifically the conflict pallet, which is where you assign the same                   |
| 37:03      | keyboard shortcut to multiple actions, and then when you hit that trigger, everything                    |
| 37:09      | comes up that's got that action.                                                                         |
| 37:12      | But another way to do this is to use the Show Pallet of Macros option, and then you can                  |
| 37:19      | either use a smart group or you can use a regular group to show a specific group of                      |
| 37:25      | macros, and that is very handy because I have a group called, it's actually a smart group                |
| 37:33      | called Work [[Stream Deck]], and the idea is it is essentially a [[Keyboard Maestro]] pallet of                  |
| 37:41      | my Work [[Stream Deck]] actions, and this means that I can then just hit that keyboard shortcut              |
| 37:47      | and all of them pop up, but I don't necessarily have to use the macro pallet for it, which               |
| 37:51      | is really the conflict pallet for I can just have an application pallet, and then it can                 |
| 37:56      | also hang around on my screen because it is a regular pallet, whereas a conflict pallet                  |
| 38:01      | will go away, but it's useful to be able to do both.                                                     |
| 38:05      | Yeah, exactly.                                                                                           |
| 38:06      | So the conflict pallet, the advantages of it are that it auto-generates and that it                      |
| 38:11      | auto-alphabetises, so it creates the secondary trigger shortcut based on whatever's on the               |
| 38:19      | list at the time, but it vanishes as soon as it executes, so you don't get to keep it                    |
| 38:25      | on the screen.                                                                                           |
| 38:26      | So the way Rose is doing it actually keeps it, like in essence, a [[Stream Deck]] panel on                   |
| 38:31      | her screen.                                                                                              |
| 38:32      | Yeah, yeah, or it can do.                                                                                |
| 38:35      | I don't have it hang around for most of them, but it is very nice to be able to pop up a                 |
| 38:41      | pallet of macros at various times, and they are alphabetised, I should mention, the very                 |
| 38:46      | least the one I'm looking at, which is the Automatrix one right now, is alphabetised                     |
| 38:50      | for me, so it's got all those options.                                                                   |
| 38:52      | Yeah, long press, I guess we kind of went down a rabbit hole there, but man, long press                  |
| 38:57      | is a cool trigger, and we only have so many keys on our keyboards, and whether using it                  |
| 39:04      | with an app-specific group or long press, you can absolutely find a way to get all your                  |
| 39:11      | automations onto your keyboard.                                                                          |
| 39:14      | That is really great, but of course, there's a lot more ways to trigger [[Keyboard Maestro]],                |
| 39:18      | which we should dive into.                                                                               |
| 39:21      | This episode of The Automators is brought to you by TextExpander.                                        |
| 39:25      | Go to textexpander.com/podcast and get 20% off your first year.                                    |
| 39:31      | With TextExpander, you can keep everything consistent and accurate.                                      |
| 39:35      | In our fast paced world, things change constantly, and errors in messaging can have significant          |
| 39:40      | consequences.                                                                                            |
| 39:42      | TextExpander lets you make approved messaging available to every team member instantly with              |
| 39:47      | just a few keystrokes, so your team stays consistent, current, and accurate.                             |
| 39:53      | With TextExpander, you can get your message right every time.                                            |
| 39:56      | Expand content that corrects your spelling and keeps your language consistent with just                  |
| 40:00      | a few keystrokes, so your team members always know the right message for the right person                |
| 40:05      | at the right time without relying on memory or copy and paste.                                           |
| 40:09      | I'm a TextExpander for Team Subscriber.                                                                  |
| 40:11      | I pay every year.                                                                                        |
| 40:12      | I've got a few people helping me out with customer support, and we find this an incredibly               |
| 40:16      | useful tool.                                                                                             |
| 40:18      | But I've heard from listeners that have companies with thousands of people and are also using            |
| 40:22      | it.                                                                                                      |
| 40:23      | Whether you're a big company or a little company, TextExpander can help you with your messaging          |
| 40:28      | and getting consistent customer support out the door.                                                    |
| 40:31      | And that's just for the business-y side of it.                                                           |
| 40:33      | I'm also an automator, and I love TextExpander because it gives me so many automation tools              |
| 40:38      | and ways to solve little problems very quickly.                                                          |
| 40:42      | When I get the reports from TextExpander telling me how many hours and days it's saved, it's             |
| 40:47      | just shocking to me.                                                                                     |
| 40:48      | But I use the app all the time, and I love it.                                                           |
| 40:52      | As a listener of automators, you can get 20% off your first year.                                        |
| 40:56      | Just visit TextExpander.com/podcast to learn more about TextExpander and let them                 |
| 41:01      | know you heard about it here on the Automators Podcast.                                                  |
| 41:04      | As again, that's TextExpander.com/podcast for that 20% off your first year.                       |
| 41:09      | And our thanks to TextExpander for their support of the automators and all of RelayFM.                   |
| 41:15      | So, David, I thought it would be quite fun if we shared with some of the listeners some                  |
| 41:19      | of the other triggers that we're using and then what actually happens when we use those                  |
| 41:25      | triggers.                                                                                                |
| 41:26      | Because I know that you mentioned before like you're using Control L and [[Obsidian]] to make                |
| 41:31      | certain things happen.                                                                                   |
| 41:33      | And I'm using Command C. When I'm in one particular air table, there's something that when I             |
| 41:38      | copy it, I wanted actually to end up being reformatted.                                                  |
| 41:43      | And so I have a macro that only runs when, so this is actually in a group where it requires              |
| 41:51      | me to be using [[Safari]] and very specifically requires me to have a window title that's                    |
| 41:56      | got the window title of this air table.                                                                  |
| 41:58      | And then when I hit Command C, then it reformats the text on my keyboard.                                |
| 42:03      | And that's all it does.                                                                                  |
| 42:04      | And that is very useful.                                                                                 |
| 42:06      | And I know that you probably have lots of other triggers as well.                                        |
| 42:10      | Yeah.                                                                                                    |
| 42:11      | I mean, it depends on what you're doing.                                                                 |
| 42:14      | Like, there are a lot of good hardware related triggers like plugging in a USB device.                   |
| 42:19      | And the [[Keyboard Maestro]] field guide I broke down when I had where when I plug in the scanner,           |
| 42:25      | it sets up the computer for scanning because you can have a do that.                                     |
| 42:29      | A lot of people also do that when they like plug in an external drive that they set up                   |
| 42:33      | for doing things.                                                                                        |
| 42:34      | Or if you plug in an SD card that's got, you know, your camera name on it, that it opens                 |
| 42:39      | up photo processing tools for you.                                                                       |
| 42:43      | And that's really nice, you know, the idea of something external has just plugged into                   |
| 42:48      | your computer and then have something happen.                                                            |
| 42:53      | Other kind of grouping is Wi-Fi, you know, and this is an existing trigger that's been                   |
| 42:58      | there for a long time.                                                                                   |
| 42:59      | But if you connect your computer to a specific Wi-Fi and a lot of people, this is work, but              |
| 43:04      | it could also just be like Starbucks or whatever.                                                        |
| 43:08      | Usually that means you want to do a specific kind of work and having it go ahead and set                 |
| 43:14      | that up for you automatically based on your Wi-Fi signal is really handy.                                |
| 43:20      | Yes.                                                                                                     |
| 43:21      | Yeah.                                                                                                    |
| 43:22      | One of course is power status.                                                                           |
| 43:25      | And this, I wouldn't necessarily recommend using this for people who are running their                   |
| 43:30      | Mac on a UPS.                                                                                            |
| 43:31      | I would use the Macs built-in stuff to automatically shut your Mac down rather than far me out           |
| 43:36      | to keyboard my server list just in case because, you know, Mac OS can do that.                           |
| 43:40      | But this is great for a laptop where, you know, you could be taking it around the house                  |
| 43:44      | and when you unplug it, you're probably going to want your Windows and everything rearranged             |
| 43:48      | automatically for you because you're going to go sit on the sofa where it's nice and                     |
| 43:52      | comfy instead of sitting at your desk.                                                                   |
| 43:53      | Or when you plug it back in, you want it to go, oh, wait, yeah, I'll just take everything                |
| 43:57      | that you're doing and put this in the places that you usually have it.                                   |
| 44:02      | And that is great.                                                                                       |
| 44:03      | I'm combining that with [[Moom]] because [[Moom\|Moom's]] kind of a subroutine and I have [[Moom]] rearrange               |
| 44:08      | certain Windows for me, but I do that through [[Keyboard Maestro]] a lot of the time because                 |
| 44:14      | I just chain all of the automations together.                                                            |
| 44:17      | Yeah.                                                                                                    |
| 44:18      | I am.                                                                                                    |
| 44:19      | I'll tell you the truth though, my go to, you know, trigger like 90% or more of the time                 |
| 44:27      | is just keyboard shortcuts because they're just so handy and you can use them.                           |
| 44:32      | You can trigger them with other automations.                                                             |
| 44:34      | You can, and then of course the [[Stream Deck]] is a huge kind of [[Keyboard Maestro]] launching                 |
| 44:41      | device for me as well.                                                                                   |
| 44:42      | I was just looking, do they, do they only make the standard [[Stream Deck]] now that they                    |
| 44:47      | used to have three sizes, but just looking on [[Amazon]] real quickly.                                       |
| 44:50      | I don't even see that they have the big one for sale anymore.                                            |
| 44:54      | I did see them the other day when I was having a look and I was just having a look on their              |
| 44:59      | website and they do seem to be focusing on their [[Stream Deck#Stream Deck MK 2\|Stream Deck MK 2]], which is the medium               |
| 45:05      | size one or standard as it was before.                                                                   |
| 45:10      | But I wonder if they do still have the others and their, their, their web shop is not necessarily        |
| 45:15      | showing me everything.                                                                                   |
| 45:16      | But the medium says one is a pretty decent device, I have to say.                                        |
| 45:19      | Yeah.                                                                                                    |
| 45:20      | But I'm using all the buttons on that big one and I love it.                                             |
| 45:23      | And I, I mean, with the, and this is not a [[Stream Deck]] show, but you know, it can also                   |
| 45:28      | pop up different sets of buttons depending on what app you're in.                                        |
| 45:31      | And then you connect those with KM link, which is the, you know, the third party plug-in                 |
| 45:36      | to run a [[Keyboard Maestro]] script from your [[Stream Deck]] and suddenly like everything goes                 |
| 45:42      | so fast with buttons and, and also I am a massive user of conflict pallets as, as everybody              |
| 45:49      | already knows.                                                                                           |
| 45:50      | Yeah.                                                                                                    |
| 45:51      | Yes.                                                                                                     |
| 45:52      | For me, it's much the same.                                                                              |
| 45:54      | I am using the [[Keyboard Maestro]] integration with the [[Stream Deck]] in some places because                  |
| 46:00      | what it can do is it can change what a button looks like.                                                |
| 46:06      | So it can set an image, it can set the title, it could show an alert and so on and so forth.             |
| 46:12      | And that, that's really nice.                                                                            |
| 46:14      | And a great example of this is TJ Luoma is Fantastical, which he has and I'll put a link                  |
| 46:20      | to, he talked about this when he was on the show with us, but that is great.                             |
| 46:25      | I have that on every device I connect my, well, I mean, I have it everywhere because                     |
| 46:30      | I, I just have the, the, the [[Keyboard Maestro]] macro running all the time, but it is really               |
| 46:36      | handy to have that so that I can glance and go, yep, you know, it's black, I don't need                  |
| 46:40      | to worry.                                                                                                |
| 46:41      | Wow.                                                                                                     |
| 46:42      | Okay.                                                                                                    |
| 46:43      | That's right.                                                                                            |
| 46:44      | I need to go.                                                                                            |
| 46:45      | I've got a meeting like now.                                                                             |
| 46:46      | And that is very nice to have as a small indicator of, you know, there's stuff coming up.                |
| 46:51      | Be aware of this for me, which I really enjoy.                                                           |
| 46:54      | Yeah.                                                                                                    |
| 46:55      | But the, the ability to trigger these things off keyboard shortcut to me is, is really key.              |
| 47:02      | My primary, the, the [[Keyboard Maestro]] shortcut I trigger most often is my, my contextual                 |
| 47:11      | computing triggers.                                                                                      |
| 47:12      | And the one that I use by far the most is control option command M, which is the max                     |
| 47:18      | Sparky context and anything really I'm doing that is related to max Sparky can be triggered              |
| 47:26      | off that.                                                                                                |
| 47:27      | Like when I'm screen casting, I have some scripts that I use the centre of the screen                    |
| 47:32      | before I start recording.                                                                                |
| 47:34      | And in addition to other ways of triggering that I've added the, the option control command              |
| 47:39      | M so I can trigger it from there, pulling up the, the Google folder with the outline                     |
| 47:45      | for the automators show is also there because it dynamically sets itself up based in, and                |
| 47:53      | alphabet, alphabetically, if I just hit control option command M and then tap a, then it automatically   |
| 48:00      | filters that list down to just the automators ones.                                                      |
| 48:03      | So I can go into the folder where we do show planning or I can go to the air table, I can                |
| 48:07      | go to the Google docs and, and all that stuff just happens automatically.                                |
| 48:11      | So that is like a magical way for me not to have to remember a ton of shortcuts and be                   |
| 48:18      | able to add anything to what I want.                                                                     |
| 48:20      | Like when I'm working on a field guide right now, I'm working on the shortcuts for Mac                   |
| 48:23      | field guide.                                                                                             |
| 48:24      | All of the key links are in on that shortcut, but when I finish it, I'll remove them from                |
| 48:30      | the contextual list and then they won't show up.                                                         |
| 48:34      | And it's just a really, I have found it a super convenient way to trigger lots of automation             |
| 48:40      | very quickly.                                                                                            |
| 48:41      | Yes.                                                                                                     |
| 48:42      | Yes.                                                                                                     |
| 48:43      | I agree.                                                                                                 |
| 48:44      | And it is really nice because the other thing is, is you can take a keyboard shortcut that               |
| 48:48      | you use regularly and one application and you keep trying to do in another application,                  |
| 48:53      | but nothing happens or the wrong thing happens.                                                          |
| 48:56      | And you can remap it, which, you know, is what I did with the command, with the out then command         |
| 49:00      | in OmniFocus, if I'm in the inbox, then, you know, it fixes it for me.                                   |
| 49:06      | And that is very nice to be able to do things like that, as well as, of course, you can                  |
| 49:12      | not only interfere with things, you can also make things happen.                                         |
| 49:17      | So when I, well, actually, I realised the other day that I accidentally kept hitting                     |
| 49:23      | command Q in [[Safari]] instead of command W. I was having a couple of weeks where I hadn't                  |
| 49:29      | gone off by one error, where I was one key too far to the left.                                          |
| 49:32      | The problem with command Q is it's quit instead of closed tab.                                           |
| 49:36      | And I very rarely actually mean to quit [[Safari]] with the command Q keyboard shortcut.                     |
| 49:43      | So I just interfered with it and I popped up a little message to myself, an alert that                   |
| 49:48      | says, hey, do you want to quit [[Safari]]?                                                                   |
| 49:50      | Yes, no.                                                                                                 |
| 49:51      | And if I hit yes, then it does actually quit [[Safari]].                                                     |
| 49:54      | And if I hit no, then it doesn't quit [[Safari]].                                                            |
| 49:58      | So that saves me having to reopen [[Safari]], history, restore last open windows.                            |
| 50:04      | And you know, it's not a lot of work, but it's enough that it made it worth it.                          |
| 50:09      | Yeah.                                                                                                    |
| 50:10      | And an alternative way you could have done that is just made command Q, close a window,                  |
| 50:15      | I'm sorry, close the tab.                                                                                |
| 50:16      | Close the tab.                                                                                           |
| 50:17      | Yeah.                                                                                                    |
| 50:18      | No, sometimes I do mean to hit command Q, though, and then I can just hit return because                 |
| 50:21      | I've set it up because escape cancels a macro when you've got an input or an alert like                  |
| 50:26      | that pop up.                                                                                             |
| 50:28      | And if I didn't mean to quit, then I'll just hit escape.                                                 |
| 50:30      | And if I did mean to, then I just hit return and it closes it.                                           |
| 50:34      | So that makes it quite simple.                                                                           |
| 50:35      | What I was going to say is then you could use the long press command Q to quit.                          |
| 50:40      | So just make command Q, close tab and long.                                                              |
| 50:43      | Yeah.                                                                                                    |
| 50:44      | [[Google Chrome\|Chrome]] has that as a default where you have to hit command Q and then without letting                    |
| 50:47      | go of the command, hit Q again.                                                                          |
| 50:49      | And I hate it, but it turns out that's a preference you can disable in [[Google Chrome\|Chrome]].                           |
| 50:54      | Thank God.                                                                                               |
| 50:55      | I try to use [[Google Chrome\|Chrome]] as rarely as possible, but work requires me to make sure that stuff                  |
| 51:00      | that I write actually works in [[Google Chrome\|Chrome]] as well as [[Firefox]] and [[Safari]].                                     |
| 51:04      | So I do have to open [[Google Chrome\|Chrome]] on a semi-regular basis and finding out that I could disable                 |
| 51:09      | that preference meant I could actually get rid of the [[Keyboard Maestro]] macro that I had                  |
| 51:12      | to just hit the Q again, but it's worth knowing that I could have done it with [[Keyboard Maestro]].         |
| 51:19      | Yeah.                                                                                                    |
| 51:20      | So one of the big fixes, and this is just a small nerdy thing for me, is the way it handles              |
| 51:26      | variables with the version 10.                                                                           |
| 51:29      | Historically, when you added a new variable, because a lot of my [[Keyboard Maestro]] scripts                |
| 51:34      | and if you watch my field guide on this, you'll see this, is all have them where they collect            |
| 51:38      | a bunch of data with a user input screen, like, you know, give the name of the document                  |
| 51:44      | and the name of the person and the name of whatever.                                                     |
| 51:48      | And so you collect multiple variables at the top of the script, and then you start working               |
| 51:53      | with those variables with the various actions below it.                                                  |
| 51:56      | And historically, you had to run the macro to generate the variable names in the pre-populated           |
| 52:07      | list of variables.                                                                                       |
| 52:08      | Now, you could manually type them in again, but then if you made a typo that didn't work.                |
| 52:12      | So I much prefer the system where you can say, okay, here's all my variables.                            |
| 52:17      | Use this one.                                                                                            |
| 52:19      | And now it magically does that you don't have to run the macro.                                          |
| 52:22      | And it seems like a little change, but it was constantly a hassle for me when I was                      |
| 52:26      | working on building scripts.                                                                             |
| 52:29      | Yes.                                                                                                     |
| 52:30      | While we're talking about variables, I think variables are actually a really great thing                 |
| 52:34      | that we should probably talk about because it took me a while to wrap my head around                     |
| 52:38      | the fact that by default in [[Keyboard Maestro]], all variables are global variables.                        |
| 52:43      | So you create a variable in one macro, and it's available, and whatever it was set to                    |
| 52:48      | is also available in all of your other macros.                                                           |
| 52:51      | Yeah, that can get you in trouble.                                                                       |
| 52:53      | That can get you in trouble, but there are two prefixes that you can put on the front                    |
| 52:58      | of a variable name, which will change everything.                                                        |
| 53:04      | And so the first one is instance, which means this variable is available to this macro and               |
| 53:10      | any other macros run by this macro, which means our subroutines or submacros get all                     |
| 53:16      | of those variables.                                                                                      |
| 53:17      | And there's also local variables.                                                                        |
| 53:20      | And local variables are restricted to the macro that this is in, but they do, or at least                |
| 53:29      | I think they do, I'm now doubting myself as I say this, hang around.                                     |
| 53:32      | So if I run the macro again, then it will still have the information from last time.                     |
| 53:38      | And that is very handy because it means I mostly use instance variables myself because                   |
| 53:43      | once I'm done with the macro, I don't want those variables to come back.                                 |
| 53:47      | But it is really nice to have the ability to have some global variables because I use                    |
| 53:54      | those, for example, when I switch modes, which primarily through focus mode, to set my current           |
| 54:01      | mode as a variable that is available in [[Keyboard Maestro]].                                                |
| 54:06      | However, even though global variables are global, they're global to your computer and                    |
| 54:09      | they don't sync, which was something that caught me out the other day because I thought                  |
| 54:12      | that this might be something that syncs.                                                                 |
| 54:16      | But unfortunately, it turned out it wasn't, but that's okay.                                             |
| 54:18      | I figured out a couple of different solutions to that.                                                   |
| 54:22      | Yeah.                                                                                                    |
| 54:23      | Some other actions that came in is a lot of support for icons and graphical stuff.                       |
| 54:29      | I think that they realised that people are starting to use this more to build more user                  |
| 54:35      | interfaces.                                                                                              |
| 54:36      | You can set icons.                                                                                       |
| 54:39      | Prompting user input, by the way, I was mentioning earlier, got a nice update in addition to             |
| 54:44      | pre-populating variables.                                                                                |
| 54:47      | You can add date, time, and date and time picker fields.                                                 |
| 54:51      | So if you've got a script that involves date math, like I used to do a bunch of those through            |
| 54:57      | [[Keyboard Maestro]] that I'm now doing those through shortcuts where I pick a date and                      |
| 55:01      | we talked about this, Jeff Richardson.                                                                   |
| 55:03      | It says, well, what's 30 days after that or 45 days before that?                                         |
| 55:06      | Well, now you can put a date picker in there and they also added a slider field.                         |
| 55:11      | So you can have, if you have a slider, like you can pick, you know, one to four stars                    |
| 55:15      | and you can have a slider right in the user input.                                                       |
| 55:19      | I mean, I feel like that overall the user input screens and [[Keyboard Maestro]] are friendlier              |
| 55:26      | than they are in shortcuts because they give you a lot more options like I can add a checkbox            |
| 55:30      | or a slider or a date picker and kind of really build a very rough user interface that has               |
| 55:37      | the types of data I want to collect.                                                                     |
| 55:40      | Yes, yes.                                                                                                |
| 55:42      | And of course, if you're getting very nerdy with that, then there's the option to do                     |
| 55:45      | a custom HTML prompt, which I've seen some really great examples of in the [[Keyboard Maestro]]              |
| 55:50      | forums and I've used a couple of them, but I've not bothered to sit down and create one                  |
| 55:56      | myself yet just because there hasn't been the need.                                                      |
| 55:58      | And just as I was going, you know, actually I really could do with the date field, keyboard              |
| 56:02      | maestro 10 came out and so it's like, okay, I'm good now.                                                |
| 56:06      | But speaking of dates, there was something else that was added, which seems like a very                  |
| 56:09      | small point in this release, which is if you go to the edit menu, then there is the option               |
| 56:17      | to insert an ICU date field and then you've got all of the different time and date options               |
| 56:24      | available so you can insert time zone and it gives you examples of what each of these                    |
| 56:29      | look like as well.                                                                                       |
| 56:32      | And this is really great and it's been there for a while with the insert token option where              |
| 56:36      | you've got dictionaries, which are [[Keyboard Maestro]] dictionaries where you can have multiple             |
| 56:41      | keys and values, named clipboards, all of your variables.                                                |
| 56:47      | And then there's also calculations and so on, but date is in there as well where you                     |
| 56:51      | can just insert date and that is very handy for setting file names and stuff because there               |
| 56:57      | are certain things where I have it grab a bunch of files out of a folder and it moves                    |
| 57:01      | them and renames them and part of that just inserts the current date and time into the                   |
| 57:05      | name as it does it.                                                                                      |
| 57:07      | Yeah, but historically that insert date was a preset, you know, Peter had picked a few                   |
| 57:13      | you know, different formats or a short medium, I forget what they were all called.                       |
| 57:18      | But if you, with this ICU, you can absolutely like, you know, get it exactly the way you                 |
| 57:24      | want.                                                                                                    |
| 57:25      | Yes.                                                                                                     |
| 57:26      | And like for me, I'm very particular about the way dates get put into names and this                     |
| 57:30      | allows me to engineer that so I get the exact name or date I want.                                       |
| 57:36      | This was actually a bigger feature for me than I should have mentioned earlier because                   |
| 57:39      | this is something I immediately adopted.                                                                 |
| 57:41      | Yes, though I should mention, if you've got the ICU, if you use the ICU date time, this                  |
| 57:47      | is actually the same time and date formatting that shortcuts uses.                                       |
| 57:51      | And so by default, if you selected that and you said just date time generically, then                    |
| 57:56      | it would put EEE comma MMM comma D, sorry, space D for wise HM, which is just a three                    |
| 58:04      | letter day, a three letter month, the number of the day, the year in four digits, hours                  |
| 58:11      | and minutes, hours without a zero prefix and minutes with a zero prefix.                                 |
| 58:17      | But it is possible to just go in there and change those parts just the same way that                     |
| 58:22      | you would do in shortcuts.                                                                               |
| 58:23      | And of course, the other option that you've got is to be able to calculate the time and                  |
| 58:28      | say now plus 20 minutes or now minus 15 minutes or whatever, which is, again, great for that             |
| 58:36      | date and time that you were talking about.                                                               |
| 58:39      | This episode of Automated is brought to you by DEVONthink, the flagship product from                  |
| 58:43      | DEVONtechnologies.                                                                                    |
| 58:44      | DEVONthink is the most professional document and information management application for               |
| 58:48      | the Mac.                                                                                                 |
| 58:49      | It's the one place for storing all your documents, snippets, all bookmarks, and working with             |
| 58:53      | them.                                                                                                    |
| 58:54      | The integrated AIs assist you with filing and searching or the extensive search language                 |
| 58:58      | with advanced billions of search operators means you're never going to not find something.               |
| 59:03      | DEVONthink features a flexible sync system that supports many cloud services or lets                  |
| 59:07      | you synchronise over the local network too, with everything securely encrypted.                          |
| 59:11      | This gives you the choice for however syncing works best for you.                                        |
| 59:14      | It has smart rules and flexible reminders that let you automate all parts of your workflow               |
| 59:18      | and delegate boring, repeating tasks.                                                                    |
| 59:21      | Let DEVONthink automate your data with rules you define.                                              |
| 59:25      | DEVONthink's AppleScript dictionary is one of the largest on the Mac.                                |
| 59:27      | There's no part of DEVONthink that can't be automated.                                                |
| 59:30      | Extend DEVONthink's functionality with your own commands by adding them to its scripts                |
| 59:33      | menu.                                                                                                    |
| 59:35      | Open templates can have scripts inside, and you can set up new documents with data from                  |
| 59:38      | placeholders or inserted by your own AppleScript code.                                                  |
| 59:42      | And of course, there's so much more, from an iOS companion app to email archiving,                       |
| 59:45      | scanning, or even an embedded web server for securely sharing your data with the team.                   |
| 59:50      | Personally, I'm really loving batch processing and rules.                                                |
| 59:54      | So everything that you can do in a rule you can do with batch processing, which means                    |
| 59:57      | that that's great for one-off tasks, and then once I've figured it out, I can turn                       |
| 01:00:01   | it into a rule, which is even better because all of my work does double duty.                            |
| 01:00:05   | You should use DEVONthink if you've got documents and you're going to need to find                    |
| 01:00:09   | what's where, and you don't necessarily want to have to do all the filing yourself,                      |
| 01:00:13   | but you need everything to be available everywhere.                                                      |
| 01:00:16   | And I have to say, being able to find something, whether I archived it and filed it on my Mac            |
| 01:00:20   | or my laptop or my phone, really makes my life much easier.                                              |
| 01:00:25   | You can get 10% off DEVONthink 3 or upgrade to it right now.                                          |
| 01:00:28   | Just go to DEVONtechnologies.com/Automators, that's DEVONtechnologies.com/Automators       |
| 01:00:32   | for 10% off.                                                                                             |
| 01:00:33   | I'll thanks the DEVONtechnologies for their support of this show and all of Relay FM.                |
| 01:00:38   | All right, so what are some other things you're doing with [[Keyboard Maestro]] these days,                  |
| 01:00:42   | Rose?                                                                                                    |
| 01:00:43   | Well, I mean, there's a lot of things which are kind of similar to other things that I've                |
| 01:00:48   | got, which are things like when I hit save in PHPStorm, it activates my terminal to give                 |
| 01:00:56   | me a second to look at the information that's being processed and whether or not work is                 |
| 01:01:01   | updating.                                                                                                |
| 01:01:03   | And then it activates [[Firefox]] for me to go ahead and refresh.                                            |
| 01:01:06   | But that only happens when I am not in the office, because otherwise, I found that I                     |
| 01:01:13   | was getting dragged back and forth between spaces because I use spaces when I'm just                     |
| 01:01:16   | using a laptop.                                                                                          |
| 01:01:18   | But it's been very nice to be able to just go, hi, look at this thing, okay, that's probably             |
| 01:01:23   | done now, now you can go over here and do that thing, because it's a sequence of commands                |
| 01:01:28   | that I do very frequently.                                                                               |
| 01:01:31   | But it's very nice to be able to do that.                                                                |
| 01:01:34   | And of course, there's everybody's favourite, a paste of plain text, which is what happens,               |
| 01:01:39   | the vast majority of the time, thanks to [[Keyboard Maestro]] interfering with my command V.                 |
| 01:01:43   | You know, what I've done recently, and this is a really dumb one, but I think people could               |
| 01:01:48   | appreciate it.                                                                                           |
| 01:01:50   | On iOS, I like the ability to use Memoji stickers when responding to email.                              |
| 01:01:56   | And like, sometimes people will send me something, and I just want to give them a thumbs up,             |
| 01:02:00   | but I want to make it the sparky thumbs up from the Memoji, right?                                       |
| 01:02:04   | Memoji, Memoji.                                                                                          |
| 01:02:07   | How do you say that?                                                                                     |
| 01:02:08   | Memoji.                                                                                                  |
| 01:02:09   | I go with Memoji.                                                                                        |
| 01:02:10   | Because Memoji sounds like a drink, you know, honestly.                                                  |
| 01:02:13   | But anyway, so the Memoji of me with my thumbs up and on the iPhone iPad, that's super easy.             |
| 01:02:19   | And I wanted to make that easy on the Mac.                                                               |
| 01:02:22   | So in the [[Apple Mail]] group, so the app colon mail, in that group, I created a set of scripts,            |
| 01:02:33   | and all it does is it hits command R, which is reply.                                                    |
| 01:02:39   | And then it pays a special clipboard.                                                                    |
| 01:02:42   | And what I did was I went on the iPad, I believe I did on my iPad, and I just looked at the              |
| 01:02:48   | list of Memoji's, and I did screen grabs of the various ones, the one with my thumbs                     |
| 01:02:55   | up, the one with the heart in my eyes, a couple of different ones, okay?                                 |
| 01:02:59   | And then, so I had all these little image files, and I saved them to [[Keyboard Maestro]]                    |
| 01:03:04   | as saved clipboards, because in [[Keyboard Maestro]], you can have a bunch of clipboards.                    |
| 01:03:09   | So I've got all these images, and I gave them a specific name, it's Memoji-call-me, Memoji-celebrate,    |
| 01:03:17   | or curse, and I've got a bunch of the ones that I'd saved.                                               |
| 01:03:22   | And so now in [[Keyboard Maestro]], in [[Apple Mail]], I hit command R, and then here, let me just               |
| 01:03:29   | go look and make sure I'm getting this right.                                                            |
| 01:03:31   | I hit command R, I wait 0.3 seconds, because, you know, wait is always there, pause.                     |
| 01:03:37   | And then I paste the named clipboard, and then I, and you can select, you know, in the                   |
| 01:03:43   | past named clipboard, you can select which one, and I've got this big list of them, because              |
| 01:03:48   | I've saved them all as named clipboards.                                                                 |
| 01:03:50   | They all start with Memoji.                                                                              |
| 01:03:52   | And then I pause another 0.2 seconds, and I hit shift command D. So if I hit command                     |
| 01:03:58   | R, I pick, I select, and then I select with the conflict palette, in essence, you know,                  |
| 01:04:03   | to you for thumbs up.                                                                                    |
| 01:04:05   | It posts the one of my thumbs up, and then it sends it, and then it can archive and,                     |
| 01:04:11   | you know, save the email off at the same time if you want.                                               |
| 01:04:15   | And I find it really useful.                                                                             |
| 01:04:17   | And then, then I like that so much that I said, well, what if I just want to paste them                  |
| 01:04:21   | Memoji, like I said, drink again, didn't I?                                                              |
| 01:04:24   | I want to paste the Memoji, but I don't want to just send it off.                                        |
| 01:04:28   | I want to put that in the middle of a message somewhere, then I just added a different one               |
| 01:04:32   | that is control E. And that just gives me a conflict, you know, paste from palette.                      |
| 01:04:40   | It cuts out all the other stuff.                                                                         |
| 01:04:42   | And I only use them in mail, but on my Mac, it gives me the ability to use Memoji's effectively          |
| 01:04:48   | in mail.                                                                                                 |
| 01:04:49   | And I kind of like that.                                                                                 |
| 01:04:50   | Well, I have a potential small enhancement to that for you, David.                                       |
| 01:04:53   | All right, give it to me.                                                                                |
| 01:04:55   | Because if you send a Memoji to somebody, or an Animoji, then open messages on your Mac.                 |
| 01:05:03   | You can drag that out, and it's a PNG, so it doesn't have the background, and it's really                |
| 01:05:07   | high res.                                                                                                |
| 01:05:08   | Oh, really?                                                                                              |
| 01:05:09   | So that could be a little enhancement for you, because it's quite nice to have those,                    |
| 01:05:14   | because otherwise, if people are looking at it in dark mode, and it's got a white background             |
| 01:05:16   | or a black background, it looks a bit odd.                                                               |
| 01:05:18   | That would be good.                                                                                      |
| 01:05:19   | And the way I had done it, I don't know if I removed the background, but I resized them                  |
| 01:05:24   | all to be relatively small.                                                                              |
| 01:05:26   | Because when I first started experimenting with it, it was this massive sparky with                      |
| 01:05:30   | his thumbs up, and that was not good.                                                                    |
| 01:05:33   | But I don't know that I necessarily removed the background.                                              |
| 01:05:35   | So I kind of like them smaller, but I don't want them to have a white background.                        |
| 01:05:41   | You're right.                                                                                            |
| 01:05:42   | That's not good.                                                                                         |
| 01:05:43   | Yeah.                                                                                                    |
| 01:05:44   | But I actually have kind of following on from a bonus tip that's not [[Keyboard Maestro]]                    |
| 01:05:50   | specific, but it is related to it.                                                                       |
| 01:05:52   | I have two PopClip extensions that I use for [[Keyboard Maestro]].                                          |
| 01:05:57   | Because when you type in a variable in [[Keyboard Maestro]], if you're not using the Insert                  |
| 01:06:03   | Token option, which does this for you, then you need to type percent variable percent                    |
| 01:06:09   | name of variable percent sign.                                                                           |
| 01:06:12   | And that can be a little bit frustrating at times.                                                       |
| 01:06:16   | And so I created a teeny tiny PopClip macro, which only is available to me in Keyboard                  |
| 01:06:21   | Maestro that just takes whatever is selected and then puts percent variable percent in                   |
| 01:06:27   | front of it and a percent sign at the end.                                                               |
| 01:06:28   | Yeah.                                                                                                    |
| 01:06:29   | Generates the variable code.                                                                             |
| 01:06:30   | And so it turns it into a variable for me.                                                               |
| 01:06:33   | And that is really nice to have.                                                                         |
| 01:06:36   | And then another one is if you copy the UUID of a [[Keyboard Maestro]] macro, then you can                   |
| 01:06:43   | put this into a [[URL Schemes\|URL scheme]] to run the macro, which means that you can do it from other                   |
| 01:06:48   | places.                                                                                                  |
| 01:06:50   | And so I have a match for that.                                                                          |
| 01:06:54   | So it looks specifically for something that's got a UUID format to make this available to                |
| 01:07:00   | me or not available as the case may be.                                                                  |
| 01:07:02   | And then if I've got that selected, then it gives me the option to convert it into a Keyboard            |
| 01:07:07   | Maestro [[URL Schemes\|URL scheme]].                                                                                      |
| 01:07:09   | It just prefixes it with KM Trigger or whatever it is.                                                   |
| 01:07:13   | I've forgotten now because I don't have to type it, but it is quite nice to do that.                     |
| 01:07:18   | And that has made it a tiny bit easier to use [[Keyboard Maestro]] because it was already                    |
| 01:07:25   | pretty darn easy, but that's just made things slightly better.                                           |
| 01:07:28   | Yeah, I did that variable trick once.                                                                    |
| 01:07:30   | I was making a macro at some point, and the insert token thing was getting on my nerves.                 |
| 01:07:35   | So I made a TextExpander macro that just puts in the necessary text with the clipboard                  |
| 01:07:40   | contents for the variable name.                                                                          |
| 01:07:43   | So I would just copy the name of the variable somewhere in the document and then hit the                 |
| 01:07:47   | TextExpander snippet.                                                                                   |
| 01:07:49   | A funny thing about it is you can't put spaces in the variable names in [[Keyboard Maestro]],                |
| 01:07:53   | which a lot of times when I grew up doing programming, the basic stuff I did, you could                  |
| 01:07:59   | never do that.                                                                                           |
| 01:08:00   | But that still throws me a little bit when you put space in the name of the variable,                    |
| 01:08:05   | but it does it fine, and it's all good.                                                                  |
| 01:08:08   | Yes, it is very nice to do that.                                                                         |
| 01:08:11   | And I do think that there is one thing that I want to give a shout out to because this                   |
| 01:08:16   | action is so insanely powerful, and I think a lot of people have completely and utterly                  |
| 01:08:21   | missed the existence of this action, David, because it sounds really boring when you look                |
| 01:08:27   | at it.                                                                                                   |
| 01:08:28   | It's the filter action.                                                                                  |
| 01:08:30   | And you would think, okay, that it's what, it just filters things, but you can change                    |
| 01:08:36   | text or calculations or files to all sorts of things, and you can actually change the                    |
| 01:08:44   | capitalisation of stuff.                                                                                 |
| 01:08:47   | And you can also pad numbers, HTML encode, HTML decode, get [[URL Schemes]] of things, trim                  |
| 01:08:54   | white space, so get rid of unnecessary spaces and returns at the start and the end of something,         |
| 01:09:00   | wrap it in something, or unwrap, and sort lines, reverse the sort, zap control characters,               |
| 01:09:07   | et cetera.                                                                                               |
| 01:09:09   | It can do so much stuff.                                                                                 |
| 01:09:11   | It is absolutely ridiculous, and I love this action so much.                                             |
| 01:09:16   | I always forget what it's called, and I have to go looking for it, but it is really, truly               |
| 01:09:21   | a great action to just know that it exists because it really does solve a whole bunch                    |
| 01:09:29   | of the problems that I thought I had, but it turns out I don't, because I was trying                     |
| 01:09:34   | to pad a number, and then I realised I was searching the forums, and somebody had said,                  |
| 01:09:39   | oh, you can just use the filter action for that, and yeah, you can.                                      |
| 01:09:43   | So my numbers could all be four digits long, which is great.                                             |
| 01:09:47   | And you can apply that to the system clipboard, so it actually performs a transformation not             |
| 01:09:53   | on your screen, but in the clipboard, which the nerd part of me loves that so much that                  |
| 01:10:00   | I'm fixing things in the clipboard before I even put it on the screen.                                   |
| 01:10:05   | I don't know why that gives me so much joy, Rose, but that is one of my favourite things                  |
| 01:10:10   | about [[Keyboard Maestro]], so I built a whole bunch of them, and I use option shift T, not                  |
| 01:10:17   | actually control shift T, I just had to test it, again, a conflict palette, because that's               |
| 01:10:21   | what I do apparently, but I can get word count, I can create a markdown link, I can put a                |
| 01:10:28   | red strike through, I can remove formatting, there's a whole bunch of stuff I can do, and                |
| 01:10:33   | there's other ways to do this stuff, but I've got it all attached to this one keyboard shortcut,         |
| 01:10:38   | and then occasionally I come up with really weird ones, like I have one called "deobsidify",              |
| 01:10:44   | and what that does is it removes all the square brackets, so if I've got some text that I've             |
| 01:10:48   | had [[Obsidian]] in and had a bunch of links in it, I can remove all those when I'm pasting                  |
| 01:10:53   | it somewhere else with the same, with a filter applied in the system clipboard, you know,                |
| 01:11:00   | and that's actually using search and replace system clipboard using a string, that's a                   |
| 01:11:04   | little bit of a different command than filter, but it works the same way, and I put it with              |
| 01:11:07   | the key, same shortcut trigger, and man, I love that.                                                    |
| 01:11:12   | Yes, yes, it really is great, and I have to say it's one of these things where it wasn't                 |
| 01:11:18   | until I sat down again and had a little bit of time to just look through that I went,                    |
| 01:11:24   | actually there's a whole bunch of other problems that I can also solve with [[Keyboard Maestro]],            |
| 01:11:28   | because I sat down to look at it, and I'm very glad I did, because I'm always using                      |
| 01:11:34   | [[Keyboard Maestro]], and I'm never really thinking about it, but it was definitely amazing and              |
| 01:11:39   | eye-opening once again to go, oh, wow, that's an awful lot of things that I could be doing               |
| 01:11:43   | that I'm currently not doing, or, oh, there's an action to open a system preference pane                 |
| 01:11:49   | or send a mail message, I hadn't thought about using that, I will save this for another time,            |
| 01:11:55   | and then it's kind of floating around in my head for the next time that I have a problem                 |
| 01:11:59   | that I could solve, and [[Keyboard Maestro]] pops into my head.                                              |
| 01:12:03   | Yeah, I agree. Well, congratulations to Peter for getting out version 10. Lots of really nice            |
| 01:12:11   | improvements with this app, it continues to evolve, I love it, and it's something that                   |
| 01:12:18   | all automators should be looking into. If you want to learn more, we've got several shows,               |
| 01:12:24   | we've dedicated to it, and if you listen to almost any guest show, it comes up at some point.            |
| 01:12:29   | I've got a [[Keyboard Maestro]] field guide, I mean, there's just a lot of ways to learn this app,           |
| 01:12:35   | and I strongly recommend you do so. Yeah.                                                                |
| 01:12:39   | Unrelated, we have been getting some email from folks asking more about focus modes,                     |
| 01:12:45   | we gave it a whole show a month or two ago, but it is still relatively new, I thought it might           |
| 01:12:51   | be fun to take a few minutes just to check in, Rose, are you still using focus modes and                 |
| 01:12:56   | have your workflows changed much since we last talked? Yes, I am using focus modes,                      |
| 01:13:01   | and my workflows have changed a little bit. I've started adding a couple of ad hoc focus modes,          |
| 01:13:09   | so I'll create a focus mode for something that I'm doing for a week or so, and then I'll get rid         |
| 01:13:14   | of it again. I'm able to do this because I'm not maxing out my focus modes on you, but it's been         |
| 01:13:20   | quite useful for me to be able to do that just so that I can say, right, this week I'm doing this,       |
| 01:13:27   | and what I've decided is probably I will just keep one focus mode and rename it on a regular             |
| 01:13:32   | basis to whatever it is that I am focusing on for the week, but it is very nice to do that,              |
| 01:13:39   | because then I get rid of excess notifications from all of the other things as well, and I've            |
| 01:13:46   | also been using this to trigger keyboard moisture macros because I have my phone just send the           |
| 01:13:55   | command over to keyboard moisture to have some stuff happen for certain focus modes,                     |
| 01:13:59   | which is very nice. Yeah, I am using them more than ever. I mean, with me shutting down the              |
| 01:14:04   | law practice, it actually made it a lot easier for me to really dial in focus modes. I don't have to     |
| 01:14:09   | worry about letting client calls through anymore, so I'm using them a lot. I'm in my podcasting          |
| 01:14:16   | focus mode right now as we record this. Honestly, it is such a quality of life improvement for me        |
| 01:14:25   | to have these triggered. I can't imagine not having them. As we talked about on that show,               |
| 01:14:33   | I'd like to see them add some more features. I'd like to see kind of the allow list and                  |
| 01:14:38   | do not allow list. I'd like to see more control for the user on both sides of that.                      |
| 01:14:42   | I would like to see more focus modes. I guess I'm in education because I've used up all of               |
| 01:14:49   | mine, but I can think of a lot of nice ways to slice this onion. If I just add some more,                |
| 01:14:55   | I don't know why it has to be limited really. I mean, why can't it be 100? I mean, what does it          |
| 01:15:00   | matter? Yes. I do wonder some of this is because there's a limited amount of space even on a             |
| 01:15:07   | max phone in the control centre to show these, but it could scroll. The home buttons do scroll           |
| 01:15:16   | if you've got a lot of icons in one of the home rooms that you open, or they could just give you         |
| 01:15:23   | an option to show only some of them in there and just toggle on and off or rearrange them                |
| 01:15:31   | to put them into the control centre, which is great. Of course, I would love more icons.                 |
| 01:15:37   | I really want just everything that's an FSF symbol to be available as a focus mode icon.                 |
| 01:15:42   | That just be everywhere. They have FSF symbols now. When you're choosing a shortcut icon,                |
| 01:15:48   | they should give you the whole set when you're choosing a focus mode. I really don't understand          |
| 01:15:53   | when they do these limited sets. I guess it makes it easier for people who                               |
| 01:15:58   | don't want to have to swim through all this stuff. I mean, they can give you a limited                   |
| 01:16:01   | suggested set and then just have a tiny more dot dot dot button at the bottom, which just                |
| 01:16:06   | pops open a huge picker. But all of the FSF symbols have got names, and a great example                  |
| 01:16:11   | of an app that's doing this is cheat sheet. Cheat sheet gives you the option to search,                  |
| 01:16:16   | and they've got aliases for a lot of the icons in there as well. If you search for a package,            |
| 01:16:23   | then I said, I don't think it was package. I was searching for mail and I got envelope.                  |
| 01:16:27   | That was it. The fact that that works and that's available, other developers have                        |
| 01:16:34   | done this. [[Apple]] does not, from my understanding, have a limited number of developers.                   |
| 01:16:39   | I'm sure they're all very busy, but it'd be really great if we had the FSF symbols everywhere,           |
| 01:16:43   | and maybe even take a leaf out of the OmniFocus four book and give us an option to just choose           |
| 01:16:49   | any colour we like. Because yes, it's slightly limiting to have to think, okay, which shade               |
| 01:16:55   | of blue is this one going to be? Or which shade of pink? And yeah, I mean, it's fine,                    |
| 01:17:00   | but it would be lovely to have more. I've been lately doing this thing where I just got the              |
| 01:17:05   | [[Apple]] Six Colors, and I've been using them and a lot of stuff I do lately. And just like,                |
| 01:17:11   | that is like my go-to set of colours for stuff like this. I'm using it for my calendars. If you           |
| 01:17:16   | look at the MacSparky.com web page, the Six Colors show up in different ways, you know,                   |
| 01:17:22   | like on the lapse page I'm using them. And it just makes it kind of easy. They're not very,              |
| 01:17:28   | you know, they're not, they're friendly to each other, but they're not close to each. It's not           |
| 01:17:32   | like different shades of blue. They are very different colours, but it's kind of fun to have              |
| 01:17:36   | them. But yeah, I would like to do that. And when I hear from people about the focus mode,               |
| 01:17:43   | it seems like it's one or the other. They're like, I don't, I just don't get it. I don't                 |
| 01:17:47   | understand why this exists, or I love it so much. There's nobody that seems to be in the middle.         |
| 01:17:51   | And I am very much still in love with them. And I really like the, the ability because                   |
| 01:17:59   | do not disturb is just so extreme. And it makes it hard to work because sometimes you do need to         |
| 01:18:05   | talk to people that you work with. So you punch a little hole for that person, but otherwise             |
| 01:18:10   | you're left alone. And that is exactly what we've wanted. Yeah, I'm a big fan. I hope that [[Apple]]         |
| 01:18:17   | continues to develop on it. I hope a lot of people are using it. I think that a lot of times,            |
| 01:18:21   | whether [[Apple]] gives something more attention depends on how much it gets adopted. So, you know,          |
| 01:18:27   | and they know that already, how many people are using it. So hopefully that means it will get            |
| 01:18:32   | more of it. But man, I am not like souring on this, or, or like it's not like falling by the             |
| 01:18:39   | wayside, like some features sometimes do for me. No, it's been very useful for me as well.               |
| 01:18:44   | Though I do, there is one little change that I would really love to see. And that is the allowed         |
| 01:18:50   | applications. Having [[Hazel]] show up on my iPhone very briefly made me extremely excited. And then         |
| 01:18:57   | I was incredibly disappointed. It would be really nice to have them group the apps that are allowed      |
| 01:19:03   | through by on this device, and then on other devices, just it doesn't even have to go beyond             |
| 01:19:10   | that. I would love it if they could show me, you know, that are on this device, on that device,          |
| 01:19:14   | and so on. If, you know, applications were multiple devices, just show them every time.                  |
| 01:19:18   | But it would be, you know, I would really like to have that ability, because if I'm trying to            |
| 01:19:24   | figure out, you know, like what, which of these was it that I was trying to crank down, because          |
| 01:19:28   | it feels like my phone is still buzzing a bit too much. If I could just see the applications that        |
| 01:19:32   | are buzzing, like, are able to buzz my phone in this focus mode, that would, that would really           |
| 01:19:36   | simplify things, because it is right now kind of messy going through looking at the large number         |
| 01:19:44   | of other, of all the apps that can come through. And I really do wish I could have                       |
| 01:19:53   | no caller ID enabled, because I nearly missed a phone call from my doctors the other day, and            |
| 01:19:57   | remembered by a grand total of two minutes before the time, and disabled my focus mode,                  |
| 01:20:02   | and then about half a second after I disabled it, it felt like my phone rang. So, yeah, that             |
| 01:20:08   | would have not been a good miss if I'd missed that. But fortunately, I didn't.                           |
| 01:20:13   | That is probably my biggest problem with it right now is that occasionally I do have a call come in      |
| 01:20:20   | that I never see, that I needed to be able to see. And the, and that, that would be a                    |
| 01:20:27   | solvable problem. I would hope that that gets fixed next year. But, but yeah, because like,              |
| 01:20:32   | if you're really digging in on focus mode, and you do have like a doctor call, or I had to get           |
| 01:20:39   | some tires replaced on a car, you know, and like, yeah, guy was calling and it wasn't coming through     |
| 01:20:44   | because, you know, focus mode. And it would be nice to, to be able to address that a little easier.      |
| 01:20:51   | Yeah, yeah, it would be great if you could have like, the ability to mark a contact as important         |
| 01:20:59   | for the next, like just like you can enable a focus mode for an hour until the end of an event,          |
| 01:21:06   | until the end of the day, until I leave this location. It would be great if you could mark               |
| 01:21:10   | a contact as important for that period of time. But I really need to figure out something with           |
| 01:21:15   | this no caller ID problem that I've got at work, or with my doctor, because they call out with no        |
| 01:21:21   | caller ID. And unless you are not in a focus mode, I've tried enabling all calls from the phone app      |
| 01:21:27   | and it still doesn't work. So I need to figure something out for that because this is driving            |
| 01:21:32   | me up the wall. And that's like, my doctors are the same way that they have the number they call         |
| 01:21:38   | from is like, it's like a burner number. They're just terrified that you'll call them back, I guess.     |
| 01:21:43   | Well, the thing is, is like, I understand how phones, this is work, it used to be a phone                |
| 01:21:47   | system admin in my old job. Among all the other things I did, they could set their outgoing              |
| 01:21:52   | caller ID to be the ID of the number of reception. So that then it would show up as like, show up        |
| 01:21:58   | as the doctor surgery generically, like this is not an unsolvable problem. But unfortunately,            |
| 01:22:04   | the solution that most practices have gone with at least in the healthcare sector seems to be,           |
| 01:22:08   | we're just not going to tell you who we are. And you're just going to have to answer the phone           |
| 01:22:13   | to everyone until, you know, you aren't expecting a call from us anymore, which is annoying.             |
| 01:22:19   | So focus mode, we're still fans. Yeah, we are indeed.                                                    |
| 01:22:22   | This episode of The Automators is brought to you by Hover. Make a name for yourself                      |
| 01:22:28   | and get 10% off any domain name. Just go to hover.com/automators.                                  |
| 01:22:35   | When you have a big idea, or even a little one, where do you go? Well, your business starts with         |
| 01:22:39   | a domain name. So for many entrepreneurs, Hover is that big leap. Hover has over 300 domain name         |
| 01:22:46   | extensions to choose from. So no matter what you want to build, there's a domain name waiting for        |
| 01:22:51   | it. And they have excellent technical support to answer any questions you may have. And they're          |
| 01:22:57   | dedicated to getting you online, not upselling you. Hover has a free who is privacy. So the bad          |
| 01:23:03   | guys don't get your information, a clean user interface, monthly sales on popular top level              |
| 01:23:09   | domains. And it's easy to see why Hover is the popular choice for people starting businesses.            |
| 01:23:14   | I own all of my domains through Hover, macsparky.com, on down. Just recently, I had a harebrained idea   |
| 01:23:21   | about getting more people to dress up when they visit Batu at Star Wars. So I bought a domain            |
| 01:23:27   | because I'm going to try and do something with it. And the first step for me was locking in domain.      |
| 01:23:32   | I did it at Hover. It just took a few minutes. And now I've added it to my stable. But it's not          |
| 01:23:37   | just for hobby ideas. It's also for your business. MacSparky.com was at Hover. When I had my law         |
| 01:23:43   | practice, the first thing I did was secure a domain at Hover for that business. Everyone likes an        |
| 01:23:49   | intuitive user experience and things that just work straight out of the box. So I know you'll            |
| 01:23:53   | appreciate Hover. Their user interface is really simple, clean and easy to navigate. It doesn't          |
| 01:23:59   | feel like they're trying to trap you into spending money you don't need to. So to buy your domain        |
| 01:24:04   | and start using it today, go to hover.com/automators and get that 10% discount on all new          |
| 01:24:10   | purchases. That URL one more time is hover.com/automators, A-U-T-O-M-A-T-O-R-S. Make a name        |
| 01:24:19   | for yourself with Hover. And our thanks to Hover for their support of the automators and all of RelayFM. |
| 01:24:27   | So Rose, what are some automation problems you've been struggling with or conquering lately?             |
| 01:24:33   | Well, I've had a number of different challenges that I've been solving recently,                         |
| 01:24:39   | including last month I had my accountant say, we're missing certain documents for your text return.      |
| 01:24:46   | Can we have copies of these things again? And of course, when I organised everything originally,         |
| 01:24:52   | I just kind of dumped it all in a folder and left it. And it was fine. It just wasn't particularly       |
| 01:24:58   | well-named because they wanted things on paper, blah, blah, blah. And so I had a bit of a mess           |
| 01:25:04   | that I needed to clean up with that and sorted out so I could find specifically the things that          |
| 01:25:09   | they needed and then send them over. And fortunately, they were willing to accept them via email a       |
| 01:25:15   | second time around. And so I had a lot of cleaning up to do on that folder. And so of course,            |
| 01:25:21   | my first part of call was [[Hazel]] because [[Hazel]] can do all sorts of things. And particularly,              |
| 01:25:27   | the contents contain match and then being able to do the named variables for custom text and             |
| 01:25:33   | custom date and then use those to rename files came in very, very, very handy because I was              |
| 01:25:41   | able to just pull things out. And then I realised that part of the reason why I have the folder          |
| 01:25:47   | full of files is because I hadn't been necessarily automatically collecting everything as the year       |
| 01:25:54   | went on. And so I have set up several automations now, which automatically grab different pieces         |
| 01:26:03   | of data from different places and pull them into [[DEVONthink]]. And [[DEVONthink]] has rules that run     |
| 01:26:08   | that automatically categorise stuff now. And I am very impressed with this because it is                 |
| 01:26:15   | so easy to do. And I've gone in completely restricting my [[DEVONthink]] database because                 |
| 01:26:18   | of this. Because of course, with all the custom rules and batch processing and things that you           |
| 01:26:23   | can do in there, it's kind of crazy how nerdy you can get. But I've been playing with custom             |
| 01:26:28   | metadata on that, too, to allow me to pull out the amount spent from documents so that I can see         |
| 01:26:35   | that in a column whilst I'm looking at all the documents. And that's been pretty nerdy and great.        |
| 01:26:41   | Yeah. I mean, [[DEVONthink]] really kind of has a version of [[Hazel]] inside of it with the rules. And       |
| 01:26:48   | when I was making the [[DEVONthink]] field guide, I was talking to those guys and                         |
| 01:26:52   | there's a few people on the inside of [[DEVONthink]] that are like super automators. And so               |
| 01:26:57   | they built all that to scratch their own itch. And you know, they're using it every day. So it           |
| 01:27:01   | works really well. And you can build an entire automation system inside [[DEVONthink]].                   |
| 01:27:07   | Yes. I guess we need to talk about that at some point. I guess we should probably go into that.          |
| 01:27:11   | Yeah. Yeah, we should. Because there's so much automation that you can do with it. I've got it           |
| 01:27:16   | pulling stuff out of [[Apple Mail]] and converting it to PDFs, all sorts of things. So yeah, there's         |
| 01:27:22   | definitely plenty that we can talk about there. But in the meantime, you'll be pleased to hear           |
| 01:27:26   | I got everything to my accountants in record time. They were expecting it to take me two weeks.          |
| 01:27:31   | And I got it back to them in two days, because I just had everything. Like I just created a rule.        |
| 01:27:38   | And I did a vast majority of the initial processing in [[Hazel]] just because it was what I was more         |
| 01:27:43   | familiar with at the time. And so I just created a rule and had it tidy up all things that belong        |
| 01:27:50   | to that rule and move it to another folder as part of it so I could just see the number getting          |
| 01:27:54   | smaller and smaller and smaller every time of files I needed to process and then create another          |
| 01:27:59   | rule for the next thing, go. And so on and so forth. And it did a great job. I was very impressed.       |
| 01:28:05   | Yeah, I agreed. So with the changes in my life, I have all these new ideas, right? It's like             |
| 01:28:12   | suddenly I get to scratch itches that I never had time to scratch before. And so in order to capture     |
| 01:28:19   | that, I've been calling them kind of content ideas for lack of a better term. But I have an idea         |
| 01:28:25   | about something, but I'm not sure if it's going to be a YouTube video or a podcast or a blog post        |
| 01:28:31   | or a MacSparky Labs thing. And so I don't want to have to filter that at the time I come up with        |
| 01:28:37   | the idea. I just want to capture the idea. Right. And I realised as I started thinking about it          |
| 01:28:43   | more, there's a couple of things I want to do. I want to capture the idea. I want to capture             |
| 01:28:48   | a tag on the idea, whether it's active or planning, because some of these ideas are things I want to     |
| 01:28:53   | act on right away, but most of them are not, because I have a lot of ideas right now. There's            |
| 01:29:00   | a lot of these things coming in. And then I also want the ability to capture the clipboard when I        |
| 01:29:06   | write it down, because a lot of times it'll be like, oh, here's a cool web service that I may            |
| 01:29:11   | want to do something with and I'll get a link to the web service. Or here's a sentence out of an         |
| 01:29:16   | email. Somebody asked me a question that I want to follow up and answer in more detail.                  |
| 01:29:20   | So I've got like some sort of clipboard thing I want to add to it. So I started breaking it down         |
| 01:29:26   | and I had two ways, two places I needed to solve the problem on the iPhone,                              |
| 01:29:32   | primarily the iPhone and the Mac. And so when I did it on the Mac, I decided to tackle it in             |
| 01:29:40   | [[Keyboard Maestro]]. So I made a, it's a context, it's in the MacSparky context and I actually             |
| 01:29:47   | put an X at the beginning of it because I have a bunch of them that start with C and I didn't            |
| 01:29:52   | want to have to type two letters. So if I hit, you know, control option command M and then X,            |
| 01:29:57   | it opens up an input dialogue that says, you know, what's the content idea? And I type that in           |
| 01:30:03   | and it's, and then it says, is it planning or active? And that's a multi-select as a keyboard            |
| 01:30:11   | maestro variable. And to do those, you just type the first option and then the pipe key,                 |
| 01:30:18   | I always call it the pipe, I don't know what it, the fancy.                                              |
| 01:30:20   | Yeah, the vertical line. Yeah. For me, it's next to the return key.                                      |
| 01:30:25   | Over the, yeah, exactly. So I put planning pipe key active. And if I put active                          |
| 01:30:32   | pipe key planning, then it would select active by default, but I want it's like planning by default      |
| 01:30:37   | because most of them are planning. But in the occasion that it's something I want to act on              |
| 01:30:41   | immediately, I can go in and mouse it and click it to active. And then there's a checkbox, which is      |
| 01:30:47   | a zero pipe one in, in the [[Keyboard Maestro]]. Right. So then I have a checkbox. If I put                  |
| 01:30:55   | zero pipe one, it's an unchecked checkbox. But if I put one pipe zero, it's a check checkbox. So you,    |
| 01:31:02   | the defaults in [[Keyboard Maestro]] are just basically which one you put first.                             |
| 01:31:06   | And so now the dialogue says, what's the idea? Is it active or planning? And do you have clipboard       |
| 01:31:12   | contents? And if I, you know, select the right boxes and I hit okay, it has, then it uses the            |
| 01:31:19   | if command doesn't use a switch because it's just one option. And it has two different sets of text      |
| 01:31:25   | it creates, you know, one with the clipboard attached and one without. And then, you know,               |
| 01:31:30   | then it sets the tag based on whatever I selected. And it creates this text that then it saves as a      |
| 01:31:37   | markdown file and saves to my [[Obsidian]] folder where I have content ideas. So it's not a super            |
| 01:31:43   | complicated script. And I shared this in the Max Berkeley labs, if people labs have already seen         |
| 01:31:48   | this. But, you know, the idea is I hit this so option command, control mx, and then I type in            |
| 01:31:56   | the content ID and hit return. And then I've saved it for future consideration. And it came out good.    |
| 01:32:01   | You know, it wasn't, like I said, the super complicated automation problem, but it did need              |
| 01:32:05   | automation because I didn't want to have to stop and like put all that together every time I did it.     |
| 01:32:11   | Yeah. In the text file, I have [[YAML]] data, which is kind of going deep catalogue here in [[Obsidian]]. But      |
| 01:32:17   | so there's additional tags and ways I can filter and [[Obsidian]] based on that stuff that's                 |
| 01:32:23   | automatically added. So I solved the problem on the Mac first, because that's where I spend most         |
| 01:32:28   | of my time working. But then I wanted to solve it on the iPhone. Right. So shortcuts? Shortcuts.         |
| 01:32:33   | [[Drafts]]. No, I could have done it with [[Drafts]], but I wanted to do it with shortcuts because there         |
| 01:32:38   | were some options. Like once again, is there a clipboard? Is there an active tag? And I could            |
| 01:32:44   | have done that in [[Drafts]] too. But on my iPhone, I have a similar contextual icon, like I have            |
| 01:32:52   | the contextual button on my Mac. And it's a shortcut, choose from menu shortcut. So I knew               |
| 01:32:58   | I could just add this right to the top of that list. And there's a little lightning bolt in my           |
| 01:33:03   | dock on my phone. So I tap that and very top button is new content idea. And it does the same            |
| 01:33:08   | thing. It'll grab the clipboard and allow me to tell it if it is a planning or active. And it            |
| 01:33:14   | creates it and it saves it locally to the [[Obsidian]] folder. In fact, I checked that over with you         |
| 01:33:23   | when I was doing it. Rose is my official shortcut proofreader, I guess you'd say. But you can do         |
| 01:33:31   | that. It's funny because with shortcuts, when you go to save a file, it really wants to put it in        |
| 01:33:37   | the short box, sandbox, right? Yeah. And they don't make it obvious, but you hit the replace button      |
| 01:33:43   | and then you can put it locally on your drive and you have to approve it the first time you run it.      |
| 01:33:47   | But because I use [[Obsidian]] with the [[Obsidian]] sink engine, I'm saving the [[Obsidian]] files                  |
| 01:33:53   | locally on my phone. It does effectively the same thing via shortcuts. Yeah, it is great                 |
| 01:34:00   | that we can do that. And it is not very intuitive that you can change that folder                        |
| 01:34:05   | to anything else. Because you tap on it and you have to then go back up a level or a couple of           |
| 01:34:12   | levels when it opens the picker. And it's not immediately obvious that you can do that,                  |
| 01:34:18   | especially because for years we could not. So I'm glad that we can do that now. And I have               |
| 01:34:25   | to say, I've been using that as well a little bit because I kind of stole your shortcut when             |
| 01:34:30   | you shared it with me a little bit, David. And I've been using it and I'm enjoying it. It's              |
| 01:34:35   | useful. And I've got it putting things into various different places, mostly [[Drafts]] with                 |
| 01:34:40   | different tags. But it's great to do that. I think someday we'll do an automated show                    |
| 01:34:45   | on [[Obsidian]] because there's some really excellent plugins in [[Obsidian]]. One of them is called Data        |
| 01:34:51   | View. And with Data View, you can say, give me a list of all notes that are tagged with content,         |
| 01:34:59   | the MacSparky and Active. And then that Active list, where I tag them Active, I can get a list          |
| 01:35:06   | of the five that are active for me. And then I can click that and go straight to the idea.               |
| 01:35:12   | And then the workflow right now for me, and I don't know if I'm going to automate this further,          |
| 01:35:16   | is then I decide, is this a YouTube, is this a whatever? And then I can reapply the template             |
| 01:35:21   | and even change and move the file if I need to. But for the beginning step, I really don't,              |
| 01:35:27   | I found myself, if I tried to think through something like, oh, this is a cool website,                  |
| 01:35:32   | I might want to do something with this. But if I try to figure out what I'm going to do with it,         |
| 01:35:36   | that is like a whole thing. And quite often, I'll say, well, this is a blog post, but then               |
| 01:35:41   | I'll get into it and really like and say, oh, no, this is a whole podcast episode. But, you know,        |
| 01:35:46   | so I'm trying to avoid making that decision about what I do with it until I actually spend time with     |
| 01:35:51   | it. Right. Yes. Yeah. That is, that is something that I think is quite important with ideas to           |
| 01:35:57   | be able to just grab them in a way that you can then do whatever you like with them. Judgment-free.      |
| 01:36:01   | So you're not, yeah. So you're not pigeonholed by things. Yeah. How about you? I've been playing         |
| 01:36:07   | with a lot of things recently. I've been creating some PopClip extensions, using the extension          |
| 01:36:12   | snippets feature that was introduced relatively recently. And it's great because you can just            |
| 01:36:18   | select an extension snippet. And then PopClip will suggest adding it to your PopClip library.          |
| 01:36:25   | So you don't have to download and install files anymore, you just select it and install it.              |
| 01:36:29   | And it means that you can also see how an extension is written, so modify it yourself.                   |
| 01:36:34   | So I've been stealing all of the things with that and modifying them. And it's great. I'm                |
| 01:36:39   | really enjoying that. And yeah, it's been very useful to be able to do that. And I've also been          |
| 01:36:47   | playing a little bit more with [[Drafts]], getting it to do more things entirely on its own,                 |
| 01:36:52   | without being fed data from shortcuts first, which means I can run the macro very easily                 |
| 01:36:58   | wherever I want, however I want, because it's just [[Drafts]] independent of any other requirements.         |
| 01:37:04   | So I've been pulling some more data in there, which has been quite nerdy, but good fun.                  |
| 01:37:10   | Yeah, there's just, there are good options now. You know, earlier I said, you know,                      |
| 01:37:13   | where's [[Keyboard Maestro]] on the iPhone? Maybe you can make the argument that it's [[Drafts]].                |
| 01:37:18   | I don't know. Yeah, maybe. At least if it's text related.                                                |
| 01:37:22   | Yeah. So [[Keyboard Maestro]] is great, and [[Drafts]] is exceptionally good for automating                      |
| 01:37:30   | anything to do with text, and even some things which aren't 100% text related.                           |
| 01:37:34   | I've actually got it creating some files for me in the [[Drafts]] folder, which then [[Hazel]] picks up          |
| 01:37:40   | and moves elsewhere. And that has been pretty useful to make sure that that actually does things.        |
| 01:37:48   | I think maybe there's a future show for us as well with some of these smaller tools that we're           |
| 01:37:53   | using, like PopClip is a great example. We mentioned it on the show, but we never really                 |
| 01:37:57   | go into it in depth, but it is an automation tool. Maybe we should like pick two or three of those       |
| 01:38:02   | and give a show where we break down two or three of those. Like I think [[BetterTouchTool]] is another     |
| 01:38:07   | good example where you can do some really great automation stuff. I'm not sure if it's worthy            |
| 01:38:12   | of a full show or not, but we'll look into that. Let us know if there's some little automation tools     |
| 01:38:17   | out there you want, and we'll do a future show on that. But yeah, automation, it's still fun.            |
| 01:38:25   | Oh yeah, so much fun. And I have to say, there are more things to automate than ever before,             |
| 01:38:31   | and I really enjoy the fact that that's the case.                                                        |
| 01:38:35   | All right. Well, we are the automators. You can find us over relay.fm/automators.                  |
| 01:38:41   | You can find our forums at talk.automators.fm. You can find the website at automators.fm.                |
| 01:38:46   | We have sponsors, and we are very thankful for them. Electric, TextExpander,                             |
| 01:38:51   | DEVONthink, and Hover. And we will see you next time. Goodbye, everyone.                                 |
