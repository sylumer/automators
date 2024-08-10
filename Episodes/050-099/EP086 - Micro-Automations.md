---
status: "incomplete"
fc-date:
  year: 2021
  month: 10
  day: 08
fc-category: "podcast"
podcast: "Automators"
published: 2021-10-08
duration: 5804
formattedduration: "01:36:44"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/86"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators086.mp3"
episode: 86
title: "86: Micro-Automations"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Micro-Automations! It's those tiny little automations that can make your life easy. We've been building them and today we're sharing them.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 086 Discussion](https://talk.automators.fm/t/86-micro-automations/12399)

# Sponsors
- [[Privacy (Sponsor)|Privacy]] - Smarter payments.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Communicate Smarter.
- [[Stripe (Sponsor)|Stripe]] - Learn more about how Stripe and their products can support your business.

# Show Notes
- [OSA Script Plugin for Stream Deck](https://github.com/gabrielperales/streamdeck-osascript) - To run AppleScript
- [RosemaryOrchard/AppleScripts](https://github.com/RosemaryOrchard/AppleScripts) - Rosemary Orchard's AppleScripts
- [Welcome to Bunch - Bunch.app](https://bunchapp.co/)
- [Automators #75: Bunches of Automation, with Jay Miller - Relay FM](https://www.relay.fm/automators/75)
- [SystemPreferences | Apple Developer Documentation](https://developer.apple.com/documentation/devicemanagement/systempreferences) - com.apple.preference ... names are here
- [Late Night Software | The home of Script Debugger](https://latenightsw.com/)
- [Unclack for macOS](https://unclack.app/#/)
- [FastScripts](https://redsweater.com/fastscripts/)
- [Execute an AppleScript (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Execute_an_AppleScript)
- [AppleScript - Drafts User Guide](https://docs.getdrafts.com/docs/automation/applescript#using-drafts-from-applescript) - Look right at the bottom of the page
- [PopClip for Mac](https://pilotmoon.com/popclip/)
- [PopClip Extensions](https://pilotmoon.com/popclip/extensions/)
- [RosemaryOrchard/PopClip-Extensions](https://github.com/RosemaryOrchard/PopClip-Extensions)
- [PopMaker - Brett Terpstra.com](https://brettterpstra.com/projects/popmaker/)
- [Brett's PopClip Extensions - Brett Terpstra.com](https://brettterpstra.com/projects/bretts-popclip-extensions/)
- [Control PopClip using AppleScript - Pilotmoon Software Knowledge Base](https://docs.pilotmoon.com/article/36-controlling-popclip-using-applescript) - Use this to make PopClip appear with a keyboard shortcut
- [Make your own PopClip Extensions - Pilotmoon Software Knowledge Base](https://docs.pilotmoon.com/article/40-make-your-own-popclip-extension)
- [pilotmoon/PopClip-Extensions: Documentation and source code for PopClip extensions.](https://github.com/pilotmoon/PopClip-Extensions)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome to The Automators, I'm David Sparks and joined by my co-host, Rosemary Orchard.                 |
| 00:08      | This is The Automators, where we talk about how to automate your technology to do your                  |
| 00:12      | work for you.                                                                                           |
| 00:13      | Hello, Rosemary Orchard.                                                                                |
| 00:14      | How are you today?                                                                                      |
| 00:15      | I'm good, David.                                                                                        |
| 00:16      | I've been automating all the things, not that this is a different usual.                                |
| 00:20      | I've been focusing on tiny things recently and it's been a lot of fun.                                  |
| 00:24      | How are you?                                                                                            |
| 00:25      | Yeah, you and I were talking about it and you've come up with a bunch of little automations             |
| 00:29      | which I think I'm a big fan of.                                                                         |
| 00:32      | I think that for a lot of people, they don't want to write 50 line [[AppleScript\|AppleScripts]] or whatever.           |
| 00:41      | But just really short bits of automation that you can put in to grease the skids of your                |
| 00:47      | technology is a good idea.                                                                              |
| 00:49      | You've got a bunch of different categories here today, so we're going to dig into that.                 |
| 00:54      | Before we do though, I just want to thank everyone for the support with the purchase                    |
| 00:57      | of the [[DEVONthink]] Field Guide, I know a lot of the Automator's audience did that                     |
| 01:01      | and I appreciate it.                                                                                    |
| 01:03      | Now, Rose and I are going to do at some point in the future a show on [[DEVONthink]] Automation          |
| 01:08      | because I covered it in the Field Guide, but there's a lot you can do with the automation               |
| 01:13      | there.                                                                                                  |
| 01:14      | So that's a future show, but it's not if you have any questions on that.                                |
| 01:18      | But today, we're going to be talking about short little bits of automation and then maybe               |
| 01:24      | at the end, we're going to get into Rose's new gear.                                                    |
| 01:27      | Yeah.                                                                                                   |
| 01:28      | I mean, we definitely need to have a look at this purple M1 iMac, David, because it's                   |
| 01:33      | so gorgeous and it works so well.                                                                       |
| 01:35      | But we'll get back to that in a bit because I've been writing AppleScript again.                       |
| 01:39      | AppleScript, David.                                                                                    |
| 01:40      | All the AppleScript.                                                                                   |
| 01:41      | Yes.                                                                                                    |
| 01:42      | AppleScript.                                                                                           |
| 01:43      | It's still a thing.                                                                                     |
| 01:44      | It is.                                                                                                  |
| 01:45      | I hear that once I'm off from people saying, should I learn AppleScript or not?                        |
| 01:50      | And I do have a little bit of a qualification.                                                          |
| 01:53      | I think if you're going to be doing a lot of automation for iPhone and iPad, if you're                  |
| 01:58      | going mobile, I think JavaScript will serve you better at this point because AppleScript               |
| 02:03      | isn't over there.                                                                                       |
| 02:04      | And I wish that Apple had put Apple events and AppleScript into the iPad and iPhone                    |
| 02:09      | because AppleScript is really quite powerful.                                                          |
| 02:12      | But if you work at the Mac, sometimes there are automation problems for which there is                  |
| 02:19      | no solution, but an AppleScript.                                                                       |
| 02:22      | And I find myself still writing it often.                                                               |
| 02:25      | Yeah.                                                                                                   |
| 02:26      | And honestly, some of these were created, like there are other ways to do this stuff.                   |
| 02:32      | But equally, this was a very efficient way of doing things.                                             |
| 02:36      | And also it means that I can reuse these AppleScripts in multiple different places.                    |
| 02:40      | Okay.                                                                                                   |
| 02:41      | So I can put them, I can use the USA plugin for [[Stream Deck]].                                            |
| 02:45      | We'll have a link to that one in the show notes to run an AppleScript from my Stream                   |
| 02:50      | Deck directly.                                                                                          |
| 02:51      | Or I can include the same text in a bunch file so that I can run it as part of a setup                  |
| 02:57      | for when I'm switching.                                                                                 |
| 02:58      | So for example, before the show today, I use Bunch to launch my record automator setup.                 |
| 03:04      | And one of the things it did is it opened system preferences to the sound pane.                         |
| 03:08      | Well, it's kind of tricky to do that in any way, but AppleScript, but with AppleScript,               |
| 03:13      | it was really easy to do and works perfectly.                                                           |
| 03:16      | And so things like that, being able to write just a few words, it really is just a few                  |
| 03:23      | words to have it do something that you can't necessarily otherwise do is really useful.                 |
| 03:30      | Yeah.                                                                                                   |
| 03:31      | And so the specific problem that you're talking about is getting to a specific system setting           |
| 03:36      | pane.                                                                                                   |
| 03:37      | And that is actually not so easily automated.                                                           |
| 03:42      | I mean, Apple doesn't really have a like, for instance, the new shortcuts from act is                   |
| 03:48      | doesn't have commands to open a specific settings panel.                                                |
| 03:53      | And sometimes there are settings panels that you need to get into.                                      |
| 03:55      | And sometimes they're two or three clicks deep into the system.                                         |
| 03:59      | The other problem with the system preferences panel on the Mac that I find is I just find               |
| 04:05      | the organisation of it completely inscrutable.                                                          |
| 04:09      | I don't really understand the organisation.                                                             |
| 04:11      | Yeah.                                                                                                   |
| 04:12      | It's been so long the other day looking for the security and preferences pane because                   |
| 04:16      | I just kept missing it.                                                                                 |
| 04:17      | I forgot that it was a house I was looking for a key.                                                   |
| 04:19      | Yeah.                                                                                                   |
| 04:20      | And it was just one of those things where it's like, oh, okay, this again, you know, and                |
| 04:27      | it happens, you know, to all of us, we're looking for something and we just, we can't                   |
| 04:31      | see it because it's right there in front of our face, but equally, you know, just being                 |
| 04:34      | able to go, hey, I frequently use these two system preferences panes.                                   |
| 04:40      | I will just, you know, put, I'll just put those in my [[Stream Deck]] or I'll have a little                 |
| 04:46      | [[Alfred]] workflow that just runs the AppleScript because you can do that with [[Alfred]]                     |
| 04:51      | as well and opens it for me.                                                                            |
| 04:54      | And being able to do that, it's easy.                                                                   |
| 04:55      | Of course, actually, you can just open a specific system preferences pane from [[Alfred]].                  |
| 04:59      | If I open [[Alfred]] and I type sound, you can jump straight to the sound system preferences                |
| 05:03      | pane, but for other AppleScripts, that could be useful too.                                            |
| 05:06      | But yeah, you know, it is surprisingly difficult to do what you would think was a basic thing           |
| 05:12      | on micros at times.                                                                                     |
| 05:13      | Yeah.                                                                                                   |
| 05:14      | They agreed.                                                                                            |
| 05:15      | And, and that's where these tiny AppleScripts can come in handy because I think the thing              |
| 05:21      | that to understand about AppleScript is that it addresses applications directly, you                   |
| 05:28      | know, and yeah, that's done not only by Apple, you know, Apple in this case, Apple has created          |
| 05:35      | AppleScript hooks into specific views of the system preferences, but also third party                  |
| 05:40      | applications.                                                                                           |
| 05:41      | Like I was telling Rose before we started today, recently wrote an AppleScript where                   |
| 05:45      | if I'm in OmniFocus and I have a task selected and I hit the number pad one, it defers it               |
| 05:52      | out one day from today, you know, and it's just a little script that changes the defer                  |
| 05:56      | date with, but that is addressable via AppleScript and OmniFocus.                                      |
| 06:00      | And I don't think there's any other way to do that.                                                     |
| 06:02      | I mean, there is, there is no shell script or a JavaScript that I'm aware of that can                   |
| 06:07      | go on OmniFocus and change a parameter of a record.                                                     |
| 06:11      | And that's why AppleScript is still worthy of, you know, of learning and fiddling with.                |
| 06:16      | But, but Rose did, and this is kind of something I want to focus on here for a minute is she            |
| 06:22      | put together all these little tiny scripts that we can all use and then you put them                    |
| 06:28      | up on GitHub.                                                                                           |
| 06:29      | Yeah.                                                                                                   |
| 06:30      | So there's a link to this in the show notes, I just put it there myself to make sure that               |
| 06:34      | it's there.                                                                                             |
| 06:35      | It's the second link.                                                                                   |
| 06:36      | The first one is the [[Stream Deck]] plugin to run AppleScript because I know you're probably              |
| 06:38      | going to want a way to use this directly before that.                                                   |
| 06:41      | But they're just all there in the GitHub repo.                                                          |
| 06:44      | So there's syspref sound, which in case people can't guess is system preferences sound pane.            |
| 06:50      | There's also syspref update, which is system preferences update pane.                                   |
| 06:55      | And then there's some other ones as well, because I found recently one of the things                    |
| 06:58      | that I end up doing a lot is I, I copy some stuff and then I want to put it in [[Drafts]].                  |
| 07:03      | Now I could use PopClip, which we're going to come back to later in the show because                   |
| 07:07      | I have been using PopClip a lot, but I don't have PopClip in some applications just because           |
| 07:13      | it it ends up getting in the way of what I'm doing, especially coding all day long.                     |
| 07:17      | It would be very frustrating if it was popping up all the time in my code editor, but sometimes         |
| 07:21      | they still need to get that text into [[Drafts]].                                                           |
| 07:24      | And so I end up copying it, and then I just hit a button on my [[Stream Deck]].                             |
| 07:29      | And that runs an AppleScript to open it in [[Drafts]].                                                     |
| 07:34      | And it just creates a new note with that AppleScript with with my clipboard.                           |
| 07:39      | And it's pretty easy, I have to say, David.                                                             |
| 07:41      | I was impressed when I was looking at all this stuff at how easy it was actually to                     |
| 07:47      | write some of these, because I'm somebody who doesn't really end up writing a lot of                    |
| 07:51      | AppleScript just because there are alternatives most of the time for what I need.                      |
| 07:56      | But as people who have tried JXA before, that's JavaScript for Automation on Mac, it was supposed       |
| 08:02      | to be the successor to AppleScript.                                                                    |
| 08:04      | It's bye.                                                                                               |
| 08:05      | Okay, so AppleScript, you can write something in AppleScript.                                         |
| 08:09      | So say for example, I'm just going to say tell application [[Drafts]] to create a new clipboard             |
| 08:15      | with a new note with a clipboard.                                                                       |
| 08:17      | It's actually to make new [[Drafts]] with properties, content, the clipboard, but you can do that.          |
| 08:22      | You can write theoretically the exact same thing, but in JavaScript.                                    |
| 08:27      | And it won't work.                                                                                      |
| 08:28      | Well, that particular one might work, but there will be things where you've written                     |
| 08:32      | and you're technically having it run the exact same commands in AppleScript and in JavaScript          |
| 08:37      | in the JavaScript just doesn't work or bugs out or something.                                           |
| 08:40      | And that's not JavaScript, the languages fault.                                                         |
| 08:43      | It's somehow Apple didn't quite hook everything into Apple events quite the same way.                   |
| 08:47      | So things just don't work very well.                                                                    |
| 08:50      | And it's a shame because I actually, I spent about 50% of my time developing in JavaScript.             |
| 08:57      | And so it'd be really good if I could reuse those skills with Automation.                               |
| 09:00      | So I actually put my skills in project with JavaScript to use a different way, David,                   |
| 09:05      | this week.                                                                                              |
| 09:06      | And I wrote a couple of bookmarklets to get some data from a web page so that I can easily              |
| 09:10      | copy it and use it elsewhere.                                                                           |
| 09:12      | But it is very easy to write a single line of AppleScript and have it do great things.                 |
| 09:18      | Yeah.                                                                                                   |
| 09:19      | I would recommend if you're unfamiliar with [[AppleScript]], if you want to do the proper                  |
| 09:25      | thing and get a book on it, I think [[Sal Soghoian\|Sal Soghoian's]] AppleScript one, two, three is probably              |
| 09:31      | the book to start with.                                                                                 |
| 09:33      | There are other ones out there that are good too, but Sal's a friend and when I read it,                |
| 09:38      | I hear his voice and I took his course at Macworld and I think, you know, he's the guy                  |
| 09:43      | who was writing AppleScript for Apple for so long.                                                     |
| 09:47      | But the, but another good way to learn AppleScript, honestly, is to grab somebody else's               |
| 09:53      | AppleScript and start fiddling with it.                                                                |
| 09:56      | And that's basically how I created that OmniFocus script is I started looking at a bunch of             |
| 10:01      | previously created OmniFocus scripts that other people made and I started twisting the dials            |
| 10:07      | on it and making changes until I got it working the way I want it.                                      |
| 10:11      | And then I just, you know, put it into a [[Keyboard Maestro]] trigger and use the number pad as             |
| 10:16      | the trigger for the script.                                                                             |
| 10:19      | Roses scripts here are very readable.                                                                   |
| 10:22      | Let's start with the first one.                                                                         |
| 10:24      | And that is the, and this is all downloadable from the GitHub.                                          |
| 10:28      | So you can just go to the link from the show notes and download it.                                     |
| 10:30      | The first one is a system preferences sound script.                                                     |
| 10:34      | So you want to get to the sound system preference and I know I was created this because she's           |
| 10:41      | a podcaster and she's probably always changing her inputs for her mics and outputs and who              |
| 10:47      | wants to go through the process of all those clicks to get there.                                       |
| 10:50      | Yeah.                                                                                                   |
| 10:51      | Or even actually, honestly, just having to use all of, you know, command space, SOU return              |
| 10:57      | doesn't take very long, but when I know I need to do it as part of something else that's                |
| 11:03      | already being automated, it feels like it takes a very long time.                                       |
| 11:07      | When I could just await, I can have Bunch run an AppleScript.                                          |
| 11:11      | So I actually have most of these scripts live in my Bunch folder because then Bunch can                 |
| 11:16      | just run them with you, just type the file name, the name of the AppleScript with dot                  |
| 11:20      | SCPT at the end.                                                                                        |
| 11:22      | And then you put it, sorry, put a star at the beginning of the line, space, name of                     |
| 11:26      | your file dot SCPT.                                                                                     |
| 11:29      | Now for some of you might be looking at this going, Rose, why didn't you just call this                 |
| 11:32      | script, system preferences hyphen sound or something.                                                   |
| 11:37      | The reason is if you include spaces in your file names, it suddenly gets much more complicated          |
| 11:41      | to automate things.                                                                                     |
| 11:42      | So that's why it's syspref sound.                                                                       |
| 11:44      | Yeah.                                                                                                   |
| 11:45      | I'm used to naming variables as a programmer.                                                           |
| 11:47      | At the very least, I end up taking the spaces out and capitalising the words so that you                |
| 11:51      | can, you know, see which words are different words.                                                     |
| 11:55      | And also, I don't know what it is, David, I always type preferences wrong.                              |
| 11:59      | I get the E and the C the wrong way around or there's an extra S in there or a double                   |
| 12:03      | F or something.                                                                                         |
| 12:04      | You know what I hate?                                                                                   |
| 12:05      | I hate that Apple calls it system preferences in the Mac and settings on the iPhone and                 |
| 12:10      | iPad.                                                                                                   |
| 12:11      | I mean, it's like, just pick one, you know, it's like, it's the same thing and it's got                 |
| 12:17      | two different names.                                                                                    |
| 12:18      | I hate that.                                                                                            |
| 12:19      | But anyway, and Rose mentioned Bunch.                                                                   |
| 12:23      | Bunch is a launcher application where you can do like setups on your screen.                            |
| 12:28      | And I do a lot of those with [[Keyboard Maestro]], but you can also do it with Bunch and in some            |
| 12:32      | ways they're faster and easier with Bunch.                                                              |
| 12:34      | And it's just an ingenious little thing created by our pal [[Brett Terpstra]].                              |
| 12:40      | And we talked about this in great detail when [[Jay Miller]] was on the show.                               |
| 12:44      | So if you're interested, I'd recommend going back and listening to the Jay Miller show.                 |
| 12:49      | But so [[Bunch]] allows you to do this stuff.                                                               |
| 12:52      | One of the things Bunch allows you to do is run a script at the time that you're doing                  |
| 12:57      | it.                                                                                                     |
| 12:58      | So what Rose was talking about is, you know, she's setting up to do a podcast.                          |
| 13:03      | She can run this AppleScript that opens up the system settings so to the sound panel                   |
| 13:08      | so she can make sure everything is just right for her microphone and headphones to record               |
| 13:14      | a show.                                                                                                 |
| 13:15      | Yeah.                                                                                                   |
| 13:16      | Yeah.                                                                                                   |
| 13:17      | So basically all I do is I literally just open the sound preferences.                                   |
| 13:19      | Most of the time it should just be showing me that it is using my microphone input and                  |
| 13:23      | output.                                                                                                 |
| 13:24      | I try to condense my podcasting into a couple of days a week so that there aren't so many               |
| 13:27      | days when I'm fiddling with my setup.                                                                   |
| 13:30      | But it is really, you know, useful just to have that check.                                             |
| 13:34      | Even if I was literally podcasting an hour earlier, every so often my, because I use                    |
| 13:39      | AirPods Max to podcast with, I use them with a cable plugged in, but every so often they're             |
| 13:44      | connected via Bluetooth and they're just trying to use the microphone in the AirPods Max as             |
| 13:49      | my microphone.                                                                                          |
| 13:50      | That's not great.                                                                                       |
| 13:51      | And I don't like it when it does that, that is very frustrating for, you know, me and                   |
| 13:55      | of course, you know, everybody else because the editor gets that file.                                  |
| 13:58      | I can imagine Jim, our wonderful editor, might be less than impressed.                                  |
| 14:02      | I can imagine you, our listeners, would be less than impressed.                                         |
| 14:05      | And David, I don't think you'd be particularly happy either because we'd have to record the             |
| 14:07      | show again.                                                                                             |
| 14:08      | So it's, you know, it's a quick two second glance.                                                      |
| 14:12      | Oh yeah, we're good here.                                                                               |
| 14:15      | And so yeah, do you want me to read the AppleScript, David?                                            |
| 14:17      | I think I'm not going to put people to sleep with this because it's more lines.                         |
| 14:21      | Yeah, I don't think you're going to put people to sleep because it's a very short story.                |
| 14:24      | Yeah, it is.                                                                                            |
| 14:26      | So first line.                                                                                          |
| 14:27      | I'll read the first line.                                                                               |
| 14:28      | You tell me what it does.                                                                               |
| 14:29      | How about this?                                                                                         |
| 14:30      | Okay.                                                                                                   |
| 14:31      | Okay.                                                                                                   |
| 14:32      | First line is tell application, open quote, system preferences, close quote.                            |
| 14:36      | So tell application system preferences.                                                                 |
| 14:38      | Yeah.                                                                                                   |
| 14:39      | So you're going to talk to system preferences.                                                          |
| 14:41      | So it knows now, okay, this is the information inside this tell, okay, which is a group of              |
| 14:48      | commands.                                                                                               |
| 14:49      | I'm going to do this.                                                                                   |
| 14:50      | Okay.                                                                                                   |
| 14:51      | So you end with tell application, and I'm going to spoil the ending, David, you end                     |
| 14:54      | with end tell, and then you indent everything inside of that.                                           |
| 14:58      | So all the things inside of that, are you talking to that application and you put it                    |
| 15:01      | in quotes because there's a space in it and you need it to be quoted so that that space                 |
| 15:06      | is read.                                                                                                |
| 15:07      | So it's not trying to tell application system preferences, what's preferences?                          |
| 15:12      | It doesn't understand.                                                                                  |
| 15:13      | You need, you need those quotation marks and do it even if the application name is only                 |
| 15:17      | one word.                                                                                               |
| 15:18      | So the thing that's, you know, a little bit of a surprise for some folks is that system                 |
| 15:22      | preferences is an app, you know, as I was talking earlier about writing a script for                    |
| 15:27      | OmniFocus, it would say tell application OmniFocus, but system preferences is an app.                   |
| 15:32      | So you can go in.                                                                                       |
| 15:33      | So now you can address system preferences.                                                              |
| 15:36      | So the next line, okay, this one's a long one, everybody hold on, activate.                             |
| 15:43      | That's it.                                                                                              |
| 15:44      | All right.                                                                                              |
| 15:45      | Yeah.                                                                                                   |
| 15:46      | So basically it's going, hey, system preferences, wake up, please.                                      |
| 15:50      | And that's because if you don't activate system preferences, the next line is not going to              |
| 15:54      | work because it needs to be awake and alert and ready to receive the following command.                 |
| 15:58      | Yeah.                                                                                                   |
| 15:59      | So you, first you tell the application and the next line, you tell it to activate, which                |
| 16:03      | is making it, in essence, the, the focus of the AppleScript.                                           |
| 16:08      | It's like, okay, I'm open, do with me as you will.                                                      |
| 16:12      | And then the next line is set current pane to pane ID.                                                  |
| 16:16      | com.apple.preferences.sound and that is in quotes.                                                      |
| 16:22      | Yes.                                                                                                    |
| 16:23      | So what you're doing is you're setting the current pane.                                                |
| 16:25      | So inside of system preferences, all of those different areas.                                          |
| 16:29      | So for example, up software update, iCloud, et cetera, they're all panes.                               |
| 16:35      | And so you're saying, hey, set your current pane, which is the pane that's currently open               |
| 16:39      | the view that's open to the pane with the ID com.apple.preference.sound.                                |
| 16:46      | And each of these has a different name, unfortunately, as you can guess, com.apple.preferences.sound    |
| 16:53      | is not the easiest way.                                                                                 |
| 16:55      | I think I have a link bookmarked and I will try and get that into the show notes of the                 |
| 16:59      | name of all of the different system preferences panes because guessing what they are is not             |
| 17:05      | super easy because sometimes, sometimes it's preference, sometimes it's preferences, David.             |
| 17:11      | I'm not sure why.                                                                                       |
| 17:12      | Yeah.                                                                                                   |
| 17:13      | It is nuts.                                                                                             |
| 17:14      | Well, I think what happened is multiple people were implementing this and they didn't stop              |
| 17:19      | to have a common thing.                                                                                 |
| 17:22      | I had the same thing.                                                                                   |
| 17:23      | I was recently scripting [[Apple Mail]] with AppleScript.                                                  |
| 17:30      | And I was trying, what was it that I was doing?                                                         |
| 17:34      | I was trying to set the box, the mailbox.                                                               |
| 17:41      | And it was working except for the inbox and after a bunch of trial and error, I discovered              |
| 17:47      | that if you're addressing inbox, it had to be in all caps, but in the other mailbox,                    |
| 17:52      | it didn't have to be in all caps.                                                                       |
| 17:55      | That's why people gripe about AppleScript because it's quirky like that.                               |
| 18:00      | And this is just another example, but I don't want to bury the lead here.                               |
| 18:05      | This line is the actual one line script that you're running.                                            |
| 18:10      | Everything else is just set up.                                                                         |
| 18:11      | You're telling it to look at system preferences, you're telling it to activate, then you tell           |
| 18:14      | it to go to this pane.                                                                                  |
| 18:16      | And like Rose said, we're going to have a link in the show notes that has all of these                  |
| 18:20      | panes as AppleScript expects to see them.                                                              |
| 18:24      | So if you want to go to some other pane, whatever that be, maybe an appearance or whatever,             |
| 18:32      | we can, all you have to do is change that quotes, whatever's in those quotes to what                    |
| 18:37      | you find at that web page and you can AppleScript automate opening a specific preference               |
| 18:42      | pane.                                                                                                   |
| 18:43      | Maybe you're not a podcaster, but you're opening some other pane multiple times a day and you           |
| 18:48      | want an easy way to get to it.                                                                          |
| 18:49      | Well, for example, the displays pane, so I have just added this link to the show notes,                 |
| 18:53      | it's actually from the device management profile.                                                       |
| 18:55      | So that's people who use stuff like Jamf to manage devices, but you can use all of these                |
| 19:00      | names in AppleScripts anyway.                                                                          |
| 19:01      | But if for example, you are somebody who's in and out of meetings and therefore you're                  |
| 19:05      | connecting to projectors and stuff or, you know, large displays, then you might want                    |
| 19:12      | to be opening the display preferences frequently.                                                       |
| 19:16      | And so, you know, you can do that with com.apple.preference.displays.                                  |
| 19:20      | And that's right there.                                                                                 |
| 19:21      | Plural.                                                                                                 |
| 19:22      | Displays.                                                                                               |
| 19:23      | Not display.                                                                                            |
| 19:24      | Yes, displays, plural.                                                                                  |
| 19:25      | But if you want Bluetooth, it's com.apple.preferences.Bluetooth with a capital B.                      |
| 19:32      | And so these are all here.                                                                              |
| 19:33      | So you don't need to remember these, don't start writing this stuff down.                               |
| 19:37      | Just look at the links in the show notes.                                                               |
| 19:38      | It's right there for you.                                                                               |
| 19:39      | And you don't have to go spelunking to figure them out and like try a reiteration.                      |
| 19:43      | Yeah.                                                                                                   |
| 19:44      | So whether you need trackpad preferences, the app store, that's here for some reason,                   |
| 19:50      | wallet preferences, users, software update, displays, whatever it is, it's all here.                    |
| 19:55      | There's even David Digi Hub disks.                                                                      |
| 20:00      | I don't quite know what that is.                                                                        |
| 20:02      | I'm tempted to find out, but I'm not going to do it as part of the show.                                |
| 20:05      | Yeah.                                                                                                   |
| 20:06      | Well, and that is a great short AppleScript that anybody can take and implement.                       |
| 20:13      | So you can go to, oh, I'm sorry, I should be a completionist here.                                      |
| 20:18      | There's one more line and that line says Intel and that just means you're done.                         |
| 20:24      | Yeah.                                                                                                   |
| 20:25      | So the Intel line and the Intel line are left aligned and then the activate and the set current         |
| 20:29      | pain lines are indented by one tab.                                                                     |
| 20:32      | Now you don't have to remember to write this when you're writing AppleScript, whether                  |
| 20:35      | you use a script editor, that's the native script editor application built into the Mac.                |
| 20:40      | Or if you're using, there's a great application called script debugger, which has got a beautiful       |
| 20:44      | little ladybird on the icon.                                                                            |
| 20:46      | Again, a link to that application is in the show notes.                                                 |
| 20:49      | There is a compile command and it will automatically move everything around and indent things correctly |
| 20:55      | so that your script is correctly formatted.                                                             |
| 20:58      | So this is a really easy one.                                                                           |
| 20:59      | It's got just four lines, essentially a one line script.                                                |
| 21:04      | And you can download it from Rose's GitHub and you can go to the link in the show notes                 |
| 21:10      | and customise it to whatever system preference you need to automate.                                    |
| 21:16      | This episode of the Automators podcast is brought to you by Privacy.                                    |
| 21:21      | Go to privacy.com/automators to make smarter payments and get $5 to spend on your                 |
| 21:26      | first purchase.                                                                                         |
| 21:28      | The internet is full of wonders and cool things you can buy, but it's also full of risk.                |
| 21:34      | Where are you going to put your precious credit card number?                                            |
| 21:38      | Who are you going to trust?                                                                             |
| 21:39      | Well, a lot of times you find something you may want to purchase, but you're not sure                   |
| 21:43      | about the vendor.                                                                                       |
| 21:44      | So you're afraid to actually go through with it.                                                        |
| 21:46      | That happens to me all the time.                                                                        |
| 21:48      | At least it did until I found privacy.                                                                  |
| 21:52      | Privacy lets you take back control of your payments.                                                    |
| 21:55      | With privacy, you can decide who can charge your card, how much and how often, and you                  |
| 21:59      | can close these cards anytime you want.                                                                 |
| 22:03      | I like to think of privacy as a separate brick wall between my credit card accounts and the             |
| 22:09      | internet.                                                                                               |
| 22:10      | It just gives me a way to further keep that precious information out of the hands of people             |
| 22:15      | that I don't necessarily trust.                                                                         |
| 22:17      | And with privacy, you can make sure that you're never accidentally billed twice or upgraded             |
| 22:22      | to another service without your consent.                                                                |
| 22:25      | Privacy is also partnered with the folks over at 1Password.                                           |
| 22:29      | You can create, use, and save privacy cards directly within your 1Password dashboard.                 |
| 22:34      | All virtual cards created in 1Password will have the same security benefits as your other             |
| 22:39      | privacy cards, and you can set spend limits, create single use or merchant lock cards whenever          |
| 22:45      | you want.                                                                                               |
| 22:46      | So head over to privacy.com/automators and sign up for an account.                                |
| 22:50      | I'd be honest, I never heard of privacy until I started sponsoring the show.                            |
| 22:54      | And when I went to the website, I was immediately sold.                                                 |
| 22:58      | And if you go to privacy.com/automators, you'll automatically get $5 to spend on your             |
| 23:03      | first purchase.                                                                                         |
| 23:04      | So once again, that's privacy.com/automators, sign up now and start protecting yourself           |
| 23:10      | from the internet.                                                                                      |
| 23:11      | Our thanks to privacy for their support of the automators and all of Relay FM.                          |
| 23:16      | All right.                                                                                              |
| 23:17      | So in the last section, I called it a one liner, but it was really a four liner.                        |
| 23:22      | You got any actual one liners in here?                                                                  |
| 23:24      | Yeah, I do.                                                                                             |
| 23:25      | I've got a couple of them actually.                                                                     |
| 23:27      | And I'm going to go with the one at the bottom of the list for now, because it's right there.           |
| 23:31      | And that's quit Unclack.                                                                                |
| 23:34      | And so for people who don't know Unclack, it's, you can get it at Unclack.app, sorry,                   |
| 23:40      | again, link to that in the show notes.                                                                  |
| 23:42      | This is an application which mutes your device when you type.                                           |
| 23:47      | Okay.                                                                                                   |
| 23:48      | So if you are connected to a physical, if you've got a physical keyboard plugged into                   |
| 23:52      | your machine and you type during meetings, but people complain because you've got a loud                |
| 23:56      | clicky keyboard, then you can actually have Unclack mute your input while you type.                     |
| 24:04      | And this is a really great thing, but you know what, I can't use it when I'm podcasting                 |
| 24:07      | because I copy links to show notes and stuff and it cuts my input.                                      |
| 24:12      | And so I have to quit Unclack on a fairly frequent basis.                                               |
| 24:15      | Well, I can do that with this one liner, which is tell application Unclack and that's in                |
| 24:21      | quotation marks.                                                                                        |
| 24:22      | And then there's no new line, it's just too quit at the end.                                            |
| 24:25      | That's it.                                                                                              |
| 24:26      | All done.                                                                                               |
| 24:27      | A whole AppleScript in one line.                                                                       |
| 24:29      | Yeah.                                                                                                   |
| 24:30      | My favourite example of a one liner is just the say command.                                             |
| 24:34      | If you ever just want to be a goofy person and make your computer talk, open the Apple                  |
| 24:40      | script editor, or it's now called script editor, and just type say and then put in quotes               |
| 24:46      | whatever you want your computer to say.                                                                 |
| 24:48      | And occasionally like my computer will have conversations with my kids as I'm sitting                   |
| 24:52      | on the couch.                                                                                           |
| 24:53      | And it was really cute when they were young and now they just barely can stand it at this               |
| 24:59      | point.                                                                                                  |
| 25:00      | Yes.                                                                                                    |
| 25:01      | Well, I mean, it's good fun.                                                                            |
| 25:03      | You can do that one in shortcuts as well with the speak text command.                                   |
| 25:07      | And that's a one action shortcut.                                                                       |
| 25:09      | If we get some time, we'll go to shortcuts at the end and see what we can do there.                     |
| 25:13      | But yeah, there's a lot of things that you can do with one line in AppleScript, which                  |
| 25:18      | I think people might not know, because some of these things are actually very easy to                   |
| 25:23      | do in shortcuts, but they're not so easy to do on the Mac.                                              |
| 25:26      | So for example, if you want to open a specific note in notes, well, that's kind of tricky.              |
| 25:32      | But you know, you can just say tell application notes to show note, and then you put the title          |
| 25:39      | of your note in there, David, and it works.                                                             |
| 25:41      | Yeah.                                                                                                   |
| 25:42      | And it's the note title that you want to get.                                                           |
| 25:46      | So there's not like a unique identifier for Apple notes.                                                |
| 25:50      | You actually use the note title.                                                                        |
| 25:52      | Yeah.                                                                                                   |
| 25:53      | But it works.                                                                                           |
| 25:55      | And I use that all the time because I have a shared note with Mike Sargent, who I host                  |
| 26:00      | iOS today with, and we check our show ideas for future shows in there.                                  |
| 26:05      | And then, you know, when it comes to time to the actual prepping of the show, then,                     |
| 26:09      | you know, we pull out an idea and I go off to Google Sheets where the actual planning                   |
| 26:13      | happens, but, you know, individual notes are pretty useful as part of an automation, especially         |
| 26:20      | if they're shared note, but sometimes you actually share folders and you can do exactly                 |
| 26:24      | the same thing again with folders where you just tell application notes to show folder,                 |
| 26:30      | and then the folder is the name of the folder.                                                          |
| 26:32      | Yeah.                                                                                                   |
| 26:33      | And those are both downloadable scripts from your GitHub, but let's just do the open note               |
| 26:38      | one.                                                                                                    |
| 26:39      | The script is tell application, sound familiar, and then notes and quotes to show note, and             |
| 26:47      | then you put the name of the note in quotes.                                                            |
| 26:50      | This stuff is fairly obvious when you look at it, but like if you had to come up with                   |
| 26:55      | it from scratch, there are so many places that you'd never be able to do it, you know,                  |
| 27:00      | you've got to just take somebody's existing one and do this because, like, do you capitalise            |
| 27:06      | on a show or, you know, there's all these different things you can do to mess up the                    |
| 27:10      | script, but once you get this language down, it's very easy.                                            |
| 27:13      | I would imagine that's when you also probably run out of bunch.                                         |
| 27:17      | Yep.                                                                                                    |
| 27:18      | I primarily run it out of bunch, but it's also a [[Stream Deck]] button for me.                             |
| 27:23      | So a lot of these I am running through the OSA script plugin, which is linked in the                    |
| 27:29      | show notes on [[Stream Deck]], but one of the things I'm switching to a little bit with                     |
| 27:33      | that is I'm actually running script files through [[Keyboard Maestro]], because this way                    |
| 27:38      | I don't have potentially two, three, four different versions of the same script in multiple             |
| 27:46      | places.                                                                                                 |
| 27:47      | Instead, I have one script file, and I can run that from potentially multiple buttons                   |
| 27:51      | on my [[Stream Deck]].                                                                                      |
| 27:52      | I can run it from potentially multiple bunches, and I can also just, you know, run the script           |
| 27:57      | file, and file scripts is something we should mention.                                                  |
| 28:01      | We've sponsored the show before, great application for putting AppleScript in your menu bar            |
| 28:06      | and assigning keyboard shortcuts to it as well, which is great, because all of these                    |
| 28:11      | scripts I then also have in fast scripts, because, you know, this way if I'm looking                    |
| 28:16      | for something, oh yeah, I know it's an AppleScript, I just click the thing, I just click               |
| 28:20      | the thing, and then I'm good, it's done.                                                                |
| 28:23      | So yeah, I have multiple ways of running the same scripts, but I try to have one source                 |
| 28:27      | of truth.                                                                                               |
| 28:28      | I don't have the same script three or four times, and I've modified it in one place,                    |
| 28:32      | but I haven't changed it in another, or something, because that's what happens, right?                  |
| 28:37      | You have one piece of data saved, and you try to use it the same thing everywhere, and                  |
| 28:41      | then you modify it in one place, and everything goes wrong.                                             |
| 28:44      | This happened when we changed the Google sheet that we used for iOS today.                              |
| 28:48      | It took me weeks to find all the different places that I put that URL in, and I know                    |
| 28:53      | David using it.                                                                                         |
| 28:54      | There are two places where it lives.                                                                    |
| 28:56      | There's a text file inside of my cloud drive, and data drive, and that's it.                            |
| 29:00      | So now, next time it changes, which will probably not be until next year or so, then it'll be           |
| 29:06      | easy to update.                                                                                         |
| 29:07      | Yeah, but I do recommend that, whether you use fast scripts or keyboard mice, or I think                |
| 29:12      | those are, I'm sorry, yeah, keyboard mice, or fast scripts, those are two of the best                   |
| 29:16      | ways to do it, but I recommend having some sort of AppleScript launcher.                               |
| 29:23      | There are other ways to launch these scripts that don't require a third-party app, but                  |
| 29:27      | I just find having the third-party app makes it so much easier, and then I end up using                 |
| 29:31      | the scripts more often.                                                                                 |
| 29:33      | And like Rose, I like to have these scripts in one place, so I can make changes to them                 |
| 29:39      | easier.                                                                                                 |
| 29:40      | Yeah.                                                                                                   |
| 29:41      | And just to get back to the point you were making earlier about how there is no easy                    |
| 29:46      | way to automate opening an Apple note.                                                                  |
| 29:49      | There are a lot of pesky problems on the Mac that are easily solvable with shortcuts                    |
| 29:56      | on iOS, and hopefully eventually shortcuts on Mac, but there really isn't a good way                    |
| 30:01      | to solve them as we sit here today.                                                                     |
| 30:03      | One of the ones that I was bumping into was opening particular mailboxes or moving mail                 |
| 30:11      | to particular mailboxes.                                                                                |
| 30:12      | I mean, starting with Catalina, Apple allowed you to remove the Unified Inbox from Apple                |
| 30:18      | mail, and you can put multiple boxes under the Favourites tab, and they have built-in                    |
| 30:25      | keyboard shortcuts.                                                                                     |
| 30:26      | If you hold down, man, I've got to remember what it is.                                                 |
| 30:30      | I think it's Control Command and the number corresponding to the mailbox where it is                    |
| 30:36      | in Favourites list.                                                                                      |
| 30:37      | It will move.                                                                                           |
| 30:38      | Yeah, so it's just Command and then the number for me, but I do have an All Inboxes option              |
| 30:44      | there, but underneath that, I've got [[Drafts]] and Flex.                                                   |
| 30:48      | Well, that jumps to the mailbox, but I'm talking about moving the current message.                      |
| 30:52      | Oh, yes.                                                                                                |
| 30:53      | Yes.                                                                                                    |
| 30:54      | I think it's Control Command.                                                                           |
| 30:55      | But the problem is, if you accidentally resort that Favourites list, then number five no                 |
| 31:01      | longer corresponds to the one you thought, and in my case, I have three email accounts                  |
| 31:06      | I'm running through Apple Mail, and then I've got multiple boxes that I want to address                 |
| 31:11      | in each account, and 10 slots is just not enough.                                                       |
| 31:15      | I run out of numbers, and that's that problem.                                                          |
| 31:20      | It seems insurmountable, but there's an AppleScript that it's not a one-liner.                         |
| 31:24      | We're not going to get into it today because there's too much to it, but you can write                  |
| 31:28      | an AppleScript that will move that message to a specific mailbox that you identify in                  |
| 31:34      | the script.                                                                                             |
| 31:35      | So it's number one.                                                                                     |
| 31:36      | It allows you to address more than 10, and number two, it always works.                                 |
| 31:41      | If you move the mailboxes in your Favourites list, it doesn't care because that's not what               |
| 31:45      | it's doing, and that's a feature that Apple really didn't write into AppleScript, but                  |
| 31:50      | you can add as a savvy automator.                                                                       |
| 31:54      | Yeah, and I think a lot of people think, oh, AppleScript, it's going to be difficult                   |
| 32:00      | and complicated and so on.                                                                              |
| 32:02      | So the ones that I've got on GitHub, the vast majority of them, you can download them and               |
| 32:06      | run them as they are.                                                                                   |
| 32:07      | There are some where you might need to replace part of it.                                              |
| 32:10      | So for example, the name of the note that you want to open in Apple Notes or the name                   |
| 32:13      | of the folder, and those you will be able to spot easily because, first of all, I put                   |
| 32:17      | a comment at the top of the file so you can see what it is that you need to do.                         |
| 32:21      | And secondly, it's there inside of square brackets, inside the file, and so you delete                  |
| 32:26      | the name, including the square brackets, and then you'll be good to go.                                 |
| 32:32      | And that's it.                                                                                          |
| 32:33      | So I'm hoping that I've made this nice and easy for you because I think a lot of people                 |
| 32:37      | out there are using notes and things like that because it works for them.                               |
| 32:41      | And I certainly do use notes because it works for me.                                                   |
| 32:45      | I also use [[Drafts]] and so on.                                                                            |
| 32:47      | You can use multiple applications.                                                                      |
| 32:49      | Notes is not as automatable, but I'm working with it with shortcuts and some good old fashioned         |
| 32:54      | AppleScript.                                                                                           |
| 32:55      | So it works for me.                                                                                     |
| 32:56      | All right.                                                                                              |
| 32:57      | So you talked about [[Drafts]] at the top of the show, and you just mentioned it again.                     |
| 33:00      | And you have a one line script that addresses the max clipboard and creates a new draft.                |
| 33:07      | And this is another one you've got in your GitHub, it's downloadable.                                   |
| 33:12      | It's a one liner.                                                                                       |
| 33:13      | So I'm going to break it in...                                                                          |
| 33:14      | Well, I guess I'm just going to tell everybody the whole line.                                          |
| 33:17      | Tell application [[Drafts]] to make a new draft with properties, and then you have the squiggly             |
| 33:22      | bracket that says content colon the clipboard.                                                          |
| 33:26      | So let's start the beginning.                                                                           |
| 33:28      | Tell application [[Drafts]] to make a new draft.                                                            |
| 33:32      | So that sounds pretty obvious, but explain what that does.                                              |
| 33:36      | Yeah.                                                                                                   |
| 33:37      | So tell application [[Drafts]] means we're going to talk to [[Drafts]].                                         |
| 33:40      | Two means all of the rest of the script is going to be on this one line.                                |
| 33:43      | Okay.                                                                                                   |
| 33:44      | We're not doing the new line and the indentation that I talked about with the four line script          |
| 33:46      | before.                                                                                                 |
| 33:47      | This is a one line script.                                                                              |
| 33:49      | And then it says to make.                                                                               |
| 33:51      | And then...                                                                                             |
| 33:52      | Okay.                                                                                                   |
| 33:53      | So we're creating something new.                                                                        |
| 33:54      | So it's not making an app, and it's not making an append to a file, it's making a new.                  |
| 34:00      | And then draft.                                                                                         |
| 34:02      | So make new draft with properties.                                                                      |
| 34:04      | Okay, because you can just say, tell application [[Drafts]] to make new draft.                              |
| 34:09      | But I will specifically need to give it some data.                                                      |
| 34:11      | So with properties, here's the data.                                                                    |
| 34:14      | And then the curly brackets, this is going to be the data that I passed to it.                          |
| 34:18      | Content.                                                                                                |
| 34:19      | Well, this is the content that's going to go into [[Drafts]].                                               |
| 34:22      | And then I put the clipboard, because the clipboard is something that you can grab.                     |
| 34:26      | And it's always available.                                                                              |
| 34:27      | It's called the clipboard with a space in between.                                                      |
| 34:30      | Lowercase.                                                                                              |
| 34:31      | Yeah.                                                                                                   |
| 34:32      | Yeah.                                                                                                   |
| 34:33      | And it's there.                                                                                         |
| 34:34      | But I could also, inside of these curly brackets, also pass a flag state if I wanted to be flagged,     |
| 34:40      | or specific tags if I wanted to have things tagged in a certain way.                                    |
| 34:44      | So I'll actually link to the [[Drafts]] documentation for AppleScript here, because I think some           |
| 34:52      | people might want to actually specifically add things with certain tags.                                |
| 34:55      | For example, actually, I should probably do this on my work machine.                                    |
| 34:59      | I'm not actually adding the tag right now on my work machine.                                           |
| 35:01      | This just occurred to me, David, and I always keep my work [[Drafts]] in a specific workspace               |
| 35:06      | with a tag.                                                                                             |
| 35:07      | So I should modify my own AppleScript there.                                                           |
| 35:10      | Yeah.                                                                                                   |
| 35:11      | And you can add multiple properties.                                                                    |
| 35:12      | So like you can put content plus flag status.                                                           |
| 35:16      | And [[Drafts]] started out as an iPhone and iPad app, and obviously didn't have any AppleScript            |
| 35:22      | support when Greg brought the application to the Mac, he wrote in AppleScript support.                 |
| 35:28      | I mean, the app has to support it, but because Greg is Greg, of course, it has great Apple              |
| 35:34      | script support when it shows up on the Mac.                                                             |
| 35:37      | But that brings up the subject of dictionaries.                                                         |
| 35:40      | Can you explain what that is?                                                                           |
| 35:42      | Yeah.                                                                                                   |
| 35:43      | So a dictionary is just like a dictionary that you think of with words.                                 |
| 35:47      | So you have a word, and you've got your definition, or maybe it's the translation dictionary,           |
| 35:52      | because it's a word, and then, okay, but here's what you really mean.                                   |
| 35:56      | And that's what we're doing here.                                                                       |
| 35:58      | So the curly brackets here are the dictionary.                                                          |
| 36:01      | And then content, okay, so you want content.                                                            |
| 36:04      | For me, that's the clipboard.                                                                           |
| 36:05      | Okay.                                                                                                   |
| 36:06      | So I'm going to give you the clipboard, and you're going to turn that into my draft,                    |
| 36:10      | please.                                                                                                 |
| 36:11      | But it could also be that you want flagged, and I'm going to say false.                                 |
| 36:15      | Okay.                                                                                                   |
| 36:16      | So the state of the flag is a true or a false.                                                          |
| 36:19      | It either is flagged, true, or it's not flagged, false.                                                 |
| 36:22      | You can also just not pass flagged in this case.                                                        |
| 36:25      | But you can also pass it tags, and say, okay, tags, well, tags, you've got to have a think              |
| 36:32      | for a moment, okay, because tags here is plural.                                                        |
| 36:35      | So you can't give it a tag singular.                                                                    |
| 36:37      | So you need to wrap that in those curly brackets again.                                                 |
| 36:40      | And then each tag you need to quote, because, you know, that it's a string.                             |
| 36:46      | And so for, in order for it to get passed through as a string, not as a variable, then                  |
| 36:52      | you need to quote that, because otherwise, if you say tags, colon, curly bracket, blue,                 |
| 37:01      | close curly bracket, it's going to look for something called blue, and AppleScript doesn't              |
| 37:05      | know what blue is.                                                                                      |
| 37:06      | They're going, wait, blue, what's blue?                                                                 |
| 37:08      | I don't know.                                                                                           |
| 37:09      | And it'll just go, eh, can't do that.                                                                   |
| 37:12      | But if you quote it, then it just goes, here is blue, you know, and it doesn't look at                  |
| 37:16      | what it is too much.                                                                                    |
| 37:17      | It's kind of, you know, kind of like a postperson.                                                      |
| 37:19      | Okay.                                                                                                   |
| 37:20      | Here's your letter.                                                                                     |
| 37:21      | But if you just give them paper without any information on it, then what were they going                |
| 37:26      | to do with that?                                                                                        |
| 37:27      | Well, your postman will probably recycle it on your behalf.                                             |
| 37:29      | But AppleScript doesn't know how to do that.                                                            |
| 37:32      | So it's just going to go, I don't know, and crash and not be very helpful.                              |
| 37:37      | But if you format things correctly and you use a dictionary to say, this is what this                   |
| 37:42      | means, then it can do everything for you, or at least lots of things.                                   |
| 37:46      | Yeah.                                                                                                   |
| 37:47      | The dictionary really is the trick to all this.                                                         |
| 37:50      | As you start working in AppleScript, you'll see AppleScript's other people wrote in an                  |
| 37:53      | app you may be trying to automate.                                                                      |
| 37:55      | For me, quite often it's OmniFocus and Apple Mail and the productivity apps I use.                      |
| 37:59      | And I can get so far with other people's scripts, but when you combine that with the                    |
| 38:03      | dictionary that shows you the exact syntax they need, suddenly ideas start opening up                   |
| 38:09      | to you.                                                                                                 |
| 38:10      | Yeah.                                                                                                   |
| 38:11      | I want to also, before we, we finish AppleScript, I just want to take a minute to talk about            |
| 38:15      | scripting tools for AppleScript.                                                                        |
| 38:17      | Now, there is a tool on the Mac that's native.                                                          |
| 38:22      | When you open your Mac, it's already there.                                                             |
| 38:23      | It's called [[Script Editor]].                                                                              |
| 38:25      | Historically, it was called AppleScript Editor, but they changed the name three or four releases        |
| 38:30      | ago.                                                                                                    |
| 38:31      | But that is where you can open and run these scripts.                                                   |
| 38:34      | You can download from ROSE.                                                                             |
| 38:36      | It has dictionary support.                                                                              |
| 38:38      | It's a very credible application for modifying and running and editing these scripts.                   |
| 38:47      | But there's also one called [[Script Debugger]].                                                            |
| 38:51      | And [[Script Debugger]] was made, as I understand it, by one of the team members originally.                |
| 38:56      | I mean, it's been around since before Mac OS X.                                                         |
| 38:59      | I mean, it's been around forever.                                                                       |
| 39:01      | And it is kind of the power tool for AppleScript and all the people that I bump into that               |
| 39:08      | really write a lot of AppleScript, just get [[Script Debugger]] because the dictionaries are                |
| 39:13      | more thorough and it just has more tools than Apple was willing to put into the free app.               |
| 39:20      | Which app do you use, ROSE, to write your AppleScripts?                                                 |
| 39:24      | So it varies, actually, David.                                                                          |
| 39:25      | If I'm doing something on my work machine, then it's usually, I'm just trying to do like                |
| 39:29      | a very quick edit to something and, you know, quick and dirty, just get it fixed and get                |
| 39:34      | back to work because they're not paying me to sit there and write AppleScripts and to                   |
| 39:37      | optimise my workflow to the end's degree, you know, they're paying me to do my job.                     |
| 39:43      | So I try not to spend too much time doing that.                                                         |
| 39:45      | So I use [[Script Editor]] on that Mac, but on my personal machines, it's [[Script Debugger]]                   |
| 39:49      | all the way because, so the dictionary I talked about before is a programming dictionary.               |
| 39:54      | If you want the dictionary of terms that are going to be used to help you automate an application,      |
| 40:01      | then in Post [[Script Debugger]] and [[Script Editor]], then you can go to File, Open Dictionary,               |
| 40:09      | and then you'll be able to see the dictionary for all of the languages.                                 |
| 40:13      | And so a dictionary for the languages is hopefully going to help you learn how to automate something.   |
| 40:18      | So for example, [[BBEdit]] has a command to add a suffix, and it'll, you know, append a string             |
| 40:26      | to the end of each line in the indicated text, so you're going to have to do some work to               |
| 40:30      | find out what the indicated text is and so on, but it's a good place to start, especially               |
| 40:35      | if you do what I do, and that is steal from other people on the internet, because usually               |
| 40:39      | I can find somebody who's kind of written something like what I might want, and then                    |
| 40:45      | I can Google for something else.                                                                        |
| 40:46      | So how I wrote this, this draft script is I started by copying the one on the [[Drafts]]                   |
| 40:51      | website.                                                                                                |
| 40:52      | Okay.                                                                                                   |
| 40:53      | There's a single script at the end on the [[Drafts]] website showing you how you can create                 |
| 40:55      | a new draft with AppleScript.                                                                          |
| 40:57      | Okay.                                                                                                   |
| 40:58      | We'll link to it in the show notes.                                                                     |
| 40:59      | So I started with that.                                                                                 |
| 41:01      | And then I went and I Googled AppleScript clipboard and found out, hey, this is how                    |
| 41:05      | you get the clipboard in AppleScript.                                                                  |
| 41:08      | And then I changed it because I don't, you know, I wanted this to be a one line script.                 |
| 41:12      | Okay.                                                                                                   |
| 41:13      | I didn't need three lines because if I get rid of this two here in the script, so tell                  |
| 41:17      | application [[Drafts]] two, and I put a new line in there, I have to end with end tell.                     |
| 41:22      | Now there's no particular reason why I wanted this to be a one line script versus a three               |
| 41:26      | line script.                                                                                            |
| 41:27      | At the end of the day, it doesn't make a big difference.                                                |
| 41:29      | But if you're only getting your AppleScript to do a singular thing, then it's very easy                |
| 41:36      | to say tell application [[Drafts]] to make it, make new draft with properties, et cetera.                   |
| 41:41      | Instead of tell application [[Drafts]], make new draft with properties and tell.                            |
| 41:47      | It's just a little bit of extra work.                                                                   |
| 41:48      | So both of those work, by the way, you can use mine or you can use the standard styling                 |
| 41:52      | with tell and end tell.                                                                                 |
| 41:55      | But you know, if it really is only one command, I try to keep it to one line.                           |
| 42:00      | I'm generally more verbose in my scripts because I'm not as comfortable in it as you                    |
| 42:05      | are.                                                                                                    |
| 42:06      | And I need to be like really deliberate with each step for my own debugging and for future              |
| 42:11      | me if I have to go in and modify it, getting clever about making it more compressed just                |
| 42:17      | adds a degree of difficulty that I'm not up to.                                                         |
| 42:20      | Easy, easy, you know, go the full route, you know, with the activate.                                   |
| 42:25      | I mean, it doesn't really matter which way you do it.                                                   |
| 42:27      | Though I will say if you are learning these things or you're curious and you want to spend              |
| 42:31      | a bit more time poking around, [[Script Debugger]] has an excellent debugging mode where there's            |
| 42:36      | a little ladybird in the menu and you can just click it.                                                |
| 42:40      | It's in toolbar at the top right underneath the title of your script and you can click                  |
| 42:43      | it.                                                                                                     |
| 42:44      | It's also got a timer and you might think, why do I need a timer?                                       |
| 42:49      | The timer is not for you writing the script.                                                            |
| 42:51      | If it did, that would be quite embarrassing how long it's taken me to write some of these.              |
| 42:56      | But it is for how long it takes your script to run.                                                     |
| 42:59      | So if you feel like your script is taking a long time to run and you glance up and you                  |
| 43:02      | see it was only a second, you know, that's in your head.                                                |
| 43:05      | Or if you managed to write what I did the other day, which was a hilariously unoptimised                |
| 43:10      | AppleScript, it can take four and a half seconds to execute.                                           |
| 43:14      | You might think, Rose, four and a half seconds is four and a half seconds.                              |
| 43:17      | Don't worry about it.                                                                                   |
| 43:18      | It was going to be for a [[Stream Deck]] plugin.                                                            |
| 43:19      | It was supposed to run every minute.                                                                    |
| 43:21      | So I decided to scrap that and go with a very different approach because it was going to                |
| 43:25      | be much better.                                                                                         |
| 43:26      | I got something down to something that runs in about half a second for that.                            |
| 43:30      | So that's a much better solution there.                                                                 |
| 43:33      | But yeah, when you see the time that it takes to run some of these scripts and you think,               |
| 43:38      | oh yeah, this is actually really nice because you click it and it just does it and the information      |
| 43:43      | is there.                                                                                               |
| 43:44      | So I should say as a note, because people will probably ask, the AppleScript to create                 |
| 43:52      | a new draft with the click board does not open the note, the draft.                                     |
| 43:57      | It just sticks it there.                                                                                |
| 44:01      | It's a thing in the background because a lot of the time I just need to save this information           |
| 44:04      | to get back to it later and I don't need [[Drafts]] popping up and then having to hide it again             |
| 44:09      | because I have probably during my working day about seven different windows open actively               |
| 44:15      | and I need to be able to see most of them at a glance because there's this script running               |
| 44:19      | in the background, that script running in the background, this other script running                     |
| 44:21      | in the background and I need to be able to see all of that and [[Drafts]] popping up means                  |
| 44:25      | I have to hide [[Drafts]] or do something and rearrange all my windows and I don't want                     |
| 44:32      | that.                                                                                                   |
| 44:33      | So this runs entirely in the background.                                                                |
| 44:34      | And one last bit on [[Script Debugger]], they have a light mode, which in my opinion is                     |
| 44:39      | still better than the built-in script editor that Apple gives you.                                      |
| 44:42      | So if you don't want to pay for it, even the light mode is free and they have a 20-day                  |
| 44:47      | trial with all the features.                                                                            |
| 44:49      | So you got no excuse if you want to try this AppleScript stuff out, go to late night software,         |
| 44:54      | we'll put a link in the show notes, give [[Script Debugger]] a try.                                         |
| 44:58      | I think it can really help the process because I find that I write better scripts with Script           |
| 45:05      | Debugger because the dictionaries are better and the debugging is better and for someone                |
| 45:10      | like me who doesn't pay for my shoes writing scripts, having those extra tools makes it                 |
| 45:16      | easier when I need to do it.                                                                            |
| 45:18      | Yeah.                                                                                                   |
| 45:19      | I should say that the beauty of the [[Script Debugger]] dictionary is, so say for example                   |
| 45:25      | I'm looking at Calendar and there is an option for a new event, I think there is somewhere.             |
| 45:32      | I'll go with get your offer now.                                                                        |
| 45:34      | So I'm actually doing this in the dictionary right as I talk.                                           |
| 45:37      | I can click Paste Tell at the top and it will paste this information into the Apple                     |
| 45:45      | script and it pastes tell application calendar as well and the end tell as well.                        |
| 45:51      | So it pastes the whole thing for me so that I know that this is a complete little script.               |
| 45:56      | It doesn't necessarily mean that that script will run exactly as it is.                                 |
| 45:59      | You might well need to get some other information and put some other puzzle pieces together,            |
| 46:04      | but it is a very good way to get started with that.                                                     |
| 46:08      | This episode of Automated is brought to you by Tech Six Panda from our friends at Smile.                |
| 46:11      | Do you ever type the same thing over and over again, whether it's customer support answers,             |
| 46:15      | sales emails or document edits, typing things repetitively or using copy and paste can be               |
| 46:20      | a burden.                                                                                               |
| 46:21      | That's where Tech Six Panda comes in.                                                                   |
| 46:23      | With Tech Six Panda, you and your team can keep your message consistent, save time and                  |
| 46:28      | be more productive and be accurate every time.                                                          |
| 46:32      | The way we work is changing rapidly.                                                                    |
| 46:34      | Make work happen wherever you are by saying more in less time and with less effort using                |
| 46:39      | Tech Six Panda.                                                                                         |
| 46:40      | I use Tech Six Panda for all sorts of things like fixing common spelling mistakes in my                 |
| 46:44      | own name.                                                                                               |
| 46:45      | Yes, it's silly, but they happen and I love that it just works.                                         |
| 46:49      | It's everywhere and it boosts my productivity by getting rid of those silly mistakes and                |
| 46:54      | of course by loving me just type answers without really thinking about it.                              |
| 46:59      | As a listener of Automated, you can get 20% off your first year.                                        |
| 47:02      | Visit TextExpander.com/podcast to learn more about Tech Six Panda, that's TextExpander.com        |
| 47:07      | slash podcast.                                                                                          |
| 47:08      | Our thanks to Tech Six Panda from Smile for their support of this show and relay FM.                    |
| 47:12      | So, David, I mentioned PopClip earlier in the show, are we allowed to circle back to                   |
| 47:18      | that now because I think PopClip is wonderful and I think we should probably talk about                |
| 47:22      | PopClip.                                                                                               |
| 47:23      | All right.                                                                                              |
| 47:24      | Let's talk PopClip.                                                                                    |
| 47:25      | So, I know you've been using PopClip for a long time and I've tried it several times                   |
| 47:28      | but until recently it never really clicked for me.                                                      |
| 47:31      | When I was trying to easily change a URL at work, so just a little bit of background for                |
| 47:39      | people.                                                                                                 |
| 47:40      | I'm a software developer and so what I usually end up doing is I will be coding software on             |
| 47:45      | my local machine and then somebody is testing it but they're testing it on a server and                 |
| 47:51      | theoretically the same URLs will work on both.                                                          |
| 47:54      | So I can take the URL and I can replace HTTPS colon slash slash dev with HTTP colon slash               |
| 48:01      | slash local.                                                                                            |
| 48:04      | Easy enough, right?                                                                                     |
| 48:05      | Very, very logical, you would think.                                                                    |
| 48:08      | But doing that multiple times a day, flipping back and forth between local and dev or even              |
| 48:12      | multiple times a minute at times because the testers would send me, say, five URLs from                 |
| 48:17      | development and though I'd have to change all of them, it got frustrating.                              |
| 48:21      | It got frustrating fast, David.                                                                         |
| 48:24      | And so I thought darn it, I don't want to do this.                                                      |
| 48:26      | I want to be able to have a URL, just open it in the browser, have a look, click on the                 |
| 48:31      | URL and then change it.                                                                                 |
| 48:33      | And that's when I thought of PopClip and I fell down a bit of a rabbit hole because                    |
| 48:38      | there's so much you can do with PopClip and it's great.                                                |
| 48:40      | And I've written some PopClip extensions, even, which again are available to download                   |
| 48:45      | for people, but I wouldn't have been able to do it without [[Brett Terpstra]].                             |
| 48:49      | So yeah, how long have you been using PopClip, David, do you think?                                     |
| 48:52      | It's a long time.                                                                                       |
| 48:53      | In fact, let's back up just a little bit.                                                               |
| 48:55      | PopClip is an app available on the App Store, the Mac App Store.                                        |
| 49:01      | And I believe they can sell you can buy directly from their website too.                                |
| 49:04      | But you know that little thing on iPhone and iPad where when you select text, it pops up                |
| 49:10      | a little menu like you want to copy this or paste it and it's a very limited set of things              |
| 49:16      | you can do with the text on iPhone and iPad, you know, Apple controls that.                             |
| 49:22      | But this PopClip app was an effort to add that feature to the Mac.                                      |
| 49:26      | So when you select text on your Mac, excuse me, it opens up like a little selection right               |
| 49:35      | over the selected text where you can do things like you can copy and paste and do things                |
| 49:41      | like that.                                                                                              |
| 49:42      | But the developer kind of like went nuts and added all of these user customisable features              |
| 49:47      | like you can have it open a link, you can have it search in Google.                                     |
| 49:50      | And once you install the app, there is a whole plug in architecture available to you where              |
| 49:58      | you can just go nuts and just start adding a bunch of different potential actions.                      |
| 50:04      | And there's a bunch that you can go like for instance, some of the built-in ones that                   |
| 50:08      | I use all the time is all caps.                                                                         |
| 50:11      | Like sometimes I'm doing things I want to turn into all caps and I can just select it                   |
| 50:16      | and then hit the PopClip.                                                                               |
| 50:17      | And I could write an AppleScript to do this, I could write a keyboard, maestro, a script.              |
| 50:21      | There's like a bunch of ways to scratch that itch, but I find the PopClip one is one of                 |
| 50:26      | the easiest.                                                                                            |
| 50:27      | You select the text, you click one button, it's done.                                                   |
| 50:29      | Another one that's built in that I like is title case, like sometimes I'm working on                    |
| 50:34      | something and I want to have the proper title case and you know how title case, sometimes               |
| 50:38      | words, some of them are lowercase and some of them are uppercase and I should memorise                  |
| 50:42      | all those rules.                                                                                        |
| 50:43      | But every time I think I understand them, I find an exception.                                          |
| 50:47      | So I let PopClip run its algorithm and just title case stuff for me.                                    |
| 50:52      | And that's kind of what the app does, like, but it goes so much further down the rabbit                 |
| 50:56      | hole with the extensible actions you can do just with the built-in app.                                 |
| 51:02      | Like, I can select text and add it to the inbox and OmniFocus or whatever your weapon                   |
| 51:08      | of choice is for productivity, it's probably got some sort of PopClip plugin.                           |
| 51:14      | But to go a step further, the developer has it as an open architecture where other people               |
| 51:20      | can add their own [[PopClip]] actions.                                                                      |
| 51:23      | I'd like to take credit for [[Brett Terpstra]] on this, I'd have to go search it out, but                   |
| 51:28      | I remember very specifically him being a guest on Mac Power Users and me telling him about              |
| 51:35      | it on air and he had not heard of it.                                                                   |
| 51:38      | But then, of course, now Brett has, the student has become the master and he's released all             |
| 51:43      | of these PopClip extensions that he's written with various small scripts over the years.                |
| 51:50      | And of course, now Rosemary Orchard is on the same bandwagon.                                           |
| 51:53      | Yeah.                                                                                                   |
| 51:54      | So actually, it was Brett who helped me out here.                                                       |
| 51:56      | He doesn't know yet that he helped me out, but thank you, Brett.                                        |
| 51:59      | Because on his website, he's got a whole bunch of PopClip extensions.                                   |
| 52:04      | And I was browsing through a bunch of his posts about PopClip.                                          |
| 52:06      | Some of them are quite old, but they're still fully valid, you know, PopClip has been kept              |
| 52:10      | up to date and fortunately, they've not broken things over the years.                                   |
| 52:16      | And then I stumbled across a post from him in which he talks about PopMaker and they're                 |
| 52:21      | going, what's a PopMaker?                                                                               |
| 52:23      | And so I had a look at it and it is a small Mac application to create your own extensions               |
| 52:30      | for PopClip.                                                                                            |
| 52:32      | So this allows you, you can download the application and there are two different kinds of things        |
| 52:38      | that you can do with it.                                                                                |
| 52:39      | So it doesn't allow you to fully create any kind of PopClip extension.                                  |
| 52:45      | You will need to do a little bit of coding to do anything other than these.                             |
| 52:48      | But there are two options.                                                                              |
| 52:49      | So there's a search where you can create a search extension for PopClip.                                |
| 52:54      | And so what you would do is you type in the URL or you paste in the URL, probably.                      |
| 52:59      | And then you replace the part that needs, you know, the search term with curly bracket                  |
| 53:03      | query, close curly bracket.                                                                             |
| 53:06      | And then that's it.                                                                                     |
| 53:07      | That's all you do.                                                                                      |
| 53:09      | And it works.                                                                                           |
| 53:11      | And then afterwards you just click the install button in PopMaker.                                      |
| 53:14      | It's right there at the bottom on the right and it installs it straight into PopClip for                |
| 53:18      | you.                                                                                                    |
| 53:19      | You're done.                                                                                            |
| 53:20      | But what I found a little bit more useful for me is the surround option.                                |
| 53:26      | So surround allows you to put characters at the front and characters at the end.                        |
| 53:29      | And usually you would think about doing this symmetrically, right?                                      |
| 53:32      | So you put one curly bracket at the beginning, one curly bracket at the end, two pipes at               |
| 53:35      | the beginning, two pipes at the end.                                                                    |
| 53:37      | That's spoiler marking in sort of Markdown Plus that's used in things like [[Discord]] and                  |
| 53:42      | so on.                                                                                                  |
| 53:43      | But where I found it to be very useful as well is, for example, database queries at                     |
| 53:50      | work, I have to put a little bit of a string at the front and then I have to close off                  |
| 53:53      | some quotes and stuff at the end.                                                                       |
| 53:55      | When I'm searching for an ID, I created that extension using PopMaker.                                  |
| 54:00      | So I just, you know, I paste what I needed to paste, I double click it or I've got a                    |
| 54:07      | keyboard shortcut that I set up using AppleScript to activate PopMaker so I can activate it for         |
| 54:13      | my keyboard so I can paste it and activate PopClip and then I can just click on the thing               |
| 54:19      | and it turns what is an ID into a query looking for that ID for me.                                     |
| 54:25      | It doesn't take me long to type by hand but it's really nice to just have it do that automatically.     |
| 54:30      | And I was sharing my screen with somebody at work today and they saw me do that and they                |
| 54:33      | were so impressed and it really wasn't a lot of work to do but it was well worth it because             |
| 54:39      | it saves me, you know, a few seconds here and there but, you know, it's also nice when                  |
| 54:44      | other people go, oh wow, I'd never thought of doing that and being able to share that                   |
| 54:48      | with somebody.                                                                                          |
| 54:49      | Yeah, it's just such a powerful, simple automation tool and like I was just looking at the website      |
| 54:56      | again because I hadn't been on it for a while and they have another like built-in plugin                |
| 55:01      | called Sentence Case and this is new to me.                                                             |
| 55:04      | Make each sentence in the selected start with a capital letter with other letters lower                 |
| 55:08      | case.                                                                                                   |
| 55:09      | Have you ever had the thing where you get a bunch of text and it's all lower case or                    |
| 55:13      | all uppercase and the way you're trying to get it to sentence is actually going to require              |
| 55:18      | manual action or you just select it and hit the sentence case clip and there's just a                   |
| 55:25      | bunch of stuff you could do with this and it all starts with and, you know, so much                     |
| 55:31      | of the automation stuff we do is keyboard centric, right?                                               |
| 55:33      | We talk about we want to get everything we can on keyboard shortcuts, hit this button                   |
| 55:38      | and that button and then magic happens.                                                                 |
| 55:40      | Well, PopClip is the opposite.                                                                          |
| 55:41      | It requires a mouse selection in order to activate, but having that set it up with a                    |
| 55:47      | keyboard shortcut as well, David, and I'm going to put a link on there to the area on                   |
| 55:52      | their website where they talk about doing that because that for me was well worth doing.                |
| 55:56      | That's why PopClip never clicked before for me because I had to activate it from the mouse              |
| 56:01      | and I'm much more accurate and faster at selecting text with the keyboard the vast majority of          |
| 56:07      | the time.                                                                                               |
| 56:08      | But you can control PopClip with AppleScript and then you can set that up to be triggered               |
| 56:14      | by a keyboard shortcut from an automated service, fast scripts, [[Alfred]], [[LaunchBar]], or even              |
| 56:20      | [[Quicksilver]].                                                                                            |
| 56:21      | Yeah.                                                                                                   |
| 56:22      | Now I've got to do this, Rose, because I've just been using it with a mouse.                            |
| 56:25      | Oh, you're missing out, David.                                                                          |
| 56:27      | You're missing out.                                                                                     |
| 56:28      | I'm using fast scripts.                                                                                 |
| 56:30      | They have previously sponsored the show, but I would happily talk about them anyway because             |
| 56:33      | it's such a great app.                                                                                  |
| 56:35      | To do this, because I've got lots of little things in fast scripts.                                     |
| 56:38      | I like having a little script icon in my menu bar.                                                      |
| 56:41      | It's both nerdy and geeky and makes me happy and it's also just incredibly useful for all               |
| 56:46      | of these things.                                                                                        |
| 56:49      | But you can tell application PopClip to appear and then it will pop up.                                 |
| 56:54      | You can also disable it, enable it, toggle with or not it's enabled or disabled.                        |
| 57:02      | And also, I mentioned before, I don't have it show up in every application.                             |
| 57:06      | I don't have it show up in my IDE at work usually because that would be annoying all                    |
| 57:12      | the time because I'm frequently like, I still like something and I'm looking at the line                |
| 57:16      | above and oh, PopClip's in the way.                                                                     |
| 57:18      | It's not what I'm intending there.                                                                      |
| 57:20      | So I actually have used PopClip's preferences to say that it shouldn't show up in that application      |
| 57:25      | but it does show up everywhere else.                                                                    |
| 57:26      | And if I do need it in that application at work because they've got some things like                    |
| 57:30      | Slugify here where Slugify will replace spaces with a hyphen.                                           |
| 57:35      | And I use this for variable names.                                                                      |
| 57:38      | So I lowercase it and Slugify it.                                                                       |
| 57:41      | And being able to do that with PopClip is really nice.                                                  |
| 57:44      | So I just, you know, I'm using Control-X, David, because that was, I think, what somebody               |
| 57:49      | somewhere had suggested at some point in time.                                                          |
| 57:52      | Maybe it was on Brett's website that he said he was using that.                                         |
| 57:55      | It doesn't matter because either way, it's what I'm using.                                              |
| 57:57      | You can use whatever keyboard shortcut you like for this.                                               |
| 58:01      | You just need to set it up.                                                                             |
| 58:02      | Yeah.                                                                                                   |
| 58:03      | And now, another one, I've got to add an OmniFocus repeating task to keep going back and checking       |
| 58:07      | for new ones.                                                                                           |
| 58:08      | They've got a Readwise one.                                                                             |
| 58:09      | So I can select any text and add it as a quote to my Readwise account, which is something               |
| 58:14      | I use a lot.                                                                                            |
| 58:15      | So yes, PopClip, yes, you should.                                                                       |
| 58:20      | I mentioned that I was creating some PopClip extensions and I want to talk about this a                 |
| 58:25      | little bit.                                                                                             |
| 58:26      | Okay.                                                                                                   |
| 58:27      | First of all, there is some documentation on the PopClip website as to how you can do                   |
| 58:32      | this, how you can create your own PopClip extensions.                                                   |
| 58:36      | And it's not that difficult to take a look at it and go, okay, yeah, I kind of see what's               |
| 58:44      | going on here.                                                                                          |
| 58:45      | And they're all on, all of the extensions that come natively with PopClip are on GitHub                 |
| 58:52      | as well.                                                                                                |
| 58:53      | Yeah.                                                                                                   |
| 58:54      | So if you go and look at them, you can download them.                                                   |
| 58:56      | What I do is I drag the dot PopClip extension file onto [[BBEdit]], because then this will open             |
| 59:04      | that file in [[BBEdit]] as a folder.                                                                        |
| 59:06      | So a dot PopClip extension is actually a folder.                                                        |
| 59:09      | And inside it, it's got the script and a little bit of information about the script, and it's           |
| 59:15      | also potentially got an icon file in there so that you can change the icon that appears.                |
| 59:20      | But I drag it onto [[BBEdit]] so that then I can see all the text and edit it.                              |
| 59:25      | But what I did, David, because, you know, [[Brett Terpstra]] is a smart cookie, is I pressed                |
| 59:32      | the option key when I was using PopMaker.                                                               |
| 59:36      | And instead of installing the PopClip extension directly into PopClip, it gave me the option            |
| 59:41      | to save it.                                                                                             |
| 59:42      | So I installed the one that I was working on in PopClip, and then I said, okay, cool,                   |
| 59:48      | let me save this.                                                                                       |
| 59:49      | And I opened it up.                                                                                     |
| 59:50      | And so Brett wrote this in Ruby, and so people might be going, oh gosh, no, that sounds complicated.    |
| 59:55      | Well, Ruby is, you know, not a language I'm familiar with at all.                                       |
| 59:59      | I am familiar with programming, though, but I did just have a little bit of a Google.                   |
| 01:00:04   | And have a look and see how can I do something with this.                                               |
| 01:00:07   | And so I've got, I think, I mean, there's only really probably one of the extensions                    |
| 01:00:12   | that I put on my GitHub page that will probably be of interest to people.                               |
| 01:00:16   | And that is the Amazon Smile link, because I frequently end up copying links from Amazon                |
| 01:00:22   | to people.                                                                                              |
| 01:00:23   | But if I'm sharing links with my friends, I don't want to be using Amazon affiliate links,              |
| 01:00:26   | and I definitely don't want them being tracked by all of that, you know, referral rubbish               |
| 01:00:30   | at the end of an Amazon URL.                                                                            |
| 01:00:33   | So I have an Amazon Smile PopClip extension, where you can select an Amazon URL, you click              |
| 01:00:40   | on this little Amazon Smile icon that appears in PopClip, and it will just replace the "www." with "smile".   |
| 01:00:49   | And then it also just gets rid of all that tracking gunk at the end.                                    |
| 01:00:52   | So you end up with a relatively short URL that works, and it donates money to charity,                  |
| 01:00:56   | which, you know, always feels like a great thing.                                                       |
| 01:00:58   | And that's also downloadable in the GitHub, we're going to have linked in the show notes.               |
| 01:01:02   | Yeah, it is.                                                                                            |
| 01:01:04   | And there's there's some other things here as well.                                                     |
| 01:01:06   | There's markdown code block and markdown code.                                                          |
| 01:01:08   | I would not use these.                                                                                  |
| 01:01:09   | I would look at Brett's PopClip extensions, because he has one that works, whether it's                 |
| 01:01:14   | one or multiple lines of code, and it'll do inline code or blocks of code for you.                      |
| 01:01:18   | That was just me playing around with this a little bit.                                                 |
| 01:01:21   | But there's there's also my one which will swap the the HTTB local with HTTPS dev.                      |
| 01:01:28   | You might not need that exact one.                                                                      |
| 01:01:30   | But you might want to say, hey, I want to be able to swap this text with this text.                     |
| 01:01:34   | But if it's so this text with that text, but if it's that text, I want to become this text.             |
| 01:01:39   | And so you can have a look at my my script to see how you can do that, because you can                  |
| 01:01:42   | just replace the text.                                                                                  |
| 01:01:45   | You're all if you're listening to this capable of this, just drag the thing on to say Nova              |
| 01:01:51   | or [[BBEdit]] or a atom could do this, I think sublime text probably as well.                              |
| 01:01:57   | And then you just need to edit the script file that's inside of it.                                     |
| 01:02:02   | Well, and either way, whether using PopClip with just the built in stuff or downloading                 |
| 01:02:07   | some of Brett and Rose's extensions, this is a great automation tool.                                   |
| 01:02:13   | And one thing that Rose kind of referenced here is Brett's extensions.                                  |
| 01:02:17   | If you use Markdown, he has a whole set because Brett made that Markdown tool set years ago,            |
| 01:02:22   | but he added a bunch of those as PopClip extensions to.                                                 |
| 01:02:26   | And I find that a really great place to apply PopClip with Markdown's conversions and whatnot.          |
| 01:02:32   | Same.                                                                                                   |
| 01:02:33   | Same.                                                                                                   |
| 01:02:34   | Yes.                                                                                                    |
| 01:02:35   | I've installed some of those.                                                                           |
| 01:02:36   | I'm going to carefully curate which PopClip extensions I'm using.                                       |
| 01:02:40   | And so one tip I will give people is if you open the PopClip from the menu bar, you can                 |
| 01:02:46   | uncheck some options.                                                                                   |
| 01:02:48   | So I personally don't need Kurt copy paste, the dictionary and things like that.                        |
| 01:02:53   | But the parcel plugin parcels a great package tracking application.                                     |
| 01:02:57   | There's also were these for David for deliveries, not for you, depends which one you're using           |
| 01:03:02   | if you're using parcel or deliveries, which ones for you.                                               |
| 01:03:05   | But you can then just select, say, a tracking number and pop it open in parcel or deliveries,           |
| 01:03:09   | which is brilliant.                                                                                     |
| 01:03:11   | So I like that.                                                                                         |
| 01:03:12   | Yeah.                                                                                                   |
| 01:03:13   | I find a lot of the built-in, the default PopClip extensions I don't want, you know, like one           |
| 01:03:19   | of them is search.                                                                                      |
| 01:03:20   | Like you can select text and click a PopClip and it searches it in Google.                              |
| 01:03:25   | I just always run searches through [[Alfred]].                                                              |
| 01:03:27   | I just, for whatever reason, I just never use it.                                                       |
| 01:03:29   | So I turn that off and, and like, like cut copy and paste, I keyboard shortcut that.                    |
| 01:03:35   | I don't need PopClip to do that for me.                                                                 |
| 01:03:37   | I just don't find that I ever use.                                                                      |
| 01:03:39   | So it's funny that the ones that the developer thinks that we would all want are the ones               |
| 01:03:43   | I almost always turn off.                                                                               |
| 01:03:45   | I would suggest that some of these perhaps are not the ones that, you know, a lot of                    |
| 01:03:50   | our audience would use because most of us probably already have, you know, all of this                  |
| 01:03:55   | stuff memorised with keyboard shortcuts.                                                                |
| 01:03:57   | But there are, there is one that I feel I should mention because it's becoming more                     |
| 01:04:01   | and more useful now.                                                                                    |
| 01:04:02   | I'm going to be going back into the office just after we record this episode.                           |
| 01:04:07   | And I bet I'm gonna have to share text with some people on the other side of the table.                 |
| 01:04:11   | The large type extension for PopClip is making its way into my arsenal because I can just               |
| 01:04:16   | double, you know, select some text, click the large type option and it'll pop up on                     |
| 01:04:20   | the middle of my screen as a large text and everybody will be able to see it.                           |
| 01:04:24   | So that is brilliant.                                                                                   |
| 01:04:26   | Yeah, I use that one too.                                                                               |
| 01:04:28   | And that's just because I'm a little older than you and I like large texts and sometimes                |
| 01:04:32   | like, there'll be a phone number or something on the screen that I want to see bigger.                  |
| 01:04:37   | And PopClip has a large text and it does a really nice job of displaying it large on                    |
| 01:04:42   | your screen with a nice background.                                                                     |
| 01:04:44   | So it's easy to read.                                                                                   |
| 01:04:45   | Yep.                                                                                                    |
| 01:04:46   | I think that, but that's not a built-in one, isn't that a down, that's one of the ones                  |
| 01:04:49   | that you download.                                                                                      |
| 01:04:50   | Yeah, that's one of the ones that you can download from the website.                                    |
| 01:04:51   | Yeah.                                                                                                   |
| 01:04:52   | I've just put a link to all of the PopClip extensions in the show notes.                                |
| 01:04:54   | I'm not going to link to individual ones because you can use control command F on your                  |
| 01:05:00   | iPhone or your iPad with a keyboard, obviously, on the iPad to find it on the page.                     |
| 01:05:07   | And of course, you can't have to be on your Mac to install the PopClip extensions inside                |
| 01:05:13   | a PopClip.                                                                                              |
| 01:05:14   | But they are, you know, this is really good and I'm a big fan of it.                                    |
| 01:05:18   | I've been using this very heavily for a couple of weeks now and it's definitely improved                |
| 01:05:23   | my workflows.                                                                                           |
| 01:05:24   | Another couple downloadable ones of note is paste in match style, you know, where whatever's            |
| 01:05:31   | in your clip or it gets pasted, but it matches the style.                                               |
| 01:05:34   | That's a downloadable one.                                                                              |
| 01:05:35   | And what was the other one I was just looking at here?                                                  |
| 01:05:42   | [[Drafts]] has one for [[Drafts]] and read-wise, which I already mentioned, but I'm going to immediately        |
| 01:05:48   | start using that one more on word count.                                                                |
| 01:05:51   | That's the other one.                                                                                   |
| 01:05:52   | Word count, this is a really great way to get word count, you select text and it gives                  |
| 01:05:56   | you the word count.                                                                                     |
| 01:05:57   | Yes.                                                                                                    |
| 01:05:58   | Yeah.                                                                                                   |
| 01:05:59   | I really like it.                                                                                       |
| 01:06:00   | I've also been using it for music when people mention artists or an album or I can just                 |
| 01:06:04   | select it and pop it up in the music, which is really nice.                                             |
| 01:06:08   | So yeah, there's lots of good stuff here.                                                               |
| 01:06:12   | This episode of The Automators is brought to you by Stripe.                                             |
| 01:06:16   | Many leaders of adaptive businesses choose Stripe as their payment platform because with                |
| 01:06:20   | Stripe businesses can easily optimise their payment infrastructure, simplify their expansion            |
| 01:06:26   | plans and create new revenue streams, all to help them grow and initiate change rather                  |
| 01:06:31   | than having to react to it.                                                                             |
| 01:06:33   | In fact, businesses such as Shopify, Postmates and Twilio use Stripe to power their global              |
| 01:06:39   | payments.                                                                                               |
| 01:06:40   | And to add to that list of companies is Relay FM.                                                       |
| 01:06:44   | Relay FM has trusted Stripe to manage payments since 2016.                                              |
| 01:06:48   | It's a huge benefit that they accept more than 135 different currencies and payment                     |
| 01:06:53   | methods, which means more time can be spent on hosting and prepping for shows while Stripe              |
| 01:06:59   | helps handle the payments.                                                                              |
| 01:07:02   | Stripe ranked the highest for strategy and current offerings in the 2020 Forester Wave                  |
| 01:07:06   | report on merchant payment providers.                                                                   |
| 01:07:09   | And their current offering is so comprehensive and versatile.                                           |
| 01:07:12   | With Stripe's products powering payments for a wide variety of businesses from online                   |
| 01:07:17   | and in-person retailers to subscription businesses, software platforms and marketplaces, and            |
| 01:07:23   | even in between.                                                                                        |
| 01:07:25   | I also use Stripe.                                                                                      |
| 01:07:26   | I have several international clients and it was really hard getting paid by them.                       |
| 01:07:30   | As soon as I adopted Stripe as my payment method, all of those problems just went away.                 |
| 01:07:35   | That was years ago and I've been super happy with it ever since.                                        |
| 01:07:39   | So head over to Stripe.com if you'd like to learn more about how Stripe and their products              |
| 01:07:43   | can support your business.                                                                              |
| 01:07:45   | That's Stripe.com to learn more today.                                                                  |
| 01:07:48   | Our thanks to Stripe for their support of the Automators and all of Relay FM.                           |
| 01:07:54   | Rosemary Orchard, I happen to know you got some new gear.                                               |
| 01:07:57   | Yeah.                                                                                                   |
| 01:07:58   | Yeah.                                                                                                   |
| 01:07:59   | I've got an iPhone.                                                                                     |
| 01:08:00   | I've got an iPad.                                                                                       |
| 01:08:01   | The iPad's mini.                                                                                        |
| 01:08:02   | The iPhone's large.                                                                                     |
| 01:08:03   | Or it feels large to me.                                                                                |
| 01:08:04   | I didn't go max, but wow, this thing feels huge.                                                        |
| 01:08:07   | And wow, I love it.                                                                                     |
| 01:08:08   | All right.                                                                                              |
| 01:08:09   | Let's work our way to the iPhone.                                                                       |
| 01:08:10   | I want to start with the iPad mini because I know that you really are digging it.                       |
| 01:08:13   | Which one did you get?                                                                                  |
| 01:08:15   | Two fifty six gigabytes of purple cellular.                                                             |
| 01:08:20   | Because so my previous iPad mini was a lovely iPad mini, but I made two fatal mistakes when             |
| 01:08:26   | I bought it.                                                                                            |
| 01:08:27   | Number one, I only got 64 gigabytes of text as a storage space because I thought I'm not                |
| 01:08:32   | going to use this, you know, for lots of media.                                                         |
| 01:08:35   | No, turns out I actually do like to be able to download more than, you know, a couple                   |
| 01:08:40   | of gigs here and a couple of gigs there.                                                                |
| 01:08:42   | And then cellular because it is very nice to have the option to put in a SIM card.                      |
| 01:08:47   | And I found out I'm switching phone providers here in the UK to one with eSIM that I will               |
| 01:08:53   | be able to share data between my devices so I can get a very low data plan on the iPad.                 |
| 01:08:59   | But if I need more, I will be able to transfer it from the stupidly humongously large amount            |
| 01:09:03   | of data that I will be getting on my iPhone in that bundle.                                             |
| 01:09:07   | So hopefully, you know, that'll, I'll be making full use of that, but wow, this iPad mini.              |
| 01:09:13   | So cute.                                                                                                |
| 01:09:14   | And yeah, it's a really great iPad.                                                                     |
| 01:09:18   | You got what colour did you get?                                                                         |
| 01:09:20   | Purple, of course.                                                                                      |
| 01:09:21   | I have to say it's not really purple.                                                                   |
| 01:09:23   | It is gray that once saw the colour purple and is trying to remember what it looked like.                |
| 01:09:30   | It's not particularly purple.                                                                           |
| 01:09:32   | If I hold the bezel of my purple iPhone mini next to it, then you can see that the purple               |
| 01:09:38   | iPhone mini side bezel is much more purple than the metal of the purple of the iPad.                    |
| 01:09:43   | But equally, they had to cover much more iPad in this coating.                                          |
| 01:09:46   | So I understand why it's not so purple, but it's nice that I can say that officially                    |
| 01:09:52   | is purple.                                                                                              |
| 01:09:53   | Okay, so now you've got a purple iMac, purple iPad mini, any other purple gear in your life             |
| 01:09:59   | first?                                                                                                  |
| 01:10:00   | Is that it?                                                                                             |
| 01:10:01   | I got the new Apple Watch straps, the braided woven loops in English lavender and dark cherry,          |
| 01:10:11   | because they're purple too.                                                                             |
| 01:10:13   | I will hopefully be getting a new Apple Watch.                                                          |
| 01:10:14   | This one, unfortunately, had a little bit of an accident a while ago and it's got some                  |
| 01:10:18   | pretty horrible scratches on the screen.                                                                |
| 01:10:20   | So I will be getting a new one and again, switching to a cellular one because I'm hoping                |
| 01:10:24   | to be leaving the house on a more regular basis and maybe leaving my iPhone behind                      |
| 01:10:28   | at times but wanting to still be able to communicate with people.                                       |
| 01:10:32   | So yeah, Apple Watch is in my future, but not yet because Apple haven't announced the                   |
| 01:10:37   | release date.                                                                                           |
| 01:10:38   | You know, I really like those woven bands.                                                              |
| 01:10:40   | That's never really come up on any podcast, but I've never bought an Apple one.                         |
| 01:10:45   | I get them off Amazon and they're like $10 for one on Amazon that I don't know if they're               |
| 01:10:51   | as good, but they seem like they're pretty good and there's a lot of colours available.                  |
| 01:10:57   | But I really like just, you know, slipping it over my hand and not having a buckle scratch              |
| 01:11:02   | my MacBook and it's those bands I think don't get enough credit.                                        |
| 01:11:08   | No, I've got the Pride one as well.                                                                     |
| 01:11:10   | That was the first one of the woven ones that I got from Apple.                                         |
| 01:11:13   | And what I like about it is I frequently end up checking my wrist to make sure I'm wearing              |
| 01:11:16   | my watch because it's so comfortable and it doesn't feel like I'm wearing it.                           |
| 01:11:20   | And that to me is a sign that I've A, got the size just right and B, it's just incredibly               |
| 01:11:26   | comfortable.                                                                                            |
| 01:11:28   | But yeah, it is, it is really nice.                                                                     |
| 01:11:30   | And I have to say, I'm a fan of the new colours that they've come out with for the cases.                |
| 01:11:34   | I, yeah, I wish that the, the, the iPad mini was a little more purple and that the iPhone               |
| 01:11:42   | was purple because the iPhone's not purple, David.                                                      |
| 01:11:44   | I'm sad.                                                                                                |
| 01:11:45   | Okay.                                                                                                   |
| 01:11:46   | So with the iPad mini, are you using the Apple pencil?                                                  |
| 01:11:49   | Yes.                                                                                                    |
| 01:11:50   | So I already had the Apple pencil for my 12.9 inch iPad pro.                                            |
| 01:11:55   | I have not bought a second Apple pencil.                                                                |
| 01:11:57   | I do not need two Apple pencils.                                                                        |
| 01:11:59   | So I just have the same one.                                                                            |
| 01:12:00   | And because you just pair it by sticking it to the side, it's really easy.                              |
| 01:12:05   | If I want to use it on the bigger one, I have hot swap between them a couple of times.                  |
| 01:12:09   | You know, you just pop it down on the side of the other iPad and then you use it on that                |
| 01:12:12   | iPad and then you swap it back.                                                                         |
| 01:12:14   | It's very easy to do.                                                                                   |
| 01:12:16   | And yeah, it's working great.                                                                           |
| 01:12:18   | I like it because it's usually, you know, I'll go and I'll be doing tech support at                     |
| 01:12:23   | my grandmother's or something and she's trying to tell me all this information.                         |
| 01:12:27   | And I don't want to take a 12.9 inch iPad pro with a keyboard with me or even 11 inch.                  |
| 01:12:31   | That was a little too big for that, but taking the iPad mini in the Apple pencil allows me              |
| 01:12:36   | to just scribble this information down.                                                                 |
| 01:12:38   | And then I can look at it and go, okay, so she's giving me all this information.                        |
| 01:12:42   | The two things that are actually relevant here are this.                                                |
| 01:12:45   | And that's how I can solve your tech support problem grandma.                                           |
| 01:12:47   | There we go.                                                                                            |
| 01:12:48   | You know, sometimes you just have to listen and let people tell the whole story and find                |
| 01:12:51   | out what's useful.                                                                                      |
| 01:12:52   | And the iPad mini has been great at helping me do that in those situations already.                     |
| 01:12:56   | So I'm really impressed with it.                                                                        |
| 01:12:58   | All right.                                                                                              |
| 01:12:59   | When you need to scratch a quick note with your iPad, where do you go?                                  |
| 01:13:04   | So I actually go to [[Drafts]].                                                                             |
| 01:13:07   | So people are going to be going, wait, [[Drafts]] has handwriting support.                                  |
| 01:13:11   | [[Drafts]] doesn't do handwritten notes, but it supports the scribble where you can just write,             |
| 01:13:17   | you know, words.                                                                                        |
| 01:13:18   | And I have to say, even if I am writing really, really badly, it does a really good job of              |
| 01:13:23   | figuring this out.                                                                                      |
| 01:13:24   | So, you know, this means that I can just be sort of scribbling and, you know, as long                   |
| 01:13:29   | as my letters are approximately correct, it will do that.                                               |
| 01:13:32   | Now if I am going to be taking notes from something, say my grandmother said or something,              |
| 01:13:38   | then I will usually switch to maybe Apple notes, but often notability because I like                    |
| 01:13:44   | the dotted background on that and I like the ever scrolling pages of it.                                |
| 01:13:49   | For some reason, notes has just never really clicked in my head as a place to handwrite                 |
| 01:13:53   | notes.                                                                                                  |
| 01:13:54   | But it's going to be [[Drafts]] if I want the end results to be typed or notability if                      |
| 01:13:59   | I want to be able to scribble down random diagrams and stuff as I go.                                   |
| 01:14:03   | I'm going to try that with [[Drafts]], you know, using scribble to enter notes because in searchable        |
| 01:14:08   | and [[Drafts]] is where so much of my other stuff is anyway.                                                |
| 01:14:12   | But I went through a similar process, recently, you know, we've released iOS 15 and it's                |
| 01:14:18   | got this new feature where if you swipe up from the upper right corner with your pencil,                |
| 01:14:22   | it opens a new Apple note that you can start drawing on.                                                |
| 01:14:27   | But I just find, number one, my writing in Apple notes is not very legible, that there's                |
| 01:14:35   | no dot grid or any lines, it's just a blank page and my brain has trouble like organising               |
| 01:14:41   | that into straight lines.                                                                               |
| 01:14:43   | And number two, it's not customisable enough in terms of size, it's like a sticky pad,                  |
| 01:14:49   | it's not like the full page.                                                                            |
| 01:14:52   | And I know that there's another thing you can do where you tap it with a pencil and                     |
| 01:14:55   | it opens a new one as well in Apple notes.                                                              |
| 01:14:57   | But just the bottom line is Apple notes, to me, could get better at Apple pencil input.                 |
| 01:15:05   | And I really like their tool, their pencil tool, you know, where you can change the                     |
| 01:15:08   | brush and the colour and everything, but just like things like dot grid or good notes has                |
| 01:15:14   | this great feature where it has like a large section at the bottom that you write in and                |
| 01:15:19   | then it puts the text and the, you know, the appropriate size into the document.                        |
| 01:15:25   | And I really like that because I can write kind of big, but then it's more legible when                 |
| 01:15:29   | I'm done and it's straight lines.                                                                       |
| 01:15:32   | And Apple notes has nothing like that.                                                                  |
| 01:15:34   | Yeah, yeah, no, I find particularly the lack of dot grid gets to me because notes has lines             |
| 01:15:41   | and it has a grid, but I like a dot grid a lot of the time.                                             |
| 01:15:44   | I will frequently write with lines, but if I want diagrams and stuff, I want a dot grid                 |
| 01:15:48   | because it allows me to, you know, do diagonals and stuff easily and my brain feels better              |
| 01:15:52   | doing it, I guess.                                                                                      |
| 01:15:53   | Yeah, me too.                                                                                           |
| 01:15:54   | And I'm a very much a visual thinker, so I do make diagrams and things when I'm taking                  |
| 01:15:59   | notes and like you, I've kind of given up on Apple notes, so my go to is good notes.                    |
| 01:16:06   | And I've got it in my doc.                                                                              |
| 01:16:08   | And if I need to use the pencil to get something in, I find that it takes a few extra seconds           |
| 01:16:14   | to get into good notes, but the notes I take are so much better that it's worth a few extra             |
| 01:16:19   | seconds.                                                                                                |
| 01:16:20   | Yes, exactly.                                                                                           |
| 01:16:21   | And I love the idea of quick note that flies in from the bottom right where you drag it                 |
| 01:16:25   | in with the pencil.                                                                                     |
| 01:16:26   | I found on my Monterey MacBook, David, I kept activating it by accident and it was really               |
| 01:16:32   | frustrating.                                                                                            |
| 01:16:34   | And so, yeah, that was just annoying.                                                                   |
| 01:16:37   | On the iPad, it's fortunately not activating by accident for me, but I wish it could just               |
| 01:16:42   | be a shortcut, like swiping in with the pencil from the bottom right hand corner or something           |
| 01:16:45   | would allow me to run a shortcut because I just have it open notability, that would                     |
| 01:16:49   | be fine.                                                                                                |
| 01:16:50   | But no, they can't do that yet, maybe.                                                                  |
| 01:16:54   | Maybe next year, Apple, if you're listening, please let us turn that into an accessibility              |
| 01:16:58   | shortcut of some kind, and I can run a shortcut with it.                                                |
| 01:17:02   | Just give us a little more power.                                                                       |
| 01:17:03   | Let us have a doc grid and determine how big the note is by default.                                    |
| 01:17:08   | Because the thing we haven't mentioned is that the quick note is contextual computing                   |
| 01:17:15   | implemented because if you quick note from a web page, it creates a link to the page as                  |
| 01:17:20   | you create the note.                                                                                    |
| 01:17:21   | I mean, there's so much of it that's superior to me going to good notes or you going to                 |
| 01:17:25   | notability.                                                                                             |
| 01:17:27   | I would really like to make it work, but I just find trying to take notes with a pencil                 |
| 01:17:34   | in that little yellow box with no guidance whatsoever, it just doesn't work for me.                     |
| 01:17:41   | Yeah, it's really good if you do need to see what's on the screen behind it, but frequently             |
| 01:17:47   | I don't need to see it, and often if I do want to see what's on a screen, then there's web              |
| 01:17:52   | embeds in Notability or just take a screenshot and include that.                                        |
| 01:17:57   | It's not that difficult to do, so there are ways around that problem without using what                 |
| 01:18:02   | feels like a compromised user experience for me.                                                        |
| 01:18:05   | I love the automation idea that I have all these contextual notes and everything, but                   |
| 01:18:10   | I hate the fact that it just doesn't work for me the way I needed to.                                   |
| 01:18:14   | So I'm hoping that it improves because it does seem like it would be a great opportunity                |
| 01:18:18   | for a lot of people.                                                                                    |
| 01:18:19   | I think it's a great start, but there's definitely room to improve with that.                           |
| 01:18:23   | All right, switching over, but it sounds like in general, you're happy with the iPad                    |
| 01:18:27   | many of the size and everything?                                                                        |
| 01:18:29   | Yes.                                                                                                    |
| 01:18:30   | Yeah, the only thing is, is I do keep thinking it's got Face ID and staring at it and smiling           |
| 01:18:34   | and wondering why it doesn't unlock because it's got Touch ID built into the power button.              |
| 01:18:39   | But it does have centre stage, David, it is a great zoom iPad, [[FaceTime]] iPad and stuff                  |
| 01:18:43   | when I'm talking to my parents or my grandparents on [[FaceTime]], then it works really well there.         |
| 01:18:49   | So I really like that.                                                                                  |
| 01:18:51   | I'd add that the iPad mini is an excellent consumption tool.                                            |
| 01:18:55   | If you have a lot of Kindle books, if you have Marvel Unlimited, [[Apple Books]], if there's                |
| 01:19:01   | anything you do where you read a lot, Instapaper, read-wise, that kind of stuff, I find it just         |
| 01:19:07   | outstanding for that.                                                                                   |
| 01:19:09   | So that's another good use.                                                                             |
| 01:19:12   | All right, switching gears, so which phone did you get this year?                                       |
| 01:19:16   | Did you get the Pro Max or the Pro or just the standard 13?                                             |
| 01:19:19   | I did not get the Pro Max.                                                                              |
| 01:19:22   | It is so large, so large, David.                                                                        |
| 01:19:25   | I got the Pro.                                                                                          |
| 01:19:26   | I had to check in settings multiple times to make sure I didn't accidentally buy a Pro                  |
| 01:19:30   | Max because this thing feels huge, but I have a Maxi PopSocket, which makes it much easier              |
| 01:19:34   | to hold, so I'm fine with that.                                                                         |
| 01:19:36   | And you're coming from, what are you coming from?                                                       |
| 01:19:39   | Well, that's just it.                                                                                   |
| 01:19:40   | I wanted to do a little background.                                                                     |
| 01:19:41   | Well, last year, I bought the 12 Pro Max, and I loved it because I thought these devices                |
| 01:19:46   | never fit in my pockets anyway.                                                                         |
| 01:19:47   | They always have to go in a bag, and may as well just get the biggest phone possible.                   |
| 01:19:51   | And last year as well, there was a camera difference between the Pro and the Pro Max.                   |
| 01:19:56   | And so I had it for a while, and then they came out with purple.                                        |
| 01:19:59   | And I thought, you know what, I'm going to try the mini size.                                           |
| 01:20:02   | I wrote a bit of an article about it trying it out.                                                     |
| 01:20:04   | I wrote that in the Online ScreencastsOnline Online magazine for Online ScreencastsOnline Online subscribers.                   |
| 01:20:08   | And the mini is a great device, but I had two problems with the mini.                                   |
| 01:20:14   | Is one of them battery life?                                                                            |
| 01:20:16   | Yeah, battery life.                                                                                     |
| 01:20:17   | Oh my gosh.                                                                                             |
| 01:20:18   | It was like, okay, I've made it from the office to the living room for context, David, that's           |
| 01:20:23   | less than 15 feet.                                                                                      |
| 01:20:24   | I better put it on charge again.                                                                        |
| 01:20:27   | I do use my phone a lot.                                                                                |
| 01:20:29   | It is a remote control for music during the day.                                                        |
| 01:20:32   | And I get messages and stuff come in on there and phone calls and things.                               |
| 01:20:36   | And, you know, I do spend a lot of time using my phone, but equally it felt like I had to               |
| 01:20:42   | trash my phone all the time, which was not great.                                                       |
| 01:20:46   | And I know they've significantly improved that with the 13 mini, which I'm really pleased               |
| 01:20:49   | to hear.                                                                                                |
| 01:20:50   | Well, I think they said they added an hour and a half.                                                  |
| 01:20:53   | Yeah.                                                                                                   |
| 01:20:54   | Yeah.                                                                                                   |
| 01:20:55   | So Steven Hackett's wife, Mary, apparently he sold her on the 13 mini because he said                   |
| 01:21:00   | it's got an hour and a half more battery life and their sponsors.                                       |
| 01:21:03   | What colours does it come in?                                                                            |
| 01:21:05   | That was on Fusion, this month's episode of Fusion, which is the show for Relay FM subscribers.        |
| 01:21:12   | But that was a big problem, the battery life or lack thereof, but the other problem for                 |
| 01:21:19   | me, David, was the lack of telephoto lens.                                                              |
| 01:21:22   | I know a lot of people say, just go a couple of steps forward and you can get a better                  |
| 01:21:25   | shot or you'll get the same shot.                                                                       |
| 01:21:28   | But I find that I end up trying to take pictures where I literally can't move any further forward       |
| 01:21:33   | without falling off a cliff or something like that.                                                     |
| 01:21:36   | And that's where having telephoto just to get in a little bit further definitely comes                  |
| 01:21:41   | in handy.                                                                                               |
| 01:21:43   | And so when I found out that the new pro has a three times telephoto lens instead of two                |
| 01:21:48   | times and all of the lenses have got optical image stabilisation, well, I went pro.                     |
| 01:21:54   | Fortunately, the Max doesn't have a better camera this year because I don't think I                     |
| 01:21:58   | could manage after coming for the mini.                                                                 |
| 01:21:59   | This thing feels huge, feels like I'm going to take somebody out with it.                               |
| 01:22:03   | It's big.                                                                                               |
| 01:22:04   | I do like how it feels in my hand, especially the Max safe pop socket.                                  |
| 01:22:09   | And I have to say, weirdly enough, I'm finding it feels like NFC tag automations are running            |
| 01:22:15   | better.                                                                                                 |
| 01:22:16   | I don't know if that's actually a thing.                                                                |
| 01:22:17   | If they did something to that, there is no mention of that anywhere, but it feels like                  |
| 01:22:21   | my NFC tag automations are more reliable now.                                                           |
| 01:22:24   | Oh, they're always improving stuff.                                                                     |
| 01:22:28   | And I talked about it on the most recent Mac power users, but I've had a pro Max or                     |
| 01:22:33   | the large version, the Max version now for like four or five years.                                     |
| 01:22:38   | And I'm always going to buy the iPhone with the best camera system because I really like                |
| 01:22:43   | to use the iPhone as a camera.                                                                          |
| 01:22:45   | But because this year, both the pro and the pro Max have the same camera system, I decided              |
| 01:22:51   | to go with the smaller one and I've had it now about a week and I really like it.                       |
| 01:22:56   | So I'm super happy with it.                                                                             |
| 01:22:59   | I got the white one.                                                                                    |
| 01:23:00   | What colour did you get?                                                                                 |
| 01:23:01   | I went for the Sierra blue, which in a lot of lights in my house frequently looks like                  |
| 01:23:07   | a sort of lavender colour.                                                                               |
| 01:23:09   | It is nowhere near as purple as the purple mini, which makes me a little sad all the                    |
| 01:23:12   | time because the purple mini was so purple.                                                             |
| 01:23:14   | I love it.                                                                                              |
| 01:23:15   | You got to get a purple case.                                                                           |
| 01:23:16   | That's all.                                                                                             |
| 01:23:17   | I did.                                                                                                  |
| 01:23:18   | So I got the wisteria leather case for the iPhone.                                                      |
| 01:23:21   | I've got the English lavender folio case and the English lavender watch strap.                          |
| 01:23:25   | I don't know what the difference between English lavender and wisteria is.                              |
| 01:23:29   | They are incredibly similar.                                                                            |
| 01:23:31   | You hold them next to each other.                                                                       |
| 01:23:32   | There is a difference, but I'm not quite sure why they didn't just pick the same colour.                 |
| 01:23:35   | Yeah.                                                                                                   |
| 01:23:36   | It's like last year they had, I think it was called California poppy, which I'm like,                   |
| 01:23:40   | hey, I'm from California.                                                                               |
| 01:23:41   | I'll get this one.                                                                                      |
| 01:23:42   | And then this year they've got essentially the same colour with a different name.                        |
| 01:23:45   | It's called golden brown this year.                                                                     |
| 01:23:46   | Yeah.                                                                                                   |
| 01:23:47   | Yeah.                                                                                                   |
| 01:23:48   | Because they don't have saddle brown anymore.                                                           |
| 01:23:49   | Yeah.                                                                                                   |
| 01:23:50   | But yeah.                                                                                               |
| 01:23:51   | So I got the purple case, which I like.                                                                 |
| 01:23:54   | I have to say, the one thing I'm noticing, I have a [[MagSafe]] charging stand on my desk                   |
| 01:23:59   | and I can see already that there's a little bit of ring forming there.                                  |
| 01:24:01   | That's fine.                                                                                            |
| 01:24:02   | I'm not precious about my cases.                                                                        |
| 01:24:03   | The purpose of the case is to protect my phone.                                                         |
| 01:24:05   | And I've got a [[MagSafe]] pop socket on it most of the time anyway, to be honest.                          |
| 01:24:10   | And I have to say, I'm very impressed with the [[MagSafe]] pop socket.                                      |
| 01:24:12   | It is incredibly strong.                                                                                |
| 01:24:14   | That thing's going nowhere unless I try to get it off.                                                  |
| 01:24:16   | Yeah.                                                                                                   |
| 01:24:17   | Like if I actively try to lift it off, it is a bit of a, you know, like a two-handed job.               |
| 01:24:21   | I can't do it with one hand, I think.                                                                   |
| 01:24:23   | Yes.                                                                                                    |
| 01:24:24   | I managed that.                                                                                         |
| 01:24:25   | Wow.                                                                                                    |
| 01:24:26   | That was surprisingly hard to do.                                                                       |
| 01:24:27   | But yeah, I'm pleased that it is difficult to get the [[MagSafe]] pop socket off because                    |
| 01:24:31   | I don't want to be dropping my phone.                                                                   |
| 01:24:32   | It does just make it a little easier to adjust.                                                         |
| 01:24:34   | And I can, without the use of reachability, go from the bottom right-hand corner to the                 |
| 01:24:38   | top left of my iPhone with the same thumb, thanks to the pop socket.                                    |
| 01:24:43   | Yeah.                                                                                                   |
| 01:24:44   | The California poppy case with my iPhone 12 Pro Max got pretty bad over the course of                   |
| 01:24:51   | a year.                                                                                                 |
| 01:24:52   | They got pretty scuffed up and dirty and gross.                                                         |
| 01:24:56   | And I don't like any of the leather colours this year.                                                   |
| 01:24:58   | None of them really resonate with me.                                                                   |
| 01:25:01   | So I'm getting a rubber case for the first time, an Apple Silicon case.                                 |
| 01:25:07   | I mean, I'm like you all in with the [[MagSafe]], so that really limits what cases I can get.               |
| 01:25:14   | But I got the, I ordered the Blue J1.                                                                   |
| 01:25:16   | I think it'll look cool with the white phone and I'm just waiting for it to get here.                   |
| 01:25:20   | And I know that it's harder to get out of your pocket because it's sticky, but whatever.                |
| 01:25:27   | And like you, I've gone all in with [[MagSafe]].                                                            |
| 01:25:29   | I have the pop socket, I have the battery, and I've got a couple of those pucks around                  |
| 01:25:34   | the house.                                                                                              |
| 01:25:35   | I really think [[MagSafe]] is a good idea.                                                                  |
| 01:25:38   | And I even have the wallet.                                                                             |
| 01:25:40   | And I think the wallet's good.                                                                          |
| 01:25:41   | I mean, I've never, I don't worry about losing it.                                                      |
| 01:25:45   | I got the new wallet in Dark Cherry because I've, because I do have a couple of cards                   |
| 01:25:52   | and I didn't like the fact that there was no find my, in the other Apple wallet.                        |
| 01:25:58   | So I did upgrade my Apple wallet.                                                                       |
| 01:26:00   | Sounds ridiculous to have done that bonus.                                                              |
| 01:26:03   | It's also purple now.                                                                                   |
| 01:26:04   | So that's a definite win.                                                                               |
| 01:26:06   | And yeah, I like the fact that Find My can say when it was lost, detached from my iPhone                |
| 01:26:10   | or where it was when it was detached.                                                                   |
| 01:26:13   | And that works pretty well for me.                                                                      |
| 01:26:14   | I use Apple Pay most of the time, but it's nice.                                                        |
| 01:26:17   | I just leave the phone in my bag and use Apple Pay on my watch actually most of the time.               |
| 01:26:24   | But then, you know, if I do need a card for some reason or I need my ID to collect parcel               |
| 01:26:28   | or, you know, if I'm buying something and they want to check my ID, then I've got my                    |
| 01:26:33   | ID right there and I don't need to, you know, carry more stuff with me than is necessary,               |
| 01:26:36   | which is great.                                                                                         |
| 01:26:37   | Yeah.                                                                                                   |
| 01:26:38   | So this state of California would allow us to have like a digital driver's license because              |
| 01:26:45   | that's                                                                                                  |
| 01:26:46   | Yeah.                                                                                                   |
| 01:26:47   | Apparently they're coming over here, but I will believe that when I see it because we                   |
| 01:26:49   | frequently get promised these things and it takes forever for them to show up and then                  |
| 01:26:53   | they're not as good as was advertised.                                                                  |
| 01:26:55   | But we do have at the very least COVID passes in our Apple wallet through the NHS application,          |
| 01:27:01   | which I am a great fan of, though you do have to update it on a monthly basis and download              |
| 01:27:05   | a new one.                                                                                              |
| 01:27:06   | Yeah.                                                                                                   |
| 01:27:07   | And that's just stuff that needs to happen that hasn't happened yet, but and I'm still                  |
| 01:27:14   | using my old wallet.                                                                                    |
| 01:27:15   | So if it falls off, I'm not going to have ID information, whatever, but I just really                   |
| 01:27:20   | haven't had a problem.                                                                                  |
| 01:27:21   | I don't need to use my wallet very often and I've got a couple of different ones, but                   |
| 01:27:25   | the [[MagSafe]] one is in the rotation plenty and again, I don't care for the colours, you                   |
| 01:27:31   | know, it's like                                                                                         |
| 01:27:32   | Yeah.                                                                                                   |
| 01:27:33   | And they all are like opinionated colours, even with Syria, like it's not going to work,                 |
| 01:27:40   | is the most neutral of them and it definitely is.                                                       |
| 01:27:43   | It's a very purple colour, David, I have to say, it's a very lilac-y purple colour.                       |
| 01:27:47   | My nails are currently painted light gray and Mike asked me on iOS today whether or                     |
| 01:27:51   | not I painted my nails to match my phone case.                                                          |
| 01:27:53   | No, it just picks up the colour, the phone and my nails both seem to pick up the colour,                  |
| 01:27:58   | but it is very purple colour that we've got at the moment.                                               |
| 01:28:04   | They usually do a colour refresh sort of around spring, but I do wish they'd just check a                |
| 01:28:09   | black in their lineup and keep it as a staple, that'd be good, especially for corporate-issued          |
| 01:28:14   | devices.                                                                                                |
| 01:28:15   | I can imagine corporate issue, yep, here's your black iPhone case with your black iPhone,               |
| 01:28:20   | have a nice day.                                                                                        |
| 01:28:21   | But I like colourful cases, I just don't care for these colours this year.                                |
| 01:28:26   | Yeah.                                                                                                   |
| 01:28:27   | Hopefully more people will be coming out with [[MagSafe]] cases.                                            |
| 01:28:31   | I know Moft recently have come out with some extra-strong magnet case so that their wallet              |
| 01:28:37   | and [[MagSafe]] stand will stick better to the case.                                                        |
| 01:28:40   | I personally have not had a problem with their wallet and stand sticking to the back of my              |
| 01:28:45   | iPhone at all, but for people who really want extra stickiness or extra-magnety goodness                |
| 01:28:52   | rather, then you can do that with Moft, apparently.                                                     |
| 01:28:58   | One last bit on this is one of my big thoughts about this was cinematic mode, would it work             |
| 01:29:05   | or not?                                                                                                 |
| 01:29:06   | I had a particular interest in this because Daisy and I do this supremely unpopular Disneyland          |
| 01:29:13   | field guide.                                                                                            |
| 01:29:14   | I mean, it's like the smallest channel on the internet, but I want it to look good.                     |
| 01:29:20   | I really like the idea of that bokeh blurry background for some parts of these videos                    |
| 01:29:26   | we make so you can put more focus on the person you're talking to.                                      |
| 01:29:31   | In order to do that, I do have a fancy camera and a fancy lens, but they were expensive.                |
| 01:29:37   | I really dread the idea of, first of all, the weight of carrying them around Disneyland                 |
| 01:29:42   | and the idea of them falling out of my bag or just something happening and I would cry                  |
| 01:29:49   | so much if I dropped this camera.                                                                       |
| 01:29:53   | And also, it's not stable at all in terms of shooting video.                                            |
| 01:29:58   | It's very jiggly and you got to do a whole bunch of stuff after the fact to try and get                 |
| 01:30:01   | it more stable or I could buy a $500 gimbal and then I'm walking around Disneyland like                 |
| 01:30:07   | I work for the news or something.                                                                       |
| 01:30:11   | So I don't want any of that stuff, but the cinematic mode, I was hoping it would work                   |
| 01:30:16   | and I went into the park the other day and spent a morning shooting video and I released                |
| 01:30:20   | a video on YouTube for the Max Barking channel with some of that test footage and it looks              |
| 01:30:27   | pretty good to me.                                                                                      |
| 01:30:29   | I know that if you listen to the folks who make their living, making professional video,                |
| 01:30:36   | they're going to tell you everything that's wrong with it and I get that, but when someone              |
| 01:30:41   | who owns a Lamborghini tells you you shouldn't buy a Honda, I get that, but I don't own a               |
| 01:30:48   | Lamborghini and I definitely don't want to drive one around Disneyland.                                 |
| 01:30:51   | So I think this is going to be good enough for getting that style of video and I don't                  |
| 01:30:57   | want to overdo it and make every shot with that blurry background, but when I do want                   |
| 01:31:01   | it now, I've got an option that's in my pocket.                                                         |
| 01:31:04   | Yes, and I think that's the thing, isn't it?                                                            |
| 01:31:08   | Often people talk about getting into photography or videography or things like that.                    |
| 01:31:13   | The trick that they always say is, well, you've got a heavy camera with you, but as you said,           |
| 01:31:17   | they're big and they're heavy and it's not a fun or a pleasant experience to be carrying                |
| 01:31:21   | a big and heavy camera with you when you are just trying to get started.                                |
| 01:31:25   | I think if you just want to be able to take good photos all the times, then having a good               |
| 01:31:33   | phone on your camera is really the best thing or a good camera on your phone is the best                |
| 01:31:39   | thing that you can do.                                                                                  |
| 01:31:40   | A phone on your camera is probably also okay, but I don't know.                                         |
| 01:31:45   | Those cannons look pretty heavy to me and I must do the Nikons.                                         |
| 01:31:49   | I think you could make the argument the iPhone at this point is a good phone on a camera.               |
| 01:31:54   | Yeah, it is mostly camera and screen with a little bit of phone chucked in there because                |
| 01:31:58   | that was what is in the name.                                                                           |
| 01:32:01   | Very occasionally people make actual phone calls, but yeah, it is especially optical                    |
| 01:32:07   | image stabilisation on every single lens.                                                               |
| 01:32:09   | That makes a big difference and yeah, [[Jason Snell]] actually over at Six Colours wrote a                   |
| 01:32:15   | really good guide on upgrading from what you're actually going to get if you're upgrading               |
| 01:32:21   | from an older phone to the 13 and what the differences are.                                             |
| 01:32:25   | Is it bigger?                                                                                           |
| 01:32:26   | It's heavier in every single case, I believe, but you're going to get two extra camera lenses           |
| 01:32:32   | and you're going from 8 megapixels to 12 megapixels or whatever it is.                                  |
| 01:32:38   | That really helps put it in perspective for people who haven't upgraded for a while.                    |
| 01:32:43   | This really is an excellent phone and now they've sorted out the battery issues with                    |
| 01:32:48   | the 13s.                                                                                                |
| 01:32:50   | In general, all the 13 range has better battery life than the 12 range.                                 |
| 01:32:54   | It's impressive.                                                                                        |
| 01:32:55   | I'm genuinely impressed.                                                                                |
| 01:32:57   | I have gone David for two days without charging my phone.                                               |
| 01:33:00   | I couldn't have done half a day without charging my phone on the mini, so that is just brilliant.       |
| 01:33:05   | Yeah.                                                                                                   |
| 01:33:06   | Well, I can tell you that when I did that morning of test shooting at Disneyland, I wiped out           |
| 01:33:11   | the battery in that thing in six hours because I was walking around with the camera running             |
| 01:33:16   | like the whole time, but that would kill the battery in any phone, even the Pro Max.                    |
| 01:33:23   | So it's all good, but I really think that Apple is on the right track.                                  |
| 01:33:28   | I mean, they just make good iPhones.                                                                    |
| 01:33:30   | I mean, every year they make good iPhones.                                                              |
| 01:33:31   | It's really not a surprise.                                                                             |
| 01:33:33   | No.                                                                                                     |
| 01:33:34   | No.                                                                                                     |
| 01:33:35   | And it is a fabulous device.                                                                            |
| 01:33:38   | I'm using these to make shortcuts more frequently than ever, I have to say, just because it's           |
| 01:33:44   | especially the NFC automation.                                                                          |
| 01:33:47   | I never mentioned it before because I figured maybe I was holding it wrong, but I think                 |
| 01:33:51   | maybe it's a combination of the mini size and perhaps maybe the case I was using it                     |
| 01:33:57   | was just not reading NFC tags quite so well, but I'm pleased to say that the Pro that I'm               |
| 01:34:02   | currently using has no problem with it at all.                                                          |
| 01:34:05   | Yeah.                                                                                                   |
| 01:34:06   | And I did, and last thing on the camera here is the stabilisation.                                      |
| 01:34:11   | It is insane.                                                                                           |
| 01:34:12   | The video, I'll put the link in the show notes, but I'm walking around Disneyland walking               |
| 01:34:18   | kind of fast through a crowd, not doing anything to stay like stable, and the footage looks             |
| 01:34:24   | like it's on a gimbal.                                                                                  |
| 01:34:26   | I had several people email me since that video went up asking me to do a test versus                    |
| 01:34:31   | a gimbal, and I'm tempted to order a gimbal just to run a test to see.                                  |
| 01:34:36   | Oh, I have a recommendation for you there, David, which I can put in the show notes.                    |
| 01:34:40   | I think it's from Hohem H-O-H-E-M.                                                                      |
| 01:34:45   | It's pretty nice.                                                                                       |
| 01:34:46   | The footage is via USB-C, there's an app for the iPhone where you can set it up, and so                 |
| 01:34:51   | you can actually, there's a pan and tilt option on the gimbal that you can use, but I'm pretty          |
| 01:34:56   | pleased with mine.                                                                                      |
| 01:34:57   | I'll see if I can get you a link that works in the US as well, because frequently these                 |
| 01:35:01   | things have different links in different countries.                                                     |
| 01:35:03   | Yeah.                                                                                                   |
| 01:35:04   | Well, definitely.                                                                                       |
| 01:35:05   | I'll check it out, but I don't know if I'm even going to do it because it's like, it's                  |
| 01:35:10   | already good enough, I think, I mean, I'd be shocked if adding a gimbal and having one                  |
| 01:35:15   | more thing to carry is worth the trouble, but who knows, we'll see.                                     |
| 01:35:20   | All right.                                                                                              |
| 01:35:21   | Well, either way, it sounds like we're both pretty happy, and Apple got some of our money,              |
| 01:35:26   | so they should be happy too.                                                                            |
| 01:35:28   | Got some automation today covered, we've got some new gear.                                             |
| 01:35:31   | Well, I sure am looking forward to M1X.                                                                 |
| 01:35:34   | I hope that we get news on that sometime in October, but I guess we'll see.                             |
| 01:35:40   | Real quick check-in, we've got another beta update with shortcuts, or the Mac Monterey,                 |
| 01:35:47   | and shortcuts is a little better.                                                                       |
| 01:35:48   | I feel like in the last episode, we were pretty rough on it.                                            |
| 01:35:51   | They are definitely making progress.                                                                    |
| 01:35:53   | There's still things to be done, but I'm holding my, crossing my fingers that the things will           |
| 01:35:59   | be in a much cleaner position by the time Monterey ships to the public, but I'm still                   |
| 01:36:06   | struggling to get videos recorded for the Shortcuts for Mac field guide because so many                 |
| 01:36:11   | of the things I want to show aren't working.                                                            |
| 01:36:13   | Yeah.                                                                                                   |
| 01:36:14   | Yeah.                                                                                                   |
| 01:36:15   | Well, fingers crossed, everything gets straightened out recently, but I know the Shortcuts team         |
| 01:36:17   | have been working hard, I can tell, so yeah, it seems to be paying off slowly, but surely,              |
| 01:36:23   | and that is always a great sign.                                                                        |
| 01:36:25   | Either way, we are the Automators, you can find us at relay.fm/automaters.                        |
| 01:36:29   | You can find the forums at [talk.automators.fm](https://talk.automators.fm).                                                          |
| 01:36:33   | We want to thank our sponsors today, Privacy, TextExpander, and Stripe, and we'll see you               |
| 01:36:38   | next time.                                                                                              |
| 01:36:39   | Goodbye, everyone.                                                                                      |
