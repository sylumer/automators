---
status: incomplete
fc-date:
  year: 2023
  month: 7
  day: 14
fc-category: podcast
podcast: Automators
published: 2023-07-14
duration: 4338
formattedduration: 01:12:18
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Joe Hribar
notetype: episode
showpage: http://relay.fm/automators/132
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators132.mp3
episode: 132
title: "132: Automating and Time Tracking with Joe Hribar"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Timery developer Joe Hribar joins the Automators to talk about what's involved with adding automation tools to your App and some of Joe's favourite Automations.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Joe Hribar]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 132 Discussion](https://talk.automators.fm/t/132-automating-and-time-tracking-with-joe-hribar/16166)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.

# Show Notes
- [Timery for Toggl](https://Timeryapp.com/)
- [Screenshot Background Shortcut](https://www.icloud.com/shortcuts/f3911931dd214c6281a0d3617e42bf8b)
	- Adds a light-colour background behind an image like a framed device screenshot. Choose from preset colours, specify custom colours, and on iPhone & iPad, use Toolbox Pro to get colours from the image or pick a specific colour from it.
- [HomeKit Lights to Time Entry Shortcut](https://www.icloud.com/shortcuts/ecca4e3d8dc945b18c585bc934670052)
	- Checks your current time entry in Timery and sets HomeKit lights to match with HomeBot. When a current time entry is running, the shortcut will set the lights to the current project’s colour. And when a current time entry isn’t running, it will turn off the lights.
- [Offline Tracking with Timery and Data Jar Shortcut](https://www.icloud.com/shortcuts/b392684a0cc94ae68b85ecff20a09134)
	- Enables offline time tracking with Timery and Data Jar to start & stop saved timers and check the current running time entry while offline. When back online, the shortcut can add the offline time entries to Timery.

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators, I'm David Sparks and joined by Rosemary Orchard and this is               |
| 00:05      | the place where we talk about how to automate your technology to do your bidding for you.            |
| 00:11      | We have a special guest today from the Timer app, welcome to the show, Joe Hribar.                    |
| 00:16      | Hello, hello, thank you so much for having me, I'm very honoured to be here.                          |
| 00:21      | We are so happy to have you on, so Joe is one of my favourite developer supporting automation         |
| 00:28      | and with everything going on with the new operating systems and things, we knew we                   |
| 00:32      | wanted to get a developer and somebody who's up to their elbows in it and Joe, you were              |
| 00:37      | the first one that came to mind, we were so happy when you came on the show.                         |
| 00:42      | I'm excited to also make my Relay FM debut, switch on.                                             |
| 00:46      | Yes.                                                                                                 |
| 00:47      | Long overdue.                                                                                        |
| 00:48      | Yeah, it's unbelievable that we've not had you on a show yet, you know, because we all               |
| 00:53      | met at [[WWDC]] a couple of years ago, it was the year that I broke my ankle, just to be                 |
| 00:58      | clear for the audience, Joe had nothing to do with the ankle breaking, but he was very,              |
| 01:02      | very helpful after the ankle was broken to, you know, make sure that I didn't damage                 |
| 01:06      | myself further.                                                                                      |
| 01:07      | But yeah, you've been mentioned on Relay a lot.                                                      |
| 01:13      | I'm not sure, I think it's a toss up between automators and cortex, which one mentions               |
| 01:19      | Timery more often, maybe somebody's transcribed all the episodes using an AI and can actually       |
| 01:25      | tell us how many times each show is mentioned it.                                                    |
| 01:30      | But yeah, you've been making, you know, a really great app that is very, very useful.                |
| 01:36      | And you are just, you know, generally, at least, you know, as far as we all know, because            |
| 01:44      | this is true, very nice in the, you know, automation community as well.                              |
| 01:48      | They're open to ideas and requests and things like that, which is something that I think             |
| 01:52      | a lot of users do appreciate.                                                                        |
| 01:54      | And I'm sure that doesn't come for free.                                                             |
| 01:56      | I know that developing shortcuts integration in particular can be interesting, but it is             |
| 02:01      | greatly appreciated.                                                                                 |
| 02:02      | Well, thank, thank you very much.                                                                    |
| 02:04      | I appreciate you all using the app and sharing about it and talking about it.                        |
| 02:09      | And yes, it's, it's a lot of fun to both hear how it's been helpful to people and also               |
| 02:17      | to learn how other people are using it and build the tools for everybody to do things                |
| 02:25      | with automation.                                                                                     |
| 02:26      | Yeah, it is really a nice community.                                                                 |
| 02:31      | I guess that's something that we've never really acknowledged on the show.                           |
| 02:33      | When we did that meet up in 2019, you know, before the end of times disease, it was really            |
| 02:41      | fun because the shortcut team was there, Sal was there, Joe was there, a lot of the developers       |
| 02:46      | that are actively developing shortcuts and automation on the Mac were there.                         |
| 02:51      | And it was really a spirit of cooperation there, but it was there talking to each other              |
| 02:55      | about what they're doing and, you know, how they're figuring out new ways to make it easier          |
| 02:59      | to, you know, push the ball forward for automation for everyone.                                     |
| 03:03      | And that's why we make this show, honestly.                                                          |
| 03:05      | If you're listening to the show and you're a, you're a pro automator and you've been                 |
| 03:08      | doing it for 30 years, we're really happy to have you.                                               |
| 03:11      | But I know a lot of people listening to the show are trying to figure it out too.                    |
| 03:15      | And that's one of the things I love about you, Joe, is that you have an app that has                 |
| 03:20      | very complex but also very basic automations built into it.                                          |
| 03:24      | So no matter where you are on that spectrum, using the Timer app is a great vehicle to               |
| 03:30      | start getting your automation muscles stronger.                                                      |
| 03:33      | I really appreciate that.                                                                            |
| 03:34      | Well, thank you.                                                                                     |
| 03:36      | That's been my goal throughout developing Timer that I want to give everybody all of                 |
| 03:43      | these tools if they want to use them.                                                                |
| 03:45      | And if they do, they're there.                                                                       |
| 03:47      | If they don't want to do it, that's fine too, just to be as flexible that it can be in building      |
| 03:56      | into everybody's workflows.                                                                          |
| 03:58      | Yeah, but you are definitely, like Rose said, very pro automation.                                   |
| 04:03      | I know I've sent you some really bizarre requests over the years that ended up in the app, Rose,     |
| 04:07      | as I'm sure has done the same thing.                                                                 |
| 04:10      | And you're really out there helping people automate.                                                 |
| 04:13      | Tell us a little bit about your history.                                                             |
| 04:15      | I mean, how did you get into software development and on the [[Apple]] platforms?                        |
| 04:20      | My journey to Timery, it's sort of by way of I started doing web development back in                 |
| 04:28      | the day and also flash development, good old flash.                                                  |
| 04:32      | Wow, that goes back.                                                                                 |
| 04:34      | Oh, yeah.                                                                                            |
| 04:36      | For iOS development, I was doing broadcast graphics development.                                     |
| 04:41      | So I was making touchscreen graphics, large scale touchscreen graphics for live sports               |
| 04:48      | broadcasts for show analysts and anchors to tell a story of whatever they were talking               |
| 04:56      | about with a touchscreen graphic live on air.                                                        |
| 05:01      | At some point, it just felt like the next step of my interactive journey would be to                 |
| 05:08      | learn how to make an iOS app.                                                                        |
| 05:11      | And I learned how to do it, and now that's what I'm doing.                                           |
| 05:14      | Yeah, nice, nice.                                                                                    |
| 05:15      | And then your big app is Timery, which is an iOS app and Mac app that connects to the                |
| 05:25      | toggle service.                                                                                      |
| 05:27      | Because that's kind of interesting because you combine your history of web stuff with                |
| 05:33      | an iOS app, you're linking in with the toggle application, and you became just a front-end           |
| 05:40      | for toggle, but at the same time, so much more.                                                      |
| 05:43      | Yeah, they have a really great and robust API that I'm very thankful for, and it's been              |
| 05:51      | a lot of fun working on that.                                                                        |
| 05:53      | I think for me, the thing that strikes me with Timery for our toggle.                                |
| 05:56      | So it's a time-tracking app for anybody who is not sure what toggle or Timery is.                    |
| 06:02      | I mean, I think the name Timery is fairly self-explanatory, to be honest.                            |
| 06:06      | But yeah, it's a time-tracking app.                                                                  |
| 06:08      | But the thing for me about Timery itself as an app is, it is very much a case of the                 |
| 06:14      | tool that you use can make your life so much easier.                                                 |
| 06:18      | And I love the fact that automation starts, we don't have to use shortcuts or anything               |
| 06:23      | like that.                                                                                           |
| 06:24      | We can just start in the app and say, okay, this project with these tags are our favourite            |
| 06:29      | of mine.                                                                                             |
| 06:30      | Bam.                                                                                                 |
| 06:31      | And that's it.                                                                                       |
| 06:32      | And then you've got that right there, and you can tap to start it at any point, and you              |
| 06:37      | just go from there.                                                                                  |
| 06:38      | And I think that just looking at that and starting right at the beginning with really simple         |
| 06:44      | and easy to do the thing that you need to do in the app, that is the best automation                 |
| 06:49      | for the end user at least to start with.                                                             |
| 06:51      | Because then just, I want to be able to tap one button and do this thing, and they can               |
| 06:56      | now tap one button and do that thing, and it works every time, and it looks pretty.                  |
| 07:01      | And yeah, it's really nice that you started with something that, even though users may               |
| 07:07      | not think of it as an automation, it is an automation when you can tap one button.                   |
| 07:11      | And it runs this timer with these preferences for you.                                               |
| 07:15      | And that's one of the things I really love.                                                          |
| 07:17      | It starts with something seemingly very simple, I'm sure, you know, getting all that together        |
| 07:22      | and figuring out how the user was going to settle that up may not have been the simplest             |
| 07:26      | thing to do, but I know it certainly works really well for me.                                       |
| 07:30      | So that was sort of the initial goal when I was building Timery, because I started back              |
| 07:37      | in the workflow days.                                                                                |
| 07:39      | I was using the workflow today widget to start and stop timers through the toggle API.               |
| 07:50      | I'm pretty sure I learned about time tracking from [[Federico Viticci]] at MacStories and how            |
| 07:56      | he was using the workflow workflows to interface with the toggle API.                                |
| 08:03      | So I had started doing that for the job I had at the time.                                           |
| 08:07      | And I created a series of individual workflows for each of the projects that I had.                  |
| 08:15      | And each one would have a list of things related to that project that I might be working on.         |
| 08:22      | So I would swipe over to the widget, hit my project, it would ask me, what am I working              |
| 08:29      | on?                                                                                                  |
| 08:30      | I'd press one of those things.                                                                       |
| 08:32      | And then it would call what I had called a super workflow that had all the API logic                 |
| 08:38      | in it.                                                                                               |
| 08:39      | So each one of them would send to the main workflow, the project, the description, if                |
| 08:48      | I had tags, start time, etc., and then actually do the interfacing with the toggle API.              |
| 08:55      | So once I eventually started working on Timery, that was that I took that with me to have            |
| 09:03      | those kinds of presets.                                                                              |
| 09:05      | I wanted to have something to easily, just like that, easily start something that I would            |
| 09:10      | always or what I would often use.                                                                    |
| 09:13      | So that became eventually the save timers in Timery.                                                 |
| 09:16      | Yeah.                                                                                                |
| 09:17      | And Rose is right.                                                                                   |
| 09:18      | That is a form of automation because when you set up a saved timer, you can have related             |
| 09:24      | tags and other metadata attached to it, and that sticks.                                             |
| 09:30      | One of the things I do with your app, Joe, is I track time as a maker, a manager, and                |
| 09:36      | a consumer.                                                                                          |
| 09:37      | I like to see at the end of the week, how much time do I make making stuff versus learning           |
| 09:41      | stuff?                                                                                               |
| 09:43      | And a lot of my saved timers lend themselves to that, like email time to me is kind of               |
| 09:49      | manager time, but recording time is maker time.                                                      |
| 09:53      | So in addition to getting a nice summary of my time at the end of the week, I also see               |
| 09:58      | using those tags, how much time did I spend making, and all that is done through the saved           |
| 10:03      | timers because they apply the tags for you.                                                          |
| 10:07      | I don't have to jump through a bunch of hoops to do that every time I set a new timer.               |
| 10:10      | I love that.                                                                                         |
| 10:11      | That was the goal.                                                                                   |
| 10:12      | Great.                                                                                               |
| 10:13      | I think it's really powerful that that's the starting point.                                         |
| 10:16      | And like Rose said, it's an automation.                                                              |
| 10:19      | You open the application.                                                                            |
| 10:20      | If you never use the application, you open it up, and they have two main views.                      |
| 10:25      | I know Joe probably would look at it differently, but in my head, you've got the entries of          |
| 10:29      | the day, and you've got the saved timers.                                                            |
| 10:31      | Just click on saved timers and click on the next one.                                                |
| 10:34      | And if you make a nice set of saved timers and you stick within them, you can have consistent        |
| 10:40      | tagging and everything done.                                                                         |
| 10:41      | It's a really low-friction way to track your time.                                                   |
| 10:45      | But then it goes further with automation, and we're going to get to that in a minute.                |
| 10:49      | I wanted to ask you, Joe, somewhat related, your app runs on the backbone of Toggle.                 |
| 10:57      | Using the Toggle API, Toggle is a web service for time tracking, and it does a bunch more.           |
| 11:04      | In this era, where all these API-based apps are getting slaughtered by big companies,                |
| 11:09      | are you worried at all, or how's that going?                                                         |
| 11:13      | That's definitely something I've been thinking about and have been thinking about for a while.       |
| 11:17      | They just released last year at some point a new API, so I'm hoping that means that it's             |
| 11:24      | still going to be open and able to be used by everybody for quite some time.                         |
| 11:29      | But yeah, that is something that I'm thinking about, and I eventually would, at some point,          |
| 11:35      | like to add in perhaps iCloud syncing.                                                               |
| 11:42      | Because myself, I would like to own all of my stuff, but yeah, it's something I've definitely        |
| 11:48      | been thinking about.                                                                                 |
| 11:49      | It cuts both ways for you, too, though, because I think there's a lot of people who probably         |
| 11:53      | like Toggle, because Toggle has other features, and it's tried to a whole family of products.        |
| 12:00      | I'm sure your app helps them out, too, so hopefully they're smart about it and don't                 |
| 12:04      | throw hand grenades at you.                                                                          |
| 12:06      | But it seems like the last six months, some of these companies have got a little too big             |
| 12:11      | for their breaches, in my opinion, but we'll see.                                                    |
| 12:16      | So one of the things that you mentioned there, Joe, is the possibility of syncing with iCloud,       |
| 12:21      | and I know that this year at [[WWDC]], [[Apple]] announced a new sort of extension or alternative            |
| 12:29      | to core data.                                                                                        |
| 12:30      | Yes.                                                                                                 |
| 12:31      | Is that the sort of thing that you would be looking at for this?                                     |
| 12:35      | Or would you just go nuts and build something custom?                                                |
| 12:39      | I think it would definitely be something like [[SwiftData]], yeah, because when they announced          |
| 12:45      | it, I was like, oh, that's interesting.                                                              |
| 12:47      | That might be something beneficial for me in the future, because yeah, I think that would            |
| 12:53      | be a good thing to have in the app, too, the option to have it sync with iCloud, too.                |
| 13:00      | Definitely.                                                                                          |
| 13:01      | It makes a lot of sense, and I know a lot of developers that I know, especially, indeed,             |
| 13:07      | developers or folks working in very small companies, were really excited by [[SwiftData]],              |
| 13:12      | and some of the folks who've got existing stuff, were existing customers who are running             |
| 13:17      | very old versions of iOS, so they're going, yeah, I really wish we could look at this,               |
| 13:21      | but there's no way.                                                                                  |
| 13:22      | It's a problem with having existing users who are using an older version of iOS, but                 |
| 13:27      | it is cool that there are all those new features coming, because I know, and we'll have to           |
| 13:32      | talk about this after the break, that you've already got some watchOS 17 features, and               |
| 13:36      | you've had them since day zero, which is impressive.                                                 |
| 13:39      | You know what I really love about this whole cloud-syncing thing is, I feel like this is             |
| 13:44      | an evolution that I predicted.                                                                       |
| 13:46      | If you go back, like, old MPU, when Google was the only company that could sync data.                |
| 13:52      | Remember, I don't know if you guys remember, like, some of the dot-max syncing that [[Apple]]            |
| 13:56      | did in the early days, where you try to sync a text file and it took 30 minutes?                     |
| 14:01      | There was a time when Google was the only company that could do it.                                  |
| 14:03      | Then eventually big companies like [[Apple]] also learned to do it, and now medium-sized companies       |
| 14:09      | are doing it.                                                                                        |
| 14:10      | The Omni Group is a good example.                                                                    |
| 14:12      | They run their own cloud-sync service for their applications, and now it's just a thing              |
| 14:17      | you plug into an [[Xcode]], and assuming it's reliable, it's been an evolution, but suddenly             |
| 14:24      | that democratises it to the point that anybody can add a cloud-sync to their app, and assuming       |
| 14:30      | this is reliable and works, that's going to really open up the floodgates for a lot of               |
| 14:35      | developers like Joe's size to be able to have options that they didn't have before.                  |
| 14:40      | I love that.                                                                                         |
| 14:41      | Yeah, I think it's going to be really exciting, because I've heard not great stories from            |
| 14:46      | some developers about using core data and syncing it with iCloud.                                    |
| 14:50      | Yeah, early days was bad.                                                                            |
| 14:52      | Yes, I hope this will improve things and indeed make it more widely available for everybody.         |
| 15:01      | You've heard me talk about how important it is to have a VPN to protect your privacy                 |
| 15:04      | online, but choosing a VPN you trust is equally as important.                                        |
| 15:08      | There are tons of VPN providers out there, but there's a reason I use ExpressVPN and                 |
| 15:12      | why we have them as a sponsor.                                                                       |
| 15:13      | They're really good.                                                                                 |
| 15:14      | Here's why.                                                                                          |
| 15:15      | Number one, ExpressVPN doesn't log your activity online.                                             |
| 15:18      | Lots of VPNs may make money by selling your data to advertisers, but ExpressVPN doesn't              |
| 15:22      | do this.                                                                                             |
| 15:23      | Even to develop a technology, trusted server that makes their VPN servers incapable of               |
| 15:28      | storing any data at all.                                                                             |
| 15:30      | Number two, speed.                                                                                   |
| 15:31      | ExpressVPN now uses Lightway, a new VPN protocol they engineered to make user speeds faster          |
| 15:36      | than ever.                                                                                           |
| 15:37      | Sometimes VPNs can slow your connection down, but ExpressVPN is always blazing fast and              |
| 15:41      | uses stream videos in HD quality with zero buffering.                                                |
| 15:44      | The last thing that really sets ExpressVPN apart is how easy it is to use.                           |
| 15:49      | You don't need any technical skills to get set up.                                                   |
| 15:51      | Just fire up the app, tap one button to connect, and that's it.                                      |
| 15:54      | I literally don't know how long I've been using ExpressVPN for because it's so easy                  |
| 15:58      | to use and it's just become part of my workflow.                                                     |
| 16:01      | I love that I can easily switch countries to, you know, check out what's on Netflix                  |
| 16:05      | in the US.                                                                                           |
| 16:06      | And also the fact that sometimes you get stuck on a network and things just don't work.              |
| 16:12      | These websites won't open and doing whatever it is you might usually do to work around               |
| 16:16      | these issues doesn't necessarily fix the problem.                                                    |
| 16:19      | Usually firing up ExpressVPN means, ta-da, I'm out of their network into the ExpressVPN              |
| 16:24      | world and, well, pretty much everything just works.                                                  |
| 16:28      | So you should use ExpressVPN if you need to deal with some crummy networks, either quality-wise      |
| 16:33      | or security-wise.                                                                                    |
| 16:35      | And CNET, the verge business insider, and many other tech generals rate ExpressVPN the               |
| 16:39      | number one VPN in the world.                                                                         |
| 16:41      | So protect yourself with the VPN that I use and trust.                                               |
| 16:43      | Go to expressvpn.com/automators today and get an extra three months free on a one-year         |
| 16:47      | package.                                                                                             |
| 16:48      | That's ex-p-r-e-s-s-v-p-n.com/automators.                                                      |
| 16:53      | Visit expressvpn.com/automators to learn more.                                                 |
| 16:56      | Our thanks to ExpressVPN for their support of this show and all of Relay FM.                        |
| 17:01      | All right, so, Joe, you've built Timery.                                                             |
| 17:05      | It's really got some automation in it just with the layout and build of the application,             |
| 17:09      | but that wasn't enough for you.                                                                      |
| 17:11      | As [[Apple]] started opening up shortcuts and making user-based automation, you have always              |
| 17:17      | been one of the earliest and most aggressive developers about including those features.              |
| 17:23      | Why is that?                                                                                         |
| 17:24      | Why are you so into automation on this stuff?                                                        |
| 17:26      | I think it just comes from me using workflow and then shortcuts for so many things.                  |
| 17:35      | I wouldn't call myself a power automator, but I just like to make little workflows or                |
| 17:43      | make little shortcuts for just little things here and there, not necessarily to fully automate       |
| 17:49      | a setup, but just to make something a little repeating task just a little more convenient            |
| 17:55      | to do.                                                                                               |
| 17:56      | So I think it comes from that, just sort of understanding the power of being able to                 |
| 18:04      | automate things.                                                                                     |
| 18:05      | So that was my goal to have a lot of the core functionality from the app just to be available        |
| 18:15      | to do stuff outside of the app, too.                                                                 |
| 18:17      | Well, I'll tell you that the community loves your app.                                               |
| 18:23      | You're in that unique category with apps like [[Dark Noise]], where it's an app that seems               |
| 18:29      | like it has automation built in as a core tenant of the application, and it was no                   |
| 18:36      | surprise to me that even in the betas where I was 17, your automation is already taking              |
| 18:41      | advantage of the new features.                                                                       |
| 18:44      | I don't know how else to put it, but it's like you get it.                                           |
| 18:48      | As an automator, when I use your app, I'm just like, Joe gets it.                                    |
| 18:52      | All the little things I want to automate are always already there, and one of the reasons            |
| 18:58      | we want to have you on, I think, is to thank you, because, boy, if all developers did what           |
| 19:02      | you did, I feel like shortcuts would be so much bigger right now, because so often people            |
| 19:07      | want to automate, and they go and the action they want isn't there, or there's no actions            |
| 19:12      | at all.                                                                                              |
| 19:13      | But that's not true with Timery, man.                                                                |
| 19:16      | Whatever it is you're looking to do, Joe probably has a feature for you.                             |
| 19:20      | Well, thank you.                                                                                     |
| 19:21      | I really appreciate that.                                                                            |
| 19:23      | It's well-deserved.                                                                                  |
| 19:24      | It's well-deserved.                                                                                  |
| 19:25      | But what's involved with that, because we talk about it on the show all the time, like,              |
| 19:29      | oh, we wish the app would do this, or this app would do this feature, but can it walk                |
| 19:34      | us through for layman, what's involved with adding shortcut support to your iOS application?         |
| 19:43      | I think it comes down to time and maybe willingness to do it, because it's, at least for me, perhaps |
| 19:55      | it's because I've done this so many times, I've made so many different shortcut actions              |
| 20:00      | that it's not really hard for me to do it, but it's just a matter of doing it, I think,              |
| 20:09      | and just having that functionality available for anybody to use it.                                  |
| 20:15      | That makes a lot of sense, and clearly, you've been listening to things like [[Cortex]] and so           |
| 20:20      | on over time, because you have the basic things that you might want, like starting a timer           |
| 20:26      | and stopping timers and things like that, but there's also things like updating time                 |
| 20:31      | entries, starting live activities, because you may actually want this timer on your home             |
| 20:35      | screen, and then you've also extended it into things like adding projects and so on, which           |
| 20:41      | is something that really tells me you get it, because the number of people that will                 |
| 20:47      | have a little thing that will create a folder here and a document there and a note there             |
| 20:51      | for a new project, and then it would also need to add a task into their task manager                 |
| 20:56      | to add a new time or a project, but they don't need to, because now that same little thing           |
| 21:02      | that creates a folder and creates a note and creates a project in their task manager can             |
| 21:06      | also create a project in Timery for time tracking, or create a project in Toggle for time tracking   |
| 21:14      | using Timery, and this is something that, yeah, I really appreciate, and I also really               |
| 21:21      | appreciate how you started, you said, using the Today widget with Workflow, and the Today            |
| 21:28      | screen still exists, and there's still a Shortcuts widget in there, but what I really                |
| 21:32      | like is, obviously, since then, you've been working on your own things, like adding live             |
| 21:37      | activities and all the cool new features, but it still very clearly focuses on, I just               |
| 21:43      | need to be able to tap a button and then the thing is working as it should do, and that's            |
| 21:49      | what I really love, because it's really easy for me at the end of the day to check my total          |
| 21:54      | time tracked and how much time has been tracked on this and how much project time has been           |
| 21:58      | tracked and things like that as part of my workflow, but it works, and that is the really            |
| 22:06      | great thing, because you've done all hard work there to make it work for us.                         |
| 22:09      | Well, that's really good to hear. Any time I add all of this, anything new like that,                |
| 22:16      | it shouldn't get in the way of the really core function of the app, and it's starting                |
| 22:22      | and stopping a timer, time entries. If you want some more things, they're there. If that's           |
| 22:29      | all you want to do too, that's also fine, and that the add project, Shortcuts action,                |
| 22:36      | that was a request from Chris Wally, so you can thank him for that.                                  |
| 22:40      | Well, it's great, and I do use it for things. I've been experimenting at work. I keep going          |
| 22:46      | back and forth between having work as a client with different projects, various work things,         |
| 22:51      | but then a project might exist for half a day, so that doesn't feel like it's worth it,              |
| 22:55      | but also I definitely have more than one thing that I work on at work, so I've been going            |
| 22:59      | back and forth between, do I want projects, do I want tasks, do I just want to put the               |
| 23:04      | name of the story that I'm working on, and task name, and things like that, and I have               |
| 23:08      | to say it's been really good to see that I can just copy and paste bits between various              |
| 23:14      | different Shortcuts actions, and it works regardless of how I'm attempting to manipulate             |
| 23:20      | the data. Manipulate the data is the wrong way to put it. Create the data and organise               |
| 23:25      | it. I think that might be a better way of putting it.                                                |
| 23:27      | Joe, when [[Apple]] first started supporting Shortcuts, my understanding was what they had was they      |
| 23:33      | called [[App Intent\|Intents]], where you could go and create actions out of [[App Intent\|Intents]], but it felt to me              |
| 23:41      | kind of klugey. As a user, it wasn't clear that the actions necessarily came available               |
| 23:48      | to me without using that feature in the application, but obviously this has evolved over the time.   |
| 23:55      | Has it got easier? When you say it takes time to make one, what are the kinds of things              |
| 24:01      | you have to do to make an action in an application?                                                  |
| 24:05      | You can still use the old system. In fact, it's the [[App Intent\|Intents]] definition file in [[Xcode]]                 |
| 24:13      | that defines all of the actions and the parameters for each of them. You can still do that. In       |
| 24:19      | fact, most of the time reactions are still using that system. I haven't converted them               |
| 24:26      | over to the new [[App Intent\|App Intents]] system yet. I'm still supporting iOS 15. I think it's still              |
| 24:33      | possible that you can convert them and still have them exist for iOS 15. I'm just kind               |
| 24:39      | of afraid to do that. For now, they're still there, but the new ones too, you don't have             |
| 24:45      | to do anything with that file, which at least for me, because there's so many things in              |
| 24:52      | there, it actually takes [[Xcode]] several seconds to load it. The new system, it's just all             |
| 25:01      | done through code, so it's easier in that regard. You define the name of it, you give                |
| 25:13      | it a little description, any parameters, so something like somebody could input some text            |
| 25:23      | or some numbers or dates, a switch for on or off or for anything, and then you define                |
| 25:33      | a perform action, which is what the once the action is run, it will go through these steps           |
| 25:42      | to do whatever that particular action is meant to do.                                                |
| 25:46      | Sure. You've got to get the trigger established, but then you also have to tell the application      |
| 25:50      | to do something. Having worked with it and being, I like the fact that it takes time                 |
| 25:56      | to load your file because it's so big because that means as a user, that means I get lots            |
| 26:02      | of goodies. It's like when you're a kid and you go trick or treating, there was always               |
| 26:06      | somebody that would give you a handful of candy. That's like Timery. Then we had one                 |
| 26:14      | neighbour that would give us a toothbrush and like, what is it, this guy?                             |
| 26:19      | For all that candy.                                                                                  |
| 26:21      | What about the other developers? Because I feel like when I see an app like Timery,                  |
| 26:27      | it really does vex me sometimes when there are other apps out there that obviously I                 |
| 26:33      | would like to automate more, but there's no action available. On iOS and iPad, shortcuts             |
| 26:39      | really is it in a lot of ways. There are some [[JavaScript]] things you can do, but you don't            |
| 26:44      | have [[AppleScript]] to fall back on and a lot of the other tools we get on the Mac. It feels           |
| 26:49      | like a lot of developers have just taken a pass on automation. Why do you think that                 |
| 26:54      | is? Why is everybody giving me toothbrushes, Joe?                                                    |
| 26:58      | I don't want you to have clean teeth. I guess, but I want more candy.                                |
| 27:05      | I'm not sure. I think, again, it's just a matter of deciding to do it and doing it.                  |
| 27:12      | It's maybe if they're not familiar enough with shortcuts or the power it gives to users.             |
| 27:20      | I'm not sure, but it's something that, yeah, I think it could be useful for more people              |
| 27:26      | too.                                                                                                 |
| 27:27      | Does [[Apple]] give sufficient resources for developers that want to add shortcut support? Is that       |
| 27:33      | something where they're giving you guys the resources to learn how to do it? Could that              |
| 27:39      | be a hang up or is it just people just aren't bothering?                                             |
| 27:43      | I think the resources are useful and are sufficient. I've managed to look through the documentation  |
| 27:51      | and figure out what I need to be doing for this stuff. I think they periodically have                |
| 28:00      | [[Slack]] Q&As for developers. I think those have been extremely helpful to be able to ask for           |
| 28:07      | developers to be able to ask people directly on the teams questions. That's been very                |
| 28:13      | helpful.                                                                                             |
| 28:14      | Yeah, because I get the impression the shortcuts team is all in. These guys and gals, they want      |
| 28:20      | everybody to use shortcuts. They get it. I love that there are people inside [[Apple]] that              |
| 28:25      | are excited about automation. But it is strange to me because I feel like now shortcuts has          |
| 28:31      | been around a while. It's not a flash in the pan, but there are so many apps that just               |
| 28:36      | seem like they just don't bother.                                                                    |
| 28:38      | I wonder if for some of those apps, it's a chicken and the egg problem. They don't have              |
| 28:43      | that many people asking for automation. They haven't implemented it, but at the same time,           |
| 28:49      | they potentially are not getting users because they don't have the automation support that           |
| 28:55      | some of those users really want and would not switch to the app, despite it otherwise                |
| 29:02      | being perfect without it. This is one of the things I find with many of my apps, something           |
| 29:08      | cool and new and shiny comes along and I look at it and I go, cool, where's the API? Shortcut        |
| 29:13      | support? [[AppleScript]]? Command line? Anything? Because if I have to resort to [[Keyboard Maestro}]s,      |
| 29:22      | click an image to do something, it's a workaround, but I'm not going to do that with a tool that     |
| 29:27      | I'm using every single day.                                                                          |
| 29:28      | That makes a lot of sense.                                                                           |
| 29:30      | Rose, you make a great point. I feel like a lot of developers, it takes work to get shortcuts        |
| 29:36      | implemented, but once you do that, people are going to want more of it. As soon as you               |
| 29:41      | give them a little candy, they want more candy. If you don't have shortcut support at all,           |
| 29:46      | it's a non-issue, but if you have a little shortcut support and I'm sure Joe experiences             |
| 29:51      | this, when you add a shortcut action to do X, then people suddenly want action Y.                    |
| 29:58      | I think for me and Joe, you can weigh in on this as well. One of the things I'm really               |
| 30:04      | liking that [[Apple]] is doing is to get actions from your app to show up in Siri. For example,          |
| 30:11      | running a specific book in books or scanning a document in files, the way that you do that           |
| 30:17      | is through shortcut support. You add your Siri intents and definitions, and then those               |
| 30:25      | show up in the shortcuts app. There's a new UI for that this year with iOS 17, but then              |
| 30:31      | they also show up in Siri, meaning that if you have, for example, a great time-dragging              |
| 30:36      | app and you wanted, for example, Track Project ABC to be available in Siri, then you could           |
| 30:43      | actually add that through shortcut support. I think that that's a good encouragement for             |
| 30:49      | some developers who might otherwise hold out.                                                        |
| 30:52      | I do think that the addition of Siri commands should be a little additional encouragement            |
| 31:01      | for developers to adopt this because they get two for one now, essentially. They get                 |
| 31:07      | voice command plus they get shortcuts. I wish people were more willing to give it a try,             |
| 31:16      | like Joe. I get that it takes time. I don't know what the answer to it is, but when you              |
| 31:21      | meet a developer that gets it, I know that in the communities that I work in and talk                |
| 31:28      | to, those apps become essential. The people that don't get it, those apps don't get discussed.       |
| 31:37      | I do think there's a case to be made here. Maybe I am biased, and we're definitely at                |
| 31:42      | the sharp end of the stick of automation. We make a podcast about it, but I really think             |
| 31:47      | this stuff can be useful. The way [[Apple]] set up shortcuts is to make it easy for people.              |
| 31:54      | I do wish more people did it. Joe, how about this? Is there any friction points? You're              |
| 32:00      | one of more experienced automation than shortcuts developers. What is the white whale or the         |
| 32:05      | thing that you want to add that just isn't quite there yet in terms of shortcut support?             |
| 32:12      | Before I answer that, up to your point about getting more developers to adopt this stuff,            |
| 32:18      | I wonder if interactive widgets will help in that regard because interactive widgets                 |
| 32:24      | are powered by the last year's new [[App Intent\|App Intents]] system. Any [[App Intent]] that somebody's making         |
| 32:33      | for an interactive widget can also be used as a regular shortcuts action too. Maybe that             |
| 32:41      | can help get more developers on board with shortcut support too.                                     |
| 32:48      | That would be really awesome.                                                                        |
| 32:50      | Just a thought. What's something that I would like to have for shortcuts? I would really             |
| 33:00      | enjoy having third-party automation triggers. For example, for Timery, anytime you start             |
| 33:09      | or stop a time entry, then the app could notify the system and then you could run an automation      |
| 33:14      | off of that. I think that would be really powerful.                                                  |
| 33:17      | That would be. Another thing that occurs to me is for your saved timers, you could have              |
| 33:23      | a remind me after X period of time. For example, if you've got something that usually only           |
| 33:29      | ever runs for two hours, but every so often it will run for longer, but usually after                |
| 33:35      | two hours is that you've moved on something else and if you've got to change your timer,             |
| 33:38      | if you could have triggers for that sort of thing to be like, hey, this has been running             |
| 33:42      | for more than two hours, therefore I'm going to run an automation, that'd be super cool.             |
| 33:47      | That would be great too.                                                                             |
| 33:49      | We've talked about third-party triggers a few times over the years. I feel like it's                 |
| 33:54      | possible. Originally, when we discussed it, I thought it would never happen because of               |
| 33:59      | security. If [[Apple]] lets a third-party app trigger something, what if it's malicious?                 |
| 34:04      | Then when you look at the automatic triggers that have populated over the years on shortcuts         |
| 34:11      | where now, even this year, we've got additional automatic triggers that don't require confirmation,  |
| 34:18      | I feel like third-party triggers can't be far behind that. I get that you would probably             |
| 34:22      | have to have a really scary checkbox where you say, I understand, time rake and trigger              |
| 34:29      | actions without me approving it, blah, blah, blah. I'd be okay with that because I think             |
| 34:34      | the people that want this stuff totally get that. I'm with you, man. My mind just spins              |
| 34:40      | when I think about third-party triggers because there's so many apps that have shortcuts             |
| 34:45      | that I like and then I could reorganise how they all work and it could follow the way                |
| 34:51      | my brain thinks, not the way I have to pack it into what's allowed in shortcuts.                     |
| 34:56      | Yeah. I think that would be a really great addition to the platforms.                                |
| 35:00      | Yeah.                                                                                                |
| 35:01      | Yeah.                                                                                                |
| 35:02      | I mean, your lips to Tim's ears on that one.                                                         |
| 35:04      | I mean, we're definitely getting closer. This year, we got support for running automations           |
| 35:09      | automatically when you connect to Bluetooth devices and Wi-Fi, which previously they wouldn't        |
| 35:14      | let you run automatically at all. Now, you can run them automatically. You can't disable             |
| 35:18      | the notification that you get, but it's progress. It's small steps, but you have to start by         |
| 35:25      | moving in the right direction and getting it working. I'm just really glad that this                 |
| 35:31      | sort of stuff is wanted by developers, not just us end users who are there going, yay,               |
| 35:36      | I want all the things because it's really easy to build this huge list of things that                |
| 35:40      | you want, not so easy to actually use it necessarily.                                                |
| 35:45      | Something as a shortcuts user I would like is an else if action instead of having to                 |
| 35:51      | nest a bunch of if actions.                                                                          |
| 35:53      | Yes.                                                                                                 |
| 35:54      | Yeah. Yeah. Else if slash just switch case of like, in this case, do this. In this case,             |
| 36:01      | do this. And in this case, do this. And also being able to have multiple statements in               |
| 36:07      | your if.                                                                                             |
| 36:08      | Sure.                                                                                                |
| 36:09      | Would be really nice. Like if this and this, if it's after 7pm and the sun is set, then              |
| 36:16      | do this. Otherwise, do that. Yeah. That would be really cool, especially considering the             |
| 36:22      | fact that you can convert home automations into shortcuts. Admittedly, they are not                  |
| 36:29      | full shortcuts in the sense of there's no time reactions, for example. And a whole bunch             |
| 36:34      | of the native system actions don't exist there either. But yeah, it is something like that           |
| 36:40      | would be very, very useful. And yeah, I know I've asked for it before and the folks who              |
| 36:48      | I mentioned it to a person were like, oh yeah, that sounds really cool. But I'm sure they've         |
| 36:53      | got a really long list of things, but at the moment it is kind of annoying when you have             |
| 36:57      | to do, okay, I'm just going to delete the else, and I'll add another if, delete the                  |
| 37:01      | else, add another if, delete another if, and you end up having to stop the shortcut every            |
| 37:05      | single time in it. It's a little frustrating, but you know, it still works. So it could              |
| 37:09      | be worse.                                                                                            |
| 37:10      | Yeah. And I understand why they did it. I think their initial thought was, let's keep                |
| 37:14      | it really simple for people. And the problem is that people start to want more. And the              |
| 37:21      | only way you can get more is to make it without those additional tools. The only way you can         |
| 37:25      | get to that more is to make it super complicated, right? So it almost like defeats its purpose       |
| 37:30      | of being simple by not having a few extra tools there. And I also think [[Apple]] should                 |
| 37:36      | look at this as an evolution, right? As people grow up with shortcuts and use shortcuts,             |
| 37:42      | they're naturally going to become more advanced users at it and you should give them the tools       |
| 37:46      | they need. And if else statement for a new user is not going to get in the way, they're              |
| 37:51      | just not going to use it. But at some point, they're going to say, what is that thing?               |
| 37:55      | And, oh, I see how I could use this to do something faster and easier. And I would like              |
| 38:01      | to see that stuff show up. But I do think Rose is right. I think this is one of those                |
| 38:04      | things where they're not religiously against it. I just think they probably haven't got              |
| 38:09      | to it.                                                                                               |
| 38:10      | Yeah. I suspect it's one of those things of there's so many things that they need to                 |
| 38:14      | do. And, you know, we got things like being able to delete the else part of an if action.            |
| 38:19      | Which also means you have to be able to restore the else part of an if action and so on. And         |
| 38:24      | all of that is great progress in the right direction for this sort of thing. You know,               |
| 38:29      | we got new widgets this year in iOS 17 for shortcuts, which we've got the two buttons                |
| 38:35      | on. So if you added a shortcuts widget, then you could have like the smallest one. You               |
| 38:42      | could have two different projects show up in your timer for a timer, which is pretty                 |
| 38:48      | cool.                                                                                                |
| 38:49      | Hooray for more buttons. Hooray.                                                                     |
| 38:51      | Yes. But speaking of iOS 17, I actually wanted to talk to you, Joe, about the new watch              |
| 38:56      | OS. Because I noticed day one, I was that crazy lady. I installed the watch beta on                  |
| 39:02      | my [[Apple Watch#Apple Watch Ultra\|Apple Watch Ultra]]. I did have a minor issue when I had to do install the update that came         |
| 39:08      | out in that it didn't. And it kind of just stuck in a boot loop for a while. And then                |
| 39:13      | I first restarted it like three times and then it was fine. But I am suspiciously checking           |
| 39:18      | my watch every like five minutes still. But I noticed day zero, what apps we're showing              |
| 39:26      | up in my new watch OS Siri doc. I'm calling it the Siri doc because it's kind of the replacement     |
| 39:32      | for the Siri watch face, which still exists. But essentially you swipe up from the bottom            |
| 39:36      | and there's widgets in there. And I'm there looking at it going, hang on a minute, timer             |
| 39:41      | is in here? Does Joe know something I don't know? Is Joe secretly working at [[Apple]]? And              |
| 39:46      | I'm guessing it's not that you're secretly working at [[Apple]]. I'm guessing it's that                  |
| 39:50      | you implemented the new watch complications or something like that and those work as widgets.        |
| 39:58      | But days are features. Pretty awesome work there.                                                    |
| 40:02      | That was exactly it. Last year for watch OS nine, I rewrote the Timery complications                 |
| 40:12      | to use widget kit since it was now newly available for watch OS, even though the watch app had       |
| 40:20      | been out for only a few months. So far at that point, I was never really happy with how              |
| 40:27      | the old clock kit complications didn't necessarily update very often. But then having access         |
| 40:37      | to widget kit now and for me having experience with how it works with the home screen widgets,       |
| 40:44      | so I rebuilt all of the complications with widget kit. And apparently those were available           |
| 40:52      | then on day one with watch OS 10, I would have assumed that it would needed the app                  |
| 41:00      | would have needed to been built with the new X code in the watch OS 10 SDK, similar to               |
| 41:07      | how like I think that's the iPad small, the small home screen widgets are now available              |
| 41:14      | on the iPad lock screen. And they are also available on iPhone standby. I believe those              |
| 41:21      | only show up once the app has been built with the new SDK, but the watch OS widgets, they            |
| 41:28      | just showed up. So that was a nice little freebie there.                                             |
| 41:31      | Yeah, yeah, that is really cool. So well done for, you know, doing that. And I know when             |
| 41:38      | the watch I came out, I had several friends who kept going like, I just need time for                |
| 41:42      | the watch. Like, that's all I need. And I was like, I think I heard something from                   |
| 41:46      | Joe, be patient. You know, you can use shortcuts in the meantime type thing. And yeah, and           |
| 41:51      | you came out with this, doing it just shortly after releasing it, that's a lot of work.              |
| 41:57      | But it feels like it's definitely paid off. You know, I'm sure you probably already thought          |
| 42:01      | that it had paid off. But now, you know, the fact that you get free features on day one,             |
| 42:07      | that's pretty good going.                                                                            |
| 42:08      | Yeah, that was great. Yeah, the watch app, even just from my own use, it's been great                |
| 42:14      | just to have it. I'm not, my phone is in another room or whatever, and I need to do something        |
| 42:20      | and just open up the app and go at it.                                                               |
| 42:24      | And honestly, since we're there, are you going to make Timery in three dimensional computing?        |
| 42:33      | I haven't looked into it yet. I've been focusing on all the new iOS and watch OS goodies coming      |
| 42:42      | in the fall, including the interactive widgets. But yes, I do plan on looking into that and          |
| 42:49      | how Timery can work in virtual space. I think that would be really useful to have also there         |
| 42:56      | too.                                                                                                 |
| 42:57      | I mean, imagine your reports rendered in a 3D visual space so you can walk through a field           |
| 43:03      | of the hours that you spent doing something.                                                         |
| 43:05      | Like a forest of trees.                                                                              |
| 43:07      | Yeah, instead of the trees, they're just to put the bars, the bar graphs.                            |
| 43:14      | This episode of The Automators is brought to you by TextExpander. Go to textexpander.com             |
| 43:19      |/automators and get 20% off. TextExpander was the original sponsor of The Automators            |
| 43:25      | and it makes sense because it's such a great automation tool. When you work in a small team,         |
| 43:31      | every moment counts, you don't want to be wasting your time finding video conferencing               |
| 43:35      | details to send to a new client or tracking down the same FAQs from the company website.             |
| 43:42      | These are the kinds of things you want at your fingertips so you can get your work done              |
| 43:45      | faster and that's why you need TextExpander. With TextExpander, you can access what you              |
| 43:50      | type the most with just a few keystrokes, allowing you to work faster and eliminate                  |
| 43:55      | repetition. And this lets you focus on what matters most to you.                                     |
| 44:00      | TextExpander's powerful shortcuts and abbreviations streamline your team's work. All you have        |
| 44:05      | to do is type a short abbreviation and TextExpander does the rest for you. You just build and        |
| 44:11      | collect your most commonly used phrases, messages, URLs and more right within TextExpander           |
| 44:17      | and then create your chosen abbreviation and they'll be with you wherever you type.                  |
| 44:22      | You can even customise the snippets by having them automatically add in dates, fill in the           |
| 44:26      | blank fields, timestamps and more. If you're an automator, this stuff has read me. It is             |
| 44:30      | so great what you can do with TextExpander and this will make sure that you still keep               |
| 44:34      | the personality and the communications you send.                                                     |
| 44:38      | TextExpander is available on any device you use across any app you use on Mac, Windows,              |
| 44:42      | Chrome and iOS. In fact, when we invited Joe on the show this week, I sent a TextExpander            |
| 44:48      | snippet to him. We sent it to the guest. My snippet is pod.auto-guest and I use groupings            |
| 44:55      | of TextExpander snippets. Pod. is a preface for any podcast related TextExpander snippet             |
| 45:01      | and it's a really powerful way to get even more out of this application. Using that,                 |
| 45:06      | I was able to send Joe all the details about what mic to use, where's the outline link,              |
| 45:11      | where do you sign in and zoom to attend the call. All the details are there with one quick           |
| 45:16      | snippet. I use it every week.                                                                        |
| 45:18      | TextExpander sends me a little reports about how much time I'm saving and I literally send           |
| 45:23      | days of each year using TextExpander. Now, if repetitive typing is getting you down,                 |
| 45:28      | you need TextExpander. Check out TextExpander today at TextExpander.com/Automators             |
| 45:35      | and you can get 20% off your first year. That's TextExpander.com/Automators. Start automating  |
| 45:41      | today with TextExpander and say goodbye to repetitive typing. Our thanks to TextExpander             |
| 45:46      | for their support of the Automators podcast.                                                         |
| 45:50      | All right, so Timer itself, we've been talking about how automation friendly it is, but we           |
| 45:56      | haven't really gotten to the weeds on it yet. One of the things I love about the app as              |
| 46:00      | I keep telling Joe is there's a lot of actions and shortcuts to automate Timer and those             |
| 46:08      | are going to trigger your toggle timers as you go through the day and while you can go               |
| 46:15      | in the app and just hit a button and it starts a timer, as an automator, it's really nice            |
| 46:20      | when you can have that happen automatically as part of a bigger action. One of my favourite           |
| 46:26      | things to do and this thing comes up on the show so much, I think we're going to turn                |
| 46:30      | into a drinking game, but I love setups. I love the idea of saying, now I'm going to                 |
| 46:36      | do some writing or I'm going to do some research or I'm going to do some recording or podcasting     |
| 46:41      | or whatever and I like to push a button and have a bunch of things happen and one of the             |
| 46:47      | things is often just start a timer and so by far Joe, the automation step I use from                 |
| 46:54      | Timery the most is not surprisingly start a timer, but you can start a saved timer.                  |
| 47:00      | So if you spend the time in the application to set up those saved timers with the tags               |
| 47:05      | like I was talking about Maker Manager or whatever it is that you do and then all you                |
| 47:10      | do is you have a single action in Timery that starts that timer. That's part of your shortcut        |
| 47:18      | and part of a bigger one. Just to give you a few extra steps I might add in there, maybe             |
| 47:24      | I'll trigger a focus mode. I feel like focus modes and Timery go together like chocolate             |
| 47:30      | and peanut butter. They're great. I must be hungry today. I keep talking about candy.                |
| 47:37      | But the idea of, oh yeah, if I'm doing that timer or I'm recording the automators podcast,           |
| 47:43      | that is also a focus mode that I call podcasting. So why not have it just trigger Timery whenever    |
| 47:51      | I put it in podcasting focus mode, have it trigger the automators timer or whenever I                |
| 47:55      | run this shortcut, have it do those two together. That's why earlier when Joe mentioned third        |
| 48:01      | party triggers, that would be so great if I could have me triggering the timer in your               |
| 48:05      | app become a trigger that sets the podcast focus mode. But currently I have to do it                 |
| 48:10      | the opposite way around or set it up as a dedicated shortcut. But I can do it. And that              |
| 48:17      | does all sorts of things. It turns on the recording light over my door and it does a                 |
| 48:22      | bunch of things at the same time. And so often Timery for me, even though it's a single action,      |
| 48:28      | is a key part of that.                                                                               |
| 48:30      | I have to agree. I've got a lot of seemingly very simple things set up. So for example,              |
| 48:37      | one of them is whenever I start an [[Apple Watch]] workout, I start my time tracker for exercise.        |
| 48:44      | And it goes into my calendar and figures out based on the calendar events that are going             |
| 48:48      | on, what kind of exercise I'm doing and so on. So that it can log that appropriately                 |
| 48:54      | in the time tracker. But that's one of the things I do. And then of course, when the                 |
| 49:00      | workout stops, then I stop the track as well. But it's really nice to be able to also say,           |
| 49:08      | by the way, if I get in the car and I didn't turn off the time tracking, and therefore               |
| 49:14      | I didn't end the workout, then I'm just going to do that now. Because then I at least have           |
| 49:18      | an accurate timestamp in Timery so that I can fix that later in the fitness app. And                 |
| 49:26      | doing things like having, you know, when you've gone to a specific location or your focus            |
| 49:32      | mode or whatever, being able to trigger time tracking, for me, makes it much more likely             |
| 49:40      | that it'll happen. You know, I really love to save timers. In particular, I've had many              |
| 49:45      | on my desk with Timery open, among other apps, using [[Stage Manager]]. But I love the fact that         |
| 49:52      | I do just kind of have like a, it's kind of like a widget grid, to be honest, of just                |
| 49:56      | time trackers. And I can just tap on them and I can see an overview of what's what and               |
| 50:01      | so on. And that works really well for me to be able to see what I'm tracking and, you                |
| 50:05      | know, if I'm tracking the right thing and so on and so forth.                                        |
| 50:08      | Yeah, that's great. Because I just want to be able to provide the tools to enable people             |
| 50:16      | to do things, not just to do things that I wouldn't necessarily do myself, but also                  |
| 50:22      | things that I wouldn't even imagine. So just even if it's just some simple, some simple              |
| 50:28      | things with with adding a Timery action here or there, it's great. That's what I'm trying            |
| 50:34      | to to provide for everybody. And that's great to hear that it works too.                             |
| 50:38      | Yeah, like another good one that I like is because, you know, a lot of my Timery automation          |
| 50:45      | is starting timers, because if you start a save timer, it stops the existing timer.                  |
| 50:51      | So you don't have to, and that's something I appreciate, Joe, is that you didn't require             |
| 50:54      | me to create separate actions to stop the existing timer and start a new one. It just                |
| 51:00      | when you do the action to start a timer, and this is in the app as well, it just takes               |
| 51:04      | over and it's like, okay, he's no longer, you know, playing with a dog. So he's now recording.       |
| 51:12      | So turn off the dog timer, turn on the podcast timer. And that's great. But the downside             |
| 51:17      | of that is if you are not paying attention, you might have a timer that runs overnight               |
| 51:22      | because you forgot to turn it off. And with time based triggers and shortcuts, which now             |
| 51:29      | don't require confirmation, you can just run a timer every night, 11 o'clock, this is stop           |
| 51:34      | your timer, right? And if you had one run long, that's fine. But if you have one that                |
| 51:40      | runs overnight, it's a big pain in the neck to sort that out the next day. So like that's            |
| 51:45      | a real simple throwaway timer I put together. It's a two step shortcut, you know, 11 p.m.            |
| 51:53      | turn off timer. And that's fine. I think that's a fun little tip there.                              |
| 51:59      | Yeah, you could tie it into your sleep focus mode as well if you wanted to.                          |
| 52:03      | Yeah, that's a good idea.                                                                            |
| 52:04      | Which is something that I'm one of the things that I always try to do with my automations            |
| 52:09      | is I don't quite think of every automation in shortcuts costs money. But I try and                   |
| 52:15      | think of, okay, if I have 17 automations for when this thing happens, and something's                |
| 52:22      | not working, I then have to look in 17 places to fix it. If I have one automation for when           |
| 52:29      | sleep focus mode turns on, then it runs this and everything is in there, then I don't have           |
| 52:35      | to go through and figure out which bits are happening, which bits aren't happening and               |
| 52:39      | so on and so forth, or which bits are running in shortcuts. I know that it's all in one              |
| 52:47      | shortcut, which is much easier. And so I try to consolidate things. So I have a number               |
| 52:51      | of things that I have on when my sleep timer starts, or when my sleep focus mode starts,             |
| 52:55      | and one of them is stopping my time tracking in Timery, though at the moment I have been             |
| 53:01      | experimenting with sending myself a push notification to prompt me if I need to continue the time    |
| 53:07      | tracking because every so often I will be doing something when my sleep focus mode automatically     |
| 53:11      | turns on. And I'm going to keep doing that for a while before I go to bed. And so I've               |
| 53:17      | been working on prompting myself with a notification of, hey, this is still running, should it       |
| 53:23      | be? And if I don't reply, oh yes, it should be, then it will stop the timer about 10 minutes         |
| 53:29      | later using my push automation server. But yeah, it's really nice that that's just a                 |
| 53:35      | simple option using the actions that you've provided there, Joe.                                     |
| 53:40      | That's really interesting that you've got the push notification thing built in that too.             |
| 53:45      | Yeah, it's one of those things where I had to decide what the default should be.                     |
| 53:51      | It's the same with train drivers. There's usually something that they have to press                  |
| 53:54      | like every minute or so, or something they have to hold on to. And if they don't do that thing       |
| 53:59      | when they should be doing that thing, then train just stops because that's the safety                |
| 54:05      | fail. I had to decide what my safety fail was going to be. Is my safety fail going to be             |
| 54:10      | keep the timer running? Or is it going to be stop the timer? Obviously, in the case of               |
| 54:16      | time tracking versus train driving, one of those is more dangerous than the other.                   |
| 54:21      | But yeah, I went with my default is going to be, if you don't hear back in 10 minutes,               |
| 54:27      | we're going to stop this. So yeah, that's how I solved that problem. But yeah, it's                  |
| 54:33      | really nice that you can do that. And one of the other things I've been working on is                |
| 54:37      | when I set stuff up like new projects and so on, just adding projects and save timers and            |
| 54:43      | things automatically into Timery based on my preferences and the things that I would do.             |
| 54:51      | Because that's been very, very useful for getting things done, literally in the productivity         |
| 54:55      | sense as well as in the mental sense of, yeah, okay, so these things are accomplished and off        |
| 55:00      | my list. And now I don't need to think about them. And I can go and play tears of the kingdom,       |
| 55:04      | Zelda on my switch, which I may have been putting a few too many hours into recently,                |
| 55:07      | but it's all time tracked. So it's okay. I was just going to ask that.                               |
| 55:11      | Of course, it's time tracked. I feel like another thing about having shortcuts or                    |
| 55:18      | automation support in your application, is it also makes it easier for the user to trigger it        |
| 55:23      | in different ways? And I'll admit that even though I make a show called the Automator's Podcast,     |
| 55:30      | I often trigger toggle timers by just going in the app pushing the save timer because it's so        |
| 55:35      | easy the way you've done it. But there are also lots of other ways I like to trigger timers out      |
| 55:41      | of that context where it happens more automatically. I just talked about the one when I set a focus  |
| 55:47      | mode and it'll trigger a timer. But I've heard from a lot of people using timer in different ways.   |
| 55:53      | Some of the ways people do it is because you have a great Mac app, as you set up shortcuts to start  |
| 56:01      | timers and maybe trigger focus modes, mine quite often do. And I just use the word track at the      |
| 56:07      | beginning of it. So I'll say track automators. And I can trigger that with with them [[Hazel]] or,       |
| 56:14      | you know, [[Raycast]] or any of these launchers that will run a shortcut. And then that's a great way    |
| 56:20      | to trigger the timer. But a power tip there is to enable the feature in Timery where it shows the    |
| 56:27      | running timer in your menu bar. And that really helps you know that, okay, that hit. And this is     |
| 56:33      | what I'm tracking right now. I have a similar thing. I have shortcuts for things like that,          |
| 56:42      | including setting my focus mode. And I run that with Bunch when I'm changing my context on the Mac.  |
| 56:47      | So when I set down to start recording earlier, I ran my bunch for record automators podcast.         |
| 56:53      | And one of the things that it did is it started a time tracking session in Timery for me so that     |
| 56:59      | I will know how much time I spent recording automators this month. Oh, yeah. And see, gang,          |
| 57:04      | this is why we like automation so much. Because once you can create your own trigger, then you       |
| 57:10      | can make the app perform in the context that works for you. You don't have to go to the app. The app |
| 57:15      | kind of comes to you. And that's why I feel like more developers need to get on this bandwagon.      |
| 57:21      | I'm a big proponent of the [[Stream Deck\|Stream Decks]]. A lot of people have asked me, well,                        |
| 57:24      | how do I get my timers on [[Stream Deck]] buttons? And there's a couple of different ways. The way       |
| 57:30      | I do it is just with them creating a little app. And in shortcuts, you can save a shortcut as an     |
| 57:37      | app in your dock. And then you can run that as an app in the [[Stream Deck]]. And I find that to be      |
| 57:43      | the fastest and most consistent way for me to do it. I don't know, maybe Rose you have a different     |
| 57:47      | way of doing it. But then you can also add your own thumbnail to it, go crazy with [[SF Symbols]] or     |
| 57:54      | whatever. But I find that if you want to put in your [[Stream Deck]], it's not that hard. But give it    |
| 58:00      | its own page. Don't stick it everywhere. Or another alternative is if you have pages on a            |
| 58:05      | [[Stream Deck]] related to context, like on my page here on my [[Stream Deck]] for podcasting, I have a      |
| 58:11      | little button that sets the timer in the focus modes if I forgot to do it some other way. And        |
| 58:17      | it's just running a little shortcut out. So I've actually taken a different approach to my stream    |
| 58:22      | deck in that I have a button and it's the button in the top right. And that kind of shows me what    |
| 58:29      | I'm doing. And I say kind of shows me what I'm doing because I've created an icon for various        |
| 58:35      | different things that I do based on the focus mode icons, which show me like you're currently        |
| 58:41      | recording automators and so on. And I set the image of that using Keyboard My Show,                  |
| 58:46      | which is something that I stole the idea of from [[Timothy Luoma\|TJ Luoma]], who recently guest on Mac                 |
| 58:51      | Power Users again. But he created a [[Fantastical]] app, or Mac Core series, which will read your        |
| 59:01      | calendars and then show you, you know, in red, like, you know, there's a meeting in less than        |
| 59:07      | five minutes or yellow, there's a meeting in the next 15 minutes or green, there's a meeting coming  |
| 59:11      | up, but it's not right now. And so on or there's no events left for today, in which case you get     |
| 59:16      | the [[Fantastical]]. And yeah, so I stole the idea from that because you can use [[Keyboard Maestro]] to     |
| 59:23      | do that. I'm working on switching things to using [[BetterTouchTool]] to control my [[Stream Deck\|Stream Decks]].      |
| 59:27      | And so I need to figure out how I'm going to do that with that. But I don't think it's going to be   |
| 59:31      | that difficult to do. And the fact that I can easily get my current status from Timery at any        |
| 59:37      | point makes it super easy to decide, you know, what, you know, how long it has the time of running   |
| 59:44      | and show it there. And Shortcuts even has support now for, I think, formatting durations better.     |
| 59:50      | So you can do it all with Shortcuts. Though, I don't know, maybe we'll get something from Joe        |
| 59:56      | at some point, because clearly, [[Apple]] didn't give you any homework this summer, you've already done. |
| 01:00:01   | What's yours? 10, right? You know, you've just got interactive widgets. It's got to be a slam dunk.  |
| 01:00:07   | It's possibly slightly more complicated than it sounds. But yeah, maybe at some point, if you've     |
| 01:00:12   | got lots of free time, you'll figure out a way to support [[Stream Deck]] buttons from the Timery app.   |
| 01:00:17   | But in the meantime, I think you've probably got plenty of other things to be implementing.          |
| 01:00:21   | Is there anything in particular you're excited to be working on right now?                           |
| 01:00:23   | Yeah, I am really excited about the interactive widgets. It was something I was hoping for since,    |
| 01:00:32   | well, I guess I was 14 when they came out. So I've been having a lot of fun with both with just      |
| 01:00:39   | playing around with them and then imagining how to turn the existing widgets into more interactive   |
| 01:00:46   | widgets. It's been a lot of fun. Nice. Because there are widgets everywhere on the home screen       |
| 01:00:52   | and the iPad lock screen on Mac desktop on [[Apple Watch]] now too. It's a great year of widgets.        |
| 01:01:01   | I was just thinking it's really nice that WidgetKit has become the framework for this. So            |
| 01:01:07   | complications on the watch and so on. And it all links together because I think that's where,        |
| 01:01:13   | especially, you're one person making this app. And it's a great app, but you've got it on Mac,       |
| 01:01:19   | you've got it on iPhone, you've got it on iPad, you've got it on the watch. That's not a small       |
| 01:01:24   | amount of work, especially when [[Apple]] every year in the summer just like dump, here's a massive      |
| 01:01:29   | list of homework, go. And I'm guessing based on me that your user base are this sort that go,        |
| 01:01:37   | ooh, new features on day one, please. Whereas some other apps like, I don't know, say the            |
| 01:01:43   | Microsoft Word app, like if they're going to add new features, they're going to do it in their       |
| 01:01:47   | own sweet time because they've got a huge user base and they're a big company, so they go do         |
| 01:01:52   | things differently. So yeah, it's really nice from just from my mental perspective of there's one    |
| 01:02:02   | framework to do the things. That seems really good. Has it been good working with that? I mean,      |
| 01:02:08   | I know you got the new watch doc widgets on day one, but has it actually worked out                  |
| 01:02:16   | better for you with only having one set of code? It's a really good to have frameworks like that     |
| 01:02:23   | where you can do the work for one thing and it ends up working for another thing too. That's         |
| 01:02:29   | really helpful. And like you said, especially for just a single person doing all of the platforms,   |
| 01:02:36   | that's very appreciative. So thank you all the teams at [[Apple]] for making that happen.                |
| 01:02:40   | One last year when we got the iPhone lock screen widgets, those same views to make the               |
| 01:02:55   | lock screen widgets were the same for the [[Apple Watch]] complications. So those enable                 |
| 01:03:02   | sharing code in views between the two things. So you make one and it works on the other one too.     |
| 01:03:09   | I mean, it's not just that simple, of course, but it makes things a lot easier. Very thankful for    |
| 01:03:16   | that. Yeah, that is good. It feels to me like this year we're starting to get the real payoff to     |
| 01:03:22   | developers who have kind of gone into the new [[SwiftUI]] and kind of [[Apple]] programming interfaces      |
| 01:03:28   | that they've been developing over the last several years. I mean, not only things like               |
| 01:03:33   | watch widgets, but also the vision OS is largely based on that. And like suddenly people who         |
| 01:03:40   | invested time in learning the new systems are getting all these extra little benefits.               |
| 01:03:45   | Yeah, I agree. And even with the [[App Intent\|App Intents]] and the interactive widgets, if you started             |
| 01:03:51   | making [[App Intent\|App Intents]] actions for shortcuts last year, then you can either use those exact same         |
| 01:03:57   | ones, which I am doing for the interactive widgets or something similar for them too.                |
| 01:04:02   | So if you started working on that last year, you're understanding already how to make the            |
| 01:04:10   | widgets interactive too. It reminds me at the time that [[Apple]] was like, hey,                         |
| 01:04:14   | so we're bringing in this new thing called auto layout and the developers that went with it next     |
| 01:04:18   | year when there was split screen on the iPad. And they were like, yes, it basically you just need    |
| 01:04:22   | to rebuild and do a couple of tweaks and ta-da, you've got split screen and all the developers       |
| 01:04:27   | who hard coded everything to within three pixels were like, oh, no, darn it. Possibly in slightly    |
| 01:04:35   | less polite terms. But yeah, it is good when they signpost things and are like, hey, here's the      |
| 01:04:41   | cool new thing, come use the cool new thing, and then it really pays off for you.                    |
| 01:04:47   | Now, Joe, I know you're largely on the other half of the equation. You're making the actions for us  |
| 01:04:52   | rather than using them. But what are some of the shortcuts you run on your devices?                  |
| 01:04:58   | I have a few. There's ranging from just setting some home kit lights or                              |
| 01:05:08   | setting some actions before I go to bed and stuff like that.                                         |
| 01:05:13   | One of them, but some of, I guess, maybe a slightly little more complex one,                         |
| 01:05:21   | not super complex. But anytime I share framed screenshots of stuff I'm working on,                   |
| 01:05:26   | like on Mastodon and whatnot, I like to put a colour background behind them that sort of              |
| 01:05:33   | matches what the content of the image is. So I built a shortcut that does that. It adds a            |
| 01:05:44   | overlays the frame screenshot over some solid colour background. And I can either pick                |
| 01:05:52   | from some preset colours or I can use, using [[Toolbox Pro]]. Thank you, [[Alex Hay\|Alex]], for that to get the image  |
| 01:06:06   | colours off of that. And then just spits out the image and I can share that. That's one of them.      |
| 01:06:14   | I run a shortcut before I go to bed that we were talking about making sure time entries              |
| 01:06:21   | are stopped. So it does that. So if there's something running, it'll stop that. It'll check          |
| 01:06:27   | the weather for tomorrow. And I have it just for myself. I have it export some, just a report of     |
| 01:06:35   | what I was working on for the day. This was a fun thing for me that I had been screenshotting the    |
| 01:06:42   | reports in the app. And I was like, wait a minute, I can do something about this. And I built an     |
| 01:06:48   | action for shortcuts then that would export those reports instead of me screenshotting them.         |
| 01:06:53   | So if anybody else finds that useful, great. I love that you did that for you. I know that           |
| 01:07:00   | you've added a number of features in [[Timery]], specifically the shortcut section for other users.     |
| 01:07:08   | But I'm really glad that that one was added for you. This is something I've been playing with        |
| 01:07:12   | a little bit as well. Recently, I find it quite cool to export a little report of what's happened.   |
| 01:07:21   | And so yeah, I've been playing with that as part of my weekly review process.                        |
| 01:07:24   | And it's really nice that I can have like, I have a weekly review button that I can tap on it.       |
| 01:07:29   | And as well as doing, you know, only focusing on things that also pulls in my time tracking data     |
| 01:07:33   | and just shows me that. And that's very useful. That's the one fun thing about making an app is      |
| 01:07:39   | if I can, if I'm using this all day every day. And so I'd come across things where I was like,       |
| 01:07:45   | maybe it shouldn't work like that, or maybe it should do this instead, or maybe it should            |
| 01:07:49   | do this at all. And so it's like, well, I'll open up [[Xcode]] and make that happen. That's fun.         |
| 01:07:55   | You literally have the ability to scratch your own itch.                                             |
| 01:07:58   | Yeah, it's great. You mentioned [[Alex Hay]] from [[Toolbox Pro]]. We should mention Alex.                   |
| 01:08:05   | We lost him to cancer this year, but he was definitely one of the early adopters of shortcuts        |
| 01:08:12   | and the people that really, I mean, made shortcuts better. I mean, Toolbox Pro has always been my    |
| 01:08:19   | favourite application for adding features to shortcuts. And boy, we'll miss him.                      |
| 01:08:25   | Absolutely. A great person in the community and so very kind and helpful to both me and              |
| 01:08:34   | many other developers too. And every year when there were new shortcuts things,                      |
| 01:08:39   | and you would be helping us all out implementing them.                                               |
| 01:08:43   | Yeah, yeah, there's a bunch of his code on GitHub of little proofs of concept that he did of         |
| 01:08:47   | demoing. This is how I would set up this new feature and things like that, which is just             |
| 01:08:52   | really handy if you're looking for any guides like that. Obviously, those won't be updated,          |
| 01:08:58   | but yeah, his apps are still working. And so you certainly should be uninstalling them               |
| 01:09:04   | many times soon. And a figures cross something can happen with those at some point in the future     |
| 01:09:09   | to keep them going because Alex's work should be preserved to make sure that everybody knows         |
| 01:09:16   | how great he was. Because yeah, he did help a lot of developers. And I know a lot of the other       |
| 01:09:22   | indie developers that we've spoken to and I've spoken to in the past have talked about Alex as       |
| 01:09:27   | well. And yeah, so he was a very useful resource as a person, but also just a great person.          |
| 01:09:36   | Well, Joe, I'll tell you what, we really appreciate you coming on the show today. I know             |
| 01:09:41   | that this isn't your forte, right? You make apps, you don't talk on podcasts,                     |
| 01:09:46   | but you did a great job and you shared a lot with this in the audience. I think it's really good     |
| 01:09:50   | for everybody to get a perspective from someone who's making the actions that we're implementing.    |
| 01:09:56   | And why we really appreciate you coming on today. I really appreciate you for having me.             |
| 01:10:00   | I'm very, very, very honoured that you thought of me and I'm very thankful that for all the times     |
| 01:10:09   | that you mentioned the app and for using it just in general. And you've both sent me from            |
| 01:10:15   | early on, even before the app was released initially, you've both been very supportive               |
| 01:10:22   | and sent me lots of great feedback. So thank you. That's a really nice way to say that we            |
| 01:10:28   | nag him a lot about stuff we wanted to say. I'm pretty certain I remember having some                |
| 01:10:36   | strange issue at some point and I was doing a very convoluted workflow to make it happen and         |
| 01:10:40   | going, do I actually message you about this or do I just hope that no other user goes through        |
| 01:10:45   | such a strange series of steps that I did? And why was I doing that anyway?                          |
| 01:10:49   | Well, we have links in the show notes, but you can find Joe's Timery application at Timeryapp.com.   |
| 01:10:59   | You go there, you can get links to all the various places. We didn't give enough time                |
| 01:11:03   | today talking about the Mac implementation, which also was very well done, Joe, and hats off to you  |
| 01:11:09   | on that. I mean, this isn't just a simple port. This is an application that thinks about being       |
| 01:11:14   | a Mac application and I love that about it as a Mac enthusiast, but the Mac version is just as good  |
| 01:11:23   | in all the right Mac ways. We mentioned the Watch app. If you're doing timers,                       |
| 01:11:27   | having them on your wrist is a great place to do them, but it's all at Timeryapp.com.                |
| 01:11:33   | Anywhere else people should go to get in contact with you, Joe?                                      |
| 01:11:36   | I'm on Mastodon. I'm at Joe Hribar at Mastodon.social. And Hribar is spelled H-R-I-B-A-R, so.          |
| 01:11:47   | Yes, sorry, I should have spelled that, yes. No worries. That'll catch it.                           |
| 01:11:50   | We will also have links in the show notes. If you click on Joe, once you are on the podcast page,    |
| 01:11:56   | then you'll get a little profile with all the links to his stuff. So fingers crossed,                |
| 01:12:01   | you'll find everything there. And we are the Automators Podcast. Thanks to our sponsors              |
| 01:12:05   | today, TextExpander and ExpressVPN for helping keep the lights on. We'll see you next time,        |
| 01:12:11   | and have a great day, everybody. Goodbye, folks.                                                     |
