---
status: "incomplete"
fc-date:
  year: 2020
  month: 06
  day: 05
fc-category: "podcast"
podcast: "Automators"
published: 2020-06-05
duration: 3754
formattedduration: "01:02:34"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Ken Case"]
notetype: "episode"
showpage: "http://relay.fm/automators/51"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators051.mp3"
episode: 51
title: "51: Ken Case and Omni Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode Ken Case, CEO of the Omni Group joins us to talk about adding automation in the form of Shortcuts and JavaScript scripting to the Omni Group apps, as well as his first, and favourite automations.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Ken Case]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 051 Discussion](https://talk.automators.fm/t/automators-51-ken-case-and-omni-automation/7424)

# Sponsors
- [[Pingdom (Sponsor)|Pingdom]] - Start monitoring your website performance and availability today, and get instant alerts when an outage occurs or a site transaction fails. 
- [[Ahrefs (Sponsor)|Ahrefs]] - SEO tools and resources to grow your search traffic.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [Omni Group](https://www.omnigroup.com/)
- [OmniFocus 3.8 Launches with Support for Omni Automation - The Omni Group](https://www.omnigroup.com/blog/omnifocus-3.8-launches-with-support-for-omni-automation)
- [OmniFocus 3.7 for iPhone and iPad Includes New Shortcuts - The Omni Group](https://www.omnigroup.com/blog/omnifocus-3.7-for-iphone-and-ipad-includes-new-shortcuts)
- [Editorial for iOS](http://omz-software.com/editorial/)
- [x-callback-url](http://x-callback-url.com/) - Unfortunately, this website is quite outdated, but it tells you about x-callback-urls as a concept.
- [OmniFocus 3.6 Introduces Support for Floating Time Zones - Learn OmniFocus](https://learnomnifocus.com/omnifocus-introduces-support-for-floating-time-zones/)
- [Automators #47: The Daily Brief - Relay FM](https://www.relay.fm/automators/47)
- [Charty - Create charts from Shortcuts](https://chartyios.app/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [Omni Automation](https://omni-automation.com/) - The help site for learning Omni Automation, JavaScript support for Omni Group applications.
- [Omni Automation Plug-Ins for OmniFocus](https://omni-automation.com/omnifocus/actions.html)
- [Join our Slack Workspace - The Omni Group](https://www.omnigroup.com/slack/)
- [Ken Case (@kcase) / Twitter](https://twitter.com/kcase)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators. I'm David Sparks and joined by my fellow co-host, Rosemary Orchard.               |
| 00:06      | Hi, Rose.                                                                                                |
| 00:07      | Hey, David. How are you today?                                                                           |
| 00:09      | I'm doing great, and I'm super happy today because we have a guest on the show. Welcome                  |
| 00:14      | to the show, Ken Case.                                                                                   |
| 00:16      | Hi. Thank you. Nice to be here.                                                                          |
| 00:18      | Ken, it's great having you on. Ken is one of the head honchos over at the Omni Group,                    |
| 00:24      | and Ken is a developer, but also an automation nerd, and Ken and Rose and I have had many                |
| 00:31      | conversations between us over the years about automation and how to make all those great                 |
| 00:37      | Omni apps become more automation friendly, and they've recently made some big strides.                   |
| 00:42      | So we want to talk about getting automation into the Omni Group apps, but we also want                   |
| 00:46      | to hear Ken's automation story and get some great automations out of Ken today. So thanks                |
| 00:51      | for being willing to come on and share all this, Ken.                                                    |
| 00:54      | Oh, you bet. Again, I appreciate your invite being me to be here, and I look forward to                  |
| 01:00      | talking some automation stuff with you.                                                                  |
| 01:01      | Well, I mean, I feel like, and I've probably said this on Mac Power Users and this show many                 |
| 01:06      | times, but one of my key automations is all that great scripting you did for OmniFocus                   |
| 01:12      | years ago, the template scripting. For the longest time, there were these kind of systems                |
| 01:18      | to do automated templating with OmniFocus, but none of them were really that solid, you                  |
| 01:23      | know, they were all kind of things bandaged together. And then I think you did it over                   |
| 01:28      | a weekend or something. I forget the kind of the lore behind it, but like you put together               |
| 01:32      | this, this automation for templating new projects and OmniFocus. And it's amazing because it             |
| 01:40      | just uses Taskpaper formatting. I did like a big section of the OmniFocus field guide                   |
| 01:46      | is dedicated this because I think I create more tasks in OmniFocus using your automation                 |
| 01:52      | than I do actually physically typing them in.                                                            |
| 01:54      | Well, I'm glad that that has made a difference for you. I know that I was seeing a number                |
| 02:00      | of customers trying to find ways of getting their templates organised and having it work                 |
| 02:06      | efficiently. And I was trying to help them make it work the way it was working. And so                   |
| 02:10      | I first came up with a simple automation that would do this sort of URL-based, maybe I should            |
| 02:16      | back up, OmniFocus has always had this URL-based automation stuff built into it on the iPhone            |
| 02:21      | because we wanted some way to capture from [[Safari]] and there weren't system APIs for apps                 |
| 02:25      | talking to each other. So we came up with this URL thing where we thought, well, at                      |
| 02:30      | least let you take the current web page and add it to a task so you could send a note                    |
| 02:34      | and a name and it would get captured in OmniFocus. So people started using that as a mechanism           |
| 02:40      | to automate things and they wanted it to come back and build a whole project of stuff. And               |
| 02:46      | I realised as I helped them kind of get that working that this back and forth from one                   |
| 02:50      | app to the other for every single task you were adding, if you had a 30-task project                     |
| 02:56      | or a 60-task project, you might be sitting there a few minutes just watching what back                   |
| 03:00      | and forth between the apps. And so that was when I decided, well, maybe there's an easier                |
| 03:05      | way we could go forward. Let's build some Taskpaper support into OmniFocus Automation                   |
| 03:11      | and then you can do it with one roundtrip and it's much, much faster.                                    |
| 03:14      | Well, one of the things I love about you, Ken, is that you run the company, but you                      |
| 03:19      | also are, you love to get into the code. I know that being on the betas for some of                      |
| 03:25      | the apps that you've worked on over the years, I would get these builds from you at like                 |
| 03:29      | one in the morning. And I'm like, this guy is like, you're still 100% in on making                       |
| 03:35      | your apps better in addition to just trying to hold that big company together.                           |
| 03:39      | Well, it's a lot of fun. I think really just working with the code and with computers                    |
| 03:44      | and now, you know, the ways computers can help you do new things. For me, the line between               |
| 03:51      | developing an app and building automations is a very blurry line because I'm a developer.                |
| 03:58      | So I might start out with something really simple and then, you know, like this URL thing                |
| 04:03      | and then think, well, but we could do a little bit of code in the native app that would make             |
| 04:07      | it easier on that end and then we can have them talk to each other. And suddenly it becomes              |
| 04:12      | a little bit more advanced and flexible.                                                                 |
| 04:14      | Yeah. And that's the great thing about Taskpaper, especially for me, you know, it started               |
| 04:19      | with, you know, the fact that, hey, I can write like a whole list of tasks here, like                    |
| 04:23      | 10, 15 tasks. And, you know, say, for example, an episode of automations preparing for that              |
| 04:28      | doing the recording after the recording, that all takes like a certain amount of work and                |
| 04:32      | a certain number of tasks, but the tasks, regardless of the show, tend to have the same                  |
| 04:37      | sort of framework. Now I may go in and add a few extra tasks for an episode, you know,                   |
| 04:41      | like research, everything that Ken Case has ever done, which turns out is a very long                    |
| 04:45      | list of things. But, you know, I can go in and do that. But I love the fact that I can                   |
| 04:52      | go into OmniFocus and you've made it really easy for people to automate with the task                    |
| 04:57      | paper because you can create an actual project inside of OmniFocus. And then you can copy                |
| 05:01      | that as Taskpaper. And I feel like that is the sort of automation that people who are                   |
| 05:07      | maybe nervous about automating task management, because, you know, your task management system           |
| 05:11      | for many people is your life. And, you know, if you're nervous about automating, you can                 |
| 05:15      | start by copying the Taskpaper, and then you can paste it into [[Drafts]] or shortcuts                      |
| 05:20      | and just add it back. And that that's a very simple way to get started without putting                   |
| 05:27      | a lot of work on the user. So I would say that's that's been really useful for me there                  |
| 05:32      | over the years.                                                                                          |
| 05:33      | This is a great entry point. If you're doing task management in OmniFocus, if you've got                 |
| 05:38      | any kind of work or family-related project that you do repetitively, repetitively, sorry,                |
| 05:44      | guys, I seem to have trouble with English language today, but you can just build a little script         |
| 05:50      | to template it. And then you can run that as a shortcut. I've got probably got like 30                   |
| 05:55      | or 40 different shortcuts that create projects in OmniFocus between the law practice and                 |
| 06:00      | MacSparky and different things I do.                                                                    |
| 06:02      | Mm-hmm. Same, same, yeah. And I still have some stuff actually in editorial.                             |
| 06:07      | Copy and paste is sort of an entry point to automation, I think, if apps support copy                    |
| 06:12      | and paste in the first place, which, you know, we used to just kind of assume that that                  |
| 06:17      | was a built-in part of the Mac experience, that if you wanted a good Mac app, you should                 |
| 06:20      | be able to select things and copy them and paste them and duplicate them and undo and                    |
| 06:25      | redo and so on. That's not quite as easy to assume these days as it used to be. But yeah,                |
| 06:33      | the easiest way to start out with some sort of automation is to build the thing you want                 |
| 06:40      | and then just say, I want to copy this and then paste it and then make your edits. And                   |
| 06:45      | if you're able to paste it into like a plain text file, which is what we did with this                   |
| 06:49      | Taskpaper exchange format, then you can copy and paste it into editorial or whatever your               |
| 06:55      | favourite text editor is, run a script on it that changes, you know, the template keywords                |
| 06:59      | around and then copy it back into OmniFocus to now have your new project. And so that's                  |
| 07:06      | effectively what that automation started out as and then does.                                           |
| 07:11      | And I was going to say, and since then, of course, we've got shortcuts, you know, because                |
| 07:15      | I think when you first started this, it was all in editorial with Python on iOS at any                   |
| 07:20      | rate. I distinctly remember that because that forced me to purchase editorial, which was                 |
| 07:24      | not a bad decision. It was a great app. And it's still, they've recently updated it. It's                |
| 07:28      | great app again. But you know, actually being able to say like paste this into shortcuts                 |
| 07:33      | and put actual variables into the text so that then, you know, when you run it, shortcuts                |
| 07:38      | could ask you for three or four different things. And then it puts those in as variables.                |
| 07:43      | And then magically, you have this whole project in OmniFocus, which, you know, from your side            |
| 07:47      | of things over at Omni Group must have taken a bit longer to set up than it now takes me                  |
| 07:51      | to do. But it's certainly an easy way to modify my work and get all of that stuff in there.              |
| 07:58      | Yeah, I really love, well, I love what [[Apple|Apple's]] done with shortcuts since, since acquiring                |
| 08:03      | the workflow team and the direction they seem to be taking it just, it just keeps better                 |
| 08:08      | and better.                                                                                              |
| 08:09      | And, you know, as an enthusiast for all this stuff, I just wanted, I don't, I've never                   |
| 08:13      | told you this, but I just wanted to thank you for being there early with automation,                     |
| 08:18      | particularly with OmniFocus because I use that app so much. But just like using the                      |
| 08:23      | URL stuff, I mean, it was the developers like you at the beginning who were finding ways                 |
| 08:29      | to shoehorn in automation that I think really led to [[Apple]] paying attention to something                 |
| 08:33      | like workflow. And I'm not sure that we would be where we are if, if you guys hadn't started             |
| 08:39      | the ball rolling.                                                                                        |
| 08:40      | Oh, well, thank you. It was, you know, an important, as I mentioned, it was important                    |
| 08:45      | to us to be able to start talking with at least one other app, [[Safari]], in that case.                     |
| 08:50      | But then once there was a way to, once we had figured out a way to talk between apps                     |
| 08:53      | and having these URLs, it became natural that it got more and more advanced. And then, of                |
| 08:59      | course, the, I'm actually wearing my ex-callback URL t-shirt right now that got built and extended       |
| 09:09      | and that really helped the ecosystem take off, I think, with different apps being able                   |
| 09:13      | to talk to each other and then get results back, which of course is then what led to                     |
| 09:19      | things like Launch Center Pro and the workflow team then building this, their app, which                 |
| 09:26      | [[Apple]] acquired and turned it into shortcuts. So yeah, I love that history.                               |
| 09:29      | And that leads us to today where you guys have, Omni Group, guys and gals have done a tremendous          |
| 09:35      | amount of work on building out automation on iOS. That, you know, the iPhone and iPad                    |
| 09:42      | have always a bit had one hand tied behind their back for automation. They don't have                    |
| 09:46      | Apple events. And, you know, you just don't have that scripting environment that we have                 |
| 09:52      | on the Mac. I mean, that you can do virtually anything with a Mac and automation, whereas                |
| 09:57      | the sandbox and the security measures, and frankly, just the lack of things like Apple                   |
| 10:02      | events on iPhone and iPad make it much harder to implement this stuff. But you guys have                 |
| 10:07      | done a couple of things. I want to talk about both of them today. Number one, you've greatly             |
| 10:11      | increased the support for OmniFocus in shortcuts, but you've also come up with a basically a             |
| 10:19      | [[JavaScript]] implementation to create a form of automation that can be done both on iPad,                  |
| 10:25      | iPhone and Mac with the same scripting language. And both of those are very exciting developments.       |
| 10:30      | Thank you. Yeah, the first one, shortcuts, I think is important because it lets us play                  |
| 10:38      | in that ecosystem that all the other apps are working in. And it's sort of the outside                   |
| 10:42      | interface to the application. How do I want to get something done? So we added shortcuts.                |
| 10:46      | You know, we'd always had, I shouldn't say always, but before [[Apple]] acquired workflow,                   |
| 10:50      | we had already had shortcuts in place for adding one item at a time or adding a task                     |
| 10:55      | paper collection of items at once. And when [[Apple]] announced, you know, last of the DC                    |
| 11:02      | almost a year ago now, that shortcuts would be getting that you could build your own shortcut            |
| 11:10      | extensions that provided their own actions. That was really exciting because that meant                  |
| 11:13      | we could start thinking about extra logic we could put in there to interact with shortcuts.              |
| 11:19      | So we started adding things like finding items, finding projects, tags. And then, of course,             |
| 11:26      | you want to be able to show those results in OmniFocus. And we also, in the most recent                  |
| 11:30      | release, even asked one for, built one for getting items for today from your OmniFocus                   |
| 11:35      | forecast, including tagged different items, if that's what you have in your view options.                |
| 11:40      | So that it's really easy to build a shortcut that just goes out, reaches out to OmniFocus                |
| 11:45      | and says, what's on my OmniFocus forecast for today and displays those results or reads                  |
| 11:50      | those out loud to you or sends email with them or, you know, whatever you want to do                     |
| 11:53      | because it's automation.                                                                                 |
| 11:55      | Yeah. And so historically, when it was workflow, you guys, the developer, you guys being the             |
| 12:01      | developers, you didn't have the ability to write those extensions for workflow. They                     |
| 12:04      | actually wrote those at workflow. And I believe [[Apple]] kind of inherited those when they purchased        |
| 12:10      | workflow.                                                                                                |
| 12:11      | Yes, that's right.                                                                                       |
| 12:12      | But like you said, in June of 2019, [[Apple]] announced that now developers can make their                   |
| 12:19      | own extensions. And you see that, you know, if you're listening to automators and you                    |
| 12:23      | have shortcuts, go in and look at that list of apps in there. And your favourite apps are                 |
| 12:28      | hopefully going to have lots of these shortcuts where the developers have implemented them.              |
| 12:33      | How difficult is it as a developer to plug into shortcuts and make these additions?                      |
| 12:38      | I think the shortcut side of it is about as easy as [[Apple]] could make it, given the problem               |
| 12:44      | that they're trying to do. So it's not too hard to add that integration. The tricky part                 |
| 12:49      | is designing your application so that the information can get shared between your app                    |
| 12:55      | and the shortcut in an efficient way. So it was really easy to do those first shortcut                   |
| 12:59      | integrations that [[Apple]] had already built because all of the communication was one way.                  |
| 13:05      | They were saying, I just want to add an item or I want to add a Taskpaper. And it didn't                |
| 13:08      | matter what was already in your database. You weren't trying to get anything back out.                   |
| 13:12      | You weren't actually trying to share information. You were just trying to send information.              |
| 13:17      | But with these newer shortcuts and find items and so on, the current forecast, we had to                 |
| 13:24      | find some way to let you get at all of your data from OmniFocus, which meant making it                   |
| 13:28      | available to each of the shortcut extensions. And having the biggest limitation there is                 |
| 13:38      | that shortcuts extensions have to live within a limited amount of space because they can                 |
| 13:43      | be running while you're doing some other app. You're not allowed to take over the whole                  |
| 13:47      | system like you are when you're inside your own app. So if you have an app that is used                  |
| 13:53      | to just sort of filling all of its memory with the user's data, and now you're trying                    |
| 13:58      | to go into a shortcut and do the same thing, that's not going to work at all. You're going               |
| 14:00      | to run out of memory.                                                                                    |
| 14:01      | Yeah. That was going to say the size of the database. I mean, I know my database, I feel                 |
| 14:05      | like it's large because I've got a couple of thousand actions in there, a couple of                      |
| 14:08      | hundred projects. I know that for some users, that's like a baby database. So I'm guessing               |
| 14:13      | that that posed problems as well because somebody who's got five projects and 20 actions, they're        |
| 14:17      | probably going, yeah, let's load that into the memory, but bigger ones.                                  |
| 14:22      | Yeah. And it turns out that the people who have thousands of projects and tens of thousands              |
| 14:26      | of actions, there are some of the ones that really want automation to work through that                  |
| 14:30      | set of things.                                                                                           |
| 14:31      | Really? I had no idea.                                                                                   |
| 14:34      | What we ended up building was a setup where all of the database now is stored on disk.                   |
| 14:41      | It's not, you know, we try to avoid reading into memory as much as possible, and we just                 |
| 14:45      | operate on the SQLite database that is now shared between the extension and the app.                     |
| 14:51      | And so whenever the app is running, it will update the database. Whenever the extension                  |
| 14:55      | runs, it doesn't directly update it. It just use up, you know, here's some changes that                  |
| 15:01      | I want to make the next time the app runs.                                                               |
| 15:02      | But I can imagine that's quite useful because then if I run something in shortcuts, say,                 |
| 15:08      | for example, I add a project and then I want to find all the projects with cat. And so                   |
| 15:12      | say I add a project with an automation to adopt a cat, and then I want to find all the projects          |
| 15:18      | tagged with cat. Then I presume that that now works because of the way that you've shared                |
| 15:23      | all of this data back to shortcuts.                                                                      |
| 15:25      | Yeah, yeah, it is much, much more robust than it used to be. It also helped all of our extensions,       |
| 15:30      | not just the shortcuts interfaces like the spotlight integration that we have is now                     |
| 15:35      | able to search everything in your database because of getting the same SQLite database                   |
| 15:39      | directly rather than having to go, like, previously we had to pick choose what are we going to           |
| 15:46      | provide because we know there's a limited amount of RAM available.                                       |
| 15:49      | Or a limited amount of space we didn't want to keep making copies of things. Now we're                   |
| 15:54      | not making extra copies, we're just giving it direct access to the same data store.                      |
| 15:59      | And that explains why you've had the database transition over the last, I believe, year                  |
| 16:02      | or so in the application. Users may have got that dialog box asking them to update everything.           |
| 16:08      | Well, it could explain that, except that's actually a slightly different problem. That                   |
| 16:13      | one is that we added some more fields to the database over the last year or two where we've              |
| 16:18      | added support for floating time zones. And if you're using an older version of OmniFocus,                |
| 16:24      | they won't know what that means.                                                                         |
| 16:28      | So the newer OmniFocus and older OmniFocus can talk to each other if you're talking                      |
| 16:34      | through an older database format. And some people are stuck that way because they're                     |
| 16:38      | using older Macs or iPhones or whatever that they can't upgrade to the latest op. So they                |
| 16:43      | have to run an older version of OmniFocus. But if you're using the latest one, obviously,                |
| 16:49      | you're going to win these new capabilities. And that's what those extra dialogs end up.                  |
| 16:53      | We try not to bug you about the behind the scenes details of us moving stuff around so                   |
| 16:57      | that extensions can see them.                                                                            |
| 16:58      | Actually, it seems like a long time since I was showing you my [Kinkless GTD OmniOutliner](https://web.archive.org/web/20070608041258/http://kinkless.com/kgtd)                  |
| 17:03      | at Macworld.                                                                                             |
| 17:04      | Yeah. Well, that was a good automation experience, too, really.                                          |
| 17:09      | Yeah. Well, great job on getting so much support for shortcuts out. And I just wish any developers       |
| 17:16      | are listening. I hope that they follow the lead here because I just think it's so important.             |
| 17:21      | This is the easiest kind of automation you can do. We talk about shortcuts on the show                   |
| 17:25      | all the time. But if you're an OmniFocus user, go in and open up a bunch of these new actions            |
| 17:31      | that are available to you. The forecast one in particular, I think, is kind of useful.                   |
| 17:36      | Rose and I did a show last month, I believe, on our daily brief shortcuts. And the forecast              |
| 17:42      | here is a great addition for that. I have it actually pulling an OmniFocus for certain                   |
| 17:47      | projects, but I think the forecast may be a better replacement for that. So it's just                    |
| 17:53      | it's really nice to see you guys going that extra mile to get all that support in there.                 |
| 17:58      | Well, thank you. And yeah, the more more people support it with additional apps, I think it's            |
| 18:05      | sort of a rising tide, you know, with all the boats, it's going to means that all of                     |
| 18:13      | these apps can now work with each other and have extra capabilities that they didn't have.               |
| 18:16      | So it's neat to have this stuff that you can do directly with OmniFocus from shortcuts.                  |
| 18:20      | But then it's even more interesting when, oh, like the, what was it last in the last                     |
| 18:25      | couple of weeks, somebody released the shortcuts thing for doing graphs. And so then they had            |
| 18:31      | some workflows for taking, looking at your database and items interface, looking at,                     |
| 18:38      | you know, what you completed in a range of time and graphing that. And I think that just                 |
| 18:43      | suddenly makes it, you know, that much more useful for our app and for their app.                        |
| 18:47      | Yeah, that's Charty. And we're going to, we're going to be covering that one in future                   |
| 18:50      | episode where I already working on that game. But it's like, it's a chart plugin, basically,             |
| 18:54      | for shortcuts.                                                                                           |
| 18:55      | I'm really tempted to make a shortcut now that pulls like say the last month of data                     |
| 19:00      | and finds like all the tasks completed and all the tasks added and then charts the number                |
| 19:04      | of tasks added versus number of tasks completed on each day. Because I'm willing to bet the              |
| 19:08      | days where I complete the most tasks are also the days where I add more tasks than I've                  |
| 19:11      | completed, which might explain the number of things inside of my OmniFocus. But it's                     |
| 19:17      | great that we have access to this data.                                                                  |
| 19:19      | I keep teasing Ken that I want him to add a feature that if I defer a task five times                    |
| 19:23      | that it automatically deletes the task. But he hasn't taken me upon it yet.                              |
| 19:30      | Well, I'm sure you could do that with a script if you use a script to defer it, which is                 |
| 19:33      | something that we'll have to circle back to later.                                                       |
| 19:36      | For my own protection, I feel like if I deferred five times, I'm probably never going to do              |
| 19:40      | it.                                                                                                      |
| 19:42      | This episode of Automated is brought to you by ExpressVPN. ExpressVPN is the software                    |
| 19:48      | I and many others use every day to protect our data online because hacking methods are                   |
| 19:52      | more sophisticated than ever.                                                                            |
| 19:55      | Many of you might be working from home right now without your IT department to protect                   |
| 19:59      | you from online threats, and that's why I recommend using ExpressVPN. I've been using                    |
| 20:03      | ExpressVPN for months now. I really like the fact that it's easy to turn on and off and                  |
| 20:08      | I can even pick which country I need to be in, allowing me to access those other services                |
| 20:13      | that sometimes lock you out unnecessarily.                                                               |
| 20:17      | All you need to know about ExpressVPN now is that you could be leaving the door open                     |
| 20:20      | to hackers, and one of the easiest ways to secure your internet data is with ExpressVPN.                 |
| 20:26      | So why haven't you got it yet? Go to this link right now, expressvpn.com/automators,               |
| 20:32      | and get an extra three months free. Protect your internet stay with the VPN that'll keep                 |
| 20:37      | your data safe. That's expressvpn.com/automators. Our thanks to ExpressVPN for their               |
| 20:43      | support of automators and all of Relay FM.                                                               |
| 20:47      | So Ken, in addition to the work you've done with shortcuts, you've also got this [[JavaScript]]              |
| 20:55      | implementation. Can you just kind of give me the 20,000 foot view of that to begin?                      |
| 21:00      | Sure. So Omni-automation is multi-platform automation for our Mac, iPad, and iPhone apps.                |
| 21:07      | And with it, you can run pre-built plugins and scripts, or you can write your own in                     |
| 21:12      | [[JavaScript]]. But all of those things are sort of predefined, and they involve some sort                   |
| 21:18      | of round trip between what's happening in shortcuts and what's happening in OmniFocus.                   |
| 21:23      | Similarly, [[AppleScript]] on the Mac has been kind of this API that you could use to talk                   |
| 21:30      | with OmniFocus. API is just an application programming interface that you could use to                   |
| 21:35      | talk to OmniFocus using the [[AppleScript]] language. But every time you went from your script to            |
| 21:41      | the app and back, this involved a round trip of switching from one process to another,                   |
| 21:44      | and it was relatively inefficient and slow.                                                              |
| 21:48      | So as we were thinking about automation, we were thinking about, well, how can we let                    |
| 21:54      | people build sort of a richer set of operations they can do that is really fast and can operate          |
| 22:01      | at the low levels of the database on everything that's available in that database instead                |
| 22:06      | of just being limited to the set of public interface things that we happen to provide                    |
| 22:13      | to shortcuts or to [[AppleScript]].                                                                          |
| 22:16      | And so that's what we've built in in our [[JavaScript]] support, which is now in all four                    |
| 22:21      | of our apps. It started in [[OmniGraffle]] and OmniOutliner, and then we shipped it in OmniPlan              |
| 22:28      | last year, I believe, and now with OmniFocus 3.8, it's finally in all of our apps. This                  |
| 22:34      | lets people create a [[JavaScript]] plug-in or write some external [[JavaScript]] that they pass                 |
| 22:41      | to the app, which can then quickly manipulate anything that's in the database or in a document,          |
| 22:48      | get results, process things around, change them around, and it's just so much faster                     |
| 22:52      | than earlier things based around [[AppleScript]] or than any shortcut interactions would be.                 |
| 22:58      | So then it, of course, can return results back to shortcuts or to [[AppleScript]] if that's                  |
| 23:05      | where it was invoked from, but it was collecting that information in a way that lets it do               |
| 23:12      | more things and also makes it much faster.                                                               |
| 23:17      | So as an example, if we had had this [[JavaScript]] stuff available back when Kinklesst GTD was               |
| 23:24      | written, I have to think that Ethan would have written Kinklesst GTD as a [[JavaScript]]                      |
| 23:28      | plug-in instead, and it would have been lightning fast to do some of those operations instead            |
| 23:34      | of feeling like this slow slog as you waited for these things to get encoded into Apple                  |
| 23:40      | events and back.                                                                                         |
| 23:42      | Yeah, it's really impressive. For a couple of reasons to me, one of them is [[AppleScript]]                  |
| 23:47      | has never existed on an iPhone and iPad, so [[AppleScript]] automation you'd write for the                   |
| 23:52      | app on the Mac wouldn't work on the other devices, and then you had this unequal world                   |
| 23:58      | where you couldn't do all of your work on whichever device you wanted, and [[JavaScript]]                    |
| 24:04      | will work on all platforms. And for people listening who've never done [[JavaScript]], I                     |
| 24:11      | can tell you I'm more savvy with [[AppleScript]] than I am with [[JavaScript]], but I've taken                   |
| 24:18      | the course. I can hack my way through [[JavaScript]]. This is not something you need to be a Kink            |
| 24:24      | case-level programmer to do. It's fairly simple once you wrap your arms around it and give               |
| 24:31      | it an hour or two to learn it, and you'd be surprised how much you can do.                               |
| 24:34      | Yeah, there are a couple of reasons that we chose [[JavaScript]]. One, of course, was this                   |
| 24:39      | efficiency that I was talking about. We really wanted something that would be fast, and we               |
| 24:41      | knew that [[Apple]] was really tuning [[JavaScript]] performance because it's used for scripting                 |
| 24:47      | web pages, and the web to be really fast on all their devices.                                           |
| 24:52      | But another reason was that at the moment, because it's the scripting language of the                    |
| 24:59      | web, it's the language that has probably the most beginner tutorials out there available                 |
| 25:06      | if you want to learn [[JavaScript]]. It's not something where we have to teach you. There                    |
| 25:11      | are lots of resources out there that will help you learn about [[JavaScript]], how to build                  |
| 25:14      | [[JavaScript]]. And if you learn this, it's something you can also leverage in other tools. You              |
| 25:19      | can leverage it if you want to work on a web page or all sorts of other things. It's just                |
| 25:25      | nice to be working with a language that is widely available, even though it has some                     |
| 25:30      | quirks. I wouldn't say it's necessarily my favourite language in the world in that sense.                 |
| 25:34      | Yeah, I was going to say [[JavaScript]] is kind of quirky. A book that I've seen frequently                  |
| 25:39      | recommended for people not familiar with [[JavaScript]]. I learned [[JavaScript]] as a web developer,            |
| 25:42      | so for me, programming for an application is like, whoa, whole other mindset, but eloquent               |
| 25:48      | [[JavaScript]]. I can't speak English today either, David. I'm joining you there. It's the book              |
| 25:54      | that I keep seeing recommended, and I skimmed through it. I don't need to read it, of course,            |
| 25:59      | understanding [[JavaScript]] already, but it looks pretty good to me as well. So for people                  |
| 26:03      | who are looking and going, okay, well, why would I learn [[JavaScript]]? Well, as well as                    |
| 26:07      | the Omni apps, there's also [[Drafts]] and scriptable out there. They'll also use [[JavaScript]]. So              |
| 26:11      | it's, in my opinion, becoming the de facto, you know, next [[AppleScript]], even, you know,                 |
| 26:17      | maybe it's not the language everybody would prefer. I know Python has many, many, many                   |
| 26:22      | devout followers. I personally would just do everything in PHP, but the world might kill                 |
| 26:26      | me if I did that. But I'm thinking [[JavaScript]] is a pretty good solution because, I mean,                 |
| 26:30      | you get it for free on iOS, and that's a very, very good starting point.                                 |
| 26:35      | It does seem to be kind of the gravity seems to be pulling it towards automation for all                 |
| 26:40      | these various solutions that we talk about on this show so often. Like you said, [[Drafts]],                 |
| 26:46      | the Omni apps, it works both on Mac, iPad and iPhone. So I think this is really a great                   |
| 26:52      | opportunity for folks that want to learn this. So how is it working with the, let's talk                 |
| 26:57      | about OmniFocus because that's the most recent one that you've updated for it. Give me some              |
| 27:01      | examples of what you can do with this.                                                                   |
| 27:04      | Well, so one of the things you might want to do is capture something from one of their                   |
| 27:12      | apps and send it to one of the other apps. But maybe you want to filter through your                     |
| 27:16      | whole database to do it. So you could build a shortcut that does this. And, you know,                    |
| 27:21      | people are, as we saw with those graphs that we were talking about earlier. But if you're                |
| 27:28      | using some [[JavaScript]], you can write some code that will filter through the entire database,             |
| 27:32      | do it really quickly, and then make some decisions about, well, what do I want to include? What          |
| 27:38      | do I not want to include? How do I want to format it? And then maybe it takes those results              |
| 27:41      | and it sends them off to OmniOutliner, to OmniGraffle, like maybe a graph of how your                    |
| 27:47      | database works, or it sends it off to OmniPlan. You know, there are certainly a lot of customers         |
| 27:52      | who have been wanting to take something that was written in OmniFocus and draw a project                 |
| 27:59      | plan for it with the timeline and everything else. And this is one way you can do that.                  |
| 28:03      | And Sal has actually built, Sal Segohian, who's been on the show before, I believe, has written             |
| 28:11      | some examples of some of these things that are posted over at omni-automation.com. That's                 |
| 28:15      | Omni-automation. And I'm sure Link will be in the show notes. And so that's a great place                |
| 28:23      | to see some of these examples of things you can do when you're taking apps and now you're                |
| 28:28      | having them work together, not just one app at a time. Because one of the things [[JavaScript]]              |
| 28:32      | is good at is letting you build some dynamic code, send it somewhere else, and execute                   |
| 28:38      | it in a different environment. So you can build a plug-in for OmniPlan that goes and                     |
| 28:44      | fetches some data from OmniFocus or vice versa.                                                          |
| 28:47      | Which, for those people who are using both applications or who, like me, for example,                    |
| 28:51      | have been longing for a long time to get a really good granular visual overview of some                  |
| 28:56      | of my insanely complex projects in OmniFocus. It's great because I can now, I've actually                |
| 29:01      | just stolen some of the scripts from the website a couple of months ago while I've been beta             |
| 29:04      | testing this. And it's perfect because I just, I press the button and it's like, okay, here's            |
| 29:09      | this project in OmniPlan. And I'm like, okay, so apparently I'm doing 60 different things                |
| 29:13      | at once. This might explain a few of the problems I'm having. Because I'm only one person. You           |
| 29:19      | can only allocate a person resource to do one thing at a time. As much as I love multitasking,           |
| 29:24      | I suck at it. So it's really been useful for that for me. Yeah.                                          |
| 29:28      | Well, I mean, just to give folks a little bit of context, if you've done [[AppleScript\|AppleScripts]],                  |
| 29:34      | you know about the dictionaries, where an application will provide certain data through                  |
| 29:40      | its dictionary to [[AppleScript]]. I guess you can call that a donation, just like they do                  |
| 29:44      | now with shortcuts. But I feel like, and Ken can tell me if I'm wrong, but the quote-unquote             |
| 29:51      | dictionary you built with this [[JavaScript]] implementation looks like it's just almost                     |
| 29:55      | everything you can do in the app. Like, for instance, just like I was looking at the search              |
| 29:59      | functions, because I was trying to do some [[JavaScript]] in around search, I can look for                   |
| 30:04      | search terms in the projects, the folders and the tags. So I can get very specific with                  |
| 30:10      | my search based on which context of the database I want to hit. And it's just like, it's that            |
| 30:17      | way throughout this whole implementation, you guys have just basically made the entire                   |
| 30:22      | application automation friendly on all platforms. It's super awesome, if you're a think about            |
| 30:28      | it.                                                                                                      |
| 30:29      | I think it's great what we've done. I wouldn't say that we've gotten 100% of the way there               |
| 30:33      | yet. I know Rosa sent us some bugs about things around date parsing, for example, that are               |
| 30:39      | not yet exposed to the [[JavaScript]] side of things. But it's certainly our goal to get                     |
| 30:43      | all of those things there. And of course, there are things you can do when you have                      |
| 30:49      | that raw access to these underlying tasks that you can't really do very easily in the                    |
| 30:54      | interfaces. It's super easy to make up your own sorting criteria for a tag, for example,                 |
| 30:59      | and say, all right, I just want to re-sort everything in this tag by whatever criteria                   |
| 31:03      | you've made up. And suddenly, it's showing that tag in your forecast. And now your forecast              |
| 31:11      | list is ordered the way you want it to be, which is a little bit harder to do if you're                  |
| 31:16      | just working in the interface in the app itself.                                                         |
| 31:19      | Yeah. And also, the other thing that you can do is you can do things that you wouldn't                   |
| 31:23      | do in the interface either. So for example, something that I frequently see people asking                |
| 31:27      | how to do is to automatically create a project. So you have a project that's called a Whole              |
| 31:33      | Series of Actions, and they want to do one action a day. So they want to defer every                     |
| 31:37      | action so that it's available the subsequent day of the previous action. I mean, if you                  |
| 31:42      | sat down and do that through the user interface, even with the nice buttons, you could select            |
| 31:47      | all of them, set the defer date, and then unselect the first one and plus one everything. But            |
| 31:52      | that's kind of fiddly to do, even with options available to us. But doing that sort of thing             |
| 31:57      | with a script is actually relatively easy to do once you've got a date to start with,                    |
| 32:02      | and then you progress from there, which is something I've experimented with. And then                    |
| 32:06      | I quickly realised that I was being extremely optimistic about my rage of completion. And                |
| 32:11      | I actually modified it to defer to one item a week, which seems much more realistic, and                 |
| 32:16      | I'm not feeling so overwhelmed anymore.                                                                  |
| 32:19      | But that actually reminds me of one of my first automation projects ever. This is back                   |
| 32:25      | in, in the early 80s, maybe late 70s, I have to think about exactly what it was. But my                  |
| 32:32      | dad was coming home from work, he's an industrial engineer for Boeing. So he was scheduling,             |
| 32:38      | you know, work on the 747 or the 777 or whichever plane he was working on at that time. And tools        |
| 32:44      | would be, when they say tools, Boeing thinks of tools as these big, you know, room sized                 |
| 32:51      | things that are working on an airplane wing or something. Well, as, as projects would                    |
| 32:56      | shift, things would get backed up and you would have issues where the next plane was                     |
| 33:02      | coming along and really needed to use a tool, but the last plane was still using it. And                 |
| 33:06      | so they're previously, you know, well coordinated schedule was now getting off kilter and             |
| 33:10      | they needed to order another tool. But of course they needed to do that in advance so                    |
| 33:14      | that things wouldn't get blown down.                                                                     |
| 33:16      | So they, so they needed OmniPlan?                                                                        |
| 33:18      | Well, it was a lot like that. Yeah, he was coming home with these long rolled up charts,                 |
| 33:24      | paper charts, and then he would work on them at home where he would, you know, have a pen                |
| 33:28      | and he would be searching for these exceptions where, where a tool was going to be needed                |
| 33:33      | early and he would mark that up with pen and then he'd go back into the office and, and                  |
| 33:38      | get that stuff done. And as he was, you know, I was asking what he was doing and he explained            |
| 33:41      | it to me and I said, well, couldn't we, couldn't we make this easier if we just wrote down               |
| 33:46      | these, these times and so on. So I ended up writing a little basic program for him that                  |
| 33:50      | where he could enter the start dates and end dates for these different things. And then,                 |
| 33:55      | and then it would just make a list of here are the places where, where you're going to                   |
| 33:58      | need a tool early.                                                                                       |
| 33:59      | And that's the sort of thing I think that if you capture some data and then you apply                    |
| 34:04      | some automation to it, you can save yourself a whole lot of time. He ended up some turning               |
| 34:09      | in this basic program as a, as an employee suggestion for Boeing and it's saved enough                   |
| 34:17      | money that they awarded him, I don't know, like some thousands of dollars that paid for                  |
| 34:20      | me to get a, my first disk drive instead of saving my code to cassette tapes. So that                    |
| 34:26      | was exciting.                                                                                            |
| 34:27      | I was going to ask if he liked bought you a bike or something, but a disk drive would                    |
| 34:30      | be cool too.                                                                                             |
| 34:31      | Yeah. Floppy disks. That was great.                                                                       |
| 34:35      | This episode of the Automators podcast is brought to you by hrefs, SEO tools and resources               |
| 34:41      | to grow your search traffic. Get a seven day trial for just $7.                                          |
| 34:47      | You work for a big brand or maybe you run your own small business or you're a freelancer                 |
| 34:51      | getting traffic to your website can be a real challenge. And there's a lot of competition                |
| 34:56      | out there.                                                                                               |
| 34:57      | AHREFS is an all in one SEO tool that solves that problem. It gives you the tools you need                |
| 35:03      | to rank your website and Google and get tons of search traffic.                                          |
| 35:08      | I have to admit I have always been the leery of SEO tools, but hrefs breaks that stereotype              |
| 35:16      | with hrefs.                                                                                              |
| 35:17      | You can optimise your website where it doesn't audit to see what works and what doesn't.                 |
| 35:22      | You can analyse your competitors and even use the site explorer.                                         |
| 35:26      | My favourite feature is the keyword explorer. It allows you to study what your customers                  |
| 35:30      | are searching for.                                                                                       |
| 35:31      | So you can customise your website to give them exactly what they need. It even tracks                    |
| 35:36      | your ranking and progress.                                                                               |
| 35:39      | This is the first SEO that's made sense to me.                                                           |
| 35:42      | AHREFS uncovers how your competitors are getting traffic and why and you can see the pages                |
| 35:46      | and content that send them the most traffic and you can get estimated search volumes with                |
| 35:51      | their keywords explorer too.                                                                             |
| 35:53      | So you can see how well a piece of content is likely to perform before you write it.                     |
| 35:58      | AHREFS has a bunch of useful stuff. The content explorer can help you get a guest blogging                |
| 36:03      | opportunities and the rank tracker, which lets you track your progress on keywords.                      |
| 36:08      | It'll even pick up broken backlinks and help you fix them.                                               |
| 36:12      | So take the mystery out of SEO. Go to hrefs right now. That's a hrefs.com. Sign up for                   |
| 36:20      | their seven day trial for just $7. Get reports on your website and see what's performing                 |
| 36:26      | well and figure out your next move.                                                                      |
| 36:28      | Whether you have a personal website you want to get a following on or your company needs                 |
| 36:33      | more traffic to convert into sales. Go there now to a hrefs.com to get that $7 trial.                    |
| 36:42      | Our thanks to hrefs for their support of automators and all of relay FM.                                 |
| 36:47      | And if you're listening to this and you're like, ah, [[JavaScript]], I don't want to learn                   |
| 36:51      | a new language. One of the things with the side benefit of all this is if you go to that                 |
| 36:56      | Omni automation site, we're going to put in the show notes. We'll put there's a specific                 |
| 37:01      | page where Sal has created 30 some automations already using [[JavaScript]]. And these are just              |
| 37:09      | plugins you can download, plug in and start using immediately with OmniFocus. So you don't               |
| 37:15      | have to write a lick of [[JavaScript]] to still get advantages of this. And a lot of these                   |
| 37:19      | are really useful. Like you can, like I was just looking at, there's one here where you                  |
| 37:22      | can clear tags from selected tasks. Well, sometimes I need to kind of flush tags down                    |
| 37:28      | the toilet, right? And so I could select a bunch of these, run this plugin, and it does                  |
| 37:32      | it for me automatically, which is, you know, the whole point of the automators.                          |
| 37:37      | That's really our vision for this in the end is that, of course, there are going to be                   |
| 37:41      | some people who are excited to write [[JavaScript]] and develop these plugins. But most people,              |
| 37:48      | you know, much like with Kinklesst GTD back in the Omni Outliner days 15 years ago, most                  |
| 37:52      | people are just going to be wanting to run plugins that other people have written. And                   |
| 37:57      | I think we still have more work we can do on our end to make that even easier. So it's                   |
| 38:00      | easy to, you know, search a catalogue and quickly install something and start using it. But                |
| 38:06      | even today, you know, as Salas set things up on the website, you can, as he said, just                   |
| 38:11      | click on some things and get them installed and start using them. And I think it's a great               |
| 38:15      | start.                                                                                                   |
| 38:16      | Yeah. And so the way kind of walk us through how you do that, if someone wants to download               |
| 38:20      | one of these plugins, once you download it, how do you get it working with the application,              |
| 38:24      | whether you're on iPhone or Mac?                                                                         |
| 38:27      | If it's stored as a plugin, and I've been working with Sal about how can we get this                     |
| 38:33      | site set up so that a lot of these are more easily available as [[JavaScript]] plugins, we                   |
| 38:38      | have a special extension for it, just like a normal document extension for like an Omni                  |
| 38:44      | Focus plugin or an Omni Outliner plugin or whatever. And so the website will just provide                |
| 38:49      | this plugin download, you click on it, and whichever platform you're on, whether you're                  |
| 38:54      | on Mac or on iPhone or iPad, you would get a prompt saying, hey, is it okay to download                  |
| 38:59      | this file?                                                                                               |
| 39:00      | Would you like to open it now in its target application? Like if it's an [[OmniFocus]] plugin,              |
| 39:05      | would you like to open this in [[OmniFocus]]?                                                               |
| 39:07      | [[OmniFocus]] will open it then, and it will, that's basically the entire process. It's                     |
| 39:16      | now installed and you can start using it. You can sign keyboard shortcuts to it so you                   |
| 39:19      | can quickly invoke a plugin by typing control one or whatever. That's the idea. I want to                |
| 39:29      | make it even easier because I would like for this to be stuff you can search for in the                  |
| 39:33      | app. You don't have to go to a special website. Website doesn't have to do a bunch of special            |
| 39:36      | encoding and so on. But I feel like we're on track, on that track. And of course, would                  |
| 39:43      | also love feedback from our own listeners. What would you like to see? How would you                     |
| 39:47      | like this to work better? Because it's only useful if it's useful to you.                                |
| 39:52      | I feel like the in-game is like kind of [Graffletopia](https://www.graffletopia.com/) kind of thing where it's a menu in the app           |
| 39:58      | and you just go pick the one you want, you press the button and it applies it. But you're                |
| 40:02      | really not that far from that already.                                                                   |
| 40:04      | Yeah, shortcuts did a really good job of this, or workflow I should say, before [[Apple]]                    |
| 40:10      | even acquired it, where you could just easily do some searches for here's the sort of thing              |
| 40:14      | I'm trying to do and it would return a bunch of matching workflows and you would say, okay,              |
| 40:19      | yeah, let me try that one. And I'd like to see us get to that point too.                                 |
| 40:22      | Yeah, well, and the nice thing is, in addition to the ones that Sal's created, you'll have               |
| 40:28      | other people in the community like Rosemary Orchard putting ones together and there'll                  |
| 40:32      | be this kind of rich, hopefully assortment of scripts that you can download. And because                 |
| 40:38      | they're [[JavaScript]], if you do want to wade into the waters a bit, taking one someone's                   |
| 40:43      | already written and making changes to it is, you know, that's my sweet spot for scripting.               |
| 40:49      | I mean, I can't tell you how many [[AppleScript\|AppleScripts]] I've written that started with somebody else's           |
| 40:53      | script, you know, and I think that'll work the same way with this [[JavaScript]]. So it's                    |
| 40:57      | not that difficult to understand how it works, even if you don't do all the online courses               |
| 41:01      | once you look at one that and you know what it's doing and you know how it works.                        |
| 41:05      | Yeah, absolutely. That's how so much programming starts, in fact, and whenever you're working            |
| 41:11      | in anything. Definitely. And I mean, of course, OmniFocus is not a simple application, there's           |
| 41:17      | a little bit of complexity to it. So to start with, you're going to want to have a look                  |
| 41:20      | at, you know, like, what is, you know, like, how does a project work? Like, what does it                 |
| 41:24      | have? Okay, so I need to set project dot due date to set the due date of the project.                    |
| 41:28      | But once you're familiar with [[JavaScript]] objects and so on, it's relatively easy to figure               |
| 41:32      | out. And I'm just looking at a sample script that I threw together earlier and [[BBEdit]]                   |
| 41:36      | tells me it's 65 lines long, when people listening are beginning, whoa, 65 lines, that's a lot           |
| 41:41      | of code. But if I look at it, the first 11 lines are comments to tell OmniFocus how to                   |
| 41:46      | show this, this action to me, which is fine. And so that takes me down to, you know, 54                  |
| 41:52      | lines. And then I've actually got 10 lines of comments here inside of my code to help                    |
| 41:57      | me understand what I've done where. So it's, it's not a lot. And 90% of this was copied                  |
| 42:03      | from the Omni Automation website, I just copied little chunks here and there, and put stuff              |
| 42:07      | together. And now it works. So when I click on this in toolbar on my Mac, or I tap on                    |
| 42:12      | it on my iPad, then it takes the currently selected task, and it turns it into a project.                |
| 42:17      | It tells me if it wants, if I want it to be sequential or non sequential. And so parallel.               |
| 42:24      | And then adds adds a project with the data from the current task, which is a really great                |
| 42:30      | little action to have, because I frequently convert projects into auto complete, sorry,                  |
| 42:35      | I frequently convert inbox tasks to auto completing projects, because I add something like, Hey,         |
| 42:40      | I need to switch to a new cell phone provider. Well, when I've completed all the actions,                |
| 42:45      | I don't need this project to hang around for eternity. You know, I'll switch cell phone                  |
| 42:49      | provider and it's done. So I want it to auto complete. And that's just something that I've               |
| 42:53      | done to save me a few taps. And it didn't take long to put together with a little bit                    |
| 42:56      | of help from the website. Yeah, you know, like as we're recording this, I've just shipped                |
| 43:01      | the new photos field guide, and I'm working on the next title already. And I am working                  |
| 43:06      | on a [[JavaScript]] in my head, it's not done yet. But did I can combine an outline that                     |
| 43:12      | I create on the outliner to convert that into an overall plan and OmniPlan and a task list               |
| 43:18      | and OmniFocus? I feel like I'm going to get there. There may be some other people helping               |
| 43:22      | me along the way, but the stuff isn't that hard really. And and I love the idea of, you                  |
| 43:29      | know, getting back to the idea of programming, not to make your own apps, but to make the                |
| 43:33      | app sure already have work better for you. Exactly. And that's that's the whole point                    |
| 43:38      | of automation, right? We're we love the apps that we use, we just want to make our own                   |
| 43:42      | lives easier. And this is this is how we choose to do it, which I think is the right solution,           |
| 43:46      | at least for me and you, David. And we've been focused on Omni. Yeah, we've been focused                 |
| 43:51      | on OmniFocus in this interview, because I am such a weirdo fan of OmniFocus. But the                   |
| 43:58      | but you have the same tools available for OnmniGraffle on the outliner and OmniPlan                      |
| 44:02      | too. So if you're listening to this and you want to play with some of these other apps,                  |
| 44:07      | you've got sample scripts, and you've got the ability to go in there and kind of roll                    |
| 44:11      | up your sleeves and start automating those apps, too. Yeah, some of the the automation                   |
| 44:16      | things that I do with OnmniGraffle involve taking a set of data, you know, obviously,                     |
| 44:23      | I'm doing sort of computer science type work. So taking, well, as an example, the OmniFocus             |
| 44:29      | database itself, it's made up of a bunch of transactions. And if you're working on multiple              |
| 44:35      | devices, some of the transactions may split off into a divergent tree for a little bit                   |
| 44:39      | is sort of like if people are familiar with get get does the same thing with its commits.                |
| 44:45      | And so then eventually, things sync up again, and they come back together. Well, when we're              |
| 44:49      | trying to debug what's going on with some sort of syncing issue, you know, that's one                    |
| 44:54      | of the graphs that I would like to look at as I open that thing up. And, you know, I'd                   |
| 44:57      | be looking at a graph yesterday, I was looking at a graph of about 1800 transactions. And                |
| 45:02      | it's so much easier to visualise that in OnmniGraffle and think, Okay, well, how do these                 |
| 45:06      | dependencies work? Here are the lines and so on. And so I had a little shell script,                     |
| 45:11      | actually, that I run in terminal that takes an OmniFocus database, makes a graph out                    |
| 45:17      | of it opens that graph in OnmniGraffle. And then I can go and start, you know, working                    |
| 45:23      | in more detail with that graph and figure out what's going on.                                           |
| 45:26      | One of my favourite implementations was salsa going in when he did his [[CMD-D Conference]].              |
| 45:31      | He made the [[CMD-D Conference]] logo with a [[JavaScript]] in OmniGraffle. And he just run                  |
| 45:39      | a script and it created the logo for the event in OmniGraffle. Because, because he's                     |
| 45:43      | Sal and that's how sell does things.                                                                    |
| 45:47      | This episode is brought to you by Pingdom from SolarWinds. Today's internet users expect                 |
| 45:52      | a fast web experience, no matter how good your content or how effective your marketing,                  |
| 45:56      | they'll most certainly bounce if your website is loading too slowly. With real user monitoring           |
| 46:01      | from Pingdom, you can discover how website performance issues affect your visitors experience.           |
| 46:06      | So you can take action before your business is impacted.                                                 |
| 46:10      | How your visitors experience your website differs depending on the browser device and                    |
| 46:13      | platform they use. So you want to identify how visitors are actually experiencing your                   |
| 46:18      | website, allowing you to make informed optimisations and deliver great performance to those who          |
| 46:23      | mattered the most.                                                                                       |
| 46:25      | Real user monitoring is an event based solution. So it's built for scalability, meaning you              |
| 46:29      | can monitor millions of page views without compromising the fidelity of your historical                  |
| 46:33      | data or breaking the bank in the process.                                                                |
| 46:36      | Get live as to insights today with real user monitoring from Pingdom. Go to pingdom.com                  |
| 46:41      | slash relayfm right now for a 14 day free trial with no credit card required. Then when                  |
| 46:47      | you sign up, use the code AUTOMATORS at checkout to get an awesome 30% off your first invoice.           |
| 46:53      | Thanks to Pingdom for SolarWinds of their support at this show and relayfm.                              |
| 46:58      | OmniGraffle also added the ability to copy one of your graphics or whatever it is that you                  |
| 47:04      | have on your canvas as [[JavaScript]], which makes it even easier to get started with that because           |
| 47:11      | say for example you want to learn how to draw a square in the centre of your canvas. Well,               |
| 47:16      | you draw a square and you centre on your canvas and then you can just at least on the Mac                |
| 47:19      | right click copy as [[JavaScript]] and that gives you the ability to redraw that circle with                 |
| 47:24      | exactly that script time and time again, which for me is a really nice way to get started                |
| 47:29      | on that because for me, you know, I've never really worked with user interfaces of that                  |
| 47:34      | kind. I've only ever worked with web browsers where everything is different on every single              |
| 47:38      | device because some people have 8 billion and one bookmarks and tabs open and some people                |
| 47:44      | have it full screen in [[Safari]] with nothing showing apart from the address bar. And so,                   |
| 47:49      | you know, you have no idea what the other person's device looks like and therefore what                  |
| 47:53      | they're really seeing. So, you have to sort of just guesstimate, but a canvas in OmniGraffle             |
| 47:58      | is, you know, it's precise. And I love the fact that you can specifically say, okay,                     |
| 48:02      | right. So, now I've drawn like the outline that I want for every single diagram of this                  |
| 48:08      | kind and copy those elements as [[JavaScript]] and that to me is a really great way to get                   |
| 48:13      | started wrapping my head around something that for me is a totally alien concept.                        |
| 48:17      | Yeah, I find that tool useful myself when I'm wanting to set things up and I don't necessarily           |
| 48:22      | remember. All right, how do I assign a colour to the shape or to its border or whatever                   |
| 48:27      | else I'm trying to do? So, it's much easier sometimes just manipulate it directly, copy                  |
| 48:32      | it back out into [[JavaScript]], as you said, and paste it into your script and then you                     |
| 48:38      | can make your changes from there. Yes. And that's one of the things I like with the examples             |
| 48:43      | that are there either directly from the app or from the website, it's easy to get started.               |
| 48:49      | Ken, what's some of your favourite implementations of [[JavaScript]] on the Omni apps now that you've         |
| 48:54      | been playing with it for a while? Oh, that's an interesting question. Well, I haven't actually           |
| 48:59      | played with the Omni focused stuff that much yet because it's so new. I mean, it's been                  |
| 49:03      | developed meant what for a couple of years now. But in terms of finally having all of                    |
| 49:09      | the features that we wanted, you know, this release is actually helping polish some of                   |
| 49:14      | the edges that, well, in fact, it's making all of our apps better at the same time. So                   |
| 49:19      | in [[OmniFocus]] 3.8, we added support for things like Pasteboard access so you can now copy                |
| 49:24      | and paste things from the Pasteboard. And of course, that support is something that                      |
| 49:29      | we've wanted to have all along in all of our apps. And now that it's been written for Omni               |
| 49:34      | Focus, you know, it's easier at least to bring that support back over for all of the apps                |
| 49:40      | to share. So in one sense, it's the newest thing and therefore the latest and the most                   |
| 49:46      | complete. And so that's the most interesting. But from another point of view, you know,                  |
| 49:50      | the Omni Graph will work and just being able to work with this visual canvas as Rose was                 |
| 49:55      | talking about. And the different applications that opens up, that's been really useful to                |
| 50:00      | me. And of course, Omni Outliner, that's where a lot of our scripting and automation history             |
| 50:08      | started was with different things people were wanting to write in to work with their outlines            |
| 50:15      | and do more interesting things there. So whether it's, you know, calculating different results           |
| 50:20      | from different types of tables that might be stored in the outline or whatever else that                 |
| 50:24      | I don't know, I end up calling between all of them. And of course, sometimes using multiple              |
| 50:29      | apps at once.                                                                                            |
| 50:30      | Ken, what is your, we talked about shortcuts earlier. What would you say is one of your                  |
| 50:36      | most frequently used shortcuts? Oh, well, so that's an interesting one for me. I think                   |
| 50:44      | to be honest, the most frequently used shortcuts that I have are things that control my lights.          |
| 50:49      | So that's probably the most dead simple shortcuts that you can imagine. But, but I find it really        |
| 50:55      | handy to just be able to, you know, hold down, hold down my watch so that Siri activates                 |
| 51:01      | and then say, Hey, I want to do some video conferencing now and adjust the lighting in                   |
| 51:06      | this room so that my face is illuminated and not, and not behind my head or, or no, now                  |
| 51:13      | it's gaming time and it'll shift the lights around for playing games or, or I'll go down                 |
| 51:18      | to the Dan and I'll say watch TV and shift those lights around. So yeah, those, those                    |
| 51:23      | are probably the most commonly used shortcuts that I have.                                               |
| 51:27      | Yeah. So and, and the way you're doing that is you just give the shortcut the name of                    |
| 51:30      | what you want to call it, like going to video conference or play games. And then you're                  |
| 51:35      | just running individual shortcuts on individual lighting units to change the lighting up or              |
| 51:39      | down or change the colours. Right. Or several of those are sort of scenes that I had pre-defined.         |
| 51:45      | Okay. So it's almost cheating. It's hardly even a shortcut, right?                                       |
| 51:49      | It's just like a machine and I gave it a name, but, but they're the things that that                     |
| 51:55      | I find most useful that I'm using from shortcuts all the time.                                           |
| 51:59      | Yeah. Well, I mean, that those are the good ones.                                                        |
| 52:02      | Yeah. I think that's a really neat trick though, because a home kids scene, you know, it is a            |
| 52:06      | great idea because it's available to everybody in your family. And, you know, if you're sharing          |
| 52:10      | your house with other people, I presume they would also like to control the lights instead               |
| 52:14      | of sitting there in the dark, but everybody has different names for things. So what I call               |
| 52:18      | film night, somebody else might call movie night. So by adding a shortcut to run the scene,              |
| 52:23      | I can give it my own custom name, which means that everybody can have the same scenes,                   |
| 52:28      | but we can all have different names for them and call them whatever it is we like.                       |
| 52:33      | And I like that approach. It's really nice. And I'm also really missing my home kit lights               |
| 52:38      | as I sit here mostly in the dark with just a desk lamp on because I forgot that it gets dark here.       |
| 52:44      | And yeah, it's okay though. I do have lighting. I have a very large monitor to provide light.            |
| 52:50      | And another thing you do, Ken, and you mentioned it briefly earlier, is that you do a lot of             |
| 52:54      | automation through the terminal. Yeah, absolutely. In terms of the actual work that I do, I would say    |
| 53:02      | 99% of the automation stuff that I do is driven through the terminal. Now,                               |
| 53:08      | what language I use for all of that is completely wide open. I'll often start with writing something     |
| 53:15      | as a shell script. I use Z shell for a couple of decades now. So shell script is basically               |
| 53:25      | taking the commands that you would type into a terminal window in the first place and saving             |
| 53:28      | them to a text file so that you can run those commands again later really easily. And that's             |
| 53:33      | often the easiest way to automate something is just take something you've been typing several            |
| 53:37      | times and run it that way. But then I'll bring in, let's see, one of my daily scripts, run some          |
| 53:46      | Java that catches stuff from App Store Connect to get sales data and downloads that. Then it's           |
| 53:55      | sort of driven by a shell script. Actually, is this driven by a shell script? I think it was             |
| 54:00      | driven by a shell script and now it's been converted to a Perl script or a Python script.                |
| 54:04      | I don't remember which one is the driver at the moment. So then it loads that data into                  |
| 54:10      | PostgreSQL database and does some reports on that, ends up feeding it off to                             |
| 54:19      | so both Perl and Python are involved. And then eventually it feeds it out to R, which is                 |
| 54:26      | a statistical programming language environment. And that's what does regression graphs and so            |
| 54:33      | on for me. But it ends up being this sort of long set of steps that would take a long time to do         |
| 54:42      | if I were trying to do it manually every time. But because I can just run this command, it'll be done    |
| 54:46      | in maybe 30 seconds. And now I see my reports for the day and with nice graphs to go on within           |
| 54:52      | everything. Yeah, it just makes my life easy. I have to admit, my dirty secret is that the               |
| 54:59      | terminal just never, I never took to the terminal. I did the course. I did some stuff with Terpstra      |
| 55:04      | once. And I can display a calendar and I can get directories, but I just never could figure out          |
| 55:12      | as a user, as a power user or more than developer what I'm supposed to do with the terminal.             |
| 55:18      | Where does it fit for people that are not developers?                                                    |
| 55:22      | That's a good question. Well, I don't know whether it does necessarily fit for people that               |
| 55:26      | are not developers. Yeah, maybe that's the answer. I don't know. Yeah.                                   |
| 55:30      | I didn't start using the terminal until I started developing. Because the first thing I had to do        |
| 55:34      | was create an SSH key. And that's something that you use the terminal to do. And then I had an SSH       |
| 55:39      | key so I could SSH into a server. And then I was no longer on my computer. I was talking on another      |
| 55:44      | machine and going around doing folders, checking things out and stuff like that. But that's all          |
| 55:48      | very developer stuff. So I'm not sure I use it for a huge amount of non developer things, except         |
| 55:54      | opening files in [[BBEdit]] when I'm in a project folder so I can edit them as a developer,                 |
| 56:00      | which is kind of developer-y. But JF preset did some stuff when he was on our show.                      |
| 56:04      | Yeah. No, I mean, there's some people that use it really effectively, but I do have trouble figuring     |
| 56:09      | out if it is actually an automation tool for most people. I think if you're in the business of           |
| 56:14      | making apps, it is probably the primary automation tool. But just thinking about the show and listeners, |
| 56:21      | I'm like, can we do a show on that? Is there something there for people? And I'm flummoxed.              |
| 56:28      | Yeah. There were a lot of tools built for the terminal back when the terminal was the user               |
| 56:35      | interface that everybody had available. So back in the sort of heyday of [[Unix]] command line experience,   |
| 56:43      | let's say the 70s, 80s. I mean, I learned on a terminal computer. I started on Tandy,                    |
| 56:52      | and Atari, and several of the, you know, and the [[Apple]] too, all these terminal-based computers.          |
| 56:58      | That was what I did. But as soon as the graphical user interface showed up, I left it in the rear        |
| 57:03      | view mirror. Right. So yeah, there are a lot of tools. Like if you look back at the old [[Unix]]             |
| 57:08      | manual pages, the BSD manual pages, you'll find there are these things in there for doing like           |
| 57:15      | diction reports and, you know, the look at your English language and analyse how, you know,              |
| 57:19      | what kind of words you used and what grade level you think you're doing. That's all stuff that's         |
| 57:23      | now people have put into their word processors or put into web page tools that they're using instead.    |
| 57:29      | It all exists there. So it's not that the terminal is incapable of doing that stuff,                     |
| 57:36      | but I'm not sure it was ever the most friendly way to present it. It was just the only way to            |
| 57:41      | present it at the time. Sure. And like a lot of the maintenance stuff that you do, you buy               |
| 57:48      | an app with maintenance tools for your Mac. It's basically a pretty wrapper on terminal commands         |
| 57:53      | quite often. Yeah, there's still so much power there underneath behind the scenes. And it's great        |
| 57:58      | for system administrators. It's great for programmers, developers. But yeah, for a lot                   |
| 58:06      | of people's daily tasks, they're probably going to find more use out of a spreadsheet,                   |
| 58:09      | to be honest, right? And the automations they can do there.                                              |
| 58:13      | Well, either way, I am just so happy that you guys have got to the finish line with this [[JavaScript]].     |
| 58:18      | And I know you're going to tell me you're still working on it, but you've got it out now for all         |
| 58:22      | of your apps. And now I can truly start scripting between all of my army apps. And I'm so happy          |
| 58:27      | about that. Oh, thank you. Yeah, it's, it's an exciting milestone to finally have reached. Even          |
| 58:34      | as you say, there's more that we want to do. There's more that I'm sure you would,                       |
| 58:37      | everybody would like us to do as they dig into this and, and start to,                                   |
| 58:43      | you know, see new needs. But I feel like there's also already a lot there. And so it is appropriate      |
| 58:49      | maybe to step back and just be excited for what's been done. And I think a great starting point          |
| 58:56      | if you're listening to this is go home. Or you may already be home when you listen to this.              |
| 59:01      | And get yourself to omni-automation.com. It's also going, I believe, put a lot of the                    |
| 59:08      | singular, but I'm sure some of the other folks at Omni have worked on it as well. But there is           |
| 59:13      | so many resources here about all the scripting, the action collections are there as well. So             |
| 59:19      | you can just download and start using them and start picking them apart. You know, rather than           |
| 59:24      | watch something dumb on TV, spend an evening just on this website. And you are going to learn to         |
| 59:30      | learn to automate your omni applications. It's just, it's not as hard as it sounds. And even if          |
| 59:37      | you don't want to get into the weeds with [[JavaScript]], there are so many great actions already built      |
| 59:43      | that you're going to make these applications more valuable to yourself just by going to this website.    |
| 59:47      | We'll put a link to the collection straight in the show notes too. So if you just want to look at        |
| 59:51      | the examples that already exist, like copying tags between selected tasks, like that, that exists.       |
| 59:57      | So that's something you can download. We've got a link straight to that as well.                         |
| 01:00:01   | Yeah, that's great. And I'll also mention that on the, we have a [[Slack]] workspace for the Omni Group      |
| 01:00:07   | that you can get to from omnigroup.com/Slack. And on there, there's an automation channel          |
| 01:00:13   | where people are, you know, work, discovering the stuff, learning it, sharing ideas with each            |
| 01:00:17   | other, bouncing ideas off each other. And if you have an idea for something you want to make,            |
| 01:00:22   | but you're not sure how to get into it, that's a great place to come and ask questions. And              |
| 01:00:25   | you know, people will be happy to come help you out, try to figure this out together.                    |
| 01:00:31   | Well, well, Ken, once again, I feel like, you know, as someone who's an automation enthusiast,           |
| 01:00:37   | nothing makes me happier than companies that are willing to not only give automation lip service,        |
| 01:00:42   | but actually put their time and money behind it. And the Omni Group has done that so much. And I         |
| 01:00:48   | feel like you guys have set such a great example. I hope a lot of the other developers out there         |
| 01:00:53   | with productivity apps tie into this, because this is just [[JavaScript]]. I mean, there's no reason         |
| 01:00:58   | why I can't use a [[JavaScript]] plugin for OmniFocus to tie into some other third party application         |
| 01:01:04   | too, if I want. And, and you guys, that's one of the things you did with this that makes it so           |
| 01:01:09   | generous to the community is that it's not proprietary. I mean, these scripts can run                    |
| 01:01:15   | across multiple apps. And I would love nothing better than a year or two from now to have so             |
| 01:01:20   | many big productivity apps using the same mechanism to really make automation possible                   |
| 01:01:25   | across the entire [[Apple]] ecosystem. Sounds great to me. Yeah, let's do it. All right. Let's change        |
| 01:01:33   | the world. Everybody at home, you have your commands. All right. And we are the automators,              |
| 01:01:42   | but Ken, where can people find you? Well, you can find me personally on Twitter @kcase.                       |
| 01:01:47   | That's my first initial K, Ken, and last name, Case, C-A-S-E. And you can also,                   |
| 01:01:55   | of course, send me, send me email at KC at Omni Group.com. That was very generous of you guys.            |
| 01:02:01   | Don't abuse Ken's email. He's a busy guy. But yeah, definitely. And, and also head over to the           |
| 01:02:07   | Omni Group and that Omni Automation site we've been talking about throughout the show. Like I said,       |
| 01:02:13   | we're the automators. You can find us over at relay.fm/automators. You can find the                |
| 01:02:17   | forum at talk.automators.fm. And anything I missed, Rose? Thank you to our sponsors for                  |
| 01:02:24   | this episode, Pingdom, HREFS, and ExpressVPN. We'll see you in a few weeks. Goodbye, everyone.           |
