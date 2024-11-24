---
status: complete
fc-date:
  year: 2024
  month: 9
  day: 20
fc-category: podcast
podcast: Automators
published: 2024-09-20
duration: 2562
formattedduration: 00:42:42
hosts:
  - David Sparks
guests:
  - Charlie Chapman
notetype: episode
showpage: http://relay.fm/automators/164
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators164.mp3
episode: 164
title: "164: Automating with Charlie Chapman"
---
![Automators Logo.jpg|200x200](Logo.jpg)

# Synopsis
Dark Noise developer Charlie Chapman joins David to explain how he implemented automation in his application and how he uses Automation himself.

# Hosts
- [[David Sparks]]

# Guests
- [[Charlie Chapman]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 164 Discussion](https://talk.automators.fm/t/164-automating-with-charlie-chapman/18018)

# Sponsors
- None.

# Show Notes
### Credits
*The Automators*  
- [Rosemary Orchard](https://rosemaryorchard.com)  
- [David Sparks](https://www.macsparky.com)

*The Editor*  
- [Jim Metzendorf](https://twitter.com/jmetzendorf)

*The Fixer*  
- [Kerry Provanzano](https://twitter.com/ciaokerryciao)
* * *
- [Charlie's Website](https://charliemchapman.com/me)
- [Dark Noise](https://darknoise.app/)
- [Shortcuts User Guide - Apple Support](https://support.apple.com/guide/shortcuts/welcome/ios)

# Transcription
  
| Time Index | Transcription                                                                                                                                           |
|:---------- |:------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to the Automator's Podcast. I'm David Sparks. Rosemary can't be here this week.                                                                 |
| 00:06      | She's out sick, but that's okay gang. I've got a friend with me. Welcome back to the                                                                    |
| 00:10      | show, Charlie Chapman. Thank you so much for having me. It's                                                                                            |
| 00:14      | been a few years. I thought it was recent and then I went and listened to it and I was like,                                                            |
| 00:19      | we were in the very middle of the, or at the beginning of the pandemic when we were recorded                                                            |
| 00:23      | the last time. Yeah. Charlie is the developer of the [[Dark Noise]]                                                                                     |
| 00:27      | application. And I think you were our first developer interview on the show or one of you                                                               |
| 00:33      | first. Oh, wow. Rosemary and I are both big fans of your app, Charlie. And it's just such a,                                                            |
| 00:39      | it's a great app, but you're also just, every time I see you at [[WWDC]] or we bump into each other,                                                    |
| 00:44      | I just love your take on what's going on in the [[Apple]] ecosystem. You're a guy who's in the thick                                                    |
| 00:49      | of it, not only in developing your app, but also pursuing automation on behalf of yourself and                                                          |
| 00:55      | your users. So it's always interesting to hear what you have going on. And I'll just do a pitch                                                         |
| 01:02      | real quick for [[Dark Noise]] because I think it's so awesome. I'll take it. Yeah. So [[Dark Noise]] is the,                                            |
| 01:08      | it's a, I call them white noise apps. I don't know if that's the word you're supposed to use.                                                           |
| 01:12      | What do you use, Charlie? What do you call it? Yeah, I usually say white noise first because                                                            |
| 01:16      | that's what people know. Ambient noise because it's not just white noise, but yeah. It is the app                                                       |
| 01:22      | that I think I run the most. I don't know if I have to dig up user statistics or anything,                                                              |
| 01:27      | but I am, I have tinnitus. Although people tell me I pronounced that wrong, Charlie. I'm not sure                                                       |
| 01:33      | if that's right or no. I've always said tinnitus. I have heard people say tinnitus or something,                                                        |
| 01:37      | which for whatever reason is not how I've said it. And it sounds weird to me, but I could be wrong.                                                     |
| 01:42      | Either way, I got the buzzing, man. I got the minor third between the left and the right ear.                                                           |
| 01:46      | So when I'm not listening to music, I like to have some kind of noise to kind of blur that out. And                                                     |
| 01:52      | the [[Dark Noise]] Thunderstorm track has probably been played like 10,000 hours in my house. So                                                        |
| 02:01      | I don't know. I just, it's my go-to app because it sounds good, but it's super automation friendly.                                                     |
| 02:07      | So I can just trigger it like when I get into edit mode or whatever. You've done such a great                                                           |
| 02:12      | job with the automation on it. And I just love that. Well, thank you. That makes me feel very                                                           |
| 02:19      | good to hear. The funny thing, we had you on the show before. We'll put a link to that in the                                                           |
| 02:23      | show notes. But just a real quick summary, you made the app just to test out making apps, right?                                                        |
| 02:30      | I mean, this was not like, you didn't expect this to become a livelihood, right? No, no. It was very                                                    |
| 02:36      | much a, I kind of finagled my way onto an iOS team at the company I was at. I had done programming,                                                     |
| 02:42      | but not like [[Apple]] development. And I went through, because I'm a dork, I have, of course,                                                          |
| 02:49      | a list of app ideas if I ever took the time to learn how to make apps. So I went through my list.                                                       |
| 02:54      | I found one that didn't need like a backend or anything. And it was this white noise generator,                                                         |
| 03:00      | because my wife uses one every night. And when we had switched from Android to iOS a few years                                                          |
| 03:05      | before that, we couldn't find one that we really liked. We had one on Android that we liked fine,                                                       |
| 03:10      | but we just never could find one. And so I was like, oh, that'll be the perfect                                                                         |
| 03:13      | sort of test bed. And then it kind of, it kind of took off in a way that I definitely did not                                                           |
| 03:18      | expect. Yeah. Well, I mean, they were terrible before you showed up. I will tell you, because                                                           |
| 03:23      | I am a connoisseur of white noise apps because of the tinnitus. And there were some, I remember                                                         |
| 03:30      | there was one that had like little dangly things that would swing when you, it was just nuts.                                                           |
| 03:38      | To their credit, I'll say, I think there's two categories of other white noise apps out there.                                                          |
| 03:42      | There's the ones that like got in the store right away. And they've, they have really good,                                                             |
| 03:48      | you know, search optimisation. And so they've kind of sat and those are the ones that kind of look                                                      |
| 03:51      | really old. And there's a lot of them that are really cool sort of experience apps like                                                                 |
| 03:58      | for meditation or something like that. Yeah. And I was trying to, to thread this needle of like,                                                        |
| 04:03      | I want something that you never have to even open because that's not the point. The point is you                                                        |
| 04:08      | like, you play it and you get out, you go to sleep or you focus on work or whatever. And so I think                                                     |
| 04:13      | I'm targeting something a little different than what everybody else is doing. Yeah. Well, and                                                           |
| 04:16      | I'm in your target audience because I don't need an animation of me walking through the forest.                                                         |
| 04:21      | I just need the thunderstorm noise so I can get my work done. And so I guess that's why                                                                 |
| 04:27      | you and I are such a, such a good match because your app is perfect. So, so how's it going though?                                                      |
| 04:34      | So we had you on before, like I said, but it's been many years and, and [[Dark Noise]] is still a                                                       |
| 04:40      | great app doing really well, but you have continued to evolve automation on [[Dark Noise]]. What are you                                                |
| 04:46      | doing and, and how's it going? So in the like pure automation front, probably the biggest thing is                                                      |
| 04:53      | [[Apple]] has improved our [[Shortcuts]] integrations since then. So, you know, you can run it in the                                                   |
| 04:58      | background. I think I even complained about the lack of parameterised [[Shortcuts]] in our last episode                                                 |
| 05:04      | and now that's there. So I can have just like, there's like two main [[Shortcuts]], which is find a                                                     |
| 05:10      | noise if you wanted to like search by string or something like that, and then play a noise. And                                                         |
| 05:15      | then everything works on parameters from that, whether you want it to play with a timer, whether                                                        |
| 05:19      | you want it to like fade out a long time so that it doesn't wake up in the middle of the night by                                                       |
| 05:25      | suddenly shutting off all that kind of stuff are just parameters in the shortcuts. So shortcuts,                                                        |
| 05:32      | I feel like are pretty well full featured. But really, there hasn't been a whole lot in that                                                            |
| 05:38      | space in the last few years. The really big thing to me, which goes with my whole ethos for                                                             |
| 05:44      | ethos for [[Dark Noise]] is is the widgets, like the initial home screen widgets, and then the sort of                                                  |
| 05:51      | spread across the whole platform of sticking widgets everywhere you can possibly imagine. And                                                           |
| 05:57      | that that has been the exciting thing every year for me is finding new places where I can stick a                                                       |
| 06:03      | button with all the configuration that App Intents gives you, which I get kind of for free because                                                      |
| 06:09      | of my shortcut support. And then you can you can hit that button in your lock screen on your                                                            |
| 06:17      | home screen. And then this year, actually today, as we're recording today, now you can do in the                                                        |
| 06:23      | [[Control Centre]] or on your lock screen in those bottom two buttons. You can play a sound from                                                        |
| 06:28      | there with the new [[Control Centre]] widgets. Yeah, let me I want to back up just a little bit for                                                     |
| 06:33      | the listeners, because it seems like for automation, App Intents have become like the                                                                   |
| 06:39      | foundational layer of a lot of things from Apple. Could you explain that for folks?                                                                     |
| 06:45      | Yeah, so I mean, the word App Intents is probably a little developer centric, but                                                                       |
| 06:51      | essentially, from a technology standpoint, what [[Apple]] gave us. And actually, what they had before                                                   |
| 06:56      | was these things called Siri Intents. And that powered, if you wanted to integrate with Siri,                                                           |
| 07:02      | you could sort of define, like, entry points into your apps. And I think the original widgets                                                           |
| 07:09      | even kind of piggybacked off of Siri Intents. And they sort of realised, I think, that that's a                                                         |
| 07:15      | system that they can spread all over the place. And so they re kind of thought it and they call                                                         |
| 07:20      | them App Intents. And an App Intent is essentially a way for us developers to tell the system,                                                          |
| 07:26      | this is a thing my app can do. Here's a bunch of different settings that you can set with that.                                                         |
| 07:31      | And then you can sort of plug those into all sorts of different systems. And so the widgets,                                                            |
| 07:36      | a lot of people, I don't even know, realise this, but on a widget, whenever you place it,                                                               |
| 07:42      | if your app is still in, or your home screen is still in wiggle mode, if you tap on that,                                                               |
| 07:47      | it'll open up this little configuration page. And you can pick a bunch of different options                                                             |
| 07:52      | that control that widget. And that's all powered by App Intents. And App Intents also power                                                             |
| 07:58      | the options that we have to plug into Siri right now. And there's a couple other things. Oh,                                                            |
| 08:04      | in [[Shortcuts]], obviously, are powered by App Intents. So yeah, it's sort of just like defining                                                       |
| 08:09      | an entry point into your app that isn't literally opening the app and hitting a button.                                                                 |
| 08:13      | Yeah, I mean, I have a bigger theory on it in the sense that like, on the Mac, we had Apple                                                             |
| 08:19      | events, which are the underlying layer of automation, right? So often it's just triggering                                                              |
| 08:24      | an Apple event. That's what [[AppleScript]] does. That's what [[Automator]] did in the day. And                                                         |
| 08:29      | even [[Shortcuts]] for the Mac interacts with [[Apple Events]] on the Mac. But it seems like                                                            |
| 08:35      | Apple Intents has kind of grown out of the void for mobile, like for iPhone and iPad.                                                                   |
| 08:42      | Yeah. We didn't have [[Apple Events]]. But now it seems like these Apple Intents are becoming                                                           |
| 08:47      | that, maybe not as thoroughly baked in, but just as useful. And you're right. It's the basis                                                            |
| 08:53      | of widgets and [[Shortcuts]], and it's going to be the basis of [[Apple Intelligence]] as well.                                                         |
| 08:57      | 100%. Yeah. So [[Apple]] developers, like you, are going to have every motivation to embrace them,                                                      |
| 09:06      | which is great for us automators. Yeah. And I think where it's less baked in                                                                            |
| 09:14      | in a way than [[Apple Events]], not that I've done [[Apple Events\|Apple Event]] development, but it's less in ways                                     |
| 09:19      | that it's not like the Mac where you can sort of hijack systems as easily. But in some ways,                                                            |
| 09:25      | it's a little more advanced because it kind of came out of Siri. And Apple Intents also                                                                 |
| 09:31      | lets you define queries that can go back to it. So things like, you know, you can set which,                                                            |
| 09:39      | in my case, you can set which sound you want the thing to play. But the way that's done                                                                 |
| 09:44      | is it's actually like you can ask the user as like a secondary question. What sound do you                                                              |
| 09:51      | want it to play? And then the user can then kind of ask you behind the scenes, what options are                                                         |
| 09:56      | there, and it can show those options. And so there's actually quite a bit of back and forth                                                             |
| 10:00      | that allows for a lot more intuitive, like user experiences. And like you said, all that's                                                              |
| 10:06      | going to definitely play into [[Apple Intelligence]]. So what are your favourite widgets for [[Dark Noise]]?                                            |
| 10:12      | I mean, ultimately, everything comes down to a way to play a sound. Yeah, I'm a person                                                                  |
| 10:22      | who's, I think, like most most of my users, there's really a sound that you play regularly.                                                             |
| 10:28      | Yeah. And so for that, all of the like single noise widgets, whether it's on the lock screen,                                                           |
| 10:34      | or on your home screen, all of those allow for a whole bunch of customisation. And so I like                                                            |
| 10:40      | those because I can say when I play this, it'll automatically stop at, you know, 5 AM, and it'll                                                        |
| 10:47      | fade out over 30 minutes. So over 30 minutes, it'll slowly fade out as opposed to just suddenly                                                         |
| 10:53      | stopping, which always causes me to wake up. And the ability to like put those right in front of                                                        |
| 11:01      | me on the lock screen, that's probably my favourite one now, especially when you combine it with                                                        |
| 11:06      | focus modes. So my bedtime [[Focus Mode]] sets a lock screen that has this button on it. And that                                                       |
| 11:13      | button is the one I play literally why my wife plays every night. And so I can just have it                                                             |
| 11:19      | sitting there ready for me immediately right there on my home screen. And I never have to like                                                          |
| 11:24      | think about it or open the app. That's probably my favourite one because and that's kind of my like                                                     |
| 11:29      | I think the most interesting thing with automation in the Apple ecosystem lately, has less to do                                                        |
| 11:35      | with [[Shortcuts]] like I was expecting and more to do with these, all of these system integrations                                                     |
| 11:41      | hooking together, because I just described an automation, I think you would describe you would                                                          |
| 11:46      | say this is automation, which is at night when it's time for me to go to bed, it sets a home a                                                          |
| 11:51      | lock screen that looks a certain way it's darker, it has a button that I can hit to start a sound.                                                      |
| 11:56      | It has a button that I can hit to start a sound. But none of that involves [[Shortcuts]] or scripting                                                   |
| 12:01      | or anything like that. It's all just different parts of the platform that all kind of work                                                              |
| 12:06      | together really well. Yeah. And Apple's done a really good job of kind of like banking that cake                                                        |
| 12:11      | where you can make it like just like the idea of you set a focus mode and your watch face changes                                                       |
| 12:17      | and your home screen changes. And like you said, all this stuff just becomes available to you.                                                          |
| 12:22      | I will say that as we're talking, I'm madly updating the app because this idea of putting                                                               |
| 12:26      | it in [[Control Centre]] to me is golden. Like I feel like, yeah, that's for me. Just put my                                                            |
| 12:32      | thunderstorm in [[Control Centre]] and I can just one swipe and a button press and I'm off to the races.                                                |
| 12:38      | Yeah, it's cool. And you can put multiple of them next to each other. So you can,                                                                       |
| 12:42      | because now the new [[Control Centre]], you can have multiple pages. So you could just have a like                                                      |
| 12:47      | sound page that has your different options that you want and you can just pick which one you                                                            |
| 12:50      | want and hit play. You've been probably thinking about [[Control Centre]] a lot as you've been doing                                                    |
| 12:54      | this. What's your personal [[Control Centre]] strategy? Have you come up with a cool way to put it all                                                  |
| 13:00      | together? You know, it's funny. I think I may have mentioned this the last time I was on too,                                                           |
| 13:05      | but as a developer, it's always hard to get into any sort of system because you're wrecking your                                                        |
| 13:11      | home screen or your [[Control Centre]] in this case as you're developing because I have pages of                                                        |
| 13:16      | noises and stuff and [[Control Centre]] in particular is very finicky when it comes to placing things.                                                  |
| 13:23      | That said, what I'm loving is I have a secondary, like my main [[Control Centre]] looks pretty similar                                                  |
| 13:30      | to before just with a couple extra options. Like I have a thing that opens my [[Roku]] because I have a                                                 |
| 13:36      | [[Roku TV]]. It opens the Roku app from the [[Control Centre]], which is surprisingly really nice. It's                                                 |
| 13:42      | sitting right next to my [[Apple TV]] button for when I'm on a different TV, but my second screen is all                                                |
| 13:47      | home automation stuff. So I have a big button that's my bedroom lamps and then a smaller button                                                         |
| 13:54      | that's my office lights and another smaller button that's my living room lights and having that                                                         |
| 14:00      | because the old [[Control Centre]] home automation stuff was really finicky for me because it would                                                     |
| 14:06      | sometimes move around on me and I I grew to just never trust it. And now I absolutely open that                                                         |
| 14:12      | every time and have all summer since I set that up, which I'm loving. Yeah, I like the idea of a                                                        |
| 14:17      | home screen based [[Control Centre]]. And I mean, when you think about it, it's two swipes. You swipe                                                   |
| 14:22      | down to open [[Control Centre]], swipe up once. You don't even have to do that. You can drag.                                                           |
| 14:28      | Yeah, that's true. If you just continually drag your hand down, it will bounce between those pages.                                                     |
| 14:33      | So if I just drag it down a little bit further, it'll go straight to that home one.                                                                     |
| 14:37      | Yeah. And but I mean, think of all the home automation stuff you can control that way. It's                                                             |
| 14:43      | really quite impressive. I feel like that that's one of the kind of unsung heroes of iOS 18.                                                            |
| 14:50      | How was iOS 18 overall for you as a developer this year getting your stuff updated for it and                                                           |
| 14:55      | all that? Any big problems? The [[Control Centre]] was a bit of a bit of a problem because I got it                                                     |
| 15:03      | all working relatively quickly early in the cycle. But I did run into this one like kind of weird                                                       |
| 15:09      | bug. That wasn't a big deal. And I worked around. But then I just sort of moved on. And then right                                                      |
| 15:16      | towards the end, I was retesting everything. And I noticed none of my icons showed up.                                                                  |
| 15:21      | And it turns out they took away the ability for [[Control Centre]] widgets to                                                                           |
| 15:25      | to render regular images. The only thing that is allowed anymore is [[SF Symbols]]. And in my app,                                                      |
| 15:34      | there's, well, one, everything works off of images. That's what I have baked in. And I have                                                             |
| 15:40      | all these custom icons that I've built over the years. But also there's like an icon builder.                                                           |
| 15:44      | People can import their own images. And you can't just make turn those into [[SF Symbols]] on the fly.                                                  |
| 15:50      | So I ended up having to, in a mad rush, build all of my like 50 or 60 icons as these kind of crazy                                                      |
| 16:00      | [[SF Symbols]] that [[Apple\|Apple's]] defined, which are cool. They're kind of a pain to build. And then there's                                       |
| 16:07      | a couple of fallbacks. So like if you if you import your own custom image, it just shows like the                                                       |
| 16:12      | mix icon on the [[Control Centre]], which is a little frustrating. And I've definitely                                                                  |
| 16:17      | have some bugs in some people's ears to maybe maybe open that up next year. So we'll see what                                                           |
| 16:21      | happens there. Yeah. Well, now you have [[SF Symbols]] for your icons, I guess. That's true. And there                                                  |
| 16:27      | has been places where that's been nice. So, you know, yeah, yeah. Now, that's rough. That's rough.                                                      |
| 16:32      | I mean, Greg Scown from [[TextExpander]] once told me, he says, every [[WWDC]], you get,                                                                |
| 16:38      | you get a homework assignments. And so homework assignments are where you have to                                                                       |
| 16:43      | fix something to keep working and presents; and presents are the things where you get new features                                                      |
| 16:49      | without doing any work. And every year it's a comparison of how many homework assignments                                                               |
| 16:53      | that I get versus presents. Yeah, I've been pretty lucky with that in the last couple of years.                                                         |
| 16:58      | It's more presents than homework assignments for sure. Yeah. Well, I'm glad that they continue                                                          |
| 17:03      | to push the button on the automation stuff. And I do think you're right. I mean, as this stuff                                                          |
| 17:08      | leans into [[artificial intelligence]], [[Apple]] is really putting a lot of bets down on that. So                                                      |
| 17:14      | that actually makes it more attractive for developers to get automation. We almost get                                                                  |
| 17:21      | the automation stuff for free as people aim for [[Apple Intelligence]], which is really great.                                                          |
| 17:28      | What automations are you doing these days, Charlie? You got any cool automations you're                                                                 |
| 17:33      | using in your life? I think, like my thing with automations is always weird. I feel like                                                                |
| 17:41      | I have a lot of very simple automations. In the moment they start getting complicated,                                                                  |
| 17:47      | I go very way too far on them. So for example, I really love [[Federico Viticci\|Federico Viticci's]] [[Apple Frames Shortcut\|Apple Frames shortcut]]. |
| 17:59      | Use it constantly. But using it on the Mac, what's that? As a developer,                                                                                |
| 18:05      | you would have a lot of use for that. Yeah. Yeah, yes, exactly. But then there's a couple                                                               |
| 18:12      | things. I kept trying to build little shortcuts around it to make it do a couple of things. It                                                          |
| 18:15      | was a little difficult to use on the Mac because [[Shortcuts]] on the Mac is still a little dicey                                                       |
| 18:23      | for me sometimes. So I ended up just building that into an app, which I'm actively working                                                              |
| 18:29      | on right now. Okay. And then another overly complicated thing that I'm doing is my local                                                                |
| 18:35      | newspaper doesn't have an [[RSS]] feed, which drives me crazy. So the only way for me to read it is                                                     |
| 18:44      | either to open up their website twice a week because they dump everything in twice a week                                                               |
| 18:51      | and read it there and it's not a very intuitive site or literally read the physical paper,                                                              |
| 18:57      | which is what I've been trying to do for the last couple of years. And so finally,                                                                      |
| 19:00      | with these new [[Artificial Intelligence\|AI]] coding tools, I just wrote a script that scrapes their website and builds                                |
| 19:10      | an [[RSS]] feed and posts it on a public [[GitHub]] and pushes that up. And then now I subscribe to that                                                |
| 19:17      | in [[Reader]] and I have this [[RSS]] version of my local news site. So that's one end of the spectrum,                                                 |
| 19:23      | where I go over the top. And then the other end of the spectrum. Oh, yeah, go ahead.                                                                    |
| 19:28      | I want to talk about that one first for a little bit. It's like...                                                                                      |
| 19:30      | Yeah, no, let's do it.                                                                                                                                  |
| 19:31      | So which [[Artificial Intelligence\|AI]] tool did you use and give us a little bit more meat on the bones here,                                         |
| 19:36      | how you pulled out?                                                                                                                                     |
| 19:37      | Okay, yeah. I didn't know if that was two in the weeds as a developer here. So that was,                                                                |
| 19:44      | I used, what is it called? Is it [[Cursor - The AI Code Editor\|Cursor]]? There's this new code editor that came out that's just                        |
| 19:54      | has a whole bunch of [[Artificial Intelligence\|AI]] stuff baked into it. I think it uses [[Claude]] behind the scenes.                                 |
| 20:00      | And essentially, it lets you, rather than copy and paste a code document into a thing,                                                                  |
| 20:07      | it actually reads all the documents you have in your project at any given time.                                                                         |
| 20:12      | So I just started a new project, which is just a folder of files. And I said,                                                                           |
| 20:19      | I want a [[Python]] script that can scrape this website and make a [[RSS]] feed out of it.                                                              |
| 20:26      | And it did it instantly. Now, I didn't know how to actually pull the right elements off the page                                                        |
| 20:34      | to set the title and everything. But that was something I just needed to tweak this little                                                              |
| 20:38      | like line, or I could literally highlight it and say, I want it to grab, you know,                                                                      |
| 20:42      | this line or whatever, I could just say those words out loud. And so pretty quickly,                                                                    |
| 20:47      | I had this script that I could just run. And it sucked everything down, it created an [[XML]] file.                                                     |
| 20:53      | But I've never done, I only recently actually got a Mac mini that's just sort of like a home server.                                                    |
| 21:00      | So I had never done anything that sort of runs regularly on a home Mac. And so I just asked it                                                          |
| 21:07      | in plain language, how can I run this every hour on the Mac? And it showed me how to like set the                                                       |
| 21:14      | [[launchd]] automation. And it just runs that every hour. And it runs my little script. And then it                                                     |
| 21:23      | runs, it commits that to a [[GitHub]] repo, and then pushes it. And I actually made it a little bit                                                     |
| 21:31      | more advanced. And it was all through just conversation. I was like, how can I make this                                                                |
| 21:35      | cache? So it only ever posts like three articles at a time because my local paper would post the                                                        |
| 21:43      | whole newspaper all at once. So my [[RSS]] feed would just be one giant paper, I'm not going to read                                                    |
| 21:48      | everything just from that. So I kind of have it like slowly drip out throughout the day now.                                                            |
| 21:53      | So it's mixed in with my other, my other like blogs and stuff. And it handled all that for me                                                           |
| 22:02      | and just kind of worked with me through it. It was it was genuinely very impressive as someone                                                          |
| 22:06      | who hadn't used these tools that much for coding before. Well, I think that one of the benefits                                                         |
| 22:11      | of [[Artificial Intelligence\|AI]], I mean, there's downsides and upsides to all this. But one of the benefits for automators is                        |
| 22:17      | that it democratises that process. Yeah. I did a MacSparky Labs video on like somebody written                                                          |
| 22:24      | me saying I want to get [[OmniFocus]] out as a [[Markdown]] checklist like my [[OmniFocus]] list. And there                                             |
| 22:32      | wasn't like an easy way to do it in the app. So I did an example where we just went to [[ChatGPT]]                                                      |
| 22:37      | and it was the same things like I said, you know, I'm going to I want you to query me for                                                               |
| 22:43      | the name of an [[OmniFocus]] project and then go into [[OmniFocus]], get that list and save it out as a                                                 |
| 22:49      | [[Markdown]] file with this format, you know, the [[Markdown]] checklist format and then put it as a text                                               |
| 22:56      | file into the copy buffer, you know, it's like that was my instruction was something like that.                                                         |
| 23:01      | And it got it largely on the first attempt. And then there was like one little tweak I made to                                                          |
| 23:06      | I said, okay, that's good. Now go back and do this to it. And it rewrote the script. And I had an                                                       |
| 23:12      | [[AppleScript]]. And then you could drop that [[AppleScript]] into an automated reaction. You could                                                     |
| 23:16      | run it just as an independent [[AppleScript]]. And then, you know, whereas if somebody had asked                                                        |
| 23:21      | me that before, I could have cobbled it together for them, but it would have taken me an hour                                                           |
| 23:25      | to get it. Yeah, you would have had to actively sit and think through it and read through what                                                          |
| 23:30      | options are available. And I'm I'm like passable with [[AppleScript]], but I'm not sales going,                                                         |
| 23:35      | you know, and this thing, like I said, it took minutes. The other one I find it very useful,                                                            |
| 23:40      | I tell people it's like, if you've always been intimidated by [[Regular Expressions\|regular expressions]] and you want                                 |
| 23:45      | to embed a [[Regular Expressions\|regular expression]], your automation, just go to, you know, chat GPT and ask it to                                   |
| 23:51      | compose the the [[Regular Expressions\|regex]] for you. And it gets it almost every time the first time that one scares                                 |
| 23:56      | me only because well, because [[Regular Expressions\|regex]] scares me generally. Yeah, right. But in that case, it's                                   |
| 24:01      | like, I would have no way of confirming whether that's right. Or there's some weird bug that will                                                       |
| 24:07      | only show up, you know, every once in a while. That's true. That's true. But you know, I mean,                                                          |
| 24:13      | the [[Regular Expressions\|regex]] stuff usually we're talking about is like, find the blind copy line and get a list                                   |
| 24:19      | of names from that. You know, I mean, that kind of stuff. And I'm not looking to do                                                                     |
| 24:23      | really high. Yeah, exactly. With my automation. But but I do think that, like, you you're a                                                             |
| 24:29      | developer and you went to the AI tool to kind of get you up and running on something that wasn't                                                        |
| 24:33      | in your wheelhouse. I feel like that is true also for just, you know, lunch pail everyday                                                               |
| 24:39      | automators who are not developers. And suddenly it gives you the ability to embed a little snippet                                                      |
| 24:44      | of [[AppleScript]] in your in your shortcut that does something powerful, like on the Mac, at least.                                                    |
| 24:51      | Yeah, that's and that's to me, where I'm really looking to see if Apple does anything, I guess,                                                         |
| 24:57      | not this year, but maybe next year with [[Shortcuts]], particularly because the fact that there's not                                                   |
| 25:04      | like you can't go to [[ChatGPT]] and ask it to help with the shortcut. I mean, you could and maybe                                                      |
| 25:09      | it'll like list it out. But it's an awkward, there's no just like, paste this and see if it works.                                                      |
| 25:15      | But it would be really cool if, especially because [[Shortcuts]] is such a narrowly defined                                                             |
| 25:20      | thing, it feels like something it should be able to do. It should be able to master that, right?                                                        |
| 25:24      | It'd be cool to be like, Hey, can you make me a shortcut that'll do these five things?                                                                  |
| 25:28      | And then it just spits it out for you. And the nice thing there are shortcuts are much more                                                             |
| 25:33      | readable for non developers. Yeah. And so you could look through it and be like, Oh, I actually                                                         |
| 25:38      | wanted to do, you know, this slightly differently or whatever. So that could be really interesting,                                                     |
| 25:43      | I think you were saying earlier that a lot of your your automations are very simple. I think                                                            |
| 25:49      | because we see this with a lot of guests come in, they feel almost guilty. They're like, well,                                                          |
| 25:53      | you know, my automation is real simple stuff. I'm like, I feel like that is actually the type                                                           |
| 25:58      | of automation that people actually use. And I think I think I don't want the listeners of the                                                           |
| 26:05      | show to think, well, I've got to write a 30 step shortcut or I'm not, you know, I'm not worthy of                                                       |
| 26:10      | [[Shortcuts]]. No, I mean, the best ones sometimes are two or three steps. And but they solve a problem                                                 |
| 26:17      | for you. And they do it like efficiently. And it's those two and three step ones that work for                                                          |
| 26:22      | years and years. And you never think about them again, you know, yeah, exactly. I'm a big fan of                                                        |
| 26:27      | simple automation steps, if it makes your life easier. Yeah. Yeah. One of those actually the                                                            |
| 26:33      | one that's been really working into my productivity life, I guess, over the last year or so has been                                                    |
| 26:41      | Raycast in particular. And that's on the Mac, obviously. But like just being able to do little                                                          |
| 26:48      | simple things that I think most people were already doing with other tools before, but because I                                                        |
| 26:53      | just happened to have it, I now just kind of use it for everything. But like one example is I use                                                       |
| 26:59      | [[Apple Music]] as my way of playing music most of the time. And like hitting, I guess this is the case                                                 |
| 27:06      | for any music app, but hitting play pause on my keyboard is such a like lottery of whether it's                                                         |
| 27:13      | going to play or pause my music or play something on YouTube or something like that. Yeah. And I                                                        |
| 27:18      | know there's like apps that try to make that better or something. But what I realised is there's an                                                     |
| 27:22      | [[Apple Music]] extension for [[Raycast]]. And it lets you play and pause and skip. And I just set keyboard                                             |
| 27:29      | shortcuts that's if I hit like control option command spacebar, which sounds more complicated                                                           |
| 27:36      | than it is, but I'm just mashing the bottom left buttons on my keyboard, it'll always play or pause                                                     |
| 27:41      | [[Apple Music]] specifically. And then the same, you know, three with left and right skips or                                                           |
| 27:49      | skips or previous. And that is something I use literally nonstop all the time when I'm like                                                             |
| 27:56      | jumping into meeting and I'm like, Oh, I need to stop this music. And it's been amazing.                                                                |
| 28:00      | Well, I feel like [[AppleScript]] or I'm sorry, [[Apple Music]] needs some sort of automation to                                                        |
| 28:06      | address it directly anyway. Because I do think for users that don't know about those tricks,                                                            |
| 28:12      | it's really hard. You know, it's like I've got a [[Stream Deck]] dial and I've got one program that                                                     |
| 28:18      | anytime I turn the dial, I run a little [[AppleScript]] that lowers the [[Apple Music]] volume by                                                       |
| 28:23      | 10%, you know, or and if I push it in and it mutes it, but I had a right little scripts for it                                                          |
| 28:28      | because you're right. You don't know that when you hit that volume down button, it's actually going                                                     |
| 28:33      | to affect the music, you know, and when the phone and that's not one because we have weird                                                              |
| 28:38      | complicated setups. It's like, if you use [[Safari]], the built in browser and you open YouTube,                                                        |
| 28:44      | the YouTube will take over that button. And to be fair, if you're watching a YouTube video                                                              |
| 28:49      | and you hit pause, you would also expect that to pause. Yeah. So like it makes sense. I don't                                                           |
| 28:55      | know what the actual solution there is, but it is very confusing, I feel like. Yeah. What do you                                                        |
| 29:00      | think of [[Raycast]]? I feel like I haven't given it enough of a shot because I'm so I'm in so deep                                                     |
| 29:06      | with [[Alfred]]. I've got [[Alfred]] like custom programmed for everything I wanted to do.                                                              |
| 29:12      | And you've used it for how long? Yeah, a long time. But I mean, I did switch. I started with                                                            |
| 29:17      | [[Quicksilver]]. I've been on different keyboard launchers, but [[Raycast]], there's a lot of people                                                    |
| 29:23      | that really love it. I'm not coming at it from the, well, maybe I am coming at it from a good                                                           |
| 29:30      | angle, but I never used an alternative launcher. I always was just fine with [[Spotlight]] because by                                                   |
| 29:36      | the time I kind of got into the Mac ecosystem, it was acceptable. Yeah. So for me, [[Raycast]] is                                                       |
| 29:42      | quite a bit faster. That was the biggest thing just in terms of opening and opening the apps                                                            |
| 29:47      | that I want. And then I've slowly worked in a lot of those extensions. So like the ability                                                              |
| 29:53      | to search my [[Apple Notes]] directly in there is really nice. The ability to, like I said,                                                             |
| 29:58      | play and pause my music is nice. I will open up [[Shortcuts]] directly through there pretty often,                                                      |
| 30:04      | which probably [[Spotlight]] can do as well. Let me look. Let's see. It's not like I'm not using it                                                     |
| 30:13      | in some crazy advanced way. It's more just the fact that it's always, oh, snippets. It does                                                             |
| 30:19      | have snippets, which I do, I do actually use. I never really had a good snippet setup. I never                                                          |
| 30:25      | set one up. And now that my day job has actually switched from just being a developer to doing                                                          |
| 30:33      | a lot more like marketing business-y things. And so I've ended up needing like email replies                                                            |
| 30:40      | and stuff like that. I feel like the [[Raycast]] window management tools are very impressive,                                                           |
| 30:45      | you know? Yeah, I haven't even used that. I'm not even sure what those options are.                                                                     |
| 30:50      | Yeah, they're good. They're good. They have one called reasonable size. I like that. Just make                                                          |
| 30:55      | this window a reasonable size. That's pretty good. Yeah. Yeah, [[Raycast]] is really good. I don't know                                                 |
| 31:03      | if it's at parity with [[Alfred]] at this point, but it's certainly in the ballpark. And I subscribe to                                                 |
| 31:09      | it because I like to keep up with what's going on. And it seems like the developers are very                                                            |
| 31:14      | active and really trying to push to make this a great app. Yeah. But getting back to kind of the                                                        |
| 31:21      | point of the small automations, people should never feel bad about it. Like recently, I just                                                            |
| 31:27      | finished the [[OmniFocus]] field guide and a bunch of work on [[OmniFocus]], but people in the Mac                                                      |
| 31:31      | Sparky Labs are asking me to share some content on [[Apple Reminders]]. So I've been using that a bit.                                                  |
| 31:36      | And like the capture on [[OmniFocus]] is really good. The capture on [[Apple Reminders\|Reminders]] is not so good,                                     |
| 31:42      | but you can write small one and two step shortcuts to fix capture.                                                                                      |
| 31:47      | What is capture? It's just to show my ignorance. I don't even know what you're talking about.                                                           |
| 31:51      | It's like, oh, I need to take the trash cans out Thursday night. I need to put that my task                                                             |
| 31:57      | manager app. And like with [[OmniFocus]], you just hit a keyboard shortcut, type a few keystrokes,                                                      |
| 32:02      | and you're in. Whereas Reminders, you generally have to open the application and like go find                                                           |
| 32:07      | the list. And it's just more tedious. You know, you want this little friction between                                                                   |
| 32:14      | the idea of something you have to do and getting it captured by your system as possible. Like                                                           |
| 32:20      | [[Shortcuts]] can fix things like that with little steps, but people too often think, well, it's,                                                       |
| 32:25      | you know, I need to pull out [[Shortcuts]] when I have a big project. But no, it's a little stuff.                                                      |
| 32:30      | Yeah. My version of that is I have a shortcut that I do use pretty regularly. That's all it does                                                        |
| 32:37      | is it opens, it opens do and creates a reminder for laundry. That's one hour from now. Yeah.                                                            |
| 32:45      | And it does open the app, but it's actually kind of nice because I've ended up using it                                                                 |
| 32:48      | a lot for things that aren't just laundry. I call it my laundry shortcut, but in reality,                                                               |
| 32:52      | it's I want to remember to do something in an hour and it to continually bug me                                                                         |
| 32:55      | shortcut because I really want to change the title. Yeah. In an hour, I really want to be                                                               |
| 33:00      | bugged. Yeah. Yeah. That's good. Yeah. Simple shortcut. Did you, do you launch that from,                                                               |
| 33:06      | how do you launch that one? I do almost everything through search. Okay. So I just start typing the                                                     |
| 33:13      | word laundry and it pops up. Although, oh yeah, there it goes. It didn't write away. I'm on,                                                            |
| 33:19      | I'm on the iOS 18.1 beta and I can tell you that one has been a lot rougher than 18.0.                                                                  |
| 33:29      | I have a second device with 18.0 just so I could test everything because                                                                                |
| 33:33      | that one's been a lot more stable. So I don't know how much longer we have till that one comes out,                                                     |
| 33:37      | but yeah, we'll see. We'll see how that looks whenever it comes in October,                                                                             |
| 33:40      | I think is what they said. Yeah. And we're going to be talking about that on Automators Max                                                             |
| 33:43      | today, [[Apple Intelligence]] and what it's looking like for you. [[Due]] is such a funny app for me that                                                |
| 33:49      | like its selling point is that it's super annoying. That's like, yes, but it's the one. I need it.                                                      |
| 33:57      | It's like whoever thought, here's a market opportunity. I'm just going to be such a pain                                                                |
| 34:00      | in the butt that people will pay for me to, you know, to get there. I have such bad,                                                                    |
| 34:08      | I don't know, I don't know if it's work ethic or discipline or what it is, but                                                                          |
| 34:14      | there are a lot of things like just the regular daily take out the, or weekly take out the trash                                                        |
| 34:19      | where it's like, I need it to bug me in the morning and then I'll just sit there and be like,                                                           |
| 34:24      | ah, remind me in three hours, remind me in three hours. But then it always reminds me when I'm                                                          |
| 34:28      | finally in a situation where I can do it. Yeah. And traditional reminders, I just don't regularly                                                       |
| 34:34      | open myself. I need something pushed into my face. And so [[Due]] has been a life saver for me,                                                              |
| 34:40      | honestly. Yeah, I'm like that too. I, when I get focused on something, I just honestly,                                                                 |
| 34:45      | the world just stops kind of moving. Yes. Very much so. It's a, I don't know. I think it's a,                                                           |
| 34:51      | it's something that I've benefited from, but it's also drives the people around me completely insane                                                    |
| 34:56      | because I just lose track of time. Okay. So Charlie, you've been writing automation for,                                                                |
| 35:03      | for [[Apple]] devices. You use automation. What's your automation wish list? What's the stuff you'd                                                         |
| 35:08      | like to see get better in automation? So, I mean, I think one big one is, is integrations into Siri                                                     |
| 35:18      | and [[Apple Intelligence]]. We don't know exactly what that's going to look like, but that's definitely                                                 |
| 35:22      | where, that's definitely where I think my eye is really focused is what are the things that are                                                         |
| 35:29      | not just what we can already do where I can, I can make that as good of an experience as possible.                                                      |
| 35:35      | Yeah. Because I think that really could be a nice entry point for automation for people who,                                                            |
| 35:42      | you know, aren't the people who are going to sit there and spend time building out a shortcut or                                                        |
| 35:47      | something like that. So that's definitely been something that's pretty heavy on my mind.                                                                |
| 35:51      | It seems to me like the goal and goal of this [[Artificial Intelligence\|AI]] push right now is we want our phone to become                                                          |
| 35:58      | like a personal assistant. We want it to do the stuff for us that it's tedious and we don't want                                                        |
| 36:02      | to deal with. And you're right. That is automation ultimately, whatever kind of mechanism they hang                                                     |
| 36:10      | it on, but they're not there yet. Yeah. Yeah. Well, let's see how that shakes out. Another one is,                                                      |
| 36:18      | I'm a big fan of the, the more customisations they've given us for, for the home screens                                                                |
| 36:24      | this year. Yeah. Like I like customisation, making my home screen look cool, blah, blah, blah.                                                          |
| 36:29      | Where it's really been really nice for me is the fact that I can, I can change all of those                                                             |
| 36:36      | based on context. And then my phone looks and feels different based on context with like [[Focus Mode\|focus modes]]. |
| 36:40      | Or like I switch my home screens around when I'm in travel mode, because I do travel a                                                           |
| 36:46      | lot for work. And one thing I really want to see, like they gave us the option for                                                                      |
| 36:51      | for like dark mode icons or tinted icons on our home screens this year, but it's kind of                                                                |
| 36:58      | all or nothing right now. Yeah. And that drives me crazy. I don't necessarily love the way all                                                          |
| 37:03      | of the dark mode icons look. And I don't necessarily love them all changing to it automatically. So                                                     |
| 37:08      | I would love to see next year a little more like detailed, detailed capabilities there as far as                                                        |
| 37:15      | being able to choose which apps have which icons on the screen at a given point. Now,                                                                   |
| 37:22      | am I right that the developers can submit a dark mode icon like file in the app?                                                                        |
| 37:30      | Yeah, essentially the way it works is when we, when we create our icons, we, it used to be your                                                         |
| 37:36      | icon had one image and that's what, well, actually had a bunch of images that different sizes.                                                          |
| 37:40      | Yeah. Now you can define three different images. There's your light mode, regular,                                                                      |
| 37:46      | you know, mode, a dark mode icon, and then this new tinted icon, which is one that's like                                                               |
| 37:52      | optimised for where the user can pick literally exactly what colour they want.                                                                          |
| 37:57      | If you're going to make it orange, this is the, this is how the icon at least looks. Yeah. Yeah,                                                        |
| 38:01      | exactly. It's a cool system, but it feels a little hamstrung by the fact that you kind of have to go                                                    |
| 38:06      | all or nothing right now. Yeah. I feel like it's not, I feel like a lot of this stuff is like                                                           |
| 38:11      | at early stages. Yeah, agreed. Well, you talked about context and [[Focus Mode\|focus mode]]. Those are my,                                                             |
| 38:17      | that's, that is red meat for me. I can't resist. Do you, if you do a lot of different [[Focus Mode\|focus modes]],                                                      |
| 38:22      | do you make the focus mode like the thing, do you press the [[Focus Mode\|focus mode]] actively on the phone,                                                           |
| 38:28      | or do you use like automation to trigger them? I have one for bedtime. Yeah. And the rest of them,                                                      |
| 38:36      | like, it's really by day to day is pretty much normal or bedtime. And that's kind of it. I do                                                           |
| 38:43      | have one, like when I'm traveling, it's kind of like, it's a travel [[Focus Mode\|focus mode]], right? It's not                                                         |
| 38:48      | something that's going to automatically trigger, I trigger it. One, actually, another big wish list                                                     |
| 38:53      | item for me is I desperately wish that we had [[Shortcuts]] connection to control whether [[Apple Music]]                                                        |
| 39:00      | was in clean, is it called clean mode or clean and explicit mode? I don't know what the,                                                          |
| 39:05      | the name is, but I just, I have kids and we listen to a lot of music and then I listen to a lot of                                                      |
| 39:11      | music and I don't necessarily want that setting the same in those two different contexts. No, you                                                       |
| 39:16      | don't. And man, I wish I could have it automatically go to clean mode when it's in car play. Because                                                    |
| 39:23      | I know they have those automatic car [[Focus Mode\|focus modes]]. And I keep thinking of like, I could do this,                                                         |
| 39:29      | I could do that, but pretty much it always comes down to, I just want it to control what my [[Apple Music]]                                            |
| 39:33      | will automatically start playing if I put a radio on. But that's like a problem that people                                                       |
| 39:37      | have. And I feel like there's really not a way to address it. You could probably [[AppleScript]]                                                            |
| 39:43      | around it, but that only works on a Mac. And like, when you're in the car, that's not going to help                                                     |
| 39:47      | you. So, no, nine times out of 10, I'm either in a car or I'm cooking breakfast. And I just throw                                                       |
| 39:54      | some music on. And it's like, I have to play playlists that I've made. Or I have to like dig                                                            |
| 40:00      | into settings. Because of course, [[Apple]] won't show us settings inside of the apps that you're                                                           |
| 40:04      | using. So I have to dig into settings, find that button, turn it on, and then forget about it.                                                          |
| 40:09      | And then turn it on another time. Or turn it off, you know, some other time when I realise that                                                         |
| 40:14      | it's in that mode. Yeah, it's a little, it's a little aggravating that I can't automate that one.                                                       |
| 40:18      | Well, if anybody listening has an idea around that one, let us know. And                                                                                |
| 40:22      | yes, please update the show. But I think you're kind of stuck as far as I understand it.                                                                |
| 40:26      | The [[Focus Mode\|focus modes]] for me, they are the triggers quite often. I, you know, when I set a [[Focus Mode\|focus mode]],                                                        |
| 40:34      | then all sorts of stuff happens. That's when [[Dark Noise]] gets triggered and different, you know,                                                     |
| 40:39      | home screens appear and like that. But I, because the way automation is written on [[Apple]] devices now,                                                   |
| 40:46      | the [[Focus Mode\|focus mode]] can become the trigger or the action. Like you can have triggers that, like,                                                             |
| 40:53      | you get in a certain location and then the [[Focus Mode\|focus mode]] gets turned on. But for often,                                                                    |
| 40:57      | often for me, it's the, it's just pushing the button to turn the [[Focus Mode\|focus mode]] on. And I actually                                                          |
| 41:02      | often do it just on the [[Apple Watch]] because it's so fast. But the, but then all everything switches                                                     |
| 41:08      | up and music starts playing and stuff like that. So it's kind of fun for me to use the [[Focus Mode\|focus modes]]                                                      |
| 41:13      | as a trigger because it also kind of feels like an affirmative kind of, okay, now it's on. Now I'm                                                      |
| 41:19      | doing work mode and now I'm, now I'm personal mode. I'm not going to worry about work, you know, that                                                   |
| 41:23      | kind of stuff. I, I really am happy with the way [[Apple]] has pursued that over the last few years.                                                        |
| 41:31      | Well, Charlie, it's always so nice having you on the show. If people want to learn more about                                                           |
| 41:36      | [[Dark Noise]] and what you're up to, where should they go? They can. Well, this is a harder question                                                   |
| 41:41      | in the year 2024 than it was in 2020. I'm on all of the different social media things. On, on most                                                      |
| 41:49      | of them, it's Charlie M. Chapman is my handle. That's like [[Mastodon]], [[Threads]], even [[Bluesky]].                                                            |
| 41:56      | On [[Twitter]], it's [\_chuckyc](https://x.com/_chuckyc). And then you can find everything about [[Dark Noise]] will be on                                                  |
| 42:02      | [darknoise.app]https://darknoise.app). But I also post about it on all of the different social media platforms as well.                                                         |
| 42:08      | Well, we are the Automators podcast. Rosemary will be back feeling better in two weeks, but thank you                                                   |
| 42:14      | so much for coming on today, Charlie. It's really fun talking and catching up with you as always.                                                       |
| 42:18      | You can find the Automators podcast at relay.fm/automators. If you'd like to get the ad free                                                            |
| 42:23      | extended version of the show, check out Automators Max. You can sign it up for right there. Today,                                                      |
| 42:28      | in Automators Max, Charlie and I are going to talk about [[Apple Intelligence]] and where we see it heading.                                            |
| 42:32      | Either way, thanks for listening. We'll see you next time.                                                                                              |
