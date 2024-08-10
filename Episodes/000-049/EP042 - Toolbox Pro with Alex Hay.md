---
status: "complete"
fc-date:
  year: 2020
  month: 01
  day: 31
fc-category: "podcast"
podcast: "Automators"
published: 2020-01-31
duration: 4693
formattedduration: "01:18:13"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Alex Hay"]
notetype: "episode"
showpage: "http://relay.fm/automators/42"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators042.mp3"
episode: 42
title: "42: Toolbox Pro with Alex Hay"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Toolbox Pro developer (and documentary film editor) Alex Hay joins us to explain how he stumbled from scratching his own itch to making a powerful Siri Shortcuts utility app, Toolbox Pro.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Alex Hay]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 042 Discussion](https://talk.automators.fm/t/automators-42-toobox-pro-with-alex-hay/6531)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Multiply your team’s productivity.
- [[Zapier (Sponsor)|Zapier]] - The easiest way to automate your work.
- [[Kensington (Sponsor)|Kensington]] - The Professionals Choice. Find the right docking solutions for your organisation today.

# Show Notes
- [Toolbox Pro](https://toolboxpro.app/)
- [Toolbox Pro on Twitter](https://twitter.com/toolboxproapp)
- [Alex Hay on Twitter](https://twitter.com/mralexhay)
- [Multi Instagram Post](https://www.icloud.com/shortcuts/f2ab65dce7a24eeeb093bdf69dc02830)
- [Introducing MusicBot: The All-in-One Apple Music Assistant, Powered by Shortcuts - MacStories](https://www.macstories.net/ios/introducing-musicbot-the-all-in-one-apple-music-assistant-powered-by-shortcuts/)
- [Burst Slice - Prolost Store](https://proloststore.com/products/burstslice)
- [Pano Man - Prolost Store](https://proloststore.com/products/panoman)

# Transcription
  
| Time Index | Transcription                                                                                               |
|:---------- |:----------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators, I'm David Sparks and joined by my co-host, Rosemary Orchard.                         |
| 00:06      | And this is the Automators where we talk about how to automate your technology to do your                   |
| 00:11      | bidding for you.                                                                                            |
| 00:12      | Hello, Rosemary Orchard.                                                                                    |
| 00:13      | Hello, David Sparks.                                                                                        |
| 00:14      | How are you?                                                                                                |
| 00:15      | I am excited.                                                                                               |
| 00:16      | Today, we've got a guest on the show, not just any old guest, but a developer friend                        |
| 00:22      | that is making automation easier for everyone.                                                              |
| 00:25      | Welcome to the show, Alex Hay.                                                                              |
| 00:26      | Hi, thank you so much for having me on.                                                                     |
| 00:28      | Oh, no worries at all.                                                                                      |
| 00:30      | Alex, if you didn't know, is the developer of [[Toolbox Pro]].                                              |
| 00:35      | So and we're going to talk about [[Toolbox Pro]], but this isn't a hour long commercial for                 |
| 00:39      | his app, but we will talk about it.                                                                         |
| 00:41      | So what [[Toolbox Pro]] does, though, is it takes a lot of features that we would like to have              |
| 00:47      | in [[Shortcuts]] and it adds them to [[Shortcuts]].                                                         |
| 00:50      | It's an ingenious app that uses the abilities that [[Shortcuts]] gives us to tie to apps to add             |
| 00:57      | new features.                                                                                               |
| 00:58      | I was just telling Alex before we got started, like, I never thought that an independent                    |
| 01:04      | app developer would be able to add face detection to my [[Shortcuts]] list of tools, but man, you           |
| 01:10      | did it.                                                                                                     |
| 01:11      | Yeah.                                                                                                       |
| 01:12      | Yeah, I guess I did.                                                                                        |
| 01:14      | Yes, you did.                                                                                               |
| 01:16      | And you didn't just do that.                                                                                |
| 01:17      | I believe you were saying a while ago, it might have been on [[Twitter]], that you have officially          |
| 01:22      | discovered that there is a limit to the number of [[Shortcuts]] actions that you can, I think               |
| 01:27      | the technical word according to Apple is donate, which I have issues with, but that's beside                |
| 01:31      | the point.                                                                                                  |
| 01:32      | So you've run into that limit because you have so many actions in your app, right?                          |
| 01:35      | Yeah, unfortunately, I have, which isn't ideal.                                                             |
| 01:39      | Yeah, I think when I launched the app, I had about 50 actions in it, I think.                               |
| 01:45      | And I've sort of gradually been adding more and more as I go along.                                         |
| 01:49      | And the last update that I submitted came back with an automatic rejection saying you                       |
| 01:55      | can't have over a hundred [[Shortcuts]] actions, so I'm currently trying to work out a way                  |
| 02:01      | around that.                                                                                                |
| 02:02      | Well, I think that's a good problem to have rather than a bad problem to have because                       |
| 02:05      | that means that you've got a lot of really cool stuff for us to play with today.                            |
| 02:09      | Hopefully, yeah.                                                                                            |
| 02:10      | Hopefully that's the case.                                                                                  |
| 02:11      | That's kind of a weird rule, though.                                                                        |
| 02:13      | I mean, they definitely want developers using [[Shortcuts]].                                                |
| 02:17      | So why put an artificial limit on it?                                                                       |
| 02:19      | Yeah, I mean, I don't know whether that's a technical limitation or whether when they                       |
| 02:24      | were sort of building the system, someone just put a sort of arbitrary limit just saying,                   |
| 02:29      | oh, I guess no one's ever going to add more than a hundred actions to one app.                              |
| 02:35      | So I'm not sure.                                                                                            |
| 02:36      | But hopefully that will be fixed in the future, we'll see.                                                  |
| 02:38      | Apple, if you're listening, add a couple of zeros after that for us.                                        |
| 02:41      | Yeah.                                                                                                       |
| 02:42      | And it's not like 128 or 256, it's a hundred.                                                               |
| 02:46      | So I suspect it's just the number somebody put in there.                                                    |
| 02:49      | Yeah, I've got my fingers crossed for that.                                                                 |
| 02:51      | Add an integer, please.                                                                                     |
| 02:52      | We just want one more.                                                                                      |
| 02:53      | Well, a thousand is OK.                                                                                     |
| 02:56      | We'll be OK with a thousand as a limit.                                                                     |
| 02:59      | I mean, I would also go, if you're only going to type one number, type a nine at the beginning.             |
| 03:03      | So 9,100.                                                                                                   |
| 03:04      | That's a nice number.                                                                                       |
| 03:05      | There you go.                                                                                               |
| 03:06      | Absolutely.                                                                                                 |
| 03:07      | I'd take that.                                                                                              |
| 03:08      | That's a lot of work, though.                                                                               |
| 03:09      | That would keep me going for a few years.                                                                   |
| 03:10      | Well, I wouldn't necessarily set it as a challenge for you, but there's a lot of different actions          |
| 03:15      | here already, which are pretty awesome.                                                                     |
| 03:17      | So when we were at [[WWDC]] and we saw the big changes, [[Shortcuts]], and it seems to me like              |
| 03:25      | Apple really doesn't want [[URL schemes]] to become the lingua franca of applications.                      |
| 03:32      | I think that's a fair assumption.                                                                           |
| 03:33      | I'm sure there's security issues, and it's also very user-unfriendly unless you're a                        |
| 03:38      | nerd that listens to the Automators podcast.                                                                |
| 03:42      | But they created this framework where people can take information out of their app.                         |
| 03:48      | They can pass it to another app.                                                                            |
| 03:49      | They can get information back.                                                                              |
| 03:50      | So suddenly, we've got apps that can talk to each other, which is one of the reasons                        |
| 03:54      | why Rosemary and I are so excited about it.                                                                 |
| 03:57      | But I have to admit, it didn't occur to me the idea of a headless kind of app where,                        |
| 04:02      | just like we have apps that add a keyboard to your iPhone, now we have apps that add                        |
| 04:08      | shortcut actions to your, and the name, by the way, Alex, is brilliant,                                     |
| 04:12      | "Toolbox".                                                                                                  |
| 04:13      | So we've got all these extra ones, like I mentioned earlier in the show, one of them                        |
| 04:18      | is the ability to look at an image and figure out if there's a face on it.                                  |
| 04:22      | But you can authenticate through finger or [[Face ID]].                                                         |
| 04:25      | There's just a whole bunch of cool stuff you can do with your app.                                          |
| 04:30      | And we are going to get back around to that I want to talk about later.                                     |
| 04:33      | But Alex, how did you get started with automation?                                                          |
| 04:35      | Well, actually, I'm not a app developer by trade.                                                           |
| 04:40      | That's very much a sort of hobby that I do on the side.                                                     |
| 04:45      | Starting with [[Toolbox Pro]], actually, is my first app.                                                   |
| 04:48      | Professionally I'm a documentary editor.                                                                    |
| 04:51      | So 10 hours a day, I'll be in an edit suite stitching together hundreds of hours of footage                 |
| 04:55      | to make TV programmes.                                                                                        |
| 04:58      | But originally, when I started out about 10 years ago, I was an assistant editor.                           |
| 05:04      | So I was wrangling all that sort of data and all that footage that came in from directors.                  |
| 05:10      | And it was just that sort of point in the TV industry when we were moving from tape                         |
| 05:14      | footage to digital footage.                                                                                 |
| 05:17      | So we suddenly went from these sort of experienced directors who used to handling tapes and just            |
| 05:22      | writing their sort of name and a tape number on the front to suddenly having to ingest                      |
| 05:28      | these cards full of like thousands and thousands of clips.                                                  |
| 05:32      | So you get all sorts of mistakes when they'd hand you all this media to ingest.                             |
| 05:37      | And I sort of very quickly discovered that automation was my friend.                                        |
| 05:41      | I'd be sort of renaming all the clips to sort of match and I'd be using what was it called?                 |
| 05:49      | [[File Renamer]].                                                                                               |
| 05:50      | Yeah, [[File Renamer]].                                                                                         |
| 05:51      | I'd be using [[AppleScript]].                                                                               |
| 05:52      | No [[Hazel]], I'm guessing.                                                                                 |
| 05:53      | Yeah, [[Hazel]], all that sort of stuff.                                                                    |
| 05:56      | So that really got my eyes open to the world of automation.                                                 |
| 06:00      | Yeah.                                                                                                       |
| 06:01      | I bet.                                                                                                      |
| 06:02      | I mean, anytime you're working with large volumes of files, not only is automation                          |
| 06:06      | faster, it's more accurate and that's just a great scenario for it.                                         |
| 06:13      | Absolutely.                                                                                                 |
| 06:14      | You only rename a hundred files once by hand and then you find a different way quickly                      |
| 06:19      | after that.                                                                                                 |
| 06:20      | Yeah, exactly.                                                                                              |
| 06:21      | Well, if you're smart and you want to spend your time doing other things, some renaming                     |
| 06:24      | files, then yes, yes, you do.                                                                               |
| 06:28      | It's an easy place to get started with automation.                                                          |
| 06:30      | I know that that's one of the things that a lot of people realise quite quickly that                        |
| 06:34      | they spend a lot of time naming files and it's boring and you always mess something                         |
| 06:39      | up when you do it by hand, so if you can automate it, yeah, it's a great place to get started.              |
| 06:44      | So what tools, I guess you said you were using [[File Renamer]] for that, but also were you doing               |
| 06:48      | file organisation at the time, like moving them to different folders and things?                            |
| 06:52      | Yeah, I mean, I think I was using [[AppleScript]] to sort of make backups and I think there's               |
| 06:58      | loads of tools now that sort of do it much better than what I was using in the early                        |
| 07:02      | days.                                                                                                       |
| 07:03      | But back then it was all a bit, it's a bit [[Heath Robinson]], I was sort of coding little                      |
| 07:08      | bits and pieces to sort of help me out, I suppose.                                                          |
| 07:10      | Yeah, no, but it makes sense and once you have the tools, that's a great excuse to use                      |
| 07:16      | them.                                                                                                       |
| 07:17      | But now that today we're talking about an app on iOS, were you a big automator in iOS                       |
| 07:22      | before iOS 13?                                                                                              |
| 07:24      | Yeah, I think I was quite late to the automation party on iOS.                                              |
| 07:30      | I'd sort of use...                                                                                          |
| 07:31      | Okay, so it was Apple.                                                                                      |
| 07:32      | Yeah, they certainly were.                                                                                  |
| 07:34      | I hadn't really used workflow a huge amount.                                                                |
| 07:39      | So when it became shortcuts, I started hearing about it a lot more and that's when I really                 |
| 07:44      | started getting interested in it and sort of playing around with it and really starting                     |
| 07:47      | to see what sort of power it's got and what it can do and that's what really got my mind                    |
| 07:53      | racing about what it can't do and what I wish it could do.                                                  |
| 07:57      | So that's sort of really what got me into it, I think.                                                      |
| 08:00      | Yes, and then, did you see the keynote and immediately go, I can do this with Toolbox                       |
| 08:06      | Pro or was it an idea that sat around for a while and then percolated before you really                     |
| 08:10      | could seize it and run with it?                                                                             |
| 08:11      | Yeah, I mean, I think when I heard that Apple were putting it as a first party app, my mind                 |
| 08:20      | was sort of boggling at the possibilities of what they could be adding because I think                      |
| 08:26      | shortcuts is an incredible tool and it makes it really easy for people who don't know how                   |
| 08:31      | to code to sort of build things that really help them with their sort of professional                       |
| 08:35      | work or with home stuff.                                                                                    |
| 08:38      | But I think there's everyone who sort of used shortcuts has probably searched for an action                 |
| 08:43      | that they expect to be there that isn't there and so I had a sort of shopping list of tools                 |
| 08:48      | that I was hoping they were going to add in [[WWDC]] and I think they probably gave us something                |
| 08:53      | better in that they sort of opened up parameters to developers and let us sort of build really              |
| 08:59      | full-featured tools for ourselves.                                                                          |
| 09:01      | It's really interesting because if you look at iOS historically, I mean, they clearly                       |
| 09:06      | were not interested in automation when they started and really the original sin of iOS                      |
| 09:11      | is that they didn't put in like an Apple events type programming framework.                                 |
| 09:17      | You know, on the Mac, everything that happens on your computer is an Apple event and once                   |
| 09:21      | you've got access to the event, then you can manipulate it, which makes automation on the                   |
| 09:25      | Mac if you know what you're doing amazing and that wasn't built into iOS.                                   |
| 09:34      | So then they had this change of heart and now we're catching up and you're exactly right.                   |
| 09:41      | Normal users can't access something like an Apple event to create their automation.                         |
| 09:47      | So we need Apple to give us the tools through shortcuts and we need developers like you                     |
| 09:52      | to build the tools that aren't already there because if you don't have the tool, you're                     |
| 09:57      | not going to magically run an [[AppleScript]] on an iPhone to create an automation.                         |
| 10:02      | It's not possible.                                                                                          |
| 10:04      | So it really is nice.                                                                                       |
| 10:09      | I feel like we started a little behind but now suddenly there's these amazing tools showing                 |
| 10:13      | up.                                                                                                         |
| 10:14      | Yeah, I mean, I think it's a really exciting time to be a [[Shortcuts]] user because what they've               |
| 10:18      | really done is sort of open up the platform and you're starting to get all these developers                 |
| 10:23      | like me who are sort of seeing opportunities to really open it out to users and let them                    |
| 10:28      | do so much more with [[Shortcuts]] that they wouldn't have been able to do before and it just lets              |
| 10:33      | people create more and more powerful tools without having to know any code and that's                       |
| 10:38      | what really excites me, I think.                                                                            |
| 10:39      | Now, I definitely want to get back to [[Toolbox Pro]] but when you tell me you're an editor                 |
| 10:44      | and you're still dealing with lots of files, how are you dealing today with those files                     |
| 10:50      | as they come in?                                                                                            |
| 10:51      | I'm sure there's a lot of people out there thinking about automating files.                                 |
| 10:53      | Or have you cheated and automated it with an assistant editor of your own?                                  |
| 10:57      | Yeah, unfortunately, I barely touch that footage anymore because I tend to be working in places             |
| 11:03      | that they take all the footage in for me and I just deal with telling the story which is                    |
| 11:08      | much better.                                                                                                |
| 11:09      | Unfortunately, I tend to work on these sort of PC machines, I couldn't even tell you what                   |
| 11:17      | version of Windows it is or whatever because I'm just on [[Avid Media Composer]], it's a software               |
| 11:21      | I use.                                                                                                      |
| 11:22      | Sure.                                                                                                       |
| 11:23      | But they tend to air gap them so they won't be connected to the internet, you can't plug                    |
| 11:27      | in your USB keys because they want to keep them sort of really locked down.                                 |
| 11:32      | Which makes automating it pretty hard because I can't sort of stick my USB in with all my                   |
| 11:37      | little tools to do what I want to, unfortunately.                                                           |
| 11:41      | Yeah, that's not fun.                                                                                       |
| 11:43      | Are you automating things at home then?                                                                     |
| 11:45      | It seems you don't have an automation outlet at work.                                                       |
| 11:47      | Well, I mean, I definitely, when I've been cutting stuff on my laptop, I'll have [[Keyboard Maestro]]                   |
| 11:54      | shortcuts or actions rather that will, you know, with one keystroke do 10 keystrokes                |
| 12:03      | and that really speeds things up, that's probably the most useful I think.                                  |
| 12:06      | Yeah, I do something very similar with [[ScreenFlow]], I use [[ScreenFlow]] for screen casting                      |
| 12:11      | and there's a bunch of stuff in there that I can do very fast with a keyboard, but at                       |
| 12:15      | some point you realise, wait a second, I'm doing the exact same thing with the exact                        |
| 12:19      | same keys, even if it's just four or five keys, why not put it on a [[Keyboard Maestro]]                        |
| 12:25      | script?                                                                                                     |
| 12:26      | Yes, definitely.                                                                                            |
| 12:27      | I keep doing the same thing in a [[ScreenFlow]], which is select something and then do a records                |
| 12:31      | elite.                                                                                                      |
| 12:32      | However, I've not yet figured out how to automate the selection.                                            |
| 12:35      | So if somebody can write a macro for me that automatically figures out exactly which part                   |
| 12:38      | of the script that I mean to cut, that would be really great.                                               |
| 12:42      | But I'm guessing you don't have an automation to solve that for me, Alex.                                   |
| 12:46      | Unfortunately not at the moment, but I'll add it to my growing list.                                        |
| 12:49      | Yeah, you got to figure out where you're going to make the cut, but then after that                         |
| 12:52      | you can automate it.                                                                                        |
| 12:53      | Yeah.                                                                                                       |
| 12:54      | Well, after you figured it out, then it's only to command backspace and that's it.                          |
| 12:58      | So I'm not sure it's worth automating that just yet, but I'll see what happens.                             |
| 13:04      | Well, wow, now you've got my head spinning, Rosemary.                                                       |
| 13:07      | I'm thinking maybe I would do an analysis of the waveform.                                                  |
| 13:10      | That would be...                                                                                            |
| 13:11      | Anyway.                                                                                                     |
| 13:12      | Yeah.                                                                                                       |
| 13:13      | Yeah.                                                                                                       |
| 13:14      | All right.                                                                                                  |
| 13:15      | Anyway.                                                                                                     |
| 13:16      | So Apple comes out with [[Shortcuts]] and they add this mechanism for developers to much                        |
| 13:26      | more easily share data between apps.                                                                        |
| 13:29      | And I don't know if you were on the beta or you waited until the...                                         |
| 13:32      | I know you were on the beta because I saw your app coming out in the beta, but at what                      |
| 13:36      | point do you say, okay, not only do they not have the tool that I want, I think I'll go                     |
| 13:41      | ahead and make it.                                                                                          |
| 13:42      | Well, that was also in [[WWDC]].                                                                                |
| 13:45      | That sort of changed my direction a lot, I think, because I'd sort of opened [[Xcode]] probably             |
| 13:51      | a couple of years ago and had sort of been scared off, I think, because [[UIKit]] is like                       |
| 13:56      | quite a lot to get your head around to build apps.                                                          |
| 13:59      | Yeah.                                                                                                       |
| 14:00      | But on the stage at [[WWDC]], they introduced [[SwiftUI]], which is a sort of new way of creating                   |
| 14:06      | apps on iOS devices, and Macs, actually.                                                                    |
| 14:11      | And it's much more user-friendly, it's much more visual, and I saw that and I thought,                      |
| 14:16      | oh my God, even I could probably do that if I put my hand to it.                                            |
| 14:19      | Well, especially because [[Toolbox Pro]] isn't a heavy UI app, you know?                                    |
| 14:24      | No, exactly.                                                                                                |
| 14:25      | And it uses all sort of very normal iOS elements, it's not a lot of sort of custom UI in there.             |
| 14:34      | So really, I thought, oh, you know, that's something I should be able to do.                                |
| 14:37      | And then so after I'd seen the shortcuts, and after I'd seen [[SwiftUI]], I think I watched                     |
| 14:42      | one of the [[WWDC]] videos where they were talking about improvements to the vision framework,                  |
| 14:48      | and the vision framework is one of Apple's frameworks that does image recognition.                          |
| 14:53      | So they use that for, so the example you were talking about earlier with the detecting faces,               |
| 14:59      | that's part of the vision framework.                                                                        |
| 15:01      | It's also the obstacle character recognition, so the [[OCR]], which pulls text out of images,                   |
| 15:06      | that's part of the vision framework.                                                                        |
| 15:08      | And they were showing examples of that, and it all looked pretty simple to implement.                       |
| 15:14      | So I thought at the time.                                                                                   |
| 15:17      | And after seeing sort of those three things together, I sort of thought, oh, I'd love                       |
| 15:22      | to have a sort of native [[OCR]] action inside of shortcuts, that feels like something that                     |
| 15:27      | should already be there, that would be super useful.                                                        |
| 15:31      | And that was my sort of starting point for creating my first action or my first tool within                 |
| 15:37      | [[Toolbox Pro]].                                                                                            |
| 15:39      | And it probably took two weeks of sort of fiddling around and failing and trying to work                    |
| 15:46      | out how it all worked before I finally had this sort of really, really rough prototype                      |
| 15:51      | that you could pass an image into the action, and then out the output of the action would                   |
| 15:56      | spit out the text in the image, and I thought, wow, that's got some promise to it.                          |
| 16:01      | And then I started thinking about all the other tools that could be built that could                        |
| 16:06      | improve [[Shortcuts]].                                                                                          |
| 16:07      | So now if you're listening and you didn't catch that, we've got an action in [[Toolbox Pro]]                       |
| 16:12      | where you can use a shortcut, pass it an image, and then it hands you back the text                     |
| 16:18      | that was in the image.                                                                                      |
| 16:19      | And that's a feature that we've seen in some apps over the years.                                           |
| 16:23      | Like I remember when [[Evernote]] first came out, that was a big selling point that you'd put                   |
| 16:28      | your pictures up there and it would give you the text out of them.                                          |
| 16:31      | And this is being done on your iPhone with no cloud resources through shortcuts, where                      |
| 16:37      | you're literally building your own app using the Apple API that Alex has conveniently added                 |
| 16:42      | to [[Shortcuts]] for us.                                                                                        |
| 16:45      | It's really impressive what you did.                                                                        |
| 16:48      | Cool.                                                                                                       |
| 16:49      | I'm glad you like it.                                                                                       |
| 16:50      | I mean, that's a tool that I use all the time.                                                              |
| 16:52      | So I really built it for myself and I'm glad that other people can find use in it as well.                  |
| 16:57      | I feel like I have a pretty good window into how you use your iPhone just based on the                      |
| 17:01      | shortcuts that get added to this.                                                                           |
| 17:03      | I feel like I think you use [[Apple Reminders\|Reminders]] because it's like I can see all the problem areas                     |
| 17:09      | Alex has run into, he has created shortcuts to fix them.                                                    |
| 17:13      | Yes.                                                                                                        |
| 17:14      | That was something after one of our podcasts a couple of months ago, and I mentioned that                   |
| 17:19      | you could use Scriptable, oh, it's our packing list, automators episode, David, where I mentioned           |
| 17:25      | that you could use Scriptable to create a [[Apple Reminders\|Reminders]] list.                                                   |
| 17:28      | If it didn't exist, Alex, I think you mentioned me on [[Twitter]] and said, you know that that's            |
| 17:34      | an action in [[Toolbox Pro]] as well, and then they're going, well, that's a darn sight                     |
| 17:37      | easier than writing a [[Scriptable]] action.                                                                    |
| 17:39      | Of course, it's [[Scriptable]] action, I think is only two lines of script, but if you can                      |
| 17:44      | add it as a [[Shortcuts]] action, then that's even more user friendly and you can hand off the                   |
| 17:48      | really complex logic to something like [[Scriptable]] when you need to.                                         |
| 17:52      | And it's just so much more accessible.                                                                      |
| 17:54      | Yeah.                                                                                                       |
| 17:55      | I mean, if you can just drag and drop a single action and toggle a couple of buttons and                    |
| 18:00      | just stick that inside a larger shortcut, I mean, that gives you a lot of power without                     |
| 18:06      | having a lot of complexity, which I think is what is great about [[Shortcuts]] in the first                     |
| 18:09      | place, really.                                                                                              |
| 18:10      | Indeed.                                                                                                     |
| 18:11      | I feel like where the [[Apple Reminders\|Reminders]] team, you know, took their lunch break and didn't finish                    |
| 18:15      | their shortcut integration, you picked up the slack.                                                        |
| 18:18      | I mean, there's several [[Apple Reminders\|Reminders]] shortcuts that seemed like they should have shipped                       |
| 18:22      | with it, but they didn't.                                                                                   |
| 18:25      | And thank you for making this.                                                                              |
| 18:26      | Yeah.                                                                                                       |
| 18:27      | I think everyone is so used to having quite sort of limited automation on iOS that as soon                  |
| 18:33      | as you add just like a couple of things that you can do with sort of native apps that you                   |
| 18:38      | couldn't do before inside shortcuts, people like react really well to it because it's                       |
| 18:43      | like our internal programming is we only get that from Apple.                                               |
| 18:47      | I mean, the only people who are going to add [[Apple Reminders\|Reminders]] shortcuts is the people who made                     |
| 18:51      | it, right?                                                                                                  |
| 18:52      | Exactly.                                                                                                    |
| 18:53      | But the API's already exist and they're there and it's just a case of sort of linking it                    |
| 18:57      | all up.                                                                                                     |
| 18:58      | Yeah.                                                                                                       |
| 18:59      | This episode of The Automators is brought to you by TextExpander from our friends at                        |
| 19:04      | Smile.                                                                                                      |
| 19:05      | Go to textexpander.com/podcast and let them know you heard about it from The Automators                     |
| 19:10      | to get 20% off your first year.                                                                             |
| 19:13      | You can unlock your productivity with TextExpander and manage everything you type repetitively              |
| 19:18      | like email addresses, phone numbers, common message replies and more.                                       |
| 19:23      | TextExpander works everywhere you type like word processors, email and messaging apps                       |
| 19:28      | and online forms.                                                                                           |
| 19:29      | Online forms, by the way, are a great use of TextExpander.                                                  |
| 19:33      | You can customise your snippets with fill-in fields and pop-up lists and check out TextExpander             |
| 19:38      | for teams if you need to manage snippets for your company.                                                  |
| 19:42      | I've been using TextExpander for a long time and I can tell you it's a great entry point                    |
| 19:47      | for automation.                                                                                             |
| 19:48      | If you're listening to The Automators and you want to get better at this stuff, TextExpander                |
| 19:52      | gives you an easy on-ramp.                                                                                  |
| 19:54      | With TextExpander, you can automate common emails you send to people, you can even add                      |
| 19:58      | AppleScript and advanced tools to make your text expansion snippets really dance for you.                   |
| 20:05      | Just imagine if you could have a text expansion snippet that would automatically include the                |
| 20:08      | contents of your clipboard.                                                                                 |
| 20:11      | You can do that with TextExpander.                                                                          |
| 20:13      | TextExpander is available for macOS, Windows, Chrome, iPhone and iPad and Automators listeners              |
| 20:19      | get 20% off their first year.                                                                               |
| 20:22      | Just go to TextExpander.com/podcast to learn more about TextExpander.                                       |
| 20:27      | Let them know you heard about it from The Automators and you'll get 20% off that first                      |
| 20:30      | year.                                                                                                       |
| 20:31      | That's TextExpander.com/podcast.                                                                            |
| 20:34      | If you've been meaning to try TextExpander, check it out now.                                               |
| 20:38      | Our thanks to TextExpander for their support of this show and Relay FM.                                     |
| 20:42      | All right, Alex, before we get into some more of the cool [[Toolbox Pro]] shortcuts, as you                 |
| 20:49      | started developing this thing, at what point did you realise it was going to be an app?                     |
| 20:53      | At what point did it come go from something to make yourself happy to, hey, this might                      |
| 20:58      | be a product?                                                                                               |
| 20:59      | I think I had a really rough wireframe of it, really, that probably had, I don't know,                      |
| 21:06      | like 10 tools in it that were really rough ones like these [[OCR]] one I was describing.                        |
| 21:14      | I thought I'd want to see what other people thought of it.                                                  |
| 21:18      | So I opened a beta up to a quite limited number of people just to get their feedback.                       |
| 21:27      | There was immediately a flood of suggestions for other tools and lots of things that people                 |
| 21:32      | have been wishing that shortcuts could do that it hasn't been able to do so far.                            |
| 21:37      | So I was making a long, long list of tools to build and opened my beta up to the public                     |
| 21:44      | and I was getting more and more people joining up to it.                                                    |
| 21:48      | I ended up really developing it in the public eye, I suppose, with loads of user feedback                   |
| 21:54      | sort of dictating which tools they wanted me to add.                                                        |
| 21:58      | So as it got further and further along, I thought this has to be an app that I release                      |
| 22:03      | on the [[App Store]].                                                                                           |
| 22:04      | The only question mark I think in my head at the time was it's quite an unusual app.                        |
| 22:11      | As you said, there aren't that many headless apps on the App Store that don't actually                      |
| 22:17      | have a huge amount of content in the app.                                                                   |
| 22:20      | Like [[Toolbox Pro]] is mostly, when you open it, it's mostly documentation about how each                  |
| 22:26      | of the tools work and a bunch of examples about demonstrating how those tools work.                         |
| 22:34      | So in my head, I was sort of thinking this could be something that Apple just reject                        |
| 22:39      | outright as being not a proper app because it's a bit of a gray area with the app review                    |
| 22:46      | team, whether it was going to get through or not.                                                           |
| 22:49      | So as soon as it got through the test fly beta and I submit it to the [[App Store]] and it                      |
| 22:56      | was approved, I thought I'm going to spend some more time really building this out.                         |
| 23:00      | But you did a really good job with the app.                                                                 |
| 23:03      | If you compare it to a keyboard headless app, an app that installs a keyboard on your device,               |
| 23:09      | this app actually has content in it, it has resource documentation, and as Alex was mentioning,             |
| 23:14      | it's got a bunch of downloadable shortcuts.                                                                 |
| 23:17      | So you can actually see the tools he's built being used in a practical shortcut.                            |
| 23:23      | I found it very useful, like for instance, you've got some custom UI stuff.                                 |
| 23:27      | There's a lot to kind of jump around with.                                                                  |
| 23:29      | I would actually like to focus for a minute on some different categories.                                   |
| 23:33      | We've already talked a little bit about images, but as I understand it, all this image stuff                |
| 23:39      | you're doing, like when you didn't mention was you can, you've got a shortcut that can                      |
| 23:43      | pull the colours out of an image or look for an area of focus.                                              |
| 23:46      | And as I understand that, that's all using Apple's machine learning algorithm?                              |
| 23:50      | Yeah, yeah, it is actually.                                                                                 |
| 23:53      | So I tried to do, yeah, I mean, there's some really powerful frameworks that Apple have                     |
| 23:59      | that use machine learning, like the [[OCR]] one is machine learning, the image recognition                      |
| 24:05      | one that detects faces is all machine learning.                                                             |
| 24:09      | And it's really about sort of boiling though that sort of complexity down into something                    |
| 24:13      | that you can sort of drag and drop.                                                                         |
| 24:16      | And I've tried to keep it really, I guess, simple but flexible so that, you know, if                        |
| 24:22      | I'm using a colour in one action, then it's using a hex code, which is, you know, quite                     |
| 24:28      | a sort of common format on the web to talk about, you know, what a colour looks like.                       |
| 24:35      | And I'll use hex codes in all the actions so you can sort of swap between them and have                     |
| 24:39      | a hex code output from one action that you can then use as a parameter for another action.                  |
| 24:43      | So they all sort of fit together like a jigsaw puzzle.                                                      |
| 24:46      | That's the sort of ambition with it.                                                                        |
| 24:47      | I mean, when Rose and I finished the [[WWDC]] and we had our show about it, we were excited                      |
| 24:53      | about it.                                                                                                   |
| 24:54      | I don't think either one of us ever guessed within months we'd be running machine learning                  |
| 24:58      | algorithm based shortcuts.                                                                                  |
| 25:00      | That's kind of crazy.                                                                                       |
| 25:02      | Yeah, it's pretty crazy.                                                                                    |
| 25:04      | And it's just, I think it's just the start as well.                                                         |
| 25:06      | There's a lot more to come that hopefully will get more and more powerful.                                  |
| 25:11      | And if I understand correctly, because this isn't talking to any servers anywhere, it's                     |
| 25:15      | running using, I think it was the graphics chip that's designed for gaming inside of                        |
| 25:19      | your iPhone or iPad, which means that your data is on your device.                                          |
| 25:24      | So for anybody who's, they're going, well, I need [[OCR]] for business purposes, but for                        |
| 25:28      | data security, I obviously can't send this off to some unknown server.                                      |
| 25:31      | Well, these actions are perfect because they don't send that data anywhere except to your                   |
| 25:35      | iPhone.                                                                                                     |
| 25:36      | And if it's already on your iPhone, then I presume you trust your device.                                   |
| 25:38      | So these are really not just useful for people who want it built into [[Shortcuts]], but for                    |
| 25:44      | people who need the security aspect as well.                                                                |
| 25:47      | Yeah.                                                                                                       |
| 25:48      | Because I mean, there are shortcuts out there that can do, you know, [[OCR]] that can use these                 |
| 25:53      | sort of third party services.                                                                               |
| 25:54      | But as you say, if you're using a sort of free service and you're uploading your data                       |
| 26:00      | into the cloud, then it's probably being used, you know, it's probably being stored, it's                   |
| 26:04      | probably being used to improve their machine learning algorithms, all that sort of stuff.                   |
| 26:09      | So if you can do it on your device, you know, without needing the internet and to keep it                   |
| 26:14      | all private, it's, you know, it's win-win, I think.                                                         |
| 26:16      | Yes.                                                                                                        |
| 26:17      | Yeah.                                                                                                       |
| 26:18      | And if I understand correctly, the, specifically the recognising faces action, I seem to remember           |
| 26:24      | that that opens [[Toolbox Pro]] because it needs to access more memory, which means that it                 |
| 26:29      | pops up in [[Toolbox Pro]] and then goes back to [[Shortcuts]] if I'm remembering this correctly.               |
| 26:34      | Yeah.                                                                                                       |
| 26:35      | This was a sort of limitation that I ran into fairly early on and sort of had to work out,                  |
| 26:41      | you know, work around to get around it, but essentially when you run an action inside of                    |
| 26:47      | shortcuts that is from a third party app, you're creating an instance of that app in                        |
| 26:55      | the background.                                                                                             |
| 26:57      | And then that instance of the app is using a really sort of limited pool of memory to                       |
| 27:03      | do whatever the action needs to do to the input.                                                            |
| 27:07      | So in the case of, say, recognising faces in an image, if you've got a large image,                         |
| 27:13      | as soon as that's loaded into memory, it can be too much.                                                   |
| 27:16      | And if it's too big for the memory cache, then it will just crash, which isn't ideal.                       |
| 27:22      | So as far as I possibly can, I'm trying to create these actions that are like native                        |
| 27:29      | actions inside shortcuts.                                                                                   |
| 27:31      | So they work exactly the same as a native action, you know, if you're changing case                         |
| 27:36      | or if you're, you know, doing whatever you would do inside of [[Shortcuts]].                                    |
| 27:41      | But occasionally, if it is one of these sort of resource intensive actions, then I just                     |
| 27:46      | need to sort of kick you out of the toolbox, I just need to kick you out of [[Shortcuts]] into                  |
| 27:54      | [[Toolbox Pro]] to do that sort of memory intensive action.                                                 |
| 27:58      | And then I generally have a URL, which will put you back inside of [[Shortcuts]] with the                       |
| 28:04      | result on the clipboard.                                                                                    |
| 28:05      | Well, I mean, that's a good workaround.                                                                     |
| 28:07      | It's certainly better than crashing somebody shortcut.                                                      |
| 28:09      | And I know I seem to remember [[Simon Støvring]], the developer of [[Scriptable]], was saying that                  |
| 28:13      | there's a similar limitation when you run things through [[Siri]] or through the today widget,                  |
| 28:18      | that you also have that same, you know, limited memory problem, essentially.                                |
| 28:25      | So that, you know, every developer is going to encounter this at some point.                                |
| 28:28      | I seem to remember one app developer telling me that they were very concerned about adding                  |
| 28:33      | shortcut support to their app, because essentially it would be happening in a separate container            |
| 28:38      | and it wouldn't sync to the database in the app until the app was opened.                                   |
| 28:43      | And that would could lead to some very unexpected results in some cases, though, of course [[Toolbox Pro]]         |
| 28:47      | not necessarily having a database aside from global variables, which we'll get to                       |
| 28:52      | in a bit might do a little better there than some other apps.                                               |
| 28:55      | Yeah, definitely makes it definitely makes it easier for me just having, you know, most                     |
| 29:00      | of the content inside of [[Shortcuts]].                                                                         |
| 29:01      | Yes.                                                                                                        |
| 29:02      | But hopefully, you know, that's that's a limitation at the moment, but devices are getting so much          |
| 29:06      | more powerful.                                                                                              |
| 29:07      | But hopefully, you know, that memory limit will increase over time, you know, I've got                      |
| 29:11      | my fingers crossed that the shortcuts team, you know, next year or maybe later this year                    |
| 29:16      | will sort of increase that limit and let us do even more.                                                   |
| 29:18      | Yeah.                                                                                                       |
| 29:19      | And as I see users using this stuff and developers coming up with ideas, I think that's all the             |
| 29:25      | more reason for them to increase that.                                                                      |
| 29:27      | I mean, one thing that's been clear to me talking to the shortcuts team is they really                      |
| 29:32      | want shortcuts to succeed.                                                                                  |
| 29:33      | So, you know, things like 100 donation limit and memory limitations, I'm sure there are                     |
| 29:41      | people on Apple right now fighting for you on that kind of stuff.                                           |
| 29:44      | Yeah, I hope so.                                                                                            |
| 29:47      | I have a feeling that the the shortcuts team are they're going, hmm, so how can we get                      |
| 29:52      | rid of these limitations and just make everything [[Shortcuts]]?                                                |
| 29:56      | Just because they they probably like all of us secretly want to take over the world,                        |
| 30:00      | but they're they're having fun while doing it.                                                              |
| 30:02      | It's amazing, you know, how much the shortcuts team have done inside Apple in such a short                  |
| 30:07      | amount of time.                                                                                             |
| 30:08      | Like, when you think about taking an app like an independent app like [[Workflow]] and having                   |
| 30:12      | to integrate that within, you know, Apple's ecosystem and suddenly hooking it up to [[Siri]]                    |
| 30:18      | and being accessed by, you know, hundreds of millions of people, you know, that must                        |
| 30:23      | be a huge amount of work for them.                                                                          |
| 30:25      | So I think it's incredible what they've achieved in such a short space of time.                             |
| 30:28      | Yeah.                                                                                                       |
| 30:29      | And it just shows a commitment on Apple's behalf to make automation work or either that                     |
| 30:34      | or they've got naked pictures of somebody, but the but I just like who knew that they                       |
| 30:39      | would redevelop the app in one year and I don't know what we're going to get in June                        |
| 30:44      | this year, but I'm sure that, you know, shortcuts is going to to get some nice improvements.                |
| 30:49      | Yeah.                                                                                                       |
| 30:50      | So we've been talking about the [[Apple Photos\|Photos]] apps.                                                                |
| 30:51      | I will tell you one of my favourite shortcuts I've made with some of the tools out of [[Toolbox Pro]]              |
| 30:56      | is kind of building my own scanner.                                                                     |
| 30:59      | I really like the the way [[Apple Notes]] scans documents.                                                      |
| 31:03      | It does a very good job of edge detection and straightening out even if you don't get                       |
| 31:07      | it straight on.                                                                                             |
| 31:09      | You've managed to combine that into a shortcut with an OCR, I guess, through machine learning               |
| 31:14      | and it's it's pretty great that I could make my own scanning up.                                            |
| 31:18      | Yeah, absolutely.                                                                                           |
| 31:19      | Yeah.                                                                                                       |
| 31:20      | I mean, I use that action all the time as well.                                                             |
| 31:22      | Like it's I think it's only available in notes app and files app.                                           |
| 31:28      | Yeah.                                                                                                       |
| 31:29      | There's no way of of using it in automations, I don't think, other than sort of the tool                    |
| 31:34      | that I built.                                                                                               |
| 31:35      | But as you say, it's such a great interface.                                                                |
| 31:38      | It does.                                                                                                    |
| 31:39      | It does a really great job.                                                                                 |
| 31:40      | So I think, you know, I mean, I've got it in a great action that lets me sort of rename                     |
| 31:47      | the file and save it to a PDF and then shuffles it away into [[Dropbox]].                                       |
| 31:51      | Yeah.                                                                                                       |
| 31:52      | I use that all the time, like, you know, to live a sort of live this sort of paperless                      |
| 31:56      | lifestyle as it were.                                                                                       |
| 31:58      | I do think that, you know, the scanning mechanism Apple created for for notes is superior than              |
| 32:03      | most of the third party apps and now we can have it as shortcuts users.                                     |
| 32:07      | Rose, what's your favourite image related shortcut you've built out of the stuff that                       |
| 32:12      | Alex has built?                                                                                             |
| 32:14      | I actually have been experimenting and this is still a work in progress with the scan                       |
| 32:20      | the [[QR code]] in image action.                                                                                |
| 32:24      | So essentially what you can do is you can send a photo over to [[Toolbox Pro]] and it will                  |
| 32:29      | find the [[QR code]] in it and scan it and send it back.                                                        |
| 32:32      | And this has been really useful because work recently I've been generating a whole bunch                    |
| 32:36      | of [[QR Code\|QR codes]] for testing purposes.                                                                           |
| 32:38      | And I've needed to make sure that they scan, but I've also generated a bunch of them as                     |
| 32:43      | images on my device and I didn't really want to airdrop them all over to my MacBook Pro                     |
| 32:48      | and then open them up on the screen and then, you know, make sure I've only got one visible                 |
| 32:52      | scan it and check that it comes back with the right information.                                            |
| 32:56      | I wanted a way to batch do this, but I needed to make sure specifically that I was doing                    |
| 33:00      | it on my iPhone and that it would then work and it works.                                                   |
| 33:07      | And this has been really, really helpful.                                                                   |
| 33:09      | Now I will admit I have a very bizarre use case here, but in the I'm generating these                       |
| 33:13      | QR codes myself on a different device, I have to make sure that they work, but it's been                    |
| 33:18      | extremely helpful for me.                                                                                   |
| 33:20      | So thank you for that one.                                                                                  |
| 33:21      | Oh, great.                                                                                                  |
| 33:22      | I'm glad to hear it.                                                                                        |
| 33:23      | That sounds good.                                                                                           |
| 33:24      | I never would have imagined that use case, to be honest, so it's really interesting                         |
| 33:27      | to hear all the sort of different ways people are using the tools I sort of never would                     |
| 33:32      | have expected.                                                                                              |
| 33:33      | Yeah, I've never used the key [[QR Code\|QR]] stuff, so there you go.                                                    |
| 33:36      | But the my favourite of your samples and the image is, and this is simply because I watched                 |
| 33:42      | Silicon Valley and I think it was really funny is Alex made one that you can take a picture                 |
| 33:48      | of it and we'll just tell you if it's a picture of a hot dog or not.                                        |
| 33:52      | And you have to have seen the show, but yeah, it's useful.                                                  |
| 33:57      | It gets a lot of use that one.                                                                              |
| 34:00      | I've actually, I've also been working, I'm going to sneak in here with a second one with                    |
| 34:05      | the get colours from image.                                                                                 |
| 34:07      | So I am in the progress of doing a slightly secret project, which hopefully will be out                     |
| 34:12      | in the not too distant future.                                                                              |
| 34:14      | But for that, I needed the average colour of an app icon.                                                   |
| 34:18      | How do you figure that out?                                                                                 |
| 34:20      | Well, [[Toolbox Pro]] has a get colours from image, which identifies the average colour within              |
| 34:24      | an image.                                                                                                   |
| 34:25      | So I don't know if you were secretly reading my mind or something, Alex, but I'm completely                 |
| 34:29      | okay with that because this has been really helpful because you also return the primary,                    |
| 34:33      | secondary and background colours from the image if you want them.                                           |
| 34:37      | So I'm currently storing all of them and no surprises here, I'm storing this data in                        |
| 34:41      | an [[Airtable]] right now, but it's been, it's been very helpful to get me where I need to                     |
| 34:46      | go with this because I just needed those colours.                                                           |
| 34:48      | And I was wasting a lot of time before I was there going, maybe there's an action in one                    |
| 34:52      | of these 8 billion apps that I have installed on my iPhone and [[Toolbox Pro]] popped up to                 |
| 34:57      | the top.                                                                                                    |
| 34:58      | Yeah.                                                                                                       |
| 34:59      | But just the idea of that, right?                                                                           |
| 35:00      | I mean, there's people out there that work with colours, maybe they're in design and they                   |
| 35:04      | need to get colours off a specific image.                                                                   |
| 35:08      | And you would only think that the way to do that is to buy an app that someone developed,                   |
| 35:12      | but basically Alex has managed to give those APIs to [[Shortcuts]] users so we can make our                     |
| 35:19      | own app.                                                                                                    |
| 35:20      | And I don't know, it just delights me.                                                                      |
| 35:23      | This is also really useful if you take a photo for [[Instagram]] and you want to have, and so                   |
| 35:29      | say it's, so [[Instagram]] has a limitation.                                                                    |
| 35:32      | If you want to upload multiple photos, then they all have to be in the same orientation                     |
| 35:36      | if you're doing it as a post.                                                                               |
| 35:38      | But so that means that you then have to crop all of your images or you can resize your                      |
| 35:44      | images and put them on a background.                                                                        |
| 35:46      | And it's really cool if you put them on a background that's the average colour of your                      |
| 35:49      | image because it looks really fancy if you do that.                                                         |
| 35:53      | And so that's another great use case for that action.                                                       |
| 35:55      | Yeah.                                                                                                       |
| 35:56      | That's a good one, Rose.                                                                                    |
| 35:57      | I might make that.                                                                                          |
| 35:58      | Yeah.                                                                                                       |
| 35:59      | Yeah.                                                                                                       |
| 36:00      | I'm going to make sure that that one's in the show notes for people because it's a pretty                   |
| 36:02      | cool way of doing it.                                                                                       |
| 36:03      | I think if I remember correctly, I've been struggling a little bit with my shortcut sync,                   |
| 36:08      | but I think I got it fixed with some more help from the team over at Apple because, but                     |
| 36:15      | if I've still got that action, if not, I have to recreate it, then you can, you share it                    |
| 36:20      | multiple images.                                                                                            |
| 36:21      | It calculates whether or not most of your images are landscape or portrait and then                         |
| 36:24      | puts them all on like, and then resizes things to match or if they're mostly square, then                   |
| 36:30      | it just does the landscape ones.                                                                            |
| 36:33      | This episode of Automators is brought to you by Zapier.                                                      |
| 36:36      | Growing your business is hard, especially when you're spending hours every day moving                       |
| 36:40      | data from emails to spreadsheets to wherever else.                                                          |
| 36:43      | Wouldn't it be easier if all of these things work together without you lifting your finger?                 |
| 36:48      | Zapier is the easiest way to automate your work.                                                             |
| 36:50      | It connects all your business software and handles work for you so you can focus on the                     |
| 36:55      | things that matter most.                                                                                    |
| 36:57      | So you don't need to waste any more time on tasks that you know could be automated because                  |
| 37:01      | that's what Zapier was built to do.                                                                          |
| 37:04      | So if you work in sales, Zapier lets you instantly engage with leads and send them to a CRM or               |
| 37:09      | spreadsheet and then notify your team so they can act quickly on every opportunity.                         |
| 37:14      | But whatever your business, you can build the exact solution you need in minutes without                    |
| 37:18      | writing a code or asking a developer for help.                                                              |
| 37:22      | And with support for more than 1500 business applications, it's no wonder that more than                    |
| 37:27      | 4.5 million people are saving 40 hours a month using Zapier.                                                 |
| 37:31      | I have a Zap that runs at the start of every month that goes through and checks for any                     |
| 37:35      | open invoices I have that I need to send and adds tasks for those to OmniFocus, as well                     |
| 37:39      | as adding a few other things here and there that need doing, like creating new empty invoices               |
| 37:45      | for me ready for next month.                                                                                |
| 37:48      | One of the features that I love is that it integrates with all sorts of software, so                        |
| 37:51      | you might never have heard of my invoicing software, but Zapier integrates with that                         |
| 37:56      | as well as QuickBooks and FreshBooks.                                                                       |
| 37:59      | It's easy to use Zapier, just put things together with a few clicks, click in a field                        |
| 38:04      | and you can select data from any of the previous stages.                                                    |
| 38:08      | Right now, through to the end of the month, try Zapier free by going to Zapier.com/                          |
| 38:12      | automators.                                                                                                 |
| 38:13      | That's zapier.com/automators for your 14 day free trial.                                           |
| 38:20      | Go there now, check it out, it'll save you a lot of time.                                                   |
| 38:24      | Okay, so we've had some fun talking about images, but now I think it would be a good                        |
| 38:37      | opportunity to dive into these slightly more nitty gritty things and perhaps maybe some                     |
| 38:41      | things that people use their devices for more, which are obviously emoji.                                   |
| 38:46      | But emoji are just some of the text actions that you have available here.                                   |
| 38:51      | And there's all sorts of things, and my favourite one, because this is related to a recent show             |
| 38:56      | that we did on regular expressions, is the quick match text.                                                |
| 39:00      | Because this means that you don't need to use [[regular expressions]] because you've put                        |
| 39:03      | in the hard work for us.                                                                                    |
| 39:04      | Alex, would you like to explain how the quick match text works and where you got the idea                   |
| 39:08      | for this?                                                                                                   |
| 39:09      | Yeah, sure.                                                                                                 |
| 39:10      | I mean, I think using regular expressions is pretty common with advanced [[Shortcuts]]                          |
| 39:17      | users to match certain text within a big block of text.                                                     |
| 39:23      | So you might match the text between one parenthesis and another parenthesis.                                |
| 39:30      | But I am terrible with [[regular expressions]].                                                                 |
| 39:33      | I can never remember them.                                                                                  |
| 39:35      | They look, they just don't sit well in my brain because they just don't look like anything                  |
| 39:39      | to me.                                                                                                      |
| 39:41      | So I wanted a way of creating something that was much more user friendly and that you                       |
| 39:47      | could just write the text for what you want to start matching from, and write the text                      |
| 39:52      | for what you want to end matching from, and then have the output just be the text in between                |
| 39:58      | those two actions.                                                                                          |
| 40:00      | So that's sort of what I built, and hopefully that's sort of how it works.                                  |
| 40:05      | Because as well as, of course, you have the between, which is exactly what you describe                     |
| 40:10      | with the starting and the ending, but you also have the matching things after and matching                  |
| 40:14      | things before, which you can also do this natively in [[Shortcuts]] with a split text and                       |
| 40:19      | then get item from the list.                                                                                |
| 40:21      | But this just combines it down into one action, and it's much easier to wrap your brain around.             |
| 40:26      | Yeah.                                                                                                       |
| 40:27      | So I want all of the text before the colon in this line please, for example.                                |
| 40:31      | And I confess, I may be good at regular expressions, but I'm totally cheating and using this action         |
| 40:36      | as well as many of the other ones there, because it's just really easy.                                     |
| 40:40      | And you also even have the options to do case sensitive matching.                                           |
| 40:47      | So if you've got specifically lowercase and uppercase letters that are mean different things                |
| 40:52      | and you need to match everything after the last uppercase said, then you can do that                        |
| 40:57      | as well.                                                                                                    |
| 40:58      | And that's been really helpful, and that's definitely a great way of cheating, because                      |
| 41:02      | that's what automation is all about.                                                                        |
| 41:03      | Absolutely.                                                                                                 |
| 41:04      | If you can do in one action what usually takes five or six, then that's going to save you                   |
| 41:10      | some time in the long run, I think.                                                                         |
| 41:12      | Looking at this, I mean, this is a very simple tool to use.                                                 |
| 41:15      | You don't need to know anything about regular expressions to use it.                                        |
| 41:19      | Take source text, it lets you look at it in various ways, and like Rose said, it's got                      |
| 41:25      | checkboxes for case sensitivity and new lines.                                                              |
| 41:28      | So you can build something like a [[Regular Expressions\|regular expression]].                                                       |
| 41:32      | There are certainly things you can do with [[regular expressions]] that you could not do                        |
| 41:36      | with this tool, but for the vast majority of your regex searches, this is good enough                       |
| 41:44      | and it's so much easier.                                                                                    |
| 41:46      | Yes, and I would like to point out that you don't use the word regular, or you don't                        |
| 41:51      | use [[Regular Expressions\|regex]] anywhere except in the description, which is really good, because then if you                     |
| 41:55      | search for [[Regular Expressions\|regex]], because you're there going, okay, right, I have to write a [[Regular Expressions\|regular expression]],            |
| 41:59      | there are four actions that show up, three of them are from [[Shortcuts]], and then there's                     |
| 42:01      | the easy one, [[Toolbox Pro]], which says quick match text, and they're going, yes, I want                  |
| 42:06      | the quick one.                                                                                              |
| 42:07      | That's how I found it to start with.                                                                        |
| 42:08      | I was looking for match text, and then it was like, wait, quick match text, this sounds                     |
| 42:12      | like fun.                                                                                                   |
| 42:13      | Good job on the name.                                                                                       |
| 42:15      | Yes, and that's been extremely helpful to me.                                                               |
| 42:19      | I needed to get all the domains after some email addresses the other day, and it was                        |
| 42:23      | there going quick match text to the rescue, find everything after the at sign, done.                        |
| 42:27      | But Rose jumped to, I think, the most advanced one, there's a lot of easier ones too, like                  |
| 42:34      | you can trim text, you can work with emoji, a lot of your change the case of text, a lot                    |
| 42:41      | of your basic text manipulation tools are all very accessible with some of the actions                      |
| 42:46      | you've created.                                                                                             |
| 42:47      | Yeah, I mean, a lot of these are actually really easy to do in [[Swift]].                                       |
| 42:53      | [[Swift]] has a lot of text manipulation tools, and really what I'm doing is porting them                       |
| 42:59      | into [[Shortcuts]].                                                                                             |
| 43:00      | Yeah.                                                                                                       |
| 43:01      | And that's what I'm trying to do with a lot of tools really is just sort of work through                    |
| 43:06      | things that are sort of quick and easy to do for coders and add those to [[Shortcuts]] to                       |
| 43:11      | make it easy for sort of regular users to use easily.                                                       |
| 43:15      | Yeah, because that is inaccessible to us.                                                                   |
| 43:18      | We don't have the ability to open up [[Swift]] and write that into iOS.                                         |
| 43:22      | I mean, I guess that's the point I was trying to make earlier is we don't get those tools                   |
| 43:26      | unless somebody like you makes something like this.                                                         |
| 43:28      | Yeah, that's right.                                                                                         |
| 43:30      | Whereas with the Mac, you can kind of roll your own.                                                        |
| 43:33      | But on iOS, the way things work with automation is it's got to be built into shortcuts.                     |
| 43:38      | So this really, this app really does scratch an itch for me at least.                                       |
| 43:42      | Okay, I'm glad to hear it.                                                                                  |
| 43:45      | And I just saw that one of the, well, the actions that you've just mentioned, David,                        |
| 43:50      | the trim text section, you appear to have recently implemented the feature that I asked                     |
| 43:55      | for not that long ago, which is removing empty spaces from the start and the end of text.                   |
| 44:00      | Because that is one of the things that I run into all the time.                                             |
| 44:02      | I've got text from somewhere and I've got spaces and new lines at the beginning and                         |
| 44:06      | or the end or both.                                                                                         |
| 44:07      | And I have to clear that up.                                                                                |
| 44:09      | I'm writing a regular expression to match empty spaces and new lines is quite easy.                         |
| 44:13      | And it's also extremely easy to get wrong.                                                                  |
| 44:15      | So being able to trim the empty space off of the start and the end of things is definitely                  |
| 44:20      | something I've been looking for.                                                                            |
| 44:21      | So I'm really glad to see that that's there.                                                                |
| 44:23      | Yeah, that was a real, really good suggestion.                                                              |
| 44:25      | I'm not sure why I didn't implement that straight away in the trim text tool.                               |
| 44:29      | So thanks for that.                                                                                         |
| 44:30      | You know, I haven't looked, am I able to trim tabs as well with this?                                       |
| 44:35      | It trims spaces at the start and end.                                                                       |
| 44:38      | So I think it should do.                                                                                    |
| 44:40      | I haven't tested that to be honest.                                                                         |
| 44:41      | Yeah, look at it.                                                                                           |
| 44:44      | You may replace another app if you do that.                                                                 |
| 44:47      | That's all I'm saying.                                                                                      |
| 44:50      | That's my aim.                                                                                              |
| 44:51      | I'm going to swallow all the apps.                                                                          |
| 44:55      | Have I covered the text tools?                                                                              |
| 44:57      | I mean, I think we've gotten most of them.                                                                  |
| 44:59      | Talk about the emoji stuff, like find the emoji as dumb as it sounds.                                       |
| 45:04      | That's actually kind of helpful in a shortcut.                                                              |
| 45:06      | Well, what I've done is somebody sent me an emoji the other day and I didn't know what                      |
| 45:11      | the name of it was.                                                                                         |
| 45:12      | And if you know the name, then quite often you can figure out where it is in the emoji                      |
| 45:16      | keyboard to actually use it yourself.                                                                       |
| 45:19      | And so what I did is I copied the text and I built a little shortcut, which gets the                        |
| 45:23      | emojis from the text using your action Alex.                                                                |
| 45:27      | And then it uses the shortcuts action to get the name of the emoji for me.                                  |
| 45:31      | And it just chose me an alert with all the emojis that were in the text and the names                       |
| 45:34      | of them next to it.                                                                                         |
| 45:36      | And that's pretty helpful if you want to, you know, find out where that which emoji                         |
| 45:40      | is.                                                                                                         |
| 45:41      | When I realised it was which I realised, of course, it's next to the people, which means                    |
| 45:44      | it's near the yellow face emojis, which are somewhere in the beginning.                                     |
| 45:49      | You know, all those those golden shiny faced emojis, which I like to use.                                   |
| 45:55      | And that's that's definitely help helping to improve my emoji list or usage.                                |
| 46:00      | That said, I have yet to figure out a way to cheat at the game.                                             |
| 46:03      | What's that emoji?                                                                                          |
| 46:05      | So I'm still waiting in action for that.                                                                    |
| 46:07      | But this is pretty useful.                                                                                  |
| 46:08      | I have to admit, I got the Mandalorian sticker set and I have a whole catalogue of baby Yoda                |
| 46:16      | stickers, so emoji don't matter to me anymore.                                                              |
| 46:19      | I can emote everything I need with baby Yoda.                                                               |
| 46:22      | Okay.                                                                                                       |
| 46:23      | Well, no more spoilers because Alex and I don't get until late March, but it looks                          |
| 46:27      | like this.                                                                                                  |
| 46:28      | Oh man, you're going to have a good time.                                                                   |
| 46:29      | Yeah, come away.                                                                                            |
| 46:30      | I had good things.                                                                                          |
| 46:31      | Yes.                                                                                                        |
| 46:32      | That's that I have heard about baby Yoda.                                                                   |
| 46:34      | Yeah.                                                                                                       |
| 46:35      | But as well as finding emoji, you also have removing emoji because this is something                        |
| 46:40      | that often breaks.                                                                                          |
| 46:41      | So for example, if you're trying to send data via [[URL Schemes\|URL scheme]], then emoji will need to      |
| 46:46      | be [[URL Encoding\|URL encoded]], but the URL encoding action doesn't always grab emoji.                                      |
| 46:50      | So it's pretty useful to just be able to strip any emoji out of your text to deal with that.                |
| 46:56      | And so the remove emoji can also remove special characters, which is quite useful because                   |
| 47:01      | special characters often muck things up when you're trying to deal with complex actions.                    |
| 47:07      | So being able to simplify that and remove all of those has been very useful.                                |
| 47:12      | I want to talk a little bit about the authenticate action.                                                  |
| 47:15      | So I always understood that [[Touch ID]] and [[Face ID]] are a black box, basically.                                |
| 47:21      | Developers really don't have access to your fingerprint or your face, but it asks the                       |
| 47:26      | system, is this that person, and then the silicon and the operating system figures it                       |
| 47:32      | out through [[Touch ID]] and [[Face ID]] and turns back a thumbs up or thumbs down.                                 |
| 47:37      | So basically an app developer puts a query and they get a yes or a no back.                                 |
| 47:43      | So I knew that there wouldn't be much for developers to see, but it never occurred to                       |
| 47:48      | me the idea of saying, well, why can't I just add that as an action to a shortcut?                          |
| 47:54      | So if I've got a shortcut that involves sensitive information or something that I just don't                |
| 47:58      | want other people to be able to run or see, add that authentication layer and you added                     |
| 48:05      | it with [[Toolbox Pro]].                                                                                    |
| 48:06      | There is a step now.                                                                                        |
| 48:08      | There's a shortcut action out of [[Toolbox Pro]] that just says authenticate.                               |
| 48:12      | And it's done very cleverly.                                                                                |
| 48:14      | It knows how you authenticate on whatever device you're running on it and it does it                        |
| 48:18      | for you and it allows you to go forward or it stops you.                                                    |
| 48:22      | I guess my first question is, how did it even occur to you to do that and how complicated                   |
| 48:28      | was it to create?                                                                                           |
| 48:29      | Well, I guess this is a sort of perfect example of a framework that developers have access                  |
| 48:36      | to that I'm just exposing to [[Shortcuts]] users.                                                               |
| 48:42      | Because I mean, it's pretty easy to implement for a developer and as you say, you just get                  |
| 48:47      | a true or false and really all the tool is doing is just running that framework and returning               |
| 48:55      | the result to the user.                                                                                     |
| 48:58      | Now it's sort of arguable, I suppose, how useful that is inside of [[Shortcuts]] because                        |
| 49:04      | I guess technically, you know, if you have access to a shortcut, you can edit them, you                     |
| 49:10      | know, you can you could delete that action, I suppose, but I think, you know, I've seen                     |
| 49:15      | people use them to limit their access or limit access using an automation so that when you                  |
| 49:22      | open an app, for example, it will throw you to [[Toolbox Pro]] and authenticate you.                        |
| 49:27      | And if it's successful, then it will let you it will return you to the app that you try                     |
| 49:31      | to authenticate.                                                                                            |
| 49:33      | And if it's unsuccessful, it will, you know, like take a picture of you and email it to                     |
| 49:37      | someone or you can sort of add all those sort of security steps in.                                         |
| 49:41      | So it's sort of been fun to see what sort of people are making with it.                                     |
| 49:44      | Yeah, that was really my next question is, what are people doing with it?                                   |
| 49:47      | And that's kind of an interesting, what if you put a put a shortcut on your home screen                     |
| 49:52      | that says, do not touch, you know, right here, see who picks it up and taps it and then you                 |
| 50:00      | get a picture of them touching it.                                                                          |
| 50:03      | I think the authenticate action, as you said, is most useful either for automations or home                 |
| 50:07      | screen things, because of course, if you're running something inside of the [[Shortcuts]]                       |
| 50:11      | app, then it's not that difficult to tap on the three dots in the top right hand corner                     |
| 50:15      | of a shortcut to and then remove that action, of course, depending on how the person has                    |
| 50:20      | created their shortcut, you may then have to do some other messing around and rejigging                     |
| 50:26      | things to get everything to work.                                                                           |
| 50:28      | But you know, for a casual person that picks up a phone and goes, hey, pretty, pretty app                   |
| 50:33      | icon touch, and then it takes a photo of them and, you know, emails it to somebody else.                    |
| 50:39      | And maybe plays a siren sound and says, I'm calling the police in three, two or something.                  |
| 50:45      | You know, that that could be quite fun, full disclaimer, I'm not responsible if you actually                |
| 50:49      | call the police and they're not happy with you because somebody picked up your phone.                       |
| 50:53      | Please be smart.                                                                                            |
| 50:54      | That's one of the things you always regretted saying as it came out of your mouth, right?                   |
| 50:59      | Yeah, yeah.                                                                                                 |
| 51:00      | You know, don't actually call the police, like pretend by all means in a shortcut that                      |
| 51:04      | you are going to call the police, but no, actually calling the police unless it's genuine emergencies.      |
| 51:08      | But you know, it's one of those things where I can see like, that's the sort of thing that                  |
| 51:12      | I would build into a shortcut that I give somebody else to use, where, you know, they're                    |
| 51:17      | using it, maybe there's a password inside of the shortcut or something, and you know,                       |
| 51:22      | you just don't want somebody who just picks it up to just see everything as it runs.                        |
| 51:28      | Of course, it depends on exactly what the shortcut is, but I can see some good use cases                    |
| 51:32      | with that.                                                                                                  |
| 51:33      | Yeah, I was just thinking I have a client that does a web-based service for his customers.                  |
| 51:39      | He's a software developer, and he's been adding shortcuts to user home screens to help data                 |
| 51:46      | collection in the workplace.                                                                                |
| 51:47      | And that would be a good use for authentication because you don't want someone else using                   |
| 51:51      | your device to put bad data into the system.                                                                |
| 51:54      | So just make it run on authentication step in that shortcut before you let somebody into                    |
| 51:59      | the database.                                                                                               |
| 52:00      | So, yeah, I mean, I get that that's not super secure, but there's a lot of people out in                    |
| 52:05      | the world that that would be secure enough.                                                                 |
| 52:07      | I mean, at least it would stop the, you know, the most basic level of troublemaker.                         |
| 52:14      | And it's one of those things where somebody, you know, it's just picking up your phone                      |
| 52:18      | to have a play with it, it's going to slow them down enough that you'll probably be back                    |
| 52:21      | at your device before they figured out how to get around that, or while they're figuring                    |
| 52:26      | out how to get around that.                                                                                 |
| 52:27      | And then you can go, are you sure you should be doing this with my device?                                  |
| 52:31      | And then they'll look at you very sheepishly and apologise and give you chocolate.                          |
| 52:35      | That's how life works.                                                                                      |
| 52:36      | One of the things I don't like about [[Shortcuts]] Alex is the way it displays menu items.                      |
| 52:41      | I mean, it's okay, it's functional, but it's not very pretty.                                               |
| 52:45      | And you kind of tried to take that on with [[Toolbox Pro]], explain what you did and how                    |
| 52:50      | that works.                                                                                                 |
| 52:51      | Yeah.                                                                                                       |
| 52:52      | So I think there's, there's a, in the current menu system, you can't show images.                           |
| 52:58      | But there's lots of workarounds because when you show a menu, show a list rather of contacts,               |
| 53:05      | it shows their contact images to the left of the text.                                                      |
| 53:09      | And I think there's, there's sort of techniques that people have been using over the years                  |
| 53:14      | with [[Workflow]] and [[Shortcuts]] to create contacts within the shortcut itself, using, you know,                 |
| 53:23      | whatever you want your menu icon to be as a contact image.                                                  |
| 53:28      | And then you show that list of contacts.                                                                    |
| 53:30      | And it basically looks like a very pretty menu system.                                                      |
| 53:35      | But it's quite tricky to do because you have to use V cards, which are like a textual representation        |
| 53:43      | of a contact.                                                                                               |
| 53:44      | And editing them is a bit of a nightmare.                                                                   |
| 53:46      | It's sort of, it feels like you're editing code really.                                                     |
| 53:50      | So what I wanted to do was create a really sort of visual system for doing that.                            |
| 53:54      | So I added a create menu item action.                                                                       |
| 54:00      | And that hopefully makes it much simpler for, you know, people who don't even know about                    |
| 54:05      | the workaround to create these really attractive menus really easily.                                       |
| 54:09      | And one of the things that I wanted to do was give you different ways of adding those                       |
| 54:14      | images to those menu items.                                                                                 |
| 54:17      | So for example, if you're accessing data from an API, you can use a URL as the source of                    |
| 54:24      | the image, and it will download that image, it will resize it to the correct size, and                      |
| 54:30      | then it will show it.                                                                                       |
| 54:31      | So that's like a really easy way.                                                                           |
| 54:32      | You just have to sort of use the URL of whatever you're pulling from the internet.                          |
| 54:37      | And one that I was really happy with how it came out was the icon generator.                                |
| 54:41      | I don't know whether either of you have used that at all.                                                   |
| 54:44      | I've been experimenting a little bit, but I have a feeling I've got myself on the wrong                     |
| 54:48      | foot.                                                                                                       |
| 54:49      | So it'd be great if you could explain how that works so I can steal that information                        |
| 54:52      | and use it.                                                                                                 |
| 54:53      | Sure.                                                                                                       |
| 54:54      | So basically in iOS 13, Apple introduced for developers something called [[SF Symbols]].                    |
| 55:03      | And that is like a list of 2,000 symbols, I think it is something like that, that developers                |
| 55:10      | can use within their apps.                                                                                  |
| 55:13      | And they're great, they're resizable, you can sort of colour them, they match the text                      |
| 55:18      | that they're with.                                                                                          |
| 55:19      | And of course, I want to sort of let shortcuts users use those as well.                                     |
| 55:24      | So you can actually use the name of an [[SF Symbols\|SF symbol]], which you can find, there's a couple                      |
| 55:31      | of apps on iOS that let you sort of search all the symbols and find the names of them.                      |
| 55:37      | I think 'SF Symbol Search' is one of them.                                                                    |
| 55:40      | And there's the [[SF Symbols]] app on the Mac, which is downloaded from Apple.                                  |
| 55:45      | But if you type the name of that into the menu item creator, you can also enter a colour                    |
| 55:51      | for it just like a hex code.                                                                                |
| 55:53      | And it will use those to create these sort of really attractive menu items, basically.                      |
| 56:01      | And then of course, because you have these attractive menu items, of course, humans are                     |
| 56:05      | fairly visual people, you know, not everybody is as visual as the next person, but I find                   |
| 56:10      | that if I see an image, I don't need to read the text most of the time, if the image is                     |
| 56:15      | set up correctly.                                                                                           |
| 56:16      | And so I've been experimenting a little bit with creating menu items with, you know, like                   |
| 56:21      | a red trash icon next to the delete option, just so that I can easily instantly recognise                   |
| 56:27      | what that is.                                                                                               |
| 56:28      | And that is quite useful just because then you don't waste your time reading, you just                      |
| 56:33      | tap on the pretty red one and your your image or whatever it is that you've been working                    |
| 56:37      | on is gone, whereas otherwise you're there going, OK, just making sure nothing's changed                    |
| 56:42      | order because it didn't accidentally drag something around in the menu.                                     |
| 56:44      | Yeah, OK, that's that definitely says delete, tap on it.                                                    |
| 56:48      | And maybe I save half a second every time I run it, but it feels a little more joyful                       |
| 56:53      | to use.                                                                                                     |
| 56:54      | Yeah, it gives you a much more app like experience as well, I think.                                        |
| 56:57      | Like, obviously, you can't create your own UI within shortcuts, but I think it's the                        |
| 57:02      | closest you can get to giving giving a sort of real character to the shortcuts that you                     |
| 57:07      | make.                                                                                                       |
| 57:08      | Or as you say, like, allowing you to sort of visualise which which button is going to                       |
| 57:12      | do what more easily.                                                                                        |
| 57:13      | Yeah, because as it is, all you get is a plain text list, which is it's OK, but it could                    |
| 57:20      | be so much better.                                                                                          |
| 57:22      | And when you're giving us like app API style [[Shortcuts]], then all of a sudden we want it                     |
| 57:27      | to start to look like an app, too.                                                                          |
| 57:29      | I know I do.                                                                                                |
| 57:30      | And that's that's one of the things that I am really enjoying experimenting with and                        |
| 57:34      | also seeing.                                                                                                |
| 57:35      | So for people who don't follow [[Toolbox Pro]] on [[Twitter]], I highly recommend that you do               |
| 57:39      | because it's always interesting seeing the experiments.                                                     |
| 57:42      | Of course, I'm sure every self doing you're going to tweet something and then afterwards                    |
| 57:46      | go no, this is not possible to implement just because, you know, this is too complicated                    |
| 57:50      | or there's a bug in this API that I wanted to use.                                                          |
| 57:53      | And it crashes, you know, one in every 100 times, but one in every 100 doesn't sound                        |
| 57:58      | like a lot.                                                                                                 |
| 57:59      | But when you roll this out to a couple of thousand users, it's it's suddenly quite                          |
| 58:02      | a few people if they run that action five times a day.                                                      |
| 58:05      | So it's always interesting seeing what's happening and seeing the number of things                          |
| 58:09      | that make this make every shortcut more and more app like is very, very nice and quite                      |
| 58:17      | helpful.                                                                                                    |
| 58:18      | You've got a couple built on finding data on entertainment, you've got like find games,                     |
| 58:23      | find movies.                                                                                                |
| 58:24      | What?                                                                                                       |
| 58:25      | I've never figured out where to use those, maybe I don't play enough games, but but how                     |
| 58:30      | you know, what was the idea thinking behind those?                                                          |
| 58:33      | I guess that was quite an early experiment with trying to wrap like a web API into a                        |
| 58:40      | single action.                                                                                              |
| 58:41      | Yeah.                                                                                                       |
| 58:42      | So that the find movies action, for example, is searching the movie database website and                    |
| 58:50      | sort of retrieving that data from it because it's, you know, you can search APIs within                     |
| 58:56      | shortcuts.                                                                                                  |
| 58:57      | Yeah.                                                                                                       |
| 58:58      | But again, it takes a lot of setting up and a lot of sort of repeat actions and it can                      |
| 59:01      | be quite slow.                                                                                              |
| 59:03      | So I sort of just was playing around with, you know, data that people might find useful.                    |
| 59:08      | I've seen people create media to do lists, for example.                                                     |
| 59:14      | So if there's a movie that you've heard about that you want to watch, you could create a                    |
| 59:18      | shortcut to save that to a list to watch later.                                                             |
| 59:22      | You could save it to your [[Apple Reminders\|Reminders]] or notes or something like that.                                        |
| 59:25      | But having that action lets you search for that movie and maybe you could pull the poster                   |
| 59:30      | image, for example, or the year it was created or anything like that.                                       |
| 59:34      | So that's that's the sort of idea behind it.                                                                |
| 59:36      | Obviously, there's lots of different things you could do with it.                                           |
| 59:39      | Yeah, that makes sense.                                                                                     |
| 59:42      | This episode of the automators is brought to you by Kensington, the professionals choice.                   |
| 59:47      | Find the right docking solutions for your organisation today.                                               |
| 59:51      | Head over to Kensington.com/automators to learn more.                                                       |
| 59:56      | Kensington are the people who make universal docking stations that are designed to increase                 |
| 01:00:00   | productivity.                                                                                               |
| 01:00:01   | It's so easy to use.                                                                                        |
| 01:00:03   | You can get access to more ports and make your sleek MacBook, Chromebook or other laptop                    |
| 01:00:08   | as powerful as a desktop.                                                                                   |
| 01:00:10   | It's plug and play with no drivers, so you can enjoy up to two dual 4k displays with                        |
| 01:00:16   | HDMI and display link video connectors, plus USB 3.0, USB C and Thunderbolt 3 with power                    |
| 01:00:24   | delivery available.                                                                                         |
| 01:00:26   | Kensington's engineering team has three decades of experience in high volume manufacturing                  |
| 01:00:31   | of hardware IT products, plus rigourous test cycles and quality control, which means their                  |
| 01:00:37   | products are tested above industry standards.                                                               |
| 01:00:40   | If you're an IT decision maker looking to find the right docking solutions for your                         |
| 01:00:44   | organisation, check out Kensington's ProConcierge program and test drive a docking solution today.          |
| 01:00:51   | So go over to Kensington.com/automators, A-U-T-O-M-A-T-O-R-S right now to check out                         |
| 01:00:58   | Kensington, that's right, Kensington.com/automators to learn more and get your                              |
| 01:01:03   | docking station.                                                                                            |
| 01:01:05   | Our thanks to Kensington for their support of this show and all of Relay FM.                                |
| 01:01:09   | Okay, so I have been, I teased this earlier and I have, one of the things that I've really                  |
| 01:01:16   | been loving are global variables, the ability to save a variable in one shortcut and get                    |
| 01:01:22   | it back in another.                                                                                         |
| 01:01:24   | And this has managed to completely change the way that I use [[Shortcuts]] because previously                   |
| 01:01:27   | I was saving everything into [[iCloud]] files.                                                                  |
| 01:01:30   | And then every so often I would accidentally untoggle that action that says overwrite the                   |
| 01:01:35   | file and I would get really weird results or something would go wrong with the [[iCloud]]                       |
| 01:01:39   | sync between devices because I didn't have Internet and I didn't realise that I didn't                      |
| 01:01:43   | have Internet and something hadn't synced from this iPad to that iPhone.                                    |
| 01:01:47   | And it was driving me a little bit insane.                                                                  |
| 01:01:50   | And of course you can't work around me not having Internet, that's very much my problem,                    |
| 01:01:54   | but you've implemented global variables so at least I don't have to deal with files                         |
| 01:01:58   | anymore.                                                                                                    |
| 01:01:59   | Is that how you came up with the idea of seeing people trying to find a solution for this                   |
| 01:02:03   | or did you just decide that you needed something better than a variable?                                    |
| 01:02:08   | Yeah, I think it's something that people have probably struggled with.                                      |
| 01:02:12   | As soon as you get to a sort of level of complexity with shortcuts where you need to persist data           |
| 01:02:17   | between your shortcuts, where you need to save something that you want to use later                         |
| 01:02:21   | from a different shortcut or between your devices, then you start having to look for                        |
| 01:02:26   | different solutions and as you say, one of them was saving data to [[iCloud]], some people                      |
| 01:02:31   | save data to notes, but it can be quite fiddly and you've got to make sure you sort of remember             |
| 01:02:38   | the names of the files that you're saving and all that sort of stuff, it's easy to delete                   |
| 01:02:42   | them.                                                                                                       |
| 01:02:43   | So I wanted a solution that would make it super simple and feel quite native within                         |
| 01:02:48   | shortcuts.                                                                                                  |
| 01:02:51   | So global variables is what I came up with and it's really just for syncing text, but                       |
| 01:02:58   | it takes the same idea of a variable within shortcuts, which is to save a piece of data                     |
| 01:03:04   | that you want to use later within the same shortcut, but it broadens it out.                                |
| 01:03:09   | So if you save some text into a global variable, that text will then be accessible in any other             |
| 01:03:17   | shortcut on any of your devices that are logged into your [[iCloud]] account.                                   |
| 01:03:21   | And that's all synced securely using [[iCloud]], it's encrypted and it's accessible within                      |
| 01:03:27   | the [[Toolbox Pro]] app itself as well.                                                                     |
| 01:03:30   | So an example of that is if you use your home address, for example, in lots of different                    |
| 01:03:35   | shortcuts, you could type that as a global variable in the [[Toolbox Pro]] app and then from                |
| 01:03:43   | many shortcuts, you could pull that home address to use however you wish, maybe you                         |
| 01:03:49   | want to get directions back to your home address.                                                           |
| 01:03:53   | Well then, if you moved home, you wouldn't have to edit your home address in every single                   |
| 01:03:57   | shortcut you'd created, which accesses it.                                                                  |
| 01:04:00   | You could just open the [[Toolbox Pro]] app and change it in one place and then those changes               |
| 01:04:04   | would ripple out to all of your shortcuts, which is like a really big time-saving feature                   |
| 01:04:08   | for me, I think.                                                                                            |
| 01:04:09   | Yes, I've been using this, so when I clock in at work in the morning, it stores the                         |
| 01:04:14   | time that I've clocked in, and then when I clock out, it takes the time that I'm clocking                   |
| 01:04:19   | out, gets back the time that I'm clocking in and calculates how long I've been at work                      |
| 01:04:23   | during the day.                                                                                             |
| 01:04:24   | Of course, I usually have a fairly good idea anyway, and I do have other tools, but I like                  |
| 01:04:28   | to see exactly how long it is according to my shortcuts and my calculations.                                |
| 01:04:33   | And that's been quite helpful because I can do that, but I can also store whether or                        |
| 01:04:39   | not I've been taking some different vitamins in the morning, and I've been storing every                    |
| 01:04:44   | day that I've taken the vitamins, I've been logging that, I've been adding that.                            |
| 01:04:47   | So I've got to don't break the chain going on in [[Toolbox Pro]], because I was experimenting               |
| 01:04:52   | with that after streaks from our last episode, and I was there growing up.                                  |
| 01:04:57   | I want them to slightly nerdy a way of tracking my vitamin intake, because that's me.                       |
| 01:05:02   | It's been quite fun seeing that number go up.                                                               |
| 01:05:04   | I'm pleased to say that I am indeed at, well, we're recording this not long after that episode              |
| 01:05:09   | releases, but I am at seven right now.                                                                      |
| 01:05:11   | I've been taking my vitamins seven days consistently, so good to me.                                        |
| 01:05:14   | Good.                                                                                                       |
| 01:05:15   | Congratulations.                                                                                            |
| 01:05:17   | I never realised how you say vitamins in the UK.                                                            |
| 01:05:23   | I like it.                                                                                                  |
| 01:05:24   | Well, why would we put the extra emphasis on the, why would you say vitamins?                               |
| 01:05:29   | That makes, that doesn't make sense.                                                                        |
| 01:05:33   | We're a wild country here in the United States.                                                             |
| 01:05:36   | But getting back to the idea of global variable, I mean, what it's really doing, and a theme                |
| 01:05:42   | of this show really has been, if you can get tools like [[Toolbox Pro]], you can build your                 |
| 01:05:48   | own apps.                                                                                                   |
| 01:05:49   | And one thing you need when you build your own app is you need a place to put data.                         |
| 01:05:53   | And so with the global variable implementation of [[Toolbox Pro]], you can store data.                      |
| 01:05:59   | And it's just [[Toolbox Pro]] is just saying, hey, I'll hold it for you right here.                         |
| 01:06:03   | And that's a better way to do it than trying to hack your [[iCloud]] account.                                   |
| 01:06:08   | And it just makes so much more sense.                                                                       |
| 01:06:10   | And again, it's a very elegant solution.                                                                    |
| 01:06:14   | And I just continue to be impressed how you figured out these problems, Alex, and you                       |
| 01:06:18   | just kept knocking them down.                                                                               |
| 01:06:20   | Yeah.                                                                                                       |
| 01:06:21   | I think when I was designing [[Toolbox Pro]], and I guess I should probably say that global                 |
| 01:06:26   | variables is a free tool.                                                                                   |
| 01:06:29   | I think like 22 of the tools are completely free to use.                                                    |
| 01:06:33   | And I wanted to give free users access to, as you say, a sort of back end for their shortcuts,              |
| 01:06:41   | which is how I think of global variables.                                                                   |
| 01:06:44   | And also give them a front end.                                                                             |
| 01:06:47   | And that front end is the sort of preview tool.                                                             |
| 01:06:50   | And that's a way of seeing your data visually in ways that you can't in [[Shortcuts]] at the                    |
| 01:06:56   | moment.                                                                                                     |
| 01:06:57   | So I see those two as a sort of yin and yang, I suppose, that you can save all your data                    |
| 01:07:04   | to the global variables.                                                                                    |
| 01:07:06   | And then you can, for example, view your sort of formatted text and images within the preview               |
| 01:07:13   | tool.                                                                                                       |
| 01:07:14   | And I think having those two together brings a big step closer to feeling more like an app.                 |
| 01:07:19   | When you were developing it, were any of the shortcuts you made, things like, no, there's                   |
| 01:07:26   | no way that would be possible.                                                                              |
| 01:07:27   | And then you shocked yourself and made it anyway.                                                           |
| 01:07:30   | I think when I was, you know, we were talking about the actions that have to jump into Toolbox              |
| 01:07:35   | Pro, I sort of hadn't worked that out for a long time.                                                      |
| 01:07:39   | And I kept having these actions that would crash, you know, trying to do these huge machine                 |
| 01:07:44   | learning actions within a very small amount of memory, you know, wasn't working very well.                  |
| 01:07:50   | So I think as soon as I figured out that I could actually jump into [[Toolbox Pro]], do                     |
| 01:07:54   | the action and then push it back into shortcuts, that was, that was a bit of a sort of light                |
| 01:07:59   | bulb moment, I think, in terms of really opening the door to basically being able to do anything.           |
| 01:08:05   | So I've got lots of ideas that I still want to put into the app.                                            |
| 01:08:09   | So I'm working through them.                                                                                |
| 01:08:10   | We got to get you past the 100 limit, though.                                                               |
| 01:08:13   | Yeah.                                                                                                       |
| 01:08:14   | Yeah.                                                                                                       |
| 01:08:15   | Exactly.                                                                                                    |
| 01:08:16   | I'm not quite sure how to do that yet, but I'll get there.                                                  |
| 01:08:19   | Maybe there'll be 10 [[Toolbox Pro]] apps on the app still, I'm not sure.                                   |
| 01:08:23   | [[Toolbox Pro]], Toolbox Ultra, Toolbox Mega.                                                               |
| 01:08:26   | I can see a whole series of [[Toolbox Pro]] actions and apps, but I just wanted to do a little              |
| 01:08:33   | bit of shout out to some other really useful actions that you have here.                                    |
| 01:08:36   | So you've got like checking whether or not an app is installed and whether or not audio                     |
| 01:08:40   | is playing.                                                                                                 |
| 01:08:41   | This is one I use literally every day, twice a day, as I'm, so when I leave work and when                   |
| 01:08:45   | I get home.                                                                                                 |
| 01:08:46   | When I leave work, it checks if music is playing.                                                           |
| 01:08:49   | And if it is, it makes sure that my AirPods Pro are set to transparency, not noise-cancelling,              |
| 01:08:54   | because wandering around outside where there are trams and people and electric scooters,                    |
| 01:08:58   | not with me on them, just to clarify, I'm not allowed on electric scooters.                                 |
| 01:09:02   | David has forbidden me from electric scooters, but it checks and it makes sure that they're                 |
| 01:09:07   | in transparency.                                                                                            |
| 01:09:08   | But then when I get home, if audio is playing, it hands it off to my HomePods.                              |
| 01:09:12   | And that's just...                                                                                          |
| 01:09:14   | How are you triggering those, Rose?                                                                         |
| 01:09:15   | So when I leave work, I clock out and my clock out action.                                                  |
| 01:09:20   | If I tell it I'm commuting, then it will also run another mini shortcut that does a couple                  |
| 01:09:25   | of things, like it checks whether or not I need to hurry home for a podcast, or if I                        |
| 01:09:30   | don't need to hurry home for a podcast, if I need to go shopping, because there are things                  |
| 01:09:34   | on my shopping list.                                                                                        |
| 01:09:36   | And it checks that the audio is part of this as well, just in the background.                               |
| 01:09:40   | It doesn't ask me anything about the audio, I don't give myself a choice, it's transparency                 |
| 01:09:44   | when I run that.                                                                                            |
| 01:09:45   | Sure.                                                                                                       |
| 01:09:46   | And then there's also checking whether or not the sun is up, if your [[VPN]] is connected.                      |
| 01:09:53   | And rating music, which is something I still can't believe is in shortcuts, but I don't                     |
| 01:09:58   | need it to be in shortcuts because it's here in [[Toolbox Pro]].                                            |
| 01:10:02   | And manually scaling images is very, very useful, surprisingly useful actually.                             |
| 01:10:09   | So those are all some of my favourite little actions there.                                                 |
| 01:10:14   | Yeah, the love and add music is a really useful action that I use a lot actually.                           |
| 01:10:20   | Because if you're listening to a mixed playlist, for example, you can hit one button, you can               |
| 01:10:27   | love it, and then add it to your library.                                                                   |
| 01:10:30   | And if your library is set to download music automatically, then that will just download                    |
| 01:10:34   | straight to your device.                                                                                    |
| 01:10:36   | And so that's just a great automation that you couldn't previously do.                                      |
| 01:10:40   | So I use that one a lot as well.                                                                            |
| 01:10:42   | That's another one that me was just shocking that the [[Apple Music]] app hadn't already donated                |
| 01:10:46   | something like it.                                                                                          |
| 01:10:47   | It's like, how did they miss that?                                                                          |
| 01:10:49   | Well, you don't need to worry about that anymore because [[Toolbox Pro]] is riding to the rescue           |
| 01:10:55   | with its hammer icon at the ready.                                                                          |
| 01:10:58   | So it's also got the format date action, of course, because formatting dates is quite                       |
| 01:11:02   | tricky in understanding the exact syntax is a little bit weird every so often.                              |
| 01:11:08   | And it's nice to do that format date extended action for those people who, unlike me, have                  |
| 01:11:13   | not yet memorised the date formatting.                                                                      |
| 01:11:16   | I don't know why I have format memorised.                                                                   |
| 01:11:18   | If you type a five capital E's, you get just the first letter of the day of the week that                   |
| 01:11:23   | I have.                                                                                                     |
| 01:11:24   | And that's quite useful.                                                                                    |
| 01:11:25   | But it's nice to know that format date extended is there for everybody else who's not quite                 |
| 01:11:29   | as insane as I have to look that stuff up every time I do it.                                               |
| 01:11:32   | Yeah.                                                                                                       |
| 01:11:33   | Yeah.                                                                                                       |
| 01:11:34   | I mean, that's that's why I made it.                                                                        |
| 01:11:35   | So I didn't have to look it up anymore.                                                                     |
| 01:11:36   | I was just getting sick of it.                                                                              |
| 01:11:37   | I think I'd looked it up often enough that it's just part of my brain now.                                  |
| 01:11:40   | Alex, you've heard from a lot of users, I'm sure, since you've released the app.                            |
| 01:11:46   | What are some of the uses of some of these these these steps you've created that just                       |
| 01:11:51   | blew your mind?                                                                                             |
| 01:11:52   | Oh, God, there's been quite a few that have been sort of really surpassed what I thought                    |
| 01:11:57   | you could do with it, to be honest.                                                                         |
| 01:11:59   | There's a guy called Stu Maschwitz who created two two amazing automations, one called "burst                |
| 01:12:08   | slice" and one called "panaman".                                                                               |
| 01:12:11   | And I think burst slice takes an image that you've taken on your phone that's a live image                  |
| 01:12:19   | and it basically creates a sort of panorama of all those burst images stitched together                     |
| 01:12:25   | and lets you sort of preview it in the preview tool and gives you buttons that you can sort                 |
| 01:12:30   | of change all the sort of variables so you can adjust it so it's exactly how you like.                      |
| 01:12:36   | That was that really blew my mind because it was using the preview tool in a way that                       |
| 01:12:39   | hadn't really thought about it before, but really using it as a front end for changing                      |
| 01:12:46   | you know, the result of the shortcut itself.                                                                |
| 01:12:51   | Sounds like an app you would pay for.                                                                       |
| 01:12:52   | I mean, when you hear.                                                                                      |
| 01:12:53   | Yeah, exactly.                                                                                              |
| 01:12:54   | Yeah.                                                                                                       |
| 01:12:55   | You can actually use it with, you know, a few actions inside of [[Shortcuts]].                                  |
| 01:12:59   | I've got links to both of those for the show notes, by the way.                                             |
| 01:13:01   | So for anybody who's there going "burst slice" sounds really interesting or or what is "panaman"?               |
| 01:13:06   | They're both in the show notes for you.                                                                     |
| 01:13:08   | Yeah, I think another one.                                                                                  |
| 01:13:11   | I'm not sure if you've seen [[Federico Viticci\|Federico Viticci's]] [[MusicBot\|MusicBot Pro]].                          |
| 01:13:15   | Yeah.                                                                                                       |
| 01:13:16   | So I think that was just for MaStories subscribers, but he created [[MusicBot]] which                         |
| 01:13:22   | he released for free and then he created this extra one.                                                    |
| 01:13:26   | I think it's got a thousand and fifty two actions in it.                                                    |
| 01:13:28   | Yeah.                                                                                                       |
| 01:13:29   | So it's like a, it's a real serious shortcut, but he uses a lot of the [[Toolbox Pro]] music                |
| 01:13:34   | actions to let you do more.                                                                                 |
| 01:13:36   | So you can like music in it.                                                                                |
| 01:13:38   | You can start playing music that isn't inside your library, which [[Shortcuts]] doesn't currently               |
| 01:13:43   | let you do.                                                                                                 |
| 01:13:44   | So I mean, you know, that sort of blew my mind seeing what he'd conjured up out of nowhere.                 |
| 01:13:49   | Just the idea of dragging in a thousand actions, it just makes me tired, just thinking about                |
| 01:13:54   | it.                                                                                                         |
| 01:13:55   | Yeah.                                                                                                       |
| 01:13:56   | How do you manage a shortcut like that?                                                                     |
| 01:13:57   | I'm not quite sure.                                                                                         |
| 01:13:58   | Or even like, I imagine when he's editing it, we've got to get [[Federico Viticci\|Federico]] on it.        |
| 01:14:01   | I got to hear about this story, but you can imagine editing it, you know, like in [[Shortcuts]]                 |
| 01:14:04   | when you're scrolling to edit and sometimes you accidentally move a step, a thousand steps                  |
| 01:14:11   | and you don't know what you just moved.                                                                     |
| 01:14:13   | Oh my goodness.                                                                                             |
| 01:14:14   | Yeah.                                                                                                       |
| 01:14:15   | That, that, that would not be fun, but on the other hand, he does at least have the                         |
| 01:14:18   | 12.9" iPad.                                                                                             |
| 01:14:20   | If he was editing this on an iPhone SE, then, then we might need to send help, but he does                  |
| 01:14:26   | have 12.9" iPads or at least one of them.                                                               |
| 01:14:29   | So that does make it a little bit easier.                                                                   |
| 01:14:31   | Yeah, definitely.                                                                                           |
| 01:14:32   | Yeah.                                                                                                       |
| 01:14:33   | For me, it's just really the scanning and text manipulation tools.                                          |
| 01:14:37   | I just find all sorts of uses for them, you know, the, the poor man's [[regular expressions]]                   |
| 01:14:42   | that you built in, I find uses for that stuff all the time.                                                 |
| 01:14:46   | So it's a great app.                                                                                        |
| 01:14:48   | I'm really happy that you're having success with it because I want you to continue working                  |
| 01:14:52   | on it.                                                                                                      |
| 01:14:53   | We didn't talk about that, but you can download a free copy and you get a limited set of features.          |
| 01:14:58   | But if you pay a little bit of money, you get the, you unlock the entire app.                               |
| 01:15:02   | And if you're listening this far into Automators, you probably should just be a customer.                   |
| 01:15:08   | And I have to say, you know, the fact that things like the global variables and so on                       |
| 01:15:11   | are included for free inside of the app and creating [[Apple Music]] playlist is another one                |
| 01:15:18   | that's free.                                                                                                |
| 01:15:19   | There's a lot of free actions and it's well worth it.                                                       |
| 01:15:22   | And even if you can't afford the in-app purchase, there's also a tip jar.                                   |
| 01:15:26   | So that that's another way of showing support.                                                              |
| 01:15:29   | If you, if you do like it and use it, which I'm sure the vast majority of our listeners                     |
| 01:15:33   | will find something in [[Toolbox Pro]] that can help them with their, with their shortcuts.                 |
| 01:15:38   | Rose, do you have any particular shortcuts you're using [[Toolbox Pro]] steps in that we                    |
| 01:15:44   | haven't already discussed today that you'd like to mention?                                                 |
| 01:15:46   | No, but I am working on a few.                                                                              |
| 01:15:49   | Specifically, I was, I've been experimenting.                                                               |
| 01:15:52   | I'm trying to watch more films in 2020.                                                                     |
| 01:15:56   | And so I've been experimenting with building like a little library of films that I want                     |
| 01:15:59   | to watch with the global variables and the film actions.                                                    |
| 01:16:03   | It's not finished yet.                                                                                      |
| 01:16:05   | That said, if I get it finished by the time the show releases, then I will make sure a                      |
| 01:16:09   | link to that is in the show notes and I write up a post on it so that everyone can read                     |
| 01:16:12   | about it.                                                                                                   |
| 01:16:13   | But I'm liking the get movie details for that one as well so that I can add it to, of                       |
| 01:16:18   | course, there, there might end up being some air table in the background, but at the moment                 |
| 01:16:22   | I'm just building quite a large dictionary and storing it in a global variable.                             |
| 01:16:25   | Well, Alex, hey, you're a busy guy.                                                                         |
| 01:16:28   | You're editing documentary films, you're creating an app that we all, all love.                             |
| 01:16:34   | What do you do with your free time, man?                                                                    |
| 01:16:38   | What free time?                                                                                             |
| 01:16:40   | That's it.                                                                                                  |
| 01:16:41   | If people want to find you, we've been mentioning the [[Twitter]] account.                                  |
| 01:16:44   | What is the [[Twitter]] account for the app?                                                                |
| 01:16:46   | It's @toolboxproapp.                                                                                        |
| 01:16:47   | Okay.                                                                                                       |
| 01:16:48   | So make sure you follow that.                                                                               |
| 01:16:50   | And do you have a website we can point folks to?                                                            |
| 01:16:53   | Yeah, it's [toolboxpro.app](https://toolboxpro.app).                                                        |
| 01:16:55   | So pretty simple.                                                                                           |
| 01:16:56   | Oh, dot app.                                                                                                |
| 01:16:57   | Yeah.                                                                                                       |
| 01:16:58   | Nice.                                                                                                       |
| 01:16:59   | Excellent.                                                                                                  |
| 01:17:00   | And the app is called [[Toolbox Pro]].                                                                      |
| 01:17:01   | Everybody go check, check it out, make sure you get a copy for yourself.                                    |
| 01:17:07   | And of course, don't forget that you can, of course, follow both [[Toolbox Pro]] and Automators             |
| 01:17:12   | on [[Twitter]].                                                                                                 |
| 01:17:13   | We are @automatorsfm [[Toolbox Pro]] is @toolboxproapp.                        |
| 01:17:17   | And there are, of course, places where people can find you, David.                                          |
| 01:17:21   | Yeah, you can find me over at [macsparky.com](https://macsparky.com) that points to everything.                                     |
| 01:17:25   | And you can find me at [rosemaryorchard.com](https://rosemaryorchard.com), which also points to everything. |
| 01:17:29   | You can find the show over at relay.fm/automators.                                                          |
| 01:17:32   | Or if you want to join us in our forums, that is a [talk.automators.fm](https://talk.automators.fm).                                      |
| 01:17:36   | We do have a thread for every show.                                                                         |
| 01:17:38   | Feel free to deluge Alex with future requests.                                                              |
| 01:17:41   | I cannot promise that he will implement any or indeed all of them, but it's always interesting              |
| 01:17:46   | to see what you are using the shortcuts for that we share in our show notes.                                |
| 01:17:51   | The [[Instagram]] shortcut is, of course, in the show notes.                                                    |
| 01:17:53   | So share any toolbox pro shortcuts that you have built with us so that we can all explain                   |
| 01:18:00   | with joy and see what people are actually doing with this app.                                              |
| 01:18:04   | Thank you, TextExpander, Zapier, and Kensington.                                                            |
| 01:18:07   | And we'll see you next time.                                                                                |
| 01:18:08   | Goodbye, everybody.                                                                                         |
