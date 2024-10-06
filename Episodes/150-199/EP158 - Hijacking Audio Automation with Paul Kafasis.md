---
status: incomplete
fc-date:
  year: 2024
  month: 6
  day: 28
fc-category: podcast
podcast: Automators
published: 2024-06-28
duration: 3184
formattedduration: 00:53:04
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Paul Kafasis
notetype: episode
showpage: http://relay.fm/automators/158
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators158.mp3
episode: 158
title: "158: Hijacking Audio Automation with Paul Kafasis"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary are joined by Paul Kafasis from Rogue Amoeba to talk about automating audio, as well as his personal magic.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 158 Discussion](https://talk.automators.fm/t/158-hijacking-audio-automation-with-paul-kafasis/17775)

# Sponsors
- [[ScreenCastsONLINE (Sponsor)|ScreenCastsONLINE]] - Get The Most Out of Your Apple Devices.
- [[ScriptRunner for Jira (Sponsor)|ScriptRunner for Jira]] - The ultimate Jira automation and customisation toolset.

# Show Notes
- [Rogue Amoeba | Quality Audio Software for MacOS](https://rogueamoeba.com/)
- [Rogue Amoeba | Audio Hijack: Record Any Audio on MacOS](https://rogueamoeba.com/audiohijack/)
- [Audio Hijack Manual — Scripting and Automation | Rogue Amoeba](https://rogueamoeba.com/support/manuals/audiohijack/?page=scripting)
- [Creating a script from start to finish | Rogue Amoeba](https://rogueamoeba.com/support/knowledgebase/?showArticle=AH-Scripting-CreationExample)
- [Running Audio Hijack scripts via external triggers | Rogue Amoeba](https://rogueamoeba.com/support/knowledgebase/?showArticle=AH-Scripting-Triggering&product=Audio+Hijack)
- [Example scripts for Audio Hijack | Rogue Amoeba](https://rogueamoeba.com/support/knowledgebase/?showArticle=AH-Scripting-SampleScripts)
- [A complete scripting API reference for Audio Hijack | Rogue Amoeba](https://rogueamoeba.com/support/knowledgebase/?showArticle=AH-Scripting-API)
- [SoundSource Manual — Using Shortcuts with SoundSource | Rogue Amoeba](https://rogueamoeba.com/support/manuals/soundsource/?page=shortcuts)
- [Farrago Manual — Automation and Scripting | Rogue Amoeba](https://rogueamoeba.com/support/manuals/farrago/?page=scripting)
- [2024 winners and finalists - Apple Design Awards](https://developer.apple.com/design/awards/)
- [SoundSource: A Superior Sound Control | Rogue Amoeba](https://rogueamoeba.com/soundsource/)
- [Farrago: Robust, rapid-fire soundboards | Rogue Amoeba](https://rogueamoeba.com/farrago/)
- [Farrago Manual — Stream Deck Support | Rogue Amoeba](https://www.rogueamoeba.com/support/manuals/farrago/?page=streamdeck)
- [Welcome to Stream Deck | Elgato](https://www.elgato.com/us/en/s/welcome-to-stream-deck)
- [CustomShortcuts – Customise menu keyboard Shortcuts](https://www.houdah.com/customShortcuts/)
- [Adding custom keyboard Shortcuts | Rogue Amoeba](https://rogueamoeba.com/support/knowledgebase/?showArticle=Misc-CustomKeyboardShortcuts&product=General)
- [Retrobatch 2, from Flying Meat](https://flyingmeat.com/retrobatch/)
- [Samples of Retrobatch workflows and scripts](https://github.com/ccgus/Retrobatch-Samples)
- [Quartz Composer - Wikipedia](https://en.wikipedia.org/wiki/Quartz_Composer)
- [Taskheat — a visual to-do list app for Mac, iPad, and iPhone](https://eyen.fr/taskheat/)
	- Also available in SetApp

# Transcription
  
| Time Index | Transcription                                                                                                 |
|:---------- |:------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about learning all about your                     |
| 00:07      | tech and getting it to do your bidding for you so you don't have to do anywhere near                          |
| 00:11      | as much work.                                                                                                 |
| 00:12      | I'm Rosemary Orchard and joined, as always, by David Sparks.                                                  |
| 00:14      | Hey, David, how are you?                                                                                      |
| 00:15      | Excellent.                                                                                                    |
| 00:16      | Excellent.                                                                                                    |
| 00:17      | So happy to be here, Rose, and talking automation with you.                                                   |
| 00:21      | And today we've got a guest.                                                                                  |
| 00:22      | Welcome to the show, [[Paul Kafasis]].                                                                        |
| 00:25      | Thank you.                                                                                                    |
| 00:26      | Good to be here.                                                                                              |
| 00:27      | Yeah.                                                                                                         |
| 00:28      | Paul is the, I think I would call it the chief mugwump and broom pusher over at [[Rogue Amoeba]].             |
| 00:37      | In my opinion, the best audio software company out there in the [[Apple]] ecosystem.                              |
| 00:43      | You guys make a lot of applications, including [[Audio Hijack]], which I'm using at this very                 |
| 00:47      | moment to record this very show.                                                                              |
| 00:50      | Excellent.                                                                                                    |
| 00:52      | We always like to hear that.                                                                                  |
| 00:54      | I do the occasional podcast, and it's always good to hear that our software is helping                        |
| 00:58      | people make these shows.                                                                                      |
| 01:00      | Yeah.                                                                                                         |
| 01:01      | You could put that on the website, the preference of podcasters.                                              |
| 01:05      | So many apps you make are useful for audio production and podcast type work.                                  |
| 01:10      | I also use [[Fission]] to edit all my ads for the show because it's just like the perfect mix.                |
| 01:16      | You guys make some great stuff.                                                                               |
| 01:17      | But more importantly, you guys are also in the automation space with some of the apps                         |
| 01:22      | you do.                                                                                                       |
| 01:23      | And Paul, you've been around a long time in this community, and we are looking forward                        |
| 01:27      | today to talking to you about a little bit about automation from a developer perspective                      |
| 01:30      | along with what you do, and maybe even a little bit of the news coming out of [[WWDC]] this year.             |
| 01:37      | Yeah, absolutely.                                                                                             |
| 01:39      | As you said, we've been around a long time.                                                                   |
| 01:40      | It's almost 22 years now, and we've seen some changes in terms of how automation works                        |
| 01:45      | on [[Apple|Apple's]] platforms and tried to adapt to those.                                                             |
| 01:49      | Paul, one thing I've never had a chance to ask you is, how is it that you got into this                       |
| 01:56      | audio specialty?                                                                                              |
| 01:59      | What was it that led you down the road to learn so much about the Mac's audio systems?                        |
| 02:05      | Well, it's a good question.                                                                                   |
| 02:08      | There's not a single answer like, oh, we decided we wanted to make audio software, and that's                 |
| 02:12      | what we were going to do.                                                                                     |
| 02:14      | The three co-founders, myself, Quentin and Alex, had all worked on various MP3 players                        |
| 02:20      | for the Mac, software MP3 players back in the late 90s and early 2000s before [[iTunes]].                     |
| 02:27      | We had just a hobbyist audio background, and Alex had some more experience with [[DSP]] and                   |
| 02:34      | audio software in general.                                                                                    |
| 02:37      | We had a little bit of background there, and that's what led to our first product, which                      |
| 02:40      | was the very original, the very first version of [[Audio Hijack]].                                            |
| 02:44      | There was an opening there where people needed to record audio from other sources on their                    |
| 02:49      | Mac, besides just a microphone, and there wasn't a way to do it, so we created a way                          |
| 02:52      | to do that.                                                                                                   |
| 02:55      | Everything really just grew from there where I'd have to really think about the exact order                   |
| 03:01      | of the products, but it was all customers coming to us and saying, as you just mentioned,                     |
| 03:05      | [[Fission]], that's our audio editor.                                                                         |
| 03:07      | People said, oh, I recorded something with [[Audio Hijack]], now I need to edit it.                           |
| 03:11      | What should I use?                                                                                            |
| 03:12      | Initially, we said, oh, here's several other editors, try those, and eventually we said,                      |
| 03:17      | well, this is silly.                                                                                          |
| 03:18      | This is clearly something that our users can use, a huge percentage of our existing users                     |
| 03:22      | can use, and so we said, all right, let's make an audio editor, and we made [[Fission]].                      |
| 03:28      | We had the ability to capture any audio, and so in the mid-2000s, when [[Apple]] had the [[AirPort Express]], |
| 03:34      | people said, oh, I want to stream audio to the [[AirPort Express]], and what eventually                       |
| 03:38      | became [[AirTunes]] and [[AirPlay]] on dozens, hundreds of devices, and we said, all right, well,             |
| 03:43      | we have half of that equation, we have the audio capture part, so you can take audio                          |
| 03:46      | from your web browser or [[Spotify]] or whatever, audio source.                                               |
| 03:50      | Now we need the half that sends audio out to those devices, but again, it was just customers                  |
| 03:55      | coming to us and saying, oh, you know, you're doing X and I want to do Y that is pretty                       |
| 03:59      | related, can you make, usually it was, can you implement that in [[Audio Hijack]], which                      |
| 04:05      | sometimes we did, but sometimes we said, no, that's a very different product, that should                     |
| 04:09      | be something totally separate, and that eventually grew to where we have seven different audio                |
| 04:14      | products right now, and it was not ever something where we said, let's make a whole audio lineup,             |
| 04:19      | but it's something that developed over time.                                                                  |
| 04:21      | I mean, so often successful careers, whether you know, professional or software or whatever,                  |
| 04:27      | is leveraged expertise, you know, you get good at something, and then you're able to                          |
| 04:31      | leverage that, you know, like you took [[Audio Hijack]], you leverage that in the [[Fission]], and            |
| 04:36      | you leverage that into more, and you guys really know the audio systems inside out, but it's                  |
| 04:43      | always funny because so often is the case that that first bit of expertise is kind of                         |
| 04:48      | random, you know, it's like, you just like, you had a unique problem, like, well, let                         |
| 04:53      | me figure this out, and then suddenly everything you learn to figure that out made you good                   |
| 04:56      | at the next thing, and before you know it, you're the best audio company on the Mac.                          |
| 05:01      | Well, we appreciate that, I don't know if that's true or not, but I certainly appreciate                      |
| 05:05      | hearing it, and as you said, it's very much leverageing what we knew and growing from there,                  |
| 05:10      | and then the other thing is that there was sort of, you know, we're talking about a two-decade                |
| 05:15      | span here, there was definitely an explosion in terms of audio on the Mac, audio on computers                 |
| 05:20      | in general, where, you know, the iPod was almost, I guess it was about a year old, the                        |
| 05:25      | very first iPod was about a year old when we got started, and so that was just starting                       |
| 05:30      | to become something big, and over the next few years, that got really big, and then podcasts                  |
| 05:35      | became a thing in really in the mid-2000s, but have just exploded in the past five to                         |
| 05:41      | ten years, so it was something where we, I always tell people there's a whole lot of                          |
| 05:45      | good luck and good fortune in all of this, but as you said, it was starting with one                          |
| 05:50      | little thing, starting with [[Audio Hijack]] and saying, okay, where do we go from here?                      |
| 05:54      | And early on, we had ideas, you know, you use a computer, you have all sorts of ideas                         |
| 05:58      | for all sorts of things, games and utilities that are totally unrelated to audio, but to                      |
| 06:04      | this point, we have only had audio tools, and then we had a couple free apps that were                        |
| 06:10      | just sort of scratching an itch for ourselves, but it was never anything that we sold.                        |
| 06:13      | I don't want to say for certain that we'll never make a non-audio product, because I                          |
| 06:17      | want to leave us at least the option, but it has definitely served us well to focus                           |
| 06:22      | on that expertise, like you said.                                                                             |
| 06:23      | Yeah, excellent.                                                                                              |
| 06:24      | And another thing you guys have done, and the reason you're here today, is that you                           |
| 06:29      | guys have been looking at automation and doing various forms of it in your applications                       |
| 06:34      | for a long time, and I want to talk about a few of my favourites and some of the automation                   |
| 06:39      | tools that you guys have built, but I'd like to start a little more meta in terms of just,                    |
| 06:45      | you know, automation as a developer.                                                                          |
| 06:48      | How do you think about automation and, you know, decide when and when not to bring it                         |
| 06:55      | into your applications?                                                                                       |
| 06:57      | Yeah, that's a really interesting question.                                                                   |
| 07:00      | Rose said something right up top about the show itself, being about, you know, making                         |
| 07:04      | your computer do more of your work for you.                                                                   |
| 07:07      | And that's certainly the promise and the power of automation, but it's not, on the developer                  |
| 07:13      | side, there's a whole lot of work that goes into making that possible.                                        |
| 07:17      | And so we have to decide, you know, what is worth making, when is it worth making something                   |
| 07:23      | automatable, is it an action that is going to be taken a lot, is it an action that enough                     |
| 07:28      | users will find value in having automation surrounding it?                                                    |
| 07:33      | And anytime we look at something, the first thing we do when we're looking at a problem                       |
| 07:38      | is we want to solve the problem manually, so that, you know, you click this button and                        |
| 07:43      | audio gets recorded, or you click a few buttons and you've set a timer so that something gets                 |
| 07:48      | recorded in the future.                                                                                       |
| 07:49      | Those are sort of two aspects of the same problem, but that second one, the timer is                          |
| 07:54      | a little bit of automation, and that's something where timers came after the initial idea of                  |
| 08:00      | just here, click this button and audio gets recorded, click the button again and it stops.                    |
| 08:05      | Then people said, all right, well, that's great, and that's working really well, but                          |
| 08:08      | now I know something's coming on in three hours, and I'm going to be out of the house.                        |
| 08:12      | How do I set it up to do it for me automatically?                                                             |
| 08:15      | So it really is something where we have to sort of think about what problems are we going                     |
| 08:20      | to solve broadly, and then what of those problems can we make possible to automate?                           |
| 08:27      | And it's something that I talked about with my co-founder Quentin recently when I was                         |
| 08:31      | talking about this show, was that there's a good amount of cost on the developer side,                        |
| 08:38      | just expense in terms of implementing this stuff, and then also maintaining this stuff,                       |
| 08:42      | because if we make something possible to automate, we know that users are going to come to rely               |
| 08:47      | on it, and we don't want to yank that out from under them.                                                    |
| 08:51      | We don't want to change things for them, so we want it to keep working and keep functioning                   |
| 08:55      | the way that they expect.                                                                                     |
| 08:57      | If someone makes a setup where, hey, this works automatically, and it does exactly what                       |
| 09:02      | I need it to, if we realise that we need to change something, we have to be very careful                      |
| 09:07      | about that, and in general, we need to be careful not to change things unless they absolutely                 |
| 09:12      | have to, so that people's setups don't break.                                                                 |
| 09:15      | So it's definitely something where, if I could snap my fingers, everything would be                           |
| 09:19      | automatable, and it would all just sort of the dream of [[Artificial Intelligence\|AI]], just tell the app to do what                      |
| 09:26      | you want, and it'll take care of it for you, but it's not the way that it works when you're                   |
| 09:30      | actually designing the software.                                                                              |
| 09:33      | It's surprisingly easy to accidentally perk on yourself into a corner as a developer where                    |
| 09:37      | you set up a series of things, and it's the domino effect where all of these things work                      |
| 09:42      | together like this, and then if something has to change on one of those earlier dominoes,                     |
| 09:47      | that first one falls down, and then domino number three and so on just don't get called                       |
| 09:51      | anymore, so being unable to have your automations continue to run would definitely be a problem               |
| 09:56      | for the users, but I can see that also being something that you wouldn't ever want to have                    |
| 10:01      | happen to your users, because we do all rely on [[Audio Hijack]], and one of the things I love                |
| 10:06      | is I click record, and it records.                                                                            |
| 10:09      | It always records, and so having your things work is pretty critical to everybody's workflow,                 |
| 10:17      | so I do appreciate the fact that you're not willing to just throw something out there                         |
| 10:22      | without any thought in advance as to whether or not you can maintain it and continue to                       |
| 10:27      | deliver it.                                                                                                   |
| 10:28      | Yeah, absolutely, I mean, we want to be circumspect about what we implement because we know that              |
| 10:33      | these are production tools for a lot of people.                                                               |
| 10:36      | I think early on, we talked about the beginnings of the company very early on, we would hear                  |
| 10:40      | from users, and two days later we might have implemented something that they suggested,                       |
| 10:45      | excuse me, and it was great, it was great fun, it was great for the user, they got something                  |
| 10:50      | very quickly, but as the user base grows to tens or even hundreds of thousands of people,                     |
| 10:56      | it's pretty dangerous to be making changes willy-nilly like that, so we need to be a                          |
| 11:00      | lot more careful about the changes we make, just period, and then especially as relates                       |
| 11:04      | to automation, because I think in the case of automation, it's something that you can't                       |
| 11:08      | necessarily see as easily if you've broken something, because, again, going back to the                       |
| 11:14      | very obvious example, you click the record button, audio comes in, it gets recorded,                          |
| 11:18      | that's an easy thing to test, but if you have some automation that relies on some dark corner                 |
| 11:23      | of the app that we made automatable but haven't touched in months, and somehow we broke that,                 |
| 11:29      | it'll be a lot harder for us to realise that until it gets to your machine and suddenly                       |
| 11:33      | your setup doesn't work, and obviously that's something we very much want to avoid, so we're,                 |
| 11:39      | as I said, we're circumspect about what we implement and careful about any changes that                       |
| 11:44      | we need to make.                                                                                              |
| 11:45      | So at this point in 2024, we're in a weird place with automation, you know, historically                      |
| 11:51      | [[AppleScript]] was the best place to automate, but it only worked on the Mac.                                   |
| 11:56      | Now [[Apple]], of course, is not just the Mac company, it's the iPhone company, and kind                          |
| 12:02      | of the Mac company, and they've got new automation platforms like [[Shortcuts]], there's a lot of                 |
| 12:08      | people doing stuff with [[JavaScript]].                                                                           |
| 12:11      | As a developer and you look at this climate, what are the automation platforms that are                       |
| 12:16      | interesting to you?                                                                                           |
| 12:17      | Yeah, it's really interesting because you mentioned [[AppleScript]] and that's really where                      |
| 12:21      | we started back in the early mid-2000s, we had [[AppleScript]] support for our biggest apps                      |
| 12:27      | and spent a decent amount of time doing that, and then sort of left it alone, and if people                   |
| 12:31      | used it, great, and nothing really needed to change too much, but [[AppleScript]] sort                           |
| 12:35      | of withered and pretty much died at this point.                                                               |
| 12:40      | Over the, maybe, you know, into the 2010s, 2015 or so, up till that point, automation                         |
| 12:46      | was, you know, in a pretty dark place where it was not on the Mac and on [[Apple|Apple's]] platforms                    |
| 12:51      | where it just wasn't well supported, and so something like [[Shortcuts]] is, that's certainly                     |
| 12:56      | the, to us, the most, how do I want to put it, it's certainly the most accessible for                         |
| 13:02      | users.                                                                                                        |
| 13:03      | [[AppleScript]] was always supposed to be very accessible, and unfortunately, though it was                      |
| 13:07      | natural language, it was still pretty hard to use, and so we found not a whole lot of                         |
| 13:11      | uptake with it.                                                                                               |
| 13:12      | We liked having that support as, you know, sort of what I call a true blue Mac app has,                       |
| 13:18      | you know, proper windows, and, you know, it works the way that it should on the Mac,                          |
| 13:21      | and part of that for a long time was [[AppleScript]] support, but more recently, having                          |
| 13:26      | [[Shortcuts]] support, I think, has supplanted that and is a lot more accessible to a lot                         |
| 13:31      | more people, so [[Shortcuts]] support is definitely the thing, sort of the, we've sort of done                    |
| 13:36      | this in stages with our apps.                                                                                 |
| 13:38      | They're not all automatable, and they don't all have super high level automation support,                     |
| 13:44      | but we're adding [[Shortcuts]] support to more of them, and then on top of that, especially                       |
| 13:48      | in [[Audio Hijack]], we've done [[JavaScript]], [[JavaScript]] scripting, and [[Unix]] scripting as well.                 |
| 13:54      | So, you know, OS 10 is based on [[Unix]] and has been for 20, 25 years now, and [[Unix]] scripting                    |
| 14:01      | is evergreen.                                                                                                 |
| 14:03      | That hasn't changed, or, you know, I really, it hasn't changed in decades, and it doesn't                     |
| 14:08      | need to because it's very powerful, so it's something where it's a good sort of base layer                    |
| 14:13      | almost like assembly language in terms of programming.                                                        |
| 14:16      | It's a good low level way to do things, and so we've opened up access to do some stuff                        |
| 14:21      | from the command line on top of [[JavaScript]], and then [[Shortcuts]] on top of that, so yeah,                       |
| 14:27      | we sort of look at this in different ways for different apps, and see what makes sense                        |
| 14:33      | for each app, like the [[JavaScript]] and [[Unix]] scripting that I'm talking about is, I think,                      |
| 14:37      | exclusive to [[Audio Hijack]], because that's where it's been the most useful, but [[Shortcuts]]                  |
| 14:42      | is in [[Audio Hijack]], it's in [[SoundSource]], it's in [[Farrago]], our soundboard app, and probably                |
| 14:48      | in more apps in the future because that is so much more accessible to people.                                 |
| 14:52      | Could you summarise for the listeners, because, you know, a lot of our listeners are automation               |
| 14:57      | enthusiasts, but not necessarily programmers, but [[Apple|Apple's]] kind of taking you guys, you developers             |
| 15:03      | on a journey in terms of [[Shortcuts]] integration, can you talk through kind of the various phases               |
| 15:08      | we've been through and where we are now?                                                                      |
| 15:11      | Yeah, well, just in terms of [[Shortcuts]] or in terms of all automation?                                         |
| 15:15      | Well, let's focus on [[Shortcuts]], and I think that's one that a lot of people are interested                    |
| 15:18      | in, and I guess the point I'm making, I'm just to kind of cheat and tell everybody,                           |
| 15:23      | it feels to me like it's been hard for developers, because [[Apple|Apple's]] changed the narrative a bit                |
| 15:28      | on how to implement them, and like time you put in on this three years ago was probably                       |
| 15:33      | not that valuable at this point, and you've got to kind of, it seems like every couple                        |
| 15:37      | of years they changed the integration with [[Shortcuts]].                                                         |
| 15:42      | For us, it's something where for a long time we have sort of taken it slow with any new                       |
| 15:47      | thing that [[Apple]] does, and I don't know how much, you know, if listeners have looked at                       |
| 15:52      | apps over the years and seen things like the Apple Design Awards, the Apple Design Awards                     |
| 15:58      | often have a category for whatever the new technology that [[Apple]] is pushing is.                               |
| 16:03      | So it'll be best new app written in [[Swift]] or best [[Shortcuts]] support in an app the very                        |
| 16:09      | first year that they announced [[Shortcuts]] support.                                                             |
| 16:12      | And that's great, it gets you great publicity, and there are developers out there who move                    |
| 16:17      | quickly and implement this stuff right away, and for us that has never been the way we've                     |
| 16:22      | done it, and it's something where we've, as I said, we've taken it slow and sort of waited                    |
| 16:27      | for these things to shake out and see, okay, this is what they're actually going to support                   |
| 16:31      | long term, and this is something that got yanked out of there, and good thing we didn't spend                 |
| 16:37      | three months implementing that because it would no longer work, as you said.                                  |
| 16:40      | So for us, we sort of waited a little while on a lot of technologies, but on [[Shortcuts]]                        |
| 16:45      | support until it had shaken out a little more and got into a point where we were comfortable                  |
| 16:51      | implementing it.                                                                                              |
| 16:52      | So I don't know that we have had the experience of needing to re-implement too much of it,                    |
| 16:56      | but it is certainly something that we see both with that and with a lot of technologies                       |
| 16:59      | that [[Apple]] introduces.                                                                                        |
| 17:02      | Well, I'd like to brag about one of your implementations because I love what you guys have done with          |
| 17:08      | [[SoundSource]].                                                                                                  |
| 17:09      | So just for the audience who haven't, are familiar with this app, it's a Mac app, it                          |
| 17:13      | works out of your menu bar, and it is the sound controller that [[Apple|Apple's]] [[Control Centre]]                         |
| 17:20      | should have had, honestly, in my opinion.                                                                     |
| 17:23      | It's like, it gives you minute and granular control over all the way audio comes in and                       |
| 17:28      | out of your device.                                                                                           |
| 17:30      | And I've been a fan of the app for a long time, but I needed to do something in [[Shortcuts]]                     |
| 17:35      | and Automation.                                                                                               |
| 17:36      | I make these what I call setup automations where if I'm going to podcast, I want to                           |
| 17:42      | clear the screen and put the recording app on, and I wonder if I could also tell it which                     |
| 17:47      | microphone to listen to and which headphones to point out.                                                    |
| 17:52      | Because I tried this in the past and it never worked, and I just took a look, and I didn't                    |
| 17:55      | even think of [[SoundSource]], but [[SoundSource]] is all that stuff.                                                 |
| 17:59      | You guys went nuts with [[Shortcuts]] support in that app.                                                        |
| 18:03      | As an automator and a maker of the Automators podcast, thank you on this one, man.                            |
| 18:07      | You guys went above and beyond there.                                                                         |
| 18:09      | Well, I've got a big grin on my face because that is one where, as you said, we went a                        |
| 18:14      | little nuts and [[SoundSource]] is designed to provide you control over audio on your Mac.                        |
| 18:19      | So as you said, adjusting audio devices, adjusting audio from specific applications.                          |
| 18:24      | But if [[SoundSource]] is not doing anything for you, you can still use its [[Shortcuts]] support                     |
| 18:29      | to do things like you just said, change what is the input device right now, change what                       |
| 18:35      | is the output device, basically automating audio stuff on your computer even if you're                        |
| 18:40      | not really using [[SoundSource]] to do anything else.                                                             |
| 18:43      | And that was something that we implemented this and we said, all right, this is really                        |
| 18:48      | cool and it's a little hard to advertise because we're basically saying, hey, even if you don't               |
| 18:53      | think you need any of the stuff that [[SoundSource]] itself does, if you're trying to automate                    |
| 18:58      | anything, that's another reason to use this app because it will provide you with those                        |
| 19:02      | hooks to make those changes that you're describing and many others.                                           |
| 19:06      | And it's, for most people, I think it's probably just a little bonus of using [[SoundSource]].                    |
| 19:11      | But hopefully we can find some people who, you know, wouldn't otherwise check out [[SoundSource]]                 |
| 19:15      | and say, oh, wait a minute, you just made a whole big chunk of the Mac, you know, the                         |
| 19:19      | Mac's audio system, scriptable, automatable, and that's actually really useful even if                        |
| 19:24      | I'm not focused on the other things that [[SoundSource]] can do.                                                  |
| 19:27      | Yeah.                                                                                                         |
| 19:28      | And so I'm talking to you, Automator's audience, if you want control in [[Shortcuts]] over audio,                 |
| 19:34      | there's a, get [[SoundSource]].                                                                                    |
| 19:35      | I mean, I have bot apps for their shortcut supports.                                                          |
| 19:38      | I already had had bought [[SoundSource]], so it was icing on the cake for me.                                     |
| 19:43      | But I think for us, Automator's, we need to share the story and this is a good one.                           |
| 19:48      | Thanks for doing that.                                                                                        |
| 19:49      | Absolutely.                                                                                                   |
| 19:50      | Yeah.                                                                                                         |
| 19:51      | One of the things that I use, the [[Shortcuts]] actions from [[SoundSource]] to do is, as part                        |
| 19:55      | of various different setups, I use [[Moom]] to put certain applications on certain displays,                      |
| 20:02      | depending on what I'm doing.                                                                                  |
| 20:03      | And one of my work setups does involve having [[Infuse]] open to play some videos or whatever                     |
| 20:08      | from my local machine while I am doing other work.                                                            |
| 20:12      | But specifically, I put [[Infuse]] over on my studio display monitor, which is my secondary                       |
| 20:18      | monitor.                                                                                                      |
| 20:19      | I have a 34-inch ultra-wide as my main.                                                                       |
| 20:20      | And one of the things that I do is I also use [[SoundSource]] to set the audio output for                         |
| 20:26      | [[Infuse]] to the studio display speakers so that it's coming out of the speakers that the picture                |
| 20:31      | is on.                                                                                                        |
| 20:32      | It's under, right?                                                                                            |
| 20:33      | I got you.                                                                                                    |
| 20:34      | Yeah.                                                                                                         |
| 20:35      | And so, and I love the fact that you can redirect specific application audio to certain speakers              |
| 20:40      | through [[Shortcuts]], as well as just say, hey, I want my output to go to these speakers.                        |
| 20:47      | Because usually what I do is I'll say, hey, I want general output to be going to these                        |
| 20:50      | speakers now, but I want this application to be going to those speakers over there instead.                   |
| 20:56      | And that honestly makes a world of difference for me.                                                         |
| 20:58      | And also, yeah, being able to deal with the sound effects as a thing, because sound effects                   |
| 21:06      | going to the same speaker as everything else sometimes is exactly what I want.                                |
| 21:10      | And sometimes it's maddening because it's loud as heck, and yeah, absolutely.                                 |
| 21:15      | Yeah, exactly.                                                                                                |
| 21:16      | So I love the fact that I can control all of that with [[Shortcuts]] as part of this.                             |
| 21:20      | So thank you for adding that, because I do really appreciate it.                                              |
| 21:23      | I will definitely pass this along to Nathan, who's the lead developer on [[SoundSource]].                         |
| 21:29      | He is probably, within the company, he's probably the person most interested to jump                          |
| 21:33      | on a new technology.                                                                                          |
| 21:35      | By the time we got to [[Shortcuts]], it wasn't brand new anymore, but it was definitely his                       |
| 21:39      | doing that we had so much support for, you know, almost, I think there's like two dozen                       |
| 21:43      | actions in there that we can do.                                                                              |
| 21:45      | So absolutely.                                                                                                |
| 21:46      | Yeah, I mean, as someone who records audio, it's maddening that the Mac often, without                        |
| 21:51      | you realising it, decides that even though you have all your audio pointed at your headphones,                |
| 21:56      | that it's just going to do all sound effects through the speakers, because why not?                           |
| 22:02      | And getting to that control is not easy, as [[SoundSource]] just puts it right in front of                        |
| 22:06      | you.                                                                                                          |
| 22:07      | Yeah, I always wonder, like, when you see something like this, how come [[Apple]] doesn't                         |
| 22:13      | spend more time, you know, on their controls, because this is, I mean, you guys, I'm sure                     |
| 22:19      | there's a lot of audio programming involved with this, because you're rerouting.                              |
| 22:24      | But there's also a delightful bit of user interface here that, you know, the vendor                           |
| 22:31      | didn't do.                                                                                                    |
| 22:32      | Like, you know, [[Apple]] didn't make it nice like this.                                                          |
| 22:35      | And it's just, well, you know, I guess it gives you a market.                                                 |
| 22:39      | I was going to say, don't talk them into it, you know, it's certainly, I don't know, it's                     |
| 22:46      | a huge platform, and it's a huge, how many platforms do they have now, you know, a half                       |
| 22:49      | dozen platforms.                                                                                              |
| 22:50      | So it's even as big a company as they are, there's hopefully always going to be places                        |
| 22:54      | where third parties like us can step in and say, okay, you know, the base level is good                       |
| 22:59      | enough to ship, but we can hopefully make something that's better and that helps some                         |
| 23:04      | people.                                                                                                       |
| 23:05      | And yeah, over time, we have to sort of adapt and see where those openings get sealed up.                     |
| 23:11      | But for now, [[SoundSource]]s is hopefully doing things that they're not doing that are useful                    |
| 23:17      | for people.                                                                                                   |
| 23:18      | And that's always my favourite apps is the developers who will take weeks and months                          |
| 23:23      | and sometimes years making something really good that just doesn't get the attention at                       |
| 23:29      | the fruit company.                                                                                            |
| 23:30      | Like, you know, they're just never going to stop and think about this, the sound problem                      |
| 23:36      | and the way you guys do and constantly revisit, you know, it just doesn't happen.                             |
| 23:41      | And that's nice.                                                                                              |
| 23:45      | This episode of The Automators is brought to you by ScreenCastsOnline.                                        |
| 23:49      | Get the most out of your [[Apple]] devices and save 20% on your plan.                                             |
| 23:53      | Just go to screencastsonline.com/automators.                                                                  |
| 23:58      | We love our [[Apple]] devices for their innovation and style, but it can be hard to keep up with                  |
| 24:04      | the ever-evolving world of apps and services.                                                                 |
| 24:07      | ScreenCastsOnline is on hand to help.                                                                         |
| 24:10      | They've been providing video tutorials for 19 years, so you can unlock the full potential                     |
| 24:15      | of your [[Apple]] hardware.                                                                                       |
| 24:17      | ScreenCastsOnline is for everyone, regardless of skill level.                                                 |
| 24:21      | Each tutorial is designed for maximum learning and minimal time.                                              |
| 24:25      | So stop struggling with unfamiliar programs and unlock access to all their existing content,                  |
| 24:31      | from new releases to old favourites, all without breaking a sweat.                                            |
| 24:35      | So how does it work?                                                                                          |
| 24:37      | Each week, ScreenCastsOnline publishes a 30- to 40-minute [[Apple]]-related video tutorial,                       |
| 24:43      | as well as a shorter 10- to 15-minute tip video that gets added to its ever-expanding                         |
| 24:48      | library of over 1,300 tutorials.                                                                              |
| 24:51      | As a member, you have access to the whole archive, which you can access through the ScreenCast                |
| 24:56      | Online website or through their dedicated Mac and iOS app, or sit back and watch on                           |
| 25:01      | your [[Apple TV]].                                                                                                |
| 25:02      | You'll also get access to all issues of their monthly digital magazine, which is filled                       |
| 25:07      | with content that helps you learn more about all aspects related to your device, with original                |
| 25:12      | articles from contributors like Don McAllister, Allison Sheridan, and even myself.                            |
| 25:18      | So if you want to improve your skills with macOS, iOS, iPadOS, or watchOS, and with applications              |
| 25:24      | like Alfred, OmniFocus, Hazel, DEVONthink, GoodNotes, TextExpander, AirTable, and more,                       |
| 25:30      | and soon visionOS and Apple Intelligence as well, then a subscription to ScreenCastsOnline                    |
| 25:36      | is for you.                                                                                                   |
| 25:38      | And as an automator's listener, you can get 20% off of a monthly, quarterly, or annual                        |
| 25:42      | subscription.                                                                                                 |
| 25:43      | The discount will be applied at each renewal for as long as your subscription is active.                      |
| 25:48      | Go to screencastsonline.com/automators and choose your plan.                                                |
| 25:53      | Once again, that's screencastsonline.com/automators to get 20% off your plan and get                     |
| 26:00      | access to the whole library.                                                                                  |
| 26:02      | With so many hardware and software updates coming, there's never been a better time to                        |
| 26:06      | join ScreenCastsOnline.                                                                                       |
| 26:08      | And our thanks to ScreenCastsOnline for their support of the automators and all of RelayFM.                    |
| 26:16      | This is the only app, though.                                                                                 |
| 26:18      | I don't know how to pronounce it.                                                                             |
| 26:19      | Is it [[Farrago]]?                                                                                               |
| 26:20      | I never know how to pronounce it.                                                                             |
| 26:21      | [[Farrago]], yeah.                                                                                               |
| 26:22      | Yeah, okay.                                                                                                   |
| 26:23      | So you've got [[Shortcuts]] in [[Farrago]] as well.                                                                  |
| 26:26      | Yep.                                                                                                          |
| 26:27      | So that's our, as I mentioned earlier, that's our sound board app.                                             |
| 26:29      | And that's sort of a natural place to have some automation, because people often hook                         |
| 26:36      | up external controllers.                                                                                      |
| 26:38      | So [[Stream Deck]] is a really popular one.                                                                       |
| 26:40      | But any sort of [[MIDI]] device, [[OSC]] is another way to control things.                                            |
| 26:45      | So [[OSC]], [[Stream Deck]], [[MIDI]] support, that app has support for a whole bunch of controllers.                     |
| 26:50      | That's another one where Nathan, our sort of most techno file developer, did a lot of                         |
| 26:55      | that work.                                                                                                    |
| 26:57      | And so it's something where, you know, if you hit a button on your physical hardware,                         |
| 27:02      | then you can cause a sound to play or cause a set of sounds to play.                                          |
| 27:07      | And it's something where, yeah, it was a natural fit for automation, not full automation.                     |
| 27:13      | We mentioned timers earlier where, you know, that's, you walk away from the computer and                      |
| 27:17      | it does what you want.                                                                                        |
| 27:18      | And when you come back, it's done.                                                                            |
| 27:19      | This is more of the sort where, you know, you hit one button and two or three or five                         |
| 27:25      | or ten things happen that you wanted to happen in succession.                                                  |
| 27:28      | And that's, that to me is really, it feels really visceral when you can hit one button                        |
| 27:33      | and a whole bunch of actions occur.                                                                           |
| 27:35      | It really, that to me feels like you've really saved a lot of time, saved a lot of energy.                    |
| 27:40      | And yeah, that was sort of a really natural fit for [[Farrago]].                                                   |
| 27:43      | Yeah.                                                                                                         |
| 27:44      | I think you guys are really smart to also explore [[Stream Deck]] as an audio company and                         |
| 27:50      | someone who works with audio.                                                                                 |
| 27:52      | Stream decks are hugely important, but it also is a crossover device for us automators.                       |
| 27:58      | So yeah, it just makes so much sense for, for [[Rogue Amoeba]] to be, to be playing in that                   |
| 28:04      | space.                                                                                                        |
| 28:05      | Yeah.                                                                                                         |
| 28:06      | That's one where we saw a decent amount of users who said, oh, I have this, you know,                         |
| 28:10      | this, if people don't know a [[Stream Deck]] is a, it's a little keyboard with really nice                        |
| 28:15      | little keys that can have pictures in them, LCD keys.                                                         |
| 28:20      | And you can use it to do just about anything on your computer.                                                |
| 28:22      | But the name, as the name implies, it's often used by streamers, people, people doing video                   |
| 28:26      | and audio.                                                                                                    |
| 28:27      | And if there's one podcast, Paul, you can go on that people are going to know what [[Stream Deck]] is.        |
| 28:31      | Yeah.                                                                                                         |
| 28:32      | That's right.                                                                                                 |
| 28:33      | Of course.                                                                                                    |
| 28:34      | Of course.                                                                                                    |
| 28:35      | But yeah.                                                                                                     |
| 28:36      | So it was something for us where people came to us and they said, you know, I'm using this                    |
| 28:38      | thing and, and I've already got a button to do X and Y and Z and I want it to do stuff                        |
| 28:43      | in your apps.                                                                                                 |
| 28:44      | And, and yeah, it was, as you said, it was sort of a natural fit where there's sort of                        |
| 28:48      | a crossover of audio and automation and, and it worked out really well.                                       |
| 28:51      | Yeah.                                                                                                         |
| 28:52      | I'm really glad you guys are doing that.                                                                      |
| 28:55      | What's next for automation, if you want to talk about it?                                                     |
| 28:58      | I don't like to put you on the spot, but as you look at, you know, the current state of                       |
| 29:02      | automation in your apps, is there, is there directions that you're interested in pursuing                     |
| 29:07      | without committing to anything?                                                                               |
| 29:10      | That's the key.                                                                                               |
| 29:11      | Yeah.                                                                                                         |
| 29:12      | Without committing to anything.                                                                               |
| 29:13      | Yeah.                                                                                                         |
| 29:14      | I think, I think the biggest thing is getting more [[Shortcuts]] support across our apps because                   |
| 29:18      | I think, I think right now we've got three that are shipping with it and we've got, we've                     |
| 29:23      | got one that we're working on.                                                                                |
| 29:25      | So you know, we've got a, we've got seven products and about half of them have some                           |
| 29:30      | [[Shortcuts]] support and that's something where I think we can pretty easily get a nice little                    |
| 29:36      | game there where it's not a ton of work to add that support and then we can see what                          |
| 29:40      | users do with it.                                                                                             |
| 29:42      | So that's, that's probably the, the very simplest thing I would say.                                          |
| 29:45      | And then tied to that, I'd also say, you know, we were just talking about the [[Stream Deck]].                    |
| 29:51      | That's something that is well-supported in [[Farrago]], but there are other apps where that                        |
| 29:56      | could be used, [[Audio Hijack]] among them.                                                                   |
| 29:59      | And we're not currently doing anything there, but it's something where, you know, it's certainly              |
| 30:04      | on our mind.                                                                                                  |
| 30:05      | We have, we now have these devices to test with and that makes it much easier to say,                         |
| 30:09      | you know what, hey, why don't we, why don't we spend a day and fiddle with this and see,                      |
| 30:12      | you know, what, what can we do to integrate this a little bit better?                                         |
| 30:16      | So I think for us, it's not any, there's not any huge change where we say, oh, you know,                      |
| 30:22      | six months from now X, this will be a massive thing.                                                          |
| 30:25      | I think it's much more a slow sort of steady, steady crawl or walk towards more automation                    |
| 30:31      | options throughout all of the apps.                                                                           |
| 30:36      | You know, just, just a few minutes ago, we were talking, I was saying that there was                          |
| 30:38      | this dark period where [[AppleScript]] was pretty much dead and nothing had replaced it.                          |
| 30:43      | And it seemed, I don't know how much you've talked about it on the show over the years,                       |
| 30:47      | but it seemed to me like that [[Apple]] didn't really care that much about automation until                       |
| 30:52      | they bought the [[Workflow]] and [[Workflow]] and, and turned it into [[Shortcuts]] and then brought                      |
| 30:57      | that to the Mac that really sort of revitalised things.                                                       |
| 31:00      | And it certainly revitalised things for us where we said, oh, you know what, this is,                         |
| 31:05      | this shows us that [[Apple]] cares, it shows us that they are interested in supporting this                       |
| 31:08      | sort of automation and users have always cared.                                                               |
| 31:11      | But when it wasn't, when there just wasn't a good way to do it, then there wasn't a good                      |
| 31:14      | way to do it.                                                                                                 |
| 31:15      | But when the underpinnings are put back into the OS with [[Shortcuts]], it's something where                      |
| 31:21      | I feel, you know, I feel good about it for the future.                                                        |
| 31:23      | I feel like there's a good future for this and [[Apple]] has put a pretty good, pretty user                       |
| 31:28      | accessible face on this and we can extend that with our own apps.                                             |
| 31:32      | Yeah.                                                                                                         |
| 31:33      | I mean, the problem with [[AppleScript]] was always that it was like too, it was too friendly                     |
| 31:38      | for developers and not friendly enough for normal users.                                                      |
| 31:42      | Absolutely.                                                                                                   |
| 31:43      | Yeah.                                                                                                         |
| 31:44      | And they just, they really picked a horse here.                                                               |
| 31:46      | [[Shortcuts]] is user friendly.                                                                                   |
| 31:47      | Yeah.                                                                                                         |
| 31:48      | And I think we saw a lot of that at [[WWDC]] because they were saying, you know, that, you know,                  |
| 31:54      | everything is app intense now and app intense are what powers and drive [[Shortcuts]].                            |
| 31:59      | So you know, they're, they're, I mean, not everything is an app intent.                                       |
| 32:02      | You know, if you say everything's an app intent, you end up with three raccoons and a trench                  |
| 32:05      | code pretending to be app intense, but you know, they're, they're, they're trying, they're                    |
| 32:09      | clearly trying to channel people in a particular direction.                                                   |
| 32:12      | And we're seeing that especially on like the iPhone, where the [[Control Centre]], new actions                    |
| 32:17      | that developers can support is are also action button actions and their shortcut sections.                    |
| 32:23      | And the fact that they're really building all of these things together and we've seen                         |
| 32:27      | it year after year, you know, there's something that's available in [[Shortcuts]].                                |
| 32:30      | They add a new action and people do things with it.                                                           |
| 32:33      | And then [[Apple]] go, oh, that's an idea.                                                                        |
| 32:36      | And the next year, it magically appears in the operating system.                                              |
| 32:39      | Like the classic one for me is changing your background and your [[Apple Watch]] face with                       |
| 32:42      | your [[Focus Mode]] because they added [[Focus Mode]] triggers.                                                       |
| 32:45      | People went and did that manually and the next year, [[Apple]] were like, we put it into                          |
| 32:49      | [[Focus Mode\|Focus Modes]] for you.                                                                                          |
| 32:51      | And I feel like that is just such a brilliant way of, you know, really actually finding                       |
| 32:56      | out what people want.                                                                                         |
| 32:57      | Because the other thing is, is by jumping on bandwagon's too early, you can end up,                           |
| 33:02      | you know, producing, you know, some, some automation solutions or, you know, whatever                         |
| 33:06      | it is that, you know, doesn't really work the way that you would like it to.                                  |
| 33:10      | And then you're just stuck with supporting it because, you know, you've got people who                        |
| 33:13      | are really, really using it and you've got a choice between making users really unhappy                       |
| 33:18      | by taking something away that they're using or supporting something that's really difficult                   |
| 33:23      | for you to keep working on where if you done, if you'd had a little bit more time to think                    |
| 33:27      | about it, maybe you'd have come up with a better way of doing it that's, you know, nice                       |
| 33:32      | for you to maintain, but also easier for more people to use.                                                  |
| 33:34      | And I feel like you are definitely on the right end of the wait and see approach because                      |
| 33:39      | it's so easy to just be like, oh, here's a new shiny thing.                                                   |
| 33:43      | And everyone's like, shiny thing.                                                                             |
| 33:45      | And then you're like, oh, no, it's a very shiny thing that also happens to be a bug                           |
| 33:49      | magnet.                                                                                                       |
| 33:50      | So yeah, I think I think you've picked the right sort of horses to back there.                                |
| 33:56      | Yeah, hopefully, I mean, certainly, you know, as I said, if I could snap my fingers and                       |
| 34:00      | make this all work instantly, I would, I would sure as heck do it.                                            |
| 34:03      | But it's something where we're a small company and we need to focus on the things we can                      |
| 34:08      | do well for our users rather than having, as you said, ten shiny new things and then                           |
| 34:14      | half of them don't work right or, you know, they're bugs, they're buggy or, you know,                         |
| 34:17      | we need to remove some of them.                                                                               |
| 34:19      | We definitely want to take it a little slower than that and provide people with things over                   |
| 34:23      | time that get more and more useful.                                                                           |
| 34:28      | This episode of Automators is brought to you by ScriptRunner for Jira.                                        |
| 34:31      | It feels so great when you automate something that makes your work life easier.                               |
| 34:35      | ScriptRunner is the leading automation and customisation app that's changing the game                         |
| 34:39      | for Jira admins everywhere, available both on cloud and data centre.                                          |
| 34:44      | You can say goodbye to repetitive tasks with its unlimited automation, gain more control                      |
| 34:48      | over your Jira fields with conditional logic, and build workflows that mirror your processes                  |
| 34:53      | perfectly.                                                                                                    |
| 34:54      | You know how once you automate something you wonder how you ever lived without it before?                     |
| 34:58      | ScriptRunner is that.                                                                                         |
| 35:00      | And ScriptRunner is offering an exclusive deal.                                                               |
| 35:02      | Get six months free for ScriptRunner for Jira Cloud.                                                          |
| 35:05      | Just click the link in our show notes.                                                                        |
| 35:07      | Try it now.                                                                                                   |
| 35:08      | And if you want your company to try it, don't forget to let your Jira admin or IT manager                     |
| 35:12      | know.                                                                                                         |
| 35:13      | Click the link in the show notes to get six months free for ScriptRunner for Jira Cloud.                      |
| 35:17      | I'll thanks to ScriptRunner for Jira for their support of this show and Relay FM.                             |
| 35:23      | Paul, in addition to being a running a software company, you're a bit of a power user yourself.               |
| 35:29      | What are some of your automations?                                                                            |
| 35:31      | Yeah, I was thinking about this before we talked and I've got sort of a weird assemblage                      |
| 35:38      | of various automations.                                                                                       |
| 35:39      | I definitely would not think of myself as a hardcore automator, but there are definitely                      |
| 35:45      | multiple things on my Mac that if I stop and think about it, I say, oh, wait a minute,                        |
| 35:49      | that is just automation.                                                                                      |
| 35:50      | So an obvious one is just nightly backups that I have automated.                                              |
| 35:53      | So I've got [[SuperDuper!]] running on my computer and it backs up all my data.                                    |
| 35:58      | And I set that up years ago.                                                                                  |
| 36:00      | I check on it once in a while.                                                                                |
| 36:01      | It's always working great.                                                                                    |
| 36:03      | And that's an automation that I almost never think about because it just works and that's                     |
| 36:09      | perfect.                                                                                                      |
| 36:10      | And I've got things like I've got a title case script where I do a decent amount of writing                   |
| 36:16      | and I want, for headlines, I want title case and I can highlight some text and hit God,                       |
| 36:22      | I can't even remember.                                                                                        |
| 36:23      | I think it's shift command T on my computer, but, you know, and it runs a shortcut, runs                      |
| 36:30      | a script, actually a [[Shell Scripting\|shell script]] that takes that and applies title case to that text and                     |
| 36:36      | spits it back out.                                                                                            |
| 36:37      | And then something I just mentioned is custom keyboard [[Shortcuts]] on my computer.                              |
| 36:43      | So like adjusting the keyboard [[Shortcuts]] to do things like that where, you know, it's,                        |
| 36:49      | I could run that script manually if I just opened it up, fed it some text and pulled                          |
| 36:53      | it back out, but adding a custom keyboard shortcut to it makes it literally three buttons                     |
| 36:58      | to press and then suddenly it's, it's running for me.                                                         |
| 37:01      | On that one.                                                                                                  |
| 37:02      | And so are you making the keyboard [[Shortcuts]] with a third party app or are you just doing                     |
| 37:06      | it in the native keyboard system settings?                                                                    |
| 37:10      | So I was doing it, I need to find the name of the tool.                                                       |
| 37:13      | I was doing it just in the '*na-board*', native keyboard settings, which a lot of people don't                |
| 37:18      | know about and probably on this show more people know about, but it's, it's definitely                        |
| 37:23      | a very powerful thing, very powerful part of macOS that is, I don't know how [[Apple]] could                      |
| 37:29      | advertise it better, but it's, it's certainly something, throw it in the tips app or something                |
| 37:33      | like that because the ability to change your keyboard [[Shortcuts]] and to make keyboard, new                     |
| 37:37      | keyboard [[Shortcuts]] that run things like scripts makes it very easy to do powerful things with                 |
| 37:44      | just a button press.                                                                                          |
| 37:45      | But actually a couple of years ago, I found an app called [[CustomShortcuts]].                                   |
| 37:49      | I was just looking at my computer to find it and that sort of gives you a little bit                          |
| 37:52      | more of a UI, a better UI than what's in the keyboard system setting is that I'm pretty                       |
| 37:57      | sure where the, the manual, you know, the OS based changes are.                                               |
| 38:01      | So, so yeah, you can do it, you can certainly do it from system settings or you can do it                     |
| 38:06      | from, from an app like [[CustomShortcuts]].                                                                      |
| 38:09      | Is that a, is that in the App Store or is that a third party app?                                             |
| 38:14      | No, I'm looking at it right now.                                                                              |
| 38:16      | It's by, it's by who does soft, which they have a, they have a few different Mac apps                         |
| 38:22      | and I think this one's free and I'm looking, I'm poking at their website as we talk.                          |
| 38:27      | Yeah, it's just a, it's just a free download and it's just a nice little thing that makes                     |
| 38:33      | this a little, it's basically just a prettier front end for what's in the system settings.                    |
| 38:37      | I almost call them the system preferences because I'm still three years out of date                           |
| 38:41      | on that, but it's just a prettier front end for that, but it's, it's free and it's worth                      |
| 38:45      | checking out.                                                                                                 |
| 38:46      | Yeah.                                                                                                         |
| 38:47      | You even have a link to this software in your support centre as a side note under adding                      |
| 38:52      | custom keyboard shortcuts.                                                                                    |
| 38:53      | So I'll link to that document as well because yeah, that'll be useful for folks who are                       |
| 38:57      | looking just for the general Mac tip as well as the, the [[CustomShortcuts]] app by ahh [[Houdah Software]].    |
| 39:05      | I don't know how I never knew about this app.                                                                 |
| 39:07      | I'm going to have to check this out.                                                                          |
| 39:09      | [[Houdah Software]], by the way, is another just like great Mac developer, small company.                           |
| 39:14      | I remember years ago meeting the primary developer at Mac world and he's from outside the United              |
| 39:21      | States.                                                                                                       |
| 39:22      | So he brought his dad with him.                                                                               |
| 39:23      | He was there with his dad at his booth, just the nicest guy.                                                  |
| 39:26      | And they've made some really great software over the years.                                                   |
| 39:31      | So speaking of great software, there's, there is one app that I do want to mention.                           |
| 39:34      | It's by a friend of mine, Gus Mueller, who runs ahh [[Flying Meat Software]] and that's [[Retrobatch]],                |
| 39:39      | which I imagine you are very familiar with, but that is, that is one that it's funny                   |
| 39:45      | because I almost never opened the actual app itself.                                                          |
| 39:48      | I have a bunch of actions [[Retrobatch]], you know, just doing image, image adjustments                          |
| 39:53      | for me and I just have these droplets that I drop an image on and I get back the image                        |
| 39:58      | that I need and I'm all set.                                                                                  |
| 40:00      | And it's, it's this strange thing where I have this affinity for a piece of software                          |
| 40:04      | that I almost never directly open.                                                                            |
| 40:07      | It's just doing a whole bunch of work for me behind the scenes, which I really appreciate.                    |
| 40:11      | I love this user interface and I, I'm not familiar.                                                           |
| 40:16      | You have to tell me what came first, [[Retrobatch]] or [[Audio Hijack]] because they've got                      |
| 40:21      | the same look.                                                                                                |
| 40:23      | Right, right.                                                                                                 |
| 40:24      | So, so [[Audio Hijack]] three was the first, it was the first of our apps and it was the                      |
| 40:30      | first major app that had sort of a block based interface where there's a pipeline of what's,                  |
| 40:35      | what changes are going to happen.                                                                             |
| 40:36      | So we have a block that brings in your microphone and we have a block that adjusts it with the,               |
| 40:40      | with 10 band equalizer and then we have a block that sends it to a file, records it                           |
| 40:44      | to a file.                                                                                                    |
| 40:45      | So then you have this pipeline where the audio flows through and it gets impacted by all                      |
| 40:48      | these blocks.                                                                                                 |
| 40:50      | And [[Retrobatch]] definitely, as I said, Gus is a friend of mine and he was, he took liberal                    |
| 40:56      | inspiration from [[Audio Hijack]] and we were happy to, happy to have him do so and, and                      |
| 41:00      | definitely talk to him a decent amount about, you know, how this all worked and what made                     |
| 41:04      | sense from, from sort of an interface perspective.                                                            |
| 41:07      | So it's definitely, it is inspired by [[Audio Hijack]], but he then applied it to a very different            |
| 41:12      | problem space of, you know, image manipulation and, and it worked really well for that as                     |
| 41:17      | well.                                                                                                         |
| 41:18      | So I think if you look at [[Retrobatch]] in the, when you run, if you actually open the app,                     |
| 41:24      | which as I said, I don't do that often, if you run a workflow in the upper left, in the                       |
| 41:30      | left corner of the, of the little status screen there, there are a whole bunch of little                      |
| 41:36      | like 16 by 16 pixel images.                                                                                   |
| 41:40      | And one of them is, you know, just like a little running animation indicator, but one                         |
| 41:45      | of them is actually a [[Rogue Amoeba\|Rogue Amoeba's]] old logo as sort of a nod to the, to the inspiration                     |
| 41:52      | from [[Audio Hijack]].                                                                                        |
| 41:53      | That is awesome.                                                                                              |
| 41:54      | Yeah.                                                                                                         |
| 41:55      | I'm just a huge fan of like the pipes style, you know, automation.                                            |
| 41:58      | I mean, [[Shortcuts]] does it too.                                                                                |
| 42:00      | Yeah.                                                                                                         |
| 42:01      | I don't think people realise this, but in [[Shortcuts]], if there is a, and it's a little                         |
| 42:06      | difficult to see, but obviously you've got the blocks and it just goes from top to bottom.                    |
| 42:09      | There's no branching or anything like there is in [[Audio Hijack]] or [[Retrobatch]], but there                  |
| 42:13      | is a line often between actions and that line is essentially this is outputting something                     |
| 42:20      | and that is going into this next one.                                                                         |
| 42:23      | It doesn't have any of the details on it that you might hope for in, in say, [[SoundSource]]                     |
| 42:27      | or [[SoundSource]], bad example, [[Audio Hijack]].                                                               |
| 42:31      | But you know, it does, you know, the line does actually mean something if it's there                          |
| 42:35      | or not there, which is, you know, I'm going to say that they, they took inspiration from                      |
| 42:40      | you as well, because I'm sure they did because, you know, it's a great.                                       |
| 42:43      | A great example to a crib from, isn't it?                                                                     |
| 42:46      | I, well, I should, I should be clear.                                                                         |
| 42:48      | So that's, that's, you know, as you said, that's like a vertical pipeline, just a just                        |
| 42:51      | top to bottom.                                                                                                |
| 42:53      | [[Audio Hijack]] itself took inspiration from another [[Apple]] application called [[Quartz Composer]],                   |
| 42:58      | which was part of [[Xcode]].                                                                                      |
| 43:01      | And so people look that up, they can sort of see that, oh yeah, there's, there's blocks                       |
| 43:05      | that then it's, it's sort of a pipeline.                                                                      |
| 43:08      | So it's, it's certainly, I don't want to say we had this idea originally and nobody                           |
| 43:11      | else had done it, but to answer David's question, [[Audio Hijack]] did come before, before [[Retrobatch]]             |
| 43:16      | and [[Retrobatch]] took a little bit of inspiration from it, but then put its own spin on it.                     |
| 43:21      | And again, it's, it's not, you know, we don't own this interface paradigm.                                    |
| 43:25      | It's something that I'm glad to see used in other apps, because I think to, to your point,                    |
| 43:29      | it's very clear what's happening when you have a pipeline like that.                                          |
| 43:33      | You can see, okay, it's going to do a, then B, then C, or if it's going to branch, it's                       |
| 43:37      | going to do both of these things at once.                                                                     |
| 43:39      | And I think it's a really, especially for, for audio and even for images, like in [[Retrobatch]],                 |
| 43:44      | where you're not actually seeing the image get manipulated directly in front of you.                          |
| 43:49      | Basically anything that's happening sort of invisibly or in the background, it's, it's                        |
| 43:53      | nice to have some sort of a visual that tells you, okay, yes, this is, this is what's actually                |
| 43:57      | happening.                                                                                                    |
| 43:58      | I can understand the flow of things.                                                                          |
| 43:59      | Yeah.                                                                                                         |
| 44:00      | Yeah.                                                                                                         |
| 44:01      | I think that is something that's very important, especially when you're looking at any kind                   |
| 44:06      | of automation interface, or, you know, just, you know, you've got data going in a bunch                       |
| 44:12      | of places a number of times that I will be trying to plan a project and I'll end up pulling                   |
| 44:17      | out something like [[Taskheat]], because I can do something similar in that with, you know,                      |
| 44:21      | the visual flow of, you know, this comes first and then this happens and then that happens                    |
| 44:25      | and so on.                                                                                                    |
| 44:26      | And once I've done this, that enables these 15 other things.                                                  |
| 44:29      | But until I've done that, I can't do these, you know, it is such a useful interface to                        |
| 44:32      | have.                                                                                                         |
| 44:33      | Absolutely, I think it's a really great approach.                                                             |
| 44:37      | Yeah.                                                                                                         |
| 44:38      | One of the things I like about the way you implement it in [[Audio Hijack]] is that it live                   |
| 44:42      | updates the pipes and because you can have, you know, they can diverge and converge when                      |
| 44:49      | I start messing around with an automation in [[Audio Hijack]], it immediately tells me if                     |
| 44:54      | I just like rerouted audio someplace I didn't want to.                                                        |
| 44:58      | And that's nice.                                                                                              |
| 44:59      | Yeah.                                                                                                         |
| 45:00      | So the original [[Audio Hijack]] from 22 years ago, it basically had a little bit of a top                    |
| 45:06      | to bottom flow, but it was not an obvious pipeline.                                                           |
| 45:10      | And [[Audio Hijack]] Pro, which was the main app we had for about 12 or 13 years, the interface               |
| 45:19      | of it was not ideal.                                                                                          |
| 45:22      | The functionality was there, the recording of any audio was there, but it really was                          |
| 45:26      | when [[Audio Hijack\|Audio Hijack 3]] came out in 2015, that was the first one that had these blocks.         |
| 45:31      | And I think it really was revelatory for a lot of people to say, oh, you know what,                           |
| 45:34      | this makes a lot more sense because I can see it right in front of me.                                        |
| 45:38      | And it's just a lot more obvious what's going to happen.                                                      |
| 45:41      | And that was helpful for users and therefore helpful for us in terms of just making this                      |
| 45:46      | more accessible to people.                                                                                    |
| 45:48      | Have you explored a home automation at all?                                                                   |
| 45:51      | I have.                                                                                                       |
| 45:52      | I've certainly been frustrated by home automation as I think almost anyone who's done much with               |
| 45:58      | it has been.                                                                                                  |
| 45:59      | I've got, oh, I'm like walking through my house mentally.                                                     |
| 46:03      | I've got a front door lock that's, quote, smart.                                                              |
| 46:06      | I've got a garage door opener that's smart.                                                                   |
| 46:08      | Some lights.                                                                                                  |
| 46:09      | I mean, the stuff I'm doing there is pretty rudimentary.                                                      |
| 46:13      | I do like, I think it's pretty interesting what you can do now based on just adding a                         |
| 46:18      | couple of variables.                                                                                          |
| 46:20      | So when I was younger, when we were all younger, we or our parents had timed outlets, right?                  |
| 46:27      | You had those timed outlets where you could plug a lamp in.                                                   |
| 46:30      | And when you went on vacation, you'd set it to turn on the light from 6pm until 11pm so                       |
| 46:34      | that no one would know that you were away from home.                                                          |
| 46:38      | And now you can do a whole lot more because your house can know whether or not you're                         |
| 46:42      | away from home based on the presence of your cell phone.                                                      |
| 46:46      | So I don't have to set this up every time I take a trip.                                                      |
| 46:51      | When I leave the house, if I'm gone for a couple of days, it knows, oh, nobody's home                         |
| 46:55      | right now.                                                                                                    |
| 46:56      | So I'm going to turn on this light and this light.                                                            |
| 46:58      | And I can set it to be a little more dynamic where it'll turn on one light for a couple                       |
| 47:04      | hours and then another for another couple hours and then the bedroom and then turn that                       |
| 47:08      | one off last and just make it look a little more convincing, I think, without needing                         |
| 47:13      | to have three or five or 10 of those physical switches, physical outlets that have that                       |
| 47:19      | timing.                                                                                                       |
| 47:20      | So that to me is one that it's interesting just because of the added variable of your                         |
| 47:25      | phone basically tells you, tells the house, is this person home or not?                                       |
| 47:29      | I know that there's other ones that, like, my front door lock could just detect when                          |
| 47:36      | I'm coming home, it could unlock itself.                                                                      |
| 47:38      | But I live in the city and so I'm relatively near my house without actually being at my                       |
| 47:42      | house and so I think I like my mom's house where she's a little bit more rural and if                         |
| 47:48      | she's within 200 feet of her house, she's home and no one else will be within 200 feet                        |
| 47:53      | of her house.                                                                                                 |
| 47:54      | So it'd be okay if it just unlocked then.                                                                     |
| 47:56      | But I haven't gone that far because it doesn't really fit with the way that I use it.                         |
| 48:01      | But I'm always interested to do more with this because it's nice.                                             |
| 48:04      | It's nice to be able to just, you know, I'm riding my bike and I say, oh, open the garage                     |
| 48:08      | door and I don't have to carry a garage door opener with me and that works.                                   |
| 48:12      | But as I said, I found it to be not as reliable as I would like and I'm hoping that any year                  |
| 48:19      | now [[Thread]] and [[Matter]] are going to be the way that these things are powered and it'll                         |
| 48:23      | be a lot more useful for automation.                                                                          |
| 48:25      | But right now it's good but not as good as it should be, I think.                                             |
| 48:28      | Yeah, because [[Apple]] announced at [[WWDC]] the nearby or Express Mode, I think it is called,                       |
| 48:35      | or iOS 18 for home kit locks, which will need to have, I think, a U1 chip in them.                           |
| 48:43      | But essentially if you get within six feet of your front door, then it can automatically                      |
| 48:47      | unlock and to me, six feet is probably about the right range because even if I'm the only                     |
| 48:53      | person around within 200 feet, that's, I'm still pretty far away from the house.                              |
| 48:58      | I know sometimes if I unlock my front door from while I'm sitting in my car, by the time                      |
| 49:05      | I've got out of my car, grab my bags out of the boot and then made it to the front door,                      |
| 49:09      | my locks automatically relock.                                                                                |
| 49:11      | Relocking, yeah, exactly.                                                                                     |
| 49:13      | It's not something that I can change, it's built into the hardware.                                           |
| 49:16      | Yale decided, no, if you unlock it and it's been unlocked for 30 seconds and you haven't                      |
| 49:20      | touched the handle, we're locking this again because clearly you didn't mean to do it,                        |
| 49:24      | which is a great safety feature.                                                                              |
| 49:26      | I do actually really like it, but if it could be like 45 seconds, that would be so much better                |
| 49:31      | for me.                                                                                                       |
| 49:32      | So as it is, I'm working on adding a little delay into the button that I push in the car                      |
| 49:37      | because it's a virtual button.                                                                                |
| 49:38      | So theoretically, I can just say, hey, wait 10 seconds and then call this.                                    |
| 49:44      | I just haven't got around to it yet, but yeah, it's just one of those things where we're                      |
| 49:47      | going to have to wait and see what happens there.                                                             |
| 49:50      | But I think things are definitely improving a lot.                                                            |
| 49:52      | And the fact that [[Matter]] is a standard where everybody is working together, [[Apple]] and Google                  |
| 49:57      | and [[Amazon]] and everybody else is, it's going to be a good step forward in getting more                        |
| 50:04      | hardware that actually works in a standardised way.                                                           |
| 50:08      | Yeah.                                                                                                         |
| 50:09      | Well, I think it's really interesting and I'm sure, I know you've covered it on the                           |
| 50:12      | show plenty, but I think it's one of the most obvious automation use cases is sort of home                    |
| 50:19      | automation because everyone lives somewhere, obviously, and they all have some lights and                     |
| 50:24      | they all have a front door and they all have these things that you're dealing with constantly                 |
| 50:28      | and to be able to automate that just a little bit, I could explain to, it's terrible, but                     |
| 50:35      | my mom is really my example for, she's technical enough, but she's not super technical.                       |
| 50:41      | So I'm not just using your mom, I'm literally using my mother.                                                |
| 50:45      | And I could explain to her, hey, wouldn't it be nice if your lights could turn on and                         |
| 50:49      | off when you want on vacation?                                                                                |
| 50:51      | And here's how we can set that up with, at this point, like $30 worth of hardware and                         |
| 50:56      | then the [[Apple TV]] that she already has, and that'll work automatically.                                       |
| 51:00      | Whereas if I tried to explain, oh, you can automate [[Audio Hijack]] to do these various                      |
| 51:05      | things, that would be beyond, she could probably understand it, but it'd be beyond anything                   |
| 51:10      | that she was interested in.                                                                                   |
| 51:11      | I think home automation is sort of the entry point that makes sense for just about everybody                  |
| 51:17      | compared to any other sort of automation.                                                                     |
| 51:19      | Yeah.                                                                                                         |
| 51:20      | It's something that's a lot easier to understand.                                                             |
| 51:24      | And when you were saying earlier, you know, it's supposed to get better anytime, I actually                   |
| 51:28      | think it is probably going to get better.                                                                     |
| 51:31      | There's like one of the new kind of technologies emerging is these [[Human Presence Sensor\|human presence sensors]].                    |
| 51:37      | Because infrared was never really the right sensor to detect if someone's in the room.                        |
| 51:43      | If you sit still in the room long enough, it thinks you left and, you know, and so they're                    |
| 51:48      | coming out with new types of sensors that actually detect if a human is in the room                           |
| 51:52      | and where they're in the room.                                                                                |
| 51:53      | And as that stuff gets nailed down and cheaper, you know, a lot of the home automation stuff                  |
| 51:59      | like turn the lights on when I come in and turn them when I leave reliably.                                   |
| 52:03      | I think that stuff is going to get solved here pretty soon.                                                   |
| 52:06      | I sure hope so.                                                                                               |
| 52:07      | Yeah.                                                                                                         |
| 52:08      | I'm certainly interested to see it in the future.                                                             |
| 52:11      | Absolutely.                                                                                                   |
| 52:12      | Okay.                                                                                                         |
| 52:13      | Well, Paul, thanks so much for coming on and congratulations with all the success at                          |
| 52:16      | [[Rogue Amoeba]] for you automators out there that want to automate anything with audio.                      |
| 52:20      | Definitely go out to [[Rogue Amoeba]] and check it out.                                                       |
| 52:23      | [[SoundSource]] would be the one I'd tell you to get first, man, that is so useful for me                        |
| 52:27      | having all those [[Shortcuts]] actions.                                                                           |
| 52:29      | But go check it out.                                                                                          |
| 52:30      | We'll put links in the show notes for it.                                                                     |
| 52:33      | If you would like to get the ad free extended version of the show today, we're going to                       |
| 52:36      | be talking to Paul about [[Apple intelligence]] and [[WWDC]] reactions.                                               |
| 52:41      | You can sign up for that over at relay.fm/automators.                                                         |
| 52:45      | Thank you to our sponsors today, and that's our friends over at ScreenCastsOnline.                            |
| 52:51      | New sponsor.                                                                                                  |
| 52:52      | Thanks for coming on board ScreenCastsOnline and ScriptRunner for Jira.                                       |
| 52:56      | We'll see you next time.                                                                                      |
| 52:57      | Goodbye, folks.                                                                                               |
| 52:58      | Bye-bye.                                                                                                      |
| 52:59      | Thanks for watching, and I'll see you in the next one.                                                        |
