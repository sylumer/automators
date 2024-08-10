---
status: "incomplete"
fc-date:
  year: 2019
  month: 08
  day: 30
fc-category: "podcast"
podcast: "Automators"
published: 2019-08-30
duration: 3264
formattedduration: "00:54:24"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Jean Francois Brissette"]
notetype: "episode"
showpage: "http://relay.fm/automators/31"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators031.mp3"
episode: 31
title: "31: Making Your ScreenFlow Flow and More with J.F. Brissette"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David get to talk to J.F. Brissette who really loves to automate. From automating ScreenFlow with Keyboard Maestro to using the Terminal as a launcher, as well as regular expressions and looking into combining Dropbox and ChronoSync this episode will definitely teach you something - even if it's only about finding opportunities for automation!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Jean Francois Brissette| J. F. Brissette]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 031 Discussion](https://talk.automators.fm/t/automators-31-making-your-screenflow-flow-and-more-with-j-f-brissette/5425)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[PushCut (Sponsor)|PushCut]] - Automation your way. Trigger iOS Shortcuts from anywhere.

# Show Notes
- [Mac Power Users #384: Screencasting 101 with JF Brissette - Relay FM](https://www.relay.fm/mpu/384)
- [J.F. Brissette on Twitter](https://twitter.com/jfbrsstt)
- [ScreenFlow - Video Editing and Screen Recording Software](https://www.telestream.net/screenflow/overview.htm)
- [Podio: Project Management and Collaboration Software | Podio](https://podio.com/)
- [Keyboard Maestro 9.0.1: Work Faster with Macros for macOS](http://www.stairways.com/action/kmdiscount?REF9WZE ) - Get 20% off Keyboard Maestro with this link!
- [Palettes in Keyboard Maestro](https://wiki.keyboardmaestro.com/manual/Palettes)
- [Karabiner Elements](https://github.com/tekezo/Karabiner-Elements) - Map keys on your keyboard to do different things with Karabiner Elements (especially useful if you have an extended keyboard!)
- [Taming the Terminal (Allison Sheridan) : Bart Busschots](https://www.bartbusschots.ie/s/blog/taming-the-terminal/)
- [Series: "Bash Fun" - Brett Terpstra.com](https://brettterpstra.com/series/bash-fun/) - Everything Brett Terpstra has ever written on bash.
- [Fizsh · nostodnayr.net](https://nostodnayr.net/2019/07/fizsh) - An article with links to a series about switching from Bash to Z Shell (zsh)
- [Learning Regular Expressions | Lynda Course](https://www.lynda.com/Regular-Expressions-tutorials/Using-Regular-Expressions/85870-2.html)
- [Regex Tutorial - Lookahead and Lookbehind Zero-Length Assertions](https://www.regular-expressions.info/lookaround.html) - Want to find something after or before a particular word with regular expressions? This in-depth article will explain it all.
- [Bare Bones Software | BBEdit 12](https://www.barebones.com/products/bbedit/)
- [‎Expressions on the Mac App Store](https://apps.apple.com/gb/app/expressions/id913158085?mt=12)
- [‎Pretty Regular Expressions on the App Store](https://apps.apple.com/gb/app/pretty-regular-expressions/id1205878178)
- [‎Text Case on the App Store](https://apps.apple.com/gb/app/text-case/id1407730596)
- [‎Transit • Live Transport Times on the App Store](https://apps.apple.com/gb/app/transit-live-transport-times/id498151501)
- [‎Launch Center Pro on the App Store](https://apps.apple.com/gb/app/launch-centre-pro/id532016360)
- [The Best Mac Backup and Sync Software - ChronoSync | Econ Technologies](https://www.econtechnologies.com/chronosync/overview.html)
- [ChronoSync Express on Setapp | Folder Synchronisation and Backup](https://setapp.com/apps/chronosync-express)
- [‎Fratata by Brigitte LeClerc on Apple Music](https://music.apple.com/us/album/fratata/216034789?i=216034802) - J.F was co-producer, composer, arranger, bass & Chapman Stick
- [WaveBurner Tutorial & Online Course - Logic 305 Training Video By macProVideo.com : macProVideo.com](https://macprovideo.com/course/waveburner) - J.F.'s first-ever screencast (on a now-obsolete Apple app)

# Transcription

| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators.                                                                       |
| 00:04      | My name is Rosemary Orchard, and I am joined by my co-host, Mr. David Sparks.                           |
| 00:08      | How are you today, David?                                                                               |
| 00:10      | Outstanding, Ms. Orchard, and yourself.                                                                 |
| 00:13      | I'm very glad to hear it.                                                                               |
| 00:14      | I am also doing very well, and we have a great guest for today's episode.                               |
| 00:20      | Welcome to the show, J.F. Brissette.                                                                     |
| 00:22      | Thank you.                                                                                              |
| 00:23      | Thank you, guys.                                                                                        |
| 00:24      | Thanks for having me.                                                                                   |
| 00:25      | Super excited to be with you today.                                                                     |
| 00:26      | I have to admit, J.F. is one of my best buddies, so we talk on the phone all the time.                  |
| 00:33      | It'll be weird.                                                                                         |
| 00:34      | If I diverge into something random today, that's why.                                                   |
| 00:40      | But J.F. is also an automator and does a lot of cool automation, and we thought, let's                  |
| 00:44      | share some of those automations with the world.                                                         |
| 00:48      | J.F. used to be, well, you were a bassist, but you were also a conductor with Cirque                    |
| 00:52      | de Soleil for a long time.                                                                              |
| 00:54      | I was.                                                                                                  |
| 00:55      | This is why I moved to Las Vegas, where I'm from now, and I spent time about 15 years                   |
| 01:01      | with Cirque de Soleil, and I was playing bass, little keyboards, and also I was a bandleader            |
| 01:06      | for many years, and that led me into some type of automation when it comes to running                   |
| 01:11      | a show like that one.                                                                                   |
| 01:12      | It was pretty good.                                                                                     |
| 01:13      | I was part of the creation of Mystère, the original resident show, as they're called                    |
| 01:17      | over here in Las Vegas.                                                                                 |
| 01:20      | After a long, I joined O for about just almost five years.                                              |
| 01:25      | It's pretty amazing.                                                                                    |
| 01:26      | The way you and I met is we were both speakers at Macworld back when there was such a thing             |
| 01:32      | called Macworld, and we used to hang out together back then, and you do a lot of computing,             |
| 01:40      | a lot of Apple-related computing.                                                                       |
| 01:42      | One of the things J.F. does is he's the supervising editor for Screencast Online, which means           |
| 01:47      | it tells what that means, J.F.                                                                          |
| 01:50      | Oh, yeah.                                                                                               |
| 01:51      | I love working for Don and Screencast Online.                                                           |
| 01:54      | We have a great team over there, and incredibly, I think it'll be like three years since I              |
| 01:58      | joined Don and his team come April of 2020, so it's already over two years.                             |
| 02:04      | Supervising editor, my role has to do with checking all the content that we produce every               |
| 02:09      | week.                                                                                                   |
| 02:10      | For those of you who probably know already about Screencast Online, there is a weekly                   |
| 02:14      | full show every Friday, and every Tuesday there's a shorter tip show on people.                         |
| 02:19      | We have a lot of presenters, really great presenters, and they cover little ditty, little               |
| 02:23      | absolute tips and tricks, and we have a longer show on Friday.                                          |
| 02:26      | My role is I basically grab all those shows and review for content and accuracy, and if                 |
| 02:32      | needed, give feedback to presenters.                                                                    |
| 02:34      | They're all so good that I typically don't have to, and then I also do the assembly,                    |
| 02:38      | which is all the graphics, all the chapter names, and so on.                                            |
| 02:42      | This is all done in [[ScreenFlow]].                                                                        |
| 02:45      | That's the video editing and assembly, and then on the copy side of things, I'm also                    |
| 02:50      | responsible for reviewing every submission made to the monthly magazine for Screencast                  |
| 02:55      | Online.                                                                                                 |
| 02:56      | The articles are submitted, I copy, edit them, make corrections if I need to, then later                |
| 03:02      | on when the magazine is assembled, then it gets back to me, and I do a proof reading,                   |
| 03:07      | a last proof read of the magazine.                                                                      |
| 03:09      | And finally, the weekly newsletter that we have every comes out every Friday.                           |
| 03:13      | I also look at this, and then one more thing that I forgot to mention, the captions.                    |
| 03:18      | Of course, we caption every single show, and when the captions come back from being transcribed,        |
| 03:24      | we use a popular service called Rev based in San Francisco, and they have transcribers                  |
| 03:29      | all over the world.                                                                                     |
| 03:30      | When these captions come back, it is my job to go in and make sure that everything looks                |
| 03:35      | good when it comes to capitalisation, shortcuts the way they're formatted, and all matters              |
| 03:40      | of perhaps misheard words, stuff like that.                                                             |
| 03:42      | So it's a really great amount of work, but I love it so much.                                           |
| 03:46      | I love that type of work, and of course, it leaves itself to automating a lot of things                 |
| 03:50      | too.                                                                                                    |
| 03:51      | Yeah, I was going to say, you must have a lot of systems and probably a lot of automations              |
| 03:54      | in place because the captions and things like that, getting all of that attached to a screen            |
| 03:59      | flow video.                                                                                             |
| 04:00      | I mean, I've tried doing it before, I've also failed miserably at it before because it's                |
| 04:04      | not easy.                                                                                               |
| 04:05      | So I'm guessing you've got a lot of things set up there to help you get this all done.                  |
| 04:10      | We absolutely do.                                                                                       |
| 04:11      | There's lots of really great systems, and Don has been really instrumental in creating                  |
| 04:15      | and maintaining and updating a lot of scripts that we use, and there are a variety of them.             |
| 04:20      | Some of them are bash scripts, others are [[AppleScript\|AppleScripts]], and they're all mixed together.                |
| 04:25      | We use a collaborative system called [[Podio]] or Podio, and that's a really wonderful way                  |
| 04:31      | also to collaborate and make sure that everything gets passed through to the right person at            |
| 04:35      | the right time.                                                                                         |
| 04:36      | And all these include automated steps, and that speeds up the workflow quite a bit because              |
| 04:41      | we are quite a spread out.                                                                              |
| 04:43      | Now, of course, Don is in the UK in the Liverpool area, and we have Rob also that's our post-production |
| 04:48      | assistant who's also in the UK.                                                                         |
| 04:51      | I have presenters here in the US and also in the UK, and myself being in Las Vegas, of                  |
| 04:58      | course, all the time zones are mixed up, and so we have to coordinate in such a way                     |
| 05:01      | that things get done while some of us are sleeping or some of us are up, so we try to                   |
| 05:07      | find ways to speed things up.                                                                           |
| 05:09      | Just this morning, before I joined you guys, I was editing a new show for this week, and                |
| 05:15      | I went through all those workflows, so I'll be able to talk about it quite a bit fresh                  |
| 05:18      | on my mind.                                                                                             |
| 05:19      | Excellent.                                                                                              |
| 05:20      | Well, in addition to [[ScreenFlow]], JF does all sorts of additional automation.                           |
| 05:25      | We're going to talk today about some of the terminal, regular expressions, maybe even                   |
| 05:29      | getting into shortcuts a little bit, and I know, let's see how we do, but I think we                    |
| 05:33      | should probably start talking about [[ScreenFlow]] because you don't just do Don's work.                   |
| 05:37      | I know you do editing for hire, for lots of folks.                                                      |
| 05:41      | Automating that is the way that you can really make it work for you.                                    |
| 05:44      | When you do it for a living, obviously, you got to get rid of all the extraneous steps                  |
| 05:48      | that you can.                                                                                           |
| 05:49      | So, let's just talk a little bit about that.                                                            |
| 05:52      | How are you automating [[ScreenFlow]]?                                                                     |
| 05:55      | Yes.                                                                                                    |
| 05:56      | Well, you've got a good point, [[ScreenFlow]] needs to be automated, in my opinion.                        |
| 06:00      | If you're going to use it as much as I do, whether working for screencasts online, or                   |
| 06:05      | as you said, for other people that require my help, my editor help for [[ScreenFlow]], I've                |
| 06:09      | been using the app pretty much since it was born, and so I'm super familiar with it, and                |
| 06:13      | I've lived through all the upgrades and so on, but still, software by definition is imperfect.          |
| 06:18      | And so, sometimes you need to roll your own, as you would say.                                          |
| 06:23      | My favourite tool to work alongside [[ScreenFlow]] has been and continues to be keyboard                    |
| 06:27      | and maestro, and the reason for that is because I'm able to automate certain things that normally       |
| 06:33      | would take several steps to do manually, even if they involve shortcuts.                                |
| 06:38      | For example, for those of you who might know [[ScreenFlow]], there are ways to apply transitions           |
| 06:43      | to different types of clips at the beginning, at the end of the clip.                                   |
| 06:46      | You can do that with keyboard shortcuts, but when you do it repeatedly, why not combine                 |
| 06:51      | those moves along with a rewinding of the playhead to a place a little earlier in the                   |
| 06:57      | screencast and a tap of the space bar so you can listen and see your edit right away.                   |
| 07:02      | So a lot of the [[ScreenFlow]] macros that I've programmed over time, some of which were provided          |
| 07:07      | to me with Don, and we talked about them, and we tweaked them a little bit, and I think                 |
| 07:10      | I might have shared a couple with you, David, as well.                                                  |
| 07:13      | Those are really useful.                                                                                |
| 07:14      | I keep finding new ways.                                                                                |
| 07:16      | Just this morning, I was working on looking at the steps that you take, and for me, this                |
| 07:21      | is what where automation really shines, is slowing down enough to be able to identify                   |
| 07:26      | something that you may not even realise you're doing repeatedly.                                        |
| 07:30      | And some of those things happen, for example, when you insert what we call chapter markers.             |
| 07:35      | They're both visual on the screen, and there's also a marker inside [[ScreenFlow]].                        |
| 07:39      | And so identifying all the steps required to do this and then creating a macro to automate              |
| 07:44      | the process makes my work a lot more efficient, a lot faster, and honestly, a lot more accurate         |
| 07:49      | as well.                                                                                                |
| 07:50      | If you take out any kind of manual typing from there, you eliminate the chance for a typo               |
| 07:56      | or something like that.                                                                                 |
| 07:58      | And something else, and David, you turned me on to this part of [[Keyboard Maestro]] when                   |
| 08:04      | I was working on your field guide for [[Keyboard Maestro]], and that's the clipboard history                |
| 08:08      | switcher.                                                                                               |
| 08:09      | And that's a wonderful window that shows you the latest things you've pasted, but you can               |
| 08:14      | make a few favourites out of those that will stick and be available to you.                              |
| 08:20      | And that includes objects in [[ScreenFlow]].                                                               |
| 08:23      | And some of you may not know this.                                                                      |
| 08:24      | If you're a [[ScreenFlow]] user out there, and you have [[Keyboard Maestro]], when you copy                    |
| 08:29      | an element, a graphical element from [[ScreenFlow]], it will show up in the clipboard history              |
| 08:33      | viewers, switcher, I should say, and you're able to paste it repeatedly, and it's a lot                 |
| 08:38      | faster than having to copy, go back in the timeline, copy that object again, it remains                 |
| 08:43      | the same.                                                                                               |
| 08:44      | And so all these things put together for me really make my work a lot more enjoyable                    |
| 08:48      | and a lot more efficient.                                                                               |
| 08:49      | Well, also, I mean, it also helps avoid error.                                                          |
| 08:52      | So the workflow JF is talking about is in [[ScreenFlow]].                                                  |
| 08:56      | And I guess I should say, this doesn't just apply to [[ScreenFlow]], this applies to any                   |
| 09:00      | application that you spend a lot of time in.                                                            |
| 09:03      | But in [[ScreenFlow]], when you go back, like if you have a graphic element and you've got                 |
| 09:07      | the line thickness and the colour just right, then you have to go back and find a prior                  |
| 09:11      | iteration of it, copy it and paste it.                                                                  |
| 09:14      | But the problem is sometimes you copy it, but you forget to unselect it.                                |
| 09:17      | So then you move forward in the playhead and you start moving things around and nothing                 |
| 09:21      | seems to be working.                                                                                    |
| 09:22      | And what you're actually doing is screwing up the prior iteration of that graphic element               |
| 09:27      | because it's still selected.                                                                            |
| 09:29      | And you don't even realise it.                                                                          |
| 09:30      | And sometimes it actually makes it into the shipping product if you're not careful.                     |
| 09:33      | So by making a custom clipboard for it and having this on-demand access to it, you're                   |
| 09:40      | more accurate and you're safer for the product.                                                         |
| 09:46      | That's amazing.                                                                                         |
| 09:47      | How do you trigger all of these automations then, JF?                                                   |
| 09:50      | Are you using keyboard shortcuts or are you using one of the palettes in [[Keyboard Maestro]]?              |
| 09:54      | So it's a combination of things.                                                                        |
| 09:56      | A lot of times I'll use palettes because I find that with a number of macros, it becomes                |
| 10:01      | difficult to select keyboard shortcuts with the keyboard.                                               |
| 10:05      | You tend to run out of them after a while.                                                              |
| 10:07      | You can, of course, limit, but you tend to run out of them even if you have carabiner                   |
| 10:12      | elements and the like, which I do have set up on my machine.                                            |
| 10:15      | So a lot of times I will hit, in my case, I have assigned F13 to a floating palette from                |
| 10:23      | [[Keyboard Maestro]] that has a few workflows and there are a few macros.                                   |
| 10:26      | And I can simply hit that.                                                                              |
| 10:28      | I also have the trigger macro by name assigned to a function key on my extended keyboard.               |
| 10:33      | And with a couple of letters, I can type letters and the macro is brought up and I hit return           |
| 10:39      | and it executes.                                                                                        |
| 10:41      | So those are ways I do that.                                                                            |
| 10:42      | And the thing JF does that I found kind of helpful or instructional to me, some of the                  |
| 10:48      | types of automation he's doing, and this would apply equally to Excel or Word as it would               |
| 10:53      | to [[ScreenFlow]], is he looks at those tedious things where you've got to hit the arrow                    |
| 10:58      | key five times and then some keyboard shortcut and then the arrow key two more times or a               |
| 11:03      | tab key.                                                                                                |
| 11:04      | The things where you're stringing together little manual acts that you don't even think                 |
| 11:09      | of as he said earlier in the show, things you don't even realise you're doing repeatedly,               |
| 11:13      | but the JF automation radar is very sensitive and it seems like you always find those things            |
| 11:19      | and you take the five left arrow clicks plus keyboard shortcut plus tab key, you turn that              |
| 11:25      | into one automation, which when you think about it, if it's something you do five times                 |
| 11:31      | a day or more, it really makes a difference.                                                            |
| 11:35      | It does make a huge difference.                                                                         |
| 11:36      | And that reminds me that when you talk about repeating certain keystrokes or certain elements           |
| 11:41      | of your macros or your scripts, a [[Keyboard Maestro]] has a repeat function, which is                   |
| 11:45      | really useful.                                                                                          |
| 11:46      | And I certainly use it myself rather than insert or copy and paste the same element                     |
| 11:52      | five times.                                                                                             |
| 11:53      | I think the programmer mind in me is thinking, well, this is really a loop.                             |
| 11:57      | And so I basically right click on the action and then there is a repeat command in there                |
| 12:02      | that you can put in there and say, just say, repeat this action five times and it happens               |
| 12:07      | fairly quickly.                                                                                         |
| 12:08      | You don't need to put a delay for that type of stuff.                                                   |
| 12:10      | The delay or the pause usually occurs afterwards, but you're absolutely right.                          |
| 12:14      | Making different commands together is really one of the biggest workflow enhancements that              |
| 12:20      | I've witnessed with the work I do.                                                                      |
| 12:23      | And I happily share those macros for people that want to.                                               |
| 12:26      | As a matter of fact, I think about the presenters at Screencast Online as well as you, David.           |
| 12:30      | And Rose, if you do some screencasts as well, and if you, of course, have any questions                 |
| 12:35      | or you're curious about some of those macros, I am always wide open and want to share them              |
| 12:40      | with as many people because nobody should spend more time than they need tapping keys                   |
| 12:45      | when they can just trigger a macro and get it done quickly.                                             |
| 12:49      | Very generous.                                                                                          |
| 12:50      | Thank you.                                                                                              |
| 12:51      | There's a cool feature in [[Keyboard Maestro]] where you can make temporary macros.                         |
| 12:55      | And I use this in Word all the time.                                                                    |
| 12:58      | If someone gives me a block of text that's got wonky formatting and you find yourself                   |
| 13:03      | doing that thing where arrow down, tab key, you know, shift right to, or was it command?                |
| 13:12      | I know that, I know it with my fingers, but not, I don't know what keys I'm pressing.                   |
| 13:15      | Shift all right maybe to select the word?                                                               |
| 13:17      | Just select the word, yeah.                                                                             |
| 13:18      | And then.                                                                                               |
| 13:19      | Sorry, shift option right.                                                                              |
| 13:20      | Exactly.                                                                                                |
| 13:21      | And then command B to, you know, to fix, make it bold and then return.                                  |
| 13:26      | It's like you do this like weird dance of like seven keystrokes and you have to do it                   |
| 13:30      | like 40 times because the way the thing gave you was formatted.                                         |
| 13:34      | And with [[Keyboard Maestro]], you can just do that once and save that.                                     |
| 13:37      | And then you just turn that into a one button macro.                                                    |
| 13:40      | It's very similar to what JF is doing, but it's kind of more on the fly.                                |
| 13:44      | You don't really keep it.                                                                               |
| 13:45      | You're not going to need it again.                                                                      |
| 13:46      | But I love the idea of taking a critical look at some of these applications that don't necessarily      |
| 13:52      | make it easy and finding ways to force it to be easy through these [[Keyboard Maestro]]                     |
| 13:56      | scripts.                                                                                                |
| 13:57      | Exactly.                                                                                                |
| 13:58      | And I think one of the hardest things to do.                                                            |
| 14:00      | I know it's true in my line of work because I'm really busy with a bunch of different                   |
| 14:03      | things, including screencast online, of course, is the ability or allowing yourself the time            |
| 14:09      | to slow down, give yourself an hour where you examine the workflow that you've had,                     |
| 14:13      | or maybe jot down a quick note and [[Drafts]] and remind yourself, look at the chapter                      |
| 14:19      | marking process and see if there's a macro in there.                                                    |
| 14:23      | If you don't jot that down, you can very easily just go through the motion every time                   |
| 14:27      | you do it and not think about slowing down enough to just basically pull back and look                  |
| 14:34      | at your workflow and then generate a macro.                                                             |
| 14:36      | It's the old adage, isn't it?                                                                           |
| 14:38      | People say, well, you're spending so much time creating a script.                                       |
| 14:41      | In the time you created that script, I was able to finish my work.                                      |
| 14:44      | That may be true for one instance thing, but then what about the next time?                             |
| 14:48      | The next time we do the same thing, I'll be done in 20 seconds and you might be still                   |
| 14:54      | spending the same 20 minutes to do the same work.                                                       |
| 14:56      | So this is something important to remember when people say, well, JF, you're wasting                    |
| 15:00      | time slowing down on a Sunday afternoon, spending two hours identifying macro opportunities.            |
| 15:06      | But in reality, I'm planning for the week after that when I have to do it again without                 |
| 15:12      | spending the time.                                                                                      |
| 15:13      | That eliminates the resistance.                                                                         |
| 15:15      | I mean, there's this resistance when you know you've got to do a bunch of manual nonsense               |
| 15:19      | when you're working on some sort of file, you're less likely to actually work on the                    |
| 15:24      | file and when you can remove those areas of resistance, make that barrier to entry lower,               |
| 15:30      | it makes it easier to actually do the work.                                                             |
| 15:32      | Definitely.                                                                                             |
| 15:33      | And also, because you've taken the time to automate it, that means that when you insert                 |
| 15:37      | that transition, it will do it exactly with the five taps to the left, not four or six,                 |
| 15:43      | because you tap too quickly or too slowly and something happened in the wrong order                     |
| 15:46      | because your fingers are moving ahead of your brain.                                                    |
| 15:50      | It does the same thing every time and there is a lot to be said about automation for accuracy,          |
| 15:55      | which I think some people do overlook from time to time because it does make your life                  |
| 15:58      | easier.                                                                                                 |
| 15:59      | Even if maybe running the automation could even take a little longer than theoretically                 |
| 16:04      | doing all of those keystrokes manually, it's the same every single time, which makes your               |
| 16:09      | work look better as well.                                                                               |
| 16:11      | Absolutely.                                                                                             |
| 16:12      | Couldn't agree more on that one for sure.                                                               |
| 16:16      | This episode of The Automators is brought to you by ExpressVPN.                                         |
| 16:20      | Head over to expressvpn.com/automators for three months free with a one-year package.             |
| 16:27      | You might think that nobody wants your online data or to snoop on you, but when you browse              |
| 16:33      | the web without anything to protect your privacy, they do.                                              |
| 16:37      | When you go to the coffee shop and sign up for that free Wi-Fi, you're putting yourself                 |
| 16:41      | at risk with hackers and ad companies and other nefarious folks.                                        |
| 16:46      | And it does happen to people like us, which is why I recommend ExpressVPN.                              |
| 16:51      | ExpressVPN runs in the background of your computer or phone.                                            |
| 16:54      | It encrypts your data and hides your public IP address.                                                 |
| 16:58      | Just download the app, click to connect, and you're protected.                                          |
| 17:03      | ExpressVPN was rated the number one VPN service by TechRadar.                                           |
| 17:07      | They use this new cutting-edge technology called Trusted Server to make sure there are                  |
| 17:11      | no logs of what you do online, and it costs less than $7 a month and comes with a 30-day                |
| 17:17      | money-back guarantee.                                                                                   |
| 17:19      | Anytime I'm out of the house, I turn on ExpressVPN.                                                     |
| 17:23      | It's super easy.                                                                                        |
| 17:25      | All you do is you open the app and you press one button and you're safe.                                |
| 17:29      | It's that ease of use that really makes the difference.                                                 |
| 17:32      | When I went to the big Relay FM event up in San Francisco, I turned on ExpressVPN in the                |
| 17:36      | airport before I left and just left it turned on for the whole trip.                                    |
| 17:40      | So for the whole time, I was entirely protected.                                                        |
| 17:43      | You can, too, protect your online activity today and find out how you can get three months              |
| 17:48      | free at expressvpn.com/automators.                                                                |
| 17:53      | That's E-X-P-R-E-S-S VPN.com/Automators for three months free with a one-year package.            |
| 18:02      | Take back your online privacy at expressvpn.com/Automators and our thanks to ExpressVPN           |
| 18:08      | for their support of the Automators and all of Relay FM.                                                |
| 18:13      | So JF, now you don't just do your automation in [[ScreenFlow]].                                            |
| 18:17      | I know that you apply your prowess across many devices and many apps.                                   |
| 18:22      | One that we don't get to often on the Automator, so, is the terminal.                                   |
| 18:27      | Yes.                                                                                                    |
| 18:28      | The terminal is one of those apps that I really enjoy using for many reasons.                           |
| 18:33      | I think one of the things I enjoy the most, and it's simply working in Bash mostly on                   |
| 18:38      | the terminal, the [[Unix]] underpinnings, of course, of macOS 10.                                           |
| 18:42      | That's what I use using the terminal app.                                                               |
| 18:44      | There are other apps out there, but I stick with the default terminal app on OS 10 or                   |
| 18:49      | macOS, I should say.                                                                                    |
| 18:50      | I just enjoy the simplicity.                                                                            |
| 18:53      | It's a login item for me.                                                                               |
| 18:54      | So as soon as I power up my Mac Pro, my iMac Pro, I should say, the app opens right away.               |
| 19:01      | And I've set up a custom window.                                                                        |
| 19:03      | It's based on the Homebrew profile for those of you out there that use terminal, you know,              |
| 19:07      | a nice black background with green text originally that I turned more towards orange.                   |
| 19:12      | I just enjoyed the simplicity, text-only look.                                                          |
| 19:15      | And it just gives me a break from the busy gooey that we're always looking at all day.                  |
| 19:20      | And also, to be honest, it speeds up certain things that I do.                                          |
| 19:24      | And one of my favourite things to do on the command line is setting up a file, a tiny                    |
| 19:30      | little file that lives inside your home folder.                                                         |
| 19:33      | It's a hidden file.                                                                                     |
| 19:34      | So if you want to see it in terminal, you have to open the period or dot bash underscore                |
| 19:39      | profile.                                                                                                |
| 19:40      | And that's a file that you can open right on the command line inside a simple text editor               |
| 19:45      | called nano.                                                                                            |
| 19:46      | VIM or VIM would be probably overkill to edit the bash profile.                                         |
| 19:50      | But I often times open nano my bash profile file and just go in there and set up what                   |
| 19:56      | are called aliases.                                                                                     |
| 19:57      | In other words, single words that will trigger a command or several commands in a row, like             |
| 20:02      | opening an app, for example, or going to a specific folder in the finder, or even creating              |
| 20:08      | some directories or some folders in the finder.                                                         |
| 20:11      | So those are all things I find very useful.                                                             |
| 20:14      | And I have a terminal window open all the time.                                                         |
| 20:16      | And it's really saved me a lot of time.                                                                 |
| 20:18      | I also pipe what I do in a terminal sometimes to the PB or paste the board as it's what it              |
| 20:25      | stands for, paste board, PB, copy.                                                                      |
| 20:28      | That way I have it ready on the clipboard if I need it elsewhere.                                       |
| 20:30      | So those are all little things that I do on a very regular basis.                                       |
| 20:34      | I really enjoy using terminal in that way.                                                              |
| 20:37      | You were telling me when we met for the first time back in June that you also use the terminal          |
| 20:42      | instead of spotlight in many ways to launch applications and so on as well.                             |
| 20:48      | Is this something that's difficult to do or is this something everybody could do?                       |
| 20:51      | Oh, everyone can launch an app in terminal.                                                             |
| 20:54      | So it's actually a simple command.                                                                      |
| 20:56      | The command in terminal in bash to open an app is simply the word open with a space.                    |
| 21:02      | And then you put what's called a flag or an option.                                                     |
| 21:04      | So that would be hyphen or dash, the letter A for application, then a space and simply                  |
| 21:10      | typing the application's name that you want to open, then hit return.                                   |
| 21:14      | Now if the application name, I'm sorry, if the application name has two or more words,                  |
| 21:18      | you want to put quotes on the outside, inside the string with single quotes.                            |
| 21:23      | But for example, if you wanted to open [[Safari]], you could open it to a specific URL.                     |
| 21:28      | But if you wanted to open the app by itself, you simply would type open space dash a space              |
| 21:33      | and the word [[Safari]], then hit return.                                                                   |
| 21:36      | So if you already got a terminal in front of you because you're doing something else                    |
| 21:40      | or you're just exploring it, this is a great way to get started because it's really not                 |
| 21:44      | difficult to do.                                                                                        |
| 21:45      | You're going to have to learn that you need to type it in that specific order, but that's               |
| 21:50      | easy.                                                                                                   |
| 21:51      | And it becomes second nature after a while.                                                             |
| 21:53      | And if you do it a ton of time and you want to save a little bit of typing, then you can                |
| 21:56      | create one of those alias commands I was talking about.                                                 |
| 22:00      | Something else that's super useful when you're in the terminal, depending on where you are              |
| 22:04      | in the file system, you can open the current folder that you're inside of in the terminal.              |
| 22:09      | If you want to see the window on the screen, you can simply type the word open a space                  |
| 22:13      | and a period right away.                                                                                |
| 22:14      | And that opens the current folder that you're inside of on terminal.                                    |
| 22:18      | The window shows up and you can look inside of it and do things that you need to do.                    |
| 22:22      | I had no idea and I need that all the time at work.                                                     |
| 22:25      | Brilliant.                                                                                              |
| 22:26      | Thank you.                                                                                              |
| 22:27      | It's a fun one.                                                                                         |
| 22:28      | Yes.                                                                                                    |
| 22:29      | And something else related to terminal I'd like to share with you guys is something really              |
| 22:32      | brilliant that you both know Alison Sheridan very well.                                                 |
| 22:37      | And she has, of course, a podcast.                                                                      |
| 22:39      | And over the last several years, she was doing a really wonderful segment with Bart Bouchots            |
| 22:45      | over in Ireland called Taming the Terminal.                                                             |
| 22:48      | And it was a fantastic series and I didn't know it existed until, oh, I want to say maybe               |
| 22:55      | a year or two ago, Steve Sheridan and Alison's husband decided to collect all those little              |
| 23:01      | episodes and collect them into one multi-part podcast.                                                  |
| 23:05      | And that's really something amazing that all of you if you're interested in learning more               |
| 23:10      | about the terminal, Bart and Alison have this really amazing chemistry together and it's                |
| 23:14      | just really great to see them explain and talk about the terminal and various commands.                 |
| 23:19      | So I would highly recommend this series.                                                                |
| 23:22      | It's in a podcast that you can subscribe to and it's a really wonderful series if you                   |
| 23:25      | want to learn more about various aspects of using terminal.                                             |
| 23:28      | So it's one that I love to listen to.                                                                   |
| 23:30      | It makes me smile.                                                                                      |
| 23:31      | I learn new things.                                                                                     |
| 23:32      | I confirm old things.                                                                                   |
| 23:34      | It's just a wonderful way to learn about the command line.                                              |
| 23:36      | We'll have a link to this in the show notes as well for people because it is definitely                 |
| 23:40      | really useful and I'm going to be, I have plenty of listening material for all of my                    |
| 23:44      | upcoming flights.                                                                                       |
| 23:45      | So I'm happy.                                                                                           |
| 23:46      | The one thing I would add though, if you're going to listen to it, listen to it in front                |
| 23:50      | of a Mac because this is a thing you need to do to learn and listening to terminal commands             |
| 23:56      | on a podcast while you're mowing the lawn is not going to cut it.                                       |
| 24:01      | Absolutely 100% true, David.                                                                            |
| 24:02      | And I would even add to this, if you're on your Mac, you could do a split screen with                   |
| 24:07      | the terminal on one side and on the right side, you should open Bart's web page.                         |
| 24:12      | For every episode, he has a full blown set of notes with all the commands, all the examples             |
| 24:17      | typed out.                                                                                              |
| 24:18      | So really wonderful labor of love that he did there.                                                    |
| 24:20      | So definitely shout out to Bart if you're listening.                                                    |
| 24:23      | Well, that's the page that I've just linked in the show notes for everybody.                            |
| 24:26      | So go check that out because even if you think, oh, I don't need the terminal, it's too complicated.    |
| 24:31      | There'll be something that you can pick up there.                                                       |
| 24:34      | Yeah, I do think for a lot of folks listening, the terminal is this intimidating thing that             |
| 24:39      | they're afraid of.                                                                                      |
| 24:40      | And honestly, you don't need to be.                                                                     |
| 24:42      | There's a couple things you can do in there to wreck your machine, but you have to actually             |
| 24:47      | really try.                                                                                             |
| 24:49      | It's a lot more forgiving than you think it is.                                                         |
| 24:51      | And especially if you just have someone instructing you along, just like Jeff was just doing, he's      |
| 24:56      | just explained how to open an app.                                                                      |
| 24:58      | If you follow that Bart series, you're going to learn a lot more.                                       |
| 25:02      | There's something to be gained from that knowledge.                                                     |
| 25:05      | I agree.                                                                                                |
| 25:06      | I agree.                                                                                                |
| 25:07      | I'll share one more small tidbit about the terminal, which I love to show people.                       |
| 25:10      | And this is a very simple utility.                                                                      |
| 25:12      | This is again in Bash on the command line.                                                              |
| 25:14      | There's a simple utility named C-A-L for calendar.                                                      |
| 25:18      | And a lot of times when I show people things on the terminal, I do something very simple.               |
| 25:23      | And I say, hey, Rose, do you remember what day of the week you were born on?                            |
| 25:27      | And a lot of times people will say, I'm not sure.                                                       |
| 25:31      | So what could you do to find out?                                                                       |
| 25:33      | You could go certainly go to Fantastical or calendar or your favourite calendar app and                |
| 25:38      | then look through the menus and go to the specific date of your birthday and then you'll find           |
| 25:43      | out what it is.                                                                                         |
| 25:44      | However, on the command line, you can do that very quickly by using the calendar or the                 |
| 25:50      | Cal utility.                                                                                            |
| 25:51      | And the way it works is simply you type on the command line C-A-L followed by a space                   |
| 25:57      | the two-digit month that you were born in.                                                              |
| 26:00      | You don't need the day at all, space, and then the year you were born in.                               |
| 26:05      | Then hit return.                                                                                        |
| 26:06      | You'll see a cute little calendar of that specific year, that specific month.                           |
| 26:11      | And then very quickly you can spot the date of your birthday and then find out what day                 |
| 26:15      | you were born in.                                                                                       |
| 26:16      | I was born on a Friday.                                                                                 |
| 26:17      | You were?                                                                                               |
| 26:18      | Did you just do it?                                                                                     |
| 26:19      | I've just done this.                                                                                    |
| 26:20      | I was following your instructions.                                                                      |
| 26:23      | Thank you, Rose.                                                                                        |
| 26:24      | Yes, it's a fun one for sure.                                                                           |
| 26:25      | I teach that one to people all the time.                                                                |
| 26:28      | Yeah, there's some use there.                                                                           |
| 26:30      | I do wonder now, Apple is taking some of the terminal tools out with Catalina as I understand           |
| 26:38      | it.                                                                                                     |
| 26:39      | I don't know all the details.                                                                           |
| 26:40      | I think they're actually switching.                                                                     |
| 26:41      | So at the moment, what we have by default in Mac OS is the Bash terminal, which is what                 |
| 26:45      | JF uses, what I'm familiar with.                                                                        |
| 26:47      | That's what's almost Linux systems.                                                                     |
| 26:49      | And I believe they're switching to ZSH by default.                                                      |
| 26:53      | That is correct.                                                                                        |
| 26:54      | Exactly right.                                                                                          |
| 26:55      | So if you want to continue using Bash, of course, you can.                                              |
| 26:58      | Someone really good to follow who gives great instructions as to how to download the latest             |
| 27:02      | version of Bash is our friend [[Brett Terpstra]].                                                          |
| 27:06      | He can give you instructions.                                                                           |
| 27:07      | But if you prefer to continue using BASH, which stands for Bourne Again Shell, for those                  |
| 27:11      | of you curious about the name, Bourne Again Shell, just like Jason Bourne from the movies,                  |
| 27:16      | you can.                                                                                                |
| 27:17      | You can keep using it.                                                                                  |
| 27:18      | But indeed, Apple, Rose has switched across.                                                            |
| 27:20      | I'm not exactly sure I haven't read about the exact reason why that is, Dr. Drang will                    |
| 27:25      | probably let us know why that is, but you can still use BASH if you like.                               |
| 27:30      | All right.                                                                                              |
| 27:31      | Continuing down the obscure, but interesting, you also use regular expressions.                         |
| 27:37      | Yes.                                                                                                    |
| 27:38      | By now, your audience probably thinks I'm a little bit odd in the way I use my computer,                |
| 27:44      | because of course, we have fantastic tools to search through text and find exactly what                 |
| 27:49      | we need.                                                                                                |
| 27:51      | But I became enamored with regular expressions a long time ago, thanks to someone named Kevin           |
| 27:57      | Skoglund.                                                                                               |
| 27:58      | He did a fantastic course on lynda.com, and I watched it several times.                                 |
| 28:05      | I became enamored with the idea behind so much power and flexibility in searching text                  |
| 28:11      | strings in your files and finding very specific things.                                                 |
| 28:15      | Let me wind back though, because I think some people don't even know what regular expressions           |
| 28:18      | are.                                                                                                    |
| 28:19      | They explain just generally what they are.                                                              |
| 28:22      | Sure.                                                                                                   |
| 28:23      | A regular expression is a type of syntax that basically tells or instructs an engine in                 |
| 28:34      | the terminal to look for specific patterns inside a text file.                                          |
| 28:40      | You can use regular expression, for example, to use and find every instance of a specific               |
| 28:45      | word and a variation of a spelling.                                                                     |
| 28:49      | A common case would be colour, the US spelled way, and colour, the UK and Canada spelled way,             |
| 28:54      | with the U, C, O, L, O, U, R.                                                                           |
| 28:56      | You can, for example, create a very simple regular expression that says, hey, regular                   |
| 29:02      | expression, look for the word colour in this text file, this 20,000 word text file.                      |
| 29:08      | When you find either spelling of colour, replace it with red, for example.                               |
| 29:15      | With one command, you can say, look for the spelling, C-O-L-O-R, C-O-L-O-U-R, either                    |
| 29:20      | or, and replace it with another word, for example, as an example.                                       |
| 29:26      | But you can also do more advanced things, like, well, I'm only interested in finding                    |
| 29:31      | out the word colour when it is preceded by another word.                                                 |
| 29:36      | For example, the article, the, or maybe the colour red, you can be very specific as to                   |
| 29:42      | what it looks for by using what we call look behind and look ahead assertions.                          |
| 29:48      | So with a little bit of time, you learn these commands a little bit at a time, and the best             |
| 29:53      | way to do it, of course, is to learn things that matter to you that you will use, rather                |
| 29:57      | than learn the whole thing.                                                                             |
| 29:59      | And very quickly, you realise that it's quite powerful to be able to search your text files             |
| 30:04      | with that much precision, and by telling specific things.                                               |
| 30:07      | And then on the flip side of that, this is to explain how you can use it.                               |
| 30:12      | When you use an app that supports regular expressions, for example, the one I use mostly                |
| 30:18      | to do find and replace is [[BBEdit]].                                                                      |
| 30:21      | That's a really great one for that.                                                                     |
| 30:23      | Now, [[Drafts]] for Mac supports regular expressions, so you can have fun there, too.                       |
| 30:27      | OmniFocus supports regular expressions, so if you have a database that's really complex                 |
| 30:31      | and you want to find something very specific, you can do it there.                                      |
| 30:35      | But a nice example I can share with you, viewers, is in [[BBEdit]], what I sometimes do, I receive         |
| 30:41      | .ICS files, those are calendar files.                                                                   |
| 30:45      | I could, of course, open the file in Calendar, or in my case, Fantastical, go in there and              |
| 30:52      | modify the events if I want to add or remove something in the names of the events that                  |
| 30:57      | I have up there, if I receive a file from someone.                                                      |
| 31:00      | But rather than do that, what I do instead is I open the ICS file in [[BBEdit]], and I've                  |
| 31:06      | written a regular expressions that changed every instance of the name of the event, but                 |
| 31:11      | only in that one spot in the ICS file, because in ICS files, you sometimes have duplications            |
| 31:17      | between different sections of the calendar file.                                                        |
| 31:20      | You may see the exact same text, but you're only interested in changing the one instance                |
| 31:25      | that is preceded with something specific.                                                               |
| 31:28      | For example, schedule colon space is what you're looking for, and whatever is after that is             |
| 31:34      | what you want to replace.                                                                               |
| 31:37      | What I ended up doing is creating a regular expression that found those things, we call                 |
| 31:40      | those matches, by the way, in that language, so it matches what you want, and then in the               |
| 31:45      | replace string, you can use, in the case of [[BBEdit]], sometimes it's $1.                                 |
| 31:52      | This is when you capture something that you want to replace, and you basically say, hey,                |
| 31:57      | I want to keep the word David, but I want to add a different word after that, so you're                 |
| 32:03      | looking for David, you keep it, you capture it, and then in the replace string, you say,                |
| 32:07      | now instead of having, for example, David Sparks, I want you to write Sparks comma David, and           |
| 32:15      | this is something that's very easy to do using regular expressions that would take you several          |
| 32:20      | steps or maybe a [[Keyboard Maestro]] macro to do in any other way.                                         |
| 32:25      | Yeah, if you think you know search and replace, and you don't know regular expressions, you             |
| 32:29      | really don't know search and replace, it goes so far beyond what you do.                                |
| 32:34      | I use them as well, I'm not what I would call a power user, but I know enough to be dangerous,          |
| 32:41      | and the same thing, I get stuff sent to me all the time on the legal side where I need                  |
| 32:45      | to go through and make very complex search and replaces, and regular expressions is how                 |
| 32:51      | you get that thing rolling, the trick in my mind is to get it into a text format and get                |
| 32:56      | it into [[BBEdit]], I mean [[BBEdit]] was built for regular expressions.                                      |
| 33:01      | The way I learned them was actually the [[BBEdit]] help file, which I found out years later                |
| 33:05      | was written by John Gruber, but Linda has courses on it.                                                |
| 33:09      | I think maybe, Rose, we should probably do regular expressions kind of boot camp episode                |
| 33:15      | for automators.                                                                                         |
| 33:16      | I think that sounds like fun, especially because [[Drafts]] on iOS and shortcuts also support regular       |
| 33:21      | expressions, so I think there's something in there for everybody, even if they on the                   |
| 33:25      | surface of it think that maybe it's not for them, because there's so much you can do.                   |
| 33:29      | I've always wanted to do an MPU, but MPU, that's not really what that show is made for, and             |
| 33:35      | I think we can, maybe that's when we'll add some screencast too, and all right, we'll                   |
| 33:40      | put a pin in that and come back to that.                                                                |
| 33:42      | So J.F., now that we've kind of talked about regular expressions, what are some of the                  |
| 33:46      | ways you're using them to automate?                                                                     |
| 33:49      | So besides using the ICS file to change things, it's essentially searching and replacing text           |
| 33:56      | or inverting different things, putting things in different places, is absolutely 100% using             |
| 34:01      | search and replace.                                                                                     |
| 34:03      | From time to time, if I need to, I can go on the terminal on the command line and use                   |
| 34:09      | the utility `egrep`, which stands for extended global regular expressions.                                |
| 34:14      | So that's also a tool available on the terminal.                                                        |
| 34:16      | But I would say, David, 99% of the time when I use regular expressions, it is in a text                 |
| 34:22      | file when I'm looking for a specific pattern that I want to identify and then act upon.                 |
| 34:27      | I also use regular expressions inside Pathfinder.                                                       |
| 34:31      | They have a great renaming tool that has a regular expression option.                                   |
| 34:36      | It's really, really useful when you're adding something specific to a file.                             |
| 34:40      | I had not thought of that, but that's a really good use.                                                |
| 34:45      | If command R, for those interested, gets you to rename a file.                                          |
| 34:49      | One more thing, maybe I could mention, for viewers who are interested in dipping their                  |
| 34:53      | big toe in there a little bit and just kind of start reading about it, there is actually                |
| 34:57      | a really well-written, simple app on the App Store called Expressions.                                  |
| 35:02      | That's Expressions with an S at the end, and it's a small utility that gives you a lot                  |
| 35:07      | of details about what regular expressions are, what they do.                                            |
| 35:10      | There's an included glossary there, which is really interesting.                                        |
| 35:14      | Of course, I've just scratched the surface, but there's a few things that you can learn,                |
| 35:18      | and I bet you you can identify certain things that would be useful for you if you look into             |
| 35:21      | it a little bit.                                                                                        |
| 35:22      | Finally, Taming the Terminal has a couple of episodes on regular expressions, and Bart                  |
| 35:30      | dives pretty deep into them, and he teaches us some very useful skills.                                 |
| 35:36      | The app I use on iOS is called Pretty Regular Expressions.                                              |
| 35:40      | The people who make that app also have a second app called Text Case, which funnily enough also          |
| 35:45      | modifies the case of text as its name implies, which is something else you can do with a                |
| 35:50      | regular expression if you want to, which I have done before.                                            |
| 35:56      | Maybe not the most intuitive thing to get started with, but a regular expression can                    |
| 36:00      | definitely help you get where you need to go if you're trying to do any kind of complicated             |
| 36:04      | find or replace there.                                                                                  |
| 36:05      | There's pretty regular expressions like you write them and then show you how it's working.              |
| 36:11      | I think that's key, and it's 99 cents.                                                                  |
| 36:16      | It lets you write a pattern, and you put text in the bottom, and then it highlights things              |
| 36:20      | and shows you exactly what you're doing, which is really useful.                                        |
| 36:24      | There's also a website called regex101.com, which does the same thing, but on the internet.             |
| 36:31      | However, if like me, you spend an ordinate amount of time traveling, and you're there                   |
| 36:35      | on a plane going, hmm, does this regular expression work the way I think it does?                       |
| 36:39      | It's really nice to have a little app on your iPhone or iPad that works offline.                        |
| 36:44      | And it's 99 cents.                                                                                      |
| 36:46      | Yes.                                                                                                    |
| 36:47      | Yeah.                                                                                                   |
| 36:48      | All right.                                                                                              |
| 36:49      | It's a win.                                                                                             |
| 36:50      | Yeah, exactly.                                                                                          |
| 36:51      | Get it while they're still in business.                                                                 |
| 36:55      | And no internet connection needed.                                                                      |
| 36:57      | Yeah.                                                                                                   |
| 36:58      | Exactly.                                                                                                |
| 36:59      | This episode of Automators is brought to you by PushCut.                                                |
| 37:02      | I'm really excited to tell you about PushCut.                                                           |
| 37:04      | It allows you to trigger iOS shortcuts based on time and location, so you might have a                  |
| 37:08      | shortcut you want to run at 8 p.m., but only if you're at home, or maybe when you leave                 |
| 37:13      | the office, but only on weekdays.                                                                       |
| 37:15      | Even better, it connects to automation services like Zapier, [[Make\|Integromat]], and if this then               |
| 37:20      | that, so you can actually trigger those online actions without opening any app.                         |
| 37:25      | PushCut is great for DIY automation prompts, like getting a robot to start vacuuming when               |
| 37:30      | you leave the house.                                                                                    |
| 37:32      | If I had to describe PushCut to my friends, which I hope I'm doing right now, I would                   |
| 37:36      | say it is the best way to integrate any online automation with something that happens on                |
| 37:42      | your phone, like shortcuts.                                                                             |
| 37:43      | I personally use it so whenever an article of mine gets published on the sweet setup,                   |
| 37:47      | I get notified and I can run a shortcut which allows me to do a bunch of little automations             |
| 37:52      | in the background, like make a post appear on my WordPress site.                                        |
| 37:56      | I really like that it's so easy to use, and I would recommend PushCut to anybody who wants              |
| 38:00      | to try out automated notifications.                                                                     |
| 38:04      | Go to pushcut.io/automators right now to check it out.                                                  |
| 38:07      | Try all of the features for free and use it for your next automation project.                           |
| 38:11      | Once you've seen what PushCut can do for you, you can get a subscription for $1 a month                 |
| 38:15      | for the basic, or $2 a month for the pro version.                                                       |
| 38:19      | That URL again, pushcut.io/automators.                                                                  |
| 38:22      | Go there now, get automating, you're going to love it.                                                  |
| 38:26      | Our thanks to PushCut for their support of automators and all of Relay FM.                             |
| 38:31      | So we're just coming around to iOS now.                                                                 |
| 38:36      | I know that you're not a huge iOS user, obviously, with your love of the terminal.                      |
| 38:41      | When they put a terminal on your iPad, maybe you'll be a little happier, but do you use                 |
| 38:45      | [[Drafts]] or shortcuts at all?                                                                             |
| 38:47      | Absolutely.                                                                                             |
| 38:48      | I use both of them on a very regular basis.                                                             |
| 38:50      | That's like so many of us who use the app is exactly where I go when I want to enter anything           |
| 38:56      | that has to do with text, whether it's dictating.                                                       |
| 38:58      | I have, of course, in my today view, I have the [[Drafts]] widget there, which is so useful                 |
| 39:05      | and so well written by Greg, so wonderful.                                                              |
| 39:08      | And yes, I do use [[Drafts]] very extensively.                                                              |
| 39:10      | I like to use tags and workspaces, and it's just an incredible app.                                     |
| 39:15      | I have set up a set of custom actions that I use as well, whether it's sending an email                 |
| 39:21      | to somebody specific right from a draft or sending it to Fantastical and parse it out                   |
| 39:26      | there.                                                                                                  |
| 39:27      | So many incredible uses for [[Drafts]], and I'm a big, big [[Drafts]] user.                                     |
| 39:31      | I subscribe to [[Drafts]] Pro.                                                                              |
| 39:33      | I have it on my Mac, and it's my go-to plain text app for many, many things for sure.                    |
| 39:39      | And as far as shortcuts, David, you are teaching me so much about shortcuts right now, so thank         |
| 39:44      | you for that.                                                                                           |
| 39:45      | Jeff is helping me with the edits on the new shortcuts field guide, which I feel bad because            |
| 39:50      | I look at the air table, and there's like 60 videos I've thrown at him in the last three                |
| 39:55      | or four weeks.                                                                                          |
| 39:56      | Yeah.                                                                                                   |
| 39:57      | Well, thankfully, they're all typically in the five-minute range, but I love that work                  |
| 40:01      | so much, so thank you for asking me to help you with that.                                              |
| 40:04      | But yeah, I'm learning so much.                                                                         |
| 40:06      | David and Rosie are both astounding shortcuts users, and my use is a small fraction of what             |
| 40:14      | you do, but I get interested every day.                                                                 |
| 40:16      | And my, basically, the way I think about shortcuts is much the same way as I do automation on           |
| 40:22      | the Mac.                                                                                                |
| 40:23      | I think about a need.                                                                                   |
| 40:24      | I think about something I'd like to do better, and I create new ones very frequently, and               |
| 40:28      | I enjoy seeing the app develop.                                                                         |
| 40:30      | I have someone that I see quite often here in Las Vegas who's also a huge automated                     |
| 40:35      | fan, even gave him a sticker the other day, he was super pleased, and he's someone that                 |
| 40:41      | is so invested in it and finding all kinds of really great ways to automate our life                    |
| 40:47      | and make things easier.                                                                                 |
| 40:48      | So it's a fantastic app, and I use both of them for sure.                                               |
| 40:52      | So what are you, what are you doing with them?                                                          |
| 40:55      | Anything interesting?                                                                                   |
| 40:56      | Well, let's see.                                                                                        |
| 40:57      | What are some of the things as far as shortcuts, oh, you know, here in Las Vegas, it's going            |
| 41:00      | to come as a surprise to a lot of you, but I sometimes have to go very near here, and                   |
| 41:05      | I don't need or want to get in a car just for a short John here.                                        |
| 41:10      | So I get on a city bus sometimes, and so I have a shortcut that tells me when the next                  |
| 41:15      | 206, in my case, is going to be so I can actually trigger a shortcut that shows me the schedule         |
| 41:21      | right there.                                                                                            |
| 41:22      | So that's kind of a novelty, very personal use of the app.                                              |
| 41:25      | I use that all the time.                                                                                |
| 41:26      | Is that a URL callback?                                                                                 |
| 41:28      | How are you doing it?                                                                                   |
| 41:29      | Well, the actual app, which is not only for here, it's an app that targets many cities.                 |
| 41:36      | The app is called Transit, and they have support for shortcuts triggered with Siri.                     |
| 41:42      | So I was very happy when I saw the update.                                                              |
| 41:44      | So it's an app called Transit.                                                                          |
| 41:45      | So I kind of tweaked the shortcut in there.                                                             |
| 41:47      | So no URL callbacks in that case.                                                                       |
| 41:49      | Nice.                                                                                                   |
| 41:50      | That's very useful.                                                                                     |
| 41:51      | And nowadays, I would say that Launch Center Pro has probably taken a backseat to shortcuts             |
| 41:58      | these days because I find that I'm able to do a lot of things I used to do in Launch Centre             |
| 42:02      | Pro without having to confirm, for example, a classic example would be calling someone.                 |
| 42:08      | When you set up a shortcut to call someone specific in Launch Center Pro, I'm pretty                    |
| 42:12      | sure it's still the same way.                                                                           |
| 42:14      | The app has to require you to confirm and tapping OK before the call is made.                           |
| 42:19      | That's not the case in shortcuts.                                                                       |
| 42:20      | So for example, if I want to place a call back east to talk to my parents, I can do                     |
| 42:24      | it with the shortcuts that I can trigger with my voice or at the symbol type of button.                 |
| 42:29      | So those are very useful shortcuts that I use.                                                          |
| 42:32      | Other than that, nothing super complicated and multi-step yet.                                          |
| 42:38      | Again, I'm doing a lot of thinking about what would make sense in my workflow.                          |
| 42:43      | And again, when I see what you've come up with, David, and also Rose, you guys are an                   |
| 42:47      | inspiration for sure.                                                                                   |
| 42:49      | And I can see myself certainly expanding on my use of shortcuts in the next few months.                 |
| 42:53      | It is fun to make big ones.                                                                             |
| 42:55      | But to tell you the truth, I think the real benefit of shortcuts is the smaller shortcuts,              |
| 43:00      | you know, the three to five-step shortcuts that just solve a simple problem.                            |
| 43:05      | And I think that's really what they're aiming for anyway.                                               |
| 43:08      | Rose, do you do much URL callback at this point with the iOS 13 and the way things work                 |
| 43:14      | now?                                                                                                    |
| 43:15      | Not really.                                                                                             |
| 43:16      | Most of the time, honestly, if an app is not willing to support shortcuts, then I am                    |
| 43:23      | now at the point where I'm seriously considering dropping the application rather than continuing        |
| 43:29      | to use [[URL Schemes]].                                                                                     |
| 43:31      | Because with the new parameterised shortcuts, also Apple, in their [[WWDC]], they were very                 |
| 43:39      | clear that shortcuts is the future and [[URL Schemes]] are insecure, which means that at                    |
| 43:45      | some point, at least from my perspective, they're going to be either dropping them or                   |
| 43:50      | blocking them or something.                                                                             |
| 43:53      | So I would very much avoid creating [[URL Schemes]] where possible.                                         |
| 43:58      | So when I do need to use them, I tend to use Launch Center Pro to generate them, to get                 |
| 44:05      | me started on that.                                                                                     |
| 44:06      | Yeah, it's interesting because with Workflow, everything was [[URL Schemes\|URL scheme]], anything that was              |
| 44:11      | of any interest.                                                                                        |
| 44:13      | And really, it's just not the case anymore.                                                             |
| 44:16      | I'm working on a new field guide, and I'm going to include a [[URL Schemes\|URL scheme]] section, but                    |
| 44:22      | it's hard to even find good examples of what you want to use it with at this point.                     |
| 44:25      | I mean, we used to always use it with weather and all this stuff, but they've added all                 |
| 44:28      | those features now.                                                                                     |
| 44:31      | And the applications are providing a direct conduit to shortcuts now, which is safer and                |
| 44:36      | more secure.                                                                                            |
| 44:38      | And like Rose, I don't really want to use [[URL Schemes]].                                                  |
| 44:41      | I feel like they're more trouble than they're worth because they break and they aren't as               |
| 44:46      | stable as the new system.                                                                               |
| 44:48      | I should add a note, of course, that of course, parameterised shortcuts are only available              |
| 44:53      | in iOS 13.                                                                                              |
| 44:54      | So even when iOS 13 launches, not every application is going to be ready to support this straight       |
| 45:00      | off the bat.                                                                                            |
| 45:01      | Depending on what their application is, they may have had a considerable amount of work                 |
| 45:04      | to do this summer, thanks to Apple's annual announcement, or they may have not had so                   |
| 45:09      | much work, but they had other priorities that they needed to get fixed.                                 |
| 45:13      | But if they're not planning on supporting parameterised shortcuts and they're just sticking             |
| 45:17      | with [[URL Schemes]], then, well, I would at the very least caution any developer in that case              |
| 45:21      | to be considering and why they're doing that, is there something that they can only offer               |
| 45:27      | through [[URL Schemes]] that they can't offer through a parameterised shortcuts and maybe                   |
| 45:32      | add a little documentation to the [[URL Schemes\|URL scheme]] page there as to why you're not doing parameterised        |
| 45:37      | shortcuts instead.                                                                                      |
| 45:38      | But with parameterised shortcuts, you actually get the app appearing in shortcuts and everything        |
| 45:43      | is so much easier.                                                                                      |
| 45:44      | Yes.                                                                                                    |
| 45:45      | It's much easier for anybody, so I could put a shortcut action in front of my mom.                      |
| 45:50      | For example, I've been beta testing the [[Drafts]] app, which will be released with iOS 13, hopefully,      |
| 45:56      | if all goes to plan for agile tortoise.                                                                 |
| 45:59      | And the new shortcuts actions that they've got are great because you can input the text                 |
| 46:05      | and everything, and you can specify exactly what everything should do, tags, things like                |
| 46:09      | that.                                                                                                   |
| 46:10      | And that's great.                                                                                       |
| 46:11      | It's easier for somebody who doesn't know what they're doing with this or who, quite                    |
| 46:16      | frankly, doesn't want to waste the time messing around with the [[URL Schemes\|URL scheme]] to modify than               |
| 46:21      | it is to probably editing a very long string of text in a very small URL box on the knife               |
| 46:27      | app.                                                                                                    |
| 46:28      | Is it any surprise that [[Drafts]] is at the front of this to anyone?                                       |
| 46:34      | This is my really not surprised face, but very pleased.                                                 |
| 46:38      | J.F., you sent us a note about something I want to talk about that I think everybody                    |
| 46:42      | can benefit from, and it's just two words, [[Dropbox]] plus ChronoSync.                                     |
| 46:47      | Yes, [[Dropbox]] plus ChronoSync, big fan, big fan.                                                         |
| 46:50      | Automators need to know about [[Dropbox]] plus ChronoSync.                                                  |
| 46:52      | Well, actually, ChronoSync plus anything, really, automators should know about.                         |
| 46:56      | But what are you doing with those two?                                                                  |
| 46:58      | Well, it goes back a little bit to the workflow that Don and I have set up.                             |
| 47:03      | So screencasts online, of course, very busy.                                                            |
| 47:05      | We have a lot going on there.                                                                           |
| 47:07      | We do have a team [[Dropbox]] account that we share, and we've got a wonderful file structure               |
| 47:12      | and organisation there.                                                                                 |
| 47:13      | It's very well organised, but Don and I both believe that no matter what, you should have               |
| 47:19      | a completely local copy of the content of [[Dropbox]], somewhere else on your system.                       |
| 47:25      | In my case, it is on a Lacie mobile SSD drive that I have hanging from my iMac Pro, very                |
| 47:33      | reliable drive as drives go, of course.                                                                 |
| 47:36      | But I have a copy, a whole copy of that [[Dropbox]] file structure on my drive.                             |
| 47:41      | And so that way, I can work on it offline if I need to, because we are doing synchronising              |
| 47:49      | between those two on a very regular basis.                                                              |
| 47:51      | However, if I'm working on a show, I don't always want automation to happen, syncing                    |
| 47:57      | to happen.                                                                                              |
| 47:58      | And the app that I used to do that is ChronoSync.                                                       |
| 48:00      | I've used ChronoSync forever.                                                                           |
| 48:02      | And what ChronoSync can do very well is synchronise those two instances.                                |
| 48:07      | So the [[Dropbox]], that's online for the team with my local copy right here on my iMac                     |
| 48:13      | Pro.                                                                                                    |
| 48:14      | And Don does the same thing out there in the UK.                                                        |
| 48:16      | And so the advantage is multi-fold, right?                                                              |
| 48:18      | We always have local copies of files.                                                                   |
| 48:20      | We always have up-to-date files.                                                                        |
| 48:23      | And when we're working, we have the opportunity or the option to suspend the scheduling,                |
| 48:27      | because what we do is we automate the syncing of those folders.                                         |
| 48:31      | So when I get to my desk in the morning here in Las Vegas, it's already midday for Don.                 |
| 48:36      | And so I've gotten several notifications that folders were synced with no errors.                       |
| 48:41      | So I know I'm up to speed.                                                                              |
| 48:42      | I know I can start my work.                                                                             |
| 48:44      | So I've set up quite a few.                                                                             |
| 48:46      | And they're super useful to make sure everybody has the right files at all times.                       |
| 48:52      | Now I did the same thing for our project, David, for the shortcuts field guide.                         |
| 48:56      | So of course, we share a [[Dropbox]] file structure, and I did the exact same thing.                        |
| 48:59      | I made a full local copy of the [[Dropbox]] contents.                                                       |
| 49:03      | And I have one, for example, I know you submit new videos, new [[ScreenFlow]] files to me on               |
| 49:09      | a regular basis.                                                                                        |
| 49:10      | So I have a script in ChronoSync that says, fetch David's submissions.                                  |
| 49:15      | In other words, go look in that folder in [[Dropbox]] and see if there's anything new.                      |
| 49:19      | And if there is, go ahead and grab it and sync it across.                                               |
| 49:21      | Now this isn't different from a sync, which would be in two directions.                                 |
| 49:26      | And you would end up with all the files back in your folder, and we didn't want that.                   |
| 49:30      | You and I talked about that.                                                                            |
| 49:32      | So the way I do it, I do fetch David's submissions, and they come to me, and they don't go back         |
| 49:39      | to you.                                                                                                 |
| 49:40      | So very useful stuff.                                                                                   |
| 49:41      | ChronoSync and [[Dropbox]] together.                                                                        |
| 49:42      | Dream team right there.                                                                                 |
| 49:43      | Yeah.                                                                                                   |
| 49:44      | ChronoSync really was a big deal before things like [[Dropbox]] existed, because so many of us              |
| 49:49      | had to kind of roll our own synchronisation systems, and that's what this tool was built                |
| 49:54      | for.                                                                                                    |
| 49:55      | But I paid for it, I know over 10 years ago, and they've always promised that you buy it                |
| 50:02      | once and you get free upgrades forever, and they've lived up to it.                                     |
| 50:06      | But they continue to evolve that app.                                                                   |
| 50:08      | It's now part of fetch app, a simplified version.                                                       |
| 50:12      | It's called, it's like light, the light version, but it works just fine.                                |
| 50:17      | In fact, that's the one I've been using, even though I have a license for the big version.              |
| 50:20      | I just used the set app version.                                                                        |
| 50:23      | And it's fine, and there's so many things you do where you want to spin off a local                     |
| 50:30      | copy of something.                                                                                      |
| 50:32      | One of the ways I use this is it automatically copies everything out of my legal and my media           |
| 50:38      | files into one of the archive drives under my desk, which so it's always automatically                  |
| 50:45      | making copies of that stuff.                                                                            |
| 50:47      | And then when I want to make an offsite secure encrypted backup, I've got a source for that.            |
| 50:53      | Just because of all these ChronoSync scripts running.                                                  |
| 50:55      | And then you can also save those backups of the backups as ChronoSync scripts as well.                 |
| 51:01      | So you just plug in a drive and ChronoSync opens up and says, I see you have this.                     |
| 51:05      | You want me to do my job and you say, yeah, and it does it all in the background.                       |
| 51:09      | It's an outstanding tool that combines automation with backup in a way that I don't think anything      |
| 51:15      | else does.                                                                                              |
| 51:16      | I agree.                                                                                                |
| 51:17      | And I use the same, by the way, you and I both, it is part of set app.                                  |
| 51:21      | The app is called ChronoSync Express, and it's plenty powerful for what you have to                    |
| 51:25      | do.                                                                                                     |
| 51:26      | I noticed it was there.                                                                                 |
| 51:27      | And just like you, David, I have a license to the full version, but it was right there                  |
| 51:31      | in set app.                                                                                             |
| 51:32      | And on the day I set up our workflow, the one that you and I are using, I saw ChronoSync               |
| 51:37      | Express and it works just fine.                                                                         |
| 51:39      | I've linked both of those in the show notes, the full version as well as the express version,           |
| 51:43      | which is you can purchase the express version directly from Econ Technologies, the makers               |
| 51:48      | of ChronoSync, or you can get it through set up.                                                       |
| 51:51      | And if you've already got set up, it's just another wonderful way of getting your money's               |
| 51:55      | worth.                                                                                                  |
| 51:56      | Yeah.                                                                                                   |
| 51:57      | That's a nice workflow, and it sounds like you've been using it for a while.                            |
| 52:01      | Yes.                                                                                                    |
| 52:02      | Yes, I have.                                                                                            |
| 52:03      | And it's been really wonderful to know that.                                                            |
| 52:05      | It just gives you peace of mind.                                                                        |
| 52:07      | And I love what you mentioned about being able to backup things through an archive drive.               |
| 52:11      | I mean, anything you don't have to sit down and do manually, there's a much bigger chance               |
| 52:16      | it will get done, and you'll be protected, you'll have to write backups.                                |
| 52:19      | If you have to rely, as we used to many, many years ago, how else could we get an iPhone                |
| 52:25      | backup but to connect it to a computer?                                                                 |
| 52:27      | Those days are gone, thankfully.                                                                        |
| 52:29      | But back then, it was like, oh my god, if I didn't back up my iPhone for a month and                    |
| 52:33      | it went into the pool, I'd lose a ton of stuff.                                                         |
| 52:36      | And thanks to automation tools like these, we don't have to worry about any of that anymore.            |
| 52:40      | Well, that's the goal with this show, honestly, is to find those friction points in your life           |
| 52:44      | and erase them with automation.                                                                         |
| 52:47      | And that's why we have folks on every week, and we keep doing it.                                       |
| 52:50      | And JF, you certainly have helped us.                                                                   |
| 52:54      | So today, we learned about some good ideas for [[ScreenFlow]], or frankly, any complex application.          |
| 52:59      | I love the idea of chaining commands together, and you really have opened my eyes to doing              |
| 53:03      | that more often.                                                                                        |
| 53:04      | I love that.                                                                                            |
| 53:05      | And hopefully, we made some terminal and regular expression converts today as well.                     |
| 53:10      | JF, where can folks find you?                                                                           |
| 53:12      | Oh, as far as finding me online, quite simple.                                                          |
| 53:15      | I'm not super active on Twitter, but you can find me there.                                             |
| 53:18      | My handle is JF Brissette without the vowels, so that's JFBRSSTT on Twitter.                                 |
| 53:27      | So that's where you'll find me.                                                                         |
| 53:28      | And come over and say hi.                                                                               |
| 53:31      | Love to hear from you all.                                                                              |
| 53:32      | All right.                                                                                              |
| 53:33      | I have written down here a regular expression show, Rose.                                               |
| 53:37      | I think we're going to do it.                                                                           |
| 53:38      | We're just going to have to do it.                                                                      |
| 53:40      | Yeah.                                                                                                   |
| 53:41      | I mean, you're not really twisting my arm because I love regular expressions.                           |
| 53:44      | I spent 45 minutes playing with regular expressions earlier today because that's a kind of automation   |
| 53:48      | nerd I am.                                                                                              |
| 53:49      | So we'll come back to that.                                                                             |
| 53:51      | I want to do that, but the trick is doing it with an audio podcast.                                     |
| 53:54      | But if any audio podcast could do it, the automators can.                                               |
| 53:57      | So we'll figure it out.                                                                                 |
| 53:59      | And gang, we actually have additional stuff on our outline with JF, but we ran out of                   |
| 54:04      | time.                                                                                                   |
| 54:05      | So that just means, JF, that you're going to come back at some point and we're going                    |
| 54:07      | to continue talking.                                                                                    |
| 54:08      | Is that okay?                                                                                           |
| 54:09      | That's awesome.                                                                                         |
| 54:10      | It would be a pleasure.                                                                                 |
| 54:11      | I would love to come back.                                                                              |
| 54:12      | Thank you, guys.                                                                                        |
| 54:13      | Thanks to our sponsors for this episode, ExpressVPN and PushCut.                                        |
| 54:17      | We are the Automators and we'll see you in a couple of weeks.                                           |
| 54:20      | Goodbye.                                                                                                |
