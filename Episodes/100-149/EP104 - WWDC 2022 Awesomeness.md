---
status: "incomplete"
fc-date:
  year: 2022
  month: 06
  day: 17
fc-category: "podcast"
podcast: "Automators"
published: 2022-06-17
duration: 5123
formattedduration: "01:25:23"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/104"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators104.mp3"
episode: 104
title: "104: WWDC 2022 Awesomeness"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Hooray. It's a new WWDC and there are new Automation features! Rose and David are here to preview them all for you.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 104 Discussion](https://talk.automators.fm/t/104-wwdc-2022-awesomeness/13943)

# Sponsors
- [[Kolide (Sponsor)|Kolide]] -  Endpoint Security Powered by People. 
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.

# Show Notes
- [App intents | Apple Developer Documentation](https://developer.apple.com/documentation/appintents/app-intents/)
- [Full list of changes for shortcuts in iOS 16 : shortcuts](https://www.reddit.com/r/shortcuts/comments/v879h1/full_list_of_changes_for_shortcuts_in_ios_16/)
- [Here are iOS 16 features that will delay - 9to5Mac](https://9to5mac.com/2022/06/08/ios-16-delayed-features/)
- [Shortcuts for Mac Field Guide](https://learn.macsparky.com/courses/shortcutsmac)
- [Shortcuts for Mac Field Guide - Plus Edition](https://learn.macsparky.com/p/shortcutsmacplus)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks and I'm joined by my co-host, Rosemary Orchard.                                   |
| 00:05      | Hello, Rosemary.                                                                                          |
| 00:06      | How are you today?                                                                                        |
| 00:07      | Oh, David.                                                                                                |
| 00:08      | I'm excited.                                                                                              |
| 00:09      | We've had some [[WWDC]] fun as we do and you got invited to Apple Park.                                       |
| 00:14      | Congratulations.                                                                                          |
| 00:15      | That was pretty fun.                                                                                      |
| 00:16      | I got to go into the loop.                                                                                |
| 00:17      | It's a gorgeous building and see all the excitement.                                                      |
| 00:21      | It was really fun.                                                                                        |
| 00:22      | And we've got a bunch of betas installed because when I was installing all the betas                      |
| 00:27      | on my device, I said, there's one person in the world that will understand me.                            |
| 00:31      | And it is Rosemary Orchard, my beloved friend on the automators.                                          |
| 00:35      | So of course we both have betas on phones and watches and everything above that.                          |
| 00:40      | iPads and Macs.                                                                                           |
| 00:43      | For the purposes of legal disclaimers, Jim, our lovely editor, no, we're not recording                    |
| 00:47      | on beta machines, but those are the end machines not running at beta.                                     |
| 00:51      | Yeah, basically.                                                                                          |
| 00:53      | So, but we wanted to share with you what, you know, iOS 16 iPad, iPad, OS 16, and Mac                     |
| 01:01      | OS Ventura.                                                                                               |
| 01:03      | There are some changes with shortcuts and automation related stuff, and we thought no                     |
| 01:07      | better time than the present to kind of break down what's changed and what's improving and                |
| 01:11      | you know, where we're disappointed we didn't see more movement, but we've got stuff going                 |
| 01:16      | in.                                                                                                       |
| 01:17      | Granted, this is the first beta and things will change over the course of the beta.                       |
| 01:21      | Some of the features we talk about may disappear or others may get added, but I think in general          |
| 01:26      | we've got a pretty good idea about what [[Apple]] is up to this year.                                         |
| 01:31      | But before we get started, I just wanted to note that the very last few days of the introductory          |
| 01:35      | pricing for the shortcuts for Mac Field Guide is coming up.                                               |
| 01:39      | As this show publishes on a Friday, it's ending the following Sunday, so just two days later.             |
| 01:44      | So if you're getting in early, you want to get that discount, head over to learn.maxbracky.com,           |
| 01:50      | get the shortcuts from Mac Field Guide, and there's a nice discount for you.                              |
| 01:54      | In the bonus section for today, since we've gone crazy with betas, we're going to talk                    |
| 01:58      | about our lock screens, because lock screens are very different now.                                      |
| 02:02      | And Rose and I are having fun playing with those.                                                         |
| 02:04      | So we're going to get into that later today, but I want to talk automation.                               |
| 02:08      | And before we get into the nitty gritty, Rose, I just wanted to talk a little bit about the               |
| 02:13      | general gist of shortcuts this year and my overall satisfaction with what they've done                    |
| 02:21      | this year.                                                                                                |
| 02:23      | In researching today's show, I was looking at the initial comments on the web and read                    |
| 02:27      | it and whatnot.                                                                                           |
| 02:28      | A lot of people seem upset.                                                                               |
| 02:30      | They feel like that [[Apple]] should have re-did a whole bunch of stuff in shortcuts.                         |
| 02:34      | And to me, that's really been the problem the last couple of years is we've had three                     |
| 02:37      | or four revolutionary years in the row.                                                                   |
| 02:40      | They added it to the Mac or they re-did the UI and they added [[SwiftUI]].                                   |
| 02:45      | This year is not that.                                                                                    |
| 02:46      | This year is very much an evolutionary year in shortcuts, which in my opinion is exactly                  |
| 02:51      | what we needed.                                                                                           |
| 02:52      | Yes.                                                                                                      |
| 02:53      | Yes.                                                                                                      |
| 02:54      | I agree.                                                                                                  |
| 02:55      | And I think you can see this in a lot of ways.                                                            |
| 02:57      | And one of the ways that I particularly want to call out is that some of the automations                  |
| 03:01      | that people have been creating with shortcuts are now part of the operating system.                       |
| 03:06      | And I know that some of this is not necessarily directly within the shortcuts team's hands                |
| 03:11      | or maybe they didn't have anything to do with it.                                                         |
| 03:15      | But I do really appreciate the fact that it seems like [[Apple]] is listening.                                |
| 03:20      | Things like changing your watch face are now built into the changing of the focus mode                    |
| 03:25      | because that's what a lot of people did.                                                                  |
| 03:27      | And I think that that just shows that [[Apple]] is listening.                                                 |
| 03:30      | They are trying to do the things that we have been asking for, we've been begging for.                    |
| 03:34      | And I think that that's really great.                                                                     |
| 03:36      | Yeah.                                                                                                     |
| 03:37      | And I'm also noticing a ton of fixes because some shortcuts I had that weren't working                    |
| 03:42      | properly are now working properly.                                                                        |
| 03:44      | And they've made a...                                                                                     |
| 03:45      | Right.                                                                                                    |
| 03:46      | I mean, they've been doing that throughout the first year on the Mac where there were                     |
| 03:49      | regular updates to it.                                                                                    |
| 03:51      | That's the other thing people are complaining about on the internet.                                      |
| 03:53      | They're saying, well, we should get this more than once a year, but you actually have been                |
| 03:56      | getting it with each point update.                                                                        |
| 03:58      | We've been getting improvements to shortcuts.                                                             |
| 04:01      | But one problem that was an issue for me is I have a planning calendar for a lot of the                   |
| 04:06      | stuff I do.                                                                                               |
| 04:07      | So when we book a podcast, I also add an all-day planning event, basically saying that they               |
| 04:12      | were recording the show.                                                                                  |
| 04:13      | Well, on the Mac, for the whole first year of Shortcuts to the Mac, creating an all-day                   |
| 04:19      | event didn't work.                                                                                        |
| 04:20      | It just always would create a two-day event.                                                              |
| 04:23      | Even if you...                                                                                            |
| 04:24      | I mean, there were all these hacks, you'd say, start at 12 a.m. and end at 12 p.m.                        |
| 04:29      | There were a very variety of ways people were trying to get around it, but none of them                   |
| 04:32      | worked reliably.                                                                                          |
| 04:34      | So I would always have to show open the compose sheet whenever I ran that so I could manually             |
| 04:40      | fix it during the shortcut.                                                                               |
| 04:41      | And something I noticed immediately is on the Mac now, that works.                                        |
| 04:46      | It's like little things like that are getting fixed all over the operating system and the                 |
| 04:50      | shortcuts system.                                                                                         |
| 04:52      | And to me, getting things like that fixed are way better than changing the colour of the                   |
| 04:57      | action blocks or changing the layout of the app.                                                          |
| 05:01      | I mean, just start drilling down and making it really stable.                                             |
| 05:04      | And that's the general feeling I'm getting even at beta one.                                              |
| 05:08      | Yes.                                                                                                      |
| 05:09      | And I think some of this we're just benefiting from the fact that throughout the year with                |
| 05:13      | the point updates that we get, I guess there's a little bit of attention splitting within                 |
| 05:17      | [[Apple]] of what are the things that we put into the new version that's coming, which of course              |
| 05:22      | now is iOS 16 versus what do we put in a point release?                                                   |
| 05:26      | What if we already got fixed or what is actually not our system, but it's somebody else's system          |
| 05:31      | when we know that's going to be changed?                                                                  |
| 05:33      | And so where do we stop and put those things in is always a question.                                     |
| 05:38      | And they would have to be answering those questions whether or not it was directly built                  |
| 05:41      | into the operating system or if it was a separate app, just like if Pages needs to do something           |
| 05:47      | with the calendar application, well, it's still reliant on the calendar doing things                      |
| 05:51      | the way the calendar does.                                                                                |
| 05:52      | And if the calendar is going to change something in the next version of iOS or macOS, then                |
| 05:55      | Pages is going to have to integrate with that differently depending on what the APIs are.                 |
| 06:00      | So I think we are definitely reaping the benefits of shortcuts being so tightly integrated.               |
| 06:08      | And it's not like we didn't get the new features like the new version of the toolbar and stuff,           |
| 06:12      | David.                                                                                                    |
| 06:13      | I'm pretty excited by that.                                                                               |
| 06:14      | It's really nerdy and really small and most people are not going to notice it, but the                    |
| 06:18      | way that you rename a shortcut has changed and I really like that.                                        |
| 06:21      | Yeah, I agree.                                                                                            |
| 06:23      | And just better and stable.                                                                               |
| 06:24      | I mean, I had like 150 or so shortcuts for the shortcuts or Mac field guide and I wanted                  |
| 06:30      | to name them all to match the video.                                                                      |
| 06:33      | And it was a little, it felt a little difficult getting all them renamed and getting the names            |
| 06:38      | to stick and all of that stuff seems to be sorted out with the new version.                               |
| 06:41      | So just a lot of little quality of life improvements that I think are going to make a difference.         |
| 06:46      | Yeah.                                                                                                     |
| 06:47      | Yeah, definitely agreed.                                                                                  |
| 06:49      | All right.                                                                                                |
| 06:50      | Before we get into shortcuts and detail, I think there is something connected to all                      |
| 06:55      | this and that's focus mode.                                                                               |
| 06:57      | And we've done an entire show on focus mode last year.                                                    |
| 07:01      | I believe Rose, you are still an aggressive user of focus mode.                                           |
| 07:06      | Oh yeah.                                                                                                  |
| 07:07      | Yeah.                                                                                                     |
| 07:08      | I literally came out of focus mode earlier, went into a different focus mode for my mastermind            |
| 07:13      | group, then went back out of the focus mode to go to work and then went out of that focus                 |
| 07:16      | mode to go podcast and then I stopped focus modeing to have dinner and now I'm back in                    |
| 07:20      | my podcasting focus mode to talk to you.                                                                  |
| 07:22      | It's focus modes all day long gear.                                                                       |
| 07:24      | And when I finish, I'll go back to no focus mode and then it'll be time for sleep focus                   |
| 07:27      | mode later.                                                                                               |
| 07:28      | Yeah.                                                                                                     |
| 07:29      | All the way down.                                                                                         |
| 07:30      | Just focus modes all the way down.                                                                        |
| 07:32      | Yeah.                                                                                                     |
| 07:33      | You have a personal focus mode?                                                                           |
| 07:34      | Yeah.                                                                                                     |
| 07:35      | Like do you put it into that when you're not in my focus mode?                                            |
| 07:37      | So I do have a personal focus mode and it's essentially sort of a clone of my podcasting                  |
| 07:41      | focus mode.                                                                                               |
| 07:44      | And this is for things like my mastermind group or I'm going to the cinema or something                   |
| 07:52      | and I want to watch a film, not that I've done that in ages, but that's the sort of                       |
| 07:55      | thing that I use it for.                                                                                  |
| 07:57      | I don't want all of the buzzes and the bings from the various apps that usually I might                   |
| 08:01      | be interested in getting updates from, like obviously I'm still going to get notifications                |
| 08:06      | pushed about package updates, but I don't need to know about them.                                        |
| 08:10      | I don't need to know that that parcel that for my dad's father's day present has actually                 |
| 08:14      | been shipped.                                                                                             |
| 08:15      | I like I can check in on that later.                                                                      |
| 08:17      | And so I have a personal focus mode for like I am doing stuff and I just want to reduce                   |
| 08:23      | the notifications that I'm getting.                                                                       |
| 08:24      | I don't want to get rid of them entirely.                                                                 |
| 08:26      | Yeah.                                                                                                     |
| 08:27      | I also am very much into focus modes.                                                                     |
| 08:29      | I've got them basically running 24 seven and like my personal mode is like when I'm                       |
| 08:34      | done working, I switch to personal mode and then suddenly work apps have a harder time                    |
| 08:38      | getting to me and personal things have an easier time.                                                    |
| 08:42      | But we're going to go through, I want to go through the changes of focus mode because                     |
| 08:46      | when this released last year, the fear that a lot of us had was, is this one of those                     |
| 08:51      | things where [[Apple]] is going to like give us this thing and then move the team to some                     |
| 08:56      | other project and that's as much as we're ever going to get on this because clearly                       |
| 09:00      | there was more we wanted last year.                                                                       |
| 09:03      | And I suspect this feature must be getting used inside [[Apple]] too, because I think they                    |
| 09:08      | saw the shortcomings in this year, they addressed them primarily.                                         |
| 09:11      | Now you can set your focus modes either as an inclusive list or an exclusive list.                        |
| 09:17      | Yes.                                                                                                      |
| 09:18      | And so that means like you can say personal mode means all apps and people get through                    |
| 09:23      | except for these, or you can say only these people get through, which is what they had                    |
| 09:27      | before.                                                                                                   |
| 09:28      | And that got really tedious, right?                                                                       |
| 09:30      | Yes, especially when you got a new app and it was, you know, whatever the important app                   |
| 09:35      | was of the time and you needed to add it to all of your focus modes to opt it in so that                  |
| 09:40      | you would get those notifications.                                                                        |
| 09:43      | Now you would go into the two focus modes that you don't want that in and opt it out,                     |
| 09:48      | which I think is a really good improvement though.                                                        |
| 09:50      | I have to say right now, I'm feeling very zen about my focus modes, David.                                |
| 09:54      | I've opened the settings app and I tapped on the focus tab and I've got a lovely gray                     |
| 09:58      | screen with the title focus at the top and I can go back to settings.                                     |
| 10:02      | And so I'm guessing this is the price that one pays for running a developer beta one.                     |
| 10:07      | And so I will be rebooting my phone and hoping my focus modes come back in a minute because               |
| 10:11      | that is definitely crashed.                                                                               |
| 10:13      | That is something we should mention for people who are going, oh yeah, I want to try this                 |
| 10:16      | out.                                                                                                      |
| 10:17      | Wait until the public beta folks, wait until the public beta.                                             |
| 10:20      | This is a developer beta, a stable one, but it's a developer beta.                                        |
| 10:25      | Like my phone rebooted while I was driving the other day.                                                 |
| 10:27      | Have you had your phone reboot while you're using CarPlay, David?                                         |
| 10:30      | It is an experience.                                                                                      |
| 10:31      | Yeah, I bet.                                                                                              |
| 10:32      | Well, I mean, even the public beta is a degree of risk and your phone is going to get hot,                |
| 10:37      | the battery is going to die.                                                                              |
| 10:39      | You're going to need to restart way more than you usually do and some of your apps are going              |
| 10:43      | to act funny.                                                                                             |
| 10:44      | That being said, this has been a fairly stable beta for me.                                               |
| 10:49      | The only app that I've had real hiccups with is [[ScreenFlow]].                                               |
| 10:52      | I have a second Mac with it on.                                                                           |
| 10:55      | Obviously, I need [[ScreenFlow]] to make my living.                                                           |
| 10:57      | So my primary Mac is still on the shipping operating system as opposed to the beta one.                   |
| 11:04      | It's working fine and we're all good, but you got to be careful with stuff like that.                     |
| 11:09      | Yeah.                                                                                                     |
| 11:10      | I found that, so my Mac Studio, the Mac that I use to record this podcast on, that's running              |
| 11:16      | macOS Monterey, the latest version.                                                                       |
| 11:18      | My phone is plugged in and I've tried rebooting.                                                          |
| 11:21      | I have tried sacrificing chocolate in various forms, including extra dark chocolate and                   |
| 11:27      | all such things.                                                                                          |
| 11:28      | I just can't get my phone screen to show up and stay on screen in Ecamm, QuickTime, [[ScreenFlow]],            |
| 11:34      | any of those devices.                                                                                     |
| 11:35      | So I can record about 10 seconds of my phone screen before something dies and it just turns               |
| 11:42      | into a black screen, which is frustrating, but that's the price you pay for a developer                   |
| 11:47      | beta.                                                                                                     |
| 11:48      | I'm sure it'll get better as we go on.                                                                    |
| 11:50      | For someone who makes a podcast called iOS today, that's probably a challenge.                            |
| 11:54      | No, it is, but I deliberately have my old iPhone mini and I didn't update my iPad mini                    |
| 12:02      | to the iPad beta.                                                                                         |
| 12:04      | I installed it on the 12.9 inch iPad Pro, so I will still have devices that I can do                      |
| 12:09      | things on.                                                                                                |
| 12:10      | It's just really frustrating.                                                                             |
| 12:11      | I wanted to show everything off in the first episode post [[WWDC]] and I had to resort to sending             |
| 12:15      | screenshots to Mikah for him to show on screen.                                                           |
| 12:17      | That is a good thing I need to check out, because I'm going to do a deep dive for my                      |
| 12:22      | labs members on iOS, iPad OS 16, and I hadn't tested it yet.                                              |
| 12:26      | I may have a problem.                                                                                     |
| 12:27      | Okay.                                                                                                     |
| 12:28      | Yeah.                                                                                                     |
| 12:29      | Yeah.                                                                                                     |
| 12:30      | So the workaround I have found, which I will be using, is recording using the on-device                   |
| 12:34      | screen recording feature and then just sort of sharing that back and then it's okay.                      |
| 12:40      | It's not perfect.                                                                                         |
| 12:41      | I would prefer to just be able to do the thing instead of having to pre-record it and remember            |
| 12:46      | exactly which steps I took.                                                                               |
| 12:47      | But you know what, I think that that's just the way that iOS 16 is communicating with                     |
| 12:54      | the Mac, because one of the big changes that was made is the new developer mode, where                    |
| 13:01      | to do certain things, you will need to enable a developer mode on your device, which I did                |
| 13:06      | try to enable on my phone, and I've enabled it on my phone, but that does not fix my screen               |
| 13:11      | recording issue.                                                                                          |
| 13:12      | Yeah.                                                                                                     |
| 13:13      | I guess I'll find out later what the problem is.                                                          |
| 13:16      | Okay.                                                                                                     |
| 13:17      | So let's get back to focus mode, though, because we didn't finish.                                        |
| 13:20      | There's more to it than that.                                                                             |
| 13:21      | No, we didn't.                                                                                            |
| 13:22      | All right.                                                                                                |
| 13:23      | So we've got now the ability to make inclusive versus exclusiveless, which to me was feature              |
| 13:26      | number one that I wanted.                                                                                 |
| 13:28      | Yes.                                                                                                      |
| 13:29      | What are you excited about with the new features?                                                         |
| 13:32      | I'm really excited by, you know, there's got so many things.                                              |
| 13:38      | But first of all, the feature that I used all the time was shortcuts, personal automation,                |
| 13:44      | X focus mode turns on, or X focus mode turns off.                                                         |
| 13:48      | And that is what I use to change my [[Apple Watch]] face.                                                     |
| 13:51      | Goodbye, automations, to change my [[Apple Watch]] face.                                                      |
| 13:53      | You are no longer needed, because this has been built into the focus modes.                               |
| 13:57      | And you know what, David, I am 100% confident in saying this, and I don't care if I'm wrong.              |
| 14:02      | I think that this feature exists purely because people did this with shortcuts, automations,              |
| 14:08      | and [[Apple]] saw people doing this with shortcuts, automations, and went, we should put this                 |
| 14:12      | into the operating system, because it is such a good feature.                                             |
| 14:17      | And it's a lot easier to do in the operating system than it was to do in the focus in shortcuts,          |
| 14:23      | because you can actually see which faces to choose from.                                                  |
| 14:26      | So when I'm tapping and I look at the watch face, I can actually see which watch face                     |
| 14:33      | it is that I'm tapping on, instead of looking at the names and comparing it to the watch                  |
| 14:37      | app for just to see which one it is.                                                                      |
| 14:41      | So I'm really glad that we have that.                                                                     |
| 14:44      | But I think my favourite thing, David, it's the focus filters.                                             |
| 14:47      | I'm excited by focus filters.                                                                             |
| 14:48      | Does that make me a nerd?                                                                                 |
| 14:49      | No, no.                                                                                                   |
| 14:50      | I want to get into that.                                                                                  |
| 14:51      | But before I do so, I'll tell you, I've been testing this thing where it automatically                    |
| 14:55      | sets a watch face.                                                                                        |
| 14:56      | I mean, historically, you could set your home screen based on your focus mode.                            |
| 15:01      | Now you can set your lock screen, your home screen, and your watch face.                                  |
| 15:05      | I can't get the watch face to stick, though.                                                              |
| 15:07      | I think maybe I need to do a reboot of my watch.                                                          |
| 15:09      | It's just a thing where I need to reboot my watch, but I've been trying for a few days                    |
| 15:13      | and it hasn't been working.                                                                               |
| 15:14      | So I didn't know if that was a bug.                                                                       |
| 15:16      | Yeah, I've found the watch has been a little tricky to get working like this.                             |
| 15:21      | The other thing that tripped me up, which I don't think is the problem for you, but                       |
| 15:24      | just for anybody listening, if you have two [[Apple Watch\|Apple Watches]] and you've only updated one                     |
| 15:28      | of them, then if you have the wrong [[Apple]] watch connected to your phone at that point                     |
| 15:34      | in time when you're selecting the watch face, then the entire thing just doesn't work.                    |
| 15:39      | And I need file feedback on that, actually.                                                               |
| 15:41      | Because I suspect that for people with multiple watches, it will be quite common that one                 |
| 15:45      | of them has been updated and the other one has yet to be updated.                                         |
| 15:49      | And it's just not working and giving a weird and unhelpful error message, at least, as                    |
| 15:54      | what it did to me last time I tried it, was not great.                                                    |
| 15:58      | So I'm going to file some feedback on that.                                                               |
| 16:01      | But it does appear to be working for me right now.                                                        |
| 16:03      | It's showing me the breathe watch face, which is the one I have set for my podcasting focus.              |
| 16:07      | So and it was showing me the California dial earlier.                                                     |
| 16:11      | So that was my work one.                                                                                  |
| 16:13      | So I think it's working for me that or I'm magically swiping on my wrist without thinking                 |
| 16:18      | about it, which I don't think so.                                                                         |
| 16:21      | I did go in and I've just so I didn't get rid of my, my automations entirely, just because                |
| 16:27      | I might want to do something else there.                                                                  |
| 16:30      | And so what I did is at the top of my automation instead, I just added an exit shortcut action            |
| 16:34      | so that the automations are still there with the exact shortcuts that they used to run                    |
| 16:39      | doing the exact same thing they used to do.                                                               |
| 16:41      | It's just that it never gets that far because it says exit shortcut first so that I've not                |
| 16:46      | lost anything there.                                                                                      |
| 16:47      | It's that seemed like it would be a bit of a pain if I forgot to get rid of, forgot to                    |
| 16:53      | set one of those up and can't remember what it was before.                                                |
| 16:55      | Okay.                                                                                                     |
| 16:56      | So we've got the ability now to set the lock screen, the home screen, the watch face.                     |
| 17:02      | And then there's a whole new feature which you mentioned earlier called focus filters.                    |
| 17:06      | What is that?                                                                                             |
| 17:07      | Yeah.                                                                                                     |
| 17:08      | So focus filters, first of all, there's two system filters and I'm going to talk about                    |
| 17:11      | those first because they're very simple.                                                                  |
| 17:12      | There's dark mode and low power mode.                                                                     |
| 17:15      | So for example, your sleep focus mode could just activate dark mode and turn it on or                     |
| 17:21      | deactivate dark mode and set it to light mode or something.                                               |
| 17:24      | And this I can imagine being really helpful for people who work a night shift so that                     |
| 17:28      | their sleep focus mode is always a dark focus mode and their work focus mode is always a                  |
| 17:31      | light mode.                                                                                               |
| 17:33      | So they've got that.                                                                                      |
| 17:36      | Similarly for people who work somewhere, say Disney, having low power mode for your phone                 |
| 17:40      | all day when you're roaming around a fairly large area or similar or maybe you work inside                |
| 17:46      | a large metal box, which doesn't have great cellular signal, being able to turn on low                    |
| 17:49      | power mode for your day seems pretty cool.                                                                |
| 17:52      | So I like those, but the ones that really get me, David, they're the app filters, calendar,               |
| 17:58      | messages, mail, [[Safari]].                                                                                   |
| 18:00      | I can choose when I activate a focus mode to select a specific tab group in [[Safari]].                       |
| 18:05      | How cool is that?                                                                                         |
| 18:06      | It's so cool.                                                                                             |
| 18:07      | Yeah.                                                                                                     |
| 18:08      | It really is impressive and it works with four apps begin with mail, [[Safari]], calendars                    |
| 18:14      | and messages, but other apps can tie into it.                                                             |
| 18:18      | So we're going to see more apps doing that.                                                               |
| 18:20      | Like you can say pull a calendar set, you know, when I switch to this focus mode and                      |
| 18:25      | just show me these calendars or just show me mail from this mailbox and don't show me                     |
| 18:29      | mail from the other ones.                                                                                 |
| 18:31      | And I feel like this is the, like every once in a while you get something that you never                  |
| 18:36      | dreamed they would include.                                                                               |
| 18:39      | This feels like that category to me.                                                                      |
| 18:41      | You know, it's like, I never thought they would go this deep with focus mode and I love                   |
| 18:45      | this.                                                                                                     |
| 18:46      | Yes.                                                                                                      |
| 18:47      | I really do.                                                                                              |
| 18:48      | And I have to say, you know, I don't think the folks over at Flexibits are going to be                    |
| 18:53      | losing any sleep over this, but you essentially have the fantastical calendar groups built                |
| 18:59      | into iOS now.                                                                                             |
| 19:00      | So that when I'm in my work focus mode, if I open the native [[Apple Calendar|calendar]] app, I can have                     |
| 19:05      | chosen to just have my work calendars show up.                                                            |
| 19:09      | And if I'm in my podcasting one, I could choose to just have the podcasting one shop.                     |
| 19:14      | And you know, when I'm at work, then my work mail just shows up.                                          |
| 19:17      | And, you know, I think that that is, you know, especially where so many people are expected               |
| 19:22      | to use their personal devices for home and for work, or they're encouraged to do that                     |
| 19:26      | because it gets them to try the new features and so on.                                                   |
| 19:29      | I think that it's really nice to actually have a divide between those.                                    |
| 19:33      | The only thing that's still missing from me, which is a bit of a shame, is the fact that                  |
| 19:36      | I can't disable notifications for an app generally and only enable them in a focus mode.                  |
| 19:43      | So for example, Microsoft Teams, I can't disable Microsoft Teams notifications generally,                 |
| 19:49      | but enable the Microsoft Teams notifications when I'm in my work focus mode, which is a                   |
| 19:54      | shame.                                                                                                    |
| 19:55      | I wish I could.                                                                                           |
| 19:56      | I could flip it around and say, no, most of the time I don't want any notifications from                  |
| 19:59      | this app, but in this particular case, I'm going to allow it.                                             |
| 20:02      | And I don't know what [[Apple]] would recommend for something like that because I can't imagine               |
| 20:08      | Microsoft Teams out of the gate on iOS 16 supporting the focus filters.                                   |
| 20:13      | And quite frankly, I don't want to have any focus on Microsoft Teams outside of my working                |
| 20:17      | day.                                                                                                      |
| 20:18      | But I guess we'll see what happens there.                                                                 |
| 20:20      | But I'm generally very excited by this feature just because, you know, you can choose what                |
| 20:25      | [[Safari]] tab group, you choose your calendars, you choose your mail, and, you know, you've                  |
| 20:31      | got all of these, you know, filters set up and ready for you so that you open messages                    |
| 20:36      | and it's filtered to just people when you're in your personal work mode.                                  |
| 20:40      | So that text message that you got from the parking lot to say that, you know, they've                     |
| 20:44      | received the payment for your parking, you don't need to worry about that or whatever.                    |
| 20:50      | And you'll see it later.                                                                                  |
| 20:51      | Yeah.                                                                                                     |
| 20:52      | I think it's great.                                                                                       |
| 20:53      | And it is funny how, you know, we're so greedy.                                                           |
| 20:55      | Like they give us these features and there are things we want more.                                       |
| 20:57      | Oh, yeah.                                                                                                 |
| 20:58      | Yeah.                                                                                                     |
| 20:59      | I mean, I wanted the notifications, like being off generally and then just on in a focus                  |
| 21:03      | mode before they release this new feature.                                                                |
| 21:05      | So I haven't changed my mind there, but it's pretty awesome.                                              |
| 21:09      | And I would still like to be able to add and remove groups of people by their contact group,              |
| 21:16      | which doesn't really work.                                                                                |
| 21:17      | I know there's a kind of hacks around it, but it should just be able to say, like, include                |
| 21:22      | everyone in the family group or include everyone in the client's group or exclude, you know?              |
| 21:28      | Yeah.                                                                                                     |
| 21:29      | Yeah.                                                                                                     |
| 21:30      | Because if you go to the groups, well, preferences closed unexpectedly, help resolve this problem         |
| 21:34      | by sharing feedback.                                                                                      |
| 21:35      | Yeah.                                                                                                     |
| 21:36      | Yeah.                                                                                                     |
| 21:37      | That's beta one.                                                                                          |
| 21:39      | But previously you could, you could select a group of people or you could focus on a group                |
| 21:43      | of people and then you would have to select the people in that group, which would mean                    |
| 21:47      | that you would have to, if you just wanted a particular group of people, you would have                   |
| 21:51      | to unselect everybody and then go into the group and select everybody.                                    |
| 21:55      | If you wanted to be sure that you have only selected those people.                                        |
| 22:00      | So especially if you've got groups that you don't update, for example, an exchange group,                 |
| 22:05      | contact group, then that, that could be quite tricky.                                                     |
| 22:07      | Yeah.                                                                                                     |
| 22:08      | When the groups are dynamic is when you run into trouble and it doesn't resolve that.                     |
| 22:12      | But overall, really nice improvements to focus mode.                                                      |
| 22:15      | And the reason we wanted to talk about that at the top is because that ties into a bunch                  |
| 22:18      | of the changes and shortcuts too.                                                                         |
| 22:20      | So stay tuned for that.                                                                                   |
| 22:22      | Yes.                                                                                                      |
| 22:24      | This episode of the automators is brought to you by Kolide, end point security powered                   |
| 22:28      | by people.                                                                                                |
| 22:29      | Try Kolide for free for 14 days free, no credit card required.                                           |
| 22:33      | Just go to kolide.com/automators.                                                                  |
| 22:39      | Kolide sends employees important, timely and relevant security recommendations for                       |
| 22:43      | their Mac, Linux and Windows devices right inside of [[Slack]].                                               |
| 22:47      | It's perfect for organisations that care deeply about compliance and security, but don't                  |
| 22:52      | want to get there by locking down devices to the point where they become unusable.                        |
| 22:56      | Instead of frustrating your team, Kolide educates your employees about security and                      |
| 23:00      | device management while directing them to fix important problems themselves.                              |
| 23:06      | Kolide knows that for IT admins, the key to solving some of the most commonly secured                    |
| 23:10      | issues is to educate end users.                                                                           |
| 23:13      | They do this by instructing developers to set pass phrases on unencrypted SSH keys, finding                |
| 23:19      | plain text, two-factor backup codes and teaching end users how to store them securely, and                |
| 23:24      |encouraging employees to uninstall bad browser extensions that may sell their browser history.            |
| 23:30      | Those are some of the many use cases not solved by locking down devices.                                  |
| 23:35      | You can try Kolide with all its features on an unlimited number of devices for free                      |
| 23:39      | for 14 days, no credit card required. Try it out at Kolide kolide.com/automators.                   |
| 23:47      | That's once again, Kolide kolide.com/automators.                                                    |
| 23:52      | If you enter your email and prompted, you'll get a free Kolide gift bundle after trial activation.        |
| 23:57      | Our thanks to Kolide for the support of the automators and all of Relay FM.                              |
| 24:03      | Shortcuts is on iOS 16, it's on iPad OS 16, and it's on the new Ventura Mac operating                     |
| 24:12      | system. It's a little different on each one, but we're going to try and just cover them                   |
| 24:17      | as a whole. We're still at the beta one here.                                                             |
| 24:21      | One of the headline features of the new year is the improvements to [[Apple Mail]]. I guess                   |
| 24:26      | before we get into the shortcuts improvements, Rose, isn't it great how a lot of the stuff                |
| 24:31      | [[Apple]] is doing now ships simultaneously to all three platforms?                                           |
| 24:36      | It is so great. I also love the fact that, as I mentioned before, they're clearly listening               |
| 24:41      | to feedback and requests because not only did we get cool new features on all the platforms,              |
| 24:47      | but we got cool new features that people have genuinely been asking for, like sending later               |
| 24:51      | in mail. That's a feature now. That's all stuff that we wouldn't be getting if [[Apple]]                      |
| 24:57      | weren't listening to us. It's not that I feel like they definitely weren't listening before               |
| 25:01      | it, but I feel like they kind of just ignored some of the things that people wanted like                  |
| 25:05      | schedule send so that you can send an email at 9 a.m. on Monday and not before whenever                   |
| 25:11      | you get to it so that you don't have to add minutia tasks to your task list, which is                     |
| 25:17      | great. I'm really pleased that we just got everything everywhere.                                         |
| 25:23      | Before we get into the details of some of the new actions for mail, one of the things                     |
| 25:27      | I really like, which is a general UI improvement, is the way it groups actions per application.           |
| 25:33      | Historically, if you press the mail button, you got a list of all the mail actions, but                   |
| 25:38      | they were just a big list. I think they were sorted alphabetically and they didn't really                 |
| 25:42      | make sense what was where, but now they put categories for like in mail, you've got the                   |
| 25:47      | email-related ones, the focus ones, the messaging ones, and it puts them together, which is               |
| 25:52      | really cool. One of the ones it's got, which ties into what we were talking about the last                |
| 25:56      | segment, is configure mail focus filter. Yeah, yeah. I'm not entirely certain yet                         |
| 26:03      | exactly how I'm going to be using this, but the way that I can see some people using this                 |
| 26:10      | is say, for example, beforehand, in the morning at work, you do one kind of action and then               |
| 26:16      | the afternoon you switch and you do some other kind of thing. You could have a timer action               |
| 26:20      | run at whatever time you usually switch and change your mail focus filters to get you                     |
| 26:27      | out of seeing this kind of email and just seeing that kind of email, or maybe when you                    |
| 26:31      | go into a meeting, you can run this shortcut and then when you leave the meeting, you run                 |
| 26:36      | a different shortcut and it trims out most of your work notifications, but still leaves                   |
| 26:41      | you in your work focus mode with your focus filters for mail, which is really cool. We                    |
| 26:47      | got those focus filters for all of the apps as well, which is great.                                      |
| 26:51      | One of the features that existed in the early versions of shortcuts was the ability to open               |
| 26:57      | a specific mailbox and there was no open mailbox action at the time. The way you did it was               |
| 27:02      | you went into the mail app and you just opened the mailbox two or three times and then shortcuts          |
| 27:07      | eventually got the hint and if you opened up shortcuts, it would suggest one like saying                  |
| 27:11      | open priority mailbox because it said, it saw that you just kept opening the priority                     |
| 27:16      | mailbox and then you could add it to your shortcut and you'd captured it forever. However,                |
| 27:20      | that stopped working one or two years ago. I think it was two years ago. I explained                      |
| 27:26      | it in the shortcuts for iPhone field guide and a lot of people were cranky because it                     |
| 27:31      | stopped working. They're like, what is this? How come it's not working anymore? Well, this                |
| 27:36      | year they brought a new action called open mailbox, which is what they should have had                    |
| 27:39      | from the beginning. So you don't have to go through the throw of salt over your shoulder                  |
| 27:44      | routine of trying to get shortcuts to get the hint you want to open a mailbox. You just                   |
| 27:48      | copy in an action called open mailbox. You identify the mailbox you want and it opens                     |
| 27:53      | it up. So now, getting back to the idea of contextual computing, you can have a shortcut                  |
| 27:58      | action that opens you just to the specific mailbox you want to see. I love that, but                      |
| 28:03      | I'm sad. You know why I'm sad, right? I don't know why you're sad, David. Tell everyone                   |
| 28:08      | why you're sad. That action is not on the Ventura version of shortcuts for the Mac.                       |
| 28:14      | It's not there yet. Yes. And I think and I suspect that this is just down to the fact                     |
| 28:20      | that the iOS and Mac OS mail applications are quite different. And if you look at mail                    |
| 28:27      | on the iPhone and you open a specific mailbox in mail on the iPhone, then you do just see                 |
| 28:33      | emails from that account, right? Or from that folder or whatever it is. But on the Mac,                   |
| 28:42      | you just kind of select it. So you're just kind of changing a filter. But that's it.                      |
| 28:46      | There is [[AppleScript]] support for selecting a folder, I believe. So I'm crossing my fingers               |
| 28:52      | that this will appear quite soon. But the fact that mail has this and there's now like                    |
| 28:58      | the lack of throwing salt over your shoulder, where I have to go and I have to open this                  |
| 29:04      | mailbox and I'll leave mail and I'll go to mail and I'll go to the home and I'll open                     |
| 29:09      | the mailbox and I'll close mail and repeat, repeat, repeat. I think that this is down                     |
| 29:13      | to shortcuts has a brand new API with the Siri intents, which is designed to make it                      |
| 29:21      | easier for developers and also pre-populate shortcuts, the application, so that you can                   |
| 29:26      | go and look in the shortcuts app for all the things that Siri can do on your device and                   |
| 29:31      | it's supposed to be easier because the problem with the actions that only appeared when you               |
| 29:35      | did them a certain number of times is developers had to decide how frequently does this user,             |
| 29:42      | should this user need to do this action to make it a shortcut action that should be available.            |
| 29:49      | And also, then things could become undonated. So your mailbox actions, for example, if                   |
| 29:56      | you, I don't know, took a two week break from work and during that two week break from work,              |
| 30:00      | you didn't open your work mailbox a single time. Then you could come back from your two                   |
| 30:05      | week break from work and you would look and you'd be like, okay, I'm going to create a                    |
| 30:08      | new shortcut to do this thing and you'd look at your actions. I'd swear it was there before,              |
| 30:14      | but there'd be no action to open your work mailbox. Whereas now, because it's a generic                   |
| 30:18      | open mailbox action, which takes a parameter of the mailbox that you want. So you choose                  |
| 30:22      | the mailbox that you want or the mailboxes that you want. Then you don't have to worry                    |
| 30:29      | about that because that's an action that's just always there. And I think that this is                    |
| 30:34      | the approach that they've gone with. I understand why they went with the, we'll get the actions           |
| 30:38      | that the user uses most to appear. That seems very logical, but defining an user uses most.               |
| 30:46      | And user actually wants to use most but can't ever find the flip in action because it's                   |
| 30:50      | so deeply hidden or something are two very different things. So I'm really glad that                      |
| 30:55      | they've made an improvement there. And fingers crossed, it will soon be rolling out to all                |
| 31:01      | of the other apps as well.                                                                                |
| 31:03      | Yeah. And the Mac thing I had solved a long time ago with the shortcut, I'm sorry, with                   |
| 31:08      | the [[AppleScript]] embedded in a shortcut step, but now it's a little more complicated because              |
| 31:12      | now if I want to put it on a single shortcut, it needs to know a platform I am on whether                 |
| 31:18      | or not it runs an action or an [[AppleScript]]. But also, it's definitely the right direction.               |
| 31:25      | And this whole thing with a new API, it looks to me like it's going to make it a lot easier               |
| 31:31      | for people to add shortcuts. I was talking to Marco Arment about this up at [[WWDC]] and                      |
| 31:37      | he had done some preliminary look at the new API and he said, it took away a lot of the                   |
| 31:41      | like the work of setting up shortcut support in your app. So I think we're going to see                   |
| 31:46      | even more of that now.                                                                                    |
| 31:47      | Yeah, yeah, I've done a little bit of playing with it before. And you'd think that somebody               |
| 31:52      | who likes playing with shortcuts would find it easy to create the shortcuts intense. And                  |
| 31:56      | I've honestly just always struggled with it a bit. And I just tried creating a tiny new                   |
| 32:02      | application in [[Swift Playgrounds]] with, you know, a relatively simple API and I was able                   |
| 32:08      | to get the shortcuts intense working pretty quickly. It's not an application that will                    |
| 32:13      | ever see the light of day, it's just reading some data from the web and displaying it.                    |
| 32:17      | But I was just curious to see if I could get the shortcuts actions to show up. And once                   |
| 32:20      | I'd done the, okay, so now you need to reboot your device section of the development process.             |
| 32:27      | It worked great. So I'm really pleased with that. And I'm hoping that this means that                     |
| 32:32      | more and more apps will add shortcut support because that's what we want, right?                          |
| 32:36      | Yeah. And in addition, on Mail, we got the search mail feature. I don't know how much                     |
| 32:42      | I'll use that. I haven't really thought of a good use for it for me.                                      |
| 32:46      | Well, for me, it's a sort of replacement for smart mailboxes on iOS, right? So where you                  |
| 32:52      | might frequently want to search for mail from your boss or a partner or from a particular                 |
| 32:59      | place where you make reservations online or it's all of your [[Amazon]] orders are similar,                   |
| 33:04      | then you can, you can have a search for that, which I think is, is a nice feature. Because,               |
| 33:11      | you know, that, that, that to me makes sense. I have actually just thought of a use case                  |
| 33:14      | for the changing your mail focus mode filters with a shortcut. Imagine that you, when you,                |
| 33:20      | your focus mode starts every day, it checks a specific calendar to see if you are on a                    |
| 33:26      | particular rotation. So say for example, you're on a help desk rotation where you get emails              |
| 33:32      | into a specific shared mailbox from a certain subset of VIPs, then, you know, adding that                 |
| 33:37      | into your focus mode filter when your calendar says, Hey, like this is this is on your calendar           |
| 33:42      | for today and excluding that the rest of the time would be pretty cool. So I'm, I'm glad                  |
| 33:47      | that we, we've got all of these because yeah, you know, why not search mail via a shortcut?               |
| 33:53      | And it does open mail. It doesn't return those to shortcuts. So, you know, we'll just have                |
| 33:58      | to search for a search phrase, but it's a good start.                                                     |
| 34:01      | Yeah. I mean, more is better, obviously, because mail really didn't have a lot of shortcuts               |
| 34:07      | actions going in. Send to email was really the big one. And the other, the little support                 |
| 34:13      | it had with other things wasn't that, that useful. We got a bunch of new notes actions                    |
| 34:18      | as well. In fact, notes really got a big year from the shortcuts team.                                    |
| 34:22      | Oh yeah. Yeah. Yeah, I did. I don't know. Maybe somebody who used to work on the notes                    |
| 34:27      | team got stolen by the shortcuts team in which case welcome, welcome to the gang where all                |
| 34:33      | the cool people are because notes has adding tags to notes, moving notes to folders, pinning              |
| 34:39      | notes. And my favourite one, which sounds so boring, change notes setting, which allows                    |
| 34:43      | you to say that like a hashtag followed by a string should automatically be interpreted                   |
| 34:49      | as a tag or not and things like that. That's really powerful stuff. Like that's trying                    |
| 34:54      | to eat bears lunch, which is pretty cool. Yeah. And you know, and lots of tagging support                 |
| 35:00      | in general. So yeah, add tags, create tags, delete tags, open tags, remove tags. They've                  |
| 35:06      | got the whole gamut as well as folder support. You can create and delete folders now, which               |
| 35:11      | was a free, we got that one from listeners saying, well, how do I create a folder and                     |
| 35:16      | notes? Well, you go in notes and you push the plus button. There was not an automation                    |
| 35:20      | way to do that, but now there is. So that's really cool. I'm really happy to see notes                    |
| 35:25      | get it. And like the parallel to that was [[Apple Reminders\|Reminders]], you know, [[Apple Reminders\|Reminders]] got a nice                       |
| 35:29      | update a few years ago, but it seemed like the shortcut support was lagging behind it.                    |
| 35:33      | But now we can create a list, we can open [[Apple Reminders\|Reminders]], smart lists, we can search [[Apple Reminders\|Reminders]].                |
| 35:39      | Basic stuff that I always thought should have been there, but wasn't there until now.                     |
| 35:43      | Yes. Yeah. And I think that like that's one of the things where the shortcuts team has                    |
| 35:48      | had a bit of a chance to sort of fill in the gaps, you know, they've been building a really               |
| 35:51      | great structure. And now they've had a chance to come back and, you know, do more than just               |
| 35:56      | put at the plasterboard, they're skimming the walls type thing, because we got shortcut                   |
| 36:00      | support for tab groups in [[Safari]], David. Tab groups in [[Safari]] have shortcut support.                      |
| 36:05      | I am unbelievably ridiculously excited by this. Because again, this is something that                     |
| 36:11      | we always get asked by people, how do I access a tab group in shortcuts and [[AppleScript]]                  |
| 36:16      | and through [[Keyboard Maestro]] and [[Hazel]] and things like that. And the answer was, sorry,                   |
| 36:21      | not. And the answer now is you can use shortcuts for that, which is great. So you can open                |
| 36:28      | a tab group, and you can add a tab to a tab group, and you can create a tab group. And                    |
| 36:33      | you can also configure your [[Safari]] focus filter, which means that just, you know, like you                |
| 36:38      | might want to switch your, your mail focus filter, you can also change your [[Safari]] focus                  |
| 36:43      | filter to a specific tab group. So if you have a few different work tab groups, then                      |
| 36:47      | you can switch between them in your focus filters, which means that new blinks and things                 |
| 36:52      | that you open will automatically fall into those tab groups. At least that's what's                       |
| 36:58      | happened so far in my experience. I'm not sure if that is what it's supposed to do,                       |
| 37:02      | or if that's just, you know, how it's working right now. But I'm very excited by that because             |
| 37:08      | I found that I was struggling to use tab groups in many ways, because I just couldn't automatically       |
| 37:16      | open a specific one. And now I can. And so this is where being able to change my [[Safari]]                   |
| 37:22      | focus filter, David, is going to be very helpful. I have one podcasting focus mode. I have                |
| 37:27      | a, I have a tab group for each of my podcasts. So I'm going to be able to open the right                  |
| 37:32      | tab group. Thanks to my automations, because I'll know which podcast I'm recording when                   |
| 37:38      | my podcasting focus mode activates. Yeah. So yay. Thank you. Thank you, Shortcuts Team.                   |
| 37:43      | And I'll add to that, that we did not get additional focus modes. We're still at that                     |
| 37:47      | 10 cap, which I don't really understand. I mean, for those of us that want to go hard                     |
| 37:51      | at it, why not let us, you know, because the reason you and I both only have one podcasting               |
| 37:55      | mode is the strength that we ran out. But anyway, I agreed, you know, tab modes never                     |
| 38:01      | stuck with me last year, but between the collaboration stuff they've added for it and                     |
| 38:06      | the automation stuff they've added for it, I feel like I need to like get my arms around                  |
| 38:10      | this and start planning tab groups. Do you have any currently that you're using?                          |
| 38:14      | Well, I mean, I have one for each podcast that I record, which has like a certain set                     |
| 38:21      | of tabs in that I always use. So for example, Automators has got the Google Drive folder                  |
| 38:28      | for Automators in our air table, the ads and the relay CMS so that, you know, we can put                  |
| 38:36      | all the links and everything in as we're going. And, you know, and then, you know, I've got               |
| 38:41      | a similar setup for iOS today and so on where I've got those ones set in. But I also found                |
| 38:46      | that, you know, sometimes when you're researching a project and just trying to figure out like            |
| 38:49      | how to do a thing, and then you need to stop. And you know that you might want to pick this               |
| 38:54      | up later on another device, having to get all of those, those links and save them into                    |
| 38:59      | something only to then have to come back later and open them all back up again, like if I'm               |
| 39:04      | just saving them because I'm like, okay, cool, I found the links that I need, I'm going to                |
| 39:07      | come back to this. And it's basically in a finished state, these are referenced now.                      |
| 39:12      | That's fine. But while I'm still actively doing the research and figuring it out, it                      |
| 39:15      | was annoying. And that's where the tab groups are really helpful. So I've got several tab                 |
| 39:20      | groups which are kind of like work in progress. So I've got a tab group of front doorbell,                |
| 39:26      | which sounds much more ominous than it is, but it's an automated front doorbell system                    |
| 39:30      | for my parents in France, where I've got a blog post and some other stuff all in there.                   |
| 39:37      | And yes, I could bookmark these, yes, I could put them into [[Obsidian]]. But it also means                   |
| 39:43      | that when I tap and hold on a link on iOS or I right click on a link on Mac, I can send                   |
| 39:48      | it to a specific tab group. So that tab group can always just receive that link. And that's,              |
| 39:53      | that to me is the key for the tab groups there, which is why I think they're so powerful and              |
| 39:59      | why I'm really glad that Shortcuts has got support for them. Because we've got open                       |
| 40:04      | tab group, but we also got open new tab, which will just fall into whatever your current                  |
| 40:08      | tab group is, which is great. So yay, thank you.                                                          |
| 40:13      | Agreed.                                                                                                   |
| 40:14      | This episode of Automators is brought to you by DEVONthink, the flagship product from                  |
| 40:19      | DEVONtechnologies. DEVONthink is the most professional document and information                     |
| 40:23      | management application for the Mac. It's the one place for storing all your documents,                    |
| 40:27      | snippets, or bookmarks and working with them. The integrated AI assists you with filing                   |
| 40:32      | and searching while the extensive search language with advanced breathing and search                      |
| 40:35      | operators means that you're never not going to find something. DEVONthink features                     |
| 40:40      | a flexible sync system, which supports many cloud services or lets you synchronise over                   |
| 40:44      | the local network with everything securely encrypted. This gives you the choice for however               |
| 40:48      | for syncing what is best and most securely for you. It has smart rules and flexible reminders             |
| 40:53      | that let you automate all parts of your workflow and delegate boring repeating tasks. Let Dev             |
| 40:58      | and Think automate that you organise your data with rules you define.                                     |
| 41:02      | DEVONthink's AppleScript dictionary is one of the largest on the Mac. There's no                       |
| 41:05      | part of DEVONthink that can't be automated. Extend [[DEVONthink's functionality with                  |
| 41:09      | your own commands by adding them to its Scripts menu. Even templates can have Scripts inside              |
| 41:14      | and you can set up new documents with days from placeholders or insert it by your own                     |
| 41:18      | AppleScript code. And of course, there's so much more, from an iOS companion app to                       |
| 41:22      | email archiving, scanning, or even an embedded web server for sharing your data securely                  |
| 41:27      | with your team. For me, honestly, the search stands out as useful. And this is a very silly               |
| 41:32      | example, but the other day I needed to clean the detergent drawer on my washing machine                   |
| 41:35      | and I wasn't even thinking I just typed detergent drawer into DEVONthink. Well,                        |
| 41:40      | because I've got the PDF of my washing machine manual in there, even though I wasn't in                   |
| 41:45      | the washing machine manual, it found the right page inside of the PDF for me and brought                  |
| 41:49      | it up. And the best part of it is, is I have a tickler system inside of DEVONthink so                  |
| 41:54      | that I can be tickled in GTD terms, reminded by in regular human terms of that washing                    |
| 42:01      | machine manual. Even, you know, if I wanted to be more specific, I can go script and                     |
| 42:06      | make really awesome reminders in the future with the DEVONthink's reminder functionality,              |
| 42:11      | giving me a complete custom system that's digital that doesn't require me to remember                     |
| 42:15      | to go check a paper folder. You can get 10% off DEVONthink 3 or upgrade to it right                    |
| 42:20      | now. Just go to devontechnologies.com./automators. That's devontechnologies.com/automators for             |
| 42:25      | 10% off. Our thanks to DEVONtechnologies for their support of this show and all of                     |
| 42:30      | Relay FM.                                                                                                |
| 42:31      | Just to go through some more applications that got updates, new maps, actions. Now they've                |
| 42:36      | got a whole set of them. Apparently people at [[Apple]] have been missing their parked cars                   |
| 42:40      | because we got three actions. Yeah. I think this is somewhat related to what Michael was                  |
| 42:46      | saying on iOS today, where his partner doesn't like to use the Bluetooth in his car. He doesn't           |
| 42:52      | have CarPlay. The Bluetooth in his car, he just doesn't like using it, but he still wants                 |
| 42:57      | to know where the car is parked. Now you can stick an NSC tag on your dashboard and know                  |
| 43:02      | where the car is parked. I can imagine that's great in rental cars and things like that                   |
| 43:06      | as well. Just being able to say, here's where the car is parked, or you're out with some                  |
| 43:11      | friends and they don't have CarPlay or whatever, and you know your friend always forgets where            |
| 43:16      | they parked the car. You can just run a discrete shortcut so that you'll be able to look like             |
| 43:19      | a hero later and take everyone back to the car.                                                           |
| 43:21      | Yeah. You can set the parked car location with a shortcut. That'd be another good one                     |
| 43:27      | for parents or non-nerd people in your family to say, here's a little icon. It's on your                  |
| 43:34      | home screen. Push it when you park your car, then you'll be able to find your car later.                  |
| 43:39      | Yes. Yeah.                                                                                                |
| 43:40      | Or maybe set, put two buttons, one to set the location and one to find it.                                |
| 43:46      | Yes. Or maybe make it into one for the parked car, and it's got a little car icon on it,                  |
| 43:51      | and when they tap it, it asks, hey, do you want to set where the car is, or do you want                   |
| 43:56      | to get where the car is so that they can just choose from the menu?                                       |
| 43:58      | The people I'm thinking about, that would be a bridge too far. You'd have to just have                    |
| 44:02      | two buttons, but hey, whatever works.                                                                     |
| 44:05      | Fair enough, fair enough.                                                                                 |
| 44:07      | The new shortcuts actions as well. Shortcuts for shortcuts is always a thing, and now                     |
| 44:13      | we've got some folder related and some search stuff in there.                                             |
| 44:16      | Yeah. Yeah. So you can create a shortcut with a shortcut now. It's not going to put all                   |
| 44:21      | of the actions into it, but it is going to create a shortcut with a certain name and                      |
| 44:25      | open that ready for editing, and you can delete a shortcut, search shortcuts and open a specific          |
| 44:32      | folder. And I feel like open folder, just like open mailbox, really comes in from people                  |
| 44:37      | customising their home screen, and they want home screen actions that take them to just                   |
| 44:41      | the right subset of things that they need.                                                                |
| 44:44      | So custom mail action on your home screen with shortcuts takes you to the specific mailbox.               |
| 44:49      | Custom shortcuts action on your home screen takes you to your certain folder. So when                     |
| 44:52      | you're at work, you jump straight into your work mailbox. You jump straight into your                     |
| 44:55      | work shortcuts, and you can have widgets for these, but it's nice to know that you can                    |
| 45:00      | also do your custom icons, which maybe in the background also do other things for you,                    |
| 45:05      | like time tracking or whatever is appropriate. And I think that that's pretty cool.                       |
| 45:11      | Also, I think I haven't tried this yet, but I don't see why you couldn't chain open folder                |
| 45:15      | and create shortcut together. And although I haven't checked, does a great shortcut allow                 |
| 45:21      | you to create it in a specific folder without having to open a folder separately?                         |
| 45:24      | I was definitely able to put them in sequence the other day. I'm just going to try this                   |
| 45:28      | on my phone, which is right here, because I was about to try this on my Mac, and I realised               |
| 45:31      | that this is the Mac that's running Mac OS Monterey. No, create shortcut does not take                    |
| 45:36      | a folder as a parameter, unfortunately.                                                                   |
| 45:38      | No, it doesn't.                                                                                           |
| 45:39      | Maybe we should file some feedback on that. Yeah, maybe we should ask the Shortcuts team                  |
| 45:44      | for some bonus stuff and see if they got time before release.                                             |
| 45:48      | Yeah, I do think, because like someone like you and I, and probably people listening to                   |
| 45:51      | the show, we do create a lot of shortcuts. It would be nice to streamline that process                    |
| 45:56      | where it is kind of a pain to open shortcuts, get to the right folder, start, why not push                |
| 46:01      | a button, and then you could pass a string to it to give it a name and just like really                   |
| 46:05      | get off to the races fast.                                                                                |
| 46:07      | Well, one action I would really love to see, which isn't here at all. So I'm giving the                   |
| 46:11      | Shortcuts team some homework prior OS 17 is move shortcut to folder, because you know                     |
| 46:16      | what? I have struggled massively organising my shortcuts. I've tried, but there's a lot                   |
| 46:21      | of actions where I or shortcuts where I just haven't really taken the time to sit down                    |
| 46:26      | and organise them and put them into folders. And it would be really cool if I could get                   |
| 46:30      | a list of my shortcuts folders. And so I could go through all of my shortcuts, either in                  |
| 46:36      | a specific folder or which aren't in folders, and I could choose from a list of folders                   |
| 46:41      | or create a new folder if that wasn't an appropriate folder to put that shortcut into to organise         |
| 46:46      | my shortcuts. That would really help me, you know, organise and tidy things up. And I                     |
| 46:50      | can imagine that that might be, you know, something that other people would appreciate                    |
| 46:54      | being able to do with shortcuts as well. Imagine, you know, being able to, because you can,               |
| 47:00      | where you get your shortcuts, that action, that is filtered to a folder, or you can filter                |
| 47:07      | it to a folder so that you can, for example, and this is something I do already, I get                    |
| 47:11      | all of my shortcuts in a particular folder, and then I run them in sequence, because that's               |
| 47:16      | my widget pack widgets. And so that would, you know, that's a good action to have, but                    |
| 47:24      | maybe if I could just organise them too, I would, I think other people would probably                     |
| 47:28      | like that as well. So that you could, you know, turn, like, you know, delete all of your                  |
| 47:34      | work shortcuts if you leave a job or something to get started for you for the next one.                   |
| 47:41      | Yeah, another thing that I'm noticing with the new version, and again, we're a beta one,                  |
| 47:47      | but this was a problem in the prior version of shortcuts for Mac is that if you're in                     |
| 47:52      | column mode, you can't move shortcuts, you can't move them to folders for whatever reason.                |
| 47:57      | And that's still true on the Mac. Maybe they'll get that fixed by the time this ships, but                |
| 48:01      | it works on the iPad, but it doesn't work on the Mac. And I'm guessing it's a [[SwiftUI]]                    |
| 48:06      | thing that they just haven't got around to fixing yet.                                                    |
| 48:09      | It quite possibly is, but we did get that all new view of shortcuts on iPad, which is                     |
| 48:14      | really nice. I've been playing with it a bit. I'm still not a huge fan of the list view                   |
| 48:19      | of shortcuts really. I'm not sure it offers me lots more information than I, it seems                     |
| 48:24      | to tell me how many actions are in there. And when I last modified a shortcut, but I                      |
| 48:28      | can't sort by any of those column names. So, and I wish I could when I'm in the list                      |
| 48:35      | view, for me, on Mac OS Monterey, it's very definitely not working.                                       |
| 48:40      | Oh, I'm sorry, I thought you were saying about iPad.                                                      |
| 48:41      | It possibly works on Mac OS Monterey.                                                                     |
| 48:42      | The iPad you can.                                                                                         |
| 48:43      | No, no. Yeah, it was on iPad you couldn't. On, I'll Mac you couldn't. If on iPad you                      |
| 48:48      | can, then maybe that's coming to the Mac version and it's just not quite there yet. So, we'll             |
| 48:52      | have to have to wait and see on that. That's kind of the fun and the sad part about the                   |
| 48:58      | beta process. We get to see all these new features and sometimes we even get to play                      |
| 49:02      | with them and they don't necessarily release right away at launch, which is a bit of a                    |
| 49:08      | shame. But hey, you're still be able to open a specific tab in the clock application at                   |
| 49:12      | launch because that's a shortcut action right now. So, you can jump straight to your timers               |
| 49:16      | or the stopwatch or the alarms, which can be quite handy if you've got a lot of different                 |
| 49:22      | alarms for things and you want to go and manually toggle them on and off.                                 |
| 49:26      | But I can confirm on my version of Ventura in column mode, you can sort by the columns                    |
| 49:33      | like last modified or after. Perfect. Yeah, so.                                                           |
| 49:37      | I suspect this is a [[SwiftUI]] update that they were waiting for because it's not working                   |
| 49:42      | on Mac OS Monterey and I did wonder why it wasn't working. But the fact that it's there                   |
| 49:48      | now is great because we can take advantage of that. By the way, David, you know that                      |
| 49:55      | we talked about ebook readers recently when Dan Moran was on. Did you see all the updates                 |
| 50:00      | to the shortcuts app with books? There are so many new actions. Yeah.                                      |
| 50:06      | Yeah, I guess the books team was secretly listening. Open collection, open tab, resize                    |
| 50:11      | text, search books, switch pages. You can really customise your viewing process in books.                 |
| 50:17      | That being said, I don't use books that much, but they did add a lot of nice automation.                  |
| 50:22      | They did. They did. And they also gave us a new action, which is kind of related to                       |
| 50:26      | books, but also not with optimised file size of PDF. I don't know if David, you've ever                   |
| 50:31      | received a PDF that's just humongous where people have put like, I don't know, 24,000                     |
| 50:37      | bajillion megapixel photos into a PDF for some unknown reason. Well, now optimised file                   |
| 50:43      | size of PDF is a specific action that you can use to optimise the file size of your                       |
| 50:49      | PDF, which is quite nice. And I have to say, I'm quite pleased by that, just because there                |
| 50:56      | are so many PDFs. I had to do this the other day for my parents. My mom was trying to get                 |
| 51:01      | some specific pages out of a manual for their new mower. Very, you know, seemingly random,                |
| 51:08      | but not because the first, like, it was one of those standard seven language manuals,                     |
| 51:14      | and each language had about 100 pages. And so you don't want a 700 page PDF when you                      |
| 51:20      | only need, you know, 100 pages. So I use shortcuts, and I gave her a shortcut to just get like            |
| 51:25      | asked her for the start page, the end page, and then made a PDF from the range. But I                     |
| 51:31      | would have been nice to be able to run the optimised file size of PDF action at the end                   |
| 51:36      | of that before saving it. So that, you know, we would have definitely had the the most optimised          |
| 51:41      | version for her iPad. But as it is all at that action when I was 16 launches.                             |
| 51:46      | Yeah, this this optimisation of PDF size to me falls in the category of a gift from auto,                 |
| 51:51      | the automator, you know, because that something automator was always very good at was resizing            |
| 51:57      | PDFs. And they've stated that, you know, auto is not long for this world. So they're going                |
| 52:03      | to be pulling as much out of it as they can. Actually, I'm a little shocked we didn't get                 |
| 52:07      | more out of automator this year, in terms of actions, like, you know, some of the stuff                   |
| 52:13      | I do, like with the watermarking and stuff like that hasn't shown up. I mean, you can                     |
| 52:18      | do it in other ways and shortcuts, but auto did it better, honestly. And but but the PDF                  |
| 52:24      | optimisation has to be at the top of their list, because I think it's something everybody                 |
| 52:28      | could benefit from. And now it's a single action shortcuts, which is kind of what we're                   |
| 52:32      | looking for, can make it easy for everyone. Yeah, yeah, because the overlay image action                  |
| 52:37      | does allow you to essentially watermark something with a specific capacity, size and position             |
| 52:42      | of the image and so on. But it doesn't doesn't feel like it works quite the same way. And                 |
| 52:47      | it's quite telling, I think that I've tried dragging a few of those automator workflows                   |
| 52:52      | into shortcuts to convert them. And I can't remember what happened, but it certainly didn't               |
| 52:58      | convert them to the overlay image action. So either they've yet to write a translation                    |
| 53:04      | path for that, or they're planning on doing something different. Because I think one of                   |
| 53:09      | the things that we're seeing is some of the some of the actions that you could potentially                |
| 53:13      | do in other ways have been simplified with this, which is great because, you know, adding                 |
| 53:20      | things like tags to notes, you could kind of work around that in some ways or, you know,                  |
| 53:27      | and so being able to, you know, do this directly is very helpful. And, you know, they're also             |
| 53:33      | just adding quality of life actions like setting your personal hotspot to on or off. So if usually        |
| 53:39      | when you do a certain thing, then you would turn on your hotspot, you can do that as part                 |
| 53:44      | of a shortcut. Now, which is very nice if you, for example, have an NFC tag or an amiibo                  |
| 53:51      | in your [[Nintendo Switch]] case, and you would like to be able to tether your [[Nintendo Switch]]                |
| 53:55      | to your phone's hotspot, well, now you can tap the amiibo or the NFC tag and turn on                      |
| 54:01      | the hotspot on your phone so that your [[Nintendo Switch]] can connect to it, which I really like.            |
| 54:06      | Yeah, that hotspot one, I think, is kind of really useful for a lot of people. Like, you                  |
| 54:11      | know, sometimes like if you've got a little guy, people have cars that have hotspots built                |
| 54:16      | in or, you know, there's just a lot of different uses for that and making that an automation              |
| 54:21      | friendly is good. Voice memos, did you expect voice memos to get more shortcuts on animation?             |
| 54:26      | I did not. I really didn't. I wasn't quite sure, like, what would happen with a voice                     |
| 54:32      | memo because, you know, voice memos is one of those things where it feels like the app                    |
| 54:37      | that everybody has long since forgotten exists, and especially because other apps like Just               |
| 54:43      | Press Recorder out there and really do a great job. But voice memos has got some actions.                 |
| 54:49      | You can create a recording and you can create a folder inside of shortcuts. So, you know,                 |
| 54:55      | it's more automatable, which certainly for things like being able to put a button on                      |
| 55:00      | your home screen that will just jump you straight into creating a recording is really helpful.            |
| 55:07      | But I can also imagine for people who record, say, meetings at work or similar, being able                |
| 55:11      | to create a folder in voice memos as part of your project creation is going to be a                       |
| 55:17      | feature that you really appreciate. And similarly, when you're done with that, you can delete             |
| 55:20      | a folder and delete a recording. So, yay. Thank you. Thank you. Voice Recording and                       |
| 55:25      | Shortcuts Team.                                                                                           |
| 55:26      | Yeah. When I was up in Cupertino for [[WWDC]], I put out, because we have a podcast feed                      |
| 55:38      | like a little pocket microphone, but it improves the audio quality quite a bit. And I just                |
| 55:43      | recorded in my hotel room into my phone, into Voice Memos, and had a remarkably good result               |
| 55:51      | from it. I was kind of surprised how good it sounded. I mean, it's not as good as my                      |
| 55:54      | main rig with my fancy microphone and XLR and everything, but for something that you                      |
| 55:59      | take on the road with you, I'm going to do that again, and now I'm going to build automation              |
| 56:03      | into it because why not, right? So, and I'm glad that they brought it. And it's just                      |
| 56:09      | funny to me that those showed up right at the time when I needed them. So, there you                      |
| 56:14      | go.                                                                                                       |
| 56:15      | Yes. That said, I think Ferrite might come and have something to say about that, just because               |
| 56:20      | I think, I don't know, does Ferrite, I'm now misremembering. Does Ferrite allow you to record                 |
| 56:25      | directly into the application, or is that just for editing the audio? I think I remember                  |
| 56:32      | allowing you to record.                                                                                   |
| 56:33      | I don't know, because I've always just done it with Voice Memos. It's always sounded                      |
| 56:36      | pretty good. And then I can do a little bit of additional edit on my Mac if I want, but                   |
| 56:41      | I...                                                                                                      |
| 56:42      | Yeah, Ferrite does allow you to. So, that'll be pretty cool if that shows up. But speaking                  |
| 56:48      | of some unexpected actions, you know, we didn't expect Voice Memos to show up. Did you expect             |
| 56:52      | background sounds from the settings to show up?                                                           |
| 56:55      | No.                                                                                                       |
| 56:56      | So, you know, this is one of those features. It's not quite the like, hey, [[Apple]] lady play                |
| 57:05      | rain sounds or ocean sounds or whatever it is that you might use, but there is a settings                 |
| 57:12      | feature. It's an accessibility feature in iOS for background sounds to allow you to,                      |
| 57:17      | you know, have a background sound playing, which may help drown out other things. And                     |
| 57:22      | this has shown up inside of the Shortcuts app. And there's quite a few settings options                   |
| 57:27      | here. And I don't remember exactly which ones were and were not already here. But I can                   |
| 57:34      | imagine that being able to do something like set your mono audio so that your mono... So,                 |
| 57:41      | audio is set to mono. So, if you're only listening through one AirPod, then, you know, you just           |
| 57:46      | hear it through that one side properly. Though, if it's an AirPod, it will do that automatically.         |
| 57:51      | But if you've got a regular set of headphones, it wouldn't change your background sound.                  |
| 57:55      | And then setting your LED flash or something so that you're... When you get a notification,               |
| 58:00      | your phone flashes to let you know that that's arrived. That could be quite useful as a combination.      |
| 58:08      | And similarly, for those people who do use the LED flash for notifications, that's where                  |
| 58:14      | the flash on the back of your phone lights up to say, hey, I've got a notification for                    |
| 58:18      | you. You can then turn that off automatically when you enter sleep focus mode. Because that's             |
| 58:23      | one of the things that I haven't used the LED flash in years, so maybe they've fixed                      |
| 58:28      | that already. I found that that was so annoying if you were trying to sleep and the flash                 |
| 58:33      | on your phone wasn't covered by whatever you were laying it on. It would then light up                    |
| 58:37      | the entire room to tell you that you've got a message while you were asleep or something.                 |
| 58:42      | And yeah, that was not good. So, I'm pleased to see that there's lots of little things                    |
| 58:47      | sneaking in. And I'm sure there's a whole bunch of stuff that I've missed. But what's                     |
| 58:51      | really exciting for me is these focus mode filters, even if you can't think of a good                     |
| 58:56      | reason to be changing your focus mode filters for mail, messages, calendar or [[Safari]] as part              |
| 59:01      | of shortcuts, it is entirely possible that you will have a different need for it in one                   |
| 59:07      | of the many other apps that's going to add support for a focus mode filter. And then                      |
| 59:12      | we will be able to use that feature to, you know, inside of shortcuts. Similarly, opening                 |
| 59:18      | the tab group in the clock, opening a specific tab in the clock, you might not care that                  |
| 59:22      | you can now jump easily to timers versus the stopwatch versus your alarms in the world                    |
| 59:27      | clock. But that precedent that that sets for all of the other apps out there is so good.                  |
| 59:35      | Because, you know, we don't just want to be able to open a contact or view a contact.                     |
| 59:39      | We also want to be able to edit a contact just like we got the edit reminders option                      |
| 59:42      | where we can edit contacts now. I'm not sure if that was there in iOS 15. It's certainly                  |
| 59:46      | there in iOS 16. But the fact that this is there is great. And then, you know, as things                  |
| 59:53      | progress and we get more and more apps, I've seen so many developers playing with these                   |
| 59:57      | awesome lock screen widgets, David. It's so cool that, you know, I can't wait to see                      |
| 01:00:02   | what they do with these focus modes and the focus mode filters because imagine Timery and                 |
| 01:00:08   | me being able to say, okay, I'm in my podcasting focus mode. That means I want these things               |
| 01:00:12   | available to me or this client or whatever. And then, you know, next focus mode, other                    |
| 01:00:18   | client and being able to change that as I need to. That's really great. So I'm looking                    |
| 01:00:24   | forward to seeing what all of those app developers do. And also, Joe, if you're listening, I'm            |
| 01:00:28   | sorry, I'm not intending to give you homework. I know that you're doing other cool stuff.                 |
| 01:00:33   | So yeah, but I'm sure all these developers who are working really hard on this are going                  |
| 01:00:37   | to appreciate the fact that, you know, there's precedent for all of these things as well.                 |
| 01:00:41   | So they're not rolling a dice to say, well, what will be allowed as a shortcut section?                   |
| 01:00:46   | They've got something from [[Apple]] that they can point to and say, well, the clock app                      |
| 01:00:50   | does it. Mail app does it. Why can't I do it?                                                             |
| 01:00:53   | Yeah, I really think this is an example of that new simplified API and the way that you're                |
| 01:00:59   | going to get shortcut actions into shortcuts a lot faster and a good sign of things to                    |
| 01:01:05   | come. Now, as we record this, we're in beta one. The betas of third-party apps are going                  |
| 01:01:10   | to start, you know, showing up in two or three weeks, I'm sure. And we're going to see a                  |
| 01:01:14   | bunch of new interesting actions. I think it just really speaks well for the future                       |
| 01:01:18   | of shortcuts and actions for people. One last one here, I've got a my list that I don't                   |
| 01:01:24   | think we discussed today that I thought was cool was remove image background.                             |
| 01:01:28   | Yeah, I wanted to save this one, David, because it's so cool. So for anybody who didn't see               |
| 01:01:33   | the keynote, they demoed in the keynote, being able to tap on a subject in an image. So say,              |
| 01:01:38   | for example, you've got a picture of your really cute dog, David, and you want to be                      |
| 01:01:42   | able to use just the picture of the dog. And you don't want to have to spend hours [[Photoshop\|Photoshopping]]          |
| 01:01:46   | out everything in the background. You just want the dog. Well, you can tap and hold on                    |
| 01:01:51   | Ashoka, your lovely golden doodle, and pick her up, and then swipe over to messages and                   |
| 01:01:56   | drop her and tap send. And that's it. And there's nothing else to it. That's the feature.                 |
| 01:02:02   | But there's a shortcut section to remove the background from an image. So you've got 20                   |
| 01:02:07   | years of, you know, your pets or friends and family, maybe, for example, you were a wedding               |
| 01:02:13   | and you want to get rid of the background for everybody's picture of the wedding, we                      |
| 01:02:17   | can just run them all through a shortcut. So you don't have to manually pick them up                      |
| 01:02:20   | and drag them and drop them somewhere else. You can you can just run that shortcut over                   |
| 01:02:25   | all of those actions. Every single selfie you've ever taken of yourself, run that shortcut                |
| 01:02:30   | action over them and get rid of the background. It's not going to be perfect, but it's so                 |
| 01:02:34   | cool. I mean, this isn't as good as portrait mode, but I was thinking like a homegrown                    |
| 01:02:38   | portrait mode would be to run this and then take the original image and apply a blur filter               |
| 01:02:43   | and then paste the, the copied clean image on top. I thought that would be a fun like                     |
| 01:02:49   | little trick. It just, it's really nice. And that feature that they showed off in the keynote,            |
| 01:02:53   | I think it was with a picture of a cat where they just drug it out of an image. And every                 |
| 01:02:58   | time you see a keynote and you see something that looks like magic, you always ask yourself,              |
| 01:03:02   | well, was that an image that was like perfectly shot just for the purpose of showing this                 |
| 01:03:07   | feature often? Is it going to be one of these things where you get mixed results in the                   |
| 01:03:11   | real world? I can tell you using the beta, this feature works on everything. We had a                     |
| 01:03:15   | meet up of Mac power users, people just recently and I was showing it to some of the listeners             |
| 01:03:22   | and it is just shocking to me how I can go in my library, take any image of a person or                   |
| 01:03:26   | an animal and drag them out of it. It is really cool. And I think a lot of people, I'm not                |
| 01:03:31   | even sure what I'm going to do with the feature, but I love showing it to people.                         |
| 01:03:35   | Yeah. It basically means that any picture you've got of something where you can identify the              |
| 01:03:40   | background relatively easily, you can sort of turn it into a sticker. It doesn't actually                 |
| 01:03:45   | work as a sticker in the messages terms where you can like drag it onto a specific message                |
| 01:03:49   | that somebody sent and have it like be stuck to it visually. But it means that you can                    |
| 01:03:56   | just send that back. So, you know, especially imagine you're taking a picture of your Mac                 |
| 01:04:01   | because you're selling it and you don't want all the stuff in the background. You can just                |
| 01:04:06   | take the picture and then drag the Mac out of the picture and be done with it. You know,                  |
| 01:04:11   | you don't need to like mess around, like trying to set up like a white tablecloth or something            |
| 01:04:15   | so you can take pictures without a background anymore. You know, you're still going to want               |
| 01:04:19   | to try and get a good contrast between whatever you're taking the image of and the background,            |
| 01:04:25   | but it doesn't need to be perfect, which I think is just one of those things where this                   |
| 01:04:30   | is AI really doing such a good job for us because we've got all of these things. But                      |
| 01:04:37   | I do think David, we've got a whole other section that we need to talk about, which                       |
| 01:04:41   | are apps on devices that weren't there before, allowing better shortcut sections.                         |
| 01:04:47   | This episode of The Automators is brought to you by LinkedIn Jobs. Post a job for free                    |
| 01:04:52   | by going to linkedin.com/automators. As the sun comes out and small businesses                      |
| 01:04:58   | are back in business, LinkedIn Jobs makes it easier to grow your team. LinkedIn Jobs                      |
| 01:05:03   | helps you find the people you want to interview faster and for free. Hiring the right people              |
| 01:05:08   | means getting not only the right skills, but also the right personality and the right fit                 |
| 01:05:13   | and you can do all of that with LinkedIn Jobs. With LinkedIn Jobs, you can create a free                  |
| 01:05:17   | job post in minutes to reach your network and beyond to the world's largest professional                  |
| 01:05:22   | network of over 810 million people. Then add your job in the purple hashtag hiring frame                  |
| 01:05:29   | to your LinkedIn profile to spread the word that you're hiring. So your network can help                  |
| 01:05:34   | you find the right people to hire. Simple tools like screening questions make it easy                     |
| 01:05:39   | to focus on candidates with just the right skills and experience so you can quickly                       |
| 01:05:43   | prioritise who you'd like to interview and hire. It's why small businesses rate LinkedIn                  |
| 01:05:48   | Jobs number one in delivering quality hires versus leading competitors. LinkedIn Jobs                     |
| 01:05:54   | helps you find the candidates you want to talk to faster. Did you know every week nearly                  |
| 01:05:59   | 40 million job seekers visit LinkedIn? Post your job for free at linkedin.com/automators.           |
| 01:06:06   | That's linkedin.com/automators, A-U-T-O-M-A-T-O-R-S to post your job for free. Terms and conditions |
| 01:06:14   | do apply. And our thanks to LinkedIn Jobs for their support of the automators and all                     |
| 01:06:18   | of Relay FM. Okay, Rose, so you did a good job of teasing                                                 |
| 01:06:23   | us before the break. What's on your mind? Well, the thing that's on my mind is something                  |
| 01:06:28   | that we've mentioned slash complained about before. Sorry, Shortcuts Team, we do love                     |
| 01:06:32   | you really in that apps don't exist on certain other devices, which means that you have                   |
| 01:06:38   | to say, hey, if this is an iPhone, do this. Open the weather app. Otherwise, don't. Well,                 |
| 01:06:48   | we've now got the weather app on all of our devices. But we've also got the clock app                     |
| 01:06:52   | on macOS and things like that. And I don't know how much of this is the Shortcuts Team.                   |
| 01:06:56   | I don't know how much of this is the macOS and the iOS and the iPadOS teams. But they                     |
| 01:07:01   | are bringing all these things across, meaning that we do have a more universal cross-platform             |
| 01:07:08   | experience, allowing us to do more things the same way on other devices and do things                     |
| 01:07:16   | in ways that you would expect them to work. So, for example, Find Notes could work with                   |
| 01:07:21   | more than 26 notes previously, if it found more than 26, it would just stop at 26. But                    |
| 01:07:26   | I'm just very excited by the fact that we have these apps everywhere. Because, like,                      |
| 01:07:32   | for example, the clock actions, okay, you still can't set multiple timers on anything                     |
| 01:07:36   | but an [[Apple Watch]] and a HomePod. But you can, you know, open the clock app on the Mac                    |
| 01:07:41   | so that you can see whatever timer is running. Which, for all those people who just want                  |
| 01:07:46   | a simple timer on their Mac, they can do that. And just like a spotlight on iOS could open                |
| 01:07:52   | a Shortcut to run it, well, a spotlight on macOS can run Shortcuts now, which is great                    |
| 01:07:57   | because we now have the same experience where you press Command Space on all your devices,                |
| 01:08:01   | unless you've put something like [[Alfred]] in place, of course. Yeah, it's progress. I                       |
| 01:08:06   | mean, I feel like there's still a ways to go. But I think that this is a lot better.                      |
| 01:08:11   | I mean, it really felt broken when you could do something on one platform that seemed like                |
| 01:08:16   | it should work on another platform and it didn't. Yes, yeah, exactly. And I think it's                    |
| 01:08:21   | just one of those things where they're trying to bring things more into alignment, like                   |
| 01:08:28   | the torch or flashlight, as the Americans call it, on your [[Apple Watch]]. That didn't                       |
| 01:08:33   | used to work with the Set Flashlight function. But now that does work. And I do think that,               |
| 01:08:40   | you know, they're making things just always work and work more consistently is very useful.               |
| 01:08:46   | So if you had a lot, if you've got lots of photos, and I'm sure many of our listeners                     |
| 01:08:50   | have lots of photos, and so you don't necessarily have all of your albums on your device, but             |
| 01:08:55   | you had a shortcut action to find photos, and it was filtered to a specific album, because                |
| 01:09:03   | you wanted to get pictures of, I don't know, what are your kids from a specific holiday                   |
| 01:09:06   | that you took or a vacation, you know, and then you got a new iPhone. So that photo album                 |
| 01:09:11   | wasn't on it yet. And you ran that shortcut, then it would just crash. And that wasn't                    |
| 01:09:16   | a good experience. And now you do have that in that actually works whether or not that                    |
| 01:09:23   | album is on your device. And that will kind of in the background from what I've been reading              |
| 01:09:27   | and what I try playing with on one device, actually start downloading that album for                      |
| 01:09:32   | you, so that you then are more likely to have it offline. And I think that this is just                   |
| 01:09:37   | really useful because it's really sad when you are excited to show somebody a shortcut.                   |
| 01:09:43   | And then they tap run, and it just kind of doesn't work for some reason, maybe because                    |
| 01:09:48   | they didn't have the photo album offline, maybe they had more than 26 notes that they were                |
| 01:09:52   | searching for. And their search term wasn't very good. And so only return 26 and they                     |
| 01:09:57   | couldn't find the one they were looking for. Or maybe they're nerdier and they wanted to                  |
| 01:10:01   | use the content graph, but they didn't really understand it. Well, you know, all of those                 |
| 01:10:05   | things have, you know, had a step forward. Because if you wanted to find your calendar                    |
| 01:10:11   | events, but not the ones that you declined, then you couldn't filter those out. So you                    |
| 01:10:17   | now can filter those out, which is great. And I do think that, you know, these are all                    |
| 01:10:23   | little things that maybe some of us folks who have been using this stuff for a long time                  |
| 01:10:28   | would be like, well, okay, yeah, so I'll just work around that, would say. But, you know,                 |
| 01:10:34   | thinking back to I made a shortcut for my mom the other day, that allowed her to get                      |
| 01:10:37   | certain pages out of a PDF and save it with a new name. You know, that's not something                    |
| 01:10:43   | I would have done with workflow because she'd have had to download a third party application.             |
| 01:10:47   | And even when shortcuts didn't ship with iOS, it was kind of one of those, I don't know,                  |
| 01:10:53   | like, it's quite possible she's just going to want to install it type things. But now                     |
| 01:10:57   | that shortcuts ships with iOS, so my parents have got it on all their devices, I'm much                   |
| 01:11:00   | more likely to give them shortcuts actions to do things and put those actions on their                    |
| 01:11:05   | home screen, especially when I can guarantee that they are going to work it, are going                    |
| 01:11:10   | to work when you expect them to. Because it's just a much more stable and confident experience            |
| 01:11:17   | as somebody who's giving something to somebody else.                                                      |
| 01:11:20   | Yeah, like the setting a timer on the Mac is the only one I've done so far. But automatically             |
| 01:11:26   | setting a timer in the Mac wasn't something I could do before.                                            |
| 01:11:29   | No.                                                                                                       |
| 01:11:30   | And now I can. And that's great because a frequent shortcut I have is a work mode where I say             |
| 01:11:35   | I can't going to work on this and I'm going to focus on answering email for 30 minutes.                   |
| 01:11:39   | And then I'd have to go over to my phone and set a 30 minute timer or get a third party                   |
| 01:11:44   | app or whatever. But now I can just add it to the automation. And it's done in a timer                    |
| 01:11:49   | is right on my Mac. And it's a little quality of life thing that suddenly it makes everything             |
| 01:11:53   | feel tighter.                                                                                             |
| 01:11:55   | Yes. Yeah. So, you know, just thinking about that, like, you know, a standard meeting preparation         |
| 01:12:01   | shortcut that you might have, though, how just help you get things ready for a certain                    |
| 01:12:05   | meeting. Sometimes you might need a warning like five minutes before the meeting. Sometimes               |
| 01:12:10   | you might need a 10 or 15 or 13 minutes before. But being able to say, okay, I'm going to                 |
| 01:12:14   | work on this for X number of minutes and just have, you know, ask it to like have it pop                  |
| 01:12:19   | up and ask you, how long do you want to be doing this for? And then you set a timer so                    |
| 01:12:24   | that when you're done, you know, you get a reminder that that is that is really nice.                     |
| 01:12:31   | And so I'm glad that we have that. Just because, you know, also, like, have you seen the world            |
| 01:12:37   | clock? I mean, it just looks like it did on the iPad. But it's it's it's nice to have,                    |
| 01:12:43   | you know, I can imagine my dad using that quite a bit. Similarly, being able to have                      |
| 01:12:47   | an alarm on your on your Mac, it seems a bit weird, but alarms on my Mac, I genuinely can't               |
| 01:12:53   | wait for that to come on Mac OS Ventura on my work Mac, which I will not be installing                    |
| 01:12:58   | a beta on. Otherwise, my team leave me kill me. You know, my productivity takes a nosedive                |
| 01:13:03   | because I chose to install the pre release version of Mac OS that I think he's going                      |
| 01:13:06   | to have words. But, you know, being able to set an alarm to say, hey, like, I need to                     |
| 01:13:11   | leave early today and have that on the device. That's really useful because it's one thing                |
| 01:13:17   | having an alarm on your phone. But just like I find that my cooking reminders are best                    |
| 01:13:22   | set on the home part in the kitchen, my work alarms will be best set on my work machine.                  |
| 01:13:27   | Thus far, I've been using a combination of random things sort of duct tape together with                  |
| 01:13:31   | wishes and hope and a bit of gum and definitely more duct tape. Being able to just use the                |
| 01:13:36   | clock app inside of that. Thank you very much. I'll take that. You know, why not?                         |
| 01:13:42   | Some other improvements. You can now run shortcuts straight from [[Spotlight]]. So you can just type          |
| 01:13:47   | in the shortcut name and run it and you can run specific app actions from [[Spotlight]] like                  |
| 01:13:52   | a timer if you want. That's kind of cool. Yes. I think this is related to the new API,                    |
| 01:13:57   | the intense API that we're getting because the idea behind this is essentially if you've                  |
| 01:14:04   | never opened the Shortcuts app before and you go and you open the Shortcuts app, it's empty               |
| 01:14:08   | right now. Okay. iOS 15, macOS Monterey. There's some sample shortcuts in there, but there's              |
| 01:14:15   | not really a lot else. The idea now is that all of the actions that a developer creates                   |
| 01:14:21   | as part of the app will be showing up as shortcuts inside of the Shortcuts application. So then           |
| 01:14:29   | you can go in and you can say, oh right, this thing that always interferes when I say this,               |
| 01:14:32   | I don't want that there anymore. I'm going to rename that and put that somewhere else                     |
| 01:14:37   | so that it, you know, it doesn't interfere with my life. And this thing that I always                     |
| 01:14:42   | say the wrong thing, I'm going to put that to be the right thing or I'm going to add                      |
| 01:14:45   | another version of it so that I can just say whatever I want and it'll do it. But this                    |
| 01:14:49   | means that all of those can then be made available to [[Spotlight]], which works on the iPad as far           |
| 01:14:55   | as I can tell as well as the Mac. And I'm sure it works in on the iPhone as well with                     |
| 01:15:01   | the new search bar at the bottom as well, which is nice. But, you know, it's, it's just                   |
| 01:15:05   | an improvement, a big improvement because everything is everywhere. And even if you're                    |
| 01:15:10   | not looking for it, I think it's going to filter into your life.                                          |
| 01:15:13   | Yeah, we already mentioned how the way it categorises app actions by once you open the app,               |
| 01:15:19   | there is an interesting thing in the beta and this is beta one. So, you know, bear with                   |
| 01:15:23   | us if this doesn't ship. But if you scroll all the way to the bottom, there's a heading                   |
| 01:15:27   | called app shortcuts and there's only one app in it, voice memos. But if you tap on it,                   |
| 01:15:32   | it gives you a nicely formatted page about shortcuts available to voice memos. It kind                    |
| 01:15:38   | of reminds me like on the if this then then website when you, when you connect it to a                    |
| 01:15:44   | service, it gives you a list of all the things it can do with that service. It's kind of                  |
| 01:15:48   | like that very user friendly option of saying, well, these are the things you could do with               |
| 01:15:52   | that app and there's only one app in it. Now, I hope this means that they plan to do this                 |
| 01:15:57   | for all apps. But I don't know what this means, but this is here right now and it's out there.            |
| 01:16:04   | So we can talk about it. But that might be a really nice feature. I think to help people                  |
| 01:16:08   | kind of get started with shortcuts. Like if they want a shortcut, a specific app, they                    |
| 01:16:12   | just click on it and they get a better idea of what they can do with it.                                  |
| 01:16:15   | Yes. I should note just in case anyone's confused, like I've just tapped on voice memos and this          |
| 01:16:20   | is on my iPhone. I'm not seeing this show up on my Mac and Mac OS Ventura.                                |
| 01:16:25   | It's definitely not on Mac OS Monterey, but it's not on Mac OS Ventura. But when I tap                    |
| 01:16:30   | on voice memos, for me, there's an option at the top that says, turn on voice memos                       |
| 01:16:34   | shortcuts with Siri. And I presume that until I do that, those ones will not be available                 |
| 01:16:39   | to Siri for me. And so that means that a developer can just create these, but it's not going              |
| 01:16:48   | to be interfering with what you say to Siri until you go and turn that on. And I see a                    |
| 01:16:53   | list of two shortcuts there. And when I tap on the three dots that you would usually use                  |
| 01:17:00   | to edit, it gives me the option to use in a new shortcut and suggest it in the search.                    |
| 01:17:06   | And I can toggle off suggest in search. So if something is showing up in the search that                  |
| 01:17:11   | I don't want to, then I can get rid of that, which is quite nice. So yay. I'm really pleased              |
| 01:17:18   | about that.                                                                                               |
| 01:17:19   | You can also just generally remove shortcuts from [[Spotlight]] if you just hit the three dots.               |
| 01:17:25   | So they've made a way, before they made a way to add them, now they've made a way to                      |
| 01:17:29   | remove them if there was ones that keep showing up and conflicting with things you want to                |
| 01:17:32   | search for. All this is just really nice quality of life. Kind of getting back to the top of              |
| 01:17:37   | the show, I feel like this is a good year of evolution for shortcuts. We already talked                   |
| 01:17:42   | about the different views you can get now on iPad, where you can view by category. List                   |
| 01:17:50   | view improvements. It's available as an alternative grid on iPhone, which is kind of interesting.         |
| 01:17:57   | And you can read the new icon picker. So when you're in the shortcut and you want to pick                 |
| 01:18:03   | an icon for it, they redid the whole system. You can search now for a glyph, which is nice                |
| 01:18:07   | before you couldn't search it. They still don't have enough. Honestly, I don't understand                 |
| 01:18:11   | why they just don't open it up to the entire [[SF Symbols]] library. But that's another question              |
| 01:18:17   | for another day. But it is easier now to add an icon to your shortcut.                                    |
| 01:18:22   | Yeah. Yeah, it is, which is really nice. I have to say, it is just useful having the                      |
| 01:18:30   | search there, because I did find that that was the thing that I always struggled with.                    |
| 01:18:33   | I was searching for a picture of a car, so I want to type car. And I couldn't type car.                   |
| 01:18:39   | I had to, you know, scroll through and search for a car to look for it. And this is just                  |
| 01:18:46   | one of those things where they're not going to have every alias of everything in there.                   |
| 01:18:50   | But they do have some of the things that we might need. Though I have to remember, David,                 |
| 01:18:55   | there's a feature that we forgot to talk about that I feel very guilty not talking about                  |
| 01:18:58   | because I've asked for it. And the shortcuts team gave gave us the present. They gave us                  |
| 01:19:02   | aliases, David. Yeah, they gave developers key words that can be associated with the                      |
| 01:19:07   | shortcuts action so that if you're searching for it, and it's not called that, it can still               |
| 01:19:12   | show up so that when you look for a particular action, you know, there's other words that                 |
| 01:19:17   | can trigger it to appear, which is really useful because I complained about this specifically             |
| 01:19:20   | with the exit and stop shortcut actions. I don't remember which way around it is now.                     |
| 01:19:26   | And so I'm going to get it wrong when I say, but whichever it was, it's now the other one                 |
| 01:19:31   | though, and I would keep searching for the old one. And so I wouldn't find it. I think                    |
| 01:19:37   | it was exit shortcut, and it's now stop. That's it. Yeah, it was exit shortcut. And if you                |
| 01:19:43   | typed exit into the search, you would get nothing. And now to be clear, if I type exit                    |
| 01:19:47   | into the search, I'm still getting nothing, but there's the ability for the shortcuts                     |
| 01:19:50   | team to add an alias to that action or exit shortcut. So I suspect maybe quid might also                  |
| 01:19:58   | be a good one. But, you know, they've obviously not had a chance to do everything yet, but                |
| 01:20:03   | kudos to them for doing such a great job because, you know, all of these things here, nothing             |
| 01:20:09   | is ever perfect. There is no such thing as anything that is perfect. But they have done                   |
| 01:20:13   | such great work to allow themselves to do things like add the low hanging fruit of,                       |
| 01:20:18   | Oh, right. And let's add some aliases into this later, which, you know, they can maybe                    |
| 01:20:23   | do when they're not right in the midst of all of the iOS 16 things is so good. I'm so                     |
| 01:20:29   | pleased for them. And just generally tuning the user interface. I mean, we talked about                   |
| 01:20:33   | the multi column view, but you also have the ability to hide the next action suggestion,                  |
| 01:20:38   | which honestly, I like, I would keep that turned on. But, you know, if you don't like                     |
| 01:20:42   | it, turn it off. And so they've, they've done a lot of things here to make it a little                    |
| 01:20:46   | more user friendly. It feels, it feels more stable. It's been getting more stable for                     |
| 01:20:50   | the last year, honestly. You know, them being the canary in the coal mine with [[SwiftUI]]                   |
| 01:20:55   | certainly set them back, but they seem to be recovering nicely and shortcuts just keeps                   |
| 01:21:00   | getting better. I am so, so excited. I think the big news is probably the API and how easy                |
| 01:21:05   | it's going to be for us to get even more shortcut actions out of developers. But I, I think               |
| 01:21:12   | we have a lot to look forward to here, Rose.                                                              |
| 01:21:15   | I think we do as well. And I'm just really pleased to see that, you know, the other teams                 |
| 01:21:19   | behind applications and features on Mac OS and iOS and iPad OS are already taking these                   |
| 01:21:26   | actions and, and using them and using the APIs to give us these features. So, you know, we've,            |
| 01:21:33   | we've got [[Safari]] reader support on Mac OS now, which we didn't have before. And I don't know              |
| 01:21:38   | if that's because of the news shortcuts intense, or because the [[Safari]] team actually had a                |
| 01:21:42   | chance to do that along with the tab groups, or somebody was doing tab groups and went,                   |
| 01:21:46   | oh, shoot, we missed the [[Safari]] reader stuff on Mac OS. Let me just go fix that a minute.                 |
| 01:21:52   | I don't really care why it happened. I am just happy that it did happen. And, you know,                   |
| 01:21:58   | at the end of the day, it doesn't matter what calls this, providing the result that we get                |
| 01:22:02   | is that everybody gets more automation available to them, even if they're not necessarily going           |
| 01:22:08   | and looking for it, you know, setting your watch face when you're in your exercise focus                  |
| 01:22:13   | mode or your fitness focus mode is something that you should just be able to do. And you                  |
| 01:22:17   | shouldn't need to know the magic incantation of things to make that happen. And I'm, I'm                  |
| 01:22:23   | glad that it's, you know, it's, it's just available to more people. I can see more people                 |
| 01:22:28   | using this every, every day. So I can't wait for iOS 16 to come out. And I can't wait to                  |
| 01:22:34   | see what other stuff that we're going to find between now and the release or maybe even                   |
| 01:22:38   | while other new features get added because, you know, every so often they, they sneak some bonus          |
| 01:22:43   | surprises in during the beta rounds. So maybe we'll see some of those. Even if we don't, I'm happy.       |
| 01:22:49   | It's interesting to me, like, it's just an intellectual exercise is like, are these actions               |
| 01:22:54   | getting added by the teams? Like, is there somebody on the [[Apple Reminders\|Reminders]] team that loves                      |
| 01:22:57   | shortcuts and is making sure these actions get added? Or is it someone on the shortcuts                   |
| 01:23:04   | team? Like in my head, there's like a, a shortcuts lone ranger. And just, just hang                       |
| 01:23:10   | him with me. Like he's, he or she has like a cowboy hat and like a Segway that's painted                   |
| 01:23:16   | like a Seqway. Yeah. That sounds so dangerous. It's all gloss, David. It doesn't matter. It's              |
| 01:23:24   | a loan. Don't injure our shortcuts team. Don't injure our shortcuts team. I'm gonna go wrap               |
| 01:23:28   | them in bubble wrap. This person just like roaming through the loop and just like busting                 |
| 01:23:33   | into the nose team and like getting the code in. I don't know how it happens, but, but                    |
| 01:23:38   | they definitely, I think it's a combination of what API's shortcuts has available to those                |
| 01:23:44   | apps. So for example, the new intense API is obviously available to, you know, every                      |
| 01:23:50   | app from yellow season [[Obsidian]] to [[Drafts]] and, and Scriptable, but it's also available                    |
| 01:23:55   | to [[Apple Mail]] and [[Safari]]. But also if those teams want something specific to be available, then                 |
| 01:24:01   | they can put it into their API, um, which makes it in turn available back to the shortcuts                |
| 01:24:06   | app because that's how shortcuts did a lot of stuff before, you know, it was using a                      |
| 01:24:10   | combination of API's that were available. And like that's how workflow did calendar.                      |
| 01:24:15   | Um, it used the calendar API or the event kit API. Um, and so I suspect it's six of one                   |
| 01:24:21   | and a half a dozen of another, but I still love the idea of the shortcuts lone ranger.                    |
| 01:24:25   | Just folks do us a favour. And if you're using a Segway in Apple Park, please wrap yourself                 |
| 01:24:29   | in bubble, uh, bubble wrap first and, or one of those like giant, like hamster bowls, inflatable          |
| 01:24:34   | hamster bowl type thing. Um, that, that sounds safe. Um, we don't want you to get injured.                |
| 01:24:38   | Yeah. I agree with you. It's probably the API and the fact that they're on [[SwiftUI]] and                   |
| 01:24:42   | everything is running the same code now. So that makes it so much easier, but the romantic                |
| 01:24:47   | one is the loan ranger, the loan automation ranger. And that's, that's what I'm going                     |
| 01:24:52   | to stick with.                                                                                            |
| 01:24:53   | Well, we, we can have both David. There is no reason at all why we can't have both, um,                   |
| 01:24:58   | because both gives us all of the options and we love having all of those automation options               |
| 01:25:03   | available to us.                                                                                          |
| 01:25:04   | All right. So that, that, if I wrap it up today, I want to thank our sponsors at Kolide,                 |
| 01:25:07   | DEVONthink, LinkedIn Jobs, uh, for automators max users, we're going to be talking about                 |
| 01:25:12   | that new lock screen today. Looking forward to sharing that with you. Otherwise we'll                     |
| 01:25:16   | see you next time. Have a great day and keep automating.                                                  |
