---
status: "complete"
fc-date:
  year: 2020
  month: 07
  day: 17
fc-category: "podcast"
podcast: "Automators"
published: 2020-07-17
duration: 5776
formattedduration: "01:36:16"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Dr Drang"]
notetype: "episode"
showpage: "http://relay.fm/automators/54"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators054.mp3"
episode: 54
title: "54: Scripting Time with Dr Drang"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Dr. Drang returns to the show to talk about scripting - why it's beneficial, and above all, why everyone can do it!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Dr Drang]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 054 Discussion](https://talk.automators.fm/t/automators-54-scripting-time-with-dr-drang/7717)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Unlock your productivity with TextExpander.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

# Show Notes
- [Automators #21: Invoicing, Writing, and Regular Expressions with Dr. Drang - Relay FM](https://www.relay.fm/automators/21)
- [Fear of scripting - All this](https://leancrew.com/all-this/2020/06/fear-of-scripting/)
- [Automators Talk](https://talk.automators.fm/)
- [MPU Talk](https://talk.macpowerusers.com/)
- [Drafts Community](https://forums.getdrafts.com/)
- [Drafts | Where Text Starts](https://getdrafts.com/)
- [Python Documentation](https://docs.python.org/3/)
- [Keyboard Maestro 9.0.5: Work Faster with Macros for macOS](http://www.stairways.com/action/kmdiscount?REF9WZE)
- [Scriptable](https://scriptable.app/)
- [Pythonista for iOS](http://omz-software.com/pythonista/)
- [Next Monday | Drafts Action Directory](https://actions.getdrafts.com/a/1aX)
- [Learn JavaScript | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
- [LaTeX addresses on the Mac and iOS - All this](https://leancrew.com/all-this/2020/01/[[LaTeX]]-addresses-on-the-mac-and-ios/)
- [New Project Script](https://gist.github.com/drdrang/536801d9ea70d1137aa5efd0b86e844e) - Dr. Drang's script to create database entries, folders in iCloud, a folder in Mail, and a set of labels for a new project. · GitHub
- [Combining Python and AppleScript - All this](https://leancrew.com/all-this/2013/03/combining-python-and-applescript/)
- [GitHub - drdrang/plabels: Perl scripts for printing sheet-fed labels.](https://github.com/drdrang/plabels)
- [Data Jar](https://datajar.app/)
- [Bad AppleScript: Template Gun meets the Internet - Six Colours](https://sixcolours.com/post/2020/02/bad-applescript-template-gun-meets-the-internet/)
- [Quick Tip: Zip files as templates - Six Colours](https://sixcolours.com/post/2017/09/quick-tip-zip-files-as-templates/)
- [Automators #35: Automating Business with Don McAllister - Relay FM](https://www.relay.fm/automators/35)
- [Post Haste - Digital Rebellion](https://www.digitalrebellion.com/posthaste/)
- [xkcd: Automation](https://xkcd.com/1319/)
- [PushCut - Help & Support - Automation Server](https://www.pushcut.io/support_automation_server.html)

# Transcription
  
| Time Index | Transcription                                                                                                                                  |
|:---------- |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators. I'm David Sparks, and joined by my fellow co-host, Rosemary Orchard.                                                    |
| 00:07      | How are you, Rosemary?                                                                                                                         |
| 00:08      | Oh, I'm doing really well, David. Life is good, and we have a great guest for today's                                                          |
| 00:14      | show.                                                                                                                                          |
| 00:15      | Yes. The infamous Dr. Drang has returned to the Automators. Hello, Doctor.                                                                     |
| 00:20      | Hello. How are you, folks?                                                                                                                     |
| 00:22      | We are doing great. I feel like beta season for me and Rose is just like one of the best                                                       |
| 00:28      | times of the year.                                                                                                                             |
| 00:29      | Oh, yeah.                                                                                                                                      |
| 00:32      | It's very frustrating for people like me who refuse to do the beta because you keep seeing                                                     |
| 00:39      | the fun that people are having, sometimes not so much fun, sometimes things go badly.                                                          |
| 00:46      | This is, though, this would be the second year that I have two iPads, and I have my main                                                       |
| 00:55      | iPad, the 12.9-inch, and then I've got the very old 9.7-inch iPad Pro. It didn't last                                                          |
| 01:03      | very long. Is this the year I'm going to take the plunge?                                                                                      |
| 01:10      | If you don't play on that small iPad today, you're a coward.                                                                                   |
| 01:16      | The only caveat I will say is, as we record this, Developer Beta 2 came out not that long                                                      |
| 01:20      | ago, and I installed it, and split text has broken in all of my shortcuts, which is very                                                       |
| 01:26      | frustrating. I'm just going to add that little caveat in there. If maybe you wait until the                                                    |
| 01:31      | public beta is out, and for anybody listening at home who is there going, I could get the                                                      |
| 01:36      | Developer Beta, but you're not a developer, I would recommend waiting for the Public Beta.                                                     |
| 01:40      | I'm going to take Rosemary's advice instead of David's here, coward.                                                                           |
| 01:45      | I am sorry for undermining you, David, but I do feel like it's probably a smart move                                                           |
| 01:50      | for anybody who's got access to both betas, but doesn't need it as a developer or as a                                                         |
| 01:55      | podcast or a tech journalist or something. You can wait until the Public Beta. It's                                                            |
| 01:59      | going to be better, hopefully less crashy. My watch has, I'm pleased to say, stopped                                                           |
| 02:04      | rebooting when I wash my hands.                                                                                                                |
| 02:09      | I will be happy to be considered a smart coward.                                                                                               |
| 02:12      | All right. Well, when you do get around to it, let us know what you think.                                                                     |
| 02:15      | Yeah.                                                                                                                                          |
| 02:16      | Oh, yeah. Well, yeah, I will.                                                                                                                  |
| 02:18      | But the reason we're having you here today is to talk automation. Over at your blog,                                                           |
| 02:24      | you cover automation frequently, and I thought that it would be, and we've had you on once                                                     |
| 02:30      | before, but there's just so many little nuggets coming out of your website. But before we                                                      |
| 02:36      | start getting into the weeds, just for listeners that aren't familiar with you, give us a little                                               |
| 02:40      | bit of background about the mysterious Dr Drang.                                                                                               |
| 02:44      | Okay. Well, I'm 59 years old, and I started programming. I'm an engineer by training,                                                          |
| 02:57      | and that's what I do for a living. I'm a consulting engineer. I do a lot of investigations                                                     |
| 03:03      | of failures. Things break, or there's an accident of some sort, or there's a concern                                                           |
| 03:10      | that something was not built correctly, and so some investigation has to be done to figure                                                     |
| 03:17      | out what's wrong with it, if indeed anything is wrong with it. So that's what I do in                                                          |
| 03:21      | my day job, and that's what pays the bills. I had the traditional engineer's introduction                                                      |
| 03:30      | to programming. Well, what was traditional in the late 70s? I took a [[Fortran]] class in                                                      |
| 03:38      | 2007, 2008, something like that. It was [[Fortran]] 4, not even [[Fortran]] 77 yet. It was a terrible                                          |
| 03:51      | class. I didn't learn anything really, but what got me more interested in programming                                                          |
| 03:58      | in general was a technical elective that I took my senior year, which was a [[Pascal]] course,                                                 |
| 04:06      | and I learned a lot in that class. Structured programming was the paradigm of the time,                                                        |
| 04:12      | and that's what I learned, and I learned [[Pascal]], and we wrote lots of stuff. Our instructor                                                |
| 04:19      | was very new and didn't realise, I think, that you shouldn't be teaching undergrads                                                            |
| 04:24      | as many things as he taught us, and that was just great, and that was just great. We ended                                                     |
| 04:28      | up writing a text editor in [[Pascal]], which had no string type. It was a tough course,                                                       |
| 04:39      | but I learned a lot and I enjoyed it, and I have been programming off and on ever since.                                                       |
| 04:48      | The thing I like about you, and I've told this story in the past about years ago, I                                                            |
| 04:53      | took a woodworking class from this famous woodworker named [Sam Maloof](https://en.wikipedia.org/wiki/Sam_Maloof). Sam's gone now, but he made |
| 04:58      | these amazing rocking chairs, and so I went and spent a day or two in his shop with him,                                                       |
| 05:03      | and it was one of those things where you could pay to have a class with Sam, and I was obsessed.                                               |
| 05:08      | I was young. I was in my 20s. I was obsessed with his tools, which is the usual mistake                                                        |
| 05:13      | you make, right? At one point, Sam turns to me and says, Dave, it doesn't matter what                                                          |
| 05:19      | tools I use. If I need to, I use my teeth, and that little bit of wisdom has stuck with                                                        |
| 05:25      | me my whole life, and whenever I get hung up on tools, I think about Sam and his teeth,                                                        |
| 05:29      | but the thing I like about you is that you do the same thing. If I read your blog, one                                                         |
| 05:35      | day there may be a shortcut up there, one day there may be an [[AppleScript]], the next                                                        |
| 05:38      | day they'd be a terminal command, next day there'll be a [[Python]] script. It's just like                                                     |
| 05:43      | you're doing so many different automation types, and it seems to me like you just pick                                                         |
| 05:48      | whatever works.                                                                                                                                |
| 05:49      | Yeah. Well, focus has always been a problem for me, but the other thing is, when you realise                                                   |
| 05:58      | if you are at this long enough, I've had plenty of years to learn lots of different languages.                                                 |
| 06:06      | I've probably programmed in, I don't know, between one dozen and two dozen different                                                           |
| 06:12      | languages over the years, and not just writing stuff to just see what it was like, but actually                                                |
| 06:18      | programming something that was useful for me, at least, if not for anyone else. After                                                          |
| 06:24      | a while, if you can get over that hump, you learn that all these languages are pretty                                                          |
| 06:30      | much the same, and you shouldn't be afraid of them, and they all have their good sides                                                         |
| 06:37      | and their bad sides, and you just try to pick the one that's best, or in some cases the                                                        |
| 06:46      | only one that can do things. For example, sometimes you can only do things in [[Shortcuts]],                                                   |
| 06:53      | because you want to do something on iOS. Well, not a lot of choices in iOS, so you're likely                                                   |
| 06:59      | to be doing something in [[Shortcuts]], and similarly on the Mac, there are sometimes, if you've                                               |
| 07:04      | got to work back and forth with [[Apple Contacts\|Contacts]] or the [[Apple Calendar\|Calendar]] or whatever, well, you're going               |
| 07:10      | to be writing an [[AppleScript]] or nowadays [[JavaScript]] for applications. No, it's not                                                     |
| 07:16      | [[JavaScript]]. [[JXA]] is '[[JXA\|JavaScript for Automation]]', not applications. But it's got to be one                                               |
| 07:22      | of those, too, because you can't get into the other things. [[Keyboard Maestro]] helps                                                         |
| 07:28      | out quite a lot in that, but still, ultimately, you're going to end up with something [[AppleScript\|AppleScript-y]]                                            |
| 07:34      | Yeah, so often, it just ends up in [[Keyboard Maestro]],                                                                                       |
| 07:36      | doesn't it? Yeah, that's certainly my first choice, because [[AppleScript]] is never                                                           |
| 07:43      | my first choice. I have been programming in [[AppleScript]] since the late 90s, since it                                                       |
| 07:48      | came out, and I do not feel comfortable ever programming in [[AppleScript]], ever. Well, when                                                  |
| 07:54      | you get it working, don't touch it. That's the rule of [[AppleScript]]. Absolutely. Don't                                                      |
| 07:59      | question it. And if you find something that somebody else                                                                                      |
| 08:02      | has written that seems to do the job, just leave it alone, even if you're there going,                                                         |
| 08:05      | feel it. Could I maybe change it to do this? Consider                                                                                          |
| 08:08      | maybe just running a second script. At least that's what I do. So I have a couple of [[Keyboard Maestro]]                                      |
| 08:12      | macros, which run one [[AppleScript]], and then they run another [[AppleScript]], and                                                          |
| 08:16      | then they run a third [[AppleScript]], because I found the three. My attempts to combine those                                                 |
| 08:20      | three into one sometimes, they just fail, and I'm not quite sure why. I'm pretty certain                                                       |
| 08:25      | it's just a race condition or something that's in there. But then I just leave it as three                                                     |
| 08:30      | separate [[AppleScripts\|AppleScript]] and run it through [[Keyboard Maestro]]. [[Keyboard Maestro]] saves the day again.                      |
| 08:34      | You are very wise. But getting back to Dr. Drang's teeth, I really                                                                             |
| 08:38      | like the fact that you do use these kind of consumer level automation tools like [[Keyboard Maestro]]                                                     |
| 08:46      | and the usual suspects, but then you go into scripting and programming as well.                                                        |
| 08:51      | And you wrote a post, and we'll link it in the show notes recently, and just saying,                                                           |
| 08:58      | hey, you know, if you're doing [[Keyboard Maestro]] and you're afraid to script, don't be, you                                                 |
| 09:05      | know, and it was just a, it just was such a clear message. And I think people who understand                                                   |
| 09:10      | like, if you can write a scripting [[Keyboard Maestro]], you understand most of the programming                                                |
| 09:15      | concepts necessary to get started scripting. And I think there, for a lot of people, there                                                     |
| 09:20      | is this, this emotional or mental barrier that's a lot bigger than the actual barrier                                                          |
| 09:26      | of going over that step. And I thought that would be something I'd like to talk about                                                          |
| 09:29      | with our audience.                                                                                                                             |
| 09:30      | That post was inspired by a lot of things that I've seen on the Automators Forum and                                                           |
| 09:39      | to some extent on the MPU Forum as well, and [[Drafts]] their forum as well. I've been more                                                    |
| 09:46      | into the forum since being off of Twitter recently, so I'm spending my time doing something                                                    |
| 09:51      | else. And you, you see people, and you can see people who have been writing [[Keyboard Maestro]]                                               |
| 09:57      | macros or shortcuts that have many steps, and that include pretty sophisticated                                                                |
| 10:05      | comments or concepts. And, but these people don't want to take the, there's a, there's                                                         |
| 10:12      | a step that they can't do. And you want to say, well, you know, you can do that in [[JavaScript]],                                                 |
| 10:19      | for example, or [[AppleScript]], or whatever it happens to be. And, and they kind of, and                                                      |
| 10:23      | they kind of freeze. And so, well, I don't, I don't know if I want to do that. And, boy,                                                       |
| 10:29      | it's, you've got it all. If you're doing, if you're doing loops and [[regular expressions]]                                                        |
| 10:37      | and conditional statements, if statements, in any of these visual programming systems                                                          |
| 10:47      | like [[Keyboard Maestro]] or [[Shortcuts]], man, you are programming. And you don't, you've                                                        |
| 10:54      | got it all. Yes, it's true. You will have to learn some syntax. Well, you have to learn                                                        |
| 10:58      | syntax to do [[Shortcuts]] and to do [[Keyboard Maestro]] as well. You have to know how to search                                                  |
| 11:05      | for the particular little block that you've got to drag in to your, your visual program,                                                       |
| 11:13      | or your macro, or whatever you want to call it. And it's not that much different than                                                          |
| 11:19      | looking up. I spend a lot of time, I've been writing, I've been writing [[Python]] programs                                                        |
| 11:24      | since for about 15 years, I would say, seriously, where that's, that's my main language for                                                    |
| 11:32      | the kind of programming I do specifically for work for the engineering work that I do.                                                         |
| 11:37      | And I am at [docs.python.org](https://docs.python.org) all the time. Even after 15 years, I still go there because                                                        |
| 11:48      | I can't remember, how do I, how do I search for an item in a list? I don't remember, how                                                       |
| 11:55      | do I remove it? Oh, yeah, that's, oh, yeah, it's removed. Good. Good. So it's, I do that                                                       |
| 12:02      | all the time. You're all, I'm always looking at the documentation or looking at [Stack Overflow](https://stackoverflow.com/)                                                 |
| 12:06      | or things like that. You just, you get used to doing that. And as I said, you know, with                                                       |
| 12:11      | [[AppleScript]], I've been, I've been programming in [[AppleScript]] for over 20 years. And I have                                             |
| 12:18      | absolutely no idea how to program in [[AppleScript]]. I really don't. All I, what I do is I, oh,                                               |
| 12:25      | well, I'm, I know I have to say tell application contacts, if I'm going to do something with                                                   |
| 12:31      | my contacts. After that, I can't, how do you do? Is it, how do I do with the selection?                                                        |
| 12:36      | How do I do what? Where is the address? Is the address in the, oh no, it's not there.                                                          |
| 12:41      | It's, it's one, it's one below that. Oh, you first you get a list and then you have to                                                         |
| 12:45      | select the first one out of the list, even though there's only one. It's a mess. And                                                           |
| 12:49      | I am spending my time with the documentation. I always have the dictionaries open in [[AppleScript]].                                          |
| 12:56      | And it, that's just, that's just the way it is. Yeah. But I think that's the barrier,                                                          |
| 13:02      | what you're describing. Like you've been doing it 20 years. You still don't understand it,                                                     |
| 13:07      | you know, that you're always in the docs. So, so I feel like I, I think that's what                                                           |
| 13:12      | creates that barrier, but it's really not what you're describing in my mind, at least                                                          |
| 13:16      | because I was the same way. It took me a long time to start actually dipping my toes into                                                      |
| 13:20      | scripting. And then once I started doing it, I realised that even though I'm never going                                                       |
| 13:25      | to be a master at any of this, with the knowledge I had from those more, you know, consumer                                                    |
| 13:31      | grade automation tools, I knew how to put together a program. And even going back to                                                           |
| 13:36      | the, my childhood with [[BASIC]] and some, you know, you know, the player missile graphics                                                         |
| 13:42      | I programmed on an Atari computer, it was easy enough to put it together.                                                                      |
| 13:46      | Yeah, exactly. I mean, the thing is, I know what I want to do. And I know what I want                                                          |
| 13:53      | to tell the computer to do. I understand what steps I want the computer to do for me. After                                                    |
| 14:00      | that, it's just, well, what, what is the order of the words or the order of the blocks, depending                                              |
| 14:08      | on what environment you're, you're scripting in. That's, that's all, man, it's syntax from                                                     |
| 14:14      | that point, from that point on, and syntax is not that hard. It's, it's hard to, it's                                                          |
| 14:20      | hard for me to remember. I don't remember, probably because I program in too many different                                                    |
| 14:24      | genres, too many different tools. I don't, I don't remember them all. I don't care. I                                                          |
| 14:32      | know that the documentation is there. And I don't have to look up after you program                                                            |
| 14:39      | for a while. I don't, I'm not looking up what I want to do, or, oh, do I need a loop here?                                                     |
| 14:46      | I know I need a loop. I may not remember how to write a loop, but that's easy, that's easy                                                     |
| 14:51      | to find out. Is it, should it be a while, should it be before, should it be, oh, what,                                                         |
| 14:55      | what is the block in shortcuts that makes a loop repeat? I don't remember. You know,                                                           |
| 15:01      | it's, those are, those things are trivial. What's important for programming is a clear                                                         |
| 15:10      | head and an underlying concept of what you want to do and how you being able to break                                                          |
| 15:20      | a problem down into smaller bits. And that's universal. It doesn't matter what language                                                        |
| 15:25      | you're using. It doesn't matter whether you're using a visual programming tool or just typing                                                  |
| 15:30      | out text. It's, it's that clear thinking that matters the most. And it's being in the habit                                                    |
| 15:38      | of thinking clearly and thinking about how can I break this down to make this simple                                                           |
| 15:45      | machine do what I want it to do? And that's, after that, it's all, it's all just, it's,                                                        |
| 15:55      | you know, it's, it's like choosing the colour of your clothes, really. The important thing                                                     |
| 15:59      | is, you know, you need to wear a shirt and you need to wear a pair of pants. The colours                                                       |
| 16:04      | come secondary. Yeah, definitely. It's, it's all about figuring out what the big picture                                                       |
| 16:09      | is in the first place. Because if you don't know what the big picture is, you, you can't                                                       |
| 16:13      | you know, put the jigsaw together. However, the jigsaw looks. Yeah, one of the things                                                          |
| 16:17      | that I cash this goes back to when I was a graduate student and I was, I was teaching                                                          |
| 16:22      | a course for my advisor, I was substituting for him. And there was it had to do with probability                                               |
| 16:32      | issues in engineering and reliability. And I had, it was hard to teach. This is my first                                                       |
| 16:41      | experience teaching. But what I, what I realised as I was doing it was that by being able to                                                   |
| 16:50      | explain things to the students, I learned probably more than they did. Yeah, it's common. Yeah.                                                |
| 16:58      | And when I was, and when I was a professor later on, the older guys in the department,                                                         |
| 17:02      | you still just always say, oh, if you want to learn a topic, sign up, you know, volunteer                                                      |
| 17:07      | to teach the class, you will learn the topic. And, and I, and it's the same thing I found                                                      |
| 17:13      | in graduate school was what that programming was the same thing. It was you are teaching                                                       |
| 17:18      | the computer how to do a problem. And you have to be clear in explaining a problem to                                                          |
| 17:25      | a, or the solution to a problem to a computer, because computers don't know anything. You                                                      |
| 17:29      | can't trust them to fig, to fill in the blanks. You can't trust them to, oh, I know what                                                       |
| 17:35      | he means, even though he said it a little bit wrong. No, no, that's, that isn't the                                                            |
| 17:38      | way it works. And you get into that habit of breaking a problem down into its smallest                                                         |
| 17:42      | parts and then building it back and building up a solution to it from those smallest parts.                                                    |
| 17:48      | And people who, who use shortcuts and [[Keyboard Maestro]] or whatever they, whatever other                                                    |
| 17:54      | tools they use that are not thought to be real programming in quotes, they're doing                                                            |
| 17:59      | real programming. And you have, you have figured out, if you can do those things, you have                                                     |
| 18:04      | figured out that breaking down and building back up. And it's, it's just a matter of choosing                                                  |
| 18:11      | what colour shirt, shirt you're going to wear as to whether you should move on to [[JavaScript]]                                                   |
| 18:15      | or [[Python]] or [[AppleScript]] or [[Perl]] or [[Ruby]] or whatever.                                                                                    |
| 18:20      | So what I'd like to do is give some advice to listeners that are at that, they're standing                                                     |
| 18:26      | at the precipice and they're listening to us and saying, okay, I want to do that. Like,                                                        |
| 18:31      | and what are some ways that you would recommend for folks to get started to, to jump over                                                      |
| 18:37      | that line?                                                                                                                                     |
| 18:38      | Well, I think you need to have your motivation and your motivation probably will be the best                                                   |
| 18:45      | motivation for you will probably be an automation that you have been trying to do the way you've                                               |
| 18:51      | been doing in the past with [[Keyboard Maestro]] or [[Shortcuts]], let's say, and you can't quite                                                  |
| 18:58      | get there. [[Shortcuts]] just doesn't have a box that you can stick in to do something. And                                                        |
| 19:10      | at this point, you have a choice, you can either abandon this automation that you want                                                         |
| 19:17      | to do, or you take the next step and the next step on iOS, I would say is probably [[JavaScript]].                                                 |
| 19:28      | And the reason I say that is because [[Scriptable]] is a pretty darn good citizen of iOS in that                                                   |
| 19:40      | way. It's a good citizen of iOS as iOS exists in the shortcuts era, which is what we are                                                       |
| 19:45      | now in. Being, you know, once upon a time, I think, and I still use [[Pythonista]], I love                                                         |
| 19:53      | [[Python]], I prefer programming in [[Python]] to [[JavaScript]]. But on iOS, typically [[JavaScript]]                                                         |
| 20:02      | is a better way to go simply because the tools are there to integrate with shortcuts. And                                                      |
| 20:10      | similarly, if you're a [[Drafts]] user, well, you really should learn [[JavaScript]] because although                                                   |
| 20:16      | [[Drafts]] has lots of actions, it doesn't have every action that you're ever going to need.                                                   |
| 20:24      | And you will find that you want to format something just a particular way and you want                                                         |
| 20:29      | to tease out a little bit of, you know, some text from over here and some text from over                                                       |
| 20:33      | here and put it together and combine it and maybe add some things together and then put                                                        |
| 20:39      | an answer in. Anything like that, boy, you're just much better off trying to use [[JavaScript]].                                                   |
| 20:45      | And [[Greg Pierce\|Greg]] put in, [[Greg Pierce\|Greg]] put [[JavaScript]] in there because he knew that he was not going to be                                                      |
| 20:51      | able to give you everything you wanted by making a bunch of actions. That ultimately,                                                          |
| 20:57      | you need an action that allows you to go off and use a more robust and a larger programming                                                    |
| 21:07      | language. And, you know, as I say, I don't like [[JavaScript]] particularly, I'm not sure                                                          |
| 21:12      | anybody really likes [[JavaScript]], but it is the language to do things in [[Drafts]] and it                                                      |
| 21:18      | is the language to easily extend shortcuts by way of Scriptable. So I think that's a                                                           |
| 21:26      | good choice. Plus one 100%. I feel like if you want to get started in this stuff, [[JavaScript]],                                                  |
| 21:32      | not only for all the reasons drawing says, but it's also on both platforms. I mean, if                                                         |
| 21:37      | you're listening to this show, you've got a Mac and you've got an iOS device, you don't                                                        |
| 21:41      | want your automation to work in just one place.                                                                                                |
| 21:43      | No, no, that's, that's the, the big selling point of [[Drafts]] for me as well. And also just                                                  |
| 21:48      | let's take a random example that I had the other day of I wanted to insert a date in                                                           |
| 21:52      | my draft, but I didn't want to insert today's date. I wanted to insert next Monday. Well,                                                      |
| 21:58      | [[Drafts]] doesn't have a template for that. So I could have farmed it out to [[Shortcuts]] and                                                          |
| 22:03      | got [[Shortcuts]] to, to figure out what next Monday is. But that's actually kind of complex                                                       |
| 22:06      | in [[Shortcuts]]. But instead, [[Greg Pierce\|Agile Tortoise]] added a great date math plugin for [[JavaScript]].                                                       |
| 22:14      | So you don't even need to think about it, that it just does stuff. And so I, I could                                                           |
| 22:17      | just type in next Monday and then format it as this and then insert. And that was it.                                                          |
| 22:22      | It was like three lines of code to get next Monday's date. And it works every time. But                                                        |
| 22:29      | I had to make the step of typing those three lines of code. And yes, I'm going to do this                                                      |
| 22:33      | as a script. But it's a lot easier to do that than it is to jump out of [[Shortcuts]], which                                                       |
| 22:38      | oh wait, and now I'm on my Mac. So I don't have [[Shortcuts]] yet, maybe next year. But you                                                        |
| 22:43      | know, that's, that's not available right now. And I wanted a cross platform solution. So                                                       |
| 22:47      | [[JavaScript]] is definitely a great starting point.                                                                                               |
| 22:51      | And even if you didn't want a cross platform solution for that, and of course you should,                                                      |
| 22:56      | right? But it's great that [[Drafts]] allows you to call shortcuts and then bring the, bring                                                   |
| 23:02      | the information back in. That's, that's another thing that [[Greg Pierce\|Greg]] has done that's very, that's                                                   |
| 23:07      | excellent and very user friendly. But man, then now you've got essentially two scripts                                                         |
| 23:14      | going on. You've got, you've got one in [[Drafts]] and you've got, and then you've got another                                                 |
| 23:19      | one cluttering up your [[Shortcuts]]. Well, you folks that have skipped ahead to the beta have                                                     |
| 23:24      | folders now. I don't have folders yet. But you know, it's being able to work in the language                                                   |
| 23:31      | that is closest to where you're working is very helpful. And [[JavaScript]], you know, I                                                           |
| 23:39      | am not a big fan of [[JXA]] not because I don't, it's because if you are trying to get something                                                   |
| 23:50      | done in [[AppleScript]] and you are searching the web for someone who has done something                                                       |
| 23:54      | similar or maybe even exactly the same thing, you're likely to find it in [[AppleScript]] rather                                               |
| 23:59      | than [[JXA]] simply because [[AppleScript]] has been around for so long. You just see more example                                                 |
| 24:06      | scripts in [[AppleScript]]. So ultimately, I think it's helpful to know a little bit of                                                        |
| 24:11      | [[AppleScript]], even if you prefer to write in a [[JavaScript]] on your Mac and access all                                                        |
| 24:18      | of the, all of the [[AppleScript\|AppleScript-y]] stuff by way of [[JavaScript]], it's probably helpful to                                                          |
| 24:23      | have at least some idea of what [[AppleScript]] looks like because there are some, there are                                                       |
| 24:31      | just some concepts in there that are in both languages in both [[JXA]] and [[AppleScript]]. But                                                    |
| 24:38      | I think they're usually better explained in [[AppleScript]]. The language works a little                                                       |
| 24:44      | bit better. It's, you know, it's got these weird, you know, for every repeat with every                                                        |
| 24:52      | contact whose city is Chicago or something like that. That's, you can do that in [[JavaScript]],                                                   |
| 24:59      | you can do a similar thing like that in [[JavaScript]], but it's more natural in [[AppleScript]]. And                                              |
| 25:03      | so if you understand how the [[AppleScript]] works for those sorts of filtering things,                                                        |
| 25:09      | you can translate it to the [[JavaScript]] relatively easily.                                                                                      |
| 25:11      | Yeah, but it still runs into this multi-platform problem, like talking about if you create                                                     |
| 25:17      | a [[JavaScript]] that requires a shortcut and then you try and run [[Drafts]] on your Mac, it's                                                    |
| 25:23      | going to say, Hey, where's my shortcut? And then the flip side is [[AppleScript]]. If you                                                      |
| 25:27      | write an [[AppleScript]] and I, I'm a big user of [[AppleScript\|AppleScripts]], but I understand that the                                                      |
| 25:33      | stuff I create there is not going to work on my iPad and iPhone. And that's kind of                                                            |
| 25:37      | getting back to why I think [[JavaScript]] is such a great jumping off point. I know in                                                            |
| 25:41      | my case, I didn't have any formal [[JavaScript]] training. So I don't know about three, four                                                       |
| 25:47      | years ago, I went to [Code Academy](https://codecademy.com) and it's [codeacademy.com](https://codeacademy.com). They've got a free [[JavaScript]]                           |
| 25:51      | course there. It took me like a weekend to go through it. And now I had, I know just                                                           |
| 25:58      | enough about [[JavaScript]] that when I go find code samples, I can cobble things together.                                                        |
| 26:04      | I mean, my relationship to [[JavaScript]] isn't all that different than my relationship to                                                         |
| 26:07      | [[AppleScript]]. But as someone who has crossed the line, but not as far as you two have,                                                          |
| 26:14      | I can say this isn't that difficult guys.                                                                                                      |
| 26:16      | No, it really isn't. Again, it's, it's getting that mode of thinking that you break the problem                                                |
| 26:24      | down into the small parts and then you build up a solution from the solution of all those                                                      |
| 26:27      | individual small parts. That's key to programming, not the language that you're in.                                                            |
| 26:33      | Yeah. Yeah. Definitely. If you can do it in shortcuts or [[Keyboard Maestro]], you can write                                                   |
| 26:38      | a script. You just need to learn, you know, instead of which blocks do I put in, it's                                                          |
| 26:42      | which words do I put in? And how do I format them? That, that's, that's, I mean, sounds                                                        |
| 26:47      | very simple, but that is pretty much it. You know, you just need to figure out what words                                                      |
| 26:51      | it is you need to do, which is exactly what you're doing already.                                                                              |
| 26:54      | Yeah. And I do often see, although both [[Keyboard Maestro]] and [[Shortcuts]] have some really useful                                             |
| 27:02      | and clever and powerful boxes that you can stick into your script or your automation.                                                          |
| 27:13      | Sometimes I see people who are trying to stay purely in [[Shortcuts]], for example, to solve                                                       |
| 27:18      | a problem. They are, they are going all around the world to solve something where, oh, one                                                     |
| 27:25      | single [[Scriptable]] step with just a few lines, sort of like what Rosemary was talking about                                                     |
| 27:31      | with the dates would, would just solve the problem really quickly. And you're, you're                                                          |
| 27:37      | going, you're, you're making your life harder by not jumping into a traditional scripting                                                      |
| 27:44      | language by sticking with boxes and lines connecting boxes.                                                                                    |
| 27:49      | Yeah. And on that spectrum, I'm not as far over as you are, but I do see this benefit.                                                         |
| 27:56      | Like I, I can do some pretty cool stuff with [[JavaScript]], but I can't write a [[JavaScript]]                                                        |
| 28:02      | that's going to look at the entire screen for a checkbox that looks just like this and                                                         |
| 28:08      | click in the middle of it. And I can do that in [[Keyboard Maestro]]. But then when you think                                                  |
| 28:11      | that I can combine some [[JavaScript]] mojo with that, with that box and [[Keyboard Maestro]],                                                     |
| 28:18      | now you're talking. Yeah. And that takes, there's no question,                                                                                 |
| 28:22      | that takes time to try to figure out, you know, how, how do you render under Caesar?                                                           |
| 28:29      | What should I do in [[JavaScript]] or [[AppleScript]], whatever it is, and what should I do in the                                                 |
| 28:35      | native tongue of this box and lines environment, whether it's [[Shortcuts]] or [[Keyboard Maestro]]                                                |
| 28:42      | or whatever. And there's, there is no simple advice for that. You just have to do it and                                                       |
| 28:51      | make mistakes. And ultimately, you'll figure it out. And you'll, and really, making mistakes                                                   |
| 29:00      | is actually okay. One of, gosh, you asked me to give you a couple of automations that                                                          |
| 29:06      | we could talk about here later on in the program. And one of them that I gave you is an awful                                                  |
| 29:13      | program. It is a, it is a terrible, disgusting mess that I have never written about on my                                                      |
| 29:19      | blog because it isn't, it's an embarrassment. I'm doing it here on your show. I'm not                                                          |
| 29:24      | excited about my blog. But, but it's, it's a, but it is one of my most useful administrative                                                   |
| 29:33      | scripts for running my business. And the reason it is so ugly is because it has been built                                                     |
| 29:40      | up over the course of 15 years or so. And every time I think, oh, I need to do something                                                       |
| 29:46      | more with this, I just add it. I don't, I don't, I have never rewritten this thing.                                                            |
| 29:51      | Yeah, you've never done the ground up rebuild. No, never, because I'm afraid to. Not that                                                      |
| 29:58      | I couldn't do it, but because I don't want to spend the time for on this. It's working.                                                        |
| 30:04      | I can add a few more lines and now it'll do this extra little bit. And, and it does.                                                           |
| 30:11      | And also I'm thinking, geez, I'm not that many more years. I'm not that many years away                                                        |
| 30:15      | from retirement. Do I want to rewrite this thing? No, I'm going to let it ride. And                                                            |
| 30:21      | that's okay. Because, because even bad, when I say badly written, I mean inelegant. It's                                                       |
| 30:28      | the, they do the job, but they don't do it in a clever way and they don't do it in a                                                           |
| 30:34      | short way and they don't do it in a, in a way that you are proud of because boy, that                                                          |
| 30:39      | that's a very nicely structured program. That's a neat looking little program. Ultimately,                                                     |
| 30:45      | especially for things that are done for yourself. Who cares? Who cares how elegant it is? It                                                   |
| 30:51      | does the job. Oh, is it as fast as it could be? Probably not. Does that matter? You're,                                                        |
| 30:58      | you're saving yourself five minutes of time. Does it matter whether it runs in one second                                                      |
| 31:02      | or half a second? No, it doesn't. Does it, it doesn't matter that you're using an algorithm                                                    |
| 31:08      | that's awful? Does it matter that you've repeated yourself instead of refactoring this thing                                                   |
| 31:14      | into something nice and clever? No, it doesn't. None of those things matter. It, it gets                                                          |
| 31:18      | the job done. And so, uh, you know, ugly programs are worthwhile too.                                                                          |
| 31:25      | Absolutely. I was looking at something today and that a colleague had written at work.                                                         |
| 31:31      | And the, the, one of the first things I thought when I saw it was I would program this differently,                                            |
| 31:35      | but that doesn't mean that I would program it better. Like it may not be the prettiest                                                         |
| 31:39      | working, looking script in the world, but it really works. And quite frankly, at the                                                           |
| 31:43      | end of the day, if your automation does what your automation is intended to do, when it's                                                      |
| 31:48      | intended to do it and how it's intended to do it, and there are no unexpected consequences,                                                    |
| 31:52      | you've won. You know, that's gold medal worthy. We don't need to, you know, spend time, you                                                    |
| 31:56      | know, reformatting things and rewriting things just because we can. Now, if you're learning                                                    |
| 32:00      | to script and you think, hmm, maybe I could do the script better, that is a great learning                                                     |
| 32:04      | tool. You've already got something. You can try rewriting it using this new feature or                                                         |
| 32:08      | function that you found, but you don't have to. You can just leave it and move on to the                                                       |
| 32:13      | next great automation in your life because, you know, you're listening to automators.                                                          |
| 32:16      | There's going to be hundreds more things that you need to write throughout your career.                                                        |
| 32:19      | Right. And, and you will write the next one better.                                                                                            |
| 32:22      | Yes. And the one after that you'll write better than that and so on until eventually you're                                                    |
| 32:27      | actually writing programs that you can be proud of. Or like me, sometimes you, you, you                                                        |
| 32:33      | keep changing the one that you're not proud of because you just don't want to dig into                                                         |
| 32:36      | it anymore. But they all work and they all, and they all do what you want them to do.                                                          |
| 32:43      | And especially this whole thing with automations. Yes, I often, I will write a blog post and                                                   |
| 32:50      | explain how I've written something, but you don't have, you don't have to do that. Keep                                                        |
| 32:56      | it, keep it quiet. Keep it to yourself. If you, if you think it's not written well,                                                            |
| 33:04      | so what? It works for you. You don't have to let it, you don't have to air your dirty                                                          |
| 33:08      | laundry out, out to the world. You can keep it to yourself and just, and be happy that                                                         |
| 33:13      | you are solving a problem that you really needed solved. And every time you use that                                                           |
| 33:19      | thing, it, it does it faster than you could do it by hand and it does it correctly, which                                                      |
| 33:26      | you are often not going to do by hand because it's, it's boring. It's something you, your                                                      |
| 33:32      | mind wanders as you're trying to go through the, these steps and you end up screwing it                                                        |
| 33:37      | up. Automations don't do that.                                                                                                                 |
| 33:41      | This episode of the automators is brought to you by DEVONthink. Get organised and unleash                                                      |
| 33:45      | your creativity. Go to devontechnologies.com/automators to get 10% off. DEVONthink                                                           |
| 33:52      | is such a great sponsor for the automators because it's so automation friendly. DEVONthink                                                          |
| 33:57      | is the flagship product from DEVONtechnologies and it's a professional document                                                        |
| 34:02      | and information management application for the Mac and it helps you collect, file, organise,                                                   |
| 34:07      | edit and annotate all sorts of documents so you can reach digital organisational heaven.                                                       |
| 34:13      | Archive all of your email with the enhanced email archiver. You press a button and [[Apple Mail]]                                                      |
| 34:17      | and it saves it to DEVONthink and you can do the same thing with paper documents.                                                         |
| 34:21      | They attach directly to your scanner. So you press a button on your scanner. You save the                                                      |
| 34:26      | documents straight to DEVONthink. You can even imprint PDFs with custom stamps before                                                          |
| 34:31      | giving them to others. Then organise your documents in any way you want. They have smart groups                                                |
| 34:36      | to let you create different views on your data and the application has integrated artificial                                                   |
| 34:41      | intelligence to assist you with filing and searching. The filing part is spooky good.                                                          |
| 34:48      | You can automate your workflow and create smart rules and add flexible reminders to                                                            |
| 34:52      | any document. They have so many different criteria that you can slice and dice your                                                            |
| 34:56      | documents via automation. That's one of the things I really like about DEVONthink and                                                          |
| 35:01      | it just takes all of the work out of working with the application. And if you listen to                                                        |
| 35:05      | automators, it's going to be super easy for you. They even let non programmers easily                                                          |
| 35:10      | automate many parts of the workflow so you can delegate the boring repeating tasks in                                                          |
| 35:15      | DEVONthink. And finally, sync your data securely between your devices using your preferred web                                                 |
| 35:21      | storage or even directly on the local network. And you can take your data with you with DEVONthink's                                           |
| 35:26      | iOS companion app. Now you can get 10% off DEVONthink three or upgrade to it                                                                   |
| 35:32      | right now. Just go to devonechnologies.com/automators. That's devontechnologies.com/automators,                                                        |
| 35:39      | A-U-T-O-M-A-T-O-R-S for that 10% off. And our thanks to DEVONtechnologies                                                       |
| 35:46      | for their support of the automators and all of relay FM.                                                                                       |
| 35:51      | So Dr. Drang, you came prepared for this show because of course, as well as having all this                                                    |
| 35:57      | stuff on your blog, you've you've fished out a couple of examples of some scripts that                                                         |
| 36:01      | you actually use. These aren't just, you know, scripts that are done for show. They're                                                         |
| 36:04      | scripts that you use in your daily life. And the first one you've put in our wonderful                                                         |
| 36:09      | little outline here is actually a dual automation because you've got a Mac and an iOS version.                                                 |
| 36:16      | And it's about formatting names and addresses for free for use with [[LaTeX]]. How did you                                                         |
| 36:22      | get started with this? You know, what's the use case behind it? How does it work?                                                              |
| 36:25      | Okay, well, when I write, I write all of my reports and all of my correspondence and proposals                                                 |
| 36:35      | for work in, I call it [[LaTeX]], but whatever, [[LaTeX]], it is the, which is a text formatting                                                       |
| 36:45      | language of sorts, very similar to [[HTML]], except of course, it has its own syntax. And it was,                                                  |
| 36:55      | it's good for, it's good, especially in how I got into it is because of its mathematical                                                       |
| 37:03      | formula formatting at which it is unexcelled. It is clearly the best. And it also has some                                                     |
| 37:11      | very nice things about basically taking your, taking the formatting, the way things look                                                       |
| 37:21      | out of your hands, you focus on the words and you focus on the structure of your report                                                        |
| 37:27      | or whatever it is that you're writing. Anyway, so that's what I write. I write in [[LaTeX]].                                                       |
| 37:31      | And in order to put a client's name and address into a proposal or on the front page of a                                                      |
| 37:42      | report, you need to have it formatted in a particular way. And in the same way that in [[HTML]],                                                   |
| 37:53      | in order to break lines, you would use the `<br>` tag. And if you are writing in [[Markdown]],                                                         |
| 38:00      | you have to put, this is one of the things that I don't like about [[Markdown]]. One of the                                                        |
| 38:05      | few things I don't like about [[Markdown]] is that in order to do a line break, you put                                                            |
| 38:10      | at least two spaces at the end of a line. And that way, the things don't, you get a                                                            |
| 38:18      | line break. And [[LaTeX]] has a similar thing. It's two backslashes. And then a carriage                                                           |
| 38:25      | return or a new line. And so every line in an address, a name and address, it's John                                                           |
| 38:32      | Q. Public at whatever the name of the company is, and then the street address in the city                                                      |
| 38:38      | and state, they all have to have line breaks. And so contacts, of course, does not have                                                        |
| 38:46      | these backslashes in it. So my, what I needed was a way to look up somebody in contacts and                                                    |
| 38:55      | be able to say, give me a [[LaTeX]]-ified version of that address with all of the backslashes                                                      |
| 39:03      | that are needed in there and put that on the clipboard so I can just paste it into my report.                                                  |
| 39:12      | And so I did that first in [[Shortcuts]] because I've been writing more and more of my stuff                                                       |
| 39:17      | on an iPad lately. And so I did that first in shortcuts. And then, and I had had a system                                                      |
| 39:28      | for getting a [[LaTeX]]-ified name and address on my Mac for many years, but it was kind                                                           |
| 39:34      | of clunky and not the best system in the world. And so ultimately I decided, well, I need                                                      |
| 39:40      | to do this on the Mac that works almost as almost the same way where I would look something                                                    |
| 39:46      | up in shortcuts and then hit some key combination and bingo on my clipboard is the [[LaTeX]]-ified                                                 |
| 39:54      | version of the name and address. And so I wrote it. And it ended up being [[Keyboard Maestro]]                                                 |
| 40:01      | because I like [[Keyboard Maestro]]. And it has some [[AppleScript]] in it because [[AppleScript]]                                             |
| 40:05      | is the one of the easiest ways to get into contacts, the contacts app. I could have done                                                       |
| 40:14      | it in a [[JavaScript]] [[JXA]] thing, but I just found [[AppleScript]] to be easier. And so ultimately,                                                |
| 40:24      | so now I have these two little automations that are parallel to one another. For me,                                                           |
| 40:32      | they work almost the same way. My steps are very similar, but what goes on behind the                                                          |
| 40:39      | scenes is very different. I mean, what actually happens, of course, is very similar because                                                    |
| 40:45      | they're getting information out of contacts and doing some reformatting of the text. But                                                       |
| 40:53      | using different programs to do it. And then this was a situation where I wasn't working                                                        |
| 41:00      | in [[Drafts]]. I usually don't write my reports in [[Drafts]]. I write in [[Textastic]] because                                                            |
| 41:06      | it has a really nice [[LaTeX]] syntax highlighting. So I didn't have the opportunity to write                                                      |
| 41:15      | one thing in [[Drafts]] and have it work on both platforms. So I had to split up the platforms.                                                |
| 41:23      | I had to use different techniques. I had to render unto Caesar. So, oh, look, I'm going                                                        |
| 41:29      | to do something in iOS. That means [[Shortcuts]]. Because I'm going to be mixing things. I've                                                      |
| 41:35      | got to mix the clipboard. I've got to mix contacts and [[Textastic]]. That means [[Shortcuts]].                                                       |
| 41:42      | Similarly on the Mac, I'm going to be looking things up in contacts and then ultimately                                                        |
| 41:52      | pasting things into [[BBEdit]]. And so what I need is the easiest way to put things together                                                       |
| 41:57      | is [[Keyboard Maestro]]. And because there was some tricky stuff in here, I dropped down                                                       |
| 42:06      | into [[AppleScript]] to do one of the [[Keyboard Maestro]] steps. As I say, it basically does                                                  |
| 42:11      | two things. It gets the name, the company, the street address of the contact that I am                                                         |
| 42:22      | looking at right now, the one that I have searched and found. And it puts a little text                                                        |
| 42:31      | block together and puts it on the clipboard. Now, there are some niceties in there, little                                                     |
| 42:39      | tricks that need to be done. For one thing, [[LaTeX]] does not like Ampersands. Ampersand                                                          |
| 42:45      | is a special character in [[LaTeX]]. And because a lot of my clients who are law firms or other                                                    |
| 42:52      | companies that are of firms in which they have a series of names of people, Dewey Cheatham                                                     |
| 42:59      | & Howe, they use Ampersands. And so Ampersands are a special character in [[LaTeX]]. They have                                                     |
| 43:05      | to be escaped with a backslash. So my program looks for Ampersands using [[regular expressions]].                                                  |
| 43:12      | And actually, I'm not even sure it needs to use [[regular expressions]]. It just searches                                                          |
| 43:16      | for Ampersands and puts a back splash in front of every Ampersand. It looks for line endings                                                   |
| 43:21      | and puts two backslashes at every line ending. The last thing it does is that it looks in                                                      |
| 43:29      | the formatted address and checks to see if the last line is USA. And because I have international                                              |
| 43:40      | clients as well, most of my clients are in the US. I do have international clients. But                                                        |
| 43:45      | I don't need to put USA at the end of an address when it's in the USA. So it looks for that                                                    |
| 43:53      | as the last line of the formatted address. And if it's there and it says USA, it just                                                          |
| 43:58      | gets rid of it. Very simple logic, not much to it. It's like six steps of contacts. And                                                        |
| 44:07      | it's, I don't know how many lines of [[AppleScript]] it is, like 18 lines of [[AppleScript]].                                                  |
| 44:12      | [[AppleScript\|AppleScript's]] not the most compact language in the world.                                                                                      |
| 44:14      | It's not very concise.                                                                                                                         |
| 44:15      | Yeah, it is not.                                                                                                                               |
| 44:17      | That's kind of the point is that it's verbose, actually, I think.                                                                              |
| 44:20      | That's what that's the whole English-like part of it, right? [[AppleScript]] is one of those                                                   |
| 44:24      | languages that's easy to read, hard to write, but easy to read, very easy to read, usually.                                                    |
| 44:29      | You can read [[AppleScript]] and say, oh, I know what it does. And then you try to write something                                             |
| 44:33      | that does something just a little bit different. And what the hell? It's not working.                                                          |
| 44:38      | So that's what these two things do. They work in parallel. I, you know, finally put these                                                      |
| 44:45      | two together in a nice parallel way only earlier this year. I had been kind of messing around                                                  |
| 44:51      | with different techniques and sometimes doing it. My God, I did it by hand sometimes. I                                                        |
| 44:56      | would just paste the name and address in my text thing and then go through and add all                                                         |
| 45:03      | the backslashes that I needed to do. Well, that's a horrible thing to have to do. And                                                          |
| 45:07      | not only is it a horrible thing to do, I would forget to do it correctly. I would skip lines.                                                  |
| 45:12      | I would forget to backslash the ampersands. And then I would create my report or my proposal                                                   |
| 45:21      | or whatever it was. And as I was proofreading, I would say, oh, crap, I screwed this up.                                                       |
| 45:27      | And because I forgot to do something that's very simple, mindless little thing of making                                                       |
| 45:33      | these little fiddly edit changes. Now I have a system on both platforms that does exactly                                                      |
| 45:40      | what I want. It does it perfectly every time. And I don't have to think about these fiddly                                                     |
| 45:45      | little things anymore. And that's what automation is all about for me. It's, it's not just                                                     |
| 45:51      | that it saves me time. It is that it, it does it right because I do things wrong so often.                                                     |
| 45:59      | I know how to do them right, but I forget. Yeah, it's funny to me with this one from                                                           |
| 46:05      | your description, it sounds like this was actually easier to do on iOS than it was on                                                          |
| 46:09      | Mac. Yeah, definitely was because digging into                                                                                                 |
| 46:15      | contacts in [[AppleScript]] is a little bit of a pain in the butt because you can have so                                                      |
| 46:23      | many addresses for a person. For some, one of the great things about the folks who did                                                         |
| 46:30      | [[Shortcuts]] and [[Workflow]] ahead of it is they gave you the boxes to put, to put into your                                                         |
| 46:39      | shortcut that do a lot of stuff. They have, they, these are, it's shortcuts ability to                                                         |
| 46:45      | work with contacts is very powerful and it's better than [[AppleScript\|AppleScript's]]. It's more compact.                                                     |
| 46:52      | It's, it's, you, you see it and you know, oh, this is exactly what I'm doing. And so                                                           |
| 46:56      | it was very easy for me to assemble this reformatted thing in shortcuts, whereas it took a little                                              |
| 47:04      | bit more doing in, in [[AppleScript]]. I would argue that it's easier to work                                                                  |
| 47:09      | with contacts and automation on the iPhone than any platform on the Mac. I, because                                                            |
| 47:15      | I tried to do it in [[Keyboard Maestro]] recently and I ended up falling into [[AppleScript]] because                                          |
| 47:19      | [[Keyboard Maestro]] also really doesn't have good tools for working with contacts. And                                                        |
| 47:25      | so I ended up just writing in an [[AppleScript]] for a big chunk of that automation and just                                                   |
| 47:29      | embedding it in a [[Keyboard Maestro]] script that did some other things. So yeah, contacts                                                    |
| 47:35      | is one of those hairy areas on the Mac where I think that they could do a lot better. And                                                      |
| 47:40      | the tools were almost there. Like if Al, I'm sorry, if [[Sal Soghoian\|Sal]] had just been able to get the                                                       |
| 47:47      | team to get, you know, Otto the [[Automator]] to like plug into contacts better. And I know                                                        |
| 47:52      | he tried, you know, but. Yeah, it's, it's a weird thing. And it's always been, there,                                                          |
| 47:58      | there are certain, certain apps that [[AppleScript]] is really good at. I suspect that the                                                     |
| 48:05      | reason that [[Keyboard Maestro]] isn't better at handling contacts is because underlying                                                       |
| 48:12      | [[AppleScript]] and Apple events just aren't great for, for handling the contacts database.                                                    |
| 48:19      | There are some apps that [[AppleScript]] is exceptionally good at. And you can just, you can kind of                                           |
| 48:26      | fly through it. [[Apple Contacts\|Contacts]] is not one of them, unfortunately.                                                                                    |
| 48:30      | You can do it though. You can do it. Absolutely, you can. It just takes a little more time.                                                    |
| 48:34      | And you know, the, the key to me, of course, the key indication when I am writing an [[AppleScript]]                                                     |
| 48:41      | and I know that it's, this is not something that really, and it kind of often forced into                                               |
| 48:48      | [[AppleScript]] because it's the only game in town, but you kind of wish, you know, I kind                                                     |
| 48:53      | of know that you're pushing [[AppleScript]] in a way that it shouldn't be pushed. Whenever                                                     |
| 48:59      | I have to set [[AppleScript\|AppleScripts]] text item delimiters, if you are an [[AppleScript]] programmer and you                                          |
| 49:04      | have to, you use this thing called [[AppleScript\|AppleScripts]] text item delimiters, you know you're doing                                                |
| 49:11      | something that you really wish you hadn't, you weren't, shouldn't be, you weren't, weren't                                                     |
| 49:15      | going to do. There'd be dragons. You're in trouble. Yeah. Oh my God. Every time I have                                                         |
| 49:20      | to do that, I think, go crap, [[AppleScript]], you're so bad at text. Why are you doing this?                                                  |
| 49:25      | Well, it wasn't necessarily built to handle text. I mean, as we talked about earlier,                                                          |
| 49:31      | some languages and some automation tools are better for, for some things than others, but                                                      |
| 49:35      | every so often you, you're there and you're, you've got something and you're almost done                                                       |
| 49:38      | in one language and you end up with this somewhat ugly looking, well, did I do here? Should                                                    |
| 49:43      | I have done this? Let's not talk about this anymore. I'm going to pretend this part of                                                         |
| 49:46      | my script or automation doesn't exist because wow, that's kind of scary to look at, but                                                        |
| 49:52      | it works. So, you know, it's okay. Yeah, definitely. I come to this point whenever I see text item                                             |
| 49:58      | delimiters in one of my [[AppleScript\|AppleScripts]], I think, should I just rewrite this in a different                                                   |
| 50:01      | language? And nowadays, of course, [[JavaScript]] can help you out with that because you can                                                       |
| 50:08      | actually rewrite your [[AppleScript]] as a [[JavaScript]] program and it can do all those things. But                                              |
| 50:13      | usually by the time I get to that point, like in this script that does this, it's like                                                         |
| 50:20      | the second to last line. And by that time, I have done so much work and okay, yeah, this                                                       |
| 50:27      | is ugly and it's not elegant, but it's just one line and I'm almost done. I'm just going                                                       |
| 50:33      | to, I'm just going to leave it here and walk away. It works. I'm walking away from it.                                                         |
| 50:39      | It'll be fine.                                                                                                                                 |
| 50:40      | It's funny to me, both of you have commented several times about how you don't like having                                                     |
| 50:44      | ugly automation. And for whatever reason, I don't care if it gets the job done. I don't                                                        |
| 50:51      | care how ugly it is. And I'm not even embarrassed to put it on the internet. You look at some                                                  |
| 50:55      | of the stuff I published at MacSparky over the years, you must be rolling your eyes when                                                       |
| 50:59      | you look at it. But, you know, it gets it over the goal line and I can get on with work.                                                       |
| 51:04      | I'm done. And I guess that's one thing where I just don't care. Maybe because I'm not a                                                        |
| 51:09      | formal programmer. I don't have any pride in my code. But ugly is fine so long as it                                                           |
| 51:16      | works.                                                                                                                                         |
| 51:17      | Did you read, have you ever read [the Steve Jobs interview](https://allaboutstevejobs.com/verbatim/interviews/playboy_1985)? I think it was in Playboy                                                           |
| 51:22      | magazine when the Mac first came out and Steve is talking about how you don't put a piece                                                      |
| 51:29      | of ugly plywood at the back of a drawer if you're a cabinet maker who cares about your                                                         |
| 51:35      | work. And of course, that's wrong, right? If you want to get the, if you need that chest                                                       |
| 51:43      | of drawers built and you need to, well, put an ugly piece, and you've got an ugly piece                                                        |
| 51:48      | of wood around you. Yeah, you put that in there. And especially if you're doing it                                                             |
| 51:52      | for yourself as opposed to something for sale. So I think Rosemary and I are just worried                                                      |
| 52:00      | about the bad piece of plywood at the back of the drawer. I still put it there. But                                                            |
| 52:06      | it does bother me. And I keep thinking, well, next time I'll use a better piece of wood                                                        |
| 52:10      | at the back of the drawer.                                                                                                                     |
| 52:12      | For me, when I say ugly scripting, a lot of what I'm concerned about with my automations                                                       |
| 52:17      | is when I come back at this in six months because I want to expand it or there's a problem                                                     |
| 52:21      | with it, am I going to be able to fix this? Like, have I left enough clear information                                                         |
| 52:26      | and signposts that I'm going to be able to come back and figure out what I'm doing here?                                                       |
| 52:33      | For this reason, I don't like using, like, two letter names for variables and things                                                           |
| 52:37      | like that. I would much rather write the full name of the variables, say, for example, David                                                   |
| 52:41      | Sparks instead of DS or DD for Dr. Drang. No, I'm better off writing Dr. Drang because                                                         |
| 52:47      | then when I'm looking at this later, I don't need a dictionary to figure this out. But                                                         |
| 52:52      | sometimes, yeah, I'll just use L for line because it's easier and there's three less                                                           |
| 52:58      | characters to type and it happens. But I can always do a find your replace later to fix                                                        |
| 53:03      | that if necessary.                                                                                                                             |
| 53:04      | So, you know, it's one of those things where sometimes, you know, everybody has their own                                                      |
| 53:09      | personal set of good practices that they try and adhere to, right? Whether it's, you know,                                                     |
| 53:15      | like making sure that you have everything ready for your day in the morning or writing                                                         |
| 53:19      | an automation in a specific style and format. You know, that's what people do. And, you                                                        |
| 53:26      | know, I sometimes break my own rules, but that's okay if you're happy to do it and by                                                          |
| 53:31      | all means.                                                                                                                                     |
| 53:32      | And if you're there going, should I have this rule? I would say variable naming is                                                             |
| 53:36      | a good rule to have. Give your variables good names, but aside from that, your code                                                            |
| 53:40      | can be as ugly as you like.                                                                                                                    |
| 53:41      | See, now here's where we differ because I am Mr. one character or two character variable                                                       |
| 53:49      | names. And it's because I think I have, it's because of my bad training with [[Fortran]]. First,                                                   |
| 53:56      | I learned how to program on [a key punch machine](https://en.wikipedia.org/wiki/Keypunch). Well, you do not want to work on a key punch                                                  |
| 54:02      | machine. It's a terrible thing to do. You make a mistake and you have to redo the whole                                                        |
| 54:05      | damn card. So, you type as little as you possibly can. Also, in my day, [[Fortran]] back in those                                                  |
| 54:13      | days distinguished between integer variables and floating point variables based on the                                                         |
| 54:20      | first character of the name. If the first character of the variable name was `I` through                                                         |
| 54:26      | `N`, it was an integer. Otherwise, it was floating point. So, these terrible habits from working                                                 |
| 54:34      | with an inferior programming language back in the 70s have allowed me to write programs                                                        |
| 54:42      | where I am not embarrassed about short variable names.                                                                                         |
| 54:45      | It is funny how that changes you just because of that first experience. Yeah. Yeah. It's                                                       |
| 54:51      | stuck with me. I know nothing else about [[Fortran]]. I cannot remember a goddamn thing about [[Fortran]]                                              |
| 54:56      | except `I` through `N`.                                                                                                                            |
| 54:59      | Well, I is a useful variable, so.                                                                                                              |
| 55:04      | This episode of Automators is brought to you by TextExpander from our friends at Smile.                                                      |
| 55:08      | TextExpander boost your business productivity by allowing your team to communicate smarter,                                                  |
| 55:12      | faster and more consistently across all your channels. The app is built with collaboration                                                     |
| 55:18      | in mind, so you don't have to reinvent common email and message replies every time you need                                                    |
| 55:22      | them. Just store them in TextExpander instead. I discovered TextExpander about 10 years                                                    |
| 55:27      | ago and some of the snippets I use the most frequently are simple little things like making                                                    |
| 55:32      | sure my email is spelled correctly as well as my name because there's nothing worse                                                            |
| 55:37      | than an incorrect name at the end of an email. I also use it for more complex fill-in snippets                                                 |
| 55:43      | to make sure that I've got all the text that I need in some of my fabulous project templates.                                                  |
| 55:48      | I recommend TextExpander to anybody who types a lot and reuses elements of their text, especially                                            |
| 55:55      | if they share it with others. It can help you with everything from project management                                                          |
| 55:59      | to simple email.                                                                                                                               |
| 56:02      | You can use your snippets anywhere you type, [[Slack]], Trello, Google Docs, email, web browsers,                                                  |
| 56:08      | any place you frequently type the same things. And TextExpander for Teams makes it easy                                                      |
| 56:13      | to manage and share snippets across your entire company.                                                                                       |
| 56:17      | TextExpander is available for Mac, Windows, Chrome, iPhone and iPad, and automated listeners                                                 |
| 56:23      | get an extra 20% off in their first year. Visit TextExpander.com to learn more about                                                           |
| 56:29      | TextExpander. Our thanks to TextExpander for their support with this show and Relay FM.                                                  |
| 56:36      | All right, Dr. Drang, one of the other things you do a lot is terminal stuff. And I know you had                                               |
| 56:41      | one you wanted to share with us today that is a terminal-based command, but it is like the                                                     |
| 56:47      | automator, you know, golden ticket. So explain this one to us. I'm getting ahead of myself here.                                               |
| 56:52      | Well, this is an automation from hell, but this particular version of it is,                                                                   |
| 57:00      | I believe, about 15 years old. Well, I mean, when it got started, it has been changing over the years                                          |
| 57:08      | as I've added things to it. And it is a successor to a very similar, but somewhat simpler,                                                     |
| 57:17      | automation that I started in the late 90s. And in the late 90s and in the early 2000s,                                                         |
| 57:25      | I was running Linux instead of the Mac. And so I needed terminal-based stuff. And because it worked,                                           |
| 57:34      | I have maintained it as a terminal-based program ever since. And what it is,                                                                   |
| 57:40      | is it is a way for me to automate the setup of a new client project at work. So I get a                                                        |
| 57:54      | phone call, I have a new project, and so I have, this may take longer to explain than it's worth.                                              |
| 58:04      | But anyway, I have a folder on my Mac called Projects. And inside it are a bunch of folders                                                    |
| 58:14      | with all of my current projects, and in fact, a few projects that aren't current,                                                              |
| 58:18      | but which I have not cleaned up yet. And those have the names, those folders are all named                                                     |
| 58:23      | based on the name of the project. So, you know, Patoni building or whatever it happens to be.                                                  |
| 58:29      | And then inside those folders, the folder for each individual project, there will be a folder for                                              |
| 58:35      | photographs, there will be a folder for my invoices, there perhaps will be a folder,                                                           |
| 58:40      | once upon a time there was a folder for correspondence, when I actually did paper                                                              |
| 58:43      | correspondence with clients, don't do that any more, it's all email. And in addition to that,                                                   |
| 58:49      | I create an entry in a database that includes the project name, the project, number, our accounting                                             |
| 59:00      | system at work, assigns a project number to each new project. So I have to name number,                                                        |
| 59:06      | the client's name, the client's email address, erm what other things? Oh, also this database                                                     |
| 59:14      | includes the name of the folder that is within the projects folder where all the information goes.                                             |
| 59:24      | It also includes, for historical reasons, an entry called box, which is back in the old days,                                                  |
| 59:34      | all of my work was done on paper. And everything that the client sent me was on paper. And so I                                                |
| 59:40      | accumulated a lot of paper and we had file cabinets full of paper for all of our projects.                                                     |
| 59:44      | And when a project was finished, in order to conserve file cabinet space, I would pull all the                                                 |
| 59:49      | stuff out, I throw certain things away. But the things that I wanted to preserve would go into                                                 |
| 59:54      | a box. And that box would have a number written on it. And it would go into storage, into long                                                 |
| 59:59      | term storage. So box is the number so I can go back and find old stuff. I have almost never                                                    |
| 01:00:06   | used that in 25 years of being in this business. I've almost never used that. But there it is,                                                 |
| 01:00:11   | it's in my database. I have a similar collection of boxes. I have moving boxes with numbers on them.                                           |
| 01:00:18   | The system still works. It's a fun thing. So this automation, which is called New Projects,                                                    |
| 01:00:27   | New Projects singular, is a [[Python]] script that asks me to enter a series of things at the terminal.                                            |
| 01:00:41   | So it asks me the project name. It asks me the project number. It asks me what's the name of                                                   |
| 01:00:48   | the folder that all the stuff is going to go into. It asks me what the name of the client is.                                                  |
| 01:00:54   | Now, here is something where it then may ask me or it may not ask me what the client's email address                                           |
| 01:01:01   | is. And one of the things that I'm most proud about on this program is that if I type in the                                                   |
| 01:01:09   | client's name and it's a client that's already in my contacts, it doesn't ask me for the email address                                         |
| 01:01:14   | because it already knows it. It just fills it into the database directly. Then it asks me,                                                     |
| 01:01:19   | it doesn't ask me for the box because when I start a project out, it doesn't have a box                                                        |
| 01:01:24   | number. Oh, and then it asks me where, you know, I'm going to get to that later. Let's                                                         |
| 01:01:33   | leave it for that. So it then, because that's an even weirder part of this script. So this is                                                  |
| 01:01:42   | written in [[Python]]. So if it's written in [[Python]], how does it access contacts? Well, it does it                                                 |
| 01:01:52   | through [[AppleScript]]. Of course it does. [[Python]], of course it does. And I actually have written                                                 |
| 01:02:00   | within [[Python]], this [[Python]] script, I have [[AppleScript]] written in there. And my [[Python]] program                                                  |
| 01:02:07   | runs [[AppleScript]] through the `osascript` command that comes with the Mac. So long ago, many years                                               |
| 01:02:19   | ago, I wrote to sort of automate that so I didn't have to think about how to do that anymore.                                                  |
| 01:02:25   | I wrote a [[Python]] library called [[AppleScript]]. And it has basically just a couple of commands.                                                   |
| 01:02:37   | And one of them is called `asrun`, "AppleScript run". So it takes a string and runs it as if it                                                   |
| 01:02:45   | were an [[AppleScript]] and then returns the result. So that's how I run [[AppleScript]] from within [[Python]].                                           |
| 01:02:53   | And I think that gets done once or twice in this code. So one of the things it does, it uses                                                   |
| 01:03:01   | [[SQLite]] to create this database. It also uses [[Aritable]] because at one time I thought I was                                                  |
| 01:03:07   | going to move from [[SQLite]] to [[Aritable]], but I wasn't quite sure. So now it ends up                                                          |
| 01:03:14   | adding a database entry to both of them because I can't make up my mind which one I want to use.                                               |
| 01:03:19   | So it creates all the folders that I want to create within the projects folder.                                                                |
| 01:03:28   | It then creates a folder in mail for this project. And that's also done through an [[AppleScript]]                                                       |
| 01:03:35   | that's run via [[Python]]. And the final thing it does is it asks me where I,                                                               |
| 01:03:47   | it asks me for a position for labels. I still do have certain paper files for all of my projects.                                              |
| 01:03:57   | And so this script ultimately makes a PDF file and opens it in preview where the labels on an Avery,                                           |
| 01:04:11   | I think it's a 5161 label, where the labels are going to go. Now this 5161 has, I think,                                                       |
| 01:04:21   | 20 labels per sheet. And I usually only print out two of them. So I'm not going to waste the                                                   |
| 01:04:28   | whole sheet of 20 labels. I print them out. Okay, I print out the first two and then okay,                                                     |
| 01:04:34   | next one, I'll print out the next one. So the script asks me where on the label sheet, which                                                   |
| 01:04:38   | row and column do I start putting these labels on? And so that's the last thing it asks me.                                                    |
| 01:04:44   | And so ultimately, when this is done, I have a new folder in mail. I have a new folder                                                         |
| 01:04:56   | on my computer within the projects folder, and then a couple of subfolders within that.                                                        |
| 01:05:02   | And then I have this preview has popped up with the layout for a couple of new labels                                                          |
| 01:05:11   | that I will use for keeping track of my paper files on this project. And then I just send that off                                             |
| 01:05:17   | to the printer. I say print, manual feed, I walk over to the printer, I put a piece of paper in,                                               |
| 01:05:24   | some labels have already been printed, but this knows where those were and prints it out in the                                                |
| 01:05:29   | right spot. So I can then peel off those labels and put them on a file folder. And then I am done.                                             |
| 01:05:35   | And this is very similar to things that it's more complicated and stupider than a lot of                                                       |
| 01:05:44   | the things that [[Jason Snell]] does. But [[Jason Snell\|Jason]] does a lot of things, he has talked about this and                            |
| 01:05:48   | written about it on [Six Colors](https://sixcolors.com), where he has essentially templates for creating new projects,                                                  |
| 01:05:57   | whether it's a podcast or whatever it is, that sort of create a folder and a bunch of subfolders                                               |
| 01:06:03   | for his project. For a podcast project, for example, this does the same thing, it just                                                         |
| 01:06:09   | does it with regular folders, it doesn't, and it's doing it and it does an email thing and it                                                  |
| 01:06:14   | does these other things and it does the database stuff. The database stuff, by the way, is because                                             |
| 01:06:21   | I search on projects in order to write out when I send out invoices, it looks through the database                                             |
| 01:06:28   | to figure out who to send the invoice to, which is another automation we don't want to get into.                                               |
| 01:06:35   | So this automation started as a [[Perl]] script back in the late 90s. At some point when I                                                         |
| 01:06:44   | decided I wanted to make it much more complicated than it was, I think at that point all it did                                                |
| 01:06:49   | was make the folders. I decided I wanted to do something more complicated, I wanted to start                                                   |
| 01:06:54   | using databases, I wanted to start making things more helpful to me, do more stuff without me                                                  |
| 01:07:02   | having to do more stuff. And so I rewrote it because [[Python]] had become my favourite programming                                                |
| 01:07:07   | language at that time, somewhere around 2005, 2006, I rewrote it from scratch in [[Python]] with all of                                            |
| 01:07:14   | these things in it. Well, not all of these things. It started off with making out the folders,                                                 |
| 01:07:22   | then I added the database stuff, then, oh, you know what, I need to be able to make that folder                                                |
| 01:07:27   | in mail for all my correspondence on the, email correspondence on the project. Oh,                                                             |
| 01:07:35   | and then I wanted to, then I added [[Airtable]], and then I took [[Airtable]] out, oh, I want to make these                                            |
| 01:07:39   | labels. Hey, you know what, back sometime in 1997, I wrote a [[Perl]] script that makes labels                                                     |
| 01:07:46   | wherever I want them to. So all I have to do in [[Python]] is to call that [[Perl]] script. So I do,                                                   |
| 01:07:51   | so ultimately, this, this is a terrible, I don't want to be scaring off your listeners here, but                                               |
| 01:07:59   | this is a [[Python]] script that calls both [[AppleScript]] and [[Perl]] before it's done.                                                                 |
| 01:08:06   | And it is my, it is the ugliest script I have ever written because I have never                                                                |
| 01:08:12   | gone back to rewrite it in its entirety since 2005, 2006. But it saves me so much time when I am                                               |
| 01:08:22   | starting up a new project. It does everything for me. I have, I have learned what I need to do                                                 |
| 01:08:29   | and what I don't need to do when a project starts. And I type, I open up terminal, actually,                                                   |
| 01:08:35   | terminal is always running, I just open up a new window, I type in new project, it asks me for                                                 |
| 01:08:39   | everything, because I don't trust myself to remember everything I need to enter. It asks me                                                    |
| 01:08:45   | for everything. And when it's done, I am finished. I have my labels, I have my database, I have my                                             |
| 01:08:52   | folder set up, I have my email folder set up, everything is done. And I am ready to start                                                      |
| 01:08:57   | adding things to the project as my clients start sending me information. Yeah, you know,                                                       |
| 01:09:02   | I have a similar script for new clients as well, mine starts out in keyboard my show and                                                       |
| 01:09:07   | it runs off to [[OmniFocus]] and it goes out to[[ ]]Zapier and does stuff. But what it doesn't do,                                                     |
| 01:09:14   | it doesn't ask me where on the Avery paper the label gets printed. So I think you win.                                                         |
| 01:09:20   | David, you've lost that competition by a good couple of miles.                                                                                 |
| 01:09:24   | By a year. No, no, no, that's just, that's very small. You could do it. You could do it.                                                       |
| 01:09:29   | Yeah, but I don't print labels, so I don't need to, but still.                                                                                 |
| 01:09:33   | You don't print labels. No, what?                                                                                                              |
| 01:09:35   | You actually, you write them by hand? What do I need a label for?                                                                              |
| 01:09:39   | Oh my God, because it looks cool. It's for the same reason.                                                                                    |
| 01:09:44   | I don't want physical paper.                                                                                                                   |
| 01:09:46   | For this, well, I can't help it. Wait a minute, you have a notebook. You write in a notebook.                                                  |
| 01:09:52   | Yeah, that's different.                                                                                                                        |
| 01:09:53   | You're Mr. Paper now.                                                                                                                          |
| 01:09:54   | A client gives me a document. I scan it and I send the original back to him immediately                                                        |
| 01:10:00   | or her. I don't want possession of your paper. I usually don't get paper from clients. There are                                               |
| 01:10:07   | a few clients I do have. I have an 80-year-old client who still sends me paper. God love her.                                                  |
| 01:10:13   | So I still need that and I'm certainly not going to scan that and send it back to her.                                                         |
| 01:10:16   | That would be terrible.                                                                                                                        |
| 01:10:18   | Yeah, my 80-year-old client is the one client that I have to put a tie on when I meet her every time.                                          |
| 01:10:25   | So I don't get a lot of paper from clients anymore. That is true,                                                                              |
| 01:10:29   | but I do still write notes to myself on paper as I'm going through things,                                                                     |
| 01:10:36   | because even when I'm writing a program, I will write little notes to myself                                                                   |
| 01:10:41   | to make sure that I've got, or when I'm looking through drawings, I've got the scale right of                                                  |
| 01:10:45   | the drawing and things like that. There are just little things that are, I think, possibly because                                             |
| 01:10:51   | of my age and my experiences, but there are things that I still prefer to do on paper. Even                                                    |
| 01:10:59   | when I'm sitting right in front of a computer doing one thing, I will make notes to myself                                                     |
| 01:11:05   | on a piece of paper and those things all have to go into the file.                                                                             |
| 01:11:10   | So [[Apple]] makes this product, doctor. It's called the "Information Phone". They're up to number 12.                                               |
| 01:11:16   | And you can download a program, a specialised program. They're called Apps. It's called [[SwiftScan\|ScanPro+]]                                               |
| 01:11:22   | and you write down on the paper and then you literally take a picture of it and it saves                                                       |
| 01:11:28   | it to that folder you created and you're good. I actually, I do all of those things. I still scan                                              |
| 01:11:33   | it and I put it in that folder. I do all those things, but I still keep the paper.                                                             |
| 01:11:40   | Oh man, I got over the paper a long time ago. My shredder and me have an intimate relationship.                                                |
| 01:11:48   | Well, you know, so I, so my paper files used to be like a foot thick easily on projects.                                                       |
| 01:11:59   | Now it's down, it's one folder. It's one of those folders that does not expand.                                                                |
| 01:12:03   | But I still keep it. I still keep the paper.                                                                                                   |
| 01:12:10   | One of the steps you mentioned, and you also referred to [[Jason Snell\|Mr. Snell]], but it's the idea of                                      |
| 01:12:17   | auto creating a set of folders when you set up a new project. And I'm not sure all our listeners                                               |
| 01:12:22   | are going to go write the terminal thing you've done, but I think a lot of people would probably                                               |
| 01:12:26   | like the ability to do that. I was wondering, how are the two of you doing that? I mean,                                                       |
| 01:12:31   | if to the extent you're doing, I don't know if you're doing it at all, Rose, but                                                               |
| 01:12:34   | that simple step of saying, here's a new project, create a hierarchy of folders for me in this place.                                          |
| 01:12:42   | Well, I'm going to go with a non-scripting answer if that's allowed, David, and with a                                                         |
| 01:12:46   | [[Keyboard Maestro]] and [[Shortcuts]], depending on which platform I'm on. Now, what I've been                                                    |
| 01:12:52   | experimenting with recently is putting all of the formats for the structure in [[Data Jar]],                                                      |
| 01:12:59   | and then processing that. And I've just been running everything through [[Shortcuts]],                                                             |
| 01:13:05   | which is great, and it works really well, and I like it. And then some other things. So, for                                                   |
| 01:13:11   | example, when I'm doing podcast recordings, I've recently modified my setup so that whenever                                                   |
| 01:13:15   | we sit down to record, I press a button on my [[Stream Deck]], and it pops up and it asks me,                                                      |
| 01:13:20   | what's the episode number? And then it opens [[Audio Hijack]] and [[Google Docs]] and [[Airtable]] and                                                    |
| 01:13:26   | everything for me, and [[Skype]]. And then when I finish recording, [[Keyboard Maestro]] is watching                                               |
| 01:13:31   | the folder where the episodes get saved, and it pops up and double checks the episode number with                                              |
| 01:13:35   | me in case I had canceled earlier, and then renames those three files. So that's a recording of me,                                            |
| 01:13:41   | a recording of just, in this case, the two of you, and then a recording of all of us together,                                                 |
| 01:13:45   | just to make life a little easier for our lovely editor. And then it just moves those into the                                                 |
| 01:13:50   | folder for me. But that's all done with [[Keyboard Maestro]]. I think [[Jason Snell\|Jason]], you can, people go look                                           |
| 01:13:56   | at [Six Colors](https://sixcolors.com), [[Jason Snell\|Jason]], and search on template. But I think Jason uses, I think he uses                                                     |
| 01:14:04   | [[AppleScript]] for some of this, and I think what he does is copy a template of folders and subfolders                                                 |
| 01:14:10   | and subfolders, moves it into a certain place, and then renames the top level folder.                                                          |
| 01:14:15   | That's certainly the smart way to do it. Of course, I don't do it that way, because I'm already deep                                           |
| 01:14:23   | into [[Python]]. In my script, before doing that, I use, I just have a few lines of [[Python]]. There is                                               |
| 01:14:32   | a library in [[Python]] called "OS" for doing operating system type stuff, and one of its commands is                                                |
| 01:14:39   | called `makedirs`. And so I take the folder name that the script had asked me to enter                                                           |
| 01:14:50   | when I first started it, and it makes a folder with that name inside the projects folder using                                                 |
| 01:14:57   | this `makedirs` command. And then it makes the invoices in the photos and whatever other folders,                                                |
| 01:15:04   | notes folders, or whatever else I need, basically, in just a bunch of other, a few other lines of                                              |
| 01:15:10   | code. So it's three lines of code, as it turns out. So it's really not that big a deal, although                                               |
| 01:15:21   | it does seem kind of stupid to do it that way instead of just copying something.                                                               |
| 01:15:25   | Yeah, I kind of go through a process where for a while, I manually make folders that say the                                                   |
| 01:15:31   | same thing over and over again until my brain is like, oh, wait a second, you have a podcast                                                   |
| 01:15:36   | called The Automators, right? And then the next level is I'll save a templated set, just like                                                  |
| 01:15:43   | at the top or the bottom of a directory, like you have a client directory, there'd be one at the                                               |
| 01:15:47   | bottom says XX, you know, directory structure, and you could just duplicate that [[CMD-D Conference\|CMD-D]] and                                                 |
| 01:15:54   | then change the root folder name, which is probably the fastest automation for that.                                                           |
| 01:15:59   | In honesty. But then I wrote it into an [[AppleScript]] and a [[Keyboard Maestro]]                                                                             |
| 01:16:06   | script, because then it becomes part of the overall, hey, new client thing, create a set                                                |
| 01:16:11   | of folders in this directory that have these subdirectories. And that feels really great.                                                      |
| 01:16:16   | That's the kind of automation I love, where just like you, it's just a great feeling to know                                                   |
| 01:16:21   | that every folder is in the place it needs to be. So when I go to save something, I have a bunch                                               |
| 01:16:25   | of other automation that automatically saves emails and notes to client folders. Well,                                                         |
| 01:16:30   | what if the email folder isn't there? Well, if I ran that script, it's always there.                                                           |
| 01:16:35   | Yeah, exactly. And, you know, the reason this is still essentially a command line program                                                      |
| 01:16:44   | is because of the way I work, terminal is always open.                                                                                         |
| 01:16:48   | Yeah. And it's almost no more effort for me to open up a new window if there isn't one already                                                 |
| 01:16:58   | opened and terminal window that's already opened and just, and I type in new project. And, you know,                                           |
| 01:17:05   | okay, I'm typing, I suppose a keyboard shortcut might be a little bit better or grabbing something                                             |
| 01:17:11   | or a menu command. But there's something, and of course, I've been doing this for many years now,                                              |
| 01:17:17   | there's something about sitting down with my hands on the keyboard and typing in the word                                                      |
| 01:17:22   | new project that focuses my mind on, okay, I'm going to be asked a bunch of things now,                                                        |
| 01:17:28   | not that many things, but I'm going to be asked a few things. It's time for me to type these things                                            |
| 01:17:33   | in. And I kind of have to type them in, you know, the project name, the project number, and the name                                           |
| 01:17:38   | of the folder, and the name of the client. These are all things I would probably have to type in                                               |
| 01:17:43   | anyway. So it doesn't, that one little step of typing in new project sort of gets me in the mode                                               |
| 01:17:52   | of using my keyboard instead of the mouse, and gets me ready to put in that other information.                                                 |
| 01:17:58   | Yeah, no, there is one other slightly clever piece of programming in here, which is that                                                       |
| 01:18:07   | I can type my client's name in a lot of different formats, and it still manages to find it. And                                                |
| 01:18:13   | that's partly because [[AppleScript]] has some cool ways of searching for people in your contacts                                               |
| 01:18:18   | database. I would also assume that because you've been at that script for so long,                                                             |
| 01:18:24   | that some of the tools we talk about in the show didn't exist when you wrote this stuff.                                                       |
| 01:18:29   | Oh, God, yes. Oh, well, you know, frankly, the first version of it, well, no, even the [[Python]]                                                  |
| 01:18:34   | version, I wasn't using a Mac at that time. It was getting the contact information out of a                                                    |
| 01:18:41   | completely different thing. And so when I moved back to the Mac in 2006, 2005, 2006, whatever                                                  |
| 01:18:48   | that was, I had to rip out the old part and put in a new part. And that was when I started                                                     |
| 01:18:55   | telling myself, you know, this mixing of [[AppleScript]] and [[Python]] is silly, but it really does                                               |
| 01:19:00   | work. So, yeah, that's how that came about. Yeah, no, you're absolutely right. It was,                                                         |
| 01:19:07   | I didn't have [[Keyboard Maestro]] when I started using this. I wasn't even using a Mac when I                                                 |
| 01:19:13   | started doing this. I have just remembered, we had [[Don McAllister]] on the show. I think it was                                                  |
| 01:19:18   | episode 35, and he was talking about an app called [[Post Haste]], which for people who just want to do                                            |
| 01:19:22   | like a folder structure with template files, like this is another way of doing it. And that                                                    |
| 01:19:27   | runs on Mac and PC. So for people who have been, you know, perhaps put on Windows at work, or                                                  |
| 01:19:33   | maybe they're voluntarily using it at home, that's okay. We welcome all kinds of automators here.                                              |
| 01:19:38   | You know, there are lots of ways you can do this. And it's amazing, you know, simple thing,                                                    |
| 01:19:44   | template of folders, how many different ways you can solve that problem, because there are lots.                                               |
| 01:19:49   | But it's so ripe for automation, because it is an absolute waste of time to do that manually.                                                  |
| 01:19:55   | Yeah. And you will do it wrong. If you trust yourself to put in all the subfolders that you                                                    |
| 01:20:02   | need, let me put it this way. I will do it wrong. I will forget. I will forget to make the folder                                              |
| 01:20:08   | for my mail. I will forget to make the folder for the invoices until now I have an invoice. And                                                |
| 01:20:15   | of course, I have an automation for invoices for invoicing. And it's looking for a folder called                                               |
| 01:20:19   | invoicing. No, use the templates. However you want to use templates, use them so that you don't                                                |
| 01:20:29   | keep making these silly mistakes, because you're thinking about something else. It's so,                                                       |
| 01:20:35   | none of it is mentally engaging. Writing the automation is mentally engaging,                                                                |
| 01:20:39   | but doing the things that the automation does does not engage your brain. And you start thinking                                               |
| 01:20:45   | about a baseball game, or how you're going to get home from work, or what you need to make                                                     |
| 01:20:49   | for supper, or do you have to pick up groceries, or anything else other than what you are supposed                                             |
| 01:20:54   | to be focusing on, because what you're supposed to be focusing on is mindless, and your brain                                                  |
| 01:20:59   | rejects focusing on it, and starts wandering off, and you end up screwing up.                                                                  |
| 01:21:05   | This episode of The Automators is brought to you by ExpressVPN. High-speed, secure,                                                            |
| 01:21:11   | and anonymous VPN services. Get three months for free with a one-year package. Just go to                                                      |
| 01:21:16   | expressvpn.com/automators. I think it's fair to say we all want to browse the internet                                                         |
| 01:21:23   | without the rest of the world knowing what we're doing. And yeah, we all know about incognito                                                  |
| 01:21:28   | windows, but we also know those don't even really work. With incognito mode, your online                                                       |
| 01:21:33   | activity can still be traced. It doesn't matter where you get your internet from, your internet                                                |
| 01:21:38   | service provider can see every single website you've ever visited. And that's why you need                                                     |
| 01:21:43   | ExpressVPN. ExpressVPN is an app that reroutes your internet connection through their secure                                                   |
| 01:21:48   | servers, so your internet service provider can't see the sites you visit. It's available on all                                                |
| 01:21:55   | your devices, iPhones, Macs, even your smart TV, so there's no excuse for you to not be using it.                                              |
| 01:22:01   | I've been an ExpressVPN subscriber for years now, and I love the simplicity of the service.                                                    |
| 01:22:06   | With all their apps, there's just a single button. You press it, and then you're secure.                                                       |
| 01:22:11   | When I'm on someone else's Wi-Fi, it gives me a lot of peace of mind to turn that button on                                                    |
| 01:22:16   | and know that nobody can be reading my traffic or doing other creepy things to me.                                                             |
| 01:22:21   | So go ahead and protect your online activity today with the VPN rated number one by seeing                                                     |
| 01:22:26   | that and wired. Go to expressvpn.com/automators, A-U-T-O-M-A-T-O-R-S, and you can get                                                          |
| 01:22:34   | an extra three months free on a one-year package. That's [e-x-p-r-e-s-s-v-p-n.com/automators](https://expressvpn.com/automators)                                                    |
| 01:22:41   | to learn more. And our thanks to ExpressVPN for protecting us and sponsoring the Automators.                                                   |
| 01:22:49   | I want to talk about something that kind of sparked in my mind as you were just finishing                                                      |
| 01:22:53   | up that last segment, and this is a common complaint with automation, and that is the                                                          |
| 01:22:59   | time invested versus the time gained argument. And that is one that Rose and I hear about from                                                 |
| 01:23:07   | listeners all the time. And anytime I speak about automation, someone always walks up to me                                                    |
| 01:23:12   | afterwards and say, well, how much time did you actually save versus how much did you spend                                                    |
| 01:23:17   | writing this crazy script? And I have thoughts on it, but I was curious what yours are.                                                        |
| 01:23:23   | My thoughts are that [that XKCD cartoon that talks about this famously](https://xkcd.com/1319/), whenever anybody                                                        |
| 01:23:32   | wants to complain to you that you're spending too much time on making your automation,                                                         |
| 01:23:38   | as compared to the time you save, they will link to [this XKCD cartoon that is a graph](https://xkcd.com/1319/). And                                                     |
| 01:23:46   | everybody's seen it. Everybody who's on Automators has seen it. I'm sure you're                                                                |
| 01:23:50   | put in the show notes as well. Oh, yeah. It's already there. I mean, to hell with that.                                                        |
| 01:23:55   | Screw that. That's automation. Yes, there's no question. Automation is, in part, about saving                                                  |
| 01:24:03   | time. But to me, as I have gotten older and find myself doing what I was just saying before you                                                |
| 01:24:12   | went into the break, making mistakes because my mind is wandering, because I've done this,                                                     |
| 01:24:18   | I've made a, I've done this so many times, whatever it is that I'm automating, I have done it so many                                          |
| 01:24:26   | times, I cannot possibly keep my mind on it. And so I make mistakes because it's so easy.                                                      |
| 01:24:33   | I make mistakes because it's easy, not because it's hard. And so, to me, that's the more important                                             |
| 01:24:39   | part of automation, excuse me, is the consistency that comes from doing things through automation.                                             |
| 01:24:47   | It gets done the same way every time. And it gets done right, if I've done the automation right,                                               |
| 01:24:52   | at least. It gets done right every time. And I don't do things right every time. I do things                                                   |
| 01:24:59   | wrong because my mind wanders. So the automation fixes that. The other thing is, I like making                                                 |
| 01:25:06   | automations. And one of the reasons, and so it's not a burden to me to make one. I don't feel bad                                              |
| 01:25:16   | about making them. I like them. And the fact that I make an automation, even if it doesn't                                                     |
| 01:25:21   | save me much time, means that I'm better and faster the next time I have to make an automation.                                                |
| 01:25:27   | I am keeping my mental tools sharp by making automations. It's easy to forget how to use                                                       |
| 01:25:36   | certain programming languages or certain tools on your computer automation tools                                                               |
| 01:25:40   | if you're not doing it regularly. You have other things to think about. You have your family to                                                |
| 01:25:46   | think about. You have your work to think about if you're not a professional automator. And so,                                                 |
| 01:25:52   | things go out of your head because you're just not doing them on a regular basis. So finding                                                   |
| 01:26:00   | things to automate keeps me sharp, keeps my automation skills sharper so that when I really                                                    |
| 01:26:07   | need to do something, not related to what we've been talking about today, but when I really need                                               |
| 01:26:12   | to write a program for work that will truly, truly save me a ton of time and therefore save my                                                 |
| 01:26:19   | clients a ton of time and will do the work accurately in a way that would be very difficult for me                                             |
| 01:26:24   | to do when I have a huge amount of data to sift through. When that time comes, I am sharp. I have                                              |
| 01:26:31   | I have the automation tools sort of at my fingertips, at my mental fingertips ready to go                                                      |
| 01:26:38   | because I've been doing things that maybe many people would think are a waste of time.                                                         |
| 01:26:43   | Yeah. I mean, amen to all that. And I would also add that building the automations for me, at least,                                           |
| 01:26:50   | quite often, the first one takes a while. But so often, I repurpose that first one, you know,                                                  |
| 01:26:56   | just the silly folder automation, right? I built that for taking on new legal clients,                                                         |
| 01:27:03   | but now I have a version of that that sets up a new field guide, and I have a version that sets                                                |
| 01:27:07   | up a new podcast. And, you know, everybody has a lot of different things they do in their life.                                                |
| 01:27:13   | And, you know, once you built that first one, it's so it's just trivial to repurpose it. And                                                   |
| 01:27:19   | the skills you learn along the way, all of a sudden, open up your mind to other ideas.                                                         |
| 01:27:24   | Yeah, it's funny how that works. Yeah, I was just talking to a lawyer friend of mine.                                                          |
| 01:27:28   | I've been out on my own now. I'm a solo attorney now for five years. And he was saying, I can't                                                |
| 01:27:33   | believe you don't have a full-time secretary because he knows the number of clients I have                                                     |
| 01:27:38   | and what I do. And he's like, he's like, you are costing yourself so much money,                                                               |
| 01:27:42   | because you're doing all that admin work, the secretary would be much cheaper. I'm like,                                                       |
| 01:27:46   | but I'm not doing the work, you know, I'm not I have people that I hire to help me with parts                                                  |
| 01:27:52   | of the law practice, but I don't have people to do admin work for me because all that stuff is                                                 |
| 01:27:57   | handled through automation. The problem is everybody else in my industry, it's just inconceivable                                              |
| 01:28:03   | to them that you don't have somebody there that you boss around to do this stuff.                                                              |
| 01:28:08   | Yeah, well, we similarly, you know, when I left the company that I was working at 25 or so years                                               |
| 01:28:19   | ago, and a few of us started a new business, we've never had a secretary. We do have, we have                                                  |
| 01:28:25   | bookkeeper who comes in because we can't do any of that stuff conveniently, or we wouldn't do it                                               |
| 01:28:30   | well. And so we do have things like that, that people we rely on, but we don't have a secretary,                                               |
| 01:28:39   | and it's to a large extent, it's for the same reasons you do. I mean, we end up, we type our                                                   |
| 01:28:44   | own reports, we're always doing that. And a lot of this has happened because of the rise of the                                                |
| 01:28:51   | internet has made things much easier to not have a secretary because you can book your travel. So                                              |
| 01:29:00   | the time it takes you to tell your secretary what you want to do and how you want to do it,                                                    |
| 01:29:06   | you can just, you can have it done by then. And then of course, there's all the automations that                                               |
| 01:29:13   | I have for doing this administrative work and getting out my invoices and following up on my                                                   |
| 01:29:19   | invoices when they haven't been paid because clients sometimes don't pay their invoices                                                        |
| 01:29:25   | when they're supposed to. It's a terrible thing. You never have that problem, do you David?                                                    |
| 01:29:30   | Well, automation, if somebody's late, they start getting a nagging email. And then after a month,                                              |
| 01:29:38   | I get noticed that they haven't paid. And then I call the guys with the lead pipes,                                                            |
| 01:29:45   | they go get the money. It's real easy. I remember for anybody who's interested, Dr. Drang,                                                     |
| 01:29:51   | last time you were on the Automators, you told us about your nagging invoice follow up system.                                                 |
| 01:29:56   | And it was really interesting how you use [[Apple Reminders\|Reminders]] and everything else for that,                                                              |
| 01:29:59   | you know, to do it without using invoicing software specifically.                                                                              |
| 01:30:04   | So if anybody is interested in that, you should pop back to that episode and check that out.                                                   |
| 01:30:09   | Saves me a lot of time. And I have found since I have tightened the screws on my clients                                                       |
| 01:30:16   | and have been more proactive in following up on unpaid invoices, they pay more quickly.                                                        |
| 01:30:21   | Funny how that is. Rose, how do you handle that question of time invested versus time gain?                                                    |
| 01:30:29   | Automation is a hobby. So I'm going to spend my time doing something, whether it's playing games                                               |
| 01:30:34   | on [[Nintendo Switch]], moving between countries, planning holidays, you know, doing a variety                                                     |
| 01:30:40   | of things. I figure that, you know, as long as I'm enjoying myself and I get the result that                                                   |
| 01:30:45   | I'm after, it's a good investment of time. Because if I'm looking at this versus, you know,                                                    |
| 01:30:51   | a variety of other hobbies available to me, it's certainly a lot cheaper than others.                                                          |
| 01:30:55   | And as you said, David, you know, it replaces things like having a secretary. Like, why do I                                                   |
| 01:30:59   | need a secretary when I have a system that does all this stuff for me? You know, I get a new                                                   |
| 01:31:04   | screencast online project, it's sent to me where I have to make a screencast. And it's like, whoa,                                             |
| 01:31:10   | that would be a lot of work to set up like 30 minutes, or I can just run a shortcut.                                                           |
| 01:31:14   | And now I don't even run a shortcut. I have [[Zapier]] trigger [[Pushcut]] automation server,                                                         |
| 01:31:18   | which runs my shortcut for me. Like, that's it. You know, and I've figured this stuff out,                                                     |
| 01:31:24   | and it's fun. So even if I spend perhaps more time on it overall, then the task takes or will                                                  |
| 01:31:31   | ever take, then I just keep the fact that it's going to be more accurate in my head. And as                                                    |
| 01:31:37   | long as I enjoyed myself building it, you know, it doesn't matter, right? That's, that's what I think.                                         |
| 01:31:42   | I think that's really the answer is just own it. I mean, when I think about it, like, there's people                                           |
| 01:31:47   | who like to make to do the New York Times crossword. I like to build automations. And, and I think it                                          |
| 01:31:53   | keeps my mind spry. I think one of the tricks to it, I know for me, it can be a massive rabbit hole                                            |
| 01:31:59   | I fall into. So when I identify a problem, when I say, Hey, I've been making these folders manually                                            |
| 01:32:05   | too long, I need to automate that. I do not have a rule that I'm not allowed to stop and                                                       |
| 01:32:10   | automate it at that point. And I just create an [[OmniFocus]] task. And if I'm really serious about                                                |
| 01:32:15   | it, I'll block some time and plan for it. Otherwise, I am the type that would at the end of the day                                            |
| 01:32:23   | say, Oh, I automated four things. And I did absolutely zero deliverable work today.                                                            |
| 01:32:28   | Yep, that that is definitely a danger. I have had some stuff come up at work this week where it's                                              |
| 01:32:32   | like, we need to fix this. And my instinct is, I'm going to write a script to fix this so that                                                 |
| 01:32:37   | whenever we need to do this again in the future, we can just run the script. And there's like,                                                 |
| 01:32:41   | actually, you know what, sometimes that's not the right solution. The right solution is that we                                                |
| 01:32:46   | should just, you know, do this now and go into the database and delete those what that one rogue                                               |
| 01:32:53   | record manually and wait and see if it actually happens again. I will say that some of my favourite                                            |
| 01:33:01   | time spent automating is when I know damn well, I should be doing billable work. And I am.                                                     |
| 01:33:09   | I'm not fooling myself. That's that's I am honest with myself. I'm looking at saying,                                                          |
| 01:33:14   | okay, I should be working for this on this project. But I don't really want to work on this project                                            |
| 01:33:22   | right now. So at least I'm doing something interesting with my time instead of I don't                                                         |
| 01:33:29   | know what else I would be doing wandering around on [[Twitter]], I suppose would be one thing that                                                 |
| 01:33:34   | you can do or in our forums. Oh, yes. Well, that's always time well spent. By the way,                                                         |
| 01:33:39   | that was a great idea when you mentioned that you have kind of backed off [[Twitter]] as [[Twitter]] has                                               |
| 01:33:44   | become a hostile environment. And you're spending more time in the [MPU forums](https://talk.macpowerusers.com) and the [Automators forums](https://talk.automators.fm)                                              |
| 01:33:50   | forums. Man, I need to do that as well. Thanks for the tip on that. It's nice. And you get to be,                                              |
| 01:33:57   | you get helped and you get to be helpful. That's very seldom the case on [[Twitter]].                                                              |
| 01:34:04   | Yeah, very rude. Well, Dr. Dring, where do people find you?                                                                                    |
| 01:34:09   | People find me nowadays pretty much only at leancrew.com where my                                                                              |
| 01:34:16   | blog and now it's all this. I am the worst person at internet branding. My domain name is not my                                               |
| 01:34:24   | name. And my blog's name is not the name of the domain name either. And it's all a mess.                                                       |
| 01:34:31   | But [leancrew.com](https://leancrew.com), [L-E-A-N-C-R-E-W.com](https://leancrew.com). And that's where virtually everything I do is nowadays.                                                 |
| 01:34:41   | And I kind of, you can look through there to see how much work I have at my real job by                                                        |
| 01:34:49   | how often I'm posting. Yeah. And then when you get to [leancrew.com](https://leancrew.com),                                                                            |
| 01:34:54   | then the name of the blog is the John Lennon quote, right?                                                                                      |
| 01:34:57   | And now it's all this. Yeah, it's a good thing I don't try to make money off the internet because                                              |
| 01:35:04   | I'm miserable at it. Yeah. Well, either way, you are a treasure and all of us automators like                                                 |
| 01:35:11   | having your posts. Not only do I enjoy your automation posts, I like it when you explain                                                       |
| 01:35:16   | why the bolt failed on your lawnmower. So just keep doing what you're doing.                                                                   |
| 01:35:20   | And you will not find Dr. Drang on [[Twitter]], but you will find him at the [Automators forums](https://talk.automators.fm) at                                                  |
| 01:35:26   | [talk.automators.fm](https://talk.automators.fm) with a loving group of nerds. I love that forum because everybody there is just                                             |
| 01:35:33   | so nice to each other and everybody's just trying to figure this stuff out. If you enjoy the show,                                             |
| 01:35:37   | heck, if you just got through an hour and a half of us talking about terminal commands and folders,                                            |
| 01:35:42   | you love automation. You need to be on the forum. Yeah, definitely. There are so many wonderful                                                |
| 01:35:48   | people there. It's really nice to pop in and go, oh, look, all of these wonderful things have been                                             |
| 01:35:54   | happening in the last, you know, 20 minutes since I visited because it always feels like I was there                                           |
| 01:35:58   | 20 minutes ago and so much stuff has happened. Yeah. And we are the automators. You can find                                                   |
| 01:36:03   | us at relay.fm/automators. Thank you to our sponsors, Smile Express VPN and DEVONthink                                                            |
| 01:36:09   | and we'll see you next week. Goodbye, everyone.                                                                                         |
