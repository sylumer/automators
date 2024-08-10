---
status: incomplete
fc-date:
  year: 2021
  month: 7
  day: 30
fc-category: podcast
podcast: Automators
published: 2021-07-30
duration: 3763
formattedduration: 01:02:43
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Zachary Lineman
notetype: episode
showpage: http://relay.fm/automators/81
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators081.mp3
episode: 81
title: "81: Shortcuts for Mac with Developer Zachary Lineman"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode of Automators, Rosemary and David are joined by Zach, the creator of Jellycuts - a text IDE for Shortcuts.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Zachary Lineman]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 081 Discussion](https://talk.automators.fm/t/81-shortcuts-for-mac-with-developer-zachary-lineman/11998)

# Sponsors
- [[HPE Tech Talk (Sponsor)|HPE Tech Talk]] - HPE news, tech Insights and world-class innovations. Listen now.
- [[Audible (Sponsor)|Audible]] - Stories that speak to you.

# Show Notes
- [Jellycuts](https://jellycuts.com/)
- [Zachary Lineman](https://actuallyzach.com/)
- [Hacking with Swift – learn to code iPhone and iPad apps with free Swift 5.4 tutorials](https://www.hackingwithswift.com/)
- [sebj/iOS-Shortcuts-Reference: Reference documentation for the iOS Shortcuts app file structure](https://github.com/sebj/iOS-Shortcuts-Reference)
- [Jellycuts Documentation](https://jellycuts.com/documentation)
- [Shortcuts SubReddit](https://www.reddit.com/r/shortcuts/)
- [Jayson](https://jayson.app/)

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators.                                                                    |
| 00:04      | I'm Rosemary Orchard, and I'm joined, as always, by my co-host, David Sparks.                        |
| 00:08      | And we're going to talk about how to automate technology to make magic happen.                       |
| 00:11      | And in this case, we're upgrading some of your magic.                                                |
| 00:13      | Hey, David, how are you today?                                                                       |
| 00:14      | I'm great, Rose.                                                                                     |
| 00:16      | I haven't talked to you for a while.                                                                 |
| 00:18      | I miss talking to you.                                                                               |
| 00:20      | I miss talking about automation.                                                                     |
| 00:21      | We got all these cool betas going around.                                                            |
| 00:23      | Yeah.                                                                                                |
| 00:24      | Yeah.                                                                                                |
| 00:25      | So much broken stuff.                                                                                |
| 00:26      | And we got a great guest today.                                                                      |
| 00:28      | Yes.                                                                                                 |
| 00:29      | Welcome to the show.                                                                                 |
| 00:30      | Actually, Zach or Zachary Lyman.                                                                     |
| 00:32      | Hi.                                                                                                  |
| 00:33      | Hello.                                                                                               |
| 00:34      | Thank you for having me.                                                                             |
| 00:35      | So for people who don't know, Zachary Lyman is the creator of Jellycuts.                            |
| 00:40      | And Jellycuts is a great application to enhance shortcuts' experiences, potentially.                |
| 00:45      | So yeah, we're going to have plenty of fun things to talk about today.                               |
| 00:48      | I mean, Zach built his own interface to make creating shortcuts easier, and we're going              |
| 00:54      | to get into that.                                                                                    |
| 00:55      | We got a link in the show notes.                                                                     |
| 00:57      | My only warning to the listeners, and I got to do this, I'm sorry, Zach, when you go watch           |
| 01:02      | the demo video, he picked the most awesome music.                                                    |
| 01:07      | So if you are okay singing it for like a week after you watch the video, leave the audio             |
| 01:12      | on.                                                                                                  |
| 01:13      | If you're not, you should hit mute immediately and watch the video.                                  |
| 01:17      | But anyway, sorry.                                                                                   |
| 01:18      | It is definitely an earworm.                                                                         |
| 01:20      | I woke up singing the Jellycuts demo music today, and I have you to blame for that.                 |
| 01:27      | But anyway.                                                                                          |
| 01:28      | That's fair.                                                                                         |
| 01:29      | Yeah.                                                                                                |
| 01:30      | So you were a developer, and you've made some really cool stuff for us automators.                   |
| 01:34      | But I thought, why don't we start, just kind of tell us a little bit about yourself.                 |
| 01:38      | I'm a high school senior this year, going into my senior year.                                       |
| 01:42      | I've been working on iOS apps for about two or three years now, but I didn't really get              |
| 01:48      | started until, I guess, two marches ago, the March of 2020, when someone reached out to              |
| 01:56      | me and asked if I wanted to help out on an iOS app, and I agreed, and then just started              |
| 02:00      | going from there.                                                                                    |
| 02:01      | Yeah.                                                                                                |
| 02:02      | So he's a high school senior, and he made an IDE for shortcuts.                                      |
| 02:07      | I am feeling like I am completely useless at this point.                                             |
| 02:12      | Maybe I should just go jump off a bridge.                                                            |
| 02:14      | I don't know.                                                                                        |
| 02:15      | David, you're a lawyer, you've chosen to do different things up until this point.                    |
| 02:19      | That doesn't mean you failed.                                                                        |
| 02:21      | Anyway, that's impressive, Zach, because this app is really great, and that you've only              |
| 02:27      | got a few years into it.                                                                             |
| 02:28      | That is super impressive.                                                                            |
| 02:30      | Yeah.                                                                                                |
| 02:31      | So what have you done, Rose?                                                                         |
| 02:34      | Yeah.                                                                                                |
| 02:35      | So I'm 30, feeling slightly inadequate.                                                              |
| 02:39      | No, it's fine.                                                                                       |
| 02:41      | Everybody takes a different path through life, and just because you'd start out super early          |
| 02:44      | on something doesn't mean it's going to be your thing forever.                                       |
| 02:47      | But Zach, I think you've got a pretty good thing going here.                                         |
| 02:49      | Thank you.                                                                                           |
| 02:50      | And I'm curious, how did you come up with the idea for Jellycuts?                                    |
| 02:55      | Because Jellycuts isn't just a different UI to drag and drop LEGO bricks, which is what             |
| 03:00      | shortcuts does.                                                                                      |
| 03:02      | It's a text-based development environment, which generates shortcuts.                                |
| 03:08      | And the first couple of times I saw this, I was like, my brain doesn't get this, and                 |
| 03:13      | I'm a developer.                                                                                     |
| 03:14      | Okay, so I use an ID all day, and I have all these things where I type stuff and magic               |
| 03:22      | happens.                                                                                             |
| 03:23      | But for some reason, my brain couldn't fathom doing this with shortcuts until I sat down             |
| 03:26      | and actually properly played with it for a while.                                                    |
| 03:29      | But how did you come up with the idea?                                                               |
| 03:32      | So I was actually, I was bored at work, and I was like, I want to do something on my break.          |
| 03:41      | I was like, oh, well, I guess I can code some stuff.                                                 |
| 03:46      | And I like working with shortcuts and just making automations.                                       |
| 03:49      | So I was like, I wonder if I can combine the two and kind of encode while also making shortcuts      |
| 03:55      | so I can do something.                                                                               |
| 03:56      | Because I can't code like my apps while I'm not home because I need my laptop.                       |
| 04:01      | So I was like, all right, well, what can I code while I'm not at home?                               |
| 04:04      | So I decided I'll try and figure something out with shortcuts.                                       |
| 04:08      | So I saw something on the shortcuts of Reddit actually, saying that you can edit shortcuts           |
| 04:14      | like by changing the P list.                                                                         |
| 04:16      | And from there, I don't know how the idea came up, but I was just like, oh, if I can                 |
| 04:21      | edit them there, I can make text that'll convert into those P lists and create shortcuts based       |
| 04:29      | on that.                                                                                             |
| 04:30      | So the idea kind of just like spiraled out of me wanting to code outside of my computer              |
| 04:34      | like on my phone until what can I code on my phone easily?                                           |
| 04:39      | Yeah.                                                                                                |
| 04:40      | I believe P list stands for preferences list, doesn't it?                                            |
| 04:43      | Yes.                                                                                                 |
| 04:44      | Yeah.                                                                                                |
| 04:45      | I'm pretty sure.                                                                                     |
| 04:46      | Yeah.                                                                                                |
| 04:47      | So for people who are thinking, I'm still not quite sure what that means.                            |
| 04:50      | If you imagine just a configuration file that gets loaded in, that's what it is.                     |
| 04:55      | It's basically a do this.                                                                            |
| 04:57      | Just like a bunch file is a list of text commands.                                                   |
| 05:02      | This is kind of the same thing only with more complex formatting.                                    |
| 05:05      | Yeah.                                                                                                |
| 05:06      | It's like fancy JSON.                                                                                |
| 05:07      | Yeah.                                                                                                |
| 05:08      | Yeah.                                                                                                |
| 05:09      | Fancy JSON.                                                                                          |
| 05:10      | It's a very good way to put it.                                                                      |
| 05:11      | A little history lesson.                                                                             |
| 05:12      | Back in the workflow days, that was a method that they used to allow you to export and               |
| 05:17      | share shortcuts or workflows.                                                                        |
| 05:20      | And then when the workflow got purchased by Apple, there was a couple years of uncertainty           |
| 05:26      | whether Apple was going to make that a thing or not.                                                 |
| 05:28      | And now it seems like they fully embraced it and the export methods that we've got coming            |
| 05:35      | with iOS 15 and as Zach has already discovered with the P list of, we are able to edit those         |
| 05:42      | files and create and move shortcuts that way.                                                        |
| 05:45      | So that just gave you a vector into the application.                                                 |
| 05:48      | Yeah.                                                                                                |
| 05:49      | It gave me just a quick path to edit them.                                                           |
| 05:52      | Yeah.                                                                                                |
| 05:53      | So you said that one of the things that you enjoy doing is creating shortcuts.                       |
| 05:57      | What are the kinds of shortcuts that you use most frequently?                                        |
| 06:00      | Do you have a couple of examples maybe?                                                              |
| 06:04      | Most frequently, I don't use it as much right now because I'm on spring or summer break,             |
| 06:08      | but I have a shortcut that pulls my school's assignments thing.                                      |
| 06:14      | So where they store all of our assignments and I can pull it into just [[Apple Reminders\|Reminders]] on                  |
| 06:17      | my phone.                                                                                            |
| 06:18      | Yeah.                                                                                                |
| 06:19      | So that was really useful, especially for virtual learning where I couldn't keep track               |
| 06:24      | of all the assignments I got all the time, so I was able to just pull them right off                 |
| 06:27      | and put them on my phone.                                                                            |
| 06:28      | So that was super nice.                                                                              |
| 06:30      | Okay.                                                                                                |
| 06:31      | So let me stop you there.                                                                            |
| 06:32      | Let me stop you there with that one.                                                                 |
| 06:33      | So it's a web service probably from the school where the assignments are getting posted.             |
| 06:38      | Yeah.                                                                                                |
| 06:39      | Yeah.                                                                                                |
| 06:40      | We use Canvas.                                                                                       |
| 06:41      | So Canvas allows you to have like RSS feeds of all your assignments and stuff and calendars.         |
| 06:45      | So you can have like a calendar and RSS feeds.                                                       |
| 06:48      | So that once you have an RSS feed, that makes it really easy.                                        |
| 06:51      | Yeah.                                                                                                |
| 06:52      | Yeah.                                                                                                |
| 06:53      | So it's really easy just to mix the calendar they give me and the RSS feed they give me              |
| 06:57      | together and just make assignments off of that.                                                      |
| 07:00      | Yeah.                                                                                                |
| 07:01      | That's a really smart way to do it.                                                                  |
| 07:02      | How did you handle processing things that you'd already seen?                                        |
| 07:06      | Did you just check back to see in say like the note of the reminder if it was there or               |
| 07:11      | do you just run it once and you grab that week and then the next week you run it again?              |
| 07:16      | Yeah.                                                                                                |
| 07:17      | So I ran it every Monday morning because that's a lot of our assignments were posted Monday          |
| 07:22      | morning.                                                                                             |
| 07:23      | So I'd run it Monday morning and have it just gather everything from the week.                       |
| 07:29      | And then I just like periodically check on Canvas to make sure nothing else showed up                |
| 07:33      | randomly, but that's usually what I would use.                                                       |
| 07:36      | Yeah.                                                                                                |
| 07:37      | Yeah.                                                                                                |
| 07:38      | That makes a lot of sense.                                                                           |
| 07:39      | Yeah.                                                                                                |
| 07:40      | I mean, I'm sure you could build something with like a unique ID and stick it in the                 |
| 07:42      | note of the reminder, but that feels like it's going to get very complicated very quickly.           |
| 07:46      | And as I'm sure you're familiar with sometimes keeping things simple is the best approach.           |
| 07:51      | Yeah, definitely.                                                                                    |
| 07:53      | So how did you get started with coding for, in general, because you said you helped out              |
| 08:01      | a couple of matches ago with an iOS app.                                                             |
| 08:03      | Did you already know [[Swift]] before that or was it just that you had a great idea and                  |
| 08:07      | somebody brought you on?                                                                             |
| 08:08      | I actually started programming [[Swift]] when it came out.                                               |
| 08:13      | So back in, well, my school is like an enrichment program, and so in the enrichment program back     |
| 08:21      | when [[Swift]] came out, I wanted to do something with it.                                               |
| 08:24      | So I guess that was 2015 or 2014.                                                                    |
| 08:28      | I was like, I want to do a project on that.                                                          |
| 08:30      | So my enrichment teacher let me and another student make a game in [[Swift]].                            |
| 08:37      | So that's where I first had my first experience with it.                                             |
| 08:39      | I didn't learn really much at all from that, but it's what put me on the path towards learning.      |
| 08:45      | And then I just continued to kind of work on it and continuously just keep learning [[Swift]].           |
| 08:51      | So I was building small apps that never made it anywhere up until someone invited me into            |
| 09:00      | like onto an app that they wanted to build and wanted me to program.                                 |
| 09:03      | So that's where I really learned a lot of what I know now because I needed to make an                |
| 09:07      | app that would work on the app store.                                                                |
| 09:09      | Yeah.                                                                                                |
| 09:10      | So I guess I've just been learning [[Swift]], just building on it as I go.                               |
| 09:16      | Yeah.                                                                                                |
| 09:17      | Yeah.                                                                                                |
| 09:18      | That makes sense.                                                                                    |
| 09:19      | What kind of resources have you been using for our other listeners who are curious, you              |
| 09:22      | know, I want to learn [[Swift]] as well?                                                                 |
| 09:24      | You know, obviously I'm guessing when [[Swift]] first came out, that's when they were at the             |
| 09:28      | Apple resources and the Apple resources and that was it.                                             |
| 09:32      | But nowadays, of course, there's a little bit more out there.                                        |
| 09:35      | When I first started off, I was using YouTube, just like YouTube tutorials.                          |
| 09:39      | And that's what I've really used for a long time.                                                    |
| 09:42      | I'll just go on YouTube.                                                                             |
| 09:43      | And if I want to learn something, I'll look up what I want.                                          |
| 09:46      | And then also Stack Overflow and hacking with [[Swift]] have been really good, especially hacking        |
| 09:52      | with [[Swift]] because those tutorials are just perfect.                                                 |
| 09:55      | They tell you exactly what you need to know for what you're trying to do.                            |
| 09:58      | So that's what I've been using a lot more recently because I've gotten more into the                 |
| 10:01      | [[SwiftUI]] stuff.                                                                                      |
| 10:03      | So using that [[SwiftUI]] reference is nice.                                                            |
| 10:06      | Yes.                                                                                                 |
| 10:07      | Yeah.                                                                                                |
| 10:08      | Yeah.                                                                                                |
| 10:09      | No, I've heard very good things about hacking with [[Swift]] and I've done some of the little            |
| 10:12      | bits on there as well.                                                                               |
| 10:14      | Unfortunately, I have that slight problem of having a day job and needing a bit more time            |
| 10:17      | to do all of the things in a day where, you know, I'm sitting here podcasting.                       |
| 10:22      | I could be learning [[Swift]], David.                                                                    |
| 10:23      | I could be learning [[Swift]], but, you know, it's okay.                                                 |
| 10:27      | I don't think we're losing any great apps by me sitting here podcasting.                             |
| 10:29      | In fact, I think we're getting a lot more out of it this way.                                        |
| 10:32      | And so Zach, you know, I'm just taking a look at Jellycuts here and, you know, we'll dive           |
| 10:39      | into a little bit more of the detail of this in a moment, but obviously this is a written            |
| 10:44      | language.                                                                                            |
| 10:45      | Okay.                                                                                                |
| 10:46      | So instead of like a blocks, we've got text.                                                         |
| 10:48      | Did you base this text on [[Swift]] or did you base it on another language?                              |
| 10:54      | It's mostly, yeah, mostly based on a lot of it's based on [[Swift]] and how [[Swift]] kind of                |
| 10:59      | declares things.                                                                                     |
| 11:00      | Yeah.                                                                                                |
| 11:01      | So one of the community, like the Shortcuts community knows JavaScript from when I found.            |
| 11:05      | Yes.                                                                                                 |
| 11:06      | So I've taken things from JavaScript and use them in the language.                                   |
| 11:11      | So like, no, like variables aren't like you don't declare your types on variables or anything.       |
| 11:18      | So that's one thing I took, I guess from [[Swift]] and kind of from JavaScript at the same time.         |
| 11:23      | But it's mostly, yeah, it's a mix of [[Swift]] and JavaScript to get what it is now, but                 |
| 11:29      | I've been slowly expanding it more and it'll probably go more in the direction of [[Swift]]              |
| 11:34      | just because that's what I know more of.                                                             |
| 11:36      | Yeah.                                                                                                |
| 11:37      | But as I learn more JavaScript, there may be more JavaScript-esque things that show up.              |
| 11:42      | Yeah.                                                                                                |
| 11:43      | Yeah.                                                                                                |
| 11:44      | That makes sense.                                                                                    |
| 11:45      | And I'm not surprised that a lot of Shortcuts users know JavaScript.                                 |
| 11:47      | First of all, there's of course the Shortcuts action to run JavaScript on a web page, which           |
| 11:50      | I'm sure a lot of people have hacked.                                                                |
| 11:52      | And if people haven't played with that yet, they should do it, do it.                                |
| 11:56      | It's a bookmarklet.                                                                                  |
| 11:57      | Just think of it as a bookmarklet.                                                                   |
| 11:58      | You can do things.                                                                                   |
| 11:59      | And of course, we've got other great applications like Scriptable and [[Drafts]].                        |
| 12:04      | And even Omni's applications, which have got Omni Automation in them, which uses JavaScript,         |
| 12:08      | all of them use JavaScript.                                                                          |
| 12:10      | So it's not a surprise to see people who are familiar with JavaScript.                               |
| 12:14      | But I'm pleased you haven't just limited yourself to it because of course Shortcuts isn't [[Swift]].     |
| 12:19      | It's not JavaScript.                                                                                 |
| 12:20      | Yeah.                                                                                                |
| 12:21      | It's not Ruby.                                                                                       |
| 12:22      | It's certainly not PHP.                                                                              |
| 12:23      | It's its own thing.                                                                                  |
| 12:24      | So yeah, making your own here, definitely to me, makes sense.                                        |
| 12:29      | And I have to say, I'm really glad you didn't do typed variables where something has to              |
| 12:33      | be a string.                                                                                         |
| 12:34      | And then when I want to change it later to be an integer, it breaks things because Shortcuts         |
| 12:39      | doesn't force that on you either.                                                                    |
| 12:41      | If you tap on a variable, then you might see as text, but then you can change it to as               |
| 12:45      | dictionary and things like that.                                                                     |
| 12:47      | So it's not strongly typed either, at least from my perspective.                                     |
| 12:52      | So I'm very glad that you didn't force us down that path.                                            |
| 12:54      | Yeah.                                                                                                |
| 12:55      | I definitely want to stick to how Shortcuts does things where nothing is set in stone                |
| 12:59      | really.                                                                                              |
| 13:00      | You can just change a variable completely, like halfway through a shortcut.                          |
| 13:05      | So I wanted that to be possible in Jellycuts.                                                        |
| 13:07      | Yeah.                                                                                                |
| 13:08      | And yeah, a lot of the declaring your types comes when you use the variable with the casting         |
| 13:13      | to text or task, casting to a number and stuff.                                                      |
| 13:17      | Yes.                                                                                                 |
| 13:18      | Yeah.                                                                                                |
| 13:19      | Yeah.                                                                                                |
| 13:20      | And people not familiar with casting, it's where you say, I'm going to take this                     |
| 13:21      | as this kind of thing.                                                                               |
| 13:23      | I'm going to pick this up and it's going to be text now, or I'm going to pick this up                |
| 13:27      | and it's going to be a URL, and taking text and making it into a URL is fairly easy, but             |
| 13:33      | taking numbers and making them into a URL is something, I mean, you're probably going                |
| 13:37      | to break your shortcut if you do that, whether you do that in Shortcuts or Jellycuts or indeed       |
| 13:41      | any other application, I think that's probably going to break things.                                |
| 13:46      | Well, please do try that at home and let me know because 8.8.8.8 is a DNS.                           |
| 13:52      | So maybe it'll work.                                                                                 |
| 13:53      | I don't know.                                                                                        |
| 13:54      | We'll find out.                                                                                      |
| 13:56      | Somebody will let me know.                                                                           |
| 13:57      | I'm sure.                                                                                            |
| 13:58      | We always get plenty of feedback.                                                                    |
| 14:00      | Zach, in addition to making an impressive application, I am actually really impressed                |
| 14:05      | with your documentation.                                                                             |
| 14:07      | I'm not a developer and I got the app.                                                               |
| 14:11      | I played with it, but then I went on your website at Jellycuts.com and the documentation             |
| 14:16      | there is very well made.                                                                             |
| 14:18      | So even a bozo like me has been able to start writing Jellycuts programming.                         |
| 14:23      | Did you do the documentation yourself?                                                               |
| 14:25      | I did.                                                                                               |
| 14:26      | Yeah.                                                                                                |
| 14:27      | It's actually, the documentation is actually generated off of the code base like automatically.      |
| 14:33      | So yeah, a lot of it, I wrote a lot of that by myself.                                               |
| 14:35      | There are a few things that are like handwritten.                                                    |
| 14:38      | And I've been working on a documentation upgrade to make it even better.                             |
| 14:42      | But yeah, I wrote the documentation by myself.                                                       |
| 14:45      | That is really great because it does, if you're listening to this and you're saying, oh man,         |
| 14:51      | this sounds like it's too much for me, it's not, I would recommend go check out jellycuts.com        |
| 14:56      | and just click on the documentation tab because it really does walk you through with some            |
| 15:00      | simple ones.                                                                                         |
| 15:01      | And then, you know, that's the language of automation.                                               |
| 15:03      | You get a couple of simple things and you start chaining together and before, you know,              |
| 15:07      | you've got something fairly complex.                                                                 |
| 15:09      | And one of the things I like about this is it solves a problem with shortcuts of duplicating         |
| 15:15      | and modifying shortcuts.                                                                             |
| 15:17      | It still isn't easy to do that, you know, like on the Mac, we can like, I'm a keyboard               |
| 15:23      | maestro fan and I can select, you know, I can select a hundred blocks of [[Keyboard Maestro]],           |
| 15:29      | hit command C, go into another [[Keyboard Maestro]] script and paste them all at once and then           |
| 15:33      | make my modifications.                                                                               |
| 15:35      | But with shortcuts, it's only one at a time.                                                         |
| 15:39      | And with this language you have, I can just copy a text file or duplicate text file, make            |
| 15:44      | a couple tweaks and then have an entirely separate shortcut built out of it.                         |
| 15:49      | So you really are giving us something here that we need.                                             |
| 15:53      | Yeah, a lot of the big, really big point of it was, yeah, copy and pasting.                          |
| 15:58      | Before shortcuts had copy and paste itself, it was really nice to be able to do that.                |
| 16:03      | And then, yeah, just being able to copy and paste more than just like a single block is              |
| 16:08      | really nice.                                                                                         |
| 16:09      | Yeah.                                                                                                |
| 16:10      | Yes.                                                                                                 |
| 16:11      | Yeah, it really is.                                                                                  |
| 16:12      | That's something I struggle with frequently in shortcuts where I have, you know, say five            |
| 16:18      | or six items in an if and I need to put the same items into an else and just change them.            |
| 16:23      | And of course I could set a whole bunch of variables and then pull those variables out               |
| 16:27      | and do it afterwards.                                                                                |
| 16:28      | But once I've already set things up, I found myself dragging in repeats and wrapping a repeat        |
| 16:32      | around the block and then duplicating the repeat, which gets everything inside of it.                |
| 16:36      | And I ended up leaving the repeat there because repeat one, guess what, it just, it doesn't          |
| 16:39      | do anything.                                                                                         |
| 16:40      | It just skips it.                                                                                    |
| 16:41      | It feels really hacky to be doing that, especially right now on iOS 15, where how do I put this?     |
| 16:48      | Drag and drop is feeling very broken.                                                                |
| 16:51      | Things don't land where I expect them to.                                                            |
| 16:53      | I have sent feedback to Apple on this.                                                               |
| 16:55      | I am sure the shortcuts team is aware of this.                                                       |
| 16:58      | But yeah, it's one of those things where, you know, it's difficult.                                  |
| 17:01      | And also things like I'm going to use a really basic example here, setting the volume on             |
| 17:06      | your device.                                                                                         |
| 17:07      | Okay.                                                                                                |
| 17:08      | So you can type a number and then if you tap and hold on the volume, then you can select             |
| 17:12      | the number.                                                                                          |
| 17:13      | It feels pretty janky.                                                                               |
| 17:15      | It's precious.                                                                                       |
| 17:16      | Yeah.                                                                                                |
| 17:17      | It's like sometimes you have to hit it just right in order to register.                              |
| 17:21      | And I don't know what.                                                                               |
| 17:22      | I think that's just part of the beta process.                                                        |
| 17:24      | Yeah.                                                                                                |
| 17:25      | I mean, it's been like that on iOS 14 as well and iOS 13.                                            |
| 17:30      | But in Jellycuts, I can type set volume with a capital V on volume because this is using             |
| 17:35      | a camel case, which is, you know, where everything's lowercase except that the start of the next     |
| 17:40      | variable, which is uppercase.                                                                        |
| 17:42      | And then I type the number in and that's it.                                                         |
| 17:45      | So if I want 73 for whatever reason, maybe 73 is the perfect number, I can type 73 and               |
| 17:51      | I'm not dragging on a little slider, trying to get my finger into exactly the right spot             |
| 17:55      | for it to hit 73.                                                                                    |
| 17:57      | I just type it and it's good.                                                                        |
| 18:00      | And so that, you know, that's the sort of thing where even if you think, oh, my shortcuts            |
| 18:05      | are super basic, I'm not going to get any benefit from Jellycuts.                                    |
| 18:09      | It's definitely easier to tweak things like that here in text and then send your shortcut            |
| 18:14      | back into shortcuts than it is to, you know, sit there fiddling around for 45 minutes trying         |
| 18:19      | to get your volume and brightness levels exactly right.                                              |
| 18:22      | I mean, I don't spend 45 minutes on it, but then I'm constantly peeved.                              |
| 18:27      | And everything is just off by a little bit.                                                          |
| 18:30      | Like it's not massively off, it's just off by a bit.                                                 |
| 18:33      | And that frustrates me.                                                                              |
| 18:34      | Yeah.                                                                                                |
| 18:35      | The shortcut setter does have a knack for just getting things just like kind of wrong                |
| 18:40      | when you do.                                                                                         |
| 18:41      | It's so close to being right, but then it's wrong and that frustrates me, but I understand           |
| 18:46      | why they don't have like a spinner of zero to 100 because imagine it's on zero and you               |
| 18:50      | want 100.                                                                                            |
| 18:51      | You're going to be really frustrated there.                                                          |
| 18:53      | So, you know, I think they're in a spot where the slider for most people is perfectly logical,       |
| 18:59      | but for those of us who really want to dial it in and get things super, you know, perfectionist      |
| 19:04      | maybe not the right word, but accurate is probably a better word than, yeah, this enables            |
| 19:11      | us to do that without needing to, you know, know how to program even because I just typed            |
| 19:15      | in set volume and it was right there.                                                                |
| 19:19      | It didn't come up why I typed volume people.                                                         |
| 19:20      | You need to check on the, in the documentation for what the, the action is called.                   |
| 19:24      | But if you type in, it looks to me and Zach, correct me if I'm wrong, that most of the               |
| 19:30      | time all of these met actions and so on are using basically the name of the shortcut just            |
| 19:36      | camel cased.                                                                                         |
| 19:37      | Yeah.                                                                                                |
| 19:38      | Yeah.                                                                                                |
| 19:39      | A lot of it is just the name of whatever the shortcuts action is.                                    |
| 19:42      | And then yeah, camel case, sometimes it's shortened just because shortcuts has long names            |
| 19:46      | for some of them.                                                                                    |
| 19:47      | Yeah.                                                                                                |
| 19:48      | But for the most part, it's pretty close to the shortcuts name.                                      |
| 19:52      | Yeah.                                                                                                |
| 19:53      | Like, so there's repeat and then there's repeat each instead of repeat with each, but you            |
| 19:57      | know, that, that, that just saves a little bit of typing.                                            |
| 20:00      | And of course, you know, if I start typing repeat, so I type rep, then it's suggesting               |
| 20:04      | a couple of things like, you know, replace text and because there's nothing that for                 |
| 20:08      | it to repeat with each on, but, you know, it will suggest things at the bottom as well.              |
| 20:13      | Just like you would expect from an iOS app with auto complete, only this is a little                 |
| 20:18      | bit better than auto complete.                                                                       |
| 20:19      | Let's face it.                                                                                       |
| 20:20      | I like another problem.                                                                              |
| 20:21      | The solves is when you have a long shortcut, I mean, I just did this yesterday and I was             |
| 20:26      | scrolling it.                                                                                        |
| 20:27      | And of course I moved a shortcut step, you know, because it happens when you're scrolling            |
| 20:33      | with shortcuts, you give you guys experience that where you accidentally move a block.               |
| 20:38      | And so like something like this, you just don't have problems like that.                             |
| 20:43      | But I would recommend this for people who are not program is because I just feel like                |
| 20:47      | you always want to work on that gray matter between your ears.                                       |
| 20:50      | If you know how to make shortcuts, this is really easy to kind of follow through and                 |
| 20:54      | then Zach has done all the hard work.                                                                |
| 20:56      | Like how did you figure out all these names and all these calls?                                     |
| 21:00      | I mean, did you just pull apart existing files or was there a resource for you?                      |
| 21:05      | Yeah, I spent about six of the or not even maybe like close to 10 of the 11 months of                |
| 21:14      | making the bait of Jellycuts, just tearing apart shortcuts itself.                                  |
| 21:19      | And just I got to the point where I had shortcuts that would pull apart.                             |
| 21:23      | It's like pull apart themselves and parse out the action I wanted just so I could get values         |
| 21:28      | from it.                                                                                             |
| 21:29      | Because the only way that I could find any of the values I needed from shortcuts was                 |
| 21:33      | just rip apart existing shortcuts and figure out how they work because none of this is               |
| 21:38      | documented to a point there is a documentation on GitHub that I'll have to find, but it's            |
| 21:44      | just about like the general parameters of shortcuts, but nothing specific for any of                 |
| 21:49      | the actions, which is what I needed.                                                                 |
| 21:51      | So I spent a lot of time reverse engineering the way shortcuts worked and just pulling               |
| 21:55      | out individual like, I guess, just individual dictionary entries that I need to put into             |
| 22:02      | the P list for each action, which took quite a while and I'm hoping to make it easier and            |
| 22:07      | future for myself, but it was definitely slow.                                                       |
| 22:11      | Yeah, I can imagine back when shortcuts was workflow, I had a shortcut and an air table              |
| 22:17      | and the and I so the shortcut basically went through the P list of a shortcut and it found           |
| 22:22      | all of the action names, it looked them up in air table, found the icon and then created             |
| 22:27      | like an indented bullet list of all the steps so that I could document it.                           |
| 22:33      | And the way that I created that was highly technical, I don't think anybody's ready                  |
| 22:38      | for this.                                                                                            |
| 22:39      | I dragged and dropped every single action into a single shortcut and then I fixed it.                |
| 22:44      | That's what I did.                                                                                   |
| 22:46      | Don't recommend that took way too long, but you know, it was what I could do back in the             |
| 22:51      | day.                                                                                                 |
| 22:52      | So, you know, it worked and I was able to create some some pretty fancy looking blog posts           |
| 22:56      | back in the day.                                                                                     |
| 22:57      | I've migrated CMS once since then and I'm in the process of migrating CMS again.                     |
| 23:01      | So I suspect some of that's broken and we'll get further broken, but I'll have to go back            |
| 23:05      | and fix it at some point.                                                                            |
| 23:08      | This episode of Automated is brought to you by Tech Talk, a podcast from the Fox at Hewlett          |
| 23:12      | Packard Enterprise.                                                                                  |
| 23:13      | I love finding new shows to listen to and as well as some being super interesting, it's              |
| 23:18      | even better when they slot right into my day and entertain me.                                       |
| 23:21      | And Tech Talk is the show that talks through HPE news, tech insights and world-class innovations.    |
| 23:27      | I recently listened to one of their older episodes on supercomputing and how it's not                |
| 23:31      | just for the elites.                                                                                 |
| 23:32      | I particularly found it interesting on the fact that they really want to bring this to               |
| 23:35      | the masses and the fact that everybody actually does have a supercomputer.                           |
| 23:40      | I think everybody would enjoy this podcast, especially because most episodes are less                |
| 23:43      | than 20 minutes, which means you can always slot it into your day somewhere.                         |
| 23:47      | And if you want to listen to, you can expect topics like how to tackle issues when it comes          |
| 23:51      | to high-performance computing, applying tech for the good of the people, planet and communities,     |
| 23:57      | and supercomputing aboard the International Space Station.                                           |
| 24:01      | And the show takes you straight to the source, interviewing some seriously impressive tech           |
| 24:05      | leaders, such as Dr. Michael Roberts from the ISS, US National Lab, Emily Christensen,               |
| 24:11      | a master candidate in applied science data at USC, and Monica Livingstone from Intel.                |
| 24:17      | Check out Tech Talk wherever you get your podcasts.                                                  |
| 24:20      | Search for Tech Talk now or click the link in the show notes.                                        |
| 24:23      | Our thanks to HPE Tech Talk for their support of this show and Relay FM.                             |
| 24:28      | So Zach, when you put this out into the world, what was the reaction and what surprised you          |
| 24:34      | the most about the response to this, to your app?                                                    |
| 24:38      | So a lot of the, when I first put it back out, I guess a year ago, over a year ago now,              |
| 24:43      | for the first like beta post, I got a lot of reaction from the shortcuts community,                  |
| 24:48      | like the r slash shortcuts on Reddit.                                                                |
| 24:51      | A lot of people were like, well, I really need this.                                                 |
| 24:53      | Like, I was really surprised that people, other people other than me, like wanted it                 |
| 24:57      | because I would think, oh, maybe like two or three other people.                                     |
| 25:00      | But there were quite a few people who responded that and who like actually wanted it and were        |
| 25:04      | looking for something exactly like that.                                                             |
| 25:08      | And then as like time went, like more and more people kept telling me how much like                  |
| 25:11      | they, they would like something like this.                                                           |
| 25:14      | And then when I finally got to release a lot of the, a lot, like I got a lot more publicity          |
| 25:18      | on the actual full release, which was nice because a lot more people started noticing                |
| 25:22      | it and like seeing it and stuff.                                                                     |
| 25:25      | So that was surprised me a lot and was pretty cool.                                                  |
| 25:28      | It's got to feel good, right?                                                                        |
| 25:31      | Something you make is out there helping people.                                                      |
| 25:33      | What's the craziest thing you've heard anyone doing with Jellycuts so far?                           |
| 25:38      | I have seen some people trying to like, I've seen people completely break shortcuts with             |
| 25:44      | it.                                                                                                  |
| 25:45      | Yeah.                                                                                                |
| 25:46      | I'm sure they could.                                                                                 |
| 25:47      | Yeah.                                                                                                |
| 25:48      | Wait, were they trying to do this or did they just do something really silly?                        |
| 25:51      | I'm not sure.                                                                                        |
| 25:52      | I've only ever seen the aftermath of it.                                                             |
| 25:54      | But yeah, it was a lot of people, yeah, are able to use it, a lot of people used it to               |
| 26:01      | like make when homescreen customisation was pretty big, having shortcuts that would like             |
| 26:06      | open your home screen, like go back to the springboard, which was super easy in Jelly                |
| 26:11      | Cuts, but not easy at all in shortcuts.                                                              |
| 26:13      | Right.                                                                                               |
| 26:14      | So that was probably like, that was probably the biggest use case during one of the betas            |
| 26:18      | back when I was 14 was like, yeah, like the customisation was coming out.                            |
| 26:23      | What are some other examples of things that are easier in Jellycuts than in shortcuts               |
| 26:28      | that you hear about?                                                                                 |
| 26:30      | Making things with big dictionaries.                                                                 |
| 26:32      | So if you ever like, you need to use like a big shortcuts dictionary with either like                |
| 26:35      | icons for whatever.                                                                                  |
| 26:37      | So a lot of people will put icons into their shortcuts and stuff.                                    |
| 26:41      | So if you're doing that in shortcuts, the editor gets really laggy because just the                  |
| 26:46      | dictionaries for some reason just completely kill it.                                                |
| 26:49      | And in Jellycuts, you can just use the JSON editor and the dictionary part of it to put             |
| 26:54      | them all in there.                                                                                   |
| 26:55      | And then you never have to actually look at those while you're editing.                              |
| 26:58      | So I think that that's a lot easier in Jellycuts is doing something like that.                      |
| 27:02      | Yes.                                                                                                 |
| 27:03      | And then also anything that you need repetitiveness in is super simple because you can just copy     |
| 27:09      | and paste the same text over and over again and just change a few things, whatever you               |
| 27:13      | need.                                                                                                |
| 27:14      | Yes.                                                                                                 |
| 27:15      | Personally, whenever I'm including a large dictionary in a shortcut, I actually save                 |
| 27:19      | it as a file in iCloud and pull it in, because then I can edit it with the JSON editor, J-A-Y-S-O-N. |
| 27:28      | And that means that I can also edit it using a different shortcut so I can add things to             |
| 27:33      | it.                                                                                                  |
| 27:34      | Though I have to say nowadays, I've migrated a lot of that to Data Jar where it's information         |
| 27:38      | that changes semi-frequently, but reference lists are still just good old JSON files in              |
| 27:42      | [[Dropbox]].                                                                                             |
| 27:43      | Yeah.                                                                                                |
| 27:44      | I also feel like this is really useful if you make a text heavy shortcut because we're               |
| 27:49      | working with text in Shortcuts is also very precious.                                                |
| 27:53      | And this is something where you just get a text editor.                                              |
| 27:55      | You can type the text in, you can block and copy it, you don't have to worry about landing           |
| 27:59      | in it.                                                                                               |
| 28:00      | I mean, every time I get near anybody in the Shortcuts team, I beg them to make a button             |
| 28:07      | that would allow you to expand the text field to take over full screen.                              |
| 28:11      | Like when you're in the text editing shortcuts, rather than force us to try and work in with         |
| 28:16      | those two or three lines on the screen.                                                              |
| 28:19      | Just give us a button where we can just like have the text field take over the screen.               |
| 28:23      | David, did you see what they did with the list action in iOS 15 in Shortcuts?                        |
| 28:27      | No, I haven't yet.                                                                                   |
| 28:29      | Okay.                                                                                                |
| 28:30      | I'm sorry to break this to you.                                                                      |
| 28:33      | Okay, people, you're going to get David's reaction live on there.                                    |
| 28:36      | So a list is an ordered list in Shortcuts, which means that it won't randomly change                 |
| 28:41      | the position of things.                                                                              |
| 28:42      | Technically lists in programming are usually unordered.                                              |
| 28:45      | So theoretically, you know, whatever order you put things in, they might come out differently.       |
| 28:49      | But they've been ordered list in Shortcuts for a while.                                              |
| 28:52      | They've now added item one, item two, et cetera, on the left.                                        |
| 28:56      | And that takes up approximately 50% of the list item.                                                |
| 29:00      | So the text field gets even smaller.                                                                 |
| 29:03      | So the text field is half the width.                                                                 |
| 29:05      | And right now, scrolling in that field is broken.                                                    |
| 29:09      | And there's no text wrapping.                                                                        |
| 29:10      | So I have found that I am putting things in a text block to just type the URL and make               |
| 29:17      | sure it's right.                                                                                     |
| 29:18      | And then copying and pasting from there into the list item.                                          |
| 29:23      | And that's frustrating.                                                                              |
| 29:26      | And as soon as Jelly Cat has an iOS 15 beta, I will be, I'll be using that because I miss            |
| 29:32      | being able to just easily work with lists.                                                           |
| 29:34      | But we're really in the beta too.                                                                    |
| 29:36      | So I'm sure they're, you know, they're aware of that stuff.                                          |
| 29:40      | But for a long time, I've recommended, you know, writing extended texts for shortcuts                |
| 29:44      | in something like [[Drafts]] or taught or whatever your text editor of choice is and just copying        |
| 29:49      | and pasting because it's bad at that.                                                                |
| 29:51      | But just get back to my point.                                                                       |
| 29:53      | When you're writing shortcuts with Jellycuts, it's just a text file and you can actually             |
| 29:57      | see all the text in it, all is there, and you don't have to worry about like landing                 |
| 30:02      | the cursor at the exact spot you wanted.                                                             |
| 30:04      | So, yeah, I think that would, I would add that as a third reason to give it a shot.                  |
| 30:10      | But the, but I really just, you know, just step back for a minute.                                   |
| 30:13      | I am just so pleased about a couple of things.                                                       |
| 30:16      | Number one is that we have this community of people like Zach and [[Simon Støvring\|Simon]] and all the other            |
| 30:22      | folks coming up with these great third party like bolt on shortcuts tools.                           |
| 30:27      | I mean, these are tools to make shortcuts.                                                           |
| 30:29      | They're not really anything more than that, but there's a market out there.                          |
| 30:33      | People are supporting these people and allowing them to make stuff.                                  |
| 30:37      | And also, frankly, I'm thankful that Apple is taking kind of a liberal approach to these             |
| 30:41      | tools and allowing them to be released.                                                              |
| 30:44      | I mean, make it an IDE for shortcuts.                                                                |
| 30:47      | I don't know that that was a sure thing.                                                             |
| 30:48      | You were going to get that approved.                                                                 |
| 30:50      | Yeah, that was, that was scary, the review process, getting it onto the app store.                   |
| 30:56      | Yeah, I mean, did they send it back to you or were you just, you know, biting your nails             |
| 31:00      | the entire time going, are they going to say yes or are they going to say yes?                       |
| 31:04      | It took them almost two weeks on the dot to give me my first response.                               |
| 31:09      | Yeah.                                                                                                |
| 31:10      | Wow.                                                                                                 |
| 31:11      | And it was a rejection.                                                                              |
| 31:12      | Of course.                                                                                           |
| 31:13      | For a part of the app.                                                                               |
| 31:14      | Not the editor.                                                                                      |
| 31:15      | They were fine with the whole shortcuts part, but the Jellycuts bridge was an issue.                |
| 31:22      | And that got severely changed in the release version just because the version that was               |
| 31:28      | in it did break the one of the rules.                                                                |
| 31:31      | But like, I didn't see it at first, but I guess, yeah, the description of it made sense              |
| 31:37      | eventually.                                                                                          |
| 31:38      | But yeah, I spent a while with them and app review trying to figure out what was wrong.              |
| 31:44      | But it did eventually get approved after about a month.                                              |
| 31:47      | And I'm not trying to be like an Apple cheerleader, but I do think, frankly, the shortcuts team      |
| 31:52      | is all four stuff like this.                                                                         |
| 31:53      | And I think they want this stuff to get out there because, you know, they can't.                     |
| 31:58      | They can't make a text editor, you know, JavaScript shortcuts builder because that's                 |
| 32:04      | really against the whole nature of the app.                                                          |
| 32:06      | I mean, the idea is that my sister who doesn't listen to the automators can make a shortcut          |
| 32:12      | to, you know, make her whatever, right?                                                              |
| 32:15      | She's not going to learn this stuff.                                                                 |
| 32:16      | But there's a group of us that understand that if we go a step further with it, it can               |
| 32:21      | get easier and faster for us and we want that they're not allowed to make it.                        |
| 32:25      | So I think they're more than happy to have someone like you putting this out there.                  |
| 32:28      | Yeah.                                                                                                |
| 32:29      | No, the shortcuts team is great.                                                                     |
| 32:30      | They've been really supportive of Jellycuts the whole time from the few of them I've talked         |
| 32:35      | to.                                                                                                  |
| 32:36      | Yeah.                                                                                                |
| 32:37      | And during like the [[WWDC]] labs and stuff, they were really cool about everything.                     |
| 32:41      | I guess some of them are using it, honestly, because I mean, they're making a lot of shortcuts,      |
| 32:46      | you know.                                                                                            |
| 32:47      | All right, Zach, you know, people have gone, you know, up into the episode now and assuming          |
| 32:53      | they've never started with Jellycuts before, okay, maybe they've never written with programming     |
| 32:58      | before.                                                                                              |
| 32:59      | Maybe they have.                                                                                     |
| 33:00      | Our listeners vary.                                                                                  |
| 33:01      | How do they get started?                                                                             |
| 33:02      | Because obviously you can't just open Jellycuts and select a shortcut from your entire              |
| 33:09      | Shortcuts library.                                                                                   |
| 33:10      | There's a little bit of work that maybe you need to do if you want to take an existing               |
| 33:14      | shortcut or if you want to get a shortcut from Jellycuts into Shortcuts.                            |
| 33:17      | Where do people start?                                                                               |
| 33:18      | Yeah.                                                                                                |
| 33:19      | To start off, once you've gotten through the onboarding and allowing untrusted shortcuts             |
| 33:24      | and everything, which I'm assuming most people have, you can start looking at the documentation      |
| 33:31      | and the example Shortcuts provided or Jellycuts provided, do you just get familiar with             |
| 33:36      | everything?                                                                                          |
| 33:37      | And then once you think you're ready to like move on to making your own stuff, you can               |
| 33:42      | use the Import feature to import an existing shortcut from the app into Jellycuts.                  |
| 33:47      | It's like from Shortcuts into Jellycuts.                                                            |
| 33:50      | And then that'll get you about 80% of the way into converting it, but Shortcuts leaves               |
| 33:56      | some data out of their P lists and doesn't give me access to everything that you entered             |
| 34:01      | in the Shortcuts app.                                                                                |
| 34:02      | Right.                                                                                               |
| 34:03      | So there is some, you do have to go through it and look at everything and just double                |
| 34:07      | check it to make sure everything's correct because there will be missing data and stuff              |
| 34:11      | just because of the limited data I have available to me.                                             |
| 34:15      | But that'll get you a lot of the way there to figure out what you want to do in Jelly                |
| 34:20      | Cut.                                                                                                 |
| 34:21      | So what you want to make.                                                                            |
| 34:22      | Yeah.                                                                                                |
| 34:23      | Yeah.                                                                                                |
| 34:24      | That makes a lot of sense because, you know, when I opened it, I was like, I'm just going            |
| 34:26      | to click the plus and create Jellycuts.                                                              |
| 34:29      | And then I gave it a name and I click Submit.                                                        |
| 34:32      | And then I opened it and I was like, okay, what do I do now?                                         |
| 34:35      | I should probably, I should probably go into Start to Jellycuts and go from there.                   |
| 34:39      | And it's like, okay.                                                                                 |
| 34:40      | Okay.                                                                                                |
| 34:41      | So look at this.                                                                                     |
| 34:42      | Now look at the start directions.                                                                    |
| 34:43      | It makes sense and I added a few things to it and thought, okay.                                     |
| 34:47      | And of course there's the share, there's the share, but yeah, it makes sense, especially             |
| 34:50      | once you dive into the settings button and the learning centre, the basics there, actually,          |
| 34:57      | you know, that pops up when you first open the app, but me being me, I'm, they're kind               |
| 35:00      | of developer.                                                                                        |
| 35:01      | I know this stuff.                                                                                   |
| 35:02      | I just swiped through it without reading.                                                            |
| 35:04      | You can bring that back people.                                                                      |
| 35:05      | You can bring that back settings, learning centre, and it's all right there.                         |
| 35:08      | Yeah.                                                                                                |
| 35:09      | The learning centre is definitely, it's pretty helpful.                                              |
| 35:11      | That's definitely helpful for figuring out the basics of the language and like the tools             |
| 35:15      | provided and everything.                                                                             |
| 35:16      | Yes.                                                                                                 |
| 35:17      | Yes.                                                                                                 |
| 35:18      | The questions that has most of the answers.                                                          |
| 35:19      | Yeah.                                                                                                |
| 35:20      | And I have to say, obviously, you know, variables are welcome equals shortcut input or whatever      |
| 35:25      | it is that, you know, that's, that's useful.                                                         |
| 35:28      | Being able to name magic variables, I just want to say thank you for this.                           |
| 35:33      | Thank you because the number of times where it's like updated text, but there's six versions         |
| 35:39      | of updated text in my shortcut.                                                                      |
| 35:41      | I don't care about the ones called updated text.                                                     |
| 35:44      | I just want to rename this one, but especially when things are a little bit broken, it's             |
| 35:48      | a little bit difficult to do that.                                                                   |
| 35:49      | And I will fully accept that's my fault for running beta.                                            |
| 35:52      | That's life.                                                                                         |
| 35:53      | But, you know, being able to, to, to rename a magic variable by putting it's two greater             |
| 36:00      | than symbols after set, after like a text action and then saying, you know, what the                 |
| 36:06      | name of the variable is.                                                                             |
| 36:07      | Once I saw that in the learning centre, I was like, okay, yeah, yeah, we're on to something          |
| 36:12      | good here because, you know, it really is good.                                                      |
| 36:15      | And I also just want to point out for people who are looking at documentation going, oh,             |
| 36:20      | I wish I could see this whilst editing a Jellycuts, tap the little arrow in a box in the             |
| 36:27      | top left and it opens in split screen.                                                               |
| 36:29      | So you're going to want to do this on an iPad.                                                       |
| 36:31      | But yeah, that's really helpful.                                                                     |
| 36:33      | I appreciate the fact that I can have Jellycuts and in split screen with the documentation          |
| 36:37      | because that makes my life much easier.                                                              |
| 36:39      | So thank you for that feature, by the way.                                                           |
| 36:40      | Yeah, that was recommended by a user.                                                                |
| 36:44      | They're like, [[Scriptable]] has this.                                                                   |
| 36:46      | So you should have it too.                                                                           |
| 36:47      | And I was like, that's a great idea.                                                                 |
| 36:48      | So that one is [[Simon Støvring\|Simon]].                                                                                |
| 36:50      | He's the genius behind the split out documentation.                                                  |
| 36:53      | Yes.                                                                                                 |
| 36:54      | Yes.                                                                                                 |
| 36:55      | I knew I'd seen it before there, but I saw it.                                                       |
| 36:56      | I saw it in [[Jellycuts]] and went, yes, thank you.                                                     |
| 36:59      | Because it does make it much easier, you know, being able to see things.                             |
| 37:03      | Even if you know what you're doing, I frequently, you know, I know what I'm doing when I program     |
| 37:07      | a script for a draft section, but I still usually have the documentation open in a split             |
| 37:13      | screen.                                                                                              |
| 37:14      | So when I go, wait a minute, what was it if I wanted to do a multi-select and a prompt?              |
| 37:18      | I can just look it up because it's easier to look it up than it is to remember it, try               |
| 37:23      | it, get it wrong, look it up, fix it, get it right.                                                  |
| 37:27      | You know, that's how I work.                                                                         |
| 37:30      | But autocomplete, I have to say, does do quite a bit of the heavy lifting here.                      |
| 37:34      | So that's good.                                                                                      |
| 37:35      | Yeah, the autocomplete, yeah, the was definitely a very needed feature for writing on an iPhone      |
| 37:41      | especially.                                                                                          |
| 37:42      | Yes.                                                                                                 |
| 37:43      | Yes.                                                                                                 |
| 37:44      | This episode of the Automators podcast is brought to you by Audible.                                 |
| 37:49      | Go to audible.com/automators to hear stories that speak to you and start listening             |
| 37:55      | with a 30 day trial.                                                                                 |
| 37:57      | Audible is the leading provider of spoken word entertainment.                                        |
| 38:00      | They have the largest selection of audio books around featuring best sellers, new releases           |
| 38:05      | and everything in between, as well as thousands of binge worthy podcasts all in one place.           |
| 38:11      | As an Audible member, you get one credit every month to spend on any title and their entire          |
| 38:16      | premium selection.                                                                                   |
| 38:17      | And these titles are yours to keep forever in your Audible library.                                  |
| 38:21      | Whether you're wanting to pick up that new novel everyone is talking about or to finally             |
| 38:26      | tick off that bucket list title.                                                                     |
| 38:29      | And if you don't have anything you're looking for this month, those credits will roll over           |
| 38:32      | for up to a year so you can binge the next series whenever you get the time.                         |
| 38:37      | As an Audible member, you also get access to their plus catalogue.                                     |
| 38:41      | It's filled with thousands of hours of audio entertainment from guided meditation, ad free           |
| 38:46      | podcasts and a large selection of exclusive series.                                                  |
| 38:49      | This is included in your membership for you to listen to whenever you like.                          |
| 38:53      | You can download titles and listen offline at any time in the Audible app.                           |
| 38:58      | So no matter where you are or what you're doing, you can always pick up right when you               |
| 39:01      | left off.                                                                                            |
| 39:03      | Now I was so happy when I heard that Audible was a sponsor of this show.                             |
| 39:07      | I couldn't wait to do an ad read because I have been an Audible subscriber for I think               |
| 39:12      | over 10 years now.                                                                                   |
| 39:13      | I've listened to so many different Audible books over that time.                                     |
| 39:17      | I listened to fiction nearly exclusively through Audible, but I also listened to self-help           |
| 39:21      | books.                                                                                               |
| 39:22      | I also like to get Audible books to play in the car with the kids on long road trips.                |
| 39:26      | In fact, I have a recommendation for you on one of those right now, and that would be                |
| 39:30      | Jasper Fforde.                                                                                         |
| 39:31      | That's with two Fs, F-F-O-R-D-E.                                                                     |
| 39:34      | Jasper Fforde has the last Dragon Slayer series and my daughter and I listened to this on              |
| 39:40      | a long car trip when she was like 10 and we had so much fun listening to that series together.       |
| 39:46      | We actually still talk about some of the characters in that series.                                  |
| 39:49      | So Jasper Fforde wrote this very funny series.                                                         |
| 39:52      | It's kind of a young adult thing, but adults can listen to it and enjoy it too called the            |
| 39:56      | last Dragon Slayer and I highly recommend that.                                                      |
| 40:00      | Whether you're looking for something to entertain you while you're working from home for your        |
| 40:04      | next long car ride or even for some time spent at the gym, Audible is right there with thousands     |
| 40:09      | of titles to choose from.                                                                            |
| 40:11      | So go check it out yourself and as a new member, you can travel Audible for 30 days.                 |
| 40:16      | Just visit Audible.com/Automators or text Automators to 500-500 to get started.                |
| 40:24      | That's Audible.com/Automators or text Automators to 500-500.                                   |
| 40:30      | I hope you love Audible as much as I do.                                                             |
| 40:33      | Our thanks to Audible for their support of the Automators and all of Relay FM.                       |
| 40:38      | Alright, so as we're recording this, Apple is in the midst of the betas for iOS 15 and               |
| 40:44      | Mac OS Monterey and Shortcuts is coming over to the Mac and I understand Jellycuts is               |
| 40:52      | too.                                                                                                 |
| 40:53      | Yes, yeah, Jellycuts is coming to the Mac with a native [[SwiftUI]] app.                               |
| 40:58      | And the cool thing is, I mean, you already kind of had something going on.                           |
| 41:01      | You have a bridge mode in the existing app where you can actually write code on your                 |
| 41:06      | Mac for Jellycuts on iPhone and iPad and now you're going to be writing the code on the             |
| 41:10      | Mac for the Mac Shortcuts.                                                                           |
| 41:13      | How's that coming?                                                                                   |
| 41:14      | Really well.                                                                                         |
| 41:15      | There's a few betas out right now to some beta testers.                                              |
| 41:20      | So far, it's been going really well and the Shortcuts integration that I got working I               |
| 41:24      | think is really nice and quicker than the iPhone just because of the Shortcuts command               |
| 41:31      | line tool should I have access to on Mac?                                                            |
| 41:35      | But I've been really liking working on the Mac app.                                                  |
| 41:41      | I should mention that I am part of the group of testers for Mac OS.                                  |
| 41:44      | I've only played with Jellycuts a little bit, but as far as I'm aware, it is a closed               |
| 41:48      | base so you've not got a huge number of people on it right now just because it's so early            |
| 41:52      | in the beta process.                                                                                 |
| 41:53      | Yeah, it's currently a closed beta, but there are signups on the Jellycuts Twitter if you           |
| 41:59      | do want to try it out.                                                                               |
| 42:01      | But yeah, it's not an open beta yet just because it's just not ready for that.                       |
| 42:07      | Yeah.                                                                                                |
| 42:08      | So at this point, having 150 people tell you the same things broke and when five people              |
| 42:12      | can find the exact same thing and maybe even help by providing reproduction steps.                   |
| 42:17      | And it's a little easier to do with a smaller group.                                                 |
| 42:19      | I appreciate that.                                                                                   |
| 42:20      | So thank you for letting me in there.                                                                |
| 42:21      | Yeah, of course.                                                                                     |
| 42:23      | Yeah.                                                                                                |
| 42:24      | Well, I figured there are a couple of perks to being well, the Automators Co.                        |
| 42:30      | So, yeah.                                                                                            |
| 42:31      | So I mean, it's really interesting as well seeing that because immediately I thought,                |
| 42:36      | oh, we're going to have the same kind of import process and so I'm really glad you're using          |
| 42:40      | that command line or the Shortcuts command line to do this because that does make it                 |
| 42:46      | much easier.                                                                                         |
| 42:47      | And I think, you know, I think Shortcuts obviously itself has a whole new market where now it's      |
| 42:52      | coming to the Mac.                                                                                   |
| 42:53      | People will take it more seriously, you see it as an application that maybe they should              |
| 42:57      | actually use now.                                                                                    |
| 42:58      | I think Jellycuts especially is going to be, you know, more frequently used by people               |
| 43:04      | on macOS because there is going to be the ability to, you know, just do that magic                   |
| 43:09      | import.                                                                                              |
| 43:10      | And of course, the keyboard in front of you, do you find it faster to create Shortcuts               |
| 43:13      | using Jellycuts than Shortcuts itself now?                                                          |
| 43:17      | I'm pretty sure you do.                                                                              |
| 43:18      | Yeah.                                                                                                |
| 43:19      | Yeah, I find it way quicker to do it.                                                                |
| 43:21      | I mean, you've got a little bit of an in having named all the functions and everything yourself,     |
| 43:26      | right?                                                                                               |
| 43:27      | Yeah.                                                                                                |
| 43:28      | I've seen the functions hundreds of thousands of times at this point, I know.                        |
| 43:31      | Too much of my brain is taken up.                                                                    |
| 43:33      | Yeah.                                                                                                |
| 43:34      | And that's just the learning curve.                                                                  |
| 43:35      | I mean, I think if somebody wants to kind of go down this rabbit hole, once you learn                |
| 43:38      | them, it is definitely faster, but the learning process is going to be slower.                       |
| 43:43      | But there's like I was saying earlier, this is just kind of a fun thing, honestly, and               |
| 43:48      | more efficient in a lot of ways.                                                                     |
| 43:50      | I mean, you still have a lot of the same limitations on the Mac version of Shortcuts that you have   |
| 43:54      | on iPhone and iPad.                                                                                  |
| 43:56      | So having a text-based solution to create them still has real benefits.                              |
| 44:01      | I mean, I was just thinking, why not on the Mac particularly, create a bunch of the functions        |
| 44:07      | as TextExpander fill-in snippets, and then I could just crank them out very quickly with            |
| 44:12      | TextExpander?                                                                                       |
| 44:13      | I mean, there's no reason I couldn't.                                                                |
| 44:15      | Yeah, no, it's definitely a possibility to use the other Mac automation tools in tandem              |
| 44:20      | with Jellycuts to make it even faster.                                                               |
| 44:22      | Yeah.                                                                                                |
| 44:23      | And I do think you still get a lot of the same benefits.                                             |
| 44:26      | So what are some of the things that you're looking forward to automating on your Mac                 |
| 44:30      | once all those ships with Shortcuts and Jellycuts?                                                   |
| 44:34      | I'm really looking forward to the window management and all the shell script that you can run        |
| 44:40      | with Shortcuts now.                                                                                  |
| 44:41      | I never really dove into Automator myself.                                                           |
| 44:43      | Yeah.                                                                                                |
| 44:44      | But now that Shortcuts is here, I'll probably dive a lot more into it because I already              |
| 44:48      | have some ideas flowing for stuff I can do for Jellycuts and Shortcuts.                              |
| 44:53      | Yeah.                                                                                                |
| 44:54      | I could see you creating your own custom functions and actions based on shell scripting or even      |
| 45:00      | [[AppleScript\|AppleScripting]] as well, and just bake it right into the app and save people a lot of                |
| 45:04      | trouble of trying to sort that stuff out for themselves.                                             |
| 45:07      | Yeah, there's definitely things I want to do like that in the future.                                |
| 45:11      | Yeah.                                                                                                |
| 45:12      | And the other thing I think that really stands out on the Mac is I think there's this huge           |
| 45:14      | opportunity.                                                                                         |
| 45:15      | There's a lot of historical Mac apps that didn't go down the AppleScript path because I feel        |
| 45:23      | like the developers felt like there weren't enough users to justify the expense of building          |
| 45:28      | in AppleScript support, whereas I think a lot of those same developers are going to                 |
| 45:33      | be creating Shortcuts actions because I think they get a lot more return on investment for           |
| 45:39      | creating them.                                                                                       |
| 45:41      | So I expect you're going to have yourself, you're going to be busy keeping up with all               |
| 45:44      | those updates as they come out.                                                                      |
| 45:46      | Yeah.                                                                                                |
| 45:47      | I'm going to be busy, especially integrating third party actions when I get to that soon.            |
| 45:52      | Yeah.                                                                                                |
| 45:53      | I think it's going to be quite fun.                                                                  |
| 45:57      | Fun with quotation marks, very large air quotes.                                                     |
| 46:00      | Yes.                                                                                                 |
| 46:01      | At the same time, you're doing your college apps, right?                                             |
| 46:04      | I mean, I can just, if you're looking at, say, a software engineering course, I think                |
| 46:11      | you might have something that's going to put your application courses to the top of                  |
| 46:14      | the pile here.                                                                                       |
| 46:16      | So how does Jellycuts handle third party actions right now?                                          |
| 46:19      | Because obviously you can't be expected to have bought, downloaded, and tested every                 |
| 46:24      | single app out there that has Shortcut support.                                                      |
| 46:28      | So say, for example, I import a shortcut into Jellycuts and I've got an action from Scriptable       |
| 46:35      | or Toolbox Pro or Shortcutify or another action, say, from OmniFocus or [[Drafts]] in there.             |
| 46:42      | What happens inside of Jellycuts right now?                                                          |
| 46:45      | Certainly on import, it should leave a comment with just the name of the action because that         |
| 46:51      | stuff hasn't been brought in yet, just because I haven't had time to go through and get all          |
| 46:56      | of them and test them all.                                                                           |
| 46:58      | But I'm looking into ways for future updates.                                                        |
| 47:01      | I was 15 really derailed my progress on that because I was the next step.                            |
| 47:06      | But planning on one of the next updates is bringing a third party action support and                 |
| 47:12      | a way for users to add their own third party action stuff and just make it easier for everyone       |
| 47:17      | to use third party actions in Jellycuts because right now the best way is just to add a comment      |
| 47:22      | and add it in when you get into Shortcuts, which kind of sucks, so I'm hoping to bring               |
| 47:27      | a lot more third party actions in soon.                                                              |
| 47:30      | Okay, I'm going to put you on the spot.                                                              |
| 47:32      | So sorry for all this, I didn't ask that this off the air.                                           |
| 47:36      | Will there be a repository where people can save third party actions and contribute to               |
| 47:41      | them?                                                                                                |
| 47:42      | So say, for example, I figure out the ad toss paper to all me focus action.                          |
| 47:45      | Will I be able to share that with other people in some way, be that via sending it back to           |
| 47:50      | you and then maybe at some point it makes it into the app or just sharing it via a GitHub            |
| 47:56      | action, a GitHub repo or something like that?                                                        |
| 47:58      | Yeah, there has been, yeah, I have thought of ways for letting the community do it.                  |
| 48:04      | Yeah, one of the ways was having a GitHub repo that people can submit their packages                 |
| 48:10      | to because right now Jellycuts is based on packages and the first line you put in every              |
| 48:16      | Jellycut is import Shortcuts.                                                                        |
| 48:19      | And so I'm thinking for the future, I want to be able to allow the community members                 |
| 48:24      | to make their own packages in some way or another.                                                   |
| 48:27      | And just because of how iOS works and the app review, having something where someone                 |
| 48:33      | just uploads to GitHub repo and it downloads into the app won't be possible, but having              |
| 48:38      | me check it and then put it into the app definitely will be.                                         |
| 48:41      | So I think that's the route I most likely will go down in the future.                                |
| 48:46      | I mean, you could potentially worst case scenario allow us to download these actions ourselves       |
| 48:51      | and save them into the app perhaps.                                                                  |
| 48:54      | And then it's on us to keep checking for updates, but with working copy and the sync folder          |
| 49:00      | action with a shortcut, maybe we can make some magic happen there even if app review                 |
| 49:06      | says no.                                                                                             |
| 49:07      | Yeah, across my fingers app review says yes, because that would be the best case scenario            |
| 49:10      | for everybody.                                                                                       |
| 49:11      | Yeah, no, it definitely would be.                                                                    |
| 49:14      | If you need ideas, I think you know, a whole community of people who are willing to give             |
| 49:18      | you some.                                                                                            |
| 49:19      | Yeah.                                                                                                |
| 49:20      | And honestly, there's probably people out there that would be willing to help you even               |
| 49:23      | with more of a heavy lifting too if you wanted.                                                      |
| 49:25      | I know you're at a busy point in your life.                                                          |
| 49:28      | But I also like the idea of some sort of repository, whether it be GitHub or something               |
| 49:34      | else where developers can just auto submit language, because I'm sure there are developers           |
| 49:40      | out there that want their, you know, the actions they're creating to be available in                 |
| 49:45      | Jellycuts.                                                                                          |
| 49:46      | And if you could create some method for them to submit it, that'd be even better to have             |
| 49:50      | the developers, you know, create the methods or function calls at the time they make the             |
| 49:55      | app.                                                                                                 |
| 49:56      | Yeah, that's definitely a definitely a really good idea after having them like submit something      |
| 50:01      | like a file that just defines all their actions.                                                     |
| 50:04      | Yeah.                                                                                                |
| 50:05      | Yeah, maybe we can even figure out something where you can automatically parse the intense           |
| 50:09      | file from [[Xcode]] or something, and then have that converted into something that Jellycuts            |
| 50:14      | can eat, because it's jelly, so it eats everything, right?                                           |
| 50:18      | Well, if you're a developer out there and you're listening, you know, find Zach and                  |
| 50:24      | give him some ideas, because I know there's a lot of developers listening to this show               |
| 50:27      | that are supporting shortcuts, so that, you know, hopefully we can help connect you guys.            |
| 50:33      | Just don't swamp him with email people.                                                              |
| 50:34      | We need Jellycuts for Mac OS Monterey, okay?                                                        |
| 50:37      | Priorities, priorities.                                                                              |
| 50:43      | In terms of the overall reception, though, I think it's been really positive, and I really           |
| 50:48      | just the only app out there I know that does anything like this, and when I hear it took             |
| 50:52      | you 10 months to assemble all of the calls, I think that's why I don't think anybody else            |
| 50:57      | is willing to spend 10 months on it.                                                                 |
| 50:59      | I had a lot of free time on my hands, but yeah, the reception was great.                             |
| 51:05      | I mean, having free time is one thing, but at the same time, you've got to be very persistent        |
| 51:10      | and determined, because I imagine at some points it must have felt like a slog, because              |
| 51:16      | you're essentially doing the same thing over and over and over again, and I'm hoping that            |
| 51:19      | something changes enough for you to see, you know, what is it that is actually here and              |
| 51:24      | how does this really work?                                                                           |
| 51:26      | Because I know sometimes when I'm programming, I do the same thing, I change something, nope,        |
| 51:30      | doesn't work.                                                                                        |
| 51:31      | Try changing it over here.                                                                           |
| 51:32      | Nope, doesn't work.                                                                                  |
| 51:33      | Try changing it over here.                                                                           |
| 51:34      | No.                                                                                                  |
| 51:35      | Try changing it there.                                                                               |
| 51:36      | There it works.                                                                                      |
| 51:37      | Oh, now all four of them are working.                                                                |
| 51:38      | What happened?                                                                                       |
| 51:39      | And yeah, sometimes it's a bit of a slog, so I imagine it must have been a trial at times.           |
| 51:45      | Yeah, it was definitely the first system of the app, because this is actually version                |
| 51:51      | two of the app, it was completely rewritten about five months in, because the first system           |
| 51:58      | I had just took too long, but yeah, the first version was a complete slog, just like every           |
| 52:04      | time I needed to add an action, it was a ton of work, but then after some re-architecting            |
| 52:10      | made it a lot easier and more bearable.                                                              |
| 52:13      | So I'm guessing you've learned a couple of things as you've gone through this.                       |
| 52:16      | Oh yeah, learned quite a few.                                                                        |
| 52:19      | Have you got any one particular thing that you think, oh wow, yeah, people probably don't            |
| 52:24      | know this, but I found this really useful once I figured it out.                                     |
| 52:30      | [[Xcode]] crashes with really big string files, that's what I learned.                                   |
| 52:36      | That sounds like a problem that I'm guessing many people aren't going to encounter, because          |
| 52:40      | it's not like Kindle app ships with all of the books inside of the app, they download                |
| 52:45      | the systems, they need them, but Jellycuts can't just download anything from a server                |
| 52:50      | whenever it wants, because well, it's not the Kindle app.                                            |
| 52:54      | Yeah, it's also, it's okay to go back and redo things, if they're, like for a long time              |
| 53:01      | I was like, I don't want to redo this, it's like just going to be extra work to redo it,             |
| 53:05      | but if redoing it is going to take less time than doing it with your current system, then            |
| 53:11      | I think that's okay personally.                                                                      |
| 53:13      | Yeah, laying the groundwork for the future so that you can easily expand upon something              |
| 53:19      | or improve something, versus I'll just quickly hack this in here 80,000 times, and then you          |
| 53:24      | look at the entire thing, and it's the Leaning Tower Pisa made of toothpicks held together           |
| 53:28      | with duct tape.                                                                                      |
| 53:30      | Yes, I can definitely see why you would choose to rewrite things, and even as part of the            |
| 53:37      | development process, it sometimes feels like it's a big setback to do that, but I know               |
| 53:42      | I've done that with everything from writing a simple shortcut to doing more complex things.          |
| 53:47      | I was asked the other day to help create a shortcut for somebody for a sourdough starter             |
| 53:51      | timer, and I started by doing it as a dictionary and going through a whole bunch of things,          |
| 53:57      | and then I thought, you know what, when they want to add an extra step, they're not going            |
| 54:00      | to figure out how to add this into the dictionary.                                                   |
| 54:03      | So what I did was adjust current date or adjust previous date at X amount of time set timer          |
| 54:12      | with label, and I just repeated that, you know, however many times, I think it was 13                |
| 54:17      | times, there were 13 timers in the sourdough starter, and so I did that, and you know what,          |
| 54:22      | it works, they're using it, and that I think that's what counts.                                     |
| 54:26      | So yeah, I'm sure there's plenty of things that everybody can learn, and I have to say               |
| 54:31      | I've actually found out a couple of things in shortcuts which I couldn't find or I struggled         |
| 54:37      | to find inside of the app.                                                                           |
| 54:41      | And you know, actually knowing the name of all the shortcuts colours is quite useful,                 |
| 54:45      | so there is, there's purple and grape as well, and pink are colours, but there's also gray            |
| 54:50      | blue, gray green, and gray brown, and of course all the other colours, including tangerine,           |
| 54:56      | because everybody loves the tangerine colour Mac, I mean, if you're [[Stephen Hackett]] you               |
| 55:00      | certainly do.                                                                                        |
| 55:01      | But yeah, there's a lot of hidden gems here, which I found, David, did you find anything             |
| 55:07      | secret while you were playing with Jellycuts?                                                        |
| 55:10      | There's a pro version, and I would recommend if you want to go down this road, definitely,           |
| 55:15      | you know, send Zach a few bucks, he's got a really generous pro version where you can                |
| 55:19      | kind of buy in at whatever level makes sense for you, but you get to customise the editor,           |
| 55:25      | you've got the desktop connection, dictionary builder, icon builder, and then of course              |
| 55:30      | you can help support development, and that really helped me unlock things, like the icon             |
| 55:35      | builder was a great idea as well, because it's another thing in shortcuts, it's a total              |
| 55:38      | pain in the neck, I mean, I don't know why you can't search the icons and do different               |
| 55:42      | things there, but you've got it all covered in the app.                                              |
| 55:45      | So I just feel like in general, if you're willing to spend a little time understanding               |
| 55:51      | how to program these blocks, and it's just short bits of text and the documentation walks            |
| 55:56      | you through it, but if you're willing to do that, it just takes a lot of the sharp edges             |
| 56:00      | off shortcuts, and it doesn't break anything, I mean, you go in shortcuts, they still show           |
| 56:06      | up as shortcuts, you'll still see the blocks when you go into the shortcuts app, so I'm              |
| 56:11      | just really impressed Zach with what you've done.                                                    |
| 56:15      | Thank you.                                                                                           |
| 56:16      | Yeah, it was nice to be able to finally code with text instead of the shortcuts actions              |
| 56:23      | for me.                                                                                              |
| 56:24      | And then also, I mean, just going through the process of making an app, get dealing                  |
| 56:28      | with app review, dealing with monetisation, I mean, what an amazing learning experience              |
| 56:33      | this must be for you, I mean, think of all the things you've learned over the last couple            |
| 56:37      | of years, and she just decided to start goofing around with X code, and now all of a sudden          |
| 56:43      | you have an operating business.                                                                      |
| 56:46      | Yeah.                                                                                                |
| 56:47      | Do your parents and friends, do you tell them, hey, by the way, I'm a successful app developer       |
| 56:52      | now?                                                                                                 |
| 56:53      | I mean, what do they say to you when they realise what you're up to?                                 |
| 56:56      | Yeah, my parents have been super supportive of everything I've done, and helping me through          |
| 57:01      | everything, especially with all the Apple stuff.                                                     |
| 57:05      | Yeah.                                                                                                |
| 57:06      | And then yeah, my friends also really supportive of everything.                                      |
| 57:10      | Whenever anyone is like, or my parents have posted stuff and they're like, I mean, my                |
| 57:14      | family is like, that's nuts.                                                                         |
| 57:17      | Like you are nuts.                                                                                   |
| 57:18      | Yeah.                                                                                                |
| 57:19      | I haven't done that, which is just really cool because everyone's super supportive about             |
| 57:21      | it.                                                                                                  |
| 57:22      | Yeah.                                                                                                |
| 57:23      | When I was your age, I had a job fixing motorboat engines in 110 degree smoggy Southern California.  |
| 57:29      | I was incapable of what you'd have done at your age.                                                 |
| 57:33      | Sorry, are you going to become a developer?                                                          |
| 57:35      | I mean, what's next for you?                                                                         |
| 57:36      | Are you going to go?                                                                                 |
| 57:37      | Are you going to decide that you want to go become a baker or something completely separate          |
| 57:43      | or is this a career for you?                                                                         |
| 57:45      | I definitely want to continue developing.                                                            |
| 57:47      | I'm not sure where or how, but I definitely want to keep developing as I move through                |
| 57:54      | life.                                                                                                |
| 57:55      | So I guess it'll all really be dependent on what I end up doing for college and stuff,               |
| 58:01      | which I'm still trying to figure out and everything.                                                 |
| 58:03      | Yeah.                                                                                                |
| 58:04      | So my advice to you as someone who has had a few kids go through this is no matter where             |
| 58:09      | you end up, you're going to do fine.                                                                 |
| 58:11      | I mean, I think we all know that Zachary Lyman has a future with this stuff.                         |
| 58:18      | Thank you.                                                                                           |
| 58:19      | Would you say no to an internship at Apple if they offered you one?                                  |
| 58:23      | Probably not.                                                                                        |
| 58:24      | I would say yeah for an internship.                                                                  |
| 58:26      | Yeah.                                                                                                |
| 58:27      | I think it's one of those things where I've seen quite a few developers who've done                  |
| 58:33      | internships with Apple and Christy and the guy behind Apollo is one of them.                         |
| 58:39      | The Nudget developer, of course, you know, there's some people who are very good developers          |
| 58:43      | who've done that.                                                                                    |
| 58:44      | And yeah, I always find it super interesting.                                                        |
| 58:46      | So you've already got a great app under your belt.                                                   |
| 58:49      | So I think you might even get to chill out a little bit while you're doing that.                     |
| 58:54      | I mean, I say that.                                                                                  |
| 58:55      | I don't think working at Apple is really chilled.                                                    |
| 58:57      | I think it's probably quite a bit going on.                                                          |
| 58:59      | I have a feeling they give their interns plenty to do.                                               |
| 59:02      | Yeah, without writing an app on the side, you know, from scratch at the same time, perhaps.          |
| 59:08      | I feel like if they put Zach as an internet Apple, there'd be like some secret button                |
| 59:12      | in Shortcuts, nobody would know it, like maybe an invisible button and you tap it and suddenly       |
| 59:18      | it goes into command line mode.                                                                      |
| 59:20      | It was like, how did this get here?                                                                  |
| 59:23      | I don't know, man.                                                                                   |
| 59:25      | Yeah, and all the Shortcuts developers do know it's there, they're just pretending                   |
| 59:29      | that they don't.                                                                                     |
| 59:30      | Well, either way, what's next for Jellycuts?                                                         |
| 59:34      | You've got third party integration, you've got the Mac stuff coming out.                             |
| 59:39      | What should users be looking for?                                                                    |
| 59:42      | Definitely iOS 15 support coming soon.                                                               |
| 59:46      | I've been working really hard on adapting to Apple's new sharing standards for iOS 15.               |
| 59:52      | I had to build an entire signing server for Shortcuts recently just to get it to work on             |
| 59:59      | iOS 15, so I'm super excited to get that out.                                                        |
| 01:00:03   | Definitely the iOS 15 support and then all of the Jelly, just the Jelly language evolution           |
| 01:00:11   | stuff that I'm working on, so making Jelly more of a traditional programming language                |
| 01:00:15   | and stuff.                                                                                           |
| 01:00:16   | Yeah.                                                                                                |
| 01:00:17   | So you can run it in more than just like a Shortcuts capacity, I guess, or compile before            |
| 01:00:23   | and stuff.                                                                                           |
| 01:00:24   | There's more upgrades to the app in general.                                                         |
| 01:00:27   | Sounds pretty good to me.                                                                            |
| 01:00:28   | Well, we're looking forward to seeing it all and keep up the great work.                             |
| 01:00:33   | Everybody, go check out Jellycuts, send Zach some support, man, and try this out.                    |
| 01:00:40   | Like I've said throughout the show, even if you're a non-developer, I think this is something        |
| 01:00:44   | worth checking out.                                                                                  |
| 01:00:45   | There's a free download, so you don't have to invest, so just check it out to see what               |
| 01:00:49   | you think and go on the website, look at the documentation, but I would recommend if you're          |
| 01:00:55   | listening to the Automators, this may be something you want.                                         |
| 01:00:57   | I believe anybody that listens to the show, if they spent a weekend learning Zach's Jelly            |
| 01:01:03   | language, I mean, it's a nice combination of really JavaScript and a couple other things,            |
| 01:01:09   | you could pick it up and you could be making Shortcuts faster and more efficient and solve           |
| 01:01:13   | all those problems we've been talking about throughout the show today.                               |
| 01:01:16   | Thank you.                                                                                           |
| 01:01:17   | Before we finish today, I want to take a quick moment to tell you about another great show           |
| 01:01:21   | here on [[Relay FM]].                                                                                    |
| 01:01:23   | [[Roboism]] is a show by [[Alex Cox]] and [[Kathy Campbell]], both of whom have been on our show before,         |
| 01:01:28   | and they explore how artificial intelligence, machine learning, and digital systems are              |
| 01:01:32   | affecting our future.                                                                                |
| 01:01:34   | Explore humanity behind the bots so to quickly become a part of our everyday life at relay.fm/roboism        |
| 01:01:39   | or search Roboism whenever you get your podcasts.                                     |
| 01:01:44   | The episode today is brought to you by HPE Tech Talk and Audible.                                    |
| 01:01:47   | And just as a note, our last episode was brought to you by discourse, not discord, as some           |
| 01:01:52   | of you may have misheard in one of our ads.                                                          |
| 01:01:55   | We'll be back in two weeks with another great episode for you.                                       |
| 01:01:58   | Goodbye.                                                                                             |
