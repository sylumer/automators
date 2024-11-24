---
status: "complete"
fc-date:
  year: 2024
  month: 10
  day: 04
fc-category: "podcast"
podcast: "Automators"
published: 2024-10-04
duration: 2515
formattedduration: "00:41:55"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/165"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators165.mp3"
episode: 165
title: "165: Moom and Window Management"
---
![Automators Logo.jpg|200x200](Logo.jpg)

# Synopsis
In this episode David and Rosemary explore Moom 4 and other window management tools for macOS.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 165 Discussion](https://talk.automators.fm/t/165-moom-and-window-management/18054)

# Sponsors
- [[Notion (Sponsor)|Notion]] Try the powerful, easy-to-use Notion AI today.

# Show Notes
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [Announcing Moom 4, the next-generation window manager · Tales of a Running Bird](https://manytricks.com/blog/?p=6385)
- [Moom 4.1 adds ultra fast drop zone access and more · Tales of a Running Bird](https://manytricks.com/blog/?p=6448)
- [Access Moom's custom actions via pop-up menus · Tales of a Running Bird](https://manytricks.com/blog/?p=6456)
- [Moom: Release Notes · Many Tricks](https://manytricks.com/moom/releasenotes/)
- [Open Feedback Assistant](http://feedbackassistant.apple.com) - Open [`applefeedback://`](applefeedback://) to file feedback on Apple devices.
- [Mac window tiling icons & keyboard shortcuts - Apple Support (UK)](https://support.apple.com/en-gb/guide/mac-help/mchl9674d0b0/mac)
- [Tile windows on Mac - Apple Support (UK)](https://support.apple.com/en-gb/guide/mac-help/mchlef287e5d/15.0/mac/15.0)
- [Change window tiling settings on Mac - Apple Support (UK)](https://support.apple.com/en-gb/guide/mac-help/mchl118087b0/15.0/mac/15.0)
- [How does Moom work when Stage Manager is active | Many Tricks · Support](https://manytricks.com/osticket/kb/faq.php?id=130)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome the Automators, I'm David Sparks and joined by my co-host, Rosemary Orchard.                    |
| 00:06      | This is where we talk about how to automate your technology to do your work for you.                    |
| 00:10      | Hello, Rose.                                                                                            |
| 00:11      | Hey, David, how are you?                                                                                |
| 00:13      | I'm doing great.                                                                                        |
| 00:14      | We got a lot of window management action lately, which is very much an Automator-friendly               |
| 00:20      | topic.                                                                                                  |
| 00:21      | So today, we thought we'd dig in on some of that, we're going to talk about that.                       |
| 00:25      | In the bonus section for the Automator's Max members, we're dealing with keyboard woes,                 |
| 00:31      | and that's all I'm going to say, but we're going to talk about that.                                    |
| 00:35      | Well, I'm going to give people a little hook.                                                           |
| 00:37      | There's a 3D printer involved, so it's going to get crazy, but probably not too crazy.                  |
| 00:44      | Okay, well, either way, I think let's start with window management because there is a                   |
| 00:49      | lot to talk about.                                                                                      |
| 00:51      | We got new tools in Sequoia, there's things going on.                                                   |
| 00:54      | But I think for Automator's alpha power users that are listening to the show, probably the              |
| 01:00      | most relevant news concerning window management is the [[Moom]] update.                                     |
| 01:05      | Yeah, [[Moom]] has gone from version 3 to version 4, and it's one of those things where I didn't            |
| 01:12      | think there was a lot they could do to make it better because it just worked.                           |
| 01:18      | And then they updated it, and it turns out they have made it better.                                    |
| 01:21      | Not only have they made it better, I'm using the new features as well, and that is something            |
| 01:26      | I am very appreciative of because I was there going, yeah, could you maybe add some [[Shortcuts]]           |
| 01:32      | actions, [[URL Schemes\|URL schemes]], something like that so I don't have to go through [[AppleScript]]?                   |
| 01:35      | I've got a whole bunch of new stuff that you can do with [[Moom]], David.                                   |
| 01:38      | I'm really happy about it.                                                                              |
| 01:39      | Yeah, I mean, window management kind of ties into what we talked about a few episodes ago,              |
| 01:45      | about setups, setting your computer up to do stuff.                                                     |
| 01:49      | Window management is usually the last piece of that puzzle because once you get the apps                |
| 01:53      | you want to open and everything just the way you want it, then you want the windows to                  |
| 01:57      | arrange themself for you, so you don't have to manually do that as well.                                |
| 02:02      | And we're going to talk a little bit about why we use [[Moom]], but there's a lot of apps                   |
| 02:05      | for this, but [[Moom]] is the app that both Rose and I happen to use, which is kind of funny                |
| 02:10      | too because, right, there's so many, it's kind of interesting that both of us use the                   |
| 02:14      | same one, but there's reasons.                                                                          |
| 02:17      | Yeah, I mean, we both have a tendency to gravitate to whatever we feel is best in class, and            |
| 02:23      | in this case, that is [[Moom]].                                                                             |
| 02:25      | And I am really happy that it has updated because, you know, so for folks who don't                     |
| 02:32      | know [[Moom]], basically it lets you save window setups or window layouts.                                  |
| 02:37      | So you can just say, hey, you know, like, generically, I would like to put this on the                  |
| 02:41      | left third of my screen, or I would like to save, you know, I've got PB at it, I've got                 |
| 02:46      | [[Zoom]], I've got a [[Safari]] window, I've got [[Audio Hijack]], and I've got [[Keyboard Maestro]], and              |
| 02:50      | at the moment for recording Automators, I'd like to save that as a set for recording                    |
| 02:55      | Automators, and then I can save that, and I can click on it and click Automators, and                   |
| 02:59      | ta-da, my windows get arranged for recording automators.                                                |
| 03:02      | But it has got even better this time, which is very exciting, and I'm going to add some                 |
| 03:08      | links into the show notes from their blog about changes that they've made, like their                   |
| 03:14      | blog post about the release, and then 4.1, and some other little sort of handy bits that                |
| 03:20      | they've spoken about online, just so that folks can read about the things that they've                  |
| 03:25      | added, and also there's some videos, too, so that everybody can enjoy what's there, but                 |
| 03:31      | we're also going to talk about it.                                                                      |
| 03:32      | Yeah, and I would say, so [[Moom]] is published by [[Many Tricks]].                                                |
| 03:37      | They're a great little utility maker for the Mac.                                                       |
| 03:41      | If you haven't checked them out, go to [manytricks.com](https://manytricks.com), all of their apps, I could recommend, they're      |
| 03:47      | all good, but [[Moom]], to me, is the star of the show, and it is a window manager plus,                    |
| 03:55      | you know, it does so much more, and one of the new features that I want to immediately                  |
| 04:00      | jump in on is what they call the pop-up palette.                                                        |
| 04:04      | So what [[Moom]] has historically given you the ability to use the green traffic light to                   |
| 04:11      | do different things, like one of the original tricks you could do with it, is if you click              |
| 04:16      | on the green traffic light, it gives you like an overlaid grid on the screen that you can               |
| 04:21      | just drag to a preset resolution, and then the window automatically fits itself to that.                |
| 04:26      | So getting windows to fit close to each other in rough sizes was very easy.                             |
| 04:34      | They've also had, historically, the ability to save a setup of specific app windows in                  |
| 04:40      | a specific order, like right now, like Rose were recording the show, I've got recording                 |
| 04:45      | tools on the left third, I've got resource and research on the right third, but they're                 |
| 04:51      | laid out in a very specific way where I can jump between overlapping windows without ever               |
| 04:56      | having to really work hard, and I do this for every podcast, and it's always the same                   |
| 05:02      | apps, you know, [[Notion]], [[Safari]], you know, the recording tools, et cetera.                               |
| 05:08      | So I can save a pop-up palette button with that setup.                                                  |
| 05:14      | So anytime I'm about to record a podcast, I do that, and so I hit the green traffic                     |
| 05:18      | light button using the new version four, and it has a whole bunch of these represented                  |
| 05:24      | graphically, and I can just pick the one for podcast recording, and it does it for me.                  |
| 05:30      | I've done other things like this in the past, this is by far the fastest and easiest way                |
| 05:35      | to do this.                                                                                             |
| 05:37      | Yes, and that's what I really love about this, because, you know, I have, you know, and I               |
| 05:42      | feel like window management is something that some people don't really understand.                      |
| 05:47      | So I have, you know, looked at how, for example, my dad works, and when he's on his                     |
| 05:53      | Mac, he has [[Adobe Bridge]] open and he has [[Photoshop]] open, you know, this is generally when               |
| 05:58      | he's doing something like photo editing, and he will edit a photo in Photoshop, close                   |
| 06:02      | it, and then [[Adobe Bridge\|Bridge]] is revealed, and then he opens the next picture, and then he edits                  |
| 06:09      | it, hit save, closes, repeat.                                                                           |
| 06:12      | And so for him, he wants one thing in front of him.                                                     |
| 06:15      | He doesn't want to see anything else.                                                                   |
| 06:17      | And my mom, when she's working, she might have two things open at the same time, but, you               |
| 06:21      | know, just splitting it left and right, basically, is all she needs, and that's easy                    |
| 06:25      | enough to do with, you know, native window management things, which we'll come back to.                 |
| 06:30      | But for other people where you need multiple things open at the same time, so as a developer            |
| 06:34      | in my day job, I need the program that I'm writing the code in, I need my terminal so                   |
| 06:38      | I can see whether or not my code is compiling, and I can see the error log and things like              |
| 06:42      | that, and that could be multiple windows, or that could be one window with multiple                     |
| 06:46      | panes, which is what I do with [[iTerm]], but previously I have used multiple windows.                      |
| 06:51      | I need my browser so I can actually go and test the code that I've been doing.                          |
| 06:54      | And then I also need, you know, things like Slack and so on open, so that I can see those               |
| 07:00      | without having to, you know, shuffle stuff around too much.                                             |
| 07:04      | And that is where window management really comes into play, because I want my things in a               |
| 07:09      | specific place. It's muscle memory.                                                                     |
| 07:11      | If, you know, I, you know, I look over here and I'm expecting to see the terminal to my far             |
| 07:17      | left. And if the terminal isn't there, if the code is there, I'm going to be really                     |
| 07:21      | confused. So I have it set up so that it's always in the same place.                                    |
| 07:26      | And I don't, you know, manually drag these things around.                                               |
| 07:28      | I use [[Moom]] to get things into the right place.                                                          |
| 07:31      | And that is, you know, what for me is really great.                                                     |
| 07:35      | And what I am really loving with the upgrade as well, David, is, you know, previously, if I             |
| 07:41      | was, you know, resizing a window, or if I saved a preset for a window resise, it would be for           |
| 07:47      | like a specific monitor.                                                                                |
| 07:48      | And I have an ultra wide monitor, but my Studio Display that I also have attached to my Mac             |
| 07:53      | Studio is still big enough to do thirds.                                                                |
| 07:56      | And, you know, it's now, for me at least, just a bit easier to, you know, have these                    |
| 08:03      | these things set up so that I can actually, you know, use them across multiple displays                 |
| 08:08      | and things like that, which is really cool.                                                             |
| 08:10      | Yeah. And just sticking with this pop up, there's so much more you can do with it.                      |
| 08:15      | It almost feels like to me, like installing a [[Stream Deck]] on the little green button for                |
| 08:21      | your window, the green window button, because when you open it up, it's got up to 61 different          |
| 08:27      | presets you can put in there.                                                                           |
| 08:29      | And they can, it isn't just setting up windows in a predefined arrangement.                             |
| 08:33      | It could just say, you know, move and resise or drop in the left side.                                  |
| 08:37      | I've got one that just centres the current window because I do a lot of screen casting.                 |
| 08:42      | So before I hit the record button, I always like to make sure the window is centred on                 |
| 08:46      | the screen. It makes post production a lot easier.                                                      |
| 08:49      | And that's just a little tool I added.                                                                  |
| 08:51      | And now I just hit the green button and press the button and the window gets automatically              |
| 08:55      | centred on the screen.                                                                                 |
| 08:56      | You can also have it like adjust, like grow towards the right, grow towards the left, shrink            |
| 09:01      | towards the right.                                                                                      |
| 09:02      | So all sorts of cool window tricks.                                                                     |
| 09:05      | I'm not sure, like, how, how practical it is to like resise the window using like one                   |
| 09:11      | button click at a time.                                                                                 |
| 09:13      | But if you want very granular control and I'm sure there are people listening that have a               |
| 09:17      | reason for that, they've got a button for that.                                                         |
| 09:20      | And I just really am impressed by this interface.                                                       |
| 09:24      | Never saw it coming.                                                                                    |
| 09:26      | Never thought, oh, yeah, this is what I would like.                                                     |
| 09:28      | But once they gave it to me, I was immediately on board.                                                |
| 09:31      | And currently I have about 20 buttons of my 60, but I'm sure I'll be adding more.                       |
| 09:38      | Yeah.                                                                                                   |
| 09:39      | And yeah, I mean, I'm just really enjoying the fact that, you know, I can hover over that               |
| 09:45      | plus button and I have, you know, whatever it is that I've chosen in there.                             |
| 09:48      | So I do have, you know, some of the defaults still like the left half, right half.                      |
| 09:53      | I don't ever use top half and bottom half.                                                              |
| 09:55      | So I've changed those to top right quarter, bottom right quarter, because I have a tendency             |
| 09:59      | to put things on the right, I guess, because I'm right handed.                                          |
| 10:03      | So that's where a lot of things go.                                                                     |
| 10:06      | And then, you know, doing a couple of, you know, different layouts for just resizing                    |
| 10:11      | things and I've got my thirds in there and so on, because I've got my nice ultra wide                   |
| 10:14      | displays.                                                                                               |
| 10:16      | And yeah, it's just been really nice, you know, the upgrade as well.                                    |
| 10:22      | I'm going to give many tricks, full props for this.                                                     |
| 10:24      | The upgrade, it just worked.                                                                            |
| 10:25      | Okay, I installed [[Moom]] 4 and I uninstalled [[Moom]] 3 and ta-da, that was it, done.                         |
| 10:33      | And, you know, everything that I had was already there and now I've gone through and                    |
| 10:37      | I've ended up just sort of tidying some things up because, yeah, I realised that, you know,             |
| 10:42      | it would actually be nice if I potentially actually use names for things a little better                |
| 10:47      | and so on.                                                                                              |
| 10:48      | And so now I've done that and I'm just finding it, you know, really handy to have, you know,            |
| 10:54      | all of the new features that they have right here.                                                      |
| 10:57      | Yeah, you know, it's funny that you say that because I never used top and bottom either.                |
| 11:01      | It can make sense, I guess, if you're doing something that would though.                                |
| 11:04      | I think vertical monitors, people that have vertical monitors are more likely to use that               |
| 11:08      | and what I've experimented with vertical monitors, I have used that and I have really enjoyed it.       |
| 11:13      | But I tend not to use my monitors vertically.                                                           |
| 11:16      | It's one of those things where I wonder if [[Moom]] could figure out a way to hook into the OS.             |
| 11:22      | So, like I could say like, hey, if this monitor is portrait, then like, you know,                       |
| 11:28      | if the pixels on this monitor, like in width are less than they are tall,                               |
| 11:33      | then change it from left and right to top and bottom or something like that.                            |
| 11:37      | But I don't know, I might email [[Many Tricks]] and give them a feature request, but that is                |
| 11:42      | my idea, folks, that is not something that is supported within the app.                                 |
| 11:46      | So if it's, if you're good looking for it and it's not there, then that's my fault, not theirs.         |
| 11:50      | Yeah, some of the other new features are better layout support.                                         |
| 11:55      | And by layouts, I mean, you say that like [[Safari]] is going to take this much space on the screen         |
| 12:01      | and [[OmniFocus]] this much space, and it's always going to be here and you can save it specific            |
| 12:06      | to apps or you can save what they call, I think they call it like any window layout or generic          |
| 12:11      | layout. So you can just say, no, I always want the right side of the screen to be one app and then      |
| 12:18      | the top and bottom quarters to be two other apps. And then you just drag your apps into the space       |
| 12:24      | and it automatically resets the window size to match your saved layout.                                 |
| 12:29      | So if you have specific layouts you want, you can do that. I'm very kind of anal about this stuff       |
| 12:35      | because I like the little gutter. I like to know my eyes are kind of trained where to look when         |
| 12:40      | I'm doing different kinds of work. And these layout tools are a definite improvement.                   |
| 12:45      | Yes, yeah, I really like it. And I also, one of the other reasons why I've linked the blog post         |
| 12:49      | folks is they have little videos in there, which explain how, you know, some of these features          |
| 12:55      | work. So that can be quite useful to see. And there's also a full release notes page which              |
| 13:01      | tell you what folks because they've done such a great job. I will link that too. It's not               |
| 13:07      | bug fixes and improvements. It is very much a, hey, there's drop zones, there's hover mode,             |
| 13:13      | there's navigate and activate your custom actions via keyboard, etc. And they've actually detailed      |
| 13:18      | all of it, which is really lovely. So yes. And yeah, there's also some really cool things in there.     |
| 13:27      | And Rose mentioned drop zones. They kind of work with the layouts. You can drop an app into a layout    |
| 13:33      | zone or a zone. And then it once again, automatically comports the app to the drop zone.                |
| 13:39      | I feel like those are kind of related. Another feature they've added, which they've always kind         |
| 13:45      | of had this, but I think they improved it a bit is the snapping where you can pull a window to the      |
| 13:49      | top corner to the side and it'll snap to your predefined setup for that. So like if you just            |
| 13:56      | like the quarters, like I often use the, you know, the quarters like top left, bottom right,            |
| 14:03      | you can set those if you just pull the window into the corner to automatically fits it to that.         |
| 14:08      | And that that's a lot of apps have that feature, but you know, [[Moom]] is gonna cover them all.             |
| 14:14      | Yes. And, you know, the layouts automatically adapting to display configuration changes by              |
| 14:20      | default now, that's really nice because, you know, every so often, I will not necessarily be using      |
| 14:26      | the same monitor setup that I always have. Sometimes, you know, I end up recording or doing             |
| 14:30      | things on my laptop with one portable monitor, my laptop with two portable modules, my laptop with one, |
| 14:36      | like, you know, 24 inch monitor, my laptop with a 27 inch monitor, my laptop with my 32 inch ultra      |
| 14:42      | wide monitor, all sorts of things. And, you know, this is perhaps less of a problem for some people     |
| 14:48      | because they just use their, their, you know, machine at home with the same setup every single          |
| 14:53      | time. But the layouts now automatically adapt to display configuration changes. And I really            |
| 15:01      | appreciate that. And it's just one of those things that it makes my life a lot easier. And I'm sure     |
| 15:07      | it will do the same for some other people as well. I mean, be not for everybody, but for those of us    |
| 15:11      | who have this, you know, this, this issue, it's appreciated. And also, you know, that one day           |
| 15:17      | that you do decide, actually, you know what, I'm going to try flipping my desk configuration,           |
| 15:21      | and I'm going to, you know, move my monitors around, or I'm going to put one monitor in portrait,       |
| 15:26      | then, you know, the fact that it can automatically adapt things without you having to rearrange         |
| 15:31      | everything and reconfigure all of your, your saved setups in [[Moom]] is very, very nice.                   |
| 15:38      | Another thing that's new is they have chaining. So you can chain multiple actions together. Like        |
| 15:44      | if you've got two monitors, you say, okay, move this to the right monitor and centre it. And move       |
| 15:49      | this to the left monitor, put it on the right side of the screen, or top right quarter, or whatever.    |
| 15:54      | And they just work as one command when you, when you trigger them. So multi monitor people are          |
| 15:59      | going to love that. Yes. One of the things that is worth noting in their blog post.                     |
| 16:06      | So they have a blog post access [[Moom\|Moom's]] custom actions via popup menus. They have tied in                 |
| 16:12      | with [[Keyboard Maestro]], they've made a [[Keyboard Maestro]] macro, and they've also made a shortcut.         |
| 16:16      | Both of these are relying on [[AppleScript]] to do the magic, but they actually have a shortcut            |
| 16:22      | and a [[Keyboard Maestro]] macro that you can download from their website, from them showing                |
| 16:27      | how you can use this stuff, which is pretty nice. I'm curious about that, though. I mean,               |
| 16:32      | why would you do that, like set it up as a implementation of an [[AppleScript]]? Why not                   |
| 16:38      | just build in support for [[Shortcuts]] to do the action? I mean, because this way they,                    |
| 16:45      | I guess it was already working. I don't know. And if it ain't broke, don't fix it. And I have to say,   |
| 16:52      | I do know some developers understandably are quite worried about adding support for [[Shortcuts]] to        |
| 16:57      | things, especially on macOS, because it has been a little flaky at times. And also, there have been     |
| 17:03      | things, and I saw this recently, [[Working Copy]] posted about it on [[Mastodon]], where if you're using         |
| 17:09      | old versions of shortcut support, things don't necessarily work the way they're supposed to.            |
| 17:13      | In a working copies case, it was deleting files. And that's not what that shortcut action was           |
| 17:18      | supposed to do. It was supposed to return a list of files, but it was deleting them. It's like, oh,     |
| 17:24      | that's not what that's supposed to be doing. That's not good. And it's not app intents,                  |
| 17:29      | which is the newest version of shortcut support. This is an older version. But fortunately,             |
| 17:37      | Anders found out about this, I think just before the iOS 18 release and was able to ship a version       |
| 17:43      | with the shortcut sections that basically neutered the shortcut sections so they couldn't really do     |
| 17:47      | anything. But it did mean that also people didn't start losing a whole bunch of files,                  |
| 17:51      | because that would be the direct consequence of that. So I do understand why some developers            |
| 17:56      | are a little reluctant when things like that sneak in. It's one of those things as well,                |
| 18:02      | where if people don't report the bugs, because they don't know about the bugs necessarily,              |
| 18:07      | or they don't see the bugs, then things aren't going to get fixed. So as always, folks,                 |
| 18:11      | file feedback, you can open feedback system on your iPhone and iPad and Mac, even if you don't          |
| 18:16      | actually run a beta, like feedback assist is still there, you can use the [[URL Schemes\|URL scheme]].                   |
| 18:21      | But yeah, if you find something that's broken, please file feedback.                                    |
| 18:24      | Yeah. And I appreciate that they have [[AppleScript]] support. We've talked about it on the                |
| 18:30      | show previously, that on the setup show, we specifically mentioned that one of the ways                 |
| 18:35      | to pull it off with [[Shortcuts]] is just to run the moon shortcut to trigger a specific layout. And        |
| 18:41      | that's still there, and it's even better. But I would honestly prefer that they figure out a            |
| 18:48      | specific shortcut action. Another thing about the new version, and this has always been true            |
| 18:53      | about [[Moom]], but even more so now is keyboard support. You can rename any action, you can assign         |
| 19:00      | custom keyboard shortcuts to anything, and you can make them really obscure keyboard shortcuts,         |
| 19:05      | and then trigger those via automation, easy enough, and do window setups that way too.                  |
| 19:11      | Just congratulations to [[Moom]], an app that I thought was kind of feature complete,                       |
| 19:17      | and they proved me wrong. They added so many new features to this thing,                                |
| 19:21      | many of which I'm using. What's your favourite, Rose?                                                    |
| 19:25      | I mean, it's one of those things, I don't think I have a favourite, because that's like asking you       |
| 19:32      | to choose between your two children. And maybe you do have a favourite, but you're never actually        |
| 19:35      | going to admit it, are you? Honestly, I think my favourite thing about [[Moom]] is just the way that         |
| 19:41      | it kind of disappears. I don't really realise I'm using it until I'm on a Mac where it's not            |
| 19:44      | installed, and then it's just broken. Because I'm just there, and I have my setup, and I run,           |
| 19:54      | for example, [[Bunch]] to open the apps that I need, and then it waits 10 seconds, and then it runs my      |
| 19:58      | [[Moom]] script. And then ta-da, everything's in the right place. And when I start my day at work,          |
| 20:03      | it just runs [[Moom]] for me, and everything is better. And it's one of those things where                  |
| 20:10      | I don't have a single favourite feature. But I don't know, maybe my favourite new feature is              |
| 20:13      | that custom palette that appears when you hover over the magnifying button. I think that's probably     |
| 20:18      | it. The pop-up palette, to me, that is definitely my favourite new feature. Because it's funny,          |
| 20:25      | because I was deep in the Sequoia beta, and we're going to talk in a minute about Sequoia               |
| 20:30      | window management, which is very good. I was thinking, well, maybe I don't need [[Moom]]. Maybe I           |
| 20:34      | could get by with this. And then I saw the features in the new update. I'm like, oh, no, they got me.   |
| 20:39      | They still got me. And for some other reasons, we'll explain when we talk about the Sequoia             |
| 20:44      | window management. I feel like there's just a few things they didn't do that I wish they did.           |
| 20:50      | But [[Moom]], excellent. It was a $6 upgrade from the prior version, $10 to buy it new. I don't know        |
| 20:59      | if that was a launch discount or not, but you can get it in the [[App Store]]. I think there was a          |
| 21:04      | small launch discount, but it's still very affordable. I mean, $10 for easy window management.          |
| 21:11      | You earn that back in a day. It's just so, so, so useful. And Rose and I both use this one,             |
| 21:18      | because I think it's the best. And it's got all the features that I want, the [[AppleScript]],             |
| 21:24      | the popup palette, the easy organisation. My windows are very happy that I have moon on my device.      |
| 21:33      | This episode of The Automators is brought to you by Notion. Go to Notion.com/Automators to        |
| 21:40      | try the powerful, easy to use Notion AI today. There's so much to love about Notion. Notion is          |
| 21:47      | the backbone of the MacSparky Empire. I run all our collaborative projects through Notion.             |
| 21:54      | I look at a bunch of different options and Notion was the one that stuck because it's easy to use,      |
| 22:00      | it's powerful, and it gives me exactly what I need, exactly when I need it. Every morning,              |
| 22:05      | I look at my Notion dashboard and it tells me which projects are on tap, which ones need                |
| 22:12      | additional pickup work from the people I'm working with, and what I'm planning on doing                 |
| 22:17      | in the next few days. It's just a great location for project management. The new Notion AI is a         |
| 22:23      | single AI tool that does it all. You can search across Notion and other apps, generate docs in          |
| 22:28      | your own style, analyse PDFs and images, and chat with you about anything. Notion is a perfect          |
| 22:35      | place to organise your tasks, track your habits, write beautiful docs, and collaborate with your        |
| 22:40      | team. And the more content you add to Notion, the more Notion AI can personalise its responses for      |
| 22:46      | you. Because unlike generic chatbots, Notion AI already has the context of your work. Notion AI         |
| 22:53      | is connected to multiple knowledge sources. It uses AI knowledge from GPT-4 and Claude                  |
| 22:59      | to chat with you about any topic. It can search across thousands of Notion docs in seconds to           |
| 23:04      | quickly answer any question. And with AI connections, now in beta, Notion AI can also search across     |
| 23:11      | Slack discussions, Google Docs, Sheets and Slides, and more tools like GitHub and Jira are coming       |
| 23:17      | soon. Notion is used by over half of the Fortune 500 companies, so you'll be in great company.          |
| 23:23      | I love this AI feature. A couple of the things we're doing with it. One is I'm transcribing             |
| 23:29      | all the stuff I make for MacSparky Labs. So when I'm thinking about new content,                       |
| 23:33      | I can search Notion to see what I've done on it before. I can also ask it to take a look at my          |
| 23:39      | outline and tell me if it thinks I missed something. It really is useful on our little team.            |
| 23:44      | So try Notion for free when you go to Notion.com/Automators. That's all lower case letters,       |
| 23:51      | notion.com/Automators to try the powerful, easy to use Notion AI today. And when you use          |
| 23:59      | our link, you're supporting our show, Notion.com/Automators. Once again, go check it out          |
| 24:05      | and improve your teamwork flows today. Since we mentioned [[Moom]], I feel like we should also              |
| 24:15      | spend a little time talking about the alternatives. The big new one is Sequoia window management.       |
| 24:21      | Apple added proper window management in Sequoia, which is now available for you to download on          |
| 24:27      | your Mac. Overall, I want to give this two thumbs up. I think they did a good job. The basics of        |
| 24:33      | getting the window on the left side or the right side or the quarters, they even did a feature          |
| 24:38      | where you can have two windows open and swap them. And I've never seen that in any window manager,      |
| 24:43      | including [[Moom]], where you can say, take the thing on the right and put it on the left and vice versa.   |
| 24:48      | That's cool. And they have built-in keyboard shortcuts. They've got it in the menu system               |
| 24:55      | under the window tab. They've got it under the green button too. So there's just,                       |
| 25:02      | I think, a pretty good job of Apple. Oh, they also have the thing where you can drag it to              |
| 25:06      | the corners if you want. If you hold down the option key, you can put it to pre-designated              |
| 25:11      | spaces. I think for a lot of people who are not power users, the new implementation is probably         |
| 25:17      | enough. Yes. Yeah. I think it really is. And for people like my mom and someone who occasionally        |
| 25:24      | might want a little bit more, this is basically what she's going to need. Because most of the           |
| 25:29      | time, she just won't stick it over here, stick it over there, and without having to                     |
| 25:35      | drag the side of the window to try and get things to line up. And for that, it seems pretty great.      |
| 25:42      | And there's also the shortcuts actions for finding windows, where you've got filtering by app name,     |
| 25:48      | visible or invisible, width, window index, name, et cetera. And then you can resize a window or         |
| 25:55      | move a window. So you've got resizing it to fit the screen or to particular sizes, such as your         |
| 26:02      | top half, bottom half, left half, right half, and so on, or specific dimensions. And that's             |
| 26:08      | pretty cool. You can't really trigger it from the magnification button or anything, which               |
| 26:15      | means that it's kind of really more for setups. So if you've been doing setups using [[Shortcuts]]          |
| 26:19      | where it opens certain applications or files, then this could be a good extension to that.              |
| 26:25      | But for me, it's unfortunately lacking a little bit because it just doesn't necessarily do things       |
| 26:34      | like handle my other windows for me. It just kind of leaves them in places, which is not necessarily    |
| 26:39      | exactly what I want. Yeah, another shortcoming for me is the keyboard shortcuts aren't customisable     |
| 26:46      | via the system. You can do it if you go use the trick where you go into [[Control Centre]] and you          |
| 26:52      | write a new menu based keyboard shortcut. But I feel like that's pretty, it should have been,           |
| 26:58      | they should have had their own setting in there like they do for screenshots and other things.          |
| 27:03      | And for me, where I saw that was using my extended Apple keyboard, the globe key and the                |
| 27:08      | control key are next to each other, which makes the built in keyboard shortcuts almost unusable.        |
| 27:15      | And it's just not, it's not as big as something like [[Moom]], but not everybody wants an [[AppleScript]]             |
| 27:20      | that's going to fire a pre-designated window setup. It's good for what it is.                    |
| 27:27      | Yeah, it is. And there's actually, to give [[Apple]] credit, there's a whole bunch of documentation         |
| 27:33      | on their website as to how to use all of this stuff, which is pretty nice. They still have              |
| 27:40      | [[Stage Manager]]. That is something that I keep trying on macOS for a little bit. And then it              |
| 27:46      | starts annoying me and I give up on it really rapidly. But yeah, there's options. So I've linked        |
| 27:54      | the docs on tiling windows, changing your window tiling settings and Mac window tiling icons and        |
| 28:01      | keyboard shortcuts. So those are all going to be in the show notes for everybody.                       |
| 28:06      | What about Stage Manager gets you when you do those tests? What is it ultimately that                   |
| 28:11      | chases you away? It feels like it doesn't really understand that 95 to 99% of the time,                 |
| 28:24      | if I want a new window of an application or I want a new application, I want it where I am.             |
| 28:30      | I don't want it in a new space where I then have to go into the space where it previously was and       |
| 28:35      | drag it in. And that just drives me away really, really rapidly. And also it just feels like it's       |
| 28:43      | taking up space on macOS in a way because it's very much designed for kind of like either you're        |
| 28:50      | going full screen or you're doing like bitty stuff. And I just need my whole monitor. I need            |
| 28:57      | all the space on the left and the right and dragging stuff in doesn't work very well because            |
| 29:02      | especially when I am working on my laptop, my laptop monitor is docked to the left of my Mac,           |
| 29:10      | which means the [[Stage Manager]] doesn't quite work on the internal display because you have to kind       |
| 29:15      | of like go through that to get to the next monitor and so on. It doesn't feel like it's                 |
| 29:21      | designed for power users in a way that it makes sense for me. That said, I do use it on the iPad        |
| 29:29      | and I do like it on the iPad, but it's different on the iPad because it's also one device with          |
| 29:34      | more monitor and in my case an 11-inch display. So it's a bit different.                                |
| 29:40      | Yeah, it feels to me like it's not intuitive enough if that makes sense. It's like things often         |
| 29:47      | have like, they just, they don't work the same that I expected and like combining windows on the        |
| 29:53      | desktop feels like things happen that I don't expect. I just don't think it's really a power            |
| 29:58      | user feature and I would like it to work because I kind of like it. I've got a big giant screen.        |
| 30:04      | I do have the real estate to spare, but I just can't get it to work right. Maybe I'm going to try       |
| 30:11      | again using [[Moom]] and try and get [[Moom]] setups to work. So if I can maybe use that in combination         |
| 30:17      | with the pop-up button in [[Moom]], maybe I can make it work, but I honestly like you.                      |
| 30:23      | Yeah, I mean, I think one of the things that I also found is like it doesn't work with things           |
| 30:27      | like [[Moom]] or at least it didn't previously. Maybe the new version of [[Moom]] is better at handling         |
| 30:31      | [[Stage Manager]], but for me it was just one of those things where it's like, no, like I know              |
| 30:35      | where I want my windows and I want to put them over here and I want to put them over there and          |
| 30:38      | then [[Stage Manager]] is like, oh, you're trying to move this to a new space. It's like, no, no,           |
| 30:42      | I'm not. I just want to stick my window right there like at the way. So yeah, I don't know.             |
| 30:49      | Hopefully [[Moom]] can handle [[Stage Manager]]. I will have a look in their docs and see if it does.           |
| 30:54      | All right. Some of the other apps though, we were going to talk about in addition to                    |
| 30:58      | Windows, there's a whole host of them. [[Keyboard Maestro]] is great for it. That was kind of the           |
| 31:04      | original app I used to range windows before [[Moom]] existed. You can do it. You can do it very             |
| 31:09      | granularly and it gives you control of each window. It gives you multi-monitor control.                 |
| 31:14      | It has all the stuff that you need to do this, although I find it more fiddly than [[Moom]]. But            |
| 31:20      | if you already have [[Keyboard Maestro]] and don't want to spend 10 bucks, you can absolutely               |
| 31:23      | make it work with [[Keyboard Maestro]]. Yes. Yeah. And it's pretty good. It works.                          |
| 31:32      | And that's, I think, the thing that always is important, right? If you find a solution                  |
| 31:38      | and it works for you and you're happy with it, that's great. Personally, it's one of those              |
| 31:43      | things where sometimes I lean heavily on the consolidate. I want as few applications as possible        |
| 31:50      | to do things. But also, I do greatly believe in the right tool for the right job. Yeah.                 |
| 31:56      | If you can get the great electric screwdriver and you've got a whole bunch of stuff that you're         |
| 32:02      | going to need a screwdriver for, it's worth having a good electric screwdriver for it.                  |
| 32:06      | If you need to assemble one very small piece of IKEA furniture, a hand screwdriver is just fine.        |
| 32:11      | So I think it's just one of those things where you have to figure out, are you doing the minimum        |
| 32:19      | like tiniest piece of IKEA furniture assembly where you don't really even need a screwdriver,           |
| 32:23      | probably just the Allen key that they provide you with? Or do you actually need                         |
| 32:29      | the electric screwdriver? What is it that you're doing? And also, don't forget,                         |
| 32:33      | most of these apps have got free trials, which means that you can download them,                        |
| 32:37      | try them out for free and give it a go. [[Moom]] has a great free trial as well.                            |
| 32:42      | So it's worth giving it a go to see if it works for you and the way that your brain works.              |
| 32:47      | Just a couple of other apps, [[Raycast]], the keyboard launcher. I think they have excellent                |
| 32:52      | windows support, [[BetterTouchTool]] slash [[BetterSnapTool]]. We've talked about in the past,              |
| 32:58      | you can do this with [[Shortcuts]]. [[Shortcuts]] is not even as powerful as the built-in one though,           |
| 33:04      | although it does allow you to automate the process. There's a lot of tools for this. I mean,            |
| 33:09      | if you went to the [[App Store]], you'd probably find 50. But [[Moom]] is the one that always pulls up my       |
| 33:14      | heartstrings. Yeah, it does for me too. And there's just something about it. It just feels nice to      |
| 33:20      | use. And that is something that cannot be said for every application. So yeah, it's a nice tool         |
| 33:28      | for a nice job. And it works really well for me. Yeah, congratulations to [[Many Tricks]] on impressing        |
| 33:36      | us again and reaffirming our automated endorsement of this great window management tool.                |
| 33:41      | Switching gears, Rose. Another thing that came out since we've had the release of these operating       |
| 33:47      | systems is the [[Control Centre]]. We talked about this after [[WWDC]], but now it's in the wild. And           |
| 33:55      | the third-party application units are starting to show up. We just got one for                          |
| 34:01      | Dark Noise and there's a couple other apps that are showing up. What do you think of [[Control Centre]]     |
| 34:06      | now that you can fully customise it? And what are you doing with it?                                    |
| 34:10      | Well, so I am still running the beta. I'm running the beta with [[Apple Intelligence]] and so on. So        |
| 34:17      | I will take a note or I will make a note that I do have that additional complication in there,          |
| 34:24      | perhaps. But I have found the [[Control Centre]] seems to occasionally change slash reset the layout.       |
| 34:32      | And I don't quite understand how or why. And I noticed in the latest beta that the                      |
| 34:39      | radios page, and I thought it was just doing something where it kind of like reset things,              |
| 34:44      | but the radios page now has airplane mode as like a long, skinny rectangle. And then four squares       |
| 34:51      | for Wi-Fi, [[AirDrop]], Cellular Data, [[Bluetooth]], and then the other three at the bottom are                |
| 34:55      | rectangles again, instead of it just being like a list, which it was. And that's kind of broken         |
| 35:00      | my muscle memory a bit. But other than the occasional it glitches out for a little bit and              |
| 35:06      | everything kind of like just shows like this is a home action. We will show you the home actions        |
| 35:12      | later. I found it to be really good. I like the fact that you can customise it completely. I don't      |
| 35:17      | tend to use the music page all that much, but I have added my own home controls page, which I use       |
| 35:22      | all the time. And I really love that. And I added an extra page as well, which has got things that      |
| 35:27      | I don't need super often in, but I use them every once in a while like opening print centre             |
| 35:32      | and things like that, which is pretty cool. What about you? Yeah, it's a little wonky in the beta,      |
| 35:37      | but like you, I'm in the kind of at the hairy edge of the beta. But I think it's great. We talked       |
| 35:44      | about this on [[Mac Power Users]], so I won't restate a whole bunch of it, but I have a full screen of    |
| 35:50      | home, you know, home control stuff. So like all the lights and locks and everything are their           |
| 35:55      | own screen. And I have recreated the default screen just the stuff that I want. And now I'm             |
| 36:03      | working on the third screen and just trying to figure out the best way to navigate between them.        |
| 36:07      | I think I'm still not fully settled on what my strategy is for it, but I do find that just              |
| 36:14      | swiping into [[Control Centre]] to do things like start dark noise versus put it on a widget on the         |
| 36:19      | home screen, make more sense with my brain. And I am all for that. So I'm really enjoying it.           |
| 36:26      | Yes. Yeah, me too. And I'm really appreciating the fact that so many app developers have added          |
| 36:31      | actions as well, like, you know, [[Drafts]]. I have the ability to add a new draft and a new draft with     |
| 36:37      | a clipboard in my [[Control Centre]] now. And that's just something that's like, it's on the first          |
| 36:42      | page of the [[Control Centre]] for me. It's just there. So if I swipe into [[Control Centre]], you know,        |
| 36:46      | as I often do to just be like, okay, I started a thing, I need to do a thing, it's like, oh,            |
| 36:51      | well, I can just paste into [[Drafts]] simple, you know, if I've copied something, which is just very       |
| 36:56      | nice. Yeah, exactly. So it kind of resets what your default [[Control Centre]] is for the stuff that        |
| 37:02      | you do. And then you can put the other stuff like setting an alarm or whatever on an additional         |
| 37:07      | screen if you rarely do it, but you do want to have the ability to set it via [[Control Centre]].           |
| 37:12      | And that's what I'm still trying to figure out is what makes the cut. And it doesn't help that          |
| 37:17      | every time I go in there, there's another third party app that I love that has new actions. So          |
| 37:21      | that like makes me rethink it. I do think organising it is not easy. I think they I wish they could     |
| 37:28      | have done a better job to make it easy to drag between screens and whatnot. But it's all good.          |
| 37:33      | It's a start. Yes, yeah, the one feature that I feel is really missing is like if I'm if I go into      |
| 37:38      | edit mode and I tap on a blank spot, like I would tap on a blank spot and I kind of expect to just      |
| 37:43      | be able to like select the thing that I want and put it and like from the blank spot, I have to tap     |
| 37:48      | at the almost invisible if I'm on coming from a white background thing at the bottom, which is          |
| 37:54      | at a control. And then yeah, and then at that point, I can go through and add a control.                |
| 38:00      | But I have to say the thing that's been really handy for me is customising my home screen actions       |
| 38:06      | because the home screen actions can also be customised now with the same [[Control Centre]]                 |
| 38:11      | actions that are available. So this means that you can then change, you know, the torch flashlight      |
| 38:18      | and camera buttons on your lock screen to be different things, which for my grandmother,                |
| 38:24      | because she keeps accidentally turning on the torch on her phone and she doesn't understand             |
| 38:29      | why or how we've we've replaced it with the camera button again, so that she ends up with               |
| 38:37      | two camera buttons on her on her lock screen because she also I think that was the other                |
| 38:41      | thing. Sometimes she didn't know which one was which. So she turned on the torch and and then           |
| 38:44      | go into the camera and then yeah, it would get very confusing and she panic. So I will I've             |
| 38:51      | changed that for her. And I think that's, you know, just something that's nice that you can do for      |
| 38:55      | folks. A number of times I've seen people walking around with the flashlight on on their phone.         |
| 38:59      | And I think a lot of people are completely oblivious based on the number of people I've                 |
| 39:02      | said, like, did you know the flashlight's on? Oh gosh, no, I didn't. Thanks. You know, that's the       |
| 39:07      | usual reaction that I get. So it's nice to be able to change those out. And then you can put            |
| 39:12      | [[Shortcuts]] in there too. Yeah, you just feel like a little white dot in their pocket, right? The         |
| 39:17      | flashlight's on. Yeah, yeah, exactly. Like glowing through the denim. Here's something to think         |
| 39:22      | about gang. Use this in combination focus mode. So like when I'm in the Disneyland focus mode,          |
| 39:28      | my I took the camera off because now I have a new phone with a button that can push to trigger the      |
| 39:33      | camera. So I put the Disneyland app on the home screen widget. And because you can have it launch       |
| 39:40      | an app, it's one of the [[Shortcuts]] actions. And because when you're at Disneyland, you need to           |
| 39:45      | get to the app to get your ticket to get your photo pass, all that stuff. Now I can do it right         |
| 39:49      | from my home screen. And I, and I'm just like, again, thinking through with my various [[Focus Mode\|focus modes]],   |
| 39:55      | what should those, you know, what are the buttons I want there? And it's rarely camera and       |
| 40:01      | flashlight. So that gives me a new opportunity. And I just want to call out as one last point,          |
| 40:07      | just the I think there's a big payoff happening with the widget system and the [[Control Centre]]           |
| 40:13      | button system, all these things are kind of working together. And Apple started this what,              |
| 40:18      | three, four years ago. But now you're seeing the payoff of all this, you know, between [[Swift UI]]         |
| 40:24      | and this kind of universal widget system. It's just showing up everywhere.                              |
| 40:30      | Yeah, yeah. And that is something that is, is really nice. You know, I've, I've spoken to a             |
| 40:35      | couple of different app developers and play with it myself. And the fact that, you know, the app        |
| 40:38      | intense things, you know, they were, you know, the latest version of how you integrate with [[Shortcuts]],  |
| 40:44      | but adding those to [[Control Centre]] actions and so on. You know, I'm not going to say it's,              |
| 40:49      | it's as easy as one, two, three, but it's certainly nicer to be able to use the app                     |
| 40:53      | intense that you've already created for [[Shortcuts]], instead of having to create something brand new.     |
| 40:58      | And the fact that, you know, it does all work together means hopefully we're going to see more          |
| 41:03      | shortcuts actions from other app developers who don't really necessarily think about [[Shortcuts]]          |
| 41:09      | in the same way that you and I do, because, you know, they're just there. You know, they have           |
| 41:14      | to create the app intense so that they can put it in the [[Control Centre]] thing. And therefore,           |
| 41:18      | it just kind of magically appears. All right. Well, there's a nice little update. Check out             |
| 41:23      | [[Moom]] gang. The new version is very excellent for automators, but we also talked about some other        |
| 41:29      | window management tools. And let us know what you're doing with your [[Control Centre]]. You can do         |
| 41:33      | that over at [talk.automators.fm](https://talk.automators.fm). We are the automators. You can find us at relay.fm/automators.           |
| 41:39      | automators. If you are an Automators Max member, stick around. We're going to talk about keyboard        |
| 41:45      | woes. That's the extended ad free version of the show. And thanks again. See you next time. Goodbye,    |
| 41:51      | folks.                                                                                                  |
