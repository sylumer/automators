---
status: "incomplete"
fc-date:
  year: 2020
  month: 03
  day: 27
fc-category: "podcast"
podcast: "Automators"
published: 2020-03-27
duration: 4092
formattedduration: "01:08:12"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Charlie Chapman"]
notetype: "episode"
showpage: "http://relay.fm/automators/46"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators046.mp3"
episode: 46
title: "46: Automating [[Dark Noise]] with Charlie Chapman"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
[[Dark Noise]] Developer Charlie Chapman joins the Automators to talk about his automation story and how he implemented automation in his Dark Noise application.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Charlie Chapman]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 046 Discussion](https://talk.automators.fm/t/automators-46-automating-dark-noise-with-charlie-chapman/6949)

# Sponsors
- [[Pingdom (Sponsor)|Pingdom]] - Start monitoring your website performance and availability today, and get instant alerts when an outage occurs or a site transaction fails. 
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Multiply your team’s productivity.
- [[Kensington (Sponsor)|Kensington]] - The Professionals Choice. Find the right docking solutions for your organisation today.

# Show Notes
- [Dark Noise](https://darknoise.app/)
- [Join the Dark Noise beta - TestFlight - Apple](https://testflight.apple.com/join/kpKtyijY) - The new Dark Noise beta.
- [Dark Noise - The Best App To Help You Focus - YouTube](https://www.youtube.com/watch?v=rsGnnwqbJuU)
- [Charlie Chapman on Twitter](https://twitter.com/_chuckyc)
- [Dark Noise on Twitter](https://twitter.com/darknoiseapp)
- [Shortcuts Corner: Apple Frames for iPhone 11 and 11 Pro, App Store Updates Page, Logging Completed Reminders, and Time Zones - MacStories](https://www.macstories.net/ios/shortcuts-corner-apple-frames-for-iphone-11-and-11-pro-app-store-updates-page-logging-completed-reminders-and-time-zones/)
- [TI-83 series - Wikipedia](https://en.wikipedia.org/wiki/TI-83_series)
- [PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/powershell)
- [Base64 Encode](https://www.icloud.com/shortcuts/3c19a15cbea14c63bc895c0745bbdc86) - Sample Base64 Encoding Shortcut

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks and joined by my fellow co-host, Rosemary Orchard, and this                       |
| 00:05      | is The Automators.                                                                                        |
| 00:06      | Hello, Rosemary.                                                                                          |
| 00:07      | How are you today?                                                                                        |
| 00:08      | Hello, David.                                                                                             |
| 00:09      | I am very thundery, but only because I've been listening to some.                                         |
| 00:14      | How are you?                                                                                              |
| 00:15      | Oh, are you?                                                                                              |
| 00:16      | I was going to say, is it raining?                                                                        |
| 00:17      | Maybe it's not.                                                                                           |
| 00:18      | We have a guest today.                                                                                    |
| 00:19      | Welcome to the show, Charlie Chapman, the developer of [[Dark Noise]].                                        |
| 00:23      | Hey.                                                                                                      |
| 00:24      | Charlie, I was telling you before we started recording how much I love your application                   |
| 00:29      | and gang, if you haven't checked it out, you should.                                                      |
| 00:31      | It's called [[Dark Noise]], and there was a whole slew of applications on the iPhone and iPad                 |
| 00:37      | for the longest time that would make white noise or sounds of a storm.                                    |
| 00:43      | Charlie showed up.                                                                                        |
| 00:44      | Was it about a year and a half ago that [[Dark Noise]] hit the scene?                                         |
| 00:47      | It was, yeah, August of 2019.                                                                             |
| 00:49      | Yeah.                                                                                                     |
| 00:50      | So, I guess it wasn't that long at all, but either way, so [[Dark Noise]] showed up and I                     |
| 00:56      | tried the app and immediately said, oh, yeah, here is a noise app by a guy that gets it.                  |
| 01:02      | [[Dark Noise]], the reason we have Charlie on today is because [[Dark Noise]] is the most automation              |
| 01:05      | friendly app.                                                                                             |
| 01:06      | If you want to create background noise, it works with shortcuts and does a whole bunch                    |
| 01:10      | of cool stuff.                                                                                            |
| 01:11      | And it turns out Charlie is also an automator like the rest of us, so we thought it'd be                  |
| 01:16      | fun to talk to him today.                                                                                 |
| 01:18      | So Charlie, just tell us a little bit about where you're from and what you do.                            |
| 01:24      | So I'm from St. Louis, Missouri, here in the US, and I'm a developer.                                     |
| 01:30      | I've developed a lot of different, like, settings and stacks for a while, but last                        |
| 01:35      | year I got the opportunity to jump over to an iOS team, which I had no iOS experience                     |
| 01:41      | at all, so I was very grateful for my company for letting me do that.                                     |
| 01:45      | But part of my way of trying to teach myself all this was build an application, get it                    |
| 01:50      | out in the store, and use that as a way to also be spending all of your time after work                   |
| 01:56      | trying to get a hold of that whole development stack.                                                     |
| 02:00      | And so now I feel like I can really, truly call myself an iOS developer now, so I guess                   |
| 02:05      | I'd say that's what my job is now.                                                                        |
| 02:08      | Given how often I run your app, I think you're definitely an iOS developer.                               |
| 02:13      | What kind of programming were you doing before, Charlie?                                                  |
| 02:16      | So.NET, Microsoft's stack was sort of where I lived most of the time.                                     |
| 02:21      | In fact, I was one of the few Windows phone and Windows 8 developers back in the day,                     |
| 02:27      | so I actually did have a little bit of experience doing mobile development and touch-friendly             |
| 02:31      | development, but mostly it was web development.                                                           |
| 02:34      | Yeah, Windows phone was very different to Android or iOS from what I remember.                            |
| 02:39      | I had a friend with one, and I was like, oh, this is interesting, but very different.                     |
| 02:43      | You know, I could talk about it for a long time, but it was an interesting platform.                      |
| 02:48      | It was definitely too little, too late, but yeah, it was interesting.                                     |
| 02:52      | Yeah, they made fun of Apple when they first came out, and they really missed the boat.                   |
| 02:59      | In a lot of ways, I think that was a better platform than Android.                                        |
| 03:03      | I mean, Android has obviously evolved, so don't send me email.                                            |
| 03:07      | But out of the gate, I thought they had some really interesting ideas, and the thing I                    |
| 03:11      | liked about it is it wasn't a copy of iOS, it was a completely different kind of opinion                  |
| 03:16      | of it.                                                                                                    |
| 03:17      | Yeah, exactly.                                                                                            |
| 03:18      | It was also interesting because I remember the original Windows mobile platform.                          |
| 03:22      | I think it was called Windows CE or something like that.                                                  |
| 03:26      | A guy in my office had one, and I tried it for like an hour and realised how much I hated                 |
| 03:31      | it, but this was like years ago.                                                                          |
| 03:33      | But either way, so Charlie, this app that you came up with, [[Dark Noise]], it's such an                      |
| 03:40      | interesting concept in that here is a category of applications, you know, an app that can                 |
| 03:45      | make the sound of a waterfall or a thunderstorm or just white noise.                                      |
| 03:50      | But there was a bunch of them, they were all kind of garbage in terms of the user interface               |
| 03:56      | and in terms of just like having an opinion.                                                              |
| 03:59      | And so your app shows up, and it's so interesting to me that not only does it do the noises               |
| 04:06      | very well.                                                                                                |
| 04:07      | In fact, I was telling you before the show started, we've got a puppy in the house.                       |
| 04:09      | I've been playing [[Dark Noise]] in the thunderstorm a lot because I wanted the dog not to be freaked         |
| 04:15      | out by the sound of thunder.                                                                              |
| 04:17      | And then we just had our first thunderstorm, and the dog didn't know difference between                   |
| 04:21      | your app and the thunderstorm.                                                                            |
| 04:22      | So she just sat there and chewed on her bone, just like normal.                                           |
| 04:25      | It was great, right?                                                                                      |
| 04:26      | But you showed up with this totally different design, and how did you come across that and                |
| 04:33      | decide to bring automation to boot?                                                                       |
| 04:35      | I think maybe it's stereotypical to say this, but I was kind of coming at this with the                   |
| 04:40      | what would an Apple-designed white noise app look like, if that makes sense.                              |
| 04:45      | And also, definitely a guiding light behind all this is Mac stories.                                      |
| 04:51      | I've been reading their reviews for a long time, and so [[Federico Viticci\|Federico]] and that team, they're                   |
| 04:56      | sort of like, to my mind, the taste makers for what a good app really feels like.                         |
| 05:03      | And so I was definitely driven by how I would imagine them writing about this app.                        |
| 05:11      | That would drive a lot of decisions I made in terms of keeping the design more simple,                    |
| 05:17      | but also having a lot of the Apple-specific integrations in there.                                        |
| 05:22      | And that's definitely what drove the shortcuts integration was, you know, I was sort of targeting         |
| 05:27      | this like Apple fan community more than the broader community necessarily.                                |
| 05:34      | And I knew that that would be something that would be really appreciated, and it was something            |
| 05:37      | that wasn't completely captured or at least not marketed as a feature of a lot of the                     |
| 05:42      | other apps that were on the store already.                                                                |
| 05:44      | I agree.                                                                                                  |
| 05:45      | And did the community reward you?                                                                         |
| 05:47      | Because it seems like everybody knows using the app.                                                      |
| 05:50      | Yeah.                                                                                                     |
| 05:51      | Like, not only using it, but sharing, like on launch day, Chris Lawley, I apologise if                    |
| 05:58      | I pronounced that wrong, he made a YouTube video on launch day, which I had no correspondence             |
| 06:03      | with him before.                                                                                          |
| 06:04      | And it was talking about how he's been using the beta with his shortcuts.                                 |
| 06:08      | And there's been a lot of stuff like that from a bunch of people, including you, Rosemary,                |
| 06:13      | where like, you're rewarding me by like talking about using it because it's kind of exciting              |
| 06:18      | to share the automations that you build.                                                                  |
| 06:21      | Yes, it definitely is.                                                                                    |
| 06:22      | And I have to say, you know, what are the things that pretty much every other [[Dark Noise]]                  |
| 06:26      | app that I've ever used has universally had in common aside from a really terrible UI is                  |
| 06:32      | seemingly zero interest in actually supporting automation.                                                |
| 06:36      | And you may think, why would I want to automate a [[Dark Noise]] application?                                 |
| 06:39      | Well, especially if like David, you have a home screen launcher system made of shortcuts.                 |
| 06:44      | Well, guess what, when you start this scene, then you can automatically add noises to get                 |
| 06:49      | you in that mindset.                                                                                      |
| 06:50      | So when I hear thunder, I'm doing automators, but when I hear a waterfall, I'm dealing                    |
| 06:54      | with nested folders.                                                                                      |
| 06:55      | And it's very nice to have that automatically built into things.                                          |
| 06:59      | And you've managed to really get that in there.                                                           |
| 07:01      | And that's greatly appreciated at the very least by me.                                                   |
| 07:06      | It's a very easy automation.                                                                              |
| 07:08      | So if you install the application, there is a [[Dark Noise]] action group in essence.                         |
| 07:14      | And like an example of how I use the app with automation is one of my favourite things to                  |
| 07:20      | do with Starbucks, although I'm not doing that this week, is go in with an iPad, you                      |
| 07:25      | know, put on a pair of headphones and just grind through email.                                           |
| 07:29      | Like I have kind of flagged emails that I want to give a little more attention to, you                    |
| 07:33      | know, versus the triage that you do when you're going through email fast.                                 |
| 07:38      | And I thought it'd be fun to do that and have some music in my ear.                                       |
| 07:43      | So whenever I hit the shortcut that launches into my mail review, it immediately starts                   |
| 07:49      | playing the thunderstorm.                                                                                 |
| 07:50      | And I've got headphones on, I'm sitting in Starbucks and I'm just off to the races.                       |
| 07:54      | Sounds silly, but having that happen automatically is almost like a mental trigger.                       |
| 07:59      | And I think there's some real truth to that when your brain associates a sound with a                     |
| 08:04      | focus and you can do that with this app.                                                                  |
| 08:07      | So, so thanks, Charlie.                                                                                   |
| 08:09      | That's awesome.                                                                                           |
| 08:10      | Yeah, that's definitely an area that I had previously been using white noise for sleeping                 |
| 08:15      | and for helping my kids sleep.                                                                            |
| 08:18      | I didn't realise until I opened up the beta how big of a deal it would be on the like                     |
| 08:22      | productivity side of things.                                                                              |
| 08:25      | And that's definitely where shortcuts are used probably the most frequently is people                     |
| 08:28      | that are using it to help focus while they're at work in a busy office and a coffee shop,                 |
| 08:32      | whatever it would be.                                                                                     |
| 08:33      | Or at the moment where they're using it to drown out the sounds of everybody else being                   |
| 08:37      | stuck in the house with them because at least at the time of recording, this may be resolved              |
| 08:42      | by the time we release, we are recording a little in advance here.                                        |
| 08:45      | There's quarantine in a lot of countries in Europe over here and David is pretty much                     |
| 08:49      | stuck at home.                                                                                            |
| 08:50      | So he's got a cute puppy to keep him entertained, but everybody is at home.                               |
| 08:54      | And for people not used to that, that can be very difficult.                                              |
| 08:57      | The way that's because home is too quiet or home is too loud.                                             |
| 08:59      | So being able to use your app to either simulate maybe an office or white noise is definitely             |
| 09:04      | going to be helpful to many people with that, I'm sure.                                                   |
| 09:07      | Yeah, I've put out a call recently for people to make requests for certain sounds that might              |
| 09:12      | be helpful in this type of situation, specifically for people who are like home alone that are            |
| 09:17      | used to having the sounds of humans around them.                                                          |
| 09:20      | I feel like that could get start making you go pretty stir crazy pretty quick.                            |
| 09:25      | So maybe that would help people out a little bit.                                                         |
| 09:27      | If they can simulate humans being around.                                                                 |
| 09:29      | Yes.                                                                                                      |
| 09:30      | And just for anybody who works on a construction site, there is a construction sound if you               |
| 09:34      | are stuck at home.                                                                                        |
| 09:36      | Another one that frankly works for me that I didn't think would is there's a coffee                       |
| 09:40      | shop sounds.                                                                                              |
| 09:41      | So like if you're like, if you can't go to Starbucks this week because you're worried                     |
| 09:46      | about this illness, you could have the coffee shop sounds right at home.                                  |
| 09:51      | Just open up.                                                                                             |
| 09:52      | But you know, we're really not here to give you a hour and a half at, even though we'd                    |
| 09:56      | like to because it's a great app.                                                                         |
| 09:58      | But I want to talk to you a little bit about automation.                                                  |
| 10:01      | But before we do that, let's hear from our first sponsor.                                                 |
| 10:06      | This episode of the automators is brought to you by Kensington, the professionals choice.                 |
| 10:11      | Go to Kensington.com/automators to find the universal docking station for you.                      |
| 10:17      | Kensington is the people who make universal docking stations that are designed to increase                |
| 10:22      | productivity.                                                                                             |
| 10:23      | It's easy to use, you can get access to more ports and make your sleek MacBook, Chromebook                |
| 10:28      | or other laptop as powerful as a desktop.                                                                 |
| 10:31      | It's plug and play with no drivers, so you can enjoy up to dual 4k displays with HDMI                     |
| 10:37      | and display link video connectors, plus USB 3.0, USB C and Thunderbolt 3 with power delivery              |
| 10:44      | available.                                                                                                |
| 10:45      | It's awesome just sitting down at your desk, plugging one cable into your laptop and you're               |
| 10:49      | off to the races.                                                                                         |
| 10:51      | The Kensington engineering team has three decades of experience in high volume manufacturing              |
| 10:56      | of hardware IT products, plus rigourous test cycles and quality control means their products               |
| 11:02      | are tested above the industry standards.                                                                  |
| 11:05      | If you're an IT decision maker looking to find the right docking solutions for your                       |
| 11:09      | organisation, check out Kensington's Pro concierge program and test drive a docking                       |
| 11:15      | solution today.                                                                                           |
| 11:16      | Go to Kensington.com/Automators right now to check out Kensington.                                  |
| 11:21      | That's Kensington.com/Automators, A-U-T-O-M-A-T-U-R-S to learn more.                                |
| 11:27      | Our thanks to Kensington for their support of this show and all of Relay FM.                              |
| 11:32      | So Charlie, how did you get started with automation and in getting involved in this sort of thing?        |
| 11:39      | So it's kind of hard to say specifically because to me, automation is so wrapped up in my career          |
| 11:47      | ending up in software development at all.                                                                 |
| 11:50      | So like if I were to like take it back to where the first time I remember doing anything                  |
| 11:54      | that I would call automation.                                                                             |
| 11:56      | It would be whenever I was in high school and we had the TI-83 plus calculator and we                     |
| 12:04      | found out that you could write little programs and TI basic.                                              |
| 12:08      | And most of us at first, we were just writing games, not really automation or making the                  |
| 12:13      | matrix letters fall down the screen.                                                                      |
| 12:15      | But at one point, I realised that I could build my chemistry calculations and formulas                    |
| 12:22      | into like a little sort of app, which at this point I would probably more call like an automation         |
| 12:27      | where I could input the different inputs in terms of like how many milliliters or whatever                |
| 12:34      | and then it would output the answer to whatever problem I had, which I don't know.                        |
| 12:39      | Maybe you can do that cheating.                                                                           |
| 12:40      | I don't know.                                                                                             |
| 12:41      | But that was that first sort of foray into like, oh, I can build this little thing that                   |
| 12:46      | automatically does something that I was manually writing out.                                             |
| 12:50      | And it'll just spit out the answers for me a lot faster.                                                  |
| 12:53      | And then that is really what took me into programming in general.                                         |
| 12:57      | But also like I had a whole slew of these little utility apps that I would build, not                     |
| 13:03      | just for math, but for all sorts of things on my calculator when I was in high school.                    |
| 13:08      | I would say on the one hand, a chemistry teacher may determine that to be cheating.                       |
| 13:12      | I would say that that is a smart use of the available resources.                                          |
| 13:17      | So as long as you weren't necessarily cheating in an exam where you wouldn't have remembered              |
| 13:21      | the formula, then I think we can call that OK and just automation.                                        |
| 13:26      | And I never have one of those calculators, but I'm now thinking of pulling out pCalc                      |
| 13:29      | because pCalc, you can do the same sort of thing with that nowadays.                                      |
| 13:32      | And having a play with that needs some formulas, though, and some problems itself with it.                |
| 13:37      | Are you the Pythagoras there?                                                                             |
| 13:38      | I'm a little older than you guys, but the Radio Shack had one when I was in college                       |
| 13:44      | in the late 80s that had a keyboard and you could program basic on it.                                    |
| 13:50      | And I used to do the same thing in college.                                                               |
| 13:51      | I would write computer programs.                                                                          |
| 13:55      | I did some engineering.                                                                                   |
| 13:56      | I was an engineering student before I became a lawyer.                                                    |
| 13:59      | And I wrote all my programs and formulas into these little programs that write into this                  |
| 14:04      | calculator.                                                                                               |
| 14:05      | And I just felt like such a boss.                                                                         |
| 14:06      | I remember that.                                                                                          |
| 14:07      | Well, the question is, if we put Charlie in front of what were those calculators today,                   |
| 14:11      | can you still program one of those little applications that's probably using a very                       |
| 14:17      | different language to [[Swift]], I'm guessing.                                                                |
| 14:20      | Slightly.                                                                                                 |
| 14:21      | Yeah.                                                                                                     |
| 14:22      | I remember it had go-tos, which is not a thing that I've really used since then.                          |
| 14:27      | I remember using that not that many years ago in a exam where we also had to write code                   |
| 14:31      | on paper.                                                                                                 |
| 14:32      | Ooh.                                                                                                      |
| 14:33      | Yeah.                                                                                                     |
| 14:34      | Yes.                                                                                                      |
| 14:35      | It's funny how everybody who starts learning in basic starts out by running text adventures.              |
| 14:39      | It's like, that's just part of the process you go through.                                                |
| 14:43      | I'm sure you wrote them on your calculator, probably.                                                     |
| 14:45      | Oh, definitely.                                                                                           |
| 14:46      | Those are the games we were making.                                                                       |
| 14:48      | The ones that were getting passed around, like the intense platformers or I'm sure Doom                   |
| 14:53      | was on there, those were not what we were doing.                                                          |
| 14:56      | We were definitely making little text adventures.                                                         |
| 14:59      | But then the automation got a little more serious as you got further in your career.                      |
| 15:04      | Where'd you go after the TI-83?                                                                           |
| 15:07      | So it's weird because I wasn't really in the automation world.                                            |
| 15:16      | I wasn't even really in the Mac world in the sense that I think about it now, even though                 |
| 15:21      | I did use a Mac, but I primarily was using it for, like I did a lot of video editing                      |
| 15:25      | and motion graphics and stuff.                                                                            |
| 15:27      | And I would actually switch over to Windows whenever I did programming work because we                    |
| 15:33      | were doing everything on the Microsoft stack, even in school.                                             |
| 15:36      | And so in the Windows world, we used [[PowerShell]], which is significantly less nice.                        |
| 15:44      | But that was sort of my introduction into automation in, I guess, the more traditional                    |
| 15:50      | sense.                                                                                                    |
| 15:51      | Often that was used for builds at work, running suites of little tests.                                   |
| 16:01      | And then the first thing I can remember doing personal was when I started doing user testing              |
| 16:08      | for websites, where we would use some applications that could run a website automatically.                |
| 16:15      | And so you could build these scripts that would click buttons on the website and do                       |
| 16:20      | testing for you.                                                                                          |
| 16:21      | But then I realised I could do some things at home that took a long time.                                 |
| 16:25      | I could build a little automation that would open up.                                                     |
| 16:28      | I could click one button and it would open up my email and go to this filtered list or                    |
| 16:33      | something like that.                                                                                      |
| 16:35      | But it wasn't really until shortcuts that I started truly doing what this show would                      |
| 16:40      | probably consider automation.                                                                             |
| 16:42      | And that, again, Mac story is being the one that really drove my interest in it because                   |
| 16:48      | he sort of showed how I could build things myself.                                                        |
| 16:52      | Obviously, the really intense ones that he built are honestly over my head.                               |
| 16:57      | But there'd be little things I'm frequently doing that I'd realise I can probably do automatically.       |
| 17:03      | Like I had a little podcast before my most recent one.                                                    |
| 17:07      | And I foolishly made social accounts for every single social platform.                                    |
| 17:12      | And then I wanted to post all those, but it's this little podcast I didn't want to                        |
| 17:16      | post to or I didn't want to pay for a big application that could do all this stuff for you.               |
| 17:24      | So I tried building those out in automations.                                                             |
| 17:27      | And while the hooks aren't necessarily great, it still was nice to be able to have it prompt              |
| 17:34      | me to ask what's the title, what's the link to it, and what number episode is it.                         |
| 17:41      | And then it would at least copy and paste and put into the paste board and then open                      |
| 17:45      | up Reddit or open up Twitter and sort of get me moving through all the different social                   |
| 17:49      | platforms I needed to post to.                                                                            |
| 17:51      | That's one of those things where people may think, oh yeah, well, I could probably just                   |
| 17:55      | use something like Hootsuite or Buffer for this.                                                          |
| 17:57      | But if you want to integrate with more than a couple of platforms, that starts costing                    |
| 18:00      | a lot of money very quickly.                                                                              |
| 18:02      | And it can be a lot easier to just use something like Shortcuts, which, okay, me still take               |
| 18:06      | a few taps every time.                                                                                    |
| 18:08      | But if it gets you most of the way there and in your little short on cash, then it's worth                |
| 18:13      | spending the time to, instead of the cash, I would say, especially if something like                      |
| 18:17      | that were, you know, it's nice to double check these things before they got the door instead              |
| 18:21      | of 100% automating them.                                                                                  |
| 18:23      | Now, Charlie, were you ever a workflow user or did you find shortcuts after Apple acquired                |
| 18:27      | workflow?                                                                                                 |
| 18:29      | So as a [[Cortex]] listener, I had been taught the praises of workflow for a long time, but                   |
| 18:36      | I had never bitten the bullet and actually jumped into it until right after Apple bought                  |
| 18:40      | them and then they made it free.                                                                          |
| 18:41      | And I was like, Oh, maybe I'll dip my toes in the water.                                                  |
| 18:43      | And that was when I started playing around with like, how can I automate or closely get                   |
| 18:49      | close to automating posting to all these different things.                                                |
| 18:53      | So I was late to the game on workflow, but I did play around with it before shortcuts.                    |
| 18:57      | I've heard from some app developer friends who get a little frustrated by apps like                       |
| 19:02      | workflow or then shortcuts, because they're used to kind of a real true programming model                 |
| 19:06      | where this is more kind of generated for anybody can program.                                             |
| 19:11      | Did you find any resistance with that kind of those kind of issues?                                       |
| 19:14      | I mean, I think there's definitely an element of that where I can sort of in my mind write                |
| 19:20      | it out as code, you know, and I want it to move that fast.                                                |
| 19:24      | And so that sort of friction of dragging things around can make it feel a little frustrating.             |
| 19:29      | Like there's some automations that I should be building for like the way I do my some                     |
| 19:34      | podcasting stuff, but instead I'll build like an entire app that definitely takes me way                  |
| 19:39      | longer than if I would were to just do it with a normal automation.                                       |
| 19:42      | But it like feels more comfortable to me because I know I can type it out.                                |
| 19:47      | Yeah.                                                                                                     |
| 19:48      | Well, for us as programmers, we're probably used to something like a switch statement                     |
| 19:51      | where you can say, Hey, if this value is equivalent to this, then do that.                                |
| 19:55      | Or if it's equivalent to that, then do this other thing.                                                  |
| 19:58      | And otherwise for by default do that.                                                                     |
| 20:00      | And instead in shortcuts, you have to nest if statements, which can get a little bit tricky               |
| 20:03      | from time to time.                                                                                        |
| 20:04      | Yeah.                                                                                                     |
| 20:05      | Yeah.                                                                                                     |
| 20:06      | And that for many people I can see is frustrating, especially if you're trying to program this            |
| 20:10      | on quite a small iPhone screen because you don't necessarily have a very nice, shiny                      |
| 20:14      | 12.9 inch iPad unlike David, then you're there going, Okay, and now this is like, I don't                 |
| 20:19      | know, one third of my screen and widths because I have so many ifs inside of each other.                  |
| 20:23      | It can be tricky, but at the same time, I personally as a programmer quite like the                       |
| 20:28      | fact that, you know, I have this abstraction between me and the code because it is nice                   |
| 20:32      | to not have to think about the details.                                                                   |
| 20:34      | And whoops, I forgot a semi colon over here or I didn't quite match up my quotation marks                 |
| 20:39      | there.                                                                                                    |
| 20:40      | I'm not sure how that happened, but apparently I missed the shift key and things like that.               |
| 20:44      | But even when you have a nice fancy iPad, there's still some limitations like you can't                   |
| 20:49      | copy and paste blocks, which means you have to often repeat yourself quite a bit when                     |
| 20:55      | you're making shortcuts.                                                                                  |
| 20:56      | And like that we've talked about this in the show repeatedly, but the text field is                       |
| 21:01      | way too small and, you know, there's a bunch of kind of little things like that, which                    |
| 21:05      | I hope get fixed going forward.                                                                           |
| 21:07      | And I'm sure it can be frustrating if you're used to a normal programming environment.                    |
| 21:11      | Yeah, that's definitely, that was definitely my experience.                                               |
| 21:15      | Whenever they're smaller, it's so much faster to get something up and running.                            |
| 21:18      | But once you start getting complicated, like some of those really crazy intense shortcuts                 |
| 21:24      | where you're base 64 encoding, you know, images and stuff, that's where it honestly                       |
| 21:28      | gets so much more complicated to me than if I was just seeing it, you know, written out                   |
| 21:32      | in code.                                                                                                  |
| 21:33      | Could you share one of your, your simple shortcuts that you use often, maybe help people get              |
| 21:38      | an idea of or something they may want to do?                                                              |
| 21:40      | Yeah, so I mean, outside of the, all the ones that I would use as a sort of promotion for                 |
| 21:44      | my app, one of the ones I do use a lot is I just have one called thoughts.                                |
| 21:51      | And whenever I click on it, it just pops up a list of different Apple notes I have for                    |
| 21:57      | like my different podcasts, my app, I have, I have an Apple note that's just ideas.                       |
| 22:03      | And like anytime I think of an idea, I just want to throw it in there as quick as I can.                  |
| 22:07      | And so I have a little shortcut that just pops up the different buckets of ideas I have                   |
| 22:12      | so that I can as quickly as possible get that thing that's in my brain committed down to                  |
| 22:16      | something I can read later.                                                                               |
| 22:18      | And that way I don't like forget about it.                                                                |
| 22:20      | That's when I use pretty regularly.                                                                       |
| 22:22      | Let's talk about that one.                                                                                |
| 22:23      | So I would guess it starts with maybe a choose from menu.                                                 |
| 22:27      | Let me open it up.                                                                                        |
| 22:28      | Yeah, it starts with a choose from menu.                                                                  |
| 22:31      | And then you probably have a list of like podcasts, app development, you know, navel                      |
| 22:37      | gazing, whatever, you know, the list of them.                                                             |
| 22:40      | And then if someone selects one of those, one of the challenges I always find with notes                  |
| 22:44      | is finding and getting to a note is difficult because it doesn't have a UUID for each note.               |
| 22:50      | We just talked about this in the last episode, didn't we Rose?                                            |
| 22:53      | So how do you have the shortcut find the appropriate note?                                                |
| 22:56      | I don't know.                                                                                             |
| 22:57      | It's just, let's see.                                                                                     |
| 22:58      | It just has the note sitting right there.                                                                 |
| 23:00      | Yeah.                                                                                                     |
| 23:01      | So I seem to remember you can select a very specific note, but you can't then you can't                   |
| 23:06      | search for a specific note so easily because if you have that exact same phrase somewhere                 |
| 23:10      | else, then it won't work.                                                                                 |
| 23:12      | But if you set it up in advance and that's the advantage that you've got there by using                   |
| 23:16      | that menu, I believe, that you can you can just have it say, you know, open this note,                    |
| 23:21      | which is pretty nice.                                                                                     |
| 23:22      | Yeah.                                                                                                     |
| 23:23      | That is.                                                                                                  |
| 23:24      | Okay.                                                                                                     |
| 23:25      | I set this up so long ago.                                                                                |
| 23:26      | I'm like, I remember exactly how I did that.                                                              |
| 23:27      | But yeah, that's exactly what I did.                                                                      |
| 23:28      | Okay.                                                                                                     |
| 23:29      | And then you append text to the end of it.                                                                |
| 23:30      | I guess.                                                                                                  |
| 23:31      | No.                                                                                                       |
| 23:32      | So it actually just opens it up in notes so then I can type it out with formatting.                       |
| 23:37      | Then use work in the note.                                                                                |
| 23:39      | Yeah.                                                                                                     |
| 23:40      | Gotcha.                                                                                                   |
| 23:41      | Are you using the show note action for this?                                                              |
| 23:43      | I'm just looking at it myself and trying to remember exactly how I did because I did                      |
| 23:46      | something similar before.                                                                                 |
| 23:48      | Yes.                                                                                                      |
| 23:49      | So I believe it is the show note action.                                                                  |
| 23:53      | No, it's not show note.                                                                                   |
| 23:55      | What is this?                                                                                             |
| 23:56      | It is.                                                                                                    |
| 23:57      | Oh, maybe it is a specifically custom generated donated action from the notes app for a specific          |
| 24:03      | note.                                                                                                     |
| 24:04      | No, no, no.                                                                                               |
| 24:05      | That's exactly what it is.                                                                                |
| 24:06      | Okay.                                                                                                     |
| 24:07      | So I would open up that note and then you get that one donated because yeah, at the bottom                |
| 24:11      | of my list, I have the last couple that I've opened.                                                      |
| 24:14      | Yes.                                                                                                      |
| 24:15      | Yes.                                                                                                      |
| 24:16      | Okay.                                                                                                     |
| 24:17      | Does that mean Apple has a unique identifier for these notes that it just doesn't share                   |
| 24:21      | with us?                                                                                                  |
| 24:22      | Yes.                                                                                                      |
| 24:23      | I wonder what's under the hood on that.                                                                   |
| 24:24      | But yeah.                                                                                                 |
| 24:25      | Yeah.                                                                                                     |
| 24:26      | I mean, it has to because if you go to delete one somewhere in their code, they have to                   |
| 24:28      | be saying which one they're deleting.                                                                     |
| 24:30      | And I also do have, I have a couple in here too that are Google docs.                                     |
| 24:35      | And so that's just, you know, the URL as text and then open up that in [[Safari]].                            |
| 24:39      | Yeah.                                                                                                     |
| 24:40      | That's, I didn't, I guess that's really the only way to do that, but that's a cool shortcut.              |
| 24:44      | So it's a very simple one.                                                                                |
| 24:46      | You just open a note from a choose from menu.                                                             |
| 24:49      | There's really nothing else to it, I would imagine.                                                       |
| 24:51      | Yeah.                                                                                                     |
| 24:52      | No, it is, it is really simple.                                                                           |
| 24:53      | It is long because of the, the way that the menu system works in terms of how it's laid                   |
| 24:58      | out in the, like the workflow.                                                                            |
| 25:00      | But yeah, I used to have it as a like icon on my home screen, but now I just have it                      |
| 25:05      | as one of the top items in my like widget shortcuts widget.                                               |
| 25:08      | Yeah.                                                                                                     |
| 25:09      | I was going to ask you how you triggered it.                                                              |
| 25:10      | That makes sense.                                                                                         |
| 25:11      | So you slide to the left and then there it is.                                                            |
| 25:14      | Yep.                                                                                                      |
| 25:15      | Yeah.                                                                                                     |
| 25:16      | And if you're listening and you haven't used choose from menu with shortcuts, you should.                 |
| 25:20      | This is like such a great gateway action for just about anything.                                         |
| 25:25      | Like all of those widgets I have on my home screen are essentially the same thing.                        |
| 25:30      | It starts with choose from menu and then you can run individual shortcuts and open apps                   |
| 25:35      | and do different things from the choose from menu.                                                        |
| 25:37      | Another thing you can do with choose from menu, I think a lot of people don't realise                     |
| 25:40      | you can reorder them.                                                                                     |
| 25:41      | Once you put it together, if you decide you want to, to change the order, you just drag                   |
| 25:45      | them in the choose from menu command and that allows you to, to really just make it work                  |
| 25:50      | for you.                                                                                                  |
| 25:51      | Yes.                                                                                                      |
| 25:52      | And the one thing I always feel like I need to remind people with choose from menu is your                |
| 25:56      | menu item itself.                                                                                         |
| 25:57      | So say for example, I have a menu with two options and David and Charlie, David does                      |
| 26:02      | not actually come out of that menu action when I select it.                                               |
| 26:05      | So I do have to, if you have, if I want the text David in that menu option, then I have                   |
| 26:10      | to put it in text block or something, but that also means that you can just get whatever                  |
| 26:14      | is above your menu and feed that into the actions inside of the menu, which is pretty                     |
| 26:18      | useful.                                                                                                   |
| 26:19      | Yeah.                                                                                                     |
| 26:20      | And so you said you had it on your home screen.                                                           |
| 26:22      | Do you run any shortcuts from your home screen?                                                           |
| 26:26      | Not anymore because my home screen is really a sparse.                                                    |
| 26:29      | Now I pretty much just use the, the shortcuts widget for driving most of mine.                            |
| 26:35      | Yeah.                                                                                                     |
| 26:36      | I go back and forth just recently I published a YouTube where I had a whole home screen                   |
| 26:41      | that was all shortcuts and I had it for like four months.                                                 |
| 26:44      | And now I've added a couple apps back in, you know, I'm just always going back and                        |
| 26:48      | forth on that with the iPad now in particular, it's really nice because you can put the shortcuts         |
| 26:53      | widget that's on the home, that's on the home screen already just on the left side.                       |
| 26:58      | And that really solves the problem for you.                                                               |
| 27:00      | Yeah.                                                                                                     |
| 27:01      | Yeah.                                                                                                     |
| 27:02      | Exactly.                                                                                                  |
| 27:03      | The other thing is they actually run cleaner in the today view widget, you know, it doesn't               |
| 27:09      | go to the shortcuts app.                                                                                  |
| 27:10      | It just gives you the menus right in the widget, which I think looks nicer.                               |
| 27:14      | Definitely does.                                                                                          |
| 27:15      | And I'm, I'm personally a big fan of the, the widget.                                                     |
| 27:19      | And for things that I haven't been using in the widget, I have experimented recently                      |
| 27:22      | with putting a few shortcuts on my home screen, but in general, I've pretty much just put                 |
| 27:26      | launch cuts on my home screen because with the folders inside of that, I don't feel like                  |
| 27:30      | I need to throw everything on my home screen and that runs pretty cleanly as well.                        |
| 27:34      | And I'm, I'm a big fan.                                                                                   |
| 27:36      | I remember back in the days where putting shortcuts on your home screen would open [[Safari]]                 |
| 27:39      | before it then open shortcuts.                                                                            |
| 27:42      | That was so enough on, and it felt like it was a lot of work every time.                                  |
| 27:46      | So I'm really pleased that there are better options now, but I still feel that today view                 |
| 27:49      | today widget is pretty much the best way to go.                                                           |
| 27:53      | This episode of automators is brought to you by TextExpander from our friends at smile.                  |
| 27:58      | Save time typing and boost your productivity with TextExpander.                                          |
| 28:02      | TextExpander lets you instantly insert snippets of text as you type, using a quick search                |
| 28:07      | or abbreviation.                                                                                          |
| 28:09      | Insert snippets for anything you type frequently.                                                         |
| 28:11      | They can be simple, like your phone number, or more complex, like long customisable fill-in               |
| 28:16      | fields with automatically calculated dates.                                                               |
| 28:20      | TextExpander works everywhere you type without special plugins.                                          |
| 28:24      | Use it in email, word processors, spreadsheets, web apps, and more.                                       |
| 28:29      | Businesses like yours use TextExpander every day to manage and share snippets with the                   |
| 28:33      | employees and keep the whole team on track.                                                               |
| 28:36      | If you want to learn more about TextExpander, you can sign up for one of their free webinars,            |
| 28:41      | which include power tools for customer support professionals with help scout in March, and                |
| 28:45      | TextExpander beginner, advanced, and teams webinars.                                                     |
| 28:49      | You can sign up for the webinars now at textexpander.com.                                                 |
| 28:53      | I first discovered TextExpander about seven or eight years ago, and I mostly use snippets,               |
| 28:58      | which include things like fixing the spelling of my name and my email address, and maybe                  |
| 29:03      | even my URL from time to time.                                                                            |
| 29:06      | These sounds simple, but it all adds up.                                                                  |
| 29:09      | And combined with a couple of those longer form ones, where I can say thank you for being                 |
| 29:13      | on Automators on March 16th, for example, then I can definitely get everything done.                      |
| 29:20      | I recommend TextExpander to everybody who types, especially anybody who really hates                     |
| 29:25      | doing things twice, and it helps with anything, everything, and more.                                     |
| 29:31      | In my case, it mostly helps you with email, and I bet it could help you too.                              |
| 29:35      | TextExpander is available for macOS, Windows, Chrome, iPhone, and iPad, and Automators listeners          |
| 29:41      | get 20% off of their first year.                                                                          |
| 29:43      | Just go to textexpander.com/podcast to learn more about TextExpander.                               |
| 29:49      | That's textexpander.com/podcast.                                                                    |
| 29:51      | If you're familiar to try TextExpander, check it out now.                                                |
| 29:55      | Our thanks to TextExpander for their support of this show and relay FM.                                   |
| 29:58      | All right, Charlie, you gave us an easy one.                                                              |
| 30:02      | Now let's hear one of your more complicated ones.                                                         |
| 30:05      | To be honest, I think most of mine are pretty easy.                                                       |
| 30:11      | The ones that are complicated are ones that I stole from somebody else.                                   |
| 30:15      | I heavily use [[federico Viticci\|Federico Viticci's]] Apple Frames for taking screenshots and wrapping them in                  |
| 30:23      | the iPhone frames or iPad or whatever.                                                                    |
| 30:29      | I think the most complicated one I have would be the one that was posting to all of my different          |
| 30:35      | social networks, but it slowly died to the point where I stopped using it as often as                     |
| 30:44      | a lot of the social network apps have reduced how easily you can automate them, it feels                  |
| 30:50      | like.                                                                                                     |
| 30:51      | Yeah, they've either reduced their shortcut support if they ever had it, or they've broken                |
| 30:58      | the APIs that people were previously using, which is a real shame because social media                    |
| 31:03      | is the perfect thing to automate for something like that.                                                 |
| 31:05      | We're very fortunate that we can still post the automators stuff to Twitter automatically.                |
| 31:09      | I'm waiting for that to break at some point though.                                                       |
| 31:12      | Yeah, I feel like they're the ones that are the most likely to keep support.                              |
| 31:16      | Yes, yeah.                                                                                                |
| 31:18      | But what social media networks were you posting to when you were using this, and how was it               |
| 31:22      | working in general, just as a concept?                                                                    |
| 31:25      | So what I would do is I would ask for text for the title of the episode, and then it                      |
| 31:34      | would ask for text for the URL of the episode, and then it would first, so whenever I built               |
| 31:44      | this to age it, I guess, was when Mastodon was definitely going to become very popular.                   |
| 31:49      | So it would first open up a [[Safari]] web view with the Mastodon posting page, which you                     |
| 32:00      | could automate through query string parameters to automatically fill in what the actual post              |
| 32:08      | would be.                                                                                                 |
| 32:09      | And so it would just have the title of the episode, oh, it would also ask for the description.            |
| 32:14      | So it would ask for three things whenever you launched it.                                                |
| 32:17      | So it would put the title of the episode, carriage return, the description, carriage                      |
| 32:21      | return, and then the URL to that episode.                                                                 |
| 32:24      | And then it would do the same thing for Twitter, and then it would do the same thing for Reddit.          |
| 32:31      | And Reddit was kind of the same deal where the Reddit app doesn't support anything, but                   |
| 32:35      | you could use query string parameters to fill out certain parts of the form.                              |
| 32:39      | And so there I would only use the title and the URL.                                                      |
| 32:44      | So for people not familiar, what is a query string parameter?                                             |
| 32:47      | I know what it is.                                                                                        |
| 32:48      | You know what it is.                                                                                      |
| 32:49      | But what is it for people who aren't familiar with it?                                                    |
| 32:52      | So in a URL, if you see a question mark, everything after the question mark is usually                    |
| 32:58      | query string parameters.                                                                                  |
| 32:59      | So it's just a name of a set of text that you're about to send in, and then the actual                    |
| 33:07      | set of text.                                                                                              |
| 33:08      | So in my case, for, it's hard to read the actual shortcut I have here, but it would,                      |
| 33:15      | for like Mastadon, maybe it would be like, you know, mastadon.com/post?title=text               |
| 33:21      | and then you'd put the actual text of the post that you'd                      |
| 33:27      | want in there.                                                                                            |
| 33:28      | So something like that.                                                                                   |
| 33:29      | And then for Reddit, it might say URL equals, and you'd put the URL of the link that you                  |
| 33:34      | wanted to post there.                                                                                     |
| 33:36      | Yeah.                                                                                                     |
| 33:37      | That makes sense.                                                                                         |
| 33:38      | And it's one of those things where people might be thinking, oh, I can't automate this.                   |
| 33:41      | But actually, if you have a look at the URL of something, when you go to do it, you may                   |
| 33:45      | actually be able to automate it through query string parameters, because the way that you                 |
| 33:50      | start recognising query string parameters, as you said, Charlie, is with the question                     |
| 33:54      | mark, and then you have, you know, this thing equals, and then whatever the value of this                 |
| 33:58      | thing is, and then ampersand, that and sign, and then your next key equals value, ampersand               |
| 34:05      | key equals value until infinity, or until you reach the limit of the URL length, which                    |
| 34:10      | at least on iOS is pretty long.                                                                           |
| 34:12      | So hopefully we shouldn't ever break anything with that.                                                  |
| 34:16      | Yeah.                                                                                                     |
| 34:17      | And like, that was exactly how I was doing it was by looking at how they worked in the                    |
| 34:21      | real world.                                                                                               |
| 34:22      | But that's also what made the shortcuts that I made kind of brittle, because those weren't,               |
| 34:26      | you know, officially technically supported APIs that, you know, Reddit or whoever was                     |
| 34:32      | promising was going to keep working.                                                                      |
| 34:33      | And so if they would change how their URLs worked a little bit, it would just like break                  |
| 34:38      | my stuff.                                                                                                 |
| 34:39      | And so I was kind of always putting out fires trying to keep that going.                                  |
| 34:43      | And now with my new podcast, I don't have nearly as many social networks I'm trying                       |
| 34:47      | to keep up with.                                                                                          |
| 34:48      | So, so far, I haven't automated that very well.                                                           |
| 34:52      | Well, you have, because you automated it by simplifying it, which is not necessarily                      |
| 34:56      | the automation solution that people are looking for, but it is a valid one.                               |
| 35:00      | You know, I was thinking about [[Federico Viticci\|Federico's]] screen app automation, you know, where he                       |
| 35:08      | applies the frame of your iOS device to your Apple frames, Apple frames, I'll put a link                  |
| 35:13      | in the show notes to this one.                                                                            |
| 35:15      | And you had mentioned that earlier.                                                                       |
| 35:16      | And one of the things that that shortcut demonstrates, which I think is real powerful                     |
| 35:22      | once you understand it is base 64 encoding and decoding.                                                  |
| 35:26      | And the whole trick with that shortcut is he has the frames already, you know, Apple                      |
| 35:32      | has these images on their developer website.                                                              |
| 35:35      | And he's just encoded them into the shortcut.                                                             |
| 35:38      | And that's what base 64 allows you to do.                                                                 |
| 35:40      | I do a similar thing with watermarking when I send a PDF to a client.                                     |
| 35:45      | I have a draft stamp that is a watermark that gets applied and it's a base 64 encoding.                   |
| 35:52      | We've talked on the show in the past about having, you know, applications to store data                   |
| 35:57      | or global variables, but you can also just hard code things like graphic images into                      |
| 36:02      | your shortcut.                                                                                            |
| 36:03      | I have a shortcut that I use when I'm posting over at the suite setup where most of the                   |
| 36:09      | images.                                                                                                   |
| 36:10      | So if you take a screenshot of an iPhone, it's really tall and skinny.                                    |
| 36:12      | If you throw that in WordPress, then that image becomes the width of your text in WordPress.              |
| 36:18      | So you're there reading and there's like giant iPhone screen fully by more text and it looks              |
| 36:23      | a little bit silly.                                                                                       |
| 36:24      | So to get around this, you can overlay the iPhone on a transparent background.                            |
| 36:28      | And so I just got a transparent PNG file and I made this in pixel meter on my iPhone and                  |
| 36:34      | I just exported it and then I used another shortcut.                                                      |
| 36:36      | I can include that shortcut in the show notes actually where you can select an image and                  |
| 36:40      | then base 64 encode it and put it on your clipboard.                                                      |
| 36:44      | And this allows you to then, you know, paste that into another shortcut.                                  |
| 36:48      | And so then I use the overlay image in my suite setup shortcut to, to overlay the image into              |
| 36:54      | the middle so that my iPhone image is not huge giant iPhone in the middle of an article.                  |
| 36:59      | It's, you know, iPhone of a reasonable size in the middle of an article.                                  |
| 37:02      | Oh my goodness.                                                                                           |
| 37:04      | I'm definitely stealing that from you.                                                                    |
| 37:06      | If you look at my personal blog with my posts for, you know, updates, you will see many                   |
| 37:12      | a giant iPhone image because of that exact problem.                                                       |
| 37:17      | It can be quite a tricky problem to solve.                                                                |
| 37:19      | And so this is a nice way of doing it.                                                                    |
| 37:21      | The base 64 stuff though is something that I think people who have only made simple shortcuts             |
| 37:26      | may feel intimidated by, but it's really not that difficult.                                              |
| 37:32      | I've got videos on it in the shortcuts field guide.                                                       |
| 37:35      | You know, I'm going to go ahead and I'll publish one of them into YouTube and put it into the             |
| 37:41      | show notes for the show.                                                                                  |
| 37:42      | So if you didn't get the field guide, you can still see it, but really there's a, it's                    |
| 37:46      | a very simple procedure, but you can embed graphics into your shortcuts and suddenly                      |
| 37:52      | that opens up a whole world for you.                                                                      |
| 37:55      | So you've got a, so it sounds like me, like you're using shortcuts quite a bit.                           |
| 37:59      | How many shortcuts do you have?                                                                           |
| 38:01      | Um, well, it's, it's really hard to count because it's a gigantic list.                                   |
| 38:05      | You can use a shortcut to count it.                                                                       |
| 38:08      | Well, so, but here's the problem is probably half of them are a noise tester, start river,                |
| 38:16      | make it rain tests, start frogs.                                                                          |
| 38:18      | Like I have so many tests because, you know, I'm trying to build an app that heavily uses                 |
| 38:23      | shortcuts.                                                                                                |
| 38:24      | And so I have a whole bunch of shortcuts that are literally, uh, tests.                                   |
| 38:27      | Oh, here's one that might be cool for other developers.                                                   |
| 38:30      | There's a shortcut you can make that literally does nothing but show a notification.                      |
| 38:35      | And that's actually surprisingly like, uh, useful for just popping a notification and                     |
| 38:41      | seeing how notifications behave generally.                                                                |
| 38:44      | It's weird.                                                                                               |
| 38:45      | I know that's really eclectic and, uh, I can like share exactly how that's set up with                    |
| 38:50      | you guys after this, but yeah, that's an interesting one.                                                 |
| 38:54      | That sounds very useful.                                                                                  |
| 38:55      | That's something I've actually been trying to work on for something else recently, you                    |
| 38:58      | know, and trying to get a notification show up when you needed to show up is one of the                   |
| 39:02      | trickiest things that you can, you can work on, say, okay, but now I have to click this                   |
| 39:07      | over here and I have a five minute recording on my iPhone where I was waiting for five                    |
| 39:12      | minutes for the notification to show up because it took me five minutes to trigger it.                    |
| 39:16      | Oh, I, you know what, I just realised that was using toolbox pro.                                         |
| 39:19      | So, uh, you had on, uh, somewhat recently.                                                                |
| 39:22      | So I'm not sure if you can do that without a toolbox pro or if that's in the free mode                    |
| 39:25      | or not.                                                                                                   |
| 39:26      | But if not, you should check out toolbox pro because it is great.                                         |
| 39:29      | If you're listening to the automators, you probably have toolbox pro installed.                           |
| 39:33      | I think the diagram is very close to a circle, the, um, the, now with all those shortcuts,                |
| 39:42      | you know, one of the things that Rose and I has been mowing is organisation.                              |
| 39:45      | How are you organising all of them?                                                                       |
| 39:49      | Very poorly.                                                                                              |
| 39:50      | Basically, there's the stuff at the very top, which is the ones I use, uh, from the widget                |
| 39:55      | frequently.                                                                                               |
| 39:56      | And then there's the ones at the very bottom, which are the ones that I'm currently building.             |
| 40:00      | And everything in between is a gigantic list of unorganised mess.                                         |
| 40:03      | Uh, there's probably ones that I've forgotten or even there.                                              |
| 40:07      | Yeah.                                                                                                     |
| 40:08      | Yeah.                                                                                                     |
| 40:09      | It's like, you need to do a shortcut audit.                                                               |
| 40:10      | I get it.                                                                                                 |
| 40:11      | Yeah.                                                                                                     |
| 40:12      | I realised the other day I was using two different shades of gray for one of my categories                |
| 40:16      | and it just made me so mad.                                                                               |
| 40:18      | Oh no.                                                                                                    |
| 40:19      | And I saw it sat there like an idiot for like 15 minutes and fixed from a, you know, a                    |
| 40:26      | light shade of gray to a darker shade of gray.                                                            |
| 40:28      | And I thought, this is automation.                                                                        |
| 40:29      | This is saving time in my life.                                                                           |
| 40:31      | Right.                                                                                                    |
| 40:32      | Yes, David, it's saving time in your life, of course.                                                     |
| 40:38      | We're pleased to have Pingdom as a sponsor from SolarWinds.                                               |
| 40:41      | Today's internet users expect a fast web experience.                                                      |
| 40:45      | No matter how good your content or how effective your marketing, they'll most likely bounce               |
| 40:49      | if your website is loading too slow.                                                                      |
| 40:52      | With real user monitoring from Pingdom, you can discover how website performance issues                   |
| 40:57      | affect your visitor's experience so you can take action before your business is impacted.                 |
| 41:03      | How your visitor's experience or website differs depending on the browser, device and platform            |
| 41:08      | they use.                                                                                                 |
| 41:09      | So you want to identify how visitors are experiencing your website so you can make informed optimisations |
| 41:16      | and deliver a great performance to those who matter most.                                                 |
| 41:20      | Real user monitoring is an event based solution.                                                          |
| 41:22      | So it's built for scalability, meaning you can monitor millions of page views without                     |
| 41:27      | compromising any of your historical data or breaking the bank in the process.                             |
| 41:33      | Get live visitor insights today with real user monitoring from Pingdom.                                   |
| 41:37      | Go to pingdom.com/relay FM right now for a 14 day free trial with no credit card                    |
| 41:44      | required.                                                                                                 |
| 41:45      | Then when you sign up, use the code automators, A U T O M A T O R S at checkout to get an awesome         |
| 41:51      | 30% off your first invoice.                                                                               |
| 41:54      | Once again, that's pingdom.com/relay FM with the code automators to get 30% off                     |
| 41:59      | and thank you to Pingdom from SolarWinds for the support of the automators and all of relay               |
| 42:04      | FM Charlie.                                                                                               |
| 42:07      | So you have you've got this app and you went all in with automation on it and something                   |
| 42:13      | that one of the reasons Rose and I want to have you on us because we want every developer                 |
| 42:17      | out there to copy what you did to, to take their app and figure out how to make it easier                 |
| 42:21      | for automators.                                                                                           |
| 42:23      | But we haven't had a chance to talk to too many app developers that have implemented                      |
| 42:27      | it to the degree you have.                                                                                |
| 42:29      | How difficult was that and what was your experience as a developer adding shortcut support?               |
| 42:35      | So adding it to the initial app, which originally was targeting iOS 12 because it came out before         |
| 42:41      | the official iOS 13 release, honestly, it was super easy.                                                 |
| 42:46      | And then the unexpected benefits were really cool too.                                                    |
| 42:49      | So like, I didn't initially plan on adding handoff support, but because I use some of                     |
| 42:56      | the APIs for the shortcuts, all of a sudden, it just worked and like, I didn't, this maybe                |
| 43:03      | is a showing how little I know, but like, I didn't realise I was adding handoff support                   |
| 43:07      | until I opened up my iPad to test something and I saw the icon sitting down there and                     |
| 43:11      | the handoff section.                                                                                      |
| 43:12      | And I was like, what?                                                                                     |
| 43:13      | I clicked on it and it, sure enough, just opened up the same app that I had running                       |
| 43:17      | on my phone and popped it over to the iPad.                                                               |
| 43:19      | Oops, I added handover support.                                                                           |
| 43:21      | Well, that sounds like a fun benefit to have accidentally included.                                       |
| 43:26      | Yeah.                                                                                                     |
| 43:27      | And like the same thing goes for the new like recommendations from Siri.                                  |
| 43:33      | So like, and this one I did know because I read the documentation on, but like, there's                   |
| 43:39      | a whole bunch of things that you get for free by like, hooking into some of these back end                |
| 43:42      | things that, that Apple provides and shortcuts just happens to be a way to like, hit a lot                |
| 43:50      | of those different little APIs.                                                                           |
| 43:52      | And so the benefits were huge.                                                                            |
| 43:55      | Where the pain started coming in was when after I released and I immediately shifted gears                |
| 43:59      | towards adding support for the new iOS 13 shortcut stuff, like parameters and everything.                 |
| 44:05      | That's where everybody probably knows by now.                                                             |
| 44:08      | iOS 13's release was just generally kind of a rough release, but that was especially so                   |
| 44:13      | for shortcuts it felt like.                                                                               |
| 44:15      | And so I spent a lot of time sort of fighting that.                                                       |
| 44:18      | But what I understand is it's in a lot better place now than it was then.                                 |
| 44:22      | And how much do you think your users are actually using all of this shortcut support?                     |
| 44:26      | Because of course, you know, you have the ability to, for example, start a noise and                      |
| 44:31      | play it for X period of time or, you know, for a few other things in there.                               |
| 44:35      | But you know, you've put in all this work.                                                                |
| 44:37      | How much do you think people are actually using it?                                                       |
| 44:39      | Has it paid off for you?                                                                                  |
| 44:41      | I mean, a lot or at least the vocal users a lot.                                                          |
| 44:44      | Half of the emails I get, even if they're like support emails asking for a fix for something              |
| 44:49      | else, they often start with a little paragraph that says, you know, I use this all the time               |
| 44:55      | and I have a shortcut set up for whenever I wake up, I just hit this button and it'll                     |
| 45:00      | kick off, you know, the sound of birds or whatever.                                                       |
| 45:03      | And like very frequently I get anecdotes from people about specifically how they're using                 |
| 45:08      | it with shortcuts.                                                                                        |
| 45:09      | That's almost always what it is.                                                                          |
| 45:11      | I mean, sometimes I get like it's helping my kids sleep and stuff like that.                              |
| 45:13      | But at the very least, the shortcuts users are very vocal, which, you know, for your                      |
| 45:19      | mental health is nice to hear nice things coming from people using it all the time.                       |
| 45:24      | Let's talk for a minute about how shortcuts works with the app because I feel like you                    |
| 45:29      | did just such a great job of making it easy.                                                              |
| 45:32      | You've got a couple shortcuts, actions available, specific to [[Dark Noise]], and from it you can             |
| 45:38      | select a sound and just drop it into any shortcut and really that's all there is to it.                   |
| 45:43      | Yeah, I think where it gets complicated is with if you want to run it in the background                   |
| 45:49      | or run it through your HomePod.                                                                           |
| 45:52      | So because of the way that they added parameterised shortcuts support in iOS 13, you can't run            |
| 46:01      | a parameterised shortcut in the background.                                                               |
| 46:02      | It has to actually open up the app or at least for stuff that's playing audio like mine is.               |
| 46:08      | And so there's sort of a weird thing where if you use the very simple shortcuts where                     |
| 46:14      | it just says play parameter and then you can also play parameter for and then you can set                 |
| 46:21      | a duration, those are using sort of the simplified version of shortcuts where it'll actually              |
| 46:27      | just open up the app, which for most people is totally fine.                                              |
| 46:31      | But a lot of people want to be able to just hit the button on their home screen or whatever               |
| 46:35      | and it just start playing without them having to actually pop the app open.                               |
| 46:40      | And Apple did give us the ability to support that, but it has to, it's very sort of limited               |
| 46:44      | on how you can do that.                                                                                   |
| 46:46      | And so if you look through the list, and I'm going to try and keep my phone away so it                    |
| 46:51      | doesn't buzz.                                                                                             |
| 46:53      | If you look through the list of actions that [[Dark Noise]] supplies, you'll see that some                    |
| 46:59      | of them start with the word play and some of them start with the word start.                              |
| 47:04      | And the ones that start with the word play are the, you have to do that if you're using                   |
| 47:07      | Apple's media intent, which means that those can run in the background, but they can't                    |
| 47:16      | use parameters.                                                                                           |
| 47:17      | So it's unfortunate that I have to make this sort of extra complicated, but I do at least                 |
| 47:24      | have the ability to play some of them totally in the background.                                          |
| 47:28      | I think that's one of the things that can make implementing shortcuts perhaps seem a                      |
| 47:33      | little more difficult than it is, because I know we've seen this recently with OmniFocus                  |
| 47:37      | adding its own shortcuts.                                                                                 |
| 47:38      | You now have two OmniFocus shortcuts, one called add Taskpaper and one called add Taskpaper             |
| 47:44      | to OmniFocus.                                                                                             |
| 47:45      | The latter is maintained by the shortcuts team and the former is maintained by the Omni                   |
| 47:49      | group.                                                                                                    |
| 47:50      | And differentiating between those is a bit tricky, but in your case, you are the one                      |
| 47:55      | providing these two different ones, but there are different purposes behind them.                         |
| 47:59      | And that's something that can be a little tricky.                                                         |
| 48:03      | Can you have any parameters at all in the ones that run in the background?                                |
| 48:06      | Or do you have to put them in the foreground if there are parameters?                                     |
| 48:11      | Not currently.                                                                                            |
| 48:12      | And I should say, in the background is maybe a misnomer.                                                  |
| 48:16      | I believe that you can have ones that run in the background with parameters, but they                     |
| 48:20      | can't be long tasks running in the background, which obviously is important for playing on                |
| 48:26      | you.                                                                                                      |
| 48:27      | So yeah, hopefully that's a thing that sort of irons itself out over time, but just if                    |
| 48:32      | anybody is looking at those and they're confused why there's those two sets in there, that's              |
| 48:35      | why.                                                                                                      |
| 48:36      | Yeah.                                                                                                     |
| 48:37      | So if you can start with a specific duration or start with a specific stop time, that is                  |
| 48:43      | one set versus all the play options you have, like play thunderstorm.                                     |
| 48:48      | Exactly.                                                                                                  |
| 48:49      | But like, for example, if you want to play on your HomePod, if you want that sort of                     |
| 48:52      | native ask your HomePod to play a shortcut, it has to be using that sort of play version                 |
| 49:00      | that can run in the background.                                                                           |
| 49:02      | But what a lot of enterprising users have already figured out is there are shortcuts                      |
| 49:06      | for changing your [[AirPlay]] settings.                                                                       |
| 49:10      | So you can just build a shortcut that sets your [[AirPlay]] settings to point to your home                    |
| 49:14      | pod or to a HomePod group.                                                                               |
| 49:16      | And then you can call play, the parameterised version of play.                                            |
| 49:20      | So even though it has to open the app, it's going to push it over to the HomePod still.                  |
| 49:25      | Can you use the, I'm unfortunately without my HomePods at the moment, I'm traveling.                     |
| 49:30      | But can you use the handoff with [[Dark Noise]]?                                                              |
| 49:34      | So there are two different playback actions inside of shortcuts.                                          |
| 49:39      | There's one which says, set the playback of your device, set your playback destination,                   |
| 49:44      | sorry.                                                                                                    |
| 49:45      | And that you can specify, you know, like an Apple TV or a HomePod.                                       |
| 49:49      | And that's what I mostly use, but you can also hand off the playback to be completely                     |
| 49:53      | independent.                                                                                              |
| 49:54      | Can you do that with [[Dark Noise]] with that work?                                                           |
| 49:56      | Or because you can't install [[Dark Noise]] in a HomePod, does it get confused and just                      |
| 50:00      | sort of look at you and go, mm-hmm, as HomePods occasionally do.                                         |
| 50:03      | So you can't, it has to be coming through the phone, which I think is the case for anything               |
| 50:09      | third party at the moment.                                                                                |
| 50:10      | Like I still can't even play like [[Spotify]] through my HomePod unless it's coming through                  |
| 50:15      | my phone or my Apple TV.                                                                                  |
| 50:17      | Yeah.                                                                                                     |
| 50:18      | Which is unfortunate.                                                                                     |
| 50:19      | Will there be [[Dark Noise]] for the Apple TV though?                                                         |
| 50:22      | That's a question.                                                                                        |
| 50:23      | It's definitely on my list of things that I would like to add, but I'm trying to get                      |
| 50:26      | the iOS app fully featured first.                                                                         |
| 50:29      | I think that's a fair answer.                                                                             |
| 50:32      | Yeah.                                                                                                     |
| 50:33      | I really do like the, you know, getting back to the application as we talked about at the                 |
| 50:38      | beginning of the show.                                                                                    |
| 50:39      | One of the things I like about it is kind of the opinion of it.                                           |
| 50:41      | I like that it's got a definite design, but it is changeable.                                             |
| 50:45      | You can change the UI colours.                                                                             |
| 50:47      | You can even change the icon if you want.                                                                 |
| 50:50      | And it has a very simple list you can choose from to pick the sounds you want.                            |
| 50:56      | You know, how did you pick all these sounds?                                                              |
| 50:58      | You have so many different sounds available.                                                              |
| 51:00      | Um, I mean, two things.                                                                                   |
| 51:03      | So one was while I was deep into the depths of making this, I happened to go on a vacation                |
| 51:08      | with my wife to Seattle.                                                                                  |
| 51:10      | And so I brought along my little field recorder and I recorded a bunch of sounds.                         |
| 51:15      | So like the airplane interior and waterfall Creek, a lot of those are just, uh, I happened                |
| 51:21      | to be walking by those and got the recording.                                                             |
| 51:23      | I'm like, Oh, this will be really cool.                                                                   |
| 51:25      | So a big portion of them are that.                                                                        |
| 51:27      | And then, uh, and then there was the ones that are like obvious, like white noise, brown                  |
| 51:30      | noise, pink noise.                                                                                        |
| 51:32      | Um, but then the more weird ones, a lot of those came from, uh, I opened up the beta                      |
| 51:37      | pretty early and a very consistent thing whenever somebody joins the beta is that they, they              |
| 51:43      | would ask for some weird particular sound.                                                                |
| 51:46      | And it always sounded weird at first until you heard their explanation and then it made                   |
| 51:49      | perfect sense, uh, like your example of wanting to use thunderstorms, uh, to sort of train                |
| 51:55      | your dog to be used to thunderstorms.                                                                     |
| 51:57      | I got the same thing for lawnmowers with babies or snoring with, uh, if your partner is like              |
| 52:03      | going on a business trip or something, um, people like to replicate sounds that they're                   |
| 52:08      | comfortable with.                                                                                         |
| 52:09      | And those sounds are often very, very particular.                                                         |
| 52:12      | And so, uh, I have a gigantic list of things that I want to add, but I have to be careful                 |
| 52:16      | because I don't want to let the app get too, too bloated.                                                 |
| 52:19      | Yeah.                                                                                                     |
| 52:21      | Always a challenge.                                                                                       |
| 52:22      | And there's, I think 42 sounds in there at the moment.                                                    |
| 52:25      | How long is each sound on average?                                                                        |
| 52:27      | It's very varying.                                                                                        |
| 52:28      | Uh, that's a weird sentence.                                                                              |
| 52:30      | So like white noise, brown noise, uh, even the rain ones, those are often pretty short.                   |
| 52:35      | Um, I tried to get away with as short as I thought I could get away with where you wouldn't               |
| 52:39      | feel the loop.                                                                                            |
| 52:41      | So the thunderstorm one is actually pretty long because there's big gaps between the                      |
| 52:46      | thunder and I really didn't want you to like feel that, that loop.                                        |
| 52:49      | Same with like the coffee shop or the city sounds where you can hear, uh, not necessarily                 |
| 52:54      | particular voices, like the words, but you can hear, you know, sounds of clanking, uh,                    |
| 53:00      | forks or coffee mugs or whatever.                                                                         |
| 53:02      | And I didn't want anything to stand out so much that you would really notice the loop.                    |
| 53:06      | So those are really long.                                                                                 |
| 53:07      | So it's really dependent on the sound.                                                                    |
| 53:09      | I remember years ago, there was a radio station in the UK that I think it just used to play               |
| 53:14      | like the countryside sounds.                                                                              |
| 53:16      | Um, but if you listened to it for a while, then you would realise that like every 45 minutes              |
| 53:20      | the tractor went past and it was the same tractor every time because then after that there'd              |
| 53:24      | be a certain tweet of a bird and the wind blowing through the trees.                                      |
| 53:27      | And it's like, okay, you know, like you could listen to it for like a day or so.                          |
| 53:31      | And then it would start to drive you up the wall very, very quickly.                                      |
| 53:34      | Well, well, I don't experience that with [[Dark Noise]] and I, I was telling you before we                    |
| 53:38      | even started recording, I probably play this app 20 hours a week because I quite often                    |
| 53:42      | when I want to focus in on something, I'll put the, and it's the thunderstorm.                            |
| 53:47      | I just play that thunderstorm always and I don't notice it.                                               |
| 53:50      | Whereas in some apps and recordings in the past, they were short enough that I actually                   |
| 53:55      | started to know like there's three lightning strikes followed by one, you know, it's like                 |
| 54:01      | you start to know what's going to happen and that hasn't happened to me with your app.                    |
| 54:05      | So, so good on you.                                                                                       |
| 54:06      | And one of the, one of the interesting things too is the new mix feature where you can mix                |
| 54:11      | multiple noises together that I'm working on that's in beta right now.                                    |
| 54:15      | I play those sounds at a random time.                                                                     |
| 54:19      | They start at a random time no matter what.                                                               |
| 54:21      | So once that's out, you could like mix two thunderstorm sounds together.                                  |
| 54:26      | And once you play them, they'll sort of interweave at random times necessarily.                           |
| 54:32      | So that you would get a variance of sound pretty much all the time.                                       |
| 54:37      | Now is that an open beta?                                                                                 |
| 54:40      | It's an open beta as of yesterday.                                                                        |
| 54:41      | All right.                                                                                                |
| 54:42      | Send me the link.                                                                                         |
| 54:43      | I'll put it in the show notes and I will be signing up.                                                   |
| 54:45      | Awesome.                                                                                                  |
| 54:46      | Yeah.                                                                                                     |
| 54:47      | I'm already on the beta.                                                                                  |
| 54:48      | I've been playing with this feature.                                                                      |
| 54:49      | I did not know that little piece of background information and I am now so excited.                       |
| 54:53      | And I didn't realise either.                                                                              |
| 54:55      | So you're saying that you can like blend two of the same sound.                                           |
| 55:00      | You can add as many of the same sounds as you want.                                                       |
| 55:02      | I probably should have a limit on that.                                                                   |
| 55:04      | Okay.                                                                                                     |
| 55:05      | So I can't just do like river and waterfall.                                                              |
| 55:08      | I can do waterfall and waterfall.                                                                         |
| 55:09      | This is good for us.                                                                                      |
| 55:11      | Yes.                                                                                                      |
| 55:12      | Yeah.                                                                                                     |
| 55:13      | So that feature whenever I first got it built was I made a mix that was just like 40 of                   |
| 55:20      | the keyboard sounds all together.                                                                         |
| 55:22      | And then you can pick, you can use animated GIFs or GIFs, however you want to say it,                     |
| 55:28      | as your icon.                                                                                             |
| 55:29      | Or you can, you know, you can build, I have a little icon builder in there too.                           |
| 55:32      | But I used the little animated GIF of Kermit the Frog where he's like slapping on the                     |
| 55:37      | typewriter.                                                                                               |
| 55:38      | Yeah.                                                                                                     |
| 55:39      | Like 40 typewriter keyboards all running at the same time with that animation.                            |
| 55:43      | Nice.                                                                                                     |
| 55:44      | Kermit the Frog.                                                                                          |
| 55:46      | Yes.                                                                                                      |
| 55:47      | What are some of the interesting automation uses with [[Dark Noise]] that you've heard from                   |
| 55:52      | customers?                                                                                                |
| 55:53      | Well, okay.                                                                                               |
| 55:54      | So one that's not, well, it's the most important customer, which is my wife.                              |
| 55:58      | She is very particular about having the exact same sound on whenever she sleeps and at the                |
| 56:03      | exact same volume.                                                                                        |
| 56:05      | And she got a little annoyed at me because I added the volume slider to the home screen                   |
| 56:11      | because for me personally, that was really useful.                                                        |
| 56:13      | But for her, it was annoying because it's harder to get the sound to the exact right                      |
| 56:17      | level you want when you don't see the little bars, you know, the standard UI bars that                    |
| 56:21      | don't show whenever the slider is on the screen.                                                          |
| 56:24      | Yeah.                                                                                                     |
| 56:25      | And so for her, I built a shortcut that you, it'll just set the volume automatically to                   |
| 56:32      | a specific volume right before it starts playing.                                                         |
| 56:36      | And that's turned into big enough of a thing that people seem to like that I'm actually                   |
| 56:40      | building that into the app now.                                                                           |
| 56:42      | Okay.                                                                                                     |
| 56:43      | But that's one of those examples.                                                                         |
| 56:44      | And there's a bunch of these that like people are sort of filling out missing features that               |
| 56:50      | I have using shortcuts.                                                                                   |
| 56:52      | So the other one is like alarms.                                                                          |
| 56:54      | I don't have the ability because iOS doesn't give us, or Apple doesn't give us one to set                 |
| 57:00      | alarms to where it'll play a sound automatically at a certain time.                                       |
| 57:04      | And so you can use those new automations, automations, that's what they're called in                      |
| 57:08      | shortcuts to, you can't have it start the sound automatically, but you could have it                      |
| 57:12      | pop a notification that if you tap it, it'll start the sound.                                             |
| 57:15      | And a lot of people do that for their like wake up routines.                                              |
| 57:19      | So it'll, it'll automatically start a certain type of sound at a certain type of day, along               |
| 57:24      | with maybe mixing in like NPR or something like that.                                                     |
| 57:29      | And it sort of like gets them going for the day that way.                                                 |
| 57:32      | Yeah.                                                                                                     |
| 57:33      | I hate so much that you have to tap a notification though.                                                |
| 57:36      | It's like, come on, Apple.                                                                                |
| 57:38      | Well if you use the, when the alarm stops feature, then that's an automation where you don't              |
| 57:43      | have to confirm it because stopping the alarm is essentially you confirming it.                           |
| 57:47      | So it does just run if you turn that, if you turn the confirmation off at any rate.                       |
| 57:50      | Right.                                                                                                    |
| 57:51      | Yeah.                                                                                                     |
| 57:52      | I think that's what most people are doing.                                                                |
| 57:53      | Yeah.                                                                                                     |
| 57:54      | I'm using the same thing as your wife actually, where I have, it said the playback to a specific          |
| 57:59      | volume at night.                                                                                          |
| 58:01      | And then, and then it plays the, I think it's the rain sound.                                             |
| 58:05      | I can't remember now because it just happens and it turns off after half an hour.                         |
| 58:09      | And that is great for me because I really like it and it drowns out all sorts of weird                    |
| 58:14      | sounds.                                                                                                   |
| 58:15      | And especially at the moment, we've got a lot of people who are staying at home more.                     |
| 58:18      | So they're staying up later and later and later watching television.                                      |
| 58:21      | And it's nice to just drown that out.                                                                     |
| 58:23      | I use the set destination.                                                                                |
| 58:26      | So I send it to the HomePods to the one you were talking about earlier.                                  |
| 58:28      | That's something that I use in a lot of my automations with the [[Dark Noise]].                               |
| 58:33      | What was the biggest challenge for you in terms of incorporating automation into dark                     |
| 58:36      | noise?                                                                                                    |
| 58:37      | I mean, definitely the iOS 13 stuff.                                                                      |
| 58:41      | Yeah.                                                                                                     |
| 58:42      | Specifically, one of the things that they changed was, for some reason, so the way that my app            |
| 58:47      | works, most shortcuts that you see are automatically registered as shortcuts for the app.                 |
| 58:54      | So like Apple Notes has a create note, find note, all that kind of stuff, but then there's                |
| 59:01      | also the shortcuts that you donate as you use the app.                                                    |
| 59:04      | So like in Apple Notes, if you open up a certain note, you can donate that.                               |
| 59:11      | Open this particular note.                                                                                |
| 59:13      | So that's how I'm setting up the shortcuts for each of the sounds.                                        |
| 59:20      | So whenever you open up the app, it goes through all the current sounds, which this is important          |
| 59:25      | once mixes and user created sounds are in there.                                                          |
| 59:29      | When you open up the app, it donates all the sounds all at once.                                          |
| 59:32      | And that's how you get them in the app.                                                                   |
| 59:34      | So with iOS 13, seemingly with no documentation, although I would be very happy to be proven              |
| 59:40      | wrong on this, but I haven't been able to find it, they just dropped that to only allow                   |
| 59:44      | you to donate 10.                                                                                         |
| 59:47      | And it's not the last 10 that you donated, it's the first 10 that you donated.                            |
| 59:50      | And I don't really know why, but I spent a couple of weeks trying to figure out what                      |
| 59:54      | it was I was doing wrong before somebody from the shortcuts team reached out and said, oh,                |
| 59:59      | actually, no, it's supposed to do that.                                                                   |
| 01:00:02   | And so there was a bunch of things like that with the iOS 13 specifically shortcut support                |
| 01:00:08   | that I just kept running into these brick walls where there was seemingly no answer                       |
| 01:00:14   | for it.                                                                                                   |
| 01:00:15   | And I couldn't find other people who were having the same exact scenario as me.                           |
| 01:00:20   | Because like you said, shortcut support is getting better, but it's certainly not as                      |
| 01:00:25   | ubiquitous as a lot of things.                                                                            |
| 01:00:28   | And so finding people that were also doing audio apps that were also running into this                    |
| 01:00:31   | particular issue was kind of hard to find.                                                                |
| 01:00:34   | Yeah, from iOS 12 to iOS 13, shortcuts kind of underwent a boiling the ocean scenario.                    |
| 01:00:40   | So I don't think they're going to reinvent the app again this year.                                       |
| 01:00:44   | I feel like this is the year the sandpaper comes out and they knock off some of the sharp                 |
| 01:00:48   | edges.                                                                                                    |
| 01:00:49   | At least that's what I really hope.                                                                       |
| 01:00:51   | Yeah, that would definitely be nice.                                                                      |
| 01:00:54   | And because the foundations that they laid are fantastic, I'm really excited about what                   |
| 01:00:58   | they did with iOS 13, especially as a user.                                                               |
| 01:01:01   | But as a developer, it was a little bit painful.                                                          |
| 01:01:03   | Yeah, let me just the idea of building it in.                                                             |
| 01:01:06   | I mean, the problem was always going to be, you know, and this is a drum I bang on the                    |
| 01:01:11   | show frequently, they don't have Apple events on iOS.                                                     |
| 01:01:15   | So there's not an easy, magical way that anybody can tie into anything on the device.                     |
| 01:01:20   | So they had to have the developers create the hooks in their apps.                                        |
| 01:01:24   | And that's what they did last year.                                                                       |
| 01:01:26   | They created a framework for you to do that.                                                              |
| 01:01:28   | But they've got to make it easier.                                                                        |
| 01:01:31   | And I think that's what's going to start happening.                                                       |
| 01:01:33   | I mean, some extent already is happening.                                                                 |
| 01:01:35   | I saw a tweet from the [[Drafts]] app the other day a couple of weeks ago, probably now, where                |
| 01:01:41   | somebody had tweeted at the [[Drafts]] app saying that the home screen on their iPhone showed                 |
| 01:01:47   | the toilet coats when they got to a Starbucks, because apparently, I did not know this.                   |
| 01:01:52   | In the US, there are some places where you need to have like a code that you can type                     |
| 01:01:56   | into the lock on the bathroom to open the bathroom.                                                       |
| 01:01:58   | It's only for customers.                                                                                  |
| 01:02:00   | And people save the code so that they can reuse them, which makes perfect sense to me.                    |
| 01:02:04   | Because if you need a bathroom, you need a bathroom.                                                      |
| 01:02:07   | And so they had this saved in [[Drafts]].                                                                     |
| 01:02:08   | And because [[Drafts]] was donating, not just when they opened it, but where they opened                      |
| 01:02:12   | it, when they got to this place, it automatically said, hey, you usually do this thing in [[Drafts]].         |
| 01:02:17   | So they're definitely getting there with this thing.                                                      |
| 01:02:20   | And if they could add hooks so that when this thing happens, it suggests that you trigger                 |
| 01:02:25   | that that is definitely going to be the next step from taking those actions from inside                   |
| 01:02:32   | of apps and making them available to shortcuts too.                                                       |
| 01:02:34   | Automation, making toilet codes easier for everyone.                                                      |
| 01:02:39   | This is not something I've had any experience with.                                                       |
| 01:02:41   | I wonder if it works on your Apple Watch.                                                                 |
| 01:02:44   | Anyway, something to experiment with if [[WWDC]] ever happens again.                                          |
| 01:02:48   | Oh, it will happen.                                                                                       |
| 01:02:49   | They've announced it.                                                                                     |
| 01:02:51   | It's just not going to happen with us in the same city.                                                   |
| 01:02:53   | Yes, which means I won't have the chance to experience toilet codes in America.                           |
| 01:02:58   | I think in the grand scheme of things, if that's an experience, I can skip them.                          |
| 01:03:03   | That's probably for the best.                                                                             |
| 01:03:04   | It's all right, Rose.                                                                                     |
| 01:03:05   | They're not going anywhere.                                                                               |
| 01:03:06   | Toilet codes will be here whenever you make it back.                                                      |
| 01:03:08   | I'll take you to a Starbucks and show you.                                                                |
| 01:03:11   | Okay.                                                                                                     |
| 01:03:12   | I'm not sure that this is a promise that I want to be fulfilled.                                          |
| 01:03:15   | I'm not sure where this is going, but...                                                                  |
| 01:03:18   | It's okay.                                                                                                |
| 01:03:20   | There'll be thunder sounds in the speaker system.                                                         |
| 01:03:22   | Well, either way, Charlie Chapman is putting shortcuts into his app and he's showing the                  |
| 01:03:29   | way.                                                                                                      |
| 01:03:30   | And I love that this app is so popular and so many people have adopted it.                                |
| 01:03:33   | I love that your customers are using shortcuts because that means that what you did is paying             |
| 01:03:37   | off and I hope other app developers listening will start giving it some thought themselves.               |
| 01:03:42   | Yeah.                                                                                                     |
| 01:03:43   | That has definitely been the thing I've been preaching is, even if it doesn't feel like...                |
| 01:03:49   | It feels like it's like an add-on feature.                                                                |
| 01:03:51   | I think it's an add-on feature that has compounding benefits that you don't really necessarily            |
| 01:03:55   | realise as you're building it, whether it's free Apple support that you get because they                  |
| 01:04:01   | just hook it into other parts of their system or your users being able to build their own                 |
| 01:04:06   | versions of features that you haven't implemented yet.                                                    |
| 01:04:08   | Both of those things have been super beneficial for me.                                                   |
| 01:04:11   | I mean, when all this stuff is put together properly, shortcuts becomes an app development                |
| 01:04:16   | platform for users.                                                                                       |
| 01:04:19   | I want a custom app that when I go into Starbucks to answer my email, play specific music and             |
| 01:04:25   | turns off notifications and sets the screen brightness and does all these things for me.                  |
| 01:04:30   | I can do that so long as the app developers play along.                                                   |
| 01:04:35   | You came to the market with a category of application where there was tons of apps that                   |
| 01:04:39   | make rain sounds, but none of them had thought to take advantage of this stuff.                           |
| 01:04:44   | Because you did it, you gave me more tools in my play box and that's exactly what I want.                 |
| 01:04:51   | Like I said, I was just so pleased when you released this app.                                            |
| 01:04:54   | This is the first time I've ever talked, but I immediately knew this is a guy that                        |
| 01:05:00   | gets it or a gal that gets it.                                                                            |
| 01:05:02   | I didn't know who had made it at that point.                                                              |
| 01:05:04   | As I say often, I love single developer apps where one person is passionate about something.              |
| 01:05:10   | Man, thank you for making this great app for us.                                                          |
| 01:05:14   | Thank you for that.                                                                                       |
| 01:05:15   | That means a lot to hear.                                                                                 |
| 01:05:17   | Thank you for bringing me on the show.                                                                    |
| 01:05:20   | This is my first time on a Relay FM show.                                                                |
| 01:05:22   | That's extraordinarily exciting as somebody who's consumed a lot of these shows, including                |
| 01:05:28   | this one for a long time.                                                                                 |
| 01:05:29   | You can send me your picture and everything I'm going to put you as in the relay system                   |
| 01:05:33   | now.                                                                                                      |
| 01:05:34   | You're in the system.                                                                                     |
| 01:05:35   | Oh, man.                                                                                                  |
| 01:05:36   | When the show goes up, it'll have your picture up there.                                                  |
| 01:05:39   | Where can folks find you, Charlie?                                                                        |
| 01:05:40   | Like Twitter?                                                                                             |
| 01:05:41   | I know you've got a website for your app.                                                                 |
| 01:05:44   | What is it?                                                                                               |
| 01:05:45   | I think darknoise.app.                                                                                    |
| 01:05:46   | Yeah, darknoise.app is my website.                                                                        |
| 01:05:49   | It's a pretty standard website.                                                                           |
| 01:05:51   | I'd say Twitter underscore Chuck E.C. is my Twitter and then they can go to at darknoise.app              |
| 01:05:58   | for the app itself.                                                                                       |
| 01:05:59   | Twitter is definitely my first source of information or first place I put information and then everything |
| 01:06:05   | else follows from there.                                                                                  |
| 01:06:07   | You mentioned your podcast.                                                                               |
| 01:06:08   | Tell us about that.                                                                                       |
| 01:06:09   | Yeah.                                                                                                     |
| 01:06:10   | I started a podcast earlier this year called Launched.                                                    |
| 01:06:13   | It's about anybody who releases any interesting content on the internet and talking to them               |
| 01:06:22   | about their process of launching it and building it.                                                      |
| 01:06:25   | Actually, the last episode that's aired was with Rosemary.                                                |
| 01:06:29   | That was a really great episode, so people should definitely check that out.                              |
| 01:06:32   | Awesome.                                                                                                  |
| 01:06:34   | The app is called [[Dark Noise]].                                                                              |
| 01:06:36   | Get it.                                                                                                   |
| 01:06:37   | If you have any desire to have noise playing in the background, this is the one you want.                 |
| 01:06:43   | I wish you all the luck.                                                                                  |
| 01:06:45   | I know this app has been successful for you and I hope you just keep doing it.                            |
| 01:06:48   | It sounds like you got some nice work going on with beta developments.                                    |
| 01:06:52   | That means you're not done.                                                                               |
| 01:06:55   | Everybody check it out.                                                                                   |
| 01:06:57   | We mentioned it, but the beta right now is public.                                                        |
| 01:07:01   | I opened up the limit to the biggest limit the [[TestFlight]] will let me do because it's                    |
| 01:07:08   | kind of the tiniest thing I could think of that could help people maybe during this time                  |
| 01:07:13   | where everybody's stuck at home.                                                                          |
| 01:07:15   | Even if you're just wanting to use it personally and you have no intention of being a quote               |
| 01:07:20   | tester and sending me bug reports, that is not going to bother me.                                        |
| 01:07:23   | Feel free to download that beta.                                                                          |
| 01:07:25   | I'm going to make sure that that's active throughout this whole thing as it's a pandemic.                 |
| 01:07:29   | I don't know if I don't think I've ever said on any of my podcasts, but I have tinnitus.                  |
| 01:07:34   | I hear ringing in my ears at all times.                                                                   |
| 01:07:37   | Having apps like yours really helps.                                                                      |
| 01:07:40   | I think there's a lot of folks out there.                                                                 |
| 01:07:41   | If you do find yourself working from home, you'd be surprised what a difference it can                    |
| 01:07:45   | make to have just a little bit of noise in the background.                                                |
| 01:07:49   | Definitely.                                                                                               |
| 01:07:50   | All right, gang.                                                                                          |
| 01:07:51   | We are the Automators.                                                                                    |
| 01:07:52   | You can find us over at relay.fm/automators.                                                        |
| 01:07:54   | You can find the forum over at talk.automators.fm.                                                        |
| 01:07:59   | We'll see you in a couple of weeks with a new show.                                                       |
| 01:08:02   | Thank you to our sponsors over at Kensington, TextExpander, and Pingdom.                                |
| 01:08:06   | Until next time, keep automating.                                                                         |
