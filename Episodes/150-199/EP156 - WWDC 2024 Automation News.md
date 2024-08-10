---
status: "incomplete"
fc-date:
  year: 2024
  month: 06
  day: 14
fc-category: "podcast"
podcast: "Automators"
published: 2024-06-14
duration: 3685
formattedduration: "01:01:25"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/156"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators156.mp3"
episode: 156
title: "156: WWDC 2024 Automation News"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David break down all the new automation options from Apple's WWDC announcements.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 156 Discussion](https://talk.automators.fm/t/156-wwdc-2024-automation-news/17710)

# Sponsors
- [[Computex (Sponsor)|Computex]] - Grow your career, expand your business, and discover the infinite possibilities of technology. Register now or find out more info.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post your job for free today.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- Rose and David break down all the new automation options from Apple's WWDC announcements.
- ---
- [WWDC24: The OS Bento Boxes – 512 Pixels](https://512pixels.net/2024/06/wwdc24-the-os-bento-boxes/)
	- All of those summary screenshots from the keynote.
- [Apple Intelligence in 5 Minutes](https://youtu.be/Q_EYoV1kZWk?si=tPNXUh8xPjvq63GR)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators. I'm David Sparks and joined by my co-host, Rosemary Orchard.                  |
| 00:06      | Hello, Rosemary. Hey, David. How are you? Good. Good. We are The Automators, where we talk about         |
| 00:11      | how to automate your technology and do your work for you. And this is the week that I like to think      |
| 00:18      | of as Nerd Christmas. [[WWDC]] came out for Apple, a ton of new announcements, some of which are             |
| 00:25      | automation related, not as many as I would like to be honest, but there's some good news for us,         |
| 00:30      | Automators. So, Rose, I think it's time to do the [[WWDC]] reaction show. Yeah. Yeah. I think it is,          |
| 00:38      | because we all sat around and Tim got on stage and introduced a bunch of people. Craig jumped            |
| 00:45      | out of an airplane. That was important. Yeah, that was fun. And yeah. And then we got presents,          |
| 00:54      | including, obviously, the first thing that happened after I installed the iOS 18 beta,                   |
| 01:01      | because I did. And we'll come back to that in a second about why you shouldn't be installing             |
| 01:06      | that, folks. Then I went into [[Shortcuts]] and it's got a new UI and a whole bunch of new stuff,            |
| 01:14      | which is great. They didn't explicitly talk about [[Shortcuts]], the app, a huge amount in                   |
| 01:19      | the actual session, but they did talk about app intents a whole bunch. So, it's great to see             |
| 01:29      | that app intents got some love on stage. That's the magic that makes [[Shortcuts]] work behind the scenes.   |
| 01:36      | But not only that, there's some new things in [[Shortcuts]] as well, which is just really lovely             |
| 01:42      | to see. Well, maybe we start there at the architectural level. So, Rose, what are app intents?           |
| 01:50      | app intents are essentially the things that developers can include in their apps that say,               |
| 01:55      | hey, [[Shortcuts]], you can use this to make some magic happen. And Widgets, you can use this                |
| 02:01      | to make magic happen as well, because not every AppIntent is necessarily visible as a [[Shortcuts]]          |
| 02:06      | action. So, if you've got a widget that you can choose what happens when you tap on the widget,          |
| 02:12      | that's an AppIntent. And there's a whole bunch of AppIntent stuff running around. It's tied into         |
| 02:18      | focus modes with all those filters and stuff like that, which is all great. And they have                |
| 02:25      | really just taken this to a whole new level this year. And we'll come back to things like the fact       |
| 02:30      | that [[Control Centre]] is going to be completely customisable, because that's all through app intents       |
| 02:36      | as well. But essentially, it's the underlying magic of [[Shortcuts]] now. Yeah. And tell me if               |
| 02:42      | I'm wrong on this, Rose, because you're the developer, so I think you've got a better handle             |
| 02:45      | than I do. But app intents are the underlying engine for [[Shortcuts]] actions. But because they're          |
| 02:50      | used in other places, [[Shortcuts]] can be kind of the unexpected beneficiary of increased use of            |
| 02:58      | app intents. And one of the things they talked about a lot was the new [[Siri]]. We've got a segment         |
| 03:03      | later about [[Apple Intelligence]], but that's going to be tied through app intents. So suddenly,            |
| 03:09      | I feel like developers are going to have more motivation to embrace app intents. They've opened          |
| 03:14      | them up more to third parties. But isn't that going to mean that we're going to get more actions in      |
| 03:19      | [[Shortcuts]] as well as a side benefit? I suspect we probably will, yes. There's certainly the option       |
| 03:26      | for our developers to hide app intents from [[Shortcuts]], which is something that you may want to use.      |
| 03:31      | So a classic example, or a classic example, an example that I'm aware of is, for example,                |
| 03:38      | PushCut has a widget action where you can run a [[HomeKit]] scene when you tap on a widget. But              |
| 03:44      | you can already run a [[HomeKit]] action inside of [[Shortcuts]]. So that is one where when we were              |
| 03:50      | developing it, we very actively went in and said, no, we don't want to make this action                  |
| 03:54      | available in [[Shortcuts]] because also we don't want to confuse users. That is not going to be helpful      |
| 04:00      | to anybody. That's a bad [[Shortcuts]] action. But I think overall people are going to                       |
| 04:06      | end up with more automation options. Just if you have a look and so on now, you're seeing all sorts      |
| 04:12      | of developers embracing widgets and things like that who previously you may not have thought that        |
| 04:17      | you would have. For example, [[Instagram]] actually has lock screen widgets I discovered today,              |
| 04:22      | [[Instagram]]. They don't have an API, they don't have integrations with a bunch of other stuff,             |
| 04:27      | but they've got lock screen widgets. So this is all a good start and I guess we will have to             |
| 04:34      | see from there where everything goes. But fingers crossed, it will give us exactly                       |
| 04:40      | what we want when it comes to [[Shortcuts]] actions. Yeah, that feels to me like kind of a hidden            |
| 04:45      | benefit to automation. But like you said, Apple did work on [[Shortcuts]] this year too.                     |
| 04:52      | So why don't we talk about the new user interface?                                                       |
| 04:54      | Yeah, so the new user interface, it wasn't explicitly demoed in [[WWDC]], but it was definitely              |
| 05:05      | shown off through [[Apple Photos\|Photos]] and so on because [[Apple Photos\|Photos]] has a lovely new UI and [[Shortcuts]] has                  |
| 05:12      | not taken that exact UI, but it's taken a new UI that's sort of similar to that because                  |
| 05:19      | previously when you were creating a new shortcut and this is the primary area you're going to see        |
| 05:25      | this new UI, you would have your actions sidebar or the bar at the bottom                                |
| 05:32      | and then this would have two panes, essentially. And why say pane? I mean P-A-N-E is in pane of          |
| 05:38      | glass and you would have the primary area with your default [[Shortcuts]] actions and scripting actions      |
| 05:44      | and media and sharing and stuff and then you'd have an apps pane. But this was also a pain as in         |
| 05:51      | P-A-I-N, somebody poking me somewhere very uncomfortable because I found that this is honestly,          |
| 05:59      | it's got to be down to the number of apps that I've got installed with [[Shortcuts]] actions. I'd            |
| 06:02      | switch over to the apps pane and then every single time I was about to create a new Shortcut or          |
| 06:10      | every time I demoed it on iOS today, it would take forever to load up all of the apps because it would   |
| 06:15      | decide to go off at that point and re-index the apps. And it's like, okay, thanks [[Shortcuts]],             |
| 06:21      | like this is not particularly helpful right now because I know what I'm looking for                      |
| 06:25      | and I'd still be able to find it through search, but it wasn't really helpful. So what they've done      |
| 06:31      | now is the search has or that whole area, that sidebar or the actions area at the bottom if              |
| 06:38      | you're using it on the iPhone is now sort of unified. So the sort of eight, I believe it was,            |
| 06:46      | menu items at the top, scripting, media, sharing, location, documents of web, they're                    |
| 06:52      | just little buttons immediately below the search. But then underneath that, there are suggested          |
| 06:58      | [[Shortcuts]] actions. So in a brand new shortcut, this is a combination of things that maybe you've         |
| 07:04      | pinned or favourited because if you tap on the little info bubble next to a [[Shortcuts]] action,            |
| 07:10      | then you can pin or unpin something, which if you've pinned some [[Shortcuts]] actions before,               |
| 07:18      | then this will be something that those will be showing up there. And then underneath that,               |
| 07:24      | you've got your apps. And I find that this is just a nicer way to do things. It just makes it            |
| 07:30      | a little easier for somebody who's not used to [[Shortcuts]] and they're like, okay, well, I know            |
| 07:34      | this app said it had a [[Shortcuts]] action. And so I look at the actions and oh, it's right there.          |
| 07:39      | Okay, I see all of the apps with [[Shortcuts]] actions. That's good. That's what I wanted.                   |
| 07:45      | And yeah, you can then go from there, which I just think makes it easier. What do you think              |
| 07:50      | of the new UI, David? Well, I think this is not just good for people who don't normally use [[Shortcuts]].   |
| 07:55      | I think it's just better. It seems like, I mean, we've all struggled with adding actions and not         |
| 08:01      | being able to get to what we want or just the whole interface. And frankly, it still needs               |
| 08:06      | some work on this. It feels cramped, especially on the iPhone, but this is a little better.              |
| 08:13      | And I think this is definitely an improvement. It's not like a complete rewrite of the user              |
| 08:19      | interface, but it's a tweak of something that anybody who makes shortcuts bumps into.                    |
| 08:24      | Yes. Yeah. I have to say, I did notice that a bunch of actions seem to have pinned themselves,           |
| 08:32      | but that may have also been my own fault. Because if you tap, so once you've added a [[Shortcuts]]           |
| 08:39      | action to your shortcut, if you tap on the little icon on the left hand side,                            |
| 08:44      | then there's show info, pin or unpin. If it's an if action or repeat or something,                       |
| 08:50      | there's collapse that snuck in sometime during iOS 17, and we forgot to talk about that. And then        |
| 08:55      | there's duplicate copy, paste above, paste below, and remove. And I feel like I may have been trying     |
| 09:00      | to pin things while I was creating a shortcut and thinking that it was pinning it on screen              |
| 09:07      | in the [[Shortcuts]] app, rather than realising that it was pinning the actual action. But yeah, I feel      |
| 09:13      | like this is just a much easier way. I've got the actions that I use most frequently, if and text        |
| 09:19      | pinned and comment is also pinned, because I use a lot of those actions. And then, yeah,                 |
| 09:26      | everything else is just straight into the apps, which is exactly where I need it.                        |
| 09:31      | Yeah. Do you find that you often look for [[Shortcuts]] actions through apps or by name?                     |
| 09:38      | So I usually do everything by search. And that is just because I already know the name of either         |
| 09:47      | the app or the [[Shortcuts]] action. And I've got a lot of apps here with [[Shortcuts]] actions. I've            |
| 09:53      | got literally everything from one blocker down to Zoom. And there's so many other apps in between        |
| 10:00      | that I literally can't count them. I'm not even going to try, because there's just too many.             |
| 10:06      | But I tend to find everything through search just because that's what works better for me.               |
| 10:14      | But I'm aware that that's not for everybody. Yeah. Well, something you just mentioned is that you        |
| 10:21      | use the if statement a lot. This year, we're getting an upgrade to the if statement.                     |
| 10:28      | Yeah. Yeah, we are. So when you are looking for something, so say, for example, you add an if            |
| 10:33      | statement, you select your device details, you tap on device details, and you say device type.           |
| 10:38      | And then you say your device type is iPhone. Once you filled out all the parts of that if,               |
| 10:43      | you get a little plus. And then you can have multiple conditions, which is great. So if you              |
| 10:48      | want to say, Hey, if my device is an iPhone or an iPad, do this. Or if my device is an iPad,             |
| 10:59      | and I'm on Wi-Fi, do that. So there's once you've added multiple conditions, you can switch between      |
| 11:05      | any and all. So one, at least one of these has to match or all of these have to match. And I feel        |
| 11:10      | like this is a really nice little upgrade to the if action. And I've been already able to go through     |
| 11:16      | and clean up a bunch of my shortcuts where I had nested if statements, you know, I had three or four     |
| 11:20      | if statements to try and get to like, you know, this is true, and this is true, and this is true.        |
| 11:25      | Or I had multiple sequential if statements for this is true, or this is true, or this is true.           |
| 11:32      | And I was using a set variable in them to set a variable to say yes, this is true.                       |
| 11:36      | And yeah, now I don't have to do that anymore. Yeah, I've done the same thing. Like, and again,          |
| 11:42      | because of the cramped nature of [[Shortcuts]], especially on the iPhone screen, those nested                |
| 11:47      | if statements, it can become a circle of hell trying to get out of those. So I'm glad they made          |
| 11:54      | it easier. Some new actions we got with the settings app, you can open or update some different          |
| 12:01      | settings. Yeah, yeah. So there's quite a few new settings available. And there is also a whole           |
| 12:10      | app, which at least in the beta right now, in my mind, this is a first beta. So things are likely        |
| 12:16      | to change folks. There's a whole thing called accessibility UI server, which appears for me.             |
| 12:22      | And this allows me to do things like edit hover text, mode announcements, things like that,              |
| 12:28      | which are all related to accessibility features. But inside of the settings app                          |
| 12:35      | action group selection in [[Shortcuts]], there are way more options than we previously had,                  |
| 12:42      | including find app settings, where you can find, you know, settings for particular apps.                 |
| 12:49      | And if you've got the apps, if you've already got the app, then you can pass that in so you              |
| 12:54      | can find the settings for a particular app and then go from there. And I feel like this is a             |
| 12:59      | really good step closer to, you know, getting some of the more fine grain controls that people           |
| 13:05      | have been asking for through [[Shortcuts]] without it being overwhelming and requiring every app             |
| 13:10      | developer to have to jump through a whole bunch of hoops to make everything available.                   |
| 13:14      | Yeah, no, it makes total sense to me. Like, it feels to me like every year Apple picks two or            |
| 13:20      | three of their own apps to get like the [[Shortcuts]] treatment. Like I felt like last year, it was          |
| 13:26      | Apple notes, like Apple notes got a bunch of interesting and useful actions, but [[Apple Reminders\|Reminders]]               |
| 13:31      | didn't get any. And now this year, [[Apple Reminders\|Reminders]] get some new ones. So you can open any lists,               |
| 13:37      | you can pin and unpin reminders, and show and hide smart lists as [[Shortcuts]] actions.                     |
| 13:44      | Quite frankly, still not enough in my opinion. Like I was trying to do for a lab member,                 |
| 13:49      | to do for a lab member, make a shortcut to make reminders with subtasks. And you can do it in            |
| 13:55      | [[Apple Reminders\|Reminders]], but it's very clunky. I feel like if they had me in a room and said, let's make some          |
| 14:01      | reminders, I could have come up with about 10 more actions that they could have made.                    |
| 14:06      | Yeah, but I think that also by doing it this way, they have learned from notes. Because                  |
| 14:12      | notes has a huge number of [[Shortcuts]] actions, but also I feel like sometimes if you're looking           |
| 14:17      | to do something with notes, it's a little overwhelming, right? Just because there's                      |
| 14:21      | so many actions that you can take. And that's not necessarily a good thing. And there are                |
| 14:27      | some things which are more like settings, which maybe should be settings. And now guess what,            |
| 14:33      | they are settings. And I feel like that is a really good improvement as far as                           |
| 14:41      | making this work goes. Because yeah, there's a whole bunch of things there that we don't necessarily     |
| 14:52      | need to be able to exactly tweak directly. But if you can find a way to do it, then that's               |
| 15:00      | going to give the nerds exactly what they want. And yeah, then we're not going to have to worry          |
| 15:07      | about handling all of the nitty gritty as a [[Shortcuts]] app developer or anything else.                    |
| 15:14      | So yeah, it's pretty nice to be able to just be like, okay, well, I'm going to open the app              |
| 15:20      | settings for this particular app and go from there. Yeah, you know, when you mention it,                 |
| 15:25      | you're right. A lot of those Apple notes items are settings. They're not really actions in terms         |
| 15:31      | of taking action with the application. What do you think about [[Apple Home\|Home]]? It got a new action?                |
| 15:39      | Yeah, so [[Apple Home\|Home]] has got a new action, which I'm not 100% certain I completely understand the               |
| 15:44      | purpose of right now. But there is find a selected home and then it's find all selected homes.           |
| 15:52      | And so you can find your selected home, and then you can sort of choose from a list to pick a home,      |
| 16:02      | which is good if you've got multiple homes available. Because if you look inside of the [[Apple Home\|Home]]             |
| 16:07      | app actions, then you previously had a get state and control for every home. So if I wanted to           |
| 16:17      | control my home versus my parents' home with shortcut actions, I'd have to use different actions,        |
| 16:22      | like each home had its own action. And now I just need to get the... I have one single                   |
| 16:32      | option to get the state of an accessory in any home, and I can choose the home on the action,            |
| 16:38      | which is, in my opinion, how it should have been to start with. But I think that the idea for            |
| 16:44      | this is that you will then put the find selected home after the accessory input or output, but I'm       |
| 16:53      | not 100% certain yet. And the documentation just says the selected home that matches the criteria,       |
| 17:00      | like find selected home. What to sort the selected home by? Well, there are no sort options. What        |
| 17:05      | to order? There's no order option. Limit. Yes, you can limit it. That's great. You can limit it to       |
| 17:11      | like one item. Amazing. But that doesn't actually help me. So I'm not quite sure what the purpose        |
| 17:18      | of this is yet, but I'm sure somebody will figure that out pretty soon. It's interesting. I don't        |
| 17:22      | see that action on the beta. I don't see the action listed under the Home app. Yeah. So I found it       |
| 17:30      | yet under Home. It's the first one for me. So there's two actions which aren't in a named group,         |
| 17:38      | find selected home and toggle accessory state. And then there's a named group called Home which          |
| 17:42      | has get state. And then there's other which has like donated shortcuts like controlling my office        |
| 17:47      | or controlling my living room [[Apple TV]] and things like that. And often in the betas, the app             |
| 17:53      | categorisations are out of date or not updated. So yeah, it all depends on exactly how it's been         |
| 17:58      | configured and so on. And stuff doesn't necessarily quite get polished before it makes it into the       |
| 18:03      | first beta. But you know, we've got a couple of months before this releases, which may be a good         |
| 18:08      | time to remind folks if you're not a developer or you're not required to be messing with this stuff      |
| 18:12      | for a living, don't install this on your device just yet. My phone ran out of battery yesterday          |
| 18:19      | morning, David. So [[WWDC]] was two days ago as we record this. My phone ran out of battery                  |
| 18:24      | yesterday morning because it didn't charge properly overnight. And I plugged it in and it                |
| 18:28      | didn't power back on. I had to unplug it and connect it to a different charger. Actually,                |
| 18:32      | I put it on a [[MagSafe]] charger. And at that point, it came back to life at 66% battery.                   |
| 18:38      | But you know, you're going to encounter weirdness and bugs in the beta. So be careful, folks.            |
| 18:42      | Yeah. And just to pile on there, I've had issues with messages and dictation just stopping working       |
| 18:47      | and some of the artwork being broken. And so I've had to restart a couple of times. A beta one is        |
| 18:53      | always rough sailing. Although I'll say for me, it's rougher sailing on the iPhone than it is            |
| 18:58      | on iPad or Mac. But that's just my experience so far. We got some more actions though. We're             |
| 19:04      | not done. [[Apple Books]] app got some automation. Yeah. Yeah, it did. So the [[Apple Books]] app has,           |
| 19:15      | you know, it's got a reasonable number of [[Shortcuts]], actions, but not necessarily all of them. But       |
| 19:20      | it's now got some options for turning page scrolling on and off, opening a particular                    |
| 19:24      | view in the [[Apple Books\|Books]] app and navigating pages, which are, you know, nice options. In particular,            |
| 19:30      | if you think about, say, the iPad where you have hot corners, and if you connect a mouse,                |
| 19:35      | you can also run a shortcut from a particular mouse button. Well, to me, the navigate page               |
| 19:42      | in particular makes a lot of sense for one of those. And so does turning page scrolling on and           |
| 19:49      | off. Like, you know, imagine if you've got a mouse with a button right next to the scroll wheel,         |
| 19:53      | like, if you're able to press that to turn page scrolling on and off, that could be,                     |
| 19:56      | you know, exactly what you need. So yeah, I personally think that those are some nice options            |
| 20:02      | there. Yeah, it's all good. But it feels to me overall like a pretty light year for [[Shortcuts]].           |
| 20:08      | You know, we didn't get a ton of new stuff this year. Well, we did and we didn't. Because as I           |
| 20:15      | guess we'll talk about in a minute, you know, there are a whole bunch of, you know, new things           |
| 20:19      | that are coming in the [[Control Centre]], which will tie into [[App Intent\|App Intents]], which will give us               |
| 20:27      | way more options there. Yeah, I mean, that's like the big gift, right? The [[App Intent\|App Intents]] and the [[Apple Intelligence]]     |
| 20:32      | stuff has spillover effects for automation. In fact, it is a form of automation             |
| 20:37      | really, but I guess I'm getting ahead of myself, right? Possibly, but that's okay.                       |
| 20:42      | This episode of The Automators is brought to you by LinkedIn Jobs. Go to linkedin.com/automators                   |
| 20:51      | to find the qualified candidates you want to talk to and post your job for free today.        |
| 20:58      | When you're hiring for your small business, you want to find quality professionals that are right        |
| 21:02      | for the role. That's why you have to check out LinkedIn Jobs. LinkedIn Jobs has the tools to             |
| 21:08      | help find the right professionals for your team faster and for free. I always felt like getting          |
| 21:13      | the right person for a job requires two things, finding someone with the right skills and the            |
| 21:19      | right chemistry for your workplace. And LinkedIn Jobs solves the first problem for you. It gets          |
| 21:24      | you qualified people. Then it's just a question of finding the person that's the right fit and           |
| 21:29      | making a successful hire. With LinkedIn Jobs, you get the right person faster and easier.                |
| 21:34      | LinkedIn isn't just a job board. It helps you hire professionals you can't find anywhere else,           |
| 21:40      | even those who aren't actively searching for a new job, but might be open to the perfect role.           |
| 21:46      | In a given month, over 70% of LinkedIn users don't visit other leading job sites. So if you're not       |
| 21:52      | looking on LinkedIn, you're looking in the wrong place. On LinkedIn, 86% of small businesses get         |
| 21:58      | a qualified candidate within 24 hours. Hire professionals like a professional on LinkedIn.               |
| 22:05      | LinkedIn also knows that small businesses are wearing so many hats and might not have the                |
| 22:10      | time or resources to hire. That's why they're constantly finding ways to make the process                |
| 22:16      | easier. They even just launched a feature that helps you write job descriptions,                         |
| 22:20      | making the process even easier and quicker. It's easy to see why 2.5 million small businesses            |
| 22:26      | use LinkedIn for hiring. So post your job for free at linkedin.com/automators. That's                    |
| 22:33      | linkedin.com/automators. So post your job for free, terms and conditions apply,                          |
| 22:39      | and thank you LinkedIn Jobs for your support of the Automators podcast.                                  |
| 22:45      | One of my favourite things they did this year, Rose, which I think is automation adjacent,               |
| 22:50      | is just massive improvements to [[Control Centre]]. So, you know, this isn't the first time we've had        |
| 22:56      | multi-page [[Control Centre]]. I don't know if you recall back in the day, you would get [[Control Centre]], |
| 23:00      | you could swipe left or right to get access to different controls. Now when you swipe down       |
| 23:05      | in [[Control Centre]], although I will just say as a sidebar here, I still think that that having            |
| 23:11      | to swipe on the top right portion of the screen is kind of nutty. But either way, once you swipe         |
| 23:16      | into [[Control Centre]], you've got multiple screens of data and controls available to you, and it's         |
| 23:23      | fully customisable. And boy, I've had fun playing with this. Yeah, yeah, me too. I am really enjoying    |
| 23:32      | it. So what I like as well is when you swipe down from the ear, as it's sometimes referred to,           |
| 23:39      | you will not have multiple pages, but you can keep swiping, you can keep pulling your finger down        |
| 23:44      | to get to a particular page in the [[Control Centre]]. So I now have a dedicated home page                   |
| 23:49      | in the [[Control Centre]]. And I've put an action right in the top left. So it's kind of a little bit        |
| 23:56      | out of the way, which will open the home app. And then I've got two scenes, and then I've got some       |
| 24:01      | locks and five switches that I use regularly through the home app. And this to me is amazing,            |
| 24:11      | because now I have those exactly as I want, I was able to reposition them and resise them to put         |
| 24:16      | them exactly where I wanted. And you can do this all over [[Control Centre]], which I think is really        |
| 24:23      | great. Yeah, like you, that was the first one I gravitated to as well, because I've always               |
| 24:29      | struggled with home controls in [[Control Centre]], because they're so small, and you get so little          |
| 24:34      | space for them. And it was using, it was dynamically changing them based on what you'd used most         |
| 24:40      | recently. And now that you've got a full page for home control, you can do just like Rose said,          |
| 24:45      | you can build yourself a little home control panel. And the buttons are right where you expect them      |
| 24:51      | to be. So when you want to turn the lights off, you don't have to look through them or try and           |
| 24:55      | decipher little tiny buttons that don't necessarily have all the text. Yeah. And what I really like      |
| 25:01      | about this is I can actually, if you add the, there's two, three different kinds of home widgets,        |
| 25:11      | I'm going to call them for the [[Control Centre]]. So there's one that when you, when you're looking         |
| 25:15      | at the configuration looks like a four by four grid, there's one that looks like a two by one            |
| 25:20      | grid, and then there's one that's a one by one circle. And if you add the four by four grid,             |
| 25:26      | it actually pops in as a two by two to start with giving you two actions. But when you tap               |
| 25:30      | on that, you can configure it. And the first thing that you can do is turn on and off use                |
| 25:35      | recommended. And if use recommended is on, you can limit it to just scenes or just accessories.          |
| 25:41      | So that's going to come up with, you know, the smart recommendations of things that it thinks            |
| 25:45      | that you might want to control, which, you know, could be right or wrong. And you can resize this        |
| 25:52      | into a four by one, or there's the two by two, or there's the four across and two down,                  |
| 25:58      | like size, which gives you two buttons in each direction. And I feel like this is, you know,             |
| 26:04      | this is a nice option to have for people where you can have, you know, [[Siri]] and the new Apple            |
| 26:10      | intelligence that we'll be talking about later, you know, give you some recommendations. But             |
| 26:15      | there's also the option to please not don't try and be smart. I know what I want here. I know            |
| 26:20      | exactly what I want. And I don't want you messing with it. And I feel like that is, you know,            |
| 26:26      | that that is a good combination there to just let me be in charge because I want to be,                  |
| 26:31      | but for most people, they'll probably just leave it as the default.                                      |
| 26:34      | Yeah, I agree. I think turning that switch off makes it more useful because then you can have            |
| 26:39      | muscle memory, like there's a certain lights, which you always want to turn off. It's always in          |
| 26:43      | the same place. I feel like almost the default is wrong there. But either way, we're getting into        |
| 26:48      | the weeds. So you've got various screens of [[Control Centre]], you know, the top one                        |
| 26:54      | one is the one that looks like the traditional [[Control Centre]], but you can fully edit it. You            |
| 27:00      | can take components out and they've got, I think they call it something like a [[Control Centre]]            |
| 27:04      | gallery with a bunch of different tools. You can just drag in and rearrange to your heart's content.     |
| 27:11      | And that's really nice. And this stuff is customisable across all screens. Like even on the              |
| 27:16      | page, you get your home control stuff. Maybe it's really important. You also have a timer on that        |
| 27:21      | page. You can add a timer to the page too. It doesn't matter. You can group them in any way              |
| 27:26      | that makes sense to you. The pages continue. If you fill up a page and you add another widget,           |
| 27:34      | it will make an additional page. So you can really go nuts with this. It gives you media                 |
| 27:41      | controls on a separate page. It's really nice having that back again. And there's also a radio           |
| 27:47      | page. It's got all the various radios on your device, airplane mode, [[AirDrop]], Wi-Fi, cellular,           |
| 27:52      | [[Bluetooth]], hotspot, [[VPN]] and satellite. So all that stuff's on one page. So you can turn it               |
| 27:58      | off and on at will. I just, I think whoever did this, the layout deserves some kudos because I           |
| 28:05      | think it completely makes sense for people who are not listening to the automators podcast,              |
| 28:10      | but for us automators, it gives us all the freedom we want to make it work exactly how we want.          |
| 28:15      | Yeah. The other thing that I really love about this is gone are the days where you need to go            |
| 28:23      | into settings and know that you need to go to settings and go to [[Control Centre]] to edit this.            |
| 28:28      | Okay. So you're looking at it and you're like, okay, but what is this thing here? And you do             |
| 28:32      | the tap and hold the same as you do on the home screen to edit your home screen layer and bam,           |
| 28:37      | you're in editing mode. And that to me is, that is the win right there. It does bug me slightly          |
| 28:44      | that when I tap on an empty space, it doesn't like pop up to add a control. I have to specifically       |
| 28:49      | click the add a control button or tap the add a control button at the bottom. But I say that             |
| 28:56      | they've given me two [[Shortcuts]] actions natively in the [[Control Centre]]. So I'm going to let that          |
| 29:03      | slide. I'll file some feedback because I feel like that could be a nice improvement. Like if you         |
| 29:06      | add a new page and you tap on a blank spot, it feels like it should pop up and offer to add a            |
| 29:12      | widget. But there's two [[Shortcuts]] actions. So you can run a shortcut directly from the control           |
| 29:18      | centre, which is also now the, the, the flashlight or torch and camera options on the home screen.       |
| 29:25      | Those are [[Control Centre]] buttons. You can change them. So you can run a shortcut from your home          |
| 29:30      | screen and app developers like [[Greg Pierce]] (Agiletortoise) and the [[Omni Group]] will be able to add         |
| 29:36      | their own actions. So you can have a create new draft and add tasks to your task manager. And,           |
| 29:44      | you know, [[Halide]] and, and all of these other app developers will be able to add their own actions.       |
| 29:51      | So if you want to use a custom camera app or custom calculator app like P calc instead of                |
| 29:56      | calculator, you're gonna be able to add actions just for that in [[Control Centre]] and on the lock          |
| 30:02      | screen. And that is great. But, you know, it gets a little better, doesn't it, David?                    |
| 30:08      | Yeah, I mean, it's just like, this is something we've wanted for so long, just the ability to            |
| 30:13      | have third party apps in the [[Control Centre]]. Or like you said, [[PCalc]], right? I mean,                    |
| 30:18      | I don't want to use [[Apple Calculator\|Apple's calculator]]. I want to open [[PCalc]] from the [[Control Centre]].                   |
| 30:21      | That's going to be possible now. So I think it's going to be fun really setting this up. And I mean,     |
| 30:26      | eager to hear from some of the listeners too, what they're doing with it, because, you know,             |
| 30:30      | customise [[Control Centre]] now, it's a it's a good time to come up with some interesting ideas.            |
| 30:36      | One thing I wanted to mention before we moved on there, David, is something that kind of flew            |
| 30:40      | by a little bit in the keynote. But I feel like it's going to be really great is [[Control Centre]]          |
| 30:44      | controls the home screen buttons, or the actions available for [[Control Centre]] are available on the       |
| 30:50      | home screen too. They are also going to be available inside of or on your action button.                 |
| 30:54      | So if an app developer wants to create an action for the action button, it's not going to have to        |
| 31:00      | be by going through [[Shortcuts]] anymore. And some folks will say that's that's [[Sherlocking]] [[Shortcuts]].     |
| 31:06      | But, you know, we saw this happen with the Apple Watch controls and lock screens and home screens        |
| 31:13      | and backgrounds with focus modes. People did this manually using [[Shortcuts]]. And then Apple went,         |
| 31:20      | that's a really good idea. We're going to pull that in and make that part of your focus mode.            |
| 31:24      | They've seen that people are using a shortcut to run a particular action. And the app developers         |
| 31:28      | are linking people to a shortcut that they can install to do a thing from the action button.             |
| 31:33      | Well, now they've they've just made it so that it's going to become part of the action button.           |
| 31:38      | And I feel like this is a really great example of [[Shortcuts]] improving everybody's user experience.       |
| 31:42      | Yeah. You know, one other related topic of automation that we haven't gotten the outline                 |
| 31:49      | but I just wanted to mention quickly is a window management, you know, that is something people          |
| 31:55      | automate often. And I spent some time using the beta, the Sequoia beta, and it is actually pretty        |
| 32:03      | good implementation of window management. So it's got the drag, you know, and it creates an              |
| 32:08      | outline. So, you know, you can get the halves and the quarters of the screen very easily.                |
| 32:12      | This is something Windows has done for a while. But they also added some features like if you            |
| 32:16      | hold the option key down, it gives you a preview of what is where it's going to drop. And they've        |
| 32:21      | got keyboard shortcuts. And interestingly, they've got keyboard shortcuts that act on multiple           |
| 32:27      | windows, which is very automation, you know, so like if you've got two windows open, each on             |
| 32:34      | half of the screen, which is something I do often, if you ever wanted to switch them, like I don't       |
| 32:40      | sit like directly centre behind my giant monitor. So the the one I like right in is usually the          |
| 32:46      | left side and the one I reference is the right right side. But if you hit a control shift option         |
| 32:52      | in the right or left arrow key, you can actually flip the windows. And it's like there's actually        |
| 32:57      | some nice features in here for automators. And I think that'll be good. Yeah, I feel like it's           |
| 33:04      | also a case of those people who, you know, if they've looked at something like [[Moom]] or [[Magnet]]            |
| 33:10      | or [[BetterTouchTool]], and, you know, all these other, you know, solutions for managing their             |
| 33:16      | windows on the Mac and gone, that sounds like a lot. It's too much. I don't want that. It's              |
| 33:20      | going to be a good gateway drug. And for some people, it's going to be more than enough. You             |
| 33:24      | know, and that's absolutely fine. But for some people, it could be the start of, you know,               |
| 33:29      | learning a bit more about automation and so on, which, you know, at the end of the day,                  |
| 33:32      | they may not end up being automators fans. And that's okay. As long as people are finding ways           |
| 33:38      | to improve their workflow that help them to be more efficient and happier, that's great. And so          |
| 33:44      | I'm really glad to see all of these automation features coming in. This episode of Automators            |
| 33:51      | is brought to you by Computex 2024. It was world's largest AIoT. That's artificial intelligence of       |
| 33:59      | things and startup shows. And it happened in Taipei from June 4th to 7th. And it didn't matter           |
| 34:06      | who you were, Computex had something for everybody. So I was fortunate enough to attend Computex with    |
| 34:12      | Kathy Campbell, host of Conuit. And we got to see so many cool things. There was an amazing              |
| 34:18      | keynote from CEO of AMD, Dr. Lisa Sue, which was talking all about AMD's new chips, but also how         |
| 34:26      | they are using AI and their partnerships with HP and Lenovo and more, and how all of this is             |
| 34:33      | tying together with AI and of course, the internet of things as well. In addition to that, we saw        |
| 34:39      | some really cool hardware from some new, from some companies, including some things which will           |
| 34:44      | definitely be a value to automators listeners in the future, such as Cooler Master's amazing new         |
| 34:51      | controllers for your devices. At Computex 2024, there was everything from cutting edge technology        |
| 34:58      | with AI computing, advanced connectivity, and future mobility. And it was all about exploring            |
| 35:03      | the latest trends and innovations shaping the future of technology. And there were so many               |
| 35:08      | industry leaders there. It was the chance to skyrocket anything, including startups with                 |
| 35:14      | Inavex, which was Computex's international startup hub. And that really allowed people to                |
| 35:20      | facilitate connections. I saw so many people doing, it was almost meet-cutes on the conference           |
| 35:25      | floor where somebody would run into somebody else and it turned out that was the exact person that       |
| 35:30      | they needed. And there were so many thought leaders there as well, with keynotes from AMD,               |
| 35:35      | Intel, Qualcomm, MediaTek, Supermicro, NXP, and Delta, and industry experts leading workshops,           |
| 35:42      | which were just amazing for getting really valuable knowledge and insights. So if you are                |
| 35:48      | ready to find out more about Computex and maybe go next year, then you should head over to               |
| 35:54      | www.computextaipei.com.tw/automators. And you can find out all the information there.               |
| 36:03      | Or you can click the link in the share notes. Don't miss out. This is an incredible opportunity          |
| 36:08      | to be at the forefront of one of the world's largest AIoT and startup shows. And Computex                |
| 36:14      | really is going to be focusing on AI and all that means going forwards. And software in particular       |
| 36:20      | is really important to them. So our thanks to Computex for sponsoring this show and all of Relay FM.     |
| 36:29      | [[HomeKit]], Rose. What do we do with [[HomeKit]] this year?                                                     |
| 36:33      | Well, there's some little things, but they're also not that little in some ways because one of           |
| 36:40      | the things that we have been asking for for a really long time is guest access. And the ability          |
| 36:48      | to add somebody as a guest to your smart home. So say, for example, somebody's coming over and           |
| 36:54      | pet sitting for you. Maybe it's just in your case that your entire family are out for the day            |
| 37:02      | and doggie daycare is closed or something. So somebody's going to come over to check on your             |
| 37:07      | dog. Or maybe you're out for a bit longer and somebody's going to come and water your plants.            |
| 37:12      | Or you've just got somebody and they're going to come stay with you for a while. And they don't          |
| 37:16      | need full access to everything in your home. Imagine grandma turning the lights on and off in            |
| 37:22      | your bedroom. You probably don't want that. But being able to do things like access the locks            |
| 37:28      | to get in and out in the garage and security system, that's probably what we're more looking for.        |
| 37:34      | And so [[HomeKit]] is going to get, I say is going to because I tried this in the beta. I tried              |
| 37:41      | to David to add you as a guest to my home, but I only get the option to add people as residents          |
| 37:45      | to my home right now. So I don't quite know what's going on there. And I'm going to have to figure       |
| 37:51      | that out. But guest access is coming. And it's specifically going to be with access to security          |
| 37:57      | things. And I say security things because last year we got logging. So you can have logs set             |
| 38:06      | when or created whenever certain things access or accessed or accessed and controlled,                   |
| 38:13      | which is a really good idea. And especially considering how important these [[HomeKit]] things               |
| 38:18      | are, if somebody leaves a door open, for example, it would be nice to know who was the last person       |
| 38:24      | that controlled that door and things like that. But there's going to be that same logging available      |
| 38:30      | with the guest access to your home so that you'll be able to see exactly what's happened                 |
| 38:36      | and when, which is just a really good idea.                                                              |
| 38:38      | Yeah, I agree. I don't think it's available yet. I was trying to figure it out too. But often this       |
| 38:44      | happens, the end of the first beta doesn't always have everything in it. In fact, this year, more        |
| 38:48      | than ever, I think there's a lot of stuff they don't have in that first beta. Home key automatic         |
| 38:54      | unlock within six feet. I feel like at some point I'm going to have to replace my locks to the more      |
| 39:00      | modern home key stuff because the ones I have are older and they work with my existing locks, but        |
| 39:07      | you know, every year, it gets a little more tempting to get the new fancy ones.                          |
| 39:13      | Yeah, no, I know what you mean. Like home key is already pretty cool because you can use your            |
| 39:20      | iPhone or an Apple Watch to unlock the door by just putting your device really close to it.              |
| 39:26      | But you have had to authenticate with that. And now they're giving you the option to just keep it        |
| 39:31      | in your pocket and not pick up your watch and try and use that to unlock your door. If you're            |
| 39:39      | within six foot, you can unlock the door. And this is something that you have to turn on. So if          |
| 39:44      | you've got multiple doors right next to each other and you don't want that, you want to have to get      |
| 39:48      | your phone or watch out of your pocket. Well, your watch probably isn't in your pocket. If you want      |
| 39:52      | to have to get your phone out of your pocket or interact with your watch to do that, then you'll         |
| 39:57      | still be able to. But I feel like for a lot of people, you know, this will be really great,              |
| 40:02      | you know, you get out of the car and you walk to the door and as you walk to the door, it unlocks.       |
| 40:06      | You know, so you can bring in all the shopping in one go because, you know, your door unlocks and        |
| 40:11      | so you can just, you know, nudge the handle down with your elbow and shove your way into the house       |
| 40:16      | without having to go back to the car for a second load of shopping bags because you're one of those      |
| 40:20      | people like me that likes to try and carry it all at once. That's probably just me being a weirdo.       |
| 40:25      | But, you know, I'm sure this is going to be useful for a lot of people and also for accessibility        |
| 40:29      | purposes as well. You know, folks with mobility problems, be they temporary or permanent,                |
| 40:35      | this will be really nice to give them one less thing to try and fuzz with to get into the house.         |
| 40:40      | Yeah. The way I've been solving this currently is I just tell my watch, you know, unlock the front       |
| 40:44      | door when I get in the driveway. But the problem often, it works consistently, but not 100%. And         |
| 40:51      | I think the problem is sometimes it gets confused whether it's still on cellular or now connecting       |
| 40:56      | to Wi-Fi and just far enough away. And, you know, this is just a rock solid solution. You get within     |
| 41:02      | six feet, it senses the device, it unlocks. And I think that is kind of what the kind of things          |
| 41:08      | we're looking for. You added two to the outline that I don't know anything about. So I'm going to        |
| 41:12      | let you tell us about energy provider integration and robot vacuum supply. Yeah. Are you with Pacific    |
| 41:18      | Gas and Electric by any chance, David? Because there's a feature. Well, there's a feature only           |
| 41:25      | available in California, at least to start with. And if you are using Pacific Gas and Electric,          |
| 41:31      | Apple will partner with them to be able to pull your energy usage data into [[HomeKit]],                    |
| 41:36      | into the [[Apple Home\|home]] app. So you're going to be able to see from in the home app what your current              |
| 41:42      | data usage is and I guess what the bill is like. I don't exactly know what precisely this will look      |
| 41:48      | like for everybody else, but you'll be able to see your electricity usage on a daily, weekly,            |
| 41:54      | monthly, six months or yearly sort of graph. So you're going to be able to see, you know,                |
| 42:01      | how much of your energy was used during peak times and off peak times or similar. I suspect this is      |
| 42:06      | going to massively vary based on who your energy provider is and what data they have and what sort       |
| 42:13      | of plan you're on. You know, I don't have specific peak and off peak times to my electricity usage.      |
| 42:20      | So that's not a thing for me, but I already have my electricity usage locally through [[Home Assistant]].    |
| 42:25      | So I'm hoping that I'm going to be able to, you know, hook that up at some point to provide that         |
| 42:30      | with, to tie that into [[HomeKit]]. But I do think that this is quite nice, especially for folks             |
| 42:36      | who, you know, have electric vehicles and so on. They're not necessarily going to have to,               |
| 42:40      | you know, go out to whatever, you know, the utility company apps really generally are just               |
| 42:46      | not good. In my experience, I'm sure there's exceptions, but in general, I found that they're            |
| 42:51      | just universally bad. So I feel like being able to pull this information into smart home stuff.          |
| 42:58      | And maybe at some point, you know, you'll be able to use it as a condition for an automation trigger.    |
| 43:04      | So hey, you know, if the sun is out or, you know, when the room hits this temperature,                   |
| 43:11      | if my energy usage today is below this, then turn on the air-con. But if it's above this,                 |
| 43:16      | then don't turn on the air-con or something like that. You know, who knows where this is going            |
| 43:21      | to go. But I have a feeling that Apple plan to make it part of their green stuff, which is always        |
| 43:26      | a nice option. Well, I could see a use for it as an electric car owner, like, you know,                  |
| 43:30      | determining when the electric car gets charged. And I'll have to look into this and see if it's          |
| 43:35      | something that's actually supported. There are different, like, divisions of PG&E. So I don't            |
| 43:39      | even know if I'm in the right one. But yeah, I know Micah Sargent was able to set up on his iPad.        |
| 43:47      | So that's, you know, that that's working for him. But that doesn't mean say that it's available          |
| 43:51      | for you just yet. It does say that it'll be available to various, you know, different people             |
| 43:56      | at different times. So and it's if you're eligible, which is always an interesting way of phrasing it.   |
| 44:03      | I don't, I also don't understand the idea of robot vacuum support. I thought that if you,                |
| 44:08      | there already were robot vacuums that had [[HomeKit]] support built in.                                     |
| 44:12      | No, no, no robot vacuum has had [[HomeKit]] support, which is a real shame because,                         |
| 44:16      | you know, I personally think that the ideal time to run a robot vacuum is just as you leave the          |
| 44:24      | house. Okay, because that gives you like, you know, that way you're awake, you've had time to look       |
| 44:28      | around and make sure that there's nothing on the floor that shouldn't be no pets or children have        |
| 44:32      | had accidents and left things somewhere. You know, you've not accidentally left a blob of yogurt on      |
| 44:37      | the kitchen floor that a robot vacuum is just going to smear into that rug next to the dining table      |
| 44:42      | or anything like that. So robot vacuum support is coming to [[HomeKit]], which yeah, I mean,                |
| 44:49      | personally, I'm thinking it's mostly going to be great for a unification of notifications.               |
| 44:55      | You know, at the moment, I have to get all the notifications through, in my case, I can do it            |
| 44:59      | through [[Home Assistant]] or I can do it through the [[Ecovacs]] app. But, you know, being able to see in        |
| 45:05      | a [[HomeKit]] in the home app that, oh yeah, you know, as I'm in the kitchen controlling, you know,         |
| 45:12      | the kitchen information and checking what the temperature is in there, oh, right, that, you              |
| 45:15      | know, I need to empty the dustbin or I need to, you know, refill the clean water because it needs        |
| 45:21      | that or empty the dirty water or something. But yeah, I think this will mostly be for                    |
| 45:25      | automations and it's pretty awesome that that's coming. Yeah, my robot vacuum is old, so it's            |
| 45:31      | not going to support this stuff. And my automation, I'm holding up air quotes, is as I walk out the      |
| 45:36      | door, I lean over and push the button. But someday this one will die. And when I get a new one,          |
| 45:42      | I'm going to get one that does this because I do think it would be more convenient to be able to         |
| 45:47      | trigger it remotely or even like, I don't know, on the way home, like, oh, run the vacuum before I       |
| 45:52      | get home. Yeah, I think that that is definitely something that it will be, you know, really nice         |
| 45:58      | for folks when, you know, when they get around to it. And I think, you know, we're also at that          |
| 46:04      | point now where more and more people are going to be looking for or looking at smart home things,        |
| 46:12      | which will include things like robot vacuums. So it's pretty exciting to see.                            |
| 46:17      | So you're going to just dump [[Home Assistant]] now that they've made these changes, right?                  |
| 46:21      | Just use [[HomeKit]]. And not at all, no, the automations in [[HomeKit]] have not got any                      |
| 46:25      | better as far as I can tell. In fact, I did have one set up because I, you know, I always try and        |
| 46:31      | keep a couple of things in [[HomeKit]] for, you know, directly set up in [[HomeKit]] for testing purposes      |
| 46:38      | primarily. And yeah, my automation that I had set up in [[HomeKit]] failed. So far it's failed two out      |
| 46:44      | of two days in a row since installing the beta. So that's not a good sign. I don't even have the         |
| 46:49      | beta on the [[Apple TV]]. That's, you know, what the [[HomeKit]] hubs or the [[HomePod\|HomePods]], it's just on my          |
| 46:54      | iPhone and it's just managed to go wrong already. So yeah, I'm glad I'm not a hundred percent            |
| 47:00      | reliant on that. But yeah, I'm not ditching home assistant anytime soon. But as it is,                   |
| 47:06      | it's good to see that, you know, it's perhaps going to be less required for some folks.                  |
| 47:13      | This episode of The Automators is brought to you by ExpressVPN. Go to expressvpn.com/automators                     |
| 47:19      | right now for high speed, secure and anonymous VPN services, and you get an extra            |
| 47:25      | three months for free. Going online without ExpressVPN is a bit like driving without car                 |
| 47:31      | insurance. Why take the unnecessary risk? When you connect to an unencrypted network and cafes,          |
| 47:37      | hotels, airports, or whatever, your online data isn't secure. Someone on the same network could          |
| 47:43      | gain access to your personal data, including passwords, bank logins, credit card details,                |
| 47:48      | and other things you wouldn't want in someone else's hands. ExpressVPN stops hackers from                |
| 47:54      | stealing your data by creating a secure encrypted tunnel between your device and the internet.           |
| 48:00      | There are loads of reasons to choose ExpressVPN over other VPNs. It's super secure. It would             |
| 48:07      | take a hacker with a supercomputer over a billion years to get past ExpressVPN's encryption.             |
| 48:13      | It's easy to use too. Just fire up the app and click one button to get protected.                        |
| 48:18      | And it works on all of your devices, phones, laptops, tablets, and more. So you can stay                 |
| 48:23      | secure and on the go. Plus it's been rated number one by tech reviewers like CNET and The Verge.         |
| 48:30      | I'm about to do some travel myself. We've got the Relay FM event and I've got a little                   |
| 48:35      | vacation planned. And you can bet I will be using ExpressVPN throughout. When I go to London,            |
| 48:41      | it'll be international travel. I don't even have a cellular plan there, but I will be using              |
| 48:45      | Hotel Wi-Fi, which normally I wouldn't do, but ExpressVPN protects me. Just push the button              |
| 48:51      | and you're off to the races. So secure your online data today by visiting ExpressVPN.com                 |
| 48:57      | slash Automators. That's expressvpn.com/automators. And you can get an extra three              |
| 49:05      | months of ExpressVPN for free. That URL one last time, expressvpn.com/automators. And our                |
| 49:12      | thanks to ExpressVPN for their support of the Automators podcast and all of Relay FM.                    |
| 49:21      | So Rose, what do you think of [[Apple Intelligence]]? First of all, maybe what do you think of the           |
| 49:26      | word [[Apple Intelligence]]? I personally think this is very clever, right? They've gone for AI,             |
| 49:33      | but it's AI and it's [[Apple Intelligence]] as well as *artificial intelligence*. So yeah,                     |
| 49:41      | that is very smart. And they said all of the good things. And when I say all of the good things,         |
| 49:50      | I mean, they talked about how your data is yours, is not stuff that can just be fed into a giant         |
| 49:57      | machine that's then going to use that to generate, you know, my calendar information should not be       |
| 50:02      | used to calculate anything for you unless I specifically have invited you to a calendar                  |
| 50:08      | event in which case that calendar event will be included in the information for you because that's       |
| 50:12      | now in your calendar. And they talked about, you know, how the personal context, you know, knowing       |
| 50:20      | your iPhone knows who your partner is or your parents are or your children. And so being able            |
| 50:26      | to say what time does my daughter's flight land is, you know, that's a very natural thing to say.        |
| 50:33      | And then you might realise, actually, no, I actually have two daughters. So I mean, you know,            |
| 50:38      | I mean, Rebecca or, you know, whichever the correct name of your child is in that instance.              |
| 50:42      | And the fact that you can trip over your words and it will use your personal context and information     |
| 50:48      | to pull that in, and it's going to do as much as possible on device is great. Of course,                 |
| 50:55      | there's a limit to what can be done on device. And we know that the machines that do all these,          |
| 51:00      | you know, smart AI stuff, they use a huge amount of energy. So last thing you want to do is ask          |
| 51:07      | your phone for a suggestion for a recipe for, you know, these four things that you've got in the fridge. |
| 51:12      | And, you know, your phone isn't like, I don't know, 40% battery and it goes down to 10% battery,         |
| 51:19      | because it tried to calculate what recipe it should use. So they also added, you know,                   |
| 51:24      | a cloud option, but they are, you know, getting that or setting that up so that people can               |
| 51:31      | independently verify that it's safe and secure and data is not going to be stored there,                 |
| 51:35      | and so on. And I think that this is a really good start. You know, the first half of the                 |
| 51:41      | keynote, Apple didn't mention [[Apple Intelligence]] at all. They were, you know, just talking about         |
| 51:46      | [[App Intent\|App Intents]] and so on. And then in the second half, they went, Oh, by the way, we know we've been going  |
| 51:50      | at 2x for the whole, you know, like first thing, but that's because everything's to do with [[Apple Intelligence]].        |
| 51:55      | And this is how it all ties in together. And I think it's really nice the way              |
| 52:00      | that they've, you know, a lot of these things aren't going to require going off to other servers.        |
| 52:04      | It can all be done locally on your device. But, you know, for those things that do need that,            |
| 52:09      | then, you know, we'll be able to take advantage of those options.                                        |
| 52:14      | Yeah. I mean, I feel like Apple did it the Apple way. And that's what we're looking for. They're         |
| 52:20      | going to have artificial intelligence, but it's going to be rational. It's going to be private.          |
| 52:26      | It's not going to be probably as powerful as what you get with a big [[Large Language Model\|LLM]], like, you know,                |
| 52:33      | [[Google Gemini]] or open, was it a [[ChatGPT]] of [[OpenAI]]? But in some ways, I think it's better because        |
| 52:41      | it has access to your data that those things don't have. So I'm very excited about my concern,           |
| 52:48      | honestly, is, you know, can they cash the check that they wrote? You know, if you look at [[Siri]],          |
| 52:56      | they really never did deliver on the promise. You know, when [[Siri]] first came out,                        |
| 53:00      | was it, I guess, 13 years ago now, I would never have guessed that it wouldn't be way better than        |
| 53:06      | it is. I would have assumed that by now it would have been amazing and it's not. And, you know,          |
| 53:12      | the question is, I think they have the ability, just are they going to give it the attention and         |
| 53:16      | priority it needs? Yeah, yeah, I feel like they really are because one of the things that they           |
| 53:23      | have done as part of this is they have partnered with [[ChatGPT]]. But I feel like they're also doing        |
| 53:29      | this the right way in the sense that if [[Siri]] doesn't have the answer to something, so say, for example,  |
| 53:35      | you were looking in your fridge and you saw that you had bacon, cheese, eggs, maybe some like bell       |
| 53:42      | peppers or something. And you said, hey, you know, hey, Apple lady, give me a recipe to use, you know,   |
| 53:49      | eggs, bacon, cheese, bell peppers. And [[Siri\|Siri's]] life, I don't know what to do with that. It will then      |
| 53:56      | prompt you to ask [[ChatGPT]]. And if you say yes, which also you're going to be able to do by nodding       |
| 54:02      | your head if you've got AirPods in, I freaking love that. That's amazing. That's a very, very,           |
| 54:07      | very nice improvement to the whole [[Siri]] interaction. But the fact that you'll be able to say yes,        |
| 54:13      | please go and ask [[ChatGPT]] about this means it can then go off and ask, you know, some of the more        |
| 54:18      | powerful, large language models for this sort of thing. Of course, we are going to have to be a bit      |
| 54:24      | careful and I'm interested to see how Apple addresses, you know, the mirage problem of                   |
| 54:30      | [[ChatGPT]] not coming back with what I would expect from those ingredients, which would be an omelet.       |
| 54:35      | And instead coming back with brownies, that would be concerning if it came out with brownies. And        |
| 54:41      | I don't know how Apple is going to handle this and what kind of disclaimers they're going to put         |
| 54:46      | on responses from [[ChatGPT]]. But it is, you know, nice that they are going to have the option              |
| 54:53      | for things like that. And if you have a page at GPT subscription, then you're going to be                |
| 54:57      | able to sign into it so that you can get access to your extra features and so on. Again, this is         |
| 55:02      | not stuff that's available yet to us to test, so we can't actually play with it in common on how it      |
| 55:09      | works. But I do think that, you know, by looking at it through this lens, they've already come up        |
| 55:15      | with some improvements that are just to like the overall [[Siri]] experience, which I personally have        |
| 55:22      | wanted for a long time. Like, I don't know if you've ever tried type to [[Siri]] David, it's a setting       |
| 55:27      | that you can turn on in the accessibility features. But as of iOS 17, at least right now in iOS 18,      |
| 55:34      | this is a binary feature. So you can either talk to [[Siri]], or you can type to [[Siri]], you cannot have       |
| 55:39      | both enabled at the same time. And one of the things you will be able to do, you know, when              |
| 55:45      | this comes out a bit later on, is you'll, a type to [[Siri]] will always be enabled if you just tap on       |
| 55:51      | the [[Siri]] bubble. So you'll be able to tap on it. And then, and then you can just type instead,           |
| 55:55      | which sometimes is just a better way to interact with something to ask it for information.               |
| 56:02      | Especially if you're in a very noisy environment, though, of course, you know, things like the           |
| 56:06      | the noise isolation coming to [[AirPods]] and noise isolation already built into the iPhone can help         |
| 56:12      | there. But sometimes, you know, there's there's just a word that you know how to spell, and you          |
| 56:18      | know what it means. But [[Siri]] is going to absolutely completely garble what this is. So for example,      |
| 56:24      | for me, [[MongoDB]], it's a it's a it's a kind of database that I use at work. But if I say that             |
| 56:31      | into [[Siri]], like 80% of the time, it comes up with some very weird things, which I don't want it          |
| 56:35      | coming up with. And so if it's going off and putting that weird stuff into [[ChatGPT]], that's              |
| 56:40      | that's a problem. But I'm going to be able to type to it instead, which I feel like is also going        |
| 56:44      | to improve the results that people get in general, regardless of whether or not they're using the        |
| 56:49      | advanced [[Apple Intelligence]] features. Yeah, I really hope that the [[Siri]] stuff comes true because,        |
| 56:56      | you know, for so long, we've all been wanting to be better. And they even called it in the               |
| 57:00      | presentation that this is like, I think a restart or reboot of [[Siri]]. And we just got to see it.          |
| 57:07      | But you know, they change the interface, they change a lot about the application.                        |
| 57:12      | And it's going to really be an automation tool. I mean, I was thinking about this show as I was          |
| 57:17      | watching the keynote, because we've taught so many people how to use [[Shortcuts]]. But                      |
| 57:21      | ultimately, wouldn't it be great if you could just ask your phone to do something                        |
| 57:25      | without writing a shortcut and have it do it for you. And, and I think that's what they're               |
| 57:30      | really aiming for. How close do they get to the target? We won't know until these betas kind of          |
| 57:36      | get out and we get a chance to use them. And we'll be reporting back to the automators audience.         |
| 57:41      | But I'm very positive about it, because I do think that they are taking it seriously. And I              |
| 57:46      | think they understand how important this is. Yeah. Yeah. And I think also this is where all of the       |
| 57:53      | app intent stuff really comes into play, you know, those things are going to be available in             |
| 57:57      | [[Control Centre]] and on your home screen and through the action button, but they're also going to be       |
| 58:02      | available through [[Siri]]. So if you want to, you know, open my omelette recipe in [[Crouton]], that's            |
| 58:10      | something that I'm not necessarily going to have to, you know, set up through [[Shortcuts]] where I'm        |
| 58:15      | going to have to say like, open [[Crouton]] recipe. And then, you know, and then my shortcut goes, oh,       |
| 58:20      | which recipe and then takes like the words that I input and then tries to run a search or something.     |
| 58:25      | I'm making this up and I can't remember off the top of my head if [[Crouton]] has a search feature           |
| 58:29      | available in [[Shortcuts]]. So if it doesn't, folks, please don't blame me, don't blame the developer,       |
| 58:33      | he's lovely. But, you know, all of that stuff, you know, it's the sort of thing that users want.         |
| 58:41      | Okay, like, you know, hey, open my omelet recipe or something like that. That is something that          |
| 58:46      | somebody would say to their phone and they would expect their phone to know because they've got          |
| 58:49      | a recipe app installed and it's got an omelet recipe in it. But that information is not necessarily      |
| 58:54      | yet available to [[Siri]]. And I feel like a lot of what we're seeing at least at the moment is about        |
| 58:59      | surfacing this information to [[Siri]] and then providing the links. We already saw some of this             |
| 59:04      | coming before through focus modes, where you can link. So the person that you talk to through [[Slack]]      |
| 59:13      | or [[Discord]] can now be linked to a contact so that then you can allow notifications from a person         |
| 59:20      | at all times. So for example, David, you're one of those people that can reach me pretty much            |
| 59:25      | regardless of [[Focus Mode]]. And so are my parents. But if you were to message me on the *Relay Slack*        |
| 59:31      | a couple of years ago, and I'd had this focus mode or, you know, before [[Slack]] actually added this,       |
| 59:39      | then I wouldn't have got that message from you until I next looked into [[Slack]],                           |
| 59:44      | because I wouldn't have most of those notifications enabled. But now we do. And because those            |
| 59:50      | notifications are aware of this [[Slack]] person is this person person and, you know, this [[Instagram]]         |
| 59:56      | person, perhaps this person person, that then ties together. And that means that if [[Slack]] says,          |
| 01:00:03   | oh, right, you know, there's a reminder about a call with David, then that means that that               |
| 01:00:10   | information, if that gets surfaced to [[Siri]], then I can say, hey, David, what do I need to remember       |
| 01:00:17   | about David? Sorry, hey, hey, Apple lady, what do I need to remember about David? And [[Slack]] can          |
| 01:00:22   | surface the fact that I was going to talk to you in half an hour or something like that. And I feel      |
| 01:00:26   | like this is where it all really ties together, you know, there's a lot of hidden threads that are       |
| 01:00:31   | woven very deep down that we're not necessarily seeing. But as we start to pull on them, I think         |
| 01:00:37   | it will all come to the surface. And, you know, it'll be really useful for us, you know, as regular      |
| 01:00:44   | users, but also as power users and automation users, to get a hold of all of this data. And              |
| 01:00:49   | fingers crossed a little bit gets surfaced in [[Shortcuts]] too. I can't wait. Can't wait.                   |
| 01:00:54   | We are the Automators podcast. You can find us at relay.fm/automators. Want to thank our                 |
| 01:00:59   | sponsors, LinkedIn jobs, ExpressVPN and Computex. We have Automators Max. If you can sign up for         |
| 01:01:06   | that, that gets you the ad for extended version of the show. Today on Automators Max, Rose just          |
| 01:01:10   | went to Asia. We're going to be talking about some travel fun from Rose the geek. And I can't wait to    |
| 01:01:16   | find out what you have been up to, Rose. Otherwise, we'll see you next time. Goodbye, folks.             |
