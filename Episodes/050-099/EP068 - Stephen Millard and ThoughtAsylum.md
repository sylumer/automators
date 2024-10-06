---
status: "complete"
fc-date:
  year: 2021
  month: 01
  day: 29
fc-category: "podcast"
podcast: "Automators"
published: 2021-01-29
duration: 4286
formattedduration: "01:11:26"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Stephen Millard"]
notetype: "episode"
showpage: "http://relay.fm/automators/68"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators068.mp3"
episode: 68
title: "68: Stephen Millard and ThoughtAsylum"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Stephen Millard from ThoughtAsylum joins in to share his automation journey and his extraordinary ecosystem of plugins Drafts.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Stephen Millard]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 068 Discussion](https://talk.automators.fm/t/68-stephen-millard-and-thoughtasylum/10437)

# Sponsors
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast by the SharePoint team.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.
- [[AirBuddy (Sponsor)|AirBuddy]] - Experience AirPods on your Mac like never before.

# Show Notes
### Credits
*The Automators*  
- [Rosemary Orchard](https://rosemaryorchard.com)  
- [David Sparks](https://www.macsparky.com)

*The Editor*  
- [Jim Metzendorf](https://twitter.com/jmetzendorf)

*The Fixer*  
- [Kerry Provanzano](https://twitter.com/ciaokerryciao)
* * *
- [ThoughtAsylum](https://www.thoughtasylum.com/) - Stephen's Home on the Internet
- [ZX Spectrum - Wikipedia](https://en.wikipedia.org/wiki/ZX_Spectrum)
- [XYplorer - File Manager for Windows](https://www.xyplorer.com/)
- [Drafts | Where Text Starts](https://getdrafts.com/)
- [Keyboard Maestro 9.2: Work Faster with Macros for macOS](http://www.stairways.com/action/kmdiscount?REF9WZE)
- [Power Automate | Microsoft Power Platform](https://flow.microsoft.com/en-us/) - Formerly known as Microsoft Flow
- [AutoHotkey](https://www.autohotkey.com/)
- [File Juggler](https://www.filejuggler.com/)
- [What is Tasker and how does it work? | Android Central](https://www.androidcentral.com/tasker)
- [Blog | ThoughtAsylum](https://www.thoughtasylum.com/blog/index.html)
- [Stream Deck Icon Generator | ThoughtAsylum](https://www.thoughtasylum.com/2020/12/24/stream-deck-icon-generator/)
- [AutoHotkey](https://www.autohotkey.com/)
- [TextExpander - Productivity App | TextExpander](https://textexpander.com/)
- [Keyboard Maestro 9.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [Stream Deck Icon Generator | ThoughtAsylum](https://www.thoughtasylum.com/2020/12/24/stream-deck-icon-generator/)
- [Toolbox Pro](https://toolboxpro.app/)
- [Data Jar](https://datajar.app/)
- [Drafts Directory | Drafts Action Directory](https://actions.getdrafts.com/)
- [TADpoLe | ThoughtAsylum](https://www.thoughtasylum.com/tadpole/) - The ThoughtAsylum [[Drafts]] Library, also known as TADpoLe, is a collection of [[JavaScript]] for working with the [[Drafts]] application.
- [ThoughtAsylum | Drafts Action Directory](https://actions.getdrafts.com/g/1aM)
- [mermaid - Markdownish syntax for generating flowcharts, sequence diagrams, class diagrams, Gantt charts and git graphs.](https://mermaid-js.github.io/mermaid/#/)
- [Capturing for Obsidian Using Drafts and GitHub | ThoughtAsylum](https://www.thoughtasylum.com/2021/01/18/capturing-for-obsidian-using-drafts-and-github/)
- [ThoughtAsylum Drafts Library](https://tadpole.thoughtasylum.com/)
- [Font Awesome](https://fontawesome.com/)
- [Chartist - Simple responsive charts](https://gionkunz.github.io/chartist-js/)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators. I'm David Sparks, and joined by my co-host, Rosemary Orchard.                     |
| 00:07      | And this is The Automators, where we talk about how to automate your technology to do                    |
| 00:10      | your work for you. Hello, Rosemary Orchard. How are you today?                                           |
| 00:15      | I'm very excited, David. We're going to get to talk to somebody in the same country as                   |
| 00:18      | me, even though, you know, there's a whole pandemic between us. But, you know, you know,                 |
| 00:23      | somebody else British, and it's wonderful to have him on the show.                                       |
| 00:25      | I am very excited about this week's guest. Welcome to the show, Stephen Millard.                          |
| 00:30      | Hi. Thanks for having me.                                                                                |
| 00:31      | Stephen, you have been talked about on this show several times over the last several months.              |
| 00:38      | Gang Stephen Millard is the developer of an amazing set of add-ons for [[Drafts]] called Thought              |
| 00:44      | Asylum. And I think it came up in the [[Merlin Mann]] Show and several other shows we talked                  |
| 00:48      | about. And I know that it's a hot topic over on the Automators forum. And what Stephen's                  |
| 00:54      | done, and we're going to get into the nitty-gritty of it during the course of the show, but he's         |
| 00:57      | really just made a tremendous amount of add-on support for [[Drafts]], giving all of us users                |
| 01:05      | not only power users, but people who are just kind of new to this stuff, a set of tools                  |
| 01:10      | to create better automation in [[Drafts]]. It's an amazing set of tools. We're going to definitely           |
| 01:14      | get to that. But I guess before we do, Stephen, tell us a little bit about yourself.                      |
| 01:19      | Oh, as Rosemary said, I live in the UK. My day job is working in IT, and I've been doing                 |
| 01:27      | that for over 20 years. And I've worked as a developer of computer systems, but also                     |
| 01:35      | supporting them. And I currently work in IT consultancy. So I've been around computers                   |
| 01:44      | quite a while and automating for quite a while.                                                          |
| 01:47      | So in addition to IT, you've got some work you're doing in your day job with automation,                 |
| 01:52      | right?                                                                                                   |
| 01:53      | Yeah. As part of my day job, I'm working with lots of customers and lots of internal projects            |
| 01:59      | and things. And I'm automating all over the place just to make my life easier from things                |
| 02:05      | to do with calendar entries and text expansion all the way through to automatically running              |
| 02:11      | scripts and everything else you might think of.                                                          |
| 02:14      | When did you first get started doing automation?                                                         |
| 02:16      | I suppose my first experience was probably about eight years old. When I was about seven                 |
| 02:25      | or eight, my parents brought me a microcomputer called a Sinclair ZX Spectrum. And it was                |
| 02:32      | a crazy little computer with rubber keys, and you put it into your television, and it                    |
| 02:38      | allowed you to run programs in basic.                                                                    |
| 02:42      | I remember the Sinclair. Had a thermal printer, right?                                                   |
| 02:48      | You could get a thermal printer for it, yes.                                                             |
| 02:50      | Yes. I remember that computer. It was like the size of a... I guess it's hard to explain                 |
| 02:56      | it because it was like it was not a full-size computer, right? It had at least the ones                  |
| 03:00      | they sold in the US were kind of small where you would type on them with your thumbs, and                |
| 03:03      | it was just a flat panel where you'd press really hard on the numbers.                                   |
| 03:07      | Yes. There were definitely a lot of hard presses to get it to display anything. But                      |
| 03:13      | yes, it was only maybe seven or eight inches across or something. It was very small, but                 |
| 03:18      | it was good for a kid.                                                                                   |
| 03:20      | I'm just looking at this on Wikipedia. It kind of just looks like a keyboard. The one                    |
| 03:23      | on Wikipedia is black with a little rainbow across the corner.                                           |
| 03:26      | Yes, that's the one.                                                                                     |
| 03:27      | I do not remember this, I'm afraid to say.                                                               |
| 03:30      | No, Rose. You would not.                                                                                 |
| 03:32      | I mean, I'm only 30, so I'm officially an adult now, I think, maybe, but I'm not unfortunately           |
| 03:40      | quite old enough to have had one of these. But they did exist until a year after I was                   |
| 03:44      | born.                                                                                                    |
| 03:45      | It was a terrible and awesome computer. I think it was sold for like $100 US when it                     |
| 03:50      | came out, and it was like... For a lot of us, it was a way to get started, but I had                     |
| 03:55      | a friend that had one. I remember we used to program it, and we had a pencil with a...                   |
| 04:01      | We would press the pencil eraser with like a tremendous amount of force against the letters              |
| 04:06      | after a while to get them to register, and the problem would be, because if you just                     |
| 04:10      | press with your finger, the pressure sensitivity broke after a few months. You'd have to just            |
| 04:15      | press really hard, but if you held the pencil down too long, you might get three letters                 |
| 04:20      | instead of just one, so it was always... And then you had to deal with the delete key,                   |
| 04:24      | which is a whole other problem.                                                                          |
| 04:25      | How did you automate a Sinclair computer?                                                                |
| 04:28      | The computer itself came with a manual that taught you how to program in basic, and so                   |
| 04:34      | I was quite interested in doing everything I could with this new computer that we got,                   |
| 04:39      | and so I taught myself basic from that. And then a little while later, I was really into                 |
| 04:45      | playing... Role-playing games with some of my friends. We were kind of starting out into                 |
| 04:50      | that. And in those games, these weren't the games you'd have now online, and they were                   |
| 04:57      | all purely based out of books, and you wrote everything down. But there was a thing about                |
| 05:05      | you would have other characters that you could come across, and they were non-player characters.         |
| 05:09      | And it was a little bit boring and samey kind of creating those characters, so I wrote something         |
| 05:18      | in basic to generate them automatically. So it was a lot of just ifs and prints and random               |
| 05:24      | numbers, but it meant that I could very quickly generate lots of different characters and                |
| 05:29      | choose combinations that I liked. And that was probably the first one I ever did.                        |
| 05:36      | Nice. I remember the thing I used to do, I had the Atari 400, which also had a membrane                  |
| 05:42      | keyboard, and we would write our own games with it, but were basic go-to statements.                     |
| 05:49      | If you use the key, go to this segment. If you use the axe to open the door, we spent                    |
| 05:56      | so many hours playing those games. But that's not why you're here today. Sorry, gang. I                  |
| 06:01      | just got a little excited talking... Sinclair, I haven't heard that name for quite a while.              |
| 06:07      | What are the automation tools you're using these days?                                                   |
| 06:11      | Oh, I've used quite a variety of... [[Drafts]]. [[Drafts]], obviously. Yeah. So I guess at work,                 |
| 06:20      | I use Windows PC day in, day out, and I'm using everything from scripts there to probably                |
| 06:27      | the thing I use most commonly is there's a Windows file manager called [[XYplorer]]. A                      |
| 06:33      | play on Explorer, I guess. And that's very customisable and you can program, it has its                  |
| 06:40      | own scripting language in it, and you can program all sorts of things in that. So I use that               |
| 06:44      | all over the place to allow me to quickly start things off and get things going in the                   |
| 06:49      | work that I do. Outside of work, I obviously do loads of stuff in [[Drafts]], but I also have                |
| 06:56      | lots of [[Keyboard Maestro]] scripts, [[TextExpander]], some [[BetterTouchTool]] stuff, lots of command           |
| 07:02      | line scripts, [[AppleScript]], whatever's the right tool for the job at the time, really.                   |
| 07:10      | How do you go about figuring out what the right tool is for the problem?                                 |
| 07:14      | Well, I guess when I'm trying out... Or is that a bad question to ask? How long is a                     |
| 07:20      | piece of string?                                                                                         |
| 07:21      | Oh, so whenever you try a tool, you kind of... I'm a big one for reading manuals. I am oddly             |
| 07:30      | a person who reads a manual cover to cover before I even start trying to use something.                  |
| 07:35      | So I will find out about what something does, have some practice with it, and then usually               |
| 07:41      | one or two tools will kind of be a more obvious choice to an issue that I'm having. I'd always           |
| 07:51      | try and minimise the number of tools I'm using, but sometimes it does end up being a chain               |
| 07:54      | of tools and sometimes you try things out. It doesn't really work. Switch to a different                 |
| 07:58      | tool so you can get a bit further with that, but I usually don't have too much problem                   |
| 08:03      | with choosing which one to use. There's usually one or two that's a leading contender.                   |
| 08:09      | Fair enough.                                                                                             |
| 08:11      | Let me go back real quick to Windows for a second, because we don't talk about Windows                   |
| 08:15      | enough on the show. Rose and I don't use it on a daily basis. I remember back in the day,                |
| 08:21      | I wrote tons of scripts with Word Basic and some of the general automation tools that                    |
| 08:27      | Microsoft had created, but I don't know. What is the status of general automation tools                  |
| 08:33      | these days on Windows? How many tools are there out there for Windows users? What's                      |
| 08:39      | the barrier to entry?                                                                                    |
| 08:43      | I wouldn't really like to say. There's certainly lots of options out there, and Microsoft themselves     |
| 08:48      | have done a lot of work with their [[Microsoft Power Automate\|Power Automate]] tools and their [[Shell Script\|shell script]] equivalents,              |
| 08:56      | and they've obviously brought a Linux to Windows now as well, so that you can actually fire              |
| 09:01      | that up and take advantage of all the tools that you might be more used to on other systems.             |
| 09:07      | For me, most of my stuff is either in [[XYplorer]] or I have a [[TextExpander]] on there as well,               |
| 09:18      | I guess, and I make use of something called [[AutoHotKey]], which I know has come up on the                  |
| 09:23      | forum several times. That's a really great tool. It's a little hard to get into, I would                 |
| 09:28      | say, but it allows you to do a really wide range of things. I would say it's like a text-based           |
| 09:35      | version of keyboard my stuff for anyone who's on a Mac, so it's very much you program in                 |
| 09:41      | a language, but it allows you to do a massive range of interactivity. I've even got [[Batch Scripts\|DOS batch scripts]]                 |
| 09:51      | that I still use for little bits and pieces, but I think Windows is highly                 |
| 09:59      | automatable. You just have to know what you're looking for.                                              |
| 10:02      | Well, that's a relief to hear about [[AutoHotKey]]. I'd never heard of that app, and maybe we'll             |
| 10:07      | have to have somebody on someday to talk about it that uses it frequently, because I think               |
| 10:12      | we do need to talk about Windows once in a while. I always was under the impression                      |
| 10:16      | that [[Keyboard Maestro]] was a snowflake. It was something you only could get on Mac, and                   |
| 10:20      | there wasn't really anything like it on Windows, so that's good to hear.                                 |
| 10:25      | I think that's still true. [[AutoHotKey]] is something very different, but the breadth of automation         |
| 10:33      | that you can get out of it, I think is probably something similar.                                       |
| 10:36      | That makes sense. Just like for a long time, there were a bunch of projects that tried                   |
| 10:40      | to duplicate [[Hazel]] in Windows. [[Hazel]] is a great Mac utility for document filing and                      |
| 10:47      | file management. They were such a rip-off that they would even copy similar names. One                   |
| 10:53      | was called [[Belvedere]], which was a TV program about a maid, and Belvedere was a TV program                |
| 11:02      | about a butler. It wasn't too hard to figure out where they were coming from, but they                   |
| 11:09      | were never very good. I don't know if there's anything like it. Is there anything like [[Hazel]]             |
| 11:12      | these days on Windows worth recommending? It's been a while since I looked for something                 |
| 11:16      | like [[Hazel]]. I know [[Belvedere]] doesn't exist anymore. I think that was one of the guys                     |
| 11:26      | from [Lifehacker](https://lifehacker.com), right? That was Adam Pash. Yeah. I think so. Yeah. There's a few tools                  |
| 11:34      | out there that will do it. I think [[File Juggler]] was one that I looked at in the past, and                   |
| 11:38      | I'm sure there was another one, but I can't remember the name. Yeah. Well, keep on it,                   |
| 11:45      | Windows users. I do feel like Mac users in general are more likely to get into that                      |
| 11:50      | stuff, but maybe that's just a Mac bias. I don't know. I think often the tools are easier                |
| 11:56      | to get into on the Mac. Yeah. Yeah. It is an enthusiastic user base, whereas on Windows,                 |
| 12:05      | in my experience, largely, it's people who are using Windows because the work requires                   |
| 12:08      | them to. So you're less... Or it was cheaper. Yeah, exactly. So you're less inclined to                  |
| 12:15      | say, oh, let me spend some money to automate. But it sounds to me like things are better                 |
| 12:20      | than they used to be. I guess there's more options these days. I mean, I've been doing                   |
| 12:26      | automations on Windows with basically scripts and moving files around things since I first               |
| 12:31      | got a Windows PC, but suddenly it's matured a lot since I started using Windows PCs a                    |
| 12:39      | very long time ago. Yeah. What would you recommend for people listening? Because you are the             |
| 12:45      | computer science degree and you started on your Sinclair, so you've been at this game                    |
| 12:50      | a lot. If someone came up to you today and said, hey, I want to start automating, where                  |
| 12:54      | would you send them other than this podcast? Well, I probably asked them to show me their                |
| 13:02      | phone, to be honest. Most people's first computer these days is their mobile device. So if it            |
| 13:11      | was an [[Apple]] device, then I would absolutely send them to Automators first. There's nowhere              |
| 13:17      | else to go. But if it was an Android phone, I'd kind of point them in the direction of                   |
| 13:24      | a few apps. It's been a few years since I've used Android, but I think [[Tasker]] is still                  |
| 13:28      | the best automation on that platform. But I think being able to show someone immediately                 |
| 13:34      | something they could automate with would be the one to kind of catch their attention                     |
| 13:39      | and get them going in the right direction. Yeah. Yeah. And I think that's the thing.                     |
| 13:44      | I mean, Android does have a lot of options. I know I've got some friends who've recently                 |
| 13:48      | migrated away from Android, because they're not super happy with Google in general. But                  |
| 13:54      | you know, and Android's got plenty of flexibility and so on out there. And so everybody has              |
| 13:58      | automation possibilities on their platform. It's just a question of how interested you                   |
| 14:01      | are. And what you're trying to achieve, are you doing things begrudgingly or do you have                 |
| 14:06      | an active interest in improving what you're doing? Because that is the thing that makes                  |
| 14:09      | the biggest difference, of course. This episode of The Automators is brought to you by the               |
| 14:15      | Intrazone by Microsoft SharePoint, the bi-weekly conversation and interview podcast about SharePoint,    |
| 14:22      | OneDrive and related tech inside Microsoft 365. It's really great when you can find a                    |
| 14:28      | new podcast that can teach you something. And that's what I found with this Microsoft                    |
| 14:33      | SharePoint podcast. If you're looking for a new show to listen to, the Intrazone is                      |
| 14:37      | a bi-weekly podcast with conversations and interviews on how Microsoft SharePoint, OneDrive              |
| 14:43      | and related tech can work for you. You'll hear from guest experts behind the scenes                      |
| 14:47      | and out in the field, so you can see how SharePoint fits into your everyday work life to easily          |
| 14:53      | share and manage content, knowledge, and applications. Each show covers a bunch of segments like         |
| 14:58      | news and announcements, a focus topic of the week, guest perspectives, facts of the week,                |
| 15:05      | and upcoming events. And the topics of each show are really interesting. Previous episodes               |
| 15:10      | cover a lot of different things like designing your intranet, migrating to the cloud, or                 |
| 15:16      | just Office 365 and how to get the most out of it. I really enjoyed a recent episode called              |
| 15:22      | SharePoint drives me crazy where the hosts talked to some guests about implementing                      |
| 15:27      | SharePoint and the parts that worked and didn't work for them and how they got past that.                |
| 15:31      | It gave me a lot of new knowledge about exactly how SharePoint works, and that was something             |
| 15:36      | frankly I didn't know before, so that's the best kind of podcast. So go check it out right               |
| 15:41      | now, just search for the Intrazone wherever you get your podcasts, that's I-N-T-R-A-Z-O-N-E,             |
| 15:48      | or just click the link in the show notes and you can go straight to it. Our thanks to the                |
| 15:52      | Intrazone by Microsoft SharePoint for their support of the Automators and all of Relay                    |
| 15:57      | FM.                                                                                                      |
| 15:58      | So Stephen, one of the things I've noticed recently is you seem to be a mind reader.                     |
| 16:03      | So every time I look at your blog, there's something related to something that I've recently             |
| 16:08      | been doing. So the most recent post as of when we're recording is you've got something                   |
| 16:13      | there about [[Obsidian]], but a couple of weeks ago I was looking for, or I was trying to                    |
| 16:18      | fix my [[Stream Deck]] setup, and I've got a bunch of icons on there and they're related                     |
| 16:22      | to apps or podcasts and so on, but I needed just some generic icons that were relatively                 |
| 16:27      | uniform and I could have a whole bunch of them. And so I opened up [[NetNewsWire]], which                   |
| 16:32      | is my [[RSS]] app of choice, only to find that you have posted your [[SF Symbol Icon Generator\|Stream Deck icon generator]],              |
| 16:37      | which is a shortcut which generates [[Stream Deck]] icons, which did exactly what I needed                   |
| 16:42      | it to do. So my first question is, how are you reading my mind? And the second question                  |
| 16:46      | is, how did you come up with this?                                                                       |
| 16:48      | How am I reading your mind? That would be telling.                                                       |
| 16:52      | Oh, darn it.                                                                                             |
| 16:54      | As for how I came up with it, I was looking to generate some icons for the [[Stream Deck]]                   |
| 17:02      | myself and I'd found various sets online in the past and I found that the icons were                     |
| 17:11      | sometimes very jarring and a bit distracting when out of the corner of my eye. So people                 |
| 17:19      | are often very bold in their design styles when they're producing things. I wanted something             |
| 17:23      | a bit planer and I was looking through [[Toolbox Pro]] and was reading about some of the actions             |
| 17:32      | in there and spotted the one about generating icons and I thought, I wonder if I could generate          |
| 17:38      | some icons, but an entire set of icons that I could use the [[Stream Deck]] and so I started                 |
| 17:46      | tinkering about with that and trying things. And what I wanted to do was just have something             |
| 17:52      | quite simple but quite focused, much like the sort of icons that you'd get on buttons                    |
| 17:57      | in application toolbars, because to me, the [[Stream Deck]] is a dynamic version of that,                     |
| 18:02      | just like the touch bar on a Mac. And so I basically decided that what I wanted to do,                   |
| 18:09      | I wanted to try a few different themes and maybe for different profiles and things on                    |
| 18:15      | the [[Stream Deck]], so for different sets of buttons. And so I decided, well, I can pass                    |
| 18:20      | in a background colour and an icon colour to draw the icon in and I started playing around                 |
| 18:26      | with that and I had a few issues to begin with, with things timing out. It could just                    |
| 18:31      | be because my hardware is a little bit older and runs a bit slower, but I was able to work               |
| 18:36      | around that most of the time and I found that if I just actually just generated smaller                  |
| 18:40      | subsets, I could very quickly get through it without any issues and so I put together                    |
| 18:46      | this shortcut and it can generate based on the font awesome icons that are in there and                  |
| 18:51      | the SF icons that [[Apple]] produce and it just generates a full set of these icons with just                |
| 18:59      | two different colours. So you can pick colours that match most of mine. I have a nice gold                 |
| 19:04      | or a yellow with just a plain background and I find that less distracting than all these                 |
| 19:09      | pastel, glaring sort of buttons that you would have otherwise. And so I did that sometime                |
| 19:15      | last year and then I eventually got around to writing about it a few weeks ago.                          |
| 19:19      | I want to tell you that this post saved me so many hours because I too am a [[Stream Deck]]                  |
| 19:26      | user and I've really grown accustomed to the [[SF Symbols]], which is [[Apple]] has released its                 |
| 19:32      | own icon set, which they've done over the last year and a half and you get this big                      |
| 19:38      | list of these icons and the way I was using them was just the word, I shouldn't even be                  |
| 19:44      | allowed to be on automators because of the way I was using these. I would open them up                   |
| 19:49      | and I would just type one of them because it's a character set, it's not image files                     |
| 19:55      | and I would put one in like a word processor like pages, screenshot it and remove the background         |
| 20:00      | as PNG. It was like the worst way to do this. And then I read this post and I'm like, oh                 |
| 20:05      | yeah, you run one script and it exports all of the [[SF Symbols]] into icons of your colour                   |
| 20:10      | and I am a bozo. So I'm just saying it right here.                                                       |
| 20:14      | Well, I'm glad that you have also learned David. I spent an embarrassingly long time                     |
| 20:20      | just not doing icons on the [[Stream Deck ]]and then squinting at my [[Stream Deck]], looking                    |
| 20:25      | at titles because it seemed like a lot of effort to make icons. And so for some things                   |
| 20:31      | I did do icons, I've got an Automators icon, I've got nested folders icon and I've got                   |
| 20:35      | an iOS today icon, but the sneaky trick is I just stole the podcast.work for that because                |
| 20:41      | we already had it and so scale it down. It's small but it's recognisable, which is a good                |
| 20:48      | thing.                                                                                                   |
| 20:49      | And so now if I open up my Automators folder here on my [[Stream Deck]] because I have a recording           |
| 20:55      | profile then inside of my Automators folder, I have several things which are based thanks                |
| 21:02      | to Stephen on, I'm using the font awesome icons because I'm very familiar with those                     |
| 21:06      | for work. We use font awesome for a lot of things, but I also have some generic recording                |
| 21:10      | things which turn on a light that indicates I'm recording so that nobody else can see                    |
| 21:14      | it, but it's there. So if there's ever somebody else here, should the global pandemic ever               |
| 21:19      | end, then they would know that I'm recording. So it's a good habit to get into, I figure.                |
| 21:25      | Well, I'm glad you're both able to make use of it and I'll try and write about these things              |
| 21:30      | a little sooner. So walk through how you created this. Well, it very much was most of the hard           |
| 21:38      | work is done by the [[Toolbox Pro]] application. So I really did just start out with experimenting           |
| 21:47      | and trying to generate small groups of icons and it was very straightforward to do in [[Shortcuts]].         |
| 21:54      | It was literally just dropping in the right actions and then stepping through. And then                  |
| 21:59      | I kind of built out a little bit just to add some, a better way to select which sets that                |
| 22:06      | you wanted to produce and storing your colour preferences as well. That was it. It was,                   |
| 22:17      | as I say, all the hard work is really done by [[Toolbox Pro]].                                               |
| 22:20      | Yeah. So I can see here you're using a couple of different actions. So you're using global               |
| 22:26      | variables from [[Toolbox Pro]] as well as obviously the actual icon generation itself. Have you              |
| 22:35      | experimented with global variables in any other ways or are you just using [[Toolbox Pro]]                   |
| 22:38      | for that?                                                                                                |
| 22:39      | In that one particular action, sorry, one particular shortcut, I'm just, that's where                    |
| 22:44      | I'm using the global variables from [[Toolbox Pro]]. But in general, I would tend to use data                |
| 22:49      | jar. But the reason I chose to use [[Toolbox Pro]] in that particular one is that then there                 |
| 22:53      | was only one application dependency. So people would only need to have the one application               |
| 22:59      | installed because it could do both things. But generally, I tend to work more with persistent            |
| 23:07      | storage. So things that I want to reuse in [[Data Jar]], just because [[Simon Støvring\|Simon]] has provided                     |
| 23:14      | such a great way to modify and update the data in the app itself as well as via [[Shortcuts]].               |
| 23:22      | So I use global variables across a range of shortcuts that I use. And they're mainly                     |
| 23:28      | to do things like store preferences and personal non-sensitive information. So things like               |
| 23:38      | the name of my home Wi-Fi network so that it's a quick way that I can identify my current                |
| 23:44      | location if I'm at home and things like that.                                                            |
| 23:46      | What I don't use it for though is, I know a lot of people do, is storing lots of data.                   |
| 23:54      | I've seen a lot of people in the forums using it to download quantities of data about COVID              |
| 23:59      | and things like that. But I don't use it for anything like that. It's always just small                  |
| 24:03      | bits of data for me.                                                                                     |
| 24:05      | Yeah, me too. I have a bunch of little things, but I've not used it like a full array yet.               |
| 24:14      | Is there a problem with that? Has anybody run into issues putting big piles of data into                 |
| 24:18      | [[ Data Jar]]?                                                                                                |
| 24:19      | I don't think so. I think there's certainly a lot of discussion on the forums where people               |
| 24:25      | have managed to get things working just fine. I've never seen anyone kind of mention anything            |
| 24:29      | about hitting any limits.                                                                                |
| 24:31      | Well, I can tell you...                                                                                  |
| 24:34      | I have a shortcut that I run when I run my washing machine and another one that I run                    |
| 24:39      | when I run my tumble dryer. And these I run with the [[Pushcut]] automation service. So they                |
| 24:43      | automatically run with my tumble dryer, it's every five minutes, with my washing machine,                |
| 24:47      | it's every 10 minutes. And basically, it's just trying to track the energy levels so                     |
| 24:50      | that then when it finishes, it can tell me that it's finished and set a due reminder                     |
| 24:55      | to tell me to actually empty the drying thing, which works surprisingly well and has been                |
| 25:00      | very useful for the last past week when I've not been very well and my brain has done things             |
| 25:03      | like forget that I started the washing machine and then a reminder pops up on my phone, this             |
| 25:06      | is empty and then they're going, oh yeah, I actually did load that. Oh, well, thank                      |
| 25:11      | you past me for setting this up.                                                                         |
| 25:12      | So I'm actually, because I'm checking this data, I had to store it somewhere so that                     |
| 25:16      | I could run it again the next time. And I figured that I should throw it in [[Data Jar]] as well.            |
| 25:21      | And so I've got 887 keys on one of them and 513 keys on the other. And then I've got a                   |
| 25:26      | bunch of other data in here as well, like my workday log is 434 values right now and                     |
| 25:32      | stuff like that. So that, you know, I'm not running into limits with [[Data Jar]], but at                    |
| 25:36      | the same time, you know, if this data is available somewhere else, say for example, COVID data,          |
| 25:40      | that also probably changes because people find historical data, you know, tests get processed,           |
| 25:45      | you know, later than perhaps they could have been, or just because there's not been the                  |
| 25:49      | manpower to do so. So, you know, I would prefer to continue to get that from whatever the source         |
| 25:55      | is.                                                                                                      |
| 25:56      | Well, that's good to hear. There's just so much you can do with that app once you start                  |
| 25:59      | digging in on it. But I just keep finding myself using it to put very tiny bits of data                  |
| 26:05      | that I want to use across multiple shortcuts.                                                            |
| 26:07      | Yes, yeah, its very handy for that.                                                                       |
| 26:10      | Yeah. Anyway, an interesting thing I like about this [[SF Symbol Icon Generator\|Stream Deck icon generator]] is that                  |
| 26:16      | it is a Shortcut that feels more like a traditional Mac program. You know, you need to give it           |
| 26:22      | some time to run. It generates a lot of output. So often [[Shortcuts]] is about giving us a piece            |
| 26:27      | of information or a single file. But this thing, if you really light it up, can generate                 |
| 26:33      | thousands of files for you, which I love that, you know, people are pushing shortcuts in                 |
| 26:37      | that way. How many people have emailed you to say, hey, this thing froze up my iPhone                    |
| 26:42      | and didn't finish when it was really just running in the background?                                     |
| 26:47      | You're the first people to ever mention it. I've not had anyone there.                                   |
| 26:51      | I'm sure.                                                                                                |
| 26:52      | Anyone who mentioned anything about it to me. But I wouldn't be surprised.                               |
| 26:55      | You've broken it down into the subsections because of course, you experience those performance           |
| 26:59      | issues on your own devices. So, I mean, I've only generated subsets of actions myself just               |
| 27:04      | because I don't need all of them. And if I need more, then I'll go back and generate                     |
| 27:08      | them when I need them, which I think is the right approach for something like this. Otherwise,           |
| 27:11      | you end up with, what, hundreds of thousands of icons sitting in a folder that you're never              |
| 27:15      | using. It's not right.                                                                                   |
| 27:16      | Yeah. Yeah. So when it generates them, when it generates them, it puts them in [[iCloud]].                   |
| 27:21      | So I certainly don't keep them all in there. I shift them off pretty quick.                              |
| 27:25      | Yeah.                                                                                                    |
| 27:26      | But yeah.                                                                                                |
| 27:27      | Well, I wish they would make it so we could have more control over those saved destinations.             |
| 27:33      | You know, like one of the things you did here is you create a subfolder in [[iCloud]].                       |
| 27:37      | Could you imagine if you didn't? I mean, just your [[iCloud]] folder just be, well, it's              |
| 27:44      | iCloud/Shortcuts folder full of thousands of icons.                                                       |
| 27:49      | So Stephen, how did you get into [[Drafts]]?                                                                 |
| 27:52      | Wow.                                                                                                     |
| 27:54      | So I guess way back, I got an iPod Touch and I was looking for a way to just share things                |
| 28:12      | more easily. And one of the first versions of [[Drafts]], either one or two, I came across.                  |
| 28:19      | And I've kind of been using it ever since. And I've just been making more and more use                   |
| 28:24      | out of it with every version that's come out since then.                                                 |
| 28:29      | Was this the first generation of the iPod Touch?                                                         |
| 28:32      | I honestly can't remember.                                                                               |
| 28:34      | Okay.                                                                                                    |
| 28:35      | Because I was team first generation iPod Touch because I was in sixth form. I couldn't afford            |
| 28:40      | an iPhone at the time. So I had an iPod Touch and some dodgy, not really smart touchscreen               |
| 28:48      | phone, which was available on contract at a considerably lower price than the iPhone                     |
| 28:52      | until my second university when my dad said, I'm getting an iPhone. This means you have                  |
| 28:56      | to get one because otherwise you can't support me when I've got questions. He had a lot of               |
| 29:00      | questions, but I got an iPhone. So yeah, I think I don't know. I was certainly aware                     |
| 29:05      | of [[Drafts]] back then, but I didn't properly get on board the [[Drafts]] train for a little                    |
| 29:10      | while. But I'm very glad to be there now.                                                                |
| 29:13      | Yeah, I think it just came up on the App Store one day and it was like, oh, actually, I'm                |
| 29:20      | looking for something just like that and grabbed a copy right then.                                      |
| 29:25      | Yeah. So how did you start out using [[Drafts]] just as it was designed where you would write                |
| 29:29      | things and then fire them off or were you doing something fancy back then too?                           |
| 29:33      | No, no, no. I think it was more limited back then and that was kind of its purpose to be                 |
| 29:38      | able to just capture and then choose where you send it. So it was very much, I was using                 |
| 29:44      | it as stated and it was like, I'll capture this and then decide, is that going to be                     |
| 29:48      | a text message or is that going to be an email or do I want to save it off somewhere else?               |
| 29:55      | So it was very basic, but it met my needs perfectly.                                                     |
| 30:01      | And how would you say your usage of [[Drafts]] has evolved? Are you doing more with [[Drafts]]                  |
| 30:05      | nowadays?                                                                                                |
| 30:06      | Oh, no, not at all. Then again, maybe I am. Yeah. Yeah. So I spend a lot of time in [[Drafts]]              |
| 30:14      | these days, not for my work, but outside of work, I use it for capturing all sorts of                    |
| 30:21      | ideas, for planning, for tracking my shopping list, for keeping notes about things that                  |
| 30:29      | a lot of people might use [[Apple Notes]] for. I tend to use [[Drafts]] for some little bits                     |
| 30:35      | of reference information, maybe tracking daily logs for things if I need to for my GP, my                |
| 30:43      | doctor, things like that. And also for phone and creating stuff in [[Drafts]] as well. So I                  |
| 30:52      | spend a lot of time creating actions and things to help me do things a bit more easily and               |
| 30:58      | to help other people do things as well.                                                                  |
| 31:02      | This episode of Automators is brought to you by AirBuddy. When you open your AirPods and                 |
| 31:07      | your iPhone or your iPad, you get that battery smooth user interface that makes AirPods such             |
| 31:11      | a joy to use. And then when you open them near a Mac, you get nothing. When you get AirBuddy,            |
| 31:17      | you can get that same smooth experience and more with AirPods on your Mac. And with AirBuddy             |
| 31:23      | 2, this is taken to the next level with a refreshed user interface, improved reliability                 |
| 31:28      | and many new features.                                                                                   |
| 31:30      | I end up using my AirPods all the time. They're really easy and they're small, so I've pretty            |
| 31:35      | much always got them nearby. And I love how easy it is to use AirBuddy. You just open                    |
| 31:40      | your AirPods and that's pretty much it. There's nothing else to it.                                      |
| 31:45      | I love the fact that when I open it, I immediately see what the battery level is, both of the            |
| 31:49      | case and of the headphones. Yes, I know I see this on the iPhone, but when I'm sat                       |
| 31:53      | on my Mac, which let's be honest, in recent times, is more frequently than not. I want                   |
| 31:58      | to see it there too, because that's the screen I'm looking at.                                           |
| 32:02      | AirBuddy supports all versions of AirPods, including AirPods Pro and AirPods Max, and                    |
| 32:06      | all Beats products powered by the W1 or H1 chip. Simply connect and change listening                     |
| 32:11      | modes at the same time with a single gesture on the trackpad. Using AirBuddy's connection                |
| 32:16      | modes, you can automate system volume, audio input and listening mode, so that you're                    |
| 32:20      | ready to go into that video conference with just a single click.                                         |
| 32:24      | AirBuddy can also show you battery information for your iPhone, iPad or iPod touch and their             |
| 32:30      | accessories. And the battery's widget can be added to Notification Centre on macOS.                      |
| 32:35      | Only I kill a feature according to me. AirBuddy is sandbox and it doesn't require any kernel             |
| 32:40      | extensions to work. Plus, it's fully compatible with macOS Big Sur and [[Apple Silicon]], but                |
| 32:45      | it works on any Mac with Bluetooth low energy running macOS 10.14.6 or later. If you have                |
| 32:52      | AirPods and a Mac, you need AirBuddy. Go to airbuddy.app/automators to learn more.                       |
| 32:58      | The first 100 automated listeners to use that URL will get AirBuddy with a 20% discount.                 |
| 33:04      | Use AirBuddy.app.automators and be quick to get their 20% discount. Our thanks to AirBuddy               |
| 33:10      | for their support of this show and read the FM.                                                          |
| 33:14      | At what point did you start automating [[Drafts]] for your own use?                                          |
| 33:18      | So I think [[Drafts]] fall. I started spending more time working with some of the actions                    |
| 33:26      | and [[URL schemes]] in there and did little bits and pieces, but it was really when [[Greg Pierce\|Greg]], who                |
| 33:33      | develops [[Drafts]], brought out [[Drafts]] 5 that I really saw everything open up and really                    |
| 33:40      | started investing more time into it and exploring what it could do and the vast array of functionality   |
| 33:48      | it had. It became more like a platform than just an application of its own.                              |
| 33:55      | Sure. What were the types of problems you were trying to solve?                                          |
| 33:59      | Well, it wasn't necessarily that I had a problem. I just saw opportunities of how to use it.             |
| 34:07      | So things like the support for doing lists and things like that and being able to check                  |
| 34:14      | things off and then suddenly being able to do things as simple as, oh, actually, I can                   |
| 34:18      | just automatically reset that entire list with the touch of a button or I can, I'm writing               |
| 34:25      | some things for my blog and I'm writing them in [[Markdown]] and there's some tools that come                |
| 34:33      | with it, some actions that come with [[Drafts]] as standard that allow me to do various small                |
| 34:38      | things with [[Markdown]]. So to make something a heading, to make something a link. But for                  |
| 34:44      | my website, I maybe I'll always have something in a particular format. And so I was able                 |
| 34:48      | to customise that very quickly and just become more efficient at producing what I wanted                 |
| 34:53      | to get out of it. Yeah, I feel like that the thing about [[Drafts]] that people need to understand           |
| 34:58      | is even if you're a very basic in automation, if you're not a computer programmer, there's               |
| 35:05      | a lot of automation there that you can build yourself, I mean, with those actions and the                |
| 35:09      | steps. But if you want to go farther, there is seems like there's almost no limit to what                |
| 35:16      | you can do. Yeah, it feels like every day with [[Drafts]]. Just when you think you found                     |
| 35:22      | something, [[Greg Pierce\|Greg]] will go and add an entire new set of functionality and open a new door                   |
| 35:26      | that you never even realised you wanted to walk through. Yes, yeah. I remember when I                    |
| 35:32      | first started interested in back linking, and I wanted to add some backlinks to some of                  |
| 35:37      | my drafts, the messages I sent [[Greg Pierce\|Greg]] a message saying, Hey, you need to add this feature                  |
| 35:41      | because that's what you do, right? When you're a user, you keep complaining to the developer             |
| 35:46      | go on whining until they give you what you want. And he sent me two links immediately                  |
| 35:50      | that that users had already created a rich back linking system using [[Drafts]] based automation             |
| 35:56      | in the application. It just, you know, it was already there. The answer to my question                   |
| 36:00      | was someone had already built it. Yeah, yeah, you always have to search [the action directory for Drafts](https://directory.getdrafts.com).             |
| 36:05      | It's full of fantastic actions from so many people. Yes, it definitely is.                   |
| 36:12      | And the action directory started out as an action directory, didn't it? But then then                    |
| 36:18      | we went from just having actions and [[Drafts]] to action groups, I think we must have had                   |
| 36:22      | action groups in [[Drafts]] 4. I'm sure we did. But now there are workspaces as well, which                |
| 36:29      | can apply filters and settings to a draft list, which I think is a great thing to share.                 |
| 36:33      | Because if you create action groups, like, for example, Stephen, you've created, I believe                |
| 36:38      | there's what six in the TADpoLe collection. And that's, I'm sure not the end of the number               |
| 36:43      | of action groups that you've created, then being able to say, Oh, and download this workspace.           |
| 36:48      | And then whenever you tap this workspace, it automatically loads the right action groups                 |
| 36:51      | for you in the action group list in the action bar. That that was definitely something that              |
| 36:57      | made me go, huh, okay, I'm seeing even more possibilities here. And I'm way behind on                    |
| 37:03      | [[Drafts]] development. I know that Greg keeps releasing features. And every time I go to                    |
| 37:07      | look at them, it's like, Oh, wow, there's about 80,000 new features here. Gosh, it's                     |
| 37:11      | going to take a while. I'll just Google for the one that I need. There it is. Okay, good.                |
| 37:14      | I did not know this existed in [[Drafts]], but it is there. So then at some point, Stephen,                   |
| 37:19      | you started looking into, I can go in deeper down the well with [[Drafts]] automation. And                   |
| 37:25      | that ultimately led to the creation of the [[ThoughtAsylum Action Groups for Drafts\|ThoughtAsylum action group]]. And just take                    |
| 37:31      | a minute to kind of explain what that is. Yeah, sure. So it actually started out right                   |
| 37:38      | at the start of [[Drafts]] 5 being released. And when I started to see the opportunities                  |
| 37:45      | that it gave to actually create your own actions and things like that, and there were these              |
| 37:50      | action groups, I thought it would be a good idea if I created some and and shared them                   |
| 37:56      | out and maybe I could build a tool set of them. And I mean, it's the same idea as with                   |
| 38:03      | something like [[TextExpander]] where they have groups that you can share and I've shared                   |
| 38:06      | some some of mine of those in the past. And they're usually well received. And the community             |
| 38:11      | around [[Drafts]] are very positive. And I could see lots of things going on. And so I thought,              |
| 38:16      | well, I'd like to be a part of that. I'd like to contribute. And so I started building                   |
| 38:22      | out actions. And it was very random to begin with. And I wasn't very structured about it.                |
| 38:29      | I was just experimenting with things and putting things together. And over time, it was becoming         |
| 38:35      | a bigger and bigger thing. And it was taking longer and longer to put together. And I had                |
| 38:39      | lots of other things happening in my life. And it was it was kind of very much on on                     |
| 38:42      | the back burner. And it actually took me a couple of years to actually put everything                    |
| 38:47      | together to a point where I was happy to to share something of any significance and any                  |
| 38:55      | any any use that I thought this is kind of the level of quality that I wanted to give                    |
| 38:59      | out to people. But it was a very a long journey. And I rewrote lots of it along the way. But             |
| 39:07      | hopefully it's now at a point where where people can get get some real benefit from it.                     |
| 39:11      | Yeah, I see, I didn't realise it took that long, because one day it just seemed like                     |
| 39:15      | it appeared to me. I wasn't following it so close. But then it just like all the                         |
| 39:21      | There was nothing to follow. I was doing it all quietly.                                                 |
| 39:24      | Yeah. And it really is amazing. And, you know, it's it's just a toolset that anybody can                 |
| 39:31      | pick up and start using. I think this is a really great tool for people who are interested               |
| 39:35      | in this stuff that aren't down the rabbit hole as far as you are, because you've kind                    |
| 39:40      | of built it for people to use and modify. And one of the great things about [[Drafts]] is                    |
| 39:44      | once you download these actions, you can modify them to your heart's content on your device.             |
| 39:48      | Yeah. Yeah. So I mean, the idea with with the the say is because I keep updating it, I usually           |
| 39:54      | try and get an update out at least once a month, if not twice. And I'll add new actions,                 |
| 40:00      | new functionality. And the idea is that people just keep updating it and downloading it.                 |
| 40:07      | But they can then my advice is always to take a copy of things and create their own action               |
| 40:12      | groups and build things into that and modify it however they want. So even if it's just                  |
| 40:17      | a case of they want to use an action that does a very simple thing, I would recommend                    |
| 40:23      | that they create their own action and give it one step that calls the action in the action               |
| 40:29      | group. And they can give it their own icon, their own colour, assign a keyboard shortcut                  |
| 40:35      | for one. And then next time they update the thoughts on group stuff, it'll keep their                    |
| 40:41      | all their settings intact. So it kind of becomes this this tool chest, this reference                    |
| 40:46      | library, if you like, you can just dip into if you need to.                                              |
| 40:48      | Yeah, that makes a lot of sense. Because I mean, I know you have discovered a few things                 |
| 40:54      | about the [[Drafts]] action groups as you've been doing this, including the maximum number                   |
| 40:58      | of [[Drafts]] recommended in an action group, which I'm not sure the developer necessarily                   |
| 41:03      | knew of. But I spotted something at some point, where you split things up from one action                |
| 41:09      | group to six action groups. And when there's got to be a good reason behind this, and then               |
| 41:14      | I can't remember if I saw it in in the [[Drafts]] [[Slack]] or somewhere else where [[Greg Pierce\|Greg]] had said,               |
| 41:20      | you know, there are quite a few actions here, maybe we should split this up so that we don't             |
| 41:23      | run into a limit issue.                                                                                  |
| 41:26      | Yeah, it was [[Greg Pierce\|Greg]] actually contacted me on [Twitter](). And it seemed like a joke if I say                   |
| 41:32      | kind of recommended that like maybe maybe it should be split up a bit because ideally                    |
| 41:36      | I would have liked it to stay as just one group because then there's only one thing                      |
| 41:40      | for people to update one thing for people to download. But there were a few things about                 |
| 41:45      | it and it wasn't actually the number of actions in it, but it was actually just the size of              |
| 41:51      | all the files and everything that sits behind it was, it was starting to go over one megabyte            |
| 41:56      | which apparently is a sync limit in the iCloud sync system. And how it was still working,                |
| 42:05      | I don't know because I think it had gone a little bit over. But so I did some refactoring                |
| 42:11      | if you like and changed a few things. So one of the main things about the action groups                  |
| 42:18      | is it has a library that sits behind it. So it's just a big chunk of code that you can                   |
| 42:24      | reuse in your own actions as well. And that's all documented. And it was great. But I always             |
| 42:31      | kept a copy in one of the actions in the group. And that massively, that practically doubled             |
| 42:38      | the size of the group on its own. But in addition, I wanted to have lots of room to grow this            |
| 42:44      | over time. So I mean, I think it's gone from some like 300 actions to 500 actions in the                 |
| 42:49      | last six months or so. And so I can see it continuing to grow. And so it did make sense                  |
| 42:56      | to kind of take a few things out and split a few things up. So I took it and changed                     |
| 43:01      | it from this one single action group, after some discussion with some of the other other                 |
| 43:06      | [[Drafts]] users on the [[Drafts]] forum, and split it into one core group that kind of delivers                 |
| 43:13      | the core functionality, the library setup and everything else. And then these six other                  |
| 43:17      | groups that allow you to focus in on particular areas like writing or managing lists or managing         |
| 43:23      | drafts. So if somebody wanted to get started with this, so say for example, they want your               |
| 43:29      | tasks and lists action group, what would their steps be to get started? Assuming that they've            |
| 43:34      | not read the posts on your website. Just because, you know, somebody's curious, you know, and            |
| 43:40      | they don't necessarily have time to read, they just want to click some install buttons                   |
| 43:42      | and have everything work. What do they need to do? Honestly, the simplest thing to do                    |
| 43:47      | would just be to go to the [action directory for Drafts](https://directory.getdrafts.com), which is at [actions.getdrafts.com ](https://actions.getdrafts.com )               |
| 43:56      | and type in "ThoughtAsylum", and it will bring up all the groups and they will see and there's            |
| 44:01      | instructions on the pages for each of the action groups in there.                                        |
| 44:05      | That's very smart. Yes, I noticed that inside your core group, you also have links to get                |
| 44:10      | to the other ones as well, which is very smart. Because I have to confess, when I first started          |
| 44:16      | playing with this, I did not read any of it. And I did the typical user approach, which                  |
| 44:22      | is I'll just click the install button, and then I tried using the indent action and it                   |
| 44:25      | said, "did not find tad". And then they're going, oh, I think I should probably go back and                |
| 44:29      | read some instructions. So pro tip for people, make sure you install the core group. Because             |
| 44:34      | if you install the core group, then everything else works. If you do not install the core                |
| 44:37      | group, then you'll be there like me going, huh, why doesn't this work? I must have missed                |
| 44:41      | something. And I had missed something.                                                                   |
| 44:43      | I was going to say there's also an instructions action at the top of every group to tell you             |
| 44:47      | just that. Yes, that's where I actually found my mistake. So thank you very much for good                |
| 44:53      | documentation. That's okay. Well, remember, Stephen reads every manual front to back before              |
| 44:58      | he opens the box. So guys, we get to do the same with Stephen stuff. Well, hopefully it's                |
| 45:05      | a bit easier than that. But I do always recommend reading the manual first. Yes. Yeah, there             |
| 45:10      | is definitely some advantages to reading the manual. But at the same time, I, you know,                  |
| 45:15      | I did go back and read the manual on these before I did, but I deliberately didn't read                  |
| 45:20      | the manual for it was the tasks and list groups. I thought, you know, I'm just going to see,             |
| 45:24      | you know, give this a go, see what I can do. And without reading anything. And it was very               |
| 45:30      | self-explanatory once because I had the correction group installed, obviously, I installed that          |
| 45:33      | a couple of months ago. And I've had I've updated it several times since. Because, you know,             |
| 45:39      | we keep releasing updates, which is wonderful. So that was good. And, you know, I figured                |
| 45:43      | out and actually your indent action does exactly what I needed. I was going to create my own             |
| 45:47      | indent and outdent action. And now I've discovered that I do not need to do that. So thank you            |
| 45:52      | very much for saving me some time there because I was starting to go a little bit crazy that             |
| 45:58      | my tab key was not working the way I usually expect it to in a regular editor. So I'm used               |
| 46:05      | to a code, well, I'm used to a code editor where if you tap tab at any point on a line,                  |
| 46:09      | it will indent your code. And if you press shift, was it shift tab, I think it must be                   |
| 46:13      | shift tab that it should outdent, you know, whatever you're writing. And I use this all                  |
| 46:17      | the time when I'm writing lists and so on. And then [[Drafts]] wasn't working like that.                     |
| 46:21      | And it was breaking my brain a little bit. I've now assigned it to command plus the                      |
| 46:26      | square brackets, the left square bracket and the right square bracket, because that's the                |
| 46:29      | usual commands in most editors, something like [[BBEdit]] to indent and outdent a line.                     |
| 46:35      | But this is wonderful. So how do you, you know, which of these is your, your favourite                    |
| 46:40      | action group? If I'm allowed to ask that?                                                                |
| 46:43      | Well, I would say probably there is one called "Power User". I think that has some of the more             |
| 46:50      | interesting ones in from a, from a technical perspective, which is kind of the thing that                |
| 46:54      | really appeals to me. Yeah, that one has the most as well. I think writing has the most.                 |
| 47:02      | Let me see. I'm in [[Drafts]]. Does [[Drafts]] have a count of the number of actions in an action                |
| 47:07      | group inside of it? It does not. Okay. So somebody, David, you're on a [[BBEdit]] GT there.                 |
| 47:16      | But I know there are seven action groups here, 225 actions in the Writing group and 138 in               |
| 47:21      | the Power User group. Okay. So Writing is the biggest.                                                   |
| 47:25      | I have an action that tells me. Of course. Of course, what are some of the fun things                    |
| 47:33      | you do with the power user group? So I think, yeah, the thing that I use most around it                  |
| 47:39      | is there's right at the top of the group, there's a load of actions around making writing                |
| 47:47      | scripted things with [[Drafts]] easier. So within [[Drafts]] actions, you can have different blocks              |
| 47:55      | which can do or different steps, which can do different things. A lot of these are very                  |
| 48:01      | straightforward, very easy to use, just fill in a few fields. So this is what there's one                |
| 48:05      | that's insert text and you just fill in the text you want to insert every time and you                   |
| 48:10      | can use tokens so you could insert the date and that that's all very straightforward.                    |
| 48:15      | But then there's a couple which allow you to use scripting. Originally, there is one                     |
| 48:22      | called scripting and that's lets you access the [[JavaScript]] engine, if you like, that sits                |
| 48:28      | behind [[Drafts]] and allows all of this functionality to happen. It does now also support shell             |
| 48:35      | scripts and [[AppleScript\|AppleScripts]] on the Mac. But as far as possible, I always like to try and                   |
| 48:40      | keep to the [[JavaScript]] stuff so that it will run across platforms. And so that's the one                 |
| 48:47      | that was first there, which is why it's called scripting rather than JavaScripting or something,         |
| 48:51      | I guess. But I have lots of different functions in there that help me to build new actions               |
| 48:57      | because most of the actions I build are based around this library, which I've called "[[TADpoLe]]"                 |
| 49:04      |  which is just almost like a contraction filling in of "[[TADpoLe\|ThoughtAsylum Drafts Library]]".             |
| 49:12      | And so that's a reusable set of code. But a lot of that will get used. I'll develop                      |
| 49:19      | some of that in a [[Visual Studio Code\|Visual Studio editor]]. And if I'm on the go, I'll be tinkering with things              |
| 49:27      | actually in [[Drafts]] itself. And all these actions around scripting just help me speed up the              |
| 49:32      | process of testing and working with those functions and the scripts as I'm developing                    |
| 49:39      | them. And I use them all the time. And they're the ones that save me the most time. So they're           |
| 49:42      | probably my favourite.                                                                                    |
| 49:44      | Yeah. Yeah, that makes a lot of sense. Because of course, if you're scripting [[Drafts]], then               |
| 49:49      | you need maybe some assistance to do the scripting. I do wish that I'd figured out autocomplete          |
| 49:55      | for [[Drafts]]. I know that if you look in the scripting reference and theoretically you                     |
| 49:59      | can download those files and set it up, I just have never managed to actually get around                 |
| 50:03      | doing that. How much time would you say you've actually spent creating all these actions                 |
| 50:08      | and these action groups if you could give a ballpark guess? Or do you use time tracking                  |
| 50:12      | to tell you? Or is this something where if you tell us, then your family may be out to                   |
| 50:17      | get you?                                                                                                 |
| 50:18      | Yeah, my family may be out to get me if I admitted to that. I mean, it would be a week                   |
| 50:30      | some months of my life, I guess, solid, working on nothing else. But it's been over the course           |
| 50:37      | of several years. So at times it's taken a lot of time. I might spend several hours                      |
| 50:43      | and one day working on it, but it's never got in the way of anything.                                    |
| 50:48      | Well, that is always a good thing about automation. If it's assisting you rather than getting            |
| 50:53      | in the way and you're enjoying it, then personally, I see it as a great hobby, much like gaming          |
| 50:57      | or something where it might seem like it's not necessarily great upfront, but think of                   |
| 51:02      | how productive you're actually being and if you're enjoying yourself, then it's a great                  |
| 51:05      | way to relax. And I know David likes to create shortcuts for fun. I definitely like to script            |
| 51:09      | and create shortcuts and all kinds of automations for fun. So I guess we're in a very elite              |
| 51:15      | group of nerds because if we're enjoying automation and it's fun and we're achieving things, then        |
| 51:20      | of course, that is a wonderful thing.                                                                    |
| 51:22      | I almost think about it like people who like do the New York Times crossword puzzle or people            |
| 51:28      | who like to do Sudoku. I mean, to me, it's a puzzle. It's just a different kind of puzzle.               |
| 51:34      | And I get a little piece of cheese at the end if I make it work right. And there is                      |
| 51:39      | a future save time and automation to it for me. And that's great because it does save                    |
| 51:46      | me time and it pays off later. But the actual process of creating it, I find quite enjoyable             |
| 51:51      | and kind of a way to relax and take my mind off things.                                                  |
| 51:55      | I describe it as exactly the same. And to me, this is my version of doing crossword puzzles.             |
| 52:00      | But well, you know, I enjoy crossword puzzles as much as the next person, but creating solutions,          |
| 52:08      | creating automations, creating things that make me more productive or efficient, I get                   |
| 52:13      | some benefit out of the end of it. And I think sharing that expands that as well. So with                |
| 52:19      | automation, we're always looking for ways to speed things up, reduce the chance of something             |
| 52:27      | going wrong from human error to allow us to do things more quickly so that we have time                  |
| 52:32      | to do things that we otherwise wouldn't be able to fit into our day. But also, when you                  |
| 52:39      | share that out to people, then, you know, it just multiplies. So I may have spent months                 |
| 52:47      | working on this, but if I've saved years of people's time in aggregate, then it's easily                 |
| 52:54      | worthwhile.                                                                                              |
| 52:57      | This episode of The Automators is brought to you by DEVONthink. Get organised and unleash                |
| 53:01      | your creativity. Use the link DEVONtechnologies.com/Automators to get 10% off. DEVONthink          |
| 53:08      | is the flagship product from Devon Technologies. DEVONthink is the most professional document            |
| 53:14      | and information management application for the Mac. It's the only place for storing all                  |
| 53:19      | your documents, snippets, and bookmarks and working with them. The integrated AI assists                 |
| 53:25      | you with filing and searching, and there's an extensive search language with advanced                    |
| 53:29      | Boolean operators. DEVONthink features a flexible sync system that supports many cloud services          |
| 53:36      | or lets you synchronise over the local network, too, with everything securely encrypted. This            |
| 53:41      | gives you the choice for however syncing works best for you. It has smart rules and flexible             |
| 53:47      | reminders that let you automate all parts of your workflow and delegate boring, repeating                |
| 53:52      | tasks. Let DEVONthink automatically organise your data with rules that you define. DEVONthink's          |
| 53:58      | AppleScript dictionary is one of the largest on the Mac, and of course we love that here                 |
| 54:02      | on the Automators. There's no part of DEVONthink that can't be automated. Extend DEVONthink's            |
| 54:07      | functionality with your own commands by adding them to the script menu. Even templates can               |
| 54:12      | have scripts inside, and you can set up new documents with data from placeholders or inserted            |
| 54:18      | by your own AppleScript code. And of course, there's so much more, from an iOS companion                 |
| 54:24      | app to email archiving, scanning, or even an embedded web server for sharing your data                   |
| 54:29      | securely with your team. I am such a fan of DEVONthink version 3 that's now out. It's                    |
| 54:34      | a very powerful app, and it looks beautiful. As an automator, one of my favourite features                |
| 54:39      | in DEVONthink is the automation functions that are built right inside. All the ways                      |
| 54:44      | you can slice and dice your documents and information via automation are mind numbing.                   |
| 54:49      | There's just so many of them, and with just a little bit of work, you can make DEVONthink                |
| 54:54      | do your bidding for you. DEVONthink is for anyone who has a lot of data and needs some                   |
| 54:59      | help. You can get 10% off DEVONthink 3 or upgrade to it right now. Just go to devontechnologies.com/automators      |
| 55:06      | Once again, that's devontechnologies.com/automators for that 10% off. Our thanks |
| 55:14      | to DEVONtechnologies for their support of the automators and all of Relay FM.                            |
| 55:20      | Okay, Stephen, so we were talking about saving people's time, and I know you've got seven                |
| 55:23      | different action groups here, one of them being the core action group, which if you                      |
| 55:27      | want to use the other six, you'll need to have install. Can you just give us an overview                 |
| 55:31      | of these different action groups and the kinds of things that people are going to find in                |
| 55:34      | them?                                                                                                    |
| 55:35      | Yeah, sure. Starting with the core action group, that was the original action group that I               |
| 55:47      | started with, and it used to contain a lot more of these actions, but this is the one                    |
| 55:51      | that I split them out from. Within that group, there's one particular action that will set               |
| 55:58      | up and refresh the libraries that sit behind the action groups, and this is this tadpole                 |
| 56:06      | set of code, and that's what really drives everything, and that's kind of the most powerful              |
| 56:13      | bit of it. That's all documented online. People can make great use of that. In amongst that,             |
| 56:22      | you mentioned earlier, there's an action called tad, and I wanted a nice short, simple name,             |
| 56:29      | and if you include that action by just saying include action in another one, then it will                |
| 56:37      | immediately give you access to all the scripting that is available behind all these other actions.       |
| 56:45      | Apart from that, though, this action group is just kind of helper actions and links                      |
| 56:52      | to other things, so there's not a great deal of day-to-day end user functionality in that                |
| 56:58      | group anymore. They exist very much in these other groups. The other groups are there's                  |
| 57:04      | an Export, Import, and Share, Management, Power User, Tasks and Lists, one called Trove                  |
| 57:13      | and one called Writing. Writing is the one that people, I think, generally get the most                  |
| 57:21      | use out of, and it's all sorts of actions just to help you with creating content in                      |
| 57:26      | [[Drafts]]. I use a lot of the actions in there. I have a separate set of action groups that                 |
| 57:33      | I use for my blog, and they reference my most commonly used actions from the action group,               |
| 57:40      | so there's everything from removing content from lines to moving lines up and down without               |
| 57:47      | having to go into the arrange view, changing your selection, jumping around, inserting                   |
| 57:54      | dates in various formats, working with markdown, working with a variety of different formats,            |
| 58:00      | and looking at previews as well. Around that, I recently added some new preview functionality            |
| 58:10      | in there, and it will do things like work with [[Mermaid]], so allow you to have [[Mermaid]]                     |
| 58:18      | diagrams, which is a [[Markdown]], and HTML-compatible way of writing some lines of text which will           |
| 58:28      | then be transformed into a diagram. I've been using [[Obsidian\|Obsidian MD]] recently, and using [[Mermaid]]              |
| 58:38      | diagrams in there, that's supported in there, and I wanted to be able to have that in [[Drafts]]            |
| 58:42      | as well, so that when I'm sending stuff from [[Drafts]] to [[Obsidian]] that I could check it first,             |
| 58:48      | and so there's all sorts of things like that, all sorts of text modifiers, anything to do                |
| 58:52      | with actually writing content.                                                                           |
| 58:54      | I see that there's some here, which I know I've used before, or I've tried to create                     |
| 59:00      | before, or I've got my own versions of generally sorting selected lines or sorting a draft               |
| 59:06      | and things like that. And specifically for the writing group, this goes beyond writing                   |
| 59:11      | as the thought of I'm going to sit down and write an article. It's also useful for people                |
| 59:15      | writing lists and things like that as well, I can see, which of course is extremely useful,              |
| 59:21      | even though you do have a specific group for tasks and lists. I can see that there is indeed             |
| 59:27      | some overlap, but you seem to have made a very conscious effort and decision to split                    |
| 59:32      | things up, so you don't have the same action as far as I can tell into two different action              |
| 59:36      | groups.                                                                                                  |
| 59:37      | No, no, so everything should be unique. But the idea is that if you wanted to have an                    |
| 59:43      | action group to manage your tasks and lists, you could create that, and then you would                   |
| 59:47      | just reference or copy out the actions from the other action groups. As I said, I view                   |
| 59:54      | this as a toolbox that you can just dip into and take out of what you need and arrange                   |
| 59:59      | it however you like.                                                                                     |
| 01:00:00   | Yeah. Would you recommend them that people duplicate these actions, or would you suggest                 |
| 01:00:04   | that realistically creating an action and using the, what is it, include action step                     |
| 01:00:11   | be the better approach?                                                                                  |
| 01:00:12   | So I would suggest including on the basis that if there was a bug in one of the actions                  |
| 01:00:21   | and I fix it later on, then if you're including it, you will get the bug fix rather than existing        |
| 01:00:28   | it. However, if you want to take an action and do something a little bit different with                  |
| 01:00:33   | it, then I would suggest taking a copy of it and you amend the action and get it working                 |
| 01:00:38   | how you want. So I would be happy if anyone was using it in either way, but I think there                |
| 01:00:46   | are different occasions when you take the different approaches.                                          |
| 01:00:48   | Yeah. I mean, really, this is like installing a reference library of actions on your device              |
| 01:00:55   | that you can pull from anytime you want. And the thing I can't emphasise enough is you                   |
| 01:01:00   | don't have to be a programmer to plug into these. You know, he's done all the work for                   |
| 01:01:05   | you. And that's why I think it's such an amazing thing you've made.                                      |
| 01:01:11   | Thank you. That's very kind.                                                                             |
| 01:01:14   | So what are some of the things you've heard from people that have picked these tools up                  |
| 01:01:18   | and what kind of cool stuff are they building with your tools?                                           |
| 01:01:23   | So in terms of the feedback, it seems to have been so far universally very positive. People              |
| 01:01:30   | seem to appreciate the amount of effort that's gone in and the breadth of functionality that             |
| 01:01:35   | is kind of providing to people. In terms of what people have actually been building with                 |
| 01:01:42   | it, I haven't really heard anything. I would really like to see people take the underlying               |
| 01:01:48   | [[TADpoLe]] library and start creating things with that. I think there's only one action in the              |
| 01:01:53   | action directory that makes any use of it outside of the [[ThoughtAsylum Action Groups for Drafts\|ThoughtAsylum suite of action groups]].          |
| 01:02:01   | But I'd really love to see people make more use of that because it's all documented. There's             |
| 01:02:06   | loads of examples outside of the action group. There's an entire website just about the library          |
| 01:02:12   | that's actually set up in exactly the same way as [[Greg Pierce\|Greg]] himself, the scripting information for            |
| 01:02:20   | [[Drafts]] itself. So it's absolutely 100% compatible. If you can find your way around one, you can find     |
| 01:02:27   | your way around the other just as easily. Well, we'll make sure to include a link to that in the         |
| 01:02:31   | show notes for people because if you're there going, oh, some of this sounds really interesting,         |
| 01:02:38   | that's because it is. And also, we'll make sure that you've got all the links to that so that            |
| 01:02:44   | you can find it. And we've got links to, of course, all the things in the show notes. So                 |
| 01:02:48   | you just need to swipe around in your podcast player of choice until you find those or check             |
| 01:02:52   | the website, of course, which we'll tell you about at the end of the show.                               |
| 01:02:55   | Rose, what are some of the cool stuff you're doing with the ThoughtAsylum plugins?                      |
| 01:03:00   | I mean, honestly, I've just been creating my own action group of the core actions that I use             |
| 01:03:06   | and assigning keyboard shortcuts to them. And I'm using, so what I've done is I've created,              |
| 01:03:11   | I create my own action groups and [[Drafts]] for all sorts of things. So, and I assign them to               |
| 01:03:15   | workspaces so that when I open up, for example, I've got an inbox workspace, which is just               |
| 01:03:20   | everything that's untagged, then it has the Markdown action bar, which is just the default one           |
| 01:03:24   | from Agile Tortoise. And then it's got a custom processing action group, which is my personal            |
| 01:03:29   | processing action group. And I've got a whole bunch of different things in here. But the way             |
| 01:03:34   | I've been using the ThoughtAsylum ones primarily is I've got a hidden action group, not really          |
| 01:03:39   | hidden, I just don't really load it actively. But I've just assigned keyboard shortcuts to               |
| 01:03:45   | a whole bunch of these. And I'm using it for things like that. So for example,                           |
| 01:03:50   | the [[Taskpaper]] one, so I mean, I've got my own [[OF Taskpaper Action Group for Drafts\|Taskpaper action group for OmniFocus]]                             |
| 01:03:54   | things, which, you know, allows me to easily add due dates and so on. But toggling             |
| 01:04:00   | project lines, and, you know, and things like that, or making something into a task, or taking           |
| 01:04:08   | it away from being a task, I have straight up stolen Stephen's actions here. And I'm just using            |
| 01:04:14   | those. And I've got some keyboard shortcuts assigned for those as well, which works really,              |
| 01:04:18   | really well for me. So I'm primarily using it like that, where I'm just, you know,                       |
| 01:04:23   | including these actions elsewhere, with as keyboard shortcut, either with keyboard shortcuts,            |
| 01:04:27   | or just because, you know, I want, you know, three or four from this group and one or two from that      |
| 01:04:32   | group. So dictating a [[Markdown]] list is one that I was using earlier today. I realised I desperately      |
| 01:04:38   | needed to buy groceries, because I've not been anywhere in a week, because I thought, well,              |
| 01:04:42   | I had a slight fever and ear infection. And so I had to do a coronavirus test. So I had to wait          |
| 01:04:46   | for my results to come back. And the good news is I do not have the plague, which means I am             |
| 01:04:50   | allowed to go grocery shopping. But I needed a list. So I dictated a [[Markdown]] list. It was just          |
| 01:04:55   | so useful. So thank you, Stephen, for that, because there's just all sorts of things here.               |
| 01:05:00   | And if you just keep, you know, going through and having a look, I think actually, out of all of         |
| 01:05:05   | your action groups, Stephen, I think the Trove one might be my favourite, just because it's got           |
| 01:05:10   | what seems like an eclectic selection of different actions in here, you know, dictating,                 |
| 01:05:18   | you know, in various different formats. So a log entry, or a simple list, or a [[Markdown]] list,            |
| 01:05:22   | or a [[Taskpaper]] list. But it's really, really, really useful to me. So I'm very, very happy              |
| 01:05:27   | with all of these, because I'm using them in many ways. Yeah, you know, I'm kind of at the point now     |
| 01:05:33   | where I've got them all installed, and I'm just going through kind of cataloguing for my brain,           |
| 01:05:38   | what's possible. Because I think part of the thing you've created, it's just so big,                     |
| 01:05:43   | that a lot of, there's a lot of these, I wouldn't occur to me to think that, oh, I already have          |
| 01:05:47   | a tool that does that. And, and that's like a gating issue for me, like I want to build an               |
| 01:05:52   | automation. I don't have an hour to figure out how to do this. And I'm like, Oh, Stephen already         |
| 01:05:56   | did it. So now I can just plug into his automation and pick up where I left off. And I'm, it's like      |
| 01:06:02   | right now, it's like, imagine someone turning over the bucket of tinker toys and just touching each      |
| 01:06:07   | one of them to know what, what are the shapes available to me. That's kind of where I'm at.              |
| 01:06:12   | But it is amazing. There's a lot of tinker toys here, Stephen. Good. There'll be more to come.           |
| 01:06:20   | Well, what's your next [[Drafts]] action that you're currently working on, if we can have a sneak            |
| 01:06:24   | preview? Let me check. I have a draft with that in. So yeah, one of the things I want to take            |
| 01:06:34   | a look at is the preview action that I mentioned earlier actually supports font awesome as well.         |
| 01:06:42   | So you can include [[Font Awesome]] directly in there. However, it does that by linking to the               |
| 01:06:48   | [[Font Awesome]] libraries that are available online through one of the content distribution networks.       |
| 01:06:53   | What I'd like to do is to be able to get them onto people's devices. But having the refresh              |
| 01:07:02   | action that kind of sets everything up for you download several hundred or hundreds and hundreds         |
| 01:07:07   | of image files, as we were talking about earlier with the [[SF Symbol Icon Generator\|Stream Deck icon generation]],                   |
| 01:07:12   | isn't really that efficient. So I would like to see if I can figure out a way to download and            |
| 01:07:18   | expand a ZIP file. I've seen some [[JavaScript]] libraries for it. I've used one in the past.                |
| 01:07:24   | I don't know how well it will work with [[Drafts]], but that's on my list to take a look at.                 |
| 01:07:30   | That's probably the most interesting one. Well, I wish you good luck with that. And also,                |
| 01:07:35   | let me know when you're done, because I will be grabbing that one, because I have [[Font Awesome]]           |
| 01:07:39   | included. Obviously, right now, I'm not traveling as much, but previously, not last year, but the        |
| 01:07:45   | year before, I was on the road a good chunk. And a lot of that was with a very unreliable                |
| 01:07:51   | internet connection, which made doing things like previewing my blog post, which I was writing for       |
| 01:07:57   | my blog, with my blog's theme a little bit tricky, because I had my CSS file offline,                    |
| 01:08:03   | but obviously [[Font Awesome]] was then just randomly not showing things. Or sometimes it would show,        |
| 01:08:08   | it would manage to load one or two icons, and then the internet on the train, plane,                     |
| 01:08:12   | in the airport, et cetera, would just die. I would have one icon out of 20 that was supposed             |
| 01:08:18   | to be showing on the page. So that was tricky. So I've got that. And I think on the preview              |
| 01:08:23   | actions as well, because they're quite new. I'm still thinking of ways to build those out.               |
| 01:08:29   | There's also very similar to [[Mermaid]]. There's one called [[Chartist]] that allows you to build charts        |
| 01:08:35   | dynamically as well. And I want to take a look at that and see if I can do anything with that as         |
| 01:08:40   | well. I'd quite like to get that in there. Yeah, I've gotten deep down the mermaid rabbit hole           |
| 01:08:45   | lately, as all of us who are checking out [[Obsidian]]. Oh, yeah. And I didn't even know                     |
| 01:08:51   | [[Mermaid]] existed six months ago, and now I like dreaming [[Mermaid]]. So I can't wait to do that.             |
| 01:08:57   | Well, I diagram my network in [[Mermaid]], David. So we're definitely having fun with                        |
| 01:09:04   | nerdiness, because why wouldn't we? Well, it's not that hard, really. I mean,                            |
| 01:09:07   | if you can do [[Markdown]], you can do [[Mermaid]]. Not that hard. Yes. Yeah, you can. And there's               |
| 01:09:12   | plenty of flexibility in it. And I'm pleased to see that other people are finding ways to make           |
| 01:09:16   | this work in [[Drafts]], because [[Drafts]] is definitely my favourite app to open on my iPhone to just           |
| 01:09:22   | write things in and my iPad as well, to the point where, while I've got [[1Writer]] installed to          |
| 01:09:28   | access my [[Obsidian]] library, and, you know, I've got some other apps like [[IA Writer]] and things            |
| 01:09:32   | like that, too, if I want to write something, I'm always going to open [[Drafts]]. That is, you know,        |
| 01:09:37   | my brain now immediately goes, writing, that's [[Drafts]], to the point where I pretty much had to           |
| 01:09:42   | give up using [[BBEdit]] for anything other than editing code files on my Mac, because my brain             |
| 01:09:47   | just says, no, writing happens in [[Drafts]]. And so I'm very pleased that other people are also             |
| 01:09:52   | having so much fun with it. And I've also just found the action for toggling typewriter mode.            |
| 01:09:57   | So thank you, Stephen. I'll be using that. All right. Well, gang, I recommend all of you                 |
| 01:10:03   | automators listeners head over to [thoughtasylum.com](https://thoughtasylum.com), which is Stephen's blog. It's not just about        |
| 01:10:09   | nerdy draft stuff, as we talked about. He's got tons of cool automation and other geek adjacent          |
| 01:10:15   | content. I'm a subscriber now. I, you know, I just, like I said, you've just really impressed            |
| 01:10:23   | me with all the stuff you've made. And thank you for taking the time to not only build this stuff,       |
| 01:10:29   | but it does take extra time to make this in a way that it's shareable by others. And you                 |
| 01:10:34   | have taken that time, and we all appreciate it. Thank you. Anywhere else people should go                |
| 01:10:39   | to look for you, Stephen? So the only other place is really, I would suggest,                            |
| 01:10:43   | are the [[Drafts]] forum and the [automators forum](https://talk.automators.com). I'm fairly active on both of those.                       |
| 01:10:48   | Yes. And that's with the user name sylumer there. Did I pronounce that correctly?                           |
| 01:10:53   | Yes. It just comes from my website name. So it was a nice unique handle to use everywhere.               |
| 01:10:59   | Fair enough. All right. We are the Automators. We'll be back in a few weeks with, with a new             |
| 01:11:06   | automation show for you. But for now, everybody go check out [thoughtasylum](https://thoughtasylum.com) and Stephen's amazing         |
| 01:11:11   | work. We want to thank our sponsors today. That's our friends over at Microsoft,                         |
| 01:11:15   | the Intrazone, DEVONthink, and everybody. And we'll see you next time. Goodbye, everyone.                 |
