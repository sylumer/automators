---
status: "complete"
fc-date:
  year: 2018
  month: 09
  day: 15
fc-category: "podcast"
podcast: "Automators"
published: 2018-09-15
duration: 5325
formattedduration: "01:28:45"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Matthew Cassinelli"]
notetype: "episode"
showpage: "http://relay.fm/automators/6"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/relayfreeagents/automators006.mp3"
episode: 6
title: "6: Automating iOS with Matthew Cassinelli"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
iOS power user Matthew Cassinelli joins us to share some great iOS automation workflows.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Matthew Cassinelli]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 006 Discussion](https://talk.automators.fm/t/automators-6-automating-ios-with-matthew-cassinelli/1891)
	- [Automators 06: Getting the Golden Hour in Shortcuts](https://talk.automators.fm/t/automators-6-getting-the-golden-hour-in-shortcuts/1890)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Multiply your team’s productivity.

# Show Notes
In this episode, we are joined by former Workflow team member Matthew Cassinelli. Matthew is an iOS power user with a ton of knowledge about Workflow and Siri Shortcuts. In this episode, Matthew shares a few workflows.
- Twitter List - The first workflow lets you sort through your Twitter lists and display them. This intermediate workflow uses variables and selections. On the episode, we walk through every step and why Matthew used it. 
- The Golden Hour - If you shoot pictures or video, you may know you get some of your best photos an hour after sunrise and an hour before sunset. The trouble is accessing sunrise/sunset time in Workflow was traditionally tricky. Matthew put together a Workflow that hooks into the darksky.net API to pull the data from the Internet. This is an advanced workflow, but again, we walk it through one step at a time. Download the workflow, listen to the episode, and you're good.  - This is a great episode that runs deep on Workflow/Siri Shortcuts.
* * *
- [Matthew Cassinelli - Shortcuts, technology, and tips](http://www.matthewcassinelli.com/)
- [Supercomputer Podcast](http://supercomputer.fm/) - Alex Cox and Matthew make sense out of technology
- [Mastering Apple Music: sharing my favourite shortcut on The Sweet Setup - Matthew Cassinelli](https://www.matthewcassinelli.com/mastering-apple-music/)
- [Open Twitter Lists - Workflow](https://workflow.is/workflows/c0aa908e990e48a0a06961ddba0f5766)
- [Open Twitter Lists - Siri Shortcuts](https://www.icloud.com/shortcuts/e2cad6d995b5446b80dcfe1a1e0c1fa5)
- [Golden Hour - Workflow](https://workflow.is/workflows/166d7f2dfeac4aec99dc5f825a650b58)
- [Golden Hour - Siri Shortcuts](https://www.icloud.com/shortcuts/ca9d8eed87954e35b0186bedef22c59e)
- [Screencast - Rose Tackles the DarkSky API](https://youtu.be/tpm5KzG1UDo) - See Rose's take on Matthew's Golden Hour script.
- [Mac Power Users - Relay FM](https://www.relay.fm/mpu)
- [Workflow Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/workflow)
- [Siri Shortcuts Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/siri) - David said the Siri Shortcut Field Guide was coming. Well ... it's here ... with an introductory price discount.
- [Automators Bonus Content | MacSparky Field Guides](https://learn.macsparky.com/p/automators-bonus-content)
- [The Automators YouTube Channel](https://www.youtube.com/channel/UCvpU-_RS85Y7q5PZsAaH87w?view_as=subscriber)

# Transcription

| Time Index | Transcription                                                                                                                                                                      |
|:---------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome, the Automators. I'm David Sparks, joined with my fellow co-host, Rosemary Orchard.                                                                                        |
| 00:07      | Hi, Rosemary.                                                                                                                                                                      |
| 00:08      | Hello, David. How are you?                                                                                                                                                         |
| 00:10      | Excellent. And ready for more automation. We have a guest this week. It's our pal Matthew                                                                                          |
| 00:15      | Cassinelli. Matthew, welcome to the show.                                                                                                                                          |
| 00:17      | Hello. Thank you for having me.                                                                                                                                                    |
| 00:19      | Matthew was one of the guys over on the [[Workflow]] team. That's when I first met you. You were                                                                                   |
| 00:24      | working for a [[Workflow]]. In fact, I've got some stickers that you gave me that are on                                                                                           |
| 00:28      | my luggage. When [[Apple]] bought [[Workflow]], Matthew went into [[Apple]] with the rest of the team.                                                                                     |
| 00:34      | Now he's left [[Apple]], and he's out, but he knows a ton about iOS automation. So we're                                                                                               |
| 00:40      | going to get some knowledge from Matthew today. Currently, he writes for several websites,                                                                                         |
| 00:49      | [The Sweet Setup](https://thesweetsetup.com), [TechCrunch](https://techcrunch.com). He's got his own blog over at [matthewcassinelli.com](https://matthewcassinelli.com). And best |
| 00:55      | of all, he's got a new podcast with our pal [[Alex Cox]] at [supercomputer.fm](https://supercomputer.fm), where they talk                                                          |
| 01:01      | about getting better at using your technology and your computers. And of course, we hear                                                                                           |
| 01:05      | a lot of iOS automation stuff there, too, right?                                                                                                                                   |
| 01:07      | Yeah. That's an awesome new show that I'm doing with [[Alex Cox\|Alex]]. I'm super pumped about that                                                                               |
| 01:12      | because she's got an awesome energy, and she kind of is somewhat new to the space. And                                                                                             |
| 01:19      | I know it really well. So we're kind of doing a, I'll teach her and I'll learn from her                                                                                            |
| 01:24      | along the way, too, because now that I'm so deep in automation, sometimes it is hard to                                                                                            |
| 01:29      | bring myself back out and recognise how regular people use it. But I think there's a lot                                                                                           |
| 01:35      | of space overall for this topic. Like when your guys' show came out, we were super pumped                                                                                          |
| 01:41      | because we knew that you guys were going to do in-depth stuff that we probably wouldn't                                                                                            |
| 01:46      | touch as much. And so I'm excited to be here and share the intense shortcuts that I built.                                                                                         |
| 01:52      | So it should be fun. Yeah. Well, you've got a great co-host. I think [[Alex Cox\|Alex]] is one of my                                                                                             |
| 01:56      | favourite people. She's one of those people that always just uplifts you whenever you're                                                                                           |
| 02:00      | around her and you need people like that in your life. But I totally agree. Any show that                                                                                          |
| 02:05      | talks about automation is a good show. And the thing is right now, there's just a tiny                                                                                             |
| 02:10      | fraction of people doing it. And the goal for Rosemary and I with this show is to help                                                                                             |
| 02:15      | people realise the bar isn't that high. You can do this stuff. That's why we do all those                                                                                          |
| 02:20      | extra materials with each episode. But before we get started talking to Matthew, there's                                                                                           |
| 02:23      | a couple announcements. I'm happy to announce that I have finally got my act together with                                                                                         |
| 02:29      | my video courses. No longer am I distributing through [[Vimeo]]. Now they're all distributed                                                                                           |
| 02:34      | at my website. So if you go to learn.macsparky.com, you can see all the courses. You can sign                                                                                      |
| 02:41      | up for whatever you like. There's a whole bunch of free ones. A couple free ones of                                                                                                |
| 02:45      | note for this show is we are putting all the automators content into a free learn.macsparky                                                                                        |
| 02:52      | course. Now I know you can watch it on [[YouTube]], but we wanted to give everybody multiple ways                                                                                      |
| 02:56      | to watch it. We've heard from some listeners that just don't like [[YouTube]]. So you sign                                                                                             |
| 03:00      | up for the course. Every time we have a new episode come out, we'll be updating that course                                                                                        |
| 03:03      | with whatever materials we covered in the episode. So you just automatically get that                                                                                              |
| 03:07      | delivered to your course. And I think it's going to be really helpful for listeners.                                                                                               |
| 03:11      | So I have made the [Workflow course](https://www.macsparky.com/workflowapp/) that I made several years ago free now. It's a little                                                                                           |
| 03:17      | out of date. I did it before magic variables existed, for example. So there's a couple                                                                                             |
| 03:22      | things that are not in there that should be, but it's free. So I've been charging for it                                                                                           |
| 03:26      | up until now, but now you can just download it. If you're listening to the Automators,                                                                                             |
| 03:30      | I think you'll really like going through and getting a detailed workflow. And then why                                                                                             |
| 03:35      | is that relevant? Because all that stuff just carries right into Siri workflows or [[Shortcuts\|Siri Shortcuts]].                                                                                           |
| 03:40      | And I do have a [[Shortcuts\|Siri Shortcuts]] course coming. So go check it out. And then                                                                                              |
| 03:45      | let me know what you think about it.                                                                                                                                               |
| 03:47      | If you want for me to jump in here, I actually love the [Workflow Field Guide](https://www.macsparky.com/workflowapp/) and I use it                                                                                          |
| 03:54      | for reference or I used it for reference in the past more too, but that's always been                                                                                              |
| 03:59      | an awesome research resource. And so I highly recommend everyone check it out, especially                                                                                          |
| 04:03      | now that's free. That's great to hear.                                                                                                                                             |
| 04:05      | When I released it, I think I charged $10 for it when I released it. And I think Ari,                                                                                              |
| 04:12      | one of the guys that worked for me and said, Hey, you're charging more for this course                                                                                             |
| 04:15      | than we charge for the app.                                                                                                                                                        |
| 04:17      | Yeah, that's what I was going to say.                                                                                                                                              |
| 04:19      | And I said, and I wrote them back. I said, well, the problem isn't me. It's you. It's                                                                                              |
| 04:22      | a great idea to charge more for it. Anyway, so that's out of the way.                                                                                                              |
| 04:29      | Yeah. Well, I highly recommend everybody have a look at it, at least just for the ideas.                                                                                           |
| 04:32      | And even if, you know, even if the examples that David had in the video didn't use magic                                                                                           |
| 04:36      | variables, well, you can update them and share them in the forum with everybody and just                                                                                           |
| 04:40      | see what ideas you get.                                                                                                                                                            |
| 04:42      | Yeah. And it's free. It doesn't like something free. But now we're talking about [[Shortcuts\|Siri Shortcuts]].                                                                                   |
| 04:49      | As this show publishes, we don't know the exact release date of iOS 12, but we suspect                                                                                             |
| 04:56      | that this show is going to publish either right before or right after the release of                                                                                               |
| 05:00      | iOS 12. So we're going to focus primarily on [[Shortcuts\|Siri Shortcuts]], but it does have some,                                                                                                |
| 05:05      | you know, workflow involvement as well.                                                                                                                                            |
| 05:08      | So, so Matt, how did you just briefly, I mean, why is this iOS automation stuff so important                                                                                       |
| 05:15      | to you?                                                                                                                                                                            |
| 05:16      | So, I mean, some of my history from it was this is a little sappy story, but David, you                                                                                            |
| 05:22      | were probably one of the people that got me interested in the [[Apple]] community. So I talked                                                                                         |
| 05:27      | about this on my podcast, but when I first moved to the Bay Area, I would be commuting                                                                                             |
| 05:32      | on the train and have no service. And I realised I needed something to listen to. And so I                                                                                         |
| 05:37      | found something that was called podcasts and a little show called [[Mac Power Users]] and downloaded                                                                                   |
| 05:43      | that and started listening. And I think that kind of introduced me into the whole iOS world,                                                                                       |
| 05:49      | especially around, around the time, I think [[URL Schemes]] were the big hotness for automation                                                                                        |
| 05:57      | nerds and, yeah, [[Federico Viticci]] of [[MacStories](https://www.macstories.net/)](https://www.macstories.net/), which I'm sure most people listening know,                                                                                    |
| 06:02      | but he wrote about it so much. And I kind of just got into it on a daily basis, like                                                                                               |
| 06:08      | recognising that there was stuff that I wanted to do on my phone that I couldn't. And there                                                                                        |
| 06:14      | was little gaps that needed to be filled. And for the time, [[URL schemes]] were able to                                                                                               |
| 06:21      | accomplish that. But then workflow came out, or actually, it was more the drama around                                                                                             |
| 06:27      | workflows widget getting rejected and things like that, that I recognise brought it to                                                                                             |
| 06:33      | my attention. And this is kind of fun, because the day that [[Workflow]] was released, supposedly                                                                                      |
| 06:39      | the team did a video recording of one of their iPhones showing tweets come in like followers.                                                                                      |
| 06:45      | And in the video, you can see me following workflow, which is kind of amazing.                                                                                                     |
| 06:50      | That is pretty awesome. Yeah, they sent it to me like a couple of weeks ago, and we were                                                                                           |
| 06:57      | like, what the heck? That's so crazy, just because they just happened to have it on the                                                                                            |
| 07:01      | screen at the time. And I didn't even join the company for like a year or two later.                                                                                               |
| 07:07      | But I basically was a power user, I was a iOS power user, instead of a Mac power user,                                                                                             |
| 07:15      | and recognised that I was like, this is really complicated. And even though [[Federico Viticci\|Federico]] does                                                                    |
| 07:21      | an amazing job, like it would help if it was coming from the company itself. And I think                                                                                           |
| 07:26      | part of what everyone has wanted and probably still wants today is for the team to be engineering                                                                                  |
| 07:33      | because they're so talented. And going to work with them was amazing. But I recognise that                                                                                         |
| 07:40      | people needed to be able to understand this app. And I wanted as what I've always wanted                                                                                           |
| 07:45      | to do is help people learn how to use this in their daily lives. And that drove me to                                                                                              |
| 07:51      | workflow. And it also kind of pushed me to go independent and figure out how to share                                                                                              |
| 07:56      | with people myself. Because I wouldn't be here talking to you right now if I was inside.                                                                                           |
| 08:02      | So I kind of wanted to come out from behind the space grey curtain as I call it and share                                                                                          |
| 08:08      | with people how to use it. And I think a big difference for me is that I'm not a developer.                                                                                        |
| 08:15      | I never was. And I was a marketing guy. And I learned through workflow how to do programming                                                                                       |
| 08:22      | concepts and bring down the level of technology to myself instead of relying on the team members                                                                                   |
| 08:29      | or developers that I knew. So I could build my own scripts essentially in [[Workflow]] that                                                                                            |
| 08:36      | did things for me that my phone probably should be able to do. And I don't want to do using                                                                                        |
| 08:41      | my thumbs and just poking around on the screen. And so inter shortcuts essentially. And now                                                                                        |
| 08:46      | I can especially with [[Siri]] is a huge difference being able to trigger it all with your voice                                                                                       |
| 08:52      | and then even interact with your voice and things like that. It's super exciting. And                                                                                              |
| 08:57      | I'm glad that the [[Siri]] part makes it super approachable to or even the shortcuts part.                                                                                             |
| 09:04      | The system suggesting them will be super approachable because most of the time you won't have to                                                                                   |
| 09:10      | go in and set it up. That was always one of the big issues with workflow is just taking                                                                                            |
| 09:15      | the time and then, oh, you have to go run it. But using something like [[Siri]] or just                                                                                                |
| 09:19      | having it pop up on your spotlight search or your [[Apple Watch]] is going to be amazing.                                                                                              |
| 09:24      | So it really is like a full circle from [[Mac Power Users]] all the way to Automators.                                                                                                 |
| 09:30      | Well, I really, well, first of all, thanks. I mean, I'm glad that played a small role                                                                                              |
| 09:35      | in it, but it's on you, man. You really did something amazing. I mean, Matt shared with                                                                                            |
| 09:40      | us before we started showing us 800 [[Shortcuts\|Siri Shortcuts]]. So we got the right guy on this week, Rose.                                                                                    |
| 09:47      | We try. We try.                                                                                                                                                                    |
| 09:49      | But I do think it's important also the point you make that you're not a developer, that                                                                                            |
| 09:55      | you're just a guy and you love your stuff and you want it to work harder for you. And                                                                                              |
| 10:01      | you have made this journey without having any programming knowledge.                                                                                                               |
| 10:05      | Yeah, I think that's huge for shortcuts, especially because developers see it and recognise that                                                                                   |
| 10:13      | as programming. But I mean, to show you my ignorance is I didn't know what a variable                                                                                              |
| 10:20      | was when I first started. And those are very programming concepts. And I was kind of like,                                                                                         |
| 10:26      | oh, okay, that's like I learned it in workflow and then found out that you do this in programming,                                                                                 |
| 10:31      | not the other way around, like that repeats are for loops or whatever. I still don't even                                                                                          |
| 10:37      | really know because I can't do it. And I don't want to. I don't want to code for a living.                                                                                         |
| 10:44      | I want to build tools and move on from it and not spend my time with the curly braces                                                                                              |
| 10:51      | or square brackets and stuff like that. It's, I mean, there's still absolutely complexity                                                                                          |
| 10:56      | to shortcuts. And it took me a long time to and it probably will take most people a while                                                                                          |
| 11:03      | to grasp because there are 280 short actions right now. And those are only the built in                                                                                            |
| 11:10      | ones. And then there's also the unlimited amount of third party actions that are coming                                                                                            |
| 11:16      | with iOS 12. So it'll be interesting. But I think, like you said, the important part                                                                                               |
| 11:22      | is that it's not impossible. And it is available for regular people to come in. I mean, some                                                                                       |
| 11:29      | of it you might need hand holding, but that's also what we're here for. Yeah. So we've got                                                                                         |
| 11:34      | over the hippie part. Let's, let's get into the meat. Why don't you share some share some                                                                                          |
| 11:39      | shortcuts with us, Matt? Totally. I have a couple here for you today. I have one that                                                                                              |
| 11:46      | I use to open my Twitter lists, which might be handy if you're suffering from a lack of                                                                                            |
| 11:52      | tweet bot in your life lately. And then I also have a fun one that I use to create master                                                                                          |
| 11:59      | versions of all of my [[Apple Music]] playlists, which I then use this shortcut to update,                                                                                             |
| 12:05      | run, open, then do multiple tasks on. And then assuming we have enough time because I've                                                                                           |
| 12:12      | got lots of material. I have another one that's called when is golden hour? And it looks at                                                                                        |
| 12:17      | [[Dark Sky]] and calls their API. And then from the [[JSON]] response that they give back, which                                                                                           |
| 12:24      | is fancy data, I can extract different pieces of information and then [[Siri]] actually reads                                                                                          |
| 12:30      | it back to me. So that's a fun one too. I love that. That sounds super nerdy and I can't                                                                                           |
| 12:35      | wait to get to that one. But, but let's start with the simplest and work our way forward.                                                                                          |
| 12:40      | And just for everybody listening at home, we are going to be posting these or links                                                                                                |
| 12:44      | to these or screencasts on these, just whatever you look at the show notes, there's going                                                                                          |
| 12:48      | to be tons of links on how to, to get this stuff without having to build it from scratch.                                                                                          |
| 12:53      | But let's talk through it anyway. So everybody can learn a little bit. You want to start                                                                                           |
| 12:57      | with the Twitter one? Sure. So what's the problem this solves?                                                                                                                     |
| 13:03      | So this used to solve a problem that [[Twitter]] had more so than lately because they do make                                                                                          |
| 13:09      | lists available in the sidebar. But I still find it too difficult to go into my [[Twitter]]                                                                                            |
| 13:16      | lists and view them and use them to keep up with people because I've used [[Twitter]] lists                                                                                            |
| 13:22      | for years in order to basically have the like hundred people that I actually follow and                                                                                            |
| 13:28      | want to see all of their tweets. I keep them in a list and then basically check that every                                                                                         |
| 13:35      | day so that it's kind of my completionist side of [[Twitter]]. I can get in the list app                                                                                               |
| 13:41      | that I have or the sorry, I can keep it in the list that I have there. And otherwise,                                                                                              |
| 13:48      | I follow like 3,500 people. I have a very bad [[Twitter]] ratio because even though I have                                                                                             |
| 13:55      | managed to get up to 2,500, I'm still following 1,000 more than me because I just, I always                                                                                        |
| 14:00      | find exciting people. That is one thing that the [[Twitter]] app is very good at is when you                                                                                           |
| 14:05      | follow someone, those three suggestions that pop up are actually usually really, really                                                                                            |
| 14:09      | good and they're related because the person, they all follow each other or they work in                                                                                            |
| 14:14      | a similar company. And so I just end up following too many people. And I've ended up creating                                                                                      |
| 14:19      | like 10 lists, which I also use from [[Tweetbot]]. I have launched a inner pro actions that hook                                                                                       |
| 14:27      | into the [[Tweetbot]] [[URL Schemes\|URL scheme]] also and open these. But I did find that you have to have                                                                                             |
| 14:33      | the [[Twitter]] list ID. And so that's a little too complicated. Like I had to go into Twitter's                                                                                       |
| 14:40      | API and grab all of the unique IDs for my lists. And that was like too hard for me to                                                                                              |
| 14:45      | manage or I tried to like, I used an API console that is now shut down because as I referenced                                                                                     |
| 14:54      | Twitter is not the greatest towards their developers. But instead, basically, I can                                                                                                |
| 15:00      | solve the problem myself. And so I found that [[Twitter]] has a [[URL Schemes\|URL scheme]] where it's basically                                                                                        |
| 15:07      | `twitter://list`. And then `?screenname=`, so you put in the                                                                                       |
| 15:15      | account that you're trying to open and then slug is the URL slug for the [[Twitter]] list.                                                                                             |
| 15:25      | And so basically this list, this action, the shortcut that I have creates a list of all                                                                                            |
| 15:31      | of the titles of my [[Twitter]] lists, and then does some fancy text manipulation to make                                                                                              |
| 15:38      | sure that it works in a URL and not just as plain text. And then it essentially populates                                                                                          |
| 15:44      | the URL and then opens it. And so when I run this in my [[Workflow]] widget, I can, sorry,                                                                                             |
| 15:51      | shortcuts widget, I'm still going to have, that's going to happen to me for years, but                                                                                             |
| 15:56      | you basically go in and just click this shortcut real quick. And then it shows me a list of                                                                                        |
| 16:02      | my lists. And I tap on one and it opens right in there. So I can go from I want to see tweets                                                                                      |
| 16:08      | about people to I'm looking at them without like, opening the [[Twitter]] app, finding the                                                                                             |
| 16:13      | list, then like navigating from the members view to the list view and seeing all the tweets.                                                                                       |
| 16:18      | And so for me, this fuels my [[Twitter]] addiction, great, which is maybe this isn't the best                                                                                          |
| 16:25      | shortcut to be sharing because it helps you use [[Twitter]] more and more. But I can kind                                                                                              |
| 16:30      | of walk through this more efficiently. That's good, right? Yeah, exactly. It's don't waste                                                                                         |
| 16:34      | time not even reading the tweets, just get in there and get out if you can. And so would                                                                                           |
| 16:41      | it help if I just list the actions? Yeah, let's just talk through it. So like I said,                                                                                              |
| 16:45      | we're going to have a link to this so you can see it. But just once you walk through                                                                                               |
| 16:49      | the steps you take to make this happen. Okay. So the first action I have in there is a dictionary                                                                                  |
| 16:57      | action. And this is a slightly unnecessary use of this. But I find this helpful when                                                                                               |
| 17:04      | I'm sharing workflows with other people is if I just have a text field, it can kind of                                                                                             |
| 17:11      | be unclear what information you're supposed to fill in. And so I tend to use a dictionary,                                                                                         |
| 17:17      | which is just a way to store structured information. I use this to kind of give a clarity to what                                                                                  |
| 17:26      | you're supposed to put the information in. So it says in the key field of one of the                                                                                               |
| 17:30      | dictionary items, it says handle, that's your [[Twitter]] handle. And then on the right side                                                                                           |
| 17:34      | is the value that you're supposed to fill in. And so I have `mattcassinelli`, because                                                                                               |
| 17:39      | that's my username on [[Twitter]]. But I actually have import questions set up for this shortcut                                                                                       |
| 17:44      | so that when you enter it, and you add it to your library, as you do it, it'll pop up                                                                                              |
| 17:49      | and say, what's your [[Twitter]] handle? And then you type in `macsparky`, and it'll auto populate                                                                                       |
| 17:54      | this field once you add it. So basically, I'm trying to just, this could just be a text                                                                                            |
| 17:59      | field.                                                                                                                                                                             |
| 18:00      | Yeah, but it's also saving the work of a comment, actually, because then, you know, it's always                                                                                    |
| 18:04      | possible it happens to me all the time, I accidentally drag and drop one of the blocks                                                                                             |
| 18:07      | inside of [[Workflow]] or [[Shortcuts]] when I'm trying to look through it. Or, you know, I delete                                                                                         |
| 18:12      | the comment, because of course I'm going to remember that's my [[Twitter]] handle. And then                                                                                            |
| 18:15      | in six months and like, what was this text field for? I have absolutely no idea. So it's                                                                                           |
| 18:20      | a great hack. And I'm going to be stealing that one from you, I have to say.                                                                                                       |
| 18:24      | So it does make it slightly more complicated, because in order to retrieve the information                                                                                         |
| 18:29      | from the dictionary, you have to define the key that you're trying to get. So instead                                                                                              |
| 18:36      | of just grabbing the text, you have to grab the dictionary and then choose handle. But                                                                                             |
| 18:41      | it still is a valuable concept, because you can add more information to that dictionary                                                                                            |
| 18:48      | later, like this in theory could have this whole list of [[Twitter]] handles in that same                                                                                              |
| 18:53      | dictionary if I felt like it. But it is a good example of how there are many ways you                                                                                              |
| 18:58      | can accomplish the same thing. And so if people are looking at it, they might notice that                                                                                          |
| 19:03      | I don't have a set variable after that dictionary, because I'm taking advantage of magic variables                                                                                 |
| 19:08      | here, where instead of having to every single time I want to save a value, I'd have to add                                                                                         |
| 19:15      | set variable and give it a name. And instead what workflow does that sorry, shortcuts again.                                                                                       |
| 19:23      | What that does is it essentially after every single action, it just automatically stores                                                                                           |
| 19:29      | whatever output that action has as a we call them magic variables. And so that basically                                                                                           |
| 19:36      | you don't need to constantly be naming it, you don't need to be using 30 set variable                                                                                              |
| 19:41      | actions because the system just already does it. And this is a great example of where programming                                                                                  |
| 19:46      | doesn't do that. And that is so nice. Yes. If you if you watch that workflow video field                                                                                           |
| 19:52      | guide that I talked about earlier, I have barfed set variable all over every workflow                                                                                              |
| 19:58      | in that, you know, because of the time magic variables didn't exist. But so it just saves                                                                                          |
| 20:03      | you the step all you're doing now you you essentially declare the variable with one                                                                                                |
| 20:08      | step and then it just exists for you. And yeah, as you build them, you'll see if you                                                                                               |
| 20:13      | just click on the magic variable button, all the ones available to you. But the other advantage                                                                                    |
| 20:17      | I like of this opening with the handle button is, like you said, if you share this with                                                                                            |
| 20:21      | somebody, it makes it really easy for someone to adapt this, you know, you can say, Oh,                                                                                            |
| 20:25      | I'm not Matt Cassinelli, so I'm going to change the, you know, the handle to my personal [[Twitter]]                                                                                   |
| 20:31      | name. And it makes it really easy for other people to take advantage of what you've done.                                                                                          |
| 20:36      | So what next?                                                                                                                                                                      |
| 20:38      | So next I have a list action, which for people who know development is in effect an array.                                                                                         |
| 20:46      | So an array is an ordered list of items. And so the list action creates that same sort of                                                                                          |
| 20:54      | output if you're technical on that side. But basically, I just fill this list in with all                                                                                          |
| 21:00      | of the titles of my Twitter lists. And this can be done in plain text too, because in the                                                                                          |
| 21:07      | next few actions, we'll use text conversion actions in order to convert it into something                                                                                          |
| 21:13      | that's URL friendly. So I have one that has a backslash in it, or I guess forward slash,                                                                                           |
| 21:20      | but data vis forward slash analytics, just because I came up with that title when I was                                                                                            |
| 21:26      | trying to follow a bunch of data nerds and visualisation people. But generally having                                                                                              |
| 21:33      | those spaces or special characters in there will mess up when you launch URLs. And so                                                                                              |
| 21:38      | in the next few actions, we'll like, convert that into something that's readable for the                                                                                           |
| 21:43      | system.                                                                                                                                                                            |
| 21:44      | Yeah. And just to take all the programming and speak out of this, the list command in                                                                                              |
| 21:49      | [[Shortcuts\|Siri Shortcuts]] just basically allows you to put a predefined list on the screen, and                                                                                               |
| 21:54      | then the user picks one. And then that becomes another potential magic variable, you know.                                                                                         |
| 21:59      | So you do need the choose from list action in order to pick from that list, because you                                                                                            |
| 22:04      | can use the list in different ways. And that is when, so I guess we didn't mention it,                                                                                             |
| 22:09      | but I, when I worked at workflow, I wrote the documentation with the team and the difference                                                                                       |
| 22:15      | between choose from list and list, and then choose for menu is definitely confusing. And                                                                                           |
| 22:21      | I don't think I even understood that until I worked at the company, because a list can                                                                                             |
| 22:27      | operate independent of you choosing from it. You can repeat with each and stuff like that.                                                                                         |
| 22:33      | And then choose from list also works with other actions. Like for example, the dictionary                                                                                          |
| 22:38      | that we mentioned so far, if you have a bunch of information in a dictionary and you pass                                                                                          |
| 22:43      | it into choose from list, you can pick from that stuff. But choose from menu separately.                                                                                           |
| 22:50      | This is a bit confusing, but choose from menu is just menu options that send you down totally                                                                                      |
| 22:56      | different paths. And so rather than acting on the list item from the menu, it's just                                                                                               |
| 23:03      | a different direction that you're going. So I got a little ahead of myself. So the list                                                                                            |
| 23:08      | gives you the list, but then it's the choose from list command, which is going to show                                                                                             |
| 23:11      | up in a minute here, where you choose from it. And just to, and just to make it even                                                                                               |
| 23:16      | easier, like when you're talking about the dictionary earlier, if you have multiple                                                                                                |
| 23:20      | [[Twitter]] handles, you could have listed multiple handles and the dictionary listing and use                                                                                         |
| 23:26      | the choose from list there to pick which Twitter handle you're working from.                                                                                                       |
| 23:30      | Yeah, that's actually, I should add that to this. I don't know. I guess I don't have any                                                                                           |
| 23:36      | lists on my other accounts, but then the super computer or `_supercomputer` account                                                                                       |
| 23:42      | that we have for our show. That's a good idea. I might make a second version of this that                                                                                          |
| 23:46      | lets you pick from 801. You heard it here. Yeah, exactly. All right. So what                                                                                               |
| 23:52      | happens next after you list it?                                                                                                                                                    |
| 23:54      | So then I do have to choose from list where I've added a little prompt that will show                                                                                              |
| 24:00      | above the list when this shortcut is run. And I like to make these little prompts just                                                                                             |
| 24:05      | nice and friendly because one problem that I have with shortcuts is that by it doing                                                                                               |
| 24:11      | each individual step, sometimes when it doesn't necessarily apply in this example, but sometimes                                                                                   |
| 24:16      | when you're five steps in, you're like, what am I doing right now? And having a clear prompt                                                                                       |
| 24:21      | that says, which list do you want to open? In context, I know when I'm running it, that's                                                                                          |
| 24:27      | what I'm doing, even if I'm 10 steps in or something like that. So that's what I have                                                                                              |
| 24:31      | said here. And then you can only select a single item.                                                                                                                             |
| 24:36      | That's the old adage, assume future you is a dummy, you know, make it easy. And it's                                                                                               |
| 24:41      | like when I give this to people, if somebody just downloaded it off the internet and then                                                                                          |
| 24:45      | ran it, they're just like, what's happening? What's this list of your [[Twitter]] lists? For                                                                                           |
| 24:51      | example, it's definitely confusing. Actually, that does remind me. I have inboard questions                                                                                        |
| 24:56      | set up for the list so you can fill in your own list. So people aren't trying to open                                                                                              |
| 25:00      | my tech news Twitter list.                                                                                                                                                         |
| 25:02      | Well, that's nice of you. It makes it very friendly. The select a multiple tag. When                                                                                               |
| 25:07      | you do a choose from a list in [[Shortcuts\|Siri Shortcuts]], there's a little tick box for select multiple.                                                                                      |
| 25:14      | What are some examples of when you'd want to light that up?                                                                                                                        |
| 25:19      | I use that. I have other shortcuts that let me kind of pick from an [[RSS]] feed of headlines                                                                                          |
| 25:26      | and choose which ones I want to open. And there I have select multiple. And when you                                                                                               |
| 25:32      | toggle select multiple on another option shows up for select all initially. And so it does                                                                                         |
| 25:38      | depend on the use case, but I like to use that where I'll select all of the articles                                                                                               |
| 25:43      | and then just deselect the ones I don't want as opposed to having to go select all 20 every                                                                                        |
| 25:49      | time assuming I do want to open them. But here it wouldn't work because with [[URL schemes]],                                                                                          |
| 25:55      | you can only open one URL at a time. And so if I tried to open multiple, I don't know.                                                                                             |
| 26:02      | I think I don't know what would happen. I think it might just open the first one.                                                                                                  |
| 26:06      | Depending on how you set it up, it would either just open the first one and then sort of get                                                                                       |
| 26:10      | stuck waiting for you to come back and then probably die or it might like ping if you                                                                                              |
| 26:15      | use the [[x-callback-url\|callback URL]] option, it would probably open the first one, go to [[Twitter]] and then                                                                                          |
| 26:20      | go back to shortcuts and then open the second one. And so you just have ping pong effect                                                                                           |
| 26:25      | going backwards and forwards, which is probably not what people are looking for. Though it                                                                                         |
| 26:29      | is a very efficient, well, speedy at the very least way of scanning all of your [[Twitter]]                                                                                            |
| 26:33      | lists.                                                                                                                                                                             |
| 26:34      | But I do use the select all or like selecting multiple. For example, if I use get my shortcuts                                                                                     |
| 26:41      | and I'm trying to save them the files, chances are I have two versions where one I just back                                                                                       |
| 26:46      | up everything because I do have so many that it's kind of like I need to I wouldn't know                                                                                           |
| 26:51      | if I lost one. But then on the flip side, if I only want to save one or two, I don't                                                                                               |
| 26:57      | have select all initially toggled on and just go pick a couple.                                                                                                                    |
| 27:03      | So after that, basically at this point in the [[Twitter]] list, my handle has been established                                                                                         |
| 27:10      | and we have the list and we've picked the list. But I have a couple variable action                                                                                                |
| 27:17      | or that's a confusing way to use just regular actions that I have that then change the text                                                                                        |
| 27:24      | into something proper for [[Twitter]] to understand.                                                                                                                                   |
| 27:27      | So one example I have is an if action with a text under the first result. So I've also                                                                                             |
| 27:35      | deleted the otherwise option because I don't need it. But one of the things that happened                                                                                          |
| 27:40      | was I had multiple versions of the same [[Twitter]] list. So I used to have one called the list,                                                                                       |
| 27:47      | which is my super creative name. But then I think I nuked it one day and started another                                                                                           |
| 27:52      | and so [[Twitter]] create and even though it's titled the list, it's now says the list one                                                                                             |
| 27:57      | to [[Twitter]]. And so I set up an if action to have a little condition so that if the list                                                                                            |
| 28:05      | that I've chosen is the list, this is very confusing that I told it that way. That's                                                                                               |
| 28:10      | how I'm explaining it. So one of those ones, it will filter out and just return the actual                                                                                         |
| 28:18      | text value that I need and not the nice plain text looking like with the space in it that                                                                                          |
| 28:24      | I want it to say.                                                                                                                                                                  |
| 28:26      | So you're solving a problem on [[Twitter]]. The thing that you call the list is actually the                                                                                           |
| 28:31      | list one with the number of one at the end.                                                                                                                                        |
| 28:33      | The name that they've saved in the back end basically, which is what you need to access                                                                                            |
| 28:37      | it in the app, right?                                                                                                                                                              |
| 28:38      | So you're saying if I choose that variable, rename it to the one that the [[Twitter]] is going                                                                                         |
| 28:43      | to recognise.                                                                                                                                                                      |
| 28:44      | Yeah.                                                                                                                                                                              |
| 28:45      | It's kind of interesting. It solves a little problem with just a little if loop. You know,                                                                                         |
| 28:49      | this is something that most people would not need. Like if you were running this on                                                                                                |
| 28:52      | your thing, you'd probably delete that step because you don't unless you have a rename                                                                                             |
| 28:56      | problem to                                                                                                                                                                         |
| 28:57      | That's true. That's kind of a I could put a comment in here so people can know why that                                                                                            |
| 29:02      | what that's for if they download it later. But it is a good example of where I just                                                                                                |
| 29:08      | didn't want to see the list one in the list that I picked from because that's not the                                                                                              |
| 29:12      | name of it.                                                                                                                                                                        |
| 29:13      | And it's using the back end tools to make the front end experience a little bit better                                                                                             |
| 29:20      | is I just want to choose from the titles. I don't want the jargon or the code in there                                                                                             |
| 29:25      | that looks it messes it up and then workflow can shortcuts can handle it in the background                                                                                         |
| 29:31      | instead, which is actually like a nice little just use your experience thing that does make                                                                                        |
| 29:37      | a difference to me in the long run because the goal is to remove any friction from the                                                                                             |
| 29:43      | process. And if even I just see that wrong one every day, I'm going to constant and it's                                                                                           |
| 29:48      | the one I click the most. That's just going to be annoying over time. And this lets me                                                                                             |
| 29:53      | get around that, which is great.                                                                                                                                                   |
| 29:55      | I mean, this is especially really useful if you're triggering it from [[Siri]] or from the                                                                                             |
| 30:00      | widget or something because then you don't see any of the shortcuts interface. Do you?                                                                                             |
| 30:05      | It's just magic. Yeah, that's a big difference too with shortcuts is that when you tap on                                                                                          |
| 30:13      | a shortcut, it just runs. And so you will just see this list of the nice titles instead                                                                                            |
| 30:19      | of going in and seeing all these actions and my conditional changing whether it's a certain                                                                                        |
| 30:25      | result or not.                                                                                                                                                                     |
| 30:26      | That is all kind of just abstracted away from you and you just pick from the list. So even                                                                                         |
| 30:31      | though it's a little esoteric strategy, yeah, it's worth doing.                                                                                                                    |
| 30:36      | And that's one of my one of my favourite things about [[Shortcuts\|Siri Shortcuts]] is it does kind of remove                                                                                     |
| 30:40      | you from the programming interface when it's running. What next, Matt?                                                                                                             |
| 30:45      | So then I have to replace text actions and these are kind of my poor man's way of doing                                                                                            |
| 30:53      | regular expressions, which is for anyone who doesn't know is a way to enter in like a fancy                                                                                        |
| 30:59      | little code of this is exactly the type of text I want. I want only these characters with                                                                                          |
| 31:05      | these many spaces and these characters after it and stuff like that. And I could figure                                                                                            |
| 31:11      | out regular expressions, but this is one of those things that's so I should because it                                                                                             |
| 31:17      | is a very valuable skill and will enable me to get even deeper into shortcuts. But in                                                                                              |
| 31:21      | the meantime, I don't have to because I can just use replace text twice. So what this                                                                                              |
| 31:28      | does in here, I have replaced text where fine text is looking for a space and then it's                                                                                            |
| 31:36      | going to replace it with a dash. So anytime I have a [[Twitter]] list with two part names                                                                                              |
| 31:41      | like the list, it will replace it with the dash list so that in the URL that we're opening                                                                                         |
| 31:47      | later, it will actually be [[URL Encoding\|URL encoded]] so it can understand it because links can't understand                                                                                      |
| 31:53      | spaces in there. And then I have a second one that also takes that forward slash from                                                                                              |
| 31:59      | my data viz slash analytics one and replaces it with a dash to. So these again might not                                                                                           |
| 32:05      | be necessary for people who don't. I think this part actually might be because people                                                                                              |
| 32:10      | do have spaces in their names, a good amount. Yeah. But this essentially enables it to very                                                                                        |
| 32:18      | manually and just kind of pounding a hammer in just like anytime there's a space just                                                                                              |
| 32:23      | switch it out with this and I could have a fancy [[Regular Expressions\|regular expression]] that's whether it's                                                                                            |
| 32:28      | a space or it's a forward slash then replace with this. But it is one of those things that                                                                                         |
| 32:34      | I just haven't taken the time to do. And it's also a great example for people listening.                                                                                           |
| 32:39      | They don't need to know [[regular expressions]] to do something like this. As you showed them                                                                                          |
| 32:42      | right here, you can just use replace text and get exactly what you need. So and that's                                                                                             |
| 32:47      | a good example of just the overlap between all the way to a regular person who can just                                                                                            |
| 32:54      | kind of force a solution and then a developer who wants to do something fancy can build                                                                                            |
| 33:00      | a super complicated regular expression and iterate through hundreds of documents or something                                                                                      |
| 33:05      | like that and get just the right information. So it applies from just my [[Twitter]] lists all                                                                                         |
| 33:12      | the way up to full programming concepts, which is just a great example of how variable and                                                                                         |
| 33:19      | dynamic this app is. And then what's next? Sure. And then this is the end is got URL                                                                                                |
| 33:27      | and open URLs. And so this is really where everything happens after the list, the URL                                                                                              |
| 33:34      | is populated with the screen name. And so in here, I have a variable token. That's how                                                                                             |
| 33:41      | I refer to them, at least in the documentation, because it's a little visual pill thing that                                                                                       |
| 33:46      | you tap on. So what I did was I went into the text field here, and then navigated to                                                                                               |
| 33:54      | screen name equals. And then I hit the little magic variables button, which is for anyone                                                                                          |
| 34:00      | who hasn't tried it, it's the little wand icon in the variables bar that appears over                                                                                              |
| 34:05      | the keyboard. So when you go into a text field, the keyboard pops up, and then you'll see                                                                                          |
| 34:10      | stuff. You'll see variables, a magic wand icon, a couple of variables from the most                                                                                                |
| 34:15      | recent actions that you interacted with. And then the default variables that are included                                                                                          |
| 34:21      | everywhere that you can use in any spot. So there's ask when run clipboard, current date,                                                                                          |
| 34:27      | and shortcut input. And those are just kind of universal ones that you don't need to grab                                                                                          |
| 34:32      | from a specific action. But when you hit that little magic wand icon, or you can you can                                                                                           |
| 34:38      | actually hit the word variables, and it drops down the whole keyboard into a variable tray.                                                                                        |
| 34:44      | And then it says the words select magic variable there. So some people might have never discovered                                                                                 |
| 34:49      | that because it just doesn't say anything on the title there. But when you hit the magic                                                                                           |
| 34:54      | wand icon, then the interface of the shortcuts editor will kind of pop open and expand. And                                                                                        |
| 35:02      | then underneath each action, you can see the magic variable token that you can tap on and                                                                                          |
| 35:08      | retrieve for that item. So just above the URL one, if you've tapped the select magic                                                                                               |
| 35:14      | variable thing, you should see replace text as one of the options. And then I even renamed                                                                                         |
| 35:21      | the final replace text as list. So each of these magic variables, you can tap on and                                                                                               |
| 35:27      | rename and give your own titles, just like if you're setting a variable. And then slow                                                                                             |
| 35:33      | me down if I'm going too much. No, so I mean, just and just to summarise what he's done                                                                                            |
| 35:39      | is he's taken the two things he's asked for is the handle and the list. So he's taken                                                                                              |
| 35:45      | those two variables. We talked a little bit about using replace text to kind of convert                                                                                            |
| 35:50      | the list name into something that works in a URL. And he's just pasted those into the                                                                                              |
| 35:54      | URL. And he's he's tracked down the [[Twitter]] URL you need to to see a list. So we're that's                                                                                         |
| 36:00      | going to be in the thing, you don't have to look that up for yourself. It's already in                                                                                             |
| 36:02      | the workflow. We're going to share with you. And then you open it. Yeah, well, the one                                                                                             |
| 36:08      | last detail is that the dictionary variable, you have to tap on that and then set the value                                                                                        |
| 36:16      | for the key that it wants to extract. So I briefly mentioned this earlier, but because                                                                                             |
| 36:20      | the dictionary is structured information, you can't just get all of the information at once.                                                                                       |
| 36:25      | I just want to get my handle out of it. And so when I tap on that dictionary variable,                                                                                             |
| 36:31      | this is where the magic variables specialness comes in because it's stored all of that dictionary                                                                                  |
| 36:37      | in there. And then when it when I tap on that, another little variable detail view kind of                                                                                         |
| 36:44      | pops up. And then you this is one of the more complicated parts of magic variables that                                                                                            |
| 36:49      | I think people don't necessarily know how to take advantage of because honestly, we                                                                                                |
| 36:54      | released it and then got acquired. So we didn't exactly like I considered a personal fault                                                                                         |
| 36:59      | of mine that I didn't teach people how to use this more because it's so powerful and came                                                                                          |
| 37:04      | out basically at the last minute. But when you tap on that variable, you can then change                                                                                           |
| 37:09      | what it's extracting from the original content. And so it's a little bit complicated in this                                                                                       |
| 37:15      | example because we've used a dictionary, but there's text on there that says it has the                                                                                            |
| 37:21      | little dictionary icon and it says as dictionary. And that's where you can tap in. And instead                                                                                     |
| 37:28      | of maybe I don't want it to be a dictionary, maybe I just want to convert it to something                                                                                          |
| 37:32      | else. And if you tap there, you can change the type. So this is doesn't necessarily only                                                                                           |
| 37:39      | apply to the dictionary to it's every single variable that you use, you can tap on and                                                                                             |
| 37:44      | change the specific type of information that you're extracting. So there's like, yeah,                                                                                             |
| 37:50      | for instance, going back to episode one, I did one on travel time and I screencasted                                                                                               |
| 37:54      | it. And I wanted a box at some point to say you are so-and-so minutes away from Anaheim.                                                                                           |
| 38:01      | And what I wanted was the city data. And using a magic variable with an address, you can                                                                                           |
| 38:07      | say give me the city, give me the full address. I mean, there's all these different that give                                                                                      |
| 38:11      | me the zip code so you can pull out pieces of the address. That's the same thing you're                                                                                            |
| 38:15      | doing here, but you're getting the handle.                                                                                                                                         |
| 38:17      | Yeah, basically. And that is a super awesome benefit for [[Workflow]] because what [[Shortcuts]]                                                                                           |
| 38:27      | and [[Workflow]] is what used to happen was you would have to use set variable and then use,                                                                                           |
| 38:33      | there's a bunch of actions called get details of, and you would have to get details of that                                                                                        |
| 38:39      | street address, save that city as a new variable called city, and then get the variable for                                                                                        |
| 38:46      | the address, get details of, and then get the address and then set that as a variable.                                                                                             |
| 38:53      | And you would end up having to do like 15 actions just to extract the information from                                                                                             |
| 39:00      | one variable. And instead with magic variables, you take that initial variable token and extract                                                                                   |
| 39:07      | all of the data straight from that inline. And so that's super powerful because even                                                                                               |
| 39:14      | just visually it makes your workflows much less complicated and there's a bunch of orange                                                                                          |
| 39:19      | variable actions everywhere and instead is just inline all of that data handling happens                                                                                           |
| 39:25      | itself.                                                                                                                                                                            |
| 39:26      | And so this is a complicated concept too. And once again, this is why your screencasts                                                                                             |
| 39:33      | are amazing because on my podcast we just talk about it, but being able to see it in                                                                                               |
| 39:38      | action is really key because that helps you just grasp that this information is very layered                                                                                       |
| 39:46      | and peeking into it and getting that out of it is hard.                                                                                                                            |
| 39:50      | It's interesting because like the old way we did it where we would set variables and                                                                                               |
| 39:58      | extract data visually is very clear when you look at it. I guess I have a bit of a programmer's                                                                                    |
| 40:04      | mind because I was like, oh, okay, so first you get this, then you get that. But it creates                                                                                        |
| 40:08      | these really long workflows. Magic variables take away all the tedium, but it's not quite                                                                                          |
| 40:13      | as intuitive if you're just looking at it and you're not that familiar with it. So if                                                                                              |
| 40:17      | you're listening, get the idea of a magic variable down, then you're going to be able                                                                                              |
| 40:21      | to, this stuff will make a lot more sense to you. And so that's the first one. It's                                                                                                |
| 40:25      | setting a couple variables, formatting data and dropping it into a URL. And it's something                                                                                         |
| 40:31      | you could use every day. We're going to screencast it. We'll make sure that you, we haven't decided                                                                                |
| 40:36      | as we record this exactly who's doing what, but we're going to have some stuff for you                                                                                             |
| 40:41      | to learn that.                                                                                                                                                                     |
| 40:42      | Yeah. And there's definitely a screenshot available of explaining how to get the exact                                                                                             |
| 40:46      | handle out of the dictionary in the URL. I've just added that to our show notes to make                                                                                            |
| 40:50      | sure. So, because I think that's a really, really important thing that you've shown us                                                                                             |
| 40:55      | there, Matt, which is very, very helpful for everybody.                                                                                                                            |
| 40:58      | And I think the hardest part is that when you extract a magic variable, that original                                                                                              |
| 41:04      | action is just kind of sitting up there. Like it is a good, like you said, David, it's a                                                                                           |
| 41:08      | good visual cue when you use set variable. It's like, okay, I'm clearly doing something                                                                                            |
| 41:12      | with this later, but now when you download shortcuts where someone like me has used magic                                                                                          |
| 41:18      | variables a lot, it just kind of stops. And then later, the information comes back in                                                                                              |
| 41:22      | and it is like, you're like, wait, what's happening? And it's kind of, you have to work                                                                                            |
| 41:28      | backwards from the effect as opposed to going step by step through, but it is a complicated                                                                                        |
| 41:34      | concept and I'm sure we'll both talk about it more separately. Like I need to write                                                                                                |
| 41:40      | a whole long article just exactly about magic variables because it's confusing.                                                                                                    |
| 41:45      | Yeah. And I don't want to overstate the complexity. It's way better. Magic variables are such                                                                                      |
| 41:51      | a great solution. But it just takes you a little bit of time to figure it out. And once                                                                                            |
| 41:56      | you understand that, then you're going to understand why you don't want to have to declare                                                                                         |
| 42:01      | a variable and then extract 17 different elements of it. It's just nuts. So they really did                                                                                        |
| 42:09      | a good thing, but you just got to kind of, you got to grok that, then you'll be okay.                                                                                              |
| 42:14      | This episode of The Automator is brought to you by our friends at TextExpander. Head                                                                                               |
| 42:19      | over to textexpander.com/podcast and multiply your team's productivity. TextExpander                                                                                               |
| 42:25      | does that. It multiplies your team's productivity, making up to date shared knowledge available                                                                                    |
| 42:31      | instantly. Using TextExpander, all of your team's common responses can be shared amongst                                                                                           |
| 42:36      | each other. It makes it accessible and searchable through simple abbreviations and keyboard                                                                                        |
| 42:41      | shortcuts written and edited by your best writers. And you can make these available                                                                                                |
| 42:46      | on multiple platforms because TextExpander is on Mac OS, iOS, Windows and the web. They're                                                                                         |
| 42:51      | updated immediately and everywhere whenever they're modified. I use TextExpander on my                                                                                             |
| 42:57      | team. My assistant has TextExpander installed. And when I'm sending out customer support                                                                                           |
| 43:02      | emails for Learn.max Sparky, I just update them in TextExpander and she gets them automatically.                                                                                   |
| 43:08      | Quite often they include links or other codes that need to be updated. She never even sees                                                                                         |
| 43:12      | me do it. It just happens in the background. And that's just with two people. Imagine                                                                                              |
| 43:16      | if you had a team of a thousand people. TextExpander leaves more time for you to do what you do                                                                                    |
| 43:21      | best. And for larger teams, they also support the single sign-on along with grouping accounts                                                                                      |
| 43:27      | to make onboarding a breeze. So you can use TextExpander not only for your personal productivity                                                                                   |
| 43:32      | but for your team's productivity to master to-do lists, post to social media and even                                                                                              |
| 43:37      | help with your time tracking. Check out TextExpander's blog for those tips and more. Visit                                                                                         |
| 43:43      | textexpander.com/podcast to learn more about TextExpander and our thanks to TextExpander                                                                                           |
| 43:49      | from Smile for their support of this show and Relay FM.                                                                                                                            |
| 43:55      | So Matt, you mentioned that you have a workflow to get a golden hour. Can you tell us to start                                                                                     |
| 44:00      | with what is golden hour? Because I've never heard of this term before, so you tweet about                                                                                         |
| 44:05      | it. So I'm guessing there's some other people in the audience who don't know either.                                                                                               |
| 44:09      | That's a good point. So golden hour is basically a photography concept. So supposedly the sunlight                                                                                 |
| 44:18      | is best during the day, just an hour before sunset and an hour after sunrise. And there's                                                                                          |
| 44:24      | also blue hour, which is before sunrise and after sunset. But that's less. That's more                                                                                             |
| 44:32      | for fancy photography. And basically golden hour means that the sun is coming in from                                                                                              |
| 44:38      | the side and hits everyone's faces and casts awesome shadows and things like that versus                                                                                           |
| 44:44      | that noon suns overhead coming straight down. You get shadows under your eyes and things                                                                                           |
| 44:49      | like that. And so for photography, knowing that it's golden hour is pretty much going                                                                                              |
| 44:55      | to, it's not going to guarantee that you're going to get a good photo because there's                                                                                              |
| 44:59      | many, many other variables that play there. But it basically means that you'll have really,                                                                                        |
| 45:04      | really nice natural light and you'll get like that golden effect on your shot where it's                                                                                           |
| 45:11      | not quite a sunset, but everybody just looks fantastic. And so ideally for photographers,                                                                                          |
| 45:18      | if you're shooting outside, like there are some photographers who don't ever bother shooting                                                                                       |
| 45:22      | outside of those times because they're like, I'm going for a specific effect. I don't want                                                                                         |
| 45:28      | just harsh daytime stuff. So that is a reason why everybody's vacation photos look worse                                                                                           |
| 45:35      | is because we're all taking photos in the middle of the day instead of at the sunset                                                                                               |
| 45:39      | and things like that. So I basically built this shortcut because I wanted to know every                                                                                            |
| 45:45      | single day when golden hour was without having to go, like I could look up the sunset and                                                                                          |
| 45:51      | then manually do the math and things like that, which is admittedly not that hard, but it's                                                                                        |
| 45:57      | just a little bit of thinking or like I'd have to look up the sunrise and sunset times                                                                                             |
| 46:03      | anyways. And this way I can kind of use one tool and hook into a weather service that provides                                                                                     |
| 46:09      | that information. And then I use the actions in shortcuts to do date math and just tell                                                                                            |
| 46:16      | me what those times are.                                                                                                                                                           |
| 46:18      | Yeah, this is a really great shortcut gang because it uses a lot of different pieces                                                                                               |
| 46:22      | of [[Shortcuts\|Siri Shortcuts]]. And I hopefully will kick your mind off to all sorts of things                                                                                   |
| 46:27      | you can do.                                                                                                                                                                        |
| 46:28      | Yes. And it's also a great introduction to the [[Dark Sky]] API, which you can use to do                                                                                               |
| 46:32      | a lot of things, including just get the weather as well as get the sunrise and sunset times.                                                                                       |
| 46:36      | Yeah.                                                                                                                                                                              |
| 46:37      | Hey, before we start, before we start, can I just talk about APIs for a second? Because                                                                                            |
| 46:41      | I think this is something for some of our listeners that are not programmers is going                                                                                              |
| 46:44      | to feel like they merely turn their brains off like APIs. What's that? APIs are not as                                                                                             |
| 46:51      | scary as they sound. Well, do you want to explain Matt what they are just generally?                                                                                               |
| 46:55      | Sure. Because this was one of those things where I had to learn what it was and write                                                                                              |
| 47:01      | a definition for everybody else to understand. And I was kind of like, wait, I don't actually                                                                                      |
| 47:05      | know what this really means. And an API, the term stands for application programming interface.                                                                                    |
| 47:13      | And so it's a way for two applications to talk to each other over the internet and in                                                                                              |
| 47:20      | a secure way where the companies are aware of what's happening. And that's actually probably                                                                                       |
| 47:24      | pretty important because it's not just open pipelines that anybody can upload data to                                                                                              |
| 47:29      | your website or something like that. But APIs are what power most of the internet that everyone                                                                                    |
| 47:35      | uses on a daily basis. So [[Twitter]], the [[Twitter]] app is calling their own API and bringing                                                                                           |
| 47:43      | that information into your client app. And that essentially every time you tap a different                                                                                         |
| 47:50      | button in [[Twitter]], a different API interaction is going on. When you send a tweet, it sends                                                                                        |
| 47:57      | a whole URL with your tweet information included and then posts that to the server and that                                                                                        |
| 48:04      | gets published. And everybody's timelines, with their own API, it calls get that information                                                                                       |
| 48:10      | back in. And so it's really just how modern applications and modern services talk to each                                                                                          |
| 48:17      | other. But it's wrapped in a confusing jargon as normal.                                                                                                                           |
| 48:21      | And normal people can use these. I mean, and like Twitter is like controversially starting                                                                                         |
| 48:25      | to scale back its API. So third party apps can't do as much. But in this one, you're                                                                                               |
| 48:31      | using the [[Dark Sky]] API. So just explain what that is and how you got it got into it.                                                                                               |
| 48:39      | So [[Dark Sky]] is a popular weather service. And I think they've always been popular because                                                                                          |
| 48:46      | they had a really good data stream. And they essentially provide their own weather information                                                                                     |
| 48:52      | for current, minute, Lee, hourly, daily, weekly. And you can, what you do, I basically knew                                                                                        |
| 49:02      | that I wanted weather and there wasn't any way to do it in workflow. And there does seem                                                                                           |
| 49:08      | to be weather actions that look like they're coming to shortcuts, according to the [[WWDC]]                                                                                            |
| 49:15      | presentation, because they had one up there that was get weather and they used it in a                                                                                             |
| 49:20      | [[Siri]] result. But we haven't seen that in the betas. So was that in the circle of my fingers?                                                                                       |
| 49:26      | Yeah, I think so. Yeah. And so in theory, going deep into an API only needs to happen                                                                                              |
| 49:33      | when there isn't an app or even, I mean, you were else game is also equally more advanced                                                                                          |
| 49:40      | than the regular actions. But these are kind of one of those areas where even workflow                                                                                             |
| 49:45      | itself couldn't solve the problem that I wanted. And but I did know that it could hook                                                                                             |
| 49:51      | into the internet. And so I found the service [[Dark Sky]] seemed the most reliable. And they                                                                                          |
| 49:56      | do have a relatively simple API. And so one of the limitations right now that is honestly                                                                                          |
| 50:04      | killing me a bit is that workflow doesn't support [[OAuth]] too. So that's another fancy                                                                                               |
| 50:10      | term for basically an extra layer of security that a lot of applications added a couple                                                                                            |
| 50:16      | of years ago, because you could, if you had the right password and stuff, you could just                                                                                           |
| 50:21      | pass information. Whereas these apps need to authenticate that it's actually you doing                                                                                             |
| 50:27      | something. And so [[Workflow]] and [[Shortcuts]] doesn't currently support that, which is internally                                                                                       |
| 50:33      | you. I'm sure the team was annoyed eventually because I'm like, guys, oh, I have to let's                                                                                          |
| 50:38      | do it. How about today is this, they're like, we need to prioritise the actual app and everything                                                                                  |
| 50:43      | too. And it's like, there's a whole lot of technical challenges along with that. And                                                                                               |
| 50:48      | it is, we were a team of five people. So honestly, you can do it.                                                                                                                  |
| 50:54      | I'm sure you're great because if I had been like in your shoes, I would have been unbearable.                                                                                      |
| 50:58      | They would have fired because I would have been asking for so much stuff every day.                                                                                                |
| 51:02      | I would probably have just been sitting in the corner eating all the chocolate.                                                                                                    |
| 51:06      | Go ahead and explain that. So what did you do? How did you get an API with with [[Dark Sky]]?                                                                                              |
| 51:16      | So services that have slightly more open APIs where you only need a API key in order to                                                                                            |
| 51:24      | access it, those are what you can use in shortcuts. And Dark Sky, thankfully, has one of those                                                                                     |
| 51:30      | where I basically just went onto their website and signed up to receive, like gave them my                                                                                         |
| 51:35      | email and information so that they know who I am in case I start abusing this. But then                                                                                            |
| 51:41      | they basically sent me an API key. And that's just a string of characters and numbers that                                                                                         |
| 51:46      | you add to the URL to basically be like a unique identifiers. This is me requesting this information.                                                                              |
| 51:54      | And so if they saw that I was doing it a thousand times a minute, every minute for the whole                                                                                       |
| 51:58      | day, they're like, okay, you're abusing this, you have to pay for it versus somebody like                                                                                          |
| 52:03      | me who just grabs one payload of information, maybe a day or maybe once a week is like,                                                                                            |
| 52:10      | a lot of companies just give that away for free. It doesn't really take computing power                                                                                            |
| 52:15      | on their part to do just single calls. It's usually when a developer is trying to take                                                                                             |
| 52:21      | their API and he's like, I'm going to grab all the weather data for the whole world.                                                                                               |
| 52:25      | It's like, they're like, no, you can't just do that. Well, [[Dark Sky]] is great because they                                                                                          |
| 52:30      | give you a thousand API calls a day. So even if you share this with your whole family,                                                                                             |
| 52:35      | you still wouldn't hit that limit. It's meant for people like, for example, the developer                                                                                          |
| 52:39      | making carrot, he also uses Dark Sky as one of his weather sources. And so he obviously                                                                                            |
| 52:44      | will need to pay for to provide the weather to everybody, which is why there's an optional                                                                                         |
| 52:48      | extra subscription in carrot for the [[Apple Watch]], because that obviously increases the                                                                                             |
| 52:53      | number of calls that needs to be made. And so basically, we're going to post this at                                                                                               |
| 53:00      | some point. And whether it's my key or Rose's key or Matt's key, you need to get your own                                                                                          |
| 53:05      | key. Yeah, the key will not be in the shortcut, but it's free to sign up for. So don't worry                                                                                       |
| 53:12      | about that. They'll just stop you when you when you do too much. If you do too much.                                                                                               |
| 53:16      | All right. So now that we've kind of got that out of the way, let's talk through the workflow.                                                                                     |
| 53:21      | What do you call it now? It's not a work? Yeah, I call them shortcuts. I'm still using                                                                                             |
| 53:27      | both conceptually, which is bad. But I think it does help a little bit that a shortcut                                                                                             |
| 53:34      | can be the series suggested shortcuts. And it's clear if you're using the word workflow,                                                                                           |
| 53:40      | you probably mean custom shortcuts in the shortcuts app, but it is it's bad. And even                                                                                              |
| 53:46      | I just saw this morning on [[Twitter]], [[Federico Viticci\|Federico]] was tweeting about if you go into the settings                                                              |
| 53:52      | app, there's now [[Shortcuts]] has its own setting page. And in down in those settings areas,                                                                                          |
| 53:58      | you can also see which any app if they've been added to [[Shortcuts]]. And so the menu item                                                                                            |
| 54:03      | says "Shortcuts Shortcuts". And it's just like, oh, no, we're there. Sounds like somebody                                                                                           |
| 54:09      | maybe did a find and replace on the word "Workflow". Yeah, I mean, it's I think it's just because                                                                                    |
| 54:15      | if you have like [[OmniFocus]] shortcuts, it makes sense there that like they it is the                                                                                                |
| 54:21      | term for it. But I just wish it was lowercase or something so that it's the shortcut lowercase                                                                                     |
| 54:28      | shortcut to me is the thing and lowercase or capital S [[Shortcuts]] is the app.                                                                                                       |
| 54:35      | Yeah. So we've gone from [[Workflow]] workflows to [[Shortcuts]] shortcuts. Yeah, but to be fair,                                                                                           |
| 54:41      | we do have [[Apple Notes\|Notes]] notes. And I guess [[Apple Calendar\|calendar]] has events. So some of that does make sense.                                                                                          |
| 54:46      | But you also have calendars inside of [[Apple Calendar\|calendar]]. Yeah, just don't think about it too much.                                                                                          |
| 54:53      | Yeah, exactly. All right, so, so let's get to the the gritty on the golden hour one.                                                                                               |
| 54:59      | So how what are the steps you take to set up this golden hour [[Shortcuts]] shortcut?                                                                                                   |
| 55:05      | Okay, I'll summarise it overall, just so that because it is confusing. But just the main                                                                                           |
| 55:13      | steps are I get the location, I call Dark Sky's API, I extract the data from it. And                                                                                               |
| 55:21      | using that data, I adjust the dates. And then I basically populate a show results action                                                                                           |
| 55:29      | so that [[Siri]] will speak it to me out loud or show it in the widget. And so the first                                                                                               |
| 55:37      | section, actually, okay, I miss spoke because I do get my current location first. And this                                                                                         |
| 55:43      | is one of the awesome actions in workflow and shortcuts that kind of initially, I didn't                                                                                           |
| 55:51      | grasp the value of it. And it is like, wow, this is an amazing feature alone that most                                                                                             |
| 55:57      | people could never do before is just get my location. As your phone does this, we've had                                                                                           |
| 56:02      | GPS devices in these civilian technologies for years. But you're just like, where am                                                                                               |
| 56:10      | I, like you can go into maps and find it. But even stuff like GPS coordinates, not that                                                                                            |
| 56:16      | I necessarily need latitude and longitude every day or something like that. But you                                                                                                |
| 56:20      | can figure out exactly where you are just by opening this and doing get my current location,                                                                                       |
| 56:26      | which is cool because it enables shortcuts like this to not just run independently. It                                                                                             |
| 56:33      | kind of gives them context and a spatial balance where it's like, here's where I am. So I want                                                                                     |
| 56:39      | the weather for Berkeley, not Idaho or something like that.                                                                                                                        |
| 56:43      | Yeah, so so many awesome shortcuts start with get location. That is so true.                                                                                                       |
| 56:49      | Yes. And so in here, this is another example of where I use magic variables. And I could                                                                                           |
| 56:56      | have done get details of location, get latitude, save variable, get variable, get details of                                                                                       |
| 57:03      | location, get longitude, set a variable. But instead, I just have get current location.                                                                                            |
| 57:09      | And then later in a URL action, I have the current location variable set to the magic                                                                                              |
| 57:16      | variable detail of latitude and longitude. And so this could have been nine steps to                                                                                               |
| 57:22      | start off the shortcut instead. It's just the initial get content. So that's a super                                                                                               |
| 57:29      | helpful example there. And in this next spot, you actually based off of my last example,                                                                                           |
| 57:35      | this should be a dictionary where I say API key and then have the key as the value. But                                                                                            |
| 57:40      | here's an example where I just used text. And it's just a text field that you just paste                                                                                           |
| 57:45      | your key into. So I might actually you're going to need it later.                                                                                                                  |
| 57:49      | Yeah, exactly. But this is this is just another demonstration of where even within my own                                                                                          |
| 57:55      | personal examples, you can kind of do it differently. But I think I don't remember why I chose                                                                                     |
| 58:01      | a different thing here, but it is just I have a text field. And then later when I set the                                                                                          |
| 58:07      | magic variable in the URL, I renamed it. So it just says API key. So instead of just having                                                                                        |
| 58:13      | a text magic variable to grab from that's pretty ambiguous. And if I use text again,                                                                                               |
| 58:18      | I could get the two confused. Now it's labeled nicely, which is good.                                                                                                              |
| 58:22      | Yeah, and that's a great tip for anybody experimenting with magic variables, do rename them so that                                                                                |
| 58:27      | you know what it means because that is the single most helpful thing when playing with                                                                                             |
| 58:31      | these. So you know what it is.                                                                                                                                                     |
| 58:33      | There's also a reveal action button when you've tapped on a magic variable. And that's really                                                                                      |
| 58:39      | nice because you're like, what is this and reveal action will scroll the editor back                                                                                               |
| 58:44      | to that spot and show you, it'll pop it out above the rest of them and dim everything                                                                                              |
| 58:49      | else. So you're like, which text action did I choose here? And it's like, okay, for sure,                                                                                          |
| 58:54      | that's the one. And there's a little like return. So it'll go back to the text field                                                                                               |
| 58:58      | where you're entering it, which is an awesome little detail that we added while there I                                                                                            |
| 59:03      | was there. And I was like, yes, this is so nice, because you just kind of get lost in                                                                                              |
| 59:07      | context otherwise. But so that's the first start of it. And I've got my location and                                                                                               |
| 59:14      | I've entered in the API key that I received from deep, erm, [[Dark Sky]]. But this is also set up                                                                                            |
| 59:20      | with an import question again. So fanciness is when you add this, it'll basically give                                                                                             |
| 59:26      | you a link to [[Dark Sky]] to go sign up and enter your key right away. So like David said, you're                                                                                     |
| 59:31      | not using ours and we get banned from [[Dark Sky]] or something. But then we have the URL                                                                                              |
| 59:38      | action. And so this is where we kind of populate the API request that we're going to send to                                                                                       |
| 59:45      | [[Dark Sky]]. And these are provided from the documentation, the [[Dark Sky]] has in many other                                                                                            |
| 59:51      | sites will have a whole fancy page where you go look at the documentation of how                                                                                                   |
| 59:56      | their API works so that you can kind of reverse engineer it back into [[Shortcuts]]. And this stuff                                                                                    |
| 01:00:04   | is admittedly complicated. But thankfully, I wrote the workflow documentation for interacting                                                                                      |
| 01:00:11   | with API's using [[Dark Sky]] as an example. So if people do want to go through this is literally                                                                                      |
| 01:00:18   | how the app demonstrates API's is with the same tool. So that should be hopefully helpful.                                                                                         |
| 01:00:23   | And really, it's just kind of a it's a URL. It's a URL you put together. It's a web address                                                                                        |
| 01:00:28   | that you drop in your API key and the data from the location. So I have, it's darksky.net/forecast/.                                                                                         |
| 01:00:36   | And then I have my API key there. And I use that token instead of                                                                                            |
| 01:00:42   | manually pasting in all the text, partially just because it is readable. And that's all that I                                                                                     |
| 01:00:48   | really need is a reference of this is my API key. And then slash, and then Dark Sky's API wants                                                                                    |
| 01:00:56   | latitude and longitude. And so here I grab the current location variable, and then I tap on it                                                                                     |
| 01:01:02   | and change the details just to extract first latitude, comma, longitude, because that's what                                                                                       |
| 01:01:08   | they need. And so that builds the request. And this doesn't actually do anything. It's just a                                                                                      |
| 01:01:16   | URL sitting there until the next step, which is get contents of URL. And so this is an amazing                                                                                     |
| 01:01:23   | action that is just like the bread and butter of a lot of advanced shortcuts, because this lets you                                                                                |
| 01:01:31   | for developers, it's just curl on the in the terminal where they're entering all their information.                                                                                |
| 01:01:37   | And this will let them download URLs, but you can do the same in shortcuts. And basically,                                                                                         |
| 01:01:43   | it takes the URL from the action passed in, and then sends it to the web and essentially says,                                                                                     |
| 01:01:49   | give me any data that comes back from this. And assuming you have it set up right, it provides                                                                                     |
| 01:01:55   | information. Otherwise, it'll usually give you an error or something like that. But this action alone                                                                              |
| 01:02:00   | is so complicated. And there's little additions that you can add or right now, we're just trying to                                                                                |
| 01:02:08   | get information, but you can post information where you should put it online instead of just                                                                                       |
| 01:02:14   | taking it from there. And so this is where some of the magic of APIs and [[Shortcuts]] happens because                                                                                 |
| 01:02:22   | this action and the way you pass information in and get it out of it is what enables you to                                                                                        |
| 01:02:29   | interact with the whole web. It's any service that has an API, you can and at least for now,                                                                                       |
| 01:02:36   | it has to have the API key thing, but hopefully we get authorisation soon. That would be amazing                                                                                   |
| 01:02:42   | because then you could use shortcuts to interact with anything. It's like, my dream is to be able                                                                                  |
| 01:02:48   | to grab all of my own [[Twitter]] data and then manipulate it using shortcuts and pass it along.                                                                                       |
| 01:02:54   | But this is like the fancy spot too. And so when Matt writes a [[Twitter]] app using [[Shortcuts\|Siri Shortcuts]],                                                                                   |
| 01:03:02   | we're going to have, definitely have you back at that point. But and honestly, for most people,                                                                                    |
| 01:03:09   | you get an API key to some web service where you want to collect information and you run the get                                                                                   |
| 01:03:15   | command with get contents of URL. And that's going to be what I think what most people use.                                                                                        |
| 01:03:20   | Which is what you've done here. Yeah. And so I don't have any extra headers or anything like                                                                                       |
| 01:03:27   | that for there. But basically this takes my URL and sends it to [[Dark Sky]]. And since I have the                                                                                     |
| 01:03:33   | correct API key, they're like, cool, where you gave us your current location data. So I'll just                                                                                    |
| 01:03:40   | pass back everything. And so what they give to me is what's called [[JSON]], which I don't, I think it's                                                                               |
| 01:03:49   | [[JavaScript]] oriented notation, which is basically just a way to this is this does get into the fancy                                                                                |
| 01:03:58   | curly braces that I was trying to avoid. But [[JSON]] is a way to start like we said, with the                                                                                         |
| 01:04:05   | dictionary action, it's a way to structure data in plain text, so that you have layers of information                                                                              |
| 01:04:12   | that you can grab out without having some sort of complicated file format dedicated just to weather                                                                                |
| 01:04:19   | data. Yeah, I mean, the other alternative for APIs, which you will somewhat frequently see,                                                                                        |
| 01:04:24   | especially with older web applications is [[XML]]. And that's the one with the triangular brackets.                                                                                    |
| 01:04:28   | And that one's kind of scary to parse. But thankfully, most web services offer [[JSON]] nowadays.                                                                                      |
| 01:04:35   | And if I understand it correctly, when you run this command, [[Dark Sky]] is just dumping all the                                                                                      |
| 01:04:40   | information, all the weather information on your current location. And one piece of data that is                                                                                   |
| 01:04:46   | in there is the time of sunrise. Yeah, yeah, well, that's within the daily value. So it does provide,                                                                              |
| 01:04:54   | like I said, it gave me daily and hourly, and minutely information. So it can, this version is                                                                                     |
| 01:05:05   | actually somewhat inefficient, because it calls all of the data from [[Dark Sky]]. Whereas you could,                                                                                  |
| 01:05:11   | in theory, add to the end of the URL just daily, so that I don't want to like waste extra information.                                                                             |
| 01:05:18   | But here I did just kind of build this universally. And so it did provide essentially payloads for                                                                                 |
| 01:05:24   | like the daily, weekly, monthly information. And then in the next action, just under get                                                                                           |
| 01:05:29   | contents of URL, I use get dictionary value. And so this dictionary of [[JSON]] data that [[Dark Sky]]                                                                                     |
| 01:05:37   | passed back to us has the daily information in it. And I only want that and not tomorrow's                                                                                         |
| 01:05:43   | information or anything like that. And so you get the dictionary value for daily, and it basically                                                                                 |
| 01:05:51   | ignores all of the rest of the information and only returns the daily information. And in dark                                                                                     |
| 01:05:58   | skies, [[JSON]], this is a whole, see, this is where they're, having their documentation next to you                                                                                   |
| 01:06:05   | is helpful, because they provide nice, clean, drawn examples of the data, of the [[JSON]] data.                                                                                        |
| 01:06:12   | Whereas otherwise, when you get it in [[Workflow]], it kind of is just a blob of text. I actually,                                                                                     |
| 01:06:18   | I usually, this is kind of bad, because I just copy and paste it into [jsonformatter.org](https://jsonformatter.org/). And it                                                      |
| 01:06:24   | cleans up all of the information that I get in shortcuts. So I can just read it in a human way,                                                                                    |
| 01:06:31   | because there's all these line breaks and tabs that it adds. Whereas otherwise, it's                                                                                               |
| 01:06:36   | quite literally just a blob of text. And it's kind of like overwhelming to see the first time.                                                                                     |
| 01:06:41   | And I do have these examples in the [[Workflow]] documentation. So you can kind of see what it                                                                                         |
| 01:06:47   | looks like as the [[JSON]] blob versus a cleaned up formatted [[JSON]], which is nice.                                                                                                     |
| 01:06:53   | Yeah. And in this case, you happen to know that sunrise time with the                                                                                                              |
| 01:07:00   | word time capitalised in those spaces is the value that you want.                                                                                                                  |
| 01:07:05   | Yeah. So out of the daily data, they have, they have like a kind of unnecessary layer                                                                                              |
| 01:07:13   | where they have like the information about the day. And then it's within another layer of the data.                                                                                |
| 01:07:19   | Yeah. And then the data payload gives me just like a list of maybe 10 to 15,                                                                                                       |
| 01:07:26   | like you said, the key is sunrise time. But there's also one like precipitation,                                                                                                   |
| 01:07:32   | percentage, or precipitation intensity. Like, is it going to rain really hard? And                                                                                                 |
| 01:07:38   | since I don't care about that information, I'm just trying to get the sunrise time.                                                                                                |
| 01:07:42   | I don't need to work with it. But that's how I use in another example where I get like the                                                                                         |
| 01:07:46   | humidity out of the same data payload. And then I use that one of like every hour of the day.                                                                                      |
| 01:07:52   | But so this one, I've got get contents of URL, it gets the daily data from the daily                                                                                               |
| 01:08:00   | data, it gets just the raw data. And then the first item in that list is sunrise time.                                                                                             |
| 01:08:07   | So once I've got that sunrise time, again, I store that as a magic variable, it just                                                                                               |
| 01:08:14   | automatically gets detected. And so I can, I have my sunrise time, but now I need to act on that.                                                                                  |
| 01:08:21   | And here's this is where we get into the date actions where there's a little bit of fanciness.                                                                                     |
| 01:08:28   | And this is also conceptually confusing, because every single computer uses the same                                                                                               |
| 01:08:34   | date and time as a reference for what time it is. This isn't a programming concept that                                                                                            |
| 01:08:42   | when I first learned, I was like, that's really how they do it. I mean, it makes sense                                                                                             |
| 01:08:45   | to just have everybody use the same time, but it seems almost too easy that at some point,                                                                                         |
| 01:08:54   | I mean, I'm sure I'm missing critical history behind this, but everybody decided that                                                                                              |
| 01:08:59   | it'd be universal coordinated time, universal. I know it's UTC, but I don't know what it stands for.                                                                               |
| 01:09:05   | It's desperate, coordinated universal time. Don't ask me why the letters are not in the                                                                                            |
| 01:09:12   | same order, because that I do not know, possibly because it would make the cats.                                                                                                   |
| 01:09:16   | Yeah, exactly. It's like, okay, so UTC is January 1st, 1970 at 12am. And so for whatever reason,                                                                                   |
| 01:09:29   | everybody decided to pick that time so that essentially every computer in the world could                                                                                          |
| 01:09:34   | just subtract the seconds since then and get what time it is. And so it still just does                                                                                            |
| 01:09:43   | both of my mind that that's how time works on every single computer, as we're just counting                                                                                        |
| 01:09:47   | seconds since this one date. But this shortcut has to take advantage of that, because that's the                                                                                   |
| 01:09:54   | time that Dark Sky returns to you. Exactly. The sunrise time variable is not going to say 5pm.                                                                                     |
| 01:10:01   | Yeah, because for a computer to be able to read that information, it needs to have the                                                                                             |
| 01:10:08   | date associated with it and everything like that. And 5pm, for me, it's like for Rosemary,                                                                                         |
| 01:10:15   | it's not the same at all. And that's like part of the problem that you run into. And I'm not                                                                                       |
| 01:10:21   | going to lie, I didn't exactly address time zones very well using this shortcut, because                                                                                           |
| 01:10:26   | if you've talked to any developer and asked them about date time and time zones, they'll probably                                                                                  |
| 01:10:32   | cringe, because it's extremely complicated to work with, because everybody does. Yeah,                                                                                             |
| 01:10:36   | there's nothing a developer hates more than working with time, specifically multiple time zones.                                                                                   |
| 01:10:43   | Yeah, it's a nightmare. So I try and work with just one time. There's some of that in here where                                                                                   |
| 01:10:48   | so I have the date action set to a specified date of January 1st, 1970. And then I adjust                                                                                          |
| 01:10:54   | the sunrise seconds to basically get to the actual time. And that always felt a little sloppy. And                                                                                 |
| 01:11:02   | then I was getting all my results. And I was like, this is just not the right time. And I realised                                                                                 |
| 01:11:06   | it's because I'm in Pacific time zone. And so I need to manually adjust the dates back eight hours.                                                                                |
| 01:11:14   | And so I subtract eight hours from that time that [[Dark Sky]], that I've calculated from what                                                                                         |
| 01:11:21   | [[Dark Sky]] gave me. And then here's also where I'm almost positive. See, this is where there are                                                                                     |
| 01:11:29   | some downsides to shortcuts compared to actual programming, because programmers would go to                                                                                        |
| 01:11:33   | the lengths to make sure this works properly. And mine, I'm like, Oh, daylight savings time,                                                                                       |
| 01:11:38   | just get rid of an hour. So I just manually subtract an hour. And there's a chance this will                                                                                       |
| 01:11:43   | break when daylight savings time occurs. But I think a lot of it is I just run it again,                                                                                           |
| 01:11:49   | and see what the time it is. And if it's giving me the wrong time by an hour, I just adjust this.                                                                                  |
| 01:11:54   | So this is one of those examples where it's a little sloppier, because I'm just a person,                                                                                          |
| 01:11:59   | I don't want to manage dates and times just to be able to check when I should take photos outside.                                                                                 |
| 01:12:05   | Like, I just want a quick and easy solution that gets me pretty close to the end.                                                                                                  |
| 01:12:10   | And I wonder if there's an API somewhere out there where you could call it to return,                                                                                              |
| 01:12:15   | you know, if you're in daylight saving times or not in your current location.                                                                                                      |
| 01:12:19   | Yeah, I actually have a workflow for that, I believe.                                                                                                                              |
| 01:12:22   | Oh, yeah, see, of course, I want to say I do.                                                                                                                                      |
| 01:12:26   | You're the type of person who can get into it more than me. I get to the zone where I'm like,                                                                                      |
| 01:12:32   | Oh, I just don't want to. And you're like, Oh, I've already got this whole solution. I'm like,                                                                                     |
| 01:12:36   | Dang it. Like, I'm not sure. But I'm not finding it at the moment. So maybe I'm lying.                                                                                             |
| 01:12:43   | And there's, there might be somebody on [Reddit](https://reddit.com). That is one of the things that's                                                                                                   |
| 01:12:49   | always been amazing. And I personally have never even taken advantage of enough because                                                                                            |
| 01:12:53   | there's, we have some people on [Reddit](https://reddit.com) who just love [[Shortcuts]] and have gone to town                                                                                               |
| 01:12:59   | building like some guy went in and extracted, like he can look at the [[Workflow]] file itself                                                                                         |
| 01:13:06   | and tell you which actions it uses. But he spent like a year and a half                                                                                                            |
| 01:13:09   | re-engineering how [[Shortcuts]] works. And I was like, what are you like, this is amazing. But                                                                                        |
| 01:13:15   | like, I sent it to the team and Ari was like, Oh my God, because it's like, we didn't think to do                                                                                  |
| 01:13:22   | this. And people can just kind of go to town on it. But for anybody curious, the workflow and                                                                                      |
| 01:13:28   | the [[Shortcuts]] file there is the [[XML]] inside. So that's the alternative to [[JSON]] I was talking                                                                                        |
| 01:13:33   | about earlier. And it is possible to go through and decode it. It's not the most fun thing to                                                                                      |
| 01:13:39   | go through and decode speaking from experience. So I would highly recommend sticking with the                                                                                      |
| 01:13:43   | lovely user interface provided for us by [[Apple]]. Yeah, it's like getting a little intense there.                                                                                    |
| 01:13:51   | Yeah, well, they either way, I mean, it is a little bit of a chewing gum thing, but it works.                                                                                      |
| 01:13:56   | You've done some date math to get the UTC to, to Pacific time. And obviously, if you're doing                                                                                      |
| 01:14:05   | this on the East Coast or some other country, you'd have to change those numbers, but you can                                                                                      |
| 01:14:09   | put it into effect pretty easily. Yeah, I'll put import questions for that part too. So it's clear                                                                                 |
| 01:14:15   | that this is the time zone thing or maybe even a comment. But basically, then I do the same thing                                                                                  |
| 01:14:22   | for Oh, you know what? Now that I think about it, that one hour part wasn't for daylight savings                                                                                   |
| 01:14:28   | time. It was for the golden hour part. Because I don't want to know I've got the sunrise time                                                                                      |
| 01:14:33   | already. And then it's just like, tell me a hour or an hour after sunrise. And then so we then go                                                                                  |
| 01:14:40   | through again, we got get variable, and we get that data again, we get the sunrise time. And                                                                                       |
| 01:14:46   | then I just use get variable for the UTC because I don't I've already done it once. I don't need                                                                                   |
| 01:14:51   | to set it up again, but I could use the date action there. And then I add the sunset seconds,                                                                                      |
| 01:14:56   | subtract eight hours from my time zone, and then add or subtract an hour from the sunset time so                                                                                   |
| 01:15:02   | that I know an hour before sunset, I can go out. And so he's running again, at the end of the day.                                                                                 |
| 01:15:08   | Yeah. Well, this one actually does both. So yeah, and there are ways that I could,                                                                                                 |
| 01:15:14   | I've thought of changing this. But like we said, it gets into date time math. And I kind of gave                                                                                   |
| 01:15:20   | up and threw in the towel. But basically, at this point, I've got all of my data in the workflow,                                                                                  |
| 01:15:26   | I've got the sunrise time, and then the hour after that, the golden hour time, got the sunset time,                                                                                |
| 01:15:35   | and then an hour before that, the golden hour time. And I basically use all of those in a                                                                                          |
| 01:15:41   | show result action. And so this is the new one of the new actions that came with shortcuts,                                                                                        |
| 01:15:49   | as opposed to workflow. So workflow has always had show alert, which has a title and a message,                                                                                    |
| 01:15:55   | and it'll pop up, and you can kind of fill that in. But show result doesn't have the title,                                                                                        |
| 01:15:59   | and also enables it to be spoken back to you by [[Siri]]. And so this is totally awesome,                                                                                              |
| 01:16:05   | because I love this. Having Siri speak this result back to you is like I wasn't expecting that.                                                                                    |
| 01:16:13   | And being able to script that information, and even add your own voice to Siri, basically,                                                                                         |
| 01:16:19   | of not necessarily your actual voice, but the way that you talk and kind of give it a friendly                                                                                     |
| 01:16:25   | message. And so mine, I didn't add as much personality to this one, but it just says                                                                                               |
| 01:16:29   | sunset is at sunrise start, it's the variable, golden hour lasts until an hour after sunset.                                                                                       |
| 01:16:36   | And so when I run this, it says sunset is at 5am, or sunrise is at 5am, golden hour lasts until                                                                                    |
| 01:16:43   | 6am. And then it also has sunrise and sunset in there. So basically, I can just run this,                                                                                          |
| 01:16:49   | and it will tell me both sunrise and sunset, and the hours that I have to go out and take photos.                                                                                  |
| 01:16:56   | But if you're like me and you need affirmation, you could write, hey, handsome at the beginning.                                                                                   |
| 01:17:00   | Yeah, something like that. I've actually, I did that in another log water one that I have,                                                                                         |
| 01:17:05   | and I've talked about this on another podcast where I like log my water using my, the weight                                                                                       |
| 01:17:12   | that I just got, and it's based off of like my daily value for that. And whether or not                                                                                            |
| 01:17:17   | I'm more than 50% of the weight to my goal, it's like, good job, or you already reached your goal                                                                                  |
| 01:17:22   | in little emoji and stuff, which is silly, but it is kind of just friendly, and you can add your                                                                                   |
| 01:17:28   | own personality to it, which is fun. But basically, that's the whole shortcut. It's getting my data,                                                                               |
| 01:17:35   | sending the information, the request to [[Dark Sky]], they return the data, and I extract it from that,                                                                                |
| 01:17:41   | and then do a little date time math to get the right time zone and everything and                                                                                                  |
| 01:17:46   | calculate when golden hour be, and then it just shows it. And again, going back to the abstraction                                                                                 |
| 01:17:53   | of it, when you run this, you don't see anything, it just tells you immediately is it will get your                                                                                |
| 01:17:58   | location data, make the call, grab the data, do the math and show the results in seconds. And then                                                                                 |
| 01:18:04   | you're just suddenly you have your information. And what looks like this whole fancy script is                                                                                     |
| 01:18:10   | just information. And when I add this to [[Siri]], and put my custom phrase of when is golden hour,                                                                                    |
| 01:18:18   | she just says back to me, it's at 5am, you have until 6am to take photos. And it's, I'm like,                                                                                      |
| 01:18:25   | this is amazing, like I got my, I was walking out with using my [[Apple Watch]] and my [[AirPods]],                                                                                        |
| 01:18:33   | and I like tapped on my [[AirPods]] and ran the golden hour shortcut from my ears. And then it made an                                                                                 |
| 01:18:43   | API request and spoke the information back to me in my ear. And I was like, Oh my God, like,                                                                                       |
| 01:18:49   | I've never done that before. And yeah, at the time, I was like, I might have been the first person                                                                                 |
| 01:18:55   | to make an API request with [[AirPods]]. And that was pretty cool. Yeah, that that is amazing. And that                                                                                |
| 01:19:01   | just shows what shortcuts can do for us because it's, it's one thing to know, hey, you know, like,                                                                                 |
| 01:19:07   | this is amazingly powerful and awesome, great. But what can I do with it? That's always the                                                                                        |
| 01:19:12   | question. And you've given us some really great examples here today. I think what's hard about                                                                                     |
| 01:19:17   | this one is that it's really not helpful for me to see this sunrise for today, because chances                                                                                     |
| 01:19:22   | are it already happened. And so the part that I haven't figured out is just like getting tomorrow's                                                                                |
| 01:19:29   | sunrise time and today's sunset so that I can take photos at sunset and then plan when to wake up                                                                                  |
| 01:19:36   | tomorrow. But it did kind of get confusing. And then the date time stuff was like not as universal                                                                                 |
| 01:19:43   | for anyone else who would download it. And so I kind of was like, this is good enough for now.                                                                                     |
| 01:19:46   | And maybe that's the ver 2.0 of this, or maybe someone like you, Rosemary, are one of the                                                                                         |
| 01:19:52   | automators fans will dive in and do it for me. Well, I'm not going to make any promises, but I                                                                                     |
| 01:19:58   | think I might be having a chat to Matt after the recording so that we can get you an updated version                                                                               |
| 01:20:03   | in the show notes, which we'll do a little bit extra, which would be quite nice, I think.                                                                                          |
| 01:20:07   | So can you get the API call to give you tomorrow's weather? I mean, that would be...                                                                                               |
| 01:20:11   | You can. You could theoretically even go through like the next week or so and add it to your                                                                                       |
| 01:20:16   | calendar. And that is an extension task I'm throwing out to everybody in the form.                                                                                                 |
| 01:20:20   | I think the reason it's different is they have daily and hourly, but they don't have...                                                                                            |
| 01:20:29   | I think it's just today versus each day of the week. And so it is in there, but you kind of                                                                                        |
| 01:20:35   | have to cross data sources and start doing more complex stuff. And I think one problem that I                                                                                      |
| 01:20:42   | do have just personally is I do have 800 of these. And so I have tons that I want to build,                                                                                        |
| 01:20:48   | or things like that. And it's kind of the amount of effort does start to outweigh the return,                                                                                      |
| 01:20:55   | but it's also... The math is different for me because when I share it with everybody,                                                                                              |
| 01:21:00   | then everybody gets to use it. And I lose a little bit of the time, but the value gets to                                                                                          |
| 01:21:05   | everyone, which is like my goal is I do want people to use this, and I'm willing to take the                                                                                       |
| 01:21:12   | time to figure it out so that you don't necessarily have to. But again, it also helps when                                                                                         |
| 01:21:16   | there's a community of people that... And I can already hear that, like you said,                                                                                                  |
| 01:21:21   | the wheels turning and Rosemary said, as I'm talking about this, she's like,                                                                                                       |
| 01:21:24   | oh, I'm totally going to improve on it. It's like...                                                                                                                               |
| 01:21:26   | No, we're going to improve on it.                                                                                                                                                  |
| 01:21:28   | It makes someone else's better than improve your own because...                                                                                                                    |
| 01:21:31   | But it is also fun to go back. I have a date calculator one I had written, and then I had                                                                                          |
| 01:21:40   | turned it into two or three different ones to add dates or to subtract dates or to compare dates.                                                                                  |
| 01:21:45   | And then I realised, oh, why do I have three of these? And then using if-then statements,                                                                                          |
| 01:21:50   | I had a list, are you adding dates, subtracting dates, or comparing dates? And then I basically                                                                                    |
| 01:21:56   | folded them all into one. Over time, it's funny how you look at it the first time you solved the                                                                                   |
| 01:22:02   | problem, you look at it the second time you solved the problem a little better. And if you go back                                                                                 |
| 01:22:06   | to it three or four times, it gets to be pretty refined.                                                                                                                           |
| 01:22:09   | Yeah, I think I might have improved this better if I was a full-time photographer,                                                                                                 |
| 01:22:14   | is probably part of the problem, is that while I do love taking photos, I don't do it as much.                                                                                     |
| 01:22:19   | And so if this was a tool that I used every day for my job, it would definitely change.                                                                                            |
| 01:22:24   | So we're heading into [[Shortcuts\|Siri Shortcuts]], or it just came out as the show publishes.                                                                                    |
| 01:22:28   | What are you most excited about as someone who's spent a lot of time working in [[Workflow]]                                                                                           |
| 01:22:32   | and now going into [[Shortcuts\|Siri Shortcuts]]?                                                                                                                                  |
| 01:22:35   | I think one of the things that's most interesting to me, and we haven't been able to test much on                                                                                  |
| 01:22:40   | the betas, is the [[Apple Watch]] and the [[HomePod]] uses of this, of just being able to talk to                                                                                          |
| 01:22:48   | those devices and have it answer you back. Because so far, it has been a lot of                                                                                                    |
| 01:22:53   | shortcut or workflow 2.0 with, I mean, there's nine new actions and 280 in [[Workflow]].                                                                                               |
| 01:23:03   | And so most of what's changed has been the interface and the ability to add it to series.                                                                                          |
| 01:23:08   | But in the betas, we haven't even been able to test that on those other devices.                                                                                                   |
| 01:23:12   | And so I want to be able to leave my phone at home and take my [[Apple Watch]] and run a shortcut                                                                                      |
| 01:23:19   | from there that doesn't, we'll see how that works. Because I still haven't tested it,                                                                                              |
| 01:23:24   | and I don't actually know how much will work. But because it's cellular, in theory,                                                                                                |
| 01:23:29   | it can provide the same data payload back to your phone. And that would make a huge difference                                                                                     |
| 01:23:36   | of being able to use these anywhere. Or like the HomePod is, that's really where it starts to                                                                                      |
| 01:23:41   | change is I'm just like, Hey, when is golden hour? And it tells me to go take photos and                                                                                           |
| 01:23:46   | or like some, I don't know, now my brain is just going off of like the future versions too,                                                                                        |
| 01:23:51   | because that's one thing that [[Workflow]] power users are like, okay, great, now what's next?                                                                                         |
| 01:23:56   | And we already want what we don't care as much about the app, because we already like deepen it                                                                                    |
| 01:24:02   | and I want, I just thought of like, I say that to my HomePod, and then it gives me the directions                                                                                  |
| 01:24:06   | on my phone also, or like that cross device stuff. Or yeah, but I think even just within                                                                                           |
| 01:24:13   | shortcuts itself, the add to Siri stuff, and having it being spoken back to you is really cool.                                                                                    |
| 01:24:18   | And then even I'm given [[Federico]] tons of shout outs here, because he posted the other one of                                                                                   |
| 01:24:23   | just chaining third party actions in the [[Siri]] interface. I think that's super cool too, of                                                                                         |
| 01:24:30   | not only is this going to be a voice assistant, but just when you tell it to do something,                                                                                         |
| 01:24:35   | it'll do 10 things in the [[Siri]] UI and show you little displays for all of that. And so                                                                                             |
| 01:24:41   | that was stuff I was like, I didn't even think about that, because I don't have like a thousand                                                                                    |
| 01:24:46   | developers sending me their betas and testing it all out. I wish.                                                                                                                  |
| 01:24:49   | And it's extremely powerful. And it's one of those things I'm very, very, very tempted with                                                                                        |
| 01:24:54   | the [[HomePod]] now as well, just because if I can trigger shortcuts on the HomePod,                                                                                                   |
| 01:24:59   | oh, no, I don't need a [[HomePod]]. I don't need a [[HomePod]]. By next episode, I will probably have                                                                                      |
| 01:25:05   | a [[HomePod]]. I will probably have one. Yes, you need a [[HomePod]] Rose. You need one.                                                                                                   |
| 01:25:13   | They are tribbles though. Katie already said that. So got to be careful.                                                                                                          |
| 01:25:17   | Well, Matt has 801s [[Workflow]] workflows, [[Shortcuts]] shortcuts. And we covered two of them today.                                                                                     |
| 01:25:25   | So you know what that means. We're going to have you back. Definitely.                                                                                                             |
| 01:25:30   | In the meantime, Matt, where can people find you?                                                                                                                                  |
| 01:25:34   | They can find me on Twitter @MattCassinelli. And then my personal website is [MatthewCassinelli.com](https://MatthewCassinelli.com),                                                                             |
| 01:25:41   | but I also have [CassinelliConsulting.com](https://CassinelliConsulting.com). And so I'm kind of out there helping developers                                                                                          |
| 01:25:48   | figure out how to use [[Shortcuts\|Siri Shortcuts]]. And I'm also helping people with marketing because                                                                                           |
| 01:25:53   | that is what I used to do as a professional, still do now. At the same time, I'll be writing                                                                                       |
| 01:25:57   | about [[Shortcuts\|Siri Shortcuts]]. Like you mentioned, I write for, I've done just one piece on [TechCrunch](https://techcrunch.com),                                                                                     |
| 01:26:02   | but I also write regularly on [iMore](https://www.imore.com) and [The Sweet Setup](https://thesweetsetup.com), where also Rosemary has been kicking butt                                                                                 |
| 01:26:10   | over there too, which is awesome. I'm glad to see you here byline on there too.                                                                                                    |
| 01:26:14   | Thank you. Yes, it's a nice place. I've been posting some quick tips over there with                                                                                               |
| 01:26:18   | everybody else on the team. So it's a nice place to learn. And there are a few                                                                                                     |
| 01:26:22   | workflow or shortcut examples as well. And I guess I should plug my podcast too.                                                                                                   |
| 01:26:30   | I'm doing with, yeah. So a super computer I'm doing with [[Alex Cox]]. We have three episodes out                                                                                  |
| 01:26:37   | as we record this, but we'll probably have a couple more too. And we're kind of taking it from a                                                                                   |
| 01:26:43   | very simple approach of ideally our grandmas would be able to listen to this podcast. I'm not                                                                                      |
| 01:26:50   | totally sure if they would, but we're trying to make it just like a simple, friendly way to learn                                                                                  |
| 01:26:55   | about this stuff. And then we've also given you guys shout outs because it does kind of paired                                                                                     |
| 01:26:59   | nicely with all the Automators and the screencast where you can really learn that step by step parts.                                                                              |
| 01:27:05   | So if you like this show, you're going to like, you're going to like supercomputer.fm. So go check                                                                                 |
| 01:27:11   | it out. I mean, I think our Venn diagram is basically a circle. Yeah. I very much hope it's                                                                                        |
| 01:27:17   | a circle. I mean, eights are cute and all because they're nice and brown and cuddly, but let's go                                                                                  |
| 01:27:21   | with circles. Everybody loves circles. All right, gang. Well, that's it. We are the Automators.                                                                                    |
| 01:27:27   | You can find us at relay.fm/automators. On Twitter, we are automators.fm. Our website                                                                                              |
| 01:27:37   | is automators.fm. Check the show notes. There's going to be a ton of video stuff here. We also                                                                                     |
| 01:27:43   | have a YouTube channel. We also have the learning course at learn.macsparky. There's no way for                                                                                    |
| 01:27:48   | you not to be able to find this stuff. So go find and download, watch the screencast we do on the                                                                                  |
| 01:27:53   | stuff we talked about today, and then you can become your own Shortcuts shortcut power user, SSPU.                                                                                 |
| 01:28:01   | I don't know if that's good or not. Let's go with SSD. G Shortcuts shortcut guru. You can be                                                                                        |
| 01:28:06   | a shortcut guru. All right, there we go. SSG. It is now Canon. Okay, David, where can people find you?                                                                             |
| 01:28:14   | [macsparky.com](https://macsparky.com) and on Twitter, I'm @macsparky. And of course, that's that new learning site,                                                                                      |
| 01:28:20   | learn.macsparky.com. Please go check it out. I put a lot of work into it. I'd love to hear what you                                                                                |
| 01:28:25   | think of it. Great. On Twitter and micro blog, I am RosemaryOrchard and you can find me at the                                                                                    |
| 01:28:31   | creatively named website [rosemaryorchard.com](https://rosemaryorchard.com). Thank you very much for listening. And David,                                                                                        |
| 01:28:37   | is there anything else you want to mention? We'll see you all in two weeks.                                                                                                        |
