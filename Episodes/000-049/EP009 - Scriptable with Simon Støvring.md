---
status: "complete"
fc-date:
  year: 2018
  month: 10
  day: 26
fc-category: "podcast"
podcast: "Automators"
published: 2018-10-26
duration: 2690
formattedduration: "00:44:50"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Simon Støvring"]
notetype: "episode"
showpage: "http://relay.fm/automators/9"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators009__Edit.mp3"
episode: 9
title: "9: Scriptable with Simon Støvring"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode David and Rose get to talk to Simon Støvring, maker of Scriptable an app which allows you to control your iPhone with JavaScript. Simon shares some of the journey he experienced making the app, and what you can actually do with Scriptable.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Simon Støvring]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 009 Discussion](https://talk.automators.fm/t/automators-9-scriptable-with-simon-stovring/2833)

# Sponsors
- [[The Omni Group (Sponsor)|The Omni Group]] - Accomplish more every day.

# Show Notes
- [Simon Støvring's website](http://simonbs.dk/)
- [Scriptable Website](https://scriptable.app/)
- [Scriptable Category - Automators Talk](https://talk.automators.fm/c/ios/scriptable)
- [Pythonista for iOS](http://omz-software.com/pythonista/)
- [Launch Center Pro](https://contrast.co/launch-centre-pro/)
- [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
- [Intro to Programming in JavaScript | Codecademy](https://www.codecademy.com/pro/intensive/programming-with-javascript)
- [Release notes for Scriptable - Automators Talk](https://talk.automators.fm/t/release-notes-for-scriptable/1611?u=rosemaryorchard)

# Transcription

| Time Index | Transcription                                                                                                     |
|:---------- |:----------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automators.                                                                                  |
| 00:04      | I am Rose and I am here today with my co-host, David.                                                             |
| 00:07      | How are you today, David?                                                                                         |
| 00:09      | I'm doing quite well, Rosemary.                                                                                   |
| 00:11      | I'm kind of excited.                                                                                              |
| 00:12      | We got a guest today with a new app                                                                               |
| 00:14      | that I am really happy to see in existence.                                                                       |
| 00:18      | Yes, we do. We have Simon here today.                                                                             |
| 00:20      | Welcome to the show, Simon.                                                                                       |
| 00:22      | Thank you. Thank you for having me.                                                                               |
| 00:25      | You're very welcome. Simon makes a great app called [[Scriptable]],                                               |
| 00:29      | which for those of you who don't know,                                                                            |
| 00:31      | it's an application for iOS,                                                                                      |
| 00:33      | which hooks right into Siri Shortcuts,                                                                            |
| 00:35      | and you can basically do almost anything you want to on your iPhone                                               |
| 00:39      | or your iPad with [[JavaScript]], which is pretty wonderful.                                                      |
| 00:43      | I think the analog for this is [[AppleScript]] on the Mac.                                                        |
| 00:48      | You know how you have [[AppleScript]] on the Mac,                                                                 |
| 00:50      | and it's a step up.                                                                                               |
| 00:51      | You can learn how to do [[Automator]],                                                                            |
| 00:53      | but if you want to do [[AppleScript]],                                                                            |
| 00:54      | it gives you more power.                                                                                          |
| 00:56      | Currently, on the iOS,                                                                                            |
| 00:57      | we have [[Shortcuts\|Siri Shortcuts]],                                                                                           |
| 00:59      | but if you want to go even harder at this problem,                                                                |
| 01:02      | there is no such thing as [[AppleScript]] for iOS,                                                                |
| 01:05      | but [[JavaScript]] is a great language                                                                            |
| 01:08      | that allows you to address a lot of the pieces of your phone and your iPad.                                       |
| 01:12      | So Simon made an application.                                                                                     |
| 01:15      | That's the [[Scriptable]] app that lets you write [[JavaScript]]                                                  |
| 01:17      | that not only is hypothetical                                                                                     |
| 01:19      | and lets you learn how to write a programming language,                                                           |
| 01:21      | it also lets you address the device                                                                               |
| 01:24      | so you can automate things on a device                                                                            |
| 01:26      | that you normally wouldn't be able to do.                                                                         |
| 01:28      | It's a step up.                                                                                                   |
| 01:31      | Definitely.                                                                                                       |
| 01:32      | Historically, Simon, there was the app [[Pythonista]], which was great,                                           |
| 01:36      | but I was telling you before we started,                                                                          |
| 01:38      | I just never got my head around [[Python]],                                                                           |
| 01:40      | but I feel like [[JavaScript]] is a much more accessible language,                                                |
| 01:44      | and it just seems like the way the wind is blowing now.                                                           |
| 01:46      | Like, the Omni Group is doing their automation stuff based on [[JavaScript]].                                     |
| 01:51      | [[JavaScript]] is something that will work both on the Mac and the iPad                                           |
| 01:55      | and the iPhone, it works across platforms.                                                                        |
| 01:58      | So I think you really hit the nail on the head with this app.                                                     |
| 02:02      | So what gave you the idea to get started with this app?                                                           |
| 02:05      | Like, you guys have been using a workflow since it came out.                                                      |
| 02:11      | I was trying it out and experimenting with it to see what can be done with it.                                    |
| 02:17      | And I was super excited about all the possibilities that it had.                                                  |
| 02:22      | But the more I used it, the more I just felt like                                                                 |
| 02:26      | this app isn't meant for me.                                                                                      |
| 02:29      | I'm a programmer, I think like a programmer.                                                                      |
| 02:33      | And [[Workflow]], now [[Shortcuts]], has this visual language for making these shortcuts                                  |
| 02:41      | for automating a task on iOS.                                                                                     |
| 02:47      | So I was like, maybe I can make something that's more suited for me,                                              |
| 02:51      | that's more suited for programmers.                                                                               |
| 02:56      | So then I just got started to see what would that take, what would that require.                                  |
| 03:03      | And I just went from there.                                                                                       |
| 03:04      | Yeah, and it's this programming environment where you can write [[JavaScript]] on the phone.                      |
| 03:11      | For the gang that hasn't signed up for talk.automators.fm, shame on you,                                          |
| 03:16      | because that's a great place.                                                                                     |
| 03:18      | But also, we've been hosting Simon and [[Scriptable]] in the forum.                                               |
| 03:23      | So it's kind of like the unofficial gathering place for [[Scriptable]] people.                                    |
| 03:27      | And there's a lot of folks in there that have been working on their [[Scriptable]] scripts.                       |
| 03:31      | And so we, Rose and I have been working with this app while it was in beta.                                       |
| 03:36      | And I'll have to admit, this is one I was worried about.                                                          |
| 03:39      | I had the same feeling with this one that I had back in the days of the [[Workflow]].                                |
| 03:42      | Like, is Apple going to let him publish this?                                                                     |
| 03:45      | Because you just never know, right?                                                                               |
| 03:47      | I mean, they did let [[Python]] use it through, so I thought that was a hope.                                         |
| 03:51      | And it does seem like they're getting pretty automation friendly.                                                 |
| 03:54      | So if I had a better nickel, I would have said that you were going to get through.                                |
| 03:57      | But there was some worry.                                                                                         |
| 03:58      | Were you ever at any point worried that you were going to do all this work                                        |
| 04:00      | and Apple wasn't going to let you publish the app?                                                                |
| 04:02      | Oh, yeah, I had a lot of worrying.                                                                                |
| 04:06      | I worried a lot about that.                                                                                       |
| 04:08      | But I mean, Apple changed their guidelines for like that.                                                         |
| 04:14      | The App Store guidelines recently, a year or two ago,                                                             |
| 04:18      | to allow apps that run code to be on the App Store.                                                               |
| 04:23      | So I knew that part.                                                                                              |
| 04:27      | That would work out and [[Pythonista]] is already there, as you mentioned.                                            |
| 04:30      | But of course, I had my fears that they wouldn't let in an app that had this one purpose                          |
| 04:40      | of integrating with the native iOS APIs using programming, using a programming language.                          |
| 04:49      | I had my doubts that they would allow that, but they did.                                                         |
| 04:54      | At what point in development did you realise that you were really onto something?                                 |
| 04:57      | I mean, when was the first time you ran it?                                                                       |
| 04:59      | You're like, oh, wait a second, this is going to be fun.                                                          |
| 05:04      | Yeah, so when was the first time?                                                                                 |
| 05:08      | I think when I started to have small UI components that I could create with [[JavaScript]], present               |
| 05:18      | them on screen, press a button, for example, the standard alert that you see in iOS pop-up                        |
| 05:25      | sometimes, like the one if you have to sign into [[iCloud]], there's this pop-up on the screen                        |
| 05:33      | with the text field and two buttons.                                                                              |
| 05:37      | And that was one of the first components that I made where I could enter some text and press                      |
| 05:42      | a button and then I could get back the text into [[JavaScript]].                                                  |
| 05:45      | Then I felt like, okay, this is, I feel free, so to speak.                                                        |
| 05:53      | I can do a lot of things with this.                                                                               |
| 05:55      | And then it was just about figuring out what to do.                                                               |
| 05:59      | Yes.                                                                                                              |
| 06:00      | Yeah.                                                                                                             |
| 06:01      | Yes, because of course, it used to be as well, going back a little bit, that Apple wouldn't                       |
| 06:06      | allow, so they did allow [[Pythonista]] on to the App Store, but [[Pythonista]] was not                             |
| 06:10      | allowed to synchronise their scripts with [[iCloud]].                                                                 |
| 06:12      | And they weren't, I don't think they were allowed to import scripts as well if I'm remembering                    |
| 06:16      | correctly.                                                                                                        |
| 06:17      | And then that came along later, which is of course a great thing because it means that                            |
| 06:21      | I have [[Scriptable]] on my iPhone and [[Scriptable]] on my iPad, more than one iPad because multi-iPad           |
| 06:26      | lifestyle and all of my scripts are everywhere, which is wonderful.                                               |
| 06:29      | So that if I want to run something on my iPad or my iPhone, then I have no problem doing                          |
| 06:34      | it, it just works, which is of course, one of the reasons why we do usually love Apple                            |
| 06:39      | if it works.                                                                                                      |
| 06:40      | That makes things easier, doesn't it?                                                                             |
| 06:42      | It is a great feeling though, when you manipulate, I don't know, maybe I'm just a nerd, but I                     |
| 06:47      | remember when I was just a little kid, the first time I programmed a computer in basic                            |
| 06:51      | and I realised that something on the screen could be changed by something I do with code.                         |
| 06:58      | And that's special.                                                                                               |
| 06:59      | And I always felt like the iPhone and the iPad was a device where you weren't really                              |
| 07:03      | going to be able to do that.                                                                                      |
| 07:04      | I mean, Apple itself doesn't have a native programming environment for iOS.                                       |
| 07:09      | You have to go to a Mac to program an iOS device.                                                                 |
| 07:11      | So you're in some ways, you're ahead of Apple on this stuff.                                                      |
| 07:14      | Well, they do have the [[Swift Playgrounds]] though.                                                                  |
| 07:17      | Yeah, that's true.                                                                                                |
| 07:19      | That's true.                                                                                                      |
| 07:20      | But you also included a bunch of scripts.                                                                         |
| 07:23      | Rose, you want to talk about some of the sample scripts.                                                          |
| 07:25      | So if you're listening in first seconds, we should have said the app is a free download.                          |
| 07:30      | You can just download it.                                                                                         |
| 07:31      | Yeah, Simon's not charging you for it, although you should give him a tip because not only                        |
| 07:36      | it wouldn't make you feel good, there's a very special thing that happens when you make                           |
| 07:40      | a tip.                                                                                                            |
| 07:41      | I'm not even going to tell you what it is.                                                                        |
| 07:42      | You're going to have to make a tip if you want to see it.                                                         |
| 07:43      | Yes.                                                                                                              |
| 07:44      | But it's cool.                                                                                                    |
| 07:45      | Anyway, so Rose, talk about some of the...                                                                        |
| 07:47      | So you can download.                                                                                              |
| 07:48      | Let's say you don't know anything about [[JavaScript]].                                                           |
| 07:50      | There's scripts already there.                                                                                    |
| 07:51      | You can just run the ones he made for you and you can play with those.                                            |
| 07:53      | Yeah.                                                                                                             |
| 07:54      | You want to talk about some of those?                                                                             |
| 07:55      | Yeah.                                                                                                             |
| 07:56      | Well, I think the first time that I saw [[Scriptable]], you had tweeted about it.                                 |
| 08:01      | And Anders Borum, who makes working copy, which is another great app that a lot of people                         |
| 08:06      | listening to should probably check out if you use get it all, retweeted one of your                               |
| 08:10      | tweets and I was like, oh, wait, you are...                                                                       |
| 08:13      | I think you were actually checking whether or not [[Slack]] was down.                                                 |
| 08:16      | And of course it was, but you were using [[Scriptable]] to check that [[Slack]] is down, which, I mean,               |
| 08:22      | it's a quite a short script.                                                                                      |
| 08:23      | It's only 20 lines and that's with all of the comments in there.                                                  |
| 08:26      | And you're just checking the [[Slack]] status.                                                                        |
| 08:29      | So just for the people that aren't listening, that's not using an API, is it?                                     |
| 08:34      | That's just grabbing [[Slack\|Slack's]] web page, if I'm looking at this correctly?                                          |
| 08:38      | Yeah.                                                                                                             |
| 08:39      | That is true.                                                                                                     |
| 08:40      | They have this status website that tells if [[Slack]] is down or not.                                                 |
| 08:45      | Excellent.                                                                                                        |
| 08:46      | And it's using that.                                                                                              |
| 08:47      | Yeah.                                                                                                             |
| 08:48      | So for people who are there going like, oh, I don't know, APIs sounds really complicated.                         |
| 08:53      | You could literally just use this to grab a web page and display it to you, but then                              |
| 08:57      | have that hooked into [[Siri]], which means, of course, that then you can go, hey, telephone                          |
| 09:04      | is [[Slack]] down, and then your telephone will come back and tell you either, yes, it is                             |
| 09:07      | or no, it isn't, which is quite useful if you [[Slack]], at least, to communicate frequently.                         |
| 09:13      | But you could use it for anything.                                                                                |
| 09:15      | Yeah.                                                                                                             |
| 09:16      | That's true.                                                                                                      |
| 09:18      | And I'm just going to read out the titles of some other ones.                                                     |
| 09:21      | So there's a countdown to midnight, which is, of course, very helpful Christmas and New                           |
| 09:25      | Year if you're waiting to dive into those presents or set off the fireworks, then you                             |
| 09:28      | will definitely need that.                                                                                        |
| 09:30      | You can import a selective file to [[Bear]].                                                                          |
| 09:33      | You have a pretty print [[JSON]], which for people on a web, a lot of data comes in a [[JSON]] format                     |
| 09:40      | when you get it back from an API or something.                                                                    |
| 09:43      | And it's easy to read if it's formatted nicely.                                                                   |
| 09:47      | And I have to say, I've been using this one all the time because you get a dictionary                             |
| 09:51      | back and it's like, okay, what do I need to do with this to figure out how to get the                             |
| 09:57      | right data out if I'm grabbing [[Dark Sky]], for example?                                                             |
| 09:59      | And it's great because I can put [[Scriptable]] on one side of my screen with a pretty printed                    |
| 10:03      | of JSON.                                                                                                          |
| 10:04      | And then I can sketch out my thoughts and notability on the other side so that I've                               |
| 10:08      | got all of my notes, which is really good.                                                                        |
| 10:11      | And of course, you have getting the latest news from [MacStories](https://www.macstories.net/) is very important. |
| 10:15      | And getting the latest [XKCD comic](https://xkcd.com), which I have been using, unfortunately, [XKCD](https://xkcd.com) does                              |
| 10:22      | not update as frequently as I call it with shortcut.                                                              |
| 10:26      | So if anybody knows somebody there, please poke them.                                                             |
| 10:31      | But I mean, all of these are adaptable.                                                                           |
| 10:33      | You can put in other comics that update more quickly.                                                             |
| 10:36      | Of course.                                                                                                        |
| 10:37      | And that's why the point I was about to make is that all of these are adaptable.                                  |
| 10:44      | And [MacStories](https://www.macstories.net/) is one is basically an [[RSS]] [[JavaScript]].                          |
| 10:47      | And you can change the URL if there's a different website you like, and you can put it in there.                  |
| 10:53      | Or if you want to pull a comic down from a different website, you can do that.                                    |
| 10:56      | So not knowing a lick of [[JavaScript]], you could go in this app and actually kind of fiddle                     |
| 11:01      | around with things and start changing the way things work.                                                        |
| 11:04      | The other thing that Rose and I both were talking about before we got on the mic today                            |
| 11:08      | is how impressive it is that you can tie into the native stuff like you've got a [[JavaScript]]                   |
| 11:13      | in there showing you that the reminders that are due today.                                                       |
| 11:17      | And to me, this is really cool, because I always feel like when people want to learn                              |
| 11:22      | a programming language, it's always hard to learn it in the abstract.                                             |
| 11:26      | It's like, what am I going to do with this?                                                                       |
| 11:28      | Okay, so this is how you make a variable, and this is how you pass information.                                   |
| 11:32      | But it's no use to me until I can do something real with it.                                                      |
| 11:37      | And because you've got this platform you've made, it's the ideal place to learn [[JavaScript]]                    |
| 11:44      | because it allows you to do things, it allows you to tie into your iOS apps, it allows you                        |
| 11:48      | to make Siri shortcut, or I'm sorry, Siri addressable commands where you can talk to                              |
| 11:54      | your phone and run a [[JavaScript]].                                                                              |
| 11:56      | And suddenly, as soon as you start learning it and learning all these different places                            |
| 12:01      | you can hook into the iPhone, the iPad, you have a reason to do it.                                               |
| 12:06      | And then you're going to really learn it, because you have results you want to get and                            |
| 12:11      | you can get there.                                                                                                |
| 12:12      | And I'm just really happy that this app exists.                                                                   |
| 12:17      | Like I said, I didn't ask a question, did I?                                                                      |
| 12:21      | So what's the feedback been from the community since you've released it?                                          |
| 12:28      | Oh, it has been quite overwhelming, I would say.                                                                  |
| 12:35      | When I started the project, I had no idea that people would care about this small app,                            |
| 12:41      | but it's definitely something that a lot of people have an opinion about.                                         |
| 12:46      | Like what should be possible and how things should work in the app and giving all sorts                           |
| 12:55      | of great ideas.                                                                                                   |
| 12:57      | People are nice to come up with ideas and if they find any bugs they would report it on                              |
| 13:04      | the forum or [the Automators forum](https://talk.automators.fm).                                                                                 |
| 13:11      | That's just, it's overwhelming that it's something people actually care about.                                    |
| 13:17      | So Rose, you make it, you pay for your shoes, programming computers, among other things.                          |
| 13:24      | But you're also heavy into [[Shortcuts\|Siri Shortcuts]].                                                                        |
| 13:26      | Oh yeah, definitely.                                                                                              |
| 13:28      | So for the folks out there, where do you see the line between [[Scriptable]] and [[Shortcuts\|Siri Shortcuts]]?                  |
| 13:33      | I mean, what's the tasks you would do differently with the different platforms?                                   |
| 13:40      | It's one of those things where you can get extremely high level or really, really deep                            |
| 13:45      | into the system if you want to with [[Scriptable]].                                                               |
| 13:48      | And so for example, I mean, if I look at shortcuts and I'm like, okay, I want to get the list                     |
| 13:54      | of events that I've got today and I want to have them presented to me, well, I mean,                              |
| 14:00      | at the moment, at the very least, shortcuts is limited, it can either read me all of the                          |
| 14:04      | events or it can launch the app and show me the list of events, which is okay.                                    |
| 14:13      | But maybe I just want one thing said and one thing shown and that is where you can get                            |
| 14:19      | really nerdy with [[Scriptable]] because you can say, right, I want Siri to tell me this and                      |
| 14:24      | I want it to show me this.                                                                                        |
| 14:26      | But also you can then say, but hey, if I'm not writing it in [[Siri]], I want you to do this                          |
| 14:31      | in step police, which I have to say I am really, really excited by the fact that you've included                  |
| 14:37      | the ability to detect whether or not the [[Scriptable]] script is being run through Siri.                         |
| 14:42      | Is that something that you use a lot in your own script, Simon?                                                   |
| 14:45      | Yeah, I use it basically in most of the scripts that I choose to make runnable in Siri because                    |
| 14:54      | often I need different behaviour depending on if it's running in Siri or if I run it in                           |
| 15:00      | the app.                                                                                                          |
| 15:01      | For example, if I run a script in [[Siri]], I often want [[Siri]] to read out loud a text string                          |
| 15:10      | like with the is [[Slack]] down script, she will read yes, if slag is down or in the unlikely                          |
| 15:18      | case that [[Slack]] is not down, she will say no.                                                                      |
| 15:22      | But if I run the script from within the app, I don't need that feedback.                                          |
| 15:28      | I don't need her to say anything.                                                                                 |
| 15:30      | So yeah, that's how I usually make the scripts differ.                                                            |
| 15:35      | So Rose, have you made any of your own custom scripts in [[Scriptable]]?                                          |
| 15:39      | It's one of those things.                                                                                         |
| 15:40      | I've done a lot of one-off scripts and I find I do this with [[Shortcuts]] as well, where it's                        |
| 15:45      | just like, okay, I need to get this data and manipulate it in this way so that I can see                          |
| 15:49      | this or I can get this and I can save it to a file.                                                               |
| 15:52      | So I've done a lot of things like that and then I've deleted a lot of the scripts afterwards                      |
| 15:56      | because they were just one-time run things, which I think I'm probably in the minority                            |
| 16:01      | when I say that I mostly use [[Scriptable]] and shortcuts for one-time actions, automating                        |
| 16:07      | for one-time use sounds a bit crazy, but it does actually save me a lot of time and more                          |
| 16:10      | importantly, make it accurate.                                                                                    |
| 16:13      | But I have been using the ones that Simon has created and I've been modifying it.                                 |
| 16:18      | So for example, the latest news on [MacStories](https://www.macstories.net/), I just took it and I modified it.   |
| 16:22      | And now in the morning, it tells me three or four headlines from various different outlets                        |
| 16:29      | so that I can get something from the BBC and I can check in to make sure that Brexit is                           |
| 16:36      | still happening and various other things like that to make sure that I know what it's like                        |
| 16:42      | and then I can get the weather on top of that.                                                                    |
| 16:44      | So my good morning routine actually now is predominantly Scriptable-based.                                        |
| 16:49      | There are a few things that I'm doing with [[Shortcuts]] right now just because the [[Philips Hue\|Hue]] app                           |
| 16:53      | donates to [[Shortcuts]].                                                                                             |
| 16:55      | So we have [[Philips Hue\|Hue]] light bulbs.                                                                                       |
| 16:57      | So it's quite nice to do that.                                                                                    |
| 16:58      | But then I have it open [[Scriptable]] for me and then I don't actually need to make my Shortcut                  |
| 17:05      | open [[Scriptable]].                                                                                              |
| 17:06      | I could just have it end and then run my [[Scriptable]] script.                                                   |
| 17:10      | Yes.                                                                                                              |
| 17:11      | This is something I haven't tried before and this is probably a dumb question, but does                           |
| 17:17      | [[Scriptable]] donate to [[Shortcuts\|Siri Shortcuts]] so I can run my [[Scriptable]] as just another piece of                   |
| 17:22      | a Siri Shortcut?                                                                                                  |
| 17:23      | Yes.                                                                                                              |
| 17:24      | That you can do.                                                                                                  |
| 17:25      | Of course.                                                                                                        |
| 17:26      | Of course it does.                                                                                                |
| 17:27      | So actually, if you look in the settings of every shortcut, so that is in the top left                            |
| 17:33      | corner of the settings cog, then you can choose to add it to [[Siri]] directly and you can specify                    |
| 17:39      | if you want the shortcut to always run in the app, if it always needs to launch [[Scriptable]],                   |
| 17:44      | you can do that.                                                                                                  |
| 17:45      | You've got the [[URL Schemes\|URL scheme]] right there and there's also a really nice button called Add                            |
| 17:49      | to [[Launch Center Pro]], which would mean that you can have [[Launch Center Pro]] remind you                             |
| 17:53      | when you get to work to run a particular script, for example.                                                     |
| 17:58      | Looking at the Always Run in the app, Simon, can you tell us a little bit about why you                           |
| 18:02      | might want a [[Scriptable]] script to always run in [[Scriptable]]?                                               |
| 18:05      | Yes.                                                                                                              |
| 18:06      | So, there are some limitations when running Scripts from a share sheet on iOS or actually                         |
| 18:17      | when running it inside of [[Siri]].                                                                                   |
| 18:19      | Apps are constrained to fewer resources.                                                                          |
| 18:23      | Most importantly, the memory, the RAM that can be used, that's way more limited than                              |
| 18:30      | in the host app.                                                                                                  |
| 18:32      | So if you have a really heavy script that you want to run, but you want to run it from                            |
| 18:37      | a share sheet with some input, say you might have a photo that you can take in from a share                       |
| 18:45      | sheet and you want to process that photo, well, that might require a lot of memory.                               |
| 18:50      | So in that case, you might want to turn on Always Run in the app so you can run your                              |
| 18:54      | script with more memory, memory basically.                                                                        |
| 18:59      | Back in the days, the [[Workflow]] app used to have a similar setting because they were under                         |
| 19:05      | the same restrictions.                                                                                            |
| 19:08      | I would assume that the new [[Shortcuts]] app doesn't have it.                                                        |
| 19:10      | They probably have some special entitlement allowing them to use more memory.                                     |
| 19:15      | Yeah, I guess that's one of the advantages of getting bought by Apple is they get more                            |
| 19:19      | memory.                                                                                                           |
| 19:20      | I have to say, actually, in my experience, [[Shortcuts]] does occasionally error out when                             |
| 19:26      | I try, for example, if I try and share like four or five photos to add an app frame, it                           |
| 19:31      | actually just dies silently on me.                                                                                |
| 19:34      | And then when I run it again for the second time, it seems to work.                                               |
| 19:37      | And so I have a feeling it might still be running into those memory issues you were                               |
| 19:40      | just talking about.                                                                                               |
| 19:42      | Really?                                                                                                           |
| 19:43      | Yeah.                                                                                                             |
| 19:44      | Found something out there.                                                                                        |
| 19:45      | No, I think about it.                                                                                             |
| 19:46      | That might explain a few things I've been dealing with, too.                                                      |
| 19:48      | Yes, but you can, if for anybody else experiencing that issue in [[Shortcuts]], there is a shortcut                      |
| 19:54      | action which specifies that you can tell it to open, continue in [[Shortcuts]], and then                          |
| 20:00      | it will open the app and then run the shortcut, which would, of course, is basically the same                     |
| 20:07      | as what you were doing at Simon and [[Scriptable]] with specifying, hey, always open in the app,                  |
| 20:12      | which is really nice.                                                                                             |
| 20:14      | You can also get a [[URL Schemes\|URL scheme]] for your script.                                                                    |
| 20:16      | So to the extent you're using [[URL schemes]], that's another way to call back easily.                                |
| 20:21      | Yes.                                                                                                              |
| 20:22      | So with [[URL schemes]], you can also pass arguments to a script country.                                             |
| 20:26      | Yes, you can.                                                                                                     |
| 20:27      | You can pass arbitrary arguments to a script using the query parameters of the [[URL Schemes\|URL scheme]].                        |
| 20:35      | So when you go into the script settings and you scroll down to the [[URL Schemes\|URL scheme]], you'll                             |
| 20:40      | see that it says something like `scriptable:///run`.                                                              |
| 20:47      | And then there's a query parameter that is the script name.                                                       |
| 20:51      | And you can add more of those after the script name using the ampersand character.                                |
| 20:57      | And those parameters will be available when you run your script.                                                  |
| 21:00      | So this is really useful if you want to grab data from somewhere, I don't know, maybe something                   |
| 21:04      | can share to Shortcuts and then Shortcuts can grab that information and manipulate it                             |
| 21:08      | in some strange way that [[Scriptable]] can't, which I'm thinking it probably could, actually.                    |
| 21:13      | Then you could then pass it on to [[Scriptable]].                                                                 |
| 21:16      | But this is also useful, for example, if I wanted, David and I had a shared [[Scriptable]]                        |
| 21:21      | script.                                                                                                           |
| 21:22      | I could actually send him a [[URL Schemes\|URL scheme]] that would give him the right variables to create                          |
| 21:26      | a special Automators episode in [[OmniFocus]], for example.                                                           |
| 21:30      | Yeah.                                                                                                             |
| 21:31      | You know what I love?                                                                                             |
| 21:33      | Apple has not really done a great job at this point of giving us ways to pass data.                               |
| 21:38      | I mean, you can have variables inside a [[Siri]] shortcut, but you know, you can't, it's not                          |
| 21:43      | that easy to put data into it and you've got [[Scriptable]] and you've got [[Shortcuts\|Siri Shortcuts]]                         |
| 21:49      | and everybody's coming up with these creative solutions to get around that limitation.                            |
| 21:55      | It almost reminds me of the emergence of the [[URL Schemes\|URL scheme]] to begin with.                                            |
| 21:59      | But I just love that, you know, the community is like, okay, that's fine, we'll use the                           |
| 22:03      | clipboard, we'll use [[URL Schemes]], we'll do whatever we need to do to get what we want.                            |
| 22:08      | Yes, nerds will not be stopped, I think is the correct answer there.                                              |
| 22:15      | And hopefully in a future release, we'll get, you know, the Apple will formalise that to                          |
| 22:18      | where we don't need to do this stuff, but for now, we do have a solution.                                         |
| 22:22      | I love that.                                                                                                      |
| 22:24      | Yes.                                                                                                              |
| 22:25      | So I'm just looking because, of course, in the application as well, so top left, you've                           |
| 22:29      | got the settings icon for every single script, middle, you have the play button, just like                        |
| 22:35      | Shortcuts or workflow, which is what can run the script in the application, which is very                         |
| 22:39      | useful if you're trying to test it.                                                                               |
| 22:41      | And then the top right, there's a book icon, which of course opens the documentation.                             |
| 22:45      | And oh my gosh, there is so much here.                                                                            |
| 22:48      | Can you just give us an overview of the kinds of system APIs that [[Scriptable]] can hook into?                   |
| 22:55      | Yes, sure.                                                                                                        |
| 22:57      | So there are a lot of different APIs, but there are stuff like the calendar reminders.                            |
| 23:07      | You can even access the file systems, so you can read and write to your [[iCloud]] Drive directly                     |
| 23:15      | from [[Scriptable]].                                                                                              |
| 23:17      | You have access to the photos and networking requests and so on.                                                  |
| 23:23      | Yes, and this, of course, is great because then you can grab all of this data and you                             |
| 23:28      | can take it and then you can either have it spoken to you or you can turn into a document                         |
| 23:36      | and save it somewhere.                                                                                            |
| 23:37      | And you've also included the UI table, which for people not aware is basically the way                            |
| 23:43      | to create a table, which means that you can then even if you want to present it in a table                        |
| 23:48      | format and have it just pop up in [[Siri]], which is one of the things that I see people using                        |
| 23:53      | a lot and it's really exciting to see people get excited about tables in [[JavaScript]].                          |
| 23:57      | For some reason, that just makes me happy.                                                                        |
| 24:00      | Well, I mean, people are happy about it or excited because you can use the [[JavaScript]]                         |
| 24:05      | for something practical.                                                                                          |
| 24:06      | Yes.                                                                                                              |
| 24:07      | Practical, excuse me.                                                                                             |
| 24:08      | I mean, you can address an email message.                                                                         |
| 24:10      | You can create a table.                                                                                           |
| 24:12      | You can create calendar events.                                                                                   |
| 24:14      | It just gives you this power.                                                                                     |
| 24:16      | And like you were saying earlier, you do have a lot of this with [[Shortcuts\|Siri Shortcuts]], but if                           |
| 24:20      | you want to go a level deeper and have even more control, then you just write a [[JavaScript]]                    |
| 24:25      | through this app and you're good.                                                                                 |
| 24:27      | Yes, because I've just been looking, of course, you have the key chain in here as well, which                     |
| 24:31      | for people not aware, that's the built-in password storage in iOS and actually on the                             |
| 24:38      | Mac, and so you can allow people to get and set credentials on that, which of course will                         |
| 24:43      | pop up a warning if somebody is trying to access that at least the first time, if I                               |
| 24:47      | remember correctly, so that you can then grab, for example, an API key and store it in key                        |
| 24:56      | chain, which is something that you absolutely cannot do in shortcuts.                                             |
| 25:00      | If you want to, for example, connect to a server via [[SSH]], you need to know the username                           |
| 25:06      | and password and you put them in the app and anybody that can open that shortcut can read                         |
| 25:10      | at the very least the username, copying the password out doesn't work, but yeah, so that's                        |
| 25:16      | really useful.                                                                                                    |
| 25:18      | What made you add the key chain API of all things?                                                                |
| 25:21      | Yeah, it was one of the more requested APIs as people started to share their own scripts.                         |
| 25:28      | They would have to remove API keys and credentials from the scripts before sharing them.                          |
| 25:36      | But by putting them into the key chain and using the key chain inside of the script,                              |
| 25:44      | you can basically just share the script where it's fetching those credentials from the key                        |
| 25:52      | chain.                                                                                                            |
| 25:53      | So this is basically an API that's meant for people sharing scripts.                                              |
| 25:57      | Well, I can believe a lot of people are sharing scripts because I see them sharing scripts                        |
| 26:02      | in the forums and asking for help creating things, which is really exciting to see so                             |
| 26:07      | many people getting very excited about this application.                                                          |
| 26:11      | Another example of where it runs deeper is like the device information.                                           |
| 26:14      | You can get device information with Siri shortcuts, but you can't get information like, is it                     |
| 26:19      | charging or not?                                                                                                  |
| 26:20      | Or is it face up or face down?                                                                                    |
| 26:23      | And that's the type of information you can get with [[Scriptable]].                                               |
| 26:26      | It just runs deeper and you just let your mind ponder that for a minute.                                          |
| 26:30      | Maybe there's a script that you want to run when it's face down.                                                  |
| 26:33      | I mean, I don't know.                                                                                             |
| 26:34      | I like this stuff.                                                                                                |
| 26:35      | Well, I know on Android, there's with automator, no, not automator, there's a couple of automation                |
| 26:44      | apps on Android where you can specify that if you put your phone face down, it should                             |
| 26:49      | go into do not disturb mode.                                                                                      |
| 26:51      | So if you're running the script and you turn your phone face down, you could theoretically                        |
| 26:55      | have it reduce the brightness and things like that just to save battery if you wanted to,                         |
| 27:02      | I suppose.                                                                                                        |
| 27:03      | Although, I think Apple's already doing that to be able to set up anything.                                       |
| 27:07      | Yeah.                                                                                                             |
| 27:08      | But if you've left your screen on and you're running the [[Scriptable]] app, it's just a question                 |
| 27:15      | of, of course, when does it check the screen configuration?                                                       |
| 27:18      | And it's someone who likes to dictate a lot, Simon.                                                               |
| 27:21      | I love that you included the ability to open a dictation window.                                                  |
| 27:24      | So you can include that into your script just to open a dictation window and start talking.                       |
| 27:28      | I doubt that was, I doubt that was a real hard one.                                                               |
| 27:31      | And I think it's just one thing you do, but it's, it's useful, you know, the whole point                          |
| 27:37      | of this stuff, I think, is making this programming stuff useful and allowing people to build                      |
| 27:42      | things to help them save time.                                                                                    |
| 27:44      | And I think you've really done it with this app.                                                                  |
| 27:47      | Well, thank you.                                                                                                  |
| 27:48      | I'm glad to, I'm glad you like it.                                                                                |
| 27:49      | And I'm glad that someone is using the dictation API.                                                             |
| 27:52      | Well, one of us.                                                                                                  |
| 27:55      | I'm using it too.                                                                                                 |
| 27:56      | So that's two of us.                                                                                              |
| 27:57      | Yay.                                                                                                              |
| 27:58      | Ah, amazing.                                                                                                      |
| 28:01      | This episode of Automators is brought to you by the Omni Group, the makers of OmniFocus.                          |
| 28:06      | OmniFocus for three is a major update to the app, which has been the trusted gold standard                        |
| 28:12      | to do application for 10 years since its very first day on the App Store, which was the                           |
| 28:17      | first day of the App Store.                                                                                       |
| 28:19      | It is the best OmniFocus ever.                                                                                    |
| 28:22      | In OmniFocus three, you have tags instead of context.                                                             |
| 28:26      | You can create tags for people, energy, priorities, location, anything you like.                                  |
| 28:31      | And in the forecast view, you now get a complete overview of all of your tasks and your calendar                  |
| 28:36      | events in order, sorted, ready for you.                                                                           |
| 28:39      | So you can see what's coming at you today and adjust them if you need to.                                         |
| 28:44      | You have enhanced repeating tasks, which are even easier to set up than they were before.                         |
| 28:49      | And they work with real-world examples such as the first weekday of the month.                                    |
| 28:53      | You can even batch edit on iOS now, which lets you set due dates or tags, or even modify                          |
| 28:59      | the project of multiple tasks at once, or you can modify multiple projects.                                       |
| 29:05      | And finally, you have the flexible inspector, which means that if you never used a fair                           |
| 29:09      | date, you can hide them just by tapping the Edit Inspector button, which allows you to                            |
| 29:14      | hide and show those things that you truly want so that you have them right under your                             |
| 29:19      | fingers.                                                                                                          |
| 29:20      | If you download OmniFocus three today for iOS, then you get a 14-day free trial and you can                       |
| 29:26      | then buy the standard or the Pro Edition.                                                                         |
| 29:29      | Don't worry if you've got an older version of OmniFocus, you can get a 50% discount if                            |
| 29:33      | you have the older version installed.                                                                             |
| 29:36      | Go to omnifocus.com right now and start getting more done.                                                        |
| 29:40      | That's omnifocus.com.                                                                                             |
| 29:42      | OmniFocus.                                                                                                        |
| 29:43      | You can accomplish more every day.                                                                                |
| 29:44      | Our thanks to the Omni Group for their support of this show and Relay FM.                                         |
| 29:50      | So if someone's out there listening and they don't know [[JavaScript]], we've talked in the                       |
| 29:53      | past that we've recommended sites like [Code Academy](https://codecademy.com) and the [Linda](https://www.linkedin.com/learning/) and some of the others.                         |
| 30:02      | What would you recommend for someone getting started with this stuff that they want to                            |
| 30:06      | try and pick up the app and learn a little bit of [[JavaScript]] and try and use this to                          |
| 30:10      | automate some of their items?                                                                                     |
| 30:12      | Yeah, so that's a great question.                                                                                 |
| 30:14      | How do you learn [[JavaScript]]?                                                                                  |
| 30:17      | I think as you mentioned, the [Code Academy](https://codecademy.com) is a really, really good place to start.                               |
| 30:22      | They have these great courses that are easy to follow and really takes you through some                           |
| 30:29      | of the basics.                                                                                                    |
| 30:31      | And I think as soon as you have some of the basics settled, like how do you make a variable?                      |
| 30:38      | What's a string, what's a number, and so on, well, it doesn't take much more than that                            |
| 30:44      | before you can start using [[Scriptable]].                                                                        |
| 30:47      | So as soon as you have the basics, I think [[Scriptable]] is also a decent place to learn                         |
| 30:54      | some [[JavaScript]].                                                                                              |
| 30:55      | Yeah, I really believe that this is to me the platform to learn [[JavaScript]] on.                                |
| 31:02      | If you like iOS, if you're listening to this show, you're probably an Apple person.                               |
| 31:07      | But like I said earlier, it allows you to tie into stuff.                                                         |
| 31:13      | [[JavaScript]] is not that hard to learn.                                                                         |
| 31:14      | If you just took a weekend and went to [Code Academy](https://codecademy.com) or to one of these sites that teaches                         |
| 31:19      | you the basics, you would learn enough.                                                                           |
| 31:21      | And then once you open this app, like we were talking about earlier, they've got these APIs.                      |
| 31:25      | So you can take that [[JavaScript]] that you learned and then you can say, well, I want to add                    |
| 31:30      | a dictation box here.                                                                                             |
| 31:31      | Well, it's right here.                                                                                            |
| 31:32      | It shows you how to do it.                                                                                        |
| 31:33      | You just add it to your code, and when you run it, a dictation box shows up.                                      |
| 31:38      | It really feels like you're programming and it's a lot of fun.                                                    |
| 31:41      | If you've been curious about this, I think this is a great on-ramp for you.                                       |
| 31:44      | I mean, if you're good at [[Shortcuts\|Siri Shortcuts]], you know enough to do this.                              |
| 31:50      | You just got to get yourself a little knowledge, and you just got to learn a little bit about                     |
| 31:53      | the syntax of Java.                                                                                               |
| 31:55      | But I think that's time well spent if you like automation, because [[JavaScript]] is the                          |
| 32:00      | foundation of the Omni stuff.                                                                                     |
| 32:02      | This just seems to be growing in use for automation everywhere.                                                   |
| 32:06      | And this stuff will not only serve you on iOS, it'll serve you on the Mac as well.                                |
| 32:11      | Definitely.                                                                                                       |
| 32:12      | It's everywhere.                                                                                                  |
| 32:13      | And I mean, learning a programming language is one of those things.                                               |
| 32:16      | Some people do struggle with it, but it is well worth it.                                                         |
| 32:20      | And of course, once you've learned one programming language, picking up another one is not so                     |
| 32:24      | tricky, because it's the principles behind it that really are what you need to know to                            |
| 32:29      | understand this stuff.                                                                                            |
| 32:31      | So [[JavaScript]] is a great place to start with that, because you can do so much with it.                        |
| 32:35      | And especially with [[Scriptable]], in my opinion, this is the best app to get started with learning              |
| 32:40      | [[JavaScript]].                                                                                                   |
| 32:41      | It's that or maybe [[Drafts]], because you can actually do something that is useful to you.                       |
| 32:48      | And that's the thing.                                                                                             |
| 32:49      | Coding is great when it's theoretical, and everyone's like, yeah, yeah, that's nice.                              |
| 32:53      | But this, you can actually make your iPhone do what you want it to do.                                            |
| 32:57      | So you can say, hey, if my iPhone is charging, then I don't care what the battery life is                         |
| 33:01      | like.                                                                                                             |
| 33:02      | But hey, if my iPhone is not charging, but the battery is less than 50%, then I want                              |
| 33:06      | you to remind me to do this.                                                                                      |
| 33:07      | And I want you to add these tasks to my OmniFocus.                                                                |
| 33:10      | And oh, wait, you can put this in things.                                                                         |
| 33:12      | And I want a new net with that.                                                                                   |
| 33:13      | All sorts of things.                                                                                              |
| 33:14      | Because of course, you have [[URL Schemes\|URL scheme]] support as well, because in the documentation, there                       |
| 33:19      | is support for callback URL, which is [[URL Schemes\|URL scheme]].                                                                 |
| 33:23      | So you can even tell it to open things and do stuff with apps that maybe don't yet have                           |
| 33:28      | other automation possibilities.                                                                                   |
| 33:31      | So let's assume a few of our listeners are curious about this, but they're not going                              |
| 33:34      | to go watch a course yet.                                                                                         |
| 33:35      | They just want to open up the app and play with it.                                                               |
| 33:38      | And looking through these apps or these scripts you include, a lot of it is very understandable.                  |
| 33:44      | I mean, setting a URL, you can look at that and you understand what it is you read the                            |
| 33:49      | URL.                                                                                                              |
| 33:50      | And for folks who've never done [[JavaScript]] before, there's this guy named "Jason" that                          |
| 33:55      | keeps showing up in all of your scripts.                                                                          |
| 33:58      | And tell us about [[JSON]].                                                                                           |
| 34:00      | Yeah, [[JSON]] is basically the way that [[JavaScript]] objects are structured.                                       |
| 34:09      | It's a format like some people might know [[XML]] or other markup languages.                                          |
| 34:16      | So [[JSON]] is a small language to express the structure of an object.                                                |
| 34:24      | So you have these keys, and each key has a value, so you could have a name key, and then                          |
| 34:32      | the value could be David, David, and so on.                                                                       |
| 34:36      | So you compose these objects that contain data that can be passed around between apps                             |
| 34:44      | or on the web.                                                                                                    |
| 34:47      | So if you load data from an API, most modern APIs will return [[JSON]].                                               |
| 34:54      | And this is really easy to process in [[JavaScript]].                                                             |
| 34:58      | Actually [[JavaScript]] objects notation, which is why it's so easy to pass in [[JavaScript]].                    |
| 35:04      | So yes.                                                                                                           |
| 35:05      | Yeah, and it's J-S-O-N.                                                                                           |
| 35:08      | Rose, why don't you talk us through?                                                                              |
| 35:10      | We did this with [[Sal Soghoian\|Sal]] on this show.                                                                                |
| 35:13      | So let's assume that if you're listening to this show at this point, you've downloaded                            |
| 35:16      | [[Scriptable]] or you're about to.                                                                                |
| 35:19      | Let's walk through just one of them just to kind of give people a flavour of what's involved.                     |
| 35:24      | And if you want to just kind of narrate us through the comic and [[Siri]] one, that's a very                          |
| 35:28      | short one.                                                                                                        |
| 35:29      | Just kind of explain what's going on a little bit.                                                                |
| 35:31      | So if someone's at home listening along, they can get an idea from an expert.                                     |
| 35:36      | Okay.                                                                                                             |
| 35:37      | Well, I'm going to need Simon to help me out with this because there is a little thing                            |
| 35:41      | in here called await, which he's going to have to explain a little.                                               |
| 35:45      | But to start with, you have to say what the URL is of [XKCD](https://xkcd.com) in this case so that we can                            |
| 35:51      | get the information from it.                                                                                      |
| 35:53      | And then we make a new request, which means that we're going to say, hey, URL, I want                             |
| 35:59      | this information, please.                                                                                         |
| 36:01      | And then we say that we want to get the [[JSON]] from this URL.                                                       |
| 36:05      | And we await loading the [[JSON]].                                                                                    |
| 36:08      | Simon, can you give us a brief explanation of what await means?                                                   |
| 36:13      | Await basically means that we are performing an operation where we want a value, but that                         |
| 36:19      | value is not really ready for us yet.                                                                             |
| 36:21      | So in this case, we're making a network request, which is an operation that takes time.                           |
| 36:26      | But we want to wait until that operation has finished and then get the value.                                     |
| 36:30      | And if I understand this correctly, I mean, the internet is not necessarily immediate                             |
| 36:34      | and you don't want the script to run forward before you get the data back.                                        |
| 36:39      | Exactly.                                                                                                          |
| 36:40      | Yeah.                                                                                                             |
| 36:41      | All right.                                                                                                        |
| 36:42      | So now we have our [[JSON]].                                                                                          |
| 36:43      | We've waited for that to come back to us.                                                                         |
| 36:45      | And then we get the image from the JSON.                                                                          |
| 36:48      | Okay.                                                                                                             |
| 36:49      | So the JSON can be accessed with square brackets.                                                                 |
| 36:52      | And then you can specify the key that you're looking for.                                                         |
| 36:55      | So Simon used the example earlier of David.                                                                       |
| 36:57      | In this case, it's IMG, which means image.                                                                        |
| 37:00      | And then we get the alt text because every [XKCD](https://xkcd.com) comic has alternative text, which is                              |
| 37:07      | very amusing.                                                                                                     |
| 37:08      | And I highly recommend, if you haven't looked at that before, you should.                                         |
| 37:12      | And then we go through and we get the image itself.                                                               |
| 37:19      | We do that by doing another request, which has the image URL in it.                                               |
| 37:23      | And then we wait again for the image to come back.                                                                |
| 37:26      | Image is especially on the internet, can take a little while to load.                                             |
| 37:29      | And then we look at the image.                                                                                    |
| 37:32      | And if it's being run through Siri, then you get [[Siri]] to speak the alt text as well, which                        |
| 37:37      | is an excellent example.                                                                                          |
| 37:39      | And I actually have a friend who learned that there is alt text on [XKCD](https://xkcd.com) comics because I                          |
| 37:44      | demoed the script for them.                                                                                       |
| 37:46      | So, yes.                                                                                                          |
| 37:48      | And the exciting part for me at the end is, so this is just like five or six lines of                             |
| 37:52      | code.                                                                                                             |
| 37:53      | It's not very much once you look at it, but at the end is the API call.                                           |
| 37:56      | It's where you get to make something happen on the device.                                                        |
| 37:59      | And you don't have to figure out how to create an image viewer or, you know, you're not writing                   |
| 38:06      | a program to display images.                                                                                      |
| 38:08      | You just access the quick look and it just pops up on the screen.                                                 |
| 38:12      | And you're in essence tied into those APIs that Simon spent all of his time making for                            |
| 38:16      | us.                                                                                                               |
| 38:17      | So, that's the payoff, you know, you do a little bit of code and then you tie into                                |
| 38:22      | something that Apple and Simon have already generously created for us and you get the                             |
| 38:27      | benefit of it.                                                                                                    |
| 38:28      | That's fun.                                                                                                       |
| 38:29      | You know, the stuff can be fun if you spend a little time with it.                                                |
| 38:33      | Definitely.                                                                                                       |
| 38:34      | It's one of these apps.                                                                                           |
| 38:35      | I saw you creating this and I was like, I need to be on the beta for this.                                        |
| 38:38      | And at that point, that wasn't a beta yet.                                                                        |
| 38:40      | You weren't ready.                                                                                                |
| 38:41      | And I was there going, hmm, how patient can I be?                                                                 |
| 38:43      | Because it is amazing.                                                                                            |
| 38:45      | I can tell [[Siri]] to do stuff and I can use all of these fabulous things that are available.                        |
| 38:50      | But I don't have to learn to program an app.                                                                      |
| 38:53      | I mean, I am trying to learn [[Swift]], but I only have so many hours in the day.                                    |
| 38:57      | And unfortunately, it doesn't provide enough time to really properly learn [[Swift]] so that                          |
| 39:02      | I can actually make an app and you've done all the hard work for me.                                              |
| 39:05      | So now I can use an language that I'm already familiar with to do exactly what I would want                       |
| 39:10      | to do in an app.                                                                                                  |
| 39:12      | And even more.                                                                                                    |
| 39:13      | Well, Simon, I know you spent a lot of time putting this together and we do appreciate                            |
| 39:17      | a lot because I feel like this combined with Siri shortcuts, it's like automation Christmas                       |
| 39:23      | for us on iOS right now.                                                                                          |
| 39:25      | And this is going to give people who want to go deeper.                                                           |
| 39:29      | And it is work.                                                                                                   |
| 39:30      | I mean, don't get me wrong.                                                                                       |
| 39:31      | You will have to spend that weekend learning a little bit of [[JavaScript]].                                      |
| 39:34      | But like I said, I don't think the on ramp is as steep as you may think it is.                                    |
| 39:37      | And once you get in there and you start fiddling around with it and like you go on to the automators.fm,          |
| 39:43      | talk about automators.fm and join with the groups of people that are already making scripts                       |
| 39:47      | for this, you're going to get a lot of help.                                                                      |
| 39:50      | But once you start doing that, you can take it to the next level and you can even make                            |
| 39:53      | little components to add to [[Shortcuts\|Siri Shortcuts]] if you want to, you know, I mean, it's just                            |
| 39:59      | like the sky's the limit for you.                                                                                 |
| 40:00      | So we would all three of us encourage you to download this app and give it a try.                                 |
| 40:05      | And if you see any use for it all, please give Simon a donation.                                                  |
| 40:08      | He's giving it away.                                                                                              |
| 40:09      | And I want to make sure that he can continue to develop it because it's a very selfish                            |
| 40:14      | thing.                                                                                                            |
| 40:15      | But I love this app and I want to keep using it.                                                                  |
| 40:18      | Yes, definitely.                                                                                                  |
| 40:21      | And as David mentioned at the beginning, there is a lovely surprise if you tip, so you really                     |
| 40:26      | ought to.                                                                                                         |
| 40:27      | All right, Simon.                                                                                                 |
| 40:28      | So what's next for [[Scriptable]] if you can share now?                                                           |
| 40:31      | Have you got some plans?                                                                                          |
| 40:32      | You want to add any new features to it or are you, you know, where are you at right now                           |
| 40:36      | in your development?                                                                                              |
| 40:37      | Yeah.                                                                                                             |
| 40:38      | So I'm working on the next big update version 1.1 and I've already got a few features prepared.                   |
| 40:48      | So then one of the next big things will be auto completion.                                                       |
| 40:51      | A lot of people have been wanting that and myself included.                                                       |
| 40:55      | And I think that will make writing scripts much faster.                                                           |
| 40:59      | So when you when you start typing in the editor, it will suggest APIs and variables that you                      |
| 41:08      | have created.                                                                                                     |
| 41:09      | Yeah.                                                                                                             |
| 41:10      | So with a single tap, you can just it will complete the complete the word for you, much                           |
| 41:14      | like when you're writing text messages.                                                                           |
| 41:16      | It's like if you've ever written computer code, a lot of times the computer knows basically                       |
| 41:21      | where you're going as soon as you start, like if you write let, it knows where you're going                       |
| 41:24      | with that.                                                                                                        |
| 41:25      | And so what he's talking about is just making it so it just fills the line in for you.                            |
| 41:30      | Then I guess you would just tap in your variable name or whatever the object is of that line                      |
| 41:34      | of code and then and keep going.                                                                                  |
| 41:37      | Yeah, exactly.                                                                                                    |
| 41:38      | I've been using this for a month or so.                                                                           |
| 41:40      | And the other day I was using the current version of the app and I was like, what?                                |
| 41:46      | How could I ever live without auto completion?                                                                    |
| 41:49      | I think it's going to be a big deal.                                                                              |
| 41:51      | Yeah.                                                                                                             |
| 41:52      | Yeah.                                                                                                             |
| 41:53      | But any idea when that's going to ship?                                                                           |
| 41:55      | Oh, I don't want to make any any promises, but okay, I'm not trying to put you on the                             |
| 42:00      | spot.                                                                                                             |
| 42:01      | I was just curious because I want it, but I'm going to I'm going to bug you to get on                             |
| 42:04      | the beta.                                                                                                         |
| 42:05      | You know, you know what's going to happen, Simon?                                                                 |
| 42:08      | But there is a beta sign up or has been a beta sign up in the forum.                                              |
| 42:12      | So if you are interested in getting on the beta, then I would highly recommend keeping                            |
| 42:16      | an eye on that and the [[Scriptable]] Twitter accounts because then you might well be able                        |
| 42:20      | to get onto the beta and enjoy some of these new features as they are being developed.                            |
| 42:25      | And of course, help Simon up by providing some good feedback to let him improve the app                           |
| 42:30      | as he sees fit.                                                                                                   |
| 42:32      | So we released the show on Fridays for a reason.                                                                  |
| 42:34      | You're heading off to your weekend now.                                                                           |
| 42:36      | We're all geeks, right?                                                                                           |
| 42:37      | We're listening to a show about [[Scriptable]].                                                                   |
| 42:40      | Follow the app, throw a few bucks to Simon and get online, learn a little [[JavaScript]]                          |
| 42:45      | and see if you can't make your your iPhone and your iPad jump in circles for you a little                         |
| 42:49      | bit this weekend.                                                                                                 |
| 42:50      | And let us know what you do.                                                                                      |
| 42:51      | We'd love to see your scripts.                                                                                    |
| 42:53      | Definitely.                                                                                                       |
| 42:54      | Please, if you have [[Scriptable]] scripts that you've made and you can't show them and you                       |
| 42:57      | haven't showed them yet, then we would love to see them in the forums because that is                             |
| 43:02      | a really nice place to share scripts and to give other people ideas.                                              |
| 43:05      | And if you're looking for scripts or you're looking for some ideas, again, check the forums,                      |
| 43:10      | talk.automators.fm.                                                                                               |
| 43:11      | There's a [[Scriptable]] category and you can find loads of really great examples there.                          |
| 43:17      | And of course, some very helpful people who are very willing to give you some of their                            |
| 43:21      | time to help you figure these things out if you're stuck.                                                         |
| 43:25      | So go and sign up if you haven't already.                                                                         |
| 43:28      | Thanks again, Simon, for coming in and talking to us today and all the work you've done in                        |
| 43:32      | making this application.                                                                                          |
| 43:33      | Well, I'm glad to be here.                                                                                        |
| 43:35      | Thank you for having me.                                                                                          |
| 43:36      | Excellent.                                                                                                        |
| 43:37      | I will find you online, Simon.                                                                                    |
| 43:40      | Twitter is probably the best place.                                                                               |
| 43:42      | I'm at Simon Bias and they can follow the [[Scriptable]] app on, yeah, at [[Scriptable]] app.                     |
| 43:49      | And occasionally, I'm also on the [talk.automators.fm](https://talk.automators.fm) forum.                                                       |
| 43:55      | Yes, you are.                                                                                                     |
| 43:58      | Often pop up just after somebody's answer something and it's always quite interesting                             |
| 44:01      | to see your responses because you're very helpful there when you've got the time.                                 |
| 44:05      | But of course, you're developing an app, so there's only so many hours of the day.                                |
| 44:09      | David, where can people find you?                                                                                 |
| 44:12      | You can find me over at [macsparky.com](https://macsparky.com) and [learn.macsparky](https://learn.macsparky.com).                                                        |
| 44:15      | And how about you, Rose?                                                                                          |
| 44:17      | I am at [rosemaryorchard.com](https://rosemaryorchard.com) at rosemaryorchard on micro blog and Twitter and rosemaryorchard                      |
| 44:23      | on Mastodon as well.                                                                                              |
| 44:25      | That's mastodon.social.                                                                                           |
| 44:27      | And of course, Automators is [Automators.fm](https://automators.fm).                                                                       |
| 44:30      | And you can find us and talk to us, give us feedback, tell us what you're doing with                              |
| 44:33      | [[Scriptable]] over in the forums, which you've heard the URL 100 times.                                          |
| 44:38      | Here it is, 101, [talk.automators.fm](https://talk.automators.fm).                                                                                |
| 44:41      | All right, everybody, have a great weekend.                                                                       |
| 44:44      | It's Scripting, and we'll see you in two weeks.                                                                   |
