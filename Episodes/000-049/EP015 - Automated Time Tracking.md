---
status: "incomplete"
fc-date:
  year: 2019
  month: 01
  day: 18
fc-category: "podcast"
podcast: "Automators"
published: 2019-01-18
duration: 2873
formattedduration: "00:47:53"
hosts: ["David Sparks", "Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/15"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/Automators_15_Automated_Time_Tracking.mp3"
episode: 15
title: "15: Automated Time Tracking"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode Rose and David dive into time tracking, including the why, the how, and then most importantly - how to automate it!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 015 Discussion](https://talk.automators.fm/t/automators-15-automated-time-tracking/3792)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [Cortex #44: Existential Time Tracking - Relay FM](https://www.relay.fm/cortex/44)
- [Screen Time for iPhone and iPad: Everything you need to know! | iMore](https://www.imore.com/screen-time-iphone-and-ipad-ios-12-everything-you-need-know?amp)
- [RescueTime : Time management software for staying productive and happy in the modern workplace](https://www.rescuetime.com/)
- [Timing: the best automatic Mac time tracker for productive professionals and freelancers](https://timingapp.com/)
- [Toggl - Free Time Tracking Software](https://toggl.com/) - The app isn't available yet, and doesn't really have a website, but keep an eye on it!
- [OmniFocus Toggl Automation Scripts](https://github.com/samuelkordik/OmniFocusScripts)
- [Timery: the alternative Toggl app in beta](http://www.Timeryapp.com/)
- [Time Tracking Shortcuts - MacStories](https://www.macstories.net/shortcuts/#time-tracking) - All of Federico's Shortcuts for time tracking are available here.
- [Toggl Time Tracking on Android - Cortex](https://www.reddit.com/r/Cortex/comments/aewys4/toggl_time_tracking_on_android/) - A Cortex listener created a way to automate time tracking on Android with Toggl and Tasker.
- [Life Cycle - Track Your Time by Sleep Cycle](https://itunes.apple.com/gb/app/life-cycle-track-your-time/id1064955217?mt=8)
- [Screencast: Shortcuts for Time Tracking](https://youtu.be/9sm5gxFOaMo) - This screencast shows you how you can integrate time tracking with other Shortcuts allowing you to track time without thinking about it.
- [Automators 15: Automate Your Time Tracking | Rosemary Orchard](https://rosemaryorchard.com/blog/automators-15-automate-your-time-tracking) - The blog post to accompany this week's show with breakdowns of the Oversleeping and Auto Stop Zapier actions.

# Transcription

| Time Index | Transcription                                                                   |
| :--------- | :------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators.                                               |
| 00:04      | My name is Rose Orchard,                                                        |
| 00:05      | and I'm here today with the fabulous David Sparks to talk                       |
| 00:08      | about how to make your devices do your work for you.                            |
| 00:10      | Hello, David.                                                                   |
| 00:11      | Hi, Rose, how are you today?                                                    |
| 00:13      | I am very excited today.                                                        |
| 00:15      | Are you?                                                                        |
| 00:16      | Yes, yes, I am.                                                                 |
| 00:18      | Well, mostly because I get to talk to you,                                      |
| 00:20      | which is something that is always fun.                                          |
| 00:22      | Yes.                                                                            |
| 00:22      | But also because today we're going to talk about time tracking.                 |
| 00:25      | Yes, we are. I have a little bit of a cold,                                     |
| 00:27      | so please excuse my voice.                                                      |
| 00:28      | I'll do my best to keep my hacking and wheezing off the microphone,             |
| 00:33      | but just to hang in there with me today.                                        |
| 00:35      | Yeah, that's how professional we are.                                           |
| 00:36      | Even though David is not well,                                                  |
| 00:38      | we are still recording this episode to make sure that you get it in time.       |
| 00:42      | So, yes, that's something that we will have to do,                              |
| 00:45      | because we track our time,                                                      |
| 00:46      | and we see how much time we spend on these things,                              |
| 00:48      | and we know that if we don't get started now,                                   |
| 00:50      | then this episode won't be finished in time.                                    |
| 00:52      | And that's one of the reasons why I do time tracking.                           |
| 00:55      | I'm not sure about you, David.                                                  |
| 00:56      | There's probably a hundred reasons why I do time tracking,                      |
| 01:00      | but that's one of the big ones for me,                                          |
| 01:01      | just so that I know how long I'm spending on these things,                      |
| 01:04      | so I can look at it and go,                                                     |
| 01:05      | wait, I spent three hours yesterday playing on the [[Nintendo Switch]],             |
| 01:09      | and I was only going to spend 20 minutes.                                       |
| 01:10      | What happened there?                                                            |
| 01:11      | Yeah, I think that the concept of time tracking in our little nerd community    |
| 01:15      | has really taken off in the last couple of years,                               |
| 01:18      | which is kind of funny to me,                                                   |
| 01:20      | because as a lawyer, I've been living with time tracking for 25 years now,      |
| 01:25      | and most people in my lawyer circles just dread the idea of time tracking,      |
| 01:31      | but it's done for a different reason there.                                     |
| 01:33      | That's where you track your time in order to get paid.                          |
| 01:36      | Yeah, which I'm guessing some of our listeners will have to do as well,         |
| 01:40      | so anyway that we can help people automate things like that is great.           |
| 01:44      | And some people I know at work were expected to just keep a rough track         |
| 01:48      | of how long we're spending on each project,                                     |
| 01:50      | so that we know if one project starts taking up an awful lot of time,           |
| 01:54      | then we can let the right people know,                                          |
| 01:55      | and that project may end up on the chopping block,                              |
| 01:58      | or it may end up that we end up getting an extra couple of people to work on it |
| 02:01      | because it's so resource intensive.                                             |
| 02:03      | And that's something that I suspect a lot of people either do have,             |
| 02:07      | or it may come at them.                                                         |
| 02:10      | It's not an official requirement for us at work,                                |
| 02:12      | but several of my colleagues and I are pretty sure                              |
| 02:15      | that something like that is going to come in the future,                        |
| 02:17      | and actually we're quite excited about it,                                      |
| 02:20      | because A, automation opportunities,                                            |
| 02:22      | and B, it's just a good way of getting a good overview of your day.             |
| 02:27      | Yeah, also, something is that as humans,                                        |
| 02:31      | we're generally terrible at predicting                                          |
| 02:34      | how much time it's going to take to do a task.                                  |
| 02:36      | I don't know about you, Rose, but I'm off usually by like a half,               |
| 02:39      | even if I think it's going to take an hour, it usually takes two.               |
| 02:43      | Yeah, definitely, yeah.                                                         |
| 02:45      | So, I mean, this is something that people probably do already, right?           |
| 02:49      | Somebody asks you how long it's going to take you to do something.              |
| 02:52      | Okay, so you double how long you think it's going to take                       |
| 02:54      | before you tell them that number.                                               |
| 02:56      | Okay, and then that person will double it before they pass it on.               |
| 02:58      | And then at the end, it ends up probably being the right number.                |
| 03:02      | So, somebody, you'd start with four days,                                       |
| 03:04      | and then it ends up being 16 days or something,                                 |
| 03:06      | and that ends up being right                                                    |
| 03:07      | because there's a requirements change halfway along.                            |
| 03:09      | And that's why knowing how long this stuff takes is good,                       |
| 03:12      | because I really got into the idea of time tracking from [[Cortex]],                |
| 03:17      | which I'm sure many of our listeners also listen to.                            |
| 03:20      | And it was a thing where Mike said that he was surprised                        |
| 03:25      | how long he was spending doing things,                                          |
| 03:27      | because he thought it would take him like 20 minutes to do something,           |
| 03:30      | and it was taking him two hours.                                                |
| 03:32      | And of course, his now wife, Edina, knew, you know, he'd say,                   |
| 03:35      | oh, yeah, I'm just going to go and spend 20 minutes doing this,                 |
| 03:37      | and she'd know it would be two hours.                                           |
| 03:38      | And that was something that clicked for me.                                     |
| 03:40      | It's like, okay, how long am I really spending on these?                        |
| 03:43      | It's just 20 minutes things.                                                    |
| 03:46      | And I like to add an estimated duration to my tasks                             |
| 03:49      | and OmniFocus as well now                                                       |
| 03:50      | so that I can see how long I thought it was going to take                       |
| 03:53      | and then how long it actually took afterwards.                                  |
| 03:56      | And that's been very useful for me.                                             |
| 03:59      | And the advantage of a time tracker                                             |
| 04:01      | in any automation with a time tracker,                                          |
| 04:03      | which is what we're going to talk about,                                        |
| 04:05      | is that it brings science to the table.                                         |
| 04:07      | It allows you to see really how long it takes                                   |
| 04:10      | to do certain types of tasks.                                                   |
| 04:12      | So you have a much better idea, you know,                                       |
| 04:14      | more informed decision or opinion going forward                                 |
| 04:18      | about predicting how much time you'll take in the future.                       |
| 04:22      | Yeah, which, you know,                                                          |
| 04:23      | for something that you only do as a one-off                                     |
| 04:25      | is maybe not so useful,                                                         |
| 04:26      | but for things that you do time and time again,                                 |
| 04:28      | or that you're planning on doing again and again                                |
| 04:30      | in the future, like for example, automators,                                    |
| 04:32      | it's something doing podcasts brand new to me.                                  |
| 04:35      | I'd never done it before.                                                       |
| 04:35      | Like, how long do I need to spend doing this?                                   |
| 04:37      | And I can see over time, since I've started,                                    |
| 04:39      | I've got faster at doing the episodes, you know,                                |
| 04:42      | making sure that we've got all the show notes,                                  |
| 04:43      | links and everything like that.                                                 |
| 04:45      | That's getting faster as I go,                                                  |
| 04:47      | just because I'm getting more efficient at it.                                  |
| 04:48      | And that's really nice to see.                                                  |
| 04:50      | Of course, that doesn't mean that I'm, you know,                                |
| 04:52      | just going and playing on the switch.                                           |
| 04:53      | I'm now thinking of other things that I can do                                  |
| 04:55      | to help make this podcast even better.                                          |
| 04:58      | But, you know, that's one of the things                                         |
| 04:59      | that I have taken from this as well.                                            |
| 05:03      | The other thing I like about time tracking                                      |
| 05:04      | is it allows you to find time sinks.                                            |
| 05:08      | And those are things that you're assuming you do every day.                     |
| 05:11      | You don't think they take that long,                                            |
| 05:13      | but it gives you feedback as to exactly how long                                |
| 05:16      | they do take.                                                                   |
| 05:17      | And I can tell you, just like some of the administrative                        |
| 05:20      | stuff I do for MacSparky and for the law practice,                             |
| 05:24      | I was thinking they really didn't take that much                                |
| 05:26      | of my time and I found out that they actually                                   |
| 05:28      | took quite a bit of time.                                                       |
| 05:29      | And that's what motivated me to hire someone                                    |
| 05:32      | to help me out with some of those pieces                                        |
| 05:33      | so I don't have to do them anymore.                                             |
| 05:36      | On the flip side, I've always thought that I spent,                             |
| 05:39      | you know, because I do so much in OmniFocus,                                    |
| 05:41      | I always thought that I spent a lot of time in OmniFocus                        |
| 05:44      | because I guess that app is where I go all day                                  |
| 05:46      | to get my task list.                                                            |
| 05:47      | And in the back of my mind, I was thinking,                                     |
| 05:49      | maybe I am spending too much time in this app,                                  |
| 05:51      | you know, maybe it's just too, you know,                                        |
| 05:53      | I'm making it too complicated.                                                  |
| 05:55      | But then once I started time tracking,                                          |
| 05:56      | I realised I actually don't spend that much time in the app.                    |
| 05:59      | So you learn all sorts of interesting things                                    |
| 06:01      | with time tracking.                                                             |
| 06:02      | Yes, and that's where it's really useful                                        |
| 06:04      | because there are different kinds of time tracking                              |
| 06:06      | you can do.                                                                     |
| 06:07      | Obviously, you can just track everything that you do at work,                   |
| 06:10      | which if that's all you need to track time for,                                 |
| 06:12      | then that's fine.                                                               |
| 06:14      | Or you can go ahead and do like full on tracking everything                     |
| 06:18      | in your lifetime tracking.                                                      |
| 06:19      | I've ended up being somewhere in the middle where I track,                      |
| 06:22      | you know, work and I track the automators,                                      |
| 06:24      | sweet setup things, stuff like that.                                            |
| 06:27      | And then a couple of areas where I do want to see                               |
| 06:32      | what I'm doing with my time.                                                    |
| 06:33      | So I've been tracking my oversleeping,                                          |
| 06:35      | which was one of the things I will mention how I do later,                      |
| 06:38      | just because it really opened my eyes to go,                                    |
| 06:41      | how long am I spending lazing in bed in the mornings                            |
| 06:44      | just scrolling through Twitter?                                                 |
| 06:45      | Like that's not good for me.                                                    |
| 06:47      | I could be doing something much better with my mornings                         |
| 06:49      | or at the very least sitting in a chair                                         |
| 06:52      | scrolling through Twitter, which is probably better for me.                     |
| 06:55      | So that's the different angles to time tracking                                 |
| 07:01      | that you can look at.                                                           |
| 07:02      | So the question that the automators are bringing                                |
| 07:05      | to the table today is how do you automate that?                                 |
| 07:07      | And we thought we would cover that                                              |
| 07:10      | in a couple of different ways.                                                  |
| 07:12      | Let's start with the thing everybody has for free                               |
| 07:15      | on their iOS devices that shipped just this year                                |
| 07:19      | with iOS 12 and that's the iOS screen time service.                             |
| 07:23      | Yes, and that is a very simple built-in function.                               |
| 07:28      | You probably need to turn it on                                                 |
| 07:30      | if you haven't been getting weekly notifications telling you                    |
| 07:33      | how much time you've been spending on your devices.                             |
| 07:35      | But inside of settings and screen time,                                         |
| 07:37      | you can actually see how long that you spend                                    |
| 07:40      | on different categories of applications.                                        |
| 07:42      | So for example, I'm looking at it and it's telling me                           |
| 07:44      | that I spent two hours, 46 minutes on networking today,                         |
| 07:47      | social networking, but it turns out                                             |
| 07:49      | that that's actually my work's chat application.                                |
| 07:51      | So I think I'm okay there.                                                      |
| 07:54      | Because once you tap on the overview at the top,                                |
| 07:58      | it's split down by device, which is really nice.                                |
| 08:00      | So all of your iOS devices,                                                     |
| 08:02      | even if you're living the multi-pad lifestyle,                                  |
| 08:04      | categorised in here.                                                            |
| 08:06      | And then when you tap on that, it goes through                                  |
| 08:08      | and it shows you screen time.                                                   |
| 08:09      | For example, your most used applications                                        |
| 08:12      | and you can switch it to categories.                                            |
| 08:14      | So I can see that I spent an hour and 10 minutes                                |
| 08:16      | on other 30 minutes on productivity, et cetera.                                 |
| 08:20      | And this is a really simple, it's completely built in.                          |
| 08:23      | You don't even need to go crazy and start classifying things                    |
| 08:28      | because it's already done for you                                               |
| 08:30      | based on which category the app is primarily in                                 |
| 08:32      | in the app store.                                                               |
| 08:33      | And that just shows you everything                                              |
| 08:36      | that you've got there.                                                          |
| 08:37      | And what's more, you can take it a step further                                 |
| 08:39      | if you like, and you can set time limits for applications,                      |
| 08:43      | which is something that you may want to do                                      |
| 08:45      | if you see that you're spending six or seven hours                              |
| 08:47      | in Tweetbot every day.                                                          |
| 08:49      | You may want to set a limit for yourself,                                       |
| 08:51      | which is the other side of time tracking                                        |
| 08:53      | that after time tracking, follow up if you will.                                |
| 08:56      | It was interesting to me when we hit the new year for 2019,                     |
| 09:00      | how many of my non-nerd friends were building                                   |
| 09:03      | new year's resolutions around the feedback                                      |
| 09:05      | they were getting from screen time                                              |
| 09:06      | because a lot of people weren't really aware                                    |
| 09:09      | of how they were spending their time.                                           |
| 09:11      | And while screen time is definitely limited                                     |
| 09:14      | in a lot of ways, one of the nice things about it                               |
| 09:17      | is that it's automatic.                                                         |
| 09:18      | So all this stuff is happening without any interaction                          |
| 09:21      | by the user.                                                                    |
| 09:22      | And that's really, that's one of the golden things                              |
| 09:26      | about time tracking, some of these time tracking apps                           |
| 09:28      | is when they automatically collect the data for you,                            |
| 09:31      | the data is inherently better.                                                  |
| 09:33      | Yes, and that is, of course, what you want.                                     |
| 09:37      | If you're looking at this, then you're probably not going to,                   |
| 09:40      | at the very least, start, remember to start                                     |
| 09:42      | and stop timers every single time.                                              |
| 09:44      | And that's something I've really struggled with                                 |
| 09:46      | when I was first getting into this.                                             |
| 09:47      | I'd look at it and I'd had a timer                                              |
| 09:50      | that I was on the phone with my mom for 16 hours                                |
| 09:52      | and well, I was only on the phone with her for 16 minutes.                      |
| 09:54      | What happened?                                                                  |
| 09:55      | I got distracted after I hung up                                                |
| 09:57      | and something happened and the other thing happened                             |
| 09:59      | and then I fell asleep and a day later                                          |
| 10:03      | that information is, you know,                                                  |
| 10:04      | that information is now incorrect there.                                        |
| 10:06      | And of course, there's an alternative to this                                   |
| 10:08      | on Android as well called digital wellbeing,                                    |
| 10:11      | which I know was only on, I think, the Pixel phones at launch                   |
| 10:15      | but it should be coming to other devices                                        |
| 10:19      | if it's not on them already.                                                    |
| 10:20      | And I think that it's really good                                               |
| 10:22      | that this is getting built into operating systems                               |
| 10:24      | because this is the kind of thing,                                              |
| 10:26      | okay, yeah, great for tracking kids, sure, you know,                            |
| 10:29      | like maybe you don't want your kids                                             |
| 10:30      | to be playing Minecraft all day every day.                                      |
| 10:33      | But for us adults as well, just to see, you know,                               |
| 10:36      | like what are we doing with our time?                                           |
| 10:38      | Yeah, so that one is free.                                                      |
| 10:40      | Like I said, you've got it already.                                             |
| 10:42      | It's most likely already been collecting data for you.                          |
| 10:44      | So if you haven't looked at it,                                                 |
| 10:46      | just go into the screen time view                                               |
| 10:48      | and the settings on your iPhone or your iPad                                    |
| 10:51      | and you've got time tracking done already.                                      |
| 10:53      | And, you know, that's, I think one of the goals                                 |
| 10:55      | of the automation of this stuff is to lower the cost                            |
| 10:58      | of entry, you know, to get accurate time recording data                         |
| 11:03      | with as little effort on your behalf as possible.                               |
| 11:05      | So you can have the benefit at the back end                                     |
| 11:07      | of getting all that great data                                                  |
| 11:09      | and being able to use it to make decisions.                                     |
| 11:11      | Yes, and that, you know, that's something that we want.                         |
| 11:14      | Now there are a few disadvantages to screen time                                |
| 11:16      | for iOS digital wellbeing on Android.                                           |
| 11:19      | They don't sync with the desktop.                                               |
| 11:20      | So, you know, you may spend eight hours, nine hours a day                       |
| 11:25      | using a Mac or a Windows machine or a Linux machine.                            |
| 11:29      | There's no data from those devices,                                             |
| 11:30      | at least not synchronised with it.                                              |
| 11:32      | And you can't get that data out.                                                |
| 11:35      | That data is inside of your operating system.                                   |
| 11:37      | You can take screenshots,                                                       |
| 11:38      | you can manually write down the stats,                                          |
| 11:41      | you could probably write a shortcut                                             |
| 11:43      | that will parse a screenshot for the text                                       |
| 11:45      | and save it to a CSV file or something for you.                                 |
| 11:48      | If you've done that, please share it in the forums.                             |
| 11:51      | But, you know, it is limited in that respect.                                   |
| 11:54      | But for that trade-off, it is 100% automatic.                                   |
| 11:58      | So that's a good start, right?                                                  |
| 12:00      | Yeah, it is, you know, I really wish [[Apple]] would open this up,                  |
| 12:03      | though.                                                                         |
| 12:04      | Oh, yeah.                                                                       |
| 12:05      | Just let third parties access that data.                                        |
| 12:08      | And people say, well, why would you do that?                                    |
| 12:10      | That's your screen time data you shouldn't be able to share.                    |
| 12:12      | But they do let you share your health data                                      |
| 12:14      | with third-party apps.                                                          |
| 12:16      | Though it did take a little while for that to happen                            |
| 12:18      | if I remember correctly.                                                        |
| 12:19      | And there is, of course, one other limitation                                   |
| 12:21      | that I forgot I've mentioned earlier.                                           |
| 12:23      | It classifies the apps based                                                    |
| 12:24      | on their primary category in the app store,                                     |
| 12:26      | which means that Tweetbot is under social networking.                           |
| 12:29      | But if you use Tweetbot for work,                                               |
| 12:32      | then it gets classified as social networking, not work.                         |
| 12:35      | And that is something that you can't change.                                    |
| 12:37      | So you have to keep that in mind                                                |
| 12:41      | if you're actually setting those app limits,                                    |
| 12:43      | which you can do, or you could just not do it,                                  |
| 12:45      | which I have ended up having to not do                                          |
| 12:48      | in a couple of areas I wanted to because otherwise,                             |
| 12:51      | I would use those apps for work                                                 |
| 12:53      | and it would get classified towards my private time.                            |
| 12:56      | And even though you can whitelist an app,                                       |
| 12:58      | you can't whitelist the other apps in the category                              |
| 13:01      | for the time that you spend in that one application,                            |
| 13:04      | which is a negative.                                                            |
| 13:05      | But there we go.                                                                |
| 13:06      | And it's just too limited.                                                      |
| 13:08      | I mean, you can't say categorise everything                                     |
| 13:13      | from this hour to that hour into a certain project.                             |
| 13:16      | Like when Rose and I are recording automators,                                  |
| 13:18      | we're working in all sorts of different apps                                    |
| 13:20      | as we prep, pair, forward, record the show.                                     |
| 13:23      | Why couldn't we just say take those two hours                                   |
| 13:25      | and just make that automator's time?                                            |
| 13:27      | And it just doesn't do a lot of stuff like that.                                |
| 13:30      | It's not really even engineered to be that,                                     |
| 13:33      | what we're talking about, the time tracker.                                     |
| 13:36      | But it's an entry point, it's free.                                             |
| 13:39      | And like I said, I do think the data is good.                                   |
| 13:42      | Maybe it's miscategorised,                                                      |
| 13:43      | but you do have very accurate information                                       |
| 13:45      | about how much time you spend in apps.                                          |
| 13:48      | Yes, and hopefully next year we'll open it up                                   |
| 13:51      | so [[Drafts]] can do things like report the workspace                               |
| 13:53      | that I'm in when I'm in [[Drafts]] back to it.                                      |
| 13:56      | So then I can look at it and go, hey, look,                                     |
| 13:57      | I was actually working on automators here                                       |
| 13:59      | when I was in [[Drafts]] for those 45 minutes.                                      |
| 14:01      | But in these 45 minutes, I was writing scripts                                  |
| 14:04      | or something else, which is nice.                                               |
| 14:06      | One of the more popular time trackers for years now                             |
| 14:10      | has been rescue time.                                                           |
| 14:11      | Yes, and this was, I believe,                                                   |
| 14:14      | my very first time tracking application                                         |
| 14:16      | because I started using it as a browser extension,                              |
| 14:19      | I think back in [[Firefox]] in the day,                                             |
| 14:21      | I've even still been on Windows back then.                                      |
| 14:23      | And it's, as I said, originators browser extension,                             |
| 14:28      | you can now install it on Mac OS Windows.                                       |
| 14:32      | I believe they have a Linux application as well.                                |
| 14:35      | And they even have iOS apps as well,                                            |
| 14:38      | though that tracks what you're doing by your location,                          |
| 14:41      | which may or may not be an accurate indicator                                   |
| 14:43      | of what you're actually doing.                                                  |
| 14:45      | But this does automated tracking on your Mac                                    |
| 14:47      | and it is extensible,                                                           |
| 14:49      | which means it's got things like if this and that                               |
| 14:50      | and Zapier support, and you can take those reports                              |
| 14:54      | and put them into [[Day One]],                                                      |
| 14:56      | but if there's some that if you wanted to.                                      |
| 14:58      | And this is automated again.                                                    |
| 14:59      | So if you're using it, then it can say,                                         |
| 15:01      | okay, I can see that you were using, for example,                               |
| 15:04      | today I spent a lot of time in PHP storm.                                       |
| 15:07      | And so it will tell me that I spent probably six hours                          |
| 15:10      | of my day in PHP storm in the other two hours                                   |
| 15:12      | of my work day in [[Firefox]].                                                      |
| 15:15      | So that I have a good idea                                                      |
| 15:17      | and it can give you more data as well,                                          |
| 15:19      | which is really nice.                                                           |
| 15:20      | It's the one that's been around a long time.                                    |
| 15:22      | I have to admit though,                                                         |
| 15:23      | my favourite is one of my favourites is timing,                                   |
| 15:27      | which is a native Mac application                                               |
| 15:30      | that is similar to rescue time,                                                 |
| 15:31      | but it's built in, it's running locally on your Mac.                            |
| 15:34      | So you don't have to share all your data                                        |
| 15:37      | up to some cloud service.                                                       |
| 15:39      | And once again, this one has that advantage                                     |
| 15:42      | that you get with iOS screen time.                                              |
| 15:45      | Did you hear my voice there?                                                    |
| 15:46      | I squeaked.                                                                     |
| 15:47      | That was kind of fun.                                                           |
| 15:48      | Yeah, that was fun. Anyway, podcasting with a cold.                             |
| 15:52      | Anyway, with timing, it just automatically tracks                               |
| 15:57      | and keeps track of exactly where you're doing your time.                        |
| 16:00      | But it's much more granular.                                                    |
| 16:01      | Like if you're on the web,                                                      |
| 16:03      | it just doesn't tell you that you were in [[Safari]],                               |
| 16:05      | it tells you which website you're on.                                           |
| 16:07      | Or if you're in Microsoft Word,                                                 |
| 16:08      | it tells you what document you're in.                                           |
| 16:09      | If you're in the Finder, what folder you were in.                               |
| 16:12      | And that type of information is so much more useful                             |
| 16:15      | because it's so much more granular.                                             |
| 16:17      | It works automatically.                                                         |
| 16:18      | So you don't have to think about it.                                            |
| 16:20      | You don't have to manually throw triggers.                                      |
| 16:23      | And then I would recommend,                                                     |
| 16:25      | if you're interested in this stuff,                                             |
| 16:26      | downloading the trial and full disclosure,                                      |
| 16:28      | they have sponsored past episodes of, I believe,                                |
| 16:32      | one of my show, the free agents.                                                |
| 16:35      | I don't think they've,                                                          |
| 16:36      | maybe they've done Mac Power users too.                                         |
| 16:37      | So occasionally they've been a sponsor here and there,                          |
| 16:40      | but it's just, I think it's an app worth trying                                 |
| 16:42      | if you're interested in this stuff,                                             |
| 16:43      | because especially if you spend a lot of time                                   |
| 16:45      | working on your Mac,                                                            |
| 16:46      | because it works on your Mac.                                                   |
| 16:48      | They don't have an iOS version,                                                 |
| 16:51      | but it does such a good job on your Mac.                                        |
| 16:53      | And you can go in afterwards                                                    |
| 16:55      | and manually add entries very easily.                                           |
| 16:58      | Like an example is I,                                                           |
| 17:01      | when I want to come and extend timing,                                          |
| 17:04      | I can bring the rest of my life into it very easily,                            |
| 17:07      | either with data I've collected through Toggle,                                 |
| 17:09      | or just, you know, my knowledge of my own calendar.                             |
| 17:12      | Like if I spend an hour and a half exercising,                                  |
| 17:16      | and even though I'm not doing that while at my Mac,                             |
| 17:18      | I can sit down at timing and just literally drag a bar                          |
| 17:22      | an hour and a half or just hit a new entry                                      |
| 17:24      | and it creates that for you.                                                    |
| 17:26      | So you can manually create the time                                             |
| 17:28      | that you're away from your Mac.                                                 |
| 17:30      | But the stuff for me that's most important of being accurate                    |
| 17:33      | is the stuff where I'm sitting at my Mac                                        |
| 17:34      | and knowing, well, exactly how much time did I spend                            |
| 17:37      | on the free agent stuff versus the automator stuff?                             |
| 17:40      | And this is really good for that.                                               |
| 17:43      | And the, so that's one worth trying out.                                        |
| 17:46      | You can get it, I think, a free two week trial.                                 |
| 17:48      | And if you're a set up subscriber,                                              |
| 17:50      | you've already got it for free,                                                 |
| 17:51      | because it's part of set up.                                                    |
| 17:52      | So that's one, I think that's a real good one                                   |
| 17:56      | worth checking out, especially if you spend                                     |
| 17:58      | a lot of time on your Mac.                                                      |
| 18:00      | Yes, the only thing that I wish I had is,                                       |
| 18:02      | this is where a rescue time for me is a little bit better                       |
| 18:04      | and one that we'll get to in a moment, Toggle,                                  |
| 18:07      | is that because timing is only on your Mac,                                     |
| 18:09      | it doesn't have an API, which means that if I start                             |
| 18:12      | on a new project for, say, Learn OmniFocus,                                     |
| 18:15      | then I add this in a, I usually add it actually                                 |
| 18:19      | in my invoicing software, and then it just runs through                         |
| 18:22      | and it creates a project in OmniFocus for me                                    |
| 18:24      | and it adds it in my time tracking application of choice                        |
| 18:27      | as a project, so it's already there,                                            |
| 18:28      | so I don't need to remember to create this project.                             |
| 18:32      | And that's something that I can't do in timing.                                 |
| 18:34      | And that's something that you might want to think of,                           |
| 18:37      | adding time tracking to other things                                            |
| 18:39      | so that you have even more enhanced automation.                                 |
| 18:42      | It's kind of funny, it's good at automatically time tracking                    |
| 18:45      | because that's the nature of the application,                                   |
| 18:48      | but it's not as automation-friendly                                             |
| 18:50      | on the administrative side.                                                     |
| 18:52      | Yes, which is something that you're gonna have to consider                      |
| 18:54      | with the different options that we are presenting here.                         |
| 18:57      | Do you want something that is automated                                         |
| 18:59      | in the tracking of the time, or do you want something                           |
| 19:01      | that is automated in the utilisation of data and setup?                         |
| 19:06      | So yeah, something to keep in mind.                                             |
| 19:10      | And then another one that a lot of people use these days                        |
| 19:13      | is Toggle, T-O-G-G-L.                                                           |
| 19:15      | This is the one that I use because,                                             |
| 19:18      | oh boy, the automation options are pretty much limitless here.                  |
| 19:23      | And yeah, that scratches my automation note itch,                               |
| 19:26      | and I'm pretty sure that you've been using Toggle as well,                      |
| 19:29      | haven't you, David?                                                             |
| 19:30      | Yeah, I do, I have a Toggle account, and it's great.                            |
| 19:33      | I mean, in terms of automation stuff,                                           |
| 19:35      | like if you're spending time on iOS,                                            |
| 19:38      | a lot of your time on iOS,                                                      |
| 19:40      | you can do a lot of cool stuff with Siri shortcuts and Toggle.                  |
| 19:44      | Yes, yes, you can.                                                              |
| 19:45      | So this originally started out                                                  |
| 19:47      | [[Federico Viticci]] of [MacStories](https://www.macstories.net/), of course.                                     |
| 19:50      | Who else is it gonna start with?                                                |
| 19:51      | He created a series of workflows, as it was back then,                          |
| 19:55      | to start and stop different toggle timers.                                      |
| 19:58      | And this has evolved over the years.                                            |
| 20:00      | I have seen hundreds of different versions                                      |
| 20:02      | of his workflows running around.                                                |
| 20:04      | They're now shortcuts, of course,                                               |
| 20:05      | and they're all available on the [MacStories](https://www.macstories.net/) website,                           |
| 20:08      | and I will put a link to that in the show notes.                                |
| 20:10      | But nowadays, the [[Toggle]] app itself                                             |
| 20:13      | has got native shortcuts integration,                                           |
| 20:15      | which means that you can donate specific timers                                 |
| 20:18      | so that you can integrate it into other things.                                 |
| 20:20      | So that, for example, when I use my Automator shortcut,                         |
| 20:23      | it's asked me, you know, do I want to go to Quip                                |
| 20:26      | or do I want to go to my [[Drafts]] workspace                                       |
| 20:28      | for Automators, et cetera?                                                      |
| 20:29      | But it will start the Automators timer for me                                  |
| 20:32      | as soon as I open that shortcut.                                                |
| 20:34      | So before I even think about which app it is                                    |
| 20:37      | I'm going to use when I'm working on Automators,                                |
| 20:39      | it just runs that for me, so that that's already built in.                      |
| 20:43      | And that's where it has come to be really useful for me                         |
| 20:46      | because they have a web application as well.                                    |
| 20:48      | They have browser extensions, and there's APIs.                                 |
| 20:55      | There is even, and this is one thing I love,                                    |
| 20:58      | there is a series of [[AppleScript\|AppleScripts]] for [[OmniFocus]]                                |
| 21:02      | so that when you're working on a task in OmniFocus,                             |
| 21:04      | you can start a timer and stop a timer for that task,                           |
| 21:07      | and then that will lock that data in Toggle for you.                            |
| 21:10      | And yeah, this makes all of my nerd senses tingle.                              |
| 21:14      | Yeah, and this is a lot easier than it used to be.                              |
| 21:16      | What, like Rose was talking about,                                              |
| 21:19      | the way this started out was with [[Federico Viticci\|Federico's]] API calls,                         |
| 21:22      | which were fairly complex workflows                                             |
| 21:25      | and later [[Shortcuts\|Siri Shortcuts]].                                                     |
| 21:27      | But now, using the Toggle app,                                                  |
| 21:29      | you can turn it into a one step,                                                |
| 21:32      | basically switch to turn the timer on.                                          |
| 21:34      | As an example, a few episodes ago                                               |
| 21:38      | when we talked about the Siri shortcut home screen,                             |
| 21:40      | like I told you, I had a contextual,                                            |
| 21:43      | I have contextual Siri shortcuts as home screen icons.                          |
| 21:47      | So one of them is like MacSparky email,                                        |
| 21:51      | it'll be the inbox.                                                             |
| 21:52      | So I'll just go to the MacSparky icon                                          |
| 21:55      | and I'll tap on inbox.                                                          |
| 21:56      | It will go and flip on a timer in Toggle                                        |
| 21:58      | that manages, that just tracks the time I spit on email                         |
| 22:01      | and MacSparky, then it'll go into [[Airmail]]                                  |
| 22:05      | and open up the inbox in Airmail.                                               |
| 22:07      | And so like, if I'm on my iPad or my iPhone,                                    |
| 22:10      | I push one button, I set a timer                                                |
| 22:12      | and I start processing email.                                                   |
| 22:14      | Yes, and this is something that you,                                            |
| 22:17      | if you're looking at time tracking,                                             |
| 22:18      | you're probably gonna want to build it into other things                        |
| 22:21      | so that it can happen automatically                                             |
| 22:24      | if it's not a solution that does it automatically for you.                      |
| 22:27      | So for example, timing that does that.                                          |
| 22:29      | And that is where I've been using a beta application                            |
| 22:33      | that's currently called Timery.                                                 |
| 22:34      | I think the name may still be in flux.                                          |
| 22:37      | And they have got amazing shortcut support.                                     |
| 22:41      | It is so good.                                                                  |
| 22:42      | And that's what I've been using for quite a while now.                          |
| 22:44      | And I'm really enjoying the ability                                             |
| 22:48      | to just have these toggles start,                                               |
| 22:51      | these toggle timers start as part of my other shortcuts.                        |
| 22:55      | So for example, when I clock into work,                                         |
| 22:56      | I also start my work timer and toggle.                                          |
| 22:59      | You may think that that is slightly redundant,                                  |
| 23:01      | but I like to see how long I spend chatting with people                         |
| 23:04      | at work about different projects                                                |
| 23:05      | versus going through my email                                                   |
| 23:07      | versus actually working on projects.                                            |
| 23:10      | Because it's quite eye-opening, I'm sure.                                       |
| 23:12      | You will find, see how long you actually spend                                  |
| 23:15      | doing busy work instead of work work,                                           |
| 23:17      | of which may or may not be important to you.                                    |
| 23:20      | Yeah, hopefully by the time this episode airs,                                  |
| 23:23      | that Timery app will be released.                                               |
| 23:25      | And the name has changed multiple times throughout the beta.                    |
| 23:28      | So I don't want everyone to just count on it being Timery                       |
| 23:31      | when it comes out,                                                              |
| 23:32      | because I don't know that that's the case.                                      |
| 23:34      | No, it may have changed by then.                                                |
| 23:35      | It's basically the toggle app                                                   |
| 23:37      | that we all really wanted toggle to make.                                       |
| 23:40      | Yes.                                                                            |
| 23:41      | It's very user-friendly.                                                        |
| 23:43      | It's very shortcut-friendly.                                                    |
| 23:45      | So you can very easily create timers.                                           |
| 23:48      | You can even create ways to monitor.                                            |
| 23:51      | It's just, it's very powerful in terms of time tracking.                        |
| 23:55      | And all of that stuff is engineered around the idea                             |
| 23:57      | of using Siri shortcuts to automate,                                            |
| 24:00      | setting those timers as much as possible.                                       |
| 24:02      | Because the underlying problem with toggle for me                               |
| 24:05      | is that sometimes my toggle data is garbage                                     |
| 24:08      | because of my own human failure.                                                |
| 24:10      | You know, when I try to use toggle,                                             |
| 24:12      | just like Rose was talking about earlier,                                       |
| 24:14      | sometimes you'll wake up the next day                                           |
| 24:16      | and say that you had a timer that just ran for 16 hours.                        |
| 24:19      | And, you know, that's just life unless you get really good                      |
| 24:23      | at every time you contact, shifting your life,                                  |
| 24:27      | stopping and setting a new timer.                                               |
| 24:29      | I mean, you can automate a lot of this stuff,                                   |
| 24:32      | but you can't automate all of it.                                               |
| 24:33      | And that to me is one of the problems with toggle                               |
| 24:37      | and it can get you into trouble.                                                |
| 24:38      | But Siri shortcuts can go a long way towards fixing that                        |
| 24:42      | if you can add those Siri shortcut automations                                  |
| 24:45      | with something like Timery to automatically throw                               |
| 24:48      | the switches for you as you move throughout your day.                           |
| 24:50      | Now we should mention toggle.                                                   |
| 24:52      | The toggle app itself does have shortcut support.                               |
| 24:55      | It was not great at the beginning,                                              |
| 24:58      | but it has improved over time.                                                  |
| 25:00      | So you can do all of this as well.                                              |
| 25:02      | And of course, there's a free version of toggle.                                |
| 25:04      | There's a free trial of timing, rescue time.                                    |
| 25:06      | They have a free and a premium tier and screen time                             |
| 25:09      | as well as the Android alternative are also free as well.                       |
| 25:13      | So all of this is stuff that you can just try                                   |
| 25:16      | and see if it works for you.                                                    |
| 25:17      | And one of the ways that I've upgraded things like toggle                       |
| 25:21      | is I have two time-based automations.                                           |
| 25:24      | So there's one that at 10 p.m. every single night                               |
| 25:29      | starts by telling me,                                                           |
| 25:31      | well, it actually just stops my timer                                           |
| 25:33      | and says staying up too late.                                                   |
| 25:35      | So if there's a timer running, it stops then,                                   |
| 25:38      | which means that I never get time is running overnight.                         |
| 25:41      | And yes, because I mean, if I am continuing to work,                            |
| 25:46      | I also have it send me, I'm using Zapier for this.                              |
| 25:48      | It also sends me a push bullet notification                                     |
| 25:50      | to let me know it's done that.                                                  |
| 25:52      | Because otherwise, if I am working on something                                 |
| 25:55      | and it's important, then I might lose that entry                                |
| 26:01      | as it is, it's quite easy to go back                                            |
| 26:03      | and just tell you previous entry to continue.                                   |
| 26:06      | And at 6 a.m. in the morning,                                                   |
| 26:08      | it actually starts an oversleeping timer for me,                                |
| 26:12      | which means that it's the time that I'm spending                                |
| 26:14      | leasing around in bed these last few days                                       |
| 26:17      | after the Christmas break                                                       |
| 26:18      | and in the run out to a holiday for me,                                         |
| 26:21      | I've been sleeping a little later than I would usually.                         |
| 26:23      | So I've actually got that turned off.                                           |
| 26:24      | And I do tone these off when I travel,                                          |
| 26:26      | because for example, when I go to Seattle in a few weeks,                       |
| 26:29      | which will have been a few weeks before this podcast releases,                  |
| 26:32      | then it would run at the wrong times, of course.                                |
| 26:38      | And so that's something that you may need to keep an eye on                     |
| 26:40      | if you are traveling a lot                                                      |
| 26:43      | and you're using time-based automations                                         |
| 26:46      | with some kind of time-tracking software.                                       |
| 26:49      | But it works pretty damn well for me,                                           |
| 26:51      | because that means that if something is running,                                |
| 26:53      | and usually it was something like a five-minute timer,                          |
| 26:56      | like prepping for tomorrow.                                                     |
| 26:58      | So like making sure my lunch is ready,                                          |
| 27:00      | making sure my breakfast is ready,                                              |
| 27:02      | and that I've cleared out those odd things                                      |
| 27:04      | that end up in my handbag every day.                                            |
| 27:06      | Usually that takes me five to 10 minutes and I start that.                      |
| 27:09      | And then we put on an episode of Star Trek                                      |
| 27:11      | and I sit down and I start watching it.                                         |
| 27:13      | And I completely forget to stop my timer.                                       |
| 27:17      | I don't put the track in the time that I spend on the TV.                       |
| 27:19      | I do check the time that I spend playing on my [[Nintendo Switch\|Switch]],                          |
| 27:21      | because I only got that for Christmas.                                          |
| 27:23      | And I am really trying not to spend too much time playing                       |
| 27:28      | on it, because I'm slightly concerned about RSI issues.                         |
| 27:31      | Which game has got all your timers?                                             |
| 27:34      | Zelda, Breath of the Wild.                                                      |
| 27:35      | Yeah, that's the one.                                                           |
| 27:37      | Yeah, yeah.                                                                     |
| 27:38      | But there is a couple of good games.                                            |
| 27:41      | I've also got Cat Quest and Shelter 2 Generations.                              |
| 27:44      | So yeah, it's definitely a optional time sync,                                  |
| 27:48      | which is something that I'm keeping an eye on                                   |
| 27:50      | because I don't want to get it to get out of hand.                              |
| 27:53      | Yeah, but you don't need to be afraid                                           |
| 27:55      | of tracking leisure time.                                                       |
| 27:57      | I think it's actually a healthy thing.                                          |
| 28:00      | Yes, it is.                                                                     |
| 28:00      | And something you shouldn't feel bad about,                                     |
| 28:02      | because I mean, the point of working hard                                       |
| 28:04      | is also to play hard.                                                           |
| 28:06      | But it is a good idea to have an idea                                           |
| 28:07      | of where that all fits in the overall scheme.                                   |
| 28:10      | Definitely.                                                                     |
| 28:11      | And it's one of these things.                                                   |
| 28:12      | Actually, that is from Cal Newport, one of his books.                           |
| 28:15      | I think it was How to Be a Straight A Student                                   |
| 28:17      | or How to Win at College.                                                       |
| 28:18      | He was essentially saying that you need to plan your free time                  |
| 28:21      | and the rest of the time is work time if you want to succeed.                   |
| 28:25      | So you can plan to have four or five hours                                      |
| 28:28      | of downtime in a day.                                                           |
| 28:29      | That's fine, but be intentional about what you're doing,                        |
| 28:31      | which I thought was a good way of looking at things.                            |
| 28:35      | So are you doing all the automation,                                            |
| 28:38      | the time-based automation for your toggle through Zapier?                       |
| 28:42      | Not all of it.                                                                  |
| 28:43      | Some of it I'm doing through if this and that                                   |
| 28:45      | just because I'd set it up in if this and that before.                          |
| 28:48      | For example, I have one that tells me                                           |
| 28:50      | that I should be starting to record automators.                                 |
| 28:53      | And it starts tracking that based on our calendar, actually.                    |
| 28:58      | So I've subscribed to our automators calendar                                   |
| 29:01      | where we put our recordings in, in Google Calendar.                             |
| 29:05      | And then whenever that event starts,                                            |
| 29:08      | providing it's not an all-day event                                             |
| 29:10      | because we also put the days that the podcast goes live                         |
| 29:14      | in there, then it will start a time-tracking event for me.                      |
| 29:18      | And that one's only in if this and that,                                        |
| 29:20      | but I may have to move it to Zapier                                             |
| 29:22      | so that I also get positive notifications                                       |
| 29:24      | via push-bullet.                                                                |
| 29:25      | Though, of course, you can do notifications                                     |
| 29:26      | by if this and that,                                                            |
| 29:28      | but I am trying to coral my notifications                                       |
| 29:30      | so that I get ones where there could be an action required                      |
| 29:35      | via push-bullet,                                                                |
| 29:37      | and the ones where there is no action required                                  |
| 29:39      | via if this and that.                                                           |
| 29:41      | Makes sense, but all that's possible                                            |
| 29:42      | because Toggle's a web-based service                                            |
| 29:44      | and it gives you those types of powers.                                         |
| 29:47      | Yes.                                                                            |
| 29:48      | Something I should mention,                                                     |
| 29:49      | timing can actually work with the toggle data.                                  |
| 29:54      | I haven't spent a bunch of time on that yet,                                    |
| 29:56      | but that's something I want to look into                                        |
| 29:57      | where they can, you can use,                                                    |
| 30:00      | maybe you can combine them as well.                                             |
| 30:01      | That's another possibility.                                                     |
| 30:03      | Yes, the way that I would like to do it,                                        |
| 30:05      | unfortunately, as far as I'm aware,                                             |
| 30:07      | does not work,                                                                  |
| 30:08      | which is to send the timing data into Toggle.                                   |
| 30:13      | I believe it can only collect the data from Toggle,                             |
| 30:18      | which is a shame,                                                               |
| 30:19      | but understandable because they are a Mac app                                   |
| 30:21      | and they are not a toggle application.                                          |
| 30:25      | This episode of The Automators is brought to you                                |
| 30:27      | by ExpressVPN,                                                                  |
| 30:28      | where you can get high-speed, secure,                                           |
| 30:30      | and anonymous VPN services.                                                     |
| 30:33      | Get three months for free with a one-year package.                              |
| 30:36      | Just go to expressvpn.com/automators.                                     |
| 30:40      | We've seen a lot in the media lately                                            |
| 30:42      | about online security breaches.                                                 |
| 30:44      | It's only natural to worry about where your data goes,                          |
| 30:47      | especially when something as simple as sending an email                         |
| 30:49      | can put your private information at risk.                                       |
| 30:52      | And forget about those creepy guys at the coffee shop.                          |
| 30:55      | Chances are you're being tracked by social media sites,                         |
| 30:58      | marketing companies,                                                            |
| 30:59      | and possibly even your internet provider.                                       |
| 31:02      | And not only can they record your browsing history,                             |
| 31:04      | they can also sell it to people                                                 |
| 31:06      | who want to profit from your information.                                       |
| 31:08      | You can take back your privacy with ExpressVPN.                                 |
| 31:12      | ExpressVPN works by securing and anonymising                                    |
| 31:15      | your internet browsing.                                                         |
| 31:17      | It encrypts your data and hides your public IP address.                         |
| 31:20      | You can turn on ExpressVPN protection with just one click.                      |
| 31:24      | The easy-to-use apps run seamlessly                                             |
| 31:26      | in the background of your computer, phone, and tablet,                          |
| 31:29      | and it costs less than $7 a month.                                              |
| 31:32      | ExpressVPN is rated number one VPN service by TechRadar.                        |
| 31:37      | It even comes with a 30-day money-back guarantee.                               |
| 31:40      | If you ever use public Wi-Fi                                                    |
| 31:42      | and want to keep the bad guys away from your data,                              |
| 31:44      | you also need ExpressVPN.                                                       |
| 31:46      | I was just working in a coffee shop this morning                                |
| 31:49      | and there were about 60 people in there.                                        |
| 31:51      | I don't know, there could have been a bad guy in there                          |
| 31:53      | trying to intercept my email to get details                                     |
| 31:56      | of my iTunes account or my [[Amazon]] account,                                      |
| 32:00      | but they couldn't do it because I was running ExpressVPN                        |
| 32:02      | and that kept them out, it secured me.                                          |
| 32:05      | And you know what, these days it's time                                         |
| 32:07      | to have a VPN service.                                                          |
| 32:09      | I love having ExpressVPN on my Mac, iPad, and iPhone.                           |
| 32:13      | Anytime I want to lock things down,                                             |
| 32:15      | I just click the button and I'm safe.                                           |
| 32:18      | Why don't you start protecting your online activity today                       |
| 32:20      | by going to expressvpn.com/automators.                                    |
| 32:24      | If you don't want your online history                                           |
| 32:26      | in the hands of your internet provider or data resellers,                       |
| 32:30      | ExpressVPN is the answer.                                                       |
| 32:32      | By going to expressvpn.com/automators,                                    |
| 32:35      | you can get three months free with a one-year package.                          |
| 32:38      | Once again, that's expressvpn.com/automators                              |
| 32:43      | for three extra months free with a one-year package.                            |
| 32:46      | Why not get 15 months for the price of 12?                                      |
| 32:49      | Our thanks to ExpressVPN for their support of automators                        |
| 32:52      | and all of Relay FM.                                                            |
| 32:54      | So as we've talked about how we automate                                        |
| 32:57      | all this data and collect it,                                                   |
| 32:59      | and it's a little bit off the outline scope,                                    |
| 33:01      | but just how do you use the data once you have it?                              |
| 33:05      | Well, for me, the biggest thing is I make,                                      |
| 33:09      | I've been following [[Cortex]] for quite a while                                    |
| 33:12      | as people may have guessed, and I do these yearly themes.                       |
| 33:15      | And I then break these down,                                                    |
| 33:17      | and this year I'm trying the 12-week year,                                      |
| 33:19      | which means that you break things down                                          |
| 33:21      | into sort of quarterly goals.                                                   |
| 33:23      | And I think that that's good for me                                             |
| 33:25      | because I like to see that I'm spending my time                                 |
| 33:28      | on the right things, and that's why I track my time                             |
| 33:31      | so that I can know that actually each episode of automators,                    |
| 33:34      | it does take a good chunk of time.                                              |
| 33:36      | I don't progress that time at all,                                              |
| 33:38      | I very much enjoy spending that time.                                           |
| 33:39      | But that means that if I've got a trip coming up,                               |
| 33:42      | for example, then we know we're gonna have                                      |
| 33:43      | to move the recording forward                                                   |
| 33:45      | so that there's plenty of time                                                  |
| 33:46      | to make sure that we've got everything recorded                                 |
| 33:48      | and properly prepared so that we can still publish on time.                     |
| 33:51      | Because I don't want to be late posting an automated episode,                   |
| 33:54      | I don't know about you there.                                                   |
| 33:56      | But yes, things like that.                                                      |
| 33:57      | And also seeing how long I spend doing these things                             |
| 34:01      | that I never thought would take very long.                                      |
| 34:03      | So for example, I often go and get my nails done                                |
| 34:06      | as a nice way to relax.                                                         |
| 34:08      | Great, but it actually takes me a lot longer                                    |
| 34:10      | than a certain minute appointment than I thought.                               |
| 34:12      | It takes me more like an hour and a half,                                       |
| 34:15      | just because you've got to make the appointment,                                |
| 34:17      | you've got to get there, you've got to wait,                                    |
| 34:19      | and then you get back and it all adds up.                                       |
| 34:22      | And things like that are areas where I can look at it                           |
| 34:25      | and go, well, actually, I can probably find other ways                          |
| 34:27      | to relax and I can paint my own nails.                                          |
| 34:30      | So why don't I do that?                                                         |
| 34:32      | And I am now trying yoga for relaxation instead                                 |
| 34:35      | because there are a couple of really good yoga apps                             |
| 34:38      | and that means I don't need to commute.                                         |
| 34:40      | And when I only spend 30 minutes relaxing,                                      |
| 34:42      | it is just about 30 minutes instead.                                            |
| 34:45      | How do you use time tracking, David?                                            |
| 34:47      | Yeah, I think in a lot of the same ways.                                        |
| 34:49      | I think you look at it for the big picture,                                     |
| 34:51      | but you also look at it for the little picture.                                 |
| 34:53      | You want to make sure that you're using your time wisely                        |
| 34:56      | and that the things that are a priority to you                                  |
| 34:58      | are getting the most amount of time.                                            |
| 35:01      | But you also want to look for those little time leaks                           |
| 35:04      | that you have in your life.                                                     |
| 35:05      | And I really think time tracking can help you find                              |
| 35:09      | things that you're doing quite often                                            |
| 35:11      | that you don't think take that much time,                                       |
| 35:13      | but when you look at them over the course of a week                             |
| 35:15      | or a month, add up to quite a bit.                                              |
| 35:17      | And then use that as an opportunity                                             |
| 35:19      | to try and get those things out of your life.                                   |
| 35:22      | And I think time tracking can be very useful for that.                          |
| 35:24      | And I know it can be a pain in the neck to do this                              |
| 35:27      | and to set up all this automation,                                              |
| 35:29      | but it really does pay benefits.                                                |
| 35:31      | And what I would suggest is even if you don't want                              |
| 35:33      | to do it all the time, do it for a week.                                        |
| 35:36      | Do it for one week every quarter or one week every month                        |
| 35:39      | and just see how it works for you                                               |
| 35:41      | because I do think you can find out things about yourself                       |
| 35:43      | you wouldn't know otherwise.                                                    |
| 35:45      | Definitely, there's a lot of things there,                                      |
| 35:47      | like little time wasters that you thought                                      |
| 35:49      | were only like a minute or two,                                                 |
| 35:51      | but it turns out actually it takes a lot longer                                 |
| 35:53      | than you thought and that gives you an idea                                     |
| 35:56      | like, you know, in David's case, you got an assistant.                          |
| 35:59      | Or maybe in my case, it's that I go to my boss and say,                         |
| 36:01      | hey, like this five minute project                                              |
| 36:04      | that somebody else would do has already taken me a week.                        |
| 36:06      | Maybe we should be looking at getting rid of this                               |
| 36:09      | and things like that.                                                           |
| 36:10      | Or just maybe it will give you ideas                                            |
| 36:13      | of other things that you can automate.                                          |
| 36:16      | All right, so let's talk a little bit in the weeds                              |
| 36:19      | about how we automate our time tracking.                                        |
| 36:21      | I know it's kind of got out through the conversation                            |
| 36:25      | we already done in the show,                                                    |
| 36:26      | but tell me a little bit about this oversleeping idea.                          |
| 36:29      | I thought that was a good one.                                                  |
| 36:30      | Yeah, so essentially it's really simple.                                        |
| 36:33      | I use Zapier.                                                                   |
| 36:34      | It runs 6 a.m. Monday to Friday.                                                |
| 36:37      | And it starts a timer in toggle called oversleeping.                            |
| 36:42      | And I did steal this from CGPGrey.                                              |
| 36:44      | And then it sends me a notification,                                            |
| 36:47      | which will then open the toggle application when I tap on it.                   |
| 36:49      | So I'm sending a link notification, I think it is.                              |
| 36:52      | And I'm pretty certain this is off the top of my head though,                   |
| 36:55      | that the link is toggle colon slash slash slash.                                |
| 36:58      | And then that will open the toggle application.                                 |
| 37:00      | And so this means that I wake up and I look at this                             |
| 37:04      | and I see this notification.                                                    |
| 37:05      | And then when I swipe on it, it opens the toggle application.                   |
| 37:08      | So I immediately see how long I've been oversleeping                            |
| 37:10      | or how long I've been lasing around a bed                                       |
| 37:12      | because I'm trying to do this thing called self-control                         |
| 37:16      | where I don't just stop it as soon as I wake up                                 |
| 37:17      | and then continue to laze around a bed.                                         |
| 37:20      | And then I stopped the timer.                                                   |
| 37:23      | So I get to see both how long I've spent lasing around                          |
| 37:25      | and stop it all in one fell swoop, which is quite simple.                       |
| 37:31      | And it's nice because in the back of your head                                  |
| 37:34      | when you know those timers are running,                                         |
| 37:37      | that actually affects your conduct as well.                                     |
| 37:41      | Yes, definitely.                                                                |
| 37:42      | It's like having, like my mom watching me.                                      |
| 37:45      | Okay, so everybody's parents probably did this                                  |
| 37:47      | when they were in school.                                                       |
| 37:48      | You need to get up now.                                                         |
| 37:49      | Yeah, you really need to get up now.                                            |
| 37:50      | And eventually you get up just because you don't like                           |
| 37:52      | the people telling you that you keep needing to get up.                         |
| 37:56      | And it's having somebody sort of sitting there going,                           |
| 37:59      | mm-hmm, yeah, 15 minutes lasing around a bed so far                             |
| 38:02      | and no sign of movement, not even a tow twitch, hmm.                            |
| 38:05      | And I quite like that, but I also like the fact                                 |
| 38:07      | that it's not actually a person.                                                |
| 38:08      | So for example, if I'm sick,                                                    |
| 38:10      | I can just delete that entry, that's okay.                                      |
| 38:12      | Like I will let myself do that if I'm not feeling very well.                    |
| 38:15      | Like this morning I woke up with backache                                       |
| 38:17      | and I was like, stuff the oversleeping timer.                                   |
| 38:19      | Like I'm gonna take my time getting out of bed                                  |
| 38:21      | this morning, thank you very much.                                              |
| 38:22      | And it was very worthwhile to do that.                                          |
| 38:24      | So I think that's something else that you need to remember                      |
| 38:27      | with time tracking and the automations like this                                |
| 38:29      | is be realistic.                                                                |
| 38:31      | So if you're not well, for example,                                             |
| 38:33      | then it doesn't matter if you ever slept,                                       |
| 38:35      | you need sleep to get better.                                                   |
| 38:37      | So I use timing a lot for the stuff I do on my Mac,                             |
| 38:39      | but I also use toggle.                                                          |
| 38:41      | Something that's interesting to me is looking at your notes                     |
| 38:44      | is that you're getting very granular with toggle,                               |
| 38:46      | for instance, with automators.                                                  |
| 38:48      | You have three categories, the crew.                                            |
| 38:50      | I have five cast of grays even.                                                 |
| 38:52      | Okay, so there you go.                                                          |
| 38:54      | I used to have three for each podcast,                                          |
| 38:56      | basically pre-production, recording and post-production.                        |
| 38:59      | You've managed to turn into five.                                               |
| 39:01      | I have over time simplified these things                                        |
| 39:03      | to where it's just one category.                                                |
| 39:06      | Each podcast gets one entry.                                                    |
| 39:08      | And I can either using toggle or timing                                         |
| 39:11      | break that into descriptive language                                            |
| 39:14      | like outline prep or post-production or whatever.                               |
| 39:18      | But I haven't given them their own categories                                   |
| 39:21      | because I felt like on the back end,                                            |
| 39:24      | I wasn't using that data enough to make it worth                                |
| 39:26      | going between all three of them to plan.                                        |
| 39:30      | And then the more categories you have,                                          |
| 39:33      | the more likelihood you have for making a mistake                               |
| 39:35      | or for getting them through a timer.                                            |
| 39:37      | Yeah, I mean, for me in general,                                                |
| 39:39      | what I'm doing with automators,                                                 |
| 39:40      | I'll tell you my five categories in a moment,                                   |
| 39:42      | but I'm looking to see how much I spend                                         |
| 39:43      | on automators in total.                                                         |
| 39:45      | And especially at the beginning,                                                |
| 39:46      | we were a little concerned that the videos                                      |
| 39:48      | wouldn't be very popular.                                                       |
| 39:49      | And we do plan on producing more videos.                                        |
| 39:51      | We've just had a bit of a Christmas break,                                      |
| 39:53      | let's say, on those.                                                            |
| 39:56      | But I have show preparation,                                                    |
| 39:58      | which is your preproduction recording.                                          |
| 40:00      | I have post-production,                                                         |
| 40:01      | so things like adding chapter markers and so on,                                |
| 40:03      | because that means I have to listen to the whole episode.                       |
| 40:06      | Video creation and then writing the blog post                                   |
| 40:08      | as an accompaniment,                                                            |
| 40:09      | just because I've been experimenting with some automations                      |
| 40:13      | to help me create a better outline for the blog post                            |
| 40:16      | based on our outline from the recording.                                        |
| 40:20      | And it's nice to see that I'm spending less and less time                       |
| 40:22      | on that as it goes,                                                             |
| 40:23      | but still producing hopefully good blog posts in that area.                     |
| 40:28      | So yeah, those two will probably get rolled                                     |
| 40:30      | into post-production at some point                                              |
| 40:33      | in the not too distant future.                                                  |
| 40:34      | Yeah, but I guess the point there is you make it                                |
| 40:37      | as detailed as you need,                                                        |
| 40:39      | but not any more detailed than you need,                                        |
| 40:41      | because the more time you spend categorising                                    |
| 40:45      | your time tracking,                                                             |
| 40:46      | the less time you actually spend doing your work.                               |
| 40:48      | So try and figure out what the right balance is                                 |
| 40:52      | for you there.                                                                  |
| 40:53      | And over time, don't be afraid to change that.                                  |
| 40:55      | Yeah, exactly.                                                                  |
| 40:56      | So for example, as I mentioned,                                                 |
| 40:57      | I'll probably roll video creation and blog post writing                         |
| 41:00      | for automators into the post-production section.                                |
| 41:03      | And that's fine.                                                                |
| 41:04      | You can also go the other way,                                                  |
| 41:06      | start really high level and then break it down.                                 |
| 41:08      | So at work, all I do is I say,                                                  |
| 41:10      | I'm working on this project or I'm working on that project.                     |
| 41:13      | I don't bother to break it down going,                                          |
| 41:15      | hey, I was fixing this script for this web application                          |
| 41:18      | and it took me one hour 45 minutes                                              |
| 41:21      | because I was missing a semi-colon.                                             |
| 41:22      | A, because that would be depressing                                             |
| 41:24      | and I thankfully, due to my ID, rarely miss semi-colons,                        |
| 41:29      | but B, just because that's not required of me.                                  |
| 41:32      | In fact, it's not even really required to track                                 |
| 41:34      | which projects that I'm working on.                                             |
| 41:36      | I just do it because it's quite useful to see                                   |
| 41:39      | when somebody comes to me and says,                                             |
| 41:40      | oh, Rose, can you just do this on that?                                         |
| 41:42      | It's like, okay, the last time that you asked me                                |
| 41:44      | to spend five minutes doing this,                                               |
| 41:45      | it took me three and a half hours.                                              |
| 41:47      | Like, do you still want me to spend five minutes on it                          |
| 41:49      | or do you want me to spend three and a half hours on this                       |
| 41:50      | so that I've got that better data?                                              |
| 41:53      | Yeah, I mean, so much of this stuff                                             |
| 41:55      | is helpful in dealing with the exterior world                                   |
| 41:58      | because you have so much more confidence                                        |
| 41:59      | when you start making estimates                                                 |
| 42:01      | of how much time things are gonna take.                                         |
| 42:03      | Yes, exactly.                                                                   |
| 42:04      | And so, for example, the works that I do                                        |
| 42:07      | for the suite setup and Mac stories                                             |
| 42:09      | and so on, that's not billed by the hour,                                       |
| 42:11      | but I'm still tracking the time that I need to take on it                       |
| 42:13      | so that if they come to me and say, oh, right,                                  |
| 42:15      | okay, so instead of doing one post every two weeks,                             |
| 42:17      | could you do one post every week for the suite setup?                           |
| 42:21      | I can look at it and go,                                                        |
| 42:22      | well, okay, each post takes me approximately,                                   |
| 42:26      | I don't know, say 30 minutes.                                                   |
| 42:28      | I can actually find an extra 30 minutes every week to do that.                  |
| 42:31      | That's okay.                                                                    |
| 42:31      | Well, every other week, as the case may be,                                     |
| 42:34      | where if it was taking me, say, two and a half hours,                           |
| 42:37      | I wouldn't be able to say yes.                                                  |
| 42:40      | But looking at things like that,                                                |
| 42:42      | when I have that data,                                                          |
| 42:44      | I can make a much better informed decision.                                     |
| 42:46      | And especially with things like my master's degree,                             |
| 42:48      | which I am starting to work on again in May,                                    |
| 42:52      | I need to know how much time I have to spend                                    |
| 42:54      | on the other things that I've got commitments to,                               |
| 42:57      | versus how much time I'm going to be able to spend                              |
| 43:01      | playing on my switch versus actually the amount of studying                     |
| 43:04      | that needs to be done.                                                          |
| 43:05      | So for example, one course I'm looking at                                       |
| 43:06      | requires 600 hours of study.                                                    |
| 43:08      | That's not something that you can fit into a weekend.                           |
| 43:11      | So I need to know where that time is gonna come from.                           |
| 43:13      | And that's quite useful in knowing what to cut.                                 |
| 43:16      | Another thing I think this is very useful for                                   |
| 43:18      | is if you're interested in time blocking                                        |
| 43:20      | or hyper scheduling, as I sometimes call it,                                    |
| 43:23      | I think time tracking fits in really nicely with that                           |
| 43:26      | because the whole idea of time blocking                                         |
| 43:28      | is giving yourself enough time to complete important work.                      |
| 43:32      | And the data you get back from all that time tracking                           |
| 43:36      | informs how you set up those time blocks.                                       |
| 43:39      | And then in turn, the time blocks actually help you                             |
| 43:42      | do a better job of tracking the time.                                           |
| 43:44      | So it really is a very nice cycle there,                                        |
| 43:48      | where those two elements can work together.                                     |
| 43:51      | So if you've ever been interested in trying time blocking,                      |
| 43:55      | time tracking is a really nice complimentary thing                              |
| 43:59      | to do alongside of it.                                                          |
| 44:00      | Yes.                                                                            |
| 44:01      | And as David said, this is not something                                        |
| 44:03      | that you need to do all the time.                                               |
| 44:04      | It's worth spending, maybe even just try it for a day                           |
| 44:07      | to start with and see what it's like.                                           |
| 44:09      | And then when you've tried it for a day                                         |
| 44:10      | and you think, oh my gosh, there's a lot of work                                |
| 44:11      | starting and stopping time is,                                                  |
| 44:13      | maybe then take a step back and try it                                          |
| 44:15      | with something like rescue time, timing.                                        |
| 44:17      | But if your iOS only screen time is a great option as well,                     |
| 44:22      | then you can try these in an entirely automated fashion                         |
| 44:26      | just to see what it is.                                                         |
| 44:28      | And I would highly encourage you, even if you decide                            |
| 44:30      | that you're going to use toggle, look                                           |
| 44:32      | at using something like timing or rescue time with it.                          |
| 44:34      | And definitely look at your stats on screen time                                |
| 44:38      | or the digital well-being on Android,                                           |
| 44:41      | just to see what those devices are                                              |
| 44:44      | categorising things as for you.                                                 |
| 44:46      | Because I don't know about you, David,                                          |
| 44:48      | but I do forget to stop time in every once in a while,                          |
| 44:50      | even with all these automations that I've got                                   |
| 44:52      | with NFC tags from Launch Center Pro and iBeacons                               |
| 44:55      | and things like that to trigger                                                 |
| 44:56      | or to remind you to trigger leasing.                                            |
| 44:58      | Sometimes I still forget.                                                       |
| 44:59      | And it's quite nice to see that actually,                                       |
| 45:01      | I said I was doing automated prep on Sunday,                                    |
| 45:04      | but guess what?                                                                 |
| 45:05      | I spent 45 minutes on Reddit instead,                                           |
| 45:08      | which I would note 15 minutes of force preparation                              |
| 45:11      | for the show, [[Cortex]] subreddit.                                                 |
| 45:13      | But then I got sucked down a rabbit hole and guess what?                        |
| 45:15      | There you go.                                                                   |
| 45:16      | I ended up wasting some time.                                                   |
| 45:17      | And that's where the entirely automated ones                                    |
| 45:20      | are really useful.                                                              |
| 45:21      | And I find that all of these work together                                      |
| 45:23      | in a very complimentary fashion, which is really nice.                          |
| 45:27      | I do think time tracking can help anybody.                                      |
| 45:30      | And you don't have to make it overwhelming.                                     |
| 45:32      | There are options we've talked about today                                      |
| 45:34      | that don't take any work on your behalf.                                        |
| 45:37      | But with your automation superpowers,                                           |
| 45:40      | any of these options can really work for you.                                   |
| 45:42      | And you should check it out.                                                    |
| 45:44      | Yes.                                                                            |
| 45:45      | And of course, if you're looking at something like Togo,                        |
| 45:48      | there are lots of other timing options out there.                               |
| 45:52      | I'm sure that I know that there are some good ones for iOS,                     |
| 45:55      | which track things based on GPS data.                                           |
| 45:57      | I personally find that that's not too helpful,                                  |
| 46:00      | especially I think the one I tried was                                          |
| 46:03      | by the guys that made, I want to say sleep cycle.                               |
| 46:06      | And it was really nice,                                                         |
| 46:08      | but it couldn't track commuting time or time in transit,                        |
| 46:11      | which I spend a lot of time traveling.                                          |
| 46:13      | So that for me was not so good.                                                 |
| 46:15      | But look at these entirely automated options.                                   |
| 46:17      | Look at all of the options out there.                                           |
| 46:19      | We've just talked about the ones that we actually use today.                    |
| 46:23      | But all the ones that we've mentioned                                           |
| 46:24      | can at least be tried for free.                                                 |
| 46:26      | I'm still on the Togo free plan timing I have                                   |
| 46:29      | as part of setup and I'm using                                                  |
| 46:30      | the free rescue time version as well.                                           |
| 46:32      | So you don't need to pay for any of this to give it a shot.                     |
| 46:35      | Just say five minutes reading the overviews,                                    |
| 46:39      | perhaps and install one of them and let it run                                  |
| 46:42      | and see what it can tell you at the end of a week.                              |
| 46:44      | Yeah, and let us know how it goes over in the forums.                           |
| 46:46      | We'd love to see what you're doing with this stuff.                             |
| 46:49      | Definitely.                                                                     |
| 46:51      | So, David, where can people find you on the internet?                           |
| 46:54      | You can find me over at macsparky.com                                           |
| 46:57      | and that gets you to just about any place that I hang out.                      |
| 47:01      | Yes, including some very interesting courses.                                   |
| 47:03      | The Siri Shortcuts one is definitely a recommendation                           |
| 47:06      | for anybody listening to this who would like to try                             |
| 47:09      | time tracking with Toggle,                                                      |
| 47:10      | knowing how to build shortcuts and then adding those                            |
| 47:13      | Toggle shortcut actions to it is definitely a good step.                        |
| 47:17      | Yeah, yeah.                                                                     |
| 47:18      | I am Rosemary Orchard on Twitter,                                               |
| 47:20      | rosemaryorchard.com is my website.                                              |
| 47:23      | The show is Automators FM on Twitter                                            |
| 47:25      | and you can come and chat with us,                                              |
| 47:27      | give us all of your feedback over in the forums                                 |
| 47:29      | at talk.automators.fm.                                                          |
| 47:32      | And that's it for this episode.                                                 |
| 47:34      | Do you have anything you want to add?                                           |
| 47:36      | No, I can't wait to hear a bit from the listeners                               |
| 47:39      | on the time tracking                                                            |
| 47:40      | because I think this is something we can all really benefit                     |
| 47:42      | from a discussion.                                                              |
| 47:44      | So I'm looking forward to checking in on the forum on that                      |
| 47:46      | and we'll see y'all in two weeks.                                               |
| 47:48      | Yes, bye everybody.                                                             |
