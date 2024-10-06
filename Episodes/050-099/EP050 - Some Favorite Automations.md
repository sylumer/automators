---
status: "incomplete"
fc-date:
  year: 2020
  month: 05
  day: 22
fc-category: "podcast"
podcast: "Automators"
published: 2020-05-22
duration: 3491
formattedduration: "00:58:11"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/50"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators050.mp3"
episode: 50
title: "50: Some Favourite Automations"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
David and Rose celebrate episode 50 buy looking at the different flavours of automation and sharing some of their favourite automations for Shortcuts and Keyboard Maestro.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 050 Discussion](https://talk.automators.fm/t/automators-50-some-favourite-automations/7336)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Unlock your productivity with TextExpander.
- [[MindNode (Sponsor)|MindNode]] - Mind map and brainstorm ideas.

# Show Notes
- [Photos Field Guide (2nd Edition) | MacSparky Field Guides](https://learn.macsparky.com/p/photos2) - Sparky's new Photos Field Guide.
- [Rose's Driving Shortcut](https://www.icloud.com/shortcuts/e4cd590d4d0e421eaf7618b6460ff2cf)
- [Rose's Driving Shortcut (Toolbox Pro)](https://www.icloud.com/shortcuts/49f700cd1dca4405b16f4915a723c35a)
- [Keyboard Maestro Script Using AppleScript to Create Contacts - MacSparky](https://www.macsparky.com/blog/2020/5/keyboard-maestro-script-using-applescript-to-create-contacts)
- [Automators #36: Sal Soghoian's Control Panel - Relay FM](https://www.relay.fm/automators/36)
- [Automators #33: Packing List Extravaganza - Relay FM](https://www.relay.fm/automators/33)
- [Automators #31: Making Your ScreenFlow Flow and More with J.F. Brissette - Relay FM](https://www.relay.fm/automators/31)
- [Home | Automators](https://automators.fm/)

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automated. I'm Rosemary Orchard, and I'm joined as always by David             |
| 00:06      | Sparks. Hey David, how are you today?                                                                |
| 00:08      | I'm doing great, Rose. I just launched a new field guide, so I feel like I have the                  |
| 00:13      | weight of the world off my shoulders.                                                                |
| 00:16      | That means that nobody has watched it yet, right? Sorry, I'm being evil today. No, it's              |
| 00:21      | a great field guide. I've been watching some of the little bits behind the scenes, learning          |
| 00:24      | about how photos work, because my photos have been in such a bad state. I've had photos              |
| 00:29      | everywhere and nowhere at the same time, because they were always in good places. I feel like        |
| 00:33      | I'm finally getting everything back together. Yeah, I had a bunch of stuff like exported             |
| 00:37      | into folders over years from different cameras and stuff like that, and I lost a bunch of            |
| 00:41      | photos a couple of years ago. So I'm going through really tidying up my collection, and              |
| 00:45      | it's great that your field guide is helping me do that. So I'd recommend people check                |
| 00:48      | it out.                                                                                              |
| 00:49      | Yeah, so Photos Field Guide is out now. It's almost six hours long. I can't help myself              |
| 00:54      | gang. They just get longer and longer. 122 videos or so thereabouts, and it covers photos            |
| 01:02      | on the Mac, iPad, and iPhone. I had to make two courses because there's two different                |
| 01:07      | platforms, and it came out great. There's an introductory party, so it's on sale for                 |
| 01:12      | about a week or so. So if you want to get it, head over to learn.mexparki.com. There's               |
| 01:16      | nothing in it about automation, really, but I can't help but talk about it everywhere                |
| 01:22      | I go. So if you feel you're interested in photos, I did try to make this one so it's                 |
| 01:28      | accessible to everyone. So if there's someone in your world that may not be writing [[AppleScript\|AppleScripts]]            |
| 01:33      | and shortcuts, but does want to get better at taking pictures with their iPhone              |
| 01:36      | or managing photos, this might be something for them.                                                |
| 01:40      | Okay, we made it to episode 50. Hooray!                                                              |
| 01:44      | Yeah, we did. It's a shiny number, a really round shiny number. I love it. I'm really                |
| 01:50      | glad we made it this far, David. I love making podcasts where people tell me at the beginning        |
| 01:54      | that nobody will ever listen to them, and they'll never last, and then rubbing their                 |
| 01:59      | nose in it when we get to good round numbers like 50, and Automators is definitely one               |
| 02:03      | of those. People said, you're going to make a whole show about automation in no way. Nobody's        |
| 02:07      | going to listen to that. But we made it. We made it. We're at 50. A lot more content.                |
| 02:12      | Yeah, I think everybody listening will agree that the people who said podcasts about automation      |
| 02:18      | really is wrong, because we're having great fun here, and hopefully everybody is learning            |
| 02:22      | and enjoying as well.                                                                                |
| 02:23      | Yeah. One of the things I thought would be fun, we have a lot to cover today in the                  |
| 02:27      | outline, but before we move on, just because we're at 50, I was reflecting on automation             |
| 02:34      | and just kind of my relationship with it recently. I've been doing a bunch of automation. We'll      |
| 02:39      | talk about some of it through today's episode, but just kind of the different kinds of Automators.   |
| 02:45      | I don't know that we've ever really acknowledged it, but if you listen to the show, you know         |
| 02:49      | that Rose and I aren't necessarily the same kinds of Automators. Rose is a developer,                |
| 02:54      | so she comes up with cool automation that often involves programming, and I find myself              |
| 02:59      | more as the want to be hacky UI Automator in the sense that a lot of the automations                 |
| 03:07      | I write just involve scripting an interface or doing something dumb that still makes                 |
| 03:13      | it work, whereas yours are such cleaner and easier to use.                                           |
| 03:18      | Well, you say that, but I also end up spending a lot more time on my automations, relatively         |
| 03:23      | speaking. Maybe for me, it's not a lot of time, but it would certainly be quicker to                 |
| 03:28      | do the approach that you're doing, and I think that there is a lot to be said for the recommendation |
| 03:33      | of, and I will have [[Keyboard Maestro]] click at this image when it appears on the screen               |
| 03:38      | instead of finding out exactly what that's called and how to trigger it via [[AppleScript]]             |
| 03:42      | or something instead, because your solution works 100% of the time, which means it's                 |
| 03:47      | a great automation, because that's the whole point of the automation, right? It works,               |
| 03:52      | and you didn't spend three hours Googling how to find different system preference names              |
| 03:56      | or something like that. So I think we've both got good approaches and that we can both               |
| 04:02      | learn from one another and keep learning as we go forward.                                           |
| 04:04      | Yeah, I do think the big point is there's room under the tent for anybody that wants                 |
| 04:08      | to do automation, whether to you that just means getting really good at text expansion               |
| 04:14      | or going all the way to write X code apps to automate things for you. I think there's                |
| 04:20      | room for everybody, and we really try to cover all of that on the show. So if you're listening       |
| 04:25      | and sometimes we go a little too deep for you, stick around because we're going to cover             |
| 04:29      | the shallow stuff too. That's my specialty, the shallow.                                             |
| 04:34      | And I'm specialty in the deep. So let's meet in the middle as well and cover everybody               |
| 04:38      | hopefully.                                                                                           |
| 04:39      | Yeah. I thought it also would be fun to kind of go back. Since we're at episode 50, are              |
| 04:46      | there any favourite episodes you've had, Rose, and just things we've covered that really              |
| 04:52      | stand out for you so far?                                                                            |
| 04:54      | Yeah. So I would say one of the things that we covered, and a full credit goes to you                |
| 04:59      | for the field guide on this as well, has been [[Keyboard Maestro]]. [[Keyboard Maestro]] has been              |
| 05:03      | one of those apps that I've been using it for years, but really I haven't been scratching            |
| 05:07      | the surface. And if I'm being honest, I'm still not really doing much more than scratching           |
| 05:11      | the surface on it.                                                                                   |
| 05:12      | You know, I have a couple of macros like centre windows and stuff when I'm doing screencasts         |
| 05:16      | online shows so that my windows are in the same place between takes and so on. But I                 |
| 05:20      | haven't done that much with it. But every time I go to look at it, like there's so much              |
| 05:24      | more that I can learn. And that was episode 28 where we dove into [[Keyboard Maestro]]. And               |
| 05:29      | I learned so much in preparation for that episode, during that episode, and after that               |
| 05:33      | episode, you know, it's just really great how much I can keep learning from an application           |
| 05:38      | that I was already using. But, you know, I can dive in further there.                                |
| 05:43      | Yeah, I feel like [[Keyboard Maestro]], you know, talking about the shallow automator, it is              |
| 05:48      | like it is the it is the hammer that that, you know, hammers all nails because it's                  |
| 05:54      | just so great. It has it's so deep in its integration with the Mac operating system.                 |
| 06:00      | And there's almost nothing that you can't do with it. And sometimes you will have to                 |
| 06:06      | resort to like an [[AppleScript]] or something a little more advanced. In fact, one of my               |
| 06:10      | automations I'm going to share in today's show involves [[Keyboard Maestro]] and an [[AppleScript\|AppleScripts]].                 |
| 06:14      | But for so much of the things you want to do, it just works. I mean, you talked              |
| 06:20      | earlier about, you know, find a button on the screen and push it, you know, and one                  |
| 06:26      | of the things [[Keyboard Maestro]] can do is you can just take a quick little screenshot of               |
| 06:30      | the screen and then you can save that image to a [[Keyboard Maestro]] action and just say,                |
| 06:36      | look for this on the screen and click, you know, in the centre of it. And, you know,                 |
| 06:41      | I just got done talking that 122 videos in this new field guide, there's a web interface             |
| 06:46      | where I had to do something 122 times yesterday. And I was not going to sit there and click.         |
| 06:54      | So I made a quick [[Keyboard Maestro]] script that it, you know, I hit command L, which selects           |
| 06:58      | the search bar and then it pays in a specific URL. So then I knew I could reset it every             |
| 07:03      | time. And then I had it look for a specific button on the screen. And then there was a               |
| 07:08      | little pause and [[Keyboard Maestro]] and pauses. Those are, that's, that's the good stuff there.         |
| 07:13      | And so it would pause and then it would click the button and then we'd do it again. And              |
| 07:17      | I, I just hit run and I took the dog for a walk and came back and 122 videos were published          |
| 07:24      | and it was just that easy, you know, and that's the kind of thing with [[Keyboard Maestro]] that          |
| 07:30      | you forget about. I mean, it's easy to come up with the in automation with [[Keyboard Maestro]]           |
| 07:34      | and say, I'm going to set up my screen in a specific way and that's going to be really               |
| 07:37      | cool. But it's just sometimes the little things that you need to do over and over again, just        |
| 07:44      | kind of show up in your day. [[Keyboard Maestro]] is so flexible, you can generate a script               |
| 07:50      | to solve that problem very quickly and it will save you a ton of time. I mean, I mean,               |
| 07:54      | that is true automator stuff right there. Yeah, absolutely. And the other thing that                 |
| 08:00      | that brings up is, you know, you don't have to create a macro that is going to live, you             |
| 08:04      | know, with you for the rest of your life. You know, you can create an automation in this             |
| 08:09      | case, in your case, it was a [[Keyboard Maestro]] macro. I often do this with shortcuts. I will           |
| 08:13      | create a shortcut for a very specific use case, use it and then delete it, like the                  |
| 08:17      | thing may never even get a name. But I just use it and then it's done. And you know what?            |
| 08:23      | That for me is magic. Because you, of course, the automations that you can use day in and            |
| 08:29      | day out definitely are in their place. And they really ought to. But sometimes you just              |
| 08:34      | need an automation to do this one particular thing, like publish those 122 videos. Now I'm           |
| 08:40      | guessing you might keep that macro because I'm guessing you may be planning another field            |
| 08:45      | guide somewhere in your future. I want to use that again. But you know, in this particular           |
| 08:50      | case, it just saved you, you know, 122 times however many clicks that would have taken               |
| 08:55      | to do that. So congratulations. Yeah. And the that one had a unique URL and the button               |
| 09:01      | layout would be different for a different course. So I just trashed it, but it took                  |
| 09:05      | me all of two minutes to make it. And I mean, I cover that. I sound like I'm a self promoting        |
| 09:12      | moron today, but I cover that in-depth in the [[Keyboard Maestro]] Field Guide. But those                |
| 09:17      | little one-timers, once you understand the application, it's very easy to make them.                 |
| 09:22      | So it's not really a problem. So what are some of the other categories of [[Keyboard Maestro]]           |
| 09:28      | work you're doing these days that have changed since we started making the show?                     |
| 09:33      | Well, one of the things that's changed is I am now using pallets. And I've gone a lot                |
| 09:38      | more into groups as well. So I have my [[Keyboard Maestro]] macro sync between my devices, which         |
| 09:44      | is a great idea. And if you're not doing this already, I would recommend that you do                 |
| 09:47      | so. But do it in conjunction with groups, because groups mean that you can say that                  |
| 09:52      | these macros will only trigger on this device or that device, and you can disable them per           |
| 09:57      | device, which is great, because then I have a bunch of macros that appear and only run               |
| 10:01      | on my work machines. But if I think of something when I'm at home and I want to edit my Keyboard     |
| 10:06      | Maestro macro, I can do that from home, and it has that change on my machine. And making             |
| 10:12      | my [[Keyboard Maestro]] macros global really was a big game changer for me, because that                 |
| 10:17      | just, you know, upped everything just a little bit. But it also meant that some macros that          |
| 10:22      | I had, you know, I could have the same macro on every device. So I have one that positions           |
| 10:26      | a window in approximately the centre of my screen. Some people may have heard on a recent            |
| 10:30      | episode of Mac Power Users, I have a crazy large display, I have an ultra wide display. So             |
| 10:36      | it's 34 inches, but that means that it's like two monitors wide. And I don't want, you know,         |
| 10:41      | windows the width of my whole screen. So that macro to put a window in the approximate middle        |
| 10:47      | of my screen with two small windows on either side, that's on all of my devices now. And             |
| 10:51      | that that's been a real game changer.                                                                |
| 10:53      | Yeah, that's a, and that's a screencaster trick too, because if you centre the window,               |
| 10:58      | then when you go to produce your screencast and you want to resize or anything, having               |
| 11:03      | the window centred makes centreing it on the canvas and the [[ScreenFlow]] or the screencasting        |
| 11:08      | application is a lot easier. I did the same thing. It's a very simple script and keyboard            |
| 11:14      | maestro to centre a window. It's a one step script. And I use the keyboard shortcut caps             |
| 11:20      | lock L, which is, you know, the caps lock for me is that super key courtesy of Brett                 |
| 11:26      | Terpstra. And so it's the equivalent of shift command option control. And so super key L             |
| 11:35      | centres the screen and I don't even know why I used L because I think it just was the key            |
| 11:41      | that was under one of my fingers on the keyboard and it was still available, but it works great.     |
| 11:45      | And it's L for logical as well.                                                                      |
| 11:47      | There you go.                                                                                        |
| 11:48      | So there we go. Yeah, no, I, my one for screencasting actually resizes the window. So it makes the   |
| 11:55      | window full screen to start with or full size to start with, and that resizes it down to             |
| 11:59      | 80% and then it centres it because that way I always have exactly the same size window               |
| 12:05      | for all of my screencast. So if I have to do another take, spoiler, when I, when I'm                 |
| 12:08      | recording my screen, sometimes it's actually to take stitch together, but because I've               |
| 12:12      | positioned my windows with [[Keyboard Maestro]], it's really hard to tell because, you know,             |
| 12:17      | everything's in the same place, which is great for me.                                               |
| 12:19      | I'm a base camp user and you know, I'm really torn on base camp. Sometimes I really love             |
| 12:26      | the service. It's basically a website, you know, file management system and much more.               |
| 12:33      | But with some of the day job stuff I do, it is very helpful, but it is one of the least              |
| 12:39      | automation friendly services you could ever have. I mean, it's just, there's just not                |
| 12:43      | a way to automate a lot of things that you do base camp, which I'm used to automating                |
| 12:46      | everything. So lately I've been using [[Keyboard Maestro]] and I just have that caps lock plus           |
| 12:52      | B and it's a palette of tools I've developed for base camp and it's, you know, a lot of              |
| 12:58      | them use unique URLs, which you can automate. Some of it is using Zapier, but I'm just trying        |
| 13:05      | to find as many ways as I can to automate this process. I'm still not even convinced                 |
| 13:09      | like some part of me is saying, thinking I should just go to [[DEVONthink]] or do something           |
| 13:13      | local on my system, but a [[Keyboard Maestro]] is giving me a way to try and add automation              |
| 13:21      | to something that really isn't very automation friendly.                                             |
| 13:23      | Yeah. And I think that that is something else to keep in mind, you know, just because we're          |
| 13:28      | using an application that maybe itself doesn't have support for all of this automation goodness      |
| 13:31      | doesn't mean that you can't automate it anyway. I will say I've also had to do some things           |
| 13:36      | with base camp. And one of my favourite tricks has been Zapier with a web hook. So you the            |
| 13:42      | web hook is your trigger, and then you can trigger that web hook from shortcuts or keyboard          |
| 13:46      | maestro or, you know, pretty much any other apps that can send a web hook. And that has              |
| 13:52      | been a great way for me to automate some base camp stuff because it gets the data into base          |
| 13:56      | camp without me having to write scripts that can do the authentication dance that's required         |
| 14:00      | to connect to the base camp API.                                                                     |
| 14:02      | Yeah. And using Zapier a great way to automate something like base camp is usually creation          |
| 14:10      | stuff, like create a project, create a note, all that stuff is very web hook automation              |
| 14:17      | friendly. But, you know, the deeper stuff that we do, like append a note and things                  |
| 14:22      | like that we use can do on our native apps really isn't very easy on a web service. And              |
| 14:30      | that's when you get into something like you have a unique URL. And this is the kind of               |
| 14:34      | getting back to the hacky automator that I am, I will use a unique URL, get into a text              |
| 14:39      | field and I'll hit literally a keyboard shortcut to move the cursor to the bottom and then           |
| 14:46      | type text in. And then, you know, I'm just using like robot, you know, make the Mac                  |
| 14:53      | pretend that human is sitting at me and push these keys type automation is very crude, but           |
| 14:58      | it works.                                                                                            |
| 14:59      | Well, that's the trick, isn't it? If it works, then it's an automation and it's successful.          |
| 15:04      | And that's what people should remember if they're, if they're new to automation or thinking          |
| 15:07      | their automations aren't very good. I don't care if you don't think it's very good. If               |
| 15:11      | it automates something, then you're an automator. Congratulations, you get the badge.                |
| 15:15      | Yeah, that's cool. So [[Keyboard Maestro]], I agree is one of the most interesting topics                |
| 15:21      | we've been able to cover here. The other one and one you've made reference to already                |
| 15:25      | is shortcuts. I feel like shortcuts is the spirit animal of this podcast because you                 |
| 15:31      | and I, as we've mentioned, we started recording the show before [[Apple]] announced shortcuts.           |
| 15:36      | And then, then they announced it. So we had to go back and rerecord the first couple episodes,       |
| 15:43      | but we've been running the show, the lifespan of shortcuts. And we've had some great coverage        |
| 15:49      | of it over the, you know, last couple of years. We've, I've really enjoyed having app developers     |
| 15:56      | in that are building tools for shortcuts and hearing their stories and what they've made             |
| 16:00      | and, and how they're automating. And we're going to have more of those going into the                |
| 16:03      | future. We're already working on that. But I also just like in general, the way shortcuts            |
| 16:09      | is the [[Keyboard Maestro]] of iOS. And in some ways it's worse and then some ways it's better.          |
| 16:15      | But it's been real fun covering that here on the podcast.                                            |
| 16:19      | Yes, it really has. And, you know, seeing how it's evolved as well, because when shortcuts,          |
| 16:24      | you know, before shortcuts existed, when it was workflow, you know, everybody was worried            |
| 16:27      | about what was going to happen and seeing it, you know, evolve from workflow into shortcuts.         |
| 16:32      | And then from shortcuts to shortcuts with, with actions that could be added by developers            |
| 16:38      | and shortcuts to shortcuts that could be added by developers that can take parameters and            |
| 16:42      | then a whole suite of applications. That's what I'm going to call it because it really               |
| 16:46      | is it may all be from different app developers. But all of these app developers are working          |
| 16:51      | together to, you know, towards one goal to make shortcuts better. And I'm really excited             |
| 16:58      | to see that. And things like [[Data Jar]] and [[Charty]] and all of these other great applications,          |
| 17:02      | you know, they really make shortcuts better. And we should all be excited that this exists.          |
| 17:08      | Even if you may not personally have a need to create charts in your shortcuts, other                 |
| 17:12      | people do and maybe one day you will. And it's really cool that that's even possible.                |
| 17:18      | So I'm really excited by all of that. Yeah, just third party features. And it's                      |
| 17:24      | impressive because the memory restrictions that these shortcuts have. And, you know,                 |
| 17:29      | it's not like an app where you can just take over the phone. It does require very careful            |
| 17:35      | management of memory and programming. It's beyond my pay grade. I know that. And nevertheless,       |
| 17:42      | these developers come up with these amazing things. [[Data Jar]] is, I think, probably the                |
| 17:47      | most useful addition to shortcuts I've seen because now I've got this this app full of               |
| 17:53      | global variables that I'm constantly hitting. And it's like that the existence of a known            |
| 18:00      | data store for me actually increases the options for me to create shortcuts.                         |
| 18:05      | Yes, it does for me too. And we had a recent episode with Scotty Jackson about, you know,            |
| 18:12      | how he's using [[Data Jar]] as like a back end of data for shortcuts, which is, you know,                 |
| 18:17      | what it is, but the fact that it's there and you can go straight into it and edit, you               |
| 18:22      | know, these, these, these dictionaries of data or whatever it is that you're storing                 |
| 18:26      | outside of the shortcuts app for me has been a game changer because I have started putting           |
| 18:32      | some stuff in there just because I can. And I'm not sure yet I'm going to need it in                 |
| 18:36      | shortcuts, but I just need like a tiny little database where I can store a bunch of values.          |
| 18:40      | And then, you know, in some cases, it's turned out I actually do need this in shortcuts.             |
| 18:45      | And it's great that it's there. And in other cases, I may not need it in shortcuts, but              |
| 18:48      | I can go and look at it and view it on all of my devices. So it's great.                             |
| 18:52      | My favourite guest so far in the 50 episodes has been Sal. So going in, he's been on a                |
| 18:56      | couple of times. Sal is so, he loves automation so much it's infectious. If you meet him or          |
| 19:02      | talk to him or hear him on the show, you know, this guy believes in this so much. And I loved        |
| 19:07      | the episode where he came on to share that crazy control board he made. And we'll put                |
| 19:13      | a link to it. And this is something if you want a fun weekend project, try and set up                |
| 19:18      | Sal's control board with your iPad and your Mac. He's driving [[AppleScript\|AppleScripts]] from the,                |
| 19:23      | from the glass screen of his iPad. It's just kind of amazing. And, you know, it's just,              |
| 19:29      | it just epitomises Sal's creative thinking about automation and, and what he's done for              |
| 19:35      | the Mac and iOS now.                                                                                 |
| 19:37      | Yeah, it is. And that's one of the things where I, I've looked at this and I've gone                 |
| 19:42      | back and forth on using it. But in general, it's really nice to have this here as a way              |
| 19:47      | to keep it. And Sal's just a great fan of automation and, and somebody, you know, that               |
| 19:51      | we should all be, you know, remembering and, and talking to regularly in the community               |
| 19:55      | because he has so many great ideas. So it's been a real honour to have him on our show.               |
| 19:59      | Yeah, I like what he did and I like the technique of it, which gives me ideas to other things.       |
| 20:04      | But to be honest, I actually don't use it. Sal, if you're listening, I'm sorry. But because          |
| 20:08      | I use these keyboard and maestro palettes, so it kind of solves the scratches the same               |
| 20:13      | edge for me.                                                                                         |
| 20:14      | I go back and forth on using it. I actually have it set up for, for my work device because           |
| 20:17      | my work device is a 12 inch MacBook right now. Yeah. And for those of you familiar with              |
| 20:22      | the 12 inch MacBook, it is very, very cute. It's very, very light. And that's about all              |
| 20:27      | it's got going forward because it's got one USB C port on it, not even Thunderbolt 3.                |
| 20:32      | And it's super under powered. So using, in my case, I can't even use Luna display because             |
| 20:38      | I don't have enough ports for this. So I'm using the macOS Catalina screen extension                 |
| 20:44      | to do this. But, you know, having that both as an extra display and then also as a palette           |
| 20:49      | of macros that I can, I can tap to run has been a game changer.                                      |
| 20:53      | Well, I will say about that, though, is he opened my eyes about some of the [[AppleScript\|AppleScripts]]            |
| 20:58      | to control system preferences and system events. And a bunch of those scripts, I've just basically   |
| 21:04      | copied any [[Keyboard Maestro}] into a, into a palette. But yeah, that was probably one of                |
| 21:10      | my favourite guests. And what about you? Any particular guest stand out for you as we get             |
| 21:14      | through episode 50?                                                                                  |
| 21:15      | I mean, it's, it's really hard to pick a favourite because I've loved everybody that                  |
| 21:19      | we've talked to. And, you know, I, I don't think I can pick one because that, that might             |
| 21:25      | be unfair though. Cell, of course, is great. But maybe if you had to poke me, I might go             |
| 21:31      | with JF for that just because he showed me so many little things that you can do and                 |
| 21:35      | the art of looking for where you can automate things, you know, obviously you and I were             |
| 21:40      | both good at spotting, you know, places where we can automate stuff. But, you know, he really        |
| 21:44      | broke down, you know, where you can go back and look for things and places that you can              |
| 21:49      | automate stuff.                                                                                      |
| 21:50      | Yeah. Well, JF is one of my best friends. So it's hard for me not to say to agree with               |
| 21:54      | you there, but the, but he, he does a lot of editing work. And this is a guy who makes               |
| 22:00      | these really tiny keyboard and maestro scripts. Like I think he's got one to eliminate my            |
| 22:05      | ums because he does some editing for me. And he just pushes a button and it just, it goes            |
| 22:10      | through and just deletes just enough to get rid of the um, which comes out of me once                |
| 22:14      | in a while, but also preserve the rest of the text. He's got like all these amazing                  |
| 22:18      | little keyboard and maestro scripts, which I think they kind of fit in the sparky, hacky             |
| 22:23      | category in terms of they're just hitting a little couple of keyboard shortcuts, moving              |
| 22:28      | the mouse, whatever. But, you know, when you're doing this for a living and you're grinding          |
| 22:34      | through so many videos, it really makes a difference.                                                |
| 22:37      | It really does. Um, and he's, he's let me know that there's an L for it. Uh, so it takes             |
| 22:42      | expansion, um, macro that he's using that has my name in it. Uh, so I'm hoping to get                |
| 22:46      | ahold of that one from him at some point in the future.                                              |
| 22:50      | This episode of the automators is brought to you by mind note, mind map and brainstorm               |
| 22:55      | your ideas with my note. Every great idea or project starts with a single thought, which             |
| 23:01      | leads to another and another and then a million more. You can quickly feel overwhelmed, but          |
| 23:06      | you have important work to do. So you need an easy way to log those thoughts. And this               |
| 23:11      | is where my node comes in. My node helps you capture your thoughts and create a clear picture        |
| 23:16      | of your ideas. I love my note because I can move things around. I can just drop ideas                |
| 23:21      | in mind node canvas. And as I think about it further, I can go in and move them around,              |
| 23:27      | make them work for me with my node. You can make it part of your workflow by taking advantage        |
| 23:32      | of its integration with shortcuts to create new mind maps, launch the quick entry bar,               |
| 23:37      | export documents, export formats. You can even create documents to the predefined titles,            |
| 23:43      | texture dates. So you can template your mind maps with automation. I really like using               |
| 23:48      | mind node when I have meetings with clients. A lot of times we're going over ideas for               |
| 23:53      | a contract I'm writing for them and I'll put all the ideas on the page with my node and              |
| 23:58      | then start combining them together right in front of the client. It's a really great way             |
| 24:02      | to kind of come up with ideas and make it work for them. When I'm done, I can use the                |
| 24:07      | shortcuts automation to automatically generate a PDF and send it to the client's email               |
| 24:12      | so they can have it to look at it later. There's just so many ways I use mind node.                  |
| 24:16      | The Photos Field guy that I just released started out as a mind map that I created with              |
| 24:20      | my node. It's just a great application and I love it. The developers never stopped working           |
| 24:25      | on this app. They just released version 7.2 last week. It has full iPad OS trackpad support,         |
| 24:32      | which is awesome. My node is available for iPad, iPhone, and Mac and it's all on the                 |
| 24:38      | App Store. So start editing features for free and you can try all the features with a free           |
| 24:43      | two-week trial. So what are you waiting for? Head over to the App Store, download mind node,         |
| 24:47      | and start controlling those crazy ideas in your head and get them captured into a nice               |
| 24:52      | mind map. You can learn more over at mindnode.com, M-I-N-D-N-O-D-E.com. Let them know you heard      |
| 24:59      | about it here on the Automator's Podcast and our thanks to mind node for their support               |
| 25:04      | of this show and all of Relay FM. So Rose, what automation problems have you solved recently?        |
| 25:11      | Well, I've solved many problems recently, not exclusively automation related. So as people           |
| 25:17      | may have heard, I'm in the process of moving back to the UK and one of the things that               |
| 25:21      | I needed to solve as part of my move was I need a car. I'm not living in a city. Public              |
| 25:26      | transport here is intriguing at the best of times, horrendous at the worst, and unfortunately        |
| 25:31      | the area I'm living in is not public transport conducive. So after doing a little bit of             |
| 25:35      | messing around trying to solve the public transport issue, I caved and I got a car.                  |
| 25:40      | But it's not a car with CarPlay or any of that. So I've been trying to figure out how                |
| 25:44      | can I automate a dumb car, which it's a good car, it drives and so on. And I've had to               |
| 25:50      | do a whole bunch of little things just to make my life a little bit easier with a car.               |
| 25:55      | And I'm going to confess, this is mostly NFC tag related because NFC tags are one of those           |
| 26:01      | shortcut automation triggers there. You can just run a shortcut if your iPhone is unlocked           |
| 26:04      | when you tap the NFC tag and it just goes. And that for me has really been great. So                 |
| 26:11      | I have an NFC tag on the mount that I put my phone on on the dash, which has to fit                  |
| 26:16      | into the CD player because this car doesn't have Bluetooth or anything, or let alone                 |
| 26:20      | a phone holder. And so I tap my phone on the tag on the mount just as I'm putting my phone           |
| 26:26      | into it. And then it goes off and it triggers a few things for me. So first of all, it figures       |
| 26:33      | out, look to my calendar. And if there is an event with an address in it, all my calendar,           |
| 26:40      | you know, sometime today, anytime today, pretty much, it shows me a list of those events so          |
| 26:45      | that I can pick from one to get driving directions to it, or I can say no driving directions.        |
| 26:50      | So I have a series of choices. And then if I if I pick to get driving directions, sorry,             |
| 26:58      | I have no driving directions and I have other as well. So if I pick no driving directions,           |
| 27:03      | that just skips us. If I pick other, then it allows me to input an address with dictation,           |
| 27:10      | because I'm probably about to start a car, so I shouldn't be typing. And then and if                 |
| 27:14      | I pick one of them, then it uses that. And then I found around here, Google Maps is actually         |
| 27:19      | best. I wanted to use [[Apple Maps]], but Google Maps is better. It's for for this area. And             |
| 27:24      | it shows the speed limit on the screen and everything for me all the time, which I noticed           |
| 27:27      | [[Apple Maps]] not always doing. So it gets the directions using that for me. And it will do             |
| 27:32      | that right at the end of the script then. And then it also picks a random driving playlist.          |
| 27:37      | I've created five different driving playlists. And it picks a random one of those for me,            |
| 27:41      | and then it plays it. And, you know, that's that's it. But at the same time, it's really             |
| 27:47      | nice. And I'm considering building a list of regular locations that I may drive to,                  |
| 27:51      | that I can have inside of other so that I can pick one of those or type something else.              |
| 27:57      | Yeah, that makes a lot of sense. That makes a lot of sense. Now, because what I think                |
| 28:02      | it's called upcoming events, there is a widget on the iPhone that shows you upcoming events.         |
| 28:07      | You just slide over. And I actually, because I considered that to scripting driving directions,      |
| 28:15      | but just using the upcoming events thing, it always shows me the events I've got on my               |
| 28:18      | calendar already. So I've never bothered to script that because I could just tap on one.             |
| 28:26      | But I like well, in this case, because I also want the music, it made sense to do it inside          |
| 28:30      | of the shortcut for me. Yeah, exactly. And and I also the the frequent destination stuff             |
| 28:36      | is nice. Because you can just when you're in the car, you can make it easy to go there.              |
| 28:43      | Although, if they're frequent destinations, do you need directions? Is there a way to                |
| 28:47      | script because in [[Apple Maps]], you can manually tell it, you know, just give me directions,           |
| 28:54      | give me verbals, you know, so it just gives it on the screen. Because I actually like                |
| 28:58      | knowing ETA information and how long until my next turn, even though I know where I'm                |
| 29:04      | going. So I use directions all the time for that. But I don't know that there's a way                |
| 29:09      | to script that to turn off the the voice directions in Automator. I'm sorry, shortcuts.              |
| 29:16      | I don't think there is either, especially in my case, I'm using Google Maps as well.                 |
| 29:20      | So I'm not even I don't even have a lot of the other options. Because so inside, I should            |
| 29:28      | know I'm using the standard [[Apple]] action, which is show driving directions to destination            |
| 29:34      | using. And then if you tap on maps, then depending on the apps that you have installed, you will     |
| 29:39      | have a series of options. So in my case, I have maps, city map or Google Maps and ways               |
| 29:43      | installed. And so I've selected Google Maps. But I don't get to choose with or without               |
| 29:49      | audio. So one of the things I do have to do, which is why I do this when I'm still parked            |
| 29:53      | on the driveway or in the car park, depending on where I am, is I then have to tap it to             |
| 29:58      | turn off audio directions if I don't want them. But yeah, like you, even if I don't need             |
| 30:03      | the audible cues, I like to have it shown on my screen just as a prompt of yeah, you're              |
| 30:09      | you're supposed to turn left here. And also, I like the frequent destinations because there          |
| 30:14      | are roadworks. So I went on a trip today, I went on a picnic. It was very fun. We all                |
| 30:18      | stayed long distances away from each other and shouted at each other instead of hanging              |
| 30:22      | out close together so that nobody gets sick. But you know, so what is great is there were            |
| 30:30      | roadworks on the way I knew where I was going, but there were roadworks. And it told me there        |
| 30:33      | were roadworks and offered to divert me around them because as well as there being roadworks         |
| 30:38      | that the road surface was actually loose. So there were like chippings flying everywhere             |
| 30:42      | and so on. And you know, I've just got this car, I'd like to keep it in decent condition.            |
| 30:46      | So I went around and that that for me was really useful to have.                                     |
| 30:50      | Yeah, in Southern California, that's another reason why you always want the directions               |
| 30:54      | because it'll give you alternate directions if there's traffic or an accident. And you               |
| 30:59      | don't know that unless you've got a device doing the work for you. I think if I were                 |
| 31:03      | to design that, I would probably start actually with frequent. I would not make it a separate        |
| 31:09      | tap to get to frequent destinations. I would probably have a screen that has frequent destinations   |
| 31:13      | and upcoming events. I'm considering doing that. I'm actually building the menu right                |
| 31:18      | now using the toolbox pro action to build pretty menus so that I can have different                  |
| 31:23      | icons for different events or sorry for different locations. So I could just put a calendar          |
| 31:29      | icon for my next, you know, couple of calendar events and then put, you know, like a location        |
| 31:35      | pin as my my icon for the other ones, which might be a good idea. I may have to rework               |
| 31:40      | this before it gets into the show notes this week. Toolbox pro is so great. And and the              |
| 31:45      | ability, I mean, that's just another thing. I mean, who would have thought that we could             |
| 31:49      | actually customise the user interface with icons, you know, [[Apple|Apple's]] not going to bother              |
| 31:53      | doing that. But through a third party app, we can. I love that. All right. So I need                 |
| 31:58      | to know just for my own knowledge, you said you've got multiple driving playlists. What              |
| 32:04      | how, how do you break them up? I mean, like is one just ABBA? Yeah. Okay. It's not just              |
| 32:12      | ABBA, but it's ABBA or another kind of similar poppy fun music. I had pegged you as an as            |
| 32:18      | an ABBA, ABBA lady. I figured you'd like ABBA. Yeah. Yeah. So I have I have a couple of              |
| 32:24      | different ones. So I have a musicals one, which is okay. Mama Mia was in there, but                  |
| 32:28      | that it's not an ABBA playlist because that's apart from the actual like piano. That's that's        |
| 32:33      | not the ABBA people. But, you know, so I have a musicals one, I have like a more poppy               |
| 32:40      | one, I have a more rocky one. And then I have like a couple of other ones, which I've just           |
| 32:46      | put together over the years. And I realised I had like four different driving playlists.             |
| 32:49      | I was like, let's make it an uneven five, which happens to coincide with episode 50.                 |
| 32:54      | I was not going to make 50 playlists and I've just added them and I pick one at random.              |
| 33:00      | Whenever I drive, I make sure to never listen to bebop because I always speed when I play            |
| 33:04      | bebop music. I can't. It's like, I just go fast. I have to say like some of this, like               |
| 33:10      | I have, I do have to occasionally say hey, magic lady next. And then I'm going to go                 |
| 33:17      | back and make a smart playlist of stuff that I've skipped inside of my driving playlist              |
| 33:20      | recently so that I can exclude those from my driving playlists because sometimes something           |
| 33:24      | comes on and you're there going, okay, like this is a great song and I love it. But I'm              |
| 33:29      | putting my foot down on the accelerator a little too hard. I'm going to break the speed              |
| 33:32      | limit if I'm not careful.                                                                            |
| 33:33      | A couple of other questions for you. Have you considered, number, have you considered                |
| 33:39      | like adding do not disturb like instructions or maybe flipping the screen from dark mode             |
| 33:45      | to light mode to pay on the time of day?                                                             |
| 33:48      | So I automatically, I have my phone automatically searched between light and dark mode depending     |
| 33:52      | on the time of day. So theoretically, that should not be a problem for me. I wanted                  |
| 33:57      | to have do not disturb or driving enabled automatically by my shortcut. And I looked                 |
| 34:04      | and I looked and I looked, there is no control for do not disturb or driving inside of shortcuts.    |
| 34:12      | And this is disappointing. I have to say, I would really like this for all of the people             |
| 34:16      | like me who have older cars, you know, we can't automatically enable do not disturb                  |
| 34:20      | or driving unless it automatically enables every time you get in a vehicle that can go               |
| 34:25      | fast, which when you're a passenger, you don't necessarily want do not disturb or driving            |
| 34:29      | enabled automatically. And you don't want to have to remember to do it manually. So actually         |
| 34:35      | right now, the very last action inside of my shortcut is a notification to enable do                 |
| 34:40      | not disturb or driving.                                                                              |
| 34:43      | So that I can enable it manually. But I'm really, really, really hoping that the shortcuts           |
| 34:48      | team are listening and they poke the right people so they can add the ability to enable              |
| 34:54      | and disable do not disturb or driving. Because the other thing I would really like to add            |
| 34:58      | to the shortcut is just storing something in data at the top so that when I tap my phone             |
| 35:06      | on the NFC tag, if it's currently enabled, then it disables everything. And so it pauses             |
| 35:12      | the music, you know, turns off do not disturb or driving. And otherwise, when I tap it,              |
| 35:18      | it enables everything and gets me going. And, you know, if, you know, so that I can                  |
| 35:23      | do two different things, but right now I don't need to do that because I can't enable do             |
| 35:27      | not disturb or driving sadly.                                                                        |
| 35:29      | Now if you do the if you go into the do not disturb setting and do the automatic do not              |
| 35:35      | disturb while driving, I believe that is speed related. If you're going at a certain speed,          |
| 35:40      | it turns on. That's kind of there. Yeah. Right. I would.                                             |
| 35:44      | Yeah, it is. But then as I said, if you're a passenger, and I'm frequently a passenger               |
| 35:49      | in other people's vehicles, or if you get on a bus or train or plane, it automatically               |
| 35:54      | enables and it can be a bit of a pain, which is a real shame because it's a great feature.           |
| 35:59      | And if most of the time you're driving yourself, then it's perfect. But in my case, I'm driving      |
| 36:04      | myself maybe a third of the time. So I don't really need this feature enabled most of the            |
| 36:11      | time because if I'm, you know, sending people messages on the way somewhere and then I stop          |
| 36:15      | getting them because do not disturb while driving is enabled. And it's kind of annoying.             |
| 36:20      | Yeah, I get it. I've activated it while biking, but it's fine. I don't, I shouldn't be texting       |
| 36:26      | while biking either. But yeah, that's cool. One other dumb question, and this is just                |
| 36:32      | something I've never tried before. You said you've used an NFC tag that is in the iPhone             |
| 36:37      | holder or stand in your car. I've never left an iPhone attached to an NFC tag. Does it               |
| 36:43      | re-trigger the shortcut at any point during the trip?                                                |
| 36:46      | No, because so the way that you trigger an NFC tag on your iPhone is the reader is actually          |
| 36:52      | near the camera area at the top of your phone. So what I do is I tap the camera area of the          |
| 36:58      | phone to the NFC tag, but then when it actually docks, the NFC tag is round about against            |
| 37:03      | the [[Apple]] logo. I mean, it should be approximately there because the mount sits just below the       |
| 37:09      | volume button height wise because otherwise if it's pressing all the buttons and things              |
| 37:12      | can go a little bit crazy and you're wondering why you don't hear any music, that did not            |
| 37:16      | happen to me today at all. So, but because it's down then sitting around the [[Apple]] logo              |
| 37:22      | area, it doesn't trigger it because there's no reader there. So it's not a problem, fortunately.     |
| 37:27      | Really? Is that sensitive? Because I use the NFC tags, but I've just never thought about             |
| 37:31      | leaving one near one after I trigger it. Usually, I've got one in the door jam.                      |
| 37:36      | Yeah. In this case, it seems to be working fine.                                                     |
| 37:39      | Yeah. Interesting.                                                                                   |
| 37:40      | Yeah.                                                                                                |
| 37:41      | Well, I'll tell you, I had an automation thing. I kind of went the Rose Mary Orchard direction       |
| 37:46      | this week. So I created a [[Keyboard Maestro]] script to create a new contact in [[CardHop]].                |
| 37:53      | You know, [[CardHop]] is a great app. It's like made by the same people, makes [[Fantastical]].                 |
| 37:57      | And it has the same idea of you can type one line of syntax and create a contact the             |
| 38:02      | same way you can do a calendar event with [[Fantastical]]. And, you know, kind of getting               |
| 38:08      | back to automating Basecamp, one of the things I do with [[Basecamp]] when I make a new project          |
| 38:13      | is I also create an email archive for that project. And the way it works is you just                 |
| 38:17      | blind copy every email or forward every email related to that project to this magic email            |
| 38:23      | address and then it saves it and indexes it for you. So it's kind of a nice way to keep              |
| 38:28      | emails together with documents in a project. But the idea of going into, you know, Basecamp,         |
| 38:36      | being in a new email address every time we create a new project and then creating a new              |
| 38:41      | contact, it just makes me want to yank my hair. I mean, the [[Apple Contacts]] app is terrible           |
| 38:47      | about adding new contacts. It requires a combination of mouse clicks, mouse moves and keyboard entry |
| 38:56      | that is, you know, it's almost a masochistic how hard it is to create new contacts. I know           |
| 39:02      | people are rolling their eyes, but it's just, it's too much, right? I don't want to spend            |
| 39:05      | all that time. The very thought of doing it means that then I don't get the emails entered           |
| 39:12      | and then I get an email that I want to forward to a project and inevitably I haven't created         |
| 39:16      | the contact card because I just couldn't bring myself to do it. And so I had made one with           |
| 39:21      | CardHop that basically you'd copy it to, you'd copy the magic email address, put it in a             |
| 39:28      | paste buffer and then it would run a script and it'd ask you the name and it would open              |
| 39:33      | CardHop and enter the text for you and create the contact entry. And that was great, but             |
| 39:38      | you know, there's a lot of people that don't own [[CardHop]] and also this is one where I felt           |
| 39:43      | like, you know, going directly into the contacts database would feel better than, you know,          |
| 39:49      | watching it appear on the screen because sometimes it doesn't always work right when you're opening  |
| 39:54      | a third-party app and you're trying to type a string of text if the, you know, the application       |
| 39:58      | open gets behind, you don't get the text in right and it just felt a little clunky to                |
| 40:03      | me. So I wanted to write directly into the contacts database. [[Keyboard Maestro]] does not              |
| 40:09      | have contacts, actions built, you know, it does has a lot of built-in actions, but for               |
| 40:15      | whatever reason, contacts is not one of them. There's not like a built-in [[Keyboard Maestro]]           |
| 40:20      | action to create a new contact or to alter a contact. So I went, you know, to our old                |
| 40:26      | different [[AppleScript]]. And, you know, with a couple of Google searches, I was able to               |
| 40:29      | very quickly get the syntax to create a new contact card using [[AppleScript]]. And I opened            |
| 40:35      | up the script editor on the Mac and ran some samples and very quickly had it running the             |
| 40:40      | way I wanted. But this is a case where I want to run an [[AppleScript]] that's going to have            |
| 40:46      | changing data in it. You know, the actual email is going to change and the description               |
| 40:50      | of the project is going to change. So I wanted to write variables into an [[AppleScript]]. And          |
| 40:56      | I wanted to run the whole thing through [[Keyboard Maestro]] because I already have a whole series       |
| 41:01      | of Basecamp related automations built on that caps lock B button. So I have like a palette           |
| 41:07      | of, and I just wanted to make this one more thing on the palette. So the challenge I had             |
| 41:12      | was to create a [[Keyboard Maestro]] script that would run an [[AppleScript]] that would grab               |
| 41:18      | a variable that I created in [[Keyboard Maestro]] and insert it into an [[AppleScript]]. And I              |
| 41:23      | had never done that before. So I had to do some research and I figured it out. So, and               |
| 41:27      | I'll put the, I made a video on it and I'll put it in the show notes. But the, so what               |
| 41:32      | I do in the [[Keyboard Maestro]] half of it is the first thing I do is I grab a prompt from              |
| 41:38      | user saying what's the name of the project, you know, because it's a, it's a new Basecamp            |
| 41:42      | project every time I do this. So I type in the name of the project. And then, and then               |
| 41:48      | it takes the clipboard because it, because when I do this, I will have already copied                |
| 41:53      | the email from the Basecamp website. So I, you know, they've got one button on the screen.           |
| 41:58      | In fact, I could automate that with [[Keyboard Maestro]] to have it actually look for the                |
| 42:02      | button and push it, but I haven't done that yet. But so I push the button on the website,            |
| 42:06      | copies it to my paste buffer. And then I run the script. It says, okay, what's the name              |
| 42:09      | of the project? So it assigns a variable to the name of the project. And then it grabs               |
| 42:15      | the clipboard contents and assigns that to a variable as well. And the re, I'll explain              |
| 42:22      | why I did that in a minute. But so at the end of the process, the [[Keyboard Maestro]] half              |
| 42:26      | of this is I've created two variables. One is the name of the project. One is the magic              |
| 42:31      | email address. And then I run it a [[AppleScript]]. And the way you get [[Keyboard Maestro]] variables      |
| 42:38      | into an [[AppleScript]] is a [[AppleScript]] to [[Keyboard Maestro]]. There's actually a Keyboard              |
| 42:43      | Maestro is [[AppleScript]] addressable. So you can set a [[AppleScript]] variable to the contents          |
| 42:52      | of a variable from [[Keyboard Maestro]]. So all you do is say, you know, get or set magic                |
| 42:58      | email, which is the magic email address to the, the variable, you know, clipboard email              |
| 43:06      | that I had in [[Keyboard Maestro]]. So all I'm doing in that step is grabbing a variable                 |
| 43:10      | out of [[Keyboard Maestro]], inserting it into memory for [[AppleScript]]. And I do that for                |
| 43:14      | both of those. So it's a, it's like a three step keyboard, [[AppleScript]] to grab the variables        |
| 43:20      | out of [[Keyboard Maestro]]. Then once I have those, I'm golden, you know, I can just run                |
| 43:26      | the typical create a new contact [[AppleScript]] command. And mine is very simple because I             |
| 43:32      | don't have email address. I'm sorry, I don't have phone numbers and, and physical addresses.         |
| 43:37      | All I'm doing is one email address and the name of the organisation. And when you make               |
| 43:43      | that identification with the [[AppleScript]] name of organisation, but you don't do first               |
| 43:48      | name and last name, it automatically creates a contact and marks it as an organisation               |
| 43:54      | because it says, Hey, he didn't give me a first or last name. So I'm going to assume                 |
| 43:57      | this is an organisation. I thought that was really smart by the contacts slash [[AppleScript]]          |
| 44:02      | team. And then I just add to that the, the magic email. And then the final thing I do                |
| 44:08      | is you can use an [[AppleScript]], add a contact to a group. So then I add the new contact              |
| 44:14      | to the group called base camp filings, which is a specific group of my contacts database.            |
| 44:20      | And all that happens in the background when you run this little script. And when I'm done,           |
| 44:25      | you don't see anything. All you do is you copy the, you know, the email, you hit the                 |
| 44:31      | caps lock B, and then you type in the project name, hit enter, and it's done. You don't              |
| 44:35      | actually watch anything happen, but it's there. And it came out really nice. I was happy             |
| 44:40      | with it. Yeah, I'm really pleased that that sounds like as something that's really useful            |
| 44:44      | for you. And I kind of feel like I should probably have something like this as well.                 |
| 44:48      | I've been getting a lot of new contact details that work recently. And it's like, Whoa, okay,        |
| 44:52      | what am I doing with this? I really need to, you know, actually start storing these. So              |
| 44:55      | I'm not searching for a previous email from somebody finding their email address and creating        |
| 44:59      | a new email to them. You know, I think I'd be better off with a little bit of keyboard               |
| 45:02      | maestro magic in my life. Well, you know, there's a lot of times you don't need it because           |
| 45:07      | like an email is a good example, you can add an email, an email information to contacts              |
| 45:14      | right from with the app with data detectors. [[Apple|Apple's]] done a good job of kind of simplifying          |
| 45:18      | that. You can, but I would like it to be an appellate on my screen. So it kind of prompts            |
| 45:23      | me to do this, if that makes sense. It sounds a little weird, maybe, but I feel like the             |
| 45:28      | fact that it shows me like the name of the person instead of the email address, because              |
| 45:31      | they figured that out from all the deep information that's available to them is great, but it        |
| 45:35      | would also be great if it just created the contacts. So putting a macro on my screen                 |
| 45:39      | to prompt me to do it, I think is probably going to be a good way to go there.                       |
| 45:42      | Yeah, the thing I like most about this one is because it writes basically directly to                |
| 45:47      | the context database, and there's no user interface element going on. It's rock solid.               |
| 45:52      | And it happens very fast. Quite often the context for this is I get an email related                 |
| 45:56      | to a project, and I realise I don't have one. So I just open the base camp window, copy              |
| 46:02      | it, run the script, and then I can finish the email and add it to that project in very               |
| 46:07      | little time.                                                                                         |
| 46:08      | This episode of Automators is brought to you by TextExpander from our friends at Smile.              |
| 46:14      | Your time is valuable. Don't spend it typing the same thing over and over. Instead, use              |
| 46:19      | a quick search or an abbreviation.                                                                   |
| 46:23      | Abbreviations expand simple things like your phone number or your address, or they could             |
| 46:27      | expand more complex things like forms with fill-in fields for email and message replies.             |
| 46:32      | TextExpander works on all your computers, so you can expand your snippets when you're                |
| 46:36      | working in the office on that Windows machine or working from home on your beloved Mac.              |
| 46:40      | And if you want to learn more about TextExpander, they do interesting webinars every month.          |
| 46:46      | Sign up for the TextExpander beginner, advanced, or team webinars to learn more about boosting       |
| 46:51      | your productivity.                                                                                   |
| 46:52      | You can find all of their webinars and sign up now at textexpander.com/webinar.                |
| 46:58      | I don't even remember when I discovered TextExpander because it's been installed on my machine       |
| 47:02      | so long that whenever I use a Mac that doesn't have it and doesn't have my shortcuts, I              |
| 47:07      | kind of feel like maybe it's a bit broken.                                                           |
| 47:10      | The snippets that I use the most frequently are simple ones, like my email address or                |
| 47:14      | my phone number, because I just don't think about it anymore.                                        |
| 47:17      | I most recommend TextExpander to anybody who spends a chunk of their time typing, or anybody         |
| 47:23      | who's a slow typist, like my dad.                                                                    |
| 47:25      | It can really speed things up, making it easier for you to type your name correctly at the           |
| 47:31      | end of those emails, or that you don't accidentally switch the last two digits on your phone number. |
| 47:35      | Yes, I'm guilty of both.                                                                             |
| 47:38      | TextExpander is available for macOS, Windows, Chrome, iPhone, and iPad, and automated listens        |
| 47:43      | get a 20% discount in their first year.                                                              |
| 47:46      | Just go to textexpander.com/podcast to learn more about TextExpander.                          |
| 47:52      | It'll really boost your productivity.                                                                |
| 47:53      | Check it out now.                                                                                    |
| 47:55      | TextExpander.com/password.                                                                     |
| 47:57      | Our thanks to TextExpander for their support of this show and Relay FM.                             |
| 48:01      | Okay, Rose, episode 50.                                                                              |
| 48:05      | We are looking at [[WWDC]] and just down the road.                                                       |
| 48:10      | Yeah.                                                                                                |
| 48:11      | [[WWDC]] starts exactly one month from the day this episode releases.                                    |
| 48:16      | I feel like we are giving [[Apple]] plenty of notice so that they can fulfill all of our                 |
| 48:19      | desires here.                                                                                        |
| 48:20      | Yes.                                                                                                 |
| 48:21      | That's how it works, right?                                                                          |
| 48:23      | One month of notice.                                                                                 |
| 48:24      | Yes.                                                                                                 |
| 48:25      | Get to work.                                                                                         |
| 48:26      | Get to work.                                                                                         |
| 48:27      | I have to admit, when we did our Meetup, our Automators meet up last year at [[WWDC]] and                 |
| 48:32      | the Shortcuts team, basically all of them showed up.                                                 |
| 48:35      | It was very intimidating to me to think, oh, these guys are listening to our show.                   |
| 48:40      | Yeah.                                                                                                |
| 48:42      | They're just laughing.                                                                               |
| 48:43      | It is.                                                                                               |
| 48:44      | Yeah.                                                                                                |
| 48:45      | But I would think it'd be fun.                                                                       |
| 48:48      | We've been talking about automation a long time.                                                     |
| 48:50      | What are some things you would like to see improve?                                                  |
| 48:52      | Let's start with Shortcuts.                                                                          |
| 48:54      | Yeah, let's start with Shortcuts because Shortcuts has come massive strides and I'm really impressed |
| 49:00      | at the amount of support that we've had from third-party developers to add things to Shortcuts       |
| 49:04      | that previously weren't possible.                                                                    |
| 49:06      | I don't want to see the Shortcuts team sure looking toolbox pro or [[Data Jar]] or any of                |
| 49:11      | that stuff.                                                                                          |
| 49:12      | I feel, yes, it's a third-party thing, but that's not a bad thing.                                   |
| 49:15      | It means that those can iterate and improve at a separate pace and so on.                            |
| 49:21      | But I feel like we need more [[Shortcuts\|Apple Shortcuts]] actions.                                                |
| 49:25      | Do not disturb while driving.                                                                        |
| 49:26      | I mentioned this earlier.                                                                            |
| 49:27      | I can't enable that in Shortcuts.                                                                    |
| 49:28      | I can't log menstrual health things, not the symptoms related to it either, rather, inside           |
| 49:36      | of Shortcuts and stuff like that.                                                                    |
| 49:38      | I feel like adding a little bit more of this and that if [[Apple]] apps added Shortcuts support          |
| 49:44      | as well, and that's outside of the Shortcuts team, that's up to the makers of GarageBand             |
| 49:49      | and stuff to add.                                                                                    |
| 49:50      | I'm not quite sure what you would do with GarageBand Shortcuts, but maybe creating a                 |
| 49:54      | new project and giving it a name, things like that.                                                  |
| 49:57      | Even just basic stuff, I feel would be great fun because this then surfaces Shortcuts more           |
| 50:03      | by showing it on the lock screen and then the search for us.                                         |
| 50:07      | I feel like that would be a great place to start.                                                    |
| 50:09      | What about you?                                                                                      |
| 50:11      | There's so many things I'd like.                                                                     |
| 50:13      | The more you give me with Shortcuts, the more I want.                                                |
| 50:16      | A recurring theme for us is the confirmation automatic triggers.                                     |
| 50:21      | I just want that to go away, or I at least want a checkbox that can turn off.                        |
| 50:26      | If I have something that's supposed to trigger automatically upon a certain event, then I            |
| 50:31      | have to click a checkbox on the screen to make it happen, and I get why that's there.                |
| 50:36      | They don't want people to be surprised about things happening on their phone, but I'm                |
| 50:39      | a big boy and I'm willing to take the risk, and I'd like that to go away.                            |
| 50:44      | That's an easy one.                                                                                  |
| 50:45      | I don't know if they'll do it or not, but I think programmatically, it wouldn't be                   |
| 50:50      | that hard to make that an option.                                                                    |
| 50:54      | The next category of things I'd like to see them prove is data access.                               |
| 50:58      | For instance, currently, app developers have access to a lot of health data to develop,              |
| 51:03      | and there's this great assortment of third-party apps that take your health data and present         |
| 51:09      | the data in interesting ways and allow you to do things with it, but it's really not                 |
| 51:13      | very addressable with Shortcuts.                                                                     |
| 51:15      | If I can let third-party developers access my health data, why not let me access it and              |
| 51:21      | give me a set of interesting tools and shortcuts to work with it?                                    |
| 51:25      | I think that would also open up opportunities for those third-party app developers to come           |
| 51:29      | up with their own shortcut actions as well.                                                          |
| 51:32      | Another category of data I'd like to see is time management data, how much time am I spending        |
| 51:37      | in the apps?                                                                                         |
| 51:38      | All this stuff we're getting that the phone is definitely collecting.                                |
| 51:42      | Why can't we access that through Shortcuts and find ways to use that?                                |
| 51:47      | If I pick up my phone three times in an hour, say, slow down, Sparky, you're going a little          |
| 51:52      | crazy here.                                                                                          |
| 51:53      | Make sure you're working on it.                                                                      |
| 51:55      | It's silly things like that, but I think it would be nice to have access to that ourselves.          |
| 52:02      | The other thing I'd like to see, the third category of things I'd like to see improve                |
| 52:05      | is I'd like it to be easier for app developers.                                                      |
| 52:09      | You and I have talked to a lot of people writing apps in this shortcut space.                        |
| 52:14      | I think this podcast probably covers it more than any other podcast in terms of these people         |
| 52:18      | that are on the ground writing these apps.                                                           |
| 52:21      | The thing we always hear is, we like to do more, but we hit the memory hit, or there's               |
| 52:27      | not enough this or that.                                                                             |
| 52:30      | I think it's great that they made the stuff accessible to app developers, but the fact               |
| 52:35      | that these guys are making the app sometimes are a miracle because they're working with              |
| 52:41      | so many constraints.                                                                                 |
| 52:43      | Give them less constraints and let's see what they can do.                                           |
| 52:46      | Definitely.                                                                                          |
| 52:47      | Stuff like the health thing is particularly a contentious issue for third-party developers.          |
| 52:53      | For example, I believe Scriptable originally had support for health data, and they had               |
| 52:57      | to remove it because [[Apple]] wouldn't let them release Scriptable in the app store with health         |
| 53:02      | kit support.                                                                                         |
| 53:03      | I feel like [[Apple]] is doing a great job trying to protect us from the bad guys, but they're           |
| 53:09      | protecting us from ourselves as well in ways that we probably wouldn't like to see.                  |
| 53:14      | It would be great if they maybe ease up on that and go, okay, and can you show us an                 |
| 53:20      | example use case of this, and [[Scriptable]] people, [[Simon Støvring\|Simon]], give us a sample script of where you         |
| 53:26      | can extract a bunch of data and present a nice view inside of when it's called from                  |
| 53:31      | Siri on your phone about all of your data from today, and then they go, oh, that's really            |
| 53:36      | cool.                                                                                                |
| 53:37      | Yes, okay, you can pass app review with this.                                                        |
| 53:39      | Obviously, they've got to protect us from the bad guys, but giving us access to our                  |
| 53:43      | data.                                                                                                |
| 53:44      | The scale is not a huge ask.                                                                         |
| 53:46      | These are scripts that we're writing, so I guess the fear would be people would download             |
| 53:54      | a malicious script that would take the health data and email it to somebody, but there's             |
| 53:58      | so many breaks in place already.                                                                     |
| 54:00      | You have to first enable the application to download scripts from third parties.                     |
| 54:07      | That dialogue, I forget the exact text of it, but it's written kind of nasty, says untrust           |
| 54:14      | it.                                                                                                  |
| 54:15      | I forget what the exact language is, but I don't like that language anyway, but there's              |
| 54:21      | so many hoops you have to jump through before that problem happens.                                  |
| 54:25      | Why not give us the ability, or maybe [[Apple]] people hate to hear this, but add one more               |
| 54:31      | checkbox, and are you sure checkbox isn't saying you really want access to this stuff?               |
| 54:38      | Okay.                                                                                                |
| 54:39      | Yeah.                                                                                                |
| 54:40      | Like now that I think about it, you have to enable application access to health data                 |
| 54:46      | already on a per-out basis, just add shortcuts to it.                                                |
| 54:50      | If people don't check that box.                                                                      |
| 54:52      | It's actually already in on a per-shortcut basis now as well, so if I add a new shortcut             |
| 54:56      | that wants access to say my OmniFocus data, OmniFocus is third party calculation, I have             |
| 55:03      | to grant it access to OmniFocus, and I have to grant it access to pages, and I have to               |
| 55:07      | grant it access to call different URLs.                                                              |
| 55:11      | It's here.                                                                                           |
| 55:12      | Let us have a little bit more film with this stuff, please.                                          |
| 55:16      | Then the other big one that comes up often is, okay, shortcuts has made this progress.               |
| 55:21      | Is it time to have shortcuts on the Mac?                                                             |
| 55:24      | Yeah.                                                                                                |
| 55:25      | I think this is an interesting problem.                                                              |
| 55:29      | I think we're going to probably see some improvements to Catalyst this year, which is the system     |
| 55:34      | that [[Apple]] offer for you to put an iOS app on the Mac, and that's a great idea, and it's             |
| 55:41      | definitely working for some applications.                                                            |
| 55:43      | For other applications, the developers are saying, no, it's not there for me yet.                    |
| 55:47      | I still need to develop a separate Mac application, but I'm wondering if this year the improvements  |
| 55:51      | to Catalyst will be enough that we can run shortcuts on the Mac, and I'm really hoping               |
| 55:57      | the answer is yes.                                                                                   |
| 55:58      | I'm not confident it is, but I'm being an internal optimist and hoping it is.                        |
| 56:04      | I have to wonder with the Mac, because we got talking about earlier [[Keyboard Maestro]]                 |
| 56:11      | and how you can literally script anything on your Mac.                                               |
| 56:15      | What is the necessity of shortcuts?                                                                  |
| 56:18      | I think it's going to be more limited than what we can already do, but it does offer                 |
| 56:23      | a different avenue for people who don't want to learn [[AppleScript]] or deal with Keyboard              |
| 56:27      | Maestro.                                                                                             |
| 56:28      | I think there's a benefit to it.                                                                     |
| 56:30      | I'd like to see it happen, but I am super curious when they do get around to it to see               |
| 56:35      | exactly what that means.                                                                             |
| 56:38      | If I had to choose right now, you said, look, you get two choices.                                   |
| 56:41      | We either bring it to the Mac or we spend another year or two making it better on iPhone             |
| 56:47      | and iPad.                                                                                            |
| 56:48      | I would choose making it better on iPhone and iPad, because those are the platforms that             |
| 56:52      | really don't have any other option, and I can get by without shortcuts on the Mac for                |
| 56:57      | maybe ever, forever, but there's a whole bunch of stuff I'd like to see them make better             |
| 57:03      | on the iPhone and iPad.                                                                              |
| 57:04      | Yeah, me too.                                                                                        |
| 57:06      | If I had to pick between, say, enhanced automation support on iOS and shortcuts on the Mac, it       |
| 57:11      | would be enhanced automation support on iOS, no questions.                                           |
| 57:14      | We made 50 shows, Rose.                                                                              |
| 57:15      | You want to make 50 more?                                                                            |
| 57:17      | Definitely.                                                                                          |
| 57:18      | Me too.                                                                                              |
| 57:19      | Tell you what, let's make it a hundred more.                                                         |
| 57:20      | All right.                                                                                           |
| 57:21      | Let's just keep going.                                                                               |
| 57:22      | Let's just keep going.                                                                               |
| 57:23      | Great guests lined up in the future, and we've got some subjects to cover.                           |
| 57:28      | We're always interested in hearing your automation problems, and we'll be talking about that         |
| 57:33      | going into the future, but I'm really having a great time making the show, and I can't               |
| 57:38      | wait to keep doing it.                                                                               |
| 57:40      | Agreed.                                                                                              |
| 57:41      | Yeah.                                                                                                |
| 57:42      | We've had several questions come in for the Outlet Automation segment of the show,                   |
| 57:45      | which is new, and please keep sending that in.                                                       |
| 57:48      | We didn't get to that today, but it will be back in future episodes, and we're looking               |
| 57:53      | forward to solving your problems for you as well as providing our own solutions to our               |
| 57:59      | problems as well.                                                                                    |
| 58:00      | All right.                                                                                           |
| 58:01      | Thank you to our sponsors, MindNode and TextExpander from Smile, and we'll see you in a couple       |
| 58:05      | weeks.                                                                                               |
| 58:06      | Bye, everyone.                                                                                       |
