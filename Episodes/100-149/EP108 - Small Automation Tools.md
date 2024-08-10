---
status: "incomplete"
fc-date:
  year: 2022
  month: 08
  day: 12
fc-category: "podcast"
podcast: "Automators"
published: 2022-08-12
duration: 5345
formattedduration: "01:29:05"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/108"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators108.mp3"
episode: 108
title: "108: Small Automation Tools"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rose and David explain some of their favourite small automation tools and how they work.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 108 Discussion](https://talk.automators.fm/t/108-small-automation-tools/14180)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[Setapp (Sponsor)|Setapp]] - more than 200 powerful apps for your Mac.
- [[Hover (Sponsor)|Hover]] - Make a name for yourself.
- [[Hunter Douglas (Sponsor)|Hunter Douglas]] - Custom Window Blinds, Shades, Shutters and Drapery.

# Show Notes
- [Controller for HomeKit – Your Smart Home Companion](https://controllerforhomekit.com/)
- [Text Case](https://textcase.app/)
- [PushCut - Triggers, notifications & widgets that kick off your automation](https://www.pushcut.io/)
- [Data Jar](https://datajar.app/)
- [Toolbox Pro](https://toolboxpro.app/)
- [BetterTouchTool | folivora.ai - Great Tools for your Mac!](https://folivora.ai/)
- [BetterTouchTool Forums](https://community.folivora.ai/top?period=monthly)
- [PopClip for Mac](https://pilotmoon.com/popclip/)
- [PopClip Forum](https://forum.popclip.app/)
- [OmSave: Safari Extension for OmniFocus](https://www.dsabanin.com/omsave)
- [Awesome Screenshot - Screen recorder and Screen capture](https://www.awesomescreenshot.com/)
- [StopTheMadness](https://underpassapp.com/StopTheMadness/)
- [Vinegar - Tube Cleaner on the App Store](https://apps.apple.com/gb/app/vinegar-tube-cleaner/id1591303229)
- [Baking Soda - Tube Cleaner on the App Store](https://apps.apple.com/gb/app/baking-soda-tube-cleaner/id1601151613)
- [URL Linker for Safari on the Mac App Store](https://apps.apple.com/de/app/url-linker-for-safari/id1289119450?l=en&mt=12)
- [HomeControl Menu for HomeKit on the Mac App Store](https://apps.apple.com/gb/app/homecontrol-menu-for-homekit/id1547121417?mt=12)
- [Scenecuts on the Mac App Store](https://apps.apple.com/us/app/scenecuts/id1540491573?mt=12)
- [QuietMeet: Auto-Pause Music on the Mac App Store](https://apps.apple.com/gb/app/quietmeet-auto-pause-music/id1616212598)
- [Service Station – Customise your Right-Click Menu](https://servicestation.menu/)
- [Right Click Booster on the Mac App Store](https://apps.apple.com/gb/app/right-click-booster/id970432740?mt=12)
- [Default Folder X](https://www.stclairsoft.com/DefaultFolderX/)
- [ForkLift 3 - most advanced file manager and FTP client for macOS](https://binarynights.com/)
- [Alfred - Productivity App for macOS](https://www.alfredapp.com/)

# Transcription
  
| Time Index | Transcription                                                       |
| :--------- | :------------------------------------------------------------------ |
| 00:00      | Welcome to The Automators. I'm David Sparks,                        |
| 00:04      | and joined by my co-host, Rosemary Orchard,                         |
| 00:06      | and this is where we talk about how to automate                     |
| 00:08      | your technology to do your bidding for you.                         |
| 00:11      | Hello, Rose.                                                        |
| 00:12      | Hey, David. How are you?                                            |
| 00:13      | Good. Good. I'm fresh back from a fun vacation.                     |
| 00:17      | This is the first thing I've done as I've sat back in my desk,      |
| 00:20      | and I miss talking to you.                                          |
| 00:23      | Well, I'm glad you miss talking to me.                              |
| 00:25      | I'm sure you would prefer to be doing it all                        |
| 00:26      | a few more hours sleep.                                             |
| 00:28      | Folks, David, let me know that you got home at three                |
| 00:29      | in the morning, and I don't know what time it is there.             |
| 00:31      | It feels like it must be seven for you or something.                |
| 00:33      | I'm sure it is.                                                     |
| 00:34      | I don't know. It's a time thing.                                    |
| 00:37      | I don't get it.                                                     |
| 00:38      | We were far away, so time zone, shift, whatever.                    |
| 00:42      | I'll be fine.                                                       |
| 00:44      | The Automators always inspires me,                                  |
| 00:46      | so there's always a lot to talk about.                              |
| 00:48      | Today, we actually have a couple things going on.                   |
| 00:53      | In the bonus section, the Automators Max,                           |
| 00:55      | Rose has been setting up a smart home for her parents in France,    |
| 00:59      | where she is not located and that has been a challenge,             |
| 01:03      | so we're going to be talking about that,                            |
| 01:04      | how to set up a smart home remotely.                                |
| 01:06      | I think that's going to be really helpful for people                |
| 01:08      | that are also helping parents and families and friends.             |
| 01:11      | Yeah, yeah.                                                         |
| 01:12      | I'd love to turn this into an episode further down the line         |
| 01:14      | once I'm outside the experimentation phase, too.                    |
| 01:17      | Sure. I think we will.                                              |
| 01:18      | The other thing is today,                                           |
| 01:20      | we're going to be talking about small automation tools.             |
| 01:23      | I mean, quite often on the show,                                    |
| 01:25      | we get down the rabbit hole of [[AppleScript]]                          |
| 01:27      | or [[Keyboard Maestro]] or one of the big players                       |
| 01:31      | in automation space that we like to cover,                          |
| 01:34      | but also, Rose and I use a lot of little tools for automation.      |
| 01:38      | None of them really get their own show,                             |
| 01:40      | but we thought we'd like to at least point you at them              |
| 01:42      | and talk about some of the things we can do with them,              |
| 01:45      | so that's what we're going to do today.                             |
| 01:48      | Rose also has an announcement.                                      |
| 01:50      | I do.                                                               |
| 01:51      | Take Control of Shortcuts 2 is out with Take Control Books,         |
| 01:55      | and I'm very excited.                                               |
| 01:56      | I've added loads more stuff to the book,                            |
| 01:59      | so many example shortcuts,                                          |
| 02:00      | and I'm already updating it for iOS 16 and Mac OS Ventura,          |
| 02:04      | which will be a free update when they come out later this year.     |
| 02:07      | So, yeah, it's very exciting.                                       |
| 02:09      | I'm hearing some great feedback from folks                          |
| 02:11      | who are getting lots of ideas of focus modes                        |
| 02:13      | and related things and how to work around pesky things,             |
| 02:17      | like a focus mode enabling itself on a work day,                    |
| 02:19      | but it's actually a holiday and things like that.                   |
| 02:22      | So, it's nice that I've been able to help some people.              |
| 02:25      | Yeah, and I got also in,                                            |
| 02:28      | I just recently released as well,                                   |
| 02:30      | is the iOS 15 update for the Shortcuts for iPhone Field Guide.      |
| 02:36      | You know, both of us had a struggle this year                       |
| 02:39      | because I think of the Shortcuts for Mac bugs,                      |
| 02:43      | it slowed down kind of the production cycle,                        |
| 02:45      | but I'm glad we were able to get those things shipped.              |
| 02:48      | And it's great,                                                     |
| 02:50      | and things aren't such more of a firm foundation now.               |
| 02:55      | You really can feel it going with iOS 16, I don't think.            |
| 02:58      | We're going to have nearly the trouble we did last year,            |
| 03:01      | kind of getting things put together.                                |
| 03:03      | Yes, exactly.                                                       |
| 03:04      | Things feel a lot more stable,                                      |
| 03:06      | and also, you know, there's just some other great features          |
| 03:09      | that are sneaking in there,                                         |
| 03:10      | which I'm sure a lot of folks are looking forward to,               |
| 03:12      | and especially on iOS, you know, they're really enhancing things,   |
| 03:16      | and I suspect we're going to continue to see improvements           |
| 03:18      | throughout the year again, which is definitely                      |
| 03:20      | an ongoing theme with Shortcuts.                                    |
| 03:22      | And indeed, all automation systems,                                 |
| 03:24      | people are, you know, doing great big releases                      |
| 03:26      | with the new big versions of iOS and macOS,                         |
| 03:30      | but then they're continuing to iterate                              |
| 03:31      | and add cool new things throughout the year.                        |
| 03:34      | And I really love that developers don't feel beholden               |
| 03:36      | to the Apple release cycle, because they shouldn't be.              |
| 03:40      | And it also gives us way more to talk about all year round          |
| 03:42      | instead of talking about something                                  |
| 03:43      | three months after it was released.                                 |
| 03:45      | I really do feel like the story of the next year                    |
| 03:49      | for Shortcuts is going to be the expansion                          |
| 03:52      | of developer support.                                               |
| 03:53      | It's like we've reached some sort of threshold                      |
| 03:57      | where a lot of people who were sitting on the sidelines             |
| 03:59      | are getting off the sidelines and building Shortcuts.               |
| 04:01      | And I know that with iOS 16 and macOS of Ventura,                   |
| 04:06      | they have made it easier to add Shortcuts support.                  |
| 04:09      | In some cases, even automatically adding support.                   |
| 04:13      | But I just can't help but feel like one of the big things           |
| 04:17      | is going to be the way third-party developers                       |
| 04:19      | make Shortcuts better over the next year.                           |
| 04:22      | Yes, it definitely will be.                                         |
| 04:23      | And honestly, I'm seeing a whole bunch of developers,               |
| 04:26      | you know, trying to figure out what it is                           |
| 04:28      | that they want to do with these things                              |
| 04:31      | and considering replacing some of their existing things.            |
| 04:35      | And also, lots of new developers                                    |
| 04:37      | who haven't added Shortcuts support before                          |
| 04:40      | because it was too difficult or people weren't going                |
| 04:43      | to discover them because that's the other problem, right?           |
| 04:46      | People won't use Shortcuts if there are no actions                  |
| 04:48      | that they want, but also there's no point adding actions            |
| 04:50      | to Shortcuts if people won't find out they exist.                   |
| 04:53      | So I think the new discoverability                                  |
| 04:56      | at the bottom of the menu there in iOS 16                           |
| 04:59      | and macOS Ventura is really going to help matters                   |
| 05:03      | for developers and consumers, you know,                             |
| 05:05      | people who are looking to say,                                      |
| 05:07      | hey, like, what can I do with these things?                         |
| 05:10      | And how can I make it into a quick button                           |
| 05:11      | that I can talk to with Siri and so on and so forth?                |
| 05:14      | So it's good to see.                                                |
| 05:16      | It's a great time to learn Shortcuts                                |
| 05:17      | and take control of Shortcuts 2.0 by Rosemary Orchard               |
| 05:20      | is a great place to get started.                                    |
| 05:22      | Yeah, and if you had the previous version,                          |
| 05:24      | there's a 50% off code in the back as well.                         |
| 05:26      | So don't forget to check that out.                                  |
| 05:28      | All right, so we're going to get into small automation tools        |
| 05:31      | today. Let's just dig right in.                                     |
| 05:33      | Let's start with iOS and all of the cool little stuff               |
| 05:38      | we've got on iOS.                                                   |
| 05:40      | Yeah, I mean, there's loads of great apps                           |
| 05:42      | and honestly, we're not going to cover everything today             |
| 05:45      | and I feel really bad about it.                                     |
| 05:46      | So, you know, please feel free, post in the forum,                  |
| 05:48      | send us feedback on, you know,                                      |
| 05:50      | what your favourite things are.                                      |
| 05:52      | But for iOS, there are a couple of great utilities                  |
| 05:56      | that I've been using for ages,                                      |
| 05:58      | which really help automate things.                                  |
| 06:00      | Or I'm going to start with one that saves me                        |
| 06:02      | automation pain or saves me a pain of things                        |
| 06:05      | that can't be automated.                                            |
| 06:06      | David, have you ever had default room magically appear              |
| 06:09      | in the home app on iOS and Mac OS                                   |
| 06:12      | where some accessories have just magically moved themselves         |
| 06:15      | and they now live in this great place called default room,          |
| 06:18      | which is the worst room.                                            |
| 06:20      | I wish I could find it.                                             |
| 06:21      | I can't, I've walked all over my house.                             |
| 06:23      | I cannot find default room.                                         |
| 06:25      | I don't know where it is.                                           |
| 06:25      | I know.                                                             |
| 06:26      | I mean, if it was the room of requirement                           |
| 06:28      | and it appeared when you needed it                                  |
| 06:29      | and then there was this great place to store                        |
| 06:31      | all these extra things and there was a cinema in there,             |
| 06:33      | I'd love it.                                                        |
| 06:34      | But as it is, it's a bug basically in [[HomeKit]]                       |
| 06:37      | where sometimes things kind of lose                                 |
| 06:40      | which room they were in somehow.                                    |
| 06:42      | I'm not quite sure how or why.                                      |
| 06:45      | And so they get moved to this place called the default room.        |
| 06:48      | And I hate this.                                                    |
| 06:50      | I'm sure everybody who has ever experienced this hates it,          |
| 06:53      | especially when you use things like your HomePod to say             |
| 06:56      | to your HomePod, hey Apple lady,                                    |
| 06:58      | you know, turn off the lights                                       |
| 07:00      | because the HomePod will turn off the lights                        |
| 07:01      | that are in the same home room as it is in,                         |
| 07:05      | which is, you know, a great feature                                 |
| 07:08      | unless your lights moved.                                           |
| 07:09      | So I use this app called [[Controller for HomeKit]]                     |
| 07:11      | which is available in iOS.                                          |
| 07:12      | There's a Mac OS version as well                                    |
| 07:14      | and you can back up [[HomeKit]] in it.                                  |
| 07:17      | And it backs up everything, you know, like your scenes              |
| 07:19      | and your location of devices and names and so on and so forth.      |
| 07:23      | And so you can back everything up                                   |
| 07:25      | and then, you know, I just do this on a regular basis.              |
| 07:27      | And then if default room strikes,                                   |
| 07:29      | I can just roll back to the last backup                             |
| 07:31      | because to be honest, I don't tend to go in                         |
| 07:33      | and change things in my [[HomeKit]] setup                               |
| 07:36      | on a very regular basis.                                            |
| 07:38      | So this works for me, but also if I go in                           |
| 07:39      | and I make a bunch of changes                                       |
| 07:41      | then I can just run into control of [[HomeKit]]                         |
| 07:43      | and hit back up and then I'm good to go.                            |
| 07:45      | You know, I've got everything, you know, back how I wanted it.      |
| 07:49      | And there is another sneaky feature of this that you can do         |
| 07:52      | if you are replacing something like a light bulb,                   |
| 07:55      | then what you can do is you can back everything up.                 |
| 07:57      | You can remove the old light bulb, add the new light bulb           |
| 08:01      | and then you can restore your backup                                |
| 08:03      | and then you can match up like the old to the new                   |
| 08:06      | even though they weren't the same device, you can link them.        |
| 08:08      | So it's a great way of replacing things                             |
| 08:10      | without having to redo all of your automations again                |
| 08:12      | and find everything that something was in                           |
| 08:14      | and, you know, that it's somehow no longer working                  |
| 08:17      | or that, you know, the scene just disappeared                       |
| 08:19      | because it was the only thing in there, things like that.           |
| 08:21      | So that's a very useful feature                                     |
| 08:23      | and it's a great app that I really like.                            |
| 08:26      | Yeah, a controller is a subscription app.                           |
| 08:28      | It's about $19 for a year                                           |
| 08:31      | and it has a lot more than backups.                                 |
| 08:33      | I mean, it gives you a lot of troubleshooting tools,                |
| 08:36      | logs, maintenance and it gives you the traditional home kit tools   |
| 08:40      | as well, room management, scene management.                         |
| 08:42      | I do wish that Apple built this stuff into home kit.                |
| 08:46      | I feel like their desire to make it user friendly                   |
| 08:49      | sometimes goes a little bit too far with home automation stuff.     |
| 08:54      | Yeah, yeah, this is very definitely a fabulous app                  |
| 08:57      | for anybody who wants to nerd out about this stuff.                 |
| 09:00      | It also does things like give you widgets                           |
| 09:03      | and it has NFC tag support, all things                              |
| 09:05      | so that you can, you know, quickly jump to viewing camera           |
| 09:09      | from your home screen and controlling scenes                        |
| 09:11      | to, you know, doing whatever it is that you want or need.           |
| 09:15      | And it works on macOS.                                              |
| 09:16      | So, you know, for me, it's certainly been a useful automation tool  |
| 09:20      | in that I don't have to redo everything all the time                |
| 09:23      | and there is nothing more frustrating than getting,                 |
| 09:25      | you know, a whole set up just how you want                          |
| 09:27      | and then default room enters the room                               |
| 09:31      | and throws everything off.                                          |
| 09:33      | It's frustrating, but hey, there is a workaround for this.          |
| 09:37      | Hopefully that default room bug is going to go away                 |
| 09:38      | with iOS 16, but you know what?                                     |
| 09:40      | I'm still going to be using controller for home kit.                    |
| 09:42      | Do you, what do you think of home kit for iOS 16                    |
| 09:46      | and macOS Ventura?                                                   |
| 09:47      | Have you spent much time with it yet?                               |
| 09:49      | Yeah, so I spent quite a bit of time with it                        |
| 09:51      | and generally I'm finding it pretty great.                          |
| 09:54      | I am finding it to be a bit buggy.                                  |
| 09:57      | That's not unexpected considering the fact                          |
| 10:01      | that I'm running a beta, but it does kind of seem to have some      |
| 10:05      | of the same bugs as iOS 15, you know,                               |
| 10:07      | where you go to move something from one room to another             |
| 10:10      | and you change the room and then you tap out of the field           |
| 10:13      | and then it resets it back to the room it was just in.              |
| 10:18      | That was one that got me about six or seven times                   |
| 10:21      | in a row the other day until I just gave up                         |
| 10:23      | and grabbed my iPad mini still running iOS 15                       |
| 10:25      | and just moved it on there and it worked.                           |
| 10:27      | But I've had that same problem before on iOS 15.                    |
| 10:31      | So, you know, that that's not a new bug.                            |
| 10:34      | It's just, you know, showing up weirdly, I guess now                |
| 10:37      | because it really like the thing bounces away                       |
| 10:40      | and then it comes back up in front of you.                          |
| 10:42      | So it very much feels like it's, it's a bug bug now                 |
| 10:44      | as opposed to just something not being saved like it was before.    |
| 10:48      | But either way, other than that, I'm finding it pretty great.       |
| 10:50      | It took me a little while to figure out like what I wanted          |
| 10:54      | to see on the home page of the home app                             |
| 10:59      | because you can customise your preferences there to say like,       |
| 11:03      | you know, these, these accessories should shop here                 |
| 11:06      | and so on and so forth.                                             |
| 11:08      | But it did leave me to find a really cool feature                   |
| 11:11      | that I didn't have enabled in CarPlay David,                        |
| 11:13      | which is Siri suggestions                                           |
| 11:15      | because I've set up my, my patio door lock.                         |
| 11:19      | Now I've done this using [[Home Assistant]]                             |
| 11:20      | but I set up my patio door lock to be a garage                      |
| 11:23      | because I don't have a garage.                                      |
| 11:24      | Okay, I'll just park outside.                                       |
| 11:26      | But it means that when I get home,                                  |
| 11:28      | like the, the suggestions on the dashboard.                         |
| 11:32      | So what I'll have is I'll have, you know, the maps in the column    |
| 11:35      | and then on the other side of that,                                 |
| 11:37      | they've got the, the playing music and whatever.                    |
| 11:42      | There's another thing above it.                                     |
| 11:43      | And then at the bottom, it err, in pops the Siri suggestion              |
| 11:47      | and that Siri suggestion is open the patio doors                    |
| 11:50      | because I've called my garage patio doors.                          |
| 11:52      | And so now I can tap on that as I get out the car                   |
| 11:55      | and I've set up, there's a little bit of a delay                    |
| 11:56      | so I can tap it, get out the car and grab my bag                    |
| 11:59      | and then I can walk over to the patio doors.                        |
| 12:00      | It unlocks and that, that is amazing.                               |
| 12:04      | So I'm, I'm really enjoying the, the, the iOS 15                    |
| 12:08      | and in that case, but iOS 16 features of, of the home app           |
| 12:12      | because you know, I've got my things in favourites                   |
| 12:14      | and I can see, you know, I can quickly scroll                       |
| 12:16      | across the cameras at the top and I love the fact                   |
| 12:18      | that, you know, you've got these little bubbles                     |
| 12:19      | with being able to see life for your home                           |
| 12:23      | very quickly, your, your average climate                            |
| 12:25      | and that that is on the lock screen too.                            |
| 12:27      | So I've got on my lock screen.                                      |
| 12:29      | I can see that there are two lights on                              |
| 12:30      | that the air quality in my home is great                            |
| 12:32      | and that the temperature ranges between 21 and 26.3 degrees.        |
| 12:35      | That's Celsius for everybody who's getting a bit concerned.         |
| 12:39      | Don't worry, I'm not freezing over here.                            |
| 12:41      | Yeah, I really think that the UI is a lot better.                   |
| 12:45      | Like a much needed UI overhaul, but in terms of like                |
| 12:48      | under the hood power tools, the apps like controller                |
| 12:52      | for [[HomeKit]] are going to be just fine.                              |
| 12:54      | Oh yeah.                                                            |
| 12:56      | And there's such an ecosystem around [[HomeKit]] now.                   |
| 12:58      | We've done this in the past, but I think we probably need           |
| 13:00      | to come back to it.                                                 |
| 13:01      | Maybe after all the stuff ships and just take a look at,            |
| 13:04      | you know, what are the recommended third party [[HomeKit]] apps         |
| 13:07      | now because anybody that wants to kind of like really               |
| 13:10      | dig in on this stuff is going to need a few of them.                |
| 13:12      | And [[HomeKit]] for [[Controller for HomeKit]], I think is an excellent     |
| 13:16      | one for that.                                                       |
| 13:17      | One other thing before we move on and I know this is kind           |
| 13:20      | of off topic a little bit, but I put a [[HomeKit]] enabled door         |
| 13:24      | lock in my front door a couple of years ago and I just have         |
| 13:28      | zero regrets and it is so good to have that thing a couple          |
| 13:32      | of times, you know, it saved my bacon when a family member          |
| 13:36      | got home before me and they didn't have a key for whatever          |
| 13:39      | reason, I could just push a button and I locked the door            |
| 13:41      | for them and I and also like, you know, when you're laying          |
| 13:44      | in bed and you're like, did I lock the front door?                  |
| 13:47      | Well, you just open your phone and you can see if it's locked       |
| 13:49      | or not.                                                             |
| 13:50      | And if it's unlocked, you push a button and you can hear            |
| 13:52      | the lock closing downstairs.                                        |
| 13:55      | It's very nice.                                                     |
| 13:56      | Yeah, yeah, I really like, you know, having having that built       |
| 14:00      | in, you know, when I hit the button to go to bed, if my locks       |
| 14:03      | are unlocked, then the lights in my room flash red at me            |
| 14:08      | so that I'll know that there's, you know, an unlocked lock.         |
| 14:11      | But also by upgrading to smart locks, now I have multi-point        |
| 14:15      | locks on my main doors and so you lift the handle to engage         |
| 14:18      | the locking mechanism.                                              |
| 14:20      | But when I lift the handle, it just locks immediately.              |
| 14:23      | So it's not a case of I've lifted the handle, but I've              |
| 14:25      | forgotten to put the key in and turn the key or anything            |
| 14:28      | like that.                                                          |
| 14:29      | I now have thumb screws, thumb turns on the inside, which           |
| 14:31      | is actually safer and required nowadays so that if there            |
| 14:34      | were a problem of like, I can actually get out without having       |
| 14:37      | to go and find a key or try and break a window, which ain't         |
| 14:40      | happening.                                                          |
| 14:41      | So yeah, it's definitely really nice having those smart locks       |
| 14:46      | and I really appreciate the fact that I have them.                  |
| 14:48      | I nearly locked myself out a little while ago.                      |
| 14:50      | I left a house without keys at all.                                 |
| 14:54      | I actually left without my phone as well, David.                    |
| 14:57      | Don't ask me how I managed that, but I went to go out and I         |
| 15:00      | lifted the lock.                                                    |
| 15:01      | That handle walked out and I was about two minutes down the         |
| 15:03      | road on foot and went, I don't have any keys with me at all.        |
| 15:08      | Yeah.                                                               |
| 15:09      | Hmm.                                                                |
| 15:10      | Well, I guess I don't have a backup for the solution that I         |
| 15:13      | always use and always works.                                        |
| 15:16      | I was fine.                                                         |
| 15:17      | It was fine.                                                        |
| 15:18      | And then I found out that I had actually stashed a NFC tag          |
| 15:20      | for one of my locks or for all of my locks because they always      |
| 15:23      | use NFC tags in my bag.                                             |
| 15:24      | But yeah, that was certainly one of those moments of like,          |
| 15:28      | this should be fine, but this could go very wrong.                  |
| 15:32      | I'm definitely going to put more in my house when budget            |
| 15:35      | allows because I just find it very useful.                          |
| 15:38      | But either way, we're talking about iOS little automation           |
| 15:41      | tools that one that I really like and it's come up on the           |
| 15:44      | show before, but and I know you like this one too is text           |
| 15:47      | case.                                                               |
| 15:48      | Yes.                                                                |
| 15:49      | Yeah.                                                               |
| 15:49      | Text case is great.                                                 |
| 15:50      | So, you know, shortcuts has features to format text base            |
| 15:56      | into various cases, but text case takes it a step further by        |
| 15:59      | giving you what feels like every possible option under the          |
| 16:03      | sun.                                                                |
| 16:03      | I usually use the slugify option for a lot of things.               |
| 16:06      | So that just lower cases everything and replaces spaces             |
| 16:10      | with underscores and turns it from, you know, something             |
| 16:13      | that you would type as a sentence into something with,              |
| 16:16      | you know, that sort of folder path structure that you might         |
| 16:19      | find on a website and it's incredibly helpful and it                |
| 16:22      | saves me a lot of time every day and I don't really think           |
| 16:24      | about it.                                                           |
| 16:25      | It's just built into probably 20 or 30 shortcuts that I             |
| 16:28      | use.                                                                |
| 16:29      | Yeah.                                                               |
| 16:30      | I mean, it supercharges shortcuts, but it also is an                |
| 16:34      | independent app where you can run automations in it, you            |
| 16:37      | know, and they have them, they call them flows and formats          |
| 16:41      | and like if you routinely get text off the web or if somebody       |
| 16:45      | if something in your workflow, you know, gets you text that         |
| 16:49      | needs cleaning on a regular basis, you can set up an                |
| 16:51      | automation right in text case.                                      |
| 16:53      | So, and I get that you could also do this in shortcuts,             |
| 16:56      | but I mean, it's nice to know that this could, you could            |
| 16:59      | do this either way.                                                 |
| 17:00      | Yeah.                                                               |
| 17:01      | Yeah.                                                               |
| 17:01      | It also supercharges things like the replace text                   |
| 17:03      | action.                                                             |
| 17:04      | So the replace text action that you can use with text case          |
| 17:08      | allows you to replace all occurrences of something, but             |
| 17:11      | it can also just say, hey, replace the first one of these           |
| 17:14      | or the last one of these, which is very useful at times.            |
| 17:18      | I have to say it's one of those things I don't really               |
| 17:20      | think about until I'm going, oh, no, actually, this word            |
| 17:23      | appears six or seven times in this, but I only were place           |
| 17:26      | the first word or, you know, phrase that first time.                |
| 17:30      | And so, yeah, it's a great app and it's a 1.199 on the app          |
| 17:34      | store.                                                              |
| 17:35      | Crazy.                                                              |
| 17:36      | You know, crazy.                                                    |
| 17:36      | Yeah, it's, or at least it was 1.199 when I bought it.              |
| 17:39      | I'm not 100% certain now, of course, but I'm sure it's,             |
| 17:44      | it's a very good app either way.                                    |
| 17:45      | So, worth it.                                                       |
| 17:46      | And it runs on the Mac and it gives you all those cool              |
| 17:49      | automation tools and shortcuts on the Mac too.                      |
| 17:52      | I mean, a bunch of the stuff.                                       |
| 17:53      | I covered in the shortcuts from Mac field guide when I              |
| 17:56      | wanted to modify text, you know, you're trying to write             |
| 17:59      | these Byzantine, you know, regular expressions or                   |
| 18:02      | whatever to fix something.                                          |
| 18:03      | And then you go to text case and there's a single action            |
| 18:06      | you just drag in and it's done.                                     |
| 18:08      | It's such an easy buy.                                              |
| 18:10      | Yes, I've just checked.                                             |
| 18:11      | It's by Chris Hannah.                                               |
| 18:12      | It's 2.99.                                                          |
| 18:13      | But to make up for that one extra dollar cost, I've also            |
| 18:15      | just checked it's got a custom dictionary, which is                 |
| 18:17      | something I thought it had.                                         |
| 18:19      | So if you've got words, especially this might be                    |
| 18:21      | something that happens at work.                                     |
| 18:23      | There are certain things that you've got which are proper           |
| 18:26      | nouns.                                                              |
| 18:26      | So they've got a capital letter at the start or just like           |
| 18:29      | iOS, the first case, the first letter is lowercase and              |
| 18:31      | then second two letters are uppercase.                              |
| 18:33      | Anything like that.                                                 |
| 18:34      | You can add those to a custom dictionary.                           |
| 18:36      | Obviously iOS, iPhone, things like that are going to be             |
| 18:38      | automatically correctly capitalised.                                |
| 18:41      | But for any custom options, you know, there's the custom            |
| 18:45      | dictionary built in, which definitely makes my life a               |
| 18:48      | lot easier.                                                         |
| 18:49      | Yeah.                                                               |
| 18:50      | Yeah.                                                               |
| 18:51      | Okay, we got a couple more that are excellent little                |
| 18:54      | automation tools.                                                   |
| 18:56      | Can we start with push cut?                                         |
| 18:58      | I feel like we don't give that enough love.                         |
| 19:00      | Yes.                                                                |
| 19:01      | Yeah, we can start with push cut because I honestly, I              |
| 19:04      | feel really bad.                                                    |
| 19:05      | Sometimes I continually forget that I use push cut because          |
| 19:08      | it's just running on an iPhone and it's just sat there              |
| 19:13      | like on the bookcase and I don't see it really.                     |
| 19:15      | And I don't, I don't think about it until suddenly I                |
| 19:18      | noticed that, hey, you know, this thing that usually is             |
| 19:21      | just done isn't done.                                               |
| 19:22      | And that's why I check.                                             |
| 19:23      | And it's usually that, you know, like there's a pop-up              |
| 19:25      | in one of the apps that it's trying to run an action in.            |
| 19:27      | And so it opens that app and then it bounces back to                |
| 19:30      | shortcuts and shortcuts goes back to push cut.                      |
| 19:32      | But that app couldn't do the action because it had a                |
| 19:34      | thing in it that it wanted you to acknowledge.                      |
| 19:36      | And so, you know, that happens rarely.                              |
| 19:39      | But other than that, I'm finding push cut absolutely                |
| 19:43      | amazing.                                                            |
| 19:43      | Can you explain for people the problem that that app                |
| 19:46      | solves?                                                             |
| 19:47      | Yeah.                                                               |
| 19:48      | So the problem, I mean, there's multiple problems that              |
| 19:50      | this app solves because it doesn't just do one thing.               |
| 19:52      | So originally push cut was based around, you know, hey,             |
| 19:56      | at this time of day, it's not that I want to run this               |
| 19:59      | scene with home kit.                                                |
| 20:00      | I want to have a choice of scenes that I run with                   |
| 20:03      | home kit.                                                           |
| 20:03      | Like do I want to run my, you know, evening scene or do             |
| 20:07      | I want to run my cooking scene or do I want to run my               |
| 20:10      | relaxing scene?                                                     |
| 20:11      | And so the idea is that you would get an interactive                |
| 20:13      | notification and you tap it and you choose whichever of             |
| 20:17      | the options that it pops up and choose it and that it               |
| 20:20      | would just run that scene for you.                                  |
| 20:21      | But of course, it can then run a shortcut when you get              |
| 20:25      | a notification.                                                     |
| 20:26      | And so this, you know, the location trigger in                      |
| 20:29      | shortcuts, David, where, you know, it'll pop up when                |
| 20:32      | you get to a particular place and just say, hey, do                 |
| 20:33      | you want to run your shortcut?                                      |
| 20:35      | Yeah.                                                               |
| 20:35      | Push cut can be better than that in that it can do                  |
| 20:39      | those location triggers as well.                                    |
| 20:41      | And just like shortcuts, it'll have to ask you before               |
| 20:43      | it runs, but as well as saying a location, you can                  |
| 20:47      | only, you can say only do this Monday, Friday, nine to              |
| 20:50      | five or whatever it is.                                             |
| 20:53      | So if you want a push notification when you're                      |
| 20:56      | arriving at a specific store, but only during their                 |
| 20:59      | opening hours, because you drive past there on weekends             |
| 21:02      | on the way home after visiting friends and you don't                |
| 21:04      | want a notification popping up, then you can actually               |
| 21:06      | restrict that as well, which, you know, is great.                   |
| 21:09      | And you can also have it delay your notification.                   |
| 21:11      | So they'll only show up if you've been at a place for               |
| 21:14      | say 20 minutes or, you know, whatever.                              |
| 21:17      | But, you know, as well as that, it's got custom widgets,            |
| 21:22      | which can be updated automatically based on, you                    |
| 21:24      | know, data that you're, you're sending to your iPhone               |
| 21:27      | from say Zapier and things like that and shortcuts                  |
| 21:29      | running.                                                            |
| 21:30      | And then my favourite part, my absolute favourite part                |
| 21:33      | has to be the automation server where, you know,                    |
| 21:37      | the, the automation server just sits on a phone                     |
| 21:40      | and it's just running all the time.                                 |
| 21:43      | And it runs shortcuts periodically.                                 |
| 21:46      | There's things that are scheduled.                                  |
| 21:48      | So it's running those based on, you know, the actual                |
| 21:50      | schedule that's on there that I've set up and I'm                   |
| 21:52      | controlling, but it's also running the whatever is                  |
| 21:57      | received from the internet.                                         |
| 21:59      | So when a new episode of automators goes out, it                    |
| 22:02      | pings a push cut URL and that runs a shortcut and magic             |
| 22:07      | happens and I just love it.                                         |
| 22:09      | Yeah.                                                               |
| 22:09      | I mean, that's kind of really the coolest part of it,               |
| 22:12      | right?                                                              |
| 22:12      | You can turn it into an automation server.                          |
| 22:16      | Yeah.                                                               |
| 22:17      | I like it, you know, and now you are using it more                  |
| 22:21      | than I am though.                                                   |
| 22:21      | I, I haven't, you know, done what you did.                          |
| 22:24      | You took an old phone and just turned it into a push                |
| 22:26      | cut server.                                                         |
| 22:28      | And I think I need to do that or even just like my,                 |
| 22:32      | like my iPad mini, which I largely keep next to the                 |
| 22:35      | bed.                                                                |
| 22:36      | I can keep that plugged in and run that as a push cut               |
| 22:38      | server.                                                             |
| 22:38      | What are, what are some of the things I could do with               |
| 22:41      | that if I hooked that up?                                           |
| 22:42      | Well, one of the things I've got it doing, which I'm                |
| 22:45      | guessing will probably appeal to you when a chunk of                |
| 22:47      | our listeners, David, is automatically cleaning up my               |
| 22:50      | OmniFocus inbox.                                                    |
| 22:51      | So I have an Omni automation script.                                |
| 22:53      | You know, we had to tell in the last show and it's,                 |
| 22:55      | you know, where the JavaScript scripts that you can                 |
| 22:58      | create for OmniFocus and that will just pick out                    |
| 23:02      | things that are in my inbox and clean them up                       |
| 23:04      | automatically as much as it can.                                    |
| 23:06      | So it will take things like, you know, if I've shared               |
| 23:10      | something to OmniFocus that's from a specific store's               |
| 23:12      | website, then it will clean it up, remove any of the                |
| 23:15      | extra information I don't need from the title at the                |
| 23:17      | tag for the store and move it into the shopping list                |
| 23:20      | that I have.                                                        |
| 23:21      | So that, that just disappears.                                      |
| 23:24      | What, and that is something that I have run automatically.          |
| 23:27      | It's run, I think it's every 30 minutes for me.                     |
| 23:30      | And so whenever I, you know, look at my OmniFocus                   |
| 23:34      | inbox, there aren't those things that I would have                  |
| 23:36      | to do repeatedly that I know how to do in my                        |
| 23:40      | OmniFocus inbox.                                                    |
| 23:41      | They're just magically dealt with for me.                           |
| 23:44      | But it's also running things like sending messages                  |
| 23:46      | later where it'll just check to see whether or not                  |
| 23:48      | there are any messages that are scheduled that                      |
| 23:50      | should be sent.                                                     |
| 23:52      | It'll import things into due or OmniFocus as is                     |
| 23:57      | appropriate.                                                        |
| 23:58      | It'll magically build up various different list                     |
| 24:02      | kinds for me.                                                       |
| 24:03      | And of course, you know, the evergreen one of just                  |
| 24:08      | grab some data and put it somewhere so that other                   |
| 24:11      | shortcuts then have access to it without having to go               |
| 24:14      | and fetch it themselves because it's needed in                      |
| 24:16      | six or seven shortcuts.                                             |
| 24:18      | And so I just grabbed that data and I shove it into                 |
| 24:20      | [[Data Jar]].                                                           |
| 24:22      | So you've said [[Data Jar]].                                            |
| 24:23      | Let's talk about that one.                                          |
| 24:25      | Yeah, yeah.                                                         |
| 24:26      | So it's just a great place to store data that you're                |
| 24:28      | going to use across multiple shortcuts.                             |
| 24:30      | It's available on iOS and macOS.                                    |
| 24:32      | And, you know, it has the ability to save data and                  |
| 24:36      | also go in and edit it really easily.                               |
| 24:39      | You know, Toolbox Pro has a similar feature with                    |
| 24:41      | global variables.                                                   |
| 24:43      | But I just like [[Data Jar]] for this.                                  |
| 24:46      | There's nothing wrong with using Toolbox Pro for                    |
| 24:48      | it, but certainly if you're not yet using global                    |
| 24:50      | variables, then definitely take a look at [[Data Jar]]                  |
| 24:54      | and or Toolbox Pro to up your game.                                 |
| 24:56      | Toolbox Pro, of course, has global variables as well                |
| 24:58      | as all of the, oh my gosh, I don't know how many                    |
| 25:01      | extra actions that it can add to shortcuts for doing                |
| 25:04      | all sorts of things like checking if you're in dark                 |
| 25:06      | mode.                                                               |
| 25:07      | But, you know, it's certainly both of those apps are                |
| 25:11      | other great apps to enhance your iOS automation                     |
| 25:15      | experience.                                                         |
| 25:17      | I mean, like [[Data Jar]], I've got stuff in there.                     |
| 25:18      | I've even got like dumb stuff in there, like my                     |
| 25:20      | email address and my name, my phone number.                         |
| 25:23      | And that just makes it so easy to call that stuff                   |
| 25:26      | in any shortcut.                                                    |
| 25:27      | And that one is a real easy use case, you know, once                |
| 25:33      | you start using it and if you do work stuff, it's                   |
| 25:36      | even better, right?                                                 |
| 25:37      | I mean, if you want to do special variables for                     |
| 25:40      | things you use across different work automations,                   |
| 25:42      | and then if anything changes, you go in, you change                 |
| 25:45      | it in [[Data Jar]] once and it's done everywhere.                       |
| 25:48      | Yeah, I mean, I use it kind of like a mini database.                |
| 25:50      | I have an example in here.                                          |
| 25:52      | I've got airline check-in information.                              |
| 25:54      | And so, you know, airline or flight codes have a                    |
| 25:57      | specific format, right?                                             |
| 25:58      | There is usually two letters for the airline and                    |
| 26:02      | then the flight number.                                             |
| 26:03      | And so this was built, obviously, when I was                        |
| 26:05      | flying and traveling a lot more than I currently                    |
| 26:07      | do, but you know, I'll still use it when I do fly                   |
| 26:10      | again.                                                              |
| 26:11      | And basically what it'll do is it'll just match                     |
| 26:13      | that prefix out of a calendar events on a                           |
| 26:17      | particular calendar, my triplet calendar.                           |
| 26:19      | And then this returns the number of hours before                    |
| 26:21      | I can check into the flight.                                        |
| 26:23      | And so if I look up LH for Lufthansa, it'll tell me                 |
| 26:27      | 23 so that then it can calculate 23 hours before                    |
| 26:30      | and set a reminder in due to check-in for the flight.               |
| 26:34      | And like stuff like that, you know, if something                    |
| 26:36      | changes, then I'm going to want to change that                      |
| 26:38      | everywhere I'm using, you know, this information.                   |
| 26:41      | But it's also just nice to be able to just check-in                 |
| 26:43      | and go, oh, right, yes, I actually know the Austrian                |
| 26:46      | have updated their check-in time.                                   |
| 26:48      | It's no longer 48 hours.                                            |
| 26:50      | It's 47 hours.                                                      |
| 26:51      | So I'm just going to change that so that I will be                  |
| 26:54      | able to check-in for my flight and I'll get a                       |
| 26:56      | reminder at the right time.                                         |
| 26:58      | So yeah, great for all sorts of info.                               |
| 27:02      | This episode of Automators is brought to you by Setup.              |
| 27:05      | There's an app for everything these days.                           |
| 27:06      | Some are great and others not so much.                              |
| 27:09      | How do you quickly find the right one for you?                      |
| 27:12      | A great way to discover new quality apps and get all                |
| 27:15      | the tools you need to get work done is Setup,                       |
| 27:17      | a subscription for Mac and iPhone apps.                             |
| 27:21      | Setup packs over 240 high-quality apps into one.                    |
| 27:25      | There's an app for almost any task, so you don't need to            |
| 27:27      | look in tons of places to find what you need.                       |
| 27:29      | With Setup, you can think about your tasks, not apps.               |
| 27:32      | Setup has a dedicated curation team that only selects               |
| 27:35      | the highest-quality apps.                                           |
| 27:37      | Plus, instead of paying thousands of dollars for                    |
| 27:39      | separate licenses, there's just one flat monthly fee.               |
| 27:42      | New apps are added to Setup regularly.                              |
| 27:44      | Updates are free and all features are in every app.                 |
| 27:48      | They're full-featured pro versions.                                 |
| 27:51      | Until 15th of September, use the code Automators to get             |
| 27:53      | a free one-month trial.                                             |
| 27:55      | Head over to setup.com and redeem your code.                        |
| 27:59      | That's setup.com code Automators in all caps.                       |
| 28:04      | I'll thanks to Setup for their support of this show and all         |
| 28:06      | of Relay FM.                                                        |
| 28:09      | All right, let's move over to the Mac.                              |
| 28:11      | There's one here that almost does get its own show at some          |
| 28:15      | point, [[BetterTouchTool]].                                           |
| 28:17      | I love this app so much, Rose.                                      |
| 28:19      | Oh, yeah, yeah.                                                     |
| 28:21      | It's so great, right?                                               |
| 28:22      | Again, it's very much like PushCut in that it's so many            |
| 28:26      | applications in one.                                                |
| 28:27      | You know, it does track pack controls.                              |
| 28:30      | It does Mac controls.                                               |
| 28:31      | It does customising your touch bar.                                 |
| 28:33      | If you've got a device with a touch bar, you can connect a          |
| 28:35      | Sierra remote to your Mac and have it do amazing things there.      |
| 28:38      | Or you can just replace the [[Stream Deck]] software with Better        |
| 28:40      | Touch Tool now.                                                     |
| 28:41      | That's an option.                                                   |
| 28:43      | Like, I didn't, I kind of saw it coming, but I also didn't          |
| 28:46      | see it coming and then it's like, okay, wow.                        |
| 28:48      | Thank you.                                                          |
| 28:50      | This is great.                                                      |
| 28:51      | And I just love the options, all of the options.                    |
| 28:54      | And it has like the mother load of shortcuts actions if you         |
| 28:58      | do shortcuts.                                                       |
| 28:58      | But what I want to focus on for today is just Better Touch          |
| 29:03      | Tool as an automation tool.                                         |
| 29:05      | And there is a lot you can do with [[BetterTouchTool]] as an          |
| 29:09      | automation tool.                                                    |
| 29:09      | I mean, to start with, it's got the hyper key now built in.         |
| 29:14      | You know, you used to have to get, was it carbine or elements       |
| 29:18      | to set up the hyper key?                                            |
| 29:20      | Now you can do that right in [[BetterTouchTool]].                     |
| 29:22      | I like that because [[BetterTouchTool]] is more of a kind of a        |
| 29:25      | classic Mac app as opposed to Karabiner Elements, which makes       |
| 29:29      | me a little nervous, you know?                                      |
| 29:32      | But, you know, that just a start.                                   |
| 29:34      | I mean, once you get in there, you can map keyboard shortcuts.      |
| 29:37      | You can do all sorts of cool things.                                |
| 29:39      | Like I was doing a thing for a while in [[Apple Mail]] where I          |
| 29:43      | was mapping moving messages to different mailboxes via Better       |
| 29:51      | Touch Tools chain commands where you could have, you can chain      |
| 29:54      | different commands together in [[BetterTouchTool]].                   |
| 29:57      | I mean, it's like a little mini version of [[Keyboard Maestro]] in      |
| 30:00      | that sense.                                                         |
| 30:01      | Some other stuff I've done with [[BetterTouchTool]].                  |
| 30:04      | Man, there's just so much over the years.                           |
| 30:07      | So anytime I kind of run into an automation problem, quite          |
| 30:10      | often [[BetterTouchTool]] feels like a way to solve a problem,        |
| 30:14      | particularly if it's input or keyboard related.                     |
| 30:18      | Definitely, definitely.                                             |
| 30:19      | It is just amazing how many things it can solve.                    |
| 30:23      | One of the things that I stumbled across recently is I was          |
| 30:26      | having a little trouble automating what are the buttons on          |
| 30:28      | my mice.                                                            |
| 30:30      | And of course, this is a problem that probably relatively           |
| 30:33      | few people will run into.                                           |
| 30:35      | But the solution that I found on the [[BetterTouchTool]] forums,      |
| 30:39      | which I will put a link to in the show notes, is perhaps            |
| 30:43      | worth noting for some folks.                                        |
| 30:44      | So you would think that when you're automating a mouse button       |
| 30:47      | that what you should do is you should add the mouse button          |
| 30:51      | and then you click to select your trigger.                          |
| 30:53      | And then the thing happens, except I was clicking my mouse          |
| 30:57      | button and nothing was happening.                                   |
| 30:59      | And I was very confused, why is nothing happening?                  |
| 31:02      | This doesn't make sense.                                            |
| 31:04      | And then I found out on the [[BetterTouchTool]] forums that           |
| 31:06      | some buttons actually just tell the OS that they're inputting       |
| 31:12      | instead that they're actually inputting a specific keyboard         |
| 31:15      | shortcut.                                                           |
| 31:16      | And so therefore, if you go over to the keyboard shortcut           |
| 31:20      | area or it might have been, yeah, it was keyboard shortcuts         |
| 31:25      | I've just checked, then you can add a keyboard shortcut.            |
| 31:29      | And then when you click in the type shortcut area with the          |
| 31:31      | button, then it will magically manage to do exactly what it         |
| 31:35      | is that you're hoping for.                                          |
| 31:36      | And so that solved that problem right there for me,                 |
| 31:38      | which was great.                                                    |
| 31:39      | But also, I keep forgetting about things like, you know,            |
| 31:42      | there are [[MIDI]] triggers and drawings.                               |
| 31:46      | The drawings, when I actually use quite a bit, like I don't         |
| 31:49      | even think about it, I just kind of vaguely draw an arrow           |
| 31:52      | with my mouse and then it takes me left or right,                   |
| 31:55      | depending on where I am.                                            |
| 31:57      | Really?                                                             |
| 31:58      | Yeah, I've never used, you know, I've played with that,             |
| 32:00      | but I've never really, I felt like I never would actually use       |
| 32:03      | that in practice. Okay, good.                                       |
| 32:06      | Yeah, I mean, I found that I ended up using it,                     |
| 32:08      | but the thing that really, you know, makes all of this so           |
| 32:12      | useful for me is I have a lot of things set up a Better Touch       |
| 32:17      | tool and they are very rarely under the All Apps section.           |
| 32:21      | The part that really makes it magical is being able to say,         |
| 32:24      | do this in this app.                                                |
| 32:26      | So when I hit this keyboard shortcut in this application,           |
| 32:30      | do these things, but don't do it when I'm in another application.   |
| 32:34      | That's a good general rule.                                         |
| 32:36      | Yeah, because there are so many things where you don't want         |
| 32:39      | something to happen, you know, when you globally hit,               |
| 32:42      | say, Command Shift D, but when you're in this application           |
| 32:45      | and that application, you'd like it to do this other thing.         |
| 32:49      | And, you know, I have this, I use a great application called        |
| 32:52      | Dash for developer documentation.                                   |
| 32:55      | I really love it, it syncs things offline and so on.                |
| 32:59      | And PHPStorm, the IDE that I use has a plugin so that when I hit    |
| 33:05      | Command Shift D, it will open the documentation for the word        |
| 33:09      | or command that I have selected.                                    |
| 33:11      | But the database tools that I use don't have this plugin option.    |
| 33:15      | And so I just set it up in [[BetterTouchTool]] that when I hit        |
| 33:19      | that keyboard shortcut in those applications, that it also          |
| 33:23      | opens Dash with, you know, what I've got selected.                  |
| 33:25      | And that works really well for me.                                  |
| 33:27      | I'm really pleased with it.                                         |
| 33:28      | Yeah, like I don't like the Apple Mail default send button,         |
| 33:32      | which is Command Shift D.                                           |
| 33:33      | You had mentioned that earlier.                                     |
| 33:35      | So I don't really understand how that would ever became             |
| 33:39      | the keyboard shortcut to send an email.                             |
| 33:41      | But, you know, Shift Enter.                                         |
| 33:43      | Deliver.                                                            |
| 33:44      | Yeah, Shift Enter.                                                  |
| 33:45      | Well, I get it, but I mean, I don't get it.                         |
| 33:47      | Shift Enter is so much better, you know, and that's the one         |
| 33:51      | most other mail apps use.                                           |
| 33:52      | So I created a shortcut in keyboard in my show.                     |
| 33:56      | If I hit Shift Enter when I'm in Apple Mail, then hit the           |
| 33:59      | keyboard combination, Command Shift D.                              |
| 34:02      | I could have just as easily as done that in [[BetterTouchTool]]       |
| 34:05      | because [[BetterTouchTool]] fully supports those keyboard shortcuts   |
| 34:08      | to do something like that.                                          |
| 34:10      | Some other stuff with [[BetterTouchTool]] that I think is really      |
| 34:13      | handy contextual menus like, you know, mouse contextual menus.      |
| 34:19      | You can automate those with [[BetterTouchTool]] that I'm not          |
| 34:22      | aware of any other way to do that.                                  |
| 34:24      | I mean, I've, I mean, I've tried it with AppleScript and           |
| 34:28      | keyboard my show and I never get it to reliably work, whereas       |
| 34:31      | I get it to reliably work with [[BetterTouchTool]].                   |
| 34:34      | And another one that, you know, it seems to me like a big           |
| 34:38      | miss for Apple.                                                     |
| 34:39      | They don't really have a built-in keyboard shortcut to move         |
| 34:42      | an app to a different space.                                        |
| 34:45      | And [[BetterTouchTool]] has that as available action.                 |
| 34:48      | So for me, if I hit, was it Control Command, right arrow?           |
| 34:52      | It moves the existing app to the next space over.                   |
| 34:55      | And if you use spaces, the ability to move apps between             |
| 34:58      | spaces is huge.                                                     |
| 34:59      | I mean, rather than like monkey around with trying to get           |
| 35:03      | the, you know, the mission control view and get the mouse           |
| 35:06      | and drag it to the right one, you just hit a keyboard shortcut      |
| 35:09      | and it just moves it right over.                                    |
| 35:10      | It's so great.                                                      |
| 35:11      | Yes.                                                                |
| 35:12      | Yeah, it really is.                                                 |
| 35:13      | And honestly, I wish, I wish spaces were more loved.                |
| 35:17      | I feel like the, the development team that created spaces           |
| 35:22      | kind of forgot about it.                                            |
| 35:24      | Or they got dragged into something amazing and cool                 |
| 35:26      | somewhere else.                                                     |
| 35:28      | But the problem with that is that the spaces stuff doesn't          |
| 35:32      | have API, which is how, you know, app developers would talk         |
| 35:36      | to it, which is why [[Keyboard Maestro]] and so many other apps         |
| 35:40      | don't have support for spaces because there just isn't a way        |
| 35:44      | to interact with them.                                              |
| 35:45      | You know, a bunch can't open an app and put it in a specific        |
| 35:48      | space because there isn't an API for that.                          |
| 35:50      | And I'm not quite sure how the [[BetterTouchTool]] developer has      |
| 35:53      | as much to do this, like, you know, obviously, you know,            |
| 35:56      | they're very smart people.                                          |
| 35:58      | So I figure they've worked out a way around it.                     |
| 36:02      | But it's certainly where there's things that you will find          |
| 36:05      | rarely within apps and also just supporting specific spaces.        |
| 36:10      | Microsoft Teams does not understand spaces very well,               |
| 36:12      | for example.                                                        |
| 36:13      | But yeah, I'm really pleased that things like that exist.           |
| 36:16      | And, you know, it's really easy to just say, hey, like, yeah,       |
| 36:19      | I want to move one space to the right when I hit, you know,         |
| 36:22      | this button or, you know, this keyboard shortcut or whatever        |
| 36:25      | it is and, you know, take this application with me.                 |
| 36:27      | Don't take this application with me.                                |
| 36:29      | Though I do have a bonus tip for anybody who is using spaces,       |
| 36:32      | David, which I feel like some people forget about.                  |
| 36:35      | If you right click on any icon in your dock, then go to             |
| 36:39      | options, then there is an option to assign an app to all            |
| 36:43      | desktops or desktops on specific windows or specific screens        |
| 36:48      | if you use separate screens per display.                            |
| 36:52      | If you share them across displays, then you can assign              |
| 36:55      | something to a very specific space, which is quite nice.            |
| 36:59      | And I have to say, I like being able to say, hey, actually          |
| 37:02      | this application, I want to show it on all my desktops,             |
| 37:05      | please.                                                             |
| 37:06      | But this one I only want to show on display too or whatever.        |
| 37:09      | So what I know you're using the betas.                              |
| 37:11      | What do you think of [[Stage Manager]] as a window management           |
| 37:15      | tool on the Mac?                                                    |
| 37:16      | Let's put set aside the iPad, but just on the Mac.                  |
| 37:20      | Haven't really used it on the Mac because I used it a few           |
| 37:22      | times on the iPad.                                                  |
| 37:24      | And like I love the idea of it.                                     |
| 37:26      | I just feel like I'm losing so much space.                          |
| 37:29      | Like usually when I, when I have multiple windows open,             |
| 37:33      | I'm using a lot of space on my monitors, monitors plural.           |
| 37:38      | I have 32 inch ultra wide and a studio display here.                |
| 37:41      | And you know, there's some space behind it, but there's not         |
| 37:45      | a border around the outside.                                        |
| 37:48      | And that's where I feel like [[Stage Manager]] is, you know,            |
| 37:51      | it's great for people who are using like two to three               |
| 37:54      | applications at once.                                               |
| 37:56      | But right now I have one, two, three, four, five, six,              |
| 38:00      | seven applications visible in various ways.                         |
| 38:05      | And like it's kind of doable with [[Stage Manager]], but it             |
| 38:10      | just doesn't feel like it's the same kind of doable.                |
| 38:13      | On Mac OS, I guess it's one of those things that for me,            |
| 38:18      | this was not a problem needed solving for like the sort             |
| 38:21      | of shelf thing off to the left of the different views.              |
| 38:24      | That to me, I hit F3 and I can see like every application           |
| 38:28      | on my desktop, which they're way more than three.                   |
| 38:30      | And then I can just mouse up to the top and I see all my            |
| 38:32      | different spaces.                                                   |
| 38:33      | If I need somewhere to put files, that's where [[Yoink]] comes          |
| 38:36      | in, you know, it's, it's one of those things where I feel           |
| 38:38      | like it's, it's going to be really great for a lot of               |
| 38:40      | people. And at some point it may click for me, but I'm not          |
| 38:43      | there yet. What about you?                                          |
| 38:45      | I feel like it's really aimed at non-power users, more than         |
| 38:48      | power users. And you know, the whole idea that you learn            |
| 38:50      | this paradigm and it works on the iPad and the Mac too.             |
| 38:54      | But I've been trying it on the smaller, on the MacBook Air          |
| 38:58      | and because I've got Ventura now running on that one and            |
| 39:02      | actually do find it kind of handy and, but you're right,            |
| 39:06      | it's not something you can run a lot of windows with.               |
| 39:09      | Like, but if you break, can break it down into components,          |
| 39:12      | like I've got a communications kind of stack of things,             |
| 39:16      | which overlap, but they do fit. I don't hate it.                    |
| 39:21      | I guess is what I'm saying.                                         |
| 39:22      | I'm just not sure if it's something I'll use in the                 |
| 39:24      | long run, but I'm trying to give it a legitimate effort.            |
| 39:27      | And it's not one of these things where like, I'm using it           |
| 39:29      | just because I want to talk about it.                               |
| 39:31      | I'm using it because I'm actually interested in seeing              |
| 39:33      | if I could make it work for me.                                     |
| 39:36      | Yeah. Have they added shortcut support for stage                    |
| 39:38      | managing? Yeah.                                                     |
| 39:39      | I don't know.                                                       |
| 39:41      | Because last time I checked, they had them, but this was            |
| 39:43      | fairly early on in the betas.                                       |
| 39:45      | And yeah, it took a little while for the shortcut support           |
| 39:49      | or actually, no, I think the shortcut support for opening           |
| 39:51      | things in split screen on iPadOS was there pretty quickly.          |
| 39:56      | But, you know, that's something that you can do,                    |
| 39:59      | but as far as I'm aware, [[Stage Manager]] just like spaces             |
| 40:02      | doesn't have a way for you to really interact with it               |
| 40:05      | from a nerdy perspective.                                           |
| 40:08      | And the, hey, like I want these applications opened in this         |
| 40:11      | particular [[Stage Manager]] set up.                                    |
| 40:13      | Go, go, go.                                                         |
| 40:14      | I don't think that's something we can do just yet.                  |
| 40:16      | I mean, one of the problems with that is there's no way             |
| 40:18      | to identify a specific stage or [[Stage Manager]] collection.           |
| 40:23      | You know, you don't name them like you would.                       |
| 40:26      | I think automation would require, like automation would             |
| 40:30      | require some identification and there's really no way               |
| 40:33      | for the user to identify them.                                      |
| 40:35      | Yeah. Yeah.                                                         |
| 40:36      | I think that's, that's the problem.                                 |
| 40:38      | I mean, hopefully we're going to see that maybe in a point          |
| 40:40      | update.                                                             |
| 40:41      | I know I think [[Stage Manager]] is not releasing right away            |
| 40:44      | with iOS 16 and macOS Ventura, is it?                               |
| 40:46      | It's coming slightly later.                                         |
| 40:49      | I want to say it's what they said at the keynote.                   |
| 40:52      | I probably wrong about that now.                                    |
| 40:53      | I think, I think it's supposed to release with the,                 |
| 40:56      | with the general release.                                           |
| 40:57      | I think [[Stage Manager]] is on the initial release,                    |
| 40:59      | but we'll see.                                                      |
| 41:00      | I mean, it's definitely been evolving throughout the betas.         |
| 41:04      | Yes. Yeah. And I honestly look forward to seeing what they          |
| 41:07      | do with it.                                                         |
| 41:08      | And I really hope they add names and shortcut support               |
| 41:10      | because, you know, tab groups is one of those things.               |
| 41:13      | I was using it, but not quite struggling with it,                   |
| 41:17      | but wishing that I could use it more with automation support        |
| 41:20      | and now they've added shortcuts actions for tab groups.             |
| 41:25      | So I'm going to use them an awful lot more.                         |
| 41:27      | I am using them a lot more now because I can say,                   |
| 41:29      | Hey, open this particular tab group and so on and so forth.         |
| 41:32      | You know, my podcasting code and thanks to Iowa 16,                 |
| 41:35      | it uses the tab group filter, but it doesn't use the tab group      |
| 41:39      | filter that you can set up in settings.                             |
| 41:41      | What it does is a shortcut runs when my focus mode triggers         |
| 41:44      | for podcasting and then it, it figures out which podcast            |
| 41:47      | I'm recording.                                                      |
| 41:48      | It looks at my calendar and it tells me, hey,                       |
| 41:49      | you're recording XYZ podcast and then it sets the [[Safari]] tab        |
| 41:54      | group to whichever, you know, one is appropriate.                   |
| 41:57      | I have ones for each podcast.                                       |
| 41:58      | So I don't have to have a focus mode per podcast.                   |
| 42:01      | I can have, you know, one focus mode for all podcasting and         |
| 42:06      | select different tab groups for each.                               |
| 42:07      | Yeah, yeah, I agree.                                                |
| 42:08      | Man, I want more focus modes.                                       |
| 42:10      | Man, that's one of my wishes, but not this year.                    |
| 42:15      | Another great Mac simple little automation tool, PopClip.           |
| 42:20      | PopClip is so good.                                                 |
| 42:21      | David, did you see the really cool feature that PopClip             |
| 42:25      | added recently, which is being able to just select text on a        |
| 42:29      | website and then like, so on the pilot moon forms, pilot            |
| 42:34      | moon being to create the PopClip and then that is, especially       |
| 42:37      | formatted text, it's formatted in [[YAML]].                             |
| 42:40      | So it's got, you know, like a special like name colon and           |
| 42:44      | then whatever it is, the name of the PopClip action, but you        |
| 42:47      | can select it and just add it.                                      |
| 42:49      | So you can see other people's actions.                              |
| 42:50      | Like you can read the code behind other people's actions            |
| 42:53      | and just select it and add it or you can copy it, paste it          |
| 42:57      | into something else, edit it, and then yeah, select it and          |
| 43:00      | edit.                                                               |
| 43:01      | And I just thought that that was genius because it's a great        |
| 43:05      | way to enable sharing of actions whilst allowing other people       |
| 43:08      | to see what happens inside of it because there are so many          |
| 43:11      | times I'm sure you've run into this and I'm sure all of our         |
| 43:16      | listeners have as well, where you see an automation solution.       |
| 43:20      | It's really close to what you wanted and close to what you          |
| 43:23      | need. It's not quite, you can't actually see inside of it to        |
| 43:27      | figure out what it is and PopClip actions, unless you know          |
| 43:31      | how to unpack them and so on, can be a bit like that.               |
| 43:36      | So I think these new snippets that they've added so that you        |
| 43:40      | can easily see something so that you actually know exactly          |
| 43:43      | what it is and how it works is just really cool.                    |
| 43:45      | And of course, you know, they've not dropped support for            |
| 43:47      | doing things, the old fashioned worry where you could write         |
| 43:50      | scripts and bundle it all together, which is useful for             |
| 43:54      | bigger things.                                                      |
| 43:55      | But I'm just really loving this as a feature and I use, I           |
| 44:01      | have to say, I use PopClip all the time and I don't think           |
| 44:03      | about it.                                                           |
| 44:04      | It took me a long time to get on PopClip band wagon, but now,         |
| 44:07      | you know, I select text a specific application and it               |
| 44:10      | shows or doesn't show me various actions and options                |
| 44:13      | based on, you know, what it is I've selected, what application      |
| 44:16      | I'm in and so on and so forth.                                      |
| 44:17      | It's great.                                                         |
| 44:18      | Yeah, and I like a good example is title case.                      |
| 44:21      | You know, I spent so many years writing interesting title           |
| 44:24      | case scripts, whether it being [[Keyboard Maestro]] apple               |
| 44:27      | script or whatever.                                                 |
| 44:29      | The PopClip has a thing where you just select the text and          |
| 44:32      | it gives you an option.                                             |
| 44:33      | You push one button and it applies title case, you know,            |
| 44:36      | it's just like, I feel like it's a very automation friendly         |
| 44:40      | tool in that the execution is as simple as selecting text.          |
| 44:45      | You know, so if you're listening to this, you're like, well,        |
| 44:47      | you know, I don't want to spend a bunch of time writing a           |
| 44:49      | bunch of scripts.                                                   |
| 44:50      | Well, you download PopClip, you go to their library page,           |
| 44:53      | you install whatever useful PopClip's you want and then,             |
| 44:58      | you know, it's based on, you know, the history of this is,          |
| 45:02      | you know, on the phone when you select text, it gives you           |
| 45:05      | a little pop up that says, you know, make this bold or italic       |
| 45:09      | or depending on which app you're in, it gives you additional        |
| 45:11      | options.                                                            |
| 45:12      | Well, PopClip is like that, but it allows the community to          |
| 45:16      | create those actions and there are so many of them, you know,       |
| 45:19      | added to OmniFocus, you know, search it, you know, reveal it        |
| 45:24      | and find her, you know, go into an online thesaurus, you            |
| 45:28      | know, say it out loud, make it all uppercase, make it all           |
| 45:31      | lowercase, you know, apply title case, there's like everything      |
| 45:35      | you can think of under the sun in this list and it just keeps       |
| 45:39      | getting longer and then they got additional features recently       |
| 45:41      | as Rose was talking about.                                          |
| 45:43      | I mean, this one is such a no-brainer and I think it's              |
| 45:46      | part of set up too.                                                 |
| 45:47      | So it is.                                                           |
| 45:48      | It's part of set up.                                                |
| 45:49      | It's available on the Mac App Store.                                |
| 45:50      | It's available directly.                                            |
| 45:52      | Nick, the developer behind it as well, is super lovely.             |
| 45:54      | I've put a link to the PopClip forums in the show notes as          |
| 45:58      | well as the PopClip app itself because if you've got an idea        |
| 46:02      | for something and you don't know how to do it, you can post it      |
| 46:04      | in the forums and get some support on it and, you know,             |
| 46:08      | it might be Nick, it could be, you know, one of the other very      |
| 46:12      | useful, lovely folks in there who gives you a hand and points       |
| 46:15      | you in the right direction and, you know, it's just a great         |
| 46:19      | place to go and find actions and something that the developer       |
| 46:23      | in me really loves, that the documentation for action creation      |
| 46:27      | is all available on GitHub and, you know, so if you want to go      |
| 46:31      | into the nerdy side of things or figuring out how to create         |
| 46:34      | your own actions and so on, you know, it's all documented but       |
| 46:37      | equally, you don't have to learn that to, you know, benefit         |
| 46:41      | from this app.                                                      |
| 46:41      | You know, you want to be able to select something and then          |
| 46:43      | just see it in large clear type in the middle of the screen.        |
| 46:46      | That's an action that you can download just straight away.          |
| 46:51      | Really useful.                                                      |
| 46:53      | This episode of the Automators Podcast is brought to you by         |
| 46:56      | TextExpander.                                                     |
| 46:57      | Go to TextExpander.com/automators to get 20% off your        |
| 47:01      | first year and learn more.                                          |
| 47:03      | When you work on a small team, every moment counts.                 |
| 47:06      | You don't want to be wasting your time finding video conferencing   |
| 47:09      | details to send to a new client.                                    |
| 47:11      | You don't want to track down the same FAQs from the company         |
| 47:13      | website and these are the kinds of things you want to have at       |
| 47:16      | your fingertips so you can get your work done faster and            |
| 47:19      | that's why you need TextExpander.                                 |
| 47:21      | With TextExpander, you can access what you type the most          |
| 47:24      | with just a few keystrokes, allowing you to work faster             |
| 47:27      | and eliminate repetition, letting you focus on what matters         |
| 47:31      | most to you.                                                        |
| 47:32      | TextExpander's powerful shortcuts and abbreviations               |
| 47:34      | streamline your team's work.                                        |
| 47:36      | All you have to do is type a short abbreviation and TextExpander  |
| 47:39      | does the rest for you.                                              |
| 47:41      | You just build and collect your most commonly used phrases,         |
| 47:44      | messages, URLs and more right within TextExpander.                |
| 47:48      | Then create your chosen abbreviation and they'll be                 |
| 47:51      | with you wherever you type.                                         |
| 47:53      | You can even customise the snippets by having them                  |
| 47:55      | automatically add in dates, fill in the blank fields, time          |
| 47:59      | stamps and more.                                                    |
| 48:00      | This will make sure that you still keep the personality             |
| 48:03      | in the community you send.                                          |
| 48:05      | TextExpander is available on any device you use across any        |
| 48:08      | app you use on Mac, Windows, Chrome and iOS.                        |
| 48:12      | I use TextExpander all the time.                                  |
| 48:14      | It's my productivity tool.                                          |
| 48:15      | And when people tell me how do they start automating,               |
| 48:18      | I tell them get started with TextExpander because it makes        |
| 48:20      | it so easy.                                                         |
| 48:21      | I've got so many TextExpander snippets under my fingers.          |
| 48:24      | I just hit my keyboard and text magically appears.                  |
| 48:27      | I love it.                                                          |
| 48:28      | It's a huge boost to my productivity.                               |
| 48:30      | If repetitive typing is getting you down, you need TextExpander.  |
| 48:34      | Check out TextExpander today at TextExpander.com/          |
| 48:38      | automators and you get 20% off your first year.                     |
| 48:41      | That's TextExpander.com/automators to say goodbye to         |
| 48:46      | repetitive typing and our thanks to TextExpander for their        |
| 48:49      | support of the automators.                                          |
| 48:52      | So David, something else near and dear to my heart is [[Safari]]        |
| 48:57      | extensions.                                                         |
| 48:58      | You know, Firefox and Chrome have had loads of extensions           |
| 49:01      | for ages, but I find [[Safari]] is so performant on my Mac and          |
| 49:06      | great at not eating my battery life.                                |
| 49:08      | You know, the fastest way to run down a Mac's battery is to         |
| 49:10      | open Chrome, probably with [[Slack]] or something.                      |
| 49:14      | And then, you know, what is battery life?                           |
| 49:17      | But [[Safari]] has for a while been, you know, it kind of               |
| 49:22      | struggled with extensions.                                          |
| 49:24      | There weren't really extensions and then there were extensions      |
| 49:27      | and then they all went away again because the underneath            |
| 49:29      | it kind of changed how they worked and now extensions are           |
| 49:32      | back and extensions are everywhere and there are some               |
| 49:36      | really great ones out there.                                        |
| 49:38      | Yeah, I've always felt like we've been sitting on the               |
| 49:40      | sideline of this as [[Safari]] users, we don't get the best             |
| 49:44      | extensions, but there are some nice ones.                           |
| 49:47      | OM Save for [[Safari]].                                                 |
| 49:49      | Yeah, OM Save as in save to OmniFocus with my custom setup          |
| 49:54      | that is just how I want.                                            |
| 49:56      | Do you want like a an image of the web page included in             |
| 50:00      | in your saved thing from [[Safari]]?                                    |
| 50:03      | You can do that with OM Save.                                       |
| 50:05      | You can have it automatically go to a certain folder,               |
| 50:07      | certain tags, etc.                                                  |
| 50:10      | I, you know, I love this section.                                   |
| 50:11      | You maybe technically don't need it because you can use             |
| 50:16      | the not quite share sheet if you've got that setup or if            |
| 50:20      | you right click and it's available under services,                  |
| 50:23      | but services menu kind of goes away sometime.                       |
| 50:25      | So OmniFocus may or may not be there.                               |
| 50:28      | OM Save is just always in your [[Safari]] menu bar and it's a           |
| 50:31      | one button thing.                                                   |
| 50:32      | You click it and it opens, you know, your OmniFocus input           |
| 50:36      | capture with the data that you have prefilled and then              |
| 50:39      | you can just hit save and you're done.                              |
| 50:42      | I think you turn me on to this one, David.                          |
| 50:45      | It was, you know, very affordable in the app store and              |
| 50:48      | it's, I use it all day every day without even thinking              |
| 50:51      | about it.                                                           |
| 50:52      | Yeah.                                                               |
| 50:52      | Yeah.                                                               |
| 50:53      | It's nice having a little save to OmniFocus button in               |
| 50:56      | your, in your [[Safari]] browser, because there's a lot of              |
| 50:59      | stuff at least for my life that ends up in OmniFocus in             |
| 51:03      | one form or another.                                                |
| 51:05      | And I agree.                                                        |
| 51:06      | So the alternatively you can set up like the keyboard               |
| 51:11      | action where you set a custom keyboard shortcut and it              |
| 51:14      | runs a script that creates an action with the link saved.           |
| 51:18      | But I always call it OM Save, but you're right.                     |
| 51:21      | It's OM Save that has to be the name, but the, but it's             |
| 51:25      | going to be hard for me to unthink OM because that's                |
| 51:28      | what I've been thinking about it as all these, all this             |
| 51:30      | time, but they, uh, it just really does give you a way              |
| 51:33      | more power and the preferences on it allow you to, like             |
| 51:36      | you said, um, have a lot of control over what metadata              |
| 51:40      | shows up and how it appears.                                        |
| 51:42      | Yes.                                                                |
| 51:43      | Yeah.                                                               |
| 51:43      | Uh, what I do really appreciate about OM Save is                    |
| 51:46      | that it's very simple.                                              |
| 51:47      | Um, and for, um, anybody who's used, say, for example,              |
| 51:51      | [[Hazel]] before, and you've seen those sort of, uh, little             |
| 51:54      | blue, um,                                                           |
| 51:56      | Pills, yeah, the pills with like words in them.                     |
| 51:59      | Um, like it's got that same functionality.                          |
| 52:02      | So you've got the title, the URL description, and then              |
| 52:05      | you've got space in new line.                                       |
| 52:07      | Um, and you can drag those, um, those pills into your               |
| 52:11      | title template, your note template, tags and project.               |
| 52:15      | Um, and you can also, you know, checkbox the, at the                |
| 52:18      | attach, um, headline or screenshot, a headline image                |
| 52:21      | or screenshot of the website, or you can just say                   |
| 52:23      | always a headline image, which will be whatever like                |
| 52:25      | the featured images on the page that can be kind of                 |
| 52:28      | difficult to figure out at a guess what it might be                 |
| 52:30      | without going through and looking at, you know, a                   |
| 52:33      | bunch of websites and then clicking the button.                     |
| 52:35      | Um, and then of course there's screenshot as well.                  |
| 52:37      | Um, but I like the fact that it is just very simple                 |
| 52:40      | and it always does exactly the same thing.                          |
| 52:42      | I do have some shortcuts because unfortunately I'm                  |
| 52:45      | save is only available on max.                                      |
| 52:46      | So I have some shortcuts, um, for iOS, which allow me               |
| 52:49      | to do, um, the same sort of thing.                                  |
| 52:51      | Or, um, I have a more advanced one which takes kind                 |
| 52:55      | of like what is in the URL and the name of the page                 |
| 52:59      | and tries to figure stuff out.                                      |
| 53:00      | Um, and I've tried using that a few times, um, and like             |
| 53:04      | it's a great proof of concept, um, in that it works,                |
| 53:08      | but it kind of feels clunky and difficult to maintain,              |
| 53:11      | which is why I've, I've landed on my push cut, um, runs             |
| 53:14      | my omni automation script solution.                                 |
| 53:16      | Um, because, you know, it, that, that works just                    |
| 53:20      | continually and the code is very easy for me to                     |
| 53:22      | maintain and use.                                                   |
| 53:24      | Um, but I'm save is great for just get things into                  |
| 53:26      | your OmniFocus in the way that you, you want things                |
| 53:29      | formatted automatically.                                            |
| 53:31      | So, um, please that that solution exists.                           |
| 53:34      | And that very much is an automation themed, you                     |
| 53:37      | know, extension.                                                    |
| 53:38      | Some of it, there's a lot of great extensions,                      |
| 53:40      | but not all of them help you with automation the                    |
| 53:42      | way this one does.                                                  |
| 53:44      | Another one is awesome screenshot.                                  |
| 53:46      | And yes, we both have this one, but uh, yeah, you                   |
| 53:50      | want to get a whole page, um, screenshot.                           |
| 53:53      | There you go.                                                       |
| 53:54      | Awesome screen.                                                     |
| 53:55      | Yeah.                                                               |
| 53:55      | Yeah.                                                               |
| 53:56      | Cause if you take a screenshot in [[Safari]] on, um, iOS,               |
| 54:00      | so that's iPhone or iPad, um, then it will give you                 |
| 54:03      | an option, um, at the top and you kind of have to                   |
| 54:06      | look for it, uh, to, to know where, where it is.                    |
| 54:09      | But you, you tap on the little screenshot thumbnail                 |
| 54:11      | that appears and then you can change from screen                    |
| 54:13      | to full page.                                                       |
| 54:14      | It's at the top underneath the sort of edit button.                 |
| 54:16      | Um, or edit buttons there, um, that, you know, where                |
| 54:19      | the pencil and bin and the share sheet are.                         |
| 54:22      | Um, but that's not something you can do on the Mac.                 |
| 54:24      | And I'm not quite sure why, but either way, it                      |
| 54:26      | doesn't matter because awesome screenshot will let                  |
| 54:28      | me capture the entire page.                                         |
| 54:31      | It'll let me select particular images or capture                    |
| 54:33      | just what I can see on the page, capture it after                   |
| 54:36      | a countdown.                                                        |
| 54:37      | So if I have to like get my mouse into a specific                   |
| 54:40      | place, but using the keyboard, cancels whatever                     |
| 54:42      | the mouse is doing, then I can do that.                             |
| 54:44      | Um, and so on.                                                      |
| 54:45      | I just find it a very useful little, uh, utility that               |
| 54:50      | I end up using all the time.                                        |
| 54:51      | Um, and I'm, I'm glad that we have that one.                        |
| 54:55      | I don't know if this counts as, as automation, but                  |
| 54:59      | one that I wanted to share was stop the madness.                    |
| 55:01      | Are you familiar with this one?                                     |
| 55:03      | I am familiar with this one, but I'm going to let                   |
| 55:05      | you tell everyone about it, David.                                  |
| 55:06      | Okay.                                                               |
| 55:07      | So it's a [[Safari]] extension.                                         |
| 55:10      | Um, the stop sites from making your browser harder                  |
| 55:13      | to use, you know, um, you know, when you get all                    |
| 55:18      | these, these pop-up warnings, it starts to make you                 |
| 55:20      | insane and that's a lot of the, of stop the madness                 |
| 55:23      | is to stop the madness.                                             |
| 55:25      | Um, so I guess that's automation in the sense that                  |
| 55:28      | it allows you to avoid a bunch of clicks while you're               |
| 55:30      | on the web, you know, um, a lot of websites, a deliberately         |
| 55:35      | disabled user interface features in your browser that               |
| 55:38      | you expect to work, you know, and I don't know why                  |
| 55:41      | they do it.                                                         |
| 55:42      | I guess they're really trying to control your experience.           |
| 55:46      | That's a nice way to think about it.                                |
| 55:48      | Um, trap you on their website is another way to think               |
| 55:50      | about it.                                                           |
| 55:51      | And, um, I just, I just loved this when I got this                  |
| 55:54      | extension, I don't remember who told me about it,                   |
| 55:56      | but, um, it's like suddenly the web got better.                     |
| 56:00      | It's like the clouds opened and the sun came through.               |
| 56:03      | Yes.                                                                |
| 56:04      | I mean, it can do awesome things like, uh, stopping,                |
| 56:07      | uh, video autoplay and things like that.                            |
| 56:08      | Yeah.                                                               |
| 56:09      | Another great or two great utilities, uh, for stopping              |
| 56:12      | autoplay of videos and getting rid of like those                    |
| 56:16      | weird, horrible custom video players that you don't                 |
| 56:20      | want because you just want the iOS or the Mac OS                    |
| 56:22      | defaults vinegar and baking soda.                                   |
| 56:24      | Um, there, there are two separate [[Safari]] extensions                 |
| 56:28      | that you can get iOS and Mac OS, um, and, um, the,                  |
| 56:32      | the, the bundles, the water bundle, because that's                  |
| 56:35      | what happens if you, you mix vinegar and baking soda.               |
| 56:37      | Um, but, uh, I just love them because they will                     |
| 56:40      | replace pretty much any and every video player out                  |
| 56:42      | there with your just OS native one.                                 |
| 56:45      | So your standard hit space to pause works.                          |
| 56:49      | Yeah.                                                               |
| 56:49      | It doesn't autoplay.                                                |
| 56:50      | You have picture in picture, things like that, things               |
| 56:53      | that I want to be able to have from a video.                        |
| 56:56      | Like if I've, if I'm watching a video, I'm almost                   |
| 56:57      | certainly going to want picture in picture.                         |
| 56:59      | So let me picture and picture it without having                     |
| 57:02      | to like work around Google's YouTube using like                     |
| 57:06      | wanting me to use Chrome to do this and other                       |
| 57:09      | horrible, weird things.                                             |
| 57:11      | So, uh, yeah, um, I stopped the madness is, is a                    |
| 57:14      | great app as well, uh, extension as well.                           |
| 57:17      | Um, which I, I'm very much a fan of.                                |
| 57:21      | And, uh, there's another one that I did want to mention             |
| 57:23      | David, which Scotty, my co-host on automated, uh, on                |
| 57:26      | nested folders, not on automators, turn me on to,                   |
| 57:29      | uh, and that is URL linker.                                         |
| 57:32      | And I didn't think about this as an automation tool                 |
| 57:34      | for a while, um, because he, you know, I just                       |
| 57:38      | hadn't really considered it one.                                    |
| 57:40      | And then he reminded me that it can create different                |
| 57:43      | links for [[Safari]] page, depending on which page you're on.           |
| 57:47      | So URL linker, you just right click on a page in [[Safari]]             |
| 57:50      | and then you get your, your different options to, well,             |
| 57:53      | we'll link the page.                                                |
| 57:54      | Um, and you know, you can set it up for copy as                     |
| 57:56      | markdown format and so on.                                          |
| 57:57      | But, you know, you can, you can actually set up                     |
| 58:02      | different options so that you, you don't have to just               |
| 58:04      | copy as markdown format.                                            |
| 58:05      | You can copy as markdown with prefix or you can copy                |
| 58:08      | it as a HTML or you can copy it with, you know, whatever            |
| 58:12      | it is that you want, um, you can put the title and the              |
| 58:16      | URL in there and it will just let you copy it as you                |
| 58:19      | like.                                                               |
| 58:20      | So, you know, that's, that's a great tool that I'm                  |
| 58:22      | using quite frequently, you know, just right click                  |
| 58:24      | and select whichever option it is I need.                           |
| 58:26      | Yeah, that's what I've got installed as well and I dig              |
| 58:29      | it and, and you really can customise it a lot.                      |
| 58:32      | So if you want to do different formats, you can, I                  |
| 58:35      | generally just use the markdown thing, but, um, I dig it.           |
| 58:39      | Something else I, I'm just going to kind of give                    |
| 58:41      | a small shout out to you, David, which is all of                    |
| 58:43      | those great apps with an open in feature.                           |
| 58:46      | So, you know, when you try and open, um, a link and                 |
| 58:49      | it's like, Hey, you need to log into Twitter to view                |
| 58:52      | the tweet, um, or whatever it is.                                   |
| 58:55      | I hate that.                                                        |
| 58:56      | Everybody hates that because are you looked into                    |
| 58:58      | Twitter and [[Safari]]?                                                 |
| 58:59      | No, you have an app for that.                                       |
| 59:01      | Well, uh, every app developer who, um, works, you                   |
| 59:05      | know, creates a Twitter app, every app developer who                |
| 59:07      | creates a Reddit app and I'm sure plenty of others                  |
| 59:09      | out there have added these great open in features.                  |
| 59:12      | So it, it's kind of bouncy in that you open the link                |
| 59:16      | and it takes you to [[Safari]] and the [[Safari]] redirects                 |
| 59:18      | you to whichever application it is that you have set                |
| 59:21      | up, but it also works and it works really well.                     |
| 59:24      | So I no longer have the horrible experience of a friend             |
| 59:28      | has sent me a Twitter link.                                         |
| 59:29      | Obviously I can tell because most of the tweet seems                |
| 59:32      | to be missing that they quoted something, which is                  |
| 59:35      | not in the preview.                                                 |
| 59:36      | Thanks, Twitter.                                                    |
| 59:37      | So I tap the Twitter link.                                          |
| 59:38      | It opens Twitter and I see a login screen.                          |
| 59:42      | I get instead, uh, it opens [[Safari]], which then sends                |
| 59:45      | me over to Tweetbot and I then see the tweet properly               |
| 59:48      | in Tweetbot full context with everything.                           |
| 59:51      | Um, and that is my, my preferred way of doing things.               |
| 59:55      | So if you don't have those [[Safari]] extensions enabled,               |
| 59:58      | you can do this on Mac OS and iOS, then, then just                  |
| 01:00:01   | enable those so that you then, uh, get, you know,                   |
| 01:00:04   | redirected to the, the app of your choice, um, which                |
| 01:00:09   | means that, you know, if you do have, um, Twitter                   |
| 01:00:12   | and Tweetbot installed or Twitter epic or whatever,                 |
| 01:00:14   | then you can disable the other options and it will                  |
| 01:00:17   | still open in your preferred app.                                   |
| 01:00:18   | And I'm very much appreciate that this is a feature                 |
| 01:00:22   | that iOS added and then all the developers hopped                   |
| 01:00:25   | on the band working off.                                            |
| 01:00:27   | This episode of Automators is brought to you by Hover,              |
| 01:00:30   | one of Relay FM's longest running sponsors.                        |
| 01:00:32   | When you have that one big idea, where do you go?                   |
| 01:00:36   | Well, your business starts with a domain name.                      |
| 01:00:38   | So for many entrepreneurs, Hover is that big leap.                  |
| 01:00:41   | Hover has over 300 domain name extensions to choose from.           |
| 01:00:45   | No matter what you want to build, there's a domain name             |
| 01:00:47   | waiting for it.                                                     |
| 01:00:48   | And they have excellent technical support to answer                 |
| 01:00:50   | any questions you may have and they're dedicated                    |
| 01:00:52   | to getting you online, not upselling you.                           |
| 01:00:55   | Hover has free who is privacy.                                      |
| 01:00:57   | So the bad guys don't get your information.                         |
| 01:00:59   | A clean user interface and monthly sales on popular                 |
| 01:01:02   | top level domains.                                                  |
| 01:01:04   | It's easy to see why Hover is the popular choice                    |
| 01:01:07   | for people starting a business.                                     |
| 01:01:09   | I literally have lost count of how many domain names                |
| 01:01:12   | I've got and my friends have got and so on and so forth.            |
| 01:01:15   | You know, we're having a silly conversation and                     |
| 01:01:17   | before you know it, you've bought something like                    |
| 01:01:18   | aspirational pajamas.                                               |
| 01:01:20   | And maybe there is a great business idea behind it                  |
| 01:01:23   | or maybe you're just putting together something fun                 |
| 01:01:26   | and silly for your friends.                                         |
| 01:01:27   | Or maybe you're just using that URL as a great way                  |
| 01:01:30   | to point everybody else to something that somebody's using          |
| 01:01:34   | like a service.                                                     |
| 01:01:36   | Well, Hover is a great way to do that.                              |
| 01:01:39   | We know you like intuitive user experiences and things              |
| 01:01:42   | that just work straight out of the box.                             |
| 01:01:43   | So I know you'll appreciate Hover.                                  |
| 01:01:46   | Their UX and UI is really simple, clean and easy to navigate.       |
| 01:01:50   | Buy your domain and start using it today.                           |
| 01:01:52   | Go to hover.com/automators and get 10% off                    |
| 01:01:56   | all new purchases.                                                  |
| 01:01:57   | That URL one more time hover.com/automators.                  |
| 01:02:01   | Make a name for yourself with Hover.                                |
| 01:02:03   | Our thanks to Hover for their support of the show                   |
| 01:02:05   | and Relay FM.                                                      |
| 01:02:07   | You know, you can also do some automation directly                  |
| 01:02:10   | from your menu bar.                                                 |
| 01:02:11   | There's a lot of great apps for that as well.                       |
| 01:02:14   | Let's start on the home kit bandwagon.                              |
| 01:02:17   | Let's talk about [[HomeControl Menu for HomeKit\|HomeControl]].                                      |
| 01:02:19   | I think that app is one that is an automator's delight              |
| 01:02:23   | and a lot of people don't realise it.                               |
| 01:02:25   | Yeah, yeah, [[HomeControl Menu for HomeKit\|HomeControl]].                                           |
| 01:02:28   | Honestly, I found it originally because it allows you               |
| 01:02:30   | to control home kit things by [[URL Schemes\|URL scheme]],                           |
| 01:02:33   | which means that you can then put that into any other               |
| 01:02:37   | automation setup that you're using be that [[Alfred]] workflows,        |
| 01:02:40   | keyboard, maestro, macros, bunch files.                             |
| 01:02:44   | Yeah, you name it, you can put it in there.                         |
| 01:02:48   | And it works great because you just use the open URL                |
| 01:02:51   | action and it calls [[HomeControl Menu for HomeKit\|HomeControl]].                                   |
| 01:02:53   | But [[HomeControl Menu for HomeKit\|HomeControl]] lives in your menu bar and it allows you           |
| 01:02:56   | to see kind of whatever you want.                                   |
| 01:03:00   | So under the preferences, you can say, hey, I want to show          |
| 01:03:04   | scenes, I want to show devices, I want to show smart groups         |
| 01:03:08   | or sensors, and these are check boxes.                              |
| 01:03:11   | So you can have all of these if you like.                           |
| 01:03:13   | If you've got a lot of devices in your home,                        |
| 01:03:14   | I hope you've got a really tall screen.                             |
| 01:03:16   | But you can then customise that as well so that you can             |
| 01:03:19   | hide specific things.                                               |
| 01:03:21   | You can even have it show you different homes,                      |
| 01:03:23   | David, and add keyboard shortcuts to different things.              |
| 01:03:28   | So if you want a keyboard shortcut for your beach wave scene,       |
| 01:03:31   | which flashes up your lovely Nanoleaf light panels                  |
| 01:03:34   | in sort of turquoise with sandy, like a light gold sandy colour,     |
| 01:03:38   | you can have that as a keyboard shortcut on your Mac.               |
| 01:03:42   | And it just, you know, I love the fact that it works.               |
| 01:03:47   | It works really, really well.                                       |
| 01:03:49   | It's rock solid and it's right there.                               |
| 01:03:52   | There's another companion app for it called HomeBot                 |
| 01:03:54   | for shortcuts, which allows you to do crazy home automation         |
| 01:03:57   | stuff in shortcuts, which we'll talk about some other time.         |
| 01:04:00   | But for me, the way I got into [[HomeControl Menu for HomeKit\|HomeControl]]                        |
| 01:04:03   | was, you know, URL screen support.                                  |
| 01:04:06   | It sounds so old fashioned now, but, you know,                      |
| 01:04:09   | back when this first came out, there wasn't                         |
| 01:04:11   | shortcut support on the Mac.                                        |
| 01:04:12   | And honestly, running a shortcut to start a scene                   |
| 01:04:15   | kind of feels like overkill now when I can just do it               |
| 01:04:18   | like this.                                                          |
| 01:04:19   | Even though there are shortcut approved ways to do this,            |
| 01:04:22   | I still run these URL actions.                                      |
| 01:04:24   | They're just so much easier, right?                                 |
| 01:04:26   | Yeah.                                                               |
| 01:04:27   | And I like, I have a whole panel of [[Stream Deck]] buttons             |
| 01:04:29   | that just run the URL actions and it feels like                     |
| 01:04:34   | the most natural way to trigger home kit stuff.                     |
| 01:04:37   | It does, it does.                                                   |
| 01:04:39   | And so what I've done is [[HomeControl Menu for HomeKit\|HomeControl]] for me                        |
| 01:04:42   | only shows like devices and it only shows the devices               |
| 01:04:45   | that I'm going to want to control because I have                    |
| 01:04:48   | another menu bar utility, David, which allows me                    |
| 01:04:51   | to control scenes and it's called scene cuts.                       |
| 01:04:55   | Scene is in like, you know, action scene rather than                |
| 01:05:00   | I saw what you did at Disney on [[Instagram]].                          |
| 01:05:04   | There we go.                                                        |
| 01:05:05   | Let's make that sound slightly less creepy.                         |
| 01:05:07   | But yeah, scene cuts just shows scenes in your menu                 |
| 01:05:10   | bar.                                                                |
| 01:05:11   | So you click on it and voila, scenes.                               |
| 01:05:13   | And I really love having the two of them right there.               |
| 01:05:15   | It, you know, helps break things up.                                |
| 01:05:17   | I have a lot of scenes.                                             |
| 01:05:18   | I have a lot of devices being able to specifically                  |
| 01:05:21   | control the things that I'm after very quickly                      |
| 01:05:24   | and easily is definitely my focus.                                  |
| 01:05:27   | You know, I've got a lot of things automated,                       |
| 01:05:29   | but sometimes you just want to be able to click a button            |
| 01:05:32   | and have something appear or disappear as the case may be.          |
| 01:05:35   | Yeah, that one I had not seen before.                               |
| 01:05:37   | Thanks for sharing it.                                              |
| 01:05:39   | Yeah, I only found out about it a few weeks ago.                    |
| 01:05:41   | I was going through the Mac App Store spelunking                    |
| 01:05:44   | through going, hmm, what cool stuff is there out there?             |
| 01:05:47   | And scene cuts caught my eye, which is great.                       |
| 01:05:49   | I think I actually found it through quiet meat,                     |
| 01:05:52   | which is another great application.                                 |
| 01:05:54   | The developer of quiet meat has made a whole bunch                  |
| 01:05:57   | of really cool apps on the Mac App Store.                           |
| 01:06:01   | His name is Pedro and I have forgotten the rest of his name,        |
| 01:06:05   | which is probably for the best because if I tried to pronounce it,  |
| 01:06:07   | I will do horribly and probably insult him and his family,          |
| 01:06:11   | which would not be good.                                            |
| 01:06:12   | But Pedro, I love you.                                              |
| 01:06:13   | You added support for Microsoft Teams.                              |
| 01:06:16   | I believe it was when I requested it to quiet meat.                 |
| 01:06:19   | So quiet meat basically tries to detect when you're in a meeting    |
| 01:06:23   | and automatically pulls your music.                                 |
| 01:06:25   | So if somebody calls you on, say, Microsoft Teams,                  |
| 01:06:29   | then it will pause your music for you so that you're not            |
| 01:06:32   | scrambling with, oh my gosh, somebody's calling me.                 |
| 01:06:34   | Where's the pause button?                                           |
| 01:06:35   | Oh my gosh, that's increasing the volume,                           |
| 01:06:36   | trying to deal with all the stuff at once.                          |
| 01:06:38   | No, it just does it.                                                |
| 01:06:39   | And then when you finish, it'll resume.                             |
| 01:06:41   | That to me was like the really nice part.                           |
| 01:06:45   | And it can run shortcuts as well.                                   |
| 01:06:47   | So if somebody calls you and you want it to automatically run       |
| 01:06:51   | something that will rearrange apps on your desktop and so on,       |
| 01:06:55   | then you can just put that into a shortcut and bam,                 |
| 01:06:57   | it'll just magically do it for you.                                 |
| 01:06:59   | And that is developed by,                                           |
| 01:07:01   | Pedro was also a developer of [[HomeControl Menu for HomeKit\|HomeControl]] [[MenuBot\|Menu-(Bot)]] and [[HomeBot]]         |
| 01:07:05   | and some of the other apps that we've been talking about today.     |
| 01:07:08   | Exactly, yeah.                                                      |
| 01:07:10   | While we're talking about Pedro, he also makes [[ShareBot]],            |
| 01:07:14   | which is the, there was no share extension for [[Shortcuts]]            |
| 01:07:18   | on the Mac.                                                         |
| 01:07:19   | I don't know why.                                                   |
| 01:07:20   | I thought we'd get it with Ventura, but we did not.                 |
| 01:07:24   | So Pedro made a share extension for shortcuts called [[ShareBot]]       |
| 01:07:29   | and at least for another year, it's still good.                     |
| 01:07:32   | Yeah, yeah.                                                         |
| 01:07:34   | It's great.                                                         |
| 01:07:35   | Honestly, go check out some of Pedro's apps because he's made       |
| 01:07:39   | some great ones.                                                    |
| 01:07:41   | There's all sorts there, like [[MakePass]], making passes for           |
| 01:07:45   | your Apple wallet and so on.                                        |
| 01:07:47   | That's not strictly automation related that has shortcut support.   |
| 01:07:51   | But yeah, go check out some of his work.                            |
| 01:07:53   | He's done some really great things there,                           |
| 01:07:55   | which I'm really pleased about.                                     |
| 01:07:58   | I'm not sure how many other applications live in your menu          |
| 01:08:01   | bar, David, but I certainly have to mention CleanShot               |
| 01:08:05   | because CleanShot for me is the upgrade to screenshots on           |
| 01:08:10   | Mac OS that I didn't know I needed until I got CleanShot.           |
| 01:08:14   | And then I realised what I've been missing out on.                  |
| 01:08:18   | Simple things like it automatically copies a screenshot             |
| 01:08:21   | that I take to my clipboard.                                        |
| 01:08:23   | And they float in the bottom left-hand corner or the bottom         |
| 01:08:27   | right-hand corner or whichever corner I choose in my                |
| 01:08:31   | CleanShot preferences until I've decided that I'm good.             |
| 01:08:36   | So I can extend that period of time or I can have them              |
| 01:08:39   | automatically.                                                      |
| 01:08:40   | I can really easily redirect them so that they automatically        |
| 01:08:43   | go to my downloads folder, which I know you can control             |
| 01:08:47   | this stuff with screenshots preferences on built into               |
| 01:08:51   | Mac OS.                                                             |
| 01:08:52   | If you hit Command Shift 5 or is it 6, then you can get into        |
| 01:08:57   | an area where you've got preferences.                               |
| 01:08:59   | But it kind of feels like a little janky and weird                  |
| 01:09:03   | sometimes trying to change some of that.                            |
| 01:09:05   | And CleanShot just gives me so many more options like               |
| 01:09:08   | scrolling screenshots.                                              |
| 01:09:09   | If you want to screenshot, say, a chat that you've had,             |
| 01:09:13   | then you can start a scrolling screenshot and you select            |
| 01:09:17   | the area on your screen and then you slowly scroll.                 |
| 01:09:19   | Pro tip, use a wheel built into your mouse or something             |
| 01:09:25   | rather than a trackpad where you might go left and right            |
| 01:09:28   | for that.                                                           |
| 01:09:29   | But then once you finish your scrolling, you can say,               |
| 01:09:34   | hey, I'm done.                                                      |
| 01:09:35   | And it just stitches it together, just kind of like                 |
| 01:09:37   | what it does on iOS where you've taken 304 screenshots              |
| 01:09:40   | and it stitches it all together.                                    |
| 01:09:41   | And I just, you know, I really love that it's there and it          |
| 01:09:45   | does exactly what I need.                                           |
| 01:09:47   | It's got so many other features built in as well.                   |
| 01:09:49   | I keep forgetting about them.                                       |
| 01:09:50   | Like it can OCR text.                                               |
| 01:09:52   | It automatically hides your desktop icons when you're               |
| 01:09:55   | taking a screenshot of your desktop.                                |
| 01:09:58   | It can play sounds or not play sounds as you like.                  |
| 01:10:01   | You know, it can upload things to the cloud automatically           |
| 01:10:04   | as well and have a specific wallpaper as your desktop               |
| 01:10:07   | wallpaper for screenshots.                                          |
| 01:10:09   | And that can be included or not included with windows.              |
| 01:10:12   | Like I don't know how many options to talk about                    |
| 01:10:17   | because there's so many.                                            |
| 01:10:19   | But it's, if you're looking for something to upgrade your           |
| 01:10:22   | screenshot experience, take a look at clean shots available         |
| 01:10:25   | on a set up as well, which is, you know, always nice.               |
| 01:10:30   | But I just, I use it all the time.                                  |
| 01:10:32   | Yeah. Same thing. Everybody was talking about it and I had,         |
| 01:10:35   | I was very good with the built in screenshot tools,                 |
| 01:10:38   | but like with clean shot, you can adjust the amount of              |
| 01:10:41   | padding around the image when you want to border around it.         |
| 01:10:44   | It's like every little detail is customisable.                      |
| 01:10:47   | If you want, you can push one button and it immediately hides       |
| 01:10:50   | everything on your desktop.                                         |
| 01:10:52   | It's just for people who use and share screenshots,                 |
| 01:10:55   | this thing is a massive upgrade.                                    |
| 01:10:57   | I, and I didn't get it either till I started using it.              |
| 01:11:00   | I'm like, Oh yeah, this is going to stick around.                   |
| 01:11:03   | Yes, exactly.                                                       |
| 01:11:05   | And yeah, I'm just really glad that we have all of those options.   |
| 01:11:11   | This episode of the automators is brought to you by Hunter Douglas. |
| 01:11:14   | Custom window blinds, shades, shutters and drapery.                 |
| 01:11:17   | Just go to hunterdouglas.com/automators.                      |
| 01:11:21   | You'd be forgiven if you didn't think too much about the            |
| 01:11:24   | blinds in your home.                                                |
| 01:11:25   | You might sometimes adjust them in the morning, close them at       |
| 01:11:28   | night or just forget about them entirely because you never          |
| 01:11:31   | really understand how much window shades can actually do            |
| 01:11:34   | until you discover Hunter Douglas.                                  |
| 01:11:36   | Hunter Douglas offers unique shade designs that actually            |
| 01:11:39   | diffuse raw sunlight, casting a beautiful glow across the room.     |
| 01:11:43   | They're available in a gorgeous array of fabrics and colours         |
| 01:11:46   | that lend incredible style and the perfect finishing touches        |
| 01:11:49   | to a room's decor.                                                  |
| 01:11:51   | They have industry leading energy efficient shades that             |
| 01:11:54   | provide superior insulation against heat and coal for year          |
| 01:11:57   | round comfort, helping you save on those utility bills.             |
| 01:12:00   | And the best part is their PowerView automated shade                |
| 01:12:03   | technology.                                                         |
| 01:12:04   | Look, we're automators here.                                        |
| 01:12:06   | We want automation in our shades and PowerView allows you to        |
| 01:12:09   | schedule your shades to automatically adjust to their               |
| 01:12:12   | perfect positions throughout the day.                               |
| 01:12:14   | From letting in light slowly as you awake to adjusting to           |
| 01:12:17   | block the hot midday sun or rising just in time for the             |
| 01:12:21   | perfect sunset.                                                     |
| 01:12:22   | Innovative shade designs from Hunter Douglas make everyday          |
| 01:12:25   | living more beautiful, comfortable and convenient.                  |
| 01:12:28   | We spend a lot of time talking about home automation, but I         |
| 01:12:31   | think automation in your window coverings is a huge benefit.        |
| 01:12:35   | Sunlight is the best form of light you want in your room and        |
| 01:12:38   | why not automate that with these Hunter Douglas shades?             |
| 01:12:41   | That way you can have it rise up to give you that sunlight          |
| 01:12:44   | when you need it and go down when you don't.                        |
| 01:12:46   | Just think about walking into your office and having your           |
| 01:12:49   | shades automatically adjust for you for the perfect time of         |
| 01:12:52   | day. That's what you can do with Hunter Douglas.                    |
| 01:12:55   | Hunter Douglas shades are compatible with all your                  |
| 01:12:57   | favourite home automation systems, Amazon Alexa, Apple Home          |
| 01:13:01   | Kit, Google Assistant, IFTTT and more.                              |
| 01:13:04   | I know that listeners of the show would really love to be           |
| 01:13:06   | able to automate this stuff themselves too, helping them            |
| 01:13:09   | integrate their shades with their other products in their           |
| 01:13:11   | home and you can get that control with Hunter Douglas.              |
| 01:13:14   | So get the style, comfort and convenience you want with             |
| 01:13:17   | Hunter Douglas.                                                     |
| 01:13:18   | Visit hunterdouglas.com/Automators today for your             |
| 01:13:22   | free style gets smarter design guide with fresh takes, creative     |
| 01:13:26   | ideas and smart solutions for dressing your windows.                |
| 01:13:29   | Once again, that is hunterdouglas.com/Automators              |
| 01:13:33   | for your free design guide and our thanks to Hunter Douglas         |
| 01:13:36   | for their support of the Automators and Olive Relay FM.             |
| 01:13:40   | Well, David, where else should we wind up?                          |
| 01:13:43   | But we'll refine all the things in Finder.                          |
| 01:13:46   | Sorry, I tried to make that into a pun and it didn't                |
| 01:13:48   | really work.                                                        |
| 01:13:49   | But Finder, let's finish with Finder.                               |
| 01:13:51   | Close enough.                                                       |
| 01:13:52   | Let's go with the iteration instead.                                |
| 01:13:53   | Yeah.                                                               |
| 01:13:54   | Well, I mean, the Finder is a good source of                        |
| 01:13:56   | automation because when you're working with files, that is          |
| 01:13:59   | a pain in the neck.                                                 |
| 01:14:00   | And if you can find ways to automate that and there are             |
| 01:14:04   | little ways to do that.                                             |
| 01:14:05   | There are also big ways, things like [[Hazel]] and some of              |
| 01:14:08   | the file-based automation we've talked about with the big           |
| 01:14:11   | voice.                                                              |
| 01:14:12   | But I think that there's a lot of little stuff out there            |
| 01:14:15   | that can also really improve that process for you.                  |
| 01:14:18   | Yeah.                                                               |
| 01:14:19   | And one of the ones that I stumbled across a while ago              |
| 01:14:21   | and, you know, I feel like I've not seen anybody talking            |
| 01:14:25   | about this is Service Station.                                        |
| 01:14:27   | And Service Station is tagline is customise your right click          |
| 01:14:32   | menu, Service Station from macOS.                                     |
| 01:14:34   | And I personally end up using this in the Finder, the vast          |
| 01:14:37   | majority at the time.                                               |
| 01:14:38   | Yeah.                                                               |
| 01:14:39   | But, you know, it basically is just customise that context          |
| 01:14:43   | menu that you see.                                                  |
| 01:14:44   | So whenever you right click something, you'll see a                 |
| 01:14:46   | context menu pop up.                                                |
| 01:14:47   | That's your right click menu.                                       |
| 01:14:49   | And, you know, Service Station is made for customising this.          |
| 01:14:54   | And you can say, hey, if it's this kind of file, I want this        |
| 01:14:58   | thing to be in my menu.                                             |
| 01:14:59   | Or if it's in this folder, I want this thing to be in the           |
| 01:15:03   | menu.                                                               |
| 01:15:04   | Or if this string is anywhere in the folder path, show me           |
| 01:15:09   | that.                                                               |
| 01:15:10   | And this is where, you know, it really gets to be amazing           |
| 01:15:15   | because you just have so many options.                              |
| 01:15:18   | So you can say, based on your kind, file name, file                 |
| 01:15:22   | extension, the path, the uniform type identifier.                   |
| 01:15:26   | So that would be if something identifies as text, but that          |
| 01:15:31   | doesn't necessarily mean that the file extension is TXT.            |
| 01:15:34   | If the number of selected items.                                    |
| 01:15:36   | So if I have exactly two selected items, let me do this.            |
| 01:15:39   | And then there's also context menu type.                            |
| 01:15:42   | So if you've got files and folders selected, or if you              |
| 01:15:47   | are, if you have selected the Finder window background              |
| 01:15:50   | instead of like specific files and folders, then you can            |
| 01:15:54   | have, you know, those things show up.                               |
| 01:15:59   | And for me, this is really useful.                                  |
| 01:16:01   | I use it for saying, hey, when I right click on something           |
| 01:16:04   | that's within this folder, then show me the applications that       |
| 01:16:08   | I use for development.                                              |
| 01:16:10   | But if I'm right clicking a scripting file somewhere else,          |
| 01:16:14   | show me [[BBEdit]], please, because I'm probably going to              |
| 01:16:17   | want to open that in [[BBEdit]], you know, for every file,             |
| 01:16:20   | give me an folder.                                                  |
| 01:16:22   | Well, for every folder, give me the option to open this             |
| 01:16:24   | in terminal, actually an item in my case so that I can,             |
| 01:16:27   | you know, start from here in the terminal, which if you've          |
| 01:16:30   | already got the window open is just really useful.                  |
| 01:16:33   | And, you know, just all sorts of things.                            |
| 01:16:37   | And, you know, you can add applications and you can add             |
| 01:16:40   | scripts.                                                            |
| 01:16:42   | And, you know, you can go nuts with all this stuff.                 |
| 01:16:45   | It's got sample files on the left and all of that.                  |
| 01:16:48   | But I just, like, I feel like this is normal and I forget           |
| 01:16:52   | that I've customised these things and the screen sharing            |
| 01:16:55   | with somebody at work the other day showing him how we were,        |
| 01:16:59   | how I was planning on doing something so that, you know,            |
| 01:17:02   | we could see if we were on the same page or not.                    |
| 01:17:04   | And he was like, hang on a second, how have you got all this        |
| 01:17:06   | stuff in your right click menu?                                     |
| 01:17:08   | Like, I need this, tell me about this.                              |
| 01:17:10   | And, yeah, so I introduced him to service station,                  |
| 01:17:13   | which was great.                                                    |
| 01:17:15   | So, yeah, I mean, there's other options out there too,              |
| 01:17:17   | like right click booster, which, you know,                          |
| 01:17:21   | does very similar things.                                           |
| 01:17:23   | And it's scriptable too, which is one of the reasons why            |
| 01:17:26   | I like it.                                                          |
| 01:17:28   | I'm not as into it yet as I am with service station just            |
| 01:17:30   | because I've already got service station set up.                    |
| 01:17:32   | But service, but right click booster allows you to do things        |
| 01:17:34   | like, hey, you know, create an untitled text file here              |
| 01:17:39   | or open a new finder window at this particular folder               |
| 01:17:43   | or whatever it is.                                                  |
| 01:17:45   | And also, you know, it's got some developer features,               |
| 01:17:49   | like you can see, like your get status,                             |
| 01:17:51   | whether or not something's in version control,                      |
| 01:17:53   | if you need to add it or pull or something,                         |
| 01:17:55   | then that can all show up.                                          |
| 01:17:57   | And, you know, I just find this, you know,                          |
| 01:18:00   | I find all of these options to be really great.                     |
| 01:18:02   | And I'm pleasantly surprised, David,                                |
| 01:18:04   | the Mac App Store used to be a complete and utter wasteland.        |
| 01:18:07   | And every couple of months I go through and I just dig around       |
| 01:18:10   | and see what I can find.                                            |
| 01:18:12   | And, you know, I found service station a couple of months ago       |
| 01:18:15   | and right click booster, you know, more recently than that.         |
| 01:18:18   | But there's so many cool things in there                            |
| 01:18:21   | that I just never knew existed.                                     |
| 01:18:23   | It seems like automation tools are getting through                  |
| 01:18:27   | where I don't think they did a few years ago.                       |
| 01:18:30   | People are just making more of them. I'm not really sure.           |
| 01:18:33   | I think it's a little of both.                                      |
| 01:18:35   | I honestly think like [[BBEdit]] being back on the Mac App Store,      |
| 01:18:38   | which was a big thing because they weren't on the Mac App Store     |
| 01:18:41   | for a long time due to sandboxing.                                  |
| 01:18:43   | And, you know, the best version of [[BBEdit]]                          |
| 01:18:45   | is still the version directly from Bare Bones,                      |
| 01:18:48   | if only because Apple don't take their cut out of it.               |
| 01:18:51   | But also you get things like the terminal integration,              |
| 01:18:54   | which, you know, if you are into scripting and so on,               |
| 01:18:57   | is really nice to have even if you think,                           |
| 01:18:59   | oh, gosh, terminal, I never use it.                                 |
| 01:19:01   | You know, trust me, at some point you'll run into something         |
| 01:19:04   | and you'll find out that, hey, you know,                            |
| 01:19:06   | you can do this without even opening [[BBEdit]]                        |
| 01:19:08   | if you got the terminal commands installed.                         |
| 01:19:10   | So that's pretty useful.                                            |
| 01:19:12   | But these apps are far from the only way                            |
| 01:19:15   | to interact with Finder, David.                                     |
| 01:19:17   | One of your favourites, default folder X, is on this list.           |
| 01:19:20   | I mean, I use it all the time.                                      |
| 01:19:22   | Yeah. I mean, it's just an upgrade to the open                      |
| 01:19:25   | and save dialog box in a massive way.                               |
| 01:19:28   | They've also got a menu bar app where you can go in                 |
| 01:19:31   | and access recent folders.                                          |
| 01:19:33   | One thing though on service station before we leave it              |
| 01:19:36   | is just as important to add things                                  |
| 01:19:38   | as you can also take them away in service station,                  |
| 01:19:40   | which is something I find I use the app for.                        |
| 01:19:42   | Like sometimes I've got apps installed on my Mac                    |
| 01:19:45   | because I'm always trying things out,                               |
| 01:19:47   | but I don't really want them to show up in contextual menus.        |
| 01:19:49   | And service station is the easiest way I know to go in              |
| 01:19:52   | and only remove those, but you can reorder them there,              |
| 01:19:55   | which is really nice.                                               |
| 01:19:57   | So default folder X.                                                |
| 01:19:59   | Yeah. It goes way back.                                             |
| 01:20:01   | The reason it has the X in the name is because I believe            |
| 01:20:03   | it was on Next before it was on Mac.                                |
| 01:20:07   | You know, it's one of these apps that kind of came over             |
| 01:20:10   | with Steve Jobs to Apple.                                           |
| 01:20:13   | And it's, you know, I have it running almost all the time.          |
| 01:20:16   | I have to remember to turn it off when I screencast                 |
| 01:20:18   | because I always get a lot of questions from people saying,         |
| 01:20:20   | well, what is that thing in your open and save dialog box?          |
| 01:20:23   | But I'm just so used to it.                                         |
| 01:20:25   | It has like it remembers your most recently used folders.           |
| 01:20:28   | It remembers your favourites.                                        |
| 01:20:31   | If you, you know, the name, the big feature from the name is        |
| 01:20:34   | if I am saving a file from this application,                        |
| 01:20:37   | put it in this specific place every time.                           |
| 01:20:40   | But it just does so much more than that, you know,                  |
| 01:20:43   | it does more than just setting the default folder.                  |
| 01:20:45   | Yeah. I mean, my, the thing that I love about it is                 |
| 01:20:48   | I'll often have a folder open where I've got a whole bunch          |
| 01:20:51   | of the files that are related to something that I'm working on.     |
| 01:20:54   | And then when I, the save dialog opens,                             |
| 01:20:56   | I can just click that folder.                                       |
| 01:20:58   | Yeah. And the, the save dialog just reader,                         |
| 01:21:01   | like pops over to that folder form.                                 |
| 01:21:03   | Yeah. So just to clarify that.                                      |
| 01:21:05   | So if you've got a finder open and then a save dialog box           |
| 01:21:08   | opens from an app and you go outside of the same dialog box         |
| 01:21:12   | and just click in the finder in the background,                     |
| 01:21:14   | it automatically puts you right there.                              |
| 01:21:16   | It's, it's a really great thing.                                    |
| 01:21:18   | I use that all the time.                                            |
| 01:21:20   | Yeah. Like I, whenever I am on a machine                            |
| 01:21:23   | that doesn't have that and I go to say,                             |
| 01:21:25   | if something I've got the folder open,                              |
| 01:21:27   | I feel like a crazy person that's just trying to click stuff        |
| 01:21:29   | that doesn't exist.                                                 |
| 01:21:31   | Like this happened on my dad's machine the other day.               |
| 01:21:33   | I was trying to show him how to do something.                       |
| 01:21:35   | And I was like, can we just click over here?                        |
| 01:21:37   | Why is this not working?                                            |
| 01:21:39   | Oh, right.                                                          |
| 01:21:40   | I forget you don't have all of these apps installed.                |
| 01:21:43   | The good news is my dad is now the,                                 |
| 01:21:45   | the proud user of a new default folder X on his machine.            |
| 01:21:49   | So, you know, because he realised once I showed it to him           |
| 01:21:52   | on my machine, oh, this is really useful.                           |
| 01:21:55   | I'd quite like this, you know, that, you know,                      |
| 01:21:58   | it would be good for him.                                           |
| 01:22:00   | So, yeah.                                                           |
| 01:22:01   | But, you know, there's just so many great ways                      |
| 01:22:03   | to work with Finder though.                                         |
| 01:22:05   | I think one of the tricks for me sometimes with Finder              |
| 01:22:09   | is not using Finder.                                                |
| 01:22:11   | Finder is pretty great, but it's kind of limited at times.          |
| 01:22:16   | And so I personally really like Forklift                            |
| 01:22:19   | as my Finder alternative.                                           |
| 01:22:21   | I specifically like the two pane view,                              |
| 01:22:23   | and there are a number of apps out there that can do this.          |
| 01:22:26   | There's, what is it, File Commander.                                |
| 01:22:29   | There's a whole bunch of them was set up, including Forklift.       |
| 01:22:32   | Pathfinder.                                                         |
| 01:22:33   | Pathfinder, yep.                                                    |
| 01:22:35   | But I just really like Forklift.                                    |
| 01:22:37   | And what I really like about Forklift                               |
| 01:22:39   | is I have my favourites, including workspaces.                       |
| 01:22:43   | So, my workspaces are basically like, hey,                          |
| 01:22:47   | open these particular folders like in the left pane                 |
| 01:22:50   | and the right pane.                                                 |
| 01:22:51   | So I'll use this when I am releasing an episode of Automators.      |
| 01:22:54   | I will, you know, have a workspace opened,                          |
| 01:22:57   | and that has the Automators folder that's in [[Dropbox]] on one side,   |
| 01:23:01   | and then it has the Linode upload on the other side                 |
| 01:23:04   | so that, you know, I can drag the files over,                       |
| 01:23:06   | put them into Automators and Automators Max,                        |
| 01:23:09   | and then I can pop over to the Linode website                       |
| 01:23:12   | and just, you know, fill in the bits of data that we need to do     |
| 01:23:15   | so that the episode is ready for release.                           |
| 01:23:18   | But it's nice to just know that my Forklift favourite                |
| 01:23:22   | has that in so I can easily, you know,                              |
| 01:23:25   | just use that every time.                                           |
| 01:23:27   | And I've got so many of these set up                                |
| 01:23:29   | that I don't even think about it anymore.                           |
| 01:23:31   | It's really kind of amazing how much it's warmed its way            |
| 01:23:35   | into my life.                                                       |
| 01:23:36   | I originally just used it for uploading files to the web            |
| 01:23:38   | in various ways, but it can do so much more.                        |
| 01:23:42   | Yeah, it's very good as an FTP going                                |
| 01:23:44   | because it's really easy to use.                                    |
| 01:23:46   | And, you know, like it's part of a set up,                          |
| 01:23:48   | and, you know, you just get it.                                     |
| 01:23:50   | It feels to me like intermediate in terms                           |
| 01:23:53   | of Finder replacements, like Pathfinder,                            |
| 01:23:55   | I think has more bells and whistles,                                |
| 01:23:58   | but their Forklift is, it has what you need,                        |
| 01:24:01   | you know what I mean?                                               |
| 01:24:02   | And it's just so easy to use.                                       |
| 01:24:04   | And it has been continually developed now for a long time.          |
| 01:24:07   | So it's kind of got to that point where, okay,                      |
| 01:24:10   | you know, like when a new app shows up                              |
| 01:24:12   | as a Finder replacement,                                            |
| 01:24:14   | I'm always a little leery of it,                                    |
| 01:24:16   | but, you know, when it's been around four or five years,            |
| 01:24:18   | you're like, okay, these guys are really serious                    |
| 01:24:20   | about making this thing work,                                       |
| 01:24:22   | and they continue to add features.                                  |
| 01:24:24   | Yeah, I'm with you.                                                 |
| 01:24:25   | I think this is a great app,                                        |
| 01:24:27   | and it does become an automation tool                               |
| 01:24:29   | because it gives you features the Finder refuses to do so.          |
| 01:24:33   | Exactly, like I can sync folders with a file,                       |
| 01:24:37   | with Forklift, and I can say, hey,                                  |
| 01:24:39   | only sync like files with this extension                            |
| 01:24:41   | or don't sync files with that extension.                            |
| 01:24:43   | And, you know, and I can open that as a favourite again.             |
| 01:24:47   | And it's got all your commands and everything built in.             |
| 01:24:50   | And one of the things I really love is it syncs as well.            |
| 01:24:53   | So all of my favourites sync through [[Dropbox]]                         |
| 01:24:56   | to all of my other devices.                                         |
| 01:24:58   | So it doesn't matter whether I open Forklift                        |
| 01:25:00   | on my Mac Studio or my portable 14-inch MacBook Pro,                |
| 01:25:05   | which I named Alexandrite.                                          |
| 01:25:07   | I think I'm going Gemstones now.                                    |
| 01:25:09   | I'm using Star Trek ships for a while,                              |
| 01:25:11   | and I ran out of Star Trek ships.                                   |
| 01:25:13   | Well, I didn't, but I ran out of the ones                           |
| 01:25:15   | that I love the names of.                                           |
| 01:25:17   | So I've moved on to Gemstones.                                      |
| 01:25:19   | But yeah, it's got even better multi-rename                         |
| 01:25:22   | than, you know, the one built into Finder.                          |
| 01:25:25   | If you want something really great for file renaming,               |
| 01:25:28   | then, I mean, you throw a stone                                     |
| 01:25:30   | and you hit about 60 different options.                             |
| 01:25:32   | I personally like name mangler.                                     |
| 01:25:34   | But, you know, there's all sorts of things built into Forklift,     |
| 01:25:38   | including something which I kind of feel                            |
| 01:25:41   | is a bit of a rarity with these apps.                               |
| 01:25:43   | FXP copy.                                                           |
| 01:25:45   | So if you've got two servers, which have got FXP enabled,           |
| 01:25:48   | then you can copy two files between them                            |
| 01:25:51   | without having to go through your Mac,                              |
| 01:25:53   | which is often going to be the bottleneck with these things.        |
| 01:25:55   | Like, you know, having to download something to your Mac            |
| 01:25:58   | to upload it to another place, that's going to be slow.             |
| 01:26:03   | But actually, you don't have to do that.                            |
| 01:26:06   | You can just sync it between the two places.                        |
| 01:26:09   | And it's got so many cool things built in,                          |
| 01:26:13   | including, you know, [[Dropbox]] support and everything else,           |
| 01:26:17   | that you can, you know, really take advantage of it                 |
| 01:26:20   | and enjoy that.                                                     |
| 01:26:21   | So two thumbs up for Forklift.                                      |
| 01:26:23   | Definitely, definitely.                                             |
| 01:26:25   | And I feel like we can't let Finder go                              |
| 01:26:27   | without mentioning [[Alfred]].                                          |
| 01:26:29   | You know, we've got to give it a hat tip at least.                  |
| 01:26:31   | Yeah, but let's just do that because it's a big app.                |
| 01:26:33   | You know, we're talking about small ones,                           |
| 01:26:35   | but yeah, [[Alfred]] is a good one.                                     |
| 01:26:39   | There's a lot of these good, you know,                              |
| 01:26:41   | I don't, I'm going to stumble into another hour                     |
| 01:26:44   | and a half of content here for my careful.                          |
| 01:26:46   | But yeah, there are competitors, [[Alfred]],                            |
| 01:26:48   | that are equally good.                                              |
| 01:26:49   | But man, [[Alfred]], with this latest update,                           |
| 01:26:51   | is really, really hitting on all cylinders.                         |
| 01:26:54   | Oh, yeah.                                                           |
| 01:26:55   | Yeah.                                                               |
| 01:26:56   | And if you're not sure what I'm talking about with Finder, [[Alfred]],  |
| 01:26:59   | huh, then all I can say really is,                                  |
| 01:27:03   | oh, go to the [[Alfred]] website and then look at some of the things    |
| 01:27:06   | that you can do when you found a file.                              |
| 01:27:08   | Okay.                                                               |
| 01:27:09   | So find a file with [[Alfred]].                                         |
| 01:27:11   | So look for something that maybe you downloaded recently            |
| 01:27:13   | or something and then look at the options.                          |
| 01:27:16   | Okay.                                                               |
| 01:27:17   | Because this is where you can go truly nuts.                        |
| 01:27:21   | So you hit the tab key, you know,                                   |
| 01:27:23   | that tab key is kind of your magic button                           |
| 01:27:26   | because it takes you to everything else.                            |
| 01:27:27   | But then you've got open with reveal and Finder,                    |
| 01:27:30   | get info, copy to move to delete copy with replace to move          |
| 01:27:34   | with replace to browse this folder and [[Alfred]] open my terminal      |
| 01:27:38   | here, copy the path of this file to the clipboard,                  |
| 01:27:41   | copy this file to the clipboard, add it to a buffer so you can      |
| 01:27:45   | have like a stack of things and paste as plain text,                |
| 01:27:48   | all sorts.                                                          |
| 01:27:49   | And, you know, it's just really great to have those options         |
| 01:27:53   | without taking your fingers off the keyboard if that's what         |
| 01:27:55   | you're looking for.                                                 |
| 01:27:56   | All right.                                                          |
| 01:27:57   | Well, I think we've done a pretty good job today.                   |
| 01:27:59   | There are, as you can see, a lot of tools.                          |
| 01:28:02   | In fact, we didn't hit everything in the outline,                   |
| 01:28:04   | but, you know, we'll come back to this.                             |
| 01:28:06   | But if you're looking for some little automation tools,             |
| 01:28:09   | I think today we've given you plenty to try out.                    |
| 01:28:12   | In fact, Rose, you turned me on to a couple here that I,            |
| 01:28:15   | I've got, I didn't realise about soda water.                        |
| 01:28:17   | So I've got that installed now.                                     |
| 01:28:19   | I can't wait to test that out.                                      |
| 01:28:20   | Yeah.                                                               |
| 01:28:21   | The fizzy water bundle.                                             |
| 01:28:22   | Fizzy water.                                                        |
| 01:28:23   | Yes.                                                                |
| 01:28:24   | Yeah.                                                               |
| 01:28:25   | Yeah.                                                               |
| 01:28:26   | Baking soda vinegar.                                                |
| 01:28:27   | Yeah.                                                               |
| 01:28:28   | But by the way, check it out.                                       |
| 01:28:30   | We are the Automators podcast.                                      |
| 01:28:32   | You can find us over at relay.fm/automators.                  |
| 01:28:35   | You can find our website at automators.fm.                          |
| 01:28:37   | You can find the forum at talk.automators.fm.                       |
| 01:28:41   | I had that thing happen just a few days ago where I had a           |
| 01:28:43   | question.                                                           |
| 01:28:44   | I typed it into Google and it pointed me to a nice thread in        |
| 01:28:48   | our forum.                                                          |
| 01:28:49   | So you never know when that's going to happen.                      |
| 01:28:51   | Thank you to our sponsors today.                                    |
| 01:28:53   | That's our friends over at set up.                                  |
| 01:28:55   | We'll see you next time.                                            |
| 01:28:58   | Goodbye folks.                                                      |
