---
status: "incomplete"
fc-date:
  year: 2021
  month: 05
  day: 21
fc-category: "podcast"
podcast: "Automators"
published: 2021-05-21
duration: 6356
formattedduration: "01:45:56"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/76"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators076.mp3"
episode: 76
title: "76: Automating with Alfred"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David dig in with ways they are using the Mac utility Alfred to automate using their Macs. This episode starts with the basics and then starts digging down.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 076 Discussion](https://talk.automators.fm/t/76-automating-with-alfred/11267)

# Sponsors
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast about SharePoint, OneDrive and related tech within Microsoft 365.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

# Show Notes
- [Alfred - Productivity App for macOS](https://www.alfredapp.com/)
- [Mac Power Users #497: Spotlight, Alfred & LaunchBar - Relay FM](https://www.relay.fm/mpu/497)
- [Guides and Tutorials - Alfred Help and Support](https://www.alfredapp.com/help/guides-and-tutorials/)
- [Workflows - Alfred Help and Support](https://www.alfredapp.com/help/workflows/)
- [Advanced Preferences - Alfred Help and Support](https://www.alfredapp.com/help/advanced/)
- [Snippets and Text Expansion - Alfred Help and Support](https://www.alfredapp.com/help/features/snippets/)
- [Snippets - Alfred](https://www.alfredapp.com/extras/snippets/)
- [Rocket – the best emoji app for Mac](https://matthewpalmer.net/rocket/)
- [Alfred 4 Update - Apple Mac, iPad & iPhone Tutorials from ScreenCastsOnline](https://screencastsonline.com/tutorials/mac-apps/alfred-4-update)
- [Amazon.com: Anker Magnetic Wireless Portable Charger, PowerCore Magnetic 5K Wireless 5,000mAh Power Bank with USB-C Cable, Design for iPhone 12/12 Pro / 12 Pro Max / 12 Mini](https://www.amazon.com/Anker-Magnetic-Wireless-Portable-PowerCore/dp/B08TW7BRTJ/ref=sr_1_3?dchild=1&keywords=anker+magsafe&qid=1620760782&sr=8-3)
- [Alfred Workflows - Extend Alfred and Boost Your Productivity](https://www.alfredapp.com/workflows/)
- [TimeZones-Alfred Workflow](https://github.com/jaroslawhartman/TimeZones-Alfred/releases)
- [rhydlewis/search-omnifocus: Alfred workflow that allows free text searching of OmniFocus tasks](https://github.com/rhydlewis/search-omnifocus)
- [VPN Connections | Packal](https://www.packal.org/workflow/vpn-connections)
- [Adding tasks from Alfred 3? - OmniFocus - The Omni Group User Forums](https://discourse.omnigroup.com/t/adding-tasks-from-alfred-3/35232/4?u=rosemaryjayne)
- [File Search - Alfred Help and Support](https://www.alfredapp.com/help/features/file-search/)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators. I'm David Sparks, and I'm joined by my co-host, Rosemary Orchard,                 |
| 00:06      | and this is where we talk about how to automate your technology to do your bidding for you.              |
| 00:12      | How are you, fellow Automator Rosemary Orchard?                                                          |
| 00:14      | Oh, I'm excited. There's something purple in the post. Actually, it's probably still                     |
| 00:20      | in a factory somewhere, but, you know, it's on its way, theoretically.                                   |
| 00:23      | Oh, that's nice.                                                                                         |
| 00:24      | Purple Mac.                                                                                              |
| 00:25      | And in the meantime, I have a purple floaty thing on my computer when I press Command                    |
| 00:28      | Space.                                                                                                   |
| 00:29      | Command Space gets you the purple floaty thing you're talking about, [[Alfred]], which                       |
| 00:33      | is what we're going to talk about today.                                                                 |
| 00:35      | Before we get into [[Alfred]], I just want to share with the listeners a funny story about                   |
| 00:39      | Rosemary Orchard.                                                                                        |
| 00:40      | So before the show, she's got a week off. I said, well, just take a week off and, like,                  |
| 00:46      | don't do a bunch of work. And she says, oh, yeah, I'm totally taking my time off. And                    |
| 00:49      | then she sends me a picture of new locks she's installing in her house. That's how Rose                  |
| 00:54      | takes her week off, King.                                                                                |
| 00:56      | Okay.                                                                                                    |
| 00:57      | So, David, I should be clear for our listeners. You told me to take off a week off of worky              |
| 01:02      | work. Okay. So I'm still going to be recording podcasts and stuff. I'm actually slightly                 |
| 01:06      | amping that up because I'm about to start a new job and I want to be able to give myself                 |
| 01:09      | a little bit of a buffer when I start. But that means I'm not going out and looking for                  |
| 01:13      | extra, like, articles to write and videos to record, things like that. But I have a                      |
| 01:18      | whole list of home automation projects that I want to get done. So of course I installed                 |
| 01:22      | a new smart lock. Why wouldn't I?                                                                        |
| 01:23      | Why are you at it? Are you going to replace those old copper pipes in the kitchen? I mean,               |
| 01:27      | you might as well do that, too.                                                                          |
| 01:29      | No. No. No. So, our kitchen is a bathroom strictly off limits, according to UK building                  |
| 01:33      | regulations. So I'm living with whatever the previous owners had there because it, yeah,                 |
| 01:40      | it's that or pay somebody qualified to deal with it. And I don't think it's really worth                 |
| 01:43      | it right now.                                                                                            |
| 01:44      | Well, we've had a lot of email from listeners asking us to do a show about how to automate               |
| 01:48      | using [[Alfred]]. And then it came up in the relay [[Slack]] recently and we're like, okay, everybody,           |
| 01:53      | we're going to do [[Alfred]]. So [[Alfred]] is a Mac based launcher application. We actually                     |
| 01:59      | talked about launcher apps on episode 497, I think of Mac power users. I'll put a link                   |
| 02:05      | in the show notes. And we talked about, you know, [[LaunchBar]] and [[Alfred]] and several and                   |
| 02:11      | I came out of that episode after all the research for that episode, I believe we're in [[Alfred]].           |
| 02:14      | So I've been using [[Alfred]] now for a couple of years. You know, I used to be for but I've                 |
| 02:19      | been using it full time. I think Rose, you've been using [[Alfred]] full time basically since                |
| 02:22      | [[Alfred]] came out, right? Weren't you an early adopter for [[Alfred]]?                                         |
| 02:27      | I think I was a fairly early adopter. I'm not sure I was the earliest adopter. I'm                       |
| 02:30      | sure I've been using it at least since [[Alfred]] to looking in my 1Password licenses section.            |
| 02:36      | I've got licenses for the power pack for [[Alfred]] for two, three and four. And four is the most            |
| 02:42      | recent version. And that's actually something we should maybe cover because [[Alfred]] itself                |
| 02:47      | is free. And it's a great application for free. But if you want to do some of the nerdiest               |
| 02:53      | stuff that we're talking about today, you're going to need the power pack for that, which                |
| 02:56      | is a like a one time in-app purchase license. Actually, you can get it from the website                  |
| 03:01      | because [[Alfred]] is a Mac application. And yeah, it's great. It allows you to do way                       |
| 03:09      | more stuff with [[Alfred]] than, you know, you might have otherwise thought, oh, I'm not                     |
| 03:14      | really sure if, you know, I could do this or that, you know, it lets you do all of the                   |
| 03:20      | extras, the really, really cool stuff. So we'll dive into exactly what the power pack                    |
| 03:24      | gives us in a couple of minutes. But [[Alfred]] itself, it's like spotlight on steroids.                     |
| 03:30      | That's how I would explain it for people who aren't familiar with this sort of application,              |
| 03:34      | David. Yeah, sure. I mean, it just does so much more                                                     |
| 03:36      | than spotlight. And the nice thing is because it's a Mac app and a web based thing, like                 |
| 03:42      | they do upgrade pricing. I think I bought version two, but I've only had to pay upgrade                  |
| 03:47      | price for three and four. And it's just that, you know, it's a solid spotlight replacement,              |
| 03:54      | but it does weigh more. And if you're interested in automation, this app has so many hooks for           |
| 03:59      | you to go deeper down that road. So we thought it'd be fun today to kind of just kind of                 |
| 04:04      | go through some of the things we do with it and how we automate our day. And, you know,                  |
| 04:12      | we talk often on the show about very detailed automations, you know, writing keyboard, maestro           |
| 04:15      | scripts or shell scripts or things like that to automate your life. But I have this distinct             |
| 04:22      | memory a few years ago where I spoke at a local Mac user group. And the I was going                      |
| 04:29      | to talk about photos or something. I don't remember what the subject was, but my screen                  |
| 04:34      | was on, my screen was up on the projector behind me. And as I was prepping to run it,                    |
| 04:42      | I had [[Alfred]] running. And I was doing all this crazy stuff with [[Alfred]] that, you know,                   |
| 04:46      | get the right apps, get the right documents, do all these things. And when it was time                   |
| 04:52      | for me to talk, someone said, before you talk about photos, can you explain what you just                |
| 04:56      | did? You know, because they were all watching me running [[Alfred]] and my computer was dancing              |
| 05:01      | around and they had no idea what was going on. So the presentation turned into like half                 |
| 05:07      | [[Alfred]] and half photos because, you know, a lot of folks don't realise how much more                     |
| 05:12      | efficient you can be with one of these launcher apps installed on your computer.                         |
| 05:16      | Yeah. Yeah. So [[Alfred]] is a great way to pretty much do everything that you need to do with               |
| 05:21      | your computer via your keyboard. Like you don't need to use your mouse. And also it can involve          |
| 05:28      | less keyword actions than using something like spotlight. So if I open spotlight and                     |
| 05:32      | I search for preview, and I have a couple of things that I've used recently with the                     |
| 05:36      | name preview in them, they might show up before the application. So in order to access that,             |
| 05:40      | I would need to use the down arrows and then return to get to say the third item. In [[Alfred]],             |
| 05:46      | you can just press command three to go to open the third item in your list. And actually,                |
| 05:51      | if you look inside of [[Alfred]], when you're, when you're searching for something, then                     |
| 05:55      | you'll see over on the right hand side, command two, command three, command four, all the way            |
| 05:59      | through to command nine. And depending on what theme you're using, that that might be                    |
| 06:04      | slightly grayed out. The theme that I'm using shows that in a nice bright white to remind                |
| 06:09      | me that it's there because otherwise I forget about it and I'm arrowing up and down. And                 |
| 06:13      | I realised halfway through a list of nine items when I'm aiming for the ninth item.                      |
| 06:18      | First of all, you can always press the up arrow to go, you know, around the loop. If                     |
| 06:22      | that makes sense, you can wrap around with your arrows. But I could have just pressed                    |
| 06:26      | command nine and been right there and had that document open 30 seconds ago. Okay, not 30                |
| 06:31      | seconds. I'm not that slow with my arrow keys. But you know, the point is, is it's a more                |
| 06:36      | efficient way of doing things.                                                                           |
| 06:37      | Yeah. And even on that basic issue of spotlight of open an app and run an app, I feel like               |
| 06:43      | [[Alfred]] beats it there too. A good example is like, as I'm sitting here, if I do a spotlight              |
| 06:49      | search for pages, the first result is the pages application, which is great. But underneath              |
| 06:55      | that, it wants to do a search for pages preview wants to look for the pages website, or it               |
| 07:01      | wants to show me folders with the name pages. Whereas if I do that search for pages in [[Alfred]],           |
| 07:08      | it gives me the option, the first option to open the pages application, but the remaining                |
| 07:12      | 10 options underneath it are all of the recent documents I've opened with pages. I mean,                 |
| 07:18      | how often do you want to open pay, you know, go to pages and utility like this to find                   |
| 07:25      | a pages folder versus open a recent document. I mean, I always want to get into a recent                 |
| 07:30      | document and it puts them in order of, you know, last opened. So I use this so often,                    |
| 07:37      | I don't even think about it anymore. And most apps support this recent document plug in                  |
| 07:43      | Microsoft Word sadly does not. They have a weird thing they do with file management.                     |
| 07:47      | So it doesn't plug in. But I mean, that's just an example of even the most basic thing                   |
| 07:52      | you do with spotlight is better in [[Alfred]]. Yeah, it really is. And just being able to                    |
| 07:59      | access your recent documents means that it's a lot easier to do things. So the other thing               |
| 08:04      | you can do is for me, if I search for say preview, it doesn't necessarily show my recent preview         |
| 08:09      | documents. But if you yet then do option and the right arrow, then it will show you your                 |
| 08:14      | recent preview documents. And then you can, there's this thing, which we'll dive into                    |
| 08:20      | a little bit later where you can actually stack a bunch of documents and then do actions                 |
| 08:24      | on them through [[Alfred]]. So you don't need to be hunting around in Finder for things.                     |
| 08:29      | You can just, you know, stack them up above [[Alfred]]. And then, you know, make magic happen.               |
| 08:34      | It's kind of crazy that it just works like this. But it good crazy, not that crazy.                      |
| 08:39      | Yeah, if you wanted to go like over the deep end, [[Alfred]] could completely replace the finder.            |
| 08:46      | I mean, you could do all file management. I'm not recommending that you do that, but                     |
| 08:52      | you actually could pull it off. Like, I think there's a terminal command to hide the finder.             |
| 08:56      | Maybe that should be like a challenge just for a week. You know, stop, don't do that.                    |
| 09:01      | That's crazy. But you know, it is kind of cool that that this thing is so powerful and in                |
| 09:07      | file management. Yeah, it really is. But, you know, I also feel like it does a better job with           |
| 09:13      | the logic of search. Like, I don't know if this is still true or not, but like it used to be,            |
| 09:18      | oh, now they fix, no, yeah, they fixed it. It used to be in spotlight if you type one for                |
| 09:22      | 1Password or it immediately went into calculator mode and you couldn't get to one                     |
| 09:27      | password. So you'd have to type password to get to 1Password. And it was like just a little           |
| 09:31      | tick you had to remember, whereas [[Alfred]] has never had that problem. It always just goes,                |
| 09:36      | you know, it just figures out what app you're using. I think one of the things that looks at             |
| 09:39      | is, you know, how often do you open this app? And it promotes the options based on usage,                |
| 09:46      | which, you know, is the way it should be. Yeah. And I think that's the thing, you know,                  |
| 09:51      | all of this is based on usage. So I think we should probably go back to the start with                   |
| 09:56      | [[Alfred]], David, and talk about search because a lot of what people do with [[Alfred]] is based around         |
| 10:03      | searching. So one of the primary things I use it for is launching a specific application.                |
| 10:08      | If I'm looking for the terminal, I'm not going to open launch pad or something like that. I'm            |
| 10:13      | going to, and I try not to keep applications in my dock. This is a personal preference,                  |
| 10:18      | but I don't have applications in my dock that aren't running. There are a few applications               |
| 10:23      | which always live in my dock. So I've got [[Airmail]], [[Fantastical]], [[Drafts]], [[OmniFocus]] and [[Obsidian]],           |
| 10:29      | and [[Safari]]. That's it. Those finder obviously has to live in my dock as well. But those are the          |
| 10:36      | only applications that live in my dock. All of the other applications are just active applications.      |
| 10:40      | So I'm not going to be looking across my dock for terminal. And I don't want to open launch pad and      |
| 10:45      | then search for terminal because I then have to move my mouse. And depending on how big your             |
| 10:50      | screen is, that may be more work than you're willing to do. Mine's not that big, but it's                |
| 10:56      | just annoying. So to start with, if I want to open an application, then I just search for the name       |
| 11:02      | of that application. And I type literally David T and it suggests terminal because it's one of my        |
| 11:07      | most frequently used applications. And underneath that, I've got better telegram and better touch        |
| 11:12      | tool showing up as other options. So I can use it to open applications very, very quickly without        |
| 11:20      | taking my hands off the keyboard. Yeah. I know there's a running battle on my computer right now         |
| 11:25      | between [[Obsidian]] and OmniFocus for the letter O and [[Alfred]]. It's like, they can't make up its            |
| 11:31      | mind. Which one does he like? But you're right. It is funny for your most frequently used apps.          |
| 11:38      | It's just the single letter. Whereas when you do that same search in spotlight, it just isn't as smart.  |
| 11:46      | Actually, spotlight is indeed suggesting terminal to me. And then underneath that,                       |
| 11:49      | it's suggesting home dash Canon TR4550, which is my printer. I never open my printer, David.             |
| 11:57      | I have no idea what spotlight is doing here. [[Spotlight]], go home, you drunk. But yeah,                    |
| 12:03      | unsurprisingly, [[Alfred]] is not suggesting my printer. I only want my printer to open if I'm               |
| 12:08      | printing a document. I'm never going to search for it this way.                                          |
| 12:11      | Okay. And spotlight for me with O is giving me [[Obsidian]]. And then in second place, Knights of            |
| 12:17      | the Old Republic, which is a game I downloaded and have not played on this computer at all.              |
| 12:21      | And then under that OmniFocus, which is an app that is open like 24x7. So go for it.                 |
| 12:26      | Yeah. Well, mine is showing Fnatic, which is for keyboard that I have. OmniFocus and [[Obsidian]] in         |
| 12:33      | that order versus the [[Alfred]], which is showing [[Obsidian]] and then OmniFocus. I guess I was using          |
| 12:40      | [[Obsidian]] more recently than OmniFocus for this because I saved some notes in there for this              |
| 12:43      | show, David. Yeah. And so just launching apps is great. And it's not just there to find apps that        |
| 12:51      | also can find files. Maybe we should, do you want to talk about files now?                               |
| 12:56      | Yeah, yeah. So let's talk a bit about files. I gotta be careful here. I don't want to scare              |
| 13:00      | everybody away. I think let's talk about files at a surface level right now, David. We can get to        |
| 13:04      | the complex automations that you can do with those later. So with [[Alfred]], you know, just the same        |
| 13:09      | way as you search for an application, you can search for a file. So I recently downloaded a whole        |
| 13:15      | bunch of pay slips. And so if I type in pay, then I can see all of those pay slips because their,        |
| 13:21      | you know, year, month company pay slip is the name. So if I search for pay, I can seal of those.         |
| 13:29      | And that's great because I can use my command and my numbers to go through them. And if I type,          |
| 13:34      | you know, 2021 pay, then I'll see 2021 pay slips. But when I found the right document,                   |
| 13:40      | I can actually use the right arrow on that to see a bunch of options. So if I just press return or       |
| 13:46      | select one of the options from a file, then, you know, it'll just straight up open it. That's my         |
| 13:51      | default action. But if I use the right arrow on that file, then I get a whole bunch more options,        |
| 13:58      | which are just crazy in the best possible way. So of course it's open. And then they're specifically     |
| 14:03      | open with. So these are all PDFs. So if I wanted to open them with a PDF pen, instead of preview,        |
| 14:11      | then I could do that. I can reveal it in Finder. I can email it to a specific person,                    |
| 14:16      | or I can just start an email. I can get info, copy to move to delete, find similar, browse the whole     |
| 14:23      | folder in [[Alfred]]. And this is one of the actions we're going to have to come back to, because this       |
| 14:28      | for me is incredibly useful. And there's also open the terminal here, open the the pass to the           |
| 14:33      | clipboard, and copy the file to the clipboard. And you can also add custom actions. So I have            |
| 14:38      | copy markdown link here, because that can be useful for me. But I have some others,                      |
| 14:44      | which we can get to later as well. It's just really nuts. I mean, you can do, like I said,               |
| 14:50      | you can replace the Finder with it. But I think that right arrow trick is when a lot of people           |
| 14:54      | don't realise. So you once you find the file, the right arrow is a is an automator tip, honestly,        |
| 15:01      | to to act on the file, because the usual reaction when you see something like this would be like,        |
| 15:06      | okay, well, I can open that file. So I'll click return to open it, or I might be able to expose          |
| 15:11      | it in the Finder. And then I can open the Finder and I can do things with it there. But why not          |
| 15:16      | do the action right from the quick action bar in [[Alfred]]? And that's a clever trick.                      |
| 15:23      | Yep. And it saves you a lot of time, because do you really want to open the file and then use            |
| 15:28      | the share option to send it by email? You probably don't. You probably just want to go,                  |
| 15:33      | where's this file, right? I want to email it without having to, you know, hunt around for                |
| 15:37      | things. And there's other ways of doing this as well, like [[Yoink]] has an [[Alfred]] workflow,                 |
| 15:42      | which you can install from its preferences. So you could [[Yoink]] the file and stick it in [[Yoink]],           |
| 15:47      | which can be useful if you want to do multiple files. But we'll come back to the more complex            |
| 15:52      | file stuff later, where you can act on multiple files. Because of course, you know, there's              |
| 15:59      | way more crazy things that you can do. But I think before we dive into that, David, we should also       |
| 16:03      | have a look at some of the other options that we've got with [[Alfred]] that are just sort of pretty         |
| 16:09      | much baked in. And one of the ones I want to talk about is the calculator, because I love this.          |
| 16:16      | This episode of Automators is brought to you by The Intro Zone. I love finding new podcasts to           |
| 16:21      | listen to. And it's great when you find something that's not only great to listen to, but actually       |
| 16:26      | useful as well. If you're looking for a new show to listen to, The Intro Zone is a bi-weekly podcast     |
| 16:32      | with conversations and interviews on how Microsoft SharePoint, OneDrive, and related tech can work       |
| 16:37      | for you. You'll hear from guest experts behind the scenes and out in the field, so you can see           |
| 16:42      | how SharePoint fits into our everyday work life to easily share and manage content, knowledge,           |
| 16:48      | and applications. Each show covers a bunch of segments, like news and announcements, a focus             |
| 16:54      | topic of the week, guest perspectives, FAQs of the week, and upcoming events. And the topics for         |
| 17:00      | the shows are really interesting. They cover migration to the cloud, AI and machine learning,            |
| 17:07      | and even things like cloud admin. I recently listened to their episode on Viva topics,                   |
| 17:14      | and I have to say I do kind of love the idea of having an AI getting in with my files and                |
| 17:19      | suggesting things to me based on everything else available. I won't spoiler it, but it's a great         |
| 17:25      | episode. Go and listen to it now. Just search for The Intro Zone wherever you get your podcasts.         |
| 17:31      | That's I-N-T-R-A-Z-O-N-E. Or just click the link in the show notes. Go check it out. Our thanks to       |
| 17:39      | The Intro Zone by Microsoft SharePoint for their support of this show and all of Relay FM.              |
| 17:46      | So one of the little features of [[Alfred]] David that I really want to talk about is the calculator.        |
| 17:52      | And this sounds so silly. It's not going to put Peacock or Solver or any of the other great              |
| 17:56      | calculator apps for macOS out of business today or tomorrow. But for me, the calculator is incredibly    |
| 18:03      | useful for a number of reasons. Number one, of course, it's under my fingers, so I can just open         |
| 18:08      | it with command space. And then if I want to type, I don't know, 23 times 471. I type 23,                |
| 18:15      | asterisk 471. And I can see the result right there. And this is great because if I hit return,           |
| 18:23      | the action option, then that's going to save that to my clipboard. So I can just paste that              |
| 18:28      | somewhere. And I use that all the time when I'm just trying to get some basic maths done                 |
| 18:33      | that I just need to paste into something. For example, calculating the number of seconds in a            |
| 18:37      | day is something that you need to do relatively often in programming for whatever reason. And I          |
| 18:43      | have yet to memorise the number of seconds in a day. And I don't like writing it all out. So I           |
| 18:48      | usually calculate it and then paste it into whatever application I'm currently writing in,               |
| 18:54      | which is great. But there is, of course, more that you can do with this. Because if you hit equals,      |
| 19:00      | then it puts the number that you've just calculated into [[Alfred]] for you to do more                       |
| 19:05      | calculations with, which is something it took me a really long time to figure out. But I love that       |
| 19:10      | equals button now. Yeah, well, it gives you a bunch more math functions, sine, cosine, tangent,          |
| 19:16      | logs, you know, all the, a lot of the things that you may want for a more advanced calculation           |
| 19:23      | available, but just hit the equals sign first. And then you say, okay, we're going into advanced         |
| 19:26      | mode. I use it as well. And one thing I would add is, you know, when you learned math,                   |
| 19:33      | or do you guys call it math, you make it plural? Because it's mathematics. Yeah, well, we call           |
| 19:39      | math over here because we're, you know, we're, you know, the colonists, you know, just keep dropping     |
| 19:46      | things. But yeah, but we got, you know, if you want to do advanced math, you can add parentheses.        |
| 19:52      | So it's like, like you want to do calculations within calculations, you can add those. And               |
| 19:57      | like I often have to do interest calculations for contracts and things like that. And                    |
| 20:01      | a quick tip I have created a TextExpander snippet, because that's one of the things you can do with     |
| 20:07      | [[Alfred]]. It will expand TextExpander snippets right inside. So like I have a standard interest           |
| 20:12      | calculation where I just do fill ins and TextExpander with the basic numbers. And then it,              |
| 20:18      | it creates the formula in an [[Alfred]] statement. And then I hit return. And then it gives me my            |
| 20:24      | answer. So it's a very quick way to do relatively basic math, but, you know, constructing that           |
| 20:32      | every time with parentheses and, you know, making sure you get everything right as a                     |
| 20:36      | pain in the neck. So I just made it a snippet. Yeah. And that's one of the things that I like,           |
| 20:41      | you know, you can integrate things like that with this. Because of course, as well as the                |
| 20:46      | calculator, [[Alfred]] has some other options. I think now might be a good moment, David,                    |
| 20:50      | to talk about the power pack. Yeah, sure. So the power pack in [[Alfred]] is, it's the option to             |
| 20:58      | expand [[Alfred]] for one of a better word. That's not really the right way to say it. But it's,             |
| 21:06      | for me, at least in the UK, it's 29 pounds. They're not showing me, David, on the website,               |
| 21:11      | the prices and dollars. So you're going to have to double check that. But the power pack with            |
| 21:16      | [[Alfred]] allows you to do things like create custom searches and enable one of my other                    |
| 21:21      | favourite features, which we'll come to in a minute, which is the clipboard history.                      |
| 21:25      | I love the clipboard history. It saved my bacon about 80,000 times over the last month.                  |
| 21:30      | But it also has the option to do text expansion itself. And you can either use snippets or               |
| 21:37      | auto expansion for that. And then it's got music integration. And some of the file actions,              |
| 21:45      | I think, actually do need the power pack as well. I have to say,                                         |
| 21:48      | I'm one of the mega power pack supporters. So I've had a lot of this for a very long time.               |
| 21:55      | But it allows you to do customise hotkeys and keywords and context integration. And also                 |
| 22:03      | something I use a lot, which I'm guessing some of our listeners probably won't.                          |
| 22:06      | Shell and terminal commands, you can just do them straight from [[Alfred]],                                  |
| 22:10      | like move this to there. I do that. For some reason, I prefer to use the terminal to move files to       |
| 22:19      | certain locations. Like, for example, when I installed TJ Luoma, it's a Fantastical stream                |
| 22:25      | deck system. I'm calling it a system because it's a whole bunch of [[Keyboard Maestro]] macros               |
| 22:30      | plus [[Stream Deck]] integration. I did, I moved those files I needed to move with [[Alfred]],                   |
| 22:36      | rather than anything else. It also has integration with custom themes and 1Password. And sync         |
| 22:43      | is one of the power pack features. And I personally do love the sync. Even if you only have one mac,     |
| 22:49      | it means that you're [[Alfred]] settings. It's not really a backup because it's a sync,                      |
| 22:54      | but it means that you can put your [[Alfred]] settings on another computer, which I really like.             |
| 22:58      | Yeah, just honestly, if you've made it this long in the podcast, just get the power pack,                |
| 23:03      | because almost everything we're going to talk about needs it. And they list the price in                 |
| 23:07      | the United States in pounds too, as well as $29 for a single user, $49 for MEGA. I probably              |
| 23:13      | should have bought MEGA supporter if I think about how many times I've upgraded this thing.              |
| 23:16      | But I think I upgraded last time, actually, David, just because I thought, you know what,                |
| 23:21      | I want to check on some extra money. And why not? Because [[Alfred]] really is one of those                  |
| 23:28      | things where if I try to use a computer with just spotlight, I'm trying to do things like,               |
| 23:33      | I'll do a calculation and press return, and then wonder why it's not on my clipboard.                    |
| 23:39      | And then I'll want to get back to the previous thing that was on my clipboard.                           |
| 23:42      | And then I won't be able to do it because I don't have [[Alfred]] installed. A lot of people say,            |
| 23:47      | you know, my computer feels broken before I set up, you know, TextExpander, or Fantastical,              |
| 23:54      | or [[Bartender]], one of those apps. For me, that app is definitely [[Alfred]]. I mean,                          |
| 24:00      | there's several apps, let's be honest. But [[Alfred]] is one of those that I feel like I really need it      |
| 24:05      | to be actively, productively using my computer. Yeah, you know, I hear that once in a while              |
| 24:13      | from pundits where they say, hey, I don't want things like [[Alfred]] or [[Keyboard Maestro}] on my               |
| 24:18      | computer, because I want to be able to sit at any Mac and be able to run it the same,                    |
| 24:22      | and I have to worry about that. And that argument is completely lost on me. I'm like,                    |
| 24:28      | how often do you sit at some random computer and do work? I mean, the only computers I sit               |
| 24:33      | are the ones that have my files on them. They're my computers. So I customise the heck out of them.      |
| 24:38      | I want to be able to make [[Alfred]], you know, stand up and do cartwheels for me so I can                   |
| 24:45      | don't have to do them. And having that every day for the occasional inconvenience, like,                 |
| 24:50      | I guess I do sit at my wife's computer to do maintenance or something. But, you know, what               |
| 24:53      | do I do? I run a maintenance application, I do a backup, and then I close the lid. I mean,               |
| 24:58      | I don't care. So yeah, I don't buy that. I feel like, you know, stuff like this is something,            |
| 25:04      | if you want to really automate and make your computer work harder for you instead of making              |
| 25:08      | you do the work, you should totally get the power pack and just dive in, man.                            |
| 25:14      | Yeah, yeah. Let's talk a little bit about the clipboard history.                                         |
| 25:19      | Yeah. So clipboard history is one of those features. You need the power pack for it.                     |
| 25:24      | And then I believe it's, oh, gosh, I'm now just looking at my [[Alfred]] preferences and I can't             |
| 25:29      | find it, David. Where did it get hidden? It's under features. There we go. It's features and             |
| 25:34      | clipboard history. And you can enable this and you can enable clipboard history for plain text           |
| 25:39      | images and even file lists. And you give this a different shortcut. So you don't. So say you open        |
| 25:47      | [[Alfred]] with command space, which by the way, I highly recommend if people are looking at                 |
| 25:52      | playing with [[Alfred]], change spotlight to option space and put [[Alfred]] under command space because         |
| 25:57      | [[Alfred]] can do everything spotlight does and more. So, you know, that's a good place to start.            |
| 26:03      | But that trigger doesn't open your clipboard history, the default [[Alfred]] tree. You need to               |
| 26:08      | specify a different one. And I don't remember, David, if I've changed mine, you'll have to tell me if    |
| 26:12      | yours is different. Mine is a command option C for clipboard. Yeah. Mine is control command C.           |
| 26:22      | So I don't know. Maybe I changed it. I honestly, you know, I've been using things along. I don't         |
| 26:26      | remember. Yeah. Yeah. You need to enable this first though. If you don't enable it, then you             |
| 26:32      | won't see clipboard history in general. So, and you can specify how long clipboard history is safe       |
| 26:39      | for. I've just gone with 24 hours on my side. I there's also options for seven days a month              |
| 26:44      | and three months. I copy and paste so much. I think if I had three months of clipboard history           |
| 26:49      | on my Mac, I'd have a full SSD. So I'm not going to do that. But you can customise that. And I           |
| 26:56      | really appreciate that as well, because I don't need, you know, three months worth of clipboard          |
| 26:59      | history hanging around. But 24 hours is usually enough for me. Yeah, we're going to do a show,           |
| 27:05      | I think, on clipboard managers at some point, because there's so many options out there. But             |
| 27:10      | this is an excellent one. And the thing I like is that it keeps plain text. It also keeps images.        |
| 27:16      | And it does give you metadata around them so you know where they came from.                              |
| 27:21      | They have a feature called clipboard merging, where you can tap it and then double tap C to              |
| 27:30      | get to add a bunch. So like the idea for this is let's say you're building a document and you've         |
| 27:35      | got a source document you're working from. You can basically append to clipboard by going through        |
| 27:42      | and using this feature. So you can say, well, I want this paragraph, and then this paragraph and         |
| 27:46      | that paragraph. And you only have to paste it once and it assembles them all for you. Yeah.              |
| 27:50      | This feature makes me nuts. I don't like it at all, because I always seem to trigger it when I'm         |
| 27:56      | not when I don't don't mean to. And then when I go to paste, I've got a bunch of texts I didn't need.    |
| 28:01      | This never sunk in for me, but I know some people love that.                                             |
| 28:06      | Yeah, no. So I also have this disabled. I think I've just never really found a need for it. A            |
| 28:11      | lot of the time I would much prefer to go, I'm looking for this, right now I'm looking for this,         |
| 28:15      | now I'm looking for this, and I'm done. I'm good. Finished. Thank you so long and thanks for all         |
| 28:20      | the fish. So it's a great option for people who need that. However, I would suggest perhaps if           |
| 28:28      | you're doing that, then clipboard history might not be the place for that snippets, expansions,          |
| 28:34      | text expansion, that sort of thing, which we'll come to in a minute, can better serve you there          |
| 28:41      | rather than copy pasting. So yeah. But it's useful all the time because you can think,                   |
| 28:49      | right, okay, I need these five things. I'm just going to copy them all. And then you're going            |
| 28:53      | through filling out a form and you just use the clipboard history repeatedly to get those five           |
| 28:58      | things. And you're not going to need them for longer than the length of time it takes you to             |
| 29:01      | fill out this form. But you want to have them easily accessible for that period of time.                 |
| 29:08      | Yeah. And I personally don't use the clipboard history. I actually run it as a backup because            |
| 29:14      | if something goes wrong, but my primary clipboard history is [[Keyboard Maestro]]. And whenever we get       |
| 29:19      | around to that show, I'll explain why. But [[Alfred]] is perfectly fine. And if you're not a keyboard        |
| 29:25      | maestro person or you don't like their clipboard and you've got [[Alfred]], one thing [[Alfred]] is is           |
| 29:29      | way better than the built-in clipboard because this isn't got a history and all that's you,              |
| 29:33      | you know, keep it for many days. Yeah. So a little bit more information about the clipboard              |
| 29:39      | history. Of course, you can search. So earlier today, I copied a link from packal.org. We'll              |
| 29:45      | come back to that link later. And so if I type pack, then it shows me a couple of different              |
| 29:50      | things. I've got an emoji pack here, which, you know, that's, that's one of those things. And            |
| 29:55      | then I've got two links which have Packal in them. David, one of them is from your blog, surprised?       |
| 30:02      | And then the other one is the, the OmniFocus workflow. So one of the things I would check                |
| 30:07      | for people who are using or want to look at the clipboard history is under the clipboard history,        |
| 30:13      | there's three tabs. There's history, there's merging, and there's advanced. If you want to use           |
| 30:17      | merging, go ahead, toggle that on, have a play with it. But under advanced, make sure auto paste         |
| 30:23      | on return is checked. Now, this is on by default. But this means that when I, I, I search in my          |
| 30:30      | clipboard history, and I search for Packal, and then I hit return, this pastes it into my current         |
| 30:37      | document, exactly where my mouse is done. Like I don't need to think about anything else. I don't        |
| 30:42      | need to command V or anything. It just happens. There's also an option down here at the bottom,          |
| 30:50      | or two options, ignore clipboard data marked as concealed and ignore clipboard data marked as            |
| 30:55      | also generated. That means that it's not going to copy any passwords or anything that you,               |
| 31:01      | you have if you try and copy them. And, and stuff that's also generated. So things like                  |
| 31:07      | [[Safari\|Safari's]] form filler, it's not going to copy that stuff. There are also specific options to              |
| 31:12      | ignore apps. And by default, it ignores keychain, security agent, 1Password and your wallet.          |
| 31:19      | All of which good apps to ignore, you don't necessarily want that data in your clipboard                 |
| 31:23      | history floating around. Because I've found a couple of recalcitrant apps won't let me fill              |
| 31:29      | them in with 1Password, David. So I've been copying a pasting passwords to get them in there.         |
| 31:33      | And I don't want that in my clipboard history. But of course, if you do have stuff in your               |
| 31:38      | clipboard history, and you think, Oh God, you know, I'm starting a completely new thing now,             |
| 31:41      | I just want a clean slate, command space, trigger [[Alfred]], quit all applications,                         |
| 31:47      | and then open your clipboard history, type clear, and boom, you can just clear all of                    |
| 31:53      | your clipboard history, or you can clear the last five minutes or the last 15 minutes.                   |
| 31:58      | And there's also a button in the [[Alfred]] preferences where you can click,                                 |
| 32:02      | you know, clear all history now. And yeah, it's, it's great. I love it. It really makes                  |
| 32:10      | my life much, much easier. You know, we kind of ran off half cocked on this episode. One of the          |
| 32:15      | things I meant to say at the beginning is when you use [[Alfred]], Rose and I have been talking              |
| 32:19      | about system preferences for [[Alfred]]. So to get to that, and this is, I'm sure it's obvious to            |
| 32:25      | veteran users, but sometimes you forget. When you command space or whatever your trigger is for          |
| 32:32      | [[Alfred]], it doesn't do the usual thing where it puts the [[Alfred]] app in the menu bar, because              |
| 32:37      | this is a utility, you can put the [[Alfred]] menu bar icon up, though, and you can access preferences       |
| 32:43      | there. But I find the easiest way is you hit command space to activate [[Alfred]] and just hit               |
| 32:48      | command comma. And we should have said that at the top of the show, because we're, as we're talking      |
| 32:53      | about all these settings and things we're doing at [[Alfred]], it's that command space slash command         |
| 32:57      | comma that makes it happen. So that's the trick. Command space, command comma. You can also type         |
| 33:05      | pref or PR or, you know, something like that or preferences in full. And it will show you to open,       |
| 33:11      | it will show you the option to open [[Alfred]] preferences as well as system preferences and                 |
| 33:15      | perhaps any files or applications you have with preferences in the name. But if you type it,             |
| 33:20      | then you can access it from that as well. Yeah. So David, one of the things I love about [[Alfred]]          |
| 33:27      | is the snippets and text expansion. Now, I know you're firmly in the text expansion camp and I'm         |
| 33:33      | one of those people where I periodically go off and explore because I've got quite a bit in text         |
| 33:37      | expander, sure. But I, you know, I always like seeing what else is out there and what else I             |
| 33:43      | might be able to do. And one of the things that definitely sells me on [[Alfred]] to an extent at            |
| 33:49      | any rate is that it has an emoji pack with 1,349 snippets built in, which is pretty darn cool.           |
| 33:56      | All right. Well, explain it because I, you're right. I just use [[TextExpander]]. I feel like that's        |
| 34:00      | kind of a solved problem. I like the ability that it can run [[AppleScript\|AppleScripts]]. And I've just got            |
| 34:05      | all kinds of weird automation stuff running through TextExpander. But what are the advantages for       |
| 34:10      | [[Alfred]]? How does this emoji thing work? Well, let's start with snippets and [[Alfred]]. So once              |
| 34:16      | again, you're going to need to open [[Alfred\|Alfred's]] preferences, command space, command comma.                  |
| 34:21      | And then under the feature section, there's snippets and clippings. So to start with,                    |
| 34:28      | you're probably going to want to have a poke around there. And I know those of you who used              |
| 34:32      | [[Alfred]] before might find things like [[Alfred]] to snippets hanging around, which yes, I have. And           |
| 34:38      | you can rename any of these by double clicking on them. So I'm actually going to fix that right          |
| 34:42      | now. It now just says [[Alfred]] snippets. Perfect. So to start with, you can have a snippet keyword.        |
| 34:50      | And I didn't mention this, but there's also a clipboard keyword where if you open                        |
| 34:54      | [[Alfred]] and then type that keyword, then you'll see clipboard history or with the snippet keyword         |
| 35:00      | default is S, by the way, then you'll see these snippets available to you. Now,                          |
| 35:07      | the way [[Alfred]] differs from some other applications is it doesn't necessarily                            |
| 35:12      | automatically expand things for you. So if you type one of these worthy snippets,                        |
| 35:19      | then it won't expand it unless you open the snippet manager. And my option for this is                   |
| 35:26      | command option control S. Oh, sorry. It's no, it's command shift, command option shift S.                |
| 35:34      | That was it. Sorry. I'm trying to read the symbols and not doing the actions with my fingers.            |
| 35:39      | And that's a very silly thing to do because I usually type with my fingers rather than my brain.         |
| 35:46      | So if you do that, then it'll pop up the snippets. And there's actually some                             |
| 35:51      | favourite snippet collections, which I've linked in the show notes for people.                            |
| 35:53      | So you can download those. Maybe I'm misspeaking the emoji pack wasn't pre-installed and I               |
| 36:00      | installed it ages ago. But there's snippets for Mac symbols. There's some funny quotes.                  |
| 36:06      | There's [[ASCII]] art, you know, like the table flip series of brackets and characters. There's also         |
| 36:14      | currency symbols and some dynamic content and date math ones, which aren't useful just to see            |
| 36:21      | how it works. But the emoji pack that I mentioned as well is listed here. And so you can actually        |
| 36:28      | see if you click on get collections in this window, then there's some examples. And basically,           |
| 36:32      | what it means is when you type this thing, then this thing appears instead. So for people who've         |
| 36:37      | never used it, then, you know, that's how that works. It'll replace whatever you've written.             |
| 36:42      | So with the emoji pack, if you press colon, type the word six, and then press colon again,               |
| 36:48      | then it will replace that with a six in a little box, which, you know, great, if that's what you         |
| 36:54      | want. And why this might better for some people, if you don't already own TextExpander or something     |
| 37:01      | similar and you want to try text expansion, and you've paid for the offer power pack, well,              |
| 37:05      | it's free, you know, so why not give it a go? And it's not limited to just I can replace                 |
| 37:13      | David MacSparky with David Sparks every time or MacSparky with David Sparks and brackets Max           |
| 37:18      | Sparky, whatever it is you want it to do. You know, you can also do, as I mentioned before,              |
| 37:25      | they've got these dynamic content examples. Have a look at those if you want to see how crazy you        |
| 37:30      | can go. But it's useful for just things like, you know, fixing the way that you always incorrectly       |
| 37:35      | spell your own name. David, I can't spell my own name. I've written my own name. I have no idea          |
| 37:40      | how many millions of times in my life. I still, when I'm typing, managed to swap the S and the E         |
| 37:47      | or the E and the M on a regular basis in my first name.                                                  |
| 37:50      | It's probably just you're going too fast. You know how to spell your name.                               |
| 37:52      | I think so. Yeah. But I fix it with text expansion. Like, that's one of the problems this solves.        |
| 37:58      | And also for just things that you write on a regular basis. And so, for example, until, you              |
| 38:05      | know, recently I've been working for a German speaking company, they have two different ways of          |
| 38:10      | saying dear. So dear Mr. So-and-so is written one way, but dear Mrs. So-and-so is written a different    |
| 38:16      | way. So, you know, I, and remembering that, you would think that after five years of living in a         |
| 38:22      | German speaking country, plus two years before that of living in another German speaking country         |
| 38:26      | and a degree in German, my brain would have this down. For whatever reason, I always ended up googling   |
| 38:32      | it. And one day I was realising, why do I keep googling this? I could just write sehr her or sehr        |
| 38:38      | frau and have it automatically expand and put the Geherte in the middle with the correct ending.         |
| 38:46      | Done. Like, no thinking about it. Oh, that's brilliant. Why didn't I think of this a year ago?           |
| 38:52      | Or, you know, five years ago, it would have been much easier. But I have things like that in there       |
| 38:57      | because it makes it a lot easier for me. And it, you know, it, one of those things you might want        |
| 39:03      | 18 different mail signatures, but you keep switching between different email applications                |
| 39:07      | because you can't decide what's best. So saving them all in your email application doesn't work for      |
| 39:11      | you. So save them as text snippets instead, and then expand them wherever you need them.                 |
| 39:16      | Yeah, you know, the emoji problem is an interesting one. So this is one more potential solution for      |
| 39:22      | it. I mean, the real problem with emoji, in my opinion, is that, you know, [[Apple]] didn't finish           |
| 39:27      | the job, you know, control command space opens up a keyboard with the emoji where you can pick           |
| 39:34      | from it, but it doesn't have an easy search. And it's just like, it's like, they had a lunch             |
| 39:39      | meeting that day or something, and they forgot to come back to it. I don't know what happened there.     |
| 39:43      | Yeah. Well, I would actually like to take a minor detour there because inside of [[Alfred]],                 |
| 39:48      | you can have collections of snippets. And this is basically folders of snippets.                         |
| 39:53      | And so you can toggle each one on and off. So I have the emoji pack. It's actually disabled.             |
| 39:59      | And the reason for that is, and I've put a link to this in the show notes for people,                    |
| 40:03      | I'm using an application called Rocket, which is free. And it works the same way typing in [[Slack]]         |
| 40:09      | and [[Discord]] stuff does. So if you're in the Relay FM [[Discord]], and you're used to typing colon,          |
| 40:13      | I don't know, thumb, and then it comes up with thumbs up and thumbs down, and you select the             |
| 40:18      | right one. Rocket does exactly that. And you can disable it on a per app basis,                          |
| 40:23      | which is what I use for emojis. So it means that when I'm writing in messages or                         |
| 40:28      | [[Discord]], I have the same experience. Obviously [[Discord]], I'm using [[Discord\|Discord's]]                              |
| 40:32      | native experience, but messages doesn't have that one. I type colon wave. It just doesn't                |
| 40:37      | offer me that option. But with Rocket, it does. But, you know, if you don't want yet another             |
| 40:41      | application, then you can use [[Alfred]]. Yeah. And Rocket is free. You're like reading my mind              |
| 40:48      | rows, because I was just about to mention Rocket, which is a free app that can put this anywhere.        |
| 40:53      | So there's a lot of different ways to skin that cat. But, you know, the point is,                        |
| 40:58      | you know, text expanded or cost money. And there's only so much money we all have to                     |
| 41:02      | spend on apps. And if you're all in with [[Alfred]], I think it's a perfectly sufficient way to do           |
| 41:08      | text expansion, you know? Yes. And go for it, you know? I mean, use what works for you.                  |
| 41:15      | Yeah. And in particular, when you're creating a snippet. So there's two kinds of snippets you            |
| 41:23      | can create in [[Alfred]]. There's plain text and rich text. So if you're typing markdown, you know,          |
| 41:27      | it's plain text. If you want rich text with bold and underlines already formatted, then you're           |
| 41:32      | going to use rich text. And if you select rich text, then you get a little AA button over on the         |
| 41:37      | right hand side of the text box. It's a large text box, by the way, David. This is one of the            |
| 41:43      | things I love about this versus the native macOS and iOS built in autocorrect button, which you          |
| 41:49      | can kind of hack to be text expansion. This is a nice big text box. And so this AA button gives          |
| 41:56      | you options for, you know, showing your fonts, bold, italic underlying colours, copying a style           |
| 42:02      | from something and pasting a style. But regardless of that, whichever you're doing, at the bottom,       |
| 42:07      | there's a button with two curly brackets in. So a left curly bracket and a right curly bracket.          |
| 42:12      | And if you click this, then this is snippets. So you've got options for date or date and time,           |
| 42:19      | date and time math. So one month ago or an hour from now or a day from now or a month and so on.         |
| 42:26      | There's also clipboard history. So you can put your current clipboard content in,                        |
| 42:30      | but you want it uppercased or capital case or trimmed. So there's no extra spaces at the beginning       |
| 42:35      | in the end. There's also the option to put placeholders for other snippets in there. It gets             |
| 42:41      | kind of crazy. You can also have random. So you can have random fruit. If you would like a random        |
| 42:48      | fruit in your snippet, you can do that. You can also have random Jesus. There's also random numbers      |
| 42:53      | between one and 10, a random positive number, random negative numbers, UUIDs, we've mentioned            |
| 42:58      | those before. There's also the ability to specify your cursor permission. So that's where you're         |
| 43:04      | going to type when this is done. And then you can also just ignore dynamic placeholders,                 |
| 43:10      | which means that those things won't be expanded for you.                                                 |
| 43:14      | So I mean, this is, it's not as fully fledged as something like TextExpander,                           |
| 43:20      | where you can use [[JavaScript]] to write custom things, which will do magical math to make stuff            |
| 43:25      | happen. But it's pretty good. Like if you want to get started with text expansion,                       |
| 43:31      | you could do much worse than starting with [[Alfred]].                                                       |
| 43:33      | Yeah, especially if you've already got a license. I mean, go for it.                                     |
| 43:36      | Yeah. Yeah, exactly.                                                                                     |
| 44:07      | Your internet service provider like Comcast or Verizon knows every single website you visit.             |
| 44:13      | And if they want to, they can sell this information to ad companies and tech giants.                     |
| 44:18      | ExpressVPN creates a secure encrypted tunnel between your device and the internet so that                |
| 44:23      | your online activity can't be seen by anyone. I've been an ExpressVPN subscriber for years,              |
| 44:30      | and I love the service because it's so easy to you. You open the app, press one button,                  |
| 44:35      | and you're secure. Not only that, you can trust ExpressVPN. They are truly there to protect your         |
| 44:40      | privacy. And that's not true for all VPN services. Since signing up for ExpressVPN,                      |
| 44:46      | I've had great peace of mind about my internet security. ExpressVPN works on everything,                 |
| 44:52      | phones, laptops, even routers. So everyone who shares your Wi-Fi can still be protected,                 |
| 44:57      | even if they don't have an ExpressVPN account. And the best part is using ExpressVPN is as               |
| 45:03      | easy as closing the door. You just fire up the app, click one button, and you're protected.              |
| 45:09      | And ExpressVPN is the world's number one VPN by CNET, wired, the Verge, and countless others.            |
| 45:15      | If like me, you think your online activity is your business, secure yourself by visiting                 |
| 45:20      | expressvpn.com/automators today. Once again, that's E-X-P-R-E-S-S-V-P-N.com                        |
| 45:28      | slash Automators, and you can get an extra three months for free. That's expressvpn.com/           |
| 45:34      | Automators. Thank you ExpressVPN for your support of the Automators and all of Relay FM.                 |
| 45:41      | One of my favourite features with [[Alfred]], and I don't know how many times a day I use this                |
| 45:46      | feature, is web search. And, you know, we've all done web searches before, you know,                     |
| 45:50      | the way we learned to do it was you would open your browser, and then you'd go to                        |
| 45:55      | Ask Jeeves, and you'd type in a search, you know, and then eventually, you know, we got                  |
| 46:00      | better search engines and better browsers where you could just type a search engine                      |
| 46:05      | into the URL bar of your browser, and it would do a search for you. But [[Alfred]] brings it to,             |
| 46:13      | like, a whole new level. Because if you go into those, that magic [[Alfred]] settings we're talking          |
| 46:18      | about, command space, then command comma. And then you go on that sidebar over to features and           |
| 46:25      | web search. It's the fourth one down. You have a bunch of key terms already built in that do a           |
| 46:33      | search for you. Like, for instance, if you want to search Google, you would activate [[Alfred]],             |
| 46:37      | command comma, and then I just type G-O, actually I get it with G, and then the first                    |
| 46:43      | offer is search Google for, and then you hit return. And then you type your search, you know,            |
| 46:48      | automators podcast, and then it goes off and does a search of automators podcast on Google for you.      |
| 46:54      | But there's so much more because, you know, everybody does Google searches, but why not                  |
| 46:59      | target your search? Like, you want to search in Google Maps or [[Apple Maps]], or you want to translate.     |
| 47:05      | Like, if I just type TRA, then it opens up the ability to translate. One that I do all the time          |
| 47:13      | is Drive. It's Google Drive. It searches my Google Drive for automators outline, you know.               |
| 47:19      | IMDB, eBay, another one that I use sadly too much is [[Amazon]]. Like, you type [[Amazon]], and it searches      |
| 47:28      | the [[Amazon]] store for whatever it is you want. So rather than going to [[Amazon]] and trying to do the        |
| 47:33      | search in their app, you just type AMA, in my case, return, then whatever product you're looking at,     |
| 47:38      | and it opens up [[Amazon]]. Now, in order to make that [[Amazon]] one work, one of the things you need to do     |
| 47:42      | is when you set up [[Alfred]] the first time under the General tab is you need to indicate your country,     |
| 47:47      | so it searches the right store. But, you know, you want to do that. But I just, I mean, all of these,    |
| 47:54      | another one I use all the time is YouTube. Like, I want to go into YouTube and learn about Greek         |
| 47:59      | philosophy, you know. I just type YOU, and then it prompts me YouTube search, and I hit Enter,           |
| 48:05      | and I just type Greek philosophy, and then up they come, you know. And so whatever it is you             |
| 48:10      | want to search, they've got it. They have a Facebook one, but I mean, who would use that, right?         |
| 48:16      | IMDB, Bing. So if you want to go to the other side and search with Microsoft, you can do that.           |
| 48:22      | Wolfram Alpha, you know, we don't talk about that much, but that's a really powerful engine.             |
| 48:26      | [[DuckDuckGo]], which is a great tool for privacy. [[Alfred]] Help, Rotten Tomatoes, you know,                   |
| 48:32      | they've got a bunch of them here. And as you learn to use them, it's the only way to search the web.     |
| 48:39      | And let's just talk about that now. But in a minute, I'm going to talk about                             |
| 48:44      | how you can customise those as well. I mean, do you use the built-in ones?                               |
| 48:48      | Yeah, yeah. So I use the built-in ones, and I've got a couple of custom ones as well.                    |
| 48:53      | And I definitely second David's tip. Under general, make sure your country is set correctly.             |
| 48:57      | After I moved from Austria, I had to go and change that because it was searching                         |
| 49:01      | [[Amazon]] Germany for me. Because I actually, so a little tip, if you don't have a local [[Amazon]],            |
| 49:07      | so for example, you live in Portugal or the Netherlands or Austria, you won't have a local               |
| 49:12      | [[Amazon]]. There is no [[Amazon]] Netherlands, [[Amazon]] Portugal, [[Amazon]] Austria. You use, you know,              |
| 49:17      | your adjacent country. So for Austrian Netherlands, it's probably Germany. And for Portugal, it's Spain, |
| 49:23      | there's plenty of other countries in the world that have to use another country's [[Amazon]] as well.        |
| 49:27      | And so you can, you can customise that. So I changed mine back to the UK, and voila,                     |
| 49:33      | I'm now searching UK [[Amazon]] and UK eBay and UK Google versus, you know, amazon.com, which                |
| 49:41      | great, but I get murdered on shipping charges and Prime does not deliver next day if I do that.          |
| 49:46      | So I'm not going to be doing things like that. My Yale lock came from [[Amazon]] UK,                         |
| 49:50      | thanks to one of their actually very good deals. But yeah, it's well worth doing it.                     |
| 49:56      | Because the other thing is, say I search for something, I don't know, sleep monitor.                     |
| 50:01      | One of the things that [[Alfred]] will do for you, if you just search for something and it can't find it     |
| 50:05      | on your computer, or under the options that it's found on your computer, kind of like a                  |
| 50:11      | spotlight does, spotlight or the bottom has options to search the web and search in finder.              |
| 50:17      | Thanks, spotlight. But if you can't find it in finder, we'll find or find it in finder.                  |
| 50:22      | If you type something and [[Alfred]] can't find it on your computer, it has built-in options to search       |
| 50:27      | Google, [[Amazon]], and Wikipedia. So if I type sleep monitor in, which is something I don't have much       |
| 50:33      | of written about on my Mac, then it gives me the options to search Google, search [[Amazon]],                |
| 50:38      | and search Wikipedia for those three options for that phrase or query, rather. And that's great          |
| 50:47      | because it means if you type something and you thought, oh, man, I thought I bookmarked that             |
| 50:51      | because guess what, [[Alfred]] can search your bookmarks too. We might have to talk about that in a          |
| 50:55      | minute, David. Then you can go off and search on the web for it instead.                                 |
| 51:02      | Yeah, powerful stuff. And then, like I was teasing earlier, you can also create custom searches.         |
| 51:08      | And the custom searches, there's a couple things about that. They're not that difficult to make.         |
| 51:13      | Like I made one for MacSparky and all you do is you type in the web search query from your              |
| 51:19      | website, any website that has a search bar and it has a web search query, just go to                     |
| 51:23      | the search bar and you can paste it out of the URL. But you do have to paste in in the,                  |
| 51:29      | what do you call this squiggly bracket? Is that what you call this squiggly bracket?                     |
| 51:33      | Curly braces. Curly braces. There we go. Spoken like a true program. With the word query in it,          |
| 51:38      | and that passes whatever you have in [[Alfred]] to the search. But you can put them in, like if              |
| 51:43      | there's a website you go to frequently, like I was thinking, and it just occurred to me right            |
| 51:47      | before we recorded today, so I need to make quantities for the automators forms. But I                   |
| 51:53      | need to make quantities for the automators forms, because why not just be able to search the forms?      |
| 51:57      | And it would be very easy to put something like that together.                                           |
| 52:00      | Yeah. A little tip I will give people, if they're trying to figure out what is the search                |
| 52:06      | query for a website. A lot of websites are well coded. So that means that you could type in the          |
| 52:11      | website URL, and then there's a lookup button on the right. And then it will use two different           |
| 52:16      | options. It can use open search and search action to try and find something. The other                   |
| 52:22      | website doesn't have a built-in search. There are these websites out there. Or the built-in              |
| 52:26      | search is really sucky, because they've got tons of data, and it would take literal masses               |
| 52:33      | of computing power to do that. Then you can also do a search with Google or [[DuckDuckGo]],                |
| 52:41      | your site preference, take your pick, and append it with site colon, and then the website URL.           |
| 52:47      | So for example, if the automators form didn't have a search, that's not true. It does have a             |
| 52:51      | very good search, actually. Then you could put site colon, talk.automators.fm. Done. And then it         |
| 53:01      | would search specifically the automators forms with your search engine of choice. I love duck            |
| 53:07      | duck go for that, David. I don't know where you are. But there's also at the bottom of this a            |
| 53:12      | validation where you can type, where it will have text. Of course, the default text is [[Alfred]] app.       |
| 53:19      | And then if you press test, it will try to execute the search replacing the curly braces                 |
| 53:27      | query with whatever it is. So one I'm using right now, screencast online. And I've just                  |
| 53:32      | searched for [[Alfred]] in screencast online. And it turns out that in January 2020,                         |
| 53:37      | they did an [[Alfred]] 4 video. So if anybody wants to watch a video on that and is a screencast             |
| 53:42      | online member, then I'll put a link to that in the show notes for you.                                   |
| 53:45      | Yeah. But those web searches, I think, are a killer feature. And one again, I think a lot                |
| 53:51      | of people aren't aware of and don't use. And so use the built-in ones. But if you're                     |
| 53:58      | currently or constantly going to a single website for searches, just build it into [[Alfred]]. You can       |
| 54:04      | make it yourself. Yeah. Yeah. So don't necessarily, you won't have to open [[Safari]], [[Firefox]], [[Google Chrome\|Chrome]],      |
| 54:11      | [[Microsoft Edge\\|Edge]], whatever your browsers of choice, press command L, and then type it in and then search             |
| 54:18      | for it. Instead, you just come on space to [[Alfred]], type your search query, done. And I find that to      |
| 54:25      | be insanely useful. And you want to talk about contacts? Well, before we talk about contacts,            |
| 54:31      | David, I think I teased people just now. I think we should talk about bookmarks a minute.                |
| 54:35      | All right. Let's do that. Because web bookmarks are something, so if you're a [[Firefox]] user,              |
| 54:41      | I am afraid you're out of luck here. [[Alfred]] only integrates with bookmarks in [[Safari]] and [[Google Chrome\|Chrome]].         |
| 54:48      | But basically what this means is you can turn on searching your bookmarks. So obviously,                 |
| 54:54      | in the bookmarks of [[Safari]], that's my browser of choice, I actually use [[Safari Technology Preview]],       |
| 55:00      | but it integrates via [[Safari]], so it's fine. If I search for automators, then as well as                  |
| 55:07      | all of the other things on my computer that come back with automators, I also see results that say,      |
| 55:13      | automators form. And when I open it, it opens [[Safari]] and goes to talk.automators.fm. Because             |
| 55:20      | I've turned on, and this is the fifth option down in features, sources, [[Safari]] bookmarks,                |
| 55:27      | under web bookmarks. And I have my bookmarks show in the default results because I don't                 |
| 55:33      | bookmark many things. I'm very selective about my bookmarks. I do not use my bookmarks as a              |
| 55:38      | relater service. If you do use your bookmarks as a relater service, then you may not want to use         |
| 55:44      | this feature, just because you're going to have tons of stuff. Unless, of course, you want all           |
| 55:48      | of that stuff to show up, in which case it's perfect. And yeah, they do recommend don't                  |
| 55:55      | enable browsers that you don't need here. So I do also have [[Google Chrome\|Chrome]] installed for a variety of reasons,   |
| 56:00      | debugging among them. And I don't have bookmarks enabled for [[Google Chrome\|Chrome]] because, obviously, the more         |
| 56:06      | stuff you put into [[Alfred]], the more it's going to have to process things. And the more it has to         |
| 56:09      | process, the slower it's going to be overall. I've personally never, ever had a performance              |
| 56:15      | issue with [[Alfred]], ever. But I don't enable things. I don't need that either.                            |
| 56:21      | And neither have I. And I actually question why they don't have bookmarks turned on by default.          |
| 56:26      | It surprises me. If you forget to turn it on and you expect to see them, they're just not there.         |
| 56:32      | Well, David, when's the last time you worked in first level support? Because                             |
| 56:35      | having seen some of the horrors that people do with their bookmarks, I've met plenty of people           |
| 56:39      | with well over 10,000 bookmarks. I can easily see why the [[Alfred]] developers there decided,               |
| 56:45      | let's not turn that on by default. Yeah, I'm like you. I'm pretty conservative with bookmarks.           |
| 56:50      | I mean, I use them, but I don't. Yeah, I don't treat it as a readout later service. So yeah,             |
| 56:56      | I see there you go. Yeah. But yeah, it's there. And just make sure if you haven't got it turned on,      |
| 57:01      | like we've said, go into the preferences fifth item down, it's one toggle and turn it on.                |
| 57:09      | So David, do you want to talk about contacts? Yeah, I think I've held you off for long enough.           |
| 57:13      | Contacts on [[Alfred]]. Well, I think contacts are just really handy in [[Alfred]] because they give you         |
| 57:19      | more options than spotlight does, you know, in spotlight, you can get a contact. And if you              |
| 57:25      | select the contact, it has things you can do, but they're very limited options. Whereas with             |
| 57:30      | [[Alfred]], you have kind of full control. If I hit in [[Alfred]] command space, and then Rosemary Orchard,      |
| 57:36      | and then return, I've got a list of everything here, I've got your birthday, I've got phone numbers      |
| 57:41      | and email addresses, and all of them, I can go through them. And then once I select one,                 |
| 57:46      | like I can hit command, see to copy it, or I can hit return to open and create a new email to you,       |
| 57:52      | or, you know, anything I want to do with that data. And I just feel like that, you know, [[Alfred]]          |
| 57:58      | does a much better job of making that stuff present and giving you more power. Like I constantly         |
| 58:04      | am sitting emails introducing people like as a lawyer, I'll say, oh, you need to talk to this            |
| 58:09      | insurance person or whatever. And I want to put details in the email so that people can talk to          |
| 58:14      | each other. It's so much easier to do that with [[Alfred]] than it is with [[Spotlight]].                        |
| 58:20      | Yeah. And that is one of the things I love, you know, you just, the other thing is, is it's not          |
| 58:26      | just, so I've searched for David Sparks right now, and it showed me David Sparks macsparky.com,           |
| 58:30      | and you're an emoji, because that's the photo I have saved for you, because that's what contacts         |
| 58:35      | did. But here, I've got email address, I've got your domain name, I've got phone number, I've got        |
| 58:41      | your physical address. And depending on which of these I have selected, it gives me different            |
| 58:45      | options. So I can press return on an email address to email you, I could command C to copy it,           |
| 58:50      | and I can also do command L for large types. So if I want to show your email address in massive          |
| 58:56      | letters, I think this is more useful for stuff like Wi-Fi passwords, and that's a feature one            |
| 59:00      | password actually has built in. But the return for email address disappears if I mouse over,             |
| 59:05      | if I use the arrow to go down to your domain name, it then says open this URL. And if I mouse down       |
| 59:11      | again to your address, it opens it in maps and will give me directions to get all the way to             |
| 59:15      | California. Wow, David, it got lost in the ocean, you're gonna have to send a boat to come get me.       |
| 59:21      | And so does it involve the submarine? I don't know, but you're gonna have to send a search party out.    |
| 59:27      | Make sure your favourite doodle is ready for me. But yeah, I like this because it gives you these         |
| 59:34      | options. And of course, it's smart about these things as well. So for stuff like Twitter handles         |
| 59:40      | and things like that, because I've got all of that added, it doesn't give me an option to open           |
| 59:44      | that on Twitter. It just gives me the option to copy it. But I don't use the Twitter app,                |
| 59:49      | I use Tweetbot anyway, and macOS doesn't have a setting for your default Twitter application.            |
| 59:55      | So that's probably for the best. But I like it. And I like the fact that I can press escape to           |
| 01:00:01   | go back at any time. If I have multiple David Sparks's in my Contacts book, and I press enter            |
| 01:00:08   | on the wrong one, and I go, oh man, it's the wrong one. I press escape, I go back, I mouse down,         |
| 01:00:13   | or I use the arrow keys to go up and down, and then I go back to it. And if you use the action           |
| 01:00:21   | button, so that's your command one through nine, and also the return key, then it does the same          |
| 01:00:28   | thing there, which for me is perfect. I love it. Yeah, I used to use that large type when I              |
| 01:00:35   | worked for the law firm, because I had a standing desk where my laptop was, and                          |
| 01:00:39   | the phone was on the other side of the room, and sometimes I'd want to call somebody,                    |
| 01:00:42   | I just put a large type. I would add if you are interested in using [[Alfred]] for contact management        |
| 01:00:48   | to go into the settings. Once again, there's an advanced tab, like if you wanted to show                 |
| 01:00:53   | last name before first, or put job titles in, or even select which maps to use to get maps,              |
| 01:01:00   | you know, hopefully one that will give rows a submarine. But there's a lot of customisation              |
| 01:01:05   | you can do with the Contacts, so you can make it work just the way you want.                             |
| 01:01:08   | Yeah, and it's great. I love it. So, you know, please give it an option, give it a go and give           |
| 01:01:17   | it a try, because, you know, it's amazing how little I use the actual Contacts application.              |
| 01:01:24   | If I want to add a contact, then I'm going to use something like card hop, because I just                |
| 01:01:28   | paste a whole bunch of information from the email signature, and it magically goes through               |
| 01:01:31   | parses out, and I'm done. But if I want to actually just access like an email address or                 |
| 01:01:38   | something, or honestly, if I want to email somebody, I won't start with opening my email                 |
| 01:01:42   | application and pressing Command N. I start with [[Alfred]] now, because if I open my email, last            |
| 01:01:49   | day check, David, I have 34 unread email messages, because I haven't been on top of my email today,      |
| 01:01:53   | and the last thing I want, if I need to just send somebody a quick email, is to be, you know,            |
| 01:01:58   | smacked with the avalanche of unread email. It happens easily, it, you know, and it's totally            |
| 01:02:04   | normal. But if I want to send somebody an email, I don't want to get, you know, sidetracked with         |
| 01:02:09   | that. Yeah, I mean, that's the whole idea, right? Once you open the email normally, the inbox hits       |
| 01:02:16   | you, and who knows if you're going to actually remember this in the email you open it up for.            |
| 01:02:21   | Anytime you can take that distraction out of your, out of your face, you're doing better.                |
| 01:02:26   | Yeah. One more small one, I want to, I want to talk about [[Alfred]] work, because we're going to            |
| 01:02:30   | wait till later, because while we're on these little ones, I think another one I would mention           |
| 01:02:35   | is system preferences and system commands. So with [[Alfred]], like you can put your computer to             |
| 01:02:45   | sleep, and all you have to do is type command space and then sleep, and then it puts your computer       |
| 01:02:51   | to sleep, or restart. And there's some of these things that for whatever reason, [[Apple]] just doesn't      |
| 01:02:57   | put those in spotlight. Maybe they don't want somebody accidentally shutting down, but [[Alfred]]            |
| 01:03:01   | trusts you. And so all the system commands that you normally do, like I can never remember               |
| 01:03:07   | the weird keyboard shortcuts for restart, sleep, turn monitor off. I know it involves the escape         |
| 01:03:13   | key and something else, but you know, I just can never remember. So I just use [[Alfred]] for all that       |
| 01:03:18   | stuff. Yeah. And I love this. There is one, and I do have to be a little careful when I am looking       |
| 01:03:26   | for a quick time, because if you type quit instead of quick, then one of the options that comes up       |
| 01:03:33   | is quit all applications. And this is something you can of course do with [[Keyboard Maestro]].              |
| 01:03:38   | And I actually have a couple of different ones where I, you know, I quit, you know, my open              |
| 01:03:43   | applications as part of another macro. But sometimes at the end of my day, one of the things I'm         |
| 01:03:48   | trying to integrate into my shutdown routine is just quitting all of my open applications.               |
| 01:03:52   | Because again, it's like email, you open your email and you get slammed with the 34 and read             |
| 01:03:57   | emails. And all you wanted to do was send David Sparks an email about the next episode of                |
| 01:04:01   | altimeters and the guest who's going to be on because she's fabulous and amazing,                        |
| 01:04:05   | or something like that. And you know, it ends up being a lot more than I want when I get                 |
| 01:04:12   | their first thing in the morning. And I just want to quickly do this one. Oh, no, no, okay,              |
| 01:04:17   | I've got 80,000 things open from yesterday. And I get sucked into this [[Amazon]] tab that I had open        |
| 01:04:22   | looking at battery packs, because I never have enough battery packs. I have a max safe one now,          |
| 01:04:26   | David. I don't know how that happened. Oh, Rose, just wait till you have kids. I mean,                   |
| 01:04:30   | honestly, I think I just need to tell [[Amazon]] to send me a new battery every two months because           |
| 01:04:37   | they just disappear. Yeah, I keep my battery in my little workbench in my studio and everybody           |
| 01:04:43   | knows where it is. And every time I go, it's gone. I swear my parents are the same. Like every time      |
| 01:04:51   | I go over there, I end up giving them a battery pack. My mom really wanted my max safe battery           |
| 01:04:55   | pack the other day, but fortunately, she's got an iPhone 11 pro, not a 12. Because she's got my          |
| 01:05:00   | old iPhone. And so I was very happy to inform her, this doesn't magnetise to the back of your phone.     |
| 01:05:06   | So I got to keep it. Which [[MagSafe]], I haven't bought one of those yet. And now I need one again.         |
| 01:05:10   | And which one did you get? So Anker, I have one. It's not actually [[MagSafe]]. It's a magnetic.            |
| 01:05:17   | It's their power core magnetic, I think 10,000. I don't think the 20,000 is out yet,                     |
| 01:05:21   | or maybe it's the 5,000, the 10,000 is coming. Either way, it does stick on the back of your             |
| 01:05:25   | iPhone, though, in on the [[MagSafe]] area. So that's pretty cool. I'll put a link to it in the show         |
| 01:05:31   | notes. And as you said that, I just opened up for that type AMA, Anker, Power, what do you              |
| 01:05:38   | say, our Anker? I think PowerWave? Yeah. And it showed up. It was the first result.                     |
| 01:05:44   | You can get a 10,000 milliamp hour one delivered tomorrow for $49.99. Boy, they make it easy,            |
| 01:05:51   | don't they? I see the little circle on the back. So you can just lay your phone on top of it if          |
| 01:05:55   | you want. Nice. Does it charge your watch too? No, because it's only, so [[Apple Watch\|Apple Watches]] are a bit         |
| 01:06:03   | finicky to charge. So it doesn't charge that as well, unfortunately. But so, oh wait, it depends         |
| 01:06:11   | on which one you're looking at. I will make sure that the link to the correct one is in the show         |
| 01:06:14   | notes for everybody. It doesn't show up immediately when I search for it on [[Amazon]]. And I, of course,    |
| 01:06:21   | bought it from [[Amazon]] UK versus Amazon.com. $39.99. It is the 5,000 milliamp hour one,                   |
| 01:06:27   | and the link is officially in the show notes. Thank you to [[Alfred]] for helping me create that link.       |
| 01:06:35   | Well, I do think it's cool that you access this stuff so quickly. In fact, almost some days,             |
| 01:06:40   | I feel like the [[Amazon]] one should be turned off. I want to have a little side rabbit hole there,         |
| 01:06:44   | gang. But on system settings, one thing you can do is you can actually, in the settings for [[Alfred]],      |
| 01:06:50   | once again, command space, command comma, if you go under feature, system is towards the bottom.         |
| 01:06:54   | You can individually require confirmation for a lot of the commands, like restart or shutdown            |
| 01:07:01   | can require confirmation. So you wouldn't accidentally trigger it. But it is crazy how                   |
| 01:07:08   | deep down the stack this goes. If you type VOLUP, the volume goes up. I mean, I'm not sure that I'd      |
| 01:07:14   | want to do that through [[Alfred]]. But if you wanted to, you could. So I have volume up and volume down     |
| 01:07:20   | enabled purely for when I'm connected via remote desktop software. And I use Jump Desktop for that       |
| 01:07:27   | for people who are curious as part of the setup suite for the Mac application, where I can then          |
| 01:07:33   | access other computers with it. I pretty much use it on my iPad Pro. It's great for that. So that's      |
| 01:07:39   | good. But I use it for things like that because every so often. And I know this is really weird.         |
| 01:07:45   | I play music from my Mac to my HomePods. And if I'm remoted into my Mac for something else,             |
| 01:07:52   | because I love my Mac mini, it's great. And it'll seem be a purple iMac, which will be even better.      |
| 01:08:01   | Then, you know, so I'm often remoted in doing stuff like messing around with [[Affinity Publisher]],        |
| 01:08:07   | which doesn't yet exist on iPad. And if I'm playing music from my iPad, I don't have those               |
| 01:08:13   | media keys on my iPad. So I can adjust, you know, the volume and the mute as well. And also,             |
| 01:08:20   | I highly recommend having the mute toggle available. Because if you use the Alpha                        |
| 01:08:25   | remote application, and you accidentally leave your computer running, then you can hit mute,             |
| 01:08:29   | and then make sure your Mac goes to sleep from your bed without getting up. But we'll come back          |
| 01:08:35   | to the Alpha remote application after this. Get organised and unleash your creativity with               |
| 01:08:41   | DEVONthink. Use the link in our show notes for 10% off. DEVONthink is the flagship product from          |
| 01:08:47   | Devon Technologies. DEVONthink is the most professional document and information management              |
| 01:08:53   | application for the Mac. It's the one place for storing all of your documents snippets or                |
| 01:08:58   | bookmarks and working with them. The integrated AI assists you with filing and searching,                |
| 01:09:03   | while the extensive search language with advanced Boolean operators also lends a hand.                   |
| 01:09:09   | DEVONthink features a flexible sync system that supports many cloud services,                            |
| 01:09:13   | or lets you synchronise over the local network too. With everything encrypted, you've got choice         |
| 01:09:19   | in how you sync your data. It has smart rules and flexible reminders that let you automate               |
| 01:09:24   | all parts of your workflow and delegate boring repeating tasks. Let DEVONthink automatically             |
| 01:09:30   | organise your data with the rules you define. DEVONthink's AppleScript dictionary is one of              |
| 01:09:35   | the largest on the Mac. There's no part of DEVONthink that can't be automated. With DEVONthink,          |
| 01:09:41   | you can extend the functionality with your own commands by adding them to the scripts menu.              |
| 01:09:46   | Even templates can have scripts inside and you can set up new documents with data from                   |
| 01:09:51   | placeholders or inserted by your own AppleScript code. And of course, there's so much more from          |
| 01:09:57   | the iOS companion app to email archiving, scanning, or even an embedded web server for sharing your      |
| 01:10:03   | data securely with your team. I've been using DEVONthink for a while now and I am sold.                  |
| 01:10:10   | There really is nothing like it on the Mac in order to store, organise, and even find and work           |
| 01:10:15   | with your documents. The AI is spooky good. It finds terms that aren't even in the documents,            |
| 01:10:21   | but still relevant. And I love that I can add my own personal password to the encryption layer           |
| 01:10:26   | to keep things just for me. You can get DEVONthink with 10% off right now or upgrade to it right         |
| 01:10:32   | now. Just go to DEVONtechnologies.com/Automators. That's DEVONtechnologies.com/              |
| 01:10:40   | Automators for that 10% off. And our thanks to Devon Technologies for their support of the               |
| 01:10:45   | automators and all of Relay FM. Before we went to the break Rose was teasing us about the remote         |
| 01:10:52   | app. So [[Alfred]], if you want to spend another $5 has an application you can get from the App Store        |
| 01:10:57   | for your iPhone or iPad, but I think it's really ideally made for the phone. And once you set            |
| 01:11:02   | it up, you have to have your Mac and your phone on the same Wi-Fi network. And if you go into that,      |
| 01:11:09   | you know, command space command comma, I should stop saying that, but I can't help myself.               |
| 01:11:13   | There is a remote tab in there and you can pair your phone to your Mac. And when you do that,            |
| 01:11:20   | it gives you the ability to remotely control your Mac via [[Alfred]]. Now, we've talked about                |
| 01:11:26   | remote control to your Mac on various episodes of automators. And sometimes it involves like             |
| 01:11:31   | running a remote server or some, some different thing. I feel like [[Alfred]] is actually a very             |
| 01:11:35   | easy way to do this. And, and there's a whole like category of third party apps that do this as          |
| 01:11:41   | well. But once again, if you're already in the ecosystem of [[Alfred]], why not just do it via [[Alfred]]?       |
| 01:11:48   | Historically, I, and Rose and I were talking before the show, neither one of us were big                 |
| 01:11:52   | fans of this historically, because it just felt like it was kind of a clunky app. But                    |
| 01:11:57   | between the last time I used it and prepping for today's show, they have spent a lot of time and         |
| 01:12:03   | effort. And it's actually a very nice looking app now. It is, it is. Because I mean, previously,         |
| 01:12:08   | it wasn't optimised for face ID phones and things like that. And the [[Alfred]] team were aware of it.       |
| 01:12:13   | And so I'm very pleased that they, they've updated it as well. You know, they've made the                |
| 01:12:18   | decision to stop, to temporarily pause, I guess, for a little while on the Mac application and           |
| 01:12:23   | devote some time to the iOS app. And it shows, it's nice. So by default, when you first set              |
| 01:12:28   | it up, you just get some system controls, which allows you to do things like show [[Alfred]], quit           |
| 01:12:33   | all your applications, eject all hard drives. That's something you can do with [[Alfred]]. That's            |
| 01:12:38   | one of the system commands that David mentioned before the outbreak. And that's a great command          |
| 01:12:43   | if you have a laptop that you usually keep plugged in, but you pick up and take with you,                |
| 01:12:49   | you know, before you pick it up and take it with you, eject all your hard drives, you don't              |
| 01:12:52   | want data corruption, right? So, you know, you eject all your hard drives, you can just eject            |
| 01:12:57   | all of them at the same time with [[Alfred]]. You can also open your screensaver, show the trash,            |
| 01:13:03   | or my favourite one, empty the trash, if it's in the trash, bye-bye. Lock yourself out,                   |
| 01:13:08   | useful for shared machines, of course, sleep the computer, lock the computer, restart and even           |
| 01:13:13   | shut down your computer. Of course, if you restart, you're going to have to come back to your computer   |
| 01:13:17   | and type in your password, please, I hope you've got a password on the keyboard connected to your        |
| 01:13:23   | machine before you can remote back in via the [[Alfred]] app at any rate. But it's great. But then,          |
| 01:13:30   | if you're liking the sound of this and you think, oh, well, what else can it do under the remote         |
| 01:13:38   | entry in the [[Alfred]] preferences, command space, command comma. So, remote is the fifth one down          |
| 01:13:44   | on the left. You can then use the little plus button at the bottom to add more under examples.           |
| 01:13:49   | There's also applications, which is your applications, preferences, folders and files,                   |
| 01:13:54   | web searches, bookmarks, music control and clipboard snippets. And each of these gives you               |
| 01:14:02   | a 16 button pane. So, you can also add, there's also workflows and blank pages. So, if you added         |
| 01:14:09   | a blank page, you'd get a grid of 16 buttons. And those 16 buttons, you can program.                     |
| 01:14:17   | Oh, wow, David, you can do anything you like. You can run an [[AppleScript]] command,                       |
| 01:14:20   | terminal command, keyboard combination. You can trigger a specific [[Alfred]] workflow. We're going          |
| 01:14:25   | to have to talk about those in a minute. You can open [[Alfred]] preferences. You can do                     |
| 01:14:32   | anything you like. Open URLs, open files. You name it, David. It's here.                                 |
| 01:14:38   | Honestly, I don't see myself using any of that stuff except for the system commands. I'm going           |
| 01:14:43   | to use, I would rather just remote in something with Jump Desktop and run my Mac remotely. But           |
| 01:14:50   | what it is useful for is just the other night, my studio now is downstairs because of the pandemic.      |
| 01:14:57   | I had to move out of a bedroom and I happened to leave the speakers on. My computer has external         |
| 01:15:04   | speakers and I was upstairs in bed and somebody was talking on [[Slack]]. All I could hear was the           |
| 01:15:11   | [[Slack]] noises. I didn't have any device with me. And I was thinking, it's going to be bugging             |
| 01:15:16   | everybody in the house. So, I went downstairs and fixed it. But I could have just, if I had this         |
| 01:15:21   | installed at the time, I could have muted my computer. It would be that easy. Or sleep the               |
| 01:15:26   | screen. I think it's useful for the system stuff. I don't think I will go very far down the              |
| 01:15:33   | rabbit hole on the rest of it. What I can see this being useful for me is setting up for podcasts        |
| 01:15:39   | and things like that. So, frequently, just because of time zone differences, before I podcast,           |
| 01:15:44   | before I recorded automators today, I was in the kitchen. I cooked dinner and I ate dinner.              |
| 01:15:48   | And I wasn't in my office. And I had to come back to my office to trigger my automation                  |
| 01:15:54   | for starting a podcast, which cleared a bunch of open applications, open specific applications,          |
| 01:15:59   | and then used [[Moom]] to put them in the right place. Well, with [[Alfred]], I can now do that                  |
| 01:16:04   | for my phone. Because previously, I could have got out my iPad and used Remote, Jump Desktop or            |
| 01:16:09   | something. But by the time I've done that, I could walk to my Mac, press command space,                  |
| 01:16:14   | type the command and walk away again. It's not worth it for things like that. But with [[Alfred]],           |
| 01:16:20   | I can definitely do that. Because I'll just have setups folder here now. And I'm going to be using       |
| 01:16:29   | this. I'm going to have to report back on this in the next show, David, where I'll be able to            |
| 01:16:33   | just say, automators or nested folders, iOS today, and things like that. And it means also, then         |
| 01:16:40   | when I get to my Mac, it's, you love contextual computing. My Mac is already going to be in              |
| 01:16:46   | the context that I need when I get to it because I'll press the button on my way there. So,              |
| 01:16:50   | I'm quite happy about that. That's a [[Stream Deck]] problem for me. But I get it. I mean,                   |
| 01:16:55   | I think it's cool. I think if you're doing remote stuff, the more ways you have to control your          |
| 01:17:00   | computer or the better. And honestly, remote control, belt and suspenders is a really good               |
| 01:17:08   | idea. Because sometimes something for one reason or another just doesn't work.                           |
| 01:17:12   | Yeah. Yeah. And yeah, I'm definitely going to keep it around for the system things. Because,             |
| 01:17:16   | like you said, you know, with with slack going, or whatever that sound is, I don't even remember         |
| 01:17:21   | now what the sound is. I just, I know it when I hear it. And like my spine does this weird thing         |
| 01:17:26   | where it's like, no, you know, when I'm not at my computer and somebody starts eagerly chatting with     |
| 01:17:31   | me, despite the fact that they're not getting a response. If you're not getting a response people,       |
| 01:17:37   | yeah. But so this way I can just pull out my phone, mute my machine, and go back to doing                |
| 01:17:43   | whatever it was I was doing. [[Alfred]] workflows. Now, this is something I've been waiting the whole        |
| 01:17:49   | show to talk about. [[Alfred]], I believe it was with version three that they first brought this in,         |
| 01:17:55   | but it got better with version four, where people can write their own little mini programs to run        |
| 01:18:02   | inside [[Alfred]] and give it like superpowers. So like the simplest one that I have, just to kind           |
| 01:18:10   | of give you an introduction to is called time zones. And what it does is I have set it up. So            |
| 01:18:16   | if I just type TZ when I open [[Alfred]], it gives me the time zone in Memphis, London and Taipei.           |
| 01:18:23   | I have three people I work with, you'll never guess who's in London or outside of London.                |
| 01:18:29   | But I just type TZ and it gives me the current time in those places. And it's the fastest way            |
| 01:18:36   | to get time zone information from me because it's like command space TZ, you know, and,                  |
| 01:18:40   | and then there's more you can do with this, you can add cities, remove cities, you can do all sorts      |
| 01:18:45   | of cool things. You can get the time zone in a random city. But I just find this a very useful           |
| 01:18:51   | thing. And it's a plugin that somebody wrote like five years ago, and you download it, you install       |
| 01:18:57   | it into [[Alfred]] and configure it and you're off to the races. And these workflows are,                    |
| 01:19:03   | are really what brought me out of [[LaunchBar]], because the workflow community in [[Alfred]] is so              |
| 01:19:09   | good and there are so many different things at stake. So I thought it'd be, I've been dying all          |
| 01:19:15   | week to find out what Rose is using for her [[Alfred]] workflows, but I've got several I like too.           |
| 01:19:20   | You want to share one of your favourites? I mean, I love those. So do I get to dive right into the        |
| 01:19:27   | weeds now? David or do you want one of my simpler ones to start with? Yeah, you can have a simple        |
| 01:19:31   | one. Let's try this. Okay. Well, one of my simple ones is with [[Yoink]]. So I mentioned this before,        |
| 01:19:36   | but in [[Yoink\|Yoink's]] preferences, so [[Yoink]] is a Mac application, which is a shelf. And I have it               |
| 01:19:41   | appear over on the left side of my screen, my start dragging a file, because then I can shove            |
| 01:19:46   | that file in [[Yoink]]. And this is really useful. It doesn't actually, the file doesn't actually            |
| 01:19:49   | move to [[Yoink]]. It just basically a shortcut to the file lives there. And then you can drag it off        |
| 01:19:54   | to wherever later. And this can be useful for a variety of things. But finding files by digging          |
| 01:20:00   | through Finder is one of my least favourite things to do. You know, I just, I don't really do it.         |
| 01:20:06   | And so I usually find it with [[Alfred]]. And then I have [[Yoink]] as one of my options there. So I can         |
| 01:20:13   | add that to [[Yoink]]. And this is specified as a file action. So under [[Yoink\|Yoink's]] preferences,                 |
| 01:20:18   | you can actually specify to install this [[Alfred]] workflow. And I'd highly recommend doing that            |
| 01:20:25   | if you use [[Yoink]]. Yeah, okay. That's a good one. We talked, I think, on this show recently about         |
| 01:20:32   | how the ones that I'm really, I'm just a huge fan of the OmniFocus ones that were created by,            |
| 01:20:41   | name escapes me, Packal.                                                                                 |
| 01:20:45   | They're on the Packal website. Yeah. I don't remember exactly who created them,                          |
| 01:20:49   | but the link to those is in show notes. Yeah. The Packal OmniFocus scripts are game changer              |
| 01:20:56   | if you use OmniFocus because they use the dot command. So you type dot f space, and then you             |
| 01:21:03   | can search all the folders in OmniFocus or dot p and search all the projects and you get it, you         |
| 01:21:08   | know, OmniFocus is great. But I am often not an OmniFocus when I think of something I want to see        |
| 01:21:14   | in OmniFocus and being able to like, I'll say dot f and then a client name and enter and it opens        |
| 01:21:20   | up OmniFocus to the specific client folder. And it's that fast. And I've not found any faster            |
| 01:21:26   | way to get to a target location in OmniFocus than that short of, you know, saving the URL to that        |
| 01:21:31   | place. And boy, I installed that and like within a day I was sold. Yeah. So the plugin itself is         |
| 01:21:38   | actually created by, I think, Reed Lewis, R-H-Y-D. And it's on GitHub as well. So I've linked to         |
| 01:21:45   | your blog post about it, David, the page on Packal. Packal is kind of like a library for                 |
| 01:21:51   | [[Alfred]] workflows. Some of them can sometimes be a little bit out of date. So check to see when           |
| 01:21:55   | things were last updated there. If you're struggling with something not working for whatever             |
| 01:22:01   | reason, but then it's also on GitHub. So I've got that linked to for people.                             |
| 01:22:06   | If I ever meet Reed, I am buying him a beer. Let's just put it out there. If you're listening,           |
| 01:22:11   | let me know. Well, one of the other things that you can do with [[Alfred]], and I believe this is a          |
| 01:22:18   | script that I got from Packal, I'm going to have to search for it now because I've had it for ages,      |
| 01:22:22   | is VPN connections. So I mean, I do use things like ExpressVPN. They're sponsoring the show.             |
| 01:22:29   | But I also have my work VPN and things like that, which I need to be able to do my job. But sometimes    |
| 01:22:35   | I have different VPNs because I need to access different parts of things and complex, weird              |
| 01:22:40   | networks. So I can't just say connect the VPN and be done with it, because that is almost                |
| 01:22:47   | certainly going to land me in the wrong network if I do that, because it's always going to be            |
| 01:22:50   | specialist. So I have a [[Alfred]] command, which lists the VPN options set up in my system preferences      |
| 01:22:57   | under my network. And then I pick one, and then it connects me. And this is great. So I do have          |
| 01:23:04   | a default VPN connection, which I've just set to works VPN, because, you know, most of the time,         |
| 01:23:09   | I can probably get away with just being in works VPN for things. And I try to encourage                  |
| 01:23:14   | whole the different departments to just put things in the main VPN, wherever possible,                   |
| 01:23:18   | instead of sub private things. But for those times when I can't do that, where people insist             |
| 01:23:23   | that their data has to be in a super secure internal private network, which cannot be accessed           |
| 01:23:28   | from the bigger network or whatever, then I have separate VPN. So being able to list those out has       |
| 01:23:33   | been really helpful for me. Another one for me is DEVONthink search. There is a DEVONthink         |
| 01:23:39   | three shirts by I think Charles Ma. And it does a great job you install and there's different            |
| 01:23:44   | parameters you can pass to it, like DNF say searches your favourites and DEVONthink or,                |
| 01:23:50   | you know, D&T is the standard search. But it's a, it's an excellent way kind of like the way I use       |
| 01:23:57   | the on me focus search. You know, if I can search an app from anywhere on my computer, despite in        |
| 01:24:02   | command space, why not be able to do searches inside apps and have a lot of data and DEVONthink,      |
| 01:24:08   | and I want to drill to a specific location. That's where [[Alfred]] kind of lends a hand and it saves        |
| 01:24:13   | me the trouble of finding the app, opening the app and then drilling through that, you know,             |
| 01:24:18   | left menu to find where I wanted to be. Yeah. So David, do I get to get really nerdy now on some         |
| 01:24:25   | of these workflows? Yeah, let's hear one. So we had a great guest on the show a couple of months         |
| 01:24:29   | back [[Stephen Millard]]. And he's recently created two amazing workflows. one of them's for [[Keyboard Maestro]]               |
| 01:24:37   | and one of them's for [[Drafts]]. Okay, so for [[Keyboard Maestro]], David, we have a conductor,                 |
| 01:24:43   | and for [[Drafts]], we have a doctor, [[Doctor Drafts]], and our [[Conductor]] for [[Keyboard Maestro]]. And I'll        |
| 01:24:47   | put links to both of his blog posts about these in the show notes. But basically, it means if I          |
| 01:24:52   | press command space and type doctor, as in DR, and then press space, I get a whole bunch of options,     |
| 01:24:58   | new draft, new draft, and open the new draft instead of leaving it in the background, append to a draft, |
| 01:25:03   | prepend to a draft, dictate to a draft, find a draft by content, copy a draft's URL, copy a draft's      |
| 01:25:08   | content, find draft by title, and about what feels like 8 million other options. And the                 |
| 01:25:16   | [[Keyboard Maestro]] one is pretty much or very similar in that it, you know, offers me all of these         |
| 01:25:23   | choices. And so I can do a very similar thing with this with [[Conductor]]. For that, you start              |
| 01:25:33   | it with KM, unfortunately, you don't write [[Conductor]], but then I get a list of my keyboard               |
| 01:25:37   | maestro macros right there. So I can specify the automators episode number. I did that at the            |
| 01:25:41   | beginning of the show, David. I used KM and then command seven, because that's my seventh macro          |
| 01:25:47   | there. And that's it. You know, and I just typed in the episode number and I was done.                   |
| 01:25:51   | Yeah, I mean, he, I think he told us he was working on them, but it's amazing to me how                  |
| 01:25:56   | advanced they are, you know, the [[Drafts]] one in particular. But keyboard launching [[Keyboard Maestro]]               |
| 01:26:02   | scripts from [[Alfred]] is really powerful. And there have been workflows in the past,               |
| 01:26:08   | but none of them are as good as his. I mean, this is the one you want.                                   |
| 01:26:12   | Yeah, I mean, I created a couple of macros when [[Drafts]] for Mac first launch.                             |
| 01:26:16   | And it was good. And things were fine. And, you know, everything was okay. But this is                   |
| 01:26:24   | just so much better. So much better. So, you know, that that's what I like. It's incredibly              |
| 01:26:32   | powerful. And I must see even smash to do here as well. I would encourage people if they're              |
| 01:26:37   | thinking about creating a [[Drafts]] and [[Drafts]] at [[Alfred]] workflow themselves, have a quick look             |
| 01:26:44   | at what he's done here, go, wow, amazing. And then go have a look at one of the simpler ones             |
| 01:26:51   | to get started, like the DEVONthink search. I mean, that one's still kind of complicated,             |
| 01:26:54   | but send to [[Yoink]], for example, that's a two action workflow. It has your file action,                    |
| 01:27:00   | which is your trigger, and then it's got an [[AppleScript]]. Okay, time zones, a little bit more            |
| 01:27:06   | complicated because you've got multiple triggers. But there, there's some great resources on the         |
| 01:27:11   | [[Alfred]] website, which I've linked to in the show notes for everybody, so that you can see,               |
| 01:27:18   | you know, how to create one. But it is kind of amazing that, you know, you can do all of this.           |
| 01:27:26   | I have a little one actually here. And I'm going to see if I can find the link to this,                  |
| 01:27:30   | because I've stolen it from somewhere, I can tell where if I type to do space and then something,        |
| 01:27:36   | it just adds an OmniFocus task in my inbox. It doesn't pop open or OmniFocus or quick capture            |
| 01:27:41   | or anything like that. It just checks it in my inbox and I'm done with it. Things like that              |
| 01:27:45   | make my life much easier. I have, I've been playing, there are some people developing                    |
| 01:27:51   | around [[Obsidian]] workflows for [[Alfred]]. And the ones that are out there yet, I haven't found               |
| 01:27:57   | what they do are not things I really want. So it's not really out there. But the way I've been           |
| 01:28:03   | automating [[Obsidian]] with [[Alfred]] is I have a web search. We talked earlier about custom web               |
| 01:28:07   | search as well [[Obsidian]] has a [[URL Schemes\|URL scheme]]. So I've got one that it doesn't start with HTTP,               |
| 01:28:14   | it starts with [[Obsidian]] colon slash slash, but it does an [[Obsidian]] search. And that I find that          |
| 01:28:22   | useful. And I just tie it to the, to the letter O. But the, but I haven't really got an [[Obsidian]]         |
| 01:28:28   | workflow when I'm, I hope some of the nerds out there that are listening that are into [[Obsidian]]          |
| 01:28:33   | will come up with some good ones. I'm not going to make one. I'm not good enough to make one.            |
| 01:28:37   | But the, I do hope that, that something cool comes up. Another one I have that I would share             |
| 01:28:43   | is one that I customised based on the ones that ship with [[Alfred]]. [[Alfred]] has like some search,           |
| 01:28:50   | like if you hit the little plus button at the bottom of the workflow screen,                             |
| 01:28:53   | there's a bunch of like getting started an example and template scripts you can install,                 |
| 01:28:58   | they cover a lot of things. And I don't remember where I got this specific one,                          |
| 01:29:02   | but it was a folder search, which I thought was a really good idea. But then I, I made versions of       |
| 01:29:08   | it, like search particular groups of folders, like, let's say you've got a folder with all your          |
| 01:29:13   | client files in it. So you could have it trigger with CL and just search that folder where the           |
| 01:29:19   | client folders are and just give you folder lists. So you can get to folders. I mean,                    |
| 01:29:23   | actually keep a lot of this stuff in DEVONthink, but if you kept it on your,                          |
| 01:29:27   | on your native drive or even on your iCloud drive, this would give you a quick way to                    |
| 01:29:32   | get to them. Yeah. I'm actually just looking through here, David. And I've got one that I                |
| 01:29:37   | created myself. It's called lullaby. And the idea is it's putting my Mac to sleep. But before it         |
| 01:29:43   | puts my Mac to sleep, it runs an [[AppleScript]] command. And it says, you know, when, when the             |
| 01:29:48   | alpha script happens, check if iTunes is running. So you can tell how long I've had this because         |
| 01:29:53   | I haven't upgraded it to [[Apple Music]], but it does fortunately still work. It says if, if the player      |
| 01:29:59   | state is playing, then pause it. So make sure to pause music. It says the volume with the output         |
| 01:30:05   | muted. And then it actually turns off [[Amphetamine]]. That's the application I usually use to keep my       |
| 01:30:11   | Mac awake. And then it starts the screensaver. And then it closes the script. And then after             |
| 01:30:16   | that, it runs the system command to sleep. And I don't quite remember why I'm actually                   |
| 01:30:23   | starting the screensaver here. I think for a while I had sleep disabled, because I was using this        |
| 01:30:28   | at work. And I didn't want my Mac to be going to sleep every time I walked away, but I did want to       |
| 01:30:32   | lock it. And starting the screensaver, of course, both, you know, hides my desktop so people can         |
| 01:30:38   | snoop around and do stuff not that people ever did that at work. It was more at the point of we          |
| 01:30:42   | weren't supposed to just leave things open and unlocked. And then, of course, enabled the lock           |
| 01:30:46   | for me after five seconds, which is quite nice, because your screensaver preferences can lock            |
| 01:30:52   | after a delay. You can do that with [[Alfred]] as well, actually. But I like the fact that the               |
| 01:30:57   | screensaver was on so people would assume it was already locked. And then it would give me a couple      |
| 01:31:01   | of seconds to walk away. And voila, then it would actually be locked. And then if I realised, as I       |
| 01:31:06   | stood up, oh, no, actually, I just quickly need to hit send on this, then I could do that. And I         |
| 01:31:11   | wouldn't have to unlock all the time. There's just so many rows. I mean, there's conversion tools.       |
| 01:31:17   | There's, I mean, there's utilities. I mean, there's so much functionality you can add to your            |
| 01:31:22   | computer all under the command space button. Yeah. Yeah. And I love [[Alfred]]. And, Dave,                   |
| 01:31:30   | we've not even really got into the weeds of creating workflows and things like that. I mean,             |
| 01:31:35   | we've got a whole bunch of things here in our outline that we've not yet touched on.                     |
| 01:31:38   | We've been talking for quite a while already. Yeah. Let's take a minute to talk through the              |
| 01:31:42   | settings a little bit that we haven't kind of covered already. There's a couple things in                |
| 01:31:47   | here I think that would be fun to kind of just cover. The first is, and we kind of already did           |
| 01:31:53   | cover this, but when you set it up, you want to put spotlight under option space and then                |
| 01:32:00   | [[Alfred]] under command space. And the way to do that is first you move spotlight. It gets very             |
| 01:32:06   | confused if you move, if you try to move [[Alfred]] to the same key as spotlight. So first you move          |
| 01:32:11   | spotlight to option command in spotlight. So you open spotlight, hit command, comment, that app,         |
| 01:32:16   | change the trigger to option space, and then that frees up command space for [[Alfred]].                     |
| 01:32:23   | The couple other things in the general where you talked about, make sure you set your country.           |
| 01:32:31   | What about appearance? [[Alfred]] has a bunch of different themes. Do you have a...                          |
| 01:32:35   | So I mean, I'm using, I think it's [Alfred purple](https://www.alfredforum.com/topic/4028-minimal-purple-alfred-theme/) version two by @ianisted. And I don't remember         |
| 01:32:43   | now if this is a default one or if it's one that you need to install. But under [[Alfred\|Alfred's]] appearance,     |
| 01:32:51   | you can also control a whole bunch of other things as well. So if you go into the appearance one,        |
| 01:32:57   | it's the paint roller, then you can have a look through. There's a whole bunch of themes on              |
| 01:33:04   | various websites out there. And [[Alfred\|Alfred's]] natively got light themes and dark themes and                   |
| 01:33:09   | modern themes with more rounded corners, a classic one, which has a kind of                              |
| 01:33:15   | dark translucent gray chunky border around things, a macOS one, which is very Big Sur.                   |
| 01:33:23   | And of course, macOS dark. And once you've found your theme, then if you tap on or click on the          |
| 01:33:30   | options, you get some extra things as well. So you can hide the hat on the [[Alfred]] window.                |
| 01:33:36   | So when you press command space, I like looking at the hat. Okay, I like the little                      |
| 01:33:41   | bowler hat with the purple band and the magnifying glasses, kind of, you know,                           |
| 01:33:46   | show a lot of clumsy. And I like the fact that it's [[Alfred]]. But you can hide that if you don't           |
| 01:33:51   | like it, if you want things to be more minimal. You can also hide your result shortcuts. And the         |
| 01:33:58   | result shortcuts means the command and the number. So if I was talking about that earlier in your        |
| 01:34:03   | diagram, I don't see that you've probably hidden that with this option. And you can talk about           |
| 01:34:09   | that on and off per theme. Okay. So make sure that you change that. This is also where you               |
| 01:34:15   | hide or unhide the menu bar icon. I believe [[Alfred\|Alfred's]] menu bar icon is hidden by default.                 |
| 01:34:22   | And you can always, you know, get it back. I quite like having it. I've got it hidden in                 |
| 01:34:27   | bartender. But it's, you know, it's useful to have. And then under this, I mean,                         |
| 01:34:36   | there's a whole bunch of options in here, we can talk about this for hours, David.                       |
| 01:34:39   | There's a show result subtext. Okay, so the result subtext is, so for example,                           |
| 01:34:46   | I open [[Alfred]] command space, I type preview to find preview. Okay, by default, if I hit return,          |
| 01:34:52   | I open preview. If I press command, then with the subtext on, it shows me that I'm revealing that        |
| 01:35:00   | file in Finder. If I press option, I'm searching for what I've typed in spotlight. If I press control,   |
| 01:35:06   | I'm searching it with my default fallback. And I think there's, I think that that's it                   |
| 01:35:13   | as far as these actions go. But you can have this, the subtext shown all of the time,                    |
| 01:35:19   | only for alternative actions, and only for your selective results, or never. You can also choose         |
| 01:35:26   | what, how many items you want to show. So I'm showing nine items, you might only want to show            |
| 01:35:30   | three or five. I've recently been doing a lot of things with a lot of documents needing like 12          |
| 01:35:35   | documents at a time. So I've got it set to nine, just because it makes my life a bit easier.             |
| 01:35:40   | But yeah, you can show scroll indicators, automatically highlight the top results.                       |
| 01:35:46   | If it focuses as a standard mode or compatibility mode, that's explained right there. You can also       |
| 01:35:51   | choose to move [[Alfred]]. So if you always want it to appear over on the left of your screen,               |
| 01:35:56   | you can do that. And then you can just drag it, and [[Alfred]] will always appear on the left.               |
| 01:36:00   | I personally like it to appear fairly central, a little higher up, which is the default location.        |
| 01:36:07   | So, you know, I've dragged that on in this little preview. And you can also specify                      |
| 01:36:13   | which screen you want [[Alfred]] to display on. So if you've got six screens, okay, this is kind of          |
| 01:36:19   | crazy. But if you had six screens, you can say, Hey, can you show [[Alfred]] on whichever screen my          |
| 01:36:25   | mouse is on, please? Or whichever screen is currently active. So if I'm currently using an               |
| 01:36:30   | application on screen three, even if my mouse is on screen six, I want it to open on screen three.       |
| 01:36:36   | You can do that. And yeah, that's pretty useful if you're working multiple screens,                      |
| 01:36:40   | I recommend that. The active screen option messes with my head a little bit,                             |
| 01:36:46   | because I don't always remember where it is. But the mouse screen can be quite useful if you're          |
| 01:36:50   | specifically, you know, working over on your second screen for a minute or two. And then,                |
| 01:36:55   | you know, you move your mouse over there and you do [[Alfred]], and you don't want to have to                |
| 01:36:57   | move your head backwards all the time to your main screen, then that's great.                            |
| 01:37:01   | Yeah, I mean, the crazy thing is that these things are buried in these options. I mean,                  |
| 01:37:06   | it's very easy to miss them. I think, like, I, for instance, don't like the bowler hat,                  |
| 01:37:12   | you know, so I turn it off, but you got to like go to appearance and there's a little                    |
| 01:37:16   | options button in the bottom corner. I mean, it's like you, you wouldn't even know it's there.           |
| 01:37:20   | So, so be you have to spelunk a little bit through these, these options.                                 |
| 01:37:27   | But it's totally worth it. Let's talk for a minute about sync, because I think Rose mentioned            |
| 01:37:34   | earlier that you can turn sync on and, you know, customising [[Alfred]], if you get into this is             |
| 01:37:41   | something you're going to do. You're going to be fiddling with the options, getting the right            |
| 01:37:44   | themes, getting the right workflows installed. And then if for some reason, you know, your               |
| 01:37:49   | computer falls into a lake and you got to get new computer, rebuilding all that is going to be a         |
| 01:37:53   | massive pain in the neck. And with [[Alfred]] sync, they sync everything. I mean, so it's a great            |
| 01:38:00   | option, even if you just have one computer. Yeah. Yeah. So the way the sync works, under the,            |
| 01:38:08   | I want to say the advanced option, I was right, David, it's the advanced option. I'm winning here        |
| 01:38:12   | today. Under the advanced option in [[Alfred]] preferences, over bottom right hand side,                     |
| 01:38:18   | there is a syncing option. And you can set your preferences folder. Now, theoretically,                  |
| 01:38:23   | you can sync using any cloud service you like, but they do recommend [[Dropbox]]. I personally have          |
| 01:38:29   | always used [[Dropbox]] for the sync. I mean, I have two terabytes of [[Dropbox]] space, which I'm not using.    |
| 01:38:34   | So I try and shove as many things in there as possible. [[Alfred]] takes up practically no space             |
| 01:38:39   | at all because it's all text preferences. So I've set my preferences folder. And so it's syncing.        |
| 01:38:45   | In my case, it's inside of [[Dropbox]], application syncing [[Alfred]]. I think I created application            |
| 01:38:51   | syncing long ago for syncing a variety of applications, but that's where it is. And you                  |
| 01:38:56   | can also reveal that folder. This is also very useful when you're setting up a new Mac because,          |
| 01:39:02   | you know, I've got a shiny purple and one iMac coming, David, it's going to be great for podcasting      |
| 01:39:07   | because it's practically inaudible to the human ear. Seven decibels, that thing, runs out.               |
| 01:39:11   | That's what they say. Well, I think you're right there. Yeah, Daring Fireball's got the scoop there.     |
| 01:39:16   | So I'm looking forward to that. The Intel Mac Mini can get a little loud sometimes with                  |
| 01:39:21   | those fans spinning. So, you know, when I set up [[Alfred]] on that machine, which is going to be one        |
| 01:39:26   | of the first apps that I set up, then I'm just going to be able to pull in those preferences             |
| 01:39:30   | and just go yank. Thank you very much. I will take everything from [[Dropbox]].                              |
| 01:39:34   | And that nice purple theme you have is going to fit right in.                                            |
| 01:39:38   | Yep, exactly. Also, in the advanced section, you can set what control return, option return,             |
| 01:39:45   | and command return do. So the options for these are searching with your default web search,              |
| 01:39:50   | searching a finder, revealing a finder, actioning your visible results, and showing your results         |
| 01:39:58   | subtext. And this means, say, for example, I have the action visible results enabled,                    |
| 01:40:06   | and I type, I don't know, preview. And then I set this one to command return, then it shows me,          |
| 01:40:13   | you know, the various options. And now it's doing some crazy things because I accidentally               |
| 01:40:18   | selected marked instead of preview because marked previews, markdown files, which is why it shows        |
| 01:40:22   | up there. Yeah, you know, there's just so much you can do with [[Alfred]]. I was just looking at the         |
| 01:40:29   | themes list a minute ago. Did you ever use [[Quicksilver]]? Was that before your time? No.                   |
| 01:40:37   | So [[Quicksilver]], I think, was going out of favor, hadn't been updated for a while,                        |
| 01:40:42   | just as I was really starting to get nerdy with my Mac for a long time. I kept my Mac fairly,            |
| 01:40:47   | fairly stock. I had one of those amazing original MacBook Airs with the drop down door                   |
| 01:40:53   | for the ports, David. I love that thing. And yeah, and so for a while, I was just kind of excited        |
| 01:41:01   | about pages and numbers, to be honest. Is it weird that I was excited by a spreadsheet application       |
| 01:41:05   | because numbers is fun. Okay, start somewhere. I feel like [[Quicksilver]] had this great interface          |
| 01:41:11   | called the cube where it would open up. And as you work through the basic, the formula of whatever       |
| 01:41:18   | you're doing, it would spin the cube. I thought that was a great, I guess that's really not possible     |
| 01:41:22   | with [[Alfred]]. I'm going to write those guys. Man, I would love to see them figure out a way to do that.   |
| 01:41:27   | Have you checked on Packal? There might be a [[Quicksilver]] theme.                                            |
| 01:41:31   | Yeah, I'll have to look. I'll have to look. But I'm not even sure, even if they had a [[Quicksilver]],       |
| 01:41:36   | look at the cube, it's an animation built into. I'm not sure it would work. But either way, I            |
| 01:41:43   | guess the point being that the reason we give [[Alfred]] a whole show is because it needs a whole            |
| 01:41:48   | show. There's just so much to talk about here. We didn't get into today, multiple files, like where      |
| 01:41:54   | you can select multiple files and act on them. I think we're going to save that. I really wanted         |
| 01:41:58   | to get to that. Well, you want to talk about it for a minute. Let's just take a minute and talk          |
| 01:42:01   | about why not. I mean, one of the things you can do with [[Alfred]] is you can do file actions.              |
| 01:42:07   | But you don't necessarily just want to act on one file. Say, for example, you want to open               |
| 01:42:13   | multiple files. Instead of typing command space, open, searching for your file and pressing return.      |
| 01:42:18   | If you use the open command, by the way, then it's always going to open whatever it is that you've       |
| 01:42:23   | got after that rather than revealing and finding or whatever your default preferences are.               |
| 01:42:28   | But if you use, and I'm just going to have to check this now because it's the option up                  |
| 01:42:36   | arrow. So you press option up arrow, and it starts adding things above your current search.              |
| 01:42:47   | That means I can search for multiple things. Now, pressing option back                                   |
| 01:42:51   | arrow removes all of those. So like me, you usually use option backspace to backspace a word.            |
| 01:42:59   | Possibly unlearn that exclusively for [[Alfred]] if you're going to use this feature.                        |
| 01:43:04   | Then it will let you do this. And then you can do whatever your file action is.                          |
| 01:43:15   | I know some people, at one point, I used to have to print like 10 documents a week at work,              |
| 01:43:19   | and I had to print them all at the same time. So I would just find them with [[Alfred]] and I had a          |
| 01:43:22   | special thing, an automated workflow to print things. So I would just find them all and then             |
| 01:43:28   | press type print and print everything. It's a bit out on a food copier and staple it together for me.    |
| 01:43:33   | It was great. It's a great way to move things off your desktop. I mean, there's like a whole lot         |
| 01:43:37   | you can do with that. Yeah. It's great. So I've actually got a link in the show notes for people         |
| 01:43:43   | if they want to have a look at how they can get nerdy with files. It is something                        |
| 01:43:49   | that I think is perhaps better explained with screenshots as well. So yeah, enjoy diving into            |
| 01:43:55   | that, I would say. Yeah. Well, there's a lot to it. Let us know in the forums what you're doing          |
| 01:44:01   | with [[Alfred]], what's interesting and fun. This is very much an automation tool, as you've heard           |
| 01:44:07   | us talking about today. I know that without it, I would be a lot slower on my Mac.                       |
| 01:44:12   | Yeah, same, same. And it's amazing how many things integrate with [[Alfred]],                                |
| 01:44:16   | because essentially it's just searching your entire Mac for everything. It uses [[Spotlight]] as the         |
| 01:44:22   | back end. It integrates with 1Password. So you can actually search 1Password for a website and       |
| 01:44:26   | open it and fill it through [[Alfred]], because you've found it with 1Password. And so 1Password         |
| 01:44:31   | then tells your browser to open it and fills it in. We didn't even get to cover that. So yeah,           |
| 01:44:37   | there's plenty that you can get started with. Now, before we finish for today, I want to tell you        |
| 01:44:43   | about another podcast here on the Relay FM network. It's Make Do. If you like this show,                 |
| 01:44:48   | then there's a good chance you'll like Make Do. You don't have to monetise your hobbies,                 |
| 01:44:52   | but if you do want to, the Make Do podcast is ready to be your personal cheerleader.                     |
| 01:44:58   | Host Tiff Arment is a glass artist, painter, and photographer with a not-so-secret past                   |
| 01:45:03   | in Broadway costuming. And also hosting is Julia Scott, a journalist, potter, and self-proclaimed        |
| 01:45:09   | textile goblin. I really love both of these hosts. And honestly, whenever I'm listening                  |
| 01:45:15   | to the show, it feels like I'm sitting down for a natter with some friends. It's incredibly friendly     |
| 01:45:20   | and definitely cheerleading. Some recent great episodes include The Myth of the Tragic Artist and        |
| 01:45:27   | Don't Tell Me How to Hobby. Or do yourself a favor and just start from the beginning                     |
| 01:45:31   | and listen to the whole crafty artistic journey. Listen as you hobby. Go to relay.fm.com or search       |
| 01:45:38   | for Make Do wherever you get your podcasts. If you're looking to find out more about us,                 |
| 01:45:43   | then you can find us at relay.fm/automators, or our forums can be found at                         |
| 01:45:49   | talk.automators.fm. We'll be back in two weeks.                                                          |
