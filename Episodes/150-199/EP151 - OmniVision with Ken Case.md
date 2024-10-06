---
status: "complete"
fc-date:
  year: 2024
  month: 04
  day: 05
fc-category: "podcast"
podcast: "Automators"
published: 2024-04-05
duration: 3888
formattedduration: "01:04:48"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Ken Case"]
notetype: "episode"
showpage: "http://relay.fm/automators/151"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators151.mp3"
episode: 151
title: "151: OmniVision with Ken Case"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Ken Case joins David Sparks and Rosemary Orchard to talk about automating all the things from the Omni Group, including OmniFocus on [[Apple Vision Pro]].

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Ken Case]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 151 Discussion](https://talk.automators.fm/t/151-omnivision-with-ken-case/17446)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post a job for free.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [The Omni Group](https://www.omnigroup.com/)
- [AppleScript 1-2-3 Sal Soghoian & Bill Cheeseman](https://books.apple.com/us/book/apple-training-series/id394135296)
- [OmniFocus Plug-In Collection](https://omni-automation.com/omnifocus/actions.html)
- [OmniFocus: App to App Automation](https://omni-automation.com/omnifocus/app-to-app.html)
- [Ken Case (@kcase@mastodon.social) - Mastodon](https://mastodon.social/@kcase)

# Transcription
  
| Time Index | Transcription                                                                                                       |
|:---------- |:------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the automation podcast where we talk about grabbing your                          |
| 00:07      | technology and encouraging it to do your bidding for you.                                                           |
| 00:10      | This is our post-Sequus Centennial episode, because we had some feedback from the last                              |
| 00:15      | episode, the 150th, apparently, Sequus Centennial, which is great, because I'm joined by my                         |
| 00:21      | pal David Sparks as always.                                                                                         |
| 00:22      | Hey, David, how are you?                                                                                            |
| 00:24      | Hey, Rose.                                                                                                          |
| 00:25      | Happy post Sequus Centennial Day, I guess.                                                                          |
| 00:30      | Yeah, well, I mean, it's a good show to be the 151st, because we're moving into the                                 |
| 00:37      | next round of what we're going to be doing with Automators and continuing on with recording                         |
| 00:41      | the show.                                                                                                           |
| 00:42      | And so we have brought somebody onto the show who's been doing things with automation and                           |
| 00:47      | [[Apple]] platforms for a very long time.                                                                               |
| 00:50      | Welcome back to the show, Ken Case.                                                                                 |
| 00:51      | Hi.                                                                                                                 |
| 00:52      | Thank you for inviting me.                                                                                          |
| 00:53      | It's great to be here.                                                                                              |
| 00:55      | Well, Ken, how could we avoid inviting you?                                                                         |
| 00:57      | I mean, you got your [[OmniFocus]] on Vision Pro ahead of [[Apple|Apple's]] [[Apple Reminders\|Reminders]].                                    |
| 01:03      | I mean, I love it.                                                                                                  |
| 01:05      | Yeah, so Ken is the head honcho over at the [[Omni Group]], your official title, right?                             |
| 01:12      | You have the hat that says head honcho on it.                                                                       |
| 01:16      | And Rose and I have talked in the past about how enthusiastic we are about the way you guys                         |
| 01:20      | have been embracing automation with the stuff you're doing.                                                         |
| 01:24      | So we thought it would be fun to have you on the show today to kind of talk through how                             |
| 01:28      | you see the automation picture in the [[Apple]] ecosystem.                                                              |
| 01:31      | We're going to talk about various platforms.                                                                        |
| 01:33      | We're going to talk some stuff about Omni apps.                                                                     |
| 01:35      | We're also going to talk about where Ken uses automation in his day-to-day stuff.                                   |
| 01:39      | And we really appreciate you taking the time to come in today.                                                      |
| 01:42      | Oh, it's always great to be talking with you, but thank you.                                                        |
| 01:46      | And in the bonus section for those members of Automator's Max, which is the ad-free                                 |
| 01:51      | extended version of the show, Ken has gone deep with the Vision Pro.                                                |
| 01:54      | He's got thoughts.                                                                                                  |
| 01:56      | We're going to be talking about that in Automator's Max today.                                                      |
| 01:59      | But let's start with automation, Ken.                                                                               |
| 02:03      | The question, one of the questions both Rose and I get a lot, because we talk about [[AppleScript]]                           |
| 02:07      | quite often on the show, because so often it is like the right tool for the job.                             |
| 02:12      | But people often ask me, should I bother learning [[AppleScript]] at this point?                                    |
| 02:18      | And I think that is something, it's an interesting question that has multiple answers.                              |
| 02:25      | But what is your thought on [[AppleScript]] here in 2024?                                                           |
| 02:28      | It is an interesting thought.                                                                                       |
| 02:31      | So it's not the, for some people, it's really easy to learn.                                                        |
| 02:36      | For other people, it just doesn't, it's not the way they think.                                                     |
| 02:40      | And so I think it kind of depends on whether you find it approachable or not, as to whether                         |
| 02:45      | it's worth digging into or not.                                                                                     |
| 02:47      | It's not, I don't feel like it's going away.                                                                        |
| 02:51      | There's certainly still things that you can only do in [[AppleScript]].                                             |
| 02:54      | There was an attempt, what, a decade ago to like, kind of re-skin it with some [[JavaScript]]                       |
| 02:59      | stuff.                                                                                                              |
| 03:00      | But really the [[JavaScript]] being applied to Apple events was not, it was kind of a mismatch.                     |
| 03:05      | And it didn't ever really, I think some people still use it that way.                                               |
| 03:08      | But I think the original, the [[AppleScript]] language is the native way to speak those                             |
| 03:15      | Apple events.                                                                                                       |
| 03:16      | And you can do more things actually with it that way than you can with the [[JavaScript]].                          |
| 03:20      | So nothing wrong with scripting in [[JavaScript]].                                                                  |
| 03:23      | We'll get to that later.                                                                                            |
| 03:24      | But yeah.                                                                                                           |
| 03:25      | I agree.                                                                                                            |
| 03:26      | I mean, honestly, first thing I would tell people is, well, it only works on the Mac.                               |
| 03:30      | So that's absolutely an important part.                                                                             |
| 03:32      | And if only [[Apple]] had like enabled Apple events in the early days of iOS, but you know, they                        |
| 03:38      | didn't.                                                                                                             |
| 03:39      | So it doesn't work there.                                                                                           |
| 03:41      | But in some ways, I tell people, the less experience you have programming, the more                                 |
| 03:47      | likely you are to like [[AppleScript]].                                                                             |
| 03:49      | I feel like traditionally trained programmers, it breaks their brains more than it does novices.                    |
| 03:56      | Because it's so different.                                                                                          |
| 03:58      | I agree.                                                                                                            |
| 03:59      | It's just not the way that programmers think.                                                                       |
| 04:03      | And so that's why there is such a temptation to, oh, maybe I should try this [[JavaScript]]                         |
| 04:07      | scripting of [[Apple]] instead.                                                                                         |
| 04:09      | As somebody who has tried both, yeah, I have encountered something which a few developers                           |
| 04:13      | kind of warned me about that for some reason, the [[JavaScript]] version of [[AppleScript]] doesn't                 |
| 04:18      | necessarily quite pick up on everything.                                                                            |
| 04:21      | Like there's just some things that work.                                                                            |
| 04:22      | If you write it in [[AppleScript]], it doesn't quite work in [[JavaScript]], which is a shame                       |
| 04:25      | because I use [[JavaScript]] in my day job.                                                                         |
| 04:27      | So it should be so easy.                                                                                            |
| 04:28      | But as it is, I just, I occasionally have to Google how to declare object in [[AppleScript]]                        |
| 04:33      | only to find somebody who's got a blog post telling me the correct way to solve the problem                         |
| 04:37      | that I'm actually trying to solve, which is not necessarily using, you know, weird arrays                           |
| 04:41      | or anything like that at all.                                                                                       |
| 04:43      | So yeah, it's good that it's there, but it is a shame that it's not on all the platforms.                           |
| 04:48      | Yeah, the other thing I always tell people is you don't need to turn learning [[AppleScript]]                       |
| 04:53      | into a career.                                                                                                      |
| 04:54      | You know, really all you need, get [[Sal Soghoian\|Sal's]] book, AppleScript 123.                                   |
| 04:58      | It's great.                                                                                                         |
| 04:59      | Like foundation.                                                                                                    |
| 05:00      | He's got some good scripts in there.                                                                                |
| 05:01      | And then you combine that with something like, you know, online resources like [[GitHub]] or                        |
| 05:08      | and, and honestly, at this point [[ChatGPT]], and you can probably put [[AppleScript]] together                     |
| 05:15      | as needed without encyclopedic knowledge of it.                                                                     |
| 05:18      | You just need to kind of understand the basics and between the, the AI and the existing corpus                      |
| 05:25      | out there and all these websites, you're probably going to be able to make what you                                 |
| 05:27      | need.                                                                                                               |
| 05:28      | I do that all the time.                                                                                             |
| 05:29      | I rarely write one from scratch.                                                                                    |
| 05:31      | I think that was part of how it was designed to write it.                                                           |
| 05:34      | The idea was not that you would have an encyclopedic knowledge of the language.                                     |
| 05:38      | It was that you would try to express things more in an English language.                                            |
| 05:43      | And that's why it rubs programmers in such a weird way sometimes.                                                   |
| 05:46      | Yeah, but, but I've always appreciated with [[Omni Group]] apps the way, especially back in                         |
| 05:51      | the day, you guys were there early with [[AppleScript]] support in your apps.                                       |
| 05:55      | And there were a lot of [[AppleScript\|AppleScripts]] I used to use in OmniFocus, you know, the kind of             |
| 06:01      | my, that's the app of yours that I use the most.                                                                    |
| 06:05      | And there were so many great scripts written by your team and people out in the world.                              |
| 06:11      | But that's kind of evolved.                                                                                         |
| 06:12      | We're going to get, we're going to get to that in a bit, but, but, but I just, I'm                                  |
| 06:16      | glad you kind of feel the same though.                                                                              |
| 06:17      | I don't think there's a certain element out there that says, well, [[AppleScript]], that's                          |
| 06:21      | old and don't bother.                                                                                               |
| 06:23      | It's not worth it, but I think there's still things that only [[AppleScript]] can do if you're                      |
| 06:27      | on the map.                                                                                                         |
| 06:28      | Some of those scripts, I think a lot of the scripts you're talking about, in fact, will                             |
| 06:32      | still run just fine on, on the Mac, but, but only running on the Mac, I think is the biggest                        |
| 06:37      | limitation that has driven us away from investing a lot more in [[AppleScript]] because, you know,                  |
| 06:42      | we're not only on the Mac anymore.                                                                                  |
| 06:44      | Yeah.                                                                                                               |
| 06:45      | And I've heard from multiple people inside [[Apple]] that talk about, yeah, they use it all                             |
| 06:49      | the time on their stuff.                                                                                            |
| 06:50      | And I mean, I, even though, you know, there's a part of me that feels like they're, I'm                             |
| 06:54      | sure there's a contingent at [[Apple]] that doesn't like this ancient scripting language in their                       |
| 06:58      | operating system.                                                                                                   |
| 06:59      | There's no way they can get rid of it.                                                                              |
| 07:01      | Not to mention it would take time and effort and money to get rid of it if they wanted.                             |
| 07:05      | So I think it's there for the long term.                                                                            |
| 07:07      | You don't have to worry about it, like getting deprecated suddenly and, and again with the                          |
| 07:12      | combination of web resources and AI, they're, I'm hearing from people all the time that                             |
| 07:17      | are putting together legitimate [[AppleScript\|AppleScripts]] who don't really know a lick of programming           |
| 07:22      | because of those resources.                                                                                         |
| 07:24      | Right.                                                                                                              |
| 07:25      | All right.                                                                                                          |
| 07:26      | Okay.                                                                                                               |
| 07:27      | That was, that was the, that was the grandfather of the group.                                                      |
| 07:30      | Yeah.                                                                                                               |
| 07:31      | And I mean, after, you know, after we had [[AppleScript]] for a very long time, we got workflow                     |
| 07:37      | and that actually already had integration with all the Omni apps because you were supporting                        |
| 07:41      | [[URL Schemes]] at the time for all of these things, which correct me if I'm wrong, but I believe      |
| 07:49      | URL screen schemes are actually still pretty important because they are part of how the                             |
| 07:53      | Omni apps communicate with each other via scripts, at least on iOS to, to pass information                          |
| 07:59      | around.                                                                                                             |
| 08:00      | Aren't they?                                                                                                        |
| 08:01      | Yeah.                                                                                                               |
| 08:02      | So when we, you know, first brought our apps to iOS or specifically when we brought [[OmniFocus]]                   |
| 08:06      | to the iPhone for the App Store launch, we knew right away that people would want                                   |
| 08:11      | to be able to capture stuff from like the web page they were looking at and send it                                 |
| 08:15      | to their inbox and do the same sort of things they were doing on the Mac and we didn't have                         |
| 08:18      | [[AppleScript]].                                                                                                    |
| 08:19      | So we had to think, well, how are we going to handle this?                                                          |
| 08:22      | And so right there from day one, we included a little [[URL Schemes\|URL scheme]] to say, all right, I want         |
| 08:27      | to add this thing to my inbox and then you could add a shortcut to [[Safari]] on your iPhone                            |
| 08:33      | that would call that thing and send the current page's URL over to it.                                              |
| 08:38      | And then over time as the, you know, that was, that still your several years down the                               |
| 08:44      | road ended up still being the only way that iOS apps could talk to each other.                                      |
| 08:47      | And so, of course, when the people started developing more options in that ecosystem                                |
| 08:54      | where maybe you'd want to have something get called back with the results, you'd call                               |
| 08:57      | from one app to another.                                                                                            |
| 08:58      | And so we had these [[x-callback-url\|callback URLs]] and then that's what [[Workflow]] started building their      |
| 09:02      | stuff on, which then eventually became shortcuts and yeah, but of course at this point, [[Shortcuts]]               |
| 09:11      | now has much richer ways of integrating with apps.                                                                  |
| 09:13      | Apps can build their own extensions that run real code instead of just writing parsing                              |
| 09:19      | URLs back and forth.                                                                                                |
| 09:21      | But that's something that you can use to talk with shortcuts.                                                       |
| 09:24      | It's not something you can use to talk between your own apps very easily.                                           |
| 09:27      | And so, yes, we do still use our URLs for that.                                                                     |
| 09:30      | Yeah, and of course, because the way that the Omni apps work, you know, it's not that                               |
| 09:35      | all of my data is stored on the Omni servers, you know, I can use [[OmniSync]] to, you know,                        |
| 09:40      | sync my [[OmniFocus]] database around and even store files and so on, but I don't have to                           |
| 09:44      | use that.                                                                                                           |
| 09:45      | So you do have to be creative perhaps with the way that you connect things together.                                |
| 09:50      | But I think that that also has forced you to think outside of the box because I know,                               |
| 09:54      | you know, before we really had shortcuts back when we still had workflow, there were examples                       |
| 10:02      | of [[Python]] scripts to create projects from templates using a [[Taskpaper]] format on iOS.                        |
| 10:10      | It was using, I think it was the [[Editorial]] app for iOS.                                                         |
| 10:15      | And I remember seeing that and going like I was already like firmly like I need Omni                                |
| 10:20      | Focus in my life and using it at that point, but then it was like, okay, they've taken                              |
| 10:26      | the standard and then they've added scripting, they've written the script and they're just                          |
| 10:30      | giving it to me so that I can do all of these things which I've been trying to do.                                  |
| 10:33      | This is perfect.                                                                                                    |
| 10:34      | I love it.                                                                                                          |
| 10:35      | And, you know, I think, you know, there's been so much scripting around for such a long                             |
| 10:41      | time that it's really nice to see the support for shortcuts and so on that you've added                             |
| 10:45      | where, for example, especially with [[OmniFocus]], they've added the new shortcuts style of actions                 |
| 10:52      | recently which allow you to get data into shortcuts and then parse it and use it and                                |
| 10:57      | then, you know, potentially send it back so I can get a list of my projects out of Omni                             |
| 11:01      | Focus if I want to, to use with everything else, which, you know, I think the whole point                           |
| 11:05      | of automation and scripting is that nothing has to be an island anymore.                                            |
| 11:09      | You can integrate everything with everything else, you know, Omni Group doesn't necessarily                         |
| 11:14      | have to know about, you know, all the weird systems that I'm using at work for me to write                          |
| 11:18      | a shortcut that pulls some information out of [[OmniFocus]] and, ta-da, magic happens or                            |
| 11:23      | click a button and these three things get pulled together and turned into my [[OmniFocus]]                          |
| 11:27      | task which, thanks to your shortcut support in particular, which works on macOS as well                             |
| 11:32      | as iOS.                                                                                                             |
| 11:33      | And thank you for that.                                                                                             |
| 11:34      | I really appreciate that.                                                                                           |
| 11:35      | You know, I can do all of that.                                                                                     |
| 11:37      | And I think that that's where shortcuts coming to the Mac in particular has definitely helped                       |
| 11:41      | us because, you know, previously it was [[AppleScript]] on the Mac, [[Shortcuts]] on iOS and iPad.                  |
| 11:47      | And you know, it was an either or kind of situation and now we're getting to the point                              |
| 11:51      | where [[Shortcuts]] is everywhere and [[AppleScript]] is still stuck on the Mac, but then you've                    |
| 11:54      | added your own scripting on top of this, which we can then use within the application and                           |
| 11:59      | even between the applications to really control anything you want, it feels like.                                   |
| 12:07      | Every time I look at Omni Automation and what you've been adding, it feels like you've                              |
| 12:10      | just added like a whole new feature set.                                                                            |
| 12:12      | And it's not like, you know, a tiny thin one.                                                                       |
| 12:14      | It's, you know, the entire Encyclopaedia Britannica has just been added as an addendum to the                       |
| 12:18      | library that's already there of features, which is very, very cool.                                                 |
| 12:22      | I'm glad you're enjoying it.                                                                                        |
| 12:24      | Yeah.                                                                                                               |
| 12:25      | It's really fun to, I mean, it's always been fun to integrate with automation technologies                          |
| 12:29      | whether it was [[AppleScript]] or URLs or shortcuts, but that it's also fun to have something built                 |
| 12:36      | into our apps where we know we can rely on it being available wherever we're able to                                |
| 12:40      | take it.                                                                                                            |
| 12:41      | And in this case, since we're building it on top of [[Apple|Apple's]] [[JavaScript Core]] framework,                          |
| 12:47      | anywhere that [[JavaScript Core]] is available to us, we've tried to make the same stuff                            |
| 12:51      | as available within the app for automation.                                                                         |
| 12:54      | And that means we can expose all of our, you know, like for [[OmniFocus]], we will expose projects                  |
| 12:59      | and perspectives and tags and so on.                                                                                |
| 13:02      | They all have, turn into objects in [[JavaScript]] land and then you can just work with them.                       |
| 13:07      | That is a model that programmers feel much more comfortable with, but I know it's very                              |
| 13:11      | intimidating for people who are not programmers.                                                                    |
| 13:13      | So we, you know, while we think it's important to have those levels of automation, really                           |
| 13:19      | a lot of automation is also about just thinking about ways to expose, to make life simpler                          |
| 13:25      | for people whether or not they know how to write any code.                                                          |
| 13:29      | And so things like building your own custom perspectives or starting out with some built-in                         |
| 13:34      | perspectives that have a few useful things and you can just select between them.                                    |
| 13:37      | That's a form of automation that we had all of the same data in [[OmniFocus]] 1, but it didn't                      |
| 13:42      | have all those perspectives until 1.5 and then they got a lot much richer when we added                             |
| 13:47      | perspective rules in version 3 and then we just, we're in the process of adding another                             |
| 13:51      | round of rules right now for [[OmniFocus]] 4.2 and exposing them to [[JavaScript]] automation                       |
| 13:57      | at the same time.                                                                                                   |
| 13:58      | It's, yeah, it's a lot of fun.                                                                                      |
| 14:00      | See how this all can build on itself.                                                                               |
| 14:02      | Yeah.                                                                                                               |
| 14:03      | The well runs deep, you know, and the thing is that gives users so much power, right?                               |
| 14:10      | And I guess you're right.                                                                                           |
| 14:11      | Let's break it down on level there because I do want to talk more about Omni Automation                             |
| 14:16      | because that was a very interesting decision when I heard you were doing it.                                        |
| 14:20      | I was like, wow, you bit off a lot with that, but before I get into that, the idea that                             |
| 14:25      | I don't need to learn [[JavaScript]], but I can program your app to a certain extent and custom                     |
| 14:30      | perspectives are for most people, I think super powerful, right?                                                    |
| 14:35      | I mean, for me, I know that like I have a bunch of crazy ones and I make them sometimes                             |
| 14:41      | as disposable and sometimes I make them and I use them for years, but you have a lot of                             |
| 14:46      | sliders and buttons in there where you can really kind of like tune in what you want                                |
| 14:51      | to do with your automation.                                                                                         |
| 14:54      | And that is something that the users get kind of out of the gate.                                                   |
| 14:59      | And it reminds me of the problem with task managers.                                                                |
| 15:02      | People say, well, there's so many different task managers, but nothing does what I want                             |
| 15:05      | to do.                                                                                                              |
| 15:06      | So you guys kind of took the approach of, well, we'll let you make it the way you want                              |
| 15:10      | it.                                                                                                                 |
| 15:11      | At least that's my impression from the outside.                                                                     |
| 15:14      | Yeah.                                                                                                               |
| 15:15      | Well, obviously we started with the [[OmniOutliner\|Outliner]] that was just sort of generic and it was being       |
| 15:19      | scripted in order to turn it into this stuff that Ethan had taken it and built his own                              |
| 15:24      | set of scripts around it and Kirk Clifton had done the same and they were automating                                |
| 15:28      | one of our outlining tool to start doing their task management.                                                     |
| 15:32      | And the whole reason we kind of came to building [[OmniFocus]] as we realised, well, we could either                |
| 15:37      | try to make [[OmniOutliner]] just a better host for all of this automation and we did a bit                         |
| 15:41      | of that.                                                                                                            |
| 15:42      | We made it more efficient and so on.                                                                                |
| 15:43      | Or maybe we could do a more batteries included kind of approach where it's already set up.                          |
| 15:47      | You just sit down, you start plugging in your tasks and it already has these different                              |
| 15:50      | inputs in it.                                                                                                       |
| 15:51      | Yeah.                                                                                                               |
| 15:52      | Well, I think you made the right decision for sure there, but I do also think that that's                           |
| 16:00      | a piece of it that I don't think people appreciate.                                                                 |
| 16:03      | Like when I think about my own, because I've been thinking a lot lately about my own thoughts                       |
| 16:07      | on task managers and it's really evolved over the years and where I started, like I was                             |
| 16:12      | all in with David Allen and getting things done.                                                                    |
| 16:15      | And now there's very little of that that I use, but OmniFocus can still adjust to the                               |
| 16:21      | way I use it because of that flexibility.                                                                           |
| 16:26      | But then you decide, now I want to switch over to Omni Automation because we had a situation.                       |
| 16:34      | [[AppleScript]] is great only on the Mac.                                                                           |
| 16:37      | The mobile platforms are increasingly important, especially with something like task management.                    |
| 16:42      | But you guys don't really have a solution, you know, shortcuts is good to a certain extent,                         |
| 16:48      | but it doesn't give you the system access that you would prefer.                                                    |
| 16:52      | And you're like, well, let's just roll our own automation scheme.                                                   |
| 16:55      | I mean, how did, was that like, how did we even come to that decision?                                              |
| 17:02      | Well we wanted to do more of the automation stuff that we were doing on the Mac, but be                             |
| 17:06      | able to do it everywhere.                                                                                           |
| 17:08      | We started thinking about, well, how, what's the right environment to do that?                                      |
| 17:12      | We looked at, you know, maybe doing [[Python]], maybe, you know, different languages that                           |
| 17:17      | people are using.                                                                                                   |
| 17:18      | [[Python]] certainly is a nice approachable language for a lot of people.                                           |
| 17:21      | But the number one language, and at the time at least when we were doing our research,                              |
| 17:25      | that the most people knew how to use was [[JavaScript]] because of the web.                                         |
| 17:30      | So yeah, well, let's, let's go ahead and use, and use [[JavaScript]].                                               |
| 17:35      | And one of the advantages of [[JavaScript]] was that [[Apple]] has a built-in implementation,                           |
| 17:38      | of course, also because of the web that was available on their platforms that we could                              |
| 17:43      | build on top of.                                                                                                    |
| 17:44      | So they have [[JavaScript Core]] where they have done a lot of performance work to make sure                        |
| 17:48      | it runs very, very fast.                                                                                            |
| 17:51      | And so you don't even have to feel like you're using, like, when we started rebuilding our,                         |
| 17:56      | some of the sample scripts that we had that were written in [[AppleScript]] previously, and                         |
| 18:00      | now they were written in Omni Automation [[JavaScript]], they would often run 10 times faster or more               |
| 18:06      | because we didn't have to talk to another process across this, this bridge and so on.                               |
| 18:12      | And that ends up opening the door to a lot more applications when the code you're running                           |
| 18:16      | just runs faster, you feel a lot more comfortable using it to do things like, oh, I'm going                         |
| 18:20      | to scan for all of these tasks.                                                                                     |
| 18:23      | Yeah.                                                                                                               |
| 18:24      | Yeah.                                                                                                               |
| 18:25      | Or like me, I have a script that, you know, every so often I'm using an iPhone that's                               |
| 18:28      | just running the script like every 15 minutes or so to just process all of my inbox tasks,                          |
| 18:34      | which I mean, I've got a confession to make folks, I've got 120 items in my inbox right                             |
| 18:40      | now, I'm sorry, but it still runs lightning fast, even though it's processing every single                          |
| 18:46      | one of those 120 items looking to see if it can automatically categorise and file those                             |
| 18:50      | away for me, which is great.                                                                                        |
| 18:52      | And one of the things that, you know, I'm really appreciating about Omni Automation,                                |
| 18:55      | obviously, I'm a web developer, so I can write [[JavaScript]], but a lot of the time I'll open                      |
| 19:01      | the Omni Automation site and I'll just have a look at, you know, the sample scripts and                             |
| 19:05      | so on that are there.                                                                                               |
| 19:07      | And there's a pretty good chance that I'm going to find something that's either exactly                             |
| 19:10      | what I'm looking for or like 18, 90% of the way to what I'm looking for there already,                              |
| 19:15      | because obviously, you know, Sal has been working with you and writing a whole bunch                                |
| 19:19      | of these scripts.                                                                                                   |
| 19:20      | And I'm sure some of the scripts have come from, you know, people like yourself inside                              |
| 19:23      | of [[Omni Group]].                                                                                                  |
| 19:24      | But there's also, you know, I see people asking in the Omni [[Slack]] as well for things all the                    |
| 19:27      | time and finding, oh, here's how I do that, and here's my script, ta-da.                                            |
| 19:32      | And I find that, you know, the fact that there's a community around this as well, just like,                        |
| 19:37      | you know, [[Drafts]], another iOS and macOS app also has [[JavaScript]] scripting.                                  |
| 19:41      | They have a little community where they're sharing actions and so on as well.                                       |
| 19:44      | I find that there's, you know, there's a good overlap there with what other people want                             |
| 19:48      | and what you want, which then, you know, ends up with, you know, a completely customisable                          |
| 19:53      | system, you know, with, you know, scripting that doesn't feel like I actually need to                               |
| 19:58      | write code about 90% of the time, I'd say, like, and the other 10% is because I'm a weirdo                          |
| 20:03      | and I like writing code.                                                                                            |
| 20:04      | I don't feel like I have to write it to, you know, do the things that I want or need to                             |
| 20:09      | do to just, you know, take advantage of the cool features that are there.                                           |
| 20:13      | Well, it's fun to see the way that people in the community have built on top of this                                |
| 20:17      | and built their own things and started hooking things up to other places, started hooking                           |
| 20:21      | up Omni Automation to [[ChatGPT]], feeding it the definitions and then asking [[ChatGPT]] to                        |
| 20:27      | generate this plugin for them and then [[ChatGPT]] will do 90% of it.                                               |
| 20:33      | Sometimes the whole thing and it's crazy.                                                                           |
| 20:35      | Yeah.                                                                                                               |
| 20:36      | It's, it's really, it's really impressive, Ken.                                                                     |
| 20:40      | And I mean, the reason we are such fans of the [[Omni Group]] is because of you guys zigging                        |
| 20:45      | where we're all zigzagging.                                                                                         |
| 20:47      | I feel like right now a lot of the movement, especially on mobile is on interface design.                           |
| 20:52      | There's a lot of people exploring a great one that stands out in my mind is [[Carrot Weather]],                     |
| 20:57      | like build your own interface kind of app.                                                                          |
| 20:59      | And I think that's great.                                                                                           |
| 21:00      | And I think people really like that.                                                                                |
| 21:02      | But you guys found a way to make your apps and it's not just [[OmniFocus]].                                         |
| 21:09      | I think at this point it's [[OmniOutliner]], [[OmniGraffle]], I think is [[OmniPlan]] on this                       |
| 21:14      | [[JavaScript]] as well.                                                                                             |
| 21:15      | Yeah.                                                                                                               |
| 21:16      | You've got all your apps and you've made them almost infinitely addressable.                                        |
| 21:22      | I would say even more addressable than they were with [[AppleScript]], but where you create                         |
| 21:28      | an automation that installs across all [[Apple]] platforms and it's just, it's something to                             |
| 21:34      | behold as someone who makes the Automators podcast, of course I love it.                                            |
| 21:37      | But I think that I'm not sure it sunk in for everybody that like, if you've got this app                            |
| 21:43      | and there's a feature you want, you are a couple of Google searches away from probably                              |
| 21:48      | finding it already built and it's just, you just add the features that you want.                                    |
| 21:53      | I have customised my [[OmniFocus]] install.                                                                         |
| 21:56      | I haven't gone completely over the deep end with it, but there's like seven or eight that                           |
| 22:00      | I use that make the app better.                                                                                     |
| 22:03      | And I just, you know, that's really impressive.                                                                     |
| 22:05      | And as an automator, we all really appreciate the amount of work that must have taken to                            |
| 22:10      | get there.                                                                                                          |
| 22:11      | Oh, thank you.                                                                                                      |
| 22:13      | It's, again, it's really rewarding to work on this stuff.                                                           |
| 22:16      | It, especially when we see how it makes a difference in people's lives.                                             |
| 22:21      | And when we watch things and we see the kinds of friction that they, that people are running                        |
| 22:26      | into when they're using an app or when they're trying to run some automation.                                       |
| 22:30      | You know, I remember, Rosemary, you mentioned earlier that back in the early days of our                            |
| 22:37      | URL automation on the iPhone, you know, that we had written this script that would talk                             |
| 22:41      | to editorial and fill out a whole project and then set it over to [[OmniFocus]] at one.                             |
| 22:46      | But what that was born from was seeing somebody else write a script that would send one task                        |
| 22:51      | at a time because that was the URL support that we had was that original capture of I'm                             |
| 22:55      | going to add one thing and then they would have to do it again.                                                     |
| 22:58      | And we added callback support so you could get back to the original app, but then it                                |
| 23:00      | would flip back and forth from one app to the other for every task it was trying to                                 |
| 23:03      | add.                                                                                                                |
| 23:04      | So, when I tried that out or saw the movie of that, I'm like, oh, we can make this so                               |
| 23:09      | much better.                                                                                                        |
| 23:10      | Let's just make a mode where you can add a whole [[Taskpaper]] set of input or tasks all                            |
| 23:14      | at once and do that.                                                                                                |
| 23:16      | And, you know, that same sort of thing happens, still happens today, like when we started                           |
| 23:21      | looking at Omni Automation on the [[Apple Vision Pro]], we realised, oh, it's really awkward                            |
| 23:26      | to download something from the Omni-automation website and one of these plug-ins and try                            |
| 23:31      | to, you know, it ends up in your downloads folder and then you have to go to the files                              |
| 23:35      | app and you have to open it and all of this sort of mess there.                                                     |
| 23:38      | And so we just added a, you know, another [[URL Schemes\|URL scheme]] for this that says, open this                 |
| 23:43      | URL plug-in and go straight for the install logic where, you know, you get the approval                             |
| 23:49      | prompts and everything else that we did before.                                                                     |
| 23:51      | We don't want people to accidentally open a plug-in and install some virus or something.                            |
| 23:57      | But it just makes it so much easier and whenever we see those sorts of awkward things.                              |
| 24:04      | So those are the kinds of sharp edges that we're trying to polish down.                                             |
| 24:08      | Yeah.                                                                                                               |
| 24:09      | I mean, what I find really interesting as well is, you know, seeing what problems other                             |
| 24:13      | people are trying to solve in [[OmniFocus]] and how they're trying to solve them.                                   |
| 24:17      | And one of the, or two of the scripts actually that continually fascinate me around [[OmniFocus]]                   |
| 24:21      | are the [[Eisenhower Matrix]] and the [[Kanban]] views, where people are essentially, you know, having              |
| 24:29      | a script create multiple [[OmniFocus]] windows so that they can move tasks into a particular                        |
| 24:34      | window to represent like a column in the [[Kanban]] view or a quadrant in the [[Eisenhower Matrix]].                |
| 24:40      | And I found that really interesting because that is not how I see and process a lot of                              |
| 24:43      | my tasks, but it sounds to me like, you know, that because I also remember the good old                             |
| 24:49      | days of running a [[URL Schemes\|URL scheme]] and you'd like just press it and then you'd sit back and              |
| 24:54      | try not to touch your device for the entire time because it was flicking back and forth                             |
| 24:57      | between like, you know, three applications 17 times and then finally it would come back                             |
| 25:01      | and say it was done.                                                                                                |
| 25:03      | But it sounds like you're seeing, you know, what people are solving with this and, you                              |
| 25:07      | know, looking for ways to make everything better potentially even then adding features                              |
| 25:12      | into [[OmniFocus]] itself and all of the other apps as well as a result of what people are                          |
| 25:17      | scripting.                                                                                                          |
| 25:18      | Absolutely.                                                                                                         |
| 25:21      | In 4.2, which is currently in [[TestFlight]], [[OmniFocus]] 4.2, we added a, we saw that one                        |
| 25:26      | of the things that people often wanted to do was to filter things by date and the only                              |
| 25:31      | way to do that in earlier versions, like you just wanted a perspective that showed you                              |
| 25:35      | things that were, that were passed due, sorry, that had been deferred in the past and then                          |
| 25:42      | had fallen off of your forecast because they were no longer forward looking, you had to                             |
| 25:45      | write a script that would go through your database and find all those tasks and instead                             |
| 25:49      | now we just added a perspective rule that says, okay, well, you can search for any date,                            |
| 25:53      | from any date field between any set of date ranges and so then you can write a simple                               |
| 25:58      | rule that's much more efficient and lets you go straight to that list of tasks.                                     |
| 26:05      | But at the same time, we, you know, we wanted to open the door so that people who were doing                        |
| 26:12      | automation with perspectives could make that even easier, so we added a notion of scripting                         |
| 26:19      | the rules in a perspective so you can say, okay, well, here are the projects that I want                            |
| 26:22      | to see in a perspective or something, have your play and do that directly.                                          |
| 26:26      | Are those dates relative as well?                                                                                   |
| 26:28      | Will you deal with them?                                                                                            |
| 26:29      | Yeah, those dates are relative or they actually use the same smart date input that we use,                          |
| 26:35      | you know, in like quick entry and so on, so you can say, I want to see all of the things                            |
| 26:39      | from last Monday to next Thursday or whatever and give it that window.                                              |
| 26:43      | All right, well, I just got off the beta train and now I'm getting back on.                                         |
| 26:49      | Yeah, I'm discovering right now the Tesla on my Mac is just crashing and says it can't                              |
| 26:54      | connect to [[App Store Connect]], so I'm going to have to make sure that I'm running the                            |
| 26:57      | latest version again later.                                                                                         |
| 26:59      | But yeah, it's one of these things where, you know, I know that the way that the Omni                               |
| 27:03      | Group handles feature requests is something that some people don't really appreciate,                               |
| 27:08      | but as somebody who also deals with feature requests, I appreciate it because you don't                             |
| 27:12      | just have like a public board where everybody puts up their feature requests and then, you                          |
| 27:16      | know, people just go, yes, me too.                                                                                  |
| 27:18      | It's, you know, you actually request that people email the support folks because sometimes                          |
| 27:22      | I'm guessing the answer is actually, oh, that is a feature.                                                         |
| 27:25      | You can already do that right now.                                                                                  |
| 27:26      | It's a checkbox in the preferences, but then you collect them internally so that you have,                          |
| 27:31      | you know, your list of features that you can work on.                                                               |
| 27:34      | And so the fact that you have that and then you're combining it with, you know, what people                         |
| 27:38      | are doing through automation and what people are trying to do through automation as well.                           |
| 27:43      | You know, there's, one of the scripts I'm seeing here is adding a [[FaceTime]] task and                                 |
| 27:47      | I'm there going, okay, that could be potentially useful for me, but I don't necessarily need                        |
| 27:51      | a [[FaceTime]] task.                                                                                                    |
| 27:53      | Maybe I need, you know, a [[Zoom]] task.                                                                            |
| 27:54      | Well, you know, [[Zoom\|Zoom's]] got an API, I could look at, you know, integrating with that potentially,          |
| 27:59      | you know, and maybe at some point, if there were enough demand for it, I can't imagine                              |
| 28:03      | that a huge number of people would want Zoom integration with [[OmniFocus]].                                        |
| 28:07      | That seems a little bit weird, but, you know, maybe, you know, if enough people wanted it,                          |
| 28:11      | then, you know, I guess that's something that you could consider.                                                   |
| 28:14      | But as it is, you know, there's so many things right now, especially with the rise of AI and                        |
| 28:18      | [[ChatGPT]] that people are, I guess, constantly going like, oh, right, so I want a packing                         |
| 28:23      | list, but I don't want to write a packing list.                                                                     |
| 28:25      | Well, maybe I can get [[ChatGPT]] to write me a packing list for this place, you know, and                          |
| 28:30      | if it puts bananas on the packing list, at least you can blame [[ChatGPT]] rather than [[OmniFocus]]                |
| 28:34      | itself, right?                                                                                                      |
| 28:36      | This episode of Automators is brought to you by LinkedIn Jobs.                                                      |
| 28:41      | When you're hiring for your small business, you want to find quality professionals that                             |
| 28:44      | are right for the role.                                                                                             |
| 28:45      | That's where you have to check out LinkedIn Jobs.                                                                   |
| 28:48      | LinkedIn Jobs has the right tools to help you find the right professionals for your                                 |
| 28:51      | team faster and for free.                                                                                           |
| 28:54      | When I've been looking for a new job or potentially looking at somebody who might be hired for                      |
| 28:58      | a role, then it's always really important to find out not just who they are on paper,                               |
| 29:03      | but a little bit more about them and places where they've worked before.                                            |
| 29:07      | LinkedIn isn't just another job board.                                                                              |
| 29:09      | It has a vast network of more than a billion professionals, which makes it the best place                           |
| 29:12      | to hire.                                                                                                            |
| 29:14      | Hiring is easy when you have that many quality candidates.                                                          |
| 29:16      | So easy, in fact, that 86% of small businesses get a qualified candidate within 24 hours.                           |
| 29:22      | LinkedIn also knows that small businesses are wearing so many hats and might not have                               |
| 29:25      | the time or resources to hire.                                                                                      |
| 29:27      | That's why they're constantly finding ways to make the process easier.                                              |
| 29:30      | They even just launched a feature that helps you write job descriptions, making the process                         |
| 29:34      | even easier and quicker.                                                                                            |
| 29:36      | It's easy to see why 2.5 million small businesses use LinkedIn for hiring.                                          |
| 29:40      | Post your job for free at linkedin.com/automators.                                                                  |
| 29:44      | That's linkedin.com/automators to post your job for free terms and conditions apply.                                |
| 29:52      | So Rose talked about AI before the break, and I know that's something that you guys                                 |
| 29:57      | are interested in over there, but you've got this existing automation model.                                        |
| 30:04      | What are your thoughts on it in terms of the types of software that you make of the [[Omni Group]],                 |
| 30:07      | and do you see that as a future automation tool?                                                                    |
| 30:12      | It's absolutely.                                                                                                    |
| 30:13      | It's a great tool for a lot of things.                                                                              |
| 30:15      | At the same time, I don't know about everybody else.                                                                |
| 30:21      | Certainly I'm pretty privacy conscious, and so one of the concerns that I have when I                               |
| 30:27      | whenever I'm thinking about tools like [[ChatGPT]] is, what's happening to this information that                    |
| 30:32      | I'm feeding it?                                                                                                     |
| 30:33      | Where is it going?                                                                                                  |
| 30:34      | Who's keeping it?                                                                                                   |
| 30:35      | How is it?                                                                                                          |
| 30:36      | It's somebody else's computer.                                                                                      |
| 30:38      | So I really actually love the work that the community is now putting into tools like                                |
| 30:45      | Lama and being able to host your own local AI engine, I guess, and talk to that.                                    |
| 30:54      | You give it your own data, it doesn't go to the cloud, and then working on what you do.                             |
| 30:58      | It stays on your local machine, and people have now built [[ChatGPT\|ChatGPT-like]] API interfaces                  |
| 31:07      | to it, so you can use the exact same API calls to your local device that you would have used                        |
| 31:12      | to [[ChatGPT]], and then talk to these local models instead of talking to a model that is on somebody               |
| 31:19      | else's computer.                                                                                                    |
| 31:20      | But that said, setting that question aside, because again, it's not relevant to everybody.                          |
| 31:28      | I think there is a lot of power around just being able to ask a question, get an answer.                            |
| 31:36      | It might not be right, but a Google search might not be right either.                                               |
| 31:39      | It might send you a StackOverflow page that has a bunch of out-of-date information or                               |
| 31:44      | just wrong information, and AI will do the same thing sometimes.                                                    |
| 31:49      | It's not a genie, but sometimes it will give you the inspiration you need, or the next                              |
| 31:56      | step toward the problem that you're working on, and it makes sense to leverage that.                                |
| 32:00      | Yeah.                                                                                                               |
| 32:01      | I keep referring to it as an intern.                                                                                |
| 32:03      | It gives you an intern level answer, but you don't want to necessarily hit send after                               |
| 32:09      | the intern writes the answer.                                                                                       |
| 32:11      | A little like supervising a self-driving car, you don't want to give it full control, but                           |
| 32:16      | it's okay for it to maybe maintain a following distance, although the AI email response is                          |
| 32:21      | less likely to kill you, that there is that.                                                                        |
| 32:23      | That's right.                                                                                                       |
| 32:24      | Yeah, but at the same time, if you don't proofread the packing lists that [[ChatGPT]] spits out                     |
| 32:29      | and you just blindly follow it, and you pack bananas, but you don't pack underwear, that                            |
| 32:33      | feels like that could end up being a little bit of a problem when you get to wherever                               |
| 32:37      | it is you're going.                                                                                                 |
| 32:39      | Packing lists in particular are very important to me right now, because I was literally building                    |
| 32:43      | one before we sat down to record the show, because I need to do some travel in the next                             |
| 32:47      | couple of weeks, and the fact that I can use the automations to do that, and then what                              |
| 32:52      | I've been doing, and I don't know how common this is with folks, so I've been pulling or                            |
| 32:57      | experimenting with pulling my packing lists out of [[OmniFocus]] and putting them into [[OmniOutliner]],            |
| 33:04      | because then I have an [[OmniOutliner]] file that I can save and reuse, obviously, again and                        |
| 33:08      | reference back to, but not only that, I also don't have 48 different tasks that are due                             |
| 33:15      | tomorrow or whenever it is in [[OmniFocus]], because the thing that's really due is packing.                        |
| 33:21      | The fact that I need to pack this battery pack and that charger and socks or whatever,                              |
| 33:27      | I don't need the individual detail of those three, but the interoperability between these                           |
| 33:33      | has been, for me, incredibly useful, and I'm imagining it is for other folks as well.                               |
| 33:37      | I don't know if other folks are also doing the packing list approach in [[OmniOutliner]].                           |
| 33:42      | It's an approach, but yeah, I know that there's a lot of connections that you've built between                      |
| 33:47      | them.                                                                                                               |
| 33:48      | Has anybody done a thing completely crazy like, well, I say crazy, I mean good crazy,                               |
| 33:52      | like build a visual representation of their task system in [[OmniGraffle]] through Omni Automation                  |
| 33:59      | yet?                                                                                                                |
| 34:00      | Is that something people are trying, or are they just experimenting with all the cool                               |
| 34:04      | things out there?                                                                                                   |
| 34:05      | That's a good question, I don't know whether anybody has done that or not, I have not seen                          |
| 34:10      | that specifically.                                                                                                  |
| 34:11      | I have seen people map their [[OmniFocus]] data to a Gantt chart and [[OmniPlan]].                                  |
| 34:17      | I have seen, yeah, I usually look at it at the lower level where I will take the [[OmniFocus]]                      |
| 34:24      | sync transactions that are, you know, this sort of graph of this device did this change                             |
| 34:28      | and this other device that changed, and I'm trying to work that out, and I'll take that                             |
| 34:31      | and I'll visualise it in [[OmniGraffle]], and I use automation to do that, you know, it's                           |
| 34:35      | a, I have a script that runs and then it generates some output in the dot format, which then,                       |
| 34:44      | the graph fits format, which then [[OmniGraffle]] opens and then I can annotate it and work                         |
| 34:47      | with it there.                                                                                                      |
| 34:48      | I do think there's a huge opportunity though for AI to help with task management.                                   |
| 34:53      | I think a lot of people suffer because they have too much, they feel defeated by it and                             |
| 35:01      | they're fighting a losing battle, and to me, a lot of it is this idea of pull versus push                           |
| 35:06      | based productivity where people think that they have to do what their task manager tells                            |
| 35:12      | them to do and then they just feel defeated, and you know, I think AI, and in a future                              |
| 35:17      | where [[Apple]] has AI baked into the operating system giving you what you need without sending                         |
| 35:23      | a user to the cloud, I could see like that kind of data about where it was generated,                               |
| 35:28      | when it was done, how long it's been sitting there, becoming a super useful tool for people                         |
| 35:32      | to say, you know, you're not going to do all this stuff, but here's three things that                               |
| 35:35      | we think you probably would really want to do today, and like just do that for me, and                              |
| 35:42      | especially if it can work with calendar data at the same time, they say, oh, I see you                              |
| 35:45      | have, you know, some availability, why don't you knock off two or three of these big ones                           |
| 35:50      | with the large time estimates and we'll go ahead and create a block for you.                                        |
| 35:54      | I mean, I could see this stuff really helping people in a way that a lot of task management                         |
| 36:01      | just can't yet, and I think there's a lot of angst out there with people and task management                        |
| 36:07      | because of that, so much so that they kind of give up on it and they suffer because then                            |
| 36:11      | they don't spend their time doing the right things, and so I really do feel like you guys                           |
| 36:16      | building everything in [[SwiftUI]], kind of going all in, gives you the ability hopefully to                        |
| 36:22      | take advantage of that when those tools arrive.                                                                     |
| 36:25      | I really look forward to seeing what [[Apple]] ends up doing in this space for sure.                                    |
| 36:31      | Well, one of the things that I've been playing with is using shortcuts to figure out, you                           |
| 36:36      | know, like in my calendar right now, how long do I actually have free, and then using that                          |
| 36:40      | to run a nominee automation script to say, okay, like here are a choice of like two or                              |
| 36:45      | three tasks that you could do in the next, you've got 45 minutes, this one takes 15                                 |
| 36:49      | minutes, this one takes 25 minutes, and this one's going to take half an hour, you know,                            |
| 36:52      | pick one of those, and all it does then is it opens it, it does not mark it as done.                                |
| 36:56      | I made that mistake the first time around and then didn't actually do the task because                              |
| 37:00      | I got sidetracked and had many, many regrets that I did not do it, but you know, I think                            |
| 37:05      | that the way that we can, you know, pull out information from the other apps because of,                            |
| 37:10      | you know, automation support everywhere is becoming so useful for this, you know, for                               |
| 37:16      | me, I would love an AI to just be like, hey, I can see that you're sitting around watching                          |
| 37:20      | Gray's Anatomy again, you know, maybe you should try doing a task, you know, you just                               |
| 37:25      | need to clean the mirrors in the bathroom, you'll take two minutes, do you want to go                               |
| 37:28      | do that, you know, having something that actually actively suggests that will be really cool,                       |
| 37:32      | but as it is, you know, I feel like Omni is probably ready for that because you have,                               |
| 37:36      | you know, all of this data already available and surfaceable through scripting language.                            |
| 37:40      | So, you know, maybe if we get, I mean, [[Siri]] AI is, you know, as [[Siri]] already has some                       |
| 37:47      | AI built into it, doesn't it, with suggesting things, you know, suggest [[OmniFocus]], if you                       |
| 37:51      | frequently open [[OmniFocus]] when you get to a location and so on.                                                 |
| 37:54      | But if we get [[Siri]] AI 2.0 this summer, then, well, I mean, I'm guessing [[Omni Group]] will                     |
| 38:00      | do what they always do, which is look at the roadmap and go, huh, that was a really good                            |
| 38:05      | idea. How can we fit that in with whatever [[Apple|Apple's]] thrown at us, but it'll be very cool                             |
| 38:11      | to see, you know, what people can do with this sort of thing as we, you know, as we                                 |
| 38:16      | progress with a little bit.                                                                                         |
| 38:18      | One of the fun things about AI in this space, I think, is that unlike AI being used to write                        |
| 38:24      | your code or AI being used to, you know, maybe write a paper about a topic that you don't                           |
| 38:31      | know very much, so you're having it kind of do your research for you as well.                                       |
| 38:34      | In this case, when AI is giving you a list of tasks, in theory, at least, you're the                                |
| 38:39      | person then implementing each one of those tasks and you're reviewing it in the process.                            |
| 38:43      | You're not going to do something that doesn't make sense.                                                           |
| 38:45      | If you're just writing some code and you feed it to the computer and then it runs the code,                         |
| 38:48      | it'll do something that doesn't make sense and you could have some bad consequences down                            |
| 38:52      | the line or if you're feeding it to a car driving, you think, again, the same thing.                                |
| 38:56      | But if you're feeding yourself a list of things, maybe not the bit about leaving off the underwear                  |
| 39:03      | from your packing list, but in a lot of cases, it's at least a much easier for you to review                        |
| 39:07      | and decide, does this truly make sense?                                                                             |
| 39:10      | You know what your tasks are about.                                                                                 |
| 39:11      | Yeah.                                                                                                               |
| 39:12      | And like, for instance, as an example, mine isn't as fancy as Rose's, but what I do is                              |
| 39:17      | I'll have a block of time to say, we're making a podcast, so I usually have a two-hour block                        |
| 39:22      | on Mondays to say podcast work.                                                                                     |
| 39:23      | And then I've got a folder and [[Omni Group]] and [[OmniFocus]], I'm sorry, that includes sub-projects              |
| 39:29      | for the various podcasts I make and there's tasks that are generated in there, some through                         |
| 39:34      | automation, some manually, but they have flags and tags and all sorts of indicators of importance.                  |
| 39:40      | So I made a custom perspective that looks at that folder and does its best to surface                               |
| 39:47      | the things I should be working on during that two-hour block.                                                       |
| 39:49      | Now, I'm not going to get all of them done, but hopefully I'm checking them off in order                            |
| 39:54      | of priority, but what I would prefer is an AI to get smart enough to do that reliably                               |
| 40:00      | for me and say, hey, I want to spend two hours working on the sales presentation or I want                          |
| 40:04      | to work two hours on podcasts, give me the things you think I should do.                                            |
| 40:09      | And like that, to me, is a great use of AI.                                                                         |
| 40:12      | It doesn't need to go out, like you said, to the internet and figure out research questions.                        |
| 40:17      | It just needs to look at your data and decide what's important and hopefully, because in                            |
| 40:23      | this theoretical world, it's local to my machine, it can see historically what I actually do                        |
| 40:30      | and it gets a bunch of information.                                                                                 |
| 40:33      | You guys have so much information in that database and that's one of the reasons you're                             |
| 40:37      | thinking forward.                                                                                                   |
| 40:38      | You updated the database format a few years ago, but you've got so much information there                           |
| 40:42      | that I think an AI could actually do a pretty clever job of surfacing that for me.                                  |
| 40:47      | And then it's like, then the pressure isn't that I have to do all this, but no, it's giving                         |
| 40:51      | me, it's like my little buddy here, giving me some things I can pull from that'll make                              |
| 40:55      | me feel like I'm making progress and I'm excited about that.                                                        |
| 40:58      | And I think that, you know, you guys are in a great spot to do that.                                                |
| 41:02      | Another thing you've really done well is this whole voice control thing.                                            |
| 41:05      | I mean, you know, this is, I think it's largely sales are going, but I'm not sure maybe they're                     |
| 41:11      | getting people in your team helping as well, but Sal has written this crazy voice control                           |
| 41:17      | system again, not just for [[OmniFocus]], but for, I think all of your apps at this point                           |
| 41:21      | where you can sit and talk to them and they just work and you, you could think about it                             |
| 41:27      | as an accessibility feature, but honestly what it is, it's an [[Apple Vision Pro]] feature                              |
| 41:32      | as you're sitting there with that face computer on and you just start talking and [[OmniFocus]]                     |
| 41:37      | just starts going off to the races where you, I mean, that was another big move of automation                       |
| 41:42      | that you guys kind of jumped on that nobody saw coming.                                                             |
| 41:47      | That was kind of a fun one.                                                                                         |
| 41:49      | Sal definitely saw an opportunity there where he was thinking about how people would interact                       |
| 41:56      | with computers with their voice and he wanted to be able to write some scripts around that                          |
| 42:03      | and write his own custom, you know, basically vocabulary for how you talk to an app.                                |
| 42:08      | And so what he asked us for is, well, you have this great Omni Automation support.                                  |
| 42:13      | You have, you know, the ability to create plugins and actions and so on.                                            |
| 42:18      | What if you could trigger those with your voice?                                                                    |
| 42:20      | And so we just ended up writing a little bit of glue code for, you know, let's hook up                              |
| 42:24      | the voice activation to the plugin system and then [[Sal Soghoian\|Sal]] did the heavy lifting of, all right,       |
| 42:32      | now let's sit down and write a hundred different things that you might do with that.                                |
| 42:37      | It's available.                                                                                                     |
| 42:39      | And yeah, that's a great use on the [[Apple Vision Pro]] where you might, you know, the                                 |
| 42:43      | three built-in forms of input that you have on the [[Apple Vision Pro]] are your eyes with                              |
| 42:48      | the, you know, gaze tracking.                                                                                       |
| 42:50      | You have your hands that you can tap your fingers together to click on something and                                |
| 42:54      | then or tap on something I think is their official terminology.                                                     |
| 42:59      | And then you have your voice.                                                                                       |
| 43:01      | And personally, when I use the [[Apple Vision Pro]], I actually use a keyboard much more                                |
| 43:06      | often because a lot of the work that I do involves the keyboard.                                                    |
| 43:10      | But if you happen to just be wandering around only with those three things, the voice is                            |
| 43:14      | the input mechanism that lets you get the most data in the most quickly.                                            |
| 43:20      | So it's great to have that as another way of interacting with our apps.                                             |
| 43:24      | Rose, have you done much with voice control in the [[OmniFocus]] and the various apps?                              |
| 43:30      | I haven't, but that's because as a general rule, I don't like voice control as a thing.                             |
| 43:36      | It feels incredibly slow to me and like it's more of a blocker for me than actually something                       |
| 43:41      | that's assisting me.                                                                                                |
| 43:42      | The closest I really get with voice control of things is when I'm driving and then I really                         |
| 43:46      | try to limit myself to just what [[Siri]] offers, you know, natively through [[CarPlay]] instead                    |
| 43:51      | of trying to get fancy.                                                                                             |
| 43:52      | I don't want to crash my car while I'm driving it because I'm trying to create a fancy new                          |
| 43:55      | project in [[OmniFocus]].                                                                                           |
| 43:56      | It seems like a really bad idea that I'd have to create another project like for calling                            |
| 44:01      | the insurance company and all of that.                                                                              |
| 44:03      | And I don't want to automate that.                                                                                  |
| 44:05      | That seems like a really bad thing to need to automate.                                                             |
| 44:07      | But I do love the idea of, you know, having all of this voice control, A, just as something                         |
| 44:13      | for people who want it and for people who need it as an accessibility feature, and B,                               |
| 44:18      | because I don't have a Vision Pro yet.                                                                              |
| 44:19      | I haven't even tried a Vision Pro yet.                                                                              |
| 44:21      | They're not available here in the UK, not even for testing in the [[Apple Store\|Apple Stores]].                                     |
| 44:24      | Like they don't even have like fake ones that you can like see the size of it or anything.                          |
| 44:29      | But when I get it, I have a feeling that the way that you interact with it is going to                              |
| 44:33      | change my mind on voice automation, at least to an extent, you know, I'm sure I'm still                             |
| 44:38      | going to have my keyboard and so on around just like you can.                                                       |
| 44:41      | But I, you know, I feel like that's where the voice control is going to make a lot more                             |
| 44:45      | sense for me and actually click in my head versus at the moment where I'm sitting there                             |
| 44:50      | in front of a device that has a keyboard on it anyway and has other ways of interacting                             |
| 44:56      | where I can just do the thing instead of having to remember what the thing is called.                               |
| 44:59      | Like I remember a keyword and use some fuzzy search in the middle and tada, I'm there already.                      |
| 45:05      | So yeah, I'm looking forward to seeing what Vision Pro does for me because I need to get                            |
| 45:09      | my hands on one of those as soon as I can so I can try it.                                                          |
| 45:12      | I'm getting serious Vision Pro envy at the moment.                                                                  |
| 45:15      | It's okay.                                                                                                          |
| 45:16      | I'll have to wait on that.                                                                                          |
| 45:18      | You know how unlike those TV shows when there's like a hacker there, you know, they're usually                      |
| 45:21      | someone young like around Rose's age and they just sit down at a keyboard and they like                             |
| 45:26      | look at the other actor and they go, they hit that computer and like all this code flies                            |
| 45:30      | in.                                                                                                                 |
| 45:31      | And that's my kind of image of how Rose computes.                                                                   |
| 45:34      | It's just like, of course, voice is too slow for her.                                                               |
| 45:37      | She's like somehow fused her brain into the computer at a fundamental level and she just                            |
| 45:42      | hammers the keyboard for a few seconds and things happen.                                                           |
| 45:46      | And it's always because of your automation though, right?                                                           |
| 45:49      | Yeah, there's a whole bunch of automation stuff in there.                                                           |
| 45:52      | You know, like I've got [[PopClip]] integrating with [[OmniFocus]] on the Mac so that when I select                 |
| 45:56      | certain things in [[OmniFocus]] because it knows what application I'm in, it pops up things                         |
| 46:00      | and so on.                                                                                                          |
| 46:01      | But even handwriting at times I find can be too slow for my brain.                                                  |
| 46:05      | It's just one of those things where I have to just try and like dump the information                                |
| 46:09      | out as fast as possible and come back and then process it and massage it in something that                          |
| 46:13      | makes sense.                                                                                                        |
| 46:15      | And also I tend to skip words when I'm speaking, when I'm just trying to like get something                         |
| 46:19      | out of my head as a thinking mechanism.                                                                             |
| 46:22      | So that AI is going to have to be really creative to figure out like the six words that I skipped                   |
| 46:27      | in the middle of that sentence that actually make it make sense.                                                    |
| 46:31      | So yeah, I'll, you know, I'm looking forward to giving it a real try on a platform that                             |
| 46:36      | really it's designed for that sort of integration.                                                                  |
| 46:38      | And I think that that's, you know, that's where it will work better in many ways for                                |
| 46:42      | me at least.                                                                                                        |
| 46:43      | Well, my brain has a low enough gear that the voice control is just fine, but I feel                                |
| 46:50      | like more than ever it's something I want to really kind of dig in on vision OS because                             |
| 46:56      | clearly a future where we're wearing, you know, I don't know how far away this is, but                              |
| 47:01      | a regular pair of glasses that has the ability to pop information on them.                                          |
| 47:06      | I think we're going to be using voice a lot in the future and I want to kind of get on                              |
| 47:10      | that bandwagon as much as I can now.                                                                                |
| 47:13      | One of the things you mentioned earlier, Ken, that I thought was interesting was installing                         |
| 47:17      | automations on vision pro and you mentioned it, but the, this whole idea of install links                           |
| 47:23      | and I'm not sure I saw this even covered in the news yet.                                                           |
| 47:28      | I think it's a new feature you guys are bringing with this new version, but tell us a little                        |
| 47:32      | bit more about how that works.                                                                                      |
| 47:35      | Sure.                                                                                                               |
| 47:36      | Yeah.                                                                                                               |
| 47:37      | So we, so far we've, I think we've only shipped this in [[OmniFocus]] 4.1, which is only on the                     |
| 47:41      | vision pro.                                                                                                         |
| 47:42      | So it's in the 4G [[TestFlight]] as well, but that's probably part of the reason that you                           |
| 47:45      | haven't seen very much coverage yet.                                                                                |
| 47:48      | The, it's, it works simply enough that you just put a link on a web page that includes                              |
| 47:53      | the URL that you want to download the plugin from.                                                                  |
| 47:56      | And so it's an [[OmniFocus]] link that says, you know, `omnifocus://`, like, I                                      |
| 48:02      | don't remember what it says, *install* something or whatever.                                                       |
| 48:05      | And then as a parameter to that, you know, in the URL, it includes the other URL that                               |
| 48:10      | you're going to go download this thing from.                                                                        |
| 48:12      | And it just takes out that step of downloading it in your web browser, ending up with your                          |
| 48:17      | downloads folder and then having to go find it and open it again there, which sometimes                             |
| 48:22      | that's really easy.                                                                                                 |
| 48:23      | Like if I'm clicking on one of those links in [[OmniWeb]], I have [[OmniWeb]] configured to automatically           |
| 48:28      | open those downloaded plugins and then it will go straight to that approval process.                                |
| 48:33      | But we don't, we're not all using [[OmniWeb]] and we're using a bunch of different platforms.                       |
| 48:38      | And so this makes it really easy to do in a consistent way cross platform where you                                 |
| 48:42      | just follow a link and it puts it in the right app and installs it.                                                 |
| 48:46      | You don't have to worry about it maybe being claimed by the wrong app, which is another                             |
| 48:49      | thing that would happen sometimes.                                                                                  |
| 48:54      | This episode of The Automators is brought to you by ExpressVPN.                                                     |
| 48:57      | Go to expressvpn.com/automators for high speed, secure and anonymous VPN services                                   |
| 49:04      | and get three extra months for free.                                                                                |
| 49:07      | Using the internet without ExpressVPN is a bit like forgetting to mute yourself on Zoom                             |
| 49:11      | and then every person on every team in your company hears you blasting your favourite podcast.                      |
| 49:17      | So why should everyone consider getting a VPN?                                                                      |
| 49:20      | Well internet service providers, also known as ISPs, know every single website you visit                            |
| 49:26      | and depending on where you are in the world, your ISP could sell this information on to                             |
| 49:30      | people who might use your data to target you with marketing.                                                        |
| 49:34      | ExpressVPN reroutes your network data through a secure encrypted tunnel so your ISP can't                           |
| 49:40      | see your online activity.                                                                                           |
| 49:42      | The best part is it's super simple to use.                                                                          |
| 49:45      | You just fire up the app and click one button.                                                                      |
| 49:48      | Plus it's rated number one by CNET and the Verge and it works on all your devices, phones,                          |
| 49:53      | laptops, even routers.                                                                                              |
| 49:55      | So everyone who shares your Wi-Fi can be protected.                                                                 |
| 49:59      | It is crazy how much information ISPs can get on you just by watching where you surf                                |
| 50:04      | the web and I don't like that.                                                                                      |
| 50:07      | It gets even worse when you use public Wi-Fi and people can try to get in the middle of                             |
| 50:11      | you and your internet connection to steal your data and even possibly compromise your                               |
| 50:16      | security.                                                                                                           |
| 50:17      | ExpressVPN solves all of these problems with a simple app and pressing one button.                                  |
| 50:22      | They couldn't make it easier.                                                                                       |
| 50:24      | So protect your online privacy by visiting expressvpn.com-automators-today that's e-x-p-r-e-s-s-vp-n.com-automators |
| 50:35      | and you can get an extra three months for free.                                                                     |
| 50:38      | That URL one last time expressvpn.com-automators and our thanks to ExpressVPN for their support                     |
| 50:44      | of the automators and all of Relay FM.                                                                              |
| 50:49      | So Ken, you have been doing things on the Mac and Mac-adjacent platforms for quite some                             |
| 50:55      | time but automation is something that obviously is quite near and dear to your heart because                        |
| 51:01      | otherwise, I mean, I'm guessing [[OmniOutliner]] wouldn't have had [[AppleScript]] support, [[OmniFocus]]           |
| 51:05      | therefore wouldn't exist and the world would be such a different place.                                             |
| 51:08      | I genuinely don't know what I would be doing with my tasks but what sort of things do you                           |
| 51:14      | end up automating?                                                                                                  |
| 51:15      | Are you automating on a grand scale, small scale, everywhere in between and what are                                |
| 51:20      | you automating?                                                                                                     |
| 51:21      | Sure.                                                                                                               |
| 51:22      | Well, I think automation really is a part of everyone's life over the last century or                               |
| 51:28      | more, right?                                                                                                        |
| 51:29      | Since the invention of electricity, if I walk, you know, I'm going down and I'm going to                            |
| 51:32      | have breakfast, I'll have toast that pops up, you know, after a certain amount of times                             |
| 51:37      | done inside a manic thing, you know, the microwave, I'll have lights that turn on and it's just                     |
| 51:44      | a big sliding scale from the level of automation that everyone has sort of become familiar with                     |
| 51:49      | and uses in their daily life all the time to, you know, the crazy things that we talk                               |
| 51:56      | about doing with some of our apps now and everything in between.                                                    |
| 52:02      | And so, you know, unless you're like on the cast of Survivor or something, you're probably                          |
| 52:07      | using automation quite a bit all the time and just taking it for granted.                                           |
| 52:11      | And I think everyone takes automation for granted when it's completely familiar to them                             |
| 52:15      | and that's, you know, integrated to their lives and then they, when they see something                              |
| 52:20      | that is new and completely unfamiliar, it just seems like magic and either it's scary                               |
| 52:25      | magic or it's really easy magic.                                                                                    |
| 52:29      | And so, you know, part of what I try to think about is how can we make the magic in our                             |
| 52:33      | apps be the easy magic rather than the scary magic?                                                                 |
| 52:36      | But when I think about what I end up building myself in the way of automation as a programmer                       |
| 52:45      | who writes apps for a living, kind of everything is fair game in terms of the technology that                       |
| 52:50      | I use.                                                                                                              |
| 52:51      | So I'll write, you know, I'll build custom apps that only I ever use, they're installed                             |
| 52:54      | on my Mac and or on my other devices, nobody else's, you know, I'll check them into Omni                            |
| 53:01      | source repository so somebody else could use it if they wanted to, but we're not trying                             |
| 53:05      | to publish it for customers.                                                                                        |
| 53:06      | I'm just trying to make my own life easier for things like downloading app store sales                              |
| 53:10      | reports and and then doing the appropriate tax reports from that, you know, all of the                              |
| 53:14      | sorts of stuff that go into daily routines and so, you know, I might have an app piece                              |
| 53:22      | of that, I might have a [[Python]] piece of that that does some of the work, I might have another                   |
| 53:27      | piece that's written in [[Ruby]], another piece that's written just in a shell, you know,                           |
| 53:31      | in Z shell or or whatever and and of course, some [[AppleScript]], some of the stuff I haven't                      |
| 53:38      | touched in a long time, like it's been a while I think since I've written any [[AppleScript]]                       |
| 53:41      | other than to check something out or demonstrate a problem to somebody else.                                        |
| 53:46      | But I still have [[AppleScript]] that I run that I've been using for a very long time.                              |
| 53:52      | And of course, yeah, so I guess it's kind of all over the map, this sort of things that                             |
| 53:59      | I will do with automation and but it's truly a part of my life.                                                     |
| 54:03      | And mostly I don't think about it because it's just, you know, it's set up to run automatically                     |
| 54:07      | that just scripts will run every day or every some things every hour and and it just lives                          |
| 54:12      | there in the background.                                                                                            |
| 54:13      | So I sometimes have to stop and think, oh, what is it that that is going on in my life                              |
| 54:18      | that has now become as background to me as the dishwasher and the toaster and.                                      |
| 54:22      | Yeah, for me, it's always when something stops working or doesn't quite work as intended                            |
| 54:28      | that I then have to stop and think back of, OK, so I walked into this room and I was expecting                      |
| 54:33      | the light to turn on or, you know, I opened this up and I was expecting, well, my next                              |
| 54:39      | test to pop up.                                                                                                     |
| 54:40      | Why hasn't it happened?                                                                                             |
| 54:41      | And it's usually because I was messing with something and I broke my own automation there.                          |
| 54:44      | But yeah, having having things actually become just, you know, every day, you know, every                           |
| 54:51      | every day happenings rather than actions that you need to take, I think is a really nice                            |
| 54:55      | way to look at automation because that is what hopefully we should all end up with, right?                          |
| 55:01      | Automation that just magically happens without us actually having to actively do a thing                            |
| 55:05      | for the thing that we need to take place.                                                                           |
| 55:09      | And that may be a little boring, unfortunately, in terms of what we can share with people.                          |
| 55:18      | But I think it's also really exciting, you know, whenever I then stop and think about,                              |
| 55:21      | oh, how much of my day now is just automated away and I get to focus on my attention on                             |
| 55:27      | other tasks that are more important to my life, it's just huge.                                                     |
| 55:33      | What are the areas of your life that you've been thinking about automated that you haven't                          |
| 55:37      | got around to yet?                                                                                                  |
| 55:39      | You've got to have something on the back of your mind.                                                              |
| 55:42      | Oh, absolutely.                                                                                                     |
| 55:43      | So that's a great question.                                                                                         |
| 55:47      | So I do, you know, like some of my automations have to do with things like backups, right?                          |
| 55:53      | And some of those pieces are pretty well automated right now, but not, but they don't necessarily                   |
| 55:59      | collect everything exactly where I want them to go, you know, they all get to the raid,                             |
| 56:06      | but they don't necessarily get easily back to some of the devices that I'm using.                                   |
| 56:13      | And I'm thinking right now about how there was a time where a lot of my music collection                            |
| 56:19      | was automated around through [[iTunes]] and the way I would ingest content into [[iTunes]] and                      |
| 56:26      | then it would maintain a library that I could use all over the place.                                               |
| 56:30      | And [[iTunes]] has moved to try to simplify things and put most of, you know, if you want cross-platform            |
| 56:37      | [[iTunes]], basically you're storing your music in the cloud.                                                       |
| 56:39      | But I didn't want to store my music in the cloud.                                                                   |
| 56:41      | I wanted it on my own devices and then to have it shipped around to each of the devices                             |
| 56:45      | that I'm actually using.                                                                                            |
| 56:46      | So when I get to the car, it'll actually play off my phone, whether or not my phone is able                         |
| 56:50      | to reach the cloud.                                                                                                 |
| 56:51      | Yeah.                                                                                                               |
| 56:52      | Can I just interject there?                                                                                         |
| 56:54      | I feel like in some ways automation for music has got worse.                                                        |
| 56:57      | I mean, in the old days, in a lot of ways, the traditional, you know, iTunes and the                                |
| 57:02      | iTunes smart list and all the tools available when it was just a simple Mac app, I think                            |
| 57:07      | in some ways are better than they are now.                                                                          |
| 57:09      | Absolutely.                                                                                                         |
| 57:10      | And I miss that time and some of those capabilities around being able to say, okay, well, why                       |
| 57:17      | don't you give me a list of my 100 top favourite albums or whatever.                                                |
| 57:21      | Or 100 top favourite that you haven't played in the year, you know, kind of.                                        |
| 57:25      | Right.                                                                                                              |
| 57:26      | Yeah.                                                                                                               |
| 57:27      | Yeah.                                                                                                               |
| 57:28      | Yeah.                                                                                                               |
| 57:29      | I mean, I had had just the other day, there was a song that I wanted to play in the car                             |
| 57:33      | and so I asked [[Siri]] to play the song and so I said it was playing it.                                           |
| 57:37      | And like the first 20 seconds was just silent to the point where I genuinely thought that,                          |
| 57:43      | you know, like [[Apple Music]] was bugging out or Siri was bugging out or [[CarPlay]] was bugging                   |
| 57:46      | out or something.                                                                                                   |
| 57:47      | And then it finally started.                                                                                        |
| 57:48      | It's like, but why did you play the one from [[Apple Music]] rather than the one that's in                          |
| 57:51      | my library that I ripped from a CD 20 years ago?                                                                    |
| 57:54      | Um, probably.                                                                                                       |
| 57:55      | I mean, yeah, it probably is about 20 years old now.                                                                |
| 57:57      | Oh my gosh.                                                                                                         |
| 57:58      | Um, but, you know, like, you know, because I know that one, I know that one definitely                              |
| 58:02      | starts at the beginning of the track.                                                                               |
| 58:04      | There isn't this odd 20 seconds of just silence that completely and utterly confuses me.                            |
| 58:08      | Um, so yeah, music automations definitely got worse, but at the same time now I have                                |
| 58:13      | the ability to do a [[SharePlay]] control in the car for shared music playlists.                                    |
| 58:18      | So you know, there's, there's features that are coming which don't necessarily make up                              |
| 58:22      | for the loss of the automation features that we had, but at least, you know, we haven't                             |
| 58:28      | just lost the automation features and gained nothing in return.                                                     |
| 58:31      | Right.                                                                                                              |
| 58:32      | So that's certainly one of the areas that comes to mind when I think about areas of                                 |
| 58:35      | my life that I wish were more automated than they are, where I still, from time to time,                            |
| 58:41      | from time to time, find myself manually loading music back to my phone again, again, because                        |
| 58:46      | I've upgraded my phone and it didn't transfer over and now I want to do the same.                                   |
| 58:51      | Um, of course, email is still kind of a big thing for me where I feel like the automation                           |
| 58:56      | used to be better when it was all Mac only, uh, and now, uh, you know, so there's a slight                          |
| 59:03      | pattern here maybe around, uh, as we moved a lot more of our computing to be across devices                         |
| 59:10      | and be more ubiquitous, we lost some of the capabilities that we had polished up on that                            |
| 59:15      | single device workflow and, uh, and there's, um, either advantages to that because I certainly                      |
| 59:22      | wouldn't give up having my email or my tunes in my pocket, but, um, but there are downsides                         |
| 59:29      | too and, uh, and opportunities then to make things better.                                                          |
| 59:33      | I think this is, you know, one of the, the classic things that, you know, it's, if we                               |
| 59:37      | only had the Mac, uh, for things, you know, things like mail rules on the Mac would make                            |
| 59:42      | so much sense, but as it is, mail rules for the Mac only makes sense if I have a Mac that's                         |
| 59:47      | always on and running.                                                                                              |
| 59:48      | And even then I might still get the email on my phone before my Mac processes it and                                |
| 59:52      | potentially files it away somewhere else so that I don't see it.                                                    |
| 59:55      | Um, and, you know, for that it is, you know, it's, it's worth looking at as, as a, a lesson                         |
| 01:00:02   | for the automation.                                                                                                 |
| 01:00:03   | I always try to do it at the highest level, you know, closest back to, you know, the core.                          |
| 01:00:08   | So I don't use [[Apple|Apple's]] mails rules a lot, uh, to be honest, I use them for, um, you                                 |
| 01:00:14   | know, I'll select the messages in my inbox and apply rules to them, but it'll apply rules                           |
| 01:00:17   | and remove things that are like over a week old and things like that rather than actually                           |
| 01:00:20   | processing.                                                                                                         |
| 01:00:21   | It doesn't need to process the stuff as it comes in because otherwise, you know, I won't                            |
| 01:00:25   | have it.                                                                                                            |
| 01:00:26   | Um, but, uh, yeah, trying to look at it from the perspective of there's, you know, all                              |
| 01:00:30   | of the data is coming in, in all of the places.                                                                     |
| 01:00:33   | How can we make sure that we actually get the same result everywhere and the same power                             |
| 01:00:38   | at our fingertips everywhere is pretty tricky.                                                                      |
| 01:00:41   | Yeah.                                                                                                               |
| 01:00:42   | And so I'll end up using, for example, there's a [[Unix]] tool called [[`procmail`]] that does, you                     |
| 01:00:46   | know, you can write different rules for processing the mail into different mail boxes and, uh,                      |
| 01:00:51   | I use that to process all of my mail and, uh, but it's not something that I feel like                               |
| 01:00:58   | I can tell my family, oh, here's how you should process your mail.                                                  |
| 01:01:01   | Yeah.                                                                                                               |
| 01:01:02   | Like, yeah.                                                                                                         |
| 01:01:03   | Yeah.                                                                                                               |
| 01:01:04   | I can imagine trying to get my grandmother to use [[`procmail`]].                                                   |
| 01:01:08   | Um, oh God, that, that feels like, yeah, she, she, she only just about understands the                              |
| 01:01:13   | difference between flagging and marking as unread now.                                                              |
| 01:01:16   | Um, and the, the difference is, is that they both have dots on them.                                                |
| 01:01:19   | The dots are different colours most of the time, uh, but one of them adds the number                                |
| 01:01:23   | back to the mail icon and one of them doesn't, but, uh, trying to teach her how to filter                           |
| 01:01:27   | in [[`procmail`]] would definitely be, uh, scary and it's definitely one of those things where,                     |
| 01:01:32   | you know, do, do I want, you know, the ultimate tool that can do all the things or do I just                        |
| 01:01:36   | want the simple tool that can just, you know, it can just handle the basic thing that I                             |
| 01:01:40   | needed to do right now.                                                                                             |
| 01:01:41   | Do I have to reach for it, you know, the full toolbox for my automations?                                           |
| 01:01:45   | See, and like, that's where I feel like, um, AI again provides promise.                                             |
| 01:01:50   | Like whenever you look at an uncontrollable list of things, whether it be tasks or email,                           |
| 01:01:56   | I would like to see a future where the [[artificial intelligence]] is smart enough to surface the                       |
| 01:02:01   | stuff you need to see, gives your grandma what she needs to see and doesn't give her,                               |
| 01:02:06   | you know, all the other stuff.                                                                                      |
| 01:02:07   | I mean, we have this huge problem right now with a senior citizen.                                                  |
| 01:02:11   | It's getting hacked.                                                                                                |
| 01:02:12   | I mean, it's just happened to a family member of mine recently and she's like, oh yeah,                             |
| 01:02:16   | but Microsoft told me there was a problem.                                                                          |
| 01:02:18   | I said, you didn't even have any Microsoft software on your computer.                                               |
| 01:02:22   | And then she called the number and now she's basically, we got to fire a computer into                              |
| 01:02:26   | the sun.                                                                                                            |
| 01:02:27   | But the, uh, the, uh, but I feel like AI provides some, some level of promise to me and that                        |
| 01:02:32   | to me really, I think is the next kind of frontier of this stuff, like finding a way                                |
| 01:02:37   | to do it rationally, logically, safely, but make our lives better.                                                  |
| 01:02:41   | You know, that's an automation frontier in my mind.                                                                 |
| 01:02:45   | Right.                                                                                                              |
| 01:02:46   | Okay.                                                                                                               |
| 01:02:47   | Well, Ken Case, thank you so much for giving us your time today and coming in.                                      |
| 01:02:51   | If people want to follow up on what you're doing, Ken, where should they look?                                      |
| 01:02:54   | Sure.                                                                                                               |
| 01:02:55   | Well, I guess the, the easiest way to stay in touch with what we're doing is to go to                               |
| 01:02:59   | our website [omnigroup.com](https://omnigroup.com) and we have a blog, of course, and we have a newsletter that you |
| 01:03:03   | can sign up for if you prefer to get things in email.                                                               |
| 01:03:07   | And of course you can find me, uh, personally on mastodon.                                                          |
| 01:03:12   | I'm at [mastodon.social/kcase or kencase](https://mastodon.social/@kcase), yeah, we'll put the right link in the show                                 | 
| 01:03:19   | notes.                                                                                                              |
| 01:03:20   | Yeah.                                                                                                               |
| 01:03:21   | We'll make sure the link is there for you.                                                                          |
| 01:03:22   | And I would add to that [omni-automation.com](https://omni-automation.com).                                                                         |
| 01:03:25   | I believe there's a dash in here and I don't remember after looking up, but we will have                            |
| 01:03:28   | a link in the show notes.                                                                                           |
| 01:03:30   | It's just shocking to me how deep automation runs through your entire line of products.                             |
| 01:03:36   | And I, as a automator and the host of this show, I just want everybody to know, you know,                           |
| 01:03:42   | there are companies out there that are really putting the time and spending the money to                            |
| 01:03:46   | give their apps this kind of user customisation.                                                                    |
| 01:03:49   | It's like the old days of [[AppleScript]], but it works everywhere and I love it.                                   |
| 01:03:52   | So thank you for all your effort.                                                                                   |
| 01:03:54   | I know that was not an easy decision.                                                                               |
| 01:03:55   | I mean, in the modern world, you got to decide where you spend money and you guys chose to                          |
| 01:04:00   | do it on automation and we all appreciate it.                                                                       |
| 01:04:03   | But for those who don't know, the Omni Automation website isn't just for [[JavaScript]] automation                   |
| 01:04:08   | and you can also learn about [[Shortcuts]] automation or, you know, you can learn how it interoperates                  |
| 01:04:13   | with other apps and voice control.                                                                                  |
| 01:04:16   | And of course, this new install links feature, all of that stuff is documented on there.                            |
| 01:04:21   | All right.                                                                                                          |
| 01:04:22   | We are the Automators podcast.                                                                                      |
| 01:04:24   | You can find us at relay.fm/automators.                                                                             |
| 01:04:26   | I want to thank our sponsors this week, LinkedIn and ExpressVPN.                                                    |
| 01:04:30   | If you are an automators Mac subscriber, we thank you dearly that helps keep the lights                             |
| 01:04:34   | on around here.                                                                                                     |
| 01:04:35   | It's a big deal to us and Automators Max, we're going to be talking about Ken's thoughts                            |
| 01:04:39   | on vision pro.                                                                                                      |
| 01:04:40   | We're going to go deeper on that.                                                                                   |
| 01:04:42   | And otherwise we'll see you next time.                                                                              |
| 01:04:44   | Goodbye, folks.                                                                                                     |
