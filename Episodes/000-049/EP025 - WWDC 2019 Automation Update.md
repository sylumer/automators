---
status: "incomplete"
fc-date:
  year: 2019
  month: 06
  day: 07
fc-category: "podcast"
podcast: "Automators"
published: 2019-06-07
duration: 3698
formattedduration: "01:01:38"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/25"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators025.mp3"
episode: 25
title: "25: WWDC 2019 Automation Update"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Happy WWDC week! David and Rose are on the ground at WWDC in San Jose to bring you up to speed on the new automation heading to iOS and iPadOS. They also recap WWDC, the Automator's meetup, and Rose describes how she lost a fight with a leaf.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 025 Discussion](https://talk.automators.fm/t/automators-25-wwdc-2019-automation-update/4919)

# Sponsors
- [[Timing (Sponsor)|Timing]] - The automatic time tracking app for macOS.
- [[PDFpen (Sponsor)|PDFpen 11, from Smile]] - The ultimate PDF viewing and editing app for the Mac.

# Show Notes
- [iOS 13 Preview - Apple](https://www.apple.com/ios/ios-13-preview/)
- [iPadOS Preview - Apple](https://www.apple.com/ipados/ipados-preview/)
- [macOS Catalina - Apple](https://www.apple.com/macos/catalina-preview/)
- [MacStories Summary of new Siri Shortcut Triggers](https://www.macstories.net/news/the-full-list-of-automation-triggers-in-shortcuts-for-ios-13/)
- [The Automators San Jose Meetup](https://www.dropbox.com/s/3nn750uuik92k4h/IMG_2207.jpeg?dl=0) - Never has there been a more attractive group of Automators.

# Transcription

| Time Index | Transcription                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automators.                                                                      |
| 00:04      | I am Rosemary Orchard and this week's episode is brought to you from San Jose where I am              |
| 00:09      | sitting across from a suitcase with David.                                                            |
| 00:12      | Hello David.                                                                                          |
| 00:13      | Rose, it's not only a suitcase, it's a suitcase with my shoes on it to prop up microphones.           |
| 00:19      | There will be a picture of this in the show notes for anybody who is very curious.                    |
| 00:23      | It is a weird recording setup, but it's working.                                                      |
| 00:25      | Yeah.                                                                                                 |
| 00:26      | Yeah.                                                                                                 |
| 00:27      | So both of us got to San Jose, Rose came down and visited me in Southern California for               |
| 00:31      | a few days before we came up.                                                                         |
| 00:33      | And Rose, you've had a little problem here in San Jose, haven't you?                                  |
| 00:38      | Just a little problem.                                                                                |
| 00:40      | So they have these scooters everywhere, which are really good fun.                                    |
| 00:43      | They are so much fun.                                                                                 |
| 00:45      | And so I got on some scooters with some friends.                                                      |
| 00:48      | We were going to go to have dinner together and it was great.                                         |
| 00:51      | And we turned a corner off of a bike lane onto a pedestrian street and then there was                 |
| 00:56      | a leaf.                                                                                               |
| 00:57      | I have never been so surprised by a leaf in my life because it flew into my wheel.                    |
| 01:02      | My wheel lost traction and I slammed into the ground.                                                 |
| 01:05      | So I have a sprained ankle right now, which is great fun.                                             |
| 01:08      | She's got a sprained ankle.                                                                           |
| 01:10      | She's got a wrist strap.                                                                              |
| 01:11      | I mean, gang, Rose is literally bleeding for you here to bring you the latest automator's             |
| 01:17      | news.                                                                                                 |
| 01:18      | But I have to say I've still had a great week despite the injuries.                                   |
| 01:23      | So I'm doing very well.                                                                               |
| 01:25      | And the good news is I'm looking at her ankle now.                                                    |
| 01:27      | It's a lot smaller than it was a few days ago.                                                        |
| 01:29      | So we think she's going to survive.                                                                   |
| 01:31      | Oh, yeah.                                                                                             |
| 01:32      | Yeah.                                                                                                 |
| 01:33      | There's no amputation possibilities here.                                                             |
| 01:34      | We're not going to lose Rose.                                                                         |
| 01:35      | Yeah.                                                                                                 |
| 01:36      | All right.                                                                                            |
| 01:37      | Yeah.                                                                                                 |
| 01:38      | It's been a great week in San Jose for [[WWDC]].                                                          |
| 01:40      | It was really fun.                                                                                    |
| 01:41      | We're going to talk at the end of the episode about the meet up and just the general vibe              |
| 01:45      | here at [[WWDC]].                                                                                         |
| 01:47      | It's been great, but it's been wonderful seeing all the automator's fans out there.                   |
| 01:52      | There's a ton of you, especially in this environment.                                                 |
| 01:56      | So we thank you all for that.                                                                         |
| 01:59      | Also was one other bit of news is the Mac Power users scored a big win this year.                     |
| 02:03      | We got to interview the product manager for the new Mac Pros.                                         |
| 02:07      | So if you're interested at all in that, even just to kind of get an idea of what Apple's              |
| 02:11      | thinking with those fancy new Macs, go over and listen to the latest episode of Mac Power             |
| 02:16      | Users.                                                                                                |
| 02:17      | I'll put it in the show notes.                                                                        |
| 02:18      | Yes.                                                                                                  |
| 02:19      | And you'll find out what the product manager of the Mac Pros first Mac was, which is a                |
| 02:24      | cliffhanger I'm going to leave you with.                                                              |
| 02:26      | All right.                                                                                            |
| 02:27      | But we're here to talk about automation.                                                              |
| 02:30      | And for today's episode, we thought what we'd do is just kind of share the automation                 |
| 02:34      | news coming out of [[WWDC]].                                                                              |
| 02:37      | Yes.                                                                                                  |
| 02:38      | And let's just say we are going to be going through it fast, not quite as fast as the                 |
| 02:43      | keynote went, where within 10 minutes they've moved on from watchOS, but there's a lot                |
| 02:49      | of things to cover here.                                                                              |
| 02:50      | Yeah.                                                                                                 |
| 02:51      | The first thing, I mean, this year at [[WWDC]], it seems in particular, Apple had a lot of                |
| 02:55      | big news, [[SwiftUI]], the new Mac Pros, they just had a lot of really big items to cover.               |
| 03:01      | And as a result, automation didn't get the love it did last year, you know, Siri Short                |
| 03:06      | Cuts was a big feature of the keynote last year, whereas this year it didn't even get                 |
| 03:11      | mentioned in the keynote.                                                                             |
| 03:12      | It was it was mentioned in the state of the union.                                                    |
| 03:16      | And so from the outside, you may think, oh, they didn't do much this year.                            |
| 03:19      | Yeah.                                                                                                 |
| 03:20      | Exactly.                                                                                              |
| 03:21      | It's just because they had such big news that this news kind of got buried.                           |
| 03:26      | And Rose and I have both had the opportunity to spend quite a bit of time this week with              |
| 03:30      | the Siri Short Cuts team and some of the other Automator folks at Apple.                              |
| 03:33      | They're super proud.                                                                                  |
| 03:35      | And I would argue in a lot of ways, the news we're about to share with you about Siri Short           |
| 03:40      | Cuts.                                                                                                 |
| 03:41      | Well, I guess last year was amazing because it existed.                                               |
| 03:44      | But this year is so much better.                                                                      |
| 03:47      | It's a whole new level.                                                                               |
| 03:48      | I feel like, you know, it's kind of when you planted a flower and the first year it needs             |
| 03:53      | you know, it needs time for the roots to take hold before it really takes off.                        |
| 03:57      | Well, this year, Siri Short Cuts is in full bloom because there there's just an incredible            |
| 04:03      | amount of new stuff we're going to be able to do with Siri Short Cuts.                                |
| 04:07      | Automation is going to get easier, more powerful and stronger.                                        |
| 04:10      | But before we, that was a tease, Rose, because I think before we do that, let's just talk             |
| 04:14      | briefly about Mac OS.                                                                                 |
| 04:16      | Yeah.                                                                                                 |
| 04:17      | There's not a whole lot of news on Mac OS.                                                            |
| 04:19      | I mean, there is, because a lot of people have heard, and this was rumored before [[WWDC]],               |
| 04:23      | that iTunes is going away.                                                                            |
| 04:26      | With Mac OS Catalina, iTunes is no more.                                                              |
| 04:28      | So there's music, there's TV, there's podcasts, they're all separate applications now.                |
| 04:34      | And when just for the people very concerned about saying, if you plug your device into                |
| 04:37      | your Mac, then it comes up in the sidebar and that's how you, in Finder, and that's                   |
| 04:41      | how you sync things.                                                                                  |
| 04:43      | But what a lot of people would be concerned about is their scripts for iTunes that they               |
| 04:47      | had to do things with their music.                                                                    |
| 04:48      | And there's a great website called Doug Scripts that I'll make sure we link in the show notes.        |
| 04:53      | And the really good news is those scripting libraries have been imported to the music                 |
| 04:57      | and the TV apps.                                                                                      |
| 04:58      | They have not got rid of these scripting opportunities.                                               |
| 05:01      | So if you're using that, you don't need to worry.                                                     |
| 05:04      | There may need to be changes to these scripts so that they talk to music or TV versus iTunes.         |
| 05:10      | But it's [[AppleScript]].                                                                                |
| 05:11      | You can probably run a Finder replace and fix that, because [[AppleScript]] is a very friendly           |
| 05:15      | language for that.                                                                                    |
| 05:16      | Yeah.                                                                                                 |
| 05:17      | And both of us, neither one of us have loaded the Catalina beta yet.                                  |
| 05:21      | I believe Rose is shaking her head now.                                                               |
| 05:23      | No, not yet.                                                                                          |
| 05:24      | I mean, one of the things about being here is the Wi-Fi is terrible everywhere.                       |
| 05:29      | And honestly, it's never a good idea to load a beta when you're on a trip.                            |
| 05:34      | Yeah.                                                                                                 |
| 05:35      | Yeah.                                                                                                 |
| 05:36      | No.                                                                                                   |
| 05:37      | Terrible idea.                                                                                        |
| 05:38      | Don't do it, people.                                                                                  |
| 05:39      | So we're going to get into this deeper.                                                               |
| 05:40      | We'll be talking about it in future episodes.                                                         |
| 05:42      | But the good news is you do get to retain some of your scripting on the stuff you're doing            |
| 05:46      | on Mac.                                                                                               |
| 05:47      | But one of the stories I had in the back of my mind, I never really said it publicly                  |
| 05:52      | because I didn't want to jinx it, but I was really kind of hoping we'd get Siri Shortcuts             |
| 05:56      | on Mac this year with this project Catalyst.                                                          |
| 06:00      | It seems to me that it's possible that we'll get it at some point in the future.                      |
| 06:03      | But this wasn't the year for it.                                                                      |
| 06:06      | So the big automator news and the focus of this episode really is iOS and now iPadOS.                 |
| 06:12      | Oh, yeah.                                                                                             |
| 06:13      | Yeah.                                                                                                 |
| 06:14      | Because these have been split up a little bit.                                                        |
| 06:16      | They're very much siblings that were born very close together.                                        |
| 06:19      | They may even be in the same school year at school.                                                   |
| 06:22      | That's how close they are, but they're not the same person anymore, which is great.                   |
| 06:25      | Well, I mean, it's never really been the same.                                                        |
| 06:27      | I mean, there's always been things you could do on iPad that you can do on the phone and              |
| 06:31      | vice versa.                                                                                           |
| 06:32      | But I do appreciate that Apple now has a separate and if you haven't heard this yet, they have        |
| 06:37      | what they call iPadOS versus iOS, which is kind of funny.                                             |
| 06:41      | Historically, originally it was iPhoneOS when they first made the iPhone and then they made           |
| 06:46      | a big deal.                                                                                           |
| 06:47      | I think it was around iOS 3 that they were.                                                           |
| 06:49      | And I think that was partly because of the iPad.                                                      |
| 06:51      | They were just going to call it iOS going forward.                                                    |
| 06:54      | But either way, now that iPadOS is its own thing, I feel like they're going to have to                |
| 06:59      | be beholden to give us updates.                                                                       |
| 07:01      | And maybe that even means there's a team just dedicated to solving and taking the rough               |
| 07:07      | messages off the iPad.                                                                                |
| 07:10      | I don't know.                                                                                         |
| 07:11      | It's kind of fun podcasting with you in person.                                                       |
| 07:13      | I can actually look at you.                                                                           |
| 07:14      | We can look at each other and we're hopefully going to make the editing of this podcast               |
| 07:18      | easier because we're not talking over each other like we would do usually.                            |
| 07:22      | Yeah.                                                                                                 |
| 07:23      | I know that all of the possibilities from this and really, I think it does make things                |
| 07:28      | a little easier, especially for us because everybody who uses the iPad a lot and I know               |
| 07:33      | if a lot of the people listening may only have an iPhone, Shortcuts really is a great                 |
| 07:38      | app on the iPad because you can just see so much more.                                                |
| 07:41      | I recently got an iPad mini and it's great even like the 7.9 inch screen because you                  |
| 07:47      | can see that much more and it's great that iPad specifically will be getting features                 |
| 07:52      | just for it every year now.                                                                           |
| 07:54      | And I think everybody is very excited about that.                                                     |
| 07:57      | Hey, Rosa, before we just real quick, before we get into all that new great new series                |
| 08:01      | shortcut stuff, how do you like that new iPad?                                                        |
| 08:04      | The mini, it's adorable.                                                                              |
| 08:05      | I actually called it the iPad Adorable.                                                               |
| 08:07      | Thank you very much to JF for said who helped me name it.                                             |
| 08:11      | It's very nice.                                                                                       |
| 08:12      | It's portable.                                                                                        |
| 08:13      | It fits in my smallest of handbags literally that was one of the criteria and it's great              |
| 08:19      | because I can thumb type on it in portrait mode, even with a slightly sprained wrist,                 |
| 08:24      | which makes it a great iPad.                                                                          |
| 08:28      | If you want an iPad and you think that you're probably not going to take it too many places           |
| 08:33      | and so on, I would still encourage looking at the mini just because it is so portable.                |
| 08:38      | It's the sort of thing you will end up taking everywhere because it fits in everything.               |
| 08:42      | Yeah.                                                                                                 |
| 08:43      | I was sitting next to Rosa on an airplane looking at her use the iPad mini and the green              |
| 08:49      | envy took over me for just a few minutes.                                                             |
| 08:51      | I should point out that at this point in time, David was using 11-inch iPad, so it's not              |
| 08:55      | like he was struggling with a 15-inch MacBook Pro that couldn't fit on the airplane tray              |
| 08:59      | table, but yeah, it is very small and portable.                                                       |
| 09:03      | It's so cute though.                                                                                  |
| 09:04      | It is adorable and I got the Logitech Crayon to use with it as well, which is really nice.            |
| 09:08      | More importantly, tell them what colour you got.                                                       |
| 09:10      | I got the gold one.                                                                                   |
| 09:11      | Of course you did.                                                                                    |
| 09:12      | Yeah, it's free.                                                                                      |
| 09:13      | Hey, so we're going to talk about [[Shortcuts\|Siri Shortcuts]], lots of news to share.                            |
| 09:17      | Before we do, I want to talk about our first sponsor and that's our friends over at Timing.           |
| 09:21      | This episode of Automators is brought to you by Timing, the app that tracks your time automatically   |
| 09:26      | instead of manually.                                                                                  |
| 09:27      | So let's talk about why you should be tracking your time.                                             |
| 09:30      | For anyone billing your hours, that's obvious, but even if you're employed by yourself or             |
| 09:36      | billing per project, you need to estimate how long a specific task is going to take.                  |
| 09:41      | Time tracking helps you stay on track with those estimates.                                           |
| 09:45      | To make sure you don't end up in the red with your projects and that can help make more               |
| 09:48      | accurate estimates in the future.                                                                     |
| 09:50      | One of the big benefits I get out of time tracking is I identify those areas of my life               |
| 09:55      | that don't really need me.                                                                            |
| 09:57      | Things where I could get someone to help me or maybe find some cool automation to take                |
| 10:00      | care of it for me.                                                                                    |
| 10:01      | And when I track my time, I see exactly how much time those things take.                              |
| 10:05      | And that's just a big exclamation point for me to get that managed so I can spend my time             |
| 10:10      | doing what's truly important for me.                                                                  |
| 10:12      | And that's where timing comes in instead of making you start and stop timers.                         |
| 10:16      | Timing automatically tracks how much time you spend on each app, document and website.                |
| 10:22      | It shows you exactly when you were working on what and when you slacked off and how productive        |
| 10:27      | you've been.                                                                                          |
| 10:28      | So you know how much tool you can improve your productivity.                                          |
| 10:33      | Timing functionality is similar to iOS 12 screen time, but it's for the Mac and honestly              |
| 10:39      | it's much better because it's way more granular.                                                      |
| 10:42      | The manual tracking and adjustments are still possible with timing's automated approach,              |
| 10:46      | plus it has a gorgeous new dark mode.                                                                 |
| 10:48      | But you know, work doesn't just happen on your Mac.                                                   |
| 10:51      | That's why the timeline automatically makes suggestions for filling in the gaps for your              |
| 10:55      | timeline and that way you'll never again forget to enter a meeting and with the automatic             |
| 11:00      | sync feature, your track time will magically appear across all your Mac.                              |
| 11:05      | So even when you work on the go with your Mac book, you'll have a full picture of your                |
| 11:10      | app on your iMac since you get home.                                                                  |
| 11:12      | Like I said, I just really like the ability to find those areas of my life that need to               |
| 11:17      | get removed and time tracking is one of the best tools to identify it.                                |
| 11:23      | Timing the app is the way to do this because you don't have to push a button.                         |
| 11:28      | You know, manually tracking time just gets garbage data unless you're really, really                  |
| 11:33      | good at remembering to push that button.                                                              |
| 11:36      | Timing is so confident that you'll love their fuss free approach.                                     |
| 11:38      | They offer a totally free trial.                                                                      |
| 11:40      | Download the free trial today by going to timingapp.com/automators.                             |
| 11:46      | Download the free two week trial and you save 10% when you purchase.                                  |
| 11:50      | Stop guessing how you're spending your time and instead get good data from the timing                 |
| 11:54      | application so you can focus on what you're good at.                                                  |
| 11:57      | We think timing for all of their support of the automators.                                           |
| 12:01      | Let's get started with these shortcuts updates because I don't know how long we've got left,          |
| 12:06      | but we haven't got long and we've got a lot to cover.                                                 |
| 12:09      | Yeah.                                                                                                 |
| 12:10      | It's great.                                                                                           |
| 12:11      | Let's just start by saying it's great.                                                                |
| 12:12      | Oh yeah.                                                                                              |
| 12:13      | There is absolutely no way we are disappointed about any of this.                                     |
| 12:16      | Okay.                                                                                                 |
| 12:17      | I think I want to start talking about just the application user interface because there's             |
| 12:22      | been a lot of changes, but it's not for the bad.                                                      |
| 12:25      | Yeah.                                                                                                 |
| 12:26      | So when Siri shortcuts first appeared on iOS last year, it looked a lot like workflow,                |
| 12:34      | but it looked like they took a dark, the dark mode of the original workflow and turned it             |
| 12:38      | into light mode in iOS, but largely, I mean, even the shapes of the boxes and the way it,             |
| 12:45      | you know, the general format of the application stayed the same.                                      |
| 12:49      | So it was very familiar if you had been coming from workflow.                                         |
| 12:53      | This year, it's still as familiar, but they have made some nice kind of, I would just                 |
| 12:58      | call it clean user interface improvements.                                                            |
| 13:00      | The colours got a little better and just the way it looks like they had a graphic design               |
| 13:04      | or come in and do a facelift.                                                                         |
| 13:06      | Yeah.                                                                                                 |
| 13:07      | And so for example, if you look at your shortcuts library, and I'll try and include some screenshots  |
| 13:11      | of this, the colours for the Azure shortcuts are a little more muted.                                  |
| 13:15      | But if you think about it, because iOS has light and dark mode and it can automatically               |
| 13:19      | switch between light and dark mode at sunrise and sunset, then you can, you know, this doesn't        |
| 13:26      | glare in your face like the bright colours from shortcuts previously would.                            |
| 13:30      | And that's kind of just the start of it because they've tidied up all the icons and everything        |
| 13:34      | as well.                                                                                              |
| 13:35      | And the icons have got a more prominent role when, for example, all of your shortcuts                 |
| 13:40      | show up directly in the share sheet.                                                                  |
| 13:42      | So they're not hidden behind a shortcuts action anymore.                                              |
| 13:46      | They're just right there in your share sheet, right in your face, ready for you to use.               |
| 13:49      | Okay.                                                                                                 |
| 13:50      | And that can, that's great for discoverability.                                                       |
| 13:52      | Oh yeah.                                                                                              |
| 13:53      | And, you know, I was thinking about that a lot of people only have a few shortcuts.                   |
| 13:58      | So that's, that's just great.                                                                         |
| 14:00      | But for folks like you and me that have hundreds of them.                                             |
| 14:03      | We need to go through and clean up what our shortcuts can accept because I know a lot                 |
| 14:06      | of the time when I'm testing things, I just say, you can accept anything.                             |
| 14:10      | Yeah.                                                                                                 |
| 14:11      | And I'm good to go.                                                                                   |
| 14:12      | And now I sort of look at my share sheet and go, whoops, I need to fix this.                          |
| 14:16      | Yeah.                                                                                                 |
| 14:17      | So, so that's, that's cool.                                                                           |
| 14:18      | And, and honestly, you and I are edge cases.                                                          |
| 14:21      | Oh yeah.                                                                                              |
| 14:22      | In fact, one of the things that it didn't get this year that a lot of us nerds are like               |
| 14:28      | clamoring for is better organisation, like you, like folders.                                         |
| 14:32      | You don't have those now, but honestly, I don't think many people are the edge cases                  |
| 14:38      | like you, me, [[Matthew Cassinelli\|Matt Cassinelli]], [[Federico Viticci\|Federico]], the folks who have many, many, many shortcuts.               |
| 14:43      | Yeah.                                                                                                 |
| 14:44      | Most of all have a few that work for me and they're sane as opposed to insane.                        |
| 14:48      | So I'm sure Apple saw those numbers.                                                                  |
| 14:50      | And if I was looking at the whiteboard and said, well, do I create folders for the super              |
| 14:54      | nerds or do I just make it more powerful for everyone?                                                |
| 14:57      | And I think they made the right decision.                                                             |
| 14:59      | Yeah.                                                                                                 |
| 15:00      | Yeah.                                                                                                 |
| 15:01      | It's one of these things.                                                                             |
| 15:02      | A lot of the decisions that they have to make, of course, they get the requests from                  |
| 15:04      | us heavy power users, but they have to keep in mind that it's not just the power users                |
| 15:10      | that they want to use the application.                                                                |
| 15:11      | They want to make things friendly.                                                                    |
| 15:13      | So, and that's something I found from talking to them this week, you know, they, they're              |
| 15:16      | really, their, their interest is making this accessible to everybody regardless of their              |
| 15:21      | level of knowledge about this stuff.                                                                  |
| 15:23      | And that's, I think, definitely the right decision for them to make.                                  |
| 15:26      | And along that lines, in addition to being a pretty face, you know, with this update,                 |
| 15:31      | they have now made shortcuts, a built in application on your iPad and iPhone.                         |
| 15:37      | So no longer do you have to go to the app store and download it, you just, it just shows              |
| 15:41      | up on your device when you do the upgrade to iOS 13.                                                  |
| 15:45      | That means everyone is going to have shortcuts.                                                       |
| 15:49      | Yep.                                                                                                  |
| 15:50      | I, I'm still wrapping my head around that Rose.                                                       |
| 15:54      | Yeah.                                                                                                 |
| 15:55      | It's, it's crazy.                                                                                     |
| 15:56      | She's got to have shortcuts installed on her two iPads on her iPhone.                                 |
| 15:58      | I mean, she's already in edge case having two iPads, but she's got to have shortcuts                  |
| 16:02      | installed on three devices.                                                                           |
| 16:03      | It's huge.                                                                                            |
| 16:04      | I was, I was thinking like, even like my wife who is kind of interested in this stuff,                |
| 16:08      | but not interested enough to go to the app store and download it.                                     |
| 16:12      | I think once it's on her device, she's just going to open it up anyway and, and you know,             |
| 16:17      | we'll see how she does with that.                                                                     |
| 16:18      | I'll help her out a little bit, but I do think there's going to be a bunch of new people              |
| 16:22      | interested in shortcuts because suddenly this colourful application is going to show up on             |
| 16:26      | their devices.                                                                                        |
| 16:27      | Yeah.                                                                                                 |
| 16:28      | That can only be good for the future of shortcuts.                                                    |
| 16:31      | It is.                                                                                                |
| 16:32      | So they've also made some other changes inside of the application.                                    |
| 16:34      | So if you had the if before, you may remember this vertical line running through your shortcut,       |
| 16:41      | which sometimes was connected.                                                                        |
| 16:43      | Sometimes it wasn't connected.                                                                        |
| 16:44      | That line is still there.                                                                             |
| 16:45      | But the if action, for example, now explicitly has a little input bubble, which means that            |
| 16:51      | when you tap on that, so say for example, you, you've done something before, maybe you                |
| 16:56      | did a get contents of URL to get some records out of air table, you explicitly say if this            |
| 17:01      | record from air table, then you have your conditions and the conditions are dynamic                   |
| 17:07      | based on what kind of input it is, which is why it's, it's even better than it was before.            |
| 17:13      | So I'm just playing with a, an action for a Trello card right now and it's going, you                 |
| 17:17      | know, if it has any input, which is great, because, you know, if there's no input, then               |
| 17:23      | you don't want to be doing things probably.                                                           |
| 17:26      | So that's, that's good fun.                                                                           |
| 17:27      | It's just like they humanise the language of these programming components even more                   |
| 17:32      | this year.                                                                                            |
| 17:33      | Like there, I remember in the prior version, you can have like, if you have a variable,               |
| 17:40      | you can either input the variable as part of your shortcut, or you can put in to ask                  |
| 17:44      | when run.                                                                                             |
| 17:46      | But now they remove the term ask when run.                                                            |
| 17:49      | And they put something, I forget what it says now, Rose may be able to look it up.                    |
| 17:53      | She's got it installed on hers.                                                                       |
| 17:54      | But the, they made it just easier for normal people to understand what they're saying.                |
| 18:00      | And they removed kind of the programming slant to the language.                                       |
| 18:05      | The other thing that they did that's interesting is they, you're looking at me.                       |
| 18:09      | Yeah.                                                                                                 |
| 18:10      | So they, it's called ask each time now, but this ties into conversational theory, which               |
| 18:15      | we're going to get to in a moment.                                                                    |
| 18:17      | So keep going, David.                                                                                 |
| 18:18      | And then the other thing they did is so often, and you would, in order to run a shortcut,             |
| 18:22      | you've got a couple things you need to do.                                                            |
| 18:24      | First you need to get information, then you need to pass that information to the next                 |
| 18:28      | step.                                                                                                 |
| 18:29      | And those were two steps.                                                                             |
| 18:30      | And for a lot of folks, you don't know, well, what kind of information, how do I get the              |
| 18:34      | information to pass along?                                                                            |
| 18:36      | And a lot of these new shortcuts from what I've seen is combined into one step.                       |
| 18:42      | So when you want to do something, it collects the information and processes or acts on it             |
| 18:47      | in the very same step.                                                                                |
| 18:49      | So people don't have to figure out how to connect those two things.                                   |
| 18:52      | It's just done for you now.                                                                           |
| 18:54      | Yeah.                                                                                                 |
| 18:55      | Which is really useful.                                                                               |
| 18:56      | And also it's just, so it's set variable for is gone.                                                 |
| 19:02      | So some people are going to be going, oh my God, set variables gone.                                  |
| 19:04      | Don't worry.                                                                                          |
| 19:05      | There is a migration assistant, of course, because I'm me and I installed this on day                 |
| 19:09      | one.                                                                                                  |
| 19:10      | And my migration system didn't run and the shortcuts team have already looked at it.                  |
| 19:14      | And I'm pretty certain they're working on a fix and that will be done momentarily.                    |
| 19:17      | Yeah.                                                                                                 |
| 19:18      | I say momentarily, probably, hopefully in the next iOS beta, because of course shortcuts              |
| 19:23      | is part of iOS now.                                                                                   |
| 19:24      | So it can update whenever iOS updates, including whenever there's a beta.                             |
| 19:28      | But you know, this is going to be easier for everybody because you just use magic variables           |
| 19:35      | now.                                                                                                  |
| 19:36      | You just use set variables and when you are doing an if something, then you know that                 |
| 19:41      | you have to select the right thing because this is something I see very frequently.                   |
| 19:46      | People try and do a set name on something, but they got the file earlier and they've                  |
| 19:50      | gone through and they picked a bunch of other things.                                                 |
| 19:53      | And so they're trying to set the name actually of a piece of text that's come out of a choose         |
| 19:56      | from list rather than the file.                                                                       |
| 19:58      | And if you look at the set name action right now, she says trying to pull it up in front              |
| 20:03      | of her.                                                                                               |
| 20:04      | Then you set the name of what something in particular.                                                |
| 20:08      | So it's giving me the option in this particular shortcut that I'm looking at.                         |
| 20:11      | There's text, there's Trello cards, and there's an if.                                                |
| 20:14      | But I can pick different ones, but it explicitly shows you which one it is so that you know           |
| 20:20      | what you're doing.                                                                                    |
| 20:22      | It's like magic variables to the next generation.                                                     |
| 20:26      | Yes, it is because they're built into every single action.                                            |
| 20:30      | And of course, with the condensed actions as well, so for example, the speak text action,             |
| 20:35      | you can set the language of the voice that should speak it.                                           |
| 20:39      | So you can, for example, have somebody with an Arabic accent speaking English or something            |
| 20:44      | like that.                                                                                            |
| 20:45      | These are of course computerised, so they're not hugely accurate.                                     |
| 20:48      | You can pick the different voices.                                                                    |
| 20:49      | You can say what until finished, the rate and the pitch.                                              |
| 20:52      | I've been having some great fun playing with that.                                                    |
| 20:54      | It tells me very excited, I'm going to Disney.                                                        |
| 20:58      | Very high voice.                                                                                      |
| 20:59      | Hilarious, because, you know, I went to Disney.                                                       |
| 21:03      | So yeah, it's much more user friendly, but it doesn't mean that it's not power user                   |
| 21:10      | friendly either, which is something that of course I'm sure some people have been worried             |
| 21:13      | about.                                                                                                |
| 21:14      | If we're making it more user friendly, what are we losing is power users, and the answer              |
| 21:19      | is nothing.                                                                                           |
| 21:20      | We're gaining so much.                                                                                |
| 21:21      | Yeah, from what I've seen, you've lost no functionality, but if anything, it's only                   |
| 21:24      | improved.                                                                                             |
| 21:25      | Yes, because there are so many new actions as well.                                                   |
| 21:28      | And it's more discoverable, so even new power users are going to find uses for actions that           |
| 21:33      | never occurred to you before, because it was up to us before to go through and set parameters         |
| 21:39      | and find them and just kind of come up with them in our head where now the application                |
| 21:44      | lays them out for you, everything it can do for every action.                                         |
| 21:47      | And it's just, you know, it's the obvious way it should have been done in hindsight.                  |
| 21:53      | As so often these things can be.                                                                      |
| 21:55      | When you see it, you mean like, like, yeah, okay, that makes sense.                                   |
| 21:58      | And I can see a lot of people who would have been intimidated by the old system, feeling              |
| 22:03      | more comfortable with this and people who understood the old system are going to appreciate           |
| 22:07      | this.                                                                                                 |
| 22:08      | It makes it easier in a lot of ways to build shortcuts.                                               |
| 22:10      | So I mean, it's just a win all the way around.                                                        |
| 22:13      | Now, you had said earlier that it's now as the fact that as a result of the fact that                 |
| 22:18      | shortcuts is now part of the operating system, we have got to deal with updates.                      |
| 22:23      | Now, I really liked, frankly, in that first year that we could get updates to serious                 |
| 22:28      | shortcuts independent of operating system updates, because Apple doesn't do that many                 |
| 22:33      | of those, you know, they'll do a couple point updates over the course of the year.                    |
| 22:36      | And then we have to wait, you know, every year for the big update.                                    |
| 22:39      | Yeah.                                                                                                 |
| 22:40      | Well, we're on that schedule now.                                                                     |
| 22:41      | I mean, that is shortcuts is no longer going to be independent.                                       |
| 22:44      | But if at the same time, I went back and I did a little review of this, like, when did                |
| 22:49      | iOS update versus when did shortcuts update, and they only did two updates out of sync                |
| 22:54      | with iOS last year.                                                                                   |
| 22:56      | So but it was still the same number pretty much.                                                      |
| 22:59      | I think there was one very small bug fix that snuck in there somewhere.                               |
| 23:03      | So it's not like we're actually going to be losing something.                                         |
| 23:06      | We're not going to be going from 52 updates a year to five updates a year.                            |
| 23:10      | We're going from, you know, five updates a year to five updates a year at the same time               |
| 23:14      | as iOS, which is good, because this is very much integrated in the operating system.                  |
| 23:19      | So it'd be very disappointing for everybody if shortcuts released an update and then iOS              |
| 23:22      | came out three days later and was like, oh, yep, broke it all.                                        |
| 23:26      | You know, we don't we don't want that.                                                                |
| 23:27      | And the shortcuts team doesn't want that either.                                                      |
| 23:28      | The iOS team, I'm sure it doesn't want it.                                                            |
| 23:31      | So it's good that they're in lockstep.                                                                |
| 23:33      | One of the nice things is Rose and I have both been able to spend some time with the shortcuts        |
| 23:37      | team this week.                                                                                       |
| 23:38      | And a couple of things that I want to report.                                                         |
| 23:39      | First of all, we don't ask them much because I don't want them to get fired.                          |
| 23:43      | No, no, we want them to stay available working on this stuff because it's amazing.                    |
| 23:47      | An observation you can make is number one, there is a shortcuts team.                                 |
| 23:52      | Yes.                                                                                                  |
| 23:53      | Number two, it's quite large.                                                                         |
| 23:55      | It is.                                                                                                |
| 23:56      | And every person I met in it is pretty smart.                                                         |
| 23:59      | I mean, they they all seem like they, you know, their elevators go to floors higher                   |
| 24:03      | than mine does.                                                                                       |
| 24:05      | And that's good because you want those folks working on it and and they're all passionate             |
| 24:09      | about it.                                                                                             |
| 24:10      | So, you know, sometimes Apple makes products and they release it and they say, hey, this              |
| 24:14      | is the greatest thing in the world and then you don't see much from it for years.                     |
| 24:18      | We already saw in the first year shortcuts, isn't that product?                                       |
| 24:21      | They've already been updating it, but it looks to me like into the at least immediate future          |
| 24:26      | Apple continues to be funding and pressing this.                                                      |
| 24:30      | And I'm really happy to see that I'm that was one of the most encouraging things I saw                |
| 24:33      | today.                                                                                                |
| 24:34      | It's just the number of people that are working on shortcuts and how passionate they are about        |
| 24:38      | it.                                                                                                   |
| 24:39      | Yeah, they're so excited about this as well.                                                          |
| 24:40      | Like obviously, you know, everybody who works at Apple is disappointed when their product             |
| 24:44      | doesn't get keynote time, but these people were still so excited and so happy.                        |
| 24:48      | And you know, saying like, you know, have you seen this feature?                                      |
| 24:50      | Have you seen that feature?                                                                           |
| 24:52      | It's great.                                                                                           |
| 24:53      | Yeah, it's awesome.                                                                                   |
| 24:54      | And just great, nice people behind this.                                                              |
| 24:57      | I am very encouraged by that.                                                                         |
| 24:59      | Yeah.                                                                                                 |
| 25:00      | And for the developers I've talked to who've been to the shortcuts labs as well, you know,            |
| 25:03      | they've been really, really helpful there.                                                            |
| 25:05      | Of course.                                                                                            |
| 25:06      | I mean, this is [[WWDC]], Apple's not there going, oh, no, no, no, we won't tell you how to do            |
| 25:10      | this.                                                                                                 |
| 25:11      | They're showing developers how to do everything, but you know, they're showing developers             |
| 25:14      | in the nicest way and being excited about it, which is great for everyone.                            |
| 25:18      | Okay, we're going to get in a few minutes, we're going to talk about just the on the                  |
| 25:21      | ground improvements to Siri shortcuts, how you can use it, making your scripts, and maybe             |
| 25:26      | before we do that, you want to talk a little bit about the developer angle of what's changed          |
| 25:30      | in Siri shortcuts.                                                                                    |
| 25:31      | Yes.                                                                                                  |
| 25:32      | So specifically, there are two big things that have changed.                                          |
| 25:37      | And I'm going to start with the smaller one, and then you're going to see how, how wide               |
| 25:41      | reaching that is with the second one.                                                                 |
| 25:43      | So the first one is conversational Siri.                                                              |
| 25:45      | And this, first of all, can I say, I love that this is the smaller one that just makes                |
| 25:50      | me laugh.                                                                                             |
| 25:51      | I know, because this is huge.                                                                         |
| 25:52      | So it is no longer that you just like you, you say, hello device, please run my shortcut              |
| 25:58      | called ABC.                                                                                           |
| 26:00      | It is that there is back and forth and Siri understands this and you don't have to build              |
| 26:05      | this with dictation and then transcribing dictation and picking things out and so on.                 |
| 26:10      | This is built in by the shortcuts team into shortcuts.                                                |
| 26:14      | So you can ask for input and send things in backwards and forwards with talking, which                |
| 26:20      | is amazing.                                                                                           |
| 26:22      | And the way that you're going to see how far reaching this is, is we also now have parameterised      |
| 26:27      | donated shortcuts, which means that for example, all of these shortcuts that were built into          |
| 26:33      | the system before, and I'm going to use the only focus one as a great example, the adding             |
| 26:37      | a task to OmniFocus, that was created by the shortcuts team.                                          |
| 26:41      | So you had your task name, you had your project name and things like that, which meant that           |
| 26:45      | whenever OmniFocus updated, they had to file a radar with Apple or whatever it is that                |
| 26:50      | they had to do.                                                                                       |
| 26:51      | And they had to wait for the shortcuts team to update this.                                           |
| 26:54      | Now there are billions of apps on the app store.                                                      |
| 26:57      | So this is not maintainable.                                                                          |
| 26:59      | This is not something that you can keep doing long term.                                              |
| 27:02      | So they've now done this so that any developer for any application can donate an action like          |
| 27:08      | that, which provides output.                                                                          |
| 27:12      | And I just saw that on a keynote slide and melted into a little ball of excitement.                   |
| 27:18      | I think there's a little video of me somewhere going, yee, because I was so excited because           |
| 27:22      | we're obviously that a lot of developers were doing dances with clipboard.                            |
| 27:25      | So they would get the clipboard set the clipboard, which meant the shortcuts for us were looked       |
| 27:30      | pretty unwieldy because it was just a massive clipboard.                                              |
| 27:33      | And then at the end, you've got some dictionaries from carrot weather on your clipboard, rather       |
| 27:37      | than whatever it is you have before.                                                                  |
| 27:39      | Well, they don't need to do that anymore.                                                             |
| 27:41      | And this is just this combined with conversational Siri.                                              |
| 27:44      | So Siri can ask me, okay, what do you want your task to be called?                                    |
| 27:47      | What project do you want to add this to?                                                              |
| 27:49      | And it's just amazing.                                                                                |
| 27:51      | So wide reaching.                                                                                     |
| 27:52      | Yeah, I feel like the result of this is we're going to see a ton of new actions in the                |
| 27:58      | Siri shortcuts for those of us that like to build shortcuts.                                          |
| 28:01      | Our favourite app developers and the ones that are kind of woke on this are going to be adding         |
| 28:06      | a ton of custom actions to their applications.                                                        |
| 28:11      | So you're going to be able to do more with automation with these applications than ever               |
| 28:14      | before because the tools already built for you.                                                       |
| 28:17      | You don't have to figure out some way to, you know, jury rig it together.                             |
| 28:21      | It's just done.                                                                                       |
| 28:22      | Like the OmniFocus is a good example.                                                                 |
| 28:24      | I am sure there's probably right now at the Omni Group, a group of folks that work on OmniFocus        |
| 28:30      | figuring out, okay, now we've got the ability to create our own actions.                              |
| 28:34      | In addition to that one that we had, let's add six more.                                              |
| 28:37      | What are the six things?                                                                              |
| 28:38      | So let's add once great projects and folders and things like that and perspectives even               |
| 28:43      | is a possibility.                                                                                     |
| 28:44      | Yeah.                                                                                                 |
| 28:45      | Review.                                                                                               |
| 28:46      | I mean, just the whole thing.                                                                         |
| 28:47      | Yeah.                                                                                                 |
| 28:48      | I was talking to a developer last night and one of the nice things about being at WWCs,               |
| 28:49      | there's so many developers here that you get to talk to about this stuff and he's writing             |
| 28:53      | an app for a company that it's like Airbnb for RVs, you know, and he's like, he's already             |
| 28:59      | got Siri Shortcuts ideas where he wants it to be where a renter can automatically get                 |
| 29:08      | a frequently asked questions for the device there, you know, for the RV they're renting               |
| 29:11      | and then he wants to combine that with NFC, which we're going to talk about in a minute.              |
| 29:15      | And it's like, there's all these things you can do together now.                                      |
| 29:18      | That's like the our tinker toy bucket just got a bunch of new pieces dumped in it.                    |
| 29:25      | So we're going to have a lot of fun figuring out how to connect all this stuff.                       |
| 29:29      | And the, I guess the net result of what Rose just explained to you is that we're not done             |
| 29:34      | filling the bucket with new toys because now the app developers can start throwing toys               |
| 29:39      | in there too.                                                                                         |
| 29:40      | So I expect that we're going to have a massive influx of new actions and Siri Shortcuts for           |
| 29:46      | the apps you download.                                                                                |
| 29:47      | And it's not going to like flood your app or flood your Siri Shortcuts, it's just going               |
| 29:51      | to relate to the apps that you download.                                                              |
| 29:53      | And it's going to be awesome.                                                                         |
| 29:55      | It is.                                                                                                |
| 29:56      | So we've got content scheduled for the next five years now, thanks for this.                          |
| 29:59      | There's going to be a lot to cover because, you know, it's going to be very app specific              |
| 30:04      | some stuff.                                                                                           |
| 30:05      | And, and you app developers listening, I know you're out there.                                       |
| 30:08      | If you guys make really amazing Siri Shortcuts stuff, let us know.                                    |
| 30:11      | We want to help spread the word, but, but, you know, we want you to do it too.                        |
| 30:15      | I feel like that's going to become a selling point for apps even more than it was before              |
| 30:19      | when they get better automation support because Siri Shortcuts is now on every device.                |
| 30:24      | If you can simplify automation for your users, there's going to be a lot of people interested         |
| 30:28      | in that.                                                                                              |
| 30:29      | Oh yeah, definitely.                                                                                  |
| 30:30      | So that was the little announcement.                                                                  |
| 30:31      | Yeah.                                                                                                 |
| 30:32      | So that's the small stuff.                                                                            |
| 30:34      | Let's get to the big stuff now.                                                                       |
| 30:36      | So there's a new tab in the Shortcuts app called Automations.                                         |
| 30:42      | And this is the one I've just been wallowing in this going, yay, every single time I play             |
| 30:46      | with one of these because there are so many automations.                                              |
| 30:50      | Now to start with, if you, once you finally get this, and I'm going to say this a few                 |
| 30:55      | times, if you are not a developer, please do not install the developer beta.                          |
| 31:00      | It is buggy.                                                                                          |
| 31:01      | My iPad keeps crashing.                                                                               |
| 31:02      | I get notifications.                                                                                  |
| 31:03      | I tap on it.                                                                                          |
| 31:04      | It's springboards or it just locks up for a while.                                                    |
| 31:06      | This is not good.                                                                                     |
| 31:07      | And I'm using this to record a podcast on.                                                            |
| 31:08      | So David keeps giving me looks every now and then because it's like, wait, is your iPad               |
| 31:12      | broken again?                                                                                         |
| 31:13      | I also have my iPhone right with me.                                                                  |
| 31:16      | But inside the Automation tab, you have all of your home kit automations as well.                     |
| 31:23      | So everything that was in a home, still in home, but it's been imported because there                 |
| 31:28      | are two kinds of automations that you can create.                                                     |
| 31:30      | You can create a personal automation or a home automation.                                            |
| 31:33      | And home automations are shared with people who you share your home with.                             |
| 31:38      | Personal automations are for you.                                                                     |
| 31:39      | So they're on all of your devices, but they're just on your devices.                                  |
| 31:42      | And this ties in with the HomePod.                                                                    |
| 31:44      | So it means that if you talk to the HomePod and say, hey, you know, and run my good morning           |
| 31:49      | shortcut, it will run your good morning shortcut.                                                     |
| 31:53      | But if your partner talks to the HomePod and asks it to run their good morning shortcut,              |
| 31:57      | it runs their good morning shortcut and talks to their calendars.                                     |
| 32:00      | And this is huge.                                                                                     |
| 32:03      | I finally get that thing I want, Rose, where as I walk in the front door, the opening Star            |
| 32:10      | Wars theme just starts blasting throughout my house.                                                  |
| 32:13      | Because it can do stuff when you arrive at places now.                                                |
| 32:16      | Exactly.                                                                                              |
| 32:17      | My wife is going to go crazy.                                                                         |
| 32:18      | She's going to be so mad.                                                                             |
| 32:20      | Yeah.                                                                                                 |
| 32:21      | Yeah.                                                                                                 |
| 32:22      | Well, the good news is the Shooter Wars is you have got a really comfy sofa that you                  |
| 32:24      | can car.                                                                                              |
| 32:25      | All right.                                                                                            |
| 32:26      | And man, we're going to have so much fun with this stuff and I'm teasing stuff.                       |
| 32:31      | So one of the things you can do with this automation is they've added a whole bunch                   |
| 32:35      | of triggers.                                                                                          |
| 32:36      | Oh, yeah.                                                                                             |
| 32:37      | So it's funny because just weeks ago I was finishing up the [[Keyboard Maestro]] Field Guide              |
| 32:42      | and [[Keyboard Maestro]] has, it's a Mac-based application, it's got an amazing number of                 |
| 32:49      | triggers in it where you can start automations, not only by pushing a button, but by automatically    |
| 32:55      | having things happen.                                                                                 |
| 32:57      | And I was thinking at the time, I'm like, man, wouldn't it be nice if we had these things             |
| 33:01      | in [[Shortcuts\|Siri Shortcuts]]?                                                                                  |
| 33:02      | And as the thought occurred to me, I immediately dismissed it.                                        |
| 33:06      | Yeah.                                                                                                 |
| 33:07      | This isn't going to happen for years.                                                                 |
| 33:10      | I mean, we're never, if ever, right?                                                                  |
| 33:12      | Yeah.                                                                                                 |
| 33:13      | Yeah.                                                                                                 |
| 33:14      | And the cool thing about this is because historically [[Shortcuts\|Siri Shortcuts]] have been amazing, but they've |
| 33:18      | required you to open an app and push a button or do you have to do something on your phone            |
| 33:23      | to make it happen?                                                                                    |
| 33:25      | And that's not true automation.                                                                       |
| 33:27      | Well, guess what?                                                                                     |
| 33:29      | We got it.                                                                                            |
| 33:30      | And I thought, okay, well, if they give us automatic triggers for your shortcuts, they're             |
| 33:37      | just going to give us the most basic, like it'll be like on Tuesday at 2pm, like time                 |
| 33:41      | of day, you know, and they did that one, but they didn't stop there, did they?                        |
| 33:46      | No, no.                                                                                               |
| 33:47      | The shortcuts team, I get the impression that they got very excited with the possibilities            |
| 33:51      | and they just went with it and they did all of them.                                                  |
| 33:54      | So you can have on Tuesday at 2pm, but you can also have sunrise and sunset, just like                |
| 34:00      | it's been imported from the home application, but you can also have like an alarm.                    |
| 34:05      | So when an existing alarm or your wake-up alarm gets snoozed or when it gets stopped.                 |
| 34:10      | Yeah.                                                                                                 |
| 34:11      | So just think about this.                                                                             |
| 34:13      | You could have, if you're having trouble waking up, when you hit your snooze button, it starts        |
| 34:18      | playing a song through your HomePod.                                                                 |
| 34:20      | Yeah.                                                                                                 |
| 34:21      | Or you could buy one of these, these vibration alarms and whenever you hit the snooze button,         |
| 34:27      | you could just like vibrate that, turn that on with whether it's smart plugs or something.            |
| 34:31      | And so you get like a little jolting around in bed.                                                   |
| 34:33      | I'm not suggesting you do like electric shocks or anything that seems a little extreme, but           |
| 34:38      | you could do so many things.                                                                          |
| 34:39      | I once saw a really cool alarm clock that had a propeller on it.                                      |
| 34:42      | Oh yeah.                                                                                              |
| 34:43      | So you have to run and find it.                                                                       |
| 34:44      | And it would like take off.                                                                           |
| 34:45      | Just shut it up.                                                                                      |
| 34:46      | Yeah.                                                                                                 |
| 34:47      | Yeah.                                                                                                 |
| 34:48      | Those are smart.                                                                                      |
| 34:49      | I was thinking about a game for my kids, but I realised they're probably just going to                |
| 34:50      | throw the alarm clock through the window.                                                             |
| 34:52      | Yeah.                                                                                                 |
| 34:53      | Before they find the propeller.                                                                       |
| 34:54      | Yeah, and I think, I don't know, but I think I'm quite unlikely to throw my HomePod out              |
| 34:59      | the window.                                                                                           |
| 35:00      | I'm fairly attached to it.                                                                            |
| 35:01      | And it's heavy too.                                                                                   |
| 35:02      | Yeah.                                                                                                 |
| 35:03      | And you're tired.                                                                                     |
| 35:04      | Yeah.                                                                                                 |
| 35:05      | And also the power cord doesn't just like come out, which means that you need to unplug               |
| 35:07      | it.                                                                                                   |
| 35:08      | But this is really cool when you start thinking all those automations, you can start automatically    |
| 35:13      | tying to nighttime and bedtime routines.                                                              |
| 35:16      | Yeah.                                                                                                 |
| 35:17      | I love that.                                                                                          |
| 35:18      | Yeah.                                                                                                 |
| 35:19      | And you can also do it based on location as well.                                                     |
| 35:21      | So like when I get somewhere, when I leave somewhere, but you can also do like when I                 |
| 35:26      | get somewhere within a time range.                                                                    |
| 35:28      | Okay.                                                                                                 |
| 35:29      | So when I get to work between eight and 10, Monday to Friday, then do this.                           |
| 35:34      | But if I just go past on Saturday and don't bother, which is so good.                                 |
| 35:38      | Or even every time you leave work, send a text message to your significant other saying,              |
| 35:44      | hey, I just left work.                                                                                |
| 35:45      | Yeah.                                                                                                 |
| 35:46      | Exactly.                                                                                              |
| 35:47      | And we've always had something similar to that, but you always had to push the button.                |
| 35:51      | Yeah.                                                                                                 |
| 35:52      | Where in this case, now that this is automatically triggered by you leaving a location, this          |
| 35:57      | just happens.                                                                                         |
| 35:58      | You don't even think about it.                                                                        |
| 35:59      | That's, that's the automation that gets me excited.                                                   |
| 36:02      | And I should add a little caveat to this and it is a reasonable caveat.                               |
| 36:07      | I feel that I should say in that if your shortcut does not require input, it can run entirely         |
| 36:13      | in the background.                                                                                    |
| 36:15      | Dude, you don't need to do anything.                                                                  |
| 36:17      | So you just walk out of work, you get on your public transport or get in your car or whatever         |
| 36:21      | and you drive home.                                                                                   |
| 36:22      | And as you get home, because you got there, the, the garage door opens or whatever it                 |
| 36:25      | is that you set up and you walk into your house and then it starts playing the Star                   |
| 36:29      | Wars theme.                                                                                           |
| 36:30      | Yes.                                                                                                  |
| 36:31      | And if you don't need to select what song it is or input the text that you're sending                 |
| 36:36      | to your partner and things like that, it will just do it.                                             |
| 36:39      | Yeah.                                                                                                 |
| 36:40      | It's finally like internal to the operating system.                                                   |
| 36:42      | Yeah.                                                                                                 |
| 36:43      | And you can also connect this to before I leave.                                                      |
| 36:48      | So this is using the Siri predictions.                                                                |
| 36:50      | Yeah.                                                                                                 |
| 36:51      | So, you know, sometimes it pops up and it's like, oh, hey, like, you know, like if you                |
| 36:55      | better leave for work so that you get there on time, but you don't actually have work                 |
| 36:58      | in your calendar.                                                                                     |
| 36:59      | Siri just knows that you go to work at about the same time every day.                                 |
| 37:02      | Yeah.                                                                                                 |
| 37:03      | Well, you can hook into that.                                                                         |
| 37:04      | And you can do stuff at the predicted time, five minutes before 10, 15, 30, 16 minutes                |
| 37:10      | before and the options that it's showing me here is predict when I will leave for home                |
| 37:16      | and for work.                                                                                         |
| 37:17      | I don't know if it's got any more than those for other people.                                        |
| 37:20      | I'm guessing I'm a very boring person and I kind of go to two places and that's it.                   |
| 37:24      | I think it's really just any event base.                                                              |
| 37:26      | I mean, I don't think it's going to matter.                                                           |
| 37:28      | And just, I was just thinking, well, you know, maybe like I always brush my teeth before              |
| 37:33      | I leave the house, you know, and so I could set up the brush teeth timer.                             |
| 37:38      | But I mean, it's like you could do a whole bunch of stuff.                                            |
| 37:41      | Rose is like, I've got, I've got a look that I'm giving David right now.                              |
| 37:44      | I've never seen that look before.                                                                     |
| 37:46      | It's very excited look because you know that there are some toothbrushes that are Bluetooth           |
| 37:50      | connected, right?                                                                                     |
| 37:51      | Yeah.                                                                                                 |
| 37:52      | Well, you can also trigger a shortcut when a Bluetooth device connects to your device.                |
| 37:58      | Oh my goodness.                                                                                       |
| 37:59      | So when your Bluetooth toothbrush connects to your iPhone, it can just start the timer                |
| 38:05      | for you.                                                                                              |
| 38:06      | I mean, of course, most of the, if it's a Bluetooth connected toothbrush, it's probably               |
| 38:08      | got that.                                                                                             |
| 38:09      | But maybe it starts playing the news on your HomePod and like reading out the headlines              |
| 38:12      | of the day.                                                                                           |
| 38:13      | Oh, your toothbrushing song.                                                                          |
| 38:14      | I know.                                                                                               |
| 38:15      | What would your toothbrushing song be, Rose?                                                          |
| 38:16      | Oh gosh.                                                                                              |
| 38:17      | That is a good question.                                                                              |
| 38:18      | Can I take a rain check on that?                                                                      |
| 38:20      | Yeah.                                                                                                 |
| 38:21      | I think mine would be some kind of like rock ability, something, something like with a                |
| 38:24      | good rhythm.                                                                                          |
| 38:25      | Yeah.                                                                                                 |
| 38:26      | Yeah.                                                                                                 |
| 38:27      | It's got to have a good rhythm.                                                                       |
| 38:28      | Yeah.                                                                                                 |
| 38:29      | Definitely.                                                                                           |
| 38:30      | So yeah.                                                                                              |
| 38:31      | So I mentioned Bluetooth devices.                                                                     |
| 38:32      | When a Bluetooth device connects to your iOS device, you can trigger something.                       |
| 38:35      | So for example, if I connect these headphones, start playing my podcast playlist in overcast.         |
| 38:39      | But if I connect those headphones and start playing my work playlist, but if I connect                |
| 38:44      | the other headphones and start playing this music playlist or whatever, this is so good.              |
| 38:50      | Yeah.                                                                                                 |
| 38:51      | The whole Bluetooth connection thing runs really deep.                                                |
| 38:55      | Oh yeah.                                                                                              |
| 38:56      | You can.                                                                                              |
| 38:57      | We haven't, should we talk about this, Rose?                                                          |
| 39:00      | I think we should.                                                                                    |
| 39:01      | I think we should.                                                                                    |
| 39:02      | We should do some folks that know things and apparently, so now with iOS, you can now connect         |
| 39:07      | a mouse through accessibility and if the mouse has buttons on it, those buttons are registered        |
| 39:14      | under accessibility, but also addressable in Siri shortcuts.                                          |
| 39:18      | So then we started talking with folks that know things about, well, what if you bought                |
| 39:22      | one of those little Bluetooth like gaming keypads where it's got like 30 buttons on                   |
| 39:27      | it and, and we haven't tested this yet.                                                               |
| 39:31      | We're still on the ground.                                                                            |
| 39:32      | Well, yes, because my, my, I didn't, I really didn't think that the assistive touch for               |
| 39:37      | pointing devices was going to happen.                                                                 |
| 39:39      | Yeah.                                                                                                 |
| 39:40      | So I left my mice and trackpad and everything at home, which means that I've had no way to            |
| 39:43      | test this, but the, the, the things that I have seen and reports that I've heard from                 |
| 39:51      | other people who have tested this is that if you like mice and you happen to have a mouse             |
| 39:57      | with a lot of buttons, you can use those buttons to trigger shortcuts, but maybe you can even         |
| 40:02      | use anything with buttons that connects via Bluetooth.                                                |
| 40:05      | I'm not sure about that because it is specifically like mice that have the accessibility things.      |
| 40:12      | We'll have to figure it out.                                                                          |
| 40:13      | Yeah.                                                                                                 |
| 40:14      | This is something we're going to have to test.                                                        |
| 40:15      | And of course, this is beta one right now.                                                            |
| 40:17      | We're literally recording this four days after the keynote one day before this episode                |
| 40:20      | releases, which is the Friday after the keynote was on the Monday and, and I'm just a little          |
| 40:24      | giddy right now.                                                                                      |
| 40:25      | Oh yeah.                                                                                              |
| 40:26      | I want to, I want this to go farther.                                                                 |
| 40:29      | Yeah.                                                                                                 |
| 40:30      | So anyway, but that's just, you know, in addition to Bluetooth, you can trigger shortcuts based       |
| 40:36      | on connecting to Carplay or disconnecting.                                                            |
| 40:38      | Yeah.                                                                                                 |
| 40:39      | And Wi-Fi as well.                                                                                    |
| 40:41      | So for example, if I get to my parents place and I connected their Wi-Fi, then I can actually         |
| 40:45      | have it go, Hey, you got all these things that you wanted to do when you visit your parents.          |
| 40:50      | Or when you enable or disable, do not disturb or low power mode and an airplane mode of               |
| 40:58      | course is part of that.                                                                               |
| 41:00      | But there's a couple of other ones, which it took me a moment to wrap my head around                  |
| 41:05      | the possibilities here.                                                                               |
| 41:07      | So we have NFC tags.                                                                                  |
| 41:08      | Now some of you have probably played with NFC tags on iOS before, but NFC tags can immediately        |
| 41:14      | run a specific shortcut.                                                                              |
| 41:15      | That's just it.                                                                                       |
| 41:16      | You tap it and it does it.                                                                            |
| 41:17      | Yeah.                                                                                                 |
| 41:18      | NFC tags.                                                                                             |
| 41:20      | Yeah.                                                                                                 |
| 41:21      | And it uses from what I understand from reading through the documentation.                            |
| 41:25      | I will note, I did read this very quickly.                                                            |
| 41:28      | It would use the unique ID of the NFC tag to figure this out.                                         |
| 41:31      | Which would make sense.                                                                               |
| 41:32      | It would.                                                                                             |
| 41:33      | So you walk in the front door, you tap your phone against the wall where you get a sticker            |
| 41:39      | and things just happen.                                                                               |
| 41:40      | Yeah.                                                                                                 |
| 41:41      | Which is cool.                                                                                        |
| 41:42      | You go in your car.                                                                                   |
| 41:43      | I mean, we talked about this in relation to.                                                          |
| 41:48      | Yeah.                                                                                                 |
| 41:49      | Launch Center Pro.                                                                                    |
| 41:50      | Yeah.                                                                                                 |
| 41:51      | Recently.                                                                                             |
| 41:52      | But I mean, just like now we're adding all, not just Launch Center Pro, but the power of              |
| 41:55      | all shortcuts.                                                                                        |
| 41:56      | Yes.                                                                                                  |
| 41:57      | You know, and all the built-in automation.                                                            |
| 41:58      | And it runs entirely in the background, which is massive.                                             |
| 42:01      | I mean, if you sit at your desk, you put a sticker on your desk and you can tap your                  |
| 42:05      | phone or your iPad there and you can trigger all your automation.                                     |
| 42:09      | It's, I'm giddy just thinking about what I could do with this.                                        |
| 42:14      | And also, I'm thinking about the other people in my life because I could write scripts for            |
| 42:19      | my wife's phone that are different than mine.                                                         |
| 42:22      | Yeah.                                                                                                 |
| 42:23      | I mean, she's not necessarily going to figure all this stuff out, but she would love to               |
| 42:26      | be able to walk in the front door and also hit that tag with her phone and have her things            |
| 42:31      | happen automatically.                                                                                 |
| 42:32      | Yeah.                                                                                                 |
| 42:33      | And.                                                                                                  |
| 42:34      | There is one thing that I should note with this.                                                      |
| 42:36      | Of course, I can have an NFC tag program to do my thing, but when you tap that NFC tag,               |
| 42:41      | you're going to have to program that yourself.                                                        |
| 42:42      | And this is a security feature, so I can't program an NFC tag that's going to download,               |
| 42:47      | say a shortcut from the cloud, it's going to grab all of your contact data, it's going                |
| 42:51      | to zip it up, save it to my [[Dropbox]], it's going to go through, find your most frequently              |
| 42:55      | visited locations.                                                                                    |
| 42:56      | None of that is possible because, I mean, iOS is iOS.                                                 |
| 43:02      | It's a fairly locked down operating system.                                                           |
| 43:04      | They have opened it up massively, but they've not opened it up so wide that we get security           |
| 43:08      | issues where I create, I've got an NFC tag and David accidentally puts his phone on the               |
| 43:13      | table and boom, I've got all this information.                                                        |
| 43:16      | That is not possible.                                                                                 |
| 43:17      | Yeah, exactly.                                                                                        |
| 43:18      | It's an on-device.                                                                                    |
| 43:19      | But the benefit of this is if you're in a family and there's multiple people, each person's           |
| 43:25      | phone is going to see that NFC tag and do something different with it or nothing with                 |
| 43:29      | it, whether or not you've programmed it.                                                              |
| 43:32      | So you don't have to have four tags for four people, you can have one tag and each person             |
| 43:37      | tapping it is going to get different.                                                                 |
| 43:39      | Yeah.                                                                                                 |
| 43:40      | You just have to set it up on each person's device and don't forget, NFC tags, that is                |
| 43:44      | iPhone only.                                                                                          |
| 43:45      | Yeah.                                                                                                 |
| 43:46      | So there's one big one that we didn't get to yet.                                                     |
| 43:48      | Are you ready for it?                                                                                 |
| 43:49      | I'm ready.                                                                                            |
| 43:50      | When you open an app, now this is the one, it took me a while to wrap my head around.                 |
| 43:55      | I was thinking, what am I going to want to do every time I open an app?                               |
| 43:59      | And then I was there talking to a lovely person.                                                      |
| 44:03      | His name is Joe.                                                                                      |
| 44:04      | You may have heard of Joe.                                                                            |
| 44:06      | Joe created an app called Timery, a toggle timer.                                                     |
| 44:10      | And then I realised, this is what this is made for.                                                   |
| 44:14      | This is made for Joe.                                                                                 |
| 44:16      | I'm pretty much, I'm thinking of this as the Joe feature.                                             |
| 44:18      | I'm sure there are many, many other implementations.                                                  |
| 44:21      | But for example, when I open this application, start my timer for that.                               |
| 44:26      | So when I open Quip, start my automators timer, just do it.                                          |
| 44:30      | And that is where I just melted into a very excited ball of happiness.                                |
| 44:35      | Can you run these as well when you close an app?                                                      |
| 44:39      | It does not offer the option of when you close an app.                                                |
| 44:43      | So you can do things, there's some little bugs.                                                       |
| 44:46      | I'm seeing a lot of things in this app list that I should not be seeing.                              |
| 44:50      | But you can run things when you open specific applications, or you can run things when you            |
| 44:54      | open any application.                                                                                 |
| 44:55      | So you could potentially have a shortcut for any application that stops your timer, and               |
| 45:01      | then have shortcuts for specific applications that start specific timers.                             |
| 45:05      | It's just, all of this stuff is amazing.                                                              |
| 45:08      | We just glanced over Wi-Fi as a trigger.                                                              |
| 45:12      | But even when I was doing the [[Keyboard Maestro]] field guide, that is one of my very favourite            |
| 45:16      | triggers because it's so useful.                                                                      |
| 45:18      | Everybody goes to different places where they connect to Wi-Fi.                                       |
| 45:22      | Work versus home is a great example.                                                                  |
| 45:25      | And you just connect to the work Wi-Fi and suddenly maybe it closes out all your personal             |
| 45:30      | stuff.                                                                                                |
| 45:31      | I mean, it's tough to wrap my imagination around all the things I want to do with this                |
| 45:39      | as this gets out.                                                                                     |
| 45:40      | So we got some real fun ahead of us with Siri Shortcuts.                                              |
| 45:45      | I want to talk a little bit about conversational Siri because this is another thing that everybody    |
| 45:51      | wanted myself included.                                                                               |
| 45:52      | I want to be able to pass variables to Siri, and now you can.                                         |
| 45:57      | Yeah.                                                                                                 |
| 45:58      | It is very exciting.                                                                                  |
| 45:59      | But before that, I think we should thank our second sponsor for the day.                              |
| 46:03      | This episode of Automators is brought to you by PDF-Pen 11 from our friends at Smile.                 |
| 46:08      | PDF-Pen and PDF-Pen Pro is your ultimate PDF viewing and editing app for the Mac.                     |
| 46:13      | You can add headers and footers along with watermarks to your documents.                              |
| 46:17      | It also includes a precision edit tool, plus you can OCR documents.                                   |
| 46:22      | PDF-Pen 11 is an exciting update, and the new version includes some seriously cool features           |
| 46:27      | like [[Split View]] mode for comparing pages in a document, a new font bar for easier text                |
| 46:32      | editing, the option to edit multiple form fields at the same time, continuity camera                  |
| 46:38      | support for scanning documents with your iPhone, the ability to add multiple items to the PDF-Pen     |
| 46:43      | library simultaneously, and more.                                                                     |
| 46:47      | If you spend any time working with PDFs, you need PDF-Pen 11.                                         |
| 46:51      | To learn more, go to smilesoftware.com/podcast now.                                             |
| 46:56      | That's smilesoftware.com/podcast.                                                               |
| 46:59      | Our thanks to PDF-Pen 11 for their support of this show and all of Relay FM.                          |
| 47:04      | You know, passing variables to Siri.                                                                  |
| 47:07      | Oh, yeah.                                                                                             |
| 47:08      | That's something we've always wanted, right?                                                          |
| 47:10      | It is.                                                                                                |
| 47:11      | And, you know, we could work around this a little last time, but it was a lot of work                 |
| 47:14      | to work around it, because you had to do the listen for dictation, then you had to do                 |
| 47:19      | probably regular expressions to try and match whether or not somebody said left or right.             |
| 47:23      | I mean, you could just try and do if it contained, but that didn't always work.                       |
| 47:28      | It was inconsistent and difficult.                                                                    |
| 47:30      | And now, Shortcuts is built to do all of this for us.                                                 |
| 47:36      | And I feel that I should mention [[Adam Tow\|Adam]], because we both met Adam this week.                            |
| 47:40      | Adam is the person behind Prompt Kit, Crown iOS, lots of these very long shortcuts that               |
| 47:48      | are great utilities.                                                                                  |
| 47:49      | So you can do things like watch notes and things like that or reminders for things.                   |
| 47:55      | And Adam's stuff is still excellent.                                                                  |
| 47:57      | If you haven't checked it out, he's got lots of it in our forums.                                     |
| 48:00      | I would highly recommend going in and looking for all of this, because it is amazing.                 |
| 48:05      | And also, if you're not a developer, please don't install the beta yet.                               |
| 48:09      | Wait for public beta, at least one.                                                                   |
| 48:12      | But conversational Siri, in some ways, eliminates the need for this, because also it can be           |
| 48:19      | very easily used by app developers.                                                                   |
| 48:22      | My concern always with requiring another shortcut to do the thing that you're doing is if somebody    |
| 48:27      | downloads one shortcut, then they've got one piece of the puzzle.                                     |
| 48:30      | But they're missing the other six or seven pieces, which is a little sad for those people.            |
| 48:35      | No, it's great.                                                                                       |
| 48:36      | I mean, it just opens up the world, again, with things you can do with Siri Shortcuts,                |
| 48:43      | because everything was one dimensional before.                                                        |
| 48:47      | It was the Siri Shortcut you ran had a beginning and an ending, and that was it.                      |
| 48:52      | You couldn't change tracks with the train.                                                            |
| 48:55      | I don't know.                                                                                         |
| 48:56      | I'm going to just screw this up, but I keep talking about analogies.                                  |
| 48:59      | But we've opened it up much wider now, so we can do a lot more than we used to be able                |
| 49:05      | to by being able to pass data back and forth with Siri.                                               |
| 49:11      | It can ask for input.                                                                                 |
| 49:12      | You can now talk to it.                                                                               |
| 49:14      | Let's just go on to ask for input for a moment.                                                       |
| 49:16      | So this was on my personal wish list.                                                                 |
| 49:18      | The ask for input would just, if you run it through Siri, let you talk to it.                         |
| 49:23      | And it does.                                                                                          |
| 49:25      | And that means that you don't have to rewrite all of your shortcuts.                                  |
| 49:28      | So if you just run it in the Shortcuts app, you can type, type, type as you would.                    |
| 49:32      | But if you run it through Siri, you can talk to it, and that is great.                                |
| 49:36      | One of the things I'm really looking forward to is once things get a little further along             |
| 49:40      | in the beta process, seeing if it improves on my HomePod.                                             |
| 49:44      | That is something that I've struggled with, honestly, in the first years that the HomePod,            |
| 49:50      | although it will accept Siri for me every time I ask it to do something with Siri, it                 |
| 49:55      | will start playing music, or it just doesn't seem to compute that I want it to do a Siri              |
| 50:00      | shortcut.                                                                                             |
| 50:01      | It's not, it does once in a while, but it's not nearly enough of a hit rate to make it                |
| 50:06      | consistent or something I can rely on.                                                                |
| 50:08      | Yeah, which is unfortunate, but I think we're going to get there with this.                           |
| 50:12      | I mean, when you can do this type of thing, I would assume that it probably is better,                |
| 50:18      | because that's the only way you can make it work.                                                     |
| 50:20      | Definitely.                                                                                           |
| 50:21      | So a lot of stuff we've been talking about, structure, all these triggers, I think, are               |
| 50:25      | just key.                                                                                             |
| 50:27      | We also got some new actions.                                                                         |
| 50:28      | Yeah, and I've just put a couple of my favourite ones in the show document, because we say             |
| 50:32      | here, talking about all of the new actions, and then we talk about all the ones that people           |
| 50:36      | like Culture Code and Omni Group and so on are going to add, like, we're going to be                  |
| 50:40      | here for the rest of our lives, but two ones that, for me, are very nice.                             |
| 50:46      | Set wallpaper.                                                                                        |
| 50:47      | Yeah.                                                                                                 |
| 50:48      | So at 9 a.m. every day, you can have it grab the latest NASA image or whatever it is and              |
| 50:52      | set your wallpaper to that.                                                                           |
| 50:53      | Yeah.                                                                                                 |
| 50:54      | Or at sunset every day, you could have it set your wallpaper to a dark wallpaper and                  |
| 50:57      | it summarised to a light wallpaper.                                                                   |
| 50:59      | Or if you work with a bunch of bozos that are, like, really serious and they don't want your          |
| 51:03      | personal stuff, you get to work, you connect to your Wi-Fi, you set your work wallpaper,              |
| 51:09      | you leave your work Wi-Fi, then you put your family back on the screen.                               |
| 51:12      | Yeah.                                                                                                 |
| 51:13      | You know, it's like, it's just like whatever your needs are, now you can do that.                     |
| 51:16      | Yeah.                                                                                                 |
| 51:17      | And the other one, which I love, love, love, love, love, love, set playback destination.              |
| 51:22      | Yes.                                                                                                  |
| 51:23      | Can we have a little round of applause for set playback destination?                                  |
| 51:25      | Oh, man, I wanted this one so bad.                                                                    |
| 51:27      | Oh, yeah.                                                                                             |
| 51:28      | So now you can, like, grab music or can you use some of the new podcast actions that                  |
| 51:32      | have been added for the native podcast app?                                                           |
| 51:35      | And you can grab that and you can say play it on HomePod number four, because if you                  |
| 51:39      | have HomePods, they breed, like triples.                                                              |
| 51:40      | We remember this, right?                                                                              |
| 51:42      | You've been to my house, Rose.                                                                        |
| 51:43      | Oh, yeah.                                                                                             |
| 51:44      | There are HomePods.                                                                                   |
| 51:45      | There are HomePods.                                                                                   |
| 51:46      | Lots of HomePods.                                                                                     |
| 51:47      | I like the HomePods.                                                                                  |
| 51:48      | There's now, I now have two downstairs.                                                               |
| 51:49      | A matched pair, which will be perfect to play my theme song as I walk through the front               |
| 51:53      | door.                                                                                                 |
| 51:54      | Though you may need an extra one next to the front door, just for security purposes, right?           |
| 51:59      | Next year.                                                                                            |
| 52:00      | Next year.                                                                                            |
| 52:01      | I think that might have to happen.                                                                    |
| 52:02      | But, you know, it's cool because before you would want to create shortcuts to play music,             |
| 52:08      | like for me, it's in my office.                                                                       |
| 52:09      | I'm in my office all day.                                                                             |
| 52:11      | I want to play music to the HomePod.                                                                  |
| 52:13      | And so it's not easy.                                                                                 |
| 52:15      | You had to do automation outside of the, well, it wasn't even automation.                             |
| 52:20      | You just had to manually set the location in addition to your automation.                             |
| 52:24      | But now you can just do it.                                                                           |
| 52:25      | Yep.                                                                                                  |
| 52:26      | And it's awesome.                                                                                     |
| 52:29      | And I mean, I'm sure there are lots of people listening.                                              |
| 52:32      | They really want to play with this.                                                                   |
| 52:33      | Apple does say it on the developer website.                                                           |
| 52:35      | Okay.                                                                                                 |
| 52:36      | Do not download this for thrill seekers.                                                              |
| 52:39      | Please wait till public beta one.                                                                     |
| 52:41      | I broke that rule and installed it on one device, but I'm very happy it's only on one                 |
| 52:45      | device because it's buggy.                                                                            |
| 52:47      | Basis are not kind to battery life.                                                                   |
| 52:48      | They will cause weird issues.                                                                         |
| 52:50      | I'm seeing in lots of applications, the text is so tiny.                                              |
| 52:53      | I literally have to touch the screen with my nose to be able to read it.                              |
| 52:57      | And I've tried changing, you know, like sizes of text and things like that.                           |
| 53:00      | And it's an iOS bug and it will be fixed, but it's not fixed yet.                                     |
| 53:04      | So don't install the developer beta unless you have a very, very, very good reason to                 |
| 53:09      | wait for the public beta.                                                                             |
| 53:10      | Yeah.                                                                                                 |
| 53:11      | I played with roses and some other friends that have also installed it.                               |
| 53:14      | And it looks like this one has a lot of pain and suffering installed involved.                        |
| 53:19      | In fact, it's interesting.                                                                            |
| 53:21      | This is the first time in years that Apple's made it to put the beta on your iPhone or iPad.          |
| 53:26      | You literally have to download the restore image.                                                     |
| 53:28      | Yeah.                                                                                                 |
| 53:29      | You have to wipe your device for this and then restoring it messes a bunch of stuff up.               |
| 53:33      | Yeah.                                                                                                 |
| 53:34      | I think they intentionally wanted to make it hard because they want people to just casually           |
| 53:38      | push a button and then find out that they lost a bunch of data or something.                          |
| 53:42      | It will get better.                                                                                   |
| 53:43      | There's going to be a public beta later.                                                              |
| 53:44      | I'm going to probably get in before the public data, but I just want to give it...                    |
| 53:48      | I'm probably going to wait till second or third.                                                      |
| 53:50      | Yeah.                                                                                                 |
| 53:51      | I would highly recommend that.                                                                        |
| 53:53      | Even if you're a developer and you're not yet ready to do all this stuff, you know, you               |
| 53:57      | don't need to worry usually about missing out because the developer betas do release                  |
| 54:01      | pretty quickly.                                                                                       |
| 54:02      | I mean, by the time you're listening to this, there may already be another developer beta,            |
| 54:06      | which is more stable.                                                                                 |
| 54:07      | Yeah.                                                                                                 |
| 54:08      | Usually it's a week after, but either way, it's going to get better.                                  |
| 54:12      | And the other thing that happens, if you're not a developer, but you're just curious about            |
| 54:16      | this stuff, is I often find because of the features and because all the Apple ecosystem               |
| 54:21      | is so tied together, it's like once you download the beta somewhere, then one place, then things      |
| 54:27      | start breaking.                                                                                       |
| 54:28      | It's almost encourages you to just download the betas everywhere to kind of keep everything           |
| 54:32      | on the same thing.                                                                                    |
| 54:33      | Well, I mean, there's a lot of features that don't work unless you're on the beta on everything       |
| 54:37      | or you have to disconnect devices.                                                                    |
| 54:39      | So the new [[Apple Reminders\|Reminders]] features, we haven't talked about [[Apple Reminders\|Reminders]] at all.                              |
| 54:42      | It's more of a Mac Perry uses topic than an Automator's topic, but there's some amazing               |
| 54:46      | new features in [[Apple Reminders\|Reminders]], but when I opened [[Apple Reminders\|Reminders]], it was like, hey, you have seven              |
| 54:51      | devices connected that do not support this version of [[Apple Reminders\|Reminders]].                                      |
| 54:55      | Just push this button and let me convert your database so it doesn't work anywhere else.              |
| 54:58      | Yeah, which I did not click the button.                                                               |
| 55:01      | I did not click that button.                                                                          |
| 55:04      | And that's why you get like, I know in my case, I get like this weird feeling and within              |
| 55:10      | a week of me downloading a beta and one device, I have it everywhere.                                 |
| 55:14      | So just stay clear that even if in the past you've been brave, hold off for a while.                  |
| 55:20      | I assume when they get to the public beta, things are going to be more stable if you                  |
| 55:23      | really want to go out in the limb, but you know, everybody says that Rose, I think it's               |
| 55:27      | funny.                                                                                                |
| 55:28      | All of us podcasters keep telling people don't download the beta, do what I say, not what             |
| 55:32      | I do.                                                                                                 |
| 55:33      | Yeah, exactly.                                                                                        |
| 55:34      | All of us end up downloading.                                                                         |
| 55:35      | We can't help ourselves.                                                                              |
| 55:36      | But we're doing it for you.                                                                           |
| 55:37      | For our favourite listeners.                                                                           |
| 55:38      | At least that's what we tell ourselves.                                                               |
| 55:39      | Yeah.                                                                                                 |
| 55:40      | Yeah.                                                                                                 |
| 55:41      | All right.                                                                                            |
| 55:42      | Let's just talk a little bit about being here in San Jose.                                            |
| 55:44      | The meet up was amazing.                                                                               |
| 55:46      | Well, let's start with our Orange County meet up because we had two meetings since our last            |
| 55:49      | episode.                                                                                              |
| 55:50      | Yeah.                                                                                                 |
| 55:51      | That was amazing.                                                                                     |
| 55:52      | We were in Orange County at the Irvine Spectrum.                                                      |
| 55:54      | I bought an iPad.                                                                                     |
| 55:55      | I bought that before everybody got there, so people didn't have to wait for me to pick                |
| 55:58      | up my iPad.                                                                                           |
| 55:59      | But yeah, it was amazing.                                                                             |
| 56:01      | We had so many people come.                                                                           |
| 56:02      | Lots of folks showed up.                                                                              |
| 56:03      | We had somebody there from Florida and our friend JF came in from Las Vegas and I don't               |
| 56:09      | know what was it about?                                                                               |
| 56:11      | 30, 35 people.                                                                                        |
| 56:12      | About 30-ish people and all walks of life.                                                            |
| 56:15      | We had several musicians there.                                                                       |
| 56:18      | Oh yeah.                                                                                              |
| 56:19      | Yeah.                                                                                                 |
| 56:20      | We had a soccer player.                                                                               |
| 56:21      | Yeah.                                                                                                 |
| 56:22      | And it was really great talking to automators, listeners, and hearing how you guys are using          |
| 56:25      | automation and also just hanging out together.                                                        |
| 56:28      | Oh yeah.                                                                                              |
| 56:29      | And then of course we all went to the cool Apple store they have down there, which is                 |
| 56:32      | kind of amazing.                                                                                      |
| 56:34      | And then we had the meet up here in San Jose.                                                          |
| 56:39      | That was the day we did, [[Stephen Hackett\|Stephen]] and I did the interview with the Apple guy.                          |
| 56:41      | So we actually had to push the thing back to two o'clock.                                             |
| 56:46      | But when I got there, it's kind of funny because I got there at two, the time it was designated.      |
| 56:50      | Yeah.                                                                                                 |
| 56:51      | So I got there early because, as you may have heard at the beginning of the episode, I sprained       |
| 56:56      | my ankle, which means I'm not super mobile, I'm on crutches right now.                                |
| 56:59      | So I got there at 12 because I was concerned that originally the meet up had been at 12,               |
| 57:03      | so people would be showing up at 12.                                                                  |
| 57:06      | And I didn't want anybody to feel like they were completely lost.                                     |
| 57:10      | So I thought, well, I'll get there at 12 and see who shows up.                                        |
| 57:14      | And a couple of people showed up pretty early, which was fun.                                         |
| 57:17      | Yeah.                                                                                                 |
| 57:18      | So I got there too.                                                                                   |
| 57:19      | And the location we were at is like a lot of outdoor seating.                                         |
| 57:23      | And I just walked through and I saw this table, this big set of tables with a whole bunch             |
| 57:28      | of people.                                                                                            |
| 57:29      | I'm like, oh, that must be some company meet up because it's two o'clock, this is the start            |
| 57:32      | timer.                                                                                                |
| 57:33      | That can't be us.                                                                                     |
| 57:34      | And I literally walked right past it.                                                                 |
| 57:35      | Oh, you probably didn't see me.                                                                       |
| 57:36      | I walked past it and I walked all the way around the circuit.                                         |
| 57:39      | The whole thing was a big outdoor area.                                                               |
| 57:40      | And then finally I said, where is everybody?                                                          |
| 57:42      | I was going to text rows and I went back.                                                             |
| 57:45      | I looked at that big table full of people again.                                                      |
| 57:47      | And I realised, hey, there's a lady there with crutches.                                              |
| 57:50      | That must be us.                                                                                      |
| 57:51      | You know?                                                                                             |
| 57:52      | So I went over and it was like, it was the meeting place.                                             |
| 57:56      | It was like, it was like the round table of automation.                                               |
| 58:00      | The Siri shortcut scene was there.                                                                    |
| 58:02      | There was a bunch of guys from the Apple automator slash [[AppleScript]] stuff.                          |
| 58:07      | There were a bunch of users and power users.                                                          |
| 58:09      | [[Adam Tow\|Adam]] was there.                                                                                       |
| 58:11      | [[Sal Soghoian]] was there.                                                                              |
| 58:12      | Yeah.                                                                                                 |
| 58:13      | Joe from [[Timery]] was there.                                                                            |
| 58:14      | Yeah.                                                                                                 |
| 58:15      | I mean, it was like, it was, I mean.                                                                  |
| 58:17      | It was the automation meet up of [[WWDC]].                                                                  |
| 58:20      | I'm really proud of the fact that all those people not only listened to the show, but                 |
| 58:24      | they took their time to come.                                                                         |
| 58:25      | Yeah.                                                                                                 |
| 58:26      | It was so nice.                                                                                       |
| 58:28      | And for all of the regular listeners that came, I don't mean this in a negative way.                  |
| 58:32      | I mean, you don't happen to work for Apple or develop an app that we use every day.                   |
| 58:38      | It was amazing to see everybody there and it went that everybody could talk to each                   |
| 58:41      | other.                                                                                                |
| 58:42      | And from what I saw, everyone was having an amazing time.                                             |
| 58:44      | So I'm so glad that everybody came.                                                                   |
| 58:46      | Because it was great fun.                                                                             |
| 58:47      | And you know, just normal users also were super useful to the developers there because                |
| 58:52      | they could talk about what their priorities were.                                                     |
| 58:55      | And it just looked to me like everyone was having a really good time and it was such                  |
| 58:59      | a joy to be a little part of putting that together.                                                   |
| 59:02      | It was.                                                                                               |
| 59:03      | And a thank you to everybody that came.                                                               |
| 59:05      | For those of you who couldn't come, who wanted to come, my plan is, I have an exciting plan           |
| 59:11      | for [[WWDC]] next year.                                                                                   |
| 59:13      | It involves no sprained ankles, but also probably no scooters, but it does involve another            |
| 59:19      | automator's meet up or two.                                                                            |
| 59:20      | 100% less scooter next year.                                                                          |
| 59:22      | Oh yeah.                                                                                              |
| 59:23      | Yeah.                                                                                                 |
| 59:24      | There was only one scooter ride this year.                                                            |
| 59:25      | And so 100% less next year.                                                                           |
| 59:26      | Yeah.                                                                                                 |
| 59:27      | We want to build on the meetup, though.                                                               |
| 59:28      | We're going to do something cool next year.                                                           |
| 59:29      | We have no idea what it is as we say here, but we've got ideas.                                       |
| 59:34      | So we will figure that out.                                                                           |
| 59:36      | The also just the [[WWDC]] experience has always been amazing.                                            |
| 59:40      | This year seems very positive and optimistic.                                                         |
| 59:44      | I think a lot of people are happy with a new hardware, even though none of us can afford              |
| 59:48      | it.                                                                                                   |
| 59:49      | And the and really just I just wrote a post to MacSparky this morning.                               |
| 59:54      | I feel like there is a renewed focus on Mac and iPad that we haven't really seen.                     |
| 59:59      | I mean, that we've we've heard through the grapevine that is coming for whatever reason,              |
| 01:00:05   | Apple has turned a lot of its attention back towards products other than the iPhone.                  |
| 01:00:10   | And for people like us that make our livings working on iPads and Macs, I think that's                |
| 01:00:15   | great news.                                                                                           |
| 01:00:16   | It is.                                                                                                |
| 01:00:17   | It is.                                                                                                |
| 01:00:18   | It's such great news.                                                                                 |
| 01:00:19   | And I mean, it's just fun being here and looking at all this stuff and trying to think                |
| 01:00:25   | of the possibilities.                                                                                 |
| 01:00:26   | My brain is excited.                                                                                  |
| 01:00:28   | And so it's probably missed 8 billion of the things that you can do.                                  |
| 01:00:32   | And it's just focusing on the five things that my brain thinks is awesome right now.                  |
| 01:00:35   | Yeah.                                                                                                 |
| 01:00:36   | It's good fun.                                                                                        |
| 01:00:37   | Yeah.                                                                                                 |
| 01:00:38   | And when we're unpacking this, we're going to discover even more goodness in all this.                |
| 01:00:42   | But anyway, so I guess the story from San Jose in 2019 from Rose and Dave is, hey, guys,              |
| 01:00:49   | we got we got great toys coming for Siri shortcuts and it's going to be more accessible               |
| 01:00:54   | than ever.                                                                                            |
| 01:00:55   | Oh, yeah.                                                                                             |
| 01:00:56   | And everybody's going to get this in September, you know, when we when we get those new iPhones,      |
| 01:01:00   | this iOS is going to roll out to everybody from experience.                                           |
| 01:01:03   | It will probably just start installing at some point for those people who don't like                  |
| 01:01:07   | to tap the update button and then everybody's got everything.                                         |
| 01:01:10   | Yeah.                                                                                                 |
| 01:01:11   | So you can drop a shortcut on your grandma's grandma's iPad and just have it do that thing            |
| 01:01:15   | that needs to be done whenever she opens this application.                                            |
| 01:01:19   | Let us know in the forums what you're most excited about, maybe some of your automation               |
| 01:01:23   | ideas that were sparked through the stuff we talked about today.                                      |
| 01:01:26   | And we we will see you in a couple of weeks.                                                          |
| 01:01:30   | Yeah.                                                                                                 |
| 01:01:31   | Thank you for listening and we will talk to you in two weeks.                                         |
| 01:01:34   | Bye.                                                                                                  |
