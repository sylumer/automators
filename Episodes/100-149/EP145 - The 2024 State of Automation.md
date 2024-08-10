---
status: "incomplete"
fc-date:
  year: 2024
  month: 01
  day: 12
fc-category: "podcast"
podcast: "Automators"
published: 2024-01-12
duration: 4575
formattedduration: "01:16:15"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/145"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators145.mp3"
episode: 145
title: "145: The 2024 State of Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David get out their scorecards for the existing automation platforms.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
[Episode 145 Discussion](https://talk.automators.fm/t/145-the-2024-state-of-automation/17138)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post a job for free.
- [[Vitally (Sponsor)|Vitally]] - A new era for customer success productivity.

# Show Notes
Rose and David get out their scorecards for the existing automation platforms.

- [MacSparky Productivity Field Guide](https://learn.macsparky.com/p/productivity-plus-24)
- [Keyboard Maestro 11.0.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/#WhatsNew)
- [Changelog - Bunch.app](https://bunchapp.co/docs/changelog/)
- [DEVONtechnologies | Devonian Times](https://www.devontechnologies.com/blog)
- [Drafts: 2023, Year in Review - News & Updates - Drafts Community](https://forums.getdrafts.com/t/drafts-2023-year-in-review/14777)
- [Tally 5: Interactive Widgets, iCloud Sync, Watch Redesign - News & Updates - Drafts Community](https://forums.getdrafts.com/t/tally-5-interactive-widgets-icloud-sync-watch-redesign/14527)
- [Grammarly Blog](https://www.grammarly.com/blog/)
- [Snippety - Productivity App for macOS](https://snippety.app/)
- [TextExpander: #1 Text Replacement & Keyboard Shortcut App](https://textexpander.com/)
- [What’s new in Shortcuts for iOS 17, iPadOS 17, macOS 14, and watchOS 10 - Apple Support](https://support.apple.com/en-us/111098)
- [Thread Group is finally fixing Thread border routers - The Verge](https://www.theverge.com/2024/1/8/24028203/thread-group-fix-credential-sharing-thread-border-router)
- [What’s new in Shortcuts iOS 16/macOS 13 - Apple Support](https://support.apple.com/en-us/101583)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello and welcome to Automators, the Automation podcast where we talk about grabbing your               |
| 00:06      | technology and getting it to do your bidding.                                                           |
| 00:08      | I am Rosemary Orchard and joined by my pal and co-host, as always, David Sparks.                        |
| 00:12      | Hey David, how are you?                                                                                 |
| 00:13      | Hey Rosemary, how are you today?                                                                        |
| 00:15      | I am doing great.                                                                                       |
| 00:16      | I'm just doing awesome.                                                                                 |
| 00:18      | Yeah, I'm excited, you know, like new year, new start, and, you know, I've been going                   |
| 00:23      | through trying to do a sort of inventory of all of the automation stuff that I'm currently              |
| 00:28      | doing and how it's working.                                                                             |
| 00:29      | And yeah, we've got a great topic lined up for today.                                                   |
| 00:32      | Hey, you know, before we get started, a couple announcements today on Automator's Max, which            |
| 00:38      | is the extended ad free version of the show, Rose and I are going to be talking about mouse             |
| 00:42      | struggles.                                                                                              |
| 00:43      | I have two mice on my desk right now.                                                                   |
| 00:45      | I've been using terminal commands.                                                                      |
| 00:47      | There's a whole, there's a whole thing I got to talk to you about.                                      |
| 00:49      | I think Rose bought something.                                                                          |
| 00:51      | So now she's going to want me to buy something.                                                         |
| 00:53      | Yeah, could you say it's a mouse trap?                                                                  |
| 00:54      | Yeah, you could.                                                                                        |
| 00:55      | Is it a mouse trap?                                                                                     |
| 00:56      | You really could.                                                                                       |
| 00:57      | Well, at least, at least we won't be too cheesy.                                                        |
| 01:00      | It's a little, oh my gosh, oh my gosh, Rose, okay, we got to stop that.                                 |
| 01:04      | The other thing is I just released a new field guide, the productivity field guide.                     |
| 01:08      | It is the most unautometer friendly field guide I've ever released.                                     |
| 01:13      | It's about my productivity system.                                                                      |
| 01:16      | Years ago I got real serious about trying to figure out how to do what's important to                   |
| 01:20      | me and I combined kind of the latest ideas about productivity along with kind of my ancient             |
| 01:27      | history studies.                                                                                        |
| 01:29      | So I have a Aristotelian Hellenistic based modern productivity system that I've been                    |
| 01:34      | using for years and it involves Greek terms and it's all, it's actually quite useful and                |
| 01:41      | I've got really good feedback from people that now they've released it.                                 |
| 01:43      | But if you have any interest in that, go check it out at learn.macsparkyi.com.                            |
| 01:49      | If you use the code PFG for productivity field guide launch, all in one word, PFG launch,               |
| 01:57      | you get 10% off for a short time.                                                                       |
| 01:59      | I won't go into it in any greater detail on the Automator's Podcast, but it's a big                     |
| 02:03      | deal to me and I'd appreciate it if you checked it out.                                                 |
| 02:07      | Awesome.                                                                                                |
| 02:09      | It's the beginning of 2024 and we cover a lot of different automation platforms on this                 |
| 02:15      | show and ways to automate your stuff.                                                                   |
| 02:18      | We thought it would be fun to do kind of an audit and just kind of take stock of the state              |
| 02:22      | of various automation platforms as we head into the new year.                                           |
| 02:26      | Yeah.                                                                                                   |
| 02:27      | I mean, it's one of those things where as you're wrapping up the end of one year and                    |
| 02:32      | you go into the beginning of another, it's always a good time to sort of review things                  |
| 02:36      | and just have a look at what's working and what's not working.                                          |
| 02:39      | And for us as Automators, we decided that we weren't just going to look at our personal                 |
| 02:43      | systems.                                                                                                |
| 02:44      | We're just going to go, hey, big picture, let's expand this and look at this on a much                  |
| 02:50      | wider level because it's really exciting to see all of the automation things have been                  |
| 02:54      | happening over the last year and a little bit of what's to come over the next year.                     |
| 03:00      | Yeah.                                                                                                   |
| 03:01      | And there's a bunch of different software platforms.                                                    |
| 03:03      | I think overall we're in pretty good shape, but at the same time, we have discussion points.            |
| 03:08      | So I think let's just get started with the Mac.                                                         |
| 03:11      | Yeah.                                                                                                   |
| 03:12      | I mean, it's one of those things where you would think that the Mac doesn't really have                 |
| 03:16      | anywhere to go, right?                                                                                  |
| 03:17      | The Mac is done, basically.                                                                             |
| 03:19      | It's been, you know, why is it done?                                                                    |
| 03:21      | I don't mean like that's, you know, it's finished.                                                      |
| 03:24      | It doesn't exist anymore.                                                                               |
| 03:25      | I mean, like it's basically finished in the sense that you don't really need to add a                   |
| 03:29      | lot to it.                                                                                              |
| 03:31      | But over the last year, we've seen, you know, [[Hazel]] 5, there's been like 78,000 new versions            |
| 03:38      | of [[Drafts]] because Greg Parris is just an animal.                                                        |
| 03:40      | I mean, he says he's a tortoise, but that man is definitely hare because he's just constantly           |
| 03:45      | producing new releases.                                                                                 |
| 03:47      | And you know, there's been, you know, new apps coming out with [[AppleScript]] support.                    |
| 03:53      | Some apps have just increased their support, lots of new apps with shortcut support.                    |
| 03:57      | And, you know, there's just a whole bunch of, you know, new stuff that's come out.                      |
| 04:02      | And it's really exciting to see all of those new features.                                              |
| 04:06      | Yeah.                                                                                                   |
| 04:07      | So let's get a little, let's just break it down.                                                        |
| 04:10      | Let's start with [[AppleScript]].                                                                          |
| 04:12      | I think the news about [[AppleScript]] is that it's still here.                                            |
| 04:15      | I think that for a while, people were predicting the untimely end of [[AppleScript]] saying, you           |
| 04:21      | know, they're going to move on, you know, Apple Silicon, you know, 64-bit, there's been                 |
| 04:27      | all these reasons why [[AppleScript]] was going to get yanked out of Mac OS.                               |
| 04:32      | And I have never believed it.                                                                           |
| 04:34      | I will be shocked if [[AppleScript]] disappears for a couple of reasons.                                   |
| 04:37      | The first is, I think it's so firmly embedded that it would be too much work to try to remove           |
| 04:42      | it.                                                                                                     |
| 04:43      | Like, I think that, you know, why spend the money, it's not breaking anything.                          |
| 04:47      | It's just something out there that a small percentage of users use.                                     |
| 04:52      | And the other point would be that even though it's a small percentage, it's an important                |
| 04:55      | percentage.                                                                                             |
| 04:56      | Like, one of the most important companies that relies on [[AppleScript]] is Apple, you know.               |
| 05:02      | I mean, a lot of the stuff they use in the back end to keep all the Macs running at                     |
| 05:07      | Cupertino use [[AppleScript]].                                                                             |
| 05:09      | So why on earth would they pull that out?                                                               |
| 05:10      | So I just think that [[AppleScript]] is healthy and still here.                                            |
| 05:15      | We are not seeing a lot of improvements in terms of usage.                                              |
| 05:18      | No, we're not seeing a huge amount of improvement in terms of usage or, you know, increase necessarily. |
| 05:25      | But at the same time, I'm not seeing apps just being like, yeah, by the way, we just,                   |
| 05:30      | like, we just removed it.                                                                               |
| 05:31      | Like, we just didn't really think it was worth it.                                                      |
| 05:35      | Because the [[AppleScript]] system is so firmly embedded, you know, the Apple events are there             |
| 05:40      | and they work.                                                                                          |
| 05:41      | You know, Omni-Focus, Omni-Group with Omni-Focus 4, they didn't drop [[AppleScript]] support.              |
| 05:47      | I think it would have been considerably more work for them to drop [[AppleScript]] support                 |
| 05:50      | than it would be to continue it and maintain it.                                                        |
| 05:52      | So, you know, it's still there and it's still being added to new applications or at least               |
| 05:57      | new versions of applications.                                                                           |
| 05:58      | But it's very firmly something that I'm still using on a regular basis because it makes                 |
| 06:04      | my life easier.                                                                                         |
| 06:05      | Well, I mean, a lot of times it's the best tool for the job.                                            |
| 06:09      | When you're trying to, like, make two apps share data on a Mac, I still find uses for                   |
| 06:14      | it.                                                                                                     |
| 06:15      | In fact, one of the things, and we're going to talk about AI later, but [[AppleScript]] has                |
| 06:19      | never been so easy to write because AI is doing a decent job of making the first draft                  |
| 06:24      | of it for you.                                                                                          |
| 06:25      | So if you're trying to come up with something new and you can't find an example on the web              |
| 06:29      | and you describe it to ChadGBD, it will put something that if it doesn't solve the problem,             |
| 06:35      | it gets you started.                                                                                    |
| 06:36      | Yeah.                                                                                                   |
| 06:37      | And, you know, that's always been the beauty of [[AppleScript]] that, you know, it doesn't necessarily     |
| 06:42      | look like a regular programming language.                                                               |
| 06:43      | It's a lot friendlier.                                                                                  |
| 06:45      | But I find it is just one of those things that, you know, I'll reach for.                               |
| 06:49      | I use iTerm as my terminal on the Mac and it has [[AppleScript]] support.                                  |
| 06:54      | Now, it does have its own native Python support and so on, which is, you know, much more powerful       |
| 07:00      | and things like that.                                                                                   |
| 07:01      | But it took me about five minutes to write an [[AppleScript]] script that will open up a                   |
| 07:09      | new iTerm window with five different profiles, well, five different panes in it with a couple           |
| 07:16      | of different profiles, connecting to different servers, writing different scripts, stuff                |
| 07:19      | like that, which is what I use every single morning for work.                                           |
| 07:21      | And that only took me a couple of minutes.                                                              |
| 07:23      | I'm sure I can figure out how to do it using their native Python scripting, but why would               |
| 07:27      | I when the [[AppleScript]] just works?                                                                     |
| 07:30      | So yeah, it's, you know, one of those things.                                                           |
| 07:33      | Also fun fact, by the way, I recently, because I like to live my life on the edge, I run                |
| 07:38      | the beta version of iTerm.                                                                              |
| 07:39      | So I was running the beta version of iTerm and I ran my script one day and it crashed.                  |
| 07:43      | It crashed iTerm and I was like, whoa, that's weird.                                                    |
| 07:45      | And then I tried doing the steps manually.                                                              |
| 07:48      | They also crashed.                                                                                      |
| 07:49      | So I reported it as a bug and it's been fixed.                                                          |
| 07:52      | Like, you know, this is, this is the beauty of [[AppleScript]], right?                                     |
| 07:55      | It's using, you know, native parts of the application and just what the application would do by itself. |
| 08:01      | It's not, you know, an extra layer with the top where that's the thing that's going to                  |
| 08:07      | be broken.                                                                                              |
| 08:08      | In some cases, it could be the bit that's broken, but usually it's not going to be the                  |
| 08:11      | [[AppleScript]].                                                                                           |
| 08:12      | It's going to be the underlying thing if there's a problem, which is just one of the great              |
| 08:14      | things about it.                                                                                        |
| 08:15      | Yeah.                                                                                                   |
| 08:16      | And one of the things I love about [[AppleScript]] is when a developer like [[Moom]] or some of                |
| 08:20      | the display apps will write like a one line [[AppleScript]] support where, you know, there's               |
| 08:25      | some feature they want to add that's not really easier, convenient, but by adding a simple              |
| 08:31      | [[AppleScript]] support that it gives users a little bit more power without a lot of investment.           |
| 08:36      | And so that stuff continues.                                                                            |
| 08:38      | I don't think Apple is going to continue to like try and push the, the, the ball forward                |
| 08:44      | on [[AppleScript]] support.                                                                                |
| 08:45      | I mean, when Sal was there, like it got added to [[Swift]], not [[Swift]], it got added to the                  |
| 08:51      | [[Xcode]] years ago.                                                                                        |
| 08:54      | And I just don't know that it has an advocate like Sal was there now to do stuff like that.             |
| 08:59      | So I don't see it getting a bunch of new support, but I don't think it's going away.                    |
| 09:04      | And when people say, well, should I learn [[AppleScript]]?                                                 |
| 09:07      | I'm like, yeah, you should.                                                                             |
| 09:08      | But honestly, I think the best way to learn [[AppleScript]] now is just to cobble together                 |
| 09:12      | what you need when you need it.                                                                         |
| 09:14      | You don't have to become an expert at it.                                                               |
| 09:17      | You just have to know where to look to find answers when you need them.                                 |
| 09:20      | And it still remains a very powerful automation tool.                                                   |
| 09:23      | Yes.                                                                                                    |
| 09:24      | And I think that's, that's the thing with all of these things, you know, you can't                      |
| 09:27      | absolutely sit down and learn to become a guru for any of these tools or programming                    |
| 09:34      | languages or whatever it is.                                                                            |
| 09:36      | But with all of these things, you know, the, the real, you know, automation hack as it is               |
| 09:42      | is just to solve the problem that you've got and figure out more stuff as you go.                       |
| 09:46      | Yes.                                                                                                    |
| 09:47      | By all means, if you've got, you know, an hour of free time, like sitting down and reading              |
| 09:51      | the [[Keyboard Maestro]] manual or scanning the [[Hazel]] forums or something like that, that                   |
| 09:55      | could be a really good use of your time and you could learn how to do something that you                |
| 09:59      | thought was impossible or it could be just something that sparks an idea later down the                 |
| 10:04      | line.                                                                                                   |
| 10:05      | But as it is, you know, I think that it really is just one of those things with automation              |
| 10:11      | now especially, um, and especially in the Mac where so many people have already solved                  |
| 10:15      | it, that you can just, you know, copy and paste together four different bits of automations             |
| 10:19      | from other people.                                                                                      |
| 10:20      | And it's not necessarily going to be perfect.                                                           |
| 10:22      | It might be a little bit, you know, like it's got duct tape around the edges instead of                 |
| 10:26      | a nice smooth polish.                                                                                   |
| 10:28      | But if it works, that's fine because you can always come back and polish it later.                      |
| 10:32      | And that's kind of the fun bit.                                                                         |
| 10:33      | You know, once, once you've got something that works, then you, you're over that hump                   |
| 10:37      | of dissatisfaction of, oh, why isn't this working?                                                      |
| 10:39      | Like can't I just make this thing happen?                                                               |
| 10:42      | And then bam, suddenly, you know, you've got emails that are being automatically deleted                |
| 10:46      | based on scripts that are running at particular times and the fact that that email is read              |
| 10:49      | and was received over 24 hours ago and stuff like that or whatever it is that makes you                 |
| 10:53      | happy.                                                                                                  |
| 10:54      | Either way, long live [[AppleScript]].                                                                     |
| 10:57      | Let's move on to [[Keyboard Maestro]].                                                                      |
| 10:59      | Keyboard maestro had a big year last year with the release of version 11 and we did                     |
| 11:03      | a whole show on it.                                                                                     |
| 11:06      | But it also, I think, I think the outlook for that is even more rosy, right?                            |
| 11:11      | Because [[Keyboard Maestro]] is an active development.                                                      |
| 11:14      | Peter seems to always be finding new things to add to it.                                               |
| 11:18      | And the, I continue to hear from people that get, pick up the [[Keyboard Maestro]] field guide              |
| 11:23      | for, to solve like one little problem and then suddenly they're using [[Keyboard Maestro]]                  |
| 11:28      | for everything.                                                                                         |
| 11:29      | And that just thrills me to hear that.                                                                  |
| 11:32      | Yes.                                                                                                    |
| 11:33      | Yeah.                                                                                                   |
| 11:34      | And I keep seeing people as well, the Relay FM discord community as a side note folks,                 |
| 11:39      | if you are a Relay FM member of the Automators, Max podcast, for example, or one of the others,        |
| 11:46      | it's okay.                                                                                              |
| 11:47      | There, there's a whole bunch of really great nerds there and every so often I'll just see               |
| 11:51      | somebody, you know, posting in tech or systems and themes going, hey, you know, like this               |
| 11:55      | is something that I've put together and I started with [[Keyboard Maestro]] and look how                    |
| 11:58      | amazing this is.                                                                                        |
| 11:59      | And every time I see it, it just gives me that sense of satisfaction of like, this is                   |
| 12:02      | a really powerful nerdy tool.                                                                           |
| 12:05      | And look at that.                                                                                       |
| 12:06      | People are just nailing it.                                                                             |
| 12:07      | It's, it's so good.                                                                                     |
| 12:08      | Yeah.                                                                                                   |
| 12:09      | And it's much more accessible than AppleScript because it's, it's, you know, block style               |
| 12:12      | automation.                                                                                             |
| 12:13      | You just drag and drop blocks, although it's the most complex version of block style automation,        |
| 12:19      | but it's also one of the most powerful because of that.                                                 |
| 12:22      | So the [[Keyboard Maestro]] is doing great.                                                                 |
| 12:25      | One of the things that I, the, the big trends that I see with these apps now is interoperability        |
| 12:32      | and I feel like that really got a shot in the arm with shortcuts for Mac.                               |
| 12:37      | But just in general, it feels to me like more than ever, the developers of these various                |
| 12:43      | apps have kind of taken an open arms approach to other automation tools.                                |
| 12:49      | And [[Keyboard Maestro]] is kind of the poster child of that in [[Keyboard Maestro]].                           |
| 12:53      | You can run shortcuts or I mean, you do virtually anything with [[Keyboard Maestro]] and other automation   |
| 12:58      | tools.                                                                                                  |
| 12:59      | Yes.                                                                                                    |
| 13:00      | Yeah, exactly.                                                                                          |
| 13:01      | And I think it's one of those things as well where it's so nice to see, you know, apps,                 |
| 13:06      | you know, yes, I'm sure the developers are competitive as well, but also you'll just                    |
| 13:11      | see, you know, like one developer reaching out to another going, hey, like this thing                   |
| 13:16      | that you've just done is really cool.                                                                   |
| 13:18      | Or hey, that's amazing.                                                                                 |
| 13:19      | I've just added a thing that means that now that that can be running from here or something.            |
| 13:24      | And the way that everything does just work together and have ways to work together.                     |
| 13:28      | This is one of the reasons, as I know, by the way, why I really love Bunch, because every               |
| 13:32      | time I call on the Bunch documentation site, I stumble across a new way of automating something         |
| 13:39      | that I don't necessarily end up using in Bunch.                                                         |
| 13:41      | But because, you know, Brett is so open to you should be using all the great tools and,                 |
| 13:47      | you know, whatever tool works best for you is the tool that you should have.                            |
| 13:51      | It means that I'm just constantly finding things like that's where I got the Apple                      |
| 13:53      | Script or a [[Moom]] stuff, and, you know, then I come up with ideas for, oh wait, but I could              |
| 13:58      | open a draft and have it tagged with this automatically because I'm running this and                    |
| 14:02      | so on.                                                                                                  |
| 14:03      | And I just, I love that interaction that we have within the automation community, especially            |
| 14:09      | on Mac and iOS, you know, the web automation community is out there and it exists and,                  |
| 14:13      | you know, they're friendly, fairly friendly folks, but I really feel like especially the                |
| 14:17      | indie dev community on Mac OS and iOS, they are just such awesome, lovely nerds.                        |
| 14:23      | It's great.                                                                                             |
| 14:24      | Yeah, so what is the recent big additions to Bunch and where is it going in your opinion?               |
| 14:32      | So I'm not sure exactly what big additions there have been recently.                                    |
| 14:37      | It's one of those things where I'm just constantly, you know, finding cool little new things in         |
| 14:43      | there that I didn't know existed.                                                                       |
| 14:45      | And that doesn't mean to say that, you know, they weren't there for a while, but yeah,                  |
| 14:50      | I've been toying with integrating Bunch and Marked recently, that's for sure.                           |
| 14:56      | And yeah, I am on the Bunch beta and I know Brett was doing a bunch of work over the holidays           |
| 15:02      | recently, you know, updating some of the requests that people had of like, I'm not sure how             |
| 15:06      | to do this, what should I be doing and so on.                                                           |
| 15:09      | So yeah, I will have to double check exactly what it is that has been happening with Bunch              |
| 15:16      | the most recently, but I know that I did just install a beta update right before the podcast            |
| 15:21      | so I should probably actually read the notes this is, we're done and then I can tell folks.             |
| 15:25      | But oh, I've just found them, he's added support for Arc Browser and yeah, there's been some            |
| 15:32      | other stuff as well, you know, some little fixes and so on.                                             |
| 15:36      | So yeah, there's a proper changelog so I can put a link to that in the show notes for folks             |
| 15:39      | if people are interested.                                                                               |
| 15:41      | So [[Bunch]] is for people who don't know, it's made by our favourite nerd, [[Brett Terpstra]].                  |
| 15:47      | It's like a plain text kind of setup where you can open apps and websites and close apps                |
| 15:54      | and do a whole bunch more, I'm not really doing it justice.                                             |
| 15:58      | And this one has been a white whale for me, I always like chase it but never quite landed               |
| 16:02      | and the problem is that I've got those setups all built very with very sickening detail                 |
| 16:10      | and [[Keyboard Maestro]].                                                                                   |
| 16:11      | So it's like I've already got the solution for this stuff and normally I would tell people              |
| 16:17      | if you've got a solution that works, don't bother with anything else, you're good.                      |
| 16:21      | But I make a show called The Automators and we are planning to do a show this year on                   |
| 16:26      | setups so I need to get familiar with Bunch.                                                            |
| 16:28      | I think this is like in the next few months, I'm going to take like a week and just really              |
| 16:33      | dive deep and try and build everything in Bunch for my setups because I'm looking forward               |
| 16:38      | to recording that show and I think I need to be more familiar with it.                                  |
| 16:42      | Yeah, yeah, like Brett's just been doing loads of little things like adding.                            |
| 16:46      | So for ages, you could run shortcuts using like just command line scripting, which you                  |
| 16:51      | know, made perfect sense because you can just run a command line script inside of a bunch               |
| 16:54      | very easily.                                                                                            |
| 16:56      | And then we're added like direct shortcut support and now there's the ability to add                    |
| 17:00      | input and accept output from shortcuts and even like new lines are supported in shortcut                |
| 17:05      | inputs and so on, which as you've got, you know, the ability to have popups and so on                   |
| 17:10      | like asking you like, you know, yes or no or one of these three things and so on can                    |
| 17:14      | be really useful.                                                                                       |
| 17:15      | And yeah, there's also Chrome profiles, which I don't use Chrome, but I like the idea of                |
| 17:20      | using different Chrome profiles and don't get me wrong, I love [[Safari]], but the fact                     |
| 17:25      | that it's really difficult to automate [[Safari]], which is quite sad, like there's some bits               |
| 17:30      | of [[Safari]] that are super easy to automate, which I love.                                                |
| 17:33      | And then other bits of [[Safari]] are just so difficult to automate, like, you know, the                    |
| 17:37      | new stuff like, you know, targeting the profiles and the tab groups and so on, like you can             |
| 17:42      | do some of it with shortcuts, but not all of it.                                                        |
| 17:46      | That's something that I would really like to see an improvement for.                                    |
| 17:49      | So there you go, Apple, have some homework, [[Safari]] team, you know, your WebKit stuff's                  |
| 17:53      | great.                                                                                                  |
| 17:54      | Just more shortcuts, more shortcuts and automation, give everyone some AppleScript support and         |
| 17:58      | Apple events and then everybody will just go nuts over it.                                              |
| 18:01      | Yeah, it's a shame we didn't get that on mobile.                                                        |
| 18:05      | [[Hazel]], that's another automation tool.                                                                  |
| 18:08      | It's file automation.                                                                                   |
| 18:09      | That's at least the way I view it as like the king of the hill for file based automation.               |
| 18:14      | It does everything.                                                                                     |
| 18:16      | They're currently shipping version five.                                                                |
| 18:18      | It does work with the other apps though, like one of the things you can do if a file gets               |
| 18:23      | triggered by [[Hazel]] is run a shortcut or, you know, trigger an AppleScript, which gives                 |
| 18:28      | you basically the ability to do anything.                                                               |
| 18:31      | And that app just continues to rock.                                                                    |
| 18:33      | They made it an independent app with version five, it used to be in the system preferences.             |
| 18:37      | I think that kind of the freedom of [[Hazel]] has been well, it seems like it's been more                   |
| 18:44      | stable for me since they made that move.                                                                |
| 18:47      | Yeah.                                                                                                   |
| 18:48      | I mean, I never felt that it was unstable before, but I do feel like it is just, you                    |
| 18:53      | know, it's nice now that it's its own application.                                                      |
| 18:56      | Things have gone away, especially with the system settings redesign from system preferences,            |
| 19:01      | like the things have gone away from just being installed in system settings to exist as a               |
| 19:06      | thing there.                                                                                            |
| 19:08      | And I feel like this is a lot more friendly for folks who are not used to like, this is                 |
| 19:12      | just a thing in your system settings now.                                                               |
| 19:14      | There you go.                                                                                           |
| 19:15      | That's where it lives.                                                                                  |
| 19:17      | And yeah, it's got detachable editors, which is something that I really, really love because            |
| 19:23      | a number of times that I've been like, well, I have this thing and I basically want to                  |
| 19:27      | copy it, but I don't actually want to just duplicate it because I want to step through                  |
| 19:31      | and evaluate every line by line, you know, and go through it, so detachable editors on                  |
| 19:36      | that.                                                                                                   |
| 19:37      | Honestly, just it seems really like silly that I'm so excited about having multiple windows,            |
| 19:43      | but that's something you can do now that you can do before because it's not stuck in your               |
| 19:46      | system settings.                                                                                        |
| 19:47      | So yeah, it's really great.                                                                             |
| 19:50      | I'm loving it.                                                                                          |
| 19:51      | Guess what, I'm a nerd.                                                                                 |
| 19:54      | Nobody's surprised there.                                                                               |
| 19:55      | I hear nobody fainting or gasping with shock, but yeah, there's just some very nice things              |
| 19:59      | there.                                                                                                  |
| 20:00      | And I think if we're going to talk about [[Hazel]], we should mention briefly at least DEVONthink,          |
| 20:05      | which is a database app, but their internal automation is right there with [[Hazel]] in terms               |
| 20:11      | of file automation.                                                                                     |
| 20:12      | It's super powerful.                                                                                    |
| 20:14      | And if you are working with DEVONthink, it was another good year.                                       |
| 20:18      | I mean, they made a bunch of advancements.                                                              |
| 20:20      | They released a bunch of updates.                                                                       |
| 20:22      | Their mobile version is getting better, and you really do have an abundance of riches                   |
| 20:27      | with file automation now between [[Hazel]] and DEVONthink.                                                  |
| 20:31      | I love using DEVONthink for things.                                                                     |
| 20:33      | And honestly, I use [[Hazel]] and DEVONthink because I'll use [[Hazel]] to like grab stuff and rename           |
| 20:39      | it and shove it in a folder, which then DEVONthink's like going, ooh, new files for me.                 |
| 20:45      | Thank you.                                                                                              |
| 20:46      | And then it just slurps it up, and then it runs its own magic over those things, which                  |
| 20:52      | I've set up.                                                                                            |
| 20:53      | And I absolutely love it.                                                                               |
| 20:55      | If I'm looking for a paiselip or a financial document or something, it's a DEVONthink.                  |
| 20:59      | If I'm looking for a manual, it's a DEVONthink.                                                         |
| 21:01      | I don't even need to remember exactly what the name of the thing is because I've just                   |
| 21:06      | got so good at shoving all of the extra words that I might need in there in a comments field            |
| 21:11      | or other tailored fields.                                                                               |
| 21:14      | It's fabulous.                                                                                          |
| 21:15      | This episode of Automators is brought to you by LinkedIn Jobs.                                          |
| 21:21      | At the start of the new year, every small business owner is asking themselves the same                  |
| 21:24      | question.                                                                                               |
| 21:25      | What's the one move I can make that'll take my business to the next level in 2024?                      |
| 21:30      | LinkedIn Jobs knows that your success all depends on the team you surround yourself with.               |
| 21:35      | That's why LinkedIn Jobs has created the tools to help you find the right professionals                 |
| 21:38      | for your team, faster and for free.                                                                     |
| 21:41      | LinkedIn isn't just another job board.                                                                  |
| 21:43      | It's a vast network of more than a billion professionals, which makes it the best place                 |
| 21:47      | to hire.                                                                                                |
| 21:48      | Hiring is easy when you have that many quality candidates.                                              |
| 21:51      | So easy in fact that 86% of small businesses get a qualified candidate within 24 hours.                 |
| 21:57      | When I was asked looking for a job or the first things I did was update my LinkedIn profile             |
| 22:01      | and even though I'm thrilled with where I work, the fact that I get people contacting                   |
| 22:05      | me on a regular basis means that I know that LinkedIn works for helping people find a great             |
| 22:11      | job because that's how I found my job.                                                                  |
| 22:14      | LinkedIn also knows that small businesses are wearing so many hats and might not have                   |
| 22:17      | the time or resources to hire.                                                                          |
| 22:19      | So they do you a favor by making the process intuitive, quick and easy.                                 |
| 22:23      | That's why small businesses rate LinkedIn Jobs number one in delivering quality hires                   |
| 22:27      | versus leading competitors.                                                                             |
| 22:29      | Post your job for free at linkedin.com/automators.                                                |
| 22:34      | That's linkedin.com/automators to post your job for free.                                         |
| 22:38      | Customers and conditions apply.                                                                         |
| 22:41      | Okay, so staying on the Mac, let's talk a bit about text automation and where that stands.              |
| 22:48      | [[Drafts]] is still the king.                                                                               |
| 22:51      | Yeah, like there is not a day that doesn't go by where I don't create like 20 or 30                     |
| 22:56      | drafts in [[Drafts]].                                                                                       |
| 22:58      | And like I don't even know how I do it or why I do it like that.                                        |
| 23:03      | You know, like it just happens.                                                                         |
| 23:06      | But it's great.                                                                                         |
| 23:07      | And [[Drafts]] has just been adding a whole bunch of stuff as well.                                         |
| 23:10      | They did a little 2023 year on review where they've got, you know, some of the big features             |
| 23:15      | from versions 36 to 42, yes, life, the universe and everything.                                         |
| 23:20      | And yeah, there's there's all sorts of stuff in there like nested tags.                                 |
| 23:24      | Like people have been asking for that for a while.                                                      |
| 23:28      | And you know, now nested tags are something that were added in version 14.                              |
| 23:33      | There was a whole air table integration, which David, you and I really need to talk about               |
| 23:37      | that at some point because I am really, really loving that.                                             |
| 23:41      | That's so good.                                                                                         |
| 23:42      | There's open AI, [[ChatGPT]] integration, mail drop, which is sort of an add on application                |
| 23:48      | for Mac for [[Drafts]].                                                                                     |
| 23:51      | Now like the supports sending emails to your [[Drafts]] library because they added mail drop                |
| 23:56      | as a feature.                                                                                           |
| 23:57      | There's just so much good stuff there.                                                                  |
| 24:00      | And, you know, again, it's an app where I'm constantly finding new features.                            |
| 24:05      | I swear I read all the release notes and everything.                                                    |
| 24:08      | And every time I read the release notes, I'm like, oh, yeah, like hiding actions from search.           |
| 24:12      | Yes, I need this because there are some actions that I basically only want in like certain              |
| 24:16      | views and I never want to search for them.                                                              |
| 24:18      | And then I just forget about them, I guess.                                                             |
| 24:21      | And yeah, then I come back and discover that there's another new feature that I didn't                  |
| 24:27      | know about because I kind of forgot about it.                                                           |
| 24:29      | Well, we're talking about [[Drafts]].                                                                       |
| 24:31      | I should probably also mention Tally, which is Greg Pierce's other app, or one of his                   |
| 24:35      | other apps.                                                                                             |
| 24:36      | And it's just for, it's basically for tallying things, so logging, you know, this number                |
| 24:41      | of things happened or keeping score or similar.                                                         |
| 24:45      | And that's had a whole bunch of updates at version five.                                                |
| 24:49      | And I am really loving that app as well.                                                                |
| 24:52      | Well, I mean, on the subject of [[Drafts]] and text, I feel like it's so it's kind of a relief              |
| 24:58      | just knowing anytime I want to write, I open the [[Drafts]] app and I start typing or talking.              |
| 25:02      | And, and it really does the app, you know, if you're interested into automation, you're                 |
| 25:07      | listening to the show, the egg gives you an easy exit off ramp with your text, like no                  |
| 25:12      | matter what you want to do with it, you push a button and it does it for you.                           |
| 25:16      | And there's really nothing like that.                                                                   |
| 25:19      | Another one that's worth mentioned to me is Grammarly, you know, it just, it's slowly                   |
| 25:24      | dawned on me that this is a text tool that I use many times a day, you know, I pay for                  |
| 25:30      | a subscription to Grammarly.                                                                            |
| 25:31      | And over the last year, they've done a better job with their [[Safari]] plugin.                             |
| 25:36      | So now you don't have to necessarily grab your Grammarly text and go to their website                   |
| 25:41      | to get the full, you know, edit on it.                                                                  |
| 25:43      | You can do it in most web text editors.                                                                 |
| 25:47      | And I just, you know, you know, this is to me one of the best examples of AI in motion.                 |
| 25:52      | It's just gotten much better at its recommendations over the last few years.                            |
| 25:56      | And I think that's AI based.                                                                            |
| 25:58      | And it makes your writing better.                                                                       |
| 26:00      | It's just, I think any job you have where you write, you should have a tool like this.                  |
| 26:06      | Yeah, and I think that's one of the things, you know, there are alternatives out there                  |
| 26:10      | to Grammarly.                                                                                           |
| 26:11      | I do also use Grammarly just, you know, it's great for a whole bunch of things.                         |
| 26:17      | And I do particularly like the fact that they've added specific things like tone detection              |
| 26:22      | and paraphrasing tools and things like that.                                                            |
| 26:24      | So if I've got some texts that like, I know this is what I need to say, but it doesn't                  |
| 26:28      | sound right.                                                                                            |
| 26:29      | I can just throw it in the paraphrasing tool and go from there.                                         |
| 26:32      | And you know, they're adding things like brand tones and stuff like that.                               |
| 26:35      | And they've got a whole section on their sub out responsible AI use and so on.                          |
| 26:40      | But yeah, for me, it is just one of those things where I, you know, I end up reaching                   |
| 26:47      | for it, you know, more often than not.                                                                  |
| 26:51      | And I have to say it does work pretty well for me with, you know, the things that I need                |
| 26:56      | it for.                                                                                                 |
| 26:57      | I don't use it, you know, there's a Grammarly keyboard for iOS.                                         |
| 26:59      | I'm not using that as my daily driver keyboard.                                                         |
| 27:02      | But if I write a longer bit of text, then it is something that I'll switch to and just                  |
| 27:08      | be like, cool, like, where did iOS swap two words for me that now no longer makes sense                 |
| 27:15      | that I can't see because I'm now blind to this text because I've been staring at it                     |
| 27:17      | for three hours and so on.                                                                              |
| 27:20      | So yeah, that's, it's great for that.                                                                   |
| 27:23      | There's a challenge for Grammarly because as AI becomes more prevalent, you know, engines               |
| 27:28      | like [[ChatGPT]] can do grammar check for you.                                                             |
| 27:30      | You can just ask it and it will do it for you.                                                          |
| 27:33      | And so, so the question is, why do I pay for a Grammar checker like Grammarly when I could              |
| 27:39      | get a good AI engine?                                                                                   |
| 27:42      | And that would just be one of many things it does, but what Grammarly does is they try                  |
| 27:45      | to go to the next level with it.                                                                        |
| 27:46      | Like you said, tone detection, just they give you a much better implementation.                         |
| 27:51      | And I think, I do think like the web and implementation this year got really noticeably better.         |
| 27:56      | So it just, it's a convenience and probably more powerful grammar checker.                              |
| 28:02      | And that's why I pay for it.                                                                            |
| 28:04      | But, but, you know, maybe in a couple of years, we will be in a point where like one AI does            |
| 28:08      | all of this for us and we don't need the separate services.                                             |
| 28:11      | But at least as we sit here right now, I think Grammarly is kind of killing it if you're                |
| 28:15      | willing to pay for it.                                                                                  |
| 28:17      | Yeah.                                                                                                   |
| 28:18      | Yeah.                                                                                                   |
| 28:19      | And honestly, like, you know, the free version is pretty great as well.                                 |
| 28:20      | I have to say, you know, it's, you know, you should, if you do a lot of text writing,                   |
| 28:26      | it's worth trying it out for things like that.                                                          |
| 28:29      | Just to, you know, give it a go and see, you know, see what you like and what you don't                 |
| 28:34      | like about it.                                                                                          |
| 28:35      | And you can always, you know, decide that actually, no, I don't like that.                              |
| 28:39      | And I will continue to do things the way I did before, but I always think that trying                   |
| 28:43      | these things is such a good way to, you know, encourage yourself to find new automation                 |
| 28:47      | solutions for problems.                                                                                 |
| 28:48      | And yes, using something like Grammarly is an automation solution because otherwise you'd               |
| 28:52      | have to sit there and perforate it for the 56th time and then be really annoyed that                    |
| 28:56      | after you hit send and after your delayed send window is up, that's when you spot that                  |
| 29:02      | you, you know, made a grammar mistake or something or there's a really obvious typo where you           |
| 29:07      | called your boss babe or something like that, which, you know, if you work in the right                 |
| 29:11      | environment, you can play that off as a joke, other environments, that might be a bit tricky.           |
| 29:16      | So yeah, it's, you know, it's, it's nice to experiment with these things to give you                    |
| 29:21      | ideas at least.                                                                                         |
| 29:23      | And you're trying out a new text automation app, right?                                                 |
| 29:26      | Yeah.                                                                                                   |
| 29:27      | So I'm trying out a great little app called Snippity.                                                   |
| 29:30      | And it's available on the Mac App Store, it's also available on iOS, where it functions                 |
| 29:35      | as a keyboard, which has folders for all of your snippets and so on in.                                 |
| 29:40      | And I just really like this, so it's got customisable placeholders, it's got syntax highlighting,       |
| 29:46      | if you like code snippets, because this is one of the things that I was struggling with,                |
| 29:49      | I need code snippets for things, but I also need to be able to like see what it is that                 |
| 29:55      | I'm like doing in when I'm editing this, it's got scripting support, of course.                         |
| 30:02      | And yeah, there's just a whole bunch of stuff going on there.                                           |
| 30:07      | So it's, it's, it's, you know, kind of like, how do I put this, because I do still use                  |
| 30:14      | TextExpander.                                                                                           |
| 30:15      | So I can't say it's like if TextExpander and Dash had a baby, but it kind of is in some                 |
| 30:20      | ways.                                                                                                   |
| 30:21      | Because yeah, it's got so many nice little things, it's got fuzzy search and stuff.                     |
| 30:27      | Yeah, I'm just loving this.                                                                             |
| 30:30      | It's really useful for all sorts of things.                                                             |
| 30:33      | I've got little snippets of code that I throw in there, I've got bigger snippets of code                |
| 30:36      | that I throw in there, I've got email templates that are in there, and meeting templates,               |
| 30:42      | all sorts.                                                                                              |
| 30:43      | And yeah, the script support is really nice too.                                                        |
| 30:46      | So definitely worth considering if you are a nerd and want to try some really cool text expansion.       |
| 30:53      | And it has the concept of groups, by the way, as well.                                                  |
| 30:56      | So you can group your snippets together.                                                                |
| 30:57      | It's great.                                                                                             |
| 30:58      | How is the mobile implementation?                                                                       |
| 31:02      | I find it's really good.                                                                                |
| 31:03      | So I say it's really good, but what I use it for is basically I'll switch to the keyboard,              |
| 31:09      | I'll insert a snippet, and then I just change back to my regular keyboard and type whatever             |
| 31:14      | it is I need to type.                                                                                   |
| 31:15      | I'm keeping it really, really simple on iOS.                                                            |
| 31:18      | I didn't want to make it too complicated.                                                               |
| 31:21      | But yeah, it works.                                                                                     |
| 31:24      | It's really difficult to fold it for just being a very simple, I switch to the keyboard,                |
| 31:29      | I select the block of text, I insert the block of text, and I am done, I think.                         |
| 31:33      | It does also have an extension so that you can create snippets from other apps and stuff                |
| 31:38      | like that as well, which, again, could be very handy.                                                   |
| 31:42      | And yeah, but I just try and keep it very simple on iOS.                                                |
| 31:48      | I've tried, my biggest one with their pretty keyboards is like the auto-cry, never cry,                 |
| 31:52      | it works the same way.                                                                                  |
| 31:54      | I find like the touch targets just aren't quite forgiving enough and things like that.                  |
| 31:58      | So I don't end up liking using any third-party on-screen keyboards long-term, especially                |
| 32:03      | on my iPhone, but switching to something and being like, here's a block of text, next,                  |
| 32:10      | that works really well for me.                                                                          |
| 32:12      | So yeah, that's what I'm doing with Snipety on iOS, and it's working.                                   |
| 32:15      | And while we're mentioning text expansion, you said text expansion, that's another app                  |
| 32:20      | that's just, it's still, you know, it's just remarkable how big it's gotten over the years              |
| 32:24      | and, you know, multi-platform, a lot of companies are using it.                                         |
| 32:28      | I spoke with someone at a MacSparky event, who they're using it at a company with a thousand           |
| 32:33      | people, and it's like, now it can do that.                                                              |
| 32:36      | And I remember when it was a small app, but it really does a lot now, and that's good                   |
| 32:42      | news for automation.                                                                                    |
| 32:44      | All right, we have been ignoring the big app, the big automation app from Apple throughout              |
| 32:51      | this segment, but it's time to talk about shortcuts on the Mac.                                         |
| 32:54      | It's been a few years.                                                                                  |
| 32:56      | I would say it had a bit of a rough launch, you know, but it got better quickly.                        |
| 33:02      | And last year was, I think, the first year where it was like solid the full year.                       |
| 33:08      | Where are we with shortcuts on the Mac, and where do you see it going?                                  |
| 33:12      | Well, I just want to start with, in iOS 16, Mac OS 13, and Watch OS 9, the shortcuts team               |
| 33:22      | did something really cool.                                                                              |
| 33:24      | They did eight What's New in Shortcuts for iOS 16, iPad OS 16, Mac OS 13, Watch OS 9.                   |
| 33:30      | And every single update, there would be a new post there, or a prefix to the page.                      |
| 33:37      | That would be better.                                                                                   |
| 33:38      | We're putting it with being like, okay, here's what's new, here's what's updated, and so                |
| 33:41      | on and so forth.                                                                                        |
| 33:43      | Because obviously, while we're in beta, nothing's fixed for sure, so they don't post about              |
| 33:48      | it then.                                                                                                |
| 33:49      | There are still plenty of people going around the internet and collecting a list of things.             |
| 33:57      | But the fact that then, when it releases, there is an actual official list of here's                    |
| 34:03      | what's new, here's what's changed, here's what's fixed, and so on, is so good.                          |
| 34:08      | And they've done it again with iOS 17, and I love it.                                                   |
| 34:11      | It works.                                                                                               |
| 34:13      | It makes my life easier.                                                                                |
| 34:14      | The combined images action now correctly aligns images when output on Mac OS.                           |
| 34:19      | This is one of those things where if you get into the habit of being like, oh, this thing               |
| 34:23      | doesn't work, so I'm not going to use it, then you won't ever know that it's fixed unless               |
| 34:29      | something tells you.                                                                                    |
| 34:30      | So the fact that this is here and tells you that things are fixed, or things are improving,             |
| 34:37      | and so on, show passwords can navigate to system settings on Mac OS and stuff like that.                |
| 34:42      | They're adding really deep core integrations, and not only are they adding deep core integrations,      |
| 34:47      | they're making sure that we know about it through more than just a keynote.                             |
| 34:51      | And that to me really is like, this is a proper grown-up app now.                                       |
| 34:56      | Because an app with release notes, that makes my nerd heart sing, but that is also something            |
| 35:01      | that then I can point people to it and be like, this is when that was added.                            |
| 35:05      | See, it's right there.                                                                                  |
| 35:07      | And then I have a way to tell people that this thing is here and that they can see it.                  |
| 35:14      | And if they aren't seeing it, then it tells them what version they need to update to so                 |
| 35:18      | that they know.                                                                                         |
| 35:19      | And that to me is just so great.                                                                        |
| 35:22      | So I'm going to tell the Shortcuts team that they did a 10 out of 10 job just by adding                 |
| 35:27      | that, because that makes it so much more adult as far as applications and automation systems            |
| 35:34      | go.                                                                                                     |
| 35:35      | And don't you wish Apple did that across the board?                                                     |
| 35:37      | Oh, yeah.                                                                                               |
| 35:38      | Trust me, I'm filing feedback for everything.                                                           |
| 35:41      | Like I'm filing feedback for pages.                                                                     |
| 35:43      | Keynote, numbers, mail, [[Safari]], you name it, every single native macOS application, calendar.           |
| 35:51      | I have filed the same feedback.                                                                         |
| 35:53      | I'm really sorry to all the people that have to process the radars, especially I know the               |
| 35:57      | Iwork team has one centralised thing.                                                                   |
| 36:01      | And so I'm really sorry to the Iwork team for sending you three, but I want one of these                |
| 36:07      | for everything.                                                                                         |
| 36:08      | I want separate ones for numbers and pages and keynote and so on.                                       |
| 36:11      | And I know if I go to the App Store and I click on the release notes for numbers, pages                 |
| 36:15      | and keynote specifically, they do a great job with their update notes and so on.                        |
| 36:19      | It's really nice seeing what's there.                                                                   |
| 36:20      | But at the same time, there's only so much space there and it's difficult to link people                |
| 36:25      | to those.                                                                                               |
| 36:26      | It's really nice to just have this proper official change look.                                         |
| 36:32      | It's not code nerd level.                                                                               |
| 36:33      | I would love way more detail, but I know I'm not going to get it and that's okay.                       |
| 36:38      | Because now, if you send me a message and you're like, hey, I was having this weird                     |
| 36:43      | issue with menus and like lists where my phone kept going to sleep, do you know anything                |
| 36:47      | about that?                                                                                             |
| 36:48      | I can be like, yeah, that was fixed in 17.2, 14.2 and 10.2, macOS and watchOS specifically.             |
| 36:56      | It's just nice that that's right there.                                                                 |
| 36:59      | So yeah, this is really good.                                                                           |
| 37:02      | And then Ferris, I think the Iwork team does a good job of sharing new features.                        |
| 37:06      | Well, they do, they do a great job.                                                                     |
| 37:08      | But they don't do as much of saying, well, this is a problem that we solve.                             |
| 37:13      | And then also, I guess in the flip side of that, they don't have as many problems as                    |
| 37:17      | Shortcuts does because Shortcuts is still new and still has some growing pains.                         |
| 37:22      | I think some of that is down to the fact that the Shortcuts team aren't con and shouldn't               |
| 37:28      | be doing everything.                                                                                    |
| 37:30      | It's down to the [[Safari]] team to add [[Safari]] support.                                                     |
| 37:33      | It's down to the Notes team to add Notes support, it's down to the Mail team to add                     |
| 37:37      | Mail support.                                                                                           |
| 37:38      | That explains why there's very little Mail support.                                                     |
| 37:39      | The Mail team, I guess maybe they're taking a holiday.                                                  |
| 37:42      | I don't know.                                                                                           |
| 37:43      | It feels like Mail doesn't ever change all that much on macOS, which isn't a complaint                  |
| 37:47      | because it works, but I'd love some really cool Shortcuts support on macOS for it.                      |
| 37:51      | So yeah, but it's nice seeing what has changed and what's got better and all of those things.           |
| 37:59      | I will say something that still makes me sad is that the lack of parity with mobile app                 |
| 38:05      | actions, and some of them make sense because the platform is different, but some of them                |
| 38:10      | don't, like setting the HomePod and it's like, we've talked about this on the show                     |
| 38:15      | over the years, but it seems like some things end up on the iPhone that are quite useful                |
| 38:24      | that just don't make it to the Mac and I just don't understand.                                         |
| 38:28      | Because the operating systems get closer and closer, and I'm sure there's a technical                   |
| 38:33      | reason.                                                                                                 |
| 38:34      | I mean, it's not like someone just maliciously said, no, let's not give it to them on the               |
| 38:37      | Mac.                                                                                                    |
| 38:38      | I feel like there's probably something that they need to overcome when they haven't got                 |
| 38:42      | to it yet, but I would like to see more emphasis, however you do it, to make sure that these            |
| 38:51      | cool features show up everywhere because I make these field guides about Shortcuts and                  |
| 38:56      | I get these emails from people saying, well, it doesn't work for me.                                    |
| 38:58      | This thing doesn't work for me.                                                                         |
| 38:59      | And often it turns out that I taught how to do it on the iPhone, but on the Mac the                     |
| 39:05      | action isn't there.                                                                                     |
| 39:06      | So you have to write back and say, no, it's not you.                                                    |
| 39:09      | It's just that Apple hasn't enabled that on the Mac yet and it's really frustrating to                  |
| 39:14      | have to tell people that and it makes people like leery of shortcuts and automation.                    |
| 39:20      | They're like, oh, so what you're saying is that it will randomly not work sometimes on                  |
| 39:24      | the other platform.                                                                                     |
| 39:25      | So why should I bother?                                                                                 |
| 39:27      | Yeah.                                                                                                   |
| 39:28      | Yeah.                                                                                                   |
| 39:29      | That for me is really like the worst thing.                                                             |
| 39:31      | And I think this is one area that they could still significantly improve.                               |
| 39:34      | Like if I build a shortcut on my iPhone or my iPad or actually, no, if I build on my                    |
| 39:40      | iPhone and then I open it on my iPad, it should work.                                                   |
| 39:43      | If I build a shortcut on my iPhone or my iPad and open it on my Mac, it should work.                    |
| 39:48      | And I understand my Mac and my iPad cannot vibrate.                                                     |
| 39:54      | My Mac does not have cellular capability, but my iPad may and my iPhone does.                           |
| 40:01      | But there are definitely ways that they could make this better where it's not that like                 |
| 40:06      | you try and run your shortcut and it just doesn't work.                                                 |
| 40:09      | And I'm sure the shortcuts team want to fix this and so on, and I'm sure that there's                   |
| 40:15      | a whole bunch of massive list of things that they have to do with all of the things.                    |
| 40:20      | But as it is, I feel like that's the one big area that they still have to improve as well               |
| 40:26      | along with not necessarily having parity between the platforms.                                         |
| 40:32      | And I think a lot of that is down to the apps within Apple like the [[Safari]] team don't necessarily       |
| 40:41      | add the same things on Mac OS that they do on iOS.                                                      |
| 40:45      | The mail team, just as I mentioned before, kind of seems to be on a holiday and not quite               |
| 40:48      | sure what's happening there.                                                                            |
| 40:50      | Calendar team don't necessarily do the same things either.                                              |
| 40:53      | And [[Apple Reminders\|Reminders]] works great, notes works great and so on.                                                 |
| 40:57      | But not everything is everywhere and that is the biggest frustration.                                   |
| 41:03      | I get that my iPhone can vibrate and I get that my watch can vibrate, but my iPad and                   |
| 41:07      | my Mac can't vibrate.                                                                                   |
| 41:08      | But you know what, just drop a notification or just continue and don't vibrate.                         |
| 41:15      | Even better at that point, I'm sure they thought of this, but make the equivalent of a vibrate          |
| 41:22      | on the Mac.                                                                                             |
| 41:23      | So you put up an alert box that jiggles like it's vibrating and you make the vibrate sound              |
| 41:30      | that sound your phone makes.                                                                            |
| 41:32      | Just put it through the speaker and now we have a vibrate on the Mac.                                   |
| 41:36      | That's good enough.                                                                                     |
| 41:37      | And what happens instead is it just breaks.                                                             |
| 41:41      | It's like the worst of all worlds and all this stuff is what leads people to have trouble.              |
| 41:48      | So I'm not going to beat on this dead horse, but that is something that I would love to                 |
| 41:54      | see improve.                                                                                            |
| 41:55      | I feel like it's holding up shortcuts.                                                                  |
| 41:57      | Yeah.                                                                                                   |
| 41:58      | And I don't think that this is the shortcuts team fault to be clear.                                    |
| 42:01      | I think that they're doing what they can as much as they can, but somebody at Apple is                  |
| 42:06      | like, well, you don't need a vibrate.                                                                   |
| 42:08      | Whatever.                                                                                               |
| 42:09      | Just ignore it.                                                                                         |
| 42:10      | I'm pretty certain they're basically just being stuck into a corner because they want                   |
| 42:18      | everything to work, but I suspect a bunch of people at Apple aren't necessarily the sort                |
| 42:23      | of people who will create a shortcut and just expect it to work everywhere.                             |
| 42:28      | They will expect to create a Mac version and an iPad version and an iPhone version.                     |
| 42:32      | And if that's you, that's fine.                                                                         |
| 42:34      | If that's what you want to do, but that shouldn't affect the person who doesn't really know             |
| 42:40      | how this works and they saw something cool in an Apple keynote and so they tried it on                  |
| 42:44      | their iPhone and it worked and they sent it to their friend on their iPad or their Mac                  |
| 42:50      | and it doesn't work because then you go from like, oh my God, this is really cool.                      |
| 42:54      | Look at this.                                                                                           |
| 42:55      | Isn't this amazing?                                                                                     |
| 42:56      | Oh, it broke.                                                                                           |
| 42:58      | And that's just such a swing on the pendulum.                                                           |
| 43:01      | You don't want that swing.                                                                              |
| 43:03      | You don't want shortcuts to be an emotional roller coaster.                                             |
| 43:06      | You want it to be just solid and doing what you expect it to all the time.                              |
| 43:10      | Well, and that's the reason I raised the issue is shortcuts is shockingly powerful on the               |
| 43:16      | Mac.                                                                                                    |
| 43:17      | Like we talked earlier in the episode that we're going to do a show on setups and we're                 |
| 43:21      | going to talk about Bunch and [[Keyboard Maestro]], but you know what, we're also going to talk             |
| 43:23      | about shortcuts because you can build setups with shortcuts and there's a bunch of tricks               |
| 43:28      | to it.                                                                                                  |
| 43:29      | And Rose and I have been playing with it and we figured it out, but this is something                   |
| 43:33      | I never expected to be able to do with shortcuts, but you can pull it off.                              |
| 43:37      | So that's why when you hit these just kind of illogical breaks, it's frustrating.                       |
| 43:43      | And what I want most of all is for shortcuts to continue to get better and more powerful,               |
| 43:50      | but you have to be able to deliver in a form that people that aren't power automators can               |
| 43:56      | feel comfortable using it.                                                                              |
| 43:58      | And I feel like that, that consistency is absolutely key because as soon as somebody                    |
| 44:04      | has a problem that they, you know, you feel like you're wasting your time.                              |
| 44:09      | Like when I write people back and say, well, it's just not on that, they're like, well,                 |
| 44:13      | how was I supposed to know that that you could just hear the kind of frustration in the reply?          |
| 44:18      | And it's like, well, you really, there's really no way, you know, so I'm sorry, but yeah.               |
| 44:23      | So you know, they spent like an hour trying to figure it out.                                           |
| 44:26      | And then I told them that, oh, that was just never available to you.                                    |
| 44:29      | And they feel like they wasted an hour on automation.                                                   |
| 44:31      | And that sounds bad.                                                                                    |
| 44:32      | But so, but like I said, we talked about that enough.                                                   |
| 44:35      | I do think overall shortcuts is making real progress, getting more powerful.                            |
| 44:40      | One thing I really feel like is the third party development community has picked up                     |
| 44:45      | the way I was hoping it would.                                                                          |
| 44:46      | It feels like we're getting shortcut support in a lot of Mac apps.                                      |
| 44:49      | Yes. Yeah, it really does.                                                                              |
| 44:51      | And honestly, like it's like the things that work are just stable, you know,                            |
| 44:56      | that might not sound like a huge thing, but trust me, it is.                                            |
| 44:59      | I have put shortcuts in the dock on my mom and my dad's Macs.                                           |
| 45:04      | OK, so my dad has like this whole little guide of like instructions of things of like,                  |
| 45:09      | hey, so when this keyboard shortcut isn't working in Photoshop,                                         |
| 45:12      | it's probably because you updated Photoshop and it, you know,                                           |
| 45:15      | unset like one of your preferences.                                                                     |
| 45:17      | So here's a little guide on how to put it back together.                                                |
| 45:19      | Obviously, he is still more than welcome to call me                                                     |
| 45:22      | and ask me to help him or ask me to go over and fix it for him.                                         |
| 45:24      | That's fine, but he likes to try and be independent.                                                    |
| 45:26      | So I put together a shortcut that lives in his dock.                                                    |
| 45:29      | It's got a question mark on it.                                                                         |
| 45:30      | So he clicks on the question mark and it's like, hey, what do you need help with?                       |
| 45:33      | Do you need help with your Photoshop keyboard shortcuts?                                                |
| 45:35      | Do you need help with printing labels for Christmas cards and so on?                                    |
| 45:39      | And, you know, and it's just there and then it just opens the file for him.                             |
| 45:45      | And that's it.                                                                                          |
| 45:47      | It just does that, but it grabs all those things and puts them together.                                |
| 45:50      | And whenever I need to create a new guide for him, I've got a shortcut there                            |
| 45:54      | that will do that.                                                                                      |
| 45:56      | And, you know, when he wants to upload this year's or last year's photos                                |
| 46:01      | to their Synology, it's using a shortcut.                                                               |
| 46:04      | Yeah, it's OK.                                                                                          |
| 46:05      | There's a shell script inside the shortcut, but it's using a shortcut and it works.                     |
| 46:09      | And I just think that that is such a great place to be.                                                 |
| 46:12      | And now where we can put shortcuts on our relatives,                                                    |
| 46:15      | machines, leave them unsupervised and they work because for a long time                                 |
| 46:19      | when shortcuts updated stuff broke like you would expect.                                               |
| 46:23      | No update for shortcuts.                                                                                |
| 46:24      | Bunch of dots going to be broken.                                                                       |
| 46:25      | I'm going to have to go in and fix it.                                                                  |
| 46:26      | There are still some weird quirks.                                                                      |
| 46:27      | We'll get to some of that in iOS because I'm having a very weird issue                                  |
| 46:30      | on iOS right now.                                                                                       |
| 46:31      | You know, it's really, really improved.                                                                 |
| 46:34      | And the fact that I have multiple shortcuts in the dock on my parents'                                  |
| 46:37      | machines because they are the sort of people who will go to the dock to run an application.             |
| 46:43      | They aren't keyboard warriors where they'll launch everything through                                   |
| 46:46      | [[Spotlight]] or [[Alfred]] or, you know, [[LaunchBar]] or whatever.                                                |
| 46:50      | But, you know, I've got shortcuts for them there and they work and they like them.                      |
| 46:54      | That's that's a really great place to be.                                                               |
| 46:57      | All right, overall, on the Mac, just summing up, I continue to argue                                    |
| 47:01      | or in a golden age of automation, there are tools at every level,                                       |
| 47:05      | whether you're just entering in with shortcuts or you're becoming a                                     |
| 47:10      | power [[Keyboard Maestro]] user or you're an AppleScript, you know, person,                                |
| 47:14      | whatever is, there are solutions and they all talk to each other.                                       |
| 47:18      | I just think we continue to be in really great shape on the Mac for automation.                         |
| 47:24      | Yes, definitely.                                                                                        |
| 47:26      | And yeah, we definitely are.                                                                            |
| 47:28      | And you know what?                                                                                      |
| 47:28      | It's one of those things where it's only going to get better from here on out.                          |
| 47:33      | And that's all we can be excited about because, you know, nothing is breaking.                          |
| 47:38      | You know, they did the whole import of automator workflows into shortcuts.                              |
| 47:44      | That's still there.                                                                                     |
| 47:44      | That's still working, but automators still there as well.                                               |
| 47:47      | They're being very careful with how they take things away from us and so on.                            |
| 47:52      | So I'm really pleased to see, you know, how well this is doing, how stable it is.                       |
| 47:56      | There are definitely areas for improvement, but it's doing really well.                                 |
| 48:00      | Yeah, I'm surprised automators is still there, but, you know.                                           |
| 48:04      | Yeah, well, you know, they can't take it away because they love us so much.                             |
| 48:08      | They love us so much, right?                                                                            |
| 48:09      | Yeah, and that's what I'm telling myself.                                                               |
| 48:12      | Well, also, I think there's just some pieces of it that for one reason or another                       |
| 48:15      | haven't made their way to shortcuts yet.                                                                |
| 48:16      | So maybe that checklist has to get finished.                                                            |
| 48:22      | This episode of The Automators is brought to you by Vitally for a new era                                |
| 48:26      | of customer success productivity.                                                                       |
| 48:28      | Get a free pair of AirPods Pro when you book a qualified meeting.                                       |
| 48:32      | Customer success teams today are facing a problem.                                                      |
| 48:35      | How do they connect customer data back to their work?                                                   |
| 48:38      | Vitally changes that.                                                                                    |
| 48:40      | It's a new kind of customer success platform, an all-in-one collaborative                               |
| 48:44      | workspace that combines your customer data with all the capabilities you expect                         |
| 48:48      | from today's project management and work platforms.                                                     |
| 48:52      | Because it's designed for today's customer success team, that's why                                     |
| 48:55      | Vitally operates with unparalleled efficiency, improves net revenue                                      |
| 48:59      | retention, and delivers best-in-class customer experiences.                                             |
| 49:03      | It's the solution to helping your customer success team keep a better                                   |
| 49:06      | pulse on your customers, which maximises productivity, visibility, and collaboration.                   |
| 49:12      | You can boost your bottom line by driving more revenue per customer with Vitally.                        |
| 49:18      | And if you take a qualified demo of Vitally, get a free pair of AirPods Pro.                             |
| 49:22      | So if you're a customer success decision maker, actively seeking SIA solutions,                         |
| 49:27      | working at a B2B software as a service company with 50 to 1000                                          |
| 49:32      | employees, and you're willing to explore changing customer success platforms,                           |
| 49:36      | if you already have one in place, schedule your call by visiting                                        |
| 49:39      | vitaly.io/automators and get that free pair of AirPods Pro.                                       |
| 49:45      | Once again, that's a V-I-T-A-L-L-Y dot I-O/automators for a free                                  |
| 49:51      | pair of AirPods Pro when you schedule a qualified meeting.                                              |
| 49:55      | And our thanks to Vitally for their support of the Automators podcast                                    |
| 49:58      | and all of Relay.fm. So how's the story going overall on mobile, in your opinion?                       |
| 50:07      | I think it's doing pretty well.                                                                         |
| 50:10      | So, you know, we were just talking about shortcuts, so let's stick with shortcuts.                      |
| 50:14      | Because I think it's doing insanely well.                                                               |
| 50:17      | That said, I do have a weird bug that I just want to mention in case you or any                         |
| 50:20      | of our listeners have run into this.                                                                    |
| 50:23      | So I have a shortcut that runs at nine o'clock in the morning, and it runs three                        |
| 50:26      | shortcuts. Okay. So the 9am automation runs a shortcut.                                                 |
| 50:32      | Okay. And then the, that shortcut contains three shortcuts, which it runs                               |
| 50:37      | using the run shortcuts action.                                                                         |
| 50:39      | When I run each of these shortcuts individually, no apps are opened.                                    |
| 50:43      | Okay. And nothing changes.                                                                              |
| 50:45      | If I run that whole shortcut, some of the time, some of the apps will open.                             |
| 50:50      | When I run it from the automation, 100% guaranteed, it will take over my phone                          |
| 50:56      | and just start moving me between different apps.                                                        |
| 50:59      | And I don't understand why, because when I run shortcuts individually, nothing opens.                   |
| 51:04      | And so I'm very confused by that, but I think that that's definitely like a weird                       |
| 51:08      | edge case with like the layers of automation that I've got set up there.                                |
| 51:12      | What I should really try doing is creating three separate 9am automations, like                         |
| 51:16      | one at 9am, one at 91, one at 902 maybe, and just running those and making sure                         |
| 51:21      | that they don't open apps.                                                                              |
| 51:23      | But aside from that sort of thing, I feel like we are in a really great place                           |
| 51:28      | with shortcuts. I no longer see an update coming and go, oh no, all my shortcuts                        |
| 51:33      | are going to break.                                                                                     |
| 51:34      | Like I did have some weird issues with like widgets in the iOS 17 beta where stuff                      |
| 51:39      | just constantly kept resetting, but that wasn't a shortcuts issue.                                      |
| 51:42      | That was an iOS, an iPad OS issue.                                                                      |
| 51:46      | So I feel like we are really in a good place.                                                           |
| 51:50      | And the focus mode stuff and the focus mode filters, this is where like,                                |
| 51:56      | this isn't technically shortcuts, but it definitely is shortcuts because we're                          |
| 52:00      | getting things like, now there is a music focus mode filter.                                            |
| 52:05      | And the music filter is basically whether or not the stuff that you listen to                           |
| 52:09      | contributes towards your listening history or not.                                                      |
| 52:11      | Very simple.                                                                                            |
| 52:12      | But oh my gosh, is that useful because it means that I can listen to the same                           |
| 52:15      | album on repeat for eight hours while I'm working and it doesn't go into my                             |
| 52:19      | listening history and screw up all my stats because I do tend to just listen to                         |
| 52:23      | an album on loop that's working for my brain that day.                                                  |
| 52:25      | And I feel like the way that this is bleeding out, it's not a bad thing.                                |
| 52:31      | It's a really good thing.                                                                               |
| 52:32      | You know, they're taking the things that we wanted and they're making them better.                      |
| 52:35      | They're making our automations actually automated.                                                      |
| 52:37      | They're taking some of the things that we were doing with automations and                               |
| 52:40      | building them into the operating system, like changing watch faces and stuff like                       |
| 52:43      | that.                                                                                                   |
| 52:44      | And that's just really lovely to see.                                                                   |
| 52:48      | And the fact that all of this is linked together and it shortcuts underneath,                           |
| 52:52      | it's so good.                                                                                           |
| 52:53      | And you know, we're getting things like we got an action button on the iPhone 15 Pro                    |
| 52:57      | and Pro Max this year, which runs an intent.                                                            |
| 53:00      | It's running a shortcut.                                                                                |
| 53:01      | Like, you know, it doesn't have to run a shortcut, but it can run a shortcut.                           |
| 53:04      | It's right there.                                                                                       |
| 53:05      | And that, that's really amazing.                                                                        |
| 53:07      | Yeah, I feel like the biggest improvement on automation in the last few years has                       |
| 53:11      | been what I call context automation.                                                                    |
| 53:14      | And I'm with you on shortcuts.                                                                          |
| 53:16      | I think it's, it's delivering the goods and shortcuts is doing exactly what it                          |
| 53:20      | should be doing.                                                                                        |
| 53:21      | And every year it's getting a little better.                                                            |
| 53:23      | And I love that.                                                                                        |
| 53:24      | But, but increasingly Apple is building a tool set into its mobile devices that                         |
| 53:30      | allow you to control how much it, it notifies you and bothers you.                                      |
| 53:35      | What you see and what you don't see, allowing you to work harder and more                               |
| 53:40      | efficiently and without distraction.                                                                    |
| 53:43      | And, you know, I, I, you know, anybody in my, the MacSparky labs knows this is a                       |
| 53:47      | drum I bang probably too often, but I really feel like we're on the verge of                            |
| 53:52      | like public awareness of just how detrimental these devices can be.                                     |
| 53:57      | I think people are starting to wake up to that, right?                                                  |
| 53:59      | You know.                                                                                               |
| 54:00      | Yeah.                                                                                                   |
| 54:01      | And, and a lot of the discussions around children, and I think that's probably                          |
| 54:05      | the most important place to start because their brains aren't at a level where                          |
| 54:09      | they can even govern themselves and they get these devices and it just                                  |
| 54:12      | screws everything up.                                                                                   |
| 54:13      | But honestly, this is an adult problem too.                                                             |
| 54:16      | I mean, I just, we were at an event recently and there was a guy there that                             |
| 54:21      | I know and he was in the corner the whole time on his phone.                                            |
| 54:24      | I mean, not engaging and it's like, come on man, you know, and I think that                             |
| 54:30      | this is something adults face as well and Apple is building the tool set there                          |
| 54:35      | and I feel like most people don't realise it or don't want to try and turn it on.                       |
| 54:40      | Maybe we'll cover this will be a show this year, but I, I want to talk about                            |
| 54:44      | context automation and how this is something you can do to help, help yourself                          |
| 54:49      | and, and what you need is there, but you just have to spend the time to set it up.                      |
| 54:54      | It's not super difficult, but I aggressively use this stuff.                                            |
| 54:59      | And it makes my life better and it makes my relationship with my technology                             |
| 55:04      | more healthy and, and I'm a big fan of contextual automation and I feel like                            |
| 55:09      | Apple has really helped in that way.                                                                    |
| 55:12      | I don't know who is behind this at Apple or what the story is, but the man                              |
| 55:17      | more of that please.                                                                                    |
| 55:19      | Yeah.                                                                                                   |
| 55:20      | And honestly, yeah, this is, this is just really, really useful to see things                           |
| 55:25      | like this because, you know, I keep seeing people and, you know, previously,                            |
| 55:29      | you know, like you'd see somebody's, you know, device and they, they wouldn't                           |
| 55:33      | be using the cool me features.                                                                          |
| 55:35      | You know, my parents are only just getting on the widget train.                                         |
| 55:39      | I've been gently encouraging them to try out widgets and so on.                                         |
| 55:44      | And my mom, once she discovered that she can have photos widget, you know,                              |
| 55:48      | she was all on board.                                                                                   |
| 55:49      | She loves that.                                                                                         |
| 55:50      | But, you know, they're, they're not the sort of people who will embrace                                 |
| 55:54      | you know, changes and so on.                                                                            |
| 55:56      | But I do see a lot of people just using shortcuts.                                                      |
| 56:00      | You know, it's, they're not necessarily using shortcuts for like amazing,                               |
| 56:04      | really cool things, but they're using shortcuts because like the New York                               |
| 56:07      | Times crossword puzzle app changed its name and they couldn't like, they kept                           |
| 56:12      | like trying to like type the name of the old one in and they couldn't find it.                          |
| 56:16      | And so they'll create a shortcut.                                                                       |
| 56:18      | It's just called like New York Times crossword or something.                                            |
| 56:20      | And it'll solve a problem.                                                                              |
| 56:22      | And I think, you know, that that is the sort of thing like it, you know,                                |
| 56:26      | that's not an automation that will change the world, but it will change                                 |
| 56:30      | somebody's world.                                                                                       |
| 56:31      | And the fact that it's there and I'm seeing people using focus modes because                            |
| 56:34      | they want different wallpaper when they're at school to when they're at                                 |
| 56:38      | home, you know, and they want to be able to go to their grandmothers and not                            |
| 56:42      | have their grandmother ask about this anime character on their lock screen.                             |
| 56:45      | So they have a family focus mode where it just changes the lock screen to like                          |
| 56:49      | a flower or something like that.                                                                        |
| 56:50      | And just so they don't have to explain to grandmother about, you know,                                  |
| 56:53      | what is anime and why is this not like a doodle for kids and stuff like that                            |
| 56:58      | and things like that.                                                                                   |
| 56:59      | And I do think, you know, like obviously, you know, some people are using these                         |
| 57:02      | to avoid having to talk to people about stuff that's on, you know, their front                          |
| 57:05      | screen.                                                                                                 |
| 57:06      | But, you know, even if they're doing it for their reason, you know, it's really                         |
| 57:09      | nice that people have the ability to do that and it's just getting more powerful                        |
| 57:13      | all the time.                                                                                           |
| 57:14      | And I'm, you know, I get ideas from these folks, even though they're not, you                           |
| 57:18      | know, in kind of automation nerd level that I am, because they're just thinking                         |
| 57:22      | differently.                                                                                            |
| 57:23      | And that to me is super powerful.                                                                       |
| 57:25      | Agreed.                                                                                                 |
| 57:26      | Okay.                                                                                                   |
| 57:27      | So overall on mobile, how are we doing?                                                                 |
| 57:30      | I would say we're doing pretty well.                                                                    |
| 57:32      | You know, there's a fundamental disconnect between mobile and the Mac in the                            |
| 57:37      | sense that the Mac is way more addressable, you know, going back to a discussion                        |
| 57:41      | of AppleScript.                                                                                        |
| 57:42      | So you don't have the same level of power, you know, it's like earlier when                             |
| 57:46      | I was talking about the new text expansion tool, she's trying one of my                                 |
| 57:50      | questions was how is our mobile because text expansion isn't as easy on mobile                          |
| 57:54      | because of the way it's locked down.                                                                    |
| 57:56      | And so I feel like automation does have a bit of a handicap in that regard on                           |
| 58:01      | mobile, but I do think that the tools that are out there are quite useful.                              |
| 58:05      | And if you look at it as a mobile device, I think the automation tools you need                         |
| 58:09      | between shortcuts and some of the other things we discuss on the show are                               |
| 58:12      | helpful and you can certainly get pretty far on your own.                                               |
| 58:16      | I want to switch over to home automation because I feel like of these categories                        |
| 58:21      | we've discussed today, I feel like home automation is the one that needs the                            |
| 58:24      | most work.                                                                                              |
| 58:25      | I feel like it's the one in the worst shape right now.                                                  |
| 58:28      | We're in this [[Matter]] transition, but just from feedback we get from show                                |
| 58:33      | listeners, I feel like this is the most vexing automation that people want to do                        |
| 58:38      | and they have a lot of trouble getting it to work consistently.                                         |
| 58:42      | And this is one that I think needs the most work.                                                       |
| 58:45      | Yeah.                                                                                                   |
| 58:46      | And I think this is, this is one of those ones that it's going to be difficult                          |
| 58:49      | so for a number of reasons.                                                                             |
| 58:51      | You know, the primary one just being money, you know, replacing a light bulb                            |
| 58:56      | with a smart light bulb is not going to be the same as going to like Home Depot                         |
| 59:01      | and spending, I don't know how much is a light bulb like $5 or something in the                         |
| 59:05      | US.                                                                                                     |
| 59:06      | I'm just guessing.                                                                                      |
| 59:07      | Like, you know, if you're looking at smart light bulbs, you're looking at at                            |
| 59:10      | least four times that price.                                                                            |
| 59:12      | And that, that, you know, that, that is a pretty steep way to like try and dip                          |
| 59:17      | your toe in.                                                                                            |
| 59:18      | And then when it doesn't work, that means that you're going to be really upset                          |
| 59:22      | because you've spent a lot more money than you could have to just have the                              |
| 59:25      | thing work the way it previously did.                                                                   |
| 59:27      | And maybe it doesn't even work right now because it, you know, it's not turning                         |
| 59:30      | on automatically when light switch turns on and so on.                                                  |
| 59:33      | But I do think that there are improvements coming.                                                      |
| 59:36      | You know, we saw some improvements directly inside of [[HomeKit]] with a little                             |
| 59:40      | bit, and I do emphasise little bit of logging.                                                          |
| 59:44      | Okay.                                                                                                   |
| 59:45      | You still can't find out why your lights are randomly turning on at 3 a.m.                              |
| 59:48      | But you do have a log of when your door unlocked and things like that.                                  |
| 59:52      | And that is a very significant improvement.                                                             |
| 59:55      | There, there's a lot of pain points still, like for example, favourites in                              |
| 59:59      | [[HomeKit]] are saved on the device.                                                                        |
| 01:00:02   | So if you in your home, David, mark your office light bulb as a favourite,                              |
| 01:00:07   | then when your wife opens it, when either of your door just opens [[HomeKit]],                              |
| 01:00:10   | the home app or the control centre, guess what favourite they see?                                      |
| 01:00:15   | Your office light.                                                                                      |
| 01:00:16   | Yeah.                                                                                                   |
| 01:00:17   | Even though they don't care about your office light, things like that, that,                            |
| 01:00:20   | you know, and that is a mistake.                                                                        |
| 01:00:22   | I mean, I'm going to call it a mistake because I think that it was very well                            |
| 01:00:25   | intentioned, but they just didn't think about it as a more than one person lives                        |
| 01:00:29   | alone. They were thinking about it as a nerd lives in a tiny little studio in                           |
| 01:00:33   | San Francisco somewhere.                                                                                |
| 01:00:35   | But like that sort of mistake goes way back.                                                            |
| 01:00:37   | And fixing that sort of thing is really difficult.                                                      |
| 01:00:40   | But we're also seeing, you know, improvements because, you know,                                        |
| 01:00:44   | Apple is part of [[Matter]].                                                                                |
| 01:00:46   | And they're part of the people creating the [[Matter]] standard.                                            |
| 01:00:49   | That means that there is [[Thread]], which is another way to connect devices                                |
| 01:00:54   | together.                                                                                               |
| 01:00:55   | But that's had some pain points because if you had home plots,                                          |
| 01:00:58   | that would create a [[Thread]] network.                                                                     |
| 01:01:00   | And if you had Eero, that would create a [[Thread]] network.                                                |
| 01:01:03   | If you had Google stuff, that would create a [[Thread]] network.                                            |
| 01:01:07   | And the *Thread Group* is finally, and this is literally just come out a couple                           |
| 01:01:13   | of hours before record today, they're finally fixing it so that there should                            |
| 01:01:17   | be one big, happy, meshy [[Thread]] network.                                                                |
| 01:01:19   | And that's the sort of thing that I'm really looking forward to seeing                                  |
| 01:01:24   | because, you know, [[Thread]], for me, where things have been adding [[Thread]] support,                        |
| 01:01:29   | [[Matter]] support, specifically where, you know, devices have upgraded to add                              |
| 01:01:33   | [[Matter]] support to their, their hubs or their devices.                                                   |
| 01:01:37   | That's meant that some of the devices that I've got, which, you know,                                   |
| 01:01:40   | were pretty locked down and not, I couldn't, you know, interact with them                               |
| 01:01:44   | in anything but their own manufacturer apps, I can now control using                                    |
| 01:01:48   | [[Home Assistant]] and [[HomeKit]].                                                                             |
| 01:01:50   | And that is really great because that means that I no longer have to pay                                |
| 01:01:53   | the [[HomeKit]] premium, I'm paying a matchup premium, but it's not quite as much.                          |
| 01:01:58   | And so that, you know, that's pretty exciting to see.                                                   |
| 01:02:01   | And I think, you know, I think we will, you know, get there with this stuff.                            |
| 01:02:06   | But it's definitely still the point where, you know, was it MyQ last year,                              |
| 01:02:12   | towards the end of last year, they just decided that they were going to                                 |
| 01:02:15   | completely and utterly block everybody's access to their service                                        |
| 01:02:19   | unless they were using the MyQ app.                                                                     |
| 01:02:22   | And so now you just can't open your garage door unless you're using                                     |
| 01:02:27   | their app, which is a really bad app, just to be clear.                                                 |
| 01:02:30   | It's, it's not a good app.                                                                              |
| 01:02:31   | It's, it's a very bad user experience.                                                                  |
| 01:02:34   | So yeah, there are some manufacturers still going the wrong way when it                                 |
| 01:02:38   | comes to smart home stuff, but I think a lot of them have hopped on.                                    |
| 01:02:41   | The, you know, [[Matter]] is good.                                                                          |
| 01:02:44   | Open standards are better and let people be creative with this stuff                                    |
| 01:02:50   | because just because you think that a motion sensor should turn the light on,                           |
| 01:02:54   | it's not a surgery.                                                                                     |
| 01:02:55   | Maybe you want the motion sensor to turn the light off.                                                 |
| 01:02:57   | And that's something that, you know, it's becoming more and more possible to do.                        |
| 01:03:01   | One of the big problems with home automation is, is the intangibles.                                    |
| 01:03:04   | Like, you know, well, the real problem is you are using a Wi-Fi based transmitter                       |
| 01:03:10   | and your neighbour is on your exact bandwidth.                                                           |
| 01:03:12   | So you have poor Wi-Fi and the system just can't find what it needs.                                    |
| 01:03:18   | And even though it looks like it should work, it doesn't.                                               |
| 01:03:21   | But, you know, and then on Apple's side, there's a lack of transparency to tell you                     |
| 01:03:25   | where the problem is.                                                                                   |
| 01:03:26   | So there's a bunch of things and the money is an issue, but I think it's bigger than                    |
| 01:03:31   | I think people are, some people are saying, I'll pay four times.                                        |
| 01:03:34   | I don't care.                                                                                           |
| 01:03:35   | I just want to automate my lights and how come it just doesn't consistently work                        |
| 01:03:40   | like it'll work for a few days and then not work another day.                                           |
| 01:03:43   | And you don't know, you don't even know why.                                                            |
| 01:03:45   | And that is a, that's a huge problem.                                                                   |
| 01:03:47   | And, and you and I kind of talk about solutions to that like home assistant is,                         |
| 01:03:52   | gives you feedback.                                                                                     |
| 01:03:53   | It tells you what went wrong.                                                                           |
| 01:03:55   | So there are ways, but you know, how many people want to set up a home assistant                        |
| 01:03:59   | server and go that next level?                                                                          |
| 01:04:01   | I just feel like this is an area of automation that is ripe for improvement.                            |
| 01:04:07   | [[Matter]] may be the answer.                                                                               |
| 01:04:10   | I don't know.                                                                                           |
| 01:04:11   | We're just going to have to find out.                                                                   |
| 01:04:12   | I mean, it's certainly an attempt.                                                                      |
| 01:04:15   | I think part of the problem was all these big companies all wanted to own the                           |
| 01:04:19   | widget at the beginning.                                                                                |
| 01:04:20   | So it was kind of like a land grab of like, oh, you should just get Apple stuff.                        |
| 01:04:25   | You should just get Google stuff or Amazon.                                                             |
| 01:04:27   | And, and they realised that's just not going to work.                                                   |
| 01:04:29   | I think they're begrudgingly, maybe all trying to get on this [[Matter]] standard.                          |
| 01:04:33   | But, but hopefully it works.                                                                            |
| 01:04:35   | I'll tell you, in general, my home automation is pretty consistent, but it's                            |
| 01:04:39   | only because I'm a nerd and I babysit it.                                                               |
| 01:04:41   | And that's not good enough.                                                                             |
| 01:04:43   | It needs to get better and easier.                                                                      |
| 01:04:45   | And they're, they're just not there yet.                                                                |
| 01:04:47   | Yeah.                                                                                                   |
| 01:04:48   | Yeah.                                                                                                   |
| 01:04:49   | I think, you know, the home assistant folks posted about this, you know, I                              |
| 01:04:54   | think it was maybe September or so of last year, the home acceptance factor                             |
| 01:04:58   | where if you're adding a device to your home, it has to work in your home.                              |
| 01:05:02   | It has to look nice.                                                                                    |
| 01:05:03   | It has to, you know, work the way that the people in your home expect it to                             |
| 01:05:07   | work.                                                                                                   |
| 01:05:08   | So if you have a partner that is used to flipping the light switch off at the                           |
| 01:05:11   | wall, it's still got to work that way.                                                                  |
| 01:05:13   | When you replace a light, you know, it's, you can't take things away from                               |
| 01:05:16   | people.                                                                                                 |
| 01:05:17   | You have to add to it.                                                                                  |
| 01:05:18   | And I think that this is something that really has been like a big struggle for                         |
| 01:05:23   | a long time.                                                                                            |
| 01:05:24   | So when Phillips here released the little devices that you can put in the wall                          |
| 01:05:30   | behind your light switch so that you can still have a regular light switch,                             |
| 01:05:33   | but you can have it with a hue bulb.                                                                    |
| 01:05:35   | So that, you know, when you flip the light switch, it will toggle the                                   |
| 01:05:39   | state of the hue bulb.                                                                                  |
| 01:05:40   | Things like that, that is the sort of thing where this is a significant                                 |
| 01:05:44   | improvement.                                                                                            |
| 01:05:45   | Because otherwise, you know, previously you'd be like taping over a light                               |
| 01:05:48   | switch and telling people, please don't touch the light switch, leave it alone.                         |
| 01:05:51   | The lights will turn on automatically or get out your phone and say, hey,                               |
| 01:05:54   | Apple lady, turn on my lights, please.                                                                  |
| 01:05:56   | And, you know, that, that, that doesn't, you know, that's not a nice experience.                        |
| 01:06:01   | And I think, you know, the home is so difficult because everybody's home has                            |
| 01:06:05   | its own unique challenges, you know.                                                                    |
| 01:06:07   | If you've ever moved house folks and you've tried to take something with                                |
| 01:06:10   | you from your old house that you thought would just work perfectly in the                               |
| 01:06:13   | new house and then you put in new house and you're like, huh, I know I                                  |
| 01:06:17   | measured this, but yet somehow it doesn't fit.                                                          |
| 01:06:20   | It doesn't look right.                                                                                  |
| 01:06:21   | Something's not quite right here.                                                                       |
| 01:06:22   | Like, you know, there is no copy paste solution for home automation.                                    |
| 01:06:26   | What works for one person or one family or one house will not                                           |
| 01:06:31   | necessarily work for the next one.                                                                      |
| 01:06:32   | And I think this is, you know, this is the biggest problem because there is                             |
| 01:06:37   | just, you know, there's an assumption that, you know, you will                                          |
| 01:06:40   | want a motion sensor.                                                                                   |
| 01:06:41   | The when it sees movement will turn on lights.                                                          |
| 01:06:43   | Well, guess what?                                                                                       |
| 01:06:44   | I put those lights in my bedroom.                                                                       |
| 01:06:45   | I don't want the lights turning on at three o'clock in the morning                                      |
| 01:06:47   | because I rolled over in bed.                                                                           |
| 01:06:49   | You know, I would like to stay asleep, please.                                                          |
| 01:06:52   | Things like that.                                                                                       |
| 01:06:53   | And it is really tricky.                                                                                |
| 01:06:55   | But I do think that there, you know, there's improvements coming.                                       |
| 01:06:58   | Some stuff is getting better.                                                                           |
| 01:07:00   | Some stuff is still just working very weirdly.                                                          |
| 01:07:03   | I keep seeing folks with [[HomeKit]] where there's like one person who set up                               |
| 01:07:08   | the [[HomeKit]] home and then there's somebody else who just half the time                                  |
| 01:07:11   | can't access the [[HomeKit]] home.                                                                          |
| 01:07:13   | There's just no devices in it or it just doesn't work.                                                  |
| 01:07:16   | And I'm not quite sure what's going on there, but I have told those folks to                            |
| 01:07:19   | get in touch with Apple and, you know, try, you know, wiping the devices                                |
| 01:07:23   | and stuff like that and, you know, get actual support on it.                                            |
| 01:07:26   | But yeah, the fact that that is still happening is problematic,                                         |
| 01:07:30   | but I do think we're getting there with this stuff.                                                     |
| 01:07:33   | All right, let's move on to AI.                                                                         |
| 01:07:35   | This is a topic we've not covered a lot on the automators,                                              |
| 01:07:37   | but I want to start incorporating it into some of our future content                                    |
| 01:07:41   | because I feel like there is an argument for AI and automation                                          |
| 01:07:46   | that we need to make and people need to be aware of.                                                    |
| 01:07:50   | I have found it useful in the last, you know, six months                                                |
| 01:07:54   | to help me sometimes generate an AppleScript or get me started on it.                                  |
| 01:07:58   | Other types of scripting is available to it, but more importantly,                                      |
| 01:08:02   | I would like to see automation further democratise automation creation.                                 |
| 01:08:07   | I feel like, you know, so often you need to know the secrets.                                           |
| 01:08:10   | You need to know, you know, what platforms this shortcut works on.                                      |
| 01:08:15   | And if you don't, you get in trouble.                                                                   |
| 01:08:17   | Well, what if, you know, AI can help us with that?                                                      |
| 01:08:20   | What are your thoughts on AI and automation right now and going forward?                                |
| 01:08:24   | I mean, I think the biggest difficulty is, you know,                                                    |
| 01:08:29   | it's the monkey's paw, right?                                                                           |
| 01:08:31   | You don't necessarily know what you're asking for.                                                      |
| 01:08:33   | And that's on both sides.                                                                               |
| 01:08:35   | So, you know, it's, especially if it comes to, like, home automation,                                   |
| 01:08:39   | I do see this where somebody is like, hey, like, I want, like,                                          |
| 01:08:41   | a home assistant automation to, like, do this thing.                                                    |
| 01:08:43   | And they give them something and then, like, they copy paste it.                                        |
| 01:08:46   | And it just doesn't quite work the way that they expected it to.                                        |
| 01:08:50   | And then they ask for help.                                                                             |
| 01:08:51   | And the people who actually know what they're doing in the community                                    |
| 01:08:53   | look at it and go, well, that's because it's, like, you know,                                           |
| 01:08:58   | it's dimming something using, say, for example, a while loop.                                           |
| 01:09:01   | So, you know, like, turn on a timer and then, you know,                                                 |
| 01:09:05   | every second while that timer is on, dim the lights by another 2%                                       |
| 01:09:09   | or something like that.                                                                                 |
| 01:09:11   | And that seems like a really good idea, except for the fact                                             |
| 01:09:13   | that it's a dim foot you chair built in.                                                                |
| 01:09:15   | And I think that this is, you know, this is where the difficulties come in,                             |
| 01:09:18   | where keeping the machine fed with not just, like, all of the updates,                                  |
| 01:09:24   | but the creative and good way to use these and training it away                                         |
| 01:09:30   | from the bad way to use things can be really tricky.                                                    |
| 01:09:33   | You know, like, I can, I have, you know, definitely seen folks use it                                   |
| 01:09:37   | to create some really awesome, like, little scripty things.                                             |
| 01:09:40   | And they're like, yeah, this is amazing.                                                                |
| 01:09:42   | It does exactly what I want.                                                                            |
| 01:09:43   | And then, you know, and I've been like, that's really cool.                                             |
| 01:09:46   | I look at the code and I'm like, oof.                                                                   |
| 01:09:48   | Like, I can see, like, a lot of places where it's going to go wrong.                                    |
| 01:09:51   | But right now it's working fine.                                                                        |
| 01:09:53   | And, you know, for a lot of this stuff, like, just giving you, like,                                    |
| 01:09:56   | a really good place to start of, you know, here's how, you know,                                        |
| 01:09:59   | to get started with a script to do this or something like that.                                         |
| 01:10:02   | It's really great.                                                                                      |
| 01:10:04   | But I think it is where there's things where, you know, if you, for example,                            |
| 01:10:08   | if you have no idea how to write a shell script,                                                        |
| 01:10:10   | if you need a shell script for something, like, absolutely,                                             |
| 01:10:13   | go ahead, ask an AI to, you know, write one for you.                                                    |
| 01:10:17   | But I think, as with all things, like, if you just copy-paste something                                 |
| 01:10:21   | from the Internet and it works, like, that's great, but you need to,                                    |
| 01:10:25   | like, actually copy-paste bits of it back into the Internet                                             |
| 01:10:28   | and find out what it is and how it works.                                                               |
| 01:10:30   | You know, so, you know, what is this, like, JQ thing in here?                                           |
| 01:10:34   | Like, why, like, why is this in here?                                                                   |
| 01:10:36   | I just need to parse the JSON file.                                                                     |
| 01:10:38   | Oh, JQ is actually a really useful tool for parsing JSON files                                          |
| 01:10:41   | on the command line.                                                                                    |
| 01:10:43   | Huh, and there's another one called YQ,                                                                 |
| 01:10:45   | which is great for parsing [[YAML]] files.                                                                  |
| 01:10:47   | Great, now I know that, and I can understand that a little bit,                                         |
| 01:10:49   | so that bit's fine.                                                                                     |
| 01:10:51   | And I'll move on, like, what is RM minus RF?                                                            |
| 01:10:53   | Why is it deleting this whole folder and everything in it?                                              |
| 01:10:57   | Ooh, that's a bit scary.                                                                                |
| 01:10:58   | So, you know, I think, you know, there's, there's definitely                                            |
| 01:11:01   | a lot of really great stuff about it.                                                                   |
| 01:11:03   | So, you know, don't, don't not use AI for these things,                                                 |
| 01:11:06   | but I do think that just, like, if you were to copy-paste                                               |
| 01:11:09   | something off of Stack Overflow, or just some random website,                                           |
| 01:11:14   | like, it's worth, you know, Googling some of this stuff first                                           |
| 01:11:18   | and reading some of the documentation, making sure                                                      |
| 01:11:20   | that you have a basic understanding of what's going on,                                                 |
| 01:11:24   | just so that if something surprising happens,                                                           |
| 01:11:26   | then it's less surprising to you                                                                        |
| 01:11:29   | and you have an idea of how to fix it.                                                                  |
| 01:11:31   | So, yeah, I think it's a really good, you know,                                                         |
| 01:11:34   | really nice starting place for all of these things.                                                     |
| 01:11:37   | It's not necessarily going to be the be all and end all,                                                |
| 01:11:39   | but, you know, we'll have to see what happens there.                                                    |
| 01:11:41   | Yeah, I totally agree.                                                                                  |
| 01:11:43   | And I should have put that caveat in the beginning,                                                     |
| 01:11:45   | because honestly, when AI tells you something,                                                          |
| 01:11:47   | it probably is something it got from Stack Overflow.                                                    |
| 01:11:50   | It's not like there's a, there's an actual robot                                                        |
| 01:11:53   | inside AI that says, huh, how would I code that?                                                        |
| 01:11:55   | No, it's just grabbing from the massive library                                                         |
| 01:11:59   | of text it's indexed.                                                                                   |
| 01:12:00   | But the, my point I think is, and we're not there yet,                                                  |
| 01:12:03   | is I would like to see AI develop in a way                                                              |
| 01:12:06   | or the makers of things like shortcuts                                                                  |
| 01:12:10   | start to implement AI tools to help people get started                                                  |
| 01:12:14   | with making those types of tools.                                                                       |
| 01:12:16   | Like right now there isn't a thing where you can open shortcuts                                         |
| 01:12:19   | and say, make me a shortcut that turns on the lights,                                                   |
| 01:12:22   | you know, every day at sunset                                                                           |
| 01:12:24   | and then turns them off at 11 p.m., you know,                                                           |
| 01:12:28   | and then it builds it for you and puts the actions in.                                                  |
| 01:12:31   | That's the kind of thing I feel like could really help                                                  |
| 01:12:36   | adoption of shortcuts.                                                                                  |
| 01:12:38   | And, you know, two things would have to happen for that.                                                |
| 01:12:40   | Number one is it'd have to work reliably                                                                |
| 01:12:43   | and the actual shortcuts actions would need to be stable                                                |
| 01:12:46   | in order to consistently work.                                                                          |
| 01:12:48   | So there are hurdles to be overcome,                                                                    |
| 01:12:51   | but I feel like that is something headed our way.                                                       |
| 01:12:54   | And I can't imagine Apple is not experimenting with this.                                               |
| 01:12:57   | There are rumors that shortcuts is going to get a bunch of AI                                           |
| 01:13:00   | in the future, but I would like to see it be involved                                                   |
| 01:13:03   | with actual shortcut creation.                                                                          |
| 01:13:05   | Yeah, and I think, you know, like we can already see right now                                          |
| 01:13:08   | Apple is using AI locally on our devices                                                                |
| 01:13:12   | for the journal app.                                                                                    |
| 01:13:14   | So it's going through and it's looking at photos.                                                       |
| 01:13:17   | It's looking at music that you've listened to.                                                          |
| 01:13:19   | It's looking at your health history and going like,                                                     |
| 01:13:21   | oh, so you did some exercise here.                                                                      |
| 01:13:23   | And then it will use that information                                                                   |
| 01:13:25   | to intelligently suggest a journal entry for you.                                                       |
| 01:13:28   | And I think that this is the sort of thing                                                              |
| 01:13:30   | where it can really excel, you know,                                                                    |
| 01:13:33   | taking some data that you've given it                                                                   |
| 01:13:36   | or, you know, you're passively providing it with,                                                       |
| 01:13:39   | like you're not explicitly giving it to it                                                              |
| 01:13:41   | and just being like, hey, here's a thing.                                                               |
| 01:13:44   | So, you know, like when you swipe up into the app switcher                                              |
| 01:13:48   | and it suggests an app, like because of the time of day                                                 |
| 01:13:51   | and that you often open this app at this time of day                                                    |
| 01:13:53   | while you're in this focus mode.                                                                        |
| 01:13:55   | So this is the sort of thing that I think is becoming                                                   |
| 01:13:58   | really powerful.                                                                                        |
| 01:13:59   | And I would love to see, you know,                                                                      |
| 01:14:02   | some more of that sort of thing                                                                         |
| 01:14:06   | along with integrations for custom personal automations                                                 |
| 01:14:10   | with that.                                                                                              |
| 01:14:11   | So for example, the journal app doesn't have shortcut support.                                          |
| 01:14:13   | I love what they've done with it,                                                                       |
| 01:14:15   | but imagine what I could do                                                                             |
| 01:14:17   | if I had shortcut support for the journal app                                                           |
| 01:14:20   | so that I could grab a bunch of things                                                                  |
| 01:14:22   | like, you know, my time look entries from Timery                                                        |
| 01:14:25   | and then, you know, well, you know,                                                                     |
| 01:14:28   | because I have those, I could then create                                                               |
| 01:14:30   | some more tailored journal articles.                                                                    |
| 01:14:32   | As it is right now, what I'm seeing a bunch of folks doing                                              |
| 01:14:35   | is creating these things, putting it on their clipboard                                                 |
| 01:14:38   | and opening the journal apps so they can paste it in there.                                             |
| 01:14:41   | But there isn't an export feature.                                                                      |
| 01:14:43   | So I'm a little worried doing that right now, to be honest.                                             |
| 01:14:45   | But as it is, you know, there's definitely areas                                                        |
| 01:14:48   | for this stuff to really excel.                                                                         |
| 01:14:50   | And I feel like Apple's probably being smart                                                            |
| 01:14:52   | starting with stuff like journal                                                                        |
| 01:14:54   | and, you know, you can have do not disturb                                                              |
| 01:14:56   | automatically turn on and things like that.                                                             |
| 01:14:58   | That's the sort of thing where it doesn't seem                                                          |
| 01:15:01   | like it's AI in the sense that we know                                                                  |
| 01:15:03   | because it's not, you know, the big powerful like,                                                      |
| 01:15:06   | hey, I wrote you a worm piece.                                                                          |
| 01:15:08   | But it's as though a macaron is, you know,                                                              |
| 01:15:12   | a deity a baguette.                                                                                     |
| 01:15:14   | Don't ask, I'm making up random stuff here.                                                             |
| 01:15:16   | Like it's not that, but it's there.                                                                     |
| 01:15:19   | And I think the fact that they're starting small                                                        |
| 01:15:22   | shows that they're very aware of what happens                                                           |
| 01:15:24   | when your device doesn't work the way you expect it to                                                  |
| 01:15:26   | and how upsetting and frustrating and annoying that is.                                                 |
| 01:15:30   | And that they want to do this right.                                                                    |
| 01:15:32   | So I'm hoping we're going to see some really cool stuff                                                 |
| 01:15:35   | come out of that.                                                                                       |
| 01:15:36   | And yeah, it would be really nice to just find out,                                                     |
| 01:15:41   | you know, where all this is going.                                                                      |
| 01:15:43   | But as always, Apple reveal it in their own very good time.                                             |
| 01:15:47   | Yeah. Well, overall gang, I'd say the state of automation                                               |
| 01:15:51   | right now is pretty good.                                                                               |
| 01:15:52   | And it's a great time to start automating if you want to.                                               |
| 01:15:55   | If we try to bring you some good automation tips and useful                                             |
| 01:15:59   | actionable ideas every two weeks here on the automators podcast.                                        |
| 01:16:04   | We'd love to have you join us.                                                                          |
| 01:16:06   | So I want to thank our sponsors today, LinkedIn jobs and vitally.                                       |
| 01:16:09   | And we will see you next time.                                                                          |
| 01:16:11   | Bye folks.                                                                                              |
