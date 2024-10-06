---
status: "incomplete"
fc-date:
  year: 2022
  month: 10
  day: 21
fc-category: "podcast"
podcast: "Automators"
published: 2022-10-21
duration: 4427
formattedduration: "01:13:47"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/113"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators113.mp3"
episode: 113
title: "113: FocusCuts and Asynchronous Automation Awesomeness"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this news, Rosemary and David look into non-continuous automations and how breaking up a process can improve your automation abilities.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 113 Discussion](https://talk.automators.fm/t/113-focuscuts-and-asynchronous-automation-awesomeness/14574)

# Sponsors
- [[MasterClass (Sponsor)|MasterClass]] - Get unlimited access to every class.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [FocusCuts | Focus on your Shortcuts](https://focuscuts.com/)
- [PushCut | Triggers, Notifications & Widgets for Shortcuts, HomeKit, and Online Automation](https://www.pushcut.io/)
- [Hazel – Noodlesoft – Simply Useful Software](https://www.noodlesoft.com/)
- [Keyboard Maestro 10.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Public Web Trigger (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/trigger/Public_Web)
- [Remote Trigger (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/trigger/Remote)
- [Alfred | ThoughtAsylum](https://www.thoughtasylum.com/alfred/)
- [An Update to the Conductor Workflow | ThoughtAsylum](https://www.thoughtasylum.com/2022/04/22/an-update-to-the-conductor-workflow/)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators, the automation podcast about making all of your technology            |
| 00:06      | do everything for you so that you can just sit back and relax.                                          |
| 00:10      | That's how it works, right, David?                                                                      |
| 00:11      | Yeah.                                                                                                   |
| 00:12      | I mean, the robots are taking it over.                                                                  |
| 00:14      | Just let them.                                                                                          |
| 00:15      | Just accept it.                                                                                         |
| 00:16      | Yeah.                                                                                                   |
| 00:17      | I mean, it works great for me.                                                                          |
| 00:18      | I come out after stand-up at work in the mornings, and my robot has already mopped the kitchen          |
| 00:23      | and vacuumed it for me, and, you know, I just pop the mop heads off, and it runs around                 |
| 00:27      | the house and vacuums everything else.                                                                  |
| 00:28      | It's wonderful.                                                                                         |
| 00:29      | I remember not to leave socks on the floor, so, you know, it's training me.                             |
| 00:33      | That's the bonus of automation, learning to do things in a more efficient manner.                       |
| 00:37      | I was reading some futuristic sci-fi a few years ago.                                                   |
| 00:40      | I don't remember the author, but one of the things that the sci-fi did, the artificial                  |
| 00:46      | intelligence you carried around with you, which coincidentally was on your belt.                        |
| 00:50      | That was the author's impression of where this is all going.                                            |
| 00:53      | You put a supercomputer on your belt, but the computer was telling its owner, oh, yeah,                 |
| 00:59      | I answered all your email this morning, and I went down that rabbit hole for a minute.                  |
| 01:05      | What if computers answered our email, and then your computer answered the email my computer             |
| 01:11      | sent you?                                                                                               |
| 01:12      | How much email would get generated between us that neither of us had ever read?                         |
| 01:17      | You know?                                                                                               |
| 01:18      | I don't think that's the answer.                                                                        |
| 01:19      | Okay, so I can answer this question.                                                                    |
| 01:20      | I can answer this question, because what happens if you have an autoresponder emailing a ticket         |
| 01:25      | system that creates a new ticket for every email that's sent to it?                                     |
| 01:29      | That sounds like experience.                                                                            |
| 01:31      | Yeah, the answer to this, folks, for those who aren't sure, so basically, a ticket system               |
| 01:36      | that reads emails is going to create tickets, and if it's being sent new emails and there's             |
| 01:42      | no thread that it can follow, it's going to create a new ticket for every email and automatically       |
| 01:46      | send out an email.                                                                                      |
| 01:47      | I have previously had experience with autoresponder is creating thousands of tickets, and I've          |
| 01:53      | had to clear out that fun in games before.                                                              |
| 01:57      | The answer is if you leave it overnight, so many tickets that you don't want to know.                   |
| 02:03      | It's an awful lot, and let's face it, it's more fun to actually use our free time to                    |
| 02:07      | communicate with each other and let the computers handle the boring menial tasks.                       |
| 02:12      | When I start this focus mode, go do this thing for me, or just give me this selection of                |
| 02:16      | options.                                                                                                |
| 02:17      | I don't need 90 choices when I click on the shortcuts menu bar.                                         |
| 02:21      | I need five choices if I'm in my work focus mode, and four choices if I'm in my podcasting              |
| 02:25      | mode, and so on and so forth.                                                                           |
| 02:27      | I have to think that 20 years from now, email will not be as big of a thing as it is now.               |
| 02:33      | I'm not sure where it all goes, but hopefully, we won't get into a future where we need computers       |
| 02:38      | to answer email for us, although, now that I think about it, Google is already doing                    |
| 02:42      | some of that.                                                                                           |
| 02:43      | Don't they?                                                                                             |
| 02:44      | They have some auto-response stuff built into the Gmail system.                                         |
| 02:47      | Yeah, they do.                                                                                          |
| 02:49      | It's mostly sort of predictive text rather than anything else, so there's that element                  |
| 02:57      | to it.                                                                                                  |
| 02:58      | But yeah, it's certainly interesting.                                                                   |
| 03:02      | Whenever I see something like that, I'm always intrigued.                                               |
| 03:05      | I don't use Gmail anymore, but I'm intrigued by things like that.                                       |
| 03:08      | I just wish that it wasn't built with lots and lots of creepy data.                                     |
| 03:11      | Yeah, I've been doing a lot of work on email recently because it is a friction point for                |
| 03:16      | me and I'm trying to get better at it, but also spend less time on it, which doesn't                    |
| 03:21      | sound like you should be able to do both, but I think I can.                                            |
| 03:24      | So I think maybe we'll do a show on that in the future.                                                 |
| 03:26      | One of the things that have really helped me is moving over to this new mail service                    |
| 03:32      | because I've got all these rules I can do in the background that are in the cloud.                      |
| 03:36      | I'm building up some email automation stuff that I should probably share at some point.                 |
| 03:42      | Let's put a pin in that one.                                                                            |
| 03:43      | Yeah, yeah, we'll have to come back to that because it's amazing what you can tie into                  |
| 03:48      | email automation and what you shouldn't tie into email automation number of times that                  |
| 03:53      | I've seen something that's dependent on an email where maybe you can just skip the email                |
| 03:57      | part of it and have two services talk to each other instead would be much better.                       |
| 04:01      | But you just go start with what you've got, right?                                                      |
| 04:04      | Yeah.                                                                                                   |
| 04:05      | Speaking of things you've got, Rose has got a couple side hustles that have turned into                 |
| 04:10      | stuff related to us automators and I thought we should talk about it.                                   |
| 04:15      | So what has it been now, Rose, about six months a year?                                                 |
| 04:18      | You have been secretly working in the background with a small company of friends called Snailed         |
| 04:23      | It and you are now shipping some products.                                                              |
| 04:27      | Yeah, yeah.                                                                                             |
| 04:29      | So I'm very fortunate that I've got many friends who are excellent at many things and it turns          |
| 04:35      | out that a couple of them and I've found it a little company together where we're just                  |
| 04:39      | building like our focus is really technically it's supposed to be utility things that solve             |
| 04:45      | problems we have.                                                                                       |
| 04:46      | It's accidentally ended up being automation utility things so far, but that's not going                 |
| 04:51      | to necessarily be the requirement long term.                                                            |
| 04:54      | But yeah, so we've taken over development of PushCut.                                                   |
| 04:57      | So we're working with [[Simon Leeb\|Simon]] on PushCut, Simon we've had on the show before.                             |
| 05:02      | And yeah, so we're working on that and we're adding some really cool features to it and                 |
| 05:05      | we just overhaul the website to actually make it much easier to find how you can use the                |
| 05:11      | application.                                                                                            |
| 05:12      | And we've also launched our own app which is called Focus Cuts for focusing your shortcuts              |
| 05:18      | so that you don't have to upgrade to macOS Ventura to find out which focus mode you're                  |
| 05:23      | in or deal with all of your shortcuts just appear in the menu bar on every computer even                |
| 05:28      | though maybe that's not necessarily the most relevant option for you.                                   |
| 05:33      | Yeah, so this is an app that really works on getting the most out of shortcuts in combination           |
| 05:40      | with focus modes, which are two things near and dear to my heart.                                       |
| 05:45      | The app is now available.                                                                               |
| 05:46      | I think I hope I was one of your first customers as soon as it went out, I bought it.                   |
| 05:51      | I think it's great.                                                                                     |
| 05:52      | But tell us a little bit about how this came to be.                                                     |
| 05:55      | I mean, where'd you get the idea and what was involved with the development?                            |
| 06:00      | Yeah.                                                                                                   |
| 06:01      | So we got the idea actually for focus cuts in the first place because you couldn't get                  |
| 06:05      | your focus mode in shortcuts.                                                                           |
| 06:07      | Now if you're on iOS 16 or you're on macOS Monterey, that's still true.                                 |
| 06:10      | You definitely can't get your focus mode in shortcuts.                                                  |
| 06:13      | iOS 16.1 and I believe the latest beta of macOS Ventura, though I'm not 100% certain                    |
| 06:19      | on that and they need to double check, do you have support for getting your current focus               |
| 06:22      | mode?                                                                                                   |
| 06:23      | But we quickly realised that like just getting your focus mode doesn't necessarily make                 |
| 06:28      | things better.                                                                                          |
| 06:30      | Because I know for me, I have my work laptop and I have my personal machines and I don't                |
| 06:34      | necessarily want the same shortcuts showing up in the menu bar on both of those machines.               |
| 06:40      | And then on top of that, I don't necessarily want the same shortcuts showing up while I'm               |
| 06:44      | working versus after work when I'm done with work and I'm sitting here podcasting.                      |
| 06:49      | I want certain shortcuts to be available to me.                                                         |
| 06:52      | But if I'm sitting here and I'm just doing whatever I want in my own time, then I want                  |
| 06:57      | different shortcuts showing up.                                                                         |
| 06:58      | I don't need the, hey, start the new timestamp and an audio recording shortcut to pop up.               |
| 07:05      | That's a bit overkill for just sitting here chatting to friends or whatever I'm doing.                  |
| 07:11      | So we realised that we had an golden opportunity here to take what shortcuts kind of already            |
| 07:17      | has because shortcuts lets you put shortcuts in your menu bar and go all automated on it                |
| 07:24      | and focus on just the ones you want so you can select a folder and add a folder or you                  |
| 07:29      | can watch a folder, which means that the contents of that folder, as you put a new shortcut             |
| 07:33      | into that folder, it updates the available shortcuts to you in that focus mode automatically.           |
| 07:40      | And the other thing is, is something that I had is the headphones icon is my podcasting                 |
| 07:45      | focus mode.                                                                                             |
| 07:47      | So that seems easy enough, but actually the headphones icon appears when you've got AirPods             |
| 07:52      | Max connected to your Mac and a number of times I clicked on the wrong thing because                    |
| 07:56      | I was trying to find my focus mode and I couldn't was really crazy.                                     |
| 07:59      | So what we've got is we've got the ability to actually have like the name of your focus                 |
| 08:03      | mode appear in the menu bar as well, which came entirely from me because I just kept                    |
| 08:08      | getting confused and clicking the wrong darn icon.                                                      |
| 08:11      | And it turns out that that's a feature that throughout testing people have gone.                        |
| 08:15      | Actually I really like this.                                                                            |
| 08:16      | It's really good to know which focus mode I'm actually in right now.                                    |
| 08:19      | So yeah, that's something that happened as part of that.                                                |
| 08:23      | And now we have just like this little mini app that just helps you choose which focus,                  |
| 08:28      | which shortcuts you want in your focus mode, and it's per device.                                       |
| 08:32      | So I don't have to have the same shortcuts appear on my work Mac as I do on my personal                 |
| 08:36      | Mac and so on and so forth.                                                                             |
| 08:37      | Yeah, like for instance, I am like I'm early in the process of adopting this, but like                  |
| 08:42      | when I'm in podcasting mode, I have a shortcut that opens up all the appropriate tabs for               |
| 08:47      | the automators podcast and the recording app.                                                           |
| 08:51      | It's a kind of, I guess, a variation on bunch that I'm doing through shortcuts, but it all              |
| 08:56      | just shows up when I trigger podcasting mode.                                                           |
| 08:59      | But then when I leave podcasting mode and got a personal mode, I get a different set.                   |
| 09:04      | And I feel like this is really good for what I like to call contextual computing, getting               |
| 09:10      | your computer to switch gears for you as you do your different types of work and make it                |
| 09:15      | easier, remove all the friction so you can get your work done.                                          |
| 09:19      | I really like this app, Rose.                                                                           |
| 09:21      | Thank you.                                                                                              |
| 09:22      | It's something that it took more time to develop than you think.                                        |
| 09:26      | It turns out that getting data out of shortcuts is kind of hard to do, but we've managed to             |
| 09:31      | do it.                                                                                                  |
| 09:32      | And app review, learn what a menu bar application is, you'd think they'd be familiar with that,         |
| 09:38      | but it turns out that every so often, you get the one person to app review that doesn't                 |
| 09:43      | know what a menu bar application is, but yeah, we got there and it's out.                               |
| 09:49      | And we're quite excited about that.                                                                     |
| 09:51      | So we've got an update coming.                                                                          |
| 09:54      | One of the things that we really want to implement, if we can, is adding the ability to trigger         |
| 09:58      | a shortcut when a focus mode starts.                                                                    |
| 10:01      | Because of course, shortcuts for Mac doesn't have automations.                                          |
| 10:04      | So we figured, well, maybe we can just add that automation.                                             |
| 10:08      | We're not going to go crazy on this stuff, but it feels like triggering a shortcut when                 |
| 10:12      | your focus mode starts is something that we should support.                                             |
| 10:15      | That would be awesome because I really miss automation on the Mac.                                      |
| 10:20      | I don't know.                                                                                           |
| 10:21      | This is the second year of a shortcut to the Mac.                                                       |
| 10:24      | It's just kind of surprising to me that still hasn't made its way over.                                 |
| 10:27      | Yeah.                                                                                                   |
| 10:28      | I mean, is there in many ways, if you add a shortcut to your doc, then you can remove                   |
| 10:35      | it from your doc, but then it's in your personal applications folder.                                   |
| 10:38      | You can then run that when a calendar event starts, for example.                                        |
| 10:43      | But it is having to use a calendar, which has to be local on your device as well as                     |
| 10:48      | a side note, to do things like this.                                                                    |
| 10:51      | It just doesn't feel as easy and intuitive as open shortcuts on iOS.                                    |
| 10:57      | There is a tab called Automations.                                                                      |
| 10:58      | I go to this tab, and that's where the stuff is.                                                        |
| 11:02      | So yeah, fingers crossed, we'll get there at some point with the Shortcuts team.                        |
| 11:07      | And they'll get the opportunity to add that, but as it is for the time being, there's some              |
| 11:14      | other apps out there which are doing things like this.                                                  |
| 11:16      | We want to add support just for the focus mode side of things because it turns out focus                |
| 11:20      | modes are really difficult to get the information about on macOS.                                       |
| 11:24      | I'm not surprised.                                                                                      |
| 11:26      | Most people don't bother to do that, but we've managed to do it, and it's consistently working,         |
| 11:33      | which is good because the first method that we found to try and get the focus mode out,                 |
| 11:36      | I just very occasionally just went, I don't know what's going on.                                       |
| 11:39      | I don't think I exist anymore, and just sort of crashed everything that was vaguely touching            |
| 11:44      | it.                                                                                                     |
| 11:45      | So I had to go back to the drawing board a bit and figure out how to reliably get this                  |
| 11:49      | information.                                                                                            |
| 11:50      | And also when you remove a focus mode, if it's one of the default focus modes, so if you've             |
| 11:56      | added, say, a fitness focus mode based on the suggested one, and then you remove that,                  |
| 12:01      | that's actually still in your list of focus modes in the background.                                    |
| 12:05      | So having to work around little flukes like that, a cropping up, but we've got there.                   |
| 12:10      | We've got there now.                                                                                    |
| 12:13      | This episode of Automators is brought to you by Masterclass.                                            |
| 12:16      | With Masterclass, you can learn from the world's best minds, anytime, anywhere, and at your             |
| 12:20      | own pace.                                                                                               |
| 12:21      | With over 150 classes from a range of worldwide instructors in 11 different categories, that            |
| 12:27      | thing you've always wanted to do is closer than you think.                                              |
| 12:30      | You can learn the art of negotiating from Chris Foss.                                                   |
| 12:34      | Through your culinary skills with Mexican cooking by Gabriele Camero.                                   |
| 12:38      | Learn disruptive entrepreneurship from Bishop Branson.                                                  |
| 12:41      | Or learn how to make compelling videos that go viral with Marques Brownlee, also known                  |
| 12:44      | as MKBHD.                                                                                               |
| 12:47      | So I took the Hans Zimmer composing Masterclass, and it was amazing.                                    |
| 12:53      | I have always had an interest in music from a very, very early age, and it was really                   |
| 12:56      | interesting to see how he broke things down.                                                            |
| 12:59      | And in one particular example, how he built the character of Captain Jack Sparrow in music              |
| 13:04      | form by watching the film and what he did from a technical as well as a creative perspective            |
| 13:10      | to put it all together.                                                                                 |
| 13:11      | It was really interesting to hear about the deliberate use of semitones and the phases                  |
| 13:16      | that the music goes through from heroic and romantic all the way to, and I'll just break                |
| 13:21      | the rules because I can.                                                                                |
| 13:23      | I highly recommend you check it out.                                                                    |
| 13:25      | Get unlimited access to every class, and as an Automators listeners, you get 15% off                    |
| 13:30      | an annual membership.                                                                                   |
| 13:31      | Go to masterclass.com/Automators now.                                                             |
| 13:34      | That's masterclass.com/Automators for 15% off Masterclass.                                        |
| 13:38      | Our thanks to Masterclass for their support of this show and all of Relay FM.                          |
| 13:42      | Yeah, I mean, [[Apple]] really doesn't make that data easy to access, and it's shocking to                  |
| 13:49      | me because the more hooks we get into focus modes, the more we're likely to use them.                   |
| 13:55      | But I also want to talk about, because you guys, in addition to doing focus cuts, which                 |
| 13:59      | I think everybody should go check out, I mean, if you enjoyed our last episode about focus              |
| 14:04      | modes, this is a great pairing for that.                                                                |
| 14:07      | You just get this app and then you assign the shortcuts you want there in the menu bar.                 |
| 14:12      | Great feature.                                                                                          |
| 14:15      | But the other thing is you are taking over push cut and that comes up on the show occasionally.         |
| 14:21      | So we want to disclose now that Rose is related to it.                                                  |
| 14:23      | But also Rose is related to it, right?                                                                  |
| 14:26      | That means it's going to get way better and you're going to be putting a bunch of time                  |
| 14:30      | into it.                                                                                                |
| 14:31      | And I think, just explain for the audience what push cut is because it's such a unique                  |
| 14:36      | app in the ecosystem of shortcuts.                                                                      |
| 14:39      | I'm not sure everybody appreciates what it can do.                                                      |
| 14:42      | Yeah, so push cut is actually lots of different things in one app.                                      |
| 14:47      | So to start with, it has the ability to send you notifications, which you can get at specific           |
| 14:52      | times based on various triggers, and then that you can take actions from those notifications.           |
| 14:57      | So you can have a default action and then other optional actions.                                       |
| 15:00      | So for example, 20 minutes after I get home, give me a notification that when I tap on it,              |
| 15:07      | we'll just open [[Apple Reminders\|Reminders]].                                                                              |
| 15:10      | You know, that's a simple one to get started with.                                                      |
| 15:13      | Or you know, when my phone sees this iBeacon, we talked about the [[iBeacons]] when [[Simon Leeb\|Simon]] came              |
| 15:18      | on the show, their little Bluetooth transmission devices, which basically go, hey, I'm a little         |
| 15:23      | location over here, which is more accurate than GPS, GPS, because it satellites, and                    |
| 15:28      | there God knows how high up, you know, it can wander a bit.                                             |
| 15:32      | You can be sat in the same place, but if you look at your GPS track, then you may have                  |
| 15:36      | moved around.                                                                                           |
| 15:37      | The idea of an iBeacon is it's super local.                                                             |
| 15:39      | So when my phone sees this iBeacon, you know, do this thing and send me a notification,                 |
| 15:44      | you know, maybe when I see an iBeacon that's really, really close to me because I put one               |
| 15:47      | in my living room, give me a choice of, you know, running my TV watching scene or my dinner             |
| 15:55      | scene, you know, for home kit, because you can run shortcuts actions, or you can open                   |
| 16:00      | URLs, or you can run a home kit scene.                                                                  |
| 16:03      | But that's just the notification side of things.                                                        |
| 16:06      | The next part of push cut is widgets, because you can have custom widgets through push cut.             |
| 16:13      | And so you've got a widget and then you've got different widget contents.                               |
| 16:16      | And then you can use shortcuts, automations to automatically say, okay, this widget is                  |
| 16:20      | going to update to have this content, and you can provide input to that content.                        |
| 16:25      | So you can have multiple inputs in a widget content, and then have that update automatically            |
| 16:30      | and it'll update on all of your devices at the same time.                                               |
| 16:34      | So you know, if you want to, then you can take it a step further with the automation                    |
| 16:38      | server, which is where you have an iOS device that's just sitting there all the time running            |
| 16:42      | push cut in the automation server mode, and it will then run shortcuts, and it can run                  |
| 16:47      | shortcuts automatically at certain times, it can run shortcuts when [[IFTTT\|If This Then That]]                    |
| 16:51      | [[Zapier]], [[Make]], just tell it to based on information that happens, or when you call an API yourself.       |
| 17:00      | And it can then automatically update your widgets for you.                                              |
| 17:03      | So I've got a couple of widgets that are based on upcoming calendar events, you know, I'm               |
| 17:07      | in the office once every three weeks on average, so it goes through and it finds the next one           |
| 17:12      | of those days in my calendar.                                                                           |
| 17:14      | And it puts a little countdown of that into my, I have a I have a special office day widget,            |
| 17:20      | which I use on my phone in my work focus mode, and it updates that, but also, you know, when            |
| 17:25      | I check my iPad, it's updated that same widget on my iPad as well, which is very nice.                  |
| 17:31      | And then you can specify, you know, what you want to happen when you tap on that widget.                |
| 17:35      | You know, do you want it to run a shortcut?                                                             |
| 17:36      | Do you want it to open a URL?                                                                           |
| 17:38      | Do you want it to open push cut?                                                                        |
| 17:41      | And we've recently added support for dynamically setting that as well, so that you can say,             |
| 17:46      | hey, when I'm in this, when I tap this widget, you know, then I want it to open this URL.               |
| 17:54      | But when you update the widget content to something else, you can say, now I want it                    |
| 17:57      | to run that shortcut instead.                                                                           |
| 17:59      | So you can really tie all of your affirmations into the things that you can see and interact            |
| 18:04      | with so that you don't have to do everything entirely automatically in the background.                  |
| 18:08      | You can do things, you know, notification pops up.                                                      |
| 18:11      | Oh, right.                                                                                              |
| 18:12      | I'll tap on that in a minute when I'm done with this conversation.                                      |
| 18:15      | And then you can go and, you know, run the thing as is appropriate for you.                             |
| 18:19      | Yeah.                                                                                                   |
| 18:20      | And there's more, you know, you can also have it, well, we talked about sending notifications,          |
| 18:25      | but you've also got a whole set of additional shortcut actions.                                         |
| 18:30      | And then so it adds actions to your shortcuts and the, the craziest part of this is you can             |
| 18:36      | turn a plugged in device into an automation server, a plugged in iOS device, which is                   |
| 18:43      | something you've been doing for years.                                                                  |
| 18:45      | I played with it occasionally.                                                                          |
| 18:46      | I haven't got it running, but I mean, this is an app that you have no worry about ever                  |
| 18:50      | getting [[Sherlocking\|Sherlocked]] because this is taking [[Shortcuts]] to like entirely new levels and I can't imagine       |
| 18:57      | [[Apple]] ever like going down these rabbit holes, but it's awesome.                                        |
| 19:01      | Yeah.                                                                                                   |
| 19:02      | It seems unlikely that [[Apple]] are going to do this themselves, but it is pretty fun to,                  |
| 19:08      | to be working on it.                                                                                    |
| 19:09      | You know, I've been massively updating the website recently, so I've been going through                 |
| 19:12      | documenting every shortcut section that we have and so on and what is the difference                    |
| 19:16      | between them?                                                                                           |
| 19:17      | What input do you give it?                                                                              |
| 19:18      | What output does it have?                                                                               |
| 19:19      | And so on so that, you know, people can actually look at this and understand, you know, what            |
| 19:23      | something does and how it works because, you know, PushCut has got so many different facets             |
| 19:29      | to it.                                                                                                  |
| 19:30      | You know, is it a widgets app?                                                                          |
| 19:32      | Well, yes, but does it also send notifications to prompt you about which home kit scene that            |
| 19:38      | you want to run?                                                                                        |
| 19:39      | So when you're arriving home after dark, you can have a home kit automation use that convert            |
| 19:44      | shortcut action and then do a get contents of URL and you can paste the URL of a notification           |
| 19:51      | for PushCut that you want to have triggered.                                                            |
| 19:54      | And so it will then notify you when you get home and that notification can then, you know,              |
| 19:58      | give you a choice of scenes or whatever it is.                                                          |
| 20:00      | You know, it's not just one thing, it's many things.                                                    |
| 20:03      | So we've been really working on getting all that up together so that everyone can see                   |
| 20:07      | what it is and take advantage of it.                                                                    |
| 20:09      | I should mention, David, that there is another secret feature hidden in the app, which I                |
| 20:14      | think a lot of people miss because it is kind of, you know, hidden a little bit, but there's            |
| 20:19      | a triggers tab inside of PushCut and you can have local triggers, there's background triggers.          |
| 20:24      | So you can have like when you get to this location, just fire off this request to your                  |
| 20:29      | automation server to automatically do this or, you know, open this contact this URL and                 |
| 20:38      | do like an API call.                                                                                    |
| 20:40      | So you can kind of, you can do this with shortcuts, automations too, except you can't                   |
| 20:44      | do a shortcuts automation automatically based on a location being reached.                              |
| 20:49      | Like you have to, like you can't turn off ask before running and you can do that with                   |
| 20:54      | PushCut.                                                                                                |
| 20:55      | You know, there's limitations on it, obviously, because, you know, we can't just take over              |
| 20:59      | your phone and make it start doing stuff without you touching it and interacting with it.               |
| 21:03      | That would break all of [[Apple\|Apple's]] guidelines and everything that anybody wants out of iOS.                |
| 21:07      | That would just not be nice, but you can actually, you know, get things happening automatically         |
| 21:12      | based on you going somewhere, which is pretty nice.                                                     |
| 21:15      | You can also use these webhooks to get into [[Keyboard Maestro]], you know, it's like, it's                 |
| 21:20      | like everything, I just love this way automation has become so bilingual.                               |
| 21:25      | Everything talks to each other now using these common things like webhooks.                             |
| 21:30      | Yes.                                                                                                    |
| 21:31      | Yeah.                                                                                                   |
| 21:32      | Yeah.                                                                                                   |
| 21:33      | I mean, one of the other things that I really like about the triggers in PushCut is the                 |
| 21:37      | location triggers can have time limitations on them.                                                    |
| 21:40      | Because I don't know about you, but there's nothing worse than, you know, for example,                  |
| 21:44      | if there's something that I need to get from a particular store, but it's only open, well,              |
| 21:49      | actually, my bank.                                                                                      |
| 21:50      | My bank is a great example of this.                                                                     |
| 21:52      | My bank is open from 9am to 3pm, Monday to Friday, which is guess what, when I have to                  |
| 21:57      | work.                                                                                                   |
| 21:58      | So if I walk past my bank on Saturday and there's an errand to run at the bank and I                    |
| 22:01      | flagged like my bank location in say OmniFocus, OmniFocus will be like, hey, you're near the            |
| 22:05      | bank.                                                                                                   |
| 22:06      | You know, here's your bank tag with the actions associated with it, which is great.                     |
| 22:10      | And I like that, but it actually doesn't help me because the bank's closed.                             |
| 22:15      | You can actually set a time limitation on location triggers in PushCut so that it won't                 |
| 22:20      | notify you after 5pm about things when you're driving past work, you know, because you happen           |
| 22:25      | to drive past work at those times.                                                                      |
| 22:28      | And so, you know, you can tie all of that in together to really customise your experience,              |
| 22:33      | or you can just have it pop up every single time you go past somewhere or, you know, a                  |
| 22:39      | particular thing happens to trigger it.                                                                 |
| 22:41      | So yeah, it's something where you can tell that PushCut has grown over time and we've                   |
| 22:46      | got some pretty good plans for the future.                                                              |
| 22:48      | I'm not going to reveal anything too crazy, but we are improving the widget support in                  |
| 22:56      | the release that's coming up right now.                                                                 |
| 22:58      | And the other thing that we are doing right now, I'm just double checking what is in my                 |
| 23:02      | release notes to make sure I don't say anything that I'm not supposed to be saying, is we               |
| 23:07      | are adding thread support to notifications that will be coming in more places soon so                   |
| 23:13      | that when you have a notification, I'm sure you've seen this in Messages David, if I send               |
| 23:17      | you three messages in a row, they'll kind of like stack together so that they're all                    |
| 23:22      | from me.                                                                                                |
| 23:23      | But if Daisy's sending you messages as well, Daisy's messages get stacked together.                     |
| 23:26      | That's called threading.                                                                                |
| 23:28      | We're actually adding thread support to notifications, like it's coming out in the API in the release,  |
| 23:32      | it's coming this month, and then we'll hopefully be adding that into Shortcuts Actions and              |
| 23:37      | so on, further down the line as well.                                                                   |
| 23:40      | But yeah, we're really getting excited about all the things that we can possibly do here.               |
| 23:46      | One thing I would add is one thing Rose has done already is they've rebuilt the PushCut                 |
| 23:50      | website and it is much better.                                                                          |
| 23:53      | And if you've ever been scratching your head about what to do with PushCut, they've got                 |
| 23:59      | great documentation now, they've got examples of all these features we've been talking about.           |
| 24:04      | So go check it out, I mean, maybe this is time to get on board with PushCut.                            |
| 24:08      | Yes, and if you've got feature requests as well, feel free to get in touch with us,                     |
| 24:13      | office at pushcut.io, or there's a thread on the PushCut subreddit as well where you                    |
| 24:19      | can post feature requests.                                                                              |
| 24:21      | And of course, if you have feedback about Focus Cuts, then Focus Cuts at snailedit.dev                  |
| 24:27      | is the email address for that, or you can just tweet at me, tweet at Snailedit, it's                    |
| 24:31      | fine.                                                                                                   |
| 24:32      | It will make sure it all gets funneled into our feedback so that we can add any improvements            |
| 24:37      | and feature requests that any of the Automators folks have got for us.                                  |
| 24:41      | Don't worry, you'll end up in a special queue, I promise.                                               |
| 24:45      | This episode of the Automators Podcast is brought to you by Electric.                                   |
| 24:49      | When leading your small business, unbury yourself from IT and get a free pair of Beats Solo             |
| 24:54      | 3 wireless headphones when you schedule a qualifying meeting, just go to electric.ai slash Automators.  |
| 25:02      | When leading your small business, it's not all glamour, in fact, sometimes it's a matter                |
| 25:06      | of spending hours trying to find a laptop lost in the mail for a new hire or dealing                    |
| 25:11      | with some other technical emergency, which you're well equipped to deal with, but maybe                 |
| 25:16      | you don't have time for.                                                                                |
| 25:17      | The team over at Electric knows small businesses maybe like yours face these challenges.                |
| 25:23      | That's why they've solved this problem for you by operating as your IT department.                      |
| 25:27      | Instead of spending your time sorting through unused application licenses, setting up employee          |
| 25:32      | laptops and answering never-ending IT questions from your team, you can build that empire.              |
| 25:39      | With Electric acting as your IT department, you can get back to what you're good at.                    |
| 25:43      | Plus, you've got a really cool IT platform to see and manage everything.                                |
| 25:48      | With your business, you're building your dreams, and doing that doesn't mean operating                  |
| 25:52      | as your own IT person.                                                                                  |
| 25:53      | We all have great skills.                                                                               |
| 25:54      | I mean, you're listening to the Automators podcast, you're good at this stuff, but you                  |
| 25:58      | also have to understand the importance of delegating in order to focus on what's important              |
| 26:03      | with your business.                                                                                     |
| 26:04      | I've definitely got caught in the trap of being my own IT person in the past, and it                    |
| 26:09      | has never been good for me.                                                                             |
| 26:11      | You don't want to be the person doing that yourself because there's only one you, and                   |
| 26:14      | to build your business, you need to be focused on your business.                                        |
| 26:18      | If you find yourself an unwitting IT person, you need to go check out Electric today.                   |
| 26:23      | For Automators listeners, Electric is offering a free pair of Beats Solo 3 headphones for               |
| 26:28      | taking a qualified meeting.                                                                             |
| 26:30      | Just go to electric.ai slash Automators.                                                                |
| 26:34      | Once again, that is electric.ai slash Automators.                                                       |
| 26:37      | Go there now to get your free pair of Beats Solo 3 headphones today for scheduling a                    |
| 26:42      | qualified meeting.                                                                                      |
| 26:43      | Our thanks to Electric for their support of the Automators.                                             |
| 26:47      | Well, somewhat related to push cut is the idea of asynchronous automation, and I thought                |
| 26:56      | it'd be fun to talk about that today because it's a topic we've never really gone deep                  |
| 27:00      | into.                                                                                                   |
| 27:01      | I know you do a lot of it, so let's start with the definition.                                          |
| 27:06      | What is asynchronous automation?                                                                        |
| 27:08      | Yeah, so for me, there's a couple of different ways of looking at asynchronous automation.              |
| 27:14      | Now, asynchronous, by definition, means that things don't have to happen at the same time.              |
| 27:20      | When I'm recording a podcast with you, David, that's synchronous communication.                         |
| 27:23      | I talk, and then you hear me, and you talk back right away.                                             |
| 27:26      | If I send you a message, then you can reply later when it's convenient for you.                         |
| 27:31      | That's asynchronous, where removing the 'synchrosity'.                                                    |
| 27:35      | Is it 'synchrosity'?                                                                                      |
| 27:36      | Either way, we're taking the sync out of it and just making it happen when it's appropriate.            |
| 27:41      | You can break up automation into chunks that happen.                                                    |
| 27:46      | This bit happens immediately when I get to this place, or this focus mode starts.                       |
| 27:51      | My phone does this bit, and then maybe it can drop something somewhere else, where then                 |
| 27:56      | when you're max next on, it'll pick it up, and it'll just continue with the next bit.                   |
| 28:01      | It'll drop a file in a folder, [[Hazel]] will pick it up, [[Hazel]] will pick it up, [[Hazel's]] asynchronous, it'll just pick             |
| 28:04      | up whatever.                                                                                            |
| 28:06      | There's also just asynchronous of something will just get put somewhere and get picked                  |
| 28:14      | up on later entirely, or there's two things happening at the same time, potentially.                    |
| 28:20      | Things running in parallel, and a really good example of this is [make.com,](htps://make.com) where what you               |
| 28:25      | can do is you can actually split an automation into multiple branches.                                  |
| 28:29      | You've got your start trigger over on the left-hand side, and then you've got multiple                  |
| 28:34      | things coming out of that, so that you can have three things running at the same time,                  |
| 28:39      | and they run independently of one another.                                                              |
| 28:41      | It might look like they're going along in sync, but that's because the actions happen                   |
| 28:46      | to take about the same amount of time to run.                                                           |
| 28:48      | It might also be that the first action on branch number one takes five minutes to run,                  |
| 28:54      | and branch number two finished in three seconds, and branch number three is somewhere in the            |
| 28:57      | middle where it's doing various calculations, waiting for this API to return information                |
| 29:02      | to it, and so on and so forth.                                                                          |
| 29:05      | There's a couple of different ways of looking at it, but being able to split up your automations        |
| 29:12      | because not everything has to happen immediately.                                                       |
| 29:14      | I think that's one of the things that, for me, is often a failing I have in my own personal             |
| 29:19      | automations.                                                                                            |
| 29:20      | When I'm creating an automation, I often end up going, right, well, it's going to do this,              |
| 29:24      | and they'll do this, and this, and this, and this, and I get very bogged down in a certain              |
| 29:28      | series of actions when, actually, realistically, you could have just split things up into segments,     |
| 29:34      | and it doesn't really matter what order they happen in.                                                 |
| 29:37      | They just happen, and so you can say, well, actually, what I'm going to do this bit first,              |
| 29:43      | I'll create the [[Dropbox]] folder first, and then I'm going to create a folder in Notes,                   |
| 29:47      | but it doesn't matter if you create the Notes folder and then the [[Dropbox]] folder, unless                |
| 29:51      | what one of the things you need to do is put a note into the Notes folder with a link to                |
| 29:56      | the [[Dropbox]] folder.                                                                                     |
| 29:57      | That's when you then have a dependency, but even then, having the Notes folder and the                  |
| 30:02      | [[Dropbox]] folder being created, the order of those doesn't matter.                                        |
| 30:06      | The only bit that matters is that the note is created after the [[Dropbox]] folder is created.              |
| 30:12      | Breaking things down to find out where the actual dependencies are so that you can then                 |
| 30:15      | split stuff up can actually lead to much better automations.                                            |
| 30:20      | The underlying problem of this, and the reason why I think this is increasingly relevant,               |
| 30:25      | is the web.                                                                                             |
| 30:27      | Often, our automations now rely on information from the internet, and you don't rely on getting         |
| 30:35      | that information as quickly as you do when it's stored locally.                                         |
| 30:39      | Sometimes the internet works, and sometimes it doesn't, or it's slow.                                   |
| 30:42      | If you build an automation routine that relies on having specific information quickly, it               |
| 30:48      | breaks things.                                                                                          |
| 30:49      | Programmers are dealing with the exact same problem, and I think building synchronicity                 |
| 30:55      | in is the way to go.                                                                                    |
| 30:57      | Synchronicity is, by the way, the word when you were struggling with that earlier.                      |
| 31:00      | I remembered the word because it was a police album when I was in the high school.                      |
| 31:04      | I'm like, well, was that the actual word?                                                               |
| 31:07      | I looked it up, and actually it is the word, so it is a police album.                                   |
| 31:11      | Do you know who the police are?                                                                         |
| 31:12      | Probably don't.                                                                                         |
| 31:13      | I know who the police are.                                                                              |
| 31:14      | Of course, I know who the police are, David.                                                            |
| 31:16      | Who do you take before?                                                                                 |
| 31:17      | You have a British lady you should know, but it was a police album, but it's actually                   |
| 31:22      | a proper word.                                                                                          |
| 31:23      | So there you go.                                                                                        |
| 31:24      | Synchronicity.                                                                                          |
| 31:25      | Yes.                                                                                                    |
| 31:26      | It's one of those things.                                                                               |
| 31:27      | When you're talking, sometimes you start doubting what you're saying as you say it,                     |
| 31:30      | even though part of you is like, this is definitely right.                                              |
| 31:33      | Another part of you is like, I don't know, maybe it's wrong just in case.                               |
| 31:36      | So yeah, I'm glad to hear that the word synchronicity is right.                                         |
| 31:39      | And I think the thing is a lot of our automations end up being built as really, really long             |
| 31:43      | chains, and that can make them really fragile.                                                          |
| 31:46      | If you think of a paper chain, like the kind of thing where you loop pieces of paper together           |
| 31:51      | and often we'll hang them up on like a Christmas tree or as decorations around the holiday season,      |
| 31:58      | those paper chains are actually quite fragile.                                                          |
| 32:00      | And if one loop breaks, the whole chain falls apart, like it's no longer linked together.               |
| 32:06      | But do these things actually have to be linked, or do you just need individual little bits              |
| 32:12      | and then you just need to provide links in a few key places.                                            |
| 32:16      | And the rest of it can actually be broken up into more simpler pieces.                                  |
| 32:20      | And this is where you can then really do the best thing, which is take advantage of the                 |
| 32:26      | fact that this bit can happen automatically on my iPhone.                                               |
| 32:29      | And then my Mac's pretty much always on.                                                                |
| 32:32      | So I'll try pinging my Mac to do this via [[Keyboard Maestro]] via the web.                                 |
| 32:37      | But if it doesn't respond, then I'll drop a file into a folder, and [[Dropbox]] will sync                   |
| 32:43      | it over.                                                                                                |
| 32:44      | And then when my Mac's next on, [[Keyboard Maestro]] can be watching that folder and use, it can            |
| 32:49      | have two triggers on the same automation, and it can then pick that up and go, OK, cool.                |
| 32:54      | Well, this file's here, so I'm going to use that and take that and use that as actual                   |
| 32:57      | input, because you don't necessarily actually have to do things in a particular order.                  |
| 33:02      | It's tempting too, and sometimes it makes more sense.                                                   |
| 33:05      | But a lot of the time, you can actually get a little crazy and have zero order to things.               |
| 33:12      | Yeah.                                                                                                   |
| 33:13      | So I think the first place where you want to address this is web-based services.                        |
| 33:19      | And you were talking about [make.com](https://make.com).                                                                    |
| 33:22      | I feel like these online services where you have them chain stuff together on the Internet,             |
| 33:29      | they were early people trying to solve this problem, because by nature, they're all their               |
| 33:37      | services developed on web-based services and information.                                               |
| 33:41      | And explain how they deal with it when you go through a service like [make.com](https://make.com).                          |
| 33:46      | Well, it really depends what you're actually using as the trigger for something like this.              |
| 33:52      | What is actually causing this automation to happen?                                                     |
| 33:55      | Because there's a couple of different ways that triggers can be handled, and [[Make]] is                    |
| 33:58      | actually really good at this.                                                                           |
| 34:00      | So if I use a mail webhook, webhooks usually would be, you call a particular URL, maybe                 |
| 34:10      | you send it some data, whatever, but they also have mail webhooks where you can send                    |
| 34:14      | emails.                                                                                                 |
| 34:15      | If I send it an email, it'll actually hold on to that until it can process it.                          |
| 34:19      | Which means that if my automation breaks, which happens every so often, it'll just sit on               |
| 34:23      | those in a pile.                                                                                        |
| 34:25      | And then when I fix it, it'll say, hey, did you want to process all that stuff that I                   |
| 34:29      | had waiting there?                                                                                      |
| 34:31      | Because it was broken, and now you fixed it.                                                            |
| 34:34      | And then you can say yes, or you can say no.                                                            |
| 34:37      | Other things may be sort of fire and forget, where it'll go like, hey, go catch this thing,             |
| 34:44      | and then it won't even look to see, it lobs a ball, and then it just turns and it's gone.               |
| 34:48      | It's not even checking to see if the ball went in the right direction, really.                          |
| 34:52      | It knows where it's sending it, so it does that, but it doesn't check whether or not                    |
| 34:55      | it landed.                                                                                              |
| 34:56      | So depending on what the service is and how it does things, it may be something that'll                 |
| 35:02      | collect what it's received, or it may be something that will just drop it on the floor                  |
| 35:08      | if it can't deal with it right then.                                                                    |
| 35:11      | The other third option is not receiving data in that sense, but I'm going to go and fetch               |
| 35:17      | data on a regular basis.                                                                                |
| 35:20      | And so something like an RSS feed as a trigger is a good example of this, because usually               |
| 35:25      | an RSS feed doesn't have a way of going, hey, new thing over here, it'll be a, oh, you've               |
| 35:29      | checked me, here's data, you figure out what's new for you because you know what the person             |
| 35:33      | read and didn't read before, probably, hopefully.                                                       |
| 35:37      | And so something like [[Zapier]] or [[Make]] will go and check an RSS feed probably every 15                    |
| 35:42      | minutes or so, and find the new episodes or releases or bulk posts or whatever it is in                 |
| 35:48      | that, and then run the trigger based on that.                                                           |
| 35:52      | And then you can usually say, hey, anything that, anything that it was posted within the                |
| 35:58      | last X period of time is new.                                                                           |
| 36:01      | And it'll probably store an ID of a post or similar as well so that it can handle that.                 |
| 36:05      | So is it collecting the things and then processing them as it can?                                      |
| 36:10      | So it might stack things up using maybe first in, first out.                                            |
| 36:13      | So if I get six things, then I'll process thing number one, then number two, then number                |
| 36:18      | three, then number four, or is it like things are being thrown at me and I'll do my absolute            |
| 36:23      | best to catch them.                                                                                     |
| 36:24      | But if something goes wrong, I'm going to drop it on the floor or I'm going to go look                  |
| 36:28      | for the thing.                                                                                          |
| 36:29      | And so that's, that's like the three different ways that those handle the triggers.                     |
| 36:33      | And then when it comes to the actual automation, it's kind of the same thing.                           |
| 36:36      | You know, are they, like they'll, they'll talk to a thing.                                              |
| 36:39      | And if it says, hey, everything's great, then it'll continue.                                           |
| 36:42      | And if it goes, I don't know, something's wrong, then it's probably actually, you know,                 |
| 36:47      | it's [[Zapier]], [[IFTTT\|If This Then That]], [[Make]] all stop, unless you explicitly say continue anyway,                 |
| 36:51      | if there's an error, [[Keyboard Maestro]] is the same.                                                       |
| 36:53      | If you don't say just continue regardless of an error, it'll stop at the point where                    |
| 36:58      | it runs into a problem and just go, I can't deal with that.                                             |
| 37:02      | But yeah, that, that's basically the three different ways that those web services work.                 |
| 37:07      | And the thing to remember if you're an automator and you're using these services is you need            |
| 37:12      | to know what, which one of those three your automation is running on.                                   |
| 37:18      | Because in general, the problem of asynchronous communication or data streams is solved by              |
| 37:24      | these services.                                                                                         |
| 37:25      | They, they wait for you, you don't have to build it into your automation like you would                 |
| 37:29      | on a Mac based automation, which we're going to talk about in a minute, but the, they take              |
| 37:34      | care of that for you.                                                                                   |
| 37:35      | But the break points depend on which model you're in.                                                   |
| 37:38      | And if like, if you've got one that is a fire and forget style web automation and things                |
| 37:45      | stop working, you'll know, well, it's, it's at [make.com](https://make.com), you know, there, there's a problem             |
| 37:50      | going on there because that is a fire and forget and it's forgetting and it's not firing.               |
| 37:55      | So okay, I can go fix that, but you need to, you need to be aware of that in order to be                |
| 38:00      | able to, you know, go and keep your automation systems running.                                         |
| 38:04      | Exactly.                                                                                                |
| 38:05      | And it's really useful not just to know like, what is this part doing?                                  |
| 38:08      | But when you're tying it into your own solutions, how are you building that tie in?                     |
| 38:13      | So for example, looking at [[Keyboard Maestro]], you could have a [[Keyboard Maestro]] integrated               |
| 38:18      | into a web automation via a URL.                                                                        |
| 38:21      | So it could be a web server, you know, that, that's something that you can do.                          |
| 38:25      | But if your Mac's not on, what's going to happen?                                                       |
| 38:27      | And you might say, well, I've got an always on Mac.                                                     |
| 38:30      | Well, actually, do you need an always on Mac or can you actually, you know, go, actually,               |
| 38:37      | maybe I can just have these things run like when my Mac turns on and my Mac's on most                   |
| 38:41      | of the time anyway.                                                                                     |
| 38:42      | So that's fine.                                                                                         |
| 38:44      | Then maybe the web server URL isn't the best option for you.                                            |
| 38:48      | Maybe it's drop a file in a folder and [[Keyboard Maestro]] will pick that up.                              |
| 38:53      | And if you drop, say, a JSON file in a folder, then it can pick that up and it can read that            |
| 38:58      | information and use that as all the variables that it needs to continue with the next part,             |
| 39:04      | which, you know, is another way of doing it.                                                            |
| 39:08      | But you know, there, there are different ways that you can trigger things like you can also             |
| 39:12      | have, you know, [[Keyboard Maestro]] just do a thing of, hey, so when I log in, then go off                 |
| 39:19      | and check this thing.                                                                                   |
| 39:20      | Or when I activate this application, I'm going to go check like this URL and see if there's             |
| 39:25      | something there that needs to be handled.                                                               |
| 39:27      | You know, I'm going to check to see if this air table view has any records in it that need              |
| 39:32      | processing.                                                                                             |
| 39:33      | For example, that would be something that you could do and you can, you know, go fetch                  |
| 39:37      | from that on a periodic basis.                                                                          |
| 39:39      | But you, you know, you can also, you know, belt and braces, belt and suspenders, where                  |
| 39:44      | you can say, hey, I'm going to try firing this thing off, but I'm going to drop a file                  |
| 39:49      | into a folder as well.                                                                                  |
| 39:51      | And you know, the automation can then go, hey, you know, if my trigger was a web URL,                   |
| 39:56      | then, you know, at the end of it, I should also look for a file with this file name.                    |
| 40:01      | And I'll just delete that, but, or, you know, or whatever it is, you know, you can handle               |
| 40:07      | it in multiple ways, but it's, it's certainly worth looking at that and going, does everything          |
| 40:11      | have to happen entirely automatically?                                                                  |
| 40:14      | Or actually, is it okay sending myself a notification to like finish this bit off manually by running   |
| 40:19      | this particular shortcut where I have to choose between, you know, like these three options             |
| 40:24      | of things because it really depends on me and my mood, for example.                                     |
| 40:30      | This episode of Automators is brought to you by LinkedIn Jobs.                                          |
| 40:33      | These days, every new potential hire can feel like a high stakes wager for your small business.         |
| 40:37      | You want to be 100% certain that you've got access to the best qualified candidates available.          |
| 40:42      | And that's why you have to check out LinkedIn Jobs.                                                     |
| 40:44      | LinkedIn Jobs helps you find the right people for your team faster and for free.                        |
| 40:48      | When you're hiring somebody, it's kind of a bit of a gamble.                                            |
| 40:51      | Are they going to be a good fit for your team from a technical and from a social perspective?           |
| 40:55      | And it can really help to see how they interact with other professionals on LinkedIn as part            |
| 40:59      | of that.                                                                                                |
| 41:00      | And of course, making sure that they actually see your job posting is the most critical thing.          |
| 41:06      | And it's so quick to create a free job post to LinkedIn, it just takes minutes.                         |
| 41:11      | So you just add your job and the purple hiring hashtag to your LinkedIn profile to spread               |
| 41:15      | the word that you're hiring and simple tools like screening questions can make it really                |
| 41:18      | easy to focus on candidates with just the right skills and experience.                                  |
| 41:22      | So you can quickly prioritise those who you'd like to interview and hire.                               |
| 41:26      | And that's it.                                                                                          |
| 41:27      | This means that you can be sure to finish the year strong with the right team member                    |
| 41:30      | on board.                                                                                               |
| 41:31      | It's why small businesses rate LinkedIn Jobs number one in delivering quality hires versus              |
| 41:35      | leading competitors.                                                                                    |
| 41:37      | LinkedIn Jobs helps you find qualified candidates you want to talk to faster.                           |
| 41:41      | Post your job for free at linkedin.com/automators.                                                |
| 41:45      | That's linkedin.com/automators to post your job for free.                                         |
| 41:48      | Terms and conditions apply.                                                                             |
| 41:50      | Thanks to LinkedIn Jobs for their support of this show and all of Relay FM.                            |
| 41:55      | So David, do you want to talk about the Mac?                                                            |
| 41:57      | Of course.                                                                                              |
| 41:58      | I mean, I love the Mac.                                                                                 |
| 41:59      | Mr. MacSparky.                                                                                         |
| 42:00      | Of course, I love the Mac.                                                                              |
| 42:02      | And I feel like this is an area where the internet isn't solving the problem for you.                   |
| 42:08      | As we increasingly make more complex automations on the Mac, this is a problem where asynchronous       |
| 42:14      | automation can really bite you because you don't see it coming.                                         |
| 42:18      | But let's get some examples first, you know, and the first entry in our outline, my favourite            |
| 42:24      | asynchronous automation app, [[Hazel]].                                                                     |
| 42:27      | Yeah.                                                                                                   |
| 42:28      | Hazel's great.                                                                                          |
| 42:29      | It just sits there.                                                                                     |
| 42:30      | It waits and then a file gets dropped in, but that file might be coming from your scanner.              |
| 42:35      | It might come from something that you've made and created or it might have been synced                  |
| 42:39      | in via [[Dropbox]], but that file was actually created three hours ago while you were, you                  |
| 42:44      | know, on a flight and you didn't have Wi-Fi, but now it's come in and your Mac's picked                 |
| 42:49      | it up and gone, whoa, I'm going to handle this now and deal with it.                                    |
| 42:53      | So, you know, [[Hazel]] itself is, you know, dealing with things, you know, synchronously when              |
| 42:57      | it gets it is going, whoop, here's the thing, I'm going to go handle that.                              |
| 43:00      | But the actual file itself that it deals with, that's not synchronous.                                  |
| 43:04      | That's, you know, that's coming in asynchronously from wherever.                                        |
| 43:07      | And it's amazing what [[Hazel]] can do with that, you know, because [[Hazel]] can be used as a trigger          |
| 43:12      | to do other things like run a shortcut or whatever, and you don't even actually have                    |
| 43:17      | to use the file.                                                                                        |
| 43:18      | It's a secret.                                                                                          |
| 43:19      | I think some people didn't know, David, you can, you can create fake files and use [[Hazel]]                |
| 43:22      | to trigger other stuff with it.                                                                         |
| 43:24      | Yeah.                                                                                                   |
| 43:25      | And it's pretty cool.                                                                                   |
| 43:26      | I wouldn't necessarily recommend that, but it's certainly a way to get things done.                     |
| 43:30      | And then when that file's there, you know, you deal with it and you delete it and that's                |
| 43:33      | it done.                                                                                                |
| 43:34      | Okay.                                                                                                   |
| 43:35      | I want to get back to that in a minute, but let's just kind of get to the basics.                       |
| 43:37      | I mean, the thing that makes [[Hazel]] particularly awesome is the asynchronous, I'm sorry, asynchronicity. |
| 43:44      | There we go.                                                                                            |
| 43:45      | How's that?                                                                                             |
| 43:46      | Because, you know, you create the rule and we could write scripts to say, take full, you                |
| 43:52      | know, take files that have this word in them and put them into this folder, but it's the                |
| 43:56      | trigger, the nature of the asynchronous trigger that makes [[Hazel]] kind of awesome.                       |
| 44:00      | Like you said, it can apply to existing files, but it also will apply to a file that gets               |
| 44:05      | created five years from now.                                                                            |
| 44:07      | So long as it's sitting on this Mac and it's running, it's just there forever.                          |
| 44:10      | And I love that.                                                                                        |
| 44:12      | But talk about it.                                                                                      |
| 44:13      | You teased us for a minute.                                                                             |
| 44:14      | So using the file creation process as a trigger in [[Hazel]], that's something we've kind of mentioned      |
| 44:20      | in the past, but let's go down that rabbit hole for a minute.                                           |
| 44:23      | Well, I mean, just looking at it this way, okay, if you want something to happen on your                |
| 44:27      | Mac when you enter a focus mode, okay, and assuming that we've not installed it, I created              |
| 44:32      | an update to focus cuts that can handle this in the meantime, you know, there's not a lot               |
| 44:36      | of ways to get that right now to like hook into a focus mode becoming active on your                    |
| 44:41      | Mac, but your iPhone is aware of your focus modes and your iPhone has automations.                      |
| 44:46      | So what your iPhone can do is it can create a file and stick it in a folder, it could                   |
| 44:50      | be an iCloud folder, it could be a Wanderer folder, it could be a [[Dropbox]] folder, whichever,            |
| 44:55      | and it can then stick a file in the folder and then when that file appears on your Mac,                 |
| 44:58      | [[Hazel]] can go, oh, I got that, and I am going to delete that file and run this shortcut.                 |
| 45:05      | And that's, you know, and that's what it does.                                                          |
| 45:06      | And so you could have a folder called like a focus mode automations, for example.                       |
| 45:10      | And then you could just, you know, have, you know, if the file name equals personal, then               |
| 45:16      | do this.                                                                                                |
| 45:17      | If the file name is fitness, do that, whatever it is, you know, the world is your oyster.               |
| 45:23      | And just, you know, create an empty text file, like it doesn't have to be crazy, you know,              |
| 45:29      | if you wanted to, you could pull like calendar events in and dump it into a JSON file and               |
| 45:35      | have shortcuts process that file and actually read information out.                                     |
| 45:39      | But there's absolutely no need to do that, you can just use [[Hazel]] as a fake file for                    |
| 45:42      | triggering things.                                                                                      |
| 45:43      | Now, I dark you, if you're just using it to trigger something, maybe [[Keyboard Maestro]]                   |
| 45:47      | is the right thing to do there, like, you know, [[Keyboard Maestro]] can also watch a folder.               |
| 45:51      | [[Hazel]] is, you know, a great tool that many of you already have, and I certainly have.                   |
| 45:57      | And it's just really nice to be able to just, you know, queue things up and have it just                |
| 46:02      | run automatically and, you know, tidy up after itself as it goes.                                       |
| 46:06      | Yeah, it's just all it's doing is looking at a folder and then looking, it has the trigger              |
| 46:11      | command, look at the contents of a file, and if the content includes the word, you know,                |
| 46:16      | work focus or whatever, then do everything and, you know, this gets back to this, this,                 |
| 46:21      | you know, this great accumulation of automation on the Mac that now [[Hazel]] can run a shortcut,           |
| 46:28      | which gives you a ton of options, it can trigger an [[AppleScript]], it can trigger a Keyboard             |
| 46:34      | Maestro script.                                                                                         |
| 46:35      | So you can do virtually anything on your Mac just by sticking a text file in the folder                 |
| 46:41      | somewhere on [[Dropbox]] that has a word in it.                                                             |
| 46:44      | And you just need to keep that in your head, you know, that's the only way, but if you                  |
| 46:48      | want to make something happen on your Mac, you're having trouble triggering it, the Keyboard            |
| 46:52      | Maestro or [[Hazel]], just look at a file and then you're off to the races.                                 |
| 46:57      | But that is very much asynchronous automation and an example of it.                                     |
| 47:01      | Yeah, yeah.                                                                                             |
| 47:03      | And you know, we mentioned [[Keyboard Maestro]] there, you know, [[Keyboard Maestro]] has like                  |
| 47:08      | the idea, there's the public web entry and there's the remote web trigger.                              |
| 47:13      | And I'm going to link to the documentation for both of those because they are slightly                  |
| 47:18      | different as to how they work.                                                                          |
| 47:19      | So it's worth checking that out just so that you know what it is.                                       |
| 47:25      | But you know, you can have that, but if your Mac's not on, you know, is that important,                 |
| 47:30      | you know, so this is where knowing whether or not your automation has to happen right                   |
| 47:35      | then and there is really useful because if your automation is only relevant, if it happens              |
| 47:40      | at the moment that the trigger is called, then you actually want something that's just                  |
| 47:44      | going to drop it on the floor if it can't deal with it.                                                 |
| 47:47      | Okay.                                                                                                   |
| 47:48      | So for example, PushCut, if your automation server is not online and you send PushCut                   |
| 47:51      | server a request, it's just like, sorry, like I tried, but you didn't answer.                           |
| 47:58      | And that's really useful when you want something that's just going to be like, hey, like, you           |
| 48:03      | know, deal with this thing for me right now, but dealing with this for me in 15 minutes                 |
| 48:07      | is too late, don't bother about it then, it'll be too late to handle it.                                |
| 48:11      | But a lot of the time you actually want something that's just like, hey, so this series of events       |
| 48:15      | has happened, meaning that this setup is ready.                                                         |
| 48:18      | And now I just need you to go do this bit of it, you know, like maybe these folders                     |
| 48:22      | got created in [[Dropbox]] and, you know, this, this, I don't know, something got created                   |
| 48:26      | in Evernote if you're using Evernote or similar.                                                        |
| 48:29      | And now I need you to, you know, run this [[AppleScript]] on my Mac.                                       |
| 48:31      | Well, it doesn't have to happen right now.                                                              |
| 48:34      | So as well as using, you know, your web triggers, you can then use the folder trigger, but you          |
| 48:38      | can also have, you know, other triggers, you know, like I mentioned before, the login trigger,          |
| 48:43      | but [[Keyboard Maestro]] just also has a periodic trigger where on a regular basis, it can just             |
| 48:48      | go look for a thing and see whether or not it's there.                                                  |
| 48:52      | You know, that's really ideal for, you know, I've put something into an air table base.                 |
| 48:58      | And I just want [[Keyboard Maestro]] to check if there's any records in the air table base.                 |
| 49:02      | And if there are records, I just want it to process them for me.                                        |
| 49:06      | And then they'll disappear from, from that view, for example.                                           |
| 49:09      | You know, that, that's really useful so that you can just have that happen.                             |
| 49:12      | And so you can have like either, you know, a trigger for something arriving, kick it off,               |
| 49:17      | or you can have it go check.                                                                            |
| 49:19      | And that's what I really like about, you know, all of the options that we have available,               |
| 49:23      | you know, you get the best of all the worlds.                                                           |
| 49:25      | Yeah.                                                                                                   |
| 49:26      | And again, the challenge here is just understanding the limitations of your chosen                      |
| 49:32      | automation, like you need to know how they break in relation to these problems and build                |
| 49:38      | around it.                                                                                              |
| 49:39      | I mean, I think Rose is a great example of taking advantage of both, you know, of these                 |
| 49:43      | options and understanding when one makes more sense than the other.                                     |
| 49:48      | I was thinking about other examples of asynchronous automation that we're doing on our Macs right       |
| 49:53      | now and, and email rules.                                                                               |
| 49:57      | I mean, that, that's a natural.                                                                         |
| 49:58      | Yeah.                                                                                                   |
| 49:59      | Yeah, it really is.                                                                                     |
| 50:00      | You know, I have a number of email rules that happen when email lands in my Mac mailbox.                |
| 50:05      | Okay.                                                                                                   |
| 50:06      | I also have email rules that happen when my email lands in my FastMail inbox, but that's               |
| 50:11      | running synchronously.                                                                                  |
| 50:12      | The second that the email hits FastMail, it's dealt with, which means that whether I look              |
| 50:16      | at it on my phone or my Mac, whatever it's already handled, but the things that I run                   |
| 50:20      | on my Mac are things which are less time sensitive and or require my Mac to do a certain part           |
| 50:25      | of it.                                                                                                  |
| 50:27      | And what I really like about mail rules is you can actually have more than the mail rules               |
| 50:33      | that just run when the Mac, when Mac, Mac mail receives mail, right?                                    |
| 50:38      | You can actually have mail rules and I've got a number of these David, I'm sure you                     |
| 50:42      | do too, which go, Hey, so if I've got emails from like this thing that was received over                |
| 50:47      | a day ago, delete it, well, that's never going to run when an email arrives because when                |
| 50:51      | an email arrives, it won't have arrived more than a day ago, will it?                                   |
| 50:54      | Yeah.                                                                                                   |
| 50:55      | Or it's very unlikely, perhaps if you've had your Mac shut down and you've been on vacation             |
| 50:59      | for a couple of weeks, then that would probably kick in.                                                |
| 51:05      | But what it means I can do is at the end of the day, I can just select all the mail in                  |
| 51:08      | my inbox and apply mail rules and they'll just disappear.                                               |
| 51:12      | Or I can have [[Keyboard Maestro]] activate mail, select all the mails in the inbox and then                   |
| 51:18      | trigger the menu for and just apply mail rules, please, thank you.                                      |
| 51:22      | Which is something that I do as a sneaky way to automate the nature of that.                            |
| 51:29      | But it's kind of amazing what you can do with one of those because you can get super nerdy              |
| 51:35      | if you want to.                                                                                         |
| 51:36      | Yeah.                                                                                                   |
| 51:37      | Agreed.                                                                                                 |
| 51:38      | Agreed.                                                                                                 |
| 51:40      | What else?                                                                                              |
| 51:41      | Where are we also seeing asynchronous automation on our Macs?                                           |
| 51:45      | Well, shortcuts, David.                                                                                 |
| 51:47      | Shortcuts is asynchronous.                                                                              |
| 51:48      | It doesn't have an automation.                                                                          |
| 51:49      | It doesn't have a way to run.                                                                           |
| 51:50      | You have to run it manually through something.                                                          |
| 51:53      | So you click a shortcut, that's asynchronous, it'll pick up a thing perhaps, it'll send                 |
| 51:58      | something else somewhere else, but those don't have to be synchronous.                                  |
| 52:01      | So if you're doing it manually, then it's almost certainly asynchronous.                                |
| 52:05      | It might be that you tap button A and then you tap button B, so it feels like everything's              |
| 52:10      | running together, but there's nothing to stop you tapping button A and then going off for               |
| 52:14      | three hours, coming back and tapping button B, going and taking a nap, coming back and                  |
| 52:18      | seeing whether or not it did the thing, and then going, okay, yep, that's fine.                         |
| 52:22      | Or you could just tap A and then B. It's up to you.                                                     |
| 52:25      | How many of your automations require a tap versus just fire automatically?                              |
| 52:30      | I mean, it depends on how you define require a tap.                                                     |
| 52:35      | This sounds really silly, but technically, when I start recording, for example, automators              |
| 52:40      | iOS today, Nested Folders, I tap actually a bunch, I activate a bunch, and that will                   |
| 52:47      | fire off a number of different things, which cause various different automations to happen.             |
| 52:52      | You know, when I started recording automators today, it activated my podcast focus mode,                |
| 52:56      | it did various things, and it popped up a [[Keyboard Maestro]] input box, which said, hey,                  |
| 53:01      | what's the episode number?                                                                              |
| 53:04      | And that [[Keyboard Maestro]] input box just waited for me to finish typing in the episode number,          |
| 53:08      | which happened a few minutes later, and hit okay, and then it saved it into the right                   |
| 53:14      | place so that it could use that later when it needs to rename the episode numbers.                      |
| 53:19      | But so technically, there's a tap involved, like five or six different things happen based              |
| 53:26      | on that one tap, so I don't know if technically that counts as manual or automatic or a combination     |
| 53:33      | of both.                                                                                                |
| 53:34      | Well, and I'm glad you said that, because the reason I asked the question is, I think                   |
| 53:37      | a lot of people get hung up on that automation stuff, like, and we've even talked on the                |
| 53:41      | show, like, oh, we're going to make our podcast automation trigger when it sees a calendar              |
| 53:45      | of, and this is automators in it, and then there is no tap, it just happens.                            |
| 53:50      | But I think that people get too hung up on that, and there's nothing wrong with having                  |
| 53:56      | a tap to get, you know, there's 12 things you need to do to do this work project, right?                |
| 54:03      | And there's nothing wrong with saying, well, I'm going to do a single tap, and then it's                |
| 54:06      | going to open the web pages and create the Word document and do all, you know, all the                  |
| 54:10      | stuff that needs to be done in order for me to get into this mode or do this type of work.              |
| 54:16      | And people feel like they're doing it wrong because they have to tap, and there's nothing               |
| 54:19      | wrong with that.                                                                                        |
| 54:20      | I really want to just emphasise that, and if you want to automate it so it happens automatically,       |
| 54:25      | that's great, but you know what, sometimes when you do those, when you get super clever                 |
| 54:28      | with your automation, you'll be doing something entirely different on your computer, and suddenly       |
| 54:33      | your computer goes into that mode, opens web pages and creates Word documents right on                  |
| 54:38      | top of what you were focused on.                                                                        |
| 54:39      | Yeah.                                                                                                   |
| 54:40      | Or worse, it closes all of your open windows so that, you know, like the thing that you                 |
| 54:45      | were using is just disappeared in front of you.                                                         |
| 54:48      | Yeah.                                                                                                   |
| 54:49      | Not fun.                                                                                                |
| 54:50      | And it's such a burden to get that working right and take so much debugging sometimes                   |
| 54:55      | that you feel like it's not worth it, where if you had just done the simple part, you                   |
| 55:00      | know, create a shortcut that opens three browser tabs in [[Safari]], you know, turns on a focus             |
| 55:07      | mode and opens Microsoft Word, you could create that in all of 10 minutes and, you know, and            |
| 55:15      | attach it to Roses app.                                                                                 |
| 55:16      | So when you're in the focus mode, it shows up in the menu bar and you click it once and                 |
| 55:20      | then you're just done.                                                                                  |
| 55:22      | You spent 10 minutes on it and it's an automation that starts serving you immediately.                  |
| 55:26      | I feel like people, it's okay guys, you know, you don't need to go to level 10 with everything          |
| 55:31      | you automate.                                                                                           |
| 55:32      | Exactly.                                                                                                |
| 55:33      | And, you know, in many ways, it's better to do something like that and you might be thinking,           |
| 55:38      | okay, but that's fine.                                                                                  |
| 55:39      | But now I've got like seven shortcuts.                                                                  |
| 55:41      | I need to run with a tap or, you know, I've got seven [[Keyboard Maestro]] macros.                          |
| 55:45      | I'm going to let everyone in on a really big secret.                                                    |
| 55:49      | You can create a single [[Keyboard Maestro]] macro or a single shortcut or whatever it is that              |
| 55:54      | will then run all of those other ones for you.                                                          |
| 55:57      | So you can combine that into one tap for the places where it makes sense.                               |
| 56:01      | So you can have a single button on your [[Stream Deck]] which is for run my work focus mode automations.    |
| 56:07      | And you can have a single shortcut show up in your focus cuts menu bar for run my work                  |
| 56:11      | focus mode automation setup.                                                                            |
| 56:14      | And then, you know, you can have that there and then you click it once and it runs those                |
| 56:18      | seven or eight different things or however many it is that you need.                                    |
| 56:22      | But you also, you know, have the ability to just say, hey, actually, you know, I just                   |
| 56:26      | want to like test this a little bit of it out and I'm going to do that bit.                             |
| 56:30      | You know, maybe, you know, if you activate your work focus mode, [[Keyboard Maestro]] maybe                 |
| 56:35      | does get a prompt to say, hey, do you want to do this?                                                  |
| 56:38      | But instead of having your, your automation run entirely automatically, it'll actually                  |
| 56:43      | just pop up a thing and go, hey, do you want to do this?                                                |
| 56:46      | Like I could automate the number of the automators episode.                                             |
| 56:51      | Every time we start recording, I could just add one to the previous number, but there's                 |
| 56:55      | a number of good reasons why I don't do that.                                                           |
| 56:58      | First of all, I didn't do it to start with because I wanted to make sure it was right.                  |
| 57:01      | And secondly, very occasionally, we record episodes out of order, secrets from behind                   |
| 57:06      | the automators, David, but, you know, like, or, or, you know, if something happened and                 |
| 57:11      | I, you know, if I was really ill and I missed an episode or something and you got somebody              |
| 57:15      | to stand in for me, which I know you would, David, because you're awesome like that.                    |
| 57:20      | You know, then I could jump an episode without having to run that automation twice.                     |
| 57:24      | But, you know, the automation that sets the episode number is something I can also run                  |
| 57:28      | independently.                                                                                          |
| 57:29      | So when today I typoed when entering the episode number, so we were recording episode 11, David,        |
| 57:34      | whoops, that was 102 episodes ago where we've come a long way since then, you know, I could             |
| 57:41      | just run that little bit again and go, yeah, yes, I typoed here.                                        |
| 57:44      | I'm just going to type do that bit again.                                                               |
| 57:46      | And that was it.                                                                                        |
| 57:47      | Simple, easy.                                                                                           |
| 57:49      | And it allows you to really, you know, take advantage of being able to break things down                |
| 57:52      | all the way.                                                                                            |
| 57:53      | And, you know, when mistakes happen, because, you know, nobody's perfect.                               |
| 57:57      | Even with automation, mistakes can happen.                                                              |
| 58:00      | Sometimes mistakes happen because of automation, but that's, you know, that that's life.                |
| 58:05      | You know, you can, you can just go back and easily handle that.                                         |
| 58:09      | And when something's broken, you know, maybe an app has updated or an app hasn't updated,               |
| 58:14      | but you've updated something and there's a part that's broken.                                          |
| 58:17      | You can disable the bit that doesn't work and you can have everything else run and,                     |
| 58:21      | you know, because it's popping up and going, hey, do you want to run?                                   |
| 58:23      | You'll go, oh, right.                                                                                   |
| 58:24      | That's broken.                                                                                          |
| 58:25      | That's my prompt.                                                                                       |
| 58:26      | I need to write down that I need to fix that.                                                           |
| 58:27      | I'm going to put that into my task management system and, you know, and just handle it so               |
| 58:32      | that you're, you're good to go.                                                                         |
| 58:33      | And, you know, you don't have stuff randomly taking over your screen and rearranging all                |
| 58:38      | of your apps when you accidentally hit that particular, you know, thing in, in that app                 |
| 58:43      | or, you know, it's Tuesdays at 11 a.m., but this Tuesday, 11 a.m., you don't actually                   |
| 58:47      | have that meeting.                                                                                      |
| 58:48      | So, you know, it, it started doing the thing, even though you didn't need it to, it just                |
| 58:53      | prompted you to do it and you said, no, not today.                                                      |
| 58:56      | We're good.                                                                                             |
| 58:57      | I mean, you talked about triggering automation, you know, in ways on your Mac and Keyboard              |
| 59:02      | Maestro has a great feature called the Conflict Palette.                                                |
| 59:05      | And that means if you have two [[Keyboard Maestro]] scripts that have the same shortcut trigger,            |
| 59:12      | it just puts them both on and then it highlights the first letter that's different.                     |
| 59:16      | If one is called Rose and one's called David and you type R, then it's going to go to Rose.             |
| 59:21      | And I have very intentionally taken advantage of that.                                                  |
| 59:26      | So anything that I make that is related to MacSparky has, in addition to other triggers,               |
| 59:32      | Control Option Command M. And anything that is related to my personal life, you know,                   |
| 59:38      | go to the bank website or whatever, it has a shortcut Control Option Command P. And then,               |
| 59:45      | so anytime I type one of those two letters, I get a massive Conflict Palette list.                      |
| 59:50      | But because they index by letter and the list shrinks down, like if there are two things                |
| 59:55      | that start with an R and I type R, then the list shrinks down to two.                                   |
| 59:59      | And then after a while, your fingers just remember what the extra keys are you push.                    |
| 01:00:03   | But it's a great way to make lots of triggers without having to remember them.                          |
| 01:00:12   | And you could argue that I could be a better automator and make that.                                   |
| 01:00:15   | So I don't even have to hit the magic Command M button to make these things happen.                     |
| 01:00:22   | But it's a great way when I'm working out automations, I don't have to fiddle with triggers.            |
| 01:00:27   | I just add it to the Conflict Palette.                                                                  |
| 01:00:29   | And a lot of times they never progress beyond that because I get so used to it.                         |
| 01:00:33   | I know that if I want to open up all the tabs for the MacSparky Labs when I need to update             |
| 01:00:37   | them with new content, I just type Control Option Command M and it opens a Conflict                     |
| 01:00:43   | Palette.                                                                                                |
| 01:00:44   | And if I type L M space, it opens all the tabs and does everything I need.                              |
| 01:00:48   | And I'm not even sure why that is, but the way it lines up, that's what happens.                        |
| 01:00:52   | And my fingers have memorised that now.                                                                 |
| 01:00:55   | So that is an automation.                                                                               |
| 01:00:57   | And I guess just my point being, with a synchronicity, but also just with the simplicity of triggers,   |
| 01:01:05   | you don't need to make this stuff overly complex.                                                       |
| 01:01:08   | Exactly.                                                                                                |
| 01:01:09   | Having a little bit of the person needs to pick this up and take it to the next step                    |
| 01:01:13   | so that the next part of the flow can continue can actually be a really, really good thing.             |
| 01:01:19   | I don't use the Conflict Palette that much in [[Keyboard Maestro]] David.                                   |
| 01:01:23   | I probably should use the palettes more.                                                                |
| 01:01:25   | I feel like I'm not getting enough benefit out of them.                                                 |
| 01:01:28   | But I've been using [[Stephen Millard\|Stephen Millard's]], who's been on the show before.                                     |
| 01:01:32   | He's got some great [[Alfred]] workflows, including one for [[Keyboard Maestro]].                               |
| 01:01:37   | So you can get all of your [[Keyboard Maestro]] markers into [[Alfred]].                                        |
| 01:01:41   | Love that.                                                                                              |
| 01:01:42   | So good.                                                                                                |
| 01:01:43   | He's got a number of [[Alfred]] workflows, which I'll make sure that people get the link to.                |
| 01:01:47   | Because sometimes I just want a thing to pop up and go, hey, you need to do the thing,                  |
| 01:01:51   | and then I will do the thing.                                                                           |
| 01:01:53   | And it could be that I click on a notification to have the thing run.                                   |
| 01:01:57   | And it could be providing input.                                                                        |
| 01:01:59   | That's one of the ways I use push cut to circle back to the top of the show.                            |
| 01:02:03   | But sometimes it's also just a, hey, a thing has happened and you should go do the other                |
| 01:02:08   | thing.                                                                                                  |
| 01:02:09   | But for example, a pull request happens at work.                                                        |
| 01:02:11   | So somebody's written some code and they're asking other developers to go and look at                   |
| 01:02:15   | it and say, OK, this is good.                                                                           |
| 01:02:17   | You can put that into the main piece of code or there's maybe a problem there.                          |
| 01:02:22   | When that happens, I have a little pop up saying, hey, go review this person's code.                    |
| 01:02:26   | But it comes in as a silent notification and when I click it, it opens the URL.                         |
| 01:02:30   | That's it.                                                                                              |
| 01:02:31   | And I don't want that automatically opening up that URL every time somebody creates a                   |
| 01:02:37   | pull request.                                                                                           |
| 01:02:38   | Because you know what?                                                                                  |
| 01:02:39   | Some days it feels like all that happens is like a pull request every five minutes.                     |
| 01:02:42   | And I wouldn't actually get any of the rest of my job done, like part of my job is reviewing            |
| 01:02:46   | other people's code.                                                                                    |
| 01:02:47   | Most of my job is writing code for other people to review.                                              |
| 01:02:49   | I need to actually have time to write it.                                                               |
| 01:02:52   | So having something just pop up all the time going, hey, go review the thing, go review                 |
| 01:02:55   | the thing, go review the thing, that's not going to help me do my job.                                  |
| 01:02:59   | But having something pop up so I can just click on it and go, yep, then there we go.                    |
| 01:03:02   | I can see this and go straight to it.                                                                   |
| 01:03:05   | That works for me.                                                                                      |
| 01:03:07   | So it's quite nice to have those options for just like, hey, this thing's going to be here.             |
| 01:03:13   | And when I click on this, this automation happens, which enables that bit there.                        |
| 01:03:16   | But if I don't click on it, then nothing happens.                                                       |
| 01:03:18   | Or if my Mac isn't on right now, it's OK.                                                               |
| 01:03:22   | It'll get picked up later and it'll get handled because yes, I need, you know, this particular          |
| 01:03:26   | folder template with these, you know, files and stuff in there on my Mac.                               |
| 01:03:30   | But if my Mac's not on, then I don't need those files just yet.                                         |
| 01:03:33   | It's OK.                                                                                                |
| 01:03:34   | It can wait until the next time I max on.                                                               |
| 01:03:38   | This episode of Automators is brought to you by ExpressVPN.                                             |
| 01:03:41   | You've probably heard by now that you should be using a VPN when you connect to the internet.           |
| 01:03:44   | But adding an extra step to anything you do every day can just sound like a hassle.                     |
| 01:03:47   | Well, if you knew how easy it is to protect your connection with ExpressVPN, you'd be                   |
| 01:03:51   | doing it already.                                                                                       |
| 01:03:53   | ExpressVPN is the easiest way to browse safely, securely and just better.                               |
| 01:03:58   | Sometimes you do just need to be able to get to something that's only available when you're             |
| 01:04:01   | in another country or, you know, just make sure that that really dodgy Wi-Fi connection                 |
| 01:04:05   | is potentially a little bit safer than it should be and, you know, actually avoids all                  |
| 01:04:10   | of those horrible blocking things that things like doctor's offices always throw up.                    |
| 01:04:14   | Well, with a VPN, you can do that.                                                                      |
| 01:04:16   | And with ExpressVPN, it's really easy to set it up.                                                     |
| 01:04:19   | And, you know, I've set it up for my parents and it's working great for them, too.                      |
| 01:04:23   | ExpressVPN gets rid of all those things you hate about VPNs.                                            |
| 01:04:26   | It's a VPN done right.                                                                                  |
| 01:04:27   | First of all, it is blazing fast.                                                                       |
| 01:04:29   | Lots of other VPNs slow your connection to the point where it's not even worth it to                    |
| 01:04:33   | connect.                                                                                                |
| 01:04:34   | But ExpressVPN doesn't lag or buffer and you can stream HD with no issues.                              |
| 01:04:38   | And using it couldn't be easier.                                                                        |
| 01:04:39   | Just open the ExpressVPN app, tap one button and enjoy instant protection across all your               |
| 01:04:44   | devices.                                                                                                |
| 01:04:45   | The fact is, once you connect to ExpressVPN, you don't even realise you have it on.                     |
| 01:04:48   | But your connection is secure, your taste is encrypted, and you can speak for your location             |
| 01:04:52   | so you've got access to content available outside your region.                                          |
| 01:04:55   | No wonder it's been called the best VPN by CNET.                                                        |
| 01:04:58   | Right now, go to expressvpn.com/automators, and you can get an extra three months of ExpressVPN   |
| 01:05:03   | for free.                                                                                               |
| 01:05:04   | That's expressvpn.com/automators to get three extra months of ExpressVPN.                         |
| 01:05:09   | Expressvpn.com/automators.                                                                        |
| 01:05:12   | Our thanks to ExpressVPN for their support of this show and all of Relay FM.                            |
| 01:05:18   | We've been talking about the Mac and the web, but let's talk about iPhone and iPad.                     |
| 01:05:22   | A lot of us are doing automation there.                                                                 |
| 01:05:25   | Where do you see asynchronicity in your automation on those devices?                                   |
| 01:05:31   | Well anything that doesn't have ask before running is a toggle I can turn off is asynchronous           |
| 01:05:35   | because it's going to pop up and go, hey, you got an email from David Sparks.                           |
| 01:05:39   | Would you like to run your shortcuts automation?                                                        |
| 01:05:42   | And I have to go and tap yes, please.                                                                   |
| 01:05:43   | I want to run the automation.                                                                           |
| 01:05:44   | Thank you very much.                                                                                    |
| 01:05:45   | And it's also limited in what it can do there.                                                          |
| 01:05:49   | But also push cut is a great example of this.                                                           |
| 01:05:53   | I have it pop up and ask me, hey, do you want to run this scene or that scene?                          |
| 01:05:57   | Do you want to run this shortcut or do you want to run that shortcut?                                   |
| 01:06:03   | Usually the options, it'll be like run this shortcut to have this thing update or run                   |
| 01:06:06   | that shortcut to have this thing removed from the list of things that need to be handled                |
| 01:06:12   | as those options.                                                                                       |
| 01:06:13   | But it can be really useful to have that sort of stuff pop in together so that when                     |
| 01:06:23   | widget pack updates with a widget, I can tap on that one, it'll run this shortcut.                      |
| 01:06:29   | When push cut updates that widget, it'll run that shortcut, whatever, when I tap on it.                 |
| 01:06:35   | But it won't do anything until I tap on it.                                                             |
| 01:06:37   | And that can be quite nice for just a, hey, here's a thing, get to me when you can please.              |
| 01:06:43   | Because I feel like a part of the thing that we have to deal with, with computing now,                  |
| 01:06:47   | and automation can help with this, but it can also be unhelpful to an extent is everything              |
| 01:06:52   | wants our attention and it wants our attention right here and right now.                                |
| 01:06:56   | And sometimes you don't need that, right?                                                               |
| 01:06:59   | You just want to keep going and focusing on what you're focusing on and then come back                  |
| 01:07:04   | to the thing that's going, hey, me over here, me, me, me, me, me, me, me, me, like that can             |
| 01:07:08   | actually wait five minutes until you get to it.                                                         |
| 01:07:10   | In fact, I'd modify that, say, usually you don't need that.                                             |
| 01:07:14   | I mean, it's very rare that you do need it to grab your attention right in the middle.                  |
| 01:07:19   | Exactly.                                                                                                |
| 01:07:20   | Where is, do you think the problem with asynchronicity and automation, I mean, how does this create     |
| 01:07:26   | potholes for people who want to create automation and what are the things we should be looking          |
| 01:07:30   | out for as we're building automation to account for this?                                               |
| 01:07:34   | Yeah, I think the problem, like this happens much more easily if you're coming from a                   |
| 01:07:40   | company, everything is in a very long line and it's all linked together and this bit                    |
| 01:07:43   | happens and this bit happens and this bit happens and this bit happens.                                 |
| 01:07:46   | It's very easy when you start breaking things up to not be aware of the links that are actually         |
| 01:07:51   | there between the chunks of your automation and therefore to not have a piece of data                   |
| 01:07:55   | that you need or to go, yeah, it's fine, like this bit can just run and then realise that               |
| 01:08:00   | actually it needed a folder in [[Dropbox]] to already exist.                                                |
| 01:08:08   | And so it can get you in a bit of trouble occasionally, especially when you start breaking things       |
| 01:08:11   | down and it turns out that you can't break that down there, but you can also work around                |
| 01:08:18   | things like this by just storing a little bit of information to say, hey, I went and                    |
| 01:08:22   | I did this thing, like this thing's already been done.                                                  |
| 01:08:24   | And so when it checks to see whether or not it should be doing a thing, it can say, hey,                |
| 01:08:28   | is there a thing for me to do and am I okay to go ahead and do it right now?                            |
| 01:08:33   | And if it's not okay to go ahead and do it, you can handle that in one of two ways.                     |
| 01:08:37   | Why there you can kick off the thing that's going to go do the bit that needs doing first               |
| 01:08:41   | potentially, or you can, you know, just not do anything.                                                |
| 01:08:46   | You can just say, okay, I'm going to stop.                                                              |
| 01:08:48   | Like that's it.                                                                                         |
| 01:08:49   | I'm go, wait, maybe I'm going to tell you that I can't do this thing right now.                         |
| 01:08:52   | Maybe I'm not going to tell you that I can't do this thing right now.                                   |
| 01:08:54   | Maybe I'm going to log that I tried to do this thing and when I hit five attempts of                    |
| 01:08:58   | doing this thing and I couldn't do it, I'm then going to pop up and go, hey, I've tried                 |
| 01:09:02   | to do this five times now and I just can't do this, like this bit is missing.                           |
| 01:09:07   | Like I need help, you know, and it can certainly be slightly problematic sometimes if you're            |
| 01:09:13   | waiting on something, you know, and that information is not there, but this is also a quite a           |
| 01:09:18   | good way to work around a, like you're building an automation based on somebody else delivering         |
| 01:09:22   | a thing.                                                                                                |
| 01:09:24   | And then you can actually, you know, think about it as well, I'm going to build it based                |
| 01:09:28   | on when that bit happens, then it's going to go and do this bit so that, you know, you're               |
| 01:09:32   | not having to put somebody on your waiting on list and your task manager and then follow                |
| 01:09:36   | up with them on a periodic basis quite as much, you know, you'll still want to follow                   |
| 01:09:40   | up with them if something doesn't happen.                                                               |
| 01:09:42   | But when something happens, like your system just automatically sits there is waiting and               |
| 01:09:46   | it just launches in without you, you know, going and manually doing the thing and it'll                 |
| 01:09:50   | do everything up to the point it can and then throw something on your tasks for you to finish           |
| 01:09:53   | off the rest of it.                                                                                     |
| 01:09:55   | Yeah, I think it's just something we need to be aware of is a way to find yourself in                   |
| 01:10:00   | trouble, but also it's kind of delightful.                                                              |
| 01:10:02   | I mean, isn't that some of the best parts of automation is when things are asynchronous                 |
| 01:10:07   | and they still happen, like you're in bed and your computers are doing work for you.                    |
| 01:10:12   | I mean, who doesn't know that, right?                                                                   |
| 01:10:14   | Yeah, I mean, what I really love in the morning is because I put my Mac Studio to sleep at              |
| 01:10:18   | night.                                                                                                  |
| 01:10:19   | Okay, I don't have an always on Mac anymore, David.                                                     |
| 01:10:21   | This is something I've experimented with on and off and I have a Mac Mini here.                         |
| 01:10:26   | I could burn it as an always on computer.                                                               |
| 01:10:28   | I'm currently not doing that for various reasons.                                                       |
| 01:10:30   | But, you know, it's something that I've experimented with and I've come to a conclusion that I don't    |
| 01:10:34   | need that.                                                                                              |
| 01:10:35   | So what I do in the morning now is I pop into my office, you know, as I'm grabbing breakfast            |
| 01:10:40   | and I will just wake up my Mac Studio and go, you know, like, hey, here you go.                         |
| 01:10:44   | Here's the password.                                                                                    |
| 01:10:45   | You know, have acted and it'll just pick up anything that needs to be handled and deal                  |
| 01:10:49   | with it.                                                                                                |
| 01:10:50   | And usually there's like a couple of things, but every software will pop back in here.                  |
| 01:10:53   | It'll go, oh, by the way, like, hey, this guest uploaded their audio last night.                        |
| 01:10:58   | And you know, I've just renamed it and put it in the folder for you.                                    |
| 01:11:02   | Awesome.                                                                                                |
| 01:11:03   | Thanks.                                                                                                 |
| 01:11:04   | Like, I love that.                                                                                      |
| 01:11:05   | Like, you've moved that into the right episode photo for me because when we recorded the                |
| 01:11:07   | episode, remember, I set the episode number.                                                            |
| 01:11:10   | So that then when I finished the recording, so that's the first part of that automation,                |
| 01:11:14   | you know, I set the episode number.                                                                     |
| 01:11:16   | And then the next part of the automation is we record.                                                  |
| 01:11:18   | But when we finished the recording, [[Keyboard Maestro]] is watching the folder for the files                |
| 01:11:21   | and it picks it up and it renames it and sticks it in the folder with the right name.                   |
| 01:11:25   | So then if a guest uploads their audio or, you know, I record the ads, then it'll grab                  |
| 01:11:30   | those and pop those in there as well.                                                                   |
| 01:11:32   | And yes, these are all mini automations, they're synchronous automations.                               |
| 01:11:36   | But the whole big thing, well, that's just waiting on random bits to happen here and                    |
| 01:11:40   | there.                                                                                                  |
| 01:11:41   | And it doesn't matter what order things happen in, as long as, you know, all the information            |
| 01:11:45   | is there so it can take advantage of it.                                                                |
| 01:11:47   | And it's really nice coming in in the morning, you know, so I'll do that and I'll wander                |
| 01:11:50   | off, have breakfast, come back, switch over to my work Mac and glance over at my personal               |
| 01:11:54   | Mac and go, whoa, you did a lot of stuff this morning, didn't you?                                      |
| 01:11:58   | Thanks.                                                                                                 |
| 01:11:59   | You know, and it's just nice.                                                                           |
| 01:12:01   | Yeah, it's just really nice seeing that, you know, it'll be like, hey, I did this thing                 |
| 01:12:05   | and that thing and the other thing.                                                                     |
| 01:12:06   | And by the way, all of these things have been done too, and it's like, cool, awesome.                   |
| 01:12:10   | Now I just need to like hook you into OmniFocus so that you can actually like do all the things         |
| 01:12:14   | for me.                                                                                                 |
| 01:12:15   | And if you could really, you know, if you can run to the store and pick up some lemons                  |
| 01:12:18   | as well, that'd be great.                                                                               |
| 01:12:20   | But my Mac Studio is unfortunately not got likes yet.                                                   |
| 01:12:22   | I need to work on that somehow, but I'm sure I'll solve that problem in no time.                        |
| 01:12:27   | The future we are waiting for.                                                                          |
| 01:12:29   | Either way, I hope you've enjoyed listening to us talk about asynchronous automation.                   |
| 01:12:33   | I think it's the thing we need to be aware of.                                                          |
| 01:12:35   | And we've had a lot of fun talking today about some of the ways it's applied on various platforms.      |
| 01:12:40   | We are the Automators podcast.                                                                          |
| 01:12:41   | You can find us at relay.fm/automators.                                                           |
| 01:12:44   | You can find our forums over at talk.automators.fm.                                                     |
| 01:12:48   | By the way, Rose just recently had an automation question and searched it and found the answer          |
| 01:12:54   | in our forums.                                                                                          |
| 01:12:55   | I love it when that happens.                                                                            |
| 01:12:56   | It happens to me so often.                                                                              |
| 01:12:58   | It's almost like every other day when I'm Googling something related to shortcuts or                    |
| 01:13:01   | [[Keyboard Maestro]].                                                                                       |
| 01:13:02   | And so [[Keyboard Maestro]], this has got its own forum as well, which has got lots of great                |
| 01:13:05   | stuff in there.                                                                                         |
| 01:13:06   | But love the time.                                                                                      |
| 01:13:07   | I Google something and the Automators forum pops up.                                                    |
| 01:13:10   | And it just gives me a great feeling because there's so many awesome people there doing                 |
| 01:13:13   | amazing things.                                                                                         |
| 01:13:14   | It's wonderful.                                                                                         |
| 01:13:15   | Yeah, and we've got sponsors today, we want to thank that's masterclass, electric and                   |
| 01:13:19   | LinkedIn jobs.                                                                                          |
| 01:13:20   | Thank you for all the support.                                                                          |
| 01:13:22   | Please go check out our sponsors.                                                                       |
| 01:13:23   | It helps us keep the lights on here.                                                                    |
| 01:13:25   | We are the Automators podcast.                                                                          |
| 01:13:27   | Like I said, today on Automators Max, we're going to be talking about something I've been               |
| 01:13:31   | dealing with lately is task automation and comparing OmniFocus and the [[Apple Reminders]]                  |
| 01:13:36   | app.                                                                                                    |
| 01:13:37   | I've been on a little journey.                                                                          |
| 01:13:38   | I want to talk about it.                                                                                |
| 01:13:39   | We'll be doing that later today.                                                                        |
| 01:13:40   | Otherwise, we'll see you next time.                                                                     |
| 01:13:42   | Goodbye, folks.                                                                                         |
| 01:13:43   | Bye.                                                                                                    |
