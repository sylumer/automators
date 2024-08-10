---
status: "incomplete"
fc-date:
  year: 2020
  month: 03
  day: 13
fc-category: "podcast"
podcast: "Automators"
published: 2020-03-13
duration: 4384
formattedduration: "01:13:04"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/45"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators045.mp3"
episode: 45
title: "45: LaunchCuts, Feedback, and More!"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this week Rosemary and David dive headfirst into the feedback pile and look at LaunchCuts as well as the new PushCut automation server feature - and eye up some beta apps too!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 045 Discussion](https://talk.automators.fm/t/automators-45-launchcuts-feedback-and-more/6863)

# Sponsors
- [[Pingdom (Sponsor)|Pingdom]] - Start monitoring your website performance and availability today, and get instant alerts when an outage occurs or a site transaction fails. 
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Kensington (Sponsor)|Kensington]] - The Professionals Choice. Find the right docking solutions for your organisation today.

# Show Notes
- [LaunchCuts](https://launchcuts.com/) - Folders for Shortcuts, $7.99
- [tow.com](https://tow.com/) - Adam's website
- [Random UUID (v4) Generator | UUIDTools.com](https://www.uuidtools.com/generate/v4)
- [Toolbox Pro](https://toolboxpro.app/)
- [Automators #42: Toolbox Pro with Alex Hay - Relay FM](https://www.relay.fm/automators/42)
- [Launched 9: Rosemary Orchard](https://launchedfm.com/episodes/9-RosemaryOrchard/)
- [Nested Folders Podcast](https://nestedfolderspodcast.com/)
- [Take Control of Shortcuts - Take Control Books](https://www.takecontrolbooks.com/shortcuts/)
- [Product Feedback - Apple](https://www.apple.com/feedback/) - For any kind of feedback
- [Feedback Assistant - Apple](https://feedbackassistant.apple.com/) - Beta feedback
- [Brydge Keyboard for iPad](https://www.brydge.com/)
- [Is it worth it to learn AppleScript at this point and time? - Automators Talk](https://talk.automators.fm/t/is-it-worth-it-to-learn-applescript-at-this-point-and-time/6834/1)
- [AppleScript 1-2-3: Sal Soghoian, Bill Cheeseman](https://amzn.to/3aR2fP1)
- [NoteCuts, Automatic, Background Triggering of Shortcuts on Local or Remote iOS Devices - tow.com](https://tow.com/2019/06/02/notecuts/) - Adam Tow's shortcut which enables more automation
- [‎Elgato Stream Deck Mobile for iPhone or iPad](https://apps.apple.com/th/app/elgato-stream-deck-mobile/id1440014184)
- [Just Timers](https://justtimers.app/)
- [Charty - Create charts from Shortcuts](https://chartyios.app/) - This app is still in beta.
- [Data Jar Preview on Twitter](https://twitter.com/simonbs/status/1188891435082354690?lang=en)
- [Scriptable](https://scriptable.app/)
- [Jayson](https://jayson.app/)
- [Automators #9: Scriptable with Simon Støvring - Relay FM](https://www.relay.fm/automators/9)
- [Apple's WWDC 2020 kicks off in June with an all-new online format](https://www.apple.com/newsroom/2020/03/apples-wwdc-2020-kicks-off-in-june-with-an-all-new-online-format/) - Apple pre-empted us!
- [Home Inventory on Setapp | A powerful inventory app for your Mac](https://setapp.com/apps/home-inventory)
- [PushCut - Smart notifications that trigger your automation](https://www.pushcut.io/)
- [PushCut - Automation Server](https://www.pushcut.io/support_automation_server.html)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators. My name is Rosemary Orchard, and I'm here with David                 |
| 00:06      | Sparks, where we talk about massaging our technology in a way that it will then magically              |
| 00:11      | produce all the results that we're looking for. Hello, David.                                          |
| 00:13      | Let's bring some magic, Rosemary Orchard. Magic formation.                                             |
| 00:16      | So much magic. Yeah. Wingardium leviosa. And now I'm floating.                                         |
| 00:22      | I know what that means. I know what that means.                                                        |
| 00:24      | Well, I hope most people know what that means. For people not familiar with Harry Potter,              |
| 00:28      | that is a levitation spell. And let's levitate our spirits in today's show.                            |
| 00:32      | So I got a cold a few weeks ago, and now it has turned into a cough, but the problem is                |
| 00:38      | that cough is arriving at the same time coronavirus is in Southern California. So every time I         |
| 00:43      | go out and if I cough, people think I just killed them. So my life is complicated right                |
| 00:48      | now. I don't envy you. I sneezed on the train this morning. And the good news is, is after             |
| 00:54      | this, I immediately got a seat. The bad news is, is everybody else was sort of crowded                 |
| 00:59      | around the other end of the trap. I should point out, I used proper techniques for sneezing            |
| 01:03      | and sneezing to a tissue and used antibacterial hand gel and everything afterwards. But it's           |
| 01:07      | just that time of year where people do tend to get a little cough and a cold. And unfortunately,       |
| 01:14      | there's some bad stuff going around as well. And I don't want to make a lie to it. This                |
| 01:17      | is very serious. And I hope everybody listening is safe and taking care of themselves. But             |
| 01:22      | while you're home, if you're staying home, why don't you get better at some automation?                |
| 01:26      | Yeah. And we've got a nice little bit of a mix show here today for everybody because                   |
| 01:32      | we thought it was about time to do a feedback show. And also there's a lot of other stuff              |
| 01:36      | out there that has come across our radars recently, which is well worthy of talking about. First       |
| 01:42      | of which I'm going to dive straight into it is launch cuts. I am loving this. I have                   |
| 01:49      | pretty much replaced shortcuts on my home screen because of launch cuts, like the actual               |
| 01:53      | app. It doesn't live on my home screen anymore. I have launch cuts because it's folders                |
| 01:58      | for shortcuts. Yeah. And this is made by Adam Tow, a former guest on the show. Adam's                  |
| 02:03      | a smart guy. He made an app and it solves a very specific problem with shortcuts and                   |
| 02:09      | that's the lack of organisation. You know, like you can't, you can't put your shortcuts                |
| 02:13      | in folders. Well, if you run this app, you can. It collects your shortcuts for you using               |
| 02:19      | a shortcut rather ingeniously. And then you can just organise them in the folders. It                  |
| 02:24      | just makes in launching shortcuts so much easier. Yes, it absolutely does. And so for                  |
| 02:30      | people who've never heard of it, you know, there's an app, it's in the app store. We'll                |
| 02:34      | have a link in the show notes. I think it's $9.99. I don't remember off the top of my                  |
| 02:39      | head. But again, the info's will be in the show notes, but you buy it once and you install             |
| 02:44      | it and you set it up and it starts by running a shortcut. So it asks you to install a shortcut         |
| 02:50      | and it runs it and that grabs all of the shortcut information. And when I say all, I mean, we're       |
| 02:56      | talking colour, icon, name, you know, all sorts of things happening here. Share sheet information,      |
| 03:05      | like what kind of shortcut is this? Is it a share sheet shortcut? Or is it a shortcut                  |
| 03:10      | that is in your widget and all of that? And it puts it into launch cuts. And then launch               |
| 03:17      | cuts does magic. And, you know, like you've just thrown all these ingredients into the                 |
| 03:21      | cauldron, like you might be expecting a complete mess to come out on the other side. No, by            |
| 03:25      | default, it's got like all your shortcuts, shortcuts organised by colour, shortcuts organised           |
| 03:30      | by icon, shortcuts organised by name, development shortcuts, anything where you can share anything     |
| 03:36      | to it, where you can share dates to it, where you can share images to it, share text. And              |
| 03:41      | widgets, if it's in your widget, then it's in there. And oh my gosh, this has really                   |
| 03:45      | helped me clear up my widget on iOS, because my shortcuts widget was a complete and utter              |
| 03:50      | mess because by default, everything gets added to the widget. This is a default behaviour               |
| 03:54      | that I sincerely hope gets changed. But as it is, I'm now able to easily find everything               |
| 04:00      | that's in the widget and I can tap on the three dots and it will, you know, sort it.                   |
| 04:05      | I can't help but feel like, you know, the Apple shortcuts team has been in this marathon               |
| 04:09      | race the last couple of years. They're trying to get as many features out as possible. And             |
| 04:14      | somebody wrote on the whiteboard somewhere, better organisation, but they never quite                  |
| 04:19      | get to it, you know, because, you know, honestly, the features are more important than organisation.   |
| 04:24      | And I know for a lot of people, probably the vast majority organisation isn't a big deal.              |
| 04:28      | Most people maybe have 10 shortcuts. But if you're listening to the automators and you're              |
| 04:33      | like me and Rose, you have quite a few more than 10 and organisation does become kind                  |
| 04:38      | of unwieldy with the native shortcuts app. And this app just fixes that for you. It's                  |
| 04:42      | just such a great solution. And knowing Adam personally, you can tell how much love he                 |
| 04:48      | put into it. One of the things I like is he put those bright colours back in. I'm not a                 |
| 04:52      | huge fan of the pastel colours that they put in shortcuts. Now it's bright and shiny again.             |
| 04:57      | Yeah. And the other thing that's in there. So if you flip over to the settings of launch               |
| 05:02      | cuts, which is something that it took me a surprisingly long time to do because why do                 |
| 05:06      | I need the settings for it has all sorts of things keyboard shortcuts. So you can have                 |
| 05:11      | keyboard shortcuts assigned to shortcuts. So you just flip over to launch cuts. And then               |
| 05:16      | you tap like command one, and it runs a specific shortcut for you. And that's it. Like you             |
| 05:21      | don't need to think about it and you can reduce your shortcut height. And that sounds like             |
| 05:25      | a very minor thing to do. But if you think about how big those boxes are in shortcuts,                 |
| 05:30      | even on a Mac screen, you can't fit that many shortcuts on screen. Well, if you reduce the             |
| 05:34      | height of them, guess what? In launch cuts, you can. You can get way more on your screen.              |
| 05:40      | And that's really nice. Yeah. No, I just think it's a really well done application.                    |
| 05:46      | The startup procedure, you know, just setting up for the first time, he walks you right through it.    |
| 05:52      | It doesn't require a whole lot of knowledge, really. It runs everything for you. It imports            |
| 05:57      | and sets up categories. I don't know. I just add them, you know, congratulations, Adam,                |
| 06:02      | on getting this out. It's an excellent addition to anybody that's a shortcuts power user.              |
| 06:08      | Definitely. And I have to say, I mean, I've got a couple of ways that I'm using launch cuts.           |
| 06:14      | Of course, it's folders. And so I've done some of the old fashioned, you know, like,                   |
| 06:17      | okay, so here's a folder, and I'm going to go and find these five shortcuts and put them in            |
| 06:21      | this folder. And that's it. But you can also create smart folders. And for people not familiar,        |
| 06:28      | smart folders automatically update, they're in Finder on Mac OS, and they just automatically           |
| 06:34      | update. And you can say, okay, so I want, you know, obviously you could say specific shortcuts,        |
| 06:41      | but you can also search for shortcuts matching all criteria or matching any of a certain number        |
| 06:46      | of criteria. Or you could have shortcuts, which are only shortcuts that aren't in any other folder,    |
| 06:52      | which is something that I have just created, like an hour before the show. Because I've realised       |
| 06:58      | that I have a whole bunch of stuff to where I should probably actually get around to getting rid       |
| 07:02      | of this. But the only way I'm going to do that is if I find out what I haven't yet filed, and trying   |
| 07:06      | to figure that out in shortcuts, like going through and processing everything, it's a bit of a         |
| 07:12      | nightmare when you've got 900 shortcuts. So being able to do that is definitely great.                 |
| 07:19      | You have 900? I think I have around 900. Okay, give me a moment. I'm creating a shortcut. Okay,        |
| 07:26      | so get shortcuts. Where did it? Okay, get my shortcuts, and then count. There we go. Okay,             |
| 07:35      | running this. This may take a moment. I have 399. I think I may have just crashed shortcuts.           |
| 07:41      | Please hold. This is what happens when you shortcut live on air. I have 605. Okay, I                   |
| 07:50      | previously had 847. I distinctly remember that, but I've apparently actually been managing to          |
| 07:56      | clear things out. Yeah, so many of them are like little test ones I make, and I need to do a better    |
| 08:01      | job at clearing out. But I thought I was extreme at 399, but you win, Rose. You win. Yeah, well,        |
| 08:07      | there are people in our forums with considerably more. I know Adam Toe himself, the maker of           |
| 08:12      | launch cuts, has loads of shortcuts. I'm sure he's well over a thousand. Yeah, I'm sure Adam           |
| 08:18      | made this app because he needed the app. Yes, which is generally a good reason to make an app          |
| 08:24      | because you need it yourself. And I'm very pleased that this is here, and some people might be         |
| 08:31      | thinking, it's kind of pricey for an app that, I mean, it only does one thing, but at the same         |
| 08:37      | time, it does that so well. I can't deal with the fact that shortcuts is all over the place,           |
| 08:42      | and especially after I had to reinstall shortcuts on all of my devices to get the sync working again   |
| 08:47      | properly, everything's now out of order, and I don't want to sit down for hours and reorganise         |
| 08:53      | everything. That's just going to be too much work, and I don't feel like I should. But instead,        |
| 08:59      | I've been creating folders in LaunchCuts, and it's doing that for me. So now I don't need to do that    |
| 09:05      | because I have these saved folders right here inside of LaunchCuts. No, I totally agree. And           |
| 09:11      | I think that this is, we talk about how much apps cost once in a while, and it's always kind of        |
| 09:18      | harrowing because people get upset. But $10, if it is, I guess we should figure that out               |
| 09:24      | before we go off on it. But when you think about how much people spend in Starbucks and things,        |
| 09:30      | for an app, if you use shortcuts every day, this app will make the experience better.                  |
| 09:34      | That's all, I mean. Yeah, absolutely. But make your own choices. If you only have a few shortcuts,     |
| 09:40      | you don't need this app. Don't spend your money on it. But if you've got a lot and you want some       |
| 09:43      | help with organisation, that's what you get for your money. Yes, absolutely. And I'm just creating     |
| 09:50      | a shortcut to check the price because, of course, once you bought an app, it's very difficult to       |
| 09:54      | check how much it is in the app store. LaunchCuts is £7.99 in the UK app store, and I'm just           |
| 10:01      | attempting to change that to the United States, which I've just spelled with a J. There we go,         |
| 10:07      | United States. And it says it's $7.99. So it's actually way cheaper than I thought.                    |
| 10:13      | That's, in my opinion, extremely affordable for the value that it offers to those of us with           |
| 10:18      | so many shortcuts. And I also believe that Adam is going to be putting that money probably back        |
| 10:23      | into the app anyway, because that's the kind of thing. But either way, it's a very useful              |
| 10:29      | application. It's such an interesting utility. I mean, there are applications out there that create    |
| 10:35      | shortcut actions. And we've talked about some of them on the show. We may talk about a few of          |
| 10:39      | them today as well. There's never been an app that's made to organise shortcuts. And it's just         |
| 10:45      | such a great idea and really does scratch the itch if you've got a lot of shortcuts. So go check       |
| 10:51      | it out. And I don't even know the link for it. Do you know the link for it? Let's see here.            |
| 10:56      | Adam Tow.com. So he's got it on his set. Yeah, it's on Adam's website. And we'll                        |
| 11:02      | have a link in the show notes to the App Store version. But if you head to Adam Tow.com,                |
| 11:07      | then you'll see all of the stuff that Adam's produced. He's got lots of stuff.                         |
| 11:10      | And he's got a post up there from January where LaunchCuts 1.1 was released. And that's added          |
| 11:18      | things. And he has been working really hard on this to bring it out. And it's well worth it,           |
| 11:25      | in my opinion, because it's made my life so much easier. And once again, the actually URL              |
| 11:30      | is toe.com. Yeah, exactly. Congratulations, Adam. Go check it out, Automators. You may like it.        |
| 11:37      | This episode of Automators is brought to you by Pingdom from SolarWinds. Today's internet users        |
| 11:43      | expect a fast web experience. No matter how good your content or how effective your marketing,         |
| 11:48      | they'll most likely bounce if your website is loading too slowly. With real user monitoring            |
| 11:52      | from Pingdom, you can discover how your website performance issues affect your visitors experience     |
| 11:57      | so you can take action before your business is impacted. How your visitors experience your website     |
| 12:02      | differs depending on the browser, device, and platform they use. So you want to identify how           |
| 12:07      | your visitors are actually experiencing your website so you can make informed optimisations            |
| 12:12      | and deliver great performance to those who matter the most. Real user monitoring is an event-based     |
| 12:18      | solution. So it's built for scalability, meaning you can monitor millions of page views without        |
| 12:23      | compromising the fidelity of your historical data or breaking the bank in the process.                 |
| 12:29      | Get live visitor insights today with real user monitoring from Pingdom. Go to pingdom.com/       |
| 12:34      | Relay FM right now for a 14-day free trial with no credit card required. And then when you sign up,    |
| 12:39      | use the code Automators in all caps at checkout to get an awesome 30% off your first invoice.          |
| 12:45      | Thanks to Pingdom from SolarWinds for their support of this show and Relay FM.                         |
| 12:49      | All right. We've got a lot of feedback and starting with some interesting information                  |
| 12:56      | from listener Alan about UUID tools. Yeah. So Alan emailed us because we linked to a UUID generator    |
| 13:03      | in the show notes when we were talking a couple of episodes back. And he said,                         |
| 13:10      | well, actually, I have a website which is a much better tool for this. So thank you to Alan.           |
| 13:15      | And that is over at uuidtools.com/generate. Now, for people who don't remember when we were      |
| 13:21      | talking about UUIDs, a UUID is a universally unique identifier. And you need them for things           |
| 13:29      | like iBeacons and stuff like that. And some of the very cheap iBeacons that you can get from           |
| 13:34      | Aliexpress don't actually necessarily come with a UUID assigned as I discovered the other day          |
| 13:40      | when I got one and I was trying to figure everything out. And so you need to generate a UUID for this. |
| 13:46      | And this is something that you can do with Alan's tool over at uuidtools.com. He's got lots of         |
| 13:53      | different versions that you can generate over there and lots of different tools. And it's pretty       |
| 13:59      | useful. Version four is the version I've been using with the random UUID. And that's been perfect      |
| 14:06      | for me. It even lets you bulk generate UUIDs if you just need like 10 or something so that you         |
| 14:11      | can assign them all to devices in sequential order. I feel like almost all of the iBeacons you buy     |
| 14:18      | do not have a UUID assigned to them. The only ones that I had the luck with was the                    |
| 14:26      | what was the vendor that we recommended? The estimate. The estimate already had it assigned.           |
| 14:31      | But that's the only one I found that already had it assigned. So this could be really useful.          |
| 14:36      | Toolbox Pro can generate them too? Yeah, it can. So if people remember we had [[Alex Hay]] back on a       |
| 14:42      | while ago. And he is the maker of Toolbox Pro. And that also has the ability to create UUIDs,          |
| 14:50      | which is another useful feature. So they had two great ways from two of our listeners and somebody     |
| 14:56      | who's been on the show as well. Yeah. And if you don't, if you didn't listen to that show, UUID is     |
| 15:01      | something that allows you to tell the computer this is a unique item. And it's super useful for        |
| 15:08      | automation because it has to find that UUID in order to get where it belongs. The best example         |
| 15:16      | this for me is when I'm automating with Ulysses versus Apple Notes in shortcuts. Ulysses sets          |
| 15:24      | a unique identifier for each note. So when you want to append to a note or make a change to a note,    |
| 15:30      | it always goes to exactly the right one. For whatever reason, Apple Notes doesn't do that.             |
| 15:35      | Instead, you've got to search for it. So one of my tricks is to generate a UUID                        |
| 15:40      | and then drop it in the bottom of an Apple Note. And then I just search for that UUID and it's only    |
| 15:46      | going to ever find that one note. So I never have a problem. Like if you were to use like a text       |
| 15:51      | phrase or a customer name or something that could appear in more than one note, you're not necessarily |
| 15:57      | going to perform the automation where you want to. So generate a UUID, put it in the bottom of an      |
| 16:02      | Apple Note. So you're basically adding the UUID feature to Apple Notes. Yes. And I should mention      |
| 16:08      | as well that Alan's website, so I'll link to the version for generation because that's a random        |
| 16:14      | generator. But there's a button there where you can copy an API call. And then if you use that URL     |
| 16:20      | in the get contents of URL action in shortcuts, then it will just return a unique identifier to        |
| 16:25      | you every time, which can be really useful if, for example, you have a shortcut to create a note       |
| 16:30      | with a bunch of information and you want to throw a UUID in there, like David does,                    |
| 16:34      | so that you can easily uniquely identify that later. And then of course, you'll probably want          |
| 16:39      | to save that UUID somewhere. But we have some ideas for that a little bit later in today's show.       |
| 16:45      | Rose, your guest on the Launched podcast, I thought it was a really good episode.                      |
| 16:50      | Yes, I really enjoyed being on there. So Launched is a podcast by Charlie Chapman,                     |
| 16:55      | where he talks to creators and developers about their apps and things that they've made. And he        |
| 17:01      | had me on to talk about a little bit behind the scenes of automators, nested folders, and also         |
| 17:07      | take control of shortcuts. So that was a really fun episode to be on. So people are perhaps thinking,  |
| 17:15      | hmm, I need a little bit more entertainment in the next few weeks. I'd highly recommend                |
| 17:18      | checking out Launched. There's a couple of good episodes there. And we'll put a link to Rose's         |
| 17:23      | episode in the show notes. Yes. Feedback. Karen on Twitter said, I was the only person                 |
| 17:29      | who she had heard talk about the Wi-Fi Bluetooth control issues causing problems and shortcuts.        |
| 17:36      | Have you run into this issue of file a radar? Rose, how do you file a radar?                           |
| 17:40      | Yes. So it's a way to file a radar. So it's not called filing a radar anymore. But a lot of people     |
| 17:46      | are familiar with this term. Nowadays, you file feedback. And if you have generic iOS feedback,        |
| 17:53      | then the place to go is apple.com/feedback. But if specifically, you know that some things       |
| 17:58      | are bug and it's not working, then you need to use the feedback assistant. Now, if you're running a    |
| 18:03      | beta operating system, be that iOS or macOS, you can use feedback assistant on the device running      |
| 18:09      | beta software. If you are not running beta software for whatever reason, you can go to                 |
| 18:15      | feedbackassistant.apple.com. And you'll have to sign in to fill that out. But you will also            |
| 18:21      | potentially be able to get feedback from Apple. Now, I can't promise that you'll get feedback          |
| 18:25      | from Apple. But usually, at some point, you'll get an automated message saying, hey, this appears      |
| 18:31      | to be resolved in this latest beta. Or in this release, can you confirm this or close your ticket      |
| 18:37      | please? And that's the place to file it. Because if we don't file it officially, then it often can't   |
| 18:44      | get escalated just because there's too much going on. Apple's a very big machine. They need to have    |
| 18:49      | the data in front of them in the systems that they're using so that they can prioritise these issues.  |
| 18:55      | Okay, so when you were just answering that, Rose, one of the things you said that just made me giggle  |
| 19:01      | is you said, if you're not running the beta for whatever reason. So in the mind of Rosemary,           |
| 19:08      | running the beta is standard and not running the beta is the exception.                                |
| 19:12      | So what is actually in the back of my mind here is, if you're not running the beta and you're          |
| 19:18      | experiencing an issue, wait, what? That shouldn't be possible. Of course, we all know that bugs        |
| 19:23      | slip out the door. This happens. And it has happened before. It will happen again. But I               |
| 19:29      | would hope that if you're running public releases, considerably more stable than, hey, I'm running     |
| 19:34      | the developer beta three minutes after it launched. So yes, I'm well aware my iOS life is much more    |
| 19:41      | unstable than many other people's. My mom was telling me the other day that colleagues phone           |
| 19:47      | crashed and she was like, I don't think that's ever happened to mine.                                  |
| 19:51      | So are you currently, what is your beta situation here in March?                                       |
| 19:57      | I am running developer betas on all of my iOS devices.                                                 |
| 20:01      | And on your Mac?                                                                                       |
| 20:02      | I am not running betas on my Mac on either of my Macs. I feel like it's a lot easier to                |
| 20:09      | wipe and reinstall stuff on your iPhone or your iPad than it is on the Mac. I do have a very good      |
| 20:17      | backup system set up for the Mac that I don't anticipate having any problems there. But it             |
| 20:22      | just takes a lot longer to download and reinstall macOS than it does iOS. It's a much bigger machine   |
| 20:31      | and the operating system is considerably larger.                                                       |
| 20:34      | So I don't run the betas after they release the software in September. I try to get back on the        |
| 20:41      | regular releases. And every year in June, I say, this year I don't run the betas and I run the         |
| 20:48      | betas. Usually because I'm working on something on a field guide and I need to get early access,       |
| 20:54      | at least that's the reason I give. But I actually am beta free right now. So I'm the exception         |
| 21:00      | in your life, Rose. Yeah. But at the same time, I would also hope that you're having a more stable     |
| 21:05      | iOS experience than I am. Yeah. I know that they're getting pretty close with the next release of      |
| 21:11      | iOS 13. I think it's 13.4. What's going on in that beta? Anything good?                                |
| 21:17      | There's a new shortcuts action, actually. And this was found by [[Federico Viticci]] on Twitter.           |
| 21:22      | Of course, I am very pleased that [[Federico Viticci\|Federico]] found it so quickly. There is a Shazam action               |
| 21:29      | to Shazam a song. And so if people are not familiar with Shazam, it listens to a little                |
| 21:38      | flip of a song and it tries to identify it based on the sound. So of course, if you're sitting         |
| 21:42      | right next to something extremely loud and you can very faintly hear music, it's probably not          |
| 21:46      | going to pick that up. But if you're sitting somewhere where you can pretty much hear the              |
| 21:50      | music, then you'll be able to Shazam it and get the data. And the suggested shortcut that I saw        |
| 21:59      | recommended for this was if you're at a party, then you can have the shortcut repeat for,              |
| 22:05      | I don't know, 90 times or something. And I would suggest using a number and then tapping and holding   |
| 22:09      | on the repeat variable there and selecting the numbers and magic variable instead of tapping           |
| 22:13      | the plus 90 times. And then you can wait two minutes and Shazam the song and append that to            |
| 22:21      | something like a draft so that then at the end of the night, you have a list of all the songs          |
| 22:26      | that we're playing at a party, which sounds like a pretty fun thing to do. I have set one up so        |
| 22:31      | that when my mom says, what song is that, I can Shazam it and just send it to her. Because that        |
| 22:37      | somewhat frequently happens at the moment. You know, with Siri, she could also just push,              |
| 22:42      | invoke Siri and say, what song is this? And it would tell her. Yes. I have tried educating my          |
| 22:47      | parents in the ways of Siri. They have got to the point where they're very happy to ask Siri to        |
| 22:52      | turn on the lamp. But that's kind of all that they do with Siri. I did catch my mom the other day.     |
| 22:59      | She started a timer with Siri. I was very impressed. But they don't really do the smart home stuff.    |
| 23:06      | And so it's nice to be able to just tap a button. And then it also sends it to her so she can look     |
| 23:11      | it up later, which is nice. Yeah, I think what song is this is another one for people who are not,     |
| 23:17      | you know, advanced Siri users, because it's a very simple, it's easy to remember. And you like         |
| 23:24      | you're in a public place, you just say, what song is this? And it'll tell you. The other one I would   |
| 23:28      | recommend as a gateway drug is get directions home. Mm hmm. Yeah, that's a good one. Yes. Yes. So for  |
| 23:36      | people going, Oh, what could I use shortcuts for? Those are two very easy get out of the gate ones.    |
| 23:43      | Yeah. Um, well, that's cool. And I'm glad the betas are working out for you more or less.              |
| 23:50      | Yeah, pretty much. I've had some interesting moments where things have randomly restarted.             |
| 23:55      | And I had, I confess a brief flirtation with a 12.9 inch iPad pro. Okay. In what way? Because          |
| 24:02      | I bought one. Oh, wait, wait, wait, you didn't tell me that. Okay. So, but I had it for a couple       |
| 24:09      | of weeks. Amazon over here in Europe has a 30 day return policy. And with the pretend with the rumors  |
| 24:16      | of the new iPads being released this coming month and some changes coming up in my life,               |
| 24:22      | some of which we'll get to later in the show. I was there on the fence going, so do I want             |
| 24:27      | another small iPad or do I want a big iPad? I will think I want a big iPad. But do I really want a     |
| 24:32      | big iPad? That's the question because it's the big iPad, right? And so I bought a 12.9 inch iPad       |
| 24:39      | for a couple of weeks and gave it a go at home. And my conclusion is I really, really like it.         |
| 24:43      | And I was very pleased because I was, I had this issue for a long time with my shortcuts not syncing   |
| 24:49      | and I had to uninstall shortcuts on all of my devices and reinstall it to get them to sync.            |
| 24:54      | And one of the really useful things that I found out by buying and returning this 12.9 inch iPad       |
| 25:00      | pro is that you can actually, it does work. All of my shortcuts actually sync. And originally,         |
| 25:10      | I was intending on keeping the iPad, but I unfortunately had a few other things come up                |
| 25:15      | and I decided that, no, I'm best off returning it for now. And I will probably get one later.          |
| 25:20      | But I bought one of the used ones. So I don't feel too bad. Yeah, I take a lot of grief for this on    |
| 25:26      | Mac power users, but I had a listener actually write me, he had bought the, the, was it the            |
| 25:32      | night? I forget, what's the smaller iPad is 10 or 11? Yeah, it's probably the 11 inch iPad pro         |
| 25:37      | for his wife. Then when they came out with the new mini like last year, she wanted the smaller         |
| 25:42      | one. So he had this extra one, he sold it to me for a good price. But I had already bought the         |
| 25:47      | 12.9. So now I'm living the multi pad lifestyle as Mike early would say. And you know, I like it.      |
| 25:54      | I mean, it's not something I would have thought I would do. But so, so what I've done is the 12.9      |
| 26:01      | is the home iPad. I use it all the time in the house. I've got, you know, a platform that it           |
| 26:07      | sits on in front of my iMac. And I've got the keyboard with multiple Bluetooth radio so I can          |
| 26:12      | jump between the iPad and the Mac very easily. And, and then the little one just goes with me          |
| 26:18      | outside anytime I go out the door. And the, you know, the convenience of the little one is nice        |
| 26:22      | when you're, when you're out in the road or on a plane. But when you're in the house, why not have     |
| 26:27      | the bigger screen? So absolutely. And I am already living the multi pad lifestyle in many, well,       |
| 26:33      | not in many ways I am living it because I have an iPad mini and 11 inch iPad pro, which is the other   |
| 26:38      | reason why I feel like I could go to the bigger iPad pro because if I just need to take an iPad        |
| 26:43      | with me, you know, so that I've got a bigger screen to do stuff on and I can, I can answer emails and  |
| 26:48      | so on. And I was considering a bridge keyboard for it, but I think it's a little bit small and the     |
| 26:52      | advantage of the mini is it is so light. And if I had a bridge keyboard to that, then I basically      |
| 26:57      | lost that advantage. But you know, the multi multi pad lifestyle is great for me. And we will get      |
| 27:06      | to another little bit in a moment about push cut. But I have that running on devices at home all the   |
| 27:14      | time. So if you've got a leftover device, then keep listening because we've got some ideas for         |
| 27:19      | that too. Yeah. And that being said, there are rumors of a new iPad with I guess a much improved       |
| 27:24      | camera system that really isn't that attractive to me. Honestly, I'm not sure I care, but I guess      |
| 27:31      | we'll see what else they add to it. But back on to automation. There was someone asking in the         |
| 27:38      | forum, is it worth learning [[AppleScript]]? Yes. This is a very good question. And to which my           |
| 27:46      | answer would be yes, if you want to automate stuff on a Mac, AppleScript is the way to go. So there   |
| 27:52      | is JavaScript for the Mac where you can automate stuff. It's called JXA JavaScript for automation.     |
| 27:59      | And it's kind of janky. It's based on the AppleScript, essentially. So it doesn't flow the same       |
| 28:07      | way that regular JavaScript would. And it's very AppleScript-y. And if you're looking for examples,    |
| 28:12      | you're going to find AppleScript everywhere, but you're going to struggle to find JavaScript          |
| 28:16      | examples. So you're going to have to learn the AppleScript so that you can translate                  |
| 28:20      | the AppleScript into JavaScript anyway. And I saw the other day that agile tortoise is working on     |
| 28:30      | AppleScript support for the Mac of [[Drafts]] or [[Drafts]] for Mac, which is going to be a pretty            |
| 28:35      | awesome way to automate stuff. Imagine having keyboard moisture automatically fire things off          |
| 28:40      | and generate a bunch of [[Drafts]] because you've got an AppleScript to tell it to do so.                 |
| 28:44      | Yeah. I think that, and we talked about this with Doug Adams very recently, but                        |
| 28:48      | there really is nothing like AppleScript for automating the Mac because it ties into those            |
| 28:54      | Apple events. And the developers that have supported it have given deep, deep integration. So          |
| 29:00      | that is the language where you can take one bit of data and drive seven different applications         |
| 29:05      | and make all sorts of cool things happen. So it is absolutely worth learning if you want to do any     |
| 29:10      | automation on the Mac. The downside is it does not come over to iOS. You're not going to be            |
| 29:15      | able to use that AppleScript knowledge on iOS. And AppleScript is so different from JavaScript       |
| 29:21      | that I would recommend that you also learn JavaScript. You probably need them both for                 |
| 29:27      | automation. But I think there's this impression because of the kind of rise of JavaScript for          |
| 29:34      | automation that AppleScript is no longer relevant. And we've had Sal on the show in the past and Doug |
| 29:41      | Adams and these guys, there are things they do with a Mac that I don't think is possible with          |
| 29:46      | anything but AppleScript. And if you really want to dive deep on the Mac, you need to learn Apple     |
| 29:51      | script. Yes, absolutely. It's not that hard to get, to understand the basics of, you know,             |
| 30:00      | you can get to grips with the AppleScript pretty easily. And also, if people are looking for books,   |
| 30:05      | don't be put off potentially by an older book, because AppleScript hasn't changed that much           |
| 30:11      | in a very long time, which you might think is a bad thing. But in general, it's not. At some point,    |
| 30:17      | a programming language has to stay fairly static. I asked a couple of app developers who started       |
| 30:22      | with [[Swift]] one about their nightmare switching from [[Swift]] one to two to three to four to five.         |
| 30:27      | You know, you want things to be relatively consistent. And the fact that AppleScript hasn't           |
| 30:33      | changed is a good thing in that case. And that also means that you can often pick up second hand       |
| 30:37      | copies of books very cheaply as well, if you're looking for something that's like an in depth guide.   |
| 30:43      | Yeah, I would recommend AppleScript 123 by [[Sal Soghoian]], the grandmaster. And honestly,                 |
| 30:50      | just think of a few problems in search for existing scripts. I mean, AppleScript even                 |
| 30:55      | is one language where you can very much cobble together scripts even if you're not fully fluent        |
| 31:00      | in the language. Because it's written in plain English that it's not that hard to make little          |
| 31:04      | changes, you'll figure it out. So yeah, to answer that, I think Rose and I are both thumbs up for      |
| 31:10      | AppleScript. Oh yeah, definitely. And you know, even if you only learn teeny tiny bits and you        |
| 31:16      | just cobble together scripts with copy and paste, guess what? If you've got a script that works,       |
| 31:20      | that's an automation. And that's all that matters. I still just wish so badly that they had integrated |
| 31:26      | something like Apple events into iOS at the beginning. I don't know that it's even possible now.       |
| 31:33      | But yeah, I would like to have that same deep level of automation on iOS.                              |
| 31:37      | Yeah. I mean, that's one of the things that we're currently facing, isn't it? You know,                |
| 31:41      | something we've heard about a lot from listeners recently is how can I automate shortcuts without      |
| 31:47      | manually triggering it? And this is because things like, when I arrive at a location,                  |
| 31:53      | does not actually automatically trigger stuff, it sends you a notification so that you can tap         |
| 32:00      | it and run the thing, which on the one hand is pretty awesome. On the other hand, I really wish        |
| 32:07      | for many more things that there was the option to turn this off. And maybe it would have to be         |
| 32:13      | limited to a subset of actions, which could only store stuff in short-term memory or something,        |
| 32:19      | and then you would have to open the app. So say, for example, it could only store stuff outside of     |
| 32:23      | OmniFocus, and then you would have to open OmniFocus and confirm later that you really wanted that     |
| 32:28      | stuff to change. I don't know. Obviously, they've done this for security reasons,                      |
| 32:33      | but I really wish we could just have things done automatically because it has been driving me a        |
| 32:39      | little bit up the wall. But that said, I have been doing some good work around with the open app       |
| 32:44      | action, because that is a great way to automate things. And Adam Tao actually wrote some shortcuts     |
| 32:52      | a while ago, which essentially attached themselves to the open app action, and they checked to see     |
| 32:58      | if there's anything that they need to do, and if there is something they need to do, then they do      |
| 33:01      | it, which is one way of doing things. I'm sure you could program that yourself, but I'll link to       |
| 33:06      | Adam's shortcut in the show notes. Yeah, I just feel like I understand the security need form,         |
| 33:12      | but this is one where I really wish there was a preference setting where you could turn it off,        |
| 33:16      | even if the default was to have the security turned on. For those of us that want to be big boys and   |
| 33:23      | girls and take the risk, why not let us throw the switch? Because the idea of automation is it         |
| 33:29      | happens in your pocket. The notification in your pocket isn't good enough.                             |
| 33:34      | Yeah. And especially, we can't run these things on our Apple Watches in many cases either,             |
| 33:41      | which means even if you do have a computer on your wrist, thinking back all those years ago,           |
| 33:48      | one day the computers will be on your wrist. Well, they are, but we still can't quite get              |
| 33:53      | everything that we want running from there, unfortunately.                                             |
| 33:57      | All right, let's take a minute to talk about our second sponsor, and that's our friends over           |
| 34:00      | at ExpressVPN. High-speed, secure, and anonymous VPN services. Get three months free with a one-year   |
| 34:08      | package. So ExpressVPN is exactly what it says on the tennis. A VPN service made for people that need  |
| 34:15      | a solid and reliable service. There are a ton of VPN providers out there, but you probably want one    |
| 34:21      | you can feel confident in and that you can trust. And ExpressVPN is that they value your privacy.      |
| 34:27      | They don't log your data. There was just news recently about one of these VPN services that            |
| 34:31      | was logging all the user data. That's not ExpressVPN. They don't have it to sell it,                   |
| 34:37      | like some other services may. In fact, they've developed a technology called Trusted Server            |
| 34:42      | that only stores your data in RAM, so there's no way for them to get the log. And it's super fast,     |
| 34:48      | so you can stream HD quality videos with no lag. It's really easy to use. You just fire up the         |
| 34:53      | app, click one button, and you're connected. Plus ExpressVPN is loved by TechRadar, the Verge,         |
| 34:58      | CNET, and me. I've been using ExpressVPN for a couple of years. It's just a part of my application     |
| 35:06      | profile. Now, one of the tricks I do is I put ExpressVPN's widget on the Today View screen,             |
| 35:12      | because I don't really want to have the app on my home screen. But if I ever need to lock things       |
| 35:17      | down, I just swipe over to the Today View, scroll down, I keep it at the bottom of the Today View,       |
| 35:21      | and there's the button right there. I tap it, and then I'm secure. And I do it whenever I leave        |
| 35:26      | the house. Some people would argue I should even have it turned on while I'm in the house,             |
| 35:29      | but I haven't gone that far yet. But it's just a great service, and it's just been no problems.        |
| 35:35      | It works. You press the button, you're on with a VPN. So go ahead and protect yourself today.          |
| 35:40      | Go to the link right now, expressvpn.com/automators, A-U-T-O-M-A-T-O-R-S,                        |
| 35:47      | and get an extra three months free on a one-year package. That's expressvpn.com/automators.      |
| 35:53      | Now to learn more. And our thanks to ExpressVPN for their support of the automators and all of         |
| 35:59      | Relay FM. I thought it'd be fun to do a little check-in on the [[Stream Deck]], because I know you         |
| 36:04      | bought one. I bought one. How's it going, Rose? I have a top row of buttons, but I have to say I       |
| 36:14      | have not... So I have two problems. Number one, I've not really had the time to do things.             |
| 36:19      | And number two, I am so frequently right now at my laptop rather than my mech, and I'm at my           |
| 36:25      | laptop on the sofa, or I had a horrible cold for a week, so I spent most of the week in bed.           |
| 36:31      | And taking your [[Stream Deck]] everywhere with you, I know it can be done, but I haven't done it.         |
| 36:36      | So I'm feeling kind of guilty, because I have this amazing piece of hardware that I really,            |
| 36:42      | really want to be using more. And I'm just not there yet. That said, as alluded to earlier,            |
| 36:48      | and we'll get to later, I will be changing things up a bit. And so hopefully I'll be recording at      |
| 36:52      | my mech mini, which will mean that I can actually use my [[Stream Deck]] for recording purposes. And       |
| 36:58      | I'm thinking that once I get started with that, it's going to open a whole rabbit hole of things.      |
| 37:02      | But how are you doing with your [[Stream Deck]], David?                                                    |
| 37:04      | Yeah, I'm loving it. And I use it all the time. But I think you're right. This is definitely           |
| 37:08      | the device best for someone that's at a desktop computer, because I can't really see myself            |
| 37:13      | carrying this thing around and attaching it to a laptop. But the [[Stream Deck]] was designed as a         |
| 37:18      | streaming, like for gamers, like game streamers to give them quick access to common commands for       |
| 37:24      | streaming. But last year, with release of [[Keyboard Maestro]] version nine, Peter put in a feature        |
| 37:31      | that lets you attach [[Stream Deck]] buttons to as triggers and [[Keyboard Maestro]]. And since keyboard       |
| 37:38      | maestro can do almost anything on your Mac, then that basically gave you an external control panel     |
| 37:45      | that you can make your Mac do almost anything. And so I really liked it. Related, I released an        |
| 37:52      | update to the [[Keyboard Maestro]] field guide. I think since the last time we published, and I've got a   |
| 37:56      | whole video in there explaining how to set it up and do all this stuff. But basically, it's not        |
| 38:00      | that difficult. You've got a little plug in you download for the [[Stream Deck]] software. And then        |
| 38:06      | you can attach a button to a [[Keyboard Maestro]] action. You can even give custom icons to the            |
| 38:13      | buttons because there's a little LCD screen behind the [[Stream Deck]]. So like I've got a bunch of        |
| 38:18      | icons between like my top row is all set up. So like I push one button, and it sets up all of my       |
| 38:26      | various screens for writing. I press another one, it sets all of them up for planning. So I can like   |
| 38:31      | jump between modes of work with just the press of a button. And I know I could do that with fancy      |
| 38:37      | keyboard shortcuts and other ways with [[Keyboard Maestro]]. But there's something very satisfying         |
| 38:42      | about sitting down on my computer and pressing a button on the [[Stream Deck]] and having my computer      |
| 38:47      | just zap into like screencast mode for me. It's just it's great. And so I've got the top row           |
| 38:54      | buttons for setups. The second row is largely blank at this point, because I'm going to be             |
| 38:58      | doing some streaming for MacSparky. I'm going to stream to field guide customers, we're going to do   |
| 39:03      | some live stuff on the various field guides. And though that row is for those buttons, which I         |
| 39:08      | haven't set up yet. And then my third row is a lot of web related stuff, like how to record a podcast, |
| 39:15      | or I've got one here for the automators, it's got the automators logo on it. If I press it,            |
| 39:19      | it sets up my computer to record the automators. And then I've got all this miscellaneous stuff I'm    |
| 39:24      | using on the bottom row. In fact, I've got a jazz button, there's a saxophone, I press that,           |
| 39:28      | and jazz music just comes out of my office. It's awesome. Oh man, that sounds like great fun.          |
| 39:34      | One of the things that I really want to experiment with is the [[Stream Deck]] app for iOS,                |
| 39:40      | because you can turn your iPhone into a [[Stream Deck]]. And I think for my current situation where        |
| 39:44      | I'm using my laptop a lot, that is a lot more practical. It is unfortunately a subscription,           |
| 39:49      | it's £2.79 a month for me, but they've just added shortcut support to it. So that you could actually   |
| 39:56      | trigger [[Stream Deck]] actions from shortcuts, which definitely holds a certain amount of appeal for      |
| 40:03      | me. Because at the moment, when I start podcasting, I use NFC tags behind my podcast stickers. So I    |
| 40:09      | have a little podcasting box with gear in which I pull out. And on top of that, I've got my podcast    |
| 40:16      | stickers. So I've got one for automators, one for nested folders. And on the other side of those       |
| 40:19      | stickers, I have NFC tags. So when I tap the automators sticker, it pops up a menu and asks me         |
| 40:25      | what I want to track and it lets me get on with it. And I'm quite happy with that. But I wonder if     |
| 40:32      | being able to trigger [[Stream Deck]] from my iPhone would also be great too. Yeah, I feel like we all     |
| 40:38      | have to make decisions when an app goes subscription based. And when I saw this was subscription,      |
| 40:43      | I was like, immediate, like, no, I'm not interested in paying a monthly for this one.                  |
| 40:47      | But because I have this big [[Stream Deck]] on my desk, but I get like, if you're on a laptop,             |
| 40:52      | that would be kind of nice to have your iPhone as like a control panel for your Mac.                   |
| 40:57      | But at the same time, for a lot of what the [[Stream Deck]] does, especially if you're triggering          |
| 41:00      | [[Keyboard Maestro]] macros, don't forget you can copy like a URL to trigger a [[Keyboard Maestro]]            |
| 41:05      | macro, you know, from [[Keyboard Maestro]], and then you can just, you know, get contents of URL on        |
| 41:10      | that inside of shortcuts, and it will do the same thing. Yeah, it might not look pretty in the same    |
| 41:17      | way that a donated screen [[Stream Deck]] action would really said screen deck there. I think              |
| 41:21      | that's something else. But it is, you know, another way of automating things on your Mac               |
| 41:27      | from shortcuts, which is definitely something worth considering. I think the app would be good to      |
| 41:33      | if I always like to think about automators helping out non-automators and their friends                |
| 41:37      | and family circle, like if you went to grandma, I think that maybe a [[Stream Deck]] set of buttons        |
| 41:45      | would be easier for her as it triggers to shortcuts than the actual shortcuts app would be.            |
| 41:52      | So I don't know. Yeah. Well, we'll have to see.                                                        |
| 41:56      | Either way. Yeah, so I'm still using mine. Sounds like Rose is working on it.                          |
| 42:00      | Yes, yes, I am. And I will be changing some things up in a couple of months. And then I'm              |
| 42:05      | hoping that I will be able to record everything from my Mac mini, which will mean that I will          |
| 42:09      | be sitting at my regular desk with my regular computer. And that will mean that I have my              |
| 42:14      | [[Stream Deck]] right in front of me. I've still only got the medium size one. I didn't get the baby,      |
| 42:18      | I went for the medium. If it goes well, I could foresee a full-size [[Stream Deck]] in my future           |
| 42:24      | and keeping the medium for extra things. So listener solid wrote in about working with                 |
| 42:30      | timeouts and shortcuts. Yeah. So solid actually posted in the forums because                           |
| 42:36      | a while ago I talked about a shortcut that I have. So when I open Twitter, it waits a minute,          |
| 42:41      | and then it opens OmniFocus for me. And this is so that I don't waste so much time on Twitter.         |
| 42:47      | And I've actually expanded this. I also have this when I open Apollo, it waits two minutes,            |
| 42:53      | and then redirects me. And Apollo's a Reddit application. And a few other things just so               |
| 42:59      | that I can still pop in and check on social media, but I don't get soaked into or sucked into          |
| 43:05      | the vortex that it can be. And I'm using Screen Time on iOS as well, and I'm experimenting              |
| 43:13      | with it on the Mac 2. It caused a couple of problems because I have two work Macs and two              |
| 43:19      | personal Macs. And I wanted the work Macs to not contribute towards Screen Time, but at some point      |
| 43:24      | that got turned on without me turning it on. And Catalina went wild on me. And then I had some         |
| 43:32      | issue where it was there going, you can't check this website. And then they're going, why can't I      |
| 43:36      | view a search result work? Because it was a link to a post out PHP on Reddit. And it was like,         |
| 43:42      | you've reached your social media allowance for the day. And I'm like, right, thanks. That's            |
| 43:47      | not what I wanted. But if you try and use the wait feature in Shortcuts and you wait too long,          |
| 43:56      | it just times out and it never actually does anything. And so what Solid is doing instead              |
| 44:02      | is he's using the Just Timers app and donating a timer from it and using that inside of Shortcuts       |
| 44:10      | to just tell him that his time is up. Now, of course, you could just start a timer.                    |
| 44:14      | But the problem with timers on iOS is you can only have one running at a time.                         |
| 44:19      | HomePods, you can have as many timers as you like and you can give them names,                         |
| 44:23      | but iOS is still limited to one timer at a time. But if you use an app like Just Timers,               |
| 44:29      | I'm using it as well actually for a lot of things. Then you can run multiple timers and                |
| 44:35      | store multiple timers at a time as well. It's been pretty useful for me. I've got some orchids         |
| 44:40      | and I like to give them a bath so they sit in water for like 30 minutes. And being able to             |
| 44:44      | tap my orchid start timer is pretty nice because then it ultimately starts a 30 minute timer for me.   |
| 44:51      | And so he's using that now and it just pops up and tells him, you know, infinity pool,                 |
| 44:55      | okay, make sure that you're getting out of the infinity pool.                                          |
| 44:58      | Yeah. You know, it's crazy to me that the time, you know, multiple timers on the HomePod,              |
| 45:03      | so the code is written, but someone said, no, let's not put it on the phone.                           |
| 45:08      | Yeah. Come on.                                                                                         |
| 45:11      | That's okay. We'll just leave it off. And I'm sure there's a good reason, but it's still,              |
| 45:17      | it's baffling. iOS 14, maybe.                                                                          |
| 45:20      | Yeah. There's some great apps coming out in beta right now. One of them that Rose turned me onto       |
| 45:26      | is called [[Charty]]. And it is an app in beta. You can go to, I think it's [chartyappios.com](https://chartyappios.com).              |
| 45:35      | I'll get the link in the show notes. You can sign up for the beta and it allows you to create charts   |
| 45:40      | with shortcuts. It's like what a great little feature.                                                 |
| 45:42      | Yes. And one of the features that they recently added, which I really like,                            |
| 45:47      | is the ability to give it health data. So you can automatically create a chart based on certain        |
| 45:52      | health data. And this, for me, is great because one of the things that I'm primarily going to          |
| 45:58      | want to create data for is health data. And I didn't want to have to process that into series,         |
| 46:03      | which is what it uses to create charts. I just wanted to be able to create a chart                     |
| 46:10      | with health information. So I've been experimenting with that as well. And that's been pretty nice.    |
| 46:16      | Yeah. And once again, if they're going to give health data, Apple, please release time tracking        |
| 46:21      | data. Oh yeah. Yeah. I mean, that would be another great use for [[Charty]].                               |
| 46:26      | Yes, it absolutely would. It looks like, I'm just so happy to see this rich ecosystem of               |
| 46:32      | shortcuts apps showing up. Yeah. And there's another one that's coming soon as well, [[Data Jar]]           |
| 46:39      | by [[Simon Støvring\|Simon's]]. So Simon is the creator of [[Scriptable]] and [[Jayson]], J-A-Y-S-O-N. Scriptable is         |
| 46:45      | a [[JavaScript]] scripting app for iOS where you can, well, control your iOS device. And JSON is-          |
| 46:50      | And [[Simon Støvring\|Simon's]] a recent guest on the show. Yeah. And [[Jayson]] is an app for viewing JSON data,                |
| 46:56      | which is very useful if you're getting data from [[Airtable]] and you want to be able to view it.          |
| 47:01      | But also work on your shortcut at the same time. You can send it over to JSON                          |
| 47:05      | and split screen it on your iPad. And I've been using that so much. I've been using it on the Mac      |
| 47:09      | as well. That's one of the apps that's been ported to the Mac using, you know, what was called         |
| 47:14      | Marzipan. And that's great. But [[Data Jar]] is a brand new app. It's not yet out, but he somewhat          |
| 47:22      | frequently posts, [[TestFlight]] invites on [[Twitter]] at the moment. And the idea is it's a local database        |
| 47:27      | application for [[Shortcuts]]. So you can open [[Data Jar]] itself and create, you know, keys with values       |
| 47:37      | and so on. But you can also access it entirely from shortcuts, which is mostly what I've been          |
| 47:41      | doing, I have to say. And it's great because you can store really complex data structures in there     |
| 47:49      | if you want. So I've got six top level things at the moment, but they go all the way down into         |
| 47:54      | massive depth. And it's really nice to be able to have this data and store it somewhere else.          |
| 48:00      | It's like global variables from Toolbox Pro, but a whole extra level. Because you can store            |
| 48:05      | whatever you want in there, you can put entire dictionaries in there and get them back out.            |
| 48:09      | And all sorts of things, which is great. And then you can reuse them in multiple applications.         |
| 48:14      | If you make a change to the dictionary, it's going to, the change will reflect in every shortcut       |
| 48:20      | you access it in. It's like, I look at this when I'm like, oh, come on, Apple, this just needs to      |
| 48:27      | be in shortcuts. Yeah. It does kind of feel like it needs to be Sherlocked, which is meant in the      |
| 48:33      | best possible way, Simon, if you're listening to this. But it's great. It syncs using iCloud as        |
| 48:38      | well. So you can have a database on all your devices. And this has been quite useful for me            |
| 48:42      | because I've been able to store bits of information from things that have run on another device        |
| 48:47      | and retrieve them on my iPhone when I'm out and about. So I'm really enjoying [[Data Jar]]. And I          |
| 48:54      | suspect most people here will as well when it finally releases, which will hopefully be in the         |
| 48:59      | not too distant future. And honestly, if Apple did Sherlock it, there's no way they would make it      |
| 49:03      | as feature rich as [[Simon Støvring\|Simon]] has. So we'd still be using [[Data Jar]]. But yeah, what a great app.             |
| 49:10      | Yes, it really is. So we mentioned iOS 14 earlier in the future, but I think it might be time to       |
| 49:17      | get out our crystal balls, David, because it's March. And that means that [[WWDC\|WWDCs]] in a couple of         |
| 49:24      | months, right? Maybe? Yeah. I don't know what the format will be. I have a feeling that with the       |
| 49:32      | problems California is experiencing with this virus, that there may be no [[WWDC]] event. So Rose          |
| 49:41      | and I won't get to hang out for a week again like we usually do. Yeah. But Apple still has to release  |
| 49:47      | iOS 14 and whatever comes after Catalina on the Mac and share all the stuff they've been working on    |
| 49:53      | for the last year. I suspect if they, you know, that we'll get like a, it'll just be a virtual         |
| 49:59      | [[WWDC]] this year. Yeah. Yeah. I think John Gerber called it. There'll be a small press event for,        |
| 50:06      | you know, what would be the main keynote. And then that'll be it. And everything else will be online.  |
| 50:12      | And so I'm sure that people who have been working on all of these features all year are going to       |
| 50:19      | be sad to miss out on the opportunity of actually getting to talk to the people who are then going     |
| 50:23      | to implement this stuff into their apps. But I think, you know, it seems highly likely to me that      |
| 50:32      | [[WWDC]] won't go ahead and it will be held virtually. If it does happen, then I'll quite happily hop on   |
| 50:38      | a plane, come see David. We can go off to Disney again. That was good fun last year. But if not,       |
| 50:44      | then I'll have to hold out for Mac stock for my personal note fix for some of some of my friends.      |
| 50:49      | Assuming Disney's open. Yes, that's a good point. So, but, but we're automators. And I just thought    |
| 50:57      | it'd be fun to talk a little bit about what would we like to see in 2020 added for shortcuts and       |
| 51:05      | and on the Mac in terms of automation. So let's start with shortcuts. Some of the stuff we've talked   |
| 51:10      | about today, I think would be nice. I think organisation needs a bump. I would like them to            |
| 51:16      | continue to keep the pedal down on adding new features and plugins. Last year was really a             |
| 51:23      | watershed year because they changed the underlying structure of it in a way that allowed us to have    |
| 51:28      | third party implementation. And that's why we have all these third party apps and apps that,           |
| 51:33      | and apps that, you know, are doing other stuff like carrot weather that just now give you really       |
| 51:37      | awesome automation support. So I don't think we're going to get something that, you know,              |
| 51:42      | mind bending this year. But I would like to see them keep adding features.                             |
| 51:47      | Absolutely. I would really like to see that as well. And I would like to see                           |
| 51:53      | even more system integration, both for automations and like you mentioned, David,                      |
| 51:57      | getting screen time data out. Like that would be amazing if we could do that in shortcuts.             |
| 52:02      | I'd also like to see some bumps in the health data. So the ability to log all of the same things that  |
| 52:08      | we can look in the health app, like I need my teeth brushing log. I actually don't need that one.      |
| 52:14      | But I think some parity there would not go amiss. And it would also be interesting if I could          |
| 52:22      | specify that my shortcuts are actions, essentially. So I could create a series of                      |
| 52:30      | shortcuts, which are functions, which I only ever run in another way. And I could have those in        |
| 52:35      | maybe a fourth tab across the bottom or something. I have to say, I don't think I use the gallery      |
| 52:40      | except to show people example shortcuts that they can use and to show people where you can             |
| 52:46      | find the shortcuts from your apps, because that's where it wandered off to when it moved out of        |
| 52:50      | settings, it moved house. And yeah, so I would like to see the ability to do that. And also,           |
| 52:59      | please, I really don't want all of my shortcuts to be in the widget. This is a very, very personal     |
| 53:05      | request. But please let me disable that. I don't want my shortcuts to appear in the widget by default. |
| 53:12      | Yeah. So if we could disable that, that would be good.                                                 |
| 53:15      | I think a couple of things to unpack there. I think gallery is always going to be prominent            |
| 53:19      | because most users aren't Rosemary Orchard. So the gallery is a great on-ramp for people.              |
| 53:25      | But yeah, you are running shortcuts as subroutines in essence. And yeah, a lot of us are that are      |
| 53:32      | making a lot of shortcuts. And you're right. It really, there is no way to kind of organise those.     |
| 53:37      | In terms of triggers offhand, because I thought about it before the show, I'm not really looking       |
| 53:43      | for any new triggers right now. I am looking for more automation in the triggers like we talked        |
| 53:49      | about earlier in the episode. I feel like I would really like some of these triggers to remove the     |
| 53:55      | confirmation dialogue. And if that means I have to check a box for it, or maybe the first time I       |
| 54:00      | run that shortcut, I have to approve that. And I have to do it for every one that I make. But once     |
| 54:05      | it, you know, once you do approve it once, then in the future it just runs. I mean, there's got        |
| 54:10      | to be some mechanism where we can make it safe, but also make the shortcuts so infinitely more         |
| 54:15      | useful. And also in the automation tab, I would love to see the option to share automations.           |
| 54:21      | Because I frequently see people on, usually on Reddit in the shortcut sub Reddit, sharing              |
| 54:28      | screenshots of their automations. And there are a couple of problems with this. Number one, you        |
| 54:32      | can't necessarily tell where variables come from when they're using magic variables. Number two,       |
| 54:37      | it's not accessible to people with screen readers. And number three, it's not possible for somebody    |
| 54:42      | to just tap a button and install this. And I really feel like it would be great if, I mean, the way    |
| 54:49      | the automations are set up right now, you could build an entire automation or entire shortcut          |
| 54:54      | inside of an automation, which I kind of feel is the wrong way to do things. I think that it would     |
| 54:59      | be great if they just converted all of those into, and when this happens, I want to run this shortcut  |
| 55:06      | done. Well, that's the way I do it, honestly. And that's the way I do it. And that's the way I would   |
| 55:10      | highly recommend most people do it. You can't do that for home actions, but that's a whole other       |
| 55:15      | kettle of fish. But I think for personal automations, it would be great if those were just, and then   |
| 55:22      | you run this shortcut, and then it could walk you through creating a shortcut and adding the actions   |
| 55:26      | to it, but it would then save it. And I would also like to be able to name my automations too. Because |
| 55:33      | the automations right now are, in my case, they're a little bit confusing, because I have, you know,   |
| 55:42      | when I arrive at a specific address, but that's the detected address that has come up with,            |
| 55:48      | which is actually across the road from where I'm sitting. It's like, okay, that's a different          |
| 55:54      | street. Great, thanks. That's not what I was expecting. And it would be really nice to just            |
| 56:01      | have a little bit more, you know, leading the horse to water is perhaps the wrong analogy,             |
| 56:07      | because people who are learning to use shortcuts are definitely way above the level of people who've   |
| 56:12      | never even heard of it. But it would be really nice if those were automatically made to be             |
| 56:16      | shortcuts, and therefore shareable. And you could, you know, from inside a shortcut, say,              |
| 56:21      | attach this to an automation as well, and then show that up in the automations tab.                    |
| 56:26      | I think you and I both would like to see that get better. If you recall, they barely shipped           |
| 56:34      | that feature. It was in the betas, and then it was out of the betas until the very end                 |
| 56:39      | of the iOS 13 cycle. And I feel like there's probably more that they wanted to do with it              |
| 56:45      | that never got implemented. So I bet we will see progress on that this year.                           |
| 56:51      | Yes, I think we will. And I think we'll also see actions like set background image return.             |
| 56:56      | And I'm really looking forward to seeing that one come back whenever it does, because I'm pretty       |
| 57:01      | certain it must have been taken out for some kind of security reason. And there's just too much going  |
| 57:05      | on to add it back. That can be part of iOS 14. Yeah, on the back end, what I'd really like             |
| 57:11      | to see them do is make even easier development tools so developers have no excuse not to be            |
| 57:17      | donating shortcut actions. Because yes, I mean, there are some rock stars app developers that          |
| 57:23      | have been very good about it, you know, Greg Pierce at [[Drafts]]. And we know some of the apps,           |
| 57:28      | you know, we talked about on the show that do a good job of this, but they are a small,                |
| 57:32      | small minority of the apps. So many apps don't do anything with shortcuts and                          |
| 57:37      | anything we can do to make it easier for those developers to add that. I would love that.              |
| 57:42      | Yes, absolutely. And I've been looking at adding shortcuts to some things recently. And it's like,     |
| 57:46      | okay, I have no idea where to get started. But that's because I'm not yet an iOS developer,            |
| 57:51      | something I'm still working on. Well, I watched the [[WWDC]] session on it.                                |
| 57:55      | They had a they had it's in last year's sessions. It really didn't look that hard.                     |
| 58:00      | I think it's not that hard if you wrote the app that you're trying to do this for.                     |
| 58:05      | And that's my problem. I didn't actually write the app. And it took me a while to figure out           |
| 58:08      | it's written in Objective C, in some cases, not just [[Swift]], because there were a lot of things         |
| 58:13      | with [[Swift]] extensions. And then there were some other stuff. And I was there going, okay, so other     |
| 58:16      | stuff seems like it's probably going to be pretty important. I'm guessing this is Objective C,         |
| 58:20      | but it took a while to confirm that the other stuff only Objective C. So I'm there, okay,              |
| 58:24      | now where do I add this information? What about over on the Mac? Do you think this is the year         |
| 58:28      | we get shortcuts on the Mac? Maybe. I mean, it depends on what they do with Catalyst, right?           |
| 58:35      | You know, formerly, you know, unofficially named Marzipan. I think Catalyst has got to get better.     |
| 58:44      | Things like the Home app are intriguing to use right now, I have to say. And it would be great         |
| 58:51      | if we got at the very minimum, you know, some basic support for certain home kit things so             |
| 58:58      | that we could then run those automatically from our Macs. Because right now, the Home app doesn't      |
| 59:04      | even have AppleScript support because it's a Catalyst app and it just didn't get that.                |
| 59:10      | And it would be great to see it, but I'm not sure this year is the year, to be honest.                 |
| 59:14      | Yeah, I feel the same way. I don't know anything. I haven't talked to anybody. I have no inside        |
| 59:18      | knowledge, but I feel like this year, they're going to further clamp down the iOS version of           |
| 59:24      | shortcuts and the Mac is not going to happen this year. That's just kind of my gut feeling, but        |
| 59:29      | I don't know anything. It wouldn't surprise me entirely if they did bring it to the Mac,               |
| 59:35      | but I just don't feel like that's going to happen this year.                                           |
| 59:38      | I feel like there aren't yet enough apps that are using Catalyst that could take                       |
| 59:42      | advantage of shortcuts on the Mac for them to do it this year. I think they need to improve            |
| 59:46      | Catalyst so that more apps make the jump from iOS to the Mac or back to the Mac as it might be         |
| 59:53      | termed. And then they can say, and now there's shortcuts. So all of those amazing things that          |
| 59:59      | you've got on iOS, they work on the Mac too. But last year, I never would have guessed how             |
| 01:00:04   | drastic the changes that we're going to make were last year either. So you just never know.            |
| 01:00:08   | Yeah, that's one of those things. So we'll see. We won't know what's happening until it happens.       |
| 01:00:15   | But you'll hear about it here when it does.                                                            |
| 01:00:16   | This episode of Automators is brought to you by Kensington, the people who make universal              |
| 01:00:23   | docking stations that are designed to increase productivity. It's so easy to use. You get              |
| 01:00:28   | access to more ports and make your sleek MacBook, Chromebook or other laptop as powerful as a desktop. |
| 01:00:33   | It's plug and play with no drivers, so you can enjoy up to dual 4K display with HDMI and display       |
| 01:00:39   | link video connectors, plus USB 3.0, USB-C, Thunderbolt 3 and power delivery. The Kensington           |
| 01:00:48   | engineering team has three decades of experience in high volume manufacturing of hardware IT products, |
| 01:00:53   | plus rigourous test cycles and quality control means all of their products are tested above             |
| 01:00:58   | industry standards. If you're an IT decision maker looking to find the right docking station           |
| 01:01:02   | solutions for your organisation, check Kensington's Pro Concierge program and test driver docking      |
| 01:01:07   | solution today. Visit Kensington.com/Automators right now to check out Kensington.               |
| 01:01:13   | That's Kensington.com/Automators to learn more. Thanks to Kensington for their                   |
| 01:01:18   | support of this show and all of Relay FM. So Rose, what have you automated lately?                    |
| 01:01:24   | Okay, so I alluded to this earlier in the show. I'm moving. And this means there are many,             |
| 01:01:30   | many things I can automate, lots and lots of things. Unfortunately, I've not yet figured out           |
| 01:01:34   | the perfect automated solution for boxes disappearing from here and reappearing at the                 |
| 01:01:39   | next location. But I've also not quite figured out exactly what I'm packing versus what I'm            |
| 01:01:44   | getting rid of. Yeah, the automation for that is you call a guy and then it happens and you            |
| 01:01:48   | write them a check. Yes, yeah. That is pretty much exactly what I'm going to do. I'm still             |
| 01:01:53   | going to need to pack things into boxes, but I'm going to call a person that's going to deal with      |
| 01:01:56   | this, especially I'm moving back to the UK, which is it would be like 24 hours of driving,             |
| 01:02:01   | pretty much like assuming that you take breaks and so on. So you would then have to stop over          |
| 01:02:05   | in a hotel and I could do it, but I don't want to do it. I'm just going to pay somebody else to do     |
| 01:02:09   | that and deal with that for me. So I've been trying to get some things automated so that I             |
| 01:02:16   | will have an easier time of keeping track of stuff. I'm going to have to put some stuff into           |
| 01:02:19   | storage for a while. So it'll be good to know what's in storage, which means I need a full             |
| 01:02:24   | inventory of everything. So I've been trying to sort things out. Yeah, air table. Absolutely           |
| 01:02:32   | air table. So in some cases, I started using, there's an app in set up called home inventory,          |
| 01:02:38   | and the Mac app is solid. The iOS app unfortunately has not even been updated for the iPhone 10        |
| 01:02:43   | screen sizes, which is disappointing. So it does allow me to just scan barcodes and have a list        |
| 01:02:52   | of stuff generated based on the barcodes. And in many cases, I have the original boxes for things      |
| 01:02:56   | like HomePod, Sonos, Macs, all of that. I've got the original boxes, which means I can just scan       |
| 01:03:02   | this and have it appear and then I can copy it over to air table. So I've been doing that and I'm      |
| 01:03:09   | using a formula in air table to generate a code, which I can then pull in and shortcuts and encode     |
| 01:03:14   | to a QR code. And I have not yet figured out automated label printing. I do have a label               |
| 01:03:21   | printer, but I've not yet figured out how to automatically print the labels to the label               |
| 01:03:24   | printer at the right size. So I'm thinking that I'll just continue with my current system of           |
| 01:03:30   | save this to the camera roll and have this put on my clipboard, open the app, and then I pull in       |
| 01:03:36   | the image and I paste the text and I hit print so that I have everything labeled. And then I have      |
| 01:03:42   | an inventory for every single box. Okay, so tell me a little bit about the QR code generation          |
| 01:03:47   | with shortcuts. I've always known you could do it, but I've never thought of a reason to do it.        |
| 01:03:52   | How hard was that to implement and how's it working? It was very simple to implement. So               |
| 01:03:57   | what I've done is for every box in air table, I have a view. So air table for people not familiar      |
| 01:04:05   | is a database application. And so I have a base called moving. And then I have a table inside          |
| 01:04:11   | of my base called inventory. And this has a column for all of my boxes. The boxes are actually in      |
| 01:04:18   | a separate table, but that doesn't matter. But essentially what I'm doing is I'm using the QR          |
| 01:04:23   | code is a URL to a very specific view. So you can add as many views as you like. And I've just         |
| 01:04:30   | created views for every single box so that then my QR code will automatically open that URL            |
| 01:04:36   | so that I can jump so I can see exactly what's in a box when I scan the URL.                           |
| 01:04:42   | So is that require a subscription to air table or is that a free feature?                              |
| 01:04:47   | No, it doesn't. I've just got the formula. It's a little complicated to explain. So I'm just           |
| 01:04:52   | going to put that in the show notes this week. So keep an eye out for that because I'm using the       |
| 01:04:57   | formula function to do that. And and yeah, that that's, it could be more complicated or it could       |
| 01:05:04   | be less complicated, I'm not sure. But I'm doing that to get that. But that works pretty well for      |
| 01:05:12   | me. And that means that if I scan a QR code, then at the moment it opens up an empty air table base    |
| 01:05:18   | or an empty air table table because I haven't put anything in boxes yet. But I have boxes              |
| 01:05:24   | with labels on them ready to put stuff in. Good. One of mine, I feel like I feel like I'm just         |
| 01:05:32   | not holding a candle to you, Rose. But I just updated my TextExpander snippet for writing             |
| 01:05:37   | blog posts. And I just, you know, I have someone helping me with some of the blog posts that go        |
| 01:05:42   | up. I have her read them. And sometimes I have her doing the posting. So I found myself repeatedly     |
| 01:05:48   | typing instructions to her. So I made a text expansion snippet. And it gives me the editorial          |
| 01:05:54   | checklist, the post date, the art notes, links, title and body. And so I run it from a            |
| 01:05:59   | TextExpander snippet, usually out of [[Drafts]]. I could create a custom draft for this, but sometimes         |
| 01:06:05   | I also run it out of other apps. I tried [[Tot]] for a few days, but I don't know if that's the new        |
| 01:06:11   | sexy, you know, [[Tot]] is that little menu bar app on the Mac. And it's a, it's a Mac, it's also an       |
| 01:06:18   | app for iOS that holds seven notes, you know, it kind of the idea of [[Drafts]]. You just open it up       |
| 01:06:23   | and you start writing, but it doesn't have any of the automation of [[Drafts]]. So I tried it and          |
| 01:06:27   | it's very pretty, but it's not [[Drafts]]. So I'm back in [[Drafts]]. So I could do this through [[Drafts]]       |
| 01:06:34   | entirely, but I'm doing it through TextExpander snippet. And it's just very simple, you know,         |
| 01:06:39   | outline. It's just like doing meeting notes or any other thing you use TextExpander to auto           |
| 01:06:44   | generate, you know, fillable forms. But it's very handy. It's like one of these things I finally       |
| 01:06:50   | stopped and did it. And I've written literally thousands of blog posts in a way that didn't            |
| 01:06:57   | take advantage of this. And the moment I created it, I just wanted to bang my head against the         |
| 01:07:01   | wall for being dumb and not having done this years ago. Well, that's one of the brilliant              |
| 01:07:06   | things about when you finally get around to creating an automation, you're like, oh,                   |
| 01:07:09   | I've been doing this the very hard way for some time. So it's, it's always good to have                |
| 01:07:16   | something that you're there going, oh, wow, yeah, I should be using this.                              |
| 01:07:19   | Now, there's another thing I wanted to talk to you about push cut is an app we've covered on the       |
| 01:07:24   | show with the developer on the show recently. And they've come out with a new feature that I know      |
| 01:07:29   | you're using pretty intensely. Tell us about it. Yeah. So push cut added an automation server.         |
| 01:07:35   | So a server is always on device that can then do stuff for you. And a push cut automation server       |
| 01:07:42   | has to be an iOS device. So the best thing to do is to find an old iPhone or an iPad that camera       |
| 01:07:47   | and iOS 13 and just plug it in somewhere and stick it in the corner and leave it alone.                |
| 01:07:51   | Once the push cut automation server is running. So I have an old iPhone six s that is sitting          |
| 01:07:58   | plugged in in a well ventilated stand, because every so often iOS devices like to run hot for no       |
| 01:08:04   | reason. And I am using this to automatically run my shortcuts without me doing anything.               |
| 01:08:14   | So to give you some examples, whenever I get assigned a show at screencast online,                     |
| 01:08:18   | I have Zap year, Zap run, and it does a bunch of things. It creates stuff in air table and does        |
| 01:08:22   | other stuff. And then it pings my push cut automation server, which goes, oh, hello, I need to create  |
| 01:08:28   | a draft for this and a draft for that and a draft for this other thing. And I should probably          |
| 01:08:32   | create an OmniFocus project for that as well. And bam, and then it sends me a visible notification     |
| 01:08:38   | in push cut that says new OmniFocus project for, you know, name of the screencast online show.         |
| 01:08:45   | And I tap on it and it opens that project in OmniFocus 4-0.                                             |
| 01:08:49   | Yeah. So the problem we were talking about earlier of automation that still requires confirmation,     |
| 01:08:54   | this is kind of a way around it. It's, it's not going to work the way we were talking about earlier.   |
| 01:08:59   | It's not really this trigger based automation. But at the same time, if you've got an extra iOS        |
| 01:09:06   | device and you're using push cut, you can make shortcuts work a lot harder for you.                    |
| 01:09:10   | Oh, yeah. And it's great. So I realised that I was getting really, really long toggle timers           |
| 01:09:18   | from when I was getting home from work, because I've just, I've been very swamped over the last        |
| 01:09:22   | couple of weeks. Unsurprisingly, I'm moving countries. And so I've been forgetting to do               |
| 01:09:28   | things like start and stop my timers. But I realised, of course, when I get home, that's,              |
| 01:09:34   | that's a thing. And I have an iBeacon here. And so it's now when, so I'm using push cut on the         |
| 01:09:40   | iPhone that I carry with me to detect whether or not I've hit the, I got to the range of the iBeacon.  |
| 01:09:46   | And then it tells the automation server to run a shortcut for me. And that say,                        |
| 01:09:52   | enables my, my time track, my time tracking timer, if it's my commuting timer, but it doesn't          |
| 01:09:58   | disable if it's not my commuting timer. And that's great. I'm loving that so much, because it does     |
| 01:10:05   | just make my life considerably easier. You know, I've been doing time tracking again. I kind of        |
| 01:10:09   | go off and on that boat once in a while, just just kind of do as a check in to see how I'm doing.      |
| 01:10:15   | And the, they've come so far with the, you know, with the time tracking through toggle,                |
| 01:10:22   | in terms of just the Timery app, I have not used as much automation with it now as I used to. I used   |
| 01:10:28   | to run like a URL action and do all this stuff. And I still am using some of these Timery,             |
| 01:10:34   | because Timery does donate to shortcuts in my home screen shortcut routines. But also,                 |
| 01:10:40   | I just keep the app on my home screen. It's just so easy to start and stop them from the app.          |
| 01:10:44   | Yeah. He did such a good job that it eliminated some of the need for automation. But that,             |
| 01:10:48   | that makes total sense, having a server go and handle that for you.                                    |
| 01:10:54   | Yes. And in my case, I did already have a spare iOS device running around that I could do this         |
| 01:10:59   | with, which certainly cut the cost. Because if you've got to buy an iPad or something, do this,        |
| 01:11:04   | then of course, that's going to be quite expensive. But for me, it's a great solution,                 |
| 01:11:10   | because it can handle OmniFocus with Taskpaper and everything, it can handle dross,                   |
| 01:11:15   | it can handle Timery, it can handle home kit things and all sorts. And the best part of it is,         |
| 01:11:21   | because my shortcuts are syncing again. I can, I have my shortcuts syncing between my devices.         |
| 01:11:27   | And so every once an hour or so, I have been experimenting with [[Make\|Integromat]], which we'll                |
| 01:11:33   | get to in a future show. But I have [[Make\|Integromat]] just poke the automation server and go update           |
| 01:11:40   | your shortcuts, please. And so that whatever shortcuts I've created on any other device                |
| 01:11:46   | are definitely up to date in PushCut. And then it means that I can then create automations to run      |
| 01:11:52   | those at any time. And I am loving this feature so much. It's genuinely changing my shortcuts          |
| 01:12:00   | experience. Because between PushCut and LaunchCuts, I am not needing to actually open shortcuts myself |
| 01:12:08   | pretty much ever at the moment. Nice. Nice. Well, you know, once again, man,                           |
| 01:12:15   | these third party developers are just bringing it for shortcuts. They absolutely are. And I hope       |
| 01:12:21   | after I was 14 launches, it's even easier and there's even more cool tools. Absolutely.                |
| 01:12:27   | That's it. We're going to wrap that up for today. We covered a lot of ground,                          |
| 01:12:30   | hopefully you got some cool automation knowledge today. You can find us over relay.fm slash            |
| 01:12:36   | automators. You can find the forums over at talk.automators.fm. Did I miss anything, Rose?             |
| 01:12:43   | No, people can't find you over at macsparky.com and they can find me at rosemaryorchard.com.           |
| 01:12:49   | And of course, we're on Twitter too at automators.fm if you want to tweet us there. But the best place |
| 01:12:54   | to talk about the show is definitely in the forums. Okay, we'll see you next time. And thanks for      |
| 01:12:59   | listening. Goodbye, everybody.                                                                         |
s