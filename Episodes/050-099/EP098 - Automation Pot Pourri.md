---
status: "incomplete"
fc-date:
  year: 2022
  month: 03
  day: 25
fc-category: "podcast"
podcast: "Automators"
published: 2022-03-25
duration: 5463
formattedduration: "01:31:03"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/98"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators098.mp3"
episode: 98
title: "98: Automation Pot Pourri"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David have several automation topics on the table in this episode including Shortcuts on the Mac, a Stream Deck check-in, and automating Obsidian. Also, they have thoughts on the new Mac Studio.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 098 Discussion](https://talk.automators.fm/t/98-automation-pot-pourri/13520)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[Fitbod (Sponsor)|Fitbod]] - Get stronger, faster with a fitness plan that fits you.
- [[New Relic (Sponsor)|New Relic]] - MoNeator, debug, and improve your entire stack.

# Show Notes
- [Run a shortcut while working on your Mac – Apple Support (UK)](https://support.apple.com/en-gb/guide/shortcuts-mac/apd163eb9f95/mac)
- [Automator: Folder Actions](http://www.macosxautomation.com/automator/folder-action/index.html)
- [Run shortcuts from the command line – Apple Support (UK)](https://support.apple.com/en-gb/guide/shortcuts-mac/apd455c82f02/mac)
- [Alfred - Bypass for Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/alfred/alfred_bypass_for_shortcuts/)
- [A Keyboard Maestro Plugin for Apple Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/2021/12/05/a-keyboard-maestro-plugin-for-apple-shortcuts/)
- [Bypass - Shortcuts Support for Stream Deck | ThoughtAsylum](https://www.thoughtasylum.com/2021/12/04/bypass-shortcuts-support-for-stream-deck/)
- [Hazel 5.1 Release Notes – Noodlesoft](https://www.noodlesoft.com/kb/hazel-5-1-release-notes/)
- [Obsidian](https://obsidian.md/)
- [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
- [arnau/obsidian-metatable: An Obsidian plugin to display the frontmatter section as a fully expanded table.](https://github.com/arnau/obsidian-metatable)
- [jplattel/open-note-to-window-title: Small Obsidian plugin that updates the window title with the current open note](https://github.com/jplattel/open-note-to-window-title)
- [SilentVoid13/Templater: A template plugin for obsidian](https://github.com/SilentVoid13/Templater)
- [Introduction - Templater](https://silentvoid13.github.io/Templater/)

# Transcription
  
| Time Index | Transcription                                                         |
| :--------- | :-------------------------------------------------------------------- |
| 00:00      | Welcome to the Automator's Podcast.                                   |
| 00:03      | I'm David Sparks and joined by my co-host                             |
| 00:06      | and your friend, Rosemary Orchard.                                    |
| 00:08      | How you doing, Rose?                                                  |
| 00:10      | I'm pretty great, David.                                              |
| 00:11      | How are you?                                                          |
| 00:11      | I'm excellent.                                                        |
| 00:12      | I have missed you because we got ahead.                               |
| 00:15      | And it's like I get itchy when I don't get to podcast                 |
| 00:19      | with Rosemary every week or two.                                      |
| 00:21      | So I'm glad to be talking to you again on a microphone.               |
| 00:24      | Oh yeah, yeah.                                                        |
| 00:25      | Yeah, we have a fun show today.                                       |
| 00:27      | We're calling it Automation Pop Hurry                                 |
| 00:29      | because we've got all these little things                             |
| 00:30      | we've been wanting to share with the audience,                        |
| 00:32      | but we're like, ah, that's not really a whole show.                   |
| 00:35      | What do we do with it?                                                |
| 00:36      | And we said, you know what?                                           |
| 00:37      | We've got enough of those things                                      |
| 00:38      | that that is a whole show.                                            |
| 00:40      | So this is gonna be a fun one, densely packed.                        |
| 00:43      | We're gonna be talking about things like shortcuts for Mac            |
| 00:46      | and [[Stream Deck]] tricks                                                |
| 00:48      | because there's a whole bunch of new stuff                            |
| 00:50      | and obsidian, which isn't really enough for a whole show,             |
| 00:54      | but I do have a bunch of stuff to share                               |
| 00:55      | with what I'm automating [[Obsidian]].                                    |
| 00:57      | So we've got a bunch of cool topics today                             |
| 00:59      | and we're really looking forward to sharing them with you.            |
| 01:02      | Now that we have Automator's Macs,                                    |
| 01:04      | and I love that name by the way, I love the name.                     |
| 01:06      | So good.                                                              |
| 01:07      | So you think we should change the name to Automator's Ultra?          |
| 01:10      | Now that Apple has announced                                          |
| 01:11      | that there's an even more powerful Mac with an Ultra chip.            |
| 01:14      | I mean, my studio is not gonna have an Ultra                          |
| 01:15      | and it's just gonna have whatever the almost-based model is.          |
| 01:19      | Oh, wait a second, wait a second.                                     |
| 01:23      | Did you buy new Macros?                                               |
| 01:25      | Maybe.                                                                |
| 01:27      | Okay, before we get into automation,                                  |
| 01:30      | I need the story.                                                     |
| 01:31      | I need it right now.                                                  |
| 01:32      | Okay, so I have an M1 iMac, which is purple, and I love it.           |
| 01:37      | It is an amazing machine.                                             |
| 01:39      | And for podcasting, it is the best machine in the world.              |
| 01:43      | Unfortunately, there's a particular thing                             |
| 01:46      | that I'm developing, which I'm not ready to talk about yet            |
| 01:48      | and I promise everybody you'll hear about it                          |
| 01:50      | when I'm ready to share.                                              |
| 01:52      | But it requires me to run two node applications                       |
| 01:56      | essentially at the same time and [[Xcode]] Simulator.                     |
| 02:00      | And all of that, even with 16 gigabytes of RAM,                       |
| 02:04      | for some reason, my machine just gets so painfully slow.              |
| 02:10      | But I've got a friend who's got a MacBook Pro,                        |
| 02:12      | one of the fancy new ones,                                            |
| 02:14      | who's not having any problems at all.                                 |
| 02:17      | And so I was very tempted.                                            |
| 02:18      | I was like, maybe I get a new laptop,                                 |
| 02:20      | maybe I get a new laptop.                                             |
| 02:21      | Let's see what Apple do.                                              |
| 02:23      | And then they did the Mac Studio.                                     |
| 02:26      | So yeah, maybe it should be Automators Studio.                        |
| 02:29      | I never know.                                                         |
| 02:29      | It is such a nice little computer with so much power.                 |
| 02:33      | It is crazy.                                                          |
| 02:33      | I mean, it looks quite big compared to the Mac Mini                   |
| 02:37      | in comparison, just height-wise,                                      |
| 02:38      | but it's still a small machine.                                       |
| 02:40      | Yeah, I'm not totally sold on the look of it.                         |
| 02:42      | I wish they had gone more like cube-like,                             |
| 02:45      | like the old Mac Cube,                                                |
| 02:46      | but that might be an old man thing, I'm not sure.                     |
| 02:49      | But I mean, just the idea of packing that much punch                  |
| 02:53      | in a box that small is kind of a flex anyway.                         |
| 02:56      | I got an email from an accountant listener who said,                  |
| 02:59      | you know, all these podcasters keep apologising                       |
| 03:01      | for buying new Macs.                                                  |
| 03:02      | He's like, I bought the Ultra.                                        |
| 03:04      | It's way more than I need,                                            |
| 03:05      | but I just like knowing I have the Ultra.                             |
| 03:07      | And I'm like, you know what, you be you.                              |
| 03:10      | I really think people, you know,                                      |
| 03:12      | we all have our failings.                                             |
| 03:14      | You know, like some people like really cool cars                      |
| 03:17      | or whatever.                                                          |
| 03:18      | For me, it's the latest and greatest technology                       |
| 03:20      | and I always want the latest Mac,                                     |
| 03:22      | although I'm taking a pass, at least for now.                         |
| 03:25      | The MacBook Pro is an amazing, it works with my screen.               |
| 03:29      | It's really no hassle to plug and unplug it.                          |
| 03:33      | And because of my situation where I have to move around a bit,        |
| 03:37      | it really is the ideal computer for what I need right now.            |
| 03:41      | When all the construction's over, maybe I'll look at it,              |
| 03:44      | but to tell you, I hate to say this                                   |
| 03:47      | because people are going to rub it in my face later.                  |
| 03:49      | But my plan at this point, really,                                    |
| 03:51      | you just kind of to keep the MacBook Pro,                             |
| 03:53      | but you know, sometimes things change, I guess we'll see.             |
| 03:57      | But so what was your spec?                                            |
| 03:59      | Which one did you order?                                              |
| 04:01      | I ordered pretty much the base model,                                 |
| 04:03      | but I did increase the SSD inside of it.                              |
| 04:07      | I was struggling to remember what I ordered.                          |
| 04:09      | Oh my gosh, what is wrong with me?                                    |
| 04:12      | But yeah, I figured the base spec is pretty great                     |
| 04:15      | spec-wise, you know, just compared to some of the other options.      |
| 04:20      | And honestly, if it turns out I need more,                            |
| 04:22      | I guess I'm going to find out in those first two weeks.               |
| 04:25      | And if that's the case, I'll have to ship it back.                    |
| 04:27      | But it's coming with 32GB of RAM.                                     |
| 04:30      | It's got a 10-core CPU, 24-core GPU                                   |
| 04:33      | and a 16-core neural engine.                                          |
| 04:35      | It's 1TB SSD because any big stuff that I've got,                     |
| 04:40      | I'll check on hard drives or external SSDs.                           |
| 04:43      | But it's looking pretty great.                                        |
| 04:46      | I'm wondering if I'm ever going to get to use                         |
| 04:48      | the 10-gigabit Ethernet port.                                         |
| 04:50      | I very much doubt that,                                               |
| 04:51      | just because nothing else that I have really supports                 |
| 04:54      | 10-gigabits of Ethernet.                                              |
| 04:55      | Yeah, but you know, if you keep it a while,                           |
| 04:57      | you may be surprising yourself.                                       |
| 04:59      | But the only thing I would say is,                                    |
| 05:01      | I feel like spending extra money on even more storage                 |
| 05:05      | would have probably been worth it.                                    |
| 05:06      | Because I've got this theory,                                         |
| 05:08      | and maybe you and I are exceptions                                    |
| 05:10      | because it's hard for us to hold on                                   |
| 05:11      | to Apple hardware, it seems.                                          |
| 05:12      | But I really think that these Apple Silicon chips                     |
| 05:17      | are going to be very reliable.                                        |
| 05:20      | And I've said this on the Mac Power user,                             |
| 05:21      | so this might not be a surprise to listeners.                         |
| 05:23      | But just if you look at the iPad,                                     |
| 05:25      | the iPad had this system on a chip now for what,                      |
| 05:27      | like 10 years.                                                        |
| 05:29      | And you talk to people who have iPads,                                |
| 05:31      | and the problem with the iPad is eventually,                          |
| 05:34      | it gets too old and slow.                                             |
| 05:35      | It's never that the iPad just stopped working.                        |
| 05:39      | The chips just don't seem to fail.                                    |
| 05:41      | And they last a really long time.                                     |
| 05:44      | And I think that's going to be something on Macs                      |
| 05:47      | that is going to increase the lifespan of your Mac.                   |
| 05:50      | So, you know, getting that extra storage or whatnot,                  |
| 05:54      | because in five years maybe,                                          |
| 05:55      | the computer is running fine,                                         |
| 05:56      | except the one terabyte is just driving you batty                     |
| 05:59      | because the world has evolved to a point                              |
| 06:01      | where one terabyte just isn't enough.                                 |
| 06:03      | And that is the one thing I would consider                            |
| 06:07      | of spending more of your money.                                       |
| 06:08      | I mean, that does make a lot of sense.                                |
| 06:11      | But in my particular case,                                            |
| 06:13      | because this is a desktop machine,                                    |
| 06:15      | it's not like I'm going to be taking it places.                       |
| 06:17      | I do not need to do a TJ Luoma                                       |
| 06:19      | and stick an external SSD to the outer shell of my MacBook,           |
| 06:24      | which I still think is a great trick                                  |
| 06:25      | if you're willing to do that.                                         |
| 06:27      | But-                                                                  |
| 06:28      | Oh, I don't want to endorse that.                                     |
| 06:29      | That's my-                                                            |
| 06:30      | Well, I mean, it's a great trick                                      |
| 06:31      | if you're willing to do it with the caveat of,                        |
| 06:33      | you know, this could go potentially horribly wrong                    |
| 06:35      | at some point.                                                        |
| 06:36      | And only do it with an SSD people                                     |
| 06:38      | don't stick hard drive on the outside of machine,                     |
| 06:40      | it will die and very unfortunately.                                   |
| 06:44      | But I think it is worth, you know,                                    |
| 06:47      | considering for that sort of thing.                                   |
| 06:49      | But with a desktop, because it's so easy,                             |
| 06:52      | like it's, I'm not going to take it places.                           |
| 06:55      | A Mac Studio, it kind of is portable                                  |
| 06:58      | in that I could chuck a portable display                              |
| 07:00      | and a power cable in my bag and take those with me.                   |
| 07:03      | But I mean, if I'm taking a Mac Studio on the road,                   |
| 07:08      | something's probably gone wrong.                                      |
| 07:10      | And I'll have bigger concerns to worry about them,                    |
| 07:13      | whether or not the external hard drives,                              |
| 07:16      | which don't even need power nowadays for a lot of them,               |
| 07:19      | are okay to look along with me as well.                               |
| 07:22      | So I think it'll be okay,                                             |
| 07:23      | because I've got no attached storage                                  |
| 07:25      | and everything here as well.                                          |
| 07:26      | And I'm very good at offloading things.                               |
| 07:27      | [[Hazel]] has been a little savior there of going,                        |
| 07:30      | hey, this project in this folder,                                     |
| 07:32      | you've not touched it in a couple of weeks.                           |
| 07:34      | I'm just going to move it into this folder over here                  |
| 07:36      | where [[Dropbox]] smart sync goes,                                         |
| 07:38      | hey, that doesn't live on your Mac and gets rid of it.                |
| 07:41      | But it's still there                                                  |
| 07:42      | and I can easily re-download it if I need it to.                      |
| 07:43      | Yeah, have you ever heard the theory                                  |
| 07:44      | like you spend as much money as you make?                             |
| 07:46      | And like if you make more money,                                      |
| 07:48      | you just spend more money.                                            |
| 07:50      | I have the same problem with hard drives.                             |
| 07:52      | I like, I have a four terabyte hard drive in this computer            |
| 07:55      | and it's almost full now.                                             |
| 07:56      | And I don't even know why.                                            |
| 07:58      | I think it's because all the video stuff                              |
| 07:59      | I've been doing for the MacSparky Labs,                              |
| 08:01      | I've got to go through and figure that out.                           |
| 08:03      | But I do think it's only a question of time                           |
| 08:06      | and like I'm talking months, not years                                |
| 08:08      | before there is a Mac Studio size hard drive enclosure                |
| 08:14      | or you can put a big beefy SSD in it                                  |
| 08:16      | and it probably hopefully has Thunderbolt 4 connections.              |
| 08:19      | So it's really fast                                                   |
| 08:20      | and you just like stick it underneath it                              |
| 08:23      | or on top of your Mac Studio,                                         |
| 08:25      | it's going to like match the size perfectly.                          |
| 08:28      | And then, you know, you're off to the races with more storage.        |
| 08:32      | Yeah, yeah, that does make sense.                                     |
| 08:34      | And I guess we will see soon whether or not                           |
| 08:38      | that remains the case.                                                |
| 08:40      | I know for me,                                                        |
| 08:41      | one of the things I found actually recently,                          |
| 08:43      | David, this might be a tip for you.                                   |
| 08:45      | Maestro had accidentally eaten up a lot of my hard drive space        |
| 08:47      | because I added some new folders with backups of things               |
| 08:50      | where my Synology and my parent Synology                              |
| 08:52      | were uploading backups of certain folders and configurations.         |
| 08:56      | And yeah, it turns out that eats up storage pretty quickly            |
| 08:59      | when Maestro automatically added those folders to my Mac              |
| 09:03      | and started syncing them and downloaded them.                         |
| 09:04      | I was wondering why my internet was so terrible                       |
| 09:06      | for a day and a half and realised                                     |
| 09:08      | I had three machines downloading the same folders                     |
| 09:10      | which were hundreds of gigabytes of data.                             |
| 09:12      | And that's where all my storage space went.                           |
| 09:14      | That's why my Mac was running slow.                                   |
| 09:15      | So having fixed that problem,                                         |
| 09:17      | I'm quite pleased that I don't need to worry about it anymore.        |
| 09:21      | Well, I'm pretty stingy with Maestro the way I use it.                |
| 09:24      | So... Yeah, I just found if you add a new folder,                     |
| 09:27      | it doesn't automatically exclude it.                                  |
| 09:29      | It opts to automatically include,                                     |
| 09:31      | which for me was very much the wrong option                           |
| 09:34      | in this particular case.                                              |
| 09:35      | It was like, oh no, no, no, no, no.                                   |
| 09:37      | This is not what I wanted you to do.                                  |
| 09:38      | Why? Oh yeah, I see that.                                             |
| 09:40      | It's funny, even when I get rid of the [[Dropbox]] software,              |
| 09:43      | sometimes [[Dropbox]] still messes with me.                               |
| 09:45      | I see this.                                                           |
| 09:47      | Okay, so you're getting a new Mac.                                    |
| 09:48      | Are you getting a new display?                                        |
| 09:50      | Are you sticking with the Super Wide?                                 |
| 09:52      | I'm sticking with the Ultra Wide.                                     |
| 09:53      | I love the Ultra Wide.                                                |
| 09:54      | There is the potential of a studio display in my future,              |
| 09:57      | depending on what happens with the iMac.                              |
| 09:59      | I'm very tempted to keep the iMac                                     |
| 10:01      | and sort of split podcasting from everything else that I do,          |
| 10:04      | just so that this machine is always ready to go.                      |
| 10:07      | And I can leave it on the older version                               |
| 10:09      | of the operating system for a while,                                  |
| 10:10      | which sometimes can be a very good thing                              |
| 10:13      | when it comes to latest Mac OS stuff.                                 |
| 10:17      | So I'll see what happens there.                                       |
| 10:18      | But if I move the iMac the way that I'm thinking                      |
| 10:22      | of doing it, then that might result                                   |
| 10:25      | in a studio display sitting approximately                             |
| 10:28      | where the iMac is, a 27-inch display would fit there.                 |
| 10:31      | It's just a question of do I go visa mount                            |
| 10:33      | or do I do the height and tilt adjustable one?                        |
| 10:35      | Yeah, and you are very beta-friendly.                                 |
| 10:38      | So I think having a podcasting machine                                |
| 10:40      | that stays off the beta is a good idea.                               |
| 10:43      | Yeah, I'm beta-friendly,                                              |
| 10:44      | but I very specifically did it on my laptop                           |
| 10:46      | the last few times,                                                   |
| 10:47      | because I don't podcast from my laptop                                |
| 10:48      | except in emergencies, sort of last case,                             |
| 10:52      | you know, everything else has failed,                                 |
| 10:53      | must podcast from a machine and nothing's working,                    |
| 10:57      | can take the laptop somewhere else.                                   |
| 10:58      | So it's a backup, but yeah,                                           |
| 11:00      | it would be good to have a definitely solid,                          |
| 11:03      | ready-to-go machine just for the podcasting.                          |
| 11:06      | Well, I'm very happy with this MacBook Pro.                           |
| 11:10      | I'm not saying I won't chuck it overboard                             |
| 11:12      | someday and get a Mac Studio if that makes sense for me,              |
| 11:16      | but I'm really happy with this,                                       |
| 11:17      | but I will tell you that since buying it,                             |
| 11:20      | I have now taken two far away trips                                   |
| 11:24      | and only having one Mac,                                              |
| 11:26      | I am like panicked with this 16-inch,                                 |
| 11:29      | very expensive MacBook Pro going in my bag                            |
| 11:32      | and getting on airplanes.                                             |
| 11:33      | And like it just barely fits in my bag                                |
| 11:36      | because of the size and I would,                                      |
| 11:39      | if it wasn't for the rumors of the M2 MacBook Air,                    |
| 11:45      | I would buy probably a MacBook Air today                              |
| 11:48      | just for when I'm going around and I want a Mac with me.              |
| 11:52      | I really feel like this laptop is really a desktop laptop             |
| 11:56      | and that's really not a move around laptop.                           |
| 11:59      | And I don't mind unhooking it and bringing it                         |
| 12:02      | to a different room if I need a screencast                            |
| 12:04      | for three hours or whatever,                                          |
| 12:05      | but I went to Wisconsin and it's like really cold,                    |
| 12:09      | you're getting banged around on airplanes                             |
| 12:12      | and I was like the whole time I was worried                           |
| 12:13      | about this computer,                                                  |
| 12:14      | I would much rather have something smaller,                           |
| 12:16      | but I've just been kind of waiting,                                   |
| 12:19      | but it's been weird for me only having one Mac,                       |
| 12:21      | that's kind of a new thing for me.                                    |
| 12:23      | Yeah, yeah, especially when it is something                           |
| 12:26      | that you need to be able to use day in, day out,                      |
| 12:28      | it is advisable to have a machine that you can leave at home          |
| 12:33      | even if it's not your preferred option.                               |
| 12:35      | And I know you can probably borrow a laptop from Daisy                |
| 12:39      | or one of your daughters in an absolute emergency,                    |
| 12:41      | but equally would be ideal to not have to resort to that              |
| 12:45      | and have something that's already got some                            |
| 12:46      | of your config on it so that you're kind of ready to go.              |
| 12:49      | So the rumors are the M2 MacBook Air's                                |
| 12:52      | kind of have colours, which is cool,                                   |
| 12:53      | and it's going to be slightly better than the M1.                     |
| 12:56      | So I'm doing a little faster,                                         |
| 12:57      | I'm sure maybe a little bit better memory options,                    |
| 12:59      | but really it's going to be kind of the MacBook Air class             |
| 13:04      | M1 chip.                                                              |
| 13:05      | And the question I'll face at the time is would it,                   |
| 13:08      | would I be better buying like a really low end,                       |
| 13:11      | 14 inch MacBook Pro with the cool screen                              |
| 13:14      | and all the features that MacBook Pro has                             |
| 13:16      | or just get a MacBook Air?                                            |
| 13:19      | My inclination is the Air, but I don't know.                          |
| 13:23      | It's one of those things where I feel like                            |
| 13:25      | if you're genuinely concerned about needing a backup machine          |
| 13:28      | where you're going to be able to do all the things                    |
| 13:30      | that you could do on your main machine,                               |
| 13:32      | albeit potentially a bit slower,                                      |
| 13:35      | I'd probably go pro over Air                                          |
| 13:36      | just because it's got that much more power.                           |
| 13:39      | I don't forget that.                                                  |
| 13:39      | Everybody keeps telling me that,                                      |
| 13:40      | but I don't want to do it.                                            |
| 13:41      | I don't know, we'll wait and see.                                     |
| 13:43      | It's more money, but also they both use Mac safe                      |
| 13:45      | and you've got all the extra ports on there.                          |
| 13:47      | Yeah, that's true too, man.                                           |
| 13:49      | I feel is not, that's a pretty good point                             |
| 13:55      | of things to consider.                                                |
| 13:56      | The last thing you want to do,                                        |
| 13:57      | you're in automated Sparky mode                                       |
| 13:59      | and you're just plugging things in                                    |
| 14:00      | and you try and shove some stuff into the side of the Mac             |
| 14:03      | only it's a different Mac                                             |
| 14:04      | and there's no ports on that side.                                    |
| 14:06      | So you have to go and find an adapter or a dongle                     |
| 14:08      | and plug everything into that.                                        |
| 14:09      | And yeah, just seems like it's going to go wrong.                     |
| 14:12      | The other thing is my computer needs are much heavier now             |
| 14:16      | that I'm not a lawyer.                                                |
| 14:17      | I'm doing way more video and like high-end stuff                      |
| 14:21      | that actually does push the processors.                               |
| 14:23      | So it's like, okay, well, in that mind,                               |
| 14:28      | I guess we should make a podcast.                                     |
| 14:31      | Sorry for the little run down Mac hardware,                           |
| 14:34      | but I had to check in with Rose                                       |
| 14:35      | and I think everybody's always interested                             |
| 14:37      | when you're up to Rose, so yeah.                                      |
| 14:39      | But I think you're probably onto something.                           |
| 14:40      | Keep the iMac with all your podcasting                                |
| 14:43      | and just keep it on stable platform.                                  |
| 14:46      | Go nuts with the new machine.                                         |
| 14:48      | I think you're going to love it.                                      |
| 14:49      | You'll have to tell us what you think of it                           |
| 14:50      | once you get it, but I think you're going to love it.                 |
| 14:55      | This episode of the Automators podcast                                |
| 14:56      | is brought to you by LinkedIn Jobs.                                   |
| 14:59      | Go to linkedin.com/automators                                   |
| 15:01      | and post a job for free.                                              |
| 15:04      | During the great career reshuffle we've been seeing                   |
| 15:06      | and in my case experiencing,                                          |
| 15:09      | a record number of employees are considering switching jobs.          |
| 15:11      | So now's your chance to try to attract them.                          |
| 15:15      | LinkedIn Jobs is here to help you connect with people                 |
| 15:17      | you want to interview faster and for free.                            |
| 15:21      | In my experience, hiring people can be really difficult.              |
| 15:24      | Not only do you have to find the right skillset,                      |
| 15:26      | but you also have to find the right chemistry                         |
| 15:28      | and the right fit for your workplace.                                 |
| 15:30      | Especially with small companies,                                      |
| 15:32      | hiring the right person is so important to a business.                |
| 15:35      | You can really spoil things if you get the wrong person.              |
| 15:38      | On the flip side, the right person can elevate a team.                |
| 15:41      | So LinkedIn Jobs is there to help you get that right person.          |
| 15:45      | You can create a free job post in minutes                             |
| 15:47      | at LinkedIn Jobs to reach your network and beyond                     |
| 15:50      | to the world's largest professional network                           |
| 15:53      | of over 770 million people.                                           |
| 15:56      | Then add your job and the purple hashtag hiring frame                 |
| 15:59      | to your LinkedIn profile to spread the word                           |
| 16:02      | that you're hiring so your network can help you find                  |
| 16:04      | the right people to hire.                                             |
| 16:06      | Simple tools like screening questions,                                |
| 16:08      | make it easy to focus on candidates                                   |
| 16:10      | with just the right skills and experience                             |
| 16:12      | so you can quickly prioritise                                         |
| 16:14      | who you'd like to interview and hire.                                 |
| 16:16      | This is why small businesses rate LinkedIn Jobs number one            |
| 16:20      | in delivering quality hires versus leading competitors.               |
| 16:23      | LinkedIn Jobs help you find the candidates                            |
| 16:25      | you want to talk to faster.                                           |
| 16:27      | Did you know every week nearly 40 million job seekers                 |
| 16:30      | visit LinkedIn?                                                       |
| 16:31      | Post your job for free at linkedin.com/automators.              |
| 16:35      | That link again is linkedin.com/automators                      |
| 16:39      | to post your job for free.                                            |
| 16:41      | Terms and conditions do apply.                                        |
| 16:43      | And our thanks to LinkedIn Jobs for their support                     |
| 16:45      | of the automators and all of Relay FM.                                |
| 16:49      | All right, so Rose, shortcuts on the Mac has been out                 |
| 16:51      | what now, six months or so?                                           |
| 16:53      | And I thought it'd be a good time to check in on it.                  |
| 16:58      | How are you doing with it?                                            |
| 17:00      | Well, once I got my head around some of the peculiarities             |
| 17:03      | that come with shortcuts being a Mac application                      |
| 17:06      | rather than it being an iOS application on the Mac,                   |
| 17:10      | I'm doing pretty well.                                                |
| 17:12      | There are still times where things don't necessarily                  |
| 17:16      | go quite to plan.                                                     |
| 17:18      | Usually when I've created a shortcut                                  |
| 17:20      | on a completely different device,                                     |
| 17:22      | like I've created it on my iPhone                                     |
| 17:23      | with the intention of running it on my Mac.                           |
| 17:25      | And there's just something that I haven't thought about               |
| 17:28      | with how I'm doing things.                                            |
| 17:30      | But I'm doing much better than I had anticipated for a while.         |
| 17:33      | I felt for a little while that it was gonna be quite tricky           |
| 17:37      | to get things working.                                                |
| 17:38      | And it was buggy to start with as I'm sure people are aware           |
| 17:42      | just because it's a whole different ball game                         |
| 17:45      | being on the Mac to being on iOS.                                     |
| 17:47      | But now I've worked around some of the things                         |
| 17:50      | like the share sheet exists on Mac OS                                 |
| 17:53      | but it's not really the same kind of thing.                           |
| 17:56      | And so that's why shortcuts have support for quick actions.           |
| 17:59      | But fortunately, as we'll get to somebody                             |
| 18:01      | who's got a little rescuer for us for that,                           |
| 18:04      | then I'm doing much better than I was originally.                     |
| 18:07      | Yeah, and we're gonna do a full show on shortcuts for Mac.            |
| 18:10      | Rose is in the midst of upgrading her shortcuts for Mac book.         |
| 18:13      | And I'm in the midst of about to release                              |
| 18:15      | the next shortcuts for Mac                                            |
| 18:17      | or the first shortcuts for Mac field guide.                           |
| 18:19      | So we both have been digging in really deep.                          |
| 18:22      | I can tell you that when I first started recording                    |
| 18:24      | for this field guide six months ago,                                  |
| 18:26      | it's crazy that this one has taken so long.                           |
| 18:29      | But they were like looking at my notes.                               |
| 18:30      | There's all these videos where it's like hold for Apple bug,           |
| 18:34      | hold for Apple bug.                                                    |
| 18:35      | That was like a category.                                             |
| 18:37      | And so many of the videos I couldn't record at the beginning          |
| 18:40      | because there was some problem.                                       |
| 18:42      | And all of those have dropped off now.                                |
| 18:45      | I'm not saying there aren't any bugs,                                 |
| 18:46      | but for the videos I wanted to shoot,                                 |
| 18:48      | I'm able to shoot them now.                                           |
| 18:50      | And they're coming out good.                                          |
| 18:52      | And I'm finding myself just using it under fire a lot more.           |
| 18:55      | It's more than just a curiosity to me at this point.                  |
| 18:59      | So I think they've made progress.                                     |
| 19:02      | I know they worked really hard on it.                                 |
| 19:04      | Kind of behind the scenes stuff you've seen                           |
| 19:07      | just through social media and whatnot.                                |
| 19:10      | Some of the old [[AppleScript]] [[Automator]] gang at Apple,                 |
| 19:14      | the people who were there with [[Sal Soghoian\|Sal]]                                    |
| 19:15      | at the beginning showing up on the shortcuts team now.                |
| 19:18      | And I think that's a really good sign                                 |
| 19:21      | that people who understand automation on the Mac                      |
| 19:24      | are getting their hands in the code.                                  |
| 19:26      | And that's I think one of the reasons                                 |
| 19:28      | why it's getting together.                                            |
| 19:29      | I mean, I'm not trying to cast aspersions                             |
| 19:33      | on the original team,                                                 |
| 19:34      | but I mean, they built it for iPhone and iPad.                        |
| 19:37      | It's good to have some folks in there                                 |
| 19:39      | that are used to coding automation for Mac,                           |
| 19:42      | get the best possible people in there.                                |
| 19:44      | And it's really coming along.                                         |
| 19:45      | So if you've been staying away from it,                               |
| 19:49      | I'd say give it a try.                                                |
| 19:50      | I mean, there's a lot of good stuff you can do with it.               |
| 19:53      | I still have, like later in today's show,                             |
| 19:56      | I'm really facing a quandary                                          |
| 19:57      | because I feel like some of the automation                            |
| 19:59      | that I've been doing in keyboard                                      |
| 20:00      | my show will be better in shortcuts                                   |
| 20:02      | because of some of the features shortcuts has.                        |
| 20:05      | And I've got to make some decisions.                                  |
| 20:07      | But I do run into bugs once in a while,                               |
| 20:11      | but not nearly as much.                                               |
| 20:13      | I do think the user interface elements of it                          |
| 20:16      | still seem kind of like temporary.                                    |
| 20:19      | Like, okay, let's just put this in for now                            |
| 20:21      | and eventually we'll come back and do it better.                      |
| 20:24      | That's kind of the feeling I get from a lot of it,                    |
| 20:26      | but it works.                                                         |
| 20:27      | It's not, I mean, it's not pretty.                                    |
| 20:29      | It's not necessarily ugly, but it works.                              |
| 20:32      | And I think at some point it'll get prettier                          |
| 20:34      | and that will be nice when that happens.                              |
| 20:37      | Yes, yes, especially things like, for example,                        |
| 20:40      | selecting a variable or putting a variable into a text field.         |
| 20:44      | That's the one that always gets me.                                   |
| 20:45      | So you right click and you go insert variable.                        |
| 20:47      | And I don't know, like it's just so small, the variable               |
| 20:51      | that gets inserted and it sounds really, really nitpicky.             |
| 20:55      | I'm very aware of that.                                               |
| 20:56      | But also it is one of those things                                    |
| 20:59      | where it does just look very tiny.                                    |
| 21:03      | It's not so obvious that that's a variable                            |
| 21:05      | and I feel like maybe bumping up the font size                        |
| 21:07      | and come on, come on, shortcut team.                                  |
| 21:09      | The Mac's a big device.                                               |
| 21:11      | We've got a really great scroll wheel or trackpad built in.           |
| 21:14      | Give us a big text field                                              |
| 21:16      | that we can put some text in.                                         |
| 21:17      | Yeah, or even like when you do a variable call                        |
| 21:20      | and you type something in,                                            |
| 21:21      | you would think getting enter would just click the done button,       |
| 21:24      | but it actually hits a carriage return.                               |
| 21:27      | And like, it just like, it's just not,                                |
| 21:30      | you know, it wasn't made for somebody using a keyboard.               |
| 21:33      | And it's still got stuff like that over the place.                    |
| 21:36      | Another place I would say that to me is feels really rickety          |
| 21:41      | is when you are inserting variables into an action call.              |
| 21:46      | And like, you can easily enough right click                           |
| 21:48      | and put in a magic variable                                           |
| 21:49      | or just type in a variable name and it'll fill it in for you.         |
| 21:52      | But what if you want to add some text to that?                        |
| 21:54      | You know, like say, the answer is colon space                         |
| 21:57      | and then insert a variable.                                           |
| 21:59      | Getting that text in after the variables there                        |
| 22:03      | feels very difficult to me.                                           |
| 22:05      | It's like, you have to land the cursor                                |
| 22:07      | like in a very small target area                                      |
| 22:09      | or you may actually just wipe out the variable                        |
| 22:12      | or it's just very easy to break that.                                 |
| 22:15      | Though I have to say, David,                                          |
| 22:16      | that's been happening to me a lot recently on iOS.                    |
| 22:19      | You know, I've been editing, like I've used the dictionary            |
| 22:21      | and I've tried to get a specific key                                  |
| 22:23      | and I've typed it and I've tapped done.                               |
| 22:24      | And then my variables disappeared                                     |
| 22:26      | or I formatted the current date in a specific way                     |
| 22:29      | and it's disappeared.                                                 |
| 22:31      | And it's slightly annoying                                            |
| 22:33      | and I'm ending up using extra actions.                                |
| 22:36      | So for example, I'll format,                                          |
| 22:38      | I'll use a format day action on the current date                      |
| 22:40      | and then go from there rather than just                               |
| 22:44      | inserting the current date variable,                                  |
| 22:46      | tapping on it or clicking on it on the Mac                            |
| 22:48      | and then editing the formatting.                                      |
| 22:50      | Just because it does seem to disappear at times                       |
| 22:52      | and I need to file that as feedback actually                          |
| 22:55      | to make sure that the team are aware of that                          |
| 22:56      | because if you don't file feedback, they don't know.                  |
| 22:59      | Yeah, well, I'm sure they're aware of these.                          |
| 23:01      | These are so endemic, you know,                                       |
| 23:04      | working with variables is the whole point, right?                     |
| 23:06      | But the, but the, you know,                                           |
| 23:09      | that's always been a little tricky on touch                           |
| 23:11      | but with keyboard and mouse,                                          |
| 23:13      | it's just seems like it's like second level.                          |
| 23:17      | And we sound like we're negative, really we're not.                   |
| 23:19      | I mean, I think this is really coming along                           |
| 23:21      | and the promise is here, you know,                                    |
| 23:24      | we're gonna get good automation tools                                 |
| 23:25      | that we can use across all of Apple platforms.                        |
| 23:28      | I do think that in the future,                                        |
| 23:30      | we'll look back on this year as the rough one, you know,              |
| 23:33      | when they were getting it onto the Mac                                |
| 23:36      | and there was a lot of work to do and it took a while                 |
| 23:39      | but overall, I'm happy with the product                               |
| 23:42      | and I'm happy it exists                                               |
| 23:43      | because it's allowing me to do some automations                       |
| 23:45      | that were quite difficult before                                      |
| 23:48      | without really digging deep on AppleScript.                          |
| 23:50      | Yes.                                                                  |
| 23:51      | But one of the things on the Mac that has come up                     |
| 23:55      | and has kind of made the rounds is                                    |
| 23:56      | how do you trigger shortcuts on the Mac short of going in             |
| 24:01      | and, you know, triggering it in the application                       |
| 24:04      | or even, you know, I can have a menu bar out                          |
| 24:06      | but that thing is very wily for me too.                               |
| 24:10      | Do you get this where like if you put too many                        |
| 24:12      | in the menu bar and you click on the menu bar,                        |
| 24:14      | it like opens and then closes the menu bar thing                      |
| 24:16      | without ever letting you click on a shortcut?                         |
| 24:19      | Yes, I have found that, which is one of the reasons                   |
| 24:22      | why I'm not putting that many in there                                |
| 24:26      | and I have been in very early beta stages                             |
| 24:30      | of testing an app for the Mac, it's not available yet.                |
| 24:33      | As soon as I can give a beta link to anybody else                     |
| 24:37      | or a release link, I will let you, David and all the listeners        |
| 24:40      | know which can change or it doesn't change                            |
| 24:43      | what's in the shortcuts menu bar up                                   |
| 24:44      | but it can show you different shortcuts                               |
| 24:46      | depending on which focus mode you're in, in your menu bar.            |
| 24:50      | Because that to me, like, you know,                                   |
| 24:51      | if I'm in a podcasting focus mode,                                    |
| 24:53      | I need different shortcuts to if I'm in my work focus mode            |
| 24:56      | and so on and so forth.                                               |
| 24:58      | And I love the fact that shortcuts syncs between devices              |
| 25:02      | but the menu bar status also syncs between devices                    |
| 25:06      | which means that I have exactly the same shortcuts                    |
| 25:09      | in my menu bar regardless of which Mac I'm on,                        |
| 25:12      | which has been slightly problematic,                                  |
| 25:15      | meaning I tend not to use that, which is a shame.                     |
| 25:17      | Yeah, that is a weird thing.                                          |
| 25:19      | Like focus mode is awesome                                            |
| 25:21      | and getting a consistent display of your focus mode                   |
| 25:24      | in the menu bar makes so much sense                                   |
| 25:27      | and I hope that's something that they catch up with                   |
| 25:29      | but if there's a third party app                                      |
| 25:31      | that shows up to solve that problem,                                  |
| 25:32      | I am going to be there on day one.                                    |
| 25:34      | Yes, as soon as I can let everybody know about that,                  |
| 25:39      | I will do, but yeah, in the meantime though,                          |
| 25:41      | there's some other people who've tried                                |
| 25:43      | to make it a bit easier, including the shortcuts team                 |
| 25:46      | because they added support for adding a shortcut to your doc          |
| 25:49      | which is nice and I like it in many ways.                             |
| 25:55      | And so what I did for my parents is my dad didn't want                |
| 25:58      | lots of things added to his doc                                       |
| 25:59      | but there were lots of little things where he, you know,              |
| 26:02      | forgets, you know, how to do this sequence of events                  |
| 26:04      | or something.                                                         |
| 26:05      | So I created some shortcuts for him                                   |
| 26:07      | which essentially just open applications in sequence                  |
| 26:09      | and then open, it creates a new sticky                                |
| 26:13      | and it puts the information in sticky.                                |
| 26:15      | I had to farm out to Apple Skip for that bit.                         |
| 26:18      | But what I've done for him is I used the add shortcuts                |
| 26:22      | to doc option, which is only available                                |
| 26:24      | from the main shortcuts window.                                       |
| 26:26      | When you've got all the squares of your shortcuts,                    |
| 26:28      | you can click on one and then use the menu                            |
| 26:30      | to add it to your doc.                                                |
| 26:31      | And I took it out of the doc                                          |
| 26:32      | but that meant that all of these shortcuts,                           |
| 26:35      | so it was a shortcut to a shortcut                                    |
| 26:37      | where my users applications folder                                    |
| 26:39      | or in this case, my dad's users applications folder                   |
| 26:41      | and I put those in a folder                                           |
| 26:43      | and put that folder in the doc for him.                               |
| 26:45      | So now he has a folder in the doc                                     |
| 26:46      | which is basically get help from Rose                                 |
| 26:49      | and then it shows him a grid of the icons                             |
| 26:53      | that I've set up with the titles                                      |
| 26:55      | so that he can easily jump to certain shortcuts                       |
| 26:58      | which is quite a user friendly way                                    |
| 27:00      | of setting some of these things up for other people                   |
| 27:03      | though it's not the most automator friendly approach                  |
| 27:06      | that I would use for myself.                                          |
| 27:08      | Yeah, agreed.                                                         |
| 27:10      | I mean, it is funny.                                                  |
| 27:11      | A lot of these ways people are doing them                             |
| 27:13      | are a little hacky, but they work, you know?                          |
| 27:16      | And I'm getting them to work consistently.                            |
| 27:19      | So increasingly I'm able to work on short                             |
| 27:23      | or run shortcuts without opening the application.                     |
| 27:26      | Yes, yes.                                                             |
| 27:27      | You use the quick actions feature                                     |
| 27:30      | and the finder integration.                                           |
| 27:32      | Quick actions and the finder integration                              |
| 27:34      | are something which I'm very glad exists                              |
| 27:37      | and they're kind of an alternative to the share sheet.                |
| 27:41      | And so people might have noticed                                      |
| 27:44      | that in the sidebar of a shortcut on the Mac                          |
| 27:49      | you've got options in the details                                     |
| 27:51      | and you can just check users quick action.                            |
| 27:53      | I should note on its own, this does nothing.                          |
| 27:56      | What you have to do then is you have to select                        |
| 27:59      | one of the options.                                                   |
| 28:00      | So there's finder, depending on your device,                          |
| 28:02      | there might be touch bar that recently showed up                      |
| 28:04      | on my iMac, not quite sure why it's on my iMac,                       |
| 28:06      | but anyway, services menu and whether or not                          |
| 28:09      | the quick actions should provide output                               |
| 28:12      | that only appeared in 12.3 on macOS.                                  |
| 28:18      | But for example, the output can then replace                          |
| 28:22      | the selected text, but this doesn't work                              |
| 28:24      | the same way as the share sheet, it's the right click menu,           |
| 28:28      | which if you do right click in something like Google Docs,            |
| 28:31      | which I've just done, I've got some selected text                     |
| 28:33      | in Google Docs and I've right clicked,                                |
| 28:34      | I get a Google Docs menu.                                             |
| 28:36      | So it depends on the application you're in                            |
| 28:38      | as to whether or not that's even supported                            |
| 28:40      | as something you can use,                                             |
| 28:41      | but then if you've selected a quick action,                           |
| 28:44      | then it should be under services                                      |
| 28:46      | in the right click menu for you.                                      |
| 28:48      | And so I've got a load of my shortcuts in there,                      |
| 28:50      | which is quite nice.                                                  |
| 28:52      | And then there's the finder option                                    |
| 28:54      | which allows you to accept things in finder to trigger this.          |
| 29:00      | But as I said, it doesn't work quite the same way                     |
| 29:03      | as the share sheet.                                                   |
| 29:04      | So that's something that people need to be aware of                   |
| 29:08      | just because it can accept different kinds of input,                  |
| 29:14      | but it doesn't always accept the input                                |
| 29:17      | in the way that you would expect.                                     |
| 29:19      | And if you have to turn on, for example,                              |
| 29:22      | if you want the same shortcut to work on iOS and Mac OS,              |
| 29:25      | you have to select share sheet and quick actions,                     |
| 29:28      | which it uses the services menu,                                      |
| 29:31      | and then you have to change the input type.                           |
| 29:33      | Unfortunately, there's quite a bit of overlap                         |
| 29:35      | with the input type,                                                  |
| 29:36      | but you may find it difficult to share,                               |
| 29:38      | for example, an app store app into shortcuts on the Mac.              |
| 29:44      | That's something I've struggled with a few times mostly,              |
| 29:47      | I think just because it's being a little bit weird,                   |
| 29:50      | but it seems to be working better than I expected.                    |
| 29:52      | And it's really nice to be able to right click a file                 |
| 29:54      | and finder and say, hey, run this shortcut on it please               |
| 29:57      | and just have it do magic.                                            |
| 29:58      | Yeah, I agree that quick actions are best run in the finder.          |
| 30:02      | And the one limitation that bugs me is that                           |
| 30:07      | in general, the quick actions menu is limited to four items           |
| 30:10      | and you can enable too many quick actions.                            |
| 30:13      | It doesn't scale well.                                                |
| 30:15      | Like if you have, I have a bunch of quick actions                     |
| 30:18      | related to PDFs and if I right click on a PDF,                        |
| 30:21      | a lot of times I don't see the shortcut based quick action            |
| 30:25      | because I've got too many                                             |
| 30:26      | and it just doesn't make the list.                                    |
| 30:28      | You can customise the list and move them up,                          |
| 30:31      | but I feel like it should be more user friendly                       |
| 30:33      | where you don't have to go into like a second tier                    |
| 30:36      | menu system to make that happen.                                      |
| 30:39      | Yes, in the finder, because what happens is if you enable             |
| 30:42      | the quick action, so you check user's quick action,                   |
| 30:44      | then you check finder, you get a quick actions menu,                  |
| 30:47      | which has like the icon of your shortcut in,                          |
| 30:50      | but if you also enable in the services menu                           |
| 30:53      | and it accepts that kind of input,                                    |
| 30:54      | then it's usually in there and that list can get nice and long.       |
| 30:58      | But you do have to be pretty smart.                                   |
| 31:00      | And I'd always recommend this,                                        |
| 31:02      | clean up what kind of input your shortcut accepts by default.         |
| 31:05      | It accepts everything and anything.                                   |
| 31:08      | If you only ever want to be able to give it PDFs,                     |
| 31:10      | go in and change that and be good about that                          |
| 31:14      | and go in and try and sort those things out on a regular basis        |
| 31:17      | because if you don't, you end up with 500 shortcuts                   |
| 31:20      | in your share sheet and your services menu.                           |
| 31:23      | And that gets annoying pretty quickly                                 |
| 31:25      | when you're searching for it.                                         |
| 31:26      | That one that I know is here somewhere, but where?                    |
| 31:30      | Yeah, and that's a weird thing too,                                   |
| 31:31      | because it by default has them all checked,                           |
| 31:34      | which means everybody's going to make these.                          |
| 31:36      | I guess they're thinking,                                             |
| 31:37      | well, let's make it as easy as possible                               |
| 31:38      | for it to apply whenever you need it,                                 |
| 31:40      | but it would be easier, I think,                                      |
| 31:42      | if it was unchecked by default,                                       |
| 31:44      | and you could just pick the one.                                      |
| 31:45      | And then it didn't show up,                                           |
| 31:46      | so people had to go and select something.                             |
| 31:48      | Yeah, I always start by clicking on the any                           |
| 31:51      | and then clicking the clear in the bottom right,                      |
| 31:53      | and I do the same thing on iOS                                        |
| 31:55      | just because that way it gets rid of everything                       |
| 31:57      | and then I have to sit down and think,                                |
| 31:58      | what do I actually want to go into this?                              |
| 32:01      | I want images.                                                        |
| 32:02      | Okay, just images, select images done.                                |
| 32:05      | Well, another way to trigger shortcuts on the Mac                     |
| 32:08      | is with folder triggers.                                              |
| 32:13      | So this is something that's been around for ages,                     |
| 32:15      | so people might be thinking,                                          |
| 32:16      | wait, what, like [[Hazel]],                                               |
| 32:17      | and you know, Hazel's been doing some pretty cool stuff,              |
| 32:20      | but we're not talking about that just yet.                            |
| 32:21      | We're talking about the Mac OS built in folder triggers,              |
| 32:26      | where if you select a folder or the folder action, yeah.              |
| 32:30      | So if you select a folder on the Mac and you right click,             |
| 32:33      | then you will be able to add folder actions.                          |
| 32:37      | And I'm not 100% certain if this is default.                          |
| 32:39      | In my right click menu under services,                                |
| 32:41      | I've got the option to manage folder actions,                         |
| 32:43      | but I think that I got that added by setting up                       |
| 32:46      | a folder action in the first place.                                   |
| 32:48      | So we'll put a link in the show notes as to where,                    |
| 32:52      | or how you can set up the folder actions                              |
| 32:54      | because it does require you to do a couple of steps,                  |
| 32:58      | but it is nice to be able to use                                      |
| 33:01      | the default Mac OS folder actions for things as well,                 |
| 33:07      | because that way you can have theoretically any file                  |
| 33:10      | landing in a folder trigger a shortcut.                               |
| 33:12      | Yeah, this has been around, like you said, a long time.               |
| 33:15      | I mean, like the usual use case for this people                       |
| 33:18      | used to always share would be like,                                   |
| 33:20      | oh, well, if you wanted to resize a bunch of images,                  |
| 33:23      | you could have a special folder.                                      |
| 33:24      | And when you drag the images into the folder triggers                 |
| 33:27      | the folder action that resizes the images for you,                    |
| 33:30      | and you don't have to run any other automation.                       |
| 33:33      | I just have never found much use for that.                            |
| 33:35      | I would like the way I resize is just with a quick action             |
| 33:38      | or a service.                                                         |
| 33:40      | I like to just do one at a time and then save them                    |
| 33:42      | to the desktop because I'm gonna use them immediately.                |
| 33:46      | I've never really had the need to resize                              |
| 33:48      | a thousand images at once.                                            |
| 33:49      | So I feel like folder actions are better                              |
| 33:52      | with a big pile of files,                                             |
| 33:54      | but I honestly don't find a lot of use for it                         |
| 33:57      | for the stuff I do, but I know they're there.                         |
| 34:00      | [[AppleScript]] is another way that you can run shortcuts                |
| 34:03      | and there's just a simple [[AppleScript]] call.                          |
| 34:05      | Like I did the thing at MacSparky recently                           |
| 34:08      | with a [[Keyboard Maestro]] script                                        |
| 34:10      | and I ran a shortcut in it just with an [[AppleScript]] call.            |
| 34:14      | It's just, it's not that hard, you know?                              |
| 34:17      | Yes, yeah, it is.                                                     |
| 34:18      | And for people going, wait, how hard is this?                         |
| 34:20      | It's called tell application, quote shortcuts,                        |
| 34:24      | quote to run shortcut, quote the name of your shortcut,               |
| 34:28      | quote, that's it.                                                     |
| 34:29      | You can give it input and other things.                               |
| 34:31      | And if you wanna do that, check out the [[AppleScript]]                  |
| 34:34      | dictionary, which you'll find in [[Script Debugger]]                           |
| 34:36      | or [[Script Editor]], but it is a very, very simple shortcut,             |
| 34:40      | which means that if you wanna get started                             |
| 34:43      | and just play with that a little bit,                                 |
| 34:44      | then it's gonna be pretty easy to do                                  |
| 34:46      | and you'll be able to reuse that same logic                           |
| 34:48      | in things like Bunch, [[Keyboard Maestro]],                               |
| 34:50      | [[Alfred]] and so on and so forth,                                        |
| 34:52      | that we do have some special options to share for those.              |
| 34:55      | Yeah, anywhere you can run an [[AppleScript]],                           |
| 34:57      | you can run it and that's nice.                                       |
| 35:02      | It really is, yes.                                                    |
| 35:03      | You can do it in the terminal too and I have,                         |
| 35:06      | I just lost my notes, I have some notes here on it.                   |
| 35:08      | Yeah, yeah, running in the terminal,                                  |
| 35:10      | it's one of those things where perhaps                                |
| 35:12      | it's a little bit geekier,                                            |
| 35:14      | but I'm in the terminal anyway for a bunch of things                  |
| 35:16      | and it's quite nice to be able to pass input                          |
| 35:20      | to a shortcut inside the terminal.                                    |
| 35:24      | And so if you open up the terminal app                                |
| 35:26      | or iTunes, whatever, your app of choice is there,                     |
| 35:29      | on the Mac and just type shortcuts,                                   |
| 35:32      | it won't do much, you're not gonna blow up your computer              |
| 35:34      | by doing this, even if you've got 1063 shortcuts                      |
| 35:37      | without folders, which is what I've last discovered,                  |
| 35:40      | but it'll tell you what to do.                                        |
| 35:42      | And then you can type shortcuts run, name of your shortcut,           |
| 35:45      | you can type shortcuts list,                                          |
| 35:47      | which lists all of your shortcuts and pro tip on that one,            |
| 35:51      | if you type shortcuts list minus minus folders,                       |
| 35:55      | then you can get a list of all your folders back                      |
| 35:58      | and you will also be able to get a list of shortcuts                  |
| 36:01      | in each folder and so on and so forth.                                |
| 36:03      | But it's one of those things where,                                   |
| 36:06      | if you're in the command line anyway doing some things,               |
| 36:08      | then it's nice to have as an option,                                  |
| 36:10      | but I suspect most people probably aren't using that.                 |
| 36:12      | Yeah, that's another one I just don't find much use for.              |
| 36:15      | If I'm going to run it through a script call,                         |
| 36:17      | I'll just do it through AppleScript                                  |
| 36:19      | because I'm rarely in the terminal.                                   |
| 36:22      | Yeah, it makes sense.                                                 |
| 36:23      | There is more though.                                                 |
| 36:25      | Oh yeah, there is, there is.                                          |
| 36:27      | Because, well, I think to start with,                                 |
| 36:30      | we should talk about ShareBot because I mentioned earlier             |
| 36:33      | that the quick actions are not the same as the share sheet.           |
| 36:37      | And that is very evident whenever you go to click share               |
| 36:40      | and there are no shortcuts present.                                   |
| 36:43      | Except if you use ShareBot, in which case,                                |
| 36:46      | you can make a shortcut show up in the menu bar,                      |
| 36:50      | sorry, in the share sheet because that's what it does.                |
| 36:53      | And it's a pretty great application, David, 299                       |
| 36:56      | and it does just do all the things,                                   |
| 36:59      | which makes me pretty darn happy.                                     |
| 37:01      | Yeah, and this is one that I really hope gets                         |
| 37:03      | Sherlocked at some point, but until then, for three bucks,            |
| 37:07      | it's worth it.                                                        |
| 37:08      | Yes, exactly, there could be workarounds                              |
| 37:12      | with a bunch of other things,                                         |
| 37:13      | but you set a default shortcut to run when you do things              |
| 37:19      | and then you will, sorry, to start with,                              |
| 37:24      | you create a run shortcut action,                                     |
| 37:27      | which you can do, you just do it through the ShareBot app             |
| 37:30      | when you set it up.                                                   |
| 37:31      | And then what happens is that is the shortcut that runs               |
| 37:35      | and what it does is it goes through                                   |
| 37:38      | and it tries to pass it basically                                     |
| 37:40      | to the correct option for you                                         |
| 37:44      | so that you get to see.                                               |
| 37:46      | So you choose from your shortcut                                      |
| 37:48      | and it runs the shortcut on each item in your input.                  |
| 37:53      | So if you select 15 things                                            |
| 37:55      | and share those 15 things to shortcuts                                |
| 37:57      | with the run shortcut action through ShareBot,                        |
| 38:00      | it runs the shortcut on those 15 items.                               |
| 38:04      | Yeah, the one that I really like                                      |
| 38:06      | and the one I find myself using the most                              |
| 38:08      | just kind of in under fire is the [[Alfred]] integration.                 |
| 38:12      | And not everybody uses [[Alfred]],                                        |
| 38:14      | we did a whole show on it, both Rose and I are big fans,              |
| 38:17      | but I think the [[Alfred]] integration is great.                          |
| 38:20      | There's a couple different ways to do this.                           |
| 38:22      | [[Stephen Millard]] did one over at [ThoughtAsylum](https://thoughtasylum.com)                       |
| 38:27      | and there's also a kind of a plug-in for [[Alfred]]                       |
| 38:30      | who was just by, I've got it, let me just get in here                 |
| 38:33      | hold on a second.                                                     |
| 38:34      | If it's called Bypass, that is from [[Stephen Millard]].                   |
| 38:37      | No, the one I'm using is called Shortcuts by Vitor Galveo.            |
| 38:47      | And I just type SC and then space                                     |
| 38:51      | in the name of the shortcut and it fires off,                         |
| 38:54      | which is a shortcut workflow for [[Alfred]].                              |
| 38:56      | We'll put a link for both of these and they're both great.            |
| 38:59      | And running a shortcut from [[Alfred]]                                    |
| 39:02      | because I do so much else from [[Alfred]]                                 |
| 39:03      | is kind of the way to go for me.                                      |
| 39:06      | Yes, yes.                                                             |
| 39:07      | One of the things I should mention                                    |
| 39:08      | and that there's going to be a mini-segment                           |
| 39:11      | now probably called the Stephen Millard appreciation segment           |
| 39:14      | is that his shortcuts integration for [[Alfred]],                         |
| 39:18      | he's also got one for a [[Keyboard Maestro]],                             |
| 39:21      | but it really does let you do everything.                             |
| 39:22      | So you can run a shortcut, you can run it with input,                 |
| 39:25      | you can run it for a specific folder,                                 |
| 39:27      | a specific folder with input by name,                                 |
| 39:29      | by name with input on text, on a URL,                                 |
| 39:32      | on a file, all sorts of things.                                       |
| 39:34      | And you can also copy the URL to run a shortcut                       |
| 39:38      | and copy the names of shortcuts                                       |
| 39:40      | or copy your shortcuts, folder names and things like that.            |
| 39:42      | He's really gone all out                                              |
| 39:45      | and this is an amazingly powerful workflow                            |
| 39:48      | and I pretty much just use it to run a shortcut.                      |
| 39:51      | And I feel slightly guilty about that,                                |
| 39:53      | but you know what, it's working brilliantly for that.                 |
| 39:57      | And I'm really pleased that,                                          |
| 39:59      | when I want to play with the other features,                          |
| 40:01      | they're right there.                                                  |
| 40:03      | So that makes it even better.                                         |
| 40:06      | Yeah, I agree.                                                        |
| 40:07      | It's just crazy how much the kind of the Apple ecosystem              |
| 40:12      | has shown up to find ways to make this easy.                          |
| 40:15      | Yeah.                                                                 |
| 40:16      | There's also a [[Stream Deck]] button.                                    |
| 40:21      | Yeah, which as I said,                                                |
| 40:23      | Stephen Miller depreciated in section.                                |
| 40:24      | He did a bypass for shortcuts,                                        |
| 40:27      | which comes in three parts.                                           |
| 40:28      | There's a [[Stream Deck]], there's [[Alfred]]                                 |
| 40:30      | and then there's [[Keyboard Maestro]],                                    |
| 40:32      | which isn't called bypass,                                            |
| 40:34      | but I'm gonna classify it in the same group                           |
| 40:37      | because it's another excellent integration                            |
| 40:41      | with shortcuts that he's made.                                        |
| 40:43      | So, he gets full credit for that.                                     |
| 40:45      | He's really been doing lots of great things.                          |
| 40:47      | We'll have to get him back on the show at some point.                 |
| 40:49      | Let's talk about everything he's been up to.                          |
| 40:52      | But if you're looking for easy ways to run shortcuts,                 |
| 40:55      | fortunately, there's some great people                                |
| 40:57      | who've done all of the hard work for you,                             |
| 40:59      | which is really nice.                                                 |
| 41:02      | Well, shortcuts, who to thank,                                        |
| 41:05      | the Mac automation community would embrace shortcuts                  |
| 41:08      | in a way that makes it easy to trigger them anywhere.                 |
| 41:10      | We still have all the other stuff,                                    |
| 41:12      | [[Keyboard Maestro]], [[Hazel]], [[AppleScript]], Terminal,                      |
| 41:15      | whatever you want.                                                    |
| 41:16      | And now we can mix and match.                                         |
| 41:18      | And that's exactly what I was hoping for                              |
| 41:21      | when this was announced.                                              |
| 41:22      | Exactly, yes.                                                         |
| 41:23      | It is great to have all of the options available to us.               |
| 41:27      | And especially when we can weave them                                 |
| 41:30      | into everything else that we do on a daily basis.                     |
| 41:33      | Well, it's easy to call a shortcut from other automation tools        |
| 41:38      | like [[Keyboard Maestro]] or what have you.                               |
| 41:41      | What I would really like is the ability                               |
| 41:43      | to kind of like go deeper and embed portions of a shortcut,           |
| 41:47      | like in a [[Keyboard Maestro]],                                           |
| 41:49      | shortcuts, contacts, actions are really good.                         |
| 41:52      | And the way I've been getting around it is                            |
| 41:53      | I'll just do the stuff that's easy in [[Keyboard Maestro]] first,         |
| 41:57      | and then I'll do the stuff that's easy to do                          |
| 41:59      | in shortcuts at the end                                               |
| 42:00      | and just call it out of [[Keyboard Maestro]].                             |
| 42:03      | I do, I would like to see even deeper integration,                    |
| 42:08      | but we'll get there.                                                  |
| 42:11      | This is early days.                                                   |
| 42:11      | Yeah, yes, we will.                                                   |
| 42:14      | And it's one of those things where,                                   |
| 42:16      | we'll also see ideas from other people                                |
| 42:19      | as to how we can do things like that.                                 |
| 42:21      | Because my first instinct when you said,                              |
| 42:23      | call actions from individual shortcuts actions                        |
| 42:28      | will create a one action shortcut                                     |
| 42:31      | that will accept the input and then return                            |
| 42:33      | whatever it is that is needed                                         |
| 42:35      | or do whatever the action is that needs to be done.                   |
| 42:37      | And that's what my instinct is,                                       |
| 42:41      | but I don't know if that's necessarily the right thing to do.         |
| 42:44      | Well, that's probably the only way to do it right now,                |
| 42:46      | but I'd like to see it get even more integrated.                      |
| 42:48      | You know me, I'm always trying to find ways                           |
| 42:50      | to make this easier for folks,                                        |
| 42:51      | because I think the easier we make the path,                          |
| 42:54      | the more people that get on it.                                       |
| 42:56      | Yeah, speaking of things to make the path easier,                     |
| 42:59      | I did mention earlier that we would get to [[Hazel]].                     |
| 43:01      | [[Hazel]] has support for run shortcut,                                   |
| 43:04      | and this is an action that you can use inside of [[Hazel]],               |
| 43:07      | and it's going to be easier than using                                |
| 43:10      | the native macOS folder actions in my experience,                     |
| 43:12      | because you can say,                                                  |
| 43:14      | hey, I only want this to run on this kind of thing                    |
| 43:17      | and so on and so forth.                                               |
| 43:18      | And so you get the protection of filtering through [[Hazel]]              |
| 43:21      | as well as whatever filtering you've set up in shortcuts.             |
| 43:25      | So if you only want things with,                                      |
| 43:27      | I don't know, the name bank statement                                 |
| 43:29      | that are PDFs to go through,                                          |
| 43:30      | your shortcut can just accept PDFs,                                   |
| 43:32      | and [[Hazel]] can filter for PDFs with the name bank statement            |
| 43:35      | in whatever your special folder is,                                   |
| 43:38      | which I really appreciate.                                            |
| 43:40      | Yeah, I haven't tried this yet,                                       |
| 43:41      | but like one of my common [[Hazel]] plug-ins                              |
| 43:44      | is I have an AppleScript that adds a task to OmniFocus               |
| 43:47      | based on the type of document that I'm processing.                    |
| 43:50      | Like if I get the water bill,                                         |
| 43:53      | then it adds a task, pay water bill to OmniFocus                      |
| 43:56      | using an AppleScript.                                                |
| 43:56      | Well, AppleScript is kind of creaky.                                 |
| 43:59      | I'm assuming I could make a really simple shortcut                    |
| 44:02      | that would add that OmniFocus task                                    |
| 44:04      | and just run it out of [[Hazel]]                                          |
| 44:05      | when it identifies a water bill.                                      |
| 44:07      | I need to go in and play with that,                                   |
| 44:09      | but I think that wouldn't be that difficult.                          |
| 44:12      | Nope, it wouldn't be.                                                 |
| 44:13      | The only thing I'll say is when you first enable it,                  |
| 44:14      | if you've got over 1,000 shortcuts, it takes a while.                 |
| 44:18      | And yeah, I had not enabled it on my work Mac,                        |
| 44:22      | so I just reached over and enabled it,                                |
| 44:24      | and my work Mac is currently sitting there                            |
| 44:26      | with a little beach ball on [[Hazel]]                                     |
| 44:28      | while it tries to update the 1,000 shortcuts plus                     |
| 44:31      | that I've given it access to.                                         |
| 44:32      | Oh yeah, and it is, that's a whole separate problem,                  |
| 44:36      | like managing large volumes of scripts and shortcuts.                 |
| 44:42      | Like my folder for the shortcuts for Mac Field Guide                  |
| 44:45      | currently has 140 downloadable scripts                                |
| 44:48      | for the one I released the Field Guide.                               |
| 44:50      | And like if I try to like move things around in there,                |
| 44:54      | it is really creaky.                                                  |
| 44:55      | And that in icon view, it's really creaky.                            |
| 44:58      | In list view, it's impossible.                                        |
| 45:00      | I don't know why,                                                     |
| 45:01      | but list view just completely breaks                                  |
| 45:03      | when you've got more than like 20 or 30 shortcuts in a folder.        |
| 45:08      | Yeah, the list view is something that I'm glad it exists,             |
| 45:14      | but I find it just not very helpful                                   |
| 45:18      | because I don't get more shortcuts in the view.                       |
| 45:22      | I just get the information about how many actions I've got            |
| 45:24      | and when they were last modified.                                     |
| 45:25      | I can't add more columns.                                             |
| 45:27      | I can't sort by any of those columns.                                 |
| 45:29      | And running a shortcut means I have to go all the way                 |
| 45:34      | to the left every time to click on it.                                |
| 45:38      | Whereas if I'm in the grid view,                                      |
| 45:39      | then I just click on the top right of any shortcut                    |
| 45:41      | and it's a pretty big click target.                                   |
| 45:43      | So that works nicely.                                                 |
| 45:46      | This episode of The Automators is brought to you by Fitbod.           |
| 45:49      | Go to Fitbod.me/automators                                      |
| 45:52      | to get 25% off your membership                                        |
| 45:54      | and get stronger, faster with a fitness plan that fits you.           |
| 45:58      | Between balancing work, family,                                       |
| 46:00      | and everything else you have going in your life,                      |
| 46:03      | it can sometimes be hard to make fitness a priority.                  |
| 46:06      | What you need is a program that works with you,                       |
| 46:08      | not against you, and that's why you need Fitbod.                      |
| 46:11      | Fitbod's algorithm learns about you, your goals,                      |
| 46:14      | and your training ability                                             |
| 46:15      | and will craft a personalised exercise plan                           |
| 46:18      | that's unique to you.                                                 |
| 46:19      | And their app makes it incredibly easy                                |
| 46:21      | to learn exactly how to perform each exercise.                        |
| 46:24      | Personal fitness isn't about competing with other people.             |
| 46:27      | You don't want to look to others                                      |
| 46:29      | to try and stack up against them and do what they do.                 |
| 46:31      | What you need is something that will work for you.                    |
| 46:34      | And that's when it'll really stick                                    |
| 46:36      | when you see the results you're looking for.                          |
| 46:39      | Fitbod uses data to create                                            |
| 46:40      | and adjust your dynamic fitness plan                                  |
| 46:42      | and you'll have instant access                                        |
| 46:44      | to your own personalised routine in their fantastic app.              |
| 46:48      | So you can make progress in your goals from anywhere.                 |
| 46:51      | I'm a Fitbod user.                                                    |
| 46:52      | I love it because it does really track with me.                       |
| 46:55      | I'm not looking for six pack abs here.                                |
| 46:57      | I just want to be fit and take better care of myself.                 |
| 47:00      | And Fitbod does that without screaming in my ear.                     |
| 47:02      | It gives me reasonable good exercises I can do                        |
| 47:06      | while watching nerdy YouTube videos.                                  |
| 47:08      | It's a perfect fit for me.                                            |
| 47:10      | Everyone's fitness path is different,                                 |
| 47:12      | which is why Fitbod does so much work                                 |
| 47:14      | to make sure they customise things exactly to suit you.               |
| 47:17      | They make sure to learn from your last workout                        |
| 47:19      | so your next one will be even better,                                 |
| 47:21      | whether you work out twice a day or twice a week.                     |
| 47:24      | Fitbod even tracks your muscle recovery                               |
| 47:27      | to make sure your plan is balanced                                    |
| 47:29      | with a variety of exercises                                           |
| 47:30      | to make sure you're not overworking anything.                         |
| 47:33      | The Fitbod app is so simple to use                                    |
| 47:35      | and recently got an update with a fantastic new design.               |
| 47:39      | With brand new HD video tutorials shot from multiple angles           |
| 47:42      | to make sure that learning each exercise is a breeze.                 |
| 47:46      | And it also integrates with your Apple Watch,                         |
| 47:48      | Wear OS, SmartWatch and apps like Strava, Fitbit                      |
| 47:51      | and Apple Health.                                                     |
| 47:53      | Personalised training of this quality can be expensive,               |
| 47:56      | but Fitbod is just $12.99 a month or $79.99 a year.                   |
| 48:00      | But you can get 25% off your membership                               |
| 48:03      | by signing up at Fitbod.me/automators.                          |
| 48:07      | So go now and get your customised fitness plan                        |
| 48:09      | at Fitbod.me/automators                                         |
| 48:12      | and you'll get 25% off your membership.                               |
| 48:15      | Once again, that's Fitbod.me/automators                         |
| 48:18      | for that 25% off.                                                     |
| 48:20      | And our thanks to Fitbod for their support of the automators          |
| 48:23      | and all of Relay FM.                                                  |
| 48:26      | Okay, [[Stream Deck]] check-ins, Rose.                                    |
| 48:30      | We did the [[Stream Deck]] show.                                          |
| 48:32      | That was a long time ago in relative terms.                           |
| 48:35      | What do you do with your [[Stream Deck]] these days?                      |
| 48:38      | I'm pressing buttons pretty much                                      |
| 48:40      | and the buttons are doing various different things                    |
| 48:42      | which is pretty great.                                                |
| 48:43      | I have been playing with creating even more automations               |
| 48:48      | where I just call like these actions at this time                     |
| 48:52      | and those actions at that time                                        |
| 48:54      | so that I can have a [[Drafts]] button                                    |
| 48:57      | that most of the time will just pace whatever it is                   |
| 49:00      | into a new draft and bring it to the front.                           |
| 49:02      | But if I am, for example, podcasting,                                 |
| 49:05      | then it will paste it into a draft                                    |
| 49:07      | and or rather create a new draft in the background                    |
| 49:10      | and just leave it there                                               |
| 49:11      | because if I'm saving stuff into [[Drafts]] while I'm podcasting          |
| 49:14      | it's usually because I just want to out the way                       |
| 49:15      | for the time being and I'll circle back to it later.                  |
| 49:18      | Yeah, I am finding myself using much more advantage                   |
| 49:22      | of the icon pages before I would try and keep it limited              |
| 49:28      | like I'd have one page for MacSparky or one page.                    |
| 49:31      | And even though I've got the big one,                                 |
| 49:34      | I'm getting to where I just have no compunction                       |
| 49:37      | about making additional screens.                                      |
| 49:39      | Like I have a screen just for this podcast                            |
| 49:42      | and on that it's got a ton of weird things.                           |
| 49:45      | Like it's got some web links                                          |
| 49:47      | like to the sponsor read page                                         |
| 49:49      | or to the show planning documents.                                    |
| 49:51      | It's got a [[Keyboard Maestro]] script                                    |
| 49:55      | that takes the selected file                                          |
| 49:57      | and copies it to the folder that we share with our editor.            |
| 50:02      | And I've got another one that just opens up a folder                  |
| 50:05      | where we normally save our recorded files.                            |
| 50:07      | It's just like all the tedious stuff I do                             |
| 50:09      | in relation to the show,                                              |
| 50:10      | I've put on a button one way or another.                              |
| 50:12      | I've got one, there's a button here                                   |
| 50:14      | that just displays the time zone for you.                             |
| 50:17      | So I know what time it is where you're at at any time.                |
| 50:20      | I mean, there's, I really started to think about it more              |
| 50:23      | like, hey, just these pages are free.                                 |
| 50:26      | You know what I mean?                                                 |
| 50:27      | It doesn't cost extra to make extra pages.                            |
| 50:30      | And the get out of jail free card,                                    |
| 50:32      | if you wanna do that to me are,                                       |
| 50:34      | I have what I call home screen buttons.                               |
| 50:36      | I have personal and I have MacSparky home screen buttons.            |
| 50:41      | And then I have another one                                           |
| 50:43      | that's like a home screen button                                      |
| 50:44      | that's like a master directory to a bunch of other pages.             |
| 50:47      | So, and those are always in the lower left three buttons.             |
| 50:52      | Like the lowest row, bottom three buttons                             |
| 50:56      | are always the same buttons in every screen I make.                   |
| 50:59      | So anytime I want, if I drill down too deeply,                        |
| 51:02      | I just push one button and get back to kind of the root.              |
| 51:05      | And I find that works just fine.                                      |
| 51:07      | And so I've been making a lot more pages                              |
| 51:10      | as I've been kind of embracing that, that theory.                     |
| 51:13      | Yes.                                                                  |
| 51:14      | Yeah.                                                                 |
| 51:15      | I've been doing something similar, pages and profiles.                |
| 51:17      | And one of the things that I realised                                 |
| 51:19      | because somebody said in the automators form                          |
| 51:22      | after the last episode,                                               |
| 51:23      | because I mentioned in the last episode                               |
| 51:25      | where we did a quick check in on the pedal,                           |
| 51:26      | that one of my problems with profiles                                 |
| 51:28      | is that it pings back to my default profile after a while.            |
| 51:31      | And they said, you know,                                              |
| 51:32      | you've not got any applications                                       |
| 51:33      | that are activating certain profiles or something, do you?            |
| 51:36      | And I thought, no, no, I don't.                                       |
| 51:37      | And I went through and checked and I realised,                        |
| 51:40      | default is an optional checkbox.                                      |
| 51:43      | So you don't have to have a default profile.                          |
| 51:50      | And so I thought, I'll just try on checking it                        |
| 51:52      | because I can get back to my personal default profile                 |
| 51:56      | anytime I like by just pressing,                                      |
| 51:57      | I've got the same as you, David.                                      |
| 51:58      | I've got a button on every [[Stream Deck]] profile                        |
| 52:00      | to get me back there.                                                 |
| 52:02      | And you know what?                                                    |
| 52:03      | That person solved my problem by asking a question.                   |
| 52:05      | If I don't have a default profile,                                    |
| 52:07      | then my [[Stream Deck]] doesn't randomly seemingly switch profiles,       |
| 52:11      | which means that I can activate specific profiles                     |
| 52:15      | on my [[Stream Deck#Stream Deck Pedal\|pedal]] and on my main [[Stream Deck]]                                |
| 52:17      | and it will just stay there until I go back to the home               |
| 52:20      | instead of it seemingly randomly                                      |
| 52:23      | after just XYZ period of time switching my profiles back.             |
| 52:27      | And that has been a game changer                                      |
| 52:29      | because it's meant that instead of me creating folders                |
| 52:33      | and so on, I've extracted all of that                                 |
| 52:35      | and they're now in even more profiles than I had before,              |
| 52:39      | which works really, really well.                                      |
| 52:40      | And I'm really glad.                                                  |
| 52:43      | I've forgotten who it was in the Automated Forum                      |
| 52:44      | who asked if I had any application-specific profiles                  |
| 52:48      | that might be causing the bounce back,                                |
| 52:51      | but whoever it is deserves the credit                                 |
| 52:53      | for making sure that I went through and poked                         |
| 52:56      | and realised, hey, I don't actually need a default profile.           |
| 53:00      | Yeah, I actually do use the feature                                   |
| 53:01      | where with some apps, when I trigger an app,                          |
| 53:05      | it jumps to their profile.                                            |
| 53:07      | I find that useful for a couple things like for [[Apple Mail]]            |
| 53:11      | because I've got a very complicated set of AppleScripts              |
| 53:14      | running to kind of add features to Apple Mail.                        |
| 53:17      | And I get a whole list of buttons                                     |
| 53:19      | whenever I go to that page.                                           |
| 53:20      | And I just like that they just automatically pop up                   |
| 53:23      | whenever I go in Apple Mail so I can process mail                     |
| 53:25      | without having to like navigate to it on the [[Stream Deck]].             |
| 53:30      | The other one I do that for,                                          |
| 53:31      | which I may turn off as an [[Obsidian]]                                   |
| 53:33      | because I've also programmed a lot of [[Obsidian]]                        |
| 53:36      | into [[Stream Deck]] buttons.                                             |
| 53:38      | So there's a couple where it makes sense for me,                      |
| 53:40      | but generally I don't have those automatic triggers                   |
| 53:45      | based on apps.                                                        |
| 53:46      | Yeah, yeah, that makes sense.                                         |
| 53:48      | It's one of those things where I like the idea                        |
| 53:53      | of having automated things based on apps,                             |
| 53:55      | but sometimes it ends up with unexpected results.                     |
| 54:00      | Let's just say where I go to try and do something                     |
| 54:04      | and then it ends up not quite coming back                             |
| 54:09      | with the results that I'd wanted.                                     |
| 54:11      | And I don't know 100% why that is,                                    |
| 54:15      | but I'm okay with manually selecting my profiles                      |
| 54:19      | depending on what I'm going to.                                       |
| 54:20      | The only thing I wish is that there was a way to do that              |
| 54:22      | through anything other than a button on the [[Stream Deck]]               |
| 54:27      | or opening the [[Stream Deck]] software                                   |
| 54:31      | and changing the profile,                                             |
| 54:32      | because that is unfortunately the one thing                           |
| 54:35      | that I really would like to have entirely automated.                  |
| 54:38      | So when I select my automators recording bunch,                       |
| 54:41      | then it also changes my [[Stream Deck]] profile                           |
| 54:44      | to my Automators profile,                                             |
| 54:45      | giving me the things that I need there.                               |
| 54:47      | Yeah, that's true, I hadn't thought of that.                          |
| 54:49      | I do find the process of customising it kind of delightful.           |
| 54:54      | It's just the kind of like nerd candy that works for me.              |
| 54:58      | So I do enjoy customising it,                                         |
| 55:00      | but I try not to do it during like productive work time.              |
| 55:03      | I'll make a note.                                                     |
| 55:05      | I find that the KM Link third-party plugin                            |
| 55:09      | is still the one I use the most                                       |
| 55:12      | because so much of the stuff I want to,                               |
| 55:14      | if I don't put it on a button,                                        |
| 55:15      | and there are ways you can do it with built-in stuff                  |
| 55:17      | like a keyboard shortcut.                                             |
| 55:20      | There are some basic rudimentary ones                                 |
| 55:22      | you can put on buttons in it.                                         |
| 55:24      | Like earlier I talked about opening a specific folder.                |
| 55:27      | I just use the built-in action to open a folder.                      |
| 55:29      | That makes sense for me.                                              |
| 55:30      | But for anything with any complexity,                                 |
| 55:34      | I just build a [[Keyboard Maestro]] script                                |
| 55:36      | and just tie it with KM Link.                                         |
| 55:38      | And that is by far the most useful for me                             |
| 55:42      | because I can do almost anything with [[Keyboard Maestro]],               |
| 55:45      | including launch shortcuts.                                           |
| 55:46      | So it's just like the kind of like magic bullet.                      |
| 55:50      | A [[Keyboard Maestro]] for me has become a liability                      |
| 55:54      | in a certain extent because, you know,                                |
| 55:56      | would they say when you have a hammer,                                |
| 55:58      | everything's a nail?                                                  |
| 56:00      | I mean, for me, [[Keyboard Maestro]] is like the place                    |
| 56:03      | I want to automate everything on my Mac                               |
| 56:05      | because I'm so familiar with its tool set                             |
| 56:07      | and what it can do and it's so powerful                               |
| 56:10      | that it almost holds me back on some things.                          |
| 56:13      | Yes, it is one of those things                                        |
| 56:14      | where I end up using [[Keyboard Maestro]]                                 |
| 56:16      | for a lot of things that maybe it wasn't intended to do.              |
| 56:20      | But you know what,                                                    |
| 56:21      | it's been working pretty darn well for that.                          |
| 56:23      | Yeah, it does, that's the thing, right, it works.                     |
| 56:25      | Yeah, it can save the day in so many ways                             |
| 56:28      | and I'm gonna give a great example here.                              |
| 56:30      | So I'm using KM Link and [[Keyboard Maestro]]                             |
| 56:33      | with my Stream Deck pedal.                                            |
| 56:35      | Okay, and so we're talking right now,                                 |
| 56:36      | we're recording a podcast and I click over                            |
| 56:39      | to add a link to the show notes or something                          |
| 56:41      | and then we need to add a timestamp.                                  |
| 56:43      | Okay, so the middle button right now, I press it,                     |
| 56:45      | it switches back to [[Safari]]                                            |
| 56:47      | and it switches to the [[Safari]] window with Google Doc                  |
| 56:50      | in the title, it presses command down arrow                           |
| 56:52      | so that I'm at the bottom of the show notes,                          |
| 56:55      | it puts in a return and then it inserts the timestamp                 |
| 56:58      | of our current recording time.                                        |
| 57:00      | And that was no work at all pretty much                               |
| 57:03      | to set up with you or my show,                                        |
| 57:04      | I'd already done some futzing around to get a macro                   |
| 57:06      | that does the timestamp.                                              |
| 57:09      | So when we start recording,                                           |
| 57:11      | I save the current timestamp into a variable                          |
| 57:15      | through [[Keyboard Maestro]] and that macro starts                        |
| 57:17      | the recording in [[Audio Hijack]] as well.                                |
| 57:20      | And I've got another one which gets the current timestamp             |
| 57:23      | and that's hooked up to a couple of things,                           |
| 57:24      | a keyboard shortcut                                                   |
| 57:25      | and this amazing [[[Stream Deck#Stream Deck Pedal\|Stream Deck Pedal]] macro.                             |
| 57:28      | So from anywhere at any time, I can just hit the button,              |
| 57:31      | it's gonna activate that window, go to the bottom,                    |
| 57:34      | hit return and insert a timestamp.                                    |
| 57:37      | And that's pretty amazing.                                            |
| 57:38      | And I'm just sitting here pressing it wondering                       |
| 57:39      | how many timestamps it's gonna take                                   |
| 57:41      | for David to start backspacing on some of those.                      |
| 57:43      | No, I'm watching them and I'm fascinated.                             |
| 57:46      | And like one of the things I said earlier,                            |
| 57:48      | I've got this MacBook Pro that I'm a vagabond right now               |
| 57:51      | because for various reasons that some of the kids are home            |
| 57:54      | and we just have a lot of people in our small house right now         |
| 57:59      | and I'm going to start a construction project                         |
| 58:01      | to solve that problem.                                                |
| 58:02      | But when I came upstairs today                                        |
| 58:05      | and I have a little temporary desk                                    |
| 58:07      | and I'm recording in the bedroom                                      |
| 58:08      | back to the MacSparky roots,                                         |
| 58:11      | but I don't have my [[Stream Deck]] or [[[Stream Deck#Stream Deck Pedal\|my pedal]] with me                   |
| 58:13      | because it's all wired into my desk downstairs.                       |
| 58:16      | And if it wasn't for the fact,                                        |
| 58:18      | I'm about to spend a pile of money                                    |
| 58:20      | adding a room to my house                                             |
| 58:21      | and this will be a permanent thing for me.                            |
| 58:24      | I would be so tempted to just buy a second one                        |
| 58:27      | and have it up here when I do this.                                   |
| 58:29      | Cause like I am so jealous, Rose has put like,                        |
| 58:32      | I think she's taunting me now                                         |
| 58:35      | that they're just showing up over and over.                           |
| 58:37      | Are you just holding your foot on the pedal, Rose?                    |
| 58:38      | What's going on?                                                      |
| 58:39      | No, and so this is something that I actually really like.             |
| 58:41      | If you press your foot on the pedal and you leave it there,           |
| 58:44      | it doesn't repeat the entry.                                          |
| 58:46      | And this is something that that's just what [[Stream Deck]] does.         |
| 58:49      | If you press and hold any button,                                     |
| 58:50      | it won't repeat it, at least on the pedal.                            |
| 58:53      | And so I can just sit here                                            |
| 58:54      | and I've got my foot in a great position.                             |
| 58:56      | All those years of piano lessons                                      |
| 58:58      | have very clearly paid off                                            |
| 59:00      | because I'm just pedaling away taunting David with,                   |
| 59:02      | God, I have no idea how 100 of these things that are,                 |
| 59:07      | it's all good, it's all good.                                         |
| 59:09      | But I have to say it is incredibly great to have that                 |
| 59:13      | cause it means, cause what I always do,                               |
| 59:15      | and I should note that this is kind of critical                       |
| 59:17      | to the workflow.                                                      |
| 59:17      | So I always have the automators dock                                  |
| 59:19      | in a separate [[Safari]] window.                                          |
| 59:21      | I don't open anything else in that window.                            |
| 59:23      | Everything else happens in another [[Safari]] window,                     |
| 59:25      | which means that I can use,                                           |
| 59:27      | so I'm using the activate [[Safari]] command,                             |
| 59:30      | which I don't think I need,                                           |
| 59:31      | but I had it in there to start with.                                  |
| 59:33      | And so I've just left it there.                                       |
| 59:34      | And then I'm using the bring windows                                  |
| 59:36      | with name containing to front.                                        |
| 59:39      | And this is a great [[Keyboard Maestro]] action.                          |
| 59:41      | So you can say bring to front                                         |
| 59:43      | or minimise a minimise zoom, close, centre,                           |
| 59:46      | move and resize, whatever you like.                                   |
| 59:48      | Windows with the title containing whatever you type.                  |
| 59:52      | And then you can even specify a specific application.                 |
| 59:54      | And that's what I've done                                             |
| 59:55      | because there might be something else                                 |
| 59:57      | with a window name that says Google lock.                             |
| 59:59      | But I want specifically the [[Safari]] window                             |
| 01:00:01   | with Google lock for this,                                            |
| 01:00:03   | so that I can jump to it.                                             |
| 01:00:05   | And then it's just keystroke command down arrow,                      |
| 01:00:08   | keystroke return, and then execute macro timestamp marker,            |
| 01:00:11   | which does magic with timestamps and everything                       |
| 01:00:14   | to get that all in, which works great.                                |
| 01:00:17   | I'm really pleased with it.                                           |
| 01:00:18   | And what more could I want?                                           |
| 01:00:21   | When we covered it on the [[Stream Deck]] on Mac power users,             |
| 01:00:24   | Steven and I were joking,                                             |
| 01:00:25   | somebody on Etsy 3D printed a thing                                   |
| 01:00:28   | where you can put two [[Stream Deck#Stream Deck XL\|Stream Deck XL]] together.                    |
| 01:00:31   | So you have like essentially,                                         |
| 01:00:32   | I think 72 buttons instead of 36.                                     |
| 01:00:37   | And we're like, who would want one of these?                          |
| 01:00:38   | I'm thinking, I think Rose might want one.                            |
| 01:00:41   | I think Rose could find one.                                          |
| 01:00:42   | You know what I'm thinking, David?                                    |
| 01:00:43   | I'm thinking that another [[Stream Deck#Stream Deck XL\|Stream Deck XLs]].                         |
| 01:00:46   | So you've got one on the desk upstairs                                |
| 01:00:47   | and one on the desk downstairs,                                       |
| 01:00:49   | and then the 3D printed thing                                         |
| 01:00:50   | when you get your fancy new studio to put them together.              |
| 01:00:52   | Yeah, wow.                                                            |
| 01:00:54   | You are such an enabler.                                              |
| 01:00:56   | The other person I thought might want it would be Dave Metzger,       |
| 01:00:58   | who was a guest on our show, who's a music composer,                  |
| 01:01:00   | and they need so many buttons.                                        |
| 01:01:02   | So he would actually have a legitimate use for it.                    |
| 01:01:04   | But with me switching through pages,                                  |
| 01:01:06   | the way I'm doing now,                                                |
| 01:01:07   | I just don't think I need any more buttons.                           |
| 01:01:09   | I'm good.                                                             |
| 01:01:10   | But man, I do love that [[Stream Deck]].                                  |
| 01:01:13   | That has really taken off the last couple of years.                   |
| 01:01:17   | It really has.                                                        |
| 01:01:17   | And when Elgato shipped the 100-button [[Stream Deck]],                   |
| 01:01:21   | then I'll be right there queuing up behind you.                       |
| 01:01:23   | Oh, really?                                                           |
| 01:01:24   | And smiling that you said you didn't need more buttons                |
| 01:01:26   | because it's one of those things,                                     |
| 01:01:29   | and this is the same in home automation as well, right?               |
| 01:01:31   | Where we've added smart light bulbs to our house,                     |
| 01:01:33   | so now we can pull out our phones                                     |
| 01:01:35   | and tap the buttons on there.                                         |
| 01:01:36   | Instead of pressing the button on the wall,                           |
| 01:01:38   | but you still end up adding buttons in places                         |
| 01:01:41   | because buttons are convenient.                                       |
| 01:01:43   | They don't require you to really think about things.                  |
| 01:01:45   | You press the button and the stuff happens.                           |
| 01:01:47   | And I think that's why the [[Stream Deck]] works so well,                 |
| 01:01:50   | because not only do you have the button                               |
| 01:01:52   | that makes the stuff happen,                                          |
| 01:01:53   | but it's got the image on it                                          |
| 01:01:54   | to show you what is going to happen.                                  |
| 01:01:57   | And that is, that's a really nice feature.                            |
| 01:02:00   | And the Stream Deck pedal doesn't have pictures on it                 |
| 01:02:02   | for obvious reasons.                                                  |
| 01:02:03   | My feet can't see.                                                    |
| 01:02:05   | But it does work exceptionally well.                                  |
| 01:02:08   | So I can just, you know, sit here and press a button                  |
| 01:02:12   | and it's gone and it's inserted the timestamp.                        |
| 01:02:15   | And that's it.                                                        |
| 01:02:16   | I mean, hypothetically, if I push a button on Amazon,                 |
| 01:02:18   | I could have a second one tomorrow, I'm just saying.                  |
| 01:02:21   | I mean, it's a very hypothetical theory,                              |
| 01:02:24   | but I'm sure Amazon would be capable                                  |
| 01:02:26   | of delivering another one tomorrow for you, David.                    |
| 01:02:29   | Who do you think as listeners,                                        |
| 01:02:31   | we can, if you want to say in the form,                               |
| 01:02:33   | who do you think of us as most likely to buy a second one first?      |
| 01:02:37   | I think it's David.                                                   |
| 01:02:39   | I think it's you, but I don't know.                                   |
| 01:02:41   | I mean, I've got my stream day pedal.                                 |
| 01:02:43   | I've got my [[Stream Deck]].                                              |
| 01:02:44   | And I mean, I have space on my desk,                                  |
| 01:02:46   | but I don't really have more space.                                   |
| 01:02:48   | Now I have seen a couple of people in our forums.                     |
| 01:02:51   | Martin springs to mind who've got two Stream Decks                    |
| 01:02:55   | and they use one pretty much for like switching profiles              |
| 01:02:59   | on their main one, which I love the idea of.                          |
| 01:03:01   | I really do, but it also kind of feels like a waste.                  |
| 01:03:06   | Sometimes I'm sitting there going,                                    |
| 01:03:08   | I'm really not using my [[Stream Deck]] that much.                        |
| 01:03:10   | And then I'd sort of glance down at the calendar icon again,          |
| 01:03:15   | just to see, wait, is that orange yet?                                |
| 01:03:18   | Yep, okay, I need to start preparing for the next meeting             |
| 01:03:20   | and go, even if I'm not using it 100% as like a macro pad,            |
| 01:03:24   | I'm using as an information pad                                       |
| 01:03:26   | because I've got TJ Luoma as little fantastical                       |
| 01:03:30   | or iCalBuddy magic [[Keyboard Maestro]] actions                           |
| 01:03:35   | which change the colour of that button                                 |
| 01:03:38   | so that I get updated calendar information                            |
| 01:03:42   | on the [[Stream Deck]] in one particular spot.                            |
| 01:03:47   | And if I press that button,                                           |
| 01:03:48   | then it will open fantastical for me                                  |
| 01:03:50   | to the calendar event, which is pretty great.                         |
| 01:03:52   | Yeah, see, and for me, I just don't use it that way.                  |
| 01:03:54   | For me, it really is a macro pad.                                     |
| 01:03:57   | For me, if information is gonna make it to my eyeballs,               |
| 01:04:00   | it needs to be in my menu bar or on my screen somewhere.              |
| 01:04:02   | I just don't look down at the [[Stream Deck]] for information.            |
| 01:04:05   | I mean, I don't really look at it for information                     |
| 01:04:07   | because I'm not reading that information most of the time,            |
| 01:04:10   | but as I glance down to press a button on there,                      |
| 01:04:14   | I'll find, I'll realise, hey, that's orange.                          |
| 01:04:16   | Oh, right, need to start wrapping up or something.                    |
| 01:04:18   | It's not something that I'm necessarily                               |
| 01:04:21   | deliberately consciously aware of,                                    |
| 01:04:23   | but I am aware of it as a thing                                       |
| 01:04:26   | and that's been really helpful, actually.                             |
| 01:04:28   | And I have to say, I'm really pleased that the [[Stream Deck]]            |
| 01:04:30   | can do things like that                                               |
| 01:04:32   | because that just makes it into an even more powerful tool.           |
| 01:04:38   | If you're a software engineer, you've been there.                     |
| 01:04:40   | It's 9pm, you'll find the unwinding from work,                        |
| 01:04:42   | but then your phone buzzes with an alert.                             |
| 01:04:44   | Something's broken and your mind's already racing                     |
| 01:04:46   | at what could be wrong.                                               |
| 01:04:48   | Is it the backend or the front end?                                   |
| 01:04:50   | Is it the network or is it a server?                                  |
| 01:04:52   | And now the whole team's scrambling from tool to tool                 |
| 01:04:54   | and messaging person after person                                     |
| 01:04:55   | to try and find and fix the issue.                                    |
| 01:04:57   | That won't happen if you get New Relic.                               |
| 01:05:00   | New Relic combines 16 different monitoring tools                      |
| 01:05:02   | that you'd normally buy separately                                    |
| 01:05:03   | so engineering teams can see across their entire software             |
| 01:05:05   | stack in one place.                                                   |
| 01:05:07   | More importantly, you can pinpoint issues                             |
| 01:05:09   | down to the line of code                                              |
| 01:05:10   | so you know exactly why the problem happened                          |
| 01:05:12   | and you can resolve it quickly.                                       |
| 01:05:14   | That's why Dev and Ops teams at DoorDash, GitHub, Epic Games          |
| 01:05:17   | and more than 14,000 other companies                                  |
| 01:05:19   | use New Relic to debug and improve their software.                    |
| 01:05:22   | Whether you run a cloud native startup                                |
| 01:05:23   | or a 14,500 company,                                                  |
| 01:05:25   | it takes just five minutes to set up New Relic                        |
| 01:05:27   | in your environment.                                                  |
| 01:05:28   | That next 9 p.m. call is just waiting to happen.                      |
| 01:05:31   | Get New Relic before it does.                                         |
| 01:05:33   | And you can get access to the whole New Relic platform                |
| 01:05:35   | and 100 gigabytes of data free forever.                               |
| 01:05:37   | No credit card required.                                              |
| 01:05:39   | Sign up at NewRelic.com/Automators.                             |
| 01:05:41   | That's N-E-W-R-E-L-I-C.com/Automators.                          |
| 01:05:47   | That URL one more time, NewRelic.com/Automators.                |
| 01:05:50   | Our thanks to New Relic for their support of this show                |
| 01:05:52   | and all of Relay FM.                                                 |
| 01:05:53   | So [[Obsidian]] is a thing that comes up on our show once in a while.     |
| 01:05:59   | I think I'm really invested in it                                     |
| 01:06:01   | as kind of my note storage reference system at this point.            |
| 01:06:04   | I think you are still, are you still [[Obsidian]]?                        |
| 01:06:07   | Yeah, I use [[Obsidian]] for a lot of things,                             |
| 01:06:10   | but a lot of that is essentially markdown notes of stuff              |
| 01:06:15   | that I just want to be able to keep going and add to                  |
| 01:06:17   | and use as reference and things like that.                            |
| 01:06:20   | So, if there's text that I keep to send to my parents                 |
| 01:06:25   | every single time they ask,                                           |
| 01:06:26   | wait, how do we do this particular thing?                             |
| 01:06:28   | Then I've got a help the parents folder in [[Obsidian]] for it            |
| 01:06:33   | and things like that.                                                 |
| 01:06:34   | And I've got other stuff in there too,                                |
| 01:06:36   | project information, lots of project information.                     |
| 01:06:40   | And I've got work project information                                 |
| 01:06:41   | in a specific work vault as well.                                     |
| 01:06:44   | And then I've got, I've started creating documentation                |
| 01:06:48   | for my home and my home automation                                    |
| 01:06:51   | so that I know, for example,                                          |
| 01:06:53   | I've got all of my different devices in here with,                    |
| 01:06:59   | for example, their fixed IP addresses,                                |
| 01:07:01   | their MAC addresses, which physical room they're located in           |
| 01:07:04   | and whether they're connected via ethernet or Wi-Fi.                  |
| 01:07:07   | So that in the event that something goes weird                        |
| 01:07:10   | with my network, I'll be able to get that information back.           |
| 01:07:13   | And then I even, and this is the really nerdy bit,                    |
| 01:07:16   | I created a diagram using Mermaid.js of my network,                   |
| 01:07:24   | which means that I have like an entire view of my network             |
| 01:07:28   | so I can see exactly what's connected to what                         |
| 01:07:30   | and how it all hooks up together, which is really good.               |
| 01:07:33   | And when I was moving some stuff around in my office                  |
| 01:07:35   | the other day, I actually did update it as I went,                    |
| 01:07:37   | which I was very pleased that I did,                                  |
| 01:07:40   | just because these things are only useful                             |
| 01:07:43   | if they're up to date.                                                |
| 01:07:44   | If they're not up to date, then they're not so great.                 |
| 01:07:47   | But what I've done is each of those options in my,                    |
| 01:07:52   | or each of the entries in my network diagram                          |
| 01:07:55   | links to a page for that item,                                        |
| 01:07:57   | which has like the MAC address and everything on it.                  |
| 01:08:00   | And then I went kind of crazy with the [[Obsidian]] [[Dataview]] tables       |
| 01:08:06   | and that prints out a table of all of the different devices           |
| 01:08:09   | and their information as well,                                        |
| 01:08:11   | which I'm just really impressed as a thing I can do to be honest.     |
| 01:08:15   | Yeah, I had a listener ask me,                                        |
| 01:08:17   | he said, I was listening to Automators                                |
| 01:08:18   | and you guys started talking about [[Obsidian]]                           |
| 01:08:20   | and I didn't even know what you were talking about.                   |
| 01:08:23   | We did a show on it on Mac Power Users.                                |
| 01:08:25   | [[Obsidian]] is basically, it takes a folder full of markdown folders     |
| 01:08:30   | and it adds like power tools on top of them,                          |
| 01:08:32   | adds a very easy way to link to them                                  |
| 01:08:34   | with like wiki style double brackets.                                 |
| 01:08:37   | So you can jump between notes,                                        |
| 01:08:38   | but then there's a very rich community of third party plugins for it. |
| 01:08:43   | And the developers have just been super aggressive                    |
| 01:08:45   | about making this a really awesome product.                           |
| 01:08:48   | And it is an electron app,                                            |
| 01:08:51   | which usually I'm against those,                                      |
| 01:08:53   | but this one is like the exception for me, my big exception.          |
| 01:08:57   | But they've got like a end-to-end encryption model                    |
| 01:09:00   | where if you pay them, you can get it in and encrypted.               |
| 01:09:02   | There's just a whole lot to do with it.                               |
| 01:09:04   | But from an automation perspective,                                   |
| 01:09:06   | there's a lot in here if you're an automator.                         |
| 01:09:09   | Rose just mentioned, for instance, [[Dataview]].                          |
| 01:09:12   | And [[Dataview]] is one of the plugins                                    |
| 01:09:14   | that lets you collect like collections of data                        |
| 01:09:18   | in your sitting database without,                                     |
| 01:09:21   | it just like lays a logic on top of all these markdown files.         |
| 01:09:25   | One of the ways Rose talked about was you can set up a table,         |
| 01:09:27   | but you can even be more basic than that.                             |
| 01:09:29   | Like one of the ways I automate, I guess,                             |
| 01:09:32   | for lack of a better term is I have a page in there                   |
| 01:09:35   | called, you know, MacSparky status board.                             |
| 01:09:39   | And it is like everything I'm working on is MacSparky                 |
| 01:09:43   | and it's a bunch of [[Dataview]] formulas.                                |
| 01:09:45   | Like one of them is it's looking for,                                 |
| 01:09:48   | it makes me a list of every note that has the tags in it,             |
| 01:09:52   | MacSparky, blog, post, and active.                                    |
| 01:09:56   | And so if I have an active blog post note,                            |
| 01:10:00   | it shows up in this list and I can then navigate to it                |
| 01:10:03   | very quickly when I can work on my working blog post.                 |
| 01:10:07   | But it goes way beyond that for me.                                   |
| 01:10:09   | I've done the same thing for automators episodes.                     |
| 01:10:12   | So I can see the automators episodes,                                 |
| 01:10:14   | but I also have a different tag called planning.                      |
| 01:10:16   | And the future shows that Rose and I are working on                   |
| 01:10:18   | in the future that aren't actively being,                             |
| 01:10:21   | you know, developed right now, but I know are coming.                 |
| 01:10:24   | I get a view of those,                                                |
| 01:10:25   | but if I look for automators and planning, you know,                  |
| 01:10:28   | so I've found ways to slice and dice these,                           |
| 01:10:31   | these folders or these markdown files using these                     |
| 01:10:34   | automation tools like [[Dataview]] to give me a very easy way             |
| 01:10:39   | to access everything that needs to be important to me today.          |
| 01:10:43   | And it just wasn't that hard.                                         |
| 01:10:45   | [[Dataview]] is the plug and I use it.                                    |
| 01:10:47   | Sounds like you're using it too.                                      |
| 01:10:48   | Oh yeah. Yeah.                                                        |
| 01:10:49   | I have to say what I like about [[Dataview]] is it has                    |
| 01:10:53   | the ability to just grab like a list of posts,                        |
| 01:10:57   | but you can also go in deep and do things like the table              |
| 01:11:01   | that I've created and just a little bit of information                |
| 01:11:04   | for people who are going,                                             |
| 01:11:06   | oh wait, that sounds really interesting.                              |
| 01:11:08   | Every note in [[Obsidian]] is a markdown file                             |
| 01:11:11   | or should be a markdown file ideally.                                 |
| 01:11:13   | And you can have a [[YAML]] header at the top                             |
| 01:11:15   | where you have three dashes and then you have like a name,            |
| 01:11:20   | colon and then the value.                                             |
| 01:11:21   | And so what I've done for all of these devices                        |
| 01:11:24   | that I have in my network,                                            |
| 01:11:25   | every single one of them has its own note.                            |
| 01:11:28   | And in that [[YAML]] header,                                              |
| 01:11:30   | I've got the IP address, the MAC address,                             |
| 01:11:32   | the room, the categories,                                             |
| 01:11:34   | if it's got categories and a connection.                              |
| 01:11:37   | I'm not really using categories,                                      |
| 01:11:38   | so I should probably get rid of that.                                 |
| 01:11:39   | But then in my [[Dataview]],                                              |
| 01:11:42   | I'm getting all of that data out                                      |
| 01:11:45   | so that I can see it in a table.                                      |
| 01:11:47   | And that means that I can really easily see,                          |
| 01:11:49   | okay, right, these things don't have IP addresses.                    |
| 01:11:51   | I either need to fix the IP addresses of these devices                |
| 01:11:55   | or I need to find out what that fixed IP address is                   |
| 01:11:57   | and input that data here.                                             |
| 01:11:59   | Acting is like a really quick overview.                               |
| 01:12:03   | And kind of as a task list,                                           |
| 01:12:05   | though it's not really intended as such,                              |
| 01:12:07   | but it does allow me to quickly and easily see                        |
| 01:12:10   | the things that I need to do in that respect,                         |
| 01:12:13   | which works really well for me.                                       |
| 01:12:16   | And I like the fact that I could just use it                          |
| 01:12:19   | to just get a list of all my devices if I wanted to.                  |
| 01:12:21   | And equally, I can use it,                                            |
| 01:12:23   | and I do use it actually in my Help the Parents folder.               |
| 01:12:27   | I've got another plugin installed,                                    |
| 01:12:30   | which is the folder notes,                                            |
| 01:12:32   | where you can have notes on a folder in [[Obsidian]].                     |
| 01:12:36   | And so I'm using a [[Dataview]] in that                                   |
| 01:12:37   | to just list all the files inside of it,                              |
| 01:12:39   | which I know I could get to from the sidebar,                         |
| 01:12:41   | but it's just nice to be able to jump in from the folder itself.      |
| 01:12:47   | Yeah, there's just like always new plugins showing up,                |
| 01:12:50   | and it's kind of awesome.                                             |
| 01:12:52   | Now, that was a lot of word soup,                                     |
| 01:12:53   | but just for people who are not familiar with [[YAML]],                   |
| 01:12:55   | it's really just an embedded set of data                              |
| 01:12:59   | about your file at the very top.                                      |
| 01:13:00   | Yeah, it's just key value pairs, essentially.                         |
| 01:13:03   | So you can store, for example,                                        |
| 01:13:06   | if you wanted to, you could have cat                                  |
| 01:13:09   | and name the cat in the document,                                     |
| 01:13:11   | or if you wanted to have, you know,                                   |
| 01:13:13   | blog and then the name of the blog that something's for,              |
| 01:13:18   | or the area of your life, whatever it is,                             |
| 01:13:21   | you can create any sort of categorisation                             |
| 01:13:25   | that you want to with those things.                                   |
| 01:13:28   | And you just do it by writing the key,                                |
| 01:13:31   | shouldn't have any spaces in it,                                      |
| 01:13:32   | that's the only thing to watch for,                                   |
| 01:13:34   | and then colon and whatever the value is.                             |
| 01:13:37   | And if you think this sounds a bit familiar                           |
| 01:13:39   | and you've used Jekyll or something as a blog before,                 |
| 01:13:41   | then it's the same format as used there.                              |
| 01:13:45   | And one of the best advantages of [[YAML]]                                |
| 01:13:47   | is you can embed tags there.                                          |
| 01:13:49   | So, like, all the data view sorting tags I use,                       |
| 01:13:52   | like MacSparky, blog, all that stuff,                                |
| 01:13:55   | is in the [[YAML]] data.                                                  |
| 01:13:57   | And as an automator, you can create this super easy.                  |
| 01:14:00   | So, like, let's say I want to standardise                             |
| 01:14:04   | the blog note for [[Obsidian]].                                           |
| 01:14:08   | So, one of the things I've done is I've created                       |
| 01:14:11   | a [[Keyboard Maestro]] script that says new blog posts.                   |
| 01:14:16   | And I trigger it in the MacSparky contextual menu.                   |
| 01:14:19   | And this is stuff I've talked about before.                           |
| 01:14:21   | I'm not going to go back and explain it all.                          |
| 01:14:22   | But I can, through a conflict menu in [[Keyboard Maestro]],               |
| 01:14:26   | I can very easily trigger this shortcut.                              |
| 01:14:29   | And the shortcut will say, oh, what's the blog post title?            |
| 01:14:32   | And I'll type in the title, and they'll say,                          |
| 01:14:35   | is this active or a planning post?                                    |
| 01:14:37   | You know, sometimes I have an idea that I don't want                  |
| 01:14:39   | to actively work on right now, and I can check the box                |
| 01:14:42   | for one or the other.                                                 |
| 01:14:43   | And then there's another check box built with a user input            |
| 01:14:48   | field in [[Keyboard Maestro]] that says,                                  |
| 01:14:50   | do you want me to copy the clipboard content?                         |
| 01:14:52   | So, there's only three things I need.                                 |
| 01:14:53   | The name, active or planning, and the clipboard contents.             |
| 01:14:57   | And the reason the clipboard contents is there is I may see,          |
| 01:15:00   | like, hey, here's a really cool [[Alfred]] plugin I want to write         |
| 01:15:03   | about, I'll block and copy the URL for the plugin                     |
| 01:15:07   | or a description of it.                                               |
| 01:15:09   | And then when I run that script, it just automatically                |
| 01:15:11   | pastes it in.                                                         |
| 01:15:12   | And all the script is doing is creating a markdown node               |
| 01:15:16   | in the [[Obsidian]] folder on my drive.                                   |
| 01:15:20   | That's all it's doing.                                                |
| 01:15:21   | I mean, it's not like this is not fancy scripting.                    |
| 01:15:23   | It's like taking the text, turning it into a note,                    |
| 01:15:26   | and needs to be saved as a markdown because [[Obsidian]]                  |
| 01:15:28   | only sees markdown files.                                             |
| 01:15:30   | And then it saves it.                                                 |
| 01:15:31   | But because it filled in all that [[YAML]] data when it created it,       |
| 01:15:35   | it immediately shows up in all my searches in [[Obsidian]].               |
| 01:15:39   | It's such a beautiful, simple automation system.                      |
| 01:15:43   | I just kind of wanted to put a bit of a spotlight on it.              |
| 01:15:46   | Yes, it is really great.                                              |
| 01:15:48   | The other advantage of [[YAML]], which I should note,                     |
| 01:15:50   | because I'm aware some people have told me before they've had         |
| 01:15:53   | this problem with Bear, is you don't have to put the text,            |
| 01:15:57   | the tags, sorry, of whatever it is that you're using                  |
| 01:16:00   | in the body of your text.                                             |
| 01:16:02   | It just can be in the [[YAML]] header,                                    |
| 01:16:04   | which means that when you preview it,                                 |
| 01:16:06   | you don't see that anywhere.                                          |
| 01:16:08   | And that is a really nice bonus of doing that.                        |
| 01:16:12   | And so it's worth doing.                                              |
| 01:16:14   | The only thing to watch out for with [[YAML]]                             |
| 01:16:16   | is if you're going to make a list,                                    |
| 01:16:19   | or indent things and nest properties,                                 |
| 01:16:22   | you need to make sure your spacing is 100% spot on                    |
| 01:16:25   | because if you use three spaces instead of two or four,               |
| 01:16:28   | it will just not work at all.                                         |
| 01:16:31   | But that is the only potential negative.                              |
| 01:16:34   | And if you're using [[Obsidian]] and you just do it in [[Obsidian]],          |
| 01:16:38   | it'll help you get it right every single time,                        |
| 01:16:40   | making it much, much easier,                                          |
| 01:16:42   | which is one of the things I like.                                    |
| 01:16:44   | [[Obsidian]] makes some markdown things a lot easier, like tables.        |
| 01:16:48   | I always have beautifully formatted markdown tables in [[Obsidian]]       |
| 01:16:51   | because I use the table plugin,                                       |
| 01:16:53   | which just does all the work for me.                                  |
| 01:16:55   | And the beauty of using automation to create these files              |
| 01:16:58   | is they are right every time,                                         |
| 01:17:00   | and you never have to think about it again.                           |
| 01:17:02   | And I just think it's a really great playground for automators,       |
| 01:17:07   | and it's an easy environment to work in                               |
| 01:17:09   | because at the end of the day, it's just text files.                  |
| 01:17:12   | Any automation you can write to change text,                          |
| 01:17:15   | you can change the results in [[Obsidian]] with.                          |
| 01:17:19   | I am working on a little automation.                                  |
| 01:17:22   | Here's a real simple one in [[Obsidian]] right now.                       |
| 01:17:24   | I just started working out this morning.                              |
| 01:17:26   | I haven't got it working 100% of the time yet.                        |
| 01:17:28   | So I have an active tag,                                              |
| 01:17:30   | and that doesn't go in [[YAML]] for me.                                   |
| 01:17:32   | The status of the project goes into the body of the file              |
| 01:17:38   | because that changes over time,                                       |
| 01:17:40   | and I don't want to be changing the [[YAML]] stuff.                       |
| 01:17:42   | So I'm creating a simple little [[Keyboard Maestro]] script               |
| 01:17:48   | that is just using UI scripting.                                      |
| 01:17:51   | So it's hitting the keyboard shortcut for the find and replace        |
| 01:17:55   | in [[Obsidian]],                                                          |
| 01:17:57   | and then it's typing the word active for active flag                  |
| 01:18:01   | with that pound before, and then replacing it with shipped.           |
| 01:18:04   | So once I finish something, I can just push a button,                 |
| 01:18:07   | and it changes the tag so it drops off all my active lists.           |
| 01:18:11   | So I'm just doing that with the [[Keyboard Maestro]],                     |
| 01:18:14   | hitting the tab key, pausing, blah, blah, blah.                       |
| 01:18:18   | I've almost got it working 100% of the time.                          |
| 01:18:21   | For some reason, sometimes the trigger to hit the...                  |
| 01:18:26   | in [[Obsidian]], it is option command return                              |
| 01:18:30   | to fire off the actual thing.                                         |
| 01:18:32   | It's not hitting 100% of the time,                                    |
| 01:18:34   | and I literally just ran out of time this morning to debug it.        |
| 01:18:37   | I think it might be, I need to add some pauses in there.              |
| 01:18:40   | I think it's going too fast,                                          |
| 01:18:42   | but that's stuff you can do because you're just working with text.    |
| 01:18:46   | Yes, and it is really great.                                          |
| 01:18:49   | You mentioned in the last episode the active note to window title     |
| 01:18:52   | plugin, which I've been playing with a little bit                     |
| 01:18:56   | to get that active title so that I can use that                       |
| 01:19:01   | as a part of my triggers or as help                                   |
| 01:19:05   | for different things that I'm doing,                                  |
| 01:19:07   | so I can grab that information more easily.                           |
| 01:19:10   | And that's a great one.                                               |
| 01:19:12   | And the template plugin is definitely something                       |
| 01:19:15   | that every automator or anybody vaguely curious                       |
| 01:19:19   | should check out if they think                                        |
| 01:19:21   | I'm going to want a format for this thing                             |
| 01:19:23   | that I can repeat on a regular basis.                                 |
| 01:19:26   | Then that's what the template or plugin will do.                      |
| 01:19:30   | And it's truly excellent at exactly what it's supposed to do,         |
| 01:19:35   | which is do templates.                                                |
| 01:19:37   | No, I agree.                                                          |
| 01:19:39   | So the built-in template automation,                                  |
| 01:19:41   | they have a built-in system template system,                          |
| 01:19:43   | but there's a plugin that takes it further.                           |
| 01:19:46   | And I do think that is something you should check out                 |
| 01:19:49   | as an automator, it makes total sense.                                |
| 01:19:51   | I actually mapped it to Command T                                     |
| 01:19:53   | so I can just open the template picker anytime I want.                |
| 01:19:56   | But over time as I use this app more,                                 |
| 01:19:59   | I am increasingly generating templates outside of it                  |
| 01:20:03   | using initially [[Keyboard Maestro]].                                     |
| 01:20:06   | And basically I've recreated the templates                            |
| 01:20:08   | in [[Keyboard Maestro]] scripts,                                          |
| 01:20:10   | and that way I can add additional information,                        |
| 01:20:12   | and use all of Keyboard Maestro's kind of user input fields           |
| 01:20:16   | to do things like toggle between active and planning                  |
| 01:20:19   | or copy the clipboard                                                 |
| 01:20:22   | and do stuff that's just not really possible                          |
| 01:20:24   | with the built-in stuff.                                              |
| 01:20:26   | And because I'm using their sync system,                              |
| 01:20:29   | I've just got all the files local on my Mac.                          |
| 01:20:31   | I just, for lack of the better word,                                  |
| 01:20:35   | pooped the text file or the markdown file                             |
| 01:20:38   | into the folder, and it's just there.                                 |
| 01:20:40   | So if you want to deal with the built-in template system,             |
| 01:20:43   | it gives me actually more power.                                      |
| 01:20:45   | Yes.                                                                  |
| 01:20:46   | But it's a little more extra work.                                    |
| 01:20:48   | Now, one of the challenges I'm currently facing                       |
| 01:20:50   | is I'm really considering getting those out of [[Keyboard Maestro]]       |
| 01:20:56   | and putting them just into shortcuts                                  |
| 01:20:58   | because this is all completely doable with shortcuts as well.         |
| 01:21:02   | The trick in shortcuts is when you save,                              |
| 01:21:05   | it wants to save to the shortcuts file,                               |
| 01:21:07   | replace that with a local drive entry.                                |
| 01:21:10   | And that would give me the advantage                                  |
| 01:21:13   | of taking the variables I add in                                      |
| 01:21:16   | and then use those with other things.                                 |
| 01:21:18   | For instance, a lot of people are looking at [[Obsidian]]                 |
| 01:21:21   | as a task manager and I don't.                                        |
| 01:21:23   | I'm running an experiment on that right now                           |
| 01:21:25   | that I'm about to share in the labs.                                  |
| 01:21:27   | And I think it's cool.                                                |
| 01:21:28   | There is a really good task plug-in                                   |
| 01:21:30   | where you can set defer dates and do a lot of power stuff,            |
| 01:21:33   | but it's not omnifocus.                                               |
| 01:21:35   | It's not close.                                                       |
| 01:21:36   | So I still want to, when I create these things,                       |
| 01:21:39   | create an OmniFocus project                                           |
| 01:21:41   | and then I can just cross-link them                                   |
| 01:21:43   | because it's just URL links and this stuff all works.                 |
| 01:21:47   | But that actually is not as easy with [[Keyboard Maestro]]                |
| 01:21:50   | as it would be with a shortcut.                                       |
| 01:21:52   | So I'm right now toying with different platforms                      |
| 01:21:55   | for automating stuff like this and trying to decide.                  |
| 01:21:58   | Obviously, if I build them in shortcuts,                              |
| 01:22:00   | then I can run it on iOS devices too,                                 |
| 01:22:02   | although I don't seem to have much of a need for that.                |
| 01:22:05   | But why not, right?                                                   |
| 01:22:07   | Well, one of the things that I would recommend to you                 |
| 01:22:11   | and all of our listeners here                                         |
| 01:22:12   | who are looking at doing something like that is                       |
| 01:22:14   | I would still create the template file                                |
| 01:22:16   | and put it in [[Obsidian]]                                                |
| 01:22:18   | because that way you've got your template file                        |
| 01:22:19   | and you've got it everywhere.                                         |
| 01:22:20   | And what you can do is even if you...                                 |
| 01:22:23   | So the template or plug-in in [[Obsidian]]                                |
| 01:22:26   | will allow you to just run JavaScript.                                |
| 01:22:28   | So you could write your own JavaScript automations                    |
| 01:22:30   | that will ask you questions and pop up fields                         |
| 01:22:33   | and prompts and let you input stuff.                                  |
| 01:22:35   | But what you could also do is just input placeholders.                |
| 01:22:39   | And my usual format for this is a single set of square brackets.      |
| 01:22:44   | So with this being [[Obsidian]] and square brackets                       |
| 01:22:47   | meaning things in markdown and double square brackets                 |
| 01:22:49   | meaning more things in [[Obsidian]],                                      |
| 01:22:51   | I might use curly brackets for this.                                  |
| 01:22:53   | And then you can do a find and replace.                               |
| 01:22:55   | So you can grab that file and you can do this with [[Keyboard Maestro]].  |
| 01:22:58   | You could do this with shortcuts.                                     |
| 01:23:00   | And you can then grab the file                                        |
| 01:23:02   | and you can just replace your placeholders                            |
| 01:23:05   | and then you can send the entire file back                            |
| 01:23:07   | and [[Obsidian]] does have [[URL Schemes\|URL scheme]] support                             |
| 01:23:09   | to allow you to create files via the [[URL Schemes\|URL scheme]]                       |
| 01:23:13   | which would allow you to just create everything                       |
| 01:23:17   | and you could stick with [[Keyboard Maestro]] on the Mac                  |
| 01:23:20   | but also have a shortcut option for iOS.                              |
| 01:23:24   | And of course the other one that springs to mind for this             |
| 01:23:28   | almost the exact purpose is [[Drafts]]                                   |
| 01:23:30   | is a great way to collect some data                                   |
| 01:23:32   | and it can even prompt you for input                                  |
| 01:23:34   | without scripting actions and everything                              |
| 01:23:36   | and then you can take that data                                       |
| 01:23:38   | and dump it into an [[Obsidian]] file                                     |
| 01:23:41   | and do some magic with it.                                            |
| 01:23:44   | But I probably start with replace some placeholders                   |
| 01:23:47   | in the [[Obsidian]] file                                                  |
| 01:23:50   | because that's what templates are for.                                |
| 01:23:53   | And then you've got a template                                        |
| 01:23:54   | that you can very easily tweak at all times                           |
| 01:23:57   | even if you're on iOS, say you're at Disney                           |
| 01:24:00   | and you've got your phone and you're looking at a note                |
| 01:24:02   | and you realise, oh, that's a bit weirdly formatted.                  |
| 01:24:05   | Next time I do that, I should add an extra line break.                |
| 01:24:07   | Just swap to a templates folder, add your extra line break            |
| 01:24:09   | and forget about it.                                                  |
| 01:24:11   | There's no needing to add an OmniFocus action                         |
| 01:24:13   | for when you get home.                                                |
| 01:24:14   | [[Drafts]] is totally another way to automate [[Obsidian]].                   |
| 01:24:17   | I mean, somebody wrote me recently saying,                            |
| 01:24:19   | well, is [[Drafts]] even a thing anymore                                  |
| 01:24:21   | now that you've seen [[Obsidian]]?                                        |
| 01:24:22   | I'm like, oh, of course.                                              |
| 01:24:23   | [[Obsidian]] is terrible for text capture                                 |
| 01:24:26   | but it's really good at what you do with text                         |
| 01:24:28   | after you've captured it                                              |
| 01:24:29   | where [[Drafts]] is awesome for text capture                              |
| 01:24:32   | and you can automate the [[Drafts]] process.                              |
| 01:24:34   | Another one, which I use more on the Mac than iOS                     |
| 01:24:38   | but is TextExpander.                                                 |
| 01:24:40   | You can build [[Obsidian]] commands into TextExpander too.               |
| 01:24:44   | There's just so many ways to do it                                    |
| 01:24:46   | because it's just text.                                               |
| 01:24:48   | That's the thing that I just can't say enough with [[Obsidian]].          |
| 01:24:52   | It's a folder full of markdown files.                                 |
| 01:24:54   | If the app stops development tomorrow,                                |
| 01:24:57   | I still have my folder full of markdown files                         |
| 01:24:59   | and that's the thing about it that I love so much.                    |
| 01:25:02   | Yes, it really is great.                                              |
| 01:25:04   | I have to say the community-supported plugins                         |
| 01:25:09   | as well, obviously they're community-supported                        |
| 01:25:12   | but there are just so many great ones.                                |
| 01:25:15   | You do need to turn off Safe Mode for these                           |
| 01:25:19   | but you can have a look in their forums.                              |
| 01:25:21   | You can look on GitHub about all of these different plugins as well.  |
| 01:25:25   | I've linked a few of the different ones                               |
| 01:25:27   | that we've talked about in the show notes.                            |
| 01:25:29   | But you can go and look at stuff                                      |
| 01:25:32   | and find how do they do this.                                         |
| 01:25:35   | I want something that's almost the same.                              |
| 01:25:37   | Well, if you've been learning JavaScript                              |
| 01:25:39   | to do automation with [[Drafts]] or Scriptable                            |
| 01:25:42   | or Omni applications or similar,                                      |
| 01:25:44   | then you could modify these.                                          |
| 01:25:47   | It's going to be a bit of a step up                                   |
| 01:25:49   | but I don't think it's beyond anybody listening to this podcast       |
| 01:25:52   | and I know some of you are going,                                     |
| 01:25:54   | I'm not a coder, I couldn't do it.                                    |
| 01:25:56   | I'm 100% confident that if you wanted to,                             |
| 01:25:59   | you could or you would find the help to do it                         |
| 01:26:02   | because it's JavaScript at the end of the day                         |
| 01:26:05   | and it's automation and you could write your own automations          |
| 01:26:08   | for this if you wanted to.                                            |
| 01:26:10   | It's not necessarily the right solution.                              |
| 01:26:12   | Go and have a look first to see if somebody's got a plugin            |
| 01:26:15   | that you can use pretty much as is.                                   |
| 01:26:17   | You want breadcrumbs so that you can see that this note               |
| 01:26:20   | is in this folder, that folder, that folder                           |
| 01:26:22   | and then here's finally your notes.                                   |
| 01:26:24   | There's a plugin for that.                                            |
| 01:26:26   | And you'll only find it by going and searching.                       |
| 01:26:29   | And don't forget as well,                                             |
| 01:26:31   | not everything is in the community plugin.                            |
| 01:26:33   | Search inside of [[Obsidian]], check the forums                           |
| 01:26:35   | because sometimes people are still                                    |
| 01:26:37   | in the early stages of creating it                                    |
| 01:26:39   | but it's in a state where you can use it already                      |
| 01:26:43   | and you can install it directly.                                      |
| 01:26:46   | There are so many great plugins.                                      |
| 01:26:48   | I mean, maybe that's a show someday,                                  |
| 01:26:50   | our favourite [[Obsidian]] plugins.                                        |
| 01:26:52   | Maybe what I'll try and do is I'll put together                       |
| 01:26:54   | a list of the [[Obsidian]] plugins that I'm using                         |
| 01:26:57   | so we can link to that because things like the folder note            |
| 01:27:00   | and so on are pretty handy                                            |
| 01:27:02   | and I'm sure people would appreciate having that                      |
| 01:27:05   | as well as the advanced URI,                                          |
| 01:27:07   | which is advanced [[URL Schemes]],                                        |
| 01:27:09   | for things that's another great one.                                  |
| 01:27:12   | Yeah, there are a lot.                                                |
| 01:27:14   | I mean, [[Dataview]] to me brings this app to a whole new level.          |
| 01:27:18   | It's like a whole feature set added to the...                         |
| 01:27:20   | I mean, it's crazy.                                                   |
| 01:27:22   | Yes, yes.                                                             |
| 01:27:23   | And at the end of the day, as you said,                               |
| 01:27:25   | it's a pile of text files.                                            |
| 01:27:27   | So if something were to go wrong and [[Obsidian]] disappears,             |
| 01:27:30   | I don't think that's going to happen at all                           |
| 01:27:32   | because it's installed on my computer,                                |
| 01:27:34   | they can't take it away from me.                                      |
| 01:27:36   | Then, you know, I will still have all of my files                     |
| 01:27:41   | and it works really nicely.                                           |
| 01:27:44   | So for that, I'm really happy this exists.                            |
| 01:27:47   | And as you said, it's the Electron app and I wish it wasn't.          |
| 01:27:50   | And that does really show on iOS, unfortunately,                      |
| 01:27:53   | where it does feel like the Mac app.                                  |
| 01:27:55   | It's not too bad on 12.9 inch iPad Pro,                               |
| 01:27:57   | but you try using [[Obsidian]] on iPhone mini                             |
| 01:27:59   | and it's like, whoa, okay,                                            |
| 01:28:01   | somebody crammed a Mac app into my iPhone mini.                       |
| 01:28:05   | But, you know, it still works.                                        |
| 01:28:07   | And most of the time,                                                 |
| 01:28:09   | I would be editing things like this on my phone.                      |
| 01:28:13   | It'll be a case of I'll check something in [[Drafts]]                    |
| 01:28:15   | and, you know, use the [[Obsidian]] advanced URI                          |
| 01:28:17   | to stick it onto an existing note or similar.                         |
| 01:28:22   | Yeah, I've kind of got to the point where I use it on iOS             |
| 01:28:25   | as a window into my [[Obsidian]] data,                                    |
| 01:28:27   | not necessarily something I work on.                                  |
| 01:28:30   | But, you know, that's it.                                             |
| 01:28:32   | Like, I had a Mac mini and a little Bluetooth keyboard                |
| 01:28:35   | and I can sit down and write a ton of blog posts                      |
| 01:28:38   | straight into [[Obsidian]] once I get there.                              |
| 01:28:41   | You know, it takes a little kind of doing                             |
| 01:28:43   | to get to the text file on an iPad mini.                              |
| 01:28:47   | But once you're in there, you can type on it, it works fine.          |
| 01:28:50   | You know, it's not unusable.                                          |
| 01:28:52   | It's just not as ideal as it is on a Mac,                             |
| 01:28:55   | which kind of gets back to the earlier discussion                     |
| 01:28:57   | of why I would like to have maybe                                     |
| 01:28:59   | a little MacBook Air I could carry around.                            |
| 01:29:01   | It's almost like an [[Obsidian]] machine, you know.                       |
| 01:29:04   | Yeah, though I have to say,                                           |
| 01:29:06   | I think if you want something                                         |
| 01:29:08   | where you've got a small portable device with a keyboard,             |
| 01:29:11   | then looking at the new iPad Air with the Magic Keyboard              |
| 01:29:14   | is probably going to be a good shout,                                 |
| 01:29:16   | because the Magic Keyboard on an iPad                                 |
| 01:29:18   | is, I'm really impressed with mine.                                   |
| 01:29:20   | Oh, note that I do have a 12.9-inch iPad Pro,                         |
| 01:29:22   | so it's pretty huge, but I had the 11-inch before.                    |
| 01:29:25   | And the iPad Air looks pretty great                                   |
| 01:29:28   | as an affordable device.                                              |
| 01:29:30   | And as we said, text files,                                           |
| 01:29:32   | they don't take up a lot of space.                                    |
| 01:29:34   | If you have a lot of text files,                                      |
| 01:29:36   | then you can even get the base storage model.                         |
| 01:29:38   | All right, well, Rose,                                                |
| 01:29:40   | what do you think of our automators potpourri?                        |
| 01:29:42   | Did we do good?                                                       |
| 01:29:44   | I think so, though.                                                   |
| 01:29:46   | I do think your pronunciation of potpourri                            |
| 01:29:48   | could do with some improvement.                                       |
| 01:29:50   | As soon as I said it, I'm like,                                       |
| 01:29:52   | oh, I'm going to pay for that one.                                    |
| 01:29:54   | Potpourri, folks,                                                     |
| 01:29:56   | welcome to the automators podcast.                                    |
| 01:29:58   | Yeah, I don't know.                                                   |
| 01:30:00   | Well, you know, I think we've had some pretty good fun,               |
| 01:30:02   | some ideas of various different things                                |
| 01:30:04   | that they can dive into.                                              |
| 01:30:06   | And I should note that we've                                          |
| 01:30:08   | we always record ahead of time                                        |
| 01:30:10   | to make sure that our editor                                          |
| 01:30:12   | hopefully has enough time to edit things.                             |
| 01:30:14   | And thank you to Jim for doing a wonderful job on that.               |
| 01:30:16   | But we've had some great feedback already                             |
| 01:30:18   | on the last episode,                                                  |
| 01:30:20   | including the launch of Automators Max.                               |
| 01:30:22   | Yeah.                                                                 |
| 01:30:24   | So fingers crossed, everybody is enjoying themselves still.           |
| 01:30:26   | Yeah, we have a lot planned                                           |
| 01:30:28   | for Automators Max.                                                   |
| 01:30:30   | So if you're interested in getting up,                                |
| 01:30:32   | you can do that over at the website.                                  |
| 01:30:34   | I guess we should have said at the top of the show.                   |
| 01:30:36   | If you're interested, Automators Max gets you                         |
| 01:30:38   | an extended version of the show,                                      |
| 01:30:40   | ad free, which is kind of great in both ways.                          |
| 01:30:42   | So thank you, everybody who signed up.                                |
| 01:30:44   | If you're interested, go check it out.                                |
| 01:30:46   | We'd love to have you on board.                                       |
| 01:30:48   | And regardless, we are the Automators podcast.                        |
| 01:30:50   | You can find us over at relay.fm.                                     |
| 01:30:52   | We want to thank our sponsors this week,                              |
| 01:30:54   | FitBod, LinkedIn, and New Relic.                                      |
| 01:30:56   | And we'll see you next time.                                          |
| 01:30:58   | Goodbye.                                                              |
