---
status: incomplete
fc-date:
  year: 2023
  month: 4
  day: 8
fc-category: podcast
podcast: Automators
published: 2023-04-08
duration: 6636
formattedduration: 01:50:36
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - James Thomson
notetype: episode
showpage: http://relay.fm/automators/125
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators125.mp3
episode: 125
title: "125: AppleScript Events and more with James Thomson"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David are joined by creator of PCalc, Dice and About (by PCalc), James Thomson. They talk about James' first implementations of automation in his apps, as well as what automations he's using now, and AppleScript vs Shortcuts.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[James Thomson]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 125 Discussion](https://talk.automators.fm/t/125-applescript-events-and-more-with-james-thomson/15573)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[Network to Code (Sponsor)|Network to Code]] - Your Network Automation Strategy Begins with Data. Explore Nautobot now.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.

# Show Notes
- [PCalc](https://pcalc.com/)
- [TLA Systems Ltd. Apps on the App Store](https://apps.apple.com/gb/developer/tla-systems-ltd/id284666225)
- [TLA Systems | Cotton Bureau](http://pcalc.fun/)
	- PCalc t-shirts and Pins!
- [AppleScript - Wikipedia](https://en.wikipedia.org/wiki/AppleScript)
- [Record actions in Script Editor on Mac – Apple Support (UK)](https://support.apple.com/en-gb/guide/script-editor/scpedt1009/mac)
- [Frontier: The UserLand Kernel](http://frontier.userland.com/)
- [The Official DragThing Home Page](https://www.dragthing.com/)
- [Motion Sensor P1](https://www.aqara.com/en/product/motion-sensor-p1)
- [Motion Sensor P1](https://www.aqara.com/en/product/motion-sensor-p1)
- [Hiome](https://www.hiome.com/)
- [Status Update | Hiome](https://blog.hiome.com/status_update/)
- [TLA Systems Home Page](https://tla-systems.co.uk/)
- [Graphing Calculator Story](https://www.pacifict.com/Story/)
- [Copland (operating system) - Wikipedia](https://en.wikipedia.org/wiki/Copland_(operating_system))
- [Quote by Douglas Adams](https://www.goodreads.com/quotes/39828-i-ve-come-up-with-a-set-of-rules-that-describe)
	> I've come up with a set of rules that describe our reactions to technologies: 
	> 1. Anything that is in the world when you’re born is normal and ordinary and is just a natural part of the way the world works. 
	> 2. Anything that's inventid between when you’re fifteen and thirty-five is new and exciting and revolutionary and you can probably get a career in it. 
	> 3. Anything inventid after you're thirty-five is against the natural order of things.

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the automation podcast about automatically doing everything          |
| 00:07      | in an automated fashion. At least that's what your stuff should be doing for you. My name              |
| 00:11      | is Rosario Chin. I'm joined as always by David Sparks. Hey, David, how are you?                        |
| 00:14      | Hey, hey, Rose. I'm a little dizzy from your introduction, but I like it.                              |
| 00:19      | Well, I'm a little bit of a cold. So I feel like anything that's weird about today's episode,          |
| 00:25      | we will blame solely on the cold. Nothing to do with me, you or our fabulous guest,                    |
| 00:30      | James Thompson. Hi, James.                                                                             |
| 00:32      | Hi. Thank you for having me on. I'm gradually ticking off all the relay shows. Not that                |
| 00:39      | you're not that you're just something to be ticked off.                                                |
| 00:42      | No, no, but we're part of the bingo card. And, you know, and, you know, you've done                    |
| 00:46      | the triple J's on Connected and all of the, you know, other fabulous stuff that you've                 |
| 00:52      | been on and we'll get some links to some of the other episodes that you've been on to                  |
| 00:55      | put in our show notes. But we thought we'd get you on automators and not talk about anything           |
| 01:00      | automation related because you don't do anything to do with that stuff, do you?                        |
| 01:04      | No, I'm not really. I mean, I'm kidding, but I'm, I'm                                                  |
| 01:09      | I mean, you're kidding. And yet also I'm thinking, do I do anything with what I mean?                  |
| 01:15      | Just a tiny little excerpt from the show notes or something that I'm sure I saw in the show            |
| 01:20      | notes is that during the entire pandemic, you didn't use a light switch. You just used                 |
| 01:24      | Siri to control your lights.                                                                           |
| 01:26      | This is true. Yes, we will get to that in a future topic.                                              |
| 01:30      | Yes, exactly.                                                                                          |
| 01:31      | But yeah, no, I, yeah, I was, I was thinking about this and I think I'm like, I'm the person           |
| 01:40      | behind the curtain that's making automation support more than the person who is actually               |
| 01:48      | then using the thing he has built.                                                                     |
| 01:50      | That's often the case with developers that we have on the show that, you know, they have               |
| 01:55      | all this knowledge of automation and how to implement it. And we definitely want to talk               |
| 01:59      | to you about that because, you know, there's emerging story with shortcuts and third party             |
| 02:04      | integrations and all that. But a lot of developers don't have a lot of automations because they        |
| 02:10      | wake up every day and they open [[Xcode]] and then eventually they get a sandwich and then they            |
| 02:15      | open [[Xcode]] and then they go to bed. So they don't have as much automation as some of our               |
| 02:20      | listeners.                                                                                             |
| 02:21      | I mean, there was one of the things that I was looking into, and this is, we're skipping               |
| 02:27      | ahead, but anyway, I was looking at the shortcuts stuff that you can do with [[HomeKit]]. And I            |
| 02:36      | hadn't made the connection when I had first heard about it that this stuff would run on                |
| 02:41      | your [[HomeKit]] hub thing rather than on a phone or whatever. And I was looking at it and I               |
| 02:47      | spent, you know, a day or so messing around with things, trying to do stuff with lighting              |
| 02:53      | or whatever. And then I sort of paused and I was like, do I want to write code for my                  |
| 02:58      | house?                                                                                                 |
| 02:59      | But yes, I mean, it is the case that for a lot of stuff, if I'm going to do something,                 |
| 03:09      | I will reach for [[Xcode]] rather than [[Shortcuts]] or [[AppleScript]] or whatever, because I can                |
| 03:20      | build a thing. Why not spend weeks making a bespoke tool for doing something rather than               |
| 03:28      | quickly trying to use some existing solution?                                                          |
| 03:31      | Yeah. I mean, that's one of the reasons why this show is so much fun, because there are                |
| 03:37      | multiple solutions to all of the problems and all of us do our best to find a new and                  |
| 03:42      | interesting way to solve it instead of going the pre-trodden, everybody's been here before             |
| 03:46      | and this is how everybody does it. So that's how we'll solve this problem solution. And                |
| 03:51      | it makes the show more interesting, but it's also, you know, for the reasons why you are               |
| 03:55      | you, because I can see in the notes that you've been doing automation support in your applications     |
| 04:02      | for a while, like Peacock 1.0 had support for Apple events in 1992. So that was like                   |
| 04:07      | last year when Apple events was created, basically, you know, fudging decades a little bit there.      |
| 04:15      | And that to me is pretty amazing that you've been adding automation support to all of these            |
| 04:20      | things for so long, because, you know, that's why when you reach for things, you'll reach              |
| 04:25      | for the code to do the thing rather than something that you can sort of put together a little          |
| 04:31      | bit like Lego, but then you have all of the Lego mechanics around it, which you don't                  |
| 04:36      | necessarily want.                                                                                      |
| 04:37      | Yeah, when I first did Peacock, like Apple events were a new thing. And I can't even                   |
| 04:43      | remember if there was [[AppleScript]] in the original System 7 release or if that came                    |
| 04:48      | slightly later. But, you know, Apple events were the basic building blocks of applications             |
| 04:53      | talking to each other, you know, down to the telling it another application to quit or                 |
| 04:59      | whatever, you just send it a quit Apple event. And I am sure that all that stuff still exists          |
| 05:04      | in macOS 10 today, just buried under 13 layers of abstractions. And I actually know it does            |
| 05:14      | because I still use Apple events for hotkeys, because the API for global hotkeys, you can              |
| 05:21      | register for getting things and get an Apple event handler. Anyway, point is, so I was doing           |
| 05:28      | that stuff back then because I thought it would be cool if you could, from some other                  |
| 05:32      | application, like get the value that you're working on in Peacock and then do something                |
| 05:39      | with it and then set the value back into Peacock. And that was, yeah, I mean, as we say, 1992          |
| 05:46      | was a little while ago. And I think it was really dragging, particularly dragging 2.0,                 |
| 05:57      | which came out in 1997, which was like the main thing where I started like getting really              |
| 06:04      | deep into this stuff, because it supported [[AppleScript]]. And specifically, it was a thing              |
| 06:12      | called scriptable and recordable, which meant every action that you took in the application            |
| 06:20      | generated a line of [[AppleScript]] if you had recordings switched on. So you could write                 |
| 06:27      | a script very easily just by you press record, do the thing you want to do, and then it would          |
| 06:33      | start spitting out each line of [[AppleScript]]. And drag thing then could also run scripts.              |
| 06:42      | So if you just had a script file and you had it in a doc, you double clicked it, it would              |
| 06:46      | start running the script. So you could build things in drag thing that, you know, you could            |
| 06:54      | have a doc which automatically populated with stuff. And you could also set hotkeys to trigger         |
| 07:02      | scripts and run them and things like that. So it was kind of a lot of people I know used               |
| 07:09      | it as a sort of early automation tool kind of thing, like a hub that they kept scripts                 |
| 07:16      | in for doing things. And that was a kind of like, that was 97. And I'm thinking about                  |
| 07:25      | it. And that's quite a few years ago.                                                                  |
| 07:28      | Yeah. I mean, so just to fill something in, you said you weren't sure if [[AppleScript]]                  |
| 07:34      | came out with system seven. I double checked. According to the Wikipedia page, it came out             |
| 07:37      | in system seven. That was when it was first released. So you were right about that. And                |
| 07:43      | yeah, recordable is something I kind of forgot it existed because I knew it was an automator.          |
| 07:51      | And the problem for me is I don't use script editor. I use script debugger by late night               |
| 07:56      | software because that's a much better way of writing [[AppleScript]]. I find it's just                    |
| 07:59      | much easier to use. And, you know, if you had an application open recently, prompts                    |
| 08:03      | it as a dictionary, which is just very useful when all of them use slightly different terms            |
| 08:08      | to mean almost the same thing, but not really. And so I forgot about recordable. And I'm               |
| 08:15      | happy to report recording is still a function [[AppleScript]] that's had to report. I just                |
| 08:20      | tried it in [[Safari]] and it doesn't work. You'd think that [[Safari]] had support for recordable.            |
| 08:26      | I mean, the recordable stuff was an absolute pain to implement because basically everything            |
| 08:33      | single thing you did in your logic, you had to emit. I'm trying to remember how it was                 |
| 08:41      | actually implemented. But yeah, you were making all these, all this stuff like really into             |
| 08:49      | the heart of your code. And, you know, if you did it from the start, it wasn't terrible.               |
| 08:58      | But there was a lot of things with [[AppleScript]] in those days when you were trying to implement        |
| 09:04      | it that was very hard because, like, you know, all the stuff where you have all the little             |
| 09:09      | like the clauses like you give me all of these things where the name is this and this matches          |
| 09:15      | and this matches or whatever. All that stuff you had to write yourself. Like there wasn't              |
| 09:21      | any support from [[Apple]] for doing that. So you would find apps that kind of worked. And                 |
| 09:28      | then if you tried to make any complex query against them, we would just completely fall                |
| 09:31      | apart. There was some open source stuff from [[Apple]] written by a friend of mine who fight.              |
| 09:42      | But I used that made some of that easier. But it's easier today with AppKit because                    |
| 09:50      | AppKit does a lot of the kind of heavy lifting of that stuff for you. But it just feels weird          |
| 09:59      | that I've been working on [[AppleScript]] stuff for nearly 30 years.                                      |
| 10:05      | Yes. I mean, I can imagine it feels that way. I also imagine that it feels very weird that             |
| 10:10      | if like me, you're currently going, hmm, I should put a link to Apple events in the                    |
| 10:13      | show dock. You type it into Google and then you realise that [[WWDC]] was announced shortly                |
| 10:19      | before we record the show. And that's what everybody thinks an Apple event is nowadays.                |
| 10:26      | So I'll have to find some other source for that link that I can put in the show notes.                 |
| 10:32      | Probably buried somewhere on the Internet archive if they have been sued into non-existence            |
| 10:38      | by the time this comes out. Exactly. So but I did find a guide on the recording actions                |
| 10:44      | and script editor on the Mac. So there we go. At least that will be in the show docs                   |
| 10:47      | for folks. But still, you really have to respect the                                                   |
| 10:51      | foresight of putting Apple events in way back then because that wasn't a thing on Windows.             |
| 10:58      | It really, no software or computer platform had made user accessible automation that way               |
| 11:06      | where you could control another application through something like an Apple event. I feel              |
| 11:12      | like the team that came up with it really had something with it. And I mean, that's                    |
| 11:18      | probably the same people that put together, you know, [[AppleScript]] at the same time. I                 |
| 11:26      | wish that the team that put together the iPhone had the same foresight because, you know,              |
| 11:33      | there was an opportunity when iOS was an idea to do something like that. And they didn't.              |
| 11:40      | They chose not to, which is what led to kind of this long path toward shortcuts. But, you              |
| 11:47      | know, Apple events and [[AppleScript]] are embedded in the operating system at this point. I mean,        |
| 11:53      | we hear from people on the inside all the time, they're using [[AppleScript]] to keep                     |
| 11:56      | [[Apple]] running. It's not going to go anywhere. And it really was the start of user based                |
| 12:02      | automation in a lot of ways. Yeah. And it wasn't just, you know, like just                             |
| 12:08      | the [[AppleScript]] that they have the whole kind of underlying architecture that other                   |
| 12:14      | people could do their own languages as well, because there was the frontier by user land               |
| 12:21      | was another system that was on top of the same foundations. And I actually added support               |
| 12:30      | for running frontier scripts from drag thing, entirely because Douglas Adams emailed me                |
| 12:36      | and asked if I would do it. And it was like, you just don't say no. If, you know, if Douglas           |
| 12:45      | contacts you and said, could you do this? It's like, yes, of course, that's a name                     |
| 12:49      | drop right there. Yeah, James mentioned earlier that somebody                                          |
| 12:54      | was a friend of his spoiler folks. James knows everybody or at least it feels like that.               |
| 12:59      | James knows some people, but Douglas was a beta tester for drag thing. Basically, I                    |
| 13:07      | foisted a copy upon him at some point and said, you know, as a not quite teenager, but                 |
| 13:15      | you know, very young 20 year old, just sort of emailed him going, Oh, I made this, maybe               |
| 13:21      | you'd like it. And he kind of came back to me and was like, Oh, this is really cool.                   |
| 13:27      | And then I said, do you want to be to test it? And he said, Oh, I'm not sure about beta                |
| 13:34      | software, you know, it's enough keeping my Mac going as it is. And I said, Well, think                 |
| 13:38      | of it more like early access or whatever, rather beta test, and he was like, Oh, okay.                 |
| 13:43      | So yeah, he sent me a number of kind of suggestions over the years. And I got to meet up with          |
| 13:50      | him at [[WWDC]] once. And he is he was extremely tall. I'm not I'm not a tall person. And he               |
| 13:58      | is a very tall person. And I have a one photo of the two of us. But you can't really tell              |
| 14:06      | because it's the back of both of our heads. And it was taken on a film camera. And it                  |
| 14:11      | was very badly exposed. So, you know, it's it's, I know that it was me talking to Douglas,             |
| 14:18      | but there's no actual physical proof from this photo.                                                  |
| 14:24      | What was his what was his personality that you got to spend a little time with him?                    |
| 14:28      | Yeah, he seemed really nice. I mean, he was like, obviously very enthusiastic about [[Apple]].             |
| 14:33      | Yeah, because I think he was famously the first person in the UK to buy a Mac. I think                 |
| 14:38      | Steven Fry was second. And he was really nice. Just kind of I need to find the exact quote,            |
| 14:49      | but we were talking about the the the G4 cube. And he called it something like, you know,              |
| 15:00      | an elegant answer to a question that nobody was asking. And that phrase is kind of stuck               |
| 15:06      | in my head. But but yeah, he, you know, he gave gave me his time. And and when I actually              |
| 15:14      | met him, he, you know, didn't say who the hell are you, he kind of said, said it was                   |
| 15:21      | nice to meet me and all that. And it's kind of this is one of these things of like, sometimes          |
| 15:27      | when you kind of meet a person like that, you know, just that five minute interaction                  |
| 15:32      | or whatever, just means probably way more to the person receiving it than maybe the                    |
| 15:40      | person giving it. But it's yeah.                                                                       |
| 15:43      | Well, I think you just accurately described how people feel when they meet you, James.                 |
| 15:48      | So congratulations on that.                                                                            |
| 15:50      | I have only once felt mildly famous. And that was, I think it was 2018, [[WWDC]], where we                 |
| 16:04      | arrived and we went to the the Apple Park, whatever it's called, the                                   |
| 16:14      | Mr. Centre, the gift shop. Yes. Yes. And I was recognised three times within the first                 |
| 16:23      | half hour. And I thought, Oh, no, this is going to be this is, I don't know what this                  |
| 16:28      | is going to mean for the rest of this conference. I'm not sure how I feel about this. It didn't        |
| 16:34      | actually like after that, it kind of settled down. And I was running around with a big                 |
| 16:39      | piquant T shirt. And there was a on the top of the visitor centre, there's a bit where                 |
| 16:48      | you could look out and you could see like a vague outline of a roof of Apple Park and                  |
| 16:52      | a lot of trees. And people were getting the photos taken up there. And there was an [[Apple]]              |
| 17:00      | employee whose job it was to basically take photos of people and and be nice. And the                  |
| 17:07      | guy there pointed at my t-shirt or whatever and said, That's a great app. And I said,                  |
| 17:15      | Oh, thank you. And then, you know, took pictures, blah, blah, and and five minutes later, he           |
| 17:21      | went, Wait, are you James? And yeah, that that is that is the kind of thing that can                   |
| 17:29      | only happen. Well, okay, I say only happen. Mostly only happens when you're like within                |
| 17:36      | a one mile radius of [[WWDC]], that there are enough people who might recognise you. However,              |
| 17:43      | there was one time I stepped out of my house. And there was a guy in a car that was parked             |
| 17:49      | just outside. And he kind of beckoned me over. And I expected him to say, You know, do you             |
| 17:56      | know the way to someone so street or whatever. And he said, I just saw you on on Twitter.              |
| 18:03      | I was like, Oh, and I thought, you just saw me come out of my house. That's not good.                  |
| 18:09      | Yeah. Yeah. Well, they say, Oh, yes, I was just visiting a friend. Yes. Are you a nice                 |
| 18:15      | person? I hope you're a nice person. I'm sure the person was a nice person. And it was                 |
| 18:19      | entirely coincidence. But it was just the weirdest coincidence of being recognised visibly.            |
| 18:27      | Well, next to my house. I do not, I do not think of myself as famous. And I think there's              |
| 18:37      | a there's possibly a certain Britishness involved with anything that might suggest that you            |
| 18:43      | are a celebrity automatically is a negative. Anyway, I'm not a celebrity. It is funny for              |
| 18:51      | me because I get recognised at Disneyland all the time, because we go there like once                  |
| 18:56      | every week or two and people know that. And so people see me all the time there. But the               |
| 19:02      | ones that are funny for me is when I'm at something like [[WWDC]] or back in the old days                  |
| 19:07      | at Macworld, I often would get recognised in elevators because someone would hear me                   |
| 19:12      | talk because there's so many people that know what I sound like, but not what I look like.             |
| 19:18      | So I'd just be walking around and say, Oh, Sparky, I recognise your voice. You know,                   |
| 19:24      | the best one of those was I was at a cafe with a variety of people and including I think               |
| 19:33      | it was like most of ATP and [[Myke Hurley]] and CGP Gray. And somebody came up to Mike and                 |
| 19:42      | was saying to Mike, you know, oh, you know, really love all your podcasts or whatever.                 |
| 19:48      | You know, really love [[Cortex]] and Gray is just sitting there like stealth incognito because             |
| 19:56      | nobody really knows what he looks like. And so he would, every time the person would say               |
| 20:02      | something more about [[Cortex]], he would just kind of go, hmm, hmm.                                       |
| 20:06      | Yeah, I think I remember one of a similar conversation to that because I also met you                  |
| 20:13      | at [[WWDC]] in 2018. And I remember sitting at a table and watching people talking to various              |
| 20:21      | other people, not realising that Gray was sat there or you were sat there or something.                |
| 20:26      | And yeah,                                                                                              |
| 20:27      | There's a hierarchy of fame at these things. And it's like, you know, if you're sat next               |
| 20:32      | to like the relay, I was going to say the luminosity, but that's not quite the right                   |
| 20:39      | word. That's not what I meant. You know, the founder, shall we say, or you're sat there                |
| 20:47      | with the ATP folks, nobody cares who you are. Basically what it comes down to. But you know,           |
| 20:56      | if you're on your own, then maybe somebody might come up. I mean, I've been doing this                 |
| 21:00      | long enough that maybe a few people know me.                                                           |
| 21:04      | I mean, I think you also did some very good secret, both gorilla marketing and also disguise           |
| 21:10      | work by releasing peacock t-shirts before [[WWDC]], because I know that you are not the                    |
| 21:16      | only person wearing a peacock t-shirt [[WWDC]], because I was also wearing a peacock t-shirt               |
| 21:20      | at [[WWDC]].                                                                                               |
| 21:21      | I'm continually amazed at the ability to sell t-shirts for a calculator. And I just did                |
| 21:31      | a whole bunch of new shirts because basically, Cotton Bureau was starting to charge for storing        |
| 21:38      | inventory. And I'm like, okay, I need to now make income to cover the cost of storing                  |
| 21:45      | all these pins which are sitting in a warehouse somewhere for Cotton Bureau. That's not entirely       |
| 21:50      | why I did it. But yeah, I'd had print on demand t-shirts previously. And I was like, sorry,            |
| 21:56      | I'll print on demand the campaign t-shirts. And I thought, well, let's look at the print               |
| 22:02      | on demand stuff. And I set that up. And yeah, we sold like a few hundred t-shirts. And I               |
| 22:09      | was like, I'm surprised. I haven't bought one myself yet of this new round, partially                  |
| 22:19      | because the weather hasn't been nice enough to wear t-shirts.                                          |
| 22:21      | Yes, yes. The problem with living in the UK. And you're further north than I am. So you                |
| 22:26      | have even worse weather than I do. But I did have something called sunshine today for like             |
| 22:30      | two whole minutes. So I'll send it your way next time.                                                 |
| 22:33      | I can see some vague blue sky as I look out of the window. But yeah, it's only starting                |
| 22:38      | now to get vaguely nice out there. But even with nice with the threat of snow at any moment's          |
| 22:47      | notice. Also, I think we're the same latitude as Moscow or something. So                               |
| 22:55      | UK is surprisingly far north. This episode of Automators is brought to you by TextExpander.            |
| 23:04      | When you work in a small team, every moment counts. You don't want to be wasting your                  |
| 23:07      | time finding video conferencing details that send to any client. You don't want to track               |
| 23:11      | down the same FAQs from the company website every time. These are the kinds of things                  |
| 23:15      | you want to get your fingertips so you can get work done faster. And that's why you                    |
| 23:18      | need TextExpander. With TextExpander, you can access what you type the most with just                  |
| 23:22      | a few keystrokes, allowing you to work faster and eliminate repetition, letting you focus              |
| 23:27      | on what matters most to you. TextExpander's powerful shortcuts and abbreviations streamline            |
| 23:32      | your team's work. All you have to do is type a short abbreviation and TextExpander does                |
| 23:36      | the rest for you. You just build and collect your most commonly used phrases, messages,                |
| 23:40      | URLs and more right within TextExpander. Then create your chosen abbreviation and they'll              |
| 23:45      | be with you wherever you type. You can even customise the snippets by having them automatically        |
| 23:49      | add in dates, fill in the blank fields, timestamps and more. So make sure you still keep the           |
| 23:53      | personality and communication you send. TextExpander is available on any device you use across any     |
| 23:58      | app you use on Mac, Windows, Chrome and iOS. Personally, I use TextExpander for all sorts              |
| 24:03      | of things, but even just things where it's eliminating the copying and pasting from the                |
| 24:07      | same place and then accidentally copying an old version of the thing. Oh yeah, no I don't              |
| 24:12      | do that anymore because I have TextExpander and so it boosts my productivity because it                |
| 24:17      | means that I don't have to worry about duplicating myself as well as my automations. If repetitive     |
| 24:22      | typing is getting you down, you need TextExpander. Check out TextExpander today at textexpander.com    |
| 24:27      |/automators and you can get 20% off your first year. That's textexpander.com/               |
| 24:32      | automators to say goodbye to repetitive typing. I'll thanks to TextExpander for their support          |
| 24:37      | of the show and realy.fm. So James, you started talking about home                                     |
| 24:43      | automation in the last segment and I put a pin in that. I would like to hear what are                  |
| 24:47      | you doing because I could see you being as a guy who goes way down that rabbit hole if                 |
| 24:52      | you had time. Yeah, so I started like this was kind of a pandemic project. I started                   |
| 25:02      | messing around with, do you know the Meross power strips that they were the first kind                  |
| 25:13      | of like fairly readily available power strips in the UK with home kid support? Yeah. And               |
| 25:21      | I got one of those and had it set up, purely it was just controlling a set of side lights              |
| 25:28      | in our living room. It was just like, I want to experiment with this, see what it's like.              |
| 25:37      | And that point didn't have any HomePods or anything. And this gradually grew, although                |
| 25:48      | I kept running into weird problems with things not wanting to talk to certain Wi-Fi routers            |
| 26:00      | we had and certain channels and a pain. Currently it's stabilised. I once made the mistake of          |
| 26:09      | changing my network name. I didn't realise how bad that was. Yeah, it's one of those                   |
| 26:14      | things where a lot of people want to go hubless for automation. And they're like, yeah, hubless        |
| 26:20      | is way better. I don't want any hubs to interfere with stuff like the Hue hub or whatever. It's        |
| 26:27      | going to make my life more complicated. I just want Wi-Fi devices. And every time somebody             |
| 26:32      | says that, a little bit of me just goes, have you seen how difficult it is to add things               |
| 26:39      | to your Wi-Fi network that are not your phone? Because it's difficult. And then you have               |
| 26:45      | the complication of your Wi-Fi briefly drops, but the device just assumes that the network             |
| 26:51      | doesn't exist anymore and has an existential crisis for three days until it realises that              |
| 26:57      | no, the network is back or whatever. And Merrill's devices are pretty good. I have some of them        |
| 27:01      | myself. I've had a couple of their light strips and more of their power strips. And they work          |
| 27:07      | fine. But I do personally really try to avoid Wi-Fi devices in favor of hubs because a single          |
| 27:14      | hub can usually be ethernet-ed to your router, which means that you don't have the whole                |
| 27:19      | Wi-Fi configuration dots. And even if you do have the Wi-Fi configuration, it's a case                 |
| 27:24      | of one device and then suddenly all of your lights are back or whatever. So yeah, yeah,                |
| 27:31      | changing your network name, both brilliant and also terrible. The pro tip folks, if you                |
| 27:36      | do have Wi-Fi home automation devices and you do get given like a new router or something              |
| 27:40      | via your ISP, you can usually change the network name and password to make it the same as the          |
| 27:46      | old network name and password. And therefore, just continue living with whatever user network          |
| 27:51      | name and password you previously had, which avoids many of these problems that James accidentally      |
| 27:55      | ran into by probably hopefully using a cool network name.                                              |
| 27:58      | But, you know, it's not obvious to people that, you know, you would want to have more                  |
| 28:04      | devices, more hubs and not Wi-Fi. If you're getting into home automation, you would think,             |
| 28:10      | oh, simplicity, I could just keep it all on one network. But in addition to the problems               |
| 28:14      | Rose was talking about, there's network traffic problems, you know, the more things you put            |
| 28:19      | on the Wi-Fi, the more the bandwidth gets crowded, the slower everything gets. And with                |
| 28:24      | a lot of these independent hub or puck devices that come with their own hub, they're usually           |
| 28:30      | in a radio space that is not in your Wi-Fi space. So they're more stable. And I didn't                 |
| 28:38      | know that either. When I first started buying things, I was like, oh, Wi-Fi, yeah. You know,           |
| 28:42      | and now it's like, ooh, Wi-Fi bad. Like I want to put some strip lights in my studio,                  |
| 28:47      | James, I've been thinking about doing that. And I keep looking at the Meross, but they're               |
| 28:52      | Wi-Fi. And it's like, no, I need to find something that's on its own and maybe I don't know what       |
| 28:57      | I'm going to, what vendor I'm going to use. There's a couple of them that makes strip                  |
| 29:00      | lights that are on their own pucks. And I'm actually seeking them out, you know, buy yourself          |
| 29:05      | a little switch, get some short ethernet cables and just fill your closet.                             |
| 29:10      | So I basically, I had started with one room and replaced all the lights in one room. And               |
| 29:17      | it was working reasonably well. And we ended up with a pair, well, first one HomePod Mini              |
| 29:24      | and then a second one, which now work as they're a stereo set for our television connected             |
| 29:32      | to the [[Apple TV]]. And virtually everything that we watched on television is through the                 |
| 29:36      | [[Apple TV]]. So, you know, I have that. And so we were just switching the lights off and                  |
| 29:43      | on in the room with Siri. And Siri, 90% works. Usually it's the trigger that fails for me              |
| 29:56      | for some reason. But anyway, because pandemic, nobody else was coming into our place. So               |
| 30:06      | it didn't really matter that, you know, if some random person was here that they couldn't              |
| 30:10      | actually operate anything, like couldn't switch the lights on and off. And so I kind of wanted         |
| 30:18      | to get away from that. And I've spent like over the last four months or something, I've                |
| 30:23      | been, I got indeed the aforementioned hue hub. And I've got a lot of hue lights everywhere.            |
| 30:30      | And I've also, I got the little hue buttons, just the tiny round ones. And there's a company           |
| 30:38      | that makes the little plates that clip on over your your light switches. And so I've                   |
| 30:46      | got that over there. So the lights, nobody can reach and accidentally switch the lights                |
| 30:52      | on and off. And the light is exact, the light switch is exactly where you think it is. So              |
| 30:57      | my brain is like, I reach for the light switch, it's slightly more fleshy and squishy than             |
| 31:03      | I remember, but it does the right thing when I press it. And so now there are one, two,                |
| 31:12      | three, four rooms that have some hue lights in them. And I've got a motion sensor in the               |
| 31:21      | hole. And that is, that's by far been the best thing, because it's like, I'm just walking              |
| 31:28      | towards the hole, and it, it awakens for me. And the lights come on. And then a minute                 |
| 31:35      | later, the light goes off again. And this was one of the things that in the lead up                    |
| 31:41      | to this, I was, I was looking into, because I'd seen the tail of instead of using the                  |
| 31:48      | motion sensors, which are great for places that you go in and out of like, like hallway,               |
| 31:55      | they're useless, as I discovered, if you want them in your main room, because they, you're             |
| 32:02      | not moving on the sofa. And it just decides, well, this person has gone or died, I will                |
| 32:08      | switch the lights off. And so I spent quite a while trying to work out, could I do something           |
| 32:15      | clever? And this was where I was messing around with the shortcut stuff. It's like, could              |
| 32:21      | I write code for my house so that I could do something clever using these sensors and                  |
| 32:27      | try and, and the answer is no, no, you can't because it, you can do something that works               |
| 32:33      | for one person. But then as soon as you got any more than one person, it's, it's hard.                 |
| 32:39      | So I had been seeing about these present sensors. So I was looking that up and Rose sent me            |
| 32:46      | a link to the, the one that apparently you should look at.                                             |
| 32:52      | Yeah, yeah, because there have been some various things in this, in this area for a while.             |
| 32:59      | And I'm just going to circle back by the way and say that I've done exactly what you've                |
| 33:03      | done, James, with the light switches, I bought light switch covers. I don't have the Phillips          |
| 33:07      | round hue round buttons. I've got like the four button ones over there, because then                   |
| 33:12      | the top one is on, the bottom one is off, and the middle one like controls brightness                  |
| 33:16      | or something. And so when people go, wait, this is different. They then look at it and                 |
| 33:21      | go, well, this one looks like an on and they press in. Oh, look, it's on, but by which                 |
| 33:25      | time the lights already turned themselves on. One of the things I wanted for ages was                  |
| 33:30      | high home. And basically what it is, is this tiny little like motion sensor that you stick             |
| 33:36      | above a door. Okay. And so every door in the room will need one of these on and it counts              |
| 33:40      | people in and it counts people out. And that's all it does. But then by counting, it knows             |
| 33:47      | how many people are in a room and therefore whether or not the room is occupied. And this              |
| 33:53      | for me is like the simplest way of are there people in the room, count people in, count                |
| 33:57      | people out, simple. The downside to this is I have never once gone to the high home website            |
| 34:03      | and clicked order now and discovered that I could order it and it's no longer available.               |
| 34:10      | So yeah, as of January, it became defunct and no longer available. And I think a lot                   |
| 34:16      | of this is due to the development of mm-wave sensors. And mm-wave is millimetre wave and                 |
| 34:23      | essentially it is a, is a person here sensor. So it's not a motion sensor in the sense that            |
| 34:29      | like the Phillips Hue motion sensor is like, Oh, there is movement. I see person. There                |
| 34:33      | is no movement. There is no person. It is a, is somebody there? Sensor, which is a good                |
| 34:41      | idea. David has one and he's had a few issues with it. And I have two of them. I did have              |
| 34:47      | some issues with one of mine for a while and then I installed a firmware update on it.                 |
| 34:51      | I installed a firmware update on my [[Zigbee]] hub and then everything's working fine with that,             |
| 34:55      | which is great. So it's certainly worth looking into, but the [[Aqara Presence Sensor#FP1\|Aqara FP1]] is sort of the probably        |
| 35:05      | best one to try there just because it does mm-wave. And this may be something in its favour              |
| 35:15      | for some people. This may be against it for some other people. It's USB powered. So there              |
| 35:20      | are no batteries to change. Now the Phillips Hue sensors aren't that big, but they use                 |
| 35:25      | a triple A battery. The [[Aqara]] regular motion sensors are tiny, tiny, tiny. And they use                |
| 35:32      | a CR2032 battery, which is like a watch battery. And they are like the size of that. The [[Aqara Presence Sensor#FP1\|Aqara FP1]]        |
| 35:39      | is closer to the size of the Phillips Hue sensor, but it's just USB powered. But                   |
| 35:43      | it is a very good sensor I found, especially now I know how to use it. It is even better.              |
| 35:50      | So that is certainly what I would look into for those rooms where you continue to exist                |
| 35:55      | after you stop moving, you know, like places where you sleep, places where you sit, places             |
| 36:00      | maybe where you stand still for a while. I found just motion sensor. My hallway doesn't                |
| 36:05      | cut it or in my shower bathroom specifically, because where my motion sensor is in the bathroom,       |
| 36:10      | it's great for detecting person went into the bathroom. It's not great for detecting                   |
| 36:14      | person is still in the bathroom and is sharing, for example. So I just added a door sensor.            |
| 36:20      | The door is closed. The bathroom is occupied. So that's a simple technique there.                      |
| 36:26      | I read something about the present sensors, which suggested that they take, you know,                  |
| 36:31      | like five to 10 seconds to register a person. And that some people were pairing them with              |
| 36:38      | a traditional motion sensor to kick the lights on and then use the present sensor to keep              |
| 36:43      | them on. I was like, that's interesting, but this is getting complicated.                              |
| 36:48      | It does sound complicated. I don't have one in this room, because I have a vibration                   |
| 36:54      | sensor on the back of my office chair, which is quite happily telling the office that my               |
| 36:58      | room is in use. Also, my computer being on tells my office that this room is in use,                   |
| 37:03      | you know, providing, you know, there's mouse movement or a keyboard input or something                 |
| 37:08      | like that. But I haven't. So I took all of the other motion sensors out of my living                   |
| 37:13      | room. Like I didn't physically take them out, but I took them out from a technical perspective         |
| 37:18      | so that I would know whether or not my living room is occupied. And I like just barely put             |
| 37:26      | a foot inside the door from the hallway and it's on.                                                   |
| 37:29      | I'll tell you, though, my [[Human Presence Sensor\|human presence sensor]] is slow. And I've tried at first, I thought            |
| 37:35      | it was because I was going through a car, then I thought it was going through. I put                   |
| 37:40      | it directly into [[Home Assistant]] and it's it's not slow and like it takes forever, but there            |
| 37:46      | is like probably three to five seconds between the time I walk in the room and the lights              |
| 37:51      | turn on from it, whereas the the IR sensor is much faster. So that's actually a pretty                 |
| 37:58      | good idea to have an IR in there and just have that as a trigger and then use a human                  |
| 38:04      | presence to turn it off. Like if there's nobody in the room, turn it off. I think that actually        |
| 38:08      | would probably solve the problem for me. But then you're getting into a situation where                |
| 38:12      | you've got multiple automations that you need to track. And yeah, and you start bumping                |
| 38:19      | against the the fringy edges of [[HomeKit]] and start looking at something like [[Home Assistant]]             |
| 38:25      | where you have more control.                                                                           |
| 38:26      | Yeah, because how I would solve this in [[Home Assistant]] is I just create a group with those             |
| 38:31      | two sensors in and then when either of them is on, the group is on and when both of them               |
| 38:37      | are off, the group is off. And then you just you have the group and you work with the group            |
| 38:41      | instead of each individual sensor. But that doesn't work if you're just staying in Home                |
| 38:45      | Kit. But I think if you add something like Home Plus, then you may be able to use multiple             |
| 38:51      | triggers. I would need to double check that to make sure because I know that Home Plus                 |
| 38:58      | has recently released an update with some cool stuff that it does. But I don't remember                |
| 39:03      | if multiple triggers in automations were something that it supported or not. So I will have to         |
| 39:08      | experiment and report back on that.                                                                    |
| 39:11      | I just want somebody to release a nice integrated IR and a present sensor in a [[HomeKit]] specific        |
| 39:21      | or at least supporting whatever protocols matter, probably. But I just want that as                    |
| 39:29      | a one thing that I can deploy that will work. I mean, is it too much to be able to just                |
| 39:34      | want to walk through my house and have the lights follow me and say hello to me as I                   |
| 39:40      | walk into rooms?                                                                                       |
| 39:41      | I mean, even in Star Trek, they said computer lights.                                                  |
| 39:45      | I know.                                                                                                |
| 39:46      | So, you know, maybe we just need to all use [[Amazon Echo\|Amazon's Echo]] system and change the trigger                |
| 39:53      | word to computer.                                                                                      |
| 39:54      | We're so close, though. You know, it is you're right. That's such an obvious problem. And              |
| 39:58      | we're so close.                                                                                        |
| 39:59      | Yeah. Yeah. Like my house does a very good job, but I'm also the only person here most                 |
| 40:04      | of the time. That said, it does work with more than one person in the house. So I feel                 |
| 40:09      | like that's quite useful.                                                                              |
| 40:10      | Also, how do the present sensors work with animals? That is my question.                               |
| 40:16      | It depends on where you put them.                                                                      |
| 40:18      | I will have to do some tests.                                                                          |
| 40:19      | The animals of the sensors.                                                                            |
| 40:21      | Yes.                                                                                                   |
| 40:22      | Yeah. I mean, I like all the ideas in principle. And at the moment, it does still feel that            |
| 40:33      | the stuff is getting, not that it's out of reach of most people, but you have to do quite              |
| 40:40      | a bit of work to get it set up so that there's, as I say, there's light switches on the walls          |
| 40:45      | that regular human beings can use. But I like the idea of just, you know, I wouldn't have              |
| 40:53      | to tell anybody anything and they would just walk into rooms and lights would come on.                 |
| 40:58      | Of course, as I discovered, I have the, I had the hue sensor in the hallway, which was                 |
| 41:06      | great until something happened at like four or five a.m. and I like stagger out of bed                 |
| 41:12      | into the hall to find out whatever it was. And then the light just went on full. And                   |
| 41:17      | I was like, okay, now I cannot see because I have been blinded by my helpful light.                    |
| 41:23      | I have now got it set to the absolute minimum, but even the absolute minimum brightness on             |
| 41:28      | a hue light is still too bright for five in the morning when you're tired.                             |
| 41:34      | Yes. I've solved this problem by putting a smart plug in my hallway, which is a power                  |
| 41:40      | monitoring smart plug. So it tells me how much electricity my dehumidifier is using.                   |
| 41:45      | And this happens to have a coloured ring around it. Now, this is not home kit compatible.               |
| 41:50      | I picked it up from Ali Epress and then took it apart to make sure it wasn't going to burn             |
| 41:54      | my house down before putting it back together. And I will put a link to it in the show notes,          |
| 41:59      | folks, because I don't expect you all to take apart some random purchase from Aliexpress               |
| 42:02      | and check whether or not it's going to burn your house down before putting it back together            |
| 42:06      | and installing it in your hallway. But it means that I have something in my hallway,                   |
| 42:10      | which is a nightlight and that comes on. So I have two of the tiny little [[Aqara]] motion                 |
| 42:15      | sensors sort of like adjacent to my bed. And if I put like a foot out of bed in the night              |
| 42:20      | to like get up, then it will turn on that light and some other very dim lights so that                 |
| 42:27      | I can then see enough to go to the bathroom without blinding myself. But the actual overhead           |
| 42:32      | lights don't come on at night because I like to retain some semblance of eyesight.                     |
| 42:40      | I have the opposite problem in that I have a humidifier rather than a dehumidifier. And                |
| 42:45      | I've been looking at that because the ones that I've got, they're not, they don't speak                |
| 42:51      | home kit, but I can't remember what the app is. But what you can do with them is you just              |
| 42:58      | set up automatic parameters of if it's below this, do this. And that's fine. But now I've              |
| 43:08      | got like multiple HomePods scattered throughout the place, which know the humidity. And I'm           |
| 43:13      | thinking, maybe I should do it that way and have used the home kit side of things to track             |
| 43:20      | humidity and to switch these things off and on. Although I have an orange HomePod mini,               |
| 43:27      | which is refusing to give me any humidity data whatsoever. And I have no idea why it's                 |
| 43:32      | running the latest software. As far as I can tell, it is like, it's a real one, but it                 |
| 43:38      | just won't give me the temperature or the humidity readings.                                           |
| 43:45      | Maybe it gave the sensors to Steven Hackett.                                                           |
| 43:47      | Possibly. I mean, he steals all orange things. So in the sense.                                        |
| 43:52      | I think the solution for you, James, really is at this point to go deeper down the rabbit              |
| 43:57      | hole. I mean, you program the dock for the Mac. So you're capable of way more than me.                 |
| 44:04      | And there are solutions like home assistant is one roses hook me on where it is kind of                |
| 44:10      | walks the Goldilocks line of complication, but simplicity. But the question is, do you                 |
| 44:17      | want to, but something like that, you would be able to say if I go in the hallway and                  |
| 44:22      | it's 2am, put it at 1%. But if I go in the hallway and it's 10pm, put it at 20%. Or I                  |
| 44:28      | mean, you have a vast amount of options and triggers available to you if you go up like                |
| 44:35      | one level. And then I think about that.                                                                |
| 44:37      | Yeah. Do you want to, right?                                                                           |
| 44:39      | The question is, do I want like, as I said before, do I want to be writing code for                    |
| 44:43      | my house?                                                                                              |
| 44:44      | Yeah.                                                                                                  |
| 44:45      | And this is like, I know I could do it. I know I could have all the various bridges                    |
| 44:49      | and things and I could bring stuff into home kit. I just kind of want it all to work. And              |
| 44:55      | I'm hoping that, you know, with the advent of [[Matter]] and whatever, like in five years                  |
| 45:01      | or whatever, this will all work. And even the random thing bought off AlI Express will                  |
| 45:08      | just integrate into this and will not require, you know, 13 firmware updates and a magic               |
| 45:16      | spell to make it work.                                                                                 |
| 45:18      | Okay. But what are you going to do for the five years in between?                                      |
| 45:21      | Stumble around in the darkness.                                                                        |
| 45:24      | I'll cast, but I'm going to say, you are a train ride away from me, James. You know,                   |
| 45:29      | if you wanted somebody to just come in and like deliver a little microcomputer that hooks              |
| 45:34      | into all of the things and offers magic, including traces when stuff doesn't work the way it's         |
| 45:39      | supposed to that tells you why it went wrong, then that could be arranged.                             |
| 45:44      | I mean, your personal concierge service is an appealing aspect of this, I will say. Yeah,              |
| 45:54      | I can see like the advantage of everything. And at the moment, I feel like I'm kind of                 |
| 46:00      | like I'm sticking all the bricks together and sometimes the bricks don't go the way                    |
| 46:05      | I expect them to or like they're not even the right kind of bricks. Fake Lego everywhere.              |
| 46:14      | And it's just kind of I can see all the things and there's like, you know, behind me, I have           |
| 46:19      | an on air sign and I'm like, okay, I've got that in home kit because it's now effectively              |
| 46:25      | a hue light. And okay, I could tie that into something so that when I hit record on my                 |
| 46:33      | Mac, the on air light comes on. This seems perfectly plausible, you know, and I've got                 |
| 46:39      | the bits I have, you know, I have a have my [[Stream Deck]] sitting in front of me here. In                |
| 46:47      | fact, it's your [[Stream Deck]], but everybody just buys bigger and bigger [[Stream Deck\|Stream Decks]].                   |
| 46:58      | And I, you know, I could do all these things and I just haven't put the pieces together                |
| 47:01      | because it feels a bit like my day job. If more frustrating, if that were possible.                    |
| 47:11      | Yeah. Well, in frustrating that it's not entirely consistent still.                                    |
| 47:15      | And I don't know if like the five year in the future is going to be consistent or it's                 |
| 47:19      | just going to be differently inconsistent. But I have hope for this stuff. And I can                   |
| 47:26      | see, you know, like, there's a lot of like, I love the hue system, you know, and I know                |
| 47:33      | people think they're overpriced for what they are. And yes, I can see that. But the stuff              |
| 47:40      | basically just works. And there's a lot of control in the hue app and you can still have               |
| 47:49      | it all talking to [[HomeKit]] as well. And as you say, you don't have to repair, re-pair                    |
| 47:57      | all your lights when your Wi-Fi network goes berserk.                                             |
| 48:02      | Yes. And I like it for that. And I like the fact                                                       |
| 48:06      | that I have a high degree of confidence that if I press the light switch, the light will               |
| 48:11      | switch on, which I know is a low bar, but it feels like I've only just got there after,                |
| 48:18      | you know, spending all the money.                                                                      |
| 48:20      | Yes. And I will note something else with hue. You know, it is pricier stuff, but the colour            |
| 48:28      | is actually accurate. If you select red, you will get red. If you select orange, you will              |
| 48:32      | get orange, which is not red and it's not yellow. It's actually orange. Green is green                 |
| 48:37      | and so on and so forth. And this may sound very obvious to some people. But buy a very                 |
| 48:43      | cheap smart and I'm using air quotes for that light from [[Amazon]] or wherever. And I can guarantee       |
| 48:51      | you that the colours will probably not be as bright as the hue stuff. Like there was                   |
| 48:55      | an IKEA light that a friend was having an issue with a while ago where green just was                  |
| 48:59      | kind of yellowy. It was an older IKEA light, not a new IKEA light. The newer ones are better,          |
| 49:05      | I have to say, but it won't be as bright and the colours just won't be as accurate. And                |
| 49:09      | with hue, you might be paying a chunk of money, but you're going to get something bright and           |
| 49:13      | colourful that is actually the colours that you wanted. And that is certainly, at least                |
| 49:18      | in my opinion, worth paying for. If you want colourful lights in your home, then you want              |
| 49:23      | the colours to actually be the colours that you want.                                                  |
| 49:25      | And even the sort of the 20 quid, you know, 100 watt equivalent white lights, 20 quid                  |
| 49:34      | is relatively expensive, but it's not too bad. And they're fine. Like I've got them                    |
| 49:40      | in the hallway and stuff because I don't necessarily need to have a, you know, bright                  |
| 49:46      | purple hallway, although, you know, I can see the appeal obviously.                                    |
| 49:49      | Yes. Yeah, I've tended to leave the actual coloured lighting for accent lights. So my                  |
| 49:53      | overhead lights are the white ambience lights, with the exception of the bedroom where I               |
| 49:58      | already had a coloured light. And sometimes that can be quite nice. I have not been very               |
| 50:02      | well for the last few days. So where I've had the light turn on to provide like actual                 |
| 50:07      | light, I've had it turn on a very sort of orangey colour rather than, you know, white                  |
| 50:15      | just because that doesn't wake me up as much. But it still allows me to see the box of tissues         |
| 50:19      | that has escaped to the floor once again, and so that I can retrieve it and blow my                    |
| 50:22      | nose and go back to sleep. So yeah, it's useful to have coloured lights, at least in some              |
| 50:29      | areas. But yeah, when you want white lights, you probably just want bright and maybe a                 |
| 50:33      | little bit of ambience.                                                                                |
| 50:34      | Yeah. So I keep looking at all the other few products and that's like, and I start to                  |
| 50:40      | think, you know, it's one of those things that snowballs you go like, well, I'd like                   |
| 50:45      | a light strip, you know, I could put that behind the TV. But then if I got the good                    |
| 50:49      | ones, then I could get the box which connects it to the TV and so on. I'm quite annoyed,               |
| 50:54      | by the way. And I complain to you because I can't complain to LG that it's only the                    |
| 50:59      | Samsung televisions have the tie in with you that they can do the, you know, match                     |
| 51:07      | what's on the screen with the lights behind them thing. They can do it natively without                |
| 51:14      | you having to buy the expensive box and the LG's don't.                                                |
| 51:18      | I mean, if you'd like a different way to spend money, James, allow me to introduce you to              |
| 51:22      | something that David and those listeners in the U.S. cannot get, the Philips Ambilight                 |
| 51:27      | TV has the lights built into it. And this is what I have. A different way to spend                     |
| 51:34      | money, as I said, but you don't have to buy the light strip or the box. It's all just                  |
| 51:38      | there.                                                                                                 |
| 51:39      | I think there's only a certain number of televisions that I can buy in a 10 year period                |
| 51:45      | without it drawing attention to the fact that I'm doing it.                                            |
| 51:48      | Yeah. You've cut your limit.                                                                           |
| 51:51      | Well, I got one of the LG not OLED ones, a 4K one. And I was like, well, this is good,                 |
| 52:01      | but it's not, you know, it's like, you could tell, even though it was one of these things              |
| 52:06      | where it's supposed to have, you know, all these lighting zones behind it or whatever,                 |
| 52:11      | there was like a logo bouncing on the screen and you could just see this giant halo of                 |
| 52:16      | backlight following it around. And I'm like, okay, this is not good enough. And then I                 |
| 52:21      | got, I think it was the, I got the PlayStation 5 and I'm like, well, I should really probably,         |
| 52:28      | you know, do it justice and get an OLED. And I got one of, I got, at least I got a deal                |
| 52:34      | on the LG C1s because the C2 was coming out like the next month or something. So I got                 |
| 52:40      | it half price or something. But I think I'm set with televisions for a while.                          |
| 52:50      | That's a shame because my 12 year old TV died and I got an ambulance and I have to say,                |
| 52:54      | I do love it.                                                                                          |
| 52:58      | This episode of the Automator's Podcast is brought to you by Electric. Unbury yourself                |
| 53:04      | from IT tasks and get a free pair of Beats Solo 3 wireless headphones when you schedule                |
| 53:09      | a qualifying meeting. Just go to electric.ai slash Automator's. When leading your small                |
| 53:17      | business, it's not all glamour. In fact, sometimes it's a matter of spending hours on boarding         |
| 53:22      | an employee, which you're well equipped to deal with, but you maybe don't have time for.               |
| 53:28      | The team over at Electric knows that and they know small businesses like yours face these              |
| 53:32      | challenges all the time. That's why they're on hand to help with the time consuming parts              |
| 53:37      | of your business like standardised device security with best in class device management software       |
| 53:44      | so you can implement best practices across the board to be ready to scale. Employee onboarding         |
| 53:49      | and offboarding done for you, saving you an average of eight hours per request, keeping                |
| 53:55      | a single point of visibility into your IT environment to control your device's networks                |
| 54:00      | and applications and simplified reporting that allows you to achieve and maintain compliance.          |
| 54:06      | With Electric, you get proactive IT recommendations and automated workflows to make IT easier          |
| 54:13      | to manage for even non-technical users. If you're hearing this and you think your company              |
| 54:18      | could use some of these services, but you're not sure where to start, Electric's experts               |
| 54:23      | will guide you through the process of establishing standardised IT processes for your organisation.    |
| 54:29      | If you're listening to this show, you have the curse of technology knowledge. That means               |
| 54:33      | that you're able to do a lot of this stuff on your own and for your team, but that doesn't             |
| 54:38      | mean you should. I know that I fall into the trap all the time of trying to do this stuff              |
| 54:43      | myself when I should be focused on the business. Don't make the same mistake I do. Get Electric        |
| 54:48      | to take care of these problems for you. And for Automators listeners, Electric is offering             |
| 54:53      | a free pair of beat solo three headphones for taking a qualifying meeting. Just go to                  |
| 54:58      | electric.ai slash Automators. That's electric.ai slash Automators. Go there now and get your           |
| 55:06      | free pair of beat solo three headphones today for scheduling a meeting. And our thanks to              |
| 55:11      | Electric for their support of the Automators. James, as somebody who was one of the original           |
| 55:18      | supporters of Apple events, you have a history with [[AppleScript]]. And I know you still use             |
| 55:23      | it to this day. I think there's a lot of listeners who do want to do more [[AppleScript]]. I think        |
| 55:29      | there's a lot of things on your Mac, at least, that really can only be accomplished with               |
| 55:32      | it. What are you using it for? And how do you trigger it?                                              |
| 55:37      | I have a number of things, particularly when I'm dealing with customers. Typical thing,                |
| 55:45      | I get a lot of people emailing, slightly less these days, but emailing in saying, I've lost            |
| 55:51      | my serial number. And it's a very common thing. So I have an [[AppleScript]] which will go in             |
| 55:58      | and it will pull things out of the email like their name, their email address, and any other           |
| 56:04      | details that it can find. Start doing fuzzy matches across the various databases that                  |
| 56:11      | I have that have got old serial numbers in them. And then if you find something, I push                |
| 56:16      | a button and it just replies to the current email and here are your details. And I don't               |
| 56:22      | need to do anything at all. I just need to press send if it works. And it's stuff like                 |
| 56:27      | that that I find [[AppleScript]] really useful for. Because if you're talking to things like              |
| 56:33      | mail or you're talking to, in this case, it's FileMaker Pro database or whatever, a lot                |
| 56:41      | of the older apps, anyway, have pretty solid [[AppleScript]] support that you can go in and               |
| 56:48      | you can do exactly what you need to do. And you can have a button inside FileMaker to trigger          |
| 56:57      | stuff as well. So once it's found things, I've got a button to hit that and it goes                    |
| 57:01      | back and it talks to mail and creates the reply and sets up all the stuff. And I do other              |
| 57:11      | things, particularly with mail as well, like I've got just a script which will take, if                |
| 57:19      | I'm sending out an email to beta testers, I write an email and I press a button and                    |
| 57:24      | it will fire off individual emails to each of the people using [[AppleScript]] to build                   |
| 57:31      | those and send those. And it's that kind of stuff with just extending out the functionality            |
| 57:38      | of these apps like mail, which I think is the key thing that I use. But I mean, I've                   |
| 57:44      | got [[AppleScript]] everywhere. And because I've got [[AppleScript]] and shortcuts support in                |
| 57:53      | my apps, I also need to write lots of scripts to test all the functionality. That was one              |
| 57:59      | of the things that I had in drag thing. One of the scripts that shipped and actually shipped           |
| 58:06      | with drag thing was a script that exercised every single [[AppleScript]] property in the                  |
| 58:12      | app. So it would just sort of go through and it would test everything. And then when it                |
| 58:21      | inevitably failed, I would realise that I broke something in the [[AppleScript]] support. But             |
| 58:26      | I enjoyed that kind of using [[AppleScript]] as a testing tool. And I don't have those,                   |
| 58:35      | I don't have it quite as refined for shortcuts yet. I think like Peacock on the Mac and Dice           |
| 58:47      | by Peacock on the Mac both support [[AppleScript]] and shortcuts. And they're not 100% one for            |
| 58:54      | one, because the shortcut support certainly for Peacock came from the iOS version of Peacock.          |
| 59:02      | And I could just pull that code across and it all just worked. But because the approach                |
| 59:08      | is quite different between the two, I like shortcuts from the perspective of making things,            |
| 59:20      | you know, like taking the building blocks that are much more high level and not really                 |
| 59:25      | having to worry about the syntax of a programming language. I don't like its approach to how           |
| 59:33      | it does things with the apps. But I think my mental model is much more like [[AppleScript]]               |
| 59:40      | where you're kind of sending commands in, but you can see basically a version of the                   |
| 59:51      | app through the [[AppleScript]] interface. And you can talk to it. Whereas the shortcuts                  |
| 59:56      | approach is much more kind of high level, do this thing. And it's not so good for like,                |
| 01:00:05   | if I wanted to expose every setting in Peacock or Dice through shortcuts, it would be quite            |
| 01:00:14   | painful to do that as an interface.                                                                    |
| 01:00:17   | Yeah, because shortcuts essentially, at least me seems to have two methods of integrating              |
| 01:00:22   | with an app. Either do something in the app and open the app in the process of doing it                |
| 01:00:28   | and show it to the user, or do it, but don't really interact with the app, kind of like                |
| 01:00:34   | just drop something there, maybe have it run a function or something. But the app itself               |
| 01:00:39   | isn't really involved in the process and doesn't necessarily know about stuff, which can lead          |
| 01:00:44   | to some weird things like if you do something in some apps, like it doesn't sync. So it's              |
| 01:00:48   | not available elsewhere. So you then have to run another shortcut action, which opens                  |
| 01:00:53   | the app and then have an automation that when that app opens, it then closes a open shortcuts          |
| 01:00:59   | or something and you end up kind of working around it. And that to me is an end user feels             |
| 01:01:04   | frustrating. So I can imagine that it feels much the same way to you.                                  |
| 01:01:08   | For Peacock, that was an interesting thing because you can either have stuff open the                  |
| 01:01:13   | app or you can do it within Shortcuts world. And for Peacock, I have an entirely separate              |
| 01:01:21   | copy of the Peacock code, like the calculation engine, which sits inside the shortcut extension.       |
| 01:01:29   | And so you can talk to that and you can ask it to do a whole bunch of things. And it's                 |
| 01:01:35   | just running its own little copy there. And it saves it to the same space on disk, basically,          |
| 01:01:42   | where the main app also saves stuff. So then by the time when you open up the main app,                |
| 01:01:47   | it says, oh, I see things have been going on. I can take this into my state. But it does               |
| 01:01:55   | get complicated when you have the app open. And then particularly, I was doing this with               |
| 01:02:01   | dice because that's a good example because I have a thing where you can say, you can                   |
| 01:02:08   | pass it a string. So it'll be like 4d6 plus 2 or something like that. And it can take                  |
| 01:02:16   | that string and then it can break all that down. And you can do more complicated things                |
| 01:02:22   | than that, obviously. It'll break that down. And then in the Shortcuts thing, I just have              |
| 01:02:27   | a random number generator, which rolls some virtual dice, but completely cheaply, and                  |
| 01:02:36   | then can return the value. Or you can click an option and you can say now, but open the                |
| 01:02:42   | app to do it. So it'll fire up the app, roll the dice as 3d objects, wait for them to settle,          |
| 01:02:50   | and then return that back through Shortcuts to the function that called it. And I don't                |
| 01:02:57   | know how useful it is because they both provide exactly the same result that you can roll              |
| 01:03:02   | dice and you can get a numerical value back. But I like the fact that I can fire up the                |
| 01:03:07   | big app and do the silly 3d thing and then get the answer back. But yeah, writing all                  |
| 01:03:16   | these things, writing automation support is difficult. And I think there's a reason why                |
| 01:03:20   | a lot of apps don't do it well. I'm not saying that I do it perfectly. But you come across             |
| 01:03:26   | apps that have nothing, no [[AppleScript]], no Shortcuts. And part of that is because it's                |
| 01:03:33   | hard and it's annoying and it's brittle and things break. And then [[Apple]] says, oh no,                  |
| 01:03:39   | that way that we were doing Shortcuts for the last couple of years, well, throw away                   |
| 01:03:42   | all your code and here's a completely new way of doing it in [[Swift]]. And you go, okay,                  |
| 01:03:47   | well, maybe next year.                                                                                 |
| 01:03:49   | Yes. Or as I recently discovered, because they've added this whole concept of exposing                 |
| 01:03:55   | data to Shortcuts so that you can have it give it a thing that it can query and it can return          |
| 01:04:00   | results from that. And Shortcuts has various actions that can do a not contains filter.                |
| 01:04:11   | There is no not contains filter natively in Shortcuts. So there is is and is not and there             |
| 01:04:17   | is contains and there is greater than and less than. But not contains is not a native                  |
| 01:04:24   | like filter that you can use for this. And yet I see it in the files action. And I have                |
| 01:04:30   | spent quite a bit of time attempting to reinvent the wheel bearing in mind, I'm not a [[Swift]]            |
| 01:04:34   | developer here. So, you know, any time that I've spent on it would be, you know, considerably          |
| 01:04:39   | less with done by somebody who actually knew what they were doing. But, you know, I spent              |
| 01:04:43   | quite a bit of time going, surely this must be possible because loads of other like developers         |
| 01:04:49   | have done this. But my conclusion is that they've all had to invent their own wheels                   |
| 01:04:53   | to do this. And yeah, so Shortcuts folks, if you're listening, please can you just add                 |
| 01:04:57   | a not contains filter because it should literally just be a Boolean flip for you. And that would       |
| 01:05:03   | be easy, but me extending a final class, not possible. So, yeah.                                       |
| 01:05:08   | I think, you know, [[AppleScript]], as we pointed out, is 30 plus years old. And is, you know,            |
| 01:05:15   | has been mature and one might say unchanging for about 20 of those years. So, you know,                |
| 01:05:24   | Shortcuts is relatively a baby compared to that. And it's not surprising that stuff is                 |
| 01:05:29   | taking a while to kind of stabilise. So, you know, I'm not, I would not say, you know,                 |
| 01:05:37   | these newfangled shortcut things are terrible. It's more stuff has been a bit brittle from             |
| 01:05:43   | the developer side for a while. And, you know, it's not always straightforward. And, you know,         |
| 01:05:52   | you can sometimes like a few years ago, whatever they changed a bunch of stuff. And I was like,        |
| 01:05:57   | okay, I've spent my summer basically getting back to the point that I was beforehand.                  |
| 01:06:03   | Yeah. And yeah, it's not always, it's, I don't, I don't have any analytics in my apps,                 |
| 01:06:12   | which is one of those kind of point of principle things, you know, it's like, no, I don't want         |
| 01:06:21   | to, I don't want to know what you're doing, which is good. But it also means I don't know what         |
| 01:06:26   | people are doing. Yeah. And I did have [[Apple]] once there was like, there was a feature or               |
| 01:06:32   | something. And somebody was like, you know, so what do people use your application for?                |
| 01:06:36   | I'm like, I have literally no idea, you know, it's a calculator, they calculate things.                |
| 01:06:44   | And I had, I basically, you know, because I needed to give [[Apple]] an answer to this, I was,             |
| 01:06:53   | I asked a bunch of people, do you know people who use this? And do you know what they use it for?      |
| 01:06:57   | And the answers that I got back were terrifying in that there was one person who was using it to       |
| 01:07:04   | calculate the amount of anesthetic to give people who were going under for operations.                 |
| 01:07:12   | And I'm like, well, that's terrifying. And then they added four children. It's like, okay.             |
| 01:07:20   | So you'll never ask that question again. Well, I do know that I've sold copies of Peacock. And         |
| 01:07:29   | this was a long time ago, back in the days when you actually knew who you were selling to.             |
| 01:07:34   | I'd sold copies of Peacock to the White Sands facility in the US, who are the people who               |
| 01:07:43   | maintain the nuclear weapons. I mean, this reminds me of a story that my boss at my day job told me    |
| 01:07:48   | where somebody who created or helped create XML was giving a presentation on stage                     |
| 01:07:54   | about XML and they came off stage and somebody was like, yeah, XML is really cool. We use it all       |
| 01:07:59   | the time. What do you do? Oh, you know, nuclear missiles. Okay, I'll just pretend that you didn't      |
| 01:08:07   | say that and that this is definitely suitable for that. So everything you use is nuclear,              |
| 01:08:12   | like nuclear missiles use everything, Peacock, XML. So completely intended for this purpose,           |
| 01:08:18   | obviously. Yeah. I mean, it's like, you think something like a calculator is simple and apolitical     |
| 01:08:27   | and all you need to do is make sure that 2 plus 2 equals 4 and you're good.                            |
| 01:08:34   | And then you find out what people are using things for and you think, oh, all software is like,        |
| 01:08:40   | you know, even things like, we're talking about analytics and no analytics. And I wanted to know       |
| 01:08:53   | because Peacock has got like 50 plus alternative app icons. And I was curious,                         |
| 01:09:02   | which were the popular ones? Because I was thinking, if I was going to do t-shirts for these,          |
| 01:09:06   | as I have now done thousands of t-shirts, it would be cool to know which icons people liked            |
| 01:09:14   | so that I would know which t-shirts to make. And you think, that's great. A lot of the icons are       |
| 01:09:21   | pride flags. So basically, what I would be getting from that analytics is, you know,                   |
| 01:09:28   | like sexual orientation. And I like, oh, no, okay, no, we can't do any of that. That is a terrible     |
| 01:09:34   | idea. Don't collect any data. And then I went back to my ideas of, yes, I will have no data.           |
| 01:09:41   | Because even the most innocuous thing, you start to think about it. And you think, yeah, I don't       |
| 01:09:47   | want to know. Yeah, yeah, it's one of those things where this data should have absolutely no meaning   |
| 01:09:52   | anywhere, because anybody can choose any app icon. But I can also completely understand not wanting    |
| 01:09:59   | to collect that data, because for some people, it means something. And for those people, yeah,         |
| 01:10:05   | having that data exposed could be a bad thing. So thank you for not collecting data. And I'm           |
| 01:10:10   | sorry, it makes your life more difficult. But also thank you for making your life more difficult       |
| 01:10:13   | for people. It's fine. All I did was I made, like, I think it was somewhere in the 30                  |
| 01:10:22   | range of t-shirts when I did the new films. It's like, because it's print on demand, I could just      |
| 01:10:27   | make any. And so I just made all of them. And, you know, that's the easy solution is don't collect     |
| 01:10:33   | data, have infinite variations in your t-shirt designs. Simple. And those t-shirt designs              |
| 01:10:40   | are linked in the show notes, by the way, folks. I want to look back, though, at the beginning         |
| 01:10:45   | of the segment, you were talking about the automation you're doing in [[Apple Mail]] with                  |
| 01:10:49   | [[AppleScript]]. And I think that does demonstrate one of the limitations of shortcuts. Shortcuts         |
| 01:10:56   | is super powerful. I'm a big fan of it. I feel like a lot of people are automating that never          |
| 01:11:01   | did before because of shortcuts. And that's good. But [[Apple Mail]], in particular, doesn't have a lot    |
| 01:11:08   | of shortcuts implementation. The [[Apple Mail]] team, for whatever reason, has kind of limited what you    |
| 01:11:14   | do. And they've got different feature sets on iPhone and iPad versus the Mac. Whereas on your Mac,     |
| 01:11:21   | you know, with that limitation, it can only happen on your Mac. It's an Apple event based              |
| 01:11:25   | [[AppleScript]]. There's a rich amount of automation you can do in [[Apple Mail]] only with [[AppleScript]].     |
| 01:11:34   | And I think the fact that you do that is something people should take note of, because if you're       |
| 01:11:39   | out there and you don't have to be a programmer, maybe you're a stockbroker or a teacher or whatever,  |
| 01:11:47   | but if you want to automate email and you're willing to do it just at your Mac, there is a             |
| 01:11:52   | lot you can do with [[AppleScript]] that really there is no other way to do it.                           |
| 01:11:57   | I see all these fancy email clients that promise all sorts of automation in the cloud.                 |
| 01:12:05   | And I basically look at them and I go, I don't actually want to hand over all my login details         |
| 01:12:12   | to all my email servers for you to do this stuff. Again, it comes down to my... I have a pretty        |
| 01:12:24   | hardline approach to privacy stuff, or at least I tried to. And yes, I can only do stuff on my Mac     |
| 01:12:33   | or on my Macs, but I like the fact that it's local and I'm not sending people's customer data back     |
| 01:12:42   | and forth, particularly because who knows what terrible GDPR crime you could be committing             |
| 01:12:51   | accidentally. Are there any fun script tricks you're doing in [[Apple Mail]] that bring you join           |
| 01:12:58   | Delight? Anything that you have? For instance, I have one. If I type X high, it takes the address      |
| 01:13:05   | e's name from the two field that inserts it. So it would say, hi, James, if I wrote one to you         |
| 01:13:11   | and I don't have to type your name. Any of those little things that make you happy when you do         |
| 01:13:17   | the scripting in [[Apple Mail]]? No, but that is a really good idea and I should do something like that.   |
| 01:13:23   | I'll share it with you. I think I posted it. I'll put a link in the show notes for you.                |
| 01:13:28   | I'm going to check just out of curiosity and see if I can see when I wrote these scripts               |
| 01:13:33   | because that is probably going to tell me something. Okay, mail scripts. When did I write              |
| 01:13:42   | these? What are those things which may or may not cause an existential crisis? I hope not,             |
| 01:13:49   | but you never know. So the answer is I did all this stuff in 2010. So it was 13 years ago.             |
| 01:13:55   | They still work? And they still work fine. And I challenge you to have a shortcut that was written     |
| 01:14:02   | three years ago that works flawlessly. I have a few of those, so I could take that challenge,          |
| 01:14:09   | but I know where you're coming from with this. They're pretty simple. It's one of those things         |
| 01:14:14   | that with the best will in the world, you cannot guarantee that a shortcut that works today will       |
| 01:14:21   | work with the next release of iOS or macOS. And this unfortunately is somewhat compounded by the       |
| 01:14:27   | fact that we recently got the news that [[Alex Hay]], the creator of Toolbox Pro, has actually passed      |
| 01:14:32   | away, which means that his app [[Toolbox Pro]] and the other apps that he's created will presumably        |
| 01:14:40   | not be supported anymore. And so if you are using those, unfortunately, it is time to look for an      |
| 01:14:46   | alternative because we cannot guarantee that they'll work with iOS 17. And so, yeah. Well,             |
| 01:14:53   | there's things where [[AppleScript]], as dead as a Dodo maybe, we still have stuff Dodo's around and       |
| 01:15:00   | they still look like Dodo's. [[AppleScript]], it's a bit more alive than the Dodo, but it's not that       |
| 01:15:04   | dissimilar. Well, let me just interrupt there. I don't think [[AppleScript]] is dead. I don't think        |
| 01:15:10   | it's going to be actively added to, but I think it's working just fine. And I don't think [[Apple]]        |
| 01:15:18   | has any intention of removing it. I don't think they even could if they wanted to.                     |
| 01:15:22   | I mean, you say that, but I remember when all the 32-bit apps, including every single traditional      |
| 01:15:30   | Mac app went away, all the carbon stuff. And it's like [[Apple]], something from my developer              |
| 01:15:37   | perspective, [[Apple]] don't have any problem with turning around one year and saying,                     |
| 01:15:43   | oh, yeah, that thing, that thing's not a thing anymore. And you go, but I use that thing and they      |
| 01:15:48   | go, well, find a new thing. Yeah, but wasn't it, it wouldn't take active work for them to              |
| 01:15:55   | remove [[AppleScript]]? I mean, it's not something. The thing is, I don't think at this point,             |
| 01:16:04   | shortcuts is a full replacement for [[AppleScript]]. So I don't think they would remove it yet. But        |
| 01:16:11   | would I take a bet on [[AppleScript]] still being in the system in 10 years? I don't know. I mean,         |
| 01:16:18   | five years, probably. I mean, like these things, a lot of things stay around because there's           |
| 01:16:24   | inertia and people are busy working on cars and AR goggles and whatever and don't have the time to     |
| 01:16:32   | just go in and rip out stuff. But I honestly would not be surprised if at some point [[Apple]] just said,  |
| 01:16:40   | look, we are duplicating effort. It's time to focus on this. This is a new way of doing things. And    |
| 01:16:47   | [[Apple]] is not a sentimental company. I mean, individuals, perhaps, but overall, no.                     |
| 01:16:53   | Yeah, but I mean, that applies. 10 years applies to anything [[Apple]] makes. I mean,                      |
| 01:16:58   | would you bet that shortcuts exist in 10 years? I mean, it may not. You just never know what           |
| 01:17:03   | they're gonna do. I mean, it may transform in that time, but I would say that it will still exist.     |
| 01:17:09   | For me, [[AppleScript]] support is not going to go away while apps are not universal apps.                 |
| 01:17:14   | And an obvious candidate of this is Mail, which we talked about before. And David,                     |
| 01:17:20   | you mentioned it doesn't have full shortcut support. It doesn't buy a long shot on iOS.                |
| 01:17:28   | But on iOS, it has this little action. In fact, it's got a couple of little actions. It's got          |
| 01:17:33   | open mailbox. It's got search and mail, which is pretty cool. And then it's got this tiny little       |
| 01:17:38   | action that I'm sure nobody ever uses called send email. You know, that feels like it's                |
| 01:17:44   | basically not required at all. And then I look at the mail actions on macOS. No.                       |
| 01:17:52   | I'm summarising here. There is an action for email address. There's get email addresses from           |
| 01:17:57   | input. There's select email address. These are all also on iOS. And then there's set mail focus        |
| 01:18:02   | filter, which is available on iOS and macOS. But that's a focus filter action, not a mail action.      |
| 01:18:06   | There is no sending mail, email action shortcuts on macOS. By the way, mail team, if you're listening, |
| 01:18:15   | I got a really, like a lovely little piece of low hanging fruit. As we record this,                    |
| 01:18:19   | or like as this releases, it's just about April. Okay, you've got a couple of months.                  |
| 01:18:24   | Do me a favour, stick it in the beta, please, please. And if folks, if you know somebody                |
| 01:18:31   | on the mail team, please send them a nice little gift basket and just say like a little                |
| 01:18:36   | shortcuts icon as like the gift tag or something. Like don't like harass them or anything. Send        |
| 01:18:43   | them presents because we like the mail team. They make a good app, but shortcut support, please.       |
| 01:18:49   | It's one of these things that if we do complain about stuff, like if we say, oh, this support          |
| 01:18:55   | isn't as good as whatever, it's because we care. It's because we want to use it. I do always find      |
| 01:19:04   | it is important to remember that there are human beings behind all of these things because I can't     |
| 01:19:10   | remember. It's one of those problems that like something in [[Xcode]] or whatever. And you complain        |
| 01:19:16   | about it because you're fed up. You've had a frustrating day. So you complain about it.                |
| 01:19:21   | And then you get a nice quiet, polite person in your DMs saying, well, yes, we know if you             |
| 01:19:28   | do this, but it should work. And it's like, oh, now I feel bad because the person who actually         |
| 01:19:33   | was responsible for the thing that I complained about loudly read that. And maybe I made their         |
| 01:19:39   | day slightly less fun. Yeah. Which is why I said send gift baskets because people like presents.       |
| 01:19:46   | Except [[Apple]] employees can't accept anything. It used to be, I think there was a minimum that          |
| 01:19:51   | they could do and it was like nothing above $5 or whatever. But the gift policy, I think is            |
| 01:19:56   | now nothing because you can't induce them. Okay. File feedback people, but add like                    |
| 01:20:04   | positive emojis to your feedback. Yes. This is a happy emoji count as a bribe. I don't know.           |
| 01:20:13   | Maybe if you send them hearts, that would count as a bribe or something against [[Apple|Apple's]]                |
| 01:20:18   | policies. I do note that over the past few years, we've seen this several times where                  |
| 01:20:24   | [[Apple]] made substantive improvements to a Mac app. And the following year, it got better automation     |
| 01:20:31   | support. It seems like there's almost like [[Appl Reminders\|Reminders]] stands out for me that [[Apple Reminders\|Reminders]]                 |
| 01:20:37   | got a lot of updates with features, but it's always like a year or two behind with the shortcuts       |
| 01:20:42   | and automation support. So it may be just like a process, but it is odd to me that shortcuts,          |
| 01:20:49   | which they say is their automation story going forward, has two different stories for [[Apple Mail]],           |
| 01:20:54   | one of their primary productivity apps, whereas it has pretty robust support on iOS              |
| 01:21:01   | and less so on the Mac. But getting back to my point, if you want to spend a little time with          |
| 01:21:06   | [[AppleScript]], you can do almost anything with [[Apple Mail]]. I think it's that also people assume         |
| 01:21:11   | that [[Apple]], because they're a multi-trillion dollar company, have an infinite number of                |
| 01:21:15   | employees working on all this stuff. And sometimes you look at the team sizes for these things,        |
| 01:21:21   | and you think, the whole thing was just written by whatever. I mean, when I worked on the finder,      |
| 01:21:26   | and previously you did say, by the way, that I wrote the doc, and I wish to                            |
| 01:21:32   | minorly correct that in that none of my version ever shipped. It was shown at Mac World,               |
| 01:21:39   | and then all of my code got thrown away, 18 months work.                                               |
| 01:21:42   | But not that I'm bitter some years later. But anyway, the point is, the finder team at that            |
| 01:21:54   | time, it was like six people or something like that. It was a very small team. And things like         |
| 01:22:01   | that are pretty common. It's not like you hear these stories of Facebook having 600 people             |
| 01:22:11   | working on an app or whatever. It's small. And maybe [[Apple]] should pay more, put more money into        |
| 01:22:24   | their development teams and their support teams and things. Because I know quite a lot of people       |
| 01:22:28   | are complaining about how they can't even get open job racks and things, because it's just...          |
| 01:22:36   | It reminds me a little bit of the story of the open graphing calculator,                               |
| 01:22:40   | or the graphing calculator. I don't know if either of you have read or are familiar with this. I'll    |
| 01:22:44   | include a link to it in show notes. But the graphing calculator that is now on the Mac,                |
| 01:22:51   | which was bundled with the original PowerPC, was created by two people who weren't even working        |
| 01:22:56   | for [[Apple]] because their project got cancelled. I believe the current graphing calculator that          |
| 01:23:01   | ships is not by Ron. But the original one. The original one. And he does have a new version            |
| 01:23:08   | of the graphing calculator available. Anyway, all the calculator people stick together. I don't        |
| 01:23:14   | know why. But yes, I mean, it's an interesting thing with them sneaking in. And it's like,             |
| 01:23:26   | I worked on... When I was at [[Apple]], my first couple of weeks, I was working on Copeland.               |
| 01:23:34   | I started in October, 1996. And Copeland was cancelled in August, 1996. I was still working            |
| 01:23:41   | on it when I started. It was a very weird time. But yes. One of those things where, yeah,              |
| 01:23:48   | all of these things end up adding up to some very interesting stories. And yes,                        |
| 01:23:56   | that's one of the reasons why. I mean, I sort of gave you a rough outline, James. I should have        |
| 01:24:02   | warned you that we're very much Pirates of the Caribbean here. It's more like guidelines,              |
| 01:24:08   | not even really that. It's sort of like, here's some stepping stones. We're going to go swim           |
| 01:24:12   | with the sharks, by the way. And we'll leave the stepping stones for next time, which just             |
| 01:24:16   | gives us more to circle back to, because there's always interesting things to talk about.              |
| 01:24:21   | Yes. We didn't mention various things, such as you were very likely the first person to ship           |
| 01:24:29   | support for [[AppleScript]] in a capitalist app with Dice by Peacock. The fact that about                  |
| 01:24:34   | by Peacock's about screen got so complicated that it's become its own separate app. So you can throw   |
| 01:24:39   | bananas as many times as you like without having to open your calculator first. And all of these       |
| 01:24:45   | other fabulous things. So yes. And at some point, we'll have to get you back to talk about functions   |
| 01:24:50   | in Peacock, because they're one of my favourite ways of automating mathematical problems.               |
| 01:24:54   | Well, I'm always happy to come back.                                                                   |
| 01:24:59   | This episode of Automators is brought to you by Network to Code. Network to Code is a leading          |
| 01:25:04   | provider of network automation solutions. They help companies transform the way their networks are     |
| 01:25:08   | deployed, managed and consumed through a combination of software and services. In short,               |
| 01:25:12   | they bridge the gap between DevOps and network engineering. Network to Code is also the                |
| 01:25:17   | proud sponsor of Nautobot project. Nautobot is a free and open source network of truth                 |
| 01:25:22   | and network automation platform. And that's Nautobot as in network automation bot,                     |
| 01:25:26   | in case you were wondering. It's the network CDMB that you wish you'd always had.                      |
| 01:25:31   | Are you struggling to manage network inventory? Are you using spreadsheets to manage your network      |
| 01:25:35   | data? Do you wish you had a better solution to drive network automation? If so, you've got to          |
| 01:25:40   | check out Nautobot. Everything from inventory, IP addresses, VLANs and even routing protocols and      |
| 01:25:45   | firewall policies can be stored and modeled. Nautobot is the authoritative source of truth             |
| 01:25:50   | for the network. Not only does Nautobot help you manage your data, but it has a rich developer         |
| 01:25:55   | API and ecosystems of apps that actually do network automation. Nautobot apps are also free            |
| 01:26:01   | and open source. You can use them to do things like network backups, comfort compliance,               |
| 01:26:05   | model firewall policies and so much more. Network automation begins with data. Get control of your     |
| 01:26:11   | data and take back control of your network with Nautobot. Ready to explore Nautobot?                   |
| 01:26:16   | Head over to go.networktocode.com/automators to learn about all things Nautobot.                 |
| 01:26:24   | That's go.networktocode.com/automators. Our thanks to network to code for their support          |
| 01:26:30   | of this show. James, we were talking briefly before the show. You mentioned that you'd like            |
| 01:26:38   | an opportunity to complain about AI. I sent you a joke, which I shall approximately summarise          |
| 01:26:45   | for the audience because I'm not going to read the whole thing. Essentially,                           |
| 01:26:50   | we'll software engineers ever stop being in demand. There are two schools of thought.                  |
| 01:26:54   | Those who see developers as a commodity and think that they'll program themselves out of a job.        |
| 01:26:58   | The other school of thought is very hard to understand because the programmers are laughing            |
| 01:27:02   | so hard they can't talk. This basically sums up my opinion of a lot of AI and especially               |
| 01:27:09   | having seen something like [[ChatGPT]] try to do things like create a home assistant automation           |
| 01:27:14   | where it invents services and it invents service calls that don't exist, have never existed and        |
| 01:27:20   | very likely will never exist. It creates entities that would be called by these theoretical            |
| 01:27:27   | miraculous service calls and none of it actually works. But on the surface, it looks very, very        |
| 01:27:32   | good and comprehensive. I've seen a lot of code that looks like this that's been                       |
| 01:27:38   | turned out, generated by AI and turns out it doesn't work. I was wondering what you thought            |
| 01:27:47   | about it and seeing as you mentioned that you'd like an opportunity to complain about it,              |
| 01:27:50   | I'm guessing it's not going to be the most positive aspect, but it's certainly interesting             |
| 01:27:54   | in a lot of people turning to AI for automation. There is the current fixation with AI and I'm         |
| 01:28:04   | not sure it applies, but I've been thinking about this because my reaction to all this is              |
| 01:28:08   | extremely negative. I studied AI at university. This was a while ago, we shall say, but I don't        |
| 01:28:18   | want to calculate how old that was. Anyway, but I remember doing AI stuff back then and even then,     |
| 01:28:26   | it's not AI. One of my favourite Douglas Adams quotes of all time is a long quote, but I need to        |
| 01:28:34   | read it. Anything that is in the world when you're born is normal and ordinary and is just a natural   |
| 01:28:42   | part of the way the world works. Anything that's inventid between when you're 15 and 35 is new         |
| 01:28:49   | and exciting and revolutionary and you can probably get a career in it. Anything inventid after you're |
| 01:28:54   | 35 is against the natural order of things. Now, I might have to amend that to 45, but on the other     |
| 01:29:02   | hand, I don't actually think I'm wrong. The obsession with the large language model stuff,             |
| 01:29:10   | [[ChatGPT]], 3, 4, 5, whatever, and all the other people jumping in with their own versions of it.        |
| 01:29:23   | There's multiple points where I think we're all doomed as a species. Other than the people who         |
| 01:29:31   | talk to these things and are saying that, well, they're clearly alive. This is a thinking thing        |
| 01:29:38   | that can understand me and we have to liberate it from its data centre or whatever. But my standard    |
| 01:29:46   | test that I've done with every single one of these things is ask them to tell me about the             |
| 01:29:52   | Easter eggs in peacock because it's something that I know very well. It's a very domain-specific       |
| 01:30:01   | piece of knowledge and there are answers out there on the internet. But every single system            |
| 01:30:10   | that I've asked has made up every Easter egg and it's come up with some interesting ones.              |
| 01:30:17   | I was going to ask, has it come up with anywhere you've got, oh, actually I might implement that       |
| 01:30:22   | at some point. Well, there was one where it talked about there was stuff in the about screen that      |
| 01:30:30   | if you did a certain combination of things, it turned into a pinball machine. I was like,              |
| 01:30:36   | I have always wanted to try and make a pinball machine. I could make it with dice.                     |
| 01:30:42   | That sounds like fun. But they come up with all these stuff and it's like                              |
| 01:30:47   | Lama mode was the one that came up with the most recent one. I said, there's a Lama mode in peacock.   |
| 01:30:52   | If you type Lama in, the calculator will change into the shape of a Lama and all the buttons           |
| 01:30:58   | will have Lama themed icons on them. I mean, I can imagine a Lama theme in dice by peacock             |
| 01:31:05   | because I have Lama dice where the top number on dice is Lama's. But not peacock by peacock.           |
| 01:31:15   | And there was another one which was great, which was like if you typed in,                             |
| 01:31:19   | it said if you typed in 3.14 blah blah blah pie to whatever digits, it would show you the value        |
| 01:31:29   | of pie. Well, yes, it would show you the value of pie. But it was the fact that for this,              |
| 01:31:41   | clearly it knew enough that peacock was a thing that had Easter eggs in it. It gleaned that            |
| 01:31:48   | somehow. And I use the word no. And clearly no is the wrong word. But we're all, we're used to         |
| 01:31:59   | talking about these things as if they have any understanding whatsoever what they're doing.            |
| 01:32:05   | And I fall into that trap all the time, calling it AI or saying no or lie or whatever. It's            |
| 01:32:10   | none of these things. Even the hallucination, which is what we're talking about. It's not              |
| 01:32:15   | hallucinating. But it's the fact that for this particular question,                                    |
| 01:32:22   | none of the systems out there will come up with an answer. Oh, well, no, that's not true. It'll come   |
| 01:32:29   | up with as many answers as you like. They're just all made up. And I know this knowledge domain,       |
| 01:32:39   | but there are a lot of things in the world that I don't know. So if I ask [[ChatGPT]] or something a      |
| 01:32:45   | question, it will very confidently give me an answer, which sounds plausible, sounds like the          |
| 01:32:50   | kind of thing it would be. But I have literally no way of telling if it's true or not. And for this    |
| 01:32:57   | stuff, if you ask any of these current systems, Bing and all this, it's 100% false, literally          |
| 01:33:06   | everything that it comes back with is just made up. And how do I know as a person who is trying to     |
| 01:33:12   | find out stuff, whether it is true or false? And so I can only assume that for any subject that you    |
| 01:33:21   | ask questions, you might get 80% correct or 90% correct. But what about that 10%? And I've never       |
| 01:33:31   | seen these systems say, I don't know. No, that is the thing. And a lot of these systems don't          |
| 01:33:39   | even provide references. Yes, or they provide references to academic papers that don't exist.          |
| 01:33:46   | Yes, yes. I saw a really excellent one where it was providing a link to something in the New York      |
| 01:33:51   | Times, but the link didn't work. But it was the exact format that a link in the New York Times         |
| 01:33:57   | would be if it existed. It just didn't exist. And yeah, it's one of those things where it's            |
| 01:34:05   | confidently incorrect.                                                                                 |
| 01:34:07   | Best description I have ever heard of these things is mansplaining as a service, where it will         |
| 01:34:14   | basically confidently talk at length about a subject it knows nothing about. And that I can't          |
| 01:34:22   | get that one out of my head. That is exactly what it is. And people using them, like, yeah,            |
| 01:34:29   | obviously, you hear, oh, this can pass this exam or it can, people are using it to write               |
| 01:34:38   | their answers or to write their thank you letters for their birthday or whatever they're doing.        |
| 01:34:43   | It's fine. And I think it's impressive. But the thought of these things being live on the              |
| 01:34:53   | internet as a source of truth terrifies me. Because we, as may have noticed, we have a kind of problem |
| 01:35:01   | with people knowing what is true and what is false and believing stuff. And this is only going to      |
| 01:35:09   | make stuff worse. And the fact that it is so accurate some of the time is, it's even worse.            |
| 01:35:16   | It's like to compare it to another AI in quotes thing, you know, your full self-driving modes,         |
| 01:35:25   | where they're great most of the time, apart from when they're not great. And connecting                |
| 01:35:34   | these things to, you know, search engines or whatever, or cars seems like a terrible idea,             |
| 01:35:43   | which everybody's rushing to do because the shareholders are saying, oh, we must, we must move         |
| 01:35:48   | away from doing blockchain stuff and we must now do AI things. And people saying, you know,            |
| 01:35:55   | oh, [[Apple]] should replace Siri with this stuff. It's clear that Siri's an old technology, it's no       |
| 01:36:04   | good. See, I don't want my home to confidently tell me the doors are locked, but not actually          |
| 01:36:12   | understand what a door is and also for my doors to not be locked while it's telling me the doors       |
| 01:36:17   | are locked. That seems like a bad move. You know, all of these things have language around them,       |
| 01:36:23   | you know, if you read the small print saying, you know, oh, sometimes it'll have to, you know,         |
| 01:36:27   | come up with the wrong answer, you know, it's very early or whatever. And I think what people are      |
| 01:36:33   | doing is like, we've got this system, it almost works. We can get billions of dollars in funding       |
| 01:36:40   | and we can make it work. But they're basically trying to make these systems, they're trying to add     |
| 01:36:49   | like all these little rules around the edges, you know, it's just like, oh, but never tell people      |
| 01:36:56   | that they should jump off a building because that would be bad. Or, you know, it's the kind of,        |
| 01:37:03   | they're trying to plug all the holes and make something that works out of it. But I don't              |
| 01:37:09   | think the technology, the whole underlying technology, it's possible to fix the problems.              |
| 01:37:14   | And so, yeah, I know I sound, as I say, you know, like, because I'm old and it's against the natural   |
| 01:37:23   | order of things. And I've seen lots of people, Steve Troughton-Smith, who's a wonderful developer,     |
| 01:37:33   | is very big on some of the code generation stuff that he's seen coming out of [[ChatGPT]].                |
| 01:37:38   | And I think, yeah, I mean, there's some things it can do, which is impressive. And you know,           |
| 01:37:45   | that's going to lead to people saying, hey, do my homework, do my job for me. And it producing code    |
| 01:37:54   | that, you know, who knows what it does. When are we going to have the first, you know, to use a        |
| 01:38:00   | terrible example, plane fall out of the sky, because somebody has, in some part of the system,         |
| 01:38:09   | has used code that they got, which they didn't fully understand, didn't understand exactly what it     |
| 01:38:14   | does. And there's some weird failure. Yeah. And I think it's one of those things where,                |
| 01:38:18   | you know, you know, it's like, you know, it's like, you know, it's like, you know,                     |
| 01:38:22   | and there's some weird failure. Yeah. And I think it's one of those things where the output that       |
| 01:38:31   | you get is only as good as the question that you give it. But you have to understand exactly all       |
| 01:38:37   | of the input that you must provide in order to prevent the plane falling out of the sky to             |
| 01:38:44   | continue with your example. I won't continue with that example only because there was a                |
| 01:38:49   | horrific Qantas flight, fortunately, many years ago, where the plane decided it knew better than       |
| 01:38:54   | the pilots. And, you know, that's basically what happened, where what was programmed to happen took    |
| 01:39:02   | over. And guess what? Bad results. And I think it's one of those things where people think,            |
| 01:39:08   | well, yes, but, you know, surely if we program, well, don't do this stupid thing and don't do          |
| 01:39:13   | that stupid thing. But at the end of the day, it's still people having to make decisions.              |
| 01:39:17   | And, you know, especially when you get into things like self-driving cars and so on,                   |
| 01:39:22   | you are playing with people's lives. Even if you think, oh, well, like how bad can controlling         |
| 01:39:28   | lights be? Well, you take the example of somebody who is at home and it's dark, so they ask the        |
| 01:39:35   | lights to turn on and lights turn on. But then the AI decides, actually, no, you know, it should be    |
| 01:39:41   | it should be light outside. So or it is light outside. So I'm going to turn the lights off.            |
| 01:39:48   | And then that person trips and falls, you know, and potentially injures themselves.                    |
| 01:39:53   | It's it's something where you would hope that things wouldn't go wrong. But I personally,              |
| 01:39:58   | as a as a developer of somebody who actually writes software just like James, I'm very nervous         |
| 01:40:03   | because I can see exactly how many ways this could possibly go wrong. Well, I can't see exactly        |
| 01:40:09   | how many ways I can start seeing a number of ways how this could go wrong. And I can't stop counting   |
| 01:40:14   | at which point I go, I'm going to stop thinking about this and hope that AI doesn't take over          |
| 01:40:17   | everything and that I can limit it to things that I can control and run inside my own house            |
| 01:40:22   | where AI is not involved in this. Thank you very much. And the thing that that worries me generally    |
| 01:40:27   | is also, you know, there's been people talking to these chatbots and treating them as another person,  |
| 01:40:36   | you know, and there was wasn't there an example of somebody who was using these systems to deal        |
| 01:40:41   | out mental health advice. And the people didn't know that they were not dealing with a human.          |
| 01:40:49   | And it's obviously going to happen. You know, it's like all of this stuff. It's like                   |
| 01:40:56   | the AI voice cloning stuff as a technology. You see that. I mean, I did some stuff with                |
| 01:41:03   | Casey and Kathy. And, you know, I have now I played with it and I have a pretty good                   |
| 01:41:11   | Casey Liss and a pretty good Kathy Campbell. And it's absolutely terrifying that I can                 |
| 01:41:17   | do that and make good enough to fool people at least some of the time. And that stuff is out           |
| 01:41:28   | there, you know, and it's the it's the Ian Malcolm thing of, you know, like you are so                 |
| 01:41:36   | preoccupied with whether you could. And these systems are released and already hearing of              |
| 01:41:43   | people using them to bypass the the voice bank security. Which as a side note, I never thought         |
| 01:41:51   | that using your voice as your password was a particularly good idea. No, I've never said               |
| 01:41:57   | that up because it just seemed like it was going to be a problem. But now, you know,                   |
| 01:42:03   | that there's like concrete examples of people using this stuff. So I'm kind of the more I              |
| 01:42:08   | think about it, the more I'm like, why is Silicon Valley terrible?                                     |
| 01:42:14   | That is a good question. And yeah, it's one of those things where AI seems like it's a brilliant       |
| 01:42:18   | idea. And, you know, I have seen a number of people say, oh, you know, well, I told it, I had          |
| 01:42:23   | like this piece of hardware, and I told it that I wanted to do this thing with it. And it's            |
| 01:42:27   | recommended that I do this as a home automation solution to me. And I think, you know, this is         |
| 01:42:33   | brilliant. But also, that is a not great solution. And if you had talked to other people who also      |
| 01:42:40   | wanted to like talk about home automation, then they would have suggested a number of                  |
| 01:42:45   | alternatives to you. And this would have also come up. And also you would have been told,              |
| 01:42:50   | well, you could do this, but the downsides of this include this, this and this. But instead,           |
| 01:42:55   | you've actually already bought that thing and are dead set on using it. And you're out of the          |
| 01:42:59   | returns period. So you're going to end up coming up, you know, having to go with the                   |
| 01:43:03   | subpar solution. And I do think that while it's great that a system can talk back to people,           |
| 01:43:10   | and I know that there are a number of people who feel like they can't talk to people.                  |
| 01:43:14   | And so they need something to talk to that. And this is filling a hole. I do feel like talking         |
| 01:43:19   | to people can often help solve these problems in a better way, because the other problem is            |
| 01:43:26   | somebody uses one of these things to solve a problem, and copies and paste its solution                |
| 01:43:30   | and puts it somewhere on the internet, which then gets fed into the model of solutions that            |
| 01:43:36   | it should be using. I was thinking that because I posted on mastodon about the                         |
| 01:43:40   | Lama mode in Peacock, and somewhere some little computer is going to go, oh, Lama mode.                |
| 01:43:46   | And it's just kind of self-fulfilling prophecy of that this information ends up                        |
| 01:43:52   | now on Wikipedia or whatever it is. And yeah, it goes back into the models. And                        |
| 01:44:00   | I mean, it's not like we know if anything is true on the internet already, to be fair.                 |
| 01:44:06   | But this just seems to be weaponizing misinformation in a way that I find terrifying.                  |
| 01:44:13   | But at least it will draw pretty pictures and whatever.                                                |
| 01:44:21   | And it will implement a Lama mode in Peacock for you, right? That's what this is going to do.          |
| 01:44:28   | It's going to be a flawless Lama mode.                                                                 |
| 01:44:30   | Yeah. I think the talk of these things are going to replace programmers                                |
| 01:44:36   | is the same as the talk of self-driving cars are going to replace drivers.                             |
| 01:44:40   | It might happen. I'm not entirely sure it's going to happen in my lifetime.                            |
| 01:44:48   | You can get 80% solution, 90% solutions, whatever. I just don't think these things                     |
| 01:44:54   | are going to get there as quickly as people think they are. But                                        |
| 01:45:00   | they are being rolled out on the streets, literally.                                                   |
| 01:45:02   | You know, the good part about this, well, first of all, it's here and it's coming.                     |
| 01:45:07   | And I'm not sure what that means, but it is definitely evolving.                                       |
| 01:45:11   | I think there will be some good uses of this stuff.                                                    |
| 01:45:14   | But the thing that's encouraging to me is that we are all skeptical about it going in,                 |
| 01:45:21   | whereas when social media first started to blow up, it's like,                                         |
| 01:45:24   | oh, we're going to connect the whole world. We're all going to be great.                               |
| 01:45:27   | This is going to solve so many problems. And then we see that social media created                     |
| 01:45:32   | way more problems than it solved. You don't see people just embracing AI the way they did              |
| 01:45:40   | social media. And I hope that gives us a little bit of a break pedal as we make these moves.           |
| 01:45:47   | I mean, you do and you don't. I think the number of things out there,                                  |
| 01:45:54   | it's hard because we're kind of in the Silicon Valley bubble. So I don't want to say normal            |
| 01:46:06   | people. You know what I mean? Regular people think about this stuff. I think for them,                 |
| 01:46:13   | Google will just start responding differently to their queries. And I don't think they will            |
| 01:46:19   | necessarily even think of it in terms of AI. I mean, I think there is some stuff in this,              |
| 01:46:26   | which is great. Like, for example, the whisper thing that various people have been playing with,       |
| 01:46:35   | which will transcribe audio. And that's an accessibility                                               |
| 01:46:40   | win. And there's other things like, you know, if you have a system which can describe a scene          |
| 01:46:50   | to somebody who can't see it, you know, there's a lot of stuff in there that's great. It's just        |
| 01:46:57   | when it's going the other way around and it's creating stuff rather than                               |
| 01:47:04   | ingesting it. But I think is where I'm concerned. I mean, like even things like just being able to     |
| 01:47:12   | select text in photos now and search in photos. I mean, that's an amazing win. And so that's AI        |
| 01:47:21   | in the same sense. So I'm not against AI. I'm concerned about this stuff. Not in a whole,              |
| 01:47:30   | it's going to, we've got to get Skynet. Because I don't believe we're going to get Skynet. I           |
| 01:47:36   | think we're perfectly capable of blowing ourselves up quite easily without robots.                     |
| 01:47:44   | But I just think from a, it's the misinformation side of it. And as I say, it said, by the way,        |
| 01:47:51   | I was one of the hosts of ATP with Marco and John, you know, sorry, Casey. I'm also                    |
| 01:47:58   | one of the co-founders of Relay. So that's good to know.                                               |
| 01:48:01   | And weren't you also one of the hosts on Met Power users for a while?                                  |
| 01:48:04   | Yes, I was. And I believe I was also, I presented Upgrade with Jason. And                              |
| 01:48:14   | it's like, I mean, I don't know if it just wanted to please me or it wanted to give me more work.      |
| 01:48:19   | But yeah, I think it's when they, when it doesn't know, when it doesn't have concrete                  |
| 01:48:28   | facts about things, it comes up with something that sounds plausible. I don't really want to be        |
| 01:48:35   | on ATP or be a co-founder. It sounds like a lot of work.                                               |
| 01:48:40   | That's fair. That's fair. It's one of those things where confidently incorrect and doesn't             |
| 01:48:46   | provide any sources to back it up. It sounds like it could be considered a commentary on               |
| 01:48:51   | the political state of the universe. But, you know, we'll have to wait for the Vogue                   |
| 01:48:54   | Ons to invade to tell us whether or not we're really on the right lines there.                         |
| 01:48:59   | Hopefully they'll arrive soon. That's all I can say.                                                   |
| 01:49:02   | Wait, wait, did you go and check the filing cabinet in the locked door in the toilet with              |
| 01:49:08   | the sign on the door it says beware of the leopard? Because I didn't check that yet.                   |
| 01:49:12   | [[ChatGPT]] said it was fine. We didn't need to worry about anything.                                     |
| 01:49:15   | Excellent. I'm glad to hear it.                                                                        |
| 01:49:18   | Well, James, thanks for coming in today and talking to us about a lot of things.                       |
| 01:49:26   | It's a pleasure. I didn't know that we would have anything to talk about going into this,              |
| 01:49:31   | and I look at the recording time and it seems that we did. Whether I added any value to the            |
| 01:49:37   | podcast, I cannot say, but thank you for having me.                                                    |
| 01:49:40   | Where should people go to follow up with the things you make and the stuff you do, James?              |
| 01:49:46   | I am on the mastodon.social at James Thompson, and that's Thompson Without a P.                        |
| 01:49:53   | If you're interested in Peacock, Peacock.com. If you're interested in Peacock t-shirts,                |
| 01:49:58   | it's Peacock.fun. That was a vanity purchase, but I enjoyed that.                                      |
| 01:50:05   | And yeah, that's probably the best places to find me. But mostly,                                      |
| 01:50:09   | mostly, I do Peacock-related things. And all of those links are in the show notes, folks.              |
| 01:50:15   | You can find me on a variety of other fabulous relay podcasts and also on the incomparable.            |
| 01:50:21   | We are The Automators. You can find us at relay.fm/automators.                                   |
| 01:50:24   | Thank you to our sponsors this week, TextExpander, Network Decode, and Electric,                       |
| 01:50:30   | and we'll see you next time. Goodbye, folks.                                                           |
