---
status: incomplete
fc-date:
  year: 2022
  month: 7
  day: 29
fc-category: podcast
podcast: Automators
published: 2022-07-29
duration: 6073
formattedduration: 01:41:13
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Sal Soghoian
notetype: episode
showpage: http://relay.fm/automators/107
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators107.mp3
episode: 107
title: "107: Control with your Voice, with Sal Soghoian"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Sal Soghoian takes David and Rosemary on an epic automation adventure. Starting with a look back at Automator on the Mac, and looking at the star Shortcuts developers now—before diving into Sal's latest project of custom voice control with OmniFocus and beyond.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Sal Soghoian]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 107 Discussion](https://talk.automators.fm/t/107-control-with-your-voice-with-sal-soghoian/14112)

# Sponsors
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[Hover (Sponsor)|Hover]] - Make a name for yourself.
- [[Trade (Sponsor)|Trade]] - Save Big, Support Small Roasters.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.

# Show Notes
- [Shared Classes & Methods: Speech](https://omni-automation.com/shared/speech.html)
- [Voice Control and Omni Automation](https://omni-automation.com/voice-control/index.html)
- [OmniFocus: Tutorial](https://omni-automation.com/omnifocus/tutorial/index.html)

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the automation podcast where we make your computers do your        |
| 00:07      | bidding for you, including with your voice.                                                          |
| 00:09      | I'm Rosemary Orchard and joined, as always, by David Sparks.                                           |
| 00:12      | Hey, David, how are you?                                                                             |
| 00:13      | Great, Rose.                                                                                         |
| 00:14      | I am really happy today.                                                                             |
| 00:16      | We've got a guest on the show that I always love to have on The Automators, the Alpha                |
| 00:21      | Automator, Sal Soghoian.                                                                              |
| 00:23      | Welcome back to The Automators.                                                                      |
| 00:25      | Oh, my goodness.                                                                                     |
| 00:27      | It is so wonderful to be back with you, too.                                                         |
| 00:29      | Yeah.                                                                                                |
| 00:30      | I so enjoy this show, and I enjoy your audience and their goals in life.                             |
| 00:35      | Yes.                                                                                                 |
| 00:36      | We want to automate.                                                                                 |
| 00:37      | And Sal, for folks who don't know, worked at [[Apple]] for many years.                                   |
| 00:43      | He is an amazing guitarist, which I never talk about, but you went to Berkeley, right,               |
| 00:48      | Sal?                                                                                                 |
| 00:49      | Yes.                                                                                                 |
| 00:50      | I actually am one of the few people who graduated from the Berkeley College of Music in Boston.      |
| 00:55      | That's me.                                                                                           |
| 00:56      | Oh, why is it unique that you graduated?                                                             |
| 00:59      | Like, do people get gigs and just head out at some point?                                            |
| 01:02      | Well, while I was there, a lot of my classmates, the better ones, would get kidnapped by bands       |
| 01:09      | that would come through.                                                                             |
| 01:10      | Sure.                                                                                                |
| 01:11      | So they'd get a couple years into the program and then disappear and go off into fame and            |
| 01:15      | fortune.                                                                                             |
| 01:16      | Yeah.                                                                                                |
| 01:17      | Well, you know.                                                                                      |
| 01:18      | But anyway, I always like to talk about that because you were just supremely talented.               |
| 01:23      | I'll never forget one time writing down the escalator at Macworld and saying, what is                |
| 01:28      | that music?                                                                                          |
| 01:29      | And it was you down there playing a guitar.                                                          |
| 01:32      | You were playing the bass line and the guitar line at the same time on one instrument.               |
| 01:35      | And I'm just like, man, this guy, this guy is something else.                                        |
| 01:38      | But it either way.                                                                                   |
| 01:39      | Showing off.                                                                                         |
| 01:40      | Yeah.                                                                                                |
| 01:41      | Either way.                                                                                          |
| 01:42      | But at [[Apple]], your job wasn't to play the guitar.                                                    |
| 01:46      | You worked extensively, I don't know, what was your exact title?                                     |
| 01:49      | But I know you were the grand poobah of automation, whatever that meant, right?                      |
| 01:53      | Actually, I was the product manager of automation technologies at [[Apple]].                             |
| 01:58      | Yeah.                                                                                                |
| 01:59      | But part of my job was playing the guitar.                                                           |
| 02:01      | I happened to, of course, hang out with the guys that were running the music software.               |
| 02:07      | And I would often bring in my [[MIDI]] guitar and plug in and show them what I wanted the                |
| 02:14      | recordings to be able to do.                                                                         |
| 02:15      | Oh, really?                                                                                          |
| 02:16      | And I would try to get features put into the software based on my own personal needs.                |
| 02:21      | They were really accommodating and great folks.                                                      |
| 02:25      | That's awesome.                                                                                      |
| 02:26      | But really, you were, I mean, because I remember, you and I first met, it had to be over ten         |
| 02:31      | years ago now.                                                                                       |
| 02:32      | I took your class when you gave the two-day [[AppleScript]] intensive at Macworld.                      |
| 02:39      | But you were telling us that even back then, how you would go to the different departments           |
| 02:45      | like the iWork team and the different teams and advocate for automation and the reason               |
| 02:50      | why we would get automation all these apps a lot of times was to sell over there, banging            |
| 02:53      | on doors and asking for help.                                                                        |
| 02:56      | Yeah.                                                                                                |
| 02:57      | I would actually move into a division.                                                               |
| 03:01      | I like the iTunes people.                                                                            |
| 03:03      | I would go over to their building and just hang out.                                                 |
| 03:07      | And then the next thing you know, I'd grab a desk and I would sit there and start looking            |
| 03:12      | at their workflows and seeing what the issues were and trying to help them with automation.          |
| 03:17      | And once they started understanding automation from the inside, then they were more agreeable        |
| 03:23      | to adding it to what they were working on.                                                           |
| 03:27      | And the iTunes folks were always very supportive.                                                    |
| 03:31      | And on occasion, they would send me on missions like we went to a mixing studio in New York          |
| 03:38      | once that was very famous and they were trying to automate the process of exporting their            |
| 03:46      | data into a format for iTunes.                                                                       |
| 03:51      | And I automated that process while being there.                                                      |
| 03:54      | And we shipped a set of scripts that are still being used by [[Apple]] today to automatically            |
| 04:00      | convert the data format you have to a higher level that they use.                                    |
| 04:06      | And the same with retail.                                                                            |
| 04:07      | I often spent a lot of time down there on Banley hanging out with the retail folks finding           |
| 04:13      | their issues and getting them involved with automation.                                              |
| 04:18      | And the same with engineering and all the different groups at [[Apple]].                                 |
| 04:22      | I considered it my job to be out with the rest of the company as much as within my                   |
| 04:27      | own world of, you know, OS product marketing.                                                        |
| 04:31      | That's kind of fascinating because I've always felt like with respect to our audience, all           |
| 04:36      | Rose and I really need to do is expose people to this.                                               |
| 04:39      | Like when we do these episodes, if somebody, we release the episodes on Friday and the               |
| 04:44      | thinking is that you'll listen to the show and then over the weekend you get some free               |
| 04:48      | time.                                                                                                |
| 04:49      | Maybe you'll try and build one of the automations we talk about.                                     |
| 04:50      | And I really feel like if you just build one and it works, suddenly you get it.                      |
| 04:56      | And before you know it, you've got, you're an automator, you know, so you did the same               |
| 05:00      | thing in the company.                                                                                |
| 05:01      | Yeah.                                                                                                |
| 05:03      | And you know, I experienced the same kind of thing when I listened to your show too.                 |
| 05:08      | Usually during the course of one of your episodes, you and Rose will come up with some clever        |
| 05:13      | thing that I hadn't thought of and it sticks in my mind.                                             |
| 05:17      | And then, you know, during the week when I get a moment or two, I'll sit down and explore            |
| 05:22      | the concepts that you brought up.                                                                    |
| 05:24      | And on more than one occasion, I have come up with whole approaches to enhance the automation        |
| 05:31      | that I do based on ideas that you guys just brought up in your podcast.                              |
| 05:36      | So it is really fertile ground what you're doing and it does trigger that kind of imagination        |
| 05:41      | in people.                                                                                           |
| 05:42      | Yeah.                                                                                                |
| 05:43      | I sure hope so.                                                                                      |
| 05:44      | I just inspire Sal to go and then we're doing it, right?                                             |
| 05:48      | I'll take that.                                                                                      |
| 05:49      | I mean, I love it whenever we get a guest on and then they just completely inspire me                |
| 05:53      | and everything that we're doing.                                                                     |
| 05:55      | And that is one of the reasons why I love having guests on and, you know, I'm going to go away       |
| 05:59      | from today's episode, I know, with a thousand and one ideas of things to do.                         |
| 06:04      | So it's great when, you know, it's great to hear from somebody who listens that that's               |
| 06:09      | what happens as well.                                                                                |
| 06:10      | Sal, before we get into, because I want to talk about omni-automation, which is your                 |
| 06:14      | the thing you've been working on so hard lately, but I just want to do a little bit more history.    |
| 06:18      | I have a question for you that I've never asked you before.                                          |
| 06:21      | Now you are, I mean, you taught me [[AppleScript]], what would I know of it?                            |
| 06:26      | You've written a great book called [[AppleScript]] 123 and you like our writing scripts for recording   |
| 06:32      | studios and retail and publishing houses.                                                            |
| 06:37      | Were you at [[Apple]] when [[AppleScript]] first came into being or you came to [[Apple]] when                  |
| 06:43      | it was already there, correct?                                                                       |
| 06:46      | Yes.                                                                                                 |
| 06:47      | I first found [[AppleScript]] in 1993 on a developer CD.                                                |
| 06:52      | I had seen this natural language that controls applications and stuff, right?                        |
| 06:58      | And I was working at a print service bureau.                                                         |
| 07:01      | I had an office doing custom design work and I was heavily into QuarkXPress and extensions.          |
| 07:08      | And I would help companies develop QuarkXTensions for publishing.                                    |
| 07:14      | And there was quite a few that I came up with and worked on, one of which was ShadowCaster           |
| 07:21      | by Lowly Apprentice, basically took that.                                                            |
| 07:26      | And it would do a drop shadow from text over images and melt it into the image.                      |
| 07:32      | And once that came out, that really changed some ideas.                                              |
| 07:35      | But I was found [[AppleScript]] there.                                                                  |
| 07:39      | And the first time I tried it, it was like late at night after work.                                 |
| 07:43      | And I'm sitting there going, it says, okay, there's this dictionary and it contains all              |
| 07:47      | these different things.                                                                              |
| 07:48      | So I looked at the dictionary, oh, there's a box, okay, and this does this.                          |
| 07:52      | And it says, you know, you should be able to just write a sentence and it works.                     |
| 07:57      | And the first script I ever wrote was set the colour of the current box to blue.                      |
| 08:05      | And once I ran that and the colour of the box changed, it changed my life.                            |
| 08:12      | So I immediately dropped all the clients I had, and I started working for like three                 |
| 08:17      | months straight around the clock on understanding this concept of automation.                        |
| 08:24      | And I started developing automations for companies.                                                  |
| 08:27      | And I kept hearing from more and more companies from around the world about needing stuff.           |
| 08:33      | You know, I wrote a script for AT&T once that found all the instances of AT&T and set the            |
| 08:41      | font and the kerning for the ampersand and changed the colour to the official blue.                   |
| 08:47      | I wrote scripts for better homes and gardens to do fractions in their recipes.                       |
| 08:54      | And I started following this and eventually focused heavily on the desktop publishing                |
| 09:02      | that was about to take off, where you had a data source and you had a layout program                 |
| 09:08      | and you use tag container publishing.                                                                |
| 09:11      | You would tag each one of the containers with a unique identifier like an MLS number or something    |
| 09:17      | like that and then run a script that automatically would go to the data source, pull out the         |
| 09:22      | relevant stuff, put it in and format it.                                                             |
| 09:25      | And that just took off and my whole career took off and started writing books and magazines          |
| 09:31      | about that.                                                                                          |
| 09:32      | And then [[Apple]] saw me and they asked me to join.                                                     |
| 09:35      | And that was back in 97.                                                                             |
| 09:37      | So I got to [[Apple]] in January of 97, which was about four years after they had started                |
| 09:43      | and dropped [[AppleScript]].                                                                            |
| 09:45      | They introduced it and immediately forgot about it.                                                  |
| 09:50      | Yeah.                                                                                                |
| 09:51      | But you know, somebody told me once, I'm going to, I'm going to toot your horn for you.              |
| 09:56      | An insider at [[Apple]] once told me, yeah, you know how [[Apple]] survived the nineties?                    |
| 10:03      | And I said, how?                                                                                     |
| 10:04      | And he said, Sal's the going.                                                                        |
| 10:05      | He said, Sal was writing these scripts for these publishing houses.                                  |
| 10:08      | They were so tied to the [[Apple]] platform because of all his scripts that they had to buy [[Apple]]        |
| 10:13      | hardware.                                                                                            |
| 10:14      | And at the time, when the company was circling the drain, what kept the lights on was the            |
| 10:18      | hardware that Sal was selling.                                                                       |
| 10:21      | Somebody told me about that, about you once I've never shared that with you.                         |
| 10:24      | Okay, let's see, that narrows it down to some people I have to look at.                              |
| 10:32      | I do think that [[Apple]] enthusiasts, we all are thankful for all the hard work you've done             |
| 10:37      | because you really did carry the torch for automation for a lot of years when [[Apple]] wasn't,          |
| 10:43      | you know, really super aggressive about it, you know, you had to like really go out and              |
| 10:49      | advocate for it.                                                                                     |
| 10:50      | And then the other thing you did to further tell you how much we all love you is you came            |
| 10:56      | up with other people, I know, this Lego paradigm for Automator, which has now become the de facto    |
| 11:04      | paradigm, you know, build a stack of triggers and actions and anybody can make an automation.        |
| 11:10      | We saw it later in a workflow, which became shortcuts.                                               |
| 11:12      | We see it in [[Hazel]].                                                                                  |
| 11:13      | I mean, we see it in [[Keyboard Maestro]].                                                               |
| 11:16      | All these apps out there are using this stack of action, component automation, yeah.                 |
| 11:22      | And you were there at the beginning.                                                                 |
| 11:25      | It was one of those rare moments in [[Apple]] history.                                                   |
| 11:31      | It was a confluence of a bunch of very creative people who just happened to have a spark together.   |
| 11:39      | It was Eric Payton and Tim Bumgarner, Todd Fernandez and me and Chris Nebel and everybody            |
| 11:47      | who was around the automation team.                                                                  |
| 11:51      | We merged two ideas.                                                                                 |
| 11:52      | Eric was working on a pipeline architecture for the command line and Tim was working with            |
| 11:58      | a pipeline architecture for [[AppleScript]] and the two got together and it was just, it took            |
| 12:05      | over and it was pretty amazing.                                                                      |
| 12:09      | And we just kept pushing it and pushing it and pushing it, but we were taking it around              |
| 12:14      | to different executives in the company trying to get buy-in and all of them were amazed              |
| 12:21      | by it, but nobody wanted to take ownership.                                                          |
| 12:25      | And it wasn't until like a Friday afternoon before [[WWDC]] when I parked on the floor outside           |
| 12:35      | in the hallway outside of the demo room over in building three where Steve was reviewing             |
| 12:40      | stuff, and I wouldn't move until they let me in to see Steve and it was like five o'clock            |
| 12:46      | at the end of the day and SJ said something like, is that all there is?                              |
| 12:52      | And somebody said, you know, Sal's out in the hallway, he's got something.                           |
| 12:56      | And so I went in, I sat down with him at an iMac and I showed him Automator, our concept.            |
| 13:04      | And it was absolutely amazing.                                                                       |
| 13:06      | I was like 10 seconds into the demo.                                                                 |
| 13:08      | It was the same demo I ended up doing on stage where you would go to a website with thumbnails,      |
| 13:15      | it would find the larger image, download them, import them into iPhoto, then make a DVD with         |
| 13:21      | those imported images.                                                                               |
| 13:23      | And I'm sitting there showing Steve this and I'm about 10 seconds into the demo and Steve            |
| 13:28      | goes, stop.                                                                                          |
| 13:30      | And I thought to myself, oh my God, there's like a year and a half with the work and that            |
| 13:36      | was it.                                                                                              |
| 13:37      | I got 10 seconds.                                                                                    |
| 13:38      | Shot down in 10 seconds, yeah.                                                                       |
| 13:40      | And then he sits here and he starts saying, okay, you're doing this because of blood and             |
| 13:44      | then you're probably going horizontal because of this and this and he is in and then he's            |
| 13:49      | and I'm listening to him analyse everything that's on the screen.                                    |
| 13:54      | And he's figured it out and he turns to me and he says, okay, these things, what do you              |
| 13:58      | call these?                                                                                          |
| 13:59      | I said, actions and he goes, what are they?                                                          |
| 14:01      | I said, they're [[Xcode]] projects and he goes, so you're down into whatever kind of code                |
| 14:05      | base that we're working with.                                                                        |
| 14:07      | And I said, yeah, and he goes, so it's code independent.                                             |
| 14:09      | I said, yes, it works with anything that's in the operates and he just like hit me with              |
| 14:13      | these questions and he goes, okay, go.                                                               |
| 14:17      | And so I continued on with the demo and during the demo Steve said impressive and I had been         |
| 14:23      | in the room with SJ many times when there was product review and trust me the word impressive        |
| 14:32      | never came up and he totally got it.                                                                 |
| 14:38      | It was absolutely stunning.                                                                          |
| 14:40      | And then at the end he turns around and he looks at all the other executives in the room             |
| 14:44      | and he says, so what's the question and it's total silence, right?                                   |
| 14:49      | Nobody's answering.                                                                                  |
| 14:51      | And one of the executives in the back, I think it was Tony Trujillo says, I don't know, but          |
| 14:57      | that's the answer.                                                                                   |
| 14:59      | And then Steve totally got it and he turned to me and he says, you want to be in the show?           |
| 15:05      | And I said, sure, I'll show this off.                                                                |
| 15:08      | And then I had to move up to San Francisco for each and become part of the Steve show                |
| 15:18      | for a week before I could actually show it off, but that's how it was born.                          |
| 15:23      | All the work from all those guys came together in that moment and Steve saw it and made it           |
| 15:29      | part of the operating system.                                                                        |
| 15:31      | All because you were willing to park your butt on the floor outside the demo room.                   |
| 15:35      | Well I just felt like it was absolutely my job to represent the talent that had been                 |
| 15:41      | gifted to us by those guys and I wasn't going to let that go until Steve saw it.                     |
| 15:48      | If Steve had said no, okay, I tried, but he had to be able to see it and that was my job             |
| 15:56      | and my job was to get in front of them and we did and the rest is history now.                       |
| 16:01      | Yeah, and there's a lot of history there.                                                            |
| 16:02      | I mean, it's the beginning of component automation, which has this now, I mean, all these children   |
| 16:09      | and grandchildren and these new products that have come out since then, which I think were           |
| 16:13      | largely inspired by that.                                                                            |
| 16:15      | So again, that's kind of awesome.                                                                    |
| 16:17      | We did our job.                                                                                      |
| 16:18      | We laid the groundwork, proved the concept and Ari and the guys have taken it and they've            |
| 16:25      | run with it.                                                                                         |
| 16:26      | Now it's so part of [[Apple|Apple's]] core with everything that we're going to have automation forever.        |
| 16:34      | It's not going to go away anymore.                                                                   |
| 16:37      | This episode of Automators is brought to you by Electric.                                            |
| 16:40      | When leading a small business is not all glamour, in fact, sometimes it's a matter of spending       |
| 16:44      | hours trying to find a laptop lost in the mail for a new hire or dealing with some other             |
| 16:47      | technical emergency, which you're well equipped to deal with, but maybe you don't have the           |
| 16:52      | time.                                                                                                |
| 16:53      | The team over at Electric knows small businesses maybe like yours face these challenges.             |
| 16:57      | That's why they've solved this problem for you by operating as your IT department and                |
| 17:01      | so spending your time searching through unused application licenses, setting up employee laptops     |
| 17:06      | and answering never ending IT questions from your team, you can build that empire.                   |
| 17:10      | With Electric acting as your IT department, you can get back to what you're good at.                 |
| 17:13      | Plus you get a really cool IT platform to see and manage everything.                                 |
| 17:18      | One of the most important management skills that you can learn is knowing when to give               |
| 17:22      | that task to somebody else to do, whether it's because they need to scale up or are                  |
| 17:27      | just interested in a new task, or maybe it's because there are better things that you could          |
| 17:32      | and should be doing with your time.                                                                  |
| 17:34      | I have to say there's been a couple of times in my career that I would have loved something          |
| 17:38      | like Electric and quite frankly, even if it's just because one more password reset request           |
| 17:43      | is frustrating you, then you know, it's worth handing that off to somebody else who's going          |
| 17:48      | to deal with all of it for you.                                                                      |
| 17:50      | You should go and check out Electric if you're working as your own IT department and doing           |
| 17:54      | your job as well.                                                                                    |
| 17:56      | For Automators listeners, Electric are offering a free pair of Beats Solo 3 headphones for           |
| 17:59      | taking a qualified meeting.                                                                          |
| 18:01      | Just go to electric.ai slash Automators, that's electric.ai slash Automators.                        |
| 18:06      | Go there now to get your free pair of Beats Solo 3 headphones today for scheduling a meeting.        |
| 18:10      | Our thanks to Electric for their support of this show.                                               |
| 18:14      | So Sal, since you left [[Apple]], the shortcuts has really come to the forefront and that                |
| 18:20      | must make you really happy.                                                                          |
| 18:22      | Oh, it's tremendously gratifying to know that the team that's working on that now are just           |
| 18:31      | so inspiring and they're really creative and they totally get it.                                    |
| 18:38      | And I'm very confident in their abilities to take that technology and keep moving it                 |
| 18:43      | forward.                                                                                             |
| 18:44      | And I think we've already seen some of the adoption that's coming up by the customer                 |
| 18:50      | base that is embracing this whole thing.                                                             |
| 18:53      | Have you seen that yourself in publications and podcasts, how people are adopting shortcuts          |
| 19:00      | all the time?                                                                                        |
| 19:01      | Hand to heart over the weekend, my wife said, I think I need to learn about shortcuts.               |
| 19:10      | She was doing something with her work where she had to go to these two websites every                |
| 19:14      | day and she's like, it's such a pain.                                                                |
| 19:15      | I'm like, oh, you could just write a little shortcut script and it would open it in [[Safari]]           |
| 19:20      | for you.                                                                                             |
| 19:21      | And she's like, okay, it's time for me to learn about shortcuts.                                     |
| 19:23      | And I said, well, I happen to have a field guide you can watch.                                      |
| 19:26      | And she's like, well, is there anybody other than you that could teach me about it?                  |
| 19:30      | I mean, your spouse really doesn't want you to be lecturing them.                                    |
| 19:37      | That's very humbling, David, isn't it?                                                               |
| 19:40      | She's a big fan of Don McAllister, you know, because we've had dinner with Don and she               |
| 19:45      | likes his Liverpool accent, you know, I said, well, maybe Don has covered it.                        |
| 19:51      | Well, that is pretty impressive.                                                                     |
| 19:55      | I'm just going with the gorilla tactic with my parents.                                              |
| 19:58      | They have shortcuts on their phone, which are home screen apps, or so they think, and                |
| 20:02      | their shortcuts.                                                                                     |
| 20:03      | And every so often they ask me, hey, can you find another one like this that does this               |
| 20:06      | sort of thing, because like their blood pressure monitor isn't a smart one.                          |
| 20:10      | So whenever they take their blood pressure, they tap the app on their phone, which pops              |
| 20:14      | up and also in the daydream puts it in the health app.                                               |
| 20:17      | So yeah, they asked me for one for, I think it was blood oxygen the other day.                       |
| 20:21      | It's like, sure, they'll take me about half a second done.                                           |
| 20:25      | Very clever, very clever, Rosemary.                                                                  |
| 20:28      | Well, I think that's the thing, you know, after shortcuts went viral with customised                 |
| 20:32      | home screens, you know, even if all those people are doing and literally all most of                 |
| 20:36      | them are doing is just an open app action, the fact that they've gone in and poked around            |
| 20:41      | inside of the app is great, and I think especially combined with the shortcuts from app section      |
| 20:46      | in iOS 16, which will display at the bottom of the folders list, you know, I think more              |
| 20:52      | and more people are going to find cool things in shortcuts that they hadn't thought about            |
| 20:56      | before, just because, you know, it's going to be easier to discover things.                          |
| 21:01      | I think previously with things being hidden in the gallery, only they didn't always show             |
| 21:06      | up and they weren't that consistent and things like that, it was difficult and less discoverable.    |
| 21:10      | And that's not a knock on the shortcuts folks, you know, they had limitations, I'm sure.             |
| 21:15      | And also, you have to start with something you can't iterate from nothing.                           |
| 21:19      | And I just love the way that this is progressing and, you know, the fact that we're seeing           |
| 21:24      | more and more easy ways both for the developers and the end users.                                   |
| 21:29      | That's the whole thing is you have to make it so that people can use it easily and benefit           |
| 21:35      | from it.                                                                                             |
| 21:36      | And once they see the benefit of automation, it's just a natural thing that people want              |
| 21:41      | to automate.                                                                                         |
| 21:42      | Yeah.                                                                                                |
| 21:43      | And it doesn't have to be super difficult.                                                           |
| 21:46      | I think that's one mistake as people trying to teach about this we can make is starting              |
| 21:51      | too complex.                                                                                         |
| 21:52      | I mean, some of my best automation is somebody who has like 600 of these things and solve            |
| 21:57      | them on my devices, but some of my best ones are like, you know, two to four steps.                  |
| 22:03      | They don't need to be super long.                                                                    |
| 22:06      | Those are the ones you don't ever have to debug and they just seem to work forever.                  |
| 22:13      | But those are the ones that also become such an ingrained part of what you do that you               |
| 22:18      | don't even think about it anymore.                                                                   |
| 22:20      | That's an automation.                                                                                |
| 22:21      | It just becomes part of your workflow.                                                               |
| 22:24      | Yeah.                                                                                                |
| 22:25      | Yeah.                                                                                                |
| 22:26      | That's just it.                                                                                      |
| 22:27      | You know, like I tap on this icon and then it pops up at, you know, a menu asking me to              |
| 22:30      | choose the registration plate of the car or the license plate.                                       |
| 22:33      | And then I choose one and then it opens up the text message, which then is ready for                 |
| 22:38      | me to send.                                                                                          |
| 22:39      | It doesn't send it automatically because this is actually one for my mom, which allows her           |
| 22:43      | to easily pay for parking at the train station by text because there is no app for parking           |
| 22:47      | at that train station, but you can send an SMS and pay for parking that way.                         |
| 22:52      | And because, you know, you've pre-registered your card with your phone number or if it               |
| 22:56      | isn't registered, they'll call you and sort that out, but then you just send a text message          |
| 22:59      | and it has to have, you know, the registration plate in and some other information, the other        |
| 23:03      | information is just hard-coded.                                                                      |
| 23:05      | And so my dad got a new car and my mom was like, oh, how do I change that?                           |
| 23:08      | And I was like, okay, well, we just opened this and we changed that there and that's                 |
| 23:11      | it.                                                                                                  |
| 23:12      | Right.                                                                                               |
| 23:13      | And, you know, and it was literally just a, we'll delete, you know, backspace on the item            |
| 23:18      | in the list for the old one and type in the new one and that's it, we're done.                       |
| 23:24      | And she was really pleased that it was so simple and has started asking for more and                 |
| 23:28      | more things.                                                                                         |
| 23:29      | Yeah.                                                                                                |
| 23:30      | And that's, you know, of course, what you want when you're trying to introduce people                |
| 23:33      | to automation.                                                                                       |
| 23:34      | So do you get good daughter points for all of this?                                                  |
| 23:38      | Of course.                                                                                           |
| 23:39      | So last week it ended up with me taking apart a battery-powered fan of her going, hey,               |
| 23:43      | this is broken.                                                                                      |
| 23:44      | Can you fix this?                                                                                    |
| 23:45      | And they're going, I'm more of a software than a hardware person, but sure, I'll take                |
| 23:49      | a look.                                                                                              |
| 23:50      | So.                                                                                                  |
| 23:51      | Yeah.                                                                                                |
| 23:52      | But Rose could fix it in a way that when you turn it on, the blinds go down in her                   |
| 23:56      | house or something.                                                                                  |
| 23:57      | Right.                                                                                               |
| 23:58      | So I was a battery-powered fan, but I'd like to report that I did successfully take it               |
| 24:01      | apart and put it back together.                                                                      |
| 24:03      | And it now works better than it did before because one of the cables was kind of like                |
| 24:06      | trapped or something.                                                                                |
| 24:07      | And so I just strained out and that solves it.                                                       |
| 24:10      | I considered trying to wire it into a home automation setup, but it's a battery-powered              |
| 24:14      | desk fan.                                                                                            |
| 24:15      | So she moves around too much.                                                                        |
| 24:17      | So I've always been curious now that shortcuts is out, it's on all these devices, are there          |
| 24:22      | two or three shortcuts that you find that you've built that you use routinely?                       |
| 24:26      | Oh, I'm a horrible example.                                                                          |
| 24:29      | Yeah.                                                                                                |
| 24:32      | I'm constantly working on automations that I don't use.                                              |
| 24:38      | The things that I do automate the most are the procedural things that help me develop                |
| 24:45      | other automations.                                                                                   |
| 24:46      | For example, every time that on the Omni Automation website that you see a script example that       |
| 24:54      | you can click and it will copy to the clip or automatically run for you on your machine,             |
| 25:02      | that's a lot of stuff that goes behind the scenes to make that so easy.                              |
| 25:06      | And I have a bunch of automations that I run to do that.                                             |
| 25:11      | I also have, especially with the new voice control stuff, I have a lot of automations                |
| 25:18      | that create the files that are used by that, and that's really where I do most of my automation.     |
| 25:27      | As far as automating my life, my personal life, I don't do much of that at all.                      |
| 25:33      | I really am all about it developing the tool side of it.                                             |
| 25:37      | I'm kind of like the cobbler whose kids don't have any shoes.                                        |
| 25:42      | It makes sense, though, because if you were a newspaper publisher, your automations would            |
| 25:49      | be about publishing newspapers, but you are an automation developer.                                 |
| 25:54      | So your automations are about developing automation.                                                 |
| 25:56      | There's nothing wrong with that.                                                                     |
| 25:59      | And I think that's kind of the thread of all this.                                                   |
| 26:01      | There are people listening to this that have all sorts of walks of life.                             |
| 26:06      | I got an email from a contractor recently who, listening to our show, he has now developed           |
| 26:14      | a bunch of shortcuts automations to automate his bid practice, because he found he was               |
| 26:19      | making mistakes.                                                                                     |
| 26:21      | We talked about on the show once that automation is great because it's fast, but it's also           |
| 26:25      | always accurate.                                                                                     |
| 26:26      | And if you're making a bid for a contract and you move a decimal point, you're out of business.      |
| 26:33      | So he picked up on that thread and wrote all automations, so his bids are always exactly             |
| 26:39      | right.                                                                                               |
| 26:40      | And he wasn't even interested in making it fast.                                                     |
| 26:42      | He was just making sure there was never a mistake.                                                   |
| 26:46      | There you go.                                                                                        |
| 26:47      | Consistency, accuracy, speed, yeah, all of those things come from automation.                        |
| 26:52      | Yeah.                                                                                                |
| 26:53      | And I think that is really the beauty of it.                                                         |
| 26:55      | There's so many little things that you can do with a tiny little app icon on your phone              |
| 26:59      | or your voice, which really just brings everything together.                                         |
| 27:04      | Do you use shortcuts more on your Mac, your iPhone, or your iPad?                                    |
| 27:12      | Since I'm working so much on with the voice control, I do it on all of the devices evenly            |
| 27:22      | because I want to make sure that it's all working across.                                            |
| 27:25      | So most of the shortcuts I do start with the Mac and they're stored there, but they exist            |
| 27:33      | on all of my devices, my iPad, my phone.                                                             |
| 27:37      | I make sure that they're all working cross-thing.                                                    |
| 27:40      | And the beauty of having those omni-automation actions as part of the default set of actions         |
| 27:48      | with omni-applications, having the ability to run a script directly into the application             |
| 27:54      | through those shortcuts, it makes them so valuable that I use them quite a bit.                      |
| 28:01      | Yeah.                                                                                                |
| 28:02      | I can tell you for me, there's no question I do it more on the Mac than anything else                |
| 28:05      | because I'm just so comfortable with the keyboard for writing shortcut text.                         |
| 28:11      | Shortcut text, you got to get it right.                                                              |
| 28:15      | And I don't like that.                                                                               |
| 28:16      | That's one thing.                                                                                    |
| 28:17      | Every time I see anybody from the shortcut see them, I say, man, make the text field bigger          |
| 28:22      | on the phone that I've had or make it so you can just click it and it takes over the text            |
| 28:28      | input field.                                                                                         |
| 28:29      | Yes.                                                                                                 |
| 28:30      | That would be pretty awesome.                                                                        |
| 28:31      | I'm still using the good old, I'll stick it in [[Drafts]].                                               |
| 28:33      | I have a dedicated [[Drafts]] tag or shortcuts text.                                                     |
| 28:37      | The only problem with that is, of course, you can't put variables in there, but a lot                |
| 28:42      | of the time, I'll want to put the same variable in multiple places.                                  |
| 28:46      | So I'll use the dictionary approach and repeat through the dictionary keys and replace my            |
| 28:51      | dictionary keys with my variables because that means that I can have amazingly long text             |
| 28:56      | in [[Drafts]], which of course I can edit anywhere, anytime.                                             |
| 28:59      | And then it's just available on all of my devices, which works really well.                          |
| 29:03      | See, Rose just took up my next week.                                                                 |
| 29:06      | Yeah.                                                                                                |
| 29:07      | There we go.                                                                                         |
| 29:09      | She does that.                                                                                       |
| 29:10      | I consider it an accomplishment when I've done that.                                                 |
| 29:14      | Sometimes she does it to me with just a picture.                                                     |
| 29:17      | Like, text message me a picture of some little automation gizmo, and she won't even give             |
| 29:23      | me a link or anything.                                                                               |
| 29:24      | She'll just send me a picture of it, and then there goes my next week.                               |
| 29:26      | Thanks, Rose.                                                                                        |
| 29:27      | Okay.                                                                                                |
| 29:28      | So I shouldn't be sending you the picture of the new robot malt vacuum that I got then,              |
| 29:31      | David.                                                                                               |
| 29:32      | No, you absolutely should.                                                                           |
| 29:33      | I want all the pictures, Rose.                                                                       |
| 29:35      | You don't understand.                                                                                |
| 29:36      | Okay.                                                                                                |
| 29:37      | I'm complaining that I love it.                                                                      |
| 29:38      | Okay.                                                                                                |
| 29:39      | Good.                                                                                                |
| 29:40      | Because that one's coming your way shortly.                                                          |
| 29:44      | This episode of the Automators podcast is brought to you by Hover.                                   |
| 29:47      | Go to hover.com/automators and make a name for yourself and get 10% off any domain             |
| 29:53      | name.                                                                                                |
| 29:54      | I'm so pleased to be reading an ad for Hover, a company that I use all the time.                     |
| 29:59      | When you get that one big idea, where do you go?                                                     |
| 30:01      | Well, your business starts with a domain name.                                                       |
| 30:04      | So for many entrepreneurs, Hover is that big leap.                                                   |
| 30:08      | Hover has over 300 domain name extensions to choose from.                                            |
| 30:11      | No matter what you want to build, there's a domain name waiting for it.                              |
| 30:15      | And they have excellent technical support to answer any questions you may have.                      |
| 30:20      | And they're dedicated to getting you online, not upselling you.                                      |
| 30:23      | Hover has free who has privacy.                                                                      |
| 30:25      | So the bad guys don't get your information, a clean user interface, monthly sales on popular         |
| 30:31      | top level domains.                                                                                   |
| 30:32      | And it's easy to see why Hover is the popular choice for people starting businesses.                 |
| 30:38      | When I decided to go out on my own as a lawyer, the one of the first things I did was buy            |
| 30:42      | the domain for Spark CSQ.com, MacSparky.com was the same.                                            |
| 30:46      | So was Mac Power Users.com.                                                                            |
| 30:48      | All of those domains were bought at Hover and they continue to be the place I go to to buy           |
| 30:53      | domain names.                                                                                        |
| 30:55      | As a longtime user of Hover, I can tell you they make it really easy to manage your domains.         |
| 31:00      | If you want to add email services or any of their other services to an account, you can,             |
| 31:05      | but they're not creepy about it.                                                                     |
| 31:06      | They're not always trying to upsell you.                                                             |
| 31:07      | Instead, they just give you a quality product for a good price.                                      |
| 31:11      | We know you like intuitive user experiences and things that just work straight out of                |
| 31:15      | the box.                                                                                             |
| 31:16      | So I know you'll appreciate Hover.                                                                   |
| 31:17      | Their user interface is really simple, clean and easy to navigate.                                   |
| 31:22      | So to buy your domain and start using it today, go to hover.com/automators and get that        |
| 31:27      | 10% discount on all new purchases.                                                                   |
| 31:30      | That URL one more time is hover.com/automators, AUTOMATORS.                                    |
| 31:36      | Go check it out.                                                                                     |
| 31:37      | Make yourself a domain and make a name for yourself with Hover.                                      |
| 31:40      | All right.                                                                                           |
| 31:41      | Thanks to Hover for their support of the AUTOMATORS podcast and all of Relay FM.                     |
| 31:47      | So after you left [[Apple]], you started doing a bunch of work with Omni Group and have been             |
| 31:52      | working extensively on Omni Automation.                                                              |
| 31:54      | Can you explain kind of generally what that is for folks and then I want to get into this            |
| 31:59      | voice thing you've been working on?                                                                  |
| 32:01      | Shortly after I left [[Apple]], I was talking to Ken Case and Ken said that they were                    |
| 32:07      | facing a challenge.                                                                                  |
| 32:09      | They were trying to provide their customers with the level of automation that they had               |
| 32:15      | been doing with [[AppleScript]], but they wanted it uniformly on all of their devices.                  |
| 32:22      | And could I assist with that?                                                                        |
| 32:24      | Could I advise them and point out directions they should take or just help them with certain         |
| 32:32      | aspects of brown automation?                                                                         |
| 32:35      | Because they come from an engineering background and I had a lot of experience with how it           |
| 32:39      | works in the real world.                                                                             |
| 32:42      | And they came upon a couple brilliant things that really opened the door.                            |
| 32:46      | The first was they based all of their Omni Automation on core [[JavaScript]] from WebKit.                |
| 32:55      | And since WebKit ships on every [[Apple]] device, they had this consistent source of highly              |
| 33:00      | optimised language that they could use.                                                              |
| 33:04      | And so Omni Automation is [[JavaScript]].                                                                |
| 33:08      | And what they did is they exposed the object model of their applications kind of like they           |
| 33:15      | did with [[AppleScript]].                                                                               |
| 33:16      | You know, in [[AppleScript]], you can script a task or a project, right?                                |
| 33:25      | And it has properties and each one of those properties is available to the script.                   |
| 33:30      | Well, they did that same thing with [[JavaScript]].                                                      |
| 33:33      | And so the first thing that we talked about was, well, how do we communicate that script             |
| 33:41      | between applications and from external sources?                                                      |
| 33:44      | And we came up with the concept of using it in a URL.                                                |
| 33:49      | You know how most applications that have URL support, they use a key value structure.                |
| 33:57      | So that you'll have this key followed by a value in the URL, then another key, then another          |
| 34:03      | key.                                                                                                 |
| 34:04      | So you have to understand and memorise all these different key value patterns and put                |
| 34:09      | them into a URL.                                                                                     |
| 34:11      | But Omni just bypass that.                                                                           |
| 34:14      | What they did is say, let's just take the script, we'll encode it so that it's URL compliant,        |
| 34:20      | and then send it.                                                                                    |
| 34:21      | And the receiving Omni application will take that, decode it, and then just execute it               |
| 34:28      | into our script engine.                                                                              |
| 34:32      | And by doing that, you didn't have to, as a script writer, I didn't have to worry about              |
| 34:37      | keys and values.                                                                                     |
| 34:38      | I just wrote the script that works, do a simple encoding on it, and voila, I had an Omni             |
| 34:44      | automation script URL.                                                                               |
| 34:47      | And then they focused on security, because you want to make sure that you just can't                 |
| 34:53      | have these things popping off whenever you go to a web page or something.                            |
| 34:58      | So they worked with [[Apple]], and [[Apple]] had some great suggestions on it.                               |
| 35:03      | And so the way that they ended up is that you had to enable external scripts.                        |
| 35:08      | And the first time any script was run, you would actually see it.                                    |
| 35:12      | And they have a window, and you can look at it, expose it, and decide whether you want               |
| 35:16      | to run it once or run it for any time from that particular source.                                   |
| 35:22      | And by doing that, you had a secure way to enable instant communication with their applications      |
| 35:29      | from various sources, other applications, buttons in a web page, those kind of things.               |
| 35:36      | And it really opened up the door.                                                                    |
| 35:39      | Now that it is totally device independent, so the same script runs on the iPhone that                |
| 35:45      | runs on the iPad that runs on the Mac.                                                               |
| 35:49      | And their repertoire and abilities are just outstanding.                                             |
| 35:53      | And that's what Omni Automation is about, it's about writing a script that works on                  |
| 35:57      | all of their devices.                                                                                |
| 35:59      | Yeah, and they have rolled that out now to believe all their products.                               |
| 36:04      | I know it's an Omni Outliner, OmniGraffle, [[OmniFocus]].                                              |
| 36:08      | Is it an Omni Plan yet?                                                                              |
| 36:09      | Yep.                                                                                                 |
| 36:10      | Yep.                                                                                                 |
| 36:11      | I mean, it's everywhere.                                                                             |
| 36:12      | Yes, and that's the beauty of it.                                                                    |
| 36:16      | It really is the way that it should be.                                                              |
| 36:19      | You know, I always thought that [[Apple]] should have a universal scripting architecture that            |
| 36:25      | works across all the devices, but they never followed that approach because they were developing     |
| 36:31      | the different operating systems separate from each other rather than as an overall strategy.         |
| 36:36      | iOS kind of popped up and lived in its own world, in its own set of buildings in Cupertino.          |
| 36:43      | So there wasn't a lot of communication between the two groups, and they developed their own          |
| 36:49      | structures that you're still working around today.                                                   |
| 36:53      | But this concept, since Omni had, you know, ownership of all four of their productivity              |
| 36:59      | apps, they were able to make this possible.                                                          |
| 37:02      | And it's been interesting that other developers have also decided that [[JavaScript]] is a default       |
| 37:08      | language that they use.                                                                              |
| 37:10      | And many of the apps like Rosemary said, like [[Drafts]], use [[JavaScript]]-based as their automation       |
| 37:18      | as well.                                                                                             |
| 37:19      | And so it works well.                                                                                |
| 37:21      | And since HTML also is integrated with [[JavaScript]], running Omni Automation within HTML works         |
| 37:27      | really well.                                                                                         |
| 37:28      | It works very good as well.                                                                          |
| 37:31      | And that's why when you go to the Omni-Automation website, the examples on the web page you          |
| 37:37      | can just click and it will execute on your machine because of this whole relationship.               |
| 37:43      | So Omni did some very clever stuff, very profound engineering work to make this all possible.        |
| 37:50      | And now what we're doing with it, we're taking it up a couple levels with the new voice control.     |
| 37:57      | And we've able now to tie in the voice language input into Omni Automation.                          |
| 38:07      | And they put in place classes within Omni Automation just for responding.                            |
| 38:13      | So there's a new voice synthesis class that's part of Omni Automation so that your script            |
| 38:18      | can talk back to you and give you a response or a prompt.                                            |
| 38:23      | And it really does make the whole process of automating what you do quite amazing.                   |
| 38:29      | Yeah.                                                                                                |
| 38:30      | So what you have done is no less than, just like you turn the world upside down with Automator,      |
| 38:36      | you've done it again, Sal, because you created an automation system that is in effect a new          |
| 38:42      | interface paradigm.                                                                                  |
| 38:44      | Like we've got the keyboard and mouse, we've got the touchscreen, and now you have wired             |
| 38:50      | up OmniFocus so you can entirely control it with your voice.                                         |
| 38:54      | And again, Sal showed this to me a month or two ago.                                                 |
| 38:57      | We had an extended video call together, and this is crazy what you've done.                          |
| 39:03      | I mean, I just never even thought of it as something that you could do.                              |
| 39:07      | It's like when you watch a science fiction movie and the user starts talking out loud                |
| 39:12      | to the computer and it does all the work for them.                                                   |
| 39:15      | That's kind of what you've done with OmniFocus.                                                      |
| 39:18      | First of all, I appreciate the word you, but this is the Omni team.                                  |
| 39:25      | It's like Tim and Ken and Greg and everybody from Omni working very hard to make this reality.       |
| 39:33      | I'm fortunate that I get to represent that, but don't think that I'm the one that makes              |
| 39:38      | all of that happen.                                                                                  |
| 39:39      | Sure.                                                                                                |
| 39:40      | I get that.                                                                                          |
| 39:41      | I contributed some to it.                                                                            |
| 39:42      | You have this knack of being around when this stuff happens, Sal.                                    |
| 39:50      | I live in the eye of the tornado, I've been told, yes.                                               |
| 39:54      | I mean, that's the calmest place to be, and it's certainly the place where you get to                |
| 39:58      | see everything that's going on.                                                                      |
| 39:59      | And I think for me, one of the things that I've always struggled with with voice is                  |
| 40:05      | that lack of interaction.                                                                            |
| 40:06      | It feels like it's a very warm way thing, and the number of times I've spoken to a                   |
| 40:11      | HomePod or I've asked Siri to do something like in car play.                                        |
| 40:15      | I had this today, and I asked it to reschedule my 2pm alarm because I was driving and I knew         |
| 40:21      | it was going to go off, but I didn't want it going off.                                              |
| 40:23      | I wanted to reschedule it for approximately when I'd be back home.                                   |
| 40:28      | So I asked Siri to reschedule it, and she goes and lists three alarms that are two,                  |
| 40:34      | two of which are turned off, so it's almost certainly not going to be those.                         |
| 40:37      | Thanks, Siri.                                                                                        |
| 40:39      | And I respond what I think is correctly.                                                             |
| 40:41      | It turns out, no, I actually had to interrupt.                                                       |
| 40:44      | And that's one of the things I really struggle with voice, knowing what you should say when          |
| 40:49      | it talks back to you, or sometimes it just doesn't give you very helpful feedback.                   |
| 40:53      | It started listing all three alarms, but it didn't tell me the name of any of them.                  |
| 40:57      | And I think this is where writing your own responses can be really useful because if                 |
| 41:03      | you're creating an automation or you're stealing one from somebody else because there's lots         |
| 41:07      | of examples that people can download from the Omni-Automation website, and this is something         |
| 41:11      | that people should always remember, stealing automation is 100% valid.                               |
| 41:16      | You should do it, always start by stealing.                                                          |
| 41:20      | But you can customise what it's going to say back.                                                   |
| 41:22      | You can customise.                                                                                   |
| 41:24      | So if you're a multilingual, it can respond with certain words, which maybe are words                |
| 41:30      | that you would choose to use from a different language.                                              |
| 41:33      | And you can customise it completely.                                                                 |
| 41:36      | And even if you steal it from somebody else, you can go in there and just change those               |
| 41:39      | text strings.                                                                                        |
| 41:40      | That's easy enough to do.                                                                            |
| 41:41      | And I really like it when you get proper interaction back because that's where voice control really  |
| 41:48      | steps it up to outer space from ground level.                                                        |
| 41:53      | It's fine just being able to talk to something and do something, you hope, but it's great            |
| 41:58      | when it tells you it did it.                                                                         |
| 42:00      | And then it's going to do this thing now because that's what the next step is, or it                 |
| 42:04      | asks you to confirm or whatever it is.                                                               |
| 42:06      | And I think this combined with, I noticed there's another class for playing audio as                 |
| 42:12      | well so that you can have alert sounds come back, which is great because sometimes you               |
| 42:17      | don't want a voice, you want a sound to acknowledge that something worked or didn't work.            |
| 42:22      | And there are standard sounds for those on macOS and iOS, and it's great to be able to               |
| 42:25      | combine all of that to truly create the best automation and interaction experience that              |
| 42:31      | you can.                                                                                             |
| 42:32      | Right.                                                                                               |
| 42:33      | So, during my time at [[Apple]], I spent a lot of time with the Siri team, and we were developing        |
| 42:41      | [[AppleScript]] running with Siri so that you could give a command, and [[AppleScript]] would              |
| 42:47      | be the hands that would execute it.                                                                  |
| 42:50      | And during that time, we looked a lot at how you give commands and what works best.                  |
| 42:58      | And we decided that there were certain things, like using short phrases like two words optimally     |
| 43:04      | would be the best.                                                                                   |
| 43:06      | Things that didn't make you have to breathe hard when you were saying it, like, for example,         |
| 43:11      | if I want the sidebar and the inspector panel and OmniFocus to go away, the best way to do           |
| 43:20      | that would be, say, sides out.                                                                       |
| 43:23      | Because that word sides out, it doesn't take a lot of energy to do, and I could say sides            |
| 43:29      | in and bring them back in.                                                                           |
| 43:32      | And using specific phrases that minimise the effort that it takes really works well.                 |
| 43:39      | And in addition, the way that voice control works is that you can have optional words                |
| 43:46      | in your phrases.                                                                                     |
| 43:48      | So for example, if I had sides in, and I made in an optional word, then I could just say             |
| 43:55      | sides, or I could say sides in, and they both would work.                                            |
| 44:00      | And in voice control on all [[Apple]] devices, you can have multiple phrases to trigger a                |
| 44:07      | command, and those phrases can have optional words.                                                  |
| 44:12      | So you really don't need a natural language recognition engine like Siri has on a server.            |
| 44:20      | You can create, you know, six or seven or eight or 10 variations that work with most                 |
| 44:27      | of the things that you say.                                                                          |
| 44:29      | So you'll find that a lot of the commands that we use are quite memorable, are quite                 |
| 44:34      | memorable, even if you don't use them very often.                                                    |
| 44:39      | The other thing is that if you learn them one or two at a time, it's the best way.                   |
| 44:46      | You install one or two commands and then use those and make those part of your workflow.             |
| 44:52      | And then once you get used to them, add another one, another one here and there.                     |
| 44:56      | In fact, when you were kind of teaching me how this works, I said, well, give me one                 |
| 45:00      | download for all the commands, and you said, you think you want that, but you don't want             |
| 45:04      | that.                                                                                                |
| 45:05      | You know, because, because you're right, it's overwhelming, it's like keyboard shortcuts             |
| 45:09      | or anything else, you need to learn them in small bites.                                             |
| 45:13      | But you know, getting back to the whole voice interpretation problem, right?                         |
| 45:17      | I mean, historically, there's two ways to do that.                                                   |
| 45:20      | There is where you code it in, which you've done here.                                               |
| 45:23      | Sides in means hide, bring the sidebars in, sides out means push them out, versus like               |
| 45:30      | the computer becomes the, the computer abstracts whatever you say and tries to interpret that        |
| 45:38      | and, and do what it thinks you just asked for, which I think is in the long term, the answer.        |
| 45:45      | Maybe not in our lifetimes, maybe in 10 years, I don't know.                                         |
| 45:48      | You know, that's why [[Apple|Apple's]] putting so much effort into AI.                                         |
| 45:52      | But you, you took the first path with this, which I think is the right path for, for where           |
| 45:57      | we are right now.                                                                                    |
| 45:59      | Yeah.                                                                                                |
| 46:01      | You know, voice control is omni-automation.                                                          |
| 46:03      | It's really important because it transcends the traditional concept of accessibility.                |
| 46:11      | It's about using all of your abilities to express the intent to the device that you're               |
| 46:17      | working with and for the device to respond.                                                          |
| 46:22      | You have expression that leads to recognition that leads to the action.                              |
| 46:28      | And I don't know why, but for some reason we often limit ourselves to just using our                 |
| 46:34      | fingers.                                                                                             |
| 46:35      | I mean, we can speak and the devices now have the ability to listen and understand and recognise.    |
| 46:42      | And when you map that recognition to the actions that we want to be performed with automation,       |
| 46:50      | then you have the right way to go about it.                                                          |
| 46:53      | When we forget about how do I do something and instead focus on what it is I want to                 |
| 46:59      | do, then creation and development and it's more effortless and it becomes more fluid.                |
| 47:09      | And what makes omni-voice automation work for me, which sadly I don't get enough with                |
| 47:15      | Siri, is predictable results.                                                                        |
| 47:17      | Like we've been talking about the side-to-side outcome, but there's a bunch of different             |
| 47:22      | commands that you can use to control OmniFocus.                                                     |
| 47:25      | And once you learn the vocabulary that it understands and internalise that, you have                 |
| 47:30      | absolutely predictable results.                                                                      |
| 47:33      | When I say sides in, they come in.                                                                   |
| 47:35      | And it's not like, well, is this time is it going to work?                                           |
| 47:38      | No, every time it works.                                                                             |
| 47:40      | And that is what makes it really valuable, in my opinion.                                            |
| 47:45      | Very much so, on the voice control section of the omni-automation website, we have a                 |
| 47:53      | file that you can install on your Mac that will add voice control for every menu item                |
| 48:03      | of OmniFocus, 127 different commands available.                                                     |
| 48:08      | And some of them have multiple variations with optional words, like I mentioned.                     |
| 48:13      | And that's just using your voice to trigger a menu.                                                  |
| 48:17      | That's not doing something that's a customised action.                                               |
| 48:21      | That's not something that takes five or six steps and combines it into a single voice                |
| 48:26      | command.                                                                                             |
| 48:28      | That's just the basics.                                                                              |
| 48:29      | But when you combine all those together with customised voice commands that do the kind              |
| 48:34      | of things that you do in OmniFocus, then you really have a winning recipe.                          |
| 48:40      | And you get used to them, David, like you said, the dependability that they're there,                |
| 48:46      | the architecture that [[Apple]] has in place on all of their devices for voice control is                |
| 48:51      | highly accurate, and it's also integrated with dictation.                                            |
| 48:56      | So you can interspersed in what you're doing, start dictating in a text field, and the software      |
| 49:03      | is intelligent enough to know the difference between when you're dictating or when you're            |
| 49:08      | giving a command.                                                                                    |
| 49:10      | So all of a sudden, you have all of this incredible power to fill in text fields, navigate buttons,  |
| 49:18      | navigate interfaces, combined with the customisation of having commands that target that particular  |
| 49:25      | piece of software.                                                                                   |
| 49:28      | So it really does bring up the next level.                                                           |
| 49:32      | Perhaps down the road, like you said, there'll be a day when there's natural language recognition    |
| 49:37      | and it doesn't require going to a server someplace.                                                  |
| 49:41      | But for right now, this is incredibly productive and predictable in what it does.                    |
| 49:47      | No, and I'm convinced when they get to the natural language element of this, it's going              |
| 49:52      | to be worse for a while.                                                                             |
| 49:53      | I mean, ultimately, it'll get better.                                                                |
| 49:55      | But I feel like this is perfect for what we're doing.                                                |
| 49:59      | And it's just a question of learning those commands.                                                 |
| 50:03      | This episode of Automators is brought to you by Trade.                                               |
| 50:07      | Trade is where they say it gets a lot of people up in the morning.                                   |
| 50:09      | And there's something to be said about having actually good coffee instead of those stale,           |
| 50:15      | mashed up, weird grounds that you get from the supermarket that have been freeze dried               |
| 50:19      | and, well, just taste stale.                                                                         |
| 50:23      | Trade coffee starts with an experience.                                                              |
| 50:25      | You tell them how often you want your coffee and then you let them select a coffee for               |
| 50:29      | you or you can choose your own.                                                                      |
| 50:31      | So if you know exactly what you like, then you can get it or they can pick something                 |
| 50:35      | from their 450 blends.                                                                               |
| 50:38      | It is always a pleasant surprise to get something that perfectly suits you in the post.              |
| 50:42      | And trade coffee is no exception.                                                                    |
| 50:45      | When you become a trade coffee customer, you'll get the freshest and best tasting coffee you've      |
| 50:48      | ever made at home.                                                                                   |
| 50:49      | And the coffee you'll be drinking will be from the country's best independent craft                  |
| 50:53      | roasters, which helps those small businesses out a lot too.                                          |
| 50:57      | And this is cool.                                                                                    |
| 50:58      | Trade's coffee team actually taste tests thousands of coffees to keep 450 kinds alive                |
| 51:03      | and ready to ship every day.                                                                         |
| 51:05      | Everyone has that one coffee that they just love and trade will help you find it.                    |
| 51:10      | Trade is confident they'll match you right first time and if they don't, just give them              |
| 51:14      | your feedback and a natural coffee expert will work with you to send a brand new bag                 |
| 51:18      | for free so you know you'll be looked after.                                                         |
| 51:21      | Whether you're friends with your coffee snob or you just know coffee when it tastes really           |
| 51:24      | perfect, trade's real coffee experts personally taste tests over 450 roasts so they know exactly     |
| 51:30      | what to recommend to you.                                                                            |
| 51:32      | It just takes answering a couple of questions to get your own personalised variety of coffees        |
| 51:35      | to live fresh to you as often as you like.                                                           |
| 51:39      | Right now, trade is offering new subscribers a total of $30 off your first order plus free           |
| 51:43      | shipping when you go to drinktrade.com/automators.                                              |
| 51:48      | That's more than 40 cups of coffee for free.                                                         |
| 51:51      | Get started by taking their quiz at drinktrade.com/automators and let trade find you a coffee   |
| 51:55      | you'll love.                                                                                         |
| 51:56      | Visit that URL one more time, drinktrade.com/automators for $30 off.                            |
| 52:02      | Our thanks to trade for their support of this show and Real AFM.                                     |
| 52:06      | So Sal, so far we've been talking about the chocolate cake of all this.                              |
| 52:09      | You use your voice and it just works.                                                                |
| 52:12      | I want to step back for a minute and just talk about setting it up and how this works                |
| 52:16      | for people listening that are inspired and want to go do it.                                         |
| 52:19      | I think the first thing I would tell them is to go to your Omni Automation website.                  |
| 52:24      | You have a separate website called Voice Automation, right?                                          |
| 52:27      | What's that?                                                                                         |
| 52:28      | Voice-automation.com.                                                                                |
| 52:29      | Is that it?                                                                                          |
| 52:31      | It's omni-automation.com/voice-control.                                                        |
| 52:37      | And there's a link in the show notes.                                                                |
| 52:38      | Yes.                                                                                                 |
| 52:39      | And that's an entire section of the website that's devoted toward using the voice control            |
| 52:48      | interface that is part of all of [[Apple]] devices with Omni Automation.                                 |
| 52:55      | Okay and so let me interrupt there for a second.                                                     |
| 52:57      | So a fundamental piece of this is [[Apple|Apple's]] voice control engine, which they announced                 |
| 53:02      | I believe two years ago at [[WWDC]].                                                                     |
| 53:05      | It started as an accessibility feature, but it's really way more than that.                          |
| 53:10      | It's [[Apple|Apple's]] version of Dragon dictate where not only can you dictate text, but you can              |
| 53:17      | also control the operation of your Mac.                                                              |
| 53:21      | And so that's been around for a couple years, but [[Apple]] has put a plug-in process into that.         |
| 53:27      | And that's the foothold that Sal needed to do this.                                                  |
| 53:31      | Yes.                                                                                                 |
| 53:32      | What they implemented, first of all, they brought it to iOS, which was great, right?                 |
| 53:38      | Because that totally frees up people to be able to use their voice on all of their [[Apple]]             |
| 53:43      | devices.                                                                                             |
| 53:44      | But they recently implemented on the Mac the ability to take your custom commands and                |
| 53:51      | export them as small little XML files, right?                                                        |
| 53:54      | So that you could back them up and you could share them between devices.                             |
| 53:59      | You could take those set of commands and go to another Mac, install them and they would              |
| 54:03      | be there.                                                                                            |
| 54:04      | But now with iOS 16 and iPad OS 16, they're implementing the same kind of thing on those             |
| 54:13      | platforms where you can take your customised commands and back them up.                              |
| 54:18      | In addition, they've also added shortcut support across all devices now for voice control.           |
| 54:27      | So a voice control command can be, its action can be triggering a shortcut.                          |
| 54:34      | So you can have a couple of ways that we use is on the Mac, we give you the little file,             |
| 54:40      | the XML file, which is simple to install.                                                            |
| 54:44      | You just go to a menu, pick an open and then load the file.                                          |
| 54:49      | And all the command, all the script and everything gets done for you automatically.                  |
| 54:55      | On iOS and iPad OS, we use a shortcut.                                                               |
| 55:00      | So you install this shortcut and the power comes in through that shortcut.                           |
| 55:06      | And then you map that to whatever kind of custom command you want to do.                             |
| 55:11      | Eventually we're powered right now by the open URL action on the Mac and shortcuts on                |
| 55:20      | iOS.                                                                                                 |
| 55:21      | If [[Apple]] brings the open URL to iOS, then we'll have a consistent way to do across all platforms.    |
| 55:29      | And that'll be pretty amazing.                                                                       |
| 55:31      | But right now we have the two ways to do it.                                                         |
| 55:33      | And it's really not difficult to install, but a lot of fun to use.                                   |
| 55:39      | And if you go to the website, we have a video carousel that has over 50 videos, the short            |
| 55:46      | videos, some from five seconds to 10 seconds like that, that show you how it's being used            |
| 55:52      | to give you an idea about how you integrate this into the kind of stuff you do with your             |
| 55:58      | devices.                                                                                             |
| 55:59      | So I encourage people to go check out the video carousel and just go through the different           |
| 56:04      | examples.                                                                                            |
| 56:05      | And it will give you quickly an idea about ways to use voice with Omni Automation and                |
| 56:12      | what it can do for you.                                                                              |
| 56:14      | And in addition, we also have a collection that right now it's about over 90 different               |
| 56:19      | separate commands that you can download and install.                                                 |
| 56:23      | And each command has its own web page that shows you the code, gives you the links to                |
| 56:27      | download and usually has a video to explain it as well.                                              |
| 56:33      | It's all there for you.                                                                              |
| 56:35      | And that's why earlier I was talking about stealing things because this is the way I                 |
| 56:39      | got started with playing with all of this, of course, download examples and play with                |
| 56:43      | them and then go completely naturally nuts as only I can do.                                         |
| 56:49      | And then try and scale it back a bit to make it actually manageable because I made the               |
| 56:53      | mistake that you talked about earlier, I added loads of voice commands for loads of things           |
| 56:58      | and I can't remember any of them because it really is worth starting with just a couple              |
| 57:03      | and then expanding from there because that's the problem, right?                                     |
| 57:06      | You don't want to have to, you know, part of the beauty of Automation is trying to remove            |
| 57:11      | some of the extra thinking that you would need to do, you know, you're not thinking                  |
| 57:15      | about do I need to format this like this or whatever it is that you're trying to accomplish,         |
| 57:20      | you're just doing the thing.                                                                         |
| 57:22      | But if you add thousands of voice commands all at once, then you will absolutely forget              |
| 57:27      | them or occasionally randomly trigger something that's completely unintentional that you had         |
| 57:31      | set up for testing and forgotten about, which only, you know, it just, fortunately for me,           |
| 57:37      | it was toggling the flag on and off and I got very confused as to why the flag was toggling          |
| 57:41      | on and off.                                                                                          |
| 57:42      | And it is because I set something up that I shouldn't have.                                          |
| 57:47      | But, you know, it's great that there are so many examples, especially with the videos.               |
| 57:52      | I know a lot of people really like watching a video on how these things work and how to              |
| 57:55      | set it up.                                                                                           |
| 57:57      | And I really like the direct examples as well, like the quick inbox triage for me is just            |
| 58:03      | one of those examples where you can then end up with a lot of ideas from this sort of thing          |
| 58:09      | because you start with, okay, actually, this is what I need to do.                                   |
| 58:13      | And I actually have my own cleanup inbox script, but I still need to clean up the rest of my         |
| 58:17      | inbox because it doesn't do everything.                                                              |
| 58:19      | It just gets the predictable things and it puts those in the right places.                           |
| 58:23      | And so, you know, this is the rest of the puzzle piece for me.                                       |
| 58:27      | You know, there was one of the commands that we posted was called first inbox item.                  |
| 58:33      | And the way we designed the voice command is no matter where you are, you could be at                |
| 58:38      | the springboard, you know, you could be in another app or whatever, it's a global command.           |
| 58:44      | So you just go first inbox item and it switches the OmniFocus, takes you to the inbox, selects       |
| 58:50      | the first item and it says ready.                                                                    |
| 58:54      | That's what I wanted.                                                                                |
| 58:55      | I just wanted a simple command that would get me to the point where I could start working.           |
| 59:01      | And it's all possible with this simple little voice command that you install and it makes            |
| 59:07      | it possible to do those kind of things.                                                              |
| 59:09      | Those little bits of automation that can get you from A to B quickly are so helpful during           |
| 59:17      | the day, especially when you're under a time constraint.                                             |
| 59:21      | So there's plenty of those types of commands mixed in with the other ones that are very              |
| 59:25      | specific about a certain type of procedure that you want to do as well.                              |
| 59:31      | Okay.                                                                                                |
| 59:32      | So one that I have been really engaged with is called copy as [[Markdown]] link because anybody          |
| 59:38      | who listens to me knows I'm a super fan of linking my [[OmniFocus]] projects in other places             |
| 59:45      | like [[Craft]], [[Obsidian]], whatever.                                                                      |
| 59:48      | And I used to go through this process, you got to select it, you got to right click it,              |
| 59:52      | you got to go down to copy as link.                                                                  |
| 59:54      | Now I just say copy as markdown link and it's done.                                                  |
| 59:58      | I mean, and I think that's where this stuff really pays off.                                         |
| 01:00:01   | The stuff that takes two or three steps to do with a mouse, the voice stuff is just faster.          |
| 01:00:07   | Right.                                                                                               |
| 01:00:08   | So there's a command called copy as CSV because I wanted to be able to take comma separated          |
| 01:00:15   | values and take it over to a spreadsheet.                                                            |
| 01:00:18   | So it will copy the current outline in OmniFocus as you have it as comma separated values.           |
| 01:00:26   | And then you can switch over to numbers and say paste and voila.                                     |
| 01:00:31   | All of a sudden the outline that you're currently working with an OmniFocus is now in a spreadsheet. |
| 01:00:37   | That saves how many steps?                                                                           |
| 01:00:39   | Wow.                                                                                                 |
| 01:00:40   | That's, and you just say copy as CSV.                                                                |
| 01:00:43   | Done.                                                                                                |
| 01:00:44   | Yes.                                                                                                 |
| 01:00:45   | And I think, you know, for people who are somewhat, you know, reticent about using their             |
| 01:00:49   | voice to control things, it's still worth looking at this.                                           |
| 01:00:53   | A, because at some point you or somebody that you know or meet may need this.                        |
| 01:00:59   | But also because a lot of these things are a reminder of things that you can add keyboard            |
| 01:01:03   | shortcuts to as well and a just great inspiration for lots of other automation.                      |
| 01:01:08   | And you know, you were saying this before we started recording, Sal, you know, sometimes             |
| 01:01:13   | it's actually just a lot easier to speak because actually what you, you need to do is you need       |
| 01:01:20   | to, you know, say these words and I've introduced my dad to dictation.                               |
| 01:01:24   | My dad has dyslexia.                                                                                 |
| 01:01:25   | So he really struggles with spelling, but you know what?                                             |
| 01:01:28   | If he uses dictation, then a Siri figures that out, Siri's actually great at dictation               |
| 01:01:34   | for him.                                                                                             |
| 01:01:35   | And then my mom and I get messages that we actually understand instead of a message,                 |
| 01:01:39   | which thanks to its spelling is somewhat or completely ambiguous in meaning.                         |
| 01:01:45   | And that's really helpful for all of us.                                                             |
| 01:01:48   | But you know, if I'm in the middle of cooking and I want to add some items to my inbox and           |
| 01:01:52   | OmniFocus or I think actually, you know what, you know, I'm needing some dough, but my mind          |
| 01:01:57   | is free, well, my hands are covered in dough.                                                        |
| 01:02:00   | So I'm not, you know, and trying to pick up my iPhone or my iPad to go process my inbox,             |
| 01:02:04   | for example, would be a pretty bad idea.                                                             |
| 01:02:07   | You know, you can only do one thing at once properly when it comes to something like that.           |
| 01:02:11   | But I can still talk to my iPad or my iPhone.                                                        |
| 01:02:14   | And so then, you know, you start building up use cases where you hadn't really thought               |
| 01:02:19   | about it before, but now, you know, instead of just standing there watching diagnosis                |
| 01:02:23   | motor as I need dough, I can actually process my OmniFocus inbox and then watch an episode           |
| 01:02:27   | of diagnosis motor.                                                                                  |
| 01:02:28   | Because, you know, I'm still going to have some fun afterwards, but you know, it's great             |
| 01:02:32   | to be able to take advantage of those times when, you know, you are not going to be able             |
| 01:02:38   | to interact with your devices, you usually do, because you're doing something else or                |
| 01:02:42   | because you're currently not able to.                                                                |
| 01:02:45   | And I've been definitely getting more on the bandwagon of using my voice because it's                |
| 01:02:51   | something that is a skill, you know, most of us can talk.                                            |
| 01:02:56   | And it's something that we kind of forget about when it comes to technology.                         |
| 01:02:59   | And sometimes you may look like a crazy person standing there talking to your iPhone, but            |
| 01:03:03   | you know what, all those people using speakerphone walking down the street look like crazy people    |
| 01:03:07   | to me.                                                                                               |
| 01:03:08   | So I figure why not turn it back on them and process my inbox or something.                          |
| 01:03:13   | You know, the best for me, the best combination is using voice with my fingers and everything.       |
| 01:03:21   | Instead of relying on voice to do everything, I'd like to use voice for if I have to do              |
| 01:03:27   | some text input real quick, like your father, a little bit of dictation, it goes in there            |
| 01:03:32   | real quick, or I'll open quick open and I'll just go retaining wall.                                 |
| 01:03:36   | Instead of having to type, it just comes in to, to, you know, quick open.                            |
| 01:03:42   | And then I can see my selection go real quick that way.                                              |
| 01:03:45   | It's the combination of using voices and input device with the way that I currently use my           |
| 01:03:52   | hands together, it's even more powerful than either one of them by themselves.                       |
| 01:03:59   | It's pretty amazing.                                                                                 |
| 01:04:01   | One quick example of that was I have, there's a voice command for toggling the status of             |
| 01:04:07   | a tag.                                                                                               |
| 01:04:09   | So the command I use is toggle tag.                                                                  |
| 01:04:12   | And then instead of having to long press on something to a submenu and then going to the             |
| 01:04:17   | submenu and then changing the status, it just does it instantly.                                     |
| 01:04:22   | And it goes, the status is now on hold, poof, like that.                                             |
| 01:04:27   | So sometimes it's a mix of using your voice with your hands that can really deliver.                 |
| 01:04:35   | But I love like, like you, I love using short dictation.                                             |
| 01:04:41   | That's so much more accurate than what I can type myself.                                            |
| 01:04:44   | And it's faster too.                                                                                 |
| 01:04:47   | If you're going to get voice, if you're going to get voice control running, you get an unlimited     |
| 01:04:53   | dictation, although in I O 16, you're getting that with the built in tools.                          |
| 01:04:56   | Well, you're getting a custom vocabulary.                                                            |
| 01:04:59   | So you can do long dictation with it as well.                                                        |
| 01:05:01   | But I wanted to give an example of one since I started using this where I'm typing and               |
| 01:05:07   | talking.                                                                                             |
| 01:05:08   | And I have, I'm not a big fan of like using defer dates and OmniFocus for everything.                |
| 01:05:13   | I think that becomes a job and you're not doing your work.                                           |
| 01:05:16   | You're just fiddling.                                                                                |
| 01:05:17   | But I do have one particular perspective called do for me, which is like the Yoda quote, do          |
| 01:05:23   | or do not, you know, so it's a period.                                                               |
| 01:05:27   | And that's like the stuff I really want to do and the filter for it is it's got a flag               |
| 01:05:31   | and it's in certain projects.                                                                        |
| 01:05:33   | And it's a pretty narrow perspective, but I am willing to use defer dates on the stuff               |
| 01:05:38   | that lands in that perspective.                                                                      |
| 01:05:39   | But the process of like going through those and changing defer dates, whether you're on              |
| 01:05:44   | the Mac or the iPhone, it's just a pain in the neck.                                                 |
| 01:05:47   | I mean, there's no, and I've talked to the Omni group about it, but there's just not                 |
| 01:05:51   | really an easy way to automatically or easily say push this forward two or three days.               |
| 01:05:57   | I wrote some custom [[AppleScript\|AppleScripts]] for it a few years ago and I mapped those to stream                |
| 01:06:01   | dick buttons.                                                                                        |
| 01:06:02   | But I find now that I've got voice control, I use the arrow keys.                                    |
| 01:06:06   | I just go in that perspective, select an item, I'll say, you know, add two days to defer             |
| 01:06:14   | date and it does it.                                                                                 |
| 01:06:16   | Then I hit the arrow key, add three days, you know, set defer date to today.                         |
| 01:06:22   | And the syntax on this is really great because they have different ways you can say add two          |
| 01:06:26   | days to defer date.                                                                                  |
| 01:06:27   | You can say push out defer date by two days, they've got a bunch of different ways you can           |
| 01:06:32   | do it.                                                                                               |
| 01:06:33   | Now, Sal, can I go in and add additional ones if I decide I really want to say this differently?     |
| 01:06:39   | Is it possible?                                                                                      |
| 01:06:40   | Is it easier to go in?                                                                               |
| 01:06:41   | What's involved with that?                                                                           |
| 01:06:42   | Absolutely.                                                                                          |
| 01:06:43   | Well, there's two ways you can do it and in the interface for voice control, if you,                 |
| 01:06:49   | for example, if we're on the Mac, you go system preferences, accessibility, voice control,           |
| 01:06:55   | and click the commands button, you can edit any command and change the phrase you want               |
| 01:07:00   | to use as a recognising phrase, right?                                                               |
| 01:07:03   | Yeah.                                                                                                |
| 01:07:04   | And the same way you can do the same thing on your iPhone too, it's under custom commands,           |
| 01:07:10   | you can go in and edit it, the text to be whatever you like.                                         |
| 01:07:16   | You can make commands that work for you, you don't have to use the ones that are provided            |
| 01:07:20   | for you.                                                                                             |
| 01:07:21   | It's totally user editable.                                                                          |
| 01:07:23   | I wonder if my Mac would recognise forget about it.                                                  |
| 01:07:27   | Forget about it.                                                                                     |
| 01:07:28   | Two days.                                                                                            |
| 01:07:29   | Here's how you do that.                                                                              |
| 01:07:32   | Open up text edit, turn on voice control dictation and say forget about it and see the way that      |
| 01:07:39   | it writes it.                                                                                        |
| 01:07:40   | Okay.                                                                                                |
| 01:07:41   | And then that way you copy that and use it in your command and then it will recognise                |
| 01:07:47   | those specialised terms.                                                                             |
| 01:07:48   | I quite often do that.                                                                               |
| 01:07:50   | I knew you'd have a trick for that.                                                                  |
| 01:07:51   | I'm glad you shared it.                                                                              |
| 01:07:53   | Yeah.                                                                                                |
| 01:07:54   | It's the same as copying out like the date format of something from, like if you've                  |
| 01:07:59   | got [[Hazel]] parsing a PDF or similar for a date, like copying that plain text and dumping that,        |
| 01:08:06   | I prefer [[BBEdit]] over text edit just because it's got so many automation possibilities.              |
| 01:08:10   | Also it's just a great app, even if you're just getting the free version, it's well worth            |
| 01:08:13   | it.                                                                                                  |
| 01:08:14   | But you know, you paste it in there and then you actually see what it's looking at.                  |
| 01:08:18   | And then you find, you know, there's a rogue space in there.                                         |
| 01:08:21   | You can't see it, but it's there and that's why it's not working or something.                       |
| 01:08:24   | So yeah, dictating something into a blank text document is a really good way to do that.             |
| 01:08:30   | And also don't forget that at different times of day, you'll speak differently, right?               |
| 01:08:34   | First thing in the morning when you're wide awake or not so wide awake, depending on                 |
| 01:08:37   | whether you're a morning person or a night owl, you'll speak much more clearly at one                |
| 01:08:43   | point than you will later when you're really tired and maybe you're distracted, so you're            |
| 01:08:47   | kind of slurring your words a little bit.                                                            |
| 01:08:49   | So think about that as well and dictate it maybe at a couple of times a day or get some              |
| 01:08:55   | friends or family members to dictate it as well.                                                     |
| 01:08:58   | Because if you've been listening to one of them talk, then you may be mimicking their                |
| 01:09:02   | speech patterns somewhat, which could end up with different results.                                 |
| 01:09:06   | So yeah, I love that idea, dictate into a text document and then you've got your triggers            |
| 01:09:10   | ready.                                                                                               |
| 01:09:11   | Yes.                                                                                                 |
| 01:09:12   | I think one of the biggest tips for dictation or giving voice commands is pretend that your          |
| 01:09:17   | computer is something that learned English as a second language.                                     |
| 01:09:20   | Like, you know, if you have a friend that speaks English but they grew up speaking Portuguese        |
| 01:09:26   | or something, you always are better with your diction with them.                                     |
| 01:09:30   | And so just try to do that.                                                                          |
| 01:09:32   | And if you give the computer that ESL kind of version of yourself, it will do so much                |
| 01:09:36   | better.                                                                                              |
| 01:09:38   | I've found that voice control adapts to your voice.                                                  |
| 01:09:41   | It does learn.                                                                                       |
| 01:09:42   | There's a lot of learning going on and it gets more accurate to more that you use it                 |
| 01:09:48   | over time.                                                                                           |
| 01:09:50   | There is one thing about deferral talk about very quickly is I built in a set of commands            |
| 01:09:56   | that use relative dates.                                                                             |
| 01:09:59   | So I can say defer to Wednesday.                                                                     |
| 01:10:01   | Yeah, I was going to mention that.                                                                   |
| 01:10:03   | It automatically does that.                                                                          |
| 01:10:05   | And I did that for also setting due date, setting defer dates, so that you sometimes                 |
| 01:10:13   | it's just you only want to go a couple of days and, you know, you're on Monday, you                  |
| 01:10:17   | go defer to Wednesday, and it does it.                                                               |
| 01:10:21   | Avoiding date pickers is a real time saver.                                                          |
| 01:10:25   | And there's a couple of commands where you can give very specific, you know, you can                 |
| 01:10:30   | say set due date and it goes ready.                                                                  |
| 01:10:33   | And then when you hear ready, you can start saying what you want.                                    |
| 01:10:36   | You can go September 23rd at 4 p.m.                                                                  |
| 01:10:41   | And it will take that and do it for you automatically.                                               |
| 01:10:45   | Avoiding date pickers is a great way to speed up what you're doing.                                  |
| 01:10:49   | Yeah.                                                                                                |
| 01:10:50   | It also allows you to avoid that, oh gosh, wait, is today Wednesday?                                 |
| 01:10:53   | I thought it was Tuesday.                                                                            |
| 01:10:54   | Oh, no.                                                                                              |
| 01:10:55   | And then you get distracted by which day of the week it is or oh wait, but isn't this                |
| 01:10:59   | thing on this date and you open up your calendar to double check.                                    |
| 01:11:02   | And you just know at this moment, I need to defer it to then and, you know, checking                 |
| 01:11:06   | which date it is and making sure it's definitely, you know, 100% right with everything else          |
| 01:11:11   | in your calendar.                                                                                    |
| 01:11:12   | That's what you do in review when you're controlling things and just trying to get the information   |
| 01:11:15   | in there.                                                                                            |
| 01:11:16   | You just need to get the information in there as it is in your head right now.                       |
| 01:11:19   | Yes.                                                                                                 |
| 01:11:20   | Another thing is I want anybody listening who's interested to go to omni-automation.com/       |
| 01:11:27   | voice control slash collection and we'll put a link in the show notes for that because               |
| 01:11:31   | I know, Sal, that you've put months of your life into this, but you have created this                |
| 01:11:36   | remarkable collection.                                                                               |
| 01:11:37   | We've only mentioned about five or six today, but how many are there here now?                       |
| 01:11:43   | Is it 100?                                                                                           |
| 01:11:44   | I mean, there's so many.                                                                             |
| 01:11:45   | It's over 90.                                                                                        |
| 01:11:46   | I'm shooting for 100.                                                                                |
| 01:11:47   | I had wanted to have 100 by the time we did this, but I didn't quite make it.                        |
| 01:11:51   | It's like 93 or so right now.                                                                        |
| 01:11:53   | It'll probably be 100 by the time we publish, but it is just there are so many things you            |
| 01:11:58   | can do here.                                                                                         |
| 01:11:59   | Yeah.                                                                                                |
| 01:12:00   | Anything you've ever wanted to do with OmniFocus with your voice, it's insane.                       |
| 01:12:06   | Each one has a video demonstrating it, it has the code, it has its own website.                      |
| 01:12:11   | It's just so well done.                                                                              |
| 01:12:14   | If you follow what Rose says, you'll look at those pages and you grab some of the code               |
| 01:12:19   | and just use it in your own stuff.                                                                   |
| 01:12:22   | There's plenty of examples there of like, I had one that shows you the next forecast                 |
| 01:12:29   | state, the next act of forecast.                                                                     |
| 01:12:31   | Well, how do you figure that out?                                                                    |
| 01:12:33   | Well, there's the code for it.                                                                       |
| 01:12:34   | So you can go in and copy out that section that you need and use it in your own scripts.             |
| 01:12:40   | Or you could just put it into a shortcut and dump it in and say, I want to always be able            |
| 01:12:46   | to clear all the deferred dates on my phone.                                                         |
| 01:12:48   | Well, you've got the language here.                                                                  |
| 01:12:50   | You've written the script for it, whether you tie it to your voice or not.                           |
| 01:12:54   | Just so powerful.                                                                                    |
| 01:12:55   | Yeah, man.                                                                                           |
| 01:12:56   | This stuff is great.                                                                                 |
| 01:12:57   | If your scripts are self-contained, you can copy them and paste them into the Run Omni               |
| 01:13:02   | Automation Script shortcut action and just paste it straight in and you have a shortcut              |
| 01:13:08   | that you can now put in your shortcut workflows as well.                                             |
| 01:13:11   | So I have one complaint, Sel, and I'm actually a little angry with you about this.                   |
| 01:13:16   | Only one?                                                                                            |
| 01:13:17   | Yeah.                                                                                                |
| 01:13:18   | You have ruined my other applications.                                                               |
| 01:13:20   | I'm going into other apps now and I'm like, well, how come it's not listening to me?                 |
| 01:13:24   | I mean, I feel like, you know, just like back in the day when you started getting picked             |
| 01:13:29   | up by all the big companies, my goal is that you get really busy doing this for some of              |
| 01:13:34   | my other favourite apps.                                                                              |
| 01:13:35   | I mean, this is amazing.                                                                             |
| 01:13:37   | Well, on that, on the site, you know, the voice dash control section of the Omni Automation          |
| 01:13:45   | site, we do have script tools for developers.                                                        |
| 01:13:48   | And if you're interested in developing these little XML files containing your commands,              |
| 01:13:55   | these tools are already written to make this a very simple process for you.                          |
| 01:14:01   | So using those, you can go into any application and instantly map your voice to all the different    |
| 01:14:07   | menu commands of that application.                                                                   |
| 01:14:10   | And one of the applications I did that for was the Finder.                                           |
| 01:14:14   | So we have a file that has all of the Finder commands and mapped.                                    |
| 01:14:19   | And I did it for the view menu in [[Keynote]] as an example as well.                                     |
| 01:14:25   | So you can use the tools that we provide if you're interested and map these, at least                |
| 01:14:31   | map the voice to the menu items for that application.                                                |
| 01:14:36   | As to doing customised stuff, Omni is unique in their ability to offer Omni Automation across        |
| 01:14:44   | all devices.                                                                                         |
| 01:14:45   | Yeah.                                                                                                |
| 01:14:46   | Because they built the engine in underneath before you did this.                                     |
| 01:14:48   | Yeah.                                                                                                |
| 01:14:49   | So Omni Automation is really pretty unique and very powerful, and it makes their applications        |
| 01:14:54   | really stand out and shine.                                                                          |
| 01:14:56   | Yeah.                                                                                                |
| 01:14:57   | Well, I'll tell you, people were writing me saying, why are you so in the bag for Omni               |
| 01:15:01   | Focus?                                                                                               |
| 01:15:02   | And it's stuff like this, honestly.                                                                  |
| 01:15:04   | I mean, even before you got your hands on it, the fact that you can link anything, a                 |
| 01:15:09   | perspective, a project, a task, or whatever, makes it a very useful app to me, but now               |
| 01:15:14   | I can do it with my voice.                                                                           |
| 01:15:17   | What I would like for anybody listening to this that is using OmniFocus is to go to the              |
| 01:15:22   | website and just download two commands and try it, because I really think that'll be                 |
| 01:15:29   | all it takes.                                                                                        |
| 01:15:30   | It's like the dealer giving you a free sample, but you're going to find you use it.                  |
| 01:15:37   | So David, what you're saying is that once they do sides in, sides out, they're never                 |
| 01:15:42   | going to go back to the other way.                                                                   |
| 01:15:45   | I have mapped that to keyboard shortcuts like three times, and I always forget what they             |
| 01:15:49   | are.                                                                                                 |
| 01:15:50   | And now I just say it, and it happens.                                                               |
| 01:15:52   | And also, there is a little like, there's a bit of delight when you're sitting in front              |
| 01:15:57   | of your computer and you just start saying things and the screen reacts.                             |
| 01:16:02   | I know that's probably a nerd thing for me, but it is delightful for me to just sit here             |
| 01:16:07   | with my hands laced behind my head and start talking and watch my computer dance for me.             |
| 01:16:13   | It's probably one of the few things in life that will respond to what you say.                       |
| 01:16:18   | Yeah, exactly.                                                                                       |
| 01:16:20   | Definitely not my dog, but my back will.                                                             |
| 01:16:24   | I mean, as long as she's not chewing your [[Stream Deck]] cable, David, I think we're fine,              |
| 01:16:27   | though.                                                                                              |
| 01:16:28   | I should work on a voice command for that.                                                           |
| 01:16:29   | I mean, that said, robot vacuums could definitely chew on cables if they want to.                    |
| 01:16:38   | Mine got stuck on a rug while I was on hold.                                                         |
| 01:16:40   | Actually it got stuck in the bathroom because it knocked over a box that I thought was totally       |
| 01:16:44   | safe and I'd left somewhere else.                                                                    |
| 01:16:46   | And so I had to use the manual controls and do kind of a bumper car move, except I had               |
| 01:16:50   | to do it in reverse because if it's going forward, it senses that there's a box there                |
| 01:16:53   | and it won't drive, it just stops.                                                                   |
| 01:16:56   | So I had to reverse bumper car box out the way and then it, like the final time I ran                |
| 01:17:00   | it before I came home, it ate a brawl gun and got stuck.                                             |
| 01:17:04   | So yeah, robot vacuum can be programmed to consume your cables on command, I suspect,                |
| 01:17:10   | or by accident more likely.                                                                          |
| 01:17:12   | Sal, when you were putting all this together, did you have one of those aha moments where            |
| 01:17:16   | you first saw it working and you're like, this is going to work?                                     |
| 01:17:19   | Did you have one of those moments?                                                                   |
| 01:17:21   | Absolutely.                                                                                          |
| 01:17:24   | Then when Tim and Ken and the other engineers put in the speech synthesis suite into Omni            |
| 01:17:33   | Automation and the first time I had the script prompt me, one of the techniques that we use          |
| 01:17:43   | is when it says ready, it means that you can input.                                                  |
| 01:17:48   | If it does something, it will say done.                                                              |
| 01:17:51   | If it says ready, then you don't have to be looking at the screen.                                   |
| 01:17:54   | You know that it's ready for you to start saying something like a dictation or a date                |
| 01:18:00   | or something like that.                                                                              |
| 01:18:01   | And the first time we had the speech synthesis working so that it was integrated with the            |
| 01:18:08   | scripts to give you the prompts and the feedback that you needed, that was the moment.               |
| 01:18:15   | That was the moment that we knew that this whole thing was really going to work.                     |
| 01:18:20   | We haven't even mentioned that people who have visual impairments or site challenged,                |
| 01:18:26   | this is a game changer for them too.                                                                 |
| 01:18:28   | I mean, we've been talking about this as automators, but this technology is so useful                |
| 01:18:33   | to so many people.                                                                                   |
| 01:18:35   | You know, there's a thing called universal design.                                                   |
| 01:18:38   | I was watching 60 Minutes the other day and they had an architect who had lost his site.             |
| 01:18:46   | He was an architect before he had lost his site and he was an architect afterwards too.              |
| 01:18:52   | And he was talking about universal design where you design one thing, but it works for               |
| 01:18:58   | everybody.                                                                                           |
| 01:18:59   | And his example was in like an airport garage, they have these lines in the concrete.                |
| 01:19:06   | And I've noticed those, but I never really thought about it.                                         |
| 01:19:09   | But what it does was it's a way of telling someone who can't see that the elevator is                |
| 01:19:15   | coming up and it's going to be on the left-hand side by the way that these lines were placed.        |
| 01:19:21   | And it's just part of the whole design of the place.                                                 |
| 01:19:25   | And if you design it well, then it works for everybody.                                              |
| 01:19:28   | And that's the thing about voice control with Omni Automation is it works like David,                |
| 01:19:35   | like you said, if you have site problems, this is really a great way to use a personal               |
| 01:19:42   | management software, Omni productivity software with your voice, but it works for everybody          |
| 01:19:48   | too.                                                                                                 |
| 01:19:49   | And it's not just accessibility.                                                                     |
| 01:19:52   | It seems like a lot of us, we've been told that you can't use your voice.                            |
| 01:19:57   | That's just for accessibility.                                                                       |
| 01:19:59   | And they store it under accessibility in the operating system.                                       |
| 01:20:03   | But it really is much more than just that.                                                           |
| 01:20:07   | It kind of transcends that whole idea.                                                               |
| 01:20:11   | It's universal design.                                                                               |
| 01:20:12   | It's part of the interface of the device.                                                            |
| 01:20:15   | And everybody can take advantage of that.                                                            |
| 01:20:18   | Yeah.                                                                                                |
| 01:20:19   | And I think part of the problem is historically, this hasn't been very good.                         |
| 01:20:24   | But now with [[Apple Silicon]] and [[artificial intelligence]], subroutines, all this stuff                  |
| 01:20:30   | has suddenly got a lot better.                                                                       |
| 01:20:32   | Even just the basic idea of opening a text field and talking to your computer, as someone            |
| 01:20:38   | who's been doing it for 30 years, it is much better than it used to be.                              |
| 01:20:43   | And now the errors are the exception where before it was really bad the first couple                 |
| 01:20:48   | of days you did it.                                                                                  |
| 01:20:50   | And this stuff is just ripe for the picking.                                                         |
| 01:20:53   | But I think a lot of people had probably bad experiences with it or didn't really give               |
| 01:20:57   | it a full effort.                                                                                    |
| 01:20:58   | But this is the perfect excuse to get going with it.                                                 |
| 01:21:01   | And one of the things you did for me when you turned me on to this is it got me using                |
| 01:21:06   | voice control again because I had not really engaged with it much.                                   |
| 01:21:10   | And now I'm using it all the time because I would use the Siri voice to text dictation               |
| 01:21:16   | on my Mac, but I wouldn't use the voice control.                                                     |
| 01:21:19   | But now all of a sudden I'm finding more excuses to keep voice control turned on.                    |
| 01:21:24   | Here's a tip.                                                                                        |
| 01:21:25   | The way that I use it is they have a standby mode.                                                   |
| 01:21:29   | You can say go to sleep and it goes into standby mode, then you say wake up and it wakes up.         |
| 01:21:35   | And so I leave voice control on all the time, but in standby mode.                                   |
| 01:21:41   | And then a lot of the examples, the little video examples, I left it in where you'll                 |
| 01:21:45   | see wake up and then the command comes and you give a command.                                       |
| 01:21:50   | And then afterwards when you're done doing whatever it is you want to do, you say go                 |
| 01:21:55   | to sleep and it goes to sleep in the standby.                                                        |
| 01:21:58   | So they have it so accurate and so useful with that quick standby mode that there's                  |
| 01:22:05   | no reason not to leave it on all the time.                                                           |
| 01:22:08   | Yeah, agreed.                                                                                        |
| 01:22:09   | It's really powerful.                                                                                |
| 01:22:10   | Yeah.                                                                                                |
| 01:22:11   | And there's also a shortcut section for setting voice control, by the way, for folks turning         |
| 01:22:15   | it on and off.                                                                                       |
| 01:22:16   | So you could tie that into the triple back tap on your phone or similar, which is another            |
| 01:22:25   | great option.                                                                                        |
| 01:22:26   | You can't actually have it just toggle voice control, which will just flip it between on             |
| 01:22:30   | and off if you like, or you can do whatever it is you like.                                          |
| 01:22:35   | So that's another thing to consider because I know that some employers may have requirements         |
| 01:22:42   | about not having the, hey, [[Apple]] lady functionality, I'm not going to say it, because otherwise      |
| 01:22:47   | my HomePods are going to trigger as well as my phone, but you know, some employers                  |
| 01:22:52   | may have requirements about not having devices have that functionality activated at work.            |
| 01:22:56   | And if you want a quick way to turn it on and off, then shortcuts can turn on and off                |
| 01:23:00   | voice control, as well as a number of other accessibility features, which can be used                |
| 01:23:05   | for automation purposes.                                                                             |
| 01:23:07   | I'm not 100% certain if the voice control option is only an iOS 16, or if it's in 15                 |
| 01:23:12   | as well.                                                                                             |
| 01:23:13   | But don't forget, you also have the triple tap of the side button, which can turn on                 |
| 01:23:18   | and off an assistive feature of your choice, which would be voice control.                           |
| 01:23:25   | So those are great options for people who maybe want to play and don't want to leave                 |
| 01:23:31   | it on because they occasionally tell their devices to wake up because they're being                  |
| 01:23:35   | a bit slow.                                                                                          |
| 01:23:36   | I'm thinking of my mom here.                                                                         |
| 01:23:38   | Every so often her iPhone won't rotate.                                                              |
| 01:23:40   | She's due for a new one to share and she'll be getting mine probably, but her iPhone                 |
| 01:23:44   | doesn't rotate.                                                                                      |
| 01:23:45   | And so she's going, wake up, wake up at it.                                                          |
| 01:23:47   | And of course, you know, she have voice control activated, then we'll wake it up.                    |
| 01:23:51   | And I'll add just a pile onto that, I would highly recommend triple tapping the side button          |
| 01:23:56   | to tapping the back of the phone, because I have use voice control switching that way,               |
| 01:24:01   | and it turned just on in my pocket sometimes just for a reason.                                      |
| 01:24:05   | See, I use the back tap option to open [[Drafts]] so I can quickly capture stuff.                        |
| 01:24:10   | And I'm not bothered by [[Drafts]] randomly opening if I drop my phone on the couch or something,        |
| 01:24:14   | because in that only happens when my phone is unlocked, because of course it's opening               |
| 01:24:20   | an app.                                                                                              |
| 01:24:21   | Of course the voice control toggle will then be available whenever.                                  |
| 01:24:25   | And then over on the Mac, I got a script from Sal.                                                   |
| 01:24:27   | I think I got it on your omni-automation website off the look.                                       |
| 01:24:31   | But I, using [[Keyboard Maestro]], I just tied it to control option command return on my                 |
| 01:24:37   | Mac.                                                                                                 |
| 01:24:38   | So if I just hold down those three buttons next to the space bar and hit return, then                |
| 01:24:42   | voice control turns on or turns off.                                                                 |
| 01:24:44   | So if I just want to absolutely turn it off or on, I do that.                                        |
| 01:24:47   | And I feel like you, I just leave it running and use wake up and go to sleep.                        |
| 01:24:51   | But if for any reason I need to turn it off, I've got a keyboard shortcut now that it's              |
| 01:24:55   | very easy to remember.                                                                               |
| 01:24:57   | That's very clever.                                                                                  |
| 01:24:58   | Rose, you're amazing.                                                                                |
| 01:25:00   | Your depth of knowledge is always stunning.                                                          |
| 01:25:02   | Well, it's because I keep listening to people like you and David and Micah Sargent as well           |
| 01:25:07   | in iOS today and everybody else who's there using features.                                          |
| 01:25:10   | And then I see something and I join the dots and it makes me look really, really smart because       |
| 01:25:14   | I was just standing in the right place to see the dots, but the dots were there.                     |
| 01:25:18   | It's just, you had to be in the right place to see them.                                             |
| 01:25:20   | And I think that's the thing with automation, isn't it?                                              |
| 01:25:22   | You know, all of the pieces are there for you to pick up and play with.                              |
| 01:25:26   | It's just a question of whether or not you're brave enough to try and put the puzzle together        |
| 01:25:28   | because sometimes it feels like you might do it wrong.                                               |
| 01:25:32   | Unless you're running around with one of the delete actions or a delete function inside              |
| 01:25:37   | of one of the Omni apps are similar, you're not going to lose any data.                                |
| 01:25:40   | At worst, you might miss-file it and that's what the undo button is for.                                  |
| 01:25:44   | Hmm.                                                                                                 |
| 01:25:45   | And Rose is way too humble like Sal, because it seems like if that's the case, you always            |
| 01:25:50   | seem to be standing around when cool things come together, Rose.                                     |
| 01:25:53   | So I'm not sure.                                                                                     |
| 01:25:54   | See, my trick is I'm a bat and I'm actually hanging upside down from the ceiling or at               |
| 01:25:58   | least I feel.                                                                                        |
| 01:25:59   | I mean, I'm saying that I was in for us at my parents' place and there were lots of                  |
| 01:26:04   | bats flying around.                                                                                  |
| 01:26:05   | So I'm feeling very bat inspired right now.                                                          |
| 01:26:07   | But yeah, sometimes it is just looking at things differently.                                        |
| 01:26:10   | Rose is the tornado.                                                                                 |
| 01:26:11   | Yes, exactly.                                                                                        |
| 01:26:12   | There we go.                                                                                         |
| 01:26:13   | This episode of The Automators is brought to you by LinkedIn Jobs.                                   |
| 01:26:18   | Go to linkedin.com/automators and post a job for free.                                         |
| 01:26:22   | As the sun comes out and small businesses are back in business, LinkedIn Jobs makes it               |
| 01:26:26   | easier to grow your team.                                                                            |
| 01:26:28   | LinkedIn Jobs helps you find the people you want to interview faster and for free.                   |
| 01:26:33   | Just recently, I was on LinkedIn and saw an old attorney friend who was looking for a                |
| 01:26:37   | new paralegal and I happened to know a paralegal that was looking for a job.                         |
| 01:26:42   | She was really qualified.                                                                            |
| 01:26:44   | I hooked the two of them up.                                                                         |
| 01:26:45   | She got hired.                                                                                       |
| 01:26:46   | They're both happy.                                                                                  |
| 01:26:47   | And all that happened because of LinkedIn Jobs.                                                      |
| 01:26:50   | With LinkedIn Jobs, you can create a free job post in minutes to reach your network                  |
| 01:26:54   | and beyond to the world's largest professional network of over 810 million people, then add          |
| 01:27:00   | your job and the purple hashtag hiring frame to your LinkedIn profile.                               |
| 01:27:04   | That's what I saw over that paralegal.                                                               |
| 01:27:06   | And then you can spread the word that you're hiring so your network can help you find the            |
| 01:27:10   | right people to hire.                                                                                |
| 01:27:12   | It lets you turn your professional network into also your hiring network.                            |
| 01:27:16   | Simple tools like screening questions make it easy to focus on candidates with just the              |
| 01:27:20   | right skills and experience.                                                                         |
| 01:27:22   | So you can quickly prioritise who you'd like to interview and hire.                                  |
| 01:27:26   | It's why small businesses rate LinkedIn Jobs number one in delivering quality hires versus           |
| 01:27:31   | leading competitors.                                                                                 |
| 01:27:33   | LinkedIn Jobs helps you find the candidates you want to talk to faster.                              |
| 01:27:37   | Did you know that every week nearly 40 million job seekers visit LinkedIn?                           |
| 01:27:41   | So post your job for free at linkedin.com/automators, A-U-T-O-M-A-T-O-R-S.                     |
| 01:27:48   | That's linkedin.com/automators to post your job for free.                                      |
| 01:27:53   | Terms and conditions do apply.                                                                       |
| 01:27:54   | And our thanks to LinkedIn Jobs for their support of the automators podcast and all                  |
| 01:27:59   | of relay FM.                                                                                         |
| 01:28:02   | So Sal, we were talking before we got started today.                                                 |
| 01:28:05   | It seems like there's just some great stuff going on with the Mac right now.                         |
| 01:28:09   | Rose and I did a show on this last month.                                                            |
| 01:28:11   | But I feel like shortcuts on the Mac, while it doesn't answer all questions and solve                |
| 01:28:17   | all problems, it seems to have inspired kind of a revolution of automation on the Mac.               |
| 01:28:24   | Is that just me or do you see that too?                                                              |
| 01:28:27   | No, I definitely see that too, David.                                                                |
| 01:28:31   | Anybody that's paying attention to the world of automation or all.                                   |
| 01:28:35   | You can kind of see it that developers that have always been sitting on the outside are              |
| 01:28:41   | starting to adopt it.                                                                                |
| 01:28:43   | And they're starting to talk about that I have shortcut support in my app.                           |
| 01:28:48   | And I just have so much confidence in the team that's there right now in their vision                |
| 01:28:55   | and their ability to execute.                                                                        |
| 01:28:58   | And it's just so ingrained now that it's part of the [[Apple]] environment.                              |
| 01:29:04   | Being shortcuts, you don't need to really explain it anymore.                                        |
| 01:29:07   | People are using it.                                                                                 |
| 01:29:09   | And I think you're right, David, this is like a new birth of automation-ness coming up.              |
| 01:29:17   | I think it's definitely moving that way.                                                             |
| 01:29:20   | And we can only benefit from this as it starts expanding and more apps contribute to the automation  |
| 01:29:27   | environment.                                                                                         |
| 01:29:28   | Yeah, I feel like developers didn't have faith that their users would learn [[AppleScript]]             |
| 01:29:32   | so they didn't bother.                                                                               |
| 01:29:35   | But they know that people are using shortcuts.                                                       |
| 01:29:38   | And I think users are demanding it now.                                                              |
| 01:29:41   | They want to see shortcuts, actions, and then [[Apple]] is also, I don't know if you spent               |
| 01:29:48   | much time with Ventura and iOS 16, but [[Apple]] is now making it easier than ever for developers        |
| 01:29:54   | to add shortcuts automation.                                                                         |
| 01:29:57   | Yep.                                                                                                 |
| 01:29:58   | Thanks to the team.                                                                                  |
| 01:29:59   | And I know some of the guys over there are working on that, and they're implementing some            |
| 01:30:04   | great concepts and some great ideas.                                                                 |
| 01:30:07   | So shortcuts for the Mac seems like it's really got momentum now.                                    |
| 01:30:13   | I'm super happy to see it coming around and like you, man, I just want to see more app               |
| 01:30:17   | developers jump in.                                                                                  |
| 01:30:20   | But yeah, the other piece of that is it's making the other automation apps like Keyboard             |
| 01:30:25   | Maestro and [[Hazel]] and even like going to [[AppleScript]] and [[JavaScript]], it's like it's                 |
| 01:30:32   | pulling all this stuff together where now we can just pick and choose what tool we want              |
| 01:30:37   | and combine it all into one thing.                                                                   |
| 01:30:40   | Right.                                                                                               |
| 01:30:41   | One of the concepts behind component automation is that it's a really generalised form that          |
| 01:30:49   | you make these actions so that they work in a large variety of situations.                           |
| 01:30:55   | And if you want really specific kind of things, then either you have to have like oodles and         |
| 01:31:03   | oodles of shortcuts actions, or you support it with some kind of scripting so that at                |
| 01:31:10   | one point you leave the generic and then you go into the specific through scripting to               |
| 01:31:16   | achieve what you want.                                                                               |
| 01:31:18   | And it'd be great the more that applications expose themselves to automation if they also            |
| 01:31:25   | support that with internal scripting as well, like in the way that the Omni Group did with           |
| 01:31:32   | their version of [[JavaScript]] with Omni Automation.                                                    |
| 01:31:36   | That makes it easier for somebody that's looking to automate something very specific                 |
| 01:31:42   | in a unique way, it makes that possible.                                                             |
| 01:31:46   | Is what the Omni Group did something that ultimately [[Apple]] should do for the operating               |
| 01:31:52   | system or is this something where you really need the app developers to implement it on              |
| 01:31:55   | an app-by-app basis?                                                                                 |
| 01:31:58   | No matter what you do, developers are going to have to be on board with it, right?                   |
| 01:32:03   | And at this point, so many developers have come up with their own solutions and they're              |
| 01:32:09   | unifying pretty much unlike the [[JavaScript]] world that if [[Apple]] came in and threw the                 |
| 01:32:15   | card upside down by adding something totally different, that would be kind of disruptive             |
| 01:32:22   | at this point.                                                                                       |
| 01:32:24   | I don't know, I've always thought that everything should be scriptable, that every application,      |
| 01:32:33   | every component, everything should have a way to get hooks into that and let the users               |
| 01:32:40   | that do automation create solutions for everybody else to use that can be very specific.             |
| 01:32:48   | But that needed to be implemented at the ground level when you're building the structures            |
| 01:32:53   | of the buildings, right?                                                                             |
| 01:32:55   | Going back and trying to retrofit in foundational elements is really difficult and like I said,      |
| 01:33:03   | it can be very disruptive.                                                                           |
| 01:33:06   | Just making it easier for developers to implement a scripting architecture would be very helpful.    |
| 01:33:14   | If somebody's listening and they want to go to the next level and they say, okay, I need             |
| 01:33:18   | to get better at [[JavaScript]] so I can enter the race here, any recommendations for places             |
| 01:33:25   | to go learn that stuff?                                                                              |
| 01:33:27   | That's one of the beautiful things about [[JavaScript]].                                                 |
| 01:33:29   | I mean, [[JavaScript]] is not one of my preferred languages, but the thing about it, it's so             |
| 01:33:35   | well documented and it's so optimised.                                                               |
| 01:33:39   | So it's very fast and you can always find documentation about it.                                    |
| 01:33:45   | There are some online resources that we list.                                                        |
| 01:33:49   | If you go to like the OmniFocus section of the Omni Automation website, we list a bunch              |
| 01:33:56   | of different places to go to learn [[JavaScript]] at various levels of expertise.                        |
| 01:34:03   | And there's lots of resources publicly available in videos.                                          |
| 01:34:07   | And like Rose says, there's plenty of examples to steal from.                                        |
| 01:34:12   | You just go to the website and we try to make everything bite-sized so that you can just             |
| 01:34:17   | copy a section in pace.                                                                              |
| 01:34:19   | And I've seen a lot of customers that really come up with these scripts that are just two            |
| 01:34:24   | or three sections of other scripts put together, but it works for them.                              |
| 01:34:29   | And that's what you do.                                                                              |
| 01:34:30   | That's how you learn.                                                                                |
| 01:34:32   | To me, all of my scripting is basically a vomit pool of plagiarism.                                  |
| 01:34:39   | And there is nothing wrong with that.                                                                |
| 01:34:42   | The only thing I will say is that if you are somebody like me who is writing scripts,                |
| 01:34:47   | adding comments in between sections can make it really easy for somebody else to copy and            |
| 01:34:53   | paste or copy-pasta, as it's sometimes referred to, those chunks.                                    |
| 01:34:57   | Because then they know that this section here is the bit that does what they need without            |
| 01:35:02   | necessarily having to read the whole script.                                                         |
| 01:35:04   | And that's why a little bit of formatting is really useful, although [[JavaScript]] doesn't              |
| 01:35:09   | require you to add extra spaces and line breaks and so on.                                           |
| 01:35:12   | It can make it really nice and easy for other people.                                                |
| 01:35:14   | And I know my scripts are not great examples, the ones that I've written of that.                    |
| 01:35:19   | But that said, I have had several people contact me and go, hey, I stole from this script.           |
| 01:35:24   | Do I need to credit you or something? And it's like, nope, you are good.                             |
| 01:35:28   | The requirement, if you steal from one of my scripts, is that you use it and you do                  |
| 01:35:33   | whatever it is that you want to automate, because that's my only requirement.                        |
| 01:35:36   | Make it good and share with the rest of the world.                                                   |
| 01:35:38   | I must confess, I've stolen some Rosemary's things too.                                              |
| 01:35:42   | Yeah, and I stole from you all the time.                                                             |
| 01:35:44   | It's great.                                                                                          |
| 01:35:45   | And I love how many people out there are doing great things with this stuff.                         |
| 01:35:50   | And they started by just following a couple of examples or tweaking this or that or whatever         |
| 01:35:56   | it is.                                                                                               |
| 01:35:57   | And now they're writing loads of great things.                                                       |
| 01:36:00   | One person who springs to mind is Kaitlin, Kaitlin Salzke, I believe, from the Omni Group             |
| 01:36:06   | [[Slack]].                                                                                               |
| 01:36:07   | There's a public Omni Group [[Slack]] folks.                                                             |
| 01:36:09   | If you're an Omni, whatever it is, user, focus, grapple, outliner, plan, and there's                 |
| 01:36:14   | an automation channel in there.                                                                      |
| 01:36:16   | And Caitlyn's posted a lot of great examples, along with quite a few other folks, which              |
| 01:36:20   | is great.                                                                                            |
| 01:36:21   | Outstanding, yes.                                                                                    |
| 01:36:22   | Yeah, and it's just really nice to be able to see some other really good examples.                   |
| 01:36:28   | And if you get stuck, of course, you can post, I always like posting what I have or seeing           |
| 01:36:33   | what somebody has already started with, because sometimes you can see that somebody started          |
| 01:36:37   | down a particular path and you can see why they've got stuck where they're stuck, but                |
| 01:36:40   | actually taking a few steps back is going to make it a lot easier for them.                          |
| 01:36:44   | So yeah, but it's really great to see what other people are stealing.                                |
| 01:36:49   | And the only thing about [[JavaScript]] is a lot of the tutorials you'll find on the internet            |
| 01:36:53   | are for the web, because [[JavaScript]] is what is used to do lots of magic things in your               |
| 01:36:58   | browser.                                                                                             |
| 01:36:59   | But it's also quite useful to use that as a way to learn [[JavaScript]], because you just                |
| 01:37:06   | need a browser.                                                                                      |
| 01:37:07   | [[Firefox]] or [[Google Chrome\|Chrome]] are probably best as much as I love [[Safari]], [[Safari\|Safari's]] developer tools.              |
| 01:37:12   | Don't have things in the same place that a lot of tutorials will tell you where to find              |
| 01:37:16   | them, but they will have them for [[Firefox]] and [[Google Chrome\|Chrome]], but they'll tell you where it                  |
| 01:37:21   | is in [[Firefox]] and [[Google Chrome\|Chrome]], which is useful.                                                           |
| 01:37:23   | But yeah, it's really useful.                                                                        |
| 01:37:25   | And I just love how universal it's becoming thanks to WebKit.                                        |
| 01:37:30   | Yes.                                                                                                 |
| 01:37:31   | And as the most novice [[JavaScript]] person on this podcast, I'll say that I've learned a               |
| 01:37:35   | lot just looking at the voice control scripts, because for each one, Sal has listed the code         |
| 01:37:43   | underneath it.                                                                                       |
| 01:37:44   | You can, it's not just download this file, you can literally look through the code, and              |
| 01:37:48   | then you can start playing with it, and like, well, I'll change the error message or I'll            |
| 01:37:52   | change the voice or whatever, and it's not that hard.                                                |
| 01:37:56   | And then as you start getting familiar with it, you see repeated patterns.                           |
| 01:38:00   | You start to put it together.                                                                        |
| 01:38:02   | And there's also copy buttons on those scripts, and I discovered something today.                    |
| 01:38:07   | There is a question mark in the top right-hand corner of the Omni-Automation website, and            |
| 01:38:10   | if you click on that, it tells you a couple of useful things, including the talk sound,              |
| 01:38:14   | which happens, that happens when you click the copy script button, and it's put it on                |
| 01:38:21   | your clipboard.                                                                                      |
| 01:38:22   | I did not realise that.                                                                              |
| 01:38:23   | I was getting confused the other day as to why I kept hearing a talk sound randomly,                 |
| 01:38:27   | or seemingly randomly, when I clicked around on the website.                                         |
| 01:38:30   | And now I am pleased that the mystery has been solved, which is great.                               |
| 01:38:34   | The mystery talk sound.                                                                              |
| 01:38:36   | Yes.                                                                                                 |
| 01:38:37   | Yeah.                                                                                                |
| 01:38:38   | I mean, it wasn't that mysterious because it was kind of happy.                                      |
| 01:38:39   | But I thought it was my mouse to start with, and I was really confused.                              |
| 01:38:41   | I was like, I don't think that mouse makes that sound, and it only does it sometimes.                |
| 01:38:45   | Like, did I get chocolate in there or something?                                                     |
| 01:38:48   | Entirely plausible.                                                                                  |
| 01:38:49   | But no, you've just put a little helper sound in there, as I was talking about earlier,              |
| 01:38:52   | with voice interactions.                                                                             |
| 01:38:54   | Sometimes you want an alert in an audio format, rather than specifically words coming back.          |
| 01:39:00   | You've done all the feedback, too.                                                                   |
| 01:39:01   | Some kind of confirmation.                                                                           |
| 01:39:02   | Right?                                                                                               |
| 01:39:03   | Yeah.                                                                                                |
| 01:39:04   | Yeah.                                                                                                |
| 01:39:05   | Yeah.                                                                                                |
| 01:39:06   | I really love that.                                                                                  |
| 01:39:07   | So, yeah, it's great to see all these options.                                                       |
| 01:39:08   | All right.                                                                                           |
| 01:39:09   | I have a call to action for you, dear listener.                                                      |
| 01:39:11   | You've made it to the end of the show.                                                               |
| 01:39:13   | You've listened a long time.                                                                         |
| 01:39:14   | We've been talking.                                                                                  |
| 01:39:15   | We've had a great time.                                                                              |
| 01:39:16   | Think of all the things Sal has done for us.                                                         |
| 01:39:18   | He has parked his butt outside the hallway in Cupertino to get up, to get SJ, as you                 |
| 01:39:23   | call him, to approve Automator.                                                                      |
| 01:39:26   | You spent all this time making this stuff.                                                           |
| 01:39:28   | This is great stuff.                                                                                 |
| 01:39:29   | Please go check it out.                                                                              |
| 01:39:30   | And even if you're not an OmniFocus user, download the demo of the app and just try                  |
| 01:39:36   | this to see the world we could live in, because, I mean, this is really transformative to            |
| 01:39:42   | me.                                                                                                  |
| 01:39:43   | And I meant it when I said it earlier.                                                               |
| 01:39:44   | I want these types of controls everywhere.                                                           |
| 01:39:47   | Like, my favourite apps should all have this stuff, so I can just make it happen.                     |
| 01:39:53   | And hopefully, this is the start of something big, Sal.                                              |
| 01:39:56   | Let's hope so.                                                                                       |
| 01:39:57   | I agree.                                                                                             |
| 01:39:58   | I totally agree.                                                                                     |
| 01:40:00   | All right.                                                                                           |
| 01:40:01   | So the website is omni-automation.com.                                                               |
| 01:40:04   | And from there, you've got hooks to voice control, but I would recommend spelunking                  |
| 01:40:07   | that whole website.                                                                                  |
| 01:40:08   | There is so much good stuff there, because it's not just OmniFocus.                                  |
| 01:40:13   | You've got stuff there for the other Omni apps as well.                                               |
| 01:40:15   | And all of this is [[JavaScript]] Automation, which can be applied on any device, whichever              |
| 01:40:20   | you have for your Omni apps.                                                                          |
| 01:40:21   | Anywhere else people should go, Sal, to check this stuff out?                                        |
| 01:40:25   | That's our one-stop shop right now is the Omni-Automation website.                                   |
| 01:40:31   | And as Omni continues to develop, all of their apps will be incorporating these kind of voice        |
| 01:40:37   | controls into those as well.                                                                         |
| 01:40:40   | So right now, it's really focused on OmniFocus, because that's the app that's in major change        |
| 01:40:46   | and updating at this moment.                                                                         |
| 01:40:49   | And expect to see that with all of their products going forward.                                     |
| 01:40:53   | That's awesome.                                                                                      |
| 01:40:54   | And we are the automators.                                                                           |
| 01:40:55   | You can find us at relay.fm/automators.                                                        |
| 01:40:58   | You can find our forums over at talk.automators.fm.                                                  |
| 01:41:01   | You can find the website at automators.fm.                                                           |
| 01:41:04   | Thank you to our sponsors today, Electric, Hover, Trade, Coffee, and LinkedIn Jobs.                  |
| 01:41:08   | We'll see you next time.                                                                             |
