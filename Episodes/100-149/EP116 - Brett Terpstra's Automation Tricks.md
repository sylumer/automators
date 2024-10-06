---
status: incomplete
fc-date:
  year: 2022
  month: 12
  day: 2
fc-category: podcast
podcast: Automators
published: 2022-12-02
duration: 4902
formattedduration: 01:21:42
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Brett Terpstra
notetype: episode
showpage: http://relay.fm/automators/116
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators116.mp3
episode: 116
title: "116: Brett Terpstra's Automation Tricks"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Brett Terpstra joins David to explain some of his favourite automation tools and tricks.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Brett Terpstra]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 116 Discussion](https://talk.automators.fm/t/116-brett-terpstras-automation-tricks/14855)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[Hover (Sponsor)|Hover]] - Make a name for yourself.

# Show Notes
- [Brett Terpstra.com](https://brettterpstra.com/)
- [GrabLinks - Brett Terpstra.com](https://brettterpstra.com/projects/grablinks/)
- [Welcome to Bunch - Bunch.app](https://bunchapp.co/)
- [SearchLink - Brett Terpstra.com](https://brettterpstra.com/projects/searchlink/)
- [howzit - Brett Terpstra.com](https://brettterpstra.com/projects/howzit/)
- [Slogger - Brett Terpstra.com](https://brettterpstra.com/projects/slogger/)
- [BetterTouchTool](https://folivora.ai/)
- [nvUltra - Searchable, portable, MultiMarkdown notes](https://nvultra.com/)
- [Keyboard Maestro 10.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators. I'm David Sparks, and Rosemary Orchard isn't here with me today,               |
| 00:06      | but I have somebody else for you. Welcome to the show, Brett Terpstra.                                    |
| 00:09      | Hello, David Sparks.                                                                                      |
| 00:11      | Hey, Brett. I want to thank Brett so much. Rose was unavailable at the last minute. She                   |
| 00:17      | got a little sick. So Brett said, hey, I'll help you out and come in, and I really appreciate             |
| 00:23      | it. So thanks for doing that. And all he did, Brett, agreed to come on the show with just                 |
| 00:26      | a short notice. I missed the start time because I put the wrong time, like clock, you know.               |
| 00:32      | So so much for Automator here, right? But anyway, it's great to have you back, Brett.                     |
| 00:37      | You were the first person that came to mind when I thought about talking automation. You're               |
| 00:41      | in my mind one of the alpha automators of the internet.                                                   |
| 00:44      | Oh, alpha.                                                                                                |
| 00:45      | Yeah. I like that.                                                                                        |
| 00:46      | I just came to me as I said it, and I thought, wow, that's pretty clever. Sometimes I'm good              |
| 00:51      | at this. For folks who don't know, Brett, is a, well, Brett, I don't know. Where are                      |
| 00:57      | you working these days? I know because like when I first met you, you were doing all the                  |
| 01:01      | back end stuff for one of those big blogging companies. And I'm not sure what your day job                |
| 01:06      | is at this point.                                                                                         |
| 01:08      | These days I am a principal software developer at Oracle.                                                 |
| 01:13      | Yeah. Just just a little company called Oracle. Yeah.                                                     |
| 01:16      | Yeah. A little, little, little backwater company called Oracle.                                           |
| 01:19      | Yeah. But Brett has a design past, but he's also a very smart programmer and super interested             |
| 01:29      | in automation. Brett and I actually wrote two books together, the 60 max tips books,                      |
| 01:33      | which are pretty out of date at this point, obviously, but the, but that was a lot of                     |
| 01:38      | fun. That came up with, I think we were speaking together in the old days of Macworld or something        |
| 01:42      | where like, you know, let's just put all these things down somewhere. And I know we've known              |
| 01:47      | each other a long time and I always liked talking to you, Brett.                                          |
| 01:50      | Didn't we do, wasn't it you, me and Merlin Mann for one Mac, Macworld panel?                               |
| 01:55      | You know, I think so. That seems right. I think so. But I, you know, I think now that                     |
| 01:59      | you mentioned it, I think that's what it was. Yeah. And we were all, it's all a blur.                     |
| 02:03      | It was like a shotgun of Mac tips. We all just kept going and it was really fun. And                      |
| 02:09      | the audience had a great time and we shared a lot of tips, but the, but you, you also                     |
| 02:14      | in addition to, you know, being a whiz kid for Oracle, you've also developed several                      |
| 02:20      | of your own apps and we just got a lot to talk about today, Brett. But I thought we'd                     |
| 02:25      | just start by, by talking about, you know, the stuff on the table right now. Since the                    |
| 02:31      | last time we've talked shortcuts for Mac has arrived. It's actually had a rough first                     |
| 02:37      | year, I think. I don't know if you'd agree or not, but I would agree.                                     |
| 02:42      | But you know, I think that's all kind of the [[SwiftUI]] stuff, but it seems like it's, it's                 |
| 02:46      | getting in this legs now and I'm finding I'm, I'm increasingly using it. Is that even something           |
| 02:51      | that you play with? Or are you just like writing apps to do your automation for you at this               |
| 02:57      | point?                                                                                                    |
| 02:58      | Oh, I've definitely, once I discovered that you could import automator workflows into                     |
| 03:04      | shortcuts and it would do a pretty good job of converting automator workflows to a shortcut.              |
| 03:11      | It made me more interested because I've been using automator forever. And I write a lot                   |
| 03:16      | of my system services and, and writing tools. I do an automator and I didn't at first realise             |
| 03:24      | that shortcuts could take text input and give you text output and do that kind of text filtering          |
| 03:31      | that is, that's what I used to automator for. So I've been slowly trying to, because I mean,              |
| 03:38      | people didn't kill automator, but it's very clear they're not putting any more effort                     |
| 03:43      | into automator.                                                                                           |
| 03:44      | Yeah. I mean, it kind of stopped when Sal left. I mean, it feels to me like it never                      |
| 03:48      | evolved.                                                                                                  |
| 03:49      | Yeah. Honestly, for sure. And, and, and applications aren't producing automator actions anymore.          |
| 03:55      | They're producing shortcut actions. So like it's kind of, I have to get with the times                    |
| 04:02      | and, and make the switch to shortcuts. So I have been playing with it. I've been building                 |
| 04:09      | my own tools to extend it a little bit. I actually want to add some, I got to learn                       |
| 04:16      | how to build an action so that bunch can be implemented via shortcuts more easily.                        |
| 04:23      | Yeah. I do feel like that is an angle because when you look at the big automation tools,                  |
| 04:29      | you know, the consumer level automation tools on the Mac, which I would consider be shortcuts             |
| 04:33      | at this point, keyboard, maestro, [[Hazel]], you know, and the like, all of them are now                      |
| 04:40      | building integrations. So like, I just, the other day, I was writing a, a [[Keyboard Maestro]]                |
| 04:46      | shortcut and I thought, well, I want to start a timer at the end of this. And rather than                 |
| 04:51      | try and do that with a keyboard, maestro script, which I could do, but it's a little,                     |
| 04:56      | you know, wobbly. I just, I just pulled the shortcut action to start a timer because,                     |
| 05:02      | you know, Timery supports that and just drop that into my [[Keyboard Maestro]] script. And                    |
| 05:07      | you can go both directions. Like I always argue that [[Keyboard Maestro]] is terrible at                      |
| 05:12      | contact management. It's just something that, you know, he's never got around to, you know,               |
| 05:16      | and I don't think it's that easy with privacy and all that, but like you can drop contact                 |
| 05:21      | management stuff, or you can run a contact management script in key in shortcuts and                      |
| 05:25      | then call a [[Keyboard Maestro]] script at the end. So yeah, everything, it's like we're                      |
| 05:30      | getting a super set of tools now. And I really feel like a bunch should be part of that community         |
| 05:35      | because we love a bunch.                                                                                  |
| 05:36      | Well, and so I did, since, since we blast saw, I think it was actually Rosemary's idea,                   |
| 05:42      | but I added a shortcuts command to bunch. Yeah. So you can just in parentheses, write                     |
| 05:48      | sc, or you can write out the word shortcut, give it the name of a shortcut in your library.               |
| 05:54      | And then you can pass it text and you can get the return value and assign it to a variable                |
| 06:00      | in bunch. So bunch can run shortcuts and, and pass and return information from shortcuts.                 |
| 06:08      | It just can't be run from shortcuts unless you use the URL handler, which is still entirely               |
| 06:13      | feasible. And that's the beauty of all of the, all of the Mac automation apps is you                      |
| 06:20      | have either [[AppleScript]] or URL handler support for everything. And every one of them can                 |
| 06:27      | call automations in another one. Yeah. And shortcuts provides a command line tool so                      |
| 06:33      | you can integrate that and anywhere that isn't like automatically available. The ecosystem                |
| 06:40      | is far better for having that kind of cross talk as possible. I feel like it's the best                   |
| 06:48      | we've ever had on the Mac in terms of automation. Oh, it's, it's insanely good. I mean, now               |
| 06:55      | granted, [[AppleScript]] has always been super powerful, you know, but it's also a bit cryptic.              |
| 07:01      | And even, you know, I mean, to me at least I always have to go explore every time I start                 |
| 07:06      | playing with that. That's the problem with [[AppleScript]] is that every app was required                    |
| 07:13      | to define their own dictionary. Yeah. And there was no real standard set that this is                     |
| 07:20      | how you're going to refer to an element in your app. Yeah. So every app has different                     |
| 07:26      | language, like even a different syntax for creating a new item or, or adding an item.                     |
| 07:33      | And there's very little that is portable from one app to another. So really anytime you're                |
| 07:40      | sitting down where an [[AppleScript]], you're, you're opening up the dictionary, you're probably             |
| 07:44      | Googling, yeah, examples. And yeah, it's, it's, it's powerful, but not an ideal programming               |
| 07:53      | language. And it's not gone. It's still there, you know, and like all that work. And I think              |
| 07:58      | it, I think it will continue to be. Yeah. Well, I think my theory is it would be so much effort           |
| 08:04      | to remove it. It's so baked into the operating system at this point that [[Apple]] would never                |
| 08:09      | pay to remove it. You know what I mean? I think if they could throw a switch and turn                     |
| 08:14      | it off, they might be tempted to do that. But, you know, I say that, I don't think they'd                 |
| 08:17      | even do that. I hear from birdies that, you know, a bunch of the background stuff at [[Apple]]                |
| 08:23      | is run on [[AppleScript]] and who wants to have to rebuild all that stuff when you've got                    |
| 08:29      | it working. So I think they're just going to quietly leave it there.                                      |
| 08:33      | It would cause some serious waves if they were to discontinue that.                                       |
| 08:36      | Yeah. But the overall, I mean, for people who want to start automating, this is like                      |
| 08:41      | the best time on the Mac with, you know, you learn a couple different tool sets. And I,                   |
| 08:46      | people do write me and say, well, should you look, should I learn an automator or a keyboard              |
| 08:49      | master? I'm like, just learn them both. I mean, they, they do different things. Some                      |
| 08:53      | are better one thing than the other. And once you get a feel for that, you can combine                    |
| 08:58      | them. So it's all a piece of a hole in my opinion at this point.                                          |
| 09:02      | Yeah. I agree.                                                                                            |
| 09:04      | You mentioned, we talked a little bit about Bunch, but we didn't say what it is. It's                     |
| 09:08      | Bunch's Brett's app that is kind of boy, how do you describe it? It's a window manager.                   |
| 09:14      | It's kind of like a setup tool.                                                                           |
| 09:16      | No, it's, it's everything but a window manager, actually, all right. It's, it's plain text                |
| 09:22      | automation. It's like [[AppleScript]], but with way simpler syntax. And it can't do everything               |
| 09:27      | [[AppleScript]] can do with its default syntax. But the idea is that it builds contexts where                |
| 09:36      | you have like your work context and you want this browser open and this task manager open                 |
| 09:42      | and you want your, your certain URLs loaded up and you want, do not disturb, turn on or                   |
| 09:49      | off or whatever. And you just write all of that out in a text file. Just like, if you                     |
| 09:55      | want to launch an app, you just put the name of the app online by itself and it will launch               |
| 09:59      | it. And, and then when you close the bunch, it will quit that app unless you tell it to                   |
| 10:04      | ignore it. There's a bunch of special syntax for like, focus this app or hide this app,                   |
| 10:11      | quit this app and like ignore this app when other apps open. It's, it's a bit, I tried                    |
| 10:19      | to keep the syntax as simple as possible. So really, it feels just like writing out                       |
| 10:25      | a very basic script. And I like it because like I originally built it because I wanted                    |
| 10:33      | to launch a bunch of apps at once. And I wanted like one click to launch five different apps.             |
| 10:40      | And you can do that pretty easily with [[AppleScript]], but the syntax was annoying. And I                   |
| 10:46      | wanted to just be able to write down the name of five apps in a text file and have it launch              |
| 10:49      | that. And that turned into a much more complex application in the end, but that was kind                  |
| 10:57      | of the, the idea was just to have a, a, one file that defined a quote unquote bunch of                    |
| 11:06      | apps to launch all at the same time. I call them setups, you know, but I think                            |
| 11:11      | your context is, is exactly right. But I think when you can sit at your computer and say,                 |
| 11:17      | now I'm going to process email, you know, and when you do that, you get your mail app,                    |
| 11:22      | your calendar, maybe your task manager, whatever, all the apps you need to process your email             |
| 11:27      | showing up on your screen and everything else going away, it allows your brain to kick                    |
| 11:31      | into email mode. And then when you say, okay, I'm done with email, I'm going to do some                   |
| 11:37      | research and it opens up your word processor and your research app and hides your mail.                   |
| 11:42      | So you don't get distracted. I think that is there's gold in those hills, you know, and                   |
| 11:47      | yeah, that's exactly what it's for. Yes. And, and you're right. This app is super easy.                   |
| 11:52      | You just type it in, I, you know, as a automator and a nerd, I love that the idea of just doing           |
| 11:57      | it with a text file. And I kind of did miss, misspoke, misspeak earlier when I said window                |
| 12:02      | manager, but I combine it with moon where I just, cause you can run keyboard shortcuts                    |
| 12:07      | with this too. And then so I can put a moon. So I've got all my keyboard custom window sizes,             |
| 12:14      | the keyboard shortcuts, and I can run a bunch and it will open the apps and it will, it will              |
| 12:20      | then run the moon keyboard shortcut to put them on the screen. Yeah. Like so moon,                        |
| 12:25      | moon allows you to save snapshots. So you get all your windows that you want open, open,                  |
| 12:31      | and you put them exactly where you want them. And then you save a moon snapshot of the windows.           |
| 12:35      | And then you can run that with one line of [[AppleScript]] that you just tag into a bunch.                   |
| 12:41      | So after it's launched, all of the appropriate apps, you just call that [[AppleScript]] and moon             |
| 12:46      | does all of the window positioning. And that's how I do pretty much all of my bunches and with            |
| 12:51      | a moon call. Are you in touch with the moon guys is, have you talked to them about this?                  |
| 12:57      | Or is this just no, I haven't, I haven't talked to you. I haven't talked to, is it many tricks?           |
| 13:02      | I haven't talked to them since, since before I developed a bunch. So yeah, no.                            |
| 13:08      | Yeah, it really is a way to go. In fact, I'm not doing it the way you're doing it. Now I'm                |
| 13:12      | then listening to you like, yes, I got to switch over to the [[AppleScript]] call because                    |
| 13:16      | by individually setting windows, sometimes things can go a little haywire. But yeah,                      |
| 13:21      | this is all depends because every app shows its windows at a different speed. Yes. So if you try          |
| 13:28      | to automate like a keyboard shortcut that's going to move a window to the right half of your screen,      |
| 13:33      | it's entirely dependent on whether that window is showing yet at the time that script runs. So            |
| 13:39      | the snapshots, I put the snapshots because you can delay anything in bunch by putting                     |
| 13:45      | tilde and a number at the end of it. So like tilde five at the end would wait five                        |
| 13:50      | seconds before it triggers it. Yeah. So I just, I add a bunch call at the end with like a five            |
| 13:57      | second delay to wait for everything, an [[AppleScript]] call to moon with a five second delay.               |
| 14:04      | Yeah. So just, and I use these for like, when I want to record podcast ads, I have one that just          |
| 14:10      | gives me those tools, you know, or yeah, recording the show is different. And the thing I really          |
| 14:17      | like about bunch is just the simplicity of it. Like, historically, I built these in keyboard              |
| 14:23      | menstrual, which you could do, right? But I find this a little more stable to do it this way,             |
| 14:30      | because it's, you know, it's just so simple. And it's easier to edit and update. Like,                    |
| 14:35      | I appreciate a good graphical interface for my automation, but there are some things that are             |
| 14:41      | just easier to manage, especially when you have a bunch of different setups or contexts.                  |
| 14:47      | To just have it in a text file, you can just pop open and just by editing a couple lines,                 |
| 14:52      | change what it does instead of having to navigate through a bunch of menus.                               |
| 14:56      | So what are some of the most interesting uses for bunch that you've heard now that you've put it          |
| 15:02      | out into the world? Matt, you, you know, Jay Miller, right? Jay's been a guest. Yeah, he's                |
| 15:08      | really into bunch. Yeah. Jay has done more with bunch than even I have. He would be the guy to            |
| 15:16      | ask, what's the craziest thing you do? Because honestly, like I've added a lot of power to                |
| 15:21      | bunch. But most of what I do is still kind of in line with my original goals. And I just,                 |
| 15:28      | I launch, you know, sets of apps and do and then arrange windows and turn on,                             |
| 15:36      | do not disturb or quit [[Dropbox]] and things like that. Like I added a whole bunch of                        |
| 15:43      | logic to it. You can actually have it test, like run this script. And then if you get this result,        |
| 15:50      | do this, otherwise do this and then pop up this menu with like multiple choice selection based on         |
| 15:56      | the output of this script. And like it can get very intense. Yeah. But, but I personally, I don't,        |
| 16:04      | I don't do a lot with that. I add it based on user requests. And I put out a call a while ago.            |
| 16:10      | I'm like, show me your bunches. Yeah. You know, jump on the forum, tell me the craziest thing             |
| 16:16      | you do with bunch. And there have been a few cool ones that have come in, but most people,                |
| 16:20      | I think their bunches are so personal, like they're so, they're so exactly what this person needs,        |
| 16:28      | that they don't tend to consider it worthy of sharing. Yeah. Like I'd considered using your logic         |
| 16:34      | when you announced it, like thinking, well, I could decide, is this Mac Power users,                      |
| 16:39      | automators are focused, and then I could have it set up differently. But then I had already made          |
| 16:45      | an individual bunch for each one. So it's like, I just didn't feel like, I felt like it was just          |
| 16:50      | adding. Yeah. Like my podcasting bunch, when I, when I, because I used to have two podcasts,              |
| 16:57      | I used to do systematic and overtired. And I, each one had a different kind of workflow. And              |
| 17:03      | for example, like overtired, our show notes were all done in quip. Whereas with systematic,               |
| 17:10      | I would use like Google docs. And so there would be a difference in the, in my,                           |
| 17:18      | my bunch populates my show notes, like a basic markdown set up for show notes. And that would             |
| 17:25      | be different between the podcast. So when I launched the podcasting bunch, it asked me which              |
| 17:31      | podcast I'm recording, and then asked me for an episode number. And then it takes it from                 |
| 17:37      | there. And depending on which podcasts I choose, it builds out like the initial show notes, sets up       |
| 17:43      | the document, gets me ready to go. Yeah. Do you think Google docs is ever going to get replaced?          |
| 17:50      | It seems like no, it's just so entrenched at this point. I mean, because other companies are getting      |
| 17:56      | good at cloud sync text and, you know, Google's bag of tricks is not exclusive anymore. But they're       |
| 18:03      | just, you want to know a secret. What? So GitHub is owned by Microsoft. Yeah. But internally, for         |
| 18:10      | all of their shared document needs, they use Google docs. Boy, that's like a surrender right there.       |
| 18:21      | It is. Yeah. Yeah. Well, I'm not a huge fan of Google either. I mean, I'm not like weird about            |
| 18:27      | it. But, you know, I prefer just to kind of keep my own stuff. But we do show. Have you used quip?        |
| 18:32      | Yeah. Yeah, I have. We used it in the past. I really like quip. It's so much simpler. Like,               |
| 18:40      | it doesn't have all the change tracking and stuff and commenting that you would want,                     |
| 18:45      | that it's kind of like standard for why you would use Google docs. But if you just need shared            |
| 18:50      | documents and spreadsheets, quip is great. Yeah. We were using it for this show for a while,              |
| 18:55      | but the problem became when we'd invite someone on the show and they'd never heard of quip. And           |
| 19:01      | it's like, you know, it just became a friction point. So we just went to Google docs. Everybody's         |
| 19:06      | got access to Google docs, you know. Yeah. But you can log in to quip with any Gmail accounts. So         |
| 19:14      | it's one extra step for people. Yeah. But in some people, it would be weird.                              |
| 19:18      | I've never had trouble getting a guest in to quip. Yeah. The thing I've been doing lately on the          |
| 19:23      | automation levels, because we're going to do a show in the future on [[Make]]. It used to be                  |
| 19:28      | [[Make\|Integromat]]. And I've been working on Google doc automation via [[Make]] and trying different, you             |
| 19:36      | know, templates and samples. When we get to that show, we want to be able to talk about it more.          |
| 19:42      | And that's an angle of this. I really have not explored much in the past, but you can actually            |
| 19:47      | do a lot with some of these online document services and the online automation tools.                     |
| 19:52      | Are you into any of that like, you know, [[Make\|Integromat/Make]] or, you know, Zapier or any of that        |
| 19:59      | stuff? I use Zapier and I have TTT, but not extensively. I have TTT has really good support               |
| 20:09      | for [[Day One]], which is where I do all my journalling. So I have a bunch with them years ago. And it's       |
| 20:15      | like every MacSparky blog post gets added to my journal and like tweets that I heart,                    |
| 20:21      | which aren't very many anymore. Yeah, well, I have it like any photo I post to [[Instagram]]                  |
| 20:28      | gets saved with like a markdown note into a [[Dropbox]] file for me, which I always forget is                 |
| 20:35      | running until I discover the folder. It's a nice little archive. I appreciate it. It's from back          |
| 20:43      | when I used to do Slogger. Do you remember Slogger? Yeah, I forgot about that. Yeah.                      |
| 20:47      | Yeah. It's dead at this point, but it was a script that would run once a day and gather                   |
| 20:56      | all of your social media posts across Facebook and Twitter and Flickr and [[Instagram]] and would             |
| 21:07      | basically and originally it was built to work with [[Day One]] and it would build like a [[Day One]]              |
| 21:12      | calendar of all of your social media output. Yeah. And I still think there's a place for that.            |
| 21:18      | And there's been some apps that have come out that especially on iOS that kind of fit that niche.         |
| 21:25      | Slogger was cool because you could write a plugin for just about anything people writing                  |
| 21:30      | plugins for run trackers and everything. But it kind of the code got unwieldy and                         |
| 21:39      | APIs kept changing and things kept breaking and I kind of let it go. But it was fun. And I still          |
| 21:47      | have from the year maybe 13, 2014, I think, I have a great [[Day One]] view of all of my social media.        |
| 21:59      | Yeah. I still use [[Day One]] a lot. I really find that in fact, the days when I'm not                        |
| 22:04      | journalling are the days where things are a little out of whack for me.                                    |
| 22:07      | And just out of a curiosity, a few months ago, I clicked the button in the [[Day One]] app to print           |
| 22:15      | my journals. And I didn't print them all because I have stuff in there where I record workouts            |
| 22:20      | and stuff. I didn't want to put all that. But I printed out my main journals and I thought,               |
| 22:25      | well, I'll put the blog post in there too. Just kind of like when I'm old and drooling on myself,         |
| 22:30      | I can see what I was writing at the time. I was thinking about other stuff. And it was four               |
| 22:36      | volumes. It was literally four volumes of stuff. And you can really collect a lot in that with            |
| 22:42      | automation if you want. And I've gone back and forth on my other show, Focus, Mike Schmitz,               |
| 22:49      | and I keep talking because he got really into journalling by hand with a pen and paper.                    |
| 22:56      | The more I think about it, the more I'm just in the bag for [[Day One]]. And at this point,                   |
| 22:59      | I have a decade of data. If they ever go out of business, I'm in trouble. But they got acquired           |
| 23:07      | by automatic. Oh, they did? I didn't realise that. The way I understand it is that, I forget              |
| 23:13      | the guy's name, the guy who runs automatic and slash WordPress is like one of the...                      |
| 23:19      | Matt Mullenweg. Yeah. He feels like one of the quality rich people on the internet. You know what         |
| 23:23      | I mean? A lot of these guys that run these companies are a little like, I'm not sure about that guy.      |
| 23:27      | Sketchy. Yeah. This guy seems like he's really solid. And I guess his dad was dying and he did            |
| 23:33      | all the journalling in [[Day One]] and liked the app so much he bought it. But having a big company            |
| 23:39      | behind it, I think, means we're good. And automatic is one of the few privacy-focused                     |
| 23:44      | companies. So I'm sure the end-to-end encryption is going to remain in place and we're all good.          |
| 23:50      | Yeah. I met the developers of [[Day One]]. I think at the time, it was just the one guy,                      |
| 23:55      | and I've forgotten his name. Yeah, me too. I met him on a dance floor.                                    |
| 24:00      | Yeah. I met him the year... [[Day One]], I saw the potential in it and I believe that was the year            |
| 24:08      | that they won an [[Apple Design Award]], if I'm remembering correctly. And from that point on,                |
| 24:14      | [[Day One]] became kind of like everyone knew [[Day One]]. They built a really good app and it deserves           |
| 24:22      | the success it's gotten. Yeah. Yeah, I agree. Well... Oh my God. You know... Sorry. My brain              |
| 24:29      | just jumped. You know what? The app on Mac that I just constantly admire is these days?                   |
| 24:36      | What? Clean Shot X. Yes. Agreed. You've used it? Yeah. I mean, it's like a virus. Everybody's using       |
| 24:44      | it. I mean, it's so good. It's so powerful, but so elegant. Like it does everything so elegantly.         |
| 24:51      | I am constantly... It's just a delight to use it. It makes me smile every time I do something with        |
| 24:58      | it. I love it so much. I had to be talked into it because I'm really good at the native screenshot        |
| 25:03      | tool and I like to know all the tricks of it and everything. I'm like, well, what do I need to buy        |
| 25:07      | an app for? And when they added the Comanche F5, once you got the palette for it, the built-in            |
| 25:14      | tools are outstanding and Clean Shot X is still better. Yeah, but it's so good. Even just hiding          |
| 25:20      | the stuff on your desktop. But somebody who does a lot of screen casting, that feature alone is great,    |
| 25:25      | but it just does everything well. I agree. I don't know if there's really an automation story for         |
| 25:30      | that one, but I guess... I don't know. I've never felt a need to script it or anything. No, but           |
| 25:39      | things that you can script with [[Hazel]] to do things with the screenshot you save,                          |
| 25:47      | that's where automation comes in for me. Well, although you can repeat screenshots,                       |
| 25:56      | which is kind of automating, you can set an area on your screen and then have an automation. When         |
| 26:02      | I do screenshots for my application marked, I have it set a screenshot area and then I use                |
| 26:11      | Mark's URL handler to activate different features and then automatically just keep clicking screenshots   |
| 26:19      | of them. And I can update all the screenshots for the app with one script. This episode of                |
| 26:27      | The Automators is brought to you by TextExpander. Go to textexpander.com/automators to get          |
| 26:33      | 20% off your first year. When you work in a small team, every moment counts, you don't want to be         |
| 26:38      | wasting your time finding video conference details to send to a new client. You don't want to track       |
| 26:44      | down the same FAQs from a company website. These are the kind of things you want to get at your           |
| 26:49      | fingertips so you can get your work done faster. And that's why you need TextExpander. With TextExpander, |
| 26:55      | you can access what you type the most with just a few keystrokes, allowing you to work faster and         |
| 27:00      | eliminate repetition, letting you focus on what matters most to you. TextExpander's powerful              |
| 27:06      | shortcuts and abbreviations streamline your team's work. All you have to do is type a short               |
| 27:11      | abbreviation and TextExpander does the rest for you. You just build and collect your most commonly        |
| 27:17      | used phrases, messages, URLs, and more, right within TextExpander, then create your chosen                |
| 27:23      | abbreviation and they'll be with you wherever you type. You can even customise the snippets by            |
| 27:28      | having them automatically add in dates, fill in the blank fields, timestamps, and more. This will         |
| 27:34      | make sure that you still keep the personality and the communications that you send. TextExpander          |
| 27:39      | is available on any device you use across any app you use on Mac, Windows, Chrome, and iOS.               |
| 27:46      | I use TextExpander for everything. I have thousands of snippets. I look at the statistics                 |
| 27:51      | that TextExpander gives me and every year I save days of my life of typing, just having TextExpander      |
| 27:57      | type for me. It boosts my productivity and it also gets a more consistent message out from my team        |
| 28:03      | because, yes, I do share TextExpander with my team as well. Now, if repetitive typing is getting you      |
| 28:08      | down, you need TextExpander. Check out TextExpander today at TextExpander.com/Automators.           |
| 28:15      | TextExpander is a great tool to get started automating and you can get 20% off your first                 |
| 28:20      | year with that URL. One more time, TextExpander.com/Automators to say goodbye to repetitive         |
| 28:26      | typing and our thanks to TextExpander for the support of the Automators podcast. Now, Brett,              |
| 28:34      | you've got another app. I mean, you've always got another app, Brett.                                     |
| 28:38      | So many apps. But you made a system service called SearchLink. Tell me about that one.                    |
| 28:45      | Yeah. So I think it started when I was doing link lists on my blog and I would have like 20 apps            |
| 28:54      | that I needed to link to like their Mac app store links for the purpose of publishing a blog post.        |
| 29:01      | So I wrote an automation that would take a search term and in the background do a Google                  |
| 29:13      | and take the first result from that and insert it as a markdown link. And I grew that into something      |
| 29:21      | that has its own syntax. It's all markdown based. But so you like create a markdown link                  |
| 29:27      | and say it says Brett Terpstra. You put it in square brackets and you put parentheses after it            |
| 29:34      | like you would for any markdown link. And then in the parentheses, you type exclamation point G,          |
| 29:40      | which is short for Google. And there's a whole bunch of different bang searches you can use.              |
| 29:45      | But that right there, when you run that paragraph now through SearchLink, it's going to find that         |
| 29:51      | link syntax. It's going to search for Brett Terpstra and it's going to find [brettterpstra.com](https://brettterpstra.com)             |
| 29:57      | and it's going to replace the search syntax with that markdown link. It makes creating show notes.        |
| 30:04      | Like I can just write, well, something comes up in a podcast. I can just write what it is that            |
| 30:12      | I know I'm going to search for and I can leave it. And then at the end of the podcast, I can just go      |
| 30:17      | through and I can run SearchLink on each line or I can add the syntax and run it in bulk and it           |
| 30:23      | will find all of the links and just expand them for me. And it saves me so much time switching            |
| 30:30      | between my editor and a browser. I didn't even know you made this and I love it already. Okay,            |
| 30:36      | so I'm installing, you got SearchLink workload, you got SearchLink file and SearchLink error.             |
| 30:41      | Yeah, it's all for you, right? Yeah, so SearchLink file is the exact same thing as                        |
| 30:48      | SearchLink, but it's designed to run on text files. I don't use that very much. What I use the most       |
| 30:57      | is I assign a keyboard shortcut to the SearchLink main service. So for me, it's control shift L.          |
| 31:04      | If you pass just a single line of text with no line breaks and no search syntax to SearchLink,            |
| 31:12      | it will just search for the text you have highlighted. So you don't even have to do,                      |
| 31:19      | like, I'm looking at our show notes. If I typed out Brett Terpstra markdown service tools,            |
| 31:26      | highlighted that and hit control shift L, it would link it. It would just put a link,                     |
| 31:33      | a markdown format link into the document. So you don't even need special syntax for it.                   |
| 31:40      | Like, if I want to link a TV show, I can just write exclamation point IMDB, the name of the TV            |
| 31:46      | show highlight just that, run SearchLink on it, and it would replace it with a link to the IMDB           |
| 31:53      | page for that show. Yeah, so it just goes into the services menu. I'm going to attach a keyboard          |
| 31:59      | shortcut to it. And then, wow, this is really great. Are you in the Google Doc right now?                 |
| 32:04      | Yeah, I am. All right, so I'm typing Brett Terpstra markdown service tools,                           |
| 32:13      | and highlighting that, hitting my keyboard shortcut. And it should...                                     |
| 32:20      | Oh, maybe it doesn't work in Google Docs. Of course not. We're just talking about it.                     |
| 32:25      | Yeah, it might be a [[Firefox]] problem, yet that should have just linked it,                                 |
| 32:30      | and it would in a markdown file. But here, let me just give it a shot. I'm going to try it too.           |
| 32:35      | Isn't this great podcast scene we're experimenting right on?                                              |
| 32:38      | This is great radio. Yeah, okay, so it doesn't work in Google Docs,                                       |
| 32:41      | but I will use it later in text outside. So I can now go and pull links down                              |
| 32:48      | with a single keyboard shortcut. Without switching to your browser, yeah.                                 |
| 32:53      | I love when Brett Terpstra has a problem in his life, because it benefits us all.                          |
| 32:59      | That is what I built my career on, is realising that the problems I ran into,                             |
| 33:04      | there was somebody else out there who would run into that problem.                                        |
| 33:08      | Because my first blog was called Circle Six Design Blog. The Circle Six blog.                             |
| 33:14      | Yeah. And it was an advertising firm that I ran. And I had just switched to Mac,                          |
| 33:23      | and I was just starting to solve problems, and I went ahead and I documented what I was learning.         |
| 33:30      | And at first, it was pretty rudimentary stuff with a lot of WordPress learning and stuff.                 |
| 33:35      | But I went from like 20 readers a day to 1,000 readers a day pretty quickly.                              |
| 33:49      | When I started just like, oh, anything I learn, anything I fix, I can just share.                         |
| 33:56      | And there's people out there that need it.                                                                |
| 33:58      | Yeah, it's great. I mean, because with the MacSparky Labs, and I stopped being a lawyer,                 |
| 34:02      | well, we haven't caught up in a while, but I'm no longer a lawyer, right? And I started with              |
| 34:08      | the MacSparky Labs, and it gave me the time to document all the same thing. It's like, oh,               |
| 34:13      | I need to solve this little problem while I sit down to make a video to walk through how I do it.         |
| 34:18      | And it gives me the ability to share all that. It's just great. It's really fun.                          |
| 34:23      | What do you think about just as a little aside, window management these days,                             |
| 34:29      | I know a bunch is not a window manager, but how are you managing windows right now?                       |
| 34:34      | Is [[Stage Manager]] at all on your radar? Yes. So I've been playing, I've been playing                       |
| 34:40      | with [[Stage Manager]]. I find it a little bit clunky, but it's better than [[Spaces]]. I never                   |
| 34:47      | get into spaces. Sure. My brain wants everything more readily accessible without having to worry          |
| 34:56      | about which desktop a thing is on. So [[Stage Manager]], once I get little stages set up well,                |
| 35:05      | it works until I reboot and have to rebuild my stages. But [[Moom]], I mean, really is what I use for         |
| 35:15      | most window management. And I'm a big fan of, like, if my bunch isn't focusing an app for my              |
| 35:22      | context, just holding down command option and clicking an app in the dock, you know, hides                |
| 35:29      | everything except for that app. And a lot of times when I'm switching kind of modes or contacts,          |
| 35:35      | I will just command option, click an app in my dock and hide everything else.                             |
| 35:42      | I really feel like bunch really could make the [[Stage Manager]] experience a lot better                      |
| 35:48      | in terms of setting up the various stages and then dropping them down to the side bar                     |
| 35:56      | so you can just switch between them. I wonder if there's any interface for that. I have not               |
| 36:00      | looked into it yet. As far as I can tell, there's none. Like, you can't address it,                       |
| 36:06      | you can't move it, you can't label it. Yeah. Ventura is already, it's missing a lot of basic              |
| 36:13      | automation stuff that previous OS has had. For example, you're probably familiar with apps                |
| 36:22      | that ask you to open, I guess, certain pain in, like, privacy and security settings in system             |
| 36:29      | preferences. And you used to be able to have a button that would open that pain directly. And             |
| 36:36      | then you could use system event scripting to tell when someone had clicked something that                 |
| 36:43      | is no longer available. And like, what's system settings it's called now, which is annoying               |
| 36:49      | because my launcher, my muscle memory is for SP for system preferences. So I had to manually override     |
| 36:58      | that. But system settings has an [[AppleScript]] dictionary that is completely empty. There's                |
| 37:05      | no way to focus a specific pain. And little things like that that I worry they're not                     |
| 37:13      | interested in providing that level of automation anymore. But maybe it's just                             |
| 37:20      | something that was a back burner thing. We'll see. I feel like they, to answer your question,             |
| 37:25      | I feel like they are not interested in that. I feel like they're putting everything into                  |
| 37:30      | shortcuts at this point. So to trigger do not disturb mode on previous versions of Mac OS                 |
| 37:38      | required some very serious hacking. Yeah, like you had to you had to unfurl nested binary                 |
| 37:47      | PLIS, change one bit and then re refurl them. Yeah. And then and then reset the daemons that              |
| 37:55      | that read it. So it was it was a hack like it was really hacky to do that. Now with focus modes,          |
| 38:04      | there's just absolutely no, no automation possible, which is silly because it seems like                  |
| 38:11      | exactly you okay with shortcuts with a shortcut you can automate focus modes. Yes. But that's             |
| 38:21      | the only way they offered no other API for that. Yeah, I don't know. I feel like that's just the          |
| 38:28      | way, you know, the way of the future, you know, I mean, you know, they're now interested in,              |
| 38:33      | you know, in very Lego style automation, which I think the idea is that we'll bring it out to a           |
| 38:39      | lot more people. And when that's, that's fair. Yeah. But there's no back end for it now, you know,        |
| 38:46      | the power users have been increasingly neglected over the last, you know, five, 10 years,                 |
| 38:53      | just feels like one one thing has been taken away from us at a time                                       |
| 38:59      | for people that really wanted like low level system integration with stuff. Yeah. And it's                |
| 39:04      | been replaced with, like you said, kind of Lego style, like shortcuts had shortcuts is                    |
| 39:12      | amazingly powerful. And it can do a lot of stuff. But some of us would rather write a script or an        |
| 39:20      | app, yeah, to do things in a different way. And that those choices have been taken away from us.          |
| 39:26      | Yeah. And I don't think that's going to change, you know, I mean, hopefully shortcuts gets powerful       |
| 39:33      | enough to catch up with some of this stuff. But it's never going to get as powerful as those under        |
| 39:37      | the hood tools. Well, I think it's very telling that [[Apple]] stopped distributing Python, Ruby,             |
| 39:45      | Perl, PHP, like all of these processors that used to be built into the operating system.                 |
| 39:52      | And like you could rely, if I was going to share a Python script, I could rely on any Mac user            |
| 40:00      | having Python available to run that script. Yeah. That isn't that is no longer the case. Now you          |
| 40:06      | have to use, you have to install the command line tools just to be able to run Python. So                 |
| 40:13      | the ability to share scripts and automations has been handicapped right there.                            |
| 40:20      | This episode of the automators is brought to you by Electric. Unbury yourself from IT tasks and          |
| 40:26      | get a free pair of beat solo three wireless headphones when you schedule a qualifying meeting.            |
| 40:32      | Turning a small business into an empire takes work and you have to keep your                              |
| 40:35      | ear to the ground for things that will help you take it to the next level. But this can be hard           |
| 40:40      | when your attention is pulled in different directions because that's the reality of being a boss.         |
| 40:45      | The team over at Electric knows small businesses maybe like yours face these challenges. That's           |
| 40:51      | why they've solved this problem for you by operating as your IT department. Instead of                    |
| 40:55      | spending your time sorting through unused application licenses, setting up employee laptops               |
| 41:01      | and answering never ending IT questions from your team, you can build that empire with electric acting    |
| 41:07      | is your IT department. You can get back to what you're good at. Plus you get a really cool IT             |
| 41:12      | platform to see and manage everything. Delegation is so important when you're running a small business    |
| 41:18      | and it is so easy to get into trouble when you're a nerd and you know how to do this IT stuff.            |
| 41:22      | You think you can do it, but you can't afford to do it because you need your time focused on              |
| 41:27      | making the business a success. And something like Electric is exactly what you need to take               |
| 41:32      | that burden off your shoulders. So go check out Electric. For Automators listeners, Electric is           |
| 41:37      | offering a free pair of Beats Solo 3 wireless headphones for taking a qualified meeting.                  |
| 41:42      | Just go to electric.ai/automators. That's electric.ai/automators. Once again,                 |
| 41:49      | go there now and get your free pair of Beats Solo 3 headphones today for scheduling a qualified           |
| 41:53      | meeting. And finally, our thanks to Electric for their support of the Automators podcast.                 |
| 42:01      | Brett, we were talking before the break about the kind of evolution of macOS and removal Python.          |
| 42:08      | There's another kind of story going on with this. I'd love to hear your take on it with                   |
| 42:13      | programming languages and underlying code. Like now we have a lot of people going to Electron.            |
| 42:19      | We've got [[SwiftUI]]. We've got all these options to make apps on the Mac now. And [[Apple]] is, I think,        |
| 42:26      | finally really being clear that [[SwiftUI]] is the future. But where do you see the state of that             |
| 42:31      | stuff as someone who is developing apps? I feel like I am way behind the ball on modern technologies.     |
| 42:40      | Like I haven't like I've played with [[SwiftUI]]. I have not developed anything like using cross              |
| 42:49      | platform technologies. I've only ever in my life developed one iOS app and it was well before.            |
| 42:58      | What's the what's the tech called that lets you run iOS apps on a Mac? It's Catalyst.                     |
| 43:05      | Like I haven't gotten into any of that. I despise Electron because like, okay,                            |
| 43:15      | so 1Password. Their most recent version is Electron based and they did a fantastic job with            |
| 43:23      | it. It doesn't suffer from most of what I hate about Electron apps. But like an Electron text             |
| 43:32      | editor will never satisfy me because I make extensive use of the Mac OS system text utilities.            |
| 43:43      | Yeah, there's so many of them, right? You want like search link alone. Like you can't run search          |
| 43:48      | link in most Electron editors, which handicaps my workflow tremendously. So I feel like a lot of          |
| 43:57      | these new technologies are have a negative impact on what I would consider a native Mac application.      |
| 44:10      | And and no, no, none of the new tech really fully covers everything that a native Mac app                 |
| 44:19      | should be able to do. You're always there are always concessions when you use the newer technologies      |
| 44:26      | and until they hit parity with like, I'm Control A and Control E. Are you familiar with                   |
| 44:34      | the text editing shortcuts Control A and Control E? No, what do they do?                                  |
| 44:38      | They come from Emacs in any text field on Mac OS. You can hit Control A to go to beginning of line        |
| 44:45      | Control E to go to end of paragraph. Like command right arrow will go to end of current line but          |
| 44:52      | Control E will go to the end of the paragraph. And there once you once you know them once you've          |
| 44:58      | played with them, Control A and Control E are indispensable, but they don't work in like a                |
| 45:07      | catalyst application, which is weird because they do work on most apps on iOS. If you have a keyboard     |
| 45:16      | attached, and you can hit Control A and Control E, those shortcuts still work. And and they work          |
| 45:23      | universally on Mac except in like, Electron and Catalyst apps and little things like that.                |
| 45:30      | To me, I can't I can't embrace sure a new a new framework until the stuff that I do every day             |
| 45:39      | actually works on it. And then I think there are like exceptions, like I just opened up Kraft,            |
| 45:44      | which I believe is a Catalyst app on the Mac and Control A and Control E work in that app, but            |
| 45:50      | they probably they probably maybe things maybe things have gotten better. I panned it like that           |
| 45:55      | was like the first thing I tried when I ran my first Catalyst app and it didn't work. So maybe            |
| 46:00      | maybe maybe they have come around. Maybe I really need to look at this again. Or the people at Kraft      |
| 46:06      | are so conscientious. They coded it in, you know, I mean, they built it themselves. I mean, that's        |
| 46:11      | also yeah, are you a fan of Kraft? Yeah, I like it. I think it's a good app. Have you used [[Obsidian]]?      |
| 46:17      | Oh, yeah, I'm, I'm, I am way and I'm using them both. I mean, I'm one of those weird ones. But            |
| 46:23      | the I find I went to [[Obsidian]] first, frankly, because I really like the the linking the hypertext         |
| 46:29      | nature of the app. And I do a lot of thinking, you know, I'm holding up air quotes right now,             |
| 46:35      | but the, but all that stuff goes into [[Obsidian]] because it's so good at that kind of problem.              |
| 46:40      | But I was also using it to manage a lot of the MacSparky planning stuff, but I've got a couple           |
| 46:45      | people helping me and that data in [[Obsidian]], it's not [[Obsidian]] is not sharing friendly. So                |
| 46:52      | then everybody was talking about Kraft. So I downloaded it and got it on my team. And we put              |
| 46:56      | all of the playing like every blog post, every newsletter, everything gets done in Kraft. And             |
| 47:02      | then everybody on the team can see it. And yeah, I've really come to like Kraft. I mean, but I            |
| 47:09      | mean, but I mean, I kind of use them in different ways, but sure, it's a good. Yeah, I thought Kraft      |
| 47:15      | was amazing. But I felt like between Kraft and [[Obsidian]], [[Obsidian]] works with a pile of markdown           |
| 47:23      | files. Sure. A pile of markdown files, you can automate in all kinds of ways. And you can,                |
| 47:29      | you can run external automations as you please. And, and I can use it because I'm working on              |
| 47:36      | an app called Envy Ultra, which is the sequel to Envy Ultra more or less. And I can use that with         |
| 47:43      | [[Obsidian]]. Yes. And my Envy Ultra notes can go into like an [[Obsidian]] notebook. And I can use               |
| 47:51      | Envy Ultra for fast markdown editing and, and like modal note taking. And then [[Obsidian]] blows me          |
| 47:59      | away. Like I haven't dug super deep into it, but every time I use it, I'm like, this is, this is          |
| 48:07      | the app I would build if I, if I had the time focus and, and capability, it's, it's a great               |
| 48:14      | app. I'm, I'm right now in the middle of making an [[Obsidian]] field guide, because it's just like           |
| 48:19      | you said, it's a folder full of markdown files. So it's so portable with your data, you know,             |
| 48:24      | there's nothing wrong. You are adding some [[Obsidian]] syntax that you're not going to normally have         |
| 48:28      | a markdown, but otherwise you are super clean. And the third party development of the, you know,          |
| 48:34      | they have that API and people are just making every day, whatever thing it is you want [[Obsidian]] to do,    |
| 48:41      | somebody has written it already. And it is, so that there's a nerd element of it for me that I            |
| 48:47      | just love tweaking it to my, my, my, my choice. Like if you, if you're using [[Obsidian]], download           |
| 48:56      | the data view plugin and just figure that out. I mean, I'd love to hear what happens if Brett             |
| 49:03      | Terpstra spends a day looking at data because it is crazy what you can do with a folder full              |
| 49:09      | of markdown folder files and that data view plugin. It's just completely insane.                          |
| 49:15      | I will have to check that out. Yeah. But it's electron.                                                   |
| 49:18      | Yeah. Yeah. And, and that's where like, I like using Envy Ultra for most of my no taking,                 |
| 49:27      | no taking and editing because it does use native Mac OS text areas and text fields.                       |
| 49:34      | And, and I have all of my services and all of my shortcuts and all my key bindings. I use a ton           |
| 49:42      | of custom key bindings. Like all of that is available in Envy Ultra, but not in [[Obsidian]].                 |
| 49:48      | For actually working with the text files, Obsidian's tools are outstanding. For actual,                   |
| 49:55      | for me, for actual note taking, I will take a native text, a Cocoa text field any day.                    |
| 50:01      | Now, every time in any of my platforms, the word comes up that I'm going to be talking to you,            |
| 50:07      | at least one listener asks, get the status of Envy Ultra. So, so Envy Ultra, like you said,               |
| 50:14      | it's the successor of Envy Alt. And, you know, where is it these days?                                    |
| 50:20      | So here's the status. I just had a meeting with Fletcher last week. Fletcher, Fletcher owns               |
| 50:28      | the majority of the code and, and like has maintained control of that code. And I can't,                  |
| 50:38      | I can't develop with the internal libraries of Envy Ultra. So it is entirely, I'm reliant on him          |
| 50:47      | to, to move the project forward in most cases. And he is an ER doctor who has a lot of like stuff         |
| 50:56      | going on in his personal life that has made this drag out for years now. But we had a meeting last        |
| 51:04      | week and we narrowed it down to three, basically three issues that need to be solved before a             |
| 51:13      | 1.0 launch. And he has, he has since then already solved two of them. We have one issue left to           |
| 51:20      | solve. And then we need to do some testing on a store kit, because we're going to sell with               |
| 51:28      | subscription based IAPs through the Mac App Store. And we just need to iron out the details of that.      |
| 51:35      | And, and we're good to launch. We were going to, we, we did a whole icon redesign thing. And I may,       |
| 51:44      | I may update the icon after launch. I designed the current icon that's just like                          |
| 51:51      | pen nib coming out of a mountain range. I don't love it. I've come to kind of hate it, but it             |
| 51:57      | doesn't get a lot of complaints. And every time we talk about changing it, we get more negative           |
| 52:04      | feedback than good. So that's the kind of thing where like, we can launch a 1.0 with an icon we           |
| 52:09      | don't love. Like that's rebrandable in the future. Let's just get 1.0 out. At this point,                 |
| 52:16      | don't let the icon hold you up, man. The whole, the whole internet is waiting for this launch. So         |
| 52:21      | you got to, you got to get there. We started developing this before [[Obsidian]] was even on the              |
| 52:26      | map. And like, it could have, it could have had a heyday. If we had, if we had beat all of these          |
| 52:33      | other note-taking apps to market, but we did not, we dragged it out so long. It became,                   |
| 52:40      | so many people have given up on us at this point, but we have, we have a couple thousand beta             |
| 52:45      | testers that have been happily using it, people that use it as a daily driver. I believe there's          |
| 52:51      | a solid place for it in the pantheon of macOS note-taking apps, but we just got to get that               |
| 52:59      | 1.0 out. Yeah, I totally agree with your use case that, you know, we've got apps like [[Obsidian]],           |
| 53:04      | but people may want to actually edit the markdown file somewhere else. I mean, that is,                   |
| 53:09      | there's a lot of people looking for that kind of stuff. And then like, you could probably,                |
| 53:14      | you should spend a little time, you could probably write a plugin for [[Obsidian]] that even                  |
| 53:19      | further simplifies the process so you can like go back and forth from [[Obsidian]].                           |
| 53:24      | Let me give the pitch for anyone who is listening and has used NV Alt. We've made NV                      |
| 53:32      | Alt so that it can work with nested folders, multiple folders. You can have each folder                   |
| 53:37      | can become a notebook, same super fast search, same full tech search, but with all of the                 |
| 53:47      | markdown editing capabilities that come in multi-markdown composer. So it's an advanced                   |
| 53:52      | markdown editing engine with built-in preview, a markdown preview and everything. There are some          |
| 53:59      | things that NV Alt did that we left out of NV Alt intentionally, but for the most part,                   |
| 54:07      | it is an upgrade. And if you're an NV Alt user, if you want to test the beta before                       |
| 54:16      | we actually get 1.0 out, just contact me through the NVUltra.com contact link and just let me             |
| 54:26      | know you want on the beta and any listeners of automators that want on, I will put you on.                |
| 54:31      | Can I be on it?                                                                                           |
| 54:33      | Oh, yeah, for sure.                                                                                       |
| 54:35      | All right. Just send me an email. I want to try it. Now you got me curious. But I really,                 |
| 54:39      | Fletcher Penny, who was at multi-markdown with his baby. So he's been in this for a long time.            |
| 54:48      | And the two of you together, I can't imagine it's not going to be a winner. But I can't                   |
| 54:54      | wait to see how this comes out. And I'm really happy to hear that you're that close to release now.       |
| 54:59      | I just TextExpander'd you an invite.                                                                   |
| 55:02      | Well, there you go. You're still using TextExpander?                                                   |
| 55:05      | Oh, so all the time.                                                                                      |
| 55:07      | What's this? What's the what's the weirdest thing you do with TextExpander?                            |
| 55:13      | My favourite thing I do is so when when people use marked and they have the Mac App Store version,         |
| 55:25      | but it runs into sandboxing issues and they want to switch to the direct version,                         |
| 55:30      | I make that a free cross-grade. But in order to do it, I have to generate them a license key.             |
| 55:36      | Yeah. But paddle offers me an API to do that. So I have a TextExpander snippet in an email.            |
| 55:43      | I can just type comma comma MLIC space, and it will go get a new license code, format an email,           |
| 55:54      | and tell them how to use it, where to download it. And then I just hit command shift D to                 |
| 55:59      | send the email. And it's it's 10. It's six keystrokes. And I have I have cross graded somebody            |
| 56:05      | like that kind of stuff makes life super easy. I always struggle with email. And                          |
| 56:11      | I have a lot of customer support stuff. And I do have some people to help. But often,                     |
| 56:17      | I still can be hiring a human to do some of this stuff with just smart use of TextExpander.            |
| 56:24      | Right. Well, yeah. And with like, they've really focused on team usage lately. Yeah.                      |
| 56:30      | And and like with shared snippet groups, like you can change what the people who work for you,            |
| 56:37      | you can change their messaging just by editing their text expand snippet, exactly, like the group,        |
| 56:43      | the TextExpander group. And and then everyone who is is emailing on your behalf has your new             |
| 56:50      | language automatically. And and that kind of stuff makes like TextExpander for an individual is          |
| 56:57      | is amazing and awesome. But but it's applications for like a work environment are pretty pretty           |
| 57:04      | amazing. I do a thing in the labs where if your labs number, you get a discount on field guides,          |
| 57:09      | and that code changes monthly. And sometimes people write in, we have it on the web, but                  |
| 57:14      | sometimes they don't find it, they write in, and I have a shared snippet with my my helper,               |
| 57:20      | where I update the code every month. So when she triggers the snippet to send the code,                   |
| 57:25      | she doesn't know that it's well, she knows it's changed. But I mean, she doesn't have to know             |
| 57:29      | that it's changed. It just changes. And then when she sends it, it's always the updated one.              |
| 57:34      | And that that's really cool. But my favourite use of TextExpander, I know the team stuff is cool,         |
| 57:39      | but I really just love what I can do with it, the tricks I can make it do for me. And even after          |
| 57:45      | all these years, I still find myself making new ones. It's like, there's never an end to this.            |
| 57:49      | Well, and then they added that, like, suggestions. Yeah. If you type the same thing a few times,          |
| 57:57      | it'll say, Hey, do you want to make a TextExpander snippet for this? Yeah. I love that,                  |
| 58:02      | like that, that and the and the search, and the little thing that comes up when when you type             |
| 58:08      | that thing again, it's like, Hey, you don't forget, you made a you made a snippet for this.               |
| 58:13      | Yeah. Next time just type this, like that kind of that stuff has been just an outstanding step            |
| 58:22      | forward for TextExpander. Like you and me, I'm sure I know I have at least over 1000 snippets.           |
| 58:28      | And so Oh, yeah, I can't even count. Yeah, me too. But I, I mapped a control option command I             |
| 58:36      | to search TextExpander, because they have a search function. And that's I use that all the time,         |
| 58:42      | because I don't remember all the Yeah. Mine is literally just control forward slash.                      |
| 58:47      | Yeah. Because I use it all the time. Yeah. That's actually a better shortcut.                             |
| 58:53      | This episode of the automators is brought to you by hover. Make a name for yourself and get 10%           |
| 58:58      | off any domain name. Just go to hover.com/automators. It is so easy for me to do an ad              |
| 59:04      | read about hover because I am a loyal customer and have been for years. Have you ever thought             |
| 59:09      | about starting your own business or creating a brand or sharing your wealth of knowledge with             |
| 59:14      | the world and your years of experience to create something for yourself? Hover wants to take you          |
| 59:19      | to that next first step and getting your ideas off the ground. And if you have a brand that you've        |
| 59:24      | always dreamt of building or a business you want to take care of online, the first step is finding        |
| 59:28      | your domain name and hover makes this super simple, but the clear and straightforward user experience     |
| 59:34      | easy to use tools and truly amazing support from friendly humans. It's never too late to step up          |
| 59:39      | to the plate and share what you have to offer and getting online has helped thousands of people           |
| 59:44      | around the world reach new heights with their businesses. I'm one of them. MacSparky.com has              |
| 59:49      | run through hover along with all of the other domains I own. I'll never forget the day I signed           |
| 59:54      | up for MacSparky.com. It was in 2006. And ever since then, I've been on a rocket ship and enjoying        |
| 01:00:00   | every minute and all this started with me buying that domain. In addition to the classics like            |
| 01:00:05   | .com, you can get extensions like.shop,.tech and.art. With over 400 more to choose from,                  |
| 01:00:12   | you'll be able to find the perfect domain name for your business, one that's memorable,                   |
| 01:00:16   | relevant and boosts your brand. You can buy a domain, set up custom email boxes and point it              |
| 01:00:22   | to your website in just a few clicks. If you ever run into trouble, help us just the phone,               |
| 01:00:26   | call or chat away. Secure, simple and reliable without any tricks. Hover is a trusted and popular         |
| 01:00:32   | choice amongst millions of people, launching any kind of brand or business, including myself.             |
| 01:00:38   | If you're ready to get your idea off the ground with the perfect domain name,                             |
| 01:00:41   | head over to hover.com/automators to get 10% off your first hover purchase.                         |
| 01:00:46   | That's hover, H-O-V-E-R.com/automators to get that 10% off. And our thanks to hover for             |
| 01:00:53   | the support of the automators and RelayFM. Brett, one of the things that I credit you with,               |
| 01:01:00   | and I'm not even sure if you're the one that came up with the idea, but you're the one who                |
| 01:01:02   | brought the idea to my attention is the hyper key. That's remapping the control option command shift.     |
| 01:01:11   | I did not come up with that idea, but I have been vocal enough about it that if you search for            |
| 01:01:17   | hyper key, you're going to find my name instead of the original creator.                                  |
| 01:01:20   | Yeah. But you take those four shift control option command and you map them to the cap                    |
| 01:01:24   | slot key. And there's been a lot of ways to do this. It's not necessarily simple historically.            |
| 01:01:33   | But in the last year, the guy over [[BetterTouchTool]] has mapped the hyper key and the                     |
| 01:01:40   | [[BetterTouchTool]]. And I've actually switched over to using his app because I feel like it's              |
| 01:01:43   | just more stable for it. But how are you mapping your hyper key these days?                               |
| 01:01:48   | I am still using the app that used to be known as a keyboard for, I don't even remember what it used      |
| 01:01:56   | to be called. Now it's called Karabiner and Karabiner Elements. And I still map using that.               |
| 01:02:03   | I use [[BetterTouchTool]] constantly, but I like the Karabiner method because it maps it more               |
| 01:02:11   | at a system level. So even from my macOS login screen, I have my hyper key available.                     |
| 01:02:21   | So I'm still mapping it that way. And you install Karabiner Elements and there is a built-in              |
| 01:02:29   | hyper key preset. Yeah, it's a dummy button. You just press one button and you're in.                     |
| 01:02:35   | The thing that I modify is I like it so that if I hold down my cap slot key and hit another               |
| 01:02:41   | key, then it's command shift, option, control. But if I just tap the cap slot key, then it's              |
| 01:02:47   | escape. And that is vital for me because when I use Vim and things that use the escape key                |
| 01:02:57   | frequently, my muscle memory is to just reach over with my pinkie and hit that instead of moving           |
| 01:03:04   | up to the upper left of the keyboard. So I need that single tap option. And I think Better                |
| 01:03:13   | Touch Tool can do that, but that's the mapping I use in Karabiner.                                        |
| 01:03:20   | Well, we're on the topic of [[BetterTouchTool]]. If you ever want to make shortcuts better,                 |
| 01:03:24   | just install [[BetterTouchTool]] and go and look at the available actions that Better                       |
| 01:03:28   | Touch Tool has contributed. It is nuts. Andreas is a mad scientist. That guy insane.                      |
| 01:03:36   | So what do you think about home automation these days, Brett? I know that you've always                   |
| 01:03:41   | been somebody kind of ahead of the curve on this stuff.                                                   |
| 01:03:46   | Except I feel like since [[HomeKit]], I have fallen behind the curve. I used to be back in the days           |
| 01:03:55   | when you had Insteon and [[Zigbee]]. I had systems that allowed me to integrate all kinds of stuff.           |
| 01:04:06   | I programmed them through Indigo on a Mac Mini in my basement that ran my whole house.                    |
| 01:04:15   | But Indigo doesn't work with [[HomeKit]] or Alexa devices. And so then I have to run Homebridge               |
| 01:04:23   | to try to bring everything together and things get messy. And buying [[HomeKit]] devices means                |
| 01:04:30   | that it won't work with the rest of my automation setup. And I've hit a point of frustration where        |
| 01:04:37   | all of the good home automation stuff that's coming out these days is really its [[HomeKit]]                  |
| 01:04:43   | or its Google or its Alexa. And none of it works with kind of my legacy equipment. And I need to          |
| 01:04:55   | consolidate on one protocol or another. I think this is hilarious. When it was really hard,               |
| 01:05:01   | you were good at it. And as it got simpler, it got harder for you.                                        |
| 01:05:05   | Yeah, that's about right. That's about right. But I got your most recent newsletter this morning          |
| 01:05:14   | and you talked about a protocol called [[Matter]][^1], which could be the future. I'm really intrigued            |
| 01:05:23   | by this. Well, I mean, what happened was when [[Apple]], Google and [[Amazon]] first started this                 |
| 01:05:30   | 10 years ago or so, they all wanted to become the platform, right? Everybody wanted it like,              |
| 01:05:37   | oh, you have to get a Google thing because everything works with Google or [[Apple]] wanted                   |
| 01:05:42   | the same thing. [[Apple]] had more of a security focus. They wanted hardware encryption on their              |
| 01:05:47   | stuff. So [[Apple]] wanted it so somebody on the other side of the world couldn't turn on your                |
| 01:05:51   | air conditioner. And over the years, those positions have evolved, but they've also                       |
| 01:05:56   | realised that there's no clear winner. It is like, what was that TV show again? Highlander,               |
| 01:06:03   | or remember Highlander where that can only be one? Yeah, it can be only one. Yeah. Well,                  |
| 01:06:07   | now they realise that there's three and they'll never only be one. So at some point, they got             |
| 01:06:13   | together and started to come up with a common protocol for the platforms and the devices where            |
| 01:06:20   | they all spoke the same language and it's called [[Matter]]. And it took them years. They just released       |
| 01:06:24   | it publicly, I think, earlier this month. So now we're going to start seeing the devices come out         |
| 01:06:31   | and a lot of the big peripheral kind of sensor, light switch, all those people                            |
| 01:06:38   | are signing on because [[Apple]], Google, and [[Amazon]] are on it. It's going to become the only thing.          |
| 01:06:45   | So when you go to buy something, you don't have to look at the box with a microscope to                   |
| 01:06:50   | figure out if it's going to work or not. I just had that happen. I added a room onto my house             |
| 01:06:56   | because I'm trying to do a better job with the MacSparky stuff. I needed a space and I went to           |
| 01:07:02   | Home Depot and I bought a Kwikset automation lock because I had already got one on my front door.         |
| 01:07:07   | I thought, well, I'll put one there. And it looked like the one on my front door and I just picked        |
| 01:07:12   | it up and drove home and I got home and I looked at it and it had [[Amazon]] and Google but no home           |
| 01:07:17   | kit. So I took it back and they didn't have the home kit when they were out of stock so I had to          |
| 01:07:23   | order it. But I mean, it's just like that stuff is going to go away and we're going to get a common       |
| 01:07:29   | platform. But that doesn't change the underlying technology. There's still a bunch of these that          |
| 01:07:34   | run on Wi-Fi and some that run on [[Zigbee]] and you've got all these different ways for them to              |
| 01:07:39   | communicate. And I think that's probably the bigger problem that you're up against,                       |
| 01:07:45   | just determining the technology stack for it. Right. My Mac Mini in my basement has a [[Zigbee]]              |
| 01:07:54   | and an Insteon external controllers attached to it. And between the two of those using Indigo,            |
| 01:08:03   | I can automate anything in my house except for hue light bulbs and home kit devices.                      |
| 01:08:11   | And what I would love is to have, with a minimal amount of hardware to be able to... Have you ever        |
| 01:08:19   | used Indigo? No. It's old software but it does home automation really well in a very old school           |
| 01:08:30   | kind of way, not the way you would use like Home app to do it. Very kind of like pieced together          |
| 01:08:37   | things from disparate sources and make them do something based on a criteria. And you can kind            |
| 01:08:48   | to do it in home but not as powerfully. And I want everyone to come up with one protocol                  |
| 01:09:01   | so I can have one interface connected to a Mac Mini where I can do like real automation                   |
| 01:09:08   | and not just shortcuts automation. Yeah. Have you looked at [[Home Assistant]]?                               |
| 01:09:13   | Yeah. I feel like that might be what you're looking for. Indigo is basically [[Home Assistant]]               |
| 01:09:19   | on steroids. Okay. [[Home Assistant]] had a couple of failings that made me not dig too deep into it          |
| 01:09:28   | but yeah, same kind of thing. Why does [[Home Assistant]] work with Home Kit?                                 |
| 01:09:35   | Yeah. Well, sort of. I mean, you connect your devices, even the Home Kit devices can be connected         |
| 01:09:41   | to [[Home Assistant]] and then that just gives you a lot more options in terms of multiple conditions.        |
| 01:09:46   | I will check it out again. I will take another look.                                                      |
| 01:09:49   | I just bought hardware. I mean, someone like you is probably just going to program it on                  |
| 01:09:53   | something you've got in your house but I actually bought the [[Home Assistant]] yellow device,                |
| 01:09:57   | you know, which is like a little mini PC that's a [[Home Assistant]] server.                                  |
| 01:10:02   | And I'm just getting into it. This is one part where I wish Rose was here because she is a pro            |
| 01:10:07   | at [[Home Assistant]]. But I'm starting to get things hooked up. And like for instance, I had an              |
| 01:10:14   | automation at Home Kit that said if I walk into my little studio room and it's dark out and then          |
| 01:10:22   | since it's motion, turn the lights on at this level. But then the problem is if I change the              |
| 01:10:28   | light level and the lights are already on, it switches them back to the automation.                       |
| 01:10:38   | And like with [[Home Assistant]], I can totally fix that. I can say if the lights are already on,             |
| 01:10:42   | then don't run. And there's just like a lot of more stuff I can do with [[Home Assistant]].                   |
| 01:10:48   | And I'm just kind of on the beginning of the learning curve for it. But it is way more powerful.          |
| 01:10:55   | All right. I will check that out because what you just described, I have that exact same automation       |
| 01:11:01   | setup in Indigo where I have a motion detector on my office. If I walk in and it's between certain        |
| 01:11:07   | hours, it will turn on the lights to 20%. And then if I, after sitting in, you know,                      |
| 01:11:15   | semi-darkness for a while, decide, okay, my eyes have adjusted. If I hit a button on my [[Stream Deck]]       |
| 01:11:21   | that raises the lights to 100%, it registers that I have manually overridden. And next time that          |
| 01:11:29   | motion detector goes off, it will just give me back to 100% until the next, that night cycle              |
| 01:11:36   | happens again. I think that's totally possible with [[Home Assistant]]. Yeah. Okay. Good to know.             |
| 01:11:41   | And [[Home Assistant]] does have a lot of wood behind the arrow right now. There's just a lot going on        |
| 01:11:47   | with it. They've got, they're selling hardware for people who just want to buy a plug-in box.             |
| 01:11:51   | That's what I did. But you can also install it yourself and do things with it. But                        |
| 01:11:56   | cool. It is, it's pretty cool. But I really like the idea of these controllers on their own network       |
| 01:12:04   | and the stuff that's coming out of that. I feel like we're getting a lot more of it and it's              |
| 01:12:08   | getting cheaper and all that stuff can be hooked into [[Home Assistant]]. But I mean, that stuff can          |
| 01:12:12   | also be hooked into [[HomeKit]], but it's just not as powerful. Yeah. Like I have, I don't know if            |
| 01:12:17   | you're familiar with this company, [[Aqara]], A-Q-A-R-A. I followed a link in your newsletter and I           |
| 01:12:23   | checked out their hardware that looked intriguing. Rose turned me on to that too, but I am like           |
| 01:12:29   | all in because they've got their own base unit. So they're on their own frequency                         |
| 01:12:37   | but you can put like 150 items on it or something. And the peripherals are relatively cheap like,         |
| 01:12:45   | you know, $15 water sensor or something. So like I've got the sensors under all the sinks                 |
| 01:12:50   | and the toilets and the water heater. So if things leak, I find out about it. I'm putting                 |
| 01:12:55   | vibration sensors and kind of building my own home automation. And the hub, the hub has 360 degree        |
| 01:13:02   | [[IR Blaster\|IR blasting]]. So you can automate anything with an [[IR\|infrared]] remote. Yeah. That was intriguing too,         |
| 01:13:10   | if you want to use it as an alarm system. They've just got a lot of good stuff and                        |
| 01:13:16   | they just released, it's only available at this point in Asia. I ordered one off of Ali Express,          |
| 01:13:21   | but I haven't received it yet, but they have what they call it. I've ordered from Ali and                 |
| 01:13:26   | it can take a while. Yeah, I know. I feel like it's like one of those things where one day                |
| 01:13:30   | shows up and you're like, oh, there you go. After you've forgotten, you ordered it. But they have         |
| 01:13:35   | this thing called a [[Human Presence Sensor\|human presence sensor]]. And Rose got one, she likes it. One of the members of          |
| 01:13:41   | my labs got one and he likes it. But apparently it's like a rock solid, you know, sensor that can         |
| 01:13:48   | tell if a human is in the room. So it's not just IR. It's not just motion. I'm not sure what it is,       |
| 01:13:54   | but apparently it works really well. And if I could reliably tell what I have somewhat in                 |
| 01:14:00   | the room or not, that gives me a lot more power. Yeah, that would be superior to a motion detector        |
| 01:14:09   | that you have to place at exactly the right angle in the right spot. Especially when you have a           |
| 01:14:15   | motion sensor in a room where you're sitting in front of a computer and you don't move much and           |
| 01:14:20   | then it thinks you're not there anymore. But yeah, so there's some really interesting stuff               |
| 01:14:25   | out there right now. And I feel like [[Matter]] is going to be a success. I don't see how it can't            |
| 01:14:30   | because there's no competition to it. All the big players are in on it. Yeah. As long as you              |
| 01:14:36   | have the buy in from the big three, you're good. Yeah. And I think they've already, I don't know          |
| 01:14:41   | this for a fact, but I think they've already even announced with the latest Mac Ventura update that     |
| 01:14:46   | has [[Matter]] support now. It's like they're putting it in stuff and products are starting to ship now       |
| 01:14:52   | with [[Matter]] in it. And I don't think that means your existing home kit stuff is going to stop             |
| 01:14:57   | working. I don't think [[Apple\|Apple's]] ever going to not support home kit. But going forward, you don't           |
| 01:15:03   | have to, that's no longer the gating issue for you. Yeah. Anything that's [[Matter]] will work.               |
| 01:15:08   | Well, that'll make it way easier for third party developers. Like when I see an automation hardware       |
| 01:15:15   | item like on [[Amazon]] or whatever, they always have to list works with, works with, works with.             |
| 01:15:22   | Exactly. And if there was one protocol that they could just say [[Matter]] supported, and I think it          |
| 01:15:28   | would ease their development time and make devices even cheaper. Yeah. Agreed. I totally agree. And       |
| 01:15:35   | like some of the stuff with home kit just stops working after a while. We're setting up the Christmas     |
| 01:15:42   | tree this weekend. And I got out my Christmas tree switch. It's just you plug it in the wall,             |
| 01:15:50   | it's a way to turn the lights on. And the manufacturer stopped to stop updating that piece                |
| 01:15:58   | of hardware that I bought like four years ago. And it took me like 20 minutes to realise, oh no,          |
| 01:16:04   | there's nothing wrong with this, except it just no longer works and it's trash. Yeah.                     |
| 01:16:09   | But the, so it's coming along. And I think it's going to get a lot easier for people who don't            |
| 01:16:14   | want to go like the home assistant super route. But I think it's going to get easier for people who       |
| 01:16:19   | want to do that too. Because if we have one protocol, you know, then there's only one,                    |
| 01:16:25   | it's like the United Nations of home automation, right? Every only one language is being spoken.          |
| 01:16:29   | And then all of a sudden we get, you know, anything can possibly work. Yeah. But when I                   |
| 01:16:36   | talked to you, it was like you had this [[Rube Goldberg]] thing going on, you know, where I                   |
| 01:16:40   | think it was buttering your toast or something. I forget you were doing so much with it. I'm              |
| 01:16:44   | surprised that you're a little behind on it now. Yeah. I keep exploring different like avenues            |
| 01:16:54   | for the future because I don't see a future for like my legacy setup. Yeah. So I'm constantly             |
| 01:17:02   | trying out like, I need to, I need it to work with, you know, Alexa or I need it to work with             |
| 01:17:08   | Siri or I need it to work with Indigo. And I've just been trying to figure out what the best              |
| 01:17:13   | path forward before I invest any more money in hardware. I get it. I need to, I need to know              |
| 01:17:22   | like what my, my brain behind the whole thing is going to be. Yeah. Well, look at home assistant.         |
| 01:17:27   | Let me know what you think. Cause I feel like that might be kind of the middle path right now.            |
| 01:17:32   | And it's, it's definitely pretty powerful. I, I haven't gone as deep down it as Rose has. I'm             |
| 01:17:39   | kind of at the beginning, but I have not run into any situation. Like I couldn't figure out yet. And      |
| 01:17:44   | one of the things I really like about it is the history. Like it shows you the history of the             |
| 01:17:48   | data collected by the sensor, which gives you a lot of insight when you're building your automations      |
| 01:17:54   | as to what's working and what's not. Yeah. Cool. I'll check it out. All right. So Brett,                  |
| 01:18:00   | where can people find you these days? I am as always at [brettterpstra.com](https://brettterpstra.com). That's three T's in            |
| 01:18:07   | the middle. You can find all of my projects there, links to all of my social media. If you're looking     |
| 01:18:15   | for me on Twitter or Macedon or whatever, I'm everywhere. I am ttscoff, ttscoff. And that will,           |
| 01:18:28   | that will generally find me. You can even go to ttscoff.me on the web and it will take you to             |
| 01:18:33   | brettterpstra.com. So ttscoff. And, and like, I don't have any links for Oracle or anything,              |
| 01:18:40   | but you can find my podcast at overtiredpod.com. That's the podcast I do with Christina Warren            |
| 01:18:49   | from GitHub and Jeff Severn's Guntzel. It has been a blast. We have become very much a mental health       |
| 01:18:57   | podcast. I recommend anyone who has, especially neurodiverse, if you have ADHD, autism, bipolar            |
| 01:19:06   | disorder, any of that, or someone in your, in your life does, I definitely recommend tuning in.           |
| 01:19:12   | You get three people talking very openly and honestly about mental health and Taylor Swift.               |
| 01:19:19   | I don't think you could have Christina Warren on a podcast without Taylor Swift coming up.                |
| 01:19:23   | Right. Yeah. You know, we didn't even mention all of Brett's projects. I'm going to put a specific        |
| 01:19:29   | link in the notes to Brett's project page. Like, how's it? That's a new one. Give us just a brief         |
| 01:19:36   | description of how's it. So how's it lets you in? So it's a command line tool. So when you're working     |
| 01:19:43   | on a project that, that has like, you know, you're in the command line, it lets you take notes in         |
| 01:19:51   | markdown as to how to do each thing that the project needs to do, whether it's build or deploy            |
| 01:19:58   | or edit. And you can include runnable tasks in the markdown notes. So then you can type how's             |
| 01:20:08   | it as in how does it, how's it, and then how's it deploy, and it will tell you how it deploys,            |
| 01:20:16   | or you can type how's it minus our deploy, and it will run all of the tasks in the deploy                 |
| 01:20:21   | section of the notes. So you can automate and like, basically, for every project that I build,            |
| 01:20:29   | I have a deploy section of the notes. So in anything I'm working on, I don't have to remember             |
| 01:20:35   | specifically what the steps are to deploy that project. I can just write how's it minus our               |
| 01:20:41   | deploy. And no matter what project I'm in, the correct steps will be taken. So it gives me a              |
| 01:20:47   | kind of a universal make file, if you will. But it allows me to keep notes on everything in markdown      |
| 01:20:54   | and always be able to build and deploy and whatever else I need to do with the project.                   |
| 01:21:00   | Once again, proving you literally are the mad scientist of Mac automation.                                |
| 01:21:06   | I had a problem. I solved it. Yeah, you did. And you shared it, which is, which is awesome.               |
| 01:21:10   | There's so much more we could have talked about today, Brad. I like we touch on better touch              |
| 01:21:14   | tool, but at some point, I need to like get you on a microphone and hear your better touch                |
| 01:21:19   | tools. But today on automators max, we're going to talk about Brett's ultimate hackers keyboard           |
| 01:21:26   | and what he's doing with it. Okay, that's going to wrap it up. We are the Automators podcast.             |
| 01:21:30   | You can find us at relay.fm/automators. Thank you to our sponsors today,                            |
| 01:21:35   | TextExpander Electric and Hover. And we'll see you next time.                                          |

[^1]: [[Matter]] is actually a *connectivity standard* that utilises protocols such as Wi-Fi, [[Thread]], and [[Ethernet]]. It is not itself a protocol.