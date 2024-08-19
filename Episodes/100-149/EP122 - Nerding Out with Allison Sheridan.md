---
status: incomplete
fc-date:
  year: 2023
  month: 2
  day: 25
fc-category: podcast
podcast: Automators
published: 2023-02-25
duration: 4252
formattedduration: 01:10:52
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Allison Sheridan
notetype: episode
showpage: http://relay.fm/automators/122
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators122.mp3
episode: 122
title: "122: Nerding Out with Allison Sheridan"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Allison Sheridan joins us to share her automation workflows. Topics include Keyboard Maestro, Hazel, and more automation tools.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Allison Sheridan]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 122 Discussion](https://talk.automators.fm/t/122-nerding-out-with-allison-sheridan/15327)

# Sponsors
- [[Issuu (Sponsor)|Issuu]] - Get started with Issue today.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.

# Show Notes
- [Podfeet Podcasts](https://www.podfeet.com/blog/)
- [Taming the Terminal - Podfeet Podcasts](https://www.podfeet.com/blog/category/ttt/)
- [Hazel – Noodlesoft – Simply Useful Software](https://www.noodlesoft.com/)
- [Noodlesoft – Noodlesoft – Simply Useful Software](https://www.noodlesoft.com/)
- [Noodlesoft Forums • Index page](https://www.noodlesoft.com/forums/)
- [Programming by Stealth Archives - Podfeet Podcasts](https://www.podfeet.com/blog/category/programming-by-stealth/)
- [Organise your Mac desktop with Stage Manager - Apple Support](https://support.apple.com/guide/mac-help/use-stage-manager-mchl534ba392/mac)
- [Keyboard Maestro 10.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Failure Aborts Macro (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/manual/Menus?macro#Failure_Aborts_Macro)
- [Retrobatch, from Flying Meat](https://flyingmeat.com/retrobatch/)
- [ImageMagick – Convert, Edit, or Compose Digital Images](https://imagemagick.org/index.php)
- [TextExpander, Shortcut to Efficient, Consistent Communication](https://textexpander.com/)
- [Auphonic](https://auphonic.com/)
- [Automating Conversion of Transparent PNGs to Opaque - Podfeet Podcasts](https://www.podfeet.com/blog/2022/10/convert-png-no-alpha/)
- [iOS Today | Apple iOS Podcast | Apps, Tips & News | TWiT](https://twit.tv/shows/ios-today)
- [Find and compare best prepaid eSIM for travelers](https://esimdb.com/)
- [Welcome Automators Listeners!](https://textexpander.com/podcast/automators)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome to The Automators. I'm David Sparks, and joined by your co-host, Rosemary Orchard.              |
| 00:06      | How are you today, Rosemary?                                                                            |
| 00:07      | Oh, I'm excited, David. I mean, I'm always excited to record automators, to be fair.                    |
| 00:11      | But we have a guest on today, and we all love this guest. Some of you know her, some of                 |
| 00:15      | you don't know her. So welcome to the show, Alison Sheridan.                                            |
| 00:18      | Hi, guys. Really fun to catch up with you. It's been a while.                                           |
| 00:21      | Yeah, Alison's one of my favourite nerds. We actually did a buddy trip to Macworld, like                 |
| 00:27      | I don't know how long ago that was. Was it like 12 years ago?                                           |
| 00:30      | 157 years ago. Yeah, it was a long time, but that was fun.                                              |
| 00:34      | I remember you telling me about this crazy new show you were thinking about starting.                   |
| 00:37      | Yeah, Mac Power users, right?                                                                           |
| 00:39      | That's right. That's right.                                                                             |
| 00:40      | Everybody's telling me, don't make another podcast. There's too many.                                   |
| 00:43      | That's what I told you. I said, it's full. There's enough. There's no space.                            |
| 00:47      | Anyway, anyway, Alison is an automator and nerd. There's a lot of cool stuff.                           |
| 00:56      | You've got a couple of different podcasts. Podfeet is the main feed, but you also do                    |
| 01:04      | the stuff with Bart Buschotts, but I guess that's in the main feed, right?                                |
| 01:08      | Well, the website is called podfeet.com, and my identity is Podfeet, but the main show                  |
| 01:12      | is called the Nosillacast, and that's a standalone show that I do mostly solo, but every other          |
| 01:18      | week, Bart Buschotts is on to talk about security, but it's a technology geek podcast with an             |
| 01:23      | ever-so-slight Apple bias, and then the other shows I have is Programming by Stealth with               |
| 01:28      | Bart, and we'll get a little bit into that, but we also did a series called Taming the                  |
| 01:33      | Terminal, which is a real tight 41-episode series to teach you how to use the terminal,                 |
| 01:39      | and then I chitchat across the pond light, which is where I talk to people in tech that                 |
| 01:42      | I think are interesting.                                                                                |
| 01:44      | Yeah, and Alison and I attended [[Sal Soghoian]]. It's an [[AppleScript]] automation summit several                |
| 01:52      | years ago. I mean, you've had your toes in automation for a long time, and I always like                |
| 01:59      | hearing what you have to say, because Alison is like me in the sense that you're not a                  |
| 02:04      | programmer by trade, but you are increasingly becoming a programmer. I know that you're                 |
| 02:09      | doing a lot of programming stuff, but you're finding ways to create automations without                 |
| 02:16      | necessarily having the formal training.                                                                 |
| 02:19      | Yeah, I'm an engineer by trade, and in my master's degree, I took Fortran 4 with Watt                   |
| 02:26      | 5, which has come in on punch cards, and that's come in super handy throughout my life. But             |
| 02:34      | a few years ago, I told Bart right after I retired that I wanted to learn to program,                   |
| 02:38      | and he said, hey, let's do it as a podcast, but it's an audio podcast, which sounds like                |
| 02:45      | it shouldn't work, but he writes these super detailed tutorial show notes. You can read                 |
| 02:49      | the show notes, you can listen to him, you listen to me in the front row going, I don't                 |
| 02:53      | understand, can you back up and explain that again? And we've been going over four years                |
| 02:58      | and worked our way through HTML, CSS, JavaScript, we're doing some shell scripting right now.           |
| 03:05      | We've learned how to wrap our apps up for deployment. We learned all about [[Git]]. It's                    |
| 03:10      | been a lot of fun.                                                                                      |
| 03:13      | And Allison does excellent show notes. And if you listen to the automators, I think that                |
| 03:17      | program with Bart in particular would be a great entry point for you. And you can drive                 |
| 03:22      | it around in the car.                                                                                   |
| 03:23      | The series on [[Git]] is what he does is these little sub-series. So if you just want to                    |
| 03:28      | learn [[Git]], you can start right in that piece. You don't have to start at the beginning with             |
| 03:31      | HTML in order to get the [[Git]] part. So learning about version control was huge. And now I'm              |
| 03:38      | like, I'm using version control on my [[Keyboard Maestro]] macros, which is something I always              |
| 03:42      | wanted. So I've got that in [[Git]]. And it's just a real helpful thing to know.                            |
| 03:46      | Wow, Allison, you've gone down the rabbit hole. If you're using version control and your                |
| 03:50      | [[Keyboard Maestro]] macros, that is my kind of nerd right there.                                           |
| 03:54      | Oh, yeah. Yeah. Like this is where, you know, we know we're going to have fun on this episode,          |
| 03:58      | folks. We always do. But, you know, in particular, somebody mentions, yeah, so I'm putting my           |
| 04:03      | automations in [[Git]] and I'm just like, hi, tell me more, tell me more.                                   |
| 04:08      | We have our tribe, right?                                                                               |
| 04:10      | Yes, exactly. And for those of you going, wait, what, why would I do this? Well, we'll                  |
| 04:14      | have to get to that, won't we?                                                                          |
| 04:16      | And then Allison sent me a note right before I started recording. She's like, Hey, is it                |
| 04:19      | okay if I derail the beginning of the conversation? And I'm like, that is so on brand, Allison          |
| 04:24      | Sheridan. So what are you going to derail me on? Let's hear it.                                         |
| 04:30      | This is the audience that will most appreciate this. So a long time ago, I was talking to               |
| 04:35      | Rosemary and I was explaining that I have a problem adding the number one to my show,                   |
| 04:41      | to my episode number. So if I've done episode 746, I am incapable of saying that the next               |
| 04:47      | one is 747. I would, I would say like one out of 10 times, I get the number wrong. And                  |
| 04:52      | that seemed really, really stupid. But what are you going to do? So Rosemary wrote this                 |
| 04:56      | elaborate script. And I don't even know where it lives or how she did it. But I can tell                |
| 05:01      | ask Siri, what's the next chit chat across the pond? What's the next programming by stealth?            |
| 05:06      | What's, you know, I can ask it. And, and it's automated and it's great. And I, and I've                 |
| 05:10      | always felt really stupid that she had to write this for me, but it's a perfect solution.               |
| 05:14      | So get this, I'm on [[Clockwise]]. And that story comes up and [[Micah Sargent\|Micah]] starts laughing hysterically,          |
| 05:23      | because he had, I wait, I forget who wrote it for who, but it was [[Jason Snell]] or him,                   |
| 05:28      | I forget one of them couldn't add by the number one either. And the other one wrote the exact           |
| 05:32      | same script for them. Yeah, yeah. So what I did for you, Alison, because you had a number               |
| 05:38      | of different shows in there is I actually got the RSS feeds for each show and got the                   |
| 05:42      | latest episode of the show that was published for you. So, you know, if you've got a couple             |
| 05:46      | of episodes that you've like prerecorded and not released, then it won't work perfectly                 |
| 05:49      | for that, but it's using the RSS for that. I do something.                                              |
| 05:54      | Shortcuts? Yeah, it's all in shortcuts. But what I do for automators, because I also can't              |
| 06:00      | add by one, is I have a keyboard, I have a [[Keyboard Maestro]] macro, which pops up when                   |
| 06:06      | I start recording. And, or actually, when I say that I'm about to start recording automators,           |
| 06:12      | it'll pop up and it automatically adds one to the episode number. So I can just click                   |
| 06:16      | okay. And it stores that macro, it stores that. And then it also like tidies the podcast                |
| 06:21      | up the recordings into the folder, like with that episode number when I'm done. So yeah,                |
| 06:26      | excellent.                                                                                              |
| 06:27      | Excellent.                                                                                              |
| 06:28      | There's a lot of ways to kill that problem. But why can't we add by one? That's the real                |
| 06:32      | question. It shouldn't be that hard, right?                                                             |
| 06:35      | Yeah, but I also typed 22 today, because we're recording episode 22 of automators, you know,            |
| 06:41      | we've lost 100 episodes.                                                                                |
| 06:42      | Oh, my mind is, 2020, and then the number. So this is 2023. Sorry, 2020, 23 is what I                   |
| 06:49      | keep saying. So yeah, what are you going to do?                                                         |
| 06:52      | Yeah, yeah.                                                                                             |
| 06:53      | Okay, just to be clear, we're in the year 2023, not 2020, right? What are you talking                   |
| 06:59      | about?                                                                                                  |
| 07:00      | I mean, the 23, you say all six numbers, because it's 2020, and then it's 23. It doesn't make           |
| 07:05      | any sense.                                                                                              |
| 07:06      | Yeah, it doesn't. But what's 2020?                                                                      |
| 07:09      | Well, we're in the 2020s now.                                                                           |
| 07:13      | I think we actually reported that episode of chitchat across the pond in 2020. I think                  |
| 07:18      | that might be what's...                                                                                 |
| 07:19      | I thought you were talking about currently. I'm like, Allison, you do know it's 2023,                   |
| 07:23      | right?                                                                                                  |
| 07:24      | Anyway.                                                                                                 |
| 07:25      | All right.                                                                                              |
| 07:26      | Excellent. Well, you've successfully derailed the show, which is good, because you've only              |
| 07:32      | given us two pages of show notes, three pages, I apologise.                                             |
| 07:35      | Yes, you got a question.                                                                                |
| 07:37      | Yeah, I mean, well, we kind of just wanted to have some content, and the good news is                   |
| 07:42      | we're going to get you back for like 16 episodes to go through this, because we're going to             |
| 07:45      | get side tracks.                                                                                        |
| 07:46      | Allison's Sheridan series.                                                                              |
| 07:48      | That's fine with me.                                                                                    |
| 07:49      | Part one.                                                                                               |
| 07:50      | But yeah, so I was wondering, Allison, do you want to tell us how you got started with                  |
| 07:54      | automation things? Because we've had a little bit of a behind the scenes with the podcasting,           |
| 07:58      | and you mentioning when you retired, you wanted to start learning all this stuff, but how               |
| 08:02      | did you get into automating specifically?                                                               |
| 08:04      | Well, early on, I'd hear people talk about automating with [[AppleScript]], and I wanted                   |
| 08:09      | to do it because all the cool kids were doing it. But I actually had trouble thinking of                |
| 08:14      | things to automate. I would look at what I was doing, and I just couldn't see it. Eventually,           |
| 08:19      | I tried Automator, and I thought, okay, that's going to be, I should be able to crack the               |
| 08:22      | code on this. I should be able to do drag and drop, and I could get part way through,                   |
| 08:27      | but no matter what I did, I needed to use [[AppleScript]]. And I had a lot of trouble with that,           |
| 08:33      | and I wouldn't call it a success, but I did finally create one automation that I really                 |
| 08:39      | like. It's in Automator, and it allows me to copy the URL and title of my blog posts                    |
| 08:45      | in order to use it in social media. So I hit a keystroke, open up Twitter, masked it on                 |
| 08:50      | now, and I pasted it in, and that's a link to my show that it's just been published.                    |
| 08:54      | And I know you can do automated posting, but I don't like that. I like to add a little                  |
| 08:57      | bit of context to it. So that was my first success, and that was probably where I dipped                |
| 09:01      | the toe in. But it's one of those things, I think, snowballs. Like once you realise,                    |
| 09:06      | you go, oh, well, what about this thing that I do by hand? What about that thing I do by                |
| 09:09      | hand? What if I could make that go faster, more efficient, and less error prone? And                    |
| 09:13      | that was kind of the launching pad for it.                                                              |
| 09:15      | Yeah, it is really like learning the tool set, and then finding, you find uses for it                   |
| 09:22      | once you do that.                                                                                       |
| 09:23      | And...                                                                                                  |
| 09:24      | Do you need that itch to scratch? And it's sometimes hard to find the first one. At least               |
| 09:29      | I found it was.                                                                                         |
| 09:30      | Yeah, I think it's one of those things. Once you realise how to solve a problem with one                |
| 09:35      | problem with automation, it can become a little bit like the hammer, where you just use automation      |
| 09:41      | to solve every problem. Guilty. That's me.                                                              |
| 09:45      | But also, it is one of those things where you realise that you have a tool that you                     |
| 09:51      | can use in a number of different ways. And all of those skills that you've learned building             |
| 09:57      | that tool, even if you then end up finding something else that solves the problem in                    |
| 10:00      | a different way for you, you still learn skills and you can still reapply them elsewhere.               |
| 10:05      | Yeah, you guys asked me what my favourite automation tools were. And I'm going to put them in order.     |
| 10:14      | My number one is still [[Hazel]]. And the primary use I use for that is to keep my Mac tidy                 |
| 10:20      | and not suck up disk space. And this is something I've been doing for a really long time now.           |
| 10:24      | But when I create the each week's podcast or sets of podcasts, there's an enormous amount               |
| 10:29      | of data that gets created, even though they're only audio podcasts. There's three or four               |
| 10:34      | versions of uncompressed files and things. And a lot of the images that I use in the                    |
| 10:40      | blog posts and little scripts and things. So I wrote an automation that basically says,                 |
| 10:46      | when these files are two weeks old, just move them over to my Synology and delete them off              |
| 10:49      | my internal drive. And that seems really simple, but it really solves a big problem because             |
| 10:54      | otherwise you spend a lot of time worrying about making sure these things are, you know,                |
| 10:58      | wait, can I delete this? I don't know if I have it somewhere else. And then that makes                  |
| 11:03      | it a big problem. And so I'm going to give a big shout out to Paul Kim of [[Hazel]]. His                    |
| 11:08      | tech support is phenomenal. He never seems to get weary of my repeated questions, even                  |
| 11:13      | though when I can tell, I bet I already asked him this. He is fantastic, really, really                 |
| 11:16      | great support from Paul.                                                                                |
| 11:18      | Yeah. And a lot of times when you ask him questions several times, it shows up as a                     |
| 11:22      | feature in the next version of the application. So, you know, our favourite kind of developer            |
| 11:28      | is the, you know, small team. And Paul is a one man shop. He makes a living off that                    |
| 11:33      | app. And he does nothing all day, but just continue to make it awesome. And it's true.                  |
| 11:41      | One man shops or three person shops, I like those better than big corporations for sure.                |
| 11:46      | Yeah.                                                                                                   |
| 11:47      | Because you can get their attention, right? You can get a little bit of help.                           |
| 11:50      | Yeah. Yeah. Like if you go and post in the Noodlesoft forums, Noodlesoft being, you know,                   |
| 11:55      | the business officially are the one man shop behind [[Hazel]], then you're very likely to get               |
| 12:01      | a reply from Paul. And there are some really lovely community members in there that help                |
| 12:04      | you out as well.                                                                                        |
| 12:05      | It is amazing how often I go into the [[Hazel]] forums trying to solve one problem. I come                  |
| 12:10      | out with 17 solutions, and then I realised I have to go back and post my original question              |
| 12:14      | because I found all of the solutions to problems I didn't realise I had. And then, whoops, yeah,        |
| 12:19      | I need to solve my original problem.                                                                    |
| 12:21      | But yeah, the forums are honestly really good. It doesn't necessarily seem like it on the               |
| 12:26      | surface, but search for a word of a problem that you're trying to solve with [[Hazel]] and                  |
| 12:32      | enjoy the rabbit hole. That's how I'm going to phrase that. You're going to be Alice in                 |
| 12:35      | Wonderland, but it's going to be great. And you can always close the tab if you do need                 |
| 12:40      | to escape with some sanity left intact.                                                                 |
| 12:42      | Rose, what's your favourite [[Hazel]] rule? Like you have one that just makes you giggle every               |
| 12:48      | time you run it?                                                                                        |
| 12:49      | No, I mean, it doesn't make me giggle, but it does give me a certain amount of satisfaction.            |
| 12:53      | Whenever I download my payslips, it automatically like renames them and moves them into iCloud.         |
| 12:59      | And then on my personal machine, they get sucked up into [[DEVONthink]]. And honestly,                   |
| 13:04      | the fact that all of my work documents that are related to things like that, that just                  |
| 13:09      | happens. And that happens on one machine, and then they just magically appear on another                |
| 13:14      | one afterwards. That is just so satisfying. It's genuinely fabulous. I really need to                   |
| 13:22      | play with [[Hazel]] more because I always feel like I'm just doing the most mundane, basic                  |
| 13:26      | things with it. But at the same time, that's actually going into the file to find like                  |
| 13:31      | the date and everything in the file because the file names are just garbage strings.                    |
| 13:35      | I think it's okay that she does mundane things for us though, right? Because she's just sweeping        |
| 13:40      | up behind us, cleaning things up that we leave laying around. And that's kind of the beauty             |
| 13:46      | of it, I think.                                                                                         |
| 13:47      | Exactly. Like one of my favourites is what I call the burn bag. And it's a folder called                 |
| 13:52      | the burn bag. And when I want to share something with somebody, it's a [[Dropbox]] folder. I put            |
| 13:57      | it in the burn bag and I send them the [[Dropbox]] link and two weeks later [[Hazel]] deletes it.               |
| 14:02      | And it's like something because you share links sometimes with these big files and you                  |
| 14:08      | forget about it. And you just don't want them. Like when I was a lawyer, some of them had               |
| 14:14      | like client data to share with an extra witness or whatnot. Same thing. I don't want the files          |
| 14:18      | hanging around. So you put them in there and it's a simple rule after two weeks. If it's                |
| 14:23      | been there two weeks, delete it.                                                                        |
| 14:25      | I have something really similar. I call it delete me. And it's not just for that. It                    |
| 14:31      | definitely works for that. I have a delete me on [[Dropbox]] for things like just like what                 |
| 14:35      | you talked about. But I've one locally too. And [[Hazel]] deletes everything after two weeks.               |
| 14:40      | That appears to be the length of time that we care about things. But one of the great                   |
| 14:44      | things about the delete me folder, the way I use it is I'm telling future me that it's                  |
| 14:49      | okay to delete. So let's say I export an adorable picture of my grandson Forbes and I drop it           |
| 14:54      | into delete me because I'm just going to put it somewhere. I'm going to post it somewhere.              |
| 14:58      | I need to know that I have another copy of that adorable photo. Otherwise I'm going to                  |
| 15:02      | keep it. If you let it sit on your desktop, that'll be on your desktop for the rest of                  |
| 15:06      | your life because you're afraid you can't delete it or you import it back into photos                   |
| 15:10      | and now it goes, Hey, you've already got this photo. But if you put it, if you put things               |
| 15:14      | that delete me that at this moment, you know, it's okay to delete. It's a perfect solution.             |
| 15:19      | Yeah. Yeah, no, I actually use [[Hazel]]. So anything that is on my desktop for more than an hour           |
| 15:25      | gets moved to the downloads folder. Because the problem with the desktop is like it gets                |
| 15:29      | hidden behind the applications. I can't actually see the files. So therefore they don't exist           |
| 15:33      | anymore. So they get moved to the downloads folder. And I don't think it's been in the                  |
| 15:37      | downloads folder for more than 10 days. Bye bye. But I do heavily automate my downloads                 |
| 15:42      | folder to be fair. So if you [[Stage Manager]], it's your desktop disappears too. So that's                 |
| 15:47      | another way that it's invisible. Yeah, yeah, I have not gotten into [[Stage Manager]]. Alison,              |
| 15:53      | do you use [[Stage Manager]]? I love it. Yeah, on the Mac, I don't find it super useful on                  |
| 15:58      | the iPad. But on the Mac, it's great for me because I have a habit of opening 8,000 windows             |
| 16:03      | and 8,000 applications. And I get myself a little bit crazy. And then I just have to                    |
| 16:07      | quit everything and start over. But pretty soon it grows. And by using [[Stage Manager]],                   |
| 16:11      | I've got these piles that I can go, Oh, I need a, I need to find a window. Let me pull it               |
| 16:14      | out of the pile into this group. And then I can play around in that. And it works in a way that         |
| 16:19      | that space is just never, never clicked for me. Fair enough. Yeah, I found it's the opposite way        |
| 16:26      | around for me. It works brilliantly on the iPad and does not work for me at all on the Mac possibly     |
| 16:31      | because I so heavily use [[Moom]] to set up my spaces with bunch, so bunch will like close apps, open       |
| 16:37      | apps, hide apps and stuff for me and then use [[Moom]] to put everything in like the right place.           |
| 16:42      | But I guess because of the way that I do things and I had already grown accustomed to doing that,       |
| 16:48      | I tried using [[Stage Manager]]. It was a very short lived five minutes on my work machine before I         |
| 16:52      | was like, I'm not going to be at all productive today if I'm trying to fight stage managers to          |
| 16:56      | do my job. And I've tried it multiple times on my personal machines and just haven't got                |
| 17:00      | anywhere with it yet. I think for the super organised, it's, it's like a nightmare. It's                |
| 17:04      | your worst case scenario for people who are messy. It's fantastic. I mean, I wouldn't say that I'm      |
| 17:10      | organised. I'd say I'm, I'm more in the messy category, but at the same time, like I, I already         |
| 17:15      | know like what applications I want and where I want them to be because I know that if I look            |
| 17:20      | right, then I'm going to see the zoom window. If I look left, I'm going to see the show notes and       |
| 17:24      | things like that. And so that's organised, not messy. Sorry. No, that's, that's, that's moon.           |
| 17:28      | That's moon popping up every couple like every self and then just doing it again for me because         |
| 17:33      | otherwise I will lose all of my windows. But you, you force yourself to be organised against your       |
| 17:39      | will or against your, your nature, I should say. I can't keep it organised. I've done that. I've        |
| 17:44      | set up moon and say, okay, here's where everything goes. And then within 15 seconds, I want that        |
| 17:48      | window in the middle. I want everything I'm working on to always be in the middle. And if you have it   |
| 17:52      | all organised all over the place, you can't. Yeah. And that is perfect for [[Stage Manager]]                |
| 17:57      | for the way you describe your work else. And I like Rose, I have, I call them setups. Like              |
| 18:03      | before we start recording today, I said, do automators set up and it set up all the automators          |
| 18:07      | tabs and the recording apps and it laid out the windows exactly. And if you have [[Stage Manager]]          |
| 18:12      | running the whole system just barfs all over your screen. It doesn't know what to do. It's a huge       |
| 18:17      | problem if you have pre-canned like setups. And so I, I tried it. I tried to find alternative           |
| 18:24      | ways to do setups with [[Stage Manager]] and ultimately I turned it off. So, you know, I'm like Rose in     |
| 18:29      | that regard. But, but I think like for my wife, who's not someone who's going to program individual     |
| 18:36      | setups on her computer, [[Stage Manager]] handles a big problem, you know, makes it much easier to see      |
| 18:42      | this group versus that group. And I don't think it's done yet, but I think it's progress.               |
| 18:49      | Yeah. Well, I think it's nice that there's just ways for different people. Bart is a hard core          |
| 18:53      | spaces user, found a [[Stage Manager]] to be a nightmare. I discovered the other day I was                  |
| 18:59      | testing it, you can actually do both. Yeah. You can have individual spaces with individual              |
| 19:05      | [[Stage Manager]] groups. So like if you have a communication space, you can have a group with              |
| 19:09      | your social media and a group with your email or whatever, and you can switch between them.             |
| 19:14      | Yeah. And I love the idea of that. I wish spaces itself had more integration with everything else       |
| 19:20      | because, you know, [[Stage Manager]] is starting to get there with things like shortcut support,            |
| 19:25      | but spaces is really difficult. But I have to say, like if I am in the office for work,                 |
| 19:31      | and I take my laptop with me, because, you know, I have to kind of do my job while I'm                  |
| 19:35      | sitting in an office. But what I'll do is because I've only got like a 14 inch or 16 inch screen        |
| 19:40      | instead of my usual 32 inch ultra wide monitor plus extra monitor, then I will have, you know,          |
| 19:46      | the main program that I'm using full screen in a space so that I can see everything. And then           |
| 19:52      | I can just swipe backwards and forwards with the multiple finger gestures. And that works               |
| 19:55      | incredibly well for me. But I can also see why that wouldn't work well for some people because          |
| 20:00      | they, you know, they're used to, you know, using the trackpad. And especially the maximise windows      |
| 20:07      | on Mac OS can be quite tricky, I think for some people, because you just kind of lose everything.       |
| 20:11      | My dad accidentally maximised [[Photoshop]] the other day. I had a frantic tech support call going,         |
| 20:16      | wait, well, the Mac is gone. Where is the Mac? And eventually after getting a photo of the screen,      |
| 20:21      | I was like, okay, move your mouse right into the top left corner and then click on the green button.    |
| 20:25      | And then you'll have your Mac back. He was quite pleased when Mac OS reappeared, but just one of        |
| 20:31      | those things where it was confusing for him. And I suspect if he tried it, he would really like spaces. |
| 20:40      | This episode of The Automators is brought to you by Issue. Get started with Issue today for free        |
| 20:45      | or sign up for an annual premium account and get 50% off. Just go to issue.com/podcast,           |
| 20:51      | I-S-S-U-U. If you post content on your website, share to [[Instagram]] and send it to your clients,         |
| 20:57      | but then find posting your content to your channels includes reformatting, resizing,                    |
| 21:02      | redownloading and reuploading, you need Issue because then you can create once and share everywhere.    |
| 21:09      | Issue is the all in one platform to create and distribute beautiful digital content from marketing      |
| 21:14      | materials and magazines to catalogues and portfolios and so much more. There's no need for endless        |
| 21:19      | scrolling through PDFs. Issue features your digital content in an easy to view way on every device.     |
| 21:26      | Make it once and distribute it everywhere without formatting. Your content is automatically             |
| 21:31      | optimised for engagement and ready to share, which saves you so much time. Issue also works             |
| 21:37      | seamlessly with the tools you already use and love like Canva Dropbox, Mailchimp and InDesign.          |
| 21:44      | I've used Issue and it's excellent. The interface is really easy to use. You can upload your assets     |
| 21:49      | and have them formatted for wherever you want to distribute them. I recommend this to anybody who       |
| 21:54      | wants to make things look better and do it faster. Content on Issue can be published as public or       |
| 21:59      | private. Private only allows users with a shared link to view it and public content will be available   |
| 22:05      | for your audience and it'll be available for others to discover on the Issue platform.                  |
| 22:10      | And this is cool. The platform also provides statistics on how your content is being consumed           |
| 22:15      | so you can learn more about your audience with data on impressions, clicks on the content,              |
| 22:19      | duration spent reading, pages viewed and more. Issue helps creators, marketers, designers,              |
| 22:25      | and really anyone who wants to make content that stands out. Get started with Issue today for free      |
| 22:31      | or sign up for an annual premium account and get 50% off when you go to issue.com/podcast         |
| 22:38      | and use the promo code Automators. That's I-S-S-U-U dot com slash podcast and use promo code Automators |
| 22:47      | at checkout for your free starter account or 50% off an annual premium account. One more time,          |
| 22:53      | issue.com/podcast with the promo code Automators and our thanks to Issue for their                |
| 22:59      | support of the Automators and all of Relay FM. So Allison, what are some of your other favourite         |
| 23:06      | automation tools? Well, I got to give a shout out to my second favourite, which is other people.         |
| 23:12      | As I mentioned, having Rosemary do an automation for me, shortcuts don't work for me. I'm sorry.        |
| 23:19      | I don't want to hurt your feelings, Rosemary, but they don't work. They don't ever work.                |
| 23:24      | Nothing I ever tried. I have one that emails me, whatever I'm looking at, and that one works.           |
| 23:29      | And that's about it. And the one you wrote for me, that one works at least 75% of the time.             |
| 23:34      | But everything else I write, I run into a wall just like I used to with Automator where I couldn't      |
| 23:38      | get it to work. So having someone else do it for me, that's a perfect solution. And I got to give       |
| 23:43      | a shout out to Mike Price. I use a digital audio workstation called Hindenburg, and it's not a          |
| 23:50      | Mac first application. And so they don't keep focus on text fields like they should. And so it's        |
| 23:56      | really tedious to post in blog titles and URLs. So Mike Price wrote an automation for me in             |
| 24:02      | [[Keyboard Maestro]]. Now, the best part about the story is he didn't know how to use [[Keyboard Maestro]]      |
| 24:07      | when I asked him to help me. He went out, found the tool, bought it, learned it, and then wrote         |
| 24:11      | the automation for me. So that's way better than me doing it, right? I guess. Delegation solution.      |
| 24:17      | Yeah, delegation, definitely. But that puts [[Keyboard Maestro]] in my next favourite. And I really          |
| 24:23      | like it. And I've gotten it to do some great things for me. But it's so freaking fragile.               |
| 24:29      | It just seems to, like, I'll get it to do something. And then the next week, it won't do it.            |
| 24:34      | And I go in and I fiddle and I poke a little couple of things. And then it'll work for a little         |
| 24:37      | while. And then it won't work. And especially if you have to tell it, look for this graphic,            |
| 24:43      | you know, if a button isn't accessible, and you have to say, okay, look for the thing that looks        |
| 24:47      | like this, it'll work like eight times in a row. And the nighttime, that won't work. And it will        |
| 24:51      | stop working indefinitely. And you can take the screenshot again, try to do it. Sometimes it's          |
| 24:56      | those pesky, you know, weight things you have to put in, tell it to wait for five seconds               |
| 25:00      | or whatever, half a second. But sometimes those stop working. And this automation that Mike wrote       |
| 25:05      | for me, it has now stopped working. And we haven't been able to figure out why yet. And so I love       |
| 25:11      | it, but I also can't stand it. It makes me crazy when it stops working. So I really want to love        |
| 25:17      | [[Keyboard Maestro]], but I'm not in love. I'm in really good like with it.                                 |
| 25:21      | Yeah, I have to say, well, the tricks that I found with [[Keyboard Maestro]] for doing things like          |
| 25:27      | where you would need to click an image, there is often somewhere in that application, a hidden menu     |
| 25:33      | command. And [[Keyboard Maestro]] has the ability to say like, click, like click this menu command,         |
| 25:38      | and you can select the application and then like actually go through the menus in [[Keyboard Maestro]].     |
| 25:43      | And that I find works really, really well for me. But it doesn't necessarily work for everything        |
| 25:48      | else. That one's fragile too. So one of my favourite automations was I like to use a tool called the     |
| 25:57      | Noun Project to create, to get icons. And I have a subscription to it. It's great. You can just type    |
| 26:04      | in, I want a house. And I use that house in a graphic for my featured image for my blog post.           |
| 26:09      | But somebody pointed out that the ones I was posting had no alpha channel. And if you use               |
| 26:15      | dark mode, that looks terrible because it's going to be a black outline sitting on dark gray.           |
| 26:19      | So I said, okay, well, I need to remove or put the alpha channel back in on the way I'm creating        |
| 26:24      | this. So rather than just open it and preview and click, you know, put the alpha channel back,          |
| 26:29      | I spent like 16 hours trying to automate it and wrote a [[Keyboard Maestro]] macro to do it.                |
| 26:35      | But I tell you, Rosemary, it would work and then not work and then work and then not work using         |
| 26:41      | exactly what you talked about. I found the hidden menu that would check that little box                 |
| 26:45      | and it would work. And then sometimes it just wouldn't. And I gave up on it. It was really              |
| 26:50      | frustrating. Yeah, it's one of those things where, you know, there, sometimes I found,                  |
| 26:55      | especially click it image, you know, where, you know, windows move around and so on.                    |
| 27:01      | And the application developers tweak something ever so slightly. And then that image, you have          |
| 27:07      | to like crop it by one pixel all the way around or something. It's like, stop doing this to me.         |
| 27:13      | Don't torture me. So some experience for me on that find a image button. I like, I use it on            |
| 27:19      | [[Grammarly]] because I use the [[Grammarly]] website and there's no way to open a new document except          |
| 27:24      | click an image. And I've had the same image and I've been using it like three years and it works        |
| 27:30      | every time. No problems. But then I was using it just recently because Apple, for whatever reason,      |
| 27:37      | does not let you automate tab groups on the Mac with shortcuts. You know, they added tab groups,        |
| 27:42      | but there's no command in shortcuts to say open up the automators recording tab group. It just,         |
| 27:47      | I don't know how that one got through, but I'm assuming it's going to get added at some point.          |
| 27:52      | And so what I do now is I say open [[Safari]] and look for the, and I usually keep the sidebar              |
| 27:59      | and [[Safari]] open, just look for the tab group sidebar. And, but then it didn't work for me.              |
| 28:04      | I'm like, well, what's going on? And I looked at it, what happened because that the tab group had       |
| 28:08      | already been highlighted, it had a gray background. It wasn't the same image, you know, and it's like   |
| 28:13      | little things like that. So then you build in an automation, say, well, look, if it's gray,             |
| 28:17      | then you don't need to push it. But, you know, it's like, you are getting very fiddly at that point.    |
| 28:21      | And honestly, the find an image and click a thing is just fiddly by nature because                      |
| 28:26      | it is a total hack. But it's, there's no other way to do something like that,                           |
| 28:31      | that shortcut I use for [[Grammarly]], there's literally no other way to do it.                             |
| 28:35      | Unless they have an API, which I'm not aware of.                                                        |
| 28:38      | So there is another way with [[Grammarly]]. But what that involves is basically being a little bit          |
| 28:44      | of a web developer or at least nerdy enough to like inspect the web page and then find out like          |
| 28:50      | which either unique identifier is behind that button or like a special like path to get to              |
| 28:55      | that button so that then you can click at it with JavaScript. And that's something that I can do        |
| 29:01      | because my day job is being a web developer. It's not something that I would necessarily expect         |
| 29:05      | somebody who doesn't spend all day messing around with websites and breaking them to necessarily        |
| 29:10      | want to do, let alone know where to start with. You know, there are plenty of guides online.            |
| 29:15      | If I can find one, I'll put it in the show notes. But that's still going to be fragile because          |
| 29:21      | I had this recently at work. DevOps decided that they were going to update the website.                 |
| 29:27      | It looks exactly the same as it did before. There are no more unique identifiers.                       |
| 29:33      | Okay, so now my script is broken to give me like the name of the branch that I'm supposed to be         |
| 29:38      | working on. Thanks, love it. But you know, I fixed it. It's fine. It works again. But it was just       |
| 29:45      | one of those things where it's like, oh, really? Like, why are you doing this to me? You don't          |
| 29:49      | need to be doing this to me. Well, I do want to give a shout out back to [[Keyboard Maestro]],              |
| 29:54      | though, to say what I do love about it is the automations that matter to me the most are the            |
| 29:59      | ones where, first of all, it's just an annoying task to do something I don't enjoy doing. But           |
| 30:05      | secondly, that it can be error prone. And if you automate it, you can stop yourself from                |
| 30:11      | making stupid mistakes. And my favourite automation on my Mac is a [[Keyboard Maestro]] macro that gets      |
| 30:18      | everything set up on my Mac for my doing my live show. So it launches a whole bunch of apps and         |
| 30:24      | it shuts off a bunch of services. It embeds a shortcut, actually a shortcut that says turn on           |
| 30:33      | do not disturb, because that's like 17 button pushes now on the Mac to get it to go into do not         |
| 30:38      | disturb not for one hour not till this evening. I just want to turn it on. Leave me alone. So it        |
| 30:43      | turns out on it turns off Wi-Fi and it turns on it runs a home kit automation that turns on all         |
| 30:48      | my lights, it shuts off the landline phone. And it's like 28 different things that it does that         |
| 30:53      | are tedious, but also error prone. Like if I forget to turn on a Wi-Fi, I'm not going to have as good   |
| 30:57      | of a connection as if I have Wi-Fi turned off. So I really love that it's repeatable. It runs and       |
| 31:04      | that one is not fragile. It seems to work every time. Oh, no, no, I'm lying. It is fragile.             |
| 31:08      | It is one fragile piece. I use [[Keyboard Maestro]] not moon anymore. I used to use moon, but I have        |
| 31:13      | problems with that too. But I use [[Keyboard Maestro]] to change the size of Hindenburg to go into the      |
| 31:18      | right spot. And just sometimes that step just doesn't run. It puts all the windows where they're        |
| 31:23      | supposed to be and one or two of them like discord seems to be the one that doesn't go where it's       |
| 31:28      | supposed to. And I can go back into the macro and push it just that one step and it'll all go where     |
| 31:34      | it's supposed to. Why didn't you do it the first time? I can tell you exactly why I didn't do it        |
| 31:39      | the first time. And the answer is those aren't real Mac apps. So you mentioned earlier, Hindenburg      |
| 31:45      | is not a Mac first app and discord. I have a thumb bug in discord whenever I react to something.        |
| 31:51      | If I am the first person to react to a message in discord, so I was putting an emoji as a response.     |
| 31:57      | But yeah, discord is unfortunately very buggy when it comes to doing things like that. I have           |
| 32:02      | successfully automated one or two things with it, but it is quite a tricky thing to just get working.   |
| 32:08      | But as long as the rest of it works, if I've got something that might be a little bit flaky,            |
| 32:13      | I always move that step right to the end as far as I can. And then the other option is of course        |
| 32:20      | with [[Keyboard Maestro]], which I love, is there is the option to in the settings cog on each individual   |
| 32:27      | action to say, like, if this doesn't work, then keep going, like, do the rest of the macro anyway,      |
| 32:33      | please. Because that is something where if you've got something that may or may not work,               |
| 32:37      | especially if you're experimenting like I do, then it's a good way of working around that problem.      |
| 32:44      | I would like to defend the honour of [[Keyboard Maestro]]. I find it more stable than Alison does.           |
| 32:52      | Occasionally, I have things go wrong with it. But it's something like where the graphic changed or      |
| 32:59      | things like that. The other piece that causes problems for it sometimes for me is just                  |
| 33:04      | anything that involves the internet, where the connection is slow. And I find that having an            |
| 33:10      | extra long wait commands solves that problem. Like the [[Grammarly]] thing where it goes to the website     |
| 33:16      | and pushes the button, I have a three second delay, which is more time than I need. And you do look     |
| 33:21      | at the screen and say, ah, now my computer just stopped for three seconds. But it's way faster          |
| 33:27      | than me hunting and pecking on the page. And I can be drinking tea while it's doing it. So              |
| 33:34      | you have to be patient with outside sources to it. But in general, Alison, I find it actually           |
| 33:41      | works better than you do. I don't have very many problems.                                              |
| 33:43      | Okay. As a challenge to you and to the audience, I want you to open up a PNG that has the Alpha         |
| 33:51      | channel checked. I open it in preview and uncheck that checkbox and get it to work 20 times in a        |
| 34:00      | row, like across two days. So what I would do with that, what I would do with the way I'd solve         |
| 34:06      | that problem is I would find the AppleScript dictionary for preview and see if I could just            |
| 34:10      | script it. Well, I did one better than that. I run image magic from Homebrew and I just did             |
| 34:19      | a one line script and I shoved that inside [[Keyboard Maestro]] so I can hit a button and have it           |
| 34:25      | remove the Alpha channel for me. Yeah. I mean, that's way better than UI scripting,                     |
| 34:29      | like trying to have it find a button and push it is very, it's creaky. Because things can't go wrong.   |
| 34:36      | Okay. Creaky is a good word. I think it's one of those things, right? Whenever you've got an            |
| 34:41      | automation that isn't quite working right, like obviously doing the basic steps of how I actually       |
| 34:47      | got a screenshot of the right image and so on is worth checking. But sometimes that is a signal         |
| 34:51      | that this is not necessarily the right way to automate this. But with some applications,                |
| 34:55      | there is just no way to automate it because they don't come with an AppleScript dictionary. There      |
| 35:00      | are no shortcut sections. There is no API. There is nothing that you can do other than try and          |
| 35:06      | find this image on the page, please and click it. Yeah. I'm also trying not to learn a lot about        |
| 35:12      | [[AppleScript]] just because I'm afraid it's going to be taken away from me. So I'm leaning away           |
| 35:18      | from spending my energy and time on that and doing more towards shell scripting.                        |
| 35:23      | I think that's probably a good idea in general, but I don't think AppleScript is going to be           |
| 35:28      | taken away from you. I think the problem with AppleScript, it only works on your Mac. And if           |
| 35:32      | you start to want to run stuff on your iPad and your iPhone, AppleScript doesn't help you. But         |
| 35:36      | I think the way I understand it, AppleScript is so embedded into the Mac OS that it would take         |
| 35:44      | time and effort to remove it. And they're not going to spend money to remove it. And also,              |
| 35:51      | they have customers that buy a lot of Macs that do workflows that still use AppleScript. Apple         |
| 35:56      | uses AppleScripts to run their stuff. So I think it's not going to go away. And honestly, a lot        |
| 36:01      | of times it's the quickest, fastest solution. This week, because my [[Stream Deck]] I'm putting it on,      |
| 36:09      | I've been trying to [[BetterTouchTool]], I want to turn volume up and down in [[Apple Music]]                 |
| 36:14      | without changing the volume of my Mac. And I just opened AppleScript. I looked at the music            |
| 36:19      | dictionary, the command for volume up is real simple. I wrote like a three line AppleScript            |
| 36:24      | that turns the volume up and down. And I attached it to buttons on my [[Stream Deck]]. And maybe I          |
| 36:30      | could have found a scripting solution that did that. But it's just so easy. You should have a           |
| 36:36      | little working knowledge of AppleScript, I guess is what I'm saying. Yeah, it's one of those things    |
| 36:40      | where often if you Google how to solve this thing on the Mac, there'll be a little bit of Apple         |
| 36:43      | script somewhere, which worst case scenario, like goes through like system events to like click         |
| 36:48      | at specific things. But yeah, I will absolutely go plagiarise an AppleScript. I'm not above that       |
| 36:55      | going out and saying, okay, somebody's already written it. I'm going to splat it in there and           |
| 36:59      | see if it does what I wanted to do. But I'm not going to invest as much time as I am. And like          |
| 37:03      | I said, in learning AppleScripts, yeah, learning shell scripts, I meant.                               |
| 37:08      | Yeah. And what I would add to that is also in addition to being able to go pull a script                |
| 37:12      | off the internet is I would with your level of knowledge, you should just learn a basic                 |
| 37:17      | understanding of how dictionaries work in AppleScript. I spent a bunch of time on that, David.         |
| 37:21      | And I just life's too short. I'm learning other things. Okay. All right. Well, speaking of other        |
| 37:27      | things, you mentioned Alison that you're using image magic through brew to fix the alpha channel        |
| 37:33      | problem with the image. There is another solution to this problem, which I'd like to recommend for      |
| 37:39      | you and for the audience, because this is what take control uses to put like one pixel gray borders     |
| 37:45      | around all of the images in the books. And that's [[Retrobatch]]. So [[Retrobatch]] is kind of like,          |
| 37:51      | it looks the interface looks a little bit like [[Audio Hijack]] for folks who've seen that where            |
| 37:55      | you've got square blocks going across, which you sort of link to each other. It's a little bit sort     |
| 37:59      | of keyboard, my story shortcuts. But essentially, you have like the blocks, which say, Hey, like,       |
| 38:06      | read this, do this thing, do that thing. And here's your new image. And there's a bunch of stuff        |
| 38:12      | that's like built into it as well for, you know, prompting for files using photo library, clipboard,    |
| 38:17      | stuff like that. And then of course, it can, you know, write images to whatever with whatever           |
| 38:22      | file name you like. But it's just something I thought I'd recommend for folks who are                   |
| 38:27      | interested in that sort of thing who are thinking, Oh, gosh, image magic.                               |
| 38:29      | This looks super neat. And it's also by the people who make acorn. It's from [[Flying Meat Software\|Flying Meat]].               |
| 38:34      | That is really cool. It's definitely wasting some time on this. It's not by the people.                 |
| 38:40      | I thought you might. It's not by the people. It's by the person, Gus Mueller. I mean, it's              |
| 38:43      | another one of these single developer apps where if you have a problem and you send an email,           |
| 38:48      | it probably gets fixed in the next beta, you know, nice, nice. I love that.                             |
| 38:54      | We can't skip TextExpander. Because TextExpander is probably, I probably should have put it           |
| 39:01      | earlier in the list of maybe not above my price writing things for me, but way up there. I just         |
| 39:08      | love fixing my problems before they even start with TextExpander. One of my favourite things to do      |
| 39:14      | is while I'm listening to [[WWDC]] and they tell us the name of the next operating system,                  |
| 39:19      | is I write a TextExpander snippet for it. Because life is too short to remember whether the M is       |
| 39:24      | lower uppercase and Mac OS and the, you know, is there a space between Mac and OS and whether,          |
| 39:30      | you know, what it is. And I just love doing that. I do these templates before I even run into the       |
| 39:37      | problem. And it just makes me so happy. And especially when they came out with embedded                 |
| 39:42      | snippets. So I've got a snippet for my podcast URL, for example, with "a href" and all that in it.      |
| 39:49      | And I can just have that embedded into another snippet and another snippet. And then if I decide        |
| 39:54      | to change something, it's really easy to do. And I just, I just love using TextExpander every          |
| 40:00      | single day. I'm just happy it exists. It's a really useful tool for things like that. And               |
| 40:06      | particularly the idea of embedding one automation in another, it lends itself exceptionally well to     |
| 40:11      | text expansion, but it works in other cases as well. And it's just a really useful thing to have.       |
| 40:19      | I should note, TextExpander is sponsoring this episode of automators, but they're not                  |
| 40:23      | sponsoring Allison to talk nicely about them. You know, she's saying that without knowing that.         |
| 40:29      | But yeah, it is, you know, it is a great application for all sorts of things. And,                      |
| 40:33      | you know, particularly that idea. A pro tip. So one of the fun things about TextExpander's,             |
| 40:39      | you get an email once a month telling you how you did, how much time you saved.                         |
| 40:44      | And I'm sure you guys look at that, right? You want to see how much time you saved. And it's            |
| 40:48      | always a really great big number. And it's a lot of fun, how many minutes you saved or hours.           |
| 40:52      | I figured out a way to get your stats up, create a snippet with a lot of text in it.                    |
| 40:57      | So like my show notes have, I start with a template that's got spaces for everything that               |
| 41:02      | I'm going to need to do. And I came up with an automation that I'll talk about in a minute              |
| 41:06      | that that I needed to test. And I tested it over and over and over again. And so it's                   |
| 41:11      | splitting like 200 words onto a page, doing it again and again and again. And I could,                  |
| 41:16      | I saved like 16 hours that month. It was awesome. Yeah, I am. But I was practising law. I would         |
| 41:22      | write contracts with TextExpander's snippets. So I had long, exhaustive snippets. But I knew the        |
| 41:29      | snippets in my head. So like I had three different versions of an attorney fee clause or a              |
| 41:34      | confidentiality clause. So I, when I'd write a contract, I'd literally just sit there and write,        |
| 41:38      | you know, attorney fee clause one, you know, and it would do that. And at the end of the year,          |
| 41:43      | I'd get these reports that I saved like six days of my year, like six days of work.                     |
| 41:48      | That's true. I also figured out how to tell if you're on vacation. I got an email from                  |
| 41:55      | TextExpander telling me that I'd saved one minute. Yeah. I was in Antarctica. Yeah. I mean, that       |
| 42:04      | seems like a pretty good reason to not be doing as much work or automating as many things. You          |
| 42:09      | know, exactly. I mean, you could have started writing about penguins instead. I hear there's            |
| 42:13      | some pretty fabulous penguins down there. I did write about penguins as it turns out,                   |
| 42:17      | but I didn't use any TextExpander snippets apparently. Oh, I did write one for Antarctica.             |
| 42:21      | Penguin in there. Well, Antarctica is hard to spell. So I type A and T semicolon and it spits           |
| 42:26      | out Antarctica. So I did have one snippet in my letters. This episode of Automators is brought          |
| 42:34      | to you by ExpressVPN. Watching Netflix without using ExpressVPN is a bit like buying tickets to         |
| 42:39      | your favourite artists, but only being allowed to watch the opening act. I don't know if you know        |
| 42:43      | this, but some streaming services have different content libraries for every country. So there are      |
| 42:47      | tons of shows available in other countries and with a VPN, you can access those other libraries.        |
| 42:52      | Basically tweaks where Netflix, all those other services think that you are right now.                  |
| 42:56      | This means that I can watch Lord of the Rings on Turkish Netflix. If I want to,                         |
| 43:01      | with just one click by opening the app, choosing the country I want Netflix to think I'm in,            |
| 43:04      | I'm refreshing. There are so many reasons to use ExpressVPN. It's got blazing fast speeds,              |
| 43:09      | so you can stream in HD with zero buffering. It's compatible with all your devices, phones,             |
| 43:14      | laptops, media consoles, smart TVs, and more. Plus they have servers in 94 different countries,         |
| 43:19      | so you can gain access to thousands of new shows. And it works with other streaming services like       |
| 43:23      | BBC iPlayer, YouTube, and many more. You can stop paying full price for streaming services and only     |
| 43:29      | getting an access to that fraction of their content. Get your money's worth at ExpressVPN.com           |
| 43:34      | slash Automators. Don't forget to use the link at expressvpn.com/Automators to get an extra        |
| 43:42      | three months of ExpressVPN for free. Our thanks to ExpressVPN for their support of this show and all    |
| 43:48      | of Relay FM. So, Alison, tell us about the last automation that you made, because there's about         |
| 43:56      | a thousand pages of show notes that you've given us here. So, I'm just going to jump to a future        |
| 44:01      | point in that and derail things even more. Well, I think the key with automation is when                |
| 44:07      | you realise that you start automating something before you do it repetitively.                          |
| 44:12      | So, when you first start doing automation, you go, man, I've done that 3000 times. I bet there's        |
| 44:16      | an easier way. When you do the automation ahead of time, like you see it coming,                        |
| 44:21      | this is going to be a pain in the butt. I don't want to do this by hand. I don't want to do it          |
| 44:25      | unreliably. I use a service called Alphonic for my podcast. Alphonic is this fantastic service          |
| 44:32      | that allows you to upload your audio podcast in an uncompressed form, and it levels the audio,          |
| 44:38      | but it also raises it to the loudness standards, which is really important for podcasting. You          |
| 44:42      | don't want to be turning the volume up and down, up and down all the time. So, I use Alphonic for       |
| 44:46      | that. It also compresses it into an MP3. It FTPs it over to Libsyn for me, so it's available.           |
| 44:53      | And then it gives me a download link. A long time ago, I wrote an automation that just said,            |
| 44:57      | when I click the download of that file, watch the downloads folder and move that over into the          |
| 45:01      | appropriate folder. So, that was already done just to make sure I had a copy of the MP3 in order to be  |
| 45:06      | double safe that I had a copy of it. But they recently added whisper AI transcription service           |
| 45:14      | to it. And for no extra cost, you can check a little box. And now, every time I create a podcast,       |
| 45:19      | the last thing it does is it goes through this hour, hour and a half of audio, and it creates           |
| 45:24      | a transcription for me. And I'm not going to edit that transcription. Please don't ask me to,           |
| 45:29      | not going to do it. But I figured it might have some value, and it's free, so why not?                  |
| 45:33      | So, I set up another automation before I ever even downloaded it once. I set up an automation           |
| 45:39      | that drops the, when the file downloads into my downloads folder, it takes a look at it,                |
| 45:47      | it finds out the form of the name, and it knows what folder to put it in onto my desktop,               |
| 45:52      | but it also FTPs it up to my server to a known location, and then that becomes part of the              |
| 45:58      | embedded TextExpander snippet that I was practising. The reason I was doing that so often              |
| 46:03      | was now it's got everything about my show notes, including it already has a link to this file           |
| 46:09      | for the transcription. So, if anybody clicks it, it's going to automatically go in                      |
| 46:13      | to the show notes. They'll be able to see it. They can go directly to the transcription.                |
| 46:16      | It shows up on my blog post. It shows up in my feed, so people can get to it right from their           |
| 46:23      | podcast feed. And the reason it tickled me so much was that I did it before I ever did it once by       |
| 46:29      | hand. I never did it by hand, and that delighted me because I felt like I was ahead of the game.        |
| 46:35      | You were, and in more than one way, because I've caught something else that you said there,             |
| 46:39      | it uploads it to a known file location, so you know exactly the format of the URL based on              |
| 46:45      | something else. So, you don't, you skip the whole step of automating, and now where is the magic        |
| 46:49      | URL that I need to find to put this in the show notes, because you actually just put it in the          |
| 46:54      | same place every time, which is a really simple but brilliant automation tip that you snuck in          |
| 47:02      | there hiding behind the genius of doing everything before you had to do it manually once. But that's    |
| 47:08      | something else I feel like people will appreciate the idea of if you know where it is, you don't        |
| 47:13      | have to figure out where it is. All right, Allison, earlier you said that you often wait until you      |
| 47:20      | do it a bunch of times and your brain starts pushing back about automating, but how do you              |
| 47:25      | generally decide when it's time to automate? The most important thing is if it's going to be a          |
| 47:31      | repetitive task, because life's too short to do the same thing over and over and over again. If         |
| 47:36      | it's something that a machine can do, why not let it do it? It's also really important to me            |
| 47:42      | that certain functions are repeatable, and the best example of that was when I was talking about        |
| 47:47      | my live show setup, the most important thing is that I make sure all of those steps get done,           |
| 47:52      | that I got to make sure that Google Drive isn't trying to sync while I'm in the middle of doing         |
| 47:56      | a podcast. So having that automated that is error prone, I'm likely to forget something.                |
| 48:03      | That seems really, really important and to keep it predictable. But on the other hand,                  |
| 48:09      | I sometimes go through a lot of work to automate something just because it's annoying. And the          |
| 48:15      | best example of that was this problem with the Alpha channel on that PNG, is I spent an inordinate      |
| 48:21      | amount of time doing that. I mean, it was comically long, but it gave me a great blog post to describe  |
| 48:28      | how idiotic I was that I spent all of this time doing it. But it gets into a joy, right? It's           |
| 48:34      | fun to automate something. It's less fun to actually do the thing. So it's more fun to do the           |
| 48:39      | automation. And I think that's, I think that's part of it. When you get to the point that it's          |
| 48:45      | joyful to do automation, then you're really sucked into the automator's madness.                        |
| 48:51      | And you really, it's like, it's progressive knowledge as you start to build it out and you              |
| 48:57      | learn little pieces. It's very easy to bring the tool set to a different problem.                       |
| 49:03      | Yeah. When it fails, that's when you learn a lot. Like the fact that I learned,                         |
| 49:08      | hey, wait a minute, what if I just went over and ran image magic from Homebrew and I embedded that      |
| 49:12      | inside of a [[Keyboard Maestro]] macro. Now that's in my brain. Oh, that's another way to go. I could       |
| 49:18      | write a shell script in order to, but still use it in [[Keyboard Maestro]] and then maybe attach it to      |
| 49:23      | my [[Stream Deck]]. Each one of these things you do, every time you do it, you're adding to your knowledge  |
| 49:28      | base. Just like you said, that's a really good point. And it really is remarkable right now             |
| 49:33      | on the Mac. I feel like we're entering this golden age where you've got [[Hazel]], [[Keyboard Maestro]],        |
| 49:40      | shortcuts, scripting, even all these different tools. And in the last year, they've all learned         |
| 49:45      | to talk to each other. I mean, on this episode alone, we've already talked about running a shortcut     |
| 49:51      | from [[Keyboard Maestro]], but you can also run a [[Keyboard Maestro]] script from a shortcut. And              |
| 49:56      | all this stuff just works. [[Hazel]] now you can have when [[Hazel]] identifies a file,                         |
| 50:03      | run a shortcut to perform an action that shortcuts is good at on that file.                             |
| 50:08      | It's really, really fun for automation right now on the Mac.                                            |
| 50:13      | I think so too. I just wish Mac shortcuts were reliable and more feature rich. I mean,                  |
| 50:21      | so many times I think of something like, this is obviously going to exist in a gallery somewhere        |
| 50:26      | and in somebody's library and I can't find it. And maybe I'm not looking in the right places.           |
| 50:31      | Well, let's talk about that for a minute because you've said a few times on the show that shortcuts     |
| 50:38      | isn't working. I think you said you have two working shortcuts. And I wonder about that.                |
| 50:45      | I mean, maybe you're trying to solve two big problems with shortcuts. I find little shortcuts           |
| 50:52      | are some of the most handy. I like to trigger focus modes. You mentioned earlier, hitting               |
| 50:59      | a focus mode like do not disturb or I have one for podcasting. It's too much work on the Mac.           |
| 51:06      | And if you trigger a shortcut, you can have a shortcut that has a one action that says                  |
| 51:13      | start a focus mode. And then you can attach that to a [[Stream Deck]] button or a keyboard                  |
| 51:18      | combination or run it out of, but we can make it as part of a bigger script like you have               |
| 51:23      | when you start preparing. Those little single actions and shortcuts,                                    |
| 51:28      | they're absolutely reliable and they're flexible too. Like the other thing you had said earlier was,    |
| 51:34      | you know, I don't want the do not disturb to wait for an hour or wait for an event and just             |
| 51:39      | to start. Well, I can tell you, I have two sets. Like I have a [[Stream Deck]] panel that's all about       |
| 51:46      | focus modes. And if the button is in gray, like the button with a microphone is gray and I press        |
| 51:53      | that it's going to turn on podcasting focus mode till the event ends. But if I press the microphone     |
| 51:58      | with the orange background, it's just going to turn on podcasting focus mode and it's not going to      |
| 52:03      | turn off. And all of that is way faster than the way Apple wants you to do it. So I feel like           |
| 52:09      | maybe you should explore using some of the smaller actions as kind of an entry point.                   |
| 52:15      | Well, like I said, little tiny things do work. Like do not disturb. Let me see. What exactly            |
| 52:24      | does it say? I'm looking forward. I've got just like 20 things I've tried to do, maybe four of          |
| 52:32      | which work. Where did do not disturb go? It was there a second ago. Can't find it. But it basically     |
| 52:38      | just says to turn on. Oh, there it is. Oh, I've got a folder called I'm really using these.             |
| 52:44      | It says turn do not disturb on until turned off. That's the whole shortcut. Yes, that works.            |
| 52:49      | Email myself. That one says if there's no input, continue. Here's the email address to go to and        |
| 52:56      | I stole that one. I'm looking for ones I can steal really. That's what I want. I want a good place to   |
| 53:01      | go to find where do you go to find shortcuts of people have already written because the gallery         |
| 53:05      | doesn't have them. Well, I could recommend there's the MacSparky field guide with a whole bunch        |
| 53:11      | of shortcuts that you could download. That's got some good ones in there. And of course,                |
| 53:18      | I've done take control shortcuts, but I also provide shortcuts every week in                            |
| 53:23      | iOS today's shortcuts corner as solutions to the problems that people have written in with.             |
| 53:29      | Gathered in a pile somewhere. When I need to automate, I type in what I'm looking for and it            |
| 53:34      | will come to me. That's what I need. That is kind of the problem. They're not. And there are some       |
| 53:38      | sites which sort of collect shortcuts together that people have submitted, but you don't really         |
| 53:44      | know about the person who submitted them. So there could be something there from [[Simon Støvring]],       |
| 53:49      | who is the creator of Jayson, Scriptable, and oh God, [[Data Jar]], Re: Toot, all of the great little            |
| 53:58      | nerdy apps like that. But it could also be from some random person on Reddit who doesn't actually       |
| 54:04      | know how shortcuts work. [[Matthew Cassinelli]], maybe? I was just going to say that. Yeah, he's got a lot  |
| 54:09      | of good recommendations and some things you can download. He's been a guest on the show and he          |
| 54:15      | worked on the shortcuts team and he worked for Apple. I trust anything he would post. I think           |
| 54:20      | he's a good one. Yeah. One thing I would say is sometimes shortcuts may not be the most intuitive       |
| 54:26      | for folks. And there was really good example of this on the shortcut subreddit the other day,           |
| 54:32      | where somebody was using a home automation and they were using the stop and output action.              |
| 54:37      | And so they had a text action and they had stop and output. And I don't think they realised,            |
| 54:44      | because I asked, what are you actually trying to do? And they said, oh, I want a notification.          |
| 54:49      | Okay, well, stopping and just outputting text is not going to send you a notification. Like,            |
| 54:54      | you'd need a notification action for that. You don't have a notification action because this            |
| 54:58      | is home kit and it's a home kit shortcut. So you can't do that there. You need to work around it        |
| 55:04      | with something else. For example, push cut or push over, push bullet, that sort of thing.               |
| 55:09      | But for them, it was like, well, just give me the text, output the text. And you need to have           |
| 55:19      | the mindset of, okay, but what is this and where is it going? Because at the end of the day,            |
| 55:25      | if you don't tell shortcuts exactly what to do with something, and you've just got something            |
| 55:29      | at the end, it'll just kind of drop it on the floor and be like, hey, I'm done. That's it.              |
| 55:34      | But once it gets dropped on the floor, there's an invisible hazel that comes along and cleans           |
| 55:39      | it up and it doesn't exist anymore. And that's it. You find shortcuts on the Mac as reliable and        |
| 55:45      | repeatable as they are on iOS? No. No. It's got a lot better. It's got a lot better. But                |
| 55:55      | yeah, it's just not as reliable. I think that's the problem. I have yet to come up with a               |
| 55:59      | single thing on iOS that I want to automate. Actually, no, I'm lying. My email myself is                |
| 56:07      | what I use on iOS and that's it. But I don't do a lot of work other than just writing, for example,     |
| 56:13      | and bear. So I don't know what to automate over there. Well, sounds like you don't need it, but         |
| 56:19      | the... I mean, all of those home kit things that you were talking about, including in                   |
| 56:23      | My Keyboard Master and so on, you could chain those together as a series of actions in a shortcut.      |
| 56:28      | And that could be useful. There are also home kit shortcuts. And I was just saying just now             |
| 56:34      | that home kit shortcuts don't have the ability to send a notification because it runs on a              |
| 56:38      | HomePod. It doesn't know who owns the shortcut. But what it could do is, for example, at sunset        |
| 56:45      | every day, instead of just turn on lights, if you have colourful outdoor lights, for example,            |
| 56:50      | it could actually check what the date is. Okay, so if it's Valentine's Day, it could turn lights        |
| 56:55      | pink and purple. And if it's December, it could turn your lights red and green. If it's Halloween,      |
| 56:59      | purple and orange, things like that. And you could actually get it to check, you know, okay,            |
| 57:04      | what month is it? Right? Or what day is it? I'm going to apply this scene. Otherwise,                   |
| 57:09      | I'll just apply the default scene. And that's the sort of thing where shortcuts, particularly home      |
| 57:15      | kit shortcuts there, is really nice. So for me, I'm going to share one which I think you'll like        |
| 57:21      | the idea of. This is a personal automation I have in shortcuts. Okay, there's actually two,             |
| 57:27      | two parcels. So first of all, I use the sleep focus and sleep mode with the health app on my            |
| 57:31      | iPhone. So when my wake up alarm is snoozed in the morning, what actually happens is it uses            |
| 57:38      | a great little app called [[Signals for HomeKit]], and it flashes my bedside lights as brightly as         |
| 57:43      | it they can go. And it's a really sort of horrible greeny-yellow colour. It's not a good colour.          |
| 57:49      | It's my punishment for hitting the switch button. Does it seem to be the most irritating to you?        |
| 57:53      | Exactly. And it also slightly increases the volume of my HomePod. Not a lot, but it increased the      |
| 57:57      | volume of my HomePod. But then the other thing that I do is when my wake up alarm actually goes        |
| 58:02      | off. So when it starts going off in the morning, it runs a home kit scene and it plays music through    |
| 58:07      | the HomePods on my bedside tables as my alarm clock. So, you know, my alarm's going off on my          |
| 58:13      | phone, but it starts playing music. And it also starts running various automations like it opens        |
| 58:18      | the blind in my bedroom so that I've got some natural light coming in to help me wake up because        |
| 58:22      | my alarm's going off. I should probably be getting up and so on. And it also sets another alarm one     |
| 58:29      | minute into the future because I wear an Apple watch while I sleep. And of course that vibrates         |
| 58:33      | on your wrist. It doesn't give you an audible alarm. And despite blinds going up, lights flashing at    |
| 58:39      | me and so on, I've had days where I can still just kind of go back to sleep, which is not good.         |
| 58:44      | So I found like setting another alarm like one minute into the future of like, no,                      |
| 58:47      | seriously, wake up rows. It's pretty helpful. And so, yeah, that's something I do.                      |
| 58:52      | Why do you need to do that on iOS? Well, I do that on my phone because this way it's linked to my       |
| 58:58      | alarm. So if I adjust my alarm on my phone, then it changes the time automatically. And also,           |
| 59:04      | if I'm not at home when my alarm goes off, it just stops. And that's it. Because it checks to start     |
| 59:10      | with to make sure that I'm actually at home. And if I'm not at home, then it doesn't do any of that     |
| 59:14      | because there's no point playing music at home and increasing the volume of the speakers at home        |
| 59:18      | if I'm not even there to do that with. This episode of The Automators is brought to you by              |
| 59:26      | TextExpander when you work in a small team every moment counts. You don't want to be wasting your       |
| 59:31      | time finding video conference details to send to a new client. You don't want to track down the same    |
| 59:36      | FAQs from the company website. You need help and you need automation. These are the kinds of things     |
| 59:41      | you want at your fingertips so you can get work done faster. And that's why you need TextExpander.      |
| 59:47      | With TextExpander, you can access what you type the most with just a few keystrokes,                    |
| 59:51      | allowing you to work faster and eliminate repetition and letting you focus on what matters most to you. |
| 59:57      | TextExpander's powerful shortcuts and abbreviations streamline your team's work.                        |
| 01:00:02   | All you have to do is type a short abbreviation and TextExpander does the rest for you.                 |
| 01:00:06   | You just build and collect your most commonly used phrases, messages, URLs and more right               |
| 01:00:11   | within TextExpander and then create your chosen abbreviation and they'll be with you wherever           |
| 01:00:17   | you type. You can even customise the snippets by having them automatically add in dates, fill in        |
| 01:00:22   | the blank fields, time stamps and more. This will make sure that you still keep the personality         |
| 01:00:27   | and the communications you send. And TextExpander is available on any device you use across any         |
| 01:00:33   | app use on Mac, Windows, Chrome and iOS. I use TextExpander for nearly everything.                      |
| 01:00:40   | Not a day goes by that I don't seem to make a new snippet. Just the other day I wrote "StreamDeck"       |
| 01:00:44   | but I put no space. For some reason I was thinking it was camel case. So I made a TextExpander snippet. |
| 01:00:50   | So anytime I type "StreamDeck" with no space it adds a space using a snippet. Just little human          |
| 01:00:56   | built-in typos can get fixed like that with TextExpander but I can also fill in entire contracts        |
| 01:01:01   | with TextExpander language. It really boosts your productivity. If repetitive typing is getting         |
| 01:01:07   | you down you need TextExpander. So check out TextExpander today at textexpander.com/              |
| 01:01:13   | automators and you can get 20% off your first year. That's textexpander.com/automators to say     |
| 01:01:20   | goodbye to repetitive typing. And our thanks to TextExpander for their support of the Automators        |
| 01:01:25   | podcast. Allison, what are you doing with [[HomeKit]]? Well, one of my biggest complaints right now is      |
| 01:01:35   | things that work and I don't know why or how they work. So I'm a big fan of the                         |
| 01:01:42   | hue motion sensor. It's just a great sensor. It's really fast. It senses motion. It does                |
| 01:01:47   | things on my bidding when I walk into a room. And my favourite automations are the ones that I don't     |
| 01:01:52   | even have to tell it to run. That's the ideal situation. Like when I walk up to my house after          |
| 01:01:57   | a long walk with the dog the front door just unlocks because the August lock knows that I'm             |
| 01:02:01   | there. That's the kind of automation I prefer the most is I don't even interact with it.                |
| 01:02:05   | So when I walk into my studio my hue motion sensor senses my motion and my two of my lights             |
| 01:02:13   | behind me come on. It works great. I realised lately that's not quite enough light. I'd actually        |
| 01:02:18   | like my standing lamp, which is also a hue lamp, hue bulbs in it. I would like it to come on too.       |
| 01:02:23   | So I said, okay, let me open up [[HomeKit]]. Let me go look at my scenes. Where are our scenes?             |
| 01:02:31   | I've got a button down here for automation. I've got a button for home. I've got a discover button,     |
| 01:02:35   | but there's no scene buttons. Okay, well, let me look across the top. I think if I go into the          |
| 01:02:40   | home there's a list of them and it's a terrible way to do it. It should be its own section,             |
| 01:02:44   | but I can't find its own section. If it's there, I'd love to know about it. But I flip through the      |
| 01:02:48   | ones and there is no scene for what's happening in my studio. It is not there. So I went in to          |
| 01:02:55   | talk to Steve about it because I said, you know, I don't understand. We've got these scenes. I know     |
| 01:02:59   | we've got these, these automation scenes, whatever you're going to call them. Like we walk into our     |
| 01:03:03   | family room and the lights come on. Oh, the other thing is the lights come on super bright if it's      |
| 01:03:07   | during the day, but if it's, but if it's in the middle of the night, they just come on very,            |
| 01:03:11   | very dimly. And he tells me, he says, I know why you can't find them because they're not there.         |
| 01:03:17   | They were in the Hue app. We created those when we got the Hue app originally and Hue no longer         |
| 01:03:23   | has them because we put those, those devices into [[HomeKit]]. So the auto, I can't change these            |
| 01:03:30   | automations. These exist and I have no access to it. I can't get to it. I can't fix it. I can't add     |
| 01:03:36   | anything to it. You should be able to fix that in the Hue app because I had something similar           |
| 01:03:40   | recently that I was trying to figure out like where, where is this like pink tone to my bedroom         |
| 01:03:45   | light coming from? And it was in the Hue app. Do you think it's in there? Yeah, it's hiding.            |
| 01:03:52   | Because I thought when you were saying this, that you were going to be having the problem with the      |
| 01:03:57   | new home layout, not the 16.2 that got [[Yoink]]ed and then put back in 16.3, but it's not necessarily      |
| 01:04:06   | there yet for everybody version. Like the new look to the Home app, which came out with iOS 16,         |
| 01:04:12   | where if something isn't a favourite, it's really hidden. Yeah. Oh, is there a way to find them?         |
| 01:04:18   | In the Hue app or in the [[HomeKit]]? Well, you know, if I go into Hue automations, it says,                |
| 01:04:23   | did you want to create some automations? So you're not looking for automations in the Hue app.          |
| 01:04:28   | There is like another thing in there called scenes and they should still exist. They're                 |
| 01:04:33   | just buried somewhere. And I have to go press a button on my Hue hub to be able to reconnect it         |
| 01:04:37   | to this phone because I was jiggling things around the other day. So I'm not actually able to poke      |
| 01:04:42   | at that directly. But I definitely do have scenes in the Hue app. They're, they're hiding somewhere,    |
| 01:04:48   | but I'm pretty certain. I'm pretty certain they're there because they auto-populate a huge number       |
| 01:04:54   | of them if you've got anything colourful, which slightly drove me up the wall until I was able           |
| 01:04:58   | to get rid of them. I can't find them in there either. I'll have a look later and see if I can          |
| 01:05:04   | send you some follow up. You raise a great problem though that multiple apps situation is nuts.         |
| 01:05:09   | You know, like, that's like, I had a thing where something wasn't the hardware had stopped working      |
| 01:05:14   | because I hadn't opened the manufacturers app to give it a firmware update. And you don't, you know,    |
| 01:05:20   | you would just assume, and sometimes the firmware updates show up in the home app and sometimes         |
| 01:05:24   | they don't. I do think that there is, is definite room for improvement, not only with the user          |
| 01:05:30   | interface of the home app, but just the way that it talks to secondary apps. And I think the problem    |
| 01:05:35   | is, you know, Apple doesn't control those third party apps, you know, and they have to try and          |
| 01:05:42   | make it work as best as they can. But some companies are going to put a bunch of time and effort into   |
| 01:05:46   | making good apps. And some are not, you know, but either way, Apple wants their stuff to be able        |
| 01:05:53   | to work with [[HomeKit]]. And I don't envy them. I think it's a tough job. Yeah, it is definitely one       |
| 01:05:59   | of those things where this is pretty much like the problem with [[HomeKit]] and home automation in many     |
| 01:06:07   | ways. There are too many ways to solve the problem, because you have the Hub app and the Hub. And       |
| 01:06:12   | then you've also got a [[HomeKit]]. And then, you know, if you get a new Hub when that one comes out        |
| 01:06:18   | with, you know, [[Matter]] support, then you may have yet another way to do stuff through, you know,        |
| 01:06:25   | Google Home or, you know, Echo, the Echo ecosystem and stuff. And honestly, it's really confusing       |
| 01:06:33   | and annoying to try and troubleshoot that, which is why I just went with a nuclear approach of          |
| 01:06:38   | I'm not using any hubs ever again. I'm putting everything in [[Home Assistant]] and [[Home Assistant]]          |
| 01:06:42   | is in charge of everything. Oh, see, I'm a, I used to be, I didn't like the idea of, of hubs,           |
| 01:06:49   | but man, when you do a network change, a hub is a beautiful thing because everything just moves         |
| 01:06:54   | with one device. Oh yeah, not having to individually connect things to Wi-Fi. Yeah, no, it's just,      |
| 01:06:58   | my case, like, because Hue is using the Zigbee protocol, everything's just connected directly to        |
| 01:07:03   | the Zigbee stick in the [[Home Assistant]] hub. And then [[Home Assistant]] gets a new IP address,              |
| 01:07:07   | and that's it, done. And that works pretty well for me. Hey, at the risk of turning this into           |
| 01:07:12   | tech support for Alison, you said there's a way to see scenes that aren't favourites in, in the          |
| 01:07:18   | Home app. In the Home app, yeah. So in general, in the Home app, things that are not favourites          |
| 01:07:24   | are hidden. And this is something that is a little bit sucky. So the thing to do if you've got a scene  |
| 01:07:30   | that in the Home app is hidden is to go to the room, which has something in that, that scene            |
| 01:07:38   | effects. So for example, if the scene is controlling a light in a particular room,                      |
| 01:07:42   | let's say the living room, then you would open the living room. And then you should see in that         |
| 01:07:48   | room, there should be like a horizontal row of all of the scenes. Okay, so those are favourites.         |
| 01:07:55   | Within the room, they're not favourites. Those are all of the scenes in the room.                        |
| 01:07:59   | Yeah. And then when you go into the edit scene, then there is an option to add to home view.            |
| 01:08:06   | And if it's in the home view, then it's in the main home view. And then if it's not, then it's          |
| 01:08:10   | not. But it's just one of those things where that is not necessarily super obvious for folks            |
| 01:08:16   | who are looking for it, especially if you, like me, have lost your electric blanket.                    |
| 01:08:22   | I couldn't find my electric blanket because it wasn't in the bedroom. It was, it was still attached     |
| 01:08:26   | to my bed, but [[HomeKit]] had decided that it belonged in my office. Oh yeah. Are things moving rooms      |
| 01:08:31   | for you right now? It happens every once in a while. I found that this happened a lot when I            |
| 01:08:37   | was using Homebridge. And since I've stopped using Homebridge completely, it seems to have stopped.     |
| 01:08:42   | And I don't know if it's something specific about Homebridge. I'd now just use [[Home Assistant]] for       |
| 01:08:47   | everything or if it's something else, but just one of those things where, yeah, when stuff goes         |
| 01:08:53   | wrong and [[HomeKit]], it seems to go really wrong and you don't necessarily know why.                      |
| 01:08:57   | We have a lamp that just keeps wandering around the house. And I keep accusing Steve of moving it,      |
| 01:09:02   | but I think it's moving by itself. It was in my room yesterday. He found it in his room the day         |
| 01:09:08   | before. We keep putting it back in the family room, but it keeps coming back. Now there's two of them.  |
| 01:09:13   | I have two of a bunch of stuff. I don't understand that either. But the good news is I just checked     |
| 01:09:18   | in my, my room and the scene is definitely not there. And I can't find scenes in here either. So        |
| 01:09:25   | who knows? Well, I will connect my, my Hue Hub back to the Hue app on my phone and see if I can         |
| 01:09:32   | find that and send you some follow up after the show. So what was my favourite automation tool?          |
| 01:09:36   | Other people. Yeah. Thank you, Rosemary. Well,                                                          |
| 01:09:40   | it tickles you. It tickles your brain, doesn't it? You just can't let, you got to know.                 |
| 01:09:44   | That's one of the things about this podcast. You know, everybody is stealing from everybody             |
| 01:09:48   | else all the time and that is the best automation trick. You know, the best automation is the one       |
| 01:09:55   | that you necessarily write. It's the one that works. And if you manage to steal it, then guess          |
| 01:09:59   | what? You automated saving time as well, which is even better.                                          |
| 01:10:01   | Plagiarism is encouraged. Yes. Yes, definitely.                                                         |
| 01:10:08   | People can find you over at podfeet.com with all of your various podcasts and blogs.                    |
| 01:10:14   | Anywhere else people should go to look for you? No, that's probably the best place to go. If            |
| 01:10:18   | you want to find me on the socials, I'm at podfeet. Nowhere near anything owned by Meta,               |
| 01:10:22   | but I'm real active on Mastodon now and not so active on Twitter anymore.                               |
| 01:10:28   | Yeah, I get it. We are the Automator's Podcast. You can find us at really.fm-automators.                |
| 01:10:35   | You can find the forums and the website for the page at talk.automators.fm.                             |
| 01:10:42   | And thank you to our sponsors, Issue, Express, VPN, and TextExpander. And we'll see you next time.      |
| 01:10:48   | Goodbye, folks.                                                                                         |
