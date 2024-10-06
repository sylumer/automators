---
status: "complete"
fc-date:
  year: 2020
  month: 07
  day: 03
fc-category: "podcast"
podcast: "Automators"
published: 2020-07-03
duration: 4147
formattedduration: "01:09:07"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/53"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators053.mp3"
episode: 53
title: "53: WWDC 2020 Automation News"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David bring all the automation news from [[Apple|Apple's]] 2020 Developer Conference.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 053 Discussion](https://talk.automators.fm/t/automators-53-wwdc-2020-automation-news/7628)

# Sponsors
- [[The Uptake (Sponsor)|The Uptake, from Microsoft]] - A new show on all things tech and community from Microsoft.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

# Show Notes
- [Automators - Relay FM](https://www.relay.fm/automators/)
- [Home | Automators](https://automators.fm/)
- [Automators Talk](https://talk.automators.fm/)
- [What's new in SiriKit and Shortcuts - WWDC 2020 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2020/10068/)
- [Design and Development Videos - Apple Developer](https://developer.apple.com/videos/)
- [Evaluate and optimise voice interaction for your app - WWDC 2020 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2020/10071/)
- [Empower your intents - WWDC 2020 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2020/10073/)

# Transcription
  
| Time Index | Transcription                                                                                                                                             |
|:---------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automated. My name is Rosemary Orchard and as always I'm joined                                                                      |
| 00:06      | by David Sparks and we're going to talk about technology and technology updates. How are                                                                  |
| 00:11      | you David?                                                                                                                                                |
| 00:12      | I'm doing great Rose. It's always exciting the week of [[WWDC]]. I am sorry that we're                                                                    |
| 00:18      | not together. I was thinking this morning wistfully last year you and I recorded the                                                                      |
| 00:23      | post [[WWDC]] show in my hotel room with microphones propped on shoes. I remember that.                                                                   |
| 00:29      | Yes, and the shoes were on your suitcase and the suitcase was on a suitcase stand just                                                                    |
| 00:33      | to fully set the picture. And my foot was on an extra chair because I broke my ankle and                                                                  |
| 00:38      | I didn't realise I broke my ankle until a couple of days later when I got home. But                                                                       |
| 00:42      | it was okay. It was good fun. I enjoyed it. I was missing it as well. Not the broken ankle,                                                               |
| 00:46      | just you.                                                                                                                                                 |
| 00:47      | It was fun. It was fun being together. But this year we've had a bunch more announcements                                                                 |
| 00:53      | about automation on the various [[Apple]] platforms. It didn't feature as heavily in the keynote                                                              |
| 00:59      | but once you start digging in the weeds you find out, hey, there's a lot of stuff going                                                                   |
| 01:03      | on. So we thought today we would share with you a bunch of information about new shortcuts                                                                |
| 01:10      | and also some of the stuff on the Mac and [[HomeKit]] as well. I guess just to begin that                                                                     |
| 01:15      | keynote was super dense.                                                                                                                                  |
| 01:17      | Oh yeah, information everywhere. But shortcuts is not the brand new thing now so it didn't                                                                |
| 01:25      | get as much feature there but they did have a session on [[Shortcuts]].                                                                                   |
| 01:29      | Yeah, they've actually had a couple of sessions on [[Shortcuts]] and as we record those there's                                                           |
| 01:34      | going to be more sessions and I think some workshops later in the week with the shortcuts                                                                 |
| 01:39      | team. But I started watching one of the sessions earlier and there was just so much information                                                           |
| 01:45      | in there that wasn't in the keynote and it's great and I've been playing with it. So full                                                                 |
| 01:50      | disclosure, I have it installed, the betas installed on my iPhone, my iPad and my [[Apple Watch]].                                                                  |
| 01:58      | David, where are you at beta-wise right now?                                                                                                              |
| 02:00      | Okay, so I have just gone completely crazy. I've got it on, I've got the Big Sur on the                                                                   |
| 02:06      | laptop but not on my main machine and everything else that I own has the beta sign except my                                                              |
| 02:13      | watch. I haven't done the watch yet.                                                                                                                      |
| 02:15      | Okay, well full disclosure on the watch, I turned on the hand washing thing earlier today                                                                 |
| 02:20      | and I just washed my hands before we started recording and my watch rebooted. So the good                                                                 |
| 02:26      | news is I washed my hands for the entire time that my watch was rebooting so I definitely                                                                 |
| 02:30      | managed to 20 seconds because that takes a couple of minutes sometimes.                                                                                   |
| 02:35      | As much as I like going to the base, the watch is always like the bridge too far from me                                                                  |
| 02:38      | especially at beta one. But that's okay, it didn't break your watch and that happened                                                                     |
| 02:44      | for a few years.                                                                                                                                          |
| 02:45      | No, it's just rebooted. It's fine again now.                                                                                                              |
| 02:47      | So [[Apple]] really has done a lot for automation. It almost feels like they're listening once                                                                |
| 02:54      | in a while and I thought why don't we start with iOS because that's, I believe, probably                                                                  |
| 03:02      | the area that needs the most help with automation. I mean, there are so many great tools on the                                                           |
| 03:06      | Mac, whether you use like a developer generating tool like [[Keyboard Maestro]] or [[TextExpander]]                                                        |
| 03:13      | or you get into scripting and [[AppleScript\|AppleScripting]]. There's a lot of tools available, whereas                                                  |
| 03:19      | iOS really the only game in town is shortcuts. So we're always very eager to see what happens                                                             |
| 03:23      | with shortcuts.                                                                                                                                           |
| 03:24      | Yeah, and well keynote wise, there were a couple of things. I spotted [[Shortcuts]] in a                                                                  |
| 03:29      | couple of places in the keynote and the widgets on the screen and I've since played and I                                                                 |
| 03:33      | love that I can stack multiple [[Shortcuts]] widgets on top of one another. And I also did spot                                                           |
| 03:38      | it on the [[Apple Watch]], which is great as well. So [[Shortcuts]] is actually on my [[Apple Watch]]                                                             |
| 03:43      | and I now have 666 shortcuts on my [[Apple Watch]] because it just put all of them on there.                                                                  |
| 03:48      | So that's great.                                                                                                                                          |
| 03:49      | That'll be a fun afternoon moving some of those off or like 660 of them off.                                                                              |
| 03:55      | So just to kind of go in the weeds on that, when you create any shortcut and you modify                                                                   |
| 04:00      | the shortcut, there's now a switch that allows you to say put this on [[Apple Watch]]. So I'm                                                                 |
| 04:05      | guessing what happens is that switches on by default. So all of your shortcuts have                                                                       |
| 04:09      | that box.                                                                                                                                                 |
| 04:10      | Yeah.                                                                                                                                                     |
| 04:11      | Now that wasn't a very good default. I feel like that should have been the opposite.                                                                      |
| 04:14      | I kind of feel it would have been better to do the opposite as well. I for people with                                                                    |
| 04:19      | say 20 shortcuts are less by all means, throw them all on the watch. But for people with                                                                  |
| 04:23      | 600 odd or you know, some people have got thousands of shortcuts, [[Federico Viticci]] I'm                                                                |
| 04:27      | sure has, you know, definitely more than me, you know, we're going to be spending                                                                         |
| 04:32      | an afternoon at some point, maybe a day, just going through and turning that off. And I've                                                                |
| 04:36      | not found a way to mass disable that. And for a little bit of extra fun, I did not have                                                                   |
| 04:41      | data loss this year. I had bonus shortcuts. The shortcuts I've recently deleted reappearing.                                                              |
| 04:47      | Yeah, I had that as well. And the, yeah, I guess let's just, let's kind of talk about                                                                     |
| 04:52      | the beta stuff a little bit. There's always been a problem with [[Shortcuts]], at least with                                                              |
| 04:58      | iOS 13, where you had the, you had two boxes in the preferences, you say, I want to sync                                                                  |
| 05:06      | shortcuts and I want to sync their order. And for some reason, syncing order was always                                                                   |
| 05:11      | a little hairy. I had a situation just last month where my shortcuts all just stopped                                                                     |
| 05:16      | working. I'd open the app and it would crash like within seconds. And I went in and turned                                                                |
| 05:22      | off the sync shortcut order. And it, it fixed the problem. So there were still issues in                                                                  |
| 05:28      | iOS 13. I think they've got that sorted out because with a new setting menu for [[Shortcuts]],                                                            |
| 05:33      | you don't even have the option to turn off sync short order, just syncs, or it doesn't                                                                    |
| 05:36      | sync and you get the whole thing. And that's, I think it's probably for the best, let's                                                                   |
| 05:41      | be honest, because it, on the one hand, you might think, yes, it's a great idea to have                                                                   |
| 05:45      | a different order of shortcuts on different devices, but with the addition of folders,                                                                    |
| 05:51      | which are now new and available in iOS 14, you may not need that quite so much anymore.                                                                   |
| 05:57      | Agreed. So let's, you know, they added folders. So we've talked about the need for organisation                                                           |
| 06:02      | tools and shortcuts for years. I've always felt that this was something that was coming.                                                                  |
| 06:07      | It just wasn't there yet. And this year we got it. So it's great. You can create, I                                                                       |
| 06:12      | don't know how many, I've got four folders currently and I'm testing, I'm sure you can                                                                    |
| 06:16      | create a lot more than that. The method to do it is you can hit the ellipses on the shortcut                                                              |
| 06:23      | and just hit move and move it to the folder, or you can just drag it to the folder. They                                                                  |
| 06:27      | have the folders displayed below. So there's a whole bunch of ways you can do this. And                                                                   |
| 06:33      | I haven't got mine all organised yet. It's not really in the beta process. I'm a little                                                                   |
| 06:37      | leery of spending, you know, 30 minutes organising all my shortcuts and finding that, you know,                                                           |
| 06:42      | in the next beta, the organisation gets lost. That happens sometimes as you're going through                                                              |
| 06:46      | the beta process, but I am very eager to have it. I created one of the things I did, and                                                                  |
| 06:52      | we'll talk later about the widget that they've added to the home screen, but I just created                                                               |
| 06:56      | a folder called widget. And that way when you pick, when you set the widget on your screen,                                                               |
| 07:01      | you can, you can say, just look at the shortcuts I put into the widget folder to display on                                                               |
| 07:06      | my screen.                                                                                                                                                |
| 07:07      | Mm hmm. Yes. And that, that's something I'm really liking. So I started out with a folder                                                                 |
| 07:12      | called home screen, and then I added home screen 2, because I wanted to try stacking.                                                                     |
| 07:18      | And so people who've not seen the keynote, you can add a widget just like you previously                                                                  |
| 07:23      | have had in this debut on your home screen. Now, app developers are going to have to rewrite                                                              |
| 07:27      | most of their, their widgets because it's [[SwiftUI]] only, which is [[Apple|Apple's]] new user interface                                                          |
| 07:35      | design, which they released last year and they've added to this year. And it's non-interactive                                                            |
| 07:41      | except [[Shortcuts]]. So if I tap on a [[Shortcuts]] shortcut inside of a widget, then it actually                                                        |
| 07:49      | animates a little bit and does stuff. But most of the time, if you tap on something,                                                                      |
| 07:53      | it literally just opens that app to whatever view that is. But there are shortcuts, there                                                                 |
| 07:58      | are widgets of different sizes. There's small, medium, big, and really, really big. And you                                                               |
| 08:03      | can stack things on top of each other. So if they're the same size, like, like, oh, you                                                                   |
| 08:08      | can just put them on top of each other, which is pretty cool. So I have multiple [[Shortcuts]]                                                            |
| 08:12      | widgets that I've stacked on top of each other. So I can swipe between them, which is pretty                                                              |
| 08:17      | cool.                                                                                                                                                     |
| 08:18      | And so the options for [[Shortcuts]] is you can use the medium or large size. And with the                                                                |
| 08:23      | medium, you can put four shortcuts and a medium size widget. And with the large, you can put                                                              |
| 08:27      | eight. And like Rose said, and Rose figured this out, I just assumed it wouldn't work.                                                                    |
| 08:33      | But the you can put multiple with shortcuts of the multiple widgets of the same type on                                                                   |
| 08:39      | top of each other. And you never, it never occurred to do that for like the calendar                                                                      |
| 08:42      | because it's going to have the same data.                                                                                                                 |
| 08:43      | It's actually not even the same type. It's the same size. So you could have calendar                                                                      |
| 08:48      | shortcuts, shortcuts, weather on top of each other.                                                                                                       |
| 08:51      | Yeah. So long as they're the same, you're right. So like, if it's medium size, but what                                                                   |
| 08:56      | Rose figured out was you could put multiple shortcuts, widgets in the same stack so long                                                                  |
| 09:02      | as they're the same size. So you put two in, I don't know if you've tested how far you                                                                    |
| 09:06      | can go with that.                                                                                                                                         |
| 09:07      | But I've only tried it with two so far because I'm not sure which ones I want on my home                                                                  |
| 09:11      | screen yet. I had a couple that I had added to my home screen. And so those were the first                                                                |
| 09:17      | that went into home screen. That's the folder that I'm using because so if you tap and hold                                                               |
| 09:22      | on the widget, then you can edit the widget and it'll say something like edit shortcuts.                                                                  |
| 09:27      | And then you can pick which folder you want. And then, of course, it will actually display                                                                |
| 09:34      | the shortcuts from that folder. So I just put a couple in that folder. And now I've                                                                       |
| 09:38      | just broken it and I have the same folder in both of my widgets, but that's okay.                                                                         |
| 09:43      | Another point, maybe this is the beta thing. You can only put one stackable set in. You                                                                   |
| 09:49      | can't have multiple stackable sets, although they have one called smart stack, which is                                                                   |
| 09:53      | something they make. You can put that in in your own personally built stackable set.                                                                      |
| 10:00      | And it's great. So the ones that made the cut for me, I'm just using one set and it's                                                                     |
| 10:05      | the medium size. I have four shortcuts, but I have the MacSparky, the Sparks law and                                                                      |
| 10:11      | the personal shortcuts, which are launching points to, you know, it's choose from menu                                                                    |
| 10:15      | shortcuts that goes really, really deep. So like almost anything I want to do from those                                                                  |
| 10:20      | parts, those are contextual, you know, those contexts of my life, almost all my shortcuts                                                                 |
| 10:25      | I can get to through those three. And I'm not sure what I'm going to do with the fourth                                                                   |
| 10:29      | one yet. It's really nice having that on my screen home screen at all times. And it's                                                                     |
| 10:34      | right across the top.                                                                                                                                     |
| 10:36      | Yeah. I found putting it in the bottom section was not good because then I usually swipe in                                                               |
| 10:42      | that area to bring up spotlight. And so I was swiping and it was swiping between my                                                                       |
| 10:46      | shortcuts widgets, which was fun, but frustrating. So I quickly moved that up to the top as well.                                                         |
| 10:53      | And then I put the weather at the top. And now I've got it just below and I'm experimenting.                                                              |
| 10:57      | My home screen is going to change so many times this summer because of these widgets,                                                                     |
| 11:00      | but it's going to be fun.                                                                                                                                 |
| 11:01      | Yeah. And, you know, historically, I always have like, you know, somewhere between five                                                                   |
| 11:05      | and 10 on my iPad, at least shortcuts, launchers on the home screen. And I think probably all                                                             |
| 11:13      | of those are going to go away. Even the ones that don't fit in for, they all fit contextually                                                             |
| 11:18      | in areas of my life. I think I can kind of rebuild these to make it work. And so I think                                                                  |
| 11:25      | for me at least shortcuts are going to move into the widget and they're not going to be                                                                   |
| 11:29      | on the home screen anymore. So that's going to be nice to clean up the home screen just                                                                   |
| 11:33      | a little bit.                                                                                                                                             |
| 11:34      | Definitely. I'm just wishing you could launch the [[Shortcuts]] app from the widget right now.                                                            |
| 11:38      | I don't think you can. Like you can open a shortcut so that shortcut could open [[Shortcuts]].                                                            |
| 11:44      | But I'm not willing to sacrifice one of those big spaces for that. So at the moment I have                                                                |
| 11:49      | [[LaunchCuts]] in my dock and I have [[Shortcuts]] on my home screen because even though we got                                                           |
| 11:53      | folders inside of [[Shortcuts]], I think [[LauchCuts]] has not been [[Sherlocking\|Sherlocked]] here because                                                               |
| 11:57      | [[LaunchCuts]] does smart folders. And so for me, the smart folders alone, like I'm going                                                                 |
| 12:03      | to have to use those to make manual folders for the time being because it's like, okay,                                                                   |
| 12:08      | well, I have all these, you know, great smart folders. Well, you know, which, which shortcuts                                                             |
| 12:13      | are in those again? But, you know, I'll get there.                                                                                                        |
| 12:17      | Yeah. Just like so often, it's like the difference between [[Apple Calendar\|Calendar]] and [[Fantastical]].                                              |
| 12:21      | I mean, [[Apple]] will do a good job of it.                                                                                                                   |
| 12:24      | Oh yeah.                                                                                                                                                  |
| 12:25      | But when a developer comes in and they say, I'm going to spend all my time working on                                                                     |
| 12:28      | this one problem, they always have more features. And I think [[Apple|Apple's]] actually afraid to put                                                              |
| 12:33      | in some of the features that you get with launch cuts because it just gets too fiddly                                                                     |
| 12:38      | for a lot of users. And they want to keep it simple. But either way, man, folders and                                                                     |
| 12:44      | shortcuts, widgets on the, on the home screen, those are great things for automators because                                                              |
| 12:48      | that stuff is always present for you. Now, the big question before we move on to some                                                                     |
| 12:53      | of the stuff in shortcuts is, are you giving shortcuts a dedicated space or is it part                                                                    |
| 13:00      | of a stack where like maybe sometimes it'll be your calendar and sometimes it'll be your                                                                  |
| 13:04      | shortcuts?                                                                                                                                                |
| 13:05      | I have a dedicated shortcut stack. Yeah.                                                                                                                  |
| 13:07      | How about you?                                                                                                                                            |
| 13:08      | Amen, sister. Amen. So, so what I'm doing on almost all my devices is I'm having a shortcut                                                               |
| 13:13      | stack and then I'm having a, I'm sorry, just a single shortcut window with four. I can                                                                    |
| 13:19      | get it within four. I don't need to. And then, and then I've got a stack with everything                                                                  |
| 13:23      | else with like [[Apple Calendar\|Calendar]] and you know battery life and stuff where I can swipe between those.                                          |
| 13:28      | But I always want shortcuts available to me at no point. Can I not have my shortcuts,                                                                     |
| 13:33      | my precious, precious shortcuts? Yeah.                                                                                                                    |
| 13:36      | Anyway, okay. So that's cool. I'm glad that they did that.                                                                                                |
| 13:40      | And that's kind of the tip of the iceberg as well, because those are the things that                                                                      |
| 13:44      | you sort of found immediately when you, when you look at iOS 14 shortcuts. And then you                                                                   |
| 13:49      | dig deeper and it gets more fun.                                                                                                                          |
| 13:51      | Let's talk about triggers.                                                                                                                                |
| 13:53      | Oh, I was so excited by this. Yeah. Well, I mean, we talked about it. We talked about                                                                     |
| 13:59      | what we wanted better triggers, we wanted triggers that didn't keep requesting us to                                                                      |
| 14:04      | confirm. And we got both of those things.                                                                                                                 |
| 14:07      | Yeah, we did. So let's, let's start by talking about the new trigger types because they added                                                             |
| 14:13      | six. And I watched where the sessions on [[Shortcuts]] and we're going to put a link to that in the                                                       |
| 14:19      | show notes. But there are six new trigger types, which are pretty cool because they                                                                       |
| 14:24      | include email and message. So you can have shortcuts prompt you to run a shortcut when                                                                    |
| 14:31      | somebody emails you or when somebody messages you.                                                                                                        |
| 14:35      | And I'm really hoping that these two are going to tie in with the default email app and default                                                           |
| 14:42      | browser setting that we can do so that I can use [[Airmail]], for example, as my primary mail                                                             |
| 14:48      | application, because that's what I use most of the time. And when somebody emails me in                                                                   |
| 14:52      | [[Airmail]], it can come up and prompt me to run a shortcut.                                                                                              |
| 14:55      | Yeah.                                                                                                                                                     |
| 14:56      | Because that would be awesome.                                                                                                                            |
| 14:57      | Yeah, what kind of shortcuts would you build on an incoming email?                                                                                        |
| 15:01      | Well, I mean, right now I'm moving house. So when my solicitor or the mortgage company                                                                    |
| 15:07      | or somebody emails me, then I would have it prompt me to open the relevant [[OmniFocus]] project.                                                         |
| 15:14      | So I can check off tasks and check what's outstanding there. And that's just the first                                                                    |
| 15:19      | thing that I thought of, like, you know, it would integrate with [[OmniFocus]]. Because if                                                                |
| 15:23      | you use [[Apple Reminders\|Reminders]], you can actually have [[Apple Reminders\|Reminders]] prompt you, this is an iOS 13, when you're                                                             |
| 15:27      | messaging with somebody to ask them about something.                                                                                                      |
| 15:31      | But it doesn't work with email yet. But [[Shortcuts]] is so much better. So the only thing is, email                                                      |
| 15:39      | a message, unfortunately, will prompt you, would you like to run your shortcut? But we'll                                                                 |
| 15:44      | get to some of the better ones in a moment.                                                                                                               |
| 15:46      | Well, when I first heard about this, I'm like, oh, that's bad. You know, I don't want shortcuts.                                                          |
| 15:51      | I don't want my email getting into my life even further. But then I got thinking, there                                                                   |
| 15:55      | are times in my life where I'm really waiting for an email. Sometimes I'm trying to settle                                                                |
| 16:00      | a case for a client or whatever. And I have this urge to, you know, to check email frequently.                                                            |
| 16:07      | And my usual workflow for that is just to set the person as a VIP. But you don't always                                                                   |
| 16:13      | entirely control that. Like, maybe if you're waiting for a job interview or something,                                                                    |
| 16:17      | I could see circumstances where this could actually make a lot of sense. And it may help                                                                  |
| 16:22      | you avoid going into email more often. I really hope it does work in all email platforms.                                                                 |
| 16:28      | But I guess we'll find out.                                                                                                                               |
| 16:31      | We'll have to wait and see on that.                                                                                                                       |
| 16:33      | And then we've got a new trigger on message, which is kind of related.                                                                                    |
| 16:36      | And then they, they gave us four new triggers as well as email on message as well, which                                                                  |
| 16:41      | are pretty awesome.                                                                                                                                       |
| 16:42      | So last year with iOS 13, we got open app. This year, we got it's sister trigger, which                                                                   |
| 16:49      | is close app. So now when you close an app, it can also run a shortcut, which is great.                                                                   |
| 16:55      | And so I'm modifying my, I have a reading shortcut. So when I start reading, it marks                                                                     |
| 17:02      | it as done in streaks for today, which is great. Except for the fact that if I just                                                                       |
| 17:07      | open the [[Kindle]] app to check the title of my current book to, you know, tell a friend                                                                 |
| 17:10      | about it, then it marks my reading is done for the day. So now what I'm going to do is                                                                    |
| 17:15      | when I open the app, I'm going to start a timer. And then when I close the app, if my                                                                     |
| 17:19      | timer is run out, because I can check I'm using just timers for this, then it will mark                                                                   |
| 17:24      | it as done in streaks. And if not, it can pulse a timer.                                                                                                  |
| 17:27      | Yeah. I thought about you as well with this one because I know that you do a lot of timing                                                                |
| 17:31      | and automatic time tracking stuff. And if you have app based timing, like you open [[OmniFocus]]                                                          |
| 17:37      | and it starts your planning timer. Now you could have it stop the timer when you                                                                          |
| 17:41      | close the app, which is nice.                                                                                                                             |
| 17:44      | Yes, it is. It's so nice. The only thing that I've yet to see, and I'm just going to play                                                                 |
| 17:49      | with this right now live on air. Where is the app trigger? Open app. There we go. I have                                                                  |
| 17:58      | no apps. There we go. That's good. It opens and goes, there are no apps. I'm going to                                                                     |
| 18:04      | see maybe if I can find out which, no, I still can't find out which app is running, which                                                                 |
| 18:10      | is really annoying because I would love to have this do for any application. And then                                                                     |
| 18:15      | I could just filter stuff and use ifs and so on. But instead, I'll have to continue                                                                       |
| 18:19      | with my current system of figuring things out from there.                                                                                                 |
| 18:23      | Yeah. One of the things that I forgot to mention at the top of the show is that the shortcuts                                                             |
| 18:27      | colours are more colourful now. They're not quite as muted. It looks nice.                                                                                |
| 18:32      | Yeah, it is nice. It's a little bit more vibrant and adds a bit more back.                                                                                |
| 18:37      | Now a trigger because with the new operating system and the [[Apple Watch]] update, they're                                                                   |
| 18:43      | really making a big push on sleep. And [[Mike Schmitz\|Mike]] and I talked about this over on [[Focused]] podcast.                                        |
| 18:47      | I'm sure you guys have probably talked about it on [[Nested Folders]] as well. But the big                                                                |
| 18:51      | deal with sleep is not getting a pretty alarm. It's actually getting enough sleep.                                                                        |
| 18:56      | I know. And I like that the shortcuts team was able to get on that bandwagon too because                                                                  |
| 19:02      | now going to sleep is a trigger.                                                                                                                          |
| 19:05      | Yeah, it is. So they added sleeping as a whole feature to the [[Apple Watch]] and to your iPhone.                                                             |
| 19:12      | And it syncs across devices, which is great. So it's automatically going to put all of                                                                    |
| 19:16      | your devices in do not disturb at the same time for sleep, which is great. And you can                                                                    |
| 19:21      | run shortcuts as part of this with the wind down and when you're going to sleep and things                                                                |
| 19:26      | like that.                                                                                                                                                |
| 19:27      | And that is just amazing because now you can customise it. I've already been playing.                                                                     |
| 19:32      | I currently have weekday and weekend bedtimes, which is something that I've been looking                                                                  |
| 19:35      | forward to for a really long time. Previously, the bedtime feature inside the clock app was                                                               |
| 19:42      | you're doing this every day or just pick the days. But that's it. You have one, you've                                                                    |
| 19:46      | got one schedule and that's it. And now you can have multiple schedules, which let's be                                                                   |
| 19:51      | honest is more realistic even if maybe it's not the best for us. Most of us tend to go                                                                    |
| 19:55      | to bed a little later, get up a little later at the weekends. And now you can just have                                                                   |
| 20:00      | all of that integrated and have it run shortcuts, which is awesome.                                                                                       |
| 20:05      | Rose, you know, I'm going to have to install the beta on my watch now. And it's, I think                                                                  |
| 20:10      | it's your fault.                                                                                                                                          |
| 20:11      | I'm sorry. I would wait until beta two. Don't forget mine rebooted because I washed my hands                                                              |
| 20:15      | earlier and not because I got my watch wet.                                                                                                               |
| 20:18      | I want to play with these toys. So we're going to talk, we're going to do a whole [[Mac Power Users]]                                                     |
| 20:20      | episode on betas this weekend. So like, how can I do that show if I haven't                                                                               |
| 20:25      | loaded and [[Stephen Hackett\|Stephen]] will do it.                                                                                                       |
| 20:28      | Yeah, [[Stephen Hackett\|Stephen]] will do it. That's always a good reason. Do you have a Mac museum?                                                     |
| 20:34      | Yeah. All right. So sleep is a trigger. So start thinking about that. I mean, what are                                                                    |
| 20:39      | the kinds of things we would want to automate when we go to sleep? Well, obviously do not                                                                 |
| 20:44      | disturb mode going on would be one, maybe set your device to dark mode. So if you pick                                                                    |
| 20:50      | it up in the middle of the night, you don't wake up your spouse. I can just sitting here,                                                                 |
| 20:54      | I can think of a bunch of good, good things to do with sleep.                                                                                             |
| 20:56      | Yeah, I've experimented yesterday with wind down and it automatically started [[Dark Noise]]                                                              |
| 21:03      | with one sound, which was the leaves through the trees recently added sound and open the                                                                  |
| 21:08      | [[Kindle]] app for me for the wind down, which was pretty nice. And then for bed, it started                                                              |
| 21:14      | the [[Dark Noise]] rain sound, my custom rain sound for an hour, which was really nice.                                                                   |
| 21:19      | I cannot wait for [[Dark Noise]] to get updated for the onscreen widgets. Yeah. The battery                                                               |
| 21:25      | level is now a trigger. As I say, so when you're at [[WWDC]] next year, then you can automatically                                                        |
| 21:31      | have it put your device into low power mode when you hit 99% battery. But of course, by                                                                   |
| 21:38      | this time next year, I'll be running iOS 15, I suspect. Yeah, you will. But you know, battery                                                             |
| 21:45      | level is always because there's cool automations you could make based on where your battery                                                               |
| 21:49      | level is, like saying, what if I could, you know, have a low power mode? I think I've                                                                     |
| 21:54      | been covered this in the [Shortcuts Field Guide](https://learn.macsparky.com/courses/category/siri-shortcuts). But the gating problem was always you have |
| 21:59      | to be aware to run the shortcut. And now you don't, there's a trigger that does it for                                                                    |
| 22:05      | you. So it just it looks that if [[Shortcuts]] can monitor battery level and do that in kind                                                              |
| 22:09      | of conversely, when you plug into a charger, that can also be a trigger now. So plugging                                                                  |
| 22:14      | it into a charger, you can do, you can turn off all that stuff you had, you know, power                                                                   |
| 22:19      | saving stuff you did, since you plug it into a charger, it really makes automation for                                                                    |
| 22:23      | battery management. It gives you almost all the powers. The user. Which is exactly what                                                                   |
| 22:28      | we want. Yeah. Yeah, like battery level, I can see a lot of people using this like,                                                                       |
| 22:32      | hey, my phone set 5% battery, like get my current location and email it to people if                                                                      |
| 22:37      | I'm not at home. So that if my phone does run out of battery, then, you know, people                                                                      |
| 22:43      | know where I am. So if you're out for the day and your, your phone's running out of                                                                       |
| 22:46      | battery, then people still know where you were and send some like a message that says,                                                                    |
| 22:50      | hey, my phone's hit 5% battery, but I'm here and I'm fine. It's all good. You know, no                                                                    |
| 22:54      | need to tell your parents that's automated. I'm just thinking about the time that you                                                                     |
| 22:57      | went off the grid and me and Naomi had these visions of what happened to you the whole                                                                    |
| 23:02      | year. And it turned out I was asleep at home because it was the wrong day for my flight.                                                                  |
| 23:06      | This episode of the Automators is brought to you by Microsoft. Learn about building                                                                       |
| 23:14      | intelligent iOS apps that scale at Microsoft. Microsoft believes any developer should be                                                                  |
| 23:20      | able to build, deploy and scale their apps without having to worry about managing services                                                                |
| 23:25      | or underlying infrastructure. Whether you are an Objective C or a Swift developer, Azure                                                                  |
| 23:30      | has what you need to ship your apps faster and with more confidence. There's all kinds                                                                    |
| 23:34      | of cool stuff you can do with Azure like build in the cloud, test on real devices, automatically                                                          |
| 23:39      | distribute to beta testers and the app store and monitor your apps with real-time crash                                                                   |
| 23:44      | reports and analytics. You can even add pre-built AI services into your app to make them more                                                             |
| 23:49      | intelligent. And if you're a game developer, you can get a complete back-in platform for                                                                  |
| 23:54      | iOS games with real-time analytics, player management, live ops and more. Here's what                                                                     |
| 23:59      | you need to do. They've set up a page where you can learn all about building intelligent                                                                  |
| 24:04      | iOS apps that scale, aka.ms/iosandazure. Microsoft takes iOS development seriously.                                                                       |
| 24:12      | They're really supporting app developers. If you're a developer and you want to get                                                                       |
| 24:16      | help with Azure, get on board. And our thanks to Microsoft for supporting the automators                                                                  |
| 24:21      | and all of RelayFM. Just head to aka.ms/iosandazure to learn more. Thanks, Microsoft.                                                                     |
| 24:31      | So we've talked about the new triggers in [[Shortcuts]], which are pretty darn awesome.                                                                   |
| 24:37      | Let's be honest there. So congratulations, [[Shortcuts]] team. If you're listening, you are                                                               |
| 24:42      | owed lots of pets on the back, especially because most triggers in [[Shortcuts]] can now                                                                  |
| 24:48      | run automatically. Amen.                                                                                                                                  |
| 24:50      | I can hear the crowd screaming at that. Yes, the automators crowd. They're screaming right                                                                |
| 24:54      | now. They're screaming in their cars or screaming at home while they're staying home. But either                                                          |
| 25:00      | way, one of the big headaches that both of us have talked about in a very common email                                                                    |
| 25:05      | we get from listeners is, hey, your automations are really cool, but I have to hit a confirmation                                                         |
| 25:10      | dialog every time it runs. So the automation really isn't automatic. And they were right.                                                                 |
| 25:16      | And so we were really hoping that they would come up with a way to allow us to run automations                                                            |
| 25:21      | without doing that confirmation. And for a big pile of the triggers, that is now the                                                                      |
| 25:26      | case.                                                                                                                                                     |
| 25:27      | Yes, exactly. So time of day, sleep, workouts, charging, battery level, opening and closing                                                               |
| 25:35      | apps. Some of these previously did make you ask, and some of them may have even like [[NFC]]                                                              |
| 25:42      | tags, would just let you run things automatically. But now most of the triggers can just go.                                                              |
| 25:49      | Even time of day. So I have one that runs at 10 PM at night that just checks some stuff                                                                   |
| 25:54      | and sends me a notification about my only focus statistics. It just works.                                                                                |
| 25:58      | Yeah, I did. I set it up immediately too. I have a large [[DEVONthink]] database and                                                                      |
| 26:05      | getting that synced on the iPad takes some time. So every night now at 2 AM, my iPad                                                                      |
| 26:11      | turns itself on, opens [[DEVONthink]] and just leaves itself going. And then when I wake                                                                  |
| 26:17      | up in the morning, it's always got the most current synchronisation data from [[DEVONthink]].                                                             |
| 26:22      | Which is great, especially when you're still getting something like that set up.                                                                          |
| 26:27      | I've been using it not just for the [[OmniFocus]] stats at the end of the day, but I also tried                                                           |
| 26:33      | it yesterday morning to clock me into work. But then I realised I should probably actually                                                                |
| 26:39      | confirm that I'm working instead of just having it automatically clock me in and out every                                                                |
| 26:44      | day.                                                                                                                                                      |
| 26:45      | Yeah, but this is such a game changer because a lot of automations that before I was hesitant                                                             |
| 26:50      | to use because I'm like, I'm never going to remember to hit the confirmation, the phone                                                                   |
| 26:54      | will be in my pocket. Now all of a sudden, it makes a lot of this stuff possible. So                                                                      |
| 26:58      | I think it's going to really improve automation on mobile devices. The mechanics of it are                                                                |
| 27:04      | when you create the trigger. This is through the Automation tab, just like it was with                                                                    |
| 27:09      | iOS 13. But when you create it, there's actually a checkbox that says, I think display confirmation                                                       |
| 27:16      | or something to that extent, and just automatically turn that off. I think that the default has                                                           |
| 27:21      | it turned on, but you just click the button.                                                                                                              |
| 27:23      | Yeah, ask when running is turned on by default. And my only niggle with [[Shortcuts]] automations                                                         |
| 27:29      | as true automations that run automatically by themselves is they still come up with a                                                                     |
| 27:34      | notification that says your shortcut is running, which is a little bit of a shame, but I can                                                              |
| 27:40      | live with it and I know why it's there and it's there because shortcuts run automatically.                                                                |
| 27:45      | Yeah.                                                                                                                                                     |
| 27:46      | And for the people who aren't aware like, hey, why did my phone just do this stuff? Like                                                                  |
| 27:49      | having the fact that, you know, it comes up and says your shortcut is running, then you                                                                   |
| 27:53      | can tap on it, it'll take you to [[Shortcuts]]. And hopefully from there, people will figure                                                              |
| 27:57      | out what's going on. I wish I could disable that. I know you can disable notifications                                                                    |
| 28:02      | from [[Shortcuts]] completely with a bit of a hack. I'm not sure I'm willing to do that                                                                   |
| 28:06      | because I do actually use notifications. And I don't want to divert everything to [[Pushcut]],                                                            |
| 28:11      | which I could do, but I would, I would like to keep [[Shortcuts]] notifications                                                                           |
| 28:15      | and just disable that. But I see why it's there.                                                                                                          |
| 28:17      | See, I don't find it that much of a problem because it is, the shortcut is running. It's                                                                  |
| 28:22      | not, is the shortcut going to run? You know, it actually does run. It just gives you.                                                                     |
| 28:27      | Well, I mean, in my testing, it was like, is this actually going to work? And so what                                                                     |
| 28:31      | did I test it with a notification? So it's like two notifications in a row because I                                                                      |
| 28:36      | like to end a lot of shortcuts with notifications because then they tell me that they did stuff.                                                          |
| 28:40      | Yeah. It's like, Hey, I did this Rose. It's good. Yeah. Yeah. Which is great. But then                                                                    |
| 28:45      | I get double notifications. So I guess I'm just going to need to train myself out of                                                                      |
| 28:48      | that habit or not have it inside of the, the automated ones and figure out something for                                                                  |
| 28:55      | when I'm running it in non-automated passion.                                                                                                             |
| 28:57      | But so many of these, like, you know, the, you know, starting a workout, you can now                                                                      |
| 29:01      | have it start a workout and put yourself in a state without having to fiddle with your                                                                    |
| 29:06      | phone, you know, plugging it into car play. There's just all the stuff that I really wanted                                                               |
| 29:11      | to go a step further with, but never did because I didn't want to hit that confirmation box                                                               |
| 29:16      | is now possible. So this is awesome. I, I'm real happy that they got this in.                                                                             |
| 29:21      | Yeah. And especially the workout stuff combined with the fact [[Shortcuts]] is now on the Apple                                                           |
| 29:25      | Watch. Yeah.                                                                                                                                              |
| 29:26      | That is great because now you can actually start, and you can have a specific shortcut                                                                    |
| 29:31      | in a specific, uh, complication on your [[Apple Watch]]. So you can switch to your, your workout                                                              |
| 29:36      | face and have, um, you know, your shortcut there and just tap on it and it'll start the                                                                   |
| 29:41      | workout. It'll play your music, put you in, do not disturb it and so on. And then when                                                                    |
| 29:45      | you end the workout, it'll do a bunch of other things, you know, whatever it is you                                                                       |
| 29:48      | tell it to do and you can do it all from your watch and just leave your phone at home.                                                                    |
| 29:51      | We love that.                                                                                                                                             |
| 29:52      | Yes. Agreed. But that's not the end of our new toys. There's so much more. Um, the,                                                                       |
| 29:58      | you know, the feature that I love most about keyboard mice for that I've always wanted in                                                                 |
| 30:02      | [[Shortcuts]] is the ability to copy and paste actions. Hallelujah.                                                                                       |
| 30:07      | And we got it.                                                                                                                                            |
| 30:08      | Hallelujah.                                                                                                                                               |
| 30:09      | Yeah. We got it. Ah, okay. So I still not played that much with this. Well, how did                                                                       |
| 30:14      | you feel about it the first time you tried it, David?                                                                                                     |
| 30:17      | It's just, you know, that's what we've needed. It's like, yes. I mean, that, I don't know                                                                 |
| 30:23      | how else to say, I mean, I mean, so much better than trying to rebuild or build shortcuts                                                                 |
| 30:30      | as subroutines that you embed in other shortcuts, you know, that, that makes sense. And you                                                               |
| 30:34      | can also now open on your iPad two instances of [[Shortcuts]] and you can, you know, making                                                               |
| 30:40      | copy and paste even more useful because you can see both the source and destination shortcut.                                                             |
| 30:46      | Yes. Exactly. Um, so, you know, if you're there and you're trying to perhaps split                                                                        |
| 30:52      | up a shortcut, what you can do, um, at least this is how I've been doing it. Uh, I just                                                                   |
| 30:56      | tap on the little icon in the top left-hand corner of a shortcut action. Okay. So for                                                                     |
| 31:01      | example, the little yellow square next to the word comment or text. Um, and then on                                                                       |
| 31:06      | that from there, you can show info, you can mark it as a favourite. You could duplicate                                                                   |
| 31:10      | that action, which is really useful if you've already got a textbook and you need to have                                                                 |
| 31:15      | almost the same text with something a little bit different in there and just move some                                                                    |
| 31:18      | variables around in another section of your "if". You can just duplicate. You can also copy                                                               |
| 31:23      | and then there's paste above and paste below. So when you want to put it in, you can, you                                                                 |
| 31:29      | know, just paste it above or below one that already exists. And of course, from there,                                                                    |
| 31:33      | you can also remove. Uh, if you didn't want to tap the cross in the top right, I'm not                                                                    |
| 31:37      | quite sure how useful remove is in that context, but we'll see.                                                                                           |
| 31:41      | You know, what I haven't tried as I'm sitting here is copying multiple as a block. I don't                                                                |
| 31:47      | think that's possible. I don't think so either. So far, I've only been able to figure out                                                                 |
| 31:52      | how to copy one at a time. Yeah. Uh, but, you know, for things that have a more complex                                                                   |
| 31:58      | setup, like get contents of URL, that action, uh, is going to be very, very useful. Yeah.                                                                 |
| 32:04      | Agreed. Yeah. So all of my [[Airtable]] shortcuts are about to drastically improve. Amen. Amen.                                                           |
| 32:09      | I, I'm just so glad. I feel like a lot of the stuff we talked about last year, we got                                                                     |
| 32:15      | this year. I'm, I'm very happy because when you want, when we watched the short, the,                                                                     |
| 32:19      | uh, the keynote, they didn't even mention. So I'm like, well, did [[Shortcuts]] get love                                                                  |
| 32:23      | this year? And it did. Oh yeah. All the love. Um, we've been talking off and on throughout                                                                |
| 32:28      | the show about [[Shortcuts]] and the [[Apple Watch]], but now there's [[Shortcuts]] on the [[Apple Watch]].                                                       |
| 32:33      | Yes, there is. And, um, I alluded to this earlier, but what you can do is, uh, one app                                                                    |
| 32:40      | can now have multiple complications in, um, so say, for example, you've got that, um,                                                                     |
| 32:47      | what is it? The infograph face, infograph modular. That's what I'm thinking of. Okay.                                                                     |
| 32:52      | And then across the bottom of that, you've got three small square icons. So say, for                                                                      |
| 32:58      | example, [[Carrot Weather]], because [[Carrot Weather\Carrot]] is definitely going to do this. I can tell they're                                         |
| 33:01      | going to do this. They can have those three slots filled and that can be three different                                                                  |
| 33:07      | pieces of information. So now if we take that to [[Shortcuts]], [[Shortcuts]] can have three different                                                    |
| 33:12      | shortcuts inside of those complications. So you tap it and it runs that shortcut. And                                                                     |
| 33:17      | then the one on the right runs a different shortcut, for example.                                                                                         |
| 33:20      | Yeah. Like for instance, let's say that you have the [[HomeKit]], uh, complication because                                                                |
| 33:27      | you like to turn your lights off and on from your watch, but really you're only running                                                                   |
| 33:31      | two different scenes. You know, you open [[HomeKit]] and you, there's only two scenes you're                                                              |
| 33:34      | really picking from every day. You could make a shortcut triggering each one of those scenes                                                              |
| 33:38      | individually and put two shortcuts on your watch. So like you could say studio lighting                                                                   |
| 33:43      | and you push the button and you say bedroom lighting. And you could have those without                                                                    |
| 33:47      | having to go through the [[HomeKit]] app and you could even add some, you know, play some                                                                 |
| 33:51      | music to it or whatever. And, um, that's awesome. I say, I'm using the word awesome                                                                       |
| 33:57      | too much today, but I'm very excited about all these [[Shortcuts]] tools.                                                                                 |
| 34:00      | I mean, I think we should be very excited about all these shortcuts because there's                                                                       |
| 34:03      | a, there's a lot going on here.                                                                                                                           |
| 34:05      | Yeah. It's not like last, last year we got a complete rewrite. Last year our minds were                                                                   |
| 34:09      | blown this year. I feel more like I've had a, you know, if last year was turkey dinner,                                                                   |
| 34:15      | this is like the pumpkin and the chocolate pie at the end. It's like, yes, this is what                                                                   |
| 34:20      | I needed. Yeah.                                                                                                                                           |
| 34:21      | Yes. Yeah. Yeah. And then afterwards there, there may be the, wow, I really have re-indulged                                                              |
| 34:26      | in this AKA I've installed all the bases and now my, my life is hilariously unstable.                                                                     |
| 34:31      | Well, then you just take a nap like you do. Exactly. Exactly. So the analogy continues                                                                    |
| 34:37      | to work.                                                                                                                                                  |
| 34:38      | This is kind of related. I am going to make an update to the Shortcuts Field Guide. It's                                                                  |
| 34:42      | going to be a free update this year because I don't have to re-record everything, but                                                                     |
| 34:45      | the, um, but all this stuff, I'm going to make videos for if your a [[Shortcuts]] customer                                                                |
| 34:50      | that, that will, will be when it releases, I'll have a bunch of videos on this. It's                                                                      |
| 34:54      | going to be fun.                                                                                                                                          |
| 34:55      | And I'm going to be updating [Take Control of Shortcuts](https://www.takecontrolbooks.com/shortcuts/) as well for anybody who's, who's                    |
| 35:00      | got that book. It's going to need an update after all this.                                                                                               |
| 35:03      | Yeah, definitely. [[Apple Watch]], well, we're talking about the [[Apple Watch]]. Let's talk                                                                      |
| 35:07      | about the [[Apple Watch]] related actions because we get some new actions related [[Apple Watch]].                                                                |
| 35:11      | Yeah, we did. So this is one I asked for. And I'm sure I bugged the [[Shortcuts]] team about                                                              |
| 35:16      | this like 8,000 times. So thank you to everybody else who also bugged the [[Shortcuts]] team about                                                        |
| 35:21      | this by filing feedback. Uh, we can change our watch faces by a shortcut action now.                                                                      |
| 35:26      | So when I clock into work, it can automatically change my watch face to a work watch face.                                                                |
| 35:31      | And when I clock out, it can automatically change it to my after work, uh, watch face.                                                                    |
| 35:35      | And when I change timers with [[Timery]] for my time tracking, I can change watch faces to                                                                |
| 35:42      | be appropriate to what I'm doing. Um, and I'm just so excited.                                                                                            |
| 35:45      | This is such a game changer, Rose. And like, not even like just clocking to work. You could                                                               |
| 35:49      | also do it on time based stuff. Like say, Oh yeah, after five o'clock, just turn it onto                                                                  |
| 35:55      | my evening face or at 10 and put on my bedtime face or at, you know, in the morning, put                                                                  |
| 36:00      | on my planning face. Uh, yeah. Like the sleep one, it automatically changes my watch face                                                                 |
| 36:06      | to my sleep watch face. Yes. I have a sleep watch face. It's the, uh, the, the extra large                                                                |
| 36:10      | in red. Um, just so that I, if I do look at it, it doesn't ruin my eyesight at night.                                                                     |
| 36:15      | Um, but you know, this is amazing. I thought [[Apple]] added a special face when you put it                                                                   |
| 36:19      | into sleep mode now. They did, they did, but I like to have, uh, my, my standard one at                                                                   |
| 36:24      | the moment because I'm still playing with things.                                                                                                         |
| 36:26      | Yeah. Well, I'll tell you this, I feel like this is great and a lot of people use the                                                                     |
| 36:31      | same face, but now that you, if you're an automator, you can make your, you know, bend                                                                    |
| 36:36      | your watch to your will. Like I could have a podcast watch face. And if I have a calendar                                                                 |
| 36:41      | event that has the word podcast and it could give me podcast data on my watch. I, I mean,                                                                 |
| 36:46      | I can't even begin to think what I'm going to do with this, but I am really looking forward.                                                              |
| 36:51      | I've got to install the beta. It's, if my watch breaks, it's Rose's fault. Just so                                                                        |
| 36:56      | we're clear.                                                                                                                                              |
| 36:57      | Okay. So here's the thing. I read on [Reddit](https://reddit.com). Um, well, my watch was busy installing the                                             |
| 37:03      | watchOS beta that apparently these actions also work if you're not on the watchOS beta.                                                                   |
| 37:09      | So if you're just going to do it for these things, David, please do me a favour and try                                                                   |
| 37:13      | the actions, um, beforehand, um, because I, I think you won't have the [[Shortcuts]] app on                                                               |
| 37:19      | your watch yet, but you're doing it for research, right?                                                                                                  |
| 37:21      | Yes.                                                                                                                                                      |
| 37:22      | That's what it's all for.                                                                                                                                 |
| 37:23      | Yeah. For the people.                                                                                                                                     |
| 37:24      | For the people.                                                                                                                                           |
| 37:25      | Yeah. For the people.                                                                                                                                     |
| 37:26      | Other actions, you can change it into theatre mode, which was what I used.                                                                                |
| 37:30      | Yeah.                                                                                                                                                     |
| 37:31      | The cinema mode.                                                                                                                                          |
| 37:32      | Yeah.                                                                                                                                                     |
| 37:33      | I used to do that at night because, um, I didn't want it to wake up in the middle                                                                         |
| 37:37      | night and, you know, light up my, my wife, you know, keep her awake. Uh, but now the                                                                      |
| 37:41      | new sleep feature, they've got something else.                                                                                                            |
| 37:44      | You can put it on silent mode, the water lock, you can trigger the water lock.                                                                            |
| 37:49      | Yeah.                                                                                                                                                     |
| 37:50      | So, um, I'm, I'm going to combine this with my swimming.                                                                                                  |
| 37:52      | So I have a swimming workout or a, yeah, it's a swimming workout, um, workout.                                                                            |
| 37:58      | Um, and one of the things that we'll do now is it will, as well as starting my swimming                                                                   |
| 38:02      | workout, uh, it's also going to turn on the water lock.                                                                                                   |
| 38:06      | And then when I finished, I can turn off the water lock.                                                                                                  |
| 38:08      | Did you see the guy that did the slow motion video of the [[Apple Watch]] ejecting the water?                                                                 |
| 38:13      | I did not.                                                                                                                                                |
| 38:14      | That sounds pretty cool.                                                                                                                                  |
| 38:15      | I'm going to put it in the show notes.                                                                                                                    |
| 38:16      | It's, it's, it's amazing.                                                                                                                                 |
| 38:18      | I never got so impressed with little speakers and drops of water before.                                                                                  |
| 38:23      | Yeah.                                                                                                                                                     |
| 38:24      | Yeah.                                                                                                                                                     |
| 38:25      | It's cute.                                                                                                                                                |
| 38:26      | You can also control the always on trigger.                                                                                                               |
| 38:28      | Yes.                                                                                                                                                      |
| 38:29      | And, uh, yeah.                                                                                                                                            |
| 38:30      | Yeah.                                                                                                                                                     |
| 38:31      | Which I'm thinking that maybe I don't need my watch always on while I'm at work.                                                                          |
| 38:34      | Um, but it would be pretty cool to have it the rest of the time.                                                                                          |
| 38:37      | So I might build that into my clocking and clocking out shortcut.                                                                                         |
| 38:40      | I really, I really like the always on watch.                                                                                                              |
| 38:42      | I got the new one last year.                                                                                                                              |
| 38:43      | Same.                                                                                                                                                     |
| 38:44      | Yeah.                                                                                                                                                     |
| 38:45      | It's lovely to have, but sometimes I feel like I don't need it.                                                                                           |
| 38:48      | And especially with the watchOS beta, um, I don't know how your battery life is doing,                                                                    |
| 38:52      | uh, David, on your phone.                                                                                                                                 |
| 38:54      | Um, but I bought the, the battery pack from [[Apple]] for, for my 11, uh, kind of for this.                                                                   |
| 39:00      | And I'm kind of glad I did because I am going through battery faster, not as fast as I have                                                               |
| 39:05      | done with previous betas where I was basically plugged into the largest possible battery pack                                                             |
| 39:09      | I could find from 10 AM, uh, having left my hotel at nine, but, um, you know, it's, it                                                                    |
| 39:15      | is, uh, definitely eating through battery a little bit more.                                                                                              |
| 39:18      | So it's worth being able to turn off the always on, uh, for, for things where you maybe don't                                                             |
| 39:23      | need it, especially if you're on holiday or something and you're not really checking                                                                      |
| 39:26      | the time.                                                                                                                                                 |
| 39:27      | Yeah.                                                                                                                                                     |
| 39:28      | The, uh, the battery tune is always at the very end of the beta process and it, all                                                                       |
| 39:31      | your devices use more battery during the betas, but I mean, one of the reasons why I didn't                                                               |
| 39:36      | feel bad about installing it so many places this year is I'm home.                                                                                        |
| 39:39      | You know, I'm not traveling, doesn't, you know, if something goes wrong, I can rebuild                                                                    |
| 39:44      | it.                                                                                                                                                       |
| 39:45      | It's not the end of the world.                                                                                                                            |
| 39:46      | Uh, the, uh, now you put a note in here about [[Apple TV]] on, um, automations.                                                                               |
| 39:50      | I didn't even realise that was in this.                                                                                                                   |
| 39:53      | Have you played with that?                                                                                                                                |
| 39:54      | Okay.                                                                                                                                                     |
| 39:55      | So the [[Apple TV]] had a bunch of automation actions already in there, like waking your                                                                      |
| 39:58      | [[Apple TV]], opening apps on your [[Apple TV]] and stuff like that.                                                                                              |
| 40:01      | This year, I think I've only spotted two actions, which I'm pretty certain were not there before,                                                         |
| 40:06      | which is switching users on the [[Apple TV]] and starting the screensaver on the [[Apple TV]].                                                                    |
| 40:11      | Um, there may be other actions that are new, but there are quite a few actions to control                                                                 |
| 40:15      | your [[Apple TV]].                                                                                                                                            |
| 40:16      | And especially if you have a shared [[Apple TV]], um, and most people control it by their                                                                     |
| 40:20      | phones because you lost that remote years ago and nobody knows where it is anymore.                                                                       |
| 40:25      | Um, then, uh, you can actually set up a shortcut on everyone's phone that's going to open it                                                              |
| 40:29      | with their user profile.                                                                                                                                  |
| 40:31      | Um, so it'll have their watch history for things and their game history, um, which is                                                                     |
| 40:37      | improved this year in tvOS, I believe.                                                                                                                    |
| 40:39      | I'm just thinking through an automation where I walk in the room where we have our TV and                                                                 |
| 40:45      | my, uh, my shortcuts recognises it and sets my watch face to the one with the [[Apple TV]]                                                                    |
| 40:52      | remote on it.                                                                                                                                             |
| 40:53      | So much to play with.                                                                                                                                     |
| 40:54      | All right.                                                                                                                                                |
| 40:55      | Um,                                                                                                                                                       |
| 40:56      | Oh yeah.                                                                                                                                                  |
| 40:57      | Yeah.                                                                                                                                                     |
| 40:58      | And there's another new action as well that I found.                                                                                                      |
| 40:59      | I haven't found that many.                                                                                                                                |
| 41:00      | Uh, I confess I haven't done a lot of digging, um, but there's two that I found, which is                                                                 |
| 41:04      | recognised sound.                                                                                                                                         |
| 41:05      | Um, and I believe it's supposed to like help you recognise, like, is that a fire truck                                                                    |
| 41:10      | versus an ambulance versus police car?                                                                                                                    |
| 41:12      | Yeah.                                                                                                                                                     |
| 41:13      | Um, and, um, one that's perhaps a little more relevant to you and me, David, show notes                                                                   |
| 41:17      | folder.                                                                                                                                                   |
| 41:18      | So open a particular folder from notes.                                                                                                                   |
| 41:22      | Yeah.                                                                                                                                                     |
| 41:23      | That's great.                                                                                                                                             |
| 41:24      | I mean, I feel like the [[Apple Notes]] application still needs way more love from [[Shortcuts]].                                                         |
| 41:29      | That's not enough.                                                                                                                                        |
| 41:30      | Oh yeah.                                                                                                                                                  |
| 41:31      | I have since the last time we talked, Rose, I am moving in almost entirely to [[Drafts]].                                                                 |
| 41:35      | I've just, you know, he just, [[Greg Pierce\|Greg]] just keeps making the app so much better.                                                             |
| 41:40      | And then when he added the wiki style cross linking, I'm like, why am I fighting this?                                                                    |
| 41:44      | So I'm actually storing data in [[Drafts]].                                                                                                               |
| 41:46      | I've always [[Drafts]] has always been in my dock.                                                                                                        |
| 41:49      | It's always been the app I use to write with, but now I'm actually storing a bunch of text                                                                |
| 41:53      | in there too.                                                                                                                                             |
| 41:54      | It's a great app for that.                                                                                                                                |
| 41:55      | And especially for anybody doing automation stuff, like, yeah, I have things which automatically                                                          |
| 42:00      | create [[Drafts]] and it gets those UIDs and saves them back to [[Airtable]] so that from [[Airtable]],                                                   |
| 42:05      | I then have a formula which creates a URL.                                                                                                                |
| 42:07      | Um, and I can just click on the [[Drafts]] link and open that particular draft.                                                                           |
| 42:10      | Yeah.                                                                                                                                                     |
| 42:11      | I mean, it's, you can make a specifically addressable draft with [[Shortcuts]] and you can't                                                              |
| 42:14      | do that with [[Apple Notes]].                                                                                                                             |
| 42:15      | And that, that makes all the difference.                                                                                                                  |
| 42:17      | Yep.                                                                                                                                                      |
| 42:18      | It really does.                                                                                                                                           |
| 42:19      | All right.                                                                                                                                                |
| 42:20      | So, um, new keyboard shortcuts.                                                                                                                           |
| 42:23      | Yeah.                                                                                                                                                     |
| 42:24      | They added some keyboard shortcuts support to [[Shortcuts]].                                                                                              |
| 42:27      | Um, so, uh, if you, if you press and hold on the command key on the iPad, I'm not going                                                                   |
| 42:33      | to go into too much detail on these because it may change before, you know, this stuff                                                                    |
| 42:37      | comes out in September, um, but you can jump to, for example, the automations folder and                                                                  |
| 42:42      | the gallery, which has automation suggestions in it by the way now, as well as app suggestions.                                                           |
| 42:47      | It will also suggest specific automations that you may want to do.                                                                                        |
| 42:51      | Um, and, uh, you can create new shortcuts and run shortcuts, but that the creating new                                                                    |
| 42:55      | shortcuts and running shortcuts was already there, but there, there's some extra stuff                                                                    |
| 42:59      | in there too.                                                                                                                                             |
| 43:00      | The text field shortcut is still action is still minuscule.                                                                                               |
| 43:04      | All right.                                                                                                                                                |
| 43:05      | I do wish they would, uh, [[Drafts]].                                                                                                                     |
| 43:07      | Yeah.                                                                                                                                                     |
| 43:08      | Sorry.                                                                                                                                                    |
| 43:09      | That's what I have.                                                                                                                                       |
| 43:10      | Well, you know what?                                                                                                                                      |
| 43:11      | Now that I'm working in [[Drafts]], I can do that.                                                                                                        |
| 43:12      | I can just link to a draft note.                                                                                                                          |
| 43:15      | Yep.                                                                                                                                                      |
| 43:16      | And then I'm going to start doing that.                                                                                                                   |
| 43:18      | One more benefit.                                                                                                                                         |
| 43:19      | Um, yes, there used to be a feature when it was [[Workflow]] where you could import [[Workflow]]                                                          |
| 43:26      | files.                                                                                                                                                    |
| 43:27      | Yeah.                                                                                                                                                     |
| 43:28      | And when [[Shortcuts]] first came out, the first version of [[Shortcuts]], um, on iOS, when it                                                            |
| 43:33      | was still a download this from the app store and install it, but it belongs to [[Apple]] app.                                                                 |
| 43:37      | Um, you could still import `.shortcut` files and then last year it went away and people                                                                   |
| 43:43      | were very, very sad.                                                                                                                                      |
| 43:44      | And now it appears to be working again.                                                                                                                   |
| 43:46      | Um, and I say appears to be working again.                                                                                                                |
| 43:48      | I have done it once.                                                                                                                                      |
| 43:50      | It worked fine, but I make no promises that this will still be there when September comes                                                                 |
| 43:54      | because of course, you know, anything can change.                                                                                                         |
| 43:57      | We've got a couple of months here.                                                                                                                        |
| 43:58      | Yeah.                                                                                                                                                     |
| 43:59      | Agreed.                                                                                                                                                   |
| 44:00      | We, it just, um, but you know, and I always thought that it was a security thing, but                                                                     |
| 44:03      | they brought it back.                                                                                                                                     |
| 44:04      | So maybe it was a programming thing.                                                                                                                      |
| 44:06      | Um, I mean, we also got to run shortcuts automatically at a specific time.                                                                                |
| 44:10      | So tell, tell [[Apple]] everything's fine here.                                                                                                               |
| 44:13      | Um, you know, if anybody asks, it's all good.                                                                                                             |
| 44:15      | No, I agree.                                                                                                                                              |
| 44:16      | I feel like we've really kind of hit the jackpot for this.                                                                                                |
| 44:19      | Well, I'll call this the second year of the new [[Shortcuts]] because I feel like last year                                                               |
| 44:23      | was a reset.                                                                                                                                              |
| 44:24      | Um, and I think that's, we're getting exactly the kind of stuff we would like.                                                                            |
| 44:28      | I would have liked to have a few more actions, but you know, um, I haven't heard anything                                                                 |
| 44:33      | yet as we record this show, whether memory allocation or some of the, the typical developer                                                               |
| 44:38      | problems have been solved or addressed or not.                                                                                                            |
| 44:41      | But well, if we find out, we will, uh, we'll update you on the next episode.                                                                              |
| 44:46      | Yeah.                                                                                                                                                     |
| 44:47      | I've seen anecdotal evidence that it's running better in the background.                                                                                  |
| 44:50      | Um, but I've not seen like specific data as to, Hey, this shortcut previously could                                                                       |
| 44:55      | not run in the background.                                                                                                                                |
| 44:56      | And now it does.                                                                                                                                          |
| 44:57      | Yeah.                                                                                                                                                     |
| 44:58      | Um, so.                                                                                                                                                   |
| 44:59      | Yeah.                                                                                                                                                     |
| 45:00      | But I do think that, you know, they're continuing to push forward and I love it.                                                                          |
| 45:03      | Yeah.                                                                                                                                                     |
| 45:04      | And, uh, there's a two other little hidden gems, um, which I found, um, and I'm sure                                                                      |
| 45:10      | a lot of other people have found as well, which are when you create a new shortcut previously,                                                            |
| 45:14      | it would save the shortcut to the bottom of your list, which when you have 600 odd shortcuts                                                              |
| 45:20      | is a long way to scroll, or if you did and still do tap on the word shortcuts at the                                                                      |
| 45:24      | bottom of your screen, it would jump to the bottom.                                                                                                       |
| 45:27      | But now new shortcuts ultimately saved to the top of your list, which puts them right                                                                     |
| 45:32      | at the top when it comes to, um, you know, widgets and stuff like that, which is pretty                                                                   |
| 45:37      | cool.                                                                                                                                                     |
| 45:38      | Yeah.                                                                                                                                                     |
| 45:39      | Uh, I like that.                                                                                                                                          |
| 45:40      | Um, and then the other thing, uh, that, um, I found is, uh, there is a new accessibility                                                                  |
| 45:46      | trigger which can run shortcuts.                                                                                                                          |
| 45:48      | Um, in fact, there are two new accessibility triggers, uh, tapping on the back of your                                                                    |
| 45:53      | phone twice and tapping on the back of your phone three times and that can run a shortcut.                                                                |
| 45:59      | And so I've set it up.                                                                                                                                    |
| 46:00      | So if I tap the back of my phone twice, it'll ask me what I want to add to my grocery list.                                                               |
| 46:03      | And if I tap it three times, it'll ask me what errand I want to run.                                                                                      |
| 46:07      | See, I, I'm going to do that.                                                                                                                             |
| 46:08      | I just haven't figured out which shortcuts are worthy.                                                                                                    |
| 46:11      | Yeah.                                                                                                                                                     |
| 46:12      | Well, the other thing that you can do, which I saw a couple of people saying that they                                                                    |
| 46:14      | were going to do is set the double tap to just open your camera, which is pretty cool.                                                                    |
| 46:19      | Yeah.                                                                                                                                                     |
| 46:20      | Um, very smart.                                                                                                                                           |
| 46:21      | If you're like using your phone, what I usually do, especially right now, I have the battery                                                              |
| 46:25      | case attached all the time.                                                                                                                               |
| 46:26      | So I just press the, the dedicated button on the battery case and I'm good.                                                                               |
| 46:30      | Um, but, um, I usually, uh, if I don't have the battery case, I swipe the notifications                                                                   |
| 46:36      | down and then swipe right.                                                                                                                                |
| 46:37      | Or even two taps for camera, three taps for flashlight.                                                                                                   |
| 46:40      | Yeah.                                                                                                                                                     |
| 46:41      | That, that would be a pretty awesome idea, actually.                                                                                                      |
| 46:44      | Um, and technically that's an accessibility feature, but I, I feel accessibility and automation                                                           |
| 46:50      | definitely, uh, link together in many cases.                                                                                                              |
| 46:53      | And I think that this is one where it definitely benefits everybody.                                                                                      |
| 46:56      | Yeah, they do.                                                                                                                                            |
| 46:59      | This episode of automators is brought to you by DEVONthink, the flagship product from                                                                     |
| 47:02      | DEVONtechnologies.                                                                                                                                        |
| 47:04      | DEVONthink it's a professional document and information management application for                                                                        |
| 47:08      | the Mac house you collect, file, organise, edit and annotate all kinds of documents so                                                                    |
| 47:14      | you can reach digital organisational heaven, archive all of your email with the enhanced                                                                  |
| 47:20      | email archiver and scan your paper documents with the revised scanner interface.                                                                          |
| 47:24      | You can even imprint PDFs with custom stamps before giving them to others.                                                                                |
| 47:29      | Then organise your documents in any way you want.                                                                                                         |
| 47:32      | Smart groups that you create different views on your data and the integrated AI assists                                                                   |
| 47:37      | you with filing and searching.                                                                                                                            |
| 47:38      | Plus, you can automate your workflow, create smart rules and add flexible reminders to                                                                    |
| 47:44      | any document.                                                                                                                                             |
| 47:45      | The, even their non-programmers easily automate many parts of the workflow so you can delegate                                                            |
| 47:50      | the boring repeating tasks to DEVONthink.                                                                                                                 |
| 47:53      | And finally, sync your data securely between your devices using your preferred web storage                                                                |
| 47:58      | or even directly on your local network.                                                                                                                   |
| 48:01      | Sink your data with you with DEVONthink's iOS companion application.                                                                                      |
| 48:05      | You can get 10% of DEVONthink 3 or upgrade to it right now.                                                                                               |
| 48:09      | Just go to devontechnologies.com/automators.                                                                                                              |
| 48:14      | That's devontechnologies.com/automators for 10% off.                                                                                                      |
| 48:18      | Our thanks to DEVONtechnologies for their support of the show and all of Relay FM.                                                                        |
| 48:24      | So we didn't just get shortcuts improvements this year.                                                                                                   |
| 48:27      | We also got improvements to [[HomeKit]] and yeah, I feel like that's a worthy topic for automators.                                                       |
| 48:34      | Yeah.                                                                                                                                                     |
| 48:35      | And I think I'm going to start at the bottom of our notes here in the outline, David and                                                                  |
| 48:40      | say how amazed I was to see the words [[Amazon]] and Google on the screen during [[WWDC]] and that                                                            |
| 48:49      | [[Apple]] are working with them and sharing [[HomeKit]].                                                                                                      |
| 48:52      | I did see some, some companies, I think it was on venture beat saying that [[HomeKit]] is                                                                 |
| 48:56      | being open sourced.                                                                                                                                       |
| 48:57      | I'm not sure exactly how it's being shared.                                                                                                               |
| 49:00      | So I'm going to stick with the word share, but I'm really hoping that this means that                                                                     |
| 49:04      | we're going to see an end to the days of [[HomeKit]] support coming soon, also known as "never".                                                          |
| 49:10      | Because it does feel like a lot of products ship and say we're going to add [[HomeKit]] support                                                           |
| 49:13      | later and then they don't do it.                                                                                                                          |
| 49:15      | So I'm hoping that by [[HomeKit]] support being the thing that you need to use to make these                                                              |
| 49:21      | devices work on iOS and with [[Amazon]] devices and with the Google products, that we're                                                                      |
| 49:27      | going to have a much better unified experience for everybody, regardless of what platform                                                                 |
| 49:33      | you're using.                                                                                                                                             |
| 49:34      | And also that all the stuff that works with my HomePod will also work with my [[Sonos One]]                                                               |
| 49:40      | and I got an [[Amazon Echo\|Echo Dot]] recently, David.                                                                                                   |
| 49:44      | So I'm really hoping that this is going to significantly improve things.                                                                                  |
| 49:48      | Well, the announcement was a little vague.                                                                                                                |
| 49:51      | They said that [[Apple]] is working with Google and [[Amazon]] and it sounded like for a unified                                                                  |
| 49:57      | standard.                                                                                                                                                 |
| 49:58      | That's kind of, that's what I heard from it.                                                                                                              |
| 50:00      | It's thinking.                                                                                                                                            |
| 50:01      | Yeah.                                                                                                                                                     |
| 50:02      | They did say the words unified standard.                                                                                                                  |
| 50:03      | So when you get, so when you go to [[Amazon]] to buy a home automation device, you don't                                                                      |
| 50:09      | have to look to say [[Amazon]] supported, Google supported, [[HomeKit]] supported, that there would                                                           |
| 50:13      | just be one standard in theory that it would work with all devices.                                                                                       |
| 50:17      | And this is what should happen, but you've got these multi-billion dollar companies that                                                                  |
| 50:22      | all have egos and all want to say, well, we have the better standard, right?                                                                              |
| 50:26      | And I think part of the thing is that [[Apple]] has not really been super successful.                                                                         |
| 50:31      | I would say that [[HomeKit]] is the least supported of those three standards.                                                                             |
| 50:35      | Unfortunately.                                                                                                                                            |
| 50:36      | So if you can't beat them, join them kind of thing.                                                                                                       |
| 50:39      | And I'm wondering, is Google giving up their standard?                                                                                                    |
| 50:42      | I mean, are we truly going to have one unified standard or is it just that [[Apple|Apple's]] making                                                                 |
| 50:47      | [[HomeKit]] more open so anybody can address it?                                                                                                          |
| 50:50      | I just don't really, I feel like there's details missing on this, but either way, it sounds                                                               |
| 50:55      | like it is going to be more accessible and we're going to have more [[HomeKit]] devices.                                                                      |
| 50:58      | Yes.                                                                                                                                                      |
| 50:59      | Which is always a good thing.                                                                                                                             |
| 51:00      | Having more devices supported, it might even bring down the price.                                                                                        |
| 51:04      | I know that a lot of companies didn't want to work with [[HomeKit]] previously because a                                                                  |
| 51:09      | long time ago you had to have specific chips in your hardware and then they changed it                                                                    |
| 51:12      | to a pure software requirement.                                                                                                                           |
| 51:15      | Which was better, but then some devices like, I think it was the [[Sonos Play 1\|Sonos Play: 1]], didn't have                                             |
| 51:20      | enough space on the chips to update to stuff with [[AirPlay\|AirPlay 2]], which is part of [[HomeKit]].                                                   |
| 51:25      | So for some devices, you know, that was a problem, but hopefully we're going to see                                                                       |
| 51:29      | some improvements here and it's going to get better for everybody regardless of what platform                                                             |
| 51:33      | they're on.                                                                                                                                               |
| 51:34      | Well, like I was laughing, one of the big new features is that if you have a [[HomeKit]]                                                                  |
| 51:37      | doorbell, because now it has face detection, it can announce through your [[HomePod]] who's                                                               |
| 51:46      | at your door.                                                                                                                                             |
| 51:47      | Like if it recognises Rose is at my door, my HomePod will say Rose is at your door.                                                                       |
| 51:51      | And you'll go, wait, what?                                                                                                                                |
| 51:52      | How does she get here?                                                                                                                                    |
| 51:53      | Yeah, exactly.                                                                                                                                            |
| 51:54      | I mean, does she have a parachute?                                                                                                                        |
| 51:56      | I would ask.                                                                                                                                              |
| 51:57      | But when they were making the announcement, I was hung up because I was saying, wait,                                                                     |
| 52:01      | [[HomeKit]] doorbell?                                                                                                                                     |
| 52:02      | Do those even exist?                                                                                                                                      |
| 52:03      | I'm not, you know, it's like all the big players and doorbell stuff are not [[HomeKit]] on [[HomeKit]].                                                   |
| 52:08      | So it's like that is, you know, the big disconnect here is you need the device to be on [[HomeKit]]                                                       |
| 52:14      | to get all these features.                                                                                                                                |
| 52:16      | And I do think that I keep hoping next year is here.                                                                                                      |
| 52:19      | So last year they announced secure home video and I am super interested in that.                                                                          |
| 52:23      | I don't really want, not only is it the money because I've traditionally paid a company                                                                   |
| 52:28      | to store my video for me online, but I just don't like the fact that there's some third                                                                   |
| 52:33      | party company that has my video, especially because some of the cameras are in my house                                                                   |
| 52:37      | and who knows who's going to buy the company, who's going to hack their server.                                                                           |
| 52:41      | I trust [[Apple]] more than anybody else with this problem.                                                                                                   |
| 52:44      | And it's been a year since they announced [[HomeKit]] secure video, but now it seems like                                                                 |
| 52:49      | it's becoming real.                                                                                                                                       |
| 52:50      | Like [[eufy]], [[eufy]], the company, it's a subsidiary of Anker that they make a bunch of cameras.                                                               |
| 52:57      | They are getting [[HomeKit]] support in their cameras and there's a bunch of them that are                                                                |
| 53:00      | starting to show up.                                                                                                                                      |
| 53:01      | So I feel like we're getting there finally and we'll definitely be doing some content                                                                     |
| 53:06      | in the next year about [[HomeKit]].                                                                                                                       |
| 53:07      | Oh yeah, especially with some of the other stuff coming.                                                                                                  |
| 53:10      | So you mentioned that it can announce on a [[HomePod]] that when somebody's at the door,                                                                  |
| 53:14      | it can also show you that video on the [[Apple TV]] of that person at your door, which is great.                                                              |
| 53:20      | And it'll come up and it'll send pushes to your devices so that you'll know who's at                                                                      |
| 53:24      | the door and you can look at them and you can watch them and go, hmm, do you look like                                                                    |
| 53:27      | they're in a good mood?                                                                                                                                   |
| 53:28      | Do I want to let them in today?                                                                                                                           |
| 53:30      | Or am I just going to pretend I'm not home?                                                                                                               |
| 53:32      | And as well as that, they also announced adaptive lighting, which sounds very fancy, but basically                                                        |
| 53:39      | if you have these colour changing or even just white light changing bulbs that can go through                                                             |
| 53:43      | different shades of white, so the more yellow white to the more blue whites, then for those                                                               |
| 53:48      | people who've previously used [[Flux]] and for those of us who use [[Night Shift\|Colour Shift]] on our iOS                                               |
| 53:52      | devices and our Macs, basically you get this for your entire home, which is amazing.                                                                      |
| 53:59      | Your entire life, like everywhere just [[Flux]].                                                                                                          |
| 54:02      | Now all I need is when I like pull two fingers outwards on a piece of paper that it will                                                                  |
| 54:06      | actually zoom in and I'm set basically for everything.                                                                                                    |
| 54:10      | I've always thought that was a good idea to like have the warmer light at night and the                                                                   |
| 54:14      | cooler light in the morning.                                                                                                                              |
| 54:16      | And I've toyed with the idea, in fact, I had started recording a video for the Shortcuts                                                                  |
| 54:20      | Field Guide of an automation, but because it required confirmation, I scrapped it, but                                                                    |
| 54:26      | now I could build that myself, but even better, the operating system just does it and it's                                                                |
| 54:32      | not like a trigger where it goes from one to the next.                                                                                                    |
| 54:36      | It's a gradual thing over the course of the day.                                                                                                          |
| 54:39      | I still have a couple [[Philips Hue]] lights in the house and I'm looking forward to trying                                                               |
| 54:44      | this out and seeing how it works.                                                                                                                         |
| 54:46      | Yeah, I'm feeling really good about my, I'm just going to stick with the [[Philips Hue]]                                                                  |
| 54:49      | stuff, a train that I've been on because I've lived in a rented apartment before I'm about                                                                |
| 54:55      | to move into my own apartment, but instead of replacing light switches, which would be                                                                    |
| 55:02      | the smart thing to do, I'm going to stick [[Philips Hue]] switches on top of the light switches                                                           |
| 55:06      | and just have Hue everywhere and adaptive lighting in my house.                                                                                           |
| 55:09      | Yeah, nice.                                                                                                                                               |
| 55:10      | Home kit devices now show up in Control Centre.                                                                                                           |
| 55:13      | That was a surprise in the beta for me.                                                                                                                   |
| 55:15      | I pulled down Control Centre at one point and I'm like, oh, look, there's a bunch of                                                                      |
| 55:18      | switches for my various lights.                                                                                                                           |
| 55:21      | And that was really nice.                                                                                                                                 |
| 55:22      | Yeah, this is great because right now I'm staying with my parents and they have one                                                                       |
| 55:26      | light.                                                                                                                                                    |
| 55:27      | So I don't need to open the home area anymore and toggle like that one light.                                                                             |
| 55:32      | It's just like, yeah, no, this one light's right here.                                                                                                    |
| 55:34      | That's perfect.                                                                                                                                           |
| 55:35      | I'll just tap it and toggle that on and off.                                                                                                              |
| 55:37      | Also home kit got a visual refresh.                                                                                                                       |
| 55:40      | I would argue probably not enough for me, but it's a progress.                                                                                            |
| 55:44      | Yep.                                                                                                                                                      |
| 55:45      | You know, it identifies the type of lights, everything's still in the same shapes and                                                                     |
| 55:50      | I just feel like they could make it more user friendly, but it is a little better.                                                                        |
| 55:55      | Yes, it is, it's, you know, progress.                                                                                                                     |
| 55:58      | And that's that's what we're always off to here.                                                                                                          |
| 56:00      | We're never going to get everything that we wanted, but we are going to, you know, see                                                                    |
| 56:04      | improvements to everything.                                                                                                                               |
| 56:05      | One of the nice things they did is like if an app is in use, you get it in a circle icon                                                                  |
| 56:10      | as opposed to the square icon.                                                                                                                            |
| 56:11      | So that, you know, that helps.                                                                                                                            |
| 56:13      | But I, you know, I'm going to play more with it.                                                                                                          |
| 56:15      | We're kind of early in the beta process.                                                                                                                  |
| 56:17      | And like I said, we're going to give a whole show to home kit once things settle.                                                                         |
| 56:21      | And um, and that, that's a topic for a future show.                                                                                                       |
| 56:26      | Now over on the Mac side, there weren't a lot of announcements and there really haven't                                                                   |
| 56:30      | been a lot of automation related announcements.                                                                                                           |
| 56:32      | We didn't get shortcuts for the Mac, for instance, but there is stuff to report.                                                                          |
| 56:38      | I, I installed the beta Big Sur on my laptop, I think Rose, you've done the same as well.                                                                 |
| 56:43      | No, because right now I only have one laptop and I thought, if I have to record all of                                                                    |
| 56:48      | my podcasts, um, and screencasts on the one device and I'm running a brand new straight                                                                   |
| 56:54      | out of the box, nobody else has skinny picked it, uh, developer beta of the operating system.                                                             |
| 57:01      | It's a toss up between who would kill me.                                                                                                                 |
| 57:02      | It could be you.                                                                                                                                          |
| 57:03      | It could be [[Jean Francois Brissette\|JF Brisette]] who's been on the show before it could be [[Scotty Jackson\|Scotty]] or it could be Jim,             |
| 57:07      | our editor, um, all lovely people usually.                                                                                                                |
| 57:10      | And if I decided to put my current only production machine on a beta, um, yeah, I, I'd have to                                                            |
| 57:16      | hide.                                                                                                                                                     |
| 57:17      | Yeah.                                                                                                                                                     |
| 57:18      | I forgot you didn't have a second machine because you're not right now.                                                                                   |
| 57:20      | I'm in the process of getting all my stuff back, but it's good.                                                                                           |
| 57:22      | Take a walk.                                                                                                                                              |
| 57:23      | Yeah.                                                                                                                                                     |
| 57:24      | Okay.                                                                                                                                                     |
| 57:25      | Uh, it looks really pretty, you know, but we'll leave that for another day.                                                                               |
| 57:27      | But the, uh, I spent time running all the typical automation tools.                                                                                       |
| 57:33      | TextExpander works just out of the box.                                                                                                                   |
| 57:35      | I couldn't see any problems.                                                                                                                              |
| 57:37      | [[Hazel]] works.                                                                                                                                          |
| 57:38      | Uh, we, I don't know if we discussed on the show.                                                                                                         |
| 57:40      | It's starting with Catalina.                                                                                                                              |
| 57:41      | There was some sort of bug in the operating system where [[Hazel]] occasionally crashes while                                                             |
| 57:45      | you're building rules.                                                                                                                                    |
| 57:46      | Um, I don't know if you've ever seen this or not, but it happens to me on occasion, but                                                                   |
| 57:52      | it works eventually.                                                                                                                                      |
| 57:53      | And then the rules still run, but there's some sort of underlying bug.                                                                                    |
| 57:56      | I recently corresponded with Paul over at noodle soft and he says he's trying to get                                                                      |
| 58:01      | [[Apple]] to fix.                                                                                                                                             |
| 58:02      | There's something [[Apple]] needs to fix that's causing this, but with that same bug still                                                                    |
| 58:05      | exists in my experiments on Big Sur, but [[Hazel]] still works.                                                                                           |
| 58:10      | Um, [[Keyboard Maestro]] works fine.                                                                                                                      |
| 58:12      | There's no problems and [[AppleScript\|AppleScripts]] obviously still work.                                                                               |
| 58:17      | So there's no, nothing broke hallelujah, you know, we're good.                                                                                            |
| 58:20      | Yeah.                                                                                                                                                     |
| 58:21      | Um, the, uh, so you're good.                                                                                                                              |
| 58:24      | Somebody was tweeting me and, um, the [[Keyboard Maestro]] developer question about, well, if                                                             |
| 58:30      | [[Apple]] switches to our max or quote unquote [[Apple Silicon]] max, is that going to break                                                                      |
| 58:36      | tools like [[Keyboard Maestro]]?                                                                                                                          |
| 58:38      | I don't think it is, but I thought that'd be a fun question to talk about with you.                                                                       |
| 58:42      | Do you see any problems with the switch to [[Apple Silicon]] for our automation tools?                                                                        |
| 58:48      | I mean, I don't see like anything we already have, like they've said is going to keep working.                                                            |
| 58:54      | So as far as I see it, it's more that there are going to be more possibilities.                                                                           |
| 59:00      | So everything that's built for the iPad, and they did say this in the keynote, um, that                                                                   |
| 59:04      | you're going to be able to run iOS and iPad OS apps straight on these [[Apple Silicon]] machines.                                                             |
| 59:11      | Like there's not going to be like capitalist or anything involved.                                                                                        |
| 59:14      | It's just going to be this app now runs on this device too, which I can only see as a                                                                     |
| 59:18      | benefit.                                                                                                                                                  |
| 59:19      | Imagine something like [[Pushcut]] as [[Pushcut]] server on your Mac running your shortcuts.                                                              |
| 59:23      | Yes.                                                                                                                                                      |
| 59:24      | Like that's going to be amazing.                                                                                                                          |
| 59:26      | Now bearing in mind, it's going to take a couple of years to get there.                                                                                   |
| 59:28      | They did say that the first Mac Pro with [[Apple Silicon]] is not going to be out until 2022.                                                                 |
| 59:34      | So that that's two years plus allow a year for delays.                                                                                                    |
| 59:37      | So that's going to be three years.                                                                                                                        |
| 59:39      | But I think that this is mostly going to be a good thing.                                                                                                 |
| 59:43      | Now I did hear, and I'm not sure whether or not like [[Apple]] or Microsoft have said anything                                                                |
| 59:48      | officially about this, I did hear [[Boot Camp]] is gone, which means that dual booting is not                                                             |
| 59:53      | going to happen anymore.                                                                                                                                  |
| 59:54      | But for people who have been developing for Windows stuff and they've been writing cross                                                                  |
| 01:00:00   | platform applications, it may end up being a problem for them.                                                                                            |
| 01:00:03   | And especially for small developer shops, they may have to decide, am I focusing on                                                                       |
| 01:00:07   | Mac or Windows here?                                                                                                                                      |
| 01:00:09   | I wish that these two makes me the most money.                                                                                                            |
| 01:00:12   | So we may lose some applications, but I believe out of [[TextExpander]], [[Hazel]], [[Keyboard Maestro]]                                                  |
| 01:00:18   | and [[AppleScript]], [[TextExpander]] is the only one that works on Windows and their Windows                                                             |
| 01:00:24   | application is newer, and I believe that they're not going to have a problem continuing doing                                                             |
| 01:00:29   | both of those.                                                                                                                                            |
| 01:00:30   | Oh, no, not at all.                                                                                                                                       |
| 01:00:31   | It's always been separate development.                                                                                                                    |
| 01:00:33   | The bigger issue is for people who want to dual boot.                                                                                                     |
| 01:00:37   | And we talked about this on this week's episode of [[Mac Power Users]].                                                                                   |
| 01:00:40   | My advice is if you really need to run Windows on your Mac, now is the time to start thinking                                                             |
| 01:00:46   | about your final upgrade, you know, get yourself the the baddest Intel Mac you can because                                                                |
| 01:00:53   | I think that Windows is not going to work on these are machines or who does it's going                                                                    |
| 01:00:56   | to be very slow or it's just, you know, it's going to have a translation layer that's                                                                     |
| 01:01:01   | going to slow it down.                                                                                                                                    |
| 01:01:03   | So if it's entirely possible, it will work great as a virtual machine like Windows does                                                                   |
| 01:01:07   | run on [[ARM]].                                                                                                                                           |
| 01:01:08   | I want to say that some of their surface tablets are [[ARM]] devices, but I'm not 100% certain                                                            |
| 01:01:14   | on that because I honestly haven't kept up to date with what Windows machines are out                                                                     |
| 01:01:18   | there.                                                                                                                                                    |
| 01:01:19   | I do know that Windows for [[ARM]] exists.                                                                                                                |
| 01:01:20   | So it's entirely possible that it will be like a [[virtual machine]] only job.                                                                            |
| 01:01:24   | But I also know that some applications like the the [[CAD]] applications do not work in [                                                                 |
| 01:01:30   | [Virtual Machine\|virtual machines]] basically.                                                                                                           |
| 01:01:32   | And so those people have had to dual boot.                                                                                                                |
| 01:01:36   | So we're going to see what happens on that front, but we've got a couple of years before                                                                  |
| 01:01:39   | it becomes a problem because as well as [[Apple]] saying, hey, we're switching to [[Apple Silicon]],                                                              |
| 01:01:44   | they also said, and we've got new Intel stuff in the pipeline as well.                                                                                    |
| 01:01:48   | So they're urging their bets a little bit there, which I think is a good thing because                                                                    |
| 01:01:52   | some people are obviously going to be a little worried about this.                                                                                        |
| 01:01:55   | So they'll get the Intel option.                                                                                                                          |
| 01:01:58   | And I'd point you toward to this week's episode of [[Mac Power Users\|MPU]] because [[Stephen Hackett\|Stephen]] actually did a bunch                     |
| 01:02:02   | of research.                                                                                                                                              |
| 01:02:03   | You can't even buy Windows for [[ARM]] as a product.                                                                                                      |
| 01:02:06   | I mean, it's just, I think it's unlikely that these new new [[Apple Silicon]] machines                                                                        |
| 01:02:11   | are going to run Windows.                                                                                                                                 |
| 01:02:13   | And while it's going to be a couple of years for the Mac Pro, they are going to be really                                                                 |
| 01:02:15   | seeing [[Apple Silicon]] Macs before the end of this year.                                                                                                    |
| 01:02:20   | The rumor mill is an iMac and a 13-inch MacBook Pro.                                                                                                      |
| 01:02:24   | Who knows if that's true or not, but something you said that I want to go back to talk about                                                              |
| 01:02:28   | is once you have one of these [[ARM]] machines, you will be able to run iPad and iPhone apps                                                              |
| 01:02:34   | natively.                                                                                                                                                 |
| 01:02:35   | They'll just run on these machines.                                                                                                                       |
| 01:02:36   | So it's like, and automation is interesting because there's a bunch of automation I can                                                                   |
| 01:02:41   | do on the Mac that I can't do on the iPad and iPhone.                                                                                                     |
| 01:02:44   | But conversely, there's a bunch of automation I do on iPad and iPhone that are better than                                                                |
| 01:02:48   | the similar automations I run on my Mac.                                                                                                                  |
| 01:02:51   | So you could have a best of both worlds scenario where you could run, and I'm guessing we can                                                             |
| 01:02:57   | run [[Shortcuts]] on the Mac through this.                                                                                                                |
| 01:03:00   | I don't know.                                                                                                                                             |
| 01:03:01   | Yeah.                                                                                                                                                     |
| 01:03:02   | I mean, I want to see how this works because say, for example, [[PushCut]] automation server,                                                             |
| 01:03:06   | like a lot of my [[PushCut]] automation server stuff requires [[Drafts]].                                                                                 |
| 01:03:09   | Okay.                                                                                                                                                     |
| 01:03:10   | And these are using [[Drafts]] actions.                                                                                                                   |
| 01:03:12   | They're not [[URL Schemes]], they're [[Drafts]] actions.                                                                                     |
| 01:03:16   | Now I'm wondering, am I going to be able to install [[Drafts]] for iOS as well as [[Drafts]]                                                              |
| 01:03:21   | for Mac or is [[Drafts]] for Mac going to be able to pick up those intents?                                                                               |
| 01:03:26   | Because one of the things that we did see with the changes to [[SwiftUI]] is they added                                                                   |
| 01:03:31   | support for stuff like, no, sorry, no, the changes to [[SwiftUI]], the changes to [[Catalyst]].                                                           |
| 01:03:37   | They added support for [[ARKit]].                                                                                                                         |
| 01:03:38   | Now this doesn't mean that the Mac is getting [[ARKit]].                                                                                                  |
| 01:03:41   | What this means is that when you write an application that has [[Augmented Reality\|AR]] in it, you no longer                                             |
| 01:03:47   | need to do some fancy fuzzy logic that goes, hey, does this device have support for [[ARKit]]?                                                            |
| 01:03:52   | Yeah.                                                                                                                                                     |
| 01:03:53   | So I'm going to do this here.                                                                                                                             |
| 01:03:54   | And then if it doesn't, I'm going to do that.                                                                                                             |
| 01:03:56   | You just say, hey, it does this and it works.                                                                                                             |
| 01:04:01   | So the idea is to try and reduce a bit of developer overhead, which I'm really looking                                                                    |
| 01:04:04   | forward to.                                                                                                                                               |
| 01:04:05   | Also, they finally added date pickers to [[SwiftUI]], sorry to [[Catalyst]], which is great.                                                              |
| 01:04:10   | So that's good for me.                                                                                                                                    |
| 01:04:12   | But I'm hoping that what we're going to see is that developers are going to be able to                                                                    |
| 01:04:18   | either add those same intents to the Mac applications, or that I'm going to be able to have [[Drafts]]                                                    |
| 01:04:24   | for iOS and [[Drafts]] for Mac installed simultaneously.                                                                                                  |
| 01:04:28   | And the [[Pushcut]] automation server on my Mac, we'll just talk to [[Drafts]] for iOS.                                                                   |
| 01:04:34   | But I guess we're going to find out.                                                                                                                      |
| 01:04:36   | I'm feeling that I may need to get one of these, my 13-inch MacBook Air is a very cute                                                                    |
| 01:04:41   | little device.                                                                                                                                            |
| 01:04:42   | But having used it as my production machine for coming on 14 weeks now, I'm feeling like                                                                  |
| 01:04:46   | it's owed an upgrade.                                                                                                                                     |
| 01:04:48   | So one of those 13-inch MacBook Pros running on [[Apple Silicon]] that have been rumored may                                                                  |
| 01:04:53   | well be in my future.                                                                                                                                     |
| 01:04:54   | Oh, yeah.                                                                                                                                                 |
| 01:04:55   | It'll be very tempting to sell your other devices and get into one of those, for no other                                                                 |
| 01:05:01   | reason to talk about this stuff, but do some automation.                                                                                                  |
| 01:05:04   | A little bit of a side note, have you noticed in the iOS and iPad OS betas a new time picker                                                              |
| 01:05:10   | in some of the apps?                                                                                                                                      |
| 01:05:12   | Yes.                                                                                                                                                      |
| 01:05:13   | So when I was testing the automation stuff from tapping the back of my phone, I just                                                                      |
| 01:05:20   | added, I can't even remember which one it is, preparing for going on a vacation at work.                                                                  |
| 01:05:26   | So I tap the back of my phone three times and it pops up and it has a new calendar picker                                                                 |
| 01:05:31   | instead of the wheels of time.                                                                                                                            |
| 01:05:33   | So the wheels of time have gone and I've got a calendar picker there, which is, I like                                                                    |
| 01:05:37   | it.                                                                                                                                                       |
| 01:05:38   | It's nice.                                                                                                                                                |
| 01:05:39   | Makes sense.                                                                                                                                              |
| 01:05:40   | I'm not sure it's appeared everywhere yet.                                                                                                                |
| 01:05:42   | If I open [[OmniFocus]], it is not in [[OmniFocus]], but at the same time, [[Omni Group]] only found                                                      |
| 01:05:47   | out on Monday that this was coming.                                                                                                                       |
| 01:05:49   | So they haven't had a chance to do an update there.                                                                                                       |
| 01:05:52   | So this is June.                                                                                                                                          |
| 01:05:55   | We have until September, it's developer beta one.                                                                                                         |
| 01:05:57   | I think we're going to see a lot of awesome stuff coming through [[TestFlight]] in the next                                                               |
| 01:06:00   | couple of months, and some developers will probably be there going, no, this ruins everything.                                                            |
| 01:06:05   | And all the developers will be there going, you know, [[James Thomson]], creator of [[PCalc]],                                                            |
| 01:06:10   | compiled [[PCalc]] for Mac for [[ARM]] in a couple of minutes, found out the new widgets.                                                                 |
| 01:06:17   | He can't do a calculator in them and said, okay, well, I'm done for the summer.                                                                           |
| 01:06:20   | You know, obviously that's not it, but like the big stuff, like there's not a huge amount                                                                 |
| 01:06:24   | for him to do.                                                                                                                                            |
| 01:06:25   | So we're going to see an interesting mix of things coming our way.                                                                                        |
| 01:06:28   | Yeah, Greg over at [[Smile Software]] gave me the perfect analogy for this.                                                                               |
| 01:06:34   | He said every time he goes to [[WWDC]], he gets homework assignments and he gets Christmas                                                                |
| 01:06:39   | presents.                                                                                                                                                 |
| 01:06:40   | And a good year is one where he has way more Christmas presents than homework assignments.                                                                |
| 01:06:44   | And homework assignments are additional work just to make the things you have already working                                                             |
| 01:06:49   | keep working, you know, and then everything on top of that is a Christmas present.                                                                        |
| 01:06:53   | So it's kind of funny.                                                                                                                                    |
| 01:06:55   | But I think for [[Shortcuts]], we've got a bunch of material here and it's going to be really                                                             |
| 01:07:02   | fun digging in on these.                                                                                                                                  |
| 01:07:03   | I'm sure, you know, whenever we record the show on beta one, we do right after [[WWDC]],                                                                  |
| 01:07:09   | things may change.                                                                                                                                        |
| 01:07:10   | I remember last year we were very excited about a couple of features that didn't make                                                                     |
| 01:07:13   | it in the final run.                                                                                                                                      |
| 01:07:14   | Yeah, I still miss that change background image.                                                                                                          |
| 01:07:17   | I just was going to ask you that.                                                                                                                         |
| 01:07:18   | I haven't seen that.                                                                                                                                      |
| 01:07:19   | I don't think it came back.                                                                                                                               |
| 01:07:20   | I haven't.                                                                                                                                                |
| 01:07:21   | I'm checking again.                                                                                                                                       |
| 01:07:22   | And the new shortcut that I started creating earlier to test things.                                                                                      |
| 01:07:27   | Now I wait for the actions to load.                                                                                                                       |
| 01:07:29   | And if I type back, then it has a recommendation for sling back high heel sandals that I was                                                              |
| 01:07:34   | looking at on a website earlier.                                                                                                                          |
| 01:07:36   | But I'm not seeing an option to change my background image.                                                                                               |
| 01:07:40   | Let's look for wallpaper.                                                                                                                                 |
| 01:07:41   | Yeah.                                                                                                                                                     |
| 01:07:42   | Nothing in the wallpaper.                                                                                                                                 |
| 01:07:43   | Okay.                                                                                                                                                     |
| 01:07:44   | That's not entirely true.                                                                                                                                 |
| 01:07:45   | I was shopping for wallpaper earlier.                                                                                                                     |
| 01:07:46   | It's got more [[Safari]] recommendations for me, but no action to change my wallpaper or background                                                           |
| 01:07:50   | image.                                                                                                                                                    |
| 01:07:51   | All right.                                                                                                                                                |
| 01:07:52   | Well, there you have it.                                                                                                                                  |
| 01:07:53   | So there we are with beta one, automators and fans of automation.                                                                                         |
| 01:07:58   | We've got lots of new toys to play with.                                                                                                                  |
| 01:07:59   | We're going to have a lot of fun doing that.                                                                                                              |
| 01:08:01   | We will come back to talk about this.                                                                                                                     |
| 01:08:03   | I mean, our program isn't going to be all about these betas throughout the next several                                                                   |
| 01:08:07   | months, but we wanted to at least have one show where we kind of hit the highlights.                                                                      |
| 01:08:10   | And as we get towards release, we'll probably cover it again once we know exactly what's                                                                  |
| 01:08:15   | out there.                                                                                                                                                |
| 01:08:16   | And by then, Rose and I all have had a chance to build some fun automations on this stuff.                                                                |
| 01:08:20   | Yeah.                                                                                                                                                     |
| 01:08:21   | We can even share some watch faces with you with shortcuts built into them.                                                                               |
| 01:08:24   | Yeah.                                                                                                                                                     |
| 01:08:25   | I'm not quite sure if that works yet, or if you can just share the watch face and you                                                                     |
| 01:08:27   | have to share the shortcuts separately, but we'll see.                                                                                                    |
| 01:08:30   | Yeah.                                                                                                                                                     |
| 01:08:31   | I really like the idea of automation based watch faces, especially with a computer watch                                                                  |
| 01:08:35   | that you can really make work for you.                                                                                                                    |
| 01:08:38   | And that's going to be fun to explore.                                                                                                                    |
| 01:08:42   | Either way, we are the automators.                                                                                                                        |
| 01:08:43   | You can find us over at relay.fm/automators.                                                                                                              |
| 01:08:47   | You can get in the forums at [talk.automators.fm](https://talk.automators.fm), also the show's website is at [automators.fm](https://automators.fm).      |
| 01:08:53   | We think our sponsors this week, and that's our friends over at Microsoft and DEVONthink.                                                                 |
| 01:09:00   | And we'll see you in a couple of weeks.                                                                                                                   |
| 01:09:02   | Goodbye, everyone.                                                                                                                                        |
